# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** |  |
| **Tuần** | 3 |
| **Nội dung** | Build MVP |
| **Hạn nộp** | Trước 19:00 Chủ nhật 01/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Holocron |
| **Ý tưởng** | Holocron là app desktop (Tauri, SQLite local) cho sinh viên tự ôn thi nhiều môn. Nhập tài liệu môn học (PDF slide, giáo trình, đề cương) → tách thành kho tri thức (Knowledge Vault) → sinh câu hỏi ôn tập. Mọi khẳng định kiến thức đều kèm trích dẫn nguyên văn từ tài liệu. Không có API key LLM vẫn chạy phần offline. Hiểu đơn giản tính đến hiện tại MVP là như vậy|

---

## Kết quả so với kế hoạch tuần trước

- sáng 26/10/2026: Quyết định dùng claude bào tối đa, nhận ra rằng trong gr share có 1 ông bào, nếu mình tiết kiệm thì chỉ làm chậm tiến độ và thiệt mình. Nupakaichi
- Nửa đầu tuần:
  - MVP cơ bản đã xong vào 27/10, hoàn thiện frontend và release bản ``0.2.0-alpha`` vào 28/10. Luồng cơ bản là: Nhập tài liệu -> bóc data -> user duyệt -> tạo câu trả lời trắc nghiệm và câu hỏi lí thuyết, có trích dẫn -> dữ liệu được người dùng có thể bóc tách thủ công bằng tay. Cụ thể hơn: nhập PDF theo tầng (lớp chữ → OCR Tesseract → đối chiếu RapidOCR), xem lại và xác nhận từng trang để đảm bảo kết quả, Vault (chunk, tìm BM25, cặp khái niệm), POST /v1/blueprints + sinh câu MCQ lý thuyết tất định kèm trích dẫn và số trang, màn Ôn tập gọi backend thật, lưu SQLite thay in-memory.
  - LLM và VLM thì do những vấn đề rất lớn trong quá trình bóc tách đã rời lại sau, tuần sau sẽ làm tiếp. Những cái này thì khá đơn giản do test local rồi, hiệu quả nói chung là vượt bậc luôn. 
  - Test tài liệu scan thô / chữ viết tay v.v... thì chưa làm được. Sẽ cố gắng làm trong tuần này. (Thực sự phần OCR -> data kia rất khê).
- Nửa sau tuần: 
  - Câu trả lời tự luận có thể chấm offline được, đã xong ở mức MVP. Theo độ phủ n-gram để chấm, khớp x/y ý trong đáp án. 
  - Làm 1 số giao diện như ôn tập, lịch sử làm, ôn lại câu sai v.v.... 
  - Làm được bản windows đầu tiên dạng zip portable. Mở trên trình duyệt.
- Đã thay đổi rất nhiều lần hướng tiếp cận vụ bóc tách data OCR. Từ theo dòng sang theo khối (29/10)
  - Demo môn Kỹ thuật Vi xử lý nhận diện kém. Quyết định đổi sang Trang -> Khối -> Đơn vị khái niệm. Khối sạch xác nhận hàng loạt, chỉ khối có cờ sau bước so sánh 2 lần duyệt thì mới phải xem lại.
  - Demo đo trên 3 chương pdf chuyeenr từ slide thật (187 trang) thì đạt tỉ lệ chính xác 81%. Môn này lẫn lộn từ bảng, thanh ghi, code, công thức toán học nên khá khê, tỉ lệ 81% là cao. Dự kiến tuần sau cố lên 95%
  - Tự đề xuất khái niệm tại local luôn, con trỏ span pointer  để cắt đoạn văn nguyên văn. 
  - Sản phẩm vượt qua hơn 5180 test backend. Đúng gần 95%, đây là khá cao nhưng đoạn này cũng khê do lúc đấy chưa bắt đủ các trường hợp xấu. Dự kiến bắt đủ thì rơi xuống tầm 85%.

- Chưa đạt so với mục tiêu:
  - Hoãn phát hành ``0.3.0-alpha`` do cái luồng mà tối thiểu hóa cho người dùng: Nhập dữ liệu -> ra data thì quá khê, đốt token rồi cũng chưa làm nổi nữa. Cái này thì chưa chạy trọn vẹn được. Mục tiêu là máy tự xử lí local, có VLM hoặc API Key (người dùng tự thêm) thì quá tốt từ đó máy tự xử lí vụ data lỗi, tự quyết định gộp nội dung định nghĩa, tự đọc và tự phân chia các đầu mục theo data. VLM dualpass thì càng lùi hơn, chắc cỡ ```0.4.0-alpha``.
  - Tauri desktop app chưa xong.
  - 
## Tự nhận xét

- Một điều tốt là đã học được cách tổng hợp và tự tìm thông tin song song với AI. Tự import các thứ vào để tăng sức mạnh cho AI. Bên cạnh đó là phối hợp nhiều thứ để nó cho mình kết quả tốt nhất. Ban đầu là nhờ nó tư vấn -> làm theo nhưng nhận ra rằng khi ra sản phẩm thì cực khê nên đã tự làm.
- Biết cắt bỏ những mục tiêu và tập trung đến việc PRJ THỰC SỰ HOẠT ĐỘNG TRƠN TRU TẠI MVP. Hoãn nhiều phết, từ phát hành, đến tính toán, VLM/LLM v.v....
- Tuy vậy tạch kha khá mục tiêu:
  - Nhập 1 chạm chạy thẳng trên local, UI hiển thị. 
  - Tauri Desktop app....
  - Nhập ảnh/ nội dung viết tay -> bóc tách
- Tuần này đã nghĩ được sâu hơn, thực sự xác định cái mình cần. Cố gắng đào sâu, tìm cách xử lí (đổi cách nắm bắt vụ OCR scan, thêm nhiều tool kiểm tra (nói là nhiều nma chỉ có 1 thôi, vừa đủ), đổi hướng tiếp cận với OCR v.v...) khá nhiều lần và hợp lí. Khá tự hào về tuần này của mình.

- Tuần này do làm rất nhiều cái thực sự chưa từng thử và chưa từng biết. Cũng như cân bằng giữa học -> đi làm -> yêu đương v.v... khá khê. Nên quản lí thời gian làm chưa tốt, over9 nhiều, khá ảnh hưởng sức khỏe.

- Học được quản lí sub agents, tối ưu dùng model nào cho cái gì, plan kế hoạch cho subagents chạy liên tục nhưng tiết kiệm tokens. Tuy vậy khi debug hoặc chủ quan thì rất hay để subagents tự chạy tào lao (do chưa chuẩn hóa lại prompt) nên có 2 lần đốt hết token pool của ae (chưa tính 3 lần đã xin phép ae). 

- Đã thực sự biết resolve conflict (thực sự hiểu code đang làm cdj).

## Kế hoạch tuần tới

- 02/11: Phải xong luồng nhập 1 chạm. Từ đó release ``0.4.0-alpha``.
- 03 - 04/11: Bộ dựng khối / sơ đồ bảng biểu v.v... Cắt ảnh từ slide v.v....
- 04/11: Hoàn thành vụ VLM/API Key tích hợp. Đồng thời làm cả những cái như lịch sử làm bài, câu sai nhiều v.v...
- 05/11 - 07/11: THực sự siêu debug để cho các test về ngưỡng an toàn: recall RapidOCR < 10%, NEedReview <5%, 
- 07/11: Release bản Tauri 1.0.0 chạy thử trên các hệ điều hành bằng máy ảo. 
- 07/11 - 09/11: Không code nữa, tập pitching sản phẩm

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Code review chi tiết: [issue "Code review Checkpoint 3" trong repo Holocron](https://github.com/Nha-Cong-Dong/Holocron/issues?q=is%3Aissue%20%22Code%20review%20Checkpoint%203%22)
- Đối chiếu kế hoạch tuần 2: nửa đầu tuần đạt. Luồng nhập PDF → Vault → cặp khái niệm → câu MCQ4 lý thuyết kèm trích dẫn và số trang chạy thật; code review tự chạy qua API và dữ liệu vẫn còn sau khi khởi động lại. Đã có tag `v0.2.0-alpha` trên `develop`. Scan thô, chữ viết tay và nhiều mục của nửa sau tuần chưa làm, report đã ghi thẳng.
- Có vài mục report ghi đã xong nhưng code tại hạn chưa có:
  - Chấm tự luận offline: backend không có route chấm, `essay_grading_offline` trả `not_implemented`, giao diện tự luận chỉ chạy với mock.
  - Lịch sử và ôn câu sai: mới có nút "Sắp có".
  - Tự đề xuất khái niệm tại local: endpoint trả 409 khi chưa cấu hình LLM.
  
  Trước khi viết report, bạn đối chiếu từng mục "đã xong" với route thật. Phần nào mới có giao diện và mock thì ghi rõ như vậy.
- Tự nhận xét "biết cắt bỏ mục tiêu" khớp với việc hoãn LLM/VLM. Nhưng năm commit cuối trước hạn đều là các vòng review ADR-010 (72 KB tài liệu, chưa có dòng code nào). Kế hoạch tuần 4 lại thêm bộ dựng khối, VLM/API key và Tauri 1.0. Một tuần còn lại không đủ cho tất cả.
- Gợi ý kế hoạch tuần 4:
  - Làm xong, hoặc cắt hẳn, phần lịch sử và ôn câu sai.
  - Sửa lỗi câu trùng.
  - Chạy cả luồng trên tài liệu thật của một môn.
  - Phát hành zip từ `main` kèm GitHub Release.
  - ADR-010, VLM và Tauri để sau hackathon.
- Hai lỗi cần sửa:
  - Dấu vân tay chống trùng đang tính cả phương án nhiễu, nên cùng một câu hỏi xuất hiện hai lần ở 8/20 đề 5 câu.
  - API local chưa chống CSRF (code review đã tái hiện được), nên một trang web bất kỳ có thể gọi API của app khi app đang chạy.
- Có nhiều phần làm tốt mà report không kể:
  - Đo trước khi chỉnh ngưỡng, có tách tập dev và tập chấm mù (ADR-008).
  - Vá DNS rebinding.
  - Khoá dependency bằng hash.
  - 5.061 test backend với coverage 97,58%.
- Tại hạn, `main` vẫn ở bản 27/10, chậm 488 commit so với `develop`; README dừng ở 26/10. Ai mở repo trên GitHub cũng sẽ thấy bản cũ. Bạn merge vào `main` và cập nhật README ở mỗi checkpoint nhé.
- Bạn tự ghi làm quá giờ nhiều đến mức ảnh hưởng sức khỏe, và có 2 lần subagent chạy hết token pool chung. Tuần cuối nên ưu tiên ngủ đủ. Với subagent, đặt giới hạn rõ cho mỗi lần chạy, nhất là lúc debug.
- Ô "Tên" ở đầu report vẫn để trống.
- Ghi chú: report được commit lúc 23:54 01/11, sau hạn 19:00.
