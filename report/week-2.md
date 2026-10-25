# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Đỗ Thị Vân Anh |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/SkinWise.git |
| **Ý tưởng** | 	Ứng dụng giúp sắp xếp các sản phẩm skincare, xây dựng lịch chăm sóc da sáng,tối và theo dõi tần suất sử dụng. Hệ thống phát hiện các hoạt chất có thể bị trùng lặp hoặc cần thận trọng khi kết hợp, đồng thời giải thích cảnh báo kèm nguồn tham khảo |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 1: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Tạo được khung dự án: frontend (React) và backend (FastAPI, PostgresSQL)
- Engine luật cảnh báo và kiểm tra nguồn: 5 luật đã duyệt (2 kết hợp cần lưu ý, 2 trùng hoạt chất, 1 thẻ myth), đều có đoạn trích nguồn, được kiểm tra tự động nguyên văn trên trang gốc
- Tìm sản phẩm, phân tích INCI, kiểm tra routine, tra luật (myth), nhận câu hỏi 
- Nhận diện thành phần + chức năng, danh sách "thành phần nổi bật", cập nhật thêm tên tiếng việt
- Khó khăn:
    - Sản phẩm có sẵn để tick còn rất hạn chế, cần bổ sung thêm nhiều phần lớn vẫn là tự điền thủ công tên sản phẩm và paste bảng thành phần dưới dạng văn bản
    - Gặp khó khăn vì bảng thành phần chỉ liệt kê không có nồng độ, thứ tự giảm dần với chất trên 1% còn các chất dưới 1% thì xếp tùy ý nên có những cảnh báo thừa (chọn giữ cảnh báo vì chưa có hướng giải quyết và bỏ sót thì nguy hiểm hơn) 
    - Khan hiếm bằng chứng khoa học về việc kết hợp sản phẩm skincare nên phần đưa ra luật cảnh báo rất hạn chế, hiện tại luôn để hiển thị "không có cảnh báo không có nghĩa là an toàn"
      
## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->
- Hiểu hơn về workflow của web
- Bắt đầu biết cách sử dụng claude code
- Chưa hiểu được hết được các công nghệ được sử dụng trong code
- Ý tưởng gặp rất nhiều vấn đề khi làm vì hạn chế về nguồn tài liệu uy tín, và đọc nhận diện thành phần, nguồn mà đưa vào có nồng độ

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->
- Tìm nguồn để thêm luật và thẻ myth
- Sửa vấn đề nhận diện (gõ sai chính tả, nhãn thuốc Mỹ)
- Duyệt dữ liệu tiếng Việt (tên thông dụng, bản dịch chức năng)
- Soạn lời giải thích tiếng việt cho luật mới 
- Phân loại được câu hỏi người dùng 

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
