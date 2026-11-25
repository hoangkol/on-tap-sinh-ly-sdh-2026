// Lessons 13-17 Textbook Figures & Annotated Medical Schemas (`1. SÁCH SINH LÝ 2025.pdf`)
window.DIAGRAMS_PART3 = {
  // ========================================================================
  // BÀI 13: ĐẠI CƯƠNG NỘI TIẾT & HẠ ĐỒI - TUYẾN YÊN (Bài 26 + Bài 27)
  // ========================================================================
  13: [
    {
      code: 'Hình 26.1',
      page: 'Bài 26 • tr.334',
      title: 'Các Tuyến Nội tiết Chính trong Cơ thể & Phân loại Bản chất Hóa học Hormon',
      summary: 'Hệ nội tiết điều hòa chuyển hóa, tăng trưởng và sinh sản thông qua các tuyến không ống dẫn phóng thích hormon trực tiếp vào máu (3 nhóm: Peptide/Protein, Steroid và Dẫn xuất Amin).',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Nhóm Peptide / Protein (Đa số)', subtitle: 'Tan trong nước • Thụ thể MÀNG TẾ BÀO', tone: 'blue', bullets: ['Hạ đồi, Tuyến yên, Tụy (Insulin/Glucagon), Cận giáp (PTH), Tiêu hóa', 'Dự trữ sẵn trong túi tiết → Xuất bào nhanh, thời gian bán hủy ngắn (phút)'] },
          { title: '2. Nhóm Steroid (Từ Cholesterol)', subtitle: 'Tan trong lipid • Thụ thể BÀO TƯƠNG / NHÂN', tone: 'amber', bullets: ['Vỏ thượng thận (Cortisol, Aldosterone), Tinh hoàn, Buồng trứng, Calcitriol', 'KHÔNG dự trữ trong túi → Tổng hợp tới đâu khuếch tán qua màng tới đó, gắn protein huyết tương'] },
          { title: '3. Nhóm Dẫn xuất Tyrosine (Amin)', subtitle: 'Phân đôi tính chất đặc biệt!', tone: 'purple', bullets: ['Tủy thượng thận (Adrenalin/Noradrenalin): tan trong nước, thụ thể màng', 'Tuyến giáp (T3, T4): tan trong lipid, dự trữ ở chất keo ngoài TB & gắn thụ thể NHÂN'] }
        ]
      },
      pins: [
        { n: 1, title: 'Ngoại lệ vàng của Nhóm Amin', desc: 'Cùng xuất phát từ Tyrosine nhưng Catecholamine hành xử như Peptide (thụ thể màng, tác dụng giây/phút), còn T3/T4 hành xử như Steroid (thụ thể nhân, tác dụng giờ/ngày).', x: 82, y: 50 },
        { n: 2, title: 'Dạng Tự do (Free) mới có hoạt tính', desc: 'Steroid và T3/T4 gắn Albumin/Globulin đặc hiệu (TBG, CBG, SHBG) làm kho dự trữ tuần hoàn; chỉ dạng TỰ DO mới qua màng gắn thụ thể.', x: 50, y: 74 }
      ],
      takeaway: 'Peptide & Catecholamine → Thụ thể MÀNG (tác dụng nhanh). Steroid & Hormon Giáp (T3, T4) → Thụ thể NỘI BÀO/NHÂN (điều hòa phiên mã gen).'
    },
    {
      code: 'Hình 26.2',
      page: 'Bài 26 • tr.338',
      title: 'Thụ thể Liên kết Protein G (GPCR — 7 Lần Xuyên Màng) cho Hormon Tan trong Nước',
      summary: 'Hormon peptide/catecholamine không thấm qua lớp lipid kép nên gắn thụ thể 7 lần xuyên màng ghép cặp với bộ ba tiểu đơn vị α, β, γ (GPCR), hoạt hóa chất truyền tin thứ hai (cAMP hoặc IP3/DAG).',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Khuếch đại Tín hiệu qua Thụ thể GPCR',
        nodes: [
          { title: '1. Hormon gắn Thụ thể 7TM', sub: 'Làm tiểu đơn vị Gα thải GDP và gắn GTP (Hoạt hóa)', tone: 'amber' },
          { title: '2. Phân nhánh theo loại Gα', sub: 'Gs (↑ cAMP), Gi (↓ cAMP), Gq (Phospholipase C → IP3 + DAG)', tone: 'purple' },
          { title: '3. Chất truyền tin thứ 2 (cAMP / Ca²⁺)', sub: 'Hoạt hóa Protein Kinase A (PKA) hoặc PKC / Calmodulin', tone: 'blue' },
          { title: '4. Phosphoryl hóa Enzym Đích', sub: 'Đáp ứng sinh lý nhanh (giây–phút) & khuếch đại ×10⁵ lần', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Danh sách Hormon theo con đường cAMP (Gs)', desc: 'Mẹo "FLAT ChAMP": FSH, LH, ACTH, TSH, CRH, hCG, ADH (V2), MSH, PTH, Calcitonin, Glucagon, β-adrenergic.', x: 40, y: 50 },
        { n: 2, title: 'Danh sách theo con đường IP3/DAG – Ca²⁺ (Gq)', desc: 'GnRH, TRH, Oxytocin, ADH (V1 co mạch), Angiotensin II, α1-adrenergic, Gastrin/CCK (Gq).', x: 64, y: 50 }
      ],
      takeaway: 'GPCR dùng chất truyền tin thứ 2: Gs/Gi điều chỉnh cAMP–PKA; Gq hoạt hóa Phospholipase C tạo IP3 (phóng Ca²⁺) & DAG (PKC).'
    },
    {
      code: 'Hình 26.3',
      page: 'Bài 26 • tr.339',
      title: '4 Siêu họ Thụ thể Hormon & Tín hiệu Nội bào',
      summary: 'Hệ nội tiết sử dụng 4 loại thụ thể chính tùy vị trí tác động và tốc độ đáp ứng sinh lý từ mili-giây tới nhiều giờ.',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Kênh Ion & 2. GPCR (Màng)', subtitle: 'Đáp ứng cực nhanh', tone: 'blue', bullets: ['Kênh ion (Neurotransmitter): đóng/mở trực tiếp trong mili-giây', 'GPCR (7TM — ACTH, TSH, PTH, Glucagon, Adrenalin): qua cAMP hoặc IP3/DAG'] },
          { title: '3. Thụ thể Enzym (Tyrosine Kinase / JAK-STAT)', subtitle: 'Insulin, GH, Prolactin, IGF-1, ANP', tone: 'purple', bullets: ['Insulin & IGF-1: Tyrosine Kinase nội tại tự phosphoryl hóa (MAPK & PI3K)', 'GH & Prolactin & EPO: Lộ trình JAK2–STAT', 'ANP / NO: hoạt hóa Guanylyl Cyclase → tăng cGMP giãn mạch!'] },
          { title: '4. Thụ thể Nhân / Bào tương (Yếu tố phiên mã)', subtitle: 'Steroid, T3/T4, Vitamin D, Retinoic acid', tone: 'red', bullets: ['Tác dụng chậm (giờ → ngày) nhưng kéo dài', 'Thay đổi tổng hợp mRNA & protein mới qua vùng HRE trên DNA'] }
        ]
      },
      pins: [
        { n: 1, title: 'Những hormon dùng cGMP', desc: 'Chỉ có 2 chất kinh điển: ANP/BNP (thụ thể màng guanylyl cyclase) và Nitric Oxide NO (guanylyl cyclase hòa tan bào tương).', x: 50, y: 70 },
        { n: 2, title: 'Insulin vs GH (cùng Tyrosine Kinase nhưng khác kiểu)', desc: 'Thụ thể Insulin có sẵn hoạt tính Tyrosine kinase; thụ thể GH phải mượn enzym JAK2 bên ngoài gắn vào.', x: 50, y: 36 }
      ],
      takeaway: '4 thụ thể: Kênh ion, GPCR (cAMP/IP3), Thụ thể Enzym (Insulin = RTK; GH/Prolactin = JAK-STAT; ANP = cGMP) và Thụ thể Nhân (Steroid, Giáp, Vit D).'
    },
    {
      code: 'Hình 26.4',
      page: 'Bài 26 • tr.340',
      title: 'Cơ chế Cổ điển (Trên Gen) của Hormon Tan trong Lipid qua Thụ thể Nhân',
      summary: 'Hormon Steroid và T3 vượt màng lipid tự do, gắn thụ thể đặc hiệu tách khỏi protein sốc nhiệt (HSP90), nhị hợp hóa (dimerization), bám vào vùng đáp ứng HRE trên DNA kích thích phiên mã mRNA mới.',
      svg: {
        kind: 'flow',
        banner: 'Lộ trình Genomic của Steroid (Cortisol, Aldosterone, Estrogen...) & T3',
        nodes: [
          { title: '1. Dạng tự do khuếch tán qua màng', sub: 'Tách khỏi protein chuyên chở máu (CBG, TBG, Albumin)', tone: 'amber' },
          { title: '2. Gắn Thụ thể Nội bào & Tách HSP90', sub: 'Steroid thường ở Bào tương → vào nhân; T3/Estrogen ở sẵn trong Nhân', tone: 'blue' },
          { title: '3. Dimer gắn vùng HRE trên DNA', sub: 'Kèm Co-activator hoạt hóa RNA Polymerase II', tone: 'purple' },
          { title: '4. Tổng hợp mRNA & Protein mới', sub: 'Tạo kênh ENaC, bơm Na⁺-K⁺, enzyme chuyển hóa (sau 1–24 giờ)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Vị trí đặt sẵn của Thụ thể Steroid vs Giáp', desc: 'Thụ thể Glucocorticoid/Aldosterone/Androgen nằm ở bào tương (khóa bởi HSP90); Thụ thể Tuyến giáp (TR), Estrogen, Vit D nằm sẵn ngay trên DNA trong nhân tế bào!', x: 40, y: 50 },
        { n: 2, title: 'Hiệu ứng khởi phát muộn (Lag phase)', desc: 'Vì phải đợi phiên mã mRNA và dịch mã protein mới nên Corticoid/T3 mất vài giờ đến vài ngày mới đạt đỉnh hiệu lực.', x: 82, y: 50 }
      ],
      takeaway: 'Steroid/T3 khuếch tán qua màng → tách HSP90 / hoạt hóa dimer thụ thể → gắn HRE trên DNA → tổng hợp protein mới.'
    },
    {
      code: 'Hình 26.5',
      page: 'Bài 26 • tr.341',
      title: '3 Cách Tác động của Hormon Tan trong Lipid (Khuếch tán, Nhập bào qua Megalin & Thụ thể Màng Ngoài gen)',
      summary: 'Ngoài khuếch tán cổ điển, nghiên cứu mới chứng minh hormon tan trong lipid còn có thể đi qua nhập bào phức hợp protein-hormon (Megalin) hoặc gắn thụ thể trên màng tạo tác dụng tức thì ngoài gen (Non-genomic).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Cách 1: Khuếch tán Tự do cổ điển', subtitle: 'Giả thuyết Hormon Tự do (Free Hormone Hypothesis)', tone: 'blue', bullets: ['Chỉ ~0,03–5% hormon tự do tách khỏi protein gắn để khuếch tán qua màng kép lipid'] },
          { title: 'Cách 2: Nhập bào nhờ Thụ thể Megalin', subtitle: 'Ví dụ: Phức hợp 25-(OH)-D3 – DBP ở ống thận', tone: 'teal', bullets: ['Tại ống lượn gần thận, toàn bộ phức hợp Vitamin D + protein gắn DBP được thụ thể Megalin/Cubilin nhập bào vào tế bào để chuyển thành Calcitriol!'] },
          { title: 'Cách 3: Tác động Ngoài Gen (Non-genomic)', subtitle: 'Thụ thể trên màng (mER, GPR30, VGCC)', tone: 'red', bullets: ['Tạo đáp ứng nhanh trong vài giây–phút (VD: Estrogen giãn mạch kích thích eNOS sinh NO; Aldosterone hoạt hóa nhanh NHE)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Ý nghĩa của Megalin tại Thận', desc: 'Nếu thiếu Megalin trong bệnh lý ống thận, phức hợp Vit D–DBP thoát ra nước tiểu gây thiếu Vitamin D nặng.', x: 50, y: 50 },
        { n: 2, title: 'Tác động Ngoài gen của Glucocorticoid liều cao', desc: 'Corticoid liều bolus tĩnh mạch trong sốc phản vệ/hen nặng ổn định màng tế bào và giãn mạch chỉ sau vài phút — nhanh hơn nhiều lộ trình phiên mã gen.', x: 82, y: 50 }
      ],
      takeaway: 'Hormon lipid tác động theo 3 con đường: Khuếch tán tự do vào nhân (Genomic) + Nhập bào phức hợp qua Megalin + Thụ thể màng nhanh (Non-genomic).'
    },
    {
      code: 'Hình 26.6',
      page: 'Bài 26 • tr.342',
      title: 'Vị trí Giải phẫu Hạ đồi – Cuống Yên – Tuyến Yên (Yên Trước & Yên Sau)',
      summary: 'Tuyến yên nằm trong hố yên xương bướm ngay dưới giao thoa thị giác, gồm Yên trước (Tuyến yên tuyến — nguồn gốc biểu mô họng Rathke) và Yên sau (Yên thần kinh — kéo dài trực tiếp từ hạ đồi).',
      imgSrc: 'assets/figures/fig_pituitary.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Vùng Hạ đồi (Nhân Trên thị SON & Cạnh não thất PVN)', desc: 'Tổng hợp trực tiếp ADH & Oxytocin gửi xuống yên sau, đồng thời tổng hợp hormon giải phóng/ức chế (TRH, CRH, GnRH, GHRH, Somatostatin, Dopamine) gửi xuống yên trước.', x: 44, y: 20 },
        { n: 2, title: 'Thùy Sau Tuyến Yên (Yên Thần kinh)', desc: 'KHÔNG tự tổng hợp hormon! Chỉ là nơi tận cùng sợi trục chứa và phóng thích ADH (AVP) & Oxytocin khi có điện thế động từ hạ đồi.', x: 34, y: 66 },
        { n: 3, title: 'Thùy Trước Tuyến Yên (Yên Tuyến)', desc: 'Gồm 5 loại tế bào chế tiết 6 hormon: GH, TSH, ACTH, FSH, LH và Prolactin (điều khiển qua hệ mạch cửa).', x: 64, y: 66 }
      ],
      takeaway: 'U tuyến yên to lên trên chèn ép ngay GIAO THOA THỊ GIÁC nằm phía trên gây bán manh thái dương hai bên!'
    },
    {
      code: 'Hình 26.7',
      page: 'Bài 26 • tr.343',
      title: 'Hai Đường Kết nối Hạ đồi – Tuyến yên: Hệ Mạch Cửa (Yên Trước) vs Bó Sợi Trục (Yên Sau)',
      summary: 'Hạ đồi điều khiển Yên trước bằng con đường THỂ DỊCH qua hệ tĩnh mạch cửa hạ đồi–yên, còn điều khiển Yên sau bằng con đường THẦN KINH trực tiếp qua bó sợi trục hạ đồi–yên.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Hạ đồi → Yên Trước: Hệ Mạch Cửa', subtitle: 'Liên lạc Thể dịch (2 lưới mao mạch nối tiếp)', tone: 'red', bullets: ['1. Thân tế bào hạ đồi tiết TRH, CRH, GnRH, GHRH, Dopamine tại lồi giữa (Median eminence)', '2. Theo tĩnh mạch cửa dài xuống mạng mao mạch 2 ở Yên trước → tiết ACTH, TSH, FSH/LH, GH, PRL', 'Rất dễ bị hoại tử thiếu máu khi băng huyết sau sinh (Hội chứng Sheehan!)'] },
          { title: 'Hạ đồi → Yên Sau: Bó Hạ đồi – Yên', subtitle: 'Liên lạc Thần kinh (Sợi trục trực tiếp)', tone: 'blue', bullets: ['Nhân Trên thị (SON — chủ yếu ADH) & Cạnh não thất (PVN — chủ yếu Oxytocin) tổng hợp tiền hormon', 'Đóng gói thành hạt tiết dọc sợi trục xuống tận cùng tại Yên sau rồi xuất bào thẳng vào mao mạch', 'Đứt cuống yên làm teo yên sau nhưng giữ nguồn hạ đồi vẫn tiết được ít ADH'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tất cả Hormon hạ đồi ĐỀU KÍCH THÍCH, trừ 2 chất ỨC CHẾ', desc: 'Dopamine (PIF) từ nhân cung liên tục ỨC CHẾ Prolactin → khi đứt cuống yên (hoặc dùng thuốc chẹn D2), Prolactin TĂNG VỌT trong khi 5 hormon yên trước kia đều GIẢM!', x: 26, y: 40 },
        { n: 2, title: 'Hội chứng Sheehan sau sinh', desc: 'Thai kỳ làm yên trước phì đại gấp đôi nhưng mạch cửa áp lực thấp → tụt huyết áp do băng huyết gây nhồi máu mất sạch hormon yên trước (suy giáp, suy thượng thận, mất sữa).', x: 26, y: 70 }
      ],
      takeaway: 'Yên trước = Hệ mạch cửa (chỉ huy thể dịch; đứt cuống làm PRL TĂNG vì mất Dopamine!). Yên sau = Sợi trục trực tiếp (chỉ dự trữ & xuất bào ADH/Oxytocin).'
    },
    {
      code: 'Hình 26.8',
      page: 'Bài 26 • tr.345',
      title: 'Tổng thể Các Trục Hạ đồi – Tuyến yên trước – Tuyến Đích',
      summary: 'Hệ thống phân cấp 3 tầng từ Hạ đồi (Tier 1: -RH) → Tuyến yên trước (Tier 2: -SH/-TH) → Tuyến nội tiết đích (Tier 3) trừ Prolactin và GH có tác động thẳng không qua tuyến đích đơn lẻ.',
      svg: {
        kind: 'flow',
        banner: '6 Trục Dưới Quyền Hạ đồi – Yên Trước',
        nodes: [
          { title: 'CRH → ACTH → Vỏ Thượng thận', sub: 'Tiết Cortisol & Androgen (đối giao cảm/stress)', tone: 'red' },
          { title: 'TRH → TSH → Tuyến Giáp', sub: 'Tiết T3, T4 (cũng kích thích nhẹ Prolactin)', tone: 'amber' },
          { title: 'GnRH → FSH & LH → Sinh dục', sub: 'Testosterone / Estrogen, Progesterone & Giao tử', tone: 'purple' },
          { title: 'GHRH / SS → GH → Gan & Mô', sub: 'Gan tiết IGF-1 (tăng trưởng xương, cơ, mô mềm)', tone: 'green' },
          { title: 'Dopamine (−) → Prolactin → Tuyến vú', sub: 'Tạo sữa; Đứt cuống yên làm PRL tăng ngược!', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Suy giáp nguyên phát có thể gây Tiết sữa (Galactorrhea)?', desc: 'Khi T3/T4 thấp → Hạ đồi tăng vọt TRH → TRH không chỉ kích thích TSH mà còn kích thích tuyến vú tiết PROLACTIN!', x: 40, y: 40 },
        { n: 2, title: '2 ngoại lệ không theo mô hình tuyến đích cổ điển', desc: 'Prolactin tác động thẳng vào tuyến vú tạo sữa (chịu ức chế bởi Dopamine); GH vừa tác động trực tiếp mô vừa thông qua IGF-1 ở gan.', x: 76, y: 68 }
      ],
      takeaway: 'Ghi nhớ 5 trục kích thích & 1 trục ức chế (Dopamine ức chế Prolactin). TRH tăng cao có thể kéo tăng cả Prolactin.'
    },
    {
      code: 'Hình 26.9',
      page: 'Bài 26 • tr.345',
      title: 'Trục Hạ đồi – Tuyến yên – Thượng thận (HPA) & 3 Vòng Điều hòa Ngược Âm tính',
      summary: 'Cortisol do lớp bó vỏ thượng thận tiết ra sẽ ức chế ngược vòng dài lên cả Tuyến yên (giảm ACTH) và Hạ đồi (giảm CRH); đồng thời chính ACTH cũng tự ức chế ngược vòng ngắn lên Hạ đồi.',
      svg: {
        kind: 'cycle',
        centerTitle: 'CÂN BẰNG TRỤC HPA',
        centerSub: '3 Vòng Feedback Âm',
        centerTone: 'red',
        steps: [
          { label: 'Stress / Nhịp sáng sớm (6–8h)', detail: 'Kích thích Hạ đồi (PVN) tiết CRH + AVP', tone: 'amber' },
          { label: 'Yên trước (TB Corticotrope)', detail: 'Chế tiết ACTH từ tiền chất POMC', tone: 'purple' },
          { label: 'Lớp Bó Vỏ Thượng thận', detail: 'Tổng hợp & phóng thích Cortisol vào máu', tone: 'blue' },
          { label: 'Feedback Âm Vòng Dài & Ngắn', detail: 'Cortisol (−) cả CRH & ACTH; ACTH (−) CRH', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Giải thích Nghiệm pháp Ức chế Dexamethasone', desc: 'Cho uống Dexamethasone (glucocorticoid mạnh) vào nửa đêm: người bình thường sáng hôm sau bị feedback âm mạnh làm sụt hẳn ACTH & Cortisol; bệnh Cushing vẫn tiết cao bất thường.', x: 24, y: 50 },
        { n: 2, title: 'Cảnh báo Ngừng Corticoid ngoại sinh đột ngột', desc: 'Uống Prednisolone/Dexa kéo dài ức chế trục HPA gây teo vỏ thượng thận: ngừng đột ngột gây cơn Suy thượng thận cấp tụt HA nguy kịch!', x: 76, y: 50 }
      ],
      takeaway: '3 vòng điều hòa ngược: Vòng dài (Cortisol → Hạ đồi & Yên), Vòng ngắn (ACTH → Hạ đồi), Vòng cực ngắn (CRH tự ức chế).'
    },
    {
      code: 'Hình 27.1',
      page: 'Bài 27 • tr.348',
      title: 'Thành phần Mô học Yên Tuyến (Yên Trước) vs Yên Thần kinh (Yên Sau)',
      summary: 'Yên trước (Pars distalis, Pars intermedia, Pars tuberalis) gồm 3 nhóm tế bào nhuộm (Ưa acid 40%, Ưa base 10%, Kỵ màu 50%); Yên sau gồm tế bào đệm Pituicyte nâng đỡ bó sợi trục không myelin chứa thể Herring.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Yên Tuyến (Adenohypophysis — Yên Trước)', subtitle: 'Tế bào Biểu mô chế tiết 3 loại màu', tone: 'red', bullets: ['Ưa Acid (Acidophil — Đỏ/Cam): Somatotrope (GH ~50% toàn tuyến!) & Lactotrope (PRL)', 'Ưa Base (Basophil — Tím xanh): Corticotrope (ACTH), Thyrotrope (TSH), Gonadotrope (FSH/LH)', 'Kỵ màu (Chromophobe): Tế bào dự trữ / tế bào vừa phóng thích hết hạt'] },
          { title: 'Yên Thần kinh (Neurohypophysis — Yên Sau)', subtitle: 'Sợi trục từ Hạ đồi + TB đệm Pituicyte', tone: 'blue', bullets: ['Các chỗ phình dọc sợi trục chứa đầy bọc ADH hoặc Oxytocin gọi là THỂ HERRING', 'Tế bào Pituicyte chỉ là tế bào thần kinh đệm nâng đỡ, KHÔNG tự chế tiết hormon!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Mẹo nhớ tế bào Ưa Acid vs Ưa Base (B-FLAT)', desc: 'Ưa Base = B-FLAT (Basophil: FSH, LH, ACTH, TSH). Còn lại GH và Prolactin là Ưa Acid (chiếm tới phân nửa mật độ tuyến yên)!', x: 26, y: 40 },
        { n: 2, title: 'Thể Herring là kho chứa ADH & Oxytocin', desc: 'Cùng gắn protein vận chuyển Neurophysin đi dọc bó hạ đồi–yên xuống chờ xung thần kinh kích hoạt xuất bào.', x: 74, y: 40 }
      ],
      takeaway: 'Ưa Base = B-FLAT (FSH, LH, ACTH, TSH). Ưa Acid = GH, Prolactin. Yên sau chỉ có sợi trục mang thể Herring + đệm Pituicyte.'
    },
    {
      code: 'Hình 27.2',
      page: 'Bài 27 • tr.349',
      title: 'Tuần hoàn Hệ Mạch Cửa Dài và Mạch Cửa Ngắn Hạ đồi – Tuyến yên',
      summary: 'Động mạch yên trên tưới máu cho lồi giữa tạo mạng cửa dài nuôi Yên trước; Động mạch yên dưới tưới Yên sau và nối qua các tĩnh mạch cửa ngắn giúp trao đổi điều hòa hai chiều.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 34, w: 260, h: 90, label: 'ĐM Yên Trên → Lồi giữa (Lưới I)', sub: 'Nhận hormon giải phóng từ Hạ đồi\n→ Tĩnh mạch Cửa DÀI xuống Yên Trước', tone: 'red' },
          { x: 380, y: 34, w: 260, h: 90, label: 'ĐM Yên Dưới → Yên Sau', sub: 'Tưới trực tiếp Thùy sau & Nhận ADH/OT\nvào Tĩnh mạch Tuyến yên', tone: 'blue' },
          { x: 90, y: 180, w: 500, h: 105, label: 'Mạng Mao mạch Dạng Xoang Yên Trước (Lưới II) + Mạch Cửa Ngắn', sub: 'Yên trước KHÔNG có nguồn ĐM trực tiếp mà nhận máu tĩnh mạch qua hệ cửa dài (~90%) + mạch cửa ngắn từ Yên sau (giải thích vì sao AVP hỗ trợ kích ACTH)', tone: 'purple' }
        ],
        links: [
          { x1: 170, y1: 124, x2: 240, y2: 178, label: 'Mạch cửa Dài', color: '#dc2626' },
          { x1: 510, y1: 124, x2: 440, y2: 178, label: 'Mạch cửa Ngắn (AVP)', color: '#2563eb', dashed: true }
        ]
      },
      pins: [
        { n: 1, title: 'Tính dễ tổn thương của Yên Trước khi Tụt HA', desc: 'Vì hoàn toàn phụ thuộc máu tĩnh mạch áp lực thấp từ hệ cửa dài (không có tiểu ĐM trực tiếp), Yên trước hoại tử nhanh nhất khi sốc mất máu.', x: 24, y: 36 },
        { n: 2, title: 'Mạch cửa ngắn dẫn AVP sang Yên trước', desc: 'Khi stress nặng, AVP từ yên sau qua mạch cửa ngắn sang tăng cường cùng CRH kích thích tế bào Corticotrope tiết ACTH!', x: 76, y: 70 }
      ],
      takeaway: 'Yên trước nhận máu nuôi qua TM cửa dài (từ ĐM yên trên) và TM cửa ngắn (nối Yên sau sang mang AVP kích ACTH).'
    },
    {
      code: 'Hình 27.3',
      page: 'Bài 27 • tr.351',
      title: 'Tổng hợp và Cắt tách AVP (ADH) từ Tiền chất Prohormon Preprovasopressin',
      summary: 'ADH (Arginine Vasopressin — 9 acid amin) và Oxytocin là hai nonapeptide cực giống nhau (khác đúng 2 acid amin vị trí 3 & 8), được cắt từ tiền chất kèm protein mang Neurophysin II (NP-II) và Copeptin (GP).',
      svg: {
        kind: 'flow',
        banner: 'Chuyển hóa Prepropressophysin trong Nhân Trên thị → Thể Herring Yên Sau',
        nodes: [
          { title: 'Preprovasopressin (Lưới ER hạt)', sub: 'Đoạn tín hiệu + AVP (9 aa) + Neurophysin II + Glycopeptide (Copeptin)', tone: 'slate' },
          { title: 'Cắt tạo Provasopressin (Bộ Golgi)', sub: 'Đóng gói vào bọc tiết vận chuyển dọc sợi trục xuống Yên sau', tone: 'amber' },
          { title: 'Tách 3 mảnh trong bọc tiết', sub: '1. AVP (ADH tự do) • 2. Neurophysin II (chở) • 3. Copeptin (bền vững)', tone: 'blue' },
          { title: 'Xuất bào phụ thuộc Ca²⁺ khi có Xung', sub: 'Thời gian bán hủy AVP rất ngắn (~15 phút); Copeptin định lượng ổn định!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Copeptin là dấu ấn thay thế đo ADH!', desc: 'ADH tự do cực nhỏ và dễ phân hủy trong ống máu, nhưng đoạn C-tận Copeptin đồng tiết tỷ lệ 1:1 lại rất bền → dùng chẩn đoán phân biệt Đái tháo nhạt vs Uống nhiều tâm căn.', x: 64, y: 50 },
        { n: 2, title: 'AVP vs Oxytocin chỉ khác 2/9 acid amin', desc: 'Nên liều cực cao Oxytocin truyền giục sinh kéo dài có thể kích nhẹ thụ thể V2 gây giữ nước hạ Na⁺ máu!', x: 24, y: 50 }
      ],
      takeaway: 'Tiền chất Preprovasopressin cắt thành AVP (ADH, 9 aa) + Neurophysin II + Copeptin (tỷ lệ 1:1, rất bền để định lượng lâm sàng).'
    },
    {
      code: 'Hình 27.4',
      page: 'Bài 27 • tr.354',
      title: 'Cắt tách Tiền chất POMC (Pro-opiomelanocortin) tạo ACTH & α-MSH nhờ Men PC1 / PC2',
      summary: 'ACTH (39 acid amin) không được tổng hợp lẻ mà cắt từ chuỗi lớn POMC nhờ enzym Prohormone Convertase 1 (PC1) ở thùy trước; 13 acid amin đầu của ACTH chính là chuỗi α-MSH kích thích hắc tố da!',
      svg: {
        kind: 'flow',
        banner: 'Số phận Phân tử POMC tại Tuyến Yên & Da',
        nodes: [
          { title: 'Tiền chất POMC (241 acid amin)', sub: 'CRH kích thích phiên mã gen POMC tại tế bào Corticotrope', tone: 'purple' },
          { title: 'Enzym PC1 cắt tại Thùy Trước', sub: 'Tạo ACTH (39 aa) + β-Lipotropin (→ β-Endorphin giảm đau) + N-POMC', tone: 'red' },
          { title: 'Enzym PC2 cắt tiếp (Thùy giữa / Da)', sub: 'Cắt 13 aa đầu của ACTH tạo α-MSH (kích thích tế bào sắc tố Melanocyte)', tone: 'amber' },
          { title: 'Hệ quả Lâm sàng khi ACTH tăng rất cao', sub: 'Xạm da toàn thân vùng phơi sáng, nếp gấp (Bệnh Addison, Hội chứng Nelson)!', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Suy thượng thận nguyên phát (Addison) da sạm đen?', desc: 'Do thiếu Cortisol → mất feedback âm → Yên trước tổng hợp POMC và ACTH ồ ạt → đoạn 13 aa đầu của ACTH (giống hệt α-MSH) gắn thụ thể MC1R kích thích tạo Melanin! (Suy thượng thận thứ phát do yên KHÔNG bị sạm da vì ACTH thấp!)', x: 84, y: 50 },
        { n: 2, title: 'ACTH gắn thụ thể MC2R vỏ thượng thận', desc: '13–24 aa đầu đủ hoạt tính sinh học (Cosyntropin 1–24 aa dùng làm nghiệm pháp kích thích thượng thận).', x: 40, y: 50 }
      ],
      takeaway: 'POMC →(PC1)→ ACTH (39 aa) + β-Lipotropin/Endorphin. Vì ACTH chứa sẵn chuỗi α-MSH nên tăng ACTH mạn (Addison, Cushing nguồn yên) gây SẠM DA.'
    },
    {
      code: 'Hình 27.5',
      page: 'Bài 27 • tr.355',
      title: 'Điều hòa Bài tiết ACTH bởi CRH, AVP và Feedback Âm Hai pha của Cortisol',
      summary: 'CRH là chất kích thích chính (tăng cAMP), AVP hiệp đồng nhân đôi tác dụng qua thụ thể V1b (IP3/Ca²⁺); Cortisol ức chế ngược tuyến yên nhanh (chặn xuất bào) và chậm (chặn phiên mã POMC).',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 38, w: 250, h: 105, label: 'Hạ đồi PVN: CRH + AVP', sub: 'CRH → Thụ thể CRHR1 (Gs → cAMP)\nAVP → Thụ thể V1b (Gq → IP3/Ca²⁺)', tone: 'amber' },
          { x: 390, y: 38, w: 250, h: 105, label: 'Tế bào Corticotrope (Yên trước)', sub: 'Tổng hợp POMC → Xuất bào ACTH\nCả 2 chất hiệp đồng cực mạnh khi Stress', tone: 'purple' },
          { x: 100, y: 190, w: 480, h: 105, label: 'Vỏ Thượng thận (Cortisol) — 2 Pha Feedback Âm tính', sub: '• Nhanh (vài phút): Ức chế màng chặn xuất bào hạt ACTH (Non-genomic)\n• Chậm (vài giờ): Ức chế gen tổng hợp CRH hạ đồi & gen POMC tuyến yên', tone: 'red' }
        ],
        links: [
          { x1: 290, y1: 90, x2: 386, y2: 90, label: 'CRH + AVP ↑', color: '#9333ea' },
          { x1: 515, y1: 145, x2: 460, y2: 188, label: 'ACTH', color: '#dc2626' },
          { x1: 200, y1: 190, x2: 165, y2: 145, label: 'Cortisol (−)', color: '#dc2626', dashed: true }
        ]
      },
      pins: [
        { n: 1, title: 'Stress nặng vượt qua được feedback âm', desc: 'Nhiễm trùng huyết, chấn thương nặng, hạ đường huyết kích thích liên tục CRH + AVP ép trục HPA mở hết công suất bất chấp Cortisol đang cao.', x: 24, y: 36 },
        { n: 2, title: 'Đích chính của Cortisol không chỉ có Yên', desc: 'Cortisol khóa cả nhân PVN hạ đồi lẫn tế bào Corticotrope tuyến yên.', x: 50, y: 74 }
      ],
      takeaway: 'CRH (cAMP) + AVP (IP3/Ca²⁺ qua V1b) hiệp đồng tăng ACTH; Cortisol phanh ngược bằng 2 pha (nhanh chặn xuất bào, chậm chặn phiên mã POMC).'
    },
    {
      code: 'Hình 27.6',
      page: 'Bài 27 • tr.356',
      title: 'Nhịp Sinh học Ngày Đêm (Circadian Rhythm) của Cortisol và Melatonin',
      summary: 'Đồng hồ sinh học nhân trên chéo (SCN) điều khiển hai đường cong đối lập: Cortisol đạt đỉnh lúc 6–8 giờ sáng để chuẩn bị tỉnh táo chuyển hóa và thấp nhất lúc 23–24h; Melatonin tăng vọt vào ban đêm giúp dễ ngủ.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian trong 24 giờ (0h Đêm → 8h Sáng → 16h Chiều → 24h Đêm)',
        yLabel: 'Nồng độ Hormon Tương đối trong Máu',
        xTicks: [
          { x: 10, label: '0h (Đêm)' },
          { x: 35, label: '6–8h Sáng' },
          { x: 60, label: '14h Chiều' },
          { x: 88, label: '23h Đêm' }
        ],
        yTicks: [
          { y: 15, label: 'Đáy (Nadir)' },
          { y: 85, label: 'Đỉnh sinh lý' }
        ],
        zones: [
          { x1: 10, x2: 28, tone: 'slate', label: 'Đêm ngủ' },
          { x1: 78, x2: 95, tone: 'slate', label: 'Tối ngủ' }
        ],
        curves: [
          { name: 'Cortisol & ACTH (Đỉnh 6–8h sáng, Đáy 23–24h)', color: '#dc2626', pts: [[10, 18], [26, 62], [36, 88], [56, 48], [86, 16]] },
          { name: 'Melatonin Tuyến Tùng (Đỉnh 2–3h sáng, Sáng tắt)', color: '#2563eb', dashed: true, pts: [[10, 86], [24, 54], [36, 15], [64, 15], [88, 68]] }
        ]
      },
      pins: [
        { n: 1, title: 'Thời điểm lấy máu định lượng Cortisol chuẩn', desc: 'Lấy lúc 8h sáng (để phát hiện Suy thượng thận nếu quá thấp) và 23–24h đêm hoặc nước bọt đêm (để chẩn đoán Hội chứng Cushing vì mất nhịp ngày đêm, Cortisol vẫn cao lúc nửa đêm!).', x: 38, y: 20 },
        { n: 2, title: 'Cách uống thuốc Corticoid hợp sinh lý', desc: 'Uống liều 1 lần vào buổi SÁNG (7–8h) mô phỏng đỉnh tự nhiên giúp ít ức chế trục HPA nhất.', x: 24, y: 40 }
      ],
      takeaway: 'Cortisol ĐỈNH 6–8h sáng, ĐÁY lúc 23–24h (mất đáy nửa đêm = dấu hiệu Cushing). Melatonin ĐỈNH ban đêm (~2–3h sáng) và bị ánh sáng xanh ức chế.'
    },
    {
      code: 'Hình 27.7',
      page: 'Bài 27 • tr.356',
      title: 'Đường Dẫn truyền Thị giác Điều hòa Tuyến Tùng tiết Melatonin',
      summary: 'Ánh sáng chiếu vào tế bào hạch võng mạc nhạy cảm ánh sáng (Melanopsin) → qua bó võng mạc-hạ đồi → Nhân trên chéo (SCN) → Tủy sống → Hạch cổ trên → Ức chế Tuyến Tùng tiết Melatonin.',
      svg: {
        kind: 'flow',
        banner: 'Cung Phản xạ Ánh sáng → Tuyến Tùng (Bóng tối kích thích, Ánh sáng ức chế!)',
        nodes: [
          { title: '1. Võng mạc (Melanopsin)', sub: 'Tiếp nhận ánh sáng xanh 480 nm truyền về Nhân trên chéo (SCN)', tone: 'amber' },
          { title: '2. SCN → Nhân Cạnh não thất (PVN)', sub: 'SCN là "Đồng hồ sinh học chủ" ức chế PVN khi có ánh sáng ban ngày', tone: 'blue' },
          { title: '3. Sừng bên Tủy ngực T1–T2 → Hạch Cổ Trên', sub: 'Hạch giao cảm cho sợi sau hạch tiết Noradrenalin vào Tuyến Tùng lúc tối', tone: 'purple' },
          { title: '4. Tuyến Tùng (Pineal Gland)', sub: 'Chuyển Serotonin → Melatonin (gây buồn ngủ, điều chỉnh nhịp ngày đêm)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế mất ngủ khi dùng điện thoại ban đêm', desc: 'Ánh sáng xanh kích thích thụ thể Melanopsin → bật SCN → cắt tín hiệu giao cảm tới tuyến tùng làm ngưng tiết Melatonin.', x: 18, y: 50 },
        { n: 2, title: 'Dùng Melatonin tổng hợp', desc: 'Điều chỉnh lệch múi giờ (Jet lag) hoặc rối loạn giấc ngủ nhịp sinh học ở người cao tuổi/người mù.', x: 84, y: 50 }
      ],
      takeaway: 'Võng mạc → Nhân trên chéo (SCN) → PVN → Tủy ngực → Hạch cổ trên (Noradrenalin) → Tuyến Tùng tiết Melatonin khi TRỜI TỐI.'
    },
    {
      code: 'Hình 27.8',
      page: 'Bài 27 • tr.358',
      title: 'Cấu tạo Chức năng Nang Trứng (Vỏ/Hạt) & Ống Sinh tinh (Leydig/Sertoli) — Giả thuyết 2 Tế bào',
      summary: 'Cặp đôi tế bào nội tiết ở cả hai giới chịu sự phân công chặt chẽ giữa LH (chủ yếu kích sản xuất Androgen ở TB Vỏ/Leydig) và FSH (chủ yếu kích hoạt Aromatase chuyển thành Estrogen & nuôi giao tử ở TB Hạt/Sertoli).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Buồng trứng (Nang noãn trưởng thành)', subtitle: 'Mô hình 2 Tế bào – 2 Gonadotropin', tone: 'red', bullets: ['1. Tế bào Vỏ (Theca interna): Chỉ có thụ thể LH → Cholesterol → Androstenedione / Testosterone', '2. Tế bào Hạt (Granulosa): Có thụ thể FSH → bật Aromatase chuyển Androgen sang Estradiol (E2) & tiết Inhibin B', 'Đỉnh LH giữa chu kỳ gây phóng noãn & chuyển thể vàng tiết Progesterone'] },
          { title: 'Tinh hoàn (Kẽ tinh hoàn & Ống sinh tinh)', subtitle: 'Phân công Leydig vs Sertoli', tone: 'blue', bullets: ['1. Tế bào Kẽ Leydig (ngoài ống): Chỉ có thụ thể LH → Tổng hợp Testosterone', '2. Tế bào Sertoli (trong ống): Có thụ thể FSH → Nuôi dưỡng tinh trùng, tiết ABP (gắn giữ Testosterone) & Inhibin B ức chế ngược FSH', 'Hàng rào Máu – Tinh hoàn hình thành từ liên kết chặt giữa các TB Sertoli'] }
        ]
      },
      pins: [
        { n: 1, title: 'Mẹo nhớ dễ thuộc: L = Leydig / Luteinizing / Theca; F = Follicle / Sertoli', desc: 'Ở cả nam lẫn nữ: LH kích tổng hợp tiền chất Androgen (tế bào Leydig hoặc tế bào Vỏ); FSH kích Aromatase & sản sinh tinh trùng/nang noãn + Inhibin (tế bào Sertoli hoặc tế bào Hạt).', x: 50, y: 40 },
        { n: 2, title: 'Vai trò Protein gắn Androgen (ABP) ở Sertoli', desc: 'Giữ nồng độ Testosterone nội tại ống sinh tinh cao gấp ~50 lần trong máu để đảm bảo sinh tinh trùng bình thường!', x: 74, y: 66 }
      ],
      takeaway: 'Nam: LH → Leydig (Testosterone); FSH → Sertoli (Sinh tinh, ABP, Inhibin). Nữ: LH → Vỏ (Androgen); FSH → Hạt (Aromatase → Estrogen, Inhibin).'
    },
    {
      code: 'Hình 27.9',
      page: 'Bài 27 • tr.359',
      title: 'Đặc điểm Tiết Xung (Pulsatile) của GnRH, LH và FSH ở Nam giới',
      summary: 'GnRH được hạ đồi tiết theo từng xung mỗi 60–90 phút: chính NHỊP XUNG mới kích thích Yên trước tiết FSH/LH, còn truyền GnRH liên tục kéo dài sẽ gây giải mẫn cảm và TẮT HẲN trục sinh dục!',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian theo dõi trong ngày (giờ: 0 → 8 giờ)',
        yLabel: 'Nồng độ Hormon (mIU/mL)',
        xTicks: [
          { x: 15, label: '0h' },
          { x: 40, label: '2h' },
          { x: 65, label: '4h' },
          { x: 90, label: '6h' }
        ],
        yTicks: [
          { y: 15, label: 'Thấp' },
          { y: 80, label: 'Đỉnh xung' }
        ],
        curves: [
          { name: 'Xung GnRH & Đỉnh LH đi kèm (mỗi 90 phút)', color: '#dc2626', pts: [[10, 24], [22, 82], [32, 26], [46, 84], [58, 24], [72, 80], [88, 28]] },
          { name: 'FSH (Biến động êm hơn do bán hủy dài hơn)', color: '#2563eb', dashed: true, pts: [[10, 42], [24, 52], [48, 54], [74, 50], [88, 44]] }
        ]
      },
      pins: [
        { n: 1, title: 'Nghịch lý Liều Xung vs Liều Liên tục của Đồng vận GnRH', desc: 'Tiêm bơm xung GnRH mỗi 90 phút → PHỤC HỒI dậy thì/sinh sản (vô sinh vùng hạ đồi). Tiêm Leuprolide/Goserelin giải phóng CHẬM LIÊN TỤC → ức chế ngược thụ thể GnRH → điều trị Dậy thì sớm, Lạc nội mạc tử cung, Ung thư tiền liệt tuyến!', x: 48, y: 24 },
        { n: 2, title: 'Khác biệt Tần số xung tạo ưu thế LH vs FSH', desc: 'Xung GnRH nhanh (mỗi 60p) ưu tiên tiết LH; xung chậm (mỗi 2–3h) ưu tiên tiết FSH.', x: 76, y: 60 }
      ],
      takeaway: 'GnRH tiết DẠNG XUNG (~60–90p/lần) mới duy trì trục sinh dục; cung cấp GnRH liên tục (Leuprolide) làm giải mẫn cảm thụ thể → thiến hóa học.'
    },
    {
      code: 'Hình 27.10',
      page: 'Bài 27 • tr.360',
      title: 'Sơ đồ Trục Hạ đồi – Yên – Tuyến Sinh dục & Điều hòa Ngược bởi Testosterone / Estrogen / Inhibin',
      summary: 'Ở nam, Testosterone ức chế ngược cả LH & GnRH, còn Inhibin B (từ Sertoli) ức chế chọn lọc FSH. Ở nữ, Estrogen bình thường ức chế âm nhưng khi ĐẠT NGƯỠNG CAO > 200 pg/mL kéo dài ≥ 48h trước rụng trứng lại gây FEEDBACK DƯƠNG tạo đỉnh LH!',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Trục Hạ đồi – Yên – Tinh hoàn (Nam)', subtitle: 'Ổn định nhờ Feedback Âm quanh năm', tone: 'blue', bullets: ['GnRH → LH → Leydig → Testosterone → (−) GnRH & LH', 'GnRH → FSH → Sertoli → Sinh tinh & Inhibin B → (−) chọn lọc FSH', 'Hội chứng Klinefelter / Suy tinh hoàn: Testosterone thấp, LH & FSH TĂNG CAO'] },
          { title: 'Trục Hạ đồi – Yên – Buồng trứng (Nữ)', subtitle: 'Feedback Âm (đa số chu kỳ) vs DƯƠNG (Giữa chu kỳ)', tone: 'red', bullets: ['Pha Nang noãn sớm & Pha Hoàng thể: Estrogen + Progesterone + Inhibin (−) FSH/LH', 'Ngày 12–14 (Estrogen cao > 200 pg/mL suốt 36–48h KHÔNG có Progesterone) → Kích hoạt FEEDBACK DƯƠNG nổ đỉnh LH gây Phóng noãn!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế Duy nhất của Feedback Dương ở Phụ nữ', desc: 'Estrogen nồng độ cao kéo dài (khi nang Graaf chín) chuyển tác dụng lên tế bào tuyến yên/vùng AVPV hạ đồi từ ức chế sang kích thích ồ ạt tạo đỉnh LH (LH surge) phóng noãn sau 24–36h.', x: 74, y: 68 },
        { n: 2, title: 'Inhibin B đặc hiệu cho FSH', desc: 'Đánh giá trực tiếp dự trữ tế bào Sertoli (nam) và nang noãn đang phát triển (nữ).', x: 26, y: 40 }
      ],
      takeaway: 'Inhibin B ức chế chuyên biệt FSH. Estrogen liều cao cuối pha nang noãn gây Feedback DƯƠNG nổ đỉnh LH phóng noãn.'
    },
    {
      code: 'Hình 27.11',
      page: 'Bài 27 • tr.362',
      title: 'Thụ thể Hormon Tăng trưởng (GH) & Lộ trình Tín hiệu JAK2 – STAT / MAPK / IRS-PI3K',
      summary: 'GH gắn đồng thời 1 phân tử lên 2 thụ thể GH tạo cầu nối dimer → kéo 2 phân tử tyrosine kinase JAK2 lại gần nhau tự phosphoryl hóa và kích hoạt 3 nhánh: STAT (tổng hợp IGF-1), MAPK (tăng sinh tế bào) và IRS-PI3K.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Nội bào của Hormon Tăng trưởng (GH)',
        nodes: [
          { title: '1. GH gắn 2 Thụ thể GHR (Dimer hóa)', sub: 'Thụ thể thuộc họ Cytokine (1 lần xuyên màng, không có kinase nội tại)', tone: 'amber' },
          { title: '2. Hoạt hóa JAK2 (Janus Kinase 2)', sub: '2 phân tử JAK2 tự phosphoryl hóa chéo & phosphoryl hóa đuôi GHR', tone: 'purple' },
          { title: '3. Ba nhánh tín hiệu song song', sub: '• STAT1/3/5 → Nhân tạo gen IGF-1 & chuyển hóa\n• MAPK/ERK → Tăng sinh • IRS-1/PI3K → Bắt chước nhẹ Insulin', tone: 'blue' },
          { title: '4. Đáp ứng Tăng trưởng & Chuyển hóa', sub: 'Tăng tổng hợp Protein, Ly giải mỡ (↑ FFA) & Kháng Insulin nhẹ lúc đói', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Lùn Laron (Kháng GH bẩm sinh)', desc: 'Đột biến hỏng thụ thể GHR hoặc đường JAK2–STAT5b: nồng độ GH máu RẤT CAO nhưng gan không tổng hợp được IGF-1 nên vẫn lùn nặng (chỉ điều trị được bằng tiêm IGF-1 tái tổ hợp!).', x: 36, y: 50 },
        { n: 2, title: 'Tác dụng ĐỐI KHÁNG Insulin của GH mạn tính', desc: 'Dù kích nhẹ IRS ngắn hạn, tác dụng chính kéo dài của GH là tăng ly giải mỡ và giảm thu nhận glucose ở cơ → Bệnh nhân To đầu chi (Acromegaly) rất hay bị Đái tháo đường thứ phát!', x: 84, y: 50 }
      ],
      takeaway: 'Thụ thể GH dimer hóa hoạt hóa JAK2 → STAT5b → sản xuất IGF-1 ở Gan. GH mạn tính gây tăng đường huyết (kháng Insulin) + tăng ly giải mỡ.'
    },
    {
      code: 'Hình 27.12',
      page: 'Bài 27 • tr.363',
      title: 'Tác động Trực tiếp và Gián tiếp (qua IGF-1 / Somatomedin C) của GH lên Sụn nối Đầu xương',
      summary: 'GH tăng trưởng cơ thể qua hai cơ chế: Tác động trực tiếp kích tế bào sụn nghỉ phân hóa & nhạy cảm với IGF-1, và tác động gián tiếp kích thích Gan tiết IGF-1 thúc đẩy tăng sinh sụn đĩa nối dài xương.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 38, w: 220, h: 110, label: 'Tuyến Yên Trước: Tiết GH', sub: 'GHRH (+) vs Somatostatin (−)\nTiết xung ban đêm (giấc ngủ sâu SWS)', tone: 'purple' },
          { x: 380, y: 38, w: 260, h: 110, label: 'GAN → Tiết IGF-1 (Somatomedin C)', sub: 'Nồng độ ổn định suốt ngày nhờ IGFBP-3\n→ Thước đo sàng lọc tốt nhất bệnh lý GH!', tone: 'blue' },
          { x: 90, y: 190, w: 500, h: 105, label: 'Đĩa Sụn Nối Đầu Xương (Khi chưa cốt hóa) & Mô Mềm', sub: 'Trước dậy thì: ↑ Chiều dài xương (Khổng lồ nếu dư GH)\nSau dậy thì (đóng sụn nối): Xương KHÔNG dài ra được nữa → chỉ to bề ngang (To đầu chi: hàm, bàn tay chân)!', tone: 'green' }
        ],
        links: [
          { x1: 260, y1: 92, x2: 376, y2: 92, label: 'GH kích Gan', color: '#2563eb' },
          { x1: 170, y1: 148, x2: 250, y2: 188, label: 'Trực tiếp (phân hóa)', color: '#9333ea' },
          { x1: 500, y1: 148, x2: 430, y2: 188, label: 'IGF-1 (tăng sinh)', color: '#16a34a' }
        ]
      },
      pins: [
        { n: 1, title: 'Lý do dùng IGF-1 sàng lọc To đầu chi chứ không đo 1 mẫu GH đơn lẻ', desc: 'GH tiết thành từng xung gián đoạn và bán hủy chỉ ~20 phút (lúc bình thường giữa xung có thể gần 0), còn IGF-1 gắn IGFBP-3 duy trì hằng định suốt 24h.', x: 76, y: 34 },
        { n: 2, title: 'Khổng lồ (Gigantism) vs To đầu chi (Acromegaly)', desc: 'Cùng do u tuyến yên tiết GH: xảy ra TRƯỚC đóng sụn tiếp hợp → Khổng lồ (cao > 2m); xảy ra SAU dậy thì → To đầu chi (to trán, hàm dưới hô, bàn tay bàn chân bè, đái tháo đường).', x: 50, y: 74 }
      ],
      takeaway: 'GH đạt đỉnh khi ngủ sâu sóng chậm (NREM III), gắng sức, hạ đường huyết. GH tác động tăng trưởng chiều cao chủ yếu gián tiếp qua IGF-1 ở Gan.'
    }
  ],

  // ========================================================================
  // BÀI 14: SINH LÝ TUYẾN GIÁP (Bài 28)
  // ========================================================================
  14: [
    {
      code: 'Hình 28.1',
      page: 'Bài 28 • tr.368',
      title: 'Cấu trúc Nang Giáp (Tế bào Nang T3/T4 • Chất keo Thyroglobulin • Tế bào C Calcitonin)',
      summary: 'Đơn vị chức năng tuyến giáp là các Nang giáp hình cầu: lớp tế bào biểu mô nang (tiết T3/T4) bao quanh khoang lòng chứa chất keo giàu Thyroglobulin (kho dự trữ hormon dùng đủ 2–3 tháng); xen kẽ bên ngoài có Tế bào C tiết Calcitonin.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 38, w: 260, h: 120, label: 'Tế bào Nang Giáp (Follicular Cell)', sub: 'Đáp ứng với TSH → Tổng hợp T3, T4\nHình dẹt (lúc nghỉ) ↔ Hình trụ cao (lúc tăng tiết)', tone: 'blue' },
          { x: 380, y: 38, w: 260, h: 120, label: 'Lòng Nang chứa Chất keo (Colloid)', sub: 'Chứa Thyroglobulin (TGB) đã iod hóa\nDự trữ hormon giáp đủ dùng 2–3 THÁNG!', tone: 'amber' },
          { x: 90, y: 195, w: 500, h: 95, label: 'Tế bào Cận nang (C-Cell) — Nằm giữa các nang giáp', sub: 'Tiết CALCITONIN khi Ca²⁺ máu tăng → Ức chế hủy cốt bào giúp hạ nhẹ Ca²⁺ máu\n(Hoàn toàn ĐỘC LẬP với TSH và không liên quan chuyển hóa Iod!)', tone: 'teal' }
        ],
        links: [
          { x1: 300, y1: 98, x2: 376, y2: 98, label: 'Tiết TGB & Xuất bào T3/T4', color: '#d97706' }
        ]
      },
      pins: [
        { n: 1, title: 'Tuyến duy nhất dự trữ hormon NGOẠI BÀO lượng cực lớn', desc: 'Nếu cắt bỏ nguồn Iod hoàn toàn, phải mất 2–3 tháng sau mới cạn kho T3/T4 trong chất keo nang giáp để xuất hiện triệu chứng suy giáp!', x: 76, y: 36 },
        { n: 2, title: 'Tế bào C là nguồn gốc Ung thư giáp thể tủy (MTC)', desc: 'Đo nồng độ Calcitonin máu để theo dõi ung thư giáp thể tủy (MEN 2A/2B), khác với TGB theo dõi ung thư thể nhú/nang.', x: 50, y: 74 }
      ],
      takeaway: 'Tế bào Nang chịu sự điều khiển của TSH tiết T3/T4 (dự trữ trong chất keo TGB 2–3 tháng). Tế bào C chịu sự điều khiển của Ca²⁺ máu tiết Calcitonin.'
    },
    {
      code: 'Hình 28.2',
      page: 'Bài 28 • tr.369',
      title: 'Cấu trúc Hóa học Thyroxine (T4) và Triiodothyronine (T3)',
      summary: 'Ghép 2 vòng Tyrosine mang 4 nguyên tử Iod tạo T4 (dạng tiết chủ yếu >90% từ tuyến giáp) và mang 3 nguyên tử Iod tạo T3 (hoạt tính sinh học mạnh gấp 3–4 lần T4; 80% T3 máu sinh ra từ khử iod ngoại biên T4 nhờ 5\'-deiodinase).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Thyroxine — T4 (3,5,3\',5\'-tetraiodothyronine)', subtitle: 'Chiếm ~90% lượng tiết tại tuyến giáp • Bán hủy ~7 ngày', tone: 'blue', bullets: ['Gắn 4 nguyên tử Iod (ghép đôi DIT + DIT)', 'Ái lực rất cao với TBG (~99,97% gắn protein huyết tương)', 'Vai trò chính như "Tiền hormon" dự trữ bền vững trong tuần hoàn'] },
          { title: 'Triiodothyronine — T3 (3,5,3\'-triiodothyronine)', subtitle: 'Dạng HOẠT ĐỘNG MẠNH (gấp 3–4 lần T4) • Bán hủy ~1 ngày', tone: 'red', bullets: ['Gắn 3 nguyên tử Iod (MIT + DIT hoặc khử 1 Iod ở vòng ngoài của T4 bởi 5\'-Deiodinase)', 'Ái lực gắn thụ thể nhân TR cao gấp ~10 lần T4!', 'Reverse T3 (rT3): khử Iod vòng trong → HOÀN TOÀN BẤT HOẠT (tăng trong nhịn đói, bệnh nặng)'] }
        ]
      },
      pins: [
        { n: 1, title: '5\'-Deiodinase ngoại biên & thuốc chặn chuyển T4 → T3', desc: '80% T3 lưu hành được gan/thận/mô khử 1 Iod từ T4 nhờ 5\'-Deiodinase (bị ức chế bởi PTU, Propranolol liều cao, Corticoid, Amiodarone, nhịn đói).', x: 74, y: 40 },
        { n: 2, title: 'Hội chứng Euthyroid Sick (Bệnh không do tuyến giáp)', desc: 'Khi sốc nặng, đói ăn hoặc stress phẫu thuật: 5\'-Deiodinase bị ức chế nên T3 thấp, rT3 TĂNG VỌT nhằm giảm chuyển hóa cơ thể tiết kiệm năng lượng.', x: 74, y: 70 }
      ],
      takeaway: 'Tuyến giáp tiết chủ yếu T4 (~90%), nhưng T3 mới là dạng tác động chính tại thụ thể nhân (mạnh hơn T4 ~4 lần). PTU & Corticoid chặn chuyển T4→T3 ngoại biên.'
    },
    {
      code: 'Hình 28.3',
      page: 'Bài 28 • tr.370',
      title: '6 Giai đoạn Sinh tổng hợp & Giải phóng Hormon Giáp (NIS, Pendrin, TPO, TGB)',
      summary: 'Iodua (I⁻) được bơm tích cực vào tế bào giáp gấp 30 lần máu qua đồng vận NIS, đi qua kênh Pendrin vào chất keo để TPO oxy hóa thành I2, gắn vào Tyrosine trên Thyroglobulin (MIT/DIT) → ghép cặp → nhập bào cắt phóng thích T3/T4.',
      imgSrc: 'assets/figures/fig_thyroid_synth.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Bắt Iod qua Kênh NIS (Màng đáy-bên)', desc: 'Đồng vận chuyển 2 Na⁺ : 1 I⁻ đẩy Iod nồng độ gấp 20–40 lần máu (ức chế cạnh tranh bởi Perchlorate ClO4⁻ và Thiocyanate SCN⁻); dùng đồng vị phóng xạ I-131 / I-123 dựa vào bước này.', x: 22, y: 38 },
        { n: 2, title: 'Oxy hóa I⁻ → Organification → Coupling (Nhờ TPO + H2O2)', desc: 'Bên phía chất keo: Pendrin đưa I⁻ ra, Thyroperoxidase (TPO) oxy hóa I⁻, gắn vào vòng Tyrosine tạo MIT/DIT rồi ghép cặp (DIT+DIT=T4; MIT+DIT=T3) — TẤT CẢ đều bị khóa bởi thuốc kháng giáp PTU & Methimazole!', x: 52, y: 50 },
        { n: 3, title: 'Ẩm bào chất keo & Cắt phóng thích T3, T4 (và tái sử dụng Iod)', desc: 'Giọt keo bị ẩm bào vào tế bào hợp nhất Lysosome cắt bỏ TGB để giải phóng T3, T4 vào máu; MIT & DIT dư bị Deiodinase nội bào thu hồi Iod tái dùng.', x: 76, y: 66 }
      ],
      takeaway: 'NIS bơm I⁻ vào tế bào → Pendrin đẩy ra chất keo → TPO làm 3 việc (Oxy hóa I⁻, Gắn MIT/DIT, Ghép cặp T3/T4) → Lysosome cắt phóng thích T3/T4.'
    },
    {
      code: 'Hình 28.4',
      page: 'Bài 28 • tr.371',
      title: 'Vai trò Trung tâm của Enzym TPO (Thyroperoxidase) trong Iod hóa & Ghép cặp MIT/DIT',
      summary: 'Thyroperoxidase (TPO) nằm ở mặt đỉnh hướng lòng nang giáp, dùng H2O2 (từ DUOX2) làm chất oxy hóa để xúc tác cả 3 phản ứng liên tiếp tạo nhân T4/T3 vẫn còn gắn trên khung Thyroglobulin.',
      svg: {
        kind: 'flow',
        banner: '3 Phản ứng Xúc tác bởi TPO tại Màng đỉnh Giáp Chất keo',
        nodes: [
          { title: '1. Oxy hóa Iodua (I⁻ → I⁰ / I⁺)', sub: 'Cần H2O2 do hệ NADPH-oxidase (DUOX2) cung cấp ở màng đỉnh', tone: 'amber' },
          { title: '2. Hữu cơ hóa (Organification)', sub: 'Gắn 1 Iod → MIT; gắn 2 Iod → DIT ngay trên gốc Tyrosine của TGB', tone: 'blue' },
          { title: '3. Ghép cặp (Coupling)', sub: 'DIT + DIT → T4; MIT + DIT → T3 (tỷ lệ ~10 T4 : 1 T3 trên TGB)', tone: 'purple' },
          { title: 'Đích của Thuốc Kháng giáp Thioamide', sub: 'Methimazole (MMI) & PTU ức chế TPO (nhanh) + PTU thêm ức chế 5\'-DI ngoại biên', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Ý nghĩa Kháng thể Anti-TPO (TPO-Ab)', desc: 'Trong Viêm giáp tự miễn Hashimoto, tự kháng thể chống lại TPO phá hủy tế bào nang gây suy giáp mạn tính phổ biến nhất.', x: 50, y: 50 },
        { n: 2, title: 'Vì sao dùng PTU ưu tiên trong Cơn Bão Giáp & Quý 1 Thai kỳ?', desc: 'PTU vừa khóa TPO tại tuyến giáp, vừa chặn chuyển đổi T4→T3 tại ngoại biên (hạ nhanh T3 hoạt động) và ít qua nhau thai gây quái thai hơn Methimazole ở tam cá nguyệt 1.', x: 84, y: 50 }
      ],
      takeaway: 'TPO cần H2O2 để oxy hóa I⁻, gắn tạo MIT/DIT và ghép tạo T3/T4. Cả Methimazole và PTU đều khóa TPO; riêng PTU chặn thêm chuyển T4→T3 ngoại biên.'
    },
    {
      code: 'Hình 28.5',
      page: 'Bài 28 • tr.373',
      title: 'Cơ chế Tác động của TSH lên Tế bào Nang Giáp (Thụ thể TSHR → Gs → cAMP → PKA)',
      summary: 'TSH kích thích TẤT CẢ mọi khâu từ bắt Iod (NIS), tổng hợp TGB & TPO, đến ẩm bào giải phóng T3/T4 và làm phì đại/tăng sinh tuyến giáp (gây bướu cổ nếu TSH tăng kéo dài).',
      svg: {
        kind: 'flow',
        banner: 'Tín hiệu TSH – TSHR – cAMP Toàn diện trên Tuyến Giáp',
        nodes: [
          { title: 'TSH gắn TSH-R (GPCR)', sub: 'Hoạt hóa chủ yếu Gs → cAMP → PKA (liều rất cao kích thêm IP3/Ca²⁺)', tone: 'purple' },
          { title: 'Tăng Tức thời (phút–giờ)', sub: 'Tăng ẩm bào giọt chất keo → cắt xuất bào nhanh T3, T4 vào máu', tone: 'red' },
          { title: 'Tăng Dài hạn (giờ–ngày)', sub: 'Tăng phiên mã NIS, TPO, Thyroglobulin, tăng bắt giữ Iod', tone: 'blue' },
          { title: 'Tác dụng Dinh dưỡng Tuyến (Trophic)', sub: 'Tế bào cao trụ, tăng mạch máu nuôi → Phì đại tuyến (Bướu cổ!)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế hình thành Bướu cổ đơn thuần (Thiếu Iod)', desc: 'Thiếu Iod → giảm T3/T4 → mất feedback âm → TSH tăng liên tục → kích thích tăng sinh tế bào nang phình to tạo bướu cổ!', x: 84, y: 50 },
        { n: 2, title: 'Tự kháng thể TRAb (TSI) giả danh TSH', desc: 'Trong bệnh Basedow/Graves, kháng thể TSI bám chặt vào đúng thụ thể TSHR bật cAMP liên tục bất chấp TSH đã bị ép tụt về 0.', x: 20, y: 50 }
      ],
      takeaway: 'TSH qua cAMP tăng TOÀN BỘ các bước tổng hợp, giải phóng T3/T4 VÀ gây tăng sản phì đại tuyến giáp (bướu giáp).'
    },
    {
      code: 'Hình 28.6',
      page: 'Bài 28 • tr.373',
      title: 'Trục Hạ đồi (TRH) – Tuyến yên (TSH) – Tuyến Giáp (T3, T4) & Xét nghiệm Chẩn đoán',
      summary: 'T3 nội bào tại yên trước (chuyển từ T4 tự do nhờ 5\'-deiodinase II) ức chế cực nhạy việc tiết TSH và tổng hợp thụ thể TRH — tạo quan hệ log-tuyến tính nhạy đến mức FT4 giảm nhẹ đã làm TSH tăng vọt.',
      svg: {
        kind: 'cycle',
        centerTitle: 'CÂN BẰNG TRỤC GIÁP',
        centerSub: 'TSH cực nhạy với FT4',
        centerTone: 'teal',
        steps: [
          { label: 'Hạ đồi tiết TRH (Tripeptid)', detail: 'Kích thích bởi Lạnh (trẻ sơ sinh); Ức chế bởi Somatostatin & Dopamine', tone: 'amber' },
          { label: 'Yên trước (TB Thyrotrope)', detail: 'TRH gắn Gq (IP3/Ca²⁺) tiết TSH dạng glycoprotein (α + β)', tone: 'purple' },
          { label: 'Tuyến giáp (T4 & T3)', detail: 'Giải phóng T4 (90%) & T3 (10%) gắn TBG/Albumin/TTR', tone: 'blue' },
          { label: 'Feedback Âm cực mạnh tại Yên', detail: 'T3 giảm biểu hiện TRH-R & ức chế gen tiểu đơn vị β-TSH', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Vì sao TSH là Xét nghiệm Sàng lọc Đầu tay?', desc: 'Nhờ đường feedback dạng hàm mũ, chỉ cần FT4 giảm một nửa cũng làm TSH tăng gấp 10–100 lần! Cường giáp nguyên phát: TSH↓, FT4↑. Suy giáp nguyên phát: TSH↑, FT4↓.', x: 50, y: 50 },
        { n: 2, title: 'Cường/Suy giáp Trung ương (Hiếm)', desc: 'Nếu hỏng tuyến yên: suy giáp nhưng TSH lại THẤP/bình thường thấp kèm FT4 thấp; u tiết TSH thì cả TSH & FT4 cùng CAO.', x: 76, y: 46 }
      ],
      takeaway: 'Sàng lọc bệnh tuyến giáp luôn đo TSH đầu tay: Nguyên phát (tại tuyến giáp) → TSH và FT4 biến đổi NGƯỢC CHIỀU nhau.'
    },
    {
      code: 'Hình 28.7',
      page: 'Bài 28 • tr.374',
      title: 'Cơ chế Tác động Trên Gen của T3 (Nhị hợp TR/RXR bám TRE → Na⁺-K⁺-ATPase & Ty thể)',
      summary: 'T3 vào nhân tế bào gắn vào phức hợp dị nhị hợp thụ thể Giáp – Retinoid X (TR/RXR) đang nằm sẵn trên vùng TRE của DNA, đẩy chất đồng ức chế ra để bật phiên mã hàng loạt protein chuyển hóa và sinh nhiệt.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Phiên mã của T3 qua Phức hợp TR–RXR–TRE trong Nhân Tế bào',
        nodes: [
          { title: '1. T4 → T3 (5\'-DI) & Vào Nhân (MCT8)', sub: 'T3 vào nhân với ái lực gấp 10 lần T4', tone: 'blue' },
          { title: '2. Gắn TR/RXR trên vùng TRE của DNA', sub: 'Đẩy bỏ Co-repressor (NCoR/HDAC) → Gọi Co-activator hoạt hóa gen', tone: 'purple' },
          { title: '3. Tăng Bơm Na⁺-K⁺-ATPase & Ty thể', sub: 'Tăng tiêu thụ O2, tăng BMR (chuyển hóa cơ sở) và sinh nhiệt (~30% năng lượng)', tone: 'red' },
          { title: '4. Tăng Thụ thể β1-Adrenergic (Tim) & Phát triển Não', sub: 'Giải thích mạch nhanh, đánh trống ngực ở cường giáp & đần độn nếu thiếu ở trẻ', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Cường giáp biểu hiện giống Cường Giao cảm dù Catecholamine bình thường?', desc: 'Vì T3 kích thích phiên mã làm TĂNG SỐ LƯỢNG thụ thể β1-adrenergic trên tim và tế bào mỡ → Tim trở nên cực kỳ nhạy cảm với Adrenalin/Noradrenalin bình thường (giải thích tác dụng thần kỳ của Propranolol!).', x: 84, y: 50 },
        { n: 2, title: 'Vai trò sống còn đối với Não & Xương Thai nhi/Sơ sinh', desc: 'T3 bắt buộc phải có để myelin hóa sợi trục và tạo synapse vỏ não 2 năm đầu đời → thiếu giáp bẩm sinh không tầm soát kịp gây chứng Đần độn (Cretinism) không hồi phục!', x: 40, y: 50 }
      ],
      takeaway: 'T3 gắn thụ thể nhân TR/RXR làm tăng Na⁺-K⁺-ATPase (sinh nhiệt/BMR), tăng mật độ thụ thể β1 tim, hạ Cholesterol (tăng LDL-R gan) và myelin hóa não.'
    },
    {
      code: 'Hình 28.8',
      page: 'Bài 28 • tr.375',
      title: 'Phối hợp Tác động Trên Gen (Genomic) & Ngoài Gen (PI3K, MAPK qua Integrin αvβ3) của Hormon Giáp',
      summary: 'Ngoài thụ thể nhân TR kinh điển, T4 và T3 còn gắn thụ thể màng Integrin αvβ3 kích hoạt nhanh con đường PI3K/AKT (tăng sinh mạch, eNOS giãn mạch, bơm Ca²⁺-ATPase) và MAPK/ERK.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Tác động Trên Gen (TRα / TRβ trong Nhân)', subtitle: 'Chủ yếu bởi T3 • Khởi phát chậm (giờ–ngày)', tone: 'blue', bullets: ['Gắn phức hợp TR–RXR trong nhân điều chỉnh phiên mã TRE', 'Thúc đẩy sinh tổng hợp protein, enzyme hô hấp ty thể, phát triển xương & não', 'Điều hòa chuyển hóa đường, đạm, lipid toàn thân'] },
          { title: 'Tác động Ngoài Gen (Integrin αvβ3 / TR bào tương)', subtitle: 'Nhanh (phút) • T4 có ái lực cao với αvβ3!', tone: 'red', bullets: ['Hoạt hóa PI3K → AKT → eNOS tạo NO giãn mạch ngoại biên (làm giảm kháng lực mạch SVR ở cường giáp!)', 'Hoạt hóa MAPK → tăng sinh mạch & điều biến trao đổi Na⁺/H⁺ (NHE1), Ca²⁺-ATPase lưới SR (tim co nhanh/giãn nhanh)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao Cường giáp làm TĂNG Huyết áp Tâm thu nhưng GIẢM Tâm trương (Hiệu áp rộng)?', desc: 'Tác động trên gen tăng thụ thể β1 (tăng HR & SV → tăng SBP), trong khi sinh nhiệt + tác động ngoài gen sinh NO làm GIÃN MẠCH ngoại biên tụt SVR (giảm DBP)!', x: 74, y: 40 },
        { n: 2, title: 'Thụ thể Integrin αvβ3 màng ngoài', desc: 'Nhận diện mạnh T4 và kích hoạt song song các kinase nội bào mà không cần vào nhân.', x: 74, y: 70 }
      ],
      takeaway: 'Ngoài gen (chủ yếu qua Integrin αvβ3 → PI3K/MAPK) góp phần tăng giãn mạch giảm SVR, tăng hoạt NHE1 và Ca²⁺-ATPase trong vòng vài phút.'
    },
    {
      code: 'Hình 28.9',
      page: 'Bài 28 • tr.377',
      title: 'Hiệu ứng Jod–Basedow (Quá tải Iod gây Cường giáp trên Tuyến Giáp Bệnh lý)',
      summary: 'Khi bệnh nhân có sẵn bướu nhân tự chủ hoặc Graves tiềm ẩn (vượt ngoài kiểm soát của TSH) bất ngờ nhận lượng Iod lớn (thuốc cản quang CT, Amiodarone, tảo biển) → nhân tự chủ "vồ" lấy Iod sản xuất ồ ạt T3/T4 gây cường giáp.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Cường giáp do Dư Iod (Jod-Basedow Phenomenon)',
        nodes: [
          { title: '1. Nền Tuyến Giáp Tự chủ (Nhân độc / Thiếu Iod cũ)', sub: 'Các tế bào giáp đã hoạt động tự động không chịu kiểm soát TSH', tone: 'amber' },
          { title: '2. Tiếp nhận Liều Lớn Iod Đột ngột', sub: 'Thuốc cản quang iod mạch, Amiodarone (chứa 37% Iod!), Lugol', tone: 'blue' },
          { title: '3. Mất khả năng phanh Wolff-Chaikoff', sub: 'Nhân tự chủ liên tục tổng hợp tràn lan T3, T4 từ nguồn Iod mới', tone: 'purple' },
          { title: '4. Bùng phát Cường Giáp (Jod-Basedow)', sub: 'Nhịp nhanh, sụt cân, rung nhĩ, thậm chí cơn bão giáp sau chụp CT có cản quang!', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'So sánh nhanh Jod-Basedow vs Wolff-Chaikoff', desc: 'Cùng một nguyên nhân "NHẬP NHIỀU IOD ĐỘT NGỘT": ở tuyến giáp bệnh tự chủ gây CƯỜNG GIÁP (Jod-Basedow); ở tuyến giáp bình thường hoặc Hashimoto gây TẠM NGỪNG SẢN XUẤT / SUY GIÁP (Wolff-Chaikoff)!', x: 50, y: 50 },
        { n: 2, title: 'Thuốc Amiodarone gây cả hai thể!', desc: 'Do giàu Iod, Amiodarone có thể gây suy giáp do Wolff-Chaikoff kéo dài (típ 1/Hashimoto) hoặc cường giáp Jod-Basedow (AIT típ 1) / phá hủy nang (AIT típ 2).', x: 40, y: 50 }
      ],
      takeaway: 'Hiệu ứng Jod-Basedow: Nạp dư Iod cấp trên nền bướu nhân tự chủ / thiếu Iod → Gây CƯỜNG GIÁP (do mất cơ chế tự phanh).'
    },
    {
      code: 'Hình 28.10',
      page: 'Bài 28 • tr.378',
      title: 'Hiệu ứng Wolff–Chaikoff (Tự Phanh Giảm tổng hợp Giáp khi Tăng Iod Cấp & Hiện tượng Trốn thoát)',
      summary: 'Khi nhận một lượng Iod lớn bất ngờ (> 1–2 mg/ngày), tuyến giáp bình thường lập tức TẠM TẮT hữu cơ hóa Iod (TPO) và tổng hợp T3/T4 trong ~1–2 tuần để tránh ngộ độc hormon giáp; sau ~10 ngày, giảm bơm NIS đưa tế bào "trốn thoát" trở lại bình thường.',
      svg: {
        kind: 'curve',
        xLabel: 'Số ngày sau khi Uống Iod liều cao liên tục (Lugol / Thuốc cản quang)',
        yLabel: 'Tổng hợp Hormon Giáp & Hoạt tính NIS/TPO',
        xTicks: [
          { x: 15, label: 'Ngày 0' },
          { x: 35, label: 'Ngày 1–3 (Phanh gấp)' },
          { x: 75, label: 'Ngày 10–14 (Trốn thoát)' }
        ],
        yTicks: [
          { y: 20, label: 'Bị ức chế mạnh' },
          { y: 80, label: 'Bình thường' }
        ],
        zones: [
          { x1: 22, x2: 60, tone: 'amber', label: 'Hiệu ứng Wolff–Chaikoff (Ức chế TPO/NIS)' },
          { x1: 62, x2: 92, tone: 'green', label: 'Hiện tượng Trốn thoát (Escape)' }
        ],
        curves: [
          { name: 'Tổng hợp T3/T4 (tụt sâu rồi trốn thoát)', color: '#2563eb', pts: [[12, 78], [26, 20], [50, 22], [72, 68], [90, 78]] },
          { name: 'Bơm NIS (giảm xuống giúp giảm I⁻ nội bào)', color: '#dc2626', dashed: true, pts: [[12, 78], [32, 46], [62, 24], [90, 26]] }
        ]
      },
      pins: [
        { n: 1, title: 'Ứng dụng Chuẩn bị Mổ Basedow & Cơn Bão Giáp (Dung dịch Lugol)', desc: 'Uống Lugol ngay trước phẫu thuật giáp ~7–10 ngày lợi dụng hiệu ứng Wolff-Chaikoff để chặn tức thì sự phóng thích T4/T3 và làm giảm tăng sinh mạch máu tuyến giáp trước khi "trốn thoát" xảy ra!', x: 38, y: 68 },
        { n: 2, title: 'Nguyên nhân Thất bại Trốn thoát (Suy giáp do Iod)', desc: 'Thai nhi (<36 tuần chưa hoàn thiện cơ chế giảm NIS) hoặc người viêm giáp Hashimoto không tự giảm được NIS nên kẹt mãi trong pha Wolff-Chaikoff → SUY GIÁP nặng!', x: 78, y: 28 }
      ],
      takeaway: 'Wolff–Chaikoff: Tải Iod lớn ức chế tức thì TPO & giải phóng T3/T4 trong ~10 ngày (ứng dụng dùng Lugol trước mổ/bão giáp); sau đó giảm NIS giúp tuyến giáp bình thường "trốn thoát".'
    },
    {
      code: 'Hình 28.11',
      page: 'Bài 28 • tr.380',
      title: 'Cơ chế Tự miễn Bệnh Graves / Basedow (Kháng thể TSI Kích thích Thụ thể TSH-R)',
      summary: 'Bệnh Graves là nguyên nhân cường giáp phổ biến nhất (~80%): Lympho B sinh tự kháng thể IgG (TSI / TRAb) bám giả làm TSH kích thích liên tục thụ thể TSHR gây bướu lan tỏa + cường giáp + lồi mắt/phù niêm trước xương chày.',
      svg: {
        kind: 'flow',
        banner: 'Bệnh sinh Bệnh Graves (Basedow) — Vượt khỏi Phanh Feedback Âm',
        nodes: [
          { title: '1. Rối loạn Tự miễn Lympho T/B', sub: 'Sản xuất tự kháng thể TSI (IgG kích thích thụ thể TSHR)', tone: 'purple' },
          { title: '2. TSI gắn chặt Thụ thể TSH-R (Giáp)', sub: 'Hoạt hóa không ngừng Gs → cAMP → tăng tổng hợp & tiết ồ ạt T3, T4 + Phì đại lan tỏa', tone: 'red' },
          { title: '3. FT4/FT3 tăng vọt ép TSH Tuyến yên về 0', sub: 'Feedback âm tắt sạch TSH, nhưng TSI không bị T3/T4 ức chế nên vẫn đánh tiếp!', tone: 'amber' },
          { title: '4. Kích thích chéo Nguyên bào sợi Hốc mắt', sub: 'TRAb gắn TSHR/IGF-1R ở mô sau nhãn cầu tiết GAGs kéo nước → LỒI MẮT đặc trưng Graves!', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Tam chứng kinh điển Graves (Basedow)', desc: 'Nhiễm độc giáp (nhịp nhanh, run tay, sụt cân, nóng ẩm) + Bướu giáp lan tỏa có âm thổi mạch + Bệnh mắt Graves (lồi mắt) / Phù niêm trước xương chày.', x: 78, y: 50 },
        { n: 2, title: 'Xét nghiệm TRAb / TSI dương tính', desc: 'Khẳng định chẩn đoán Graves và theo dõi nguy cơ lọt IgG qua nhau thai gây cường giáp thoáng qua ở trẻ sơ sinh!', x: 20, y: 50 }
      ],
      takeaway: 'Graves: Kháng thể TSI (TRAb) kích thích TSH-R bất chấp TSH bị ức chế về <0,01 mIU/L → Bướu lan tỏa + Cường giáp + Lồi mắt (GAGs sau nhãn cầu).'
    }
  ],

  // ========================================================================
  // BÀI 15: TUYẾN TỤY NỘI TIẾT & ĐIỀU HÒA ĐƯỜNG HUYẾT (Bài 30)
  // ========================================================================
  15: [
    {
      code: 'Hình 30.1',
      page: 'Bài 30 • tr.399',
      title: 'Cấu trúc Mô học Tụy Ngoại tiết & Tiểu đảo Nội tiết Langerhans',
      summary: 'Tiểu đảo Langerhans chỉ chiếm ~1–2% khối lượng tụy (~1–2 triệu đảo), được cấp máu cực kỳ phong phú và đổ trực tiếp vào Tĩnh mạch Cửa tới Gan (cơ quan nhận 50% lượng Insulin đầu tiên).',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 260, h: 115, label: 'Nang Tụy Ngoại tiết (~98%)', sub: 'Ống tiết dịch giàu Amylase, Lipase,\nProtease & HCO3⁻ vào tá tràng', tone: 'amber' },
          { x: 380, y: 40, w: 260, h: 115, label: 'Tiểu đảo Langerhans (~1–2%)', sub: 'Giàu mao mạch có lỗ thủng\nTiết trực tiếp Insulin/Glucagon vào Máu', tone: 'red' },
          { x: 100, y: 195, w: 480, h: 95, label: 'Máu Tĩnh mạch Tụy → Tĩnh mạch Cửa → Gan (First-Pass Effect)', sub: 'Gan tiếp xúc nồng độ Insulin & Glucagon cao gấp 2–3 lần tuần hoàn ngoại biên và thanh thải ~50% Insulin ngay lượt đi đầu tiên!', tone: 'blue' }
        ],
        links: [
          { x1: 510, y1: 155, x2: 430, y2: 192, label: 'Nội tiết → TM Cửa', color: '#dc2626' }
        ]
      },
      pins: [
        { n: 1, title: 'Máu đảo tụy chảy theo thứ tự ưu tiên từ β → α → δ', desc: 'Insulin từ tế bào β trung tâm chảy qua tế bào α rìa giúp ức chế trực tiếp việc tiết Glucagon khi đường huyết đang cao!', x: 76, y: 34 },
        { n: 2, title: 'Gan là điểm đến đầu tiên', desc: 'Khoảng 50% Insulin nội sinh được gan sử dụng và giáng hóa ngay qua lượt đầu (First-pass), còn Peptide C không bị gan hủy nên đo được tiết tụy thật.', x: 50, y: 74 }
      ],
      takeaway: 'Đảo Langerhans chiếm 1–2% tụy nhưng giàu mao mạch đổ thẳng vào Tĩnh mạch Cửa tới Gan; Insulin chảy từ lõi (β) ra rìa (α) ức chế Glucagon.'
    },
    {
      code: 'Hình 30.2',
      page: 'Bài 30 • tr.401',
      title: 'Phân bố Tế bào α (Glucagon), β (Insulin), δ (Somatostatin) trong Đảo tụy',
      summary: 'Ở người (linh trưởng), các tế bào α (~20–30%), β (~60–65%), δ (~5–10%) phân bố đan xen rải khắp đảo tụy gần mao mạch, tạo mạng lưới điều hòa cận tiết (Paracrine) liên tục.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Tế bào β (~60–65%)', subtitle: 'Tiết INSULIN & Amylin', tone: 'blue', bullets: ['Chiếm đa số, giàu hạt tiết nhân kẽm đặc trưng', 'Đáp ứng Tăng Đường huyết → Hạ đường huyết & Đồng hóa'] },
          { title: 'Tế bào α (~20–30%)', subtitle: 'Tiết GLUCAGON', tone: 'red', bullets: ['Bị Insulin (β) và Somatostatin (δ) ức chế trực tiếp tại chỗ', 'Đáp ứng Hạ đường huyết & Acid amin → Tăng đường huyết'] },
          { title: 'Tế bào δ (~5–10%) & PP (<5%)', subtitle: 'Somatostatin & Polypeptide tụy', tone: 'purple', bullets: ['Somatostatin (δ): PHANH ỨC CHẾ cả Insulin (β), Glucagon (α) và hấp thu ruột', 'Tế bào F (PP): tiết Pancreatic Polypeptide ức chế tụy ngoại tiết & túi mật'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tương tác Cận tiết (Paracrine) 3 chiều', desc: 'Insulin (−) α; Glucagon (+) β & δ; Somatostatin (−) cả α và β. Khi tế bào β chết sạch (ĐTĐ típ 1), tế bào α mất phanh từ Insulin nên càng tiết thừa Glucagon!', x: 50, y: 40 },
        { n: 2, title: 'Amylin đồng tiết với Insulin từ TB β', desc: 'Giúp làm chậm thoát dạ dày, tạo cảm giác no và giảm Glucagon sau ăn (thuốc Pramlintide mô phỏng Amylin).', x: 20, y: 66 }
      ],
      takeaway: 'Tỷ lệ đảo tụy: β 60–65% (Insulin + Amylin), α 25–30% (Glucagon), δ 5–10% (Somatostatin phanh cả hai).'
    },
    {
      code: 'Hình 30.3',
      page: 'Bài 30 • tr.402',
      title: 'Cấu trúc Phân tử Insulin Trưởng thành (51 Acid amin: Chuỗi A 21 aa + Chuỗi B 30 aa)',
      summary: 'Insulin là một peptide nhỏ gồm chuỗi A (21 acid amin) và chuỗi B (30 acid amin) nối chặt bằng 2 cầu disulfide liên chuỗi + 1 cầu nội chuỗi A.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 60, y: 44, w: 560, h: 85, label: 'Chuỗi A — 21 Acid amin (có 1 cầu S–S nội chuỗi ở A6–A11)', sub: 'Gắn chặt với Chuỗi B qua 2 cầu disulfide bền vững (A7–B7 và A20–B19)', tone: 'blue' },
          { x: 60, y: 175, w: 560, h: 85, label: 'Chuỗi B — 30 Acid amin (Tạo Dimer/Hexamer với ion Zn²⁺ trong hạt tiết)', sub: 'Khối Hexamer gắn Zn²⁺ giúp bảo quản ổn định trong tế bào β; khi vào máu pha loãng thành Monomer mới hoạt động!', tone: 'red' }
        ],
        links: [
          { x1: 210, y1: 129, x2: 210, y2: 173, label: 'S—S (A7–B7)', color: '#d97706' },
          { x1: 470, y1: 129, x2: 470, y2: 173, label: 'S—S (A20–B19)', color: '#d97706' }
        ]
      },
      pins: [
        { n: 1, title: 'Tổng 51 aa & 3 cầu Disulfide', desc: 'Cắt bất kỳ cầu disulfide nào cũng làm Insulin mất hoàn toàn hoạt tính sinh học (nên KHÔNG uống được vì men tiêu hóa & acid dạ dày cắt nát!).', x: 50, y: 50 },
        { n: 2, title: 'Ứng dụng công nghệ Insulin tác dụng siêu nhanh', desc: 'Thay đổi vài acid amin đuôi chuỗi B (Lispro, Aspart, Glulisine) để Insulin không kết chụm thành Hexamer mà tan ngay thành Monomer ngấm vào máu.', x: 50, y: 74 }
      ],
      takeaway: 'Insulin = 51 aa (Chuỗi A 21 + Chuỗi B 30), có 3 cầu S–S (2 liên chuỗi, 1 nội chuỗi A). Bị tiêu hủy bởi men tiêu hóa nên phải tiêm.'
    },
    {
      code: 'Hình 30.4',
      page: 'Bài 30 • tr.403',
      title: 'Quá trình Chuyển hóa Preproinsulin → Proinsulin → Insulin + Peptide C (Tỷ lệ 1:1)',
      summary: 'Tại bộ Golgi và túi tiết tế bào β, đoạn Peptide C nối giữa chuỗi A và B bị enzym cắt ra: Insulin và Peptide C được xuất bào ĐỒNG MOL (1:1). Peptide C không bị gan phá hủy và KHÔNG có trong bút tiêm Insulin ngoại sinh!',
      svg: {
        kind: 'flow',
        banner: 'Sinh tổng hợp & Giá trị Lâm sàng của Peptide C (Connecting Peptide)',
        nodes: [
          { title: '1. Preproinsulin (Lưới ER hạt)', sub: 'Đoạn Tín hiệu (Signal) + B + Peptide C + A → Cắt đoạn Tín hiệu thành Proinsulin', tone: 'slate' },
          { title: '2. Đóng gói & Gấp 3 cầu S–S (Proinsulin)', sub: 'Cuộn khớp chuỗi A và B nhờ cầu nối tạm của Peptide C', tone: 'amber' },
          { title: '3. Cắt bởi PC1/3 & PC2 trong hạt tiết', sub: 'Tạo đồng phân Insulin (51 aa) + PEPTIDE C (31 aa) tỷ lệ đúng 1 : 1', tone: 'blue' },
          { title: '4. Ứng dụng Chẩn đoán bằng Peptide C', sub: 'Phân biệt Hạ đường huyết do U tụy (Insulin ↑ + C ↑) vs Tự tiêm lén Insulin (Insulin ↑ + C ↓)!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Cặp xét nghiệm vàng: Insulin vs C-Peptide', desc: 'U tiết Insulin (Insulinoma) & dùng Sulfonylurea: cả Insulin lẫn C-peptide ĐỀU CAO. Bệnh nhân tiêm lén Insulin ngoại sinh: Insulin RẤT CAO nhưng C-peptide RẤT THẤP (bị ức chế). ĐTĐ típ 1 cạn tế bào β: C-peptide về gần 0.', x: 82, y: 50 },
        { n: 2, title: 'Thời gian bán hủy dài hơn Insulin', desc: 'Insulin bán hủy 5–6 phút (bị gan lọc 50%), C-peptide bán hủy ~30 phút (thải qua thận) → đánh giá dự trữ tụy nội sinh chuẩn xác hơn nhiều!', x: 58, y: 50 }
      ],
      takeaway: 'Cứ 1 Insulin nội sinh tiết ra kèm 1 Peptide C (1:1). Đo C-Peptide phân biệt tiết Insulin nội sinh (ĐTĐ típ 2/Insulinoma) với tiêm Insulin ngoại sinh.'
    },
    {
      code: 'Hình 30.5',
      page: 'Bài 30 • tr.404',
      title: 'Cấu trúc Thụ thể Insulin (Tetramer α2β2 Có Hoạt tính Tyrosine Kinase Nội tại)',
      summary: 'Thụ thể Insulin là một protein dị tứ phân α2β2 nối bằng cầu disulfide: 2 tiểu đơn vị α nằm hẳn ngoài màng để gắn Insulin, còn 2 tiểu đơn vị β xuyên màng mang vùng Tyrosine Kinase bên trong bào tương.',
      svg: {
        kind: 'membrane',
        topLabel: 'Ngoại bào: 1 phân tử Insulin gắn 2 tiểu đơn vị α',
        bottomLabel: 'Nội bào: Đuôi β tự Phosphoryl hóa Tyrosine → Hoạt hóa IRS-1..4',
        memLabel: 'Thụ thể Insulin (Receptor Tyrosine Kinase α2β2)',
        channels: [
          { label: 'Tiểu đơn vị α (Ngoại bào)', sub: 'Bình thường "ghìm" β lại; gặp Insulin liền thả!', dir: 'down', tone: 'blue', top: 'Điểm gắn đặc hiệu Insulin', bottom: 'Đột biến gây Kháng Insulin nặng' },
          { label: 'Tiểu đơn vị β (Xuyên màng)', sub: 'Tự phosphoryl hóa gốc Tyrosine (Autophosphorylation)', dir: 'down', tone: 'red', top: 'Tyrosine Kinase nội tại', bottom: 'Kích hoạt chuỗi IRS & Shc' },
          { label: 'Phát động 2 nhánh tín hiệu', sub: 'PI3K/Akt (Chuyển hóa, GLUT4) & Ras/MAPK (Tăng trưởng)', dir: 'down', tone: 'green', top: 'Tăng thu nhận Glucose', bottom: 'Đồng hóa Đạm – Mỡ – Đường' }
        ]
      },
      pins: [
        { n: 1, title: 'Sự tự phosphoryl hóa chéo (Trans-autophosphorylation)', desc: 'Khi Insulin gắn vào α, hai đuôi β ép sát và tự gắn gốc phosphate lên gốc Tyrosine của nhau, mở khóa hoạt động cho protein nối IRS-1.', x: 50, y: 50 },
        { n: 2, title: 'Cơ chế Kháng Insulin trong ĐTĐ típ 2 (Béo phì)', desc: 'Acid béo tự do (FFA) & TNF-α kích hoạt phosphoryl hóa gốc SERINE (thay vì Tyrosine) trên IRS-1 → chặn tín hiệu PI3K khiến GLUT4 không ra màng được!', x: 76, y: 50 }
      ],
      takeaway: 'Thụ thể Insulin là tetramer α2β2 gắn sẵn (α ngoài gắn Insulin; β xuyên màng có Tyrosine Kinase hoạt hóa IRS-1).'
    },
    {
      code: 'Hình 30.6',
      page: 'Bài 30 • tr.404',
      title: 'So sánh Thụ thể Insulin, Thụ thể IGF-I và Thụ thể IGF-II',
      summary: 'Do Insulin và IGF-I tương đồng cấu trúc ~50%, hai thụ thể α2β2 của chúng tương đồng rất cao nên liều cực cao Insulin (hoặc IGF-I trong khối u) có thể kích thích chéo nhau; riêng thụ thể IGF-II là chuỗi đơn hoàn toàn khác.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Thụ thể Insulin (IR: α2β2)', subtitle: 'Ưu tiên Chuyển hóa (Glucose/Lipid/Protein)', tone: 'blue', bullets: ['Ái lực cực cao với Insulin (10⁻¹⁰ M)', 'Ái lực với IGF-I / IGF-II thấp hơn ~100 lần', 'Có thể tạo thụ thể lai (Hybrid IR/IGF-1R) trên tế bào kháng Insulin'] },
          { title: 'Thụ thể IGF-I (IGF-1R: α2β2)', subtitle: 'Ưu tiên Tăng trưởng & Phân bào (Giống hệt cấu trúc IR)', tone: 'green', bullets: ['Ái lực cực cao với IGF-I (tác nhân chính truyền tín hiệu GH)', 'Insulin liều cao có thể gắn chéo gây tác dụng tăng trưởng (bảo tồn ở Hội chứng buồng trứng đa nang / Kháng insulin nặng gây gai đen Acanthosis nigricans!)'] },
          { title: 'Thụ thể IGF-II (Mannose-6-phosphate R)', subtitle: 'Chuỗi đơn, KHÔNG có Tyrosine Kinase!', tone: 'amber', bullets: ['Gắn IGF-II để đưa vào tiêu thể giáng hóa ("bãi rác" dọn dẹp thừa IGF-II)', 'Vận chuyển enzyme mang gốc Mannose-6-phosphate tới Lysosome'] }
        ]
      },
      pins: [
        { n: 1, title: 'Giải thích Dấu hiệu Gai đen (Acanthosis nigricans) ở Kháng Insulin', desc: 'Insulin máu tăng bù trừ quá cao kích thích chéo lên thụ thể IGF-1R ở tế bào sừng và nguyên bào sợi vùng nếp cổ/nách gây dày sừng tăng sắc tố!', x: 50, y: 68 },
        { n: 2, title: 'U mô đệm khổng lồ tiết IGF-II gây Hạ đường huyết', desc: 'Lượng lớn "Big IGF-II" kích thích chéo lên thụ thể Insulin gây tụt đường huyết nặng dù Insulin máu rất thấp.', x: 20, y: 68 }
      ],
      takeaway: 'Thụ thể Insulin & IGF-1R đều có cấu trúc α2β2 Tyrosine Kinase và phản ứng chéo ở nồng độ cao; thụ thể IGF-II là chuỗi đơn làm nhiệm vụ thu dọn.'
    },
    {
      code: 'Hình 30.7',
      page: 'Bài 30 • tr.406',
      title: 'Cấu trúc Kênh Vận chuyển Glucose GLUT (12 Vòng Xoắn Xuyên Màng)',
      summary: 'Họ protein GLUT vận chuyển Glucose bằng khuếch tán được tăng cường (thuận gradient nồng độ, KHÔNG tốn ATP, KHÔNG cần Na⁺), gồm 12 đoạn α-helix xuyên màng tạo lỗ ưa nước ở trung tâm đổi hình dạng kiểu bập bênh.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'GLUT1 & GLUT3 (ĐỘC LẬP Insulin)', subtitle: 'Km thấp (~1–5 mM) → Luôn bão hòa & hấp thu ổn định', tone: 'blue', bullets: ['GLUT1: Hồng cầu, hàng rào Máu – Não (vận chuyển nền mọi mô)', 'GLUT3: Tế bào Thần kinh (Não), Nhau thai (Km rất thấp ~1,5 mM — giữ não nhận đủ đường ngay cả khi hạ đường huyết nhẹ!)'] },
          { title: 'GLUT2 (Gan, TB β Tụy, Ruột, Thận) — Km cao (~15–20 mM)', subtitle: 'Cảm biến đường huyết hai chiều (ĐỘC LẬP Insulin)', tone: 'amber', bullets: ['Km cao nên tốc độ Glucose đi vào tỷ lệ THUẬN với mức đường huyết sau ăn!', 'Giúp tế bào β tụy cảm nhận chính xác khi nào đường máu tăng để tiết Insulin, và cho Gan đẩy glucose ra lúc đói'] },
          { title: 'GLUT4 (Cơ xương, Cơ tim, Mô mỡ) — PHỤ THUỘC Insulin', subtitle: 'Bình thường giấu trong nội bào; Gặp Insulin mới ra màng!', tone: 'red', bullets: ['Chủ lực thu nhận Glucose sau bữa ăn và khi Vận động co cơ (AMPK cũng đưa GLUT4 ra màng ĐỘC LẬP Insulin!)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Câu hỏi tủ Kinh điển: Mô nào phụ thuộc & KHÔNG phụ thuộc Insulin?', desc: 'Não (GLUT1/3), Hồng cầu (GLUT1), Gan & TB β tụy (GLUT2), Đáy mắt & Thận KHÔNG cần Insulin để lấy glucose vào tế bào. CHỈ Cơ xương, Cơ tim và Mô mỡ (GLUT4) phụ thuộc trực tiếp Insulin!', x: 50, y: 36 },
        { n: 2, title: '12 lần xuyên màng tạo cơ chế Flip-flop', desc: 'Gắn Glucose ở mặt ngoài → đổi cấu hình (kín ngoài, mở trong) → nhả Glucose vào bào tương.', x: 20, y: 66 }
      ],
      takeaway: 'Chỉ GLUT4 (Cơ xương, Cơ tim, Mô mỡ) phụ thuộc Insulin! Não (GLUT3/1), Hồng cầu (GLUT1), Gan & TB β (GLUT2) lấy glucose KHÔNG cần Insulin.'
    },
    {
      code: 'Hình 30.8',
      page: 'Bài 30 • tr.406',
      title: 'Phân biệt Kênh Đồng vận chuyển Na⁺–Glucose (SGLT) & Khuếch tán Tăng cường (GLUT)',
      summary: 'Ruột non & Ống lượn gần thận phải kéo sạch từng phân tử Glucose ngược gradient nồng độ vào máu (dù lòng ống thấp hơn máu) nên phải dùng SGLT (đồng vận Na⁺); còn các mô nhận đường từ máu chỉ cần GLUT.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'SGLT1 / SGLT2 (Chủ động Thứ phát)', subtitle: 'CHỈ có ở Ruột non & Ống lượn gần Thận', tone: 'purple', bullets: ['Kéo Glucose NGƯỢC gradient nồng độ dựa vào thế năng Na⁺ (do bơm Na⁺-K⁺-ATPase tạo ra)', 'SGLT2 (thận, 1 Na⁺:1 Glu, 90%); SGLT1 (ruột & S3 thận, 2 Na⁺:1 Glu)', 'Đảm bảo đường trong nước tiểu = 0 và hấp thu hết đường từ bữa ăn'] },
          { title: 'Họ GLUT1–GLUT5 (Thụ động — Thuận gradient)', subtitle: 'Màng đáy-bên Ruột/Thận (GLUT2) & Tất cả các mô khác', tone: 'green', bullets: ['Khuếch tán được tăng cường — KHÔNG tốn ATP, KHÔNG cần Na⁺', 'GLUT5 đặc hiệu chuyên chở FRUCTOSE ở bờ bàn chải ruột non'] }
        ]
      },
      pins: [
        { n: 1, title: 'Chuyển giao nhịp nhàng SGLT → GLUT2', desc: 'Ở cả Ruột non lẫn Ống lượn gần thận: Glucose vào màng ĐỈNH qua SGLT (bơm ngược dốc), rồi ra màng ĐÁY-BÊN vào máu qua GLUT2 (xuôi dốc).', x: 26, y: 40 },
        { n: 2, title: 'Mục tiêu thuốc trị ĐTĐ típ 2 (Ức chế SGLT2)', desc: 'Khoá SGLT2 tại ống gần thải ~50–70g glucose/ngày ra nước tiểu giúp hạ đường huyết và hạ cân nhẹ mà không gây hạ đường huyết quá mức.', x: 26, y: 68 }
      ],
      takeaway: 'SGLT (tốn ATP gián tiếp qua Na⁺-K⁺-ATPase) ở mặt đỉnh ruột/thận kéo ngược dốc; GLUT (không tốn ATP) khuếch tán xuôi dốc.'
    },
    {
      code: 'Hình 30.9',
      page: 'Bài 30 • tr.407',
      title: 'Hai Nhánh Tín hiệu Nội bào của Insulin: IRS-1 → PI3K/Akt (Chuyển hóa) vs Ras/MAPK (Tăng trưởng)',
      summary: 'Sau khi thụ thể β tự phosphoryl hóa Tyrosine, phân nhánh thành con đường PI3K/PKB (Akt) phụ trách thu nhận Glucose, tổng hợp Glycogen & ức chế tiêu mỡ; và con đường MAPK thúc đẩy phân chia, biệt hóa tế bào.',
      svg: {
        kind: 'flow',
        banner: 'Phân nhánh Tín hiệu Thụ thể Insulin → Chuyển hóa & Tăng trưởng',
        nodes: [
          { title: 'Insulin → Thụ thể α2β2 (Tyrosine Kinase)', sub: 'Tự phosphoryl hóa đuôi β', tone: 'amber' },
          { title: 'Nhánh Chuyển hóa: IRS-1 → PI3K → PIP3', sub: 'Hoạt hóa PDK1 → Protein Kinase B (Akt)', tone: 'blue' },
          { title: 'Tác dụng của Akt (Chính!)', sub: '• Đẩy GLUT4 ra màng\n• Bất hoạt GSK-3 (↑ Glycogen)\n• Kích PDE3B (↓ cAMP → Ngưng phân giải mỡ)\n• Ức chế FOXO1 (↓ Tân tạo đường gan)', tone: 'green' },
          { title: 'Nhánh Tăng trưởng: Grb2 → SOS → Ras → MAPK', sub: 'Điều hòa phiên mã gen, tăng tổng hợp protein & tăng sinh tế bào', tone: 'purple' }
        ]
      },
      pins: [
        { n: 1, title: 'Điểm hội tụ tại Akt (PKB)', desc: 'Akt điều phối đồng bộ 3 việc giúp hạ đường huyết: tăng lấy đường vào cơ/mỡ (GLUT4), tích thành glycogen (ức chế GSK-3), và khóa chặt Gan không sản xuất đường mới (ức chế FOXO1).', x: 58, y: 50 },
        { n: 2, title: 'Kháng Insulin CHỌN LỌC trên nhánh PI3K', desc: 'Ở người ĐTĐ típ 2, nhánh chuyển hóa PI3K/Akt bị kháng nhưng nhánh MAPK (tăng sinh cơ trơn thành mạch, tăng tiết Androgen buồng trứng) VẪN NHẠY → góp phần gây xơ vữa mạch & PCOS!', x: 84, y: 50 }
      ],
      takeaway: 'PI3K → Akt thực hiện toàn bộ hiệu ứng chuyển hóa của Insulin (GLUT4, Glycogen, khóa tiêu mỡ & tân tạo đường); MAPK phụ trách tăng trưởng.'
    },
    {
      code: 'Hình 30.10',
      page: 'Bài 30 • tr.408',
      title: 'Cơ chế Hòa màng Túi chứa GLUT4 tại Tế bào Cơ xương & Mô mỡ',
      summary: 'Khi chưa có Insulin, >90% kênh GLUT4 bị giam trong các túi bào tương nội bào (GSV); khi có Insulin (hoặc khi co cơ vận động), AS160 bị ức chế giúp Rab-GTP đẩy túi GLUT4 hòa màng đỉnh làm dòng Glucose vào tế bào tăng vọt 10–30 lần!',
      svg: {
        kind: 'flow',
        banner: 'Chu trình Di chuyển Túi chứa GLUT4 (Exocytosis ↔ Endocytosis)',
        nodes: [
          { title: '1. Lúc đói (Không có Insulin)', sub: 'Túi chứa GLUT4 nằm im trong bào tương; AS160 giữ protein Rab bất hoạt', tone: 'slate' },
          { title: '2. Có Insulin (PI3K → Akt) hoặc Tập thể dục (AMPK)', sub: 'Phosphoryl hóa & ức chế phanh AS160 → Bật Rab-GTP!', tone: 'amber' },
          { title: '3. Hòa màng túi GLUT4 lên Màng tế bào', sub: 'Phức hợp SNARE kéo túi cắm hàng triệu kênh GLUT4 lên bề mặt màng', tone: 'blue' },
          { title: '4. Tăng Hấp thu Glucose ×10–30 lần', sub: 'Khi Insulin giảm xuống, GLUT4 lại được nhập bào quay về kho dự trữ', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Lý do Vận động thể lực làm GIẢM nhu cầu Insulin ở người ĐTĐ!', desc: 'Co cơ tiêu thụ ATP tạo AMP → hoạt hóa enzyme AMPK → chính AMPK phosphoryl hóa ức chế AS160 đẩy GLUT4 ra màng HOÀN TOÀN ĐỘC LẬP với Insulin!', x: 40, y: 50 },
        { n: 2, title: 'Tác dụng đảo ngược nhanh', desc: 'Quá trình hòa màng GLUT4 diễn ra chỉ trong vài phút sau bữa ăn hoặc tiêm Insulin tác dụng nhanh.', x: 82, y: 50 }
      ],
      takeaway: 'Cả Insulin (Akt) VÀ Co cơ vận động (AMPK) đều đẩy được túi GLUT4 ra màng tế bào cơ — cơ sở sinh lý của tập luyện trong điều trị ĐTĐ.'
    },
    {
      code: 'Hình 30.11',
      page: 'Bài 30 • tr.408',
      title: 'Insulin Mở Kênh GLUT4 Thu nhận Glucose vào Tế bào Cơ & Mô mỡ',
      summary: 'Hình minh họa giải phẫu tế bào quá trình Insulin gắn thụ thể màng kích hoạt chuỗi tín hiệu kéo túi GLUT4 lên màng plasma giúp hạ nhanh nồng độ Glucose máu sau bữa ăn.',
      imgSrc: 'assets/figures/fig_glut4.jpg',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Insulin gắn Thụ thể (Lớp ngoài màng)', desc: 'Không đi vào tế bào để tiêu thụ đường mà chỉ gõ cửa thụ thể Tyrosine Kinase ở bên ngoài.', x: 26, y: 26 },
        { n: 2, title: 'Chuỗi tín hiệu Akt đẩy Túi GLUT4 lên màng', desc: 'Thúc đẩy xuất bào túi nội bào gắn sẵn kênh GLUT4 hòa vào màng sinh chất.', x: 52, y: 50 },
        { n: 3, title: 'Glucose ùa vào theo bậc nồng độ & bị bẫy thành G-6-P', desc: 'Ngay khi vào tế bào, Hexokinase / Glucokinase phosphoryl hóa thành Glucose-6-phosphate (G6P) không thoát ra lại được.', x: 76, y: 40 }
      ],
      takeaway: 'Insulin không phải enzyme chuyển hóa mà là chìa khóa gắn thụ thể để chèn kênh GLUT4 lên màng tế bào Cơ & Mô mỡ.'
    },
    {
      code: 'Hình 30.12',
      page: 'Bài 30 • tr.409',
      title: 'Insulin Hoạt hóa Glycogen Synthase qua Chuỗi PI3K → Akt Bất hoạt GSK-3',
      summary: 'Bình thường enzyme GSK-3 phosphoryl hóa để KHÓA Glycogen Synthase; Insulin kích hoạt Akt (PKB) gây phosphoryl hóa làm BẤT HOẠT GSK-3 đồng thời kích hoạt Protein Phosphatase 1 (PP1) → mở khóa cho Glycogen Synthase tổng hợp dự trữ Glycogen!',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế "Nhả phanh kép": Bất hoạt kẻ ức chế GSK-3 để Mở khóa Glycogen Synthase',
        nodes: [
          { title: 'Insulin → PI3K → PKB (Akt)', sub: 'Phosphoryl hóa hai đích điều hòa Glycogen', tone: 'blue' },
          { title: 'Đích 1: Bất hoạt GSK-3', sub: 'GSK-3 bị khóa → Ngừng ức chế Glycogen Synthase', tone: 'amber' },
          { title: 'Đích 2: Hoạt hóa PP1 (Protein Phosphatase 1)', sub: 'Gỡ bỏ gốc phosphate trên Glycogen Synthase (Dạng Hoạt động) & bất hoạt Glycogen Phosphorylase!', tone: 'purple' },
          { title: 'Tổng hợp & Dự trữ Glycogen ở Gan/Cơ', sub: 'Tích lũy năng lượng dư sau ăn; ngừng thoái giáng Glycogen', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Quy tắc vàng Phosphoryl hóa Enzyme', desc: 'Hormon "Ăn no" (INSULIN → PP1) GỠ phosphate (Dephosphorylate) để BẬT các enzyme tổng hợp (Glycogen Synthase). Hormon "Đói" (GLUCAGON/ADRENALIN → PKA) GẮN phosphate để BẬT các enzyme phân hủy (Glycogen Phosphorylase)!', x: 60, y: 50 },
        { n: 2, title: 'Kho dự trữ Glycogen ở Gan vs Cơ', desc: 'Gan chứa ~100g Glycogen (có men G6Pase để thả đường ra nuôi toàn thân lúc đói); Cơ chứa ~400g (KHÔNG có G6Pase nên chỉ dùng nội bộ để co cơ!).', x: 84, y: 50 }
      ],
      takeaway: 'Insulin → Akt bất hoạt GSK-3 + hoạt hóa PP1 → BẬT Glycogen Synthase & TẮT Glycogen Phosphorylase → Dự trữ Glycogen!'
    },
    {
      code: 'Hình 30.13',
      page: 'Bài 30 • tr.410',
      title: 'Tổng hợp Toàn bộ Hoạt động Đồng hóa của Insulin (Glucid – Lipid – Protid – K⁺)',
      summary: 'Insulin là Hormon Đồng hóa (Anabolic) số 1 của cơ thể ở cả 3 chất sinh năng lượng: Đẩy đường vào tế bào & tổng hợp Glycogen; Tổng hợp Acid béo/Triglyceride & khóa HSL; Nhập Acid amin tổng hợp Protein & khóa thoái hóa cơ.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Chuyển hóa Glucid (Hạ đường huyết)', subtitle: 'Mọi đường đều hướng vào dự trữ', tone: 'blue', bullets: ['↑ Thu nhận Glucose vào Cơ & Mỡ (GLUT4) & Gan (tăng Glucokinase)', '↑ Tổng hợp Glycogen; ↑ Đường phân (PFK-1, Pyruvate kinase)', '↓ Tân tạo đường gan (PEPCK, G6Pase) & ↓ Thoái giáng Glycogen'] },
          { title: 'Chuyển hóa Lipid (Tích mỡ)', subtitle: 'Ức chế tạo thể Ceton', tone: 'amber', bullets: ['↑ Acetyl-CoA carboxylase & Lipoprotein Lipase (LPL) cất mỡ vào mô mỡ', '↓ Hormone-Sensitive Lipase (HSL) → CHẶN giải phóng acid béo (ngừa nhiễm toan DKA!)', '↓ Carnitine Acyltransferase I → Ngăn β-oxy hóa tạo thể Ceton ở gan'] },
          { title: 'Chuyển hóa Protein & Điện giải', subtitle: 'Xây dựng khối cơ & Hạ K⁺ máu', tone: 'green', bullets: ['↑ Bắt giữ Acid amin vào cơ & ↑ Dịch mã tổng hợp protein mới (mTOR)', '↓ Dị hóa đạm (giảm thải Ure)', '↑ Hoạt động Bơm Na⁺-K⁺-ATPase đẩy K⁺ vào trong tế bào!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Hiệu ứng đối lập với Lipase: ↑ LPL nhưng ↓ HSL', desc: 'Insulin bật LPL trên thành mao mạch mỡ để cắt Chylomicron cất mỡ vào kho, đồng thời TẮT HSL trong tế bào mỡ để không cho mỡ chảy ra máu.', x: 50, y: 40 },
        { n: 2, title: 'Thiếu Insulin dẫn đến tam chứng kinh điển ĐTĐ', desc: 'Sụt cân teo cơ + Đói ăn nhiều (mô không lấy được đường) + Tiểu nhiều khát nhiều (lợi tiểu thẩm thấu khi đường huyết > 180 mg/dL).', x: 82, y: 66 }
      ],
      takeaway: 'Insulin = Đồng hóa toàn diện: ↑ Glucid dự trữ, ↑ Tổng hợp Mỡ (LPL ↑, HSL ↓), ↑ Tổng hợp Đạm, và ↑ Bơm K⁺ vào tế bào.'
    },
    {
      code: 'Hình 30.14',
      page: 'Bài 30 • tr.411',
      title: 'Cơ chế Insulin Ức chế Hormone-Sensitive Lipase (HSL) Ngăn Ly giải Mỡ',
      summary: 'Trong tế bào mỡ, Adrenalin/Glucagon tăng cAMP → PKA phosphoryl hóa kích hoạt HSL cắt Triglyceride thành Acid béo tự do; Insulin kích hoạt Akt bật Phosphodiesterase 3B (PDE3B) phá hủy cAMP để KHÓA CHẶT HSL.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Khóa HSL tại Tế bào Mô Mỡ bởi Insulin (Akt → PDE3B)',
        nodes: [
          { title: 'Catecholamine / Đói (↓ Insulin)', sub: 'Tăng cAMP → PKA bật HSL → Cắt Triglyceride thành Glycerol + FFA ồ ạt', tone: 'red' },
          { title: 'Insulin gắn Thụ thể trên TB Mỡ', sub: 'PI3K → Akt phosphoryl hóa HOẠT HÓA enzym PDE3B', tone: 'blue' },
          { title: 'PDE3B thủy phân sạch cAMP → 5\'-AMP', sub: 'Tắt ngay PKA → Kích thích PP1 gỡ phosphate KHÓA CHẶT HSL!', tone: 'purple' },
          { title: 'Giữ chặt Triglyceride trong Giọt mỡ', sub: 'Giảm FFA máu về gần 0 → Cắt nguồn nguyên liệu sinh thể Ceton ở Gan!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tế bào Mỡ nhạy với Insulin nhất!', desc: 'Chỉ cần một lượng Insulin nền rất nhỏ cũng đủ ức chế HSL giữ mô mỡ không tan rã (giải thích vì sao ĐTĐ típ 2 vẫn còn chút Insulin ít khi bị nhiễm toan ceton DKA như ĐTĐ típ 1!).', x: 58, y: 50 },
        { n: 2, title: 'Mối nguy mất kiểm soát khi quên liều Insulin nền', desc: 'Ở bệnh nhân ĐTĐ típ 1, chỉ cần ngưng Insulin vài giờ–1 ngày là HSL bung mở tràn ngập acid béo vào gan.', x: 20, y: 50 }
      ],
      takeaway: 'Insulin bật PDE3B giáng hóa cAMP → TẮT Hormone-Sensitive Lipase (HSL) → Cắt đứt nguồn FFA từ mô mỡ về gan.'
    },
    {
      code: 'Hình 30.15',
      page: 'Bài 30 • tr.411',
      title: 'Bệnh sinh Nhiễm Toan Ceton Đái tháo đường (DKA) khi Thiếu hụt Insulin Nặng',
      summary: 'Khi thiếu tuyệt đối Insulin kèm tăng vọt Glucagon (ĐTĐ típ 1): HSL mở tung phóng thích ồ ạt Acid béo tự do (FFA) về gan + Malonyl-CoA giảm mở cửa CPT-I đẩy FFA vào ty thể oxy hóa sinh tràn lan 3 thể Ceton gây toan chuyển hóa nặng.',
      svg: {
        kind: 'flow',
        banner: 'Dòng thác Nhiễm Toan Ceton (DKA): Thiếu Insulin + Thừa Glucagon',
        nodes: [
          { title: '1. Thiếu Insulin tuyệt đối + ↑ Glucagon', sub: 'Mở khóa HSL ở Mô mỡ + Tăng tân tạo đường cực mạnh ở Gan', tone: 'red' },
          { title: '2. Tràn ngập Acid béo tự do (FFA) tới Gan', sub: 'Giảm Malonyl-CoA → Mở toang cổng CPT-I đưa Acetyl-CoA vào ty thể', tone: 'amber' },
          { title: '3. Sinh Thể Ceton ồ ạt vượt ngưỡng dùng', sub: 'Acetoacetate + β-Hydroxybutyrate (acid mạnh) + Acetone (hơi thở mùi táo thối)', tone: 'purple' },
          { title: '4. Bệnh cảnh DKA đe dọa tính mạng', sub: 'Toan chuyển hóa tăng AG (thở nhanh sâu Kussmaul) + Lợi tiểu thẩm thấu mất nước + Rối loạn K⁺', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: '3 Thể Ceton & Que thử Ketone nước tiểu', desc: 'Acetoacetate, β-Hydroxybutyrate (chiếm ưu thế nhất khi toan nặng nhưng que nitroprusside lại bắt kém!) và Acetone (bay hơi qua phổi tạo mùi trái cây chín).', x: 64, y: 50 },
        { n: 2, title: 'Thứ tự 3 trụ cột điều trị DKA', desc: '(1) Bù dịch NaCl 0,9% tích cực đầu tiên; (2) Insulin tĩnh mạch liên tục (khóa HSL ngừng sinh ceton!); (3) Bù Kali cẩn thận khi K⁺ < 5,2 mEq/L!', x: 84, y: 50 }
      ],
      takeaway: 'DKA xảy ra khi thiếu Insulin + tăng Glucagon → mở HSL (tràn FFA) + giảm Malonyl-CoA (mở CPT-I) → Gan tạo ồ ạt thể Ceton gây toan chuyển hóa.'
    },
    {
      code: 'Hình 30.16',
      page: 'Bài 30 • tr.413',
      title: 'Tác động Phối hợp của Insulin trên 3 Cơ quan Đích (Gan – Cơ xương – Mô mỡ)',
      summary: 'Khi ăn bữa ăn giàu tinh bột-đạm: Gan chuyển sang "ngậm" đường tích Glycogen và ngừng tạo đường mới; Cơ xương dùng đường đốt năng lượng + xây cơ; Mô mỡ cất giữ chất béo — tất cả đều hạ đường huyết êm ái.',
      svg: {
        kind: 'compare',
        panels: [
          { title: '1. Tại GAN (Không cần GLUT4 — GLUT2 luôn mở)', subtitle: 'Chủ động cất giữ & khóa xuất đường', tone: 'amber', bullets: ['↑ Glucokinase (bẫy glucose thành G6P không cho ra lại)', '↑ Glycogen Synthase & ↑ Tổng hợp Acid béo (VLDL)', '↓ Tân tạo đường (Gluconeogenesis) & ↓ Thoái biến Glycogen'] },
          { title: '2. Tại CƠ XƯƠNG (GLUT4 phụ thuộc Insulin)', subtitle: 'Tiêu thụ đường chính (~70–80% sau ăn!)', tone: 'red', bullets: ['↑ GLUT4 ra màng thu nhận nhanh Glucose', '↑ Tổng hợp Glycogen cơ (kho ~400g dùng tại chỗ)', '↑ Nhập Acid amin & Tổng hợp Protein sợi cơ'] },
          { title: '3. Tại MÔ MỠ (GLUT4 phụ thuộc Insulin)', subtitle: 'Kho dự trữ Lipid ổn định nhất', tone: 'blue', bullets: ['↑ GLUT4 nhập Glucose tạo α-Glycerol Phosphate làm khung gắn Triglyceride', '↑ LPL lấy acid béo từ Chylomicron/VLDL vào tế bào mỡ', '↓ HSL khóa chặt không cho ly giải mỡ'] }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế khác nhau giữa Gan và Cơ để tăng lấy đường', desc: 'Cơ tăng CỬA VÀO (bơm GLUT4 lên màng). Gan cửa GLUT2 luôn mở sẵn nên Insulin tăng enzym BẪY NỘI BÀO (Glucokinase) để giữ gradient đi vào!', x: 20, y: 40 },
        { n: 2, title: 'Tại sao mô mỡ vẫn cần Glucose để tích Triglyceride?', desc: 'Tế bào mỡ thiếu men Glycerol kinase nên bắt buộc phải tạo khung xương Glycerol-3-P từ Glucose nhập qua GLUT4!', x: 82, y: 40 }
      ],
      takeaway: 'Gan (bật Glucokinase, tắt tân tạo đường) + Cơ xương (bật GLUT4 & Glycogen/Protein) + Mô mỡ (bật GLUT4 & LPL, tắt HSL).'
    },
    {
      code: 'Hình 30.17',
      page: 'Bài 30 • tr.414',
      title: 'Bài tiết Insulin 2 Pha (Đáp ứng Nhanh & Muộn) và Dao động Theo Bữa ăn 24 giờ',
      summary: 'Khi truyền Glucose tĩnh mạch liên tục, tế bào β tiết Insulin theo 2 pha rõ rệt: Pha 1 vọt đỉnh chỉ sau 3–5 phút (túi Insulin dự trữ sẵn), tụt xuống rồi tăng chậm bền bỉ ở Pha 2 (tổng hợp Insulin mới).',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian từ lúc Bơm tăng Đường huyết đột ngột (phút: 0 → 120p)',
        yLabel: 'Tốc độ Bài tiết Insulin của Tế bào β',
        xTicks: [
          { x: 15, label: '0p (Truyền Glu)' },
          { x: 26, label: '5p (Đỉnh Pha 1)' },
          { x: 42, label: '15p' },
          { x: 85, label: '60–120p (Pha 2)' }
        ],
        yTicks: [
          { y: 15, label: 'Nền (Basal)' },
          { y: 55, label: 'Pha 2' },
          { y: 88, label: 'Đỉnh Pha 1' }
        ],
        zones: [
          { x1: 15, x2: 36, tone: 'red', label: 'Pha 1 (Dự trữ sẵn)' },
          { x1: 38, x2: 92, tone: 'blue', label: 'Pha 2 (Tổng hợp mới)' }
        ],
        curves: [
          { name: 'Bình thường (Có đủ Pha 1 & Pha 2)', color: '#2563eb', pts: [[10, 16], [16, 16], [24, 88], [34, 34], [55, 58], [88, 72]] },
          { name: 'ĐTĐ típ 2 Sớm (MẤT Pha 1 → Đường sau ăn vọt cao!)', color: '#dc2626', dashed: true, pts: [[10, 16], [16, 16], [28, 24], [55, 38], [88, 56]] }
        ]
      },
      pins: [
        { n: 1, title: 'Mất Pha 1 là dấu hiệu SỚM NHẤT của ĐTĐ típ 2', desc: 'Do mất đỉnh xuất bào nhanh trong 5–10 phút đầu nên đường huyết sau ăn tăng vọt bất thường dù đường huyết đói lúc đầu còn bình thường (Rối loạn dung nạp glucose IGT).', x: 28, y: 24 },
        { n: 2, title: 'Hiệu ứng Incretin (GLP-1 & GIP)', desc: 'Uống Glucose qua đường tiêu hóa kích thích tiết Insulin MẠNH HƠN hẳn truyền đường tĩnh mạch cùng nồng độ máu nhờ tế bào ruột L & K tiết GLP-1 và GIP!', x: 74, y: 24 }
      ],
      takeaway: 'Pha 1 (0–10p): giải phóng Insulin dự trữ (mất sớm nhất trong ĐTĐ típ 2). Pha 2: tổng hợp mới kéo dài. Incretin (GLP-1) khuếch đại đáp ứng đường uống.'
    },
    {
      code: 'Hình 30.18',
      page: 'Bài 30 • tr.414',
      title: 'Cơ chế Tế bào β Cảm nhận Đường huyết Tiết Insulin (GLUT2 → ↑ ATP → Đóng K_ATP → Mở Ca²⁺)',
      summary: 'Glucose đi vào tế bào β qua GLUT2 không cần Insulin → Glucokinase chuyển hóa tạo ATP → tỷ lệ ATP/ADP tăng làm ĐÓNG kênh Kali nhạy ATP (K_ATP) → Khử cực màng mở kênh Ca²⁺ L-type → Ca²⁺ vào gây xuất bào hạt Insulin!',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Kết nối Chuyển hóa – Điện học Tiết Insulin ở Tế bào β',
        nodes: [
          { title: '1. Glucose vào TB β qua GLUT2', sub: 'Glucokinase (Km cao = Cảm biến đường huyết) tạo G6P → Đường phân + Krebs', tone: 'blue' },
          { title: '2. Tăng tỷ lệ ATP / ADP nội bào', sub: 'ATP gắn đóng chặt Kênh K⁺ nhạy cảm ATP (K_ATP)!', tone: 'amber' },
          { title: '3. Khử cực Màng → Mở Kênh Ca²⁺ L-type', sub: 'K⁺ không thoát ra được nên điện thế màng tăng từ −70 lên −40 mV', tone: 'purple' },
          { title: '4. Dòng Ca²⁺ tràn vào → Xuất bào Insulin', sub: 'Ca²⁺ đẩy các túi dự trữ hòa màng xuất bào Insulin & Peptide C (1:1)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tầm quan trọng của Glucokinase ("Glucose Sensor")', desc: 'Đột biến giảm nhẹ hoạt tính Glucokinase làm tăng ngưỡng đường huyết kích tiết Insulin → gây đái tháo đường khởi phát sớm ở người trẻ (MODY 2).', x: 20, y: 50 },
        { n: 2, title: 'Thứ tự đóng/mở kênh bắt buộc thuộc lòng', desc: '↑ ATP → ĐÓNG kênh K_ATP → Khử cực → MỞ kênh Ca²⁺ phụ thuộc điện thế → Xuất bào Insulin.', x: 64, y: 50 }
      ],
      takeaway: 'Glucose → GLUT2 → Glucokinase → ↑ ATP/ADP → ĐÓNG kênh K_ATP → Khử cực → MỞ kênh Ca²⁺ L-type → Xuất bào Insulin.'
    },
    {
      code: 'Hình 30.19',
      page: 'Bài 30 • tr.415',
      title: 'Cấu trúc Kênh K_ATP (Kir6.2 / SUR1) & Cơ chế Thuốc Sulfonylurea vs Diazoxide',
      summary: 'Kênh K_ATP gồm 4 tiểu đơn vị tạo lỗ Kir6.2 (gắn ATP) và 4 tiểu đơn vị điều hòa SUR1 (nơi gắn của thuốc Sulfonylurea/Glinide để ĐÓNG kênh tiết Insulin, và thuốc Diazoxide để MỞ kênh ức chế tiết Insulin).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Nhóm ĐÓNG Kênh K_ATP → Kích tiết Insulin', subtitle: 'Sulfonylurea (Gliclazide, Glimepiride) & Glinide', tone: 'red', bullets: ['Gắn vào tiểu đơn vị SUR1 → ĐÓNG kênh K⁺ bất chấp nồng độ Glucose hay ATP!', 'Khử cực màng mở kênh Ca²⁺ → Ép tế bào β tiết Insulin', 'Nguy cơ tác dụng phụ: HẠ ĐƯỜNG HUYẾT (đặc biệt nếu bỏ bữa hoặc suy thận)'] },
          { title: 'Nhóm MỞ Kênh K_ATP → Ngưng tiết Insulin', subtitle: 'Diazoxide & Kênh hoạt hóa sẵn', tone: 'blue', bullets: ['Gắn mở toang kênh K_ATP → Giữ màng tăng phân cực âm (−70 mV) không mở kênh Ca²⁺ được', 'Ứng dụng điều trị: Hạ đường huyết do U tụy Insulinoma hoặc tăng tiết Insulin bẩm sinh!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Phân công tiểu đơn vị trong Phức hợp K_ATP', desc: '4 tiểu đơn vị Kir6.2 tạo lõi kênh cho K⁺ đi qua (nơi gắn ATP); 4 tiểu đơn vị bao quanh SUR1 là thụ thể của Sulfonylurea & Diazoxide.', x: 26, y: 40 },
        { n: 2, title: 'Vì sao Somatostatin & α2-adrenergic ức chế tiết Insulin?', desc: 'Qua protein Gi làm giảm cAMP và mở kênh K⁺ → ngăn chặn sự khử cực và mở kênh Ca²⁺ của tế bào β.', x: 74, y: 66 }
      ],
      takeaway: 'Sulfonylurea gắn SUR1 → ĐÓNG K_ATP → TĂNG tiết Insulin (nguy cơ tụt đường huyết). Diazoxide → MỞ K_ATP → GIẢM tiết Insulin (trị Insulinoma).'
    },
    {
      code: 'Hình 30.20',
      page: 'Bài 30 • tr.415',
      title: 'Phối hợp Acid amin & Chu trình Acid Citric trong Kích thích Bài tiết Insulin',
      summary: 'Không chỉ Glucose, một số Acid amin (đặc biệt Arginine, Leucine, Lysine) đi vào tế bào β cũng cung cấp cơ chất cho chu trình Krebs sinh ATP (Leucine kích hoạt GDH) hoặc mang điện tích dương trực tiếp khử cực màng kích tiết Insulin.',
      svg: {
        kind: 'flow',
        banner: 'Cách Bữa ăn Giàu Đạm Kích thích Tiết Insulin (+ Glucagon Đồng thời!)',
        nodes: [
          { title: 'Acid amin từ Bữa ăn Đạm', sub: 'Leucine, Arginine, Lysine vào tế bào β tụy', tone: 'amber' },
          { title: 'Con đường Chuyển hóa (Leucine)', sub: 'Hoạt hóa Glutamate Dehydrogenase → Đẩy α-KG vào Chu trình Krebs → ↑ ATP', tone: 'blue' },
          { title: 'Con đường Điện tích (Arginine+)', sub: 'Arginine mang điện dương đi vào làm khử cực nhẹ màng TB β → Mở kênh Ca²⁺', tone: 'purple' },
          { title: 'Tiết Đồng thời Insulin & Glucagon', sub: 'Insulin nhập acid amin vào cơ tổng hợp đạm; Glucagon ngăn tụt đường huyết khi ăn bữa thuần đạm!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao ăn bữa 100% Thịt (không tinh bột) lại kích thích CẢ Insulin lẫn Glucagon?', desc: 'Insulin giúp đưa acid amin vào cơ tổng hợp protein; nếu chỉ có Insulin mà không có Glucagon song hành, cơ thể sẽ bị hạ đường huyết ngay sau ăn thịt!', x: 84, y: 50 },
        { n: 2, title: 'Hội chứng Tăng Insulin – Tăng Amoniac bẩm sinh', desc: 'Đột biến hoạt hóa quá mức enzym GDH khiến Leucine trong sữa kích tiết Insulin ồ ạt gây hạ đường huyết sau ăn đạm ở trẻ nhỏ.', x: 40, y: 50 }
      ],
      takeaway: 'Acid amin (Leucine, Arginine) kích thích đồng thời CẢ Insulin (xây đạm) và Glucagon (ngăn tụt đường huyết khi bữa ăn thiếu tinh bột).'
    },
    {
      code: 'Hình 30.21',
      page: 'Bài 30 • tr.417',
      title: 'Cấu trúc Glucagon (29 Acid amin) & Cơ chế Tác động Tăng Đường huyết tại Gan',
      summary: 'Glucagon (29 aa) do tế bào α tiết ra từ tiền chất Proglucagon khi đường huyết hạ (< 70 mg/dL); gắn thụ thể GPCR trên GAN làm tăng cAMP → PKA bật phân hủy Glycogen và Tân tạo đường, đồng thời tăng tạo thể Ceton khi đói dài.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi Tín hiệu của Glucagon trên Gan (Hoàn toàn trái ngược Insulin)',
        nodes: [
          { title: 'Kích thích: Hạ đường huyết (<70), Acid amin, Giao cảm', sub: 'Ức chế bởi: Đường huyết cao, Insulin, Somatostatin, GLP-1', tone: 'amber' },
          { title: 'Glucagon → Thụ thể Gan (Gs → cAMP → PKA)', sub: 'Gắn đặc hiệu tại GAN (cơ xương KHÔNG có thụ thể Glucagon!)', tone: 'red' },
          { title: 'Bật Ly giải Glycogen & Tân tạo đường', sub: 'PKA bật Glycogen Phosphorylase & PEPCK/F-1,6-BPase; TẮT Glycogen Synthase & Đường phân', tone: 'purple' },
          { title: 'Phóng thích Glucose ra Máu & Tăng Ceton', sub: 'Giữ đường huyết hằng định nuôi Não lúc đói & Đêm ngủ', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ xương KHÔNG có thụ thể Glucagon!', desc: 'Chỉ có GAN (và mô mỡ nhẹ lúc nồng độ cao) đáp ứng với Glucagon để cứu đường huyết; cơ xương đáp ứng với Adrenalin (β2 → cAMP) để tự đốt glycogen cho cơ hoạt động!', x: 40, y: 50 },
        { n: 2, title: 'Ứng dụng Tiêm Glucagon cấp cứu Hạ đường huyết nặng', desc: 'Khi bệnh nhân ĐTĐ tiêm quá liều Insulin bị hôn mê không nuốt được: tiêm bắp Glucagon kích gan xả glycogen cứu não tức thì (trừ người say rượu cạn glycogen gan!).', x: 84, y: 50 }
      ],
      takeaway: 'Glucagon (29 aa) tác động chủ yếu trên GAN qua cAMP–PKA: ↑ Ly giải Glycogen, ↑ Tân tạo đường, ↑ Ceton (Cơ xương không có thụ thể Glucagon).'
    },
    {
      code: 'Hình 30.23 (SGK bỏ qua 30.22)',
      page: 'Bài 30 • tr.418',
      title: 'Vòng Điều hòa Đường huyết Hằng định bởi Gan & Đảo Tụy (Insulin vs Glucagon)',
      summary: 'Đường huyết đói giữ rất chặt quanh 70–100 mg/dL nhờ cán cân tỷ lệ Insulin / Glucagon: sau bữa ăn Insulin tăng vọt biến gan thành kho thu nhận đường; giữa bữa/đêm ngủ Glucagon tăng biến gan thành nhà máy xuất đường cho não.',
      svg: {
        kind: 'cycle',
        centerTitle: 'ĐƯỜNG HUYẾT ỔN ĐỊNH',
        centerSub: '70 – 100 mg/dL (3,9–5,5 mmol/L)',
        centerTone: 'teal',
        steps: [
          { label: 'Sau ăn: Đường huyết ↑ (>120 mg/dL)', detail: 'Kích TB β tiết INSULIN, ức chế TB α', tone: 'red' },
          { label: 'Đáp ứng: Cơ/Mỡ/Gan hấp thu đường', detail: 'Tạo Glycogen, mỡ → Đường huyết giảm về BT', tone: 'blue' },
          { label: 'Lúc đói: Đường huyết ↓ (<70 mg/dL)', detail: 'Tắt Insulin; Kích TB α tiết GLUCAGON (+ Adrenalin)', tone: 'amber' },
          { label: 'Đáp ứng: Gan xả Glycogen & Tân tạo', detail: 'Phóng thích Glucose ra máu nuôi Não trở về BT', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Bộ 4 Hormon đối kháng (Counter-regulatory) khi Hạ đường huyết', desc: 'Tầng bảo vệ theo ngưỡng: 80 mg/dL tắt Insulin → 68 mg/dL bật Glucagon & Adrenalin (hệ thống cứu nguy nhanh!) → 60 mg/dL bật GH & Cortisol (bảo vệ kéo dài).', x: 24, y: 76 },
        { n: 2, title: 'Ghi chú đánh số trong SGK 2025', desc: 'Trong Sách Sinh lý 2025 tr.418, số thứ tự hình nhảy thẳng từ Hình 30.21 sang Hình 30.23 (thiếu số 30.22).', x: 50, y: 50 }
      ],
      takeaway: 'Cân bằng đường huyết dựa vào tỷ lệ Insulin/Glucagon tại Gan; khi tụt < 68 mg/dL bật ngay cặp đôi cấp cứu Glucagon + Adrenalin.'
    },
    {
      code: 'Hình 30.24',
      page: 'Bài 30 • tr.420',
      title: 'Phản ứng Glycat hóa Không Enzym (Schiff Base → Amadori) Tạo HbA1c',
      summary: 'Glucose trong máu tự gắn không cần enzym vào đầu N-tận Valine của chuỗi β-globin hemoglobin tạo phức hợp Schiff base (thuận nghịch) rồi tái sắp xếp thành sản phẩm Amadori bền vững gọi là HbA1c — tồn tại suốt đời sống hồng cầu (120 ngày)!',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Hình thành HbA1c Tỷ lệ Thuận với Đường huyết Trung bình',
        nodes: [
          { title: '1. Glucose + Valine đầu N chuỗi β-HbA', sub: 'Quá trình gắn hóa học tự phát, KHÔNG cần xúc tác enzym', tone: 'blue' },
          { title: '2. Tạo Base Schiff (Thuận nghịch nhanh)', sub: 'Thay đổi tức thời trong vài giờ nếu đường huyết tụt xuống', tone: 'amber' },
          { title: '3. Chuyển vị Amadori → HbA1c (Bền vững!)', sub: 'Liên kết ketoamine ổn định KHÔNG đảo ngược được cho tới khi hồng cầu chết (~120 ngày)', tone: 'purple' },
          { title: '4. Phản ánh Đường huyết Trung bình 2–3 Tháng', sub: 'Bình thường < 5,7%; Tiền ĐTĐ 5,7–6,4%; Chẩn đoán ĐTĐ ≥ 6,5%!', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Các yếu tố làm SAI LỆCH giả tạo kết quả HbA1c', desc: 'Bất cứ gì rút ngắn tuổi thọ hồng cầu (tan máu, truyền máu gần đây, chảy máu, mang thai, suy thận dùng EPO) đều làm HbA1c THẤP GIẢ; ngược lại thiếu máu thiếu sắt kéo dài tuổi thọ hồng cầu già làm HbA1c CAO GIẢ!', x: 84, y: 50 },
        { n: 2, title: 'Cơ chế tổn thương mạch máu của ĐTĐ', desc: 'Tương tự tạo HbA1c, glucose dư glycat hóa protein thành mạch & đáy mắt tạo AGEs gây biến chứng vi mạch và đại mạch.', x: 58, y: 50 }
      ],
      takeaway: 'HbA1c hình thành qua chuyển vị Amadori bền vững suốt vòng đời 120 ngày hồng cầu → phản ánh đường huyết trung bình 2–3 tháng qua (ngưỡng chẩn đoán ĐTĐ ≥ 6,5%).'
    },
    {
      code: 'Hình 30.25',
      page: 'Bài 30 • tr.421',
      title: 'HbA1c Phản ánh Đường huyết Trung bình 2–3 Tháng vs Dao động Đường huyết Đói',
      summary: 'Hồng cầu sinh mới mỗi ngày có tuổi thọ 120 ngày: 50% giá trị HbA1c hiện tại phản ánh đường huyết trong 30 ngày gần nhất, 25% từ tháng thứ 2 và 25% từ tháng thứ 3 — không bị ảnh hưởng bởi một bữa ăn hay nhịn ăn sáng hôm lấy máu!',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian 120 ngày trước thời điểm Xét nghiệm (Ngày −120 → Hôm nay)',
        yLabel: 'Mức Đường huyết & Trọng số đóng góp vào HbA1c',
        xTicks: [
          { x: 15, label: '−90 ngày (25%)' },
          { x: 50, label: '−60 ngày (25%)' },
          { x: 85, label: '30 ngày gần nhất (50%!)' }
        ],
        yTicks: [
          { y: 20, label: '70 mg/dL' },
          { y: 55, label: '150 mg/dL' },
          { y: 85, label: '250 mg/dL' }
        ],
        curves: [
          { name: 'Đường huyết dao động hàng ngày (lúc cao lúc thấp)', color: '#dc2626', pts: [[12, 42], [22, 78], [32, 36], [44, 82], [58, 48], [72, 86], [82, 40], [92, 62]] },
          { name: 'Đường trung bình tích lũy phản ánh qua HbA1c', color: '#2563eb', dashed: true, pts: [[12, 56], [50, 58], [92, 60]] }
        ]
      },
      pins: [
        { n: 1, title: 'Quy tắc trọng số 50–25–25 của HbA1c', desc: 'Tháng gần nhất quyết định tới 50% trị số HbA1c hiện tại; nếu bệnh nhân mới đổi chế độ ăn/thuốc đúng 3–4 tuần trước tái khám đã thấy HbA1c thay đổi đáng kể.', x: 82, y: 24 },
        { n: 2, title: 'Ưu điểm khi bệnh nhân "nhịn ăn giả tạo" trước ngày đi khám', desc: 'Dù bệnh nhân chỉ ăn kiêng 3 ngày trước khi xét nghiệm khiến đường huyết đói đẹp, HbA1c vẫn bóc trần mức đường huyết thật trong 3 tháng qua!', x: 48, y: 74 }
      ],
      takeaway: 'HbA1c đại diện đường huyết 8–12 tuần (50% phụ thuộc 30 ngày gần nhất), không bị nhiễu bởi bữa ăn ngay trước lúc lấy máu.'
    },
    {
      code: 'Hình 30.26',
      page: 'Bài 30 • tr.421',
      title: 'Thang Quy đổi Giữa HbA1c (%) và Đường huyết Trung bình Ước tính (eAG)',
      summary: 'Công thức chuẩn ADAG: eAG (mg/dL) = 28,7 × HbA1c − 46,7. Mốc dễ nhớ cực nhanh: HbA1c 6% ≈ 126 mg/dL, và cứ tăng thêm mỗi 1% HbA1c thì đường huyết trung bình tăng khoảng ~29–30 mg/dL!',
      svg: {
        kind: 'curve',
        xLabel: 'Chỉ số HbA1c (%)',
        yLabel: 'Đường huyết Trung bình Ước tính eAG (mg/dL)',
        xTicks: [
          { x: 15, label: '5%' },
          { x: 35, label: '6% (126)' },
          { x: 52, label: '7% (154)' },
          { x: 70, label: '8% (183)' },
          { x: 88, label: '10% (240)' }
        ],
        yTicks: [
          { y: 18, label: '97' },
          { y: 45, label: '154 (Mục tiêu <7%)' },
          { y: 85, label: '240 mg/dL' }
        ],
        vLines: [
          { x: 52, label: 'Mục tiêu điều trị phổ biến: HbA1c < 7% (154 mg/dL)', color: '#16a34a' }
        ],
        curves: [
          { name: 'eAG = 28,7 × HbA1c − 46,7 (Cứ +1% ≈ +29 mg/dL)', color: '#2563eb', pts: [[15, 18], [35, 32], [52, 46], [70, 62], [88, 86]] }
        ]
      },
      pins: [
        { n: 1, title: 'Bảng nhẩm nhanh khi đi lâm sàng', desc: 'HbA1c 6% = 126 mg/dL • 7% = 154 mg/dL • 8% = 183 mg/dL • 9% = 212 mg/dL • 10% = 240 mg/dL (lệch đều ~29 mg/dL mỗi bậc 1%).', x: 52, y: 46 },
        { n: 2, title: 'Mục tiêu kiểm soát đa số bệnh nhân ĐTĐ', desc: 'ADA khuyến cáo giữ HbA1c < 7,0% (~154 mg/dL) để giảm mạnh biến chứng vi mạch võng mạc, thận, thần kinh.', x: 54, y: 20 }
      ],
      takeaway: 'HbA1c 6% = 126 mg/dL, 7% = 154 mg/dL, 8% = 183 mg/dL (cứ +1% HbA1c tương đương +29 mg/dL eAG).'
    },
    {
      code: 'Hình 30.27',
      page: 'Bài 30 • tr.422',
      title: 'So sánh Cơ chế Bệnh sinh Đái tháo đường Típ 1 vs Đái tháo đường Típ 2',
      summary: 'ĐTĐ típ 1 (~5–10%) là sự phá hủy TỰ MIỄN tế bào β (thiếu tuyệt đối Insulin); ĐTĐ típ 2 (~90%) khởi phát từ KHÁNG INSULIN ở mô ngoại biên dẫn đến giai đoạn đầu tăng bù Insulin rất cao, sau nhiều năm mới kiệt quệ tế bào β.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Đái tháo đường Típ 1 (~5–10%)', subtitle: 'Phá hủy Tự miễn Tế bào β • Trẻ tuổi, gầy', tone: 'red', bullets: ['Di truyền HLA-DR3/DR4 + Yếu tố môi trường (virus) → Lympho T phá hủy >80–90% tế bào β', 'Kháng thể dương tính: Anti-GAD, ICA, Anti-Insulin (IAA)', 'Insulin & C-Peptide RẤT THẤP về 0 → Dễ nhiễm toan ceton DKA → BẮT BUỘC tiêm Insulin suốt đời!'] },
          { title: 'Đái tháo đường Típ 2 (~90–95%)', subtitle: 'Kháng Insulin ngoại biên + Suy giảm β tiến triển', tone: 'blue', bullets: ['Liên quan mạnh béo phì trung tâm, ít vận động & yếu tố gia đình cực cao', 'Giai đoạn đầu: Kháng Insulin ở Cơ/Gan/Mỡ → TB β gồng mình tiết bù TĂNG INSULIN MÁU (Hyperinsulinemia)', 'Giai đoạn sau: Suy kiệt tế bào β → Tăng đường huyết → ít bị DKA hơn (hay gặp Tăng áp lực thẩm thấu HHS)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Sự khác biệt Diễn biến Insulin máu theo thời gian', desc: 'ĐTĐ típ 1: Insulin tụt về 0. ĐTĐ típ 2: Đường cong hình chữ U ngược (ban đầu CAO vọt do kháng Insulin, về sau 10–15 năm giảm dần khi β suy kiệt phải chuyển sang tiêm Insulin).', x: 74, y: 50 },
        { n: 2, title: 'Dấu ấn tự kháng thể (Autoantibodies)', desc: 'Anti-GAD65 là xét nghiệm nhạy nhất giúp phân biệt ĐTĐ tự miễn muộn ở người lớn (LADA) với ĐTĐ típ 2.', x: 26, y: 50 }
      ],
      takeaway: 'Típ 1 = Tự miễn phá hủy TB β (C-peptide ~0, dễ DKA, buộc tiêm Insulin). Típ 2 = Kháng Insulin (Insulin đầu cao rồi suy TB β dần, hay gặp HHS).'
    }
  ],

  // ========================================================================
  // BÀI 16: CHỨC NĂNG VẬN ĐỘNG & CẢM GIÁC TỦY GAI (Bài 42)
  // ========================================================================
  16: [
    {
      code: 'Hình 42.1',
      page: 'Bài 42 • tr.580',
      title: 'Cung Phản xạ Tủy 5 Thành phần (Định luật Bell–Magendie)',
      summary: 'Mọi phản xạ tủy đều đi theo quy luật 5 khâu bất biến từ Thụ thể → Rễ SAU cảm giác → Trung tâm Tủy xám → Rễ TRƯỚC vận động → Cơ quan đáp ứng (cơ/tuyến).',
      svg: {
        kind: 'flow',
        banner: 'Cung Phản xạ Tủy 5 Thành phần & Quy luật Rễ Sau (Cảm giác) – Rễ Trước (Vận động)',
        nodes: [
          { title: '1. Bộ phận Nhận cảm (Thụ thể)', sub: 'Thoi cơ, thụ thể đau da, thụ thể gân Golgi', tone: 'amber' },
          { title: '2. Sợi Hướng tâm → Rễ SAU', sub: 'Thân tế bào nằm ở HẠCH GAI rễ sau (Định luật Bell-Magendie)', tone: 'blue' },
          { title: '3. Chất xám Tủy sống (Synapse)', sub: 'Đơn synapse (căng cơ) hoặc Đa synapse qua neuron trung gian (rút lui)', tone: 'purple' },
          { title: '4. Sợi Ly tâm → Rễ TRƯỚC', sub: 'Neuron vận động α sừng trước tủy đi ra chi phối sợi cơ ngoại thoi', tone: 'red' },
          { title: '5. Cơ quan Đáp ứng (Cơ / Tuyến)', sub: 'Co cơ thực hiện phản xạ bảo vệ hoặc duy trì tư thế', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Định luật Bell–Magendie', desc: 'Rễ SAU (lưng) CHỈ dẫn truyền Cảm giác đi vào; Rễ TRƯỚC (bụng) CHỈ dẫn truyền Vận động đi ra. Cắt rễ sau = mất cảm giác & mất phản xạ; Cắt rễ trước = liệt mềm & mất phản xạ.', x: 40, y: 50 },
        { n: 2, title: 'Phản xạ Tủy vẫn tồn tại khi cắt ngang trên tủy (sau sốc tủy)', desc: 'Bản thân tủy gai đóng vai trò trung khu độc lập cho phản xạ căng cơ và phản xạ gấp rút lui.', x: 64, y: 50 }
      ],
      takeaway: 'Cung phản xạ 5 khâu: Thụ thể → Sợi cảm giác (Rễ SAU) → Trung tâm tủy → Sợi vận động α (Rễ TRƯỚC) → Cơ đáp ứng.'
    },
    {
      code: 'Hình 42.2',
      page: 'Bài 42 • tr.582',
      title: 'Phản xạ Gấp Rút lui (Flexor / Withdrawal) & Phản xạ Duỗi Chéo Hai bên',
      summary: 'Khi giẫm gai đau ở chân phải: phản xạ đa synapse đồng thời GẤP chân phải rút lên (cơ gấp co, cơ duỗi bên phải bị ức chế nghịch đảo) VÀ DUỖI thẳng chân trái đối diện để đỡ trọng lượng cơ thể không ngã!',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Cùng bên kích thích Đau (Chân Phải)', subtitle: 'Phản xạ Gấp (Flexor Reflex — Đa synapse)', tone: 'red', bullets: ['Kích thích đau (sợi Aδ/C) → nhiều Neuron trung gian hưng phấn & ức chế', 'Hưng phấn Neuron α cơ GẤP → Nhấc rút chân khỏi tác nhân đau', 'Ức chế tương hỗ (Reciprocal inhibition qua neuron Glycine) cơ DUỖI cùng bên'] },
          { title: 'Bên Đối diện (Chân Trái)', subtitle: 'Phản xạ Duỗi Chéo (Crossed-Extensor Reflex)', tone: 'blue', bullets: ['Sợi trung gian bắt chéo qua mép trắng trước sang sừng trước đối diện (trễ hơn 0,2–0,5s)', 'Hưng phấn cơ DUỖI chân trái & Ức chế cơ GẤP chân trái', 'Giúp trụ vững toàn bộ trọng tâm cơ thể trên 1 chân còn lại!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tính chất Thời gian Trễ & Hiện tượng Phóng thích sau (Afterdischarge)', desc: 'Vì đi qua nhiều synapse trung gian (mạch hồi tiếp reverberating), phản xạ gấp xảy ra chậm hơn phản xạ gân nhưng cơ giữ co kéo dài ngay cả sau khi ngừng kích thích đau!', x: 26, y: 40 },
        { n: 2, title: 'Tính chất ức chế tương hỗ', desc: 'Bắt buộc phải ức chế nhóm cơ đối vận thì động tác rút chân hoặc duỗi chân mới thực hiện trơn tru được.', x: 74, y: 40 }
      ],
      takeaway: 'Đau ở 1 chân → Cùng bên: Co GẤP, Giãn DUỖI (rút khỏi đau). Đối bên: Co DUỖI, Giãn GẤP (chống đỡ thân mình = Phản xạ duỗi chéo).'
    },
    {
      code: 'Hình 42.3',
      page: 'Bài 42 • tr.583',
      title: 'Nguyên lý Tập cộng Không gian (Spatial Facilitation) & Triệt bớt (Occlusion)',
      summary: 'Trong mạng lưới trung tâm thần kinh (Neuronal pool): khi kích thích nhẹ hai nhánh hướng tâm có vùng giao thoa dưới ngưỡng (Subliminal fringe), đáp ứng chung LỚN HƠN tổng hai đáp ứng riêng (Tập cộng); ngược lại nếu dùng kích thích tối đa chồng lên nhau, đáp ứng chung NHỎ HƠN tổng (Triệt bớt).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'B. Tập cộng dưới ngưỡng (Facilitation)', subtitle: 'A + B (hợp tác) > A + B (riêng lẻ)', tone: 'green', bullets: ['Nhánh A một mình chỉ kích nổ 2 neuron trung tâm + 2 neuron vùng rìa nhận EPSP dưới ngưỡng', 'Nhánh B cũng chỉ nổ 2 neuron + 2 neuron rìa dùng chung', 'Khi kích A + B CÙNG LÚC: vùng rìa giao thoa cộng gộp đủ EPSP → Bùng nổ thêm neuron mới! (VD: Nghiệm pháp Jendrassik!)'] },
          { title: 'C. Hiện tượng Triệt bớt (Occlusion)', subtitle: 'A + B (hợp tác) < A + B (riêng lẻ)', tone: 'amber', bullets: ['Khi hai dây hướng tâm đều phát xung MẠNH TỐI ĐA chia sẻ một nhóm neuron trung gian chung ở giữa', 'Các neuron dùng chung đã bắn hết công suất bởi A nên B kích thêm cũng không nhân đôi được', 'Tổng số neuron phát xung thực tế ít hơn phép cộng đại số!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Ứng dụng Tập cộng: Nghiệm pháp Jendrassik', desc: 'Khi gõ phản xạ gân gối khó ra, bảo bệnh nhân móc hai bàn tay kéo mạnh sang hai bên → tăng xung hướng tâm xuống tủy sống tập cộng ngưỡng giúp phản xạ gân gối bật rõ!', x: 26, y: 66 },
        { n: 2, title: 'Khác biệt cốt lõi giữa B và C', desc: 'Facilitation dùng vùng CHUNG nhận kích thích DƯỚI NGƯỠNG (cộng hưởng tăng); Occlusion dùng vùng CHUNG nhận kích thích TRÊN NGƯỠNG (bão hòa trùng lặp).', x: 74, y: 66 }
      ],
      takeaway: 'Cộng hợp dưới ngưỡng cho vùng giao thoa → Tập cộng (Facilitation: chung > tổng riêng). Chồng lấn trên ngưỡng vùng chung → Triệt bớt (Occlusion: chung < tổng riêng).'
    },
    {
      code: 'Hình 42.4',
      page: 'Bài 42 • tr.584',
      title: 'Cung Phản xạ Duỗi / Căng cơ Đơn Synapse (Thoi cơ Ia & Neuron Vận động α/γ)',
      summary: 'Phản xạ nhanh nhất cơ thể (Đơn synapse duy nhất, chỉ 1 bước truyền tủy): gõ búa vào gân làm kéo căng sợi cơ → Thoi cơ phát xung theo sợi Ia cực nhanh về sừng trước kích thích trực tiếp neuron α co đúng cơ đó lại (+ đồng thời ức chế cơ đối vận qua neuron Glycine).',
      imgSrc: 'assets/figures/fig_stretch_arc.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Thoi cơ (Muscle Spindle) — Đo CHIỀU DÀI & Tốc độ căng', desc: 'Nằm song song sợi cơ ngoại thoi, gồm sợi túi nhân (động + tĩnh) và chuỗi nhân; gửi tín hiệu hướng tâm qua sợi Ia (dẫn truyền nhanh nhất!).', x: 30, y: 40 },
        { n: 2, title: 'Đơn Synapse duy nhất tại Tủy & Ức chế nghịch đảo', desc: 'Sợi Ia tiếp hợp THẲNG vào neuron α cơ chủ vận (không qua neuron trung gian → cực nhanh ~0,7 ms trễ), đồng thời rẽ nhánh qua 1 neuron trung gian ức chế Glycine tắt cơ đối vận.', x: 72, y: 36 },
        { n: 3, title: 'Vai trò Đồng hoạt hóa α – γ (Alpha-Gamma Coactivation)', desc: 'Khi vỏ não ra lệnh α co ngắn cơ ngoại thoi, đồng thời sai γ co hai đầu thoi cơ giữ phần giữa thoi cơ luôn căng để không bị chùng mất cảm biến!', x: 46, y: 74 }
      ],
      takeaway: 'Phản xạ căng cơ / gân xương là ĐƠN SYNAPSE (Thoi cơ → sợi Ia → α co cơ chủ vận). Đối chiếu với Phản xạ Gân Golgi (sợi Ib → 2 synapse → GIÃN cơ bảo vệ khi quá tải lực!).'
    },
    {
      code: 'Hình 42.5',
      page: 'Bài 42 • tr.586',
      title: 'Các Đường Cảm giác Đi Lên & Sơ đồ Cắt ngang Tủy gai Cổ',
      summary: 'Hai hệ thống đường cảm giác chính khác hẳn về vị trí BẮT CHÉO: Hệ Cột sau – Liềm trong (Xúc giác tinh tế, Rung, Bản thể) đi thẳng lên HÀNH NÃO mới bắt chéo; Hệ Bó gai-đồi thị (Đau, Nhiệt, Thô sơ) bắt chéo NGAY TẠI TỦY GAI.',
      imgSrc: 'assets/figures/fig_spinal_tracts.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Cột sau (Bó Thon & Bó Chêm — Dorsal Columns)', desc: 'Chứa sợi Aβ to dẫn truyền Rung âm thoa, Vị trí khớp, Xúc giác tinh vi hai điểm. Đi CÙNG BÊN lên hết tủy gai tới nhân Thon/Chêm ở HÀNH NÃO mới bắt chéo sang bên kia!', x: 50, y: 22 },
        { n: 2, title: 'Hệ Bó Gai – Đồi thị trước-bên (Anterolateral / Spinothalamic)', desc: 'Chứa sợi Aδ/C dẫn ĐAU & NHIỆT (bên) và xúc giác thô (trước). Sợi cấp 1 vào sừng sau, tiếp hợp sợi cấp 2 rồi BẮT CHÉO NGAY qua mép trắng trước sang đối bên đi lên!', x: 26, y: 62 },
        { n: 3, title: 'Giải mã Hội chứng Cắt nửa tủy (Brown-Séquard)', desc: 'Bên tổn thương (cùng bên): Liệt vận động (Bó tháp đã bắt chéo ở hành não) + Mất cảm giác sâu/rung (Cột sau chưa bắt chéo). Bên ĐỐI DIỆN (dưới tổn thương 1–2 khoanh): Mất cảm giác Đau & Nhiệt (vì Gai-Đồi thị đã bắt chéo ngay dưới tủy)!', x: 74, y: 62 }
      ],
      takeaway: 'Cột sau (Sâu, Rung, Tinh tế): bắt chéo ở HÀNH NÃO. Bó Gai–Đồi thị (Đau, Nhiệt): bắt chéo ngay ở TỦY GAI → tạo tam chứng phân ly Brown-Séquard!'
    },
    {
      code: 'Hình 42.6',
      page: 'Bài 42 • tr.593',
      title: 'Các Đường Vận động Đi Xuống (Hệ Tháp & Các Bó Ngoại Tháp)',
      summary: 'Vận động chủ ý tinh vi đầu chi đi theo Hệ Tháp (Bó vỏ-gai bên 85–90% bắt chéo ở hành não & Bó vỏ-gai trước 10–15% đi thẳng); vận động tư thế, thăng bằng và phản xạ cổ đi theo các bó Ngoại tháp (Tiền đình-gai, Lưới-gai, Đỏ-gai).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Hệ Tháp (Vận động Tinh vi Chủ ý)', subtitle: 'Từ Vỏ não Vận động (Hồi trước trung tâm)', tone: 'red', bullets: ['Bó Vỏ–Gai BÊN (85–90% sợi): Bắt chéo tại tháp Hành não → điều khiển vận động tinh vi ngọn chi đối bên!', 'Bó Vỏ–Gai TRƯỚC (10–15% sợi): Đi thẳng xuống tủy cổ-ngực rồi mới bắt chéo điều hòa cơ trục thân hai bên'] },
          { title: 'Hệ Ngoại Tháp (Tư thế, Trương lực & Định hướng)', subtitle: 'Từ Thân não (Tiền đình, Nhân đỏ, Lưới, Mái)', tone: 'blue', bullets: ['Bó Tiền đình–Gai (Lateral): Tăng mạnh trương lực cơ DUỖI chống trọng lực', 'Bó Lưới–Gai cầu (tăng duỗi) vs Lưới–Gai hành (ức chế duỗi/tăng gấp)', 'Bó Đỏ–Gai (Rubrospinal): Tăng trương lực cơ GẤP chi trên (gặp trong gồng cứng mất vỏ!)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Gồng cứng Mất vỏ vs Mất não', desc: 'Tổn thương TRÊN nhân đỏ (Mất vỏ): Bó Đỏ-gai còn nguyên giữ tay GẤP, chân DUỖI. Tổn thương DƯỚI nhân đỏ (Mất não): Mất Đỏ-gai + Lưới-gai hành → Bó Tiền đình-gai thắng thế tuyệt đối làm CẢ TAY VÀ CHÂN DUỖI CỨNG!', x: 74, y: 68 },
        { n: 2, title: 'Dấu Babinski & Phản xạ gân khi Tổn thương Neuron Vận động Trên (UMN)', desc: 'Liệt CỨNG (tăng trương lực cơ kiểu dao nhíp), Tăng phản xạ gân xương (do mất phanh vỏ-lưới hành não xuống tủy) + Dấu Babinski (+)!', x: 26, y: 40 }
      ],
      takeaway: 'UMN (Bó tháp + vỏ-lưới) liệt cứng, tăng PX gân xương, Babinski (+). Tiền đình-gai = DUỖI mạnh; Đỏ-gai = GẤP tay (mất vỏ gấp tay, mất não duỗi tứ chi).'
    }
  ],

  // ========================================================================
  // BÀI 17: HỆ THẦN KINH TỰ CHỦ (Bài 51)
  // ========================================================================
  17: [
    {
      code: 'Hình 51.1',
      page: 'Bài 51 • tr.654',
      title: 'Giải phẫu Hệ Thần kinh Tự chủ: Phân khu Giao cảm (T1–L3) vs Đối giao cảm (III, VII, IX, X & S2–S4)',
      summary: 'Hệ Giao cảm xuất phát từ sừng bên tủy Ngực–Thắt lưng (T1–L2/L3) với sợi tiền hạch NGẮN – hậu hạch DÀI tỏa rộng toàn thân; Đối giao cảm xuất phát từ Sọ–Cùng (S2–S4) với sợi tiền hạch DÀI đi thẳng tới hạch nằm ngay cạnh/trong cơ quan đích.',
      imgSrc: 'assets/figures/fig_ans_system.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Giao cảm: T1–L2/L3 (Sợi Tiền hạch NGẮN, Hậu hạch DÀI)', desc: 'Chuỗi hạch cạnh sống (hạch sao, chuỗi giao cảm) và hạch trước sống (hạch tạng, MTTT, MTTD). Kích thích toàn thân theo đáp ứng "Chiến đấu hoặc Bỏ chạy".', x: 46, y: 44 },
        { n: 2, title: 'Tủy Thượng thận = Hạch Giao cảm Biến dạng!', desc: 'Sợi tiền hạch (tiết ACh lên thụ thể Nn) đi thẳng tới tế bào ưa crôm tủy thượng thận tiết 80% Adrenalin + 20% Noradrenalin thẳng vào máu!', x: 46, y: 66 },
        { n: 3, title: 'Đối giao cảm: Dây III, VII, IX, X (75%!) & Tủy cùng S2–S4', desc: 'Sợi tiền hạch RẤT DÀI dừng ngay ở thành cơ quan đích (hậu hạch CỰC NGẮN) giúp tác động khu trú chính xác ("Nghỉ ngơi & Tiêu hóa"). Dây X chi phối toàn bộ tạng ngực & bụng tới đại tràng góc lách.', x: 24, y: 24 }
      ],
      takeaway: 'Giao cảm: T1–L2 (tiền ngắn, hậu dài; trừ tủy thượng thận nhận thẳng tiền hạch ACh). Đối giao cảm: Dây III, VII, IX, X & S2–S4 (tiền dài, hậu ngắn).'
    },
    {
      code: 'Hình 51.2',
      page: 'Bài 51 • tr.655',
      title: 'Cung Phản xạ Tự chủ & Bản chất Chất dẫn truyền + Thụ thể Synapse',
      summary: 'MỌI sợi tiền hạch (cả Giao cảm lẫn Đối giao cảm lẫn Tủy thượng thận!) ĐỀU tiết Acetylcholin gắn thụ thể Nicotinic (NN) trên thân neuron hậu hạch; khác biệt nằm ở đầu tận hậu hạch: Đối giao cảm tiết ACh (Muscarinic), còn Giao cảm tiết Noradrenalin (α/β) — ngoại trừ tuyến mồ hôi!',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Cung Giao cảm (2 Neuron hoặc 1 qua Tủy TT)', subtitle: 'Tiền: ACh (NN) → Hậu: Noradrenalin (α/β)', tone: 'red', bullets: ['1. Tiền hạch (NGẮN): Tiết Acetylcholin → Thụ thể Nicotinic NN', '2. Hậu hạch (DÀI): Tiết NORADRENALIN → Thụ thể Adrenergic (α1, α2, β1, β2, β3)', 'NGOẠI LỆ QUAN TRỌNG: Sợi hậu hạch giao cảm tới TUYẾN MỒ HÔI lại tiết ACETYLCHOLIN gắn thụ thể Muscarinic M3!'] },
          { title: 'Cung Đối giao cảm (Luôn 2 Neuron tại chỗ)', subtitle: 'Tiền: ACh (NN) → Hậu: Acetylcholin (M1–M5)', tone: 'blue', bullets: ['1. Tiền hạch (DÀI): Tiết Acetylcholin → Thụ thể Nicotinic NN ở thành cơ quan', '2. Hậu hạch (CỰC NGẮN): Tiết ACETYLCHOLIN → Thụ thể Muscarinic (M1, M2 tim, M3 cơ trơn/tuyến)', 'LƯU Ý: Cơ vân vận động (Soma) chỉ có 1 neuron tiết ACh gắn thụ thể Nicotinic NM!'] }
        ]
      },
      pins: [
        { n: 1, title: 'Ngoại lệ Kinh điển Tuyến mồ hôi', desc: 'Dù thuộc hệ GIAO CẢM (T1–L2) nhưng sợi hậu hạch chi phối tuyến mồ hôi ngoại tiết dùng chất dẫn truyền ACETYLCHOLIN lên thụ thể Muscarinic! (Giải thích vì sao ngộ độc Atropin lại da KHÔ nóng đỏ chứ không vã mồ hôi!).', x: 26, y: 68 },
        { n: 2, title: 'Phân biệt nhanh 4 Thụ thể Adrenergic chính', desc: 'α1 (Gq: co mạch, co cơ tia giãn đồng tử, co thắt bàng quang); α2 (Gi: phanh tiền synapse); β1 (Gs: ↑ nhịp & co tim, ↑ tiết Renin); β2 (Gs: giãn phế quản, giãn mạch cơ, giãn tử cung).', x: 26, y: 38 }
      ],
      takeaway: 'Tất cả Hạch tự chủ = ACh/NN. Hậu hạch Đối GC = ACh/Muscarinic. Hậu hạch GC = Noradrenalin/(α,β) TRỪ Tuyến mồ hôi dùng ACh/Muscarinic!'
    },
    {
      code: 'Hình 51.3',
      page: 'Bài 51 • tr.658',
      title: 'Hiện tượng Tăng Nhạy cảm Sau Cắt Dây Thần kinh (Denervation Supersensitivity)',
      summary: 'Khi cắt đứt dây thần kinh chi phối một cơ quan tự chủ (ví dụ cắt hạch sao giao cảm hoặc cắt nhánh dây X), sau 1–2 tuần chính cơ quan đó phản ứng MẠNH BẤT THƯỜNG khi tiếp xúc lượng cực nhỏ hormon lưu hành trong máu.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian sau khi Cắt dây Hậu hạch Tự chủ (Ngày 0 → Ngày 21)',
        yLabel: 'Mức Độ Nhạy cảm của Cơ quan Đích với Chất dẫn truyền máu',
        xTicks: [
          { x: 15, label: 'Ngày 0 (Cắt dây)' },
          { x: 35, label: 'Ngày 3–7' },
          { x: 65, label: 'Ngày 14' },
          { x: 90, label: 'Ngày 21' }
        ],
        yTicks: [
          { y: 18, label: '1× (Bình thường)' },
          { y: 55, label: '5×' },
          { y: 88, label: '10–20× (Tăng vọt!)' }
        ],
        curves: [
          { name: 'Độ nhạy Cơ quan đích với Noradrenalin / ACh ngoại sinh', color: '#dc2626', pts: [[12, 18], [26, 28], [46, 58], [68, 84], [90, 88]] }
        ]
      },
      pins: [
        { n: 1, title: '2 Cơ chế phân tử gây Tăng Nhạy cảm sau cắt dây', desc: '(1) Điều hòa ngược lên (Up-regulation): tế bào đích thấy mất tín hiệu liền tổng hợp tăng vọt số lượng thụ thể α/β hay Muscarinic trên màng; (2) Sau cắt hậu hạch giao cảm còn mất protein NET tái thu hồi Noradrenalin!', x: 52, y: 40 },
        { n: 2, title: 'Mối nguy tương tự khi Ngừng Đột ngột Thuốc Chẹn Beta', desc: 'Dùng Propranolol kéo dài khiến tim tăng mật độ thụ thể β1 (Up-regulation); nếu bỏ thuốc đột ngột gây cơn nhịp nhanh, tăng huyết áp & đau thắt ngực dội ngược!', x: 76, y: 24 }
      ],
      takeaway: 'Mất kích thích thần kinh lâu ngày (hoặc dùng chẹn thụ thể kéo dài) làm tế bào tăng mật độ thụ thể (Up-regulation) → Tăng nhạy cảm (Denervation Supersensitivity).'
    },
    {
      code: 'Hình 51.4',
      page: 'Bài 51 • tr.660',
      title: 'Tận cùng Dạng Chuỗi Nốt Phồng (Varicosities) trên Cơ trơn & Cơ tim',
      summary: 'Khác với synap thần kinh-cơ vân đóng kín một điểm duy nhất, tận cùng sợi hậu hạch tự chủ chia nhánh lan tỏa mang hàng loạt nốt phồng ("chuỗi hạt") phóng thích chất dẫn truyền tràn vào khoảng kẽ chi phối hàng loạt tế bào cơ trơn cùng lúc.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 600, h: 95, label: 'Sợi Trục Hậu Hạch Tự Chủ Mang Chuỗi Nốt Phồng (Varicosities)', sub: 'Không phải khe synapse hẹp mà nhiều điểm phình chứa ty thể & túi ACh / Noradrenalin\nMột xung động dọc sợi trục kích hoạt phóng thích đồng thời ở hàng loạt nốt phồng!', tone: 'purple' },
          { x: 40, y: 175, w: 180, h: 110, label: 'Cơ Trơn Tạng 1', sub: 'Thụ thể M3 / α / β\nphân bố rải khắp màng', tone: 'blue' },
          { x: 250, y: 175, w: 180, h: 110, label: 'Cơ Trơn Tạng 2', sub: 'Nối với TB bên cạnh qua\nLiên kết khe (Gap junction)', tone: 'teal' },
          { x: 460, y: 175, w: 180, h: 110, label: 'Cơ Trơn Tạng 3', sub: 'Cùng nhận làn sóng truyền\ntin khuếch tán chậm bền', tone: 'green' }
        ],
        links: [
          { x1: 130, y1: 135, x2: 130, y2: 173, label: 'ACh / NE', color: '#9333ea' },
          { x1: 340, y1: 135, x2: 340, y2: 173, label: 'ACh / NE', color: '#9333ea' },
          { x1: 550, y1: 135, x2: 550, y2: 173, label: 'ACh / NE', color: '#9333ea' }
        ]
      },
      pins: [
        { n: 1, title: 'Sự khác biệt Synapse Soma (Vận động) vs Synapse Tự chủ (Nốt phồng)', desc: 'Thần kinh cơ vân: 1 tấm vận động khu trú cực nhanh (acetylcholinesterase phân hủy tức thì). Tự chủ: nốt phồng khuếch tán rộng rãi, tác dụng chậm hơn nhưng kéo dài và đồng bộ cả bó cơ trơn.', x: 50, y: 28 },
        { n: 2, title: 'Hai cách dọn dẹp chất dẫn truyền tại nốt phồng', desc: 'ACh bị men AChE phân hủy tại khe; ngược lại Noradrenalin chủ yếu được BƠM TÁI THU HỒI ngược vào nốt phồng qua kênh NET (đích ức chế của Cocain & thuốc chống trầm cảm 3 vòng!).', x: 50, y: 74 }
      ],
      takeaway: 'Sợi tự chủ dùng chuỗi Nốt phồng (Varicosities) phóng thích ACh/NE rộng khắp cơ trơn & cơ tim. NE kết thúc tác dụng chủ yếu nhờ tái thu hồi (NET).'
    }
  ]
};
