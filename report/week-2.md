# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------- |
| **Tên**                | Vương Trí Bách                                                                          |
| **Tuần**               | 2                                                                                       |
| **Nội dung**           | Chốt spec và dựng khung dự án                                                           |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN)                                                |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.     |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/DailyDiary                                             |
| **Ý tưởng**            | Nhật ký trực quan hàng ngày với tính năng Year in Pixels, dòng thời gian và ảnh kỷ niệm |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 1: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

**Xong**
- Đã tạo Design System cùng với giao diện UI cho từng trang của web app.
- Đã hoàn thiện tất cả các tính năng của sản phẩm.

**Chưa xong**
- Chưa deploy lên web như dự định của tuần trước. Lí do: Để deploy cần tìm hiểu nhiều kiến thức hơn tôi nghĩ lúc đầu.
- Google OAuth đang ở chế độ Testing, chưa mở cho tất cả mọi người do chưa được xác nhận.

## Tự nhận xét

- Tuần này bên cạnh việc học cách làm việc với Claude Code cũng được tương tác, học thêm về các công cụ bên ngoài như lưu trữ, hosting, mua tên miền ...
- Trong quá trình sử dụng Git, tự nhận thấy đây không đơn thuần là một chỗ để lưu code mà còn để quản lý các phiên bản nữa. Biết conventions, biết test trước khi PR, học thêm về branching, ...
- Tuần này có mong muốn deploy nhưng khi tự tìm hiểu thì thấy có nhiều điều để tìm hiểu hơn.

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Deploy sản phẩm lên
- Tạo một nhánh mới về UI. Nhánh này sử dụng taste-skill để đánh giá và cải thiện UI.
- Tìm hiểu về các công cụ trong quá trình Deploy để tối ưu hóa sản phẩm của mình.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo DailyDiary](https://github.com/Nha-Cong-Dong/DailyDiary/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Đối chiếu kế hoạch tuần 1: design system và UI đã xong, deploy chưa xong và bạn nêu rõ lý do. Cách chia Xong / Chưa xong như vậy dễ theo dõi.
- "Đã hoàn thiện tất cả các tính năng" còn chung chung. Code review xác nhận F-01…F-10 (trừ F-08 đã bỏ) có code và test thật, spec đã chốt bản 1.0; phần còn thiếu là vận hành (Sentry/Umami đã gỡ, bước 14–15 chưa làm). Lần sau liệt kê từng tính năng đã xong để report tự nói được điều đó.
- Tại hạn toàn bộ phần làm trong tuần còn ở nhánh `develop`, `main` vẫn ở bản 22/10; đến 28/10 mới merge.
- Trước khi deploy cần sửa: `render.yaml` thiếu `COOKIE_DOMAIN`, nên web ở `jotly.io.vn` không đọc được cookie CSRF do `api.jotly.io.vn` đặt và mọi thao tác ghi trên production sẽ trả 403. Lỗi này vẫn còn ở bản 28/10.
- `docs/Deploy.md` (thêm sau hạn) có tên user DB và host cluster Atlas, trong khi Atlas đang mở cho mọi IP. Thay bằng placeholder và giới hạn IP được kết nối.
- Tự nhận xét nói đã học conventions và branching, nhưng code review thấy nhiều commit message không khớp nội dung (ví dụ "custom colors for title" chứa cả backend nhật ký và autosave) và có commit hơn 10.000 dòng. Tách commit nhỏ, message đúng việc sẽ giúp chính bạn khi cần quay lại.
- Kế hoạch tuần 3 nhắm đúng việc còn thiếu là deploy, đi trước lịch. Viết cụ thể hơn: deploy API và web lên Render, gắn domain, sửa lỗi cookie, chạy thử đăng nhập → viết nhật ký → tải ảnh trên bản production. Nhánh UI với taste-skill nên để sau khi deploy chạy ổn.
- Ghi chú: report được commit lúc 22:39 25/10, sau hạn 19:00.
