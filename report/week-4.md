# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Viết Hoàn |
| **Tuần** | 4 |
| **Nội dung** | Hoàn thiện, deploy và demo |
| **Hạn nộp** | Trước 19:00 Chủ nhật 08/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/form-coach |
| **Ý tưởng** | **Motivation:** Khi tập luyện thể dục thể thao, đặc biệt những bài compound như Push up, Squat, Deadlift,... Rất nhiều người gặp khó khăn trong việc điều chỉnh động tác sao cho chuẩn, tập luyện để không gặp chấn thương... FormCoach ra đời để giải quyết vấn đề này. App sẽ vẽ khung xương và đếm rep ngay trong lúc tập, hết hiệp thì phát hiện lỗi kĩ thuật cho từng rep. Có Coach AI nhận xét từng buổi. App sẽ cho phép đề ra mục tiêu mỗi ngày, theo dõi tổng quan và có chuỗi ngày tập |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 3: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Đã xong đúng kế hoạch
  - Coach: TemplateCoach làm dự phòng, thẻ Coach ở trang kết quả, và coach bằng Claude Haiku qua cổng của ban tổ chức (tự chuyển về mẫu câu khi API lỗi).
  - Deploy: app chạy tại https://form-coach-3r5n.onrender.com (Render Free + Postgres Neon).
  - README: cách chạy, cách deploy, phần hạn chế của bản deploy.
  - Đăng nhập Google: tài khoản mới chỉ tạo qua Google, nhằm chống spam.
  - Giới hạn tải lên: mỗi hiệp tối đa 30 phút, chỉ lưu keypoint 10 phút đầu, tối đa 30 phút lưu trong 24 giờ.
  - Định dạng hiệp v2 (keypoint nhị phân): nhờ đó file JSON lưu hiệp tập nhẹ lại, lưu được nhiều hiệp tập hơn.

- Chưa làm
  - Kiểm tra góc máy ở màn Sẵn sàng (cần quay thí nghiệm trước).
  - PWA.
  - Ảnh hoặc video demo trong README.
  - Squat (mục mở rộng).

## Tự nhận xét quá trình và thành quả

<!-- Nhìn lại cả 4 tuần: những gì đã học được, tự đánh giá quá trình và thành quả của bạn -->

**Nhìn lại cả 4 tuần**: Đã làm ra một web app phân tích kỹ thuật push-up qua camera điện thoại, đã deploy và dùng được. Luồng chạy từ camera → pose (MediaPipe) → góc khớp → đếm rep → phát hiện lỗi → coach, kèm mục tiêu, streak, lịch sử và đăng nhập Google. Về dữ liệu, có 5 buổi quay tự gán nhãn (khoảng 200 rep) và một phần đánh giá chia theo buổi quay để so sánh luật với random forest.

**Những gì đã học được**:
- Xử lý tín hiệu và kiểm thử: làm mượt, đếm rep bằng đỉnh và thung lũng, và viết test bằng tín hiệu tổng hợp có đáp án biết trước (sóng sin 5 chu kỳ → 5 rep). Test thuần cho phép sửa logic mà không cần quay lại video.
- Làm backend và deploy: FastAPI, đăng nhập, phân quyền admin, giới hạn đăng nhập sai, Postgres, Docker, Google login. 
- Làm việc với AI: hiểu thứ AI viết ra khi dừng sau mỗi bước, chạy thử và hỏi "tại sao". Luồng làm việc với Agent sao cho code thuận tiện nhất.
- Học cách pitching.

**Tự đánh giá quá trình**
- Tốt: làm từng bước nhỏ, có test (hơn 600 test), ghi journal những chỗ vấp, tự gán nhãn và tự quyết các ngưỡng, không để AI điền thay.
- Chưa tốt: dữ liệu ít (5 buổi, một người quay, một kiểu máy), nên không kết luận được mô hình có tổng quát hoá hay không. Chưa dành nhiều thời gian cho hạ tầng (deploy, giới hạn tải lên) và còn thiếu thời gian cho phần ML. Chưa làm thêm những bài khác, UI/UX chưa được chau chuốt.

**Tự đánh giá thành quả**
- App chạy được, deploy và dùng được trên điện thoại.
- Còn thiếu: kiểm tra góc máy (điểm yếu lớn nhất của lỗi shallow), PWA, squat, và ảnh hoặc video demo.
- Hướng tiếp theo ở repo cá nhân: quay thêm dữ liệu từ nhiều người và nhiều góc máy, kiểm tra góc máy ở màn Sẵn sàng, rồi PWA.

## Cảm nghĩ & lời nhắn gửi Hoàng Đỗ
- Cảm ơn Hoàng Đỗ đã tạo ra một Hackathon rất ý nghĩa. sau một tháng vừa qua, tôi đã học được rất nhiều điều.
- Cảm ơn Hoàng Đỗ đã tiếp thêm tinh thần cho mọi người. Chắc chắn mọi người sẽ cố gắng nhiều hơn nữa trong thời gian tới.
- Sẽ tiếp tục phát triển thêm tính năng và chau chuốt sản phẩm trong thời gian tới.
- Chúc Hoàng Đỗ luôn luôn mạnh khỏe, hạnh phúc. Gặp nhiều may mắn, gặt hái nhiều thành công hơn <3.
---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
