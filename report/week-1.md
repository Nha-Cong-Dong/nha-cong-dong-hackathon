# Báo cáo tuần 1

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Hà TIến Triệu |
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Holocron |
| **Ý tưởng** | Hệ thống hỗ trợ ôn thi gồm 4 chức năng chính: Quản lý & bóc tách tài liệu: Lưu trữ slide, giáo trình (PDF) theo từng môn học. Tự động bóc tách nội dung theo heading, bảng biểu, công thức và gán tọa độ (trang, vị trí) cho từng đoạn văn bản. Phân loại dữ liệu học tập: Tách tài liệu thành 2 kho độc lập: Kho Lý thuyết (khái niệm, định lý, điểm dễ nhầm lẫn) và Kho Bài tập (công thức, biến số, thuật giải, bài toán mẫu). Phân tích đề cũ & sinh đề tương đương: Quét ảnh chụp đề thi thật để trích xuất cấu trúc (tỷ lệ câu, độ khó, dạng bài tập/lý thuyết, kiểu bẫy). Dùng cấu trúc này để sinh các bộ đề mới có cùng format và độ khó nhưng thay đổi số liệu/ngữ cảnh dựa trên tài liệu đã nạp. Phòng thi thử & đối chiếu nguồn: Giao diện làm bài bấm giờ hoặc luyện tập, tự động chấm điểm, chỉ ra phần kiến thức bị hổng và cho phép bấm 1-click để mở đúng trang PDF/slide chứa lý thuyết liên quan. |

---

## Đã làm được gì trong tuần
- Đã tìm hiểu và cài đặt Node.js runtime.
- Cài và kích hoạt thành công Claude Code. Tìm hiểu Auto-mode và cách điều hướng workspace trên terminal.
- Tìm hiểu sơ bộ về bản chất của Vibe Coding. Đại khái là về quy trình.
- Phân biệt rõ và hiểu cách dùng của Claude Desktop vs Claude Code.
- Lên danh sách ý tưởng khả thi đại khái cho Hackathon Nhà Cộng Đồng, sơ bộ chốt được ý tưởng sẽ triển khai. Hiện đã sơ bộ các tính năng cho MVP.

## Tự nhận xét
- Đã sơ bộ nắm được cách vận hành Claude Code và luồng làm việc đơn giản. 
- Đại khái xây dựng được khối lượng kiến thức vừa phải, sẵn sàng cho các tuần sau.
- Ban đầu khá bỡ ngỡ với cách dùng của một số công cụ (Node.js, Claude Code v.v... nói chung là các công cụ dùng lệnh) nhưng đã dần làm quen.
- Hạn chế: 
  - Debug quá kém do phụ thuộc AI quá sớm :v, đọc log cũng kém. Những cái này sẽ cố gắng cải thiện dần trong quá trình làm việc.

## Kế hoạch tuần tới
- Chốt specification cục bộ cho sản phẩm:
  - Bài toán, giải pháp, tệp người dùng, tech stack dự kiến.
  - Phạm vi của sản phẩm: Nền tảng, phạm vi của MVP, v.v...
- Cố gắng tạo ra 1 bộ đặc tả (SPEC/PRD) chi tiết đến từng scheme và end point.
  - Hoàn thiện user flow, database schema, API contracts. Lấy 2 - 3 tính năng cốt lõi để xây dựng phạm vi của MVP.
- Hoàn thiện repo hoàn chỉnh với khung dự án, đặc biệt là CLAUDE.md thật kỹ càng.
- Vừa học vừa thử nghiệm CLaude cũng như Claude Code. Bù đắp lại thời gian tuần đầu khá bận.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Tại hạn 19:00 18/10, mục Ý tưởng và Kế hoạch tuần tới còn trống; hai mục này được thêm lúc 03:20–04:24 ngày 19/10, link repo cũng đổi sang Holocron lúc đó. Report vẫn được tính đúng hạn, nhưng lần sau bạn hoàn thiện trước 19:00. Bảng thông tin cũng đang thiếu dòng Hạn nộp, Lưu ý và tiêu đề đã đổi thành "Báo cáo tuần 1"; bạn giữ nguyên template nhé.
- Kế hoạch tuần tới bám sát mục tiêu checkpoint 2: spec chi tiết tới từng schema và endpoint, user flow, database schema, API contracts, chọn 2–3 tính năng lõi, CLAUDE.md kỹ. Tuần sau mình sẽ đối chiếu từng việc.
- Ý tưởng trong report gồm 4 khối lớn (bóc tách PDF có toạ độ, tách kho lý thuyết/bài tập, phân tích đề cũ từ ảnh để sinh đề tương đương, phòng thi thử), quá lớn cho 3 tuần. `SPECIFICATION.md` đã thu hẹp MVP về một golden path (Hệ điều hành — CPU Scheduling) cộng Ingestion Gate, đây là hướng đúng. Bạn ghi rõ phạm vi MVP này trong report để ý tưởng và kế hoạch khớp nhau.
- Thiết kế "mọi con số do code chạy trong sandbox tính, LLM chỉ viết template" là quyết định hay để tránh AI tính sai. Phần chạy code bằng `exec` cần soi kỹ về bảo mật, mình sẽ xem trong code review tuần 2.
- Phần học mới ở mức cài đặt và làm quen (Node.js, Claude Code, auto mode, phân biệt Desktop và Code); Vibe Coding mới ghi "đại khái là về quy trình". Repo đã có nhánh develop/feature, ruff, mypy strict; tuần sau bạn kể cụ thể quy trình mình đang theo.
- Tự nhận xét "debug kém do phụ thuộc AI" rất thẳng thắn. Gợi ý một thói quen: khi gặp lỗi, tự đọc traceback và ghi ra phỏng đoán nguyên nhân trước, rồi mới hỏi Claude và so với câu trả lời.
