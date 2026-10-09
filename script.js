const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];

document.addEventListener('DOMContentLoaded',()=>{
  const path=location.pathname.split('/').pop()||'index.html';
  $$('.navlinks a').forEach(a=>{
    const href=a.getAttribute('href');
    if(href===path || (path==='' && href==='index.html')) a.classList.add('active');
  });

  // Flashcard
  const fc=$('.flashcard');
  if(fc){
    const data=[
      {front:'Làm sao để nhớ ngay lập tức quy trình 5 bước AI - SHORT CHECK?',back:'Nhớ thần chú "D-K-K-Đ-Q":\nD - Dừng video ngay (Phase 1)\nK - Kiểm tra nguồn (Phase 2)\nK - Kiểm tra chi tiết (Phase 3)\nĐ - Đối chiếu tin tức (Phase 4)\nQ - Quyết định hành động (Phase 5)'},
      {front:'Tình huống: Bạn lướt TikTok/Facebook gặp video "Em bé mồ côi khóc xin tiền" hoặc "Sự cố giật gân" cực kỳ xúc động. Bạn nên bấm Like/Share ngay không?',back:'KHÔNG THẢ TIM, KHÔNG SHARE NGAY!\nMẹo thực tế: Video AI giả mạo thường đánh vào tâm lý thương cảm hoặc sợ hãi để câu view.\nHành động: Bấm nút TẠM DỪNG (Pause) ngay lập tức để chuyển sang trạng thái tỉnh táo xác minh.'},
      {front:'Công nghệ AI deepfake hiện nay thường mắc những lỗi kỹ thuật vật lý nào?',back:'Soi kỹ 3 "hạt sạn" AI điển hình:\nKhẩu hình & Âm thanh: Tiếng nói không khớp với chuyển động của miệng.\nCơ thể & Bàn tay: Ngón tay bị biến dạng (6 ngón hoặc mất ngón), khuyết thiếu bộ phận.\nBiểu cảm: Nét mặt đơ cứng, ánh mắt chớp nháy không tự nhiên.'},
      {front:'Làm sao để nhận diện một kênh đăng video có độ tin cậy thấp chỉ trong 3 giây?',back:'Soi nhanh "3 Không / 3 Có":\nTích xanh: Kênh có xác minh chính chủ không?\nLịch sử kênh: Kênh mới tạo gần đây hay đã có thâm niên?\nNhãn AI: Có nhãn cảnh báo "Nội dung do AI tạo" (AI-generated) hay không?'},
      {front:'Làm sao để xác thực nội dung video trong 1 phút bằng Google?',back:'Thực hiện "Cross-check" (Đối chiếu chéo):\nRút ra từ khóa chính (Ví dụ: Địa điểm + Sự kiện + Tên nhân vật).\nTìm kiếm trên các báo chính thống (VTV, Tuổi Trẻ, Thanh Niên...).\nQuy tắc: Nếu một sự việc lớn xảy ra mà KHÔNG một tờ báo chính thống nào đưa tin, 99% đó là video AI dàn dựng tin giả!'},
      {front:'Tại sao việc dừng chia sẻ video AI lừa đảo lại giúp bảo vệ cộng đồng?',back:'Tư duy phản biện trong kỷ nguyên số:\nNếu là video AI dàn dựng/lừa đảo: Không tương tác (tránh tăng đề xuất cho video fake), bấm Báo cáo (Report).\nNếu là tin thật: Mới tiếp tục xem và chia sẻ thông tin đúng đắn.\nThông điệp: "Một cú click chia sẻ thiếu kiểm chứng có thể tiếp tay cho tin giả và lừa đảo".'},
    ];
    let i=0;
    const front=$('.flash-front-text'), back=$('.flash-back-text'), count=$('.flash-count');
    const toHtml=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
        const nextBtn=$('.next-btn'), prevBtn=$('.prev-btn');
    const render=()=>{front.innerHTML=toHtml(data[i].front);back.innerHTML=toHtml(data[i].back);count.textContent=`${i+1}/${data.length}`;fc.classList.remove('flipped');if(nextBtn)nextBtn.disabled=(i===data.length-1);if(prevBtn)prevBtn.disabled=(i===0)};
    $('.flip-btn')?.addEventListener('click',()=>fc.classList.toggle('flipped'));
    fc.addEventListener('click',()=>fc.classList.toggle('flipped'));
    nextBtn?.addEventListener('click',()=>{if(i<data.length-1){i++;render()}});
    prevBtn?.addEventListener('click',()=>{if(i>0){i--;render()}});
    render();
  }

  // Share-check mini game
  const game=$('.mini-game');
  if(game){
    const steps=[
      {q:'Video này vừa xuất hiện trên feed. Phản ứng đầu tiên của bạn là gì?',
       opts:['Tôi tin ngay vì video trông rất thật.','Tôi dừng lại và tự hỏi nguồn ở đâu.','Tôi chưa biết; tôi muốn kiểm chứng trước.'],
       tips:['Cảm giác “rất thật” dễ khiến ta tin nhanh. Nhưng video AI ngày càng chân thực nên “trông thật” chưa phải là bằng chứng.','Đúng hướng: hỏi “nguồn ở đâu?” là bước đầu tiên của một khoảng dừng.','Tốt: khi chưa chắc, kiểm chứng trước rồi mới tin hoặc chia sẻ.']},
      {q:'Bạn có ngay lập tức nhận ra đây là video do AI tạo?',
       opts:['Có, tôi nhận ra ngay.','Không, trông rất thật.','Tôi không chắc.'],
       tips:['Có thể bạn đúng, nhưng chỉ nhìn bằng mắt là chưa đủ. Vẫn cần kiểm tra nguồn và đối chiếu thông tin.','Rất phổ biến: video AI ngày càng khó phân biệt bằng mắt thường, nên kiểm chứng quan trọng hơn việc đoán.','Không chắc là phản ứng hợp lý. Hãy dựa vào nguồn và bằng chứng thay vì cảm giác.']},
      {q:'Bạn sẽ tạo một khoảng dừng như thế nào trước khi tin hoặc chia sẻ?',
       opts:['Tìm nguồn gốc ban đầu của video.','Đối chiếu với trang chính thức hoặc báo chính thống.','Chia sẻ trước rồi kiểm chứng sau.'],
       tips:['Hay: xem ai đăng đầu tiên, đăng khi nào và ở đâu.','Hay: đối chiếu với nguồn phù hợp giúp bạn kiểm tra chính phát biểu trong video.','Chia sẻ trước dễ khiến thông tin chưa kiểm chứng lan rộng. Nên kiểm chứng trước khi chia sẻ.']}
    ];
    let i=0;
    const q=$('.reaction-question'), next=$('.reaction-next'), explore=$('.explore-btn');
    const btns=$$('.click-reveal');
    const fb=document.createElement('div');
    fb.className='callout hidden';
    fb.style.margin='12px 0';
    next.parentNode.insertBefore(fb,next);
    const show=()=>{
      q.textContent=`Câu ${i+1}/${steps.length} · ${steps[i].q}`;
      btns.forEach((b,idx)=>{b.textContent=steps[i].opts[idx];b.classList.remove('selected')});
      fb.classList.add('hidden');
      next.disabled=true;
      next.textContent=(i===steps.length-1)?'Hoàn thành':'Tiếp tục';
    };
    btns.forEach((b,idx)=>b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('selected'));
      b.classList.add('selected');
      fb.textContent=steps[i].tips[idx];
      fb.classList.remove('hidden');
      next.disabled=false;
    }));
    next.addEventListener('click',()=>{
      if(i<steps.length-1){i++;show()}
      else{
        fb.textContent='Điểm quan trọng không phải là đoán đúng AI, mà là bạn có tạo ra một khoảng dừng để kiểm chứng trước khi tin và chia sẻ.';
        btns.forEach(b=>b.style.pointerEvents='none');
        next.classList.add('hidden');
        explore.classList.remove('hidden');
      }
    });
    show();
  }

  // Checklist
  const checklist=$('#shareChecklist');
  if(checklist){
    const out=$('#checkResult');
    $('#checkShare')?.addEventListener('click',()=>{
      const n=$$('#shareChecklist input:checked').length;
      out.innerHTML=n===5
        ? '<strong>Đủ 5 bước.</strong><br>Bạn đã tạo một khoảng dừng, kiểm tra nguồn, dấu hiệu, đối chiếu và cân nhắc trách nhiệm trước khi chia sẻ.'
        : `<strong>Bạn đã hoàn thành ${n}/5 bước.</strong><br>Hãy tiếp tục các bước còn thiếu thay vì vội kết luận video thật hay giả.`;
      out.classList.remove('hidden');
    });
    $('#clearShare')?.addEventListener('click',()=>{
      $$('#shareChecklist input').forEach(x=>x.checked=false);out.classList.add('hidden');
    });
  }

  // FAQ
  $$('.faq button').forEach(b=>b.addEventListener('click',()=>{
    const a=b.nextElementSibling;a.classList.toggle('hidden');
  }));

  // Q&A local demo
  const form=$('#qaForm'), list=$('#qaList');
  if(form&&list){
    const key='asc_questions_v1';
    const get=()=>JSON.parse(localStorage.getItem(key)||'[]');
    const render=()=>{
      const arr=get(); list.innerHTML='';
      if(!arr.length){return}
      arr.slice().reverse().forEach(x=>{
        const el=document.createElement('div');el.className='message';
        el.innerHTML=`<small>${escapeHtml(x.name||'Ẩn danh')} · Chờ duyệt</small><strong>${escapeHtml(x.q)}</strong>`;
        list.appendChild(el);
      });
    };
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const name=$('#qaName').value.trim(), q=$('#qaQuestion').value.trim();
      if(!q)return;
      const arr=get();arr.push({name,q,at:Date.now()});localStorage.setItem(key,JSON.stringify(arr));
      form.reset();render();
      $('#qaNotice').textContent='Đã lưu bản nháp trên thiết bị này. Đây chưa phải dữ liệu công khai hay gửi lên máy chủ.';
    });
    $('#clearQa')?.addEventListener('click',()=>{localStorage.removeItem(key);render();$('#qaNotice').textContent='Dữ liệu Q&A cục bộ đã được xóa khỏi trình duyệt.'});
    render();
  }

  // Quiz
  const quiz=$('#quizForm');
  if(quiz){
    const q12Checkboxes = $$('input[type="checkbox"][name="q12"]', quiz);

  q12Checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      const checkedBoxes = $$(
        'input[type="checkbox"][name="q12"]:checked',
        quiz
      );

      if (checkedBoxes.length > 2) {
        checkbox.checked = false;
        alert('Bạn chỉ được chọn tối đa 2 đáp án!');
      }
    });
  });
    const scoreBox=$('#quizResult');
    quiz.addEventListener('submit',e=>{
      e.preventDefault();
      let score=0;
      const val=n=>quiz.querySelector(`[name="q${n}"]:checked`)?.value;
      const q12Answers = $$('input[name="q12"]:checked', quiz)
  .map(input => input.value);
      if(val(1)==='D')score++;
      if(val(2)==='B')score++;
      if(val(3)==='C')score++;
      if(val(4)==='C')score++;
      if(val(5)==='C')score++;
      if(val(6)==='B')score++;
      if(val(7)==='D')score++;
      if(val(8)==='D')score++;
      if(val(9)==='A')score++;
      if(val(10)==='C')score++;
      scoreBox.classList.remove('hidden','good','warn');
      if(score>=6){
        scoreBox.classList.add('good');
        scoreBox.innerHTML=`<h3>Năng lực tiếp nhận - đánh giá thông tin tốt</h3><p>Bạn đạt <strong>${score}/10</strong>. Bạn có năng lực nhận diện và đánh giá thông tin.</p>`;
      }else{
        scoreBox.classList.add('warn');
        scoreBox.innerHTML=`<h3>Năng lực tiếp nhận - đánh giá thông tin còn hạn chế</h3><p>Bạn đạt <strong>${score}/10</strong>. Bạn còn hạn chế trong việc nhận diện và đánh giá thông tin.</p>`;
      }
      scoreBox.scrollIntoView({behavior:'smooth',block:'center'});
    });
    $('#clearQuiz')?.addEventListener('click',()=>{quiz.reset();scoreBox.classList.add('hidden')});
  }
});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}
document.addEventListener('DOMContentLoaded',()=>{
  if(!('IntersectionObserver' in window))return;
  const st=document.createElement('style');
  st.textContent='.reveal{opacity:0;translate:0 26px;transition:opacity .45s ease,translate .45s ease,transform .25s ease,box-shadow .25s ease,border-color .25s ease}.reveal.in{opacity:1;translate:0 0;transition-delay:var(--d,0ms),var(--d,0ms),0ms,0ms,0ms}';
  document.head.appendChild(st);
  const els=document.querySelectorAll('.hero .container,.page-hero .container,.section .card,.section h2,.step,.lesson,.stat,.library-tile,.video-box');
  els.forEach((el,i)=>{el.classList.add('reveal');el.style.setProperty('--d',(i%4)*70+'ms')});
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>e.target.classList.toggle('in',e.isIntersecting));
  },{threshold:.12});
  els.forEach(el=>io.observe(el));
});
