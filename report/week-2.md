# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Viết Hoàn |
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp** | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN) |
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
