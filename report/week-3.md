# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên**                | Nguyễn Quốc Khánh                                                                                                                                                                                                                                                                                                           |
| **Tuần**               | 3                                                                                                                                                                                                                                                                                                                           |
| **Nội dung**           | Build MVP                                                                                                                                                                                                                                                                                                                   |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN)                                                                                                                                                                                                                                                                                    |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.                                                                                                                                                                                                                                         |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/PokeNexus                                                                                                                                                                                                                                                                                  |
| **Ý tưởng**            | Trang web về đề tài pokemon. Với nội dung chủ yếu là giới thiệu các chủng loại pokemon xuất hiệu xuyên suốt trong tác phẩm cùng tên. Các chức năng chính là giới thiệu tên, hình ảnh, hệ, thuộc tính, lộ trình tiến hóa giữa các pokemon; Thiết lập được bảng so sánh giữa 2 pokemon bất kì và đề xuất pokemon cho đội hình |

---

## Kết quả so với kế hoạch tuần trước

- So với tuần trước đã xây dựng được xong MVP cơ bản bao gồm các trang đầy đủ chức năng, UI/UX, giao diện có thể tương tác.
- Về phần hệ thống không có tinh chỉnh quá nhiều vì cốt lõi backend không quá nhiều thứ phức tạp.
- Về phần giao diện có bổ sung nhiều hiệu ứng, hình ảnh hơn so với kế hoạch ban đầu.
- Đã phát triển 1 số minigame nhỏ để tạo hứng thú với người xử dụng VD như các câu hỏi vui, minigame Who's that pokemon và cơ chế huy hiệu trainer.
- Về phần tối ưu hiện tại vẫn còn một số vấn đề với giao diện trên điện thoại (Cách hiển thị còn gặp nhiều điều bất hợp lý nên cần sửa lại)

## Tự nhận xét

- Bản thân bước đầu đã nhìn ra được toàn diện kết quả của dự án. Có thể nói là nhìn được một chút trái ngọt dù chưa deploy nên chưa thể test hết các trường hợp lỗi.
- Song sau khi xây dựng được đầy đủ các tính năng đã đề ra thì đang rơi vào hoàn cảnh chưa biết nên phát triển dự án thêm nữa như thế nào.
- Tự nhận thấy giá trị của dự án hiện tại không phải quá cao, cảm thấy công dụng mà dự án đem lại chỉ ở một cộng đồng chơi game nhỏ chứ không phải thứ mà ai cũng có thể tìm đến.
- Về vấn đề sử dụng AI. Đã có mày mò để dùng các thứ như MCP, gọi API nhưng chưa thành công lắm. Bắt đầu biết tiếc usage nên chủ động prompt để ứng dụng chạy rồi tranh thủ làm việc để tối ưu hiệu suất xử lý công việc.

## Kế hoạch tuần tới

- Deploy dự án để ai cũng có thể vào và xem được.
- Nghiên cứu tiếp các tính năng tiềm năng để phát triển tiếp
- Tìm các cách để kiểm thử, tìm bug và fix bug (Nếu có)
- Nghiên cứu lại tài liệu, chuẩn bị doc, slide và các kiến thức phục vụ cho buổi pitching cuối cùng.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo PokeNexus](https://github.com/Nha-Cong-Dong/PokeNexus/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- MVP xong sớm. Luồng chính F01–F07 xong từ 26/10, gồm Omni-Dex, trang chi tiết, bảng tương khắc, so sánh 2 Pokémon và Team Builder đề xuất đội. Kịch bản demo chạy ở local từ 28/10 (tag `v0.2.0`). Code review chạy lại phía frontend: lint, 322 test, build đều qua, và repo không có secret.
- Cả 6 mục code review tuần 2 đã được xử lý:
  - Lộ trình đã khớp lịch hackathon.
  - README có phần chạy nhanh.
  - Minigame được đưa vào spec ở mức Could và làm sau luồng chính.
  
  Việc bạn ghi kết quả xử lý review ngay trong repo rất đáng giữ.
- Việc chưa xong là deploy. Roadmap của chính bạn đặt T403 vào 30–31/10 và ghi "tính năng mở rộng chỉ làm sau khi T403 đạt" (`docs/roadmap.md:210`). Nhưng hai ngày đó lại dành cho minigame, huy hiệu và ghép ảnh khung cảnh. Phần cấu hình deploy (`ad92742`, ADR 0007) đã làm kỹ, giờ chỉ còn tạo tài khoản và đẩy lên.
- Report kể ít hơn nhiều so với việc đã làm. Bạn viết hệ thống "không tinh chỉnh nhiều", nhưng backend thêm khoảng 4.300 dòng (gợi ý theo lối chơi, bảng tốc độ, hồ sơ thế hệ, Dockerfile), chưa kể phần chuẩn bị deploy và nhập/xuất Showdown. Lần sau bạn đi qua từng đầu việc của kế hoạch tuần 2 (cào dữ liệu, backend, frontend theo Claude Design) và ghi kết quả của từng việc.
- Lượng code tuần này là khoảng 28.000 dòng (kể cả test) trong 6 ngày, do nhiều agent viết song song. Riêng PR #39 đã +12.398 dòng, trong khi `CONTRIBUTING.md` của bạn đặt giới hạn 400 dòng. Trước demo, bạn nên tự giải thích được cách tính điểm đội và lý do đề xuất, vì đây là câu hỏi dễ gặp nhất.
- Bạn tự nhận xét "chưa biết nên phát triển thêm như thế nào" và lo giá trị dự án chỉ dành cho một cộng đồng nhỏ. Với hackathon 4 tuần, làm tốt cho một nhóm người dùng rõ ràng là đủ. Tuần 4 không cần thêm tính năng; giá trị nằm ở bản deploy chạy ổn và buổi demo trơn tru.
- Kế hoạch tuần 4 có mục "nghiên cứu tiếp các tính năng tiềm năng", đi ngược mục tiêu tuần cuối. Gợi ý:
  - Deploy ngay 02–03/11 và đóng băng tính năng.
  - Sửa lỗi giao diện điện thoại mà bạn đã tự thấy.
  - Tổng duyệt demo 2 lần trên link thật trước 08/11.
- `PLAN.md` dài 44 KB và đang lệch trạng thái (T403, T412). README và CLAUDE.md vẫn liệt kê Recharts dù gói này đã bỏ. Claude đọc các file này mỗi phiên, nên cần cập nhật cho đúng.
- Ghi chú: report được commit lúc 23:32 01/11, sau hạn 19:00.
