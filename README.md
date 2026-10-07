# AI - SHORT CHECK · bản nhiều trang

## 1. Chạy trên máy
Mở `index.html` bằng trình duyệt. Website là static HTML/CSS/JS nên không cần Node.

Nếu muốn chạy qua local server:
- VS Code → Live Server, hoặc
- Python: `python -m http.server 8000`
Sau đó mở `http://localhost:8000`.

## 2. Đưa lên Vercel
1. Tạo repository GitHub và upload toàn bộ file trong thư mục này.
2. Vào Vercel → Add New Project → chọn repository.
3. Framework: Other / Static.
4. Build Command: để trống.
5. Output Directory: `.`
6. Deploy.

## 3. Cấu trúc trang
- `index.html`: trang chủ, chỉ đóng vai trò bản đồ.
- `hieu-ve-video-ai.html`: khái niệm, thực trạng, tác động.
- `luyen-tap.html`: 14 câu; tự chấm 10 câu đầu.
- `thu-vien.html`: trang chủ học liệu dạng ô lớn.
- `flashcards.html`: giao diện lật thẻ.
- `share-check.html`: mini-game + bộ 5 bước + checklist.
- `bai-hoc.html`: 8 bài học.
- `hoi-dap.html`: FAQ + Q&A cục bộ.
- `style.css`, `script.js`: dùng chung.

## 4. Video
Bản bàn giao hiện có khung video và nội dung/thoại theo đề bài, nhưng không giả vờ rằng các video AI 15 giây đã được tạo.
Để dùng video thật:
- đặt file `.mp4` vào `assets/`;
- thay `<div class="video-placeholder">...</div>` bằng `<video controls preload="metadata" src="assets/ten-video.mp4"></video>`.
- nếu cần phụ đề, dùng `<track kind="subtitles" src="assets/video.vtt" srclang="vi" label="Tiếng Việt">`.

Video nguồn ở Câu 9 vẫn có nút mở YouTube theo URL người dùng cung cấp.

## 5. Flashcard
Đường dẫn `file:///C:/Users/asus/Downloads/...html` chỉ tồn tại trên máy người dùng, Vercel không truy cập được.
Cần upload file HTML/Canva gốc vào dự án rồi thay dữ liệu trong `flashcards.html` bằng đúng nội dung gốc, không tự bịa thêm.

## 6. Q&A và dữ liệu học sinh
Q&A trong bản này chỉ lưu bằng `localStorage` trên từng trình duyệt. Không có dữ liệu dùng chung, không có tài khoản, không có máy chủ duyệt.
Muốn triển khai thật cần backend/database, xác thực, quyền quản trị, lọc nội dung và chính sách dữ liệu.

## 7. Bàn giao
### Đã hoạt động
- điều hướng nhiều trang;
- responsive/mobile;
- bàn phím và reduced-motion cơ bản;
- quiz 14 câu và tự chấm 10 điểm;
- giới hạn tối đa 2 lựa chọn ở câu 7;
- flashcard lật thẻ (dữ liệu mẫu cần thay bằng file gốc);
- mini-game “Trước khi chia sẻ”;
- checklist 5 bước;
- 8 bài học;
- FAQ;
- Q&A cục bộ và xóa dữ liệu cục bộ.

### Mô phỏng
- video AI 15 giây;
- Q&A chờ duyệt;
- dữ liệu cộng đồng dùng chung.

### Cần học liệu thật
- video AI của các câu 6–9;
- video mở đầu mini-game;
- nội dung flashcard từ file Canva/HTML gốc;
- phụ đề/transcript tương ứng.

### Cần máy chủ
- tài khoản;
- gửi câu hỏi dùng chung;
- phản hồi/chủ đề công khai;
- báo cáo nội dung;
- kiểm duyệt;
- lưu dữ liệu học sinh an toàn.

## 8. Ngân hàng câu hỏi
Đáp án chấm:
Q1 D; Q2 B; Q3 C; Q4 C; Q5 C; Q6 B + từ khóa “môi” và một trong “phát âm/lệch/âm thanh”; Q7 A hoặc nếu B/C thì chọn đúng A+B; Q8 D + A; Q9 Video 1; Q10 C.
Q11–14 không tính điểm.

## 9. Kế hoạch thử nghiệm đề xuất
Thử trước với một nhóm nhỏ học sinh:
- 8–15 học sinh, có thể chia theo mức độ quen thuộc công nghệ;
- đo thời gian hoàn thành;
- hỏi 5–7 câu phản hồi về độ khó, độ rõ, giao diện, mức hữu ích;
- xem câu nào có tỷ lệ sai quá cao hoặc quá thấp;
- ghi lại lỗi trên mobile/bàn phím;
- sửa nội dung/giao diện;
- chạy thử lần 2 rồi mới dùng cho đánh giá chính thức.
Không coi bản thử nghiệm là bằng chứng về hiệu quả trước khi có dữ liệu thực tế.

## 10. Mô tả giải pháp đề xuất cho báo cáo
AI-SHORT CHECK (ASC) là một giải pháp giáo dục truyền thông số dành cho học sinh THPT, nhằm giải quyết khó khăn trong việc tiếp nhận và kiểm chứng các video ngắn có thể được tạo hoặc chỉnh sửa bằng AI. Đối tượng trung tâm là học sinh 15–18 tuổi; giáo viên và cha mẹ có thể sử dụng website như tài liệu đồng hành. Cơ chế tác động của ASC dựa trên việc chuyển kiến thức thành hành vi kiểm chứng: học sinh được cung cấp khái niệm và bối cảnh, sau đó thực hành nhận diện dấu hiệu, truy nguồn, đối chiếu phát biểu và cân nhắc trước khi chia sẻ. Website gồm trang kiến thức, bài test 14 câu với 10 câu được chấm điểm, thư viện học liệu, mini-game “Trước khi chia sẻ” theo 5 bước DỪNG – XEM NGUỒN – NHẬN DIỆN – ĐỐI CHIẾU – QUYẾT ĐỊNH, 8 bài học ngắn và khu vực hỏi đáp. Chỉ số đo hiệu quả có thể gồm điểm bài test trước/sau, tỷ lệ hoàn thành, thời gian thực hiện, tỷ lệ lựa chọn đúng hành động kiểm chứng và phản hồi của học sinh về độ rõ, độ khó, tính hữu ích. Việc triển khai nên qua một nhóm thử nghiệm nhỏ trước, sau đó hiệu chỉnh nội dung và giao diện rồi mới đánh giá chính thức. Đây là giải pháp đề xuất, không khẳng định website đã tạo ra kết quả giáo dục khi chưa có dữ liệu thực nghiệm. Giới hạn gồm: khả năng nhận diện bằng mắt không phải bằng chứng tuyệt đối; video AI cần học liệu thật để minh họa; Q&A bản mẫu chưa có máy chủ; dữ liệu thử nghiệm cần được bảo vệ và không công khai thông tin học sinh.
