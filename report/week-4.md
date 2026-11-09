# NCĐ Hackathon Report

| Thông tin | Chi tiết |
| --- | --- |
| **Tên** | Nguyễn Hoàng Tùng |
| **Tuần** | 4 |
| **Nội dung** | Hoàn thiện, deploy và demo |
| **Hạn nộp** | Trước 19:00 Chủ nhật 08/11/2026 (giờ VN) |
| **Lưu ý** | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng. |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/zero-cloud-lan-teleport |
| **Ý tưởng** | Công cụ truyền file dung lượng lớn và đồng bộ bộ nhớ tạm trực tiếp giữa các thiết bị trong cùng mạng Wi-Fi/LAN (ZCL Teleport) |

---

## Kết quả so với kế hoạch tuần trước

- **Đánh giá hiệu năng và đo đạc benchmark thực tế:**
  - Đã tiến hành đo đạc chính thức trên hai máy Windows thật qua mạng Wi-Fi 2,4 GHz với bản zip RC1 (commit `7824259`).
  - Đạt trọn vẹn cả 5 tiêu chí nghiệm thu cốt lõi của MVP (H1–H5):
    - **H1 (Khám phá & Ghép đôi):** Máy B hiện trên radar máy A sau 1,74–2,11 s (dưới ngưỡng mvp N1); ghép đôi thành công, mã 6 số trùng khớp tuyệt đối ở cả hai máy.
    - **H2 (Truyền file lớn):** Kéo thả file `demo-1GiB.bin` (1 GiB) qua giao diện, máy B hiện hộp thoại bấm "Nhận", truyền xong kiểm tra mã SHA-256 trùng khớp 100% với file gốc.
    - **H3 (Tự nối lại khi rớt mạng):** Thử ngắt Wi-Fi máy nhận 2 lần (ở 50,7% và 89,8%, mỗi lần tắt trên 10 s), cả hai lần ứng dụng đều tự động kết nối lại và truyền tiếp, tiến độ không bị về 0, SHA-256 sau cùng toàn vẹn.
    - **H4 (Khôi phục khi dừng đột ngột):** Tắt app máy B khi đang nhận dở ở 41%; mở lại sau khoảng 20 s, phiên truyền tự động chạy tiếp từ 45,4% mà không cần hỏi lại người dùng, SHA-256 kiểm tra trùng khớp file gốc.
    - **H5 (An toàn nhận file):** Gửi lại file trùng tên thì tự động lưu thành `demo-1GiB (1).bin` không ghi đè file cũ; sau khi máy A hủy ghép đôi, máy B gửi file tới bị từ chối ngay lập tức, máy A không hiện hộp thoại và không bị ghi file rác.
  - Đo đạc chi tiết mvp N1 (khám phá mDNS đạt) và mvp N3 (truyền 10 GiB RAM phẳng, RSS tăng chỉ vài MiB, không bị rò rỉ bộ nhớ). Toàn bộ dữ liệu được cập nhật minh bạch tại `docs/technical/benchmark.md`.
- **Fix bug và kiểm thử luồng hoạt động:**
  - Xử lý các lỗi race condition khi đóng kết nối TLS và dọn dẹp kết nối mạng.
  - Sửa lỗi phân quyền bảo vệ khóa riêng tư (DACL) trên Windows (`fix(trust)`).
  - Tối ưu hóa việc ghi nhận trạng thái vào đĩa (`.state`) để đảm bảo không bị hỏng dữ liệu khi mất nguồn hay tắt app đột ngột.
- **Hoàn thiện giao diện và trải nghiệm người dùng:**
  - Hoàn thành bộ hiệu ứng chuyển động và tương tác nhỏ (G1–G5): chuyển cảnh mượt mà, hiệu ứng glow khi kéo thả file vào khung chat, thanh chọn trượt.
  - Bổ sung màn hình chào mừng lần chạy đầu (First-run wizard) và tùy chọn khởi động cùng Windows (D1).
  - Hoàn thiện khay hệ thống (tray icon F9), trang chờ ghép đôi (F3), hộp thoại xác nhận nhận file chống bấm đúp (`OfferBook`).
  - Hỗ trợ đa ngôn ngữ hoàn chỉnh: Tiếng Việt và English (D6b); bổ sung cài đặt giao diện sáng/tối và đổi màu nhấn (D6a-2).
  - Hoàn thiện tính năng đồng bộ clipboard nội bộ giữa các máy đã ghép đôi (D5).
- **Bổ sung kiến thức và làm chủ dự án:**
  - Đã tiếp thu góp ý tuần 3 của Hoàng Đỗ, sửa lại chỗ hiểu sai trong `docs/product/hieu_du_an.md`: chỉ máy khởi xướng (A) ký chứng chỉ kèm nonce và phong bì, còn máy nhận (B) đã chứng minh giữ khóa riêng qua bắt tay TLS 1.3.
  - Tự lần và viết tài liệu chi tiết luồng bấm "Nhận" từ tầng UI (`OfferBook`, `NodeHost.call`) qua app (`transfers.decide`), core máy trạng thái, hàng đợi đĩa `DiskExecutor` ghi từng khối 1 MiB xuống `.teleport/` cho đến net.
  - Bổ sung đầy đủ bản quyền GPL-3.0, chính sách bảo mật (`SECURITY.md`), tài liệu đóng góp (`CONTRIBUTING.md`).
  - Tối ưu hóa CI: chia test giao diện Windows thành các job song song (sharding) để giảm thời gian chờ CI.
- **Kiểm soát Claude và tối ưu quy trình vibe coding:**
  - Tinh gọn và cấu hình lại danh sách sub-agents trong repo, giảm thiểu việc sinh code tự động không kiểm soát.
  - Chia nhỏ các PR và tự tóm tắt mô tả trước khi merge để đảm bảo nắm chắc thay đổi trong codebase.
- **Đóng gói, deploy và hoàn thiện demo:**
  - Đã xuất bản bản phát hành thử nghiệm chính thức **v0.1.0-alpha** cho Windows qua GitHub Pre-release.
  - Đóng gói tự động bằng PyInstaller và tạo bộ cài Inno Setup hoàn chỉnh kèm bản portable zip; thiết lập workflow Nightly Release.
  - Xây dựng và triển khai trang giới thiệu sản phẩm (landing page) tại: https://nha-cong-dong.github.io/teleport-site/.

## Tự nhận xét quá trình và thành quả

- **Những gì đã học được qua 4 tuần:**
  - Học được cách "vibe coding" bài bản và có kiểm soát: không giao phó hoàn toàn cho AI mà phải có spec chặt chẽ từ đầu, chốt kiến trúc phân tầng rõ ràng (core sans-IO, trust, net, app, ui/cli) rồi mới cho code.
  - Hiểu sâu các kiến thức cốt lõi về mạng và bảo mật: giao thức mDNS tự khám phá trong mạng LAN, bắt tay TLS 1.3 hai chiều (mTLS), cơ chế xác thực mã 6 số chống tấn công Man-in-the-Middle (MitM) bằng cam kết nonce, mã hóa Merkle tree để xác thực từng khối dữ liệu.
  - Làm chủ quy trình kỹ thuật phần mềm chuẩn chỉ: viết test tự động, cấu hình CI/CD trên GitHub Actions đa nền tảng, đo đạc benchmark thực tế bằng số liệu định lượng thay vì cảm tính, đóng gói phần mềm phát hành cho người dùng cuối.
- **Tự đánh giá thành quả:**
  - Đã hoàn thành một sản phẩm thực tế chạy ổn định trên máy thật, giải quyết đúng nhu cầu truyền file dung lượng lớn không cần mạng Internet/Cloud hay USB.
  - Đạt trọn vẹn cả 5 tiêu chí nghiệm thu MVP đặt ra cho hackathon (H1–H5), có đầy đủ cả giao diện đồ họa (GUI) lẫn dòng lệnh (CLI), có tài liệu kỹ thuật và trang web giới thiệu hoàn chỉnh.
- **Điểm còn hạn chế và bài học kinh nghiệm:**
  - Codebase phình to khá nhanh ở các tuần đầu (hơn 40.000 dòng code và test) khiến việc đọc hiểu từng dòng chưa thực sự theo kịp tốc độ sinh code của Claude; tuần cuối đã phải phanh lại để tự viết tài liệu giải thích và kiểm thử thực tế.
  - Đôi lúc bị cuốn vào việc mở rộng tính năng (scope creep) ra ngoài phạm vi MVP hackathon.
  - Chưa kịp hoàn thành phép đo so sánh với SMB trên mạng dây gigabit do điều kiện thiết bị máy mượn hạn chế, hiện mới đo kiểm tra trên Wi-Fi 2,4 GHz.

## Cảm nghĩ & lời nhắn gửi Hoàng Đỗ

- Mình chân thành cảm ơn bạn Hoàng Đỗ đã đồng hành và dành thời gian review rất chi tiết, sâu sắc qua từng checkpoint. Những nhận xét thẳng thắn của bạn về việc "tốc độ sinh code vượt khả năng đọc", chỉ ra lỗi logic ở chữ ký số hay nhắc nhở "đóng băng tính năng để đo số liệu thật" chính là chiếc phanh cần thiết nhất giúp mình không bị trượt dài trong việc vibe coding một cách mơ hồ.
- Nhờ những góp ý đó mà mình buộc mình phải dừng lại, tự tay viết tài liệu giải thích kiến trúc bằng lời của mình, tự cầm máy đi thử ngắt mạng, so từng mã SHA-256 để hiểu thấu đáo cách hệ thống vận hành.
- 4 tuần hackathon thực sự là một trải nghiệm học tập nhảy vọt đối với mình, từ tư duy làm chủ công cụ AI đến kỷ luật kỹ thuật trong việc xây dựng một sản phẩm phần mềm nghiêm túc.

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
