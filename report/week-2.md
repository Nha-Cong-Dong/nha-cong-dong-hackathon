# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Hà Tiến Triệu |
| **Tuần** | 2 |
| **Nội dung** | Chốt spec và dựng khung dự án |
| **Hạn nộp** | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Holocron |
| **Ý tưởng** | Holocron bây giờ là bộ sinh “đề song sinh” (Twin Questions) cho bài tính toán môn Hệ điều hành, xuất phát từ ảnh đề thi cũ. Nó không còn là hệ thống ôn thi đa môn nữa. Phạm vi hẹp lại thành một Golden Path: CPU Scheduling (Round Robin, SJF non-preemptive). Vấn đề nó giải quyết là hai điều có thật: 1. Chatbot tính nhẩm sai Waiting/Turnaround Time. 2.Đề cũ là ảnh mờ, VLM đọc sai một chữ số thì cả lời giải sai mà không ai biết. Ý tưởng cốt lõi là tách hai tầng: Tầng 1: Deterministic Core: mọi con số (đáp án, phương án nhiễu, sơ đồ Gantt) do code chạy trong sandbox cô lập tính ra. LLM chỉ viết mã template, không bao giờ tự tính hay tự viết số. Spec chốt 5 bất biến (I1–I5) để cưỡng chế điều này. Tầng 2: Knowledge Vault UI + Ingestion Gate: ảnh đề được đọc 2 lượt độc lập (dual-pass), lệch ở ô nào thì ô đó bị đánh dấu. Con người phải sửa hoặc xác nhận các ô bị chặn (BLOCKING) trước khi đề được đưa vào tính toán. Luồng chạy là: upload ảnh → dual-pass + Gate (5 tín hiệu, có self-solve) → người dùng sửa ô và approve → tạo blueprint → sandbox sinh 3 Twin Question kèm Gantt, badge “lỗi nhận thức” (misconception) cho từng phương án sai, và trích dẫn slide. |

---

## Kết quả so với kế hoạch tuần trước

- Đã được đưa trở lại mặt đất, không còn bay bổng như trước. Ý tưởng tuần 1 thực sự hơi quá so với scope 4 tuần Hackathon, không phải là không khả thi, mà phát triển nó cần kha khá nhiều thời gian nữa đấy chứ không nên dừng lại ở 4 tuần. Nếu cố phát triển tiếp, rất dễ rơi vào hallu rồi nói chung là vẽ ra linh tinh chứ không đúng. Trong ngày đầu tiên tuần 2 đã thực sự triển khai và thu nhỏ cấu trúc cũng như quy mô xuống tối đa để thử nghiệm MVP, thử nghiệm tính năng và hoạch định lại project.
- Tuy vậy bước đầu đã đạt được nhiều kết quả khá tốt:
  - Schemas, sandbox, template RR, Gate API, upload (đang dùng MockDualPassExtractor chứ chưa phải VLM thật), và frontend upload + Table Auditor. Còn lại là template SJF, Gantt, blueprint và twins API, Twin Viewer và VLM thật. Tất cả đã xong trong ngày đầu tiên tuần 2 (Tính đến bây giờ là 22h40 ngày 19/10). Mặc dù đa số là dữ liệu dạng "ảo" / scope sẵn, chưa input hay thêm đầu vào v.v... Cũng như đang chưa dùng các chức năng cốt lõi như VLM nhưng đó là 1 bước tiến tốt.
- Đã dùng và vọc vạch 100m tokens claude, thử qua kha khá model trong 12 tiếng liên tục (trừ fable). Đa thực sự dùng claude / claude code theo cách nào cũng có: súc vật, hiền lành. 
  - Về tổng quan, hiện đang dùng token khá thông minh và tiết kiệm tốt:
    - Tối ưu prompt cache cực tốt: hơn 92% trong số 90m token là cache read. Điều này cho thấy cơ chế caching đang hoạt động tối đa, tránh được sự lãng phí cho chi phí đọc lại codebase khủng lồ.
  - Hiểu được cơ chế đốt quota, tối ưu tốt để có thể dư giả dùng rất nhiều tác vụ bố đời trong khoảng thời gian 5 tiếng. 
  - Hạn chế:
    - DÙng Opus là chính (hình như là liên tục trong 1 phiên 5 tiếng) - do quên đổi model thôi chứ giờ dùng thông minh hơn tí rồi
    - 89% usage nằm ở vùng >150k context (theo số liệu từ 80m tokens). COntext hiện tại đang nạp vào quá lớn, thường liên tục bị cảnh báo > 5kbi context input. Mai thử nghiệm `/compact` và `/clear` trước khi sang các nhánh hoặc sang task mới để clear ngữ cảnh.
    - 18% context luôn thường trực (always-on) trên 40k tokens do file CLAUDE.md. Cái này chưa có định hướng fix
  - **Đây coi như là nhật ký cho đến 23h ngày 19/10/2026**


- Sau 3 ngày không động vào project nhưng không ngừng nghĩ về project thì đã có rất nhiều plan, định hướng và thay đổi cho project so với bản trước đây. Cụ thể
  - Đổi phạm vi từ một môn sang đa môn. Tức là giờ đây MVP sẽ cố gắng chạy ổn định với bất cứ loại input nào dạng pdf, tách nội dung rồi phân thành các phần để truy suất, đồng thời tạo câu hỏi tự luận cho người dùng. Định hướng tương lai sẽ phát triển tracking hình ảnh rồi thì chữ viết tay để chuyển hóa lại (khê)
  - Thêm nhập tài liệu môn học (PDF slide, giáo trình, đề cương) mọi khẳng định gắn trích dẫn nguyên văn đã kiểm chứng (so khớp sau chuẩn hoá NFC).
  - Nhập PDF theo tầng như: lớp chữ, rồi OCR Tesseract (tiếng Việt), rồi đối chiếu RapidOCR và nhận bảng (riêng vụ nhận bảng này chưa test xem); có xem lại từng trang. Chọn Tesseract vì đo trên scan giả lập thấy RapidOCR không đọc được dấu thanh :v.
  - Thêm câu hỏi lý thuyết sinh tất định từ cặp khái niệm–định nghĩa (LLM không soạn thân câu hay phương án). Thực ra đã định add API key thủ công để tạo câu hỏi dạng trắc nghiệm (khê).
  - Thêm hai loại câu hỏi tự luận đó là MCQ và ESSAY; mỗi môn có exam_format (môn năm 1-2 chủ yếu trắc nghiệm, năm 3-4 chủ yếu tự luận). Tự luận thì hiện tại MVP chỉ làm "trình bày khái niệm", chấm offline bằng độ phủ n-gram, report lại là "khớp x/y ý".
  - Không có API key cho LLM vẫn chạy phần offline, app báo khả năng nào đang có. Đang test các khả năng như tạo câu hỏi trắc nghiệm (khê) với API Key của LLM.
  - Chốt hướng làm từ website sang desktop app (Tauri), lưu dữ liệu bằng SQLite local, nhập tài liệu bất đồng bộ.
  - Câu tính toán làm ở luồng song song, không chặn luồng chính ( đang tính lùi sau MVP)
  - Đổi cách làm từ việc người dùng tự làm (lúc rảnh) sau đó kiểm tra, trả lời và check liên tục thành việc cho nhiều sub-agent, khi làm việc xong thì tạo thành nhánh, mỗi nhánh có review độc lập, có cả kiểm tra bằng github bot (cái này thấy là khuyên dùng). Tuy thế đang giới hạn 1 session sub-agent khoảng 2 tiếng, sau 2 tiếng t sẽ tự vào, đọc report, xem qua toàn bộ thay đổi, định hướng làm tiếp và duyệt. VỤ này chưa nghĩ ra phương án nào ngon hơn nen chưa thể treo xuyên đêm được. SUbagent cũng khá ngu khi dừng ngay lập tức nếu có hết token pool (tại t, đã fix ở claude.md).

- Tuần này dù làm thực chất không nhiều do phải cân đối thi giữa kỳ nhiều môn + di làm liên tục mấy hôm để bù cho tgian nghỉ (dù chưa xong). Nhưng cũng có định hướng cụ thể hơn, suy nghĩ sâu xa hơn vào đề bài + prj mà mình chọn. Đồng thời cũng rèn luyện được cách xài claude khá hay ho và mới lạ. Nói chung đối với t là tuần này hiệu quả, tự chấm 7.5/10, tuần sau cố lên 8/10.

- Đối chiếu với kế hoạch tuần 1:
  - Chốt specification cục bộ (bài toán, giải pháp, tệp người dùng, tech stack, phạm vi MVP): hoàn thành, vượt mức đề ra kha khá.
  - Bộ đặc tả chi tiết đến schema và endpoint: hoàn thành.
  - User flow, database schema, API contracts: phần lớn tạm ổn - có thể tính là đã xong. Contract và schema SQLite đã viết và đã có PR; user flow mới ở mức luồng trong spec, chưa kiểm bằng giao diện thật vì frontend mới làm một phần, tuần sau sẽ định hướng tìm hiểu và sử dụng Claude Design.
  - Lấy 2-3 tính năng cốt lõi cho MVP: hoàn thành (các tính năng đó bao gồm: nhập tài liệu vào Vault; sinh câu hỏi có kiểm chứng; nhập đề qua Gate).
  - Hoàn thiện repo với CLAUDE.md thật kỹ: hoàn thành.
  - Vừa học vừa thử nghiệm Claude và Claude Code: hoàn thành, thêm subagent, chạy không người, theo dõi token, dùng model hợp lí để tiết kiệm token tối đa, reset context window, rồi thì đổi và đóng các session từ claude code đến claude desktop. 


## Tự nhận xét

- DDieuf đang làm tốt:
  - Khá nghiêm túc làm, cũng như khá tập trung. Tuần vừa rồi tuy làm không nhiều lắm nhưng khá hiệu quả.
  - Spec đi nhanh hơn dự kiến. Hướng sản phẩm cũng rõ ràng hơn chứ không còn là ý tưởng vẽ vời khủng khiếp nữa.
- Chưa tốt:
  - Thời gian làm thực tế khá ít. Thực tế dành 16-18 tiếng làm tuần này, coi như là gần 3 tiếng 1 ngày. Vậy là ít hơn so với thực tế, đồng thời thực tế cách làm việc cũ khá chậm. Đã đổi cách làm việc và đang test xem có hiệu quả không. Tuần này kẹt 3 ngày do kiểm tra giữa kỳ căng và đi làm bù.
  - Tài liệu thật để tets chưa đủ rộng...

## Kế hoạch tuần tới

- Nửa đầu tuần: hoàn thành MVP cơ bản. Luồng đơn giản sẽ là: nhập tài liệu, nhận câu trắc nghiệm lý thuyết có trích dẫn nguyên văn, làm bài và xem đáp án, tất cả trong app offline, sau đó có thể đổi qua chọn phương án trắc nghiệm 4 đáp án, có thể dùng API có sẵn hoặc thêm API vào để LLM tạo câu trả lời cho chính xác nhất + lời giải thích lời giải. Sau đó test thử từ tài liệu dạng scan thô và chữ viết tay (hơi khê, hơi khó).
- Nửa sau tuần: mở rộng điên cuồng luôn, gồm câu tự luận chấm offline, câu hỏi tính toán, giao diện ôn tập (lịch sử, ôn câu sai v.v...) và bản windows đầu tiên.
- Hiện tại mới có plan như vậy, tuy vậy sẽ cố gắng đẩy nhanh nhất có thể.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo Holocron](https://github.com/Nha-Cong-Dong/Holocron/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Các đầu việc kế hoạch tuần 1 đều xong và code review xác nhận: spec tới schema và endpoint, API contract, CLAUDE.md kỹ, khung chạy được với 233 test pass, coverage 99,6%, CI chạy cả Linux và Windows.
- Report tự mâu thuẫn về scope: dòng Ý tưởng nói đã thu về một môn (CPU Scheduling), phần sau nói đã đổi sang đa môn, desktop Tauri, SQLite, nhập PDF có OCR. Tại hạn toàn bộ code phục vụ luồng CPU Scheduling, lát cắt MVP mới chưa có dòng code nào. Đây là lần đổi scope lớn thứ hai chỉ trong một tuần.
- Kế hoạch tuần 3 có "nửa sau tuần: mở rộng điên cuồng" (tự luận, câu tính toán, giao diện ôn tập, bản Windows), đi ngược mục tiêu: tuần 3 phải xong MVP, tuần 4 hoàn thiện và demo. Gợi ý chốt MVP đúng luồng bạn viết ở nửa đầu tuần (nhập tài liệu → câu trắc nghiệm có trích dẫn → làm bài và xem đáp án), phần còn lại để sau hackathon.
- Code review đo được lỗi ở tính năng lõi: batch 3 twin thường sinh đề trùng (10/10 batch có trùng), và trong app thật luồng twin trả 404 vì chưa có `POST /v1/blueprints`. Sandbox chạy `exec` đã tách tiến trình, có giới hạn tài nguyên, nhưng chưa cô lập ở mức hệ điều hành; cần bổ sung trước khi cho LLM viết template.
- Phần thống kê token rất có giá trị (92% là cache read, 89% usage ở vùng trên 150k context). Với vấn đề CLAUDE.md chiếm khoảng 40k token thường trực: gợi ý rút CLAUDE.md về các quy tắc cốt lõi, chuyển phần chi tiết sang file trong `docs/` và chỉ để link cho Claude đọc khi cần.
- Report tuần này rất dài và giống nhật ký; ưu tiên gạch đầu dòng ngắn theo đúng các mục, phần nhật ký có thể để trong repo.
- Tự nhận xét trung thực về thời gian (16–18 tiếng/tuần, đang thi giữa kỳ). Với quỹ thời gian đó, càng nên giữ scope nhỏ.
- Ghi chú: bản cập nhật cuối của report được commit lúc 19:22 25/10, sau hạn 22 phút; bản tại hạn là bản 19/10, mục kế hoạch còn trống.
