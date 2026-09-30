(() => {
  const bank = window.LOCAL_SET_25_BANK || [];
  const expectedDomains = {1:13,2:16,3:18,4:9,5:9};
  const expectedTypes = {single:52,multiple:7,matching:5,ordering:1};
  const requiredTasks = ['1.1','1.2','1.3','2.1','2.2','2.3','3.1','3.2','3.3','3.4','4.1','4.2','5.1','5.2'];
  const domainNames = {
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };
  const clone = obj => JSON.parse(JSON.stringify(obj));

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
      vocab:[],
      task:item.task,
      _target:item.target
    };
    if(item.matches) q.matches=clone(item.matches);
    return q;
  });

  const problems=[];
  const domains={},types={},tasks={},stems=new Set(),targets=new Set();
  if(questions.length!==65) problems.push(`expected 65 questions, got ${questions.length}`);

  questions.forEach(q=>{
    domains[q.domain]=(domains[q.domain]||0)+1;
    types[q.type]=(types[q.type]||0)+1;
    tasks[q.task]=(tasks[q.task]||0)+1;

    const stem=q.question.trim().toLowerCase();
    if(stems.has(stem)) problems.push(`duplicate stem Q${q.id}`);
    stems.add(stem);
    if(targets.has(q._target)) problems.push(`duplicate target ${q._target}`);
    targets.add(q._target);

    if(!q.questionTh||q.questionTh.length<20) problems.push(`Q${q.id} missing Thai translation`);
    if(!q.explanation.includes('✅')) problems.push(`Q${q.id} missing correct explanation`);

    if(q.type==='single'||q.type==='multiple'){
      if(!q.explanation.includes('❌')) problems.push(`Q${q.id} missing distractor explanations`);
      q.answer.forEach(a=>{
        if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid answer ${a}`);
      });
      if(q.type==='single'&&q.answer.length!==1) problems.push(`Q${q.id} single must have one answer`);
      if(q.type==='multiple'&&q.answer.length<2) problems.push(`Q${q.id} multiple must have at least two answers`);
    } else if(q.type==='ordering'){
      if(q.answer.length!==Object.keys(q.choices).length) problems.push(`Q${q.id} ordering length mismatch`);
      q.answer.forEach(a=>{
        if(!Object.prototype.hasOwnProperty.call(q.choices,a)) problems.push(`Q${q.id} invalid ordering key ${a}`);
      });
    } else if(q.type==='matching'){
      if(!q.matches) problems.push(`Q${q.id} missing matches`);
      q.answer.forEach(pair=>{
        const [left,right]=pair.split(':');
        if(!Object.prototype.hasOwnProperty.call(q.choices,left)||!Object.prototype.hasOwnProperty.call(q.matches||{},right)) {
          problems.push(`Q${q.id} invalid matching pair ${pair}`);
        }
      });
    } else {
      problems.push(`Q${q.id} unknown type ${q.type}`);
    }
  });

  Object.entries(expectedDomains).forEach(([d,n])=>{
    if((domains[d]||0)!==n) problems.push(`Domain ${d}: expected ${n}, got ${domains[d]||0}`);
  });
  Object.entries(expectedTypes).forEach(([t,n])=>{
    if((types[t]||0)!==n) problems.push(`Type ${t}: expected ${n}, got ${types[t]||0}`);
  });
  requiredTasks.forEach(task=>{
    if(!tasks[task]) problems.push(`Missing task ${task}`);
  });

  const set={
    id:'local-set-25',
    title:'Local Mock Set 25 — Post-Exam Memory Edition',
    subtitle:'65 Original Questions · Style-Inspired by the 30 Sep 2026 AIF-C01 Exam Recollection',
    questionCount:65,
    questions,
    _blueprint:{
      purpose:'Keepsake set based on post-exam recollection of topic frequency, short stem style, indirect distractors, matching frequency, and one ordering item. These are original practice questions, not verbatim or reconstructed exam items.',
      sourceNote:'ใกล้เคียงสไตล์ข้อสอบจริงจากความทรงจำหลังสอบวันที่ 30 ก.ย. 2026: โจทย์ส่วนใหญ่สั้น 1–2 บรรทัด, มีข้อ direct ปน close distractors, Matching 5 ข้อ, Ordering 1 ข้อ; เน้น applied concepts มากกว่า service trivia.',
      observedEmphasis:[
        'Bedrock often appears as scenario context rather than direct feature trivia',
        'Jailbreak / prompt injection appears several times',
        'Few-shot and chain-of-thought are straightforward',
        'Model Cards, fairness, explainability, and Guardrails receive visible coverage',
        'Metrics are mostly recognition/matching rather than heavy calculation',
        'One light SageMaker JumpStart item; no deliberate emphasis on AgentCore, SOC/NIST, Amazon Q, QuickSight, Strands, or Kiro'
      ],
      domains,types,tasks,qualityProblems:problems
    }
  };

  if(problems.length){
    console.error('Set 25 validation failed',problems);
    window.LOCAL_SET_25_VALIDATION={ok:false,problems};
    return;
  }

  window.LOCAL_SET_25_VALIDATION={ok:true,problems:[]};
  const quizSets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const i=quizSets.findIndex(existing=>existing.id===set.id);
  if(i>=0) quizSets[i]=set;
  else quizSets.push(set);
})();
