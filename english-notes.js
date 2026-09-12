(() => {
  const NOTES_FIELD = 'englishNotes';
  const MEANINGS_FIELD = 'englishNoteMeanings';

  const EXTRA_GLOSSARY = {
    minimal: 'น้อยที่สุด / ขั้นต่ำ',
    chunk: 'ชิ้นส่วน / ช่วงข้อความ',
    chunks: 'ชิ้นส่วน / ช่วงข้อความหลายส่วน',
    penalized: 'ถูกลงโทษ / ถูกคิดโทษมากขึ้น',
    heavily: 'อย่างมาก / อย่างหนัก',
    plausible: 'สมเหตุสมผล / เป็นไปได้ในสถานการณ์จริง',
    protected: 'ที่ได้รับการคุ้มครอง',
    demographic: 'เกี่ยวกับกลุ่มประชากร',
    sustained: 'ต่อเนื่องเป็นระยะเวลาหนึ่ง',
    intermittent: 'มาเป็นช่วง ๆ / ไม่ต่อเนื่อง',
    underlying: 'ที่อยู่เบื้องล่าง / เป็นโครงสร้างรองรับ',
    jurisdiction: 'เขตอำนาจตามกฎหมาย',
    retailer: 'ร้านค้าปลีก / บริษัทค้าปลีก',
    churn: 'ลูกค้าเลิกใช้ / ยกเลิกบริการ',
    progressively: 'ค่อย ๆ / เพิ่มขึ้นทีละน้อย',
    corrupted: 'เสีย / เพี้ยน / ถูกทำให้ผิดปกติ',
    individual: 'แต่ละรายการ / รายหนึ่ง',
    unsupported: 'ไม่มีหลักฐานหรือแหล่งข้อมูลรองรับ',
    relevant: 'เกี่ยวข้อง / ตรงกับเรื่อง',
    irrelevant: 'ไม่เกี่ยวข้อง / ไม่ตรงกับเรื่อง',
    retrieve: 'ดึงกลับมา / ค้นคืน',
    retrieval: 'การค้นคืนข้อมูล',
    rerank: 'จัดอันดับใหม่',
    reranking: 'การจัดอันดับใหม่',
    ranking: 'การจัดอันดับ',
    candidate: 'ตัวเลือกที่นำมาเปรียบเทียบ',
    guardrail: 'ขอบเขต / ข้อจำกัดเพื่อควบคุมความปลอดภัย',
    'member accounts': 'บัญชีสมาชิกภายใต้ AWS Organizations',
    approval: 'การอนุมัติ',
    approved: 'ที่ได้รับอนุมัติ',
    reusable: 'นำกลับมาใช้ซ้ำได้',
    predictable: 'คาดการณ์ได้',
    capacity: 'ความสามารถรองรับงาน / ความจุ',
    explicitly: 'อย่างชัดเจน / ระบุไว้ชัดเจน',
    deterministic: 'ให้ผลหรือเส้นทางที่กำหนดแน่นอน',
    orchestration: 'การควบคุมและจัดลำดับการทำงาน',
    outlier: 'ค่าที่หลุดจากกลุ่ม / ค่าผิดปกติ',
    majority: 'กลุ่มส่วนใหญ่',
    minority: 'กลุ่มส่วนน้อย',
    curated: 'คัดเลือกและจัดเตรียมอย่างมีคุณภาพ',
    baseline: 'ค่าหรือสภาพตั้งต้นสำหรับใช้เปรียบเทียบ',
    degrade: 'เสื่อมลง / ประสิทธิภาพลดลง',
    oversight: 'การกำกับดูแล',
    recourse: 'ช่องทางให้ผู้ได้รับผลกระทบขอทบทวนหรือแก้ไข',
    consistent: 'สม่ำเสมอ',
    inconsistent: 'ไม่สม่ำเสมอ',
    rare: 'เกิดน้อย / มีสัดส่วนน้อย',
    broader: 'กว้างกว่า / ครอบคลุมมากกว่า',
    unchanged: 'ไม่เปลี่ยนแปลง',
    varied: 'หลากหลาย / แตกต่างกัน',
    repetitive: 'ซ้ำ ๆ',
    predictability: 'ความคาดเดาได้',
    'in exchange for': 'แลกกับ',
    'rather than': 'แทนที่จะเป็น',
    expose: 'เปิดให้เข้าถึง / เปิดเผยความสามารถ',
    discoverable: 'ค้นพบหรือค้นหาเจอได้',
    confidential: 'เป็นความลับ',
    obligation: 'ข้อผูกพัน / หน้าที่ที่ต้องปฏิบัติ',
    prohibited: 'ถูกห้าม',
    immutable: 'แก้ไขย้อนหลังไม่ได้ / ไม่เปลี่ยนแปลง',
    disclose: 'เปิดเผย / แจ้งให้ทราบ'
  };

  function normalizeTerm(value) {
    return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
  }

  function cleanTerm(value) {
    return String(value || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  }

  function ensureNoteState(st) {
    if (!st[NOTES_FIELD] || typeof st[NOTES_FIELD] !== 'object' || Array.isArray(st[NOTES_FIELD])) st[NOTES_FIELD] = {};
    if (!st[MEANINGS_FIELD] || typeof st[MEANINGS_FIELD] !== 'object' || Array.isArray(st[MEANINGS_FIELD])) st[MEANINGS_FIELD] = {};
    return st;
  }

  function notesForQuestion(q, st = state()) {
    ensureNoteState(st);
    const values = st[NOTES_FIELD][q.id];
    return Array.isArray(values) ? values : [];
  }

  function setQuestionNotes(q, values) {
    const st = ensureNoteState(state());
    const seen = new Set();
    const clean = [];
    (values || []).forEach(raw => {
      const term = cleanTerm(raw);
      const key = normalizeTerm(term);
      if (!term || !key || seen.has(key)) return;
      seen.add(key);
      clean.push(term);
    });
    if (clean.length) st[NOTES_FIELD][q.id] = clean;
    else delete st[NOTES_FIELD][q.id];
    saveState();
  }

  function addTermsFromInput(raw) {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const incoming = String(raw || '')
      .split(/[,\n]+/)
      .map(cleanTerm)
      .filter(Boolean);
    if (!incoming.length) return;
    setQuestionNotes(q, [...notesForQuestion(q), ...incoming]);
    renderEnglishNoteControl();
    renderQuestionGrid();
  }

  function removeQuestionTerm(term) {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const key = normalizeTerm(term);
    setQuestionNotes(q, notesForQuestion(q).filter(item => normalizeTerm(item) !== key));
    renderEnglishNoteControl();
    renderQuestionGrid();
  }

  function ensureEnglishNoteControl() {
    if (document.getElementById('englishNoteBox')) return;
    const vocab = document.getElementById('vocabPanel');
    const questionText = document.getElementById('questionText');
    const anchor = vocab || questionText;
    if (!anchor) return;

    const box = document.createElement('div');
    box.id = 'englishNoteBox';
    box.className = 'english-note-box';
    box.innerHTML = `
      <div class="english-note-top">
        <label for="englishNoteInput"><strong>📝 English note</strong><span>ศัพท์/วลีที่ยังไม่รู้</span></label>
        <div class="english-note-entry">
          <input id="englishNoteInput" type="text" autocomplete="off" spellcheck="false" placeholder="เช่น minimal, chunk, sustained">
          <button id="englishNoteAddBtn" class="ghost" type="button">+ เพิ่ม</button>
        </div>
      </div>
      <div id="englishNoteChips" class="english-note-chips"></div>`;
    anchor.insertAdjacentElement('afterend', box);

    const input = box.querySelector('#englishNoteInput');
    const add = box.querySelector('#englishNoteAddBtn');
    add.addEventListener('click', () => {
      addTermsFromInput(input.value);
      input.value = '';
      input.focus();
    });
    input.addEventListener('keydown', event => {
      if (event.key !== 'Enter') return;
      event.preventDefault();
      addTermsFromInput(input.value);
      input.value = '';
    });
  }

  function renderEnglishNoteControl() {
    ensureEnglishNoteControl();
    const chips = document.getElementById('englishNoteChips');
    if (!chips || !activeSet) return;
    const q = activeSet.questions[currentIndex];
    const notes = notesForQuestion(q);
    chips.innerHTML = notes.map(term => `
      <span class="english-note-chip">
        <span>${escapeHtml(term)}</span>
        <button type="button" aria-label="ลบ ${escapeHtml(term)}" data-term="${escapeHtml(term)}">×</button>
      </span>`).join('');
    chips.classList.toggle('empty', !notes.length);
    chips.querySelectorAll('button[data-term]').forEach(button => {
      button.addEventListener('click', () => removeQuestionTerm(button.dataset.term));
    });
  }

  function buildGlossary() {
    const glossary = new Map(Object.entries(EXTRA_GLOSSARY));
    (window.QUIZ_SETS || []).forEach(set => {
      (set.questions || []).forEach(q => {
        (q.vocab || []).forEach(item => {
          const key = normalizeTerm(item.term);
          const meaning = String(item.th || '').trim();
          if (key && meaning && !glossary.has(key)) glossary.set(key, meaning);
        });
      });
    });
    return glossary;
  }

  function aggregateCurrentSetNotes() {
    if (!activeSet) return [];
    const st = ensureNoteState(state());
    const grouped = new Map();
    activeSet.questions.forEach(q => {
      const notes = Array.isArray(st[NOTES_FIELD][q.id]) ? st[NOTES_FIELD][q.id] : [];
      notes.forEach(term => {
        const key = normalizeTerm(term);
        if (!key) return;
        if (!grouped.has(key)) grouped.set(key, { key, term, questions: [] });
        const item = grouped.get(key);
        if (!item.questions.includes(q.id)) item.questions.push(q.id);
      });
    });
    return [...grouped.values()].sort((a, b) => a.term.localeCompare(b.term, 'en'));
  }

  function savedMeaning(key) {
    const st = ensureNoteState(state());
    return String(st[MEANINGS_FIELD][key] || '').trim();
  }

  function suggestedMeaning(key) {
    return buildGlossary().get(key) || '';
  }

  function effectiveMeaning(key) {
    return savedMeaning(key) || suggestedMeaning(key);
  }

  function setMeaning(key, value) {
    const st = ensureNoteState(state());
    const clean = String(value || '').trim().slice(0, 180);
    if (clean) st[MEANINGS_FIELD][key] = clean;
    else delete st[MEANINGS_FIELD][key];
    saveState();
  }

  function ensureSummaryEnglishNotes() {
    const summaryStats = document.getElementById('summaryStats');
    const summarySectionHead = document.querySelector('#summaryView .summary-section-head');
    if (!summaryStats || !summarySectionHead) return null;
    let panel = document.getElementById('englishNotesSummary');
    if (!panel) {
      panel = document.createElement('section');
      panel.id = 'englishNotesSummary';
      panel.className = 'english-notes-summary hidden';
      summarySectionHead.insertAdjacentElement('beforebegin', panel);
    }
    return panel;
  }

  function renderSummaryEnglishNotes() {
    const panel = ensureSummaryEnglishNotes();
    if (!panel || !activeSet) return;
    const notes = aggregateCurrentSetNotes();
    panel.classList.toggle('hidden', !notes.length);
    if (!notes.length) {
      panel.innerHTML = '';
      return;
    }

    panel.innerHTML = `
      <div class="english-notes-summary-head">
        <div>
          <h3>📝 English Notes — ${escapeHtml(activeSet.title)}</h3>
          <p>รวมศัพท์/วลีที่จดไว้ระหว่างทำข้อสอบ · คำแปลเป็น suggestion จาก Vocabulary ในเว็บ และแก้เองได้</p>
        </div>
        <button id="copyEnglishNotesBtn" class="ghost" type="button">คัดลอก English Notes</button>
      </div>
      <div class="english-notes-summary-list">
        ${notes.map(item => {
          const current = effectiveMeaning(item.key);
          const source = savedMeaning(item.key) ? 'แก้เอง' : suggestedMeaning(item.key) ? 'suggested' : 'ยังไม่มีคำแปลในคลัง';
          return `
            <div class="english-note-summary-row">
              <div class="english-note-summary-term">
                <strong>${escapeHtml(item.term)}</strong>
                <span>Q${item.questions.join(' · Q')}</span>
              </div>
              <div class="english-note-summary-meaning">
                <input type="text" value="${escapeHtml(current)}" placeholder="กรอกความหมายภาษาไทย" data-note-key="${escapeHtml(item.key)}">
                <small>${escapeHtml(source)}</small>
              </div>
            </div>`;
        }).join('')}
      </div>`;

    panel.querySelectorAll('input[data-note-key]').forEach(input => {
      input.addEventListener('change', () => {
        setMeaning(input.dataset.noteKey, input.value);
        renderSummaryEnglishNotes();
      });
    });
    panel.querySelector('#copyEnglishNotesBtn')?.addEventListener('click', async () => {
      const text = buildEnglishNotesText(notes);
      try {
        await navigator.clipboard.writeText(text);
        const button = panel.querySelector('#copyEnglishNotesBtn');
        if (button) {
          const old = button.textContent;
          button.textContent = 'คัดลอกแล้ว ✓';
          setTimeout(() => { button.textContent = old; }, 1200);
        }
      } catch {
        window.prompt('Copy English Notes:', text);
      }
    });
  }

  function buildEnglishNotesText(items = aggregateCurrentSetNotes()) {
    if (!items.length) return 'English Notes: ไม่มี';
    const lines = [`English Notes — ${activeSet ? activeSet.title : 'Local Mock'}`];
    items.forEach(item => {
      const meaning = effectiveMeaning(item.key) || 'ยังไม่ระบุคำแปล';
      lines.push(`- ${item.term} = ${meaning} (Q${item.questions.join(', Q')})`);
    });
    return lines.join('\n');
  }

  function injectStyles() {
    if (document.getElementById('englishNotesStyles')) return;
    const style = document.createElement('style');
    style.id = 'englishNotesStyles';
    style.textContent = `
      .english-note-box{margin:10px 0 12px;padding:10px 12px;border:1px solid var(--border,#dfe3e8);border-radius:12px;background:rgba(37,99,235,.035)}
      .english-note-top{display:flex;gap:10px;align-items:center;justify-content:space-between}
      .english-note-top label{display:flex;flex-direction:column;gap:1px;flex:0 0 auto}
      .english-note-top label strong{font-size:.84rem}
      .english-note-top label span{font-size:.72rem;color:var(--muted,#6b7280)}
      .english-note-entry{display:flex;gap:6px;align-items:center;flex:1;max-width:500px}
      .english-note-entry input{width:100%;min-width:0;border:1px solid var(--border,#dfe3e8);border-radius:9px;padding:8px 10px;background:var(--card,#fff);color:inherit;font:inherit}
      .english-note-entry button{padding:8px 10px;white-space:nowrap}
      .english-note-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
      .english-note-chips.empty{display:none}
      .english-note-chip{display:inline-flex;align-items:center;gap:5px;border-radius:999px;padding:4px 7px 4px 9px;background:rgba(37,99,235,.1);font-size:.78rem}
      .english-note-chip button{border:0;background:transparent;color:inherit;cursor:pointer;padding:0 2px;font-size:1rem;line-height:1}
      .qnav.has-english-note{box-shadow:inset 0 -3px 0 rgba(37,99,235,.75)}
      .english-notes-summary{margin:14px 0 18px;border:1px solid var(--border,#dfe3e8);border-radius:14px;padding:14px;background:rgba(37,99,235,.035)}
      .english-notes-summary.hidden{display:none}
      .english-notes-summary-head{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:10px}
      .english-notes-summary-head h3{margin:0 0 3px}
      .english-notes-summary-head p{margin:0;color:var(--muted,#6b7280);font-size:.82rem}
      .english-notes-summary-list{display:flex;flex-direction:column;border:1px solid var(--border,#dfe3e8);border-radius:10px;overflow:hidden;background:var(--card,#fff)}
      .english-note-summary-row{display:grid;grid-template-columns:minmax(160px,.75fr) minmax(240px,1.5fr);gap:10px;padding:9px 10px;border-bottom:1px solid var(--border,#e5e7eb);align-items:center}
      .english-note-summary-row:last-child{border-bottom:0}
      .english-note-summary-term{display:flex;flex-direction:column;gap:2px}
      .english-note-summary-term span,.english-note-summary-meaning small{font-size:.72rem;color:var(--muted,#6b7280)}
      .english-note-summary-meaning{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:8px;align-items:center}
      .english-note-summary-meaning input{width:100%;border:1px solid var(--border,#dfe3e8);border-radius:8px;padding:7px 9px;background:var(--card,#fff);color:inherit;font:inherit}
      @media(max-width:700px){.english-note-top{align-items:stretch;flex-direction:column}.english-note-entry{max-width:none}.english-note-summary-row{grid-template-columns:1fr}.english-note-summary-meaning{grid-template-columns:1fr}.english-notes-summary-head{flex-direction:column}}
    `;
    document.head.appendChild(style);
  }

  // Keep notes through progress Import/Export.
  const originalSanitizeImportedState = sanitizeImportedState;
  sanitizeImportedState = function (set, incoming) {
    const out = originalSanitizeImportedState(set, incoming);
    const source = incoming && typeof incoming === 'object' ? incoming : {};
    const sourceNotes = source[NOTES_FIELD] && typeof source[NOTES_FIELD] === 'object' ? source[NOTES_FIELD] : {};
    const sourceMeanings = source[MEANINGS_FIELD] && typeof source[MEANINGS_FIELD] === 'object' ? source[MEANINGS_FIELD] : {};
    out[NOTES_FIELD] = {};
    set.questions.forEach(q => {
      const values = Array.isArray(sourceNotes[q.id]) ? sourceNotes[q.id] : [];
      const seen = new Set();
      const clean = [];
      values.forEach(raw => {
        const term = cleanTerm(raw);
        const key = normalizeTerm(term);
        if (!term || seen.has(key)) return;
        seen.add(key);
        clean.push(term);
      });
      if (clean.length) out[NOTES_FIELD][q.id] = clean;
    });
    out[MEANINGS_FIELD] = {};
    Object.entries(sourceMeanings).forEach(([key, value]) => {
      const normalized = normalizeTerm(key);
      const meaning = String(value || '').trim().slice(0, 180);
      if (normalized && meaning) out[MEANINGS_FIELD][normalized] = meaning;
    });
    return out;
  };

  const originalMergeSetStates = mergeSetStates;
  mergeSetStates = function (set, localState, importedState) {
    const merged = originalMergeSetStates(set, localState, importedState);
    const local = sanitizeImportedState(set, localState);
    const incoming = sanitizeImportedState(set, importedState);
    merged[NOTES_FIELD] = {};
    set.questions.forEach(q => {
      const values = [...(local[NOTES_FIELD]?.[q.id] || []), ...(incoming[NOTES_FIELD]?.[q.id] || [])];
      const seen = new Set();
      const clean = [];
      values.forEach(raw => {
        const term = cleanTerm(raw);
        const key = normalizeTerm(term);
        if (!term || seen.has(key)) return;
        seen.add(key);
        clean.push(term);
      });
      if (clean.length) merged[NOTES_FIELD][q.id] = clean;
    });
    merged[MEANINGS_FIELD] = { ...(incoming[MEANINGS_FIELD] || {}), ...(local[MEANINGS_FIELD] || {}) };
    return merged;
  };

  const originalRenderQuiz = renderQuiz;
  renderQuiz = function () {
    originalRenderQuiz();
    renderEnglishNoteControl();
  };

  const originalRenderQuestionGrid = renderQuestionGrid;
  renderQuestionGrid = function () {
    originalRenderQuestionGrid();
    if (!activeSet) return;
    const st = ensureNoteState(state());
    const buttons = [...document.querySelectorAll('#questionGrid .qnav')];
    activeSet.questions.forEach((q, index) => {
      const button = buttons[index];
      if (!button) return;
      const hasNotes = Array.isArray(st[NOTES_FIELD][q.id]) && st[NOTES_FIELD][q.id].length > 0;
      button.classList.toggle('has-english-note', hasNotes);
      if (hasNotes) button.title = `${button.title ? `${button.title} · ` : ''}📝 English note`;
    });
  };

  const originalRenderSummaryList = renderSummaryList;
  renderSummaryList = function () {
    originalRenderSummaryList();
    renderSummaryEnglishNotes();
  };

  const originalBuildReviewText = buildReviewText;
  buildReviewText = function () {
    const base = originalBuildReviewText();
    const notes = aggregateCurrentSetNotes();
    return notes.length ? `${base}\n\n${buildEnglishNotesText(notes)}` : base;
  };

  const originalCollectProgressPayload = collectProgressPayload;
  collectProgressPayload = function () {
    const payload = originalCollectProgressPayload();
    payload.appVersion = '8.55';
    payload.features = { ...(payload.features || {}), englishNotes: true };
    return payload;
  };

  injectStyles();
  ensureEnglishNoteControl();
})();
