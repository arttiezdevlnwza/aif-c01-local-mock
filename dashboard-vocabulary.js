(() => {
  const STORAGE_PREFIX = 'aif-opus-practice:v2:';
  const DEFAULT_MEANINGS = {
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
    disclose: 'เปิดเผย / แจ้งให้ทราบ',
    afterward: 'หลังจากนั้น / ภายหลัง',
    'churn outcome': 'ผลลัพธ์ว่าลูกค้ายกเลิกหรือเลิกใช้บริการหรือไม่',
    corpus: 'คลังข้อมูล / ชุดข้อมูลขนาดใหญ่ที่รวบรวมไว้เพื่อวิเคราะห์หรือฝึกโมเดล',
    'downstream tasks': 'งานขั้นถัดไป / งานที่นำผลจากขั้นก่อนหน้าไปใช้ต่อ',
    eligible: 'มีสิทธิ์ / ผ่านเกณฑ์ที่จะถูกนำมาพิจารณา',
    invents: 'แต่งขึ้น / สร้างข้อมูลที่ไม่มีจริง',
    'non-existent fact': 'ข้อเท็จจริงที่ไม่มีอยู่จริง / ข้อมูลที่ถูกแต่งขึ้น',
    prior: 'ก่อนหน้า / ที่เกิดขึ้นหรืออยู่มาก่อน',
    'progressively corrupting data': 'ค่อย ๆ ทำให้ข้อมูลเพี้ยนหรือปน noise มากขึ้นทีละขั้น',
    'tenant metadata': 'metadata ที่บอกว่า record/document เป็นของ tenant หรือลูกค้ากลุ่มใด เพื่อใช้แยกขอบเขตข้อมูล',
'chain records': 'ในประโยคนี้ chain = เครือ/เครือข่าย และ records = บันทึก (เป็นคำกริยา); “A supermarket chain records…” = “เครือซูเปอร์มาร์เก็ตบันทึก…”',
  };

  function normalize(value) {
    return String(value || '').trim().replace(/\s+/g, ' ').toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[char]);
  }

  function loadState(setId) {
    try {
      const state = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}${setId}`) || '{}');
      return state && typeof state === 'object' ? state : {};
    } catch {
      return {};
    }
  }

  function buildGlossary() {
    const glossary = new Map(Object.entries(DEFAULT_MEANINGS));
    (window.QUIZ_SETS || []).forEach(set => {
      (set.questions || []).forEach(question => {
        (question.vocab || []).forEach(item => {
          const key = normalize(item.term);
          const meaning = String(item.th || '').trim();
          if (key && meaning && !glossary.has(key)) glossary.set(key, meaning);
        });
      });
    });
    return glossary;
  }

  function collectAllNotes() {
    const glossary = buildGlossary();
    const grouped = new Map();

    (window.QUIZ_SETS || []).forEach(set => {
      const state = loadState(set.id);
      const notes = state.englishNotes && typeof state.englishNotes === 'object' ? state.englishNotes : {};
      const meanings = state.englishNoteMeanings && typeof state.englishNoteMeanings === 'object' ? state.englishNoteMeanings : {};
      const label = String(set.title || set.id).replace('Local Mock ', '');

      Object.entries(notes).forEach(([questionId, values]) => {
        if (!Array.isArray(values)) return;
        values.forEach(raw => {
          const term = String(raw || '').trim().replace(/\s+/g, ' ');
          const key = normalize(term);
          if (!key) return;
          if (!grouped.has(key)) grouped.set(key, { key, term, meaning: '', refs: [] });
          const item = grouped.get(key);
          const saved = String(meanings[key] || '').trim();
          if (!item.meaning && saved) item.meaning = saved;
          const ref = `${label} Q${questionId}`;
          if (!item.refs.includes(ref)) item.refs.push(ref);
        });
      });
    });

    grouped.forEach(item => {
      if (!item.meaning) item.meaning = glossary.get(item.key) || 'ยังไม่มีคำแปลในคลัง';
    });

    return [...grouped.values()].sort((a, b) => a.term.localeCompare(b.term, 'en'));
  }

  function ensurePanel() {
    let root = document.getElementById('dashboardEnglishGlossary');
    if (root) return root;

    const reviewQueue = document.getElementById('dashboardReviewQueue')?.closest('.dashboard-panel');
    const dashboard = document.getElementById('dashboardView');
    if (!dashboard) return null;

    const section = document.createElement('section');
    section.className = 'dashboard-panel';
    section.id = 'dashboardEnglishGlossaryPanel';
    section.innerHTML = `
      <div class="dashboard-panel-head">
        <div>
          <h3>📝 English Notes Glossary — ทุก Set</h3>
          <p class="muted">รวมศัพท์/วลีที่จดไว้จากทุก Local Mock พร้อมคำแปล และรวมคำซ้ำให้เป็นรายการเดียว</p>
        </div>
      </div>
      <div id="dashboardEnglishGlossary"></div>`;

    if (reviewQueue) reviewQueue.insertAdjacentElement('beforebegin', section);
    else dashboard.appendChild(section);
    return section.querySelector('#dashboardEnglishGlossary');
  }

  function injectStyles() {
    if (document.getElementById('dashboardVocabularyStyles')) return;
    const style = document.createElement('style');
    style.id = 'dashboardVocabularyStyles';
    style.textContent = `
      .dashboard-vocab-meta{margin:0 0 10px;color:var(--muted,#6b7280);font-size:.82rem}
      .dashboard-vocab-list{display:flex;flex-direction:column;border:1px solid var(--border,#e5e7eb);border-radius:10px;overflow:hidden;background:var(--card,#fff)}
      .dashboard-vocab-row{display:grid;grid-template-columns:minmax(150px,.75fr) minmax(260px,1.5fr) minmax(150px,.8fr);gap:12px;padding:9px 10px;border-bottom:1px solid var(--border,#e5e7eb);align-items:start}
      .dashboard-vocab-row:last-child{border-bottom:0}
      .dashboard-vocab-row strong{overflow-wrap:anywhere}
      .dashboard-vocab-meaning{line-height:1.45}
      .dashboard-vocab-refs{color:var(--muted,#6b7280);font-size:.75rem;line-height:1.4}
      @media(max-width:760px){.dashboard-vocab-row{grid-template-columns:1fr}.dashboard-vocab-refs{margin-top:-4px}}
    `;
    document.head.appendChild(style);
  }

  function renderGlossary() {
    injectStyles();
    const root = ensurePanel();
    if (!root) return;
    const items = collectAllNotes();

    if (!items.length) {
      root.innerHTML = '<p class="muted">ยังไม่มี English Notes ใน progress ของ browser เครื่องนี้</p>';
      return;
    }

    root.innerHTML = `
      <p class="dashboard-vocab-meta">รวม ${items.length} คำ/วลีจาก progress ปัจจุบัน</p>
      <div class="dashboard-vocab-list">
        ${items.map(item => `
          <div class="dashboard-vocab-row">
            <strong>${escapeHtml(item.term)}</strong>
            <span class="dashboard-vocab-meaning">${escapeHtml(item.meaning)}</span>
            <span class="dashboard-vocab-refs">${escapeHtml(item.refs.join(' · '))}</span>
          </div>`).join('')}
      </div>`;
  }

  const originalRender = window.renderStudyDashboard;
  if (typeof originalRender === 'function') {
    window.renderStudyDashboard = function () {
      originalRender();
      renderGlossary();
    };
  }

  document.getElementById('dashboardBtn')?.addEventListener('click', () => {
    setTimeout(renderGlossary, 0);
  });
})();
