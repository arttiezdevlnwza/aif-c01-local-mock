(() => {
  const bank = window.LOCAL_SET_23_BANK || [];
  const expectedDomains = {1:13,2:16,3:18,4:9,5:9};
  const expectedTypes = {single:40,multiple:15,ordering:5,matching:5};
  const requiredTasks = ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3','3.4','4.1','4.2','5.1','5.2'];
  const domainNames = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };
  const vocabBank = {
    'auditable':'ตรวจสอบย้อนหลังได้',
    'intermittent':'มาเป็นช่วง ๆ ไม่ต่อเนื่อง',
    'representative':'เป็นตัวแทนของประชากรหรือกรณีใช้งานได้ดี',
    'substantially':'อย่างมาก / อย่างมีนัยสำคัญ',
    'regardless':'ไม่ว่า / โดยไม่ขึ้นอยู่กับ',
    'retained':'ถูกเก็บรักษาไว้',
    'underlying':'ที่อยู่เบื้องหลัง',
    'traversing':'วิ่งผ่าน / ผ่านเส้นทาง',
    'consequential':'ที่ส่งผลกระทบสำคัญ',
    'closely':'อย่างใกล้เคียง'
  };
  const clone = obj => JSON.parse(JSON.stringify(obj));
  function buildVocab(question,choices){
    const stem=String(question||'').toLowerCase();
    const choiceText=Object.values(choices||{}).join(' ').toLowerCase();
    return Object.entries(vocabBank)
      .filter(([term])=>stem.includes(term)&&!choiceText.includes(term))
      .slice(0,3)
      .map(([term,th])=>({term,th}));
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
  const domains={},types={},tasks={},stems=new Set();
  if(questions.length!==65) problems.push(`expected 65 questions, got ${questions.length}`);
  questions.forEach(q=>{
    domains[q.domain]=(domains[q.domain]||0)+1;
    types[q.type]=(types[q.type]||0)+1;
    tasks[q.task]=(tasks[q.task]||0)+1;
    const stem=q.question.trim().toLowerCase();
    if(stems.has(stem)) problems.push(`duplicate stem Q${q.id}`);
    stems.add(stem);
    if(!q.questionTh||q.questionTh.length<20) problems.push(`Q${q.id} missing Thai translation`);
    if(!q.explanation.includes('✅')) problems.push(`Q${q.id} missing correct explanation`);
    if(q.type==='single'||q.type==='multiple'){
      if(!q.explanation.includes('❌')) problems.push(`Q${q.id} missing distractor explanations`);
      q.answer.forEach(a=>{if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid answer ${a}`);});
    } else if(q.type==='ordering'){
      if(q.answer.length!==Object.keys(q.choices).length) problems.push(`Q${q.id} ordering length mismatch`);
      q.answer.forEach(a=>{if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid ordering key ${a}`);});
    } else if(q.type==='matching'){
      if(!q.matches) problems.push(`Q${q.id} missing matches`);
      q.answer.forEach(pair=>{
        const [left,right]=pair.split(':');
        if(!Object.prototype.hasOwnProperty.call(q.choices,left)||!Object.prototype.hasOwnProperty.call(q.matches||{},right)) problems.push(`Q${q.id} invalid matching pair ${pair}`);
      });
    } else {
      problems.push(`Q${q.id} unknown type ${q.type}`);
    }
    (q.vocab||[]).forEach(v=>{
      if(!q.question.toLowerCase().includes(v.term.toLowerCase())) problems.push(`Q${q.id} vocab not in stem: ${v.term}`);
      if(Object.values(q.choices).join(' ').toLowerCase().includes(v.term.toLowerCase())) problems.push(`Q${q.id} vocab leaks choice term: ${v.term}`);
    });
  });
  Object.entries(expectedDomains).forEach(([d,n])=>{if((domains[d]||0)!==n) problems.push(`Domain ${d}: expected ${n}, got ${domains[d]||0}`);});
  Object.entries(expectedTypes).forEach(([t,n])=>{if((types[t]||0)!==n) problems.push(`Type ${t}: expected ${n}, got ${types[t]||0}`);});
  requiredTasks.forEach(task=>{if(!tasks[task]) problems.push(`Missing task ${task}`);});

  const set={
    id:'local-set-23',
    title:'Local Mock Set 23',
    subtitle:'Independent Mixed Coverage + Spaced Weakness Retest',
    questionCount:65,
    questions,
    _blueprint:{
      purpose:'Broad AIF-C01 v1.1 coverage with selected reviewed-gap retests using different decision angles',
      domains,types,tasks,qualityProblems:problems
    }
  };
  if(problems.length){
    console.error('Set 23 validation failed',problems);
    return;
  }
  const quizSets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const i=quizSets.findIndex(existing=>existing.id===set.id);
  if(i>=0) quizSets[i]=set;
  else quizSets.push(set);
})();