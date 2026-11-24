// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC - PHẦN 2 (BÀI 6 ĐẾN BÀI 10)
// Mức 1 (6/24 = 25%) | Mức 2 (9/24 = 37,5%) | Mức 3 (9/24 = 37,5%)
// ==========================================================================

window.EXTRA_PART2 = {
  // BÀI 6: CƠ HỌC HÔ HẤP
  // Cũ (12 câu): L1: q0, q1, q3, q4, q6, q10 (6? Wait let's tag 5 L1 + 1 L1 extra = 6):
  // Let's check: q0 (23 thế hệ - L1), q1 (cơ thẳng bụng - L1), q3 (FRC - L1), q4 (TLC>VC>FRC>TV - L1), q6 (DPPC type II - L1), q7 (2/3 sức căng bề mặt - L1) -> That's 6 L1! Or make q10 (Ptp formula - L1) and q4 (L2). Let's tag Base:
  // L1 (5): q0, q1, q3, q6, q10; L2 (5): q2, q4, q5, q7, q11; L3 (2): q8, q9
  // Add Extra: 1 L1, 4 L2, 7 L3 -> Total: 6 L1, 9 L2, 9 L3 = 24!
  6: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Biến thiên áp suất)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh thông số)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giới hạn hô hấp ký)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế đàn hồi phổi)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Phân tích kháng lực)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính thông khí phế nang)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Công thức áp suất)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế thụ thể β2)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong động tác hít vào bình thường ở tư thế nghỉ ngơi, cơ hô hấp nào đóng vai trò quan trọng nhất (tạo ra khoảng 75% sự thay đổi thể tích lồng ngực) và được chi phối bởi dây thần kinh nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.129",
        options: [
          "Cơ hoành, do dây thần kinh hoành xuất phát từ đốt tủy cổ C3 – C5 chi phối",
          "Cơ liên sườn trong, do các dây thần kinh ngực T1 – T11 chi phối",
          "Cơ thẳng bụng, do dây thần kinh thắt lưng L1 – L3 chi phối",
          "Cơ ức đòn chũm, do dây thần kinh lang thang (dây X) chi phối"
        ],
        answer: 0,
        explain: "Cơ hoành là cơ hít vào chính (tạo ~75% thay đổi thể tích lồng ngực, hạ xuống 1 cm làm tăng thể tích ~200 mL), nhận chi phối vận động từ dây thần kinh hoành (đốt tủy C3–C5)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Tại sao trong trạng thái bình thường, áp suất trong khoang màng phổi (Ppl) luôn có giá trị ÂM hơn áp suất khí quyển (–2,5 đến –6 mmHg)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.132",
        options: [
          "Do hai lực ngược chiều kéo giãn khoang màng phổi kín: Phổi có tính đàn hồi luôn xu hướng co nhỏ về rốn phổi, còn lồng ngực có xu hướng bung nở ra ngoài (kèm bơm bạch huyết hút nhẹ dịch)",
          "Do không khí từ phế nang liên tục tràn vào khoang màng phổi",
          "Do tim co bóp hút hết máu trong khoang màng phổi",
          "Do cơ hoành luôn co thắt dương ép vào lá tạng"
        ],
        answer: 0,
        explain: "Khoang màng phổi là một khoang ảo kín chứa vài mL dịch bôi trơn. Nhờ xu hướng co vào trong của phổi đối kháng với xu hướng giãn ra ngoài của thành ngực (khi lá tạng dính sát lá thành), khoang màng phổi luôn duy trì một áp suất âm (-5 cmH2O cuối thở ra, -7,5 cmH2O cuối hít vào)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế định luật Laplace & Surfactant)",
        q: "Theo định luật Laplace (P = 2T / R), nếu phổi KHÔNG có chất hoạt diện (Surfactant) làm thay đổi sức căng bề mặt T theo bán kính R, điều gì sẽ xảy ra giữa một phế nang nhỏ và một phế nang lớn thông nhau?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.134",
        options: [
          "Phế nang nhỏ (bán kính R nhỏ) sẽ có áp suất P lớn hơn phế nang lớn → đẩy toàn bộ khí từ phế nang nhỏ sang phế nang lớn gây XẸP PHẾ NANG NHỎ và căng vỡ phế nang lớn",
          "Phế nang lớn sẽ đẩy hết khí vào phế nang nhỏ",
          "Hai phế nang tự cân bằng áp suất hoàn hảo mà không cần Surfactant",
          "Sức căng bề mặt T sẽ tự giảm về 0"
        ],
        answer: 0,
        explain: "Theo công thức P = 2T/R: nếu sức căng bề mặt T bằng nhau như ở nước tinh khiết, phế nang có R nhỏ sẽ có áp suất P lớn hơn nhiều → khí dồn sang phế nang lớn gây xẹp phế nang nhỏ. Surfactant tập trung dày hơn trên phế nang nhỏ làm giảm T rất mạnh khi R nhỏ, giúp cân bằng P giữa các phế nang!"
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Hội chứng Tắc nghẽn vs Hạn chế)",
        q: "Trên kết quả đo hô hấp ký, tiêu chí sinh lý cơ bản nhất để phân biệt Rối loạn thông khí Tắc nghẽn (như Hen, COPD) với Rối loạn thông khí Hạn chế (như Xơ phổi, gù vẹo cột sống) là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.141",
        options: [
          "Rối loạn tắc nghẽn làm giảm mạnh FEV1 nên chỉ số Tiffeneau/Gaensler (FEV1/FVC) GIẢM < 70% (và tăng RV/FRC); còn rối loạn hạn chế làm giảm VC, TLC nhưng FEV1/FVC bình thường hoặc tăng (≥ 70%)",
          "Rối loạn hạn chế có FEV1/FVC giảm dưới 40%",
          "Rối loạn tắc nghẽn làm giảm Thể tích khí cặn (RV) xuống bằng 0",
          "Cả hai đều có Dung tích sống (VC) tăng trên 150%"
        ],
        answer: 0,
        explain: "Trong bệnh lý tắc nghẽn đường thở (hen, COPD), luồng khí thở ra trong giây đầu tiên bị cản trở nặng → FEV1 giảm nhiều hơn FVC → tỉ số FEV1/FVC < 70% (và bẫy khí làm tăng RV, FRC). Trong bệnh lý hạn chế (xơ phổi, tràn dịch màng phổi), phổi nở kém → VC, FVC và TLC đều giảm, nhưng đường thở thông thoáng nên FEV1 giảm tỉ lệ tương ứng với FVC (FEV1/FVC ≥ 70%)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Một bệnh nhân mắc bệnh Khí phế thũng (Emphysema - đứt gãy các sợi chun elastin trong nhu mô phổi) sẽ có sự thay đổi Suất đàn của phổi (Compliance) và dung tích phổi như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 11, tr.136",
        options: [
          "TĂNG suất đàn của phổi (phổi giãn ra dễ nhưng mất lực đàn hồi co lại để thở ra) → dẫn đến tăng ứ khí (tăng RV, tăng FRC và lồng ngực hình thùng)",
          "GIẢM suất đàn của phổi giống như bệnh xơ phổi",
          "Giảm thể tích khí cặn (RV) xuống gần bằng 0",
          "Tăng áp suất âm màng phổi lên –50 mmHg lúc nghỉ"
        ],
        answer: 0,
        explain: "Suất đàn (Compliance = ΔV/ΔP) tỉ lệ nghịch với độ cứng/lực đàn hồi của phổi. Khi sợi chun elastin bị phá hủy trong khí phế thũng, phổi mất lực co hồi → suất đàn TĂNG bất thường (hít vào dễ nhưng thở ra rất khó vì thiếu lực co đàn hồi), gây ứ khí tăng RV và FRC."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính chỉ số Tiffeneau & Đọc hô hấp ký)",
        q: "[Kỹ năng Đọc Hô hấp ký] Kết quả đo hô hấp ký của một bệnh nhân nam 58 tuổi hút thuốc lá 30 gói-năm: FVC = 3,5 Lít (85% giá trị dự đoán); FEV1 = 1,75 Lít (52% dự đoán); RV (đo bằng phế thân ký) = 165% dự đoán. Hãy tính chỉ số Gaensler (FEV1/FVC) và kết luận:",
        source: "Kỹ năng S1: Tính và biện luận hô hấp ký",
        options: [
          "FEV1/FVC = 50% (< 70%) → Rối loạn thông khí tắc nghẽn mức độ trung bình-nặng kèm ứ khí (RV tăng)",
          "FEV1/FVC = 200% → Rối loạn thông khí hạn chế đơn thuần",
          "FEV1/FVC = 85% → Hô hấp ký hoàn toàn bình thường",
          "FEV1/FVC = 50% → Rối loạn thông khí hạn chế do xơ phổi"
        ],
        answer: 0,
        explain: "FEV1 / FVC = 1,75 / 3,5 = 0,50 = 50% (< 70% giới hạn bình thường) kèm FVC còn 85% (> 80%) và RV tăng 165% → Điển hình cho Hội chứng tắc nghẽn đường thở (COPD ở người hút thuốc lá lâu năm)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Tràn khí màng phổi)",
        q: "Một bệnh nhân bị chấn thương đâm thủng thành ngực phải gây Tràn khí khoang màng phổi phải (khoang màng phổi thông với khí quyển). Diễn biến cơ học hô hấp xảy ra ở phổi bên phải là:",
        source: "Vận dụng S2 - Áp suất âm màng phổi",
        options: [
          "Áp suất khoang màng phổi phải tăng từ giá trị âm lên bằng 0 mmHg (bằng áp suất khí quyển) → mất áp suất xuyên phổi → phổi phải XẸP LẠI về phía rốn phổi còn thành ngực phải hơi phồng ra",
          "Áp suất màng phổi phải trở nên âm hơn tới –50 mmHg",
          "Phổi phải giãn căng phồng gấp đôi bình thường",
          "Cơ hoành bên phải tăng co bóp đẩy toàn bộ khí ra ngoài không ảnh hưởng phổi"
        ],
        answer: 0,
        explain: "Khi khoang màng phổi bị thủng thông với khí trời, không khí tràn vào làm Ppl tăng bằng 0 mmHg → Ptp = Palv - Ppl = 0 → mất lực kéo phổi đi theo lồng ngực, nên lực đàn hồi tự nhiên của nhu mô phổi kéo phổi phải xẹp hoàn toàn về rốn phổi."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Hội chứng Suy hô hấp cấp trẻ sơ sinh non tháng)",
        q: "Một trẻ sơ sinh đẻ non ở tuần thai thứ 27 (cân nặng 950g) sau sinh vài giờ xuất hiện thở rên, rút lõm ngực, tím tái nặng (Bệnh màng trong / RDS). Nguyên nhân sinh lý trực tiếp và hướng điều trị đặc hiệu là:",
        source: "Vận dụng S2 - Surfactant ở trẻ non tháng",
        options: [
          "Tế bào phế nang type II chưa trưởng thành nên thiếu hụt chất hoạt diện Surfactant (làm tăng sức căng bề mặt gây xẹp phế nang lan tỏa); điều trị bằng bơm Surfactant ngoại sinh qua nội khí quản và thở áp lực dương",
          "Do trẻ sinh non bị thiếu cơ hoành bẩm sinh",
          "Do thừa quá nhiều Surfactant làm tắc đường thở",
          "Do phế nang trẻ sinh non không có lớp dịch lót"
        ],
        answer: 0,
        explain: "Tế bào phế nang type II chỉ bắt đầu tổng hợp đủ Surfactant từ khoảng tuần thai 28–34 (tháng 7–8). Trẻ sinh cực non tuần 27 bị thiếu Surfactant → sức căng bề mặt tăng vọt → phế nang xẹp mỗi lần thở ra → suy hô hấp nặng. Cần bơm Surfactant thay thế kèm hỗ trợ áp lực dương (CPAP/thở máy)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Hướng dẫn đo Hô hấp ký / Lưu lượng đỉnh)",
        q: "[Trạm Thực hành Hô hấp ký] Khi hướng dẫn bệnh nhân thổi vào máy Hô hấp ký để đo FVC và FEV1 đạt chuẩn chất lượng, động tác nào trong bảng kiểm quyết định kết quả chính xác nhất?",
        source: "Kỹ năng S3: Bảng kiểm thực hành đo Hô hấp ký",
        options: [
          "Kẹp mũi, ngậm kín ống thổi (không hở môi hay tắc lưỡi), hít vào thật sâu tối đa hết sức rồi THỔI RA THẬT MẠNH, THẬT NHANH và KÉO DÀI ÍT NHẤT 6 GIÂY cho đến khi cạn hết khí",
          "Chỉ thở ra nhẹ nhàng từ từ giống như lúc đang ngủ",
          "Không cần kẹp mũi và chỉ thổi ra đúng 0,5 giây rồi ngừng",
          "Ngậm ống thổi sau khi đã thở ra hết phân nửa lượng khí"
        ],
        answer: 0,
        explain: "Để đo FEV1 (giây đầu tiên) và FVC (dung tích sống gắng sức) chính xác, người bệnh bắt buộc phải hít vào hết cỡ đạt TLC rồi bật hơi thổi ra với tốc độ tối đa ngay từ đầu (tối đa công cơ thẳng bụng) và duy trì thổi hết khí (ít nhất 6 giây ở người lớn) để đạt đường bình nguyên."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Tính ảnh hưởng của Khoảng chết khi thở qua ống thở dài)",
        q: "Một thợ lặn dùng ống thở (ống snorkel) có thể tích khoảng chết tăng thêm 250 mL (tổng VD = 150 + 250 = 400 mL). Nếu người này vẫn thở với tần số 12 lần/phút và TV = 500 mL như bình thường, thì thông khí phế nang (V̇A) thực tế chỉ còn lại bao nhiêu và điều gì xảy ra?",
        source: "Vận dụng S2 - Bài toán Khoảng chết giải phẫu",
        options: [
          "V̇A chỉ còn 12 × (500 – 400) = 1.200 mL/phút (giảm tới 71%!) → gây ứ CO2 và thiếu O2 nhanh chóng nếu không tự tăng độ sâu nhịp thở (tăng TV)",
          "V̇A vẫn giữ nguyên ở mức 4.200 mL/phút",
          "V̇A tăng lên thành 6.000 mL/phút",
          "Khoảng chết không ảnh hưởng đến thông khí phế nang"
        ],
        answer: 0,
        explain: "Thông khí phế nang V̇A = f × (TV - VD). Khi ống thở làm tăng VD lên 400 mL mà TV vẫn 500 mL thì mỗi nhịp chỉ có 100 mL khí mới xuống tới phế nang (V̇A = 1.200 mL/phút). Đây là lý do ống lặn snorkel không được làm quá dài và to."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết hiệu quả của kiểu thở chậm sâu cho bệnh nhân)",
        q: "Khi chăm sóc một bệnh nhân hồi sức sau phẫu thuật bụng bị đau vết mổ nên có xu hướng thở RẤT NHANH và NÔNG (f = 30 lần/phút, TV = 200 mL), nhân viên y tế cần NHẬN BIẾT nguy cơ sinh lý nào?",
        source: "Thái độ A1: Nhận biết nguy cơ suy hô hấp do thở nông",
        options: [
          "Mặc dù thông khí phút V̇E vẫn là 6.000 mL/phút nhưng thông khí phế nang thực sự tụt xuống chỉ còn 1.500 mL/phút (30 × [200–150]), gây thiếu oxy máu, ứ CO2 và dễ xẹp phổi đáy",
          "Bệnh nhân đang được thông khí phế nang dư thừa quá mức",
          "Khoảng chết giải phẫu tự động giảm xuống còn 0 mL",
          "Áp suất màng phổi tăng âm tới –40 mmHg giúp nở phổi rất tốt"
        ],
        answer: 0,
        explain: "Thở nhanh nông (TV sát ngưỡng khoảng chết 150 mL) khiến phần lớn khí chỉ đi ra đi vào vùng dẫn khí (khoảng chết) chứ không tới phế nang trao đổi khí → thông khí phế nang giảm nặng và dễ xẹp phế nang vùng đáy phổi. Cần giảm đau tốt và hướng dẫn tập thở chậm, sâu (thở bụng)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thái độ dự phòng ở thai phụ có nguy cơ sinh non)",
        q: "Một sản phụ mang thai 29 tuần có dấu hiệu dọa sinh non bắt buộc nhập viện. Bác sĩ sản khoa chủ động tiêm Corticosteroid (Betamethasone/Dexamethasone) cho mẹ đủ liệu trình 48 giờ nếu trì hoãn được chuyển dạ, đồng thời giải thích ân cần mục đích sinh lý cho sản phụ. Việc làm này thể hiện điều gì?",
        source: "Thái độ A3: Nội tâm hóa dự phòng suy hô hấp sơ sinh",
        options: [
          "Nội tâm hóa (A3): Áp dụng chuẩn mực y học chứng cứ về cơ học hô hấp (Corticoid kích thích tế bào phế nang type II thai nhi trưởng thành tăng tổng hợp chất hoạt diện Surfactant) nhằm bảo vệ tính mạng trẻ sơ sinh",
          "Chỉ nhằm mục đích giảm đau bụng cho sản phụ",
          "Làm ngừng hoàn toàn hoạt động hô hấp của thai nhi trong bụng mẹ",
          "Không liên quan đến sinh lý phổi thai nhi"
        ],
        answer: 0,
        explain: "Glucocorticoid (Betamethasone) qua nhau thai kích thích gen tổng hợp phospholipid DPPC và protein của chất hoạt diện Surfactant ở tế bào phế nang type II thai nhi, giúp giảm rõ rệt tỉ lệ mắc và tử vong do bệnh màng trong ở trẻ sinh non."
      }
    ]
  },

  // BÀI 7: TRAO ĐỔI KHÍ TẠI PHỔI
  // Cũ (12 câu): L1: q1, q2, q5 (3); L2: q0, q3, q4, q6, q9, q10, q11 (7); L3: q7, q8 (2)
  // Thêm mới: 3 L1, 2 L2, 7 L3 -> Tổng: 6 L1, 9 L2, 9 L3 = 24!
  7: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Pha trộn máu tĩnh mạch)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại cấu trúc 8 lớp)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số DLO2)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích hệ số khuếch tán)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đặc điểm mạch phổi)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Phân vùng West)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Biến thiên VA/Q đỉnh-đáy)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Shunt VA/Q=0)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Thuyên tắc VA/Q=∞)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Động học cân bằng 0,25s)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chống phù phổi)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Kháng lực mạch phổi theo FRC)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số)",
        q: "Ở điều kiện áp suất khí quyển 760 mmHg và nhiệt độ cơ thể 37°C, phân áp hơi nước bão hòa (PH2O) trong đường dẫn khí và phân áp O2 của khí phế nang bình thường lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.155",
        options: [
          "PH2O = 47 mmHg; Phân áp O2 phế nang (PAO2) = 100 – 104 mmHg",
          "PH2O = 0 mmHg; PAO2 = 159 mmHg",
          "PH2O = 100 mmHg; PAO2 = 40 mmHg",
          "PH2O = 47 mmHg; PAO2 = 46 mmHg"
        ],
        answer: 0,
        explain: "Tại 37°C, hơi nước bão hòa trong đường thở luôn tạo phân áp PH2O = 47 mmHg. Sau khi làm ẩm (149 mmHg ở khí quản) và trao đổi liên tục với máu phổi, phân áp khí trong phế nang đạt mức ổn định: PAO2 ≈ 100 (104) mmHg và PACO2 = 40 mmHg."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại giá trị chuẩn)",
        q: "Giá trị trung bình của phân áp O2 và phân áp CO2 trong máu tĩnh mạch trộn (đầu mao mạch phổi, động mạch phổi) khi nghỉ ngơi là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.158",
        options: [
          "PvO2 = 40 mmHg và PvCO2 = 45 – 46 mmHg",
          "PvO2 = 95 mmHg và PvCO2 = 40 mmHg",
          "PvO2 = 100 mmHg và PvCO2 = 0,3 mmHg",
          "PvO2 = 60 mmHg và PvCO2 = 20 mmHg"
        ],
        answer: 0,
        explain: "Máu tĩnh mạch trộn từ toàn bộ cơ thể trở về tâm thất phải lên động mạch phổi có PvO2 = 40 mmHg và PvCO2 = 45–46 mmHg. Như vậy khuynh áp ban đầu qua màng phế nang-mao mạch của O2 là 100 – 40 = 60 mmHg, của CO2 là 46 – 40 = 6 mmHg."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tỉ số trung bình)",
        q: "Ở người trưởng thành khỏe mạnh lúc nghỉ ngơi (thông khí phế nang V̇A ≈ 4,2 L/phút, cung lượng tim Q ≈ 5,0 L/phút), tỉ số thông khí / tưới máu (V̇A/Q) trung bình toàn phổi là khoảng bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.160",
        options: [
          "Khoảng 0,8",
          "Khoảng 3,3",
          "Khoảng 0,2",
          "Bằng 2,5"
        ],
        answer: 0,
        explain: "Trung bình toàn phổi: V̇A / Q = 4,2 / 5,0 ≈ 0,8 (khoảng 0,8 – 0,84)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích vận động & DLO2)",
        q: "Khi cơ thể vận động thể lực nặng, khả năng khuếch tán của khí O2 qua màng phổi (DLO2) có thể tăng gấp 3 lần (từ 21 lên ~65 mL/phút/mmHg) chủ yếu nhờ cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 13, tr.158",
        options: [
          "Tăng cung lượng tim làm mở thêm các mao mạch phổi vốn đang đóng lúc nghỉ (đặc biệt ở đỉnh phổi - tuyển mộ mao mạch) và làm giãn rộng mao mạch giúp tăng diện tích tiếp xúc trao đổi khí (A) và tối ưu tỉ lệ VA/Q",
          "Do màng phế nang - mao mạch mỏng đi 3 lần nhờ chất hoạt diện bị tiêu hủy",
          "Do độ hòa tan của khí O2 trong nước tăng gấp 10 lần khi chạy",
          "Do vận động làm co thắt toàn bộ mạch máu đáy phổi"
        ],
        answer: 0,
        explain: "Khi nghỉ ngơi nhiều mao mạch ở vùng đỉnh phổi (Vùng 1–2 West) đóng lại hoặc tưới máu rất ít. Khi vận động, áp suất động mạch phổi tăng nhẹ giúp mở toàn bộ các mao mạch phổi (recruitment & distension), làm tăng mạnh diện tích trao đổi khí (A) và đưa V̇A/Q toàn phổi tiến gần 1,0."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Vùng 1, Vùng 2, Vùng 3 West)",
        q: "Ở một bệnh nhân tụt huyết áp nặng sau mất máu hoặc đang thở máy với áp lực dương cuối thì thở ra (PEEP) quá cao, vùng nào của phổi có nguy cơ xuất hiện tình trạng Vùng 1 West (PA > Pa > Pv) nhiều nhất?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 12, tr.150",
        options: [
          "Vùng ĐỈNH phổi (vì ở đỉnh phổi khi đứng áp suất mạch máu Pa thấp nhất do ảnh hưởng trọng lực nên dễ bị áp suất phế nang PA cao hơn đè xẹp hoàn toàn mao mạch, tạo khoảng chết phế nang)",
          "Vùng ĐÁY phổi",
          "Vùng sát cơ hoành sau lưng",
          "Vùng phổi không bao giờ chịu ảnh hưởng của trọng lực"
        ],
        answer: 0,
        explain: "Ở đỉnh phổi (trên tim), áp suất thủy tĩnh trong động mạch phổi giảm đi theo chiều cao cột máu. Nếu tụt huyết áp (giảm Pa) hoặc thở máy PEEP cao (tăng PA), PA > Pa > Pv khiến các mao mạch đỉnh phổi bị bẹp hoàn toàn, không còn máu chảy qua → tạo Vùng 1 West (khoảng chết phế nang)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính áp suất khuếch tán tại đỉnh núi cao)",
        q: "[Kỹ năng Tính toán Phân áp Khí] Một nhà leo núi lên đỉnh núi cao nơi áp suất khí quyển (PB) chỉ còn 347 mmHg (tỉ lệ O2 vẫn là 21%). Khi hít vào khí quản ở 37°C (PH2O = 47 mmHg), phân áp O2 trong khí hít vào đã làm ẩm (PiO2) của người này chỉ còn bao nhiêu?",
        source: "Kỹ năng S1: Tính toán theo định luật Dalton",
        options: [
          "PiO2 = (347 – 47) × 0,21 = 300 × 0,21 = 63 mmHg (thấp hơn rất nhiều so với 149 mmHg ở mực nước biển)",
          "PiO2 = 347 × 0,21 = 72,9 mmHg",
          "PiO2 = (347 + 47) × 0,21 = 82,7 mmHg",
          "PiO2 vẫn giữ nguyên bằng 149 mmHg vì tỉ lệ % O2 không đổi"
        ],
        answer: 0,
        explain: "Công thức PiO2 = (PB – PH2O) × FiO2. Vì áp suất hơi nước PH2O phụ thuộc duy nhất vào thân nhiệt (37°C luôn = 47 mmHg) nên khi PB giảm xuống 347 mmHg, áp suất khí khô còn 300 mmHg → PiO2 = 300 × 0,21 = 63 mmHg → dẫn đến PAO2 và PaO2 tụt thấp gây say độ cao."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận vì sao Xơ phổi giảm O2 sớm hơn tăng CO2)",
        q: "Một bệnh nhân mắc bệnh xơ phổi kẽ tiến triển làm dày gấp 4 lần màng phế nang - mao mạch. Khí máu động mạch lúc đầu thường biểu hiện như thế nào và giải thích vì sao theo định luật khuếch tán?",
        source: "Vận dụng S2 - Bệnh lý dày màng hô hấp",
        options: [
          "PaO2 GIẢM rõ rệt (nhất là khi vận động), trong khi PaCO2 thường BÌNH THƯỜNG hoặc giảm nhẹ do hệ số khuếch tán của CO2 lớn gấp ~20 lần O2 nên CO2 vẫn thoát kịp qua màng dày",
          "PaCO2 tăng vọt lên 100 mmHg trong khi PaO2 vẫn bình thường 100 mmHg",
          "Cả PaO2 và PaCO2 đều tăng gấp đôi",
          "Màng dày không ảnh hưởng đến sự khuếch tán của O2 mà chỉ cản trở CO2"
        ],
        answer: 0,
        explain: "Theo công thức khuếch tán V = (ΔP × A × S) / (d × √MW): khi bề dày màng (d) tăng gấp 4 lần, vận tốc khuếch tán cả 2 khí đều giảm. Nhưng vì CO2 khuếch tán nhanh gấp 20,7 lần O2 nên CO2 vẫn khuếch tán qua được màng dày (và thậm chí giảm nhẹ nếu bệnh nhân thở nhanh do thiếu oxy), trong khi O2 không kịp cân bằng nhất là khi máu qua mao mạch nhanh lúc gắng sức → giảm PaO2 sớm."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích đáp ứng thở O2 100% trong Shunt vs Rối loạn khuếch tán)",
        q: "Hai bệnh nhân A (bị dày màng hô hấp do phù/xơ phổi nhẹ) và B (bị Shunt phải-trái nặng, máu tĩnh mạch đi tắt không qua phế nang thông khí) đều có PaO2 giảm còn 55 mmHg. Khi cho cả hai thở O2 100%, PaO2 của hai người thay đổi ra sao?",
        source: "Vận dụng S2 - Thử nghiệm thở Oxy 100%",
        options: [
          "Bệnh nhân A tăng PaO2 lên rất cao (vì tăng ΔPO2 khuếch tán qua màng dày); Bệnh nhân B (Shunt) hầu như KHÔNG cải thiện nhiều PaO2 (vì máu đi tắt vẫn trộn vào động mạch mà không tiếp xúc với phế nang chứa 100% O2)",
          "Cả hai bệnh nhân đều tăng PaO2 lên 600 mmHg như nhau",
          "Bệnh nhân B tăng mạnh PaO2 còn bệnh nhân A tụt xuống 20 mmHg",
          "Thở O2 100% làm mất toàn bộ hemoglobin máu"
        ],
        answer: 0,
        explain: "Ở bệnh nhân dày màng phế nang (rối loạn khuếch tán), thở O2 100% nâng PAO2 lên > 600 mmHg tạo chênh lệch ΔP cực lớn giúp O2 khuếch tán qua màng dễ dàng. Ngược lại, trong Shunt (VA/Q = 0 hoặc shunt tim phải-trái), phần máu đi qua vùng phế nang bình thường vốn đã bão hòa gần 100% ở khí trời nên thở 100% O2 cũng không thể bù cho dòng máu tĩnh mạch đi tắt trộn vào!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm giải thích X-quang / Tư thế nằm bệnh nhân viêm phổi 1 bên)",
        q: "[Trạm Lâm sàng Hô hấp] Một bệnh nhân bị viêm đông đặc nặng toàn bộ THÙY DƯỚI PHỔI PHẢI (phế nang chứa đầy dịch mủ, thông khí vùng phổi phải rất kém). Theo nguyên lý trọng lực phân bố tưới máu phổi của West, nên cho bệnh nhân nằm nghiêng bên nào để cải thiện oxy máu tốt hơn?",
        source: "Kỹ năng S3: Ứng dụng Vùng West & tư thế nằm",
        options: [
          "Cho bệnh nhân nằm nghiêng BÊN PHỔI LÀNH (nghiêng TRÁI) nằm ở dưới: trọng lực sẽ dồn lượng máu tưới (Q) nhiều hơn xuống phổi trái lành đang thông khí tốt, giúp cải thiện tỉ số VA/Q",
          "Cho nằm nghiêng bên phổi bệnh (nghiêng phải) ở dưới để dồn hết máu vào vùng phổi bị đông đặc tạo Shunt nặng hơn",
          "Bắt buộc treo ngược chân lên trần nhà",
          "Tư thế nằm không làm thay đổi phân bố tưới máu phổi"
        ],
        answer: 0,
        explain: "Nhờ trọng lực, vùng phổi nằm ở phía dưới (phụ thuộc) luôn nhận tưới máu (Q) lớn nhất (Vùng 3 West). Cho bên phổi lành (phổi trái) nằm dưới giúp tối đa hóa tưới máu vào các phế nang khỏe mạnh đang thông khí tốt (tối ưu V̇A/Q), giảm dòng máu đi qua vùng đông đặc phổi phải."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích phản xạ co mạch phổi khi lên cao / COPD)",
        q: "Tại sao bệnh nhân COPD nặng hoặc người sống lâu năm ở vùng núi cao thiếu oxy mạn tính lại hay bị biến chứng Tăng áp động mạch phổi và Suy tim phải (Tâm phế mạn)?",
        source: "Vận dụng S2 - Co mạch phổi do thiếu oxy lan tỏa",
        options: [
          "Vì thiếu oxy phế nang lan tỏa toàn bộ hai phổi gây CO THẮT hầu hết các tiểu động mạch phổi → làm tăng vọt kháng lực mạch phổi, tăng áp động mạch phổi khiến tâm thất phải phải bơm chống hậu tải cao lâu ngày dẫn đến phì đại và suy thất phải",
          "Vì thiếu oxy gây giãn mạch phổi tối đa làm tụt áp lực động mạch phổi về 0",
          "Vì thiếu oxy làm tim trái ngừng đập hoàn toàn",
          "Vì CO2 ứ đọng làm teo cơ tim phải"
        ],
        answer: 0,
        explain: "Co mạch phổi khi thiếu oxy rất có ích khi chỉ bị ở một vùng khu trú (giúp điều hướng máu sang vùng lành). Nhưng khi thiếu oxy xảy ra LAN TỎA cả hai phổi (COPD toàn thể, sống ở núi cao), toàn bộ hệ mạch phổi đồng loạt co thắt làm kháng lực tiểu tuần hoàn tăng vọt → Tăng áp động mạch phổi và Tâm phế mạn (suy thất phải)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết cơ chế giải thích vị trí lao phổi đỉnh)",
        q: "Khi giải thích cho sinh viên và người bệnh về lý do tại sao bệnh Lao phổi (do trực khuẩn *Mycobacterium tuberculosis* hiếu khí tuyệt đối) thường khởi phát tổn thương đặc hiệu ở VÙNG ĐỈNH PHỔI, kiến thức sinh lý nào cần NHẬN BIẾT ngay?",
        source: "Thái độ A1: Nhận biết mối liên hệ sinh lý - lâm sàng",
        options: [
          "Vì khi đứng, tỉ số VA/Q ở đỉnh phổi cao nhất (2,4 – 3,3) tạo nên môi trường phân áp oxy phế nang (PAO2 ~132 mmHg) cao nhất phổi, rất thuận lợi cho trực khuẩn lao ưa khí phát triển (và tưới máu thấp làm ít bạch cầu/kháng thể đến bảo vệ)",
          "Vì đỉnh phổi là nơi có áp suất máu cao nhất và ngập dịch nhất phổi",
          "Vì trực khuẩn lao là vi khuẩn kỵ khí tuyệt đối cần nơi không có O2",
          "Vì phế nang đỉnh phổi không có không khí lưu thông"
        ],
        answer: 0,
        explain: "Nhận biết mối liên hệ giữa tỉ số V̇A/Q cao ở đỉnh phổi (PAO2 ≈ 132 mmHg, lưu lượng máu tưới ít) với đặc tính hiếu khí của trực khuẩn lao là nền tảng tư duy sinh lý lâm sàng quan trọng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước nguy cơ phù phổi do truyền quá mức / tăng áp lực nhĩ trái)",
        q: "Một bệnh nhân suy tim trái cấp có áp suất tĩnh mạch phổi và mao mạch phổi tăng vọt từ 7 mmHg lên 32 mmHg (vượt quá áp suất keo huyết tương 28 mmHg). Thầy thuốc cần ĐÁP ỨNG giải thích cơ chế nào và hành động ra sao?",
        source: "Thái độ A2: Xử trí kịp thời phù phổi cấp huyết động",
        options: [
          "Nhận định ngay lực đẩy lọc (32 mmHg) đã thắng áp suất keo giữ nước (28 mmHg) làm dịch tràn vào khoảng kẽ và phế nang gây phù phổi cấp → phải cấp cứu ngay bằng tư thế ngồi, thở oxy, thuốc giãn mạch/lợi tiểu để hạ áp lực mao mạch phổi xuống dưới 28 mmHg",
          "Truyền thêm thật nhiều dịch đạm thấp để kéo áp suất mao mạch phổi lên 45 mmHg",
          "Cho bệnh nhân nằm sấp và cấm không cho dùng lợi tiểu",
          "Chỉ kê kháng sinh uống tại nhà theo dõi 1 tuần"
        ],
        answer: 0,
        explain: "Bình thường mao mạch phổi luôn khô ráo nhờ áp suất thủy tĩnh thấp (~7 mmHg) nhỏ hơn áp suất keo (28 mmHg). Khi suy thất trái đẩy áp lực mao mạch phổi lên > 28 mmHg, dịch thấm ồ ạt vào lòng phế nang làm dày màng trao đổi khí và ngạt thở cấp (phù phổi cấp) đòi hỏi xử trí cấp cứu tức thì."
      }
    ]
  },

  // BÀI 8: CHUYÊN CHỞ KHÍ TRONG MÁU
  // Cũ (12 câu): L1: q0, q3, q10 (3); L2: q1, q2, q4, q5, q6, q7, q8, q11 (8); L3: q9 (1)
  // Thêm mới: 3 L1, 1 L2, 8 L3 -> Tổng: 6 L1, 9 L2, 9 L3 = 24!
  8: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Công thức ctO2)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hệ số sử dụng O2)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Yếu tố dịch phải Barcroft)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Tỉ lệ 3 dạng CO2)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiện tượng Hamburger)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Các mốc đường cong Barcroft)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vai trò O2 hòa tan)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiệu quả HbF)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiệu quả Haldane)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Khí máu ngộ độc CO)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Enzyme CA trong HC)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Điều hòa hô hấp hành não)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số)",
        q: "Giá trị P50 (phân áp oxy mà tại đó 50% Hemoglobin bão hòa với O2) trên đường cong phân ly Hb-O2 (Barcroft) của người trưởng thành bình thường là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.170",
        options: [
          "Khoảng 26,8 – 27 mmHg",
          "Khoảng 60 mmHg",
          "Khoảng 95 – 100 mmHg",
          "Khoảng 10 mmHg"
        ],
        answer: 0,
        explain: "P50 là chỉ số đánh giá ái lực của Hb với O2: bình thường ở pH 7,4, T=37°C, PCO2=40 mmHg thì P50 = 26,8 mmHg (≈ 27 mmHg). Đường cong lệch phải → P50 tăng; lệch trái → P50 giảm."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại phân áp mô)",
        q: "Ở điều kiện bình thường lúc nghỉ, phân áp oxy trung bình ở dịch kẽ mô bao quanh tế bào và bên trong tế bào lần lượt có giá trị khoảng bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.169",
        options: [
          "Dịch kẽ mô khoảng 40 mmHg; Bên trong tế bào trung bình khoảng 23 mmHg (tối thiểu chỉ cần 1–3 mmHg cho chuyển hóa)",
          "Dịch kẽ mô 100 mmHg; Bên trong tế bào 95 mmHg",
          "Dịch kẽ mô 0 mmHg; Bên trong tế bào 40 mmHg",
          "Dịch kẽ mô 60 mmHg; Bên trong tế bào 80 mmHg"
        ],
        answer: 0,
        explain: "O2 khuếch tán từ mao mạch mô (PO2 giảm từ 95 xuống 40 mmHg) ra dịch kẽ (~40 mmHg) rồi vào trong tế bào (~23 mmHg, dao động 5–40 mmHg). Tại ty thể tế bào chỉ cần 1–3 mmHg là đủ duy trì chuỗi hô hấp tế bào."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại bộ phận nhận cảm hóa học)",
        q: "Các hóa thụ quan ngoại biên nhạy cảm với sự giảm phân áp O2 hòa tan máu động mạch (PaO2 < 60 mmHg) nằm ở đâu và dẫn truyền về trung tâm hô hấp hành não theo dây thần kinh nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 15, tr.182",
        options: [
          "Ở Thể cảnh (dây IX - thiệt hầu) và Thể động mạch chủ (dây X - lang thang)",
          "Ở Xoang động mạch cảnh và trong tâm nhĩ phải",
          "Ở Nút xoang và mạng Purkinje",
          "Ở Sừng trước tủy gai đoạn thắt lưng L3 – L4"
        ],
        answer: 0,
        explain: "Cần phân biệt với áp thụ quan ở xoang cảnh/quai ĐMC: Hóa thụ quan ngoại biên nằm ở THỂ CẢNH (dây Hering → dây IX) và THỂ ĐMC (dây X), chứa tế bào cầu (glomus) type I rất nhạy khi PaO2 tụt xuống dưới 60 mmHg."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích cấu trúc đường cong hình chữ S)",
        q: "Tại sao đường cong phân ly Hb-O2 lại có đoạn trên (PO2 từ 70 đến 100 mmHg) nằm gần như NGANG (bão hòa cao) trong khi đoạn dưới (PO2 từ 15 đến 50 mmHg) lại DỐC ĐỨNG?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 14, tr.168",
        options: [
          "Đoạn nằm ngang giúp bảo vệ lượng O2 gắn vào Hb ở phổi ngay cả khi lên cao hay bệnh phổi nhẹ làm PAO2 tụt từ 100 xuống 70 mmHg; đoạn dốc đứng giúp tại mô chỉ cần PO2 mô giảm nhẹ là HbO2 nhả ồ ạt O2 cho tế bào",
          "Do ở phổi Hemoglobin bị mất hết nhân sắt",
          "Do ở mô nhiệt độ luôn hạ xuống 10°C",
          "Do dạng O2 hòa tan chiếm 98% ở đoạn nằm ngang"
        ],
        answer: 0,
        explain: "Hình dạng chữ S (Sigmoid) do tương tác hợp tác giữa 4 tiểu đơn vị globin là một thiết kế sinh lý tuyệt vời: đoạn bình nguyên (70–100 mmHg) là 'vùng an toàn' giữ SaO2 > 93%; đoạn dốc (15–50 mmHg) là 'vùng nhả oxy mạnh' phục vụ chuyển hóa mô."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính toán ctO2 và Giao O2 cho mô)",
        q: "[Kỹ năng Tính toán Huyết khí] Một bệnh nhân thiếu máu nặng chỉ còn nồng độ Hemoglobin (tHb) = 7,5 g/dL (bằng 1/2 người bình thường), nhưng phổi khỏe mạnh nên PaO2 = 100 mmHg, SaO2 = 98%. Hàm lượng oxy toàn phần trong máu động mạch (ctO2) của người này là khoảng bao nhiêu?",
        source: "Kỹ năng S1: Áp dụng công thức ctO2 trong thiếu máu",
        options: [
          "Khoảng 10,5 mL O2/dL máu (chỉ bằng một nửa bình thường ~20 mL/dL dù SpO2 đo trên ngón tay vẫn là 98% – bẫy lâm sàng!)",
          "Vẫn bình thường ở mức 20,0 mL O2/dL máu vì SaO2 đạt 98%",
          "Khoảng 1,5 mL O2/dL máu",
          "Khoảng 40,0 mL O2/dL máu"
        ],
        answer: 0,
        explain: "ctO2 = (tHb × FO2Hb × 1,39) + (PaO2 × 0,003) = (7,5 × 0,98 × 1,39) + (100 × 0,003) ≈ 10,22 + 0,3 = 10,52 mL/dL. Đây là bẫy lâm sàng cực kỳ quan trọng: máy đo SpO2 kẹp ngón tay chỉ đo TỈ LỆ % Hb đang gắn oxy (vẫn báo 98%!) chứ KHÔNG phản ánh tổng lượng O2 máu nếu bệnh nhân bị thiếu máu nặng!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận máu dự trữ lâu ngày làm lệch trái Barcroft)",
        q: "Khi truyền một lượng lớn máu toàn phần hoặc hồng cầu lắng đã được lưu trữ trong ngân hàng máu quá lâu (làm giảm mạnh nồng độ 2,3-DPG trong hồng cầu) cho một bệnh nhân nặng, hiệu quả cung cấp O2 cho mô ngay sau truyền bị ảnh hưởng như thế nào?",
        source: "Vận dụng S2 - Vai trò 2,3-DPG",
        options: [
          "Đường cong phân ly Hb-O2 của khối hồng cầu truyền vào bị LỆCH SANG TRÁI (giảm P50, tăng ái lực giữ O2) nên hồng cầu khó nhả O2 cho mô trong 12 – 24 giờ đầu cho đến khi hồng cầu tổng hợp lại đủ 2,3-DPG",
          "Đường cong lệch phải cực mạnh giúp mô nhận gấp 5 lần oxy ngay lập tức",
          "2,3-DPG làm biến đổi toàn bộ Fe2+ thành Fe3+",
          "Hồng cầu truyền vào không cần Hb nữa mà chở O2 100% ở dạng hòa tan"
        ],
        answer: 0,
        explain: "2,3-DPG gắn vào chuỗi β của Hb khử giúp đẩy O2 ra khỏi Hb (làm đường cong lệch phải). Máu lưu trữ lâu ngày bị cạn kiệt 2,3-DPG → đường cong lệch TRÁI → sau khi truyền vào máu, hồng cầu giữ chặt O2 và chậm nhả O2 cho mô trong ngày đầu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích liệu pháp Oxy cao áp khi thiếu máu cực nặng / ngộ độc CO)",
        q: "Tại sao trong buồng Oxy cao áp (Hyperbaric oxygen: cho thở 100% O2 ở áp suất 3 atm, làm PaO2 tăng lên tới ~2.000 mmHg), cơ thể vẫn có thể cung cấp đủ lượng O2 tối thiểu cho mô dù Hemoglobin bị bất hoạt tạm thời?",
        source: "Vận dụng S2 - Định luật Henry & O2 hòa tan",
        options: [
          "Vì dạng O2 hòa tan tương quan tuyến tính KHÔNG GIỚI HẠN với PaO2: ở PaO2 = 2.000 mmHg, lượng O2 hòa tan tăng lên tới 2.000 × 0,003 = 6,0 mL/dL máu (đủ mức 5 mL/dL mô tiêu thụ lúc nghỉ!)",
          "Vì áp suất cao làm 1 g Hb gắn được 100 mL O2",
          "Vì áp suất cao biến khí N2 thành O2 trong máu",
          "Vì tăng tốc độ hoạt động của men carbonic anhydrase lên 100 lần"
        ],
        answer: 0,
        explain: "Bình thường dạng O2 hòa tan chỉ có 0,3 mL/dL (ở PaO2 = 100 mmHg). Nhưng vì O2 hòa tan tỉ lệ thuận tuyến tính không giới hạn với PaO2 (hệ số 0,003 mL/dL/mmHg), trong buồng oxy cao áp 3 atm (PaO2 ≈ 2.000 mmHg), lượng O2 hòa tan đạt 6 mL/dL — vượt qua mức tiêu thụ oxy cơ bản ~5 mL/dL của mô lúc nghỉ!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm phân tích Khí máu & Hct tĩnh mạch vs động mạch)",
        q: "[Trạm Thực hành Huyết học - Hô hấp] Khi sinh viên lấy nhầm máu TĨNH MẠCH thay vì máu ĐỘNG MẠCH đi làm xét nghiệm khí máu và dung tích hồng cầu (Hct), những thông số nào sẽ có sự khác biệt đặc trưng giúp nhận ra ngay lỗi lấy mẫu?",
        source: "Kỹ năng S3: Biện luận lỗi mẫu khí máu & Hiện tượng Hamburger",
        options: [
          "PO2 thấp (~40 mmHg thay vì 95), SO2 thấp (~75% thay vì 97%), PCO2 cao (~46 mmHg thay vì 40), pH hơi thấp hơn (~7,35) và Hct hơi cao hơn khoảng 3% (do hiện tượng Hamburger hút Cl- và nước vào hồng cầu)",
          "PO2 cao tới 150 mmHg và PCO2 bằng 10 mmHg",
          "Hct thấp hơn máu động mạch 20%",
          "Không có bất kỳ sự khác biệt nào về PO2, PCO2 hay Hct giữa máu động mạch và tĩnh mạch"
        ],
        answer: 0,
        explain: "Máu tĩnh mạch có PO2 ~40 mmHg, SO2 ~75%, PCO2 ~46 mmHg, pH ~7,35–7,36; đồng thời nhờ hiện tượng Hamburger (Cl- đi vào đổi HCO3- kéo theo H2O vào hồng cầu), thể tích hồng cầu và Hct máu tĩnh mạch cao hơn máu động mạch khoảng 3%."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích phản ứng ở phổi khi ngưng thở / tăng thông khí)",
        q: "Khi một người tự ý THỞ NHANH VÀ SÂU quá mức (tăng thông khí chủ động) trong 2 phút trước khi lặn xuống nước, điều gì xảy ra với PaCO2 và PaO2 máu động mạch và tại sao hành động này dễ gây ngất chìm dưới nước?",
        source: "Vận dụng S2 - Điều hòa hô hấp qua CO2 vs O2",
        options: [
          "PaCO2 tụt xuống rất thấp (ví dụ 20 mmHg) gây co mạch não, trong khi PaO2 tăng không đáng kể (chỉ từ 95 lên 115 mmHg, SaO2 đã bão hòa 99% rồi); khi lặn xuống O2 tiêu thụ tụt nhanh dưới 40 mmHg gây ngất thiếu oxy não TRƯỚC KHI CO2 kịp tăng đủ ngưỡng kích thích muốn thở lại!",
          "PaO2 tăng lên gấp 3 lần (300 mmHg) giúp nhịn thở được 15 phút an toàn",
          "PaCO2 tăng lên 80 mmHg làm giãn mạch não mạnh",
          "SaO2 tăng lên 200% nhờ tăng thông khí"
        ],
        answer: 0,
        explain: "Bình thường SaO2 ở khí trời đã bão hòa ~97%, nên thở nhanh sâu hầu như không tích thêm được O2 nhưng lại thổi mất rất nhiều CO2 (đẩy PaCO2 xuống rất thấp). Khi lặn, cơ sử dụng hết O2 làm PaO2 tụt gây ngất thiếu oxy não (shallow water blackout) trong khi PaCO2 chưa kịp tăng tới ngưỡng gây cảm giác ngạt muốn ngoi lên thở!"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết bẫy bệnh nhân COPD thở Oxy liều cao)",
        q: "Một bệnh nhân mắc bệnh phổi tắc nghẽn mạn tính (COPD) giai đoạn nặng có tình trạng ứ CO2 mạn tính (PaCO2 = 65 mmHg) và PaO2 = 52 mmHg. Nhân viên y tế cần NHẬN BIẾT nguy cơ sinh lý nào khi cho bệnh nhân này thở Oxy lưu lượng quá cao (100% O2)?",
        source: "Thái độ A1: Nhận biết nguyên tắc dùng oxy an toàn ở bệnh nhân COPD",
        options: [
          "Ở người ứ CO2 mạn, hóa thụ quan trung ương đã quen/chai với CO2 cao nên kích thích thở chủ yếu dựa vào tín hiệu THIẾU O2 (PaO2 thấp) qua thể cảnh; nếu cho thở O2 quá cao nâng vọt PaO2 lên > 100 mmHg có thể làm mất động lực thở gây ức chế hô hấp, tăng ứ CO2 nặng hơn (và tăng hiệu quả Haldane đẩy thêm CO2 ra máu) dẫn đến hôn mê tăng CO2!",
          "Thở oxy cao làm nổ phổi ngay lập tức do áp suất phế nang đạt 1000 mmHg",
          "Thở oxy cao làm Hb biến thành HbF",
          "Bệnh nhân COPD luôn bắt buộc phải thở 100% O2 liên tục ở nhà"
        ],
        answer: 0,
        explain: "Ở bệnh nhân COPD ứ CO2 mạn tính, trung tâm hô hấp phụ thuộc một phần vào kích thích giảm oxy máu qua hóa thụ quan ngoại biên; đồng thời theo hiệu quả Haldane, tăng bão hòa O2 làm giảm khả năng gắn CO2 của Hb và làm giãn mạch ở vùng VA/Q thấp (làm nặng thêm bất tương xứng VA/Q). Do đó chỉ cho thở O2 liều kiểm soát giữ mục tiêu SpO2 khoảng 88–92%."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Xử trí cấp cứu ngộ độc khí CO - Không tin máy đo SpO2 thường)",
        q: "Trong vụ hỏa hoạn có nạn nhân hít phải nhiều khói than nghi ngộ độc khí CO: môi nạn nhân không tím tái, máy đo SpO2 kẹp ngón tay thông thường vẫn hiển thị 98%! Thái độ ĐÁP ỨNG đúng chuẩn cấp cứu của bác sĩ trực là:",
        source: "Thái độ A2: Không chủ quan với SpO2 giả bình thường trong ngộ độc CO",
        options: [
          "Không dựa vào SpO2 thường (vì máy không phân biệt được HbCO và HbO2) hay PaO2 hòa tan để loại trừ; phải lập tức cho thở oxy lưu lượng cao 100% (hoặc Carbogen 95% O2 + 5% CO2 / oxy cao áp) và xét nghiệm CO-oximetry định lượng % HbCO",
          "Cho bệnh nhân xuất viện ngay vì SpO2 = 98% chứng tỏ máu hoàn toàn đủ oxy",
          "Chỉ cho bệnh nhân uống nước lọc và nghỉ ngơi",
          "Cho bệnh nhân hít thêm khí CO2 100%"
        ],
        answer: 0,
        explain: "Máy đo độ bão hòa oxy kẹp ngón tay (Pulse oximeter) 2 bước sóng thông thường bị đánh lừa bởi HbCO (có phổ hấp thụ ánh sáng gần giống HbO2) nên vẫn báo SpO2 giả tạo 98–100% trong khi bệnh nhân đang thiếu oxy tế bào trầm trọng! Cần nhận biết bẫy này để xử trí cấp cứu ngay."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Chủ động giải thích & phòng ngừa ngộ độc khí CO trong cộng đồng)",
        q: "Vào mùa lạnh, người dân tại một số địa phương có thói quen đốt than tổ ong/than củi sưởi ấm trong phòng kín đóng cửa sổ hoặc nổ máy phát điện trong nhà kín. Bác sĩ y tế dự phòng tích cực truyền thông giải thích cơ chế ngộ độc CO không mùi, không gây khó thở báo trước để người dân thay đổi thói quen. Đây là biểu hiện:",
        source: "Thái độ A3: Nội tâm hóa trách nhiệm phòng bệnh cộng đồng",
        options: [
          "Nội tâm hóa (A3): Chuyển hóa hiểu biết sâu sắc về sinh lý ngộ độc HbCO (không màu, không mùi, không kích thích thể cảnh do PaO2 không giảm, ái lực gấp 210 lần O2) thành ý thức chủ động bảo vệ sức khỏe cộng đồng",
          "Hành động can thiệp quá mức vào đời sống cá nhân",
          "Chỉ làm để hoàn thành chỉ tiêu kỹ năng giao tiếp",
          "Vì than củi sinh ra quá nhiều khí O2 gây ngộ độc"
        ],
        answer: 0,
        explain: "Khí CO không màu, không mùi, không gây kích thích đường thở và không làm giảm PaO2 hòa tan nên nạn nhân lịm đi trong giấc ngủ mà không hề cảm thấy khó thở để tự cứu mình. Tích cực tuyên truyền phòng ngừa từ gốc thể hiện thái độ nội tâm hóa trách nhiệm y đức."
      }
    ]
  },

  // BÀI 9: CHỨC NĂNG TẠO NƯỚC TIỂU VÀ BÀI XUẤT CÁC SẢN PHẨM CHUYỂN HÓA
  // Cũ (12 câu): L1: q0, q6, q10 (3); L2: q2, q3, q4, q5, q7, q8, q11 (7); L3: q1, q9 (2)
  // Thêm mới: 3 L1, 2 L2, 7 L3 -> Tổng: 6 L1, 9 L2, 9 L3 = 24!
  9: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại màng lọc)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính áp suất lọc UP)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tác động AA và EA)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Feedback cầu - ống)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bẫy ADH vs Ống lượn gần)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ẩm bào protein ở PCT)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Ngưỡng thận & Tm Glucose)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Độ thẩm thấu Quai Henle)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế Aldosterone)" },
      { level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Giới hạn Creatinine)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Thanh thải PAH = ERPF)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh Cx vs CInulin)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số lọc)",
        q: "Giá trị trung bình của Độ lọc cầu thận (GFR) và Phân suất lọc (Filtration Fraction - FF = GFR/ERPF) ở người trưởng thành khỏe mạnh lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.202–203",
        options: [
          "GFR = 125 mL/phút (~180 Lít/24 giờ); Phân suất lọc FF ≈ 0,20 (20%)",
          "GFR = 650 mL/phút; Phân suất lọc FF = 80%",
          "GFR = 1,2 mL/phút (~1,8 Lít/24 giờ); Phân suất lọc FF = 99%",
          "GFR = 50 mL/phút; Phân suất lọc FF = 5%"
        ],
        answer: 0,
        explain: "Mỗi phút có ~625–650 mL huyết tương qua thận (ERPF), trong đó 20% được lọc qua cầu thận tạo GFR = 125 mL/phút (180 Lít/ngày). 99% dịch lọc được tái hấp thu dọc ống thận nên lượng nước tiểu bài xuất chỉ còn ~1% (1,5–1,8 Lít/ngày)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại kênh vận chuyển ống thận)",
        q: "Thuốc lợi tiểu quai (như Furosemide) và thuốc lợi tiểu nhóm Thiazide lần lượt ức chế các chất đồng vận chuyển nào dọc theo ống thận?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.212–215",
        options: [
          "Furosemide ức chế kênh Na+-K+-2Cl- (NKCC2) ở cành lên dày quai Henle; Thiazide ức chế kênh Na+-Cl- (NCC) ở đoạn đầu ống lượn xa",
          "Furosemide ức chế kênh SGLT2 ở ống lượn gần; Thiazide ức chế kênh Aquaporin-2 ở ống góp",
          "Furosemide ức chế bơm Na+/K+-ATPase ở cầu thận; Thiazide ức chế Aldosterone ở quai Henle",
          "Cả hai đều ức chế thụ thể V2 của ADH tại tế bào chính"
        ],
        answer: 0,
        explain: "Cành lên dày quai Henle tái hấp thu ~25–27% NaCl nhờ kênh đồng vận chuyển 1Na+-1K+-2Cl- (NKCC2 - đích tác dụng của Furosemide, nên Furosemide làm mất độ ưu trương tủy thận và lợi tiểu rất mạnh!). Đoạn đầu ống lượn xa (đoạn pha loãng) tái hấp thu ~5% NaCl qua kênh Na+-Cl- (NCC - đích tác dụng của Thiazide)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại vị trí tái hấp thu & kênh SGLT)",
        q: "Tại ống lượn gần (PCT), phần lớn Glucose (khoảng 90% ở đoạn S1 và 10% ở đoạn S3) được tái hấp thu ở màng bờ bàn chải theo cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.208",
        options: [
          "Vận chuyển tích cực thứ phát đồng vận chuyển với Na+ qua kênh SGLT2 (90%) và SGLT1 (10%), sau đó qua màng đáy bên vào máu qua kênh GLUT2",
          "Khuếch tán đơn giản qua lớp lipid màng không cần chất mang",
          "Ẩm bào giống như tái hấp thu protein",
          "Vận chuyển chủ động nguyên phát qua bơm H+-ATPase"
        ],
        answer: 0,
        explain: "Bơm Na+/K+-ATPase ở bờ đáy bên giữ nồng độ Na+ trong tế bào ống lượn gần luôn thấp, tạo lực kéo Na+ từ lòng ống đi vào cùng Glucose qua kênh SGLT2 (tỉ lệ 1 Na+ : 1 Glucose ở đoạn đầu S1, tái hấp thu 90%, là đích của thuốc SGLT2i như Empagliflozin/Dapagliflozin) và SGLT1 (10% ở đoạn S3)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế cô đặc nước tiểu ngược dòng & Vasa recta)",
        q: "Tại sao hệ thống mạch thẳng Vasa recta đi song song quanh quai Henle của các nephron cận tủy lại KHÔNG rửa trôi mất chất hòa tan (NaCl, Ure) khiến vùng tủy thận mất độ ưu trương (1200 mOsm/L)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.217",
        options: [
          "Do Vasa recta có lưu lượng máu rất chậm (chỉ chiếm 1–2% lưu lượng máu thận) và có hình chữ U trao đổi ngược dòng: khi máu đi xuống nhận thêm muối/mất nước trở nên ưu trương, khi vòng đi lên lại trả bớt muối về mô kẽ tủy và nhận lại nước",
          "Do thành mạch Vasa recta dày 5 lớp hoàn toàn không thấm nước hay bất kỳ ion nào",
          "Do mạch Vasa recta chứa toàn khí oxy chứ không chứa huyết tương",
          "Do thận tiết men phá hủy hết NaCl trước khi máu vào Vasa recta"
        ],
        answer: 0,
        explain: "Nếu máu chảy qua tủy thận nhanh và theo đường thẳng, nó sẽ cuốn trôi toàn bộ NaCl và Ure phá hủy bậc thang ưu trương tủy thận. Nhờ cấu trúc quai chữ U của mạch thẳng Vasa recta (cơ chế trao đổi ngược dòng thụ động) cùng lưu lượng máu rất chậm (1–2%), tủy thận vẫn được nuôi dưỡng mà không bị mất độ ưu trương 1200 mOsm/L."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt 2 cơ chế tự điều hòa GFR khi HA 80–180 mmHg)",
        q: "Trong cơ chế co cơ trơn (Myogenic mechanism) giúp tự điều hòa giữ ổn định lưu lượng máu thận và GFR khi huyết áp động mạch tăng đột ngột từ 100 lên 150 mmHg, yếu tố trực tiếp làm co tiểu động mạch vào là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 17, tr.206",
        options: [
          "Áp lực máu tăng làm căng thành tiểu động mạch vào → mở các kênh ion nhạy cảm sức căng (kênh Degenerin/ENaC cơ học) gây khử cực → mở kênh Ca2+ làm cơ trơn tiểu động mạch vào co lại ngay trong vài giây",
          "Thận tiết ra thật nhiều Prostaglandin PGE2 để co tiểu động mạch vào",
          "Tăng áp lực làm tế bào vết đặc tiết thật nhiều Renin",
          "Sức căng thành mạch làm giãn nở tối đa tiểu động mạch vào"
        ],
        answer: 0,
        explain: "Cơ chế myogenic đáp ứng cực nhanh trong vài giây: áp lực xuyên thành tăng làm căng màng tế bào cơ trơn tiểu động mạch vào → mở kênh cation cơ học (Degenerin) gây khử cực → mở kênh Ca2+ nhạy cảm điện thế → co cơ trơn thành mạch để giữ RBF và GFR không tăng vọt theo huyết áp."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính Hệ số thanh thải Clearance & Lượng bài xuất Glucose)",
        q: "[Kỹ năng Tính toán Thận học] Một bệnh nhân đái tháo đường kiểm soát kém có GFR = 120 mL/phút và đường huyết tương (PGlucose) = 400 mg/dL (tức 4 mg/mL). Giả sử TmG = 375 mg/phút. Lượng Glucose được lọc (FL), lượng tái hấp thu và lượng bài xuất ra nước tiểu mỗi phút lần lượt là:",
        source: "Kỹ năng S1: Tính toán Ngưỡng thận & Tm Glucose",
        options: [
          "Lọc (FL) = 480 mg/phút; Tái hấp thu tối đa = 375 mg/phút; Bài xuất ra nước tiểu = 105 mg/phút",
          "Lọc = 400 mg/phút; Tái hấp thu = 400 mg/phút; Bài xuất = 0 mg/phút",
          "Lọc = 120 mg/phút; Tái hấp thu = 120 mg/phút; Bài xuất = 375 mg/phút",
          "Lọc = 48.000 mg/phút; Bài xuất = 47.625 mg/phút"
        ],
        answer: 0,
        explain: "Chú ý đơn vị! 400 mg/dL = 400 mg / 100 mL = 4 mg/mL. Mức lọc Glucose: FL = GFR × P = 120 mL/phút × 4 mg/mL = 480 mg/phút. Vì 480 > TmG (375 mg/phút) nên ống lượn gần tái hấp thu tối đa 375 mg/phút, phần thừa bài xuất ra nước tiểu là 480 – 375 = 105 mg/phút."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính hệ số thanh thải Inulin / Creatinine)",
        q: "[Kỹ năng Tính Hệ số Thanh thải] Một chất X lọc tự do qua cầu thận được đo kết quả ở bệnh nhân như sau: Nồng độ trong huyết tương Px = 0,2 mg/mL; Nồng độ trong nước tiểu Ux = 10 mg/mL; Lưu lượng nước tiểu V = 2 mL/phút. Hệ số thanh thải của chất X (Cx) bằng bao nhiêu?",
        source: "Kỹ năng S1: Áp dụng công thức Cx = (Ux × V) / Px",
        options: [
          "100 mL/phút",
          "40 mL/phút",
          "200 mL/phút",
          "10 mL/phút"
        ],
        answer: 0,
        explain: "Áp dụng công thức Clearance: Cx = (Ux × V) / Px = (10 mg/mL × 2 mL/phút) / 0,2 mg/mL = 20 / 0,2 = 100 mL/phút."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Hội chứng thận hư mất Albumin qua màng lọc)",
        q: "Ở bệnh nhân Hội chứng thận hư tổn thương màng lọc cầu thận (mất lớp điện tích âm heparan sulfate trên màng nền cầu thận GBM hoặc đột biến nephrin ở khe lọc podocyte), xét nghiệm nước tiểu và máu sẽ biến đổi theo cơ chế sinh lý nào?",
        source: "Vận dụng S2 - Chọn lọc điện tích & kích thước màng lọc",
        options: [
          "Albumin (tích điện âm) không còn bị màng nền cầu thận đẩy lại nên thoát ồ ạt ra nước tiểu (tiểu đạm lượng nhiều > 3,5 g/24h) → làm giảm Albumin máu → giảm áp suất keo huyết tương gây phù toàn thân",
          "Glucose thoát ra nước tiểu 100% còn Albumin tăng cao trong máu",
          "Áp suất keo trong huyết tương tăng vọt lên 60 mmHg",
          "Hồng cầu kích thước 8 μm biến dạng thoát qua lỗ lọc màng nền là nguyên nhân chính gây giảm áp suất keo"
        ],
        answer: 0,
        explain: "Bình thường Albumin có kích thước ~6 nm hơi nhỏ hơn khe lọc (~8 nm) nhưng nhờ Màng nền cầu thận (GBM) giàu heparan sulfate tích điện âm đẩy tĩnh điện nên hầu như không lọt qua. Khi mất điện tích âm màng nền (bệnh cầu thận thay đổi tối thiểu) hoặc rách khe lọc podocyte, Albumin lọt ồ ạt ra nước tiểu gây giảm albumin máu, giảm áp suất keo và phù nặng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Giải thích tác dụng phụ suy thận khi dùng NSAIDs ở người mất nước/suy tim)",
        q: "Tại sao một bệnh nhân cao tuổi đang suy tim hoặc mất nước (hệ giao cảm và Angiotensin II đang hoạt hóa rất mạnh) nếu tự ý uống thuốc giảm đau kháng viêm nhóm NSAIDs (như Ibuprofen, Diclofenac) lại rất dễ bị Suy thận cấp (giảm vọt GFR)?",
        source: "Vận dụng S2 - Vai trò Prostaglandin bảo vệ tiểu ĐM vào",
        options: [
          "Vì NSAIDs ức chế enzyme COX làm ngừng tổng hợp Prostaglandin (PGE2, PGI2) vốn là chất giữ giãn tiểu động mạch vào để bảo vệ cầu thận trước tác dụng co mạch của Angiotensin II/Giao cảm → tiểu ĐM vào co thắt mạnh làm sụt giảm RBF và GFR",
          "Vì NSAIDs làm giãn quá mức tiểu động mạch vào làm tăng GFR lên 500 mL/phút",
          "Vì NSAIDs phá hủy toàn bộ kênh Aquaporin-2 ở ống góp",
          "Vì NSAIDs làm tăng áp suất keo bao Bowman lên 50 mmHg"
        ],
        answer: 0,
        explain: "Trong tình trạng giảm thể tích/suy tim, giao cảm và Angiotensin II co mạch mạnh; thận tự bảo vệ bằng cách tiết tại chỗ Prostaglandin giãn mạch (PGE2, PGI2) để giữ cho tiểu ĐM vào luôn mở nuôi cầu thận. Thuốc NSAIDs ức chế tổng hợp prostaglandin làm tiểu ĐM vào bị co thắt không còn chất đối trọng → tụt nhanh PGC và GFR."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm thu thập nước tiểu 24h & Giải thích thuốc SGLT2i)",
        q: "[Trạm Dược lý Lâm sàng Thận] Thuốc điều trị Đái tháo đường và Bảo vệ thận nhóm ức chế SGLT2 (như Empagliflozin, Dapagliflozin) gây đường niệu dù đường huyết bệnh nhân vẫn dưới 180 mg/dL, đồng thời làm giảm nhẹ tăng lọc cầu thận ở người đái tháo đường giai đoạn đầu nhờ cơ chế ngược cầu-ống nào?",
        source: "Kỹ năng S3: Vận dụng SGLT2 & Feedback Macula densa",
        options: [
          "Ức chế kênh SGLT2 ở ống lượn gần làm giảm tái hấp thu cả Glucose lẫn Na+ tại đây → tăng lượng NaCl đi tới tế bào vết đặc (Macula densa) → vết đặc tiết Adenosine gây CO nhẹ tiểu ĐM vào, làm giảm áp lực siêu lọc quá mức bảo vệ cầu thận",
          "Kích thích tế bào cận cầu thận tiết gấp 10 lần Renin",
          "Mở rộng tối đa khe lọc podocyte để lọc cả albumin",
          "Ức chế hoàn toàn bơm H+-ATPase ở ống góp"
        ],
        answer: 0,
        explain: "Ở người đái tháo đường giai đoạn đầu, tăng đường huyết làm kênh SGLT2 tăng tái hấp thu cả glucose và Na+ ở PCT → lượng NaCl xuống tới vết đặc bị giảm giả tạo → vết đặc giãn tiểu ĐM vào gây 'tăng lọc cầu thận' làm hỏng cầu thận về lâu dài. Thuốc ức chế SGLT2 chặn tái hấp thu Na+/Glucose ở PCT, khôi phục lượng NaCl tới vết đặc giúp co lại tiểu ĐM vào về bình thường và bảo vệ thận!"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước tác dụng phụ hạ Kali máu của lợi tiểu quai/Thiazide)",
        q: "Một bệnh nhân suy tim đang dùng Furosemide (lợi tiểu quai) liều cao kéo dài than mệt mỏi, yếu cơ, chuột rút. Bác sĩ ĐÁP ỨNG kiểm tra điện giải đồ thấy K+ máu giảm còn 2,6 mmol/L. Tại sao Furosemide lại gây hạ K+ máu và thái độ xử trí đúng là gì?",
        source: "Thái độ A2: Theo dõi & bù Kali khi dùng lợi tiểu thải Kali",
        options: [
          "Furosemide chặn NKCC2 làm lượng lớn Na+ và nước dồn xuống ống lượn xa/ống góp → tế bào chính tăng cường tái hấp thu Na+ đổi lấy bài tiết rất nhiều K+ ra nước tiểu (cộng thêm hoạt hóa Aldosterone do giảm thể tích) → cần chủ động theo dõi điện giải, bổ sung Kali hoặc phối hợp lợi tiểu giữ Kali",
          "Furosemide chặn hoàn toàn khả năng lọc K+ ở cầu thận nên K+ bị giữ hết trong máu",
          "Furosemide phá hủy cơ xương làm K+ biến mất",
          "Tiếp tục tăng liều Furosemide lên gấp 3 lần và cấm bệnh nhân ăn chuối hay cam"
        ],
        answer: 0,
        explain: "Lợi tiểu quai (Furosemide) và Thiazide tăng lượng dịch + Na+ đi xuống đoạn xa nephron, tạo gradient điện âm lòng ống góp thúc đẩy tế bào chính bài tiết ồ ạt K+ (và H+) ra nước tiểu gây hạ K+ máu và kiềm chuyển hóa. Cần nhận biết sớm để theo dõi ion đồ và bù Kali kịp thời."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thói quen sàng lọc Albumin niệu & GFR định kỳ ở người nguy cơ cao)",
        q: "Bệnh nhân tăng huyết áp và đái tháo đường nhiều năm dù thấy 'đi tiểu bình thường, không phù' nhưng bác sĩ vẫn giải thích kiên nhẫn và chỉ định làm xét nghiệm tỷ số Albumin/Creatinine niệu (ACR) cùng eGFR định kỳ hàng năm theo KDIGO 2012. Thái độ hành nghề này thể hiện điều gì?",
        source: "Thái độ A3: Nội tâm hóa dự phòng suy thận mạn",
        options: [
          "Nội tâm hóa (A3): Hiểu rõ bệnh thận mạn giai đoạn đầu tiến triển âm thầm (99% dịch lọc vẫn được tái hấp thu, chỉ phát hiện sớm qua vi đạm niệu và GFR) nên chủ động tầm soát sớm để bảo vệ nephron cho người bệnh trước khi suy thận không hồi phục",
          "Lạm dụng xét nghiệm không cần thiết vì chưa thấy phù",
          "Chỉ để đo lượng đường trong nước tiểu",
          "Thay thế hoàn toàn cho việc đo huyết áp"
        ],
        answer: 0,
        explain: "Khi số nephron bắt đầu tổn thương, các nephron còn lại tăng lọc bù trừ nên người bệnh hoàn toàn không có triệu chứng lâm sàng cho đến khi mất > 70% chức năng thận. Tầm soát sớm Albumin niệu và GFR theo KDIGO 2012 là chuẩn mực y đức phòng ngừa suy thận giai đoạn cuối."
      }
    ]
  },

  // BÀI 10: CHỨC NĂNG NỘI TIẾT CỦA THẬN
  // Cũ (12 câu): L1: q0, q1, q9 (3); L2: q2, q4, q7, q8, q10, q11 (6); L3: q3, q5, q6 (3)
  // Thêm mới: 3 L1, 3 L2, 6 L3 -> Tổng: 6 L1, 9 L2, 9 L3 = 24!
  10: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại hệ RAAS)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Kích thích tiết Renin)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tổng hợp Calcitriol)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Hội chứng SIADH)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Áp suất thẩm thấu & K+)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Hoại tử ống thận cấp)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Giới hạn đệm Bicarbonate)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hệ đệm Ammoni NH4+)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân độ CKD KDIGO)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại hormon ANP)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bơm H+-ATPase tế bào kẽ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Biến chứng nội tiết suy thận)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số bình thường)",
        q: "Giá trị bình thường của Áp suất thẩm thấu huyết tương (Posm) và nồng độ ion Natri ([Na+]), Kali ([K+]) trong huyết tương người trưởng thành lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.240–247",
        options: [
          "Posm = 275 – 290 mOsm/kg; [Na+] = 135 – 145 mmol/L; [K+] = 3,5 – 5,0 mmol/L",
          "Posm = 100 – 150 mOsm/kg; [Na+] = 3,5 – 5,0 mmol/L; [K+] = 135 – 145 mmol/L",
          "Posm = 600 mOsm/kg; [Na+] = 200 mmol/L; [K+] = 20 mmol/L",
          "Posm = 275 – 290 mOsm/kg; [Na+] = 70 – 100 mmol/L; [K+] = 10 – 15 mmol/L"
        ],
        answer: 0,
        explain: "Hằng số nội môi dịch ngoại bào: Posm = 275–290 mOsm/kg (~285 mOsm/L), Natri là cation chính ngoại bào (135–145 mmol/L), Kali là cation chính nội bào nên nồng độ ngoại bào rất thấp và kiểm soát chặt chẽ (3,5–5,0 mmol/L)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tỉ lệ các hệ đệm thải H+ thận)",
        q: "Trong hai hệ đệm nước tiểu giúp thận tạo ra phân tử HCO3- MỚI để bù vào lượng HCO3- đã tiêu tốn khi đệm các acid cố định hàng ngày, tỉ lệ đóng góp của Hệ đệm Ammoni (NH4+) và Hệ đệm Phosphate (H2PO4-) lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.253–255",
        options: [
          "Hệ đệm Ammoni (NH4+) chiếm 2/3 lượng H+ thải ra; Hệ đệm Phosphate (acid chuẩn độ được) chiếm 1/3",
          "Hệ đệm Phosphate chiếm 95%; Hệ đệm Ammoni chiếm 5%",
          "Hệ đệm Ammoni chiếm 10%; Hệ đệm Bicarbonate chiếm 90%",
          "Thận chỉ dùng duy nhất hệ đệm Hemoglobin để thải H+ ra nước tiểu"
        ],
        answer: 0,
        explain: "Ở người bình thường hàng ngày thận thải ~50–70 mmol H+ cố định: khoảng 1/3 (~20–30 mmol) được thải qua hệ đệm Phosphate (HPO4^2- + H+ → H2PO4^-), và khoảng 2/3 (~30–50 mmol, tăng lên tới 500 mmol khi toan mạn) thải qua hệ đệm Ammoni (NH3 + H+ → NH4^+)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại chất kích thích tiết Aldosterone)",
        q: "Hai yếu tố kích thích TRỰC TIẾP và MẠNH NHẤT lên tế bào lớp cầu vỏ thượng thận làm tăng bài tiết Aldosterone là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.238 & 248",
        options: [
          "Sự tăng nồng độ K+ trong máu ngoại bào và nồng độ Angiotensin II",
          "Hormon ACTH và nồng độ Glucose máu",
          "Hormon ANP của tâm nhĩ và Dopamine",
          "Hormon Calcitonin và T3, T4"
        ],
        answer: 0,
        explain: "Khác với lớp bó tiết Cortisol phụ thuộc hoàn toàn ACTH tuyến yên, lớp cầu vỏ thượng thận tiết Aldosterone chịu sự điều hòa trực tiếp và mạnh nhất bởi (1) Nồng độ K+ huyết tương tăng (chỉ tăng 0,5 mmol/L đã tăng tiết Aldosterone để thận thải K+ ngay) và (2) Angiotensin II (hệ RAAS)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế ADH gắn thụ thể V2 vs V1)",
        q: "Hormon ADH (Vasopressin) tạo ra tác dụng tái hấp thu nước tự do tại ống góp thông qua cơ chế tế bào nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.242",
        options: [
          "Gắn vào thụ thể V2 ở màng đáy bên tế bào chính ống góp → hoạt hóa Adenyl cyclase tăng cAMP → kích thích PKA đưa các kênh nước Aquaporin-2 (AQP2) từ túi nội bào gắn lên màng đỉnh",
          "Gắn vào thụ thể V1 ở màng đỉnh tế bào ống lượn gần làm đóng kênh SGLT2",
          "Gắn vào thụ thể nhân tế bào kích thích bơm Na+/K+-ATPase ở cành xuống quai Henle",
          "Mở kênh NKCC2 tại cầu thận"
        ],
        answer: 0,
        explain: "ADH có 2 thụ thể chính: Thụ thể V1 trên cơ trơn mạch máu (qua IP3/Ca2+ gây co mạch tăng HA khi nồng độ rất cao); Thụ thể V2 ở màng đáy tế bào chính ống góp (qua Gs → cAMP → PKA) giúp gắn các kênh nước Aquaporin-2 lên màng đỉnh (trong khi AQP3, AQP4 luôn có sẵn ở màng đáy) cho nước thẩm thấu từ lòng ống vào tủy thận ưu trương."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Tái hấp thu HCO3- cũ vs Tạo HCO3- mới)",
        q: "Tại sao quá trình tái hấp thu 4.320 mmol HCO3- mỗi ngày ở ống lượn gần (thông qua bài tiết H+ qua bơm Na+/H+ và kết hợp thành CO2 khuếch tán ngược vào tế bào) lại KHÔNG được tính là 'tạo HCO3- mới' cho cơ thể?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.253",
        options: [
          "Vì mỗi ion H+ bài tiết ra lòng ống kết hợp với chính một HCO3- vừa lọc qua cầu thận (tạo H2O + CO2), nên chỉ là thu hồi lại phân tử HCO3- cũ bị lọc mất chứ không bổ sung thêm HCO3- mới bù cho lượng acid cố định sinh ra từ chuyển hóa",
          "Vì tất cả HCO3- ở ống lượn gần bị đào thải hết ra phân",
          "Vì ống lượn gần không có enzyme Carbonic anhydrase",
          "Vì quá trình này chỉ xảy ra khi bệnh nhân nôn ói"
        ],
        answer: 0,
        explain: "Tái hấp thu HCO3- ở PCT là bước thu hồi bảo toàn HCO3- sẵn có của huyết tương bị lọc qua cầu thận (không có H+ ròng nào bị thải ra nước tiểu). Chỉ khi toàn bộ HCO3- lọc đã được thu hồi hết, các ion H+ tiếp tục bài tiết mới kết hợp được với Phosphate hoặc NH3 để thải ra nước tiểu — khi đó mỗi H+ thải đi mới sinh ra 1 HCO3- MỚI thật sự bổ sung vào dự trữ kiềm!"
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế Toan chuyển hóa gây Tăng K+ máu)",
        q: "Khi cơ thể bị nhiễm TOAN CHUYỂN HÓA vô cơ (tăng H+ trong dịch ngoại bào), nồng độ K+ trong máu có xu hướng biến đổi như thế nào và do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 19, tr.248",
        options: [
          "Tăng K+ máu, do ion H+ từ dịch ngoại bào đi vào trong tế bào để được hệ đệm nội bào trung hòa, nên ion K+ phải đi từ nội bào ra huyết tương để giữ cân bằng điện tích (và giảm bài tiết K+ ở ống góp)",
          "Hạ K+ máu nặng do bơm Na+/K+-ATPase đẩy toàn bộ K+ vào tế bào",
          "K+ máu hoàn toàn không thay đổi trong mọi rối loạn toan-kiềm",
          "Tế bào cơ xương hấp thu gấp 10 lần K+ khi pH máu tụt xuống 7,0"
        ],
        answer: 0,
        explain: "Trong toan chuyển hóa vô cơ (tăng H+ ngoại bào), H+ đi vào trong tế bào để đệm với protein nội bào, đẩy K+ từ nội bào thoát ra dịch ngoại bào làm TĂNG K+ máu (ngược lại, trong kiềm máu H+ ra khỏi tế bào và K+ đi vào tế bào gây HẠ K+ máu!)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính Áp suất thẩm thấu Posm và pH Henderson-Hasselbalch)",
        q: "[Kỹ năng Tính toán Nội môi] Một bệnh nhân có xét nghiệm: [Na+] = 130 mmol/L, Glucose máu = 180 mg/dL, BUN = 28 mg/dL; khí máu có [HCO3-] = 12 mmol/L, PaCO2 = 25 mmHg. Áp suất thẩm thấu huyết tương tính toán (Posm) và tình trạng kiềm-toan (pKa=6,1; log(16)=1,20) là:",
        source: "Kỹ năng S1: Tính Posm & Phương trình Henderson-Hasselbalch",
        options: [
          "Posm = 280 mOsm/L (bình thường); pH = 6,1 + log(12 / [0,03×25]) = 6,1 + log(16) = 7,30 → Toan chuyển hóa đang có bù trừ hô hấp",
          "Posm = 340 mOsm/L; pH = 7,60 → Kiềm hô hấp",
          "Posm = 240 mOsm/L; pH = 7,40 → Bình thường",
          "Posm = 280 mOsm/L; pH = 7,05 → Toan hô hấp cấp"
        ],
        answer: 0,
        explain: "Posm = 2×[Na+] + Glucose/18 + BUN/2,8 = 2×130 + 180/18 + 28/2,8 = 260 + 10 + 10 = 280 mOsm/L. pH = 6,1 + log(12 / (0,03 × 25)) = 6,1 + log(12 / 0,75) = 6,1 + log(16) = 6,1 + 1,20 = 7,30 (< 7,35). Cả [HCO3-] giảm (12) và PaCO2 giảm bù trừ (25) chứng tỏ đây là Toan chuyển hóa đang được phổi tăng thông khí bù trừ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận cơ chế thuốc ức chế men chuyển ACEi / ARB)",
        q: "Ở bệnh nhân tăng huyết áp có hẹp động mạch thận HAI BÊN nặng, nếu dùng thuốc ức chế men chuyển (ACEi, ngăn chuyển Angiotensin I → II) sẽ có nguy cơ gây biến chứng nào tại thận và vì sao?",
        source: "Vận dụng S2 - Hệ RAAS & Áp lực lọc cầu thận",
        options: [
          "Gây suy thận cấp trước thận (tụt mạnh GFR và tăng Creatinine máu), vì thận đang hẹp động mạch phải dựa vào Angiotensin II co tiểu động mạch ra để duy trì áp suất lọc PGC; khi bị ACEi giãn tiểu ĐM ra sẽ làm tụt PGC và ngừng lọc",
          "Làm tăng GFR lên 300 mL/phút và hạ K+ máu",
          "Gây tăng tiết Aldosterone gấp 10 lần",
          "Không ảnh hưởng gì đến huyết động cầu thận"
        ],
        answer: 0,
        explain: "Trong hẹp động mạch thận 2 bên (hoặc 1 thận duy nhất), dòng máu vào cầu thận bị cản trở nên thận phải kích hoạt mạnh RAAS để Angiotensin II co tiểu ĐM ra giữ cho PGC và GFR ổn định. Dùng thuốc ức chế men chuyển (ACEi) hoặc ARB làm giãn đột ngột tiểu ĐM ra khiến áp suất siêu lọc cầu thận sụp đổ gây suy thận cấp (tăng Creatinine và K+ máu)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân biệt Đái tháo nhạt Trung ương vs Thận qua nghiệm pháp ADH)",
        q: "Hai bệnh nhân X và Y đều tiểu nhiều (10 Lít/ngày), nước tiểu nhược trương (70 mOsm/L) và tăng Na+ máu (152 mmol/L). Khi tiêm Desmopressin (thuốc tương tự ADH ngoại sinh), bệnh nhân X giảm hẳn lượng tiểu và độ thẩm thấu nước tiểu tăng vọt lên 650 mOsm/L; còn bệnh nhân Y vẫn tiểu 10 Lít/ngày với độ thẩm thấu 75 mOsm/L. Chẩn đoán phân biệt là:",
        source: "Vận dụng S2 - Nghiệm pháp ADH",
        options: [
          "Bệnh nhân X bị Đái tháo nhạt TRUNG ƯƠNG (thiếu ADH từ hạ đồi-yên sau nên đáp ứng tốt khi bù ADH); Bệnh nhân Y bị Đái tháo nhạt DO THẬN (ống góp đề kháng/đột biến thụ thể V2 hoặc kênh AQP2 nên trơ với ADH)",
          "Bệnh nhân X bị Hội chứng SIADH; Bệnh nhân Y bị Đái tháo đường",
          "Cả hai bệnh nhân đều thừa ADH quá mức",
          "Bệnh nhân Y bị thiếu Insulin tuyến tụy"
        ],
        answer: 0,
        explain: "Trong đái tháo nhạt trung ương (thiếu ADH), các thụ thể V2 và kênh Aquaporin-2 ở ống góp vẫn lành lặn nên khi tiêm ADH ngoại sinh (Desmopressin), nước tiểu sẽ cô đặc lại ngay. Còn trong đái tháo nhạt nguồn gốc tại thận (hỏng thụ thể V2 hoặc AQP2), tiêm ADH ngoại sinh cũng không có đáp ứng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Biện luận Khí máu động mạch & Cơ chế bù trừ)",
        q: "[Trạm Lâm sàng Hồi sức] Một bệnh nhân bị tiêu chảy cấp mất rất nhiều dịch ruột giàu Bicarbonate nhập viện với pH = 7,26; [HCO3-] = 14 mmol/L; PaCO2 = 29 mmHg; K+ = 3,1 mmol/L. Đánh giá đúng nhất rối loạn và cơ chế bù trừ đang diễn ra là:",
        source: "Kỹ năng S3: Đọc khí máu & Cơ chế bù trừ Phổi-Thận",
        options: [
          "Toan chuyển hóa (mất HCO3- qua phân) đã có đáp ứng bù trừ của Phổi (kích thích hóa thụ quan tăng thông khí thở nhanh sâu kiểu Kussmaul để thải CO2 hạ PaCO2 xuống 29 mmHg nhằm kéo pH lên)",
          "Toan hô hấp cấp chưa bù trừ",
          "Kiềm chuyển hóa do mất acid dạ dày",
          "Kiềm hô hấp tiên phát"
        ],
        answer: 0,
        explain: "pH = 7,26 (< 7,35 → Toan), [HCO3-] = 14 (< 22 → Toan chuyển hóa do mất dịch kiềm ruột). H+ cao kích thích hóa thụ quan ngoại biên gây tăng thông khí (thở nhanh sâu Kussmaul) đẩy PaCO2 hạ xuống 29 mmHg (công thức Winter dự đoán PaCO2 ≈ 1,5×14 + 8 = 29 mmHg → bù trừ hô hấp chuẩn xác!)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nguy cơ phù não khi điều chỉnh Hạ Natri máu quá nhanh)",
        q: "Một bệnh nhân bị Hạ Natri máu mạn tính do hội chứng SIADH ([Na+] = 114 mmol/L). Khi điều trị nâng Natri máu trở lại bình thường, bác sĩ cần NHẬN BIẾT nguy cơ nào về sự thay đổi áp suất thẩm thấu tế bào não để không truyền NaCl ưu trương quá nhanh?",
        source: "Thái độ A1: Nhận biết nguyên lý thẩm thấu bảo vệ tế bào não",
        options: [
          "Tế bào não đã tự điều chỉnh giảm chất thẩm thấu nội bào để thích nghi với hạ Na+ mạn; nếu nâng Na+ máu quá nhanh (> 8–10 mmol/L/24h) sẽ tạo áp suất thẩm thấu ngoại bào cao đột ngột hút nước ra khỏi neuron gây teo não và hội chứng hủy myelin cầu não (ODS) không hồi phục!",
          "Truyền NaCl ưu trương quá nhanh sẽ làm tăng K+ máu lên 15 mmol/L ngay lập tức",
          "Tế bào não không bao giờ chịu ảnh hưởng của áp suất thẩm thấu Na+",
          "Truyền thật nhanh trong 30 phút để lên 145 mmol/L luôn giúp não khỏe mạnh ngay lập tức"
        ],
        answer: 0,
        explain: "Tế bào não rất nhạy cảm với thay đổi Posm. Trong hạ Na+ mạn (> 48h), não tự thích nghi bằng cách thải bớt chất thẩm thấu hữu cơ để không bị phù não; do đó nếu nâng Na+ máu quá nhanh sẽ làm nước rút ồ ạt khỏi mô não gây tổn thương hủy myelin cầu não (Osmotic Demyelination Syndrome) cực kỳ nguy hiểm."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước tác dụng điều trị cấp cứu tăng K+ máu bằng Insulin + Glucose)",
        q: "Ở bệnh nhân suy thận cấp vô niệu có tăng K+ máu nặng (6,9 mmol/L), bác sĩ cấp cứu truyền tĩnh mạch Insulin pha chung với dung dịch Glucose ưu trương. Giải thích cơ sở sinh lý cho thái độ xử trí ĐÁP ỨNG khẩn cấp này và lưu ý cần theo dõi gì?",
        source: "Thái độ A2: Phối hợp cơ chế Insulin & Cơ xương cấp cứu tăng K+",
        options: [
          "Insulin kích thích bơm Na+/K+-ATPase ở 'hồ chứa đệm cơ xương' đẩy nhanh K+ từ máu vào trong tế bào cơ làm hạ K+ máu tạm thời trong 15–30 phút; pha kèm Glucose để ngừa biến chứng hạ đường huyết do Insulin và phải theo dõi sát đường huyết cũng như chuẩn bị lọc máu/thải K+ thật sự",
          "Insulin giúp ống lượn gần thận tăng lọc K+ ra nước tiểu ngay lập tức dù thận đang vô niệu",
          "Glucose trực tiếp trung hòa điện tích của K+ trong huyết tương",
          "Không cần pha thêm Glucose vì Insulin không bao giờ gây hạ đường huyết ở người suy thận"
        ],
        answer: 0,
        explain: "Do thận đang suy vô niệu không thải K+ được ngay, dùng Insulin kích thích bơm Na+/K+-ATPase đẩy K+ vào khối cơ xương (hồ chứa đệm K+ lớn nhất cơ thể) là biện pháp cứu nguy nhanh giúp hạ K+ máu tạm thời 0,5–1,2 mmol/L; bắt buộc phối hợp Glucose và theo dõi đường huyết sát sao."
      }
    ]
  }
};
