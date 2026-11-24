// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 3: TIÊU HÓA, NỘI TIẾT & THẦN KINH (BÀI 11 ĐẾN BÀI 17)
// Chuẩn Giáo trình Sinh lý học Y khoa 2025 & Sách Trắc nghiệm ĐHYD TP.HCM (YDS)
// ==========================================================================

window.LESSONS_PART3 = [
  // ========================================================================
  // BÀI 11: TIÊU HOÁ Ở DẠ DÀY
  // ========================================================================
  {
    id: 11,
    group: "V. SINH LÝ TIÊU HÓA",
    title: "Bài 11: Tiêu hoá ở dạ dày",
    shortTitle: "Tiêu hoá ở dạ dày",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 22 (tr.273–283)",
    summary: "Hoạt động cơ học dạ dày (giãn tiếp nhận, sóng co thắt lưu động MMC do Motilin, điều hòa thoát thức ăn), các tế bào tuyến dạ dày, cơ chế tiết HCl tại tế bào thành (bơm H+/K+-ATPase), điều hòa bài tiết dịch vị (ACh, Gastrin, Histamine, Somatostatin) và 3 giai đoạn tiết dịch vị.",
    simId: "sim_stomach_hcl",
    simTitle: "Mô phỏng Tế bào Thành Bài tiết HCl (Bơm H+/K+-ATPase, Thụ thể M3, CCK-B, H2) & Tốc độ Thoát Thức ăn Dạ dày",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🥣 1. Hoạt động Cơ học của Dạ dày</div>
          <ul class="theory-list">
            <li><strong>1. Chức năng chứa đựng (Vùng đáy và thân dạ dày):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Giãn tiếp nhận (Receptive relaxation):</strong> Phản xạ qua <strong>dây thần kinh X</strong> (sợi ức chế tiết VIP/NO) làm cơ vùng đáy và thân vị giãn ra khi nuốt thức ăn, giúp dạ dày chứa tới <strong>1,5 Lít</strong> mà áp suất trong lòng dạ dày không tăng đáng kể.</li>
                <li><strong>Quy luật sắp xếp thức ăn (Bẫy thi!):</strong> Thức ăn xếp thành các vòng đồng tâm ở thân dạ dày: <strong>Thức ăn mới vào sau nằm ở GIỮA khối thức ăn, thức ăn vào trước nằm sát THÀNH dạ dày</strong> (nên amylase nước bọt ở giữa khối thức ăn vẫn tiếp tục tiêu hóa được tinh bột trong 30–60 phút trước khi ngấm acid HCl!).</li>
              </ul>
            </li>
            <li><strong>2. Cử động lúc đói – Phức hợp vận động di chuyển / Sóng co thắt lưu động (MMC):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Xuất hiện mỗi <strong>60 – 90 phút</strong> giữa các bữa ăn, do hormon <strong>Motilin</strong> điều hòa.</li>
                <li><em>Bẫy đề thi SĐH YDS:</em> Sóng MMC <strong>bắt đầu từ THÂN DẠ DÀY</strong> lan dọc xuống ruột non để quét sạch thức ăn thừa, dịch tiết, vi khuẩn và tế bào bong tróc (câu nói "MMC chỉ xảy ra ở ruột non" là <strong>SAI</strong>!).</li>
              </ul>
            </li>
            <li><strong>3. Nhào trộn & Đẩy thức ăn (Vùng thân và hang vị):</strong> Sóng nhu động 3–4 lần/phút xuất phát từ phần giữa thân vị đi về môn vị. Khi môn vị đóng, thức ăn bị bắn ngược trở lại (<strong>bơm môn vị và sự đẩy lùi – retropulsion</strong>) giúp nghiền nhỏ thức ăn trộn với dịch vị thành <strong>Vị trấp (Chyme)</strong>.</li>
            <li><strong>4. Điều hòa sự thoát thức ăn khỏi dạ dày:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Thúc đẩy thoát thức ăn:</strong> Độ căng thành dạ dày (kích thích dây X và đám rối tại chỗ) và hormon <strong>Gastrin</strong>. (Nước thoát nhanh nhất &gt; Carbohydrate &gt; Protein &gt; <strong>Lipid/Mỡ thoát chậm nhất!</strong>).</li>
                <li><strong>Ức chế (Làm chậm) thoát thức ăn:</strong> Thông qua <strong>Phản xạ ruột – dạ dày</strong> và các hormon tá tràng (<strong>CCK, Secretin, GIP</strong>) khi vị trấp xuống tá tràng có: (1) <strong>Nhiều Lipid / acid béo</strong> (mạnh nhất qua CCK và GIP), (2) <strong>Quá acid (pH &lt; 3,5 – 4)</strong> (qua Secretin và phản xạ dây X), (3) <strong>Ưu trương</strong> (hoặc quá nhược trương), (4) Nhiều sản phẩm tiêu hóa protein, (5) <strong>Độ căng quá mức của thành tá tràng</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧪 2. Các Tế bào Tuyến Dạ dày & Thành phần Dịch vị (~2 Lít/ngày, pH 1–2)</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Loại tế bào</th>
                  <th>Vị trí chính</th>
                  <th>Chất bài tiết</th>
                  <th>Vai trò sinh lý & Lâm sàng chuẩn YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Tế bào thành (Tế bào viền / Parietal cell)</strong></td>
                  <td>Tuyến đáy vị & thân vị</td>
                  <td><strong>HCl</strong> và <strong>Yếu tố nội tại (IF)</strong></td>
                  <td>
                    • <strong>HCl:</strong> Hoạt hóa pepsinogen → pepsin, tạo pH tối ưu cho pepsin, sát khuẩn, thủy phân cellulose thực vật.<br/>
                    • <strong>Yếu tố nội tại (IF):</strong> Glycoprotein cần để hấp thu <strong>Vitamin B₁₂ ở hồi tràng</strong> → là <strong>chức năng sống còn duy nhất của dạ dày</strong>!
                  </td>
                </tr>
                <tr>
                  <td><strong>2. Tế bào chính (Tế bào sinh men / Chief cell)</strong></td>
                  <td>Tuyến đáy vị & thân vị</td>
                  <td><strong>Pepsinogen</strong> (và Lipase dạ dày yếu)</td>
                  <td>Pepsinogen (tiền men không hoạt động) gặp <strong>HCl (pH 1,8 – 3,5)</strong> tự cắt thành <strong>Pepsin</strong> hoạt động (tiêu hóa 10–20% protein thành proteose, pepton, polypeptid; tiêu hóa được <strong>collagen</strong> của thịt; bị bất hoạt khi pH &gt; 5).</td>
                </tr>
                <tr>
                  <td><strong>3. Tế bào cổ tuyến & Tế bào bề mặt</strong></td>
                  <td>Toàn bộ niêm mạc dạ dày</td>
                  <td><strong>Chất nhầy (Mucin)</strong> & <strong>HCO₃⁻</strong></td>
                  <td>Tạo lớp gel nhầy kiềm dày ~1 mm không hòa tan bao phủ niêm mạc → <strong>Hàng rào bảo vệ niêm mạc dạ dày</strong> khỏi HCl và Pepsin (được kích thích bởi <strong>Prostaglandin E₂</strong>; bị phá hủy bởi NSAIDs, Aspirin, Corticoid, <em>H. pylori</em>, rượu).</td>
                </tr>
                <tr>
                  <td><strong>4. Tế bào G</strong></td>
                  <td>Tuyến môn vị (Hang vị)</td>
                  <td><strong>Gastrin</strong> (vào máu)</td>
                  <td>Kích thích mạnh tế bào thành tiết HCl (trực tiếp và gián tiếp qua tế bào ECL tiết Histamine) và kích thích dinh dưỡng niêm mạc.</td>
                </tr>
                <tr>
                  <td><strong>5. Tế bào ECL</strong></td>
                  <td>Đáy vị & thân vị</td>
                  <td><strong>Histamine</strong> (cận tiết)</td>
                  <td>Gắn thụ thể <strong>H₂</strong> trên tế bào thành kích thích mạnh tiết HCl.</td>
                </tr>
                <tr>
                  <td><strong>6. Tế bào D</strong></td>
                  <td>Hang vị & thân vị</td>
                  <td><strong>Somatostatin</strong></td>
                  <td>Tiết ra khi lòng dạ dày <strong>quá acid (pH &lt; 3)</strong> → <strong>ức chế tế bào G tiết Gastrin</strong> và ức chế tế bào thành tiết HCl.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚙️ 3. Cơ chế Bơm H⁺/K⁺-ATPase Tiết HCl & 3 Giai đoạn Bài tiết Dịch vị</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Cơ chế Phân tử Bài tiết HCl tại Tiểu quản Tế bào Thành</h4>
            <ul class="theory-list">
              <li>Trong bào tương tế bào thành: <code>CO₂ + H₂O --[Carbonic Anhydrase]--> H₂CO₃ → H⁺ + HCO₃⁻</code>.</li>
              <li><strong>Tại màng đỉnh (tiểu quản nội bào):</strong> Bơm chủ động nguyên phát <strong>H⁺/K⁺-ATPase (Bơm Proton)</strong> bơm <strong>H⁺ ra lòng ống</strong> (ngược bậc thang nồng độ gấp 3 triệu lần!) và đưa K⁺ vào tế bào. Ion Cl⁻ khuếch tán qua kênh Cl⁻ ra lòng ống kết hợp với H⁺ tạo <strong>HCl (nồng độ ~150–160 mmol/L, pH ≈ 0,8)</strong>.</li>
              <li><strong>Tại màng đáy bên (Hiện tượng thủy triều kiềm – Alkaline tide):</strong> Ion <strong>HCO₃⁻ được đưa vào máu tĩnh mạch dạ dày</strong> đổi lấy <strong>Cl⁻ đi vào tế bào</strong> → làm máu tĩnh mạch rời dạ dày sau bữa ăn có pH kiềm hơn máu động mạch!</li>
              <li><strong>3 Chất kích thích hiệp đồng lên Tế bào Thành:</strong>
                <br/>1. <strong>Histamine</strong> → Thụ thể <strong>H₂</strong> (tăng <strong>cAMP</strong>). (Thuốc kháng H₂ như Cimetidine/Ranitidine chặn tới 70–80% tiết HCl vì Histamine khuếch đại tác dụng của cả Gastrin và ACh!).
                <br/>2. <strong>Acetylcholine (Dây X)</strong> → Thụ thể <strong>M₃</strong> (tăng <strong>Ca²⁺</strong> nội bào).
                <br/>3. <strong>Gastrin</strong> → Thụ thể <strong>CCK<sub>B</sub></strong> (tăng <strong>Ca²⁺</strong> nội bào, đồng thời kích thích mạnh tế bào ECL tiết Histamine). Theo Sách TN YDS, <strong>Gastrin là hormon có vai trò quan trọng hơn cả trong điều hòa bài tiết HCl dạ dày</strong>.
              </li>
            </ul>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Ba Giai đoạn Bài tiết Dịch vị & Cơ chế Điều hòa Ngược</h4>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Giai đoạn</th>
                  <th>Tỉ lệ Dịch vị</th>
                  <th>Cơ chế điều hòa chính</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Giai đoạn Tâm linh (Giai đoạn Đầu / Cephalic)</strong></td>
                  <td><strong>~ 20% (400 mL)</strong></td>
                  <td>Nhìn, ngửi, nghĩ, nếm, nhai thức ăn → vỏ não/hạ đồi/hành não → <strong>Dây thần kinh X (Acetylcholine)</strong> kích thích trực tiếp tế bào thành, tế bào chính và tế bào G. (<strong>Cắt dây X ảnh hưởng mạnh nhất đến giai đoạn này!</strong>).</td>
                </tr>
                <tr>
                  <td><strong>2. Giai đoạn Dạ dày (Gastric)</strong></td>
                  <td><strong>~ 70% (1500 mL)</strong></td>
                  <td>Thức ăn làm căng dạ dày (phản xạ dây X và tại chỗ) và pepton/acid amin kích thích <strong>tế bào G tiết Gastrin</strong>.</td>
                </tr>
                <tr>
                  <td><strong>3. Giai đoạn Ruột (Intestinal)</strong></td>
                  <td><strong>~ 5 – 10% (100 mL)</strong></td>
                  <td>Đầu tiên dưỡng trấp kích thích nhẹ gastrin tá tràng; sau đó khi nhiều acid/mỡ xuống tá tràng sẽ <strong>ức chế ngược bài tiết dịch vị</strong> qua Secretin, CCK, GIP và phản xạ ruột-dạ dày.</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div class="callout trap">
              <div class="callout-title">⚠️ Hai Câu Bẫy Đề Thi SĐH YDS về Dịch Vị</div>
              <ul>
                <li><strong>Bẫy 1:</strong> Dùng thuốc kháng acid hoặc ức chế bơm proton lâu ngày giữ <strong>pH dạ dày quanh mức 7</strong> → làm mất sự ức chế ngược của H⁺ (qua Somatostatin) lên tế bào G → hậu quả là <strong>Nồng độ Gastrin trong máu TĂNG CAO</strong>!</li>
                <li><strong>Bẫy 2:</strong> Giữa các bữa ăn (khi dạ dày trống), dạ dày <strong>VẪN bài tiết một vài mL dịch vị mỗi giờ</strong> (chủ yếu là chất nhầy không acid; khi stress cảm xúc có thể tăng lên 50 mL/giờ rất giàu HCl và pepsin gây loét!).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong các sản phẩm bài tiết của niêm mạc dạ dày, thành phần nào sau đây giữ vai trò SỐNG CÒN DUY NHẤT (nếu thiếu sẽ gây thiếu máu ác tính dẫn đến tử vong nếu không được bù)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.279",
        options: [
          "Yếu tố nội tại (Intrinsic Factor - IF) do tế bào thành (tế bào viền) bài tiết, cần thiết cho sự hấp thu Vitamin B12 ở hồi tràng",
          "Acid HCl do tế bào thành bài tiết",
          "Pepsinogen do tế bào chính bài tiết",
          "Hormon Gastrin do tế bào G vùng hang vị bài tiết"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.279): Yếu tố nội tại (IF) do tế bào thành (viền) tiết ra cùng với HCl là chức năng sống còn duy nhất của dạ dày. Nếu cắt bỏ dạ dày hoặc teo tế bào thành, không có IF thì Vitamin B12 không được hấp thu ở hồi tràng, dẫn đến thiếu máu hồng cầu khổng lồ (thiếu máu ác tính Biermer)."
      },
      {
        q: "Phát biểu nào sau đây là SAI khi nói về hoạt động cơ học của dạ dày?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 20",
        options: [
          "Sóng co thắt lưu động lúc đói (MMC) chỉ xảy ra ở ruột non mà không bao giờ xảy ra ở dạ dày",
          "Khi thức ăn vào dạ dày, thức ăn vào sau sẽ nằm ở chính giữa khối thức ăn còn thức ăn vào trước nằm sát thành dạ dày",
          "Phản xạ giãn tiếp nhận ở vùng đáy và thân dạ dày được điều khiển thông qua dây thần kinh X",
          "Trung tâm điều khiển phản xạ nôn (ói) nằm ở hành não"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 22, tr.275): Sóng co thắt lưu động lúc đói (MMC - Migrating Motor Complex) do hormon Motilin điều hòa xuất hiện mỗi 60–90 phút, BẮT ĐẦU TỪ THÂN DẠ DÀY rồi mới lan dọc xuống ruột non để quét sạch thức ăn thừa và dịch tiết. Vì vậy nói MMC chỉ xảy ra ở ruột non là SAI."
      },
      {
        q: "Sự hiện diện của những yếu tố nào sau đây trong tá tràng sẽ làm CHẬM (ức chế) quá trình tống thoát thức ăn từ dạ dày xuống tá tràng?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.276",
        options: [
          "Vị trấp xuống tá tràng chứa nhiều lipid (mỡ), quá acid (pH < 3,5 – 4), ưu trương, nhiều sản phẩm tiêu hóa protein hoặc làm căng thành tá tràng",
          "Vị trấp có tính kiềm nhẹ (pH = 7,5) và hoàn toàn là nước lọc đẳng trương",
          "Sự tăng tiết hormon Gastrin từ vùng hang vị dạ dày",
          "Sự kích thích mạnh dây thần kinh X đến vùng hang - môn vị"
        ],
        answer: 0,
        explain: "Khi vị trấp xuống tá tràng có nhiều lipid, quá acid (pH < 3,5–4), ưu trương, nhiều pepton/acid amin hoặc làm căng tá tràng sẽ khởi phát Phản xạ ruột - dạ dày và kích thích tá tràng tiết CCK, Secretin, GIP làm giảm co bóp hang vị và tăng trương lực cơ thắt môn vị → làm chậm thoát thức ăn để tá tràng kịp trung hòa acid và tiêu hóa mỡ."
      },
      {
        q: "Ở một bệnh nhân sử dụng thuốc trung hòa acid (antacid) hoặc thuốc ức chế tiết acid kéo dài làm pH dịch vị trong lòng dạ dày luôn duy trì ở mức 7,0 thì nồng độ hormon nào trong máu sẽ TĂNG LÊN?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 19",
        options: [
          "Gastrin tăng (do mất cơ chế ức chế ngược của acid HCl và Somatostatin lên tế bào G)",
          "Secretin tăng mạnh",
          "Somatostatin tăng mạnh",
          "Pepsin hoạt động tăng gấp 5 lần"
        ],
        answer: 0,
        explain: "Bình thường khi pH dịch vị hạ xuống < 3,0 (và mạnh nhất khi pH < 2,0), H+ sẽ kích thích tế bào D tiết Somatostatin để ức chế tế bào G tiết Gastrin (điều hòa ngược âm tính). Khi dùng thuốc giữ pH dịch vị = 7,0, tế bào D không tiết Somatostatin nên tế bào G thoát ức chế, liên tục tăng tiết làm nồng độ Gastrin máu tăng cao."
      },
      {
        q: "Trong giai đoạn tâm linh (giai đoạn đầu - cephalic phase) của sự bài tiết dịch vị, yếu tố thần kinh hoặc thể dịch nào đóng vai trò là kích thích quan trọng nhất?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Acetylcholine giải phóng từ dây thần kinh X (phó giao cảm)",
          "Hormon Secretin từ tá tràng",
          "Hormon CCK từ hỗng tràng",
          "Sự căng cơ học trực tiếp của thành tá tràng"
        ],
        answer: 0,
        explain: "Giai đoạn tâm linh xảy ra trước khi thức ăn vào dạ dày (nhìn, ngửi, nghĩ đến thức ăn), được truyền hoàn toàn qua dây thần kinh X giải phóng Acetylcholine (và GRP kích thích tế bào G). Do đó thủ thuật cắt dây thần kinh X sẽ làm mất hoàn toàn sự bài tiết dịch vị ở giai đoạn tâm linh."
      },
      {
        q: "Tại tế bào thành (tế bào viền) của tuyến đáy vị, ion H+ được vận chuyển ra lòng tiểu quản nội bào để tạo HCl thông qua cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.278",
        options: [
          "Vận chuyển chủ động nguyên phát qua bơm H+/K+-ATPase (bơm proton) ở màng đỉnh tiểu quản",
          "Khuếch tán thụ động theo bậc thang nồng độ từ máu vào lòng dạ dày",
          "Đồng vận chuyển với Glucose qua kênh SGLT1",
          "Đối vận chuyển với ion Ca2+ ở màng đáy tế bào thành"
        ],
        answer: 0,
        explain: "Tại màng đỉnh tiểu quản nội bào của tế bào thành, bơm H+/K+-ATPase tiêu tốn trực tiếp ATP để bơm H+ ra lòng ống (ngược bậc thang nồng độ gấp 3 triệu lần) và đưa K+ vào lại tế bào. Cùng lúc đó ở màng đáy, HCO3- được đưa vào máu (gây hiện tượng thủy triều kiềm sau ăn) đổi lấy Cl- đi vào tế bào."
      },
      {
        q: "Ba chất kích thích trực tiếp lên các thụ thể trên màng tế bào thành để thúc đẩy bài tiết HCl và thụ thể tương ứng của chúng là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.280",
        options: [
          "Acetylcholine (thụ thể M3), Gastrin (thụ thể CCK-B) và Histamine (thụ thể H2)",
          "Secretin (thụ thể S), Somatostatin (thụ thể SST) và Prostaglandin E2",
          "Noradrenaline (thụ thể α1), Dopamine (thụ thể D2) và GIP",
          "Histamine (thụ thể H1), Bradykinin và Serotonin"
        ],
        answer: 0,
        explain: "Tế bào thành có 3 thụ thể kích thích tiết HCl hoạt động hiệp đồng: (1) Thụ thể H2 gắn Histamine (từ tế bào ECL, hoạt hóa Adenyl cyclase làm tăng cAMP); (2) Thụ thể M3 gắn Acetylcholine (từ dây X, làm tăng Ca2+ nội bào); và (3) Thụ thể CCK-B gắn Gastrin (từ tế bào G, làm tăng Ca2+ nội bào và kích thích tế bào ECL tiết Histamine)."
      },
      {
        q: "Đặc điểm hoạt động của enzyme tiêu hóa protein trong dịch vị là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.278",
        options: [
          "Do tế bào chính tiết ra dưới dạng tiền men Pepsinogen, được HCl hoạt hóa thành Pepsin hoạt động tối ưu ở pH 1,8 – 3,5 và có khả năng tiêu hóa được sợi collagen của thịt",
          "Do tế bào thành tiết ra ngay dưới dạng Pepsin có hoạt tính mạnh ở pH kiềm = 8,0",
          "Tiêu hóa hoàn toàn 100% protein thức ăn thành các acid amin đơn lẻ ngay tại dạ dày",
          "Được hoạt hóa bởi enzyme Enterokinase ở bờ bàn chải dạ dày"
        ],
        answer: 0,
        explain: "Tế bào chính tiết Pepsinogen; khi gặp HCl (pH < 5, tối ưu 1,8–3,5) sẽ chuyển thành Pepsin. Pepsin tiêu hóa khoảng 10–20% protein thành proteose, pepton và polypeptid. Đặc biệt Pepsin tiêu hóa được sợi collagen của mô liên kết trong thịt giúp các men tụy sau đó thấm vào tiêu hóa thịt dễ dàng."
      },
      {
        q: "Hàng rào bảo vệ niêm mạc dạ dày giúp dạ dày không bị tự tiêu hủy bởi HCl và Pepsin được cấu tạo chủ yếu từ thành phần nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.279",
        options: [
          "Lớp gel chất nhầy (mucin) không hòa tan giàu Bicarbonate (HCO3-) do các tế bào bề mặt và tế bào cổ tuyến tiết ra, cùng các liên kết chặt giữa các tế bào biểu mô",
          "Lớp sừng hóa dày 5 mm bao phủ toàn bộ lòng dạ dày",
          "Các kháng thể IgA và IgM trung hòa toàn bộ HCl trong lòng dạ dày",
          "Hormon Gastrin và Histamine bao phủ bề mặt niêm mạc"
        ],
        answer: 0,
        explain: "Hàng rào niêm mạc dạ dày gồm: (1) Lớp chất nhầy đặc quánh không hòa tan dày > 1 mm chứa nhiều ion HCO3- do tế bào bề mặt tiết ra (giữ pH sát bề mặt tế bào luôn ~7,0 dù pH lòng dạ dày là 1,5–2,0); và (2) Các vòng bịt / liên kết chặt (tight junctions) giữa các tế bào biểu mô cùng khả năng tái tạo nhanh. Prostaglandin E2 kích thích hàng rào này."
      },
      {
        q: "Phát biểu nào sau đây là SAI khi nói về sự bài tiết dịch vị của dạ dày?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tiêu hóa",
        options: [
          "Ở giai đoạn giữa các bữa ăn (khi dạ dày hoàn toàn không có thức ăn), dạ dày ngừng hoàn toàn không có sự bài tiết dịch vị nào",
          "Giai đoạn dạ dày chiếm khoảng 70% (1500 mL) tổng lượng dịch vị bài tiết trong ngày",
          "Cắt dây thần kinh X làm giảm mạnh bài tiết HCl, đặc biệt là ở giai đoạn tâm linh",
          "Khi cảm xúc căng thẳng (stress) kéo dài, sự bài tiết dịch vị giữa các bữa ăn có thể tăng cao giàu HCl và pepsin gây loét dạ dày"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 22, tr.282 – Bài tiết dịch vị giữa các bữa ăn): Giữa các bữa ăn, dạ dày VẪN bài tiết một vài mL dịch vị mỗi giờ (dịch vị cơ bản, chủ yếu gồm chất nhầy, rất ít pepsin và hầu như không có acid; nhưng khi bị stress cảm xúc lượng dịch này có thể tăng lên tới 50 mL/giờ rất giàu acid và pepsin). Do đó nói 'không có sự bài tiết dịch vị' là SAI."
      },
      {
        q: "Khi thức ăn vừa được nuốt vào dạ dày, enzyme Amylase của nước bọt vẫn có thể tiếp tục thủy phân tinh bột trong dạ dày khoảng 30 – 60 phút vì lý do nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.274",
        options: [
          "Vì thức ăn mới vào nằm ở trung tâm khối thức ăn ở vùng thân vị, chưa bị trộn lẫn ngay với dịch vị acid HCl ở sát thành dạ dày",
          "Vì enzyme Amylase nước bọt hoạt động mạnh nhất ở pH = 1,5",
          "Vì tế bào chính của dạ dày tiết thêm một lượng lớn Amylase dạ dày",
          "Vì dạ dày chỉ bắt đầu tiết HCl sau khi ăn 4 giờ"
        ],
        answer: 0,
        explain: "Amylase nước bọt (ptyalin) bị bất hoạt khi pH < 4,0. Tuy nhiên ở vùng thân dạ dày, thức ăn vào sau xếp ở chính giữa khối thức ăn còn dịch vị HCl tiết ra từ thành dạ dày ngấm từ ngoài vào trong rất chậm, nên ở trung tâm khối thức ăn pH vẫn gần trung tính giúp amylase nước bọt tiêu hóa được tới 30–40% tinh bột."
      },
      {
        q: "Trung tâm điều khiển phản xạ nôn (ói) nằm ở cấu trúc thần kinh nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.276",
        options: [
          "Hành não (phối hợp với vùng kích thích hóa thụ quan CTZ ở sàn não thất IV)",
          "Vùng dưới đồi trước",
          "Tủy sống đoạn ngực T5 – T10",
          "Đám rối thần kinh Meissner ở thành dạ dày"
        ],
        answer: 0,
        explain: "Trung tâm ói nằm ở HÀNH NÃO, nhận xung hướng tâm từ ống tiêu hóa (qua dây X và giao cảm), từ tiền đình hoặc từ vùng phát động hóa thụ quan (CTZ) ở sàn não thất IV, rồi phát xung ly tâm làm đóng thanh môn, co mạnh cơ hoành và cơ thành bụng đồng thời giãn cơ thắt tâm vị để tống thức ăn ra ngoài."
      }
    ]
  },

  // ========================================================================
  // BÀI 12: TIÊU HOÁ Ở RUỘT NON
  // ========================================================================
  {
    id: 12,
    group: "V. SINH LÝ TIÊU HÓA",
    title: "Bài 12: Tiêu hoá ở ruột non",
    shortTitle: "Tiêu hoá ở ruột non",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 23 (tr.284–302)",
    summary: "Cấu trúc diện tích 250 m2 (tăng 600 lần), cử động phân đoạn & nhu động, bài tiết dịch tụy (Secretin -> NaHCO3; CCK -> Enzyme; Enterokinase hoạt hóa Trypsinogen), dịch mật (Muối mật từ Cholesterol, Micelle, Bilirubin, tuần hoàn ruột-gan), cơ chế tiêu hóa và hấp thu Carbohydrate (SGLT1, GLUT5, GLUT2), Protein, Lipid (Chylomicron vào bạch huyết), Nước & Vitamin.",
    simId: "sim_small_intestine",
    simTitle: "Mô phỏng Tiêu hóa & Hấp thu tại Ruột non (Dịch Tụy - Mật, Kênh SGLT1 / GLUT5 / GLUT2 & Hạt Micelle - Chylomicron)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🧬 1. Cấu trúc Bờ bàn chải & Cử động Cơ học Ruột non</div>
          <ul class="theory-list">
            <li><strong>Cấu trúc tối ưu hóa diện tích hấp thu lên 600 lần (đạt ~250 m²):</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li><strong>Van ngang (Nếp gấp Kerckring):</strong> Tăng diện tích <strong>3 lần</strong>.</li>
                <li><strong>Nhung mao (Villi):</strong> Tăng diện tích thêm <strong>10 lần</strong> (bên trong mỗi nhung mao có mạng mao mạch máu và <strong>mạch bạch huyết trung tâm / ống dưỡng chấp</strong>).</li>
                <li><strong>Vi nhung mao (Microvilli – tạo Bờ bàn chải):</strong> Mỗi tế bào có ~1000 vi nhung mao, làm tăng diện tích thêm <strong>20 lần</strong> (<code>3 × 10 × 20 = 600 lần</code>). Bờ bàn chải chứa các enzyme tiêu hóa cuối cùng (<strong>Enterokinase, Maltase, Sucrase, Lactase, α-dextrinase, Aminopeptidase, Dipeptidase</strong>).</li>
              </ol>
            </li>
            <li><strong>Hai dạng cử động cơ học của ruột non:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>1. Co bóp phân đoạn (Segmentation):</strong> Cử động nhào trộn dưỡng trấp với dịch tiêu hóa (tần số tối đa <strong>12 lần/phút ở tá tràng – hỗng tràng</strong> và <strong>8 – 9 lần/phút ở hồi tràng</strong>).</li>
                <li><strong>2. Sóng nhu động (Peristalsis):</strong> Đẩy dưỡng trấp về phía van hồi-manh tràng với vận tốc <strong>0,5 – 2 cm/giây (trung bình 1 cm/phút)</strong>, mất 3–5 giờ để đi từ môn vị đến van hồi-manh tràng. Theo quy luật ruột (Bayliss-Starling): <strong>cơ vòng co ở phía sau (phía miệng) và giãn ở phía trước (phía hậu môn)</strong> của viên thức ăn.</li>
                <li><strong>Điều hòa nhu động ruột non (Hay thi!):</strong>
                  <br/>• <em>Làm TĂNG nhu động:</em> Phản xạ dạ dày - ruột, Phó giao cảm (Dây X), <strong>Gastrin, CCK, Motilin, Insulin, Serotonin</strong>.
                  <br/>• <em>Làm GIẢM (Ức chế) nhu động:</em> Giao cảm, <strong>Secretin và Glucagon</strong>!
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧪 2. Dịch Tụy Ngoại tiết (1200–1500 mL/ngày, pH ~8) & Dịch Mật</div>
          <h4 style="color:var(--primary);margin-bottom:6px;">A. Dịch Tụy Ngoại tiết (Tế bào Ống dẫn vs Tế bào Nang tụy)</h4>
          <ul class="theory-list">
            <li><strong>1. Thành phần Nước & Bicarbonate (NaHCO₃):</strong> Do <strong>tế bào biểu mô ống dẫn</strong> tiết ra dưới sự kích thích chính của hormon <strong>Secretin</strong> (do tế bào S tá tràng tiết khi vị trấp acid có <strong>pH &lt; 4,5</strong> xuống tá tràng) → giúp trung hòa HCl dạ dày, tạo pH trung tính/kiềm nhẹ (7–8) cho enzyme tụy hoạt động.</li>
            <li><strong>2. Thành phần Enzyme tiêu hóa:</strong> Do <strong>tế bào nang tụy (Acinar cells)</strong> tiết ra dưới sự kích thích chính của <strong>CCK (Cholecystokinin)</strong> (do tế bào I tá tràng tiết khi có acid béo, monoglyceride, pepton/acid amin) và <strong>Acetylcholine (dây X)</strong>:
              <ul style="padding-left:18px;margin-top:4px;">
                <li><em>Tiêu hóa Protein (tiết dưới dạng tiền men để không tự tiêu hủy tụy!):</em> <strong>Trypsinogen, Chymotrypsinogen, Procarboxypolypeptidase</strong>. Khi xuống ruột non, enzyme <strong>Enterokinase</strong> ở bờ bàn chải chuyển <strong>Trypsinogen → Trypsin</strong>; sau đó chính <strong>Trypsin</strong> hoạt hóa tất cả các tiền men còn lại! (Tụy có chất <em>Trypsin inhibitor</em> bảo vệ tụy; lưu ý: <strong>Dịch tụy KHÔNG có Pepsin!</strong>).</li>
                <li><em>Tiêu hóa Carbohydrate:</em> <strong>α-Amylase tụy</strong> (tiết ngay dạng hoạt động, cắt tinh bột sống & chín thành maltose, maltotriose, α-dextrin).</li>
                <li><em>Tiêu hóa Lipid:</em> <strong>Lipase tụy</strong> (quan trọng nhất, cắt Triglyceride thành <strong>2-monoglyceride + 2 acid béo tự do</strong>, cần Colipase và muối mật), <strong>Cholesterol esterase</strong>, <strong>Phospholipase A₂</strong>.</li>
              </ul>
            </li>
          </ul>
          <h4 style="color:var(--primary);margin:10px 0 6px;">B. Dịch Mật (600 – 1000 mL/ngày) & Tuần hoàn Ruột - Gan</h4>
          <ul class="theory-list">
            <li><strong>1. Muối mật (Thành phần duy nhất có tác dụng tiêu hóa của mật!):</strong> Tổng hợp tại tế bào gan từ tiền chất <strong>CHOLESTEROL</strong> → tạo acid mật nguyên phát (<strong>acid cholic, acid chenodeoxycholic</strong>), dưới tác dụng vi khuẩn ruột tạo acid mật thứ phát (<strong>deoxycholic, lithocholic</strong>), liên hợp với Glycine/Taurine tạo muối mật Na/K. (<em>Bẫy đề thi SĐH:</em> Muối mật tổng hợp từ <strong>Cholesterol chứ KHÔNG phải từ Hemoglobin</strong>; và <strong>Acid uric KHÔNG phải là acid mật</strong>!).
              <br/>• <em>2 Chức năng của muối mật:</em> (1) <strong>Nhũ tương hóa lipid</strong> (làm giảm sức căng bề mặt, phá vỡ cầu mỡ lớn thành hạt nhỏ để Lipase tụy tiếp cận); (2) Tạo <strong>Hạt Micelle</strong> (cấu trúc lưỡng cực hòa tan nước ở ngoài, nhân lipid ở trong) vận chuyển acid béo, 2-monoglyceride, cholesterol và <strong>các vitamin tan trong dầu (A, D, E, K)</strong> đến bờ bàn chải để hấp thu.
              <br/>• <strong>Tuần hoàn ruột – gan:</strong> <strong>94% muối mật được tái hấp thu chủ động ở HỒI TRÀNG</strong> qua tĩnh mạch cửa về gan tái sử dụng ~18 lần!
            </li>
            <li><strong>2. Sắc tố mật (Bilirubin):</strong> Sản phẩm thoái giáng của nhân <strong>Heme (Hemoglobin)</strong>, không có tác dụng tiêu hóa. Khi tắc mật làm <strong>tăng Bilirubin liên hợp trong máu gây vàng da</strong>, nước tiểu sẫm màu và phân bạc màu. (Dịch mật <strong>KHÔNG chứa enzyme tiêu hóa</strong>!).</li>
            <li><strong>Co bóp túi mật & giãn cơ vòng Oddi:</strong> Kích thích mạnh nhất bởi hormon <strong>CCK (Cholecystokinin)</strong> (và một phần dây X).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🚀 3. Cơ chế Hấp thu Các Chất Dinh dưỡng, Nước, Khoáng chất & Vitamin tại Ruột non</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Nhóm chất</th>
                <th>Dạng hấp thu cuối cùng</th>
                <th>Cơ chế qua Màng Đỉnh (Bờ bàn chải)</th>
                <th>Cơ chế qua Màng Đáy bên & Đường về</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Carbohydrate</strong><br/><em>(100% dạng Monosaccharide)</em></td>
                <td>
                  • <strong>Glucose (80%) & Galactose</strong><br/>
                  • <strong>Fructose</strong>
                </td>
                <td>
                  • <strong>Glucose & Galactose:</strong> <strong>Đồng vận chuyển chủ động thứ phát với Na⁺ qua kênh SGLT1</strong> (bắt buộc phải có Na⁺!).<br/>
                  • <strong>Fructose:</strong> <strong>Khuếch tán được hỗ trợ qua kênh GLUT5</strong> (<em>KHÔNG phụ thuộc Na⁺!</em> – câu hỏi đề thi SĐH!).
                </td>
                <td>Cả Glucose, Galactose và Fructose đều đi qua màng đáy bên bằng <strong>khuếch tán hỗ trợ qua kênh GLUT2</strong> → vào <strong>Máu tĩnh mạch cửa về Gan</strong>.</td>
              </tr>
              <tr>
                <td><strong>2. Protein</strong></td>
                <td>Dipeptid, Tripeptid và Acid amin tự do</td>
                <td><strong>Đồng vận chuyển chủ động thứ phát với H⁺ (PepT1) hoặc với Na⁺</strong>. Trong bào tương, peptidase cắt hết thành acid amin đơn.</td>
                <td>Khuếch tán hỗ trợ qua màng đáy dưới dạng <strong>Acid amin</strong> → vào <strong>Máu tĩnh mạch cửa về Gan</strong>.</td>
              </tr>
              <tr>
                <td><strong>3. Lipid (Mỡ)</strong></td>
                <td>Acid béo tự do, 2-Monoglyceride, Cholesterol, Lysolecithin</td>
                <td>Hạt <strong>Micelle</strong> (của muối mật) làm "xe chuyên chở" đưa đến sát bờ bàn chải → <strong>Khuếch tán đơn giản qua lớp lipid màng đỉnh</strong> vào tế bào (muối mật ở lại lòng ruột).</td>
                <td>
                  • Trong <strong>lưới nội bào trơn</strong>: Tái tổng hợp thành <strong>Triglyceride</strong> và Cholesterol ester → đóng gói cùng Phospholipid và <strong>Apoprotein B48</strong> thành hạt <strong>CHYLOMICRON</strong>.<br/>
                  • Xuất bào vào <strong>MẠCH BẠCH HUYẾT (Ống dưỡng chấp trung tâm → Ống ngực → Tĩnh mạch dưới đòn)</strong>! (Riêng acid béo chuỗi ngắn/trung bình &lt; 10–12C đi thẳng vào máu tĩnh mạch cửa).
                </td>
              </tr>
              <tr>
                <td><strong>4. Nước & Điện giải, Vitamin</strong></td>
                <td>
                  • Nước: 9 Lít/ngày vào ruột (2L ăn uống + 7L dịch tiết).<br/>
                  • Ruột non hấp thu <strong>7 – 7,5 Lít</strong>; Đại tràng hấp thu 1,4 – 1,9 Lít (chỉ thải <strong>100 mL qua phân</strong>).
                </td>
                <td colspan="2">
                  • <strong>Nước:</strong> Hấp thu hoàn toàn <strong>thụ động theo bậc thang thẩm thấu (Iso-osmotic)</strong> đi theo sự hấp thu chủ động của Na⁺, Glucose và Acid amin (cơ sở sinh lý của dung dịch <strong>Oresol: NaCl + Glucose</strong>!).<br/>
                  • <strong>Sắt (Fe²⁺) và Canxi (Ca²⁺ - cần Calcitriol):</strong> Hấp thu chủ yếu ở <strong>Tá tràng và đầu Hỗng tràng</strong>.<br/>
                  • <strong>Vitamin tan trong dầu (A, D, E, K):</strong> Bắt buộc phải có <strong>Muối mật (hạt Micelle)</strong>.<br/>
                  • <strong>Vitamin B₁₂ (+ Yếu tố nội tại IF) và Muối mật:</strong> Hấp thu đặc hiệu ở <strong>HỒI TRÀNG</strong>.<br/>
                  • <strong>Vitamin C:</strong> Hấp thu ở <strong>Hồi tràng</strong> theo cơ chế <strong>đồng vận chuyển chủ động thứ phát với Na⁺</strong>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Cấu trúc niêm mạc ruột non với các nếp gấp (van ngang), nhung mao và vi nhung mao (bờ bàn chải) giúp làm tăng tổng diện tích bề mặt hấp thu của ruột non lên bao nhiêu lần?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.284",
        options: [
          "Tăng khoảng 600 lần (đạt diện tích khoảng 250 m2)",
          "Tăng khoảng 30 lần (đạt diện tích khoảng 15 m2)",
          "Tăng khoảng 100 lần (đạt diện tích khoảng 50 m2)",
          "Tăng khoảng 10 lần"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.284): Các nếp gấp (van ngang Kerckring) làm tăng diện tích lên 3 lần; các nhung mao (villi) làm tăng thêm 10 lần; và các vi nhung mao (microvilli bờ bàn chải) làm tăng thêm 20 lần. Tổng cộng diện tích bề mặt hấp thu tăng 3 × 10 × 20 = 600 lần (đạt ~250 m2, tương đương một sân quần vợt)."
      },
      {
        q: "Những hormon nào sau đây có tác dụng ỨC CHẾ (làm giảm) nhu động của ruột non?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.286 & Đề SĐH",
        options: [
          "Secretin và Glucagon (cùng với sự kích thích thần kinh giao cảm)",
          "Gastrin, CCK (Cholecystokinin) và Motilin",
          "Insulin và Serotonin",
          "Acetylcholine giải phóng từ dây thần kinh X"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.286): Nhu động ruột non TĂNG lên dưới tác dụng của Gastrin, CCK, Insulin, Motilin, Serotonin và thần kinh phó giao cảm; ngược lại nhu động ruột non bị ỨC CHẾ (giảm) bởi Secretin, Glucagon và thần kinh giao cảm."
      },
      {
        q: "Khi dưỡng trấp acid (pH < 4,5) từ dạ dày xuống tá tràng sẽ kích thích tế bào S của niêm mạc tá tràng bài tiết hormon nào và tạo ra dịch tụy có đặc điểm gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.289",
        options: [
          "Tiết Secretin, kích thích tế bào ống dẫn của tuyến tụy tiết nhiều nước và Bicarbonate (NaHCO3) để trung hòa acid",
          "Tiết CCK, kích thích tế bào nang tụy tiết thật nhiều enzyme tiêu hóa nhưng ít Bicarbonate",
          "Tiết Gastrin, kích thích tụy tiết acid HCl",
          "Tiết Somatostatin làm co thắt hoàn toàn ống tụy chính"
        ],
        answer: 0,
        explain: "Acid HCl (pH < 4,5) tại tá tràng là kích thích đặc hiệu mạnh nhất làm tế bào S tiết Secretin vào máu. Secretin đến kích thích tế bào biểu mô ỐNG DẪN của tuyến tụy bài tiết một lượng lớn dịch tụy loãng rất giàu NaHCO3 (nồng độ HCO3- lên tới 145 mEq/L, pH ~8,0) để trung hòa acid HCl."
      },
      {
        q: "Tiền men Trypsinogen trong dịch tụy khi đổ vào lòng tá tràng sẽ được hoạt hóa thành Trypsin nhờ enzyme nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.288",
        options: [
          "Enzyme Enterokinase (Enteropeptidase) nằm ở bờ bàn chải của tế bào biểu mô niêm mạc ruột non (sau đó chính Trypsin tiếp tục tự hoạt hóa và hoạt hóa các tiền men tụy khác)",
          "Acid HCl của dịch vị dạ dày",
          "Muối mật trong dịch mật",
          "Enzyme Amylase của nước bọt"
        ],
        answer: 0,
        explain: "Các men tiêu hóa đạm của tụy (Trypsinogen, Chymotrypsinogen, Procarboxypolypeptidase) được tiết dưới dạng tiền men chưa hoạt động. Khi tiếp xúc với bờ bàn chải ruột non, enzyme Enterokinase sẽ cắt Trypsinogen thành Trypsin hoạt động; rồi Trypsin hoạt hóa dây chuyền toàn bộ các tiền men còn lại."
      },
      {
        q: "Trong dịch tụy ngoại tiết của người bình thường KHÔNG chứa enzyme nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 23",
        options: [
          "Pepsin",
          "Trypsin (dưới dạng Trypsinogen) và Chymotrypsin",
          "Amylase tụy",
          "Lipase tụy, Cholesterol esterase và Phospholipase A2"
        ],
        answer: 0,
        explain: "Pepsin (tiết dưới dạng Pepsinogen) là enzyme đặc hiệu của tế bào chính ở DẠ DÀY (hoạt động ở môi trường acid pH 1,8–3,5 và bị bất hoạt ở môi trường kiềm của tá tràng). Dịch tụy chứa các protease là Trypsin, Chymotrypsin, Carboxypolypeptidase, Elastase chứ KHÔNG có Pepsin."
      },
      {
        q: "Phát biểu nào sau đây là SAI khi nói về dịch mật và muối mật?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 21 & 24",
        options: [
          "Muối mật được tổng hợp từ sự thoái giáng của Hemoglobin, và Acid uric là một trong các acid mật chính trong dịch mật",
          "Muối mật được tế bào gan tổng hợp từ tiền chất Cholesterol, có vai trò nhũ tương hóa lipid và tạo hạt Micelle giúp hấp thu lipid cùng các vitamin tan trong dầu (A, D, E, K)",
          "Khoảng 94% muối mật được tái hấp thu ở hồi tràng theo tĩnh mạch cửa trở về gan (tuần hoàn ruột - gan)",
          "Khi tắc đường dẫn mật, sự ứ đọng sắc tố mật (Bilirubin) trong máu là nguyên nhân gây vàng da"
        ],
        answer: 0,
        explain: "Hai bẫy rất hay ra trong đề thi SĐH YDS: (1) Muối mật được gan tổng hợp từ CHOLESTEROL (gồm acid mật nguyên phát: acid cholic, acid chenodeoxycholic và thứ phát: deoxycholic, lithocholic), còn Bilirubin (sắc tố mật) mới là chất tạo từ Hemoglobin! (2) Acid uric là sản phẩm thoái giáng của nhân Purine chứ KHÔNG phải là acid mật!"
      },
      {
        q: "Hormon nào đóng vai trò quan trọng nhất gây co bóp túi mật đồng thời làm giãn cơ vòng Oddi để tống mật xuống tá tràng sau bữa ăn có nhiều mỡ và đạm?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.292",
        options: [
          "Cholecystokinin (CCK)",
          "Secretin",
          "Gastrin",
          "Motilin"
        ],
        answer: 0,
        explain: "Tên gọi Cholecystokinin (CCK = chất làm chuyển động túi mật) phản ánh đúng chức năng chính của nó: khi có sản phẩm tiêu hóa mỡ (acid béo, monoglyceride) và đạm xuống tá tràng, tế bào I tiết CCK làm co bóp mạnh cơ trơn túi mật và giãn cơ vòng Oddi để đẩy mật vào tá tràng, đồng thời kích thích nang tụy tiết enzyme."
      },
      {
        q: "Sự hấp thu của đường Fructose qua màng bờ bàn chải (màng đỉnh) của tế bào biểu mô ruột non khác với sự hấp thu của Glucose và Galactose ở điểm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.296 & Đề SĐH",
        options: [
          "Fructose được hấp thu bằng cơ chế khuếch tán được hỗ trợ qua kênh GLUT5 (KHÔNG phụ thuộc Na+), còn Glucose và Galactose hấp thu bằng đồng vận chuyển chủ động thứ phát với Na+ qua kênh SGLT1",
          "Fructose phải được đồng vận chuyển với Na+ qua kênh SGLT1 còn Glucose khuếch tán đơn giản",
          "Fructose không thể đi qua màng đáy bên qua kênh GLUT2",
          "Fructose được hấp thu trực tiếp vào mạch bạch huyết dưới dạng Chylomicron"
        ],
        answer: 0,
        explain: "Tại màng đỉnh (bờ bàn chải) tế bào ruột non: Glucose và Galactose bắt buộc phải đồng vận chuyển tích cực thứ phát với Na+ qua protein SGLT1; trong khi đó Fructose đi vào tế bào bằng cơ chế khuếch tán được hỗ trợ (facilitated diffusion) qua kênh GLUT5 hoàn toàn KHÔNG phụ thuộc Na+. Sau đó cả 3 loại đường đều qua màng đáy vào máu nhờ kênh GLUT2."
      },
      {
        q: "Sau khi acid béo tự do và 2-monoglyceride khuếch tán từ hạt Micelle qua màng bờ bàn chải vào trong tế bào biểu mô ruột non, chúng sẽ được xử lý và vận chuyển đi theo con đường nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.298",
        options: [
          "Tái tổng hợp thành Triglyceride tại lưới nội bào trơn, đóng gói cùng cholesterol, phospholipid và apoprotein B48 thành hạt Chylomicron rồi xuất bào vào mạch bạch huyết (ống dưỡng chấp)",
          "Giữ nguyên dưới dạng hạt Micelle đi thẳng vào máu tĩnh mạch cửa về gan",
          "Được đồng vận chuyển với ion Na+ qua kênh GLUT2 vào mao mạch máu",
          "Bị phân giải hoàn toàn thành CO2 và H2O ngay trong tế bào biểu mô ruột"
        ],
        answer: 0,
        explain: "Khác với đường và đạm đi vào máu tĩnh mạch cửa, hầu hết lipid (các acid béo chuỗi dài > 12C và monoglyceride) sau khi vào tế bào biểu mô ruột sẽ được lưới nội bào trơn tái tổng hợp thành Triglyceride, kết hợp với apoprotein B48 tạo thành hạt Chylomicron (nhũ chấp) đi vào MẠCH BẠCH HUYẾT trung tâm của nhung mao rồi đổ vào ống ngực."
      },
      {
        q: "Tại ống tiêu hóa, sự hấp thu nước (khoảng 7 – 8,9 Lít/ngày) diễn ra theo cơ chế sinh lý nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.299",
        options: [
          "Khuếch tán hoàn toàn thụ động theo bậc thang áp suất thẩm thấu (phụ thuộc vào sự hấp thu chủ động của các chất điện giải Na+, Cl- và chất dinh dưỡng Glucose, Acid amin)",
          "Vận chuyển chủ động nguyên phát tiêu tốn trực tiếp ATP qua bơm nước ở bờ bàn chải",
          "Ẩm bào tại đoạn cuối của đại tràng sigma",
          "Chỉ được hấp thu tại dạ dày dưới tác dụng của hormon Gastrin"
        ],
        answer: 0,
        explain: "Nước được vận chuyển qua niêm mạc ruột hoàn toàn theo cơ chế khuếch tán thẩm thấu thụ động: khi Na+, Cl-, Glucose, Acid amin được hấp thu chủ động từ lòng ruột vào khoảng kẽ cạnh tế bào sẽ tạo ra khuynh độ áp suất thẩm thấu kéo nước đi theo ngay lập tức qua các liên kết chặt và màng tế bào."
      },
      {
        q: "Vitamin C và phức hợp Vitamin B12 - Yếu tố nội tại (IF) được hấp thu chủ yếu tại đoạn nào của ống tiêu hóa?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.301 & Đề SĐH 2024",
        options: [
          "Hồi tràng (đoạn cuối của ruột non; trong đó Vitamin C hấp thu theo cơ chế đồng vận chuyển chủ động thứ phát với Na+)",
          "Dạ dày và hành tá tràng",
          "Đại tràng ngang và trực tràng",
          "Thực quản"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.301): Hầu hết các vitamin, sắt (Fe2+) và canxi (Ca2+) được hấp thu ở đoạn đầu ruột non (tá tràng và hỗng tràng), NGOẠI TRỪ Vitamin B12 (gắn yếu tố nội tại IF) và Vitamin C (đồng vận chuyển với Na+) được hấp thu đặc hiệu tại HỒI TRÀNG!"
      },
      {
        q: "Ở bệnh nhân bị cắt bỏ đoạn cuối hồi tràng hoặc viêm tắc mật hoàn toàn, sự thiếu hụt vitamin nào sau đây dễ xảy ra nhất gây rối loạn đông máu (kéo dài thời gian Quick - TQ)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.293 & 301",
        options: [
          "Thiếu Vitamin K (và các vitamin tan trong dầu A, D, E) do thiếu muối mật tạo hạt Micelle để hấp thu lipid",
          "Thiếu Vitamin B1 và Vitamin B6",
          "Thiếu Vitamin C gây tăng tổng hợp yếu tố VIII",
          "Thiếu Acid folic do không có men amylase tụy"
        ],
        answer: 0,
        explain: "Các vitamin tan trong dầu (A, D, E, K) bắt buộc phải nằm trong hạt Micelle của muối mật mới được vận chuyển tới bờ bàn chải ruột non để hấp thu. Khi tắc mật hoặc cắt hồi tràng (mất tuần hoàn ruột - gan của muối mật), cơ thể không hấp thu được Vitamin K → gan giảm tổng hợp các yếu tố đông máu II, VII, IX, X → chảy máu kéo dài."
      }
    ]
  },

  // ========================================================================
  // BÀI 13: KHÁI QUÁT VỀ HOẠT ĐỘNG CỦA HỆ NỘI TIẾT
  // ========================================================================
  {
    id: 13,
    group: "VI. SINH LÝ NỘI TIẾT",
    title: "Bài 13: Khái quát về hoạt động của hệ nội tiết",
    shortTitle: "Khái quát Hệ nội tiết",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 26 (tr.333–346) & Bài 27 (tr.347–367)",
    summary: "Phân loại hormon theo bản chất hóa học & tính tan (Hormon tan trong nước: Peptid, Catecholamine -> Thụ thể màng GPCR/cAMP, IP3-DAG, Tyrosine kinase vs Hormon tan trong lipid: Steroid từ Cholesterol, Hormon giáp T3/T4 -> Thụ thể nội bào/nhân), cơ chế điều hòa ngược âm/dương và Trục Hạ đồi - Tuyến yên trước/sau.",
    simId: "sim_endocrine_axis",
    simTitle: "Mô phỏng Cơ chế Thụ thể Hormon (Màng tế bào cAMP/IP3/Tyrosine kinase vs Nội bào) & Trục Hạ đồi - Tuyến yên",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🧬 1. Phân loại Hormon theo Bản chất Hóa học, Tính tan & Cơ chế Thụ thể</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tiêu chí so sánh</th>
                <th>1. Nhóm Hormon TAN TRONG NƯỚC (Ưa nước)</th>
                <th>2. Nhóm Hormon TAN TRONG LIPID (Ưa mỡ)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Các hormon đại diện</strong></td>
                <td>
                  • <strong>Hormon Peptid / Protein (chiếm đa số):</strong> Tất cả hormon vùng hạ đồi (TRH, CRH, GnRH, GHRH, Somatostatin), tuyến yên trước & sau (TSH, ACTH, GH, FSH, LH, Prolactin, ADH, Oxytocin), tuyến tụy (<strong>Insulin, Glucagon</strong>), tuyến cận giáp (<strong>PTH</strong>), Calcitonin, ANP, EPO.<br/>
                  • <strong>Hormon dẫn xuất Tyrosine thuộc Tủy thượng thận (Catecholamine):</strong> <strong>Epinephrine (Adrenaline), Norepinephrine, Dopamine</strong>.
                </td>
                <td>
                  • <strong>Hormon Steroid (Tổng hợp từ CHOLESTEROL lấy từ LDL huyết tương):</strong><br/>
                  &nbsp;&nbsp;– Vỏ thượng thận: Lớp cầu (<strong>Aldosterone</strong>), Lớp bó (<strong>Cortisol</strong> – hormon sinh mạng chống stress), Lớp lưới (<strong>Androgen / DHEA</strong>).<br/>
                  &nbsp;&nbsp;– Tuyến sinh dục & nhau thai: <strong>Testosterone, Estrogen, Progesterone</strong>.<br/>
                  &nbsp;&nbsp;– Thận: <strong>Calcitriol [1,25-(OH)₂D₃]</strong>.<br/>
                  • <strong>Hormon dẫn xuất Tyrosine thuộc Tuyến giáp:</strong> <strong>T₃ và T₄ (Thyroxine)</strong> (<em>Bẫy thi:</em> Tuy là dẫn xuất acid amin Tyrosine nhưng T₃, T₄ lại <strong>tan trong lipid</strong>!).
                </td>
              </tr>
              <tr>
                <td><strong>Tổng hợp & Dự trữ</strong></td>
                <td>Tổng hợp trước (Preprohormon → Prohormon → Hormon) và <strong>dự trữ sẵn trong các túi tiết (hạt bài tiết)</strong>; xuất bào ngay khi có tín hiệu Ca²⁺.</td>
                <td>Steroid <strong>KHÔNG dự trữ trong túi tiết</strong> (tổng hợp ngay từ cholesterol khi có kích thích rồi khuếch tán qua màng ra máu). Riêng T₃, T₄ dự trữ ngoại bào trong chất keo Thyroglobulin lòng nang giáp.</td>
              </tr>
              <tr>
                <td><strong>Vận chuyển trong máu & Thời gian bán hủy (t<sub>1/2</sub>)</strong></td>
                <td>Lưu hành chủ yếu ở <strong>dạng tự do</strong>. Thời gian bán hủy <strong>ngắn (vài phút)</strong>.</td>
                <td>Gắn kết chặt với <strong>Protein vận chuyển huyết tương (&gt; 90–99%)</strong> (CBG, TBG, SHBG, Albumin). Chỉ dạng tự do mới có hoạt tính sinh học! Thời gian bán hủy <strong>dài (hàng giờ đến nhiều ngày)</strong>.</td>
              </tr>
              <tr>
                <td><strong>Vị trí Thụ thể tại Mô đích</strong></td>
                <td>Không qua được lớp lipid kép nên gắn vào <strong>THỤ THỂ MÀNG TẾ BÀO</strong>.</td>
                <td>Khuếch tán qua màng tế bào gắn vào <strong>THỤ THỂ NỘI BÀO</strong>:<br/>
                • <strong>Trong Tế bào chất (Bào tương):</strong> Glucocorticoid (Cortisol), Mineralocorticoid (Aldosterone), Androgen, Progesterone.<br/>
                • <strong>Ngay trong Nhân tế bào (trên nhiễm sắc chất):</strong> <strong>Hormon giáp (T₃, T₄)</strong> và Estrogen.</td>
              </tr>
              <tr>
                <td><strong>Cơ chế tác động phân tử</strong></td>
                <td>Hoạt hóa <strong>Chất truyền tin thứ hai</strong> hoặc phosphoryl hóa protein có sẵn → <strong>Tác động NHANH (giây – phút), ngắn hạn</strong>.</td>
                <td>Phức hợp <em>Hormon – Thụ thể</em> gắn vào vùng HRE trên <strong>DNA</strong> → điều hòa <strong>phiên mã gen (tạo mRNA) và dịch mã tổng hợp Protein/Enzyme mới</strong> → <strong>Tác động CHẬM (sau 45 phút đến nhiều giờ/ngày) nhưng KÉO DÀI</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">⚡ 2. Ba Hệ thống Thụ thể Màng & Chất Truyền tin Thứ hai</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Đối với các hormon tan trong nước gắn trên màng tế bào, cần nắm vững 3 con đường truyền tín hiệu rất hay hỏi trong đề thi SĐH:</p>
          <ul class="theory-list">
            <li><strong>1. Thụ thể liên kết Protein G (GPCR – 7 đoạn xuyên màng) → Hệ thống Adenyl Cyclase – cAMP:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Hormon gắn thụ thể → Protein G<sub>s</sub> (hoặc G<sub>i</sub> ức chế) → Hoạt hóa enzyme màng <strong>Adenyl cyclase</strong> chuyển <code>ATP → cAMP</code> (chất truyền tin thứ hai) → Hoạt hóa <strong>Protein Kinase A (PKA)</strong> phosphoryl hóa các protein đích. (Bị phân hủy bởi phosphodiesterase PDE).</li>
                <li><em>Các hormon dùng cAMP:</em> <strong>TSH, ACTH, LH, FSH, CRH, GHRH, ADH (thụ thể V₂ ở ống thận), PTH, Calcitonin, Glucagon, Catecholamine (thụ thể β₁, β₂), Histamine (H₂), Secretin</strong>.</li>
              </ul>
            </li>
            <li><strong>2. Thụ thể liên kết Protein G (G<sub>q</sub>) → Hệ thống Phospholipase C (PLC) – IP₃ / DAG – Ca²⁺-Calmodulin:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Hoạt hóa enzyme <strong>Phospholipase C</strong> cắt <code>PIP₂</code> màng thành 2 chất truyền tin thứ hai: (a) <strong>IP₃ (Inositol triphosphate)</strong> làm mở kênh giải phóng <strong>Ca²⁺</strong> từ lưới nội bào (Ca²⁺ gắn với <strong>Calmodulin</strong>); và (b) <strong>DAG (Diacylglycerol)</strong> hoạt hóa <strong>Protein Kinase C (PKC)</strong>.</li>
                <li><em>Các hormon dùng IP₃/DAG/Ca²⁺:</em> <strong>TRH, GnRH, Oxytocin, ADH (thụ thể V₁ co mạch), Angiotensin II, Catecholamine (thụ thể α₁), CCK, Gastrin, Acetylcholine (M₃)</strong>.</li>
              </ul>
            </li>
            <li><strong>3. Thụ thể liên kết Enzyme (Thụ thể Tyrosine Kinase hoặc JAK-STAT):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><em>Có hoạt tính Tyrosine Kinase nội tại:</em> <strong>INSULIN</strong>, IGF-1, các yếu tố tăng trưởng (EGF, PDGF).</li>
                <li><em>Liên kết với Tyrosine Kinase bào tương (hệ thống <strong>JAK2 – STAT</strong>):</em> <strong>GH (Hormon tăng trưởng), Prolactin, Erythropoietin (EPO), Leptin</strong>.</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧠 3. Trục Vùng Hạ đồi – Tuyến yên (Trước & Sau) – Tuyến đích</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Hormon Hạ đồi</th>
                  <th>Hormon Tuyến Yên Trước (Yên tuyến)</th>
                  <th>Tuyến đích / Mô đích & Tác dụng chính chuẩn YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>TRH</strong> (3 aa)</td>
                  <td><strong>TSH</strong> (Glycoprotein)</td>
                  <td>Tuyến giáp → Tiết <strong>T₃, T₄</strong> (TRH còn kích thích tiết cả Prolactin!).</td>
                </tr>
                <tr>
                  <td><strong>CRH</strong> (41 aa)</td>
                  <td><strong>ACTH</strong> (từ tiền chất POMC)</td>
                  <td>Vỏ thượng thận (chủ yếu <strong>lớp bó & lớp lưới</strong>) → Tiết <strong>Cortisol</strong> và Androgen. (Tiết theo nhịp ngày đêm: <strong>cao nhất lúc 6–8 giờ sáng</strong>, thấp nhất lúc nửa đêm).</td>
                </tr>
                <tr>
                  <td><strong>GnRH</strong> (10 aa)</td>
                  <td><strong>FSH & LH</strong> (Glycoprotein)</td>
                  <td>Tinh hoàn & Buồng trứng (tạo giao tử và tiết Testosterone, Estrogen, Progesterone).</td>
                </tr>
                <tr>
                  <td><strong>GHRH (+)</strong> vs <strong>GHIH / Somatostatin (–)</strong></td>
                  <td><strong>GH (Hormon tăng trưởng)</strong></td>
                  <td>Tác động lên hầu hết mô: Kích thích gan tiết <strong>Somatomedin C (IGF-1)</strong> giúp phát triển sụn liên hợp làm dài xương; tăng tổng hợp protein, tăng ly giải mỡ, <strong>tăng đường huyết (đối kháng Insulin)</strong>.<br/>
                  • <em>Tăng GH trước dậy thì:</em> <strong>Bệnh khổng lồ (Gigantism)</strong>.<br/>
                  • <em>Tăng GH sau dậy thì:</em> <strong>Bệnh to đầu chi (Acromegaly)</strong>.<br/>
                  • <em>Thiếu GH trước dậy thì:</em> <strong>Bệnh lùn tuyến yên</strong> (cân đối, trí tuệ bình thường – khác với đần độn lùn mất cân đối do suy giáp!).</td>
                </tr>
                <tr>
                  <td><strong>PIH = Dopamine (–, ức chế thường trực!)</strong> vs PRH/TRH (+)</td>
                  <td><strong>Prolactin (PRL)</strong></td>
                  <td>Tuyến vú → <strong>Phát triển nang sữa và BÀI TIẾT SỮA (Tạo sữa)</strong>, đồng thời ức chế GnRH gây vô kinh khi cho con bú. (<em>Bẫy thi:</em> Khi đứt cuống tuyến yên, tất cả hormon yên trước đều GIẢM, riêng <strong>Prolactin TĂNG</strong> do thoát khỏi sự ức chế của Dopamine hạ đồi!).</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="callout trap">
            <div class="callout-title">⚠️ Tuyến Yên Sau (ADH & Oxytocin) & Tuyến Không Thuộc Trục Hạ đồi-Yên</div>
            <ul>
              <li><strong>Tuyến yên sau (Yên thần kinh):</strong> KHÔNG tự tổng hợp hormon! Nó chỉ là nơi dự trữ và phóng thích 2 hormon peptid (9 aa) do <strong>Nhân trên thị (chủ yếu tạo ADH)</strong> và <strong>Nhân cạnh não thất (chủ yếu tạo Oxytocin)</strong> của <strong>VÙNG HẠ ĐỒI</strong> tổng hợp rồi vận chuyển dọc sợi trục xuống:
                <br/>• <strong>ADH (Vasopressin):</strong> Tái hấp thu nước ở ống góp (V₂) và co tiểu ĐM làm tăng huyết áp khi liều cao (V₁).
                <br/>• <strong>Oxytocin:</strong> (1) Gây <strong>co cơ biểu mô (myoepithelial cells) quanh nang tuyến vú gây PHÓNG SỮA</strong> khi trẻ mút vú; (2) Gây <strong>co cơ trơn tử cung</strong> lúc chuyển dạ đẻ và cầm máu sau sinh (điều hòa ngược dương tính – phản xạ Ferguson).
              </li>
              <li><strong>Các tuyến nội tiết KHÔNG chịu sự điều khiển của trục Hạ đồi – Tuyến yên:</strong> <strong>Tuyến tụy nội tiết</strong> (điều hòa trực tiếp theo đường huyết), <strong>Tuyến cận giáp</strong> (theo Ca²⁺ máu), <strong>Tủy thượng thận</strong> (theo giao cảm), và <strong>Lớp cầu vỏ thượng thận tiết Aldosterone</strong> (chủ yếu theo K⁺ máu và Angiotensin II, rất ít phụ thuộc ACTH).</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Nhóm hormon nào sau đây đều có khả năng đi qua màng phospholipid kép của tế bào để gắn vào THỤ THỂ NỘI BÀO (trong bào tương hoặc trong nhân) và điều hòa trực tiếp sự phiên mã gen trên DNA?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.339",
        options: [
          "Các hormon Steroid (Cortisol, Aldosterone, Estrogen, Progesterone, Testosterone), Calcitriol và Hormon tuyến giáp (T3, T4)",
          "Insulin, Glucagon, PTH và GH",
          "Adrenaline (Epinephrine), Noradrenaline và Dopamine",
          "TSH, ACTH, FSH, LH, ADH và Oxytocin"
        ],
        answer: 0,
        explain: "Chỉ những hormon TAN TRONG LIPID gồm: (1) Các hormon Steroid của vỏ thượng thận, tuyến sinh dục và Calcitriol (tổng hợp từ Cholesterol); và (2) Hormon tuyến giáp T3, T4 (dẫn xuất Tyrosine nhưng tan trong lipid) mới đi xuyên qua màng tế bào để gắn vào thụ thể nội bào (tế bào chất hoặc nhân), tác động lên sự phiên mã gen tạo mRNA."
      },
      {
        q: "Mặc dù cùng là các hormon có bản chất dẫn xuất từ acid amin Tyrosine, nhưng Catecholamine (tủy thượng thận) và Hormon tuyến giáp (T3, T4) khác nhau cơ bản ở đặc điểm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.336–339",
        options: [
          "Catecholamine tan trong nước, lưu hành tự do và gắn thụ thể màng tế bào; còn T3, T4 tan trong lipid, gắn protein vận chuyển trong máu và gắn thụ thể ngay trong nhân tế bào",
          "Catecholamine tan trong lipid gắn thụ thể nhân; còn T3, T4 tan trong nước gắn thụ thể màng",
          "Cả hai đều được tổng hợp từ tiền chất Cholesterol của LDL huyết tương",
          "Cả hai đều có thời gian bán hủy trong máu kéo dài trên 7 ngày"
        ],
        answer: 0,
        explain: "Hai nhóm hormon dẫn xuất từ Tyrosine có tính chất trái ngược nhau hoàn toàn: Catecholamine (Epinephrine, Norepinephrine) có tính chất giống hormon peptid (tan trong nước, dự trữ trong túi tiết, t1/2 chỉ 1–2 phút, gắn thụ thể màng GPCR); trong khi T3, T4 của tuyến giáp lại có tính chất giống hormon steroid (tan trong lipid, gắn TBG > 99%, t1/2 dài 1–7 ngày, gắn thụ thể trong nhân tế bào)."
      },
      {
        q: "Tất cả các hormon Steroid của vỏ thượng thận và tuyến sinh dục đều được tổng hợp từ nguyên liệu tiền chất ban đầu nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.335 & Sách TN Câu 11",
        options: [
          "Cholesterol (chủ yếu được tế bào tuyến lấy từ hạt LDL trong huyết tương hoặc tự tổng hợp từ acetyl-CoA)",
          "Acid amin Tyrosine",
          "Preprohormon được dịch mã trên lưới nội bào hạt",
          "Hemoglobin thoái giáng từ hồng cầu"
        ],
        answer: 0,
        explain: "Mọi hormon steroid (Cortisol, Aldosterone, DHEA, Testosterone, Estradiol, Progesterone) đều có khung nhân cyclopentanoperhydrophenanthrene và đều được tổng hợp từ tiền chất duy nhất là Cholesterol (80% lấy từ LDL huyết tương đưa vào tế bào)."
      },
      {
        q: "Khi gắn vào thụ thể trên màng tế bào đích, hormon nào sau đây truyền tín hiệu nội bào thông qua thụ thể có hoạt tính enzyme Tyrosine Kinase nội tại?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.341",
        options: [
          "Insulin (và yếu tố tăng trưởng giống insulin IGF-1)",
          "Glucagon và TSH",
          "Cortisol và Aldosterone",
          "TRH và Oxytocin"
        ],
        answer: 0,
        explain: "Thụ thể của Insulin là một glycoprotein gồm 4 tiểu đơn vị (2α ở ngoài màng gắn insulin, 2β xuyên màng mang hoạt tính enzyme Tyrosine kinase). Khi insulin gắn vào chuỗi α, chuỗi β tự phosphoryl hóa và phosphoryl hóa các cơ chất IRS-1 để hoạt hóa con đường PI3K/Akt và MAPK."
      },
      {
        q: "Nhóm các hormon nào sau đây đều sử dụng Phospholipase C (tạo chất truyền tin thứ hai là IP3, DAG và tăng Ca2+ nội bào) khi gắn vào thụ thể màng?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.340 (Bảng 26.2)",
        options: [
          "TRH, GnRH, Oxytocin, ADH (thụ thể V1 ở cơ trơn mạch máu), Angiotensin II và Catecholamine (thụ thể α1)",
          "TSH, ACTH, LH, FSH, Glucagon và ADH (thụ thể V2 ở ống thận)",
          "T3, T4, Cortisol và Estrogen",
          "Insulin, GH và Prolactin"
        ],
        answer: 0,
        explain: "Theo Bảng 26.2 Sách Sinh lý YDS 2025 (tr.340): Các hormon hoạt hóa hệ thống Phospholipase C → IP3/DAG → Ca2+-Calmodulin gồm: TRH, GnRH, Oxytocin, ADH (thụ thể V1 co mạch), Angiotensin II, Catecholamine (thụ thể α1), Gastrin và CCK. Còn TSH, ACTH, FSH, LH, ADH (V2), Glucagon, PTH, β-adrenergic sử dụng hệ thống Adenyl cyclase – cAMP."
      },
      {
        q: "Trong trường hợp chấn thương hoặc khối u làm đứt cuống tuyến yên (cắt đứt hệ mạch cửa hạ đồi - yên), sự bài tiết các hormon của thùy trước tuyến yên sẽ thay đổi như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.350 & Sách TN",
        options: [
          "Tất cả các hormon của thùy trước tuyến yên (GH, TSH, ACTH, FSH, LH) đều GIẢM, riêng Prolactin lại TĂNG cao",
          "Tất cả 6 hormon của thùy trước tuyến yên (kể cả Prolactin) đều giảm xuống bằng 0",
          "Tất cả các hormon của thùy trước tuyến yên đều tăng tiết quá mức",
          "Chỉ có Prolactin giảm còn GH, TSH, ACTH, FSH, LH đều tăng"
        ],
        answer: 0,
        explain: "Hầu hết các hormon thùy trước tuyến yên cần hormon giải phóng từ vùng hạ đồi (GHRH, TRH, CRH, GnRH) làm tín hiệu kích thích chính; riêng Prolactin bình thường chịu sự ỨC CHẾ THƯỜNG TRỰC của PIH (chính là Dopamine) từ vùng hạ đồi. Do đó khi đứt cuống tuyến yên, Dopamine không xuống được tuyến yên trước nên tế bào lactotrope thoát ức chế làm tăng tiết Prolactin!"
      },
      {
        q: "Hai hormon của thùy sau tuyến yên là ADH (Vasopressin) và Oxytocin thực chất được tổng hợp tại cấu trúc giải phẫu nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.363",
        options: [
          "Được tổng hợp bởi thân các tế bào thần kinh tại Nhân trên thị và Nhân cạnh não thất của VÙNG HẠ ĐỒI, sau đó vận chuyển dọc theo sợi trục xuống dự trữ ở thùy sau tuyến yên",
          "Được tổng hợp trực tiếp bởi các tế bào tuyến của thùy sau tuyến yên",
          "Được tổng hợp ở thùy trước tuyến yên rồi thấm sang thùy sau qua hệ mạch cửa",
          "Được tổng hợp tại tuyến tùng và đám rối mạch mạc não thất III"
        ],
        answer: 0,
        explain: "Thùy sau tuyến yên (yên thần kinh) chỉ gồm các tận cùng sợi trục thần kinh và tế bào nâng đỡ pituicyte, không có tế bào chế tiết hormon. ADH được tổng hợp chủ yếu tại Nhân trên thị (supraoptic nucleus) và Oxytocin được tổng hợp chủ yếu tại Nhân cạnh não thất (paraventricular nucleus) của VÙNG HẠ ĐỒI, rồi gắn với protein Neurophysin vận chuyển dọc bó hạ đồi - yên xuống dự trữ ở yên sau."
      },
      {
        q: "Khi trẻ bú mẹ, động tác mút núm vú tạo ra phản xạ thần kinh - nội tiết kích thích hai hormon nào lần lượt đảm nhiệm chức năng TẠO SỮA (bài tiết sữa vào nang) và PHÓNG SỮA (tống sữa ra ngoài)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.360 & 366",
        options: [
          "Prolactin (của yên trước) kích thích tế bào nang vú tạo sữa; Oxytocin (của yên sau) kích thích tế bào cơ biểu mô quanh nang vú co bóp gây phóng sữa",
          "Oxytocin kích thích tạo sữa; Prolactin gây co cơ biểu mô phóng sữa",
          "Estrogen gây phóng sữa; ADH gây tạo sữa",
          "GH gây phóng sữa; TSH gây tạo sữa"
        ],
        answer: 0,
        explain: "Cần phân biệt rõ 2 hormon lên tuyến vú: Prolactin (thùy trước tuyến yên) tác động lên tế bào biểu mô nang sữa để tổng hợp và BÀI TIẾT SỮA vào lòng nang; còn Oxytocin (thùy sau tuyến yên) làm co các tế bào cơ-biểu mô (myoepithelial cells) bao quanh nang sữa để BƠM / PHÓNG SỮA từ nang ra ống dẫn sữa."
      },
      {
        q: "Hormon tăng trưởng (GH) của thùy trước tuyến yên kích thích sự phát triển chiều dài của xương ở trẻ em chủ yếu thông qua chất trung gian nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.353",
        options: [
          "Somatomedin C (hay IGF-1: Yếu tố tăng trưởng giống insulin type 1) do gan và mô sụn sản xuất dưới tác dụng của GH",
          "Thyroglobulin do tuyến giáp sản xuất",
          "Peptid C do tế bào beta đảo tụy sản xuất",
          "Aldosterone do vỏ thượng thận sản xuất"
        ],
        answer: 0,
        explain: "GH không tác động trực tiếp một mình lên sụn đầu xương mà kích thích GAN (và mô sụn tại chỗ) tổng hợp các peptide trung gian gọi là Somatomedin, quan trọng nhất là Somatomedin C (IGF-1). IGF-1 có thời gian bán hủy dài (~20 giờ so với 20 phút của GH) trực tiếp kích thích tế bào sụn liên hợp tăng sinh và cốt hóa làm xương dài ra."
      },
      {
        q: "Sự tăng tiết quá mức hormon GH (ví dụ do u tế bào ưa acid của thùy trước tuyến yên) xảy ra ở người trưởng thành (sau khi sụn liên hợp đầu xương đã cốt hóa hoàn toàn) sẽ gây ra bệnh lý nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.357",
        options: [
          "Bệnh to đầu chi (Acromegaly - xương không dài thêm được nhưng dày lên ở bàn tay, bàn chân, xương hàm dưới, sọ và các mô mềm to ra)",
          "Bệnh khổng lồ (Gigantism - chiều cao tăng vọt lên trên 2,4 mét)",
          "Bệnh đần độn (Cretinism)",
          "Hội chứng Cushing"
        ],
        answer: 0,
        explain: "Nếu tăng tiết GH TRƯỚC tuổi dậy thì (khi sụn tiếp hợp chưa đóng) → xương dài ra nhanh gây Bệnh khổng lồ (Gigantism). Nếu tăng tiết GH SAU tuổi dậy thì (khi sụn tiếp hợp đã cốt hóa hoàn toàn) → xương dài không dài thêm được nữa, chỉ có các xương dẹt, xương nhỏ bàn tay/bàn chân, xương hàm dưới, xương trán dày lên và tạng to ra → gây Bệnh to đầu chi (Acromegaly)."
      },
      {
        q: "Tuyến nội tiết nào sau đây hoạt động độc lập, HẦU NHƯ KHÔNG chịu sự điều khiển của trục Vùng hạ đồi - Tuyến yên trước?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26 & 27",
        options: [
          "Tuyến tụy nội tiết (Insulin, Glucagon) và Tuyến cận giáp (PTH)",
          "Tuyến giáp (T3, T4)",
          "Lớp bó và lớp lưới vỏ thượng thận (Cortisol, DHEA)",
          "Tuyến sinh dục (Tinh hoàn và Buồng trứng)"
        ],
        answer: 0,
        explain: "Ba trục nội tiết kinh điển do Hạ đồi – Tuyến yên trước chi phối là: (1) Trục Hạ đồi - Yên - Giáp (TRH → TSH → T3/T4); (2) Trục Hạ đồi - Yên - Vỏ thượng thận (CRH → ACTH → Cortisol); và (3) Trục Hạ đồi - Yên - Sinh dục (GnRH → FSH/LH → Estrogen/Testosterone). Ngược lại, Tuyến tụy nội tiết (điều hòa theo đường huyết) và Tuyến cận giáp (điều hòa theo Ca2+ máu) hoạt động độc lập không qua tuyến yên."
      },
      {
        q: "Sự bài tiết hormon ACTH của tuyến yên và Cortisol của lớp bó vỏ thượng thận ở người bình thường có nhịp sinh học ngày đêm như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.359",
        options: [
          "Đạt đỉnh cao nhất vào buổi sáng sớm (khoảng 6 – 8 giờ sáng, ngay trước và sau khi thức dậy) và giảm xuống thấp nhất vào lúc nửa đêm (23 – 24 giờ)",
          "Đạt đỉnh cao nhất vào lúc nửa đêm (24 giờ) và thấp nhất vào lúc 7 giờ sáng",
          "Luôn giữ một nồng độ cố định không đổi suốt 24 giờ trong ngày",
          "Chỉ được bài tiết khi nồng độ K+ máu tăng trên 6,0 mmol/L"
        ],
        answer: 0,
        explain: "Trục CRH – ACTH – Cortisol tuân theo nhịp ngày đêm (circadian rhythm) do nhân trên chéo (SCN) vùng hạ đồi điều khiển: nồng độ Cortisol máu tăng cao nhất vào lúc 6 – 8 giờ sáng để chuẩn bị năng lượng cho ngày mới, sau đó giảm dần trong ngày và thấp nhất vào khoảng nửa đêm."
      }
    ]
  },

  // ========================================================================
  // BÀI 14: SINH LÝ TUYẾN GIÁP
  // ========================================================================
  {
    id: 14,
    group: "VI. SINH LÝ NỘI TIẾT",
    title: "Bài 14: Sinh lý tuyến giáp",
    shortTitle: "Sinh lý tuyến giáp",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 28 (tr.368–383)",
    summary: "Cấu trúc nang giáp (chất keo Thyroglobulin), các bước tổng hợp T3/T4 (bơm NIS, kênh Pendrin, enzyme TPO tại lòng nang), vận chuyển (TBG, T4 là dạng dự trữ lưu hành, T3 có hoạt tính chính nhờ 5'-deiodinase), tác dụng sinh lý của T3/T4, cơ chế thuốc PTU, hiệu ứng Wolff-Chaikoff / Jod-Basedow và biện luận xét nghiệm TSH, fT4, fT3 trong Cường giáp / Suy giáp.",
    simId: "sim_thyroid_lab",
    simTitle: "Mô phỏng Nang giáp Tổng hợp T3/T4 (NIS, TPO, PTU, Wolff-Chaikoff) & Phòng khám Biện luận Xét nghiệm TSH - fT4",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🦋 1. Cấu trúc Nang giáp & Các bước Sinh tổng hợp T₃, T₄</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Đơn vị chức năng của tuyến giáp là <strong>Nang giáp (Follicle)</strong>: thành nang là một lớp tế bào biểu mô nang giáp, lòng nang chứa đầy <strong>chất keo (Colloid)</strong> mà thành phần chính là glycoprotein <strong>Thyroglobulin (Tg, chứa 70 gốc acid amin Tyrosine)</strong>. (Xen giữa các nang giáp là <strong>tế bào C cận nang tiết Calcitonin</strong> có tác dụng hạ Ca²⁺ máu).</p>
          <ol class="theory-list">
            <li><strong>Bước 1 – Bắt giữ Iodua (I⁻ trapping) ở màng đáy:</strong> Tế bào nang giáp bắt I⁻ từ máu ngược bậc thang nồng độ (gấp 30 – 250 lần) theo cơ chế <strong>vận chuyển tích cực thứ phát đồng vận chuyển với Na⁺ qua bơm NIS (Na⁺/I⁻ Symporter)</strong> (nhờ động lực của bơm Na⁺/K⁺-ATPase). Sau đó I⁻ đi qua màng đỉnh vào lòng nang qua kênh <strong>Pendrin</strong>.</li>
            <li><strong>Bước 2 – Oxy hóa I⁻ thành Iod nguyên tử/phân tử (I⁰ / I₂):</strong> Diễn ra ở bề mặt màng đỉnh trong lòng nang dưới xúc tác của enzyme <strong>Thyroperoxidase (TPO)</strong> và H₂O₂.</li>
            <li><strong>Bước 3 – Iod hóa các gốc Tyrosine của Thyroglobulin (Hữu cơ hóa Iod – Organification):</strong> Xảy ra <strong>TRONG LÒNG NANG GIÁP</strong> (trên phân tử Thyroglobulin) dưới xúc tác của <strong>TPO</strong> → tạo thành <strong>MIT (Monoiodotyrosine)</strong> và <strong>DIT (Diiodotyrosine)</strong>.</li>
            <li><strong>Bước 4 – Ghép đôi (Coupling) dưới xúc tác của TPO:</strong>
              <br/>• <code>DIT + DIT → <strong>T₄ (Thyroxine – 4 nguyên tử Iod)</strong></code> (chiếm <strong>90%</strong> lượng hormon bài tiết!).
              <br/>• <code>MIT + DIT → <strong>T₃ (Triiodothyronine – 3 nguyên tử Iod)</strong></code> (chiếm <strong>10%</strong> lượng bài tiết; cộng thêm ~1% rT₃ bất hoạt).
              <br/>• <em>Đặc điểm dự trữ độc nhất:</em> Hormon giáp được dự trữ ngoài tế bào (gắn trên Thyroglobulin trong lòng nang giáp) với số lượng cực lớn <strong>đủ cho cơ thể dùng trong 2 – 3 tháng</strong>!
            </li>
            <li><strong>Bước 5 – Ẩm bào & Giải phóng vào máu:</strong> Tế bào nang giáp <strong>ẩm bào (pinocytosis)</strong> các giọt chất keo vào bào tương → hòa nhập với <strong>Lysosome</strong> chứa enzyme protease cắt tách giải phóng <strong>T₄ (90%) và T₃ (10%)</strong> khuếch tán qua màng đáy vào máu; còn MIT và DIT thừa được enzyme <strong>Deiodinase nội tuyến</strong> khử iod để tái sử dụng.</li>
          </ol>
        </div>

        <div class="card">
          <div class="card-title">🎯 2. Vận chuyển trong Máu, Hoạt hóa tại Mô đích & Dược lý PTU</div>
          <ul class="theory-list">
            <li><strong>Vận chuyển trong máu (&gt; 99% gắn protein huyết tương do GAN sản xuất):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Gắn chủ yếu với <strong>TBG (Thyroxine-binding globulin – chiếm 2/3, ái lực cao nhất)</strong>, còn lại gắn với Transthyretin (TBPA / Prealbumin) và Albumin. (<em>Bẫy đề thi SĐH:</em> <strong>Thyroglobulin KHÔNG phải là protein vận chuyển hormon giáp trong máu!</strong>).</li>
                <li>Do <strong>T₄ có ái lực gắn với TBG rất cao</strong> nên T₄ có thời gian bán hủy dài (<strong>6 – 7 ngày</strong>, so với ~1 ngày của T₃) → <strong>T₄ đóng vai trò là dạng DỰ TRỮ LƯU HÀNH trong huyết tương</strong>; còn chỉ phần tự do (<strong>fT₃, fT₄</strong>) mới đi vào mô đích.</li>
              </ul>
            </li>
            <li><strong>Chuyển hóa và Tác động tại Mô đích (Vai trò của T₃):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Khi vào bên trong tế bào đích, hầu hết <strong>T₄ bị khử mất 1 nguyên tử Iod ở vị trí 5' bởi enzyme 5'-deiodinase để biến thành T₃</strong> (80% T₃ trong máu có nguồn gốc từ khử iod của T₄ ở ngoại biên!).</li>
                <li><strong>T₃ là dạng có hoạt tính sinh học chính tại mô đích</strong> (mạnh gấp 3 – 4 lần và tác dụng nhanh gấp 4 lần T₄ vì thụ thể nhân tế bào có ái lực với T₃ gấp 10 lần T₄!).</li>
                <li>T₃ gắn vào <strong>Thụ thể hormon giáp trong NHÂN TẾ BÀO (TR - gắn với RXR trên vùng TRE của DNA)</strong> → kích thích phiên mã hàng loạt gen tạo enzyme chuyển hóa và bơm Na⁺/K⁺-ATPase.</li>
              </ul>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">💊 Bẫy Đề Thi: Cơ chế Thuốc Kháng Giáp PTU & Hiệu ứng Wolff-Chaikoff</div>
            <ul>
              <li><strong>Thuốc PTU (Propylthiouracil):</strong> Có tác dụng kép: (1) Ức chế enzyme <strong>TPO</strong> tại nang giáp (ngăn oxy hóa I⁻, iod hóa tyrosine và ghép đôi); và (2) Ức chế enzyme <strong>5'-deiodinase ở mô ngoại biên</strong> (ngăn chuyển T₄ → T₃!). (Còn Methimazole/Carbimazole chỉ ức chế TPO).
                <br/>• <em>Bẫy câu hỏi thực nghiệm đề thi SĐH:</em> Khi cho động vật uống <strong>PTU kéo dài</strong> → nồng độ <strong>T₄ và T₃ huyết tương GIẢM</strong> → làm mất ức chế ngược lên tuyến yên → <strong>TSH tăng cao</strong> → kích thích tuyến giáp phình to (<strong>TĂNG kích thước tuyến giáp / bướu giáp</strong>)!
              </li>
              <li><strong>Hiệu ứng Wolff – Chaikoff:</strong> Khi đưa một <strong>liều lượng Iod quá cao</strong> vào cơ thể → ức chế bơm NIS và ức chế TPO → làm <strong>giảm tổng hợp hormon giáp (suy giáp tạm thời)</strong>. (Ứng dụng: uống dung dịch Lugol trước mổ Basedow 10–14 ngày để làm tuyến giáp nhỏ lại và giảm mạch máu!).</li>
              <li><strong>Hiệu ứng Jod – Basedow:</strong> Dùng nhiều Iod trên bệnh nhân đã có sẵn bướu giáp nhân tự chủ → gây <strong>cường giáp (nhiễm độc giáp do iod)</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔥 3. Tác dụng Sinh lý của T₃, T₄ & Biện luận Xét nghiệm Rối loạn Tuyến giáp</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Các Tác dụng Sinh lý Trọng tâm của Hormon Giáp</h4>
            <ul class="theory-list">
              <li><strong>1. Tăng chuyển hóa cơ bản (BMR) & Sinh nhiệt (Hiệu ứng Calorigenic):</strong> Tăng tiêu thụ O₂, tăng số lượng và kích thước <strong>ty thể</strong>, đặc biệt làm <strong>tăng tổng hợp và hoạt tính bơm Na⁺/K⁺-ATPase</strong> ở hầu hết các mô (trừ não, tinh hoàn, tử cung, lách, tuyến yên trước).</li>
              <li><strong>2. Phát triển Cơ thể & Hệ Thần kinh Trung ương (Cực kỳ quan trọng!):</strong>
                <br/>• Cần thiết cho sự <strong>phát triển và myelin hóa não bộ</strong> trong thời kỳ bào thai và 1–2 năm đầu sau sinh, đồng thời phối hợp với GH làm cốt hóa và phát triển xương.
                <br/>• <strong>Suy giáp bẩm sinh (Thiếu T₃, T₄ từ bào thai/sơ sinh):</strong> Gây <strong>Bệnh đần độn (Cretinism)</strong>: lùn mất cân đối VÀ <strong>chậm phát triển trí tuệ không hồi phục</strong> nếu không điều trị sớm trong vài tuần đầu sau sinh! (Khác với lùn tuyến yên do thiếu GH thì trí tuệ vẫn bình thường).
              </li>
              <li><strong>3. Trên Hệ Tim mạch (Hiệp đồng với Catecholamine):</strong> T₃, T₄ làm <strong>tăng số lượng và ái lực của thụ thể β₁-adrenergic trên cơ tim</strong> (up-regulation) đồng thời tăng tổng hợp chuỗi nặng α-MHC → làm <strong>tăng nhịp tim, tăng sức co bóp cơ tim, tăng cung lượng tim, tăng huyết áp tâm thu</strong> (hiệu áp rộng). (Vì vậy dùng thuốc chẹn β là Propranolol để kiểm soát nhịp nhanh và run tay trong cường giáp!).</li>
              <li><strong>4. Trên Chuyển hóa Carbohydrate, Lipid, Protein & Vitamin:</strong>
                <br/>• Tăng hấp thu glucose ở ruột, tăng phân giải glycogen và tân tạo đường.
                <br/>• Tăng huy động mỡ (lipolysis). Đặc biệt: <strong>T₃, T₄ làm GIẢM nồng độ Cholesterol, Phospholipid và Triglyceride huyết tương</strong> (vì T₃ làm tăng biểu hiện thụ thể LDL ở tế bào gan giúp gan thu nhận và thải trừ cholesterol qua mật!). → Do đó: <strong>Suy giáp làm TĂNG Cholesterol máu</strong> gây xơ vữa mạch; <strong>Cường giáp làm GIẢM Cholesterol máu</strong>!
              </li>
            </ul>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Triệu chứng & Bảng Biện luận Xét nghiệm TSH – fT₄ – fT₃</h4>
            <p style="font-size:13.5px;margin-bottom:6px;">Xét nghiệm đơn lẻ <strong>nhạy nhất để tầm soát</strong> rối loạn chức năng tuyến giáp là <strong>TSH</strong>; bộ xét nghiệm chẩn đoán xác định là <strong>TSH, fT₄, fT₃</strong>:</p>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Kết quả Xét nghiệm</th>
                  <th>Chẩn đoán Vị trí & Nguyên nhân</th>
                  <th>Triệu chứng Lâm sàng Điển hình</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>fT₄ ↑, fT₃ ↑</strong><br/><strong>TSH ↓ (rất thấp)</strong></td>
                  <td><strong>Cường giáp nguyên phát (Tại tuyến giáp)</strong>.<br/>Hay gặp nhất: <strong>Bệnh Graves (Basedow)</strong> do tự kháng thể <strong>TSI (TRAb)</strong> có cấu trúc giống TSH gắn kích thích thụ thể TSH trên nang giáp.</td>
                  <td>Bướu giáp mạch, lồi mắt, <strong>nhịp tim nhanh, hồi hộp, sụt cân nhanh dù ăn nhiều, sợ nóng, da nóng ẩm, tiêu chảy, khó ngủ, run đầu ngón tay biên độ nhỏ tần số nhanh</strong>. (<em>Bẫy thi:</em> "Tăng cân" là SAI!).</td>
                </tr>
                <tr>
                  <td><strong>fT₄ ↑, fT₃ ↑</strong><br/><strong>TSH ↑ cao</strong></td>
                  <td><strong>Cường giáp thứ phát (Tại tuyến yên)</strong> (U tuyến yên tiết TSH).</td>
                  <td>Hội chứng nhiễm độc giáp nhưng không có lồi mắt tự miễn.</td>
                </tr>
                <tr>
                  <td><strong>fT₄ bình thường</strong><br/><strong>TSH ↓ thấp</strong></td>
                  <td><strong>Cường giáp dưới lâm sàng</strong>.</td>
                  <td>Triệu chứng kín đáo, nguy cơ rung nhĩ và loãng xương.</td>
                </tr>
                <tr>
                  <td><strong>fT₄ ↓ thấp</strong><br/><strong>TSH ↑ cao</strong></td>
                  <td><strong>Suy giáp nguyên phát (Tại tuyến giáp)</strong>.<br/>Nguyên nhân: <strong>Viêm giáp tự miễn Hashimoto</strong>, sau cắt giáp/uống I¹³¹, thiếu iod.</td>
                  <td><strong>Nhịp tim chậm, sợ lạnh, tăng cân, táo bón, ngủ gà, suy giảm trí nhớ, giọng khàn, da khô dày, phù niêm (myxedema - ấn không lõm), tăng Cholesterol máu</strong>.</td>
                </tr>
                <tr>
                  <td><strong>fT₄ ↓ thấp</strong><br/><strong>TSH ↓ thấp</strong></td>
                  <td><strong>Suy giáp trung ương (Tại Tuyến yên hoặc Hạ đồi)</strong>.<br/>• <em>Nghiệm pháp TRH:</em> Tiêm TRH nếu <strong>TSH tăng vọt lên → Tổn thương tại Vùng Hạ đồi</strong>; nếu TSH vẫn không tăng → Tổn thương tại Tuyến yên!</td>
                  <td>Suy giáp kèm suy các trục nội tiết khác của tuyến yên.</td>
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
        q: "Quá trình vận chuyển ion Iodua (I-) từ máu qua màng đáy vào trong tế bào biểu mô nang giáp diễn ra theo cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.369",
        options: [
          "Vận chuyển tích cực thứ phát đồng vận chuyển với ion Na+ thông qua bơm NIS (Na+/I- symporter)",
          "Khuếch tán đơn giản theo bậc thang nồng độ từ máu vào tế bào nang giáp",
          "Ẩm bào thông qua thụ thể Pendrin ở màng đáy",
          "Vận chuyển chủ động nguyên phát qua bơm H+/K+-ATPase"
        ],
        answer: 0,
        explain: "Nồng độ I- trong tế bào nang giáp cao gấp 30–250 lần trong máu nên I- phải được bơm ngược bậc thang nồng độ nhờ bơm đồng vận chuyển tích cực thứ phát Na+/I- (NIS) ở màng đáy (sử dụng thế năng Na+ do bơm Na+/K+-ATPase tạo ra). Còn kênh Pendrin nằm ở màng đỉnh để đưa I- từ tế bào vào lòng nang giáp."
      },
      {
        q: "Phản ứng oxy hóa ion I- và gắn Iod vào các gốc acid amin Tyrosine trên phân tử Thyroglobulin để tạo thành MIT, DIT rồi ghép đôi thành T3, T4 diễn ra tại vị trí nào và nhờ enzyme nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024 & Sách SL 2025 tr.370",
        options: [
          "Diễn ra tại lòng nang giáp (sát bề mặt màng đỉnh tế bào nang giáp) dưới sự xúc tác của enzyme Thyroperoxidase (TPO)",
          "Diễn ra bên trong nhân của tế bào biểu mô nang giáp dưới xúc tác của enzyme 5'-deiodinase",
          "Diễn ra tại tế bào C cận nang dưới xúc tác của enzyme Carbonic anhydrase",
          "Diễn ra trong máu tĩnh mạch giáp dưới xúc tác của TBG"
        ],
        answer: 0,
        explain: "Sự oxy hóa I- và hữu cơ hóa Iod (gắn iod vào gốc Tyrosine của Thyroglobulin tạo MIT, DIT và ghép cặp tạo T3, T4) diễn ra ở ngoài tế bào, ngay trong chất keo LÒNG NANG GIÁP sát mặt ngoài màng đỉnh tế bào nang giáp dưới xúc tác của enzyme Thyroperoxidase (TPO)."
      },
      {
        q: "So sánh giữa hai hormon tuyến giáp là T4 (Thyroxine) và T3 (Triiodothyronine), phát biểu nào sau đây là ĐÚNG?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.371–373 & Đề SĐH",
        options: [
          "Tuyến giáp bài tiết chủ yếu là T4 (90%) có ái lực gắn TBG cao nên T4 là dạng dự trữ lưu hành trong huyết tương; tại mô đích T4 được khử bớt 1 iod bởi 5'-deiodinase thành T3 là dạng có hoạt tính sinh học chính",
          "Tuyến giáp bài tiết 90% là T3 và chỉ 10% là T4; T4 có hoạt tính sinh học tại nhân tế bào mạnh gấp 10 lần T3",
          "Trong máu, T3 và T4 được vận chuyển chủ yếu nhờ gắn với phân tử Thyroglobulin huyết tương",
          "T3 và T4 gắn vào thụ thể trên màng tế bào đích để hoạt hóa Adenyl cyclase"
        ],
        answer: 0,
        explain: "T4 chiếm 90% sản lượng tiết của tuyến giáp, gắn rất chặt với TBG huyết tương (t1/2 = 6–7 ngày) nên đóng vai trò là nguồn dự trữ lưu hành. Khi vào tế bào mô đích, enzyme 5'-deiodinase cắt bớt 1 iod biến T4 thành T3. Thụ thể nhân tế bào (TR) có ái lực với T3 gấp 10 lần T4 nên T3 là dạng có hoạt tính sinh học chính (mạnh gấp 3–4 lần T4)."
      },
      {
        q: "Khi cho động vật thí nghiệm sử dụng thuốc kháng giáp Propylthiouracil (PTU) liên tục trong nhiều tuần, những thay đổi nào sau đây sẽ xảy ra?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 25",
        options: [
          "Giảm nồng độ T4 và T3 trong huyết tương, tăng bài tiết TSH từ tuyến yên và làm TĂNG kích thước tuyến giáp (phì đại tuyến giáp)",
          "Tăng nồng độ T4 huyết tương và làm teo nhỏ kích thước tuyến giáp",
          "Giảm nồng độ TSH huyết tương và giảm kích thước tuyến giáp",
          "Tăng chuyển T4 thành T3 ở các mô ngoại biên"
        ],
        answer: 0,
        explain: "PTU ức chế enzyme TPO tại nang giáp (ngăn tổng hợp T3, T4) và ức chế 5'-deiodinase ở ngoại biên → làm nồng độ T4 và T3 trong máu GIẢM thấp. Khi T3, T4 giảm sẽ làm mất cơ chế điều hòa ngược âm tính lên vùng hạ đồi và tuyến yên → tuyến yên tăng tiết mạnh TSH → TSH kích thích tế bào nang giáp tăng sinh và phì đại làm TĂNG kích thước tuyến giáp (tạo bướu giáp)."
      },
      {
        q: "Hiệu ứng Wolff - Chaikoff tại tuyến giáp là hiện tượng sinh lý nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.377 & Đề SĐH",
        options: [
          "Khi nồng độ Iod đưa vào cơ thể quá cao sẽ ức chế bơm bắt iod (NIS) và ức chế enzyme TPO, làm giảm tổng hợp hormon tuyến giáp",
          "Khi thiếu hụt Iod nặng sẽ làm ngừng bài tiết TSH từ thùy trước tuyến yên",
          "Khi nồng độ Ca2+ máu tăng cao sẽ kích thích nang giáp tăng tiết T3, T4",
          "Khi tiêm TSH ngoại sinh sẽ làm giảm tưới máu tuyến giáp"
        ],
        answer: 0,
        explain: "Hiệu ứng Wolff-Chaikoff là cơ chế tự bảo vệ của tuyến giáp trước tình trạng thừa Iod cấp tính: lượng I- nội bào quá cao sẽ ức chế hoạt động của bơm NIS, ức chế TPO (hữu cơ hóa iod) và giảm ẩm bào chất keo → làm giảm tổng hợp và giải phóng T3, T4. (Ngược lại, hiệu ứng Jod-Basedow là tình trạng dùng nhiều iod gây cường giáp ở người có sẵn nhân giáp tự chủ)."
      },
      {
        q: "Tại sao ở bệnh nhân cường giáp (nhiễm độc giáp) thường có triệu chứng nhịp tim nhanh, hồi hộp đánh trống ngực và có thể điều trị giảm triệu chứng hiệu quả bằng thuốc chẹn thụ thể Beta (như Propranolol)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.375",
        options: [
          "Vì hormon giáp T3, T4 làm tăng biểu hiện (tăng số lượng và ái lực) của các thụ thể Beta-adrenergic trên cơ tim, làm tim tăng nhạy cảm với catecholamine",
          "Vì hormon giáp T3, T4 trực tiếp gắn vào thụ thể Muscarinic M2 để ức chế dây thần kinh X",
          "Vì T3, T4 có cấu trúc hóa học giống hệt Adrenaline",
          "Vì trong bệnh cường giáp tủy thượng thận tăng tiết Adrenaline gấp 100 lần"
        ],
        answer: 0,
        explain: "Nồng độ Catecholamine trong máu bệnh nhân cường giáp vẫn bình thường, nhưng T3 kích thích phiên mã gen làm tăng số lượng và ái lực của thụ thể β1-adrenergic trên màng tế bào cơ tim (hiện tượng điều hòa tăng - up-regulation), khiến cơ tim đáp ứng quá mức với catecholamine nội sinh gây nhịp nhanh và tăng co bóp."
      },
      {
        q: "Một bệnh nhân đến khám vì sụt cân, nóng bức, tim đập nhanh. Xét nghiệm máu cho kết quả: fT4 tăng cao, fT3 tăng cao, TSH giảm rất thấp (< 0,01 mIU/L). Chẩn đoán phù hợp nhất là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.381 (Bảng 28.2) & Đề SĐH",
        options: [
          "Cường giáp nguyên phát tại tuyến giáp (điển hình là bệnh Graves / Basedow do kháng thể TSI kích thích thụ thể TSH)",
          "Cường giáp thứ phát do khối u thùy trước tuyến yên tăng tiết TSH",
          "Suy giáp nguyên phát do viêm giáp tự miễn Hashimoto",
          "Suy giáp thứ phát tại vùng hạ đồi"
        ],
        answer: 0,
        explain: "Theo Bảng 28.2 Sách Sinh lý YDS 2025 (tr.381): Khi fT4 và fT3 tăng cao kèm TSH giảm thấp → chứng tỏ tuyến giáp tự tăng tiết hormon quá mức (cường giáp tại tuyến giáp, hay gặp nhất là bệnh Graves/Basedow do tự kháng thể TSI), lượng T3/T4 cao này điều hòa ngược âm tính ức chế tuyến yên làm TSH giảm rất thấp. (Nếu cường giáp tại tuyến yên thì cả fT4 và TSH đều phải TĂNG!)."
      },
      {
        q: "Triệu chứng hoặc dấu hiệu lâm sàng nào sau đây KHÔNG HỢP LÝ (không phù hợp) ở một bệnh nhân bị Cường giáp điển hình?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 26",
        options: [
          "Tăng cân nhanh kèm táo bón và tăng nồng độ Cholesterol máu",
          "Sụt cân nhanh mặc dù ăn nhiều, sợ nóng, da nóng ẩm nhiều mồ hôi",
          "Nhịp tim nhanh, hồi hộp, hiệu áp rộng (tăng huyết áp tâm thu)",
          "Khó ngủ, dễ kích thích và run đầu ngón tay biên độ nhỏ tần số nhanh"
        ],
        answer: 0,
        explain: "Trong Cường giáp, tăng chuyển hóa cơ bản và tăng dị hóa làm bệnh nhân SỤT CÂN dù ăn khỏe, tăng nhu động ruột gây TIÊU CHẢY, và tăng thụ thể LDL ở gan làm GIẢM Cholesterol máu. Còn Tăng cân, táo bón, sợ lạnh, nhịp tim chậm và tăng Cholesterol máu là các triệu chứng điển hình của SUY GIÁP!"
      },
      {
        q: "Một bệnh nhân có triệu chứng suy giáp (mệt mỏi, sợ lạnh, nhịp chậm, phù niêm) với xét nghiệm fT4 giảm thấp và TSH cũng giảm thấp. Khi thực hiện nghiệm pháp tiêm TRH tĩnh mạch, thấy nồng độ TSH trong máu tăng vọt lên rõ rệt. Vị trí tổn thương gây suy giáp ở bệnh nhân này nằm ở đâu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.381 (Bảng 28.2)",
        options: [
          "Suy giáp tại vùng hạ đồi (Suy giáp bậc ba - thiếu TRH nội sinh trong khi thùy trước tuyến yên vẫn còn nguyên vẹn khả năng đáp ứng)",
          "Suy giáp nguyên phát tại tuyến giáp (bệnh Hashimoto)",
          "Suy giáp tại thùy trước tuyến yên (hoại tử tuyến yên Sheehan)",
          "Đề kháng hormon giáp tại các mô ngoại biên"
        ],
        answer: 0,
        explain: "fT4 giảm mà TSH cũng thấp → suy giáp trung ương (tại yên hoặc hạ đồi). Để phân biệt giữa tuyến yên và vùng hạ đồi, ta tiêm TRH ngoại sinh: nếu tế bào tuyến yên còn lành lặn nhưng bình thường thiếu TRH từ hạ đồi, thì khi được tiêm TRH vào, tuyến yên sẽ đáp ứng bằng cách tiết TSH tăng lên rõ rệt → chứng tỏ tổn thương nằm tại VÙNG HẠ ĐỒI!"
      },
      {
        q: "Sự thiếu hụt hormon tuyến giáp nặng xảy ra từ thời kỳ bào thai hoặc ngay sau khi sinh mà không được phát hiện và điều trị kịp thời sẽ dẫn đến hậu quả gì ở trẻ?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.374 & 380",
        options: [
          "Bệnh đần độn (Cretinism): trẻ vừa bị lùn mất cân đối (xương chậm cốt hóa) vừa bị chậm phát triển trí tuệ (thiểu năng trí tuệ) không hồi phục",
          "Trẻ chỉ bị lùn cân đối nhưng trí tuệ phát triển hoàn toàn bình thường (giống bệnh lùn tuyến yên)",
          "Trẻ phát triển chiều cao quá mức gây bệnh khổng lồ",
          "Không ảnh hưởng đến não bộ vì não trẻ sơ sinh không cần hormon giáp"
        ],
        answer: 0,
        explain: "Hormon giáp là yếu tố bắt buộc cho sự phân nhánh sợi trục, hình thành synapse và myelin hóa hệ thần kinh trung ương trong giai đoạn bào thai và năm đầu đời. Vì vậy suy giáp bẩm sinh gây Bệnh đần độn (Cretinism) với đặc trưng là chậm phát triển cả thể chất (lùn mất cân đối, lưỡi to) lẫn tinh thần (đần độn trí tuệ không hồi phục)."
      },
      {
        q: "Hormon tuyến giáp (T3, T4) làm GIẢM nồng độ Cholesterol trong huyết tương thông qua cơ chế chính nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.374",
        options: [
          "Làm tăng biểu hiện các thụ thể LDL trên màng tế bào gan, giúp gan tăng bắt giữ cholesterol từ máu và tăng bài xuất cholesterol qua mật",
          "Ức chế hoàn toàn sự hấp thu lipid tại niêm mạc ruột non",
          "Kích thích thận lọc toàn bộ hạt LDL ra nước tiểu",
          "Ngăn cản mô mỡ giải phóng acid béo tự do"
        ],
        answer: 0,
        explain: "Mặc dù T3, T4 làm tăng tổng hợp cholesterol ở gan, nhưng nó lại làm tăng mạnh hơn rất nhiều số lượng thụ thể LDL trên bề mặt tế bào gan → giúp gan thu giữ nhanh LDL-cholesterol từ huyết tương và đào thải qua dịch mật theo phân. Vì vậy cường giáp làm giảm cholesterol máu, còn suy giáp làm tăng cholesterol máu gây xơ vữa động mạch."
      },
      {
        q: "Trong bệnh Graves (Basedow), nguyên nhân trực tiếp kích thích tuyến giáp phì đại và tăng tổng hợp, bài tiết T3, T4 không ngừng là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.379",
        options: [
          "Các tự kháng thể TSI (Thyroid Stimulating Immunoglobulin / TRAb) do hệ miễn dịch tạo ra gắn vào và kích thích liên tục thụ thể TSH trên màng tế bào nang giáp",
          "Tuyến yên trước tăng tiết quá nhiều TSH kích thích tuyến giáp",
          "Sự phá hủy hoàn toàn các nang giáp bởi tế bào lympho T độc",
          "Sự thiếu hụt Iod kéo dài trong khẩu phần ăn"
        ],
        answer: 0,
        explain: "Bệnh Graves (Basedow) là bệnh tự miễn trong đó cơ thể sinh ra kháng thể IgG gọi là TSI (hoặc TRAb) có tác dụng bắt chước TSH: gắn vào thụ thể TSH trên tế bào nang giáp và hoạt hóa cAMP liên tục suốt 12 giờ (dài hơn nhiều so với 1 giờ của TSH), bất chấp việc nồng độ TSH thật của tuyến yên đã bị ức chế xuống gần bằng 0."
      }
    ]
  },

  // ========================================================================
  // BÀI 15: SINH LÝ TUYẾN TỤY NỘI TIẾT
  // ========================================================================
  {
    id: 15,
    group: "VI. SINH LÝ NỘI TIẾT",
    title: "Bài 15: Sinh lý tuyến tụy nội tiết",
    shortTitle: "Tuyến tụy nội tiết (Insulin & Glucagon)",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 30 (tr.399–413)",
    summary: "Bốn loại tế bào đảo tụy Langerhans (Alpha, Beta, Delta, PP/F), sinh tổng hợp Insulin & Peptid C (tỉ lệ 1:1), cơ chế tiết Insulin qua kênh GLUT2 - Kir6.2 - Ca2+, phân bố kênh GLUT1-4 (Cơ & Mỡ phụ thuộc Insulin qua GLUT4; Não & Gan không phụ thuộc GLUT4), vai trò đệm đường huyết của Gan, tác dụng đồng hóa của Insulin vs dị hóa của Glucagon và cơ chế Đái tháo đường Típ 1 vs Típ 2.",
    simId: "sim_pancreas_glucose",
    simTitle: "Mô phỏng Tế bào Beta Bài tiết Insulin (GLUT2 - Kir6.2), Đưa GLUT4 lên màng Cơ/Mỡ & Điều hòa Đường huyết (Đái tháo đường Típ 1 / Típ 2)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🏝️ 1. Các Tế bào Đảo tụy Langerhans & Cơ chế Tiết Insulin</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Tụy nội tiết gồm 1 – 2 triệu <strong>Đảo tụy Langerhans</strong> (chiếm ~2% khối lượng tụy) với 4 loại tế bào chính (cực kỳ hay hỏi ghép cặp đúng/sai trong đề thi SĐH!):</p>
          <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Loại tế bào đảo tụy</th>
                <th>Tỉ lệ</th>
                <th>Hormon bài tiết</th>
                <th>Vai trò chính & Bẫy đề thi YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Tế bào Beta (β)</strong></td>
                <td><strong>60 – 65%</strong> (trung tâm đảo)</td>
                <td><strong>Insulin</strong> & <strong>Peptid C</strong> (cùng Amylin)</td>
                <td><strong>Hormon DUY NHẤT của cơ thể làm HẠ ĐƯỜNG HUYẾT!</strong> Hormon đồng hóa dự trữ năng lượng.</td>
              </tr>
              <tr>
                <td><strong>2. Tế bào Alpha (α)</strong></td>
                <td><strong>25 – 30%</strong> (ngoại vi đảo)</td>
                <td><strong>Glucagon</strong></td>
                <td>Làm <strong>TĂNG đường huyết</strong> (phân giải glycogen gan & tân tạo đường tại gan).</td>
              </tr>
              <tr>
                <td><strong>3. Tế bào Delta (δ)</strong></td>
                <td><strong>~ 5 – 10%</strong></td>
                <td><strong>Somatostatin</strong></td>
                <td>Ức chế cận tiết cả tế bào Beta (giảm Insulin) lẫn tế bào Alpha (giảm Glucagon), làm chậm tiêu hóa.</td>
              </tr>
              <tr>
                <td><strong>4. Tế bào PP (hay Tế bào F)</strong></td>
                <td><strong>&lt; 2 – 5%</strong></td>
                <td><strong>Pancreatic Polypeptide (PP)</strong></td>
                <td>Điều hòa tiết dịch tụy ngoại tiết. (<em>Bẫy đề thi SĐH 2024:</em> Ghép "Tế bào F – Gastrin" là <strong>SAI</strong>; Gastrin do tế bào G dạ dày tiết!).</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div class="callout formula">
            <div class="callout-title">⚡ Cơ chế Phân tử Bài tiết Insulin tại Tế bào Beta & Ý nghĩa Peptid C</div>
            <ul>
              <li><strong>Sinh tổng hợp:</strong> <code>Preproinsulin → Proinsulin</code> → trong bộ máy Golgi/túi tiết được cắt thành <strong>1 phân tử Insulin</strong> (51 aa, gồm chuỗi A 21 aa và chuỗi B 30 aa nối nhau bằng cầu nối disulfide) + <strong>1 phân tử Peptid C (tỉ lệ 1 : 1)</strong>.
                <br/>→ <em>Ứng dụng lâm sàng:</em> Vì Peptid C không bị gan bắt giữ nhanh như Insulin và không có trong thuốc Insulin tiêm ngoại sinh, nên <strong>định lượng Peptid C phản ánh chính xác nhất chức năng tiết Insulin nội sinh của tế bào Beta</strong>!
              </li>
              <li><strong>Chuỗi sự kiện khi Glucose máu tăng (&gt; 70 – 100 mg/dL):</strong>
                <br/><code>1. Glucose vào tế bào Beta qua kênh <strong>GLUT2</strong> (không cần insulin)</code> → <code>2. Được phosphoryl hóa bởi <strong>Glucokinase</strong> (cảm biến glucose) và oxy hóa tạo nhiều <strong>ATP (Tăng tỉ số ATP/ADP)</strong></code> → <code>3. ATP làm <strong>ĐÓNG kênh K⁺ nhạy cảm ATP (Kir6.2 / SUR1)</strong></code> → <code>4. K⁺ không thoát ra được gây <strong>KHỬ CỰC MÀNG</strong></code> → <code>5. Mở <strong>kênh Ca²⁺ phụ thuộc điện thế</strong> cho Ca²⁺ ùa vào bào tương</code> → <code>6. Kích hoạt <strong>xuất bào các hạt chứa Insulin + Peptid C</strong> vào máu</code> (tiết theo 2 pha: Pha 1 đạt đỉnh nhanh sau 3–5 phút từ insulin dự trữ sẵn; Pha 2 tăng dần sau 15–60 phút từ insulin mới tổng hợp).
              </li>
              <li><em>Liên hệ thuốc ĐTĐ:</em> Nhóm thuốc <strong>Sulfonylurea</strong> gắn trực tiếp làm đóng kênh K⁺-ATP (SUR1/Kir6.2) kích thích tiết insulin. Hormon <strong>Incretin của ruột (GLP-1, GIP)</strong> làm giải thích vì sao <em>uống glucose kích thích tiết insulin mạnh hơn nhiều so với tiêm tĩnh mạch cùng một lượng glucose</em>!</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔑 2. Các Kênh GLUT, Mô Đích của Insulin & Vai trò "Đệm Đường huyết" của Gan</div>
          <div class="callout trap" style="margin-top:0;">
            <div class="callout-title">⚠️ Phân biệt Mô Phụ thuộc Insulin (GLUT4) vs Mô KHÔNG Phụ thuộc Insulin</div>
            <div class="table-responsive">
            <table class="med-table" style="margin-top:6px;">
              <thead>
                <tr>
                  <th>Kênh GLUT</th>
                  <th>Phân bố Mô / Cơ quan</th>
                  <th>Sự phụ thuộc Insulin & Đặc điểm Đề thi YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>GLUT4</strong></td>
                  <td><strong>CƠ XƯƠNG, CƠ TIM và MÔ MỠ</strong></td>
                  <td><strong>PHỤ THUỘC INSULIN!</strong> Bình thường GLUT4 nằm trong túi nội bào; chỉ khi <strong>Insulin gắn thụ thể Tyrosine kinase</strong> (hoặc khi <strong>cơ xương co bóp vận động</strong>!) thì túi GLUT4 mới di chuyển gắn lên màng tế bào để đưa Glucose vào cơ và mô mỡ.</td>
                </tr>
                <tr>
                  <td><strong>GLUT1 & GLUT3</strong></td>
                  <td><strong>TẾ BÀO NÃO (Neuron)</strong>, Hồng cầu, Nhau thai</td>
                  <td><strong>HOÀN TOÀN KHÔNG PHỤ THUỘC INSULIN!</strong> Kênh GLUT1, GLUT3 luôn có sẵn trên màng neuron với ái lực rất cao → Não thu nhận và sử dụng glucose liên tục mà không cần Insulin (vì vậy khi hạ đường huyết &lt; 50 mg/dL, não là cơ quan bị tổn thương đầu tiên gây hôn mê!).</td>
                </tr>
                <tr>
                  <td><strong>GLUT2</strong></td>
                  <td><strong>TẾ BÀO GAN, Tế bào Beta đảo tụy</strong>, Màng đáy ống thận & ruột non</td>
                  <td>Kênh GLUT2 luôn có sẵn trên màng tế bào gan (vận chuyển 2 chiều không cần insulin để đưa kênh lên màng). <strong>NHƯNG tại Gan, Insulin hoạt hóa mạnh enzyme Glucokinase</strong> (bắt giữ glucose thành G-6-P) và <strong>Glycogen synthase</strong> (tạo glycogen) đồng thời ức chế Glucose-6-phosphatase!</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div class="callout pearl">
            <div class="callout-title">🏆 Tại sao GAN là "Bộ phận Đệm Đường huyết" Quan trọng Nhất?</div>
            <ul>
              <li><strong>Sau bữa ăn (Đường huyết cao, Insulin ↑):</strong> Gan thu nhận tới <strong>60% lượng glucose</strong> từ tĩnh mạch cửa để dự trữ dưới dạng <strong>Glycogen</strong> (tối đa ~100g, chiếm 5–6% trọng lượng gan) và chuyển thành acid béo.</li>
              <li><strong>Giữa các bữa ăn / Lúc đói (Đường huyết giảm, Glucagon ↑):</strong> Gan là cơ quan chính <strong>phóng thích Glucose tự do trở lại máu</strong> để nuôi não nhờ có enzyme <strong>Glucose-6-phosphatase</strong> (biến G-6-P → Glucose tự do qua GLUT2 ra máu) và <strong>tân tạo đường (Gluconeogenesis)</strong>.</li>
              <li><em>Bẫy đề thi:</em> <strong>Cơ xương</strong> tuy dự trữ tổng lượng glycogen lớn (300–400g) nhưng <strong>KHÔNG có enzyme Glucose-6-phosphatase</strong> nên glycogen cơ chỉ dùng cho chính cơ co chứ <strong>KHÔNG THỂ phóng thích glucose tự do vào máu</strong> để nâng đường huyết được!</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⚖️ 3. Đối kháng Sinh lý Insulin vs Glucagon & Cơ chế Đái tháo đường Típ 1 / Típ 2</div>
        <div class="grid-2">
          <div>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Chuyển hóa</th>
                  <th>INSULIN (Hormon Đồng hóa – Khi नो)</th>
                  <th>GLUCAGON (Hormon Dị hóa – Khi Đói)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Yếu tố kích thích mạnh nhất</strong></td>
                  <td><strong>Tăng Glucose máu (&gt; 100 mg/dL)</strong>, tăng acid amin (Arginine, Leucine), hormon Incretin (GLP-1, GIP), kích thích dây X (ACh).</td>
                  <td><strong>GIẢM Glucose máu (&lt; 70 mg/dL – Yếu tố điều hòa quan trọng nhất!)</strong>, tăng acid amin máu (Alanine, Arginine), vận động nặng, giao cảm.</td>
                </tr>
                <tr>
                  <td><strong>Trên Carbohydrate</strong></td>
                  <td>• Tăng đưa glucose vào cơ & mỡ (qua <strong>GLUT4</strong>).<br/>• Hoạt hóa <strong>Glucokinase & Glycogen synthase</strong> → <strong>Tăng tổng hợp Glycogen</strong> ở gan & cơ.<br/>• <strong>Ức chế phân giải glycogen & ức chế tân tạo đường</strong>.</td>
                  <td>Gắn thụ thể GPCR tại <strong>GAN</strong> → tăng <strong>cAMP</strong>:<br/>• Kích thích mạnh <strong>Phân giải Glycogen tại GAN</strong> (<em>không tác dụng lên cơ xương!</em>).<br/>• Kích thích mạnh <strong>Tân tạo Glucose tại GAN</strong> từ acid amin, glycerol, lactate.</td>
                </tr>
                <tr>
                  <td><strong>Trên Lipid (Mỡ)</strong></td>
                  <td>• Tăng tổng hợp acid béo và Triglyceride.<br/>• Hoạt hóa <strong>LPL (Lipoprotein lipase)</strong> ở thành mao mạch mô mỡ.<br/>• <strong>Ức chế mạnh enzyme HSL (Hormone-sensitive lipase)</strong> trong tế bào mỡ → ngăn ly giải mỡ và <strong>ngăn tạo thể ceton</strong>.</td>
                  <td>• Hoạt hóa enzyme <strong>HSL</strong> tăng phân giải triglyceride thành acid béo tự do.<br/>• Đưa acid béo vào ty thể gan <strong>tăng β-oxy hóa và tăng tạo Thể Ceton (Ketogenesis)</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Trên Protein & Ion K⁺</strong></td>
                  <td>• Tăng vận chuyển acid amin vào tế bào, <strong>tăng tổng hợp Protein</strong>, chống dị hóa cơ.<br/>• Hoạt hóa bơm Na⁺/K⁺-ATPase <strong>đẩy K⁺ vào trong tế bào (Hạ K⁺ máu)</strong>.</td>
                  <td>Tăng thu nhận acid amin vào gan để khử amin dùng cho <strong>tân tạo glucose</strong>.</td>
                </tr>
              </tbody>
            </table>
            </div>
            <p style="font-size:13px;margin-top:6px;"><em>💡 Mẹo đề thi:</em> Khi ăn một bữa ăn <strong>giàu Protein nhưng không có Carbohydrate</strong>, cơ thể sẽ tăng tiết <strong>CẢ Insulin LẪN Glucagon</strong> (Insulin giúp đưa acid amin vào cơ tổng hợp đạm, còn Glucagon ngăn không cho Insulin gây hạ đường huyết!).</p>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">So sánh Sinh lý bệnh Đái tháo đường Típ 1 vs Típ 2</h4>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Đặc điểm</th>
                  <th>Đái tháo đường Típ 1 (5 – 10%)</th>
                  <th>Đái tháo đường Típ 2 (90 – 95%)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Cơ chế bệnh sinh chính</strong></td>
                  <td>Phá hủy tế bào Beta đảo tụy (thường do tự miễn) → <strong>Thiếu hụt Insulin TUYỆT ĐỐI</strong> (Insulin và Peptid C máu rất thấp hoặc bằng 0).</td>
                  <td><strong>ĐỀ KHÁNG INSULIN tại các mô đích ngoại biên (Cơ xương, Gan, Mô mỡ)</strong> kết hợp với sự suy giảm tiết insulin tương đối của tế bào Beta.</td>
                </tr>
                <tr>
                  <td><strong>Chuyển hóa & Biến chứng cấp đặc trưng</strong></td>
                  <td>Khi thiếu hoàn toàn Insulin, cơ và mỡ không lấy được glucose nên phải dùng <strong>Acid béo</strong> làm năng lượng; enzyme <strong>HSL thoát ức chế</strong> ly giải mỡ ồ ạt đẩy acid béo về gan tạo quá nhiều acetoacetate, β-hydroxybutyrate, acetone → gây <strong>NHIỄM TOAN CETON (DKA)</strong>!</td>
                  <td>Vẫn còn một lượng insulin nội sinh đủ để ức chế HSL nên ít khi bị nhiễm toan ceton tự phát; biến chứng cấp đặc trưng là <strong>Hôn mê tăng áp lực thẩm thấu máu</strong>.</td>
                </tr>
                <tr>
                  <td><strong>4 Triệu chứng kinh điển</strong></td>
                  <td colspan="2"><strong>Ăn nhiều</strong> (do tế bào trung tâm no vùng hạ đồi/mô thiếu năng lượng) – <strong>Tiểu nhiều</strong> (khi đường huyết &gt; ngưỡng thận 180 mg/dL gây lợi niệu thẩm thấu) – <strong>Uống nhiều</strong> (do mất nước tăng Posm kích thích trung tâm khát) – <strong>Gầy nhiều (Sụt cân)</strong> (do tăng dị hóa mỡ và cơ).</td>
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
        q: "Sự ghép cặp nào sau đây giữa loại tế bào của đảo tụy Langerhans và hormon do tế bào đó bài tiết là SAI?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 27",
        options: [
          "Tế bào F (hay tế bào PP) – Gastrin",
          "Tế bào Beta (β, chiếm 65%) – Insulin và Peptid C",
          "Tế bào Alpha (α, chiếm 30%) – Glucagon",
          "Tế bào Delta (δ, chiếm 5%) – Somatostatin"
        ],
        answer: 0,
        explain: "Tế bào F (còn gọi là tế bào PP) của đảo tụy Langerhans bài tiết Pancreatic Polypeptide (PP) chứ KHÔNG bài tiết Gastrin (Gastrin ở người trưởng thành bình thường do tế bào G của hang vị dạ dày và tá tràng bài tiết)."
      },
      {
        q: "Trên lâm sàng, để đánh giá chính xác nhất khả năng bài tiết Insulin NỘI SINH của tế bào Beta đảo tụy (đặc biệt ở bệnh nhân đang tiêm Insulin ngoại sinh), người ta định lượng chất nào trong máu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.400 & Đề SĐH",
        options: [
          "Peptid C (vì được cắt ra từ Proinsulin và bài tiết vào máu cùng với Insulin nội sinh theo tỉ lệ 1 : 1)",
          "Glucagon huyết tương",
          "Amylase máu",
          "Somatostatin huyết tương"
        ],
        answer: 0,
        explain: "Trong tế bào Beta, mỗi phân tử Proinsulin được cắt thành 1 phân tử Insulin và 1 phân tử Peptid C rồi xuất bào cùng nhau theo tỉ lệ đồng phân tử 1:1. Thuốc Insulin thương mại tiêm từ ngoài vào không chứa Peptid C, nên nồng độ Peptid C máu phản ánh trung thực lượng Insulin nội sinh do tụy bệnh nhân tiết ra."
      },
      {
        q: "Khi nồng độ Glucose trong máu tăng cao sau bữa ăn, chuỗi sự kiện điện sinh lý diễn ra tại tế bào Beta đảo tụy để kích thích xuất bào Insulin là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.401 (Hình 30.3)",
        options: [
          "Glucose vào tế bào qua kênh GLUT2 → chuyển hóa làm tăng ATP (tăng tỉ số ATP/ADP) → ĐÓNG kênh K+ nhạy cảm ATP (Kir6.2) → Khử cực màng → Mở kênh Ca2+ phụ thuộc điện thế → Ca2+ vào kích hoạt xuất bào Insulin",
          "Glucose gắn trực tiếp vào thụ thể GPCR trên màng tế bào Beta → tăng cAMP → mở kênh K+ gây ưu phân cực màng",
          "Glucose đi vào tế bào Beta qua kênh GLUT4 phụ thuộc insulin → hoạt hóa bơm Na+/K+-ATPase",
          "Glucose làm mở kênh Cl- gây tăng phân cực màng tế bào Beta"
        ],
        answer: 0,
        explain: "Theo Hình 30.3 Sách Sinh lý YDS 2025 (tr.401): Glucose đi vào tế bào Beta qua GLUT2, được Glucokinase phosphoryl hóa và đi vào đường phân/chu trình Krebs sinh ra ATP. Khi tỉ số ATP/ADP tăng sẽ đóng kênh K+ nhạy cảm ATP (Kir6.2) → K+ bị giữ lại trong tế bào gây khử cực màng → mở kênh Ca2+ nhạy cảm điện thế → Ca2+ tràn vào làm vỡ túi tiết giải phóng Insulin."
      },
      {
        q: "Hai mô đích ngoại biên quan trọng nhất phải phụ thuộc vào Insulin để đưa kênh vận chuyển GLUT4 từ túi nội bào ra gắn lên màng tế bào nhằm thu nhận Glucose là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.402–404",
        options: [
          "Cơ xương (và cơ tim) và Mô mỡ",
          "Tế bào não (neuron) và Hồng cầu",
          "Tế bào biểu mô ống thận và Niêm mạc ruột non",
          "Tế bào thần kinh đệm và Tuyến giáp"
        ],
        answer: 0,
        explain: "Kênh vận chuyển glucose phụ thuộc Insulin là GLUT4, phân bố chủ yếu ở CƠ XƯƠNG (chiếm 75–80% lượng glucose tiêu thụ sau ăn), cơ tim và MÔ MỠ. Khi không có Insulin (và khi cơ đang nghỉ), màng tế bào cơ xương và mô mỡ hầu như không thấm đối với glucose."
      },
      {
        q: "Cơ quan hoặc tế bào nào sau đây thu nhận và sử dụng Glucose từ máu hoàn toàn KHÔNG PHỤ THUỘC vào sự có mặt của Insulin?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 28 & Sách SL 2025 tr.403",
        options: [
          "Tế bào não (neuron hệ thần kinh trung ương)",
          "Tế bào cơ xương lúc đang nghỉ ngơi",
          "Tế bào mỡ trắng (adipocyte)",
          "Tế bào cơ tim"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.403): Các tế bào não (neuron) có kênh GLUT1 và GLUT3 luôn hiện diện sẵn trên màng tế bào nên hoàn toàn KHÔNG phụ thuộc vào Insulin để thu nhận glucose. Não chỉ sử dụng glucose làm nguồn năng lượng chính nên việc duy trì đường huyết không bị hạ dưới 50–70 mg/dL có ý nghĩa sống còn đối với não."
      },
      {
        q: "Tại sao Gan được gọi là 'bộ phận đệm đường huyết' (blood glucose buffer system) quan trọng nhất của cơ thể, còn Cơ xương dù dự trữ rất nhiều glycogen lại không thể trực tiếp giải phóng glucose tự do vào máu lúc đói?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.403",
        options: [
          "Vì chỉ có tế bào Gan mới có enzyme Glucose-6-phosphatase để cắt nhóm phosphate biến Glucose-6-phosphate thành Glucose tự do đi ra máu, còn tế bào Cơ xương không có enzyme này",
          "Vì Cơ xương không có khả năng tổng hợp hay phân giải glycogen",
          "Vì Gan sử dụng kênh GLUT4 còn Cơ xương sử dụng kênh GLUT2",
          "Vì Glucagon chỉ kích thích phân giải glycogen ở Cơ xương mà không tác dụng lên Gan"
        ],
        answer: 0,
        explain: "Sau khi ăn, gan thu nhận 60% glucose chuyển thành glycogen dự trữ. Lúc đói, nhờ tế bào gan có enzyme Glucose-6-phosphatase (cơ xương KHÔNG có enzyme này!), gan mới khử phosphoryl biến G-6-P thành Glucose tự do đưa qua kênh GLUT2 ra máu để giữ ổn định đường huyết cho não."
      },
      {
        q: "Tại tế bào gan, hormon Insulin thúc đẩy quá trình thu nhận và dự trữ Glucose thông qua việc hoạt hóa các enzyme chủ chốt nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.403",
        options: [
          "Hoạt hóa Glucokinase (tăng phosphoryl hóa để bắt giữ glucose trong tế bào gan) và hoạt hóa Glycogen synthase (tăng tổng hợp glycogen), đồng thời ức chế Glucose-6-phosphatase",
          "Hoạt hóa Phosphorylase và Glucose-6-phosphatase để đẩy glucose ra khỏi gan",
          "Hoạt hóa Hormone-sensitive lipase (HSL) để tăng tạo thể ceton tại gan",
          "Đưa kênh GLUT4 lên màng tế bào gan"
        ],
        answer: 0,
        explain: "Tế bào gan dùng kênh GLUT2 (không có GLUT4). Tại gan, Insulin làm tăng thu nhận glucose bằng cách: (1) Hoạt hóa enzyme Glucokinase gắn gốc phosphate vào glucose tạo G-6-P khiến glucose bị giữ chặt trong tế bào gan và tạo khuynh độ cho glucose từ máu tiếp tục khuếch tán vào; (2) Hoạt hóa Glycogen synthase để tổng hợp glycogen; và (3) Ức chế phosphorylase và G-6-Pase."
      },
      {
        q: "Ở bệnh nhân Đái tháo đường típ 1 (thiếu hụt Insulin tuyệt đối do phá hủy tế bào Beta), tại sao lại dễ xảy ra biến chứng Nhiễm toan ceton (DKA)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.404 & 411",
        options: [
          "Khi thiếu Insulin, các mô đích không dùng được glucose phải chuyển sang dùng acid béo; đồng thời enzyme HSL ở mô mỡ thoát khỏi sự ức chế sẽ ly giải mỡ ồ ạt giải phóng quá nhiều acid béo tự do về gan chuyển thành các thể ceton (acetoacetic acid, β-hydroxybutyric acid)",
          "Do thừa Insulin kích thích gan chuyển toàn bộ glucose thành acid lactic",
          "Do tế bào Alpha ngừng tiết Glucagon làm ứ đọng glycogen tại mô mỡ",
          "Do thận tăng tái hấp thu ion HCO3- quá mức"
        ],
        answer: 0,
        explain: "Bình thường Insulin ức chế mạnh enzyme HSL (Hormone-sensitive lipase) trong mô mỡ. Khi thiếu hụt tuyệt đối Insulin (ĐTĐ típ 1) kèm tăng Glucagon: (1) Các mô không lấy được glucose nên phải đốt cháy acid béo; (2) HSL hoạt động mạnh cắt triglyceride mô mỡ giải phóng ồ ạt acid béo tự do vào máu về gan; (3) Tại gan, carnitine đưa acid béo vào ty thể β-oxy hóa tạo quá nhiều Acetyl-CoA vượt quá công suất chu trình Krebs → ngưng tụ thành các ketoacid gây nhiễm toan ceton."
      },
      {
        q: "Yếu tố sinh lý nào đóng vai trò quan trọng và mạnh mẽ nhất trong việc điều hòa (kích thích) tế bào Alpha đảo tụy bài tiết hormon Glucagon?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.408",
        options: [
          "Sự giảm nồng độ Glucose trong máu xuống dưới mức bình thường (< 70 mg/dL)",
          "Sự tăng cao nồng độ Glucose trong máu sau bữa ăn giàu tinh bột",
          "Sự tăng tiết Somatostatin từ tế bào Delta đảo tụy",
          "Sự tăng nồng độ acid béo tự do trong máu"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.408): Nồng độ đường huyết là yếu tố điều hòa bài tiết Glucagon quan trọng nhất, nhưng theo chiều NGƯỢC LẠI hoàn toàn với Insulin: khi đường huyết giảm (< 70 mg/dL, lúc đói/hạ đường huyết) sẽ kích thích tế bào Alpha tăng tiết Glucagon gấp nhiều lần để huy động glucose từ gan; ngược lại khi đường huyết tăng cao sẽ ức chế tiết Glucagon."
      },
      {
        q: "Khi một người ăn một bữa ăn chỉ thuần túy giàu Protein (nhiều acid amin) nhưng không có Carbohydrate, sự bài tiết Insulin và Glucagon sẽ thay đổi như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.406 & 408",
        options: [
          "Cả Insulin và Glucagon đều được tăng bài tiết (Insulin giúp đưa acid amin vào mô để tổng hợp protein, còn Glucagon kích thích gan tân tạo đường để ngăn không cho Insulin làm hạ đường huyết)",
          "Chỉ có Insulin tăng tiết mạnh còn Glucagon giảm xuống bằng 0",
          "Chỉ có Glucagon tăng tiết còn Insulin bị ức chế hoàn toàn",
          "Cả Insulin và Glucagon đều không thay đổi vì không có glucose trong bữa ăn"
        ],
        answer: 0,
        explain: "Các acid amin (đặc biệt là Arginine, Leucine, Alanine) kích thích tiết CẢ Insulin lẫn Glucagon. Đây là sự phối hợp sinh lý tuyệt vời: nếu bữa ăn chỉ toàn đạm mà chỉ tiết Insulin thì glucose máu sẽ bị đẩy vào cơ gây hạ đường huyết nguy hiểm; nhờ tiết đồng thời cả Glucagon nên gan tăng tân tạo glucose giữ đường huyết ổn định trong khi Insulin đưa acid amin vào cơ tổng hợp protein!"
      },
      {
        q: "Cơ chế bệnh sinh chủ yếu của bệnh Đái tháo đường típ 2 (chiếm 90% tổng số bệnh nhân đái tháo đường) là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.411 & Đề SĐH",
        options: [
          "Sự đề kháng Insulin tại các mô đích ngoại biên (cơ xương, gan, mô mỡ) kết hợp với sự suy giảm bài tiết Insulin tương đối của tế bào Beta",
          "Sự phá hủy hoàn toàn 100% tế bào Beta đảo tụy ngay từ tuổi thiếu niên do kháng thể tự miễn",
          "Sự thiếu hụt hoàn toàn các thụ thể Glucagon tại tế bào gan",
          "Sự tăng hoạt động quá mức của kênh GLUT4 ở mô mỡ gây hạ đường huyết"
        ],
        answer: 0,
        explain: "Khác với ĐTĐ típ 1 (thiếu insulin tuyệt đối do tự miễn), ĐTĐ típ 2 (chiếm ~90%, thường gắn liền với béo phì, thừa mỡ nội tạng) khởi phát bởi tình trạng ĐỀ KHÁNG INSULIN tại mô đích (giảm tín hiệu sau thụ thể tyrosine kinase và giảm đưa GLUT4 lên màng cơ/mỡ, gan không ngừng sản xuất glucose). Giai đoạn đầu tế bào Beta tăng tiết insulin bù trừ, về sau tế bào Beta kiệt sức gây thiếu insulin tương đối."
      },
      {
        q: "Ngoài việc kích thích bởi Insulin, hoạt động sinh lý nào sau đây có thể trực tiếp kích thích đưa các túi chứa kênh GLUT4 ra gắn lên màng tế bào cơ xương để tăng thu nhận Glucose mà KHÔNG CẦN đến Insulin?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.403",
        options: [
          "Sự co cơ khi tập luyện, vận động thể lực",
          "Giấc ngủ sâu vào ban đêm",
          "Sự tăng tiết hormon Cortisol và GH khi stress",
          "Sự kích thích thần kinh giao cảm α1 gây co mạch"
        ],
        answer: 0,
        explain: "Khi cơ xương co bóp trong lúc vận động thể lực (thông qua hoạt hóa enzyme AMPK và tăng Ca2+ nội cơ), các sợi cơ tự động huy động các túi chứa kênh GLUT4 di chuyển ra gắn lên màng tế bào cơ để lấy glucose từ máu vào cơ mà KHÔNG cần có Insulin! Đây chính là cơ sở sinh lý vì sao tập thể dục đều đặn giúp kiểm soát đường huyết rất hiệu quả ở bệnh nhân đái tháo đường."
      }
    ]
  },

  // ========================================================================
  // BÀI 16: SINH LÝ TỦY GAI
  // ========================================================================
  {
    id: 16,
    group: "VII. SINH LÝ THẦN KINH",
    title: "Bài 16: Sinh lý tủy gai",
    shortTitle: "Sinh lý tủy gai",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 42 (tr.578–591)",
    summary: "Định luật Magendie, cung phản xạ tủy 5 thành phần, phản xạ căng cơ / phản xạ gân (thoi cơ, cung 2 neuron 1 synapse, định khu C5-S2), phản xạ gân Golgi (3 neuron), phản xạ gấp & duỗi chéo, 4 quy luật phản xạ tủy, các bó dẫn truyền cảm giác lên (Goll-Burdach, Gai-đồi thị, Flechsig-Gowers), các bó vận động xuống (Bó tháp, Ngoại tháp), hiện tượng choáng tủy và phân biệt tổn thương UMN vs LMN.",
    simId: "sim_spinal_cord",
    simTitle: "Mô phỏng Mặt cắt ngang Tủy gai (Các Bó Dẫn truyền Cảm giác / Vận động), Cung Phản xạ Gân (C5–S2) & Tổn thương UMN vs LMN",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🦴 1. Cấu trúc Chức năng, Luật Magendie & Cung Phản xạ Tủy</div>
          <ul class="theory-list">
            <li><strong>Định luật Bell – Magendie (Phân công Rễ trước & Rễ sau tủy gai):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Rễ sau (Rễ lưng – có hạch gai):</strong> Chỉ dẫn truyền xung động <strong>CẢM GIÁC hướng tâm</strong> từ ngoại biên vào <strong>Sừng sau</strong> chất xám tủy gai. (Cắt đứt rễ sau gây mất toàn bộ cảm giác vùng tương ứng).</li>
                <li><strong>Rễ trước (Rễ bụng):</strong> Chỉ dẫn truyền xung động <strong>VẬN ĐỘNG ly tâm</strong> từ <strong>Sừng trước</strong> (neuron vận động α chi phối sợi cơ vân ngoài thoi; neuron vận động γ chi phối sợi cơ trong thoi cơ) và từ <strong>Sừng bên</strong> (neuron tiền hạch tự chủ: giao cảm T₁–L₃, đối giao cảm S₂–S₄) đi ra cơ quan đáp ứng. (Cắt rễ trước gây liệt mềm vùng cơ tương ứng).</li>
              </ul>
            </li>
            <li><strong>Động vật tủy (Spinal animal) & Thí nghiệm Trương lực cơ (Brondgeest):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Để nghiên cứu chức năng thuần túy của tủy gai thoát khỏi sự chi phối của não bộ, người ta cắt ngang tủy <strong>phía dưới Hành não</strong> (phải hô hấp nhân tạo ở động vật cấp cao).</li>
                <li><strong>Trương lực cơ bản chất là một phản xạ tủy</strong> duy trì liên tục nhờ xung cảm giác từ thoi cơ đi qua rễ sau vào sừng trước (khi cắt đứt rễ sau hoặc phá tủy thì trương lực cơ biến mất hoàn toàn!).</li>
              </ul>
            </li>
            <li><strong>Cung phản xạ tủy (5 thành phần bắt buộc):</strong>
              <br/><code>(1) Bộ phận nhận cảm (Thụ thể) → (2) Sợi thần kinh hướng tâm (qua Rễ sau) → (3) Trung ương thần kinh (Chất xám tủy gai) → (4) Sợi thần kinh ly tâm (qua Rễ trước) → (5) Cơ quan đáp ứng (Cơ / Tuyến)</code>.
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">⚡ 4 Quy luật Phản xạ Tủy của Pflüger (Khi tăng dần cường độ kích thích)</div>
            <ol style="padding-left:18px;">
              <li><strong>Quy luật Một bên:</strong> Kích thích nhẹ một chi → chỉ co cơ ở chi bị kích thích.</li>
              <li><strong>Quy luật Đối xứng:</strong> Kích thích vừa → co cả chi đối diện cùng tầng tủy.</li>
              <li><strong>Quy luật Khuếch tán:</strong> Kích thích mạnh hơn → lan truyền đến các tầng tủy khác (luôn ưu tiên lan <strong>từ sau ra trước ở cùng một bên</strong>).</li>
              <li><strong>Quy luật Toàn thể:</strong> Kích thích rất mạnh → co toàn bộ cơ khắp cơ thể.</li>
            </ol>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🔨 2. Các Phản xạ Tủy & Bảng Định khu Lâm sàng (Cực kỳ hay thi!)</div>
          <ul class="theory-list">
            <li><strong>1. Phản xạ Căng cơ / Phản xạ Gân xương (Stretch reflex / Myotatic reflex):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Đặc điểm độc nhất:</strong> Là phản xạ duy nhất trong cơ thể có cung phản xạ <strong>chỉ gồm 2 NEURON và 1 SYNAPSE (Đơn synapse)</strong> → thời gian tiềm tàng cực ngắn (<strong>0,5 – 0,9 ms</strong> tại synapse).</li>
                <li><strong>Cung phản xạ:</strong> Gõ lên gân làm cơ bị kéo căng → kích thích <strong>THOI CƠ (Muscle spindle)</strong> → xung truyền theo sợi hướng tâm <strong>Ia</strong> (dẫn truyền rất nhanh 70–120 m/s) qua rễ sau vào sừng trước → tiếp hợp trực tiếp với <strong>Neuron vận động Alpha (α)</strong> → làm co chính cơ vừa bị kéo căng đó (đồng thời qua 1 neuron trung gian ức chế làm giãn cơ đối kháng – <em>ức chế đối lập</em>).</li>
                <li><em>Bẫy đề thi SĐH YDS:</em> So sánh đồ thị co cơ phản xạ gân ở <strong>Động vật tủy</strong> vs <strong>Động vật bình thường (nguyên vẹn não)</strong>: Ở động vật tủy, phản xạ gân <strong>có biên độ MẠNH nhưng chỉ có 1 LẦN CO (co pha)</strong>; còn ở động vật bình thường thì <strong>biên độ THẤP HƠN nhưng có 2 LẦN CO</strong> (lần co thứ 2 là co trương lực do trung tâm ở não giữa chi phối!).</li>
              </ul>
            </li>
            <li><strong>2. Phản xạ Gân Golgi (Phản xạ căng ngược / Ức chế tự sinh – Autogenic inhibition):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Gồm <strong>3 Neuron, 2 Synapse</strong>: Khi cơ co quá mạnh làm căng <strong>Thụ thể Golgi ở GÂN</strong> → xung theo sợi <strong>Ib</strong> vào tủy kích thích <strong>Neuron trung gian ức chế</strong> → ức chế neuron vận động α làm <strong>GIÃN CƠ đột ngột</strong> để bảo vệ gân cơ không bị đứt rách!</li>
              </ul>
            </li>
            <li><strong>3. Phản xạ Gấp (Rút lui) & Phản xạ Duỗi chéo (Đa synapse, 3–5 ms):</strong> Khi kích thích đau ở một chi → chi đó <strong>gấp lại</strong> (rút lui khỏi tác nhân gây đau) đồng thời chi đối diện <strong>duỗi ra</strong> để đỡ trọng lượng cơ thể. Có hiện tượng <strong>tập cộng</strong>, <strong>triệt bớt (occlusion)</strong>, <strong>phóng xung hậu mãi (after-discharge)</strong> và <strong>ức chế quặt ngược qua tế bào Renshaw</strong>.</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tên Phản xạ Lâm sàng</th>
                  <th>Đáp ứng Vận động Đúng</th>
                  <th>Trung khu Định khu Tủy gai (Phải thuộc lòng!)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Phản xạ gân cơ nhị đầu cánh tay</strong></td>
                  <td>Co cơ nhị đầu gây <strong>Gấp cẳng tay</strong></td>
                  <td><strong>Tủy cổ C₅ – C₆</strong></td>
                </tr>
                <tr>
                  <td><strong>2. Phản xạ gân cơ tam đầu cánh tay</strong></td>
                  <td>Co cơ tam đầu gây <strong>Duỗi cẳng tay</strong></td>
                  <td><strong>Tủy cổ C₇ – C₈</strong> (C₆–C₈)</td>
                </tr>
                <tr>
                  <td><strong>3. Phản xạ gân xương bánh chè (gân gối)</strong></td>
                  <td>Co cơ tứ đầu đùi gây <strong>DUỖI cẳng chân (hất cẳng chân ra trước)</strong></td>
                  <td><strong>Tủy thắt lưng L₃ – L₄</strong> (L₂–L₄)</td>
                </tr>
                <tr>
                  <td><strong>4. Phản xạ gân gót (Gân Achilles)</strong></td>
                  <td>Co cơ tam đầu cẳng chân gây <strong>Duỗi (gấp lòng) bàn chân</strong></td>
                  <td><strong>Tủy cùng S₁ – S₂</strong></td>
                </tr>
                <tr>
                  <td><strong>5. Các Phản xạ Da (Đa synapse)</strong></td>
                  <td>• Da bụng trên / giữa / dưới (D₇–D₁₂)<br/>• Da bìu (L₁–L₂); Hậu môn (S₃); <strong>Da lòng bàn chân / Babinski (L₅ – S₁)</strong></td>
                  <td>Da bụng: <strong>T₇ – T₁₂ (D₁₁–D₁₂)</strong><br/>Da bìu: <strong>L₁ – L₂</strong><br/>Lòng bàn chân: <strong>L₅ – S₁</strong></td>
                </tr>
                <tr>
                  <td><strong>6. Phản xạ Tủy Tự chủ</strong></td>
                  <td>• <strong>Tiểu tiện (Bàng quang): S₃ – S₅ (S₂–S₄)</strong><br/>• <strong>Đại tiện (Trực tràng): L – S₅</strong>; Cương sinh dục.</td>
                  <td><em>Bẫy thi:</em> <strong>Phản xạ chớp mắt (dây V–VII) và ho/hắt hơi là phản xạ của THÂN NÃO (cầu-hành não), KHÔNG phải phản xạ tủy!</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🛤️ 3. Chức năng Dẫn truyền của Chất Trắng Tủy Gai (Đường Lên & Đường Xuống)</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">A. Các Đường Cảm giác Hướng tâm (Đường Lên)</h4>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tên Bó dẫn truyền</th>
                  <th>Loại Cảm giác</th>
                  <th>Vị trí Bắt chéo sang Đối bên (Rất hay thi!)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Bó Thon (Goll) & Bó Chêm (Burdach)</strong><br/><em>(Ở Cột trắng sau)</em></td>
                  <td>• <strong>Cảm giác sâu có ý thức</strong> (vị thế, vận động khớp, rung âm thoa).<br/>• <strong>Xúc giác tinh tế</strong> (phân biệt 2 điểm, nhận biết đồ vật).</td>
                  <td>Đi ở cột trắng sau <strong>CÙNG BÊN</strong> lên đến <strong>HÀNH NÃO</strong> (nhân thon, nhân chêm) rồi <strong>Neuron II mới BẮT CHÉO tại Hành não</strong> (tạo dải Reil giữa) lên đồi thị → vỏ não. (Tổn thương gây bệnh Tabès, <strong>mất thăng bằng khi nhắm mắt – dấu Romberg (+)</strong>).</td>
                </tr>
                <tr>
                  <td><strong>2. Bó Gai - Đồi thị Bên & Trước</strong><br/><em>(Hệ thống trước-bên)</em></td>
                  <td>• <strong>Bó Gai - Đồi thị Bên:</strong> Cảm giác <strong>Đau và Nhiệt độ (Nóng/Lạnh)</strong>.<br/>• <strong>Bó Gai - Đồi thị Trước:</strong> Cảm giác <strong>Xúc giác thô sơ</strong> (áp lực, ngứa, nhột).</td>
                  <td>Neuron I vào sừng sau tiếp hợp Neuron II → <strong>Neuron II BẮT CHÉO NGAY TẠI TỦY GAI</strong> (qua mép trắng trước) sang cột trắng bên/trước đối diện rồi mới đi lên đồi thị!</td>
                </tr>
                <tr>
                  <td><strong>3. Bó Gai - Tiểu não Thẳng (Flechsig) & Chéo (Gowers)</strong></td>
                  <td><strong>Cảm giác sâu KHÔNG có ý thức</strong> (trương lực cơ từ thoi cơ, gân Golgi).</td>
                  <td>• <strong>Bó Flechsig (Sau/Thẳng):</strong> Đi <strong>cùng bên</strong> qua cuống tiểu não dưới vào <strong>Tiểu não cùng bên</strong>.<br/>• <strong>Bó Gowers (Trước/Chéo):</strong> Bắt chéo ở tủy rồi bắt chéo lại ở cuống tiểu não trên để về <strong>Tiểu não cùng bên</strong>!</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">B. Các Đường Vận động Ly tâm (Đường Xuống) & Tổn thương Tủy</h4>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Hệ thống</th>
                  <th>Các Bó chính & Nơi xuất phát chuẩn YDS</th>
                  <th>Chức năng & Vị trí bắt chéo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1. Đường Tháp (Bó Vỏ - Gai)</strong></td>
                  <td>Xuất phát từ <strong>Vỏ não vận động (vùng 4, 6, tế bào tháp Betz)</strong>:<br/>
                  • <strong>Bó tháp chéo (80–90%):</strong> Bắt chéo ở hành não xuống cột trắng bên.<br/>
                  • <strong>Bó tháp thẳng (10–20%):</strong> Đi ở cột trắng trước rồi bắt chéo ở từng tầng tủy.</td>
                  <td>Chi phối <strong>VẬN ĐỘNG TÙY Ý, khéo léo</strong> của <strong>nửa người ĐỐI BÊN</strong>.</td>
                </tr>
                <tr>
                  <td><strong>2. Đường Ngoại tháp</strong></td>
                  <td>
                    • <strong>Bó Đỏ - Gai:</strong> Từ <strong>Nhân đỏ ở Cuống đại não (Não giữa)</strong> (bắt chéo ngay não giữa).<br/>
                    • <strong>Bó Mái - Gai:</strong> Từ <strong>Củ não sinh tư (Lồi não trên của Não giữa)</strong>! (<em>Bẫy đề thi SĐH:</em> Câu nói bó mái-gai xuất phát từ tiểu não là <strong>SAI</strong>!).<br/>
                    • <strong>Bó Tiền đình - Gai:</strong> Từ nhân tiền đình <strong>Hành não</strong> (đi cùng bên, tăng trương lực cơ duỗi).<br/>
                    • <strong>Bó Lưới - Gai</strong> (cầu não & hành não) & <strong>Bó Trám - Gai</strong> (hành não).
                  </td>
                  <td>Chi phối <strong>VẬN ĐỘNG KHÔNG TÙY Ý</strong>: điều hòa <strong>trương lực cơ, tư thế, chỉnh thế và phối hợp thăng bằng</strong>.</td>
                </tr>
              </tbody>
            </table>
            </div>
            <div class="callout trap">
              <div class="callout-title">⚠️ Choáng tủy, Hội chứng Brown-Séquard & Phân biệt UMN vs LMN</div>
              <ul>
                <li><strong>Hiện tượng Choáng tủy (Spinal shock):</strong> Ngay sau khi đứt ngang tủy (dưới C₄, còn nếu cắt ở <strong>C₁–C₂ sẽ gây liệt hô hấp tử vong ngay!</strong>), toàn bộ phần cơ thể dưới chỗ cắt bị <strong>mất hoàn toàn vận động, mất mọi cảm giác, mất toàn bộ phản xạ và mất trương lực cơ (liệt mềm), tụt HA, bí tiểu</strong> (ở người kéo dài <strong>2 – 3 tuần</strong>). Sau giai đoạn choáng tủy, các phản xạ tủy tự động phục hồi và trở nên <strong>TĂNG PHẢN XẠ, TĂNG TRƯƠNG LỰC CƠ (Liệt cứng)</strong> do thoát khỏi sự ức chế thường trực của vỏ não/thân não!</li>
                <li><strong>Đứt nửa bên tủy (Hội chứng Brown-Séquard):</strong> Dưới chỗ tổn thương:
                  <br/>• <strong>CÙNG BÊN tổn thương:</strong> Liệt vận động + Mất cảm giác sâu có ý thức & xúc giác tinh tế (do bó tháp chéo và bó Goll-Burdach đi cùng bên ở tủy).
                  <br/>• <strong>ĐỐI BÊN tổn thương:</strong> Mất cảm giác <strong>Đau và Nhiệt độ</strong> (do bó gai-đồi thị bên đã bắt chéo ngay tại tủy!).
                </li>
                <li><strong>Tổn thương Neuron vận động trên (UMN – Bó tháp) vs Neuron vận động dưới (LMN – Sừng trước tủy/Rễ trước):</strong>
                  <br/>• <strong>UMN:</strong> <strong>Liệt cứng (Tăng trương lực cơ), Tăng phản xạ gân xương, Dấu Babinski dương tính (+)</strong> (ngón cái duỗi lên), không teo cơ sớm.
                  <br/>• <strong>LMN:</strong> <strong>Liệt mềm (Giảm/mất trương lực cơ), Giảm/mất phản xạ gân xương, Teo cơ nhanh và Rung giật bó cơ</strong>, Babinski âm tính.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Theo định luật Bell - Magendie về sự phân công chức năng của các rễ thần kinh tủy gai, phát biểu nào sau đây là ĐÚNG?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.579",
        options: [
          "Rễ sau (rễ lưng) chỉ dẫn truyền các xung động cảm giác hướng tâm vào tủy; Rễ trước (rễ bụng) chỉ dẫn truyền các xung động vận động (và tự chủ) ly tâm ra khỏi tủy",
          "Rễ sau dẫn truyền xung vận động ly tâm; Rễ trước dẫn truyền xung cảm giác hướng tâm",
          "Cả rễ trước và rễ sau đều là các rễ hỗn hợp chứa cả sợi cảm giác lẫn sợi vận động",
          "Khi cắt đứt rễ sau sẽ gây liệt cơ hoàn toàn nhưng vẫn còn nguyên cảm giác đau"
        ],
        answer: 0,
        explain: "Định luật Magendie khẳng định: Rễ sau (có hạch gai chứa thân neuron cảm giác chữ T) hoàn toàn là rễ cảm giác hướng tâm đi vào sừng sau; còn Rễ trước hoàn toàn là rễ vận động ly tâm (từ sừng trước đến cơ vân và từ sừng bên đến hạch tự chủ)."
      },
      {
        q: "Khi thực hiện phản xạ gân xương bánh chè (gõ búa phản xạ lên gân cơ tứ đầu đùi ngay dưới xương bánh chè), đáp ứng vận động bình thường và trung khu định khu của phản xạ này ở đoạn tủy nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 30 & Sách SL 2025 tr.582",
        options: [
          "Co cơ tứ đầu đùi làm DUỖI cẳng chân (hất cẳng chân ra trước); trung khu ở đoạn tủy thắt lưng L3 – L4",
          "Co cơ nhị đầu đùi làm GẤP cẳng chân vào đùi; trung khu ở đoạn tủy thắt lưng L3 – L4",
          "Co cơ tam đầu cẳng chân làm duỗi bàn chân; trung khu ở đoạn tủy cùng S1 – S2",
          "Co cơ tứ đầu đùi làm duỗi cẳng chân; trung khu ở đoạn tủy ngực T10 – T12"
        ],
        answer: 0,
        explain: "Đây là câu hỏi bẫy trong đề thi SĐH YDS (nhiều thí sinh nhầm là 'gấp cẳng chân'): Gân bánh chè là gân của cơ tứ đầu đùi (cơ duỗi gối). Khi gõ vào gân bánh chè làm căng thoi cơ tứ đầu đùi, phản xạ làm co cơ tứ đầu đùi gây DUỖI CẲNG CHÂN (hất cẳng chân về phía trước), có trung khu ở đoạn tủy L3 – L4. (Còn phản xạ gân gót Achilles ở S1 – S2; cơ nhị đầu cánh tay ở C5 – C6; cơ tam đầu cánh tay ở C7 – C8)."
      },
      {
        q: "Khi so sánh đồ thị ghi co cơ của phản xạ gân (phản xạ căng cơ) giữa 'động vật tủy' (đã cắt ngang tủy dưới hành não, sau khi hết choáng tủy) và 'động vật bình thường' (còn nguyên vẹn não bộ), sự khác biệt điển hình là gì?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 31 & Sách SL 2025 tr.582",
        options: [
          "Ở động vật tủy phản xạ gân có biên độ MẠNH nhưng chỉ có 1 LẦN CO; còn ở động vật bình thường phản xạ gân có biên độ THẤP HƠN nhưng có 2 LẦN CO (lần co thứ hai là co trương lực do não giữa chi phối)",
          "Ở động vật tủy phản xạ gân có 2 lần co và biên độ rất yếu; ở động vật bình thường chỉ có 1 lần co",
          "Ở động vật tủy hoàn toàn không bao giờ có phản xạ gân xương",
          "Đồ thị phản xạ gân ở động vật tủy và động vật bình thường giống hệt nhau"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 42, tr.582): Ở động vật tủy, do thoát khỏi sự ức chế của não bộ nên phản xạ gân xảy ra rất MẠNH (biên độ cao) nhưng chỉ gồm 1 lần co duy nhất (co pha). Trong khi đó ở động vật bình thường, do có sự kiểm soát của não bộ nên biên độ thấp hơn và có 2 ĐỈNH CO (đỉnh 1 là co pha do tủy, đỉnh 2 nối tiếp là co trương lực do trung tâm ở não giữa)."
      },
      {
        q: "Phản xạ nào sau đây KHÔNG PHẢI là phản xạ có trung khu nằm ở tủy gai?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 29",
        options: [
          "Phản xạ giác mạc / phản xạ chớp mắt (và phản xạ ho, hắt hơi, nuốt)",
          "Phản xạ gân gót (Achilles) và phản xạ gân xương bánh chè",
          "Phản xạ da bụng, phản xạ da bìu và phản xạ da lòng bàn chân",
          "Phản xạ tiểu tiện (bàng quang S3–S5), phản xạ đại tiện và phản xạ tiết mồ hôi"
        ],
        answer: 0,
        explain: "Phản xạ chớp mắt (giác mạc) có đường hướng tâm qua dây V và đường ly tâm qua dây VII với trung khu nằm ở CẦU NÃO (thân não). Tương tự, phản xạ ho, hắt hơi, nuốt, nôn có trung khu ở HÀNH NÃO. Tất cả các phản xạ còn lại (gân xương, da bụng/bìu/lòng bàn chân, tiểu tiện, đại tiện, tiết mồ hôi) đều có trung khu ở chất xám tủy gai."
      },
      {
        q: "Phát biểu nào sau đây là SAI khi nói về nguồn gốc xuất phát của các bó dẫn truyền vận động thuộc hệ thống ngoại tháp?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 32",
        options: [
          "Bó mái - gai (Tectospinal tract) xuất phát từ vỏ tiểu não",
          "Bó đỏ - gai (Rubrospinal tract) xuất phát từ nhân đỏ ở cuống đại não (não giữa)",
          "Bó tiền đình - gai (Vestibulospinal tract) xuất phát từ nhân tiền đình ở hành não",
          "Bó lưới - gai (Reticulospinal tract) xuất phát từ cấu tạo lưới của cầu não và hành não"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 42, tr.589): Bó mái - gai (Tectospinal tract) xuất phát từ CỦ NÃO SINH TƯ (lồi não trên / mái trung não của NÃO GIỮA) để điều khiển phản xạ quay đầu và mắt theo kích thích thị giác/thính giác, chứ KHÔNG phải xuất phát từ tiểu não! (Tiểu não không có bó dẫn truyền trực tiếp xuống tủy gai mà phải qua nhân đỏ, nhân tiền đình và cấu tạo lưới)."
      },
      {
        q: "Cung phản xạ căng cơ (phản xạ gân xương) có đặc điểm cấu trúc và bộ phận nhận cảm nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.581",
        options: [
          "Bộ phận nhận cảm là Thoi cơ (Muscle spindle); cung phản xạ chỉ gồm 2 neuron và 1 synapse (đơn synapse) nên có thời gian tiềm tàng rất ngắn",
          "Bộ phận nhận cảm là Thụ thể Golgi ở gân; cung phản xạ gồm 3 neuron và 2 synapse gây giãn cơ",
          "Bộ phận nhận cảm là tiểu thể Pacini ở dưới da; cung phản xạ đa synapse",
          "Bộ phận nhận cảm là các đầu tận cùng thần kinh tự do cảm nhận đau"
        ],
        answer: 0,
        explain: "Phản xạ căng cơ (phản xạ gân) là phản xạ đơn synapse duy nhất trong cơ thể: (1) Bộ phận nhận cảm là Thoi cơ nằm song song với các sợi cơ vân; (2) Neuron hướng tâm là sợi Ia đi qua rễ sau vào thẳng sừng trước; (3) Tiếp hợp trực tiếp (1 synapse) với neuron vận động α đi ra làm co cơ vân ngoài thoi."
      },
      {
        q: "Hai bó thon (bó Goll) và bó chêm (bó Burdach) nằm ở cột trắng sau của tủy gai có chức năng dẫn truyền loại cảm giác nào và bắt chéo sang bên đối diện tại đâu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.587",
        options: [
          "Dẫn truyền cảm giác sâu có ý thức và xúc giác tinh tế (phân biệt 2 điểm); đi cùng bên ở tủy gai lên đến HÀNH NÃO mới bắt chéo sang bên đối diện",
          "Dẫn truyền cảm giác đau và nhiệt độ; bắt chéo ngay tại từng tầng tủy gai",
          "Dẫn truyền cảm giác sâu không có ý thức lên vỏ tiểu não cùng bên",
          "Dẫn truyền vận động tùy ý từ vỏ não xuống sừng trước tủy gai"
        ],
        answer: 0,
        explain: "Bó thon (Goll - nhận từ nửa dưới cơ thể) và bó chêm (Burdach - nhận từ nửa trên cơ thể) đi ở cột trắng sau CÙNG BÊN lên tới nhân thon và nhân chêm ở HÀNH NÃO; tại hành não neuron thứ II mới bắt chéo sang đối bên (tạo dải Reil giữa) đi lên đồi thị. Chức năng của chúng là dẫn truyền cảm giác sâu có ý thức (bản thể, vị thế khớp, rung) và xúc giác tinh tế."
      },
      {
        q: "Một bệnh nhân bị chấn thương đứt ngang một nửa bên phải của tủy gai ở đoạn ngực T10 (Hội chứng Brown - Séquard). Các triệu chứng thần kinh ở phần cơ thể phía dưới chỗ tổn thương (hai chân) sẽ biểu hiện như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.587–590",
        options: [
          "Chân bên PHẢI (cùng bên) bị liệt vận động và mất cảm giác sâu có ý thức / xúc giác tinh tế; Chân bên TRÁI (đối bên) bị mất cảm giác đau và nhiệt độ",
          "Chân bên PHẢI chỉ mất cảm giác đau nhiệt; Chân bên TRÁI bị liệt vận động hoàn toàn",
          "Cả hai chân đều mất hoàn toàn mọi cảm giác nhưng vẫn vận động bình thường",
          "Chân bên TRÁI bị mất cảm giác sâu có ý thức và liệt vận động"
        ],
        answer: 0,
        explain: "Trong hội chứng đứt nửa tủy Brown-Séquard: (1) Ở CÙNG BÊN tổn thương (bên phải): đứt bó tháp chéo (đã bắt chéo từ hành não xuống) gây liệt vận động cùng bên, và đứt bó Goll-Burdach (chưa bắt chéo) gây mất cảm giác sâu có ý thức & xúc giác tinh tế cùng bên; (2) Ở ĐỐI BÊN tổn thương (bên trái): mất cảm giác ĐAU và NHIỆT ĐỘ vì bó gai - đồi thị bên dẫn truyền đau/nhiệt từ chân trái đã bắt chéo ngay tại tủy sang cột trắng bên phải!"
      },
      {
        q: "Nếu một chấn thương làm đứt ngang hoàn toàn tủy gai ở đoạn cổ cao C1 – C2 (phía trên C3 – C5), nạn nhân sẽ tử vong ngay lập tức nếu không được cấp cứu máy thở vì lý do gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.580 & 590",
        options: [
          "Vì đường dẫn truyền từ trung tâm hô hấp ở hành não xuống nhân dây thần kinh hoành (C3 – C5) và các cơ liên sườn bị cắt đứt hoàn toàn, gây liệt cơ hoành và ngưng thở",
          "Vì nút xoang của tim nằm ở đoạn tủy C1 – C2 bị phá hủy",
          "Vì làm đứt toàn bộ dây thần kinh lang thang (dây X) đi xuống tim",
          "Vì gây chảy máu hết toàn bộ dịch não tủy"
        ],
        answer: 0,
        explain: "Trung tâm phát nhịp hô hấp nằm ở Hành não, truyền xung vận động xuống sừng trước tủy cổ C3 – C5 (nơi xuất phát dây thần kinh hoành chi phối cơ hoành - cơ hô hấp quan trọng nhất) và tủy ngực T1 – T11 (cơ liên sườn). Đứt ngang tủy ở C1 – C2 cắt đứt hoàn toàn lệnh từ hành não xuống C3 – C5 gây liệt toàn bộ các cơ hô hấp."
      },
      {
        q: "Khi phân biệt trên lâm sàng giữa tổn thương Neuron vận động trên (UMN - tổn thương bó tháp) và tổn thương Neuron vận động dưới (LMN - tổn thương tế bào vận động sừng trước tủy gai như trong bệnh bại liệt / xơ cột bên teo cơ), đặc điểm nào sau đây là ĐÚNG?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.590",
        options: [
          "Tổn thương UMN (sau giai đoạn choáng) gây liệt cứng (tăng trương lực cơ), tăng phản xạ gân xương và dấu Babinski (+); còn tổn thương LMN gây liệt mềm (mất trương lực cơ), mất phản xạ gân xương và teo cơ nhanh",
          "Tổn thương UMN gây liệt mềm, mất phản xạ gân xương và teo cơ rất nhanh; còn tổn thương LMN gây liệt cứng và Babinski (+)",
          "Cả tổn thương UMN và LMN đều gây mất vĩnh viễn phản xạ gân xương và dấu Babinski (+)",
          "Tổn thương sừng trước tủy gai (LMN) chỉ gây mất cảm giác chứ không gây liệt cơ"
        ],
        answer: 0,
        explain: "Tế bào vận động α ở sừng trước tủy gai là 'con đường chung cuối cùng' (Neuron vận động dưới - LMN) trực tiếp chi phối và nuôi dưỡng cơ vân: khi tổn thương LMN, cung phản xạ tủy bị đứt hoàn toàn → Liệt mềm, mất trương lực cơ, mất phản xạ gân xương và teo cơ nhanh. Ngược lại, khi tổn thương bó tháp (UMN), cung phản xạ tủy ở dưới vẫn còn nguyên và thoát khỏi sự ức chế của vỏ não → Liệt cứng, tăng trương lực cơ, tăng phản xạ gân xương và xuất hiện dấu Babinski (+)."
      },
      {
        q: "Hiện tượng 'triệt bớt' (occlusion) trong phản xạ gấp đa synapse của tủy gai xảy ra trong điều kiện kích thích nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.584",
        options: [
          "Khi kích thích ĐỒNG THỜI hai dây thần kinh cảm giác hướng tâm với cường độ TRÊN NGƯỠNG (tối đa), lực co cơ thu được nhỏ hơn tổng lực co khi kích thích riêng lẻ từng dây (do hai dây dùng chung một số neuron vận động)",
          "Khi kích thích đồng thời hai dây cảm giác với cường độ DƯỚI NGƯỠNG, lực co cơ lớn hơn tổng từng dây",
          "Khi cắt đứt toàn bộ rễ trước của tủy gai",
          "Khi kích thích liên tục làm cơ bị mỏi do cạn kiệt ATP"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.584): Trong trườngneuron của tủy gai, hai sợi hướng tâm A và B có một vùng neuron vận động chồng lấp dùng chung. Nếu kích thích A và B ở mức DƯỚI NGƯỠNG → gây hiện tượng TẬP CỘNG (Spatial summation: R(A+B) > RA + RB). Nhưng nếu kích thích cả A và B ở mức TRÊN NGƯỠNG (tối đa), vì các neuron vùng chồng lấp chỉ có thể hưng phấn 1 lần nên R(A+B) < RA + RB → gọi là hiện tượng TRIỆT BỚT (Occlusion)."
      },
      {
        q: "Trong giai đoạn ngay sau khi bị đứt ngang tủy gai hoàn toàn (giai đoạn Choáng tủy - kéo dài khoảng 2 đến 3 tuần ở người), các phản xạ và trương lực cơ ở phần cơ thể dưới chỗ cắt có biểu hiện như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.590",
        options: [
          "Mất hoàn toàn mọi phản xạ tủy (cả phản xạ gân xương lẫn phản xạ tự chủ), mất trương lực cơ (liệt mềm) và tụt huyết áp; sau 2 – 3 tuần các phản xạ tủy mới phục hồi dần và trở nên tăng phản xạ",
          "Tăng ngay lập tức phản xạ gân xương và co cứng cơ tối đa ngay từ giây đầu tiên sau đứt tủy",
          "Các phản xạ tiểu tiện và đại tiện vẫn hoạt động theo ý muốn bình thường",
          "Chỉ mất cảm giác đau còn vận động tùy ý vẫn bình thường"
        ],
        answer: 0,
        explain: "Ở người, các neuron tủy gai bình thường luôn nhận một luồng xung kích thích nền liên tục từ các trung tâm cao hơn ở não bộ. Khi đứt ngang tủy đột ngột, sự mất nguồn kích thích nền này gây ra hiện tượng CHOÁNG TỦY (Spinal shock) kéo dài 2–3 tuần: mọi phản xạ xương khớp và tự chủ dưới chỗ cắt đều bị tắt hoàn toàn (liệt mềm, mất phản xạ, bí tiểu, giãn mạch tụt HA). Sau vài tuần, các neuron tủy tự tăng tính hưng phấn (và tăng nhạy cảm thụ thể) làm phản xạ tủy hồi phục và tăng mạnh (liệt cứng)."
      }
    ]
  },

  // ========================================================================
  // BÀI 17: SINH LÝ HỆ THẦN KINH TỰ CHỦ
  // ========================================================================
  {
    id: 17,
    group: "VII. SINH LÝ THẦN KINH",
    title: "Bài 17: Sinh lý hệ thần kinh tự chủ",
    shortTitle: "Hệ thần kinh tự chủ",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 51 (tr.653–665)",
    summary: "Giải phẫu so sánh Giao cảm (sừng bên T1-L3, hạch cạnh sống/hạch sao & hạch trước sống/hạch tạng) vs Đối giao cảm (dây III, VII, IX, X và S2-S4, hạch nằm sát/trong thành tạng), chất dẫn truyền ACh vs Norepinephrine, Tủy thượng thận (80% Epinephrine, 20% Norepinephrine), thụ thể Nicotinic, Muscarinic, Alpha (α1, α2), Beta (β1, β2), tác dụng trên các cơ quan đích và hiện tượng tăng nhạy cảm sau cắt thần kinh (Denervation supersensitivity).",
    simId: "sim_ans_control",
    simTitle: "Bảng Điều khiển Tương tác Hệ Thần kinh Tự chủ (Giao cảm α1, β1, β2 vs Đối giao cảm M) & Thử nghiệm Dược lý trên Cơ quan Đích",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🕸️ 1. Giải phẫu Chức năng: Hệ Giao cảm vs Hệ Đối giao cảm</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Đặc điểm so sánh</th>
                  <th>Hệ Giao cảm (Sympathetic)</th>
                  <th>Hệ Đối giao cảm (Phó giao cảm / Parasympathetic)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trung khu thần kinh</strong></td>
                  <td><strong>Sừng bên chất xám tủy gai liên tục từ T₁ đến L₃ (D₁ – L₂/L₃)</strong> (Hệ ngực – thắt lưng).</td>
                  <td><strong>3 Trung khu rời nhau (Hệ sọ – cùng):</strong><br/>
                  1. <strong>Não giữa:</strong> Nhân dây <strong>III</strong> (Edinger-Westphal).<br/>
                  2. <strong>Cầu – Hành não:</strong> Nhân dây <strong>VII, IX</strong> và đặc biệt là <strong>Dây X (Lang thang – chiếm tới 75–80% tổng số sợi đối giao cảm toàn cơ thể!)</strong>.<br/>
                  3. <strong>Tủy cùng:</strong> Đoạn <strong>S₂, S₃, S₄</strong> (dây thần kinh chậu).</td>
                </tr>
                <tr>
                  <td><strong>Vị trí Hạch tự chủ & Chiều dài sợi</strong></td>
                  <td>Hạch nằm <strong>gần tủy gai, xa cơ quan đích</strong> → <strong>Sợi trước hạch NGẮN</strong> (có myelin, nhánh thông trắng), <strong>Sợi sau hạch DÀI</strong> (không myelin, nhánh thông xám). Gồm 2 nhóm hạch:<br/>
                  • <strong>Hạch cạnh sống (Chuỗi hạch giao cảm):</strong> Hạch cổ trên (mắt, tuyến vùng đầu), hạch cổ giữa, <strong>Hạch sao (hạch cổ dưới hợp với T₁ – nhận sợi từ T₁–T₁₀ chi phối vùng cổ, chi trên, TIM và PHỔI!)</strong>.<br/>
                  • <strong>Hạch trước sống:</strong> <strong>Hạch tạng / Đám rối thái dương</strong> (nhận sợi từ <strong>T₅–T₁₀</strong> qua dây tạng lớn đi tới dạ dày, gan, mật, lách, tụy, ruột non), hạch mạc treo tràng trên, hạch mạc treo tràng dưới.</td>
                  <td><strong>Hạch nằm ngay sát hoặc nằm NGAY TRONG THÀNH cơ quan đích</strong> (VD: hạch mi, hạch tai, đám rối Meissner và Auerbach trong thành ống tiêu hóa, hạch tại nút xoang/nút AV của tim).<br/>
                  → <strong>Sợi trước hạch RẤT DÀI</strong>, <strong>Sợi sau hạch CỰC NGẮN</strong> (1 mm đến vài cm).</td>
                </tr>
                <tr>
                  <td><strong>Phạm vi đáp ứng</strong></td>
                  <td>Lan tỏa rộng toàn cơ thể (1 sợi trước hạch phân nhánh cho ~20 neuron sau hạch + tủy thượng thận tiết vào máu) → Đáp ứng <em>"Chiến đấu hay Bỏ chạy" (Fight or Flight)</em>.</td>
                  <td>Khu trú từng cơ quan riêng biệt (tỉ lệ 1:1) → Đáp ứng <em>"Nghỉ ngơi và Tiêu hóa" (Rest and Digest)</em>, bảo tồn năng lượng.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <div class="card-title">🧪 2. Chất Dẫn truyền Thần kinh, Tủy Thượng thận & Hệ thống Thụ thể</div>
          <ul class="theory-list">
            <li><strong>1. Những sợi tiết Acetylcholine (Sợi Cholinergic) – Rất hay hỏi thi!:</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li><strong>TẤT CẢ các sợi TRƯỚC HẠCH của cả hệ Giao cảm LẪN hệ Đối giao cảm</strong> (và sợi trước hạch giao cảm đến Tủy thượng thận) → đều tiết <strong>Acetylcholine</strong> gắn vào thụ thể <strong>Nicotinic (N<sub>N</sub>)</strong> trên màng neuron sau hạch!</li>
                <li><strong>TẤT CẢ các sợi SAU HẠCH ĐỐI GIAO CẢM</strong> → tiết <strong>Acetylcholine</strong> gắn vào thụ thể <strong>Muscarinic (M₁, M₂, M₃)</strong> trên cơ quan đích (bị phong bế đặc hiệu bởi <strong>Atropin</strong>!).</li>
                <li><strong>Ngoại lệ đặc biệt của Sợi SAU HẠCH GIAO CẢM tiết Acetylcholine:</strong> Sợi sau hạch giao cảm chi phối <strong>Tuyến mồ hôi</strong> (ngoại trừ lòng bàn tay do adrenergic), <strong>Cơ dựng lông</strong> và một số mạch máu cơ vân cũng tiết <strong>Acetylcholine</strong> (gắn thụ thể Muscarinic)!</li>
              </ol>
            </li>
            <li><strong>2. Những sợi tiết Norepinephrine (Sợi Adrenergic):</strong> Hầu hết các <strong>sợi sau hạch Giao cảm</strong> tiết <strong>Norepinephrine (Noradrenaline)</strong>.</li>
            <li><strong>3. Tủy thượng thận (Adrenal medulla):</strong> Bản chất phôi thai là một <strong>hạch giao cảm biến đổi</strong> (các tế bào ưa crôm chính là neuron sau hạch mất sợi trục), nhận sợi trước hạch giao cảm tiết ACh → bài tiết trực tiếp vào máu: <strong>80% (75–80%) là Epinephrine (Adrenaline)</strong> và <strong>20% (20–25%) là Norepinephrine</strong> (tác dụng kéo dài gấp 5–10 lần so với kích thích dây giao cảm vì bị bất hoạt chậm hơn trong máu).</li>
          </ul>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Loại Thụ thể Adrenergic</th>
                  <th>Ái lực với Hóa chất (Theo cấu trúc nhánh bên)</th>
                  <th>Phân bố Cơ quan & Tác dụng Sinh lý / Dược lý chuẩn YDS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Thụ thể Alpha (α₁, α₂)</strong></td>
                  <td>Gắn mạnh với chất có gốc <strong>–NH₂ (Norepinephrine kích thích chủ yếu thụ thể α</strong>, ít tác dụng trên β; còn Epinephrine kích thích mạnh cả α và β!).</td>
                  <td>
                    • <strong>α₁ (qua IP₃/Ca²⁺):</strong> Gây <strong>CO CƠ TRƠN MẠCH MÁU</strong> (da, niêm mạc, nội tạng, thận → tăng kháng lực ngoại biên, tăng HA), <strong>co cơ tia mống mắt (gây GIÃN ĐỒNG TỬ)</strong>, co cơ thắt ống tiêu hóa & cơ thắt bàng quang.<br/>
                    • <strong>α₂ (giảm cAMP):</strong> Màng trước synapse (ức chế ngược giải phóng NE), kết tập tiểu cầu.
                  </td>
                </tr>
                <tr>
                  <td><strong>Thụ thể Beta-1 (β₁)</strong></td>
                  <td rowspan="2">Gắn mạnh với chất có gốc <strong>–CH₃</strong> hoặc <strong>–CH(CH₃)₂ (Isoproterenol &gt; Epinephrine &gt; Norepinephrine)</strong> (tất cả thụ thể β đều làm <strong>TĂNG cAMP</strong>!).</td>
                  <td>Phân bố chủ yếu ở <strong>TIM (Nút xoang, Nút AV, Cơ nhĩ, Cơ thất)</strong> và <strong>Tế bào cận cầu thận</strong>:<br/>
                  → <strong>Tăng nhịp tim, tăng sức co bóp cơ tim, tăng tốc độ dẫn truyền nhĩ-thất (rút ngắn khoảng PR)</strong>, tăng tiết Renin, và tăng phân giải mỡ tại mô mỡ.</td>
                </tr>
                <tr>
                  <td><strong>Thụ thể Beta-2 (β₂)</strong></td>
                  <td>Phân bố ở <strong>CƠ TRƠN TIỂU PHẾ QUẢN (Cơ Reissessen)</strong>, mạch máu cơ vân, mạch vành, cơ trơn tử cung, thành ống tiêu hóa, gan & cơ xương:<br/>
                  → Gây <strong>GIÃN CƠ TRƠN PHẾ QUẢN</strong>, giãn mạch cơ vân & mạch vành, giãn cơ tử cung, tăng phân giải glycogen tại gan/cơ và đưa K⁺ vào tế bào.<br/>
                  • <em>Liên hệ Dược lý Đề thi SĐH:</em> Thuốc kích thích chọn lọc β₂ (<strong>Salbutamol</strong>) dùng cắt cơn hen phế quản. Ngược lại, thuốc chẹn β không chọn lọc (như <strong>Propranolol</strong> ức chế cả β₁ và β₂) làm <strong>hạ nhịp tim, hạ huyết áp nhưng gây CO THẮT TIỂU PHẾ QUẢN</strong> (chống chỉ định tuyệt đối ở bệnh nhân Hen phế quản!).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🎯 3. Bảng So sánh Tác dụng trên Các Cơ quan Đích & Các Hiện tượng Sinh lý Đặc biệt</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Cơ quan đích</th>
                <th>Tác dụng của Hệ GIAO CẢM</th>
                <th>Tác dụng của Hệ ĐỐI GIAO CẢM</th>
                <th>Điểm Nhấn & Bẫy Đề Thi SĐH YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Mắt (Đồng tử & Thủy tinh thể)</strong></td>
                <td>Co cơ tia mống mắt (α₁) → <strong>GIÃN ĐỒNG TỬ (Mydriasis)</strong>. (Giãn nhẹ cơ thể mi nhìn xa).</td>
                <td>(Dây III): Co cơ vòng mống mắt (M₃) → <strong>CO ĐỒNG TỬ (Miosis)</strong>.<br/>Co <strong>cơ thể mi</strong> làm chùng dây chằng treo giúp thủy tinh thể phồng lên → <strong>ĐIỀU TIẾT NHÌN GẦN</strong>.</td>
                <td><em>Bẫy đề thi SĐH 2024:</em> <strong>Sự điều tiết hội tụ của thủy tinh thể (co cơ thể mi) được kiểm soát gần như HOÀN TOÀN bởi Hệ Đối giao cảm!</strong></td>
              </tr>
              <tr>
                <td><strong>2. Tim</strong></td>
                <td>(Thụ thể <strong>β₁</strong>): <strong>Tăng nhịp tim, tăng lực co bóp, tăng tốc độ dẫn truyền</strong> (giảm khoảng PR).</td>
                <td>(Dây X – Thụ thể <strong>M₂</strong>): <strong>Giảm nhịp tim, giảm tốc độ dẫn truyền qua nút AV</strong> (kéo dài PR), giảm nhẹ co bóp nhĩ.</td>
                <td>Khi cắt bỏ hoặc phong bế cả 2 hệ, tim đập theo nhịp nội tại của nút xoang (~100 l/p) vì lúc nghỉ <strong>trương lực đối giao cảm (dây X) chiếm ưu thế trên tim</strong>!</td>
              </tr>
              <tr>
                <td><strong>3. Mạch máu Hệ thống & Huyết áp</strong></td>
                <td><strong>CO HẦU HẾT MẠCH MÁU</strong> nội tạng, da, thận (qua <strong>α₁</strong>) → <strong>Tăng kháng lực ngoại biên, TĂNG HUYẾT ÁP</strong>.</td>
                <td><strong>Hầu như KHÔNG có sợi đối giao cảm chi phối mạch máu ngoại biên!</strong> (Chỉ làm giãn mạch thể hang gây cương dương vật và một số mạch màng não/tuyến nước bọt).</td>
                <td><strong>Trương lực giao cảm vận mạch:</strong> Bình thường giao cảm luôn phát xung nền giữ mạch máu co bằng <strong>~1/2 đường kính tối đa</strong>. Nếu <strong>cắt bỏ/hủy giao cảm đến tim mạch (hoặc gây tê tủy sống) → mạch máu giãn ra tối đa và HUYẾT ÁP GIẢM TRẦM TRỌNG!</strong></td>
              </tr>
              <tr>
                <td><strong>4. Phổi (Cây phế quản)</strong></td>
                <td>(Thụ thể <strong>β₂</strong>): <strong>GIÃN cơ trơn tiểu phế quản</strong>, giảm tiết dịch.</td>
                <td>(Dây X – Thụ thể <strong>M₃</strong>): <strong>CO THẮT cơ trơn tiểu phế quản</strong>, tăng tiết dịch nhầy.</td>
                <td>Thuốc kháng cholinergic (Ipratropium) và chủ vận β₂ (Salbutamol) đều gây giãn phế quản.</td>
              </tr>
              <tr>
                <td><strong>5. Ống tiêu hóa, Túi mật & Bàng quang</strong></td>
                <td><strong>Giảm nhu động / Giãn thành tạng rỗng</strong> (β₂, α₂) và <strong>CO CƠ THẮT</strong> (α₁) → Giữ phân, giữ nước tiểu.</td>
                <td><strong>Tăng nhu động / CO THẮT thành tạng rỗng</strong> (M₃) và <strong>GIÃN CƠ THẮT</strong> → Thúc đẩy tiêu hóa, tống mật, đi tiểu, đại tiện.</td>
                <td>Quy luật chung trên tạng rỗng (Ruột, Túi mật, Bàng quang): <strong>Đối giao cảm làm CO THÀNH – GIÃN CƠ THẮT</strong>; Giao cảm làm ngược lại!</td>
              </tr>
              <tr>
                <td><strong>6. Các Tuyến Ngoại tiết</strong></td>
                <td>Làm co mạch nên giảm tiết dịch tiêu hóa (chỉ tiết ít nước bọt đặc quánh).<br/><strong>Riêng TUYẾN MỒ HÔI:</strong> Do <strong>Giao cảm (tiết ACh!)</strong> kích thích tiết nhiều mồ hôi!</td>
                <td>Kích thích mạnh các tuyến vùng đầu và tiêu hóa (tuyến lệ, tuyến mũi, tuyến nước bọt, dạ dày, tụy) tiết <strong>nhiều dịch loãng giàu enzyme</strong>.</td>
                <td>Ngộ độc phospho hữu cơ (ức chế men <strong>Acetylcholinesterase</strong> làm ứ đọng ACh): gây đồng tử co nhỏ như đầu đinh ghim, nhịp tim chậm, co thắt phế quản, tăng tiết đàm dãi/nước bọt/mồ hôi → cấp cứu bằng <strong>Atropin liều cao</strong>!</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout pearl">
          <div class="callout-title">🔬 Hiện tượng Tăng nhạy cảm do Cắt thần kinh (Denervation Supersensitivity) & Trung khu Cao cấp</div>
          <ul>
            <li><strong>Thí nghiệm Đề thi SĐH YDS (Cắt hạch sao sau 1 tuần):</strong> Khi cắt đứt sợi thần kinh giao cảm sau hạch (ví dụ cắt bỏ <strong>hạch sao</strong> chi phối mạch máu chi trên), ngay lúc mới cắt thì mạch giãn làm tăng lưu lượng máu. Nhưng sau <strong>1 tuần trở đi</strong>, do mất chất dẫn truyền Norepinephrine thường trực tại khe synapse, màng tế bào cơ trơn mạch máu sẽ tự động <strong>tăng tổng hợp và đưa thêm rất nhiều thụ thể α₁ lên màng sau synapse (Up-regulation)</strong>. Do đó, nếu tiêm cùng một liều Norepinephrine vào máu sau khi cắt hạch sao 1 tuần, <strong>mạch máu sẽ co mạnh hơn hẳn và lưu lượng máu sẽ GIẢM NHIỀU HƠN so với trước khi cắt hạch sao</strong>!</li>
            <li><strong>Trung khu cao cấp điều khiển Hệ thần kinh tự chủ:</strong> Nằm ở <strong>VÙNG HẠ ĐỒI (Hypothalamus)</strong> (kích thích vùng hạ đồi sau và bên gây đáp ứng Giao cảm; kích thích vùng hạ đồi trước gây đáp ứng Đối giao cảm).</li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Về mặt giải phẫu định khu, trung khu của Hệ thần kinh Giao cảm và Hệ thần kinh Đối giao cảm (Phó giao cảm) nằm ở những vị trí nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.653–655",
        options: [
          "Trung khu Giao cảm nằm liên tục ở sừng bên chất xám tủy gai từ T1 đến L3 (D1–L3); Trung khu Đối giao cảm nằm ở 3 nơi rời nhau là Não giữa (dây III), Cầu - Hành não (dây VII, IX, X) và Tủy cùng (S2 – S4)",
          "Trung khu Giao cảm nằm ở hành não và tủy cùng; Trung khu Đối giao cảm nằm ở sừng bên tủy gai từ C1 đến L5",
          "Cả hai hệ đều xuất phát từ sừng trước tủy gai đoạn cổ và đoạn thắt lưng",
          "Trung khu Giao cảm nằm ở vỏ tiểu não; Trung khu Đối giao cảm nằm ở đồi thị"
        ],
        answer: 0,
        explain: "Hệ giao cảm là hệ ngực - thắt lưng (sừng bên tủy gai liên tục từ T1 đến L2/L3). Hệ đối giao cảm là hệ sọ - cùng, gồm 3 trung khu: (1) Não giữa (nhân dây III), (2) Cầu - Hành não (nhân dây VII, IX, X - trong đó riêng dây X chiếm 75–80% sợi đối giao cảm toàn cơ thể), và (3) Tủy cùng S2 – S4."
      },
      {
        q: "Khi so sánh đặc điểm đường dẫn truyền và vị trí hạch giữa hệ Giao cảm và hệ Đối giao cảm, phát biểu nào sau đây là ĐÚNG?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.655",
        options: [
          "Hạch giao cảm nằm gần tủy sống (sợi trước hạch ngắn, sợi sau hạch dài); còn hạch đối giao cảm nằm ngay sát hoặc ngay trong thành cơ quan đích (sợi trước hạch rất dài, sợi sau hạch rất ngắn)",
          "Hạch giao cảm nằm ngay trong thành cơ quan đích (sợi trước hạch dài, sợi sau hạch ngắn)",
          "Sợi trước hạch giao cảm tiết Norepinephrine, còn sợi trước hạch đối giao cảm tiết Acetylcholine",
          "Tủy thượng thận là một hạch đối giao cảm biến đổi"
        ],
        answer: 0,
        explain: "Hạch giao cảm (chuỗi hạch cạnh sống và hạch trước sống) nằm gần cột sống, xa tạng đích nên sợi trước hạch ngắn và sợi sau hạch dài. Ngược lại, hạch đối giao cảm nằm sát hoặc ngay trong thành cơ quan đích (như đám rối Meissner, Auerbach ở ruột; hạch ở nút xoang) nên sợi trước hạch rất dài còn sợi sau hạch cực ngắn."
      },
      {
        q: "Trong hệ thần kinh tự chủ, hóa chất dẫn truyền thần kinh Acetylcholine (ACh) được bài tiết tại tất cả các đầu tận cùng sợi thần kinh nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.656",
        options: [
          "Tất cả các sợi trước hạch của cả hai hệ (giao cảm và đối giao cảm), tất cả các sợi sau hạch đối giao cảm, và sợi sau hạch giao cảm chi phối tuyến mồ hôi, cơ dựng lông",
          "Chỉ được bài tiết duy nhất ở sợi sau hạch đối giao cảm",
          "Tất cả các sợi sau hạch giao cảm chi phối tim, thận và mạch máu nội tạng",
          "Được bài tiết trực tiếp vào máu bởi các tế bào ưa crôm của tủy thượng thận"
        ],
        answer: 0,
        explain: "Ba vị trí tiết Acetylcholine (sợi cholinergic) cần thuộc lòng: (1) Tất cả các sợi TRƯỚC HẠCH của cả hệ giao cảm lẫn đối giao cảm (gắn thụ thể Nicotinic tại hạch); (2) Tất cả các sợi SAU HẠCH ĐỐI GIAO CẢM (gắn thụ thể Muscarinic tại tạng đích); và (3) Một số sợi SAU HẠCH GIAO CẢM ngoại lệ như sợi đến tuyến mồ hôi, cơ dựng lông và một số mạch máu cơ vân."
      },
      {
        q: "Tại cơ quan mắt, sự điều tiết làm phồng thủy tinh thể để nhìn rõ vật ở gần (nhờ sự co của cơ thể mi) được kiểm soát bởi hệ thần kinh nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 33 & Sách SL 2025 tr.662",
        options: [
          "Được kiểm soát hoàn toàn bởi hệ thần kinh Đối giao cảm (thông qua dây thần kinh sọ số III làm co cơ thể mi và co cơ vòng mống mắt gây co đồng tử)",
          "Được kiểm soát hoàn toàn bởi hệ thần kinh Giao cảm xuất phát từ hạch cổ trên",
          "Được kiểm soát bởi dây thần kinh lang thang (dây X)",
          "Do sự co của cơ tia mống mắt dưới tác dụng của Norepinephrine"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (Bài 51, tr.662): Sự tập trung ánh sáng của thủy tinh thể (điều tiết nhìn gần) được kiểm soát gần như HOÀN TOÀN bởi hệ thần kinh ĐỐI GIAO CẢM (nhân Edinger-Westphal theo dây III đến hạch mi → tiết ACh làm co cơ thể mi giúp dây chằng treo chùng lại để thủy tinh thể phồng lên, đồng thời co cơ vòng làm thu nhỏ đồng tử)."
      },
      {
        q: "Khi cắt bỏ hoặc hủy toàn bộ hệ thần kinh giao cảm chi phối hệ tim mạch (hoặc gây tê tủy sống toàn bộ làm mất trương lực giao cảm), huyết áp động mạch sẽ thay đổi như thế nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 34 & Sách SL 2025 tr.663",
        options: [
          "Các mạch máu giãn ra tối đa làm kháng lực ngoại biên và huyết áp giảm trầm trọng",
          "Các mạch máu co thắt tối đa làm huyết áp tăng vọt lên trên 200 mmHg",
          "Huyết áp hoàn toàn không thay đổi vì hệ đối giao cảm sẽ co mạch bù trừ",
          "Chỉ có nhịp tim tăng lên gấp đôi còn đường kính mạch máu không đổi"
        ],
        answer: 0,
        explain: "Hầu hết các mạch máu hệ thống chỉ có hệ giao cảm chi phối (không có đối giao cảm). Bình thường 'trương lực giao cảm' luôn giữ cho các tiểu động mạch ở trạng thái co vừa phải (bằng khoảng 1/2 đường kính tối đa). Do đó khi cắt hoặc hủy giao cảm đến tim mạch, mất trương lực giao cảm làm mạch máu giãn ra tối đa, kháng lực ngoại biên sụp đổ và huyết áp giảm trầm trọng."
      },
      {
        q: "Một bác sĩ chỉ định thuốc Propranolol (thuốc ức chế thụ thể Beta không chọn lọc: ức chế cả β1 và β2) để điều trị tăng huyết áp cho một bệnh nhân có tiền sử Hen phế quản. Tác dụng phụ nguy hiểm nào sẽ xảy ra trên hệ hô hấp của bệnh nhân này?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 35",
        options: [
          "Gây co thắt cơ trơn tiểu phế quản làm khởi phát cơn khó thở / cơn hen phế quản cấp (do thuốc ức chế thụ thể β2 trên cơ trơn Reissessen)",
          "Gây giãn phế quản quá mức làm tăng khoảng chết giải phẫu",
          "Làm liệt hoàn toàn cơ hoành do ức chế thụ thể Nicotinic",
          "Kích thích tăng nhịp tim lên trên 150 lần/phút"
        ],
        answer: 0,
        explain: "Trên tim có thụ thể β1 (kích thích làm tăng nhịp và sức co bóp), còn trên cơ trơn tiểu phế quản có thụ thể β2 (kích thích làm giãn phế quản). Khi dùng thuốc ức chế Beta không chọn lọc (Propranolol), thuốc ức chế β1 làm giảm nhịp tim và hạ huyết áp, nhưng đồng thời ức chế luôn thụ thể β2 ở phổi làm mất tác dụng giãn phế quản → gây CO THẮT TIỂU PHẾ QUẢN kịch phát ở người hen suyễn!"
      },
      {
        q: "Trong một thí nghiệm, người ta đo lưu lượng máu qua cánh tay khi tiêm một liều nhỏ Norepinephrine tĩnh mạch. Sau đó, người ta phẫu thuật cắt bỏ hạch sao (cắt đứt sợi giao cảm sau hạch đến mạch máu cánh tay) và đợi sau 1 tuần lễ rồi tiêm lại đúng liều Norepinephrine như ban đầu. Kết quả lưu lượng máu cánh tay ở lần tiêm sau sẽ như thế nào so với trước khi cắt hạch sao?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 36 & Sách SL 2025 tr.664",
        options: [
          "Lưu lượng máu bị giảm NHIỀU HƠN (mạch máu co mạnh hơn hẳn) so với khi chưa cắt hạch sao, do hiện tượng tăng nhạy cảm sau cắt thần kinh (tăng số lượng thụ thể α1 ở màng sau synapse)",
          "Lưu lượng máu không hề giảm vì mạch máu đã bị cắt dây thần kinh nên mất hoàn toàn thụ thể với Norepinephrine",
          "Lưu lượng máu tăng gấp 5 lần do Norepinephrine chuyển sang gây giãn mạch",
          "Đáp ứng co mạch hoàn toàn bằng với trước khi cắt hạch sao"
        ],
        answer: 0,
        explain: "Đây là câu hỏi vận dụng rất hay trong đề thi SĐH YDS về 'Hiện tượng tăng nhạy cảm sau khi cắt thần kinh' (Denervation supersensitivity - Sách SL YDS 2025 tr.664): Sau khi cắt hạch sao (sợi giao cảm sau hạch) khoảng 1 tuần, do không còn Norepinephrine giải phóng ở tận cùng thần kinh, tế bào cơ trơn mạch máu sẽ phản ứng bù trừ bằng cách tăng tổng hợp đưa rất nhiều thụ thể α1 lên màng sau synapse (up-regulation). Vì vậy khi tiêm Norepinephrine ngoại sinh vào máu, mạch máu vùng đó sẽ co thắt dữ dội hơn nhiều làm lưu lượng máu giảm mạnh hơn hẳn lúc chưa cắt hạch!"
      },
      {
        q: "Tác dụng của việc kích thích thụ thể Beta-1 (β1) trên hoạt động của tim bao gồm:",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Tăng nhịp tim, tăng sức co bóp cơ tim và tăng tốc độ dẫn truyền xung động qua nút nhĩ-thất (làm giảm khoảng PR trên ECG)",
          "Giảm nhịp tim, giảm sức co bóp và kéo dài khoảng PR",
          "Chỉ làm co thắt động mạch vành mà không ảnh hưởng đến nút xoang",
          "Làm mở kênh K+ gây ngừng tim ở kỳ tâm trương"
        ],
        answer: 0,
        explain: "Thụ thể β1 phân bố dày đặc tại nút xoang, nút nhĩ-thất và cơ tâm thất. Khi kích thích β1 (bởi Norepinephrine, Epinephrine hoặc Dobutamine) sẽ làm tăng cAMP → Tăng tần số phát xung nút xoang (tăng nhịp), tăng tốc độ dẫn truyền qua nút AV (rút ngắn khoảng PR) và tăng dòng Ca2+ vào cơ thất làm tăng lực co bóp."
      },
      {
        q: "Tủy thượng thận bài tiết trực tiếp vào máu hai hormon Catecholamine theo tỉ lệ nào và có nguồn gốc phôi thai tương đương với cấu trúc nào của hệ thần kinh tự chủ?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.656 & 663",
        options: [
          "Bài tiết khoảng 75 – 80% Epinephrine (Adrenaline) và 20 – 25% Norepinephrine; bản chất là một hạch giao cảm biến đổi (tế bào sau hạch giao cảm không có sợi trục), nhận chi phối trực tiếp từ sợi trước hạch giao cảm tiết Acetylcholine",
          "Bài tiết 100% Acetylcholine; bản chất là một hạch đối giao cảm thuộc dây thần kinh X",
          "Bài tiết 80% Cortisol và 20% Aldosterone dưới sự kích thích của ACTH",
          "Bài tiết 80% Norepinephrine và 20% Dopamine; nhận chi phối từ sợi sau hạch giao cảm"
        ],
        answer: 0,
        explain: "Các tế bào ưa crôm của tủy thượng thận có nguồn gốc từ mào thần kinh giống hệt các neuron sau hạch giao cảm. Sợi thần kinh đi từ sừng bên tủy ngực (T5–T10) đến thẳng tủy thượng thận là sợi TRƯỚC HẠCH giao cảm tiết Acetylcholine (gắn thụ thể Nicotinic), kích thích tủy thượng thận tiết vào máu 80% Adrenaline và 20% Noradrenaline."
      },
      {
        q: "Tác dụng của hệ thần kinh Đối giao cảm trên các tạng rỗng của hệ tiêu hóa (dạ dày, ruột non, túi mật) và hệ tiết niệu (bàng quang) tuân theo quy luật chung nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.660 (Bảng 51.1)",
        options: [
          "Làm TĂNG trương lực và co bóp (tăng nhu động) của thành tạng rỗng, đồng thời làm GIÃN các cơ thắt (cơ vòng môn vị, cơ vòng Oddi, cơ thắt trong bàng quang) để tống xuất chất chứa bên trong",
          "Làm GIẢM nhu động và giãn thành tạng rỗng, đồng thời làm CO chặt các cơ thắt",
          "Làm ngưng hoàn toàn sự bài tiết của các tuyến tiêu hóa",
          "Không có bất kỳ tác dụng nào lên ống tiêu hóa và bàng quang"
        ],
        answer: 0,
        explain: "Trên các cơ quan tạng rỗng (ống tiêu hóa, túi mật, bàng quang): Hệ Đối giao cảm luôn thúc đẩy sự tống xuất và tiêu hóa bằng cách làm CO THÀNH TẠNG (tăng nhu động ruột, co túi mật, co cơ detrusor bàng quang) và làm GIÃN CƠ THẮT (giãn cơ vòng môn vị, cơ Oddi, cơ thắt bàng quang). Ngược lại hệ Giao cảm làm giãn thành tạng và co cơ thắt."
      },
      {
        q: "Hạch giao cảm trước sống lớn nhất là Hạch tạng (Đám rối thái dương) nhận các sợi giao cảm trước hạch xuất phát từ các đốt tủy nào để đi đến chi phối cho dạ dày, gan, mật, tụy và ruột non?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.654",
        options: [
          "Từ các đốt tủy ngực T5 đến T10 (D5 – D10, đi qua các hạch cạnh sống không dừng lại mà tạo thành dây thần kinh tạng lớn đến hạch tạng)",
          "Từ các đốt tủy cổ C1 đến C4",
          "Từ các đốt tủy cùng S2 đến S4",
          "Từ nhân lưng dây thần kinh X ở hành não"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.654): Hạch tạng (đám rối thái dương / celiac ganglion) nhận các sợi giao cảm trước hạch xuất phát từ sừng bên các đốt tủy ngực từ T5 đến T10 (D5–D10), từ đó cho sợi sau hạch đi tới dạ dày, gan, lách, tụy, ruột non và tủy thượng thận. (Còn hạch sao nhận sợi từ T1–T10 chi phối vùng cổ, chi trên, tim và phổi)."
      },
      {
        q: "Tại sao Norepinephrine có tác dụng kích thích mạnh trên thụ thể Alpha (α) nhưng lại rất yếu trên thụ thể Beta-2 (β2), trong khi Epinephrine (Adrenaline) lại kích thích mạnh cả thụ thể Alpha lẫn các thụ thể Beta (β1, β2)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.658",
        options: [
          "Do sự khác biệt ở cấu trúc nhóm thế trên nhánh bên amin: thụ thể α ưu tiên gắn với nhóm –NH2 (Norepinephrine), còn thụ thể β ưu tiên gắn với các chất có thêm gốc methyl –CH3 ở nhánh bên (Epinephrine)",
          "Do Norepinephrine có bản chất là một steroid còn Epinephrine là một protein",
          "Do Norepinephrine bị phân hủy ngay lập tức tại phổi bởi men ACE",
          "Do thụ thể Beta chỉ gắn với Acetylcholine"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.658): Ái lực của catecholamine với thụ thể α hay β phụ thuộc vào cấu trúc nhánh bên gắn vào nguyên tử Nitơ: Norepinephrine chỉ có nhóm –NH2 nên gắn ưu thế vào thụ thể α (gây co mạch mạnh làm tăng cả HA tâm thu và tâm trương). Epinephrine có thêm gốc methyl (–NH–CH3) nên gắn mạnh vào cả thụ thể α lẫn thụ thể β1 và β2."
      }
    ]
  }
];
