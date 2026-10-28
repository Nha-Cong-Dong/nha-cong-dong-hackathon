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

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo SkinWise](https://github.com/Nha-Cong-Dong/SkinWise/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Kế hoạch tuần 1 để trống, nhưng các việc nhận xét tuần 1 gợi ý đều đã làm: repo, khung React + FastAPI + PostgreSQL, CLAUDE.md, bảng luật cảnh báo có nguồn. Tiến bộ rất rõ so với tuần 1.
- Bảng luật đi đúng hướng: 5 luật đã duyệt, mỗi luật có đoạn trích nguồn, có script kiểm tra trích dẫn nguyên văn, luật thiếu nguồn hoặc chưa duyệt thì không được seed. Disclaimer có ở README, giao diện và cả khi kết quả rỗng.
- Phần khó khăn viết rất thực tế: bảng thành phần không có nồng độ nên bạn chọn giữ cảnh báo thừa thay vì bỏ sót, và luôn ghi "không có cảnh báo không có nghĩa là an toàn". Đây là quyết định sản phẩm đúng cho một app liên quan sức khoẻ.
- Code review tìm thấy cảnh báo sai do từ điển hoạt chất tại hạn còn là bản nháp AI chưa duyệt: "BHA" bị hiểu là salicylic acid, trong khi trong bảng thành phần (INCI) BHA là butylated hydroxyanisole. Bạn đã sửa sau hạn; từ điển cũng cần được duyệt như bảng luật.
- Có những chỗ app im lặng mà lẽ ra phải báo: tên gõ sai ("Retinoll") hay nhãn Drug Facts kiểu Mỹ ra 0 nhóm, 0 lưu ý mà không báo kết quả có thể thiếu. Lệnh seed cũng không gỡ luật đã xoá khỏi TOML, DB vẫn giữ luật cũ.
- Tại hạn, giao diện và phần nhận diện thành phần còn ở nhánh `feat/ingredient-coverage`, 22:04 25/10 mới vào `main`.
- Kế hoạch tuần 3 cụ thể nhưng chủ yếu là việc dữ liệu (nguồn, bản dịch, lời giải thích). Sau hạn repo đã thêm tài khoản và đọc nhãn bằng ảnh, không có trong kế hoạch này. Tuần 3 là hạn MVP: ghi rõ luồng MVP (nhập sản phẩm → kiểm tra routine → cảnh báo có nguồn) và chỉ thêm tính năng mới khi luồng đó chạy ổn.
- Ghi chú: report được commit lúc 19:40 25/10, sau hạn 19:00.
