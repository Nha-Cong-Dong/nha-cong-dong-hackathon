# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Viết Hoàn |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/form-coach |
| **Ý tưởng** | **Motivation:** Khi tập luyện thể dục thể thao, đặc biệt những bài compound như Push up, Squat, Deadlift,... Rất nhiều người gặp khó khăn trong việc điều chỉnh động tác sao cho chuẩn, tập luyện để không gặp chấn thương... FormCoach ra đời để giải quyết vấn đề này. App sẽ vẽ khung xương và đếm rep ngay trong lúc tập, hết hiệp thì phát hiện lỗi kĩ thuật cho từng rep. Có Coach AI nhận xét từng buổi. App sẽ cho phép đề ra mục tiêu mỗi ngày, theo dõi tổng quan và có chuỗi ngày tập |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 1: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Đã thử pose pushup bằng Mediapipe, kết quả trả về khá tốt (nhưng điện thoại cần xoay ngang và phải ở đủ xa để lấy được cả thân người), lấy được 33 khớp và quyết định làm theo hướng pushup
- Đã đếm được rep bằng python, dựa trên sự thay đổi của góc ở khuỷu tay
- Có trang quay trên điện thoại để quay dataset, đã quay data (khoảng 200 rep pushup) với các nhãn shallow, hip-sag, hip-high, incomplete_lockout, neck-drop và gán nhãn bằng tay 
- **Phát sinh thêm so với kế hoạch tuần:**
  - Có rulebased để làm mốc so sánh với random forest, tuy nhiên kết quả chưa tốt lắm, có thể một phần do gán nhãn bằng tay nên chưa thực sự nhất quán. 
  - Có random forest. Kết quả ổn hơn rule based
  - Web app: Đã làm backend và front end sơ sơ về màn hình đăng nhập, lưu thông tin đăng nhập (hết hạn sau 30 ngày), lưu lịch sử, trang quay buổi tập, quay data, gán nhãn, trang kết quả từng set và xem lại được các rep bằng mô hình người que, số rep hiện trực tiếp trong lúc tập. 
  - Có làm biểu đồ tập luyện trong 14 ngày, thêm streak.
## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->
- Tiến độ tạm ổn, chưa quay đủ nhiều data, chưa nhất quán trong việc gán nhãn cho các rep nên vẫn còn điểm trừ ở các nhãn của rep. 
- Bài học: Test pass chưa chắc đã tốt, nhiều khi tốt ở trên dữ liệu giả nhưng dữ liuệu thật lại sai. Vì vậy cần thử nghiệm ở dữ liệu thật trong quá trình test để phát hiện lỗi sớm hơn.

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Hoàn thiện màn hình Dashboard (Đồ thị, streak...)
- Coach nhận xét sau mỗi hiệp: sử dụng bản mẫu câu trước, sau đó thêm LLM để phân tích kết quả và đưa ra nhận xét.
- Phân quyền: chỉ admin dùng được tính năng quay dữ liệu và gán nhãn, giới hạn số lần đăng nhập sai.
- Quay thí nghiệm điều kiện quay (mặc áo / không mặc áo, quay ở các góc độ khác nhau) để biết app sai nhiều thế nào khi quay lệch, rồi thêm cảnh báo đặt máy ở màn chuẩn bị (để người dùng đặt máy với góc mà mô hình nhận diện tốt nhất).
- Đăng nhập bằng Google

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo form-coach](https://github.com/Nha-Cong-Dong/form-coach/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Xong đủ 4 đầu việc kế hoạch tuần 1: pose MediaPipe (33 khớp, rút ra phải xoay ngang và đặt máy đủ xa), đếm rep theo góc khuỷu tay, trang quay trên điện thoại, khoảng 200 rep có 5 nhãn lỗi. Code review xác nhận mọi việc report kể đều có trong code, 516 test chạy qua.
- Phần phát sinh nhiều: baseline luật, random forest, web app có đăng nhập, lịch sử, đếm rep trực tiếp, biểu đồ 14 ngày, streak. Lưu ý mục tiêu/streak/dashboard tại hạn mới ở nhánh `feat/progress`, 26/10 mới vào `main`.
- Bài học "test pass chưa chắc đã tốt, phải thử trên dữ liệu thật" rất đúng; chính code review cũng tìm ra lỗi lớn nhất khi chạy thật với 2 tài khoản.
- Lỗi cần sửa trước khi deploy: tài khoản B đọc được keypoint và ghi đè được nhãn của tài khoản A, và hiệp ở chế độ Tập của mọi người đều ghi vào thư mục dữ liệu train. Kế hoạch "chỉ admin được quay và gán nhãn" mới giải quyết một phần; cần tách dữ liệu theo tài khoản ở mọi endpoint.
- Random forest chưa tới được bản deploy: mô hình học lại từ `data/` (bị gitignore) mỗi lần khởi động, không có dữ liệu thì app lặng lẽ dùng luật. Nên lưu mô hình đã train thành file và cho app báo rõ đang dùng mô hình nào.
- README chưa có mục cách chạy: biến `FORMCOACH_ALLOW_REGISTER` và cách tải file model chỉ nằm trong CLAUDE.md hoặc thông báo lỗi, dòng trạng thái cũng đang lệch so với code.
- Kế hoạch tuần 3 cụ thể, nhưng thêm coach dùng LLM và đăng nhập Google trong khi chưa có việc nào cho deploy, mà tuần 4 dành cho deploy và demo. Gợi ý thay đăng nhập Google bằng một lần deploy thử, giữ coach ở bản mẫu câu (bạn đã làm sau hạn).
