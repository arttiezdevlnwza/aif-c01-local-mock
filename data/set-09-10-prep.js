(() => {
  const TARGET_SET_IDS = new Set(["local-set-9", "local-set-10"]);

  // Keep Vocabulary focused on English used in the stem/scenario only.
  // Do not translate answer-choice terms because that can leak the answer.
  const VOCABULARY = [
    ["logistics", "งานโลจิสติกส์/การขนส่ง"],
    ["shipment", "พัสดุ/การขนส่งสินค้า"],
    ["carrier", "ผู้ให้บริการขนส่ง"],
    ["genuinely", "จริง ๆ / อย่างแท้จริง"],
    ["diagnosis", "การวินิจฉัย/การระบุสาเหตุของปัญหา"],
    ["intermittent", "มาเป็นช่วง ๆ ไม่ต่อเนื่อง"],
    ["recomputing", "การคำนวณใหม่"],
    ["outlier", "ค่าที่ผิดปกติหรือหลุดจากกลุ่ม"],
    ["dominated", "ถูกครอบ/ถูกกลบโดยสิ่งที่มีสัดส่วนมากกว่า"],
    ["majority", "กลุ่มส่วนใหญ่"],
    ["curated", "ถูกคัดเลือกและจัดเตรียมไว้"],
    ["from scratch", "เริ่มทำใหม่ตั้งแต่ต้น"],
    ["iteratively", "ทำซ้ำทีละรอบ"],
    ["emerges", "ค่อย ๆ ปรากฏ/เกิดขึ้น"],
    ["submitted", "ถูกส่งเข้าไป"],
    ["expose", "เปิดให้เข้าถึง/นำออกมาให้ใช้"],
    ["discoverable", "ค้นพบและเรียกใช้ได้"],
    ["confidential", "เป็นความลับ"],
    ["sustained", "ต่อเนื่องเป็นเวลานาน"],
    ["predictable", "คาดการณ์ได้"],
    ["naturally occurring", "เกิดขึ้นเองตามธรรมชาติ"],
    ["fraudulent", "ที่เป็นการทุจริต"],
    ["archived", "ที่เก็บไว้เป็นข้อมูลเก่า/ข้อมูลถาวร"],
    ["explicit", "ระบุไว้อย่างชัดเจน"],
    ["autonomously", "ตัดสินใจหรือทำงานได้เอง"],
    ["immutable", "แก้ไขเปลี่ยนแปลงไม่ได้"],
    ["reconstruct", "สร้างหรืออนุมานย้อนกลับขึ้นมาใหม่"],
    ["disclose", "เปิดเผย/แจ้งให้ทราบ"],
    ["obligation", "ข้อผูกพัน/หน้าที่ที่ต้องปฏิบัติ"],
    ["prohibited", "ถูกห้าม"],
    ["jurisdiction", "เขตอำนาจทางกฎหมาย"],
    ["baseline", "ค่าฐานสำหรับใช้เปรียบเทียบ"],
    ["degrades", "แย่ลง/เสื่อมลง"],
    ["degrade", "แย่ลง/เสื่อมลง"],
    ["repeatedly", "ซ้ำ ๆ หลายครั้ง"],
    ["repeated", "ซ้ำ"],
    ["consistent", "สม่ำเสมอ"],
    ["inconsistent", "ไม่สม่ำเสมอ"],
    ["relevant", "เกี่ยวข้อง"],
    ["rare", "เกิดน้อย/มีสัดส่วนน้อย"],
    ["underlying", "ที่อยู่เบื้องล่าง/โครงสร้างพื้นฐานรองรับ"],
    ["oversight", "การกำกับดูแลโดยมนุษย์"],
    ["recourse", "ช่องทางให้ผู้ได้รับผลกระทบโต้แย้งหรือขอทบทวน"],
    ["rubric", "เกณฑ์ให้คะแนน/ประเมิน"]
  ];

  const CHOICE_PATCHES = {
    "local-set-9:32": {
      A: "Prompt Optimization",
      B: "Prompt Management",
      C: "Prompt Caching",
      D: "Prompt Flows"
    },
    "local-set-9:44": {
      A: "Amazon Aurora PostgreSQL",
      B: "Amazon OpenSearch Serverless",
      C: "Amazon DynamoDB",
      D: "AWS Glue Data Catalog"
    },
    "local-set-9:64": {
      A: "Use a VPC endpoint/AWS PrivateLink for private service connectivity; a NAT Gateway reaches public service endpoints",
      B: "A NAT Gateway is sufficient because the workload originates in a private subnet",
      C: "Use TLS through the NAT Gateway because encryption makes the network path private",
      D: "Use an IAM policy because restricting Bedrock permissions also makes the network path private"
    },
    "local-set-10:64": {
      A: "Keep service traffic on private connectivity without using the public internet path",
      B: "Encrypt service traffic in transit with TLS",
      C: "Restrict model access with least-privilege IAM permissions",
      D: "Keep data stored and processed only in approved geographic locations"
    }
  };

  const normalize = (value) => String(value || "").toLowerCase();

  for (const set of window.QUIZ_SETS || []) {
    if (!TARGET_SET_IDS.has(set.id)) continue;

    for (const question of set.questions || []) {
      const patchKey = `${set.id}:${question.id}`;
      if (CHOICE_PATCHES[patchKey]) {
        question.choices = { ...CHOICE_PATCHES[patchKey] };
      }

      // Fix Set 9 Q32: versioning/rollback belongs to Prompt Management.
      if (patchKey === "local-set-9:32") {
        question.answer = ["B"];
        question.explanation = "Prompt Management จัด prompt templates/versions centrally และรองรับการอ้างอิงเวอร์ชันที่ immutable เพื่อควบคุมการเปลี่ยนแปลงหรือ rollback. Prompt Optimization ใช้ช่วย rewrite/improve prompt.";
      }

      const stem = normalize(question.question);
      const choiceText = normalize(Object.values(question.choices || {}).join(" "));

      // Existing vocab must come from the stem and must not be an answer-choice term.
      question.vocab = (question.vocab || []).filter((item) => {
        const term = normalize(item.term);
        return term && stem.includes(term) && !choiceText.includes(term);
      });

      const existingTerms = new Set(
        question.vocab.map((item) => normalize(item.term))
      );

      for (const [term, th] of VOCABULARY) {
        const normalizedTerm = normalize(term);
        if (
          stem.includes(normalizedTerm) &&
          !choiceText.includes(normalizedTerm) &&
          !existingTerms.has(normalizedTerm)
        ) {
          question.vocab.push({ term, th });
          existingTerms.add(normalizedTerm);
        }
      }
    }
  }
})();

// Extra review signal for English comprehension. This is intentionally kept
// separate from correctness and from the existing yellow confidence flag.
window.addEventListener('load', () => {
  const STORAGE_FIELD = 'englishUnclear';

  function englishUnclear(question, st = state()) {
    return !!(st[STORAGE_FIELD] && st[STORAGE_FIELD][question.id]);
  }

  function ensureField(st) {
    if (!st[STORAGE_FIELD] || typeof st[STORAGE_FIELD] !== 'object') {
      st[STORAGE_FIELD] = {};
    }
    return st[STORAGE_FIELD];
  }

  function setEnglishUnclear(value) {
    if (!activeSet) return;
    const question = activeSet.questions[currentIndex];
    const st = state();
    ensureField(st)[question.id] = !!value;
    const label = document.getElementById('englishUnclearLabel');
    if (label) label.classList.toggle('active', !!value);
    saveState();
  }

  const reviewRow = document.querySelector('.review-flag-row');
  if (reviewRow && !document.getElementById('englishUnclearCheck')) {
    const label = document.createElement('label');
    label.id = 'englishUnclearLabel';
    label.className = 'review-flag';
    label.htmlFor = 'englishUnclearCheck';
    label.innerHTML = `
      <input id="englishUnclearCheck" type="checkbox">
      <span><strong>📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ</strong><small>ติ๊กเมื่อศัพท์หรือประโยคทำให้ตีความโจทย์ไม่ออก แม้จะรู้ concept อยู่ก็ตาม</small></span>`;
    reviewRow.appendChild(label);
    document.getElementById('englishUnclearCheck').addEventListener('change', event => {
      setEnglishUnclear(event.target.checked);
    });
  }

  // Preserve this flag when progress is imported/merged.
  const originalSanitizeImportedState = sanitizeImportedState;
  sanitizeImportedState = function(set, incoming) {
    const out = originalSanitizeImportedState(set, incoming);
    out[STORAGE_FIELD] = {};
    const src = incoming && incoming[STORAGE_FIELD] && typeof incoming[STORAGE_FIELD] === 'object'
      ? incoming[STORAGE_FIELD]
      : {};
    set.questions.forEach(question => {
      if (src[question.id]) out[STORAGE_FIELD][question.id] = true;
    });
    return out;
  };

  const originalQuestionHasData = questionHasData;
  questionHasData = function(st, question) {
    return originalQuestionHasData(st, question) || !!(st[STORAGE_FIELD] && st[STORAGE_FIELD][question.id]);
  };

  const originalMergeSetStates = mergeSetStates;
  mergeSetStates = function(set, localState, importedState) {
    const merged = originalMergeSetStates(set, localState, importedState);
    const local = sanitizeImportedState(set, localState);
    const incoming = sanitizeImportedState(set, importedState);
    merged[STORAGE_FIELD] = { ...local[STORAGE_FIELD], ...incoming[STORAGE_FIELD] };
    return merged;
  };

  // Keep the checkbox synchronized whenever the question changes.
  const originalRenderQuiz = renderQuiz;
  renderQuiz = function() {
    originalRenderQuiz();
    const checkbox = document.getElementById('englishUnclearCheck');
    const label = document.getElementById('englishUnclearLabel');
    if (!checkbox || !activeSet) return;
    const marked = englishUnclear(activeSet.questions[currentIndex]);
    checkbox.checked = marked;
    if (label) label.classList.toggle('active', marked);
  };

  // Include the signal in the text copied for ChatGPT review.
  const originalBuildReviewText = buildReviewText;
  buildReviewText = function() {
    let text = originalBuildReviewText();
    if (!activeSet) return text;
    const st = state();
    const marked = activeSet.questions.filter(question => englishUnclear(question, st));
    text = text.replace(
      /Marked for explanation: (\d+)/,
      match => `${match}\nMarked English unclear: ${marked.length}`
    );
    marked.forEach(question => {
      const pattern = new RegExp(`^(Q${question.id}[^\\n]*?)(\\s+\\|\\s+Domain\\s+)`, 'm');
      text = text.replace(pattern, '$1 | 📘 ENGLISH UNCLEAR$2');
    });
    return text;
  };

  // Show the language marker in per-set Summary cards.
  const originalRenderSummaryList = renderSummaryList;
  renderSummaryList = function() {
    originalRenderSummaryList();
    if (!activeSet) return;
    const st = state();
    document.querySelectorAll('#summaryList .wrong-summary-card').forEach(card => {
      const qnum = card.querySelector('.wrong-qnum');
      const tags = card.querySelector('.summary-card-tags');
      if (!qnum || !tags) return;
      const match = qnum.textContent.match(/(\d+)/);
      if (!match) return;
      const question = activeSet.questions.find(item => item.id === Number(match[1]));
      if (!question || !englishUnclear(question, st)) return;
      const marker = document.createElement('span');
      marker.className = 'status-pill status-explain';
      marker.textContent = '📘 English unclear';
      tags.appendChild(marker);
    });
  };

  // Add a count to the per-set Summary stats.
  const originalOpenSummary = openSummary;
  openSummary = function() {
    originalOpenSummary();
    if (!activeSet || document.getElementById('englishUnclearSummaryStat')) return;
    const st = state();
    const count = activeSet.questions.filter(question => englishUnclear(question, st)).length;
    const root = document.getElementById('summaryStats');
    if (!root) return;
    const item = document.createElement('div');
    item.id = 'englishUnclearSummaryStat';
    item.className = 'summary-stat explain-stat';
    item.innerHTML = `<strong>${count}</strong><span>ไม่เข้าใจ English</span>`;
    root.appendChild(item);
  };
});
