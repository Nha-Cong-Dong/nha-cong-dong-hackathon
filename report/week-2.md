# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Ngọc Mai |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/RunMate |
| **Ý tưởng** | Chạy bộ ngoài trời phụ thuộc rất nhiều vào thời tiết, người chạy phải lựa chọn địa điểm, thời gian đồng thời cần biết trước tình trạng thời tiết để chuẩn bị để tránh gặp mưa, nắng nóng, gió mạnh giữa buổi chạy. Hơn nữa, nhiều người chạy thường có xu hướng có lập kế hoạch nhưng lại quên lịch, bỏ lịch, không ghi lại kết quả. Vì vậy, họ khó thấy được sự tiến bộ để duy trì lâu dài. App sẽ đi theo 1 hệ thống duy nhất, đi theo đủ vòng của 1 buổi chạy: Lên kế hoạch -> Chuẩn bị -> Thực hiện -> Theo dõi -> Đánh giá |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 1: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Chốt specification cho sản phẩm: (Đã xong trong SPEC.md)
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
- Dựng khung dự án: (Đã xong)
    - Chốt công nghệ (Front, Back)
    - Khởi tạo repo cho sản phẩm
    - Khung code
    - Chạy thử các phần kỹ thuật rủi ro (Gọi các API, lấy GPS ngay cả khi tắt màn hình, nhận được thông báo khi app đã tắt)

-> Tất cả đã xong (trong docs/SPEC.md) ngoại trừ chạy thử phần kỹ thuật nhận được thông báo khi tắt app do chốt lại MVP chỉ có lên kế hoạch kèm đánh giá thời tiết, ghi một buổi chạy (GPS, quãng đường), lưu lịch sử; thống kê và so sánh kế hoạch với thực tế để sau (theo nhận xét của Hoàng Đỗ)

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Đã hiểu cách làm việc của Claude
- Nhưng có nhiều công nghệ mà Claude gợi ý chưa hiểu hết được
- Chưa đi vào code sâu nên cũng chưa gặp vấn đề gì, có vẻ là các phần code sẽ cần nhiều thời gian để hiểu claude viết, mới thêm thử skill explain để claude giải thích code

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Xây dựng MVP cho dự án (Chia thành 5 đầu):
    - feat/du-lieu — Quản lý dữ liệu: Thiết kế database bằng Room, xây dựng Entity, DAO và Repository phục vụ lưu trữ, truy vấn và cập nhật dữ liệu.
    - feat/ke-hoach — Quản lý kế hoạch chạy: Xây dựng chức năng tạo, chỉnh sửa và xóa kế hoạch; chọn vị trí chạy và quản lý trạng thái kế hoạch.
    - feat/thoi-tiet — Thông tin thời tiết: Tích hợp API dự báo thời tiết, xây dựng quy tắc cảnh báo và gợi ý vật dụng phù hợp; xử lý quy tắc dự báo trong phạm vi 3 giờ.
    - feat/ghi-chay — Ghi nhận buổi chạy: Xây dựng Service ghi nhận GPS khi chạy nền hoặc tắt màn hình; xử lý khôi phục trạng thái buổi chạy và cảnh báo khi chế độ tiết kiệm pin có thể ảnh hưởng đến việc ghi nhận GPS.
    - feat/quy-dao — Quỹ đạo và tổng kết buổi chạy: Hiển thị quỹ đạo chạy trên bản đồ và xây dựng màn hình tổng kết các thông tin như quãng đường, thời gian chạy.
    - feat/lich-su — Lịch sử chạy: Hiển thị danh sách các buổi chạy đã ghi nhận và hỗ trợ xóa buổi chạy.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo RunMate](https://github.com/Nha-Cong-Dong/RunMate/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Xong gần hết kế hoạch tuần 1: SPEC.md gần 800 dòng có phạm vi, use case, quy tắc nghiệp vụ, ERD, màn hình; khung code có điều hướng cho 8 màn hình; chạy thử gọi API thời tiết và ghi GPS trên máy thật ở 2 nhánh `spike/api`, `spike/gps`. Phần thử thông báo bị bỏ có lý do rõ.
- Chọn Android native giải quyết đúng vấn đề ghi GPS khi tắt màn hình nêu ở tuần 1; Open-Meteo không cần key nên không có rủi ro lộ key.
- Mục "Kết quả so với kế hoạch tuần trước" mới chép lại kế hoạch kèm "(Đã xong)". Nên ghi kết quả thật, ví dụ spike GPS ghi được bao lâu khi tắt màn hình, sai số bao nhiêu, API trả về những gì; các số này đã có trong SPEC nhưng report chưa kể.
- Người khác hiện khó build theo README: `gradlew` không có quyền thực thi nên `./gradlew` báo Permission denied trên macOS/Linux, và tài liệu ghi JDK 17 trong khi `gradle-daemon-jvm.properties` yêu cầu JDK 25.
- Code review tìm thấy một lỗi trong spec: BR-02 cho đặt kế hoạch xa 16 ngày nhưng `forecast_days=16` tính cả hôm nay, nên kế hoạch sát mốc 16 ngày sẽ không có dự báo, và luồng UC1 coi đó là lỗi mạng, cho Thử lại mãi.
- Kế hoạch tuần 3 chia theo nhánh rất cụ thể (ghi "5 đầu" nhưng liệt kê 6). Phạm vi vẫn rộng cho 1 tuần: gợi ý làm `feat/ghi-chay` trước vì rủi ro nhất, rồi kế hoạch và thời tiết; quỹ đạo và lịch sử làm bản tối giản.
- Thêm skill `explain` để Claude giải thích code là cách hay cho vấn đề "chưa hiểu hết công nghệ Claude gợi ý"; tuần sau kể một lần skill này giúp bạn hiểu ra điều gì.
