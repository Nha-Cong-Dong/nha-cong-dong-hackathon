# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Hoàng Tùng |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport |
| **Ý tưởng** | Công cụ truyền file dung lượng lớn và đồng bộ bộ nhớ tạm trực tiếp giữa các thiết bị trong cùng mạng Wi-Fi/LAN |

---

## Kết quả so với kế hoạch tuần trước
- Đã hoàn thành giai đoạn 0 và giai đoạn 1 cho MVP, đang triển khai giai đoạn 2. Đánh giá MVP được 1/3.
- Chuẩn bị đầy đủ spec và dựng khung dự án: y_tuong, mvp, ke_hoach, architeture, protocol và phân tầng core <- trust <- net <- app, có test kiểm tra.
- Hỏi lại claude trước khi triển khai lên kế hoạch, chốt sau đó mới code.
- Các skill của claude đã dùng được nhiều, tự cài skill thiết kế trên repo github cho claude
- Nắm được thiết kế kiến trúc trước khi code.
## Tự nhận xét
- Chú tâm cho dự án, nắm được các khái niệm về spec và các lệnh slash, npm, npx.
- Đang điều phối claude làm việc chứ chưa hiểu sâu được kiến thức dự án
- Cần bổ sung kiến thức về hạ tầng, mạng, bảo mật để hiểu dự án.
- Chưa biết cách tối ưu token (đã dùng hơn 3 tỉ token).

## Kế hoạch tuần tới
- Hoàn thành bản MVP.
- Cố gắng hiểu sâu hơn về kiến thức của dự án.
- Học thêm cách tối ưu token và tăng tốc độ chạy sub agents.

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo zero-cloud-lan-teleport](https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Đối chiếu kế hoạch tuần 1: đã xong giai đoạn 0 và 1 (ghép đôi, tìm thiết bị qua mDNS, kết nối mTLS chạy qua CLI), đã hỏi Claude lên kế hoạch trước khi code và đã cài skill thiết kế. "MVP được 1/3" cụ thể hơn tuần trước, nhưng report chưa nói 3 phần đó là gì.
- Code review chạy được ghép đôi giữa hai tiến trình, 6.155 test pass, CI chạy 3 hệ điều hành; các thử tấn công vào `teleport listen` đều bị chặn. Phần lõi bảo mật đang chắc.
- Vấn đề lớn nhất là làm chủ code: trong khoảng 9 ngày repo có 11,7 nghìn dòng code và 40 nghìn dòng test; PR #23 (+4.271 dòng) được merge 17 phút sau commit cuối. Gợi ý tuần 1 "tự viết lại mỗi tầng bằng lời của mình" chưa làm. Tuần này thử làm cho 2 tầng `core` và `trust`, mỗi tầng 5–10 dòng trong docs, rồi mới cho Claude làm tiếp.
- MVP cho hackathon chưa được chốt: `docs/mvp.md` coi MVP là v1.0 với lộ trình khoảng 15 tuần, và tại hạn chưa có lệnh gửi/nhận file. Hackathon chỉ còn 2 tuần, nên chốt MVP là gửi file lớn qua CLI và nối lại khi rớt mạng. Sau hạn bạn đã làm được gửi/nhận và nối lại, đúng hướng này.
- Kế hoạch tuần 3 lại là "Hoàn thành bản MVP", "hiểu sâu hơn", "tối ưu token", lần thứ hai chưa đo được. Viết lại thành việc kiểm chứng được, ví dụ "gửi file 10 GB giữa 2 máy thật, rút dây mạng giữa chừng vẫn gửi tiếp", "tự giải thích được luồng ghép đôi".
- Hơn 3 tỉ token và pipeline 6–8 subagent cho mỗi tính năng là chi phí rất lớn so với nhu cầu demo. Giảm số agent và chia PR nhỏ để bạn đọc được trước khi merge; đó cũng là cách học phần mạng và bảo mật mà bạn tự nhận còn thiếu.
- Tự nhận xét "đang điều phối Claude chứ chưa hiểu sâu" rất thẳng thắn, và đây đúng là điểm cần ưu tiên trong 2 tuần còn lại.
