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

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo RunMate](https://github.com/Nha-Cong-Dong/RunMate/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2: cả 6 mảng đã vào `main` qua 5 PR. Đó là Room, kế hoạch và chọn vị trí, thời tiết, ghi GPS bằng foreground service, màn kết quả có quỹ đạo, lịch sử trên lịch tuần. Bạn còn làm thêm khôi phục buổi dở, gợi ý BR-44 và cảnh báo pin BR-61. Luồng chính MVP (kế hoạch + thời tiết → chạy → kết quả → lịch sử) đã đủ trong code.
- Report kể hơi nhiều hơn code tại hạn:
  - Thống kê có "biểu đồ cột", "hoàn thành hết các màn hình": lúc 19:00, S8 mới có `StatsRules` ở nhánh `feat/thong-ke-agy`; phần giao diện là commit lúc 19:08.
  - Thời tiết lấy khả năng mưa chứ không lấy độ ẩm.
  - Ngưỡng nóng trong code là 35°C (BR-11), không phải 38°C.
  
  Report nên kể đúng những gì đang có trên `main`.
- Phần làm tốt:
  - Tầng quy tắc là hàm thuần, nhận thời gian qua tham số, có khoảng 200 unit test; code review chạy 170 test JVM và tất cả đều qua.
  - Mọi thay đổi buổi chạy cùng kế hoạch đi qua một transaction, có test rollback.
  - Service ghi GPS làm đủ 3 lưu ý rút ra từ spike tuần 2.
- Câu tự nhận "chưa có thời gian hiểu code AI viết" khớp với những gì code review thấy. Các lỗi đều nằm ở phần ghi chạy, phần này vào repo qua commit `4a6960c` (42 file, +2.665 dòng) và được merge 3,5 giờ trước hạn. Cụ thể:
  - Tạm dừng dưới 30 giây vẫn bị tính thời gian, trái US9.
  - Khôi phục buổi dở có đường làm app đóng khi thiếu quyền vị trí.
  - Cách chọn mốc giờ dự báo khiến khung 07:00–07:59 luôn báo lỗi mạng.
  
  Mỗi lỗi chỉ cần sửa vài chục dòng; bạn sửa kèm một test cho từng lỗi.
- Kế hoạch tuần 4 đúng hướng: test với dữ liệu thật, deploy, demo, README. Với app Android, nên cụ thể hơn:
  - "Deploy": phát APK qua GitHub Release và ghi cách cài vào README.
  - "Testing thực tế": chạy bài thử ở SPEC 10.7 (400 m, rút sạc, có tạm dừng, có tắt quyền vị trí) và ghi lại số liệu.
- Người khác vẫn chưa build được theo README. `gradlew` vẫn thiếu quyền thực thi, và README/CLAUDE.md ghi JDK 17 trong khi cấu hình ép JDK 25. Hai lỗi này tồn từ tuần 2; `gradlew` chỉ cần một lệnh `git update-index --chmod=+x gradlew`.
- Icon và chế độ sáng/tối trong kế hoạch nên để sau cùng, khi luồng chính đã ổn trên máy thật.
- Ghi chú: report được commit lúc 19:06 01/11, sau hạn 19:00.
