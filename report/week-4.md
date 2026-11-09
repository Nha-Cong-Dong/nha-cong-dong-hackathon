# NCĐ Hackathon Report

| Thông tin              | Chi tiết                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tên**                | Nguyễn Quốc Khánh                                                                                                                                                                                                                                                                                                           |
| **Tuần**               | 4                                                                                                                                                                                                                                                                                                                           |
| **Nội dung**           | Hoàn thiện, deploy và demo                                                                                                                                                                                                                                                                                                  |
| **Hạn nộp**            | Trước 19:00 Chủ nhật 08/11/2026 (giờ VN)                                                                                                                                                                                                                                                                                    |
| **Lưu ý**              | Report phải do bạn tự viết, không dùng AI để viết. Ưu tiên viết dạng gạch đầu dòng.                                                                                                                                                                                                                                         |
| **Link repo sản phẩm** | https://github.com/Nha-Cong-Dong/PokeNexus                                                                                                                                                                                                                                                                                  |
| **Ý tưởng**            | Trang web về đề tài pokemon. Với nội dung chủ yếu là giới thiệu các chủng loại pokemon xuất hiệu xuyên suốt trong tác phẩm cùng tên. Các chức năng chính là giới thiệu tên, hình ảnh, hệ, thuộc tính, lộ trình tiến hóa giữa các pokemon; Thiết lập được bảng so sánh giữa 2 pokemon bất kì và đề xuất pokemon cho đội hình |

---

## Kết quả so với kế hoạch tuần trước

- Đã deploy thành công sản phẩm trên các nền tảng sau:
  - Database: Aiven
  - Backend: Render
  - Frontend: Cloudflare
- Đã thêm một số tính năng nhỏ như tương tác được với thẻ pokemon trong giao diện xếp đội để xem được thông tin chi tiết, thêm phần hiển thị chỉ số và tốc độ cấp 50
- Đã fix được giao diện trên web đt và máy tính kèm một số lỗi vặt
- Đã thành công thuyết trình tại buổi pitching ngày 08/11. 

## Tự nhận xét quá trình và thành quả

- Sau quãng thời gian 4 tuần thì mình đã có cơ hội được tận tay sử dụng một AI Agent đúng nghĩa, được thực sự bắt tay vào làm một sản phẩm từ A-Z với sự hỗ trợ của AI. 
- Qua đó mình đã nắm được kha khá về luồng làm việc của vibe coding bao gồm: 
  - Làm rõ ý tưởng, lên kế hoạch, đưa ra trước những tính năng, mục tiêu mà sản phẩm hướng tới
  - Liệt kê các task mà AI cần làm theo tiến trình đi kèm với input, output mong muốn và test để kiểm thử
  - Đưa các mô tả chi tiết, prompt và các tài liệu cần thiết để AI bắt đầu viết code
  - Xây dựng bộ khung giao diện demo trước và mô tả thật chi tiết để AI có thể làm theo (Tôi đã học được cách lên pinterest hoặc các nền tảng liên quan tìm những bộ template đẹp, nổi tiếng về các chủ đề liên quan rồi copy về cho AI học tập từ đó tạo ra được giao diện như mong muốn)
  - Chạy kiểm thử và check lại để tìm ra lỗi. Sau khi tìm ra thì chỉ rõ vị trí kèm đề xuất sửa đổi để AI tự fix
  - Cuối cùng là đóng gói dự án và deploy
- Bên cạnh đó mình cũng đã học được cách một trang web vận hành như thế nào và biết thêm về cấu trúc của một dự án sẽ bao gồm những gì, hiểu thêm về tầm quan trọng của việc đánh giá tệp người dùng, lên ý tưởng và thực thi để vừa khả thi, vừa đạt yêu cầu mà không bị quá bay bổng hay thiếu sáng tạo.
- Tự đánh giá thành quả:
  - Về cơ bản sản phẩm ban đầu mình đặt mục tiêu để thỏa mãn mong muốn làm ra một thứ liên quan đến pokemon vì là sở thích cá nhân nên tệp người dùng mình hướng tới khá nhỏ.
  - Về mặt sản phẩm thì mình đã khá ưng ý với sản phẩm hiện tại (Phần UI được đa số mọi người khen là khá tốt). Có phần backend vẫn chưa đầu tư quá kĩ về mặt ý tưởng dẫn đến còn sơ sài và chưa có chiều sâu, tính kĩ thuật cao. 
  - Về phương diện vận hành thì mình chưa ưng ý vì đã deploy với phiên bản miễn phí dẫn đến lượng RAM cho phép của server là không quá nhiều, đồng thời có cơ chế ngủ đông sau mỗi 10p và mỗi khi gọi dậy tốn rất nhiều thười gian (Có trường hợp ngủ đông xong còn chết luôn backend và phải ấn deploy lại thì mới chạy được)
  - Về biểu hiện trong buổi pitching: còn cần cải thiện về khả năng nói, giới thiệu sản phẩm tới người nghe sao cho người không biết về pokemon cũng phải thấy hứng thú.

## Cảm nghĩ & lời nhắn gửi Hoàng Đỗ

- Sau thời gian hackathon vừa rồi tôi thực sự muốn gửi một lời cảm ơn chân thành tới Hoàng Đỗ. Để mà nói thì có lẽ t sẽ không thể tìm được ai khác bỏ tiền ra mua Claude Max rồi ném cho người khác dùng như Hoàng. T thực sự nể sự chịu chi và tình cảm mà Hoàng dành cho anh em. Nếu không nhờ có lần hackathon này thì khá chắc sẽ còn rất lâu nữa t mới tiếp xúc với AI Agent và làm ra một sản phẩm hoàn chỉnh.
- Mong rằng sau này có nhiều cơ hội như lần hackathon này để được hợp tác, cọ sát với ae nhiều hơn nữa. Đa tạ !!!!

---

## Nhận xét của Hoàng Đỗ

<!-- Phần này dành cho Hoàng Đỗ -->
