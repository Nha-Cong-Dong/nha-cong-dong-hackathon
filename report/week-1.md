# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Viết Hoàn |
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp** | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/form-coach |
| **Ý tưởng** | **Motivation:** Khi tập luyện thể dục thể thao, đặc biệt những bài compound như Push up, Squat, Deadlift,... Rất nhiều người gặp khó khăn trong việc điều chỉnh động tác sao cho chuẩn, tập luyện để không gặp chấn thương... FormCoach ra đời để giải quyết vấn đề này. App sẽ vẽ khung xương và đếm rep ngay trong lúc tập, hết hiệp thì phát hiện lỗi kĩ thuật cho từng rep. Có Coach AI nhận xét từng buổi. App sẽ cho phép đề ra mục tiêu mỗi ngày, theo dõi tổng quan và có chuỗi ngày tập |

---

## Đã làm được gì trong tuần

<!-- Những gì bạn đã học, đã thử và đã làm được, kể cả ý tưởng sản phẩm -->

- **Về Claude:** 
  - Biết cách sử dụng Claude Code cơ bản, một số lệnh hay dùng
  - Một số điều cần lưu ý khi chọn model, effort khi code
  - Học cách sử dụng plan mode, lên một plan cụ thể giúp quá trình code thống nhất, dễ dàng hơn
  - Học cách viết các skill để sử dụng trong quá trình code
- **Về sản phẩm:** 
  - Chốt ý tưởng, chốt khung dự án, spec ban đầu, lên một số tính năng cần có cho MVP
  - Đã viết plan cho tuần 1
  

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Tìm ý tưởng hơi lâu
- Chưa biết đánh giá Scope của dự án
- Cần phải vừa làm vừa học rất nhiều

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Thử pose push up bằng Mediapipe
- Đếm rep bằng python, có test đơn giản
- Có trang quay trên điện thoại để test
- Quay dataset push up, gán nhãn bằng tay phục vụ cho ML

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Kế hoạch tuần tới viết cụ thể: 4 đầu việc (pose push-up bằng MediaPipe, đếm rep bằng Python có test, trang quay trên điện thoại, quay và gán nhãn dataset) đều kiểm chứng được. Tuần sau mình sẽ đối chiếu từng việc. Repo đã có commit MediaPipe estimator và bộ đếm rep sáng 19/10, đang bám đúng kế hoạch.
- Ý tưởng FormCoach có vấn đề rõ (người tự tập bài compound khó giữ đúng form, dễ chấn thương) và người dùng cụ thể.
- Repo khá chỉn chu cho tuần 1: có CLAUDE.md, `docs/ARCHITECTURE.md`, tiêu chí gán nhãn, và `docs/journal.md` ghi lại từng lần thử. Viết journal là thói quen rất tốt khi vibe code, bạn giữ nhé.
- Lộ trình trong README đang dồn coach AI, mục tiêu, streak, đồ thị, deploy và demo vào tuần 4, trong khi tuần 4 của hackathon dành cho hoàn thiện, deploy và demo. Gợi ý chốt MVP chỉ có push-up: đếm rep và phát hiện 1–2 lỗi phổ biến; coach, mục tiêu, streak để sau.
- Gán nhãn dataset bằng tay để train ML tốn khá nhiều thời gian. README đã có ý so với baseline luật; cân nhắc làm luật theo góc khớp trước, chỉ thêm ML khi luật không đủ.
- Phần học về Claude mới liệt kê (lệnh hay dùng, chọn model/effort, plan mode, viết skill) và chưa có mục Vibe Coding riêng. Tuần sau nêu ví dụ cụ thể, ví dụ skill bạn viết dùng để làm gì, hoặc một lần plan mode giúp bạn tránh làm sai.
- Tự nhận xét "chưa biết đánh giá scope" là chính xác. Khi chốt spec tuần 2, thêm một mục "không làm" để giữ scope.
