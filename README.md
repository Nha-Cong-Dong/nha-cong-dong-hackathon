# Nhà cộng đồng Hackathon

Hackathon nội bộ 4 tuần: học Claude, Claude Code và vibe coding, rồi tự build một sản phẩm từ ý tưởng đến demo. Repo này là nơi mọi người nộp report mỗi tuần.

## Lịch checkpoint

Hạn nộp mọi checkpoint là **trước 19:00 Chủ nhật** của tuần đó (giờ Việt Nam, UTC+7).

| Checkpoint | Nội dung | Hạn nộp | Template |
| --- | --- | --- | --- |
| 1 | Đã học được gì về Claude, Claude Code, Vibe Coding + ý tưởng sản phẩm | CN 18/10/2026 | [report/week-1.md](report/week-1.md) |
| 2 | Chốt spec và dựng khung dự án | CN 25/10/2026 | [report/week-2.md](report/week-2.md) |
| 3 | Build MVP | CN 01/11/2026 | [report/week-3.md](report/week-3.md) |
| 4 | Hoàn thiện, deploy và demo | CN 08/11/2026 | [report/week-4.md](report/week-4.md) |

## Luật nộp report

1. Mỗi người có **một nhánh riêng** tên `member/<github-username>` (ví dụ `member/hoanghero125`), tạo từ `main`.
2. Giữ nhánh đó suốt hackathon. **Không merge, không mở Pull Request** vào `main`.
3. Mỗi tuần, điền file `report/week-N.md` của tuần đó ngay trên nhánh của mình rồi push. Template chỉ có các tiêu đề, nội dung bên dưới bạn tự viết.
4. **Report phải tự viết, không dùng AI để viết.**
5. Report **đúng hạn** khi bản đã push lên nhánh trước 19:00 CN khác template gốc. Push sau giờ đó vẫn được nhận nhưng tính là **nộp trễ**.
6. Chỉ sửa file trong `report/` trên nhánh của mình. Không push vào `main` hay nhánh của người khác.

## Cách nộp

Lần đầu:

```bash
git clone https://github.com/Nha-Cong-Dong/nha-cong-dong-hackathon.git
cd nha-cong-dong-hackathon
git switch -c member/<github-username>
# điền report/week-1.md
git add report/
git commit -m "report: checkpoint 1"
git push -u origin member/<github-username>
```

Các tuần sau: `git switch member/<github-username>`, điền file của tuần, rồi `git add`, `git commit`, `git push`.

Không quen git? Trên GitHub, chọn nhánh của bạn ở ô chọn nhánh, mở file `report/week-N.md`, bấm biểu tượng bút để sửa rồi commit thẳng vào nhánh đó.

## Bot kiểm tra hạn nộp

Workflow [checkpoint-check.yml](.github/workflows/checkpoint-check.yml) tự chạy lúc 19:10 tối Chủ nhật. Bot duyệt mọi nhánh `member/*`, so file của tuần đó với template trên `main`, rồi mở issue **"Checkpoint N — tổng kết nộp report"** ghi rõ ai đúng hạn, nộp trễ hay chưa nộp. BTC nhận xét cho từng người bằng comment trong issue đó.

- Bot xét theo mốc 19:00, nên GitHub có chạy lịch trễ vài phút thì kết quả vẫn đúng.
- Bot dựa vào thời gian commit, nên đừng chỉnh giờ máy hay sửa ngày commit.
- Chạy lại bất cứ lúc nào: tab **Actions** → **Kiểm tra hạn nộp report** → **Run workflow** → chọn checkpoint. Issue cũ được cập nhật, không tạo trùng.

## Cấu trúc repo

```
.
├── README.md
├── report/
│   ├── week-1.md
│   ├── week-2.md
│   ├── week-3.md
│   └── week-4.md
└── .github/
    ├── CODEOWNERS
    ├── scripts/checkpoint-check.js
    └── workflows/checkpoint-check.yml
```

## Dành cho BTC

1. **Thêm thành viên:** Settings → Collaborators and teams → thêm từng người với quyền **Write** để họ push được nhánh riêng.
2. **Bảo vệ `main`:** Settings → Branches → Add classic branch protection rule, Branch name pattern `main`, bật **Require a pull request before merging** và **Require review from Code Owners**. Từ đó mọi thay đổi vào `main` phải qua PR và được @hoanghero125 duyệt (khai báo trong [CODEOWNERS](.github/CODEOWNERS)).
3. **Cho phép Actions:** Settings → Actions → General → chọn cho phép chạy actions, để bot chạy được.
4. **Đổi lịch:** sửa mảng `CHECKPOINTS` trong [checkpoint-check.js](.github/scripts/checkpoint-check.js), bảng lịch ở trên và dòng hạn nộp trong từng template.
