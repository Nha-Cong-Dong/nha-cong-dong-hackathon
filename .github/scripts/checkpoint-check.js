// Bot kiểm tra hạn nộp report. Được gọi từ .github/workflows/checkpoint-check.yml.
// Đổi lịch hackathon: sửa mảng CHECKPOINTS bên dưới (và bảng lịch trong README).
// Thêm/bớt thành viên: sửa MEMBERS bên dưới (và bảng thành viên trong README).

const TEMPLATE_BRANCH = 'main';
const BRANCH_PREFIX = 'member/';
// Tên nhánh (sau member/) → họ tên và username GitHub.
const MEMBERS = {
  dungtkm: { name: 'Trần Kiều Minh Dũng', github: 'martlnz' },
  hoannv: { name: 'Nguyễn Viết Hoàn', github: 'VietHoan225' },
  bachvt: { name: 'Vương Trí Bách', github: 'definitely-not-BachVT' },
  khanhnq: { name: 'Nguyễn Quốc Khánh', github: 'NgQKhanh2906' },
  trieuht: { name: 'Hà Tiến Triệu', github: 'trieuwu' },
  tungnh: { name: 'Nguyễn Hoàng Tùng', github: 'Luffyreals' },
  maitn: { name: 'Trần Ngọc Mai', github: 'tngocjm' },
  anhdtv: { name: 'Đỗ Thị Vân Anh', github: 'vananh-bot' },
};
const REVIEW_HEADING = '## Nhận xét của Hoàng Đỗ';
const CHECKPOINTS = [
  { week: 1, file: 'report/week-1.md', deadline: '2026-10-18T19:00:00+07:00' },
  { week: 2, file: 'report/week-2.md', deadline: '2026-10-25T19:00:00+07:00' },
  { week: 3, file: 'report/week-3.md', deadline: '2026-11-01T19:00:00+07:00' },
  { week: 4, file: 'report/week-4.md', deadline: '2026-11-08T19:00:00+07:00' },
];
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Chạy tay: dùng tuần được chọn. Chạy theo lịch: lấy checkpoint vừa hết hạn trong 24 giờ qua.
function pickCheckpoint(weekInput, now) {
  if (weekInput) return CHECKPOINTS.find((c) => c.week === Number(weekInput));
  return CHECKPOINTS.find((c) => {
    const passedMs = now - new Date(c.deadline);
    return passedMs >= 0 && passedMs < ONE_DAY_MS;
  });
}

function formatVN(date) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Ho_Chi_Minh',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
    day: '2-digit', month: '2-digit', year: 'numeric',
  }).formatToParts(new Date(date));
  const p = Object.fromEntries(parts.map((x) => [x.type, x.value]));
  return `${p.hour}:${p.minute} ${p.day}/${p.month}/${p.year}`;
}

// Bỏ mục nhận xét của Hoàng Đỗ, để nhận xét không bị tính là thành viên đã nộp.
const normalize = (text) => text.replace(/\r\n/g, '\n').split(REVIEW_HEADING)[0].trim();

async function readFile(github, owner, repo, path, ref) {
  try {
    const { data } = await github.rest.repos.getContent({ owner, repo, path, ref });
    return Buffer.from(data.content, 'base64').toString('utf8');
  } catch (err) {
    if (err.status === 404) return null;
    throw err;
  }
}

// Đúng hạn: bản trên nhánh tại thời điểm hết hạn đã khác template.
// Nộp trễ: tại hạn chưa khác template, nhưng bản hiện tại đã khác.
async function checkMember(github, owner, repo, branch, cp, template) {
  const filled = (text) => text !== null && normalize(text) !== template;

  const { data: beforeDeadline } = await github.rest.repos.listCommits({
    owner, repo, sha: branch.name, until: new Date(cp.deadline).toISOString(), per_page: 1,
  });
  const atDeadline = beforeDeadline.length
    ? await readFile(github, owner, repo, cp.file, beforeDeadline[0].sha)
    : null;
  const current = await readFile(github, owner, repo, cp.file, branch.commit.sha);

  let status = 'Chưa nộp';
  if (filled(atDeadline)) status = 'Đúng hạn';
  else if (filled(current)) status = 'Nộp trễ';

  let lastUpdate = null;
  if (status !== 'Chưa nộp') {
    const { data: fileCommits } = await github.rest.repos.listCommits({
      owner, repo, sha: branch.name, path: cp.file, per_page: 1,
    });
    if (fileCommits.length) lastUpdate = fileCommits[0].commit.committer.date;
  }

  return { status, lastUpdate };
}

function buildBody(cp, results, unknownBranches, serverUrl, owner, repo, now) {
  const count = (s) => results.filter((r) => r.status === s).length;
  const rows = results.map((r) => {
    const link = `[xem](${serverUrl}/${owner}/${repo}/blob/${r.branch}/${cp.file})`;
    const updated = r.lastUpdate ? formatVN(r.lastUpdate) : '—';
    const status = r.noBranch ? 'Chưa nộp (chưa tạo nhánh)' : r.status;
    return `| ${r.name} (@${r.username}) | \`${r.branch}\` | ${status} | ${updated} | ${r.status === 'Chưa nộp' ? '—' : link} |`;
  });

  return [
    `**Hạn nộp:** ${formatVN(cp.deadline)} (giờ VN) · **File:** \`${cp.file}\``,
    `**Kiểm tra lúc:** ${formatVN(now)}`,
    '',
    '| Thành viên | Nhánh | Trạng thái | Cập nhật lần cuối | Report |',
    '| --- | --- | --- | --- | --- |',
    ...rows,
    '',
    `**Đúng hạn:** ${count('Đúng hạn')} · **Nộp trễ:** ${count('Nộp trễ')} · **Chưa nộp:** ${count('Chưa nộp')}`,
    '',
    ...(unknownBranches.length
      ? [`Nhánh không có trong danh sách thành viên (có thể đặt sai tên): ${unknownBranches.map((b) => `\`${b}\``).join(', ')}`, '']
      : []),
    `Hoàng Đỗ viết nhận xét vào mục "Nhận xét của Hoàng Đỗ" trong file report trên nhánh của từng người.`,
  ].join('\n');
}

module.exports = async ({ github, context, core, weekInput, now = new Date() }) => {
  const cp = pickCheckpoint(weekInput, now);
  if (!cp) {
    core.info('Không có checkpoint nào vừa hết hạn, bỏ qua.');
    return;
  }

  const { owner, repo } = context.repo;
  const template = normalize(await readFile(github, owner, repo, cp.file, TEMPLATE_BRANCH));

  const branches = (await github.paginate(github.rest.repos.listBranches, { owner, repo, per_page: 100 }))
    .filter((b) => b.name.startsWith(BRANCH_PREFIX));
  const byName = new Map(branches.map((b) => [b.name, b]));

  const results = [];
  for (const [id, { name, github: username }] of Object.entries(MEMBERS)) {
    const branchName = BRANCH_PREFIX + id;
    const branch = byName.get(branchName);
    const result = branch
      ? await checkMember(github, owner, repo, branch, cp, template)
      : { status: 'Chưa nộp', lastUpdate: null, noBranch: true };
    results.push({ name, username, branch: branchName, ...result });
  }
  const unknownBranches = branches
    .map((b) => b.name)
    .filter((n) => !Object.hasOwn(MEMBERS, n.slice(BRANCH_PREFIX.length)));

  const title = `Checkpoint ${cp.week} — tổng kết nộp report`;
  const body = buildBody(cp, results, unknownBranches, context.serverUrl, owner, repo, now);

  const issues = await github.paginate(github.rest.issues.listForRepo, {
    owner, repo, state: 'all', creator: 'github-actions[bot]', per_page: 100,
  });
  const existing = issues.find((i) => i.title === title && !i.pull_request);

  if (existing) {
    await github.rest.issues.update({ owner, repo, issue_number: existing.number, body });
    core.info(`Đã cập nhật issue #${existing.number}`);
  } else {
    const { data } = await github.rest.issues.create({ owner, repo, title, body });
    core.info(`Đã tạo issue #${data.number}`);
  }
};
