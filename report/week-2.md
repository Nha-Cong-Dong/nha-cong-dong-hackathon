# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên**                | Nguyễn Quốc Khánh                                                                                                                                                                                                                                                                                                           |
| **Tuần**               | 2                                                                                                                                                                                                                                                                                                                           |
| **Nội dung**           | Chốt spec và dựng khung dự án                                                                                                                                                                                                                                                                                               |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 25/10/2026 (giờ VN)                                                                                                                                                                                                                                                                                    |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.                                                                                                                                                                                                                                         |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/PokeNexus                                                                                                                                                                                                                                                                                  |
| **Ý tưởng**            | Trang web về đề tài pokemon. Với nội dung chủ yếu là giới thiệu các chủng loại pokemon xuất hiệu xuyên suốt trong tác phẩm cùng tên. Các chức năng chính là giới thiệu tên, hình ảnh, hệ, thuộc tính, lộ trình tiến hóa giữa các pokemon; Thiết lập được bảng so sánh giữa 2 pokemon bất kì và đề xuất pokemon cho đội hình |

---

## Kết quả so với kế hoạch tuần trước

- So với tuần trước đã xây dựng được dự án bao gồm các mục như:
  - Tạo lập repo, xây dựng các file kế hoạch, khung dự án như: SPEC.md, MAP.md, design-system.md, AGENTS.md, roadmap.md,...
  - Tạo được một luồng chạy cho vibe code và làm việc với github: CLAUDE.md, architechture.md, folder-structure.md, git-workflow.md, github-setup.md.
- Đã bắt tay chia dự án thành 3 phần lớn là:
  - Database: Sử dụng MySQL 8.4 để lưu các dữ liệu về thông số pokemon nói chung
  - Backend: Sử dụng Spring Boot để xây dựng BE; JDK 25; Áp dụng mô hình kiến trúc phân lớp kết hợp với nguyên tắc tách biệt trách nhiệm.
  - Frontend: Sử dụng React và áp dụng Claude Design để xây dựng UI/UX; có bổ sung sửa đổi và kiến trúc trước bằng file design-system.md 

## Tự nhận xét

- Đã có một vài hiểu biết cơ bản về việc sử dụng Claude như:
  - Áp dụng được các skill, plugin vào môi trường Claude để chuẩn hóa commit, cách thực hiện code và tư duy của AI, hỗ trợ xây dựng giao diện,....
  - Đã có nhận thức về việc phải làm khi xây dựng 1 dự án là trước khi code cần xây dựng các file spec, map, roadmap, plan để sau đó cứ chạy theo luồng đã đề ra từ đầu, tránh để AI tự chạy và thay đổi đi lệch khỏi ý định ban đầu
  - Có áp dụng được Claude Design vào xây dựng và kiểm thử UI/UX để có giao diện ưng ý nhất; bắt đầu làm quen với việc sử dụng subagent để làm các nhiệm vụ code, kiểm thử song song
  - Chi tiết về cách sử dụng Claude: chia ra 2 loại file CLAUDE.md là file chạy cho user để tất cả các dự án cùng áp dụng và CLAUDE.local.md để chạy những quy tắc riêng cho một dự án đặc thù; Trong file ghi rõ cách tư duy trước khi bắt tay thực hiện lệnh là phải nắm rõ goal, chưa rõ phần nào lập tức hỏi lại, sử dụng cơ chế code đến đâu test đến đó để fix lỗi ngay lập tức, dưới cuối mỗi lượt chạy lệnh sẽ hiển thị bảng tổng hợp thông tin về các điều đã làm, các điều cần lưu ý, các đề xuất cho lệnh tiếp theo,...

- Nhược điểm: 
  - Vẫn còn phụ thuộc vào các đề xuất khi AI yêu cầu lựa chọn (Hầu như lúc nào cũng chọn cái recommend).
  - Cảm thấy dự án của bản thân đang khá chậm so với anh em (Mới chỉ xây kiến trúc, một phần database và UI); chưa động đến Backend và cốt lõi sâu.

## Kế hoạch tuần tới

- Dựa vào kiến trúc dự án đã xây trước đó để bắt tay vào làm các công việc như:
  - Cào dữ liệu database: Lấy các dữ liệu thông số pokemon, hình ảnh minh họa của các pokemon, các video, tài liệu để phục vụ hoạt ảnh UI hoặc các minigame nhỏ trong dự án
  - Tiến hành xây dựng backend: thực hiện các task để hoàn thành được MVP cơ bản như có trang giới thiệu pokemon (Pokedex), có cơ chế so sánh 2 pokemon với nhau, hiển thị được bảng tương khắc giữa các hệ, bước đầu xây dựng được cơ chế đề xuất pokemon còn thiếu vào đội hình. 
  - Áp dụng các thiết kế UI đã dựng từ Claude Design để xây dựng frontend cho dự án và chạy thử thành công.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 2" trong repo PokeNexus](https://github.com/Nha-Cong-Dong/PokeNexus/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%202%22)
- Tiến bộ rõ so với tuần 1: repo PokeNexus có spec 1.0, khung backend Spring Boot và frontend React, CLAUDE.md, 5 ADR, CI. Bạn làm theo cả 2 góp ý tuần 1: dùng CSV của PokéAPI (ADR 0002) và định nghĩa tiêu chí gợi ý đội hình trong `docs/architecture.md`.
- Tự nhận xét "chưa động đến Backend" đang đánh giá thấp mình: khung backend đã có health endpoint và 22 unit test từ 21/10.
- Report mô tả CLAUDE.md là file dùng chung cho mọi dự án và CLAUDE.local.md là quy tắc riêng của dự án, ngược với Claude Code. File dùng chung cho mọi dự án là `~/.claude/CLAUDE.md`; `CLAUDE.md` trong repo là quy tắc của dự án, commit lên cho mọi người; `CLAUDE.local.md` là ghi chú cá nhân, không commit. CLAUDE.md trong repo của bạn đang ghi đúng như vậy.
- Lộ trình trong repo lệch lịch hackathon một tuần: `docs/roadmap.md` và CLAUDE.md đặt MVP 02–08/11, demo 15/11, trong khi hackathon cần MVP ngày 01/11 và demo ngày 08/11. Claude đọc các file này mỗi phiên nên sẽ làm theo lịch sai; bạn sửa ngay nhé.
- Kế hoạch tuần 3 có "cào dữ liệu, video, minigame", ngược với ADR 0002 và phạm vi MVP trong `docs/product.md`. Sau hạn bạn đã nạp CSV PokéAPI và làm Pokédex; tuần 3 nên dồn vào 4 việc MVP (Pokédex, so sánh 2 Pokémon, bảng tương khắc, gợi ý đội hình), bỏ cào dữ liệu và minigame.
- Repo đang có khoảng 4.300 dòng Markdown so với 1.300 dòng code; CLAUDE.md và README còn ghi trạng thái tuần 1, README chưa có cách chạy. Cập nhật tài liệu theo code và thêm mục chạy local.
- "Hầu như lúc nào cũng chọn cái recommend" là tự quan sát tốt. Mỗi lần chọn, thử viết một câu vì sao chọn phương án đó; không viết được thì hỏi lại Claude về đánh đổi giữa các phương án.
