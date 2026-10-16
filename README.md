# Nhà cộng đồng Hackathon

Chào mừng bạn đến với Nhà cộng đồng Hackathon. Trong 4 tuần, bạn sẽ học Claude, Claude Code và vibe coding, rồi tự build một sản phẩm từ ý tưởng đến demo. Mỗi tuần bạn nộp một report vào repo này.

## Lịch checkpoint

Hạn nộp mọi checkpoint là **trước 19:00 Chủ nhật** của tuần đó (giờ Việt Nam).

| Tuần | Nội dung | Hạn nộp | Template |
| --- | --- | --- | --- |
| 1 | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build | CN 18/10/2026 | [report/week-1.md](report/week-1.md) |
| 2 | Chốt spec và dựng khung dự án | CN 25/10/2026 | [report/week-2.md](report/week-2.md) |
| 3 | Build MVP | CN 01/11/2026 | [report/week-3.md](report/week-3.md) |
| 4 | Hoàn thiện, deploy và demo | CN 08/11/2026 | [report/week-4.md](report/week-4.md) |

## Viết report

Đầu mỗi report là bảng thông tin. Bạn điền **Tên** và **Link repo sản phẩm** (tuần 1 chưa có repo thì để trống). Sau đó viết các mục bên dưới:

| Tuần | Các mục |
| --- | --- |
| 1 | Đã làm được gì trong tuần · Tự nhận xét · Kế hoạch tuần tới |
| 2, 3 | Kết quả so với kế hoạch tuần trước · Tự nhận xét · Kế hoạch tuần tới |
| 4 | Kết quả so với kế hoạch tuần trước · Tự nhận xét quá trình và thành quả · Cảm nghĩ & lời nhắn gửi Hoàng Đỗ |

- **Tự viết, không dùng AI** để viết report.
- Ưu tiên viết dạng **gạch đầu dòng**, ngắn gọn.
- Viết **Kế hoạch tuần tới** thật cụ thể, vì report tuần sau sẽ đối chiếu lại với phần này.
- Mục **Nhận xét của Hoàng Đỗ** ở cuối report tuần 1–3 bạn để trống, Hoàng Đỗ sẽ viết vào.

## Quy định

1. Mỗi người có **một nhánh riêng** tên `member/<github-username>` (ví dụ `member/nguyenvana`), tạo từ `main`.
2. Giữ nhánh đó suốt hackathon. **Không merge, không mở Pull Request** vào `main`.
3. Chỉ sửa file report trên nhánh của mình. Không push vào `main` hay nhánh của người khác, không sửa mục **Nhận xét của Hoàng Đỗ**.
4. Report **đúng hạn** khi bạn đã push lên nhánh trước 19:00 Chủ nhật. Push sau giờ đó vẫn được nhận nhưng tính là **nộp trễ**.

## Cách nộp

**Lần đầu**

```bash
git clone https://github.com/Nha-Cong-Dong/nha-cong-dong-hackathon.git
cd nha-cong-dong-hackathon
git switch -c member/<github-username>
# viết report/week-1.md
git add report/
git commit -m "report: tuần 1"
git push -u origin member/<github-username>
```

**Các tuần sau**

```bash
git switch member/<github-username>
git pull                      # lấy nhận xét của Hoàng Đỗ nếu có
# viết report/week-N.md
git add report/
git commit -m "report: tuần N"
git push
```

**Không dùng git?** Làm trực tiếp trên GitHub:

1. Lần đầu: bấm ô chọn nhánh (đang ghi `main`), gõ `member/<github-username>` rồi chọn **Create branch … from main**.
2. Chọn đúng nhánh của bạn, mở file `report/week-N.md`, bấm biểu tượng bút để sửa.
3. Bấm **Commit changes** và chọn commit thẳng vào nhánh của bạn.

## Kiểm tra nộp bài

Sau 19:00 mỗi Chủ nhật, bot tự kiểm tra mọi nhánh `member/*` và đăng kết quả trong tab **Issues**, tiêu đề **"Checkpoint N — tổng kết nộp report"**. Mỗi người có một dòng: đúng hạn, nộp trễ hoặc chưa nộp.

Bot tính theo thời gian commit, nên đừng chỉnh giờ máy hay sửa ngày commit.

Có thắc mắc gì, bạn liên hệ Hoàng Đỗ ([@hoanghero125](https://github.com/hoanghero125)).
