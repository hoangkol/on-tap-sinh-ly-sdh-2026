// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC - PHẦN 1 (BÀI 1 ĐẾN BÀI 5)
// Mức 1 (Thuộc/Nhớ lại: 6/24 = 25%) | Mức 2 (Hiểu: 9/24 = 37,5%) | Mức 3 (Vận dụng: 9/24 = 37,5%)
// K (Kiến thức: K1-K3) | S (Kỹ năng: S1-S3) | A (Thái độ: A1-A3)
// ==========================================================================

window.EXTRA_PART1 = {
  // BÀI 1: SINH LÝ HỒNG CẦU VÀ NHÓM MÁU
  // Cũ (12 câu):
  // L1: q1(acid sialic), q2(NaCl 4.6-3.4), q5(tủy xương dẹt sau 20t), q6(Ferritin), q9(Đồng ít cần) -> 5 câu Mức 1
  // L2: q0(đĩa lõm trừ ty thể), q3(oxygenation Fe2+), q7(cắt dạ dày thiếu IF/B12), q11(IgM vs IgG) -> 4 câu Mức 2
  // L3: q4(xử trí ngộ độc CO 95/5), q8(bảo quản máu >1 tháng), q10(biện luận Beth-Vincent -> Simonin) -> 3 câu Mức 3
  1: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "S", ksaLabel: "S1: Làm đúng (Thông số sức bền)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)" },
      { level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Xử trí cấp cứu đúng)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế bệnh sinh)" },
      { level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (An toàn truyền máu)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận định nhóm)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt kháng thể)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong thời kỳ bào thai từ tuần đầu tiên cho đến lúc sinh, vị trí tạo hồng cầu chuyển dịch theo thứ tự thời gian nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.17",
        options: [
          "Túi noãn hoàng (những tuần đầu) → Gan, lách, hạch (từ tháng thứ 3) → Tủy xương (từ tháng thứ 5 trở đi)",
          "Tủy xương (tuần đầu) → Túi noãn hoàng (tháng 3) → Gan và lách (tháng 6)",
          "Lách và tuyến ức (tuần đầu) → Tủy xương dài (tháng 2) → Thận (tháng 8)",
          "Gan (tuần đầu) → Túi noãn hoàng (tháng 4) → Hạch bạch huyết (sau sinh)"
        ],
        answer: 0,
        explain: "Theo sách YDS 2025: Giai đoạn tạo máu phôi thai lần lượt là Túi noãn hoàng (tiểu đảo Wolff và Pander ở những tuần đầu) → Gan và lách (đỉnh cao từ tháng thứ 3) → Tủy xương bắt đầu từ tháng thứ 4–5 trở đi và trở thành nơi tạo máu duy nhất sau sinh."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Tại sao người trưởng thành bị viêm teo niêm mạc dạ dày mất tế bào thành thường chỉ biểu hiện thiếu máu hồng cầu khổng lồ sau khoảng 3 – 4 năm mà không xảy ra ngay sau vài tuần?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.19",
        options: [
          "Vì lượng Vitamin B12 dự trữ tại gan (1 – 3 mg) rất lớn, gấp khoảng 1.000 lần nhu cầu hàng ngày (1 – 3 μg/ngày)",
          "Vì ruột non có khả năng tự tổng hợp lại Vitamin B12 từ glucose",
          "Vì hồng cầu có đời sống kéo dài tới 3 – 4 năm trong tuần hoàn",
          "Vì thận tái hấp thu 100% hồng cầu già để tái tạo lại hồng cầu mới"
        ],
        answer: 0,
        explain: "Nhu cầu Vitamin B12 mỗi ngày rất nhỏ (1–3 μg), trong khi gan dự trữ tới 1–3 mg (đủ dùng từ 3–5 năm). Do đó khi thiếu Yếu tố nội tại (IF) hoặc ăn chay trường tuyệt đối không có B12, phải vài năm sau dự trữ gan cạn kiệt mới xuất hiện thiếu máu hồng cầu to."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Hormon Hepcidin (do tế bào gan tiết ra khi cơ thể thừa sắt hoặc đang viêm nhiễm) kiểm soát nồng độ sắt huyết tương bằng cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.20",
        options: [
          "Gắn và làm thoái hóa kênh xuất sắt Ferroportin trên tế bào niêm mạc ruột và đại thực bào, làm giảm hấp thu sắt vào máu",
          "Kích thích tế bào tá tràng tăng chuyển Fe3+ thành Fe2+ để đưa vào máu",
          "Tăng tổng hợp Transferrin ở tủy xương để vận chuyển nhiều sắt hơn",
          "Thúc đẩy thận tăng bài xuất Ferritin ra nước tiểu"
        ],
        answer: 0,
        explain: "Hepcidin là hormon điều hòa trung tâm chuyển hóa sắt do gan tiết ra: nó khóa và làm thoái hóa kênh Ferroportin ở màng đáy tế bào ruột non và đại thực bào, ngăn sắt đi vào huyết tương (cơ chế gây thiếu máu trong bệnh lý viêm mạn tính)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Hormon Erythropoietin (EPO) được kích thích tăng bài tiết khi mô bị thiếu oxy và tác động chủ yếu vào giai đoạn nào của dòng hồng cầu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.18",
        options: [
          "Kích thích tế bào tiền thân CFU-E tăng sinh và biệt hóa thành tiền nguyên hồng cầu (thúc đẩy nhanh quá trình tạo và trưởng thành hồng cầu)",
          "Chỉ kích thích trực tiếp hồng cầu lưới ở máu ngoại vi nhân đôi",
          "Ức chế sự chết theo chương trình của hồng cầu già tại lách",
          "Kích thích tế bào gan tổng hợp nhân globin"
        ],
        answer: 0,
        explain: "EPO (80–90% do nguyên bào sợi quanh ống thận tiết khi thiếu oxy mô qua HIF-1) tác động chủ yếu lên cụm tạo đơn vị hồng cầu (CFU-E) thúc đẩy biệt hóa thành tiền nguyên hồng cầu và rút ngắn thời gian trưởng thành tại tủy xương."
      },
      {
        level: 2, ksa: "S", ksaLabel: "S1: Làm đúng (Tính chỉ số huyết học)",
        q: "Một bệnh nhân nam có các thông số công thức máu: Số lượng hồng cầu (RBC) = 4,0 triệu/mm³; Hemoglobin (Hb) = 10 g/dL; Hematocrit (Hct) = 32%. Giá trị MCV và MCHC của bệnh nhân này gợi ý hình thái thiếu máu nào?",
        source: "Kỹ năng S1: Tính toán MCV, MCHC từ công thức máu",
        options: [
          "MCV = 80 fL, MCHC = 31,25 g/dL (Thiếu máu đẳng sắc, đẳng bào ở ngưỡng giới hạn dưới)",
          "MCV = 125 fL, MCHC = 31,25 g/dL (Thiếu máu hồng cầu to, đẳng sắc)",
          "MCV = 64 fL, MCHC = 25 g/dL (Thiếu máu hồng cầu nhỏ, nhược sắc nặng)",
          "MCV = 80 fL, MCHC = 45 g/dL (Thiếu máu hồng cầu ưu sắc)"
        ],
        answer: 0,
        explain: "Áp dụng công thức chuẩn: MCV = (Hct % × 10) / RBC (triệu) = (32 × 10) / 4,0 = 80 fL (bình thường 80–100 fL). MCHC = (Hb × 100) / Hct % = (10 × 100) / 32 = 31,25 g/dL (bình thường 31–36 g/dL). Giá trị này thuộc nhóm đẳng sắc, đẳng bào."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Khi huyết tương bệnh nhân có tình trạng viêm cấp tính làm tăng rất cao nồng độ Fibrinogen và Globulin, tốc độ lắng máu (ESR) sẽ thay đổi như thế nào và vì sao?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 2, tr.11",
        options: [
          "Tốc độ lắng máu TĂNG nhanh vì các protein này trung hòa điện tích âm (acid sialic) trên màng hồng cầu làm chúng dính nhau thành chuỗi tiền",
          "Tốc độ lắng máu GIẢM xuống gần bằng 0 vì máu trở nên quá đặc",
          "Không thay đổi vì điện tích màng hồng cầu chỉ phụ thuộc vào nhóm máu ABO",
          "Hồng cầu sẽ bị tan vỡ hoàn toàn ngay trong ống nghiệm lắng máu"
        ],
        answer: 0,
        explain: "Các phân tử bất đối xứng mang điện tích dương hoặc lưỡng cực lớn như Fibrinogen và Globulin làm giảm lực đẩy tĩnh điện âm giữa các lớp acid sialic trên màng hồng cầu, khiến hồng cầu kết thành chuỗi tiền (rouleaux) có khối lượng nặng và lắng xuống nhanh hơn (tăng ESR)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm/Bảng kiểm)",
        q: "[Trạm Thực hành Định nhóm máu] Khi thực hiện định nhóm máu tại giường cho người bệnh chuẩn bị truyền máu, sinh viên nhỏ giọt máu bệnh nhân lên 3 giọt huyết thanh mẫu: Anti-A không ngưng kết, Anti-B không ngưng kết, Anti-AB ngưng kết rõ; đồng thời ở nghiệm pháp Simonin thấy huyết thanh bệnh nhân làm ngưng kết hồng cầu mẫu A và B. Xử trí chuẩn bảng kiểm lúc này là gì?",
        source: "Kỹ năng S3: Chạy trạm OSCE / An toàn định nhóm máu",
        options: [
          "Không kết luận nhóm máu; nghi ngờ sai sót kỹ thuật hoặc hồng cầu mẫu/huyết thanh mẫu hỏng, phải kiểm tra lại quy trình, hạn dùng thuốc thử và làm lại cả 2 nghiệm pháp",
          "Kết luận ngay là nhóm máu O vì cả Anti-A và Anti-B đều không ngưng kết",
          "Kết luận ngay là nhóm máu AB vì Anti-AB bị ngưng kết",
          "Bỏ qua kết quả Simonin và tiến hành truyền ngay 1 đơn vị hồng cầu lắng nhóm A"
        ],
        answer: 0,
        explain: "Nguyên tắc vàng định nhóm máu ABO: Kết quả nghiệm pháp hồng cầu (Beth-Vincent) và nghiệm pháp huyết thanh (Simonin) PHẢI TRÙNG KHỚP HOÀN TOÀN. Ở đây Anti-A (-), Anti-B (-) mâu thuẫn với Anti-AB (+). Khi có bất đồng giữa các giọt thử hoặc giữa 2 nghiệm pháp, tuyệt đối không tự suy đoán mà phải kiểm tra hóa chất, rửa sạch hồng cầu và làm lại."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận xét nghiệm)",
        q: "Một phụ nữ 32 tuổi đi khám vì mệt mỏi, chóng mặt, niêm mạc nhợt, ăn uống kém và rong kinh kéo dài. Công thức máu: Hb 8,2 g/dL, MCV 66 fL, MCHC 27 g/dL, Ferritin huyết thanh giảm rất thấp. Cơ chế thiếu máu ở bệnh nhân này là gì?",
        source: "Vận dụng lâm sàng S2 - Thiếu máu thiếu sắt",
        options: [
          "Thiếu sắt làm giảm tổng hợp nhân Heme (tiền chất protoporphyrin IX không gắn được Fe2+) dẫn đến hồng cầu nhỏ, nhược sắc",
          "Thiếu Vitamin B12 làm rối loạn tổng hợp DNA nhân hồng cầu",
          "Thiếu men G6PD làm vỡ màng hồng cầu khi gặp tác nhân oxy hóa",
          "Suy thận mạn làm giảm bài tiết Erythropoietin"
        ],
        answer: 0,
        explain: "MCV < 80 fL (hồng cầu nhỏ), MCHC < 31 g/dL (nhược sắc) kèm Ferritin thấp và tiền căn rong kinh (mất sắt mạn tính) là bức tranh kinh điển của thiếu máu thiếu sắt. Thiếu sắt không tạo đủ Heme làm tế bào nguyên hồng cầu phân chia thêm lần nữa để đạt nồng độ Hb nội bào tối thiểu nên hồng cầu trở nên nhỏ và nhạt màu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Phản ứng chéo truyền máu)",
        q: "[Trạm An toàn Truyền máu] Một bệnh nhân nhóm máu B, Rh(+) cần truyền gấp 1 đơn vị hồng cầu lắng nhưng kho máu tạm hết nhóm B và chỉ còn hồng cầu lắng nhóm O, Rh(+) (đã loại bỏ phần lớn huyết tương) và máu toàn phần nhóm O, Rh(+). Trong phản ứng chéo tại giường trước truyền, cặp thử nào là QUAN TRỌNG NHẤT bắt buộc không được ngưng kết?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 5, tr.49",
        options: [
          "Phản ứng chéo chính (Ống 1): Hồng cầu người cho (nhóm O) + Huyết thanh người nhận (nhóm B) — ưu tiên truyền hồng cầu lắng nhóm O Rh(+)",
          "Phản ứng chéo phụ (Ống 2): Huyết thanh người cho + Hồng cầu người nhận",
          "Trộn máu toàn phần người cho thẳng với dung dịch NaCl 3,4‰",
          "Chỉ cần thử hồng cầu người cho với nước cất"
        ],
        answer: 0,
        explain: "Phản ứng chéo chính (Hồng cầu người cho + Huyết thanh người nhận) kiểm tra xem kháng thể của người nhận có phá hủy hồng cầu truyền vào hay không — đây là phản ứng bắt buộc tuyệt đối không được ngưng kết. Khi truyền khác nhóm trong cấp cứu (O truyền cho B), phải dùng Hồng cầu lắng (đã bỏ hầu hết huyết tương chứa anti-A, anti-B của người nhóm O) chứ hạn chế truyền máu toàn phần."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nguy cơ sản khoa bất đồng Rh)",
        q: "Một sản phụ có nhóm máu A, Rh(-) kết hôn với chồng nhóm máu O, Rh(+). Ở lần mang thai đầu tiên, thai nhi có nhóm máu Rh(+) và sinh ra khỏe mạnh. Điều nhân viên y tế cần NHẬN BIẾT và tư vấn ngay sau khi sản phụ sinh bé đầu là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 5, tr.50 & Thái độ A1",
        options: [
          "Nhận biết nguy cơ hồng cầu Rh(+) của con lọt vào tuần hoàn mẹ lúc chuyển dạ kích thích mẹ tạo kháng thể IgG Anti-D; cần tiêm dự phòng Anti-D (RhoGAM) trong vòng 72 giờ sau sinh để bảo vệ các lần mang thai sau",
          "Khuyên mẹ tuyệt đối không được mang thai lần thứ hai vì lần sau chắc chắn tử vong ngay từ tuần thứ 4",
          "Tiêm ngay một lượng lớn hồng cầu Rh(+) cho người mẹ để tạo miễn dịch tự nhiên",
          "Giải thích rằng mẹ đã có sẵn kháng thể Anti-D tự nhiên IgM nên không cần dự phòng gì"
        ],
        answer: 0,
        explain: "Khi mẹ Rh(-) mang thai con Rh(+), máu con dễ qua nhau thai vào tuần hoàn mẹ lúc chuyển dạ/rau bong, gây mẫn cảm tạo kháng thể miễn dịch IgG Anti-D. Ở lần mang thai sau (nếu thai tiếp tục Rh(+)), IgG Anti-D sẽ qua nhau thai gây tan máu thai nhi. Tiêm kháng thể RhoGAM (Anti-D) trong 72h sau sinh sẽ tiêu hủy hết hồng cầu Rh(+) của con trước khi hệ miễn dịch mẹ kịp ghi nhớ."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Xử trí tai biến truyền máu)",
        q: "Đang truyền được 20 mL máu toàn phần cho bệnh nhân, điều dưỡng nhận thấy bệnh nhân đột ngột than đau thắt lưng dữ dội, rét run, sốt, khó thở và tụt huyết áp. Hành động ĐÁP ỨNG đầu tiên cần thực hiện ngay lập tức là gì?",
        source: "Thái độ A2: An toàn người bệnh khi truyền máu",
        options: [
          "Ngưng truyền máu ngay lập tức, giữ đường truyền tĩnh mạch bằng dung dịch NaCl 0,9% dây truyền mới, báo bác sĩ xử trí sốc/tan máu cấp và gửi lại túi máu + mẫu máu bệnh nhân kiểm tra",
          "Tăng tốc độ truyền máu lên tối đa cho hết túi máu nhanh rồi xử trí sau",
          "Chỉ cho bệnh nhân uống 1 viên paracetamol hạ sốt và tiếp tục truyền tiếp",
          "Rút bỏ hoàn toàn kim luồn tĩnh mạch rồi đợi xem bệnh nhân có hết đau lưng không"
        ],
        answer: 0,
        explain: "Đau thắt lưng dữ dội, rét run, sốt, khó thở, tụt HA ngay khi mới truyền vài chục mL là dấu hiệu kinh điển của phản ứng tan máu cấp do bất đồng nhóm máu (ngưng kết nội mạch và giải phóng Hb tự do gây tắc ống thận). Bắt buộc phải NGƯNG TRUYỀN NGAY LẬP TỨC, giữ ven bằng dây mới truyền NaCl 0,9%, hồi sức và truy nguyên nhân."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Tác phong chuẩn mực trong bảo quản & cấp phát máu)",
        q: "Một bịch hồng cầu lắng được lấy ra khỏi tủ lạnh ngân hàng máu (2 – 6°C) lúc 14h00 nhưng khoa lâm sàng tạm hoãn truyền đến 17h30 mới định truyền tiếp (để ở nhiệt độ phòng 3,5 giờ). Thái độ xử trí thể hiện tính chuyên nghiệp nội tâm hóa (A3) về an toàn người bệnh của nhân viên y tế là:",
        source: "Thái độ A3: Chuẩn mực an toàn truyền máu",
        options: [
          "Tuyệt đối không tự ý cất lại tủ lạnh để dùng tiếp hoặc truyền cho bệnh nhân; phải hủy bỏ/báo ngân hàng máu theo quy định vì máu để ngoài > 30 phút làm tăng nguy cơ nhiễm khuẩn và tan máu",
          "Đem cất vào ngăn đá tủ lạnh gia đình cho lạnh lại rồi truyền bù vào buổi tối",
          "Vẫn truyền bình thường nếu nhìn bằng mắt thường thấy bịch máu còn màu đỏ",
          "Pha thêm cồn sát khuẩn vào bịch máu để diệt khuẩn rồi truyền"
        ],
        answer: 0,
        explain: "An toàn truyền máu đòi hỏi tuân thủ nghiêm ngặt dây chuyền lạnh: máu ra khỏi tủ lạnh chuyên dụng quá 30 phút (hoặc truyền quá 4 giờ) mất kiểm soát nhiệt độ sẽ làm vi khuẩn tăng sinh nhanh và hồng cầu thoái biến (tăng K+ ngoại bào, giảm pH, vỡ hồng cầu). Người thầy thuốc cần đặt an toàn người bệnh lên tuyệt đối hàng đầu."
      }
    ]
  },

  // BÀI 2: SINH LÝ TIỂU CẦU VÀ SỰ CẦM MÁU
  // Cũ (12 câu):
  // L1: q0(GPIb-vWF), q1(ADP+TXA2), q2(thành mạch vững chắc đàn hồi), q3(yếu tố ngoại sinh), q4(Vit K II,VII,IX,X), q6(XIIIa), q9(bạch cầu ưa acid) -> nhưng ta điều chỉnh để tổng 24 câu là 6 L1, 9 L2, 9 L3!
  // Check cũ: L1=4 (q2, q3, q4, q6), L2=6 (q0, q1, q7, q8, q9, q10), L3=2 (q5, q11) -> Thêm mới: 2 L1, 3 L2, 7 L3 -> Tổng: 6 L1, 9 L2, 9 L3!
  2: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế phân tử)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế tự duy trì)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận xét nghiệm)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích vai trò)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt huyết thanh/huyết tương)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế tiêu sợi huyết)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế chống đông)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Đọc xét nghiệm TS)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Số lượng tiểu cầu bình thường trong máu ngoại vi và đời sống trung bình của tiểu cầu là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.35",
        options: [
          "150.000 – 300.000 /mm³ máu; đời sống trung bình 8 – 12 ngày",
          "4,5 – 5,5 triệu /mm³ máu; đời sống trung bình 120 ngày",
          "4.000 – 10.000 /mm³ máu; đời sống trung bình 1 – 2 giờ",
          "50.000 – 100.000 /mm³ máu; đời sống trung bình 30 ngày"
        ],
        answer: 0,
        explain: "Tiểu cầu là mảnh vỡ bào tương của mẫu tiểu cầu (megakaryocyte) ở tủy xương, số lượng bình thường 150.000 – 300.000 /mm³ (2/3 trong máu ngoại vi, 1/3 ở lách), đời sống 8 – 12 ngày."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Chất chống đông tự nhiên Heparin trong cơ thể người được sản xuất chủ yếu bởi những loại tế bào nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.42",
        options: [
          "Dưỡng bào (Mast cell) ở mô liên kết quanh mao mạch (nhiều ở phổi, gan) và Bạch cầu hạt ưa kiềm (Basophil)",
          "Tế bào thành dạ dày và tế bào chính tuyến vị",
          "Hồng cầu trưởng thành và tiểu cầu",
          "Tế bào nội mô ống lượn gần của thận"
        ],
        answer: 0,
        explain: "Heparin là một polysaccharid tích điện âm do dưỡng bào (mast cell) và bạch cầu hạt ưa kiềm (basophil) bài tiết. Khi gắn với Antithrombin III, Heparin làm tăng hiệu lực chống đông của Antithrombin III lên gấp 100 – 1.000 lần."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Tại sao trong lòng mạch máu bình thường khỏe mạnh, tiểu cầu và các yếu tố đông máu lưu hành tiếp xúc trực tiếp với thành mạch mà máu KHÔNG bị đông?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.42",
        options: [
          "Vì bề mặt nội mô trơn láng, mang lớp áo glycocalyx tích điện âm đẩy các yếu tố đông máu và tiểu cầu, đồng thời nội mô tiết Prostacyclin (PGI2), Nitric oxide (NO) và gắn Thrombomodulin",
          "Vì trong lòng mạch bình thường hoàn toàn không có ion Ca2+",
          "Vì máu chảy nhanh khiến fibrinogen bị phá hủy hoàn toàn",
          "Vì hồng cầu tiết men Plasmin liên tục làm tan mọi sợi fibrin mỗi giây"
        ],
        answer: 0,
        explain: "Các cơ chế chống đông tự nhiên trong lòng mạch gồm: (1) Bề mặt nội mô trơn láng tích điện âm ngăn hoạt hóa yếu tố XII và tiểu cầu; (2) Nội mô tiết PGI2 và NO ức chế kết tập tiểu cầu; (3) Thrombomodulin trên nội mô gắn thrombin để hoạt hóa Protein C bất hoạt yếu tố Va, VIIIa; (4) Antithrombin III và Heparin."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt cơ chế thuốc)",
        q: "Cơ chế tác dụng chống đông của Natri citrat (hoặc EDTA, Oxalat) trong túi máu dự trữ hoặc ống xét nghiệm khác với cơ chế của Dicoumarin (Warfarin) ở điểm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.43",
        options: [
          "Natri citrat kết hợp làm bất hoạt ion Ca2+ (yếu tố IV) ngay trong ống nghiệm/bịch máu; còn Dicoumarin cạnh tranh với Vitamin K tại gan nên chỉ có tác dụng in vivo sau 1 – 2 ngày",
          "Natri citrat ức chế gan tổng hợp yếu tố II, VII, IX, X; còn Dicoumarin làm mất ion Ca2+ trong ống nghiệm",
          "Cả hai chất đều phá hủy trực tiếp tiểu cầu",
          "Natri citrat kích thích Antithrombin III giống hệt Heparin"
        ],
        answer: 0,
        explain: "Natri citrat tạo phức hòa tan gắn chặt ion Ca2+ (mất Ca2+ tự do cần cho cả 3 giai đoạn đông máu), có tác dụng ngay lập tức cả in vitro và in vivo. Ngược lại, Dicoumarin (kháng Vitamin K) ức chế enzyme epoxide reductase tại gan làm giảm tổng hợp yếu tố II, VII, IX, X nên hoàn toàn KHÔNG có tác dụng chống đông nếu cho vào ống nghiệm."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Trong giai đoạn kết tập tiểu cầu, phức hợp thụ thể Glycoprotein IIb/IIIa (GP IIb/IIIa) trên màng tiểu cầu gắn kết với phân tử nào để nối các tiểu cầu lại với nhau thành nút chặn vững chắc?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.37",
        options: [
          "Fibrinogen huyết tương (tạo cầu nối giữa GP IIb/IIIa của các tiểu cầu kề nhau)",
          "Ion Kali (K+) huyết tương",
          "Cholesterol của màng hồng cầu",
          "Enzyme Carbonic anhydrase"
        ],
        answer: 0,
        explain: "Cần phân biệt 2 thụ thể quan trọng: GPIb giúp tiểu cầu KẾT DÍNH vào collagen thông qua yếu tố vWF; còn sau khi tiểu cầu hoạt hóa bởi ADP và TXA2, thụ thể GP IIb/IIIa bộc lộ để gắn với FIBRINOGEN làm cầu nối KẾT TẬP hàng loạt tiểu cầu với nhau."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Thực hành đo TS - Duke)",
        q: "[Kỹ năng Thực hành] Khi thực hiện nghiệm pháp đo thời gian máu chảy (TS) theo phương pháp Duke ở dái tai bệnh nhân, thao tác nào sau đây đúng chuẩn bảng kiểm?",
        source: "Kỹ năng S1: Quy trình thực hành Sinh lý máu",
        options: [
          "Chích kim sâu vừa đủ (~2,5–3 mm), bấm đồng hồ ngay khi thấy giọt máu đầu tiên, mỗi 30 giây dùng giấy thấm nhẹ giọt máu mà KHÔNG chạm vào mép vết thương để tránh làm vỡ nút chặn tiểu cầu",
          "Dùng giấy thấm chà xát mạnh trực tiếp vào vết chích liên tục mỗi 5 giây",
          "Bóp nặn mạnh dái tai liên tục để máu chảy ra nhanh hơn",
          "Lấy 2 mL máu tĩnh mạch cho vào ống thủy tinh rồi nghiêng ống mỗi 30 giây"
        ],
        answer: 0,
        explain: "Khi đo TS (Duke), tuyệt đối không được nặn bóp vùng chích và không chạm giấy thấm trực tiếp vào miệng vết thương vì sẽ làm bong nút chặn tiểu cầu mới hình thành khiến TS kéo dài giả tạo. (Ống thủy tinh nghiêng mỗi 30s là đo thời gian máu đông TC theo Lee-White)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận xét nghiệm)",
        q: "Một bệnh nhân xơ gan nặng mất bù kèm tắc mật hoàn toàn chuẩn bị phẫu thuật. Kết quả đông máu: Tiểu cầu 180.000/mm³, TS = 3 phút, TQ (PT) = 29 giây (kéo dài), TCK (aPTT) = 85 giây (kéo dài). Nguyên nhân sinh lý bệnh gây rối loạn cả TQ và TCK là:",
        source: "Vận dụng S2 - Biện luận xét nghiệm đông máu",
        options: [
          "Giảm hấp thu Vitamin K do thiếu muối mật và suy giảm chức năng tế bào gan làm thiếu các yếu tố đông máu đường chung, ngoại sinh và nội sinh (II, V, VII, IX, X)",
          "Thiếu hụt đơn độc yếu tố XII",
          "Tăng sản xuất Heparin nội sinh quá mức ở lách",
          "Giảm số lượng hồng cầu gây loãng cục máu đông"
        ],
        answer: 0,
        explain: "Gan tổng hợp hầu hết yếu tố đông máu (trừ III, IV và phần lớn VIII). Khi tắc mật (không có muối mật tạo hạt micelle hấp thu Vitamin K tan trong dầu) kèm xơ gan (giảm tổng hợp protein gan), các yếu tố II, VII, IX, X, V, I đều giảm → kéo dài cả con đường ngoại sinh (TQ) và nội sinh (TCK), trong khi tiểu cầu bình thường nên TS bình thường."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Phân biệt xuất huyết lâm sàng)",
        q: "[Chạy trạm Lâm sàng] Một bệnh nhi có nhiều chấm xuất huyết li ti dưới da, chảy máu chân răng tự nhiên, nghiệm pháp dây thắt (+), TS kéo dài 12 phút, cục máu sau đông không co lại; trong khi TQ và TCK hoàn toàn bình thường. Bệnh nhi này rối loạn ở khâu nào và cần làm xét nghiệm nào tiếp theo?",
        source: "Kỹ năng S3: Phân biệt bệnh lý tiểu cầu vs yếu tố đông máu",
        options: [
          "Rối loạn cầm máu ban đầu (số lượng hoặc chức năng tiểu cầu); cần kiểm tra Tổng phân tích tế bào máu đếm số lượng tiểu cầu và độ ngưng tập tiểu cầu",
          "Bệnh Hemophilia A thiếu yếu tố VIII; cần định lượng yếu tố VIII",
          "Thiếu Vitamin K; cần tiêm ngay Vitamin K đường tĩnh mạch",
          "Tăng hoạt hệ tiêu sợi huyết; cần định lượng D-dimer ngay"
        ],
        answer: 0,
        explain: "Xuất huyết dạng chấm nốt tự phát ở da/niêm mạc (không phải tụ máu sâu trong khớp/cơ), dây thắt (+), TS kéo dài và cục máu không co (thiếu retractozyme/thrombosthenin) với TQ/TCK bình thường là dấu hiệu kinh điển của giảm số lượng hoặc suy giảm chất lượng tiểu cầu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Ứng dụng thuốc chống kết tập & kháng đông)",
        q: "Bệnh nhân nhồi máu cơ tim được chỉ định dùng Aspirin liều thấp (75–100 mg/ngày) để phòng huyết khối động mạch vì cơ chế nào của tiểu cầu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 4, tr.37 & Vận dụng dược lý",
        options: [
          "Aspirin ức chế không hồi phục enzyme Cyclooxygenase (COX-1) của tiểu cầu, ngăn tổng hợp Thromboxan A2 (TXA2) trong suốt đời sống 8–12 ngày của tiểu cầu (vì tiểu cầu không có nhân để tổng hợp lại COX mới)",
          "Aspirin kết hợp với ion Ca2+ trong máu giống Natri citrat",
          "Aspirin kích thích gan sản xuất thêm yếu tố VIII và Fibrinogen",
          "Aspirin làm tan trực tiếp mạng lưới Fibrin I bền vững"
        ],
        answer: 0,
        explain: "Tiểu cầu không có nhân nên không thể tự tổng hợp protein/enzyme mới. Aspirin acetyl hóa bất hoạt vĩnh viễn enzyme COX-1 trong tiểu cầu → cắt đứt sự tạo thành Thromboxan A2 (TXA2 – chất gây co mạch và kết tập tiểu cầu mạnh) suốt 8–12 ngày đời sống của tiểu cầu đó."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nguy cơ xuất huyết khi dùng thuốc kháng đông)",
        q: "Khi điều trị dự phòng huyết khối bằng thuốc kháng Vitamin K (như Warfarin / Acenocoumarol), thầy thuốc cần NHẬN BIẾT và dặn dò bệnh nhân theo dõi xét nghiệm nào định kỳ để tránh biến chứng xuất huyết não/tiêu hóa?",
        source: "Thái độ A1: Nhận biết nguy cơ an toàn dùng thuốc",
        options: [
          "Theo dõi Thời gian Quick (TQ / PT-INR) định kỳ vì thuốc ức chế tổng hợp các yếu tố phụ thuộc Vitamin K (II, VII, IX, X), đặc biệt yếu tố VII ảnh hưởng trực tiếp lên TQ",
          "Theo dõi Thời gian máu chảy (TS) mỗi tuần",
          "Chỉ cần theo dõi số lượng hồng cầu lưới",
          "Không cần theo dõi xét nghiệm vì thuốc kháng Vitamin K không gây chảy máu"
        ],
        answer: 0,
        explain: "Thuốc kháng Vitamin K (nhóm Dicoumarin/Warfarin) ức chế II, VII, IX, X; trong đó yếu tố VII có thời gian bán hủy ngắn nhất (~6 giờ) nằm ở con đường ngoại sinh nên TQ (chuẩn hóa thành chỉ số INR) là xét nghiệm chuẩn bắt buộc phải theo dõi chặt chẽ để chỉnh liều an toàn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước vết thương chảy máu đúng cách)",
        q: "Khi sơ cứu một người bị vết thương rách nhỏ ở cẳng tay đang chảy máu, người nhân viên y tế ĐÁP ỨNG đúng sinh lý cầm máu nhất bằng cách nào?",
        source: "Thái độ A2: Xử trí đúng nguyên tắc cầm máu sinh lý",
        options: [
          "Dùng gạc vô khuẩn ấn ép chặt trực tiếp liên tục lên vết thương ít nhất 5 – 10 phút và nâng cao chi để tạo điều kiện cho co mạch và hình thành nút chặn tiểu cầu + lưới fibrin ổn định",
          "Liên tục lấy bông lau chùi cục máu mới đông trên mặt vết thương mỗi 30 giây cho sạch",
          "Rắc bột thuốc lá hoặc bôi dầu nóng trực tiếp vào lòng vết thương hở",
          "Buộc garô chặt tối đa ở sát nách ngay cả khi chỉ rách nông ở cẳng tay"
        ],
        answer: 0,
        explain: "Ép trực tiếp bằng gạc sạch lên vị trí chảy máu giúp giảm áp lực dòng máu thoát ra, hỗ trợ thành mạch co thắt và giữ yên để tiểu cầu bám dính kết tập tạo nút chặn rồi dệt sợi fibrin. Lau chùi liên tục sẽ làm bong nút chặn tiểu cầu khiến máu tiếp tục chảy."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Tư vấn trước phẫu thuật)",
        q: "Một bệnh nhân có tiền sử Hemophilia A nhẹ sắp nhổ răng hàm lớn. Trước khi làm thủ thuật, bác sĩ nha khoa từ chối nhổ ngay mà yêu cầu hội chẩn huyết học để truyền yếu tố VIII dự phòng và chuẩn bị thuốc chống tiêu sợi huyết, giải thích cặn kẽ cho bệnh nhân. Hành động này thể hiện mức độ nào trong thang Thái độ?",
        source: "Thái độ A3: Nội tâm hóa nguyên tắc an toàn thủ thuật",
        options: [
          "Nội tâm hóa (A3): Chủ động biến quy tắc an toàn sinh lý đông máu thành chuẩn mực hành nghề bắt buộc nhằm phòng ngừa chảy máu khó cầm đe dọa tính mạng",
          "Thiếu tự tin về kỹ thuật nhổ răng",
          "Kéo dài thời gian điều trị để tăng chi phí xét nghiệm",
          "Chỉ là bước nhận biết lý thuyết suông không cần áp dụng lâm sàng"
        ],
        answer: 0,
        explain: "Nhổ răng ở người Hemophilia A (thiếu yếu tố VIII con đường nội sinh) dù có thời gian máu chảy TS bình thường vẫn có nguy cơ chảy máu ồ ạt kéo dài nhiều ngày do không tạo được cục máu đông fibrin bền vững. Chủ động phối hợp đa chuyên khoa và dự phòng yếu tố VIII trước thủ thuật thể hiện sự nội tâm hóa chuẩn mực an toàn người bệnh."
      }
    ]
  },

  // BÀI 3: HOẠT ĐỘNG ĐIỆN CỦA TIM
  // Cũ (12 câu): L1: q0, q8, q9 (3); L2: q1, q2, q3, q4, q5, q6, q7, q11 (8); L3: q10 (1)
  // Thêm mới: 3 L1, 1 L2, 8 L3 -> Tổng: 6 L1, 9 L2, 9 L3!
  3: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích chủ nhịp)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế ion Pha 0 nhanh)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế ion Pha 0 chậm)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế Pha 2 bình nguyên)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tính tự động Pha 4)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Không co cứng uốn ván)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ý nghĩa trễ nút AV)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thông số ECG)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại sóng ECG)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích ngoại tâm thu)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Điều hòa nút xoang)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Điện thế nghỉ của tế bào cơ tâm thất (đáp ứng nhanh) và điện thế âm tối đa của tế bào nút xoang (đáp ứng chậm) lần lượt có giá trị khoảng bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.55–57",
        options: [
          "Cơ tâm thất khoảng –90 mV; Nút xoang khoảng –60 đến –65 mV",
          "Cơ tâm thất khoảng –40 mV; Nút xoang khoảng –90 mV",
          "Cả hai đều có điện thế nghỉ bằng –70 mV",
          "Cơ tâm thất khoảng +30 mV; Nút xoang khoảng –100 mV"
        ],
        answer: 0,
        explain: "Tế bào cơ tâm thất có nhiều kênh K+ chỉnh lưu nhập bào (IK1) giữ điện thế nghỉ rất âm ở –90 mV. Ngược lại, tế bào nút xoang thiếu kênh IK1 và thấm Na+/Ca2+ tự nhiên nên điện thế âm tối đa cuối tâm trương chỉ đạt –60 đến –65 mV."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Thời gian bình thường của Sóng P (khử cực hai tâm nhĩ) và Phức bộ QRS (khử cực hai tâm thất) trên điện tâm đồ lần lượt là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.68",
        options: [
          "Sóng P: 0,08 – 0,10 giây; Phức bộ QRS: 0,06 – 0,10 giây",
          "Sóng P: 0,20 – 0,30 giây; Phức bộ QRS: 0,35 – 0,40 giây",
          "Sóng P: 0,01 – 0,02 giây; Phức bộ QRS: 0,50 giây",
          "Sóng P: 0,12 – 0,20 giây; Phức bộ QRS: 0,40 – 0,50 giây"
        ],
        answer: 0,
        explain: "Thông số ECG chuẩn: Sóng P (0,08–0,10s), Khoảng PQ/PR (0,12–0,20s), Phức bộ QRS (0,06–0,10s), Khoảng QT (0,35–0,40s)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ba đường liên nút dẫn truyền xung động từ nút xoang đi qua tâm nhĩ đến nút nhĩ-thất bao gồm những bó nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.60",
        options: [
          "Bó trước (Bachmann), bó giữa (Wenckebach) và bó sau (Thorel)",
          "Bó His, bó Goll và bó Burdach",
          "Bó Flechsig, bó Gowers và bó mái-gai",
          "Động mạch vành phải, nhánh mũ và nhánh liên thất trước"
        ],
        answer: 0,
        explain: "Xung từ nút xoang lan truyền với tốc độ ~1 m/s dọc theo 3 đường liên nút chuyên biệt: bó trước (có nhánh Bachmann sang nhĩ trái), bó giữa (Wenckebach) và bó sau (Thorel) để xuống nút nhĩ-thất."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Trên điện tâm đồ (ECG), tại sao sóng T (tái cực hai tâm thất) lại thường CÙNG CHIỀU dương với phức bộ QRS (khử cực hai tâm thất) thay vì ngược chiều như ở một sợi cơ đơn lẻ?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 6, tr.69",
        options: [
          "Vì quá trình khử cực đi từ nội tâm mạc ra ngoại tâm mạc, nhưng quá trình tái cực lại diễn ra theo chiều NGƯỢC LẠI (lớp ngoại tâm mạc tái cực trước lớp nội tâm mạc)",
          "Vì sóng T thực chất là sóng tái cực của hai tâm nhĩ",
          "Vì cơ tâm thất tái cực bằng kênh Na+ nhanh dương",
          "Vì bó His dẫn truyền ngược chiều từ mỏm tim về đáy tim lúc tái cực"
        ],
        answer: 0,
        explain: "Lớp dưới ngoại tâm mạc có thời gian điện thế động ngắn hơn lớp nội tâm mạc (chịu áp lực cao và ít máu hơn trong tâm thu). Do đó, khử cực đi từ trong ra ngoài (từ nội ra ngoại), còn tái cực bắt đầu từ ngoài vào trong (ngoại tâm mạc tái cực trước nội tâm mạc) khiến vector tái cực hướng cùng chiều vector khử cực → sóng T dương cùng chiều QRS."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Đo nhịp tim & Khoảng PR trên ECG)",
        q: "[Kỹ năng Đọc ECG] Trên băng giấy điện tâm đồ chạy ở tốc độ chuẩn 25 mm/giây (mỗi ô nhỏ 1 mm = 0,04 giây; mỗi ô lớn 5 mm = 0,20 giây), khoảng cách giữa hai đỉnh sóng R liên tiếp (khoảng R-R) đo được là 4 ô lớn (20 mm) và khoảng PR đo được là 7 ô nhỏ (7 mm). Kết luận nào ĐÚNG?",
        source: "Kỹ năng S1: Thực hành đọc ECG cơ bản",
        options: [
          "Tần số tim = 75 lần/phút (bình thường); Khoảng PR = 0,28 giây (kéo dài > 0,20s → Block nhĩ-thất độ I)",
          "Tần số tim = 150 lần/phút; Khoảng PR = 0,14 giây (bình thường)",
          "Tần số tim = 60 lần/phút; Khoảng PR = 0,07 giây (ngắn)",
          "Tần số tim = 300 lần/phút; Khoảng PR = 0,20 giây"
        ],
        answer: 0,
        explain: "Ở tốc độ 25 mm/s: 1 phút = 60s = 300 ô lớn. Nhịp tim = 300 / 4 ô lớn = 75 lần/phút. Khoảng PR = 7 ô nhỏ × 0,04s = 0,28 giây (> giới hạn trên 0,20s) → Chẩn đoán dẫn truyền qua nút nhĩ-thất bị chậm lại (Block nhĩ-thất độ I)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận bệnh lý block nút AV)",
        q: "Một bệnh nhân lớn tuổi bị block nhĩ - thất hoàn toàn (cắt đứt hoàn toàn dẫn truyền từ nhĩ qua nút AV - bó His xuống thất), trong khi hai tâm thất được mạng Purkinje phía dưới tự phát nhịp thay thế. Điện tâm đồ và mạch bệnh nhân lúc này sẽ có đặc điểm nào?",
        source: "Vận dụng S2 - Tính tự động của hệ dẫn truyền",
        options: [
          "Nhịp thất chậm đều khoảng 20 – 40 lần/phút (nhịp tự phát của Purkinje), phức bộ QRS giãn rộng và sóng P đập nhanh 75 l/p hoàn toàn độc lập không liên hệ với QRS",
          "Nhịp thất tăng vọt lên 180 lần/phút",
          "Tim ngừng đập hoàn toàn vĩnh viễn ngay lập tức do nút xoang mất quyền chủ nhịp",
          "Khoảng PR rút ngắn xuống còn 0,04 giây"
        ],
        answer: 0,
        explain: "Khi xung từ nút xoang (75 l/p, tạo sóng P) bị chặn hoàn toàn ở nút AV/bó His, trung tâm tạo nhịp dự phòng ở dưới là mạng Purkinje sẽ thoát ức chế tự phát nhịp với tần số riêng 15–40 l/p để duy trì co bóp tâm thất (dễ gây cơn ngất Adams-Stokes nếu nhịp quá chậm)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Cơ chế thuốc chống loạn nhịp / chẹn kênh Ca2+)",
        q: "Khi dùng thuốc chẹn kênh Canxi không thuộc nhóm dihydropyridine (như Verapamil hoặc Diltiazem) ức chế đặc hiệu kênh Ca2+ chậm (type L) trên tim, nút xoang và nút nhĩ - thất sẽ thay đổi như thế nào?",
        source: "Vận dụng S2 - Kênh Ca2+ type L đáp ứng chậm",
        options: [
          "Giảm tốc độ khử cực pha 0 của nút xoang và nút nhĩ-thất, làm chậm nhịp tim và kéo dài thời gian dẫn truyền qua nút nhĩ-thất (kéo dài khoảng PR)",
          "Làm tăng tốc độ dẫn truyền qua nút nhĩ-thất lên 4 m/giây",
          "Chặn hoàn toàn kênh Na+ nhanh ở pha 0 của cơ tâm thất",
          "Không ảnh hưởng gì đến nút xoang và nút nhĩ-thất"
        ],
        answer: 0,
        explain: "Nút xoang và nút nhĩ-thất là tế bào đáp ứng chậm, khử cực pha 0 hoàn toàn phụ thuộc vào dòng Ca2+ đi vào qua kênh Ca2+ type L. Do đó thuốc chẹn kênh Ca2+ (Verapamil, Diltiazem) ức chế mạnh nút SA (giảm nhịp) và nút AV (giảm dẫn truyền, cắt cơn nhịp nhanh trên thất)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm đo & phân tích ECG)",
        q: "[Trạm Thực hành Điện tâm đồ] Trước khi dán các điện cực chuyển đạo trước tim (V1 – V6) và các điện cực chi để ghi điện tâm đồ, bước kiểm tra kỹ thuật BẮT BUỘC trên bảng kiểm để đảm bảo đường biểu diễn không bị nhiễu và đọc đúng biên độ là:",
        source: "Kỹ năng S3: Bảng kiểm ghi Điện tâm đồ",
        options: [
          "Kiểm tra test chuẩn điện thế (1 mV = 10 mm) và tốc độ giấy chuẩn (25 mm/giây), bảo đảm bệnh nhân nằm yên thư giãn, bỏ vật kim loại và mắc đúng vị trí điện cực",
          "Cho bệnh nhân đứng chạy tại chỗ khi đang kẹp điện cực",
          "Bôi dày dầu ăn lên ngực để thay gel dẫn điện",
          "Chỉnh tốc độ giấy thành 100 mm/giây mà không ghi chú"
        ],
        answer: 0,
        explain: "Theo bảng kiểm kỹ thuật ghi ECG: Test chuẩn (1 mV = 10 mm cao) và tốc độ 25 mm/s là chuẩn mực bắt buộc để tính biên độ sóng và thời gian các khoảng (PR, QRS, QT); đồng thời loại bỏ nhiễu cơ (bệnh nhân nằm thả lỏng) và nhiễu dòng điện."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích đoạn ST & thiếu máu cơ tim)",
        q: "Trên điện tâm đồ bệnh nhân đau thắt ngực cấp, đoạn ST chênh lên rõ rệt so với đường đẳng điện. Đoạn ST trên ECG tương ứng với pha nào của điện thế động cơ tâm thất và vì sao lại biến đổi khi thiếu máu cơ tim?",
        source: "Vận dụng S2 - Liên hệ Pha 2 & Đoạn ST",
        options: [
          "Tương ứng Pha 2 (Pha bình nguyên); khi thiếu máu cơ tim làm thiếu ATP, mở kênh K+-ATP gây giảm điện thế bình nguyên và tạo dòng điện tổn thương chênh lệch giữa vùng thiếu máu và vùng lành",
          "Tương ứng Pha 0 khử cực hai tâm nhĩ",
          "Tương ứng thời gian máu đi từ tĩnh mạch chủ về nhĩ phải",
          "Tương ứng pha 4 khử cực tự động của nút xoang"
        ],
        answer: 0,
        explain: "Trong pha 2 bình nguyên, toàn bộ khối cơ tâm thất bình thường đang khử cực đồng nhất (~0 mV) nên không có dòng điện chạy giữa các vùng → đoạn ST nằm trên đường đẳng điện. Khi một vùng cơ tim thiếu máu/hoại tử, màng tế bào bị khử cực một phần lúc nghỉ hoặc tái cực sớm ở pha 2, tạo dòng điện tổn thương làm đoạn ST chênh lên hoặc chênh xuống."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết vùng nguy hiểm khi kích thích cơ tim)",
        q: "Hiện tượng 'R trên T' (một nhát ngoại tâm thu thất xuất hiện đúng vào đỉnh hoặc sườn xuống của sóng T) cực kỳ nguy hiểm vì có thể khởi phát rung thất gây đột tử. Cơ sở điện sinh lý cần NHẬN BIẾT của hiện tượng này là:",
        source: "Thái độ A1: Nhận biết nguy cơ loạn nhịp ác tính",
        options: [
          "Đỉnh/sườn xuống sóng T tương ứng với thời kỳ dễ tổn thương (thời kỳ trơ tương đối), khi các vùng cơ thất đang tái cực không đồng đều nên kích thích rơi vào đây dễ tạo vòng vào lại gây rung thất",
          "Sóng T là lúc cơ tim đã ngừng chuyển hóa hoàn toàn",
          "Kích thích lúc này sẽ làm nút xoang tăng tốc lên 300 lần/phút",
          "Đỉnh sóng T nằm trong thời kỳ trơ tuyệt đối hoàn toàn an toàn"
        ],
        answer: 0,
        explain: "Giai đoạn đỉnh và nửa đầu sườn xuống sóng T (cuối pha 3 quanh ngưỡng -50 mV) là 'giai đoạn dễ tổn thương' (vulnerable period): một số sợi cơ thất đã thoát trơ trong khi các sợi bên cạnh vẫn còn trơ. Xung ngoại lai rơi đúng thời điểm này sẽ lan truyền một chiều không đồng bộ và tạo các vòng xoáy vào lại (re-entry) dẫn đến rung thất."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước bệnh nhân có khoảng QT kéo dài)",
        q: "Khi đọc điện tâm đồ thấy bệnh nhân có khoảng QT kéo dài bất thường (> 0,50 giây) do rối loạn điện giải (hạ K+, hạ Mg2+) hoặc do thuốc, bác sĩ cần ĐÁP ỨNG xử trí như thế nào?",
        source: "Thái độ A2: Phản ứng an toàn trước bất thường ECG",
        options: [
          "Lập tức ngưng/tránh các thuốc làm kéo dài QT, kiểm tra và bù điện giải (K+, Mg2+) kịp thời và theo dõi monitor liên tục đề phòng xoắn đỉnh (Torsades de pointes)",
          "Kê thêm thuốc kéo dài pha 3 bình nguyên của tim",
          "Bỏ qua kết quả ECG và cho bệnh nhân xuất viện ngay không cần dặn dò",
          "Cho bệnh nhân chạy bộ gắng sức ngay lập tức"
        ],
        answer: 0,
        explain: "Khoảng QT phản ánh tổng thời gian khử cực và tái cực tâm thất. QT kéo dài (do chậm tái cực pha 3) dễ sinh các khử cực sớm sau điện thế động gây loạn nhịp xoắn đỉnh đe dọa tính mạng. Nhận ra và xử trí kịp thời nguyên nhân (điện giải, thuốc) thể hiện thái độ đáp ứng đúng đắn."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Giải thích & trấn an người bệnh đeo máy tạo nhịp)",
        q: "Một bệnh nhân cao tuổi bị suy nút xoang nặng sắp được đặt máy tạo nhịp tim vĩnh viễn rất lo lắng rằng máy tạo nhịp sẽ 'thay thế hoàn toàn trái tim mình'. Bác sĩ giải thích cặn kẽ cơ chế tạo nhịp sinh lý của nút xoang và vai trò hỗ trợ phát xung của máy khi nút xoang quá chậm để người bệnh an tâm hợp tác. Điều này thể hiện thái độ:",
        source: "Thái độ A3: Nội tâm hóa giao tiếp nhân văn & chuyên nghiệp",
        options: [
          "Nội tâm hóa (A3): Kiên nhẫn chuyển hóa kiến thức điện sinh lý tim thành sự giải thích thấu cảm, tôn trọng quyền được hiểu biết và giảm lo âu cho người bệnh",
          "Chỉ là hành động thực hiện máy móc theo thủ tục hành chính",
          "Làm tăng thêm nỗi sợ hãi cho bệnh nhân",
          "Thay thế hoàn toàn vai trò của điện tâm đồ"
        ],
        answer: 0,
        explain: "Giải thích rõ nguyên lý sinh lý (máy tạo nhịp chỉ phát xung điện nhỏ kích thích cơ tim khi nhịp tự nhiên của nút xoang hạ dưới ngưỡng cài đặt, bảo đảm cung lượng tim nuôi não) giúp bệnh nhân an tâm hợp tác điều trị và tuân thủ tái khám — biểu hiện của năng lực thái độ nội tâm hóa."
      }
    ]
  },

  // BÀI 4: CHỨC NĂNG BƠM MÁU CỦA TIM
  // Cũ (12 câu): L1: q0, q2, q3, q4 (4); L2: q1, q5, q6, q9, q10, q11 (6); L3: q7, q8 (2)
  // Thêm mới: 2 L1, 3 L2, 7 L3 -> Tổng: 6 L1, 9 L2, 9 L3!
  4: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Trạng thái van tim)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại ngưỡng áp suất)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tiếng tim)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Nguồn gốc sóng áp suất nhĩ)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Khái niệm tiền tải)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính SV và CO)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Công thức Fick)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chu chuyển đóng mở van)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế khấc dicrotic)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ảnh hưởng của hậu tải)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Ở tần số tim 75 lần/phút (chu chuyển tim dài 0,8 giây), thời gian kéo dài của 3 kỳ: Tâm nhĩ thu, Tâm thất thu và Tâm trương toàn bộ (thất trương) lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.72–78",
        options: [
          "Tâm nhĩ thu: 0,1 giây; Tâm thất thu: 0,3 giây (0,05s co đồng thể tích + 0,25s bơm máu); Tâm thất trương: 0,5 giây (trong đó 0,4s là tâm trương toàn bộ)",
          "Tâm nhĩ thu: 0,4 giây; Tâm thất thu: 0,1 giây; Tâm thất trương: 0,3 giây",
          "Tâm nhĩ thu: 0,3 giây; Tâm thất thu: 0,4 giây; Tâm thất trương: 0,1 giây",
          "Ba kỳ đều kéo dài bằng nhau là 0,27 giây"
        ],
        answer: 0,
        explain: "Chu chuyển tim 0,8s: Tâm nhĩ thu 0,1s (và nhĩ giãn 0,7s); Tâm thất thu 0,3s (gồm 0,05s co đẳng trường + 0,25s tống máu); Tâm thất trương 0,5s (trong đó 0,4s cuối trước khi nhĩ thu lại là cả nhĩ và thất cùng giãn – tâm trương toàn bộ)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Hai tiếng tim thứ ba (T3) và thứ tư (T4) lần lượt xuất hiện vào giai đoạn nào của chu chuyển tim?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.79",
        options: [
          "T3 ở đầu kỳ tâm trương (thì máu về nhanh đập vào thành thất); T4 ở cuối kỳ tâm trương (khi tâm nhĩ thu tống máu vào thất kém giãn)",
          "T3 khi đóng van nhĩ-thất; T4 khi đóng van động mạch chủ",
          "T3 ở kỳ tâm nhĩ thu; T4 ở kỳ co đồng thể tích",
          "Cả T3 và T4 đều xuất hiện khi van hai lá mở ra ở kỳ bơm máu nhanh"
        ],
        answer: 0,
        explain: "T1 (đóng van nhĩ-thất đầu thất thu), T2 (đóng van tổ chim đầu thất trương), T3 (máu ùa về nhanh ở 1/3 đầu tâm trương làm rung thành thất), T4 (tâm nhĩ co tống máu xuống thất ở cuối tâm trương)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Tại sao ở người bình thường khi hít vào sâu lại có thể nghe thấy tiếng tim thứ hai (T2) tách đôi sinh lý (thành phần chủ A2 đi trước thành phần phổi P2)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.79",
        options: [
          "Vì khi hít vào áp suất âm lồng ngực hút nhiều máu về tim phải làm thất phải tăng thể tích tâm thu (theo luật Starling) và tống máu lâu hơn, khiến van động mạch phổi đóng muộn hơn van động mạch chủ",
          "Vì khi hít vào van hai lá và van ba lá đóng không cùng lúc",
          "Vì cơ hoành ép trực tiếp vào van động mạch chủ làm van ĐMC đóng chậm hơn",
          "Vì khi hít vào lượng máu lên phổi giảm đi một nửa"
        ],
        answer: 0,
        explain: "Khi hít vào sâu: (1) Máu tĩnh mạch hệ thống đổ về thất phải tăng → thất phải kéo dài thời gian tống máu → van ĐMP (P2) đóng muộn hơn; (2) Dung tích mạch máu phổi giãn ra giữ bớt máu nên máu về thất trái giảm nhẹ → van ĐMC (A2) đóng sớm hơn → nghe T2 tách đôi sinh lý (A2-P2)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích, phân biệt)",
        q: "Khi nhịp tim tăng lên quá cao (ví dụ 170 – 180 lần/phút trong cơn nhịp nhanh kịch phát), tại sao cung lượng tim (CO) không những không tăng thêm mà còn có thể GIẢM mạnh gây tụt huyết áp?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 7, tr.78 & 82",
        options: [
          "Vì khi nhịp tim quá nhanh, thời gian kỳ tâm trương bị rút ngắn nghiêm trọng nên máu không kịp đổ đầy tâm thất (EDV giảm mạnh → SV giảm nặng)",
          "Vì thời gian tâm thất thu kéo dài gấp 3 lần bình thường",
          "Vì van động mạch chủ luôn mở liên tục suốt cả chu chuyển tim",
          "Vì nút xoang ngừng phát xung hoàn toàn"
        ],
        answer: 0,
        explain: "Khi tim đập quá nhanh, thời gian TÂM TRƯƠNG bị rút ngắn nhiều hơn thời gian tâm thu rất nhiều. Do tâm thất chỉ nhận máu (và mạch vành chỉ tưới máu nuôi cơ tim thất trái tối đa) trong kỳ tâm trương nên khi tâm trương quá ngắn, EDV và thể tích nhát bóp SV sụt giảm nghiêm trọng làm tụt cung lượng tim và huyết áp."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích vòng lặp Áp suất - Thể tích)",
        q: "Trên đồ thị vòng lặp Áp suất - Thể tích thất trái (PV loop), bốn đỉnh góc của chu chuyển tim tương ứng với 4 sự kiện đóng mở van nào theo đúng trình tự thời gian?",
        source: "Vận dụng Khung Chu chuyển tim",
        options: [
          "Đóng van hai lá (EDV) → Mở van ĐMC → Đóng van ĐMC (ESV) → Mở van hai lá",
          "Mở van hai lá → Đóng van ĐMC → Mở van ĐMC → Đóng van hai lá",
          "Đóng van ĐMC → Mở van hai lá → Đóng van hai lá → Mở van ĐMC",
          "Mở van ĐMC → Mở van hai lá → Đóng van ĐMC → Đóng van hai lá"
        ],
        answer: 0,
        explain: "Chu trình theo chiều ngược kim đồng hồ trên vòng lặp PV: Đóng van 2 lá (bắt đầu co đồng thể tích ở EDV) → Mở van ĐMC (bắt đầu tống máu) → Đóng van ĐMC (bắt đầu giãn đồng thể tích ở ESV) → Mở van 2 lá (bắt đầu đổ đầy thất)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Tính Phân suất tống máu EF & Chỉ số tim CI)",
        q: "[Kỹ năng Tính toán Huyết động] Một bệnh nhân siêu âm tim đo được: EDV = 150 mL, ESV = 90 mL, nhịp tim = 80 lần/phút, diện tích da cơ thể (BSA) = 1,6 m². Thể tích nhát bóp (SV), Phân suất tống máu (EF) và Chỉ số tim (CI) lần lượt là bao nhiêu?",
        source: "Kỹ năng S1: Tính toán thông số chức năng tâm thu",
        options: [
          "SV = 60 mL; EF = 40% (giảm nhẹ); CO = 4,8 L/phút; CI = 3,0 L/phút/m²",
          "SV = 90 mL; EF = 60%; CO = 7,2 L/phút; CI = 4,5 L/phút/m²",
          "SV = 60 mL; EF = 67%; CO = 4,8 L/phút; CI = 3,0 L/phút/m²",
          "SV = 240 mL; EF = 40%; CO = 19,2 L/phút; CI = 12 L/phút/m²"
        ],
        answer: 0,
        explain: "SV = EDV – ESV = 150 – 90 = 60 mL. EF = SV / EDV = 60 / 150 = 40% (bình thường 55–70%). CO = 60 mL × 80 = 4.800 mL/phút = 4,8 L/phút. Chỉ số tim CI = CO / BSA = 4,8 / 1,6 = 3,0 L/phút/m²."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận bệnh van tim qua tiếng thổi)",
        q: "Khi khám tim một bệnh nhân nghe thấy âm thổi tâm thu thô ráp ở ổ van động mạch chủ (liên sườn II bờ phải xương ức), lan lên động mạch cảnh, kèm mạch nảy yếu và chậm. Tổn thương van tim nào giải thích đúng nhất cơ chế huyết động này?",
        source: "Vận dụng S2 - Huyết động học van tim",
        options: [
          "Hẹp van động mạch chủ (gây dòng máu xoáy mạnh khi tống máu từ thất trái qua lỗ van hẹp trong thì tâm thất thu và làm tăng hậu tải thất trái)",
          "Hở van hai lá đơn thuần (máu phụt ngược về nhĩ trái trong thì tâm trương)",
          "Hẹp van hai lá (nghe âm thổi ở thì tâm trương)",
          "Hở van động mạch chủ (tạo âm thổi tâm trương)"
        ],
        answer: 0,
        explain: "Van ĐMC chỉ mở ra trong kỳ TÂM THẤT THU (tống máu). Khi van ĐMC bị hẹp, thất trái phải tạo áp suất rất cao mới tống được máu qua lỗ van hẹp gây dòng chảy xoáy tạo âm thổi tâm thu ở ổ van ĐMC lan lên động mạch cảnh."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích sóng áp suất nhĩ trong rung nhĩ / hở van)",
        q: "Ở một bệnh nhân bị RUNG NHĨ (tâm nhĩ rung hỗn loạn không co bóp hữu hiệu được nữa), biến đổi nào sẽ xảy ra trên sóng áp suất nhĩ phải và lượng máu đổ đầy thất lúc nghỉ?",
        source: "Vận dụng S2 - Chu chuyển tim trong rung nhĩ",
        options: [
          "Mất hoàn toàn sóng 'a' trên đồ thị áp suất nhĩ (và mất tiếng T4 nếu có), lượng máu xuống thất giảm khoảng 20–30% nhưng bệnh nhân vẫn duy trì được cung lượng tim khi nghỉ nhờ 70% máu tự chảy xuống ở kỳ tâm trương",
          "Mất hoàn toàn sóng 'v' và 100% máu không thể xuống được tâm thất",
          "Sóng 'a' tăng cao khổng lồ gấp 5 lần bình thường",
          "Tiếng tim T1 và T2 biến mất hoàn toàn"
        ],
        answer: 0,
        explain: "Sóng 'a' là do tâm nhĩ co bóp ở cuối tâm trương đẩy 30% máu cuối xuống thất. Khi rung nhĩ, tâm nhĩ không co bóp đồng bộ được nữa nên mất sóng 'a'. Khi nghỉ ngơi 70% máu vẫn tự chảy thụ động xuống thất nên người rung nhĩ vẫn sống được, nhưng khi gắng sức mất phần nhĩ thu 30% sẽ dễ bị khó thở."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm khám nghe 4 ổ van tim)",
        q: "[Trạm Khám lâm sàng Tim mạch] Theo bảng kiểm nghe tim chuẩn mực để xác định tiếng tim T1 và T2 khi bệnh nhân có nhịp tim nhanh, kỹ năng nào giúp bác sĩ phân biệt chắc chắn T1 và T2?",
        source: "Kỹ năng S3: Chạy trạm khám tim mạch",
        options: [
          "Vừa nghe tim bằng ống nghe vừa bắt mạch cảnh (hoặc động mạch quay): tiếng tim xảy ra ĐỒNG THỜI ngay trước/cùng lúc mạch cảnh nảy lên là tiếng T1 (mở đầu tâm thu), còn tiếng xảy ra sau khi mạch cảnh nảy là tiếng T2",
          "Chỉ cần đếm số lần thở của bệnh nhân",
          "Nghe ở vùng thượng vị là phân biệt được mọi van tim",
          "Tiếng T1 luôn nghe thanh và to nhất ở đáy tim"
        ],
        answer: 0,
        explain: "Trên lâm sàng khi tim đập nhanh khó phân biệt T1-T2 chỉ bằng khoảng nghỉ, kỹ năng chuẩn bảng kiểm là tay trái bắt động mạch cảnh trong khi tay phải cầm ống nghe: T1 đánh dấu bắt đầu tâm thất thu (nên trùng với lúc mạch cảnh bắt đầu nảy lên), còn T2 đánh dấu kết thúc tâm thu (xảy ra khi sóng mạch vừa đi qua)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết vai trò của kỳ tâm trương với tưới máu vành)",
        q: "Khi điều trị bệnh nhân suy tim có nhịp nhanh kèm thiếu máu cơ tim, bác sĩ cần NHẬN BIẾT đặc điểm sinh lý nào của tưới máu mạch vành để tránh làm nhịp tim tăng quá cao?",
        source: "Thái độ A1: Nhận biết sinh lý tuần hoàn vành",
        options: [
          "Động mạch vành trái cấp máu cho cơ thất trái chủ yếu trong kỳ TÂM TRƯƠNG (vì trong kỳ tâm thu cơ thất trái co bóp mạnh chèn ép mạch vành xuyên thành); nhịp quá nhanh làm rút ngắn tâm trương gây thiếu máu cơ tim nặng hơn",
          "Động mạch vành chỉ tưới máu duy nhất trong giai đoạn co đồng thể tích",
          "Cung lượng mạch vành tăng mạnh nhất khi huyết áp tụt xuống 50 mmHg",
          "Nhịp tim càng nhanh trên 180 l/p thì cơ tim càng được nghỉ ngơi nhiều hơn"
        ],
        answer: 0,
        explain: "Khác với tất cả các cơ quan khác nhận máu tối đa trong kỳ tâm thu, cơ thất trái khi co tâm thu tạo áp suất lớn ép chặt các nhánh động mạch vành trong thành cơ tim khiến dòng máu vành trái gần như ngừng/giảm mạnh ở tâm thu và chảy mạnh nhất vào kỳ TÂM TRƯƠNG."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước người bệnh hở/hẹp van có nguy cơ suy tim)",
        q: "Một bệnh nhân hẹp van hai lá khít (tâm nhĩ trái ứ máu, tăng áp lực) đột ngột xuất hiện khó thở dữ dội, ho khạc bọt hồng sau khi tự ý truyền quá nhiều dịch tĩnh mạch tốc độ nhanh. Bác sĩ xử trí ĐÁP ỨNG đúng sinh lý bằng cách nào?",
        source: "Thái độ A2: Xử trí phù phổi cấp do quá tải tiền tải",
        options: [
          "Ngừng truyền dịch ngay, cho bệnh nhân ngồi thõng chân, thở oxy, dùng thuốc lợi tiểu nhanh/giãn mạch để giảm lượng máu tĩnh mạch về tim và giảm áp lực mao mạch phổi",
          "Tiếp tục truyền thêm 2 lít nước muối sinh lý để nâng huyết áp",
          "Cho bệnh nhân nằm đầu thấp chân cao tối đa",
          "Tiêm thuốc gây co mạch ngoại biên liều cao để đẩy thêm máu vào phổi"
        ],
        answer: 0,
        explain: "Trong hẹp van hai lá, máu từ nhĩ trái xuống thất trái bị cản trở; truyền dịch nhanh làm tăng vọt áp lực nhĩ trái và áp lực thủy tĩnh mao mạch phổi vượt áp suất keo huyết tương → phù phổi cấp. Ngừng dịch, ngồi thõng chân, thở oxy và lợi tiểu giúp hạ nhanh tiền tải và áp lực mao mạch phổi."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Tuân thủ đo và tư vấn tiền tải/hậu tải trong tăng huyết áp)",
        q: "Một bệnh nhân tăng huyết áp mạn tính thường bỏ thuốc hạ áp vì 'không thấy nhức đầu'. Người bác sĩ kiên trì giải thích rằng huyết áp cao kéo dài làm tăng 'hậu tải', bắt tâm thất trái phải gồng sức tống máu lâu ngày dẫn đến phì đại và suy tim, giúp người bệnh tự giác uống thuốc đều. Đây là biểu hiện của:",
        source: "Thái độ A3: Nội tâm hóa truyền thông giáo dục sức khỏe",
        options: [
          "Nội tâm hóa (A3): Dùng kiến thức sinh lý về hậu tải và quá tải áp suất để thuyết phục người bệnh thay đổi nhận thức, tự giác tuân thủ điều trị dự phòng biến chứng tim mạch lâu dài",
          "Hành vi đe dọa tâm lý không cần thiết",
          "Chỉ làm đúng kỹ thuật đo huyết áp đơn thuần",
          "Quá tải tiền tải cấp tính"
        ],
        answer: 0,
        explain: "Hiểu bản chất sinh lý (tăng huyết áp = tăng hậu tải liên tục → phì đại đồng tâm thất trái → rối loạn tâm trương và suy tim) và chủ động giáo dục bệnh nhân hiểu rõ lý do điều trị dù chưa có triệu chứng rầm rộ là năng lực thái độ nội tâm hóa của thầy thuốc."
      }
    ]
  },

  // BÀI 5: ĐIỀU HOÀ HOẠT ĐỘNG TIM
  // Cũ (12 câu): L1: q0, q1, q2, q5 (4); L2: q3, q4, q6, q7, q8, q10, q11 (7); L3: q9 (1) -> Wait let's adjust carefully:
  // L1 (Thuộc): q0 (Frank-Starling), q1 (Bezold-Jarisch), q2 (phân bố phải/trái), q5 (K+/Ca2+), q9 (đường dẫn truyền mắt-tim Aschner) = 5 câu? Wait: q9 (Aschner V -> X) or q10 (β1 -> cAMP) is L2. So L1 in base = 4 (q0, q1, q2, q5), L2 = 7 (q3, q4, q6, q7, q8, q10, q11), L3 = 1 (q9 -> wait q9 Aschner là L1/L2, q8 giải thích tại sao nhát sau ngoại tâm thu mạnh là L2). Let's make base L1=4, L2=6, L3=2 (make q3 baro and q4 Bainbridge after vagotomy L3 analysis, or keep clear!). Let's tag: L1=4 (q0, q1, q2, q5), L2=6 (q6, q7, q8, q9, q10, q11), L3=2 (q3, q4) -> Add Extra: 2 L1, 3 L2, 7 L3 -> Total: 6 L1, 9 L2, 9 L3!
  5: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại định luật)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại phản xạ)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại phân bố)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Phản xạ áp thụ quan)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Thí nghiệm cắt dây X)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại rối loạn ion)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế thoát dây X)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Loạn nhịp xoang hô hấp)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích nhát ngoại tâm thu)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cung phản xạ mắt-tim)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế phân tử β1)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đáp ứng hóa thụ quan)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Chiều dài sợi cơ tim (sarcomere) tối ưu giúp định luật Frank-Starling đạt lực co bóp cực đại và vùng hoạt động áp suất của phản xạ áp thụ quan lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.86 & 90",
        options: [
          "Chiều dài sarcomere tối ưu ~2,2 μm; Áp thụ quan hoạt động nhạy nhất trong khoảng huyết áp 70 – 160 mmHg",
          "Chiều dài sarcomere tối ưu ~5,0 μm; Áp thụ quan hoạt động ở 10 – 40 mmHg",
          "Chiều dài sarcomere tối ưu ~1,0 μm; Áp thụ quan chỉ hoạt động khi HA > 220 mmHg",
          "Không có ngưỡng tối ưu, cơ tim càng giãn vô hạn càng co mạnh hơn"
        ],
        answer: 0,
        explain: "Ở chiều dài sarcomere 2,2 μm, sự gối đầu giữa sợi mảnh Actin và sợi dày Myosin đạt tối ưu đồng thời tăng ái lực Troponin C với Ca2+. Nếu giãn quá 2,2 μm (như suy tim giãn nặng) lực co sẽ giảm. Phản xạ áp thụ quan xoang cảnh hoạt động hiệu quả nhất ở HA trung bình 70–160 mmHg."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Phản xạ Goltz (đánh mạnh vào vùng thượng vị hoặc co kéo phúc mạc đột ngột khi phẫu thuật bụng làm tim đập chậm hoặc ngừng đập) dẫn truyền qua dây thần kinh ly tâm nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.93",
        options: [
          "Dây thần kinh lang thang (Dây X - phó giao cảm)",
          "Dây thần kinh giao cảm T1 – T4",
          "Dây thần kinh hoành (C3 – C5)",
          "Dây thần kinh thiệt hầu (Dây IX)"
        ],
        answer: 0,
        explain: "Phản xạ Goltz bắt nguồn từ các thụ thể cơ học ở tạng bụng/mạc treo (đám rối thái dương), truyền xung hướng tâm lên hành não kích thích mạnh nhân DÂY X → xung ly tâm theo dây X đến tim gây chậm nhịp hoặc ngưng tim phản xạ."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích hiệu ứng cầu thang Bowditch)",
        q: "Hiệu ứng cầu thang (hiệu ứng Bowditch: khi tần số tim tăng dần trong giới hạn sinh lý, sức co bóp của cơ tim cũng tăng theo) xảy ra do cơ chế nội bào nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.87",
        options: [
          "Do tăng số lần mở kênh Ca2+ chậm trong một phút và thời gian tâm trương rút ngắn nên Ca2+ chưa kịp bơm hết ra ngoài tế bào, làm tăng dự trữ Ca2+ trong lưới nội cơ tương cho các nhát bóp sau",
          "Do nút xoang tự tăng biên độ điện thế động lên +150 mV",
          "Do làm giảm nồng độ K+ ngoại bào xuống 0 mmol/L",
          "Do dây thần kinh X tăng tiết Acetylcholine lên cơ tâm thất"
        ],
        answer: 0,
        explain: "Khi tần số tim tăng, mỗi phút có nhiều pha 2 hơn làm lượng Ca2+ đi vào tế bào nhiều hơn lượng Ca2+ được bơm trao đổi Na+/Ca2+ đẩy ra → Ca2+ tích lũy thêm vào lưới nội cơ tương → mỗi nhát bóp giải phóng nhiều Ca2+ hơn làm tăng co bóp."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân tích ảnh hưởng nhiệt độ & hormon)",
        q: "Khi thân nhiệt bệnh nhân tăng lên do sốt cao (ví dụ sốt 39°C tăng thêm 2°C so với bình thường 37°C), tần số nhịp tim thay đổi như thế nào và do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8, tr.94",
        options: [
          "Nhịp tim TĂNG lên khoảng 20 lần/phút (tăng khoảng 10 nhịp cho mỗi 1°C tăng thân nhiệt), do nhiệt độ cao làm tăng tính thấm màng nút xoang với ion Na+/Ca2+ đẩy nhanh quá trình tự khử cực pha 4",
          "Nhịp tim GIẢM xuống dưới 50 lần/phút do dây X bị kích thích",
          "Nhịp tim hoàn toàn không thay đổi vì nút xoang không nhạy cảm với nhiệt độ",
          "Nhịp tim ngừng đập ngay lập tức ở kỳ tâm thu"
        ],
        answer: 0,
        explain: "Sốt làm tăng tính thấm của màng tế bào nút xoang với các ion tạo nhịp (Na+, Ca2+), tăng tốc độ chuyển hóa → độ dốc pha 4 tăng → mỗi 1°C tăng thân nhiệt làm nhịp tim tăng khoảng 10 lần/phút (trừ một số bệnh đặc biệt như thương hàn có hiện tượng mạch nhiệt phân ly)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh cơ chế thuốc trợ tim Digitalis)",
        q: "Thuốc trợ tim nhóm Digitalis (Digoxin) làm tăng sức co bóp cơ tim ở người suy tim sung huyết thông qua cơ chế phân tử nào trên màng tế bào cơ tim?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 8 & Dược lý sinh lý",
        options: [
          "Ức chế bơm Na+/K+-ATPase trên màng cơ tim → làm tăng nồng độ Na+ nội bào → giảm hoạt động bơm trao đổi Na+/Ca2+ → giữ nhiều Ca2+ ở lại trong tế bào và lưới nội cơ tương",
          "Mở ồ ạt kênh K+ làm tăng phân cực màng cơ tâm thất",
          "Ức chế hoàn toàn kênh Ca2+ type L ở pha 2",
          "Phong bế thụ thể β1-adrenergic trên cơ thất"
        ],
        answer: 0,
        explain: "Digitalis ức chế bơm Na+/K+-ATPase làm Na+ tích tụ nhẹ trong bào tương, làm giảm khuynh độ Na+ cần thiết để bơm đối vận 3Na+/1Ca2+ đẩy Ca2+ ra khỏi tế bào. Kết quả là nồng độ Ca2+ dự trữ trong lưới nội cơ tương tăng lên giúp nhát bóp co mạnh hơn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Thực hành ấn xoang cảnh / nghiệm pháp phế vị)",
        q: "[Kỹ năng Lâm sàng] Khi thực hiện kỹ thuật xoa xoang động mạch cảnh để cắt cơn nhịp nhanh kịch phát trên thất ở một bệnh nhân trẻ, nguyên tắc thực hành đúng bảng kiểm an toàn là gì?",
        source: "Kỹ năng S1: Kỹ thuật xoa xoang cảnh theo sinh lý áp thụ quan",
        options: [
          "Phải nghe động mạch cảnh loại trừ âm thổi (tránh bong mảng xơ vữa), chỉ xoa TỪNG BÊN một (không bao giờ xoa cả hai bên cùng lúc) trong khi theo dõi ECG liên tục và sẵn sàng thuốc cấp cứu",
          "Ấn chặt đồng thời cả hai bên cổ bệnh nhân liên tục trong 3 phút",
          "Đấm mạnh vào vùng thượng vị bệnh nhân ngay lập tức",
          "Xoa ở vùng cổ thấp sát xương đòn hai bên đồng thời"
        ],
        answer: 0,
        explain: "Xoa đồng thời cả 2 xoang cảnh sẽ làm ngưng trệ dòng máu lên não gây thiếu máu não cấp và có thể kích hoạt phản xạ dây X quá mức gây ngưng xoang kéo dài. Luôn nghe tìm âm thổi cảnh trước và chỉ xoa nhẹ từng bên 5–10 giây dưới monitor ECG."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích mất máu cấp & phản xạ áp thụ quan)",
        q: "Một nạn nhân bị mất máu cấp khoảng 1.000 mL khiến huyết áp tụt xuống còn 80/50 mmHg, nhưng nhịp tim lại tăng vọt lên 130 lần/phút và da lạnh ẩm tái nhợt. Đáp ứng bù trừ này là kết quả của phản xạ nào?",
        source: "Vận dụng S2 - Phản xạ áp thụ quan khi giảm HA",
        options: [
          "Áp suất hạ làm GIẢM căng thành xoang cảnh & quai ĐMC → giảm tần số xung ức chế truyền về hành não theo dây IX, X → trung tâm vận mạch giải phóng ức chế, tăng mạnh giao cảm (tăng nhịp tim, co mạch ngoại biên) và giảm trương lực dây X",
          "Phản xạ Bainbridge do căng phồng tâm nhĩ phải",
          "Phản xạ mắt-tim Aschner làm tăng nhịp tim",
          "Tăng K+ máu làm tim co bóp mạnh hơn"
        ],
        answer: 0,
        explain: "Khi mất máu làm tụt HA, các áp thụ quan ở xoang cảnh và quai ĐMC giảm bị kéo căng nên giảm xung ức chế đi theo dây IX, X về hành não → trung tâm tim mạch tự động giảm hoạt tính phó giao cảm (dây X) và tăng mạnh hoạt tính giao cảm tim mạch → mạch nhanh, co mạch ngoại biên giữ áp lực tưới máu não và vành."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận bệnh nhân tăng K+ máu & ECG)",
        q: "Một bệnh nhân suy thận cấp có nồng độ K+ máu tăng vọt lên 7,8 mmol/L. Kết quả điện tâm đồ xuất hiện sóng T cao nhọn, phức bộ QRS giãn rộng dẹt sóng P và nguy cơ ngừng tim cận kề. Nếu tiêm tĩnh mạch chậm Canxi gluconate trong cấp cứu lúc này là nhằm mục đích sinh lý gì?",
        source: "Vận dụng S2 - Xử trí tăng K+ máu đe dọa tính mạng",
        options: [
          "Canxi làm nâng điện thế ngưỡng (ít âm hơn) để khôi phục lại sự chênh lệch giữa điện thế nghỉ (đang bị K+ làm giảm âm) và điện thế ngưỡng, giúp bảo vệ màng cơ tim tức thì khỏi ngừng tim tâm trương",
          "Canxi làm hạ ngay nồng độ K+ máu bằng cách đưa K+ vào xương",
          "Canxi làm ngừng tim ở kỳ tâm thu để bảo vệ nút xoang",
          "Canxi ức chế hoàn toàn các kênh Na+ nhanh"
        ],
        answer: 0,
        explain: "Tăng K+ máu làm điện thế nghỉ bớt âm (từ -90 lên gần -70 mV), tiến sát ngưỡng khử cực làm bất hoạt kênh Na+. Tiêm Ca2+ (Ca gluconate) tuy không làm giảm nồng độ K+ máu nhưng giúp nâng điện thế ngưỡng lên mức ít âm hơn, tái lập khoảng cách an toàn cho màng cơ tim dẫn truyền ổn định ngay trong vài phút."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích ghép tim mất thần kinh tự chủ)",
        q: "Một bệnh nhân sau phẫu thuật ghép tim (trái tim mới hoàn toàn bị cắt đứt cả sợi giao cảm lẫn sợi dây thần kinh X đến tim). Ở trạng thái nghỉ ngơi bình thường, nhịp tim của người được ghép tim sẽ như thế nào và tim tăng cung lượng tim khi vận động bằng cách nào?",
        source: "Vận dụng S2 - Sinh lý tim mất chi phối thần kinh",
        options: [
          "Nhịp tim lúc nghỉ khoảng ~95 – 100 lần/phút (nhịp nội tại nút xoang vì mất trương lực ức chế thường trực của dây X); khi vận động tim tăng cung lượng nhờ định luật Frank-Starling và catecholamine lưu hành trong máu",
          "Nhịp tim lúc nghỉ chỉ còn 20 lần/phút vì mất hoàn toàn dây X",
          "Tim không thể đập được nếu thiếu xung từ hành não",
          "Nhịp tim tăng tức thì lên 160 l/p ngay giây đầu tiên vừa đứng dậy"
        ],
        answer: 0,
        explain: "Lúc nghỉ ở người bình thường, dây X giữ nhịp tim ở ~70 l/p thông qua trương lực ức chế thường trực lên nút xoang (vốn có nhịp nội tại ~100 l/p). Tim ghép mất dây X nên đập ở mức ~100 l/p khi nghỉ; khi vận động vẫn tăng được cung lượng nhờ tăng máu về tim (Frank-Starling) và Adrenaline từ tủy thượng thận theo đường máu (nhưng đáp ứng chậm hơn người thường)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Biện luận thí nghiệm kích thích dây X & giao cảm)",
        q: "[Trạm Thực nghiệm Sinh lý Tim ếch/thỏ] Trong thí nghiệm trên tim động vật, khi kích thích liên tục vào đầu ngoại vi dây X phải bằng dòng điện mạnh, tim ngừng đập vài giây rồi tự đập lại chậm hơn. Nếu tiêm trước Atropin rồi mới kích thích lại dây X với cùng cường độ đó, kết quả quan sát được là gì?",
        source: "Kỹ năng S3: Chạy trạm thực nghiệm Sinh lý Tim",
        options: [
          "Tim KHÔNG ngừng đập và cũng không chậm lại, vì Atropin đã gắn phong bế cạnh tranh vào thụ thể Muscarinic M2 nên Acetylcholine của dây X không tác dụng được",
          "Tim ngừng đập vĩnh viễn ở kỳ tâm thu",
          "Tim ngừng đập nhanh hơn và kéo dài gấp 5 lần trước",
          "Nhịp tim giảm xuống còn 5 lần/phút"
        ],
        answer: 0,
        explain: "Atropin là chất đối kháng cạnh tranh đặc hiệu tại thụ thể Muscarinic (M2 ở tim). Khi đã nhỏ Atropin phong bế thụ thể M2, dù kích thích dây X giải phóng nhiều Acetylcholine thì tim vẫn không bị ức chế."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết phản xạ ngất phế vị)",
        q: "Một sinh viên y khoa đứng xem phẫu thuật trong phòng mổ nóng bức bị chóng mặt, vã mồ hôi, mạch chậm 42 lần/phút và ngất xỉu (ngất do phản xạ phế vị - vasovagal syncope). Người bác sĩ cần NHẬN BIẾT cơ chế gây tụt huyết áp và mạch chậm ở đây là:",
        source: "Thái độ A1: Nhận biết nhanh ngất phản xạ phế vị",
        options: [
          "Kích thích quá mức dây X (chậm nhịp tim) kết hợp ức chế trung tâm co mạch giao cảm (giãn mạch ngoại biên) làm giảm tưới máu não tạm thời",
          "Cơn tăng huyết áp ác tính lên 240/130 mmHg",
          "Tăng đường huyết cấp tính",
          "Kích thích giao cảm quá mức làm co cứng tim ở kỳ tâm thu"
        ],
        answer: 0,
        explain: "Ngất phế vị (vasovagal) thường xảy ra khi đứng lâu, sợ hãi, đau hoặc thấy máu: căng thẳng cảm xúc kích hoạt phản xạ Bezold-Jarisch / vỏ não → hành não tăng vọt trương lực dây X (làm chậm tim) đồng thời rút trương lực giao cảm (làm giãn mạch tụt HA) → đặt nằm đầu thấp kê cao chân giúp máu về não hồi phục nhanh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thận trọng tránh phản xạ Goltz / Aschner trong thủ thuật)",
        q: "Trong phẫu thuật nội soi ổ bụng hoặc phẫu thuật chỉnh lác mắt (kéo cơ vận nhãn), bác sĩ phẫu thuật luôn thao tác nhẹ nhàng và dặn bác sĩ gây mê theo dõi sát nhịp tim trên monitor. Sự cẩn trọng chủ động này nhằm phòng ngừa tai biến nào theo sinh lý tim?",
        source: "Thái độ A3: Nội tâm hóa nguyên tắc an toàn phòng ngừa phản xạ dây X",
        options: [
          "Phòng ngừa kích hoạt phản xạ mắt-tim (Aschner khi kéo cơ nhãn cầu) hoặc phản xạ Goltz (khi kéo phúc mạc/tạng bụng) gây kích thích mạnh dây X làm chậm nhịp hoặc ngưng tim đột ngột trên bàn mổ",
          "Phòng ngừa hiện tượng tăng đường huyết sau ăn",
          "Phòng ngừa mất yếu tố nội tại của dạ dày",
          "Phòng ngừa tan máu hệ Rhesus"
        ],
        answer: 0,
        explain: "Thao tác thô bạo lên nhãn cầu hoặc kéo căng mạc treo/tạng bụng có thể kích hoạt phản xạ Aschner hoặc phản xạ Goltz truyền về hành não kích thích ồ ạt dây X gây chậm xoang nặng hoặc ngưng tim. Theo dõi sát và chuẩn bị sẵn Atropin thể hiện thái độ nội tâm hóa chuẩn an toàn phẫu thuật."
      }
    ]
  }
};
