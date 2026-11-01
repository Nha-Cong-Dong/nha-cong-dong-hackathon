# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Hoàng Tùng |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport |
| **Ý tưởng** | Công cụ truyền file dung lượng lớn và đồng bộ bộ nhớ tạm trực tiếp giữa các thiết bị trong cùng mạng Wi-Fi/LAN |

---

## Kết quả so với kế hoạch tuần trước

- Đã hoàn thành phần code cho các tính năng cốt lõi của MVP, clipboard mới có lõi chứ chưa có giao diện.
- Chạy thử qua 2 máy 1 lần để đánh giá hiệu năng và truyền file. Tốc độ chạy thử gần bằng SMB, file nhận chính xác không có lỗi.
- Đã bỏ bớt sub-agent không cần thiết và tối ưu token tiêu thụ khi làm việc bằng cách chia nhỏ task và session.
- Tối ưu thời gian chạy test (giảm 3/4 thời gian) nhờ chạy song song.

## Tự nhận xét
- Đã hiểu rõ hơn về dự án, nắm được kiến trúc hệ thống của các tầng core, trust, net, app, ui/cli. 
- Nắm được kế hoạch khi agent bắt đầu thực hiện code.
- Tối ưu token và ngữ cảnh, số lượng token tiêu thụ mỗi phiên giảm 1/2 so với tuần trước.
- Vẫn chưa có thiết bị để đo hiệu năng thực tế.
- Phần logic về test kiểm tra vẫn chưa nắm rõ.
- Dùng Claude code hiệu quả hơn: lên kế hoạch spec kĩ trước khi code, chia nhỏ các task để tối ưu ngữ cảnh và tăng tốc độ xử lý song song, hỏi lại, trình bày ý hiểu trước khi làm.
## Kế hoạch tuần tới
- Đánh giá hiệu năng, bổ sung các thông số cho benchmark.
- Fix bug và kiểm thử luồng hoạt động trơn tru.
- Hoàn thiện giao diện và trải nghiệm người dùng.
- Bổ sung kiến thức sâu hơn về các phần khác trong dự án như giấy phép, test, CI GitHub.
- Kiểm soát Claude tốt hơn: đảm bảo đầu ra, lượng token tiêu thụ, sử dụng các plugin thiết kế giao diện và setup Claude cho mỗi dự án.
- Đóng gói, hoàn thiện và demo sản phẩm.
## Nhận xét của Hoàng Đỗ


