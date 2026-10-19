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

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- 

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- 

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
