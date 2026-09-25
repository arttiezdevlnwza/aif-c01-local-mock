(() => {
  const bank = window.LOCAL_SET_22_INDEPENDENT_BANK || [];
  const expectedDomains = {1:13,2:16,3:18,4:9,5:9};
  const expectedTypes = {single:40,multiple:15,matching:5,ordering:5};
  const requiredTasks = ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3','3.4','4.1','4.2','5.1','5.2'];
  const domainNames = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };
  const vocabBank = {
    'representative':'เป็นตัวแทนของประชากรหรือกรณีใช้งานได้ดี',
    'substantially':'อย่างมีนัยสำคัญ / มากอย่างเห็นได้ชัด',
    'statutory':'ที่กำหนดโดยกฎหมาย',
    'reproduce':'ทำซ้ำให้ได้ผลเดิม',
    'contaminating':'ทำให้ข้อมูลประเมินปนเปื้อนจากการถูกใช้ตัดสินใจ',
    'unbiased':'ไม่ลำเอียง',
    'intermittent':'มาเป็นช่วง ๆ ไม่ต่อเนื่อง',
    'perturbations':'การเปลี่ยนแปลงเล็กน้อยที่ใส่เข้าไปในข้อมูล',
    'proprietary':'เป็นกรรมสิทธิ์ / ไม่เปิดเผยต่อสาธารณะ',
    'retained':'ถูกเก็บรักษาไว้',
    'prospective':'ที่อาจเป็นลูกค้าหรือผู้ใช้ในอนาคต',
    'implicated':'เกี่ยวข้องโดยตรง / ถูกชี้ว่าเป็นประเด็น'
  };
  function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
  function buildVocab(question, choices){
    const stem=String(question||'').toLowerCase();
    const choiceText=Object.values(choices||{}).join(' ').toLowerCase();
    return Object.entries(vocabBank)
      .filter(([term])=>stem.includes(term)&&!choiceText.includes(term))
      .slice(0,3).map(([term,th])=>({term,th}));
  }
  const questions=bank.map((item,index)=>{
    const q={
      id:index+1,
      domain:item.domain,
      domainName:domainNames[item.domain],
      question:item.question,
      questionTh:item.questionTh,
      choices:clone(item.choices),
      answer:clone(item.answer),
      explanation:(item.exp||[]).join('\n'),
      type:item.type,
      vocab:buildVocab(item.question,item.choices),
      task:item.task,
      _target:item.target
    };
    if(item.matches) q.matches=clone(item.matches);
    return q;
  });
  const problems=[];
  const domains={},types={},tasks={},ids=new Set(),stems=new Set();
  if(questions.length!==65) problems.push(`expected 65 questions, got ${questions.length}`);
  questions.forEach(q=>{
    domains[q.domain]=(domains[q.domain]||0)+1;
    types[q.type]=(types[q.type]||0)+1;
    tasks[q.task]=(tasks[q.task]||0)+1;
    if(ids.has(q.id)) problems.push(`duplicate id ${q.id}`);
    ids.add(q.id);
    const stemKey=q.question.trim().toLowerCase();
    if(stems.has(stemKey)) problems.push(`duplicate stem Q${q.id}`);
    stems.add(stemKey);
    if(!q.questionTh||q.questionTh.length<20) problems.push(`Q${q.id} missing Thai translation`);
    if(!q.explanation.includes('\n')) problems.push(`Q${q.id} explanation not structured`);
    if((q.type==='single'||q.type==='multiple')){
      if(!q.explanation.includes('✅')||!q.explanation.includes('❌')) problems.push(`Q${q.id} incomplete explanation`);
      q.answer.forEach(a=>{ if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid answer ${a}`); });
    }
    if(q.type==='ordering'){
      if(q.answer.length!==Object.keys(q.choices).length) problems.push(`Q${q.id} ordering answer length mismatch`);
      q.answer.forEach(a=>{ if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid ordering key ${a}`); });
    }
    if(q.type==='matching'){
      if(!q.matches) problems.push(`Q${q.id} missing matches`);
      q.answer.forEach(a=>{
        const [left,right]=a.split(':');
        if(!Object.prototype.hasOwnProperty.call(q.choices,left)||!Object.prototype.hasOwnProperty.call(q.matches||{},right)) problems.push(`Q${q.id} invalid matching pair ${a}`);
      });
    }
  });
  Object.entries(expectedDomains).forEach(([d,n])=>{if((domains[d]||0)!==n) problems.push(`Domain ${d}: expected ${n}, got ${domains[d]||0}`);});
  Object.entries(expectedTypes).forEach(([t,n])=>{if((types[t]||0)!==n) problems.push(`Type ${t}: expected ${n}, got ${types[t]||0}`);});
  requiredTasks.forEach(task=>{if(!tasks[task]) problems.push(`Missing task ${task}`);});

  const set={
    id:'local-set-22',
    title:'Local Mock Set 22',
    subtitle:'Independent Mixed Coverage + Targeted Retest',
    questionCount:65,
    questions,
    _blueprint:{
      purpose:'Independent broad-coverage set with selected weak-topic retests; not paired question-for-question with Set 21',
      domains,types,tasks,qualityProblems:problems
    }
  };
  if(problems.length){
    console.error('Independent Set 22 validation failed',problems);
    return;
  }
  const quizSets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const i=quizSets.findIndex(existing=>existing.id===set.id);
  if(i>=0) quizSets[i]=set;
  else quizSets.push(set);
})();