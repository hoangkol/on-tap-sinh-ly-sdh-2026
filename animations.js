// ==========================================================================
// 17 HOẠT CẢNH MINH HỌA QUÁ TRÌNH SINH LÝ TRỰC QUAN TƯƠNG TÁC (ANIMATED SVG)
// Bổ sung trực quan tiến trình sinh lý cho từng bài (KHÔNG thay thế lý thuyết chữ)
// ==========================================================================

window.ProcessAnimations = {
  timer: null,
  currentLessonId: null,
  currentStep: 0,
  isPlaying: false,

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.isPlaying = false;
  },

  // Dữ liệu 17 quá trình (mỗi bài 4 bước trực quan + SVG động theo step)
  specs: {
    1: {
      title: "🎬 Minh họa Quá trình Tạo Hồng cầu & Phản ứng Ngưng kết ABO",
      steps: [
        {
          name: "Bước 1: Thiếu O₂ kích thích Thận tiết EPO",
          desc: "Khi mô thiếu oxy, nguyên bào sợi quanh ống thận (80–90%) giải phóng hormon <strong>Erythropoietin (EPO)</strong> vào máu đi đến tủy đỏ xương dẹt (ức, sườn, sống, chậu).",
          highlight: "EPO tăng sinh tiền thân CFU-E"
        },
        {
          name: "Bước 2: Biệt hóa ở Tủy xương (Cần Fe²⁺, B₁₂, Folic)",
          desc: "Tiền nguyên hồng cầu phân chia nhân (cần <strong>Vitamin B₁₂ + Acid folic</strong> tổng hợp DNA) và tổng hợp Hemoglobin (cần <strong>Sắt Fe²⁺</strong>). Hồng cầu lưới mất nhân ra máu (~1%).",
          highlight: "Trưởng thành thành đĩa lõm 2 mặt (7–8 μm)"
        },
        {
          name: "Bước 3: Lưu hành 120 ngày & Chở O₂/CO₂",
          desc: "Màng ngoài mang <strong>acid sialic tích điện âm</strong> giúp HC đẩy nhau; Hb gắn thuận nghịch tối đa 4 phân tử O₂ vào <strong>Fe²⁺</strong> (gắn oxy, KHÔNG phải oxy hóa!).",
          highlight: "1 g Hb gắn 1,34–1,39 mL O₂"
        },
        {
          name: "Bước 4: Cơ chế Ngưng kết Kháng nguyên - Kháng thể ABO",
          desc: "Nếu gặp kháng thể IgM tương ứng (VD: HC nhóm A gặp Anti-A), cầu nối IgM đa hóa trị móc nối nhiều hồng cầu tạo đám ngưng kết gây tan máu nội mạch.",
          highlight: "An toàn truyền máu: Phản ứng chéo chính (-)"
        }
      ],
      renderSvg(s) {
        const a0 = s === 0, a1 = s === 1, a2 = s === 2, a3 = s === 3;
        return `
          <svg viewBox="0 0 640 210" class="proc-svg">
            <rect x="10" y="15" width="135" height="175" rx="12" fill="${a0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a0 ? "var(--primary)" : "var(--border)"}" stroke-width="${a0 ? 3 : 1.5}"/>
            <text x="77" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">1. THẬN (EPO)</text>
            <ellipse cx="77" cy="95" rx="28" ry="38" fill="#fb7185" opacity="0.85"/>
            <path d="M 77,75 Q 62,95 77,115" fill="none" stroke="#fff" stroke-width="2.5"/>
            <text x="77" y="155" text-anchor="middle" font-size="11" fill="var(--text-main)">Thiếu O₂ → Tiết 85% EPO</text>
            ${a0 ? `<circle cx="135" cy="95" r="7" fill="var(--danger)"><animate attributeName="cx" from="105" to="175" dur="1.2s" repeatCount="indefinite"/></circle>` : `<path d="M148 95 L168 95" stroke="var(--primary)" stroke-width="2.5" marker-end="url(#arr)"/>`}

            <rect x="172" y="15" width="142" height="175" rx="12" fill="${a1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${a1 ? "var(--accent)" : "var(--border)"}" stroke-width="${a1 ? 3 : 1.5}"/>
            <text x="243" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">2. TỦY XƯƠNG DẸT</text>
            <circle cx="220" cy="90" r="20" fill="#a78bfa" opacity="0.85"/>
            <circle cx="220" cy="90" r="9" fill="#4c1d95"/>
            <text x="220" y="125" text-anchor="middle" font-size="10" fill="var(--text-muted)">B₁₂ + Folic (DNA)</text>
            <ellipse cx="275" cy="90" rx="18" ry="12" fill="#e11d48">
              ${a1 ? `<animate attributeName="rx" values="16;20;16" dur="1.1s" repeatCount="indefinite"/>` : ""}
            </ellipse>
            <text x="275" y="125" text-anchor="middle" font-size="10" fill="var(--text-muted)">Fe²⁺ (Heme)</text>
            <text x="243" y="160" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">→ Hồng cầu lưới (&lt;1%)</text>

            <rect x="338" y="15" width="138" height="175" rx="12" fill="${a2 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="${a2 ? "var(--primary)" : "var(--border)"}" stroke-width="${a2 ? 3 : 1.5}"/>
            <text x="407" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">3. TUẦN HOÀN (120d)</text>
            <ellipse cx="407" cy="95" rx="34" ry="18" fill="#e11d48">
              ${a2 ? `<animateTransform attributeName="transform" type="translate" values="0,0;6,0;0,0" dur="1.4s" repeatCount="indefinite"/>` : ""}
            </ellipse>
            <ellipse cx="407" cy="95" rx="16" ry="7" fill="#9f1239"/>
            <text x="407" y="68" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">– – Acid sialic – –</text>
            <text x="407" y="138" text-anchor="middle" font-size="10.5" fill="var(--text-main)">Đĩa lõm 2 mặt (+30% S)</text>
            <text x="407" y="158" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">Gắn 4 O₂ vào Fe²⁺</text>

            <rect x="498" y="15" width="132" height="175" rx="12" fill="${a3 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="${a3 ? "var(--danger)" : "var(--border)"}" stroke-width="${a3 ? 3 : 1.5}"/>
            <text x="564" y="40" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">4. NGƯNG KẾT IgM</text>
            <circle cx="545" cy="90" r="14" fill="#e11d48"/>
            <circle cx="585" cy="85" r="14" fill="#e11d48"/>
            <circle cx="562" cy="115" r="14" fill="#e11d48"/>
            <path d="M555 88 L572 86 M552 99 L560 105 M576 95 L568 106" stroke="#fbbf24" stroke-width="3">
              ${a3 ? `<animate attributeName="opacity" values="0.3;1;0.3" dur="1s" repeatCount="indefinite"/>` : ""}
            </path>
            <text x="564" y="155" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">KN A + Anti-A → Tan máu!</text>
          </svg>
        `;
      }
    },

    2: {
      title: "🎬 Minh họa 4 Giai đoạn Cầm máu & Đông máu tại Thành mạch Tổn thương",
      steps: [
        { name: "1. Co thắt mạch máu tại chỗ", desc: "Ngay khi mạch rách, cơ trơn thành mạch co thắt mạnh (myogenic + phản xạ đau + Serotonin, TXA₂, Endothelin) thu hẹp miệng vết rách trong 20–30 phút.", highlight: "Điều kiện: Thành mạch vững chắc & đàn hồi tốt" },
        { name: "2. Thành lập Nút chặn Tiểu cầu", desc: "Tiểu cầu kết dính collagen qua <strong>vWF – GPIb</strong>, phóng thích <strong>ADP & TXA₂</strong> lôi cuốn tiểu cầu khác nối với nhau qua <strong>Fibrinogen – GP IIb/IIIa</strong>.", highlight: "Khảo sát bằng Thời gian máu chảy (TS)" },
        { name: "3. Đông máu Huyết tương (Lưới Fibrin)", desc: "Phức hợp <strong>Prothrombinase</strong> (Ngoại sinh TQ / Nội sinh TCK) chuyển Prothrombin → Thrombin → cắt Fibrinogen thành Fibrin, được <strong>Yếu tố XIIIa + Ca²⁺</strong> làm bền vững.", highlight: "Bắt giam hồng cầu thành cục máu đông" },
        { name: "4. Co cục máu (3–4h) & Tan cục máu (24–48h)", desc: "<strong>Retractozyme & Thrombosthenin</strong> tiểu cầu làm co cục máu kéo sát bờ vết thương (thoát huyết thanh); sau đó <strong>Plasmin</strong> (từ Plasminogen) phân hủy fibrin thông mạch.", highlight: "Huyết thanh không còn I, II, V, VIII" }
      ],
      renderSvg(s) {
        const pinch = s === 0 ? 18 : s >= 1 ? 10 : 0;
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Thành mạch trên & dưới -->
            <rect x="20" y="35" width="600" height="22" rx="6" fill="#fca5a5" stroke="#e11d48" stroke-width="2"/>
            <path d="M 20,148 L 260,148 Q 320,${148 - pinch * 1.4} 380,148 L 620,148 L 620,170 L 20,170 Z" fill="#fca5a5" stroke="#e11d48" stroke-width="2"/>
            <!-- Vết rách nội mô -->
            <path d="M 295,148 L 320,185 L 345,148" fill="var(--danger-light)" stroke="#be123c" stroke-width="2.5"/>
            <text x="320" y="198" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">Vết tổn thương mạch máu (lộ Collagen)</text>

            <!-- Hồng cầu chảy trong lòng mạch -->
            <ellipse cx="110" cy="95" rx="16" ry="9" fill="#e11d48"><animate attributeName="cx" from="50" to="250" dur="2s" repeatCount="indefinite"/></ellipse>
            <ellipse cx="180" cy="112" rx="16" ry="9" fill="#e11d48"><animate attributeName="cx" from="90" to="280" dur="2.3s" repeatCount="indefinite"/></ellipse>

            ${s === 0 ? `
              <path d="M 255,130 L 285,145 M 385,130 L 355,145" stroke="var(--danger)" stroke-width="3"/>
              <text x="320" y="95" text-anchor="middle" font-size="14" font-weight="800" fill="var(--danger)">⚡ CO THẮT CƠ TRƠN THÀNH MẠCH TẠI CHỖ</text>
              <text x="320" y="115" text-anchor="middle" font-size="11.5" fill="var(--text-muted)">Serotonin + Thromboxan A₂ + Endothelin thu hẹp khe hở</text>
            ` : ""}

            ${s >= 1 ? `
              <!-- Nút chặn tiểu cầu -->
              <circle cx="305" cy="144" r="9" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
              <circle cx="320" cy="138" r="10" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
              <circle cx="335" cy="144" r="9" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
              <circle cx="313" cy="154" r="8" fill="#f59e0b"/>
              <circle cx="328" cy="154" r="8" fill="#f59e0b"/>
              <text x="320" y="88" text-anchor="middle" font-size="12.5" font-weight="800" fill="#d97706">
                ${s === 1 ? "🟡 KẾT DÍNH (vWF-GPIb) & KẾT TẬP (ADP, TXA₂)" : s === 2 ? "🕸️ ĐÔNG MÁU: LƯỚI FIBRIN I BỀN VỮNG (XIIIa)" : "🔄 CO CỤC MÁU (3–4h) → PLASMIN TAN CỤC MÁU (24–48h)"}
              </text>
            ` : ""}

            ${s >= 2 ? `
              <!-- Mạng lưới sợi Fibrin -->
              <path d="M 288,125 L 352,162 M 288,162 L 352,125 M 298,122 L 342,165 M 290,142 L 350,142" stroke="${s === 3 ? "#0d9488" : "#0284c7"}" stroke-width="2.5" stroke-dasharray="${s === 3 ? "5,4" : "none"}">
                ${s === 3 ? `<animate attributeName="opacity" values="1;0.25;1" dur="1.4s" repeatCount="indefinite"/>` : ""}
              </path>
            ` : ""}
          </svg>
        `;
      }
    },

    3: {
      title: "🎬 Minh họa Luồng Xung Điện Lan truyền qua 6 Chặng của Tim & Vẽ sóng ECG",
      steps: [
        { name: "1. Phát xung tại Nút xoang (SA: 60–100 l/p)", desc: "Pha 4 tự khử cực nhờ kênh I<sub>f</sub> và Ca²⁺ type T chạm ngưỡng –40 mV → mở Ca²⁺ type L tạo xung chủ nhịp ở thành sau nhĩ phải.", highlight: "Chủ nhịp sinh lý nhanh nhất của tim" },
        { name: "2. Lan qua 2 Tâm nhĩ → Tạo Sóng P", desc: "Xung đi qua 3 bó liên nút (Bachmann, Wenckebach, Thorel: ~1 m/s) khử cực hai tâm nhĩ → ghi nhận <strong>Sóng P (0,08–0,10s)</strong>.", highlight: "Sóng P = Khử cực 2 tâm nhĩ" },
        { name: "3. Trì hoãn 0,1s tại Nút Nhĩ-Thất (AV: 0,05 m/s)", desc: "Nút AV dẫn truyền cực chậm giúp tâm nhĩ kịp co tống hết 30% máu xuống thất → tương ứng <strong>Khoảng PQ/PR (0,12–0,20s)</strong>.", highlight: "Bảo vệ thất khỏi loạn nhịp nhĩ nhanh" },
        { name: "4. Bó His → Purkinje (4 m/s) → Cơ thất (QRS & T)", desc: "Xung phóng cực nhanh theo mạng Purkinje (4 m/s) làm 2 tâm thất khử cực đồng bộ tạo <strong>Phức bộ QRS</strong>, bình nguyên pha 2 (đoạn ST) rồi tái cực tạo <strong>Sóng T</strong>.", highlight: "Purkinje dẫn truyền nhanh nhất tim" }
      ],
      renderSvg(s) {
        const cxArr = [110, 165, 225, 315][s];
        const cyArr = [58, 78, 102, 152][s];
        const ecgX = [115, 195, 285, 425][s];
        return `
          <svg viewBox="0 0 640 210" class="proc-svg">
            <!-- Sơ đồ tim đơn giản hóa bên trái -->
            <path d="M 140,35 C 85,25 65,95 95,145 C 125,185 180,192 200,150 C 235,100 210,30 140,35 Z" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5"/>
            <!-- Nút xoang -->
            <circle cx="110" cy="58" r="9" fill="${s === 0 ? "#f59e0b" : "#94a3b8"}"/>
            <text x="68" y="42" font-size="10.5" font-weight="700" fill="var(--text-main)">Nút SA</text>
            <!-- Đường liên nút -->
            <path d="M 110,58 Q 130,85 152,98" fill="none" stroke="${s === 1 ? "#f59e0b" : "#cbd5e1"}" stroke-width="3"/>
            <!-- Nút AV -->
            <circle cx="152" cy="98" r="8" fill="${s === 2 ? "#e11d48" : "#94a3b8"}"/>
            <text x="166" y="96" font-size="10.5" font-weight="700" fill="var(--text-main)">Nút AV (Trễ 0,1s)</text>
            <!-- Bó His & Purkinje -->
            <path d="M 152,98 L 152,135 M 152,135 L 118,162 L 98,132 M 152,135 L 188,158 L 202,122" fill="none" stroke="${s === 3 ? "#0284c7" : "#94a3b8"}" stroke-width="3.5"/>
            <text x="152" y="185" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--primary)">Bó His → Purkinje (4 m/s)</text>
            <!-- Điểm xung động đang chạy -->
            <circle cx="${cxArr}" cy="${cyArr}" r="7" fill="#fbbf24" stroke="#b45309" stroke-width="2">
              <animate attributeName="r" values="6;11;6" dur="0.9s" repeatCount="indefinite"/>
            </circle>

            <!-- Dải ECG đồng bộ bên phải -->
            <rect x="275" y="25" width="345" height="160" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
            <text x="447" y="46" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">ĐIỆN TÂM ĐỒ ĐỒNG BỘ (ECG)</text>
            <path d="M 290,125 L 330,125 Q 345,100 360,125 L 395,125 L 403,136 L 415,68 L 427,145 L 435,125 L 475,125 Q 500,92 525,125 L 595,125" fill="none" stroke="#16a34a" stroke-width="3.5"/>
            <line x1="${ecgX}" y1="55" x2="${ecgX}" y2="170" stroke="var(--danger)" stroke-width="2" stroke-dasharray="4,3"/>
            <text x="345" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">P</text>
            <text x="378" y="168" text-anchor="middle" font-size="10" fill="var(--text-muted)">PR (0,12-0,2s)</text>
            <text x="416" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">QRS</text>
            <text x="500" y="155" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">T (Tái cực)</text>
          </svg>
        `;
      }
    },

    4: {
      title: "🎬 Minh họa 4 Pha Cơ học Chu chuyển Tim (0,8 giây) & Trạng thái Van tim",
      steps: [
        { name: "1. Tâm nhĩ thu (0,10s) – Đẩy thêm 30% máu", desc: "Van nhĩ-thất (2 lá) đang MỞ, van ĐMC ĐÓNG. Tâm nhĩ co tống nốt 30% máu xuống thất (tạo sóng 'a' và tiếng T4), thất đạt thể tích tối đa EDV.", highlight: "70% máu đã tự chảy xuống trước đó!" },
        { name: "2. Co đồng thể tích (0,05s) – Tiếng tim T1", desc: "Van nhĩ-thất VỪA ĐÓNG SẬP tạo tiếng <strong>T1 ('Bùm')</strong>; van ĐMC VẪN ĐÓNG → Buồng thất kín hoàn toàn, áp suất thất trái vọt từ 8 lên > 80 mmHg.", highlight: "Cả 2 hệ van ĐÓNG hoàn toàn" },
        { name: "3. Bơm máu ra ngoài (0,25s) – Nhanh 70% & Chậm 30%", desc: "Khi P<sub>thất trái</sub> > 80 mmHg, van ĐMC MỞ. 1/3 đầu thời gian tống tới <strong>70% thể tích nhát bóp (SV)</strong>; 2/3 sau tống nốt 30%.", highlight: "Đỉnh áp suất thất trái 120 mmHg" },
        { name: "4. Giãn đồng thể tích (T2) & Máu về tim (70%)", desc: "Van ĐMC VỪA ĐÓNG SẬP tạo tiếng <strong>T2 ('Tặc')</strong> & khấc dicrotic. Sau pha giãn đồng thể tích kín (0,06s), van 2 lá mở hút nhanh 70% máu về thất (tiếng T3).", highlight: "Chu kỳ mới lặp lại mỗi 0,8s" }
      ],
      renderSvg(s) {
        const avOpen = s === 0 || s === 3;
        const aoOpen = s === 2;
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Buồng Nhĩ trái -->
            <rect x="70" y="35" width="130" height="75" rx="18" fill="#fecdd3" stroke="#e11d48" stroke-width="2.5"/>
            <text x="135" y="65" text-anchor="middle" font-size="13" font-weight="800" fill="#9f1239">TÂM NHĨ</text>
            <text x="135" y="85" text-anchor="middle" font-size="11" fill="#9f1239">${s === 0 ? "Đang co (Sóng a)" : "Đang giãn nhận máu"}</text>

            <!-- Van Nhĩ-Thất -->
            <line x1="200" y1="55" x2="${avOpen ? 235 : 200}" y2="${avOpen ? 45 : 95}" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
            <text x="215" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="${avOpen ? "var(--success)" : "var(--danger)"}">Van 2 lá: ${avOpen ? "MỞ" : "ĐÓNG"}</text>

            <!-- Buồng Thất trái -->
            <rect x="245" y="25" width="165" height="145" rx="26" fill="#fda4af" stroke="#be123c" stroke-width="3">
              ${s === 2 ? `<animate attributeName="width" values="165;145;165" dur="1.1s" repeatCount="indefinite"/>` : ""}
            </rect>
            <text x="325" y="65" text-anchor="middle" font-size="14" font-weight="800" fill="#881337">TÂM THẤT TRÁI</text>
            <text x="325" y="92" text-anchor="middle" font-size="12" font-weight="700" fill="#881337">${["Nhận 30% cuối (EDV)", "Co kín! P: 8→80 (T1)", "Bơm 70% nhanh + 30%", "Đóng ĐMC (T2) → Hút 70%"][s]}</text>

            <!-- Van ĐMC -->
            <line x1="415" y1="55" x2="${aoOpen ? 450 : 415}" y2="${aoOpen ? 42 : 95}" stroke="#0f172a" stroke-width="5" stroke-linecap="round"/>
            <text x="430" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="${aoOpen ? "var(--success)" : "var(--danger)"}">Van ĐMC: ${aoOpen ? "MỞ" : "ĐÓNG"}</text>

            <!-- Động mạch chủ -->
            <path d="M 455,55 L 595,55 L 595,95 L 455,95 Z" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
            <text x="525" y="79" text-anchor="middle" font-size="12" font-weight="800" fill="#0369a1">ĐỘNG MẠCH CHỦ</text>
            ${aoOpen ? `<circle cx="480" cy="75" r="8" fill="#e11d48"><animate attributeName="cx" from="455" to="585" dur="0.9s" repeatCount="indefinite"/></circle>` : ""}
            ${s === 1 || s === 3 ? `<rect x="240" y="176" width="210" height="22" rx="6" fill="var(--danger)"/><text x="345" y="191" text-anchor="middle" font-size="11" font-weight="800" fill="#fff">⚠️ CẢ 2 HỆ VAN ĐỀU ĐÓNG (ĐỒNG THỂ TÍCH)</text>` : ""}
          </svg>
        `;
      }
    },

    5: {
      title: "🎬 Minh họa Cung Phản xạ Điều hòa Tim (Áp thụ quan, Bainbridge & TK Tự chủ)",
      steps: [
        { name: "1. Phát hiện Tín hiệu tại Xoang cảnh & Quai ĐMC", desc: "Khi huyết áp tăng (70–160 mmHg), áp thụ quan căng ra phát xung mạnh theo dây <strong>Hering (IX)</strong> và <strong>Cyon (X)</strong> về nhân bó đơn độc ở hành não.", highlight: "Hạ HA thì giảm xung → tăng giao cảm bù" },
        { name: "2. Xử lý tại Hành não & Đáp ứng Ly tâm (Dây X vs Giao cảm)", desc: "Hành não kích thích trung tâm ức chế tim (<strong>Dây X Phải → nút SA; Dây X Trái → nút AV</strong>) và ức chế vùng co mạch giao cảm.", highlight: "Giảm nhịp tim + Giãn mạch → Hạ HA" },
        { name: "3. Phản xạ Bainbridge (Máu về Nhĩ phải nhiều)", desc: "Truyền dịch làm căng vùng Bainbridge nhĩ phải → xung theo <strong>dây X</strong> về hành não ức chế lại trung tâm dây X → làm <strong>TĂNG nhịp tim</strong> (mất nếu cắt 2 dây X).", highlight: "Giải quyết ứ máu ở nhĩ phải" },
        { name: "4. Điều hòa Nội tại Frank-Starling & Ảnh hưởng Ion", desc: "Tăng EDV kéo sợi cơ tim tới <strong>2,2 μm</strong> giúp co mạnh hơn; <strong>Tăng K⁺</strong> ngừng tim kỳ <strong>tâm trương</strong>, còn <strong>Tăng Ca²⁺</strong> ngừng tim kỳ <strong>tâm thu</strong>.", highlight: "Cân bằng lưu lượng 2 thất" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 200" class="proc-svg">
            <rect x="20" y="30" width="165" height="140" rx="12" fill="${s === 0 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="102" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">THỤ THỂ CẢM NHẬN</text>
            <text x="102" y="85" text-anchor="middle" font-size="11.5" fill="var(--text-main)">• Xoang cảnh (Dây IX)</text>
            <text x="102" y="105" text-anchor="middle" font-size="11.5" fill="var(--text-main)">• Quai ĐMC (Dây X)</text>
            <text x="102" y="125" text-anchor="middle" font-size="11.5" fill="var(--text-main)">• Vùng Bainbridge nhĩ (P)</text>
            <text x="102" y="145" text-anchor="middle" font-size="11.5" fill="var(--text-main)">• Thất trái (Bezold-Jarisch)</text>

            <line x1="188" y1="100" x2="232" y2="100" stroke="var(--accent)" stroke-width="3"/>
            <circle cx="210" cy="100" r="6" fill="var(--accent)"><animate attributeName="cx" from="188" to="232" dur="1s" repeatCount="indefinite"/></circle>

            <rect x="235" y="30" width="165" height="140" rx="12" fill="${s === 1 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="var(--accent)" stroke-width="2"/>
            <text x="317" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">HÀNH NÃO (TRUNG TÂM)</text>
            <text x="317" y="90" text-anchor="middle" font-size="11.5" fill="var(--text-main)">Nhân bó đơn độc</text>
            <text x="317" y="115" text-anchor="middle" font-size="11" fill="var(--danger)">Kích thích Dây X (M₂)</text>
            <text x="317" y="138" text-anchor="middle" font-size="11" fill="var(--primary)">Điều tiết Giao cảm (β₁)</text>

            <line x1="403" y1="100" x2="447" y2="100" stroke="var(--danger)" stroke-width="3"/>
            <circle cx="425" cy="100" r="6" fill="var(--danger)"><animate attributeName="cx" from="403" to="447" dur="1s" repeatCount="indefinite"/></circle>

            <rect x="450" y="30" width="170" height="140" rx="12" fill="${s >= 2 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="var(--danger)" stroke-width="2"/>
            <text x="535" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">ĐÁP ỨNG TIM & MẠCH</text>
            <text x="535" y="88" text-anchor="middle" font-size="11.5" font-weight="700" fill="var(--text-main)">${["HA ↑ → Chậm nhịp, giãn mạch", "Dây X (P): SA | X (T): AV", "Bainbridge → Tăng nhịp ↑", "Starling (2,2 μm) | K⁺ vs Ca²⁺"][s]}</text>
            <text x="535" y="125" text-anchor="middle" font-size="11" fill="var(--text-muted)">K⁺ ↑ → Ngừng TÂM TRƯƠNG</text>
            <text x="535" y="145" text-anchor="middle" font-size="11" fill="var(--text-muted)">Ca²⁺ ↑ → Ngừng TÂM THU</text>
          </svg>
        `;
      }
    },

    6: {
      title: "🎬 Minh họa Cơ học Hô hấp: Di chuyển Cơ hoành, Áp suất Màng phổi & Surfactant",
      steps: [
        { name: "1. Hít vào bình thường (Chủ động – Cơ hoành 75%)", desc: "<strong>Cơ hoành</strong> hạ xuống (1 cm tăng 200 mL) + <strong>Cơ liên sườn ngoài</strong> nâng xương sườn → P<sub>pl</sub> âm sâu hơn (–6 mmHg) → P<sub>alv</sub> âm (–1 đến –3 mmHg) hút 500 mL khí vào.", highlight: "Cơ hoành chi phối bởi C₃–C₅" },
        { name: "2. Hít vào tối đa (Đạt TLC / VC – Ppl âm nhất)", desc: "Huy động cơ ức đòn chũm, bậc thang, răng trước → Thể tích phổi đạt <strong>TLC (~5 L)</strong> và <strong>Áp suất màng phổi đạt giá trị ÂM NHẤT (–30 mmHg)</strong>.", highlight: "Ptp = Palv – Ppl đạt tối đa" },
        { name: "3. Thở ra bình thường (Thụ động về mức FRC)", desc: "<strong>Không có cơ nào co!</strong> Lực đàn hồi phổi (2/3 do sức căng bề mặt dịch phế nang, 1/3 do sợi chun) kéo phổi co lại, P<sub>alv</sub> dương (+1 đến +3 mmHg) đẩy 500 mL ra, dừng ở <strong>FRC</strong>.", highlight: "Thở ra gắng sức: Cơ thẳng bụng!" },
        { name: "4. Chất hoạt diện Surfactant (Định luật Laplace P = 2T/R)", desc: "<strong>DPPC của tế bào type II</strong> tập trung dày hơn ở phế nang nhỏ làm giảm sức căng bề mặt T tỉ lệ với R → giúp phế nang nhỏ không xẹp đổ khí sang phế nang lớn.", highlight: "Giữ phổi khô ráo, tăng suất đàn" }
      ],
      renderSvg(s) {
        const drop = s === 0 ? 18 : s === 1 ? 30 : 0;
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Lồng ngực & Hai lá phổi -->
            <rect x="40" y="20" width="260" height="165" rx="18" fill="var(--bg-card)" stroke="var(--text-light)" stroke-width="2"/>
            <text x="170" y="38" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">KHOANG MÀNG PHỔI (Ppl = ${s===1?"-30 mmHg ÂM NHẤT!":s===0?"-6 mmHg":"-2,5 mmHg"})</text>
            <path d="M 162,48 L 162,75 M 162,75 L 130,90 M 162,75 L 194,90" stroke="#94a3b8" stroke-width="6"/>
            <ellipse cx="122" cy="${110 + drop * 0.3}" rx="${38 + drop * 0.4}" ry="${38 + drop * 0.4}" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <ellipse cx="218" cy="${110 + drop * 0.3}" rx="${38 + drop * 0.4}" ry="${38 + drop * 0.4}" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <!-- Cơ hoành -->
            <path d="M 60,${162 + drop * 0.5} Q 170,${136 + drop * 1.1} 280,${162 + drop * 0.5}" fill="none" stroke="#e11d48" stroke-width="5" stroke-linecap="round"/>
            <text x="170" y="180" text-anchor="middle" font-size="11" font-weight="700" fill="#e11d48">Cơ hoành ${s <= 1 ? "HẠ XUỐNG (Chủ động)" : "NÂNG LÊN (Thụ động về FRC)"}</text>

            <!-- Định luật Laplace bên phải -->
            <rect x="330" y="20" width="290" height="165" rx="14" fill="${s === 3 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="${s === 3 ? "var(--accent)" : "var(--border)"}" stroke-width="2"/>
            <text x="475" y="44" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">SURFACTANT & LAPLACE: P = 2T / R</text>
            <circle cx="410" cy="110" r="24" fill="#ccfbf1" stroke="#0d9488" stroke-width="3" stroke-dasharray="5,3"/>
            <text x="410" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#0f766e">R nhỏ (T ↓↓)</text>
            <line x1="436" y1="110" x2="480" y2="110" stroke="#0d9488" stroke-width="3"/>
            <circle cx="525" cy="110" r="42" fill="#e0f2fe" stroke="#0284c7" stroke-width="3"/>
            <text x="525" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="#0369a1">R lớn (T ↓)</text>
            <text x="475" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">Áp suất hai phế nang CÂN BẰNG → Không xẹp phổi!</text>
          </svg>
        `;
      }
    },

    7: {
      title: "🎬 Minh họa Khuếch tán 8 Lớp qua Màng Phế nang - Mao mạch & 3 Vùng West",
      steps: [
        { name: "1. Máu tĩnh mạch trộn đầu mao mạch (0,00s)", desc: "Máu từ động mạch phổi đến đầu mao mạch phổi có <strong>PvO₂ = 40 mmHg</strong> và <strong>PvCO₂ = 46 mmHg</strong> tiếp xúc phế nang (PAO₂ = 100, PACO₂ = 40).", highlight: "ΔPO₂ = 60 mmHg | ΔPCO₂ = 6 mmHg" },
        { name: "2. Khuếch tán thụ động qua 8 lớp màng (0,25s)", desc: "Chỉ mất <strong>0,25 giây (1/3 đầu quãng đường 0,75s)</strong> để cân bằng hoàn toàn O₂ và CO₂ (CO₂ khuếch tán nhanh gấp <strong>20,7 lần</strong> O₂ nhờ độ hòa tan cao).", highlight: "DLO₂ lúc nghỉ = 21 mL/phút/mmHg" },
        { name: "3. Pha trộn máu tĩnh mạch sinh lý (~2%)", desc: "Máu rời mao mạch phổi (PO₂ = 100 mmHg) bị pha trộn ~2% máu tĩnh mạch phế quản & Thebesius nên <strong>PaO₂ động mạch hệ thống còn 95 mmHg</strong>.", highlight: "95 mmHg là PaO₂ động mạch chuẩn" },
        { name: "4. Tỉ số VA/Q Đỉnh vs Đáy phổi (3 Vùng West)", desc: "Khi đứng: Đỉnh phổi có <strong>VA/Q cao (2,4–3,3)</strong>; Vùng 2 (Pa > PA > Pv); Đáy phổi <strong>VA/Q thấp (0,5–0,6)</strong>. Trung bình toàn phổi <strong>VA/Q = 0,8</strong>.", highlight: "Thiếu O₂ phế nang → Co mạch phổi!" }
      ],
      renderSvg(s) {
        const rbcX = [100, 220, 380, 380][s];
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Phế nang ở trên -->
            <rect x="40" y="18" width="380" height="72" rx="18" fill="#e0f2fe" stroke="#0284c7" stroke-width="2.5"/>
            <text x="230" y="45" text-anchor="middle" font-size="13" font-weight="800" fill="#0369a1">LÒNG PHẾ NANG: P_AO₂ = 100 | P_ACO₂ = 40 mmHg</text>
            <text x="230" y="68" text-anchor="middle" font-size="11" fill="#0369a1">Màng Phế nang - Mao mạch (0,2–0,6 μm) • Tổng 8 lớp vào tới Hb</text>

            <!-- Mũi tên O2 xuống, CO2 lên -->
            <path d="M 160,88 L 160,124" stroke="#16a34a" stroke-width="4"/>
            <text x="145" y="110" text-anchor="end" font-size="11" font-weight="800" fill="#16a34a">O₂ ↓</text>
            <path d="M 270,124 L 270,88" stroke="#e11d48" stroke-width="4"/>
            <text x="285" y="110" text-anchor="start" font-size="11" font-weight="800" fill="#e11d48">CO₂ ↑ (×20,7)</text>

            <!-- Mao mạch phổi ở dưới -->
            <rect x="40" y="126" width="380" height="58" rx="14" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5"/>
            <text x="95" y="174" font-size="10.5" font-weight="700" fill="#9f1239">0,00s (PO₂=40)</text>
            <text x="230" y="174" text-anchor="middle" font-size="10.5" font-weight="800" fill="#15803d">0,25s (Cân bằng 100!)</text>
            <text x="375" y="174" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">0,75s → PaO₂=95</text>
            <ellipse cx="${rbcX}" cy="148" rx="22" ry="11" fill="#e11d48"/>

            <!-- 3 Vùng West bên phải -->
            <rect x="442" y="18" width="180" height="166" rx="12" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
            <text x="532" y="40" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">3 VÙNG WEST (ĐỨNG)</text>
            <rect x="455" y="50" width="154" height="36" rx="6" fill="#fef3c7"/><text x="532" y="72" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">Đỉnh (V1): VA/Q cao (3,0)</text>
            <rect x="455" y="92" width="154" height="36" rx="6" fill="#dcfce7"/><text x="532" y="114" text-anchor="middle" font-size="10.5" font-weight="700" fill="#15803d">Giữa (V2): Pa &gt; PA &gt; Pv</text>
            <rect x="455" y="134" width="154" height="36" rx="6" fill="#e0f2fe"/><text x="532" y="156" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0369a1">Đáy (V3): VA/Q thấp (0,6)</text>
          </svg>
        `;
      }
    },

    8: {
      title: "🎬 Minh họa Chuyên chở O₂/CO₂ tại Mô (Bohr + Hamburger) & tại Phổi (Haldane)",
      steps: [
        { name: "1. Tại Mô: Hiệu quả Bohr nhả O₂ (Nghỉ 25%, Gắng sức 75%)", desc: "Mô sản sinh CO₂, H⁺, nhiệt làm đường cong Barcroft <strong>lệch phải</strong> (tăng P₅₀) → HbO₂ dễ dàng nhả O₂ (giao 5 mL/dL lúc nghỉ).", highlight: "O₂ hòa tan (0,3 mL/dL) nuôi tế bào trực tiếp" },
        { name: "2. Tại Mô: Carbonic Anhydrase biến CO₂ → HCO₃⁻ (70%)", desc: "CO₂ vào hồng cầu tạo HCO₃⁻ (70%), gắn globin tạo HbCO₂ (23%) và hòa tan (7%).", highlight: "Thứ tự: 70% > 23% > 7%" },
        { name: "3. Hiện tượng Hamburger (Chloride shift tại Mô)", desc: "<strong>HCO₃⁻ khuếch tán ra huyết tương</strong> đổi lấy <strong>Cl⁻ đi vào hồng cầu</strong> → kéo theo H₂O làm <strong>thể tích hồng cầu máu tĩnh mạch tăng ~3% (Hct ↑)</strong>!", highlight: "Giữ cân bằng điện tích màng HC" },
        { name: "4. Tại Phổi: Hiệu quả Haldane đẩy CO₂ ra phế nang", desc: "Khi O₂ gắn lại vào Hb tại phổi, HbO₂ trở thành acid mạnh đẩy H⁺ kết hợp HCO₃⁻ → CO₂ + H₂O (và đẩy Cl⁻ ra ngoài) thải CO₂ gấp đôi qua phổi.", highlight: "Cân bằng chu trình hô hấp" }
      ],
      renderSvg(s) {
        const atTissue = s <= 2;
        return `
          <svg viewBox="0 0 640 200" class="proc-svg">
            <rect x="20" y="25" width="280" height="150" rx="16" fill="${atTissue ? "var(--danger-light)" : "var(--bg-card)"}" stroke="var(--danger)" stroke-width="${atTissue ? 3 : 1.5}"/>
            <text x="160" y="48" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--danger)">TẠI MAO MẠCH MÔ (BOHR & HAMBURGER)</text>
            <ellipse cx="160" cy="112" rx="${s === 2 ? 78 : 70}" ry="${s === 2 ? 40 : 35}" fill="#fda4af" stroke="#e11d48" stroke-width="2.5"/>
            <text x="160" y="106" text-anchor="middle" font-size="11.5" font-weight="800" fill="#881337">HỒNG CẦU ${s === 2 ? "(PHỒNG +3%!)" : ""}</text>
            <text x="160" y="124" text-anchor="middle" font-size="10.5" fill="#881337">CO₂ + H₂O --[CA]--&gt; H⁺ + HCO₃⁻</text>
            <text x="80" y="75" font-size="11" font-weight="700" fill="var(--success)">O₂ ra mô ↓</text>
            <text x="235" y="75" font-size="11" font-weight="700" fill="var(--primary)">HCO₃⁻ ra ↑ | Cl⁻, H₂O vào ↓</text>

            <rect x="340" y="25" width="280" height="150" rx="16" fill="${s === 3 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="var(--accent)" stroke-width="${s === 3 ? 3 : 1.5}"/>
            <text x="480" y="48" text-anchor="middle" font-size="12.5" font-weight="800" fill="var(--accent)">TẠI MAO MẠCH PHỔI (HALDANE)</text>
            <ellipse cx="480" cy="112" rx="70" ry="35" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/>
            <text x="480" y="106" text-anchor="middle" font-size="11.5" font-weight="800" fill="#0369a1">O₂ + HHb → HbO₂ + H⁺</text>
            <text x="480" y="124" text-anchor="middle" font-size="10.5" fill="#0369a1">H⁺ + HCO₃⁻ → H₂O + CO₂ ↑ thải ra</text>
            <text x="480" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">Cl⁻ ra lại huyết tương • HC xẹp về bình thường</text>
          </svg>
        `;
      }
    },

    9: {
      title: "🎬 Minh họa Hành trình Nước tiểu dọc 4 Đoạn của Nephron",
      steps: [
        { name: "1. Siêu lọc Cầu thận (Màng 3 lớp → GFR = 125 mL/ph)", desc: "Áp suất lọc UP = 55 – (15 + 30) = <strong>+10 mmHg</strong> đẩy dịch qua nội mô, màng nền tích điện âm (chặn Albumin) và khe lọc podocyte (8 nm).", highlight: "180 Lít/ngày (99% tái hấp thu)" },
        { name: "2. Ống lượn gần (PCT – Đẳng trương 300 mOsm/L)", desc: "Tái hấp thu nhiều nước nhất (<strong>65% nước & Na⁺</strong> kể cả khi có ADH!), <strong>100% Glucose</strong> (SGLT2/1, ngưỡng 180 mg/dL, Tm=375), Protein bằng <strong>ẩm bào</strong>, bài tiết H⁺, PAH.", highlight: "Đoạn tái hấp thu khối lượng lớn nhất" },
        { name: "3. Quai Henle (Tạo tủy ưu trương 1200 → Nhược trương 100)", desc: "Cành xuống chỉ thấm nước (đỉnh quai <strong>1200 mOsm/L</strong>). Cành lên dày <strong>không thấm nước</strong> bơm Na⁺-K⁺-2Cl⁻ (NKCC2 - Furosemide) tạo dịch nhược trương 100 mOsm/L.", highlight: "Vasa recta giữ tủy thận ưu trương" },
        { name: "4. Ống lượn xa & Ống góp (Aldosterone & ADH tinh chỉnh)", desc: "<strong>Tế bào chính:</strong> Aldosterone (tái hấp thu Na⁺, bài tiết K⁺) & ADH (gắn Aquaporin-2 cô đặc tới 1200 mOsm/L). <strong>Tế bào kẽ:</strong> Bơm H⁺-ATPase hạ pH tới 4,5.", highlight: "Bài xuất 1,5–1,8 L nước tiểu/ngày" }
      ],
      renderSvg(s) {
        const dropPos = [[85, 85], [220, 75], [345, 165], [510, 115]][s];
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Cầu thận -->
            <circle cx="85" cy="85" r="34" fill="${s === 0 ? "var(--danger-light)" : "#ffe4e6"}" stroke="#e11d48" stroke-width="3"/>
            <text x="85" y="82" text-anchor="middle" font-size="11" font-weight="800" fill="#9f1239">CẦU THẬN</text>
            <text x="85" y="98" text-anchor="middle" font-size="10" fill="#9f1239">125 mL/ph</text>

            <!-- Ống lượn gần -->
            <path d="M 118,85 L 275,85" stroke="${s === 1 ? "#0284c7" : "#94a3b8"}" stroke-width="16" stroke-linecap="round"/>
            <text x="200" y="60" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Ống lượn gần (PCT)</text>
            <text x="200" y="114" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">65% Nước/Na⁺, 100% Glu (300 mOsm)</text>

            <!-- Quai Henle -->
            <path d="M 275,85 L 315,172 Q 345,188 375,172 L 415,85" fill="none" stroke="${s === 2 ? "#0d9488" : "#cbd5e1"}" stroke-width="13" stroke-linecap="round"/>
            <text x="345" y="196" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--accent)">Quai Henle: Đỉnh 1200 → Cuối 100 mOsm/L</text>

            <!-- Ống lượn xa & Ống góp -->
            <path d="M 415,85 L 515,85 L 515,175" fill="none" stroke="${s === 3 ? "#7c3aed" : "#cbd5e1"}" stroke-width="16" stroke-linecap="round"/>
            <text x="530" y="58" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">Ống xa &amp; Ống góp</text>
            <text x="565" y="130" text-anchor="middle" font-size="10.5" fill="var(--text-main)">Aldosterone (Na⁺/K⁺)</text>
            <text x="565" y="148" text-anchor="middle" font-size="10.5" fill="var(--text-main)">ADH (AQP2 nước)</text>

            <!-- Giọt dịch lọc di chuyển -->
            <circle cx="${dropPos[0]}" cy="${dropPos[1]}" r="9" fill="#fbbf24" stroke="#b45309" stroke-width="2">
              <animate attributeName="r" values="8;12;8" dur="0.9s" repeatCount="indefinite"/>
            </circle>
          </svg>
        `;
      }
    },

    10: {
      title: "🎬 Minh họa Chuỗi Nội tiết Liên Cơ quan của Thận (Hệ RAAS - EPO - Calcitriol)",
      steps: [
        { name: "1. Tế bào Cận cầu thận tiết Renin (Khi tụt HA / giảm NaCl)", desc: "Giảm tưới máu thận, giảm NaCl vết đặc hoặc kích thích giao cảm β₁ làm tế bào cận cầu thận ở tiểu ĐM vào tiết <strong>Renin</strong> vào máu.", highlight: "Men chuyển khởi động hệ RAAS" },
        { name: "2. Gan (Angiotensinogen) → Phổi (ACE) → Angiotensin II", desc: "Renin cắt Angiotensinogen (do <strong>Gan</strong> sản xuất) thành Angiotensin I → qua mao mạch <strong>Phổi</strong> gặp men chuyển <strong>ACE</strong> tạo <strong>Angiotensin II</strong>.", highlight: "Co mạch cực mạnh & giữ GFR (co EA)" },
        { name: "3. Vỏ thượng thận (Aldosterone) & Yên sau (ADH)", desc: "Angiotensin II kích thích lớp cầu tiết <strong>Aldosterone</strong> (giữ Na⁺, thải K⁺) và kích thích khát + tiết <strong>ADH</strong> (hội chứng SIADH gây hạ Na⁺ pha loãng).", highlight: "Phục hồi thể tích & huyết áp" },
        { name: "4. EPO (Tủy xương) & Calcitriol (Ống lượn gần 1α-hydroxylase)", desc: "Thiếu oxy → Thận tiết 85% <strong>EPO</strong> tạo hồng cầu; Hạ Ca²⁺/PTH tăng → Thận kích hoạt <strong>1α-hydroxylase</strong> tạo <strong>Calcitriol [1,25-(OH)₂D₃]</strong> tăng hấp thu Ca²⁺ ruột.", highlight: "Suy thận mạn → Thiếu máu & Loãng xương" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 200" class="proc-svg">
            <rect x="18" y="30" width="135" height="140" rx="12" fill="${s === 0 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="var(--danger)" stroke-width="2"/>
            <text x="85" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">1. THẬN (JG Cells)</text>
            <text x="85" y="90" text-anchor="middle" font-size="11" fill="var(--text-main)">HA ↓ / NaCl ↓ / β₁</text>
            <text x="85" y="115" text-anchor="middle" font-size="12" font-weight="800" fill="var(--danger)">→ Tiết RENIN</text>
            <text x="85" y="145" text-anchor="middle" font-size="10.5" fill="var(--text-muted)">(Ngoài ra: EPO &amp; Calcitriol)</text>

            <rect x="175" y="30" width="142" height="140" rx="12" fill="${s === 1 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="246" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">2. GAN &amp; PHỔI</text>
            <text x="246" y="88" text-anchor="middle" font-size="11" fill="var(--text-main)">Gan: Angiotensinogen</text>
            <text x="246" y="110" text-anchor="middle" font-size="11" fill="var(--text-main)">→ Angiotensin I</text>
            <text x="246" y="135" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">Phổi (ACE) → Ang II</text>

            <rect x="339" y="30" width="142" height="140" rx="12" fill="${s === 2 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="var(--accent)" stroke-width="2"/>
            <text x="410" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">3. ĐÍCH CỦA ANG II</text>
            <text x="410" y="88" text-anchor="middle" font-size="11" fill="var(--text-main)">• Co tiểu ĐM (HA ↑)</text>
            <text x="410" y="110" text-anchor="middle" font-size="11" fill="var(--text-main)">• Lớp cầu → Aldosterone</text>
            <text x="410" y="132" text-anchor="middle" font-size="11" fill="var(--text-main)">• Yên sau → ADH (AQP2)</text>

            <rect x="502" y="30" width="122" height="140" rx="12" fill="${s === 3 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="var(--purple)" stroke-width="2"/>
            <text x="563" y="55" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--purple)">4. NỘI TIẾT KHÁC</text>
            <text x="563" y="92" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">EPO → Hồng cầu</text>
            <text x="563" y="120" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">1,25-(OH)₂D₃</text>
            <text x="563" y="140" text-anchor="middle" font-size="10" fill="var(--text-muted)">(Hấp thu Ca²⁺ ruột)</text>
          </svg>
        `;
      }
    },

    11: {
      title: "🎬 Minh họa Hoạt động Cơ học Dạ dày (Giãn tiếp nhận, Nhu động, Đẩy lùi & Sóng MMC)",
      steps: [
        { name: "1. Giãn tiếp nhận (Đáy-Thân vị) & Xếp lớp đồng tâm", desc: "Khi nuốt, phản xạ dây X làm cơ vùng đáy và thân vị giãn ra (chứa tới 1,5 L không tăng áp suất). <strong>Thức ăn vào sau nằm ở GIỮA, thức ăn vào trước áp sát THÀNH dạ dày</strong> (amylase nước bọt tiếp tục tiêu hóa tinh bột ở giữa).", highlight: "Giãn tiếp nhận qua dây X" },
        { name: "2. Sóng nhu động (3–4 l/p) & Đẩy lùi (Retropulsion)", desc: "Sóng nhu động xuất phát từ giữa thân vị ép về hang vị mỗi 15–20s. Khi môn vị khép hờ, khối thức ăn bị bắn ngược trở lại thân vị giúp nghiền nát (< 2 mm) trộn đều với HCl & Pepsin thành vị trấp.", highlight: "Nghiền nhuyễn thức ăn thành vị trấp" },
        { name: "3. Thoát thức ăn qua Môn vị & Phản xạ Ruột-Dạ dày", desc: "Căng dạ dày + Gastrin thúc đẩy thoát; ngược lại vị trấp <strong>nhiều Mỡ, quá Acid (pH < 3,5), ưu trương</strong> xuống tá tràng kích thích tiết <strong>CCK, Secretin, GIP</strong> làm đóng môn vị chậm thoát.", highlight: "Lipid thoát chậm nhất (4–6h)" },
        { name: "4. Sóng co thắt lưu động lúc đói (MMC – Motilin)", desc: "Mỗi <strong>60–90 phút</strong> giữa các bữa ăn, hormon <strong>Motilin</strong> khởi phát sóng co bóp mạnh <strong>BẮT ĐẦU TỪ THÂN DẠ DÀY</strong> lan xuống ruột non quét sạch cặn bã thừa ('người quét dọn').", highlight: "Bắt đầu từ THÂN DẠ DÀY (Bẫy thi!)" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 215" class="proc-svg">
            <!-- Hình dáng Dạ dày giải phẫu trực quan -->
            <path d="M 120,25 L 145,25 L 152,58 C 195,25 260,55 245,105 C 235,140 285,155 340,145 L 368,142 L 368,168 L 325,175 C 215,198 110,165 112,95 Z" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
            <text x="132" y="18" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-muted)">Thực quản</text>
            <text x="200" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">Đáy &amp; Thân vị</text>
            <text x="275" y="162" text-anchor="middle" font-size="11" font-weight="800" fill="#b45309">Hang vị</text>
            <text x="368" y="133" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Môn vị</text>

            <!-- Tá tràng -->
            <path d="M 368,142 L 455,142 C 490,142 490,192 440,192 L 405,192" fill="none" stroke="#0d9488" stroke-width="18" stroke-linecap="round"/>
            <text x="465" y="132" font-size="11" font-weight="700" fill="var(--accent)">Tá tràng (CCK, Secretin)</text>

            ${s === 0 ? `
              <!-- Xếp lớp đồng tâm -->
              <ellipse cx="178" cy="112" rx="44" ry="28" fill="#fca5a5" opacity="0.55"/>
              <ellipse cx="178" cy="112" rx="28" ry="17" fill="#fde047" opacity="0.8"/>
              <ellipse cx="178" cy="112" rx="13" ry="8" fill="#38bdf8">
                <animate attributeName="ry" values="7;10;7" dur="1.2s" repeatCount="indefinite"/>
              </ellipse>
              <text x="178" y="150" text-anchor="middle" font-size="10" font-weight="700" fill="#9f1239">Mới vào ở giữa (Xanh) • Cũ sát thành (Hồng)</text>
            ` : ""}

            ${s === 1 ? `
              <!-- Sóng nhu động & Đẩy lùi Retropulsion -->
              <circle cx="245" cy="148" r="10" fill="#e11d48">
                <animate attributeName="cx" values="200;335;235" dur="1.6s" repeatCount="indefinite"/>
              </circle>
              <path d="M 340,152 L 265,142" stroke="#e11d48" stroke-width="3" stroke-dasharray="4,3"/>
              <text x="235" y="122" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">⬅ ĐẨY LÙI (RETROPULSION) nghiền vị trấp!</text>
            ` : ""}

            ${s === 2 ? `
              <!-- Thoát môn vị & Feedback ức chế từ tá tràng -->
              <circle cx="385" cy="155" r="7" fill="#0d9488">
                <animate attributeName="cx" from="340" to="455" dur="1.4s" repeatCount="indefinite"/>
              </circle>
              <path d="M 435,140 Q 400,105 368,138" fill="none" stroke="var(--danger)" stroke-width="2.5" stroke-dasharray="4,3"/>
              <text x="415" y="100" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--danger)">Mỡ/Acid → CCK, Secretin đóng môn vị!</text>
            ` : ""}

            ${s === 3 ? `
              <!-- Sóng MMC lúc đói -->
              <circle cx="190" cy="100" r="11" fill="#7c3aed">
                <animate attributeName="cx" values="175;368;460" dur="1.8s" repeatCount="indefinite"/>
                <animate attributeName="cy" values="95;155;155" dur="1.8s" repeatCount="indefinite"/>
              </circle>
              <text x="275" y="100" text-anchor="middle" font-size="11" font-weight="800" fill="var(--purple)">Sóng MMC (Motilin) từ THÂN VỊ quét xuống ruột!</text>
            ` : ""}

            <!-- Hộp chú thích nhanh bên phải -->
            <rect x="495" y="25" width="132" height="165" rx="10" fill="var(--bg-card)" stroke="var(--border)"/>
            <text x="561" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">BÀI TIẾT DỊCH VỊ</text>
            <text x="561" y="75" text-anchor="middle" font-size="10.5" fill="var(--text-main)">• Tế bào thành: HCl + IF</text>
            <text x="561" y="97" text-anchor="middle" font-size="10.5" fill="var(--text-main)">• Tế bào chính: Pepsinogen</text>
            <text x="561" y="119" text-anchor="middle" font-size="10.5" fill="var(--text-main)">• Tế bào G: Gastrin (+)</text>
            <text x="561" y="141" text-anchor="middle" font-size="10.5" fill="var(--text-main)">• Tế bào D: Somatostatin (-)</text>
            <text x="561" y="168" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--danger)">Bơm H⁺/K⁺-ATPase</text>
          </svg>
        `;
      }
    },

    12: {
      title: "🎬 Minh họa Hoạt động Cơ học Ruột non & Hấp thu Đường / Mỡ vào Máu - Bạch huyết",
      steps: [
        { name: "1. Co bóp phân đoạn & Sóng nhu động (Luật Bayliss-Starling)", desc: "<strong>Phân đoạn</strong> (12 l/p ở tá tràng, 8 l/p hồi tràng) nhào trộn dưỡng trấp. <strong>Nhu động</strong> co phía sau, giãn phía trước đẩy thức ăn ~1 cm/phút (Secretin & Glucagon ức chế!).", highlight: "Diện tích 250 m² (tăng 600 lần)" },
        { name: "2. Phối hợp Dịch Tụy (Secretin/CCK) & Muối mật", desc: "<strong>Secretin</strong> (pH < 4,5) kích thích ống tụy tiết <strong>NaHCO₃</strong>; <strong>CCK</strong> kích thích nang tụy tiết Enzyme & co túi mật. <strong>Enterokinase</strong> chuyển Trypsinogen → Trypsin.", highlight: "Dịch tụy KHÔNG có Pepsin!" },
        { name: "3. Hấp thu Carbohydrate (SGLT1 vs GLUT5) & Acid amin", desc: "<strong>Glucose/Galactose</strong> đồng vận chuyển Na⁺ qua <strong>SGLT1</strong>; <strong>Fructose</strong> khuếch tán hỗ trợ qua <strong>GLUT5 (không cần Na⁺)</strong> → tất cả qua <strong>GLUT2</strong> vào <strong>tĩnh mạch cửa</strong>.", highlight: "Cơ sở sinh lý dung dịch Oresol!" },
        { name: "4. Hấp thu Lipid: Hạt Micelle → Chylomicron → Bạch huyết", desc: "Muối mật tạo hạt <strong>Micelle</strong> đưa acid béo & 2-MG sát bờ bàn chải → vào tế bào tái tổng hợp Triglyceride đóng gói với Apo B48 thành <strong>CHYLOMICRON</strong> vào <strong>mạch bạch huyết</strong>!", highlight: "94% muối mật tái hấp thu ở Hồi tràng" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Bờ bàn chải tế bào ruột non -->
            <rect x="30" y="35" width="580" height="135" rx="14" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
            <text x="115" y="25" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">LÒNG RUỘT NON</text>
            <text x="320" y="25" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">TẾ BÀO NHUNG MAO (BỜ BÀN CHẢI)</text>
            <text x="530" y="25" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">MÁU CỬA vs BẠCH HUYẾT</text>

            <!-- Đường ranh giới bờ bàn chải & màng đáy -->
            <line x1="205" y1="35" x2="205" y2="170" stroke="var(--accent)" stroke-width="3" stroke-dasharray="4,3"/>
            <line x1="435" y1="35" x2="435" y2="170" stroke="var(--danger)" stroke-width="3"/>

            <!-- Luồng Đường (trên) -->
            <text x="118" y="65" text-anchor="middle" font-size="11" font-weight="700" fill="var(--primary)">Glucose/Galactose + Na⁺</text>
            <text x="118" y="83" text-anchor="middle" font-size="11" font-weight="700" fill="var(--purple)">Fructose (không cần Na⁺)</text>
            <rect x="190" y="54" width="32" height="16" rx="4" fill="#0284c7"/><text x="206" y="66" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">SGLT1</text>
            <rect x="190" y="75" width="32" height="16" rx="4" fill="#7c3aed"/><text x="206" y="87" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">GLUT5</text>
            <rect x="418" y="64" width="34" height="18" rx="4" fill="#0d9488"/><text x="435" y="77" text-anchor="middle" font-size="9" font-weight="800" fill="#fff">GLUT2</text>
            <text x="532" y="76" text-anchor="middle" font-size="11" font-weight="800" fill="#e11d48">→ MÁU TĨNH MẠCH CỬA</text>
            ${s === 2 ? `<circle cx="150" cy="62" r="5" fill="#0284c7"><animate attributeName="cx" from="120" to="480" dur="1.4s" repeatCount="indefinite"/></circle>` : ""}

            <!-- Luồng Mỡ (dưới) -->
            <circle cx="110" cy="132" r="22" fill="#fef3c7" stroke="#d97706" stroke-width="2" stroke-dasharray="3,2"/>
            <text x="110" y="136" text-anchor="middle" font-size="10.5" font-weight="800" fill="#b45309">Micelle</text>
            <text x="320" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#b45309">Tái tổng hợp TG + Apo B48</text>
            <circle cx="320" cy="150" r="11" fill="#fbbf24" stroke="#b45309" stroke-width="1.5"/>
            <text x="342" y="154" font-size="10.5" font-weight="800" fill="#b45309">Chylomicron</text>
            <text x="532" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="var(--accent)">→ MẠCH BẠCH HUYẾT!</text>
            ${s === 3 ? `<circle cx="240" cy="145" r="7" fill="#fbbf24" stroke="#b45309"><animate attributeName="cx" from="140" to="500" dur="1.5s" repeatCount="indefinite"/></circle>` : ""}
          </svg>
        `;
      }
    },

    13: {
      title: "🎬 Minh họa Cơ chế Thụ thể Màng (cAMP / IP₃ / Tyrosine Kinase) vs Thụ thể Nhân & Trục Hạ đồi-Yên",
      steps: [
        { name: "1. Hormon tan trong nước gắn Thụ thể GPCR (Nhanh)", desc: "Peptid & Catecholamine không qua được màng lipid nên gắn thụ thể màng GPCR → tạo chất truyền tin thứ hai <strong>cAMP (TSH, ACTH, ADH-V₂, Glucagon, β)</strong> hoặc <strong>IP₃/DAG/Ca²⁺ (TRH, GnRH, Oxytocin, α₁)</strong>.", highlight: "Tác động nhanh trong vài giây – phút" },
        { name: "2. Thụ thể Enzyme Tyrosine Kinase & JAK-STAT", desc: "<strong>Insulin, IGF-1</strong> gắn thụ thể Tyrosine kinase nội tại (2α2β) phosphoryl hóa IRS-1; còn <strong>GH, Prolactin, EPO</strong> kích hoạt chuỗi JAK2-STAT.", highlight: "Điều hòa tăng trưởng & chuyển hóa" },
        { name: "3. Hormon tan trong Lipid xuyên màng gắn Thụ thể Nội bào/Nhân", desc: "<strong>Steroid (từ Cholesterol)</strong> và <strong>T₃, T₄ (dẫn xuất Tyrosine nhưng tan trong lipid)</strong> khuếch tán qua màng gắn thụ thể bào tương/nhân → điều hòa <strong>phiên mã DNA → tổng hợp protein mới</strong>.", highlight: "Tác động chậm nhiều giờ nhưng kéo dài" },
        { name: "4. Trục Hạ đồi – Yên trước (Mạch cửa) vs Yên sau (Thần kinh)", desc: "Đứt cuống yên làm GH, TSH, ACTH, FSH, LH giảm, riêng <strong>Prolactin TĂNG</strong> (do mất ức chế của Dopamine). ADH & Oxytocin tổng hợp ở <strong>Hạ đồi</strong>, dự trữ ở yên sau.", highlight: "Tụy & Cận giáp độc lập với tuyến yên" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Nửa trái: Tan trong nước -->
            <rect x="20" y="20" width="290" height="165" rx="14" fill="${s <= 1 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="165" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">HORMON TAN TRONG NƯỚC (THỤ THỂ MÀNG)</text>
            <line x1="35" y1="78" x2="295" y2="78" stroke="#0284c7" stroke-width="5"/>
            <circle cx="95" cy="58" r="10" fill="#e11d48"/><text x="95" y="62" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">H</text>
            <rect x="85" y="68" width="20" height="22" rx="4" fill="#fbbf24"/>
            <text x="165" y="108" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--text-main)">Chất truyền tin thứ hai: cAMP | IP₃/Ca²⁺ | TyrK</text>
            <text x="165" y="136" text-anchor="middle" font-size="11" fill="var(--text-muted)">Phosphoryl hóa nhanh protein có sẵn (giây-phút)</text>
            ${s <= 1 ? `<circle cx="95" cy="100" r="6" fill="#0284c7"><animate attributeName="cy" from="82" to="145" dur="1.1s" repeatCount="indefinite"/></circle>` : ""}

            <!-- Nửa phải: Tan trong lipid -->
            <rect x="330" y="20" width="290" height="165" rx="14" fill="${s >= 2 ? "var(--purple-light)" : "var(--bg-card)"}" stroke="var(--purple)" stroke-width="2"/>
            <text x="475" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="var(--purple)">STERIOD &amp; T₃/T₄ (THỤ THỂ NỘI BÀO/NHÂN)</text>
            <line x1="345" y1="78" x2="605" y2="78" stroke="#7c3aed" stroke-width="5" stroke-dasharray="8,3"/>
            <circle cx="475" cy="132" r="34" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
            <text x="475" y="130" text-anchor="middle" font-size="11" font-weight="800" fill="#5b21b6">NHÂN (DNA)</text>
            <text x="475" y="148" text-anchor="middle" font-size="10" fill="#5b21b6">Phiên mã mRNA → Protein mới</text>
            ${s >= 2 ? `<circle cx="475" cy="56" r="9" fill="#0d9488"><animate attributeName="cy" from="56" to="122" dur="1.4s" repeatCount="indefinite"/></circle>` : ""}
          </svg>
        `;
      }
    },

    14: {
      title: "🎬 Minh họa 5 Bước Tổng hợp Hormon Giáp trong Nang giáp & Cơ chế PTU",
      steps: [
        { name: "1. Bắt giữ I⁻ (Bơm NIS màng đáy) → Vào lòng nang (Pendrin)", desc: "Tế bào nang giáp bơm I⁻ ngược bậc thang nồng độ gấp 30–250 lần qua đồng vận chuyển <strong>Na⁺/I⁻ (NIS)</strong>, rồi đẩy qua kênh <strong>Pendrin</strong> ở màng đỉnh vào lòng nang.", highlight: "Wolff-Chaikoff ức chế NIS & TPO" },
        { name: "2. Oxy hóa & Gắn Iod vào Thyroglobulin tại Lòng nang (TPO)", desc: "<strong>Enzyme Thyroperoxidase (TPO)</strong> ở bề mặt màng đỉnh trong lòng nang oxy hóa I⁻ → gắn vào gốc Tyrosine của <strong>Thyroglobulin</strong> tạo MIT, DIT rồi ghép đôi thành <strong>T₄ (90%) & T₃ (10%)</strong>.", highlight: "Dự trữ ngoài tế bào đủ dùng 2–3 tháng!" },
        { name: "3. Ẩm bào Chất keo & Giải phóng T₄, T₃ gắn TBG", desc: "Tế bào nang giáp ẩm bào giọt chất keo vào gặp Lysosome cắt giải phóng T₄, T₃ vào máu, gắn chủ yếu vào <strong>TBG</strong> (T₄ là dạng dự trữ lưu hành).", highlight: "PTU ức chế TPO → ↓T₄ → ↑TSH → To giáp" },
        { name: "4. Khử iod ngoại biên (5'-deiodinase) → T₃ hoạt tính tại Nhân", desc: "Tại mô đích, enzyme <strong>5'-deiodinase</strong> (bị PTU ức chế!) biến T₄ → <strong>T₃</strong> gắn thụ thể nhân tăng bơm Na⁺/K⁺-ATPase, tăng thụ thể β₁ tim và tăng thụ thể LDL gan (↓ Cholesterol).", highlight: "T₃ mạnh gấp 3–4 lần T₄" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Máu bên trái -->
            <rect x="20" y="25" width="110" height="155" rx="12" fill="#ffe4e6" stroke="#e11d48" stroke-width="2"/>
            <text x="75" y="52" text-anchor="middle" font-size="11.5" font-weight="800" fill="#9f1239">MÁU</text>
            <text x="75" y="95" text-anchor="middle" font-size="12" font-weight="700" fill="#9f1239">I⁻, Na⁺</text>
            <text x="75" y="135" text-anchor="middle" font-size="10.5" fill="#0369a1">T₄ (90%), T₃ (10%)</text>
            <text x="75" y="152" text-anchor="middle" font-size="10" fill="var(--text-muted)">gắn TBG</text>

            <!-- Tế bào nang giáp ở giữa -->
            <rect x="145" y="25" width="190" height="155" rx="12" fill="${s === 0 || s === 2 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="240" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">TẾ BÀO NANG GIÁP</text>
            <rect x="132" y="75" width="32" height="24" rx="5" fill="#0284c7"/><text x="148" y="91" text-anchor="middle" font-size="9.5" font-weight="800" fill="#fff">NIS</text>
            <rect x="318" y="75" width="38" height="24" rx="5" fill="#0d9488"/><text x="337" y="91" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">Pendrin</text>
            <circle cx="240" cy="135" r="18" fill="#ede9fe" stroke="#7c3aed" stroke-width="2"/>
            <text x="240" y="139" text-anchor="middle" font-size="9.5" font-weight="700" fill="#5b21b6">Lysosome</text>
            ${s === 0 ? `<circle cx="155" cy="87" r="6" fill="#fbbf24"><animate attributeName="cx" from="100" to="370" dur="1.3s" repeatCount="indefinite"/></circle>` : ""}
            ${s === 2 ? `<circle cx="290" cy="135" r="7" fill="#0d9488"><animate attributeName="cx" from="360" to="90" dur="1.3s" repeatCount="indefinite"/></circle>` : ""}

            <!-- Lòng nang giáp -->
            <rect x="352" y="25" width="138" height="155" rx="14" fill="${s === 1 ? "#fef3c7" : "#fef9c3"}" stroke="#d97706" stroke-width="2"/>
            <text x="421" y="48" text-anchor="middle" font-size="11.5" font-weight="800" fill="#b45309">LÒNG NANG GIÁP</text>
            <text x="421" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#92400e">Men TPO (trên Tg)</text>
            <text x="421" y="106" text-anchor="middle" font-size="10.5" fill="#78350f">I⁻ → I₂ + Tyrosine</text>
            <text x="421" y="128" text-anchor="middle" font-size="10.5" font-weight="700" fill="#b45309">→ MIT, DIT → T₄, T₃</text>
            <text x="421" y="155" text-anchor="middle" font-size="9.5" fill="var(--danger)">(PTU &amp; Methimazole ức chế)</text>

            <!-- Mô đích bên phải -->
            <rect x="505" y="25" width="118" height="155" rx="12" fill="${s === 3 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="var(--accent)" stroke-width="2"/>
            <text x="564" y="52" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--accent)">MÔ ĐÍCH</text>
            <text x="564" y="88" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">5'-deiodinase</text>
            <text x="564" y="108" text-anchor="middle" font-size="11" font-weight="800" fill="var(--danger)">T₄ → T₃ (Hoạt tính)</text>
            <text x="564" y="135" text-anchor="middle" font-size="10" fill="var(--text-muted)">Gắn Thụ thể Nhân</text>
            <text x="564" y="154" text-anchor="middle" font-size="9.5" fill="var(--danger)">(PTU ức chế men này)</text>
          </svg>
        `;
      }
    },

    15: {
      title: "🎬 Minh họa Cơ chế Tiết Insulin ở Tế bào Beta & Đưa GLUT4 lên màng Cơ/Mỡ",
      steps: [
        { name: "1. Glucose vào Tế bào Beta (GLUT2) → Tăng ATP/ADP", desc: "Khi đường huyết tăng (> 100 mg/dL), Glucose đi qua kênh <strong>GLUT2</strong> vào tế bào Beta, phosphoryl hóa bởi Glucokinase và tạo nhiều <strong>ATP</strong>.", highlight: "Tế bào Beta chiếm 65% đảo tụy" },
        { name: "2. Đóng Kênh Kir6.2 → Khử cực → Mở Ca²⁺ → Xuất bào Insulin", desc: "Tỉ số ATP/ADP tăng làm <strong>ĐÓNG kênh K⁺-ATP (Kir6.2)</strong> → khử cực màng → mở kênh Ca²⁺ → xuất bào <strong>Insulin + Peptid C (tỉ lệ 1:1)</strong>.", highlight: "Sulfonylurea cũng đóng Kir6.2!" },
        { name: "3. Insulin gắn Thụ thể Tyrosine Kinase đẩy GLUT4 lên Cơ/Mỡ", desc: "Tại <strong>Cơ xương & Mô mỡ</strong>, Insulin (hoặc co cơ khi tập thể dục!) đẩy túi chứa <strong>GLUT4</strong> lên màng tế bào để hút Glucose. <em>(Não dùng GLUT1/3 KHÔNG cần Insulin!)</em>.", highlight: "Típ 1 thiếu Insulin; Típ 2 kháng Insulin" },
        { name: "4. Gan 'Bộ phận Đệm Đường huyết' & Đối kháng Glucagon", desc: "Insulin hoạt hóa Glucokinase & Glycogen synthase ở Gan; khi đói (< 70 mg/dL) tế bào Alpha tiết <strong>Glucagon</strong> để gan (có men <strong>G-6-Pase</strong>) nhả glucose nuôi não.", highlight: "Cơ xương không có men G-6-Pase!" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Tế bào Beta -->
            <rect x="20" y="22" width="290" height="160" rx="14" fill="${s <= 1 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="165" y="44" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">TẾ BÀO BETA ĐẢO TỤY (TIẾT INSULIN)</text>
            <rect x="12" y="65" width="38" height="18" rx="4" fill="#0284c7"/><text x="31" y="78" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">GLUT2</text>
            <text x="165" y="78" text-anchor="middle" font-size="11" font-weight="700" fill="var(--text-main)">Glucose → ATP/ADP ↑ → ĐÓNG Kir6.2 (K⁺)</text>
            <text x="165" y="106" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">→ Khử cực → Mở Ca²⁺ → Xuất bào!</text>
            <circle cx="135" cy="145" r="14" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
            <text x="135" y="149" text-anchor="middle" font-size="9" font-weight="800" fill="#15803d">Ins+C</text>
            ${s === 1 ? `<circle cx="185" cy="145" r="7" fill="#16a34a"><animate attributeName="cx" from="155" to="315" dur="1.1s" repeatCount="indefinite"/></circle>` : ""}
            <text x="235" y="150" font-size="10.5" font-weight="700" fill="var(--accent)">Tỉ lệ 1:1</text>

            <!-- Tế bào Cơ/Mỡ & Gan -->
            <rect x="330" y="22" width="290" height="160" rx="14" fill="${s >= 2 ? "var(--accent-light)" : "var(--bg-card)"}" stroke="var(--accent)" stroke-width="2"/>
            <text x="475" y="44" text-anchor="middle" font-size="12" font-weight="800" fill="var(--accent)">CƠ XƯƠNG / MÔ MỠ (GLUT4) &amp; GAN</text>
            <rect x="322" y="66" width="38" height="18" rx="4" fill="#7c3aed"/><text x="341" y="79" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">TyrK-R</text>
            <rect x="${s >= 2 ? 322 : 410}" y="102" width="40" height="18" rx="4" fill="#0d9488"/>
            <text x="${s >= 2 ? 342 : 430}" y="115" text-anchor="middle" font-size="8.5" font-weight="800" fill="#fff">GLUT4</text>
            <text x="495" y="115" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--text-main)">${s >= 2 ? "← Trượt ra màng hút Glucose!" : "Nằm trong bào tương"}</text>
            <text x="475" y="146" text-anchor="middle" font-size="10.5" fill="var(--text-main)">• Não (GLUT1/3): Không cần Insulin</text>
            <text x="475" y="166" text-anchor="middle" font-size="10.5" fill="var(--danger)">• Chỉ Gan có G-6-Pase nhả đường lúc đói</text>
          </svg>
        `;
      }
    },

    16: {
      title: "🎬 Minh họa Cung Phản xạ Tủy 2 Neuron vs 3 Neuron & Mặt cắt Đường Dẫn truyền Tủy",
      steps: [
        { name: "1. Định luật Magendie & Cung Phản xạ Gân (2 Neuron, 1 Synapse)", desc: "Gõ gân bánh chè (L₃–L₄) kéo căng <strong>Thoi cơ</strong> → sợi <strong>Ia</strong> qua <strong>Rễ sau</strong> vào thẳng sừng trước tiếp hợp trực tiếp neuron vận động α → ra <strong>Rễ trước</strong> co cơ tứ đầu đùi <strong>duỗi cẳng chân</strong>.", highlight: "Đơn synapse: Tiềm tàng 0,5–0,9 ms" },
        { name: "2. Phản xạ Gân Golgi (3 Neuron, 2 Synapse) & Phản xạ Gấp", desc: "Cơ co quá căng kích thích thụ thể <strong>Golgi ở gân</strong> → sợi <strong>Ib</strong> kích thích <strong>neuron trung gian ức chế</strong> làm giãn cơ bảo vệ. Phản xạ gấp rút lui chi đau đồng thời duỗi chéo chi kia.", highlight: "Động vật tủy: Biên độ mạnh, 1 lần co!" },
        { name: "3. Đường Cảm giác Lên (Goll-Burdach vs Gai-Đồi thị)", desc: "<strong>Bó Goll & Burdach</strong> (cảm giác sâu có ý thức, xúc giác tinh tế) đi <strong>cùng bên ở cột sau lên Hành não mới bắt chéo</strong>. <strong>Bó Gai-Đồi thị</strong> (Đau, Nhiệt) <strong>bắt chéo NGAY TẠI TỦY</strong>!", highlight: "Hội chứng Brown-Séquard (Đứt nửa tủy)" },
        { name: "4. Bó Vận động Xuống (Tháp vs Ngoại tháp) & UMN / LMN", desc: "<strong>Bó Tháp</strong> điều khiển vận động tùy ý đối bên; <strong>Ngoại tháp</strong> (Đỏ-gai, Mái-gai từ củ não sinh tư, Tiền đình-gai) giữ thăng bằng. UMN: liệt cứng, Babinski (+); LMN: liệt mềm, teo cơ.", highlight: "Cắt C₁–C₂ → Liệt cơ hoành tử vong!" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Thiết diện cắt ngang Tủy gai -->
            <ellipse cx="185" cy="105" rx="135" ry="75" fill="#f8fafc" stroke="#475569" stroke-width="2.5"/>
            <!-- Chất xám hình chữ H -->
            <path d="M 135,55 Q 155,95 135,155 L 158,155 Q 170,115 200,115 Q 212,155 235,155 L 235,130 Q 210,100 235,55 L 212,55 Q 198,90 172,90 Q 155,55 135,55 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="1.5"/>
            <text x="185" y="45" text-anchor="middle" font-size="10" font-weight="800" fill="var(--primary)">Cột sau: Bó Goll &amp; Burdach (CÙNG BÊN)</text>
            <text x="90" y="110" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--danger)">Bó Tháp bên</text>
            <text x="278" y="138" text-anchor="middle" font-size="9.5" font-weight="700" fill="var(--accent)">Gai-Đồi thị</text>
            <text x="135" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">Rễ sau (Cảm giác)</text>
            <text x="242" y="172" text-anchor="middle" font-size="10" font-weight="700" fill="#475569">Rễ trước (Vận động)</text>
            ${s === 0 ? `<circle cx="155" cy="145" r="7" fill="#e11d48"><animate attributeName="cy" values="65;145;65" dur="1.2s" repeatCount="indefinite"/></circle>` : ""}

            <!-- Hộp tóm tắt tương tác bên phải -->
            <rect x="345" y="25" width="275" height="158" rx="12" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="2"/>
            <text x="482" y="48" text-anchor="middle" font-size="12" font-weight="800" fill="var(--primary)">ĐỊNH KHU &amp; PHÂN BIỆT NHANH</text>
            <text x="482" y="75" text-anchor="middle" font-size="11" fill="var(--text-main)">• Gân nhị đầu: C₅–C₆ | Tam đầu: C₇–C₈</text>
            <text x="482" y="96" text-anchor="middle" font-size="11" fill="var(--text-main)">• Gân bánh chè: L₃–L₄ (Duỗi cẳng chân)</text>
            <text x="482" y="117" text-anchor="middle" font-size="11" fill="var(--text-main)">• Gân gót: S₁–S₂ | Bàng quang: S₃–S₅</text>
            <text x="482" y="142" text-anchor="middle" font-size="11" font-weight="700" fill="var(--danger)">• Chớp mắt, ho: Thân não (KO phải tủy)</text>
            <text x="482" y="164" text-anchor="middle" font-size="11" font-weight="700" fill="var(--accent)">• UMN: Liệt cứng | LMN: Liệt mềm, teo cơ</text>
          </svg>
        `;
      }
    },

    17: {
      title: "🎬 Minh họa So sánh Cung dẫn truyền Giao cảm vs Đối giao cảm & Thụ thể Đích",
      steps: [
        { name: "1. Hệ Giao cảm: Sợi trước hạch NGẮN → Sợi sau hạch DÀI", desc: "Xuất phát liên tục từ sừng bên <strong>T₁–L₃</strong> → Hạch cạnh sống (Hạch sao) hoặc Hạch trước sống (Hạch tạng T₅–T₁₀) → tiết <strong>Norepinephrine</strong> (riêng tuyến mồ hôi tiết ACh!).", highlight: "Tủy thượng thận: 80% Epi + 20% NE" },
        { name: "2. Hệ Đối giao cảm: Sợi trước hạch DÀI → Sợi sau hạch CỰC NGẮN", desc: "Từ 3 trung khu rời nhau (Dây III; Dây VII, IX, <strong>X [75–80%]</strong>; Tủy cùng <strong>S₂–S₄</strong>) → Hạch nằm ngay trong thành tạng đích → tiết <strong>ACh gắn Muscarinic</strong>.", highlight: "Điều tiết mắt 100% do Đối giao cảm!" },
        { name: "3. Phân công Thụ thể Adrenergic (α₁ vs β₁ vs β₂)", desc: "<strong>α₁</strong>: Co mạch ngoại biên, giãn đồng tử, co cơ thắt. <strong>β₁</strong>: Tăng nhịp & co bóp tim. <strong>β₂</strong>: Giãn phế quản (Salbutamol; Propranolol gây co thắt!).", highlight: "Mạch máu chủ yếu chỉ có Giao cảm" },
        { name: "4. Hủy Giao cảm (Tụt HA nặng) & Tăng nhạy cảm cắt Hạch sao", desc: "Cắt giao cảm tim mạch làm mất trương lực co mạch → mạch giãn tối đa tụt HA trầm trọng. Cắt hạch sao sau 1 tuần làm <strong>tăng thụ thể α₁</strong> (tiêm NE gây co mạch mạnh hơn!).", highlight: "Trung khu cao cấp ở Vùng Hạ đồi" }
      ],
      renderSvg(s) {
        return `
          <svg viewBox="0 0 640 205" class="proc-svg">
            <!-- Hàng 1: Giao cảm -->
            <rect x="20" y="20" width="600" height="75" rx="12" fill="${s === 0 || s >= 2 ? "var(--danger-light)" : "var(--bg-card)"}" stroke="var(--danger)" stroke-width="2"/>
            <text x="105" y="45" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--danger)">GIAO CẢM (T₁–L₃)</text>
            <line x1="165" y1="56" x2="250" y2="56" stroke="#0284c7" stroke-width="4"/>
            <text x="207" y="44" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Ngắn (ACh→N)</text>
            <circle cx="262" cy="56" r="11" fill="#fbbf24" stroke="#b45309" stroke-width="2"/>
            <text x="262" y="82" text-anchor="middle" font-size="9.5" font-weight="700" fill="#92400e">Hạch sao / Hạch tạng</text>
            <line x1="275" y1="56" x2="465" y2="56" stroke="#e11d48" stroke-width="4"/>
            <text x="370" y="44" text-anchor="middle" font-size="9.5" font-weight="700" fill="#be123c">Sau hạch DÀI (Tiết NE — riêng mồ hôi tiết ACh)</text>
            <rect x="472" y="34" width="135" height="44" rx="8" fill="#fff" stroke="#e11d48"/>
            <text x="539" y="54" text-anchor="middle" font-size="10.5" font-weight="800" fill="#be123c">α₁ (Co mạch) | β₁ (Tim)</text>
            <text x="539" y="70" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0d9488">β₂ (Giãn phế quản)</text>

            <!-- Hàng 2: Đối giao cảm -->
            <rect x="20" y="110" width="600" height="75" rx="12" fill="${s === 1 ? "var(--primary-light)" : "var(--bg-card)"}" stroke="var(--primary)" stroke-width="2"/>
            <text x="105" y="135" text-anchor="middle" font-size="11.5" font-weight="800" fill="var(--primary)">ĐỐI GIAO CẢM</text>
            <text x="105" y="153" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">(III, VII, IX, X | S₂–S₄)</text>
            <line x1="165" y1="146" x2="415" y2="146" stroke="#0284c7" stroke-width="4"/>
            <text x="290" y="134" text-anchor="middle" font-size="9.5" font-weight="700" fill="#0369a1">Sợi trước hạch RẤT DÀI (Tiết ACh → Thụ thể Nicotinic)</text>
            <circle cx="427" cy="146" r="11" fill="#38bdf8" stroke="#0369a1" stroke-width="2"/>
            <line x1="439" y1="146" x2="470" y2="146" stroke="#0d9488" stroke-width="4"/>
            <rect x="472" y="124" width="135" height="44" rx="8" fill="#fff" stroke="#0284c7"/>
            <text x="539" y="144" text-anchor="middle" font-size="10.5" font-weight="800" fill="#0369a1">Hạch NGAY THÀNH TẠNG</text>
            <text x="539" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="#0f766e">ACh → Muscarinic (Atropin -)</text>
          </svg>
        `;
      }
    }
  },

  render(lessonId, container) {
    this.stopTimer();
    this.currentLessonId = lessonId;
    this.currentStep = 0;
    const spec = this.specs[lessonId];
    if (!container || !spec) return;

    this.mount(container, spec);
  },

  mount(container, spec) {
    const step = spec.steps[this.currentStep];
    const buttonsHtml = spec.steps
      .map(
        (st, idx) => `
      <button type="button" class="pill-btn ${idx === this.currentStep ? "active" : ""}" onclick="ProcessAnimations.goTo(${idx})">
        ${idx + 1}. ${st.name.split("–")[0].split(":")[0]}
      </button>`
      )
      .join("");

    container.innerHTML = `
      <div class="proc-box">
        <div class="proc-header">
          <div>
            <span class="sim-badge" style="background:var(--accent);">🎬 Bổ sung Trực quan Quá trình</span>
            <h3 style="font-size:17.5px;font-weight:800;margin-top:6px;color:var(--text-main);">${spec.title}</h3>
          </div>
          <div class="proc-controls">
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.prev()">⏮️ Trước</button>
            <button type="button" class="btn btn-primary" style="min-height:36px;padding:6px 12px;font-size:12.5px;" id="procPlayBtn" onclick="ProcessAnimations.togglePlay()">
              ${this.isPlaying ? "⏸️ Tạm dừng" : "▶️ Chạy minh họa"}
            </button>
            <button type="button" class="btn btn-outline" style="min-height:36px;padding:6px 10px;font-size:12.5px;" onclick="ProcessAnimations.next()">Tiếp ⏭️</button>
          </div>
        </div>

        <div class="pill-btn-group">${buttonsHtml}</div>

        <div class="svg-stage" style="margin:12px 0;">
          ${spec.renderSvg(this.currentStep)}
        </div>

        <div class="callout pearl" style="margin:0;">
          <div class="callout-title" style="justify-content:space-between;">
            <span>📌 ${step.name}</span>
            <span class="tag-pill" style="background:var(--accent);color:#fff;">💡 ${step.highlight}</span>
          </div>
          <p style="margin-top:4px;">${step.desc}</p>
        </div>
      </div>
    `;
  },

  goTo(idx) {
    const spec = this.specs[this.currentLessonId];
    const el = document.getElementById("procAnimContainer");
    if (!spec || !el) return;
    this.currentStep = (idx + spec.steps.length) % spec.steps.length;
    this.mount(el, spec);
  },

  next() {
    this.goTo(this.currentStep + 1);
  },

  prev() {
    this.goTo(this.currentStep - 1);
  },

  togglePlay() {
    if (this.isPlaying) {
      this.stopTimer();
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "▶️ Chạy minh họa";
    } else {
      this.isPlaying = true;
      const btn = document.getElementById("procPlayBtn");
      if (btn) btn.innerHTML = "⏸️ Tạm dừng";
      this.timer = setInterval(() => {
        if (!document.getElementById("procAnimContainer")) {
          this.stopTimer();
          return;
        }
        this.next();
      }, 3000);
    }
  }
};
