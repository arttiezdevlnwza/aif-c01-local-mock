(() => {
  const bank = window.LOCAL_SET_24_BANK || [];
  const expectedDomains = {1:30,2:34,3:40,4:22,5:24};
  const domainNames = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };
  const requiredTaskGroups = ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3','3.4','4.1','4.2','5.1','5.2'];
  const clone = obj => JSON.parse(JSON.stringify(obj));

  function sourceQuestion(item){ return item.q || item.question || ''; }
  function sourceThai(item){ return item.th || item.questionTh || ''; }
  function sourceAsk(item){ return item.ask || item.askTh || ''; }
  function taskGroup(item){
    if(item.task) return item.task;
    if(item.objective) return String(item.objective).split('.').slice(0,2).join('.');
    return '';
  }
  function objective(item){ return item.objective || item.task || ''; }
  function words(s){ return String(s||'').trim().split(/\s+/).filter(Boolean).length; }
  function choiceLine(prefix,key,text,reason){
    return `${prefix} ${key}. ${text} — ${reason}`;
  }

  function buildExplanation(item){
    const th = sourceThai(item);
    const ask = sourceAsk(item);
    const parts = [
      '📝 โจทย์แปลว่าอะไร',
      th,
      '',
      '🎯 โจทย์ถามอะไรเรา',
      ask,
      '',
      '💡 ทำไมข้อนี้ถึงตอบแบบนี้'
    ];

    if(item.type === 'single' || item.type === 'multiple'){
      const correct = new Set(item.answer || []);
      Object.entries(item.choices || {}).forEach(([key,text]) => {
        const reason = item.why?.[key] || 'ไม่มีคำอธิบาย';
        parts.push(choiceLine(correct.has(key) ? '✅' : '❌', key, text, reason));
      });
      parts.push('');
      parts.push(item.type === 'single'
        ? `✅ เฉลย: ${(item.answer||[]).join(', ')}`
        : `✅ เฉลยที่ต้องเลือก: ${(item.answer||[]).join(', ')}`);
    } else if(item.type === 'matching'){
      parts.push('✅ เฉลยการจับคู่:');
      (item.answer || []).forEach((pair,index) => {
        const [left,right] = pair.split(':');
        const l = item.choices?.[left] || left;
        const r = item.matches?.[right] || right;
        const reason = item.why?.[left] || item.explain?.[index] || '';
        parts.push(`✅ ${left}. ${l} → ${right}. ${r}${reason ? ` — ${reason.replace(/^✅\s*[^—]*—?\s*/, '')}` : ''}`);
      });
      parts.push('');
      parts.push('แต่ละคู่ต้องอาศัยความหมาย/หน้าที่ของ concept ไม่ใช่จำตำแหน่งตัวอักษร เพราะหน้า Quiz อาจสลับลำดับตัวเลือก');
    } else if(item.type === 'ordering'){
      const sequence = (item.answer || []).map(key => `${key}. ${item.choices?.[key] || key}`).join(' → ');
      parts.push(`✅ ลำดับที่ถูกต้อง: ${sequence}`);
      if(item.explain?.length){
        item.explain.forEach(line => parts.push(line));
      } else {
        (item.answer || []).forEach(key => {
          if(item.why?.[key]) parts.push(`• ${key}. ${item.choices[key]} — ${item.why[key]}`);
        });
      }
      parts.push('');
      parts.push('จุดสำคัญคือดู dependency ของแต่ละขั้น ไม่ใช่จำตัวอักษรของตัวเลือก');
    }

    if(item.cue){
      parts.push('');
      parts.push('🧠 จำสั้น ๆ');
      parts.push(item.cue);
    }
    return parts.join('\n');
  }

  const questions = bank.map((item,index) => ({
    id:index+1,
    domain:item.domain,
    domainName:domainNames[item.domain],
    question:sourceQuestion(item),
    questionTh:sourceThai(item),
    choices:clone(item.choices),
    answer:clone(item.answer),
    explanation:buildExplanation(item),
    type:item.type,
    vocab:[],
    task:taskGroup(item),
    _objective:objective(item),
    _target:item.target,
    ...(item.matches ? {matches:clone(item.matches)} : {})
  }));

  const problems=[];
  const domainCounts={},typeCounts={},taskCounts={};
  const stems=new Set(),targets=new Set();
  if(questions.length !== 150) problems.push(`expected 150 questions, got ${questions.length}`);

  questions.forEach((q,index) => {
    const src=bank[index];
    domainCounts[q.domain]=(domainCounts[q.domain]||0)+1;
    typeCounts[q.type]=(typeCounts[q.type]||0)+1;
    taskCounts[q.task]=(taskCounts[q.task]||0)+1;

    if(!domainNames[q.domain]) problems.push(`Q${q.id} invalid domain ${q.domain}`);
    if(words(q.question) < 35) problems.push(`Q${q.id} scenario too short: ${words(q.question)} words`);
    if(String(q.questionTh||'').length < 180) problems.push(`Q${q.id} Thai translation too short`);
    if(String(sourceAsk(src)||'').length < 20) problems.push(`Q${q.id} missing/short ask summary`);
    if(!q.explanation.includes('📝 โจทย์แปลว่าอะไร') || !q.explanation.includes('🎯 โจทย์ถามอะไรเรา') || !q.explanation.includes('💡 ทำไมข้อนี้ถึงตอบแบบนี้')) {
      problems.push(`Q${q.id} explanation structure incomplete`);
    }

    const stem=q.question.trim().toLowerCase();
    if(stems.has(stem)) problems.push(`duplicate stem Q${q.id}`);
    stems.add(stem);
    if(targets.has(q._target)) problems.push(`duplicate target ${q._target}`);
    targets.add(q._target);

    if(q.type==='single' || q.type==='multiple'){
      if(!src.why) problems.push(`Q${q.id} missing per-choice reasons`);
      Object.keys(q.choices||{}).forEach(key=>{
        if(!src.why?.[key]) problems.push(`Q${q.id} missing reason for choice ${key}`);
      });
      q.answer.forEach(key=>{
        if(!Object.prototype.hasOwnProperty.call(q.choices,key)) problems.push(`Q${q.id} invalid answer ${key}`);
      });
      if(q.type==='single' && q.answer.length!==1) problems.push(`Q${q.id} single must have one answer`);
      if(q.type==='multiple' && q.answer.length<2) problems.push(`Q${q.id} multiple must have >=2 answers`);
    } else if(q.type==='matching'){
      if(!q.matches) problems.push(`Q${q.id} matching missing matches`);
      q.answer.forEach(pair=>{
        const [left,right]=pair.split(':');
        if(!Object.prototype.hasOwnProperty.call(q.choices,left) || !Object.prototype.hasOwnProperty.call(q.matches||{},right)) {
          problems.push(`Q${q.id} invalid matching pair ${pair}`);
        }
      });
      if(!src.explain && !src.why) problems.push(`Q${q.id} matching missing mapping explanations`);
    } else if(q.type==='ordering'){
      if(q.answer.length !== Object.keys(q.choices||{}).length) problems.push(`Q${q.id} ordering answer length mismatch`);
      q.answer.forEach(key=>{
        if(!Object.prototype.hasOwnProperty.call(q.choices,key)) problems.push(`Q${q.id} invalid ordering key ${key}`);
      });
      if(!src.explain && !src.why) problems.push(`Q${q.id} ordering missing explanations`);
    } else {
      problems.push(`Q${q.id} unknown type ${q.type}`);
    }
  });

  Object.entries(expectedDomains).forEach(([domain,count])=>{
    if((domainCounts[domain]||0)!==count) problems.push(`Domain ${domain}: expected ${count}, got ${domainCounts[domain]||0}`);
  });
  requiredTaskGroups.forEach(task=>{
    if(!taskCounts[task]) problems.push(`Missing task group ${task}`);
  });

  const set={
    id:'local-set-24',
    title:'Local Mock Set 24 — Final Comprehensive',
    subtitle:'150 Long-Scenario Questions · Full Exam Guide Coverage',
    questionCount:150,
    questions,
    _blueprint:{
      purpose:'Final unlimited comprehensive AIF-C01 review: long realistic scenarios, full Thai stem translation, explicit question intent, per-choice explanations, under-covered topics, and multiple angles for recurring concepts.',
      domains:domainCounts,
      types:typeCounts,
      tasks:taskCounts,
      qualityProblems:problems
    }
  };

  if(problems.length){
    console.error('Set 24 validation failed',problems);
    window.LOCAL_SET_24_VALIDATION = {ok:false,problems};
    return;
  }

  window.LOCAL_SET_24_VALIDATION = {ok:true,problems:[]};
  const quizSets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const i=quizSets.findIndex(existing=>existing.id===set.id);
  if(i>=0) quizSets[i]=set;
  else quizSets.push(set);
})();