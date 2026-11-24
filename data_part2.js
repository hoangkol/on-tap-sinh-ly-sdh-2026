// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 2: SINH LÝ HÔ HẤP & THẬN NIỆU (BÀI 6 ĐẾN BÀI 10)
// Chuẩn Giáo trình Sinh lý học Y khoa 2025 & Sách Trắc nghiệm ĐHYD TP.HCM (YDS)
// ==========================================================================

window.LESSONS_PART2 = [
  // ========================================================================
  // BÀI 6: CƠ HỌC HÔ HẤP
  // ========================================================================
  {
    id: 6,
    group: "III. SINH LÝ HÔ HẤP",
    title: "Bài 6: Cơ học hô hấp",
    shortTitle: "Cơ học hô hấp",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 11 (tr.127–146)",
    summary: "Cấu trúc 23 thế hệ đường dẫn khí, các cơ hô hấp (hít vào/thở ra bình thường & gắng sức), biến thiên áp suất màng phổi (Ppl), áp suất phế nang (Palv), áp suất xuyên phổi (Ptp), chất hoạt diện Surfactant, các thể tích/dung tích phổi và thông khí phế nang.",
    simId: "sim_resp_mechanics",
    simTitle: "Mô phỏng Hô hấp ký (Thể tích & Dung tích phổi), Áp suất Màng phổi - Phế nang & Máy tính Thông khí Phế nang",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🌬️ 1. Cây Phế quản 23 Thế hệ & Các Cơ Hô hấp</div>
          <ul class="theory-list">
            <li><strong>Phân chia 23 thế hệ (Weibel):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Vùng dẫn khí đơn thuần (16 thế hệ đầu, thế hệ 0 → 16):</strong> Từ khí quản đến chấm dứt ở <strong>Tiểu phế quản tận cùng (Terminal bronchiole)</strong>. Không có phế nang nên không trao đổi khí → tạo thành <strong>Khoảng chết giải phẫu (V<sub>D</sub> ≈ 150 mL)</strong>.</li>
                <li><strong>Đơn vị hô hấp / Vùng trao đổi khí (7 thế hệ cuối, thế hệ 17 → 23):</strong> Gồm <strong>Tiểu phế quản hô hấp, Ống phế nang và Phế nang</strong> (~300 triệu phế nang, diện tích 70–90 m²).</li>
              </ul>
            </li>
            <li><strong>Kháng lực đường dẫn khí & Cơ trơn Reissessen:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><em>Bẫy đề thi kinh điển:</em> Kháng lực đường dẫn khí bình thường <strong>LỚN NHẤT ở khí quản và các phế quản lớn/trung bình</strong> (thế hệ 4–8), còn các tiểu phế quản nhỏ (&lt; 2 mm) chỉ chiếm 10–20% tổng kháng lực vì có hàng vạn nhánh song song làm tổng thiết diện ngang cực lớn!</li>
                <li><strong>Giao cảm (Norepinephrine/Epinephrine → Thụ thể β₂):</strong> Gây <strong>giãn cơ trơn tiểu phế quản</strong>.</li>
                <li><strong>Phó giao cảm (Dây X → ACh → Thụ thể M₃), Histamin, Leukotrien:</strong> Gây <strong>co thắt tiểu phế quản</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Động tác hô hấp</th>
                  <th>Bản chất</th>
                  <th>Các cơ tham gia chính chuẩn YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Hít vào bình thường</strong></td>
                  <td><strong>Chủ động</strong></td>
                  <td>• <strong>Cơ hoành</strong> (quan trọng nhất, tạo <strong>75%</strong> thay đổi thể tích lồng ngực; dây TK hoành C₃–C₅; hạ xuống 1 cm tăng 200 mL; liệt cơ hoành làm cơ đi lên khi hít vào).<br/>• <strong>Cơ liên sườn ngoài</strong> (nâng xương sườn lên trên và ra trước).</td>
                </tr>
                <tr>
                  <td><strong>Hít vào gắng sức</strong></td>
                  <td><strong>Chủ động</strong></td>
                  <td>Cơ hoành + Cơ liên sườn ngoài + <strong>Cơ ức đòn chũm, cơ răng trước, cơ bậc thang (cơ lệch), cơ cánh mũi</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Thở ra bình thường</strong></td>
                  <td><strong>THỤ ĐỘNG</strong></td>
                  <td><strong>Không có cơ nào co chủ động!</strong> Nhờ lực đàn hồi co lại của nhu mô phổi và lồng ngực khi cơ hít vào giãn ra.</td>
                </tr>
                <tr>
                  <td><strong>Thở ra gắng sức</strong></td>
                  <td><strong>Chủ động</strong></td>
                  <td>• <strong>Các cơ thành bụng trước (đặc biệt là Cơ thẳng bụng)</strong>: là cơ co có hiệu quả nhất khi thổi ra mạnh nhất!<br/>• <strong>Cơ liên sườn trong</strong> (kéo sườn xuống dưới và vào trong).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">📉 2. Các Áp suất Hô hấp & Chất Hoạt diện (Surfactant)</div>
          <ul class="theory-list">
            <li><strong>1. Áp suất màng phổi (P<sub>pl</sub>):</strong> Luôn <strong>ÂM</strong> trong hô hấp bình thường (do phổi luôn có xu hướng co nhỏ lại về phía rốn phổi còn lồng ngực có xu hướng nở ra).
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Cuối kỳ thở ra bình thường (ở mức FRC): <strong>–2,5 mmHg (hay –5 cmH₂O)</strong>.</li>
                <li>Cuối kỳ hít vào bình thường: <strong>–6 mmHg (hay –7,5 cmH₂O)</strong>.</li>
                <li>Khi hít vào gắng sức tối đa (khi phổi đạt <strong>Dung tích sống VC / Tổng dung lượng phổi TLC</strong>): P<sub>pl</sub> <strong>ĐẠT GIÁ TRỊ ÂM NHẤT (–30 mmHg)</strong>!</li>
                <li>Chỉ trở nên dương khi thở ra gắng sức mạnh hoặc làm nghiệm pháp Valsalva.</li>
                <li><strong>Ý nghĩa của áp suất âm màng phổi:</strong> (1) Làm lá tạng luôn dính sát lá thành giúp phổi trương nở theo lồng ngực; (2) Hút máu tĩnh mạch trở về tim phải và hút máu lên tuần hoàn phổi.</li>
              </ul>
            </li>
            <li><strong>2. Áp suất phế nang (P<sub>alv</sub>):</strong> So với áp suất khí quyển (0 mmHg):
              <br/>• Khi đang hít vào bình thường: <strong>–1 đến –3 mmHg</strong> (cuối thì hít vào khi dòng khí ngừng chảy thì P<sub>alv</sub> = <strong>0 mmHg</strong>).
              <br/>• Khi đang thở ra bình thường: <strong>+1 đến +3 mmHg</strong> (cuối thì thở ra P<sub>alv</sub> = <strong>0 mmHg</strong>).
            </li>
            <li><strong>3. Áp suất xuyên phổi (Transpulmonary pressure: P<sub>tp</sub> = P<sub>alv</sub> – P<sub>pl</sub>):</strong> Là sự chênh lệch giữa áp suất phế nang và áp suất màng phổi; chính là lực làm căng nở phổi và là thước đo <strong>lực đàn hồi của phổi</strong>.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">🫧 Chất hoạt diện (Surfactant) & Định luật Laplace</div>
            <ul>
              <li>Do <strong>Tế bào biểu mô phế nang type II</strong> (chiếm 10% diện tích) bắt đầu tiết từ tháng 6–7 bào thai. Thành phần chính: phospholipid <strong>Dipalmitoyl phosphatidylcholine (DPPC)</strong>, surfactant apoprotein và ion <strong>Ca²⁺</strong>.</li>
              <li><strong>Cơ chế (Định luật Laplace: P = 2T / R):</strong> Sức căng bề mặt lớp dịch lót phế nang chiếm tới <strong>2/3 tổng lực đàn hồi co xẹp của phổi</strong> (sợi chun elastin/collagen chỉ chiếm 1/3). Nếu T không đổi, phế nang nhỏ (R nhỏ) sẽ có áp suất P lớn hơn và xả hết khí vào phế nang lớn (gây xẹp phổi). Surfactant tập trung dày hơn ở phế nang nhỏ làm giảm T tỉ lệ với R, giúp:
                <br/>1. <strong>Ổn định các phế nang kích thước khác nhau không bị xẹp.</strong>
                <br/>2. <strong>Tăng suất đàn của phổi (Compliance ≈ 200 mL/cmH₂O)</strong>, giảm công hô hấp.
                <br/>3. <strong>Ngăn dịch từ mao mạch thấm vào lòng phế nang</strong> (chống phù phổi).
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📊 3. Các Thể tích, Dung tích Phổi & Thông khí Phế nang</div>
        <div class="grid-2">
          <div>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Ký hiệu & Tên chỉ số</th>
                  <th>Giá trị chuẩn</th>
                  <th>Định nghĩa & Đặc điểm cần nhớ đi thi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TV (V<sub>T</sub>) – Thể tích khí lưu thông</strong></td>
                  <td><strong>~ 500 mL</strong></td>
                  <td>Lượng khí hít vào hoặc thở ra trong một nhịp thở bình thường.</td>
                </tr>
                <tr>
                  <td><strong>IRV – Thể tích dự trữ hít vào</strong></td>
                  <td><strong>1500 – 2000 mL</strong> (nam ~3000)</td>
                  <td>Lượng khí hít vào thêm được tối đa sau khi đã hít vào bình thường.</td>
                </tr>
                <tr>
                  <td><strong>ERV – Thể tích dự trữ thở ra</strong></td>
                  <td><strong>1000 – 1100 mL</strong></td>
                  <td>Lượng khí thở ra thêm được tối đa sau khi đã thở ra bình thường.</td>
                </tr>
                <tr>
                  <td><strong>RV – Thể tích khí cặn</strong></td>
                  <td><strong>1000 – 1300 mL</strong></td>
                  <td>Lượng khí còn lại trong phổi sau khi đã thở ra gắng sức tối đa. <strong>Hô hấp ký thông thường KHÔNG ĐO ĐƯỢC RV!</strong></td>
                </tr>
                <tr>
                  <td><strong>IC – Dung tích hít vào</strong></td>
                  <td><code>TV + IRV</code> (~2,5–3,5 L)</td>
                  <td>Lượng khí hít vào tối đa tính từ cuối kỳ thở ra bình thường.</td>
                </tr>
                <tr>
                  <td><strong>FRC – Dung tích cặn chức năng</strong></td>
                  <td><code>ERV + RV</code> (<strong>~2,2 – 2,5 L</strong>)</td>
                  <td>Lượng khí còn lại trong phổi ở <strong>cuối kỳ thở ra bình thường</strong> (tức khi <strong>tất cả các cơ hô hấp đều giãn nghỉ hoàn toàn</strong>). <strong>Hô hấp ký KHÔNG ĐO ĐƯỢC!</strong></td>
                </tr>
                <tr>
                  <td><strong>VC – Dung tích sống</strong></td>
                  <td><code>IRV + TV + ERV</code> (<strong>~3,5 – 4,5 L</strong>)</td>
                  <td>Thể tích khí tối đa thở ra được sau khi đã hít vào tối đa.</td>
                </tr>
                <tr>
                  <td><strong>TLC – Tổng dung lượng phổi</strong></td>
                  <td><code>VC + RV</code> (<strong>~5,0 – 6,0 L</strong>)</td>
                  <td>Tổng lượng khí tối đa phổi chứa được. <strong>Hô hấp ký KHÔNG ĐO ĐƯỢC!</strong><br/>Thứ tự độ lớn: <strong>TLC &gt; VC &gt; FRC &gt; TV</strong>.</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          <div>
            <div class="callout formula" style="margin-top:0;">
              <div class="callout-title">🧮 Thông khí Phút (V̇<sub>E</sub>) vs Thông khí Phế nang (V̇<sub>A</sub>)</div>
              <ul>
                <li><strong>Thông khí phút:</strong> <code>V̇<sub>E</sub> = f × TV</code> (VD: 12 lần/phút × 500 mL = <strong>6.000 mL/phút</strong>).</li>
                <li><strong>Thông khí phế nang (Quyết định thực sự sự trao đổi khí!):</strong>
                  <br/><code>V̇<sub>A</sub> = f × (TV – V<sub>D</sub>)</code>
                  <br/>Với khoảng chết <code>V<sub>D</sub> = 150 mL</code>: <code>V̇<sub>A</sub> = 12 × (500 – 150) = <strong>4.200 mL/phút (4,2 L/phút)</strong></code>.
                </li>
                <li><strong>Hệ quả lâm sàng cực kỳ quan trọng:</strong> Cùng một thông khí phút V̇<sub>E</sub> = 6 L/phút:
                  <br/>• <em>Thở chậm và sâu</em> (f = 6 l/p, TV = 1000 mL) → V̇<sub>A</sub> = 6 × (1000 – 150) = <strong>5.100 mL/phút (Rất hiệu quả!)</strong>.
                  <br/>• <em>Thở nhanh và nông</em> (f = 30 l/p, TV = 200 mL) → V̇<sub>A</sub> = 30 × (200 – 150) = <strong>1.500 mL/phút (Suy hô hấp!)</strong>.
                </li>
              </ul>
            </div>
            <div class="callout trap">
              <div class="callout-title">⚠️ Chỉ số Tiffeneau & Hội chứng Tắc nghẽn vs Hạn chế</div>
              <ul>
                <li><strong>FEV₁:</strong> Thể tích khí thở ra tối đa trong <strong>1 giây đầu tiên</strong>.</li>
                <li><strong>Chỉ số Tiffeneau (FEV₁ / VC)</strong> hoặc <strong>Gaensler (FEV₁ / FVC):</strong> Bình thường <strong>≥ 70 – 80%</strong>.</li>
                <li><strong>Rối loạn thông khí tắc nghẽn (Hen, COPD):</strong> FEV₁ giảm mạnh → <strong>FEV₁/FVC &lt; 70%</strong> (RV và FRC tăng do ứ khí).</li>
                <li><strong>Rối loạn thông khí hạn chế (Xơ phổi, gù vẹo):</strong> VC và TLC giảm (&lt; 80%), nhưng FEV₁/FVC bình thường hoặc tăng (≥ 70%).</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong 23 thế hệ phân chia của cây phế quản, vùng dẫn khí đơn thuần (khoảng chết giải phẫu) chấm dứt ở cấu trúc nào và vùng trao đổi khí (đơn vị hô hấp) bắt đầu từ cấu trúc nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.127 & Đề SĐH",
        options: [
          "Vùng dẫn khí chấm dứt ở tiểu phế quản tận cùng (thế hệ 16); đơn vị hô hấp bắt đầu từ tiểu phế quản hô hấp (thế hệ 17)",
          "Vùng dẫn khí chấm dứt ở phế quản gốc; đơn vị hô hấp bắt đầu từ tiểu phế quản tận cùng",
          "Vùng dẫn khí chấm dứt ở ống phế nang; đơn vị hô hấp chỉ gồm túi phế nang",
          "Vùng dẫn khí chấm dứt ở khí quản; đơn vị hô hấp bắt đầu từ phế quản phân thùy"
        ],
        answer: 0,
        explain: "16 thế hệ đầu tiên (từ khí quản thế hệ 0 đến tiểu phế quản tận cùng thế hệ 16) không có phế nang nên chỉ dẫn khí đơn thuần. 7 thế hệ cuối (thế hệ 17–23) gồm tiểu phế quản hô hấp, ống phế nang và phế nang tạo thành đơn vị hô hấp trực tiếp trao đổi khí."
      },
      {
        q: "Khi một người thực hiện động tác thổi ra mạnh nhất (thở ra gắng sức tối đa), cơ nào sau đây co lại có hiệu quả nhất để đẩy khí ra khỏi phổi?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 9",
        options: [
          "Cơ thẳng bụng (và các cơ thành bụng trước)",
          "Cơ hoành",
          "Cơ ức đòn chũm",
          "Cơ liên sườn ngoài"
        ],
        answer: 0,
        explain: "Cơ hoành, cơ liên sườn ngoài và cơ ức đòn chũm đều là các cơ HÍT VÀO. Thở ra bình thường là thụ động; còn khi thở ra gắng sức (thổi ra mạnh nhất), các cơ thành bụng trước (đặc biệt là cơ thẳng bụng) cùng cơ liên sườn trong co mạnh ép các tạng bụng đẩy cơ hoành lên cao để tống khí ra ngoài."
      },
      {
        q: "Áp suất trong khoang màng phổi (Ppl) đạt giá trị ÂM NHẤT tại thời điểm thể tích phổi tương ứng với chỉ số nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Khi hít vào gắng sức tối đa, thể tích phổi đạt Dung tích sống (VC) / Tổng dung lượng phổi (TLC)",
          "Khi thở ra bình thường, thể tích phổi ở mức Dung tích cặn chức năng (FRC)",
          "Khi thở ra gắng sức tối đa, thể tích phổi ở mức Thể tích khí cặn (RV)",
          "Khi bắt đầu thì thở ra gắng sức"
        ],
        answer: 0,
        explain: "Khi hít vào càng sâu, lồng ngực càng mở rộng kéo lá thành ra xa và phổi càng bị kéo căng mạnh (lực đàn hồi co về rốn phổi càng lớn), nên áp suất âm màng phổi càng âm sâu (cuối thở ra bình thường –2,5 mmHg → cuối hít vào bình thường –6 mmHg → hít vào tối đa đạt TLC/VC có thể âm tới –30 mmHg)."
      },
      {
        q: "Thể tích phổi vào thời điểm mà tất cả các cơ hô hấp đều giãn nghỉ hoàn toàn (cuối thì thở ra bình thường) tương ứng với thông số nào?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tham khảo",
        options: [
          "Dung tích cặn chức năng (FRC = ERV + RV)",
          "Thể tích khí cặn (RV)",
          "Dung tích sống (VC)",
          "Thể tích khí lưu thông (TV)"
        ],
        answer: 0,
        explain: "Ở cuối kỳ thở ra bình thường, không có cơ hít vào hay cơ thở ra nào co (tất cả cơ hô hấp đều giãn nghỉ hoàn toàn); lực co đàn hồi vào trong của phổi cân bằng đúng với lực bung ra ngoài của lồng ngực. Thể tích khí chứa trong phổi lúc đó chính là Dung tích cặn chức năng (FRC = ERV + RV ≈ 2,2 – 2,5 L)."
      },
      {
        q: "Sắp xếp các thể tích và dung tích phổi sau đây theo thứ tự độ lớn GIẢM DẦN ở người trưởng thành bình thường:",
        source: "Đề thi Sinh lý SĐH YDS 2024",
        options: [
          "Tổng dung lượng phổi (TLC) > Dung tích sống (VC) > Dung tích cặn chức năng (FRC) > Thể tích khí lưu thông (TV)",
          "Dung tích sống (VC) > Tổng dung lượng phổi (TLC) > Thể tích khí lưu thông (TV) > Dung tích cặn chức năng (FRC)",
          "Tổng dung lượng phổi (TLC) > Dung tích cặn chức năng (FRC) > Dung tích sống (VC) > Thể tích khí lưu thông (TV)",
          "Dung tích cặn chức năng (FRC) > Dung tích sống (VC) > Tổng dung lượng phổi (TLC) > Thể tích khí cặn (RV)"
        ],
        answer: 0,
        explain: "Giá trị trung bình ở người Việt Nam trưởng thành: TLC (~5000 mL) > VC (~3500 mL) > FRC (~2300 mL) > TV (~500 mL)."
      },
      {
        q: "Những thể tích và dung tích phổi nào sau đây KHÔNG THỂ đo trực tiếp được bằng phương pháp hô hấp ký (spirometry) thông thường?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.139",
        options: [
          "Thể tích khí cặn (RV), Dung tích cặn chức năng (FRC) và Tổng dung lượng phổi (TLC)",
          "Thể tích khí lưu thông (TV), Dung tích hít vào (IC) và Dung tích sống (VC)",
          "Thể tích dự trữ hít vào (IRV) và Thể tích dự trữ thở ra (ERV)",
          "FEV1 và Dung tích sống gắng sức (FVC)"
        ],
        answer: 0,
        explain: "Vì Thể tích khí cặn (RV) không bao giờ được thở ra khỏi phổi nên máy hô hấp ký thông thường không đo được RV, và do đó cũng không đo được bất kỳ dung tích nào có chứa RV là FRC (ERV + RV) và TLC (VC + RV). Muốn đo RV, FRC, TLC phải dùng phương pháp pha loãng khí Helium hoặc phế thân ký."
      },
      {
        q: "Chất hoạt diện (Surfactant) lót mặt trong phế nang được tiết ra bởi tế bào nào và có bản chất hóa học chính là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.134",
        options: [
          "Tế bào biểu mô phế nang type II; thành phần chính là phospholipid Dipalmitoyl phosphatidylcholine (DPPC), apoprotein và Ca2+",
          "Tế bào biểu mô phế nang type I; thành phần chính là mucopolysaccharid và collagen",
          "Đại thực bào phế nang; thành phần chính là lecithin và cholesterol",
          "Tế bào Clara ở tiểu phế quản; thành phần chính là acid hyaluronic"
        ],
        answer: 0,
        explain: "Surfactant do tế bào biểu mô phế nang type II tiết ra từ tháng 6–7 thai kỳ, thành phần quan trọng nhất là Dipalmitoyl phosphatidylcholine (DPPC) giúp giảm sức căng bề mặt lớp dịch lót phế nang xuống còn 1/12 đến 1/2 so với nước nguyên chất."
      },
      {
        q: "Trong các yếu tố tạo nên lực đàn hồi co xẹp của phổi ở cơ thể sống bình thường, lực căng bề mặt của lớp dịch lót phế nang chiếm tỉ lệ bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.134",
        options: [
          "Chiếm khoảng 2/3 tổng lực đàn hồi của phổi (1/3 còn lại là do các sợi chun elastin và collagen của nhu mô phổi)",
          "Chiếm khoảng 1/3 tổng lực đàn hồi của phổi",
          "Chiếm 100% lực đàn hồi của phổi",
          "Không đóng góp vào lực đàn hồi của phổi"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.134): Lực đàn hồi của phổi gồm 2 thành phần: (1) Lực đàn hồi của chính các sợi elastin và collagen trong mô phổi chiếm 1/3; (2) Lực căng bề mặt của lớp dịch lót mặt trong các phế nang chiếm tới 2/3!"
      },
      {
        q: "Ở cây khí - phế quản của người bình thường khỏe mạnh, kháng lực đường dẫn khí tập trung LỚN NHẤT ở vị trí nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.137",
        options: [
          "Ở khí quản và các phế quản lớn/trung bình (nhờ có tổng thiết diện ngang nhỏ hơn nhiều so với các tiểu phế quản)",
          "Ở các tiểu phế quản tận cùng có đường kính dưới 2 mm",
          "Ở các ống phế nang và túi phế nang",
          "Phân bố hoàn toàn bằng nhau ở cả 23 thế hệ"
        ],
        answer: 0,
        explain: "Đây là câu hỏi bẫy kinh điển: Mặc dù từng tiểu phế quản nhỏ có bán kính nhỏ, nhưng do có tới hàng chục ngàn tiểu phế quản mắc song song nên tổng thiết diện ngang ở vùng ngoại vi cực kỳ lớn → kháng lực của các tiểu phế quản < 2 mm chỉ chiếm 10–20% tổng kháng lực. Kháng lực đường dẫn khí bình thường lớn nhất ở khí quản và các phế quản lớn!"
      },
      {
        q: "Hai người A và B có cùng thông khí phút là 6.000 mL/phút và cùng khoảng chết giải phẫu là 150 mL. Người A thở với tần số 10 lần/phút (TV = 600 mL); người B thở nhanh nông với tần số 30 lần/phút (TV = 200 mL). Thông khí phế nang (V̇A) của người A và người B lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.142",
        options: [
          "Người A: 4.500 mL/phút; Người B: 1.500 mL/phút (thở chậm và sâu cho thông khí phế nang tốt hơn hẳn thở nhanh và nông)",
          "Người A: 6.000 mL/phút; Người B: 6.000 mL/phút (hai người có thông khí phế nang bằng nhau)",
          "Người A: 1.500 mL/phút; Người B: 4.500 mL/phút",
          "Người A: 5.850 mL/phút; Người B: 5.850 mL/phút"
        ],
        answer: 0,
        explain: "Công thức thông khí phế nang: V̇A = f × (TV – VD). Người A: V̇A = 10 × (600 – 150) = 4.500 mL/phút. Người B: V̇A = 30 × (200 – 150) = 1.500 mL/phút. Vì vậy kiểu thở chậm và sâu luôn mang lại thông khí phế nang hiệu quả hơn kiểu thở nhanh và nông."
      },
      {
        q: "Áp suất xuyên phổi (Transpulmonary pressure) được định nghĩa bằng công thức nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.133",
        options: [
          "Hiệu số giữa áp suất phế nang và áp suất màng phổi (Ptp = Palv – Ppl)",
          "Hiệu số giữa áp suất khí quyển và áp suất phế nang (Patm – Palv)",
          "Tổng của áp suất phế nang và áp suất màng phổi (Palv + Ppl)",
          "Hiệu số giữa áp suất màng phổi và áp suất ổ bụng"
        ],
        answer: 0,
        explain: "Áp suất xuyên phổi Ptp = Palv – Ppl là sự chênh lệch áp suất giữa bên trong phế nang và khoang màng phổi bao quanh phổi, phản ánh lực làm nở phổi chống lại lực đàn hồi co xẹp của phổi."
      },
      {
        q: "Khi kích thích thụ thể Beta-2 (β2) adrenergic trên cơ trơn tiểu phế quản (cơ Reissessen) bằng Epinephrine hoặc thuốc Salbutamol sẽ gây đáp ứng gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.137",
        options: [
          "Giãn cơ trơn tiểu phế quản, làm giảm kháng lực đường dẫn khí",
          "Co thắt mạnh cơ trơn tiểu phế quản và tăng tiết đàm nhớt",
          "Làm đóng nắp thanh môn",
          "Làm ngừng tiết chất hoạt diện Surfactant"
        ],
        answer: 0,
        explain: "Cơ trơn Reissessen ở tiểu phế quản có rất nhiều thụ thể β2-adrenergic. Khi gắn với Epinephrine (hoặc thuốc chủ vận β2 như Salbutamol), nó làm tăng cAMP gây giãn phế quản mạnh, giảm sức cản đường thở."
      }
    ]
  },

  // ========================================================================
  // BÀI 7: TRAO ĐỔI KHÍ TẠI PHỔI
  // ========================================================================
  {
    id: 7,
    group: "III. SINH LÝ HÔ HẤP",
    title: "Bài 7: Trao đổi khí tại phổi",
    shortTitle: "Trao đổi khí tại phổi",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 12 (tr.147–153) & Bài 13 (tr.154–165)",
    summary: "Đặc điểm tuần hoàn phổi, sự thay đổi phân áp O2 và CO2 từ khí trời đến máu động mạch, cấu trúc 8 lớp màng phế nang - mao mạch, công thức khuếch tán khí, khả năng khuếch tán DLO2 và tỉ lệ tương xứng thông khí - tưới máu (VA/Q) theo 3 vùng West.",
    simId: "sim_gas_exchange",
    simTitle: "Mô phỏng Khuếch tán Khí qua Màng Phế nang - Mao mạch & Tỉ lệ Thông khí / Tưới máu (VA/Q) theo Vùng Phổi",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🌡️ 1. Khuynh áp Khí từ Khí quyển đến Máu Động mạch</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Cơ chế trao đổi khí tại phổi hoàn toàn là <strong>khuếch tán thụ động</strong> từ nơi có phân áp cao đến nơi có phân áp thấp. Khi khí vào đường dẫn khí ở 37°C sẽ bão hòa hơi nước với <strong>P<sub>H₂O</sub> = 47 mmHg</strong>.</p>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Vị trí khảo sát</th>
                  <th>P<sub>O₂</sub> (mmHg)</th>
                  <th>P<sub>CO₂</sub> (mmHg)</th>
                  <th>P<sub>H₂O</sub> (mmHg)</th>
                  <th>Giải thích sinh lý chuẩn YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Khí quyển khô</strong> (760 mmHg)</td>
                  <td><strong>159</strong></td>
                  <td>0,3</td>
                  <td>~0</td>
                  <td>20,93% × 760 ≈ 159 mmHg.</td>
                </tr>
                <tr>
                  <td><strong>2. Khí hít vào đã làm ẩm ở khí quản</strong></td>
                  <td><strong>149</strong></td>
                  <td>0,3</td>
                  <td><strong>47</strong></td>
                  <td><code>(760 – 47) × 0,2093 = 713 × 0,2093 = 149 mmHg</code>.</td>
                </tr>
                <tr>
                  <td><strong>3. Khí Phế nang (P<sub>A</sub>)</strong></td>
                  <td><strong>100</strong> (104)</td>
                  <td><strong>40</strong></td>
                  <td><strong>47</strong></td>
                  <td>Do khí mới chỉ thay thế 1/7 FRC mỗi nhịp thở và O₂ liên tục khuếch tán vào máu, CO₂ từ máu thải ra phế nang.</td>
                </tr>
                <tr>
                  <td><strong>4. Máu tĩnh mạch trộn (đầu mao mạch phổi)</strong></td>
                  <td><strong>40</strong></td>
                  <td><strong>45 – 46</strong></td>
                  <td>47</td>
                  <td>Khuynh áp ban đầu qua màng: <strong>ΔP<sub>O₂</sub> = 100 – 40 = 60 mmHg</strong>; <strong>ΔP<sub>CO₂</sub> = 46 – 40 = 6 mmHg</strong>.</td>
                </tr>
                <tr>
                  <td><strong>5. Máu cuối mao mạch phổi</strong></td>
                  <td><strong>~ 100 (99,9)</strong></td>
                  <td><strong>40</strong></td>
                  <td>47</td>
                  <td>Thời gian máu đi qua mao mạch phổi là <strong>0,75 giây</strong>, nhưng sự cân bằng đạt được hoàn toàn chỉ sau <strong>0,25 giây (1/3 đầu)</strong> → dự trữ thời gian lớn khi vận động!</td>
                </tr>
                <tr>
                  <td><strong>6. Máu Động mạch hệ thống (P<sub>a</sub>)</strong></td>
                  <td><strong>95</strong></td>
                  <td><strong>40</strong></td>
                  <td>47</td>
                  <td><strong>Tại sao P<sub>aO₂</sub> giảm từ 100 xuống 95 mmHg?</strong> Do hiện tượng <strong>pha trộn máu tĩnh mạch sinh lý (~2% cung lượng tim)</strong> từ tĩnh mạch phế quản đổ vào tĩnh mạch phổi và tĩnh mạch Thebesius đổ thẳng vào buồng tim trái!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔬 2. Màng Phế nang - Mao mạch & Định luật Khuếch tán</div>
          <ul class="theory-list">
            <li><strong>Cấu trúc màng hô hấp (dày 0,2 – 0,6 μm, diện tích 70 – 90 m²):</strong> Từ lòng phế nang vào tới Hemoglobin trong hồng cầu khí phải đi qua <strong>8 lớp</strong> (6 lớp màng hô hấp + huyết tương + màng hồng cầu):
              <ol style="padding-left:18px;margin-top:4px;font-size:13.5px;">
                <li>Lớp dịch lót phế nang có chứa chất hoạt diện Surfactant.</li>
                <li>Biểu mô phế nang (tế bào phế nang type I).</li>
                <li>Màng đáy của biểu mô phế nang.</li>
                <li>Khoảng kẽ rất hẹp giữa phế nang và mao mạch.</li>
                <li>Màng đáy của mao mạch phổi.</li>
                <li>Tế bào nội mô mao mạch phổi.</li>
                <li>Lớp huyết tương trong mao mạch.</li>
                <li>Màng tế bào hồng cầu.</li>
              </ol>
            </li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">📐 Công thức Vận tốc Khuếch tán Khí & Hệ số D<sub>L</sub></div>
            <p style="margin-bottom:6px;"><code>V = (ΔP × A × S) / (d × √MW)</code></p>
            <ul>
              <li>Tỉ lệ thuận với: Khuynh áp (<strong>ΔP</strong>), Diện tích màng trao đổi (<strong>A</strong>), Độ hòa tan của khí trong nước (<strong>S</strong>).</li>
              <li>Tỉ lệ nghịch với: Bề dày màng (<strong>d</strong>) và Căn bậc hai phân tử lượng (<strong>√MW</strong>).</li>
              <li><strong>So sánh CO₂ và O₂:</strong> Do độ hòa tan S của CO₂ cao gấp 24 lần O₂ nên hệ số khuếch tán của <strong>CO₂ nhanh gấp 20,7 lần (≈ 20 lần) so với O₂</strong>! (Vì vậy khi tổn thương màng hô hấp, suy giảm oxy máu luôn xảy ra sớm hơn ứ CO₂).</li>
              <li><strong>Khả năng khuếch tán của O₂ qua màng phổi lúc nghỉ (D<sub>L</sub>O₂):</strong> <strong>21 mL/phút/mmHg</strong> (của CO là D<sub>L</sub>CO = 17 mL/phút/mmHg; của CO₂ ≈ 400–450 mL/phút/mmHg). Khi vận động mạnh, D<sub>L</sub>O₂ tăng lên gấp 3 lần (~65 mL/phút/mmHg) nhờ mở thêm mao mạch đỉnh phổi.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. Tuần hoàn Phổi & Tương xứng Thông khí - Tưới máu (V<sub>A</sub>/Q)</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Đặc điểm Độc đáo của Tuần hoàn Phổi</h4>
            <ul class="theory-list">
              <li><strong>Lưu lượng bằng tuần hoàn hệ thống (5 L/phút)</strong> nhưng là hệ thống <strong>ÁP SUẤT THẤP, KHÁNG LỰC THẤP</strong> (bằng 1/10 hệ thống): Áp suất ĐM phổi chỉ <strong>25 / 10 mmHg (trung bình 15 mmHg)</strong>; áp suất mao mạch phổi ~7 mmHg (nhỏ hơn nhiều áp suất keo huyết tương 28 mmHg → giữ phế nang luôn khô ráo!).</li>
              <li><strong>Phản ứng với thiếu Oxy (Cực kỳ quan trọng!):</strong> Khi phân áp O₂ trong phế nang giảm (&lt; 70 mmHg), các mạch máu phổi tại vùng đó sẽ <strong>CO MẠCH</strong> (ngược hoàn toàn với mạch máu hệ thống giãn ra khi thiếu oxy!).
                <br/>→ <em>Ý nghĩa:</em> Tự động giảm dòng máu đến những vùng phế nang thông khí kém và đẩy máu sang vùng phế nang thông khí tốt để tối ưu hóa tỉ lệ V<sub>A</sub>/Q.
              </li>
              <li><strong>3 Vùng tưới máu phổi của West (khi đứng):</strong>
                <br/>• <strong>Vùng 1 (Đỉnh phổi):</strong> <code>P<sub>A</sub> &gt; P<sub>a</sub> &gt; P<sub>v</sub></code> (bình thường không có ở người khỏe mạnh, chỉ xuất hiện khi tụt HA hoặc thở máy PEEP cao).
                <br/>• <strong>Vùng 2 (Giữa phổi):</strong> <code>P<sub>a</sub> &gt; P<sub>A</sub> &gt; P<sub>v</sub></code> (máu chảy từng đợt theo nhịp tâm thu).
                <br/>• <strong>Vùng 3 (Đáy phổi):</strong> <code>P<sub>a</sub> &gt; P<sub>v</sub> &gt; P<sub>A</sub></code> (máu chảy liên tục suốt chu chuyển tim).
              </li>
            </ul>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Tỉ số Thông khí / Tưới máu (V<sub>A</sub>/Q)</h4>
            <p style="font-size:13.8px;margin-bottom:8px;">Trung bình toàn phổi: <code>V<sub>A</sub> / Q = (4,2 L/phút) / (5,0 L/phút) ≈ <strong>0,8</strong></code>. Khi đứng thẳng, đi từ <strong>đỉnh phổi xuống đáy phổi</strong>, cả thông khí (V<sub>A</sub>) và tưới máu (Q) đều tăng nhưng <strong>Q tăng nhiều hơn V<sub>A</sub></strong>:</p>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tình trạng</th>
                  <th>Giá trị V<sub>A</sub>/Q</th>
                  <th>P<sub>O₂</sub> & P<sub>CO₂</sub> phế nang</th>
                  <th>Bản chất sinh lý bệnh</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Đỉnh phổi (khi đứng)</strong></td>
                  <td><strong>Cao (2,4 – 3,3)</strong></td>
                  <td>P<sub>O₂</sub> rất cao (~132), P<sub>CO₂</sub> thấp (~28)</td>
                  <td>Thông khí thừa so với tưới máu → <strong>Khoảng chết sinh lý</strong>. (Vi khuẩn lao ưa O₂ nên hay gặp ở đỉnh phổi!).</td>
                </tr>
                <tr>
                  <td><strong>Đáy phổi (khi đứng)</strong></td>
                  <td><strong>Thấp (0,5 – 0,6)</strong></td>
                  <td>P<sub>O₂</sub> thấp (~89), P<sub>CO₂</sub> cao (~42)</td>
                  <td>Tưới máu thừa so với thông khí.</td>
                </tr>
                <tr>
                  <td><strong>Tắc hoàn toàn đường dẫn khí</strong> (V<sub>A</sub> = 0, Q bình thường)</td>
                  <td><strong>V<sub>A</sub>/Q = 0</strong></td>
                  <td>Bằng máu tĩnh mạch trộn: <strong>P<sub>O₂</sub> = 40, P<sub>CO₂</sub> = 45–46 mmHg</strong></td>
                  <td><strong>Shunt (Nối tắt phải - trái)</strong>: máu đi qua phổi mà không được trao đổi khí.</td>
                </tr>
                <tr>
                  <td><strong>Thuyên tắc hoàn toàn mạch phổi</strong> (V<sub>A</sub> bình thường, Q = 0)</td>
                  <td><strong>V<sub>A</sub>/Q → ∞ (Vô cực)</strong></td>
                  <td>Bằng khí hít vào làm ẩm: <strong>P<sub>O₂</sub> = 149, P<sub>CO₂</sub> = 0 mmHg</strong></td>
                  <td><strong>Khoảng chết phế nang</strong>: có thông khí nhưng không có máu tưới.</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Tại sao phân áp oxy của máu cuối mao mạch phổi rời phế nang là khoảng 100 mmHg, nhưng khi về đến máu động mạch chủ hệ thống (PaO2) lại giảm xuống còn khoảng 95 mmHg?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.159",
        options: [
          "Do sự pha trộn khoảng 2% máu tĩnh mạch chưa trao đổi khí từ tuần hoàn phế quản và tĩnh mạch Thebesius đổ trực tiếp vào hệ thống tim trái",
          "Do thành động mạch chủ tiêu thụ hết 5 mmHg oxy trên đường đi",
          "Do khí O2 khuếch tán ngược từ tĩnh mạch phổi trở lại khoang màng phổi",
          "Do hồng cầu chuyển hóa hiếu khí trong tâm thất trái"
        ],
        answer: 0,
        explain: "98% máu vào nhĩ trái đã đi qua mao mạch phế nang (PO2 = 100 mmHg), nhưng có khoảng 2% máu tĩnh mạch hệ thống đi tắt (shunt giải phẫu) gồm: máu tĩnh mạch tuần hoàn dinh dưỡng cuống phổi đổ vào tĩnh mạch phổi và máu tĩnh mạch vành Thebesius đổ thẳng vào buồng tim trái. Sự pha trộn này làm PaO2 giảm xuống ~95 mmHg."
      },
      {
        q: "Khi tính từ lòng phế nang vào đến phân tử Hemoglobin bên trong hồng cầu, phân tử khí O2 phải khuếch tán qua tổng cộng bao nhiêu lớp cấu trúc?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.156",
        options: [
          "8 lớp (6 lớp của màng phế nang - mao mạch cộng với lớp huyết tương và màng hồng cầu)",
          "3 lớp (biểu mô phế nang, màng đáy và nội mô mao mạch)",
          "4 lớp",
          "12 lớp"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 13, tr.156 – Hình 13.3): Để đi từ phế nang đến Hb, khí phải vượt qua 8 lớp: (1) Lớp dịch lót có surfactant, (2) Biểu mô phế nang, (3) Màng đáy biểu mô, (4) Khoảng kẽ, (5) Màng đáy mao mạch, (6) Nội mô mao mạch, (7) Lớp huyết tương, và (8) Màng hồng cầu."
      },
      {
        q: "Khả năng khuếch tán của khí O2 qua màng hô hấp toàn phổi ở người trưởng thành bình thường lúc nghỉ ngơi (DLO2) có giá trị là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.158 & Sách TN Câu 48",
        options: [
          "21 mL/phút/mmHg",
          "17 mL/phút/mmHg",
          "400 mL/phút/mmHg",
          "65 mL/phút/mmHg"
        ],
        answer: 0,
        explain: "Lúc nghỉ ngơi, khả năng khuếch tán của O2 (DLO2) là 21 mL/phút/mmHg (còn của CO là DLCO = 17 mL/phút/mmHg; khi vận động mạnh DLO2 có thể tăng lên 65 mL/phút/mmHg)."
      },
      {
        q: "Khí CO2 khuếch tán qua màng phế nang - mao mạch nhanh gấp khoảng 20 lần (20,7 lần) so với khí O2 chủ yếu là do yếu tố nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.155",
        options: [
          "Độ hòa tan (S) của CO2 trong nước/dịch mô cao gấp khoảng 24 lần so với O2",
          "Phân tử lượng (MW) của CO2 nhỏ hơn phân tử lượng của O2",
          "Chênh lệch phân áp (ΔP) của CO2 qua màng lớn gấp 20 lần của O2",
          "Màng phế nang có các kênh vận chuyển chủ động dành riêng cho CO2"
        ],
        answer: 0,
        explain: "Mặc dù CO2 có phân tử lượng lớn hơn O2 (44 so với 32) và khuynh áp ΔPCO2 qua màng chỉ ~6 mmHg (nhỏ hơn nhiều so với ΔPO2 = 60 mmHg), nhưng độ hòa tan (S) của CO2 trong dịch màng cao gấp 24 lần O2 nên hệ số khuếch tán S/√MW của CO2 lớn gấp 20,7 lần O2."
      },
      {
        q: "Đặc điểm điều hòa vận mạch nào sau đây là ĐỘC ĐÁO của tuần hoàn phổi (ngược lại hoàn toàn với tuần hoàn hệ thống)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 12, tr.151",
        options: [
          "Khi phân áp O2 trong phế nang giảm (thiếu oxy), các mạch máu phổi tại vùng đó sẽ CO LẠI để đẩy máu sang vùng phế nang thông khí tốt hơn",
          "Khi phân áp O2 trong phế nang giảm, các mạch máu phổi sẽ giãn rộng tối đa",
          "Áp suất động mạch phổi trung bình cao gấp 5 lần áp suất động mạch chủ",
          "Mạch máu phổi chịu sự chi phối co mạch cực mạnh của hệ đối giao cảm"
        ],
        answer: 0,
        explain: "Ở mô hệ thống, thiếu oxy gây giãn mạch để tăng máu nuôi mô. Ngược lại, ở phổi, khi một vùng phế nang bị thiếu oxy (PAO2 < 70 mmHg), mạch máu phổi quanh đó sẽ CO LẠI (hypoxic pulmonary vasoconstriction) nhằm chuyển hướng dòng máu sang các phế nang khác đang thông khí tốt."
      },
      {
        q: "Khi một người đứng thẳng, lưu lượng máu tưới phổi ở Vùng 2 (vùng giữa phổi) theo phân vùng của West có đặc điểm áp suất nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 12, tr.150 & Đề SĐH 2024",
        options: [
          "Áp suất động mạch phổi (Pa) > Áp suất phế nang (PA) > Áp suất tĩnh mạch phổi (Pv)",
          "Áp suất phế nang (PA) > Áp suất động mạch phổi (Pa) > Áp suất tĩnh mạch phổi (Pv)",
          "Áp suất động mạch phổi (Pa) > Áp suất tĩnh mạch phổi (Pv) > Áp suất phế nang (PA)",
          "Áp suất tĩnh mạch phổi (Pv) > Áp suất phế nang (PA) > Áp suất động mạch phổi (Pa)"
        ],
        answer: 0,
        explain: "Theo 3 vùng West: Vùng 1 (đỉnh): PA > Pa > Pv (không có dòng máu); Vùng 2 (giữa): Pa > PA > Pv (đỉnh tâm thu Pa > PA nên máu chảy từng đợt); Vùng 3 (đáy): Pa > Pv > PA (máu chảy liên tục)."
      },
      {
        q: "Ở người bình thường đang ở tư thế đứng, khi đi từ đỉnh phổi xuống đáy phổi thì thông khí phế nang (VA), tưới máu (Q) và tỉ số VA/Q thay đổi như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.162",
        options: [
          "Cả VA và Q đều tăng từ đỉnh xuống đáy phổi, nhưng Q tăng nhiều hơn VA nên tỉ số VA/Q cao nhất ở đỉnh phổi và thấp nhất ở đáy phổi",
          "VA giảm còn Q tăng nên tỉ số VA/Q bằng nhau ở mọi vùng phổi",
          "Tỉ số VA/Q thấp nhất ở đỉnh phổi (0,6) và cao nhất ở đáy phổi (3,3)",
          "Đỉnh phổi có lưu lượng máu tưới cao gấp 5 lần đáy phổi"
        ],
        answer: 0,
        explain: "Do tác dụng của trọng lực khi đứng, cả thông khí (VA) và lưu lượng máu (Q) ở đáy phổi đều lớn hơn đỉnh phổi, nhưng Q tăng dốc hơn nhiều so với VA. Do đó: ở ĐỈNH phổi VA/Q rất cao (2,4 – 3,3 → khoảng chết sinh lý, PO2 cao), còn ở ĐÁY phổi VA/Q thấp (0,5 – 0,6)."
      },
      {
        q: "Khi một nhánh phế quản bị tắc nghẽn hoàn toàn (không có thông khí VA = 0, nhưng vẫn có máu tưới Q bình thường), tỉ số VA/Q và phân áp khí tại vùng phế nang đó sẽ là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.161",
        options: [
          "VA/Q = 0 (Shunt); phân áp khí phế nang bằng máu tĩnh mạch trộn (PO2 = 40 mmHg, PCO2 = 45–46 mmHg)",
          "VA/Q = vô cực (∞); phân áp khí phế nang bằng khí hít vào (PO2 = 149 mmHg, PCO2 = 0 mmHg)",
          "VA/Q = 0,8; PO2 = 100 mmHg, PCO2 = 40 mmHg",
          "VA/Q = 1; PO2 = 95 mmHg, PCO2 = 40 mmHg"
        ],
        answer: 0,
        explain: "Khi tắc đường dẫn khí (VA = 0, Q > 0) → VA/Q = 0 (tạo dòng nối tắt / shunt). Khí trong phế nang đó sẽ cân bằng hoàn toàn với máu tĩnh mạch trộn đi vào mao mạch phổi, tức PO2 = 40 mmHg và PCO2 = 45–46 mmHg."
      },
      {
        q: "Ngược lại, khi một nhánh động mạch phổi bị thuyên tắc hoàn toàn (vẫn có thông khí bình thường nhưng không có máu tưới Q = 0), tỉ số VA/Q và phân áp khí trong phế nang đó sẽ là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.161",
        options: [
          "VA/Q tiến tới vô cực (∞ - khoảng chết phế nang); phân áp khí bằng khí hít vào làm ẩm (PO2 = 149 mmHg, PCO2 = 0 mmHg)",
          "VA/Q = 0; PO2 = 40 mmHg, PCO2 = 46 mmHg",
          "VA/Q = 0,8; PO2 = 100 mmHg, PCO2 = 40 mmHg",
          "VA/Q = 0,5; PO2 = 159 mmHg, PCO2 = 40 mmHg"
        ],
        answer: 0,
        explain: "Khi tắc mạch máu phổi (Q = 0, VA > 0) → VA/Q = ∞ (tạo khoảng chết phế nang). Vì không có máu lấy O2 hay thải CO2 nên khí phế nang giữ nguyên phân áp của khí trời hít vào đã làm ẩm ở khí quản: PO2 = 149 mmHg và PCO2 = 0 mmHg."
      },
      {
        q: "Thời gian trung bình để một hồng cầu đi hết chiều dài mao mạch phổi lúc nghỉ ngơi là 0,75 giây, nhưng sự cân bằng phân áp O2 và CO2 qua màng phế nang - mao mạch hoàn tất sau bao lâu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.159",
        options: [
          "Chỉ mất khoảng 0,25 giây (1/3 đầu chiều dài mao mạch phổi)",
          "Phải mất đúng 0,75 giây mới cân bằng được 50%",
          "Mất khoảng 2,5 giây",
          "Chỉ cân bằng được CO2 còn O2 không kịp cân bằng"
        ],
        answer: 0,
        explain: "Sự khuếch tán O2 và CO2 diễn ra cực nhanh và đạt trạng thái cân bằng hoàn toàn chỉ trong 0,25 giây đầu tiên (1/3 quãng đường mao mạch). 0,50 giây còn lại là thời gian dự trữ an toàn để khi vận động mạnh (máu chảy nhanh, thời gian qua mao mạch rút xuống còn 0,3 giây) máu vẫn được bão hòa đầy đủ oxy."
      },
      {
        q: "Tại sao trong điều kiện bình thường các phế nang luôn khô ráo mà không bị dịch từ mao mạch phổi tràn vào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 12, tr.152",
        options: [
          "Vì áp suất thủy tĩnh mao mạch phổi rất thấp (~7 mmHg) trong khi áp suất keo huyết tương cao (~28 mmHg) tạo lực hút dịch về lòng mạch, cùng với hệ bạch huyết và Surfactant",
          "Vì thành mao mạch phổi hoàn toàn không thấm nước",
          "Vì áp suất trong phế nang luôn cao hơn 100 mmHg đẩy nước vào mạch",
          "Vì áp suất thủy tĩnh mao mạch phổi cao tới 35 mmHg"
        ],
        answer: 0,
        explain: "Áp suất mao mạch phổi chỉ khoảng 7 mmHg, thấp hơn rất nhiều so với áp suất keo huyết tương (28 mmHg), tạo ra một lực hút ròng liên tục kéo dịch từ khoảng kẽ vào mao mạch, kết hợp với chất hoạt diện Surfactant làm giảm sức căng bề mặt phế nang giúp phế nang luôn khô."
      },
      {
        q: "Kháng lực của hệ mạch máu phổi đạt giá trị THẤP NHẤT ở mức thể tích phổi nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 12, tr.149",
        options: [
          "Ở mức Dung tích cặn chức năng (FRC - cuối kỳ thở ra bình thường)",
          "Ở mức Tổng dung lượng phổi (TLC - khi phế nang căng tối đa chèn ép mạch máu quanh phế nang)",
          "Ở mức Thể tích khí cặn (RV - khi các mạch máu ngoài phế nang bị gấp khúc, xẹp lại)",
          "Kháng lực mạch phổi không phụ thuộc vào thể tích phổi"
        ],
        answer: 0,
        explain: "Kháng lực mạch phổi có đồ thị hình chữ U theo thể tích phổi và ĐẠT THẤP NHẤT tại mức FRC: nếu thể tích phổi quá lớn (TLC) thì phế nang căng đè ép các mao mạch vách phế nang; nếu thể tích phổi quá nhỏ (RV) thì các mạch máu lớn ngoài phế nang mất lực kéo mở nên co hẹp lại."
      }
    ]
  },

  // ========================================================================
  // BÀI 8: CHUYÊN CHỞ KHÍ TRONG MÁU
  // ========================================================================
  {
    id: 8,
    group: "III. SINH LÝ HÔ HẤP",
    title: "Bài 8: Chuyên chở khí trong máu",
    shortTitle: "Chuyên chở khí trong máu",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 14 (tr.166–176)",
    summary: "Hai dạng vận chuyển O2 (hòa tan & kết hợp Hb), công thức tổng lượng oxy máu ctO2, đường cong phân ly Hb-O2 (Barcroft), P50, các yếu tố làm đường cong lệch phải (hiệu quả Bohr) / lệch trái, ba dạng vận chuyển CO2 (7% hòa tan, 23% carbamino, 70% bicarbonate), hiện tượng Hamburger và hiệu quả Haldane.",
    simId: "sim_o2_curve",
    simTitle: "Mô phỏng Đường cong Phân ly Hb-O2 (Đường cong Barcroft), Chỉ số P50, Hàm lượng Oxy máu & Hiện tượng Hamburger",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩸 1. Chuyên chở Oxy (O₂) trong Máu</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Máu động mạch chứa khoảng <strong>20 mL O₂ / 100 mL máu (20 mL/dL)</strong>, được chuyên chở dưới 2 dạng:</p>
          <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí</th>
                <th>1. Dạng Hòa tan</th>
                <th>2. Dạng Kết hợp với Hemoglobin (HbO₂)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tỉ lệ & Hàm lượng</strong></td>
                <td><strong>1,5 – 3%</strong> (<strong>0,3 mL O₂ / dL máu</strong> ở P<sub>aO₂</sub> = 95 mmHg)</td>
                <td><strong>97 – 98,5%</strong> (<strong>~ 19,5 – 20 mL O₂ / dL máu</strong>)</td>
              </tr>
              <tr>
                <td><strong>Đặc điểm động học</strong></td>
                <td>Hệ số hòa tan: <strong>0,003 mL/dL/mmHg</strong>. Tương quan <strong>tuyến tính và không có giới hạn</strong> với P<sub>O₂</sub>.</td>
                <td>1 g Hb gắn tối đa <strong>1,39 mL O₂</strong> (hoặc 1,34). Bão hòa tối đa khi SaO₂ = 100% (bị giới hạn bởi lượng Hb).</td>
              </tr>
              <tr>
                <td><strong>Vai trò sinh lý</strong></td>
                <td>Là <strong>dạng sử dụng trực tiếp thiết yếu</strong> tạo ra phân áp P<sub>O₂</sub> để khuếch tán vào mô và quyết định mức độ gắn với Hb.</td>
                <td>Là <strong>dạng dự trữ chuyên chở chính</strong>; khi mô tiêu thụ O₂ hòa tan thì HbO₂ phân ly bù đắp ngay.</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="callout formula">
            <div class="callout-title">🧮 Công thức Tổng lượng Oxy trong máu (ctO₂ / CaO₂) – Đề thi SĐH</div>
            <p style="font-size:15px;font-weight:700;margin:4px 0;"><code>ctO₂ = (tHb × FO₂Hb × 1,39) + (P<sub>O₂</sub> × 0,003)</code> (đơn vị: mL O₂/dL máu)</p>
            <ul style="margin-top:6px;">
              <li>Ở máu động mạch (P<sub>aO₂</sub> = 95 mmHg, SaO₂ = 97%, Hb = 15 g/dL): <strong>CaO₂ ≈ 19,8 + 0,3 ≈ 20 mL/dL</strong>.</li>
              <li>Ở máu tĩnh mạch trộn (P<sub>vO₂</sub> = 40 mmHg, SvO₂ = 75%): <strong>CvO₂ ≈ 15 mL/dL</strong>.</li>
              <li><strong>Tỉ lệ giao O₂ cho mô (Hệ số sử dụng O₂):</strong>
                <br/>• <strong>Khi nghỉ ngơi:</strong> Máu chỉ giao <strong>1/4 (25%, tức ~5 mL O₂/dL máu hay 250 mL/phút)</strong> cho mô (còn giữ lại 75% làm dự trữ an toàn!).
                <br/>• <strong>Khi vận động nặng:</strong> Hệ số sử dụng tăng gấp 3 lần, giao tới <strong>3/4 (75% – 85%, tức ~15 mL O₂/dL)</strong> cho mô!
              </li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">📈 2. Đường cong Phân ly Hb-O₂ (Đường cong Barcroft)</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Đường cong biểu diễn tương quan giữa P<sub>O₂</sub> và độ bão hòa HbO₂ (SaO₂) có <strong>dạng chữ S (Sigmoid)</strong> do hiệu ứng hợp tác giữa 4 tiểu đơn vị Hb:</p>
          <ul class="theory-list">
            <li><strong>Đoạn dốc (P<sub>O₂</sub> = 10 – 60 mmHg):</strong> Tại mô (P<sub>O₂</sub> dịch kẽ = <strong>40 mmHg</strong>, trong tế bào trung bình <strong>23 mmHg</strong>), chỉ cần P<sub>O₂</sub> mô giảm nhẹ là HbO₂ phân ly mạnh để nhả nhiều O₂ cho mô.</li>
            <li><strong>Đoạn nằm ngang (P<sub>O₂</sub> = 70 – 100 mmHg):</strong> Tại phổi, dù P<sub>AO₂</sub> giảm từ 100 xuống 60 mmHg thì SaO₂ vẫn giữ được ở mức cao (<strong>ở P<sub>O₂</sub> = 60 mmHg → SaO₂ ≈ 89 – 90%</strong>; ở 100 mmHg → 97–98%).</li>
            <li><strong>Trị số P<sub>50</sub> (26,8 ≈ 27 mmHg):</strong> Là phân áp O₂ mà tại đó <strong>50% Hemoglobin bão hòa với O₂ (SaO₂ = 50%)</strong>. P<sub>50</sub> càng cao → ái lực của Hb với O₂ càng giảm (dễ nhả O₂).</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Chiều dịch chuyển</th>
                  <th>Thay đổi P<sub>50</sub> & Ái lực</th>
                  <th>Các yếu tố gây dịch chuyển (Rất hay hỏi thi!)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>LỆCH PHẢI</strong> (Tại mô đang hoạt động – <strong>Hiệu quả Bohr</strong>)</td>
                  <td><strong>Tăng P<sub>50</sub> (&gt; 27 mmHg)</strong> → <strong>Giảm ái lực</strong> Hb với O₂ → <strong>Tăng nhả O₂ cho mô</strong></td>
                  <td>
                    1. <strong>Tăng P<sub>CO₂</sub></strong><br/>
                    2. <strong>Giảm pH (Tăng H⁺ / Toan máu)</strong><br/>
                    3. <strong>Tăng nhiệt độ</strong> (sốt, cơ vận động)<br/>
                    4. <strong>Tăng 2,3-DPG</strong> (lên vùng cao, thiếu máu mạn)
                  </td>
                </tr>
                <tr>
                  <td><strong>LỆCH TRÁI</strong> (Tại phổi hoặc bệnh lý)</td>
                  <td><strong>Giảm P<sub>50</sub> (&lt; 27 mmHg)</strong> → <strong>Tăng ái lực</strong> Hb với O₂ → <strong>Tăng bắt giữ O₂</strong> (khó nhả O₂)</td>
                  <td>
                    1. Giảm P<sub>CO₂</sub>, Tăng pH (Kiềm máu), Giảm nhiệt độ<br/>
                    2. Giảm 2,3-DPG (máu trữ lạnh lâu ngày)<br/>
                    3. <strong>Hemoglobin bào thai (HbF)</strong><br/>
                    4. <strong>Ngộ độc CO (HbCO)</strong>, MetHb
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔄 3. Chuyên chở CO₂ trong Máu, Hiện tượng Hamburger & Hiệu quả Haldane</div>
        <div class="grid-2">
          <div>
            <p style="font-size:14px;margin-bottom:8px;">Máu tĩnh mạch chứa ~52 mL CO₂/dL, máu động mạch chứa ~48 mL CO₂/dL (mỗi 100 mL máu vận chuyển <strong>4 mL CO₂</strong> từ mô về phổi) dưới <strong>3 dạng</strong> theo thứ tự tỉ lệ:</p>
            <div class="callout formula" style="margin-top:0;">
              <div class="callout-title">🏆 Thứ tự 3 Dạng Vận chuyển CO₂ (Câu hỏi Đề thi SĐH)</div>
              <p style="font-weight:700;font-size:14.5px;margin-bottom:6px;"><strong>Bicarbonate (70%) &gt; Carbaminohemoglobin (23%) &gt; Hòa tan (7%)</strong></p>
              <ol style="padding-left:18px;">
                <li><strong>Dạng Bicarbonate (HCO₃⁻) – Chiếm 70%:</strong> CO₂ khuếch tán vào hồng cầu, nhờ enzyme <strong>Carbonic Anhydrase (CA)</strong> xúc tác cực nhanh (tăng tốc 5000 lần):
                  <br/><code>CO₂ + H₂O ⇄ H₂CO₃ ⇄ H⁺ + HCO₃⁻</code>
                  <br/>Ion H⁺ được đệm bởi Hb khử (tạo HHb); còn <strong>HCO₃⁻ khuếch tán ra huyết tương</strong> kết hợp với Na⁺ thành NaHCO₃.
                </li>
                <li><strong>Dạng Carbamino (HbCO₂) – Chiếm 23%:</strong> CO₂ gắn trực tiếp vào nhóm <strong>–NH₂ của chuỗi Globin</strong> (và một ít protein huyết tương).</li>
                <li><strong>Dạng Hòa tan – Chiếm 7%:</strong> (~0,3 mL/dL) Tạo nên phân áp P<sub>CO₂</sub> (40 → 46 mmHg).</li>
              </ol>
            </div>
          </div>

          <div>
            <div class="callout pearl" style="margin-top:0;">
              <div class="callout-title">⚡ Hiện tượng Hamburger (Sự dịch chuyển Ion Cl⁻ / Chloride Shift)</div>
              <ul>
                <li><strong>Tại mô:</strong> Khi HCO₃⁻ khuếch tán từ trong hồng cầu ra huyết tương qua protein trao đổi anion AE1, để trung hòa điện tích, <strong>ion Cl⁻ từ huyết tương sẽ đi vào trong hồng cầu</strong>.</li>
                <li><strong>Hệ quả thẩm thấu (Hay thi!):</strong> Trong hồng cầu máu tĩnh mạch có sự gia tăng số lượng hạt thẩm thấu (Cl⁻, HCO₃⁻) nên kéo thêm <strong>H₂O đi vào hồng cầu</strong> → làm <strong>thể tích hồng cầu (và Hct) trong máu tĩnh mạch LỚN HƠN máu động mạch khoảng 3%!</strong></li>
              </ul>
            </div>
            <div class="callout warning">
              <div class="callout-title">🔁 So sánh Hiệu quả Bohr vs Hiệu quả Haldane</div>
              <ul>
                <li><strong>Hiệu quả Bohr (Tại mô):</strong> Sự tăng CO₂ và H⁺ làm giảm ái lực của Hb với O₂ (đường cong lệch phải) → <strong>thúc đẩy nhả O₂ cho mô</strong>.</li>
                <li><strong>Hiệu quả Haldane (Tại phổi):</strong> Sự gắn O₂ vào Hemoglobin tại phổi biến Hb thành một acid mạnh hơn → <strong>đẩy CO₂ và H⁺ ra khỏi máu để thải qua phế nang</strong> (nhờ hiệu quả Haldane mà lượng CO₂ thải ra tại phổi tăng gấp đôi!).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Công thức tính tổng lượng oxy có trong 100 mL máu toàn phần (ctO2) theo giáo trình Sinh lý học YDS là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.167 & Sách TN Câu 82",
        options: [
          "ctO2 = (tHb × FO2Hb × 1,39) + (PO2 × 0,003)",
          "ctO2 = (tHb × PO2 × 0,003) + 1,39",
          "ctO2 = tHb × 1,39 × PO2",
          "ctO2 = (tHb / 1,39) + (PO2 × 0,03)"
        ],
        answer: 0,
        explain: "Tổng hàm lượng oxy trong máu (ctO2, mL/dL) bằng tổng của: (1) Lượng O2 kết hợp với Hb = nồng độ Hb tổng cộng (tHb) × phân suất Hb gắn oxy (FO2Hb hay SaO2) × 1,39 mL/g; cộng với (2) Lượng O2 hòa tan = PO2 (mmHg) × 0,003 mL/dL/mmHg."
      },
      {
        q: "Trong trạng thái nghỉ ngơi bình thường, khi máu động mạch đi qua mao mạch mô, khoảng bao nhiêu phần phần trăm (hoặc tỉ lệ) lượng oxy trong máu được giao cho mô sử dụng?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.169",
        options: [
          "Khoảng 1/4 (25%, tương ứng 5 mL O2 trong tổng số 20 mL O2 của mỗi 100 mL máu)",
          "Khoảng 3/4 (75%, tương ứng 15 mL O2 / 100 mL máu)",
          "100% lượng oxy trong máu động mạch đều được giao hết cho mô",
          "Chỉ khoảng 1,5% lượng oxy được giao cho mô"
        ],
        answer: 0,
        explain: "Máu động mạch có CaO2 ≈ 20 mL/dL (SaO2 ≈ 97–100%); sau khi qua mô lúc nghỉ ngơi, máu tĩnh mạch còn CvO2 ≈ 15 mL/dL (SvO2 ≈ 75%). Như vậy lúc nghỉ máu chỉ giao 5/20 = 1/4 (25%) lượng O2 cho mô. Khi vận động nặng, máu có thể giao tới 3/4 (75%) lượng O2."
      },
      {
        q: "Những yếu tố nào sau đây làm đường cong phân ly Oxy - Hemoglobin (đường cong Barcroft) LỆCH SANG PHẢI (làm tăng P50 và tăng nhả O2 cho mô)?",
        source: "Đề thi Sinh lý SĐH YDS 2024",
        options: [
          "Tăng PCO2, giảm pH (tăng H+), tăng nhiệt độ và tăng nồng độ 2,3-DPG trong hồng cầu",
          "Giảm PCO2, tăng pH (kiềm máu), hạ thân nhiệt và giảm 2,3-DPG",
          "Sự hiện diện của Hemoglobin bào thai (HbF) và ngộ độc khí CO",
          "Tăng áp suất khí quyển và giảm nồng độ acid lactic tại mô"
        ],
        answer: 0,
        explain: "Tại mô đang hoạt động mạnh: CO2 sinh ra nhiều (tăng PCO2), nhiều acid lactic và H+ (giảm pH), nhiệt độ mô tăng và 2,3-DPG tăng → làm đường cong Barcroft LỆCH PHẢI (tăng P50 > 27 mmHg, giảm ái lực Hb-O2), giúp Hb dễ dàng nhả nhiều O2 cho mô (Hiệu quả Bohr)."
      },
      {
        q: "Sắp xếp các dạng vận chuyển khí CO2 trong máu theo tỉ lệ phần trăm từ CAO XUỐNG THẤP:",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 11",
        options: [
          "Dạng Bicarbonate (70%) > Dạng Carbaminohemoglobin (23%) > Dạng hòa tan (7%)",
          "Dạng Carbaminohemoglobin (70%) > Dạng Bicarbonate (23%) > Dạng hòa tan (7%)",
          "Dạng hòa tan (70%) > Dạng Bicarbonate (23%) > Dạng Carbamino (7%)",
          "Dạng Bicarbonate (50%) > Dạng hòa tan (30%) > Dạng Carbamino (20%)"
        ],
        answer: 0,
        explain: "Khí CO2 được chuyên chở trong máu dưới 3 dạng: (1) Dạng Bicarbonate (HCO3-) chiếm nhiều nhất: 70%; (2) Dạng Carbamino (chủ yếu kết hợp với nhóm -NH2 của globin tạo HbCO2) chiếm 23%; và (3) Dạng hòa tan chiếm 7%."
      },
      {
        q: "Hiện tượng Hamburger (sự dịch chuyển ion Cl- vào trong hồng cầu khi máu đi qua mao mạch mô) dẫn đến hệ quả nào sau đây đối với hồng cầu máu tĩnh mạch?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.173",
        options: [
          "Nước đi theo vào trong hồng cầu làm thể tích hồng cầu (và dung tích hồng cầu Hct) của máu tĩnh mạch lớn hơn máu động mạch khoảng 3%",
          "Hồng cầu máu tĩnh mạch bị teo nhỏ lại do mất nước ra huyết tương",
          "Làm vỡ hoàn toàn hồng cầu mỗi khi máu đi qua mao mạch mô",
          "Làm pH nội bào hồng cầu tăng lên đến 8,5"
        ],
        answer: 0,
        explain: "Tại mô, HCO3- tạo ra trong hồng cầu khuếch tán ra huyết tương và đổi lấy 1 ion Cl- đi vào hồng cầu (hiện tượng Hamburger). Vì HCO3- gắn một phần với H+ còn Cl- tự do trong hồng cầu làm tăng áp suất thẩm thấu nội bào → kéo nước đi vào làm hồng cầu máu tĩnh mạch to hơn máu động mạch khoảng 3%."
      },
      {
        q: "Ở phân áp oxy máu động mạch (PaO2) bằng 60 mmHg trên đường cong Barcroft bình thường, độ bão hòa oxy của Hemoglobin (SaO2) vẫn đạt khoảng bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.168",
        options: [
          "Khoảng 89 – 90%",
          "Khoảng 50%",
          "Khoảng 75%",
          "Khoảng 25%"
        ],
        answer: 0,
        explain: "Các mốc vàng trên đường cong Barcroft cần thuộc lòng: PO2 = 100 mmHg → SaO2 = 97–98%; PO2 = 60 mmHg → SaO2 ≈ 89–90% (điểm gãy đầu đoạn dốc, dưới 60 mmHg được xem là suy hô hấp giảm oxy máu); PO2 = 40 mmHg (máu tĩnh mạch) → SvO2 = 75%; PO2 = 26,8 mmHg (P50) → SaO2 = 50%."
      },
      {
        q: "Đặc điểm nào sau đây ĐÚNG khi nói về dạng Oxy hòa tan trong huyết tương?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.166 & Sách TN Câu 77",
        options: [
          "Tuy chỉ chiếm 1,5 – 3% nhưng là dạng thiết yếu trực tiếp tạo phân áp PO2 để khuếch tán vào mô và tương quan tuyến tính không giới hạn với PO2",
          "Chiếm tới 97% tổng lượng oxy vận chuyển trong máu",
          "Bị giới hạn bão hòa tối đa ở mức PO2 = 100 mmHg",
          "Phụ thuộc hoàn toàn vào nồng độ Hemoglobin trong hồng cầu"
        ],
        answer: 0,
        explain: "Dạng O2 hòa tan (0,3 mL/dL) tỉ lệ thuận tuyến tính với PO2 mà không có giới hạn bão hòa (nên thở oxy cao áp làm tăng mạnh O2 hòa tan). Đây là dạng trực tiếp tạo ra áp lực riêng phần PO2 để khuếch tán vào tế bào và kích thích hóa thụ quan ngoại biên."
      },
      {
        q: "Tại sao Hemoglobin bào thai (HbF) lại có đường cong phân ly Hb-O2 nằm lệch về bên TRÁI so với Hemoglobin người trưởng thành (HbA)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.171",
        options: [
          "Vì chuỗi gamma (γ) của HbF gắn kết rất kém với 2,3-DPG nên HbF có ái lực với O2 cao hơn HbA, giúp thai nhi lấy được O2 từ máu mẹ qua nhau thai",
          "Vì máu thai nhi có nhiệt độ cao hơn máu mẹ 5°C",
          "Vì máu thai nhi có phân áp CO2 bằng 0 mmHg",
          "Vì HbF chứa sắt hóa trị 3 (Fe3+) thay vì sắt hóa trị 2"
        ],
        answer: 0,
        explain: "2,3-DPG gắn vào chuỗi beta (β) của HbA làm giảm ái lực với O2. HbF có cấu tạo α2γ2 (không có chuỗi β) nên không gắn với 2,3-DPG → ái lực của HbF với O2 cao hơn (P50 ≈ 19 mmHg, đường cong lệch trái), giúp máu thai nhi dễ dàng nhận O2 từ máu mẹ tại bánh nhau."
      },
      {
        q: "Hiệu quả Haldane trong quá trình vận chuyển khí có nội dung là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.175",
        options: [
          "Tại phổi, sự gắn kết của O2 với Hemoglobin làm đẩy CO2 ra khỏi máu để thải vào phế nang (và tại mô, sự nhả O2 giúp máu bắt giữ thêm nhiều CO2)",
          "Tại mô, sự tăng CO2 và H+ làm Hemoglobin giảm ái lực và nhả O2 nhiều hơn",
          "Sự trao đổi giữa ion Na+ và K+ qua màng hồng cầu khi máu qua phổi",
          "Sự co mạch phổi khi phân áp O2 phế nang giảm dưới 70 mmHg"
        ],
        answer: 0,
        explain: "Cần phân biệt rõ: Hiệu quả BOHR là tác động của CO2/H+ lên sự gắn và nhả O2. Còn Hiệu quả HALDANE là tác động của sự gắn/nhả O2 lên khả năng vận chuyển và thải trừ CO2 (khi O2 gắn vào Hb tại phổi, HbO2 trở nên có tính acid mạnh hơn nên đẩy H+ và CO2 ra khỏi hồng cầu)."
      },
      {
        q: "Ở một bệnh nhân bị ngộ độc khí Carbon Monoxide (CO) có 50% Hb bị biến thành HbCO, các thông số khí máu động mạch sẽ thay đổi như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.172",
        options: [
          "Phân áp oxy máu động mạch (PaO2) vẫn BÌNH THƯỜNG (~95 mmHg), nhưng tổng hàm lượng oxy máu (CaO2) giảm đi một nửa và đường cong phân ly Hb-O2 lệch trái mạnh",
          "Phân áp oxy máu động mạch (PaO2) giảm xuống dưới 30 mmHg nên hóa thụ quan thể cảnh bị kích thích dữ dội",
          "Đường cong phân ly Hb-O2 lệch sang phải giúp phần Hb còn lại nhả hết O2 cho mô",
          "Tổng hàm lượng oxy máu (CaO2) tăng gấp đôi bình thường"
        ],
        answer: 0,
        explain: "Đây là cơ chế cực kỳ nguy hiểm của ngộ độc CO: vì sự thông khí và khuếch tán ở phổi bình thường nên lượng O2 hòa tan và PaO2 vẫn bình thường (~95 mmHg) → hóa thụ quan thể cảnh KHÔNG bị kích thích (bệnh nhân không thấy khó thở!), nhưng tổng lượng O2 gắn Hb (CaO2) giảm 50% và CO còn làm các vị trí Hb còn lại giữ chặt O2 (lệch trái) gây thiếu oxy não cấp tính."
      },
      {
        q: "Enzyme nào có mặt với nồng độ rất cao bên trong hồng cầu đóng vai trò quyết định giúp chuyển hóa 70% lượng CO2 thành ion Bicarbonate (HCO3-)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.173",
        options: [
          "Carbonic anhydrase (CA)",
          "Glucose-6-phosphate dehydrogenase (G6PD)",
          "5'-deiodinase",
          "Enterokinase"
        ],
        answer: 0,
        explain: "Enzyme Carbonic anhydrase (CA) chứa kẽm (Zn2+) trong hồng cầu xúc tác phản ứng hydrat hóa thuận nghịch CO2 + H2O ⇄ H2CO3 nhanh gấp 5.000 lần so với trong huyết tương (huyết tương hầu như không có enzyme CA)."
      },
      {
        q: "Trung tâm phát nhịp hô hấp cơ bản tự động nằm ở đâu và chất hóa học nào đóng vai trò kích thích hô hấp mạnh nhất ở người bình thường khỏe mạnh?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 15, tr.177–182",
        options: [
          "Nằm ở Hành não (nhóm neuron hô hấp lưng / phức hợp pre-Bötzinger); chất kích thích mạnh nhất là CO2 (thông qua H+ kích thích hóa thụ quan trung ương)",
          "Nằm ở Vỏ não vận động; chất kích thích mạnh nhất là khí N2",
          "Nằm ở Tủy sống ngực; chất kích thích mạnh nhất là sự tăng nhẹ O2 máu",
          "Nằm ở Tiểu não; chất kích thích mạnh nhất là Bicarbonate huyết tương"
        ],
        answer: 0,
        explain: "Nhịp hô hấp cơ bản (hít vào 2s, thở ra 3s) được phát ra tự động tại Hành não (nhóm neuron hô hấp lưng và phức hợp pre-Bötzinger). Ở người khỏe mạnh, sự tăng PCO2 máu là yếu tố kích thích thông khí mạnh nhất vì CO2 qua hàng rào máu não tạo H+ kích thích trực tiếp vùng nhạy cảm hóa học trung ương ở mặt bụng hành não."
      }
    ]
  },

  // ========================================================================
  // BÀI 9: CHỨC NĂNG TẠO NƯỚC TIỂU VÀ BÀI XUẤT CÁC SẢN PHẨM CHUYỂN HÓA
  // ========================================================================
  {
    id: 9,
    group: "IV. SINH LÝ THẬN NIỆU",
    title: "Bài 9: Chức năng tạo nước tiểu và bài xuất các sản phẩm chuyển hóa",
    shortTitle: "Lọc cầu thận & Ống thận",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 17 (tr.198–222) & Bài 18 (tr.223–234)",
    summary: "Màng lọc cầu thận 3 lớp, động học siêu lọc (UP = 10 mmHg, GFR = 125 mL/phút), điều hòa GFR (tiểu ĐM vào/ra, Macula densa), tái hấp thu & bài tiết ở Ống lượn gần (100% Glucose, ngưỡng thận 180 mg/dL, Tm 375 mg/ph), Quai Henle, Ống lượn xa & Ống góp (Aldosterone, ADH) và Hệ số thanh thải (Inulin, Creatinine, PAH).",
    simId: "sim_nephron_gfr",
    simTitle: "Mô phỏng Động học Lọc Cầu thận (Tiểu ĐM Vào/Ra), Đường cong Ngưỡng thận Glucose & Máy tính Thanh thải (Clearance)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔍 1. Màng lọc Cầu thận & Động học Siêu lọc (GFR)</div>
          <ul class="theory-list">
            <li><strong>Cấu trúc Màng lọc cầu thận (3 lớp) & Tính chọn lọc kép:</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li><strong>Tế bào nội mô mao mạch cầu thận:</strong> Có các lỗ cửa sổ (fenestrae) đường kính <strong>70 – 100 nm (700 – 1000 Å)</strong>, bề mặt tích điện âm.</li>
                <li><strong>Màng nền cầu thận (GBM):</strong> Mạng lưới sợi collagen type IV và proteoglycan giàu <strong>heparan sulfate tích điện ÂM mạnh nhất</strong> → đóng vai trò hàng rào điện tích quan trọng nhất ngăn cản <strong>Albumin</strong> (vốn có đường kính 6 nm nhỏ hơn khe lọc 8 nm nhưng tích điện âm nên bị đẩy lại!).</li>
                <li><strong>Tế bào biểu mô có chân (Podocyte) của bao Bowman:</strong> Các chân giả đan nhau tạo <strong>khe lọc (slit diaphragm) rộng ~40 nm (lỗ lọc hiệu dụng ~8 nm / 80 Å, giới hạn TLPT ~70.000 Da)</strong> được nối bởi protein <strong>Nephrin</strong> → là <strong>lớp có kích thước lỗ lọc hẹp nhất</strong> quyết định tính chọn lọc kích thước!</li>
              </ol>
            </li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🧮 Áp suất Lọc Hữu hiệu (UP / P<sub>f</sub>) & Độ lọc Cầu thận (GFR)</div>
            <p style="font-size:15px;font-weight:700;margin-bottom:6px;"><code>UP = P<sub>GC</sub> – (P<sub>BS</sub> + COP<sub>GC</sub>) = 55 – (15 + 30) = <strong>+10 mmHg</strong></code></p>
            <ul>
              <li><strong>P<sub>GC</sub> (Áp suất thủy tĩnh mao mạch cầu thận = 55 mmHg):</strong> Đẩy dịch qua màng.</li>
              <li><strong>P<sub>BS</sub> (Áp suất thủy tĩnh bao Bowman = 15 mmHg):</strong> Cản lọc (tăng khi sỏi niệu quản!).</li>
              <li><strong>COP<sub>GC</sub> (Áp suất keo huyết tương cầu thận = 30 mmHg):</strong> Cản lọc (áp suất keo trong bao Bowman ≈ 0 vì không có protein).</li>
              <li><strong>Độ lọc cầu thận:</strong> <code>GFR = K<sub>f</sub> × UP = 12,5 × 10 = <strong>125 mL/phút (180 Lít/24 giờ)</strong></code>. (99% được ống thận tái hấp thu, chỉ còn 1% tức 1,5–1,8 L/ngày thành nước tiểu!).</li>
              <li><strong>Phân suất lọc (Filtration Fraction – FF):</strong> <code>FF = GFR / ERPF = 125 / 650 ≈ <strong>0,2 (20%)</strong></code>.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">⚙️ 2. Điều hòa GFR & Tác động của Tiểu ĐM Vào (AA) / Ra (EA)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Biến đổi mạch máu</th>
                  <th>Lưu lượng máu thận (RBF)</th>
                  <th>Áp suất cầu thận (P<sub>GC</sub>)</th>
                  <th>Độ lọc cầu thận (GFR)</th>
                  <th>Ví dụ sinh lý / Dược lý</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Giãn Tiểu ĐM Vào (AA)</strong></td>
                  <td><strong>Tăng ↑</strong></td>
                  <td><strong>Tăng ↑</strong></td>
                  <td><strong>Tăng ↑</strong></td>
                  <td>Prostaglandin (PGE₂, PGI₂), NO, ANP, Dopamine.</td>
                </tr>
                <tr>
                  <td><strong>2. Co Tiểu ĐM Vào (AA)</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td>Kích thích giao cảm mạnh (α₁), Endothelin, Adenosine (từ vết đặc).</td>
                </tr>
                <tr>
                  <td><strong>3. Co nhẹ/vừa Tiểu ĐM Ra (EA)</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td><strong>Tăng ↑</strong></td>
                  <td><strong>Tăng ↑</strong> (FF tăng mạnh)</td>
                  <td><strong>Angiotensin II nồng độ thấp/vừa</strong> (giúp bảo tồn GFR khi tụt HA!). <em>(Nếu co EA quá mạnh và kéo dài sẽ làm tăng COP quá mức gây giảm GFR).</em></td>
                </tr>
                <tr>
                  <td><strong>4. Giãn Tiểu ĐM Ra (EA)</strong></td>
                  <td><strong>Tăng ↑</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td><strong>Giảm ↓</strong></td>
                  <td>Thuốc ức chế men chuyển (ACEi) hoặc ức chế thụ thể AT₁ (ARB).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout pearl">
            <div class="callout-title">🔄 Tự điều hòa GFR khi Huyết áp thay đổi từ 80 – 180 mmHg</div>
            <ol style="padding-left:18px;">
              <li><strong>Điều hòa ngược cầu – ống (Tubuloglomerular feedback):</strong> Qua <strong>Phức hợp cận cầu thận</strong>. Khi HA tăng → GFR tăng → tăng lượng NaCl đến <strong>tế bào vết đặc (Macula densa)</strong> ở đầu ống lượn xa → vết đặc tiết <strong>Adenosine / ATP</strong> gây <strong>co tiểu động mạch vào</strong> (đưa GFR về bình thường) và ức chế tiết Renin. Ngược lại khi GFR giảm → vết đặc làm giãn tiểu ĐM vào và kích thích tế bào cận cầu thận tiết <strong>Renin</strong> (tạo Angiotensin II co tiểu ĐM ra).</li>
              <li><strong>Cơ chế co cơ trơn (Myogenic mechanism):</strong> Khi HA tăng làm căng thành tiểu ĐM vào → mở kênh <strong>Degenerin (ENaC cơ học)</strong> và kênh Ca²⁺ → co tiểu ĐM vào ngay lập tức.</li>
            </ol>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧪 3. Tái hấp thu & Bài tiết dọc theo Các Đoạn Ống Thận</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Đoạn ống thận</th>
                <th>Tái hấp thu & Cơ chế vận chuyển chuẩn YDS</th>
                <th>Bài tiết</th>
                <th>Độ thẩm thấu dịch</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Ống lượn gần (PCT)</strong><br/><em>(Tế bào nhiều ty thể, bờ bàn chải giàu enzyme CA)</em></td>
                <td>
                  • <strong>65% Nước, Na⁺, K⁺, Cl⁻</strong> và <strong>85% HCO₃⁻</strong>.<br/>
                  • <strong>100% Glucose và Acid amin:</strong> Vận chuyển <strong>tích cực thứ phát đồng vận chuyển với Na⁺</strong> ở bờ đỉnh (<strong>SGLT2</strong> tái hấp thu 90% ở đoạn S1; <strong>SGLT1</strong> tái hấp thu 10% ở đoạn S3) và khuếch tán hỗ trợ qua <strong>GLUT2</strong> ở bờ đáy bên (nhờ động lực của bơm <strong>Na⁺/K⁺-ATPase</strong> ở bờ đáy bên).<br/>
                  • <strong>Protein phân tử nhỏ:</strong> Tái hấp thu bằng <strong>Ẩm bào (Pinocytosis)</strong>.<br/>
                  • 50% Ure (thụ động).
                </td>
                <td><strong>H⁺</strong> (qua bơm đối vận <strong>NHE3: Na⁺/H⁺</strong>), NH₃, Creatinine, PAH, acid và base hữu cơ (penicillin, salicylate).</td>
                <td><strong>Đẳng trương (300 mOsm/L)</strong> (vì nước đi theo chất hòa tan tương ứng tỉ lệ 65%).</td>
              </tr>
              <tr>
                <td><strong>2. Quai Henle</strong><br/><em>(Nephron cận tủy có quai dài sâu vào tủy thận + mạch thẳng Vasa recta)</em></td>
                <td>
                  • <strong>Cành xuống mỏng:</strong> <strong>Chỉ thấm nước</strong> (tái hấp thu thụ động <strong>15% nước</strong> ra mô kẽ tủy thận ưu trương), hầu như không thấm NaCl và ure.<br/>
                  • <strong>Cành lên mỏng & dày:</strong> <strong>Hoàn toàn KHÔNG thấm nước!</strong> Cành lên dày tái hấp thu chủ động <strong>25–27% Na⁺, K⁺, Cl⁻</strong> qua bơm đồng vận chuyển <strong>1Na⁺ - 1K⁺ - 2Cl⁻ (NKCC2)</strong> (đích tác dụng của thuốc lợi tiểu quai <strong>Furosemide</strong>).
                </td>
                <td>Ure khuếch tán một phần vào quai mỏng (chu trình ure tủy thận).</td>
                <td>• Đỉnh quai (tủy trong): <strong>Ưu trương tối đa (1200 mOsm/L)</strong>.<br/>• Cuối cành lên (vào ống lượn xa): <strong>Nhược trương (100 mOsm/L)</strong>.</td>
              </tr>
              <tr>
                <td><strong>3. Ống lượn xa (DCT)</strong></td>
                <td>
                  • <strong>Đoạn đầu (Đoạn pha loãng):</strong> Không thấm nước, tái hấp thu 5% NaCl qua kênh đồng vận chuyển <strong>Na⁺-Cl⁻ (NCC)</strong> (đích của lợi tiểu <strong>Thiazide</strong>).<br/>
                  • <strong>Đoạn sau DCT & Ống góp vỏ (Có 2 loại tế bào):</strong><br/>
                  &nbsp;&nbsp;1. <strong>Tế bào chính (Principal cell):</strong> Chịu tác dụng của <strong>Aldosterone</strong> (tăng kênh <strong>ENaC</strong> và bơm Na⁺/K⁺-ATPase → <strong>tái hấp thu Na⁺, bài tiết K⁺</strong>) và <strong>ADH</strong> (gắn V₂ → cAMP → gắn kênh nước <strong>Aquaporin-2</strong> lên màng đỉnh → tái hấp thu nước).<br/>
                  &nbsp;&nbsp;2. <strong>Tế bào kẽ α (Intercalated cell):</strong> Bài tiết chủ động nguyên phát <strong>H⁺</strong> qua bơm <strong>H⁺-ATPase</strong> (và H⁺/K⁺-ATPase), tái hấp thu HCO₃⁻ và K⁺.
                </td>
                <td><strong>K⁺</strong> (tế bào chính, dưới tác dụng của Aldosterone) và <strong>H⁺</strong> (tế bào kẽ, có thể bơm H⁺ ngược bậc thang nồng độ gấp <strong>900–1000 lần</strong>, hạ pH nước tiểu xuống tối đa <strong>4,5</strong>).</td>
                <td>Phụ thuộc <strong>ADH</strong>:<br/>• Có ADH tối đa: <strong>1200 mOsm/L</strong>.<br/>• Không có ADH (đái tháo nhạt): <strong>50 mOsm/L</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout trap">
          <div class="callout-title">⚠️ Hai Câu Bẫy Kinh Điển trong Đề thi SĐH YDS về Thận</div>
          <ul>
            <li><strong>Bẫy 1 – Khi có mặt ADH, đoạn nào của nephron tái hấp thu nước NHIỀU NHẤT?</strong> Đáp án vẫn là <strong>ỐNG LƯỢN GẦN (65%)</strong>! (Ống lượn gần luôn tái hấp thu 65% nước bất kể có hay không có ADH; còn ống góp là nơi chịu tác dụng của ADH mạnh nhất để quyết định độ cô đặc cuối cùng, nhưng chỉ tái hấp thu ~9–10% lượng nước lọc).</li>
            <li><strong>Bẫy 2 – Ngưỡng thận của Glucose vs Mức vận chuyển tối đa (T<sub>mG</sub>):</strong>
              <br/>• <strong>Mức lọc Glucose:</strong> <code>FL = GFR × P<sub>Glucose</sub></code> (ở đường huyết 100 mg/dL → FL = 125 × 1 = 125 mg/phút, tái hấp thu hết 100%).
              <br/>• <strong>Ngưỡng thận thực tế của Glucose = 180 mg/dL</strong> (khi đó FL = 1,8 × 125 = 225 mg/phút): bắt đầu xuất hiện glucose trong nước tiểu do sự không đồng đều giữa các nephron (hiện tượng <strong>độ cong Splay</strong>).
              <br/>• <strong>Mức vận chuyển tối đa T<sub>mG</sub> = 375 mg/phút</strong> (đạt được khi đường huyết ≥ <strong>300 mg/dL</strong>, toàn bộ nephron đều bão hòa carrier SGLT).
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📏 4. Hệ số Thanh thải (Clearance: C<sub>x</sub> = U<sub>x</sub> × V / P<sub>x</sub>)</div>
        <div class="grid-3">
          <div class="callout formula" style="margin:0;">
            <div class="callout-title">🥇 Inulin (Tiêu chuẩn vàng GFR)</div>
            Lọc tự do qua cầu thận, không tái hấp thu, không bài tiết, không chuyển hóa tại ống thận → <strong>C<sub>Inulin</sub> = GFR = 125 mL/phút</strong>. (Nhược điểm: chất ngoại sinh phải truyền tĩnh mạch liên tục).
          </div>
          <div class="callout pearl" style="margin:0;">
            <div class="callout-title">🩺 Creatinine (Dùng lâm sàng)</div>
            Sản phẩm nội sinh từ <strong>creatine phosphate của cơ xương</strong>. Được lọc tự do và bài tiết thêm một lượng nhỏ (~10%) ở ống thận (C<sub>Cr</sub> ≈ 135–140 mL/phút). <em>Nhược điểm:</em> Phụ thuộc vào <strong>khối lượng cơ bắp</strong> (không chính xác ở người đoạn chi, suy mòn cơ, người già).
          </div>
          <div class="callout warning" style="margin:0;">
            <div class="callout-title">🩸 PAH (Đo Lưu lượng huyết tương ERPF)</div>
            <strong>PAH (Para-aminohippuric acid)</strong> vừa được lọc tự do vừa được ống lượn gần <strong>bài tiết hoàn toàn (90%)</strong> ngay trong một lần máu qua thận → <strong>C<sub>PAH</sub> = ERPF ≈ 600 – 650 mL/phút</strong> (Lưu lượng máu thận RBF = ERPF / (1 – Hct) ≈ 1200 mL/phút).
          </div>
        </div>
        <p style="font-size:13.8px;margin-top:12px;"><strong>Quy tắc so sánh C<sub>x</sub> với C<sub>Inulin</sub> (đối với chất lọc tự do, không gắn protein huyết tương):</strong> Nếu <strong>C<sub>x</sub> &lt; C<sub>Inulin</sub></strong> → chất X được <strong>tái hấp thu</strong> tại ống thận (VD: Glucose có C<sub>G</sub> = 0; Ure có C<sub>Ure</sub> ≈ 65 mL/phút). Nếu <strong>C<sub>x</sub> &gt; C<sub>Inulin</sub></strong> → chất X được <strong>bài tiết</strong> thêm tại ống thận (VD: PAH, Creatinine, H⁺).</p>
      </div>
    `,
    questions: [
      {
        q: "Trong ba lớp của màng lọc cầu thận, lớp nào có kích thước lỗ lọc HẸP NHẤT (quyết định chọn lọc kích thước) và lớp nào tích điện ÂM MẠNH NHẤT (quyết định ngăn cản albumin)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.200 & Sách TN Câu 9",
        options: [
          "Khe lọc giữa các chân giả của tế bào có chân (Podocyte) hẹp nhất (~8 nm); Màng nền cầu thận (giàu heparan sulfate) tích điện âm mạnh nhất",
          "Lớp tế bào nội mô mao mạch có lỗ lọc hẹp nhất; tế bào có chân tích điện âm mạnh nhất",
          "Màng nền cầu thận có lỗ lọc hẹp nhất; lớp nội mô tích điện dương mạnh nhất",
          "Cả ba lớp đều có kích thước lỗ lọc bằng 100 nm và không mang điện tích"
        ],
        answer: 0,
        explain: "Nội mô mao mạch có cửa sổ 70–100 nm (700 Å); Màng nền cầu thận chứa mạng sợi collagen và proteoglycan (heparan sulfate) tích điện âm mạnh nhất giúp đẩy phân tử albumin tích điện âm; còn khe lọc (slit diaphragm, chứa nephrin) giữa các chân giả của Podocyte có kích thước lỗ lọc hiệu dụng nhỏ nhất (~8 nm hay 80 Å, giới hạn TLPT 70.000)."
      },
      {
        q: "Cho áp suất thủy tĩnh mao mạch cầu thận (PGC) = 55 mmHg, áp suất thủy tĩnh bao Bowman (PBS) = 15 mmHg, áp suất keo huyết tương mao mạch cầu thận (COP) = 30 mmHg. Áp suất lọc hữu hiệu (UP) tại cầu thận là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.202",
        options: [
          "+10 mmHg",
          "+40 mmHg",
          "+25 mmHg",
          "0 mmHg"
        ],
        answer: 0,
        explain: "Công thức áp suất siêu lọc hữu hiệu: UP = PGC – (PBS + COP) = 55 – (15 + 30) = +10 mmHg. Với hệ số siêu lọc Kf = 12,5 mL/phút/mmHg → GFR = 12,5 × 10 = 125 mL/phút."
      },
      {
        q: "Sự biến đổi nào sau đây của tiểu động mạch vào (AA) và tiểu động mạch ra (EA) sẽ làm TĂNG độ lọc cầu thận (GFR)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.204",
        options: [
          "Giãn tiểu động mạch vào và co nhẹ/vừa tiểu động mạch ra",
          "Co tiểu động mạch vào và giãn tiểu động mạch ra",
          "Co mạnh tiểu động mạch vào",
          "Giãn tiểu động mạch ra đơn thuần (như khi dùng thuốc ức chế men chuyển ACEi)"
        ],
        answer: 0,
        explain: "Giãn tiểu ĐM vào làm tăng dòng máu và truyền áp lực vào cầu thận → tăng PGC → tăng GFR. Co nhẹ/vừa tiểu ĐM ra (như tác dụng của Angiotensin II) làm cản trở máu thoát khỏi cầu thận → tăng PGC → tăng GFR (và tăng phân suất lọc FF)."
      },
      {
        q: "Trong cơ chế tự điều hòa ngược cầu - ống (Tubuloglomerular feedback), khi GFR giảm làm giảm nồng độ NaCl đến ống lượn xa, cấu trúc nào sẽ cảm nhận và khởi phát đáp ứng điều chỉnh?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.205",
        options: [
          "Tế bào vết đặc (Macula densa) thuộc phức hợp cận cầu thận cảm nhận giảm NaCl, làm giãn tiểu ĐM vào và kích thích tế bào cận cầu thận tiết Renin (tạo Angiotensin II co tiểu ĐM ra)",
          "Tế bào có chân (Podocyte) tiết ADH làm co tiểu động mạch vào",
          "Tế bào kẽ ống góp tiết Aldosterone làm co tiểu động mạch vào",
          "Mạch thẳng Vasa recta ở tủy thận tiết Erythropoietin làm tăng GFR"
        ],
        answer: 0,
        explain: "Phức hợp cận cầu thận gồm tế bào vết đặc (Macula densa) ở đầu ống lượn xa và tế bào cận cầu thận (JG cells) ở thành tiểu ĐM vào. Khi GFR giảm → giảm NaCl qua vết đặc → vết đặc giảm tiết adenosine làm giãn tiểu ĐM vào, đồng thời kích thích tế bào JG tiết Renin → tạo Angiotensin II co tiểu ĐM ra → khôi phục GFR."
      },
      {
        q: "Khi có mặt hormon ADH (Vasopressin), đoạn nào của ống thận tái hấp thu số lượng nước NHIỀU NHẤT?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 14",
        options: [
          "Ống lượn gần (luôn tái hấp thu khoảng 65% lượng nước lọc qua cầu thận)",
          "Ống góp tủy (chỉ tái hấp thu khoảng 9 – 10% lượng nước lọc)",
          "Cành lên dày của quai Henle",
          "Đoạn đầu của ống lượn xa"
        ],
        answer: 0,
        explain: "Đây là câu hỏi bẫy kinh điển trong đề SĐH YDS: Dù có hay không có mặt ADH, ỐNG LƯỢN GẦN vẫn là nơi tái hấp thu lượng nước tuyệt đối NHIỀU NHẤT (65% của 180 L/ngày = 117 L/ngày). Ống góp là nơi chịu tác dụng của ADH mạnh nhất để cô đặc nước tiểu nhưng tổng lượng nước tái hấp thu ở ống góp chỉ khoảng 9–10%."
      },
      {
        q: "Các phân tử Protein kích thước nhỏ bị lọc qua cầu thận sẽ được tái hấp thu hoàn toàn tại ống lượn gần theo cơ chế nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 15 & Sách SL 2025 tr.210",
        options: [
          "Ẩm bào (Pinocytosis) tại màng bờ bàn chải rồi phân giải thành acid amin trong tế bào ống lượn gần",
          "Đồng vận chuyển chủ động thứ phát với ion Na+ qua kênh SGLT2",
          "Khuếch tán đơn giản qua lớp lipid kép của màng tế bào",
          "Vận chuyển chủ động nguyên phát qua bơm H+/K+-ATPase"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 17, tr.210): Khoảng 30 g protein phân tử nhỏ lọc qua cầu thận mỗi ngày được tái hấp thu hoàn toàn ở bờ bàn chải ống lượn gần bằng cơ chế ẨM BÀO (Pinocytosis - một dạng nhập bào cần năng lượng), sau đó bị lysosome tiêu hóa thành các acid amin đưa trả về máu."
      },
      {
        q: "Ngưỡng thận thực tế đối với Glucose ở người bình thường và mức vận chuyển tối đa của Glucose tại ống lượn gần (TmG) lần lượt có giá trị là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.209",
        options: [
          "Ngưỡng thận Glucose là 180 mg/dL; mức vận chuyển tối đa TmG là 375 mg/phút (đạt được ở đường huyết ~300 mg/dL)",
          "Ngưỡng thận Glucose là 100 mg/dL; mức vận chuyển tối đa TmG là 125 mg/phút",
          "Ngưỡng thận Glucose là 300 mg/dL; mức vận chuyển tối đa TmG là 180 mg/phút",
          "Ngưỡng thận Glucose là 126 mg/dL; không có giới hạn vận chuyển tối đa"
        ],
        answer: 0,
        explain: "Về lý thuyết ngưỡng là 300 mg/dL, nhưng trên thực tế do khả năng tái hấp thu giữa các nephron không đồng nhất (hiện tượng cong Splay), ngay khi đường huyết vượt quá 180 mg/dL (mức lọc 225 mg/phút) thì glucose đã bắt đầu xuất hiện trong nước tiểu. Khi đường huyết ≥ 300 mg/dL, toàn bộ các kênh SGLT bão hòa ở mức TmG = 375 mg/phút."
      },
      {
        q: "Khi dịch lọc đi qua hết quai Henle để tiến vào đoạn đầu của ống lượn xa, độ thẩm thấu của dịch lòng ống tại đây có đặc điểm gì và nhờ cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.213",
        options: [
          "Nhược trương (~100 mOsm/L), vì cành lên dày quai Henle hoàn toàn không thấm nước nhưng bơm mạnh Na+, K+, Cl- ra mô kẽ qua kênh NKCC2",
          "Ưu trương (~1200 mOsm/L), vì cành lên dày chỉ tái hấp thu nước mà không tái hấp thu muối",
          "Đẳng trương (~300 mOsm/L), giống hệt dịch rời ống lượn gần",
          "Ưu trương (~600 mOsm/L), do ADH gắn nhiều kênh Aquaporin-2 ở cành lên quai Henle"
        ],
        answer: 0,
        explain: "Cành xuống mỏng chỉ thấm nước nên dịch xuống đỉnh quai Henle rất ưu trương (1200 mOsm/L). Ngược lại, cành lên dày hoàn toàn KHÔNG thấm nước nhưng lại tái hấp thu chủ động rất mạnh Na+, K+, 2Cl- (kênh NKCC2), làm dịch khi rời quai Henle vào đầu ống lượn xa trở thành dịch NHƯỢC TRƯƠNG (~100 mOsm/L)."
      },
      {
        q: "Hormon Aldosterone tác động lên tế bào chính (Principal cells) của đoạn cuối ống lượn xa và ống góp vỏ gây ra hiệu quả sinh lý nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.215",
        options: [
          "Tăng tái hấp thu Na+ (và nước đi theo) đồng thời tăng bài tiết K+ ra nước tiểu (thông qua tăng tổng hợp kênh ENaC, kênh K+ và bơm Na+/K+-ATPase)",
          "Tăng bài xuất Na+ ra nước tiểu và giữ K+ lại trong máu",
          "Chỉ làm tăng tái hấp thu nước tự do thông qua kênh Aquaporin-2 mà không ảnh hưởng đến Na+ hay K+",
          "Tăng tái hấp thu Glucose và Acid amin ở ống góp"
        ],
        answer: 0,
        explain: "Aldosterone là hormon steroid của lớp cầu vỏ thượng thận, gắn thụ thể nội bào ở tế bào chính của ống lượn xa và ống góp, kích thích phiên mã gen tạo bơm Na+/K+-ATPase ở bờ đáy và kênh Na+ (ENaC) cùng kênh K+ ở bờ đỉnh → Tăng tái hấp thu Na+ vào máu và tăng đào thải K+ ra nước tiểu."
      },
      {
        q: "Tại sao trên lâm sàng không nên dùng độ thanh thải Creatinine huyết thanh để ước tính GFR ở bệnh nhân bị đoạn chi (cắt cụt hai chân) hoặc teo cơ nặng?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 13 & Sách SL 2025 tr.228",
        options: [
          "Vì Creatinine nội sinh là sản phẩm thoái giáng từ creatine phosphate của cơ xương nên phụ thuộc trực tiếp vào khối lượng cơ bắp",
          "Vì Creatinine bị tái hấp thu 100% tại ống lượn gần ở người đoạn chi",
          "Vì Creatinine có trọng lượng phân tử lớn hơn 100.000 Da nên không lọc qua cầu thận được",
          "Vì Creatinine chỉ được sản xuất bởi tuyến thượng thận"
        ],
        answer: 0,
        explain: "Creatinine nội sinh được sinh ra hàng ngày từ sự chuyển hóa creatine phosphate tại cơ vân, nên nồng độ creatinine máu phụ thuộc chặt chẽ vào khối lượng cơ bắp (tuổi, giới, dinh dưỡng, đoạn chi). Ở người đoạn chi, sản lượng creatinine giảm thấp giả tạo khiến ước tính GFR từ creatinine huyết thanh bị sai lệch (nên thay bằng Cystatin C hoặc Inulin)."
      },
      {
        q: "Chất nào sau đây có hệ số thanh thải lớn nhất ở thận người bình thường và được dùng để đo Lưu lượng huyết tương có hiệu quả qua thận (ERPF)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 18, tr.229",
        options: [
          "PAH (Para-aminohippuric acid), với CPAH ≈ 600 – 650 mL/phút",
          "Inulin, với CInulin = 125 mL/phút",
          "Glucose, với CGlucose = 0 mL/phút",
          "Ure, với CUre ≈ 65 mL/phút"
        ],
        answer: 0,
        explain: "PAH ở nồng độ thấp trong huyết tương vừa được lọc tự do qua cầu thận (20%) vừa được tế bào ống lượn gần bài tiết gần như hoàn toàn phần còn lại (90% máu qua thận được lọc sạch PAH chỉ trong 1 vòng tuần hoàn). Do đó hệ số thanh thải của PAH chính bằng Lưu lượng huyết tương có hiệu quả qua thận (ERPF ≈ 600–650 mL/phút)."
      },
      {
        q: "Một chất X lọc tự do qua cầu thận và không gắn với protein huyết tương. Nếu kết quả đo được hệ số thanh thải của chất X nhỏ hơn hệ số thanh thải của Inulin (CX < CInulin), ta kết luận được gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 18, tr.226",
        options: [
          "Chất X đã được ống thận tái hấp thu (một phần hoặc hoàn toàn)",
          "Chất X đã được ống thận bài tiết thêm vào lòng ống",
          "Chất X không được tái hấp thu cũng không được bài tiết",
          "Chất X được tổng hợp mới bởi tế bào ống góp"
        ],
        answer: 0,
        explain: "CInulin = GFR phản ánh đúng lượng lọc qua cầu thận. Nếu chất X lọc tự do mà lượng thải ra trong nước tiểu ít hơn lượng lọc (CX < CInulin), chắc chắn chất X đã được ống thận TÁI HẤP THU trở lại máu. Ngược lại nếu CX > CInulin thì chất X đã được ống thận BÀI TIẾT thêm."
      }
    ]
  },

  // ========================================================================
  // BÀI 10: CHỨC NĂNG NỘI TIẾT CỦA THẬN
  // ========================================================================
  {
    id: 10,
    group: "IV. SINH LÝ THẬN NIỆU",
    title: "Bài 10: Chức năng nội tiết của thận",
    shortTitle: "Nội tiết của thận & Nội môi",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 19 (tr.235–257)",
    summary: "Ba chất nội tiết chính của thận (Hệ Renin-Angiotensin-Aldosterone RAAS, Erythropoietin EPO, Calcitriol 1,25-(OH)2D3), điều hòa áp suất thẩm thấu (Na+, ADH, hội chứng SIADH), điều hòa thể tích dịch ngoại bào, nội cân bằng K+ và thăng bằng Kiềm - Toan tại thận.",
    simId: "sim_renal_endocrine",
    simTitle: "Mô phỏng Hệ RAAS - EPO - Calcitriol & Máy phân tích Thăng bằng Kiềm - Toan / Áp suất Thẩm thấu (Na+, K+, ADH)",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🧬 1. Ba Hệ thống Nội tiết Chính của Thận (RAAS, EPO, Calcitriol)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Chất nội tiết</th>
                <th>Tế bào sản xuất tại thận</th>
                <th>Yếu tố kích thích bài tiết</th>
                <th>Cơ chế & Tác dụng sinh lý chuẩn YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Renin</strong><br/><em>(Khởi động hệ RAAS)</em></td>
                <td><strong>Tế bào cận cầu thận (JG cells)</strong> ở thành tiểu động mạch vào.</td>
                <td>
                  1. <strong>Giảm huyết áp / Giảm áp lực tưới máu thận</strong> (phản xạ áp thụ quan tại thận).<br/>
                  2. <strong>Giảm lượng NaCl đến vết đặc (Macula densa)</strong>.<br/>
                  3. <strong>Kích thích thần kinh giao cảm</strong> (qua thụ thể <strong>β₁</strong>).
                </td>
                <td>
                  • Renin là một enzyme cắt <strong>Angiotensinogen (do GAN sản xuất)</strong> → <strong>Angiotensin I</strong> (10 aa).<br/>
                  • Qua mao mạch <strong>Phổi</strong>, men chuyển <strong>ACE</strong> cắt Angiotensin I → <strong>Angiotensin II</strong> (8 aa).<br/>
                  • <strong>4 Tác dụng của Angiotensin II:</strong> (1) Co tiểu ĐM toàn thân rất mạnh (gấp 4–8 lần Noradrenaline), tại thận co tiểu ĐM ra nhiều hơn tiểu ĐM vào; (2) Kích thích <strong>lớp cầu vỏ thượng thận tiết Aldosterone</strong>; (3) Kích thích trực tiếp ống lượn gần tái hấp thu Na⁺ và nước; (4) Kích thích vùng hạ đồi gây <strong>cảm giác khát và tiết ADH</strong>.
                </td>
              </tr>
              <tr>
                <td><strong>2. Erythropoietin (EPO)</strong></td>
                <td><strong>Nguyên bào sợi mô kẽ quanh ống thận</strong> ở vùng vỏ (chiếm <strong>80 – 90%</strong>; gan chỉ sản xuất 10 – 20%).</td>
                <td><strong>Thiếu oxy mô thận (Hypoxia)</strong> (do thiếu máu, lên vùng cao, suy tim/phổi; thông qua yếu tố <strong>HIF-1</strong>).</td>
                <td>Gắn thụ thể EPO-R (qua JAK2-STAT5) tại tủy đỏ xương → kích thích các tế bào tiền thân dòng hồng cầu (đặc biệt là <strong>CFU-E</strong>) tăng sinh và biệt hóa thành hồng cầu trưởng thành.</td>
              </tr>
              <tr>
                <td><strong>3. Calcitriol</strong><br/><code>1,25-(OH)₂D₃</code></td>
                <td><strong>Tế bào biểu mô ống lượn gần</strong> (chứa enzyme <strong>1α-hydroxylase</strong>).</td>
                <td>
                  1. <strong>Giảm Ca²⁺ máu → Tăng tiết PTH (Hormon cận giáp)</strong> (kích thích mạnh nhất enzyme 1α-hydroxylase!).<br/>
                  2. <strong>Giảm Phosphate (PO₄³⁻) máu</strong>.
                </td>
                <td>
                  • Chuỗi chuyển hóa: 7-dehydrocholesterol (Da + tia UV) → Cholecalciferol (D₃) → <strong>Gan</strong> (25-hydroxylase) tạo <code>25-(OH)D₃</code> → <strong>Ống lượn gần Thận</strong> (<strong>1α-hydroxylase</strong>) tạo <strong>Calcitriol <code>1,25-(OH)₂D₃</code></strong> (dạng có hoạt tính sinh học mạnh nhất!).<br/>
                  • <strong>Tác dụng:</strong> Tăng tổng hợp protein <strong>Calbindin</strong> giúp <strong>tăng hấp thu Ca²⁺ và PO₄³⁻ ở ruột non</strong>, phối hợp PTH tăng tái hấp thu Ca²⁺ ở thận và khoáng hóa xương.
                </td>
              </tbody>
          </table>
        </div>
        <div class="callout pearl">
          <div class="callout-title">💡 Các chất cận tiết khác tại thận (Prostaglandin, Kallikrein-Bradykinin, Endothelin)</div>
          Thận còn tổng hợp các chất giãn mạch tại chỗ như <strong>PGE₂, PGI₂</strong> và <strong>Bradykinin, NO</strong> giúp giãn tiểu động mạch vào, bảo vệ dòng máu thận khi hệ giao cảm hoặc Angiotensin II hoạt hóa quá mức (nên dùng thuốc kháng viêm NSAIDs ức chế tổng hợp prostaglandin ở người suy tim/mất nước rất dễ gây suy thận cấp trước thận!).
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">💧 2. Điều hòa Áp suất Thẩm thấu, Thể tích & Nội cân bằng Na⁺, K⁺</div>
          <div class="callout formula" style="margin-top:0;">
            <div class="callout-title">🧮 Công thức Áp suất Thẩm thấu Huyết tương (P<sub>osm</sub> = 275 – 290 mOsm/kg)</div>
            <p style="font-weight:700;margin-bottom:4px;"><code>P<sub>osm</sub> ≈ 2 × [Na⁺] + (Glucose / 18) + (BUN / 2,8)</code></p>
            Ion <strong>Na⁺ (và các anion đi kèm Cl⁻, HCO₃⁻) quyết định trên 90%</strong> áp suất thẩm thấu dịch ngoại bào!
          </div>
          <ul class="theory-list">
            <li><strong>Điều hòa Áp suất thẩm thấu (Hệ thống Thẩm thụ quan Hạ đồi – ADH – Khát):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Chỉ cần P<sub>osm</sub> tăng <strong>1 – 2% (&gt; 290 mOsm/L)</strong> → kích thích thẩm thụ quan vùng hạ đồi → (1) Tuyến yên sau phóng thích <strong>ADH</strong> làm ống góp tăng tái hấp thu nước tự do qua <strong>Aquaporin-2</strong>; (2) Kích thích <strong>trung tâm khát</strong> làm uống nước.</li>
                <li><em>Bệnh lý đề thi SĐH:</em> <strong>Hội chứng tiết ADH không thích hợp (SIADH)</strong> (tăng tiết ADH quá mức) → giữ quá nhiều nước tự do trong lòng mạch gây <strong>GIẢM NỒNG ĐỘ Na⁺ MÁU (Hạ Natri máu do pha loãng)</strong> và nước tiểu cô đặc! Ngược lại thiếu ADH gây <strong>Đái tháo nhạt</strong> (tiểu nhiều, nhược trương, tăng Na⁺ máu).</li>
              </ul>
            </li>
            <li><strong>Nội cân bằng Kali (K⁺ ngoại bào bình thường: 3,5 – 5,0 mmol/L):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Điều hòa nhanh sau bữa ăn (Đưa K⁺ vào tế bào):</strong> 98% K⁺ của cơ thể nằm trong nội bào, chủ yếu ở <strong>CƠ XƯƠNG (Hồ chứa đệm K⁺ lớn nhất cơ thể!)</strong> và gan. Ngay sau bữa ăn giàu K⁺, <strong>Insulin</strong>, <strong>Catecholamine (qua thụ thể β₂)</strong> và Aldosterone hoạt hóa bơm <strong>Na⁺/K⁺-ATPase</strong> đẩy K⁺ vào cơ xương, ngăn tăng K⁺ máu cấp tính. (Toan chuyển hóa vô cơ làm H⁺ vào tế bào đẩy K⁺ ra máu gây tăng K⁺ máu).</li>
                <li><strong>Đào thải K⁺ tại thận:</strong> Do tế bào chính ống lượn xa và ống góp bài tiết dưới sự điều khiển của <strong>Aldosterone</strong>. (Trong suy thận cấp / hoại tử ống thận cấp làm mất khả năng bài tiết K⁺ → gây <strong>tăng K⁺ máu</strong> nguy hiểm tính mạng).</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">⚖️ 3. Vai trò của Thận trong Thăng bằng Kiềm - Toan (pH = 7,35 – 7,45)</div>
          <div class="callout formula" style="margin-top:0;">
            <div class="callout-title">📐 Phương trình Henderson - Hasselbalch</div>
            <p style="font-weight:700;"><code>pH = 6,1 + log ( [HCO₃⁻] / (0,03 × P<sub>aCO₂</sub>) ) = 6,1 + log (24 / 1,2) = 6,1 + 1,3 = <strong>7,4</strong></code></p>
            <ul>
              <li>Tử số <strong>[HCO₃⁻] (~24 mmol/L)</strong> do <strong>THẬN</strong> điều hòa (Rối loạn chuyển hóa).</li>
              <li>Mẫu số <strong>P<sub>aCO₂</sub> (~40 mmHg)</strong> do <strong>PHỔI</strong> điều hòa (Rối loạn hô hấp).</li>
            </ul>
          </div>
          <ul class="theory-list">
            <li><strong>Hệ đệm Bicarbonate (HCO₃⁻ / H₂CO₃):</strong> Là hệ đệm quan trọng nhất của dịch ngoại bào. <em>Lưu ý bẫy đề thi SĐH:</em> Hệ đệm bicarbonate có thể đệm tất cả các acid cố định (lactic, ketoacid, HCl, H₂SO₄...), <strong>TRỪ chính Carbonic acid (H₂CO₃ / CO₂)</strong> (một hệ đệm không thể tự đệm cho chính thành phần acid của nó; H₂CO₃ phải được đệm bởi Hemoglobin và protein nội bào!).</li>
            <li><strong>3 Cơ chế điều hòa pH của Thận:</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li><strong>Tái hấp thu gần như hoàn toàn HCO₃⁻ đã lọc</strong> (85% ở ống lượn gần, 10% ở quai Henle, 5% ở ống xa/ống góp – không phải là tạo HCO₃⁻ mới).</li>
                <li><strong>Bài tiết H⁺ và Tạo HCO₃⁻ MỚI thông qua Hệ đệm Phosphate (HPO₄²⁻ / H₂PO₄⁻ – Acid chuẩn độ được):</strong> Chiếm <strong>1/3</strong> lượng acid cố định thải ra (~20–30 mmol/ngày).</li>
                <li><strong>Bài tiết H⁺ và Tạo HCO₃⁻ MỚI thông qua Hệ đệm Ammoni (NH₃ / NH₄⁺):</strong> Chiếm <strong>2/3 (quan trọng nhất!)</strong> lượng H⁺ thải ra (~30–50 mmol/ngày, và trong nhiễm toan mạn có thể tăng lên tới <strong>500 mmol/ngày</strong> nhờ chuyển hóa <strong>Glutamine</strong> tại ống lượn gần!).</li>
              </ol>
            </li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong hệ thống Renin - Angiotensin - Aldosterone (RAAS), tiền chất Angiotensinogen được tổng hợp bởi cơ quan nào và enzyme Renin được bài tiết bởi tế bào nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.236 & Sách TN Câu 65",
        options: [
          "Angiotensinogen do GAN tổng hợp; Renin do tế bào cận cầu thận (ở thành tiểu động mạch vào của thận) bài tiết",
          "Angiotensinogen do PHỔI tổng hợp; Renin do tế bào vết đặc (Macula densa) bài tiết",
          "Cả Angiotensinogen và Renin đều do lớp cầu vỏ thượng thận bài tiết",
          "Angiotensinogen do thận tổng hợp; Renin do tế bào nội mô mao mạch phổi bài tiết"
        ],
        answer: 0,
        explain: "Cần phân biệt chính xác nguồn gốc: Angiotensinogen là một α2-globulin do GAN sản xuất đưa vào máu. Renin là enzyme do tế bào cận cầu thận (JG cells ở tiểu ĐM vào) tiết ra để cắt Angiotensinogen thành Angiotensin I. Sau đó men chuyển ACE (ở nội mô mao mạch PHỔI) chuyển Angiotensin I thành Angiotensin II."
      },
      {
        q: "Những yếu tố nào sau đây kích thích tế bào cận cầu thận tăng bài tiết Renin vào máu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.237",
        options: [
          "Giảm huyết áp động mạch (giảm áp lực tưới máu thận), giảm nồng độ NaCl đến vết đặc (Macula densa) và kích thích thần kinh giao cảm thận (thụ thể β1)",
          "Tăng huyết áp động mạch, tăng NaCl đến vết đặc và tăng tiết ANP từ tâm nhĩ",
          "Tăng nồng độ Angiotensin II và tăng nồng độ ADH trong máu",
          "Tăng thể tích dịch ngoại bào và cắt đứt thần kinh giao cảm thận"
        ],
        answer: 0,
        explain: "Ba cơ chế chính kích thích tiết Renin là: (1) Áp thụ quan tại tiểu ĐM vào cảm nhận giảm áp lực tưới máu thận; (2) Vết đặc cảm nhận giảm lượng NaCl đi qua đầu ống lượn xa; và (3) Thần kinh giao cảm kích thích trực tiếp thụ thể β1 trên tế bào cận cầu thận."
      },
      {
        q: "Tại thận, bước chuyển hóa cuối cùng biến 25-hydroxycholecalciferol [25-(OH)D3] thành dạng Vitamin D có hoạt tính sinh học mạnh nhất là Calcitriol [1,25-(OH)2D3] diễn ra ở đâu và chịu sự kích thích chủ yếu của hormon nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.239",
        options: [
          "Diễn ra tại tế bào biểu mô ống lượn gần nhờ enzyme 1α-hydroxylase, dưới sự kích thích mạnh của hormon tuyến cận giáp (PTH)",
          "Diễn ra tại tế bào chính của ống góp nhờ enzyme 25-hydroxylase, dưới sự kích thích của Calcitonin",
          "Diễn ra tại cầu thận dưới sự kích thích của Aldosterone",
          "Diễn ra tại quai Henle dưới sự kích thích của ADH"
        ],
        answer: 0,
        explain: "Gan chứa 25-hydroxylase tạo 25-(OH)D3. Sau đó tại tế bào biểu mô ỐNG LƯỢN GẦN của thận, enzyme 1α-hydroxylase (được hoạt hóa mạnh bởi hormon cận giáp PTH khi Ca2+ máu giảm, và bởi sự giảm phosphate máu) gắn thêm nhóm -OH ở vị trí số 1 tạo thành 1,25-(OH)2D3 (Calcitriol)."
      },
      {
        q: "Một bệnh nhân mắc hội chứng tiết ADH không thích hợp (SIADH - tăng tiết ADH quá mức từ tuyến yên sau hoặc khối u) sẽ có biến đổi xét nghiệm điện giải máu nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 16",
        options: [
          "Giảm nồng độ Na+ máu (hạ Natri máu do pha loãng) và giảm áp suất thẩm thấu huyết tương",
          "Tăng nồng độ Na+ máu rất cao (> 160 mmol/L) do mất nước qua thận",
          "Nước tiểu có độ thẩm thấu rất thấp (< 50 mOsm/L) và đa niệu",
          "Tăng nồng độ Glucose máu trên 500 mg/dL"
        ],
        answer: 0,
        explain: "Trong hội chứng SIADH, ADH tiết ra quá mức làm ống góp tái hấp thu quá nhiều nước tự do trở lại tuần hoàn → nước tích tụ làm pha loãng dịch ngoại bào gây HẠ NATRI MÁU (giảm [Na+] huyết tương và giảm áp suất thẩm thấu máu), trong khi nước tiểu lại bị cô đặc và tăng thải Na+ niệu (do tăng ANP và giảm Aldosterone thứ phát)."
      },
      {
        q: "Ion nào quyết định trên 90% áp suất thẩm thấu của dịch ngoại bào và cơ quan nào đóng vai trò là 'hồ chứa đệm' lớn nhất giúp điều hòa nhanh nồng độ K+ máu ngay sau bữa ăn?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.241–247 & Đề SĐH",
        options: [
          "Na+ (cùng các anion đi kèm) quyết định áp suất thẩm thấu ngoại bào; Cơ xương là hồ chứa đệm K+ lớn nhất (nhờ Insulin và Catecholamine β2 đưa K+ vào cơ)",
          "K+ quyết định áp suất thẩm thấu ngoại bào; Mô mỡ là hồ chứa đệm K+ lớn nhất",
          "Ca2+ quyết định áp suất thẩm thấu ngoại bào; Phổi là hồ chứa đệm K+ lớn nhất",
          "Glucose quyết định 90% áp suất thẩm thấu ngoại bào ở người bình thường"
        ],
        answer: 0,
        explain: "Na+ là cation chính của dịch ngoại bào (135–145 mmol/L), cùng Cl- và HCO3- chiếm > 90% áp suất thẩm thấu huyết tương (Posm ≈ 2×[Na+]). Còn K+ là cation chính của nội bào; khối CƠ XƯƠNG chứa tới ~75% tổng lượng K+ toàn cơ thể nên đóng vai trò là hồ chứa đệm thu nhận nhanh K+ sau ăn dưới tác dụng của Insulin và β2-adrenergic."
      },
      {
        q: "Trong bệnh lý suy thận cấp thể hoại tử ống thận cấp (giai đoạn thiểu niệu / vô niệu), rối loạn điện giải nào sau đây thường xảy ra và đe dọa trực tiếp tính mạng bệnh nhân?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 17",
        options: [
          "Tăng nồng độ K+ máu (Hyperkalemia) và toan chuyển hóa",
          "Hạ nồng độ K+ máu nặng và kiềm chuyển hóa",
          "Tăng nồng độ Ca2+ máu gây ngừng tim ở kỳ tâm thu",
          "Giảm nồng độ Creatinine và Ure máu"
        ],
        answer: 0,
        explain: "Khi hoại tử ống thận cấp làm GFR giảm nặng và tế bào ống lượn xa/ống góp bị tổn thương mất khả năng bài tiết K+ và H+, cơ thể không đào thải được lượng K+ và acid cố định sinh ra hàng ngày → gây TĂNG K+ MÁU (có thể gây loạn nhịp thất và ngừng tim ở kỳ tâm trương) kèm toan chuyển hóa."
      },
      {
        q: "Hệ đệm Bicarbonate (HCO3- / H2CO3) ở dịch ngoại bào có thể đệm được tất cả các acid sau đây trong cơ thể, NGOẠI TRỪ:",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 18",
        options: [
          "Carbonic acid (H2CO3)",
          "Lactic acid",
          "Acetoacetic acid và Beta-hydroxybutyric acid (thể ceton)",
          "Sulfuric acid (H2SO4) và Phosphoric acid"
        ],
        answer: 0,
        explain: "Theo nguyên lý hóa sinh và giáo trình Sinh lý YDS (Bài 19, tr.251): Một hệ đệm KHÔNG THỂ tự đệm cho chính thành phần acid yếu của hệ đệm đó! Vì vậy hệ đệm Bicarbonate (HCO3-/H2CO3) đệm rất tốt các acid cố định không bay hơi (acid lactic, ketoacid, H2SO4, HCl), nhưng KHÔNG THỂ đệm cho chính Carbonic acid (H2CO3 do CO2 tạo ra — H2CO3 phải được đệm bởi hệ đệm Hemoglobin và Protein nội bào)."
      },
      {
        q: "Trong trường hợp nhiễm toan chuyển hóa mạn tính, cơ chế quan trọng nhất giúp thận đào thải một lượng lớn ion H+ (lên đến 500 mmol/ngày) và tạo ra các phân tử HCO3- mới trả về máu là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.255",
        options: [
          "Tăng chuyển hóa Glutamine tại ống thận để bài tiết hệ đệm Ammoni (NH4+)",
          "Tăng lọc HCO3- qua màng lọc cầu thận",
          "Giảm bài tiết hệ đệm Phosphate (H2PO4-)",
          "Ức chế hoạt động của bơm H+-ATPase ở tế bào kẽ ống góp"
        ],
        answer: 0,
        explain: "Hệ đệm Phosphate bị giới hạn bởi lượng phosphate lọc qua cầu thận (~30–40 mmol/ngày). Ngược lại, hệ đệm Ammoni (NH3/NH4+) được tổng hợp từ acid amin Glutamine tại tế bào ống lượn gần (mỗi phân tử Glutamine tạo ra 2 NH4+ thải ra nước tiểu và 2 HCO3- MỚI đưa vào máu) có thể tăng công suất gấp 10 lần lên tới 500 mmol/ngày khi nhiễm toan mạn."
      },
      {
        q: "Theo hướng dẫn KDIGO 2012 được trình bày trong Sách Sinh lý học YDS, việc phân loại các giai đoạn của Bệnh thận mạn (CKD từ G1 đến G5) dựa trên thông số chính nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024 & Sách SL 2025 Bài 18, tr.228",
        options: [
          "Độ lọc cầu thận (GFR, tính theo mL/phút/1,73 m2 da) kết hợp với mức độ Albumin niệu",
          "Nồng độ Ure máu đơn độc",
          "Lưu lượng huyết tương qua thận (ERPF) đo bằng PAH",
          "Áp suất thẩm thấu nước tiểu 24 giờ"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bảng 18.1, tr.228): Phân độ bệnh thận mạn theo KDIGO 2012 dựa trực tiếp vào Độ lọc cầu thận GFR (G1 ≥ 90; G2: 60–89; G3a: 45–59; G3b: 30–44; G4: 15–29; G5 < 15 mL/phút/1,73 m2) kết hợp với phân loại Albumin niệu (A1, A2, A3)."
      },
      {
        q: "Khi thể tích máu và thể tích dịch ngoại bào tăng làm căng thành tâm nhĩ, tế bào cơ tâm nhĩ sẽ bài tiết hormon nào để làm tăng thải Na+ và nước tại thận?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.244",
        options: [
          "ANP (Atrial Natriuretic Peptide)",
          "Aldosterone",
          "Angiotensin II",
          "ADH (Vasopressin)"
        ],
        answer: 0,
        explain: "ANP (Peptid lợi niệu natri tâm nhĩ) được tiết ra khi buồng tâm nhĩ bị căng do tăng thể tích tuần hoàn. ANP có tác dụng đối lập với hệ RAAS: làm giãn tiểu ĐM vào (tăng GFR), ức chế tái hấp thu Na+ ở ống góp, đồng thời ức chế tiết Renin, Aldosterone và ADH → tăng thải muối và nước."
      },
      {
        q: "Tế bào kẽ (Intercalated cells) ở đoạn cuối ống lượn xa và ống góp bài tiết H+ theo cơ chế nào và có thể làm giảm pH nước tiểu xuống mức tối đa là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.216",
        options: [
          "Bài tiết chủ động nguyên phát qua bơm H+-ATPase (và H+/K+-ATPase), có thể bơm H+ ngược bậc thang nồng độ gấp 900 – 1000 lần làm hạ pH nước tiểu xuống tối đa 4,5",
          "Khuếch tán thụ động theo bậc thang điện hóa làm hạ pH nước tiểu xuống 1,0",
          "Đồng vận chuyển với Glucose làm pH nước tiểu cố định ở 7,4",
          "Chỉ bài tiết H+ khi pH máu tăng trên 7,6"
        ],
        answer: 0,
        explain: "Ở ống lượn gần, H+ bài tiết theo cơ chế thứ phát (NHE Na+/H+) chỉ tăng nồng độ H+ gấp 3–4 lần (pH ~6,7). Nhưng ở tế bào kẽ của ống lượn xa và ống góp, nhờ bơm chủ động nguyên phát H+-ATPase sử dụng trực tiếp ATP, thận có thể tăng nồng độ H+ gấp 900–1000 lần, đưa pH nước tiểu xuống tới giới hạn acid tối đa là 4,5."
      },
      {
        q: "Một bệnh nhân suy thận mạn giai đoạn cuối thường có hai biến chứng nội tiết điển hình là Thiếu máu và Loãng xương / Nhuyễn xương (cường cận giáp thứ phát). Cơ chế của hai biến chứng này là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.238–239",
        options: [
          "Giảm sản xuất Erythropoietin (EPO) gây thiếu máu và giảm hoạt tính 1α-hydroxylase làm thiếu Calcitriol [1,25-(OH)2D3] gây giảm hấp thu Ca2+ ở ruột",
          "Tăng tiết Renin quá mức gây phá hủy hồng cầu và tăng đào thải Ca2+",
          "Thiếu yếu tố nội tại (IF) tại thận và giảm tiết Calcitonin từ thận",
          "Tăng tiết EPO nhưng tủy xương kháng EPO và thừa Vitamin D hoạt tính"
        ],
        answer: 0,
        explain: "Thận sản xuất 80–90% EPO của cơ thể và chứa enzyme 1α-hydroxylase ở ống lượn gần để tạo Calcitriol. Khi suy thận mạn làm mất nhu mô thận: (1) Thiếu EPO → thiếu máu đẳng sắc đẳng bào; (2) Thiếu Calcitriol + ứ phosphate máu → giảm Ca2+ máu → kích thích tuyến cận giáp tăng tiết PTH thứ phát gây hủy xương."
      }
    ]
  }
];
