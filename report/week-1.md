# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ |
| **Tên**                | Vương Trí Bách                                                                                               |
| **Tuần**               | 1                                                                                                            |
| **Nội dung**           | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN)                                                                     |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.                          |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/DailyDiary                                                                  |
| **Ý tưởng**            | Nhật ký trực quan hàng ngày với tính năng Year in Pixels, dòng thời gian và ảnh kỷ niệm                      |

---

## Đã làm được gì trong tuần

- Tìm hiểu về Claude Chat, Claude Code, Claude Design 
- Lên ý tưởng và bước đầu xây dựng nền tảng cho dự án của ý tưởng đó
- Thông tin thêm về ý tưởng: [DailyDiary's Document](https://docs.google.com/document/d/1I4VXv9zzySLXQ9PuNopWB4Dq0LccZSKeFfKDU09SX0U/edit?tab=t.tq73o12yii89#heading=h.hf7wd7lk91rk)
- Tìm hiểu về Claude: [Week1 - Claude](https://docs.google.com/document/d/15yn7G_479a-ANII3fYraiRyQPvRl1JKSEgvMp74eJ9k/edit?tab=t.0)

## Tự nhận xét

- Trong tuần này nếu như xuất phát sớm hơn thì có thể đào sâu hơn và các công cụ Claude.
- Bước đầu quen với việc sử dụng công cụ và tìm kiếm nguồn thông tin học tập
- Cần tiếp tục thực hành để hiểu rõ hơn về những gì mình đã tự tìm hiểu được.
  

## Kế hoạch tuần tới

- Tạo Design System tốt để sử dụng cho dự án
- Xây dựng UI dự án dựa trên nền của Design System đã làm nên
- Đưa sản phẩm lên cho mọi người dùng thử trên Web 

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Ý tưởng DailyDiary rõ và có điểm nhấn riêng (Year in Pixels, dòng thời gian, ảnh kỷ niệm).
- Phần học đang nằm hết trong 2 Google Docs. Report là bản ghi để đối chiếu qua từng tuần, nên bạn tóm 3–5 ý chính ngay trong report: học được gì về Claude Chat, Claude Code, Claude Design, đã thử gì.
- Repo đã có `docs/Project_Specs.md` và `docs/MVP_Plan.md` rất chi tiết: chia lát cắt dọc, dừng duyệt sau mỗi bước, gắn rate limit ngay khi viết endpoint. Phần này nhiều hơn hẳn những gì report kể, nên nhắc tới trong report.
- `MVP_Plan.md` có 16 bước (0–15), gồm đăng nhập Google, ảnh qua presigned URL, tự động lưu bằng IndexedDB có xử lý xung đột, tìm kiếm, xuất dữ liệu, xoá tài khoản, Sentry, sao lưu. Như vậy là quá nhiều cho 3 tuần. Gợi ý giữ lõi: viết nhật ký kèm ảnh, dòng thời gian, Year in Pixels; phần còn lại để sau.
- Kế hoạch tuần tới (Design System → UI → đưa lên web cho mọi người dùng thử) đang đi thẳng vào giao diện. Checkpoint 2 là chốt spec và dựng khung chạy được: spec hiện vẫn ghi "Bản nháp… chờ duyệt phần còn lại", còn `main` mới có commit setup (khung đang ở nhánh `chore/project-foundation`). Nên chốt spec và đưa khung lên `main` trước, rồi mới làm UI.
- Tách kế hoạch thành đầu việc đo được, ví dụ "chốt Project_Specs bản 1.0", "web + API chạy local, README có cách chạy", "design system: màu, chữ và 5 component cơ bản".
