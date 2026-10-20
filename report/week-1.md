# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Hoàng Tùng |
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp** | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport |
| **Ý tưởng** | Công cụ truyền file dung lượng lớn và đồng bộ bộ nhớ tạm trực tiếp giữa các thiết bị trong cùng mạng Wi-Fi/LAN|

---

## Đã làm được gì trong tuần
- Tìm hiểu được các loại mô hình của Claude: Haiku, Sonnet, Opus, Fable và các chức năng chat, cowork, code.
- Hiểu cơ chế hoạt động của Claude Code: Claude đọc code trong dự án, tạo CLAUDE.md để lưu context, hiểu code base, lên kế hoạch, viết code, tạo sub-agent, kiểm tra, chạy lệnh test, sửa lỗi, kiểm thử, kết nối với git, Docker
- Tìm hiểu cách để vibe coding hiệu quả
- Chốt ý tưởng sản phẩm và tạo repo sản phẩm
## Tự nhận xét
- Hiểu được cách vận hành của Claude code và Vibe coding
- Nhiều khái niệm nắm chưa rõ, chưa hiểu được code sau khi Claude viết

## Kế hoạch tuần tới
- Bắt đầu triển khai hoàn thành MVP sản phẩm
- Học thêm cách prompt và thiết kế kiến trúc trước khi code
- Tìm hiểu các chức năng của Claude: skills, design,...
## Nhận xét của Hoàng Đỗ

- Ý tưởng Teleport rõ và có điểm khác biệt: không cloud, không tài khoản, rớt mạng vẫn gửi tiếp.
- Repo dựng nhanh và gọn: README đầy đủ, CI, `docs/architecture.md`, `docs/protocol.md`, `docs/SECURITY.md`, kiến trúc phân tầng core ← trust ← net ← app ← ui/cli với core sans-IO và mTLS.
- Bạn tự nhận "chưa hiểu được code sau khi Claude viết", trong khi kiến trúc hiện khá nặng (sans-IO, mTLS, nhiều tầng). Đây là rủi ro lớn nhất. Gợi ý với mỗi tầng, nhờ Claude giải thích rồi tự viết lại vài dòng bằng lời của bạn vào docs; hiểu rồi mới để Claude làm tiếp.
- Roadmap trong README có 4 mốc: v0.1 (khám phá, ghép đôi, gửi file lớn qua dòng lệnh), v0.2 (kiểm tra toàn vẹn, tự nối lại), v0.3 (giao diện radar, khay hệ thống, hai ngôn ngữ), v0.4 (clipboard). Gợi ý MVP của hackathon là v0.1 + v0.2 qua dòng lệnh, đủ để demo; giao diện và clipboard để sau.
- Kế hoạch tuần tới "Bắt đầu triển khai hoàn thành MVP" chưa đo được. Repo đã có khung, nên tuần 2 bạn chốt spec cho phạm vi MVP và viết thành đầu việc cụ thể, ví dụ "hai máy trong LAN tìm thấy nhau", "gửi được 1 file qua CLI".
- Phần Claude Code bạn nắm khá đủ cơ chế (CLAUDE.md, subagent, chạy test, git); phần vibe coding mới ghi "tìm hiểu cách vibe coding hiệu quả". Tuần sau nêu cụ thể bạn áp dụng điều gì.
- Bảng thông tin chưa điền Tên.
