# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | SkinWise |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/SkinWise.git |
| **Ý tưởng** |  |

---

## Kết quả so với kế hoạch tuần trước

<!-- Đi qua từng đầu việc trong "Kế hoạch tuần tới" của report Checkpoint 2: việc nào xong, việc nào chưa và vì sao, việc nào phát sinh thêm -->

- Các kế hoạch từ tuần hai đã hoàn thiện gần hết, nhưng có sự thay đổi - bỏ tính năng gửi câu hỏi nên phần việc phân loại câu hỏi người dùng đã bỏ đi vì tính thực tế không cao, số thông tin chính thống được tìm thấy rất ít và nên rất ít câu hỏi được phản hồi ngay lập tức phải lưu trữ lại và gửi câu trả lời sau, bất tiện nên quyết định bỏ
- Thêm 2 chức năng mới
  - Viết bog review cộng đồng:
      - Viết review kèm sản phẩm, ảnh, routine và loại da, có thể thích, lưu, bình luận, báo cáo và bấm "Thử routine này".
      - Cuối mỗi bài có phần thông tin có nguồn do web phân tích, tách riêng khỏi cảm nhận của người viết.
      - Tự kiểm duyệt: bài có chữ "trị/chữa", số điện thoại hoặc link phải chờ duyệt; 3 người báo cáo thì bài tạm ẩn.
  - Mục tiêu chăm da:
      - Chọn mục tiêu (mụn, lão hoá, thâm, da khô, nhạy cảm, vv) để xem các nhóm hoạt chất hay dùng, kèm đánh dấu nhóm nào routine của         bạn đã có.
      - Thẻ thông tin có nguồn uy tín và đoạn trích nguyên văn, tất cả đã được duyệt.
      - Lựa chọn của bạn chỉ lưu trên máy, không gửi lên máy chủ.
      - Chỉ để tham khảo: không tạo cảnh báo, không gợi ý sản phẩm.
- Thêm phần đăng nhập đăng ký và đồng bộ : Đăng nhập bằng email + mật khẩu, xác thực email, quên mật khẩu. Đồng bộ routine giữa các máy, hỏi người dùng khi hai máy cùng sửa.
## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Hoàn thiện các phần việc trong kế hoạch tuần hai
- Thêm được chức năng cho web
- Vẫn chưa biết cách tối ưu, dùng subagent tiêu tốn nhiều token không cần thiết
- Frontend đang claude gen + skill chưa bắt đầu học dùng claude design
  

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->

- Học Claude Design, làm lại phần frontend cho web 
- Duyệt 38 tên tiếng Việt "CHƯA DUYỆT" trong common_names.toml
- Chuẩn bị demo, kiểm tra lại luồng chạy tính chính xác của thông tin

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo SkinWise](https://github.com/Nha-Cong-Dong/SkinWise/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2:
  - Đã xong: thêm luật và thẻ myth (từ 5 lên 18 luật), sửa nhận diện tên gõ sai và nhãn Drug Facts, viết lời giải thích tiếng Việt cho luật mới.
  - Đã bỏ, có lý do rõ: phân loại câu hỏi, bỏ cùng tính năng gửi câu hỏi.
  - Còn dở: duyệt dữ liệu tiếng Việt, còn 38 tên "CHƯA DUYỆT", đã đưa vào kế hoạch tuần 4.
- Luồng chính chạy end-to-end trên `main`: chọn hoặc dán sản phẩm → xếp lịch → cảnh báo có nguồn. Repo có 291 test qua; build, lint, `npm audit` và `pip-audit` đều sạch. Hai lỗi lớn của tuần 2 đã sửa xong: hiểu sai "BHA" và im lặng khi nhận diện thiếu.
- Report bỏ sót mấy việc lớn đã làm: đọc nhãn bằng ảnh qua AI, xác minh 27/30 sản phẩm mẫu (có 16 sản phẩm VN), CI và cấu hình deploy.
- Trong tuần MVP, scope nở thêm 3 mảng lớn: tài khoản + đồng bộ, mục tiêu chăm da, blog review cộng đồng.
  - Blog làm cẩn thận: phân quyền đúng, ảnh được mã hoá lại và bỏ metadata, có chặn bom giải nén.
  - Nhưng tại hạn blog chỉ có ở nhánh `feat/blog`, và vào repo bằng một commit khoảng 7.000 dòng lúc 17:19 01/11, sau nhiều ngày nằm trên máy.
  
  Bạn nên commit và push mỗi ngày, rồi merge qua PR để `main` đúng là thứ report kể. Tuần 2 cũng bị lệch như vậy.
- Trước khi merge blog cần sửa hai việc:
  - `/review/login` không giới hạn số lần sai: code review thử 25 lần đều nhận 401 và không bị chặn. Trong khi đó người duyệt kiểm duyệt được mọi bài và gọi được AI tính phí.
  - Seed vẫn không gỡ luật đã xoá khỏi TOML (tồn từ tuần 2): code review chạy lại, seed báo 17 luật nhưng app vẫn trả 18.
- Kế hoạch tuần 4 "học Claude Design, làm lại frontend" là rủi ro khi chỉ còn một tuần và frontend chưa có test. Gợi ý: đóng băng tính năng, ưu tiên theo thứ tự merge `feat/blog` → deploy → quay video dự phòng cho phần AI. Nếu muốn đổi giao diện thì chỉ đổi lớp trình bày, chia thành nhiều PR nhỏ.
- Ô "Tên" đang ghi "SkinWise" (tên sản phẩm), còn ô "Ý tưởng" để trống.
- Ghi chú: bản lúc 18:58 đúng hạn; lần sửa lúc 19:03 (thêm tự nhận xét, chuyển link repo vào đúng ô) là sau hạn 19:00.
