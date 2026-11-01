# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** |  |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/form-coach |
| **Ý tưởng** | **Motivation:** Khi tập luyện thể dục thể thao, đặc biệt những bài compound như Push up, Squat, Deadlift,... Rất nhiều người gặp khó khăn trong việc điều chỉnh động tác sao cho chuẩn, tập luyện để không gặp chấn thương... FormCoach ra đời để giải quyết vấn đề này. App sẽ vẽ khung xương và đếm rep ngay trong lúc tập, hết hiệp thì phát hiện lỗi kĩ thuật cho từng rep. Có Coach AI nhận xét từng buổi. App sẽ cho phép đề ra mục tiêu mỗi ngày, theo dõi tổng quan và có chuỗi ngày tập |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 2: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Đã gần như hoàn thiện web app và sẵn sàng deploy
- Deploy: Đã chuẩn bị đủ phần code: lưu mô hình ra file cho server, server phục vụ luôn web đã build, tách dữ liệu theo tài khoản, Dockerfile chạy được ở máy. Nhưng Railway đang tạm dừng nhận tài khoản mới sau sự cố 21/10, chưa có ngày mở lại. Hiện vẫn đang tìm nơi phù hợp.
- Tuần này chưa làm được đăng nhập bằng Google
- Chưa quay test với các trường hợp góc quay khác nhau, mặc áo / không mặc áo (cái này quyét định không làm) đã nghiên cứu nhiều ứng dụng khác, rất ít ứng dụng giải quyết được vấn đề này, hầù hết là cho người dùng để ở một góc máy cố định phù hợp với sản phẩm của mình để trả về kết quả tốt nhất. 

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Tiến độ ổn. Khá hài lòng với kết quả hiện tại. Tuy nhiên chưa làm phần đăng nhập Google.
- Điêm chưa ổn nhất là chưa deploy được

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Thử coach Claude trên điện thoại.
- Deploy: chọn lại nơi deploy, deploy thử và dùng trên điện thoại qua 4G. 
- Quay video demo có coach Claude trước 10/11.
- README: mục "Cách chạy" và dòng trạng thái.
- Làm đăng nhập Google, kiểm tra góc máy sẵn sàng.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
