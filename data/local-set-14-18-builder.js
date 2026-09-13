(()=>{
  const sourceBank=window.LOCAL_MOCK_14_18_BANK||[];
  // Keep one customization family as a reserve so D2 stays at the intended 16 questions per set.
  const bank=sourceBank.filter(f=>!(
    f.domain===2&&
    f.choices?.[0]==='RAG'&&
    f.choices?.[1]==='Supervised fine-tuning'&&
    f.choices?.[3]==='Prompt caching'
  ));
  const sets=window.QUIZ_SETS=window.QUIZ_SETS||[];
  const letters='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const domainNames={
    1:'Fundamentals of AI and ML',
    2:'Fundamentals of Generative AI',
    3:'Applications of Foundation Models',
    4:'Guidelines for Responsible AI',
    5:'Security, Compliance, and Governance for AI Solutions'
  };
  const meta=[
    {id:'local-set-14',title:'Local Mock Set 14',subtitle:'Coverage Reset · Broad Coverage + Spaced Repetition'},
    {id:'local-set-15',title:'Local Mock Set 15',subtitle:'Service Decision Boundaries · Close AWS/AI Choices'},
    {id:'local-set-16',title:'Local Mock Set 16',subtitle:'Lifecycle & Ordering · Sequences + Role Boundaries'},
    {id:'local-set-17',title:'Local Mock Set 17',subtitle:'Applied Mixed Scenarios · Multi-Constraint Practice'},
    {id:'local-set-18',title:'Local Mock Set 18',subtitle:'Final Coverage Sweep · Exam-Style Spaced Recall'}
  ];

  function singleChoices(f,correctOriginal,setIndex,questionIndex){
    const all=f.choices.map((_,i)=>i);
    let selected=all;
    if(all.length>4){
      const others=all.filter(i=>i!==correctOriginal);
      const start=(setIndex+questionIndex)%others.length;
      const picked=[];
      for(let step=0;picked.length<3;step++){
        const idx=others[(start+step)%others.length];
        if(!picked.includes(idx)) picked.push(idx);
      }
      selected=[correctOriginal,...picked].sort((a,b)=>a-b);
    }
    const choices={};
    selected.forEach((originalIndex,i)=>{ choices[letters[i]]=f.choices[originalIndex]; });
    return {choices,answer:[letters[selected.indexOf(correctOriginal)]]};
  }

  function safeVocab(f,question,choices){
    const choiceText=Object.values(choices).join(' ').toLowerCase();
    const q=question.toLowerCase();
    return (f.vocab||[]).filter(item=>q.includes(String(item.term||'').toLowerCase())&&!choiceText.includes(String(item.term||'').toLowerCase()));
  }

  function buildQuestion(f,setIndex,questionIndex){
    const order=f.orderVariant&&f.orderVariant.setIndex===setIndex?f.orderVariant:null;
    if(order){
      const choices={};
      order.choices.forEach((text,i)=>{ choices[letters[i]]=text; });
      return {
        id:questionIndex+1,
        domain:f.domain,
        domainName:domainNames[f.domain],
        question:order.question,
        questionTh:order.questionTh,
        choices,
        answer:order.answer.map(i=>letters[i]),
        explanation:order.explanation,
        type:'ordering',
        vocab:[]
      };
    }

    const variant=f.variants[setIndex];
    const correctOriginal=variant[2];
    const mapped=singleChoices(f,correctOriginal,setIndex,questionIndex);
    const correctText=f.choices[correctOriginal];
    return {
      id:questionIndex+1,
      domain:f.domain,
      domainName:domainNames[f.domain],
      question:variant[0],
      questionTh:variant[1],
      choices:mapped.choices,
      answer:mapped.answer,
      explanation:`✅ Correct — ${correctText}. ${f.explanation}`,
      type:'single',
      vocab:safeVocab(f,variant[0],mapped.choices)
    };
  }

  const expected={1:13,2:16,3:18,4:9,5:9};
  const actual={1:0,2:0,3:0,4:0,5:0};
  bank.forEach(item=>{ actual[item.domain]=(actual[item.domain]||0)+1; });
  const validBank=bank.length===65&&Object.keys(expected).every(k=>actual[k]===expected[k]);
  if(!validBank){
    console.error('Local Mock Set 14-18 bank has invalid domain counts', {total:bank.length,actual,expected});
    return;
  }

  meta.forEach((m,setIndex)=>{
    if(sets.some(existing=>existing.id===m.id)) return;
    const questions=bank.map((family,index)=>buildQuestion(family,setIndex,index));
    sets.push({...m,questionCount:65,questions});
  });
})();
