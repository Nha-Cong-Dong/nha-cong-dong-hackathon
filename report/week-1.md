# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Ngọc Mai|
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp** | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** |  |
| **Ý tưởng** | Chạy bộ ngoài trời phụ thuộc rất nhiều vào thời tiết, người chạy phải lựa chọn địa điểm, thời gian đồng thời cần biết trước tình trạng thời tiết để chuẩn bị để tránh gặp mưa, nắng nóng, gió mạnh giữa buổi chạy. Hơn nữa, nhiều người chạy thường có xu hướng có lập kế hoạch nhưng lại quên lịch, bỏ lịch, không ghi lại kết quả. Vì vậy, họ khó thấy được sự tiến bộ để duy trì lâu dài. App sẽ đi theo 1 hệ thống duy nhất, đi theo đủ vòng của 1 buổi chạy: Lên kế hoạch -> Chuẩn bị -> Thực hiện -> Theo dõi -> Đánh giá|

---

## Đã làm được gì trong tuần

- Về Vibe Coding:
    - Sự khác biệt giữa lập trình truyền thống với Vibe Coding
    - Lợi ích và những rủi ro của Vibe Coding
    - 4 kỹ năng cốt lõi của 1 Vibe Coder
    - Quy trình thực chiến Vibe Coding

- Về Claude/ Clause Code:
    - Tìm hiểu được những điểm khác biệt, tính năng vượt trội của Claude khi code với các AI khác
    - Cách sử dụng Claude cơ bản khi code
    - Lợi ích + Cấu trúc + Cách tạo SKILL trong code
    
- Về sản phẩm:
    - Lên được ý tưởng cho sản phẩm
    - Viết rõ hơn về ý tưởng:
        - Lên kế hoạch: Xác định tọa độ, địa điểm chạy + thời gian/số km chạy, lấy dự báo, đánh giá thời tiết, đưa ra các gợi ý chuẩn bị
        - Chuẩn bị: App sẽ thông báo lịch trước 30p, cập nhật lại thời tiết, đánh giá lại các gợi ý, cảnh báo nếu xấu đi
        - Thực hiện: Ghi GPS, vẽ quỹ đạo, hiển thị số liệu, lưu buổi chạy 
        - Theo dõi: Cập nhật trạng thái, phát hiện bỏ lỡ, lưu lịch sử buổi chạy
        - Đánh giá: Thống kê, so sánh kế hoạch với thực tế


## Tự nhận xét

- Tự thấy ý tưởng khá hay, làm xong có thể tự mình trải nghiệm
- Chưa có nhiều thời gian nên mới chỉ tìm hiểu các phần cơ bản Hoàng Đỗ gạch ra trong tuần 1
- Thấy việc Vibe Coding và sử dụng Claude để áp dụng khá thú vị vì sẽ thiên về tư duy sản phẩm nhiều

## Kế hoạch tuần tới

- Chốt specification cho sản phẩm:
    - Chốt phạm vi + nền tảng
        - Nền tảng
        - MVP cần có của sản phẩm
        - Có cần đăng nhập tài khoản không hay chỉ lưu trên máy ?
    - Use case: Danh sách use case + sơ đồ flow
    - Chốt các quy tắc nghiệp vụ (các con số cụ thể)
    - Trạng thái kế hoạch (Có những trạng thái nào + Được sửa/ xóa kế hoạch khi ở trạng thái nào)
    - Thiết kế ERD
    - Xác định API, công nghệ sẽ dùng
    - Có các giao diện nào
    - Các yêu cầu phi chức năng (Ghi GPS khi tắt màn hình, bảo mật API key,...)
- Dựng khung dự án: 
    - Chốt công nghệ (Front, Back)
    - Khởi tạo repo cho sản phẩm
    - Khung code
    - Chạy thử các phần kỹ thuật rủi ro (Gọi các API, lấy GPS ngay cả khi tắt màn hình, nhận được thông báo khi app đã tắt)

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Kế hoạch tuần tới chia rất rõ: phần spec (phạm vi, nền tảng, use case và flow, quy tắc nghiệp vụ có số cụ thể, trạng thái kế hoạch, ERD, API, màn hình, yêu cầu phi chức năng) và phần dựng khung, có cả việc chạy thử trước các phần kỹ thuật rủi ro. Đây là cách lên kế hoạch rất tốt.
- Ý tưởng có vấn đề thật và đi theo trọn vòng một buổi chạy (Lên kế hoạch → Chuẩn bị → Thực hiện → Theo dõi → Đánh giá), giai đoạn nào cũng có tính năng cụ thể.
- Nên chốt nền tảng sớm nhất: ghi GPS khi tắt màn hình gần như không làm được trên web, trình duyệt sẽ dừng ghi; thường cần app di động (Flutter, React Native…). Nếu chọn web thì nên bỏ yêu cầu này khỏi MVP. Bạn đã đưa đúng phần này vào danh sách chạy thử, làm việc đó ngay đầu tuần.
- Câu hỏi "có cần đăng nhập hay chỉ lưu trên máy" đáng chốt sớm: nếu mỗi người chỉ dùng trên một máy, lưu cục bộ giúp bớt hẳn phần tài khoản và backend.
- 5 giai đoạn đều làm đủ thì nhiều cho 3 tuần. Gợi ý MVP: lên kế hoạch kèm đánh giá thời tiết, ghi một buổi chạy (GPS, quãng đường), lưu lịch sử; thống kê và so sánh kế hoạch với thực tế để sau.
- Phần học mới là các tiêu đề (khác biệt với lập trình truyền thống, lợi ích và rủi ro, 4 kỹ năng cốt lõi, quy trình) mà chưa có nội dung. Tuần sau ghi 1–2 ý cho mỗi mục, ví dụ 4 kỹ năng đó là gì và bạn đã thử kỹ năng nào.
- Chưa có repo, tuần 1 chưa bắt buộc; tuần 2 bạn tạo repo và điền link vào report.
