// ==========================================================================
// MỞ RỘNG CÂU HỎI & PHÂN LOẠI KSA + MỨC NHẬN THỨC - PHẦN 3 (BÀI 11 ĐẾN BÀI 17)
// Mức 1 (6/24 = 25%) | Mức 2 (9/24 = 37,5%) | Mức 3 (9/24 = 37,5%)
// ==========================================================================

window.EXTRA_PART3 = {
  // BÀI 11: TIÊU HOÁ Ở DẠ DÀY
  // Cũ (12): L1=3 (q0, q4, q11), L2=7 (q1, q2, q5, q6, q7, q8, q10), L3=2 (q3, q9)
  // Thêm mới: 3 L1, 2 L2, 7 L3 -> 6 L1, 9 L2, 9 L3 = 24
  11: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Chức năng sống còn IF)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ học dạ dày & MMC)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Điều hòa thoát thức ăn)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận tăng Gastrin)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Giai đoạn tâm linh)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bơm H+/K+-ATPase)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thụ thể tế bào thành)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hoạt hóa & vai trò Pepsin)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hàng rào niêm mạc dạ dày)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Dịch vị giữa bữa ăn & stress)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân lớp đồng tâm thức ăn)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Trung tâm ói ở hành não)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Trong một ngày, dạ dày bài tiết khoảng bao nhiêu dịch vị, với độ pH bình thường và tỉ lệ đóng góp của 3 giai đoạn (Đầu - Dạ dày - Ruột) lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.277 & 281",
        options: [
          "Khoảng 2 Lít/ngày (pH 1–2); Giai đoạn Đầu ~20% (400 mL), Giai đoạn Dạ dày ~70% (1500 mL), Giai đoạn Ruột ~5–10% (100 mL)",
          "Khoảng 10 Lít/ngày (pH = 8); Giai đoạn Ruột chiếm 90%",
          "Khoảng 200 mL/ngày (pH = 7); Giai đoạn Đầu chiếm 80%",
          "Khoảng 5 Lít/ngày; ba giai đoạn đều bằng nhau"
        ],
        answer: 0,
        explain: "Dạ dày tiết ~2 Lít dịch vị/ngày (pH 1–2): Giai đoạn tâm linh/đầu ~20% (400 mL), Giai đoạn dạ dày chiếm nhiều nhất ~70% (1500 mL), Giai đoạn ruột ~5–10% (100 mL)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại sóng cơ học)",
        q: "Tần số sóng nhu động nhào trộn và đẩy thức ăn bình thường ở vùng thân - hang vị dạ dày là bao nhiêu và do cấu trúc nào phát nhịp?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.274",
        options: [
          "3 – 4 lần/phút (do các tế bào tạo nhịp Cajal ở phần giữa thân vị dọc bờ cong lớn tạo sóng chậm)",
          "12 lần/phút (giống ở tá tràng)",
          "60 – 100 lần/phút (giống nhịp nút xoang tim)",
          "1 lần mỗi 90 phút"
        ],
        answer: 0,
        explain: "Nhịp điện căn bản (BER) của dạ dày có tần số 3–4 lần/phút (cách mỗi 15–20 giây có 1 sóng), khởi phát từ vùng tạo nhịp ở phần giữa thân vị lan dần xuống hang vị và môn vị."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thứ tự thoát thức ăn)",
        q: "Xếp theo thứ tự thời gian lưu lại trong dạ dày từ NHANH THOÁT NHẤT đến CHẬM THOÁT NHẤT của các loại thức ăn:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.275",
        options: [
          "Nước lọc (nhanh nhất) → Thức ăn giàu Carbohydrate → Thức ăn giàu Protein → Thức ăn giàu Lipid / Mỡ (lưu lại lâu nhất 4–6 giờ)",
          "Mỡ (nhanh nhất) → Protein → Carbohydrate → Nước lọc",
          "Protein → Mỡ → Nước lọc → Carbohydrate",
          "Tất cả các loại thức ăn đều thoát khỏi dạ dày sau đúng 5 phút"
        ],
        answer: 0,
        explain: "Nước và chất lỏng đẳng trương thoát khỏi dạ dày gần như ngay lập tức (10–20 phút); kế đến là Glucid (~1–2h), Protid (~2–3h), và Lipid lưu lại lâu nhất (4–6h) vì sản phẩm tiêu hóa mỡ xuống tá tràng kích thích tiết mạnh CCK và GIP ức chế môn vị."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích hiện tượng thủy triều kiềm sau ăn)",
        q: "Tại sao ngay sau một bữa ăn thịnh soạn, máu tĩnh mạch rời dạ dày và nước tiểu của người khỏe mạnh thường có xu hướng hơi KIỀM hơn bình thường (hiện tượng thủy triều kiềm - Alkaline tide)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.278",
        options: [
          "Vì mỗi phân tử H+ được tế bào thành bơm vào lòng dạ dày (tạo HCl) thì đồng thời có 1 ion HCO3- được vận chuyển qua màng đáy bên vào máu tĩnh mạch dạ dày (đổi lấy Cl- đi vào tế bào)",
          "Vì dạ dày hấp thu trực tiếp NaHCO3 từ thức ăn vào máu động mạch",
          "Vì tế bào chính tiết Bicarbonate thẳng vào tĩnh mạch cửa",
          "Vì tuyến tụy ngừng tiết NaHCO3 sau bữa ăn"
        ],
        answer: 0,
        explain: "Trong tế bào thành: CO2 + H2O → H2CO3 → H+ + HCO3-. Bơm H+/K+-ATPase đẩy H+ vào lòng dạ dày, còn ở màng đáy bên kênh trao đổi Cl-/HCO3- đưa HCO3- vào máu tĩnh mạch dạ dày làm máu và nước tiểu kiềm nhẹ ngay sau ăn (sau đó được trung hòa lại khi tụy dùng HCO3- trong máu tiết vào tá tràng!)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế bảo vệ của Prostaglandin E2 vs NSAIDs)",
        q: "Tại sao việc lạm dụng thuốc giảm đau kháng viêm không steroid (NSAIDs như Aspirin, Ibuprofen, Naproxen) hoặc Corticoid liều cao kéo dài lại dễ gây viêm loét xuất huyết dạ dày?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 22, tr.279",
        options: [
          "Do thuốc ức chế tổng hợp Prostaglandin (PGE2, PGI2), làm giảm tiết chất nhầy, giảm tiết HCO3-, giảm lưu lượng máu nuôi niêm mạc và tăng tiết acid HCl → phá vỡ hàng rào bảo vệ niêm mạc dạ dày",
          "Do thuốc trực tiếp hoạt hóa enzyme Amylase tiêu hủy thành dạ dày",
          "Do thuốc làm ngừng sóng nhu động hang vị suốt 1 tuần",
          "Do thuốc kích thích tế bào D tiết quá nhiều Somatostatin"
        ],
        answer: 0,
        explain: "Prostaglandin E2 và I2 tại niêm mạc dạ dày có vai trò ức chế tiết HCl, tăng tưới máu dưới niêm mạc và kích thích tế bào cổ tuyến tiết nhiều chất nhầy + HCO3-. NSAIDs ức chế enzyme COX làm mất Prostaglandin bảo vệ nên HCl và pepsin dễ ăn mòn gây loét."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Đọc hiểu cơ chế thuốc ức chế tiết acid trên tế bào thành)",
        q: "[Kỹ năng Dược lý Lâm sàng] So sánh hiệu quả giảm tiết HCl tối đa giữa thuốc kháng thụ thể Histamine H2 (như Famotidine) và thuốc ức chế Bơm Proton PPI (như Omeprazole, Esomeprazole), tại sao PPI lại ức chế tiết acid mạnh mẽ và triệt để hơn (~95% vs ~70%)?",
        source: "Kỹ năng S1: Vận dụng cơ chế tế bào thành",
        options: [
          "Vì thuốc kháng H2 chỉ khóa 1 trong 3 đường kích thích (vẫn còn ACh-M3 và Gastrin-CCKB hoạt động yếu), trong khi PPI ức chế trực tiếp bơm H+/K+-ATPase là con đường chung cuối cùng bơm H+ ra lòng dạ dày",
          "Vì PPI tiêu diệt toàn bộ tế bào G của hang vị",
          "Vì thuốc kháng H2 làm tăng tiết Gastrin mạnh hơn nên không giảm được HCl",
          "Vì PPI biến HCl trong dạ dày thành NaCl"
        ],
        answer: 0,
        explain: "Trên tế bào thành có 3 thụ thể kích thích (H2, M3, CCK-B), nhưng tất cả đều hội tụ về một cơ chế thực thi duy nhất ở màng tiểu quản là bơm H+/K+-ATPase. Khóa bơm này (PPI) ngăn chặn triệt để sự bài tiết H+ bất kể chất kích thích là gì."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận bệnh nhân Hội chứng Zollinger-Ellison)",
        q: "Một bệnh nhân bị loét dạ dày - tá tràng tái phát nhiều ổ nặng kèm tiêu chảy mỡ (Hội chứng Zollinger-Ellison do khối u tiết quá nhiều Gastrin từ tụy/tá tràng). Cơ chế sinh lý giải thích tình trạng tăng tiết acid cực độ và tiêu chảy mỡ ở bệnh nhân này là:",
        source: "Vận dụng S2 - Tác dụng của Gastrin quá mức",
        options: [
          "Gastrin máu rất cao kích thích liên tục tế bào thành và tế bào ECL tiết lượng lớn HCl gây loét nặng; lượng acid khổng lồ xuống tá tràng làm bất hoạt enzyme Lipase tụy và kết tủa muối mật dẫn đến kém tiêu hóa mỡ (tiêu chảy phân mỡ)",
          "Gastrin gây liệt hoàn toàn cơ trơn ruột non",
          "Gastrin ức chế hoàn toàn bơm H+/K+-ATPase gây thiếu acid",
          "Gastrin làm teo nhỏ lớp cơ thành dạ dày"
        ],
        answer: 0,
        explain: "Gastrin vừa kích thích trực tiếp tế bào thành (CCK-B), vừa kích thích tế bào ECL tiết Histamine (H2), vừa gây phì đại khối tế bào thành → tiết HCl cực đại. Lượng H+ quá lớn tràn xuống tá tràng vượt quá khả năng trung hòa của NaHCO3 tụy → làm pH tá tràng < 4 gây bất hoạt men Lipase tụy → tiêu chảy mỡ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích hậu quả cắt bỏ 2/3 dạ dày / môn vị)",
        q: "Một bệnh nhân sau phẫu thuật cắt bỏ vùng hang vị - môn vị và nối dạ dày trực tiếp với hỗng tràng, sau khi ăn một bữa ăn nhiều đồ ngọt và sữa lại xuất hiện triệu chứng chóng mặt, vã mồ hôi, nhịp tim nhanh, đau bụng tiêu chảy sau ăn 20 phút (Hội chứng Dumping sớm). Cơ chế sinh lý gây ra hiện tượng này là:",
        source: "Vận dụng S2 - Mất điều hòa thoát thức ăn môn vị",
        options: [
          "Mất van môn vị và phản xạ ruột-dạ dày khiến khối dưỡng trấp ưu trương đổ ồ ạt xuống hỗng tràng → kéo nhanh nước từ lòng mạch vào lòng ruột gây giảm thể tích tuần hoàn thoáng qua (vã mồ hôi, tụt HA, mạch nhanh) và căng ruột gây tiêu chảy",
          "Do thức ăn bị giữ lại trong dạ dày 48 giờ không xuống được ruột",
          "Do tăng vọt tiết Yếu tố nội tại (IF) ngay sau ăn",
          "Do thức ăn đi ngược lên thực quản"
        ],
        answer: 0,
        explain: "Bình thường môn vị và phản xạ tá tràng điều tiết lượng vị trấp thoát từng ít một để không gây sốc thẩm thấu cho ruột non. Khi mất môn vị, thức ăn nhiều đường ưu trương tràn ồ ạt vào hỗng tràng hút nước từ huyết tương vào lòng ruột gây tụt thể tích lòng mạch, tim đập nhanh và co thắt ruột."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm giải thích đặt ống thông dạ dày / nhiễm H. pylori)",
        q: "[Trạm Lâm sàng Tiêu hóa] Vi khuẩn *Helicobacter pylori* có thể sống sót trong môi trường acid pH 1,5 của dạ dày và gây loét chủ yếu bằng cách tiết enzyme Urease (chuyển Ure → NH3 + CO2) và tiết chất độc phá hủy lớp nhầy. Nếu bệnh nhân nhiễm *H. pylori* vùng hang vị làm giảm số lượng tế bào D (giảm Somatostatin), nồng độ Gastrin và HCl sẽ biến đổi ra sao?",
        source: "Kỹ năng S3: Biện luận cơ chế loét hành tá tràng do H. pylori",
        options: [
          "Giảm Somatostatin làm mất ức chế ngược lên tế bào G → Tăng Gastrin → Tăng tiết HCl ồ ạt (làm tăng nguy cơ loét hành tá tràng)",
          "Giảm hoàn toàn HCl xuống pH = 7",
          "Tăng gấp 10 lần Somatostatin để bảo vệ hang vị",
          "Làm ngừng bài tiết Pepsinogen ở tế bào chính"
        ],
        answer: 0,
        explain: "Viêm hang vị do *H. pylori* phá hủy các tế bào D tiết Somatostatin → mất phanh ức chế đối với tế bào G → Gastrin máu tăng lên → kích thích các tế bào thành ở thân/đáy vị (vẫn lành lặn) tăng tiết mạnh HCl tống xuống hành tá tràng gây loét hành tá tràng."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích động học co bóp đẩy lùi Retropulsion ở hang vị)",
        q: "Trong quá trình nhào trộn thức ăn ở dạ dày, sóng nhu động đẩy khối thức ăn tiến về phía cơ thắt môn vị lúc môn vị đang khép hờ sẽ gây ra hiện tượng 'đẩy lùi' (Retropulsion) có ý nghĩa sinh lý gì?",
        source: "Vận dụng S2 - Hoạt động cơ học hang-môn vị",
        options: [
          "Chỉ cho phép nước và các hạt thức ăn đã nghiền nhỏ (< 1–2 mm) đi qua lỗ môn vị xuống tá tràng, còn các mảnh thức ăn lớn bị bắn ngược trở lại hang vị để tiếp tục nghiền nát và trộn đều với dịch vị tạo vị trấp",
          "Đẩy thức ăn bắn ngược từ ruột non qua thực quản ra miệng",
          "Làm ngưng hoàn toàn quá trình tiêu hóa của Pepsin",
          "Làm đóng vĩnh viễn lỗ tâm vị trong 12 giờ"
        ],
        answer: 0,
        explain: "Khi sóng nhu động hang vị dồn tới gần môn vị, môn vị đóng lại khiến phần lớn khối thức ăn bị nén ép qua khe hẹp và phụt ngược trở về thân-hang vị (retropulsion). Nhờ lực cắt cơ học mạnh này mà thức ăn được nghiền nhuyễn (< 1–2 mm) trước khi thoát xuống tá tràng."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết thời điểm uống thuốc PPI đúng sinh lý)",
        q: "Khi kê đơn thuốc ức chế bơm proton (PPI như Omeprazole/Esomeprazole) cho bệnh nhân loét dạ dày, bác sĩ cần NHẬN BIẾT cơ chế sinh lý tế bào thành để hướng dẫn bệnh nhân uống thuốc vào thời điểm nào đạt hiệu quả tối ưu nhất?",
        source: "Thái độ A1: Nhận biết nguyên lý uống thuốc đúng giờ sinh lý",
        options: [
          "Uống trước bữa ăn sáng khoảng 30 – 60 phút, vì thuốc PPI chỉ gắn bất hoạt được những bơm H+/K+-ATPase ĐANG HOẠT ĐỘNG được đưa lên màng tiểu quản khi tế bào thành nhận kích thích từ bữa ăn",
          "Uống ngay trước khi đi ngủ khi dạ dày đang trống rỗng hoàn toàn suốt 8 tiếng sau đó",
          "Uống chung với viên thuốc trung hòa acid chứa nhôm/magie ngay cùng 1 lúc",
          "Uống bất kỳ lúc nào trong ngày đều có hiệu quả giống hệt nhau"
        ],
        answer: 0,
        explain: "Lúc đói hầu hết bơm proton nằm thu gọn bên trong túi bào tương tế bào thành. Khi uống PPI trước bữa ăn sáng 30–60 phút, nồng độ thuốc trong máu đạt đỉnh đúng lúc thức ăn kích thích đẩy hàng loạt bơm H+/K+-ATPase ra màng tiểu quản hoạt động → thuốc ức chế được số lượng bơm tối đa!"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thái độ phòng ngừa loét dạ dày do stress & NSAIDs)",
        q: "Một bệnh nhân cao tuổi bị thoái hóa khớp gối đến xin mua thuốc giảm đau NSAIDs uống dài ngày vì 'uống thấy đỡ đau nhanh lắm'. Bác sĩ không kê đơn dễ dãi mà thăm khám kỹ tiền căn dạ dày, giải thích tác hại phá vỡ hàng rào chất nhầy bảo vệ dạ dày của NSAIDs và chọn phác đồ bảo vệ niêm mạc phù hợp. Điều này thể hiện:",
        source: "Thái độ A3: Nội tâm hóa an toàn kê đơn",
        options: [
          "Nội tâm hóa (A3): Đặt sự an toàn lâu dài của niêm mạc dạ dày người bệnh lên trên mong muốn giảm triệu chứng tức thời, vận dụng nhuần nhuyễn sinh lý Prostaglandin vào quyết định kê đơn",
          "Từ chối điều trị đau khớp cho bệnh nhân",
          "Kê đơn theo yêu cầu cảm tính của bệnh nhân mà không giải thích",
          "Chỉ nhằm tăng doanh thu thuốc dạ dày"
        ],
        answer: 0,
        explain: "Xuất huyết tiêu hóa do NSAIDs ở người cao tuổi thường âm thầm không đau báo trước (vì chính thuốc giảm đau che lấp triệu chứng). Chủ động giải thích cơ chế sinh lý và dự phòng loét là thái độ chuẩn mực của người thầy thuốc."
      }
    ]
  },

  // BÀI 12: TIÊU HOÁ Ở RUỘT NON
  // Cũ (12): L1=4 (q0, q3, q4, q10), L2=7 (q1, q2, q5, q6, q7, q8, q9), L3=1 (q11)
  // Thêm mới: 2 L1, 2 L2, 8 L3 -> 6 L1, 9 L2, 9 L3 = 24
  12: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Cấu trúc tăng diện tích 600 lần)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hormon ức chế nhu động)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế Secretin)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Hoạt hóa Trypsinogen)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Thành phần dịch tụy)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bẫy nguồn gốc Muối mật)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vai trò CCK lên túi mật)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (SGLT1 vs GLUT5)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Chylomicron vào bạch huyết)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế hấp thu nước)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Hấp thu Vit C & B12)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận thiếu Vit K)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tỉ lệ dịch tiêu hóa)",
        q: "Tổng lượng dịch đi vào ống tiêu hóa mỗi ngày (gồm ăn uống và dịch tiết tiêu hóa) vào khoảng 9 Lít. Trong đó ruột non hấp thu khoảng bao nhiêu Lít và lượng nước thải ra theo phân bình thường là bao nhiêu?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.299",
        options: [
          "Ruột non hấp thu khoảng 7 – 7,5 Lít; Đại tràng hấp thu 1,4 – 1,9 Lít; Lượng nước thải qua phân chỉ còn ~100 mL/ngày",
          "Ruột non hấp thu 1 Lít; Đại tràng hấp thu 7 Lít; Thải qua phân 1 Lít",
          "Dạ dày hấp thu 8 Lít; Ruột non hấp thu 1 Lít",
          "Ruột non hấp thu 100% không có nước trong phân"
        ],
        answer: 0,
        explain: "Mỗi ngày ~9 Lít dịch vào ruột (2L ăn uống + 7L dịch tiết tiêu hóa). Ruột non hấp thu phần lớn (~7–7,5 Lít), chỉ còn ~1,5–2 Lít qua van hồi-manh tràng xuống đại tràng, đại tràng hấp thu thêm ~1,4–1,9 Lít nên phân chỉ còn ~100 mL nước."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tuần hoàn ruột - gan & vị trí hấp thu sắt/canxi)",
        q: "Tỉ lệ phần trăm muối mật được tái hấp thu ở hồi tràng để quay trở về gan theo tuần hoàn ruột - gan, và hai đoạn ruột hấp thu chủ yếu Sắt (Fe2+), Canxi (Ca2+) lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.292 & 300",
        options: [
          "Khoảng 94% muối mật tái hấp thu ở hồi tràng; Sắt và Canxi hấp thu chủ yếu ở Tá tràng và đầu Hỗng tràng",
          "Chỉ 10% muối mật được tái hấp thu; Sắt và Canxi hấp thu ở Đại tràng xuống",
          "94% muối mật tái hấp thu ở Dạ dày; Sắt và Canxi hấp thu ở Thực quản",
          "100% muối mật thải thẳng ra phân không tái hấp thu"
        ],
        answer: 0,
        explain: "94% muối mật được tái hấp thu chủ động ở đoạn cuối hồi tràng về tĩnh mạch cửa tái sử dụng (~18 vòng/ngày, chỉ mất ~6% qua phân được gan tổng hợp bù từ cholesterol). Sắt (Fe2+) và Canxi (Ca2+) hấp thu chủ yếu ở tá tràng và hỗng tràng trên."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích vai trò hai chiều của Trypsin & cơ chế tự bảo vệ tụy)",
        q: "Tại sao các enzyme tiêu hóa protein của tuyến tụy bình thường KHÔNG tự tiêu hủy chính nhu mô tuyến tụy dù tụy sản xuất rất nhiều protease mỗi ngày?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.288",
        options: [
          "Vì các protease được bài tiết dưới dạng tiền men bất hoạt (Trypsinogen, Chymotrypsinogen...), chỉ được hoạt hóa bởi Enterokinase khi đã đổ xuống lòng ruột non, đồng thời trong nang tụy có sẵn chất ức chế Trypsin (Trypsin inhibitor)",
          "Vì tế bào tụy được bọc bằng lớp sừng không thấm enzyme",
          "Vì tuyến tụy có pH = 1,0 làm bất hoạt mọi protease",
          "Vì dịch tụy chỉ có Amylase mà không có enzyme tiêu hóa đạm"
        ],
        answer: 0,
        explain: "Hai cơ chế bảo vệ tuyến tụy: (1) Tổng hợp và đóng gói các protease ở dạng tiền men bất hoạt (zymogen), tách biệt với Enterokinase vốn chỉ nằm ở bờ bàn chải ruột non; (2) Tế bào nang tụy tiết sẵn chất ức chế Trypsin (SPINK1 / Trypsin inhibitor) ngăn Trypsin tự hoạt hóa sớm bên trong ống tụy."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt cử động phân đoạn vs nhu động & quy luật ruột)",
        q: "Khi sóng nhu động của ruột non đẩy một viên dưỡng trấp di chuyển về phía hậu môn theo quy luật ruột (Bayliss - Starling), sự co giãn cơ trơn thành ruột quanh viên thức ăn diễn ra như thế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 23, tr.285",
        options: [
          "Cơ vòng phía sau (phía miệng) CO lại đẩy viên thức ăn tiến tới, đồng thời cơ vòng phía trước (phía hậu môn) GIÃN ra (nhận tiếp nhận) giúp đẩy thức ăn đi xuôi chiều với vận tốc trung bình ~1 cm/phút",
          "Cơ vòng phía trước co chặt lại còn phía sau giãn ra hoàn toàn",
          "Cả đoạn ruột trên và dưới đều co cứng cùng một lúc",
          "Co bóp phân đoạn chỉ đẩy thức ăn đi về phía hậu môn với tốc độ 50 cm/giây"
        ],
        answer: 0,
        explain: "Phản xạ nhu động của đám rối Auerbach tuân theo quy luật ruột: phía miệng (sau khối thức ăn) co cơ vòng/giãn cơ dọc; phía hậu môn (trước khối thức ăn) giãn cơ vòng/co cơ dọc ('giãn tiếp nhận') đẩy dưỡng trấp đi ~1 cm/phút (0,5–2 cm/s theo từng đợt ngắn)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Giải thích cơ chế sinh lý của dung dịch Oresol)",
        q: "[Kỹ năng Lâm sàng Nhi - Tiêu hóa] Trong điều trị bù nước điện giải đường uống cho trẻ bị tiêu chảy cấp mất nước bằng dung dịch Oresol (chứa NaCl và Glucose theo tỉ lệ đồng phân tử), cơ sở sinh lý ruột non giúp Oresol bù nước hiệu quả ngay cả khi niêm mạc ruột đang bị tăng tiết dịch là gì?",
        source: "Kỹ năng S1: Vận dụng kênh đồng vận chuyển SGLT1 & hấp thu nước",
        options: [
          "Tả hay tiêu chảy cấp gây tăng tiết Cl-/nước ở tế bào hẻm tuyến nhưng KHÔNG làm hỏng kênh đồng vận chuyển Na+-Glucose (SGLT1) trên đỉnh nhung mao; do đó Glucose kích thích SGLT1 kéo cả Na+ và Glucose vào tế bào ruột → tạo áp suất thẩm thấu kéo nước hấp thu trở lại máu mạnh mẽ!",
          "Glucose trực tiếp tiêu diệt vi khuẩn tả trong lòng ruột",
          "Oresol được hấp thu hoàn toàn qua kênh GLUT5 mà không cần Na+",
          "Oresol làm tắc hoàn toàn mạch bạch huyết để giữ nước"
        ],
        answer: 0,
        explain: "Đây là phát minh cứu sống hàng triệu trẻ em dựa hoàn toàn trên sinh lý hấp thu ruột non: nếu chỉ uống nước lọc hay nước muối đơn thuần khi tiêu chảy, ruột không hấp thu tốt; nhưng khi phối hợp đúng tỉ lệ Glucose + Na+, kênh SGLT1 hoạt động kéo Na+ và Glucose đồng thời vào tế bào, tạo khuynh độ thẩm thấu hút nước đi theo cực nhanh!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận bất dung nạp Lactose khi uống sữa)",
        q: "Một người trưởng thành sau khi uống 1 ly sữa tươi khoảng 30 phút bị đầy hơi, sôi bụng, đau quặn và tiêu chảy phân lỏng có bọt chua. Cơ chế sinh lý giải thích tình trạng bất dung nạp đường sữa (Lactose) này là gì?",
        source: "Vận dụng S2 - Men bờ bàn chải Lactase",
        options: [
          "Thiếu hụt enzyme Lactase ở bờ bàn chải tế bào biểu mô ruột non → đường đôi Lactose không được cắt thành Glucose + Galactose nên không hấp thu được qua SGLT1 → tạo áp suất thẩm thấu giữ nước trong lòng ruột và bị vi khuẩn đại tràng lên men sinh khí H2, CO2 và acid béo chuỗi ngắn",
          "Thừa quá nhiều enzyme Lactase ở nước bọt",
          "Do Lactose đi vào mạch bạch huyết tạo hạt Chylomicron quá lớn",
          "Do túi mật không tiết muối mật để tiêu hóa Lactose"
        ],
        answer: 0,
        explain: "Đường đôi Lactose chỉ được hấp thu sau khi bị enzyme Lactase trên vi nhung mao bờ bàn chải cắt thành monosaccharide (Glucose + Galactose). Khi thiếu Lactase, Lactose tồn đọng làm tăng thẩm thấu kéo nước vào ruột và xuống đại tràng bị vi khuẩn lên men gây đầy hơi tiêu chảy."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Viêm tụy mạn vs Tắc đường mật trong tiêu phân mỡ)",
        q: "Một bệnh nhân bị suy tụy ngoại tiết nặng (viêm tụy mạn vôi hóa) thường xuyên đi tiêu phân mỡ, nổi váng dầu, sụt cân nhiều và thiếu các vitamin tan trong dầu. Xét nghiệm nào sau đây giúp khẳng định nguyên nhân là do thiếu men tụy chứ không phải tắc mật đơn thuần?",
        source: "Vận dụng S2 - Phân biệt suy tụy ngoại tiết vs tắc mật",
        options: [
          "Bệnh nhân có phân nhiều mỡ chưa thủy phân (Triglyceride trung tính còn nguyên vẹn nhiều do thiếu Lipase tụy) kèm giảm Elastase-1 trong phân, trong khi Bilirubin máu bình thường và phân KHÔNG bạc màu",
          "Bilirubin máu tăng rất cao gây vàng da, vàng mắt và phân bạc màu trắng như đất sét",
          "Nồng độ Amylase và Trypsin trong dịch tá tràng tăng gấp 10 lần",
          "Hoàn toàn không có chất béo nào trong phân"
        ],
        answer: 0,
        explain: "Cả tắc mật và suy tụy nặng đều gây tiêu phân mỡ. Nhưng ở suy tụy ngoại tiết, đường mật vẫn thông nên sắc tố mật (bilirubin) vẫn xuống ruột nhuộm vàng phân (không vàng da, không bạc màu phân), nhưng vì thiếu Lipase tụy và protease nên trong phân chứa đầy giọt mỡ trung tính chưa cắt và sợi cơ thịt chưa tiêu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích hấp thu Acid béo chuỗi ngắn/trung bình ở người tắc bạch huyết)",
        q: "Một bệnh nhân bị tắc nghẽn hệ thống mạch bạch huyết ruột (giãn bạch mạch ruột nguyên phát) dẫn đến tiêu chảy mỡ nặng khi ăn dầu mỡ thông thường (acid béo chuỗi dài). Tại sao khi chuyển sang bổ sung dầu MCT (Triglyceride chuỗi trung bình < 10–12 Carbon), bệnh nhân lại hấp thu được năng lượng dễ dàng?",
        source: "Vận dụng S2 - Hai đường hấp thu lipid theo độ dài chuỗi Carbon",
        options: [
          "Vì các acid béo chuỗi ngắn và trung bình (< 10–12C) tan tốt hơn trong nước, không cần tái tổng hợp thành Triglyceride đóng gói Chylomicron vào mạch bạch huyết mà khuếch tán đi thẳng vào MAO MẠCH MÁU tĩnh mạch cửa về gan!",
          "Vì MCT được hấp thu bằng kênh SGLT1 của đường Glucose",
          "Vì MCT không đi qua tế bào biểu mô ruột mà thấm qua da bụng",
          "Vì MCT chuyển hóa hoàn toàn thành Bilirubin tại dạ dày"
        ],
        answer: 0,
        explain: "Acid béo chuỗi dài (> 12–14C) bắt buộc phải đóng gói thành hạt Chylomicron đi theo mạch bạch huyết. Ngược lại, acid béo chuỗi ngắn và trung bình (< 10–12C, như MCT) khuếch tán thẳng qua tế bào ruột vào máu tĩnh mạch cửa về gan mà không phụ thuộc vào mạch bạch huyết hay Chylomicron."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm giải thích thiếu máu & thiếu Vitamin K ở bệnh nhân cắt hồi tràng)",
        q: "[Trạm Lâm sàng Ngoại Tiêu hóa] Một bệnh nhân bị bệnh Crohn phải phẫu thuật cắt bỏ hoàn toàn đoạn cuối HỒI TRÀNG (khoảng 100 cm cuối trước van hồi-manh tràng). Sau vài tháng đến vài năm, bệnh nhân này có nguy cơ cao xuất hiện cùng lúc những biến chứng dinh dưỡng - chuyển hóa nào?",
        source: "Kỹ năng S3: Tổng hợp chức năng đặc hiệu của Hồi tràng",
        options: [
          "Mất nơi hấp thu 94% muối mật (gây cạn kiệt kho muối mật → tiêu phân mỡ, sỏi mật cholesterol và thiếu vitamin A, D, E, K), mất nơi hấp thu phức hợp Vitamin B12 - IF (gây thiếu máu hồng cầu to) và giảm hấp thu Vitamin C",
          "Chỉ mất khả năng hấp thu sắt và đường Fructose",
          "Tăng hấp thu quá mức Vitamin B12 gây đa hồng cầu",
          "Mất hoàn toàn khả năng tiết dịch vị HCl ở dạ dày"
        ],
        answer: 0,
        explain: "Hồi tràng là vị trí hấp thu chuyên biệt không thể thay thế cho: (1) 94% Muối mật (tuần hoàn ruột - gan); (2) Phức hợp Vitamin B12 – Yếu tố nội tại IF; và (3) Vitamin C. Cắt mất hồi tràng làm đứt gãy tuần hoàn ruột-gan của muối mật dẫn đến kém hấp thu lipid và thiếu Vitamin A, D, E, K kèm thiếu B12."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Sắt Fe2+ vs Fe3+ & vai trò Vitamin C + HCl dạ dày)",
        q: "Bệnh nhân thiếu máu thiếu sắt được bác sĩ khuyên uống viên sắt (dạng Fe2+) cùng với nước cam hoặc Vitamin C, và KHÔNG uống cùng lúc với nước trà đặc hay thuốc kháng acid dạ dày. Giải thích cơ chế sinh lý hấp thu sắt ở ruột non cho lời khuyên này:",
        source: "Vận dụng S2 - Tối ưu hóa hấp thu Sắt tại tá tràng",
        options: [
          "Niêm mạc tá tràng chỉ hấp thu sắt hiệu quả ở dạng sắt hóa trị 2 (Fe2+ qua kênh DMT1); Acid HCl dạ dày và Vitamin C giúp khử Fe3+ thành Fe2+ hòa tan dễ hấp thu, trong khi tanin trong trà đặc và pH kiềm của thuốc kháng acid kết tủa sắt làm giảm hấp thu",
          "Vitamin C phá hủy toàn bộ muối mật giúp sắt đi vào bạch huyết",
          "Sắt chỉ được hấp thu ở dạng Fe3+ nhờ enzyme Trypsin",
          "Trà đặc làm tăng co bóp túi mật đẩy hết sắt xuống phân"
        ],
        answer: 0,
        explain: "Sắt trong thức ăn thực vật chủ yếu ở dạng Fe3+ khó hấp thu. Acid HCl dạ dày và Vitamin C (chất khử) chuyển Fe3+ thành dạng Fe2+ tan được để kênh DMT1 ở tá tràng vận chuyển vào tế bào ruột. Tanin, phytate và thuốc kháng acid giữ sắt ở dạng không tan làm giảm hấp thu mạnh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết cơ chế vàng da tắc mật & nguy cơ chảy máu)",
        q: "Khi khám một bệnh nhân vàng da niêm đậm, nước tiểu sẫm màu như nước trà đặc và đi tiêu phân bạc màu trắng như đất sét, bác sĩ cần NHẬN BIẾT ngay chuỗi rối loạn sinh lý nào đang xảy ra để đánh giá toàn diện trước can thiệp?",
        source: "Thái độ A1: Nhận biết hệ quả toàn thân của tắc mật",
        options: [
          "Tắc đường dẫn mật làm ứ trệ Bilirubin liên hợp trào vào máu (vàng da, tiểu sẫm do bilirubin tan được lọc qua thận) và không có sắc tố mật xuống ruột (phân bạc màu); đồng thời không có muối mật xuống tá tràng nên KHÔNG hấp thu được Vitamin K → cần kiểm tra ngay TQ (PT) để phát hiện nguy cơ rối loạn đông máu!",
          "Do gan ngừng sản xuất hoàn toàn Hemoglobin",
          "Do ruột non tăng tiết quá mức muối mật xuống phân",
          "Bệnh nhân chỉ bị vàng da lành tính do ăn nhiều cà rốt không cần xét nghiệm đông máu"
        ],
        answer: 0,
        explain: "Nhận biết mối liên hệ giữa vàng da tắc mật – thiếu muối mật – giảm hấp thu Vitamin K – giảm các yếu tố II, VII, IX, X là tư duy an toàn sống còn trước khi sinh thiết hay phẫu thuật giải áp đường mật cho bệnh nhân tắc mật."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Chủ động hướng dẫn bù Oresol đúng tỷ lệ tại cộng đồng)",
        q: "Nhiều phụ huynh tự ý pha gói Oresol với 'một chút nước cho dễ uống' (quá đặc) hoặc hòa lẫn vào sữa cho trẻ tiêu chảy uống. Nhân viên y tế kiên nhẫn hướng dẫn đúng lượng nước theo bao bì và giải thích tác hại thẩm thấu nếu pha đặc quá mức. Thái độ này thể hiện:",
        source: "Thái độ A3: Nội tâm hóa chuẩn mực truyền thông an toàn Oresol",
        options: [
          "Nội tâm hóa (A3): Hiểu rõ pha Oresol quá đặc tạo dung dịch ưu trương trong lòng ruột gây TĂNG Na+ máu, kéo ngược nước từ tế bào não/máu vào ruột làm trẻ nặng hơn và co giật, từ đó tận tâm hướng dẫn gia đình pha đúng tỷ lệ chuẩn",
          "Chỉ nhắc qua loa cho xong trách nhiệm",
          "Cho phép pha đặc gấp 3 lần để tiết kiệm nước",
          "Khuyên ngưng uống nước hoàn toàn khi tiêu chảy"
        ],
        answer: 0,
        explain: "Oresol chỉ phát huy tác dụng nhờ nồng độ đẳng/hơi nhược trương chuẩn (~245 mOsm/L) tối ưu cho kênh SGLT1. Pha đặc quá mức biến dung dịch thành ưu trương kéo nước vào ruột và gây tăng Na+ máu nặng tổn thương não ở trẻ nhỏ."
      }
    ]
  },

  // BÀI 13: KHÁI QUÁT VỀ HOẠT ĐỘNG CỦA HỆ NỘI TIẾT
  // Cũ (12): L1=4 (q2, q3, q4, q11), L2=6 (q0, q1, q6, q7, q8, q10), L3=2 (q5, q9)
  // Thêm mới: 2 L1, 3 L2, 7 L3 -> 6 L1, 9 L2, 9 L3 = 24
  13: {
    baseTags: [
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hormon tan trong lipid)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Catecholamine vs T3/T4)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Tiền chất Cholesterol)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Thụ thể Tyrosine kinase)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhóm hormon IP3/DAG)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Đứt cuống tuyến yên)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Yên sau & Vùng hạ đồi)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Prolactin vs Oxytocin)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vai trò IGF-1 của GH)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Bệnh to đầu chi)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tuyến ngoài trục yên)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhịp ngày đêm ACTH/Cortisol)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại phân vùng vỏ thượng thận)",
        q: "Từ ngoài vào trong, ba lớp của vỏ thượng thận bài tiết những hormon chính nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 29, tr.384",
        options: [
          "Lớp cầu tiết Mineralocorticoid (Aldosterone); Lớp bó tiết Glucocorticoid (Cortisol); Lớp lưới tiết Androgen (DHEA)",
          "Lớp cầu tiết Cortisol; Lớp bó tiết Adrenaline; Lớp lưới tiết Aldosterone",
          "Lớp cầu tiết Epinephrine; Lớp bó tiết Norepinephrine; Lớp lưới tiết Dopamine",
          "Lớp cầu tiết PTH; Lớp bó tiết Insulin; Lớp lưới tiết T4"
        ],
        answer: 0,
        explain: "Mẹo nhớ từ ngoài vào trong (GFR - Salt, Sugar, Sex): Lớp Cầu (Glomerulosa → Aldosterone điều hòa muối); Lớp Bó (Fasciculata → Cortisol điều hòa đường & chống stress); Lớp Lưới (Reticularis → Androgen sinh dục). Còn Tủy thượng thận tiết Catecholamine."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại hệ mạch cửa & nguồn gốc tuyến yên)",
        q: "Vùng hạ đồi điều khiển hoạt động của Thùy trước tuyến yên (Yên tuyến) và Thùy sau tuyến yên (Yên thần kinh) lần lượt thông qua con đường nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.349 & 363",
        options: [
          "Thùy trước qua Hệ mạch cửa dài Hạ đồi - Yên (dẫn truyền hormon giải phóng/ức chế); Thùy sau qua Bó sợi trục thần kinh Hạ đồi - Yên",
          "Thùy trước qua sợi trục thần kinh trực tiếp; Thùy sau qua hệ mạch cửa dài",
          "Cả hai thùy đều hoàn toàn chỉ nối bằng mạch bạch huyết",
          "Thùy trước do dây thần kinh X chi phối; Thùy sau do tủy ngực T1–T5 chi phối"
        ],
        answer: 0,
        explain: "Thùy trước tuyến yên có nguồn gốc biểu mô túi Rathke, nối với lồi giữa vùng hạ đồi qua hệ thống tĩnh mạch cửa (hệ mạch cửa dài Hạ đồi-Yên). Thùy sau tuyến yên là phần kéo dài của mô thần kinh vùng hạ đồi nên nối trực tiếp bằng các sợi trục thần kinh."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh Điều hòa ngược Âm tính vs Dương tính)",
        q: "Trong hệ nội tiết, cơ chế điều hòa ngược DƯƠNG TÍNH (Positive feedback - hormon đáp ứng càng làm tăng kích thích bài tiết nhiều hơn cho đến khi hoàn tất sự kiện) điển hình nhất xảy ra trong hai quá trình sinh lý nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26 & 27, tr.344 & 365",
        options: [
          "(1) Đỉnh Estrogen cuối pha nang noãn kích thích vùng hạ đồi-yên phóng thích đỉnh LH gây rụng trứng; và (2) Oxytocin gây co tử cung + đầu thai nhi chèn cổ tử cung kích thích tiết thêm Oxytocin lúc chuyển dạ (phản xạ Ferguson)",
          "T3, T4 tăng cao ức chế tuyến yên ngừng tiết TSH",
          "Đường huyết tăng kích thích tiết Insulin để hạ đường huyết về bình thường",
          "Cortisol tăng cao ức chế CRH và ACTH"
        ],
        answer: 0,
        explain: "Hầu hết các trục nội tiết dùng điều hòa ngược ÂM TÍNH để giữ ổn định nội môi. Hai ví dụ kinh điển hiếm hoi của điều hòa ngược DƯƠNG TÍNH là: (1) Đỉnh cao Estrogen kéo dài > 36h kích hoạt đỉnh LH phóng noãn; (2) Phản xạ Ferguson của Oxytocin trong chuyển dạ đẻ và khi đông máu (Thrombin)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Điều hòa tăng vs Điều hòa giảm thụ thể)",
        q: "Hiện tượng 'Điều hòa giảm thụ thể' (Down-regulation - giảm số lượng thụ thể đặc hiệu trên màng tế bào đích) thường xảy ra trong hoàn cảnh nào và có ý nghĩa lâm sàng gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 26, tr.342",
        options: [
          "Xảy ra khi tế bào đích tiếp xúc kéo dài với nồng độ hormon QUÁ CAO (như tăng Insulin mạn tính ở người béo phì gây giảm thụ thể Insulin → đề kháng Insulin; hoặc dùng đồng vận GnRH liên tục liều cao làm giảm thụ thể GnRH → ức chế FSH/LH)",
          "Xảy ra khi cắt đứt dây thần kinh giao cảm làm tăng thụ thể α1",
          "Là cơ chế làm tế bào đích nhạy cảm gấp 100 lần với hormon đang tăng cao",
          "Chỉ xảy ra với hormon Vitamin D"
        ],
        answer: 0,
        explain: "Khi nồng độ hormon hoặc chất chủ vận tăng cao liên tục trong thời gian dài, tế bào đích tự bảo vệ bằng cách nhập bào và giảm tổng hợp bớt thụ thể (down-regulation) → làm giảm đáp ứng mô đích (cơ chế đề kháng insulin, hiện tượng quen thuốc chủ vận β2 nếu xịt quá dày, và cơ sở dùng đồng vận GnRH tác dụng kéo dài để ức chế dậy thì sớm/ung thư tiền liệt tuyến)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Tác dụng chuyển hóa của GH vs Insulin)",
        q: "Tại sao người bệnh có khối u thùy trước tuyến yên tăng tiết quá mức Hormon tăng trưởng (GH) lại rất dễ mắc kèm bệnh Đái tháo đường thứ phát ('Đái tháo đường do tuyến yên')?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 27, tr.355",
        options: [
          "Vì GH là hormon đối kháng Insulin mạnh: làm giảm thu nhận glucose ở mô ngoại biên (kháng Insulin), tăng phân giải mỡ giải phóng acid béo tự do và tăng sản xuất glucose tại gan → gây tăng đường huyết kéo dài làm kiệt sức tế bào Beta",
          "Vì GH phá hủy trực tiếp các tế bào Alpha đảo tụy",
          "Vì GH gắn vào thụ thể GLUT4 để chặn toàn bộ đường vào não",
          "Vì GH làm tăng bài xuất Glucose ở cầu thận"
        ],
        answer: 0,
        explain: "GH vừa tăng đồng hóa protein phát triển cơ xương nhưng về chuyển hóa đường-mỡ lại có tác dụng GÂY ĐÁI THÁO ĐƯỜNG (Diabetogenic): giảm nhạy cảm Insulin ở cơ/mỡ, kích thích ly giải mỡ và tăng tân tạo glucose tại gan."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Phân tích ảnh hưởng của Nồng độ Protein vận chuyển TBG/CBG lên Dạng tự do)",
        q: "[Kỹ năng Biện luận Nội tiết] Phụ nữ mang thai (hoặc dùng thuốc tránh thai chứa Estrogen) có nồng độ Estrogen tăng cao kích thích gan sản xuất gấp đôi các protein vận chuyển hormon (như TBG, CBG). Khi đó, xét nghiệm hormon tuyến giáp toàn phần (Total T4) và hormon tự do (Free T4 - fT4) ở thai phụ bình giáp sẽ thay đổi như thế nào?",
        source: "Kỹ năng S1: Phân biệt Hormon Toàn phần vs Dạng Tự do (có hoạt tính)",
        options: [
          "Nồng độ T4 toàn phần (Total T4) TĂNG CAO nhưng nồng độ T4 tự do (fT4) và TSH vẫn BÌNH THƯỜNG (thai phụ hoàn toàn không bị cường giáp, vì chỉ dạng tự do mới có hoạt tính sinh học và điều hòa ngược lên tuyến yên!)",
          "Cả Total T4 và fT4 đều giảm xuống gần bằng 0",
          "fT4 tăng gấp 3 lần gây cường giáp nặng ở mọi phụ nữ mang thai",
          "TSH tăng vọt lên trên 100 mIU/L"
        ],
        answer: 0,
        explain: "Đây là bẫy biện luận lâm sàng cực kỳ hay gặp: Protein vận chuyển tăng sẽ gắn giữ thêm nhiều T4 làm Total T4 tăng giả tạo, nhưng trục Hạ đồi-Yên-Giáp vẫn duy trì nồng độ fT4 (dạng tự do duy nhất có hoạt tính sinh học!) ở mức bình thường. Vì vậy trên lâm sàng luôn định lượng fT4, fT3 chứ không chỉ dựa vào Total T4!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân biệt Hội chứng Cushing phụ thuộc ACTH vs Không phụ thuộc ACTH)",
        q: "Hai bệnh nhân đều có kiểu hình Hội chứng Cushing (mặt tròn như mặt trăng, béo trung tâm, da mỏng rạn tím, tăng huyết áp, đường huyết cao). Bệnh nhân X có nồng độ ACTH tăng rất cao; Bệnh nhân Y có nồng độ ACTH bị ức chế gần bằng 0. Nguyên nhân sinh lý bệnh của X và Y lần lượt có khả năng cao nhất là:",
        source: "Vận dụng S2 - Trục Hạ đồi - Yên - Thượng thận",
        options: [
          "Bệnh nhân X: Tăng tiết ACTH từ khối u tuyến yên (Bệnh Cushing) hoặc tiết ACTH lạc chỗ; Bệnh nhân Y: U vỏ thượng thận tự động tiết Cortisol hoặc lạm dụng uống thuốc Corticoid ngoại sinh kéo dài (gây ức chế ngược làm giảm ACTH và teo vỏ thượng thận lành)",
          "Bệnh nhân X: U vỏ thượng thận; Bệnh nhân Y: U tuyến yên tiết ACTH",
          "Cả hai bệnh nhân đều bị suy vỏ thượng thận nguyên phát (bệnh Addison)",
          "Bệnh nhân Y bị thiếu hoàn toàn Cortisol trong máu"
        ],
        answer: 0,
        explain: "Dựa vào nguyên lý điều hòa ngược âm tính: Nếu nguyên nhân nằm tại tuyến đích (u vỏ thượng thận tự tiết Cortisol) hoặc do uống Corticoid ngoại sinh → Cortisol cao ức chế tuyến yên làm ACTH giảm bằng 0! Ngược lại nếu nguyên nhân nằm tại tuyến yên (u tuyến yên tiết ACTH) → ACTH tăng cao thúc đẩy lớp bó vỏ thượng thận tiết nhiều Cortisol."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận U tuyến yên tiết Prolactin ở nữ trẻ vô kinh, tiết sữa)",
        q: "Một phụ nữ 26 tuổi chưa từng mang thai đến khám vì mất kinh 6 tháng và tự nhiên có sữa chảy ra ở hai đầu vú (hội chứng vô kinh - tiết sữa). Xét nghiệm thấy nồng độ Prolactin máu tăng rất cao (180 ng/mL, bình thường < 25). Cơ chế gây mất kinh ở bệnh nhân này là gì?",
        source: "Vận dụng S2 - U tiết Prolactin & Trục GnRH",
        options: [
          "Prolactin tăng cao kéo dài ức chế vùng hạ đồi phóng thích xung GnRH → làm giảm FSH và LH tuyến yên → buồng trứng không phát triển nang noãn, không phóng noãn nên mất kinh",
          "Prolactin trực tiếp phá hủy hoàn toàn tử cung",
          "Prolactin kích thích buồng trứng tiết quá nhiều Testosterone",
          "Prolactin làm tăng vọt nồng độ LH và FSH"
        ],
        answer: 0,
        explain: "Prolactin tăng cao (sinh lý khi cho con bú hoặc bệnh lý do u tuyến yên Prolactinoma hay dùng thuốc ức chế Dopamine như Metoclopramide/thuốc an thần) sẽ ức chế neuron vùng hạ đồi tiết GnRH → làm ngừng chu kỳ buồng trứng dẫn đến vô kinh và giảm ham muốn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Giải thích chỉ định Oxytocin tiêm sau khi sổ thai vs Chống chỉ định khi chưa đủ điều kiện)",
        q: "Ngay sau khi em bé sổ ra và sổ nhau thai, bác sĩ sản khoa thường tiêm ngay một ống Oxytocin (tiêm bắp hoặc truyền tĩnh mạch) cho sản phụ nhằm mục đích sinh lý gì?",
        source: "Vận dụng S2 - Tác dụng cầm máu sau sinh của Oxytocin",
        options: [
          "Kích thích cơ trơn tử cung co chặt lại thành khối cầu an toàn, bóp nghẹt các mạch máu xoắn ở vị trí bánh nhau vừa bong để phòng ngừa BĂNG HUYẾT SAU SINH (đồng thời hỗ trợ tống xuất sữa)",
          "Làm giãn mềm hoàn toàn cơ trơn tử cung",
          "Kích thích buồng trứng rụng trứng ngay sau sinh",
          "Ức chế hoàn toàn sự bài tiết Prolactin"
        ],
        answer: 0,
        explain: "Các lớp sợi cơ trơn đan chéo của tử cung hoạt động như những 'nút thắt sinh học' kẹp chặt các mạch máu nơi bánh nhau bong. Oxytocin làm co bóp mạnh cơ trơn tử cung (qua thụ thể GPCR-IP3/Ca2+) giúp co hồi tử cung nhanh, cầm máu hiệu quả chống băng huyết sau sinh."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm phân biệt 3 nguyên nhân chậm lớn ở trẻ em: Suy giáp vs Lùn tuyến yên vs Suy dinh dưỡng)",
        q: "[Trạm Lâm sàng Nhi - Nội tiết] Tại phòng khám nhi, bác sĩ tiếp nhận hai trẻ 10 tuổi có chiều cao tương đương trẻ 5 tuổi. Trẻ A có tỷ lệ thân hình cân đối, khuôn mặt trẻ con, trí tuệ học tập xuất sắc hoàn toàn bình thường; Trẻ B có thân hình lùn mất cân đối (lưng dài chân ngắn), lưỡi dày, da khô phù và chậm phát triển trí tuệ nặng. Hướng chẩn đoán sinh lý phù hợp nhất là:",
        source: "Kỹ năng S3: Phân biệt Lùn tuyến yên (thiếu GH) vs Bệnh Đần độn (thiếu T3/T4)",
        options: [
          "Trẻ A: Suy giảm Hormon tăng trưởng đơn độc (Lùn tuyến yên – trí tuệ bình thường, cân đối); Trẻ B: Suy giáp bẩm sinh không điều trị sớm (Bệnh đần độn / Cretinism – lùn mất cân đối + chậm trí tuệ)",
          "Trẻ A: Đần độn do thiếu Iod; Trẻ B: Lùn tuyến yên do thiếu GH",
          "Cả hai trẻ đều bị bệnh to đầu chi (Acromegaly)",
          "Cả hai trẻ đều do thừa quá nhiều Aldosterone"
        ],
        answer: 0,
        explain: "Đây là kỹ năng chạy trạm phân biệt kinh điển: Thiếu GH đơn độc (lùn tuyến yên) KHÔNG gây chậm phát triển trí tuệ và trẻ giữ tỷ lệ cơ thể cân đối; trái lại thiếu T3/T4 bẩm sinh (Cretinism) làm rối loạn phát triển và myelin hóa não bộ gây thiểu năng trí tuệ không hồi phục kèm lùn mất cân đối."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết tác hại ngưng Corticoid đột ngột gây Suy thượng thận cấp)",
        q: "Một bệnh nhân tự ý uống thuốc giảm đau khớp có pha Corticoid kéo dài 2 năm khiến trục Hạ đồi – Yên bị ức chế và vỏ thượng thận bị teo. Nếu bệnh nhân đột ngột ngưng thuốc hoàn toàn (hoặc bị nhiễm trùng nặng mà không được tăng liều), biến chứng nguy hiểm nào nhân viên y tế phải NHẬN BIẾT ngay?",
        source: "Thái độ A1: Nhận biết Suy thượng thận cấp do ngưng Corticoid đột ngột",
        options: [
          "Cơn SUY THƯỢNG THẬN CẤP (tụt huyết áp nặng kháng vận mạch, hạ đường huyết, nôn ói, rối loạn điện giải, trụy mạch tử vong) do vỏ thượng thận bị teo không kịp tự sản xuất Cortisol 'hormon sinh mạng chống stress' bù đắp!",
          "Bệnh nhân lập tức khỏe mạnh hoàn toàn ngay ngày hôm sau",
          "Vỏ thượng thận tự tăng tiết Cortisol gấp 50 lần ngay lập tức",
          "Bệnh nhân bị hội chứng to đầu chi cấp tính"
        ],
        answer: 0,
        explain: "Cortisol được gọi là 'hormon chống stress / hormon sinh mạng' (giúp duy trì nhạy cảm mạch máu với catecholamine giữ huyết áp và duy trì đường huyết). Dùng corticoid ngoại sinh lâu ngày làm teo lớp bó vỏ thượng thận; ngưng đột ngột gây suy thượng thận cấp trụy mạch cực kỳ nguy hiểm. Bắt buộc phải giảm liều từ từ!"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thái độ cảnh báo cộng đồng về thuốc 'gia truyền' trộn Corticoid)",
        q: "Bác sĩ khám thấy nhiều bệnh nhân ở nông thôn có mặt tròn, da mỏng dễ bầm tím, loãng xương nặng do mua thuốc bột 'đông y gia truyền trị bách bệnh' không nhãn mác trộn Corticoid. Ngoài việc điều trị giảm liều an toàn cho từng ca, bác sĩ chủ động viết bài giải thích rõ cơ chế hại của Corticoid lạm dụng lên trục nội tiết để cảnh báo người dân. Điều này thể hiện:",
        source: "Thái độ A3: Nội tâm hóa đạo đức nghề nghiệp bảo vệ cộng đồng",
        options: [
          "Nội tâm hóa (A3): Biến hiểu biết về điều hòa ngược âm tính trục Hạ đồi-Yên-Thượng thận thành hành động trách nhiệm xã hội bảo vệ sức khỏe người dân trước thực trạng lạm dụng thuốc",
          "Tự ý can thiệp không liên quan đến chuyên môn sinh lý",
          "Chỉ làm để bệnh nhân sợ hãi không dám khám bệnh",
          "Vì thuốc trộn Corticoid chỉ ảnh hưởng đến hồng cầu"
        ],
        answer: 0,
        explain: "Hiểu cơ chế điều hòa ngược âm tính và tác dụng phụ toàn thân của Corticoid để chủ động truyền thông bảo vệ bệnh nhân khỏi thuốc pha trộn không rõ nguồn gốc là biểu hiện cao nhất của thái độ chuyên nghiệp nội tâm hóa."
      }
    ]
  },

  // BÀI 14: SINH LÝ TUYẾN GIÁP
  // Cũ (12): L1=2 (q0, q1), L2=6 (q2, q4, q5, q9, q10, q11), L3=4 (q3, q6, q7, q8)
  // Thêm mới: 4 L1, 3 L2, 5 L3 -> 6 L1, 9 L2, 9 L3 = 24
  14: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Cơ chế bơm NIS)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Vị trí & men TPO)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh T4 dự trữ vs T3 hoạt tính)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Thí nghiệm PTU)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiệu ứng Wolff-Chaikoff)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (T3 tăng thụ thể β1 tim)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận Graves)" },
      { level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Loại trừ triệu chứng sai)" },
      { level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Nghiệm pháp TRH)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hậu quả thiếu T3/T4 sơ sinh)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế hạ Cholesterol máu)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Kháng thể TSI trong Basedow)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại)",
        q: "Protein chủ yếu chứa các gốc acid amin Tyrosine nằm trong chất keo lòng nang giáp làm khung tổng hợp và dự trữ hormon tuyến giáp (đủ dùng 2 – 3 tháng) là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.368–371",
        options: [
          "Thyroglobulin (Tg, chứa khoảng 70 gốc Tyrosine trong mỗi phân tử)",
          "Thyroxine-binding globulin (TBG)",
          "Transferrin",
          "Albumin huyết tương"
        ],
        answer: 0,
        explain: "Cần phân biệt hai tên dễ nhầm: THYROGLOBULIN (Tg) là glycoprotein do tế bào nang giáp tiết vào lòng nang để làm khung tổng hợp và dự trữ T3, T4 (đủ dùng 2–3 tháng); còn TBG (Thyroxine-binding globulin) là protein do gan tiết vào máu để vận chuyển T3, T4 trong tuần hoàn."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại kênh màng đỉnh)",
        q: "Sau khi ion Iodua (I-) được bơm vào tế bào nang giáp qua bơm NIS ở màng đáy, I- được vận chuyển qua màng đỉnh để vào trong lòng nang giáp nhờ kênh protein nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.369",
        options: [
          "Kênh Pendrin (kênh trao đổi Cl-/I- ở màng đỉnh)",
          "Kênh GLUT4",
          "Bơm Na+/K+-ATPase",
          "Kênh Aquaporin-2"
        ],
        answer: 0,
        explain: "Ở màng đáy là bơm NIS (Na+/I- symporter); còn ở màng đỉnh của tế bào nang giáp là kênh Pendrin (nếu đột biến gen Pendrin sẽ gây Hội chứng Pendred với bướu giáp và điếc bẩm sinh)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại tế bào C cận nang)",
        q: "Ngoài tế bào biểu mô nang giáp tiết T3 và T4, tuyến giáp còn có các tế bào C (tế bào cận nang) bài tiết hormon nào và có tác dụng gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28 & 29",
        options: [
          "Calcitonin (bản chất peptid), có tác dụng làm HẠ nồng độ Ca2+ máu (ức chế hủy cốt bào, giảm tiêu xương)",
          "Hormon cận giáp (PTH), có tác dụng làm tăng Ca2+ máu",
          "Cortisol, có tác dụng tăng đường huyết",
          "Renin, có tác dụng nâng huyết áp"
        ],
        answer: 0,
        explain: "Tế bào C (parafollicular cells) nằm xen giữa các nang giáp bài tiết Calcitonin khi Ca2+ máu tăng cao, giúp hạ Ca2+ máu nhẹ bằng cách ức chế hoạt động của hủy cốt bào (osteoclasts)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại xét nghiệm nhạy nhất)",
        q: "Để tầm soát và phát hiện sớm nhất các rối loạn chức năng tuyến giáp (kể cả cường giáp hay suy giáp dưới lâm sàng), xét nghiệm ĐƠN LẺ nào được coi là nhạy nhất?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.381",
        options: [
          "Định lượng nồng độ TSH huyết thanh (siêu nhạy)",
          "Định lượng Iod niệu 24 giờ",
          "Đo nồng độ Cholesterol toàn phần",
          "Đo nồng độ Thyroglobulin trong nước tiểu"
        ],
        answer: 0,
        explain: "Nhờ mối liên hệ log-tuyến tính rất nhạy giữa fT4 và TSH tại thùy trước tuyến yên (chỉ cần fT4 thay đổi rất nhỏ đã làm TSH thay đổi gấp nhiều lần theo chiều ngược lại), định lượng TSH là test sàng lọc đầu tay nhạy nhất."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Hiệu ứng Wolff-Chaikoff vs Jod-Basedow)",
        q: "Điểm khác biệt căn bản giữa Hiệu ứng Wolff-Chaikoff và Hiệu ứng Jod-Basedow khi đưa một lượng lớn Iod vào cơ thể là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.377",
        options: [
          "Wolff-Chaikoff xảy ra ở tuyến giáp bình thường/cường giáp lan tỏa: thừa Iod cấp ức chế NIS và TPO gây GIẢM tổng hợp T3/T4 (suy giáp tạm thời); còn Jod-Basedow xảy ra trên bệnh nhân có sẵn bướu giáp nhân tự chủ/thiếu iod lâu ngày khiến thừa Iod làm bùng phát CƯỜNG GIÁP",
          "Wolff-Chaikoff gây cường giáp kịch phát còn Jod-Basedow gây suy giáp",
          "Cả hai đều phá hủy hoàn toàn tuyến yên",
          "Cả hai chỉ xảy ra khi bệnh nhân uống thuốc Methimazole"
        ],
        answer: 0,
        explain: "Hiểu rõ 2 hiệu ứng nghịch lý của Iod: Wolff-Chaikoff là phanh bảo vệ ức chế tổng hợp hormon khi thừa iod (ứng dụng uống Lugol trước mổ Basedow); nhưng ở người thiếu iod lâu ngày đã hình thành các nhân giáp tự chủ không còn chịu kiểm soát của TSH, khi nạp đột ngột nhiều iod (thuốc cản quang, amiodarone) các nhân này lấy iod tổng hợp ồ ạt T3/T4 gây cường giáp Jod-Basedow."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích cơ chế tăng thân nhiệt & chuyển hóa cơ bản)",
        q: "Hormon tuyến giáp (T3, T4) làm tăng mạnh tỷ lệ chuyển hóa cơ bản (BMR lên +60% đến +100% khi cường giáp) và sinh nhiệt chủ yếu qua cơ chế phân tử nào ở mô đích?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.373",
        options: [
          "Gắn vào thụ thể nhân kích thích phiên mã làm tăng số lượng và hoạt độ của ty thể cũng như tăng mạnh tổng hợp bơm Na+/K+-ATPase trên màng tế bào (tiêu tốn rất nhiều ATP và sinh nhiệt)",
          "Trực tiếp làm đông vón các phân tử protein huyết tương",
          "Ức chế hoàn toàn chu trình Krebs trong ty thể",
          "Làm co chặt mạch máu da vĩnh viễn không cho tỏa nhiệt"
        ],
        answer: 0,
        explain: "Bơm Na+/K+-ATPase sử dụng phần lớn ATP nghỉ của tế bào. T3 kích thích tổng hợp thêm nhiều bơm Na+/K+-ATPase và tăng mật độ ty thể + protein tách cặp hô hấp (UCP), làm tăng tiêu thụ O2 và sinh nhiệt (nên bệnh nhân cường giáp luôn nóng bức, sợ nóng, vã mồ hôi)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích vai trò Methimazole vs PTU)",
        q: "Tại sao trong điều trị Cơn bão giáp (Thyroid storm - cường giáp kịch phát đe dọa tính mạng), thuốc Propylthiouracil (PTU) thường được ưu tiên hơn Methimazole ở giai đoạn cấp?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 28, tr.378 & Dược lý",
        options: [
          "Vì ngoài tác dụng ức chế enzyme TPO tại tuyến giáp giống Methimazole, PTU còn ức chế được enzyme 5'-deiodinase ở mô ngoại biên nên ngăn chặn nhanh việc chuyển T4 dự trữ lưu hành thành dạng T3 hoạt tính mạnh",
          "Vì PTU kích thích chuyển T4 thành T3 thật nhanh",
          "Vì PTU hoàn toàn không có tác dụng phụ lên gan",
          "Vì Methimazole làm tăng tổng hợp T3, T4"
        ],
        answer: 0,
        explain: "Do tuyến giáp dự trữ lượng T4 cực lớn đủ dùng 2–3 tháng và T4 trong máu (t1/2 = 6 ngày) tiếp tục được 5'-deiodinase chuyển thành T3 hoạt tính mạnh. PTU chặn được CẢ enzyme TPO tại giáp LẪN enzyme 5'-deiodinase tại ngoại biên nên hạ nhanh nồng độ T3 hoạt động trong cơn bão giáp."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Đọc bilan xét nghiệm phân biệt Cường giáp dưới lâm sàng vs Rõ rệt)",
        q: "[Kỹ năng Đọc Bilan Giáp] Một bệnh nhân nữ 45 tuổi đi khám sức khỏe định kỳ không có triệu chứng rõ ràng, kết quả xét nghiệm máu: TSH = 0,08 mIU/L (bình thường 0,4 – 4,5); fT4 = 1,3 ng/dL (bình thường 0,8 – 1,8); fT3 = 3,2 pg/mL (bình thường 2,3 – 4,2). Biện luận kết quả theo Bảng 28.2 Sách YDS 2025 là:",
        source: "Kỹ năng S1: Đọc kết quả xét nghiệm TSH - fT4 - fT3",
        options: [
          "Cường giáp dưới lâm sàng (TSH giảm thấp trong khi fT4 và fT3 vẫn còn ở giới hạn bình thường)",
          "Cường giáp thứ phát tại tuyến yên",
          "Suy giáp nguyên phát tại tuyến giáp",
          "Suy giáp tại vùng hạ đồi"
        ],
        answer: 0,
        explain: "Theo Bảng 28.2 Sách YDS 2025 (tr.381): TSH giảm thấp dưới ngưỡng bình thường (< 0,4 mIU/L) nhưng fT4 và fT3 vẫn còn nằm trong khoảng tham chiếu bình thường là tình trạng Cường giáp dưới lâm sàng (do tuyến yên cực kỳ nhạy cảm với sự tăng nhẹ nhất của hormon giáp)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích rối loạn Lipid & Dấu hiệu tim mạch trong Suy giáp)",
        q: "Một phụ nữ 52 tuổi đến khám vì tăng 7 kg trong 6 tháng, mệt mỏi, hay quên, sợ lạnh, táo bón, nhịp tim chậm 52 lần/phút và xét nghiệm Cholesterol toàn phần tăng rất cao (310 mg/dL). Chẩn đoán sinh lý và giải thích sự tăng Cholesterol máu là:",
        source: "Vận dụng S2 - Lâm sàng Suy giáp",
        options: [
          "Suy giáp (nguyên phát thường do viêm giáp tự miễn Hashimoto); thiếu T3 làm GIẢM số lượng thụ thể LDL trên tế bào gan nên gan giảm thu giữ và đào thải cholesterol ra mật → tăng Cholesterol máu",
          "Cường giáp; thừa T3 làm tăng Cholesterol máu",
          "Bệnh Basedow; cần dùng ngay PTU liều cao",
          "Bệnh đái tháo đường típ 1"
        ],
        answer: 0,
        explain: "Tăng cân, sợ lạnh, nhịp chậm, táo bón, suy giảm trí nhớ kèm tăng Cholesterol máu là hội chứng Suy giáp điển hình. Điều trị bù hormone Levothyroxine (LT4) sẽ giúp khôi phục thụ thể LDL ở gan và hạ Cholesterol máu về bình thường."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Khám lâm sàng Tuyến giáp & Biện luận điều trị Phóng xạ/Phẫu thuật)",
        q: "[Trạm Khám Tuyến giáp] Khi thăm khám cổ một bệnh nhân nghi ngờ Bệnh Graves (Basedow), dấu hiệu thực thể nào tại tuyến giáp phản ánh đặc trưng sinh lý tăng tưới máu cực mạnh do TSH/TSI kích thích kéo dài?",
        source: "Kỹ năng S3: Khám bướu giáp mạch trong Basedow",
        options: [
          "Tuyến giáp to lan tỏa, di động theo nhịp nuốt, sờ thấy rung miu và đặt ống nghe lên thùy giáp nghe thấy ÂM THỔI TÂM THU hoặc âm thổi liên tục (bướu giáp mạch)",
          "Tuyến giáp teo nhỏ hoàn toàn không sờ thấy",
          "Khối u cứng như đá cố định không di động theo nhịp nuốt",
          "Nghe âm thổi rít mạnh ở gân bánh chè"
        ],
        answer: 0,
        explain: "Kháng thể TSI kích thích mạnh chuyển hóa và tăng sinh mạch máu tuyến giáp gấp nhiều lần nên dòng máu chảy xoáy ào ạt qua tuyến giáp gây rung miu khi sờ và âm thổi mạch (thyroid bruit) khi nghe bằng ống nghe."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết tầm quan trọng của Sàng lọc suy giáp sơ sinh lấy máu gót chân)",
        q: "Tại sao trong chương trình sàng lọc sơ sinh quốc gia, trẻ mới sinh từ 48 – 72 giờ tuổi đều được khuyến cáo lấy giọt máu gót chân để đo TSH (và fT4)? Nhân viên y tế cần NHẬN BIẾT ý nghĩa vàng nào của xét nghiệm này?",
        source: "Thái độ A1: Nhận biết tầm quan trọng tầm soát suy giáp bẩm sinh",
        options: [
          "Trẻ suy giáp bẩm sinh lúc mới đẻ thường chưa có triệu chứng lâm sàng rõ ràng (vì còn nhận chút ít hormon từ mẹ trước sinh); phát hiện qua xét nghiệm gót chân để bù Levothyroxine kịp thời TRONG 2–4 TUẦN ĐẦU sẽ cứu não bộ trẻ phát triển trí tuệ bình thường, tránh bệnh đần độn không hồi phục!",
          "Chỉ để xác định nhóm máu ABO của trẻ",
          "Vì trẻ sơ sinh bị suy giáp luôn chết ngay trong phòng sinh nếu không xét nghiệm",
          "Vì có thể chờ đến khi trẻ 10 tuổi mới cần điều trị suy giáp bẩm sinh"
        ],
        answer: 0,
        explain: "Hormon giáp thiết yếu cho myelin hóa và phát triển synap não bộ trong giai đoạn sơ sinh. Cửa sổ vàng điều trị là ngay trong 2–4 tuần đầu sau sinh — nếu đợi đến lúc trẻ lộ mặt đần độn, lưỡi to, lùn mới điều trị thì tổn thương trí tuệ đã vĩnh viễn không hồi phục."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước người bệnh cường giáp dùng thuốc Levothyroxine / Iod sai cách)",
        q: "Một bệnh nhân nữ mang thai 3 tháng đầu được chẩn đoán suy giáp đang uống Levothyroxine (LT4) tự ý ngưng thuốc vì sợ 'uống thuốc tây hại thai nhi'. Thái độ ĐÁP ỨNG tư vấn đúng đắn nhất của bác sĩ là:",
        source: "Thái độ A2: Tư vấn tuân thủ điều trị hormon giáp ở thai phụ",
        options: [
          "Giải thích rõ cho thai phụ hiểu LT4 là hormon sinh lý giống hệt nội sinh cực kỳ an toàn cho thai; trong tam cá nguyệt đầu thai nhi chưa tự tổng hợp được hormon giáp nên phải phụ thuộc hoàn toàn vào T4 của mẹ qua nhau thai để phát triển não bộ, tuyệt đối KHÔNG được tự ý ngưng thuốc!",
          "Đồng ý cho thai phụ ngưng hết thuốc ngay đến khi sinh xong mới uống lại",
          "Chuyển sang cho thai phụ uống thuốc kháng giáp PTU liều cao",
          "Bắt thai phụ nhịn ăn hoàn toàn mọi muối Iod"
        ],
        answer: 0,
        explain: "Tuyến giáp thai nhi chỉ bắt đầu hoạt động từ tuần 12–14 trở đi. Trong 3 tháng đầu, sự hình thành vỏ não thai nhi phụ thuộc hoàn toàn vào hormon giáp từ mẹ; suy giáp mẹ không điều trị làm tăng nguy cơ sảy thai và giảm chỉ số IQ của trẻ. Levothyroxine là hormon thay thế an toàn và thường còn phải tăng liều 25–30% khi có thai."
      }
    ]
  },

  // BÀI 15: SINH LÝ TUYẾN TỤY NỘI TIẾT
  // Cũ (12): L1=4 (q0, q1, q3, q4), L2=7 (q2, q5, q6, q7, q8, q9, q10), L3=1 (q11)
  // Thêm mới: 2 L1, 2 L2, 8 L3 -> 6 L1, 9 L2, 9 L3 = 24
  15: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (4 loại tế bào đảo tụy)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Ý nghĩa Peptid C)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế tiết Insulin Kir6.2)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Mô đích GLUT4)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Não không phụ thuộc Insulin)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Gan đệm đường huyết G-6-Pase)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Glucokinase & Glycogen synthase)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế nhiễm toan ceton DKA)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Điều hòa Glucagon)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bữa ăn giàu đạm ít đường)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế ĐTĐ típ 2)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Vận động đưa GLUT4)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại cấu trúc Insulin)",
        q: "Phân tử Insulin trưởng thành có cấu trúc hóa học gồm bao nhiêu acid amin và các chuỗi polypeptid nối với nhau bằng liên kết nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.400",
        options: [
          "51 acid amin gồm 2 chuỗi (chuỗi A có 21 aa và chuỗi B có 30 aa) nối với nhau bằng 2 cầu nối disulfide (–S–S–)",
          "29 acid amin tạo thành 1 chuỗi đơn giống hệt Glucagon",
          "9 acid amin giống ADH và Oxytocin",
          "Là một hormon steroid tổng hợp từ Cholesterol"
        ],
        answer: 0,
        explain: "Insulin là hormon protein gồm 51 acid amin (chuỗi A 21 aa, chuỗi B 30 aa) nối nhau bởi 2 cầu nối disulfide liên chuỗi. (Glucagon có 29 acid amin mạch thẳng)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại 4 triệu chứng kinh điển ĐTĐ)",
        q: "Bốn triệu chứng lâm sàng kinh điển thường gặp của bệnh Đái tháo đường tăng đường huyết nặng ('Tứ chứng Đái tháo đường') là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.412",
        options: [
          "Ăn nhiều – Uống nhiều – Tiểu nhiều – Gầy nhiều (Sụt cân)",
          "Ăn ít – Vô niệu – Phù toàn thân – Tăng cân nhanh",
          "Sợ lạnh – Táo bón – Nhịp tim chậm – Khàn tiếng",
          "Sợ nóng – Tiêu chảy – Lồi mắt – Bướu cổ"
        ],
        answer: 0,
        explain: "Thiếu tác dụng Insulin làm tế bào thiếu năng lượng và kích thích trung tâm đói (Ăn nhiều), đường huyết vượt ngưỡng 180 mg/dL gây lợi niệu thẩm thấu (Tiểu nhiều), mất nước tăng Posm gây khát (Uống nhiều), tăng dị hóa mỡ và cơ (Gầy nhiều)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiệu ứng Incretin: Uống Glucose vs Tiêm tĩnh mạch Glucose)",
        q: "Nếu đưa cùng một lượng Glucose như nhau vào cơ thể theo đường UỐNG so với đường TIÊM TĨNH MẠCH, lượng Insulin do tế bào Beta tiết ra ở người uống Glucose cao hơn hẳn. Hiện tượng này gọi là gì và do cơ chế nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.406",
        options: [
          "Hiệu ứng Incretin: Glucose tiếp xúc niêm mạc ruột non kích thích tiết các hormon ruột là GLP-1 và GIP đi theo máu đến tế bào Beta đảo tụy kích thích mạnh tiết Insulin đón đầu bữa ăn",
          "Do uống glucose làm tăng áp suất thẩm thấu trong thực quản",
          "Do tiêm tĩnh mạch glucose không vào được tế bào Beta",
          "Do Glucagon ức chế tuyến tụy khi tiêm tĩnh mạch"
        ],
        answer: 0,
        explain: "Các tế bào nội tiết ruột non tiết ra nhóm hormon Incretin (quan trọng nhất là GLP-1 và GIP) ngay khi có thức ăn xuống ruột. Incretin khuếch đại đáp ứng tiết Insulin phụ thuộc glucose và ức chế Glucagon (là nền tảng cho các thuốc ĐTĐ mới đồng vận thụ thể GLP-1 và ức chế DPP-4)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Giải thích tác dụng của Insulin lên Lipid & LPL vs HSL)",
        q: "Tại mô mỡ, hormon Insulin thúc đẩy tích trữ mỡ và ngăn ngừa nhiễm toan ceton thông qua việc điều hòa trái ngược nhau lên hai enzyme nào sau đây?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 30, tr.404",
        options: [
          "Hoạt hóa enzyme Lipoprotein Lipase (LPL) ở thành mao mạch mô mỡ (để thủy phân Triglyceride từ Chylomicron/VLDL đưa vào tế bào mỡ) VÀ ỨC CHẾ enzyme Hormone-sensitive Lipase (HSL) trong tế bào mỡ",
          "Ức chế enzyme LPL và hoạt hóa mạnh enzyme HSL",
          "Hoạt hóa cả LPL và HSL cùng một lúc",
          "Ức chế hoàn toàn enzyme Glucokinase ở mô mỡ"
        ],
        answer: 0,
        explain: "Insulin là hormon tích lũy năng lượng: Nó bật công tắc LPL ngoài thành mạch mô mỡ để kéo acid béo từ máu vào cất giữ, đồng thời tắt công tắc HSL (enzyme nhạy cảm hormon) bên trong tế bào mỡ để khóa chặt không cho Triglyceride bị phân giải ngược ra máu."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Giải thích cơ chế thuốc Sulfonylurea & Somatostatin)",
        q: "[Kỹ năng Dược lý Đảo tụy] Nhóm thuốc hạ đường huyết Sulfonylurea (như Gliclazide, Glimepiride) điều trị Đái tháo đường típ 2 kích thích tế bào Beta tăng tiết Insulin bằng cách gắn trực tiếp vào vị trí nào?",
        source: "Kỹ năng S1: Vận dụng cơ chế kênh Kir6.2/SUR1 tế bào Beta",
        options: [
          "Gắn vào tiểu đơn vị SUR1 làm ĐÓNG kênh K+ nhạy cảm ATP (Kir6.2) trên màng tế bào Beta → gây khử cực màng → mở kênh Ca2+ → xuất bào Insulin ngay cả khi ATP chưa tăng cao",
          "Gắn vào kênh GLUT4 ở cơ xương",
          "Kích thích trực tiếp tế bào Alpha tăng tiết Glucagon",
          "Ức chế enzyme Glucose-6-phosphatase tại cầu thận"
        ],
        answer: 0,
        explain: "Thuốc Sulfonylurea bắt chước tác dụng của ATP nội bào để đóng kênh K+-ATP (phức hợp SUR1/Kir6.2) trên màng tế bào Beta → gây khử cực mở kênh Ca2+ đẩy Insulin ra ngoài. Vì kích thích tiết insulin độc lập đường huyết nên tác dụng phụ quan trọng cần cảnh giác của nhóm này là HẠ ĐƯỜNG HUYẾT!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận phân biệt Típ 1 vs Típ 2 vs Lạm dụng Insulin ngoại sinh qua Peptid C)",
        q: "Một thanh niên nhập viện cấp cứu vì hôn mê hạ đường huyết nặng (Glucose máu = 28 mg/dL). Xét nghiệm máu lúc đó cho thấy nồng độ Insulin huyết thanh tăng rất cao (85 μU/mL) nhưng nồng độ Peptid C lại GIẢM RẤT THẤP gần bằng 0 (< 0,1 ng/mL). Kết luận chẩn đoán chính xác nhất là:",
        source: "Vận dụng S2 - Biện luận cặp Insulin vs Peptid C",
        options: [
          "Bệnh nhân bị hạ đường huyết do TIÊM QUÁ LIỀU INSULIN NGOẠI SINH (thuốc Insulin không có Peptid C, và Insulin cao ức chế tuyến tụy ngừng tiết Insulin & Peptid C nội sinh)",
          "Bệnh nhân có khối u tế bào Beta đảo tụy (Insulinoma) tự tiết quá nhiều Insulin nội sinh",
          "Bệnh nhân bị Đái tháo đường típ 1 đang thiếu Insulin",
          "Bệnh nhân có khối u tế bào Alpha tăng tiết Glucagon"
        ],
        answer: 0,
        explain: "Nếu có u tụy Insulinoma, tế bào Beta tiết đồng thời Insulin và Peptid C theo tỉ lệ 1:1 nên CẢ Insulin LẪN Peptid C đều phải TĂNG CAO. Còn ở đây Insulin cực cao mà Peptid C gần bằng 0 chứng tỏ Insulin đến từ nguồn tiêm ngoại sinh từ bên ngoài!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích hiện tượng tăng đường huyết lúc đói buổi sáng - Hiện tượng bình minh / Stress)",
        q: "Khi cơ thể bị stress nặng (nhiễm trùng huyết, chấn thương, phẫu thuật lớn) ở một bệnh nhân chưa từng biết đái tháo đường, đường huyết thường tăng cao. Cơ chế sinh lý gây tăng đường huyết phản ứng này là do sự hiệp đồng của nhóm hormon đối kháng Insulin nào?",
        source: "Vận dụng S2 - Phối hợp hormon điều hòa đường huyết khi Stress",
        options: [
          "Tăng tiết đồng loạt Catecholamine (Adrenaline/Noradrenaline qua β2), Cortisol (tăng tân tạo đường & giảm nhạy cảm Insulin), Glucagon và Hormon tăng trưởng (GH)",
          "Tăng tiết quá mức Insulin và Calcitonin",
          "Giảm tiết Glucagon và tăng đưa GLUT4 lên màng cơ",
          "Tăng tiết Somatostatin ức chế hoàn toàn sự tân tạo đường ở gan"
        ],
        answer: 0,
        explain: "Khi stress cấp, cơ thể tiết 4 'hormon đối kháng Insulin' (Counter-regulatory hormones): Glucagon, Adrenaline (kích thích phân giải glycogen gan/cơ và ức chế tiết insulin qua α2), Cortisol (tăng phân giải đạm cơ cung cấp nguyên liệu tân tạo đường ở gan) và GH → nâng đường huyết nuôi não."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích tại sao không uống được Insulin đường uống)",
        q: "Tại sao bệnh nhân Đái tháo đường típ 1 bắt buộc phải TIÊM Insulin (dưới da/tĩnh mạch) mà KHÔNG THỂ uống viên nén Insulin thông thường qua đường tiêu hóa?",
        source: "Vận dụng S2 - Bản chất hóa học & Tiêu hóa Protein",
        options: [
          "Vì Insulin có bản chất là một chuỗi Polypeptid (protein 51 acid amin) nên nếu uống sẽ bị acid dịch vị HCl biến tính và bị các enzyme Pepsin dạ dày, Trypsin/Chymotrypsin dịch tụy phân giải thành acid amin mất hoàn toàn hoạt tính sinh học!",
          "Vì Insulin kích thước nhỏ hơn Glucose nên bị nôn ra hết",
          "Vì Insulin tan trong lipid sẽ dính chặt vào hạt Micelle đi vào bạch huyết",
          "Vì niêm mạc dạ dày phá hủy mọi hormon steroid"
        ],
        answer: 0,
        explain: "Liên hệ giữa Bài 11–12 và Bài 15: Mọi hormon bản chất peptid/protein (Insulin, GH, ACTH, Oxytocin...) khi đi qua dạ dày-ruột đều bị HCl, Pepsin và protease tụy cắt nát như protein thức ăn, nên phải dùng đường tiêm (trừ T3/T4 hay Steroid là những phân tử nhỏ không phải polypeptid mới uống được!)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Xử trí cấp cứu Hạ đường huyết nặng vs Nhiễm toan ceton)",
        q: "[Trạm Cấp cứu Nội tiết] Một bệnh nhân Đái tháo đường típ 1 đột ngột lơ mơ hôn mê, thở nhanh sâu (thở Kussmaul), hơi thở có mùi trái cây chín (mùi táo thối / acetone), da khô mất nước, đường huyết mao mạch đo được là 480 mg/dL, pH máu 7,12. Ba trụ cột xử trí cấp cứu sinh lý đầu tiên là:",
        source: "Kỹ năng S3: Xử trí Nhiễm toan ceton (DKA)",
        options: [
          "1. Truyền dịch đẳng trương NaCl 0,9% bù khối lượng tuần hoàn mất nước; 2. Truyền Insulin tác dụng nhanh đường tĩnh mạch (để ức chế HSL ngừng tạo thể ceton và đưa glucose vào tế bào); 3. Theo dõi sát và BÙ KALI khi K+ bắt đầu giảm (vì Insulin sẽ đẩy K+ vào tế bào!)",
          "Tiêm ngay Glucagon tĩnh mạch và truyền dung dịch Glucose 30%",
          "Không truyền dịch, chỉ cho uống 1 viên thuốc hạ đường huyết nhóm Sulfonylurea",
          "Tiêm Adrenaline liều cao để nâng đường huyết lên 600 mg/dL"
        ],
        answer: 0,
        explain: "Nhiễm toan ceton (DKA) gây lợi niệu thẩm thấu mất nước nặng và thiếu Insulin nặng. Bắt buộc phải: (1) Bù dịch NaCl 0,9% hồi phục tưới máu thận; (2) Truyền Insulin tĩnh mạch liên tục để khóa enzyme HSL ngừng sinh ceton (chú ý hạ đường huyết từ từ); (3) Theo dõi và bù K+ kịp thời vì Insulin và sửa toan sẽ đẩy K+ từ máu vào trong tế bào rất nhanh gây hạ K+ máu đe dọa tính mạng!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích vị trí tiêm Insulin & loạn dưỡng mỡ)",
        q: "Khi hướng dẫn bệnh nhân tự tiêm Insulin dưới da hàng ngày, tại sao điều dưỡng viên luôn dặn bệnh nhân phải luân chuyển vị trí tiêm (vùng bụng, đùi, cánh tay cách nhau 1–2 cm) chứ không tiêm mãi vào đúng một điểm?",
        source: "Vận dụng S2 - Tác dụng tại chỗ của Insulin lên mô mỡ",
        options: [
          "Vì nồng độ Insulin cao tại chỗ kích thích tổng hợp lipid quá mức và ức chế ly giải mỡ tại vùng mô mỡ đó gây phì đại/loạn dưỡng mô mỡ dưới da, làm các mũi tiêm sau vào cục xơ chai này hấp thu Insulin thất thường gây dao động đường huyết",
          "Vì tiêm mãi một chỗ sẽ làm Insulin đi thẳng vào mạch bạch huyết biến thành Chylomicron",
          "Vì vùng bụng không có mô mỡ dưới da",
          "Vì tế bào mỡ không có thụ thể với Insulin"
        ],
        answer: 0,
        explain: "Insulin là hormon đồng hóa lipid cực mạnh ngay tại mô mỡ dưới da nơi tiêm (kích thích tạo triglyceride, ức chế HSL). Tiêm lặp đi lặp lại tại 1 điểm gây u cục phì đại mô mỡ (lipohypertrophy) làm cản trở hấp thu thuốc những lần sau."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết triệu chứng báo động Hạ đường huyết ở não)",
        q: "Một bệnh nhân đái tháo đường đang tiêm Insulin than đột ngột run tay, vã mồ hôi lạnh, tim đập nhanh hồi hộp, đói cồn cào, rồi lú lẫn nói sảng. Nhân viên y tế cần NHẬN BIẾT hai nhóm triệu chứng này có nguồn gốc sinh lý từ đâu để cấp cứu kịp thời trong vài phút?",
        source: "Thái độ A1: Nhận biết sớm hạ đường huyết cấp cứu não",
        options: [
          "Run tay, vã mồ hôi, tim nhanh là triệu chứng cảnh báo sớm do kích thích HỆ GIAO CẢM (tủy thượng thận tiết Adrenaline nâng đường huyết); còn lú lẫn, nói sảng, hôn mê là triệu chứng THIẾU NĂNG LƯỢNG TRỰC TIẾP CỦA NÃO (vì não chỉ dùng Glucose và hoàn toàn không tự dự trữ được glucose!)",
          "Tất cả đều là biểu hiện của tăng đường huyết quá cao",
          "Đây là tác dụng sinh lý bình thường có lợi cho não bộ",
          "Do thừa chất hoạt diện Surfactant ở phổi"
        ],
        answer: 0,
        explain: "Khi đường huyết tụt < 55–70 mg/dL, hạ đồi phát tín hiệu giao cảm (vã mồ hôi, run tay, hồi hộp) để báo động cơ thể ăn ngay; nếu tụt < 45–50 mg/dL, neuron não (vốn dùng GLUT1/3 không cần insulin nhưng cũng không có dự trữ glycogen) bị thiếu năng lượng gây lú lẫn, co giật và chết tế bào não không hồi phục nếu chậm xử trí!"
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Tư vấn lối sống: Vận động thể lực + Tiết chế không dùng thuốc đơn thuần)",
        q: "Một người trẻ mới chẩn đoán tiền đái tháo đường (đề kháng insulin kèm béo bụng) muốn bác sĩ 'chỉ cần cho uống thật nhiều thuốc chứ tôi lười tập thể dục lắm'. Bác sĩ tận tình phân tích cơ chế vận động co cơ tự đưa GLUT4 lên màng cơ xương không cần Insulin giúp giảm đề kháng insulin tận gốc và đồng hành lập kế hoạch vận động. Điều này thể hiện:",
        source: "Thái độ A3: Nội tâm hóa tư vấn dự phòng & thay đổi lối sống",
        options: [
          "Nội tâm hóa (A3): Dùng hiểu biết sâu sắc về sinh lý kênh GLUT4 và đề kháng insulin để thuyết phục người bệnh chủ động thay đổi lối sống kết hợp điều trị toàn diện bền vững",
          "Chiều theo ý muốn sai lầm của bệnh nhân kê thuốc liều cao ngay",
          "Khuyên bệnh nhân bỏ ăn hoàn toàn mọi chất bột đường suốt đời",
          "Từ chối theo dõi sức khỏe cho bệnh nhân"
        ],
        answer: 0,
        explain: "Tập thể dục đều đặn kích thích đưa GLUT4 lên màng cơ xương độc lập với Insulin và giảm mỡ nội tạng làm giảm đề kháng Insulin từ gốc — đây là nền tảng điều trị số 1 mà thuốc men đơn thuần không thay thế hoàn toàn được."
      }
    ]
  },

  // BÀI 16: SINH LÝ TỦY GAI
  // Cũ (12): L1=4 (q0, q1, q3, q5), L2=5 (q2, q4, q6, q10, q11), L3=3 (q7, q8, q9)
  // Thêm mới: 2 L1, 4 L2, 6 L3 -> 6 L1, 9 L2, 9 L3 = 24
  16: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Định luật Bell-Magendie)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Phản xạ gân bánh chè L3-L4)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Động vật tủy vs Bình thường)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Phân biệt phản xạ tủy vs thân não)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Nguồn gốc bó ngoại tháp)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Cung phản xạ 2 neuron)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bó Goll-Burdach)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Hội chứng Brown-Séquard)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Đứt tủy cổ cao C1-C2)" },
      { level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Phân biệt UMN vs LMN)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiện tượng triệt bớt occlusion)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Hiện tượng choáng tủy)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại 5 thành phần cung phản xạ)",
        q: "Một cung phản xạ tủy hoàn chỉnh bắt buộc phải gồm đủ 5 thành phần nào theo đúng trình tự dẫn truyền xung thần kinh?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.580",
        options: [
          "Bộ phận nhận cảm (thụ thể) → Sợi thần kinh hướng tâm (qua rễ sau) → Trung ương thần kinh (chất xám tủy gai) → Sợi thần kinh ly tâm (qua rễ trước) → Cơ quan đáp ứng (cơ/tuyến)",
          "Vỏ não vận động → Bó tháp → Sừng trước → Rễ sau → Thoi cơ",
          "Cơ quan đáp ứng → Rễ trước → Sừng sau → Thụ thể → Não bộ",
          "Chỉ cần 2 thành phần là Thụ thể và Cơ xương"
        ],
        answer: 0,
        explain: "Nếu tổn thương hoặc đứt bất kỳ khâu nào trong 5 thành phần của cung phản xạ (thụ thể, sợi hướng tâm, chất xám trung ương, sợi ly tâm, cơ quan đáp ứng) thì phản xạ đó sẽ mất hoàn toàn."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại định khu phản xạ gân & da)",
        q: "Trong bảng định khu các phản xạ tủy gai trên lâm sàng, các phản xạ gân cơ nhị đầu cánh tay, gân cơ tam đầu cánh tay, gân gót (Achilles) và phản xạ da bìu lần lượt nằm ở đoạn tủy nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.582–585",
        options: [
          "Nhị đầu: C5–C6; Tam đầu: C7–C8; Gân gót: S1–S2; Da bìu: L1–L2",
          "Nhị đầu: L3–L4; Tam đầu: S1–S2; Gân gót: C5–C6; Da bìu: T1–T2",
          "Nhị đầu: C1–C2; Tam đầu: T10–T12; Gân gót: L1–L2; Da bìu: S4–S5",
          "Tất cả đều nằm chung tại đoạn tủy ngực T5 – T8"
        ],
        answer: 0,
        explain: "Bảng định khu kinh điển: Nhị đầu cánh tay C5–C6 (gấp cẳng tay); Tam đầu C7–C8 (duỗi cẳng tay); Bánh chè L3–L4 (duỗi cẳng chân); Gân gót S1–S2 (duỗi/gấp lòng bàn chân); Da bìu L1–L2; Da bụng T7–T12; Da lòng bàn chân (Babinski) L5–S1; Bàng quang S3–S5."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Cơ chế phản xạ gân Golgi ức chế autogenic)",
        q: "Khi cơ co quá mạnh tạo lực căng cực lớn kéo giãn gân có nguy cơ đứt gân/rách cơ, phản xạ gân Golgi bảo vệ cơ theo cơ chế cung phản xạ nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.582",
        options: [
          "Thụ thể Golgi ở gân truyền xung theo sợi hướng tâm Ib qua rễ sau kích thích NEURON TRUNG GIAN ỨC CHẾ (glycine) tại tủy → ức chế neuron vận động α làm GIÃN CƠ đột ngột (cung 3 neuron, 2 synapse)",
          "Thoi cơ truyền xung theo sợi Ia kích thích trực tiếp neuron α làm cơ co mạnh gấp đôi",
          "Cung phản xạ đơn synapse 2 neuron gây co cứng uốn ván",
          "Dây thần kinh X giải phóng Adrenaline làm giãn cơ"
        ],
        answer: 0,
        explain: "Phản xạ gân (thoi cơ) là phản xạ căng cơ giúp duy trì tư thế (2 neuron, 1 synapse gây co cơ). Ngược lại, Phản xạ gân Golgi là phản xạ bảo vệ chống quá tải (3 neuron, 2 synapse): khi lực căng gân quá mức, thụ thể Golgi phát xung theo sợi Ib qua neuron trung gian ức chế làm giãn cơ (hiện tượng lưỡi dao nhíp)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vai trò của Tế bào Renshaw & Ức chế đối lập)",
        q: "Trong chất xám sừng trước tủy gai, tế bào trung gian Renshaw nhận xung từ nhánh bên quặt ngược của sợi trục neuron vận động Alpha (α) có vai trò sinh lý gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.584",
        options: [
          "Tiết chất dẫn truyền ức chế (Glycine) quay ngược lại ức chế chính neuron α vừa phát xung và các neuron α xung quanh (ức chế bên / ức chế quặt ngược), giúp giới hạn xung động chỉ tập trung vào vùng cơ cần thiết và điều hòa cử động tinh tế",
          "Kích thích phản xạ toàn thể làm co giật mọi cơ trên cơ thể",
          "Dẫn truyền cảm giác đau và nhiệt lên vỏ não",
          "Tạo ra bao myelin cho bó tháp"
        ],
        answer: 0,
        explain: "Khi neuron α phát xung đi ra co cơ, nó tách một nhánh bên quặt ngược kích thích tế bào ức chế Renshaw. Tế bào Renshaw làm dịu lại chính neuron đó và các neuron lân cận (ức chế quặt ngược / tương tự ức chế bên) giúp tín hiệu vận động sắc nét không bị lan tràn hỗn loạn."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Neuron vận động Alpha α vs Gamma γ)",
        q: "Trong sừng trước tủy gai, sự khác biệt về đích chi phối và chức năng giữa neuron vận động Alpha (α) và neuron vận động Gamma (γ) là gì?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.580",
        options: [
          "Neuron α chi phối các SỢI CƠ NGOÀI THOI tạo lực co cơ thực sự; Neuron γ chi phối các SỢI CƠ TRONG THOI CƠ (cơ hai đầu thoi cơ) giúp căng nhẹ thoi cơ để giữ độ nhạy liên tục của thoi cơ khi cơ đang co ngắn lại",
          "Neuron α dẫn truyền cảm giác đau; Neuron γ dẫn truyền cảm giác sâu",
          "Neuron α chi phối cơ trơn dạ dày; Neuron γ chi phối cơ tim",
          "Neuron γ tạo lực co cơ mạnh gấp 10 lần neuron α"
        ],
        answer: 0,
        explain: "Nếu chỉ có neuron α làm sợi cơ ngoài thoi co ngắn lại, thoi cơ nằm song song sẽ bị chùng xuống và ngừng phát tín hiệu Ia. Nhờ hiện tượng đồng hoạt hóa α-γ (coactivation), neuron γ đồng thời làm co nhẹ hai đầu sợi cơ trong thoi cơ giữ cho vùng trung tâm thoi cơ luôn căng nhẹ và nhạy cảm với mọi thay đổi chiều dài."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (4 quy luật phản xạ tủy & Tập cộng trong không gian/thời gian)",
        q: "Khi tăng dần cường độ dòng điện kích thích lên một chân sau của con ếch tủy (định luật Pflüger), thứ tự xuất hiện các đáp ứng co cơ phản xạ diễn ra theo 4 quy luật nào?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 42, tr.584",
        options: [
          "Quy luật Một bên → Quy luật Đối xứng → Quy luật Khuếch tán (từ sau ra trước cùng bên) → Quy luật Toàn thể",
          "Quy luật Toàn thể → Quy luật Đối xứng → Quy luật Một bên",
          "Quy luật Khuếch tán → Quy luật Một bên → Quy luật Đối xứng",
          "Chỉ co duy nhất một bên dù tăng cường độ mạnh đến mức nào"
        ],
        answer: 0,
        explain: "Khi cường độ kích thích tăng dần: (1) Một bên (chỉ chân bị kích thích co); (2) Đối xứng (co cả 2 chân sau); (3) Khuếch tán (lan lên chân trước cùng bên — từ sau ra trước); (4) Toàn thể (co toàn bộ tứ chi và thân mình)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Thực hành khám Phản xạ Gân xương bánh chè & Gân gót)",
        q: "[Kỹ năng Khám Phản xạ] Khi khám phản xạ gân xương bánh chè cho một bệnh nhân đang hơi căng thẳng gồng cứng cơ đùi (làm phản xạ khó xuất hiện), kỹ thuật chuẩn bảng kiểm giúp bộc lộ phản xạ rõ hơn là:",
        source: "Kỹ năng S1: Nghiệm pháp Jendrassik trong khám phản xạ gân",
        options: [
          "Cho bệnh nhân thả lỏng chân, thực hiện nghiệm pháp Jendrassik (hai bàn tay móc vào nhau kéo mạnh sang hai bên đồng thời nhìn lên trần/đếm nhẩm) đúng lúc bác sĩ gõ dứt khoát búa phản xạ vào gân dưới xương bánh chè",
          "Yêu cầu bệnh nhân gồng thật cứng cơ tứ đầu đùi hết sức trước khi gõ",
          "Gõ thật mạnh trực tiếp lên xương chày thay vì lên gân bánh chè",
          "Dùng búa gõ liên tục 20 cái vào đầu gối không nghỉ"
        ],
        answer: 0,
        explain: "Khi bệnh nhân chú ý tập trung vào chân sẽ tăng ức chế từ vỏ não làm khó gõ ra phản xạ. Nghiệm pháp Jendrassik (móc kéo hai tay và phân tán chú ý) vừa làm giảm ức chế vỏ não vừa tăng hoạt hóa hệ γ qua bó lưới-gai giúp phản xạ gân bánh chè bộc lộ rất rõ."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận dấu hiệu Romberg dương tính trong tổn thương Cột trắng sau / Tabès)",
        q: "Một bệnh nhân giang mai thần kinh muộn (bệnh Tabès) bị thoái hóa chọn lọc CỘT TRẮNG SAU của tủy gai. Khi khám yêu cầu bệnh nhân đứng chụm hai chân và NHẮM MẮT LẠI, bệnh nhân lập tức loạng choạng ngã về các phía (Dấu hiệu Romberg dương tính). Cơ chế sinh lý giải thích hiện tượng này là:",
        source: "Vận dụng S2 - Bó thon (Goll) và Bó chêm (Burdach)",
        options: [
          "Tổn thương cột trắng sau cắt đứt Bó thon (Goll) và Bó chêm (Burdach) dẫn truyền cảm giác sâu có ý thức (vị thế khớp, bàn chân); lúc mở mắt bệnh nhân dùng Thị giác bù trừ để đứng vững, nhưng khi nhắm mắt mất thị giác thì mất hoàn toàn thông tin vị thế chân gây ngã",
          "Tổn thương bó gai-đồi thị bên làm mất cảm giác nóng lạnh ở hai chân",
          "Tổn thương bó tháp gây liệt cứng hoàn toàn hai chân",
          "Tổn thương dây thần kinh thị giác số II"
        ],
        answer: 0,
        explain: "Thăng bằng đứng dựa vào 3 kênh: Cảm giác bản thể/sâu (bó Goll-Burdach), Tiền đình và Thị giác. Khi hỏng bó Goll-Burdach (cảm giác sâu có ý thức ở cột trắng sau), người bệnh còn đứng được khi mở mắt nhờ nhìn bằng mắt, nhưng nhắm mắt lại là ngã ngay (Romberg +)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích Hội chứng Rỗng ống tủy / Syringomyelia - Mất cảm giác phân ly)",
        q: "Một bệnh nhân bị giãn rộng ống trung tâm chất xám tủy gai ở đoạn cổ dưới – ngực trên (bệnh Rỗng tủy / Syringomyelia), đè ép trực tiếp vào MÉP TRẮNG TRƯỚC nơi các sợi cảm giác bắt chéo qua đường giữa tại tủy cổ. Triệu chứng cảm giác đặc trưng nhất ở hai tay ('mất cảm giác kiểu áo choàng') là gì?",
        source: "Vận dụng S2 - Bắt chéo ngay tại tủy của Bó Gai - Đồi thị",
        options: [
          "Mất cảm giác ĐAU và NHIỆT ĐỘ ở cả hai tay (bỏng thuốc lá/nước sôi mà không biết đau), trong khi CẢM GIÁC SÂU CÓ Ý THỨC và XÚC GIÁC TINH TẾ ở hai tay vẫn còn nguyên vẹn!",
          "Mất cảm giác sâu có ý thức ở hai tay nhưng còn nguyên cảm giác đau và nhiệt",
          "Liệt mềm toàn bộ hai chân ngay lập tức",
          "Mù hoàn toàn cả hai mắt"
        ],
        answer: 0,
        explain: "Các sợi của bó Gai-đồi thị bên (dẫn truyền Đau và Nhiệt) đi vào sừng sau rồi BẮT CHÉO ngay qua mép trắng trước sát ống trung tâm tủy gai → bị tổn thương sớm nhất gây mất cảm giác đau-nhiệt hai tay. Trong khi đó bó Goll-Burdach nằm ở cột trắng sau (không bắt chéo tại tủy) vẫn bình thường nên cảm giác sâu và xúc giác tinh tế còn nguyên (phân ly cảm giác!)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Định khu tổn thương qua Khám Phản xạ Babinski & Trương lực cơ)",
        q: "[Trạm Khám Thần kinh] Bệnh nhân bị yếu liệt hoàn toàn chân phải sau chấn thương cũ 3 tháng. Khám thấy chân phải tăng trương lực cơ co cứng kiểu gấp/duỗi, phản xạ gân xương bánh chè và gân gót phải tăng vọt (+3, có rung giật bàn chân), gãi dọc bờ ngoài lòng bàn chân phải thấy ngón chân cái duỗi chậm lên trên và các ngón khác xòe nan quạt (Dấu Babinski +), chân không teo nhiều. Vị trí tổn thương nằm ở đâu?",
        source: "Kỹ năng S3: Biện luận UMN vs LMN qua bảng kiểm khám thần kinh",
        options: [
          "Tổn thương NEURON VẬN ĐỘNG TRÊN (UMN – tổn thương đường dẫn truyền bó tháp từ vỏ não đến tủy thắt lưng), khiến cung phản xạ tủy dưới thoát khỏi sự ức chế của não bộ",
          "Tổn thương sừng trước tủy gai đoạn L3 – S2 (Neuron vận động dưới LMN)",
          "Tổn thương rễ trước thần kinh thắt lưng phải",
          "Tổn thương đơn thuần gân cơ tứ đầu đùi"
        ],
        answer: 0,
        explain: "Liệt cứng (tăng trương lực cơ), tăng phản xạ gân xương, dấu Babinski (+) và không teo cơ sớm là bộ 4 kinh điển của tổn thương Neuron vận động trên (bó tháp). Nếu tổn thương LMN (sừng trước/rễ trước/dây ngoại biên) phải là liệt mềm, giảm/mất phản xạ gân xương và teo cơ nhanh."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết quy tắc bất động cột sống cổ ở nạn nhân tai nạn giao thông)",
        q: "Khi tiếp cận một nạn nhân bị tai nạn xe máy đang nằm bất động nghi ngờ chấn thương cột sống cổ, người cấp cứu cần NHẬN BIẾT nguy cơ sinh lý chết người nào để không tự ý xốc nách bế xốc nạn nhân lên?",
        source: "Thái độ A1: Nhận biết nguy cơ cắt đứt tủy cổ C3–C5 / C1–C2",
        options: [
          "Nếu xương đốt sống cổ gãy di lệch cắt đứt ngang tủy cổ cao trên C3–C5 (nhân dây thần kinh hoành) sẽ làm LIỆT CƠ HOÀNH và các cơ liên sườn gây NGƯNG THỞ TỬ VONG NGAY LẬP TỨC (và choáng tủy mất trương lực mạch tụt HA nặng); bắt buộc phải cố định thẳng trục đầu-cổ trên ván cứng!",
          "Vì bế xốc lên sẽ làm gãy xương cẳng chân",
          "Vì tủy cổ chứa trung tâm sản xuất hồng cầu duy nhất",
          "Vì bế lên sẽ làm mất phản xạ chớp mắt ở cầu não"
        ],
        answer: 0,
        explain: "Cố định cột sống cổ trên trục thẳng trước khi di chuyển nạn nhân đa chấn thương là nguyên tắc vàng cấp cứu, nhằm bảo vệ tuyệt đối đoạn tủy cổ cao C1–C5 nơi truyền lệnh hô hấp từ hành não xuống cơ hoành."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A2: Đáp ứng (Thái độ trước người bệnh liệt tủy giai đoạn Choáng tủy bị bí tiểu)",
        q: "Một bệnh nhân mới bị chấn thương đứt ngang tủy ngực T8 cách đây 2 ngày (đang trong giai đoạn Choáng tủy). Người nhà thắc mắc tại sao bệnh nhân không hề kêu đau buốt bụng dưới dù cầu bàng quang đang căng to, và hỏi khi nào chân sẽ hết liệt mềm. Bác sĩ cần ĐÁP ỨNG chăm sóc và giải thích như thế nào?",
        source: "Thái độ A2: Chăm sóc & giải thích giai đoạn Choáng tủy",
        options: [
          "Đặt thông tiểu vô khuẩn kịp thời tránh vỡ bàng quang/nhiễm trùng thận (do trung khu phản xạ bàng quang S3–S5 đang bị tắt trong giai đoạn choáng tủy và mất đường cảm giác lên não); giải thích cho gia đình giai đoạn choáng tủy ở người kéo dài 2–3 tuần, sau đó các phản xạ tủy tự động sẽ hồi phục dần (chuyển sang co cứng/tăng phản xạ)",
          "Không cần đặt thông tiểu, đợi 1 tháng cho tự đi tiểu lại",
          "Khẳng định sau 24 giờ bệnh nhân chắc chắn sẽ chạy bộ bình thường trở lại",
          "Cắt bỏ hoàn toàn rễ sau tủy gai để giảm đau"
        ],
        answer: 0,
        explain: "Trong giai đoạn choáng tủy (2–3 tuần ở người), mọi phản xạ tủy kể cả phản xạ tiểu tiện (S3–S5) và đại tiện đều mất kèm mất cảm giác dưới chỗ tổn thương nên người bệnh bị bí tiểu âm thầm mà không thấy đau tức. Chăm sóc đặt thông tiểu, xoay trở chống loét và giải thích trung thực tiên lượng cho gia đình là thái độ đúng mực."
      }
    ]
  },

  // BÀI 17: SINH LÝ HỆ THẦN KINH TỰ CHỦ
  // Cũ (12): L1=3 (q0, q2, q10), L2=6 (q1, q3, q7, q8, q9, q11), L3=3 (q4, q5, q6)
  // Thêm mới: 3 L1, 3 L2, 6 L3 -> 6 L1, 9 L2, 9 L3 = 24
  17: {
    baseTags: [
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Định khu Giao cảm vs Đối giao cảm)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Vị trí hạch & chiều dài sợi)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Các sợi tiết Acetylcholine)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Đối giao cảm điều tiết mắt)" },
      { level: 3, ksa: "K", ksaLabel: "K3: Vận dụng (Hủy giao cảm tim mạch)" },
      { level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Propranolol gây cơn hen)" },
      { level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Tăng nhạy cảm cắt hạch sao)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Thụ thể β1 trên tim)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Bản chất tủy thượng thận)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Quy luật tạng rỗng đối giao cảm)" },
      { level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Hạch tạng nhận T5-T10)" },
      { level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ái lực nhánh bên α vs β)" }
    ],
    extra: [
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại trung khu cao cấp & dây X)",
        q: "Trung khu cao cấp quan trọng nhất điều khiển phối hợp toàn bộ hệ thần kinh tự chủ nằm ở vùng nào của não bộ, và trong các dây sọ đối giao cảm thì dây thần kinh nào chiếm tới 75 – 80% tổng số sợi đối giao cảm của cơ thể?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.655 & 664",
        options: [
          "Trung khu cao cấp nằm ở Vùng hạ đồi (Hypothalamus); Dây thần kinh lang thang (Dây X) chiếm 75–80% tổng số sợi đối giao cảm",
          "Trung khu cao cấp nằm ở Tiểu não; Dây thần kinh III chiếm 80% sợi đối giao cảm",
          "Trung khu cao cấp nằm ở Hồi trán lên; Dây thần kinh VII chiếm 80% sợi",
          "Trung khu cao cấp nằm ở Tủy cùng S2–S4; Dây thần kinh IX chiếm 80% sợi"
        ],
        answer: 0,
        explain: "Vùng hạ đồi là trung khu tích hợp cao cấp của hệ TKTC (kích thích vùng hạ đồi sau-bên gây đáp ứng giao cảm; vùng hạ đồi trước gây đáp ứng đối giao cảm). Dây X chi phối toàn bộ tim, phổi, thực quản, dạ dày, ruột non, gan, mật, tụy và nửa đầu đại tràng nên chiếm 75–80% sợi đối giao cảm toàn thân."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại hai enzyme thoái giáng NE & ACh)",
        q: "Hai enzyme chính chịu trách nhiệm bất hoạt Acetylcholine tại khe synapse và bất hoạt Norepinephrine/Epinephrine trong cơ thể lần lượt là:",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.657",
        options: [
          "Acetylcholine bị phân hủy nhanh bởi Acetylcholinesterase (AChE); Catecholamine bị thoái giáng bởi MAO (Monoamine oxidase) và COMT (Catechol-O-methyltransferase)",
          "Acetylcholine bị phân hủy bởi MAO; Catecholamine bị phân hủy bởi Carbonic anhydrase",
          "Cả hai đều bị phân hủy bởi enzyme Enterokinase ở ruột",
          "Cả hai đều không bị phân hủy mà tồn tại vĩnh viễn trong máu"
        ],
        answer: 0,
        explain: "ACh tại khe synapse bị cắt cực nhanh trong vài mili-giây bởi Acetylcholinesterase (AChE). Còn Norepinephrine chủ yếu được tái thu hồi trở lại cúc tận cùng tiền synapse (50–80%) và bị chuyển hóa bởi MAO (trong ty thể tận cùng thần kinh) cùng COMT (ở gan và mô ngoại biên)."
      },
      {
        level: 1, ksa: "K", ksaLabel: "K1: Thuộc (Nhớ lại thụ thể tại Hạch tự chủ vs Cơ quan đích)",
        q: "Trên màng neuron SAU HẠCH tại tất cả các hạch giao cảm và hạch đối giao cảm đều có loại thụ thể nào tiếp nhận Acetylcholine từ sợi trước hạch, và thụ thể nào trên cơ quan đích tiếp nhận Acetylcholine từ sợi sau hạch đối giao cảm?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.657",
        options: [
          "Tại hạch tự chủ: Thụ thể Nicotinic (NN); Trên cơ quan đích sau hạch đối giao cảm: Thụ thể Muscarinic (M1–M5)",
          "Tại hạch tự chủ: Thụ thể Muscarinic; Trên cơ quan đích: Thụ thể Alpha-1",
          "Tại hạch tự chủ: Thụ thể Beta-1; Trên cơ quan đích: Thụ thể Nicotinic",
          "Cả hai vị trí đều chỉ có thụ thể Beta-2"
        ],
        answer: 0,
        explain: "Các thụ thể Cholinergic chia làm 2 họ: Nicotinic (kênh ion nhanh — gồm NN ở tất cả hạch tự chủ & tủy thượng thận, và NM ở tấm vận động cơ vân) và Muscarinic (thụ thể GPCR — nằm trên tất cả các cơ quan đích nhận sợi sau hạch đối giao cảm và tuyến mồ hôi giao cảm)."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (So sánh cơ chế tác dụng tại Mắt: Giao cảm vs Đối giao cảm)",
        q: "Tại sao khi nhỏ thuốc Atropin (kháng thụ thể Muscarinic) vào mắt bệnh nhân lại vừa làm GIÃN ĐỒNG TỬ vừa gây LIỆT ĐIỀU TIẾT (mờ mắt khi đọc sách gần)?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.660 & 662",
        options: [
          "Vì Atropin phong bế thụ thể Muscarinic (M3) làm liệt cơ vòng mống mắt (đồng tử không co lại được nên giãn ra dưới trương lực cơ tia giao cảm) và làm liệt cơ thể mi (không phồng thủy tinh thể để nhìn gần được)",
          "Vì Atropin kích thích mạnh dây thần kinh III",
          "Vì Atropin làm đục thủy tinh thể ngay lập tức",
          "Vì Atropin làm co thắt mạnh cơ tia và cơ vòng mống mắt cùng lúc"
        ],
        answer: 0,
        explain: "Cơ vòng mống mắt (co đồng tử) và cơ thể mi (làm phồng thủy tinh thể nhìn gần) đều do dây III (đối giao cảm) tiết ACh gắn thụ thể M3. Atropin khóa M3 khiến đồng tử giãn tối đa (ứng dụng soi đáy mắt) và tạm thời mất khả năng điều tiết nhìn gần."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Ngoại lệ Tuyến mồ hôi & Thời gian tác dụng của Tủy thượng thận)",
        q: "Tại sao các Catecholamine do tủy thượng thận tiết trực tiếp vào máu (80% Epinephrine, 20% Norepinephrine) lại có thời gian tác dụng kéo dài gấp 5 – 10 lần so với kích thích trực tiếp sợi thần kinh giao cảm?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.663",
        options: [
          "Vì ở đầu tận cùng dây giao cảm, Norepinephrine nhanh chóng bị bơm tái thu hồi vào cúc tận cùng và phân hủy tại chỗ trong vài giây; trong khi Epinephrine/Norepinephrine tủy thượng thận lưu hành trong máu bị gan chuyển hóa bởi COMT/MAO chậm hơn (kéo dài vài phút) và đến được cả những mô không có dây giao cảm trực tiếp tới",
          "Vì tủy thượng thận tiết ra Acetylcholine không bị enzyme nào phân hủy",
          "Vì Epinephrine gắn vào DNA nhân tế bào kéo dài 7 ngày",
          "Vì tủy thượng thận tiết ra hormon chứa Iod"
        ],
        answer: 0,
        explain: "Catecholamine máu không chịu tái thu hồi trực tiếp tại khe synapse mà tồn tại trong tuần hoàn 1–2 phút cho đến khi bị enzyme COMT ở gan và mô thoái giáng, giúp duy trì đáp ứng 'chiến đấu hay bỏ chạy' kéo dài hơn và tác động đều lên toàn bộ cơ quan."
      },
      {
        level: 2, ksa: "K", ksaLabel: "K2: Hiểu (Phân biệt Tác dụng chuyển hóa của Kích thích Giao cảm / Adrenaline)",
        q: "Khi kích thích hệ giao cảm và tủy thượng thận tiết Epinephrine trong tình huống khẩn cấp ('Chiến đấu hay bỏ chạy'), những biến đổi chuyển hóa nào xảy ra để cung cấp năng lượng tức thời cho cơ bắp?",
        source: "Sách Sinh lý học Y khoa YDS 2025 - Bài 51, tr.660",
        options: [
          "Tăng phân giải Glycogen tại gan và cơ xương (qua β2), tăng ly giải mỡ giải phóng acid béo tự do, ức chế tiết Insulin (qua α2) để tăng nhanh nồng độ Glucose máu cung cấp cho cơ vân và não",
          "Tăng tổng hợp Glycogen và hạ đường huyết xuống 40 mg/dL",
          "Tăng nhu động ruột và tăng tiết dịch tụy tối đa",
          "Giảm chuyển hóa cơ bản xuống 50%"
        ],
        answer: 0,
        explain: "Epinephrine kích thích thụ thể β2 ở gan/cơ tăng phân giải glycogen, kích thích β ở mô mỡ tăng ly giải triglyceride, đồng thời qua thụ thể α2 trên tế bào Beta tụy ức chế tiết insulin để giữ đường huyết cao phục vụ ngay cho hoạt động chiến đấu hoặc chạy trốn."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S1: Làm đúng (Giải thích cơ chế & tác dụng thuốc Đồng vận β2 trong cơn hen)",
        q: "[Kỹ năng Dược lý Hô hấp] Khi bệnh nhân lên cơn hen phế quản cấp (tiểu phế quản co thắt dữ dội, khó thở thì thở ra), bác sĩ cho xịt thuốc Salbutamol. Cơ chế sinh lý nào làm thuốc cắt cơn hen nhanh chóng mà ít gây hồi hộp tim nhanh quá mức?",
        source: "Kỹ năng S1: Chọn lọc thụ thể β2 vs β1",
        options: [
          "Salbutamol là thuốc kích thích CHỌN LỌC thụ thể Beta-2 (β2) trên cơ trơn tiểu phế quản Reissessen (làm tăng cAMP gây giãn phế quản mạnh), ít tác động lên thụ thể Beta-1 (β1) ở nút xoang của tim",
          "Salbutamol phong bế hoàn toàn thụ thể β2 và kích thích mạnh thụ thể M3",
          "Salbutamol làm co mạch phổi và ức chế hô hấp",
          "Salbutamol kích thích mạnh thụ thể α1 tại cơ tim"
        ],
        answer: 0,
        explain: "Nhờ tính chọn lọc cao trên thụ thể β2 (phân bố chủ yếu ở cơ trơn tiểu phế quản) và dùng đường xịt hít tác dụng tại chỗ, Salbutamol làm tăng cAMP gây giãn phế quản nhanh trong vài phút mà hạn chế tác dụng phụ nhịp nhanh trên β1 tim."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Biện luận Hội chứng Horner khi tổn thương chuỗi giao cảm cổ / hạch sao)",
        q: "Một bệnh nhân có khối u đỉnh phổi (u Pancoast) xâm lấn phá hủy hạch giao cảm cổ - ngực (HẠCH SAO) bên PHẢI sẽ biểu hiện Hội chứng Horner ở nửa mặt cùng bên (bên phải) với các dấu hiệu đặc trưng nào?",
        source: "Vận dụng S2 - Cắt đứt giao cảm vùng đầu mặt cổ",
        options: [
          "Co đồng tử bên phải (mất tác dụng giãn đồng tử α1 của cơ tia), sụp mi nhẹ (liệt cơ sụn mi trên Müller do giao cảm chi phối), và giảm/mất tiết mồ hôi (da khô ấm đỏ) nửa mặt phải",
          "Giãn đồng tử tối đa bên phải và tăng vã mồ hôi đầm đìa nửa mặt phải",
          "Co đồng tử bên trái và sụp mi bên trái",
          "Liệt toàn bộ cơ nhai và mất vị giác"
        ],
        answer: 0,
        explain: "Sợi giao cảm đi lên đầu mặt cổ xuất phát từ sừng bên T1 đi qua hạch sao lên hạch cổ trên. Khi tổn thương hạch sao bên phải, toàn bộ chi phối giao cảm mắt và tuyến mồ hôi mặt bên phải bị mất → đồng tử co nhỏ (do đối giao cảm dây III chiếm ưu thế), sụp mi nhẹ và mất tiết mồ hôi cùng bên (Tam chứng Horner)."
      },
      {
        level: 3, ksa: "S", ksaLabel: "S2: Làm tự tin (Phân tích phản xạ Tăng huyết áp vs Chậm nhịp khi truyền Norepinephrine vs Isoproterenol)",
        q: "Trên người khỏe mạnh bình thường còn nguyên vẹn phản xạ áp thụ quan, nếu truyền tĩnh mạch chậm Norepinephrine (kích thích mạnh α1, vừa β1, rất yếu β2) và truyền riêng ở lần khác chất Isoproterenol (chỉ kích thích mạnh β1 và β2, không tác dụng trên α), sự thay đổi Huyết áp và Nhịp tim sẽ khác nhau như thế nào?",
        source: "Vận dụng S2 - Thử nghiệm kinh điển Giao cảm + Áp thụ quan",
        options: [
          "Truyền Norepinephrine: Co mạch α1 mạnh làm TĂNG CẢ HA TÂM THU VÀ TÂM TRƯƠNG, kéo theo phản xạ áp thụ quan dây X làm NHỊP TIM CHẬM LẠI; Truyền Isoproterenol: Giãn mạch cơ vân β2 làm HẠ HA TÂM TRƯƠNG (hiệu áp rộng) và kích thích trực tiếp β1 + phản xạ làm NHỊP TIM TĂNG RẤT NHANH!",
          "Truyền Norepinephrine làm hạ huyết áp tâm trương xuống 30 mmHg",
          "Truyền Isoproterenol làm chậm nhịp tim xuống 40 l/p",
          "Cả hai chất đều gây co mạch tối đa làm HA tâm trương tăng lên 140 mmHg"
        ],
        answer: 0,
        explain: "Đây là bài toán tổng hợp kinh điển của Sinh lý Tim mạch + TKTC: Norepinephrine co mạch toàn thân (α1) làm HA trung bình tăng vọt → kích hoạt phản xạ áp thụ quan làm tim chậm lại thắng thế β1! Ngược lại, Isoproterenol giãn mạch (β2) làm giảm sức cản ngoại biên (hạ HA tâm trương) nên cả tác dụng trực tiếp β1 lẫn áp thụ quan đều đẩy nhịp tim tăng vọt!"
      },
      {
        level: 3, ksa: "S", ksaLabel: "S3: Làm thành thạo (Chạy trạm Cấp cứu Ngộ độc Thuốc trừ sâu Phospho hữu cơ)",
        q: "[Trạm Cấp cứu Chống độc] Một nông dân vào viện sau khi phun thuốc trừ sâu phospho hữu cơ (chất ức chế không hồi phục enzyme Acetylcholinesterase – AChE) với triệu chứng: đồng tử co nhỏ như đầu đinh ghim, vã mồ hôi, sùi bọt mép tăng tiết đàm dãi, khó thở co thắt phế quản, đau quặn bụng và mạch chậm 40 lần/phút. Phác đồ giải độc đặc hiệu theo cơ chế sinh lý ngay lập tức là:",
        source: "Kỹ năng S3: Xử trí Hội chứng cường Cholinergic cấp",
        options: [
          "Tiêm tĩnh mạch ATROPIN liều cao lặp lại liên tục (để đối kháng cạnh tranh phong bế tác dụng quá mức của ACh tại thụ thể Muscarinic cho đến khi thấm khô đàm dãi, đồng tử giãn, nhịp tim > 80 l/p) kết hợp thuốc tái hoạt hóa men cholinesterase (Pralidoxime - PAM)",
          "Tiêm thêm Acetylcholine tĩnh mạch để bù men",
          "Dùng thuốc chẹn Beta Propranolol liều cao để làm chậm tim thêm",
          "Không dùng Atropin vì Atropin làm tăng tiết đàm dãi"
        ],
        answer: 0,
        explain: "Ức chế AChE làm ACh ứ đọng ngập tràn ở tất cả các synapse cholinergic (cả Muscarinic, Nicotinic và TK-cơ). Cấp cứu sống còn là dùng ATROPIN (khóa thụ thể Muscarinic, làm khô đàm phế quản, giãn phế quản và nâng nhịp tim) phối hợp PAM (tái phục hồi AChE ở cả bản vận động cơ)."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A1: Nhận biết (Nhận biết tác dụng phụ bí tiểu / cơn glocom góc đóng khi dùng thuốc kháng Cholinergic)",
        q: "Khi kê đơn các thuốc có tính kháng cholinergic mạnh (kháng thụ thể Muscarinic như Atropin, Scopolamine chống say tàu xe hoặc thuốc kháng Histamine H1 thế hệ 1) cho bệnh nhân nam 70 tuổi có Phì đại lành tính tuyến tiền liệt hoặc người có tiền sử Glôcôm (tăng nhãn áp) góc đóng, bác sĩ cần NHẬN BIẾT nguy cơ nào?",
        source: "Thái độ A1: Nhận biết chống chỉ định thuốc kháng Muscarinic",
        options: [
          "Thuốc khóa thụ thể Muscarinic làm giãn cơ thành bàng quang và đóng cơ thắt gây BÍ TIỂU CẤP ở người phì đại tiền liệt tuyến; đồng thời gây giãn đồng tử đẩy chân mống mắt bít góc tiền phòng làm khởi phát cơn TĂNG NHÃN ÁP CẤP (Glôcôm góc đóng) có thể gây mù lòa!",
          "Thuốc làm co đồng tử quá mức và tiểu không tự chủ",
          "Thuốc gây cường giáp cấp tính",
          "Hoàn toàn vô hại trên mọi đối tượng người cao tuổi"
        ],
        answer: 0,
        explain: "Nắm chắc tác dụng của hệ đối giao cảm (làm co bàng quang-giãn cơ thắt để tiểu, và co đồng tử giúp mở rộng góc thoát thủy dịch ống Schlemm) giúp người thầy thuốc nhận biết ngay chống chỉ định tuyệt đối của thuốc kháng Muscarinic ở người có góc tiền phòng hẹp hoặc tắc nghẽn đường tiểu."
      },
      {
        level: 3, ksa: "A", ksaLabel: "A3: Nội tâm hóa (Thái độ giải thích & tuân thủ kiểm tra tiền căn Hen khi kê Chẹn Beta)",
        q: "Trước khi kê toa bất kỳ thuốc ức chế Beta nào (cho bệnh tăng huyết áp, đau nửa đầu, run tay cường giáp hoặc thuốc nhỏ mắt Timolol trị glôcôm), một bác sĩ luôn giữ thói quen hỏi kỹ tiền sử Hen phế quản / COPD của bệnh nhân và chọn thuốc chẹn chọn lọc β1 (nếu bắt buộc) thay vì Propranolol không chọn lọc. Thói quen chuẩn mực này phản ánh:",
        source: "Thái độ A3: Nội tâm hóa an toàn kê đơn liên cơ quan",
        options: [
          "Nội tâm hóa (A3): Luôn đặt tư duy sinh lý hệ thống (liên kết giữa β1 ở tim và β2 ở phế quản) thành phản xạ an toàn tự động trước mỗi nét bút kê đơn để bảo vệ người bệnh khỏi cơn co thắt phế quản chí mạng",
          "Sự rườm rà làm tốn thời gian khám bệnh",
          "Vì thuốc nhỏ mắt Timolol không bao giờ hấp thu toàn thân được",
          "Vì Propranolol làm giãn phế quản quá mức"
        ],
        answer: 0,
        explain: "Thậm chí thuốc nhỏ mắt Timolol (ức chế β không chọn lọc) cũng có thể hấp thu qua niêm mạc mũi lệ vào máu gây co thắt phế quản nặng ở người hen! Biến sự thận trọng hỏi tiền căn hô hấp trước khi kê nhóm chẹn beta thành thói quen thường trực là đỉnh cao của thái độ hành nghề an toàn."
      }
    ]
  }
};
