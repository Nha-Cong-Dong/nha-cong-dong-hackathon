# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Viết Hoàn |
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

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo form-coach](https://github.com/Nha-Cong-Dong/form-coach/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Lỗi nặng nhất của tuần 2 đã được sửa tận gốc. File hiệp của người không phải admin giờ lưu riêng theo tài khoản, nằm ngoài dữ liệu train (`35cd46f`), và `session_id` có thêm đuôi ngẫu nhiên. Code review thử lại với 3 tài khoản trên mọi endpoint: không còn đọc hay ghi chéo được. Khoá đăng nhập sau 10 lần sai cũng chạy đúng.
- Đối chiếu kế hoạch tuần 2:
  - Đã xong: dashboard và lịch sử theo lịch tháng, coach bằng mẫu câu, phân quyền admin kèm khoá đăng nhập.
  - Chưa làm: đăng nhập Google.
  - Đã bỏ, có lý do: thí nghiệm góc quay.
  
  Report chỉ kể phần chưa làm và bỏ sót 3 việc đã xong. Lần sau bạn đi qua từng đầu việc trong kế hoạch, kể cả việc đã xong.
- Câu "gần như hoàn thiện web app" nên thay bằng luồng cụ thể đã chạy được. Code review đã chạy trọn ở máy: đăng nhập → tải hiệp → kết quả kèm coach → replay → lịch sử, với web build được phục vụ ngay từ uvicorn.
- Hai việc cần sửa trước khi deploy:
  - File mô hình `.pkl` bị `.gitignore` và `.dockerignore` loại ra, Dockerfile cũng không đặt `FORMCOACH_MODEL_PATH`. Bản deploy vì thế sẽ chấm bằng luật chứ không phải random forest: chạy đúng lệnh CMD thì nhận `model_name: "rules"`.
  - `POST /api/sessions` không giới hạn kích thước và ghi nguyên payload xuống đĩa. Gửi 50 MB vẫn được nhận, nên khi mở đăng ký thì ai cũng làm đầy được volume.
- Railway dừng nhận tài khoản mới là chuyện ngoài tầm tay, và phần code cho deploy bạn đã chuẩn bị đủ. Dockerfile chạy uvicorn phục vụ cả web lẫn API, nên chuyển sang một nền tảng khác chạy được Docker sẽ không phải sửa nhiều.
- Kế hoạch tuần 4 cụ thể, nhưng vẫn có cả coach Claude lẫn đăng nhập Google, mà đăng nhập Google cần một domain HTTPS ổn định. Thứ tự mình gợi ý:
  1. Deploy trước, kèm file mô hình và giới hạn kích thước; tạo sẵn tài khoản admin trước khi chia sẻ link.
  2. Coach Claude làm bản nhỏ, tự lùi về mẫu câu khi API lỗi.
  3. Đăng nhập Google để sau demo.
- README vẫn thiếu mục cách chạy, dòng trạng thái vẫn ghi "sắp sang tuần 3". Việc này đã có trong kế hoạch, nên làm luôn cùng lúc deploy.
- Ô "Tên" ở đầu report vẫn để trống.
