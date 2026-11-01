# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | SkinWise |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/SkinWise.git |
| **Ý tưởng** |  |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 2: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Các kế hoạch từ tuần hai đã hoàn thiện gần hết, nhưng có sự thay đổi - bỏ tính năng gửi câu hỏi nên phần việc phân loại câu hỏi người dùng đã bỏ đi vì tính thực tế không cao, số thông tin chính thống được tìm thấy rất ít và nên rất ít câu hỏi được phản hồi ngay lập tức phải lưu trữ lại và gửi câu trả lời sau, bất tiện nên quyết định bỏ
- Thêm 2 chức năng mới
  - Viết bog review cộng đồng:
      - Viết review kèm sản phẩm, ảnh, routine và loại da, có thể thích, lưu, bình luận, báo cáo và bấm "Thử routine này".
      - Cuối mỗi bài có phần thông tin có nguồn do web phân tích, tách riêng khỏi cảm nhận của người viết.
      - Tự kiểm duyệt: bài có chữ "trị/chữa", số điện thoại hoặc link phải chờ duyệt; 3 người báo cáo thì bài tạm ẩn.
  - Mục tiêu chăm da:
      - Chọn mục tiêu (mụn, lão hoá, thâm, da khô, nhạy cảm, vv) để xem các nhóm hoạt chất hay dùng, kèm đánh dấu nhóm nào routine của         bạn đã có.
      - Thẻ thông tin có nguồn uy tín và đoạn trích nguyên văn, tất cả đã được duyệt.
      - Lựa chọn của bạn chỉ lưu trên máy, không gửi lên máy chủ.
      - Chỉ để tham khảo: không tạo cảnh báo, không gợi ý sản phẩm.
- Thêm phần đăng nhập đăng ký và đồng bộ : Đăng nhập bằng email + mật khẩu, xác thực email, quên mật khẩu. Đồng bộ routine giữa các máy, hỏi người dùng khi hai máy cùng sửa.
## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Hoàn thiện các phần việc trong kế hoạch tuần hai
- Thêm được chức năng cho web
- Vẫn chưa biết cách tối ưu, dùng subagent tiêu tốn nhiều token không cần thiết
- Frontend đang claude gen + skill chưa bắt đầu học dùng claude design
  

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Học Claude Design, làm lại phần frontend cho web 
- Duyệt 38 tên tiếng Việt "CHƯA DUYỆT" trong common_names.toml
- Chuẩn bị demo, kiểm tra lại luồng chạy tính chính xác của thông tin

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
