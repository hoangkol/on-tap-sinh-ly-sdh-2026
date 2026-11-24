// ==========================================================================
// DỮ LIỆU BÀI HỌC PHẦN 1: SINH LÝ MÁU & TIM MẠCH (BÀI 1 ĐẾN BÀI 5)
// Chuẩn Giáo trình Sinh lý học Y khoa 2025 & Sách Trắc nghiệm ĐHYD TP.HCM (YDS)
// ==========================================================================

window.LESSONS_PART1 = [
  // ========================================================================
  // BÀI 1: SINH LÝ HỒNG CẦU - NHÓM MÁU
  // ========================================================================
  {
    id: 1,
    group: "I. SINH LÝ MÁU",
    title: "Bài 1: Sinh lý hồng cầu và Nhóm máu",
    shortTitle: "Hồng cầu & Nhóm máu",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 2 (tr.9–22) & Bài 5 (tr.46–51)",
    summary: "Cấu trúc đĩa lõm hai mặt, sức bền màng hồng cầu, sinh tổng hợp & chức năng Hemoglobin, quá trình tạo hồng cầu (EPO, sắt, B12, folat) và hệ thống nhóm máu ABO - Rhesus.",
    simId: "sim_rbc_blood",
    simTitle: "Phòng thí nghiệm Định nhóm máu ABO/Rh (Beth-Vincent & Simonin) & Phân tích Chỉ số Hồng cầu",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩸 1. Hình dạng, Cấu trúc & Sức bền Hồng cầu</div>
          <ul class="theory-list">
            <li><strong>Hình đĩa lõm hai mặt</strong> (đường kính <strong>7 – 8 μm</strong>, dày ngoại vi 2 – 3 μm, trung tâm 1 μm, thể tích MCV 80 – 100 fL).</li>
            <li><strong>3 lợi ích sinh lý của hình đĩa lõm 2 mặt:</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li>Tăng diện tích tiếp xúc thêm <strong>30%</strong> (tổng diện tích HC toàn cơ thể đạt <strong>~3.000 m²</strong>).</li>
                <li>Tăng tốc độ khuếch tán khí vào/ra đến mọi điểm trong bào tương.</li>
                <li>Biến dạng dễ dàng khi đi qua mao mạch hẹp mà không bị vỡ.</li>
              </ol>
            </li>
            <li><strong>Cấu trúc màng hồng cầu (3 lớp):</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><em>Lớp ngoài:</em> Glycoprotein, glycolipid (chứa kháng nguyên nhóm máu) và <strong>acid sialic tích điện âm</strong> giúp các HC đẩy nhau. Tốc độ máu lắng (ESR) phụ thuộc điện tích âm này (khi tăng fibrinogen/globulin huyết tương sẽ trung hòa điện âm → HC xếp hình chuỗi tiền → tăng tốc độ máu lắng).</li>
                <li><em>Lớp giữa:</em> Lớp lipid kép (phospholipid 60%, cholesterol) duy trì hình thái.</li>
                <li><em>Lớp trong cùng:</em> Khung xương màng (spectrin, actin, ankyrin) và các enzyme gắn màng: <strong>Calmodulin</strong>, <strong>G6PD</strong> (bảo vệ HC khỏi tác nhân oxy hóa), <strong>Carbonic anhydrase (CA)</strong>.</li>
              </ul>
            </li>
          </ul>
          <div class="callout formula">
            <div class="callout-title">🧪 Sức bền thẩm thấu của Hồng cầu (Máu toàn phần)</div>
            <ul>
              <li>Đẳng trương: <strong>NaCl 9‰ (0,9%)</strong> (Áp suất thẩm thấu ~300 mOsm/L).</li>
              <li><strong>Sức bền tối thiểu</strong> (bắt đầu vỡ): <strong>NaCl 4,6‰ (0,46%)</strong>.</li>
              <li><strong>Sức bền tối đa</strong> (vỡ hoàn toàn 100%): <strong>NaCl 3,4‰ (0,34%)</strong>.</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title">⚛️ 2. Hemoglobin (Hb) – Cấu trúc & Chức năng</div>
          <ul class="theory-list">
            <li><strong>Nồng độ bình thường:</strong> <strong>13 – 16 g/dL</strong> (Nam: 15 ± 2 g/dL; Nữ: 14 ± 2 g/dL). Chiếm 34% trọng lượng tươi và 90% trọng lượng khô của HC.</li>
            <li><strong>Cấu tạo (TLPT 68.000 Da):</strong> Gồm <strong>4 nhân Heme</strong> (protoporphyrin IX + <strong>Fe²⁺</strong> hóa trị 2) + <strong>4 chuỗi polypeptid Globin</strong>.
              <ul style="padding-left:18px;margin-top:4px;">
                <li>Người trưởng thành: <strong>HbA (α₂β₂)</strong> chiếm 96–98%, HbA₂ (α₂δ₂) 2–3%.</li>
                <li>Bào thai: <strong>HbF (α₂γ₂)</strong> có ái lực với O₂ cao hơn HbA (vì gắn 2,3-DPG kém), thay thế bằng HbA sau sinh.</li>
              </ul>
            </li>
            <li><strong>Chức năng của Hemoglobin:</strong>
              <ol style="padding-left:18px;margin-top:4px;">
                <li><strong>Vận chuyển O₂:</strong> Gắn với <strong>Fe²⁺</strong> của nhân heme qua liên kết phối trí lỏng lẻo, thuận nghịch. Đây là <strong>phản ứng gắn oxy (oxygenation) chứ KHÔNG phải phản ứng oxy hóa</strong> (Fe vẫn giữ hóa trị 2!). 1 phân tử Hb gắn tối đa <strong>4 phân tử O₂</strong>. <strong>1 gam Hb gắn tối đa 1,34 – 1,39 mL O₂</strong>.</li>
                <li><strong>Vận chuyển CO₂ (20–23%):</strong> CO₂ gắn trực tiếp vào nhóm <strong>–NH₂ của chuỗi Globin</strong> tạo <strong>Carbaminohemoglobin (HbCO₂)</strong>.</li>
                <li><strong>Hệ đệm pH máu:</strong> Nhờ gốc Histidine của globin (chiếm 70% khả năng đệm của máu toàn phần).</li>
              </ol>
            </li>
          </ul>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Đề Thi: MetHb và Ngộ độc CO (HbCO)</div>
            <ul>
              <li><strong>Methemoglobin (MetHb):</strong> Khi <strong>Fe²⁺ bị oxy hóa thành Fe³⁺</strong> (do thuốc, nitrit, thiếu men G6PD hoặc thiếu NADH-metHb reductase) → <strong>mất hoàn toàn khả năng vận chuyển O₂</strong>, máu có màu nâu sẫm/xanh tím (khi MetHb &gt; 1,5 g/dL).</li>
              <li><strong>Carboxyhemoglobin (HbCO):</strong> Khí CO có ái lực với Hb <strong>gấp 210 lần O₂</strong>, làm đường cong Barcroft lệch trái mạnh. <strong>Điều trị:</strong> Thở hỗn hợp <strong>95% O₂ + 5% CO₂</strong> (O₂ phân áp cao đẩy CO khỏi Hb; 5% CO₂ kích thích trung tâm hô hấp tăng thông khí).</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🦴 3. Quá trình Sản sinh Hồng cầu & Các Chất Cần Thiết</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Giai đoạn / Yếu tố</th>
                <th>Đặc điểm sinh lý chuẩn Sách YDS 2025</th>
                <th>Ý nghĩa lâm sàng & Bẫy trắc nghiệm</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nơi tạo hồng cầu theo tuổi</strong></td>
                <td>
                  • <strong>Những tuần đầu phôi:</strong> Túi noãn hoàng (tiểu đảo Wolff và Pander).<br/>
                  • <strong>Giữa thai kỳ (tháng 3 – 5):</strong> Gan (chủ yếu), lách, hạch.<br/>
                  • <strong>Từ tháng thứ 5 thai kỳ & sau sinh:</strong> Tủy xương là nơi duy nhất.<br/>
                  • <strong>Sau 20 tuổi:</strong> Chỉ còn ở <strong>tủy đỏ các xương dẹt</strong> (xương ức, xương sườn, đốt sống, xương chậu, xương sọ) và đầu trên xương đùi/cánh tay.
                </td>
                <td>Hồng cầu lưới (Reticulocyte) chiếm <strong>&lt; 1% (0,5 – 1,5%)</strong> ở máu ngoại vi, phản ánh tốc độ sinh hồng cầu của tủy xương. Đời sống HC: <strong>120 ngày</strong>.</td>
              </tr>
              <tr>
                <td><strong>Erythropoietin (EPO)</strong></td>
                <td>Glycoprotein (TLPT 34.000), <strong>80 – 90% do thận</strong> (tế bào mô kẽ quanh ống thận) và 10 – 20% do gan sản xuất khi <strong>thiếu oxy mô</strong> (qua yếu tố HIF-1).</td>
                <td>Tác động chủ yếu kích thích tế bào tiền thân <strong>CFU-E</strong> biệt hóa thành tiền nguyên hồng cầu. Suy thận mạn gây thiếu máu đẳng sắc đẳng bào do thiếu EPO.</td>
              </tr>
              <tr>
                <td><strong>Sắt (Iron)</strong></td>
                <td>Nhu cầu ~0,6 mg/ngày (phụ nữ hành kinh 1,3 mg/ngày). Hấp thu chủ yếu ở <strong>tá tràng</strong> dưới dạng <strong>Fe²⁺</strong>. Vận chuyển trong máu bởi <strong>Transferrin</strong>. Dự trữ chủ yếu ở <strong>gan (60%)</strong> dưới dạng <strong>Ferritin</strong> (dạng dự trữ chính, hòa tan) và một lượng nhỏ không hòa tan là <strong>Hemosiderin</strong>.</td>
                <td>Hormon kiểm soát hấp thu sắt là <strong>Hepcidin</strong> (do gan tiết, ức chế ferroportin). Thiếu sắt gây <strong>thiếu máu hồng cầu nhỏ nhược sắc (MCV giảm, MCHC giảm)</strong>.</td>
              </tr>
              <tr>
                <td><strong>Vitamin B₁₂ & Acid Folic</strong></td>
                <td>Cần thiết để tổng hợp thymidine triphosphate của <strong>DNA</strong> (giúp nhân phân chia và trưởng thành).<br/>
                • <strong>Vitamin B₁₂:</strong> Cần <strong>Yếu tố nội tại (IF)</strong> của tế bào thành dạ dày bảo vệ và đưa đến hấp thu tại <strong>hồi tràng</strong>. Dự trữ ở gan (1–3 mg, gấp <strong>1000 lần</strong> nhu cầu 1–3 μg/ngày → thiếu sau cắt dạ dày 3–4 năm mới biểu hiện).<br/>
                • <strong>Acid folic:</strong> Hấp thu chủ yếu ở <strong>hỗng tràng</strong>.</td>
                <td>Thiếu B₁₂ hoặc Folic gây <strong>thiếu máu hồng cầu to / nguyên hồng cầu khổng lồ (Megaloblastic anemia, MCV &gt; 100 fL)</strong>, màng dễ vỡ. Lưu ý: <strong>Đồng (Cu)</strong> chỉ là chất xúc tác phụ, ít cần thiết trực tiếp hơn Sắt/B₁₂/Folat.</td>
              </tr>
              <tr>
                <td><strong>Bảo quản máu lâu (&gt; 1 tháng)</strong></td>
                <td>Hồng cầu vẫn chuyển hóa yếm khí tiêu thụ <strong>glucose</strong> → sinh nhiều <strong>acid lactic</strong> làm <strong>giảm pH máu</strong>; bơm Na⁺/K⁺-ATPase suy yếu làm <strong>K⁺ thoát ra huyết tương tăng cao</strong>, Na⁺ và nước vào HC làm thay đổi áp suất thẩm thấu và HC phồng tròn dễ vỡ.</td>
                <td>Câu hỏi đề thi SĐH: Máu dự trữ hơn 1 tháng sẽ có <strong>giảm glucose, tăng acid lactic (giảm pH), tăng K⁺ ngoại bào</strong>.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧬 4. Hệ thống Nhóm máu ABO và Rhesus (Rh)</div>
        <div class="grid-2">
          <div>
            <h4 style="margin-bottom:8px;color:var(--primary);">A. Hệ nhóm máu ABO (Landsteiner 1901)</h4>
            <p style="font-size:14px;margin-bottom:8px;">Bản chất kháng nguyên A, B trên màng HC là <strong>oligosaccharid / mucopolysaccharid</strong>. Tỉ lệ ở người Việt Nam: <strong>O (~48%) &gt; B (~28%) &gt; A (~20%) &gt; AB (~4%)</strong>.</p>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Nhóm máu</th>
                  <th>Kháng nguyên trên HC</th>
                  <th>Kháng thể trong Huyết tương</th>
                  <th>Tỉ lệ VN</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Nhóm A</strong></td><td>Kháng nguyên A</td><td>Anti-B (β)</td><td>~20%</td></tr>
                <tr><td><strong>Nhóm B</strong></td><td>Kháng nguyên B</td><td>Anti-A (α)</td><td>~28%</td></tr>
                <tr><td><strong>Nhóm AB</strong></td><td>Cả A và B</td><td>Không có anti-A, anti-B</td><td>~4%</td></tr>
                <tr><td><strong>Nhóm O</strong></td><td>Không có A, B (có KN H)</td><td>Cả Anti-A và Anti-B</td><td>~48%</td></tr>
              </tbody>
            </table>
            </div>
            <div class="callout pearl">
              <div class="callout-title">💡 Phân biệt Kháng thể Tự nhiên (IgM) vs Miễn dịch (IgG)</div>
              <ul>
                <li><strong>Kháng thể tự nhiên hệ ABO:</strong> Bản chất là <strong>IgM</strong>, xuất hiện từ <strong>2 – 8 tháng sau sinh</strong>, đạt nồng độ tối đa lúc 8 – 10 tuổi, <strong>không qua được nhau thai</strong>, hoạt động mạnh ở nhiệt độ lạnh (4–20°C), gây ngưng kết mạnh.</li>
                <li><strong>Kháng thể miễn dịch (và kháng thể anti-D hệ Rh):</strong> Bản chất là <strong>IgG</strong>, xuất hiện sau truyền máu khác nhóm hoặc mang thai bất đồng, <strong>qua được nhau thai</strong>, hoạt động tối ưu ở <strong>37°C</strong>, là kháng thể không hoàn toàn.</li>
              </ul>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom:8px;color:var(--primary);">B. Hệ Rhesus (Rh) & Hai phương pháp Định nhóm máu</h4>
            <ul class="theory-list">
              <li><strong>Hệ Rh:</strong> Gồm 6 kháng nguyên C, D, E, c, d, e; trong đó <strong>Kháng nguyên D</strong> có tính kháng nguyên mạnh nhất. Có KN D trên HC là <strong>Rh(+)</strong> (người Việt Nam chiếm <strong>99,92%</strong>); không có KN D là <strong>Rh(-)</strong> (0,08%).</li>
              <li><strong>Đặc điểm kháng thể hệ Rh:</strong> Bình thường trong huyết tương người Rh(-) <strong>KHÔNG có kháng thể anti-D tự nhiên</strong>. Anti-D (bản chất <strong>IgG</strong>) chỉ sinh ra khi người Rh(-) được truyền máu Rh(+) hoặc mẹ Rh(-) mang thai con Rh(+).</li>
              <li><strong>Bất đồng nhóm máu mẹ Rh(-) – con Rh(+):</strong> Lần mang thai đầu thường an toàn (trừ khi từng truyền nhầm máu Rh+). Từ <strong>lần mang thai thứ 2</strong> trở đi, IgG anti-D của mẹ qua nhau thai gây <strong>vàng da tán huyết sơ sinh / phù thai (Erythroblastosis fetalis)</strong>. Dự phòng bằng tiêm Anti-D (RhoGAM) cho mẹ.</li>
            </ul>
            <div class="callout formula">
              <div class="callout-title">🔬 2 Phương pháp Định nhóm máu ABO</div>
              <ul>
                <li><strong>Nghiệm pháp Hồng cầu (Beth-Vincent – Phương pháp xuôi):</strong> Dùng <strong>Huyết thanh mẫu</strong> đã biết kháng thể (Anti-A, Anti-B, Anti-AB) trộn với máu/HC bệnh nhân để tìm Kháng nguyên trên HC.</li>
                <li><strong>Nghiệm pháp Huyết thanh (Simonin – Phương pháp ngược):</strong> Dùng <strong>Hồng cầu mẫu</strong> đã biết kháng nguyên (HC mẫu A, HC mẫu B) trộn với huyết thanh bệnh nhân để tìm Kháng thể trong huyết tương.</li>
                <li><strong>Phản ứng chéo (Cross-matching):</strong>
                  <br/>• <em>Chéo chính (Quan trọng nhất):</em> <strong>Hồng cầu người cho + Huyết thanh người nhận</strong> (bắt buộc tuyệt đối không được ngưng kết!).
                  <br/>• <em>Chéo phụ:</em> Huyết thanh người cho + Hồng cầu người nhận.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Hình dạng đĩa lõm hai mặt của hồng cầu mang lại lợi ích sinh lý nào sau đây, NGOẠI TRỪ:",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Máu",
        options: [
          "Tăng diện tích tiếp xúc của hồng cầu lên khoảng 30%",
          "Giúp hồng cầu biến dạng dễ dàng khi đi qua các mao mạch có đường kính nhỏ hơn nó",
          "Tăng tốc độ khuếch tán khí O2 và CO2 vào đến trung tâm tế bào",
          "Tăng dự trữ năng lượng ATP nhờ tăng số lượng ty thể ở vùng ngoại vi hồng cầu"
        ],
        answer: 3,
        explain: "Hồng cầu trưởng thành KHÔNG có nhân và KHÔNG có ty thể (chuyển hóa glucose hoàn toàn theo con đường đường phân yếm khí Embden-Meyerhof và chu trình pentose phosphate). Ba lợi ích của hình đĩa lõm 2 mặt là: (1) Tăng diện tích tiếp xúc 30% (đạt ~3.000 m²), (2) Tăng tốc độ khuếch tán khí, (3) Biến dạng dễ dàng qua mao mạch hẹp."
      },
      {
        q: "Yếu tố nào trên màng hồng cầu đóng vai trò chính tạo nên điện tích âm giúp các hồng cầu không dính vào nhau và quyết định tốc độ lắng máu (ESR)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.11",
        options: [
          "Acid sialic ở lớp ngoài màng hồng cầu",
          "Protein spectrin ở lớp khung xương màng",
          "Enzyme G6PD ở lớp trong cùng",
          "Cholesterol ở lớp lipid kép"
        ],
        answer: 0,
        explain: "Các phân tử acid sialic ở lớp ngoài màng hồng cầu tích điện âm làm các hồng cầu đẩy nhau. Khi nồng độ fibrinogen hoặc globulin huyết tương tăng (trong viêm nhiễm), điện tích âm bị trung hòa làm hồng cầu dính nhau thành chuỗi tiền và lắng nhanh hơn."
      },
      {
        q: "Sức bền thẩm thấu của hồng cầu trong máu toàn phần người bình thường ở dung dịch NaCl có giá trị nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.11",
        options: [
          "Bắt đầu vỡ ở NaCl 4,6‰ và vỡ hoàn toàn ở NaCl 3,4‰",
          "Bắt đầu vỡ ở NaCl 9,0‰ và vỡ hoàn toàn ở NaCl 4,6‰",
          "Bắt đầu vỡ ở NaCl 3,4‰ và vỡ hoàn toàn ở NaCl 4,6‰",
          "Bắt đầu vỡ ở NaCl 5,5‰ và vỡ hoàn toàn ở NaCl 4,5‰"
        ],
        answer: 0,
        explain: "Theo giáo trình Sinh lý YDS 2025 (tr.11): đối với máu toàn phần, hồng cầu bắt đầu vỡ (sức bền tối thiểu) ở NaCl 4,6‰ (0,46%) và vỡ hoàn toàn (sức bền tối đa) ở NaCl 3,4‰ (0,34%)."
      },
      {
        q: "Đặc điểm nào sau đây ĐÚNG khi nói về phản ứng kết hợp giữa Hemoglobin và Oxy?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Câu 21",
        options: [
          "O2 gắn với Fe2+ trong nhân heme bằng phản ứng gắn oxy (oxygenation), sắt vẫn giữ hóa trị 2",
          "O2 oxy hóa Fe2+ thành Fe3+ để tạo thành oxyhemoglobin",
          "Mỗi phân tử Hemoglobin chỉ gắn được tối đa 1 phân tử O2",
          "O2 gắn vào nhóm -NH2 của chuỗi polypeptid globin"
        ],
        answer: 0,
        explain: "Phản ứng giữa Hb và O2 là phản ứng gắn oxy thuận nghịch (oxygenation), KHÔNG phải phản ứng oxy hóa nên sắt vẫn ở trạng thái Fe2+. Nếu Fe2+ bị oxy hóa thành Fe3+ sẽ tạo Methemoglobin (MetHb) không có khả năng vận chuyển O2. CO2 mới là khí gắn vào nhóm -NH2 của globin."
      },
      {
        q: "Khi ngộ độc khí CO (Carbon monoxide), phương pháp điều trị sinh lý hiệu quả nhất là cho bệnh nhân thở hỗn hợp khí nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.15",
        options: [
          "95% O2 và 5% CO2",
          "100% O2 nguyên chất ở áp suất thấp",
          "80% N2 và 20% O2",
          "50% O2 và 50% CO2"
        ],
        answer: 0,
        explain: "Khí CO có ái lực với Hb gấp 210 lần O2. Cho thở 95% O2 + 5% CO2 (khí Carbogen) giúp: (1) Phân áp O2 rất cao cạnh tranh đẩy CO ra khỏi HbCO, và (2) 5% CO2 kích thích mạnh trung tâm hô hấp làm tăng thông khí phế nang để thải nhanh CO ra ngoài."
      },
      {
        q: "Sau 20 tuổi, cơ quan nào là nơi sản xuất hồng cầu chủ yếu của cơ thể người?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Câu 10",
        options: [
          "Tủy đỏ của các xương dẹt (xương ức, xương sườn, đốt sống, xương chậu)",
          "Tủy của tất cả các xương dài như thân xương đùi và xương chày",
          "Gan và lách",
          "Túi noãn hoàng và hạch bạch huyết"
        ],
        answer: 0,
        explain: "Sau 20 tuổi, tủy các xương dài bị nhiễm mỡ biến thành tủy vàng không còn tạo máu; chỉ còn tủy đỏ ở các xương dẹt (xương ức, xương sườn, đốt sống, xương sọ, xương chậu) và đầu gần xương đùi/xương cánh tay tiếp tục sản sinh hồng cầu."
      },
      {
        q: "Trong cơ thể, sắt được dự trữ chủ yếu ở gan (khoảng 60%) dưới dạng chính nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS & Sách TN Câu 38",
        options: [
          "Ferritin",
          "Transferrin",
          "Apotransferrin",
          "Hepcidin"
        ],
        answer: 0,
        explain: "Transferrin là dạng VẬN CHUYỂN sắt trong huyết tương. Ferritin là dạng DỰ TRỮ sắt chủ yếu trong gan và hệ võng nội mô (ngoài ra còn một lượng nhỏ dự trữ dưới dạng không hòa tan là Hemosiderin). Hepcidin là hormon của gan điều hòa hấp thu sắt."
      },
      {
        q: "Bệnh nhân sau phẫu thuật cắt bỏ toàn bộ dạ dày hoặc viêm teo niêm mạc dạ dày sẽ bị thiếu máu hồng cầu khổng lồ (ác tính) do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.19",
        options: [
          "Thiếu yếu tố nội tại (IF) của tế bào thành dạ dày nên không hấp thu được Vitamin B12 ở hồi tràng",
          "Thiếu HCl nên không hấp thu được Vitamin B12 ngay tại niêm mạc dạ dày",
          "Thiếu pepsin nên không hấp thu được acid folic ở tá tràng",
          "Giảm tiết Erythropoietin từ tế bào G của hang vị dạ dày"
        ],
        answer: 0,
        explain: "Tế bào thành (viền) của dạ dày tiết Yếu tố nội tại (Intrinsic Factor - IF). IF kết hợp với Vitamin B12 bảo vệ B12 khỏi men tiêu hóa và gắn vào thụ thể ở HỒI TRÀNG để hấp thu theo cơ chế ẩm bào. Thiếu B12 làm rối loạn tổng hợp DNA gây thiếu máu hồng cầu khổng lồ (MCV > 100 fL)."
      },
      {
        q: "Một đơn vị máu được bảo quản trong ngân hàng máu quá 1 tháng sẽ có những biến đổi sinh hóa nào sau đây?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 5",
        options: [
          "Giảm nồng độ glucose, tăng acid lactic (giảm pH), tăng nồng độ K+ ngoại bào",
          "Tăng nồng độ glucose, tăng pH máu, giảm nồng độ K+ huyết tương",
          "Giảm acid lactic, tăng 2,3-DPG và giảm Na+ nội bào",
          "Không thay đổi nồng độ K+ hay pH nhờ hồng cầu ngừng chuyển hóa hoàn toàn"
        ],
        answer: 0,
        explain: "Trong máu bảo quản lâu (> 1 tháng), hồng cầu tiếp tục đường phân yếm khí làm GIẢM glucose, TĂNG acid lactic (làm giảm pH máu). Do thiếu ATP và nhiệt độ lạnh làm giảm hoạt động bơm Na+/K+-ATPase nên K+ rò rỉ từ trong hồng cầu ra huyết tương gây TĂNG K+ máu ngoại bào, Na+ và nước đi vào làm thay đổi áp suất thẩm thấu."
      },
      {
        q: "Chất nào sau đây ÍT cần thiết trực tiếp nhất cho sự tạo thành hồng cầu so với các chất còn lại?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Đồng (Cu)",
          "Sắt (Fe)",
          "Vitamin B12",
          "Acid folic"
        ],
        answer: 0,
        explain: "Sắt (tạo nhân heme), Vitamin B12 và Acid folic (tổng hợp DNA giúp nhân trưởng thành) là 3 nguyên liệu thiết yếu trực tiếp nhất; thiếu chúng gây thiếu máu đặc hiệu ngay. Đồng (Cu) chỉ đóng vai trò vi lượng xúc tác phụ."
      },
      {
        q: "Khi định nhóm máu bằng nghiệm pháp hồng cầu (Beth-Vincent), máu của bệnh nhân X gây ngưng kết với huyết thanh mẫu Anti-B và Anti-AB, KHÔNG ngưng kết với Anti-A. Huyết thanh của bệnh nhân X sẽ có đặc điểm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 5, tr.48",
        options: [
          "Chứa kháng thể Anti-A và làm ngưng kết hồng cầu mẫu A trong nghiệm pháp Simonin",
          "Chứa kháng thể Anti-B và làm ngưng kết hồng cầu mẫu B",
          "Không chứa kháng thể nào của hệ ABO",
          "Chứa cả hai kháng thể Anti-A và Anti-B"
        ],
        answer: 0,
        explain: "Máu bệnh nhân ngưng kết với Anti-B và Anti-AB nhưng không ngưng kết với Anti-A → Trên màng hồng cầu có kháng nguyên B → Bệnh nhân thuộc nhóm máu B. Theo quy tắc Landsteiner, huyết tương người nhóm máu B có kháng thể tự nhiên Anti-A (sẽ làm ngưng kết hồng cầu mẫu A trong nghiệm pháp huyết thanh Simonin)."
      },
      {
        q: "Phát biểu nào sau đây ĐÚNG khi so sánh kháng thể tự nhiên hệ ABO và kháng thể miễn dịch hệ Rhesus (Anti-D)?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Máu",
        options: [
          "Kháng thể tự nhiên hệ ABO chủ yếu là IgM không qua được nhau thai, còn Anti-D hệ Rh là IgG qua được nhau thai",
          "Cả kháng thể tự nhiên hệ ABO và Anti-D hệ Rh đều có sẵn ngay từ khi trẻ mới sinh ra",
          "Người có nhóm máu Rh(-) luôn có sẵn kháng thể Anti-D tự nhiên trong huyết tương",
          "Anti-D là kháng thể IgM kích thước lớn nên gây tai biến ngay ở lần mang thai đầu tiên"
        ],
        answer: 0,
        explain: "Kháng thể tự nhiên hệ ABO là IgM (kích thước lớn, không qua nhau thai, hình thành từ 2–8 tháng sau sinh). Ngược lại, hệ Rh KHÔNG có kháng thể tự nhiên; Anti-D là kháng thể miễn dịch bản chất IgG (chỉ xuất hiện sau khi tiếp xúc kháng nguyên D) và đi qua được hàng rào nhau thai gây tan máu thai nhi ở các lần mang thai sau."
      }
    ]
  },

  // ========================================================================
  // BÀI 2: SINH LÝ TIỂU CẦU VÀ SỰ CẦM MÁU
  // ========================================================================
  {
    id: 2,
    group: "I. SINH LÝ MÁU",
    title: "Bài 2: Sinh lý tiểu cầu và sự cầm máu",
    shortTitle: "Tiểu cầu & Cầm máu",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 4 (tr.35–45)",
    summary: "Đặc tính cấu trúc-chức năng tiểu cầu, cầm máu tức thời (co mạch & nút chặn tiểu cầu), dòng thác đông máu (nội sinh, ngoại sinh, đường chung), co cục máu, phân hủy fibrin và các xét nghiệm TS, TC, TQ, TCK.",
    simId: "sim_coagulation",
    simTitle: "Mô phỏng Dòng thác Đông máu & Biện luận Xét nghiệm Cầm máu - Đông máu (TS, TQ, TCK)",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">🩹 1. Sinh lý Tiểu cầu (Platelets / Thrombocytes)</div>
          <ul class="theory-list">
            <li><strong>Số lượng & Đời sống:</strong> <strong>150.000 – 300.000 /mm³ máu</strong> (2/3 lưu hành trong máu, 1/3 dự trữ ở lách). Đời sống <strong>8 – 12 ngày</strong>. Là mảnh vỡ bào tương của <strong>Mẫu tiểu cầu (Megakaryocyte)</strong> ở tủy xương, không có nhân, đường kính 2 – 4 μm.</li>
            <li><strong>Cấu trúc đặc hiệu liên quan chức năng cầm máu:</strong>
              <ul style="padding-left:18px;margin-top:4px;">
                <li><strong>Lớp Glycoprotein bề mặt màng:</strong> Ngăn tiểu cầu kết dính vào nội mô bình thường (vì cùng tích điện âm), nhưng giúp bám dính mạnh vào lớp <strong>collagen</strong> dưới nội mô khi mạch tổn thương. Đặc biệt: <strong>Glycoprotein Ib (GPIb)</strong> gắn với yếu tố <strong>von Willebrand (vWF)</strong>; <strong>GP IIb/IIIa</strong> gắn với <strong>Fibrinogen</strong> để kết tập tiểu cầu.</li>
                <li><strong>Lớp Phospholipid màng:</strong> Tích điện âm rất mạnh, chứa <strong>Yếu tố III tiểu cầu</strong> giúp hoạt hóa nhiều giai đoạn đông máu.</li>
                <li><strong>Bào tương:</strong> Chứa protein co rút <strong>Thrombosthenin</strong> (giống actomyosin cơ), <strong>Retractozyme</strong> (giúp co cục máu), hệ vi ống, hạt đậm (chứa <strong>ADP, ATP, Ca²⁺, Serotonin</strong>), hạt alpha (vWF, yếu tố V, VIII, PDGF), và hệ enzyme tổng hợp <strong>Thromboxan A₂ (TXA₂)</strong> từ phospholipid màng.</li>
              </ul>
            </li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">💡 Chức năng Tiểu cầu ngoài Đông máu</div>
            Tiểu cầu còn bảo vệ thành mạch (lấp các khoảng hở nội mô – khi tiểu cầu giảm sẽ gây xuất huyết dưới da dạng chấm/nốt dù không chấn thương), trung hòa khả năng chống đông của Heparin, và tiết PDGF kích thích lành vết thương.
          </div>
        </div>

        <div class="card">
          <div class="card-title">⏱️ 2. Giai đoạn Cầm máu Tức thời (Primary Hemostasis)</div>
          <h4 style="color:var(--primary);margin-bottom:6px;">A. Co mạch tại chỗ (Vasoconstriction)</h4>
          <ul class="theory-list">
            <li>Xảy ra ngay lập tức sau khi mạch máu bị tổn thương, kéo dài 20 – 30 phút.</li>
            <li><strong>Cơ chế:</strong> (1) <strong>Co thắt cơ trơn tại chỗ</strong> (myogenic spasm – đóng vai trò quan trọng nhất); (2) <strong>Phản xạ thần kinh</strong> bắt nguồn từ cảm giác đau ở mạch máu hoặc mô lân cận; (3) <strong>Yếu tố thể dịch tại chỗ:</strong> <strong>Endothelin</strong> (từ tế bào nội mô tổn thương) và <strong>Serotonin (5-HT), Thromboxan A₂, Adrenalin</strong> (từ tiểu cầu phóng thích).</li>
            <li><strong>Điều kiện để co mạch tốt:</strong> Thành mạch phải <strong>vững chắc và có khả năng đàn hồi tốt</strong> (thiếu Vitamin C làm giảm tổng hợp collagen gây bệnh Scorbut dễ chảy máu chân răng).</li>
          </ul>
          <h4 style="color:var(--primary);margin:10px 0 6px;">B. Thành lập Nút chặn Tiểu cầu (Đinh cầm máu Hayem)</h4>
          <ol class="theory-list">
            <li><strong>Kết dính (Adhesion):</strong> Tiểu cầu gắn vào sợi <strong>Collagen</strong> dưới nội mô thông qua cầu nối <strong>vWF – thụ thể GPIb</strong>.</li>
            <li><strong>Hoạt hóa & Phóng thích (Activation):</strong> Tiểu cầu phồng lên, thò chân giả, giải phóng <strong>ADP</strong> và tổng hợp <strong>Thromboxan A₂</strong>.</li>
            <li><strong>Kết tập (Aggregation):</strong> <strong>ADP và TXA₂</strong> hoạt hóa các tiểu cầu lân cận đến bám dính với nhau qua cầu nối <strong>Fibrinogen – GP IIb/IIIa</strong> theo cơ chế <strong>tự duy trì (feedback dương)</strong> tạo nút chặn tiểu cầu bịt kín vết thương nhỏ.</li>
          </ol>
          <div class="callout trap">
            <div class="callout-title">⚠️ Bẫy Đề Thi: Thời gian máu chảy (TS - Duke)</div>
            <strong>Thời gian máu chảy (TS = 2 – 4 phút)</strong> và <strong>nghiệm pháp dây thắt</strong> chỉ khảo sát <strong>Cầm máu ban đầu (Thành mạch + Tiểu cầu)</strong>. Khi thiếu các yếu tố đông máu huyết tương (như Hemophilia A/B/C), <strong>TS vẫn BÌNH THƯỜNG</strong>, còn thời gian máu đông (TC, TCK) mới kéo dài!
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">⛓️ 3. Giai đoạn Đông máu Huyết tương (3 Giai đoạn chính)</div>
        <div class="grid-2">
          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">Giai đoạn 1: Thành lập Phức hợp men Prothrombinase</h4>
            <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Đặc điểm</th>
                  <th>Con đường Ngoại sinh (Extrinsic)</th>
                  <th>Con đường Nội sinh (Intrinsic)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Khởi phát</strong></td>
                  <td>Mô tổn thương giải phóng <strong>Thromboplastin mô (Yếu tố III)</strong>.</td>
                  <td>Máu tiếp xúc <strong>Collagen</strong> dưới nội mô hoặc bề mặt tích điện âm (thủy tinh) hoạt hóa <strong>Yếu tố XII</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Các yếu tố tham gia</strong></td>
                  <td><strong>III, VII</strong> → hoạt hóa <strong>X</strong> (cùng <strong>V, Ca²⁺</strong>, phospholipid).<br/><em>(Gồm: III, VII, X, V, IV)</em></td>
                  <td><strong>XII → XI → IX (+ VIII, Ca²⁺, PL)</strong> → hoạt hóa <strong>X</strong> (cùng <strong>V, Ca²⁺</strong>, PL).<br/><em>(Gồm: XII, XI, IX, VIII, X, V, IV)</em></td>
                </tr>
                <tr>
                  <td><strong>Thời gian</strong></td>
                  <td><strong>Rất nhanh (12 – 15 giây)</strong></td>
                  <td><strong>Chậm hơn (vài phút)</strong></td>
                </tr>
                <tr>
                  <td><strong>Xét nghiệm khảo sát</strong></td>
                  <td><strong>Thời gian Quick (TQ / PT)</strong> (bình thường 12–15s)</td>
                  <td><strong>TCK (aPTT)</strong> (45–70s) hoặc Thời gian máu đông <strong>TC</strong> (Lee-White 8–12 phút)</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          <div>
            <h4 style="color:var(--primary);margin-bottom:6px;">Giai đoạn 2 & 3: Đường chung (Common Pathway)</h4>
            <ul class="theory-list">
              <li><strong>Giai đoạn 2 (Chuyển Prothrombin thành Thrombin):</strong>
                <br/><code>Prothrombin (Yếu tố II) --[Prothrombinase + Ca²⁺]--> Thrombin (IIa)</code>
                <br/>Thrombin tạo ra sẽ feedback dương hoạt hóa mạnh yếu tố V, VIII, XIII và tiểu cầu.
              </li>
              <li><strong>Giai đoạn 3 (Chuyển Fibrinogen thành Fibrin bền vững):</strong>
                <br/><code>Fibrinogen (I, hòa tan) --[Thrombin]--> Fibrin đơn phân --> Fibrin S (trùng hợp, hòa tan) --[Yếu tố XIIIa + Ca²⁺]--> Fibrin I (mạng lưới không hòa tan, ổn định)</code>.
              </li>
            </ul>
            <div class="callout formula">
              <div class="callout-title">📌 Nguồn gốc Yếu tố Đông máu & Bệnh lý Kinh điển</div>
              <ul>
                <li><strong>Nơi tổng hợp:</strong> Hầu hết do <strong>GAN</strong> tổng hợp (trừ yếu tố III từ mô, IV là Ca²⁺, và phần lớn yếu tố VIII do tế bào nội mô sản xuất).</li>
                <li><strong>Phụ thuộc Vitamin K tại gan:</strong> <strong>Yếu tố II, VII, IX, X</strong> (nhớ: <strong>1972</strong>).</li>
                <li><strong>Bệnh ưa chảy máu (Hemophilia):</strong>
                  <br/>• <strong>Hemophilia A (85%):</strong> Thiếu yếu tố <strong>VIII</strong> (di truyền lặn NST X).
                  <br/>• <strong>Hemophilia B (10–15%, bệnh Christmas):</strong> Thiếu yếu tố <strong>IX</strong> (lặn NST X).
                  <br/>• <strong>Hemophilia C:</strong> Thiếu yếu tố <strong>XI</strong> (NST thường).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔄 4. Co cục máu & Phân hủy Fibrin (Tan cục máu)</div>
          <ul class="theory-list">
            <li><strong>Co cục máu (3 – 4 giờ sau đông):</strong> Cục máu co lại còn 40–55% thể tích ban đầu dưới tác dụng của enzyme <strong>Retractozyme</strong> và protein co rút <strong>Thrombosthenin</strong> của tiểu cầu, tiết ra dịch vàng trong gọi là <strong>Huyết thanh (Serum)</strong>.
              <br/>• <em>Huyết thanh khác Huyết tương:</em> Huyết thanh <strong>KHÔNG còn Fibrinogen (I) và các yếu tố II, V, VIII</strong> (nên huyết thanh không đông được nữa).
              <br/>• <em>Ý nghĩa của co cục máu:</em> Kéo sát hai bờ vết thương lại gần nhau làm ngăn chảy máu tái phát và giúp vết thương mau lành.
            </li>
            <li><strong>Phân hủy Fibrin (Tan cục máu – sau 24 – 48 giờ):</strong>
              <br/>• Tiền men <strong>Plasminogen</strong> (theo sách YDS có nhiều trong các <strong>bạch cầu ưa acid / Eosinophil</strong> và huyết tương) được hoạt hóa thành <strong>Plasmin (Fibrinolysin)</strong> nhờ: <strong>t-PA</strong> (từ nội mô), <strong>Urokinase</strong> (thận), <strong>Streptokinase</strong> (vi khuẩn), <strong>Thrombin, Yếu tố XIIa</strong>, enzyme lysosome mô.
              <br/>• <strong>Plasmin</strong> cắt sợi fibrin thành các mảnh FDP (D-dimer), giúp thông suốt lòng mạch để tái tưới máu mô.
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🛡️ 5. Các Chất Chống Đông Tự Nhiên & Lâm Sàng</div>
          <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Chất chống đông</th>
                <th>Nguồn gốc / Cơ chế tác dụng chuẩn YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Antithrombin III</strong> (và chính sợi Fibrin hấp phụ 85–90% thrombin)</td>
                <td>Alpha-globulin huyết tương: <strong>Kết hợp và bất hoạt Thrombin</strong> (ngăn cản thrombin biến đổi fibrinogen thành fibrin), đồng thời ức chế IXa, Xa.</td>
              </tr>
              <tr>
                <td><strong>Heparin</strong></td>
                <td>Polysaccharid tích điện âm do <strong>Dưỡng bào (Mast cell) và Bạch cầu ưa kiềm (Basophil)</strong> tiết (nhiều ở phổi, gan). Làm tăng hiệu lực của Antithrombin III lên <strong>100 – 1000 lần</strong>, ngăn tạo prothrombinase và ức chế thrombin.</td>
              </tr>
              <tr>
                <td><strong>Protein C & Protein S</strong> (cùng Thrombomodulin)</td>
                <td>Phụ thuộc Vitamin K tại gan; bất hoạt yếu tố <strong>Va và VIIIa</strong>.</td>
              </tr>
              <tr>
                <td><strong>Dicoumarin (Warfarin)</strong></td>
                <td>Cạnh tranh với <strong>Vitamin K</strong> tại gan → giảm tổng hợp các yếu tố <strong>II, VII, IX, X</strong> (tác dụng chậm sau 1–2 ngày, theo dõi bằng TQ/INR).</td>
              </tr>
              <tr>
                <td><strong>Natri citrat, Amoni/Kali oxalat, EDTA</strong></td>
                <td>Kết hợp với ion <strong>Ca²⁺ (Yếu tố IV)</strong> làm mất Ca²⁺ tự do (dùng chống đông trong ống nghiệm/bịch máu dự trữ).</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Cấu trúc nào trên bề mặt màng tiểu cầu giúp tiểu cầu kết dính đặc hiệu vào yếu tố von Willebrand (vWF) tại lớp collagen dưới nội mô khi thành mạch bị tổn thương?",
        source: "Đề thi Sinh lý SĐH YDS 2024 & Sách SL 2025 tr.35",
        options: [
          "Lớp Glycoprotein màng (đặc biệt là thụ thể Glycoprotein Ib)",
          "Lớp Phospholipid tích điện âm (yếu tố III tiểu cầu)",
          "Protein co rút Thrombosthenin trong bào tương",
          "Enzyme Retractozyme"
        ],
        answer: 0,
        explain: "Lớp áo glycoprotein trên bề mặt tiểu cầu ngăn tiểu cầu dính vào nội mô lành nhưng lại kết dính mạnh với vùng tổn thương thành mạch. Cụ thể, thụ thể Glycoprotein Ib (GPIb) trên màng tiểu cầu gắn đặc hiệu với yếu tố von Willebrand (vWF) đã bám trên collagen."
      },
      {
        q: "Trong quá trình hình thành nút chặn tiểu cầu, hai chất chủ yếu do tiểu cầu phóng thích có tác dụng hoạt hóa và lôi cuốn các tiểu cầu khác đến kết tập theo cơ chế tự duy trì là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.37",
        options: [
          "ADP và Thromboxan A2",
          "Heparin và Histamin",
          "Prostacyclin (PGI2) và Nitric oxide (NO)",
          "Plasminogen và Antithrombin III"
        ],
        answer: 0,
        explain: "Khi tiểu cầu bám vào collagen sẽ hoạt hóa và phóng thích ADP (từ hạt đậm) cùng Thromboxan A2 (tổng hợp từ acid arachidonic màng). ADP và TXA2 làm các tiểu cầu lân cận hoạt hóa, bộc lộ GP IIb/IIIa gắn fibrinogen tạo nút chặn tiểu cầu. Ngược lại, PGI2 và NO của nội mô lành lại ức chế kết tập tiểu cầu."
      },
      {
        q: "Điều kiện tiên quyết của thành mạch để giai đoạn co mạch cầm máu ban đầu đạt hiệu quả tốt là gì?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Thành mạch phải vững chắc và có khả năng đàn hồi tốt",
          "Lớp nội mô phải tiết nhiều Heparin và Prostacyclin",
          "Lòng mạch phải có nồng độ Fibrinogen cao trên 400 mg/dL",
          "Thành mạch phải có nhiều van tĩnh mạch ngăn dòng máu trào ngược"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý học YDS (Bài 4, tr.36): Điều kiện để sự co mạch đạt hiệu quả cầm máu tốt là thành mạch phải vững chắc và có tính đàn hồi tốt. Khi thiếu Vitamin C (bệnh Scorbut), thành mạch kém bền vững nên rất dễ chảy máu."
      },
      {
        q: "Các yếu tố đông máu tham gia vào con đường đông máu NGOẠI SINH để thành lập phức hợp men prothrombinase bao gồm:",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Câu 82",
        options: [
          "Yếu tố III (Thromboplastin mô), VII, X, V và Ca2+ (IV)",
          "Yếu tố XII, XI, IX, VIII, X, V và Ca2+ (IV)",
          "Yếu tố I, II, III, IV và XIII",
          "Yếu tố VIII, IX, XI, XII và Prekallikrein"
        ],
        answer: 0,
        explain: "Con đường ngoại sinh khởi phát khi mô tổn thương tiết yếu tố III (Thromboplastin mô), kết hợp với yếu tố VII và Ca2+ để hoạt hóa yếu tố X thành Xa. Sau đó Xa kết hợp với yếu tố V, Ca2+ (IV) và phospholipid tạo thành phức hợp Prothrombinase."
      },
      {
        q: "Các yếu tố đông máu nào sau đây do gan tổng hợp và bắt buộc phải có Vitamin K mới có hoạt tính sinh học?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.40",
        options: [
          "Yếu tố II, VII, IX, X",
          "Yếu tố I, V, VIII, XIII",
          "Yếu tố III, IV, VIII, XII",
          "Yếu tố V, VII, VIII, XI"
        ],
        answer: 0,
        explain: "Bốn yếu tố đông máu phụ thuộc Vitamin K tại gan là: Prothrombin (II), Proconvertin (VII), yếu tố Christmas (IX) và yếu tố Stuart (X) — mẹo nhớ: năm 1972 (10, 9, 7, 2)."
      },
      {
        q: "Một bệnh nhân nam bị chảy máu khớp gối kéo dài sau va chạm nhẹ. Xét nghiệm thấy: Số lượng tiểu cầu bình thường, thời gian máu chảy (TS) bình thường, thời gian Quick (TQ/PT) bình thường, nhưng thời gian TCK (aPTT) kéo dài rõ rệt. Chẩn đoán phù hợp nhất là:",
        source: "Đề thi Sinh lý SĐH YDS 2024",
        options: [
          "Bệnh Hemophilia (thiếu yếu tố VIII, IX hoặc XI thuộc con đường đông máu nội sinh)",
          "Giảm số lượng hoặc suy giảm chức năng tiểu cầu",
          "Thiếu hụt đơn độc yếu tố VII",
          "Suy gan nặng giai đoạn cuối làm giảm tổng hợp toàn bộ yếu tố đông máu"
        ],
        answer: 0,
        explain: "TS bình thường → cầm máu ban đầu (tiểu cầu, thành mạch) bình thường. TQ (PT) bình thường → con đường ngoại sinh (VII) và đường chung (X, V, II, I) bình thường. Chỉ có TCK (aPTT) kéo dài đơn độc → bất thường nằm riêng ở con đường NỘI SINH (XII, XI, IX, VIII), điển hình là bệnh Hemophilia A (thiếu VIII), B (thiếu IX) hoặc C (thiếu XI)."
      },
      {
        q: "Yếu tố đông máu nào có vai trò chuyển Fibrin đơn phân trùng hợp lỏng lẻo (Fibrin S hòa tan) thành mạng lưới Fibrin bền vững không hòa tan (Fibrin I)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.39",
        options: [
          "Yếu tố XIII (Yếu tố ổn định fibrin - FSF) cùng với Ca2+",
          "Yếu tố VIII (Yếu tố chống hemophilia A)",
          "Yếu tố VII (Proconvertin)",
          "Yếu tố XII (Yếu tố Hageman)"
        ],
        answer: 0,
        explain: "Dưới tác dụng của Yếu tố XIIIa (được hoạt hóa bởi Thrombin) và ion Ca2+, các liên kết đồng hóa trị bền vững được tạo ra giữa các sợi fibrin đơn phân, biến Fibrin S (soluble) thành Fibrin I (insoluble - ổn định)."
      },
      {
        q: "Hiện tượng co cục máu đông sau 3 - 4 giờ xảy ra nhờ vai trò trực tiếp của thành phần nào và mang lại ý nghĩa gì?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tham khảo",
        options: [
          "Nhờ men Retractozyme và protein Thrombosthenin của tiểu cầu, giúp kéo sát hai bờ vết thương làm mau lành",
          "Nhờ men Plasmin phân hủy mạng lưới fibrin để giải phóng hồng cầu trở lại tuần hoàn",
          "Nhờ yếu tố XII hoạt hóa hệ thống kallikrein làm co cơ trơn thành mạch",
          "Nhờ Antithrombin III trung hòa hết fibrinogen dư thừa trong huyết thanh"
        ],
        answer: 0,
        explain: "Co cục máu xảy ra nhờ tiểu cầu (men retractozyme và phân tử co rút thrombosthenin cần ATP và Ca2+). Ý nghĩa sinh học là kéo sát mép vết thương lại gần nhau, ngăn mở thông mạch máu trở lại và thúc đẩy lành sẹo. Khi giảm tiểu cầu, cục máu sẽ mềm nhão và không co được."
      },
      {
        q: "Huyết thanh (serum) thoát ra sau khi cục máu co khác với huyết tương (plasma) ở điểm cơ bản nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.41",
        options: [
          "Huyết thanh không còn Fibrinogen (I) và các yếu tố II, V, VIII nên không thể đông được nữa",
          "Huyết thanh chứa nhiều Fibrinogen và Prothrombin hơn huyết tương",
          "Huyết thanh không chứa kháng thể và albumin",
          "Huyết thanh chứa toàn bộ hồng cầu và tiểu cầu"
        ],
        answer: 0,
        explain: "Huyết thanh là huyết tương đã bị lấy mất Fibrinogen (Yếu tố I) và hầu hết các yếu tố II, V, VIII trong quá trình tạo cục máu đông, đồng thời có thêm nhiều serotonin, adrenalin và yếu tố tăng trưởng do tiểu cầu tiết ra."
      },
      {
        q: "Theo giáo trình Sinh lý học YDS, trong quá trình phân hủy fibrin (tan cục máu), tiền men Plasminogen được giải phóng từ loại bạch cầu nào khi đi đến cục máu đông?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.42 & Sách TN Câu 94",
        options: [
          "Bạch cầu hạt ưa acid (Eosinophil)",
          "Bạch cầu hạt ưa kiềm (Basophil)",
          "Bạch cầu mono",
          "Tương bào (Plasma cell)"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý học YDS 2025 (tr.42): Các bạch cầu ưa acid (Eosinophil) vận chuyển plasminogen đến vị trí cục máu đông và giải phóng plasminogen tại đó; dưới tác dụng của t-PA, urokinase, thrombin, XIIa... plasminogen chuyển thành plasmin làm tan sợi fibrin."
      },
      {
        q: "Tác dụng chống đông tự nhiên của Antithrombin III trong huyết tương là gì?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Ức chế hoạt tính của Thrombin, ngăn cản sự biến đổi Fibrinogen thành Fibrin",
          "Gắn kết và làm kết tủa toàn bộ ion Ca2+ trong máu lưu hành",
          "Cạnh tranh với Vitamin K tại tế bào gan",
          "Phân hủy trực tiếp mạng lưới Fibrin đã hình thành"
        ],
        answer: 0,
        explain: "Antithrombin III kết hợp với Thrombin (và các yếu tố Xa, IXa) làm bất hoạt Thrombin, ngăn cản Thrombin cắt Fibrinogen thành Fibrin. Khi có mặt Heparin (do dưỡng bào và bạch cầu ưa kiềm tiết), hoạt tính của Antithrombin III tăng lên gấp 100 – 1000 lần."
      },
      {
        q: "Thời gian máu chảy (TS - phương pháp Duke) khảo sát giai đoạn nào của quá trình cầm máu và thay đổi như thế nào khi thiếu hụt yếu tố VIII (Hemophilia A)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.44",
        options: [
          "Khảo sát giai đoạn cầm máu ban đầu (thành mạch và tiểu cầu); TS không thay đổi trong bệnh Hemophilia A",
          "Khảo sát con đường đông máu nội sinh; TS kéo dài trên 15 phút trong bệnh Hemophilia A",
          "Khảo sát con đường đông máu ngoại sinh; TS rút ngắn trong bệnh Hemophilia A",
          "Khảo sát giai đoạn tiêu sợi huyết; TS tăng gấp 3 lần khi thiếu yếu tố VIII"
        ],
        answer: 0,
        explain: "Thời gian máu chảy (TS, bình thường 2–4 phút) chỉ phụ thuộc vào sức bền/co thắt thành mạch và số lượng/chất lượng tiểu cầu. Nó KHÔNG thay đổi khi thiếu các yếu tố đông máu huyết tương (như Hemophilia A/B)."
      }
    ]
  },

  // ========================================================================
  // BÀI 3: HOẠT ĐỘNG ĐIỆN CỦA TIM
  // ========================================================================
  {
    id: 3,
    group: "II. SINH LÝ TIM MẠCH",
    title: "Bài 3: Hoạt động điện của tim",
    shortTitle: "Hoạt động điện của tim",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 6 (tr.52–71)",
    summary: "Hệ thống tạo nhịp và dẫn truyền tự động của tim, cơ chế ion của điện thế động đáp ứng nhanh (cơ thất, Purkinje) vs đáp ứng chậm (nút xoang, nút AV), thời kỳ trơ và sóng điện tâm đồ (ECG).",
    simId: "sim_cardiac_ap",
    simTitle: "Mô phỏng Đồ thị Điện thế động Cơ tim (Đáp ứng Nhanh vs Chậm), Dòng Ion & Điện tâm đồ (ECG)",
    theoryHtml: `
      <div class="card">
        <div class="card-title">⚡ 1. Hệ thống Tạo nhịp và Dẫn truyền của Tim</div>
        <p style="font-size:14px;margin-bottom:10px;">Tim có khả năng tự phát xung động (tính tự động) nhờ hệ mô nút biệt hóa. <strong>Nút xoang (SA node)</strong> có tần số phát xung nhanh nhất (<strong>60 – 100 lần/phút</strong>) nên đóng vai trò là <strong>nút tạo nhịp chủ đạo (Pacemaker)</strong> chi phối toàn bộ tim.</p>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Cấu trúc dẫn truyền</th>
                <th>Vị trí giải phẫu</th>
                <th>Tần số tự phát (lần/phút)</th>
                <th>Vận tốc dẫn truyền (m/giây)</th>
                <th>Đặc điểm sinh lý & Bẫy thi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Nút xoang (Keith-Flack / SA)</strong></td>
                <td>Thành sau trên tâm nhĩ phải, sát lỗ tĩnh mạch chủ trên.</td>
                <td><strong>60 – 100</strong> (nhanh nhất)</td>
                <td><strong>0,05 m/s</strong> (rất chậm)</td>
                <td>Chủ nhịp sinh lý của tim. Đáp ứng chậm.</td>
              </tr>
              <tr>
                <td><strong>2. Đường liên nút & Cơ nhĩ</strong></td>
                <td>3 bó: trước (Bachmann sang nhĩ trái), giữa (Wenckebach), sau (Thorel).</td>
                <td>—</td>
                <td><strong>1 m/s</strong> (cơ nhĩ 0,3 m/s)</td>
                <td>Dẫn xung từ nút xoang tỏa ra hai tâm nhĩ (tạo sóng P) và đến nút nhĩ-thất.</td>
              </tr>
              <tr>
                <td><strong>3. Nút nhĩ - thất (Aschoff-Tawara / AV)</strong></td>
                <td>Thành sau bên phải vách liên nhĩ, ngay sau van 3 lá.</td>
                <td><strong>40 – 60</strong></td>
                <td><strong>0,05 m/s</strong> (chậm nhất)</td>
                <td>Làm <strong>trì hoãn xung động ~0,1 giây</strong> để tâm nhĩ kịp co tống hết máu xuống tâm thất trước khi tâm thất co!</td>
              </tr>
              <tr>
                <td><strong>4. Bó His</strong></td>
                <td>Đi từ nút AV qua mô xơ nhĩ-thất xuống vách liên thất chia nhánh phải & trái.</td>
                <td><strong>30 – 40</strong></td>
                <td><strong>1 m/s</strong></td>
                <td>Cầu nối điện duy nhất giữa nhĩ và thất (chỉ dẫn truyền 1 chiều từ nhĩ xuống thất).</td>
              </tr>
              <tr>
                <td><strong>5. Mạng Purkinje</strong></td>
                <td>Tỏa khắp dưới nội tâm mạc 2 tâm thất.</td>
                <td><strong>15 – 40</strong></td>
                <td><strong>1,5 – 4 m/s (Nhanh nhất!)</strong></td>
                <td>Sợi rất to, nhiều đĩa nối (gap junctions) → dẫn truyền cực nhanh giúp toàn bộ khối cơ 2 tâm thất co đồng bộ cùng lúc.</td>
              </tr>
              <tr>
                <td><strong>6. Cơ tâm thất</strong></td>
                <td>Từ nội tâm mạc ra ngoại tâm mạc.</td>
                <td>—</td>
                <td><strong>0,3 – 1 m/s</strong></td>
                <td>Khử cực từ nội tâm mạc ra ngoại tâm mạc, nhưng tái cực theo chiều ngược lại (ngoại tâm mạc trước).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">📈 2. Điện thế động ĐÁP ỨNG NHANH (Cơ thất, Cơ nhĩ, Purkinje)</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Điện thế màng lúc nghỉ rất âm (<strong>–90 mV</strong>), duy trì nhờ kênh chỉnh lưu nhập bào <strong>I<sub>K1</sub></strong> và bơm <strong>Na⁺/K⁺-ATPase</strong> (bơm 3 Na⁺ ra, 2 K⁺ vào). Gồm 5 pha rõ rệt:</p>
          <ul class="theory-list">
            <li><strong>Pha 0 (Khử cực nhanh):</strong> Mở ồ ạt <strong>kênh Na⁺ nhanh phụ thuộc điện thế</strong> → dòng Na⁺ ùa vào làm điện thế tăng vọt từ –90 mV lên <strong>+20 đến +30 mV</strong> (đường dốc đứng).</li>
            <li><strong>Pha 1 (Tái cực sớm):</strong> Kênh Na⁺ nhanh bất hoạt, mở thoáng qua kênh <strong>K⁺ (I<sub>to</sub>)</strong> đi ra làm điện thế hạ nhẹ về gần 0 mV.</li>
            <li><strong>Pha 2 (Pha bình nguyên – Plateau, kéo dài 0,2 – 0,3s):</strong> Cơ chế kép:
              <br/>1. Mở <strong>kênh Ca²⁺ chậm (type L – Long-lasting)</strong> cho Ca²⁺ đi từ ngoài vào (kích hoạt co cơ tim).
              <br/>2. <strong>Độ dẫn của màng đối với K⁺ giảm xuống chỉ còn 1/5</strong> (hiện tượng chỉnh lưu nhập bào) làm K⁺ thoát ra chậm, cân bằng điện tích với dòng Ca²⁺ vào.
            </li>
            <li><strong>Pha 3 (Tái cực nhanh):</strong> Kênh Ca²⁺ type L đóng lại, mở mạnh các kênh <strong>K⁺</strong> cho K⁺ thoát nhanh ra ngoài đưa màng về –90 mV.</li>
            <li><strong>Pha 4 (Điện thế nghỉ ổn định):</strong> Duy trì ở <strong>–90 mV</strong> (ở sợi Purkinje pha 4 hơi dốc nhẹ). Bơm Na⁺/K⁺-ATPase và bơm trao đổi Na⁺/Ca²⁺ lập lại nồng độ ion ban đầu.</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🐢 3. Điện thế động ĐÁP ỨNG CHẬM (Nút xoang SA, Nút AV)</div>
          <p style="font-size:13.8px;margin-bottom:8px;">Tế bào nút xoang và nút AV hầu như không có kênh I<sub>K1</sub> và màng thấm tự nhiên với Na⁺/Ca²⁺ cao hơn nên điện thế âm tối đa cuối tâm trương chỉ đạt <strong>–60 đến –65 mV</strong> (tại mức này kênh Na⁺ nhanh bị bất hoạt hoàn toàn!).</p>
          <ul class="theory-list">
            <li><strong>Pha 4 (Khử cực tâm trương tự phát – Tạo nhịp Pacemaker):</strong> Điện thế pha 4 KHÔNG nằm ngang mà tự động dốc lên từ –60 mV đến ngưỡng <strong>–40 mV</strong> nhờ 3 cơ chế ion:
              <ol style="padding-left:18px;margin-top:4px;">
                <li>Giảm dần dòng K⁺ đi ra khỏi tế bào.</li>
                <li>Dòng <strong>Na⁺ đi vào qua kênh I<sub>f</sub> (funny current)</strong> mở ra khi màng tái cực âm.</li>
                <li>Mở <strong>kênh Ca²⁺ thoáng qua (type T – Transient)</strong> ở cuối pha 4 đưa điện thế chạm ngưỡng –40 mV.</li>
              </ol>
            </li>
            <li><strong>Pha 0 (Khử cực chậm):</strong> Khi đạt ngưỡng –40 mV, mở <strong>kênh Ca²⁺ chậm (type L)</strong> cho Ca²⁺ đi vào gây khử cực (KHÔNG phải do kênh Na⁺ nhanh!). Do đó pha 0 dốc thoải, biên độ thấp (~0 đến +10 mV) và dẫn truyền chậm (0,05 m/s).</li>
            <li><strong>KHÔNG có Pha 1 và KHÔNG có Pha 2 bình nguyên rõ rệt.</strong></li>
            <li><strong>Pha 3 (Tái cực):</strong> Kênh Ca²⁺ đóng, mở kênh <strong>K⁺</strong> cho K⁺ đi ra đưa màng về –60 mV để bắt đầu chu kỳ tự khử cực mới.</li>
          </ul>
          <div class="callout pearl">
            <div class="callout-title">💡 Cơ chế Thần kinh Tự chủ đổi nhịp Nút xoang</div>
            <ul>
              <li><strong>Giao cảm (Norepinephrine → β₁ → tăng cAMP):</strong> Tăng dòng I<sub>f</sub> và Ca²⁺ → làm <strong>tăng độ dốc pha 4</strong> → chạm ngưỡng –40 mV sớm hơn → <strong>Tăng nhịp tim</strong>.</li>
              <li><strong>Phó giao cảm (Dây X → ACh → M₂ → giảm cAMP):</strong> Mở kênh K⁺-ACh làm <strong>tăng phân cực màng</strong> (xuống –70 mV) và <strong>giảm độ dốc pha 4</strong> → lâu chạm ngưỡng → <strong>Giảm nhịp tim</strong>.</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🛡️ 4. Tính Hưng phấn & Thời kỳ Trơ của Cơ tim</div>
          <ul class="theory-list">
            <li><strong>Thời kỳ trơ tuyệt đối (ARP / ERP):</strong> Từ đầu pha 0 đến giữa pha 3 (khi điện thế tái cực về khoảng <strong>–50 mV</strong>), kéo dài <strong>0,25 – 0,30 giây</strong> ở cơ thất. Trong thời gian này, mọi kích thích dù mạnh đến đâu cũng KHÔNG gây được điện thế động mới.</li>
            <li><strong>Ý nghĩa sinh học sống còn:</strong> Nhờ pha bình nguyên (pha 2) kéo dài làm thời kỳ trơ tuyệt đối dài gần bằng thời gian co cơ tâm thu → <strong>Cơ tim KHÔNG BAO GIỜ bị co cứng uốn ván (tetanus)</strong> khi bị kích thích liên tục, bảo đảm tim luôn có thời gian giãn ra để nhận máu!</li>
            <li><strong>Thời kỳ trơ tương đối (RRP):</strong> Từ –50 mV đến gần cuối pha 3 (~0,05s). Nếu có kích thích mạnh trên ngưỡng sẽ tạo ra một nhát bóp sớm gọi là <strong>Ngoại tâm thu (Extrasystole)</strong>, theo sau là một khoảng <strong>nghỉ bù</strong> (do xung nút xoang rơi vào thời kỳ trơ của ngoại tâm thu).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">📟 5. Các Sóng và Khoảng trên Điện tâm đồ (ECG)</div>
          <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Thành phần ECG</th>
                <th>Thời gian bình thường</th>
                <th>Ý nghĩa sinh lý chuẩn YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sóng P</strong></td>
                <td><strong>0,08 – 0,10 giây</strong></td>
                <td><strong>Khử cực hai tâm nhĩ</strong> (nửa đầu nhĩ phải, nửa sau nhĩ trái). (Sóng tái cực nhĩ bị che khuất bởi QRS).</td>
              </tr>
              <tr>
                <td><strong>Khoảng PQ (hay PR)</strong></td>
                <td><strong>0,12 – 0,20 giây</strong></td>
                <td>Từ đầu sóng P đến đầu QRS (Q hoặc R): <strong>Thời gian dẫn truyền xung động từ nhĩ xuống thất</strong> (qua nút AV và bó His). Kéo dài &gt; 0,20s là Block nhĩ-thất.</td>
              </tr>
              <tr>
                <td><strong>Phức bộ QRS</strong></td>
                <td><strong>0,06 – 0,10 giây</strong></td>
                <td><strong>Khử cực hai tâm thất</strong>. Ngay sau đỉnh sóng R là bắt đầu tâm thất thu.</td>
              </tr>
              <tr>
                <td><strong>Đoạn ST</strong></td>
                <td>Đẳng điện</td>
                <td>Hai tâm thất đã khử cực hoàn toàn (tương ứng <strong>pha 2 bình nguyên</strong>). Chênh lên/xuống trong thiếu máu/nhồi máu cơ tim.</td>
              </tr>
              <tr>
                <td><strong>Sóng T</strong></td>
                <td>~0,15 – 0,20 giây</td>
                <td><strong>Tái cực hai tâm thất</strong> (tương ứng pha 3). Cùng chiều với QRS vì tái cực diễn ra từ thượng tâm mạc vào nội tâm mạc.</td>
              </tr>
              <tr>
                <td><strong>Khoảng QT</strong></td>
                <td><strong>0,35 – 0,40 giây</strong></td>
                <td>Tổng thời gian khử cực và tái cực tâm thất (thời kỳ tâm thu điện học).</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong hệ thống dẫn truyền tự động của tim, cấu trúc nào có vận tốc dẫn truyền xung động NHANH NHẤT và cấu trúc nào có vận tốc dẫn truyền CHẬM NHẤT?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Câu 62",
        options: [
          "Nhanh nhất ở mạng Purkinje (1,5 – 4 m/s); chậm nhất ở nút xoang và nút nhĩ-thất (0,05 m/s)",
          "Nhanh nhất ở nút xoang (4 m/s); chậm nhất ở mạng Purkinje (0,05 m/s)",
          "Nhanh nhất ở bó His (4 m/s); chậm nhất ở cơ tâm thất (0,02 m/s)",
          "Nhanh nhất ở cơ tâm nhĩ (2 m/s); chậm nhất ở bó Bachmann (0,05 m/s)"
        ],
        answer: 0,
        explain: "Mạng Purkinje có các sợi rất lớn và nhiều liên kết khe nên dẫn truyền nhanh nhất (1,5 – 4 m/s) giúp hai tâm thất khử cực và co bóp đồng bộ. Ngược lại, nút xoang và đặc biệt là nút nhĩ-thất (AV) dẫn truyền rất chậm (0,05 m/s) để tạo độ trễ cho tâm nhĩ kịp bơm máu xuống tâm thất trước khi thất co."
      },
      {
        q: "Tại sao nút xoang (SA node) lại đóng vai trò là nút tạo nhịp chủ đạo (pacemaker) điều khiển nhịp đập của toàn bộ trái tim?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.61",
        options: [
          "Vì nút xoang có tần số tự phát xung động cao nhất (60 – 100 lần/phút) so với các cấu trúc tự động khác",
          "Vì nút xoang có điện thế màng lúc nghỉ âm nhất (–95 mV)",
          "Vì nút xoang có vận tốc dẫn truyền nhanh nhất trong hệ thống dẫn truyền",
          "Vì chỉ có nút xoang mới có khả năng tự khử cực ở pha 4"
        ],
        answer: 0,
        explain: "Nút AV (40–60 l/p), bó His (30–40 l/p) và mạng Purkinje (15–40 l/p) đều có khả năng tự khử cực pha 4, nhưng nút xoang có tần số tự phát xung cao nhất (60–100 l/p) nên xung từ nút xoang luôn truyền xuống khử cực các nút dưới trước khi chúng kịp tự đạt ngưỡng (cơ chế ức chế vượt tần số - overdrive suppression)."
      },
      {
        q: "Pha 0 (khử cực nhanh) của điện thế động tế bào cơ tâm thất (đáp ứng nhanh) xảy ra do cơ chế ion nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.55",
        options: [
          "Mở ồ ạt kênh Na+ nhanh phụ thuộc điện thế cho dòng Na+ đi từ ngoài vào trong tế bào",
          "Mở kênh Ca2+ chậm (type L) cho dòng Ca2+ đi vào tế bào",
          "Mở kênh K+ cho dòng K+ đi từ trong ra ngoài tế bào",
          "Hoạt động của bơm Na+/K+-ATPase bơm 3 Na+ vào trong tế bào"
        ],
        answer: 0,
        explain: "Ở tế bào đáp ứng nhanh (cơ thất, cơ nhĩ, sợi Purkinje), pha 0 do sự mở đột ngột của kênh Na+ nhanh phụ thuộc điện thế khi màng đạt ngưỡng –65 mV, làm Na+ ùa vào đưa điện thế từ –90 mV lên +30 mV."
      },
      {
        q: "Ngược lại với cơ tâm thất, pha 0 (khử cực) của tế bào nút xoang và nút nhĩ-thất (đáp ứng chậm) chủ yếu do dòng ion nào tạo nên?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tim mạch",
        options: [
          "Dòng Ca2+ đi vào qua kênh Ca2+ chậm (type L)",
          "Dòng Na+ đi vào qua kênh Na+ nhanh",
          "Dòng K+ đi vào qua kênh chỉnh lưu nhập bào IK1",
          "Dòng Cl- đi ra khỏi tế bào"
        ],
        answer: 0,
        explain: "Ở tế bào nút xoang và nút AV (đáp ứng chậm), điện thế tâm trương tối đa chỉ khoảng –60 mV nên các kênh Na+ nhanh bị bất hoạt. Khi tự khử cực pha 4 chạm ngưỡng –40 mV, pha 0 diễn ra do mở kênh Ca2+ chậm (type L) cho Ca2+ đi vào, khiến sườn lên pha 0 thoải và vận tốc dẫn truyền chậm."
      },
      {
        q: "Cơ chế chính tạo nên pha 2 (pha bình nguyên - plateau) kéo dài trên đồ thị điện thế động của tế bào cơ tâm thất là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.55",
        options: [
          "Dòng Ca2+ đi vào qua kênh Ca2+ chậm (type L) kết hợp với sự giảm độ dẫn của màng đối với ion K+ (chỉ còn 1/5)",
          "Kênh Na+ nhanh tiếp tục mở kéo dài suốt 0,25 giây trong khi kênh Ca2+ đóng",
          "Dòng K+ đi ra ồ ạt cân bằng với dòng Cl- đi ra ngoài",
          "Sự ngưng hoạt động tạm thời của toàn bộ các kênh ion trên màng cơ tim"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.55): Pha bình nguyên (pha 2) của đáp ứng nhanh được duy trì nhờ 2 yếu tố: (1) Mở kênh Ca2+ chậm (type L) cho Ca2+ đi vào bào tương, và (2) Độ dẫn của màng đối với K+ giảm xuống chỉ còn 1/5 (chỉnh lưu nhập bào), giữ điện thế màng gần 0 mV trong 0,2–0,3 giây."
      },
      {
        q: "Đặc điểm điện sinh lý quan trọng nhất quyết định tính tự động (tự phát xung động) của tế bào nút xoang là gì?",
        source: "Đề thi Sinh lý SĐH YDS 2024",
        options: [
          "Pha 4 không ổn định mà tự khử cực dần lên đến ngưỡng kích thích nhờ dòng Na+ (kênh If), kênh Ca2+ type T và giảm dòng K+ đi ra",
          "Pha 2 bình nguyên kéo dài hơn gấp đôi so với tế bào cơ tâm thất",
          "Có rất nhiều kênh K+ chỉnh lưu nhập bào IK1 giữ điện thế nghỉ ở –95 mV",
          "Thời kỳ trơ tuyệt đối ngắn hơn 0,01 giây"
        ],
        answer: 0,
        explain: "Tính tự động của nút xoang là do điện thế tâm trương ở Pha 4 không giữ nguyên nằm ngang mà tự động khử cực chậm (pacemaker potential) từ –60 mV lên ngưỡng –40 mV nhờ: giảm dòng K+ đi ra, dòng Na+ đi vào qua kênh If (funny current) và dòng Ca2+ đi vào qua kênh Ca2+ type T."
      },
      {
        q: "Nhờ đặc điểm điện sinh lý nào mà cơ tim KHÔNG bị co cứng uốn ván (tetanus) như cơ vân khi bị kích thích với tần số cao?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.58",
        options: [
          "Thời kỳ trơ tuyệt đối của cơ tim kéo dài (0,25 – 0,30 giây) gần bằng thời gian co cơ tâm thu nhờ có pha bình nguyên",
          "Cơ tim không có mạng lưới nội cơ tương dự trữ ion Ca2+",
          "Vận tốc dẫn truyền qua nút nhĩ-thất quá nhanh",
          "Điện thế nghỉ của cơ tim ít âm hơn so với cơ vân"
        ],
        answer: 0,
        explain: "Nhờ pha bình nguyên (pha 2) do dòng Ca2+ đi vào kéo dài, thời kỳ trơ tuyệt đối (ERP) của cơ thất dài tới 0,25 – 0,30 giây (tương đương toàn bộ thời gian tâm thu cơ học). Do đó cơ tim phải bắt đầu giãn ra (pha 3) mới có thể nhận kích thích tiếp theo, không thể cộng gộp thành co cứng."
      },
      {
        q: "Ý nghĩa sinh lý của việc nút nhĩ - thất (AV node) dẫn truyền xung động rất chậm (làm trễ xung động khoảng 0,1 giây) là gì?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tim mạch",
        options: [
          "Giúp tâm nhĩ có đủ thời gian co bóp đẩy hết máu xuống tâm thất trước khi tâm thất bắt đầu co",
          "Giúp hai tâm thất co bóp trước hai tâm nhĩ",
          "Ngăn không cho bất kỳ xung động nào từ nút xoang truyền xuống được tâm thất",
          "Làm tăng thời gian đóng của van nhĩ-thất trong kỳ tâm trương"
        ],
        answer: 0,
        explain: "Độ trễ tại nút nhĩ-thất đảm bảo hai tâm nhĩ hoàn tất việc co bóp tống thêm 30% lượng máu xuống tâm thất rồi hai tâm thất mới nhận được xung động để co bóp tống máu ra đại tuần hoàn và tiểu tuần hoàn."
      },
      {
        q: "Trên điện tâm đồ (ECG) bình thường, khoảng PQ (hoặc PR) có giá trị bao nhiêu và biểu thị quá trình nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.68",
        options: [
          "0,12 – 0,20 giây; biểu thị thời gian dẫn truyền xung động từ tâm nhĩ xuống tâm thất",
          "0,06 – 0,10 giây; biểu thị thời gian khử cực hai tâm thất",
          "0,35 – 0,40 giây; biểu thị thời gian tái cực hai tâm thất",
          "0,08 – 0,10 giây; biểu thị thời gian co đồng thể tích của tâm thất"
        ],
        answer: 0,
        explain: "Khoảng PQ (từ đầu sóng P đến đầu sóng Q hoặc R khi không có sóng Q) bình thường từ 0,12 – 0,20 giây, phản ánh thời gian xung động đi từ nút xoang qua cơ nhĩ, nút nhĩ-thất và bó His tới tâm thất. Nếu PQ > 0,20 giây là block nhĩ-thất."
      },
      {
        q: "Sóng T trên điện tâm đồ (ECG) phản ánh hiện tượng điện sinh lý nào của tim?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.69",
        options: [
          "Sự tái cực của hai tâm thất",
          "Sự khử cực của hai tâm nhĩ",
          "Sự tái cực của hai tâm nhĩ",
          "Sự khử cực của vách liên thất"
        ],
        answer: 0,
        explain: "Sóng P là khử cực 2 tâm nhĩ; Phức bộ QRS là khử cực 2 tâm thất; Sóng T là tái cực 2 tâm thất (tương ứng pha 3 của điện thế động cơ thất)."
      },
      {
        q: "Khi một kích thích ngoại lai đủ mạnh rơi vào thời kỳ trơ tương đối (cuối pha 3) của cơ tâm thất sẽ gây ra hiện tượng gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.59",
        options: [
          "Một nhát bóp ngoại tâm thu đến sớm, theo sau là một khoảng nghỉ bù",
          "Cơ tim bị co cứng uốn ván kéo dài",
          "Không có bất kỳ đáp ứng điện hay cơ học nào xảy ra",
          "Nút xoang ngừng phát xung vĩnh viễn"
        ],
        answer: 0,
        explain: "Trong thời kỳ trơ tương đối (nửa sau pha 3), kích thích mạnh hơn ngưỡng bình thường sẽ gây ra một điện thế động sớm (nhát bóp ngoại tâm thu). Xung bình thường tiếp theo từ nút xoang truyền xuống sẽ rơi đúng vào thời kỳ trơ tuyệt đối của nhát ngoại tâm thu đó nên bị chặn lại, tạo ra khoảng nghỉ bù."
      },
      {
        q: "Sự kích thích thần kinh phó giao cảm (dây X) làm chậm nhịp tim thông qua cơ chế điện sinh lý nào tại nút xoang?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.62",
        options: [
          "Acetylcholine làm tăng tính thấm màng với K+ gây tăng phân cực (âm hơn) và làm giảm độ dốc tự khử cực pha 4",
          "Acetylcholine mở ồ ạt kênh Na+ nhanh làm rút ngắn pha 0",
          "Acetylcholine làm tăng nồng độ cAMP nội bào và mở kênh Ca2+ type L",
          "Acetylcholine ức chế kênh K+ làm điện thế màng nút xoang luôn ở mức –30 mV"
        ],
        answer: 0,
        explain: "Acetylcholine từ dây X gắn thụ thể M2 trên nút xoang làm mở kênh K+-ACh (K+ thoát ra làm điện thế cuối tâm trương âm sâu hơn về –70 mV) và giảm cAMP (giảm dòng If và Ca2+), khiến độ dốc pha 4 thoải hơn, mất nhiều thời gian hơn mới chạm ngưỡng –40 mV → nhịp tim chậm lại."
      }
    ]
  },

  // ========================================================================
  // BÀI 4: CHỨC NĂNG BƠM MÁU CỦA TIM
  // ========================================================================
  {
    id: 4,
    group: "II. SINH LÝ TIM MẠCH",
    title: "Bài 4: Chức năng bơm máu của tim",
    shortTitle: "Chức năng bơm máu của tim",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 7 (tr.72–85)",
    summary: "Chu chuyển tim 0,8s (Tâm nhĩ thu, Tâm thất thu: co đồng thể tích & bơm máu, Tâm trương toàn bộ: giãn đồng thể tích & máu về tim), đóng mở các van tim, tiếng tim T1-T4, Tiền tải - Hậu tải và Cung lượng tim.",
    simId: "sim_cardiac_cycle",
    simTitle: "Mô phỏng Vòng lặp Áp suất - Thể tích Thất trái (PV Loop), Chu chuyển tim, Van tim & Tiếng tim",
    theoryHtml: `
      <div class="card">
        <div class="card-title">🔄 1. Các Giai đoạn của Chu chuyển Tim (0,8 giây ở nhịp 75 lần/phút)</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Thì / Giai đoạn</th>
                <th>Thời gian</th>
                <th>Trạng thái Van Nhĩ-Thất (2 lá, 3 lá)</th>
                <th>Trạng thái Van Tổ chim (ĐMC, ĐMP)</th>
                <th>Diễn biến Áp suất, Thể tích & Tiếng tim chuẩn YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Tâm nhĩ thu</strong></td>
                <td><strong>0,1 giây</strong></td>
                <td><strong>Đang MỞ</strong></td>
                <td>Đóng</td>
                <td>Xảy ra ngay sau đỉnh sóng P. Áp suất nhĩ tăng (tạo <strong>sóng a</strong> trên tĩnh mạch cảnh), bơm nốt <strong>30% lượng máu</strong> còn lại từ nhĩ xuống thất (70% đã tự chảy xuống ở kỳ tâm trương trước đó). Có thể nghe tiếng tim <strong>T4</strong>. Cuối kỳ này thể tích thất đạt tối đa: <strong>EDV = 120 – 140 mL</strong>.</td>
              </tr>
              <tr>
                <td><strong>2a. Thất thu: Co đồng thể tích (Đẳng trường)</strong></td>
                <td><strong>0,05 giây</strong></td>
                <td><strong>Vừa ĐÓNG lại</strong> (tạo tiếng <strong>T1</strong>)</td>
                <td><strong>Vẫn ĐÓNG</strong></td>
                <td>Bắt đầu ở đỉnh sóng R. Khi P<sub>thất</sub> &gt; P<sub>nhĩ</sub> → đóng van nhĩ-thất tạo <strong>tiếng tim T1</strong>. <strong>Cả 2 hệ van đều ĐÓNG (buồng kín)</strong>, thể tích máu không đổi (EDV), cơ thất co làm van nhĩ-thất lồi vào nhĩ (tạo <strong>sóng c</strong>) và P<sub>thất</sub> tăng vọt lên 80 mmHg (trái) và 10 mmHg (phải).</td>
              </tr>
              <tr>
                <td><strong>2b. Thất thu: Bơm máu ra ngoài (Đẳng trương)</strong></td>
                <td><strong>0,25 giây</strong></td>
                <td>Đóng</td>
                <td><strong>MỞ</strong> (khi P<sub>thất trái</sub> &gt; 80 mmHg, P<sub>thất phải</sub> &gt; 10 mmHg)</td>
                <td>
                  • <strong>Thì bơm máu nhanh (1/3 đầu):</strong> Tống ra <strong>70% thể tích nhát bóp (SV)</strong>, áp suất đạt đỉnh <strong>110 – 120 mmHg</strong> (thất trái) và <strong>25 mmHg</strong> (thất phải).<br/>
                  • <strong>Thì bơm máu chậm (2/3 sau):</strong> Tống 30% SV còn lại.<br/>
                  • Tổng lượng máu bơm ra mỗi nhát: <strong>SV = 70 – 90 mL</strong>. Thể tích còn lại cuối tâm thu: <strong>ESV ≈ 50 mL</strong> (Phân suất tống máu EF = SV/EDV ≈ 60–65%).
                </td>
              </tr>
              <tr>
                <td><strong>3a. Tâm trương: Giãn đồng thể tích (Đẳng trường)</strong></td>
                <td><strong>0,06 giây</strong></td>
                <td><strong>Vẫn ĐÓNG</strong></td>
                <td><strong>Vừa ĐÓNG lại</strong> (tạo tiếng <strong>T2</strong> & khấc dicrotic)</td>
                <td>Thất bắt đầu giãn, P<sub>thất</sub> &lt; P<sub>động mạch</sub> → máu dội ngược làm <strong>đóng van ĐMC & ĐMP tạo tiếng tim T2</strong>. <strong>Cả 2 hệ van đều ĐÓNG</strong>, thể tích thất không đổi (ESV = 50 mL), áp suất thất giảm nhanh xuống dưới áp suất nhĩ.</td>
              </tr>
              <tr>
                <td><strong>3b. Tâm trương: Máu về tim (Đổ đầy thất)</strong></td>
                <td><strong>0,44 giây</strong> (tổng tâm trương thất 0,5s)</td>
                <td><strong>MỞ</strong> (khi P<sub>thất</sub> &lt; P<sub>nhĩ</sub>, ngay đỉnh sóng v)</td>
                <td>Đóng</td>
                <td>
                  • <strong>Máu về nhanh (1/3 đầu):</strong> Máu ùa từ nhĩ xuống thất chiếm <strong>70% lượng máu đổ đầy thất</strong>, tạo <strong>tiếng tim T3</strong>.<br/>
                  • <strong>Máu về chậm (1/3 giữa - Diastasis):</strong> Máu từ tĩnh mạch chảy thẳng qua nhĩ xuống thất.<br/>
                  • 1/3 cuối của tâm trương thất trùng với kỳ <strong>Tâm nhĩ thu (30% máu)</strong> của chu kỳ kế tiếp.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="callout trap">
          <div class="callout-title">⚠️ Các Con Số Vàng Hay Hỏi Thi SĐH YDS</div>
          <ul>
            <li><strong>Tâm nhĩ thu chỉ đóng góp 30%</strong> lượng máu xuống thất; <strong>70% máu xuống thất là thụ động</strong> trong kỳ tâm trương (nên khi rung nhĩ mất nhĩ thu, bệnh nhân vẫn sống được khi nghỉ ngơi).</li>
            <li><strong>Thì bơm máu nhanh</strong> chỉ chiếm 1/3 đầu thời gian bơm máu nhưng tống tới <strong>70% lượng máu (SV)</strong>.</li>
            <li>Trong một chu chuyển tim có <strong>2 giai đoạn mà TẤT CẢ các van tim đều ĐÓNG</strong>: <strong>Co đồng thể tích</strong> và <strong>Giãn đồng thể tích</strong> (không bao giờ có lúc tất cả các van tim cùng mở!).</li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="card">
          <div class="card-title">🔊 2. Bốn Tiếng Tim (T1, T2, T3, T4) & Sóng Áp suất Nhĩ</div>
          <ul class="theory-list">
            <li><strong>Tiếng tim T1 (Bùm):</strong> Trầm, dài, nghe rõ ở mỏm tim. Tạo bởi <strong>đóng van nhĩ-thất (2 lá, 3 lá)</strong>, mở đầu kỳ tâm thất thu (cùng với xoáy máu và rung cơ thất).</li>
            <li><strong>Tiếng tim T2 (Tặc):</strong> Thanh, ngắn, nghe rõ ở đáy tim. Tạo bởi <strong>đóng van bán nguyệt (ĐMC, ĐMP)</strong>, mở đầu kỳ tâm trương. Khi hít vào, van ĐMP đóng muộn hơn van ĐMC tạo <em>T2 tách đôi sinh lý</em>.</li>
            <li><strong>Tiếng tim T3:</strong> Đầu kỳ tâm trương, do máu ùa về đập vào thành tâm thất trong <strong>thì máu về nhanh</strong> (sinh lý ở trẻ em/thanh niên, bệnh lý trong suy tim).</li>
            <li><strong>Tiếng tim T4:</strong> Cuối kỳ tâm trương, do <strong>tâm nhĩ thu</strong> tống máu xuống thất có độ giãn kém.</li>
            <li><strong>3 Sóng áp suất tâm nhĩ (a, c, v):</strong>
              <br/>• <strong>Sóng a:</strong> Do <strong>tâm nhĩ co</strong>.
              <br/>• <strong>Sóng c:</strong> Do <strong>tâm thất bắt đầu co</strong> đẩy van nhĩ-thất phồng ngược vào buồng nhĩ.
              <br/>• <strong>Sóng v:</strong> Do máu từ tĩnh mạch đổ về tích tụ trong nhĩ khi van nhĩ-thất đang đóng (cuối tâm thu); đỉnh sóng v là lúc van nhĩ-thất mở ra.
            </li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">📊 3. Cung lượng Tim (CO), Tiền tải, Hậu tải & Sức co bóp</div>
          <div class="callout formula">
            <div class="callout-title">🧮 Công thức Cung lượng tim & Phương pháp Fick</div>
            <ul>
              <li><strong>Cung lượng tim:</strong> <code>CO = HR × SV</code> (Bình thường khi nghỉ: ~70 l/p × 80 mL = <strong>5 – 6 Lít/phút</strong>; khi vận động nặng có thể tăng gấp 4–7 lần).</li>
              <li><strong>Chỉ số tim (Cardiac Index):</strong> <code>CI = CO / Diện tích da (BSA) ≈ 3,2 L/phút/m²</code>.</li>
              <li><strong>Nguyên lý Fick đo CO:</strong> <code>CO = V̇O₂ / (CaO₂ – CvO₂)</code> (trong đó V̇O₂ ≈ 250 mL/phút, CaO₂ ≈ 200 mL/L, CvO₂ ≈ 150 mL/L → CO = 250 / 50 = 5 L/phút).</li>
            </ul>
          </div>
          <ul class="theory-list">
            <li><strong>1. Tiền tải (Preload):</strong> Là độ căng/chiều dài của sợi cơ tâm thất ngay trước khi co = <strong>Thể tích máu thất trái cuối tâm trương (EDV)</strong> (hoặc áp suất cuối tâm trương LVEDP). Phụ thuộc chủ yếu vào <strong>lượng máu tĩnh mạch đổ về tim</strong> (trương lực tĩnh mạch, thể tích máu, thời gian tâm trương).</li>
            <li><strong>2. Hậu tải (Afterload):</strong> Là sức cản mà tâm thất phải vượt qua để tống máu ra ngoài = <strong>Áp suất trong động mạch chủ lúc van ĐMC mở</strong> và <strong>Kháng lực mạch máu ngoại biên (TPR)</strong>.</li>
            <li><strong>3. Sức co bóp cơ tim (Inotropy / Contractility):</strong> Khả năng co bóp nội tại của cơ tim độc lập với tiền tải và hậu tải (tăng khi kích thích giao cảm, catecholamine, digitalis, Ca²⁺ ngoại bào; giảm khi thiếu oxy, toan máu, ức chế β).</li>
          </ul>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Trong chu chuyển tim bình thường, giai đoạn tâm nhĩ thu đóng góp khoảng bao nhiêu phần trăm lượng máu đổ đầy tâm thất?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.73",
        options: [
          "Khoảng 30% (70% máu đã tự chảy từ nhĩ xuống thất trong kỳ tâm trương trước đó)",
          "Khoảng 70% (30% còn lại chảy xuống trong kỳ tâm trương)",
          "100% lượng máu xuống thất đều nhờ tâm nhĩ co bóp",
          "Khoảng 10% lượng máu xuống thất"
        ],
        answer: 0,
        explain: "Trong kỳ tâm trương, ngay khi van nhĩ-thất mở, 70% lượng máu từ tâm nhĩ đã tự chảy xuống tâm thất (nhờ chênh lệch áp suất ở thì máu về nhanh và máu về chậm). Khi tâm nhĩ thu (0,1s), nhĩ chỉ co bóp đẩy thêm 30% lượng máu còn lại xuống thất."
      },
      {
        q: "Trong thời kỳ tâm thất thu, ở giai đoạn co cơ đồng thể tích (đẳng trường - 0,05 giây), trạng thái của các van tim như thế nào?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tim mạch",
        options: [
          "Cả van nhĩ-thất và van tổ chim (ĐMC, ĐMP) đều ĐÓNG",
          "Van nhĩ-thất ĐÓNG, van tổ chim MỞ",
          "Van nhĩ-thất MỞ, van tổ chim ĐÓNG",
          "Cả van nhĩ-thất và van tổ chim đều MỞ"
        ],
        answer: 0,
        explain: "Trong giai đoạn co đồng thể tích (0,05s), áp suất thất vượt quá áp suất nhĩ làm van nhĩ-thất vừa đóng lại (tạo tiếng T1), nhưng áp suất thất trái chưa vượt qua 80 mmHg (và thất phải chưa vượt 10 mmHg) nên van ĐMC và ĐMP vẫn chưa mở. Cả 2 hệ van đều đóng kín nên thể tích máu trong thất không đổi."
      },
      {
        q: "Van động mạch chủ và van động mạch phổi bắt đầu mở ra khi áp suất trong tâm thất trái và tâm thất phải vượt qua ngưỡng nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.75",
        options: [
          "Áp suất thất trái > 80 mmHg và áp suất thất phải > 10 mmHg",
          "Áp suất thất trái > 120 mmHg và áp suất thất phải > 25 mmHg",
          "Áp suất thất trái > 10 mmHg và áp suất thất phải > 80 mmHg",
          "Áp suất thất trái > 40 mmHg và áp suất thất phải > 40 mmHg"
        ],
        answer: 0,
        explain: "Áp suất tâm trương trong động mạch chủ là ~80 mmHg và trong động mạch phổi là ~10 mmHg. Khi co đồng thể tích làm áp suất thất trái vượt 80 mmHg và thất phải vượt 10 mmHg, van tổ chim sẽ mở ra để bắt đầu thì bơm máu. Đỉnh áp suất đạt 110–120 mmHg (thất trái) và 25 mmHg (thất phải)."
      },
      {
        q: "Trong thì tâm thất bơm máu ra ngoài (0,25 giây), giai đoạn bơm máu nhanh có đặc điểm nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.76",
        options: [
          "Chiếm 1/3 đầu thời gian bơm máu nhưng tống ra tới 70% thể tích máu nhát bóp (SV)",
          "Chiếm 2/3 đầu thời gian bơm máu và tống ra 30% thể tích máu nhát bóp",
          "Tống hết 100% lượng máu có trong tâm thất ra động mạch chủ",
          "Làm áp suất trong tâm thất giảm ngay xuống 0 mmHg"
        ],
        answer: 0,
        explain: "Thì bơm máu nhanh kéo dài khoảng 1/3 đầu thời kỳ tống máu nhưng bơm tới 70% lượng máu của nhát bóp (SV). 2/3 thời gian còn lại là thì bơm máu chậm chỉ tống nốt 30% lượng máu còn lại."
      },
      {
        q: "Tiếng tim thứ nhất (T1) và tiếng tim thứ hai (T2) lần lượt có nguồn gốc chính từ sự kiện cơ học nào?",
        source: "Đề thi Sinh lý SĐH YDS 2024",
        options: [
          "T1 do đóng van nhĩ-thất lúc bắt đầu tâm thất thu; T2 do đóng van bán nguyệt (ĐMC, ĐMP) lúc bắt đầu tâm trương",
          "T1 do mở van động mạch chủ; T2 do mở van hai lá và ba lá",
          "T1 do tâm nhĩ co bóp; T2 do máu ùa nhanh từ nhĩ xuống thất",
          "T1 do đóng van bán nguyệt; T2 do đóng van nhĩ-thất"
        ],
        answer: 0,
        explain: "Các tiếng tim sinh lý tạo ra khi VAN TIM ĐÓNG (mở van bình thường không gây tiếng động): T1 do đóng van nhĩ-thất (2 lá, 3 lá) mở đầu kỳ tâm thu; T2 do đóng van tổ chim (ĐMC, ĐMP) mở đầu kỳ tâm trương."
      },
      {
        q: "Sóng 'c' trên đồ thị áp suất tâm nhĩ (hoặc tĩnh mạch cảnh) xuất hiện do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.73",
        options: [
          "Tâm thất bắt đầu co (co đồng thể tích) làm tăng áp suất đẩy van nhĩ-thất phồng ngược vào buồng tâm nhĩ",
          "Tâm nhĩ co bóp đẩy máu xuống tâm thất",
          "Máu từ tĩnh mạch đổ về làm căng buồng nhĩ khi van nhĩ-thất đang đóng",
          "Van động mạch chủ đóng lại tạo khấc dicrotic"
        ],
        answer: 0,
        explain: "Ba sóng dương trên đường cong áp suất nhĩ: Sóng a (Atrial contraction = tâm nhĩ co); Sóng c (tâm thất bắt đầu co đồng thể tích đẩy van nhĩ-thất lồi về phía tâm nhĩ); Sóng v (Venous filling = máu về tích tụ ở nhĩ cuối tâm thu trước khi van nhĩ-thất mở)."
      },
      {
        q: "Tiền tải (Preload) của tâm thất trái được định nghĩa và đánh giá trên lâm sàng bằng chỉ số nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.81",
        options: [
          "Độ giãn của sợi cơ thất trái ngay trước khi co, biểu thị bằng thể tích (EDV) hoặc áp suất cuối tâm trương thất trái",
          "Áp suất trong động mạch chủ khi van động mạch chủ mở",
          "Kháng lực mạch máu ngoại biên toàn bộ (TPR)",
          "Thể tích máu còn lại trong tâm thất sau khi đã tống máu (ESV)"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.81): Tiền tải (Preload) là độ kéo dài/độ giãn của sợi cơ tim trước khi co, tương ứng với Thể tích máu cuối tâm trương (EDV) hoặc Áp suất cuối tâm trương (EDP) của tâm thất. Hậu tải (Afterload) mới là áp suất động mạch chủ / kháng lực ngoại biên."
      },
      {
        q: "Một người có nhịp tim 75 lần/phút, thể tích thất trái cuối tâm trương (EDV) là 130 mL, thể tích thất trái cuối tâm thu (ESV) là 50 mL. Cung lượng tim (CO) của người này là:",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tim mạch",
        options: [
          "6,0 Lít/phút",
          "9,75 Lít/phút",
          "3,75 Lít/phút",
          "4,5 Lít/phút"
        ],
        answer: 0,
        explain: "Thể tích nhát bóp: SV = EDV – ESV = 130 – 50 = 80 mL/nhát. Cung lượng tim: CO = HR × SV = 75 × 80 = 6.000 mL/phút = 6,0 Lít/phút."
      },
      {
        q: "Theo nguyên lý Fick, nếu lượng O2 tiêu thụ toàn cơ thể là 250 mL/phút, hàm lượng O2 máu động mạch là 20 mL/dL (200 mL/L) và hàm lượng O2 máu tĩnh mạch trộn ở động mạch phổi là 15 mL/dL (150 mL/L), thì cung lượng tim là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.84",
        options: [
          "5,0 Lít/phút",
          "4,0 Lít/phút",
          "6,25 Lít/phút",
          "50 Lít/phút"
        ],
        answer: 0,
        explain: "Theo công thức Fick: CO = V̇O2 / (CaO2 – CvO2) = 250 mL/phút / (200 mL/L – 150 mL/L) = 250 / 50 = 5,0 Lít/phút."
      },
      {
        q: "Trong suốt một chu chuyển tim bình thường, phát biểu nào sau đây về sự đóng mở van tim là ĐÚNG?",
        source: "Đề thi Sinh lý SĐH YDS - Đề Tổng hợp",
        options: [
          "Có hai giai đoạn mà tất cả các van tim đều đóng (co đồng thể tích và giãn đồng thể tích), và không có giai đoạn nào cả van nhĩ-thất lẫn van tổ chim cùng mở",
          "Có giai đoạn cả 4 van tim cùng mở trong thì bơm máu nhanh",
          "Van hai lá và van động mạch chủ luôn mở cùng một lúc",
          "Trong kỳ tâm nhĩ thu, van nhĩ-thất đóng kín hoàn toàn"
        ],
        answer: 0,
        explain: "Tim là một bơm có van một chiều luân phiên: ở pha co đồng thể tích và giãn đồng thể tích, tất cả các van tim đều đóng. Không bao giờ van nhĩ-thất và van tổ chim của cùng một thất mở đồng thời."
      },
      {
        q: "Khấc dicrotic (khấc trùng mạch) trên đường cong áp suất động mạch chủ xuất hiện ngay tại thời điểm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.76",
        options: [
          "Khi tâm thất bắt đầu giãn làm máu trong động mạch chủ dội ngược về đóng van động mạch chủ",
          "Khi van động mạch chủ bắt đầu mở ra ở đầu kỳ bơm máu nhanh",
          "Khi tâm nhĩ co bóp ở cuối kỳ tâm trương",
          "Khi van hai lá mở ra ở đầu kỳ máu về nhanh"
        ],
        answer: 0,
        explain: "Cuối kỳ tâm thu, thất trái bắt đầu giãn làm áp suất thất tụt xuống thấp hơn áp suất ĐMC, dòng máu trong ĐMC dội ngược lại đóng sập van ĐMC (tạo tiếng T2) và làm áp suất ĐMC nảy nhẹ lên tạo khấc dicrotic."
      },
      {
        q: "Yếu tố nào sau đây làm GIẢM thể tích tâm thu (SV) của tâm thất trái?",
        source: "Sách Trắc nghiệm Sinh lý học YDS 2025 - Chương Tim mạch",
        options: [
          "Tăng đột ngột hậu tải (tăng huyết áp động mạch chủ / tăng kháng lực ngoại biên) khi sức co bóp không đổi",
          "Tăng tiền tải (tăng lượng máu tĩnh mạch trở về tim trong giới hạn sinh lý)",
          "Kích thích thần kinh giao cảm đến cơ tâm thất",
          "Tiêm catecholamine (Adrenaline / Noradrenaline)"
        ],
        answer: 0,
        explain: "Thể tích nhát bóp (SV) tỉ lệ thuận với Tiền tải (định luật Frank-Starling) và Sức co bóp cơ tim, nhưng tỉ lệ nghịch với Hậu tải. Khi hậu tải tăng cao đột ngột, tâm thất phải tốn nhiều công hơn để thắng áp lực ĐMC nên lượng máu tống ra (SV) giảm và ESV tăng."
      }
    ]
  },

  // ========================================================================
  // BÀI 5: ĐIỀU HOÀ HOẠT ĐỘNG TIM
  // ========================================================================
  {
    id: 5,
    group: "II. SINH LÝ TIM MẠCH",
    title: "Bài 5: Điều hoà hoạt động tim",
    shortTitle: "Điều hoà hoạt động tim",
    textbookRef: "Sách Sinh lý học Y khoa YDS 2025 – Bài 8 (tr.86–94)",
    summary: "Cơ chế tự điều hòa nội tại (Định luật Frank-Starling, điều hòa theo tần số Bowditch), thần kinh tự chủ (Giao cảm phải/trái vs Phó giao cảm dây X phải/trái), các phản xạ điều hòa tim (Áp thụ quan, Bainbridge, Bezold-Jarisch, Goltz) và ảnh hưởng của ion K+, Ca2+.",
    simId: "sim_cardiac_reg",
    simTitle: "Mô phỏng Định luật Frank-Starling, Phản xạ Áp thụ quan, Thần kinh Giao cảm/Dây X & Ảnh hưởng Ion K+, Ca2+",
    theoryHtml: `
      <div class="grid-2">
        <div class="card">
          <div class="card-title">📏 1. Cơ chế Tự điều hòa Nội tại của Tim</div>
          <h4 style="color:var(--primary);margin-bottom:6px;">A. Định luật Frank - Starling (Tự điều hòa khác chiều dài)</h4>
          <ul class="theory-list">
            <li><strong>Nội dung:</strong> <em>"Trong giới hạn sinh lý, lực co của cơ tim tỉ lệ thuận với chiều dài của sợi cơ tim ngay trước khi co (tức tỉ lệ thuận với thể tích máu cuối tâm trương EDV)."</em></li>
            <li><strong>Cơ chế phân tử:</strong> Khi máu về tâm thất nhiều làm sợi cơ tim giãn ra đạt chiều dài sarcomere tối ưu (<strong>2,2 μm</strong>): (1) Tối ưu hóa số lượng cầu nối giữa <strong>Actin và Myosin</strong>; (2) Tăng độ nhạy cảm của <strong>Troponin C đối với ion Ca²⁺</strong>. (Nếu giãn quá mức &gt; 2,2 μm như suy tim nặng thì lực co sẽ giảm!).</li>
            <li><strong>Ý nghĩa sinh lý quan trọng nhất:</strong> Giúp tim tự động bơm hết lượng máu tĩnh mạch đổ về mà không gây ứ máu, đặc biệt giúp <strong>cân bằng chính xác lưu lượng máu giữa Tâm thất phải và Tâm thất trái</strong>.</li>
          </ul>
          <h4 style="color:var(--primary);margin:10px 0 6px;">B. Điều hòa theo Tần số tim (Hiệu ứng cầu thang Bowditch)</h4>
          <ul class="theory-list">
            <li>Khi tần số tim tăng (trong giới hạn sinh lý), lực co cơ tim tăng dần lên do <strong>tăng lượng Ca²⁺ đi vào tế bào</strong> mỗi phút và thời gian tâm trương ngắn làm Ca²⁺ chưa kịp bơm hết ra ngoài đã có nhát bóp tiếp theo.</li>
            <li><strong>Nhát bóp sau ngoại tâm thu (Post-extrasystolic potentiation):</strong> Nhát ngoại tâm thu đến sớm có lực co YẾU (vì ít máu đổ đầy và Ca²⁺ lưới nội cơ tương chưa phục hồi), nhưng <strong>nhát bóp ngay sau khoảng nghỉ bù có lực co RẤT MẠNH</strong> (vì thời gian nghỉ bù dài làm tăng đổ đầy thất EDV và tích lũy nhiều Ca²⁺ trong lưới nội cơ tương).</li>
          </ul>
        </div>

        <div class="card">
          <div class="card-title">🧠 2. Điều hòa Ngoại lai bởi Hệ Thần kinh Tự chủ</div>
          <div class="table-responsive">
            <table class="med-table">
              <thead>
                <tr>
                  <th>Tiêu chí</th>
                  <th>Hệ Giao cảm (Sympathetic)</th>
                  <th>Hệ Phó giao cảm (Dây X / Vagus)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Trung khu & Đường đi</strong></td>
                  <td>Sừng bên tủy gai <strong>C₅ – T₆ (chủ yếu T₁ – T₅)</strong> → Hạch cổ trên, giữa, <strong>hạch sao</strong>.</td>
                  <td>Nhân lưng dây X và nhân mơ hồ ở <strong>Hành não</strong> → theo <strong>dây thần kinh X</strong>.</td>
                </tr>
                <tr>
                  <td><strong>Phân bố tại tim</strong></td>
                  <td>Phân bố đều khắp nút SA, nút AV, cơ nhĩ và <strong>dày đặc ở cơ tâm thất</strong>.</td>
                  <td>Chi phối chủ yếu ở <strong>nút SA, nút AV, cơ nhĩ</strong>; rất ít sợi đến cơ tâm thất!</td>
                </tr>
                <tr>
                  <td><strong>Phân công Phải vs Trái (Rất hay thi!)</strong></td>
                  <td>• <strong>Giao cảm PHẢI:</strong> Nút xoang → <strong>Tăng nhịp tim</strong> nhiều hơn tăng co bóp.<br/>• <strong>Giao cảm TRÁI:</strong> Cơ thất → <strong>Tăng sức co bóp</strong> nhiều hơn tăng nhịp.</td>
                  <td>• <strong>Dây X PHẢI:</strong> Chi phối chủ yếu <strong>Nút xoang</strong> (kích thích gây chậm/ngưng xoang).<br/>• <strong>Dây X TRÁI:</strong> Chi phối chủ yếu <strong>Nút nhĩ-thất</strong> (kích thích gây block AV).</td>
                </tr>
                <tr>
                  <td><strong>Hóa chất & Thụ thể</strong></td>
                  <td><strong>Norepinephrine → Thụ thể β₁</strong> → Tăng cAMP → Hoạt hóa PKA mở kênh Ca²⁺ type L.</td>
                  <td><strong>Acetylcholine → Thụ thể M₂</strong> → Ức chế adenyl cyclase, giảm cAMP, mở kênh K⁺.</td>
                </tr>
                <tr>
                  <td><strong>4 Tác dụng lên tim</strong></td>
                  <td><strong>Tăng cả 4:</strong> Tăng nhịp (+ chronotropy), tăng lực co (+ inotropy), tăng vận tốc dẫn truyền (+ dromotropy), tăng tính hưng phấn (+ bathmotropy) và tăng tốc độ giãn (+ lusitropy).</td>
                  <td><strong>Giảm cả 4:</strong> Giảm nhịp tim, giảm tốc độ dẫn truyền qua nút AV, giảm tính hưng phấn, giảm nhẹ co bóp cơ nhĩ. (Kích thích mạnh gây ngừng tim tạm thời rồi thoát ức chế - <strong>Hiện tượng thoát dây X / Vagal escape</strong> nhờ bó His/Purkinje tự phát nhịp).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🔄 3. Các Phản xạ Thường xuyên Điều hòa Hoạt động Tim</div>
        <div class="table-responsive">
          <table class="med-table">
            <thead>
              <tr>
                <th>Tên phản xạ</th>
                <th>Thụ thể & Đường hướng tâm</th>
                <th>Kích thích khởi phát</th>
                <th>Đáp ứng sinh lý & Bẫy đề thi YDS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>1. Phản xạ Áp thụ quan (Baroreceptor reflex)</strong></td>
                <td>
                  • <strong>Xoang ĐM cảnh</strong> → dây Hering → <strong>Dây IX (Thiệt hầu)</strong>.<br/>
                  • <strong>Quai ĐM chủ</strong> → dây Cyon → <strong>Dây X (Lang thang)</strong>.<br/>
                  → Về nhân bó đơn độc ở <strong>Hành não</strong>.
                </td>
                <td><strong>Khi Huyết áp TĂNG</strong> làm căng thành mạch (hoặc ấn/xoa xoang cảnh; hoạt động trong khoảng HA 70 – 160 mmHg).</td>
                <td>Kích thích trung tâm ức chế tim (dây X) và ức chế trung tâm vận mạch → <strong>Giảm nhịp tim, giảm sức co bóp, giãn mạch → Hạ huyết áp về bình thường</strong>. (Khi HA giảm/mất máu thì ngược lại: giảm xung áp thụ quan → tăng nhịp tim, co mạch).</td>
              </tr>
              <tr>
                <td><strong>2. Phản xạ Bainbridge (Phản xạ tim - tim)</strong></td>
                <td>Thụ thể căng ở <strong>tâm nhĩ phải</strong> (vùng Bainbridge quanh lỗ tĩnh mạch chủ) → hướng tâm theo <strong>dây X</strong>.</td>
                <td><strong>Máu tĩnh mạch về tim phải tăng</strong> làm căng tâm nhĩ phải (truyền dịch).</td>
                <td>Về hành não ức chế trung tâm dây X và kích thích giao cảm → <strong>Làm TĂNG nhịp tim</strong> để giải quyết máu ứ ở nhĩ phải. (<em>Bẫy thi:</em> Phản xạ này bị <strong>mất hoàn toàn nếu cắt đứt hai dây X</strong>!).</td>
              </tr>
              <tr>
                <td><strong>3. Phản xạ Thụ thể ở Thất (Bezold - Jarisch)</strong></td>
                <td>Thụ thể cơ học & hóa học ở <strong>thành tâm thất trái</strong> → sợi C không myelin của dây X.</td>
                <td>Kích thích thụ thể ở tâm thất (căng thất quá mức hoặc chất hóa học/thiếu máu thành sau dưới).</td>
                <td>Gây <strong>GIẢM nhịp tim và GIẢM kháng lực ngoại biên (giãn mạch, hạ huyết áp)</strong>. (Đề SĐH YDS hỏi đích danh câu này!).</td>
              </tr>
              <tr>
                <td><strong>4. Ảnh hưởng của Hô hấp</strong> (Loạn nhịp xoang hô hấp)</td>
                <td>Thụ thể căng ở phổi + trung tâm hô hấp hành não + thay đổi máu về tim.</td>
                <td>Chu kỳ hít vào – thở ra bình thường.</td>
                <td><strong>Khi HÍT VÀO:</strong> Giảm trương lực dây X → <strong>Nhịp tim TĂNG</strong>.<br/><strong>Khi THỞ RA:</strong> Tăng trương lực dây X → <strong>Nhịp tim GIẢM</strong>.</td>
              </tr>
              <tr>
                <td><strong>5. Phản xạ Hóa thụ quan</strong> (Chemoreceptor)</td>
                <td><strong>Thể cảnh (dây IX)</strong> và <strong>Thể ĐMC (dây X)</strong>.</td>
                <td><strong>Giảm O₂ máu, tăng CO₂ máu, giảm pH máu</strong>.</td>
                <td>Kích thích trung tâm vận mạch làm <strong>Tăng nhịp tim và tăng HA</strong> (lưu ý: tác động trực tiếp ban đầu của thể cảnh là kích thích dây X, nhưng do tăng thông khí phổi và kích thích giao cảm nên kết quả chung làm <strong>tăng nhịp tim</strong>).</td>
              </tr>
              <tr>
                <td><strong>6. Các Phản xạ Bất thường</strong></td>
                <td>• <strong>Phản xạ mắt - tim (Aschner):</strong> Ấn nhãn cầu (dây V → dây X).<br/>• <strong>Phản xạ Goltz:</strong> Đánh mạnh vùng thượng vị/kéo tạng bụng (đám rối dương → dây X).</td>
                <td>Ấn mạnh hai nhãn cầu hoặc co kéo/đấm vùng thượng vị.</td>
                <td>Kích thích mạnh trung tâm <strong>dây X</strong> làm <strong>tim đập chậm hoặc ngừng tim đột ngột</strong>!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card-title">🧪 4. Điều hòa Thể dịch & Ảnh hưởng của Các Ion (K⁺, Ca²⁺, Na⁺)</div>
        <div class="grid-3">
          <div class="callout trap" style="margin:0;">
            <div class="callout-title">⚠️ Tăng Kali máu (K⁺ ↑)</div>
            Làm giảm chênh lệch K⁺ trong/ngoài màng → <strong>giảm điện thế nghỉ</strong> (bớt âm) → bất hoạt kênh Na⁺ nhanh → tim đập <strong>chậm, yếu, rối loạn dẫn truyền và NGỪNG TIM Ở KỲ TÂM TRƯƠNG</strong> (tim giãn mềm).
          </div>
          <div class="callout warning" style="margin:0;">
            <div class="callout-title">⚡ Tăng Canxi máu (Ca²⁺ ↑)</div>
            Ca²⁺ đi vào cơ tim quá nhiều → làm tim <strong>co thắt cực mạnh</strong>, rút ngắn tâm trương và gây <strong>NGỪNG TIM Ở KỲ TÂM THU</strong> (cứng cơ tim). Ngược lại hạ Ca²⁺ làm tim co bóp yếu.
          </div>
          <div class="callout pearl" style="margin:0;">
            <div class="callout-title">🌡️ Hormon & Nhiệt độ</div>
            <ul>
              <li><strong>Tủy thượng thận (Adrenaline), Hormon giáp (T₃, T₄):</strong> Tăng nhịp và sức co bóp.</li>
              <li><strong>Sốt (+1°C):</strong> Tăng nhịp tim ~10 nhịp/phút. Hạ nhiệt độ làm nhịp tim chậm.</li>
            </ul>
          </div>
        </div>
      </div>
    `,
    questions: [
      {
        q: "Phát biểu nào sau đây diễn đạt ĐÚNG nội dung của định luật Frank - Starling?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.86",
        options: [
          "Trong giới hạn sinh lý, lực co của cơ tim tỉ lệ thuận với chiều dài của sợi cơ tim trước khi co (tức thể tích máu cuối tâm trương EDV)",
          "Lực co của cơ tim luôn tỉ lệ nghịch với lượng máu tĩnh mạch trở về tâm thất",
          "Tần số phát xung của nút xoang tỉ lệ thuận với áp suất trong động mạch chủ",
          "Vận tốc dẫn truyền qua nút nhĩ-thất tỉ lệ thuận với nồng độ ion K+ ngoại bào"
        ],
        answer: 0,
        explain: "Định luật Frank-Starling là cơ chế tự điều hòa nội tại quan trọng nhất của tim: khi máu tĩnh mạch về tâm thất nhiều hơn (tăng tiền tải / EDV), sợi cơ tim bị kéo giãn đến chiều dài sarcomere tối ưu (2,2 μm) làm tăng lực co bóp ở ngay nhát tâm thu đó để tống hết lượng máu nhận thêm."
      },
      {
        q: "Khi kích thích các thụ thể ở tâm thất (phản xạ Bezold - Jarisch), đáp ứng sinh lý xảy ra là gì?",
        source: "Đề thi Sinh lý SĐH YDS 2024 - Câu 4",
        options: [
          "Giảm nhịp tim và giảm kháng lực ngoại biên (giãn mạch, hạ huyết áp)",
          "Tăng nhịp tim và tăng kháng lực ngoại biên",
          "Tăng nhịp tim và giảm kháng lực ngoại biên",
          "Giảm nhịp tim và tăng co thắt mạnh mạch máu ngoại biên"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý học YDS 2025 (Bài 8, tr.92 - mục Phản xạ do các thụ thể ở thất): Khi các thụ thể cơ học/hóa học ở tâm thất trái bị kích thích, xung truyền theo sợi C của dây X về hành não gây phản xạ GIẢM nhịp tim (tăng dây X) và GIẢM kháng lực ngoại biên (ức chế giao cảm co mạch)."
      },
      {
        q: "Sự phân bố và tác dụng chuyên biệt của dây thần kinh giao cảm phải/trái và dây thần kinh X (phó giao cảm) phải/trái trên tim có đặc điểm nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.88–89",
        options: [
          "Dây X phải chi phối chủ yếu nút xoang; dây X trái chi phối chủ yếu nút nhĩ-thất; giao cảm phải làm tăng nhịp nhiều hơn, giao cảm trái làm tăng co bóp nhiều hơn",
          "Dây X phải chi phối chủ yếu cơ tâm thất; dây X trái chi phối chủ yếu nút xoang",
          "Giao cảm phải chỉ làm giảm nhịp tim, còn giao cảm trái chỉ làm giảm dẫn truyền nhĩ-thất",
          "Dây X phân bố dày đặc ở cơ tâm thất hơn nhiều so với ở nút xoang và nút nhĩ-thất"
        ],
        answer: 0,
        explain: "Theo giáo trình Sinh lý YDS 2025 (tr.88–89): Dây X phải phân bố chủ yếu ở nút xoang (SA); dây X trái phân bố chủ yếu ở nút nhĩ-thất (AV). Hệ giao cảm bên phải tác động lên nhịp tim nhiều hơn lên sự co bóp, trong khi hệ giao cảm bên trái tác động lên sức co bóp cơ thất nhiều hơn lên nhịp tim."
      },
      {
        q: "Khi huyết áp động mạch tăng cao (hoặc khi xoa xoang động mạch cảnh), phản xạ áp thụ quan sẽ điều chỉnh hoạt động tim mạch như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.90",
        options: [
          "Xung động theo dây IX (Hering) và dây X (Cyon) về hành não kích thích dây X và ức chế giao cảm làm giảm nhịp tim, giãn mạch, hạ huyết áp",
          "Xung động làm ức chế dây X và kích thích mạnh giao cảm gây tăng nhịp tim và co mạch",
          "Kích thích trực tiếp tủy thượng thận tiết nhiều Adrenaline để nâng huyết áp",
          "Làm đóng hoàn toàn van động mạch chủ trong suốt kỳ tâm thu"
        ],
        answer: 0,
        explain: "Khi HA tăng làm căng thành xoang cảnh và quai ĐMC, áp thụ quan tăng tần số phát xung theo dây Hering (nhánh dây IX) và dây Cyon (nhánh dây X) về nhân bó đơn độc ở hành não → kích thích nhân dây X và ức chế vùng co mạch → giảm nhịp tim, giảm cung lượng tim, giãn mạch → đưa HA giảm về bình thường."
      },
      {
        q: "Phản xạ Bainbridge (tăng nhịp tim khi lượng máu tĩnh mạch đổ về làm căng tâm nhĩ phải) sẽ thay đổi như thế nào nếu cắt đứt cả hai dây thần kinh X?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.92",
        options: [
          "Phản xạ Bainbridge hoàn toàn vô hiệu (không còn xảy ra)",
          "Phản xạ Bainbridge xảy ra mạnh gấp đôi bình thường",
          "Nhịp tim sẽ giảm xuống dưới 30 lần/phút khi truyền dịch",
          "Không bị ảnh hưởng vì đường hướng tâm của phản xạ này đi theo tủy sống thắt lưng"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.92): Khi máu về nhĩ phải nhiều làm căng vùng Bainbridge quanh tĩnh mạch chủ, thụ thể phát xung hướng tâm đi theo DÂY X về hành não để ức chế trương lực dây X lên tim, làm tim đập nhanh. Do đó, phản xạ này hoàn toàn vô hiệu khi cắt đứt cả hai dây X."
      },
      {
        q: "Nồng độ ion K+ hoặc Ca2+ trong máu ngoại bào tăng quá cao sẽ gây ngừng tim theo cơ chế nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.94",
        options: [
          "Tăng K+ máu làm giảm điện thế nghỉ gây ngừng tim ở kỳ tâm trương; Tăng Ca2+ máu làm tim co thắt mạnh và ngừng tim ở kỳ tâm thu",
          "Tăng K+ máu gây ngừng tim ở kỳ tâm thu; Tăng Ca2+ máu gây ngừng tim ở kỳ tâm trương",
          "Cả tăng K+ máu và tăng Ca2+ máu đều gây ngừng tim ở kỳ tâm thu",
          "Cả tăng K+ máu và tăng Ca2+ máu đều làm tăng điện thế nghỉ lên –120 mV"
        ],
        answer: 0,
        explain: "K+ ngoại bào tăng cao làm giảm khuynh độ K+ từ trong ra ngoài → giảm độ âm của điện thế nghỉ → bất hoạt kênh Na+ nhanh → tim đập chậm, yếu và NGỪNG TIM Ở KỲ TÂM TRƯƠNG. Ngược lại, Ca2+ máu tăng cao làm tăng dòng Ca2+ vào cơ tim gây co cứng cơ tim → NGỪNG TIM Ở KỲ TÂM THU."
      },
      {
        q: "Khi kích thích liên tục dây thần kinh X (phó giao cảm) với cường độ mạnh, tim sẽ ngừng đập trong vài giây nhưng sau đó tự đập trở lại với nhịp chậm (15 – 40 lần/phút). Hiện tượng này gọi là gì và do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.88",
        options: [
          "Hiện tượng thoát ức chế dây X (Vagal escape), do bó His hoặc mạng Purkinje thoát khỏi sự ức chế và tự phát xung làm chủ nhịp",
          "Hiện tượng điều hòa cầu thang Bowditch do tăng tích tụ Ca2+ ở nút xoang",
          "Phản xạ Goltz do kích thích đám rối thái dương",
          "Định luật Frank-Starling do cạn kiệt Acetylcholine ở tủy thượng thận"
        ],
        answer: 0,
        explain: "Dây X chỉ phân bố chủ yếu ở nút SA, nút AV và cơ nhĩ chứ hầu như không chi phối mạng Purkinje ở tâm thất. Khi nút SA và AV bị dây X ức chế hoàn toàn gây ngưng tim vài giây, mạng Purkinje (hoặc bó His) sẽ tự khử cực pha 4 phát nhịp với tần số riêng của nó (15–40 l/p) cứu tim khỏi ngừng đập vĩnh viễn — gọi là hiện tượng thoát ức chế (vagal escape)."
      },
      {
        q: "Trong chu kỳ hô hấp bình thường ở người khỏe mạnh, nhịp tim thay đổi như thế nào theo hai thì hít vào và thở ra?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.92",
        options: [
          "Khi hít vào nhịp tim tăng lên; khi thở ra nhịp tim giảm xuống",
          "Khi hít vào nhịp tim giảm xuống; khi thở ra nhịp tim tăng lên",
          "Nhịp tim hoàn toàn cố định không chịu ảnh hưởng của hô hấp",
          "Nhịp tim chỉ tăng khi nín thở ở cuối thì thở ra"
        ],
        answer: 0,
        explain: "Khi hít vào: trung tâm hít vào ở hành não và các thụ thể căng ở phổi ức chế trung tâm dây X, đồng thời áp suất âm lồng ngực hút máu về nhĩ phải kích thích phản xạ Bainbridge → nhịp tim TĂNG. Khi thở ra: trương lực dây X phục hồi → nhịp tim GIẢM."
      },
      {
        q: "Tại sao nhát bóp của tâm thất xuất hiện ngay sau khoảng nghỉ bù của một ngoại tâm thu lại có lực co bóp mạnh hơn hẳn nhát bóp bình thường?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.87",
        options: [
          "Vì khoảng nghỉ bù kéo dài giúp tăng thể tích máu đổ đầy tâm thất (tăng EDV theo luật Starling) và tăng tích lũy Ca2+ trong lưới nội cơ tương",
          "Vì nút xoang phát xung với điện thế cao gấp đôi sau ngoại tâm thu",
          "Vì van động mạch chủ mở sẵn trong suốt thời gian nghỉ bù",
          "Vì dây thần kinh X bị đứt tạm thời sau mỗi nhát ngoại tâm thu"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.87): Nhát bóp sau ngoại tâm thu rất mạnh do 2 cơ chế cộng hưởng: (1) Thời gian tâm trương (nghỉ bù) dài làm máu đổ về thất nhiều hơn → tăng tiền tải EDV (luật Frank-Starling); (2) Lượng Ca2+ đi vào từ nhát ngoại tâm thu được bơm tích trữ thêm vào lưới nội cơ tương nên lần co kế tiếp giải phóng nhiều Ca2+ hơn."
      },
      {
        q: "Phản xạ mắt - tim (nghiệm pháp Aschner: ấn mạnh vào hai nhãn cầu làm tim đập chậm lại) có đường dẫn truyền hướng tâm và ly tâm lần lượt qua dây thần kinh nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.93",
        options: [
          "Hướng tâm theo dây thần kinh sinh ba (dây V); ly tâm theo dây thần kinh lang thang (dây X)",
          "Hướng tâm theo dây thị giác (dây II); ly tâm theo dây vận nhãn (dây III)",
          "Hướng tâm theo dây thiệt hầu (dây IX); ly tâm theo thần kinh giao cảm ngực",
          "Hướng tâm theo dây mặt (dây VII); ly tâm theo dây hoành"
        ],
        answer: 0,
        explain: "Khi ấn mạnh nhãn cầu, xung cảm giác đi theo nhánh mắt của dây thần kinh V (tam thoa/sinh ba) về hành não kích thích nhân dây X, truyền xung ly tâm theo dây X đến nút xoang làm chậm nhịp tim (dùng cắt cơn nhịp nhanh kịch phát trên thất)."
      },
      {
        q: "Cơ chế phân tử tại tế bào cơ tim khi Norepinephrine của hệ giao cảm gắn vào thụ thể Beta-1 (β1) làm tăng sức co bóp cơ tim là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.89",
        options: [
          "Hoạt hóa Adenyl cyclase làm tăng cAMP nội bào, hoạt hóa Protein kinase A (PKA) gây phosphoryl hóa mở kênh Ca2+ type L",
          "Ức chế Adenyl cyclase làm giảm cAMP và mở kênh K+ cho K+ thoát ra ngoài",
          "Hoạt hóa trực tiếp bơm H+/K+-ATPase trên màng cơ tâm thất",
          "Đóng toàn bộ kênh Ca2+ trên màng lưới nội cơ tương"
        ],
        answer: 0,
        explain: "Norepinephrine/Epinephrine gắn thụ thể β1 → qua protein Gs hoạt hóa Adenyl cyclase → tăng cAMP → hoạt hóa PKA → phosphoryl hóa kênh Ca2+ type L (tăng Ca2+ đi vào trong pha 2) và phosphoryl hóa phospholamban (giúp bơm SERCA thu hồi Ca2+ nhanh hơn vào tâm trương, làm cơ tim vừa co mạnh hơn vừa giãn nhanh hơn)."
      },
      {
        q: "Sự giảm phân áp O2 máu, tăng phân áp CO2 máu và giảm pH máu tác động lên các hóa thụ quan ở thể cảnh và thể động mạch chủ sẽ gây hiệu quả chung như thế nào lên hoạt động tim?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.93",
        options: [
          "Làm tăng nhịp tim và tăng sức co bóp cơ tim (do kích thích giao cảm và phản xạ thứ phát từ tăng thông khí phổi)",
          "Làm ngừng tim hoàn toàn ở kỳ tâm thu",
          "Chỉ làm giãn mạch máu ngoại biên và giảm huyết áp tối đa",
          "Không gây bất kỳ thay đổi nào vì hóa thụ quan chỉ điều hòa thận"
        ],
        answer: 0,
        explain: "Theo Sách Sinh lý YDS 2025 (tr.93): Mặc dù kích thích hóa thụ quan thể cảnh đơn thuần ban đầu có xung qua dây X, nhưng do đồng thời kích thích mạnh hô hấp (căng phổi và giảm CO2) cùng kích thích trung khu giao cảm ở hành não nên hiệu quả tổng hợp cuối cùng của giảm O2, tăng CO2 là làm TĂNG nhịp tim và tăng huyết áp."
      }
    ]
  }
];
