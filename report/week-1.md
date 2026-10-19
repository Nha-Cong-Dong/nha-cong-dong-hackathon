# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Trần Kiều Minh Dũng |
| **Tuần** | 1 |
| **Nội dung** | Nêu được đã học được gì liên quan tới Claude, Claude Code, Vibe Coding, và nêu ý tưởng cho sản phẩm sẽ build |
| **Hạn nộp** | Trước 19:00 Chủ nhật 18/10/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/Essity |
| **Ý tưởng** | Hệ thống hỗ trợ active recall sử dụng thuật toán FSRS tích hợp AI |

---

## Đã làm được gì trong tuần

<!-- Những gì bạn đã học, đã thử và đã làm được, kể cả ý tưởng sản phẩm -->

- Học được về Claude, cụ thể:
    - Ở một mức độ chung chung thì Claude chỉ là chatbot, có khả năng cung cấp câu trả lời nhưng nhìn kĩ hơn, Claude chính là một trợ lí AI có khả năng hỗ trợ con người trong công việc và cuộc sống như tìm kiếm, sáng tạo, lên ý tưởng, thảo luận, nghiên cứu, code. Bên cạnh đó claude được train với các tiêu chuẩn đạo đức nên có thể chủ động ngăn chặn người dùng mượn AI làm việc phạm pháp.
    - Claude giỏi viết và sáng tạo, phân tích và nghiên cứu, giải quyết vấn đề và suy luận, có thể dùng claude cho tất cả tác vụ cần đến các khả năng trên.
    - Vấn đề về câu trả lời của Claude:
      - Giống tất cả chatbot thì câu trả lời nhận được từ Claude đôi khi sẽ gặp một số vấn đề như quá chung chung, quá dài hoặc ngắn, không tuân theo quy tắc mong muốn, quá tự tin và ảo giác, ngôn ngữ sử dụng không thích hợp. 
      - Để giải quyết vấn đề đó thì cần có kĩ năng prompt hiệu quả như:
        - Thêm context và vai trò để không cần chủ động điều chỉnh từng khía cạnh một với câu trả lời mong muốn. Ví dụ: Thay vì nói là viết cho tôi email xin lỗi đối tượng A, lời văn không cần quá trang trọng nhưng phải tỏ rõ sự hối lỗi, đừng dùng kính ngữ và format quá cầu kì, giữ vẻ tự nhiên và nêu ra những biện pháp khắc phục... thì nói ra ngữ cảnh (tôi đã phạm lỗi abc với đối tượng A, là một người bạn tôi chơi khá thân, việc này đã xảy ra đến lần thứ 2 dù họ đã kiên nhẫn) và có thể tỉa thêm một chút về format.
        - Thêm format mong muốn: Viết cho tôi đoạn văn 200 chữ, 2 khổ tách biệt...
        - Thêm ví dụ: Đây là mẫu report tôi cần bạn tuân theo format:...
        - Ngăn chặn ảo giác tự tin bằng cách cho phép nhận không biết.
    - Project trong Claude: Là các thư mục cô lập thường được sử dụng cho một dự án riêng với ngữ cảnh có tính tái sử dụng, kết quả của các phiên có thể được sử dụng lại và tiến độ cũng như những điều đáng lưu ý cũng sẽ được cân nhắc để nâng cao hiệu quả. Project có mục instruction, context để dùng chung, trước mỗi dự án có thể có các hướng dẫn là trong dự án này thì Claude nên đóng vai trò gì, cung cấp hỗ trợ thế nào và thêm các tài liệu context để claude tái sử dụng.
    - Artifact trong Claude: Là những gì Claude tạo ra như các video, thiết kế, slide,... có thể chỉnh sửa bên trong Claude và chia sẻ.
    - Sử dụng Skills: Skills là các file markdown hướng dẫn chi tiết cách làm một tác vụ gì đó cho Claude, có tính tái sử dụng chứ không chỉ là những prompt hướng dẫn riêng cho một nhiệm vụ nào đó. Có thể kết hợp Skills làm khung và tỉa thêm bằng prompt cho tác vụ riêng. Có các Skills do Anthropic làm ra và có những cái do cộng đồng làm, để tải một Skills mới thì có thể tìm trên Customize/Skills. Điểm hay đó là Skills cho phép tự gọi và cũng như đôi khi sẽ auto apply nếu Claude thấy nên dùng.
    - Sử dụng Connectors: Claude cung cấp khả năng kết nối đến các ứng dụng bên ngoài bằng MCP, giúp cho người dùng thông qua giao diện Claude có thể thực hiện các công việc cần sử dụng các ứng dụng khác. Ví dụ như nếu kết nối với gmail, calendar và notion thì chỉ cần prompt: Tìm những email và lịch trình quan trọng ngày hôm nay rồi ghi vào notion ở mục quan trọng/ngày cho tôi. chứ không cần phải tự mở gmail, calendar ra tìm và note vào notion.
- Học được về Claude Code, cụ thể:
  - Claude Code CLI sử dụng trực tiếp trên Terminal hoặc cài plugin vào vs code nếu thích giao diện.
  - Là coding agent có thể chủ động đọc file, ghi file, lên kế hoạch push lên github và tạo PR thông qua github cli.
  - Có nhiều mode như auto mode chế độ tự động thông minh, tự động nhưng vẫn đảm bảo an toàn do Anthropic đề ra, plan mode chỉ nghiên cứu, đọc file chứ không code, manual mode yêu cầu sự đồng ý của người dùng với mỗi quyết định, accept edit chủ động edit file mà không hỏi từng bước một nhưng vẫn sẽ hỏi mỗi khi có quyết định quan trọng
  - Tuy nhiên để đảm bảo chất lượng thì không thể chỉ đơn giản là bảo hãy xây cho tôi abc mà cần kĩ năng Vibecode, sẽ trình bày sau.
- Học được về Vibe Code, cụ thể:
  - Định nghĩa: Vibe code là không gõ từng dòng code cụ thể mà đóng vai trò kiến trúc sư hệ thống chọn ra công cụ phù hợp, thiết kế thiết kế hệ thống và đưa ra quyết định ở mức cao sau đó AI sẽ chịu trách nhiệm thực thi.
  - Quy tắc Vibe code:
    - Không lao vào bảo là build cho tôi abc... mà luôn thiết lập kiến trúc trước. Viết tài liệu đặc tả PRD.md để cho claude biết mỗi module hay component sẽ dùng công nghệ gì, kiến trúc ra sao, giải thích ý nghĩa của lựa chọn để khi claude tự muốn đổi công nghệ thì hiểu lí do của người thiết kế và không làm theo ý mình linh tinh.
    - Viết file CLAUDE.md để thiết lập quy tắc chung như code style, workflow, những điều nên và không được làm.
    - Mỗi prompt cô đọng một vấn đề với mô tả tốt để Claude có thể tập trung làm cho hoàn hảo.
    - Quản lí chặt chẽ chất lượng, luôn kiểm tra tự động bằng unit test, linter hoặc thử build ngay sau khi sửa code, phải thực sự pass và verify không còn vấn đề nghi ngờ thì mới tiếp tục.
    - Quản lí context window vì phiên càng dài chất lượng càng kém.
    - Yêu cầu claude ghi File PROGRESS.md để các phiên sau biết những gì đã được làm xong, những gì dự định làm và cần kiểm tra vì phiên mới không có kí ức của phiên cũ.
    - Sử dụng plan mode để cân nhắc, phản biện trước khi đưa ra các quyết định quan trọng mà đôi khi con người cũng gặp khó khăn. plan mode sẽ đưa ra chi tiết phân tích để giúp con người đưa ra quyết định.
    - Mỗi lỗi xảy ra không yêu cầu phải sửa ngay mà cần phải lên plan sửa, sau đó dùng chính plan đó apply lên bước sửa.
    - Không cho claude quyền thực hiện auto các tác vụ nguy hiểm như xóa database, đẩy code lên main.
- Ý tưởng sản phẩm sẽ build: Web hỗ trợ học bài/ôn thi dựa trên lí thuyết active recall, sử dụng thuật toán FSRS dựa trên sự chấm điểm đánh giá của AI chứ không phải chủ quan người dùng.

## Tự nhận xét

<!-- Bạn tự đánh giá bản thân trong tuần này -->

- Bản thân tuần vừa rồi làm được tất cả các task yêu cầu của Hoàng, làm nghiêm túc chỉn chu, đọc tài liệu chính thức chứ không sơ sài qua loa, tìm các video hay trên YT để tìm hiểu, đã bắt đầu triển khai dự án.

## Kế hoạch tuần tới

<!-- Viết cụ thể từng đầu việc: report tuần sau sẽ đối chiếu với phần này -->



---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->

- Phần học về Claude viết kỹ và có ví dụ tự nghĩ: ví dụ email xin lỗi để minh hoạ "đưa ngữ cảnh thay vì liệt kê từng yêu cầu" cho thấy bạn hiểu chứ không chép định nghĩa. Mẹo "cho phép Claude nhận là không biết" để giảm ảo giác cũng rất đáng dùng.
- Bộ nguyên tắc vibe code bạn gom lại rõ ràng (PRD.md, CLAUDE.md, PROGRESS.md, lên plan trước khi sửa lỗi, không cho Claude tự đẩy lên main). Repo Essity đang làm đúng tinh thần đó: chia task T0.x/T1.x, mỗi task một nhánh và một PR.
- Phần Claude Code mới dừng ở liệt kê các mode. Tuần sau kể một tình huống thật trong Essity: bạn chọn plan mode hay auto mode, vì sao, và kết quả ra sao.
- `docs/` và `PROGRESS.md` đang nằm trong `.gitignore`, nên spec/PRD không có trên repo. Checkpoint 2 cần spec nằm trong repo hoặc có link mở được, bạn đưa phần spec lên nhé.
- Essity sau một tuần đã là monorepo nhiều service (web, core-api, ai-service, infra) với OpenTelemetry, rate limit bằng Redis, gửi email, job nền Procrastinate, khoảng 8.000 dòng. Các task gần đây chủ yếu là hạ tầng và tài khoản. Phần demo được lại là vòng lõi: nạp tài liệu → sinh câu hỏi → AI chấm → xếp lịch FSRS. Gợi ý ưu tiên cho vòng lõi này chạy end-to-end trước khi thêm hạ tầng.
- Mục Kế hoạch tuần tới đang để trống, đây là thiếu sót lớn nhất của report vì tuần sau sẽ đối chiếu với nó. Bạn bổ sung các đầu việc tuần 2 vào mục này.
- Report được commit lúc 19:03 18/10, sau hạn 3 phút nên tính là nộp trễ.
- Tự nhận xét mới nêu phần làm tốt. Mình đồng ý phần học rất kỹ, nhưng tự nhận xét sẽ có ích hơn nếu nêu cả điểm chưa được, ví dụ thiếu kế hoạch và nộp trễ ở tuần này.
