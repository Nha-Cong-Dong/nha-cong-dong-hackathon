# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Kiều Minh Dũng |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Essity |
| **Ý tưởng** | Hệ thống hỗ trợ active recall sử dụng thuật toán FSRS tích hợp AI |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 2: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Tổng quan tuần: 96 commit vào main.
- Quyết định ngân sách, mô hình AI:
  - MVP chạy local trước, hạ tầng khi deploy tùy vào Hoàng cung cấp.
  - Mô hình AI là Claude Haiku 5.5 rẻ nhưng mà đủ cho chấm và tách ý. Ngân sách API cho cả MVP chỉ 2 USD. Lúc dev và lúc chạy CI dùng LLM giả không tốn tiền.
  - Mỗi tài khoản có trần chi phí AI theo ngày và theo tháng khi nào mà chạm trần cứng thì dừng chấm và báo cho người dùng.
- Kiểm soát tiêu chí chấm bài của AI: xong phần khung, chưa đo đủ trên dữ liệu thật:
  - Có khung eval cho việc chấm: bộ dữ liệu mẫu, chạy ra số liệu, có trần chi phí mỗi lần chạy, xuất báo cáo.
  - Code tự kiểm lại đầu ra của AI chứ không tin tuyệt đối. Mỗi ý gửi vào phải có đúng một phán quyết, AI chỉ được trích các đoạn neo đã gửi, điểm tổng do code tự tính. Sai luật thì gọi lại 1 lần, vẫn sai thì báo lỗi chứ không ghi điểm rác vào lịch ôn.
  - Người dùng sửa được điểm AI chấm. Dữ liệu người dùng đồng ý chia sẻ được xuất thành bộ eval để đo lại.
  - Chưa xong: đo độ chính xác với model thật trên tài liệu thật.
- Nạp tài liệu, AI tách ý và tạo câu hỏi:
  - Tải PDF lên môn học, hệ thống lập chỉ mục và hiện mục lục.
  - Ghi lại buổi học (mô tả và tải ảnh vở), AI tách thành các thẻ kiến thức. Mỗi thẻ có đoạn neo trích từ tài liệu và code kiểm lại đoạn neo có thật.
  - AI sinh câu hỏi kèm đáp án mẫu và rubric chấm.
  - Đọc thêm được word và powerpoint, tự dựng đề cương từ bookmark hoặc tiêu đề của PDF.
- Màn Hôm nay, trả lời và AI chấm:
  - Màn today đưa ra các câu đến hạn ôn theo FSRS.
  - Đi đủ các bước trả lời → AI chấm → xem kết quả → dừng giữa chừng → tổng kết phiên.
  - Khi chấm trực tiếp không được (AI chậm, lỗi, chạm chi phí) thì đưa vào hàng đợi chấm sau.
  - Có nút sửa điểm, bỏ một ý chấm sai và bỏ qua một thẻ và bỏ qua đồng nghĩa với đồng ý không ôn lại câu này vì không cần thiết.
- Phát sinh thêm:
  - Đổi hướng sang Essity v2: Trong lúc dùng thử, cảm thấy cách nạp theo từng buổi học chưa sát cách ôn thi thật nên quyết định đổi sang bản v2:
    - môn học có đề cương và giáo trình chính;
    - bài nộp được tách thành thẻ nháp, người dùng duyệt rồi mới lưu;
    - luyện tập theo bộ câu hỏi, mỗi câu luyện có lịch FSRS riêng;
    - thêm thống kê, thanh lệnh có hoàn tác và đồ thị kiến thức.

  - Ngày 30/10 viết lại toàn bộ tài liệu (PRD, kiến trúc, kế hoạch, spec). Đến hôm nay đã xong khoảng 14/34 task lớn của v2. Nhiều task còn lại đã có sẵn phần logic thuần hoặc giao diện tĩnh, chỉ còn nối với database và API.
  - Chuyển sang chạy song song.Chia 5 luồng code chạy cùng lúc, mỗi luồng một bản sao thư mục riêng. Chỉ một luồng được sửa migration database. Có công cụ kiểm bằng chứng trước khi merge: phải có file review, file tester, pm ký. Nhờ vậy tốc độ tăng từ khoảng 1–6 lên 14–22 commit/ngày, một task khoảng 1 giờ.
  - Giảm vòng agent theo mức rủi ro, tức là chỉ chỉ task đỏ (bảo mật, dữ liệu, database) đi đủ các bước lập kế hoạch → review kế hoạch → review từng phần → tester → review cuối → pm. Task thường thì tự lập kế hoạch ngắn và chỉ cần một lần review. Bỏ agent giữ tài liệu vì tốn token mà ít bắt được lỗi.
  - Đo và retro. Ghi lại token, giờ và số vòng review của mỗi task. Cứ 5 lần merge thì chạy một lần nhìn lại (retro), mỗi lần retro chỉ sửa một điểm của quy trình.

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Làm đủ 4 đầu việc đã hứa ở tuần 2, tốc độ tăng rõ khi chạy song song. Học thêm được cách chia việc cho nhiều agent cùng lúc, cách khóa những phần chỉ một người được sửa, cách đo chi phí và tự cải tiến quy trình từ số liệu.
- Quy trình còn nhiều lỗi khi để agent tự chạy lâu:
  - Có 31 lần merge mà không chạy retro lần nào dù quy trình bắt buộc. Giờ máy chặn việc giao task mới nếu đến hạn retro mà chưa chạy.
  - Agent commit nhầm lên nhánh của task khác (2 lần). Đã thêm hook chặn commit sai nhánh.
  - Giao task khi database còn thiếu cột nên agent làm dở rồi tắc, phí token. Đã thêm bước kiểm schema trước khi giao task.
- Chi phí token còn cao: task đỏ tốn trung bình khoảng 22M token, mục tiêu là 15M. Riêng việc điều phối có phiên tốn hơn 100M token vì các agent báo cáo qua lại quá nhiều. Gây ảnh hưởng đến ae.
## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->
- Dựng đủ môi trường local để chạy thật (lập chỉ mục tài liệu, lưu file), rồi chạy thử vòng học bằng tay với tài liệu thật gồm giáo trình pdf,doc,pptx, một bộ câu hỏi, ảnh vở.
- Chạy vòng học v2 trọn vẹn:
  - nhận thẻ nháp, duyệt rồi lưu thẻ;
  - câu ôn cho thẻ đã lưu;
  - sổ học và gợi ý học tiếp;
  - API và màn Hôm nay v2;
  - màn buổi học một màn;
  - màn môn học.
- Làm phần luyện tập cốt lõi: nhập bộ câu hỏi, trộn câu luyện đến hạn vào phần ôn hôm nay, màn Luyện tập.
- Đo độ chính xác của AI chấm và AI tách thẻ trên một bộ mẫu nhỏ với model thật.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo Essity](https://github.com/Nha-Cong-Dong/Essity/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2: cả 4 đầu việc đều có code. Đã chốt Haiku 5.5 và trần 2 USD, có khung eval chấm, có nạp tài liệu + tách ý + sinh câu hỏi, có màn Hôm nay → trả lời → AI chấm kèm hàng đợi chấm. Report cũng ghi rõ phần chưa xong (chưa đo trên dữ liệu thật), nên rất dễ đối chiếu.
- Tại hạn, vòng học vẫn chưa chạy trọn trên stack thật. `infra/docker-compose.yml` thiếu core consumer và ai consumer, nên làm theo README thì PDF nằm mãi ở `uploaded`, buổi học không ra câu hỏi, câu vào hàng đợi chấm không bao giờ có kết quả. Code review chỉ chạy được nửa sau của vòng, và phải dùng LLM giả.
- Schema đầu ra của tách ý, sinh câu hỏi và 5 task khác có `maxItems`/`maxLength`, trong khi structured outputs của Anthropic không nhận các ràng buộc này. Vì vậy các task đó mới chạy được với LLM giả. Ngoài ra mọi task đang dùng chung trần 800 token. Sau hạn bạn đã thêm consumer và lọc schema, tuần sau mình xem lại. Gợi ý: đầu tuần chạy một lần smoke trên model thật với 1 PDF nhỏ (tốn vài cent), rồi biến nó thành bước kiểm trước mỗi lần merge.
- Rủi ro lớn nhất là đổi sang v2 giữa tuần: viết lại PRD/spec ngày 30/10, tới hạn mới xong 14/34 task, và code đang có hai luồng v1/v2 dở song song. Kế hoạch tuần 4 liệt kê 6 màn/luồng v2 cộng phần luyện tập nhưng không có việc deploy. Bạn nên chốt demo bằng một luồng (v1, hoặc vòng v2 tối thiểu), khoá phạm vi, và deploy bản tối thiểu trước giữa tuần.
- Spec v2, ADR và CLAUDE.md vẫn nằm trong thư mục bị `.gitignore`. Mình đã nhắc từ tuần 1, trong khi code dẫn tới ADR khoảng 480 chỗ và tới US hơn 1.100 chỗ. Người đọc repo không có cách đối chiếu code với spec. Bạn đưa ít nhất PRD/spec v2 lên repo nhé.
- Phần chạy 5 luồng song song được mô tả rất cụ thể: khoá migration cho một luồng, kiểm bằng chứng trước khi merge, retro theo số liệu. Tự nhận xét cũng nêu thẳng lỗi của chính quy trình (31 lần merge không retro, agent commit nhầm nhánh) và cách bạn đã chặn. Code review xác nhận PR nào cũng có Làm gì / Vì sao / Cách kiểm / DoD, và ruff, pyright strict, eslint, tsc đều sạch trên khoảng 118 nghìn dòng thêm mới.
- Phần bảo mật làm kỹ: dữ liệu người dùng được rào trước khi vào prompt, mỗi tài khoản có trần chi phí AI, có test quét mọi route thiếu xác thực. Code review thử truy cập chéo hai tài khoản và đều nhận 404.
- Bạn tự ghi có phiên điều phối tốn hơn 100M token, ảnh hưởng tới ae dùng chung. Việc còn lại của tuần 4 chủ yếu là ghép nối và kiểm thử, không cần viết thêm nhiều code. Vì vậy nên giảm số luồng song song và đặt trần token cho mỗi phiên điều phối.
