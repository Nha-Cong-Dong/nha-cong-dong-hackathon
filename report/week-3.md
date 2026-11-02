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

- Đã hoàn thành phần code cho các tính năng cốt lõi của MVP, clipboard mới có lõi chứ chưa có giao diện. Có thể chạy trọn vẹ luồng truyền file từ đầu đến cuối. Cụ thể luồng hoạt động: Máy A bật listen -> Máy B gọi pair và 2 máy xác nhận mã 6 số -> Máy A gửi 1 file -> Máy B nhận từng khối, lưu vào thư mục ẩn .teleport, hash khớp toàn vẹn vè đổi tên file thành công. 
- Chạy thử qua 2 máy 1 lần để đánh giá hiệu năng và truyền file. Tốc độ chạy thử gần bằng SMB, file nhận chính xác không có lỗi.
- Đã bỏ bớt sub-agent không cần thiết và tối ưu token tiêu thụ khi làm việc bằng cách chia nhỏ task và session.
- Tối ưu thời gian chạy test (giảm 3/4 thời gian) nhờ chạy song song.
- Đã bổ sung đầy đủ hướng dẫn cài đặt và chạy sản phẩm vào file `README.md` để người khác có thể tự chạy và test được luồng chính của sản phẩm.

## Tự nhận xét
- Đã hiểu rõ hơn về dự án, nắm được kiến trúc hệ thống của các tầng core, trust, net, app, ui/cli. 
- Nắm được kế hoạch và luồng xử lý trước khi giao việc cho agent bắt đầu viết code.
- Tối ưu token và ngữ cảnh, số lượng token tiêu thụ mỗi phiên giảm 1/2 so với tuần trước.
- Vẫn chưa có thiết bị để đo hiệu năng thực tế.
- Phần logic về test kiểm tra vẫn chưa nắm rõ.
- Dùng Claude code hiệu quả hơn: lên kế hoạch spec kĩ trước khi code, chia nhỏ các task để tối ưu ngữ cảnh và tăng tốc độ xử lý song song, hỏi lại, trình bày ý hiểu trước khi làm.

## Kế hoạch tuần tới
- Đánh giá hiệu năng, bổ sung các thông số cho benchmark.
- Fix bug và kiểm thử luồng hoạt động trơn tru (như rớt mạng, dừng đột ngột)
- Hoàn thiện giao diện và trải nghiệm người dùng.
- Bổ sung kiến thức sâu hơn về các phần khác trong dự án như giấy phép, test, CI GitHub.
- Kiểm soát Claude tốt hơn: đảm bảo chất lượng đầu ra, quản lý lượng token tiêu thụ, sử dụng thêm các plugin thiết kế giao diện và chuẩn hóa setup Claude cho mỗi dự án mới.
- Đóng gói, hoàn thiện và demo sản phẩm.
## Nhận xét của Hoàng Đỗ

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo zero-cloud-lan-teleport](https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2: MVP đã chạy trọn luồng truyền file. Code review tự chạy lại bằng CLI: ghép đôi bằng mã 6 số, gửi file, kill bên nhận giữa chừng rồi chạy tiếp, gửi tên file độc. Tất cả đều đúng. Bạn còn đã chuyển thử 1,89 GiB giữa hai máy Windows thật.
- Với mục "hiểu sâu hơn về dự án", bạn đã tự viết phần giải thích các tầng trong `docs/hieu_du_an.md`. Đây là tiến bộ thật so với tuần 2. Có một chỗ chưa đúng: dòng 71 ghi hai máy đều ký. Thực ra chỉ máy khởi xướng ký, còn máy kia chứng minh qua bắt tay TLS. Trước demo, bạn thử tự lần luồng "bấm Nhận" từ tầng `ui` xuống tới `net`.
- Tốc độ sinh code vẫn vượt khả năng đọc:
  - `src/` tăng từ 11,7 lên 46,3 nghìn dòng trong một tuần, qua 69 PR.
  - PR #39 (+6.158 dòng) merge sau 20 phút, PR #89 (+8.192 dòng) merge sau 41 phút.
  - File lớn tiếp tục phình: `cli.py` 3.006 dòng, `storage.py` 3.504 dòng.
  
  Gợi ý: với mỗi PR còn lại, bạn tự viết 3 dòng mô tả trước khi merge.
- Scope tiếp tục nở. Tuần này bạn làm trang cài đặt, bộ cài, lịch sử, lõi clipboard và màn lần chạy đầu, toàn những phần `mvp.md` xếp vào "để sau hackathon". Sáng 01/11, PR #91 còn bỏ mốc đóng băng, trong khi `benchmark.md` ghi cả 5 tiêu chí H1–H5 là "chưa đo".
- Kế hoạch tuần 4 đúng hướng ở phần benchmark và thử rớt mạng, dừng đột ngột. Nhưng vẫn còn "hoàn thiện giao diện" và "plugin thiết kế". Máy mượn chỉ có vài ngày (02, 06–08/11), nên đặt lại mốc đóng băng ngay sau buổi đo đầu tiên và chỉ sửa lỗi tìm được trên máy thật.
- Report có hai chỗ chưa sát:
  - "Đã bỏ bớt sub-agent": thực tế mới bỏ 1 agent (`tom-tat`), repo còn 10 agent.
  - "File nhận chính xác": app có tự kiểm hash, nhưng `benchmark.md` ghi chưa so SHA-256 ở hai máy.
  
  Ngược lại, report gần như không nhắc phần giao diện (17,5 nghìn dòng `ui`), bộ cài Inno Setup và chế độ ẩn.
- Phần nhận file làm chắc: tên file nguy hiểm được làm sạch, không ghi đè file có sẵn, máy chưa ghép đôi bị từ chối ngay lúc bắt tay. Test chạy song song giảm 3/4 thời gian, đúng như report nói.
- Bạn tự nhận "phần logic về test vẫn chưa nắm rõ". Code review thấy có test so nguyên chuỗi stylesheet, và Qt từng abort trên Windows khi chạy chung bộ mà chưa rõ nguyên nhân. Với hơn 14.000 test, nên dành thời gian hiểu và tỉa bớt các test kiểu này.
