// Lessons 1-6 Textbook Figures & Annotated Medical Schemas (`1. SÁCH SINH LÝ 2025.pdf`)
window.DIAGRAMS_PART1 = {
  // ========================================================================
  // BÀI 1: SINH LÝ MÁU - HỒNG CẦU, HEMOGLOBIN & NHÓM MÁU (Bài 2 + Bài 5)
  // ========================================================================
  1: [
    {
      code: 'Hình 2.1',
      page: 'Bài 2 • tr.9',
      title: 'Hình dạng & Kích thước Hồng cầu trưởng thành',
      summary: 'Hồng cầu là đĩa lõm hai mặt, không nhân, giúp tối đa hóa diện tích tiếp xúc khuếch tán khí O2/CO2 và biến dạng dẻo dai khi lách qua mao mạch hẹp.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Nhìn từ mặt trên (Đĩa tròn)', subtitle: 'Đường kính ~7,5 µm', tone: 'red', bullets: ['Hình tròn đều, phần trung tâm nhạt màu hơn vùng rìa do lõm hai mặt', 'Diện tích bề mặt lớn (~135 µm²) tăng 20–30% so với hình cầu cùng thể tích', 'Không còn nhân và ty thể → không tự tiêu thụ O2 đang vận chuyển'] },
          { title: 'Thiết diện nhìn nghiêng (Đĩa lõm)', subtitle: 'Dày rìa 2,0 µm • Tâm 1,0 µm', tone: 'blue', bullets: ['Khoảng cách khuếch tán O2 từ màng tới tâm Hb luôn ngắn tối đa', 'Bộ khung màng Spectrin - Actin giúp gấp khúc qua mao mạch đường kính 3 µm', 'Thể tích trung bình MCV ~ 80–100 fL; số lượng 4,2–5,5 triệu/µL'] }
        ]
      },
      pins: [
        { n: 1, title: 'Đường kính 7,5 µm', desc: 'Kích thước chuẩn hồng cầu trưởng thành bình thường (normocyte), lớn hơn đường kính nhiều mao mạch ngoại vi.', x: 26, y: 26 },
        { n: 2, title: 'Độ dày rìa 2,0 µm & lõi 1,0 µm', desc: 'Lõi mỏng 1 µm ở giữa tạo vùng sáng trung tâm trên phết máu ngoại biên và rút ngắn quãng đường khuếch tán khí.', x: 74, y: 26 },
        { n: 3, title: 'Khả năng biến dạng', desc: 'Nhờ tỷ lệ diện tích/thể tích cao và khung Spectrin đàn hồi, hồng cầu gập hình dù chui qua khe lách 3 µm.', x: 74, y: 66 }
      ],
      takeaway: 'Cấu trúc đĩa lõm hai mặt giúp tăng diện tích trao đổi khí, rút ngắn đường khuếch tán và biến dạng qua mao mạch mà không vỡ.'
    },
    {
      code: 'Hình 2.1b (Bổ sung)',
      page: 'Liên hệ Bài 2 • tr.10',
      title: 'Đáp ứng Hồng cầu trong các dung dịch Nhược trương – Đẳng trương –Ưu trương',
      summary: 'Minh họa sức bền thẩm thấu màng hồng cầu khi đặt trong môi trường có áp suất thẩm thấu khác nhau (NaCl 0,9% là đẳng trương).',
      imgSrc: 'assets/figures/fig_rbc_osmosis.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Ưu trương (Hypertonic)', desc: 'Nước từ hồng cầu thoát ra ngoài theo bậc thang thẩm thấu → hồng cầu teo nhỏ, bề mặt nổi gai (crenation).', x: 20, y: 42 },
        { n: 2, title: 'Đẳng trương (Isotonic - NaCl 0,9%)', desc: 'Áp suất thẩm thấu trong và ngoài cân bằng (~290 mOsm/L), lượng nước ra vào bằng nhau → giữ nguyên đĩa lõm 2 mặt.', x: 50, y: 42 },
        { n: 3, title: 'Nhược trương (Hypotonic)', desc: 'Nước ồ ạt đi vào hồng cầu làm tế bào trương phồng thành hình cầu; dưới ngưỡng NaCl 0,34–0,46% sẽ vỡ (tan máu thẩm thấu).', x: 80, y: 42 }
      ],
      takeaway: 'Thử nghiệm sức bền hồng cầu: tan máu bắt đầu quanh NaCl 0,46% và tan hoàn toàn ở ~0,34%.'
    },
    {
      code: 'Hình 2.2',
      page: 'Bài 2 • tr.13',
      title: 'Tương tác Hem với Oxy & Sinh tổng hợp Hemoglobin',
      summary: 'Quá trình tạo Hb diễn ra từ giai đoạn tiền nguyên hồng cầu đến hồng cầu lưới: tổng hợp nhân Protoporphyrin IX gắn Fe²⁺ tạo Hem rồi kết hợp chuỗi Globin.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi sinh tổng hợp Hem và Hemoglobin tại Tủy xương',
        nodes: [
          { title: '2 Succinyl-CoA + 2 Glycin', sub: 'Xúc tác ALA synthase (Vit B6)', tone: 'amber', edge: 'Ty thể' },
          { title: '4 vòng Pyrrole', sub: 'Porphobilinogen', tone: 'blue' },
          { title: 'Protoporphyrin IX', sub: 'Vòng porphyrin hoàn chỉnh', tone: 'purple' },
          { title: 'Nhân Hem (+ Fe²⁺)', sub: 'Gắn sắt hóa trị II ở ty thể', tone: 'red' },
          { title: '4 Hem + 4 Globin (2α,2β)', sub: 'Tại bào tương → HbA (97%)', tone: 'green' },
          { title: 'Gắn thuận nghịch O2', sub: 'Fe²⁺ giữ nguyên hóa trị II (Oxyhemoglobin)', tone: 'teal' }
        ]
      },
      pins: [
        { n: 1, title: 'Bước giới hạn tốc độ', desc: 'Succinyl-CoA + Glycin → δ-ALA cần đồng yếu tố Pyridoxal phosphate (Vitamin B6).', x: 20, y: 36 },
        { n: 2, title: 'Gắn Fe²⁺ (sắt nhị)', desc: 'Chỉ sắt hóa trị +2 mới gắn thuận nghịch được O2; nếu bị oxy hóa thành Fe³⁺ sẽ tạo Methemoglobin mất khả năng nhả O2.', x: 75, y: 66 },
        { n: 3, title: 'Cộng tác đồng lập thể', desc: 'Một phân tử Hb mang 4 nhóm Hem → gắn tối đa 4 phân tử O2 (tương ứng 1,34–1,39 mL O2 / gam Hb).', x: 22, y: 66 }
      ],
      takeaway: 'O2 gắn vào Fe²⁺ của Hem bằng liên kết phối trí thuận nghịch (oxygenation), KHÔNG oxy hóa sắt thành Fe³⁺.'
    },
    {
      code: 'Hình 2.3',
      page: 'Bài 2 • tr.13',
      title: 'Cấu trúc phân tử Hemoglobin (a: Tứ phân tử Globin; b: Nhóm Hem)',
      summary: 'Phân tử HbA trưởng thành gồm 4 tiểu đơn vị (2 chuỗi α + 2 chuỗi β), mỗi chuỗi ôm gọn 1 nhân Hem chứa Fe²⁺ ở trung tâm.',
      imgSrc: 'assets/figures/fig_hemoglobin.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Chuỗi α và chuỗi β Globin', desc: 'HbA người trưởng thành (96–98%) cấu tạo bởi α2β2; HbF bào thai là α2γ2 có ái lực O2 cao hơn giúp kéo O2 qua nhau thai.', x: 24, y: 36 },
        { n: 2, title: 'Nhân Hem gắn nguyên tử Fe²⁺', desc: 'Mỗi vòng porphyrin phẳng chứa 1 Fe²⁺ ở giữa, liên kết với Histidine gần của chuỗi globin và vị trí thứ 6 gắn O2.', x: 70, y: 52 },
        { n: 3, title: 'Vai trò Histidine trong đệm pH', desc: 'Chuỗi globin giàu Histidine giúp Hb đảm nhận ~70% khả năng đệm toàn phần của máu toàn phần.', x: 35, y: 74 }
      ],
      takeaway: '1 phân tử Hb = 4 Globin + 4 Hem (4 Fe²⁺) → chở tối đa 4 phân tử O2. HbF = α2γ2, HbA = α2β2.'
    },
    {
      code: 'Hình 2.4',
      page: 'Bài 2 • tr.15',
      title: 'Sự thoái biến Hemoglobin sau 120 ngày',
      summary: 'Hồng cầu già bị đại thực bào hệ võng nội mô (lách, gan, tủy xương) thực bào; Fe²⁺ và acid amin được tái sử dụng, còn vòng porphyrin thải qua mật và nước tiểu.',
      svg: {
        kind: 'flow',
        banner: 'Con đường thoái biến Hb ở Lách → Gan → Ruột → Thận',
        nodes: [
          { title: 'Hồng cầu già (~120 ngày)', sub: 'Đại thực bào lách thực bào', tone: 'red' },
          { title: 'Tách Globin & Fe²⁺', sub: 'AA tái tạo protein; Fe²⁺ → Ferritin/Transferrin', tone: 'blue' },
          { title: 'Vòng Porphyrin → Biliverdin', sub: 'Qua Vecdo-Hb (xanh lục)', tone: 'teal' },
          { title: 'Bilirubin tự do (gián tiếp)', sub: 'Gắn Albumin vào máu → tới Gan', tone: 'amber' },
          { title: 'Bilirubin liên hợp (trực tiếp)', sub: 'Gan gắn Acid Glucuronic → xuống Mật/Ruột', tone: 'purple' },
          { title: 'Urobilinogen → Stercobilin/Urobilin', sub: 'Tạo màu vàng phân & nước tiểu', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tiết kiệm Sắt sinh lý', desc: 'Gần như toàn bộ Fe²⁺ được Transferrin vận chuyển về tủy xương hoặc dự trữ dưới dạng Ferritin/Hemosiderin.', x: 48, y: 34 },
        { n: 2, title: 'Phân biệt Bilirubin', desc: 'Bilirubin tự do không tan trong nước, không qua lọc cầu thận (tăng khi tan máu). Gan liên hợp thành Bilirubin trực tiếp tan trong nước.', x: 52, y: 68 },
        { n: 3, title: 'Chu trình ruột – gan', desc: 'Tại ruột, vi khuẩn chuyển bilirubin thành urobilinogen: phần lớn thành stercobilin theo phân, phần nhỏ tái hấp thu thải urobilin qua thận.', x: 20, y: 68 }
      ],
      takeaway: 'Tan máu trước gan tăng Bilirubin gián tiếp (tự do); tắc mật sau gan tăng Bilirubin trực tiếp (liên hợp).'
    },
    {
      code: 'Hình 2.5',
      page: 'Bài 2 • tr.16',
      title: 'Dạng Acid và Dạng Kiềm của nhân Imidazol Histidine (Hệ đệm Hb)',
      summary: 'Nhân Imidazol của Histidine trên chuỗi Globin nhận H⁺ tạo dạng acid (HHb) ở mô và nhả H⁺ tạo dạng kiềm (Hb⁻) ở phổi nhờ pK gần 7,4.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Dạng Kiềm (Deoxy-Hb⁻ / Oxy-Hb⁻)', subtitle: 'Chưa proton hóa trên Nitơ imidazol', tone: 'blue', bullets: ['Nhân Imidazol có pK ~ 6,8–7,4 (thích hợp nhất tại pH máu 7,35–7,45)', 'Ở mao mạch mô: khi HbO2 nhả O2 thành Deoxy-Hb, tính kiềm tăng mạnh (pK tăng)', 'Deoxy-Hb dễ dàng thu nhận ion H⁺ sinh ra từ H2CO3 → giữ pH máu tĩnh mạch ổn định'] },
          { title: 'Dạng Acid (HHb / HHbO2)', subtitle: 'Đã nhận H⁺ trên vòng Imidazol', tone: 'red', bullets: ['Ở mao mạch phổi: khi O2 gắn vào Hb tạo HbO2, tính acid tăng (pK giảm)', 'HHbO2 giải phóng H⁺ → kết hợp HCO3⁻ → H2CO3 → CO2 thở ra ngoài', 'Hiệu ứng Bohr – Haldane phối hợp giúp đệm H⁺ và đẩy CO2 hiệu quả'] }
        ]
      },
      pins: [
        { n: 1, title: 'pK động lực học', desc: 'Hb khử (Deoxy-Hb) là acid yếu hơn HbO2 → khả năng nhận H⁺ ở mô rất cao.', x: 27, y: 40 },
        { n: 2, title: 'Tỷ trọng hệ đệm Hb', desc: 'Vì nồng độ Hb máu cao (~15 g/dL) và giàu Histidine, Hb đóng góp đệm nội bào chủ lực cho H2CO3.', x: 74, y: 40 }
      ],
      takeaway: 'Deoxy-Hb có tính base mạnh hơn Oxy-Hb → ở mô vừa nhả O2 vừa bắt H⁺ giúp pH máu không tụt mạnh.'
    },
    {
      code: 'Hình 2.6',
      page: 'Bài 2 • tr.18',
      title: 'Hấp thu Vitamin B12 và Yếu tố nội tại (Intrinsic Factor)',
      summary: 'Vitamin B12 muốn hấp thu tại hồi tràng bắt buộc phải gắn với Yếu tố nội tại (IF) do tế bào thành dạ dày tiết ra.',
      svg: {
        kind: 'flow',
        banner: 'Hành trình Vitamin B12: Dạ dày → Hồi tràng → Tủy xương',
        nodes: [
          { title: 'Dạ dày (Tế bào thành)', sub: 'Tiết HCl tách B12 khỏi đạm & tiết Yếu tố nội tại (IF)', tone: 'amber' },
          { title: 'Phức hợp B12 - IF', sub: 'Chống lại phân hủy bởi men tụy ở tá tràng', tone: 'purple' },
          { title: 'Hồi tràng đoạn cuối', sub: 'Thụ thể Cubilin hấp thu phức hợp B12-IF bằng ẩm bào', tone: 'blue' },
          { title: 'Máu (Transcobalamin II)', sub: 'Dự trữ tại Gan (đủ dùng 3–5 năm) & tới Tủy xương', tone: 'green' },
          { title: 'Tổng hợp DNA nguyên hồng cầu', sub: 'Cùng Acid Folic tạo Thymidylate', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Tế bào thành (viền) dạ dày', desc: 'Cắt toàn bộ dạ dày hoặc viêm teo niêm mạc dạ dày tự miễn gây mất IF → thiếu máu ác tính Biermer.', x: 18, y: 40 },
        { n: 2, title: 'Vị trí hấp thu đặc hiệu', desc: 'Phức hợp B12-IF CHỈ được hấp thu đặc hiệu ở hồi tràng đoạn cuối; cắt hồi tràng gây thiếu máu hồng cầu to.', x: 54, y: 68 },
        { n: 3, title: 'Thiếu B12 / Acid Folic', desc: 'Làm rối loạn tổng hợp DNA → nhân không chia đôi kịp trong khi bào tương vẫn lớn → hồng cầu to khổng lồ (megaloblast).', x: 82, y: 68 }
      ],
      takeaway: 'Yếu tố nội tại tiết ở DẠ DÀY (tế bào thành), nhưng phức hợp B12–IF hấp thu ở HỒI TRÀNG.'
    },
    {
      code: 'Hình 2.7',
      page: 'Bài 2 • tr.19',
      title: 'Erythropoietin (EPO) điều hòa sản xuất Hồng cầu theo cơ chế Feedback âm',
      summary: 'Bất kỳ nguyên nhân nào làm giảm cung cấp O2 cho mô đều kích thích thận tiết EPO thúc đẩy tủy xương tăng sinh dòng hồng cầu.',
      svg: {
        kind: 'cycle',
        centerTitle: 'Cân bằng O2 Mô',
        centerSub: 'Feedback âm tính',
        centerTone: 'teal',
        steps: [
          { label: 'Giảm O2 tới Thận (Hypoxia)', detail: 'Lên núi cao, mất máu, suy tim, COPD', tone: 'red' },
          { label: 'Thận tăng tiết EPO (85–90%)', detail: 'Tế bào kẽ quanh ống thận (Gan 10–15%)', tone: 'amber' },
          { label: 'Tủy xương tăng sinh', detail: 'Biệt hóa tiền nguyên hồng cầu & phóng thích hồng cầu lưới', tone: 'purple' },
          { label: 'Tăng Hồng cầu & Dung tích O2', detail: 'Cải thiện O2 mô → ức chế ngược giảm tiết EPO', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Thụ thể cảm nhận O2 ở Thận', desc: 'Khi thiếu O2, yếu tố HIF-1α hoạt hóa gen tổng hợp Erythropoietin tại thận (chiếm 85–90% EPO cơ thể).', x: 76, y: 48 },
        { n: 2, title: 'Đáp ứng thời gian thực', desc: 'EPO tăng trong máu sau vài giờ thiếu O2, nhưng đỉnh hồng cầu lưới tăng rõ sau khoảng 4–5 ngày.', x: 50, y: 80 },
        { n: 3, title: 'Ứng dụng suy thận mạn', desc: 'Bệnh nhân suy thận mạn mất tế bào tiết EPO → thiếu máu đẳng sắc hồng cầu bình thường, phải tiêm EPO tái tổ hợp.', x: 22, y: 48 }
      ],
      takeaway: 'Yếu tố điều hòa trực tiếp sản sinh hồng cầu là NỒNG ĐỘ O2 MÔ thông qua hormon Erythropoietin (90% từ thận).'
    },
    {
      code: 'Hình 5.1',
      page: 'Bài 5 • tr.47',
      title: 'Biểu đồ thay đổi nồng độ Kháng thể tự nhiên Anti-A, Anti-B theo tuổi',
      summary: 'Trẻ sơ sinh hầu như chưa có kháng thể anti-A, anti-B (ngoại trừ IgG mẹ truyền sang); kháng thể tăng dần sau 2–8 tháng và đạt đỉnh ở 8–10 tuổi.',
      svg: {
        kind: 'curve',
        xLabel: 'Tuổi (từ sơ sinh đến người già)',
        yLabel: 'Nồng độ Kháng thể ABO (%)',
        xTicks: [
          { x: 5, label: 'Sơ sinh' },
          { x: 25, label: '2 tuổi' },
          { x: 45, label: '8-10 tuổi' },
          { x: 70, label: 'Trưởng thành' },
          { x: 95, label: '80 tuổi' }
        ],
        yTicks: [
          { y: 10, label: '0%' },
          { y: 50, label: '50%' },
          { y: 90, label: '100%' }
        ],
        vLines: [
          { x: 45, label: 'Đỉnh 8–10 tuổi (100%)', color: '#dc2626' }
        ],
        curves: [
          { name: 'Anti-A & Anti-B tự nhiên (IgM)', color: '#2563eb', pts: [[5, 8], [15, 38], [28, 68], [45, 92], [65, 80], [92, 52]] }
        ]
      },
      pins: [
        { n: 1, title: 'Lúc mới sinh ~ 0', desc: 'Vi khuẩn chí đường ruột & thức ăn kích thích miễn dịch sau sinh mới tạo kháng thể tự nhiên IgM đặc hiệu.', x: 18, y: 74 },
        { n: 2, title: 'Đạt đỉnh lúc 8–10 tuổi', desc: 'Nồng độ Anti-A, Anti-B đạt tối đa (~100%) ở 8–10 tuổi rồi giảm từ từ theo tuổi già.', x: 48, y: 20 },
        { n: 3, title: 'Bản chất kháng thể ABO', desc: 'Chủ yếu là IgM không qua được nhau thai (trừ nhóm O có thể có một ít IgG anti-A/B gây vàng da tan máu sơ sinh).', x: 76, y: 36 }
      ],
      takeaway: 'Kháng thể ABO tự nhiên đạt đỉnh ở 8–10 tuổi, bản chất chủ yếu là IgM, hình thành nhờ tiếp xúc kháng nguyên vi khuẩn đường ruột.'
    },
    {
      code: 'Hình 5.2',
      page: 'Bài 5 • tr.50',
      title: 'Nguyên tắc Truyền máu & Tương hợp Hệ ABO',
      summary: 'Nguyên tắc cốt lõi: Kháng nguyên (màng hồng cầu người CHO) KHÔNG bị ngưng kết bởi Kháng thể (huyết tương người NHẬN).',
      imgSrc: 'assets/figures/fig_abo_blood.png',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Nhóm O (Không KN A/B)', desc: 'Màng HC không có kháng nguyên A, B nên có thể truyền khối HC cho O, A, B, AB (người cho phổ thông khi truyền khối HC).', x: 50, y: 24 },
        { n: 2, title: 'Nhóm A (KN A, KT anti-B) & B (KN B, KT anti-A)', desc: 'Chỉ truyền cùng nhóm hoặc nhận HC từ nhóm O; không được cho chéo A ↔ B vì gây tan máu cấp.', x: 24, y: 54 },
        { n: 3, title: 'Nhóm AB (Không KT trong huyết tương)', desc: 'Huyết tương không có anti-A, anti-B → nhận được khối HC từ O, A, B, AB (người nhận phổ thông), nhưng ưu tiên tuyệt đối cùng nhóm.', x: 50, y: 80 }
      ],
      takeaway: 'Ưu tiên số 1: Truyền CÙNG NHÓM MÁU. Trong cấp cứu tối khẩn chỉ truyền khối hồng cầu O (không truyền máu toàn phần khác nhóm).'
    }
  ],

  // ========================================================================
  // BÀI 2: SINH LÝ CẦM MÁU & ĐÔNG MÁU (Bài 4)
  // ========================================================================
  2: [
    {
      code: 'Hình 4.1',
      page: 'Bài 4 • tr.36',
      title: 'Sơ đồ tóm tắt Cầm máu tức thời (Giai đoạn Thành mạch & Tiểu cầu)',
      summary: 'Khi thành mạch tổn thương, co mạch phản xạ phối hợp kết dính – hoạt hóa – kết tụ tiểu cầu tạo nút chặn tiểu cầu tạm thời trong vài phút.',
      svg: {
        kind: 'flow',
        banner: 'Cơ chế Cầm máu Sơ khởi (Primary Hemostasis)',
        nodes: [
          { title: 'Tổn thương Thành mạch', sub: 'Bộc lộ collagen dưới nội mạc & vWF', tone: 'red' },
          { title: 'Co mạch tại chỗ', sub: 'Phản xạ thần kinh + co cơ tại chỗ + Thromboxan A2, Serotonin', tone: 'amber' },
          { title: 'Kết dính Tiểu cầu', sub: 'GpIb gắn vWF – Collagen dưới nội mạc', tone: 'blue' },
          { title: 'Hoạt hóa & Phóng thích hạt', sub: 'ADP, Thromboxan A2, Serotonin, Yếu tố 3 & 4 TC', tone: 'purple' },
          { title: 'Kết tụ Tiểu cầu (GpIIb/IIIa)', sub: 'Cầu nối Fibrinogen → Nút chặn tiểu cầu bịt vết thương', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Yếu tố von Willebrand (vWF)', desc: 'Cầu nối giữa Collagen thành mạch và thụ thể GpIb tiểu cầu; thiếu vWF gây kéo dài thời gian máu chảy (TS).', x: 50, y: 38 },
        { n: 2, title: 'ADP & Thromboxan A2', desc: 'Khuếch đại kết tụ tiểu cầu hàng loạt (đích tác dụng của Clopidogrel ức chế P2Y12 và Aspirin ức chế COX-1 tạo TXA2).', x: 75, y: 66 },
        { n: 3, title: 'Nút chặn tiểu cầu bở', desc: 'Giúp cầm máu tức thời ở mao mạch/tiểu mạch nhỏ, nhưng cần mạng lưới Fibrin từ giai đoạn đông máu để gia cố bền vững.', x: 25, y: 66 }
      ],
      takeaway: 'Cầm máu sơ khởi tạo nút tiểu cầu (đánh giá bằng thời gian máu chảy TS & đếm tiểu cầu), khác với đông máu huyết tương.'
    },
    {
      code: 'Hình 4.2',
      page: 'Bài 4 • tr.39',
      title: 'Con đường thành lập Prothrombinase Ngoại sinh',
      summary: 'Kích hoạt nhanh chỉ trong 12–15 giây nhờ Yếu tố mô (III - Tissue Factor) phóng thích từ mô tổn thương kết hợp Yếu tố VII, Ca²⁺ và Yếu tố V.',
      svg: {
        kind: 'flow',
        banner: 'Con đường Ngoại sinh → Prothrombinase (Đánh giá bằng xét nghiệm PT / TQ)',
        nodes: [
          { title: 'Mô tổn thương', sub: 'Phóng thích Yếu tố mô III (Thromboplastin mô) & Phospholipid', tone: 'red' },
          { title: 'Hoạt hóa Yếu tố VII → VIIa', sub: 'Phức hợp III – VIIa – Ca²⁺', tone: 'amber' },
          { title: 'Hoạt hóa Yếu tố X → Xa', sub: 'Bước hội tụ vào con đường chung', tone: 'purple' },
          { title: 'Phức hợp Prothrombinase ngoại sinh', sub: 'Xa + Va + Ca²⁺ + Phospholipid mô', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Khởi phát bởi Yếu tố III (TF)', desc: 'Không cần tiếp xúc bề mặt lạ như đường nội sinh; TF là protein xuyên màng tế bào dưới nội mạc.', x: 18, y: 50 },
        { n: 2, title: 'Yếu tố VII phụ thuộc Vitamin K', desc: 'Thời gian bán hủy ngắn nhất (~4–6 giờ) nên PT/INR tăng sớm nhất khi dùng thuốc kháng Vitamin K (Warfarin) hoặc suy gan.', x: 42, y: 50 },
        { n: 3, title: 'Tốc độ cực nhanh', desc: 'Đông máu ngoại sinh tạo Prothrombinase trong ~15 giây (so với 3–6 phút của con đường nội sinh).', x: 82, y: 50 }
      ],
      takeaway: 'Con đường Ngoại sinh (TF + VII + X + V + II + I) đánh giá qua PT (INR), cực nhạy với thiếu Vitamin K và suy gan sớm.'
    },
    {
      code: 'Hình 4.3',
      page: 'Bài 4 • tr.40',
      title: 'Cơ chế Đông máu bất thường trong lòng mạch (Huyết khối)',
      summary: 'Tam giác Virchow: ứ trệ tuần hoàn, tổn thương nội mạc mạch máu (viêm, xơ vữa) và tăng đông khởi phát cục huyết khối bít tắc mạch.',
      svg: {
        kind: 'flow',
        banner: 'Huyết khối nội mạch (Thrombosis) — Hậu quả Tam giác Virchow',
        nodes: [
          { title: 'Yếu tố khởi phát (Tam giác Virchow)', sub: 'Máu ứ đọng (suy tim, bất động) / Viêm mạch / Xơ vữa ĐM', tone: 'amber' },
          { title: 'Tổn thương tế bào Nội mạc', sub: 'Mất lớp màng nhầy bảo vệ & giảm NO, PGI2, Heparan sulfat', tone: 'red' },
          { title: 'Bộc lộ Collagen & Thromboplastin mô', sub: 'Hoạt hóa đồng thời XII nội sinh, tiểu cầu & III ngoại sinh', tone: 'purple' },
          { title: 'Hình thành Cục huyết khối (Thrombus)', sub: 'Gây tắc động mạch (nhồi máu) hoặc bong thành thuyên tắc phổi', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Máu ứ đọng (Stasis)', desc: 'Chảy chậm khiến các yếu tố đông máu đã hoạt hóa không bị gan lọc kịp và tụ lại vượt ngưỡng chất chống đông tự nhiên.', x: 18, y: 50 },
        { n: 2, title: 'Mất tính trơn nội mạc', desc: 'Nội mạc bình thường tích điện âm và có lớp Glycocalyx đẩy tiểu cầu + yếu tố XII; mảng xơ vữa vỡ phá hủy hàng rào này.', x: 45, y: 50 },
        { n: 3, title: 'Thuyên tắc (Embolism)', desc: 'Huyết khối tĩnh mạch sâu chi dưới (DVT) trôi về tim phải gây thuyên tắc động mạch phổi nguy kịch.', x: 82, y: 50 }
      ],
      takeaway: 'Máu không đông trong mạch bình thường nhờ nội mạc trơn láng tích điện âm, dòng chảy liên tục và các chất chống đông tự nhiên (AT-III, Protein C/S).'
    },
    {
      code: 'Hình 4.4',
      page: 'Bài 4 • tr.41',
      title: 'Sơ đồ Đông máu toàn phần (Nội sinh – Ngoại sinh – Con đường chung)',
      summary: 'Mạng lưới thác enzyme từ XII → XI → IX → VIII (nội sinh) và III → VII (ngoại sinh) cùng hội tụ hoạt hóa yếu tố X → Thrombin → mạng lưới Fibrin bền vững.',
      imgSrc: 'assets/figures/fig_coagulation.png',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Con đường Nội sinh (XII → XI → IX + VIII)', desc: 'Khởi phát khi tiếp xúc collagen hoặc thủy tinh; đánh giá bằng aPTT (TCK). Thiếu VIII gây Hemophilia A, thiếu IX gây Hemophilia B.', x: 25, y: 36 },
        { n: 2, title: 'Con đường Ngoại sinh (TF + VII)', desc: 'Khởi phát nhanh từ mô tổn thương; đánh giá bằng PT/INR.', x: 75, y: 36 },
        { n: 3, title: 'Con đường chung (X + V → Thrombin → Fibrin)', desc: 'Thrombin (IIa) cắt Fibrinogen (I) thành sợi Fibrin đơn phân rồi nhờ Yếu tố XIII + Ca²⁺ nối chéo tạo cục máu đông không tan.', x: 50, y: 74 }
      ],
      takeaway: 'Ion Ca²⁺ (yếu tố IV) tham gia hầu hết các bước đông máu (trừ hoạt hóa XII, XI). Chống đông ống xét nghiệm bằng Citrat/EDTA là nhờ gắp Ca²⁺.'
    },
    {
      code: 'Hình 4.5',
      page: 'Bài 4 • tr.42',
      title: 'Sơ đồ Tan cục máu đông (Hệ Tiêu sợi huyết Fibrinolysis)',
      summary: 'Khi thành mạch đã liền sẹo, Plasminogen gắn sẵn trong cục máu đông được tPA hoạt hóa thành Plasmin cắt nát sợi Fibrin thành mảnh tan (D-dimer, FDP).',
      svg: {
        kind: 'flow',
        banner: 'Hệ Tiêu sợi huyết tái thông lòng mạch',
        nodes: [
          { title: 'Chất hoạt hóa Plasminogen', sub: 'tPA (từ nội mạc), Urokinase (thận), Streptokinase, Thrombin, XIIa', tone: 'blue' },
          { title: 'Plasminogen → Plasmin', sub: 'Tiền enzyme trong huyết tương bị cắt thành men tiêu protein mạnh', tone: 'purple' },
          { title: 'Cắt sợi Fibrin (và V, VIII, Fibrinogen)', sub: 'Giải phóng sản phẩm thoái biến FDP & D-dimer', tone: 'green' },
          { title: 'Tái thông lòng mạch', sub: 'Đại thực bào dọn dẹp phần mảnh vỡ', tone: 'teal' }
        ]
      },
      pins: [
        { n: 1, title: 'tPA nội mô & thuốc tiêu sợi huyết', desc: 'Tế bào nội mạc mạch máu phóng thích chậm tPA (hoặc dùng Alteplase đường TM trong đột quỵ thiếu máu não sớm < 4,5h).', x: 18, y: 50 },
        { n: 2, title: 'Xét nghiệm D-dimer', desc: 'Khi Plasmin cắt sợi Fibrin đã liên kết chéo bởi XIIIa sẽ sinh ra D-dimer; tăng mạnh trong DVT, thuyên tắc phổi, DIC.', x: 64, y: 50 },
        { n: 3, title: 'Chất ức chế tiêu sợi huyết', desc: 'Tranexamic acid ức chế gắn Plasminogen lên Fibrin, dùng cầm máu trong chấn thương nặng hoặc rong kinh.', x: 85, y: 50 }
      ],
      takeaway: 'Cân bằng Đông máu (Thrombin) ↔ Tiêu sợi huyết (Plasmin) giúp vừa cầm máu kịp thời vừa tránh tắc mạch vĩnh viễn.'
    }
  ],

  // ========================================================================
  // BÀI 3: ĐIỆN SINH LÝ TIM & ĐIỆN TÂM ĐỒ (Bài 6)
  // ========================================================================
  3: [
    {
      code: 'Hình 6.1',
      page: 'Bài 6 • tr.53',
      title: 'Vòng Tuần hoàn Phổi (Nhỏ) và Vòng Tuần hoàn Hệ thống (Lớn)',
      summary: 'Tim là bơm đôi mắc nối tiếp: Tim phải tống máu nghèo O2 lên phổi ở áp suất thấp, Tim trái tống máu giàu O2 đi toàn thân ở áp suất cao.',
      svg: {
        kind: 'cycle',
        centerTitle: 'TIM ĐÔI NỐI TIẾP',
        centerSub: 'Cung lượng tim (CO) hai thất bằng nhau ~5 L/phút',
        centerTone: 'red',
        steps: [
          { label: 'Thất Trái (120/0 mmHg)', detail: 'Bơm máu giàu O2 vào Động mạch Chủ', tone: 'red' },
          { label: 'Mao mạch Hệ thống', detail: 'Trao đổi O2/CO2 ở Mô → Tĩnh mạch Chủ', tone: 'purple' },
          { label: 'Nhĩ Phải → Thất Phải', detail: 'Áp suất thất phải chỉ ~25/0 mmHg', tone: 'blue' },
          { label: 'Mao mạch Phổi', detail: 'Thải CO2, nhận O2 → 4 Tĩnh mạch Phổi về Nhĩ Trái', tone: 'teal' }
        ]
      },
      pins: [
        { n: 1, title: 'Chênh lệch áp suất 5–6 lần', desc: 'Thành thất trái dày gấp ~3 lần thất phải để thắng tổng kháng lực hệ thống cao gấp 5–6 lần kháng lực phổi.', x: 50, y: 20 },
        { n: 2, title: 'Cùng cung lượng tim', desc: 'Ở trạng thái ổn định, thể tích nhát bóp và cung lượng tim của thất phải và thất trái phải cân bằng nhau (~5 L/phút).', x: 50, y: 52 }
      ],
      takeaway: 'Phổi nhận 100% cung lượng tim với áp suất thấp (~25/8 mmHg), trong khi đại tuần hoàn hoạt động ở ~120/80 mmHg.'
    },
    {
      code: 'Hình 6.2',
      page: 'Bài 6 • tr.55',
      title: 'Cấu trúc mô học Sợi cơ tim & Hợp bào chức năng',
      summary: 'Các tế bào cơ tim phân nhánh nối với nhau qua đĩa xen kẽ giàu liên kết khe (gap junction), truyền điện thế động nhanh giúp tim co như một hợp bào.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 30, y: 30, w: 280, h: 120, label: 'Tế bào Cơ tim 1 (Vân ngang)', sub: 'Đĩa Z – Đĩa I – Đĩa A – Ông T – Mạng SR', tone: 'red' },
          { x: 370, y: 30, w: 280, h: 120, label: 'Tế bào Cơ tim 2', sub: 'Giàu Ty thể (~35% thể tích TB)', tone: 'red' },
          { x: 295, y: 40, w: 90, h: 100, label: 'Đĩa Xen Kẽ', sub: 'Gap junction + Desmosome', tone: 'amber' },
          { x: 50, y: 185, w: 260, h: 110, label: 'Hợp bào Tâm nhĩ', sub: 'Vách xơ vòng van nhĩ-thất ngăn cách điện học', tone: 'blue' },
          { x: 370, y: 185, w: 260, h: 110, label: 'Hợp bào Tâm thất', sub: 'Chỉ dẫn qua Bó His từ Nhĩ → Thất', tone: 'green' }
        ],
        links: [
          { x1: 240, y1: 152, x2: 430, y2: 182, label: 'Chính quy qua Bó His', color: '#2563eb' }
        ]
      },
      pins: [
        { n: 1, title: 'Liên kết khe (Gap junction)', desc: 'Cho phép ion di chuyển tự do từ tế bào này sang tế bào kế cận → toàn bộ cơ nhĩ hoặc cơ thất co đồng bộ theo luật "Tất cả hay không".', x: 50, y: 28 },
        { n: 2, title: 'Vách xơ cách điện Nhĩ – Thất', desc: 'Giúp nhĩ co xong đẩy nốt 20–30% máu xuống thất trước khi xung động từ bó His làm thất co bóp.', x: 50, y: 74 }
      ],
      takeaway: 'Cơ tim có hai hợp bào riêng biệt (Nhĩ và Thất), kết nối điện học bình thường DUY NHẤT qua Bó His.'
    },
    {
      code: 'Hình 6.3',
      page: 'Bài 6 • tr.56',
      title: 'Hệ thống Dẫn truyền Tự động trong Tim',
      summary: 'Xung động phát nhịp từ nút Xoang (SA) lan qua hai nhĩ và 3 bó liên nút → chậm lại ở nút Nhĩ-Thất (AV) → truyền cực nhanh qua bó His, 2 nhánh và mạng Purkinje.',
      imgSrc: 'assets/figures/fig_cardiac_conduction.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'Nút Xoang Nhĩ (SA: 60–100 l/p)', desc: 'Chủ nhịp bình thường của tim nhờ tốc độ tự khử cực pha 4 nhanh nhất, áp chế các chủ nhịp phụ.', x: 24, y: 34 },
        { n: 2, title: 'Nút Nhĩ – Thất (AV: 40–60 l/p)', desc: 'Dẫn truyền chậm nhất (~0,02–0,05 m/s, trễ ~0,12 s) để nhĩ bóp hết máu xuống thất và bảo vệ thất khỏi nhịp nhĩ quá nhanh.', x: 37, y: 45 },
        { n: 3, title: 'Bó His → Nhánh P/T → Mạng Purkinje (20–40 l/p)', desc: 'Mạng Purkinje dẫn truyền nhanh nhất (~1,5–4 m/s) từ nội mạc ra ngoại mạc giúp hai thất co đồng bộ từ mỏm lên đáy tim.', x: 56, y: 70 }
      ],
      takeaway: 'Nhanh nhất: Mạng Purkinje (4 m/s). Chậm nhất: Nút AV (0,02–0,05 m/s, tạo khoảng PR). Chủ nhịp sinh lý: Nút SA.'
    },
    {
      code: 'Hình 6.4',
      page: 'Bài 6 • tr.57',
      title: 'Phân bố Ion & Các Bơm Duy trì Điện thế nghỉ Cơ tim',
      summary: 'Điện thế nghỉ cơ thất (~ −90 mV) do gradient K⁺ cao trong tế bào tạo ra và được duy trì dài hạn bởi bơm Na⁺-K⁺-ATPase (3 Na⁺ ra / 2 K⁺ vào).',
      svg: {
        kind: 'membrane',
        topLabel: 'Ngoại bào: Na⁺ cao (~140 mM), Ca²⁺ cao (~1,2 mM), K⁺ thấp (~4 mM)',
        bottomLabel: 'Nội bào: K⁺ rất cao (~150 mM), Na⁺ thấp (~10 mM), Điện thế nghỉ ≈ −90 mV',
        memLabel: 'Màng tế bào cơ tim (Sarcolemma)',
        channels: [
          { label: 'Bơm Na⁺-K⁺-ATPase', sub: '3 Na⁺ ra / 2 K⁺ vào (tốn ATP)', dir: 'both', tone: 'blue', top: '2 K⁺ vào', bottom: '3 Na⁺ ra' },
          { label: 'Kênh K⁺ rò (IK1)', sub: 'Tạo Vm gần EK ≈ −90 mV', dir: 'up', tone: 'green', top: 'K⁺ khuếch tán ra', bottom: 'Tạo âm nội bào' },
          { label: 'Đối vận Na⁺-Ca²⁺ (NCX)', sub: '3 Na⁺ vào / 1 Ca²⁺ ra', dir: 'both', tone: 'amber', top: '1 Ca²⁺ thải ra', bottom: 'Đích gián tiếp Digoxin' },
          { label: 'Bơm Ca²⁺-ATPase (PMCA)', sub: 'Tống Ca²⁺ thừa lúc tâm trương', dir: 'up', tone: 'red', top: 'Ca²⁺ ra ngoại bào', bottom: 'Thư giãn cơ tim' }
        ]
      },
      pins: [
        { n: 1, title: 'Digoxin & Bơm Na⁺-K⁺', desc: 'Ức chế bơm Na⁺-K⁺ làm tăng Na⁺ nội bào → giảm hoạt động đối vận NCX → giữ Ca²⁺ nội bào nhiều hơn → tăng sức co bóp cơ tim.', x: 20, y: 50 },
        { n: 2, title: 'Tăng K⁺ máu làm giảm chênh lệch Vm', desc: 'Tăng K⁺ ngoại bào làm điện thế nghỉ bớt âm (khử cực một phần), bất hoạt kênh Na⁺ nhanh và dễ gây rối loạn nhịp nguy hiểm.', x: 46, y: 50 }
      ],
      takeaway: 'Điện thế nghỉ cơ thất (−90 mV) chủ yếu do dòng K⁺ đi ra qua kênh IK1 hướng tới thế cân bằng Nernst của K⁺.'
    },
    {
      code: 'Hình 6.5',
      page: 'Bài 6 • tr.58',
      title: 'Điện thế động Cơ tim Đáp ứng Nhanh (5 Pha: 0, 1, 2, 3, 4)',
      summary: 'Cơ tâm thất, cơ tâm nhĩ và sợi Purkinje có đáp ứng nhanh với pha 0 dựng đứng do mở kênh Na⁺ nhanh và pha 2 bình nguyên kéo dài nhờ dòng Ca²⁺ vào chậm.',
      imgSrc: 'assets/figures/fig_cardiac_ap.png',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Pha 0 (Khử cực nhanh)', desc: 'Mở ồ ạt kênh Na⁺ nhanh (INa) khi điện thế đạt ngưỡng −70 mV → điện thế vọt lên +20 đến +30 mV.', x: 24, y: 36 },
        { n: 2, title: 'Pha 1 (Tái cực sớm) & Pha 2 (Bình nguyên)', desc: 'Pha 1: đóng Na⁺ và mở thoáng K⁺ (Ito). Pha 2: dòng Ca²⁺ đi vào qua kênh L-type cân bằng với dòng K⁺ đi ra → giữ tim co đủ lâu đẩy máu & chống co cứng uốn ván.', x: 45, y: 32 },
        { n: 3, title: 'Pha 3 (Tái cực nhanh) & Pha 4 (Nghỉ −90 mV)', desc: 'Đóng kênh Ca²⁺ L-type và mở mạnh các kênh K⁺ chỉnh lưu chậm (IKr, IKs, IK1) đưa điện thế về −90 mV.', x: 68, y: 56 }
      ],
      takeaway: 'Pha 2 bình nguyên là đặc sản của cơ tim (do Ca²⁺ đi vào cân bằng K⁺ ra), giúp kéo dài thời kỳ trơ tuyệt đối để tim không thể bị co cứng (tetanus).'
    },
    {
      code: 'Hình 6.6',
      page: 'Bài 6 • tr.59',
      title: 'Biến đổi Độ dẫn Ion gNa⁺, gCa²⁺, gK⁺ qua các Pha Điện thế động',
      summary: 'Đối chiếu song song sự đóng mở luân phiên các kênh ion tạo nên hình dạng đặc trưng của điện thế động đáp ứng nhanh.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian (ms: 0 → 300 ms)',
        yLabel: 'Độ dẫn tương đối (g)',
        xTicks: [
          { x: 15, label: 'Pha 0' },
          { x: 35, label: 'Pha 1' },
          { x: 55, label: 'Pha 2' },
          { x: 75, label: 'Pha 3' },
          { x: 90, label: 'Pha 4' }
        ],
        yTicks: [
          { y: 10, label: 'Thấp' },
          { y: 50, label: 'TB' },
          { y: 90, label: 'Cao' }
        ],
        curves: [
          { name: 'gNa⁺ (Vọt đỉnh Pha 0)', color: '#dc2626', pts: [[8, 12], [15, 92], [22, 14], [90, 10]] },
          { name: 'gCa²⁺ L-type (Bình nguyên Pha 2)', color: '#d97706', pts: [[12, 12], [24, 58], [56, 54], [74, 15], [90, 12]] },
          { name: 'gK⁺ (Giảm Pha 2, Tăng Pha 3-4)', color: '#2563eb', pts: [[8, 52], [22, 22], [52, 26], [76, 86], [90, 54]] }
        ]
      },
      pins: [
        { n: 1, title: 'Đỉnh gNa⁺ siêu ngắn (<2 ms)', desc: 'Kênh Na⁺ nhanh đóng bất hoạt rất sớm ngay sau khi tạo mũi nhọn Pha 0.', x: 18, y: 20 },
        { n: 2, title: 'gK⁺ giảm nghịch lý ở Pha 2', desc: 'Hiện tượng chỉnh lưu vào (inward rectification) giảm thất thoát K⁺ lúc khử cực, tiết kiệm ATP để giữ pha bình nguyên.', x: 52, y: 66 },
        { n: 3, title: 'Đỉnh gK⁺ tái cực ở Pha 3', desc: 'Mở đồng loạt IKr, IKs và IK1 đưa nhanh điện thế trở lại mức nghỉ.', x: 76, y: 22 }
      ],
      takeaway: 'Cạnh tranh giữa gCa²⁺ tăng và gK⁺ giảm giữ màng tế bào ở bình nguyên 0 mV trong 200–300 ms.'
    },
    {
      code: 'Hình 6.7',
      page: 'Bài 6 • tr.60',
      title: 'So sánh Điện thế động Đáp ứng Chậm (SA/AV) và Đáp ứng Nhanh (Cơ thất)',
      summary: 'Nút SA và nút AV không có kênh Na⁺ nhanh hoạt động; khử cực chậm pha 0 hoàn toàn phụ thuộc vào dòng Ca²⁺ chậm (L-type) nên rất nhạy với thuốc chẹn kênh Ca²⁺.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'a) Đáp ứng Chậm (Nút SA, AV)', subtitle: 'Tự động phát nhịp (Pacemaker)', tone: 'amber', bullets: ['Điện thế nghỉ tối đa bớt âm (−60 mV), KHÔNG phẳng mà tự dốc lên ở Pha 4 (dòng If - Na⁺ funny, T-type Ca²⁺)', 'Pha 0 lài (chậm) do kênh Ca²⁺ L-type (chẹn bởi Verapamil/Diltiazem)', 'KHÔNG có Pha 1 và Pha 2 rõ rệt; biên độ thấp'] },
          { title: 'b) Đáp ứng Nhanh (Thất, Nhĩ, Purkinje)', subtitle: 'Dẫn truyền tốc độ cao', tone: 'blue', bullets: ['Điện thế nghỉ sâu & ổn định (−90 mV) nhờ kênh K⁺ IK1', 'Pha 0 dựng đứng rất nhanh nhờ kênh Na⁺ nhanh (bị Lidocain, Quinidin ức chế)', 'Có Pha 1 rõ, Pha 2 bình nguyên dài (~250 ms) giúp kích thích cơ co'] }
        ]
      },
      pins: [
        { n: 1, title: 'Dòng Funny (If) nút SA', desc: 'Kênh HCN mở khi tế bào vừa tái cực về −60 mV cho Na⁺ thấm vào từ từ (đích ức chế chọn lọc của thuốc Ivabradine làm chậm nhịp tim).', x: 26, y: 40 },
        { n: 2, title: 'Kênh Ca²⁺ chậm tại nút AV', desc: 'Nhờ không phụ thuộc Na⁺ nhanh mà Adenosine hoặc chẹn kênh Ca²⁺ làm nghẽn dẫn truyền nút AV để cắt cơn nhịp nhanh trên thất.', x: 26, y: 72 },
        { n: 3, title: 'Tại sao nút SA không bị "ngất" khi giảm Na⁺ nhẹ?', desc: 'Vì pha 0 của nút SA dùng Ca²⁺ chứ không dùng kênh Na⁺ nhanh như cơ thất.', x: 74, y: 54 }
      ],
      takeaway: 'Đáp ứng nhanh (Thất/Purkinje): Pha 0 = Na⁺ nhanh, Pha 4 = −90 mV. Đáp ứng chậm (SA/AV): Pha 0 = Ca²⁺ chậm, Pha 4 = tự dốc nhờ dòng If.'
    },
    {
      code: 'Hình 6.8',
      page: 'Bài 6 • tr.61',
      title: '3 Cơ chế thay đổi Tần số Nút dẫn nhịp (A: Độ dốc Pha 4; B: Ngưỡng & Nghỉ)',
      summary: 'Hệ thần kinh tự chủ tăng/giảm nhịp tim bằng cách xoay độ dốc pha 4, thay đổi điện thế ngưỡng (TP) hoặc thay đổi điện thế tâm trương tối đa (MDP).',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian',
        yLabel: 'Điện thế màng (mV)',
        xTicks: [
          { x: 20, label: 'Nhanh (Giao cảm)' },
          { x: 55, label: 'Bình thường' },
          { x: 88, label: 'Chậm (Phó GC)' }
        ],
        yTicks: [
          { y: 20, label: '−70 mV' },
          { y: 55, label: '−40 mV (Ngưỡng)' },
          { y: 88, label: '+10 mV' }
        ],
        hLines: [
          { y: 55, label: 'TP-1 (Ngưỡng bình thường −40 mV)', color: '#dc2626' },
          { y: 66, label: 'TP-2 (Ngưỡng nâng cao → Chậm nhịp)', color: '#9333ea' }
        ],
        curves: [
          { name: 'Giao cảm: Dốc Pha 4 ↑ (Nhịp nhanh)', color: '#dc2626', pts: [[8, 28], [22, 55], [27, 88], [34, 28], [48, 55], [53, 88]] },
          { name: 'Phó GC (Dây X): Âm hơn & Lài Pha 4 (Nhịp chậm)', color: '#2563eb', dashed: true, pts: [[8, 16], [42, 55], [48, 86], [58, 16], [92, 55]] }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế A: Tăng độ dốc Pha 4', desc: 'Noradrenalin (β1 → tăng cAMP) mở nhanh kênh If và T-Ca²⁺ → dốc pha 4 đứng hơn → chạm ngưỡng sớm hơn → tim đập nhanh.', x: 26, y: 36 },
        { n: 2, title: 'Cơ chế B1: Hạ điện thế nghỉ tối đa (MDP)', desc: 'Acetylcholin (M2 → mở kênh K⁺ IK-ACh) làm Vm âm sâu hơn (−60 → −70 mV) và dốc pha 4 lài hơn → tim đập chậm.', x: 54, y: 74 },
        { n: 3, title: 'Cơ chế B2: Thay đổi Điện thế ngưỡng (TP)', desc: 'Hạ Ca²⁺ máu làm ngưỡng gần nghỉ hơn (dễ kích thích); tăng ngưỡng lên TP-2 làm chậm đạt ngưỡng.', x: 78, y: 32 }
      ],
      takeaway: 'Giao cảm làm dốc pha 4 đứng lên (nhanh); Phó giao cảm (Dây X) làm MDP âm hơn & dốc pha 4 thoải ra (chậm).'
    },
    {
      code: 'Hình 6.9',
      page: 'Bài 6 • tr.61',
      title: 'Điện thế ngưỡng ở Tế bào Cơ tim Đáp ứng Nhanh',
      summary: 'Khi kích thích làm khử cực màng từ −90 mV lên tới ngưỡng −70 mV, đủ số kênh Na⁺ nhanh mở đồng loạt để bùng nổ điện thế động toàn phần (quy luật Tất cả hay không).',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian (ms)',
        yLabel: 'Điện thế màng (mV)',
        yTicks: [
          { y: 15, label: '−90 mV' },
          { y: 40, label: '−70 mV (Ngưỡng)' },
          { y: 88, label: '+20 mV' }
        ],
        hLines: [
          { y: 40, label: 'Điện thế ngưỡng TP (~ −70 mV)', color: '#dc2626' }
        ],
        curves: [
          { name: 'Kích thích dưới ngưỡng (tắt lịm)', color: '#64748b', dashed: true, pts: [[10, 15], [22, 30], [34, 15]] },
          { name: 'Đạt ngưỡng → Bùng nổ Pha 0 (PA)', color: '#dc2626', pts: [[40, 15], [48, 40], [52, 88], [66, 82], [82, 16]] }
        ]
      },
      pins: [
        { n: 1, title: 'Đáp ứng dưới ngưỡng', desc: 'Nếu dòng kích thích không đưa nổi Vm lên −70 mV, dòng K⁺ kéo lại về −90 mV mà không tạo điện thế động lan truyền.', x: 24, y: 66 },
        { n: 2, title: 'Phản hồi dương kênh Na⁺ tại −70 mV', desc: 'Chạm −70 mV, Na⁺ tràn vào làm Vm bớt âm hơn → càng mở thêm nhiều kênh Na⁺ → tạo đường dốc dựng đứng.', x: 54, y: 34 }
      ],
      takeaway: 'Điện thế ngưỡng của tế bào cơ thất đáp ứng nhanh là khoảng −70 mV (đạt được là phát xung theo quy luật Tất cả hay Không).'
    },
    {
      code: 'Hình 6.10',
      page: 'Bài 6 • tr.62',
      title: 'So sánh Thời kỳ Trơ Đáp ứng Nhanh và Đáp ứng Chậm',
      summary: 'Tế bào đáp ứng nhanh hồi phục tính hưng phấn song song với tái cực (cuối pha 3), trong khi đáp ứng chậm (AV/SA) có thời kỳ trơ kéo dài sang tận pha 4 (post-repolarization refractoriness).',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Tế bào Đáp ứng Nhanh', subtitle: 'Thất / Purkinje', tone: 'blue', bullets: ['Trơ Tuyệt đối (ARP/ERP): từ Pha 0 tới nửa Pha 3 (−55 mV) — kênh Na⁺ bị đóng cổng bất hoạt', 'Trơ Tương đối (RRP): từ cuối Pha 3 tới −90 mV — kích thích rất mạnh mới tạo được đáp ứng yếu', 'Thời kỳ trơ kết thúc ngay khi tái cực hoàn toàn'] },
          { title: 'Tế bào Đáp ứng Chậm', subtitle: 'Nút SA / Nút AV', tone: 'amber', bullets: ['Kênh Ca²⁺ hồi phục khỏi trạng thái bất hoạt chậm theo thời gian hơn là theo điện thế', 'RRP kéo dài VƯỢT QUÁ thời điểm kết thúc tái cực vào tận Pha 4', 'Bảo vệ tâm thất không bị kích thích quá dồn dập khi rung nhĩ hoặc cuồng nhĩ'] }
        ]
      },
      pins: [
        { n: 1, title: 'Thời kỳ Trơ Hữu hiệu (ERP)', desc: 'Mọi kích thích rơi vào giai đoạn này đều KHÔNG tạo được xung lan truyền tiếp.', x: 26, y: 38 },
        { n: 2, title: 'Giai đoạn Dễ tổn thương (cuối Pha 3)', desc: 'Kích thích đúng đỉnh sóng T (hiện tượng R-on-T) gây khởi phát rung thất cực kỳ nguy hiểm.', x: 26, y: 66 },
        { n: 3, title: 'Trơ sau tái cực ở nút AV', desc: 'Là lý do dẫn truyền chậm và dễ xuất hiện block Wenckebach bảo vệ khi tần số nhĩ cao.', x: 74, y: 50 }
      ],
      takeaway: 'Ở đáp ứng nhanh, tính trơ chấm dứt theo điện thế tái cực; ở nút AV/SA, tính trơ phụ thuộc thời gian và kéo sang pha 4.'
    },
    {
      code: 'Hình 6.11',
      page: 'Bài 6 • tr.63',
      title: 'Cơ chế Vòng Vào Lại (Re-entry) & Vai trò Nghẽn một hướng',
      summary: 'Vòng vào lại là cơ chế phổ biến nhất gây cơn nhịp nhanh: đòi hỏi 2 con đường song song, 1 đường bị nghẽn một hướng (unidirectional block) và tốc độ dẫn truyền đủ chậm.',
      svg: {
        kind: 'flow',
        banner: 'Tam chứng sinh bệnh Vòng vào lại trên Nhánh Purkinje chia đôi',
        nodes: [
          { title: 'A. Xung tới ngã ba chia 2 nhánh', sub: 'Nhánh I bình thường; Nhánh II có vùng thiếu máu/trơ dài', tone: 'blue' },
          { title: 'B. Nghẽn xuôi chiều tại Nhánh II', sub: 'Xung đi xuống bị chặn tại vùng nghẽn một hướng (unidirectional block)', tone: 'red' },
          { title: 'C. Xung đi vòng qua Nhánh I', sub: 'Lan qua cơ thất rồi quay ngược lên nhánh II (lúc này nhánh II đã hết trơ)', tone: 'amber' },
          { title: 'D. Khép kín vòng xoắn liên tục', sub: 'Nếu thời gian vòng quay > ERP của nhánh I → tạo cơn nhịp nhanh vào lại', tone: 'purple' }
        ],
        feedback: 'Vòng lặp tự duy trì phát xung liên tục (Nhịp nhanh trên thất / Nhanh thất)'
      },
      pins: [
        { n: 1, title: 'Điều kiện 1: Nghẽn một hướng', desc: 'Xung không đi xuôi qua nhánh bệnh được, nhưng khi vòng từ phía đối diện lại thì vùng đó dẫn ngược được.', x: 38, y: 46 },
        { n: 2, title: 'Điều kiện 2: Dẫn truyền đủ chậm', desc: 'Nếu vòng quay quá nhanh, xung quay lại đúng lúc nhánh lành còn đang trơ sẽ tự tắt; dẫn chậm giúp kéo dài vòng quay > ERP.', x: 64, y: 46 },
        { n: 3, title: 'Điều trị bằng cắt đứt vòng', desc: 'Chẹn AV bằng Adenosine/thắt đốt ổ đường phụ hoặc tăng thời kỳ trơ ERP bằng thuốc nhóm III (Amiodarone).', x: 82, y: 46 }
      ],
      takeaway: '3 điều kiện vòng vào lại: (1) Mạch vòng 2 nhánh, (2) Nghẽn một hướng ở 1 nhánh, (3) Thời gian dẫn vòng > ERP đường kia.'
    },
    {
      code: 'Hình 6.12',
      page: 'Bài 6 • tr.64',
      title: 'Hậu khử cực sớm (EADs) và Hậu khử cực muộn (DADs)',
      summary: 'Hoạt động kích hoạt (Triggered activity) gây ngoại tâm thu và xoắn đỉnh: EADs xảy ra ngay trong pha 2–3 khi QT kéo dài; DADs xảy ra ở pha 4 khi quá tải Ca²⁺.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Hậu khử cực sớm (EADs)', subtitle: 'Xảy ra ở Pha 2 hoặc Pha 3', tone: 'red', bullets: ['Xuất hiện trước khi tái cực xong (khi nhịp tim chậm hoặc QT kéo dài)', 'Do mở lại kênh Ca²⁺ L-type hoặc suy giảm dòng K⁺ tái cực', 'Cơ chế đặc trưng gây Xoắn đỉnh (Torsades de pointes) ở hội chứng QT dài'] },
          { title: 'Hậu khử cực muộn (DADs)', subtitle: 'Xảy ra ở Pha 4 (sau tái cực xong)', tone: 'purple', bullets: ['Xuất hiện khi tim đập nhanh hoặc ngộ độc Digoxin (tăng Ca²⁺ nội bào)', 'Lưới SR quá tải phóng thích Ca²⁺ tự phát → kích hoạt NCX đẩy 3 Na⁺ vào / 1 Ca²⁺ ra tạo sóng khử cực phụ', 'Nếu chạm ngưỡng sẽ nổ ra nhát bóp ngoại tâm thu nối tiếp'] }
        ]
      },
      pins: [
        { n: 1, title: 'EADs (Pha 2–3) — Gặp trong QT dài', desc: 'Hạ K⁺, hạ Mg²⁺, thuốc kéo dài QT làm kéo dài điện thế động tạo thời cơ cho kênh Ca²⁺ phục hồi sớm.', x: 26, y: 42 },
        { n: 2, title: 'DADs (Pha 4) — Quá tải Ca²⁺ (Digoxin)', desc: 'Càng nhịp nhanh càng tích Ca²⁺ nội bào → biên độ DADs càng cao (trái ngược EADs hay gặp khi nhịp chậm).', x: 74, y: 42 }
      ],
      takeaway: 'EADs = Pha 2–3 (nhịp chậm, QT dài → xoắn đỉnh). DADs = Pha 4 (nhịp nhanh, ngộ độc Digoxin, quá tải Ca²⁺).'
    },
    {
      code: 'Hình 6.13',
      page: 'Bài 6 • tr.64',
      title: 'Ảnh hưởng Chiều dài Chu kỳ (CI: 2s → 10s) lên EADs sợi Purkinje',
      summary: 'Chứng minh thực nghiệm: khi nhịp cơ bản càng chậm (khoảng ghép CI kéo dài từ 2s lên 10s), điện thế động kéo dài ra và EADs xuất hiện ngày càng rõ.',
      svg: {
        kind: 'curve',
        xLabel: 'Khoảng thời gian sau kích thích (CI tăng 2s → 4s → 6s → 10s)',
        yLabel: 'Thời gian ĐTĐ & Biên độ EAD',
        xTicks: [
          { x: 18, label: 'CI = 2s' },
          { x: 42, label: 'CI = 4s' },
          { x: 66, label: 'CI = 6s' },
          { x: 88, label: 'CI = 10s' }
        ],
        yTicks: [
          { y: 15, label: 'Không EAD' },
          { y: 55, label: 'Bướu pha 2-3' },
          { y: 88, label: 'Nổ EAD nối tiếp' }
        ],
        curves: [
          { name: 'Nguy cơ xuất hiện EAD (Phụ thuộc nhịp chậm)', color: '#dc2626', pts: [[15, 18], [40, 32], [65, 64], [88, 90]] }
        ]
      },
      pins: [
        { n: 1, title: 'Nhịp nhanh xóa EAD (CI ngắn)', desc: 'Ở chu kỳ ngắn (2s), kênh K⁺ chưa đóng hết nên tái cực nhanh, không hình thành EADs.', x: 24, y: 74 },
        { n: 2, title: 'Nhịp chậm khởi phát Xoắn đỉnh', desc: 'Nghỉ dài sau ngoại tâm thu tạo khoảng "pause-dependent", kéo dài APD và kích phát EADs (ứng dụng đặt máy tạo nhịp nhanh hoặc truyền Isoproterenol trong xoắn đỉnh).', x: 80, y: 24 }
      ],
      takeaway: 'EADs phụ thuộc nhịp chậm (bradycardia-dependent): chu kỳ càng dài (10s) càng dễ phát sinh EAD và xoắn đỉnh.'
    },
    {
      code: 'Hình 6.14',
      page: 'Bài 6 • tr.65',
      title: 'Ảnh hưởng Chiều dài Chu kỳ Cơ bản (BCI) & Acetylstrophanthidin lên DADs',
      summary: 'Ngược với EADs, khi tăng tần số kích thích (giảm BCI từ 800 ms xuống 500 ms) trên mô tim nhiễm digitalis (acetylstrophanthidin), biên độ DAD tăng vọt chạm ngưỡng phát nhịp.',
      svg: {
        kind: 'curve',
        xLabel: 'Giảm BCI (Tần số tim tăng: 800 → 700 → 600 → 500 ms)',
        yLabel: 'Biên độ DADs pha 4 (mV)',
        xTicks: [
          { x: 18, label: 'BCI 800ms' },
          { x: 42, label: 'BCI 700ms' },
          { x: 66, label: 'BCI 600ms' },
          { x: 88, label: 'BCI 500ms' }
        ],
        yTicks: [
          { y: 20, label: 'Nhỏ' },
          { y: 65, label: 'Ngưỡng nổ nhịp' },
          { y: 90, label: 'Phát xung' }
        ],
        hLines: [
          { y: 65, label: 'Ngưỡng kích phát nhịp nhanh', color: '#dc2626' }
        ],
        curves: [
          { name: 'Biên độ DADs khi dùng Digitalis', color: '#9333ea', pts: [[18, 22], [42, 42], [66, 63], [88, 92]] }
        ]
      },
      pins: [
        { n: 1, title: 'BCI 800 ms (75 l/p)', desc: 'Ca²⁺ kịp bơm ra ngoài giữa hai nhát bóp nên DAD còn nhỏ dưới ngưỡng.', x: 20, y: 74 },
        { n: 2, title: 'BCI 500 ms (120 l/p)', desc: 'Tần số nhanh + Digitalis gây dồn Ca²⁺ ở lưới SR → DAD pha 4 vượt ngưỡng → sinh cơn nhịp nhanh nhĩ/thất kịch phát.', x: 84, y: 22 }
      ],
      takeaway: 'DADs phụ thuộc nhịp nhanh (overdrive enhancement): BCI càng ngắn càng dễ vượt ngưỡng phát ngoại tâm thu.'
    },
    {
      code: 'Hình 6.15',
      page: 'Bài 6 • tr.66',
      title: '12 Chuyển đạo Chuẩn của Điện tâm đồ (ECG)',
      summary: 'ECG chuẩn ghi hoạt động điện tim từ 12 góc nhìn gồm 6 chuyển đạo chi (mặt phẳng trán) và 6 chuyển đạo trước ngực (mặt phẳng ngang).',
      svg: {
        kind: 'compare',
        panels: [
          { title: '6 Chuyển đạo Chi (Mặt phẳng Trán)', subtitle: '4 điện cực gắn Tay Phải, Tay Trái, Chân Trái, Đất (Chân P)', tone: 'blue', bullets: ['3 chuyển đạo lưỡng cực: DI (TP→TT), DII (TP→CT), DIII (TT→CT)', '3 chuyển đạo đơn cực tăng cường: aVR (vai P), aVL (vai T), aVF (chân T)', 'Đánh giá: Nhịp xoang, Trục điện tim, Vùng hoành (DII, DIII, aVF), Thành bên cao (DI, aVL)'] },
          { title: '6 Chuyển đạo Trước ngực (Mặt phẳng Ngang)', subtitle: '6 điện cực V1 – V6 đặt chuẩn khoang liên sườn', tone: 'red', bullets: ['V1 (KLS IV bờ P ức) & V2 (KLS IV bờ T ức): vùng Vách liên thất & Thất phải', 'V3 (giữa V2–V4) & V4 (KLS V đường trung đòn T): vùng Thành trước / Mỏm', 'V5 (đường nách trước T) & V6 (đường nách giữa T): vùng Thành bên Thất trái'] }
        ]
      },
      pins: [
        { n: 1, title: 'Phân vùng giải phẫu ECG', desc: 'DII, DIII, aVF nhìn mặt dưới; V1–V4 nhìn thành trước-vách; DI, aVL, V5, V6 nhìn thành bên thất trái.', x: 26, y: 68 },
        { n: 2, title: 'Mốc đặt V1–V2 đúng chuẩn', desc: 'KLS IV hai bên bờ xương ức (xác định từ góc Louis = KLS II đếm xuống).', x: 74, y: 40 }
      ],
      takeaway: '12 chuyển đạo chuẩn = 6 chuyển đạo chi (DI, DII, DIII, aVR, aVL, aVF) + 6 chuyển đạo trước ngực (V1–V6).'
    },
    {
      code: 'Hình 6.16',
      page: 'Bài 6 • tr.67',
      title: 'Tam giác Einthoven & Quy tắc Định luật Kirchoff (DII = DI + DIII)',
      summary: 'Ba chuyển đạo lưỡng cực chi tạo thành tam giác đều bao quanh tim: DI (0°), DII (+60°), DIII (+120°), với điện thế DII luôn bằng DI + DIII.',
      imgSrc: 'assets/figures/fig_einthoven.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: 'DI (Tay Phải − sang Tay Trái +)', desc: 'Trục nằm ngang hướng 0°, nhìn từ phía bên trái tim.', x: 50, y: 20 },
        { n: 2, title: 'DII (Tay Phải − xuống Chân Trái +)', desc: 'Hướng +60°, song song với trục giải phẫu bình thường của tim nên sóng P và R thường rõ nhất trên DII.', x: 30, y: 58 },
        { n: 3, title: 'Định luật Einthoven: DII = DI + DIII', desc: 'Dùng để kiểm tra xem kỹ thuật viên có mắc nhầm dây điện cực chi hay không.', x: 68, y: 58 }
      ],
      takeaway: 'Trục DI = 0°, DII = +60°, DIII = +120°. Luôn kiểm tra phương trình biên độ sóng R(DII) = R(DI) + R(DIII).'
    },
    {
      code: 'Hình 6.17',
      page: 'Bài 6 • tr.67',
      title: 'Chuyển đạo đơn cực Wilson (VR) & Tăng cường Goldberger (aVR, aVL, aVF)',
      summary: 'Mắc điện trở 5000 Ω nối 3 chi tạo cực trung tâm Wilson (= 0 V), còn Goldberger ngắt bớt điện cực đang đo ra khỏi cực trung tâm để biên độ sóng lớn thêm 50% (augmented).',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 34, w: 280, h: 120, label: 'Đơn cực Wilson (VR, VL, VF)', sub: 'Cả 3 chi nối qua R = 5 kΩ vào cực âm trung tâm (điện thế ≈ 0)', tone: 'slate' },
          { x: 360, y: 34, w: 280, h: 120, label: 'Tăng cường Goldberger (aVR, aVL, aVF)', sub: 'Ngắt chi đang khảo sát khỏi cực âm → chỉ nối 2 chi còn lại', tone: 'blue' },
          { x: 40, y: 190, w: 600, h: 100, label: 'Hệ quả Sinh lý & Thực hành ECG', sub: 'Biên độ sóng của aVR, aVL, aVF tăng 1,5 lần (50%) so với VR, VL, VF giúp đọc sóng rõ hơn', tone: 'green' }
        ],
        links: [
          { x1: 320, y1: 94, x2: 356, y2: 94, label: 'Ngắt 1 dây → ×1,5', color: '#2563eb' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao gọi là "a" (augmented)?', desc: 'Khi ngắt điện cực chi đang khảo sát khỏi mạng điện trở trung tâm, biên độ ghi nhận tăng đúng 50% (×3/2).', x: 74, y: 28 },
        { n: 2, title: 'Sóng bình thường ở aVR (−150°)', desc: 'Vì hướng aVR nhìn từ vai phải (ngược chiều khử cực thất +60°) nên P, QRS, T bình thường ở aVR đều ÂM.', x: 50, y: 74 }
      ],
      takeaway: 'Chuyển đạo tăng cường Goldberger tăng biên độ 50% so với Wilson bằng cách ngắt điện cực khảo sát khỏi cực trung tâm.'
    },
    {
      code: 'Hình 6.18',
      page: 'Bài 6 • tr.68',
      title: 'Hệ thống Trục kép Bayley (6 Chuyển đạo Chi chia góc 30°)',
      summary: 'Ghép 3 trục lưỡng cực (DI, DII, DIII) và 3 trục đơn cực tăng cường (aVR, aVL, aVF) đồng tâm chia mặt phẳng trán thành 12 cung 30° đều nhau.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 240, y: 120, w: 200, h: 90, label: 'Tâm Hệ Trục Kép (Tim)', sub: 'Trục trung gian bình thường: −30° đến +90° (hoặc +110°)', tone: 'green' },
          { x: 480, y: 132, w: 150, h: 64, label: 'DI (0°) • aVL (−30°)', sub: 'Vùng bên trái', tone: 'blue' },
          { x: 255, y: 240, w: 170, h: 64, label: 'aVF (+90°) • DII (+60°)', sub: 'Vùng dưới / mỏm', tone: 'teal' },
          { x: 40, y: 40, w: 170, h: 64, label: 'aVR (−150°)', sub: 'Trục vô định (nếu −90° đến −180°)', tone: 'red' },
          { x: 50, y: 235, w: 165, h: 64, label: 'DIII (+120°)', sub: 'Nếu lệch > +90° → Trục phải', tone: 'amber' }
        ],
        links: [
          { x1: 440, y1: 165, x2: 478, y2: 165, label: '0°', color: '#2563eb' },
          { x1: 340, y1: 210, x2: 340, y2: 238, label: '+90°', color: '#0d9488' }
        ]
      },
      pins: [
        { n: 1, title: 'Mẹo 5 giây đọc trục điện tim nhanh', desc: 'Nhìn DI và aVF: cả hai dương (+) → Trục trung gian (0° đến +90°); DI (+) aVF (−) → Kiểm tra DII để biết trục trái; DI (−) aVF (+) → Trục phải.', x: 50, y: 50 },
        { n: 2, title: 'Mỗi vạch cách nhau 30°', desc: 'Từ trên xuống dưới theo chiều kim đồng hồ: aVL (−30°), DI (0°), −aVR (+30°), DII (+60°), aVF (+90°), DIII (+120°).', x: 78, y: 46 }
      ],
      takeaway: 'Hệ Bayley chia mặt phẳng trán cách đều 30°: aVL (−30°), DI (0°), DII (+60°), aVF (+90°), DIII (+120°), aVR (−150°).'
    },
    {
      code: 'Hình 6.19',
      page: 'Bài 6 • tr.69',
      title: 'Thành phần các Sóng, Khoảng và Đoạn trên Điện tâm đồ Chuẩn',
      summary: 'Giải mã ý nghĩa từng sóng P, phức bộ QRS, sóng T, sóng U và thời khoảng bình thường PR, QRS, QT.',
      imgSrc: 'assets/figures/fig_ecg_waves.png',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Sóng P & Khoảng PR (0,12–0,20 s)', desc: 'P: khử cực hai nhĩ (<0,12 s, <2,5 mm). Khoảng PR phản ánh thời gian dẫn truyền từ nhĩ qua nút AV xuống bó His.', x: 25, y: 38 },
        { n: 2, title: 'Phức bộ QRS (0,06–0,10 s)', desc: 'Khử cực hai tâm thất (Q: khử cực vách từ T→P; R: thân thất & mỏm; S: vùng đáy thất). Tái cực nhĩ bị chôn vùi trong QRS.', x: 46, y: 42 },
        { n: 3, title: 'Đoạn ST, Sóng T & Khoảng QT (<0,44 s)', desc: 'ST đẳng điện tương ứng Pha 2 bình nguyên (chênh lên/xuống trong thiếu máu/NMCT). Sóng T: tái cực tâm thất.', x: 70, y: 38 }
      ],
      takeaway: 'PR = 0,12–0,20 s (3–5 ô nhỏ); QRS < 0,12 s; QTc ≤ 0,44 s. 1 ô nhỏ ngang = 0,04 s (25 mm/s), dọc = 0,1 mV.'
    },
    {
      code: 'Hình 6.20',
      page: 'Bài 6 • tr.69',
      title: 'Tiến triển sóng R và sóng S bình thường từ V1 đến V6',
      summary: 'Do thất trái ưu thế khối cơ nằm phía sau-trái, khi di chuyển từ V1 sang V6 biên độ sóng R tăng dần còn sóng S nông dần (chuyển tiếp tại V3–V4).',
      svg: {
        kind: 'curve',
        xLabel: 'Các chuyển đạo trước ngực (từ Phải sang Trái)',
        yLabel: 'Biên độ sóng R (+) và sóng S (−)',
        xTicks: [
          { x: 12, label: 'V1 (rS)' },
          { x: 28, label: 'V2' },
          { x: 45, label: 'V3 (RS)' },
          { x: 62, label: 'V4 (RS)' },
          { x: 78, label: 'V5' },
          { x: 92, label: 'V6 (qR)' }
        ],
        yTicks: [
          { y: 15, label: 'S sâu' },
          { y: 50, label: 'R = S' },
          { y: 88, label: 'R cao' }
        ],
        curves: [
          { name: 'Chiều cao Sóng R (tăng V1 → V5)', color: '#dc2626', pts: [[12, 18], [28, 32], [45, 50], [62, 72], [78, 86], [92, 78]] },
          { name: 'Độ sâu Sóng S (giảm V1 → V6)', color: '#2563eb', dashed: true, pts: [[12, 86], [28, 82], [45, 50], [62, 26], [78, 14], [92, 10]] }
        ]
      },
      pins: [
        { n: 1, title: 'Vùng chuyển tiếp (R = S) tại V3–V4', desc: 'Là vị trí ranh giới điện học giữa hai thất; xoay cùng/ngược chiều kim đồng hồ làm vùng chuyển tiếp lệch sang V1–V2 hoặc V5–V6.', x: 45, y: 50 },
        { n: 2, title: 'Mất tiến triển R (Poor R progression)', desc: 'Khi R không cao lên từ V1→V4, phải cảnh giác nhồi máu cơ tim thành trước cũ, lớn thất trái hoặc đặt sai điện cực.', x: 76, y: 24 }
      ],
      takeaway: 'Bình thường: R tăng dần từ V1 → V5 (đạt đỉnh ở V5) và S sâu nhất ở V1–V2 rồi nhỏ dần tới V6; điểm R = S ở V3–V4.'
    }
  ],

  // ========================================================================
  // BÀI 4: CHU CHUYỂN TIM & CUNG LƯỢNG TIM (Bài 7)
  // ========================================================================
  4: [
    {
      code: 'Hình 7.1',
      page: 'Bài 7 • tr.74',
      title: 'Đồng hồ Chu chuyển tim 0,8 giây (Ở nhịp tim 75 lần/phút)',
      summary: 'Mỗi chu chuyển tim kéo dài 0,8 giây: Tâm nhĩ co 0,1s (nghỉ 0,7s); Tâm thất co 0,3s (nghỉ 0,5s), cả tim nghỉ chung (toàn tâm trương) 0,4s.',
      svg: {
        kind: 'cycle',
        centerTitle: 'CHU KỲ 0,8s',
        centerSub: '75 nhát/phút',
        centerTone: 'red',
        steps: [
          { label: 'Thất Co 0,3s', detail: 'Co đồng thể tích (0,05s) + Tống máu (0,25s)', tone: 'red' },
          { label: 'Thất Giãn 0,5s (Đầu)', detail: 'Giãn đồng thể tích (0,08s) + Đổ đầy nhanh/chậm', tone: 'blue' },
          { label: 'Toàn Tâm Trương (0,4s)', detail: 'Cả Nhĩ & Thất cùng giãn nhận máu thụ động (70–80%)', tone: 'green' },
          { label: 'Nhĩ Thu Cuối (0,1s)', detail: 'Đẩy nốt 20–30% máu cuối tâm trương xuống thất', tone: 'amber' }
        ]
      },
      pins: [
        { n: 1, title: 'Tỷ lệ thời gian co / giãn', desc: 'Nhĩ co 0,1s – giãn 0,7s; Thất co 0,3s – giãn 0,5s. Khi nhịp tim tăng nhanh, thời gian tâm trương rút ngắn nhiều hơn tâm thu → giảm đổ đầy và giảm tưới máu vành.', x: 50, y: 22 },
        { n: 2, title: 'Vai trò Nhĩ thu (Atrial kick)', desc: 'Chiếm 20–30% đổ đầy thất bình thường; mất nhĩ thu (rung nhĩ) đặc biệt nặng ở người suy thất trái phì đại hoặc hẹp van 2 lá.', x: 24, y: 50 }
      ],
      takeaway: 'Ở 75 l/phút (0,8s): Nhĩ co 0,1s / giãn 0,7s; Thất co 0,3s / giãn 0,5s. Tim mạch vành được tưới máu chủ yếu lúc TÂM TRƯƠNG.'
    },
    {
      code: 'Hình 7.2',
      page: 'Bài 7 • tr.74',
      title: 'Các Giai đoạn Chu chuyển tim (A: Tâm thu & B: Tâm trương)',
      summary: 'Phối hợp đóng mở 4 van tim (2 lá, 3 lá, ĐMC, ĐMP) tạo ra chuyển động một chiều của dòng máu qua buồng tim.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'A. Thời kỳ Tâm Thu (0,3s)', subtitle: 'Van Nhĩ-Thất ĐÓNG (T1)', tone: 'red', bullets: ['1. Co đồng thể tích (~0,05s): Áp suất thất vọt nhanh nhưng chưa vượt ĐMC → 4 van đều đóng, tạo tiếng T1', '2. Bơm máu nhanh (~0,1s): P thất > P ĐMC (80 mmHg) mở van bán nguyệt → tống 70% thể tích nhát bóp', '3. Bơm máu chậm (~0,15s): Động năng đẩy máu tiếp ra ĐMC dù P thất bắt đầu giảm'] },
          { title: 'B. Thời kỳ Tâm Trương (0,5s)', subtitle: 'Van Bán Nguyệt ĐÓNG (T2)', tone: 'blue', bullets: ['1. Giãn đồng thể tích (~0,08s): Đóng van ĐMC tạo tiếng T2; 4 van đóng kín, cơ thất giãn nhanh tụt P xuống gần 0', '2. Đổ đầy nhanh & chậm (70–80% máu): Mở van 2 lá/3 lá hút máu từ nhĩ xuống thất (tiếng T3 bệnh lý)', '3. Nhĩ thu (0,1s): Co nhĩ tống nốt 20–30% máu cuối vào thất trước tâm thu mới (tiếng T4)'] }
        ]
      },
      pins: [
        { n: 1, title: 'Hai pha đóng cả 4 van', desc: 'Cả 4 van cùng đóng trong pha Co đồng thể tích (0,05s) và pha Giãn đồng thể tích (0,08s) — thể tích máu trong thất giữ nguyên.', x: 50, y: 34 },
        { n: 2, title: 'Nguồn gốc Tiếng tim T1 & T2', desc: 'T1: đóng van nhĩ-thất (bắt đầu tâm thu). T2: đóng van ĐMC & ĐMP (bắt đầu tâm trương; tách đôi sinh lý khi hít vào).', x: 50, y: 68 }
      ],
      takeaway: '4 van đóng hoàn toàn ở 2 thì: Co đồng thể tích (giữa T1 và mở van ĐMC) và Giãn đồng thể tích (giữa T2 và mở van 2 lá).'
    },
    {
      code: 'Hình 7.3',
      page: 'Bài 7 • tr.75',
      title: 'Vòng Áp suất – Thể tích Thất trái (PV Loop)',
      summary: 'Đồ thị kinh điển thể hiện 4 pha chu chuyển tim trên trục hoành Thể tích (mL) và trục tung Áp suất (mmHg); diện tích vòng là Công tống máu (Stroke Work).',
      imgSrc: 'assets/figures/fig_pv_loop.png',
      source: 'Wikimedia Commons',
      pins: [
        { n: 1, title: 'Pha B–C: Co đồng thể tích (EDV ~120 mL)', desc: 'Van 2 lá đóng tại điểm B (EDV); áp suất tăng thẳng đứng từ ~8 lên ~80 mmHg trong khi thể tích không đổi.', x: 75, y: 60 },
        { n: 2, title: 'Pha C–D: Tống máu (Mở van ĐMC tại C)', desc: 'Thể tích giảm từ EDV (120 mL) xuống ESV (~50 mL) → SV = EDV − ESV ≈ 70 mL; EF = SV/EDV ≈ 58%. Đóng van ĐMC tại D.', x: 52, y: 24 },
        { n: 3, title: 'Pha D–A (Giãn đồng thể tích) & A–B (Đổ đầy)', desc: 'Tại A (van 2 lá mở), máu chảy vào làm tăng thể tích từ 50 → 120 mL trên đường tuân thủ tâm trương EDPVR.', x: 35, y: 62 }
      ],
      takeaway: 'Bề rộng vòng PV = Thể tích nhát bóp (SV = EDV − ESV). Chiều cao = Hậu tải ĐMC. Diện tích bên trong = Công tim.'
    },
    {
      code: 'Hình 7.4',
      page: 'Bài 7 • tr.76',
      title: 'Biểu đồ Wiggers: Tương quan Áp suất – Thể tích – ECG – Tiếng tim',
      summary: 'Biểu đồ tổng hợp quan trọng nhất môn Sinh lý Tim mạch, đặt chồng khớp theo thời gian áp suất ĐMC/thất/nhĩ, thể tích thất, ECG và âm thanh tim.',
      imgSrc: 'assets/figures/fig_wiggers.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: '3 sóng áp suất Nhĩ (a, c, v)', desc: 'Sóng a: nhĩ co; sóng c: van 3 lá lồi vào nhĩ khi thất co; sóng v: máu tĩnh mạch về nhĩ khi van nhĩ-thất còn đóng.', x: 25, y: 38 },
        { n: 2, title: 'Khấc Dicrotic trên đường cong ĐMC', desc: 'Vết lõm nhẹ khi máu dội ngược đóng van ĐMC (trùng tiếng tim T2) rồi đàn hồi thành ĐMC giữ áp suất tâm trương ~80 mmHg.', x: 56, y: 28 },
        { n: 3, title: 'Quan hệ điện – cơ (ECG đi trước)', desc: 'Sóng P đi trước nhĩ thu (sóng a); phức bộ QRS đi trước co thất (T1); sóng T kết thúc ngay trước khi van ĐMC đóng (T2).', x: 40, y: 78 }
      ],
      takeaway: 'Sóng a = nhĩ co; Sóng c = van N-T đóng phồng; Sóng v = đầy nhĩ cuối tâm thu; Khấc Dicrotic = đóng van ĐMC (T2).'
    },
    {
      code: 'Hình 7.5',
      page: 'Bài 7 • tr.78',
      title: 'Tương quan Chiều dài sợi cơ (EDV) & Áp suất phát triển (Định luật Frank-Starling)',
      summary: 'Trong giới hạn sinh lý, càng giãn sợi cơ tim trước co (tăng EDV / tiền tải), cầu nối actin-myosin khớp tối ưu hơn và lực co tâm thu càng mạnh.',
      svg: {
        kind: 'curve',
        xLabel: 'Thể tích cuối tâm trương EDV / Chiều dài sợi cơ (µm)',
        yLabel: 'Áp suất Tâm thất (mmHg)',
        xTicks: [
          { x: 18, label: '1,6 µm' },
          { x: 48, label: '2,2 µm (Tối ưu)' },
          { x: 82, label: '2,6 µm' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 50, label: '120' },
          { y: 88, label: '240 mmHg' }
        ],
        vLines: [
          { x: 48, label: 'Chiều dài nhục tiết tối ưu 2,2 µm', color: '#16a34a' }
        ],
        curves: [
          { name: 'Áp suất Tâm thu toàn phần', color: '#dc2626', pts: [[12, 22], [32, 62], [50, 88], [72, 76], [90, 58]] },
          { name: 'Áp suất Tâm trương thụ động', color: '#2563eb', dashed: true, pts: [[12, 12], [45, 18], [70, 34], [90, 62]] }
        ]
      },
      pins: [
        { n: 1, title: 'Vùng sinh lý 1,8 – 2,2 µm', desc: 'Kéo giãn làm tăng nhạy cảm Troponin C với Ca²⁺ và tối ưu hóa sự chồng lấn của sợi Actin & Myosin → tăng SV.', x: 35, y: 36 },
        { n: 2, title: 'Giới hạn suy tim (giãn quá mức > 2,2 µm)', desc: 'Khi tim giãn quá mức, áp suất tâm trương tăng vọt (sung huyết phổi) trong khi lực co chủ động đi ngang rồi giảm.', x: 76, y: 40 }
      ],
      takeaway: 'Cơ tim bình thường hoạt động ở nhánh lên của đường cong Starling (chiều dài nhục tiết ~2,2 µm) → tăng tiền tải làm tăng cung lượng tim.'
    },
    {
      code: 'Hình 7.6',
      page: 'Bài 7 • tr.79',
      title: 'Sơ đồ Di chuyển Ion Ca²⁺ trong Phức hợp Kích thích – Co cơ tim (E-C Coupling)',
      summary: 'Khác với cơ vân, cơ tim bắt buộc cần Ca²⁺ ngoại bào đi qua kênh L-type để kích hoạt phóng thích Ca²⁺ từ mạng cơ tương (CICR), quyết định trực tiếp sức co bóp.',
      svg: {
        kind: 'flow',
        banner: 'Chu trình Ca²⁺ trong Co & Thư giãn Cơ tim',
        nodes: [
          { title: 'ĐTĐ xuống ống T', sub: 'Mở kênh Ca²⁺ L-type (cAMP/PKA làm tăng dòng Ca²⁺ vào)', tone: 'amber' },
          { title: 'Phóng thích Ca²⁺ cảm ứng (CICR)', sub: 'Ca²⁺ vào gắn thụ thể Ryanodine (RyR2) mở kho Ca²⁺ lưới SR', tone: 'red' },
          { title: 'Ca²⁺ gắn Troponin C', sub: 'Giải phóng vị trí gắn Actin – Myosin → Co cơ', tone: 'purple' },
          { title: 'Tái thu hồi Ca²⁺ (Thư giãn)', sub: 'SERCA2a bơm về SR (Phospholamban thúc đẩy khi được phosphoryl hóa)', tone: 'green' },
          { title: 'Thải Ca²⁺ dư ra ngoài', sub: 'Đối vận Na⁺-Ca²⁺ (NCX) & Bơm Ca²⁺-ATPase màng', tone: 'blue' }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế tăng sức co của Giao cảm (β1)', desc: 'Tăng cAMP → PKA phosphoryl hóa kênh L-type (tăng Ca²⁺ vào), RyR2 và Phospholamban (tăng thu Ca²⁺ vào SR → vừa co mạnh vừa giãn nhanh).', x: 24, y: 38 },
        { n: 2, title: 'Vai trò then chốt của Ca²⁺ ngoại bào', desc: 'Nếu thiếu Ca²⁺ dịch ngoại bào, tim ngừng đập ở thì tâm trương (ngược lại với cơ vân vẫn co được nhờ kho Ca²⁺ SR độc lập).', x: 50, y: 66 }
      ],
      takeaway: 'Cơ tim sử dụng cơ chế CICR (Ca²⁺ kích thích phóng thích Ca²⁺): sức co tỷ lệ thuận với lượng Ca²⁺ nội bào tự do trong tâm thu.'
    },
    {
      code: 'Hình 7.7',
      page: 'Bài 7 • tr.80',
      title: 'Phân biệt Co cơ Đẳng trường (Isometric) và Co cơ Đẳng trương (Isotonic)',
      summary: 'Trong phòng thí nghiệm sợi cơ nhú: Co đẳng trường giữ nguyên chiều dài để đo lực căng cực đại (P0), co đẳng trương đo độ rút ngắn (ΔL) khi thắng một tải trọng nhất định.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Co cơ Đẳng trường (Tiền tải cố định)', subtitle: 'Chiều dài L không đổi • Trương lực ↑', tone: 'blue', bullets: ['Kẹp chặt hai đầu cơ → cơ co nhưng không rút ngắn được', 'Toàn bộ năng lượng tạo ra lực căng (Tension), tương ứng pha Co đồng thể tích trên tim nguyên vẹn', 'Thước đo tốt nhất đánh giá Sức co bóp nội tại (dP/dt max)'] },
          { title: 'Co cơ Đẳng trương (Thắng Hậu tải)', subtitle: 'Tải trọng không đổi • Chiều dài ↓ (ΔL)', tone: 'red', bullets: ['Khi lực căng vượt tải trọng (Afterload), cơ bắt đầu rút ngắn và nhấc vật nặng lên', 'Tương ứng pha Tống máu trên tim nguyên vẹn khi P thất > P ĐMC', 'Hậu tải càng cao → vận tốc co V càng chậm và lượng tống ΔL càng giảm'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tiền tải (Preload) vs Hậu tải (Afterload)', desc: 'Tiền tải là lực kéo giãn cơ trước khi co (EDV). Hậu tải là lực cản sợi cơ phải thắng sau khi bắt đầu co (huyết áp ĐMC / sức cản ngoại biên).', x: 50, y: 40 },
        { n: 2, title: 'Vận tốc co cực đại (Vmax)', desc: 'Khi nội suy hậu tải về 0, Vmax phản ánh hoạt tính ATPase của myosin (tăng bởi catecholamine, không đổi khi đổi tiền tải).', x: 75, y: 72 }
      ],
      takeaway: 'Tăng tiền tải làm tăng sức căng cực đại nhưng không đổi Vmax; tăng inotropy (giao cảm) làm tăng CẢ sức co lẫn Vmax.'
    },
    {
      code: 'Hình 7.8',
      page: 'Bài 7 • tr.81',
      title: 'Đường cong Chức năng Thất trái (A: Kích thích; B: Bình thường; C: Suy tim)',
      summary: 'Dịch chuyển đường cong Frank-Starling cho thấy cùng một áp suất nhĩ phải/tiền tải, sức co bóp nội tại quyết định cung lượng tim đạt được.',
      svg: {
        kind: 'curve',
        xLabel: 'Thể tích cuối tâm trương EDV / Áp suất nhĩ phải (Tiền tải)',
        yLabel: 'Cung lượng tim / Áp suất thất trái',
        xTicks: [
          { x: 18, label: 'Thấp' },
          { x: 50, label: 'Bình thường' },
          { x: 84, label: 'Cao' }
        ],
        yTicks: [
          { y: 20, label: 'Thấp' },
          { y: 55, label: '5 L/phút' },
          { y: 88, label: 'Cao' }
        ],
        curves: [
          { name: 'A. Kích thích Giao cảm / Inotropy ↑', color: '#16a34a', pts: [[12, 32], [38, 66], [65, 86], [90, 92]] },
          { name: 'B. Bình thường', color: '#2563eb', pts: [[12, 18], [40, 48], [68, 66], [90, 70]] },
          { name: 'C. Suy tim (Inotropy ↓)', color: '#dc2626', dashed: true, pts: [[12, 12], [42, 26], [70, 34], [90, 32]] }
        ]
      },
      pins: [
        { n: 1, title: 'Đường A: Dịch lên trên & sang trái', desc: 'Dưới tác dụng Epinephrine/Noradrenalin hoặc Digoxin: tăng sức co bóp nội tại (positive inotropy), tống máu triệt để hơn dù cùng tiền tải.', x: 56, y: 20 },
        { n: 2, title: 'Đường C: Dịch xuống dưới & sang phải', desc: 'Trong suy tim: cơ tim co yếu nên phải giãn buồng tăng tiền tải rất cao mới cố duy trì cung lượng, dễ gây phù phổi.', x: 64, y: 68 }
      ],
      takeaway: 'Tăng tiền tải làm trượt dọc TRÊN CÙNG 1 đường cong; thay đổi sức co bóp (catecholamine, suy tim) làm DỊCH CHUYỂN cả đường cong.'
    },
    {
      code: 'Hình 7.9',
      page: 'Bài 7 • tr.82',
      title: 'Tương tác Điều hòa Cung lượng tim (CO) & Huyết áp động mạch (BP)',
      summary: 'CO = HR × SV; trong đó SV phụ thuộc 3 yếu tố (Tiền tải, Sức co bóp, Hậu tải) và BP = CO × TPR.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 30, w: 190, h: 74, label: 'Tần số tim (HR)', sub: 'Giao cảm ↑, Phó giao cảm ↓', tone: 'amber' },
          { x: 40, y: 120, w: 190, h: 170, label: 'Thể tích nhát bóp (SV)', sub: '1. Tiền tải (Frank-Starling)\n2. Sức co bóp (Inotropy)\n3. Hậu tải (Sức cản ức chế SV)', tone: 'red' },
          { x: 270, y: 110, w: 160, h: 90, label: 'Cung lượng tim (CO)', sub: 'CO = HR × SV ≈ 5 L/p', tone: 'blue' },
          { x: 480, y: 40, w: 165, h: 80, label: 'Tổng kháng lực (TPR)', sub: 'Bán kính tiểu ĐM (1/r⁴)', tone: 'purple' },
          { x: 480, y: 175, w: 165, h: 100, label: 'Huyết áp ĐM TB (MAP)', sub: 'MAP = CO × TPR ≈ 95 mmHg', tone: 'green' }
        ],
        links: [
          { x1: 230, y1: 68, x2: 268, y2: 140, color: '#d97706' },
          { x1: 230, y1: 195, x2: 268, y2: 165, color: '#dc2626' },
          { x1: 430, y1: 165, x2: 478, y2: 215, color: '#2563eb' },
          { x1: 562, y1: 120, x2: 562, y2: 172, color: '#9333ea' }
        ]
      },
      pins: [
        { n: 1, title: 'Phương trình CO = HR × SV', desc: 'Gắng sức làm tăng đồng thời HR (lên 180) và SV (tăng hồi lưu tĩnh mạch & giao cảm) → CO có thể tăng 4–5 lần lên 20–25 L/phút.', x: 50, y: 46 },
        { n: 2, title: 'Nghịch lý Hậu tải cao cấp tính', desc: 'Tăng đột ngột kháng lực ĐM (TPR) làm giảm SV ban đầu trước khi tim thích nghi.', x: 82, y: 24 }
      ],
      takeaway: 'Cung lượng tim (CO) = HR × SV (~5 L/phút). Huyết áp trung bình (MAP) = CO × TPR.'
    },
    {
      code: 'Hình 7.10',
      page: 'Bài 7 • tr.82',
      title: 'Phương pháp Nguyên lý Fick đo Cung lượng tim',
      summary: 'Dựa trên định luật bảo toàn khối lượng: Lượng O2 tiêu thụ qua phổi mỗi phút chia cho hiệu số nồng độ O2 giữa máu động mạch và tĩnh mạch trộn bằng đúng Cung lượng tim.',
      svg: {
        kind: 'flow',
        banner: 'CO = VO2 / ([O2] ĐM − [O2] TM trộn) = 200 / (0,20 − 0,16) = 5000 mL/phút',
        nodes: [
          { title: 'Máu Tĩnh mạch trộn (ĐM Phổi)', sub: '[O2]v = 160 mL O2 / L máu', tone: 'blue' },
          { title: 'Hấp thu O2 tại Phổi', sub: 'VO2 = 200 mL O2 / phút (đo bằng phế dung kế)', tone: 'teal' },
          { title: 'Máu Động mạch Hệ thống', sub: '[O2]a = 200 mL O2 / L máu', tone: 'red' },
          { title: 'Tính CO (5 L/phút)', sub: '200 / (200 − 160) × 1000 = 5000 mL/phút', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Mẫu máu tĩnh mạch trộn bắt buộc', desc: 'Phải lấy từ ĐM phổi (qua ống thông Swan-Ganz) chứ KHÔNG lấy tĩnh mạch ngoại biên tay vì các cơ quan rút O2 khác nhau.', x: 18, y: 50 },
        { n: 2, title: 'Ý nghĩa sai biệt động – tĩnh mạch O2', desc: 'Mỗi lít máu qua phổi nhận thêm 40 mL O2 (hoặc giao 40–50 mL O2 cho mô lúc nghỉ).', x: 58, y: 50 }
      ],
      takeaway: 'Công thức Fick: CO = VO2 / (CaO2 − CvO2). Ví dụ chuẩn: 200 / (0,20 − 0,16) = 5 L/phút.'
    },
    {
      code: 'Hình 7.11',
      page: 'Bài 7 • tr.83',
      title: 'Đo Cung lượng tim bằng Phương pháp Pha loãng nhiệt (PiCCO / Swan-Ganz)',
      summary: 'Bơm một lượng dung dịch muối sinh lý lạnh biết trước vào nhĩ phải rồi ghi đường cong hạ nhiệt độ ở ĐM phổi hoặc ĐM đùi; diện tích dưới đường cong (AUC) tỷ lệ nghịch với CO.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian sau khi bơm nước muối lạnh vào Tĩnh mạch trung tâm (s)',
        yLabel: 'Mức giảm nhiệt độ máu ĐM (ΔT °C)',
        xTicks: [
          { x: 15, label: 'Bơm lạnh' },
          { x: 38, label: 'Đỉnh ΔT (CO lớn)' },
          { x: 75, label: 'Trở về 37°C (CO nhỏ)' }
        ],
        yTicks: [
          { y: 15, label: '0°C' },
          { y: 85, label: 'ΔT max' }
        ],
        curves: [
          { name: 'Cung lượng tim CAO (Sóng dốc, AUC nhỏ)', color: '#16a34a', pts: [[12, 15], [22, 15], [32, 85], [44, 24], [60, 15]] },
          { name: 'Cung lượng tim THẤP (Sóng bè rộng, AUC lớn)', color: '#dc2626', dashed: true, pts: [[12, 15], [28, 15], [48, 52], [74, 26], [92, 16]] }
        ]
      },
      pins: [
        { n: 1, title: 'Nguyên tắc Stewart-Hamilton', desc: 'Lưu lượng máu càng nhanh (CO cao), khối nước muối lạnh trôi qua đầu dò càng chớp nhoáng → diện tích dưới đường cong ΔT-t càng nhỏ.', x: 34, y: 22 },
        { n: 2, title: 'PiCCO so với Swan-Ganz', desc: 'PiCCO bơm lạnh ở TM trung tâm nhưng đo cảm biến nhiệt tại ĐM đùi/nách (ít xâm lấn hơn đặt catheter vào tận ĐM phổi).', x: 64, y: 60 }
      ],
      takeaway: 'Cung lượng tim TỶ LỆ NGHỊCH với diện tích dưới đường cong pha loãng nhiệt (CO thấp → đường cong kéo dài rộng).'
    }
  ],

  // ========================================================================
  // BÀI 5: ĐIỀU HÒA HOẠT ĐỘNG TIM (Bài 8)
  // ========================================================================
  5: [
    {
      code: 'Hình 8.1',
      page: 'Bài 8 • tr.86',
      title: 'Cấu tạo Hệ Thần kinh Thực vật Chi phối Tim (Dây X & Chuỗi hạch Giao cảm)',
      summary: 'Tim chịu sự kiểm soát đối lập của Giao cảm (tăng mọi mặt qua β1) và Đối giao cảm/Dây X (giảm nhịp & dẫn truyền qua M2).',
      imgSrc: 'assets/figures/fig_ans_system.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Dây X (Phó giao cảm — từ hành não)', desc: 'Chi phối tập trung vào nút SA (dây X phải), nút AV (dây X trái) và cơ nhĩ; hầu như rất ít phân bố xuống cơ thất.', x: 28, y: 24 },
        { n: 2, title: 'Giao cảm (Tủy ngực T1–T5 qua hạch sao)', desc: 'Phân bố rộng khắp cả SA, AV lẫn toàn bộ cơ thất → tăng nhịp (chronotropic), tăng dẫn truyền (dromotropic) và tăng co bóp thất mạnh (inotropic).', x: 52, y: 40 },
        { n: 3, title: 'Trương lực dây X thắng thế lúc nghỉ', desc: 'Ở người nghỉ ngơi, nhịp tự động SA (~100 l/p) bị trương lực dây X ghìm xuống còn ~70–75 l/phút.', x: 75, y: 50 }
      ],
      takeaway: 'Dây X phải → ưu thế nút SA (tần số); Dây X trái → ưu thế nút AV (dẫn truyền); Giao cảm → phân bố mạnh xuống cả cơ TÂM THẤT.'
    },
    {
      code: 'Hình 8.2',
      page: 'Bài 8 • tr.87',
      title: 'Cung Phản xạ Thụ thể Áp suất (Baroreceptor Reflex) Xoang cảnh & Cung ĐMC',
      summary: 'Hệ thống điều hòa nhanh huyết áp từng giây: tăng huyết áp làm căng xoang cảnh/cung ĐMC → truyền về nhân bó đơn độc (NTS) hành não → kích thích dây X, ức chế trung khu giao cảm.',
      imgSrc: 'assets/figures/fig_baroreceptor.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Bộ phận nhận cảm (Xoang cảnh & Cung ĐMC)', desc: 'Đầu tận cùng tự do nhạy cảm với sức căng thành mạch. Tín hiệu xoang cảnh đi theo dây IX (Hering); cung ĐMC đi theo dây X.', x: 40, y: 36 },
        { n: 2, title: 'Trung khu Hành não (Nhân bó đơn độc NTS)', desc: 'Khi BP tăng → NTS hoạt hóa nhân hoài nghi (tăng phó giao cảm làm chậm nhịp tim) và ức chế RVLM (giảm giao cảm làm giãn mạch).', x: 64, y: 22 },
        { n: 3, title: 'Cơ chế bù trừ khi đứng dậy / mất máu', desc: 'Khi tụt huyết áp, baroreceptor giảm phát xung → tháo thắng giao cảm → nhịp tim đập nhanh, co mạch giữ máu não.', x: 54, y: 66 }
      ],
      takeaway: 'Xoang cảnh truyền về qua dây IX; Cung ĐMC qua dây X → Tăng HA kích hoạt dây X làm tim đập CHẬM & giãn mạch (Định luật Marey).'
    },
    {
      code: 'Hình 8.3',
      page: 'Bài 8 • tr.88',
      title: 'Loạn nhịp Xoang Hô hấp (Thay đổi Nhịp tim theo Nhịp thở)',
      summary: 'Khi hít vào nhịp tim nhanh lên và khi thở ra nhịp tim chậm lại — đặc biệt rõ ở người trẻ khỏe do phối hợp 4 yếu tố thần kinh và huyết động.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 30, w: 280, h: 110, label: 'HÍT VÀO → TĂNG NHỊP TIM', sub: '1. Lan tỏa hưng phấn trung khu hô hấp sang trung khu vận mạch/ức chế dây X\n2. Phản xạ căng phổi ức chế dây X', tone: 'red' },
          { x: 360, y: 30, w: 280, h: 110, label: 'HÍT VÀO: Huyết động & Áp thụ thể', sub: '3. P màng phổi âm thêm → Tăng máu về nhĩ phải (Phản xạ Bainbridge ↑ nhịp)\n4. Áp thụ thể giảm xung nhẹ (bất lợi cho ứ máu ở phổi)', tone: 'amber' },
          { x: 100, y: 185, w: 480, h: 100, label: 'THỞ RA → GIẢM NHỊP TIM (Phục hồi trương lực dây X)', sub: 'Áp suất lồng ngực bớt âm, tăng lượng máu về thất trái kích hoạt áp thụ thể làm chậm nhịp trở lại', tone: 'blue' }
        ],
        links: [
          { x1: 320, y1: 142, x2: 320, y2: 182, label: 'Chu kỳ thở', color: '#475569' }
        ]
      },
      pins: [
        { n: 1, title: 'Dấu hiệu tim khỏe mạnh', desc: 'Loạn nhịp xoang theo hô hấp (biến thiên nhịp tim HRV theo nhịp thở) là hoàn toàn sinh lý và chứng tỏ điều hòa tự chủ tốt.', x: 25, y: 36 },
        { n: 2, title: 'Phản xạ Bainbridge', desc: 'Căng thụ thể thể tích ở nhĩ phải khi máu về nhiều làm tăng nhịp tim.', x: 75, y: 36 }
      ],
      takeaway: 'Hít vào: ức chế dây X + phản xạ Bainbridge → nhịp tim TĂNG; Thở ra: tăng hoạt dây X → nhịp tim CHẬM lại.'
    },
    {
      code: 'Hình 8.4',
      page: 'Bài 8 • tr.89',
      title: 'Tác dụng Kích thích Thụ thể Hóa học Ngoại biên lên Nhịp tim',
      summary: 'Thiếu O2 (PaO2 < 60 mmHg), tăng CO2 hoặc giảm pH máu kích thích tiểu thể cảnh/cung ĐMC làm tăng thông khí mạnh, nhưng tác động trực tiếp lên tim là chậm nhịp nhẹ (bù trừ sau đó nhờ hô hấp làm tim nhanh).',
      svg: {
        kind: 'flow',
        banner: 'Phản xạ Thụ thể Hóa học Ngoại biên (Tiểu thể cảnh & ĐMC)',
        nodes: [
          { title: '↓ O2 (PaO2 < 60), ↑ CO2, ↓ pH', sub: 'Tác động tế bào Glomus ở xoang cảnh & cung ĐMC', tone: 'red' },
          { title: 'Truyền về Hành não (IX, X)', sub: 'Kích thích mạnh Trung khu Hô hấp & Vận mạch (co mạch)', tone: 'amber' },
          { title: 'Tác dụng tiên phát lên Tim', sub: 'Kích thích nhân dây X → Chậm nhịp tim (khi ngừng thở/lặn)', tone: 'blue' },
          { title: 'Tác dụng thứ phát khi Tăng thông khí', sub: 'Phản xạ căng phổi ức chế dây X → Cuối cùng Tim đập NHANH', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Tách biệt phản ứng nguyên phát vs thứ phát', desc: 'Nếu giữ thông khí nhân tạo cố định khi kích thích thụ thể hóa học, tim sẽ đập CHẬM; nhưng ở người tự thở, tăng thông khí kéo nhịp tim NHANH lên.', x: 50, y: 40 },
        { n: 2, title: 'Ngưỡng hoạt hóa O2', desc: 'Thụ thể hóa học nhạy mạnh khi PaO2 tụt dưới 60 mmHg (cơ chế chính giữ nhịp thở ở bệnh nhân COPD mạn tính).', x: 18, y: 55 }
      ],
      takeaway: 'Kích thích thụ thể hóa học đơn thuần gây CHẬM nhịp nguyên phát + CO MẠCH ngoại biên; ở người tự thở bình thường, tăng hô hấp thứ phát làm nhịp tim TĂNG.'
    },
    {
      code: 'Hình 8.5',
      page: 'Bài 8 • tr.90',
      title: 'Mô hình Thí nghiệm Tim – Phổi Tách rời của Starling',
      summary: 'Hệ thống tuần hoàn nhân tạo giúp kiểm soát độc lập Tiền tải (chiều cao bình chứa tĩnh mạch) và Hậu tải (sức cản khí nén ngoại biên) trên tim tách khỏi thần kinh.',
      svg: {
        kind: 'flow',
        banner: 'Tim Phổi Tách Rời Starling — Chứng minh Tự điều hòa Tim (Không cần Thần kinh)',
        nodes: [
          { title: 'Bình chứa Máu Tĩnh mạch (Độ cao H)', sub: 'Thay đổi Tiền tải (áp suất đổ đầy nhĩ phải)', tone: 'blue' },
          { title: 'Tim Phải → Phổi thở máy → Tim Trái', sub: 'Máu tự trao đổi O2/CO2 qua phổi sinh lý', tone: 'teal' },
          { title: 'Ống đo áp suất & Lưu lượng ĐMC', sub: 'Đo trực tiếp Thể tích nhát bóp & Cung lượng tim', tone: 'red' },
          { title: 'Màng cao su nén Khí (Sức cản ĐM)', sub: 'Thay đổi Hậu tải nhân tạo rồi hồi lưu về bình TM', tone: 'amber' }
        ]
      },
      pins: [
        { n: 1, title: 'Ý nghĩa lịch sử thí nghiệm', desc: 'Chứng minh trái tim dù đã cắt đứt mọi dây thần kinh giao cảm/đối giao cảm vẫn tự điều chỉnh được lực co (Cơ chế tự điều hòa dị trường/Frank-Starling).', x: 50, y: 36 },
        { n: 2, title: 'Hai biến độc lập điều chỉnh', desc: 'Nâng bình TM = Tăng Tiền tải; Bơm áp suất buồng cản = Tăng Hậu tải.', x: 78, y: 66 }
      ],
      takeaway: 'Tim tách rời khỏi hệ thần kinh vẫn tự tăng lực co khi tăng tiền tải hoặc tăng hậu tải nhờ cơ chế nội tại của nhục tiết tim.'
    },
    {
      code: 'Hình 8.6',
      page: 'Bài 8 • tr.90',
      title: 'Đáp ứng của Tim khi Tăng Tiền tải (95 → 145 mmH2O trên Tim-Phổi Starling)',
      summary: 'Khi nâng bình chứa TM từ 95 lên 145 mmH2O, thể tích tâm thất giãn to hơn trong vài nhát đầu → lực co tăng dần đẩy ra nhiều máu hơn đến điểm cân bằng mới ở mức EDV cao hơn.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian (Các nhát bóp liên tiếp)',
        yLabel: 'Thể tích Tâm thất & Áp suất Đổ đầy',
        xTicks: [
          { x: 18, label: 'Áp suất TM 95 mmH2O' },
          { x: 55, label: 'Nâng lên 145 mmH2O' },
          { x: 88, label: 'Cân bằng mới' }
        ],
        yTicks: [
          { y: 20, label: 'Thấp' },
          { y: 80, label: 'Cao' }
        ],
        vLines: [
          { x: 40, label: 'Nâng bình Tiền tải 95 → 145', color: '#dc2626' }
        ],
        curves: [
          { name: 'Thể tích cuối tâm trương EDV', color: '#2563eb', pts: [[10, 32], [38, 32], [50, 74], [90, 76]] },
          { name: 'Thể tích tống máu SV (bằng biên độ co)', color: '#dc2626', pts: [[10, 26], [38, 26], [56, 62], [90, 68]] }
        ]
      },
      pins: [
        { n: 1, title: 'Pha thích nghi vài nhát bóp', desc: 'Thể tích cuối tâm trương tăng tức thì khi máu đổ về nhiều hơn → kéo căng nhục tiết → SV tăng dần cho tới khi SV bằng đúng lượng máu về tăng thêm.', x: 52, y: 40 },
        { n: 2, title: 'Cân bằng vào = ra', desc: 'Tránh ứ trệ máu trong hệ tĩnh mạch dù không hề có sự tăng nhịp tim.', x: 80, y: 26 }
      ],
      takeaway: 'Tăng áp suất tĩnh mạch (95→145 mmH2O) làm tăng EDV tức thì và tăng SV theo định luật Frank-Starling cho tới khi lưu lượng vào = ra.'
    },
    {
      code: 'Hình 8.7',
      page: 'Bài 8 • tr.91',
      title: 'Đáp ứng của Tim khi Tăng Hậu tải (Sức cản ngoại biên tăng đột ngột)',
      summary: 'Khi sức cản ĐMC tăng đột ngột, vài nhát đầu SV giảm gây ứ lại lượng máu thừa làm EDV tăng lên → chính sự giãn buồng tăng EDV này giúp tim khôi phục lại SV (Hiệu ứng Anrep hỗ trợ thêm).',
      svg: {
        kind: 'curve',
        xLabel: 'Diễn biến theo thời gian khi tăng sức cản ngoại biên',
        yLabel: 'Thể tích & Áp suất',
        xTicks: [
          { x: 18, label: 'Bình thường' },
          { x: 45, label: 'Tăng sức cản ĐM' },
          { x: 82, label: 'Thích nghi xong' }
        ],
        yTicks: [
          { y: 20, label: 'Thấp' },
          { y: 80, label: 'Cao' }
        ],
        vLines: [
          { x: 40, label: 'Tăng sức cản ĐMC', color: '#dc2626' }
        ],
        curves: [
          { name: 'Áp suất ĐMC (tăng cao duy trì)', color: '#dc2626', pts: [[10, 35], [38, 35], [46, 80], [90, 82]] },
          { name: 'Thể tích thất EDV (tăng bù trừ)', color: '#2563eb', pts: [[10, 30], [38, 30], [52, 66], [90, 68]] },
          { name: 'Áp suất Nhĩ phải (tăng thoáng qua)', color: '#16a34a', dashed: true, pts: [[10, 18], [38, 18], [50, 42], [75, 22], [90, 20]] }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế Tự điều hòa theo Hậu tải', desc: 'Khi áp suất ĐMC tăng đột ngột, tim tống chưa hết máu ở 2–3 nhát đầu → ứ máu làm tăng EDV → theo Starling, EDV cao tạo lực co mạnh hơn thắng hậu tải mới.', x: 52, y: 38 },
        { n: 2, title: 'Hiệu ứng Anrep', desc: 'Sau vài phút chịu hậu tải cao, tim còn tự tăng sức co bóp nội tại nhờ tăng nhẹ Na⁺/Ca²⁺ nội bào (không cần giữ EDV giãn to nữa).', x: 82, y: 24 }
      ],
      takeaway: 'Tăng hậu tải đột ngột: vài nhát đầu ứ máu tăng EDV → tim co mạnh lại để giữ nguyên cung lượng tim vượt qua ngưỡng ĐMC cao hơn.'
    },
    {
      code: 'Hình 8.8',
      page: 'Bài 8 • tr.92',
      title: 'Ngoại tâm thu (A yếu) & Nhát bóp sau Nghỉ bù (B mạnh) theo Frank-Starling',
      summary: 'Nhát ngoại tâm thu đến sớm nên ít thời gian đổ đầy & ít Ca²⁺ SR → yếu (A); khoảng nghỉ bù kéo dài phía sau cho phép đổ đầy thật nhiều + nạp đầy Ca²⁺ → nhát sau (B) mạnh vượt trội.',
      svg: {
        kind: 'curve',
        xLabel: 'Chuỗi nhát bóp liên tiếp trên đường áp suất thất',
        yLabel: 'Áp suất Tâm thất (mmHg)',
        xTicks: [
          { x: 16, label: 'Bình thường' },
          { x: 38, label: 'Ngoại tâm thu (A)' },
          { x: 64, label: 'Nghỉ bù dài' },
          { x: 80, label: 'Nhát sau (B)' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 55, label: '120' },
          { y: 88, label: '160 mmHg' }
        ],
        curves: [
          { name: 'Áp suất Thất', color: '#dc2626', pts: [[8, 15], [16, 62], [24, 15], [32, 15], [38, 30], [44, 15], [70, 15], [78, 88], [86, 15], [95, 62]] }
        ]
      },
      pins: [
        { n: 1, title: 'Nhát A yếu (Chưa kịp đổ đầy)', desc: 'Đến quá sớm làm thể tích cuối tâm trương thấp → áp suất yếu (thậm chí không mở nổi van ĐMC → bắt mạch ngoại biên thấy mất nhịp).', x: 38, y: 66 },
        { n: 2, title: 'Nhát B tăng lực co hậu ngoại tâm thu', desc: 'Hai cơ chế cộng hợp: (1) Thời gian nghỉ bù dài giúp tăng tiền tải EDV; (2) Ca²⁺ hồi lưu vào mạng SR dồi dào hơn (Post-extrasystolic potentiation).', x: 78, y: 18 }
      ],
      takeaway: 'Nhát ngoại tâm thu yếu vì thiếu máu đổ đầy (mạch hụt); nhát ngay sau khoảng nghỉ bù cực mạnh vì tăng tiền tải + tăng tích Ca²⁺.'
    },
    {
      code: 'Hình 8.9',
      page: 'Bài 8 • tr.93',
      title: 'Kích thích Hạch Sao Giao cảm làm Tăng Áp suất Tối đa & Tốc độ co (dP/dt) Thất trái',
      summary: 'Khi kích thích giao cảm tim (hạch sao), Noradrenalin gắn thụ thể β1 làm tăng mạnh biên độ áp suất thất, rút ngắn thời gian tâm thu và tăng dốc dP/dt.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian 1 nhát bóp (giữ hằng định tần số/áp suất ĐMC)',
        yLabel: 'Áp suất Thất trái (mmHg)',
        xTicks: [
          { x: 15, label: 'Khởi co' },
          { x: 45, label: 'Đỉnh tâm thu' },
          { x: 82, label: 'Thư giãn xong' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 52, label: '120' },
          { y: 88, label: '220 mmHg' }
        ],
        curves: [
          { name: 'Kích thích Giao cảm (Hạch sao)', color: '#dc2626', pts: [[12, 16], [28, 66], [38, 88], [52, 62], [68, 16]] },
          { name: 'Chứng (Trước kích thích)', color: '#64748b', dashed: true, pts: [[12, 16], [35, 42], [48, 56], [66, 38], [84, 16]] }
        ]
      },
      pins: [
        { n: 1, title: 'Tăng đỉnh P max & tăng dốc dP/dt', desc: 'Cơ thất co bóp vừa mạnh hơn vừa nhanh hơn, kết thúc tâm thu sớm để chừa thời gian tâm trương cho nhịp tim nhanh.', x: 38, y: 20 },
        { n: 2, title: 'Tác dụng tăng thư giãn (Lusitropic +)', desc: 'Sườn xuống dốc đứng hơn vì PKA phosphoryl hóa Phospholamban đẩy nhanh bơm Ca²⁺ về lưới SR.', x: 60, y: 46 }
      ],
      takeaway: 'Giao cảm qua β1 tăng cả 4 đặc tính cơ tim + tăng cả tốc độ thư giãn (giúp tim kịp giãn đón máu khi đập nhanh).'
    },
    {
      code: 'Hình 8.10',
      page: 'Bài 8 • tr.93',
      title: 'Kích thích Dây Thần kinh X (Phó giao cảm) làm Giảm Áp suất Tối đa Thất trái',
      summary: 'Acetylcholine ức chế nút SA, AV và cơ nhĩ rất mạnh; trên cơ thất tuy yếu hơn nhưng khi kích thích mạnh dây X vẫn làm giảm nhẹ biên độ áp suất thất trái.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian 1 nhát bóp (tần số cố định)',
        yLabel: 'Áp suất Thất trái (mmHg)',
        xTicks: [
          { x: 15, label: 'Khởi co' },
          { x: 48, label: 'Đỉnh tâm thu' },
          { x: 82, label: 'Thư giãn' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 48, label: '100' },
          { y: 78, label: '120 mmHg' }
        ],
        curves: [
          { name: 'Bình thường (Chứng)', color: '#475569', pts: [[12, 16], [36, 56], [48, 76], [64, 52], [82, 16]] },
          { name: 'Kích thích Dây X (Phó GC)', color: '#2563eb', dashed: true, pts: [[12, 16], [36, 40], [48, 54], [64, 38], [82, 16]] }
        ]
      },
      pins: [
        { n: 1, title: 'Cơ chế ức chế qua M2 – Gi', desc: 'Acetylcholin gắn thụ thể M2 làm giảm cAMP nội bào và ức chế gián tiếp sự giải phóng Noradrenalin ở tận cùng giao cảm gần đó (tác động tiền synapse).', x: 48, y: 46 },
        { n: 2, title: 'Chênh lệch Nhĩ vs Thất', desc: 'Tác dụng làm yếu co bóp của dây X trên TÂM NHĨ rất lớn (~30–40%), còn trên TÂM THẤT khiêm tốn (~10–20%).', x: 75, y: 66 }
      ],
      takeaway: 'Dây X (Acetylcholin – M2) giảm mạnh tần số SA, dẫn truyền AV và co bóp nhĩ, đồng thời làm giảm nhẹ sức co cơ thất.'
    },
    {
      code: 'Hình 8.11',
      page: 'Bài 8 • tr.94',
      title: 'Ảnh hưởng Độ bão hòa Oxy Máu Động mạch Vành lên Lực co Cơ tim',
      summary: 'Cơ tim có tỷ lệ rút O2 lúc nghỉ rất cao (~70–75%). Độ bão hòa O2 (SO2) vành duy trì co bóp trong khoảng 45–100%, nhưng dưới 45% sức co suy sụp nhanh chóng.',
      svg: {
        kind: 'curve',
        xLabel: 'Độ bão hòa O2 máu Động mạch vành (%)',
        yLabel: 'Sức co bóp Cơ thất',
        xTicks: [
          { x: 18, label: '20%' },
          { x: 45, label: '45% (Ngưỡng)' },
          { x: 75, label: '75%' },
          { x: 92, label: '100%' }
        ],
        yTicks: [
          { y: 15, label: 'Suy sụp' },
          { y: 78, label: 'Ổn định' }
        ],
        zones: [
          { x1: 10, x2: 45, tone: 'red', label: 'Thiếu O2 < 45%: Ức chế co bóp' },
          { x1: 45, x2: 95, tone: 'green', label: 'Vùng ổn định 45–100%' }
        ],
        curves: [
          { name: 'Áp suất co bóp thất', color: '#dc2626', pts: [[12, 16], [30, 32], [45, 72], [70, 78], [92, 80]] }
        ]
      },
      pins: [
        { n: 1, title: 'Ngưỡng SO2 ĐMV = 45%', desc: 'Dưới 45% SO2, chuyển hóa hiếu khí của ty thể cơ tim sụp đổ → giảm ATP và tích tụ H⁺ ức chế gắn Ca²⁺ vào Troponin C.', x: 45, y: 38 },
        { n: 2, title: 'Tại sao cơ tim chỉ tăng tưới máu chứ không rút thêm % O2?', desc: 'Bình thường tim đã rút sẵn 70% O2 máu ĐMV (cao nhất cơ thể), nên khi gắng sức tim BẮT BUỘC phải giãn ĐMV tăng lưu lượng máu 4–5 lần.', x: 76, y: 26 }
      ],
      takeaway: 'Giảm bão hòa O2 vành dưới 45% làm suy sụp tức thì sức co bóp cơ tim; tăng nhu cầu O2 tim phải đáp ứng bằng giãn mạch vành (nhờ Adenosine, NO).'
    },
    {
      code: 'Hình 8.12',
      page: 'Bài 8 • tr.94',
      title: 'Thay đổi Áp suất Thất trái theo PaCO2 (45 → 34 → 86 → 46 mmHg)',
      summary: 'Tăng PaCO2 (toan hô hấp, 86 mmHg) trực tiếp gây nhiễm toan nội bào cơ tim ức chế mạnh sức co bóp (trên tim tách rời); giảm CO2 nhẹ (34 mmHg) ít làm giảm hoặc hơi tăng co bóp.',
      svg: {
        kind: 'curve',
        xLabel: 'Biến đổi PaCO2 trong máu nuôi tim (mmHg)',
        yLabel: 'Áp suất co thất trái (mmHg)',
        xTicks: [
          { x: 16, label: '45 mmHg' },
          { x: 38, label: '34 mmHg (↓CO2)' },
          { x: 64, label: '86 mmHg (↑↑CO2)' },
          { x: 88, label: '46 mmHg (Hồi phục)' }
        ],
        yTicks: [
          { y: 20, label: 'Giảm co mạnh' },
          { y: 78, label: 'Bình thường' }
        ],
        curves: [
          { name: 'Áp suất Thất (Tác động trực tiếp PaCO2)', color: '#2563eb', pts: [[16, 76], [38, 80], [64, 24], [88, 74]] }
        ]
      },
      pins: [
        { n: 1, title: 'PaCO2 = 86 mmHg (Toan hô hấp nặng)', desc: 'CO2 khuếch tán cực nhanh qua màng vào tế bào cơ tim thành H⁺ → cạnh tranh trực tiếp với Ca²⁺ tại Troponin C → làm yếu lực co rõ rệt.', x: 64, y: 74 },
        { n: 2, title: 'Khác biệt In vivo (Toàn thân)', desc: 'Trên cơ thể sống, tăng CO2 vừa kích thích giao cảm tăng co bóp, vừa toan hóa trực tiếp ức chế tim; nếu toan quá nặng sẽ suy tim & tụt HA.', x: 86, y: 30 }
      ],
      takeaway: 'Tác dụng TRỰC TIẾP của tăng PaCO2 (86 mmHg) & nhiễm toan là ỨC CHẾ lực co cơ tim (H⁺ tranh chỗ Ca²⁺ ở Troponin C).'
    }
  ],

  // ========================================================================
  // BÀI 6: THÔNG KHÍ PHỔI & DUNG TÍCH HÔ HẤP (Bài 11)
  // ========================================================================
  6: [
    {
      code: 'Hình 11.1',
      page: 'Bài 11 • tr.128',
      title: '4 Giai đoạn của Quá trình Hô hấp',
      summary: 'Chức năng toàn vẹn của hệ hô hấp đòi hỏi phối hợp trơn tru cả 4 mắt xích: Thông khí phổi – Khuếch tán khí – Chuyên chở khí trong máu – Hô hấp tế bào.',
      svg: {
        kind: 'flow',
        banner: 'Chuỗi 4 Giai đoạn Hô hấp Ngoại bào & Nội bào',
        nodes: [
          { title: '1. Thông khí Phổi', sub: 'Trao đổi khí giữa Khí quyển ↔ Phế nang (cơ hô hấp, lồng ngực)', tone: 'blue' },
          { title: '2. Khuếch tán tại Phổi', sub: 'Trao đổi O2 và CO2 qua màng Phế nang – Mao mạch', tone: 'teal' },
          { title: '3. Chuyên chở O2 & CO2', sub: 'Máu động/tĩnh mạch nối Phổi ↔ Mô (Hb, HCO3⁻, Tuần hoàn)', tone: 'red' },
          { title: '4. Trao đổi & Hô hấp Tế bào', sub: 'Khuếch tán tại mô & Ty thể tạo ATP (tiêu thụ O2, thải CO2)', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Hô hấp ngoài (1 + 2)', desc: 'Diễn ra tại bộ máy hô hấp giúp làm mới liên tục khí phế nang và nạp O2 vào máu.', x: 26, y: 50 },
        { n: 2, title: 'Hô hấp trong / tế bào (3 + 4)', desc: 'Đưa O2 tới ty thể oxy hóa chất dinh dưỡng tạo CO2 + H2O + ATP.', x: 76, y: 50 }
      ],
      takeaway: 'Suy hô hấp có thể do hỏng bất kỳ khâu nào trong 4 khâu: giảm thông khí (hen/COPD), dày màng khuếch tán (phù phổi), thiếu Hb/tuần hoàn, hoặc ngộ độc tế bào (Cyanide).'
    },
    {
      code: 'Hình 11.2',
      page: 'Bài 11 • tr.129',
      title: 'Nhóm Cơ Hít vào (Bình thường & Gắng sức)',
      summary: 'Hít vào luôn là động tác CHỦ ĐỘNG (tốn năng lượng cơ). Lúc nghỉ ngơi chủ yếu nhờ cơ hoành (75%) và cơ liên sườn ngoài.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Hít vào Bình thường (Chủ động)', subtitle: 'Tăng 3 chiều lồng ngực', tone: 'blue', bullets: ['1. Cơ Hoành (Chính — 75% thể tích): Co hạ vòm xuống 1–1,5 cm (gắng sức tới 7–10 cm) → tăng chiều dọc', '2. Cơ Liên sườn Ngoài: Nâng xương sườn lên & ra trước ("quai xô") → tăng chiều ngang & trước-sau', 'Thần kinh chi phối cơ hoành: Dây thần kinh Hoành (C3–C5)'] },
          { title: 'Cơ Hít vào Gắng sức (Phụ)', subtitle: 'Huy động khi suy hô hấp / vận động mạnh', tone: 'red', bullets: ['Cơ Ức – Đòn – Chũm (SCM): Kéo xương ức lên trên', 'Các Cơ Thang (Scalene): Kéo cố định 2 xương sườn trên cùng', 'Cơ Răng trước & Cơ Ngực nhỏ (tỳ vai kéo rộng sườn)', 'Chú ý: Quan sát co kéo cơ ức đòn chũm để nhận diện sớm suy hô hấp'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tổn thương tủy cổ cao (trên C3)', desc: 'Liệt hoàn toàn cơ hoành và các cơ gian sườn → ngừng thở tức thì cần thở máy.', x: 26, y: 66 },
        { n: 2, title: 'Dấu hiệu lâm sàng co kéo cơ phụ', desc: 'Khi thấy cơ ức đòn chũm nổi rõ, hõm trên ức lõm sâu lúc hít vào chứng tỏ công hô hấp tăng vọt.', x: 74, y: 56 }
      ],
      takeaway: 'Cơ hoành (dây hoành C3–C4–C5) đảm nhận ~75% thông khí lúc hít vào bình thường. Hít vào LUÔN là quá trình chủ động.'
    },
    {
      code: 'Hình 11.3',
      page: 'Bài 11 • tr.129',
      title: 'Nhóm Cơ Thở ra (Thụ động lúc nghỉ vs Chủ động khi Gắng sức)',
      summary: 'Thở ra bình thường hoàn toàn THỤ ĐỘNG nhờ lực đàn hồi co lại của phổi và thành ngực. Chỉ huy động cơ khi thở ra gắng sức, ho hoặc tắc nghẽn đường thở.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Thở ra Bình thường (Thụ động)', subtitle: 'Không tốn ATP co cơ', tone: 'green', bullets: ['Cơ hoành & liên sườn ngoài giãn ra thụ động', 'Lực đàn hồi nhu mô phổi + sức căng bề mặt kéo phế nang thu nhỏ', 'Thành ngực trở về vị trí nghỉ tự nhiên'] },
          { title: 'Cơ Thở ra Gắng sức (Chủ động)', subtitle: 'Tăng áp lực đẩy khí nhanh', tone: 'amber', bullets: ['1. Các Cơ Thành bụng (Thẳng bụng, chéo bụng ngoài/trong, ngang bụng): Ép tạng bụng đẩy mạnh cơ hoành lên trên', '2. Cơ Liên sườn Trong: Kéo các xương sườn hạ xuống dưới và vào trong thu hẹp lồng ngực'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao hen phế quản khó thở ra?', desc: 'Do tăng kháng lực đường thở, lực đàn hồi thụ động không đủ đẩy khí ra → bệnh nhân phải gồng cơ bụng thở ra gắng sức (chú ý dấu hiệu thở ra kéo dài).', x: 74, y: 40 },
        { n: 2, title: 'Vai trò khi Ho / Rặn', desc: 'Các cơ thành bụng co đột ngột khi thanh môn đóng tạo áp lực > +100 mmHg rồi mở thanh môn bật dị vật.', x: 74, y: 68 }
      ],
      takeaway: 'Thở ra bình thường = THỤ ĐỘNG. Thở ra gắng sức = CHỦ ĐỘNG (nhờ cơ Thành bụng + cơ Liên sườn trong).'
    },
    {
      code: 'Hình 11.4',
      page: 'Bài 11 • tr.130',
      title: 'Phân chia Đường dẫn khí 23 Thế hệ (Vùng Dẫn khí vs Vùng Hô hấp)',
      summary: 'Cây phế quản chia đôi liên tiếp 23 thế hệ: Thế hệ 0–16 chỉ dẫn khí (Khoảng chết giải phẫu ~150 mL); từ thế hệ 17–23 có phế nang tham gia trao đổi khí.',
      svg: {
        kind: 'flow',
        banner: 'Cây Khí – Phế quản từ Khí quản (0) tới Túi Phế nang (23)',
        nodes: [
          { title: 'Thế hệ 0–16: Vùng Dẫn khí', sub: 'Khí quản (0) → Phế quản → Tiểu phế quản tận (16). Thể tích ~150 mL = Khoảng chết giải phẫu (VD)', tone: 'blue' },
          { title: 'Thế hệ 17–19: Tiểu phế quản Hô hấp', sub: 'Bắt đầu xuất hiện các phế nang rải rác trên thành ống', tone: 'teal' },
          { title: 'Thế hệ 20–22: Ống Phế nang', sub: 'Thành ống phủ dày đặc phế nang', tone: 'green' },
          { title: 'Thế hệ 23: Túi Phế nang (~300 triệu)', sub: 'Tổng diện tích trao đổi khí ~70–100 m²; tổng kháng lực rất thấp do tổng thiết diện cực lớn', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Vùng có kháng lực cao nhất', desc: 'Phế quản trung bình (thế hệ 1–7) chiếm phần lớn kháng lực đường thở; còn các tiểu phế quản nhỏ <2 mm tổng thiết diện rất lớn nên kháng lực rất nhỏ ("vùng im lặng" của phổi).', x: 24, y: 50 },
        { n: 2, title: 'Khoảng chết giải phẫu (~150 mL)', desc: 'Lượng khí ở thế hệ 0–16 không trao đổi khí. Thở nhanh nông (TV nhỏ) làm tỷ lệ khoảng chết tăng vọt, thông khí phế nang giảm mạnh!', x: 52, y: 50 }
      ],
      takeaway: 'Thế hệ 0–16 = Vùng dẫn khí (không trao đổi khí, khoảng chết 150 mL). Thế hệ 17–23 = Vùng hô hấp (~70–100 m²).'
    },
    {
      code: 'Hình 11.5',
      page: 'Bài 11 • tr.132',
      title: 'Cấu tạo Phế nang & Tế bào Biểu mô Phế nang (Type I, Type II, Đại thực bào)',
      summary: 'Phế nang lót bởi 2 loại tế bào chính: Tế bào Type I dẹt cực mỏng cho khí khuếch tán và Tế bào Type II tiết Surfactant giảm sức căng bề mặt.',
      imgSrc: 'assets/figures/fig_alveolus.png',
      source: 'Wikimedia Commons / OpenStax',
      pins: [
        { n: 1, title: 'Phế bào Type I (~95% diện tích)', desc: 'Tế bào lát đơn cực mỏng (~0,2 µm) tạo cấu trúc chính của hàng rào trao đổi khí phế nang – mao mạch.', x: 40, y: 40 },
        { n: 2, title: 'Phế bào Type II (~5% diện tích)', desc: 'Tế bào hình khối tròn tiết chất hoạt diện Surfactant (DPPC) và là tế bào gốc tái tạo lại Type I khi bị tổn thương.', x: 64, y: 34 },
        { n: 3, title: 'Đại thực bào phế nang (Alveolar macrophage)', desc: 'Thực bào bụi mịn và vi khuẩn lọt qua lớp nhầy-lông chuyển; cũng là nguyên nhân tế bào "suy tim" chứa hemosiderin.', x: 64, y: 66 }
      ],
      takeaway: 'Type I lót bề mặt trao đổi khí (~95% diện tích); Type II tiết Surfactant bắt đầu nhiều từ tuần 28–34 thai kỳ.'
    },
    {
      code: 'Hình 11.6',
      page: 'Bài 11 • tr.134',
      title: 'Cơ chế Thay đổi Thể tích Lồng ngực theo Định luật Boyle (P1V1 = P2V2)',
      summary: 'Khi cơ hoành hạ xuống và lồng ngực nở rộng, thể tích khoang ngực tăng → áp suất phế nang tụt âm hơn khí quyển (−1 mmHg) → không khí ùa vào phổi.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Hít vào (Lồng ngực nở rộng)', subtitle: 'P phế nang (Palv) < P khí quyển (760 mmHg)', tone: 'blue', bullets: ['V cơ thể tăng theo 3 chiều (Dọc: Hoành; Ngang & Trước-Sau: Liên sườn ngoài)', 'P màng phổi âm sâu hơn (từ −5 xuống −8 cmH2O / −6 mmHg)', 'Palv giảm xuống −1 mmHg → tạo bậc áp suất kéo 500 mL khí đi vào phổi'] },
          { title: 'Thở ra (Lồng ngực thu nhỏ)', subtitle: 'Palv > P khí quyển (+1 mmHg)', tone: 'green', bullets: ['Cơ hít vào giãn → phổi co đàn hồi làm giảm thể tích phế nang', 'Palv tăng nhẹ lên +1 mmHg → đẩy 500 mL khí ra ngoài', 'Cuối mỗi thì (cuối hít vào & cuối thở ra): dòng khí = 0 → Palv = P khí quyển = 0'] }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao cuối thì dòng khí ngừng chảy?', desc: 'Lúc cuối hít vào và cuối thở ra bình thường, áp suất trong phế nang cân bằng hoàn toàn với khí quyển (ΔP = 0).', x: 50, y: 40 },
        { n: 2, title: 'Khoang màng phổi luôn âm', desc: 'Áp suất màng phổi âm giúp kéo dính lá tạng theo lá thành; nếu khí lọt vào (tràn khí màng phổi), phổi xẹp về rốn phổi tức thì.', x: 26, y: 66 }
      ],
      takeaway: 'Khí vào phổi nhờ tạo ÁP SUẤT ÂM (−1 mmHg) tại phế nang khi nở rộng lồng ngực (Định luật Boyle).'
    },
    {
      code: 'Hình 11.7',
      page: 'Bài 11 • tr.135',
      title: 'Sức căng bề mặt & Vai trò chất hoạt diện Surfactant lót Phế nang',
      summary: 'Lớp dịch mỏng lót mặt trong phế nang tạo sức căng bề mặt (T) có xu hướng kéo phế nang xẹp lại; Surfactant (DPPC) chen vào giữa các phân tử nước làm giảm T đi 5–10 lần.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Phế nang KHÔNG có Surfactant', subtitle: 'Sức căng bề mặt nước thuần T ≈ 72 dyn/cm', tone: 'red', bullets: ['Các phân tử nước kéo hút nhau rất mạnh về tâm phế nang', 'Công hít vào tăng gấp nhiều lần, phổi cứng (giảm suất đàn)', 'Nguy cơ xẹp phổi lan tỏa (bệnh màng trong ở trẻ sinh non < 32 tuần)'] },
          { title: 'Phế nang CÓ Surfactant (DPPC)', subtitle: 'Giảm T còn ~5–30 dyn/cm theo bán kính', tone: 'teal', bullets: ['Đầu ưa nước cắm vào dịch phế nang, đuôi kỵ nước hướng vào lòng khí → phá lực kéo ngang giữa các phân tử nước', 'Giảm mạnh sức căng ở phế nang NHỎ nhiều hơn phế nang LỚN → giữ phế nang nhỏ KHÔNG bị xẹp dồn vào phế nang lớn', 'Giữ phế nang khô ráo (giảm lực hút dịch từ mao mạch vào lòng phế nang)'] }
        ]
      },
      pins: [
        { n: 1, title: '4 lợi ích vàng của Surfactant', desc: '(1) Giảm công hô hấp/tăng độ giãn nở phổi, (2) Ổn định các phế nang kích thước khác nhau, (3) Ngừa phù phổi, (4) Đảm bảo phế nang không xẹp cuối thì thở ra.', x: 74, y: 40 },
        { n: 2, title: 'Bệnh màng trong trẻ non tháng', desc: 'Thiếu Surfactant làm trẻ phải rên rỉ, co rút lồng ngực, phổi xẹp trắng trên X-quang; dự phòng bằng Corticoid cho mẹ trước sinh.', x: 26, y: 66 }
      ],
      takeaway: 'Surfactant do phế bào II tiết ra (giàu Dipalmitoyl-phosphatidylcholine) làm tăng độ giãn nở phổi, chống xẹp phế nang nhỏ và ngăn phù phổi.'
    },
    {
      code: 'Hình 11.8',
      page: 'Bài 11 • tr.135',
      title: 'Định luật Laplace trên Phế nang (P = 2T / R)',
      summary: 'Áp suất xẹp P tỷ lệ thuận với sức căng bề mặt T và tỷ lệ NGHỊCH với bán kính R: nếu không có Surfactant, phế nang nhỏ (R bé) có P lớn hơn sẽ dồn sạch khí sang phế nang lớn gây xẹp phổi.',
      svg: {
        kind: 'anatomy',
        regions: [
          { x: 40, y: 40, w: 220, h: 150, label: 'Phế nang Nhỏ (R = 1)', sub: 'Surfactant cô đặc hơn → T giảm mạnh\n→ Giữ P = 2T/R CÂN BẰNG', tone: 'green' },
          { x: 420, y: 20, w: 220, h: 190, label: 'Phế nang Lớn (R = 2)', sub: 'Surfactant giãn loãng hơn → T cao hơn\n→ Giữ P = 2T/R CÂN BẰNG', tone: 'blue' },
          { x: 80, y: 225, w: 520, h: 80, label: 'Công thức Laplace: P = 2T / R', sub: 'Nếu T không đổi, PN nhỏ > PL lớn → phế nang nhỏ xẹp vào phế nang lớn. Nhờ Surfactant đổi T theo R nên các phế nang cùng thông thương ổn định!', tone: 'amber' }
        ],
        links: [
          { x1: 260, y1: 115, x2: 416, y2: 115, label: 'P nhỏ = P lớn (Ổn định)', color: '#16a34a' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao P = 2T/R chứ không phải 4T/R?', desc: 'Phế nang chỉ có 1 bề mặt khí–lỏng bên trong (khác bong bóng xà phòng có 2 mặt trong và ngoài là 4T/R).', x: 50, y: 78 },
        { n: 2, title: 'Cơ chế điều chỉnh T theo bán kính', desc: 'Khi phế nang thu nhỏ lúc thở ra, các phân tử DPPC ép sát nhau lại càng làm giảm T mạnh hơn → triệt tiêu sự tăng của 1/R.', x: 24, y: 34 }
      ],
      takeaway: 'Công thức Laplace ở phế nang: P = 2T/R. Surfactant làm giảm T tỷ lệ với độ thu nhỏ R nên phế nang nhỏ và lớn cùng tồn tại ổn định.'
    },
    {
      code: 'Hình 11.9',
      page: 'Bài 11 • tr.136',
      title: 'Diễn biến Áp suất Phế nang (Palv) & Áp suất Màng phổi (Ppl) theo Thể tích Lưu thông',
      summary: 'Đặt chồng 3 đồ thị theo 1 chu kỳ thở: Thể tích phổi (0 → +500 mL), Áp suất Phế nang (0 → −1 → 0 → +1 → 0 mmHg) và Áp suất Màng phổi (−2,5 → −6 → −2,5 mmHg).',
      svg: {
        kind: 'curve',
        xLabel: 'Chu kỳ thở bình thường (0 → Hít vào → Thở ra)',
        yLabel: 'Thể tích & Áp suất',
        xTicks: [
          { x: 12, label: 'Nghỉ' },
          { x: 50, label: 'Cuối Hít vào' },
          { x: 90, label: 'Cuối Thở ra' }
        ],
        yTicks: [
          { y: 15, label: 'Âm (−6 mmHg)' },
          { y: 50, label: '0 mmHg (K/Q)' },
          { y: 85, label: '+500 mL / +1' }
        ],
        hLines: [
          { y: 50, label: 'Palv = 0 (Khí quyển)', color: '#64748b' }
        ],
        curves: [
          { name: 'Thể tích Khí hít vào (0 → 500 mL)', color: '#16a34a', pts: [[10, 50], [30, 72], [50, 88], [72, 66], [92, 50]] },
          { name: 'Palv (−1 lúc hít, +1 lúc thở ra)', color: '#2563eb', pts: [[10, 50], [30, 38], [50, 50], [72, 62], [92, 50]] },
          { name: 'Ppl (tụt âm từ −2,5 xuống −6 mmHg)', color: '#dc2626', dashed: true, pts: [[10, 32], [30, 22], [50, 14], [72, 24], [92, 32]] }
        ]
      },
      pins: [
        { n: 1, title: 'Palv bằng 0 ở 3 thời điểm', desc: 'Đầu hít vào, cuối hít vào (điểm 500 mL) và cuối thở ra → dòng khí ngưng chảy ở giao điểm đổi chiều.', x: 50, y: 50 },
        { n: 2, title: 'Ppl đạt cực âm tại cuối hít vào', desc: 'Ở cuối hít vào, lực đàn hồi kéo phổi vào trong mạnh nhất nên Ppl âm nhất (~ −6 mmHg hay −7,5 cmH2O), khác với Palv lúc này đã về 0.', x: 50, y: 82 }
      ],
      takeaway: 'Palv dao động quanh 0 (−1 → +1 mmHg) để tạo luồng khí; Ppl LUÔN ÂM và âm nhất ở cuối thì hít vào.'
    },
    {
      code: 'Hình 11.10',
      page: 'Bài 11 • tr.137',
      title: 'Tương quan Palv, Ppl và Áp suất Xuyên phổi (Ptp = Palv − Ppl)',
      summary: 'Áp suất xuyên phổi (Transpulmonary pressure: Ptp = Palv − Ppl) là lực căng thực sự giữ cho các phế nang mở ra; giá trị luôn dương càng lớn ở cuối thì hít vào.',
      svg: {
        kind: 'compare',
        panels: [
          { title: 'Cuối Thở ra Bình thường (FRC)', subtitle: 'Palv = 0 • Ppl = −2,5 mmHg (−5 cmH2O)', tone: 'blue', bullets: ['Áp suất xuyên phổi Ptp = 0 − (−2,5) = +2,5 mmHg (hoặc +5 cmH2O)', 'Đủ cân bằng vừa khít với lực co hồi đàn hồi tự nhiên của phổi', 'Khi mở lồng ngực (Ppl = 0), Ptp tụt về 0 → phổi xẹp hẳn'] },
          { title: 'Cuối Hít vào Bình thường', subtitle: 'Palv = 0 • Ppl = −6 mmHg (−7,5 cmH2O)', tone: 'red', bullets: ['Áp suất xuyên phổi Ptp = 0 − (−6) = +6 mmHg (hoặc +7,5 cmH2O)', 'Lực kéo căng tăng lên giữ thể tích khí 500 mL vừa hít thêm vào trong phổi', 'Suất đàn phổi C = ΔV / ΔPtp'] }
        ]
      },
      pins: [
        { n: 1, title: 'Định nghĩa Áp suất xuyên phổi (Ptp)', desc: 'Ptp = Áp suất bên trong phế nang (Palv) trừ Áp suất bên ngoài phế nang (Ppl). Phải dương phổi mới nở!', x: 50, y: 36 },
        { n: 2, title: 'Ứng dụng cài máy thở PEEP', desc: 'Đặt PEEP dương ở cuối thì thở ra giúp tăng Palv giữ Ptp dương, chống xẹp phế nang ở bệnh nhân ARDS.', x: 75, y: 68 }
      ],
      takeaway: 'Áp suất xuyên phổi Ptp = Palv − Ppl. Giá trị này càng dương → thể tích phổi càng lớn.'
    },
    {
      code: 'Hình 11.11',
      page: 'Bài 11 • tr.138',
      title: 'Đồ thị Suất đàn Phổi (Compliance = ΔV / ΔP) & Hiện tượng Trễ (Hysteresis)',
      summary: 'Đường cong áp suất – thể tích khi bơm căng phổi khác với khi xẹp phổi (tạo vòng trễ hysteresis do sức căng bề mặt). Phổi mất đàn hồi (Khí phế thủng) có độ dốc đứng, phổi xơ cứng có độ dốc nằm ngang.',
      svg: {
        kind: 'curve',
        xLabel: 'Áp suất xuyên phổi (cmH2O)',
        yLabel: 'Thể tích phổi (L)',
        xTicks: [
          { x: 15, label: '0' },
          { x: 45, label: '15' },
          { x: 85, label: '30 cmH2O' }
        ],
        yTicks: [
          { y: 15, label: 'Thấp' },
          { y: 55, label: 'Bình thường' },
          { y: 88, label: 'TLC' }
        ],
        curves: [
          { name: 'Thở ra (Xẹp phổi — trên)', color: '#16a34a', pts: [[12, 16], [28, 52], [50, 74], [82, 86]] },
          { name: 'Hít vào (Căng phổi — dưới, tạo Vòng trễ)', color: '#2563eb', pts: [[12, 16], [42, 34], [64, 62], [82, 86]] },
          { name: 'Xơ phổi (Giảm Compliance, phổi cứng)', color: '#dc2626', dashed: true, pts: [[12, 14], [48, 22], [82, 42]] }
        ]
      },
      pins: [
        { n: 1, title: 'Vòng trễ Hysteresis', desc: 'Cùng một áp suất, thể tích khi thở ra lớn hơn khi hít vào do phải tốn năng lượng phá sức căng bề mặt lúc mở phế nang.', x: 46, y: 46 },
        { n: 2, title: 'Khí phế thủng vs Xơ phổi', desc: 'Khí phế thủng đứt sợi chun → Compliance TĂNG VỌT (dễ hít vào nhưng không co lại thở ra nổi → ứ khí TLC cao). Xơ phổi → Compliance GIẢM (khó hít vào).', x: 76, y: 66 }
      ],
      takeaway: 'Compliance (C = ΔV/ΔP): Xơ phổi, phù phổi, thiếu Surfactant → C GIẢM; Khí phế thủng (COPD) → C TĂNG (mất lực co hồi).'
    },
    {
      code: 'Hình 11.12',
      page: 'Bài 11 • tr.140',
      title: 'Các Thể tích và Dung tích Hô hấp (TV, IRV, ERV, RV, IC, FRC, VC, TLC)',
      summary: '4 thể tích cơ bản không chồng chéo nhau; Dung tích (Capacity) luôn là tổng của từ 2 thể tích cơ bản trở lên.',
      imgSrc: 'assets/figures/fig_lung_volumes.jpg',
      source: 'OpenStax Anatomy & Physiology',
      pins: [
        { n: 1, title: '4 Thể tích sơ cấp', desc: 'TV (Khí lưu thông ~500 mL), IRV (Dự trữ hít vào ~3000 mL), ERV (Dự trữ thở ra ~1100 mL), RV (Khí cặn ~1200 mL — không đo bằng hô hấp ký thường!).', x: 30, y: 50 },
        { n: 2, title: 'Dung tích Sống (VC = IRV + TV + ERV ≈ 4600 mL)', desc: 'Lượng khí tối đa thở ra hết sức sau khi đã hít vào hết sức. Phản ánh thể tích phổi hoạt động được.', x: 65, y: 36 },
        { n: 3, title: 'Dung tích Cặn Chức năng (FRC = ERV + RV ≈ 2300 mL)', desc: 'Thể tích khí còn lại trong phổi cuối thì thở ra bình thường — điểm cân bằng giữa lực co phổi vào trong và lực bung thành ngực ra ngoài.', x: 65, y: 74 }
      ],
      takeaway: 'MỌI dung tích chứa khí cặn RV (tức RV, FRC và TLC) đều KHÔNG đo được trực tiếp bằng phế dung kế thông thường.'
    },
    {
      code: 'Hình 11.13',
      page: 'Bài 11 • tr.141',
      title: 'Cung Phản xạ Ho Bảo vệ Đường thở',
      summary: 'Khởi phát từ kích thích thụ thể ở thanh-khí-phế quản → qua dây X lên hành não → chuỗi 3 pha: Hít sâu → Đóng thanh môn & gồng áp lực (>100 mmHg) → Mở bật tống dị vật.',
      svg: {
        kind: 'flow',
        banner: 'Cung phản xạ 5 thành phần & 3 thì cơ học của Ho',
        nodes: [
          { title: '1. Kích thích đường dẫn khí', sub: 'Khói, đờm, dị vật chạm thụ thể ở thanh quản, carina (nhạy nhất)', tone: 'amber' },
          { title: '2. Hướng tâm qua dây X → Hành não', sub: 'Tích hợp trung khu ho hành não', tone: 'blue' },
          { title: '3. Hít vào sâu ~2,5 L', sub: 'Tạo nguồn khí đẩy dồi dào', tone: 'teal' },
          { title: '4. Đóng thanh môn & Nén áp suất', sub: 'Co mạnh cơ bụng & liên sườn trong đẩy Palv > +100 mmHg', tone: 'red' },
          { title: '5. Bật mở thanh môn', sub: 'Luồng khí xoáy tốc độ cực cao (tới hàng trăm km/h) quét sạch dị vật', tone: 'green' }
        ]
      },
      pins: [
        { n: 1, title: 'Carina là điểm nhạy cảm ho nhất', desc: 'Ngã ba khí phế quản cực nhạy kích thích cơ học; ngoài ra tai ngoài (nhánh Arnold dây X) cũng gây phản xạ ho.', x: 18, y: 50 },
        { n: 2, title: 'Nguy cơ mở khí quản / liệt cơ bụng', desc: 'Bệnh nhân mở khí quản không đóng kín thanh môn được hoặc liệt cơ bụng sẽ ho rất yếu, dễ ứ đọng đàm viêm phổi.', x: 68, y: 50 }
      ],
      takeaway: 'Thứ tự phản xạ ho: Hít sâu (2,5 L) → Đóng nắp thanh môn/dây thanh → Co cơ thở ra gắng sức tạo áp suất cao → Mở đột ngột đẩy khí tốc độ cao.'
    },
    {
      code: 'Hình 11.14',
      page: 'Bài 11 • tr.142',
      title: 'Hô hấp đồ Chuẩn (Spirogram 6000 mL)',
      summary: 'Biểu đồ ghi biên độ các động tác thở bình thường xen kẽ hít sâu tối đa và thở ra gắng sức hết mức trên giấy tốc độ chuẩn.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian ghi hô hấp ký',
        yLabel: 'Thể tích phổi (mL)',
        xTicks: [
          { x: 18, label: 'Thở đều (TV)' },
          { x: 48, label: 'Hít hết sức (TLC)' },
          { x: 70, label: 'Thở hết sức (RV)' },
          { x: 90, label: 'Thở lại' }
        ],
        yTicks: [
          { y: 15, label: '0' },
          { y: 25, label: '1200 (RV)' },
          { y: 45, label: '2300 (FRC)' },
          { y: 90, label: '6000 (TLC)' }
        ],
        hLines: [
          { y: 25, label: 'Mực RV (~1200 mL) — Không thở ra hết được', color: '#dc2626' },
          { y: 45, label: 'Mực FRC (~2300 mL)', color: '#64748b' }
        ],
        curves: [
          { name: 'Đường biểu diễn Spirogram', color: '#2563eb', pts: [[10, 45], [16, 54], [22, 45], [28, 54], [34, 45], [46, 90], [66, 25], [76, 45], [84, 54], [92, 45]] }
        ]
      },
      pins: [
        { n: 1, title: 'Biên độ dao động nhỏ ~ 500 mL', desc: 'Nhịp thở êm ái nằm ngay phía trên mức FRC (từ 2300 lên 2800 mL).', x: 22, y: 42 },
        { n: 2, title: 'Đỉnh 6000 mL vs Đáy 1200 mL', desc: 'Khoảng cách từ đỉnh cao nhất (6000) xuống đáy thấp nhất (1200) chính là Dung tích sống VC = 4800 mL.', x: 56, y: 50 }
      ],
      takeaway: 'Trên hô hấp đồ chuẩn: phần dưới đường RV (0 → 1200 mL) là "vùng mù" không tự thở ra được bằng máy đo thông thường.'
    },
    {
      code: 'Hình 11.15',
      page: 'Bài 11 • tr.143',
      title: 'Hô hấp đồ Gắng sức (FVC, FEV1, FEF25-75%): Bình thường vs Tắc nghẽn vs Hạn chế',
      summary: 'Chìa khóa phân biệt hai hội chứng lớn của Hô hấp ký bằng tỷ số Gaensler (FEV1/FVC) và giá trị FVC.',
      svg: {
        kind: 'curve',
        xLabel: 'Thời gian thở ra gắng sức (giây: 0 → 6s)',
        yLabel: 'Thể tích thở ra tích lũy (L)',
        xTicks: [
          { x: 15, label: '0s' },
          { x: 35, label: '1s (Mốc FEV1)' },
          { x: 85, label: '6s (FVC)' }
        ],
        yTicks: [
          { y: 15, label: '0 L' },
          { y: 55, label: '2,5 L' },
          { y: 88, label: '5,0 L' }
        ],
        vLines: [
          { x: 35, label: 'Giây thứ 1 (FEV1)', color: '#0f172a' }
        ],
        curves: [
          { name: 'Bình thường (FEV1=4L, FVC=5L → 80%)', color: '#16a34a', pts: [[15, 15], [22, 68], [35, 80], [60, 87], [88, 88]] },
          { name: 'Hạn chế (FEV1=2,6L, FVC=3L → 87%)', color: '#2563eb', pts: [[15, 15], [22, 48], [35, 58], [60, 62], [88, 62]] },
          { name: 'Tắc nghẽn (FEV1=1,5L, FVC=4L → 38%)', color: '#dc2626', dashed: true, pts: [[15, 15], [24, 30], [35, 40], [60, 62], [88, 76]] }
        ]
      },
      pins: [
        { n: 1, title: 'Hội chứng Tắc nghẽn (Hen, COPD)', desc: 'Luồng khí kẹt thoát ra chậm → FEV1 giảm RẤT NẶNG làm FEV1/FVC < 70% (dưới LLN); FEF25-75% giảm sớm ở tiểu phế quản nhỏ.', x: 40, y: 66 },
        { n: 2, title: 'Hội chứng Hạn chế (Xơ phổi, Gù vẹo, Liệt cơ)', desc: 'Phổi nhỏ nở kém nên FVC và TLC đều giảm (<80%), nhưng đường thở thoáng nên giây 1 thổi ra rất nhanh → FEV1/FVC bình thường hoặc tăng (>70–85%).', x: 64, y: 40 }
      ],
      takeaway: 'FEV1/FVC < 70% = Tắc nghẽn (Hen/COPD). FEV1/FVC ≥ 70% kèm FVC & TLC giảm = Hạn chế (Xơ phổi/thành ngực).'
    },
    {
      code: 'Hình 11.16',
      page: 'Bài 11 • tr.143',
      title: 'Đo RV / FRC bằng Phương pháp Pha loãng Khí Heli (Helium Dilution)',
      summary: 'Cho bệnh nhân thở hệ kín chứa khí trơ Heli nồng độ biết trước C1, thể tích V1; sau vài phút cân bằng nồng độ giảm còn C2 → tính ngay được V2 (FRC) bằng bảo toàn khối lượng.',
      svg: {
        kind: 'flow',
        banner: 'Phương trình Pha loãng Heli: C1 × V1 = C2 × (V1 + FRC)',
        nodes: [
          { title: '1. Trước khi nối van (Cuối thở ra BT)', sub: 'Phế dung kế có thể tích V1 chứa nồng độ Heli ban đầu C1 (không vào máu)', tone: 'blue' },
          { title: '2. Hít thở trong vòng kín vài phút', sub: 'Heli khuếch tán đều vào toàn bộ thể tích khí thông thương trong phổi (FRC)', tone: 'teal' },
          { title: '3. Đạt cân bằng nồng độ C2', sub: 'FRC = V1 × (C1 − C2) / C2 (có máy hấp thụ CO2 & bù O2)', tone: 'green' },
          { title: '4. Hạn chế ở COPD nặng', sub: 'Chỉ đo được khí thông thương; bỏ sót bóng khí kén khí bị bít tắc', tone: 'amber' }
        ]
      },
      pins: [
        { n: 1, title: 'Tại sao dùng khí Heli?', desc: 'Vì Heli hoàn toàn trơ và gần như KHÔNG tan qua màng phế nang – mao mạch vào máu → bảo toàn toàn bộ trong khoảng khí.', x: 24, y: 50 },
        { n: 2, title: 'Nhược điểm với bẫy khí (Air trapping)', desc: 'Nếu bệnh nhân có kén khí phế thủng đóng kín không thông với khí quản, Heli không lọt vào được → cho kết quả FRC thấp giả tạo so với phế thân ký.', x: 78, y: 50 }
      ],
      takeaway: 'Pha loãng Heli dùng công thức C1V1 = C2(V1+FRC), nhưng CHỈ đo được các phế nang còn thông thương tốt.'
    },
    {
      code: 'Hình 11.17',
      page: 'Bài 11 • tr.144',
      title: 'Đo RV / FRC bằng Phương pháp Phế thân ký Toàn thân (Body Plethysmography)',
      summary: 'Bệnh nhân ngồi trong buồng kín áp suất chuẩn, ngậm ống ngậm bị đóng van và hổn hển thở gắng nhẹ; áp dụng định luật Boyle (P1V1 = P2V2) đo được TOÀN BỘ khí lồng ngực (TGV) kể cả kén khí tắc.',
      svg: {
        kind: 'flow',
        banner: 'Nguyên lý Phế thân ký Toàn thân (Định luật Boyle: ΔPbox ↔ ΔV lồng ngực)',
        nodes: [
          { title: '1. Ngồi trong buồng kín (Thể tích Vbox)', sub: 'Cuối thì thở ra bình thường (mức FRC), van ống ngậm đóng kín', tone: 'blue' },
          { title: '2. Nỗ lực hít vào chống van đóng', sub: 'Lồng ngực nở thêm ΔV → áp suất miệng/phế nang giảm ΔP1, áp suất buồng tăng nhẹ ΔP2', tone: 'purple' },
          { title: '3. Tính chính xác FRC = P1 × ΔV / ΔP1', sub: 'Đo được CẢ khí bị bẫy trong kén phế thủng (TGV)', tone: 'green' },
          { title: '4. So sánh với pha loãng Heli', sub: 'FRC (Thân ký) − FRC (Heli) = Thể tích khí bị bẫy (Trapped gas)', tone: 'red' }
        ]
      },
      pins: [
        { n: 1, title: 'Tiêu chuẩn vàng đo TLC & RV', desc: 'Vì sự thay đổi thể tích lồng ngực nén toàn bộ khí trong phổi (kể cả khí trong bóng khí không thông thương), đây là phương pháp chính xác nhất ở bệnh nhân COPD nặng.', x: 64, y: 50 },
        { n: 2, title: 'Suy ra RV và TLC', desc: 'Sau khi có FRC (bằng thân ký hoặc Heli), lấy FRC − ERV = RV; và lấy RV + VC = TLC.', x: 84, y: 50 }
      ],
      takeaway: 'Phế thân ký toàn thân dựa vào định luật Boyle đo được TẤT CẢ khí trong lồng ngực (bao gồm cả khí bị bẫy trong COPD/kén khí).'
    }
  ]
};
