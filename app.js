// ==========================================================================
// BỘ ĐIỀU KHIỂN ỨNG DỤNG ÔN TẬP SINH LÝ HỌC SĐH 2026 - ĐHYD TP.HCM (YDS)
// Quản lý Điều hướng 17 Bài, Mô phỏng Tương tác, Trắc nghiệm Cuối bài & Thi thử
// ==========================================================================

window.App = {
  lessons: [],
  currentLessonId: null,
  progress: {}, // Lưu cục bộ trên trình duyệt từng thiết bị (localStorage, không đồng bộ)
  mockState: null,
  storageAvailable: true,

  init() {
    this.lessons = [
      ...(window.LESSONS_PART1 || []),
      ...(window.LESSONS_PART2 || []),
      ...(window.LESSONS_PART3 || [])
    ];

    // Deterministically permute options across A, B, C, D so correct answers are evenly distributed
    this.lessons.forEach((l) => {
      l.questions.forEach((qObj, qIdx) => {
        if (qObj._permuted) return;
        const targetPos = (l.id * 5 + qIdx * 3 + 1) % qObj.options.length;
        if (targetPos !== qObj.answer) {
          const temp = qObj.options[targetPos];
          qObj.options[targetPos] = qObj.options[qObj.answer];
          qObj.options[qObj.answer] = temp;
          qObj.answer = targetPos;
        }
        qObj._permuted = true;
      });
    });

    this.loadProgress();
    this.initTheme();
    this.renderSidebar();
    this.bindEvents();
    this.showOverview();
  },

  loadProgress() {
    try {
      const testKey = "__yds_test__";
      localStorage.setItem(testKey, "1");
      localStorage.removeItem(testKey);
      this.storageAvailable = true;
      const saved = localStorage.getItem("yds_physio_2026_progress");
      if (saved) this.progress = JSON.parse(saved);
    } catch (e) {
      this.storageAvailable = false;
      this.progress = {};
      const note = document.getElementById("storageStatusNote");
      if (note) {
        note.textContent = "⚠️ Trình duyệt đang chặn lưu trữ tạm (Ẩn danh): tiến độ chỉ giữ trong phiên hiện tại";
      }
    }
  },

  saveProgress() {
    if (this.storageAvailable) {
      try {
        localStorage.setItem("yds_physio_2026_progress", JSON.stringify(this.progress));
      } catch (e) {}
    }
    this.updateOverallProgressUI();
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
  },

  resetAllProgress() {
    if (!confirm("Bạn có chắc muốn xóa toàn bộ lịch sử làm bài trắc nghiệm của 17 bài để ôn tập lại từ đầu?")) return;
    this.progress = {};
    this.saveProgress();
    if (this.currentLessonId) {
      this.showLesson(this.currentLessonId);
    } else {
      this.showOverview();
    }
  },

  initTheme() {
    let savedTheme = "light";
    if (this.storageAvailable) {
      try {
        savedTheme = localStorage.getItem("yds_physio_theme") || "light";
      } catch (e) {}
    }
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateThemeBtn(savedTheme);
  },

  toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "light";
    const next = cur === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    if (this.storageAvailable) {
      try {
        localStorage.setItem("yds_physio_theme", next);
      } catch (e) {}
    }
    this.updateThemeBtn(next);
  },

  updateThemeBtn(theme) {
    const btn = document.getElementById("btnThemeToggle");
    if (btn) {
      btn.innerHTML = theme === "dark"
        ? `☀️ <span class="hide-sm">Giao diện sáng</span>`
        : `🌙 <span class="hide-sm">Giao diện tối</span>`;
    }
  },

  openDrawer() {
    document.getElementById("sidebar")?.classList.add("open");
    document.getElementById("sidebarBackdrop")?.classList.add("visible");
    document.body.classList.add("drawer-open");
  },

  closeDrawer() {
    document.getElementById("sidebar")?.classList.remove("open");
    document.getElementById("sidebarBackdrop")?.classList.remove("visible");
    document.body.classList.remove("drawer-open");
  },

  setBottomNavActive(tab) {
    document.getElementById("mbbOverview")?.classList.toggle("active", tab === "overview");
    document.getElementById("mbbMock")?.classList.toggle("active", tab === "mock");
  },

  bindEvents() {
    const searchInput = document.getElementById("lessonSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.renderSidebar(e.target.value);
      });
    }

    const menuBtn = document.getElementById("menuToggleBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const backdrop = document.getElementById("sidebarBackdrop");
    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        const isOpen = document.getElementById("sidebar")?.classList.contains("open");
        if (isOpen) this.closeDrawer();
        else this.openDrawer();
      });
    }
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeDrawer());
    if (backdrop) backdrop.addEventListener("click", () => this.closeDrawer());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.closeDrawer();
    });
  },

  updateOverallProgressUI() {
    let completedLessons = 0;
    this.lessons.forEach((l) => {
      const p = this.progress[l.id];
      if (p && p.answered && Object.keys(p.answered).length >= Math.ceil(l.questions.length * 0.5)) {
        completedLessons++;
      }
    });
    const pct = Math.round((completedLessons / this.lessons.length) * 100);
    const txtEl = document.getElementById("overallProgressText");
    const fillEl = document.getElementById("overallProgressFill");
    if (txtEl) txtEl.textContent = `${completedLessons} / ${this.lessons.length} bài (${pct}%)`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  },

  renderSidebar(filterText = "") {
    const nav = document.getElementById("sidebarNav");
    if (!nav) return;
    const q = filterText.trim().toLowerCase();

    const groups = {};
    this.lessons.forEach((l) => {
      if (q) {
        const matchTitle = l.title.toLowerCase().includes(q);
        const matchSum = l.summary.toLowerCase().includes(q);
        const matchGroup = l.group.toLowerCase().includes(q);
        if (!matchTitle && !matchSum && !matchGroup) return;
      }
      if (!groups[l.group]) groups[l.group] = [];
      groups[l.group].push(l);
    });

    let html = "";
    Object.keys(groups).forEach((gName) => {
      html += `<div class="nav-group-title">${gName}</div>`;
      groups[gName].forEach((l) => {
        const p = this.progress[l.id];
        const answeredCount = p && p.answered ? Object.keys(p.answered).length : 0;
        const isCompleted = answeredCount === l.questions.length && l.questions.length > 0;
        const isActive = this.currentLessonId === l.id;

        let badgeHtml = "";
        if (answeredCount > 0) {
          badgeHtml = `<span class="nav-score-badge">${p.score || 0}/${l.questions.length}</span>`;
        }

        html += `
          <div class="nav-item ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}" onclick="App.showLesson(${l.id})">
            <div class="nav-num">${isCompleted ? "✓" : l.id}</div>
            <div class="nav-text">${l.shortTitle || l.title}</div>
            ${badgeHtml}
          </div>
        `;
      });
    });

    if (!html) {
      html = `<div style="padding:16px;color:#94a3b8;font-size:13px;">Không tìm thấy bài học phù hợp với "${filterText}".</div>`;
    }

    nav.innerHTML = html;
    this.updateOverallProgressUI();
  },

  // ========================================================================
  // VIEW 1: TỔNG QUAN ĐỀ CƯƠNG 17 BÀI
  // ========================================================================
  showOverview() {
    this.currentLessonId = null;
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = "Tổng quan Đề cương Ôn tập Sinh lý học SĐH 2026 (17 Chuyên đề)";
    this.closeDrawer();
    this.setBottomNavActive("overview");

    let totalQ = 0;
    let totalAnswered = 0;
    let totalCorrect = 0;

    this.lessons.forEach((l) => {
      totalQ += l.questions.length;
      const p = this.progress[l.id];
      if (p && p.answered) {
        totalAnswered += Object.keys(p.answered).length;
        totalCorrect += p.score || 0;
      }
    });

    let cardsHtml = "";
    this.lessons.forEach((l) => {
      const p = this.progress[l.id];
      const ansCount = p && p.answered ? Object.keys(p.answered).length : 0;
      const score = p ? p.score || 0 : 0;

      cardsHtml += `
        <div class="topic-card" onclick="App.showLesson(${l.id})">
          <div>
            <div class="topic-card-top">
              <span class="q-num">${l.group}</span>
              <span style="font-size:12px;font-weight:700;color:${ansCount > 0 ? "var(--success)" : "var(--text-light)"}">
                ${ansCount > 0 ? `✅ Đã làm: ${score}/${l.questions.length} câu` : `📝 ${l.questions.length} câu trắc nghiệm`}
              </span>
            </div>
            <h3>${l.title}</h3>
            <p>${l.summary}</p>
          </div>
          <div style="display:flex;gap:8px;margin-top:8px;padding-top:10px;border-top:1px solid var(--border);">
            <button class="btn btn-primary" style="flex:1;padding:7px 10px;font-size:12.5px;" onclick="event.stopPropagation();App.showLesson(${l.id})">
              🔬 Học & Mô phỏng
            </button>
            <button class="btn btn-outline" style="padding:7px 10px;font-size:12.5px;" onclick="event.stopPropagation();App.showLesson(${l.id}, 'quiz')">
              📝 Trắc nghiệm
            </button>
          </div>
        </div>
      `;
    });

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">ĐẠI HỌC Y DƯỢC TP.HCM (YDS)</span>
          <span class="tag-pill">ĐỀ CƯƠNG TUYỂN SINH THẠC SĨ 2026</span>
          <span class="tag-pill">GIÁO TRÌNH SINH LÝ HỌC Y KHOA 2025</span>
        </div>
        <h1>Cổng Ôn Tập Tương Tác Môn Cơ Sở: Sinh Lý Học</h1>
        <p>Hệ thống hóa toàn bộ <strong>17 bài học</strong> theo đúng Đề cương SĐH 2026 (ký ngày 03/02/2026), tích hợp <strong>17 Phòng thí nghiệm mô phỏng trực quan</strong> và <strong>${totalQ} câu hỏi trắc nghiệm chuẩn YDS</strong> có chấm điểm & giải thích cơ chế sinh lý chi tiết ở cuối mỗi bài.</p>
      </div>

      <div class="metric-cards" style="margin-bottom:24px;">
        <div class="metric-card">
          <div class="metric-label">Số Chuyên đề Đề cương</div>
          <div class="metric-val">17 Bài (7 Chủ đề)</div>
          <div class="metric-sub">Bám sát 100% Sách Sinh lý YDS 2025</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Mô phỏng Trực quan</div>
          <div class="metric-val" style="color:var(--accent)">17 Phòng Lab</div>
          <div class="metric-sub">Tương tác thời gian thực</div>
        </div>
        <div class="metric-card">
          <div class="metric-label">Ngân hàng Câu hỏi đã làm</div>
          <div class="metric-val">${totalAnswered} / ${totalQ} câu</div>
          <div class="metric-sub">Trả lời đúng: <strong>${totalCorrect}</strong> câu</div>
        </div>
        <div class="metric-card" style="display:flex;flex-direction:column;justify-content:center;gap:6px;">
          <button class="btn btn-accent" onclick="App.showMockExam()">🎯 Vào Phòng Thi Thử Tổng Hợp</button>
          <button class="btn btn-outline" style="font-size:12px;padding:4px 8px;" onclick="App.resetAllProgress()">🔄 Xóa lịch sử làm bài</button>
        </div>
      </div>

      <div class="overview-grid">
        ${cardsHtml}
      </div>
    `;
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // ========================================================================
  // VIEW 2: CHI TIẾT BÀI HỌC (LÝ THUYẾT + MÔ PHỎNG + TRẮC NGHIỆM CUỐI BÀI)
  // ========================================================================
  showLesson(lessonId, jumpTo = null) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    this.currentLessonId = lessonId;
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = `${lesson.group}  ›  ${lesson.title}`;
    this.closeDrawer();
    this.setBottomNavActive("lesson");

    const prevLesson = this.lessons.find((l) => l.id === lessonId - 1);
    const nextLesson = this.lessons.find((l) => l.id === lessonId + 1);

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">${lesson.group}</span>
          <span class="tag-pill">📚 ${lesson.textbookRef}</span>
          <span class="tag-pill">📝 ${lesson.questions.length} câu trắc nghiệm cuối bài</span>
        </div>
        <h1>${lesson.title}</h1>
        <p>${lesson.summary}</p>
      </div>

      <!-- THANH ĐIỀU HƯỚNG NHANH TRONG BÀI HỌC -->
      <div class="lesson-tabs">
        <button class="tab-btn active" id="tabBtn_all" onclick="App.switchLessonTab('all')">
          📋 Xem Toàn Bộ (Lý thuyết + Mô phỏng + Trắc nghiệm)
        </button>
        <button class="tab-btn" id="tabBtn_theory" onclick="App.switchLessonTab('theory')">
          📖 1. Lý thuyết Trọng tâm & Bẫy thi
        </button>
        <button class="tab-btn" id="tabBtn_sim" onclick="App.switchLessonTab('sim')">
          🔬 2. Mô phỏng Trực quan Tương tác
        </button>
        <button class="tab-btn" id="tabBtn_quiz" onclick="App.switchLessonTab('quiz')">
          📝 3. Trắc nghiệm Cuối bài (${lesson.questions.length} câu)
        </button>
      </div>

      <!-- PHẦN 1: LÝ THUYẾT TRỌNG TÂM -->
      <section id="sec_theory" class="tab-pane active">
        ${lesson.theoryHtml}
      </section>

      <!-- PHẦN 2: MÔ PHỎNG TƯƠNG TÁC TRỰC QUAN -->
      <section id="sec_sim" class="tab-pane active" style="margin-top:24px;">
        <div class="sim-box">
          <div class="sim-header">
            <div>
              <span class="sim-badge">🔬 Phòng thí nghiệm Mô phỏng Trực quan</span>
              <h2 style="font-size:19px;font-weight:800;margin-top:6px;color:var(--text-main);">${lesson.simTitle}</h2>
              <p style="font-size:13px;color:var(--text-muted);">Hãy thay đổi các thông số hoặc chọn tình huống lâm sàng bên dưới để quan sát đáp ứng sinh lý tức thời:</p>
            </div>
          </div>
          <div id="simContainer"></div>
        </div>
      </section>

      <!-- PHẦN 3: TRẮC NGHIỆM CUỐI BÀI CÓ GIẢI THÍCH CHI TIẾT -->
      <section id="sec_quiz" class="tab-pane active" style="margin-top:28px;">
        <div class="quiz-header-bar">
          <div>
            <span class="brand-badge" style="background:var(--primary-light);color:var(--primary);">PHẦN TRẮC NGHIỆM CUỐI BÀI</span>
            <h2 style="font-size:20px;font-weight:800;color:var(--text-main);">Kiểm tra Hiểu bài: ${lesson.title}</h2>
            <p style="font-size:13.5px;color:var(--text-muted);">Chọn đáp án để chấm điểm trực tiếp và đọc giải thích cơ chế sinh lý chi tiết dưới mỗi câu.</p>
          </div>
          <div class="quiz-score-board">
            <div class="score-circle" id="lessonScoreCircle">0/${lesson.questions.length}</div>
            <div style="display:flex;flex-direction:column;gap:6px;">
              <button class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="App.revealAllLessonExplanations(${lesson.id})">💡 Xem tất cả giải thích</button>
              <button class="btn btn-outline" style="padding:6px 12px;font-size:12.5px;" onclick="App.resetLessonQuiz(${lesson.id})">🔄 Làm lại bài này</button>
            </div>
          </div>
        </div>

        <div id="lessonQuizList"></div>
      </section>

      <!-- ĐIỀU HƯỚNG BÀI TRƯỚC / BÀI TIẾP THEO -->
      <div class="card lesson-nav-footer">
        <div>
          ${prevLesson ? `<button class="btn btn-outline" onclick="App.showLesson(${prevLesson.id})">⬅️ ${prevLesson.title}</button>` : `<button class="btn btn-outline" onclick="App.showOverview()">📋 Về Tổng quan Đề cương</button>`}
        </div>
        <div>
          ${nextLesson ? `<button class="btn btn-primary" onclick="App.showLesson(${nextLesson.id})">Bài tiếp theo: ${nextLesson.title} ➡️</button>` : `<button class="btn btn-accent" onclick="App.showMockExam()">🎯 Hoàn thành 17 bài! Vào Thi thử Tổng hợp ➡️</button>`}
        </div>
      </div>
    `;

    // Render interactive simulator
    Simulators.render(lesson.simId, document.getElementById("simContainer"));

    // Render lesson quiz
    this.renderLessonQuiz(lesson);

    if (jumpTo === "quiz") {
      setTimeout(() => {
        document.getElementById("sec_quiz")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  },

  switchLessonTab(mode) {
    ["all", "theory", "sim", "quiz"].forEach((t) => {
      document.getElementById("tabBtn_" + t)?.classList.toggle("active", t === mode);
    });
    const showTheory = mode === "all" || mode === "theory";
    const showSim = mode === "all" || mode === "sim";
    const showQuiz = mode === "all" || mode === "quiz";

    document.getElementById("sec_theory")?.classList.toggle("active", showTheory);
    document.getElementById("sec_sim")?.classList.toggle("active", showSim);
    document.getElementById("sec_quiz")?.classList.toggle("active", showQuiz);
  },

  renderLessonQuiz(lesson) {
    const listEl = document.getElementById("lessonQuizList");
    if (!listEl) return;

    if (!this.progress[lesson.id]) {
      this.progress[lesson.id] = { answered: {}, score: 0, total: lesson.questions.length };
    }
    const p = this.progress[lesson.id];

    const letters = ["A", "B", "C", "D"];
    let html = "";

    lesson.questions.forEach((qObj, qIdx) => {
      const chosen = p.answered[qIdx];
      const isAnswered = chosen !== undefined;

      let optsHtml = "";
      qObj.options.forEach((optText, oIdx) => {
        let cls = "q-opt";
        if (isAnswered) {
          cls += " disabled";
          if (oIdx === qObj.answer) cls += " correct";
          else if (oIdx === chosen && chosen !== qObj.answer) cls += " wrong";
        }
        optsHtml += `
          <button class="${cls}" onclick="App.answerLessonQuestion(${lesson.id}, ${qIdx}, ${oIdx})">
            <span class="q-opt-letter">${letters[oIdx]}</span>
            <span style="flex:1;">${optText}</span>
          </button>
        `;
      });

      html += `
        <div class="q-card" id="qcard_${lesson.id}_${qIdx}">
          <div class="q-meta">
            <span class="q-num">Câu ${qIdx + 1} / ${lesson.questions.length}</span>
            <span class="q-source">📌 Nguồn: ${qObj.source}</span>
          </div>
          <div class="q-text">${qObj.q}</div>
          <div class="q-options">
            ${optsHtml}
          </div>
          <div class="q-explain ${isAnswered ? "visible" : ""}" id="qexp_${lesson.id}_${qIdx}">
            <div style="font-weight:700;margin-bottom:4px;color:var(--accent);">
              ${isAnswered ? (chosen === qObj.answer ? "✅ CHÍNH XÁC!" : `❌ CHƯA ĐÚNG (Đáp án đúng là ${letters[qObj.answer]})`) : `💡 Đáp án đúng: ${letters[qObj.answer]}`} — Giải thích cơ chế sinh lý:
            </div>
            <div>${qObj.explain}</div>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html;
    this.updateLessonScoreCircle(lesson);
  },

  answerLessonQuestion(lessonId, qIdx, chosenOpt) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;

    if (!this.progress[lessonId]) {
      this.progress[lessonId] = { answered: {}, score: 0, total: lesson.questions.length };
    }
    const p = this.progress[lessonId];
    if (p.answered[qIdx] !== undefined) return; // Already answered

    p.answered[qIdx] = chosenOpt;

    // Recalculate score
    let score = 0;
    Object.keys(p.answered).forEach((k) => {
      const idx = parseInt(k);
      if (lesson.questions[idx] && p.answered[idx] === lesson.questions[idx].answer) {
        score++;
      }
    });
    p.score = score;
    p.total = lesson.questions.length;

    this.saveProgress();
    this.renderLessonQuiz(lesson);
  },

  updateLessonScoreCircle(lesson) {
    const circle = document.getElementById("lessonScoreCircle");
    if (!circle) return;
    const p = this.progress[lesson.id];
    const score = p ? p.score || 0 : 0;
    circle.textContent = `${score}/${lesson.questions.length}`;
  },

  revealAllLessonExplanations(lessonId) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    lesson.questions.forEach((_, qIdx) => {
      document.getElementById(`qexp_${lessonId}_${qIdx}`)?.classList.add("visible");
    });
  },

  resetLessonQuiz(lessonId) {
    const lesson = this.lessons.find((l) => l.id === lessonId);
    if (!lesson) return;
    this.progress[lessonId] = { answered: {}, score: 0, total: lesson.questions.length };
    this.saveProgress();
    this.renderLessonQuiz(lesson);
  },

  // ========================================================================
  // VIEW 3: THI THỬ TỔNG HỢP (MOCK EXAM)
  // ========================================================================
  showMockExam() {
    this.currentLessonId = null;
    this.renderSidebar(document.getElementById("lessonSearchInput")?.value || "");
    document.getElementById("breadcrumb").textContent = "Phòng Thi Thử Tổng Hợp Sinh Lý Học SĐH YDS 2026";
    this.closeDrawer();
    this.setBottomNavActive("mock");

    const main = document.getElementById("mainContent");
    main.innerHTML = `
      <div class="lesson-hero">
        <div class="lesson-hero-meta">
          <span class="tag-pill">CHẾ ĐỘ THI THỬ TỔNG HỢP</span>
          <span class="tag-pill">NGÂN HÀNG 204 CÂU HỎI CHUẨN YDS</span>
        </div>
        <h1>🎯 Phòng Thi Thử Tuyển Sinh Sau Đại Học – Môn Sinh Lý Học</h1>
        <p>Đề thi được rút ngẫu nhiên phân bổ đều từ 17 bài trong đề cương chính thức của Đại học Y Dược TP.HCM. Mỗi phương án lựa chọn đều được đảo thứ tự tự động để rèn luyện tư duy bản chất sinh lý.</p>
      </div>

      <div class="card">
        <div class="card-title">⚙️ Cấu hình Đề Thi Thử</div>
        <div class="sim-controls" style="margin-bottom:0;">
          <div class="control-group">
            <label>Số lượng câu hỏi:</label>
            <select id="mock_count">
              <option value="20">20 câu (Ôn tập nhanh ~15 phút)</option>
              <option value="40" selected>40 câu (Đề tiêu chuẩn ~30 phút)</option>
              <option value="60">60 câu (Đề tổng duyệt ~45 phút)</option>
              <option value="100">100 câu (Luyện tập chuyên sâu)</option>
            </select>
          </div>
          <div class="control-group">
            <label>Phạm vi Chủ đề:</label>
            <select id="mock_group">
              <option value="ALL">Toàn bộ 17 bài trong Đề cương (7 Chủ đề)</option>
              <option value="I. SINH LÝ MÁU">Chủ đề I: Sinh lý Máu (Bài 1 – 2)</option>
              <option value="II. SINH LÝ TIM MẠCH">Chủ đề II: Sinh lý Tim mạch (Bài 3 – 5)</option>
              <option value="III. SINH LÝ HÔ HẤP">Chủ đề III: Sinh lý Hô hấp (Bài 6 – 8)</option>
              <option value="IV. SINH LÝ THẬN NIỆU">Chủ đề IV: Sinh lý Thận niệu (Bài 9 – 10)</option>
              <option value="V. SINH LÝ TIÊU HÓA">Chủ đề V: Sinh lý Tiêu hóa (Bài 11 – 12)</option>
              <option value="VI. SINH LÝ NỘI TIẾT">Chủ đề VI: Sinh lý Nội tiết (Bài 13 – 15)</option>
              <option value="VII. SINH LÝ THẦN KINH">Chủ đề VII: Sinh lý Thần kinh (Bài 16 – 17)</option>
            </select>
          </div>
          <div class="control-group" style="justify-content:flex-end;">
            <button class="btn btn-primary" style="padding:10px 18px;" onclick="App.startMockQuiz()">🚀 Bắt đầu Tạo Đề Thi Mới</button>
          </div>
        </div>
      </div>

      <div id="mockQuizArea"></div>
    `;

    this.startMockQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  startMockQuiz() {
    const count = parseInt(document.getElementById("mock_count")?.value || "40");
    const grp = document.getElementById("mock_group")?.value || "ALL";

    let pool = [];
    this.lessons.forEach((l) => {
      if (grp !== "ALL" && l.group !== grp) return;
      l.questions.forEach((qObj) => {
        // Shuffle options for each question so user learns the concept, not option position A
        const indexedOpts = qObj.options.map((text, idx) => ({ text, isCorrect: idx === qObj.answer }));
        for (let i = indexedOpts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [indexedOpts[i], indexedOpts[j]] = [indexedOpts[j], indexedOpts[i]];
        }
        const newAns = indexedOpts.findIndex((o) => o.isCorrect);
        pool.push({
          lessonTitle: l.title,
          q: qObj.q,
          source: qObj.source,
          options: indexedOpts.map((o) => o.text),
          answer: newAns,
          explain: qObj.explain
        });
      });
    });

    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const selected = pool.slice(0, Math.min(count, pool.length));
    this.mockState = {
      questions: selected,
      answered: {},
      score: 0
    };

    this.renderMockQuiz();
  },

  renderMockQuiz() {
    const area = document.getElementById("mockQuizArea");
    if (!area || !this.mockState) return;

    const { questions, answered, score } = this.mockState;
    const ansCount = Object.keys(answered).length;
    const letters = ["A", "B", "C", "D"];

    let qHtml = "";
    questions.forEach((qObj, idx) => {
      const chosen = answered[idx];
      const isAns = chosen !== undefined;

      let optsHtml = "";
      qObj.options.forEach((optText, oIdx) => {
        let cls = "q-opt";
        if (isAns) {
          cls += " disabled";
          if (oIdx === qObj.answer) cls += " correct";
          else if (oIdx === chosen && chosen !== qObj.answer) cls += " wrong";
        }
        optsHtml += `
          <button class="${cls}" onclick="App.answerMockQuestion(${idx}, ${oIdx})">
            <span class="q-opt-letter">${letters[oIdx]}</span>
            <span style="flex:1;">${optText}</span>
          </button>
        `;
      });

      qHtml += `
        <div class="q-card">
          <div class="q-meta">
            <span class="q-num">Câu ${idx + 1} / ${questions.length} • ${qObj.lessonTitle}</span>
            <span class="q-source">${qObj.source}</span>
          </div>
          <div class="q-text">${qObj.q}</div>
          <div class="q-options">${optsHtml}</div>
          <div class="q-explain ${isAns ? "visible" : ""}">
            <div style="font-weight:700;margin-bottom:4px;color:var(--accent);">
              ${isAns && chosen === qObj.answer ? "✅ CHÍNH XÁC!" : `❌ Đáp án đúng là ${letters[qObj.answer]}`} — Giải thích:
            </div>
            <div>${qObj.explain}</div>
          </div>
        </div>
      `;
    });

    const pct = ansCount > 0 ? Math.round((score / ansCount) * 100) : 0;

    area.innerHTML = `
      <div class="quiz-header-bar">
        <div>
          <h3 style="font-size:18px;font-weight:800;">Kết quả Đề Thi Thử Hiện Tại: Đúng ${score} / ${ansCount} câu đã làm (${pct}%)</h3>
          <p style="font-size:13px;color:var(--text-muted);">Tổng số câu trong đề: ${questions.length} câu (Đã đảo ngẫu nhiên thứ tự đáp án A, B, C, D)</p>
        </div>
        <div class="score-circle">${score}/${questions.length}</div>
      </div>
      ${qHtml}
    `;
  },

  answerMockQuestion(qIdx, chosenOpt) {
    if (!this.mockState || this.mockState.answered[qIdx] !== undefined) return;
    this.mockState.answered[qIdx] = chosenOpt;
    if (chosenOpt === this.mockState.questions[qIdx].answer) {
      this.mockState.score++;
    }
    this.renderMockQuiz();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
