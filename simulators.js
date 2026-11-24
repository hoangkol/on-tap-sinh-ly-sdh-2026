// ==========================================================================
// BỘ MÔ PHỎNG TƯƠNG TÁC TRỰC QUAN 17 CHUYÊN ĐỀ SINH LÝ HỌC SĐH YDS 2026
// Mỗi bài học có 1 Phòng thí nghiệm / Mô phỏng động học tương tác trực tiếp
// ==========================================================================

window.Simulators = {
  render(simId, container) {
    if (!container) return;
    if (typeof this[simId] === "function") {
      this[simId](container);
    } else {
      container.innerHTML = `<div class="callout">Đang tải mô phỏng...</div>`;
    }
  },

  // ========================================================================
  // BÀI 1: ĐỊNH NHÓM MÁU ABO/Rh (BETH-VINCENT & SIMONIN) & CHỈ SỐ HỒNG CẦU
  // ========================================================================
  sim_rbc_blood(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Nhóm máu Bệnh nhân:</label>
          <select id="s1_bg" onchange="Simulators.upd_s1()">
            <option value="O+">Nhóm máu O, Rh(+) (~48% VN)</option>
            <option value="B+">Nhóm máu B, Rh(+) (~28% VN)</option>
            <option value="A+">Nhóm máu A, Rh(+) (~20% VN)</option>
            <option value="AB+">Nhóm máu AB, Rh(+) (~4% VN)</option>
            <option value="O-">Nhóm máu O, Rh(-) (Hiếm 0,08%)</option>
            <option value="A-">Nhóm máu A, Rh(-)</option>
            <option value="B-">Nhóm máu B, Rh(-)</option>
            <option value="AB-">Nhóm máu AB, Rh(-)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Nồng độ NaCl thử sức bền HC: <strong id="s1_nacl_lbl">9,0 ‰</strong></label>
          <input type="range" id="s1_nacl" min="2.5" max="9.5" step="0.1" value="9.0" oninput="Simulators.upd_s1()" />
        </div>
        <div class="control-group">
          <label>MCV (Thể tích TB HC): <strong id="s1_mcv_lbl">90 fL</strong></label>
          <input type="range" id="s1_mcv" min="60" max="125" step="1" value="90" oninput="Simulators.upd_s1()" />
        </div>
        <div class="control-group">
          <label>Hb máu (g/dL): <strong id="s1_hb_lbl">15,0 g/dL</strong></label>
          <input type="range" id="s1_hb" min="6.0" max="18.0" step="0.5" value="15.0" oninput="Simulators.upd_s1()" />
        </div>
      </div>
      <div id="s1_out"></div>
    `;
    this.upd_s1();
  },
  upd_s1() {
    const bg = document.getElementById("s1_bg").value;
    const nacl = parseFloat(document.getElementById("s1_nacl").value);
    const mcv = parseInt(document.getElementById("s1_mcv").value);
    const hb = parseFloat(document.getElementById("s1_hb").value);

    document.getElementById("s1_nacl_lbl").textContent = nacl.toFixed(1).replace(".", ",") + " ‰";
    document.getElementById("s1_mcv_lbl").textContent = mcv + " fL";
    document.getElementById("s1_hb_lbl").textContent = hb.toFixed(1).replace(".", ",") + " g/dL";

    const abo = bg.replace("+", "").replace("-", "");
    const rh = bg.includes("+") ? "Rh(+)" : "Rh(-)";
    const hasA = abo === "A" || abo === "AB";
    const hasB = abo === "B" || abo === "AB";
    const hasD = rh === "Rh(+)";

    const antiA_serum = !hasA; // Simonin: patient serum has Anti-A if RBC doesn't have A
    const antiB_serum = !hasB;

    const dropSvg = (agg, label, sub) => `
      <div class="metric-card" style="border:2px solid ${agg ? "var(--danger)" : "var(--success)"};background:${agg ? "var(--danger-light)" : "var(--success-light)"}">
        <div class="metric-label">${label}</div>
        <div style="margin:8px 0;font-size:22px;">${agg ? "🩸 NGƯNG KẾT (+)" : "💧 ĐỒNG NHẤT (–)"}</div>
        <div class="metric-sub" style="font-weight:700;color:${agg ? "var(--danger)" : "var(--success)"}">${sub}</div>
      </div>
    `;

    let osmState = "Đẳng trương – Hồng cầu hình đĩa lõm 2 mặt bình thường (0% tan máu)";
    let osmColor = "var(--success)";
    if (nacl <= 3.4) {
      osmState = "≤ 3,4‰ (Sức bền tối đa): VỠ HỒNG CẦU HOÀN TOÀN 100% (Tan máu hoàn toàn)";
      osmColor = "var(--danger)";
    } else if (nacl <= 4.6) {
      const pct = Math.round(((4.6 - nacl) / (4.6 - 3.4)) * 100);
      osmState = `Từ 4,6‰ → 3,4‰ (Sức bền tối thiểu = 4,6‰): Hồng cầu phồng cầu và BẮT ĐẦU VỠ (~${pct}% tan máu)`;
      osmColor = "var(--warning)";
    } else if (nacl < 8.5) {
      osmState = "Nhược trương nhẹ (> 4,6‰): Nước đi vào làm hồng cầu trương phồng nhưng CHƯA VỠ";
      osmColor = "var(--primary)";
    }

    let anemiaType = "Bình thường (Đẳng sắc, đẳng bào – MCV 80–100 fL)";
    if (hb < 13) {
      if (mcv < 80) anemiaType = "Thiếu máu Hồng cầu NHỎ, nhược sắc (MCV < 80 fL) → Đặc trưng của THIẾU SẮT hoặc Thalassemia";
      else if (mcv > 100) anemiaType = "Thiếu máu Hồng cầu TO / Khổng lồ (MCV > 100 fL) → Đặc trưng của THIẾU VITAMIN B12 hoặc ACID FOLIC (cắt dạ dày thiếu IF)";
      else anemiaType = "Thiếu máu Đẳng bào (MCV 80–100 fL) → Đặc trưng của SUY THẬN MẠN (thiếu EPO) hoặc mất máu cấp";
    } else if (mcv > 100) {
      anemiaType = "Hồng cầu to (MCV > 100 fL) – Lưu ý nguy cơ thiếu Vitamin B12 / Acid folic";
    } else if (mcv < 80) {
      anemiaType = "Hồng cầu nhỏ (MCV < 80 fL) – Lưu ý thiếu sắt dự trữ (Ferritin giảm)";
    }

    const o2Cap = (hb * 1.39).toFixed(1).replace(".", ",");

    document.getElementById("s1_out").innerHTML = `
      <div class="grid-2">
        <div>
          <h4 style="color:var(--primary);margin-bottom:8px;">1. Nghiệm pháp Hồng cầu (Beth-Vincent – Dùng Huyết thanh mẫu)</h4>
          <div class="metric-cards">
            ${dropSvg(hasA, "HT mẫu Anti-A", hasA ? "Có Kháng nguyên A" : "Không có KN A")}
            ${dropSvg(hasB, "HT mẫu Anti-B", hasB ? "Có Kháng nguyên B" : "Không có KN B")}
            ${dropSvg(hasA || hasB, "HT mẫu Anti-AB", (hasA || hasB) ? "Có KN A hoặc B" : "Không có KN A, B")}
            ${dropSvg(hasD, "HT mẫu Anti-D (Rh)", hasD ? "Có KN D → Rh(+)" : "Không có KN D → Rh(-)")}
          </div>
        </div>
        <div>
          <h4 style="color:var(--primary);margin-bottom:8px;">2. Nghiệm pháp Huyết thanh (Simonin – Dùng Hồng cầu mẫu)</h4>
          <div class="metric-cards">
            ${dropSvg(antiA_serum, "Hồng cầu mẫu A", antiA_serum ? "Huyết tương có Anti-A" : "Không có Anti-A")}
            ${dropSvg(antiB_serum, "Hồng cầu mẫu B", antiB_serum ? "Huyết tương có Anti-B" : "Không có Anti-B")}
            ${dropSvg(false, "Hồng cầu mẫu O", "Luôn âm tính (Không có KN A,B)")}
          </div>
          <div class="callout pearl" style="margin-top:8px;">
            <strong>Kết luận Định nhóm máu:</strong> Bệnh nhân thuộc nhóm máu <strong>${abo} ${rh}</strong>.<br/>
            • Kháng nguyên trên màng HC: <strong>${abo === "O" ? "Không có KN A, B (chỉ có KN H)" : "Kháng nguyên " + abo} ${hasD ? "+ Kháng nguyên D" : ""}</strong>.<br/>
            • Kháng thể tự nhiên (IgM) trong huyết tương: <strong>${abo === "O" ? "Anti-A và Anti-B" : abo === "A" ? "Anti-B" : abo === "B" ? "Anti-A" : "Không có Anti-A, Anti-B"}</strong> (Bình thường không có Anti-D tự nhiên).
          </div>
        </div>
      </div>
      <div class="metric-cards" style="margin-top:10px;">
        <div class="metric-card">
          <div class="metric-label">Sức bền Thẩm thấu (NaCl ${nacl.toFixed(1)}‰)</div>
          <div style="font-size:14px;font-weight:700;color:${osmColor};margin-top:4px;">${osmState}</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Khả năng Gắn O₂ Tối đa của Hb</div>
          <div class="metric-val">${o2Cap} mL O₂/dL</div>
          <div class="metric-sub">Công thức: Hb (${hb}) × 1,39 mL/g</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Phân loại Huyết học (MCV ${mcv} fL)</div>
          <div style="font-size:13.5px;font-weight:700;color:var(--primary);margin-top:4px;">${anemiaType}</div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 2: DÒNG THÁC ĐÔNG MÁU & BIỆN LUẬN XÉT NGHIỆM TS, TQ (PT), TCK (aPTT)
  // ========================================================================
  sim_coagulation(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tình huống Lâm sàng / Bệnh lý Cầm máu - Đông máu:</label>
          <select id="s2_case" onchange="Simulators.upd_s2()">
            <option value="normal">1. Người khỏe mạnh bình thường (Đầy đủ tiểu cầu & 13 yếu tố đông máu)</option>
            <option value="hemoA">2. Bệnh Hemophilia A (Di truyền lặn NST X – Thiếu yếu tố VIII)</option>
            <option value="hemoB">3. Bệnh Hemophilia B / Bệnh Christmas (Thiếu yếu tố IX)</option>
            <option value="vitK">4. Thiếu Vitamin K / Đang dùng thuốc kháng đông Dicoumarin (Warfarin)</option>
            <option value="thrombo">5. Giảm số lượng Tiểu cầu nặng (Sốt xuất huyết / Xuất huyết giảm tiểu cầu ITP)</option>
            <option value="vwf">6. Bệnh von Willebrand (Thiếu yếu tố vWF cầu nối GPIb & bảo vệ yếu tố VIII)</option>
            <option value="f7">7. Thiếu hụt đơn độc Yếu tố VII</option>
          </select>
        </div>
      </div>
      <div id="s2_out"></div>
    `;
    this.upd_s2();
  },
  upd_s2() {
    const c = document.getElementById("s2_case").value;
    const data = {
      normal: {
        plt: "220.000 /mm³ (Bình thường)",
        ts: "3 phút (Bình thường 2–4 phút)",
        tq: "13 giây (Bình thường 12–15s)",
        tck: "52 giây (Bình thường 45–70s)",
        clotRetract: "Co cục máu tốt sau 3–4h (nhờ Retractozyme & Thrombosthenin)",
        extOk: true, intOk: true, comOk: true, pltOk: true,
        note: "Tất cả các giai đoạn: Cầm máu tức thời (co mạch + nút chặn tiểu cầu qua vWF/GPIb và ADP/TXA2) và Đông máu huyết tương (Ngoại sinh, Nội sinh, Đường chung) đều hoạt động hoàn hảo."
      },
      hemoA: {
        plt: "240.000 /mm³ (Bình thường)",
        ts: "3 phút (BÌNH THƯỜNG! – Bẫy thi!)",
        tq: "13 giây (Bình thường)",
        tck: "115 giây (KÉO DÀI RÕ RỆT ↑↑)",
        clotRetract: "Cục máu chậm hình thành nhưng khi đã đông thì co bình thường",
        extOk: true, intOk: false, comOk: true, pltOk: true,
        note: "<strong>Hemophilia A (Thiếu yếu tố VIII):</strong> Cầm máu ban đầu (thành mạch & tiểu cầu) hoàn toàn bình thường nên <strong>Thời gian máu chảy (TS) KHÔNG ĐỔI</strong>. Con đường ngoại sinh (III, VII) và đường chung (X, V, II, I) bình thường nên <strong>TQ bình thường</strong>. Chỉ có <strong>con đường NỘI SINH (XII → XI → IX + VIII) bị đình trệ → TCK (aPTT) và TC kéo dài đơn độc!</strong>"
      },
      hemoB: {
        plt: "210.000 /mm³ (Bình thường)",
        ts: "3,5 phút (BÌNH THƯỜNG!)",
        tq: "13,5 giây (Bình thường)",
        tck: "110 giây (KÉO DÀI RÕ RỆT ↑↑)",
        clotRetract: "Bình thường",
        extOk: true, intOk: false, comOk: true, pltOk: true,
        note: "<strong>Hemophilia B (Thiếu yếu tố IX – Christmas):</strong> Tương tự Hemophilia A, yếu tố IX chỉ nằm ở <strong>con đường đông máu nội sinh</strong> (và phụ thuộc Vitamin K tại gan) → <strong>TS bình thường, TQ bình thường, chỉ có TCK (aPTT) kéo dài!</strong>"
      },
      vitK: {
        plt: "230.000 /mm³ (Bình thường)",
        ts: "3 phút (Bình thường)",
        tq: "32 giây (KÉO DÀI MẠNH ↑↑)",
        tck: "92 giây (KÉO DÀI ↑)",
        clotRetract: "Bình thường",
        extOk: false, intOk: false, comOk: false, pltOk: true,
        note: "<strong>Thiếu Vitamin K (hoặc tắc mật không hấp thu được Vitamin K, hoặc dùng Dicoumarin/Warfarin):</strong> Gan không hoạt hóa được 4 yếu tố phụ thuộc Vitamin K là <strong>II, VII, IX, X</strong>. Vì thiếu yếu tố VII (ngoại sinh), IX (nội sinh) và X, II (đường chung) nên <strong>cả TQ (PT) và TCK (aPTT) đều kéo dài</strong> (trong đó TQ tăng sớm nhất vì yếu tố VII có t1/2 ngắn nhất!)."
      },
      thrombo: {
        plt: "25.000 /mm³ (GIẢM NẶNG ↓↓)",
        ts: "14 phút (KÉO DÀI RÕ RỆT ↑↑)",
        tq: "13 giây (Bình thường)",
        tck: "55 giây (Bình thường)",
        clotRetract: "KHÔNG CO CỤC MÁU (Cục máu mềm nhão vì thiếu Thrombosthenin/Retractozyme)",
        extOk: true, intOk: true, comOk: true, pltOk: false,
        note: "<strong>Giảm Tiểu cầu nặng:</strong> Không tạo được nút chặn tiểu cầu (đinh Hayem) và thành mạch mất lớp bảo vệ nội mô → <strong>Thời gian máu chảy (TS) kéo dài, nghiệm pháp dây thắt (+), và cục máu đông KHÔNG CO ĐƯỢC</strong>. Các yếu tố đông máu huyết tương vẫn đủ nên TQ và TCK bình thường."
      },
      vwf: {
        plt: "200.000 /mm³ (Số lượng bình thường)",
        ts: "11 phút (KÉO DÀI ↑↑)",
        tq: "13 giây (Bình thường)",
        tck: "88 giây (KÉO DÀI ↑)",
        clotRetract: "Co cục máu bình thường",
        extOk: true, intOk: false, comOk: true, pltOk: false,
        note: "<strong>Thiếu yếu tố von Willebrand (vWF):</strong> vWF vừa là cầu nối giúp tiểu cầu (thụ thể GPIb) bám vào collagen dưới nội mô, vừa là protein mang bảo vệ yếu tố VIII trong máu. Do đó thiếu vWF làm <strong>vừa kéo dài TS (rối loạn kết dính tiểu cầu) vừa kéo dài TCK (do giảm yếu tố VIII thứ phát)!</strong>"
      },
      f7: {
        plt: "230.000 /mm³ (Bình thường)",
        ts: "3 phút (Bình thường)",
        tq: "38 giây (KÉO DÀI ĐƠN ĐỘC ↑↑)",
        tck: "50 giây (BÌNH THƯỜNG!)",
        clotRetract: "Bình thường",
        extOk: false, intOk: true, comOk: true, pltOk: true,
        note: "<strong>Thiếu đơn độc Yếu tố VII:</strong> Yếu tố VII chỉ tham gia duy nhất vào <strong>con đường đông máu ngoại sinh</strong> → <strong>Chỉ có TQ (PT) kéo dài đơn độc</strong>, còn TCK và TS hoàn toàn bình thường."
      }
    }[c];

    const boxStyle = (ok) => `padding:12px;border-radius:8px;border:2px solid ${ok ? "var(--success)" : "var(--danger)"};background:${ok ? "var(--success-light)" : "var(--danger-light)"};text-align:center;font-weight:700;font-size:13px;`;

    document.getElementById("s2_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Số lượng Tiểu cầu</div><div class="metric-val" style="font-size:16px;">${data.plt}</div></div>
        <div class="metric-card"><div class="metric-label">Thời gian máu chảy (TS)</div><div class="metric-val" style="font-size:16px;color:${data.pltOk ? "var(--success)" : "var(--danger)"}">${data.ts}</div></div>
        <div class="metric-card"><div class="metric-label">Thời gian Quick (TQ / PT)</div><div class="metric-val" style="font-size:16px;color:${data.extOk && data.comOk ? "var(--success)" : "var(--danger)"}">${data.tq}</div></div>
        <div class="metric-card"><div class="metric-label">Thời gian TCK (aPTT)</div><div class="metric-val" style="font-size:16px;color:${data.intOk && data.comOk ? "var(--success)" : "var(--danger)"}">${data.tck}</div></div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:12px;margin:14px 0;">
        <div style="${boxStyle(data.pltOk)}">
          <div>1. CẦM MÁU TỨC THỜI (Khảo sát: TS)</div>
          <div style="font-weight:500;margin-top:4px;">Co mạch + Tiểu cầu gắn Collagen qua <strong>vWF – GPIb</strong> → tiết <strong>ADP, TXA₂</strong> tạo nút chặn</div>
        </div>
        <div style="${boxStyle(data.extOk)}">
          <div>2A. ĐÔNG MÁU NGOẠI SINH (Khảo sát: TQ)</div>
          <div style="font-weight:500;margin-top:4px;">Mô tổn thương tiết <strong>Yếu tố III + Yếu tố VII + Ca²⁺</strong></div>
        </div>
        <div style="${boxStyle(data.intOk)}">
          <div>2B. ĐÔNG MÁU NỘI SINH (Khảo sát: TCK)</div>
          <div style="font-weight:500;margin-top:4px;">Collagen hoạt hóa <strong>XII → XI → IX + VIII + Ca²⁺ + PL</strong></div>
        </div>
        <div style="${boxStyle(data.comOk)}">
          <div>3. ĐƯỜNG CHUNG (X, V, II, I, XIII)</div>
          <div style="font-weight:500;margin-top:4px;"><strong>Prothrombinase (Xa + Va + Ca²⁺)</strong> → Thrombin (IIa) → Fibrin S → <strong>XIIIa</strong> → Fibrin I bền vững</div>
        </div>
      </div>

      <div class="callout pearl">
        <div class="callout-title">🩺 Biện luận Sinh lý bệnh & Co cục máu:</div>
        <p>${data.note}</p>
        <p style="margin-top:6px;"><strong>Hiện tượng co cục máu sau 3–4 giờ:</strong> ${data.clotRetract}.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 3: ĐIỆN THẾ ĐỘNG CƠ TIM (ĐÁP ỨNG NHANH VS CHẬM) & DÒNG ION
  // ========================================================================
  sim_cardiac_ap(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Loại Tế bào Cơ tim:</label>
          <select id="s3_type" onchange="Simulators.upd_s3()">
            <option value="fast">Tế bào ĐÁP ỨNG NHANH (Cơ tâm thất, Cơ tâm nhĩ, Mạng Purkinje)</option>
            <option value="slow">Tế bào ĐÁP ỨNG CHẬM (Nút xoang SA, Nút nhĩ - thất AV)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Chọn Pha Điện thế động để soi Kênh Ion:</label>
          <select id="s3_phase" onchange="Simulators.upd_s3()">
            <option value="p0">Pha 0 – Khử cực</option>
            <option value="p1">Pha 1 – Tái cực sớm</option>
            <option value="p2">Pha 2 – Bình nguyên (Plateau)</option>
            <option value="p3">Pha 3 – Tái cực nhanh</option>
            <option value="p4">Pha 4 – Điện thế nghỉ / Tự khử cực tâm trương</option>
          </select>
        </div>
        <div class="control-group">
          <label>Tác động Thần kinh Tự chủ lên Nút xoang:</label>
          <select id="s3_ans" onchange="Simulators.upd_s3()">
            <option value="norm">Bình thường (Nhịp xoang ~75 lần/phút)</option>
            <option value="symp">Kích thích Giao cảm (Norepinephrine → β1 → tăng cAMP)</option>
            <option value="para">Kích thích Phó giao cảm / Dây X (ACh → M2 → mở kênh K+)</option>
          </select>
        </div>
      </div>
      <div id="s3_out"></div>
    `;
    this.upd_s3();
  },
  upd_s3() {
    const type = document.getElementById("s3_type").value;
    const phase = document.getElementById("s3_phase").value;
    const ans = document.getElementById("s3_ans").value;

    const phaseInfoFast = {
      p0: { title: "Pha 0 (Khử cực nhanh: –90 mV → +30 mV)", ion: "Mở ồ ạt <strong>kênh Na⁺ nhanh phụ thuộc điện thế</strong> → Dòng Na⁺ ùa vào trong tế bào rất mạnh làm đồ thị dựng đứng.", ref: "Thời kỳ trơ tuyệt đối (ERP) bắt đầu." },
      p1: { title: "Pha 1 (Tái cực sớm: +30 mV → ~0 mV)", ion: "Kênh Na⁺ nhanh bất hoạt; mở thoáng qua <strong>kênh K⁺ (I<sub>to</sub>)</strong> cho K⁺ đi ra ngoài.", ref: "Nằm trong thời kỳ trơ tuyệt đối." },
      p2: { title: "Pha 2 (Pha bình nguyên – Plateau: kéo dài 0,2 – 0,3 giây)", ion: "Cơ chế kép: (1) Mở <strong>kênh Ca²⁺ chậm (type L)</strong> cho Ca²⁺ đi vào hoạt hóa co cơ; và (2) <strong>Độ dẫn của màng đối với K⁺ giảm xuống chỉ còn 1/5</strong> (chỉnh lưu nhập bào).", ref: "Nhờ pha 2 dài nên <strong>Thời kỳ trơ tuyệt đối kéo dài bằng thời gian tâm thu → Cơ tim KHÔNG bị co cứng uốn ván!</strong> (Tương ứng đoạn ST trên ECG)." },
      p3: { title: "Pha 3 (Tái cực nhanh: 0 mV → –90 mV)", ion: "Kênh Ca²⁺ type L đóng lại; mở mạnh các <strong>kênh K⁺</strong> cho K⁺ thoát nhanh ra ngoài tế bào.", ref: "Khi tái cực về –50 mV thì chuyển sang <strong>Thời kỳ trơ tương đối (RRP)</strong> (kích thích mạnh lúc này gây Ngoại tâm thu). Tương ứng sóng T trên ECG." },
      p4: { title: "Pha 4 (Điện thế nghỉ ổn định ở –90 mV)", ion: "Duy trì nhờ dòng K⁺ qua kênh chỉnh lưu nhập bào <strong>I<sub>K1</sub></strong>, hoạt động của bơm <strong>Na⁺/K⁺-ATPase</strong> (3 Na⁺ ra, 2 K⁺ vào) và bơm trao đổi 3Na⁺/1Ca²⁺.", ref: "Tế bào sẵn sàng nhận kích thích mới." }
    }[phase];

    const phaseInfoSlow = {
      p0: { title: "Pha 0 (Khử cực chậm: –40 mV → +10 mV)", ion: "Mở <strong>kênh Ca²⁺ chậm (type L)</strong> cho dòng Ca²⁺ đi vào tế bào (<strong>KHÔNG có kênh Na⁺ nhanh</strong> vì điện thế –60 mV đã làm bất hoạt kênh Na⁺ nhanh!).", ref: "Sườn lên thoải, vận tốc dẫn truyền rất chậm (0,05 m/s tại nút SA và nút AV)." },
      p1: { title: "Pha 1 & Pha 2: KHÔNG CÓ ở tế bào đáp ứng chậm", ion: "Đồ thị điện thế động của nút xoang và nút AV chuyển thẳng từ đỉnh Pha 0 sang Pha 3 tái cực (không có pha 1 và không có bình nguyên pha 2).", ref: "Thời kỳ trơ kéo dài sang cả đầu pha 4." },
      p2: { title: "Pha 1 & Pha 2: KHÔNG CÓ ở tế bào đáp ứng chậm", ion: "Đồ thị điện thế động của nút xoang và nút AV chuyển thẳng từ đỉnh Pha 0 sang Pha 3 tái cực (không có pha 1 và không có bình nguyên pha 2).", ref: "Thời kỳ trơ kéo dài sang cả đầu pha 4." },
      p3: { title: "Pha 3 (Tái cực: +10 mV → –60 mV)", ion: "Kênh Ca²⁺ đóng lại; mở <strong>kênh K⁺</strong> cho dòng K⁺ đi ra ngoài đưa điện thế về mức âm tối đa (–60 đến –65 mV).", ref: "Không âm sâu tới –90 mV vì tế bào nút thiếu kênh I<sub>K1</sub>." },
      p4: { title: "Pha 4 (Khử cực tâm trương tự phát: –60 mV tự dốc lên ngưỡng –40 mV)", ion: "<strong>Cơ chế tạo nhịp tự động (Pacemaker potential) nhờ 3 dòng ion:</strong> (1) Giảm dần dòng K⁺ đi ra; (2) Dòng <strong>Na⁺ đi vào qua kênh I<sub>f</sub> (funny current)</strong>; và (3) Mở <strong>kênh Ca²⁺ thoáng qua (type T)</strong> đưa điện thế chạm ngưỡng –40 mV!", ref: "Độ dốc pha 4 quyết định tần số nhịp tim (Nút xoang dốc nhất: 60–100 l/p)." }
    }[phase];

    const info = type === "fast" ? phaseInfoFast : phaseInfoSlow;

    // SVG Curve
    const fastPath = "M 60,180 L 110,180 L 120,35 L 132,62 L 245,68 L 305,180 L 420,180";
    const slowPathNorm = "M 60,145 L 155,115 Q 185,45 215,145 L 310,115 Q 340,45 370,145 L 430,125";
    const slowPathSymp = "M 60,140 L 115,115 Q 138,40 162,140 L 217,115 Q 240,40 264,140 L 319,115 Q 342,40 366,140 L 420,115";
    const slowPathPara = "M 60,162 L 220,115 Q 255,55 290,162 L 430,125";

    let activeSlowPath = slowPathNorm;
    let hrText = "75 lần/phút (Độ dốc pha 4 bình thường)";
    if (ans === "symp") { activeSlowPath = slowPathSymp; hrText = "115 lần/phút (Giao cảm β1 tăng cAMP → Tăng dòng If & Ca2+ → TĂNG độ dốc pha 4)"; }
    if (ans === "para") { activeSlowPath = slowPathPara; hrText = "48 lần/phút (Dây X M2 mở kênh K+ → Tăng phân cực xuống –70 mV & GIẢM độ dốc pha 4)"; }

    document.getElementById("s3_out").innerHTML = `
      <div class="svg-stage">
        <svg viewBox="0 0 480 220" style="width:100%;max-width:680px;height:auto;">
          <!-- Grid & Axes -->
          <line x1="50" y1="20" x2="50" y2="195" stroke="var(--text-light)" stroke-width="1.5"/>
          <line x1="50" y1="195" x2="450" y2="195" stroke="var(--text-light)" stroke-width="1.5"/>
          <line x1="50" y1="60" x2="450" y2="60" stroke="var(--border)" stroke-dasharray="4,4"/>
          <line x1="50" y1="115" x2="450" y2="115" stroke="var(--warning)" stroke-dasharray="4,4"/>
          <line x1="50" y1="180" x2="450" y2="180" stroke="var(--border)" stroke-dasharray="4,4"/>
          <text x="10" y="40" font-size="11" fill="var(--text-muted)">+30 mV</text>
          <text x="15" y="64" font-size="11" fill="var(--text-muted)">0 mV</text>
          <text x="8" y="119" font-size="11" fill="var(--warning)" font-weight="bold">-40 mV</text>
          <text x="8" y="148" font-size="11" fill="var(--text-muted)">-60 mV</text>
          <text x="8" y="184" font-size="11" fill="var(--text-muted)">-90 mV</text>

          ${type === "fast" ? `
            <path d="${fastPath}" fill="none" stroke="var(--primary)" stroke-width="3.5" stroke-linecap="round"/>
            <text x="102" y="105" font-size="12" font-weight="bold" fill="var(--danger)">Pha 0 (Na+ vào)</text>
            <text x="128" y="50" font-size="11" font-weight="bold" fill="var(--primary)">Pha 1</text>
            <text x="160" y="58" font-size="12" font-weight="bold" fill="var(--accent)">Pha 2: Bình nguyên (Ca2+ L vào, giảm K+ ra)</text>
            <text x="285" y="125" font-size="12" font-weight="bold" fill="var(--purple)">Pha 3 (K+ ra)</text>
            <text x="340" y="172" font-size="12" font-weight="bold" fill="var(--text-muted)">Pha 4 (-90 mV)</text>
            <rect x="120" y="186" width="155" height="7" fill="var(--danger)" opacity="0.7"/>
            <text x="145" y="210" font-size="11" font-weight="bold" fill="var(--danger)">Trơ tuyệt đối (ERP: 0,25-0,30s)</text>
          ` : `
            <path d="${slowPathNorm}" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-dasharray="3,3"/>
            <path d="${activeSlowPath}" fill="none" stroke="var(--danger)" stroke-width="3.5" stroke-linecap="round"/>
            <text x="75" y="135" font-size="11.5" font-weight="bold" fill="var(--primary)">Pha 4 tự khử cực (If, Ca-T)</text>
            <text x="165" y="65" font-size="11.5" font-weight="bold" fill="var(--danger)">Pha 0 (Ca2+ type L vào)</text>
            <text x="218" y="100" font-size="11.5" font-weight="bold" fill="var(--purple)">Pha 3 (K+ ra)</text>
          `}
        </svg>
      </div>
      <div class="callout pearl" style="margin-top:12px;">
        <div class="callout-title">🔬 Phân tích Cơ chế Ion – ${info.title}</div>
        <p><strong>Dòng Ion quyết định:</strong> ${info.ion}</p>
        <p style="margin-top:4px;"><strong>Tính trơ & Ý nghĩa ECG:</strong> ${info.ref}</p>
        <p style="margin-top:4px;"><strong>Trạng thái Nhịp Nút xoang:</strong> ${hrText}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 4: CHU CHUYỂN TIM, VÒNG LẶP P-V THẤT TRÁI, VAN TIM & TIẾNG TIM
  // ========================================================================
  sim_cardiac_cycle(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Giai đoạn Chu chuyển tim (Tổng 0,8 giây):</label>
          <select id="s4_stage" onchange="Simulators.upd_s4()">
            <option value="atrial">1. Tâm nhĩ thu (0,10s) – Đẩy nốt 30% máu xuống thất</option>
            <option value="isocontract">2a. Tâm thất thu: Co đồng thể tích / Đẳng trường (0,05s)</option>
            <option value="eject">2b. Tâm thất thu: Bơm máu ra ngoài (0,25s – Nhanh 70% & Chậm 30%)</option>
            <option value="isorelax">3a. Tâm trương: Giãn đồng thể tích / Đẳng trường (0,06s)</option>
            <option value="filling">3b. Tâm trương: Máu về tim nhanh (70%) & chậm (0,44s)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Nhịp tim (HR): <strong id="s4_hr_lbl">75 lần/phút</strong></label>
          <input type="range" id="s4_hr" min="50" max="140" step="5" value="75" oninput="Simulators.upd_s4()" />
        </div>
        <div class="control-group">
          <label>EDV (Tiền tải): <strong id="s4_edv_lbl">130 mL</strong></label>
          <input type="range" id="s4_edv" min="90" max="180" step="5" value="130" oninput="Simulators.upd_s4()" />
        </div>
        <div class="control-group">
          <label>ESV (Cuối tâm thu): <strong id="s4_esv_lbl">50 mL</strong></label>
          <input type="range" id="s4_esv" min="30" max="90" step="5" value="50" oninput="Simulators.upd_s4()" />
        </div>
      </div>
      <div id="s4_out"></div>
    `;
    this.upd_s4();
  },
  upd_s4() {
    const st = document.getElementById("s4_stage").value;
    const hr = parseInt(document.getElementById("s4_hr").value);
    const edv = parseInt(document.getElementById("s4_edv").value);
    const esv = parseInt(document.getElementById("s4_esv").value);

    document.getElementById("s4_hr_lbl").textContent = hr + " lần/phút";
    document.getElementById("s4_edv_lbl").textContent = edv + " mL";
    document.getElementById("s4_esv_lbl").textContent = esv + " mL";

    const sv = Math.max(10, edv - esv);
    const co = ((hr * sv) / 1000).toFixed(2).replace(".", ",");
    const ef = Math.round((sv / edv) * 100);

    const stages = {
      atrial: {
        av: "ĐANG MỞ", semi: "ĐÓNG",
        plv: "6 → 8 mmHg", pao: "80 mmHg", vol: `${edv} mL (Đạt EDV cuối tâm trương)`,
        sound: "Tiếng T4 (nếu thất kém giãn) & Sóng 'a' áp suất nhĩ",
        ecg: "Ngay sau đỉnh sóng P (khoảng PQ)",
        desc: "Tâm nhĩ co đẩy thêm <strong>30% lượng máu</strong> xuống tâm thất (70% đã tự chảy xuống trong kỳ tâm trương trước đó)."
      },
      isocontract: {
        av: "VỪA ĐÓNG SẬP LẠI!", semi: "VẪN ĐÓNG (Cả 2 van đều đóng!)",
        plv: "Tăng vọt từ 8 → 80 mmHg (Thất phải → 10 mmHg)", pao: "80 mmHg", vol: `${edv} mL (Không đổi – Buồng kín)`,
        sound: "🔊 TIẾNG TIM T1 ('Bùm' – Do đóng van nhĩ-thất) & Sóng 'c' ở nhĩ",
        ecg: "Ngay đỉnh sóng R của phức bộ QRS",
        desc: "Tâm thất bắt đầu co, P<sub>thất</sub> > P<sub>nhĩ</sub> làm đóng van 2 lá & 3 lá (tạo T1). Nhưng P<sub>thất trái</sub> chưa vượt 80 mmHg nên van ĐMC chưa mở → <strong>Tất cả các van tim đều ĐÓNG</strong>, cơ thất co đẳng trường làm áp suất tăng vọt."
      },
      eject: {
        av: "ĐÓNG", semi: "MỞ (Khi P thất trái > 80 mmHg, thất phải > 10 mmHg)",
        plv: "Đạt đỉnh 120 mmHg (Thất phải 25 mmHg)", pao: "120 mmHg", vol: `Giảm từ ${edv} xuống ${esv} mL (Tống ra SV = ${sv} mL)`,
        sound: "Không có tiếng tim sinh lý (nếu hẹp van ĐMC sẽ nghe âm thổi tâm thu)",
        ecg: "Đoạn ST và đầu sóng T",
        desc: "<strong>1/3 đầu là Thì bơm máu nhanh (tống 70% lượng máu SV)</strong>; 2/3 sau là Thì bơm máu chậm (tống 30% SV còn lại)."
      },
      isorelax: {
        av: "VẪN ĐÓNG", semi: "VỪA ĐÓNG SẬP LẠI! (Cả 2 van đều đóng!)",
        plv: "Rơi nhanh từ 100 xuống < 5 mmHg", pao: "95 mmHg (Khấc dicrotic)", vol: `${esv} mL (Không đổi – Còn lại ESV)`,
        sound: "🔊 TIẾNG TIM T2 ('Tặc' – Do đóng van ĐMC & ĐMP) & Khấc Dicrotic",
        ecg: "Cuối sóng T",
        desc: "Thất bắt đầu giãn làm P<sub>thất</sub> < P<sub>ĐMC</sub> → máu dội ngược đóng van bán nguyệt tạo <strong>tiếng T2</strong>. Van nhĩ-thất chưa mở (vì P<sub>thất</sub> vẫn > P<sub>nhĩ</sub>) → <strong>Tất cả các van tim đều ĐÓNG</strong>, thể tích thất giữ nguyên ở ESV."
      },
      filling: {
        av: "MỞ (Khi P thất < P nhĩ, ngay đỉnh sóng 'v')", semi: "ĐÓNG",
        plv: "2 → 5 mmHg", pao: "90 → 80 mmHg", vol: `Tăng từ ${esv} lên ~${Math.round(esv + sv * 0.7)} mL (Hút 70% máu)`,
        sound: "Tiếng T3 (đầu tâm trương, do máu ùa nhanh đập vào thành thất)",
        ecg: "Đường đẳng điện TP",
        desc: "Van nhĩ-thất mở ra: <strong>1/3 đầu là Thì máu về nhanh (hút tới 70% lượng máu từ nhĩ xuống thất)</strong>; 1/3 giữa là Thì máu về chậm (diastasis); 1/3 cuối trùng với Tâm nhĩ thu (30%)."
      }
    }[st];

    document.getElementById("s4_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Van Nhĩ-Thất (2 lá, 3 lá)</div><div class="metric-val" style="font-size:15px;color:${stages.av.includes("MỞ") ? "var(--success)" : "var(--danger)"}">${stages.av}</div></div>
        <div class="metric-card"><div class="metric-label">Van Tổ chim (ĐMC, ĐMP)</div><div class="metric-val" style="font-size:15px;color:${stages.semi.includes("MỞ") ? "var(--success)" : "var(--danger)"}">${stages.semi}</div></div>
        <div class="metric-card"><div class="metric-label">Thể tích Nhát bóp (SV) & EF</div><div class="metric-val" style="font-size:16px;">${sv} mL (EF ${ef}%)</div><div class="metric-sub">SV = EDV (${edv}) – ESV (${esv})</div></div>
        <div class="metric-card"><div class="metric-label">Cung lượng tim (CO)</div><div class="metric-val" style="font-size:18px;color:var(--accent)">${co} L/phút</div><div class="metric-sub">CO = HR (${hr}) × SV (${sv})</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">❤️ Diễn biến Huyết động Giai đoạn Đang Chọn:</div>
        <ul style="padding-left:18px;margin-top:4px;">
          <li><strong>Áp suất thất trái:</strong> ${stages.plv} | <strong>Thể tích thất trái:</strong> ${stages.vol}.</li>
          <li><strong>Tiếng tim & Sóng nhĩ:</strong> <strong>${stages.sound}</strong> (Tương ứng ECG: <em>${stages.ecg}</em>).</li>
          <li><strong>Cơ chế sinh lý:</strong> ${stages.desc}</li>
        </ul>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 5: ĐIỀU HÒA HOẠT ĐỘNG TIM (FRANK-STARLING, PHẢN XẠ & ION K+, Ca2+)
  // ========================================================================
  sim_cardiac_reg(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Thí nghiệm / Cơ chế Điều hòa Tim:</label>
          <select id="s5_exp" onchange="Simulators.upd_s5()">
            <option value="starling">1. Định luật Frank-Starling (Tăng máu tĩnh mạch về tim / Tăng EDV)</option>
            <option value="vagus_r">2. Kích thích Dây thần kinh X PHẢI vs Dây X TRÁI</option>
            <option value="symp_rl">3. Kích thích Giao cảm PHẢI vs Giao cảm TRÁI</option>
            <option value="baro">4. Phản xạ Áp thụ quan (Tăng Huyết áp / Xoa xoang cảnh → Dây IX, X)</option>
            <option value="bezold">5. Phản xạ Thụ thể ở Thất (Phản xạ Bezold - Jarisch)</option>
            <option value="bainbridge">6. Phản xạ Bainbridge (Truyền dịch làm căng tâm nhĩ phải)</option>
            <option value="k_high">7. Truyền dung dịch Tăng Kali máu (K+ ngoại bào tăng cao)</option>
            <option value="ca_high">8. Truyền dung dịch Tăng Canxi máu (Ca2+ ngoại bào tăng cao)</option>
          </select>
        </div>
      </div>
      <div id="s5_out"></div>
    `;
    this.upd_s5();
  },
  upd_s5() {
    const exp = document.getElementById("s5_exp").value;
    const map = {
      starling: {
        hr: "75 lần/phút (Không đổi)", force: "TĂNG MẠNH ↑↑ (Sarcomere đạt 2,2 μm)", bp: "Tăng cung lượng tim CO",
        mech: "<strong>Định luật Frank-Starling (Điều hòa nội tại):</strong> Trong giới hạn sinh lý, khi lượng máu về thất tăng (tăng EDV / tiền tải), sợi cơ tim giãn ra đạt chiều dài sarcomere tối ưu 2,2 μm → tối ưu cầu nối Actin-Myosin và tăng nhạy cảm Troponin C với Ca²⁺ → <strong>Lực co cơ tim tăng tỉ lệ thuận với chiều dài sợi cơ trước khi co</strong>, giúp cân bằng lưu lượng thất phải và thất trái."
      },
      vagus_r: {
        hr: "GIẢM MẠNH ↓↓ (Có thể ngưng xoang rồi thoát ức chế dây X)", force: "Giảm nhẹ ở nhĩ, ít đổi ở thất", bp: "Giảm",
        mech: "<strong>Phân công Dây X Phải vs Trái (Chuẩn Sách YDS tr.88):</strong><br/>• <strong>Dây X PHẢI</strong> phân bố chủ yếu ở <strong>Nút xoang (SA)</strong> → kích thích gây chậm nhịp xoang hoặc ngưng xoang.<br/>• <strong>Dây X TRÁI</strong> phân bố chủ yếu ở <strong>Nút nhĩ-thất (AV)</strong> → kích thích làm chậm dẫn truyền nhĩ-thất (kéo dài PR / block AV).<br/>• Nếu kích thích dây X quá mạnh, tim ngừng đập vài giây rồi mạng Purkinje tự phát nhịp 15–40 l/p gọi là <strong>Hiện tượng thoát ức chế dây X (Vagal escape)</strong>."
      },
      symp_rl: {
        hr: "TĂNG MẠNH ↑↑ (Giao cảm Phải ưu thế)", force: "TĂNG MẠNH ↑↑ (Giao cảm Trái ưu thế)", bp: "Tăng Huyết áp",
        mech: "<strong>Phân công Giao cảm Phải vs Trái (Chuẩn Sách YDS tr.89):</strong><br/>• <strong>Giao cảm PHẢI</strong> chi phối nhiều cho nút xoang → làm <strong>TĂNG NHỊP TIM</strong> nhiều hơn tăng lực co bóp.<br/>• <strong>Giao cảm TRÁI</strong> chi phối dày đặc cho cơ tâm thất → làm <strong>TĂNG SỨC CO BÓP CƠ TIM</strong> nhiều hơn tăng nhịp."
      },
      baro: {
        hr: "GIẢM NHỊP TIM ↓", force: "Giảm nhẹ sức co bóp", bp: "GIÃN MẠCH → HẠ HUYẾT ÁP về bình thường",
        mech: "<strong>Phản xạ Áp thụ quan (Xoang cảnh → dây Hering → Dây IX; Quai ĐMC → dây Cyon → Dây X):</strong> Khi HA tăng (70–160 mmHg) hoặc ấn xoang cảnh, xung về nhân bó đơn độc ở hành não → kích thích nhân dây X và ức chế trung tâm co mạch → <strong>Giảm nhịp tim + Giãn mạch ngoại biên → Hạ HA</strong>."
      },
      bezold: {
        hr: "GIẢM NHỊP TIM ↓", force: "Giảm co bóp", bp: "GIẢM KHÁNG LỰC NGOẠI BIÊN ↓ (Giãn mạch, hạ HA)",
        mech: "<strong>Phản xạ thụ thể ở Thất (Bezold - Jarisch – Câu hỏi Đề thi SĐH 2024):</strong> Khi các thụ thể cơ học/hóa học ở thành tâm thất trái bị kích thích, xung hướng tâm truyền theo sợi C của dây X về hành não gây phản xạ <strong>GIẢM nhịp tim và GIẢM kháng lực mạch máu ngoại biên</strong>."
      },
      bainbridge: {
        hr: "TĂNG NHỊP TIM ↑", force: "Tăng theo Starling", bp: "Giải quyết máu ứ ở nhĩ phải",
        mech: "<strong>Phản xạ Bainbridge:</strong> Khi máu về tâm nhĩ phải nhiều làm căng vùng Bainbridge quanh lỗ tĩnh mạch chủ → xung hướng tâm đi theo <strong>DÂY X</strong> về hành não làm ức chế trung tâm dây X → <strong>Tăng nhịp tim</strong>. (Lưu ý: Phản xạ này bị <strong>mất hoàn toàn nếu cắt đứt cả hai dây X</strong>!)."
      },
      k_high: {
        hr: "ĐẬP CHẬM, RỐI LOẠN DẪN TRUYỀN ↓↓", force: "CO BÓP YẾU (Giãn mềm) ↓↓", bp: "🛑 NGỪNG TIM Ở KỲ TÂM TRƯƠNG!",
        mech: "<strong>Tăng Kali máu (Hyperkalemia):</strong> Nồng độ K⁺ ngoại bào cao làm giảm khuynh độ K⁺ từ trong ra ngoài → <strong>giảm độ âm của điện thế nghỉ</strong> → bất hoạt kênh Na⁺ nhanh → tim đập chậm, yếu và <strong>NGỪNG TIM Ở KỲ TÂM TRƯƠNG</strong>."
      },
      ca_high: {
        hr: "Rối loạn nhịp", force: "CO THẮT CỰC MẠNH (Co cứng) ↑↑", bp: "🛑 NGỪNG TIM Ở KỲ TÂM THU!",
        mech: "<strong>Tăng Canxi máu (Hypercalcemia):</strong> Nồng độ Ca²⁺ ngoại bào quá cao làm dòng Ca²⁺ đi vào cơ tim quá mức → cơ tim co thắt liên tục không giãn ra được → <strong>NGỪNG TIM Ở KỲ TÂM THU</strong>."
      }
    }[exp];

    document.getElementById("s5_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Tần số Nhịp tim (HR)</div><div class="metric-val" style="font-size:15px;">${map.hr}</div></div>
        <div class="metric-card"><div class="metric-label">Lực Co bóp Cơ tim</div><div class="metric-val" style="font-size:15px;">${map.force}</div></div>
        <div class="metric-card"><div class="metric-label">Huyết áp / Hệ quả Tuần hoàn</div><div class="metric-val" style="font-size:15px;color:var(--danger)">${map.bp}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🧠 Giải thích Cơ chế Sinh lý Chuẩn Giáo trình YDS:</div>
        <p>${map.mech}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 6: CƠ HỌC HÔ HẤP, ÁP SUẤT MÀNG PHỔI & MÁY TÍNH THÔNG KHÍ PHẾ NANG
  // ========================================================================
  sim_resp_mechanics(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Thì Hô hấp để khảo sát Áp suất & Thể tích:</label>
          <select id="s6_phase" onchange="Simulators.upd_s6()">
            <option value="frc">1. Cuối kỳ thở ra bình thường (Mức FRC – Tất cả cơ hô hấp giãn nghỉ)</option>
            <option value="insp_mid">2. Đang hít vào bình thường (Cơ hoành & Liên sườn ngoài co)</option>
            <option value="insp_end">3. Cuối kỳ hít vào bình thường (Tăng thêm TV = 500 mL)</option>
            <option value="exp_mid">4. Đang thở ra bình thường (Thụ động do lực đàn hồi phổi)</option>
            <option value="max_insp">5. Hít vào gắng sức tối đa (Đạt TLC / VC – Áp suất màng phổi ÂM NHẤT)</option>
            <option value="max_exp">6. Thở ra gắng sức tối đa (Cơ thẳng bụng co mạnh – Còn lại RV)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Tần số thở (f): <strong id="s6_f_lbl">12 lần/phút</strong></label>
          <input type="range" id="s6_f" min="6" max="35" step="1" value="12" oninput="Simulators.upd_s6()" />
        </div>
        <div class="control-group">
          <label>Thể tích lưu thông (TV): <strong id="s6_tv_lbl">500 mL</strong></label>
          <input type="range" id="s6_tv" min="200" max="1000" step="50" value="500" oninput="Simulators.upd_s6()" />
        </div>
      </div>
      <div id="s6_out"></div>
    `;
    this.upd_s6();
  },
  upd_s6() {
    const ph = document.getElementById("s6_phase").value;
    const f = parseInt(document.getElementById("s6_f").value);
    const tv = parseInt(document.getElementById("s6_tv").value);
    const vd = 150;

    document.getElementById("s6_f_lbl").textContent = f + " lần/phút";
    document.getElementById("s6_tv_lbl").textContent = tv + " mL";

    const ve = f * tv;
    const va = f * Math.max(0, tv - vd);

    const states = {
      frc: {
        vol: "FRC = ERV + RV ≈ 2.300 mL",
        ppl: "–2,5 mmHg (–5 cmH₂O)",
        palv: "0 mmHg (Bằng khí quyển)",
        ptp: "+2,5 mmHg (+5 cmH₂O)",
        musc: "<strong>Tất cả các cơ hô hấp đều GIÃN NGHỈ hoàn toàn!</strong> Lực co đàn hồi của phổi cân bằng với lực bung ra của lồng ngực. (Đề thi SĐH: Thể tích phổi lúc này là <strong>Dung tích cặn chức năng FRC</strong>)."
      },
      insp_mid: {
        vol: "Đang tăng từ 2.300 → 2.800 mL",
        ppl: "–4,5 mmHg",
        palv: "–1 đến –3 mmHg (Âm hơn khí quyển → Hút khí vào phổi)",
        ptp: "+3,5 mmHg",
        musc: "<strong>Chủ động:</strong> <strong>Cơ hoành</strong> (chiếm 75% thể tích, dây C₃–C₅) và <strong>Cơ liên sườn ngoài</strong> co lại làm tăng thể tích lồng ngực."
      },
      insp_end: {
        vol: "FRC + TV ≈ 2.800 mL",
        ppl: "–6 mmHg (–7,5 cmH₂O)",
        palv: "0 mmHg (Dòng khí tạm ngừng chảy)",
        ptp: "+6 mmHg",
        musc: "Cơ hoành và cơ liên sườn ngoài đang ở đỉnh co của nhịp thở bình thường."
      },
      exp_mid: {
        vol: "Đang giảm từ 2.800 → 2.300 mL",
        ppl: "–4 mmHg",
        palv: "+1 đến +3 mmHg (Dương hơn khí quyển → Đẩy khí ra ngoài)",
        ptp: "+5 mmHg",
        musc: "<strong>THỤ ĐỘNG hoàn toàn:</strong> Không có cơ nào co! Cơ hít vào giãn ra, phổi co lại nhờ lực đàn hồi (2/3 do sức căng bề mặt dịch lót phế nang, 1/3 do sợi elastin/collagen)."
      },
      max_insp: {
        vol: "Đạt Tổng dung lượng phổi TLC ≈ 5.000 mL (Hít hết IRV, đạt VC)",
        ppl: "–30 mmHg (ĐẠT GIÁ TRỊ ÂM NHẤT! – Đề thi SĐH!)",
        palv: "0 mmHg (ở đỉnh hít vào tối đa)",
        ptp: "+30 mmHg (Phổi căng tối đa)",
        musc: "<strong>Hít vào gắng sức tối đa:</strong> Cơ hoành + Cơ liên sườn ngoài + <strong>Cơ ức đòn chũm, cơ răng trước, cơ bậc thang (cơ lệch), cơ cánh mũi</strong>."
      },
      max_exp: {
        vol: "Chỉ còn Thể tích khí cặn RV ≈ 1.200 mL (Đã thở ra hết ERV)",
        ppl: "Có thể trở nên DƯƠNG (+10 đến +20 mmHg)",
        palv: "+20 đến +40 mmHg",
        ptp: "Rất thấp ở đáy phổi",
        musc: "<strong>Thở ra gắng sức tối đa (Chủ động):</strong> <strong>Cơ thẳng bụng (và các cơ thành bụng trước)</strong> co lại có hiệu quả nhất (câu hỏi Đề thi SĐH 2024!), phối hợp cùng <strong>cơ liên sườn trong</strong>."
      }
    }[ph];

    document.getElementById("s6_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Áp suất Màng phổi (P<sub>pl</sub>)</div><div class="metric-val" style="font-size:15px;color:var(--primary)">${states.ppl}</div></div>
        <div class="metric-card"><div class="metric-label">Áp suất Phế nang (P<sub>alv</sub>)</div><div class="metric-val" style="font-size:15px;color:var(--accent)">${states.palv}</div></div>
        <div class="metric-card"><div class="metric-label">Áp suất Xuyên phổi (P<sub>tp</sub> = P<sub>alv</sub> - P<sub>pl</sub>)</div><div class="metric-val" style="font-size:15px;">${states.ptp}</div></div>
        <div class="metric-card"><div class="metric-label">Thể tích Phổi hiện tại</div><div class="metric-val" style="font-size:14px;">${states.vol}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">💪 Hoạt động Cơ Hô hấp & Cơ học Phổi:</div>
        <p>${states.musc}</p>
        <p style="margin-top:4px;"><strong>Thứ tự độ lớn các thể tích/dung tích phổi:</strong> <code>TLC (5000 mL) &gt; VC (3500 mL) &gt; FRC (2300 mL) &gt; TV (500 mL)</code>. <em>(Hô hấp ký KHÔNG đo được RV, FRC, TLC)</em>.</p>
      </div>
      <div class="metric-cards">
        <div class="metric-card">
          <div class="metric-label">Thông khí Phút (V̇<sub>E</sub> = f × TV)</div>
          <div class="metric-val">${ve.toLocaleString("vi-VN")} mL/phút</div>
          <div class="metric-sub">${f} nhịp × ${tv} mL</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Khoảng chết Giải phẫu (V<sub>D</sub>)</div>
          <div class="metric-val">150 mL</div>
          <div class="metric-sub">Từ mũi đến tiểu phế quản tận cùng</div>
        </div>
        <div class="metric-card" style="border:2px solid ${va >= 4000 ? "var(--success)" : "var(--danger)"}">
          <div class="metric-label">Thông khí Phế nang [V̇<sub>A</sub> = f × (TV - 150)]</div>
          <div class="metric-val" style="color:${va >= 4000 ? "var(--success)" : "var(--danger)"}">${va.toLocaleString("vi-VN")} mL/phút</div>
          <div class="metric-sub">${va >= 4000 ? "✅ Thông khí phế nang tốt (Thở sâu hiệu quả hơn thở nông!)" : "⚠️ Giảm thông khí phế nang (Nguy cơ ứ CO2, thiếu O2!)"}</div>
        </div>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 7: TRAO ĐỔI KHÍ TẠI PHỔI & TỈ LỆ VA/Q THEO 3 VÙNG WEST
  // ========================================================================
  sim_gas_exchange(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Vùng Phổi hoặc Tình huống Bệnh lý Thông khí - Tưới máu (V<sub>A</sub>/Q):</label>
          <select id="s7_zone" onchange="Simulators.upd_s7()">
            <option value="avg">1. Trung bình toàn phổi người khỏe mạnh (VA = 4,2 L/ph, Q = 5,0 L/ph → VA/Q = 0,8)</option>
            <option value="apex">2. Đỉnh phổi khi đứng (Vùng 1 / Đầu Vùng 2 West – VA/Q cao = 2,4 – 3,3)</option>
            <option value="mid">3. Giữa phổi khi đứng (Vùng 2 West: Pa > PA > Pv)</option>
            <option value="base">4. Đáy phổi khi đứng (Vùng 3 West: Pa > Pv > PA – VA/Q thấp = 0,5 – 0,6)</option>
            <option value="shunt">5. Tắc nghẽn hoàn toàn phế quản (VA = 0, Q bình thường → VA/Q = 0: Shunt)</option>
            <option value="dead">6. Thuyên tắc hoàn toàn động mạch phổi (VA bình thường, Q = 0 → VA/Q = ∞: Khoảng chết)</option>
          </select>
        </div>
      </div>
      <div id="s7_out"></div>
    `;
    this.upd_s7();
  },
  upd_s7() {
    const z = document.getElementById("s7_zone").value;
    const map = {
      avg: {
        vaq: "0,8 (Tối ưu)", pao2: "100 mmHg", paco2: "40 mmHg", art_o2: "95 mmHg (Do pha 2% máu TM phế quản & Thebesius)",
        west: "Toàn phổi trung bình",
        desc: "Máu tĩnh mạch trộn đầu mao mạch phổi (P<sub>vO₂</sub> = 40, P<sub>vCO₂</sub> = 46 mmHg) đi qua màng hô hấp 8 lớp chỉ mất <strong>0,25 giây</strong> (trong tổng 0,75 giây) để cân bằng hoàn toàn với khí phế nang (P<sub>AO₂</sub> = 100, P<sub>ACO₂</sub> = 40 mmHg). Khả năng khuếch tán D<sub>L</sub>O₂ lúc nghỉ = <strong>21 mL/phút/mmHg</strong>; CO₂ khuếch tán nhanh gấp <strong>20,7 lần</strong> O₂."
      },
      apex: {
        vaq: "2,4 – 3,3 (RẤT CAO)", pao2: "132 mmHg (Rất cao)", paco2: "28 mmHg (Thấp)", art_o2: "Khoảng chết sinh lý ở đỉnh phổi",
        west: "Đỉnh phổi (P<sub>A</sub> có thể > P<sub>a</sub> > P<sub>v</sub> nếu tụt HA)",
        desc: "Khi đứng, cả thông khí (V<sub>A</sub>) và tưới máu (Q) ở đỉnh phổi đều thấp hơn đáy phổi, nhưng <strong>Q giảm nhiều hơn V<sub>A</sub></strong> → tỉ số <strong>V<sub>A</sub>/Q ở đỉnh phổi rất cao (2,4 – 3,3)</strong>, tạo khoảng chết sinh lý và làm phân áp O₂ ở đỉnh phổi rất cao (giải thích vì sao trực khuẩn lao ưa khí hay gây tổn thương ở đỉnh phổi!)."
      },
      mid: {
        vaq: "~ 0,8 – 1,0", pao2: "100 mmHg", paco2: "40 mmHg", art_o2: "95 mmHg",
        west: "Vùng 2 của West: P<sub>a</sub> > P<sub>A</sub> > P<sub>v</sub> (Đề thi SĐH 2024!)",
        desc: "Ở Vùng 2 (giữa phổi): Áp suất động mạch phổi ở đỉnh tâm thu lớn hơn áp suất phế nang (P<sub>a</sub> > P<sub>A</sub>), nhưng áp suất tĩnh mạch phổi nhỏ hơn áp suất phế nang (P<sub>A</sub> > P<sub>v</sub>) → Lưu lượng máu chảy từng đợt phụ thuộc vào hiệu số (P<sub>a</sub> – P<sub>A</sub>)."
      },
      base: {
        vaq: "0,5 – 0,6 (THẤP)", pao2: "89 mmHg (Thấp)", paco2: "42 mmHg", art_o2: "Máu tưới thừa so với thông khí",
        west: "Vùng 3 của West: P<sub>a</sub> > P<sub>v</sub> > P<sub>A</sub>",
        desc: "Khi đi từ đỉnh xuống đáy phổi, cả V<sub>A</sub> và Q đều tăng nhưng <strong>tưới máu Q tăng nhiều hơn V<sub>A</sub></strong>. Ở đáy phổi, áp suất thủy tĩnh mạch máu lớn làm cả P<sub>a</sub> và P<sub>v</sub> đều lớn hơn P<sub>A</sub> → mao mạch mở suốt chu chuyển tim, lưu lượng máu cao nhất nhưng tỉ số <strong>V<sub>A</sub>/Q thấp (0,5 – 0,6)</strong>. Khi phế nang thiếu O₂ sẽ gây <strong>co mạch phổi tại chỗ</strong> để đẩy máu sang vùng thông khí tốt."
      },
      shunt: {
        vaq: "V<sub>A</sub>/Q = 0 (Shunt / Nối tắt)", pao2: "40 mmHg (Bằng máu TM trộn!)", paco2: "45 – 46 mmHg", art_o2: "Gây giảm oxy máu động mạch nặng",
        west: "Tắc hoàn toàn đường dẫn khí (V<sub>A</sub> = 0, Q > 0)",
        desc: "Khi phế nang không có thông khí (V<sub>A</sub> = 0) nhưng vẫn có máu tưới → <strong>V<sub>A</sub>/Q = 0</strong>. Không có khí mới vào nên khí trong phế nang cân bằng hoàn toàn với <strong>máu tĩnh mạch trộn</strong> (P<sub>O₂</sub> = 40 mmHg, P<sub>CO₂</sub> = 46 mmHg). Máu đi qua vùng này không nhận được O₂ (Shunt phải - trái)."
      },
      dead: {
        vaq: "V<sub>A</sub>/Q → ∞ (Vô cực)", pao2: "149 mmHg (Bằng khí hít vào làm ẩm!)", paco2: "0 mmHg", art_o2: "Khoảng chết phế nang (Alveolar dead space)",
        west: "Tắc hoàn toàn mạch máu phổi (V<sub>A</sub> > 0, Q = 0)",
        desc: "Khi thuyên tắc mạch phổi làm Q = 0 trong khi phế nang vẫn thông khí bình thường → <strong>V<sub>A</sub>/Q = ∞</strong>. Vì không có máu lấy O₂ hay thải CO₂ nên thành phần khí phế nang giống hệt <strong>khí trời hít vào đã làm ẩm ở khí quản</strong>: P<sub>O₂</sub> = 149 mmHg, P<sub>CO₂</sub> = 0 mmHg."
      }
    }[z];

    document.getElementById("s7_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Tỉ số V<sub>A</sub> / Q</div><div class="metric-val" style="color:var(--primary)">${map.vaq}</div></div>
        <div class="metric-card"><div class="metric-label">P<sub>O₂</sub> Phế nang (P<sub>AO₂</sub>)</div><div class="metric-val" style="color:var(--accent)">${map.pao2}</div></div>
        <div class="metric-card"><div class="metric-label">P<sub>CO₂</sub> Phế nang (P<sub>ACO₂</sub>)</div><div class="metric-val" style="color:var(--danger)">${map.paco2}</div></div>
        <div class="metric-card"><div class="metric-label">Phân vùng West / Hệ quả</div><div class="metric-val" style="font-size:13.5px;">${map.west}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🫁 Giải thích Động học Khuếch tán & Tương xứng Thông khí - Tưới máu:</div>
        <p>${map.desc}</p>
        <p style="margin-top:4px;"><strong>Đầu ra máu động mạch:</strong> ${map.art_o2}.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 8: ĐƯỜNG CONG PHÂN LY Hb-O2 (BARCROFT), P50 & CHUYÊN CHỞ CO2
  // ========================================================================
  sim_o2_curve(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>pH máu: <strong id="s8_ph_lbl">7,40</strong></label>
          <input type="range" id="s8_ph" min="7.0" max="7.7" step="0.05" value="7.40" oninput="Simulators.upd_s8()" />
        </div>
        <div class="control-group">
          <label>P<sub>CO₂</sub> máu: <strong id="s8_co2_lbl">40 mmHg</strong></label>
          <input type="range" id="s8_co2" min="20" max="80" step="5" value="40" oninput="Simulators.upd_s8()" />
        </div>
        <div class="control-group">
          <label>Nhiệt độ cơ thể: <strong id="s8_temp_lbl">37,0 °C</strong></label>
          <input type="range" id="s8_temp" min="33" max="41" step="0.5" value="37.0" oninput="Simulators.upd_s8()" />
        </div>
        <div class="control-group">
          <label>Tình trạng 2,3-DPG / Loại Hb:</label>
          <select id="s8_hbtype" onchange="Simulators.upd_s8()">
            <option value="norm">Bình thường (HbA trưởng thành, 2,3-DPG chuẩn)</option>
            <option value="dpg_high">Tăng 2,3-DPG (Lên vùng núi cao / Thiếu máu mạn / Vận động)</option>
            <option value="dpg_low">Giảm 2,3-DPG (Máu dự trữ ngân hàng lâu ngày)</option>
            <option value="hbf">Hemoglobin bào thai (HbF – Không gắn 2,3-DPG)</option>
            <option value="hbco">Ngộ độc khí CO (50% HbCO – Ái lực gấp 210 lần O2)</option>
          </select>
        </div>
      </div>
      <div id="s8_out"></div>
    `;
    this.upd_s8();
  },
  upd_s8() {
    const ph = parseFloat(document.getElementById("s8_ph").value);
    const co2 = parseInt(document.getElementById("s8_co2").value);
    const temp = parseFloat(document.getElementById("s8_temp").value);
    const hbtype = document.getElementById("s8_hbtype").value;

    document.getElementById("s8_ph_lbl").textContent = ph.toFixed(2).replace(".", ",");
    document.getElementById("s8_co2_lbl").textContent = co2 + " mmHg";
    document.getElementById("s8_temp_lbl").textContent = temp.toFixed(1).replace(".", ",") + " °C";

    // Calculate P50 shift from baseline 26.8 mmHg
    let p50 = 26.8 + (7.4 - ph) * 22 + (co2 - 40) * 0.22 + (temp - 37) * 1.4;
    if (hbtype === "dpg_high") p50 += 6.5;
    if (hbtype === "dpg_low") p50 -= 5.5;
    if (hbtype === "hbf") p50 -= 7.8;
    if (hbtype === "hbco") p50 -= 11.0;
    p50 = Math.max(12, Math.min(48, p50));

    // Hill equation approximation (n = 2.7)
    const hill = (po2, p50val) => Math.round((Math.pow(po2, 2.7) / (Math.pow(po2, 2.7) + Math.pow(p50val, 2.7))) * 100);
    const sao2_100 = hill(95, p50);
    const sao2_60 = hill(60, p50);
    const svo2_40 = hill(40, p50);

    const effHb = hbtype === "hbco" ? 7.5 : 15.0; // If 50% HbCO, only 7.5 g/dL functional Hb
    const ctO2 = (effHb * (sao2_100 / 100) * 1.39 + 95 * 0.003).toFixed(1).replace(".", ",");

    let shiftText = "Đường cong ở vị trí CHUẨN bình thường (P₅₀ ≈ 26,8 mmHg)";
    let shiftColor = "var(--primary)";
    if (p50 > 28.0) {
      shiftText = `Đường cong LỆCH PHẢI (P₅₀ tăng lên ${p50.toFixed(1)} mmHg) → Giảm ái lực Hb-O₂ → TĂNG NHẢ O₂ CHO MÔ (Hiệu quả Bohr)!`;
      shiftColor = "var(--danger)";
    } else if (p50 < 25.5) {
      shiftText = `Đường cong LỆCH TRÁI (P₅₀ giảm còn ${p50.toFixed(1)} mmHg) → Tăng ái lực Hb-O₂ → Giữ chặt O₂, khó nhả O₂ cho mô!`;
      shiftColor = "var(--accent)";
    }

    // Build SVG polyline points for baseline and shifted curve
    const buildPts = (p50val) => {
      const pts = [];
      for (let po2 = 0; po2 <= 100; po2 += 5) {
        const sat = Math.pow(po2, 2.7) / (Math.pow(po2, 2.7) + Math.pow(p50val, 2.7));
        const x = 60 + po2 * 3.6;
        const y = 185 - sat * 150;
        pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      return pts.join(" ");
    };

    document.getElementById("s8_out").innerHTML = `
      <div class="svg-stage">
        <svg viewBox="0 0 460 215" style="width:100%;max-width:650px;height:auto;">
          <line x1="60" y1="25" x2="60" y2="185" stroke="var(--text-light)" stroke-width="1.5"/>
          <line x1="60" y1="185" x2="430" y2="185" stroke="var(--text-light)" stroke-width="1.5"/>
          <!-- 50% line -->
          <line x1="60" y1="110" x2="420" y2="110" stroke="var(--border)" stroke-dasharray="4,4"/>
          <!-- PO2 = 40 & 60 lines -->
          <line x1="${60 + 40 * 3.6}" y1="25" x2="${60 + 40 * 3.6}" y2="185" stroke="var(--border)" stroke-dasharray="3,3"/>
          <line x1="${60 + 60 * 3.6}" y1="25" x2="${60 + 60 * 3.6}" y2="185" stroke="var(--border)" stroke-dasharray="3,3"/>
          <text x="15" y="40" font-size="11" fill="var(--text-muted)">100%</text>
          <text x="20" y="75" font-size="11" fill="var(--text-muted)">75%</text>
          <text x="20" y="114" font-size="11" fill="var(--warning)" font-weight="bold">50%</text>
          <text x="55" y="202" font-size="11" fill="var(--text-muted)">0</text>
          <text x="${50 + 27 * 3.6}" y="202" font-size="10.5" fill="var(--warning)">P50</text>
          <text x="${48 + 40 * 3.6}" y="202" font-size="11" fill="var(--text-muted)">40 (TM)</text>
          <text x="${52 + 60 * 3.6}" y="202" font-size="11" fill="var(--text-muted)">60</text>
          <text x="${45 + 100 * 3.6}" y="202" font-size="11" fill="var(--text-muted)">100 mmHg</text>

          <!-- Baseline curve (dashed) -->
          <polyline points="${buildPts(26.8)}" fill="none" stroke="var(--text-light)" stroke-width="2" stroke-dasharray="4,4"/>
          <!-- Active shifted curve -->
          <polyline points="${buildPts(p50)}" fill="none" stroke="${shiftColor}" stroke-width="3.5"/>
          <circle cx="${60 + p50 * 3.6}" cy="110" r="5" fill="${shiftColor}"/>
        </svg>
      </div>
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Phân áp P<sub>50</sub> (SaO₂ = 50%)</div><div class="metric-val" style="color:${shiftColor}">${p50.toFixed(1).replace(".", ",")} mmHg</div><div class="metric-sub">Chuẩn: 26,8 mmHg</div></div>
        <div class="metric-card"><div class="metric-label">SaO₂ ở P<sub>O₂</sub> = 60 mmHg</div><div class="metric-val">${sao2_60}%</div><div class="metric-sub">Chuẩn: ~89 – 90%</div></div>
        <div class="metric-card"><div class="metric-label">SvO₂ ở Mô (P<sub>O₂</sub> = 40 mmHg)</div><div class="metric-val">${svo2_40}%</div><div class="metric-sub">Giao cho mô: ${sao2_100 - svo2_40}% lượng O₂</div></div>
        <div class="metric-card"><div class="metric-label">Tổng Oxy máu ĐM (ctO₂)</div><div class="metric-val" style="color:${hbtype === "hbco" ? "var(--danger)" : "var(--primary)"}">${ctO2} mL/dL</div><div class="metric-sub">(tHb×FO₂Hb×1,39) + (P<sub>O₂</sub>×0,003)</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title" style="color:${shiftColor}">📌 Kết luận Dịch chuyển Đường cong Barcroft & Vận chuyển CO₂:</div>
        <p><strong>${shiftText}</strong></p>
        ${hbtype === "hbco" ? `<p style="color:var(--danger);font-weight:700;margin-top:4px;">⚠️ CẢNH BÁO NGỘ ĐỘC CO: Phân áp PaO₂ hòa tan vẫn bình thường (95 mmHg) nên không kích thích thể cảnh, nhưng tổng lượng oxy máu ctO₂ giảm mất một nửa (chỉ còn ${ctO2} mL/dL) và đường cong lệch trái cực mạnh! Điều trị: Thở 95% O₂ + 5% CO₂.</p>` : ""}
        <p style="margin-top:4px;"><strong>Nhắc nhớ Vận chuyển CO₂:</strong> <code>Bicarbonate HCO₃⁻ (70%) &gt; Carbaminohemoglobin HbCO₂ (23%) &gt; Hòa tan (7%)</code>. Hiện tượng <strong>Hamburger</strong> (Cl⁻ và nước đi vào HC đổi chỗ cho HCO₃⁻ ra huyết tương) làm <strong>Hct máu tĩnh mạch cao hơn máu động mạch 3%</strong>.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 9: ĐỘNG HỌC LỌC CẦU THẬN (GFR), NGƯỠNG THẬN GLUCOSE & THANH THẢI
  // ========================================================================
  sim_nephron_gfr(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Trạng thái Tiểu ĐM Vào (AA) & Tiểu ĐM Ra (EA):</label>
          <select id="s9_vessel" onchange="Simulators.upd_s9()">
            <option value="norm">1. Bình thường (PGC = 55, PBS = 15, COP = 30 mmHg → UP = +10 mmHg)</option>
            <option value="aa_dil">2. Giãn Tiểu động mạch Vào (Prostaglandin, NO, ANP)</option>
            <option value="aa_con">3. Co Tiểu động mạch Vào (Giao cảm mạnh α1, Adenosine từ vết đặc)</option>
            <option value="ea_con">4. Co nhẹ/vừa Tiểu động mạch Ra (Angiotensin II)</option>
            <option value="ea_dil">5. Giãn Tiểu động mạch Ra (Thuốc ức chế men chuyển ACEi / ARB)</option>
            <option value="stone">6. Tắc nghẽn đường tiết niệu (Sỏi niệu quản làm tăng PBS)</option>
          </select>
        </div>
        <div class="control-group">
          <label>Đường huyết (P<sub>Glucose</sub>): <strong id="s9_glu_lbl">100 mg/dL</strong></label>
          <input type="range" id="s9_glu" min="80" max="450" step="10" value="100" oninput="Simulators.upd_s9()" />
        </div>
      </div>
      <div id="s9_out"></div>
    `;
    this.upd_s9();
  },
  upd_s9() {
    const v = document.getElementById("s9_vessel").value;
    const pGlu = parseInt(document.getElementById("s9_glu").value);
    document.getElementById("s9_glu_lbl").textContent = pGlu + " mg/dL";

    const vMap = {
      norm: { pgc: 55, pbs: 15, cop: 30, rbf: "Bình thường (1200 mL/ph)", erpf: 625, desc: "Động học siêu lọc chuẩn: UP = 55 – (15 + 30) = +10 mmHg → GFR = Kf (12,5) × 10 = 125 mL/phút (180 L/ngày)." },
      aa_dil: { pgc: 63, pbs: 15, cop: 30, rbf: "TĂNG ↑", erpf: 750, desc: "<strong>Giãn Tiểu ĐM Vào:</strong> Máu vào cầu thận nhiều hơn và truyền áp suất mạnh hơn → <strong>Tăng cả RBF, tăng P<sub>GC</sub> và TĂNG GFR!</strong>" },
      aa_con: { pgc: 47, pbs: 15, cop: 30, rbf: "GIẢM ↓", erpf: 480, desc: "<strong>Co Tiểu ĐM Vào:</strong> Giảm dòng máu vào cầu thận → <strong>Giảm cả RBF, giảm P<sub>GC</sub> và GIẢM GFR!</strong>" },
      ea_con: { pgc: 62, pbs: 15, cop: 32, rbf: "GIẢM ↓", erpf: 520, desc: "<strong>Co nhẹ/vừa Tiểu ĐM Ra (Angiotensin II):</strong> Cản trở máu rời cầu thận nên dù RBF giảm nhưng <strong>P<sub>GC</sub> TĂNG → làm TĂNG GFR và tăng mạnh phân suất lọc FF!</strong>" },
      ea_dil: { pgc: 48, pbs: 15, cop: 29, rbf: "TĂNG ↑", erpf: 720, desc: "<strong>Giãn Tiểu ĐM Ra (Thuốc ACEi / ARB):</strong> Máu thoát khỏi cầu thận quá nhanh → dù RBF tăng nhưng <strong>P<sub>GC</sub> GIẢM → làm GIẢM GFR!</strong>" },
      stone: { pgc: 55, pbs: 23, cop: 30, rbf: "Giảm thứ phát", erpf: 550, desc: "<strong>Sỏi niệu quản (Tắc nghẽn sau thận):</strong> Nước tiểu ứ lại làm <strong>tăng áp suất thủy tĩnh bao Bowman (P<sub>BS</sub> tăng lên 23 mmHg)</strong> → giảm UP → <strong>GIẢM GFR!</strong>" }
    }[v];

    const up = vMap.pgc - (vMap.pbs + vMap.cop);
    const gfr = Math.round(12.5 * up);
    const ff = ((gfr / vMap.erpf) * 100).toFixed(1).replace(".", ",");

    // Glucose handling at PCT
    const fl = Math.round((gfr * pGlu) / 100); // mg/min (since pGlu is mg/dL = mg/100mL)
    let reab = fl;
    let excr = 0;
    let gluNote = "Đường huyết < Ngưỡng thận thực tế (180 mg/dL): <strong>Ống lượn gần tái hấp thu 100% Glucose</strong> (qua SGLT2 90% & SGLT1 10% ở bờ đỉnh, GLUT2 ở bờ đáy). Nước tiểu KHÔNG có đường (C<sub>Glucose</sub> = 0).";

    if (pGlu > 180 && pGlu < 300) {
      // Splay region between 180 and 300 mg/dL
      excr = Math.round((pGlu - 180) * 0.65);
      reab = Math.max(0, fl - excr);
      gluNote = `Đường huyết vượt <strong>Ngưỡng thận thực tế (180 mg/dL)</strong> nhưng chưa tới 300 mg/dL (vùng cong <strong>Splay</strong>): Một số nephron đã bão hòa nên <strong>Glucose bắt đầu xuất hiện trong nước tiểu (${excr} mg/phút)</strong>!`;
    } else if (pGlu >= 300) {
      reab = Math.min(fl, 375);
      excr = Math.max(0, fl - 375);
      gluNote = `Đường huyết ≥ 300 mg/dL: Toàn bộ nephron đều đạt <strong>Mức vận chuyển tối đa T<sub>mG</sub> = 375 mg/phút</strong>! Toàn bộ phần lọc vượt quá 375 mg/phút bị thải ra nước tiểu (<strong>${excr} mg/phút</strong>), kéo theo nước gây lợi niệu thẩm thấu (đa niệu).`;
    }

    document.getElementById("s9_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Áp suất lọc hữu hiệu (UP)</div><div class="metric-val" style="color:var(--primary)">+${up} mmHg</div><div class="metric-sub">${vMap.pgc} - (${vMap.pbs} + ${vMap.cop})</div></div>
        <div class="metric-card"><div class="metric-label">Độ lọc Cầu thận (GFR = C<sub>Inulin</sub>)</div><div class="metric-val" style="color:${gfr >= 110 ? "var(--success)" : "var(--danger)"}">${gfr} mL/phút</div><div class="metric-sub">Chuẩn: 125 mL/phút</div></div>
        <div class="metric-card"><div class="metric-label">Lưu lượng RBF & Phân suất lọc FF</div><div class="metric-val" style="font-size:15px;">RBF: ${vMap.rbf}</div><div class="metric-sub">FF = GFR/ERPF = ${ff}%</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">⚙️ Giải thích Huyết động Cầu thận:</div>
        <p>${vMap.desc}</p>
      </div>
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Mức lọc Glucose (FL = GFR × P<sub>G</sub>)</div><div class="metric-val">${fl} mg/phút</div></div>
        <div class="metric-card"><div class="metric-label">Tái hấp thu ở Ống lượn gần (T<sub>mG</sub> = 375)</div><div class="metric-val" style="color:var(--success)">${reab} mg/phút</div></div>
        <div class="metric-card" style="border:2px solid ${excr > 0 ? "var(--danger)" : "var(--border)"}"><div class="metric-label">Bài xuất Glucose ra Nước tiểu</div><div class="metric-val" style="color:${excr > 0 ? "var(--danger)" : "var(--success)"}">${excr} mg/phút</div></div>
      </div>
      <div class="callout ${excr > 0 ? "trap" : "formula"}">
        <div class="callout-title">🍬 Vận chuyển Glucose tại Ống lượn gần:</div>
        <p>${gluNote}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 10: NỘI TIẾT CỦA THẬN (RAAS, EPO, CALCITRIOL) & KIỀM TOAN / THẨM THẤU
  // ========================================================================
  sim_renal_endocrine(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Rối loạn Nội môi / Chức năng Nội tiết Thận:</label>
          <select id="s10_case" onchange="Simulators.upd_s10()">
            <option value="raas">1. Mất máu / Hạ huyết áp / Giảm NaCl đến vết đặc → Hoạt hóa hệ RAAS</option>
            <option value="siadh">2. Hội chứng tiết ADH không thích hợp (SIADH – Tăng tiết ADH quá mức)</option>
            <option value="di">3. Đái tháo nhạt (Thiếu ADH trung ương hoặc ống góp kháng ADH)</option>
            <option value="atn">4. Suy thận cấp thể Hoại tử ống thận cấp (Giai đoạn vô niệu)</option>
            <option value="ckd">5. Suy thận mạn giai đoạn cuối (GFR < 15 mL/phút – Thiếu EPO & Calcitriol)</option>
            <option value="met_acid">6. Nhiễm toan chuyển hóa mạn tính (Đáp ứng hệ đệm Ammoni NH4+ của thận)</option>
          </select>
        </div>
        <div class="control-group">
          <label>[Na⁺] huyết tương: <strong id="s10_na_lbl">140 mmol/L</strong></label>
          <input type="range" id="s10_na" min="115" max="165" step="1" value="140" oninput="Simulators.upd_s10()" />
        </div>
        <div class="control-group">
          <label>[HCO₃⁻] máu: <strong id="s10_hco3_lbl">24 mmol/L</strong></label>
          <input type="range" id="s10_hco3" min="8" max="40" step="1" value="24" oninput="Simulators.upd_s10()" />
        </div>
        <div class="control-group">
          <label>P<sub>aCO₂</sub> máu: <strong id="s10_paco2_lbl">40 mmHg</strong></label>
          <input type="range" id="s10_paco2" min="20" max="80" step="2" value="40" oninput="Simulators.upd_s10()" />
        </div>
      </div>
      <div id="s10_out"></div>
    `;
    this.upd_s10();
  },
  upd_s10() {
    const c = document.getElementById("s10_case").value;
    const na = parseInt(document.getElementById("s10_na").value);
    const hco3 = parseInt(document.getElementById("s10_hco3").value);
    const paco2 = parseInt(document.getElementById("s10_paco2").value);

    document.getElementById("s10_na_lbl").textContent = na + " mmol/L";
    document.getElementById("s10_hco3_lbl").textContent = hco3 + " mmol/L";
    document.getElementById("s10_paco2_lbl").textContent = paco2 + " mmHg";

    const posm = Math.round(2 * na + 100 / 18 + 14 / 2.8);
    const ph = (6.1 + Math.log10(hco3 / (0.03 * paco2))).toFixed(2);

    let abStatus = "Thăng bằng Kiềm - Toan bình thường (pH 7,35 – 7,45)";
    if (ph < 7.35) {
      abStatus = hco3 < 22 ? "TOAN CHUYỂN HÓA (pH giảm do giảm [HCO₃⁻]) → Thận bù trừ bằng tăng tiết H⁺ và tăng tạo NH₄⁺ từ Glutamine" : "TOAN HÔ HẤP (pH giảm do ứ CO₂) → Thận bù trừ bằng tăng tái hấp thu và tạo mới HCO₃⁻";
    } else if (ph > 7.45) {
      abStatus = hco3 > 26 ? "KIỀM CHUYỂN HÓA (pH tăng do tăng [HCO₃⁻])" : "KIỀM HÔ HẤP (pH tăng do tăng thông khí thải CO₂)";
    }

    const cases = {
      raas: "<strong>Hoạt hóa hệ RAAS:</strong> Tế bào cận cầu thận (ở tiểu ĐM vào) tiết <strong>Renin</strong> → cắt <strong>Angiotensinogen (do GAN sản xuất)</strong> thành Angiotensin I → qua <strong>Phổi gặp men ACE</strong> thành <strong>Angiotensin II</strong>. Angiotensin II gây: (1) Co tiểu ĐM toàn thân và co tiểu ĐM ra (giữ GFR); (2) Kích thích lớp cầu vỏ thượng thận tiết <strong>Aldosterone</strong> (tăng tái hấp thu Na⁺, bài tiết K⁺ ở tế bào chính ống góp); (3) Kích thích khát và tiết <strong>ADH</strong>.",
      siadh: "<strong>Hội chứng SIADH (Câu hỏi Đề thi SĐH 2024):</strong> Tăng tiết ADH quá mức làm gắn nhiều kênh <strong>Aquaporin-2</strong> ở ống góp → tái hấp thu quá nhiều nước tự do vào máu → gây <strong>GIẢM NỒNG ĐỘ Na⁺ MÁU (Hạ Natri máu do pha loãng)</strong>, giảm áp suất thẩm thấu máu trong khi nước tiểu rất cô đặc!",
      di: "<strong>Đái tháo nhạt (Thiếu ADH):</strong> Ống lượn xa và ống góp không thấm nước → bệnh nhân tiểu rất nhiều nước tiểu nhược trương (50 mOsm/L, 10–15 L/ngày) → mất nước tự do gây <strong>Tăng Na⁺ máu và tăng áp suất thẩm thấu huyết tương</strong>.",
      atn: "<strong>Suy thận cấp thể Hoại tử ống thận cấp (Câu hỏi Đề thi SĐH 2024):</strong> Tế bào ống thận hoại tử bong tróc làm tắc lòng ống và mất khả năng bài tiết K⁺ và H⁺ → gây biến chứng nguy hiểm nhất là <strong>TĂNG K⁺ MÁU (gây ngừng tim tâm trương) và Toan chuyển hóa</strong>.",
      ckd: "<strong>Suy thận mạn giai đoạn cuối:</strong> Mất nhu mô thận gây suy giảm 2 hormon nội tiết: (1) Giảm <strong>Erythropoietin (EPO – 80–90% do mô kẽ vỏ thận tiết)</strong> → <strong>Thiếu máu đẳng sắc đẳng bào</strong>; (2) Giảm enzyme <strong>1α-hydroxylase</strong> ở ống lượn gần → thiếu <strong>Calcitriol [1,25-(OH)₂D₃]</strong> → giảm hấp thu Ca²⁺ ở ruột, cường cận giáp thứ phát gây hủy xương.",
      met_acid: "<strong>Nhiễm toan chuyển hóa & Hệ đệm tại thận:</strong> Lưu ý bẫy đề thi SĐH: Hệ đệm Bicarbonate (HCO₃⁻/H₂CO₃) đệm được mọi acid cố định <strong>TRỪ chính Carbonic acid (H₂CO₃)</strong>! Để thải acid dư và tạo HCO₃⁻ mới, thận dùng <strong>Hệ đệm Ammoni (NH₃/NH₄⁺ từ Glutamine – chiếm 2/3, tăng lên tới 500 mmol/ngày)</strong> và Hệ đệm Phosphate (HPO₄²⁻ – chiếm 1/3)."
    }[c];

    document.getElementById("s10_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Áp suất Thẩm thấu (P<sub>osm</sub> ≈ 2[Na⁺]+10)</div><div class="metric-val" style="color:${posm < 275 || posm > 295 ? "var(--danger)" : "var(--primary)"}">${posm} mOsm/L</div><div class="metric-sub">Chuẩn: 275 – 290 mOsm/L (Na⁺ quyết định >90%)</div></div>
        <div class="metric-card"><div class="metric-label">pH Máu (Henderson-Hasselbalch)</div><div class="metric-val" style="color:${ph < 7.35 || ph > 7.45 ? "var(--danger)" : "var(--success)"}">${ph}</div><div class="metric-sub">pH = 6,1 + log(${hco3} / (0,03 × ${paco2}))</div></div>
        <div class="metric-card"><div class="metric-label">Chẩn đoán Kiềm - Toan</div><div style="font-size:13px;font-weight:700;color:var(--primary);margin-top:4px;">${abStatus}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🧬 Phân tích Cơ chế Nội tiết & Nội môi tại Thận:</div>
        <p>${cases}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 11: TẾ BÀO THÀNH BÀI TIẾT HCl, ĐIỀU HÒA GASTRIN & THOÁT THỨC ĂN
  // ========================================================================
  sim_stomach_hcl(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tác nhân / Thuốc tác động lên Dạ dày:</label>
          <select id="s11_agent" onchange="Simulators.upd_s11()">
            <option value="meal">1. Bữa ăn bình thường (Kích thích cả ACh, Gastrin và Histamine hiệp đồng)</option>
            <option value="cephalic">2. Giai đoạn Tâm linh (Nhìn/ngửi thức ăn → Dây X tiết Acetylcholine là chính)</option>
            <option value="vagotomy">3. Cắt dây thần kinh X (Vagotomy – Mất giai đoạn tâm linh)</option>
            <option value="antacid">4. Dùng thuốc Kháng acid / PPI giữ pH dạ dày luôn ở mức 7,0 (Câu hỏi Đề SĐH!)</option>
            <option value="h2block">5. Dùng thuốc ức chế thụ thể H2 (Cimetidine / Ranitidine)</option>
            <option value="ppi">6. Dùng thuốc ức chế Bơm Proton H+/K+-ATPase (Omeprazole)</option>
            <option value="fat_duod">7. Dưỡng trấp nhiều Mỡ (Lipid) hoặc quá Acid (pH < 3,5) xuống Tá tràng</option>
          </select>
        </div>
      </div>
      <div id="s11_out"></div>
    `;
    this.upd_s11();
  },
  upd_s11() {
    const a = document.getElementById("s11_agent").value;
    const map = {
      meal: {
        hcl: "100% (Tối đa ~150 mmol/L, pH 1–2)", gastrin: "Tăng sinh lý sau ăn", somat: "Tăng khi pH < 3 để điều hòa ngược", empty: "Bình thường (Nước > Đường > Đạm > Mỡ)",
        desc: "<strong>Hiệp đồng 3 chất kích thích Tế bào Thành:</strong> (1) <strong>Acetylcholine</strong> (dây X → thụ thể M₃ → tăng Ca²⁺); (2) <strong>Gastrin</strong> (tế bào G hang vị → thụ thể CCK<sub>B</sub> → tăng Ca²⁺ và kích thích tế bào ECL tiết Histamine); (3) <strong>Histamine</strong> (tế bào ECL → thụ thể H₂ → tăng cAMP) khuếch đại mạnh hoạt động bơm <strong>H⁺/K⁺-ATPase</strong>. Máu tĩnh mạch rời dạ dày nhận HCO₃⁻ nên kiềm hơn (thủy triều kiềm)."
      },
      cephalic: {
        hcl: "Tăng (~20% tổng dịch vị = 400 mL)", gastrin: "Tăng nhẹ qua GRP dây X", somat: "Thấp", empty: "Chưa có thức ăn",
        desc: "<strong>Giai đoạn Tâm linh (Giai đoạn đầu):</strong> Xung từ vỏ não/hạ đồi/hành não đi theo <strong>Dây thần kinh X giải phóng Acetylcholine</strong> là kích thích quan trọng nhất!"
      },
      vagotomy: {
        hcl: "Giảm mạnh (Mất hoàn toàn giai đoạn tâm linh)", gastrin: "Phản ứng chậm", somat: "Bình thường", empty: "Chậm thoát thức ăn đặc (do giảm co bóp hang vị & mất giãn tiếp nhận)",
        desc: "<strong>Cắt dây thần kinh X:</strong> Làm mất hoàn toàn bài tiết dịch vị ở giai đoạn tâm linh và giảm mạnh đáp ứng ở giai đoạn dạ dày."
      },
      antacid: {
        hcl: "Bị trung hòa / Ức chế (pH dịch vị = 7,0)", gastrin: "TĂNG RẤT CAO ↑↑ (Do mất ức chế ngược!)", somat: "GIẢM THẤP ↓↓ (Do không có H+ kích thích tế bào D)", empty: "Bình thường",
        desc: "<strong>Bẫy Đề thi SĐH YDS 2024:</strong> Bình thường khi pH < 3,0, ion H⁺ kích thích tế bào D tiết <strong>Somatostatin</strong> để ức chế tế bào G tiết Gastrin. Khi dùng thuốc giữ <strong>pH dạ dày = 7,0</strong>, tế bào D không tiết Somatostatin → tế bào G thoát khỏi sự ức chế ngược nên <strong>NỒNG ĐỘ GASTRIN MÁU TĂNG CAO!</strong>"
      },
      h2block: {
        hcl: "Giảm 70 – 80%", gastrin: "Tăng nhẹ thứ phát", somat: "Giảm", empty: "Bình thường",
        desc: "<strong>Phong bế thụ thể H₂ (Cimetidine/Ranitidine):</strong> Vì Histamine (qua cAMP) đóng vai trò khuếch đại hiệp đồng cho cả Gastrin và Acetylcholine, nên chỉ cần khóa thụ thể H₂ cũng làm giảm tới 70–80% lượng HCl bài tiết."
      },
      ppi: {
        hcl: "Giảm 90 – 98% (Khóa con đường chung cuối cùng)", gastrin: "Tăng cao thứ phát do pH tăng", somat: "Giảm", empty: "Bình thường",
        desc: "<strong>Ức chế Bơm Proton (H⁺/K⁺-ATPase) ở màng tiểu quản nội bào tế bào thành:</strong> Đây là bước chung cuối cùng bơm H⁺ ra lòng dạ dày nên ức chế tiết HCl mạnh nhất. Lưu ý: Tế bào thành còn tiết <strong>Yếu tố nội tại (IF)</strong> — chức năng sống còn duy nhất của dạ dày giúp hấp thu Vitamin B₁₂ ở hồi tràng."
      },
      fat_duod: {
        hcl: "Giảm (Ức chế giai đoạn ruột)", gastrin: "Giảm", somat: "Tăng", empty: "CHẬM LẠI RÕ RỆT ↓↓ (Ức chế thoát thức ăn!)",
        desc: "<strong>Khi dưỡng trấp xuống Tá tràng chứa nhiều Mỡ (Lipid), quá Acid (pH < 3,5–4), ưu trương hoặc làm căng tá tràng:</strong> Khởi phát <strong>Phản xạ ruột – dạ dày</strong> và kích thích tá tràng tiết <strong>CCK, Secretin, GIP</strong> làm giảm nhu động hang vị và co cơ thắt môn vị → <strong>LÀM CHẬM thoát thức ăn khỏi dạ dày</strong> để tá tràng kịp tiêu hóa!"
      }
    }[a];

    document.getElementById("s11_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Bài tiết HCl (Bơm H⁺/K⁺-ATPase)</div><div class="metric-val" style="font-size:15px;color:var(--primary)">${map.hcl}</div></div>
        <div class="metric-card"><div class="metric-label">Nồng độ Gastrin máu (Tế bào G)</div><div class="metric-val" style="font-size:15px;color:var(--danger)">${map.gastrin}</div></div>
        <div class="metric-card"><div class="metric-label">Somatostatin (Tế bào D)</div><div class="metric-val" style="font-size:15px;color:var(--accent)">${map.somat}</div></div>
        <div class="metric-card"><div class="metric-label">Tốc độ Thoát thức ăn Dạ dày</div><div class="metric-val" style="font-size:14.5px;">${map.empty}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🥣 Phân tích Cơ chế Sinh lý Tiêu hóa tại Dạ dày:</div>
        <p>${map.desc}</p>
        <p style="margin-top:4px;"><em>Nhắc nhớ 2 câu bẫy đề thi SĐH:</em> (1) Sóng co thắt lưu động lúc đói (<strong>MMC</strong> do Motilin điều hòa) <strong>bắt đầu từ THÂN DẠ DÀY</strong> lan xuống ruột non; (2) Giữa các bữa ăn dạ dày <strong>vẫn tiết vài mL dịch vị/giờ</strong> chủ yếu là chất nhầy.</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 12: TIÊU HÓA & HẤP THU TẠI RUỘT NON (SGLT1, GLUT5, MICELLE, TỤY-MẬT)
  // ========================================================================
  sim_small_intestine(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Chất Dinh dưỡng hoặc Dịch Tiêu hóa tại Ruột non để mô phỏng:</label>
          <select id="s12_item" onchange="Simulators.upd_s12()">
            <option value="glu_fru">1. Hấp thu Carbohydrate: So sánh Glucose/Galactose (SGLT1) vs Fructose (GLUT5)</option>
            <option value="lipid">2. Tiêu hóa & Hấp thu Lipid: Muối mật (Micelle) → Lưới nội bào → Chylomicron → Bạch huyết</option>
            <option value="prot">3. Tiêu hóa & Hấp thu Protein: Enterokinase hoạt hóa Trypsinogen → PepT1 / Đồng vận chuyển Na+</option>
            <option value="panc">4. Điều hòa Dịch Tụy: Secretin (Tế bào ống dẫn → NaHCO3) vs CCK (Nang tụy → Enzyme)</option>
            <option value="bile">5. Sinh lý Dịch Mật: Muối mật (từ Cholesterol) vs Sắc tố mật Bilirubin (từ Hemoglobin)</option>
            <option value="vit_water">6. Hấp thu Nước (Thẩm thấu thụ động), Sắt/Canxi (Tá tràng) & Vitamin B12/Vitamin C (Hồi tràng)</option>
          </select>
        </div>
      </div>
      <div id="s12_out"></div>
    `;
    this.upd_s12();
  },
  upd_s12() {
    const it = document.getElementById("s12_item").value;
    const map = {
      glu_fru: {
        lumen: "Amylase tụy + Men bờ bàn chải (Maltase, Sucrase, Lactase) → Monosaccharide",
        apical: "<strong>Glucose & Galactose:</strong> Đồng vận chuyển chủ động thứ phát với <strong>Na⁺ qua kênh SGLT1</strong>.<br/><strong>Fructose:</strong> Khuếch tán được hỗ trợ qua <strong>kênh GLUT5 (KHÔNG phụ thuộc Na⁺!)</strong>.",
        baso: "Cả 3 loại đường đều qua màng đáy bên bằng khuếch tán hỗ trợ qua <strong>kênh GLUT2</strong> → vào <strong>Máu tĩnh mạch cửa về Gan</strong>.",
        trap: "Bẫy đề thi: Fructose hấp thu ở bờ bàn chải bằng khuếch tán hỗ trợ (GLUT5) không cần Na⁺, nhưng Glucose bắt buộc phải có Na⁺ (SGLT1)!"
      },
      lipid: {
        lumen: "<strong>Muối mật</strong> nhũ tương hóa mỡ → <strong>Lipase tụy</strong> cắt TG thành <strong>Acid béo tự do + 2-Monoglyceride</strong> → Muối mật bao lấy tạo <strong>Hạt Micelle</strong> đưa đến sát bờ bàn chải.",
        apical: "Acid béo và 2-Monoglyceride tách khỏi Micelle <strong>khuếch tán đơn giản</strong> qua lớp lipid màng đỉnh vào tế bào (muối mật ở lại lòng ruột để đi xuống hồi tràng).",
        baso: "Tại lưới nội bào trơn: Tái tổng hợp thành <strong>Triglyceride</strong> → đóng gói cùng Cholesterol, Phospholipid và <strong>Apoprotein B48</strong> thành hạt <strong>CHYLOMICRON</strong> → Xuất bào vào <strong>MẠCH BẠCH HUYẾT (Ống dưỡng chấp)</strong>!",
        trap: "Khác với đường và đạm đi vào tĩnh mạch cửa, Lipid (Chylomicron) đi vào MẠCH BẠCH HUYẾT! Thiếu muối mật gây tiêu phân mỡ và thiếu các vitamin tan trong dầu (A, D, E, K)."
      },
      prot: {
        lumen: "<strong>Enterokinase</strong> ở bờ bàn chải cắt <strong>Trypsinogen → Trypsin</strong>; rồi Trypsin hoạt hóa Chymotrypsinogen, Procarboxypolypeptidase. (Lưu ý: <strong>Dịch tụy KHÔNG có Pepsin!</strong>).",
        apical: "Dipeptid, Tripeptid và Acid amin tự do được hấp thu bằng <strong>đồng vận chuyển chủ động thứ phát với H⁺ (PepT1) hoặc với Na⁺</strong>.",
        baso: "Peptidase nội bào cắt hết thành <strong>Acid amin đơn</strong> → khuếch tán hỗ trợ qua màng đáy vào <strong>Máu tĩnh mạch cửa về Gan</strong>.",
        trap: "Nếu các tiền men protease bị hoạt hóa sớm ngay trong mô tụy sẽ gây Viêm tụy cấp tự tiêu hủy!"
      },
      panc: {
        lumen: "Dịch tụy ngoại tiết: 1200 – 1500 mL/ngày, pH kiềm ~8,0.",
        apical: "<strong>1. Secretin</strong> (do tế bào S tá tràng tiết khi pH < 4,5) → kích thích <strong>Tế bào ống dẫn</strong> tiết thật nhiều <strong>NaHCO₃</strong> trung hòa acid.<br/><strong>2. CCK</strong> (do tế bào I tiết khi có mỡ/đạm) + <strong>ACh (dây X)</strong> → kích thích <strong>Tế bào nang tụy</strong> tiết các <strong>Enzyme tiêu hóa</strong>.",
        baso: "Ngoài ra <strong>Secretin và Glucagon</strong> còn có tác dụng <strong>ỨC CHẾ nhu động ruột non</strong> (trong khi Gastrin, CCK, Motilin, Insulin làm tăng nhu động ruột non).",
        trap: "Nhớ phân công: Secretin → Ống dẫn → NaHCO₃; CCK → Nang tụy → Enzyme (và CCK gây co túi mật + giãn cơ vòng Oddi)."
      },
      bile: {
        lumen: "Dịch mật: 600 – 1000 mL/ngày, dự trữ ở túi mật, <strong>KHÔNG chứa enzyme tiêu hóa</strong>.",
        apical: "<strong>1. Muối mật:</strong> Tổng hợp tại tế bào gan từ tiền chất <strong>CHOLESTEROL</strong> (acid mật nguyên phát: cholic, chenodeoxycholic; thứ phát: deoxycholic, lithocholic).<br/><strong>2. Sắc tố mật (Bilirubin):</strong> Tạo từ thoái giáng nhân <strong>Heme của Hemoglobin</strong>.",
        baso: "<strong>Tuần hoàn ruột – gan:</strong> <strong>94% muối mật được tái hấp thu chủ động ở HỒI TRÀNG</strong> theo tĩnh mạch cửa về gan tái sử dụng.",
        trap: "Hai câu bẫy đề thi SĐH 2024: (1) Muối mật tạo từ Cholesterol chứ KHÔNG phải từ Hemoglobin; (2) Acid uric KHÔNG phải là acid mật; (3) Khi tắc mật, ứ đọng Bilirubin trong máu là nguyên nhân gây vàng da!"
      },
      vit_water: {
        lumen: "Mỗi ngày có 9 Lít dịch vào ruột (2L ăn uống + 7L dịch tiết); ruột non hấp thu 7–7,5L, đại tràng 1,4–1,9L, chỉ thải 100 mL qua phân.",
        apical: "<strong>Nước:</strong> Hấp thu hoàn toàn <strong>THỤ ĐỘNG theo bậc thang thẩm thấu</strong> đi theo sự hấp thu của Na⁺, Cl⁻, Glucose, Acid amin.<br/><strong>Sắt (Fe²⁺) và Canxi (Ca²⁺):</strong> Hấp thu chủ yếu ở <strong>Tá tràng và đầu Hỗng tràng</strong>.",
        baso: "<strong>Tại HỒI TRÀNG:</strong> Hấp thu đặc hiệu <strong>Vitamin B₁₂ (+ Yếu tố nội tại IF)</strong>, <strong>Muối mật (94%)</strong> và <strong>Vitamin C (đồng vận chuyển với Na⁺)</strong>!",
        trap: "Diện tích niêm mạc ruột non đạt ~250 m² (tăng 600 lần nhờ van ngang ×3, nhung mao ×10, vi nhung mao bờ bàn chải ×20)."
      }
    }[it];

    document.getElementById("s12_out").innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,250px),1fr));gap:12px;">
        <div class="card" style="margin:0;border-top:4px solid var(--primary);">
          <div style="font-weight:700;color:var(--primary);margin-bottom:6px;">1. Tại Lòng Ruột non (Lumen)</div>
          <div style="font-size:13.8px;">${map.lumen}</div>
        </div>
        <div class="card" style="margin:0;border-top:4px solid var(--accent);">
          <div style="font-weight:700;color:var(--accent);margin-bottom:6px;">2. Qua Màng Đỉnh (Bờ bàn chải)</div>
          <div style="font-size:13.8px;">${map.apical}</div>
        </div>
        <div class="card" style="margin:0;border-top:4px solid var(--purple);">
          <div style="font-weight:700;color:var(--purple);margin-bottom:6px;">3. Qua Màng Đáy bên & Đường về</div>
          <div style="font-size:13.8px;">${map.baso}</div>
        </div>
      </div>
      <div class="callout trap" style="margin-top:14px;">
        <div class="callout-title">⚠️ Điểm Chốt Chặn Bẫy Đề Thi SĐH YDS:</div>
        <p>${map.trap}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 13: CƠ CHẾ THỤ THỂ HORMON & TRỤC HẠ ĐỒI - TUYẾN YÊN
  // ========================================================================
  sim_endocrine_axis(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Nhóm Hormon hoặc Tình huống Trục Hạ đồi - Tuyến yên:</label>
          <select id="s13_hor" onchange="Simulators.upd_s13()">
            <option value="camp">1. Hormon gắn Thụ thể màng GPCR → Hoạt hóa Adenyl cyclase – cAMP (TSH, ACTH, LH, FSH, ADH-V2, Glucagon, β1/β2)</option>
            <option value="ip3">2. Hormon gắn Thụ thể màng GPCR → Hoạt hóa Phospholipase C – IP3 / DAG / Ca2+ (TRH, GnRH, Oxytocin, ADH-V1, Ang II, α1)</option>
            <option value="tyr">3. Hormon gắn Thụ thể màng Enzyme Tyrosine Kinase / JAK-STAT (Insulin, IGF-1, GH, Prolactin, EPO)</option>
            <option value="steroid">4. Hormon Steroid tan trong Lipid (Cortisol, Aldosterone, Estrogen, Testosterone, Calcitriol – Tổng hợp từ Cholesterol)</option>
            <option value="thyroid">5. Hormon Tuyến giáp (T3, T4 – Dẫn xuất Tyrosine nhưng TAN TRONG LIPID, gắn thụ thể trong NHÂN)</option>
            <option value="stalk">6. Đứt cuống tuyến yên (Cắt đứt mạch cửa Hạ đồi - Yên: Vì sao Prolactin lại TĂNG?)</option>
            <option value="post_pit">7. Thùy sau Tuyến yên (ADH & Oxytocin: Tổng hợp ở Hạ đồi, dự trữ ở Yên sau)</option>
          </select>
        </div>
      </div>
      <div id="s13_out"></div>
    `;
    this.upd_s13();
  },
  upd_s13() {
    const h = document.getElementById("s13_hor").value;
    const map = {
      camp: {
        sol: "Tan trong nước (Peptid / Catecholamine) – Lưu hành tự do, t1/2 ngắn",
        rec: "<strong>Thụ thể màng tế bào</strong> liên kết Protein G<sub>s</sub> (GPCR)",
        second: "Hoạt hóa <strong>Adenyl cyclase</strong> chuyển ATP → <strong>cAMP</strong> → hoạt hóa <strong>Protein Kinase A (PKA)</strong> phosphoryl hóa protein đích (tác dụng nhanh giây–phút).",
        ex: "<strong>TSH, ACTH, FSH, LH, CRH, GHRH, ADH (thụ thể V₂ ở ống góp), PTH, Calcitonin, Glucagon, Catecholamine (thụ thể β₁, β₂), Secretin</strong>."
      },
      ip3: {
        sol: "Tan trong nước (Peptid / Catecholamine) – Lưu hành tự do",
        rec: "<strong>Thụ thể màng tế bào</strong> liên kết Protein G<sub>q</sub> (GPCR)",
        second: "Hoạt hóa <strong>Phospholipase C (PLC)</strong> cắt PIP₂ màng thành <strong>IP₃</strong> (mở kênh giải phóng <strong>Ca²⁺</strong> từ lưới nội bào gắn Calmodulin) và <strong>DAG</strong> (hoạt hóa <strong>Protein Kinase C - PKC</strong>).",
        ex: "<strong>TRH, GnRH, Oxytocin, ADH (thụ thể V₁ co mạch), Angiotensin II, Catecholamine (thụ thể α₁), Gastrin, CCK, Acetylcholine (M₃)</strong>."
      },
      tyr: {
        sol: "Tan trong nước (Peptid / Protein)",
        rec: "<strong>Thụ thể màng liên kết Enzyme</strong> (1 đoạn xuyên màng)",
        second: "• <strong>Insulin, IGF-1:</strong> Thụ thể có hoạt tính <strong>Tyrosine kinase nội tại</strong> (2α2β) → tự phosphoryl hóa và phosphoryl hóa <strong>IRS-1</strong> → PI3K/Akt.<br/>• <strong>GH, Prolactin, EPO:</strong> Thụ thể gắn kết với đường truyền <strong>JAK2 – STAT</strong>.",
        ex: "<strong>Insulin, IGF-1 (Somatomedin C), GH (Hormon tăng trưởng), Prolactin, Erythropoietin (EPO)</strong>."
      },
      steroid: {
        sol: "<strong>TAN TRONG LIPID</strong> – Tổng hợp từ tiền chất <strong>CHOLESTEROL</strong> (lấy từ LDL), không dự trữ trong túi tiết, trong máu gắn protein vận chuyển > 90%, t1/2 dài.",
        rec: "Đi xuyên qua màng gắn vào <strong>THỤ THỂ NỘI BÀO</strong> (trong tế bào chất hoặc trong nhân).",
        second: "Phức hợp <em>Hormon – Thụ thể</em> gắn lên vùng HRE của <strong>DNA</strong> → kích thích hoặc ức chế <strong>phiên mã gen tạo mRNA và tổng hợp Protein mới</strong> (tác dụng chậm sau nhiều giờ nhưng kéo dài).",
        ex: "Vỏ thượng thận (<strong>Aldosterone, Cortisol, Androgen</strong>), Tuyến sinh dục (<strong>Estrogen, Progesterone, Testosterone</strong>) và <strong>Calcitriol [1,25-(OH)₂D₃]</strong>."
      },
      thyroid: {
        sol: "<strong>TAN TRONG LIPID</strong> (Tuy là dẫn xuất của acid amin <strong>Tyrosine</strong> nhưng tính chất giống steroid: gắn TBG > 99%, t1/2 dài 6–7 ngày với T₄).",
        rec: "Đi xuyên qua màng gắn trực tiếp vào <strong>THỤ THỂ TRONG NHÂN TẾ BÀO (TR gắn trên nhiễm sắc chất)</strong>.",
        second: "Hoạt hóa phiên mã hàng trăm gen tổng hợp enzyme chuyển hóa, ty thể và bơm Na⁺/K⁺-ATPase.",
        ex: "<strong>T₃ (Triiodothyronine – hoạt tính chính) và T₄ (Thyroxine)</strong>. (Khác hẳn với Catecholamine tủy thượng thận cũng từ Tyrosine nhưng tan trong nước và gắn thụ thể màng!)."
      },
      stalk: {
        sol: "Tổn thương hệ mạch cửa dài Hạ đồi – Tuyến yên trước",
        rec: "Các hormon giải phóng và ức chế từ vùng hạ đồi không xuống được thùy trước tuyến yên.",
        second: "• <strong>GH, TSH, ACTH, FSH, LH đều GIẢM NẶNG</strong> (vì mất tín hiệu kích thích GHRH, TRH, CRH, GnRH).<br/>• <strong>Riêng PROLACTIN lại TĂNG CAO!</strong> Vì bình thường Prolactin chịu sự <strong>ức chế thường trực của PIH (chính là Dopamine)</strong> từ vùng hạ đồi; khi đứt cuống yên, tế bào tiết Prolactin thoát khỏi sự ức chế của Dopamine!",
        ex: "Lưu ý thêm: Tăng GH trước dậy thì gây <strong>Bệnh khổng lồ</strong>; Tăng GH sau dậy thì gây <strong>Bệnh to đầu chi (Acromegaly)</strong>; GH làm dài xương thông qua <strong>Somatomedin C (IGF-1)</strong> từ gan."
      },
      post_pit: {
        sol: "Hormon Peptid (9 acid amin) – Thùy sau tuyến yên (Yên thần kinh)",
        rec: "Thùy sau tuyến yên <strong>KHÔNG tự tổng hợp hormon!</strong>",
        second: "Được tổng hợp bởi thân neuron tại <strong>Nhân trên thị (chủ yếu tạo ADH)</strong> và <strong>Nhân cạnh não thất (chủ yếu tạo Oxytocin)</strong> của <strong>VÙNG HẠ ĐỒI</strong>, rồi vận chuyển dọc sợi trục xuống dự trữ ở thùy sau tuyến yên.",
        ex: "• <strong>Prolactin (yên trước)</strong> giúp <strong>TẠO SỮA</strong>; còn <strong>Oxytocin (yên sau)</strong> làm co tế bào cơ biểu mô quanh nang vú giúp <strong>PHÓNG SỮA</strong> và co cơ tử cung lúc sinh!<br/>• <em>Tuyến nội tiết KHÔNG thuộc trục Hạ đồi - Yên:</em> <strong>Tuyến tụy nội tiết (Insulin, Glucagon) và Tuyến cận giáp (PTH)</strong>."
      }
    }[h];

    document.getElementById("s13_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Tính tan & Vận chuyển</div><div style="font-size:13.5px;font-weight:600;margin-top:4px;">${map.sol}</div></div>
        <div class="metric-card"><div class="metric-label">Vị trí Thụ thể tại Mô đích</div><div style="font-size:13.5px;font-weight:600;color:var(--primary);margin-top:4px;">${map.rec}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">⚡ Cơ chế Truyền tín hiệu Phân tử & Ý nghĩa Sinh lý:</div>
        <p>${map.second}</p>
        <p style="margin-top:6px;"><strong>Các hormon đại diện cần thuộc lòng:</strong> ${map.ex}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 14: SINH LÝ TUYẾN GIÁP & PHÒNG XÉT NGHIỆM TSH - fT4 - fT3
  // ========================================================================
  sim_thyroid_lab(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Bệnh cảnh Lâm sàng hoặc Thí nghiệm Dược lý Tuyến giáp:</label>
          <select id="s14_case" onchange="Simulators.upd_s14()">
            <option value="graves">1. Bệnh Graves / Basedow (Cường giáp nguyên phát tại tuyến giáp do kháng thể TSI)</option>
            <option value="pit_hyper">2. Cường giáp thứ phát tại Tuyến yên (U tuyến yên tăng tiết TSH)</option>
            <option value="sub_hyper">3. Cường giáp dưới lâm sàng (fT4 bình thường, TSH giảm nhẹ)</option>
            <option value="hashimoto">4. Suy giáp nguyên phát tại Tuyến giáp (Viêm giáp tự miễn Hashimoto / Thiếu Iod)</option>
            <option value="hypo_hypothal">5. Suy giáp tại Vùng Hạ đồi (fT4 giảm, TSH thấp nhưng TĂNG VỌT sau khi tiêm TRH!)</option>
            <option value="hypo_pit">6. Suy giáp tại Tuyến yên (fT4 giảm, TSH thấp và KHÔNG tăng sau khi tiêm TRH)</option>
            <option value="ptu">7. Thí nghiệm uống thuốc PTU (Propylthiouracil) kéo dài (Câu hỏi Đề thi SĐH 2024!)</option>
            <option value="wolff">8. Đưa liều lượng Iod quá cao vào cơ thể (Hiệu ứng Wolff - Chaikoff)</option>
          </select>
        </div>
      </div>
      <div id="s14_out"></div>
    `;
    this.upd_s14();
  },
  upd_s14() {
    const c = document.getElementById("s14_case").value;
    const map = {
      graves: {
        ft4: "TĂNG CAO ↑↑", tsh: "GIẢM RẤT THẤP ↓↓ (< 0,01)", size: "Bướu giáp to lan tỏa, nghe âm thổi",
        trhTest: "TSH vẫn bị ức chế không tăng",
        desc: "<strong>Cường giáp nguyên phát tại tuyến giáp (Bệnh Graves / Basedow):</strong> Tự kháng thể <strong>TSI (TRAb)</strong> gắn và kích thích liên tục thụ thể TSH trên nang giáp → tăng tổng hợp và tiết T₄ (90%), T₃ (10%). Nồng độ fT₄, fT₃ cao sẽ điều hòa ngược âm tính ức chế tuyến yên làm <strong>TSH giảm rất thấp</strong>.<br/>• <strong>Triệu chứng:</strong> Nhịp tim nhanh (do T₃ làm tăng biểu hiện thụ thể <strong>β₁-adrenergic</strong> trên cơ tim), <strong>sụt cân nhanh dù ăn nhiều, sợ nóng, tiêu chảy, khó ngủ, run tay nhỏ nhanh, GIẢM Cholesterol máu</strong>. (<em>Bẫy đề thi SĐH:</em> 'Tăng cân' trong cường giáp là SAI!)."
      },
      pit_hyper: {
        ft4: "TĂNG CAO ↑↑", tsh: "TĂNG CAO ↑↑", size: "Tuyến giáp to do TSH kích thích",
        trhTest: "Không đáp ứng",
        desc: "<strong>Cường giáp tại Tuyến yên (Bậc 2):</strong> Khối u thùy trước tuyến yên tự động tăng tiết quá nhiều <strong>TSH</strong> kích thích tuyến giáp tăng tiết fT₄, fT₃ (cả TSH và fT₄ cùng tăng!)."
      },
      sub_hyper: {
        ft4: "BÌNH THƯỜNG", tsh: "GIẢM THẤP ↓", size: "Bình thường hoặc bướu nhân nhẹ",
        trhTest: "Đáp ứng kém",
        desc: "<strong>Cường giáp dưới lâm sàng (Bảng 28.2 Sách YDS tr.381):</strong> Nồng độ fT₄ và fT₃ vẫn nằm trong giới hạn bình thường nhưng tuyến yên rất nhạy đã bị ức chế làm <strong>TSH giảm thấp</strong>."
      },
      hashimoto: {
        ft4: "GIẢM THẤP ↓↓", tsh: "TĂNG RẤT CAO ↑↑", size: "Bướu giáp hoặc teo giáp về sau",
        trhTest: "TSH tăng quá mức",
        desc: "<strong>Suy giáp nguyên phát tại tuyến giáp (Viêm giáp Hashimoto / sau cắt giáp):</strong> Tuyến giáp suy giảm sản xuất T₃, T₄ → mất ức chế ngược làm tuyến yên tăng tiết mạnh <strong>TSH</strong>.<br/>• <strong>Triệu chứng:</strong> Nhịp tim chậm, <strong>sợ lạnh, tăng cân, táo bón, ngủ gà, khàn tiếng, phù niêm (ấn không lõm), TĂNG Cholesterol máu</strong> (do giảm thụ thể LDL ở gan). Nếu xảy ra từ bào thai/sơ sinh gây <strong>Bệnh đần độn (Cretinism: lùn mất cân đối + thiểu năng trí tuệ)</strong>."
      },
      hypo_hypothal: {
        ft4: "GIẢM THẤP ↓↓", tsh: "THẤP / BÌNH THƯỜNG THẤP ↓", size: "Tuyến giáp nhỏ",
        trhTest: "Tiêm TRH → TSH TĂNG RÕ RỆT ↑↑!",
        desc: "<strong>Suy giáp tại Vùng Hạ đồi (Bảng 28.2 Sách YDS tr.381):</strong> Vùng hạ đồi tổn thương không tiết được TRH nên TSH thấp và fT₄ thấp. Khi <strong>tiêm TRH ngoại sinh vào, vì tế bào thùy trước tuyến yên vẫn còn nguyên vẹn nên tuyến yên đáp ứng bằng cách tiết TSH TĂNG LÊN RÕ RỆT!</strong>"
      },
      hypo_pit: {
        ft4: "GIẢM THẤP ↓↓", tsh: "GIẢM THẤP ↓↓", size: "Tuyến giáp teo nhỏ",
        trhTest: "Tiêm TRH → TSH KHÔNG TĂNG!",
        desc: "<strong>Suy giáp tại Tuyến yên (ví dụ Hội chứng Sheehan):</strong> Tế bào tiết TSH của thùy trước tuyến yên đã bị phá hủy nên dù có tiêm TRH ngoại sinh thì TSH cũng không tăng được."
      },
      ptu: {
        ft4: "GIẢM THẤP ↓↓", tsh: "TĂNG CAO ↑↑ (Do mất feedback âm)", size: "TĂNG KÍCH THƯỚC TUYẾN GIÁP ↑↑ (Phì đại / Bướu giáp!)",
        trhTest: "Tăng mạnh",
        desc: "<strong>Thí nghiệm dùng thuốc PTU (Propylthiouracil – Câu hỏi Đề thi SĐH 2024):</strong> PTU vừa ức chế enzyme <strong>Thyroperoxidase (TPO)</strong> tại lòng nang giáp (ngăn oxy hóa I⁻, iod hóa tyrosine và ghép đôi) vừa ức chế enzyme <strong>5'-deiodinase</strong> ở ngoại biên (ngăn chuyển T₄ → T₃). Khi dùng PTU cho động vật bình thường: <strong>T₄ huyết tương GIẢM → mất ức chế ngược làm tuyến yên TĂNG tiết TSH → TSH kích thích nang giáp phì đại làm TĂNG KÍCH THƯỚC TUYẾN GIÁP!</strong>"
      },
      wolff: {
        ft4: "GIẢM TẠM THỜI ↓", tsh: "Tăng nhẹ bù trừ", size: "Giảm mạch máu, mật độ chắc lại",
        trhTest: "Bình thường",
        desc: "<strong>Hiệu ứng Wolff – Chaikoff:</strong> Khi đưa một lượng Iod quá cao vào cơ thể, nồng độ I⁻ nội bào cao sẽ <strong>ức chế bơm NIS (Na⁺/I⁻ symporter ở màng đáy) và ức chế enzyme TPO</strong> → làm giảm tổng hợp hormon giáp (suy giáp tạm thời). Ngược lại, dùng iod trên bệnh nhân có sẵn bướu giáp nhân tự chủ gây cường giáp gọi là <strong>Hiệu ứng Jod – Basedow</strong>."
      }
    }[c];

    document.getElementById("s14_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Nồng độ fT₄ / fT₃ máu</div><div class="metric-val" style="font-size:15.5px;color:var(--primary)">${map.ft4}</div></div>
        <div class="metric-card"><div class="metric-label">Nồng độ TSH (Nhạy nhất!)</div><div class="metric-val" style="font-size:15.5px;color:var(--danger)">${map.tsh}</div></div>
        <div class="metric-card"><div class="metric-label">Nghiệm pháp tiêm TRH</div><div class="metric-val" style="font-size:14px;color:var(--accent)">${map.trhTest}</div></div>
        <div class="metric-card"><div class="metric-label">Kích thước Tuyến giáp</div><div class="metric-val" style="font-size:14px;">${map.size}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🦋 Biện luận Sinh lý & Sinh lý bệnh Tuyến giáp Chuẩn YDS:</div>
        <p>${map.desc}</p>
        <p style="margin-top:4px;"><em>Nhắc nhớ:</em> Tuyến giáp tiết <strong>90% là T₄</strong> (gắn chặt với <strong>TBG</strong> làm <strong>dạng dự trữ lưu hành</strong> trong máu) và <strong>10% là T₃</strong> (nhờ <strong>5'-deiodinase</strong> ở mô đích chuyển T₄ → T₃; <strong>T₃ là dạng có hoạt tính sinh học chính</strong> tại thụ thể nhân tế bào!).</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 15: TUYẾN TỤY NỘI TIẾT (INSULIN - GLUCAGON - GLUT4 - ĐTĐ TÍP 1/2)
  // ========================================================================
  sim_pancreas_glucose(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Trạng thái Sinh lý hoặc Bệnh lý Tuyến tụy Nội tiết:</label>
          <select id="s15_state" onchange="Simulators.upd_s15()">
            <option value="fed">1. Sau bữa ăn giàu Carbohydrate (Đường huyết tăng > 120 mg/dL → Tiết Insulin)</option>
            <option value="fast">2. Lúc đói / Hạ đường huyết (< 70 mg/dL → Tiết Glucagon huy động đường từ Gan)</option>
            <option value="prot_meal">3. Bữa ăn chỉ thuần túy giàu Protein (Nhiều acid amin, ít đường → Tiết cả Insulin & Glucagon)</option>
            <option value="exercise">4. Đang vận động thể lực / Co cơ xương (Đưa GLUT4 lên màng cơ KHÔNG cần Insulin!)</option>
            <option value="dm1">5. Đái tháo đường Típ 1 (Phá hủy tự miễn tế bào Beta → Thiếu Insulin tuyệt đối & Nhiễm toan Ceton)</option>
            <option value="dm2">6. Đái tháo đường Típ 2 (Chiếm 90% – Đề kháng Insulin tại Cơ, Gan, Mỡ)</option>
          </select>
        </div>
      </div>
      <div id="s15_out"></div>
    `;
    this.upd_s15();
  },
  upd_s15() {
    const st = document.getElementById("s15_state").value;
    const map = {
      fed: {
        ins: "TĂNG MẠNH ↑↑ (Cùng Peptid C tỉ lệ 1:1)", glu: "Ức chế (Giảm ↓)", glut4: "Đưa GLUT4 ra màng CƠ XƯƠNG & MÔ MỠ!", liver: "Hoạt hóa Glucokinase & Glycogen synthase (Dự trữ 60% đường)",
        desc: "<strong>Cơ chế tiết Insulin tại Tế bào Beta (65% đảo tụy):</strong> Glucose qua <strong>GLUT2</strong> vào tế bào Beta → đường phân tăng tỉ số <strong>ATP/ADP</strong> → <strong>ĐÓNG kênh K⁺ nhạy cảm ATP (Kir6.2)</strong> → Khử cực màng → Mở kênh <strong>Ca²⁺ phụ thuộc điện thế</strong> → Xuất bào <strong>Insulin + Peptid C (tỉ lệ 1:1)</strong>. Insulin gắn thụ thể <strong>Tyrosine kinase</strong> giúp Cơ xương & Mô mỡ đưa <strong>GLUT4</strong> lên màng thu nhận glucose, <strong>ức chế enzyme HSL</strong> ở mô mỡ và đẩy <strong>K⁺ vào tế bào</strong>. (Lưu ý: <strong>Tế bào Não dùng GLUT1/GLUT3 hoàn toàn KHÔNG phụ thuộc Insulin!</strong>)."
      },
      fast: {
        ins: "Giảm thấp ↓", glu: "TĂNG MẠNH ↑↑ (Khi đường huyết < 70 mg/dL)", glut4: "Thu hồi GLUT4 vào túi nội bào ở cơ/mỡ (để dành đường cho Não!)", liver: "Phân giải Glycogen & Tân tạo đường → Qua Glucose-6-Pase ra máu!",
        desc: "<strong>Vai trò của Glucagon (Tế bào Alpha – 30%) & Bộ phận đệm đường huyết của Gan:</strong> Hạ đường huyết là kích thích mạnh nhất làm tế bào Alpha tiết <strong>Glucagon</strong> (qua GPCR → tăng <strong>cAMP</strong> tại gan). Chỉ có <strong>GAN</strong> mới có enzyme <strong>Glucose-6-phosphatase</strong> để biến G-6-P thành Glucose tự do phóng thích vào máu nuôi não (cơ xương KHÔNG có G-6-Pase nên không nhả glucose tự do vào máu được!)."
      },
      prot_meal: {
        ins: "TĂNG ↑ (Đưa acid amin vào cơ tổng hợp đạm)", glu: "CŨNG TĂNG ↑ (Tân tạo đường giữ đường huyết không bị tụt!)", glut4: "Hoạt động vừa phải", liver: "Tăng tân tạo glucose từ acid amin",
        desc: "<strong>Sự phối hợp tuyệt vời trong bữa ăn thuần Đạm (Protein):</strong> Acid amin (Arginine, Leucine, Alanine) kích thích tiết <strong>CẢ Insulin LẪN Glucagon</strong>: Insulin giúp đưa acid amin vào mô tổng hợp protein, đồng thời Glucagon kích thích gan tân tạo glucose để ngăn không cho Insulin gây hạ đường huyết!"
      },
      exercise: {
        ins: "Giảm tự nhiên khi vận động", glu: "Tăng để cấp năng lượng", glut4: "TỰ ĐỘNG ĐƯA GLUT4 LÊN MÀNG CƠ XƯƠNG KHÔNG CẦN INSULIN!", liver: "Tăng cung cấp glucose cho cơ đang co",
        desc: "<strong>Đặc điểm vàng của Cơ xương khi Vận động:</strong> Bản thân sự co cơ (qua AMPK) trực tiếp huy động các túi <strong>GLUT4</strong> gắn lên màng tế bào cơ xương để lấy glucose mà <strong>KHÔNG CẦN có Insulin</strong>! Vì vậy tập thể dục giúp hạ đường huyết rất tốt cho bệnh nhân đái tháo đường."
      },
      dm1: {
        ins: "BẰNG 0 / RẤT THẤP ↓↓ (Peptid C cũng rất thấp!)", glu: "Tăng cao bất thường ↑", glut4: "Không đưa được GLUT4 lên màng cơ/mỡ", liver: "Tăng tân tạo đường + Tạo ồ ạt THỂ CETON (Gây Nhiễm toan ceton DKA!)",
        desc: "<strong>Đái tháo đường Típ 1 (10%):</strong> Phá hủy tự miễn tế bào Beta gây <strong>thiếu hụt Insulin tuyệt đối</strong>. Cơ và mỡ không lấy được glucose nên phải đốt cháy <strong>Acid béo</strong>; đặc biệt enzyme <strong>HSL (Hormone-sensitive lipase) ở mô mỡ thoát khỏi sự ức chế</strong> → ly giải mỡ ồ ạt giải phóng acid béo về gan tạo quá nhiều acetoacetate, β-hydroxybutyrate → gây <strong>NHIỄM TOAN CETON (DKA)</strong>!"
      },
      dm2: {
        ins: "Bình thường hoặc Tăng cao (giai đoạn đầu), giảm tương đối về sau", glu: "Tăng", glut4: "ĐỀ KHÁNG INSULIN (Giảm tín hiệu sau thụ thể Tyrosine kinase / IRS-1)", liver: "Gan đề kháng insulin nên tiếp tục sản xuất glucose vào máu",
        desc: "<strong>Đái tháo đường Típ 2 (90%):</strong> Cơ chế chính là <strong>ĐỀ KHÁNG INSULIN tại các mô đích (Cơ xương, Gan, Mô mỡ)</strong> kèm suy giảm tiết insulin tương đối. Do vẫn còn một phần insulin nội sinh ức chế HSL nên ít bị toan ceton mà thường gặp hôn mê tăng áp lực thẩm thấu."
      }
    }[st];

    document.getElementById("s15_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Bài tiết Insulin & Peptid C (Tế bào β)</div><div class="metric-val" style="font-size:14.5px;color:var(--primary)">${map.ins}</div></div>
        <div class="metric-card"><div class="metric-label">Bài tiết Glucagon (Tế bào α)</div><div class="metric-val" style="font-size:14.5px;color:var(--warning)">${map.glu}</div></div>
        <div class="metric-card"><div class="metric-label">Kênh GLUT4 (Cơ xương & Mô mỡ)</div><div class="metric-val" style="font-size:14px;color:var(--accent)">${map.glut4}</div></div>
        <div class="metric-card"><div class="metric-label">Đáp ứng tại Gan (GLUT2 & G-6-Pase)</div><div class="metric-val" style="font-size:13.5px;">${map.liver}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🏝️ Phân tích Cơ chế Nội tiết Đảo tụy Chuẩn Giáo trình YDS:</div>
        <p>${map.desc}</p>
        <p style="margin-top:4px;"><em>Nhắc nhớ 4 tế bào đảo tụy (Câu bẫy đề thi SĐH 2024):</em> <strong>Tế bào Beta (65%) → Insulin & Peptid C</strong>; <strong>Tế bào Alpha (30%) → Glucagon</strong>; <strong>Tế bào Delta (5%) → Somatostatin</strong>; <strong>Tế bào F (hay PP) → Pancreatic Polypeptide</strong> (Ghép 'Tế bào F – Gastrin' là SAI!).</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 16: SINH LÝ TỦY GAI (ĐỊNH KHU PHẢN XẠ GÂN, BÓ DẪN TRUYỀN & UMN/LMN)
  // ========================================================================
  sim_spinal_cord(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Phản xạ Tủy hoặc Tổn thương Đường Dẫn truyền Tủy gai:</label>
          <select id="s16_mode" onchange="Simulators.upd_s16()">
            <option value="patellar">1. Khám Phản xạ Gân xương bánh chè (L3–L4) & So sánh Động vật tủy vs Bình thường (Đề SĐH!)</option>
            <option value="biceps_achilles">2. Bảng Định khu các Phản xạ Gân (C5–C6, C7–C8, S1–S2), Phản xạ Da & Tự chủ (Bẫy phản xạ chớp mắt!)</option>
            <option value="goll">3. Đường Cảm giác Lên: Bó Thon (Goll) & Bó Chêm (Burdach) vs Bó Gai - Đồi thị Trước/Bên</option>
            <option value="motor_tracts">4. Đường Vận động Xuống: Bó Tháp (Vỏ-gai) vs Hệ Ngoại tháp (Bẫy Bó mái-gai trong Đề SĐH!)</option>
            <option value="brown">5. Hội chứng Đứt nửa bên Tủy gai (Hội chứng Brown - Séquard)</option>
            <option value="umn_lmn">6. Phân biệt Tổn thương Neuron Vận động Trên (UMN) vs Dưới (LMN) & Choáng tủy</option>
          </select>
        </div>
      </div>
      <div id="s16_out"></div>
    `;
    this.upd_s16();
  },
  upd_s16() {
    const m = document.getElementById("s16_mode").value;
    const map = {
      patellar: {
        receptor: "Thoi cơ (Muscle spindle) của cơ tứ đầu đùi → Sợi Ia (qua Rễ sau)",
        center: "Đoạn tủy thắt lưng <strong>L₃ – L₄</strong> (Cung phản xạ <strong>2 neuron, 1 synapse</strong> duy nhất!)",
        resp: "Co cơ tứ đầu đùi gây <strong>DUỖI CẲNG CHÂN</strong> (hất cẳng chân ra trước – <em>cẩn thận bẫy ghi 'gấp cẳng chân' là SAI!</em>)",
        detail: "<strong>So sánh đồ thị co cơ phản xạ gân (Câu hỏi Đề thi SĐH 2024):</strong><br/>• <strong>Ở Động vật tủy</strong> (cắt ngang dưới hành não, đã hết choáng tủy): Phản xạ gân có biên độ <strong>MẠNH nhưng chỉ có 1 LẦN CO (co pha)</strong>.<br/>• <strong>Ở Động vật bình thường</strong> (còn não bộ): Phản xạ gân có biên độ <strong>THẤP HƠN nhưng có 2 LẦN CO</strong> (lần co thứ 2 là co trương lực do trung tâm ở não giữa chi phối!)."
      },
      biceps_achilles: {
        receptor: "Thoi cơ (phản xạ gân: 2 neuron) | Thụ thể Golgi ở gân (sợi Ib, 3 neuron gây giãn cơ) | Thụ thể da (đa synapse)",
        center: "• Nhị đầu (Gấp cẳng tay): <strong>C₅–C₆</strong> | Tam đầu (Duỗi cẳng tay): <strong>C₇–C₈</strong><br/>• Gân bánh chè (Duỗi cẳng chân): <strong>L₃–L₄</strong> | Gân gót Achilles (Duỗi bàn chân): <strong>S₁–S₂</strong>",
        resp: "• Da bụng: <strong>T₇–T₁₂ (D₁₁–D₁₂)</strong> | Da bìu: <strong>L₁–L₂</strong> | Lòng bàn chân (Babinski): <strong>L₅–S₁</strong><br/>• Tiểu tiện (Bàng quang): <strong>S₃–S₅ (S₂–S₄)</strong> | Đại tiện: <strong>L–S₅</strong>",
        detail: "<strong>⚠️ Bẫy Đề thi SĐH 2024:</strong> <strong>Phản xạ chớp mắt (giác mạc: dây V – VII ở cầu não) và phản xạ ho, hắt hơi, nuốt (ở hành não) KHÔNG PHẢI là phản xạ tủy gai!</strong>"
      },
      goll: {
        receptor: "Cột trắng sau (Bó Goll & Burdach) vs Cột trắng bên/trước (Bó Gai - Đồi thị)",
        center: "<strong>Điểm khác biệt cốt lõi là VỊ TRÍ BẮT CHÉO sang bên đối diện!</strong>",
        resp: "• <strong>Bó Thon (Goll) & Bó Chêm (Burdach):</strong> Đi ở cột trắng sau <strong>CÙNG BÊN</strong> lên tới <strong>HÀNH NÃO mới bắt chéo</strong>.<br/>• <strong>Bó Gai - Đồi thị Bên (Đau, Nhiệt) & Trước (Xúc giác thô):</strong> Neuron II <strong>BẮT CHÉO NGAY TẠI TỦY GAI</strong>!",
        detail: "<strong>Chức năng:</strong> Bó Goll – Burdach dẫn truyền <strong>cảm giác sâu có ý thức</strong> (vị thế khớp, rung) và <strong>xúc giác tinh tế</strong> (phân biệt 2 điểm); tổn thương gây bệnh Tabès, mất thăng bằng khi nhắm mắt (Romberg +). Còn <strong>Bó Gai - Tiểu não thẳng (Flechsig) và chéo (Gowers)</strong> dẫn truyền <strong>cảm giác sâu KHÔNG có ý thức</strong> về tiểu não cùng bên để điều hòa trương lực cơ."
      },
      motor_tracts: {
        receptor: "Đường Tháp (Vận động tùy ý) vs Đường Ngoại tháp (Vận động không tùy ý, trương lực cơ)",
        center: "• <strong>Bó Tháp (Vỏ - Gai):</strong> Từ vỏ não vận động (80–90% bắt chéo ở hành não tạo bó tháp chéo; 10–20% đi thẳng rồi bắt chéo tại tủy) → chi phối <strong>nửa người ĐỐI BÊN</strong>.",
        resp: "• <strong>Bó Đỏ - Gai:</strong> Từ <strong>Nhân đỏ ở Cuống đại não (Não giữa)</strong>.<br/>• <strong>Bó Mái - Gai:</strong> Từ <strong>Củ não sinh tư (Lồi não trên của Não giữa)</strong>!<br/>• <strong>Bó Tiền đình - Gai</strong> & <strong>Trám - Gai</strong> (Hành não); <strong>Bó Lưới - Gai</strong> (Cầu & Hành não).",
        detail: "<strong>⚠️ Bẫy Đề thi SĐH 2024:</strong> Câu nói <em>'Bó mái - gai xuất phát từ tiểu não'</em> là <strong>SAI</strong>! Bó mái - gai (Tectospinal tract) xuất phát từ <strong>củ não sinh tư của não giữa</strong>. Tiểu não không có bó dẫn truyền trực tiếp xuống tủy gai!"
      },
      brown: {
        receptor: "Tổn thương đứt ngang một nửa bên (ví dụ bên PHẢI) của tủy gai (Hội chứng Brown - Séquard)",
        center: "Biểu hiện ở phần cơ thể phía dưới chỗ tổn thương:",
        resp: "• <strong>CÙNG BÊN tổn thương (Bên Phải):</strong> <strong>Liệt vận động</strong> (đứt bó tháp chéo) + <strong>Mất cảm giác sâu có ý thức & xúc giác tinh tế</strong> (đứt bó Goll - Burdach chưa bắt chéo).<br/>• <strong>ĐỐI BÊN tổn thương (Bên Trái):</strong> <strong>Mất cảm giác ĐAU và NHIỆT ĐỘ</strong> (vì bó gai - đồi thị bên từ chân trái đã bắt chéo ngay tại tủy sang bên phải!).",
        detail: "Đây là bài toán định khu kinh điển giúp kiểm tra cùng lúc quy luật bắt chéo của cả 3 bó: Bó tháp chéo, Bó Goll-Burdach và Bó gai-đồi thị bên!"
      },
      umn_lmn: {
        receptor: "So sánh Tổn thương Neuron vận động trên (UMN - Bó tháp) vs Neuron vận động dưới (LMN - Sừng trước tủy) & Choáng tủy",
        center: "• <strong>Đứt ngang tủy cổ cao C₁–C₂ (trên C₃–C₅):</strong> Liệt cơ hoành → <strong>Ngưng thở tử vong ngay lập tức!</strong><br/>• <strong>Choáng tủy (2–3 tuần đầu sau đứt tủy):</strong> Mất hoàn toàn mọi phản xạ, liệt mềm, mất trương lực cơ, tụt HA, bí tiểu.",
        resp: "• <strong>Tổn thương UMN (sau giai đoạn choáng):</strong> <strong>Liệt cứng (Tăng trương lực cơ), Tăng phản xạ gân xương, Dấu Babinski (+)</strong>.<br/>• <strong>Tổn thương LMN (Sừng trước / Rễ trước):</strong> <strong>Liệt mềm (Mất trương lực cơ), Mất phản xạ gân xương, Teo cơ nhanh, Babinski (–)</strong>.",
        detail: "Sau khi hết giai đoạn choáng tủy (2–3 tuần), các cung phản xạ tủy bên dưới chỗ đứt phục hồi và vì thoát khỏi sự ức chế thường trực của vỏ não/thân não nên trở nên <strong>tăng phản xạ và tăng trương lực cơ (liệt cứng)</strong>."
      }
    }[m];

    document.getElementById("s16_out").innerHTML = `
      <div class="metric-cards">
        <div class="metric-card"><div class="metric-label">Cấu trúc / Đường hướng tâm</div><div style="font-size:13.5px;font-weight:600;margin-top:4px;">${map.receptor}</div></div>
        <div class="metric-card"><div class="metric-label">Trung khu Định khu / Quy luật</div><div style="font-size:13.5px;font-weight:600;color:var(--primary);margin-top:4px;">${map.center}</div></div>
        <div class="metric-card"><div class="metric-label">Đáp ứng Vận động / Cảm giác</div><div style="font-size:13.5px;font-weight:600;color:var(--accent);margin-top:4px;">${map.resp}</div></div>
      </div>
      <div class="callout pearl">
        <div class="callout-title">🦴 Phân tích Chuyên sâu Sinh lý Tủy gai Chuẩn YDS:</div>
        <p>${map.detail}</p>
      </div>
    `;
  },

  // ========================================================================
  // BÀI 17: BẢNG ĐIỀU KHIỂN HỆ THẦN KINH TỰ CHỦ & THỬ NGHIỆM DƯỢC LÝ
  // ========================================================================
  sim_ans_control(el) {
    el.innerHTML = `
      <div class="sim-controls">
        <div class="control-group">
          <label>Chọn Tác nhân Kích thích / Thuốc / Thí nghiệm trên Hệ Thần kinh Tự chủ:</label>
          <select id="s17_drug" onchange="Simulators.upd_s17()">
            <option value="para">1. Kích thích Đối giao cảm (Dây III, VII, IX, X, S2-S4 → Tiết Acetylcholine gắn Muscarinic)</option>
            <option value="symp">2. Kích thích Giao cảm Toàn thể (Sừng bên T1-L3 & Tủy thượng thận tiết 80% Adrenaline, 20% Noradrenaline)</option>
            <option value="ne">3. Tiêm Norepinephrine (Gốc -NH2: Ưu thế mạnh trên thụ thể Alpha α1 hơn Beta)</option>
            <option value="propranolol">4. Dùng thuốc Propranolol (Chẹn Beta không chọn lọc β1 & β2 ở người Tăng HA kèm Hen phế quản – Đề SĐH!)</option>
            <option value="salbutamol">5. Dùng thuốc Salbutamol (Kích thích chọn lọc thụ thể β2 trên cơ trơn tiểu phế quản)</option>
            <option value="atropin">6. Dùng thuốc Atropin (Đối kháng cạnh tranh với ACh tại thụ thể Muscarinic)</option>
            <option value="cut_symp">7. Cắt bỏ / Hủy toàn bộ Giao cảm đến hệ Tim mạch (Mất trương lực giao cảm vận mạch – Đề SĐH!)</option>
            <option value="stellate_1w">8. Cắt bỏ Hạch sao sau 1 tuần rồi tiêm lại Norepinephrine (Hiện tượng Tăng nhạy cảm – Đề SĐH!)</option>
          </select>
        </div>
      </div>
      <div id="s17_out"></div>
    `;
    this.upd_s17();
  },
  upd_s17() {
    const d = document.getElementById("s17_drug").value;
    const map = {
      para: {
        eye: "<strong>CO đồng tử</strong> (co cơ vòng, dây III) & <strong>Co cơ thể mi làm phồng thủy tinh thể để ĐIỀU TIẾT NHÌN GẦN</strong> (kiểm soát hoàn toàn bởi đối giao cảm!).",
        heart: "<strong>GIẢM nhịp tim, giảm dẫn truyền nút AV</strong> (kéo dài PR) qua thụ thể <strong>M₂</strong> (dây X).",
        vessel: "<strong>Hầu như KHÔNG tác dụng</strong> lên mạch máu ngoại biên (trừ giãn mạch thể hang gây cương).",
        lung: "<strong>CO THẮT cơ trơn tiểu phế quản</strong> & tăng tiết dịch (thụ thể <strong>M₃</strong>).",
        gi_bladder: "<strong>TĂNG nhu động / Co thành tạng rỗng</strong> (dạ dày, ruột, túi mật, bàng quang) & <strong>GIÃN cơ thắt</strong>.",
        gland: "Tăng tiết nhiều dịch loãng giàu enzyme ở tuyến lệ, nước bọt, dịch vị, dịch tụy."
      },
      symp: {
        eye: "<strong>GIÃN đồng tử</strong> (co cơ tia mống mắt qua thụ thể <strong>α₁</strong> – hạch cổ trên).",
        heart: "<strong>TĂNG nhịp tim, tăng sức co bóp, tăng tốc độ dẫn truyền</strong> (giảm khoảng PR) qua thụ thể <strong>β₁</strong>.",
        vessel: "<strong>CO hầu hết mạch máu</strong> nội tạng, da, thận (qua <strong>α₁</strong>) → <strong>Tăng kháng lực ngoại biên, TĂNG HUYẾT ÁP</strong> (giãn mạch vành & cơ vân qua β₂).",
        lung: "<strong>GIÃN cơ trơn tiểu phế quản</strong> (cơ Reissessen) qua thụ thể <strong>β₂</strong>.",
        gi_bladder: "<strong>GIẢM nhu động / Giãn thành tạng rỗng</strong> & <strong>CO chặt các cơ thắt (α₁)</strong>. (Hạch tạng nhận sợi từ <strong>T₅–T₁₀</strong>).",
        gland: "Giảm tiết dịch tiêu hóa; <strong>Riêng TUYẾN MỒ HÔI tiết nhiều mồ hôi</strong> (do sợi sau hạch giao cảm tiết <strong>Acetylcholine</strong>!)."
      },
      ne: {
        eye: "Giãn đồng tử (α₁).",
        heart: "Kích thích β₁ làm tăng co bóp, nhưng do HA tăng mạnh kích hoạt phản xạ áp thụ quan dây X nên nhịp tim có thể chậm lại phản xạ.",
        vessel: "<strong>CO MẠCH MẠNH TOÀN THÂN (qua α₁)</strong> → Tăng cả HA tâm thu và tâm trương.",
        lung: "Rất ít tác dụng giãn phế quản (vì Norepinephrine chỉ có gốc –NH₂ nên ái lực rất yếu trên β₂).",
        gi_bladder: "Giảm nhu động, co cơ thắt (α₁).",
        gland: "Co mạch tuyến."
      },
      propranolol: {
        eye: "Ít ảnh hưởng.",
        heart: "<strong>Ức chế thụ thể β₁ tại tim:</strong> Làm giảm nhịp tim, giảm sức co bóp, giảm cung lượng tim → <strong>HẠ HUYẾT ÁP</strong>.",
        vessel: "Chặn β₂ mạch cơ vân.",
        lung: "⚠️ <strong>ỨC CHẾ LUÔN THỤ THỂ β₂ Ở PHỔI → GÂY CO THẮT TIỂU PHẾ QUẢN KỊCH PHÁT!</strong> (Khởi phát cơn hen cấp nguy hiểm – Câu hỏi Đề thi SĐH 2024!).",
        gi_bladder: "Ít ảnh hưởng.",
        gland: "Che lấp triệu chứng nhịp nhanh của hạ đường huyết."
      },
      salbutamol: {
        eye: "Không ảnh hưởng.",
        heart: "Ít tác dụng trên β₁ (chỉ hơi tăng nhịp nhẹ nếu dùng liều cao).",
        vessel: "Giãn nhẹ mạch cơ vân (β₂).",
        lung: "✅ <strong>KÍCH THÍCH CHỌN LỌC THỤ THỂ β₂ (tăng cAMP) → GIÃN MẠNH CƠ TRƠN TIỂU PHẾ QUẢN</strong> (Thuốc đầu tay cắt cơn hen phế quản!).",
        gi_bladder: "Giãn cơ trơn tử cung (dùng giảm cơn gò dọa sinh non).",
        gland: "Đưa K⁺ từ máu vào tế bào cơ xương."
      },
      atropin: {
        eye: "<strong>GIÃN ĐỒNG TỬ</strong> (do khóa M₃ cơ vòng) & <strong>LIỆT ĐIỀU TIẾT</strong> (không nhìn gần được do liệt cơ thể mi).",
        heart: "<strong>TĂNG NHỊP TIM</strong> (do khóa thụ thể M₂ của dây X tại nút xoang) và tăng dẫn truyền nút AV.",
        vessel: "Không ảnh hưởng HA (nhưng gây đỏ da do giãn mạch bù trừ khi không đổ mồ hôi).",
        lung: "<strong>Giãn phế quản</strong> và làm khô dịch tiết đường hô hấp.",
        gi_bladder: "<strong>Giảm nhu động ruột</strong> (chống co thắt) và có thể gây <strong>bí tiểu</strong> ở người phì đại tiền liệt tuyến.",
        gland: "<strong>Khô miệng, ngừng tiết mồ hôi</strong> (gây sốt cao ở trẻ em). Là thuốc giải độc đặc hiệu khi ngộ độc phospho hữu cơ!"
      },
      cut_symp: {
        eye: "Sụp mi, co đồng tử (Hội chứng Horner nếu cắt hạch cổ).",
        heart: "Giảm nhịp và giảm lực co bóp (dây X chiếm ưu thế).",
        vessel: "⚠️ <strong>MẤT TRƯƠNG LỰC GIAO CẢM VẬN MẠCH → MẠCH MÁU GIÃN RA TỐI ĐA & HUYẾT ÁP GIẢM TRẦM TRỌNG!</strong> (Câu hỏi Đề thi SĐH 2024!).",
        lung: "Không còn trương lực giãn β₂.",
        gi_bladder: "Tăng nhu động ruột do đối giao cảm độc chiếm.",
        gland: "Mất tiết mồ hôi vùng bị cắt giao cảm."
      },
      stellate_1w: {
        eye: "Tăng nhạy cảm cơ tia mống mắt với catecholamine.",
        heart: "Tăng số lượng thụ thể β₁.",
        vessel: "🔬 <strong>HIỆN TƯỢNG TĂNG NHẠY CẢM SAU CẮT THẦN KINH (Denervation supersensitivity – Đề thi SĐH 2024):</strong> Sau khi cắt hạch sao 1 tuần, màng sau synapse cơ trơn mạch máu tự động <strong>tăng số lượng thụ thể α₁ (up-regulation)</strong> → Khi tiêm lại cùng một liều Norepinephrine, <strong>mạch máu co mạnh hơn gấp nhiều lần và lưu lượng máu GIẢM NHIỀU HƠN hẳn so với trước khi cắt hạch sao!</strong>",
        lung: "—",
        gi_bladder: "—",
        gland: "—"
      }
    }[d];

    document.getElementById("s17_out").innerHTML = `
      <div class="table-responsive">
        <table class="med-table">
          <thead>
            <tr>
              <th style="width:22%;">Cơ quan Đích</th>
              <th>Đáp ứng Sinh lý / Dược lý Trực tiếp</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>👁️ 1. Mắt (Đồng tử & Thể mi)</strong></td><td>${map.eye}</td></tr>
            <tr><td><strong>❤️ 2. Tim (Nút SA, AV, Cơ thất)</strong></td><td>${map.heart}</td></tr>
            <tr><td><strong>🩸 3. Mạch máu & Huyết áp</strong></td><td>${map.vessel}</td></tr>
            <tr><td><strong>🫁 4. Phổi (Tiểu phế quản)</strong></td><td>${map.lung}</td></tr>
            <tr><td><strong>🥣 5. Ống tiêu hóa & Bàng quang</strong></td><td>${map.gi_bladder}</td></tr>
            <tr><td><strong>💧 6. Tuyến ngoại tiết & Mồ hôi</strong></td><td>${map.gland}</td></tr>
          </tbody>
        </table>
      </div>
    `;
  }
};
