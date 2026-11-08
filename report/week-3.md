# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                |
| ---------------------- | --------------------------------------------------------------------------------------- |
| **Tên**                | Vương Trí Bách                                                                          |
| **Tuần**               | 3                                                                                       |
| **Nội dung**           | Build MVP                                                                               |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 08/11/2026 (giờ VN)                                                |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.     |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/DailyDiary                                             |
| **Ý tưởng**            | Nhật ký trực quan hàng ngày với tính năng Year in Pixels, dòng thời gian và ảnh kỷ niệm |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 2: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->
Xong 
- Đã deploy lên web
- Đã tạo hai nhánh về UI. Một nhánh cải thiện UI hiện tại. Một nhánh build lại UI/UX từ đầu.

## Tự nhận xét

- Chuẩn bị cho bài pitching
- Chỉnh sửa khi gặp lỗi hoặc UI/UX chưa ưng ý

 
## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Hoàn thiện hơn các ý tưởng phát triển tiếp theo 
- Dành học tập trên trường trong lúc hoàn thiện ý tưởng.


---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo DailyDiary](https://github.com/Nha-Cong-Dong/DailyDiary/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2: deploy và nhánh UI đều đã xong. Jotly đang chạy ở `jotly.io.vn`, lỗi 403 khi ghi do thiếu `COOKIE_DOMAIN` đã được sửa (`a455a8a`). `Deploy.md` ghi đã thử đăng nhập → onboarding → viết trang → tải ảnh trên production. Như vậy MVP đã chạy end-to-end trên bản thật, đi trước lịch.
- Report viết quá ngắn so với lượng việc đã làm. Có mấy việc lớn report không nhắc:
  - Chuyển API sang chạy trên máy cá nhân qua cloudflared tunnel, và lý do chuyển.
  - OAuth đã chuyển sang chế độ production.
  - Redesign 7 giai đoạn theo design system 1.1.
  
  Report cũng ghi "hai nhánh UI", nhưng trên GitHub chỉ thấy `feat/ui-redesign`.
- Nhánh `feat/ui-redesign` làm kỹ: dùng chung token, có test cho ngày 23 và 25 giờ khi đổi giờ, có tôn trọng chế độ giảm chuyển động. Tuy vậy nhánh chưa có PR, và commit `1e1b452` ghi "docs" nhưng lại chứa file `.exe` 20 MB của skill bên thứ ba. Bỏ file này trước khi merge.
- OAuth đã mở cho mọi tài khoản Google, trong khi presigned PUT tải ảnh vẫn chưa giới hạn dung lượng (tồn từ tuần 2). R2 gắn thẻ thanh toán của bạn, nên đây là rủi ro mất tiền thật. Bạn chặn dung lượng ngay, hoặc tạm đưa OAuth về chế độ Testing.
- `Deploy.md` ghi workflow `Jobs` đang lỗi `OperationFailure`, mà Atlas M0 không tự sao lưu. Rất có thể hiện chưa có bản sao lưu DB nào, và nhật ký người dùng thật mà mất thì không lấy lại được.
- API đang chạy trên chính máy Windows bạn dùng để code. Docker Desktop chỉ chạy khi có người đăng nhập, chưa có uptime check, và `.env.prod` nằm cùng thư mục dev. Ngày demo nên có uptime check và một video dự phòng.
- Kế hoạch tuần 4 ("chuẩn bị pitching, sửa khi gặp lỗi") còn chung chung. Gợi ý viết thành việc cụ thể:
  - Sửa `Jobs` và thử khôi phục một bản sao lưu.
  - Chặn dung lượng ảnh tải lên.
  - Merge redesign qua PR.
  - Đặt uptime check.
  - Quay video demo dự phòng.
- Về commit: 12/14 commit dồn trong khoảng 26 giờ (30–31/10). Commit `21480b5` (41.863 dòng) được đẩy thẳng lên `release`, lặp lại vấn đề commit lớn của tuần trước.
- Ghi chú: report được commit lúc 19:52 01/11, sau hạn 19:00.
