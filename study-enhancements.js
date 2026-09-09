(() => {
  const ENGLISH_FIELD = 'englishUnclear';

  function ensureEnglishMap(st) {
    if (!st[ENGLISH_FIELD] || typeof st[ENGLISH_FIELD] !== 'object') st[ENGLISH_FIELD] = {};
    return st[ENGLISH_FIELD];
  }

  function englishUnclear(q, st = state()) {
    return !!(st && st[ENGLISH_FIELD] && st[ENGLISH_FIELD][q.id]);
  }

  function setEnglishUnclear(value) {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const st = state();
    ensureEnglishMap(st)[q.id] = !!value;
    const label = document.getElementById('englishFlagLabel');
    if (label) label.classList.toggle('active', !!value);
    renderQuestionGrid();
    saveState();
  }

  function ensureEnglishControl() {
    const row = document.querySelector('.review-flag-row');
    if (!row || document.getElementById('englishUnclearCheck')) return;

    const label = document.createElement('label');
    label.id = 'englishFlagLabel';
    label.className = 'review-flag english-review-flag';
    label.htmlFor = 'englishUnclearCheck';
    label.innerHTML = `
      <input id="englishUnclearCheck" type="checkbox">
      <span><strong>📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ</strong><small>ติ๊กเมื่อศัพท์หรือโครงสร้างประโยคทำให้ตีความโจทย์ไม่ออก แม้จะรู้ concept อยู่ก็ตาม</small></span>`;
    row.appendChild(label);

    label.querySelector('input').addEventListener('change', event => setEnglishUnclear(event.target.checked));
  }

  function syncEnglishControl() {
    ensureEnglishControl();
    const checkbox = document.getElementById('englishUnclearCheck');
    const label = document.getElementById('englishFlagLabel');
    if (!checkbox || !activeSet) return;
    const value = englishUnclear(activeSet.questions[currentIndex], state());
    checkbox.checked = value;
    label?.classList.toggle('active', value);
  }

  const originalRenderQuiz = renderQuiz;
  renderQuiz = function () {
    originalRenderQuiz();
    syncEnglishControl();
  };

  const originalRenderQuestionGrid = renderQuestionGrid;
  renderQuestionGrid = function () {
    originalRenderQuestionGrid();
    if (!activeSet) return;
    const st = state();
    const buttons = [...document.querySelectorAll('#questionGrid .qnav')];
    activeSet.questions.forEach((q, index) => {
      const button = buttons[index];
      if (!button) return;
      const marked = englishUnclear(q, st);
      button.classList.toggle('english-unclear', marked);
      if (marked) button.title = `${button.title ? `${button.title} · ` : ''}📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ`;
    });
  };

  const originalRenderSummaryList = renderSummaryList;
  renderSummaryList = function () {
    originalRenderSummaryList();
    if (!activeSet) return;
    const st = state();
    const items = activeSet.questions.map((q, i) => ({
      q,
      i,
      ok: isCorrect(q, currentAnswer(q, st)),
      flag: needsExplanation(q, st),
      english: englishUnclear(q, st)
    }));
    const shown = summaryFilter === 'wrong'
      ? items.filter(item => !item.ok)
      : summaryFilter === 'explain'
        ? items.filter(item => item.flag)
        : items;
    const cards = [...document.querySelectorAll('#summaryList .wrong-summary-card')];
    shown.forEach((item, index) => {
      if (!item.english) return;
      const tags = cards[index]?.querySelector('.summary-card-tags');
      if (tags && !tags.querySelector('.status-english')) {
        tags.insertAdjacentHTML('beforeend', '<span class="status-pill status-english">📘 English unclear</span>');
      }
    });
  };

  const originalBuildReviewText = buildReviewText;
  buildReviewText = function () {
    const text = originalBuildReviewText();
    if (!activeSet) return text;
    const st = state();
    let currentQ = null;
    const output = [];

    text.split('\n').forEach(line => {
      const match = line.match(/^Q(\d+)\s/);
      if (match) {
        currentQ = activeSet.questions.find(q => Number(q.id) === Number(match[1])) || null;
        if (currentQ && englishUnclear(currentQ, st) && !line.includes('ENGLISH UNCLEAR')) {
          line += ' | 📘 ENGLISH UNCLEAR';
        }
      }
      output.push(line);
      if (currentQ && englishUnclear(currentQ, st) && line.startsWith('Question:')) {
        output.push('Language: 📘 ไม่เข้าใจโจทย์ภาษาอังกฤษ');
      }
    });
    return output.join('\n');
  };

  const originalSanitizeImportedState = sanitizeImportedState;
  sanitizeImportedState = function (set, incoming) {
    const out = originalSanitizeImportedState(set, incoming);
    const source = incoming && typeof incoming === 'object' && incoming[ENGLISH_FIELD] && typeof incoming[ENGLISH_FIELD] === 'object'
      ? incoming[ENGLISH_FIELD]
      : {};
    out[ENGLISH_FIELD] = {};
    set.questions.forEach(q => {
      if (source[q.id]) out[ENGLISH_FIELD][q.id] = true;
    });
    return out;
  };

  const originalQuestionHasData = questionHasData;
  questionHasData = function (st, q) {
    return originalQuestionHasData(st, q) || !!(st && st[ENGLISH_FIELD] && st[ENGLISH_FIELD][q.id]);
  };

  const originalMergeSetStates = mergeSetStates;
  mergeSetStates = function (set, localState, importedState) {
    const merged = originalMergeSetStates(set, localState, importedState);
    const local = sanitizeImportedState(set, localState);
    const incoming = sanitizeImportedState(set, importedState);
    merged[ENGLISH_FIELD] = {};
    set.questions.forEach(q => {
      if (local[ENGLISH_FIELD]?.[q.id] || incoming[ENGLISH_FIELD]?.[q.id]) merged[ENGLISH_FIELD][q.id] = true;
    });
    return merged;
  };

  const originalRenderProgressToolStatus = renderProgressToolStatus;
  renderProgressToolStatus = function () {
    originalRenderProgressToolStatus();
    const el = document.getElementById('progressToolStatus');
    if (!el) return;
    let count = 0;
    sets.forEach(set => {
      const stored = storedStateForSet(set);
      if (!stored || !stored[ENGLISH_FIELD]) return;
      count += Object.values(stored[ENGLISH_FIELD]).filter(Boolean).length;
    });
    if (count) el.textContent += ` · 📘 ${count} ข้อ`;
  };

  const originalCollectProgressPayload = collectProgressPayload;
  collectProgressPayload = function () {
    const payload = originalCollectProgressPayload();
    payload.appVersion = '8.53';
    payload.features = { ...(payload.features || {}), englishUnclear: true, reviewedDashboard: true };
    return payload;
  };

  window.isEnglishUnclear = (setId, questionId) => {
    const set = sets.find(item => item.id === setId);
    if (!set) return false;
    const st = storedStateForSet(set) || {};
    return !!(st[ENGLISH_FIELD] && st[ENGLISH_FIELD][questionId]);
  };
})();

(() => {
  let reviewOrigin = null;

  const GUIDES = [
    { match: ['precision'], detail: 'Precision ดูเฉพาะสิ่งที่โมเดลทายว่าเป็น positive แล้วถามว่าในกลุ่มนั้นถูกจริงกี่ส่วน จึงเหมาะเมื่อ false positive มีต้นทุนสูง', cue: 'Precision = ทายว่าใช่แล้ว ถูกจริงแค่ไหน' },
    { match: ['recall'], detail: 'Recall ดูจาก positive ที่มีอยู่จริงทั้งหมด แล้วถามว่าโมเดลจับเจอได้กี่ส่วน จึงสำคัญเมื่อการพลาดของจริงมีต้นทุนสูง', cue: 'Recall = ของจริงทั้งหมด จับได้กี่ส่วน' },
    { match: ['f1 score'], detail: 'F1 เป็น harmonic mean ของ Precision และ Recall ใช้เมื่ออยากสมดุลทั้ง false positive และ false negative โดยเฉพาะข้อมูลที่ class ไม่สมดุล', cue: 'F1 = Precision + Recall ต้องดีทั้งคู่' },
    { match: ['rmse'], detail: 'RMSE ยกกำลังสอง error ก่อนเฉลี่ย จึงลงโทษ error ใหญ่แรงกว่า และผลสุดท้ายกลับมาอยู่ในหน่วยเดียวกับ target', cue: 'RMSE = แพ้ error ใหญ่' },
    { match: ['mae'], detail: 'MAE เฉลี่ยขนาดความผิดพลาดแบบ absolute จึงอ่านง่ายในหน่วยเดียวกับ target และไวต่อ outlier น้อยกว่า RMSE', cue: 'MAE = ผิดเฉลี่ยกี่หน่วย' },
    { match: ['r-squared', 'r²'], detail: 'R-squared อธิบายว่าสัดส่วนความแปรปรวนของ target ถูกโมเดลอธิบายได้มากแค่ไหน ค่าใกล้ 1 โดยทั่วไปหมายถึงอธิบาย variation ได้มาก', cue: 'R² = อธิบาย variance ได้แค่ไหน' },
    { match: ['clustering'], detail: 'Clustering เป็น unsupervised learning: ไม่มี target label แล้วให้ algorithm ค้นหากลุ่มที่มีลักษณะคล้ายกันเอง', cue: 'ไม่มี label + หากลุ่ม = Clustering' },
    { match: ['asynchronous inference'], detail: 'Asynchronous Inference เหมาะกับ request เป็นรายงานที่ payload ใหญ่หรือใช้เวลานาน ผู้เรียกส่งงานก่อนแล้วกลับมารับผลทีหลัง', cue: 'ราย request ใหญ่/นาน + รับผลทีหลัง = Async' },
    { match: ['batch transform'], detail: 'Batch Transform เหมาะกับข้อมูลก้อนใหญ่แบบ offline ไม่มีผู้ใช้รอ response ราย request เช่น score หลายล้าน record ข้ามคืน', cue: 'กองข้อมูล offline = Batch' },
    { match: ['serverless inference'], detail: 'Serverless Inference เหมาะกับ traffic มาเป็นช่วง ๆ หรือคาดเดายาก และไม่ต้องการ provision instance ไว้ตลอดเวลา', cue: 'traffic ไม่สม่ำเสมอ + ไม่อยากดู server = Serverless' },
    { match: ['feature store'], detail: 'Feature Store เป็นแหล่งกลางสำหรับจัดเก็บและ reuse features ให้ training และ inference ใช้ definition เดียวกัน ลดการคำนวณซ้ำ', cue: 'Feature กลาง ใช้ซ้ำทั้ง train/inference' },
    { match: ['sagemaker canvas'], detail: 'SageMaker Canvas เป็น visual/no-code ML สำหรับ analyst ที่ต้องการเตรียมข้อมูล สร้าง prediction และทดลองโมเดลโดยไม่ต้องเขียน training code เป็นหลัก', cue: 'Analyst + visual/no-code ML = Canvas' },
    { match: ['data wrangler'], detail: 'SageMaker Data Wrangler เน้น data preparation แบบ visual เช่น clean, transform, inspect และตรวจ data-quality issues ก่อน training', cue: 'เตรียม/แปลงข้อมูลแบบ visual = Data Wrangler' },
    { match: ['model registry'], detail: 'Model Registry จัดการ model versions/packages และสถานะ approval เพื่อควบคุมการ promote โมเดลไปยัง environment ถัดไป', cue: 'Version + approval ของ model = Registry' },
    { match: ['ground truth'], detail: 'SageMaker Ground Truth ใช้สร้างและจัด workflow สำหรับ labeling training data โดยคนหรือระบบช่วย label', cue: 'Label ข้อมูลก่อน train = Ground Truth' },
    { match: ['tokenization'], detail: 'Tokenization แบ่งข้อความเป็นหน่วยที่โมเดลรับได้และ map หน่วยเหล่านั้นเป็น token IDs ก่อนส่งเข้าโมเดล', cue: 'Text → token/ID = Tokenization' },
    { match: ['embedding'], detail: 'Embedding แทนข้อความหรือข้อมูลเป็น vector ที่เก็บความสัมพันธ์เชิงความหมาย ทำให้ของที่ความหมายใกล้กันอยู่ใกล้กันใน vector space', cue: 'Meaning → vector = Embedding' },
    { match: ['agentcore runtime'], detail: 'AgentCore Runtime คือ managed execution/hosting environment สำหรับรัน agent application ใน production รวมแนวคิดด้าน session isolation และ runtime lifecycle', cue: 'Agent รันที่ไหน = Runtime' },
    { match: ['agentcore gateway'], detail: 'AgentCore Gateway ทำให้ API, Lambda หรือ capability ภายนอกถูก expose เป็น tools ที่ agent ค้นพบและเรียกใช้ได้อย่างเป็นระบบ', cue: 'Agent เรียก tool ภายนอก = Gateway' },
    { match: ['agentcore observability'], detail: 'AgentCore Observability ใช้ดู traces, metrics, latency และ tool calls เพื่อ monitor/debug พฤติกรรมของ agent ใน production', cue: 'Trace/metric/debug agent = Observability' },
    { match: ['resources'], detail: 'ใน MCP, Resources คือข้อมูลหรือ context ที่ client อ่านได้ เช่นไฟล์ เอกสาร หรือ database records ส่วน Tools คือ action/function ที่ client เรียกให้ทำงาน', cue: 'อ่านข้อมูล = Resource · สั่งทำงาน = Tool' },
    { match: ['prompt management'], detail: 'Prompt Management ใช้เก็บ template, variables และ versions แบบรวมศูนย์ ทำให้ reuse, version และ rollback prompt ได้โดยไม่ hardcode หลายที่', cue: 'เก็บ/version/rollback prompt = Management' },
    { match: ['prompt optimization'], detail: 'Prompt Optimization เน้นช่วยปรับหรือ rewrite prompt เพื่อให้ผลลัพธ์ดีขึ้น ต่างจาก Prompt Management ที่เน้นจัดเก็บและ version', cue: 'ปรับ prompt ให้ดีขึ้น = Optimization' },
    { match: ['prompt caching'], detail: 'Prompt Caching ลดการประมวลผลซ้ำเมื่อมี prompt prefix/context ขนาดใหญ่ที่ถูก reuse หลาย request ช่วยลด latency/cost ในส่วนที่รองรับ', cue: 'Context ซ้ำเยอะ = Caching' },
    { match: ['contextual grounding'], detail: 'Contextual Grounding ตรวจว่าคำตอบหรือ claim ได้รับการสนับสนุนจาก context/source ที่ให้มาหรือไม่ เหมาะกับ RAG และงานที่ต้องยึดเอกสารอ้างอิง', cue: 'Source รองรับคำตอบไหม = Grounding' },
    { match: ['automated reasoning'], detail: 'Automated Reasoning ใช้ formal rules/logic เพื่อตรวจว่าข้อสรุปสอดคล้องตามกฎที่กำหนดหรือไม่ ไม่ได้เน้นว่าคำตอบอ้างอิงเอกสารได้หรือเปล่า', cue: 'Formal rule/logic = Automated Reasoning' },
    { match: ['permissions boundary'], detail: 'Permissions Boundary ไม่ได้ grant สิทธิ์เอง แต่กำหนดเพดานสูงสุดว่า identity จะมี permission ได้ไม่เกินอะไร แม้ identity policy จะให้กว้างกว่า', cue: 'Boundary = Ceiling ไม่ใช่ Grant' },
    { match: ['identity-based policy'], detail: 'Identity-based policy ผูกกับ user/role/group และเป็นหนึ่งในกลไกที่ grant permission ให้ identity โดยตรง ภายใต้ guardrail อื่น ๆ ที่อาจจำกัดเพิ่มเติม', cue: 'Identity Policy = Grant' },
    { match: ['service control policy', 'scp'], detail: 'SCP เป็น permission guardrail ระดับ AWS Organizations/account กำหนดเพดานสิทธิ์ของ member accounts แต่ไม่ grant permission ด้วยตัวเอง', cue: 'SCP = Ceiling ระดับ Organization' },
    { match: ['amazon macie'], detail: 'Amazon Macie ใช้ discover และ classify sensitive data ใน Amazon S3 เช่น PII หรือข้อมูลการเงิน ไม่ใช่บริการจัดการ encryption keys', cue: 'หา sensitive data ใน S3 = Macie' },
    { match: ['aws kms'], detail: 'AWS KMS ใช้สร้างและจัดการ encryption keys รวมถึงควบคุมการใช้งาน key สำหรับเข้ารหัสข้อมูล at rest', cue: 'Key/Encryption = KMS' },
    { match: ['aws cloudtrail'], detail: 'CloudTrail บันทึก API activity ว่าใครเรียก action อะไร เมื่อไร และกับ resource ใด จึงเป็นจุดแรกสำหรับ audit API calls', cue: 'Who did what API when = CloudTrail' },
    { match: ['aws artifact'], detail: 'AWS Artifact เป็นแหล่งดาวน์โหลดเอกสาร compliance ที่ AWS จัดทำ เช่น SOC reports และ certification documents', cue: 'AWS compliance documents = Artifact' },
    { match: ['nist ai rmf'], detail: 'NIST AI RMF เป็นกรอบบริหารความเสี่ยง AI โดยมีแกนจำหลัก Govern, Map, Measure, Manage', cue: 'NIST AI RMF = Govern · Map · Measure · Manage' },
    { match: ['iso/iec 27001', 'iso 27001'], detail: 'ISO/IEC 27001 เป็นมาตรฐานสำหรับ Information Security Management System (ISMS) ครอบคลุม policy, risk treatment และ security controls ขององค์กร', cue: 'ISMS = ISO 27001' },
    { match: ['cloud adoption framework for ai', 'caf-ai'], detail: 'AWS CAF-AI ใช้เป็น guidance สำหรับ enterprise AI adoption/transformation ครอบคลุม strategy, people, governance, platform และ operating model', cue: 'Enterprise AI adoption = CAF-AI' },
    { match: ['limited risk'], detail: 'ในกรอบ EU AI Act แบบที่ข้อสอบใช้ Limited Risk เชื่อมกับ transparency obligations บางประเภท เช่น chatbot ต้องเปิดเผยว่าผู้ใช้กำลังโต้ตอบกับ AI', cue: 'ต้อง disclose ว่าเป็น AI = Limited Risk' },
    { match: ['high risk'], detail: 'High Risk ไม่ได้แปลว่าห้ามใช้ แต่เป็น use case ที่อนุญาตภายใต้ข้อกำกับและข้อผูกพันที่เข้มงวดกว่า', cue: 'High Risk = ใช้ได้ แต่ควบคุมเข้ม' },
    { match: ['unacceptable risk'], detail: 'Unacceptable Risk คือ use case ที่เข้าข่าย prohibited practice ตามกรอบโจทย์ จึงต่างจาก High Risk ที่ยังสามารถใช้ภายใต้ข้อกำกับได้', cue: 'Prohibited = Unacceptable Risk' },
    { match: ['metadata filter', 'metadata filtering'], detail: 'Metadata Filtering จำกัด scope/eligibility ของเอกสารก่อนหรือระหว่าง retrieval เช่น tenant, department, country หรือ date ส่วน reranking ทำหน้าที่เรียง candidate ที่มีอยู่แล้ว', cue: 'จำกัดว่า “ดึงอะไรได้” = Metadata Filter' },
    { match: ['reranking'], detail: 'Reranking รับ candidate ที่ retrieve มาแล้วและจัดอันดับใหม่ เพื่อให้ passage ที่ relevant กว่าขึ้นมาก่อนส่งเข้า context ของโมเดล', cue: 'ได้ candidate มาแล้ว เรียงใหม่ = Reranking' },
    { match: ['retrieval relevance'], detail: 'Retrieval relevance วัดว่าเอกสาร/context ที่ retrieve มาตอบโจทย์ผู้ใช้จริงหรือไม่ ถ้าเอกสารผิดเรื่อง ปัญหาอยู่ที่ retrieval ก่อน generation', cue: 'Docs ถูกเรื่องไหม = Retrieval relevance' },
    { match: ['generation faithfulness', 'groundedness'], detail: 'Generation faithfulness/groundedness วัดว่าคำตอบสุดท้ายยึดตาม context ที่ให้มาหรือไม่ ถ้า retrieve ถูกแต่คำตอบแต่ง claim เพิ่ม ปัญหาอยู่ที่ generation', cue: 'Docs ถูก แต่คำตอบหลุด = Faithfulness' },
    { match: ['interpretability'], detail: 'Interpretability เน้นว่าตัวโครงสร้าง/logic ของโมเดลเองเข้าใจได้โดยตรง ส่วน explainability สามารถใช้วิธี post-hoc มาช่วยอธิบายโมเดลที่ซับซ้อนกว่า', cue: 'เข้าใจตัวโมเดลเอง = Interpretability · อธิบายภายหลัง = Explainability' },
    { match: ['amazon augmented ai', 'a2i'], detail: 'Amazon A2I ใช้เพิ่ม human review ใน inference workflow เช่นส่ง prediction ที่ confidence ต่ำให้คนตรวจ ก่อนเอาผลไป action ต่อ', cue: 'Human review หลัง inference = A2I' },
    { match: ['vpc endpoint', 'privatelink'], detail: 'VPC endpoint/AWS PrivateLink ใช้เข้าถึง service ผ่าน private connectivity โดยไม่ต้องออก public internet path ส่วน NAT Gateway ยังใช้สำหรับออกไปยัง public endpoints', cue: 'Private service path = VPC Endpoint / PrivateLink' }
  ];

  function safe(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    })[char]);
  }

  function injectStyles() {
    if (document.getElementById('reviewUxStyles')) return;
    const style = document.createElement('style');
    style.id = 'reviewUxStyles';
    style.textContent = `
      .review-flag-row{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px;align-items:stretch}
      .review-flag-row .review-flag{margin:0!important;min-width:0;height:100%;box-sizing:border-box}
      #reviewQueueBackBtn{white-space:nowrap}
      .review-item.return-highlight{outline:2px solid rgba(37,99,235,.55);outline-offset:-2px;background:rgba(37,99,235,.08);transition:background .35s ease}
      .explanation-readable{margin-top:10px;display:flex;flex-direction:column;gap:8px;line-height:1.65}
      .explanation-readable-title{font-weight:800;font-size:.9rem}
      .explanation-points{display:flex;flex-direction:column;gap:6px}
      .explanation-point{display:grid;grid-template-columns:18px 1fr;gap:7px;align-items:start}
      .explanation-point::before{content:'•';font-weight:900}
      .explanation-compare{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:2px}
      .explanation-compare>div{border-radius:10px;padding:9px 11px;background:rgba(127,127,127,.08)}
      .explanation-compare small{display:block;color:var(--muted,#6b7280);margin-bottom:3px}
      .concept-guide{border-left:3px solid var(--accent,#2563eb);padding:9px 11px;background:rgba(37,99,235,.06);border-radius:0 10px 10px 0}
      .concept-guide strong{display:block;margin-bottom:3px}
      .memory-cue{margin-top:5px;font-weight:700}
      .summary-explanation .explanation-readable{margin-top:4px}
      @media(max-width:760px){.review-flag-row{grid-template-columns:1fr}.explanation-compare{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);
  }

  function correctChoiceText(q) {
    if (!q || q.type === 'ordering' || q.type === 'matching') return '';
    return (q.answer || []).map(key => q.choices?.[key] || '').filter(Boolean).join(' / ');
  }

  function selectedChoiceText(q, answer) {
    if (!q || q.type === 'ordering' || q.type === 'matching') return '';
    return (answer || []).map(key => q.choices?.[key] || '').filter(Boolean).join(' / ');
  }

  function findGuide(q) {
    const answer = correctChoiceText(q).toLowerCase();
    if (!answer) return null;
    return GUIDES.find(guide => guide.match.some(term => answer.includes(term.toLowerCase()))) || null;
  }

  function splitExplanation(text) {
    const cleaned = String(text || '')
      .replace(/\s*[|·]\s*/g, '\n')
      .replace(/;\s+/g, '\n')
      .replace(/([.!?])\s+(?=[A-Zก-๙])/g, '$1\n');
    const parts = cleaned.split(/\n+/).map(part => part.trim()).filter(Boolean);
    return parts.length ? parts : [String(text || '').trim()].filter(Boolean);
  }

  function readableExplanationHtml(q, answer, explanationText) {
    const parts = splitExplanation(explanationText);
    const guide = findGuide(q);
    const ok = isCorrect(q, answer || []);
    const selected = selectedChoiceText(q, answer);
    const correct = correctChoiceText(q);

    return `
      <div class="explanation-readable">
        <div class="explanation-readable-title">💡 ทำไมข้อนี้ถึงตอบแบบนี้</div>
        <div class="explanation-points">${parts.map(part => `<div class="explanation-point"><span>${safe(part)}</span></div>`).join('')}</div>
        ${!ok && selected && correct ? `<div class="explanation-compare"><div><small>สิ่งที่เลือก</small><strong>${safe(selected)}</strong></div><div><small>คำตอบที่ควรแยกให้ออก</small><strong>${safe(correct)}</strong></div></div>` : ''}
        ${guide ? `<div class="concept-guide"><strong>Concept เพิ่มเติม</strong><div>${safe(guide.detail)}</div><div class="memory-cue">จำสั้น ๆ: ${safe(guide.cue)}</div></div>` : ''}
      </div>`;
  }

  function enhanceCurrentFeedback() {
    if (!activeSet) return;
    const q = activeSet.questions[currentIndex];
    const st = state();
    const explanation = document.querySelector('#feedback .explanation');
    if (!explanation || explanation.dataset.readable === '1') return;
    const text = explanation.textContent.trim();
    explanation.dataset.readable = '1';
    explanation.innerHTML = readableExplanationHtml(q, currentAnswer(q, st), text);
  }

  function enhanceSummaryExplanations() {
    if (!activeSet) return;
    const st = state();
    const items = activeSet.questions.map((q, i) => ({ q, i, ok: isCorrect(q, currentAnswer(q, st)), flag: needsExplanation(q, st) }));
    const shown = summaryFilter === 'wrong'
      ? items.filter(item => !item.ok)
      : summaryFilter === 'explain'
        ? items.filter(item => item.flag)
        : items;
    const cards = [...document.querySelectorAll('#summaryList .wrong-summary-card')];
    shown.forEach((item, index) => {
      const box = cards[index]?.querySelector('.summary-explanation');
      if (!box || box.dataset.readable === '1') return;
      box.dataset.readable = '1';
      const mapped = explanationWithChoices(item.q, item.q.explanation);
      box.innerHTML = `<div class="summary-label">คำอธิบาย</div>${readableExplanationHtml(item.q, currentAnswer(item.q, st), mapped)}`;
    });
  }

  function ensureReviewBackButton() {
    const actions = document.querySelector('#quizView .quiz-toolbar .toolbar-actions');
    if (!actions) return;
    let button = document.getElementById('reviewQueueBackBtn');
    if (!button) {
      button = document.createElement('button');
      button.id = 'reviewQueueBackBtn';
      button.type = 'button';
      button.className = 'ghost';
      button.textContent = '← กลับ Review Queue';
      button.addEventListener('click', restoreReviewQueue);
      actions.prepend(button);
    }
    const sameSet = reviewOrigin && activeSet && reviewOrigin.setId === activeSet.id;
    button.classList.toggle('hidden', !sameSet);
  }

  function restoreReviewQueue() {
    if (!reviewOrigin) return;
    try { saveState(); } catch {}
    document.getElementById('homeView')?.classList.add('hidden');
    document.getElementById('quizView')?.classList.add('hidden');
    document.getElementById('summaryView')?.classList.add('hidden');
    document.getElementById('dashboardView')?.classList.remove('hidden');
    if (typeof window.renderStudyDashboard === 'function') window.renderStudyDashboard();
    if (typeof window.renderAdvancedStudyDashboard === 'function') window.renderAdvancedStudyDashboard();

    const origin = reviewOrigin;
    reviewOrigin = null;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: origin.scrollY, behavior: 'auto' });
        const selector = `.review-item[data-set-id="${CSS.escape(origin.setId)}"][data-question-id="${origin.questionId}"]`;
        const item = document.querySelector(selector);
        if (item) {
          item.classList.add('return-highlight');
          setTimeout(() => item.classList.remove('return-highlight'), 1800);
        }
      });
    });
  }

  document.addEventListener('click', event => {
    const reviewItem = event.target.closest?.('.review-item');
    const dashboard = document.getElementById('dashboardView');
    if (reviewItem && dashboard && !dashboard.classList.contains('hidden')) {
      reviewOrigin = {
        scrollY: window.scrollY,
        setId: reviewItem.dataset.setId,
        questionId: Number(reviewItem.dataset.questionId)
      };
      return;
    }
    if (event.target.closest?.('#homeBtn')) reviewOrigin = null;
  }, true);

  const previousRenderQuiz = renderQuiz;
  renderQuiz = function () {
    previousRenderQuiz();
    ensureReviewBackButton();
    enhanceCurrentFeedback();
  };

  const previousRenderSummaryList = renderSummaryList;
  renderSummaryList = function () {
    previousRenderSummaryList();
    enhanceSummaryExplanations();
  };

  const previousCollectProgressPayload = collectProgressPayload;
  collectProgressPayload = function () {
    const payload = previousCollectProgressPayload();
    payload.appVersion = '8.54';
    payload.features = { ...(payload.features || {}), reviewQueueReturn: true, readableExplanations: true };
    return payload;
  };

  injectStyles();
  ensureReviewBackButton();
})();
