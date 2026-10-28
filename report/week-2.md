# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Kiều Minh Dũng |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Essity |
| **Ý tưởng** | Hệ thống hỗ trợ active recall sử dụng thuật toán FSRS tích hợp AI |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 1: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Tuần trước chưa có kế hoạch cụ thể ghi vào trong report, nhưng đã làm được những việc sau trong tuần vừa rồi:
  - Xây dựng workflow cùng hệ thống subagent bao gồm 7 agents với các vai trò như sau: lập kế hoạch; người phản biện kế hoạch và soi phần code vừa viết; người kiểm thử độc lập cố tình làm hỏng code để xem các test có bắt được không; người giữ tài liệu đi cùng mỗi bước để xem các quyết định có bám sát document không; người quản lí dự án; chuyên gia tư vấn công nghệ và luồng sản phẩm; cùng với một số agent khác sự spawn ra theo yêu cầu như chuyên gia design.
  - Workflow cho agent: Mỗi task mới, agent lập kế hoạch sẽ đọc tài liệu và đề ra cách làm, sau đó agent phản biện soi lại kế hoạch đó để bàn luận đến khi nào chốt rồi bắt tay vào viết, trong quá trình viết code agent soi code sẽ soi từng đoạn một và chỉ ra lỗ hổng trong quá trình code để kịp sửa luôn, có sự hỗ trợ của người giữ tài liệu đi cùng để đối chiếu với quyết định chuẩn trong tài liệu. Sau khi code xong người kiểm thử độc lập cố tình làm hỏng code xem có bắt được không. Xong mỗi module thì PM sẽ kiểm tra lại tổng thể để quyết định đã có thể merge chưa. Khi nào gặp vấn đề cần tranh luận thì tech-expert và flow-expert sẽ được gọi ra để thảo luận.
  - Các việc đã hoàn thành trong tuần vừa rồi:
    - Đăng ký bằng email, nhận thư xác minh, gửi lại khi cần.
    - Sau khi xác minh, app tự đưa người dùng tới bước tiếp theo: tạo môn đầu tiên, hoặc trang Hôm nay.
    - Đăng nhập giữ phiên 30 ngày, có đăng xuất khỏi mọi thiết bị; nhập sai mật khẩu nhiều lần thì bị khóa tạm.
    - Quên mật khẩu thì nhận link đặt lại, link hết hạn sau 1 giờ.
    - Tài khoản không xác minh trong 7 ngày tự bị xóa.
    - Tạo môn chỉ với tên và ngày thi; danh sách hiện "còn bao nhiêu ngày".
    - Sửa tên hoặc ngày thi ngay trên dòng.
    - Xóa môn tạo nhầm, nếu môn chưa có bài ôn nào; có bước xác nhận ngay tại chỗ.
    - Sửa lại bộ giao diện mới trên toàn app, áp dụng quy tắc giao diện mới.
    - Đã có chỗ lưu nội dung cần ôn và lịch sử ôn tập.
    - Chỉnh sửa được các lỗi như đường gửi email không kiểm tra danh tính máy chủ, một số thông báo trả lại mk người dùng vừa mới gõ vào, phiên ôn đã đóng vẫn nhận thêm câu trả lời
    - Đưa ra các quyết định: Bỏ so sánh gpa và số ngày còn lại trước khi thi mà đã ôn xong kiến thức, duyệt các câu chữ, agent được tự merge sau khi đã vượt qua tất cả các điều kiện đặt ra (PM kiểm tra).

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Đã bắt tay vào làm dự án, học được nền tảng của khá nhiều công nghệ và bắt đầu hiểu khái niệm kiến trúc dự án, có cái nhìn rõ ràng hơn về phát triển dự án, luồng làm việc, các vai trò và role trong một project. Vẫn còn một số các quyết định sai và quy trình chưa khắt khe nên agent làm linh tinh và đã rút ra bài học như không trao quyền cho agent được xóa tự do các thư mục trong dự án. 

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Quyết định nốt các phần đang bỏ ngỏ như ngân sách deploy, mô hình AI sử dụng.
- Kiểm soát lại tiêu chí chấm bài của AI.
- Làm phần nạp tài liệu, AI tách được từng ý và tạo câu hỏi.
- Làm màn hôm nay, trả lời và AI chấm.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo Essity](https://github.com/Nha-Cong-Dong/Essity/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Report liệt kê rõ những gì đã chạy được trong tuần: đăng ký có xác minh email, phiên 30 ngày và đăng xuất mọi thiết bị, khoá tạm khi nhập sai nhiều lần, đặt lại mật khẩu, tạo/sửa/xoá môn có ngày thi. Code review xác nhận các phần này có thật trên `main`, kèm 884 test core-api chạy qua.
- Workflow 7 agent (lập kế hoạch, phản biện, kiểm thử cố tình phá code, giữ tài liệu, PM, chuyên gia) được mô tả cụ thể, và bạn đã rút ra bài học không trao quyền xoá thư mục cho agent. Đây đúng là phần Claude Code thực chiến mà report tuần 1 còn thiếu.
- Kế hoạch tuần 1 để trống nên tuần này không có gì để đối chiếu; bạn đã ghi thẳng điều đó trong report.
- Spec vẫn chưa có trên repo: `docs/`, `.claude/` và CLAUDE.md vẫn bị `.gitignore` chặn, tài liệu nằm ở một repo private, trong khi code dẫn tới ADR/US khoảng 250 chỗ. Spec nằm trong repo hoặc có link mở được là yêu cầu chính của checkpoint 2 và tuần 1 mình đã nhắc. Bạn đưa ít nhất spec/PRD và CLAUDE.md lên repo.
- Tại hạn, vòng lõi có AI chưa bắt đầu: ai-service mới có `/ping`, màn Hôm nay và bước tải tài liệu còn "sắp có". Kế hoạch tuần 3 nhắm đúng vào vòng này (nạp tài liệu, sinh câu hỏi, màn Hôm nay, AI chấm), và sau hạn repo đã có upload, extract, chấm qua hàng đợi. Tuần 3 là hạn MVP, nên ưu tiên một luồng chạy trọn từ tải tài liệu đến chấm điểm trước khi thêm hạ tầng.
- Hai việc "quyết định ngân sách deploy" và "chọn mô hình AI" nên chốt ngay đầu tuần: môi trường local đã 11 container, cần biết sớm sẽ deploy ở đâu và tốn bao nhiêu cho tuần 4.
- `just env`, bước đầu tiên trong README, viết bằng PowerShell nên lỗi trên Linux/macOS; người khác thử chạy repo sẽ kẹt ngay bước này.
- Tự nhận xét đã nói thẳng về các quyết định sai và quy trình chưa chặt. Report tuần này đúng hạn và đủ mục, tiến bộ rõ so với tuần 1.
