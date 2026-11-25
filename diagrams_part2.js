// Lessons 7-12 Textbook Figures & Annotated Medical Schemas (`1. SÁCH SINH LÝ 2025.pdf`)
window.DIAGRAMS_PART2 = {
  // ========================================================================
  // BÀI 7: TRAO ĐỔI KHÍ TẠI PHỔI & TUẦN HOÀN PHỔI (Bài 12 + Bài 13)
  // ========================================================================
  7: [
    {
      code: 'Hình 12.1',
      page: 'Bài 12 • tr.147',
      title: 'Bậc thang Phân áp Khí (PO2, PCO2, PH2O, PN2) từ Khí quyển tới Tế bào',
      summary: 'Không khí hít vào (PO2 = 159 mmHg) bị pha loãng bởi hơi nước bão hòa (47 mmHg) và khí cặn phế nang → PO2 phế nang còn 100 mmHg, khuếch tán qua máu tới mô (20–40 mmHg).',
      svg: {
        kind: 'flow',
        banner: 'Dòng thác Oxy & Dòng ngược CO2 (Đơn vị: mmHg)',
        nodes: [
          { title: 'Khí Hít vào khô', sub: 'PO2 = 159 • PCO2 = 0,3 • PN2 = 601', tone: 'blue' },
          { title: 'Khí Khí quản (bão hòa ẩm)', sub: 'PH2O = 47 mmHg → PiO2 = (760−47)×0,21 = 150', tone: 'teal' },
          { title: 'Phế nang (Trộn khí cặn + trao đổi)', sub: 'PAO2 = 100–104 • PACO2 = 40 mmHg', tone: 'green' },
          { title: 'Máu Động mạch & Mao mạch Mô', sub: 'PaO2 = 95–100 → PO2 mô/TB ~ 20–40 mmHg', tone: 'red' },
          { title: 'Máu Tĩnh mạch về Phổi', sub: 'PvO2 = 40 • PvCO2 = 45–46 mmHg', tone: 'purple' }
        ]
      },
      pins: [
        { n: 1, title: 'Tác động làm ẩm đường thở (PH2O = 47)', desc: 'Hơi nước chiếm ngay 47 mmHg ở 37°C khiến PiO2 giảm từ 159 xuống 150 mmHg trước khi tới phế nang.', x: 35, y: 40 },
        { n: 2, title: 'Phương trình Khí phế nang (PAO2)', desc: 'PAO2 = PiO2 − PaCO2 / R ≈ 150 − 40/0,8 = 100 mmHg. Giảm thông khí làm PACO2 tăng → kéo PAO2 tụt theo.', x: 54, y: 40 }
      ],
      takeaway: 'Thứ tự bậc PO2: Khí quyển (159) → Đường dẫn khí ẩm (150) → Phế nang (104) → Động mạch (95) → Tĩnh mạch/Mô (40).'
    },
    {
      code: 'Hình 12.2',
      page: 'Bài 12 • tr.148',
      title: 'Siêu cấu trúc Màng Phế nang – Mao mạch (Màng Hô hấp dày 0,6 µm)',
      summary: 'Màng trao đổi khí siêu mỏng (trung bình 0,6 µm, tối thiểu 0,2 µm) gồm 6–8 lớp nối tiếp cho phép khí khuếch tán nhanh theo định luật Fick.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Phế nang (PAO2 ≈ 104 mmHg • PACO2 ≈ 40 mmHg)',
        bottomLabel: 'Máu Mao mạch Phổi & Hồng cầu (Màng Hồng cầu)',
        memLabel: 'Màng Hô hấp tổng bề dày 0,2–0,6 µm (Diện tích ~70 m²)',
        channels: [
          { label: '1. Surfactant & Dịch lót', sub: 'Phế bào + Màng đáy biểu mô', dir: 'down', tone: 'teal', top: 'O2 đi vào', bottom: 'Qua 6 lớp màng' },
          { label: '2. Khoang Kẽ rất mỏng', sub: 'Phù phổi làm dày lớp này!', dir: 'down', tone: 'amber', top: 'Màng đáy dung hợp', bottom: 'Cản trở O2 nếu dày' },
          { label: '3. Nội mô Mao mạch', sub: 'Huyết tương + Màng hồng cầu', dir: 'both', tone: 'red', top: 'CO2 khuếch tán ra', bottom: 'O2 gắn Hb (Hệ số CO2 ×20 O2)' }
        ]
      },
      pins: [
        { n: 1, title: '6 lớp theo thứ tự từ Phế nang vào Máu', desc: '(1) Lớp dịch surfactant → (2) Biểu mô phế nang (Type I) → (3) Màng đáy biểu mô → (4) Khoảng kẽ → (5) Màng đáy mao mạch → (6) Nội mô mao mạch (thêm huyết tương & màng hồng cầu là 8 lớp).', x: 50, y: 48 },
        { n: 2, title: 'Hệ số khuếch tán CO2 gấp ~20 lần O2', desc: 'Do CO2 tan trong nước cao gấp ~24 lần O2 nên khi màng dày (xơ phổi, phù phổi), giảm O2 máu luôn xuất hiện SỚM HƠN ứ CO2.', x: 78, y: 50 }
      ],
      takeaway: 'Theo định luật Fick, tốc độ khuếch tán tỷ lệ thuận với ΔP, diện tích (70 m²), độ hòa tan và TỶ LỆ NGHỊCH với bề dày màng (0,6 µm).'
    },
    {
      code: 'Hình 12.3',
      page: 'Bài 12 • tr.149',
      title: 'Đồ thị Hấp thu CO, N2O và O2 dọc theo Mao mạch Phổi (0 → 0,75 giây)',
      summary: 'Mỗi hồng cầu ở lại mao mạch phổi trung bình 0,75 giây lúc nghỉ (0,25 giây khi gắng sức), nhưng O2 đã kịp cân bằng hoàn toàn chỉ sau 0,25 giây đầu tiên.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian máu chảy dọc mao mạch phổi (giây)',
        yLabel: 'Phân áp khí trong máu mao mạch (mmHg / %)',
        xTicks: [
          { x: 12, label: '0s (Đầu TM)' },
          { x: 40, label: '0,25s (Cân bằng O2)' },
          { x: 88, label: '0,75s (Cuối MM)' }
        ],
        yTicks: [
          { y: 15, label: '40' },
          { y: 55, label: '70' },
          { y: 88, label: '100 mmHg (Phế nang)' }
        ],
        vLines: [
          { x: 40, label: '0,25s: O2 cân bằng (dự trữ 0,5s)', color: '#dc2626' }
        ],
        curves: [
          { name: 'N2O (Giới hạn theo Tưới máu — Cân bằng 0,1s)', color: '#16a34a', pts: [[12, 15], [22, 86], [40, 88], [88, 88]] },
          { name: 'O2 Bình thường (Cân bằng 0,25s)', color: '#dc2626', pts: [[12, 34], [28, 76], [40, 88], [88, 88]] },
          { name: 'O2 khi Dày màng / Xơ phổi', color: '#d97706', dashed: true, pts: [[12, 34], [45, 58], [88, 72]] },
          { name: 'CO (Giới hạn theo Khuếch tán — DLCO)', color: '#2563eb', dashed: true, pts: [[12, 12], [50, 18], [88, 24]] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao dùng khí CO để đo khả năng khuếch tán (DLCO)?', desc: 'CO gắn cực chặt vào Hb nên phân áp P_CO hòa tan trong huyết tương gần như luôn bằng 0 → tốc độ chuyển CO hoàn toàn bị giới hạn bởi màng phế nang-mao mạch.', x: 76, y: 74 },
        { n: 2, title: 'Bệnh lý xơ phổi & gắng sức', desc: 'Khi gắng sức thời gian qua mao mạch rút còn 0,25s: người bình thường O2 vẫn kịp đạt 100 mmHg, nhưng người xơ phổi sẽ tụt SpO2 rõ khi gắng sức.', x: 40, y: 24 }
      ],
      takeaway: 'N2O giới hạn theo Tưới máu (Perfusion-limited); CO giới hạn theo Khuếch tán (Diffusion-limited → dùng đo DLCO); O2 bình thường dư thời gian gấp 3 lần (0,25s / 0,75s).'
    },
    {
      code: 'Hình 12.4',
      page: 'Bài 12 • tr.151',
      title: 'Thay đổi PCO2 dọc Mao mạch Phổi (Bình thường vs Bất thường)',
      summary: 'Máu tĩnh mạch trộn vào phổi có PvCO2 ≈ 45–46 mmHg, khuếch tán rất nhanh sang phế nang (PACO2 = 40 mmHg) và đạt cân bằng ngay trong ~0,25 giây đầu.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian dọc Mao mạch Phổi (0 → 0,75 giây)',
        yLabel: 'Phân áp CO2 máu (mmHg)',
        xTicks: [
          { x: 15, label: '0s (ĐM Phổi)' },
          { x: 42, label: '0,25s' },
          { x: 88, label: '0,75s (TM Phổi)' }
        ],
        yTicks: [
          { y: 25, label: '40 (Phế nang)' },
          { y: 75, label: '46 mmHg (TM trộn)' }
        ],
        hLines: [
          { y: 25, label: 'Mức PACO2 = 40 mmHg', color: '#16a34a' }
        ],
        curves: [
          { name: 'PCO2 Bình thường (Thải nhanh trong 0,25s)', color: '#2563eb', pts: [[12, 76], [26, 40], [42, 26], [88, 25]] },
          { name: 'Bất thường nặng (Giảm diện/dày màng cực nặng)', color: '#dc2626', dashed: true, pts: [[12, 76], [42, 54], [88, 40]] }
        ]
      },
      pins: [
        { n: 1, title: 'Chênh áp chỉ 5–6 mmHg nhưng thải cực nhanh', desc: 'Tuy ΔPCO2 (46 − 40 = 6 mmHg) nhỏ hơn ΔPO2 (104 − 40 = 64 mmHg) gấp 10 lần, CO2 khuếch tán nhanh hơn ~20 lần nhờ độ hòa tan cực cao.', x: 26, y: 40 },
        { n: 2, title: 'Nguyên nhân chính gây Tăng CO2 (PaCO2 ↑)', desc: 'Hiếm khi chỉ do dày màng đơn thuần mà chủ yếu do GIẢM THÔNG KHÍ PHẾ NANG hoặc rối loạn VA/Q nặng kèm suy bơm hô hấp.', x: 76, y: 66 }
      ],
      takeaway: 'Chênh áp PCO2 từ 46 → 40 mmHg chỉ cần ~0,25s để cân bằng nhờ khả năng hòa tan siêu cao của CO2.'
    },
    {
      code: 'Hình 13.1',
      page: 'Bài 13 • tr.156',
      title: 'Kháng lực Mạch máu Phổi (PVR) Giảm khi Áp lực ĐMP & Cung lượng tim Tăng',
      summary: 'Khác hẳn mạch hệ thống, khi cung lượng tim tăng gấp 4–5 lần lúc vận động, áp lực ĐMP tăng rất ít nhờ kháng lực mạch máu phổi (PVR) tự động tụt giảm mạnh.',
      svg: {
        kind: 'curve',
        xLabel: 'Áp lực Động mạch Phổi / Lưu lượng máu Phổi',
        yLabel: 'Kháng lực Mạch máu Phổi (PVR)',
        xTicks: [
          { x: 18, label: 'Thấp (Nghỉ)' },
          { x: 50, label: 'Bình thường' },
          { x: 86, label: 'Tăng cao (Gắng sức)' }
        ],
        yTicks: [
          { y: 20, label: 'Rất thấp' },
          { y: 85, label: 'Cao' }
        ],
        curves: [
          { name: 'Kháng lực Mạch máu Phổi PVR', color: '#0d9488', pts: [[14, 86], [28, 56], [50, 32], [75, 20], [90, 17]] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao PVR chỉ bằng ~1/10 mạch hệ thống?', desc: 'Thành tiểu ĐM phổi mỏng, ít cơ trơn, bán kính rộng và mao mạch có thể mở thêm dự trữ khi tăng áp lực.', x: 50, y: 44 },
        { n: 2, title: 'Ngăn phù phổi khi chạy bộ', desc: 'Nhờ PVR giảm khi tăng cung lượng tim, áp suất mao mạch phổi chỉ nhích nhẹ, không vượt áp suất keo huyết tương gây tràn dịch vào phế nang.', x: 80, y: 74 }
      ],
      takeaway: 'Tăng áp lực tưới máu phổi → PVR GIẢM (nhờ huy động thêm mao mạch mới & căng giãn mao mạch đang mở).'
    },
    {
      code: 'Hình 13.2',
      page: 'Bài 13 • tr.158',
      title: 'Ảnh hưởng Thể tích Phổi lên Kháng lực Mạch Ngoài Phế nang vs Phế nang (Đường cong chữ U)',
      summary: 'Tổng kháng lực mạch máu phổi đạt TỐI THIỂU ngay tại Dung tích Cặn Chức năng (FRC): phế nang quá căng (TLC) ép bẹp mao mạch phế nang; phổi quá xẹp (RV) làm xoắn vặn mạch ngoài phế nang.',
      svg: {
        kind: 'curve',
        xLabel: 'Thể tích Phổi (từ RV → FRC → TLC)',
        yLabel: 'Kháng lực Mạch máu Phổi (PVR)',
        xTicks: [
          { x: 18, label: 'RV (Xẹp)' },
          { x: 48, label: 'FRC (Tối ưu)' },
          { x: 86, label: 'TLC (Căng max)' }
        ],
        yTicks: [
          { y: 20, label: 'Tối thiểu' },
          { y: 85, label: 'Cao' }
        ],
        vLines: [
          { x: 48, label: 'PVR thấp nhất tại FRC', color: '#16a34a' }
        ],
        curves: [
          { name: 'Tổng PVR (Hình chữ U)', color: '#dc2626', pts: [[14, 82], [32, 42], [48, 26], [68, 42], [88, 84]] },
          { name: 'Mạch Phế nang (bị ép khi TLC cao)', color: '#2563eb', dashed: true, pts: [[14, 18], [48, 32], [88, 80]] }
        ]
      },
      pins: [
        { n: 1, title: 'Mạch Phế nang (Alveolar vessels)', desc: 'Nằm kẹp trong vách phế nang: khi hít căng hết mức tới TLC, phế nang phồng to ép dẹt các mao mạch này làm kháng lực tăng.', x: 84, y: 22 },
        { n: 2, title: 'Mạch Ngoài Phế nang (Extra-alveolar)', desc: 'Được giữ mở nhờ lực kéo hướng tâm của nhu mô phổi: khi phổi xẹp xuống RV, lực kéo mất → mạch co nhỏ xoắn lại làm tăng kháng lực.', x: 20, y: 22 }
      ],
      takeaway: 'Kháng lực mạch máu phổi thấp nhất ở FRC. Cả phổi quá xẹp (RV) lẫn phổi quá căng (PEEP/TLC quá cao) đều làm TĂNG PVR.'
    },
    {
      code: 'Hình 13.3',
      page: 'Bài 13 • tr.158',
      title: 'Hai Cơ chế Giảm PVR khi Tăng Áp lực: Huy động (Recruitment) & Căng giãn (Distension)',
      summary: 'Khi áp lực tưới máu ĐM phổi tăng nhẹ, các mao mạch vùng đỉnh phổi vốn đóng lúc nghỉ sẽ mở ra (Recruitment); khi tăng cao hơn nữa, lòng mao mạch tự nở to thêm (Distension).',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Huy động Mao mạch (Recruitment)', subtitle: 'Mở các mao mạch đang đóng (chủ yếu lúc mới tăng nhẹ)', tone: 'blue', bullets: ['Lúc nghỉ, nhiều mao mạch vùng đỉnh phổi đóng hoàn toàn hoặc hầu như không có máu chảy qua', 'Khi áp lực ĐMP nhích lên → mở thông hàng loạt tuyến đường song song mới → PVR tụt nhanh'] },
          { title: '2. Căng giãn Mao mạch (Distension)', subtitle: 'Mở rộng khẩu kính từng mao mạch (khi áp lực cao hơn)', tone: 'teal', bullets: ['Thành mao mạch phổi rất mỏng và mềm dẻo', 'Dưới áp lực cao (như lúc vận động mạnh), các mao mạch đang thông sẽ giãn rộng đường kính ra → giảm sức cản dòng chảy'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tăng diện tích trao đổi khí khi gắng sức', desc: 'Nhờ Recruitment ở đỉnh phổi, diện tích mao mạch tham gia trao đổi O2/CO2 tăng lên giúp DLCO tăng mạnh khi tập thể dục.', x: 26, y: 40 },
        { n: 2, title: 'Thứ tự xuất hiện', desc: 'Áp lực thấp tăng nhẹ: chủ yếu Huy động; Áp lực cao hơn nữa: chủ yếu Căng giãn.', x: 74, y: 50 }
      ],
      takeaway: 'Recruitment = mở thêm mao mạch mới đang đóng; Distension = giãn to đường kính mao mạch đang chảy → cả hai giúp giảm PVR.'
    },
    {
      code: 'Hình 13.4',
      page: 'Bài 13 • tr.159',
      title: 'Co Mạch Phổi do Giảm Oxy Phế nang (Hypoxic Pulmonary Vasoconstriction - HPV)',
      summary: 'Phản ứng ĐỘC NHẤT vô nhị của mạch phổi: khác mạch toàn thân giãn khi thiếu O2, tiểu ĐM phổi CO MẠCH khi PAO2 giảm (<70 mmHg) để điều hướng máu sang vùng phổi thông khí tốt.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Giảm O2 Khu trú 1 vùng phổi (Hữu ích)', subtitle: 'Ví dụ: Dị vật bít một nhánh phế quản thùy dưới', tone: 'green', bullets: ['PAO2 vùng tắc tụt thấp → Co tiểu ĐM nuôi vùng phế nang xẹp đó', 'Dòng máu tự động chuyển sang các phế nang lành thông khí tốt', 'Ngăn ngừa máu tĩnh mạch trộn lẫn chưa nhận O2 (Giảm Shunt)'] },
          { title: 'Giảm O2 Toàn bộ phổi (Bệnh lý nguy hiểm)', subtitle: 'Ví dụ: Lên núi cao, COPD toàn phổi, Ngưng thở khi ngủ', tone: 'red', bullets: ['Toàn bộ mạch phổi cùng co thắt mạnh → Tăng vọt áp lực ĐMP', 'Gây Tăng áp Động mạch Phổi → Phì đại và Suy thất phải (Tâm phế mạn / Cor pulmonale)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Cảm biến nằm ngay tại PHẾ NANG', desc: 'Chính PAO2 trong phế nang (không phải PaO2 động mạch) kích thích co mạch phổi qua ức chế kênh K⁺ làm mở kênh Ca²⁺ cơ trơn ĐM phổi.', x: 26, y: 38 },
        { n: 2, title: 'Hệ quả Tâm phế mạn ở COPD', desc: 'Thở oxy liều kiểm soát ở bệnh nhân COPD giúp đảo ngược HPV và hạ áp lực ĐM phổi.', x: 74, y: 66 }
      ],
      takeaway: 'Mạch hệ thống THIẾU O2 → GIÃN (tăng tưới mô); Mạch phổi THIẾU O2 → CO (né phế nang xẹp, nhưng giảm O2 toàn phổi gây Tâm phế mạn).'
    },
    {
      code: 'Hình 13.5',
      page: 'Bài 13 • tr.162',
      title: '3 Vùng Tuần hoàn Phổi theo Trọng lực (West Zones 1, 2, 3)',
      summary: 'Do cột thủy tĩnh trọng lực khi đứng thẳng (~23 mmHg chênh từ đỉnh tới đáy phổi), tương quan giữa áp suất Phế nang (PA), Động mạch (Pa) và Tĩnh mạch (Pv) chia phổi thành 3 vùng.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Vùng 1 (Đỉnh phổi — Sinh lý hầu như = 0)', subtitle: 'PA > Pa > Pv (Bị ép xẹp)', tone: 'red', bullets: ['Áp suất phế nang lớn hơn cả áp suất ĐM & TM phổi', 'Mao mạch bị bóp dẹt, không có máu chảy qua (Khoảng chết phế nang)', 'Gặp khi: Tụt huyết áp sốc mất máu nặng hoặc thở máy PEEP quá cao'] },
          { title: 'Vùng 2 (Phần giữa — Dòng kiểu Thác nước)', subtitle: 'Pa > PA > Pv', tone: 'amber', bullets: ['Pa > PA nhưng PA > Pv → lưu lượng phụ thuộc hiệu (Pa − PA)', 'Động mạch đập đủ thắng PA lúc tâm thu nên máu chảy ngắt quãng theo nhịp tim', 'Mực chuyển tiếp hạ xuống khi nằm hoặc gắng sức'] },
          { title: 'Vùng 3 (Đáy phổi — Dòng chảy liên tục)', subtitle: 'Pa > Pv > PA', tone: 'green', bullets: ['Áp suất ĐM và TM đều cao hơn PA → mao mạch mở căng liên tục', 'Lưu lượng chảy mạnh nhất, phụ thuộc hiệu (Pa − Pv)', 'Chiếm đa số ở phần thấp phổi lúc đứng & toàn bộ phổi lúc nằm'] }
        ]
      },
      pins: [
        { n: 1, title: 'Quy tắc nhớ nhanh 3 vùng West', desc: 'Xếp theo thứ tự giảm dần từ trên xuống: Vùng 1 (PA đứng đầu) → Vùng 2 (PA ở giữa) → Vùng 3 (PA đứng cuối).', x: 50, y: 20 },
        { n: 2, title: 'Ứng dụng lâm sàng đặt Swan-Ganz', desc: 'Đầu ống thông đo áp lực mao mạch phổi bít (PCWP) phải nằm ở Vùng 3 để cột máu thông suốt với nhĩ trái, không bị PA chèn ép sai số.', x: 82, y: 66 }
      ],
      takeaway: 'Vùng 1: PA > Pa > Pv (không chảy/khoảng chết). Vùng 2: Pa > PA > Pv (thác nước). Vùng 3: Pa > Pv > PA (chảy liên tục mạnh nhất).'
    },
    {
      code: 'Hình 13.6',
      page: 'Bài 13 • tr.163',
      title: 'Biến thiên Tỷ số Thông khí / Tưới máu (VA/Q) từ Đỉnh (3,6) tới Đáy phổi (0,6)',
      summary: 'Khi đứng, cả Thông khí (VA) và Tưới máu (Q) đều tăng dần từ đỉnh xuống đáy, NHƯNG tưới máu tăng dốc hơn thông khí → VA/Q rất cao ở đỉnh (~3,4–3,6) và thấp ở đáy (~0,6).',
      svg: {
        kind: 'curve',
        xLabel: 'Vị trí từ Đáy phổi → Giữa phổi → Đỉnh phổi (tư thế đứng)',
        yLabel: 'Thông khí VA, Tưới máu Q & Tỷ số VA/Q',
        xTicks: [
          { x: 16, label: 'Đáy phổi (VA/Q = 0,6)' },
          { x: 50, label: 'Giữa (VA/Q = 0,8–1,0)' },
          { x: 86, label: 'Đỉnh phổi (VA/Q = 3,6)' }
        ],
        yTicks: [
          { y: 15, label: 'Thấp' },
          { y: 50, label: 'TB' },
          { y: 88, label: 'Cao' }
        ],
        curves: [
          { name: 'Tưới máu Q (tụt rất mạnh lên đỉnh)', color: '#dc2626', pts: [[14, 88], [50, 50], [88, 12]] },
          { name: 'Thông khí VA (giảm nhẹ lên đỉnh)', color: '#2563eb', pts: [[14, 62], [50, 48], [88, 32]] },
          { name: 'Tỷ số VA/Q (Đỉnh cao → PaO2=130)', color: '#16a34a', dashed: true, pts: [[14, 24], [50, 44], [88, 86]] }
        ]
      },
      pins: [
        { n: 1, title: 'Vì sao lao phổi hay khu trú ở ĐỈNH phổi?', desc: 'Do VA/Q vùng đỉnh cao (~3,3–3,6) nên PAO2 tại đỉnh phổi đạt tới ~130 mmHg (so với ~88 mmHg ở đáy), rất thuận lợi cho trực khuẩn lao ái khí phát triển.', x: 84, y: 24 },
        { n: 2, title: 'Tại sao đáy phổi thông khí tốt hơn đỉnh lúc nghỉ?', desc: 'Nhờ trọng lực làm Ppl ở đáy ít âm hơn đỉnh → phế nang ở đáy nhỏ hơn lúc nghỉ nên còn độ giãn dự trữ lớn khi hít vào.', x: 20, y: 40 }
      ],
      takeaway: 'Từ Đáy → Đỉnh: Q giảm nhanh hơn VA → Đỉnh phổi có VA/Q ≈ 3,3–3,6 (giàu O2 nhất: ~130 mmHg); Đáy phổi có VA/Q ≈ 0,6 (~88 mmHg).'
    },
    {
      code: 'Hình 13.7',
      page: 'Bài 13 • tr.164',
      title: '3 Trạng thái VA/Q: Bình thường (0,8), VA/Q thấp (Shunt) & VA/Q cao (Khoảng chết)',
      summary: 'Mọi bất tương xứng thông khí – tưới máu đều làm giảm hiệu quả trao đổi khí và tăng bậc thang A-a DO2.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'VA/Q → 0 (Shunt sinh lý)', subtitle: 'Tắc thông khí (Tắc đàm, Xẹp phổi, Viêm phổi)', tone: 'red', bullets: ['Máu vẫn chảy qua phế nang không có khí (VA = 0)', 'Máu ra khỏi phế nang vẫn mang thành phần tĩnh mạch: PO2 = 40, PCO2 = 46 mmHg', 'Đáp ứng KÉM khi cho thở O2 100% (trừ shunt thật sự)'] },
          { title: 'VA/Q ≈ 0,8–1,0 (Bình thường)', subtitle: 'Cân bằng Thông khí ↔ Tưới máu', tone: 'green', bullets: ['VA ~ 4 L/phút, Q ~ 5 L/phút → VA/Q = 0,8', 'Máu mao mạch cân bằng hoàn hảo: PO2 = 100, PCO2 = 40 mmHg'] },
          { title: 'VA/Q → ∞ (Khoảng chết Phế nang)', subtitle: 'Tắc tưới máu (Thuyên tắc Động mạch phổi)', tone: 'blue', bullets: ['Khí ra vào phế nang bình thường nhưng KHÔNG có máu tới trao đổi (Q = 0)', 'Khí phế nang giữ nguyên như khí hít vào ẩm: PO2 = 150, PCO2 = 0 mmHg', 'Làm tăng khoảng chết sinh lý, thở nhanh nông vô ích'] }
        ]
      },
      pins: [
        { n: 1, title: 'Nghiệm pháp thở O2 100% phân biệt', desc: 'Shunt (tắc phế nang toàn phần) KHÔNG cải thiện nhiều PaO2 khi thở O2 100% vì máu không đi qua được vùng thông khí.', x: 18, y: 66 },
        { n: 2, title: 'Thuyên tắc phổi (PE) tạo Khoảng chết', desc: 'Cục huyết khối chặn ĐM phổi → Q = 0 tại thùy phổi đó → VA/Q = ∞.', x: 82, y: 66 }
      ],
      takeaway: 'Shunt (VA/Q = 0): Tắc đường thở (giống máu tĩnh mạch: PO2 40, PCO2 46). Khoảng chết (VA/Q = ∞): Tắc mạch phổi (giống khí hít: PO2 150, PCO2 0).'
    },
    {
      code: 'Hình 13.8',
      page: 'Bài 13 • tr.164',
      title: 'Hệ quả "Thừa Khí" (Wasted Ventilation) và "Thừa Máu" (Wasted Blood)',
      summary: 'Minh họa gánh nặng bù trừ khi có bất cân xứng VA/Q: vùng VA/Q cao gây lãng phí công cơ hô hấp (thừa khí), vùng VA/Q thấp gây giảm O2 máu động mạch hệ thống (thừa máu chưa bão hòa).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Thừa Máu (Wasted Blood — VA/Q thấp)', subtitle: 'Shunt phải → trái mức phế nang', tone: 'red', bullets: ['Máu đi qua phế nang thông khí kém không bão hòa hết O2 → kéo tụt PaO2 chung', 'Mặt dẹt trên đường cong Hb-O2 khiến vùng lành tăng thông khí cũng KHÔNG bù thêm O2 được cho Hb (vốn đã bão hòa ~98%)', 'Tăng PaO2 nhẹ nhờ thở O2 nếu chỉ VA/Q thấp một phần'] },
          { title: 'Thừa Khí (Wasted Air — VA/Q cao)', subtitle: 'Tăng khoảng chết sinh lý (VD/VT ↑)', tone: 'amber', bullets: ['Phần khí vào phế nang thiếu máu chỉ đi ra vô ích (không thải được CO2)', 'Cơ thể phải TĂNG TỔNG THÔNG KHÍ PHÚT để giữ PaCO2 = 40 mmHg → bệnh nhân mau kiệt sức cơ hô hấp'] }
        ]
      },
      pins: [
        { n: 1, title: 'Vì sao bất tương xứng VA/Q hay gây Giảm O2 hơn Ứ CO2?', desc: 'Đường phân ly CO2 gần như tuyến tính (tăng thở ở vùng lành thải bù CO2 được), còn đường cong Hb-O2 bị bão hòa trần 100% ở vùng lành nên KHÔNG bù O2 cho vùng shunt được!', x: 26, y: 50 },
        { n: 2, title: 'Tăng thông khí bù trừ', desc: 'Khi CO2 máu nhích nhẹ, trung khu hô hấp kích thích thở nhanh sâu hơn để thải đủ CO2 qua các vùng còn tưới máu tốt.', x: 74, y: 50 }
      ],
      takeaway: 'Do đường cong Barcroft có đoạn bình nguyên (trần 100%), phế nang lành KHÔNG thể bão hòa >100% để bù cho phế nang bị Shunt!'
    }
  ],

  // ========================================================================
  // BÀI 8: CHUYÊN CHỞ KHÍ O2 & CO2 TRONG MÁU (Bài 14)
  // ========================================================================
  8: [
    {
      code: 'Hình 14.1',
      page: 'Bài 14 • tr.166',
      title: 'Các Dạng Chuyên chở O2 và CO2 trong Máu (Tỷ lệ %)',
      summary: 'Mỗi khí được chuyên chở dưới dạng hòa tan vật lý (tạo ra phân áp PO2/PCO2) và dạng gắn hóa học (dự trữ vận chuyển chính).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Chuyên chở OXY (Tổng ~20 mL/dL ĐM)', subtitle: '98,5% gắn Hb + 1,5% Hòa tan', tone: 'red', bullets: ['1. Oxyhemoglobin HbO2 (~98,5%): ~19,7 mL O2/dL (1g Hb gắn tối đa 1,34–1,39 mL O2)', '2. Dạng Hòa tan (~1,5%): 0,3 mL O2/dL ở PaO2 = 100 mmHg', 'Chính dạng Hòa tan tạo nên PaO2 và khuếch tán trực tiếp vào tế bào!'] },
          { title: 'Chuyên chở CO2 (Tổng ~48–52 mL/dL TM)', subtitle: '70% HCO3⁻ + 23% HbCO2 + 7% Hòa tan', tone: 'blue', bullets: ['1. Bicarbonate huyết tương HCO3⁻ (~70%): nhờ men Carbonic Anhydrase (CA) trong hồng cầu', '2. Carbaminohemoglobin HbCO2 (~23%): CO2 gắn nhóm NH2 đầu chuỗi globin (KHÔNG gắn nhân Hem!)', '3. Dạng Hòa tan vật lý (~7%): ~2,7 mL/dL (cao gấp 20 lần độ tan O2)'] }
        ]
      },
      pins: [
        { n: 1, title: '1g Hb gắn 1,34 mL O2', desc: 'Với Hb = 15 g/dL và SaO2 = 98%: CaO2 ≈ (15 × 1,34 × 0,98) + (0,003 × 100) ≈ 20 mL O2/dL máu động mạch.', x: 26, y: 40 },
        { n: 2, title: 'Vị trí gắn CO2 trên Hb (nhóm Amin −NH2)', desc: 'CO2 không cạnh tranh chỗ gắn Fe²⁺ với O2! Nó gắn nhóm amin đầu tận tạo Carbamino-Hb, và dạng Deoxy-Hb gắn CO2 mạnh gấp 3,5 lần Oxy-Hb.', x: 74, y: 50 }
      ],
      takeaway: 'O2: 98,5% HbO2 + 1,5% hòa tan. CO2: 70% HCO3⁻ + 23% Carbamino-Hb + 7% hòa tan (CO2 gắn vào NH2 globin, KHÔNG gắn nhân Hem).'
    },
    {
      code: 'Hình 14.2',
      page: 'Bài 14 • tr.167',
      title: 'Tương quan Tuyến tính O2 Hòa tan theo Phân áp PO2 (0,003 mL/dL/mmHg)',
      summary: 'Theo định luật Henry, lượng O2 hòa tan tỷ lệ thuận tuyến tính với PO2; tăng đột biến khi thở oxy cao áp (nhưng dễ gây ngộ độc O2 phổi/não ở >2–3 atm).',
      svg: {
        kind: 'curve',
        xLabel: 'Phân áp O2 (PO2 mmHg)',
        yLabel: 'Thể tích O2 hòa tan (mL O2 / 100 mL máu)',
        xTicks: [
          { x: 12, label: '100 (Khí trời)' },
          { x: 45, label: '600 (O2 100%)' },
          { x: 86, label: '2000 (Cao áp 3 atm)' }
        ],
        yTicks: [
          { y: 15, label: '0,3' },
          { y: 42, label: '2,0' },
          { y: 88, label: '6,0 mL/dL' }
        ],
        zones: [
          { x1: 68, x2: 95, tone: 'red', label: 'Vùng ngộ độc O2 (Co giật / Tổn thương phổi)' }
        ],
        curves: [
          { name: 'O2 Hòa tan = 0,003 × PO2 (Tuyến tính)', color: '#dc2626', pts: [[10, 12], [45, 42], [88, 86]] }
        ]
      },
      pins: [
        { n: 1, title: 'Điều trị Ngộ độc CO bằng Oxy cao áp', desc: 'Ở PO2 = 2000 mmHg (3 atm), riêng lượng O2 hòa tan đạt tới 6 mL/dL — đủ nuôi cơ thể lúc nghỉ ngay cả khi Hb bị CO khóa hoàn toàn!', x: 64, y: 38 },
        { n: 2, title: 'Nguy cơ ngộ độc O2 (Gốc tự do ROS)', desc: 'Thở FiO2 > 60% kéo dài hoặc oxy cao áp gây quá tải gốc tự do phá màng phế nang (ARDS) và co giật thần kinh trung ương.', x: 82, y: 24 }
      ],
      takeaway: 'O2 hòa tan = 0,003 × PO2 (mL/dL): tuy chỉ 0,3 mL/dL ở PO2 100 mmHg nhưng có vai trò quyết định phân áp trao đổi & trị ngộ độc CO ở áp suất cao.'
    },
    {
      code: 'Hình 14.3',
      page: 'Bài 14 • tr.167',
      title: 'Cơ chế Gắn Thuận nghịch O2 lên Fe²⁺ của Nhân Hem (Hợp tác đồng lập thể)',
      summary: 'Hb đổi giữa trạng thái T (Tense — ái lực thấp ở mô) và trạng thái R (Relaxed — ái lực cao ở phổi); gắn 1 O2 đầu làm ái lực 3 vị trí còn lại tăng vọt ~300 lần.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 270, h: 120, label: 'Trạng thái T (Tense / Deoxy-Hb)', sub: 'Chuỗi globin gắn chặt 2,3-DPG & H⁺\n→ Ái lực O2 thấp → Dễ NHẢ O2 cho mô', tone: 'blue' },
          { x: 370, y: 40, w: 270, h: 120, label: 'Trạng thái R (Relaxed / Oxy-Hb)', sub: 'Đẩy 2,3-DPG ra, Fe²⁺ kéo phẳng vòng Hem\n→ Ái lực O2 gấp ~300 lần → HÚT O2 tại phổi', tone: 'red' },
          { x: 90, y: 195, w: 500, h: 95, label: 'Hiện tượng Hợp tác Dương tính (Positive Cooperativity)', sub: 'Gắn từng bước: Hb + O2 → Hb(O2)2 → Hb(O2)3 → Hb(O2)4 tạo nên Đường cong Hình Sigmoid (chữ S) của Barcroft!', tone: 'amber' }
        ],
        links: [
          { x1: 310, y1: 100, x2: 368, y2: 100, label: '+ O2 (Ở Phổi)', color: '#dc2626' }
        ]
      },
      pins: [
        { n: 1, title: 'Đổi cấu hình T ↔ R giải thích hình chữ S', desc: 'Myoglobin chỉ có 1 tiểu đơn vị nên không có tính hợp tác → đường cong dạng Hyperbol; Hb có 4 tiểu đơn vị nên tạo đường chữ S.', x: 50, y: 74 },
        { n: 2, title: 'Khí CO khóa chặt trạng thái R', desc: 'CO ái lực gấp ~210–250 lần O2, khi gắn 1 vị trí lại ép 3 vị trí kia kẹt ở trạng thái R không chịu nhả O2 cho mô (dịch đường cong sang TRÁI!).', x: 76, y: 34 }
      ],
      takeaway: 'Tính hợp tác dương giữa 4 tiểu đơn vị Hb tạo nên dạng đường cong chữ S (Sigmoid), trong khi Myoglobin có đường cong Hyperbol.'
    },
    {
      code: 'Hình 14.4',
      page: 'Bài 14 • tr.168',
      title: 'Đường cong Phân ly Oxyhemoglobin (Đường cong Barcroft)',
      summary: 'Phần trên phẳng (PO2 70–100 mmHg → SaO2 vẫn 93–98%: an toàn khi lên cao/suy hô hấp nhẹ); phần giữa dốc đứng (PO2 20–60 mmHg → nhả O2 mạnh cho mô hoạt động).',
      imgSrc: 'assets/figures/fig_hb_o2.png',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Mốc ĐỘNG MẠCH: PO2 = 95–100 → SaO2 ≈ 97,5%', desc: 'Đoạn bình nguyên giúp giữ bão hòa O2 > 90% dù PO2 giảm xuống ~60 mmHg (cơ sở ngưỡng suy hô hấp PaO2 < 60 mmHg).', x: 72, y: 20 },
        { n: 2, title: 'Mốc TĨNH MẠCH NGHỈ: PO2 = 40 → SvO2 ≈ 75%', desc: 'Mỗi lít máu chỉ nhả ~25% O2 lúc nghỉ (5 mL/dL), còn dự trữ 75% cho khi gắng sức.', x: 45, y: 40 },
        { n: 3, title: 'Điểm P50 ≈ 26–27 mmHg (50% bão hòa)', desc: 'P50 là thước đo ái lực Hb–O2: P50 TĂNG = đường cong dịch PHẢI (dễ nhả O2); P50 GIẢM = dịch TRÁI (giữ chặt O2).', x: 35, y: 58 }
      ],
      takeaway: 'Nhớ 3 mốc vàng Barcroft: PO2 100→98%, PO2 60→90%, PO2 40→75%, P50 ≈ 27 mmHg.'
    },
    {
      code: 'Hình 14.5',
      page: 'Bài 14 • tr.169',
      title: 'Sự Dịch chuyển Đường cong Barcroft (Hiệu ứng Bohr & Các yếu tố)',
      summary: 'Mô đang hoạt động mạnh nóng hơn, tăng CO2, toan hóa (↓ pH) và tăng 2,3-DPG → đẩy đường cong sang PHẢI để ép Hb nhả nhiều O2 hơn ngay tại chỗ.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Dịch TRÁI (Ái lực ↑ → Giữ chặt O2)', subtitle: 'P50 giảm (< 26 mmHg)', tone: 'blue', bullets: ['↑ pH (Kiềm máu), ↓ PCO2 (Tại phổi)', '↓ Nhiệt độ (Hạ thân nhiệt)', '↓ 2,3-DPG (Máu truyền dự trữ lâu ngày)', 'HbF bào thai & Ngộ độc khí CO'] },
          { title: 'Dịch PHẢI (Ái lực ↓ → Nhả mạnh O2 cho mô)', subtitle: 'P50 tăng (> 28 mmHg)', tone: 'red', bullets: ['↓ pH (Toan máu), ↑ PCO2 → HIỆU ỨNG BOHR tại mô', '↑ Nhiệt độ (Sốt, Cơ vận động nóng lên)', '↑ 2,3-DPG (Thiếu máu mạn, Sống vùng núi cao, Gắng sức)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Mẹo nhớ CADET dịch PHẢI (face Right)', desc: 'C (CO2 tăng), A (Acid / giảm pH), D (2,3-DPG tăng), E (Exercise - vận động), T (Temperature - tăng nhiệt độ) đều kéo đường cong sang PHẢI!', x: 74, y: 40 },
        { n: 2, title: 'Tại sao HbF dịch TRÁI?', desc: 'Chuỗi γ của HbF gắn kém với 2,3-DPG hơn chuỗi β của HbA → HbF có ái lực cao hơn, rút dễ dàng O2 từ máu mẹ qua bánh nhau.', x: 26, y: 66 }
      ],
      takeaway: 'Hiệu ứng Bohr: Tăng H⁺ / CO2 tại mô làm GIẢM ái lực Hb-O2 (dịch PHẢI) → thúc đẩy nhả O2 đúng nơi đang cần nhất!'
    },
    {
      code: 'Hình 14.6',
      page: 'Bài 14 • tr.173',
      title: 'Khuếch tán O2 từ Mao mạch (95 → 40 mmHg) tới Dịch kẽ và Tế bào (23 mmHg)',
      summary: 'Do tế bào liên tục tiêu thụ O2 ở ty thể (~1–3 mmHg), chênh áp PO2 rất lớn từ mao mạch (95→40) sang dịch kẽ (40) và vào bào tương (~23 mmHg) đẩy nhanh O2 vào tế bào.',
      svg: {
        kind: 'flow',
        banner: 'Gradient Oxy từ Đầu Mao mạch tới Ty thể Tế bào',
        nodes: [
          { title: 'Đầu ĐM Mao mạch Mô', sub: 'PO2 = 95 mmHg (Hòa tan + HbO2)', tone: 'red' },
          { title: 'Dịch kẽ quanh Mao mạch', sub: 'PO2 ~ 40 mmHg (Cân bằng với đầu TM)', tone: 'amber' },
          { title: 'Bên trong Tế bào (Bào tương)', sub: 'PO2 TB ~ 23 mmHg (5–40 mmHg)', tone: 'blue' },
          { title: 'Ty thể (Phản ứng Hô hấp)', sub: 'Chỉ cần 1–3 mmHg để tổng hợp đủ ATP!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Vùng nguy hiểm khi Tốc độ máu giảm / Phù kẽ', desc: 'Khi mô phù nề, khoảng cách mao mạch – tế bào dãn rộng; tế bào xa mao mạch nhất rơi vào thiếu O2 sớm nhất.', x: 42, y: 50 },
        { n: 2, title: 'Áp suất Oxy tới hạn ở Ty thể', desc: 'Ty thể chỉ cần ~1–3 mmHg O2 để chạy chuỗi hô hấp, nhưng cần PO2 mao mạch > 20–40 mmHg mới duy trì được áp lực đẩy đi.', x: 82, y: 50 }
      ],
      takeaway: 'Thứ tự bậc PO2 tại mô: Mao mạch (95→40) → Dịch kẽ (40) → Bào tương (~23) → Ty thể (1–3 mmHg).'
    },
    {
      code: 'Hình 14.7',
      page: 'Bài 14 • tr.173',
      title: 'Máu Mao mạch Lấy CO2 từ Tế bào (46 → 45 mmHg)',
      summary: 'CO2 khuếch tán cực nhanh theo chiều ngược lại: Tế bào (~46 mmHg) → Dịch kẽ (~45 mmHg) → Máu mao mạch (từ 40 lên 45 mmHg ở cuối tĩnh mạch).',
      svg: {
        kind: 'flow',
        banner: 'Khuếch tán CO2 ngược chiều O2 (Chênh áp nhỏ chỉ 5–6 mmHg)',
        nodes: [
          { title: 'Trong Tế bào chuyển hóa', sub: 'PCO2 ~ 46 mmHg (Liên tục sinh từ chu trình Krebs)', tone: 'purple' },
          { title: 'Dịch kẽ quanh tế bào', sub: 'PCO2 ~ 45 mmHg', tone: 'amber' },
          { title: 'Đầu ĐM Mao mạch (Vào mô)', sub: 'PaCO2 = 40 mmHg → Chênh áp kéo CO2 vào máu', tone: 'red' },
          { title: 'Đầu Tĩnh mạch (Ra khỏi mô)', sub: 'PvCO2 = 45 mmHg (Thải ~4 mL CO2 / dL máu lúc nghỉ)', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Chênh áp chỉ 1 mmHg giữa TB và Dịch kẽ', desc: 'Vì độ tan & hệ số khuếch tán CO2 gấp 20 lần O2, chỉ cần chênh lệch 46 → 45 mmHg là đủ đẩy toàn bộ CO2 ra khỏi tế bào.', x: 25, y: 50 },
        { n: 2, title: 'Thải 4 mL CO2/dL ↔ Tiêu thụ 5 mL O2/dL', desc: 'Tương ứng thương số hô hấp RQ = VCO2 / VO2 ≈ 0,8 trên chế độ ăn hỗn hợp.', x: 80, y: 50 }
      ],
      takeaway: 'PCO2 tăng từ 40 mmHg (động mạch) lên 45 mmHg (tĩnh mạch) nhờ chênh áp 46→45 mmHg ở tế bào-dịch kẽ.'
    },
    {
      code: 'Hình 14.8',
      page: 'Bài 14 • tr.174',
      title: 'Hiện tượng Hamburger (Trao đổi Cl⁻–HCO3⁻) tại Mô (B) và tại Phổi (A)',
      summary: 'CO2 vào hồng cầu được Carbonic Anhydrase (CA) chuyển thành H2CO3 → H⁺ + HCO3⁻; sau đó HCO3⁻ đi ra huyết tương đổi lấy Cl⁻ đi vào hồng cầu qua kênh Band 3 để giữ cân bằng điện tích.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Tại Mao mạch MÔ (Nạp CO2)', subtitle: 'Cl⁻ đi VÀO hồng cầu (Chloride Shift)', tone: 'blue', bullets: ['CO2 mô vào hồng cầu + H2O →(CA)→ H⁺ + HCO3⁻', 'H⁺ được Deoxy-Hb đệm thành HHb (sau khi vừa nhả O2)', 'HCO3⁻ xuất ra huyết tương (70% tổng vận chuyển CO2), đồng thời Cl⁻ đi VÀO hồng cầu qua kênh Band 3 → MCV hồng cầu TM hơi trương nhẹ!'] },
          { title: 'Tại Mao mạch PHỔI (Thải CO2)', subtitle: 'Cl⁻ đi RA khỏi hồng cầu (Reverse Shift)', tone: 'red', bullets: ['O2 từ phế nang vào gắn Hb → HHb chuyển thành HbO2 và đẩy H⁺ ra (Haldane)', 'HCO3⁻ từ huyết tương đi ngược VÀO hồng cầu (đẩy Cl⁻ RA lại huyết tương)', 'H⁺ + HCO3⁻ →(CA)→ H2O + CO2 khuếch tán ra phế nang thở ra ngoài'] }
        ]
      },
      pins: [
        { n: 1, title: 'Hiện tượng Hamburger (Chloride shift)', desc: 'Vì HCO3⁻ tích điện âm đi ra ngoài mà cation K⁺/Na⁺ không qua màng tự do, Cl⁻ phải đi vào hồng cầu để trung hòa điện tích → tăng nhẹ áp suất thẩm thấu nên hồng cầu tĩnh mạch to hơn động mạch một chút.', x: 26, y: 54 },
        { n: 2, title: 'Vai trò men Carbonic Anhydrase (CA)', desc: 'Nằm bên trong hồng cầu (huyết tương gần như không có CA), tăng tốc phản ứng CO2 + H2O ↔ H2CO3 lên hàng nghìn lần.', x: 26, y: 28 }
      ],
      takeaway: 'Ở MÔ: HCO3⁻ RA, Cl⁻ VÀO hồng cầu. Ở PHỔI: HCO3⁻ VÀO, Cl⁻ RA khỏi hồng cầu. Toàn bộ phản ứng xảy ra nhờ men CA trong hồng cầu.'
    },
    {
      code: 'Hình 14.9',
      page: 'Bài 14 • tr.175',
      title: 'Hiệu ứng Haldane (PO2 Phổi 100 mmHg Đẩy Mạnh Thải CO2)',
      summary: 'Nếu Hiệu ứng Bohr là "CO2/H⁺ giúp nhả O2 ở mô", thì Hiệu ứng Haldane là chiều ngược lại: "O2 gắn vào Hb ở phổi giúp ĐẨY CO2 ra ngoài mạnh gấp đôi".',
      svg: {
        kind: 'curve',
        xLabel: 'Phân áp CO2 máu (PCO2 mmHg)',
        yLabel: 'Tổng lượng CO2 chuyên chở trong máu (mL/dL)',
        xTicks: [
          { x: 35, label: '40 mmHg (Phổi/ĐM)' },
          { x: 65, label: '45 mmHg (Mô/TM)' }
        ],
        yTicks: [
          { y: 20, label: '45 mL/dL' },
          { y: 50, label: '50 mL/dL' },
          { y: 80, label: '54 mL/dL' }
        ],
        curves: [
          { name: 'Máu khử Deoxy-Hb (PO2 = 40 ở Mô — Gắn nhiều CO2)', color: '#2563eb', pts: [[18, 36], [35, 56], [65, 76], [86, 86]] },
          { name: 'Máu bão hòa Oxy-Hb (PO2 = 100 ở Phổi — Đẩy CO2 ra)', color: '#dc2626', dashed: true, pts: [[18, 22], [35, 36], [65, 56], [86, 68]] }
        ]
      },
      pins: [
        { n: 1, title: 'Hai cơ chế phân tử của Haldane', desc: 'Khi HbO2 hình thành ở phổi, nó trở thành acid mạnh hơn: (1) Ít gắn CO2 tạo carbamino-Hb hơn; (2) Nhả H⁺ để kết hợp HCO3⁻ thành CO2 bay hơi.', x: 48, y: 40 },
        { n: 2, title: 'Đóng góp ~50% lượng CO2 trao đổi', desc: 'Nếu không có hiệu ứng Haldane, máu chỉ thải được một nửa lượng CO2 mỗi lần qua phổi (chênh từ 52 xuống 48 thay vì 48 nếu PO2 không tăng).', x: 65, y: 60 }
      ],
      takeaway: 'Hiệu ứng Bohr (ở Mô): CO2/H⁺ đẩy O2 ra khỏi Hb. Hiệu ứng Haldane (ở Phổi): O2 đẩy CO2 ra khỏi máu.'
    }
  ],

  // ========================================================================
  // BÀI 9: LỌC CẦU THẬN & THĂM DÒ CHỨC NĂNG THẬN (Bài 17 + Bài 18)
  // ========================================================================
  9: [
    {
      code: 'Hình 17.1',
      page: 'Bài 17 • tr.199',
      title: 'Cấu tạo 3 Lớp của Màng Lọc Cầu Thận',
      summary: 'Hàng rào siêu lọc chọn lọc cả về Kích thước (khe lọc) và Điện tích âm (sialoprotein / heparan sulfat) ngăn không cho Albumin (đường kính ~7 nm, tích điện âm) lọt vào nước tiểu.',
      imgSrc: 'assets/figures/fig_filtration_barrier.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Lớp 1: Tế bào Nội mô mao mạch có lỗ thủng (Fenestrae ~70–100 nm)', desc: 'Chặn toàn bộ tế bào máu (Hồng cầu, Bạch cầu, Tiểu cầu) nhưng cho nước và protein qua tự do.', x: 24, y: 34 },
        { n: 2, title: 'Lớp 2: Màng Đáy Cầu Thận (GBM — dày 300–400 nm)', desc: 'Mạng lưới Collagen type IV, Laminin và Proteoglycan (Heparan sulfat tích điện ÂM mạnh) → Hàng rào điện tích chính đẩy Albumin tích điện âm.', x: 50, y: 50 },
        { n: 3, title: 'Lớp 3: Tế bào Biểu mô có chân (Podocyte) & Khe lọc (~40 nm)', desc: 'Giữa các chân giả có màng khe lọc (Slit diaphragm) chặn phân tử kích thước trung bình-lớn.', x: 76, y: 66 }
      ],
      takeaway: '3 lớp màng lọc: Nội mô có lỗ (70 nm) → Màng đáy tích điện ÂM (chặn chính Albumin) → Chân giả Podocyte (khe 40 nm).'
    },
    {
      code: 'Hình 17.2',
      page: 'Bài 17 • tr.200',
      title: 'Màng Nền Cầu Thận (GBM) dưới Kính hiển vi Điện tử (Bình thường vs Bệnh Màng đáy mỏng)',
      summary: 'Màng đáy cầu thận bình thường dày đều 300–400 nm (3 lớp lamina rara interna – lamina densa – lamina rara externa); khi bị đột biến mỏng còn 150–250 nm gây tiểu máu vi thể lành tính.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'GBM Bình thường (300–400 nm)', subtitle: 'Lớp Lamina Densa đồng nhất, liên tục', tone: 'blue', bullets: ['Đủ 3 tầng siêu cấu trúc bảo toàn hoàn hảo', 'Mật độ Proteoglycan âm cao ngăn Albumin lọt qua', 'Không đứt gãy cho hồng cầu chui lọt'] },
          { title: 'Bệnh Màng Đáy Mỏng / Alport (150–250 nm)', subtitle: 'Đột biến gen Collagen type IV', tone: 'red', bullets: ['Màng đáy mỏng đi còn một nửa hoặc tách lớp "rổ đan" (Hội chứng Alport)', 'Hồng cầu dễ lách qua khe nứt vào khoang Bowman → Tiểu máu đại thể/vi thể dai dẳng'] }
        ]
      },
      pins: [
        { n: 1, title: 'Bề dày chuẩn 300–400 nm', desc: 'Nếu dày lan tỏa kèm phức hợp miễn dịch gợi ý bệnh cầu thận màng hoặc đái tháo đường; nếu mỏng < 250 nm gợi ý bệnh màng đáy mỏng.', x: 26, y: 40 },
        { n: 2, title: 'Hội chứng Alport', desc: 'Rối loạn chuỗi α3/α4/α5 Collagen IV → tổn thương màng đáy cầu thận + ốc tai + thủy tinh thể (tiểu máu + điếc + bất thường mắt).', x: 74, y: 66 }
      ],
      takeaway: 'Màng đáy cầu thận bình thường dày 300–400 nm; tổn thương cấu trúc Collagen IV gây tiểu máu nguồn gốc cầu thận (hồng cầu biến dạng).'
    },
    {
      code: 'Hình 17.3',
      page: 'Bài 17 • tr.200',
      title: '6 Gen COL4A1 – COL4A6 Tổng hợp Đồng phân Collagen Type IV',
      summary: 'Các gen sắp xếp thành 3 cặp đầu đối đầu trên NST 13, 2 và X tổng hợp 3 dạng tam xoắn: α1α1α2 (phổ biến phôi thai), α3α4α5 (trưởng thành ở GBM thận/tai/mắt) và α5α5α6.',
      svg: {
        kind: 'flow',
        banner: 'Chuyển đổi Collagen Type IV trong Quá trình Trưởng thành Cầu thận',
        nodes: [
          { title: 'Cặp gen COL4A1–A2 (NST 13)', sub: 'Tạo tam xoắn α1α1α2 (giai đoạn phôi & màng đáy mạch thường)', tone: 'slate' },
          { title: 'Cặp gen COL4A3–A4 (NST 2)', sub: 'Đột biến lặn/trội gây bệnh màng đáy mỏng hoặc Alport NST thường', tone: 'amber' },
          { title: 'Cặp gen COL4A5–A6 (NST X)', sub: 'Đột biến COL4A5 (85% Alport) di truyền liên kết NST X', tone: 'red' },
          { title: 'Mạng lưới α3α4α5 trưởng thành', sub: 'Chịu lực cắt cao & giàu cầu disulfua bền vững tại Màng đáy Cầu thận', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Vì sao α3α4α5 quan trọng nhất ở thận người lớn?', desc: 'Mạng lưới này có nhiều liên kết chéo bền chặt kháng lại men tiêu protein và áp lực thủy tĩnh cực cao (~60 mmHg) của mao mạch cầu thận.', x: 78, y: 50 },
        { n: 2, title: 'Bệnh Goodpasture', desc: 'Tự kháng thể tấn công trực tiếp đoạn NC1 của chuỗi α3 Collagen type IV → hội chứng Phổi – Thận (ho ra máu + viêm cầu thận tiến triển nhanh).', x: 50, y: 50 }
      ],
      takeaway: 'Màng đáy cầu thận trưởng thành cấu tạo từ bộ ba xoắn α3–α4–α5 Collagen type IV (NST 2 & NST X).'
    },
    {
      code: 'Hình 17.4',
      page: 'Bài 17 • tr.201',
      title: 'Cấu tạo Chân giả Podocyte (FP) & Phức hợp Protein Khe lọc (Slit Diaphragm)',
      summary: 'Hai chân giả kề nhau đan xen như răng lược, liên kết qua cầu nối phân tử Nephrin – Podocin – CD2AP nối vào khung Actin (α-actinin-4) bên trong tế bào.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 220, h: 170, label: 'Chân giả Podocyte 1 (FP)', sub: 'Khung xương Actin + α-actinin-4\nBề mặt phủ Podocalyxin tích điện ÂM', tone: 'blue' },
          { x: 420, y: 40, w: 220, h: 170, label: 'Chân giả Podocyte 2 (FP)', sub: 'Bám vào Màng đáy GBM qua Integrin α3β1', tone: 'blue' },
          { x: 265, y: 80, w: 150, h: 90, label: 'Khe lọc (SD ~40 nm)', sub: 'Nephrin đan dây kéo\nPodocin + CD2AP', tone: 'amber' },
          { x: 40, y: 235, w: 600, h: 65, label: 'Màng Đáy Cầu Thận (GBM — Laminin & Collagen IV)', sub: 'Tích điện âm & Neo giữ các chân giả Podocyte', tone: 'teal' }
        ],
        links: [
          { x1: 260, y1: 125, x2: 420, y2: 125, label: 'Cầu Nephrin', color: '#d97706' }
        ]
      },
      pins: [
        { n: 1, title: 'Nephrin — Protein then chốt của khe lọc', desc: 'Đột biến gen NPHS1 mã hóa Nephrin gây Hội chứng thận hư bẩm sinh kiểu Phần Lan (tiểu đạm cực nặng ngay sau sinh).', x: 50, y: 38 },
        { n: 2, title: 'Podocalyxin & Điện tích âm áo tế bào', desc: 'Giúp các chân giả đẩy nhau tách rời giữ khe lọc thoáng rộng và đẩy Albumin ngược lại lòng mạch.', x: 22, y: 38 }
      ],
      takeaway: 'Khe lọc podocyte (40 nm) được khóa bằng phức hợp Nephrin – Podocin gắn vào bộ khung Actin.'
    },
    {
      code: 'Hình 17.5',
      page: 'Bài 17 • tr.202',
      title: 'Hiện tượng Xóa chân giả Podocyte (Foot Process Effacement) trong Bệnh Cầu thận',
      summary: 'Khi tổn thương miễn dịch, thiếu máu hoặc ngộ độc, khung Actin sụp đổ khiến các chân giả dẹt dính liền thành một mảng (xóa chân giả), mất khe lọc và rò rỉ Albumin ồ ạt ra nước tiểu.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Podocyte Bình thường', subtitle: 'Chân giả rời rạc, khe lọc đều đặn', tone: 'green', bullets: ['Các chân giả (FP) dựng cao tách biệt đều nhau trên GBM', 'Áo tích điện âm nguyên vẹn đẩy Albumin ở lại máu', 'Dịch lọc hầu như không có protein (<150 mg/ngày)'] },
          { title: 'Xóa Chân giả (Hội chứng Thận hư)', subtitle: 'Mất khe lọc & Rối loạn Actin', tone: 'red', bullets: ['Các chân giả dẹt xẹp sát nhập thành bản phẳng dính lên GBM', 'Giảm mạnh điện tích âm bề mặt & bung liên kết Nephrin', 'Thoát protein ồ ạt vào nước tiểu (>3,5 g/ngày → tiểu đạm ngưỡng thận hư, phù toàn thân)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Bệnh cầu thận Thay đổi tối thiểu (MCD)', desc: 'Trên kính hiển vi quang học cầu thận nhìn bình thường, nhưng dưới kính hiển vi điện tử thấy XÓA CHÂN GIẢ lan tỏa — rất đáp ứng với Corticoid ở trẻ em.', x: 74, y: 40 },
        { n: 2, title: 'Tổn thương không hồi phục → Xơ hóa cầu thận', desc: 'Podocyte là tế bào biệt hóa cuối ít phân chia lại: nếu rụng mất quá nhiều sẽ dẫn đến xơ hóa ổ đoạn (FSGS).', x: 74, y: 70 }
      ],
      takeaway: 'Xóa chân giả podocyte làm mất khe lọc & mất hàng rào điện tích âm → dấu ấn bệnh sinh của Hội chứng Thận hư (Protein niệu > 3,5 g/24h).'
    },
    {
      code: 'Hình 17.6',
      page: 'Bài 17 • tr.205',
      title: 'Động lực Siêu lọc Cầu thận (Áp suất lọc hữu hiệu UP = +10 mmHg)',
      summary: 'Lực đẩy lọc duy nhất là Áp suất thủy tĩnh mao mạch cầu thận (P_GC = 60 mmHg), đối kháng bởi áp suất thủy tĩnh bao Bowman (P_BS = 18) và áp suất keo huyết tương tăng dần (π_GC = 32 mmHg).',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 230, h: 120, label: 'Động mạch Vào → Mao mạch Cầu thận', sub: 'Lực đẩy RA (Lọc): P_GC ≈ 60 mmHg\n(rất cao do ĐM ra co nhẹ)', tone: 'red' },
          { x: 410, y: 40, w: 230, h: 120, label: 'Khoang Bowman (Tạo dịch lọc)', sub: 'Lực cản VÀO:\n1. P_BS = 18 mmHg\n2. π_GC = 32 mmHg (π_BS ≈ 0)', tone: 'blue' },
          { x: 100, y: 200, w: 480, h: 95, label: 'Phương trình Starling Cầu thận: UP = P_GC − P_BS − π_GC', sub: 'UP = 60 − 18 − 32 = +10 mmHg → GFR = Kf × UP ≈ 125 mL/phút (180 L/ngày!)', tone: 'green' }
        ],
        links: [
          { x1: 270, y1: 100, x2: 406, y2: 100, label: 'UP = +10 mmHg', color: '#16a34a' }
        ]
      },
      pins: [
        { n: 1, title: 'Co giãn ĐM Vào vs ĐM Ra', desc: 'Giãn ĐM vào → TĂNG cả RPF lẫn P_GC (tăng GFR). Co nhẹ ĐM ra (Angiotensin II vừa) → GIẢM RPF nhưng TĂNG P_GC (giữ GFR!). Co mạnh ĐM ra quá mức → π_GC tăng vọt làm giảm GFR.', x: 24, y: 36 },
        { n: 2, title: 'Sỏi niệu quản tăng P_BS', desc: 'Tắc đường tiểu dưới đẩy ngược áp suất khoang Bowman (P_BS từ 18 lên > 40 mmHg) làm sụp áp suất lọc hữu hiệu UP → suy thận cấp sau thận.', x: 76, y: 36 }
      ],
      takeaway: 'UP = P_GC (60) − P_BS (18) − π_GC (32) = +10 mmHg. P_GC phụ thuộc cân bằng trương lực ĐM vào (PG/NO giãn) và ĐM ra (Ang II co).'
    },
    {
      code: 'Hình 17.7',
      page: 'Bài 17 • tr.207',
      title: 'Nguyên lý Thận Nhân tạo Sợi rỗng (Khuếch tán & Siêu lọc ngoài cơ thể)',
      summary: 'Máu bệnh nhân đi trong hàng nghìn sợi rỗng màng bán thấm, dòng dịch lọc chảy ngược chiều ở bên ngoài giúp khuếch tán Ure/Creatinin/K⁺ ra ngoài và giữ hồng cầu/protein ở lại.',
      svg: {
        kind: 'flow',
        banner: 'Chu trình Lọc máu Ngoài cơ thể (Hemodialysis)',
        nodes: [
          { title: 'Máu từ Cầu nối ĐM-TM (Fistula)', sub: 'Bơm máu + Kháng đông Heparin vào màng sợi rỗng', tone: 'red' },
          { title: 'Trao đổi Ngược chiều (Countercurrent)', sub: 'Khuếch tán chất tan (Ure, Creatinin, K⁺) từ máu → dịch lọc; HCO3⁻ bù vào máu', tone: 'blue' },
          { title: 'Siêu lọc áp lực (Ultrafiltration)', sub: 'Tạo chênh áp xuyên màng TMP kéo nước thừa ra khỏi cơ thể', tone: 'teal' },
          { title: 'Bẫy bọt khí → Trả máu sạch về TM', sub: 'Giữ lại toàn bộ tế bào máu và protein kích thước lớn', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Chạy ngược chiều tối ưu hóa gradient', desc: 'Máu và dịch lọc đi ngược chiều nhau giữ bậc nồng độ khuếch tán ổn định suốt chiều dài quả lọc.', x: 38, y: 50 },
        { n: 2, title: 'Điều chỉnh thành phần dịch lọc', desc: 'Không chứa Ure/Creatinin để rút tối đa, nồng độ K⁺ thấp hơn máu (giảm K⁺ máu), chứa Bicarbonate chống toan chuyển hóa.', x: 64, y: 50 }
      ],
      takeaway: 'Thận nhân tạo lọc máu chủ yếu bằng KHUẾCH TÁN theo gradient nồng độ ngược chiều (rút chất độc nhỏ) + SIÊU LỌC bằng chênh áp thủy tĩnh (rút dịch).'
    },
    {
      code: 'Hình 17.8',
      page: 'Bài 17 • tr.207',
      title: 'Nguyên lý Thẩm phân Phúc mạc (Lọc qua Màng bụng)',
      summary: 'Sử dụng chính màng phúc mạc giàu mao mạch của bệnh nhân làm màng bán thấm: truyền 2 L dịch thẩm phân giàu Glucose vào ổ bụng để kéo nước (thẩm thấu) và khuếch tán chất độc rồi xả bỏ.',
      svg: {
        kind: 'flow',
        banner: 'Chu kỳ 3 bước Thẩm phân Phúc mạc (CAPD / APD)',
        nodes: [
          { title: '1. Truyền dịch vào Ổ bụng (15p)', sub: 'Catheter Tenckhoff đưa 1,5–2 L dịch vô trùng chứa Dextrose cao (1,5–4,25%)', tone: 'blue' },
          { title: '2. Ngâm dịch trao đổi (4–6 giờ)', sub: 'Mao mạch phúc mạc khuếch tán Ure/K⁺ vào ổ bụng; Glucose kéo nước theo thẩm thấu', tone: 'teal' },
          { title: '3. Xả dịch thải (20p)', sub: 'Loại bỏ dịch chứa chất độc & nước thừa ra túi xả rồi thay dịch mới', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế rút nước bằng Glucose (Thẩm thấu)', desc: 'Khác thận nhân tạo rút nước bằng áp lực bơm, thẩm phân phúc mạc dùng nồng độ Glucose ưu trương tạo áp suất thẩm thấu kéo nước từ máu.', x: 50, y: 50 },
        { n: 2, title: 'Ưu điểm huyết động ổn định', desc: 'Thực hiện liên tục tại nhà, ít gây tụt huyết áp nhưng cần vô khuẩn tuyệt đối tránh viêm phúc mạc.', x: 82, y: 50 }
      ],
      takeaway: 'Thẩm phân phúc mạc tận dụng màng phúc mạc làm màng bán thấm và dùng Glucose ưu trương để siêu lọc rút nước.'
    },
    {
      code: 'Hình 17.9',
      page: 'Bài 17 • tr.208',
      title: 'Tự điều hòa Ngược Ống – Cầu (Tubuloglomerular Feedback - TGF)',
      summary: 'Phức hợp cận cầu thận (Macula Densa + tế bào hạt ĐM vào) giữ ổn định GFR và lưu lượng máu thận (RBF) trong dải huyết áp ĐM trung bình 80–180 mmHg.',
      svg: {
        kind: 'cycle',
        centerTitle: 'ỔN ĐỊNH GFR',
        centerSub: 'MAP 80–180 mmHg',
        centerTone: 'green',
        steps: [
          { label: '↑ Huyết áp → ↑ GFR thoáng qua', detail: 'Tăng lượng NaCl chảy xuống ống lượn xa', tone: 'red' },
          { label: 'Macula Densa (Vết đặc) cảm nhận', detail: 'Tăng thu nhận Na⁺–Cl⁻ tại vùng giáp ĐM vào', tone: 'amber' },
          { label: 'Phóng thích ATP / Adenosine', detail: 'Co Tiểu Động mạch Vào (tăng kháng lực trước cầu)', tone: 'purple' },
          { label: 'Giảm P_GC → Trả GFR về 125 mL/p', detail: 'Bảo vệ cầu thận không bị quá tải áp lực!', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: '2 cơ chế Tự điều hòa GFR (80–180 mmHg)', desc: 'Phối hợp giữa Cơ chế Myogenic (ĐM vào tự co khi thành căng) và Ngược ống-cầu TGF (Macula Densa đo lượng NaCl tới quai Henle lên).', x: 50, y: 50 },
        { n: 2, title: 'Khi tụt MAP < 80 mmHg (Sốc)', desc: 'Tự điều hòa mất hiệu lực: GFR tụt dốc mạnh gây thiểu niệu / vô niệu; ngoài ra NSAIDs + ACEi phối hợp làm gãy cả hai chốt ĐM vào và ĐM ra!', x: 24, y: 40 }
      ],
      takeaway: 'Nhờ Myogenic + TGF, thận giữ GFR hằng định trong giới hạn huyết áp TB 80–180 mmHg. Tăng NaCl tới Macula Densa → Co ĐM vào → Giảm GFR.'
    },
    {
      code: 'Hình 17.10',
      page: 'Bài 17 • tr.209',
      title: 'Cơ chế Phân tử của Phản hồi Ống – Cầu tại Vết đặc (NKCC2 → Adenosine A1)',
      summary: 'Khi NaCl trong dịch ống tăng, đồng vận chuyển NKCC2 trên tế bào vết đặc hoạt động mạnh tiêu thụ ATP → giải phóng ATP/Adenosine gắn thụ thể A1 làm co ĐM vào.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi tín hiệu Tế bào Macula Densa → Cơ trơn ĐM Vào',
        nodes: [
          { title: '1. ↑ NaCl dịch ở cuối quai Henle', sub: 'Tăng nồng độ đến vùng vết đặc (Macula densa)', tone: 'amber' },
          { title: '2. Tăng vận chuyển qua NKCC2', sub: 'Tiêu thụ nhiều ATP qua bơm Na⁺-K⁺-ATPase đáy bên', tone: 'blue' },
          { title: '3. Tiết ATP → chuyển thành Adenosine', sub: 'Khuếch tán sang cơ trơn Tiểu ĐM Vào nằm sát cạnh', tone: 'purple' },
          { title: '4. Gắn Thụ thể A1 (↓ cAMP, ↑ Ca²⁺)', sub: 'Co Tiểu ĐM Vào → Giảm P_GC & GFR (Cơ chế đối lập với Furosemide!)', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Furosemide ức chế phản hồi TGF?', desc: 'Thuốc lợi tiểu quai (Furosemide) khóa kênh NKCC2 ngay tại Macula Densa làm tế bào "mù" trước NaCl cao nên không co ĐM vào.', x: 40, y: 50 },
        { n: 2, title: 'Chiều ngược lại khi NaCl ĐẾN THẤP (Thiếu dịch)', desc: 'NKCC2 giảm hoạt động → giảm Adenosine + tăng Prostaglandin E2/I2 làm GIÃN ĐM vào, đồng thời kích thích tế bào cận cầu thận tiết RENIN!', x: 82, y: 50 }
      ],
      takeaway: 'Tại Macula Densa: NKCC2 bắt Na⁺-K⁺-2Cl⁻ → sinh Adenosine gắn thụ thể A1 gây CO Tiểu ĐM vào (giảm GFR). Đồng thời giảm NaCl tại đây kích hoạt tiết RENIN.'
    },
    {
      code: 'Hình 17.11',
      page: 'Bài 17 • tr.209',
      title: 'Cơ chế Cơ sinh học (Myogenic) co Tiểu Động mạch Vào',
      summary: 'Bản thân tế bào cơ trơn thành tiểu ĐM vào có kênh nhạy cảm sức căng (Degenerin / ENaC): khi huyết áp kéo căng thành mạch sẽ mở kênh khử cực → mở kênh Ca²⁺ L-type gây co mạch tức thì.',
      svg: {
        kind: 'flow',
        banner: 'Đáp ứng Myogenic tức thời (< vài giây) tại Tiểu ĐM Vào',
        nodes: [
          { title: '1. Tăng Huyết áp → Căng thành ĐM Vào', sub: 'Lực căng cơ học tác động lên màng cơ trơn mạch máu', tone: 'amber' },
          { title: '2. Mở kênh Cation nhạy căng (Degenerin)', sub: 'Na⁺ đi vào gây khử cực màng cơ trơn', tone: 'blue' },
          { title: '3. Mở kênh Ca²⁺ phụ thuộc điện thế (VGCC)', sub: 'Dòng Ca²⁺ tràn vào nội bào hoạt hóa MLCK', tone: 'purple' },
          { title: '4. Co Tiểu ĐM Vào (Giảm bán kính r)', sub: 'Kháng lực tăng mạnh theo 1/r⁴ → chặn áp lực cao dội vào cầu thận', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Đích của Thuốc Chẹn kênh Ca²⁺ (DHP - Amlodipine)', desc: 'Ức chế VGCC ở Tiểu ĐM vào làm giãn mạnh ĐM vào hơn ĐM ra (giải thích tác dụng phụ phù mắt cá chân và tăng nhẹ áp lực cầu thận nếu không phối hợp ACEi).', x: 64, y: 50 },
        { n: 2, title: 'Tác dụng bảo vệ xơ hóa cầu thận', desc: 'Cắt cơn tăng huyết áp trước khi xung áp lực phá hủy hàng rào màng đáy cầu thận.', x: 84, y: 50 }
      ],
      takeaway: 'Căng thành ĐM vào → Mở kênh nhạy căng Degenerin → Khử cực mở kênh Ca²⁺ L-type → Co cơ trơn ĐM vào bảo vệ cầu thận.'
    },
    {
      code: 'Hình 17.12',
      page: 'Bài 17 • tr.211',
      title: 'Tái hấp thu Na⁺, Glucose và Acid amin ở Ống lượn gần (Động lực Bơm Na⁺-K⁺-ATPase)',
      summary: 'Bơm Na⁺-K⁺-ATPase ở màng đáy-bên tạo nồng độ Na⁺ nội bào cực thấp (~10–14 mEq/L), làm động lực kéo đồng vận chuyển chủ động thứ phát Na⁺ cùng Glucose, Acid amin, Phosphate qua bờ bàn chải.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ống lượn gần (Dịch lọc cầu thận • Na⁺ 140 mM)',
        bottomLabel: 'Tế bào Ống lượn gần → Dịch kẽ → Mao mạch quanh ống',
        memLabel: 'Màng đỉnh (Bờ bàn chải tăng ×20 diện tích)',
        channels: [
          { label: 'SGLT2 / SGLT1', sub: 'Đồng vận chuyển Na⁺–Glucose', dir: 'down', tone: 'blue', top: 'Na⁺ + Glucose vào', bottom: 'Chủ động thứ phát' },
          { label: 'Na⁺–Acid amin', sub: 'Kéo hầu hết 100% AA', dir: 'down', tone: 'green', top: 'Na⁺ + AA vào', bottom: 'Thoát qua đáy-bên' },
          { label: 'Đối vận NHE3', sub: 'Na⁺ vào / H⁺ bài tiết ra', dir: 'both', tone: 'amber', top: 'H⁺ tái hấp thu HCO3⁻', bottom: 'Giữ thăng bằng toan kiềm' },
          { label: 'Bơm Na⁺-K⁺-ATPase', sub: 'Ở màng Đáy-Bên (3 Na⁺ ra)', dir: 'down', tone: 'red', top: 'Động cơ chính (tốn ATP)', bottom: 'Tạo gradient âm & Na⁺ thấp' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao ống lượn gần tái hấp thu đẳng trương (~65% Na⁺ & H2O)?', desc: 'Nhờ biểu mô có kênh Aquaporin-1 dày đặc và liên kết khe thấm nước cực tốt → nước luôn bám sát Na⁺ đi theo đẳng trương (300 mOsm/L ở đầu và cuối ống gần).', x: 50, y: 26 },
        { n: 2, title: 'Hội chứng Fanconi', desc: 'Tổn thương ống lượn gần gây mất đồng thời Glucose, Acid amin, Phosphate và Bicarbonate (RTA típ II) ra nước tiểu dù đường huyết bình thường.', x: 76, y: 50 }
      ],
      takeaway: 'Ống lượn gần tái hấp thu ~65% Na⁺/nước (đẳng trương), ~100% Glucose và Acid amin, tất cả nhờ gradient do Bơm Na⁺-K⁺-ATPase màng đáy-bên tạo ra.'
    },
    {
      code: 'Hình 17.13',
      page: 'Bài 17 • tr.212',
      title: 'Vận chuyển Glucose ở Ống lượn gần: SGLT2 (~90%), SGLT1 (~10%) và GLUT2',
      summary: 'Màng đỉnh dùng SGLT2 (tỷ lệ 1 Na⁺ : 1 Glucose, dung lượng lớn) ở đoạn S1-S2 gánh ~90% tái hấp thu và SGLT1 (tỷ lệ 2 Na⁺ : 1 Glucose, ái lực cao) ở đoạn S3 vét sạch 10% còn lại, rồi xuất vào máu qua GLUT2.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ống lượn gần (Đoạn S1–S2 vs Đoạn S3)',
        bottomLabel: 'Mao mạch quanh ống thận (Máu)',
        memLabel: 'Tế bào Biểu mô Ống lượn gần',
        channels: [
          { label: 'SGLT2 (Đoạn S1–S2)', sub: '1 Na⁺ : 1 Glucose (Tái hấp thu 90%)', dir: 'down', tone: 'blue', top: 'Đích Dapagliflozin / Empagliflozin', bottom: 'Dung lượng cực lớn' },
          { label: 'SGLT1 (Đoạn S3)', sub: '2 Na⁺ : 1 Glucose (Vét nốt 10%)', dir: 'down', tone: 'teal', top: 'Ái lực rất cao', bottom: 'Làm sạch glucose nước tiểu' },
          { label: 'GLUT2 (Màng Đáy-Bên)', sub: 'Khuếch tán được tăng cường', dir: 'down', tone: 'green', top: 'Glucose từ bào tương', bottom: 'Trở lại máu tuần hoàn' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế thuốc ức chế SGLT2 (Floxin)', desc: 'Ức chế SGLT2 (Empagliflozin, Dapagliflozin) làm thải đường qua nước tiểu (lợi tiểu thẩm thấu), giảm đường huyết không phụ thuộc Insulin và bảo vệ thận-tim.', x: 24, y: 50 },
        { n: 2, title: 'Tại sao đường niệu âm tính ở người khỏe?', desc: 'SGLT1 ở đoạn S3 có ái lực cao dùng thế năng 2 ion Na⁺ để vét sạch những phân tử glucose cuối cùng trước khi ra khỏi ống gần.', x: 52, y: 50 }
      ],
      takeaway: 'SGLT2 (đoạn đầu S1-S2, 1 Na⁺:1 Glu) tái hấp thu 90%; SGLT1 (đoạn S3, 2 Na⁺:1 Glu) tái hấp thu 10%; GLUT2/GLUT1 đưa glucose từ màng đáy-bên vào máu.'
    },
    {
      code: 'Hình 17.14',
      page: 'Bài 17 • tr.212',
      title: 'Ngưỡng Thận với Glucose (180 mg/dL) và Độ bão hòa SGLT',
      summary: 'Khi đường huyết vượt ngưỡng ~180 mg/dL (tải lượng lọc vượt khả năng các nephron nhạy cảm nhất), hệ thống SGLT bắt đầu bão hòa và Glucose xuất hiện trong nước tiểu.',
      svg: {
        kind: 'curve',
        xLabel: 'Nồng độ Glucose huyết tương (mg/dL)',
        yLabel: 'Vận tốc Lọc / Tái hấp thu / Bài xuất (mg/phút)',
        xTicks: [
          { x: 20, label: '100 (BT)' },
          { x: 45, label: '180 (Ngưỡng thận)' },
          { x: 75, label: '300 (TmG = 375)' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 55, label: '225' },
          { y: 85, label: '375 mg/p' }
        ],
        vLines: [
          { x: 45, label: 'Ngưỡng thận ~180 mg/dL (Đoạn cong splay)', color: '#dc2626' }
        ],
        curves: [
          { name: 'Lượng Lọc = GFR × P_G (Đường thẳng)', color: '#64748b', pts: [[10, 15], [45, 45], [85, 86]] },
          { name: 'Tái hấp thu (Bão hòa ở TmG ~375 mg/p)', color: '#2563eb', pts: [[10, 15], [42, 42], [58, 52], [85, 54]] },
          { name: 'Bài xuất ra Nước tiểu (Đường niệu +)', color: '#dc2626', dashed: true, pts: [[10, 15], [45, 15], [60, 26], [85, 48]] }
        ]
      },
      pins: [
        { n: 1, title: 'Ngưỡng 180 mg/dL vs Ngưỡng lý thuyết 300 mg/dL', desc: 'Lý thuyết: TmG (375 mg/p) / GFR (125 mL/p) = 300 mg/dL; nhưng thực tế từ 180–200 mg/dL đã có glucose niệu (vì không phải tất cả các nephron có cùng tỷ lệ chiều dài ống / diện tích lọc → tạo đoạn cong Splay).', x: 46, y: 40 },
        { n: 2, title: 'Đái tháo đường gây lợi tiểu thẩm thấu', desc: 'Glucose dư trong nước tiểu giữ nước theo áp suất thẩm thấu gây tiểu nhiều và khát nước.', x: 76, y: 66 }
      ],
      takeaway: 'Ngưỡng thận của Glucose ≈ 180 mg/dL (10 mmol/L); Mức tái hấp thu tối đa TmG ≈ 375 mg/phút (Nam) / 300 mg/phút (Nữ).'
    },
    {
      code: 'Hình 17.15',
      page: 'Bài 17 • tr.214',
      title: 'Cơ chế Bài tiết H⁺ và Tái hấp thu Bicarbonate (HCO3⁻) ở Ống lượn gần',
      summary: 'HCO3⁻ trong dịch lọc KHÔNG thấm trực tiếp qua màng đỉnh; ống lượn gần bài tiết H⁺ (qua NHE3) kết hợp HCO3⁻ thành CO2 rồi khuếch tán vào tế bào và tái tạo lại HCO3⁻ vào máu (tái hấp thu ~85%).',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ống lượn gần (H⁺ + HCO3⁻ → H2CO3 →(CA IV)→ H2O + CO2)',
        bottomLabel: 'Tế bào Ống gần (CA II) → Tái hấp thu HCO3⁻ về Máu',
        memLabel: 'Carbonic Anhydrase (CA IV ở bờ bàn chải & CA II trong bào tương)',
        channels: [
          { label: 'Đối vận NHE3 (H⁺ ra)', sub: 'Na⁺ vào / H⁺ đẩy ra lòng ống', dir: 'both', tone: 'amber', top: 'H⁺ + HCO3⁻ → CO2', bottom: '1 Na⁺ kéo vào' },
          { label: 'Khuếch tán CO2', sub: 'CO2 + H2O → H2CO3 → H⁺ + HCO3⁻', dir: 'down', tone: 'teal', top: 'Thấm tự do qua màng', bottom: 'Nhờ men CA II nội bào' },
          { label: 'Đồng vận NBCe1', sub: 'Đưa HCO3⁻ cùng Na⁺ về máu', dir: 'down', tone: 'blue', top: 'Đích Acetazolamide (ức chế CA)', bottom: 'Tái hấp thu 85% HCO3⁻' }
        ]
      },
      pins: [
        { n: 1, title: 'Bản chất là "Thu hồi gián tiếp" HCO3⁻', desc: 'Phân tử HCO3⁻ vào máu không phải đúng phân tử cũ từ lòng ống mà là phân tử mới sinh từ CO2; tổng lượng HCO3⁻ trong cơ thể giữ nguyên (chỉ tái hấp thu, chưa sinh mới).', x: 50, y: 50 },
        { n: 2, title: 'Thuốc lợi tiểu ức chế CA (Acetazolamide)', desc: 'Khóa Carbonic Anhydrase làm mất tái hấp thu NaHCO3 ở ống gần → nước tiểu kiềm, cơ thể dễ bị toan chuyển hóa mất HCO3⁻.', x: 78, y: 50 }
      ],
      takeaway: 'Ống lượn gần tái hấp thu ~80–85% HCO3⁻ gián tiếp thông qua bài tiết H⁺ (NHE3) và men Carbonic Anhydrase (CA IV bờ đỉnh & CA II nội bào).'
    },
    {
      code: 'Hình 17.16',
      page: 'Bài 17 • tr.215',
      title: 'Vận chuyển NKCC2 (+6 mV lòng ống đẩy Ca²⁺, Mg²⁺) ở Cành lên Dày Quai Henle',
      summary: 'Cành lên dày quai Henle KHÔNG thấm nước ("đoạn pha loãng"), bơm ~25% NaCl qua NKCC2; một phần K⁺ rò ngược lại lòng ống qua kênh ROMK tạo điện thế dương +6 mV đẩy Ca²⁺ và Mg²⁺ tái hấp thu qua khe giữa tế bào.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ống Cành lên Dày (Điện thế +6 mV • KHÔNG thấm nước)',
        bottomLabel: 'Dịch kẽ Tủy thận (Ưu trương) & Mao mạch',
        memLabel: 'Đích tác dụng của Lợi tiểu Quai (Furosemide)',
        channels: [
          { label: 'Đồng vận NKCC2', sub: '1 Na⁺ + 1 K⁺ + 2 Cl⁻ vào TB', dir: 'down', tone: 'blue', top: 'Bị Furosemide ức chế', bottom: 'Bơm 25% lượng NaCl lọc' },
          { label: 'Kênh K⁺ ROMK', sub: 'K⁺ quay ngược ra lòng ống', dir: 'up', tone: 'amber', top: 'Tạo điện thế +6 mV lòng ống', bottom: 'Mất K⁺ nếu dùng lợi tiểu quai' },
          { label: 'Đường Kẽ Tế bào (Paracellular)', sub: 'Lòng (+6 mV) đẩy Ca²⁺, Mg²⁺ về máu', dir: 'down', tone: 'green', top: 'Tái hấp thu thụ động Ca²⁺, Mg²⁺', bottom: 'Furosemide làm MẤT Ca²⁺, Mg²⁺!' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế Lợi tiểu Quai gây Tăng thải Ca²⁺ (trị Tăng Ca²⁺ máu)', desc: 'Furosemide chặn NKCC2 → K⁺ không vào tế bào để quay ra ROMK → mất điện thế dương +6 mV → Ca²⁺ và Mg²⁺ không bị đẩy qua khe kẽ nên trôi ra nước tiểu!', x: 76, y: 50 },
        { n: 2, title: 'Đoạn pha loãng nước tiểu không thấm nước', desc: 'Muối bị rút khỏi lòng ống nhưng nước bị giữ lại → dịch lọc ở cuối cành lên dày nhược trương (~100 mOsm/L).', x: 24, y: 24 }
      ],
      takeaway: 'Cành lên dày quai Henle: Không thấm nước; NKCC2 (25% NaCl, đích Furosemide) + kênh ROMK tạo điện thế dương đẩy Ca²⁺/Mg²⁺ tái hấp thu.'
    },
    {
      code: 'Hình 17.17',
      page: 'Bài 17 • tr.216',
      title: 'Cơ chế Tăng nồng độ Ngược dòng (Countercurrent Multiplier) Quai Henle',
      summary: 'Quai Henle tạo nên bậc thang thẩm thấu tủy thận tăng dần từ vỏ (300 mOsm/L) sâu xuống tủy trong (1200–1400 mOsm/L) làm tiền đề để ADH cô đặc nước tiểu.',
      imgSrc: 'assets/figures/fig_countercurrent.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Cành Xuống mảnh: CHỈ thấm Nước, ít thấm muối', desc: 'Nước tự động rút ra vào tủy thận ưu trương → dịch ống cô đặc dần lên tới 1200 mOsm/L ở chóp quai.', x: 30, y: 58 },
        { n: 2, title: 'Cành Lên dày: Bơm Muối (NKCC2), KHÔNG thấm Nước', desc: 'Liên tục bơm NaCl ra dịch kẽ tủy thận tạo lực hút ban đầu (~200 mOsm chênh lệch tại chỗ), đồng thời làm dịch tới ống lượn xa pha loãng còn ~100 mOsm/L.', x: 64, y: 42 },
        { n: 3, title: 'Đóng góp của Ure tái tuần hoàn', desc: 'Dưới tác dụng ADH, Ure thoát ra từ ống góp tủy qua UT-A1 đóng góp gần 40–50% áp suất thẩm thấu 1200 mOsm của tủy trong.', x: 76, y: 74 }
      ],
      takeaway: 'Cành xuống thấm NƯỚC (không bơm Na⁺); Cành lên bơm NaCl (không thấm NƯỚC) → nhân bậc thang tủy thận từ 300 lên 1200 mOsm/L.'
    },
    {
      code: 'Hình 17.18',
      page: 'Bài 17 • tr.217',
      title: 'Hệ Mạch thẳng Vasa Recta — Bộ Trao đổi Ngược dòng Bảo vệ Áp suất Thẩm thấu Tủy',
      summary: 'Mạch máu Vasa Recta chạy uốn hình chữ U chậm rãi song song quai Henle để nuôi tủy thận mà KHÔNG rửa trôi mất lượng muối và ure tích lũy tại tủy.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Nhánh Xuống Vasa Recta (Vào tủy 300 → 1200)', subtitle: 'Máu chảy rất chậm', tone: 'red', bullets: ['Nước đi RA khỏi mạch vào kẽ; NaCl & Ure đi VÀO máu', 'Khi xuống tới chóp quai, máu cân bằng 1200 mOsm/L nên không phá loãng vùng tủy sâu'] },
          { title: 'Nhánh Lên Vasa Recta (Ra vỏ 1200 → 320)', subtitle: 'Đổi ngược trả lại muối cho tủy', tone: 'blue', bullets: ['Khi máu đi ngược lên vùng tủy nông (áp suất thẩm thấu thấp hơn), NaCl & Ure tự trả NGƯỢC RA dịch kẽ và nước đi vào lại mạch máu', 'Mang đi nước dư tái hấp thu từ ống góp nhưng giữ lại muối trong tủy thận!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Phân biệt Multiplier vs Exchanger', desc: 'Quai Henle là bộ NHÂN ngược dòng (tạo ra gradient chủ động nhờ ATP); Vasa Recta là bộ TRAO ĐỔI ngược dòng (bị động giữ nguyên gradient).', x: 26, y: 50 },
        { n: 2, title: 'Nếu dòng máu tủy thận chảy quá nhanh', desc: 'Sẽ rửa trôi muối ở tủy thận ("medullary washout") làm mất khả năng cô đặc nước tiểu.', x: 74, y: 66 }
      ],
      takeaway: 'Quai Henle TẠO bậc thang thẩm thấu (bơm chủ động); Vasa Recta GIỮ bậc thang thẩm thấu (trao đổi ngược dòng thụ động + lưu lượng chậm).'
    },
    {
      code: 'Hình 17.19',
      page: 'Bài 17 • tr.218',
      title: 'Tái hấp thu Na⁺–Cl⁻ (Kênh NCC) ở Nửa đầu Ống lượn xa',
      summary: 'Nửa đầu ống lượn xa hoàn toàn không thấm nước, sử dụng đồng vận chuyển Na⁺–Cl⁻ (NCC) ở màng đỉnh tái hấp thu ~5% NaCl và tăng cường tái hấp thu Ca²⁺ (nhờ PTH) thông qua đối vận Na⁺/Ca²⁺ màng đáy-bên.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Nửa đầu Ống lượn xa (Không thấm nước • Dịch nhược trương)',
        bottomLabel: 'Mao mạch (Tái hấp thu ~5% Na⁺ & Tăng giữ Ca²⁺)',
        memLabel: 'Đích tác dụng của Lợi tiểu Thiazide (Hydrochlorothiazide)',
        channels: [
          { label: 'Đồng vận NCC (Na⁺-Cl⁻)', sub: 'Tái hấp thu ~5% lượng Na⁺ lọc', dir: 'down', tone: 'blue', top: 'Bị Thiazide ức chế', bottom: 'Mất NaCl & giảm thể tích nhẹ' },
          { label: 'Kênh Ca²⁺ TRPV5 (đỉnh)', sub: 'PTH kích thích thu nhận Ca²⁺', dir: 'down', tone: 'green', top: 'Ca²⁺ đi vào tế bào', bottom: 'Qua NCX1 đáy-bên về máu' },
          { label: 'Đối vận 3Na⁺/1Ca²⁺ (đáy-bên)', sub: 'Thiazide giảm Na⁺ nội bào → TĂNG kéo Ca²⁺!', dir: 'up', tone: 'amber', top: 'Tác dụng giữ Canxi máu', bottom: 'Dùng ngừa sỏi thận Canxi' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Thiazide GIẢM thải Canxi niệu (ngược Furosemide)?', desc: 'Khi Thiazide chặn NCC, Na⁺ nội bào giảm → tăng gradient kéo Na⁺ từ máu vào đổi lấy Ca²⁺ đẩy ra máu (qua NCX1) → tăng tái hấp thu Ca²⁺, ngừa loãng xương và sỏi thận Ca²⁺!', x: 76, y: 50 },
        { n: 2, title: 'Giảm khả năng pha loãng nước tiểu tối đa', desc: 'Do làm mất tái hấp thu muối ở đoạn pha loãng vỏ nên Thiazide gây nguy cơ hạ Na⁺ máu hơn lợi tiểu quai.', x: 24, y: 50 }
      ],
      takeaway: 'Ống xa đầu: kênh NCC (đích Thiazide). Khác biệt vàng: Furosemide (Quai) TĂNG thải Ca²⁺ niệu; Thiazide (Ống xa) GIẢM thải Ca²⁺ niệu.'
    },
    {
      code: 'Hình 17.20',
      page: 'Bài 17 • tr.218',
      title: 'Tế bào Chính Ống góp Vỏ & Tác dụng Aldosterone (ENaC / Bài tiết K⁺)',
      summary: 'Nửa sau ống xa & ống góp vỏ có Tế bào Chính (hấp thu Na⁺ qua kênh ENaC, bài tiết K⁺ qua ROMK dưới tác động Aldosterone) và Tế bào Kẽ α/β điều hòa H⁺/HCO3⁻.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ống góp Vỏ (Tạo điện thế âm nhẹ đẩy K⁺ và H⁺ ra)',
        bottomLabel: 'Tế bào Chính (Principal Cell) — Đích của Aldosterone & Spironolactone',
        memLabel: 'Điều chỉnh ~2–3% Na⁺ cuối cùng & Bài tiết K⁺',
        channels: [
          { label: 'Kênh ENaC (Màng đỉnh)', sub: 'Hấp thu chọn lọc ion Na⁺ (Aldosterone ↑)', dir: 'down', tone: 'blue', top: 'Đích Amiloride / Triamterene', bottom: 'Tạo điện tích âm lòng ống' },
          { label: 'Kênh K⁺ ROMK (Màng đỉnh)', sub: 'Bài tiết K⁺ vào nước tiểu (Aldosterone ↑)', dir: 'up', tone: 'red', top: 'Tăng thải K⁺ khi Na⁺ xuống nhiều', bottom: 'Khóa bằng Giữ Kali (Spironolactone)' },
          { label: 'Thụ thể Aldosterone (MR)', sub: 'Hoạt hóa gen ENaC, ROMK & Na⁺-K⁺-ATPase', dir: 'down', tone: 'purple', top: 'Tác dụng sau 1–2 giờ', bottom: 'Đích Spironolactone / Eplerenone' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Furosemide & Thiazide gây HẠ KALI MÁU?', desc: 'Hai thuốc này đẩy thật nhiều Na⁺ & nước xuống ống góp → Tế bào chính hấp thu mạnh Na⁺ qua ENaC làm lòng ống tích điện ÂM mạnh → hút K⁺ (và H⁺) thoát ra nước tiểu gây hạ K⁺ & kiềm chuyển hóa!', x: 50, y: 40 },
        { n: 2, title: 'Nhóm Lợi tiểu Giữ Kali', desc: 'Spironolactone (đối kháng thụ thể Aldosterone) và Amiloride (chẹn trực tiếp kênh ENaC) giúp bảo tồn K⁺ nhưng dễ gây tăng K⁺ máu ở người suy thận.', x: 78, y: 50 }
      ],
      takeaway: 'Aldosterone tác dụng lên Tế bào Chính ống góp vỏ: TĂNG tái hấp thu Na⁺ (qua ENaC), TĂNG bài tiết K⁺ (ROMK) và H⁺ (tế bào kẽ α).'
    },
    {
      code: 'Hình 17.21',
      page: 'Bài 17 • tr.220',
      title: 'Cơ chế Tế bào của ADH (Vasopressin) Gắn Kênh Nước Aquaporin-2 (AQP2)',
      summary: 'Khi áp suất thẩm thấu máu tăng (>280–285 mOsm) hoặc giảm thể tích nặng, ADH gắn thụ thể V2 màng đáy-bên → tăng cAMP → kích hoạt PKA đẩy các túi chứa AQP2 ra hòa màng đỉnh.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Tín hiệu ADH – V2 – cAMP – PKA – AQP2 tại Ống góp',
        nodes: [
          { title: '1. ↑ ASTT máu / ↓ Thể tích tuần hoàn', sub: 'Vùng hạ đồi – Thùy sau Tuyến yên tiết ADH (AVP)', tone: 'amber' },
          { title: '2. ADH gắn Thụ thể V2 (Màng đáy-bên)', sub: 'Hoạt hóa Gs → Adenylyl cyclase → Tăng cAMP → PKA', tone: 'purple' },
          { title: '3. Hòa màng túi chứa AQP2 (Màng đỉnh)', sub: 'Mở hàng triệu kênh nước AQP2 mặt hướng lòng ống (AQP3/4 mở sẵn ở đáy)', tone: 'blue' },
          { title: '4. Cô đặc Nước tiểu (tới 1200 mOsm/L)', sub: 'Nước tự động rút qua AQP2 vào tủy thận ưu trương → Nước tiểu ít, đậm đặc', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Đái tháo nhạt Trung ương vs Đái tháo nhạt do Thận', desc: 'Trung ương: thiếu tiết ADH (đáp ứng tốt khi xịt Desmopressin V2). Do thận: đột biến hỏng thụ thể V2 hoặc AQP2 (hoặc ngộ độc Lithium) nên thận trơ với ADH.', x: 46, y: 50 },
        { n: 2, title: 'Khi vắng ADH (Uống nhiều nước)', desc: 'AQP2 bị nhập bào thu vào bào tương → ống góp không thấm nước → thải tối đa nước dư tạo nước tiểu loãng (~50 mOsm/L).', x: 84, y: 50 }
      ],
      takeaway: 'ADH gắn thụ thể V2 → cAMP → PKA → chèn kênh nước Aquaporin-2 (AQP2) lên màng đỉnh tế bào ống góp để cô đặc nước tiểu (50 → 1200 mOsm/L).'
    },
    {
      code: 'Hình 17.22',
      page: 'Bài 17 • tr.221',
      title: 'Bản đồ Tổng hợp Tái hấp thu & Bài tiết Dọc theo Toàn bộ Nephron',
      summary: 'Tổng kết vị trí giải phẫu – sinh lý của 4 phân đoạn nephron (Ống gần, Quai Henle, Ống xa, Ống góp) kèm tỷ lệ tái hấp thu từng chất và đích tác dụng các thuốc lợi tiểu.',
      imgSrc: 'assets/figures/fig_nephron.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Cầu thận & Ống lượn gần (~65–70%)', desc: 'Lọc 180 L/ngày; ống gần hấp thu 65% Na⁺/H2O (đẳng trương), 100% Glucose & AA, 85% HCO3⁻ và bài tiết acid/base hữu cơ (Creatinin, thuốc).', x: 28, y: 38 },
        { n: 2, title: 'Quai Henle (~25% NaCl) — Đích Lợi tiểu Quai', desc: 'Cành xuống thấm nước (cô đặc tới 1200); cành lên dày bơm NaCl qua NKCC2 không thấm nước (pha loãng còn 100) + tạo gradient tủy.', x: 42, y: 78 },
        { n: 3, title: 'Ống lượn xa (5%) & Ống góp (2–3% cuối + ADH)', desc: 'Thiazide tác động tại NCC ống xa; Aldosterone & Spironolactone chỉnh K⁺/Na⁺ ở ống góp vỏ; ADH đóng/mở AQP2 quyết định thể tích & độ đặc nước tiểu cuối cùng.', x: 72, y: 42 }
      ],
      takeaway: 'Tỷ lệ tái hấp thu Na⁺ lọc: Ống gần 65% → Quai Henle 25% → Ống xa 5% → Ống góp 2–3% → Thải ra ngoài < 1%.'
    },
    {
      code: 'Hình 18.1',
      page: 'Bài 18 • tr.223',
      title: 'Khái niệm Hệ số Thanh thải (Clearance: Cx = Ux × V / Px)',
      summary: 'Hệ số thanh thải là thể tích huyết tương ảo (mL) được thận lọc sạch hoàn toàn một chất X trong mỗi phút — thước đo vàng thăm dò GFR, RPF và sự bài tiết/tái hấp thu của ống thận.',
      svg: {
        kind: 'flow',
        banner: 'Công thức Thanh thải: C_X = (U_X × V) / P_X (Đơn vị: mL/phút)',
        nodes: [
          { title: 'C_Inulin ≈ 125 mL/phút (= GFR)', sub: 'Lọc tự do, KHÔNG tái hấp thu, KHÔNG bài tiết → Chuẩn vàng GFR', tone: 'green' },
          { title: 'C_Glucose = 0 mL/phút (< GFR)', sub: 'Lọc tự do rồi được tái hấp thu 100% ở ống gần (nếu đường huyết < 180)', tone: 'blue' },
          { title: 'C_Creatinin ≈ 125–140 mL/phút', sub: 'Lọc tự do + Bài tiết thêm nhẹ 10% ở ống gần (khá sát GFR lâm sàng)', tone: 'teal' },
          { title: 'C_PAH ≈ 625 mL/phút (= RPF)', sub: 'Lọc + Bài tiết sạch ~90% qua 1 lần qua thận → Đo Lưu lượng huyết tương thận', tone: 'purple' }
        ]
      },
      pins: [
        { n: 1, title: 'Quy tắc so sánh Cx với C_Inulin (GFR)', desc: 'Nếu Cx < GFR: chất đó được TÁI HẤP THU ròng (VD: Glucose = 0, Ure ~ 60). Nếu Cx > GFR: chất đó được BÀI TIẾT thêm (VD: PAH, K⁺ khi ăn nhiều, Creatinin nhẹ).', x: 50, y: 50 },
        { n: 2, title: 'Cách tính Lưu lượng Máu thận (RBF) từ PAH', desc: 'RPF = C_PAH / 0,9 (thực tế) → RBF = RPF / (1 − Hct) ≈ 625 / (1 − 0,45) ≈ 1150–1200 mL/phút (~20–25% cung lượng tim).', x: 84, y: 50 }
      ],
      takeaway: 'C_Inulin = GFR (125 mL/p). C_PAH = RPF (625 mL/p). Phân số lọc FF = GFR / RPF = 125/625 = 20%.'
    },
    {
      code: 'Hình 18.2',
      page: 'Bài 18 • tr.226',
      title: 'Tương quan Hyperbol Nghịch giữa GFR và Nồng độ Creatinine Huyết thanh',
      summary: 'Vì Creatinine nội sinh sinh ra tương đối hằng định ở khối cơ và thải chủ yếu qua lọc cầu thận nên GFR × P_Cr ≈ Hằng số — ở giai đoạn đầu GFR giảm một nửa (120→60) nhưng Creatinin máu mới tăng rất ít!',
      svg: {
        kind: 'curve',
        xLabel: 'Mức lọc Cầu thận GFR (mL/phút/1,73 m²)',
        yLabel: 'Creatinine huyết thanh P_Cr (mg/dL)',
        xTicks: [
          { x: 15, label: '15 (Suy giai đoạn cuối)' },
          { x: 50, label: '60 (Giảm 50% GFR)' },
          { x: 85, label: '120 (Bình thường)' }
        ],
        yTicks: [
          { y: 18, label: '1,0 mg/dL' },
          { y: 36, label: '2,0 mg/dL' },
          { y: 86, label: '8,0 mg/dL' }
        ],
        curves: [
          { name: 'Quan hệ nghịch Creatinine = Hằng số / GFR', color: '#dc2626', pts: [[12, 88], [26, 52], [50, 32], [85, 18]] }
        ]
      },
      pins: [
        { n: 1, title: '"Vùng mù" lâm sàng của Creatinine', desc: 'Khi GFR mất tới 50% (từ 120 tụt xuống 60 mL/phút), Creatinine máu mới chỉ nhích từ 0,8 lên ~1,6 mg/dL — rất dễ bỏ sót suy thận sớm nếu không tính eGFR (CKD-EPI / MDRD)!', x: 56, y: 66 },
        { n: 2, title: 'Ảnh hưởng khối cơ & tuổi', desc: 'Người già teo cơ suy kiệt có GFR rất thấp nhưng Creatinin vẫn bình thường giả tạo; cần đánh giá thêm Cystatin C hoặc độ thanh thải Creatinine 24h.', x: 24, y: 36 }
      ],
      takeaway: 'GFR giảm 50% (120→60) mới làm Creatinine máu tăng gấp đôi (~0,9→1,8 mg/dL); sau đó GFR tụt thêm chút ít Creatinine vọt lên rất nhanh!'
    },
    {
      code: 'Hình 18.3',
      page: 'Bài 18 • tr.233',
      title: 'Đường cong Lọc – Tái hấp thu – Bài tiết Glucose, Đoạn cong Splay & TmG',
      summary: 'Biểu đồ chuẩn độ glucose (Glucose titration curve) minh họa sự khác biệt giữa đường lý thuyết sắc cạnh (300 mg/dL) và đường thực tế bo tròn (đoạn cong Splay bắt đầu ở 180 mg/dL).',
      svg: {
        kind: 'curve',
        xLabel: 'Nồng độ Glucose huyết tương P_G (mg/dL)',
        yLabel: 'Tốc độ Vận chuyển Glucose (mg/phút)',
        xTicks: [
          { x: 20, label: '100' },
          { x: 42, label: '180 (Ngưỡng thực)' },
          { x: 64, label: '300 (Ngưỡng lý thuyết)' },
          { x: 88, label: '450' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 55, label: '375 (TmG)' },
          { y: 88, label: '600 mg/p' }
        ],
        zones: [
          { x1: 42, x2: 68, y1: 35, y2: 65, tone: 'amber', label: 'Vùng Splay (Bất đồng nhất nephron)' }
        ],
        curves: [
          { name: 'Lọc cầu thận (GFR × P_G)', color: '#0f172a', pts: [[10, 15], [64, 58], [88, 86]] },
          { name: 'Tái hấp thu Thực tế (có Splay → bão hòa TmG)', color: '#2563eb', pts: [[10, 15], [40, 38], [58, 52], [88, 55]] },
          { name: 'Bài xuất ra Nước tiểu', color: '#dc2626', dashed: true, pts: [[10, 15], [42, 16], [64, 24], [88, 48]] }
        ]
      },
      pins: [
        { n: 1, title: '2 nguyên nhân tạo đoạn cong Splay', desc: '(1) Tính không đồng nhất giải phẫu giữa ~1 triệu nephron (nephron có cầu lớn/ống ngắn bão hòa sớm); (2) Động học gắn SGLT không hoàn toàn dứt khoát ngay gần điểm bão hòa.', x: 54, y: 46 },
        { n: 2, title: 'Glucose niệu do Thận (Renal glucosuria)', desc: 'Đột biến gen SGLT2 làm TmG hạ rất thấp → có đường niệu ngay cả khi đường huyết đói hoàn toàn bình thường (~90 mg/dL).', x: 76, y: 66 }
      ],
      takeaway: 'Splay là khoảng bo tròn từ 180 → 300 mg/dL khiến glucose xuất hiện trong nước tiểu SỚM HƠN ngưỡng lý thuyết.'
    }
  ],

  // ========================================================================
  // BÀI 10: NỘI TIẾT THẬN, NƯỚC - ĐIỆN GIẢI & KIỀM TOAN (Bài 19)
  // ========================================================================
  10: [
    {
      code: 'Hình 19.1',
      page: 'Bài 19 • tr.236',
      title: 'Hệ Renin – Angiotensin – Aldosterone (RAAS) Điều hòa Huyết áp & Thể tích',
      summary: 'Giảm tưới máu thận, giảm NaCl tới Macula densa hoặc kích thích giao cảm β1 làm bộ máy cận cầu thận tiết Renin → tạo Angiotensin II co mạch mạnh + kích thích vỏ thượng thận tiết Aldosterone giữ muối nước.',
      imgSrc: 'assets/figures/fig_raas.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: '3 kích thích tiết Renin (Từ TB Cận cầu thận)', desc: '(1) Giảm áp lực tiểu ĐM vào; (2) Giảm NaCl tới Macula Densa; (3) Thần kinh giao cảm qua thụ thể β1 (chẹn β làm giảm tiết Renin!).', x: 24, y: 34 },
        { n: 2, title: 'Men chuyển ACE tại Nội mô Phổi', desc: 'Cắt Angiotensin I (10 aa) thành Angiotensin II (8 aa) cực mạnh, đồng thời phân hủy Bradykinin (→ tác dụng phụ ho khan của thuốc ACEi!).', x: 52, y: 48 },
        { n: 3, title: '4 đích tác dụng của Angiotensin II', desc: '(1) Co mạch toàn thân & ưu thế ĐM ra cầu thận; (2) Vỏ thượng thận tiết Aldosterone giữ Na⁺/thải K⁺; (3) Tuyến yên tiết ADH & kích khát; (4) Tăng tái hấp thu Na⁺ trực tiếp ở ống lượn gần (NHE3).', x: 74, y: 64 }
      ],
      takeaway: 'Thận tiết Renin → Gan cấp Angiotensinogen → Phổi có ACE chuyển Ang I thành Ang II → Thượng thận tiết Aldosterone giữ Na⁺ nước.'
    },
    {
      code: 'Hình 19.2',
      page: 'Bài 19 • tr.237',
      title: 'Trục Nội tiết Erythropoietin (EPO) Thận – Tủy xương',
      summary: 'Khi thiếu oxy mô tại thận (thiếu máu, độ cao, bệnh tim/phổi), nguyên bào sợi quanh ống thận kích hoạt yếu tố HIF-α tiết EPO đi qua máu kích thích tủy đỏ xương sản sinh hồng cầu.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Nội tiết Kích thích Tạo Hồng cầu bởi Thận',
        nodes: [
          { title: 'Thiếu O2 mô tại Vỏ/Tủy Thận', sub: 'Mất máu, thiếu máu, lên núi cao, bệnh phổi/tim tím', tone: 'red' },
          { title: 'Hoạt hóa HIF-1α → Thận tiết EPO (90%)', sub: 'Tế bào kẽ quanh ống lượn gần (Gan góp 10%)', tone: 'amber' },
          { title: 'Tủy xương Đỏ: CFU-E & Tiền nguyên HC', sub: 'EPO ức chế chết theo chương trình (apoptosis) & đẩy biệt hóa', tone: 'purple' },
          { title: '↑ Hồng cầu lưới & Hồng cầu trưởng thành', sub: 'Tăng vận chuyển O2 về thận → Ức chế ngược giảm tiết EPO', tone: 'green' }
        ],
        feedback: 'Feedback âm tính phục hồi PaO2 mô thận'
      },
      pins: [
        { n: 1, title: 'Suy thận mạn & Bệnh thận đa nang', desc: 'Suy thận mạn phá hủy tế bào kẽ thận gây thiếu EPO → thiếu máu đẳng sắc hồng cầu bình thường; ngược lại u thận/nang thận đôi khi tiết EPO quá mức gây đa hồng cầu.', x: 46, y: 40 },
        { n: 2, title: 'Vận động viên & Doping EPO', desc: 'Lạm dụng EPO ngoại sinh làm tăng quá cao Hematocrit (>55%) → máu đặc dễ huyết khối tắc mạch.', x: 78, y: 40 }
      ],
      takeaway: 'Thận là nguồn tiết chính Erythropoietin (85–90%) đáp ứng trực tiếp với tình trạng thiếu O2 tại nhu mô thận.'
    },
    {
      code: 'Hình 19.3',
      page: 'Bài 19 • tr.238',
      title: 'Tổng hợp Hormon Calcitriol (1,25-(OH)2 Vitamin D3) qua Da → Gan → Thận',
      summary: 'Vitamin D3 từ da/thức ăn phải trải qua 2 lần hydroxyl hóa ở Gan (vị trí 25) rồi ở Ống lượn gần Thận (enzyme 1α-hydroxylase được PTH kích thích) mới trở thành dạng hoạt động Calcitriol.',
      svg: {
        kind: 'flow',
        banner: 'Con đường Hoạt hóa 3 Chặng Tạo Hormon Calcitriol',
        nodes: [
          { title: '1. Da (Tia UVB) / Thức ăn', sub: '7-dehydrocholesterol → Cholecalciferol (Vitamin D3 chưa hoạt tính)', tone: 'amber' },
          { title: '2. Gan (25-hydroxylase)', sub: 'Tạo 25-(OH)-D3 (Dạng dự trữ đo nồng độ trong máu)', tone: 'blue' },
          { title: '3. Thận — Ống lượn gần (1α-hydroxylase)', sub: 'PTH & ↓ Phosphate KÍCH THÍCH chuyển thành 1,25-(OH)2-D3 (Calcitriol)', tone: 'red' },
          { title: '4. Ruột non – Xương – Thận', sub: 'Tăng hấp thu mạnh CẢ Ca²⁺ lẫn PO4³⁻ ở ruột (Calbindin)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Enzyme quyết định ở Thận: 1α-hydroxylase', desc: 'Được kích thích mạnh bởi PTH và hạ Phosphate máu; bị ức chế bởi FGF-23 và tăng Ca²⁺/Calcitriol.', x: 64, y: 50 },
        { n: 2, title: 'Loạn dưỡng xương do Thận (Suy thận mạn)', desc: 'Suy thận mất enzym 1α-hydroxylase → thiếu Calcitriol → giảm hấp thu Ca²⁺ ruột → hạ Ca²⁺ máu → cường cận giáp thứ phát gây tiêu xương.', x: 84, y: 50 }
      ],
      takeaway: 'Da (D3) → Gan (25-OH-D3) → Thận (1α-hydroxylase tạo Calcitriol). Thiếu ở suy thận mạn gây hạ Ca²⁺ & cường cận giáp thứ phát.'
    },
    {
      code: 'Hình 19.4',
      page: 'Bài 19 • tr.240',
      title: 'Cân bằng 4 Lực Starling tại Mao mạch Hệ thống (Phân bố dịch Kẽ & Phù)',
      summary: 'Ở đầu tiểu ĐM, tổng lực đẩy ra (+10 mmHg) thắng áp suất keo giúp lọc chất dinh dưỡng ra dịch kẽ; ở đầu tiểu TM, lực đẩy vào (−7 mmHg) kéo 85–90% dịch trở lại máu, còn 10% theo Bạch huyết.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 38, w: 280, h: 130, label: 'Đầu ĐM Mao mạch (LỌC RA: +10)', sub: 'Đẩy ra: P_C = 35 + π_IF = 3 = 38 mmHg\nKéo vào: π_P = 28 + P_IF = 0 = 28 mmHg\nHiệu lực: +10 mmHg Đẩy dịch ra Kẽ', tone: 'red' },
          { x: 360, y: 38, w: 280, h: 130, label: 'Đầu TM Mao mạch (TÁI HẤP THU: −10)', sub: 'Đẩy ra: P_C = 15 + π_IF = 3 = 18 mmHg\nKéo vào: π_P = 28 + P_IF = 0 = 28 mmHg\nHiệu lực: −10 mmHg Kéo dịch vào Máu', tone: 'blue' },
          { x: 60, y: 200, w: 560, h: 95, label: '4 Cơ chế Gây Phù Mô Kẽ', sub: '1. ↑ P_C (suy tim, DVT) • 2. ↓ π_P (hội chứng thận hư, xơ gan, suy dinh dưỡng)\n3. ↑ Tính thấm mao mạch (viêm, sốc) • 4. Tắc Bạch huyết (giun chỉ, nạo hạch)', tone: 'amber' }
        ],
        links: [
          { x1: 320, y1: 103, x2: 356, y2: 103, label: 'Máu chảy', color: '#475569' }
        ]
      },
      pins: [
        { n: 1, title: 'Vai trò Bạch huyết (10% dịch dư)', desc: 'Lượng dịch lọc ra luôn hơi nhỉnh hơn lượng tái hấp thu; hệ bạch huyết gom ~2–4 L/ngày cùng các phân tử protein thoát kẽ trả về tĩnh mạch dưới đòn.', x: 50, y: 30 },
        { n: 2, title: 'Áp suất keo Albumin (π_P = 28 mmHg)', desc: 'Albumin chiếm ~80% áp suất keo huyết tương; mất Albumin trong hội chứng thận hư hoặc giảm tổng hợp ở xơ gan làm phù mềm ấn lõm toàn thân.', x: 50, y: 76 }
      ],
      takeaway: '4 lực Starling: P_C (35→15), P_IF (0), π_P (28), π_IF (3). Đầu ĐM lọc ra, đầu TM kéo lại + Bạch huyết dọn phần dư.'
    },
    {
      code: 'Hình 19.5',
      page: 'Bài 19 • tr.244',
      title: 'Tín hiệu Nội bào β2-Adrenergic & Insulin Thúc đẩy Thu nhận K⁺ và Glucose vào Tế bào',
      summary: 'Cơ thể giữ K⁺ máu cực chặt (3,5–5,0 mEq/L) nhờ điều hòa tức thời (bơm K⁺ vào trong tế bào bằng Insulin và kích thích β2-adrenergic) song song thải chậm qua thận.',
      svg: {
        kind: 'membrane',
        topLabel: 'Dịch Ngoại bào (K⁺ ~ 4 mEq/L; Na⁺ ~ 140 mEq/L)',
        bottomLabel: 'Nội bào Cơ / Gan (K⁺ ~ 150 mEq/L — Kho dự trữ 98% K⁺ cơ thể)',
        memLabel: 'Màng Tế bào Cơ xương & Gan',
        channels: [
          { label: 'Insulin → Thụ thể TK', sub: 'PI3K → Chuyển GLUT4 + Kích NHE & Na⁺-K⁺-ATPase', dir: 'down', tone: 'blue', top: 'Hạ K⁺ máu & Đường huyết', bottom: 'Insulin + Glucose trị tăng K⁺ cấp!' },
          { label: 'Adrenalin → β2-AR', sub: 'Gs → cAMP → PKA hoạt hóa bơm Na⁺-K⁺-ATPase', dir: 'down', tone: 'amber', top: 'Đẩy nhanh K⁺ vào tế bào', bottom: 'Salbutamol khí dung hạ K⁺ cấp' },
          { label: 'Bơm Na⁺-K⁺-ATPase', sub: '3 Na⁺ ra / 2 K⁺ vào tế bào', dir: 'down', tone: 'green', top: 'Tăng bơm khi có Insulin / β2 / Kiềm máu', bottom: 'Giảm bơm gây Tăng K⁺ máu' }
        ]
      },
      pins: [
        { n: 1, title: 'Ứng dụng cấp cứu Tăng Kali máu nặng', desc: 'Trong khi chờ lọc thận, để đẩy tức thời K⁺ từ máu vào tế bào ta truyền Insulin pha Glucose (+ khí dung β2 chủ vận Salbutamol + Natri Bicarbonate nếu có toan).', x: 24, y: 50 },
        { n: 2, title: 'Khi truyền Insulin đơn độc không kèm Glucose', desc: 'Gây hạ đường huyết chết người nếu bệnh nhân chưa tăng đường máu; ngược lại thiếu Insulin ở DKA làm K⁺ tràn từ tế bào ra máu gây tăng K⁺ giả tạo.', x: 76, y: 50 }
      ],
      takeaway: '4 yếu tố ĐẨY K⁺ VÀO tế bào (gây hạ K⁺ máu): (1) Insulin, (2) Kích thích β2-adrenergic, (3) Kiềm máu, (4) Aldosterone (qua thải thận).'
    },
    {
      code: 'Hình 19.6',
      page: 'Bài 19 • tr.245',
      title: 'Ảnh hưởng Toan chuyển hóa Muối vô cơ (A) vs Toan Hữu cơ (B) lên Kali máu',
      summary: 'Điểm tinh tế hay thi: Toan chuyển hóa do acid vô cơ (HCl, NH4Cl — Anion Gap bình thường) đẩy K⁺ từ tế bào ra làm TĂNG K⁺ máu; còn Toan hữu cơ (Acid lactic, Ceton) đi kèm anion dễ thấm vào tế bào nên ÍT gây tăng K⁺ do H⁺ trực tiếp.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'A. Toan Muối vô cơ (HCl / NH4Cl)', subtitle: 'Cl⁻ khó thấm qua màng tế bào → TĂNG K⁺ máu', tone: 'red', bullets: ['H⁺ đi vào tế bào để đệm; anion Cl⁻ bị giữ ở ngoài không vào theo được', 'Để giữ trung hòa điện tích, K⁺ dương bắt buộc phải đi RA khỏi tế bào vào máu', 'Mỗi ΔpH giảm 0,1 → K⁺ máu tăng ~0,6 mEq/L!'] },
          { title: 'B. Toan Acid Hữu cơ (Lactate, Ketoacid)', subtitle: 'Anion hữu cơ thấm cùng H⁺ → ÍT làm dịch chuyển K⁺ trực tiếp', tone: 'blue', bullets: ['H⁺ đi vào tế bào CÙNG VỚI anion Lactate⁻ / Ketoacetate⁻ qua đồng vận chuyển MCT', 'Trung hòa điện tích nội bào không bị phá vỡ → ít đẩy K⁺ ra theo cơ chế đệm điện tích', 'Chú ý: Ở bệnh nhân DKA tăng K⁺ máu là do THIẾU INSULIN & tăng áp suất thẩm thấu, không phải do acid ceton đơn thuần!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Cl⁻ không vào được theo H⁺', desc: 'Sự trao đổi 1 H⁺ vào / 1 K⁺ ra gây tăng K⁺ máu rõ rệt trong toan chuyển hóa không tăng khoảng trống anion.', x: 26, y: 40 },
        { n: 2, title: 'Cảnh giác lúc truyền Insulin trị DKA', desc: 'Vì tổng lượng K⁺ cơ thể bệnh nhân DKA thực ra đang CẠN KIỆT (mất qua nước tiểu), ngay khi chích Insulin đẩy K⁺ vào lại tế bào sẽ sụp K⁺ máu cực nhanh nếu không bù K⁺ kịp!', x: 74, y: 66 }
      ],
      takeaway: 'Toan vô cơ (HCl) đẩy mạnh K⁺ ra máu (ΔpH ↓ 0,1 → K⁺ ↑ ~0,6); Toan hữu cơ (Lactic/Ceton) vận chuyển cặp H⁺-anion nên ít đẩy K⁺ theo trao đổi ion.'
    },
    {
      code: 'Hình 19.7',
      page: 'Bài 19 • tr.247',
      title: 'Điều hòa pH Nội bào qua Kênh Trao đổi Na⁺/H⁺ (NHE) & Trao đổi Cl⁻/HCO3⁻',
      summary: 'Mỗi tế bào duy trì pH nội bào (~7,1–7,2) trước hàng loạt acid chuyển hóa bằng các hệ đệm nội bào phối hợp với bơm đẩy H⁺ ra ngoài (NHE1) và thu HCO3⁻.',
      svg: {
        kind: 'membrane',
        topLabel: 'Dịch Ngoại bào (pH ≈ 7,40 • Na⁺ 140 mEq/L)',
        bottomLabel: 'Nội bào (pH ≈ 7,15 • Sản sinh H⁺ chuyển hóa liên tục)',
        memLabel: 'Màng Tế bào — Ổn định pH Nội bào',
        channels: [
          { label: 'Đối vận NHE1 (Na⁺/H⁺)', sub: 'Đẩy H⁺ thừa ra ngoài nhờ Na⁺ vào', dir: 'both', tone: 'red', top: 'Hoạt hóa mạnh khi tế bào bị toan', bottom: 'Cơ chế chống toan nội bào chính' },
          { label: 'Đồng vận Na⁺–HCO3⁻ (NBC)', sub: 'Nhập HCO3⁻ vào trung hòa H⁺', dir: 'down', tone: 'blue', top: 'Hút kiềm HCO3⁻ vào bào tương', bottom: 'Bảo vệ pH nội bào' },
          { label: 'Đối vận Cl⁻/HCO3⁻ (AE)', sub: 'Thải HCO3⁻ thừa nếu tế bào bị kiềm', dir: 'both', tone: 'green', top: 'Hoạt động khi pH nội bào quá kiềm', bottom: 'Đưa Cl⁻ vào, xuất HCO3⁻' }
        ]
      },
      pins: [
        { n: 1, title: 'Ưu tiên số 1 của NHE1', desc: 'Tận dụng gradient Na⁺ do Na⁺-K⁺-ATPase tạo ra để bơm tống proton H⁺ thừa ra ngoại bào.', x: 24, y: 50 },
        { n: 2, title: 'Phối hợp hai chiều chống toan & chống kiềm', desc: 'Khi nội bào bị TOAN → tăng NHE1 & NBC. Khi nội bào bị KIỀM → tăng AE xuất bớt HCO3⁻.', x: 76, y: 50 }
      ],
      takeaway: 'pH nội bào (~7,15) được bảo vệ khỏi toan hóa nhờ NHE1 (thải H⁺) + NBC (nhập HCO3⁻), và khỏi kiềm hóa nhờ AE (thải HCO3⁻).'
    },
    {
      code: 'Hình 19.8',
      page: 'Bài 19 • tr.248',
      title: 'Hệ Đệm Bicarbonate & Phương trình Henderson-Hasselbalch (Phổi + Thận)',
      summary: 'Hệ đệm mở quan trọng nhất dịch ngoại bào (pH = 6,1 + log([HCO3⁻] / 0,03×PaCO2)) vì hai vế có thể điều chỉnh độc lập bởi THẬN (HCO3⁻) và PHỔI (PaCO2).',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 260, h: 115, label: 'Vế Tử số: Thận chỉnh [HCO3⁻]', sub: 'Bình thường: 24 mEq/L (22–26)\nĐáp ứng chậm (giờ → nhiều ngày)', tone: 'blue' },
          { x: 380, y: 40, w: 260, h: 115, label: 'Vế Mẫu số: Phổi chỉnh PaCO2', sub: 'Bình thường: 40 mmHg (0,03×40 = 1,2)\nĐáp ứng cực nhanh (vài phút)', tone: 'red' },
          { x: 90, y: 190, w: 500, h: 105, label: 'pH máu ĐM = 6,1 + log ( 24 / 1,2 ) = 6,1 + log(20) = 7,40', sub: 'Rối loạn chuyển hóa → thay đổi [HCO3⁻] (Phổi bù bằng PaCO2)\nRối loạn hô hấp → thay đổi PaCO2 (Thận bù bằng [HCO3⁻])', tone: 'green' }
        ],
        links: [
          { x1: 170, y1: 155, x2: 240, y2: 188, label: 'Tử số (24)', color: '#2563eb' },
          { x1: 510, y1: 155, x2: 440, y2: 188, label: 'Mẫu số (40)', color: '#dc2626' }
        ]
      },
      pins: [
        { n: 1, title: 'Tỷ lệ vàng 20 : 1', desc: 'Chừng nào tỷ lệ [HCO3⁻] / (0,03 × PaCO2) còn giữ gần 20 thì pH máu còn giữ quanh 7,40 (Giới hạn sống: pH 6,8 – 7,8).', x: 50, y: 74 },
        { n: 2, title: 'Tại sao gọi là Hệ đệm mở?', desc: 'Nhờ Phổi thông thương khí quyển liên tục thổi bỏ CO2 và Thận sản xuất mới/thải HCO3⁻ mà dung lượng đệm trên cơ thể sống cực lớn (vượt xa ống nghiệm đóng kín).', x: 76, y: 30 }
      ],
      takeaway: 'PHỔI kiểm soát PaCO2 trong vài phút (Mẫu số); THẬN kiểm soát HCO3⁻ trong vài ngày (Tử số); pH bình thường = 7,35–7,45 khi tỷ lệ = 20:1.'
    },
    {
      code: 'Hình 19.9',
      page: 'Bài 19 • tr.249',
      title: 'Phối hợp Hệ đệm Bicarbonate – Hemoglobin – Hamburger tại Mô & Phổi',
      summary: 'Máu tận dụng chính hồng cầu làm nhà máy biến đổi CO2 thành HCO3⁻ vận chuyển trong huyết tương rồi hoàn nguyên CO2 thở ra ở phổi, giúp giữ ΔpH động-tĩnh mạch chỉ lệch ~0,03–0,04.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Tại Mao mạch Mô (Thu nhận acid bay hơi)', subtitle: 'pH ĐM 7,40 → pH TM ~7,36', tone: 'red', bullets: ['CO2 từ tế bào đi vào hồng cầu + H2O → H2CO3 → H⁺ + HCO3⁻', 'H⁺ bị Hb khử (Deoxy-Hb) bắt giữ thành HHb (không gây tụt pH)', 'HCO3⁻ xuất ra huyết tương trao đổi với Cl⁻ qua Band 3'] },
          { title: 'Tại Mao mạch Phổi (Thải sạch CO2)', subtitle: 'pH TM 7,36 → pH ĐM ~7,40', tone: 'blue', bullets: ['Hb gắn O2 thành HbO2 → giải phóng ion H⁺', 'H⁺ gặp HCO3⁻ từ huyết tương quay vào → H2CO3 → H2O + CO2', 'CO2 bay ra phế nang thải trừ mỗi ngày ~15.000–20.000 mmol acid bay hơi!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Hai nhóm Acid trong cơ thể', desc: 'Acid bay hơi (H2CO3/CO2 ~15.000 mmol/ngày) do PHỔI thải; Acid cố định (H2SO4, H3PO4, lactic ~50–100 mEq/ngày) BẮT BUỘC phải do THẬN thải qua nước tiểu!', x: 50, y: 72 },
        { n: 2, title: 'Tầm quan trọng kép của Hồng cầu', desc: 'Hồng cầu vừa chở 98,5% O2, vừa chứa toàn bộ Carbonic Anhydrase biến 70% CO2 thành HCO3⁻ và vừa làm hệ đệm chính cho H⁺.', x: 26, y: 36 }
      ],
      takeaway: 'Phổi thải acid bay hơi (CO2); chỉ duy nhất THẬN thải được acid cố định (H⁺) và tái sinh HCO3⁻ cho máu.'
    },
    {
      code: 'Hình 19.10',
      page: 'Bài 19 • tr.250',
      title: 'Bài tiết H⁺ & Tái hấp thu HCO3⁻ ở Ống gần vs Tạo HCO3⁻ mới (Đệm Phosphate) ở Ống góp',
      summary: 'Ống gần chỉ THU HỒI 85% HCO3⁻ cũ; để bù lượng HCO3⁻ đã mất khi trung hòa acid cố định hàng ngày, tế bào kẽ alpha (α-intercalated) ở ống góp bơm H⁺ bằng H⁺-ATPase cho gắn vào HPO4²⁻ tạo acid chuẩn độ và SINH MỚI 1 HCO3⁻ vào máu.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Trái: Ống lượn gần (Thu hồi HCO3⁻)', subtitle: '1 H⁺ ra trung hòa 1 HCO3⁻ lọc → Không tạo kiềm mới', tone: 'blue', bullets: ['NHE3 đẩy H⁺ ra kết hợp HCO3⁻ trong dịch lọc thành CO2', 'Bên trong tế bào: CO2 + H2O → H⁺ + HCO3⁻ → đưa lại vào máu', 'Giữ nguyên trữ lượng HCO3⁻, nước tiểu chưa giảm sâu pH'] },
          { title: 'Phải: Tế bào Kẽ α Ống góp (Sinh HCO3⁻ MỚI)', subtitle: 'Đệm Phosphate (H2PO4⁻ — Acid chuẩn độ)', tone: 'green', bullets: ['H⁺-ATPase và H⁺-K⁺-ATPase bơm chủ động H⁺ ra lòng ống (hạ pH niệu tới 4,5)', 'H⁺ gắn vào HPO4²⁻ → H2PO4⁻ thải ra nước tiểu (không quay lại tế bào)', 'Mỗi H⁺ thải qua H2PO4⁻ giúp tế bào đẩy 1 HCO3⁻ HOÀN TOÀN MỚI vào máu!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Giới hạn pH tối thiểu nước tiểu (~4,5)', desc: 'Bơm H⁺-ATPase ngừng chạy khi pH lòng ống < 4,5. Nhờ hệ đệm HPO4²⁻ và NH3 giữ ion H⁺ lại mà thận thải được lượng lớn H⁺ trước khi chạm ngưỡng 4,5.', x: 74, y: 40 },
        { n: 2, title: 'Toan hóa ống thận típ I (RTA típ I - Ống xa)', desc: 'Hỏng bơm H⁺-ATPase tế bào kẽ α → không axit hóa được nước tiểu (pH niệu luôn > 5,5 dù máu đang toan nặng) + hạ K⁺ máu + sỏi thận Canxi phosphate.', x: 74, y: 70 }
      ],
      takeaway: 'Cứ 1 ion H⁺ được thải cùng Phosphate (H2PO4⁻) hoặc Amoni (NH4⁺) ở ống góp thì máu nhận lại 1 HCO3⁻ MỚI tinh!'
    },
    {
      code: 'Hình 19.11',
      page: 'Bài 19 • tr.251',
      title: 'Hệ Đệm Amoni (NH4⁺) từ Glutamine ở Ống gần & Khuếch tán NH3 ở Ống góp',
      summary: 'Hệ đệm mạnh nhất và thích nghi được của thận khi toan chuyển hóa kéo dài: ống gần chuyển hóa acid amin Glutamine tạo 2 NH4⁺ + 2 HCO3⁻ mới; khi toan nặng, tổng hợp NH4⁺ có thể tăng gấp 5–10 lần.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Trái: Ống lượn gần (Tổng hợp NH4⁺)', subtitle: 'Glutamine → 2 NH4⁺ + 2 HCO3⁻ mới', tone: 'amber', bullets: ['Enzym Glutaminase cắt Glutamine khi pH máu giảm (toan chuyển hóa)', 'NH4⁺ được bài tiết vào lòng ống qua NHE3 (thay chỗ cho H⁺)', '2 ion HCO3⁻ mới đi vào máu → trực tiếp nâng dự trữ kiềm'] },
          { title: 'Phải: Tủy thận & Ống góp (Bẫy ion NH3/NH4⁺)', subtitle: 'NH3 tự do thấm màng → bắt H⁺ thành NH4⁺ không thấm ngược', tone: 'purple', bullets: ['NH4⁺ tái hấp thu một phần ở quai Henle tạo kho dự trữ NH3/NH4⁺ vùng tủy', 'Khí NH3 trung hòa khuếch tán vào lòng ống góp rồi bắt ngay H⁺ thành NH4⁺ mang điện (+)', 'NH4⁺ bị "bẫy" thải vĩnh viễn ra nước tiểu kèm Cl⁻ → tạo thêm HCO3⁻ mới cho máu!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Đáp ứng thích nghi trong Toan mạn (Đói, DKA)', desc: 'Lượng Phosphate (acid chuẩn độ) bị giới hạn bởi lượng lọc (~30–40 mEq/ngày), nhưng sản xuất NH4⁺ từ Glutamine có thể tăng tới 300–400 mEq/ngày!', x: 26, y: 50 },
        { n: 2, title: 'Cơ chế bẫy khuếch tán (Diffusion Trapping)', desc: 'NH3 tan trong lipid qua màng tự do; hễ gặp H⁺ trong nước tiểu biến thành NH4⁺ phân cực là mất khả năng quay lại máu.', x: 74, y: 50 }
      ],
      takeaway: 'Toan chuyển hóa kích thích Glutaminase ở ống gần biến Glutamine thành 2 NH4⁺ (thải niệu) + 2 HCO3⁻ mới (bù máu) — cơ chế bù trừ kiềm-toan dài hạn mạnh nhất.'
    }
  ],

  // ========================================================================
  // BÀI 11: TIÊU HÓA Ở DẠ DÀY (Bài 22)
  // ========================================================================
  11: [
    {
      code: 'Hình 22.1',
      page: 'Bài 22 • tr.273',
      title: 'Các Vùng Chức năng Giải phẫu – Sinh lý của Dạ dày',
      summary: 'Dạ dày chia làm 2 nửa chức năng rõ rệt: Phần gần (Đáy vị + Thân vị chứa thức ăn & tiết HCl/Pepsinogen/IF) và Phần xa (Hang vị + Môn vị nghiền nhào trộn & tiết Gastrin).',
      imgSrc: 'assets/figures/fig_stomach.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Đáy vị & Thân vị (Vùng chứa & Tuyến Acid)', desc: 'Trương lực giãn tiếp nhận (Receptive relaxation qua dây X) chứa tới 1,5 L thức ăn mà áp suất không tăng; tuyến đáy vị chứa TB Thành (HCl, IF) & TB Chính (Pepsinogen).', x: 38, y: 34 },
        { n: 2, title: 'Tạo nhịp sóng chậm bờ cong lớn', desc: 'Tế bào kẽ Cajal ở giữa thân vị phát sóng chậm ~3 lần/phút lan xuống hang vị tạo sóng nhu động.', x: 64, y: 46 },
        { n: 3, title: 'Hang vị & Cơ thắt Môn vị (Nghiền & Điều tiết thoát)', desc: 'Sóng nhu động tăng tốc mạnh nghiền nát thức ăn; môn vị hé mở chỉ cho hạt < 1–2 mm thoát xuống tá tràng.', x: 38, y: 74 }
      ],
      takeaway: 'Phần trên dạ dày (Đáy/Thân): Giãn chứa + Tiết HCl/Pepsinogen/IF. Phần dưới (Hang/Môn vị): Co bóp nghiền + TB G tiết Gastrin.'
    },
    {
      code: 'Hình 22.2',
      page: 'Bài 22 • tr.274',
      title: 'Cử động Cơ học Dạ dày (Mở Môn vị đẩy dưỡng trấp vs Đóng Môn vị dội ngược nhào trộn)',
      summary: 'Khi sóng nhu động dồn xuống hang vị, một lượng nhỏ dưỡng trấp nhuyễn lọt qua môn vị, ngay sau đó cơ thắt môn vị đóng sập ép phần lớn thức ăn dội ngược trở lại ("retropulsion") để nghiền nát và trộn dịch vị.',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Đẩy Dưỡng trấp & Thoát nhẹ (Propulsion)', subtitle: 'Cơ thắt Môn vị hé mở thoáng qua', tone: 'blue', bullets: ['Sóng nhu động (3 lần/phút) từ giữa thân vị tăng dần biên độ xuống hang vị', 'Dưỡng trấp lỏng và các hạt nhỏ (< 1–2 mm) được bơm qua môn vị sang hành tá tràng', 'Chất lỏng thoát nhanh nhất; Glucid nhanh → Protein trung bình → Lipid chậm nhất'] },
          { title: '2. Đóng Môn vị & Dội ngược (Retropulsion)', subtitle: 'Cơ chế nghiền nát cơ học chính', tone: 'amber', bullets: ['Sóng nhu động tới hang vị làm cơ thắt môn vị đóng chặt tức thì', 'Khối thức ăn rắn đâm vào cổng đóng bị ép phụt ngược trở về thân vị với lực cắt xoáy cực lớn', 'Lặp đi lặp lại cho tới khi thành nhũ trấp đồng nhất'] }
        ]
      },
      pins: [
        { n: 1, title: 'Hội chứng Dumping sau cắt dạ dày', desc: 'Mất van môn vị hoặc nối vị-tràng khiến thức ăn ưu trương đổ ồ ạt xuống hỗng tràng gây kéo nước tụt HA (Dumping sớm) hoặc tăng Insulin hạ đường huyết muộn.', x: 26, y: 50 },
        { n: 2, title: 'Retropulsion là động tác nghiền chính', desc: 'Hang vị như máy xay sinh tố nghiền cơ học hạt rắn thành < 2 mm trước khi xuống ruột non.', x: 74, y: 50 }
      ],
      takeaway: 'Đóng môn vị tạo dòng dội ngược (Retropulsion) nghiền thức ăn; chỉ hạt < 1–2 mm lọt qua được lúc tiêu hóa (hạt lớn hơn thoát sau bữa nhờ sóng MMC).'
    },
    {
      code: 'Hình 22.3',
      page: 'Bài 22 • tr.275',
      title: 'Trung tâm Nôn & Vùng Khởi phát Hóa cảm thụ (CTZ)',
      summary: 'Phản xạ nôn được điều phối bởi Trung tâm Nôn ở hành não, tiếp nhận 4 đường kích thích: vùng CTZ (thuốc, độc tố, ure huyết), tiền đình (say tàu xe), dây X từ đường tiêu hóa và vỏ não.',
      svg: {
        kind: 'flow',
        banner: '4 Ngõ vào Trung tâm Nôn (Hành não) & Diễn biến Cơ học',
        nodes: [
          { title: '4 Nguồn kích thích', sub: '1. CTZ (sàn não thất IV: D2, 5-HT3)\n2. Tiền đình (H1, M1) • 3. Dây X (ruột căng/viêm) • 4. Vỏ não', tone: 'amber' },
          { title: 'Trung tâm Nôn (Hành não)', sub: 'Khởi phát phản xạ ngược nhu động ruột non & giãn tâm vị', tone: 'red' },
          { title: 'Phản xạ Bảo vệ Đường thở', sub: 'Hít sâu → Đóng thanh môn & nâng khẩu cái mềm bịt mũi hầu', tone: 'blue' },
          { title: 'Tống xuất (Co cơ bụng & Hoành)', sub: 'Cơ thành bụng co mạnh + Hạ tâm vị/giãn thân vị → Đẩy chất nôn ra ngoài', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Vùng CTZ (Area postrema — Ngoài hàng rào máu-não)', desc: 'Nằm ở sàn não thất IV tiếp xúc trực tiếp với máu nên nhạy cảm với thuốc hóa trị (giàu thụ thể 5-HT3 → trị bằng Ondansetron) và morphin/apomorphin (D2 → Metoclopramide).', x: 18, y: 50 },
        { n: 2, title: 'Nôn là co cơ BỤNG & HOÀNH, không phải cơ dạ dày', desc: 'Lúc nôn, bản thân cơ dạ dày & tâm vị GIÃN ra; áp lực tống thức ăn hoàn toàn đến từ sự co thắt dữ dội của cơ thành bụng và cơ hoành kèm phản nhu động tá tràng.', x: 82, y: 50 }
      ],
      takeaway: 'CTZ giàu thụ thể D2, 5-HT3 (trị nôn do thuốc/hóa trị); Tiền đình giàu H1, M1 (trị say tàu xe). Lúc nôn dạ dày giãn, cơ thành bụng co ép tống.'
    },
    {
      code: 'Hình 22.4',
      page: 'Bài 22 • tr.276',
      title: 'Tín hiệu từ Tá tràng Ức chế Thoát Thức ăn khỏi Dạ dày (Enterogastric Reflex & Hormon)',
      summary: 'Khi tá tràng nhận quá nhiều dưỡng trấp (căng thành, acid pH < 3,5–4, ưu trương hoặc nhiều mỡ/protein), nó gửi phản xạ thần kinh + hormon ngược về dạ dày làm chậm rỗng để kịp tiêu hóa.',
      svg: {
        kind: 'cycle',
        centerTitle: 'PHANH DẠ DÀY',
        centerSub: 'Tốc độ thoát ≈ Tiêu hóa ruột',
        centerTone: 'amber',
        steps: [
          { label: 'Dưỡng trấp xuống Tá tràng', detail: 'Acid (pH<4), Mỡ, Ưu trương, Căng thành', tone: 'red' },
          { label: 'Phản xạ Ruột – Dạ dày', detail: 'TK ruột tại chỗ + Dây X ức chế bơm môn vị', tone: 'blue' },
          { label: 'Hormon Cholecystokinin (CCK)', detail: 'Kích thích bởi Mỡ/Acid amin → Co cơ thắt môn vị cực mạnh!', tone: 'purple' },
          { label: 'Hormon Secretin & GIP', detail: 'Kích thích bởi Acid/Glucose → Giảm nhu động & giảm tiết HCl', tone: 'teal' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao bữa ăn nhiều Dầu mỡ no rất lâu?', desc: 'Acid béo chuỗi dài kích thích tế bào I tá tràng tiết CCK làm co chặt cơ thắt môn vị và giãn thân vị → giữ thức ăn trong dạ dày chậm thoát nhiều giờ.', x: 30, y: 74 },
        { n: 2, title: 'Tác nhân ức chế nhanh nhất', desc: 'Mỡ (CCK) mạnh nhất, sau đó đến ưu trương và dịch acid HCl (Secretin).', x: 50, y: 50 }
      ],
      takeaway: 'Tá tràng hãm thoát dạ dày qua Phản xạ ruột-dạ dày + Hormon CCK (do MỠ), Secretin (do ACID) và GIP.'
    },
    {
      code: 'Hình 22.5',
      page: 'Bài 22 • tr.277',
      title: 'Cấu tạo Tuyến Đáy vị & Hệ thống Tiểu quản Nội bào Tế bào Thành (Parietal Cell)',
      summary: 'Tuyến đáy vị có đủ 3 loại tế bào chính: Tế bào Cổ tuyến tiết nhầy, Tế bào Chính tiết Pepsinogen và Tế bào Thành tiết HCl + Yếu tố nội tại (IF). Khi hoạt hóa, tế bào thành bung rộng tiểu quản nội bào gắn bơm H⁺-K⁺-ATPase.',
      imgSrc: 'assets/figures/fig_stomach_gland.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Tế bào Cổ tuyến nhầy (Mucous neck cell)', desc: 'Tiết chất nhầy giàu Mucin và HCO3⁻ tạo hàng rào bảo vệ niêm mạc chống HCl và Pepsin tự tiêu.', x: 46, y: 24 },
        { n: 2, title: 'Tế bào Thành / Viền (Parietal cell)', desc: 'Tiết HCl (pH ~ 0,8–1,5) và Yếu tố nội tại (IF gắn B12). Lúc kích thích, túi ống nội bào hòa nhập tạo vi nhung mao dày đặc chứa bơm proton.', x: 36, y: 52 },
        { n: 3, title: 'Tế bào Chính (Chief cell) & TB Nội tiết ECL/G/D', desc: 'Tế bào Chính tiết Pepsinogen (hoạt hóa thành Pepsin nhờ HCl ở pH < 3). Vùng hang vị có TB G tiết Gastrin và TB D tiết Somatostatin.', x: 64, y: 72 }
      ],
      takeaway: 'Tuyến đáy vị: Tế bào Thành → HCl + IF; Tế bào Chính → Pepsinogen; Tế bào Nhầy → Chất nhầy + HCO3⁻ bảo vệ.'
    },
    {
      code: 'Hình 22.6',
      page: 'Bài 22 • tr.278',
      title: 'Cơ chế Tế bào Bài tiết HCl (Bơm H⁺-K⁺-ATPase & Làn sóng Kiềm Sau ăn)',
      summary: 'Tế bào thành bơm H⁺ vào lòng dạ dày ngược gradient 1 triệu lần nhờ bơm H⁺-K⁺-ATPase (tốn ATP); mỗi ion H⁺ tiết ra đi kèm 1 Cl⁻ ra theo và đẩy ngược 1 HCO3⁻ vào máu tĩnh mạch ("Alkaline tide").',
      svg: {
        kind: 'membrane',
        topLabel: 'Tiểu quản nội bào → Lòng Dạ dày (HCl 0,15 N • pH ~ 0,8)',
        bottomLabel: 'Tế bào Thành → Máu Mao mạch (HCO3⁻ vào máu → "Làn sóng kiềm")',
        memLabel: 'Màng đỉnh Tiểu quản nội bào (Tế bào Thành)',
        channels: [
          { label: 'Bơm H⁺-K⁺-ATPase', sub: 'Bơm 1 H⁺ ra / kéo 1 K⁺ vào (Tốn ATP)', dir: 'up', tone: 'red', top: 'Đích Omeprazole (PPI)', bottom: 'pH lòng ống tụt còn 0,8' },
          { label: 'Kênh Cl⁻ & K⁺', sub: 'Cl⁻ + K⁺ khuếch tán ra tạo HCl', dir: 'up', tone: 'blue', top: 'Tái tuần hoàn K⁺ cho bơm proton', bottom: 'Cl⁻ lấy từ máu vào' },
          { label: 'Đối vận Cl⁻/HCO3⁻ (đáy-bên)', sub: 'Đưa HCO3⁻ vào máu (Alkaline tide)', dir: 'both', tone: 'green', top: 'H2O + CO2 →(CA)→ H⁺ + HCO3⁻', bottom: 'Kiềm máu thoáng qua sau ăn' }
        ]
      },
      pins: [
        { n: 1, title: 'Vì sao nôn ói kéo dài gây KIỀM CHUYỂN HÓA HẠ K⁺, HẠ Cl⁻?', desc: 'Nôn mất nhiều HCl (H⁺ và Cl⁻) khiến lượng HCO3⁻ đẩy vào máu không được trung hòa lại ở tá tràng → Kiềm chuyển hóa kèm hạ Cl⁻ và hạ K⁺.', x: 76, y: 50 },
        { n: 2, title: 'Cơ chế thuốc PPI (Omeprazole / Esomeprazole)', desc: 'Ức chế KHÔNG THUẬN NGHỊCH bơm cuối cùng H⁺-K⁺-ATPase nên chặn tiết acid triệt để cả ba đường kích thích (ACh, Histamin, Gastrin).', x: 24, y: 50 }
      ],
      takeaway: 'Cứ 1 HCl tiết vào dạ dày là có 1 HCO3⁻ vào máu ("Làn sóng kiềm"). PPI khóa khâu cuối H⁺-K⁺-ATPase.'
    },
    {
      code: 'Hình 22.7',
      page: 'Bài 22 • tr.279',
      title: '3 Thụ thể Kích thích Bài tiết HCl trên Tế bào Thành (M3, H2, CCK-B)',
      summary: 'Bài tiết HCl đạt tối đa nhờ hiệu ứng HỢP TÁC (Potentiation) giữa 3 chất truyền tin: Acetylcholine (M3 → Ca²⁺), Gastrin (CCK-B → Ca²⁺) và Histamine (H2 → cAMP).',
      svg: {
        kind: 'membrane',
        topLabel: 'Chất kích thích Ngoại bào: Dây X (ACh) • Máu (Gastrin) • Cận tiết (Histamine)',
        bottomLabel: 'Tế bào Thành: Hoạt hóa Bơm H⁺-K⁺-ATPase',
        memLabel: '3 Thụ thể Đích của Thuốc Chống Loét Dạ dày',
        channels: [
          { label: 'Thụ thể M3 (Acetylcholine)', sub: 'Gq → IP3/DAG → ↑ Ca²⁺ nội bào', dir: 'down', tone: 'blue', top: 'Từ Dây X', bottom: 'Chẹn bởi Atropin / Pirenzepin' },
          { label: 'Thụ thể H2 (Histamine)', sub: 'Gs → ↑ cAMP → PKA (Mạnh nhất!)', dir: 'down', tone: 'red', top: 'Từ Tế bào ECL bên cạnh', bottom: 'Chẹn bởi Famotidine / Ranitidine' },
          { label: 'Thụ thể CCK-B (Gastrin)', sub: 'Gq → ↑ Ca²⁺ & Kích thích ECL tiết Histamin', dir: 'down', tone: 'amber', top: 'Từ Tế bào G hang vị', bottom: 'Hiệp đồng mạnh với Histamine' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao thuốc kháng H2 (Famotidine) ức chế cả ACh & Gastrin?', desc: 'Nhờ hiệu ứng hiệp đồng (Potentiation): Gastrin chủ yếu kích thích ECL tiết Histamine, và thiếu tín hiệu cAMP từ H2 làm Ca²⁺ của M3/CCK-B yếu đi nhiều!', x: 50, y: 50 },
        { n: 2, title: 'Prostaglandin E2 & I2 ức chế cAMP (bảo vệ niêm mạc)', desc: 'Gắn thụ thể EP3 (Gi) → giảm cAMP (giảm tiết acid) + tăng tiết nhầy HCO3⁻ → NSAIDs ức chế COX làm mất PGE2 gây loét dạ dày.', x: 78, y: 24 }
      ],
      takeaway: '3 thụ thể kích tiết HCl: M3 (ACh - Ca²⁺), H2 (Histamine - cAMP), CCK-B (Gastrin - Ca²⁺ & qua ECL). Histamine đóng vai trò trung tâm khuếch đại.'
    },
    {
      code: 'Hình 22.8',
      page: 'Bài 22 • tr.279',
      title: 'Mạng lưới Điều hòa Bài tiết HCl giữa Hang vị (Tế bào G/D) và Đáy vị (Tế bào ECL/Thành)',
      summary: 'Tế bào G (hang vị) tiết Gastrin đi theo máu lên kích thích TB ECL và TB Thành; khi pH hang vị tụt quá thấp (< 2–3), tế bào D tiết Somatostatin phanh ngược lại cả TB G, ECL và Thành.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 36, w: 190, h: 90, label: 'Dây X (Phản xạ Thần kinh)', sub: 'ACh kích thích TB Thành & ECL\nGRP kích thích TB G tiết Gastrin', tone: 'blue' },
          { x: 255, y: 36, w: 175, h: 90, label: 'Tế bào G (Hang vị)', sub: 'Tiết GASTRIN (khi ăn đạm,\ncăng hang vị, pH > 3)', tone: 'amber' },
          { x: 460, y: 36, w: 185, h: 90, label: 'Tế bào ECL (Thân vị)', sub: 'Tiết HISTAMINE\n(Đích chính của Gastrin)', tone: 'purple' },
          { x: 40, y: 180, w: 280, h: 105, label: 'Tế bào D → SOMATOSTATIN (Phanh!)', sub: 'Khi pH dạ dày < 2,5 → Ức chế toàn diện TB G,\nTB ECL và TB Thành (Ngăn loét do quá nhiều acid)', tone: 'teal' },
          { x: 375, y: 180, w: 270, h: 105, label: 'TẾ BÀO THÀNH → HCl', sub: 'Đỉnh cao khi có cả ACh + Histamine + Gastrin\nAcid pH < 2 tự ức chế ngược lại qua TB D', tone: 'red' }
        ],
        links: [
          { x1: 230, y1: 80, x2: 252, y2: 80, label: 'GRP', color: '#2563eb' },
          { x1: 430, y1: 80, x2: 458, y2: 80, label: 'Gastrin', color: '#d97706' },
          { x1: 550, y1: 126, x2: 530, y2: 178, label: 'Histamine', color: '#9333ea' },
          { x1: 320, y1: 232, x2: 372, y2: 232, label: 'Ức chế (−)', color: '#0d9488', dashed: true }
        ]
      },
      pins: [
        { n: 1, title: 'Cách Dây X vừa trực tiếp vừa gián tiếp tăng acid', desc: 'Dây X vừa tiết ACh kích trực tiếp tế bào thành, vừa tiết GRP (Gastrin-releasing peptide) kích TB G và ĐỒNG THỜI ức chế TB D (nhả phanh Somatostatin)!', x: 20, y: 24 },
        { n: 2, title: 'Chẩn đoán Hội chứng Zollinger–Ellison', desc: 'U tiết Gastrin (Gastrinoma) bỏ qua cơ chế phanh của Somatostatin → tiết HCl ồ ạt gây đa ổ loét khó trị + tiêu chảy mỡ.', x: 48, y: 24 }
      ],
      takeaway: 'Gastrin (TB G) → ECL → Histamine → TB Thành. Cơ chế phanh tự nhiên khi pH < 2,5 là tế bào D tiết SOMATOSTATIN.'
    },
    {
      code: 'Hình 22.9',
      page: 'Bài 22 • tr.280',
      title: '3 Giai đoạn Bài tiết Dịch vị (Đầu 400 mL • Dạ dày 1500 mL • Ruột 100 mL)',
      summary: 'Tổng ~2000 mL dịch vị mỗi bữa ăn gồm: Giai đoạn Đầu (20% — nhìn, ngửi, nhai qua dây X), Giai đoạn Dạ dày (70% — căng thành & sản phẩm tiêu hóa đạm → Gastrin) và Giai đoạn Ruột (10% ban đầu rồi ức chế).',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Giai đoạn Đầu (~400 mL / 20–30%)', subtitle: 'Khởi phát trước khi thức ăn chạm dạ dày', tone: 'blue', bullets: ['Phản xạ có & không điều kiện: nghĩ, nhìn, ngửi, nhai, nuốt', 'Đường ly tâm duy nhất là Dây X (ACh + GRP)', 'Thức ăn chưa vào dạ dày nhưng dịch vị giàu acid + pepsin đã chuẩn bị sẵn'] },
          { title: '2. Giai đoạn Dạ dày (~1500 mL / 70%)', subtitle: 'Chủ lực nhất khi thức ăn ở dạ dày', tone: 'red', bullets: ['Căng thành dạ dày → phản xạ vago-vagal & tại chỗ tiết ACh', 'Peptid & Acid amin (và pH tăng do thức ăn đệm) kích TB G tiết GASTRIN mạnh', 'Café, rượu nhẹ kích tiết acid; pH < 2 kích TB D tắt dần'] },
          { title: '3. Giai đoạn Ruột (~100 mL / 5–10%)', subtitle: 'Kích thích thoáng qua rồi ỨC CHẾ', tone: 'amber', bullets: ['Ban đầu dưỡng trấp xuống tá tràng kích TB G tá tràng tiết ít Gastrin', 'Ngay sau đó khi acid, mỡ, ưu trương tăng lên → Secretin, CCK, GIP và phản xạ ruột-dạ dày ĐẢO NGƯỢC ức chế mạnh bài tiết dạ dày!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Áp dụng phẫu thuật cắt dây X chọn lọc', desc: 'Cắt nhánh dây X chi phối đáy-thân vị loại bỏ hoàn toàn kích thích giai đoạn đầu và làm giảm độ nhạy TB thành với Gastrin, trong khi giữ nhánh Latarjet bảo tồn nhu động hang vị.', x: 18, y: 50 },
        { n: 2, title: 'Giai đoạn Dạ dày quyết định 70% lượng dịch', desc: 'Đặc biệt protein và peptid bán tiêu hóa kích thích rất mạnh Gastrin.', x: 50, y: 50 }
      ],
      takeaway: 'Tỷ trọng dịch vị: Giai đoạn Đầu 20% (400 mL, dây X) → Dạ dày 70% (1500 mL, căng + đạm + Gastrin) → Ruột ~5–10% (100 mL, chủ yếu ức chế sau đó).'
    }
  ],

  // ========================================================================
  // BÀI 12: TIÊU HÓA & HẤP THU TẠI RUỘT NON (Bài 23)
  // ========================================================================
  12: [
    {
      code: 'Hình 23.1',
      page: 'Bài 23 • tr.284',
      title: 'Cấu tạo Nếp gấp – Nhung mao – Vi nhung mao (Tăng diện tích ×600 lên 250 m²)',
      summary: 'Niêm mạc ruột non khuếch đại diện tích hấp thu gấp 600 lần nhờ 3 tầng cấu trúc: Van nếp vòng Kerckring (×3), Nhung mao (×10) và Vi nhung mao bờ bàn chải (×20).',
      imgSrc: 'assets/figures/fig_villus.png',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: '3 tầng phóng đại: 3 × 10 × 20 = 600 lần (~250 m²)', desc: 'Nếp vòng Kerckring (×3), Nhung mao cao 0,5–1 mm (×10), và Vi nhung mao bờ bàn chải chứa men tiêu hóa cuối cùng (×20).', x: 28, y: 34 },
        { n: 2, title: 'Mạng lưới Mao mạch & Tĩnh mạch Cửa', desc: 'Hấp thu trực tiếp nước, điện giải, đường đơn (monosaccharide), acid amin và acid béo chuỗi ngắn/trung bình (<10–12C) vào gan qua TM cửa.', x: 52, y: 54 },
        { n: 3, title: 'Ống Dưỡng chấp Trung tâm (Lacteal — Bạch huyết)', desc: 'Hấp thu hạt Chylomicron (Triglyceride, Cholesterol, Vitamin tan trong dầu A, D, E, K) đi theo ống ngực đổ thẳng vào tuần hoàn chung không qua gan ngay.', x: 52, y: 74 }
      ],
      takeaway: 'Đường + Đạm + Vitamin B,C → Máu TM Cửa; Mỡ (Chylomicron) + Vitamin A,D,E,K → Bạch huyết trung tâm (Lacteal).'
    },
    {
      code: 'Hình 23.2',
      page: 'Bài 23 • tr.285',
      title: 'Hai Cử động Chính của Ruột non (Co bóp Phân đoạn vs Sóng Nhu động)',
      summary: 'Cơ trơn ruột non có 2 kiểu vận động khác mục tiêu: Co bóp phân đoạn (Segmentation) đứng tại chỗ để cắt nhuyễn và trộn dưỡng trấp với dịch mật-tụy; Nhu động (Peristalsis) đẩy dần dưỡng trấp xuống hồi tràng (~1 cm/phút).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Co bóp Phân đoạn (Segmentation — Nhào trộn)', subtitle: 'Tần số sóng chậm: Tá tràng 12 l/p → Hồi tràng 8 l/p', tone: 'blue', bullets: ['Các vòng co thắt xen kẽ đồng loạt chia khúc ruột thành từng đoạn ngắn như chuỗi xúc xích rồi giãn và co ở vị trí giữa', 'Nhào trộn kỹ thức ăn với dịch tụy, mật, dịch ruột và quét sát bề mặt nhung mao để hấp thu', 'Cần đám rối cơ ruột (Auerbach) nguyên vẹn'] },
          { title: 'Sóng Nhu động (Peristalsis — Tống đẩy)', subtitle: 'Vận tốc tiến thực tế 0,5–2 cm/s (từng đoạn ngắn)', tone: 'green', bullets: ['Vòng cơ phía SAU khối thức ăn co lại, vòng cơ phía TRƯỚC giãn ra ("Định luật ruột" của Bayliss–Starling)', 'Phức hợp vận động di chuyển (MMC) 90–120 phút/lần lúc đói quét sạch xác vi khuẩn & mảnh thô (nhờ hormon Motilin)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Gradient Tần số Sóng chậm (BER)', desc: 'Tá tràng nhịp nhanh nhất (12 lần/phút) → Hỗng tràng (10) → Hồi tràng (8 lần/phút) giúp hướng chuyển động xuôi dòng về phía van hồi-manh tràng.', x: 26, y: 38 },
        { n: 2, title: 'Thuốc Erythromycin kích thích Motilin (MMC)', desc: 'Kích thích sóng nhu động quét dọn giữa bữa (MMC) trong điều trị liệt dạ dày nhẹ hoặc ứ đọng ruột.', x: 74, y: 66 }
      ],
      takeaway: 'Phân đoạn = Nhào trộn (chủ yếu lúc mới ăn). Nhu động = Đẩy xuôi theo định luật ruột (sau co, trước giãn). MMC (Motilin) quét dọn lúc đói.'
    },
    {
      code: 'Hình 23.3',
      page: 'Bài 23 • tr.286',
      title: 'Cấu trúc Tuyến Tụy Ngoại tiết (Nang tuyến tiết Men & Ống bài xuất tiết HCO3⁻)',
      summary: 'Tuyến tụy ngoại tiết tiết ~1,5 L/ngày gồm hai thành phần tách biệt: Tế bào Nang (Acinar) tiết toàn bộ enzyme tiêu hóa dạng tiền men bất hoạt (trừ Amylase & Lipase) và Tế bào Ống tiết dung dịch giàu HCO3⁻ trung hòa acid dạ dày.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 270, h: 130, label: 'Tế bào Nang Tụy (Acinar Cells)', sub: 'Đích kích thích của CCK & Dây X\nTiết Amylase, Lipase (hoạt động) &\nTrypsinogen, Chymotrypsinogen (bất hoạt)', tone: 'amber' },
          { x: 370, y: 40, w: 270, h: 130, label: 'Tế bào Ống Tụy (Ductal Cells)', sub: 'Đích kích thích chính của SECRETIN\nTiết dịch loãng giàu NaHCO3 (pH ~8,0–8,3)', tone: 'blue' },
          { x: 90, y: 200, w: 500, h: 95, label: 'Ống Wirsung + Ống Mật chủ → Bóng Vater (Cơ thắt Oddi) → Tá tràng', sub: 'Tại tá tràng, Enterokinase (bờ bàn chải) cắt Trypsinogen → TRYPSIN, rồi Trypsin tự kích hoạt dây chuyền tất cả tiền men còn lại!', tone: 'green' }
        ],
        links: [
          { x1: 175, y1: 170, x2: 260, y2: 198, color: '#d97706' },
          { x1: 505, y1: 170, x2: 420, y2: 198, color: '#2563eb' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao tụy không tự tiêu hóa chính nó?', desc: 'Các men tiêu đạm được tiết dưới dạng tiền men bất hoạt (Zymogen) + có chất ức chế Trypsin (PSTI) trong nang tụy; chỉ khi gặp Enterokinase tại bờ bàn chải tá tràng mới kích hoạt thành Trypsin.', x: 24, y: 36 },
        { n: 2, title: 'Viêm tụy cấp', desc: 'Khi Trypsinogen bị hoạt hóa sớm ngay bên trong tuyến tụy (sỏi kẹt Oddi, rượu) gây tự tiêu mô tụy cực kỳ nguy hiểm.', x: 50, y: 74 }
      ],
      takeaway: 'Nang tụy (CCK) → Men tiêu hóa. Ống tụy (Secretin) → Nước + HCO3⁻ (pH 8). Enterokinase tá tràng kích hoạt Trypsinogen → Trypsin.'
    },
    {
      code: 'Hình 23.4 (SGK in: 22.4)',
      page: 'Bài 23 • tr.287',
      title: 'Cơ chế Tế bào Bài tiết Bicarbonate (HCO3⁻) của Ống Tụy (CFTR & Cl⁻/HCO3⁻)',
      summary: 'Trong tế bào ống tụy, men CA tạo HCO3⁻ và bơm H⁺ vào máu (qua NHE1), sau đó trao đổi Cl⁻/HCO3⁻ ở màng đỉnh (hỗ trợ bởi kênh Cl⁻ CFTR do Secretin → cAMP mở) để xuất lượng HCO3⁻ cực cao (~140 mEq/L) ra dịch tụy.',
      svg: {
        kind: 'membrane',
        topLabel: 'Máu Mao mạch (Thu nhận H⁺ → Cân bằng "làn sóng kiềm" dạ dày)',
        bottomLabel: 'Lòng Ống Tụy (Dịch giàu HCO3⁻ tới 140 mEq/L, pH ~ 8,2)',
        memLabel: 'Tế bào Biểu mô Ống Tụy (Secretin → cAMP)',
        channels: [
          { label: 'Bơm Na⁺-K⁺ & NHE1 (màng máu)', sub: 'Đẩy H⁺ tạo ra vào máu', dir: 'up', tone: 'red', top: 'H⁺ vào máu trung hòa kiềm', bottom: 'Đồng vận NBCe1 cũng nhập HCO3⁻' },
          { label: 'Kênh Cl⁻ CFTR (màng lòng ống)', sub: 'Secretin → cAMP → PKA mở CFTR', dir: 'down', tone: 'amber', top: 'Đột biến hỏng trong bệnh Xơ nang', bottom: 'Tái cung cấp Cl⁻ liên tục cho đối vận' },
          { label: 'Đối vận Cl⁻ / HCO3⁻ (màng lòng ống)', sub: 'Đẩy HCO3⁻ ra lòng ống đổi Cl⁻ vào', dir: 'both', tone: 'blue', top: 'Cl⁻ quay vòng qua CFTR', bottom: 'Kéo Na⁺ + H2O qua kẽ TB → dịch kiềm' }
        ]
      },
      pins: [
        { n: 1, title: 'Vai trò sống còn của Kênh CFTR', desc: 'Trong bệnh Xơ nang (Cystic Fibrosis), mất CFTR làm mất tái tuần hoàn Cl⁻ → tắt tiết HCO3⁻ và nước → dịch tụy đặc quánh bít tắc ống tụy gây suy tụy ngoại tiết.', x: 50, y: 50 },
        { n: 2, title: 'Liên hệ nồng độ HCO3⁻ theo tốc độ tiết', desc: 'Tốc độ tiết càng nhanh (khi Secretin cao), thời gian trao đổi ngược ít lại nên nồng độ HCO3⁻ càng cao (tới ~140 mEq/L) và Cl⁻ giảm tương ứng.', x: 78, y: 50 }
      ],
      takeaway: 'Secretin tăng cAMP mở kênh CFTR → cho phép trao đổi Cl⁻/HCO3⁻ đẩy dịch tụy cực kiềm (HCO3⁻ ~140 mEq/L) ra trung hòa acid dạ dày.'
    },
    {
      code: 'Hình 23.5',
      page: 'Bài 23 • tr.288',
      title: 'Điều hòa Bài tiết Dịch tụy (Dây X, Secretin và CCK)',
      summary: 'Dịch tụy có 3 pha tương tự dạ dày nhưng 70–80% xảy ra ở giai đoạn Ruột nhờ bộ đôi hormon tá tràng: Secretin (kích ống tiết HCO3⁻) và CCK (kích nang tiết Enzyme) hiệp đồng rất mạnh với nhau.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Secretin (Từ Tế bào S tá tràng)', subtitle: 'Tín hiệu kích: Acid (HCl, pH < 4,5)', tone: 'blue', bullets: ['Đích tác động: Tế bào ỐNG TỤY (tăng cAMP)', 'Kết quả: Tiết ồ ạt dịch loãng rất giàu NaHCO3 (ít men)', 'Nhiệm vụ: Trung hòa HCl xuống tá tràng về pH 6,5–7 để bảo vệ niêm mạc và cho men tụy hoạt động'] },
          { title: 'CCK & Dây X (TB I tá tràng & Phản xạ)', subtitle: 'Tín hiệu kích: Acid béo & Acid amin / Peptid', tone: 'amber', bullets: ['Đích tác động: Tế bào NANG TỤY (IP3 / Ca²⁺)', 'Kết quả: Tiết dịch đặc cực giàu Amylase, Lipase, Protease', 'Hiệp đồng: Secretin và CCK khuếch đại tác dụng của nhau mạnh gấp bội!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao men tụy cần Secretin?', desc: 'Lipase tụy bị bất hoạt hoàn toàn nếu pH < 4; nhờ Secretin tiết HCO3⁻ nâng pH tá tràng lên ~7 mà toàn bộ men tụy mới phát huy tác dụng.', x: 26, y: 68 },
        { n: 2, title: 'CCK kiêm luôn việc đẩy Mật', desc: 'Cùng lúc kích nang tụy tiết men tiêu hóa, CCK co túi mật & giãn cơ Oddi đẩy dịch mật đổ vào chung tá tràng.', x: 74, y: 68 }
      ],
      takeaway: 'Acid kích tế bào S → SECRETIN → Tụy tiết HCO3⁻. Mỡ/Đạm kích tế bào I → CCK → Tụy tiết Enzyme (+ co túi mật).'
    },
    {
      code: 'Hình 23.6',
      page: 'Bài 23 • tr.288',
      title: 'Vòng Feedback Âm Secretin – Tế bào S Tá tràng',
      summary: 'Khi pH tá tràng tụt dưới 4,5 do dưỡng trấp acid từ dạ dày đổ xuống, tế bào S tiết Secretin kéo dịch tụy (và mật) giàu HCO3⁻ trung hòa acid → khi pH vượt 4,5, tế bào S tự động ngừng tiết Secretin.',
      svg: {
        kind: 'cycle',
        centerTitle: 'CÂN BẰNG pH TÁ TRÀNG',
        centerSub: 'Ngưỡng pH = 4,5',
        centerTone: 'teal',
        steps: [
          { label: 'Dưỡng trấp Acid (pH < 4,5)', detail: 'Từ dạ dày thoát xuống hành tá tràng', tone: 'red' },
          { label: 'Tế bào S tiết SECRETIN', detail: 'Vào máu tới tụy, gan/đường mật & dạ dày', tone: 'amber' },
          { label: 'Tụy & Mật tiết HCO3⁻', detail: 'Đồng thời Secretin ức chế dạ dày tiết HCl & làm chậm thoát', tone: 'blue' },
          { label: 'Trung hòa pH tá tràng (> 6,5)', detail: 'Tắt kích thích lên TB S → Ngưng tiết Secretin', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Ngưỡng kích hoạt pH < 4,5', desc: 'Bảo vệ niêm mạc tá tràng không bị loét và tạo môi trường pH kiềm nhẹ tối ưu cho Lipase, Trypsin, Amylase.', x: 50, y: 20 },
        { n: 2, title: 'Tác dụng kép của Secretin', desc: 'Vừa "bơm kiềm" từ tụy/mật vào tá tràng, vừa "khóa vòi acid" từ dạ dày.', x: 50, y: 80 }
      ],
      takeaway: 'pH tá tràng < 4,5 bật Secretin → tăng HCO3⁻ tụy/mật → nâng pH > 4,5 tắt ngược Secretin.'
    },
    {
      code: 'Hình 23.7',
      page: 'Bài 23 • tr.290',
      title: 'Cấu trúc Hạt Micelle Muối mật Vận chuyển Lipid vượt Lớp Dịch Không Di động',
      summary: 'Sản phẩm tiêu hóa mỡ (Monoglyceride, Acid béo, Cholesterol) rất kỵ nước nên không thể vượt qua lớp dịch đứng yên (Unstirred water layer) áp sát nhung mao; muối mật bao bọc thành hạt Micelle ưa nước ở ngoài để chở chúng tới bờ bàn chải.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Vận chuyển Lipid bằng Hạt Micelle qua Lớp Dịch Không Di động',
        nodes: [
          { title: '1. Nhũ tương hóa giọt mỡ lớn', sub: 'Muối mật + Phospholipid cắt giọt mỡ to thành nhiều giọt nhỏ (<1 µm) cho Lipase tiêu hóa', tone: 'amber' },
          { title: '2. Tạo hạt Micelle (đường kính ~5 nm)', sub: 'Lõi kỵ nước (Acid béo, MG, Vit A,D,E,K); vỏ ưa nước (Muối mật tích điện âm)', tone: 'blue' },
          { title: '3. Phà chở qua Lớp Dịch Không di động', sub: 'Hòa tan tốt đưa lipid tiến sát màng vi nhung mao ruột', tone: 'teal' },
          { title: '4. Thả Lipid khuếch tán vào TB Ruột', sub: 'Acid béo & MG thấm qua màng; Muối mật quay lại lòng ruột nhũ hóa tiếp rồi hấp thu 95% ở HỒI TRÀNG', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Không có Muối mật → Tiêu mỡ kém & Mất Vit A,D,E,K', desc: 'Dù Lipase tụy bình thường nhưng nếu tắc mật hoặc cắt mất hồi tràng (mất tái hấp thu 95% chu trình ruột-gan muối mật), bệnh nhân sẽ đi tiêu phân mỡ (steatorrhea) và thiếu vitamin tan trong dầu.', x: 50, y: 50 },
        { n: 2, title: 'Đích tái hấp thu Muối mật = Hồi tràng cuối', desc: 'Kênh ASBT ở đoạn cuối hồi tràng tái hấp thu ~95% muối mật quay về gan qua TM cửa (tái sử dụng 4–6 lần/ngày).', x: 84, y: 50 }
      ],
      takeaway: 'Micelle = phà vận chuyển Acid béo/MG/Vit ADEK qua lớp dịch không di động; muối mật tái hấp thu 95% ở HỒI TRÀNG (chu trình ruột-gan).'
    },
    {
      code: 'Hình 23.8',
      page: 'Bài 23 • tr.291',
      title: 'Điều hòa Bài tiết & Tống xuất Dịch mật (CCK, Secretin, Dây X & Chu trình Muối mật)',
      summary: 'Gan tiết mật liên tục vào túi mật cô đặc gấp 5–10 lần; khi ăn bữa có mỡ, CCK làm CO túi mật đồng thời GIÃN cơ thắt Oddi để phun mật xuống tá tràng.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 38, w: 260, h: 115, label: 'Tế bào Gan & Đường mật', sub: 'Muối mật hồi lưu kích thích mạnh tạo mật (Choleretic)\nSecretin kích ống mật tiết HCO3⁻ & H2O', tone: 'amber' },
          { x: 380, y: 38, w: 260, h: 115, label: 'Túi mật (Cô đặc 5–10 lần)', sub: 'Dự trữ 30–60 mL mật giữa bữa\nCCK & Dây X → CO mạnh thành túi mật', tone: 'green' },
          { x: 100, y: 190, w: 480, h: 100, label: 'Cơ thắt Oddi (Nơi đổ vào Tá tràng)', sub: 'Bình thường ĐÓNG giữ mật tích trong túi mật\nCCK kích thích GIÃN cơ thắt Oddi → Mật phun vào tá tràng tiêu hóa mỡ!', tone: 'blue' }
        ],
        links: [
          { x1: 300, y1: 95, x2: 376, y2: 95, label: 'Dự trữ', color: '#16a34a' },
          { x1: 510, y1: 155, x2: 460, y2: 188, label: 'CCK tống mật', color: '#2563eb' }
        ]
      },
      pins: [
        { n: 1, title: 'Tác dụng đối nghịch thông minh của CCK', desc: 'Trên cơ trơn Túi mật: CCK gây CO. Trên cơ thắt Oddi: CCK kích hoạt neuron ức chế (NO/VIP) gây GIÃN → đẩy mật đồng bộ không bị tắc!', x: 76, y: 36 },
        { n: 2, title: 'Chất kích thích tạo mật mạnh nhất', desc: 'Chính là MUỐI MẬT quay về gan qua tĩnh mạch cửa (hấp thu ở hồi tràng).', x: 24, y: 36 }
      ],
      takeaway: 'CCK là chất tống mật mạnh nhất (CO túi mật + GIÃN cơ Oddi); Secretin tăng tiết nước & HCO3⁻ đường mật; Muối mật về từ hồi tràng kích thích gan sản xuất mật.'
    },
    {
      code: 'Hình 23.9',
      page: 'Bài 23 • tr.291',
      title: 'Cấu tạo Tuyến Lieberkühn (Hốc tuyến Ruột non)',
      summary: 'Giữa các chân nhung mao là hốc Lieberkühn: chứa tế bào gốc phân chia tái tạo toàn bộ biểu mô nhung mao mỗi 3–5 ngày, tế bào Paneth tiết lysozyme/defensin diệt khuẩn và tế bào goblet tiết nhầy.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 36, w: 260, h: 90, label: 'Đỉnh Nhung mao (Enterocyte trưởng thành)', sub: 'Mang enzyme bờ bàn chải & Hấp thu\nRụng vào lòng ruột sau 3–5 ngày', tone: 'blue' },
          { x: 380, y: 36, w: 260, h: 90, label: 'Tế bào Cổ tuyến / Tiết nước (CFTR)', sub: 'Bài tiết ~1,8 L/ngày dịch ruột đẳng trương\nTăng tiết ồ ạt bởi độc tố Tả (Cholera → cAMP)', tone: 'teal' },
          { x: 100, y: 185, w: 480, h: 105, label: 'Đáy Hốc Lieberkühn: Tế bào Gốc & Tế bào Paneth', sub: 'TB Gốc đẩy sinh sản lên trên thay niêm mạc sau 3–5 ngày\nTB Paneth tiết Lysozyme, α-defensin bảo vệ hốc tuyến vô trùng', tone: 'green' }
        ],
        links: [
          { x1: 240, y1: 182, x2: 180, y2: 128, label: 'Di chuyển lên & biệt hóa', color: '#16a34a' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế Tiêu chảy mất nước cấp trong Bệnh Tả (Cholera)', desc: 'Độc tố tả khóa protein Gs ở trạng thái bật → tăng vọt cAMP trong tế bào hốc Lieberkühn → mở toang kênh CFTR bơm Cl⁻, Na⁺ và hàng chục lít nước ra ngoài!', x: 76, y: 30 },
        { n: 2, title: 'Tế bào ruột quay vòng nhanh nhất cơ thể', desc: 'Do phân chia mỗi 3–5 ngày nên rất nhạy cảm với hóa trị/xạ trị gây viêm niêm mạc ruột và rụng biểu mô.', x: 50, y: 74 }
      ],
      takeaway: 'Hốc Lieberkühn là nơi tiết dịch ruột (Cl⁻ qua CFTR → Na⁺ + H2O, đích độc tố Tả) và tái tạo biểu mô nhung mao mỗi 3–5 ngày.'
    },
    {
      code: 'Hình 23.10',
      page: 'Bài 23 • tr.292',
      title: 'Sơ đồ Tiêu hóa Carbohydrate (Tinh bột → Disaccharide → Monosaccharide)',
      summary: 'Chỉ duy nhất 3 đường đơn (Glucose, Galactose, Fructose) mới hấp thu được qua tế bào ruột; α-Amylase cắt thành maltose/oligosaccharide rồi men bờ bàn chải (Sucrase, Lactase, Maltase, α-dextrinase) cắt chặng cuối.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Thủy phân Carbohydrate 2 Chặng: Lòng ruột → Bờ bàn chải',
        nodes: [
          { title: '1. Tinh bột / Glycogen (Miệng & Tá tràng)', sub: 'α-Amylase nước bọt & Amylase TỤY cắt liên kết α-1,4 bên trong', tone: 'amber' },
          { title: '2. Đường đôi & Dextrin giới hạn', sub: 'Maltose, Maltotriose, α-limit dextrin (+ Sucrose, Lactose thức ăn)', tone: 'blue' },
          { title: '3. Enzyme Bờ Bàn Chải (Vi nhung mao)', sub: 'Maltase, α-dextrinase, Sucrase (→ Glu+Fru), Lactase (→ Glu+Gal)', tone: 'purple' },
          { title: '4. 3 Monosaccharide hấp thu', sub: 'GLUCOSE (~80%) • GALACTOSE • FRUCTOSE', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao thiếu men Lactase gây tiêu chảy/đầy hơi khi uống sữa?', desc: 'Lactose không cắt được thành Glucose + Galactose nên đọng lại lòng ruột gây kéo nước thẩm thấu và bị vi khuẩn đại tràng lên men sinh hơi (H2, CH4).', x: 64, y: 50 },
        { n: 2, title: 'Amylase KHÔNG cắt được liên kết α-1,6 & β-1,4', desc: 'Chất xơ Cellulose có liên kết β-1,4 nên người không tiêu hóa được; chỗ phân nhánh α-1,6 cần men α-dextrinase (Isomaltase) ở bờ bàn chải.', x: 24, y: 50 }
      ],
      takeaway: 'Amylase tụy cắt Tinh bột → Đường đôi/Dextrin. Men bờ bàn chải ruột non (Lactase, Sucrase, Maltase) cắt chặng cuối ra Glucose, Galactose, Fructose.'
    },
    {
      code: 'Hình 23.11',
      page: 'Bài 23 • tr.293',
      title: 'Cơ chế Hấp thu Monosaccharide qua Niêm mạc Ruột non (SGLT1, GLUT5, GLUT2)',
      summary: 'Glucose và Galactose được bơm chủ động thứ phát theo bậc thang Na⁺ qua SGLT1 (ngay cả khi nồng độ lòng ruột rất thấp); Fructose khuếch tán được tăng cường qua GLUT5; cả 3 thoát vào máu TM cửa qua GLUT2.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ruột non (Vi nhung mao bờ bàn chải)',
        bottomLabel: 'Mao mạch Nhung mao → Tĩnh mạch Cửa về Gan',
        memLabel: 'Tế bào Biểu mô Hấp thu (Enterocyte)',
        channels: [
          { label: 'SGLT1 (Màng đỉnh)', sub: '2 Na⁺ + 1 Glucose / Galactose', dir: 'down', tone: 'blue', top: 'Chủ động thứ phát (cần Na⁺)', bottom: 'Cơ sở Pha Oresol (ORS) trị Tiêu chảy!' },
          { label: 'GLUT5 (Màng đỉnh)', sub: 'Khuếch tán tăng cường Fructose', dir: 'down', tone: 'amber', top: 'KHÔNG tốn ATP, không cần Na⁺', bottom: 'Hấp thu chậm hơn Glucose' },
          { label: 'GLUT2 (Màng đáy-bên)', sub: 'Đưa Glu + Gal + Fru vào Máu', dir: 'down', tone: 'green', top: 'Bơm Na⁺-K⁺-ATPase duy trì SGLT1', bottom: 'Vào TM Cửa tới Gan' }
        ]
      },
      pins: [
        { n: 1, title: 'Bí mật sinh lý của gói Oresol (ORS) cứu hàng triệu trẻ tiêu chảy', desc: 'Trong tiêu chảy Tả, kênh SGLT1 VẪN NGUYÊN VẸN! Khi cho uống đúng tỷ lệ Glucose + NaCl, SGLT1 kéo đồng thời Na⁺ và Glucose vào tế bào giúp kéo nước hấp thu ngược lại máu!', x: 24, y: 50 },
        { n: 2, title: 'Cạnh tranh SGLT1', desc: 'Glucose và Galactose dùng chung kênh SGLT1 (tốc độ hấp thu cao); Fructose dùng riêng GLUT5 (hấp thu kém hơn nên quá liều nước trái cây gây đầy bụng).', x: 50, y: 50 }
      ],
      takeaway: 'Màng đỉnh: Glucose/Galactose = SGLT1 (đồng vận Na⁺ → nền tảng Oresol); Fructose = GLUT5. Màng đáy-bên: cả 3 ra máu qua GLUT2.'
    },
    {
      code: 'Hình 23.12',
      page: 'Bài 23 • tr.294',
      title: 'Sơ đồ Tiêu hóa Protein (Dạ dày → Tụy → Bờ bàn chải & Nội bào)',
      summary: 'Protein bị cắt bước đầu bởi Pepsin dạ dày (10–15%), tiếp tục cắt nhỏ mạnh bởi 5 enzyme tụy (Trypsin, Chymotrypsin, Elastase, Carboxypeptidase A & B) thành oligopeptid và acid amin tự do.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Thủy phân Protein từ Dạ dày tới Bờ bàn chải Ruột non',
        nodes: [
          { title: '1. Dạ dày: HCl + Pepsin (pH 1,8–3)', sub: 'Biến tính & cắt ~10–15% đạm thành Pepton/Polypeptid lớn (bị bất hoạt ở tá tràng)', tone: 'amber' },
          { title: '2. Tụy: Endopeptidase', sub: 'Enterokinase → Trypsin → hoạt hóa Chymotrypsin & Elastase cắt giữa chuỗi', tone: 'red' },
          { title: '3. Tụy: Exopeptidase', sub: 'Carboxypeptidase A & B cắt đầu -COOH tạo Acid amin tự do & Di/Tripeptid', tone: 'blue' },
          { title: '4. Ruột non: Peptidase Bờ bàn chải & Nội bào', sub: 'Aminopeptidase cắt oligopeptid → Di/Tripeptid & Acid amin đưa vào hấp thu', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Pepsin KHÔNG bắt buộc để sống, nhưng men TỤY thì có!', desc: 'Nếu thiếu Pepsin (cắt dạ dày), men tụy vẫn tiêu hóa đủ protein; ngược lại suy tụy nặng gây mất đạm trong phân (creatorrhea).', x: 18, y: 50 },
        { n: 2, title: 'Vai trò nhạc trưởng của Enterokinase (Enteropeptidase)', desc: 'Nằm trên bờ bàn chải tá tràng, cắt Trypsinogen → Trypsin để kích hoạt dây chuyền toàn bộ men tiêu đạm tụy.', x: 42, y: 50 }
      ],
      takeaway: 'Dạ dày (Pepsin) cắt sơ bộ → Tụy (Trypsin/Chymotrypsin/Elastase/Carboxypeptidase) cắt thành acid amin & di/tripeptid → Hấp thu cả hai dạng!'
    },
    {
      code: 'Hình 23.13',
      page: 'Bài 23 • tr.295',
      title: 'Cơ chế Hấp thu Acid amin (Na⁺-symport) & Di/Tripeptid (PepT1 / H⁺-symport)',
      summary: 'Khác đường chỉ vào dạng đơn phân, Protein được hấp thu rất nhanh ở dạng Di/Tripeptid qua kênh PepT1 (đồng vận chuyển với ion H⁺!) thậm chí nhanh hơn nhiều kênh acid amin tự do (đồng vận Na⁺).',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Ruột non (Acid amin tự do & Di-/Tri-peptid)',
        bottomLabel: 'Mao mạch Nhung mao → Tĩnh mạch Cửa (Chủ yếu dạng Acid amin tự do)',
        memLabel: 'Tế bào Ruột non (Enterocyte — Chứa Peptidase nội bào)',
        channels: [
          { label: 'Kênh Acid amin (Na⁺-symport)', sub: 'Đa dạng hệ (Trung tính, Kiềm, Acid)', dir: 'down', tone: 'blue', top: 'Đồng vận theo gradient Na⁺', bottom: 'Ra máu TM Cửa' },
          { label: 'Kênh PepT1 (H⁺-symport)', sub: 'Hấp thu nguyên Di-/Tri-peptid!', dir: 'down', tone: 'purple', top: 'Dùng gradient H⁺ (từ NHE3)', bottom: 'Nội bào cắt ngay thành Acid amin!' },
          { label: 'Vận chuyển Đáy-Bên', sub: 'Đẩy Acid amin tự do vào máu', dir: 'down', tone: 'green', top: 'Cũng vận chuyển thuốc β-lactam/ACEi qua PepT1!', bottom: 'Trẻ sơ sinh còn ẩm bào chút IgG mẹ' }
        ]
      },
      pins: [
        { n: 1, title: 'Điểm đặc biệt của PepT1 (Di/Tripeptid)', desc: 'Hấp thu di/tripeptid dùng proton H⁺ (tạo ra nhờ trao đổi Na⁺/H⁺) — nhanh hơn và tiết kiệm năng lượng hơn từng acid amin lẻ; còn là cửa vào cho thuốc Cefalexin, Amoxicillin, Enalapril!', x: 50, y: 50 },
        { n: 2, title: 'Bệnh Hartnup & Cystinuria', desc: 'Đột biến hỏng kênh acid amin trung tính (Tryptophan → bệnh Hartnup gây triệu chứng giống Pellagra) vẫn có thể bù bằng hấp thu dipeptid qua PepT1!', x: 24, y: 50 }
      ],
      takeaway: 'Acid amin tự do vào qua Na⁺-symport; Di/Tripeptid vào nhanh hơn qua PepT1 (H⁺-symport) rồi bị peptidase nội bào cắt thành acid amin ra máu.'
    },
    {
      code: 'Hình 23.14',
      page: 'Bài 23 • tr.296',
      title: 'Sơ đồ Tóm tắt Tiêu hóa và Hấp thu Mỡ (Lipid)',
      summary: 'Mỡ ăn vào chủ yếu là Triglyceride; sau khi được muối mật nhũ tương hóa và Lipase tụy (+ Colipase) cắt vị trí 1 & 3 thành 2 Acid béo tự do + 2-Monoglyceride, chúng tái tổng hợp thành Triglyceride và đóng gói thành Chylomicron vào bạch huyết.',
      svg: {
        kind: 'flow',
        banner: 'Chu trình Tiêu hóa – Tái ester hóa – Vận chuyển Lipid',
        nodes: [
          { title: '1. Nhũ tương hóa (Dạ dày + Muối mật)', sub: 'Tăng ×1000 diện tích tiếp xúc cho Lipase không tan trong mỡ', tone: 'amber' },
          { title: '2. Lipase tụy + Colipase (Tá tràng)', sub: 'Cắt Triglyceride → 2 Acid béo tự do (FFA) + 2-Monoglyceride', tone: 'red' },
          { title: '3. Hạt Micelle → Vào Enterocyte', sub: 'Chuỗi ngắn/TB (<10–12C) vào thẳng TM Cửa; Chuỗi dài vào lưới ER', tone: 'blue' },
          { title: '4. Đóng gói CHYLOMICRON (ApoB-48)', sub: 'Tái tổng hợp Triglyceride + Cholesterol + Phospholipid → Bạch huyết (Lacteal)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Vai trò của Colipase tụy', desc: 'Muối mật phủ bề mặt giọt mỡ sẽ đẩy bật Lipase tụy ra ngoài; Colipase (do tụy tiết dạng procolipase) neo chặt để gắn Lipase trở lại giọt mỡ.', x: 40, y: 50 },
        { n: 2, title: 'Phân nhánh theo độ dài mạch Carbon', desc: 'Acid béo chuỗi ngắn & trung bình (MCT < 12C) tan tốt hơn → KHÔNG cần micelle, KHÔNG đóng chylomicron → đi thẳng vào TM cửa (dùng sữa MCT cho trẻ tắc mật/bất thường bạch huyết!).', x: 66, y: 50 }
      ],
      takeaway: 'Lipase + Colipase tụy cắt TG → 2 FFA + 2-MG → Micelle → Tái tạo TG trong ruột → Chylomicron (ApoB-48) vào Bạch huyết.'
    },
    {
      code: 'Hình 23.15',
      page: 'Bài 23 • tr.296',
      title: '3 Pha Hấp thu Mỡ tại Ruột non (Lòng ruột → Bờ bàn chải → Nội bào & Bạch huyết)',
      summary: 'Minh họa chi tiết sự di chuyển lipid qua 3 không gian: tách khỏi hạt Micelle vào tế bào ruột, tái ester hóa trong lưới nội chất trơn (SER) và xuất bào thành Chylomicron vào ống dưỡng chấp trung tâm.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Pha 1: Lòng ruột (Micelle)', subtitle: 'Muối mật + Phospholipid + Sản phẩm tiêu hóa', tone: 'amber', bullets: ['Giọt mỡ nhũ tương bị thủy phân liên tục thành FFA, 2-MG, Lysophospholipid, Cholesterol', 'Hòa tan vào lõi hạt Micelle đưa qua lớp dịch đứng yên áp sát màng vi nhung mao'] },
          { title: 'Pha 2: Qua màng & Trong TB Ruột (SER)', subtitle: 'Tái tổng hợp Triglyceride', tone: 'blue', bullets: ['FFA chuỗi dài và 2-MG khuếch tán qua màng (Cholesterol nhờ kênh NPC1L1 — đích Ezetimibe!)', 'Trong SER: tái kết hợp lại thành Triglyceride + Cholesterol ester', 'Gắn Apoprotein B-48 → tạo hạt CHYLOMICRON (không tan nên phải bọc lipoprotein)'] },
          { title: 'Pha 3: Xuất bào → Ống Dưỡng chấp (Lacteal)', subtitle: 'Vào Bạch huyết rồi Ống ngực', tone: 'green', bullets: ['Chylomicron quá lớn không chui qua màng đáy mao mạch máu được', 'Chui dễ dàng qua khe hở rộng của mao mạch bạch huyết trung tâm → làm dịch bạch huyết trắng như sữa sau bữa nhiều mỡ!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Bệnh Không có β-lipoprotein máu (Abetalipoproteinemia)', desc: 'Thiếu MTP/ApoB-48 khiến không đóng gói xuất bào Chylomicron được → ứ đầy giọt mỡ trong tế bào ruột, tiêu phân mỡ, thiếu nặng Vitamin E gây thoái hóa võng mạc & thần kinh.', x: 50, y: 70 },
        { n: 2, title: 'Cửa chui qua khe rộng Bạch huyết', desc: 'Do Chylomicron đường kính 100–500 nm quá to so với lỗ nội mô mao mạch ruột.', x: 82, y: 70 }
      ],
      takeaway: 'Cửa vào Cholesterol là NPC1L1; tái tổng hợp TG ở lưới nội chất trơn + gắn ApoB-48 tạo Chylomicron → xuất bào vào BẠCH HUYẾT (Lacteal).'
    },
    {
      code: 'Hình 23.16',
      page: 'Bài 23 • tr.297',
      title: 'Cân bằng 9 Lít Nước Lưu chuyển trong Ống Tiêu hóa mỗi Ngày',
      summary: 'Mỗi ngày ống tiêu hóa tiếp nhận ~9 lít dịch (2 L ăn uống + 7 L dịch tiêu hóa tự tiết); ruột non tái hấp thu tới ~7,5–8 L, đại tràng hấp thu phần lớn phần còn lại (~1,3 L) → chỉ thải ~100–150 mL qua phân.',
      svg: {
        kind: 'flow',
        banner: 'Cân bằng Nước Tiêu hóa 24 giờ (~9.000 mL đầu vào → ~100 mL phân)',
        nodes: [
          { title: 'Nhập vào Tổng ~9 L / ngày', sub: 'Uống/Ăn (~2 L) + Nước bọt (1,5 L) + Dịch vị (2 L) + Mật/Tụy (2 L) + Ruột (1,5 L)', tone: 'blue' },
          { title: 'Hỗng tràng hấp thu (~5,5 L)', sub: 'Đẳng trương theo Na⁺, Glucose, Acid amin (biểu mô khe hở tương đối thấm)', tone: 'teal' },
          { title: 'Hồi tràng hấp thu (~2 L)', sub: 'Tổng Ruột non tái hấp thu ~85–90% lượng dịch!', tone: 'green' },
          { title: 'Đại tràng (~1,3–1,5 L → Phân ~100 mL)', sub: 'Liên kết chặt (Aldosterone ↑ kênh ENaC); tối đa đại tràng bù tới 4–5 L/ngày', tone: 'amber' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao tiêu chảy dễ sốc giảm thể tích rất nhanh?', desc: 'Khi ruột giảm hấp thu hoặc tăng tiết vượt quá công suất tối đa 4–5 L/ngày của đại tràng, cơ thể mất hàng lít dịch và điện giải (Na⁺, K⁺, HCO3⁻) chỉ trong vài giờ.', x: 76, y: 50 },
        { n: 2, title: 'Tỷ lệ tái hấp thu từng đoạn', desc: 'Hỗng tràng hấp thu nhiều nhất (cần đẳng trương), nhưng Hồi tràng và Đại tràng ngày càng "kín" giúp giữ nước và cô đặc phân hiệu quả.', x: 38, y: 50 }
      ],
      takeaway: '9 L dịch vào ống tiêu hóa (2 L ăn uống + 7 L bài tiết) → Ruột non hấp thu ~7,5–8 L → Đại tràng ~1,3 L → Phân chỉ còn ~100 mL.'
    },
    {
      code: 'Hình 23.17',
      page: 'Bài 23 • tr.300',
      title: 'Cơ chế Hấp thu Canxi ở Tá tràng & Hỗng tràng (TRPV6, Calbindin-D9k, Vitamin D3)',
      summary: 'Khi cơ thể cần Canxi, Calcitriol (1,25-(OH)2-D3) thúc đẩy tổng hợp cả 3 khâu hấp thu tích cực qua tế bào: kênh TRPV6 (màng đỉnh), protein vận chuyển Calbindin-D9k (bào tương) và bơm PMCA1b (màng đáy-bên).',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Tá tràng (Ca²⁺ ion hóa hòa tan — Tối ưu ở môi trường hơi acid)',
        bottomLabel: 'Máu Tĩnh mạch Cửa (Điều hòa chính bởi Vitamin D3)',
        memLabel: 'Tế bào Tá tràng (Calcitriol điều hòa gen 3 protein)',
        channels: [
          { label: 'Kênh TRPV6 (Màng đỉnh)', sub: 'Ca²⁺ thấm vào theo bậc điện hóa', dir: 'down', tone: 'blue', top: 'Tăng biểu hiện nhờ Calcitriol', bottom: 'Hấp thu chủ động tại tá tràng' },
          { label: 'Calbindin-D9k (Nội bào)', sub: 'Gắn chở Ca²⁺ tránh ngộ độc tế bào', dir: 'down', tone: 'amber', top: 'Protein phụ thuộc Vitamin D', bottom: 'Đưa Ca²⁺ ngang bào tương tới đáy' },
          { label: 'Bơm PMCA1b & NCX1', sub: 'Đẩy Ca²⁺ ngược gradient ra máu', dir: 'down', tone: 'green', top: 'Tốn ATP (PMCA1b)', bottom: 'Nâng Ca²⁺ máu hiệu quả' }
        ]
      },
      pins: [
        { n: 1, title: '2 con đường hấp thu Ca²⁺', desc: '(1) Xuyên tế bào (Transcellular) tại tá tràng: chủ động, phụ thuộc mạnh Vitamin D3; (2) Kẽ tế bào (Paracellular) suốt ruột non: thụ động khi ăn lượng Canxi cao.', x: 50, y: 24 },
        { n: 2, title: 'Các chất cản trở hấp thu Canxi', desc: 'Oxalat (rau bina), Phytat (ngũ cốc thô), acid béo dư (tạo xà phòng Ca²⁺ trong tiêu phân mỡ) và thiếu acid dạ dày đều làm giảm Ca²⁺ ion hóa hấp thu.', x: 24, y: 74 }
      ],
      takeaway: 'Vitamin D3 (Calcitriol) tăng hấp thu Ca²⁺ ruột thông qua tăng tổng hợp TRPV6 (cửa vào) + Calbindin-D9k (chuyên chở) + PMCA1b (bơm ra máu).'
    },
    {
      code: 'Hình 23.18',
      page: 'Bài 23 • tr.300',
      title: 'Cơ chế Hấp thu Sắt tại Tá tràng (Sắt Heme vs Sắt vô cơ Fe²⁺ qua DMT-1)',
      summary: 'Hấp thu chủ yếu ở TÁ TRÀNG dưới hai dạng: Sắt Heme (từ thịt cá — hấp thu nguyên vẹn dễ nhất) và Sắt vô cơ phải khử từ Fe³⁺ thành Fe²⁺ (nhờ Dcytb + Vitamin C + HCl) mới đi qua kênh DMT-1.',
      svg: {
        kind: 'membrane',
        topLabel: 'Lòng Tá tràng (HCl & Vitamin C khử Fe³⁺ → Fe²⁺; Sắt Heme từ thịt)',
        bottomLabel: 'Máu (Transferrin chở) hoặc Dự trữ trong TB Ruột (Ferritin)',
        memLabel: 'Tế bào Tá tràng — Cửa ngõ Ferroportin (Chịu khóa bởi Hepcidin!)',
        channels: [
          { label: 'Kênh DMT-1 (Fe²⁺)', sub: 'Đồng vận H⁺ kéo Fe²⁺ (cần khử bởi Dcytb/Vit C)', dir: 'down', tone: 'blue', top: 'ChỈ nhận sắt hóa trị +2 (Fe²⁺)', bottom: 'Ức chế bởi Tanin (trà), Phytat' },
          { label: 'Kênh HCP1 (Sắt Heme)', sub: 'Hấp thu nguyên nhân Hem → Heme oxygenase tách Fe²⁺', dir: 'down', tone: 'red', top: 'Hấp thu cực tốt (20–30%)', bottom: 'Ít bị ảnh hưởng bởi thức ăn' },
          { label: 'Ferroportin + Hephaestin', sub: 'Đưa Fe²⁺ → Fe³⁺ gắn Transferrin máu', dir: 'down', tone: 'green', top: 'Dư thừa → kẹt thành Ferritin bong theo phân!', bottom: 'Hepcidin từ Gan khóa Ferroportin!' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao uống viên Sắt nên kèm Nước cam & tránh Trà/Thuốc PPI?', desc: 'HCl dạ dày và Vitamin C giúp giữ sắt ở dạng Fe²⁺ dễ tan qua DMT-1; còn Tanin trong trà và Antacid/PPI kết tủa sắt không hấp thu được.', x: 24, y: 42 },
        { n: 2, title: 'Cơ chế khóa van sắt bằng Hepcidin & Ferritin', desc: 'Cơ thể KHÔNG có đường thải sắt chủ động nào khác ngoài sự bong tế bào ruột chết mang Ferritin sau 3–5 ngày!', x: 76, y: 58 }
      ],
      takeaway: 'Sắt hấp thu ở TÁ TRÀNG: Fe³⁺ phải khử thành Fe²⁺ (nhờ HCl, Vit C) qua DMT-1; Heme vào qua HCP1; cửa ra máu là Ferroportin.'
    },
    {
      code: 'Hình 23.19',
      page: 'Bài 23 • tr.301',
      title: 'Điều hòa Hấp thu Sắt qua Trục Gan (Hepcidin) – Ruột (Ferroportin) theo Tình trạng Kho sắt',
      summary: 'Hepcidin (do Gan tiết ra) là hormon nhạc trưởng điều hòa sắt toàn thân: khi thừa sắt hoặc viêm mạn tính, gan tăng tiết Hepcidin phân hủy kênh Ferroportin nhốt chặt sắt trong tế bào ruột và đại thực bào.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Thiếu Sắt / Thiếu máu (Tăng hấp thu tối đa)', subtitle: 'Hepcidin GIẢM rất thấp', tone: 'green', bullets: ['Gan ngừng tiết Hepcidin → Cửa Ferroportin mở toang', 'Tăng mạnh biểu hiện DMT-1 và Dcytb bờ bàn chải', 'Hầu như toàn bộ sắt đi xuyên qua vào Transferrin máu phục vụ tủy xương'] },
          { title: 'Bình thường (Cân bằng)', subtitle: 'Hepcidin mức trung bình', tone: 'blue', bullets: ['Một phần sắt đi qua Ferroportin (1–2 mg/ngày bù lượng mất sinh lý)', 'Phần dư kẹt lại trong tế bào dưới dạng Ferritin rồi rụng ra theo phân'] },
          { title: 'Thừa Sắt / Viêm mạn tính (Chặn hấp thu)', subtitle: 'Hepcidin TĂNG CAO (IL-6 kích thích)', tone: 'red', bullets: ['Gan tiết nhiều Hepcidin gắn vào Ferroportin gây nội nhập & tiêu hủy cửa ra', 'Sắt bị kẹt chết trong tế bào ruột (Ferritin) và đại thực bào → Thiếu máu trong bệnh lý viêm mạn!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Bệnh Hemochromatosis (Nhiễm sắt mô di truyền)', desc: 'Đột biến gen HFE làm gan KHÔNG tiết nổi Hepcidin dù cơ thể thừa sắt ngập tràn → Ferroportin mở vĩnh viễn gây ứ sắt phá gan (xơ gan), tụy (tiểu đường đồng), tim.', x: 18, y: 68 },
        { n: 2, title: 'Thiếu máu của Bệnh mạn tính (Anemia of Inflammation)', desc: 'Viêm nhiễm tăng IL-6 → kích gan tăng Hepcidin nhốt sắt vào Ferritin làm sắt huyết thanh tụt thấp dù kho dự trữ rất đầy.', x: 82, y: 68 }
      ],
      takeaway: 'Hepcidin từ Gan = "khóa cổng" Ferroportin. Thiếu sắt → Hepcidin ↓ (mở cửa); Thừa sắt / Viêm (IL-6) → Hepcidin ↑ (khóa chặt sắt trong tế bào).'
    }
  ]
};
