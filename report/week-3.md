# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Ngọc Mai |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/RunMate |
| **Ý tưởng** | Chạy bộ ngoài trời phụ thuộc rất nhiều vào thời tiết, người chạy phải lựa chọn địa điểm, thời gian đồng thời cần biết trước tình trạng thời tiết để chuẩn bị để tránh gặp mưa, nắng nóng, gió mạnh giữa buổi chạy. Hơn nữa, nhiều người chạy thường có xu hướng có lập kế hoạch nhưng lại quên lịch, bỏ lịch, không ghi lại kết quả. Vì vậy, họ khó thấy được sự tiến bộ để duy trì lâu dài. App sẽ đi theo 1 hệ thống duy nhất, đi theo đủ vòng của 1 buổi chạy: Lên kế hoạch -> Chuẩn bị -> Thực hiện -> Theo dõi -> Đánh giá |

---

## Kết quả so với kế hoạch tuần trước

- Dữ liệu: Sử dụng Room chỉ lưu dữ liệu trên máy người dùng, viết DAO và các repository, viết các unit test bằng JVM
- Các chức năng:
    - Lên kế hoạch buổi chạy:
        - Chọn giờ, ngày, vị trí (lấy vị trí hiện tại/ tìm kiếm 1 địa điểm cụ thể), mục tiêu theo thời gian/quãng đường
    - GPS: Lấy vị trí hiện tại, ghi lại các điểm chạy trong 1 buổi chạy
    - Thời tiết:
        - Sau khi chọn các yêu cầu của kế hoạch 1 buổi chạy, app sẽ gọi API lấy nhiệt độ, độ ẩm, sức gió, tia UV theo vĩ độ và kinh độ để đưa ra các gợi ý cho buổi chạy (phải có mạng mới chạy được), gợi ý các buổi chạy có thể là nóng trên 38 độ C thì phải mang nước
    - Chạy (chạy theo kế hoạch/ chạy tự do): hiện tổng thời gian hiện tại, quãng đường hiện tại, pace, tiến độ hiện tại so với mục tiêu (cả 2 cách chạy đều có mục tiêu)
    - Kết quả 1 buổi chạy: có quỹ đạo của buổi chạy, tổng quãng đường, tổng thời gian, pace, mức độ hoàn thành so với mục tiêu
    - Thống kê:
        - Theo tuần và tháng: tổng quãng đường, tổng thời gian, số buổi chạy, pace, biểu đồ cột để người dùng nhìn thấy tiến độ theo buổi/tuần hay tuần/tháng
- UI: Lên file design.md cho dự án, hoàn thành hết các màn hình, hộp thoại của dự án 

- Mình đã gộp kế hoạch với lịch sử trong màn lịch, thêm vào màn thống kê theo tuần/ tháng (lí do: nếu để riêng 1 màn lịch sử mình cảm giác nó bị thừa thay vì vậy mình gộp chung vào phần lịch cho dễ theo dõi, và thêm phần thống kê để người dùng có thể theo dõi tiến độ của bản thân qua từng tuần/tháng)

## Tự nhận xét

- Làm khá gấp nên nhiều phần chưa có thời gian hiểu được code của AI viết
- Tiến độ ổn, nếu mà được thì lần sau nên làm SPEC, PLAN, DESIGN sớm hơn để đi vào code 

## Kế hoạch tuần tới

- Testing với dữ liệu thực tế, rà soát lại cá tính năng, hoàn thiện nhận diện (icon cho dự án, đầy đủ các màn hình sáng tối)
- Deploy sản phẩm
- Demo, hoàn thiện lại readme 

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
