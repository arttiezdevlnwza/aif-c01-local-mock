(()=>{
  const bank=window.LOCAL_MOCK_14_18_BANK=window.LOCAL_MOCK_14_18_BANK||[];
  const add=(choices,explanation,variants,extra={})=>bank.push({domain:1,choices,explanation,variants,...extra});

  add(
    ['Supervised classification','Regression','Unsupervised clustering','Reinforcement learning'],
    'Supervised classification predicts labeled categories. Regression predicts continuous values. Clustering discovers unlabeled groups. Reinforcement learning learns actions from reward feedback.',
    [
      ['Historical customer records are labeled churned or retained. The company wants to predict that label for new customers. Which learning approach BEST fits?','ข้อมูลลูกค้าเก่ามี label churned/retained และต้องการทำนาย label ของลูกค้าใหม่ ควรใช้ learning แบบใด?',0],
      ['A model must predict a numeric delivery time in minutes from labeled historical examples. Which learning approach is MOST appropriate?','โมเดลต้องทำนายเวลาส่งของเป็นจำนวนนาทีจากข้อมูลย้อนหลังที่มี label ควรใช้ learning แบบใด?',1],
      ['A dataset has no target column, and analysts want to discover naturally similar customer groups. Which learning approach BEST fits?','dataset ไม่มี target และ analyst ต้องการค้นหากลุ่มลูกค้าที่คล้ายกันตามธรรมชาติ ควรใช้ learning แบบใด?',2],
      ['A warehouse robot improves its action choices over time from positive and negative feedback. Which learning approach is being used?','หุ่นยนต์คลังสินค้าปรับ action จาก positive/negative feedback เมื่อเวลาผ่านไป เป็น learning แบบใด?',3],
      ['Training examples already contain the correct category, and the model must predict one category for each new item. Which approach should you choose?','training examples มี category ที่ถูกต้องอยู่แล้ว และโมเดลต้องทำนาย category ของ item ใหม่ ควรเลือก approach ใด?',0]
    ],
    {vocab:[{term:'retained',th:'ยังคงใช้บริการอยู่'}]}
  );

  add(
    ['Precision','Recall','F1 score','Accuracy'],
    'Precision asks how many predicted positives are truly positive. Recall asks how many actual positives were found. F1 balances precision and recall. Accuracy measures overall correctness and can mislead on highly imbalanced classes.',
    [
      ['Investigators complain that too many transactions flagged as fraud are actually legitimate. Which metric should improve MOST directly?','ทีมสืบสวนบอกว่าธุรกรรมที่ถูก flag ว่า fraud หลายรายการจริง ๆ legitimate metric ใดควรดีขึ้นโดยตรงที่สุด?',0],
      ['A medical screening model misses too many patients who truly have the disease. Which metric should the team prioritize?','โมเดลคัดกรองพลาดผู้ป่วยที่เป็นโรคจริงมากเกินไป ทีมควรเน้น metric ใด?',1],
      ['A fraud dataset is extremely imbalanced and the team wants one score that balances precision and recall. Which metric BEST fits?','fraud dataset imbalance มาก และทีมต้องการ score เดียวที่ balance precision กับ recall ควรใช้ metric ใด?',2],
      ['A balanced four-class dataset has similar costs for all mistakes, and the business wants the overall fraction of correct predictions. Which metric is the most direct?','balanced four-class dataset มี cost ของ error ใกล้กัน และธุรกิจต้องการสัดส่วนทำนายถูกทั้งหมด metric ใดตรงที่สุด?',3],
      ['The question is: "When the model says positive, how often is it right?" Which metric answers that question?','คำถามคือ "เวลาโมเดลบอก positive มันถูกบ่อยแค่ไหน" metric ใดตอบคำถามนี้?',0]
    ],
    {vocab:[{term:'legitimate',th:'ถูกต้องตามปกติ / ไม่ใช่ fraud'},{term:'prioritize',th:'ให้ความสำคัญก่อน'}]}
  );

  add(
    ['MAE','RMSE','R-squared','Accuracy'],
    'MAE is the average absolute prediction error in the target unit. RMSE penalizes large errors more strongly because errors are squared before averaging. R-squared describes how much target variance is explained. Accuracy is a classification metric.',
    [
      ['A regression model has an MAE of 4.2. What does that MOST naturally communicate to a business user?','regression model มี MAE 4.2 ค่านี้สื่อกับ business user ว่าอะไรได้ตรงที่สุด?',0],
      ['A forecasting team wants a regression metric that penalizes a few very large misses more heavily. Which metric BEST fits?','ทีมพยากรณ์ต้องการ regression metric ที่ลงโทษ error ใหญ่ไม่กี่จุดแรงกว่า ควรใช้ metric ใด?',1],
      ['The team wants to communicate how much of the target variance is explained by the regression model. Which metric is the closest match?','ทีมต้องการสื่อว่า regression model อธิบาย target variance ได้มากแค่ไหน metric ใดตรงที่สุด?',2],
      ['A delivery-time model occasionally misses by hours rather than minutes, and those misses should strongly affect the score. Which metric should be preferred over MAE?','โมเดลเวลาส่งของบางครั้งพลาดเป็นชั่วโมงและต้องการให้ error ใหญ่นั้นกระทบ score มาก ควรเลือก metric ใดแทน MAE?',1],
      ['The requirement is "average error in the same unit as the target, easy to explain, and less sensitive to outliers than RMSE." Which metric fits?','requirement คือ average error หน่วยเดียวกับ target อธิบายง่าย และไวต่อ outlier น้อยกว่า RMSE ควรใช้ metric ใด?',0]
    ],
    {vocab:[{term:'penalizes',th:'ลงโทษ / ให้น้ำหนักผลเสียมากขึ้น'},{term:'variance',th:'ความแปรปรวน'},{term:'outliers',th:'ค่าที่หลุดจากกลุ่มมาก'}]}
  );

  add(
    ['Real-Time Inference','Serverless Inference','Asynchronous Inference','Batch Transform'],
    'Real-Time Inference serves low-latency online requests. Serverless Inference suits intermittent traffic without managing provisioned capacity. Asynchronous Inference fits individual large or long-running requests that can finish later. Batch Transform scores offline datasets in bulk.',
    [
      ['An application needs consistently low-latency predictions for interactive requests arriving all day. Which SageMaker inference mode BEST fits?','แอปต้องการ low-latency prediction สำหรับ interactive requests ที่เข้าตลอดวัน inference mode ใดเหมาะที่สุด?',0],
      ['Traffic is sporadic and unpredictable, requests are short, and the team wants to avoid managing endpoint capacity. Which inference option is the closest fit?','traffic มาเป็นช่วง ๆ คาดเดายาก request สั้น และทีมไม่อยากจัดการ endpoint capacity ควรใช้ inference option ใด?',1],
      ['One customer uploads a large video, processing may take ten minutes, and the result can be returned later. Which inference mode BEST fits?','ลูกค้าหนึ่งคนอัปโหลดวิดีโอใหญ่ ใช้เวลาประมวลผลได้ 10 นาที และคืนผลทีหลังได้ inference mode ใดเหมาะที่สุด?',2],
      ['The company must score 80 million records from a monthly dataset as one offline job. Which inference pattern is MOST appropriate?','บริษัทต้อง score 80 ล้าน records จาก monthly dataset เป็น offline job เดียว inference pattern ใดเหมาะที่สุด?',3],
      ['The clue is "single request, large payload, long processing, response later" rather than "offline dataset." Which option should you choose?','clue คือ single request, payload ใหญ่, ใช้เวลานาน, รับผลทีหลัง ไม่ใช่ offline dataset ควรเลือกอะไร?',2]
    ],
    {vocab:[{term:'sporadic',th:'มาเป็นช่วง ๆ ไม่สม่ำเสมอ'},{term:'intermittent',th:'เป็นพัก ๆ / ไม่ต่อเนื่อง'}]}
  );

  add(
    ['SageMaker Canvas','SageMaker Data Wrangler','SageMaker Ground Truth','Amazon A2I'],
    'Canvas provides no-code ML for business users. Data Wrangler focuses on visual data preparation and transformation. Ground Truth supports labeling training data. A2I routes selected model predictions to people for review after inference.',
    [
      ['A business analyst wants to build predictions with a no-code interface. Which SageMaker capability BEST fits?','business analyst ต้องการสร้าง prediction ด้วย no-code interface ควรใช้ SageMaker capability ใด?',0],
      ['A data scientist wants a visual workflow to clean missing values and transform features before training. Which capability BEST fits?','data scientist ต้องการ visual workflow เพื่อ clean missing values และ transform features ก่อน train ควรใช้ capability ใด?',1],
      ['A team needs humans to label a new image dataset before model training begins. Which service should it use?','ทีมต้องการให้คน label image dataset ใหม่ก่อน training ควรใช้ service ใด?',2],
      ['A production prediction is low confidence and must be sent to a person for review after inference. Which service BEST fits?','prediction ใน production มี confidence ต่ำและต้องส่งให้คน review หลัง inference ควรใช้ service ใด?',3],
      ['The task is visual data preparation, not no-code model building, labeling, or post-inference review. Which answer should you select?','งานคือ visual data preparation ไม่ใช่ no-code model building, labeling หรือ review หลัง inference ควรเลือกอะไร?',1]
    ]
  );

  add(
    ['Training set','Validation set','Test set','Production data'],
    'The training set fits model parameters. The validation set supports tuning and model selection. The test set is reserved for final unbiased evaluation. Production data arrives after deployment and is used for monitoring and live inference.',
    [
      ['Which dataset split is used primarily to fit the model parameters?','dataset split ใดใช้หลัก ๆ เพื่อ fit model parameters?',0],
      ['Hyperparameters are being tuned and several candidate models are compared before final evaluation. Which split should guide that work?','กำลัง tune hyperparameters และเทียบ candidate models ก่อน final evaluation ควรใช้ split ใด?',1],
      ['Model selection is finished and the team wants one final unbiased performance estimate before deployment. Which split should be used?','เลือกโมเดลเสร็จแล้วและต้องการ final unbiased performance estimate ก่อน deploy ควรใช้ split ใด?',2],
      ['After deployment, the team watches whether live input distributions change over time. Which data is being observed?','หลัง deploy ทีมดูว่า live input distribution เปลี่ยนตามเวลาหรือไม่ กำลังดู data ใด?',3],
      ['The final test set should remain untouched until tuning and model selection are complete. Which earlier split should support those choices?','test set ควรไม่ถูกแตะจน tune/เลือก model เสร็จ split ก่อนหน้านั้นที่ใช้ตัดสินใจคืออะไร?',1]
    ]
  );

  add(
    ['Overfitting','Underfitting','Data drift','Concept drift'],
    'Overfitting means training performance is much better than unseen validation performance. Underfitting means the model is too simple or insufficiently trained and performs poorly even on training data. Data drift is a change in input distribution. Concept drift is a change in the relationship between inputs and the target.',
    [
      ['Training accuracy is excellent but validation performance is much worse before deployment. Which issue is MOST likely?','training accuracy ดีมากแต่ validation แย่กว่ามากก่อน deploy ปัญหาใดเป็นไปได้ที่สุด?',0],
      ['The model performs poorly on both training and validation data and cannot capture the basic pattern. Which issue is MOST likely?','โมเดลแย่ทั้ง training และ validation และจับ pattern พื้นฐานไม่ได้ ปัญหาใดเป็นไปได้ที่สุด?',1],
      ['After a new product launch, the distribution of incoming customer attributes changes significantly. Which production issue does this describe?','หลังเปิด product ใหม่ distribution ของ customer attributes ที่เข้ามาเปลี่ยนมาก เป็น production issue ใด?',2],
      ['Customer behavior changes so that the same input features no longer predict churn the way they did during training. Which issue BEST fits?','พฤติกรรมลูกค้าเปลี่ยนจน feature เดิมไม่สัมพันธ์กับ churn แบบเดิมอีก เป็น issue ใด?',3],
      ['The clue is "great on training, weak on unseen data." Which concept should you recognize?','clue คือ great on training แต่ weak on unseen data ควรนึกถึง concept ใด?',0]
    ],
    {vocab:[{term:'unseen',th:'ข้อมูลที่โมเดลไม่เคยเห็นตอน train'}]}
  );

  add(
    ['SageMaker Feature Store','SageMaker Model Registry','SageMaker Model Monitor','Model artifact'],
    'Feature Store centralizes reusable feature values for training and inference. Model Registry tracks model versions and approval states. Model Monitor watches production model/data quality. A model artifact is the saved trained model output such as learned weights and required files.',
    [
      ['Multiple models need the same engineered customer features for both training and inference. Which capability BEST fits?','หลายโมเดลต้องใช้ engineered customer features ชุดเดียวกันทั้ง training และ inference ควรใช้ capability ใด?',0],
      ['A governance process must register model versions and require approval before promotion. Which SageMaker capability is MOST direct?','governance process ต้อง register model versions และ require approval ก่อน promote ควรใช้ capability ใด?',1],
      ['A deployed model must be watched for data-quality and model-quality changes over time. Which capability BEST fits?','deployed model ต้องถูก monitor เรื่อง data/model quality ที่เปลี่ยนตามเวลา ควรใช้ capability ใด?',2],
      ['After training, the team saves learned weights and model files so they can be deployed later. What is this saved output called?','หลัง train ทีมเก็บ learned weights/model files เพื่อ deploy ภายหลัง saved output นี้เรียกว่าอะไร?',3],
      ['The requirement says "share engineered features consistently" rather than "approve model versions." Which answer fits?','requirement คือ share engineered features อย่าง consistent ไม่ใช่ approve model versions ควรเลือกอะไร?',0]
    ]
  );

  add(
    ['Define objective','Prepare data and train','Evaluate','Deploy','Monitor'],
    'A normal ML lifecycle defines the objective first, prepares data and trains, evaluates the candidate, deploys an accepted model, then monitors it in production.',
    [
      ['Before choosing algorithms or collecting model metrics, which lifecycle activity should come first?','ก่อนเลือก algorithm หรือวัด model metrics lifecycle activity ใดควรมาก่อน?',0],
      ['After the objective is defined, which broad activity comes before model evaluation?','หลัง define objective แล้ว broad activity ใดมาก่อน model evaluation?',1],
      ['A candidate model has been trained but is not yet approved for production. Which lifecycle stage should happen next?','candidate model train เสร็จแต่ยังไม่ approve production lifecycle stage ใดควรเกิดถัดไป?',2],
      ['The accepted model has passed evaluation and is ready to serve real traffic. Which lifecycle stage is next?','accepted model ผ่าน evaluation แล้วและพร้อม serve real traffic stage ใดถัดไป?',3],
      ['A model is already in production. Which lifecycle activity continues to check quality and drift?','โมเดลอยู่ production แล้ว lifecycle activity ใดยังคอยตรวจ quality/drift?',4]
    ],
    {orderVariant:{setIndex:2,question:'Order the ML lifecycle from the business objective through production monitoring.',questionTh:'เรียง ML lifecycle ตั้งแต่ business objective จนถึง production monitoring',choices:['Define objective','Prepare data and train','Evaluate','Deploy','Monitor'],answer:[0,1,2,3,4],explanation:'Define the objective first, prepare/train next, evaluate before release, deploy the accepted model, then monitor it in production.'}}
  );

  add(
    ['Reward','Policy','State','Action'],
    'In reinforcement learning, a reward is the feedback signal, a policy maps states to action choices, a state represents the current situation, and an action is what the agent does.',
    [
      ['A warehouse robot receives +10 for completing a task and -5 for a collision. What do those values represent?','หุ่นยนต์ได้ +10 เมื่อทำงานสำเร็จ และ -5 เมื่อชน ค่าเหล่านี้แทนอะไรใน RL?',0],
      ['Which RL concept represents the strategy the agent uses to choose what to do in a given situation?','RL concept ใดแทน strategy ที่ agent ใช้เลือกว่าจะทำอะไรในสถานการณ์หนึ่ง?',1],
      ['The environment provides the agent with its current situation before the next decision. Which RL term describes that situation?','environment ส่งสถานการณ์ปัจจุบันให้ agent ก่อนตัดสินใจครั้งถัดไป RL term ใดอธิบายสิ่งนี้?',2],
      ['The agent chooses to move left, pick an item, or wait. Which RL concept describes one of these choices?','agent เลือก move left, pick item หรือ wait ตัวเลือกเหล่านี้เป็น RL concept ใด?',3],
      ['The clue is numeric feedback that encourages or discourages behavior over time. Which RL term fits?','clue คือ numeric feedback ที่ encourage/discourage behavior เมื่อเวลาผ่านไป RL term ใดตรง?',0]
    ]
  );

  add(
    ['Model artifact','Training dataset','Inference request','Monitoring dashboard'],
    'A model artifact is the trained model output used later for deployment or inference. The training dataset is input to training, an inference request is live input to a deployed model, and a monitoring dashboard visualizes operational/model metrics.',
    [
      ['After training, which asset contains the learned model output that is later loaded for inference?','หลัง train asset ใดเก็บ learned model output ที่โหลดไปใช้ inference ภายหลัง?',0],
      ['Which asset contains examples used to fit a model rather than the trained weights themselves?','asset ใดเก็บ examples ที่ใช้ fit model ไม่ใช่ trained weights?',1],
      ['A JSON payload arrives at a deployed endpoint asking for a prediction. Which lifecycle object is this?','JSON payload เข้ามาที่ deployed endpoint เพื่อขอ prediction เป็น lifecycle object ใด?',2],
      ['Operations staff view latency, error rates, and model-quality trends in one place. Which asset are they using?','operations staff ดู latency, error rate และ model-quality trends ในที่เดียว กำลังใช้ asset ใด?',3],
      ['The clue is "saved result of training used for later deployment." Which term fits?','clue คือ saved result of training used for later deployment term ใดตรง?',0]
    ]
  );

  add(
    ['Label leakage','Missing values','Outlier','Class imbalance'],
    'Label leakage occurs when information unavailable at prediction time improperly reveals the target during training. Missing values are absent feature entries. An outlier is an unusually extreme observation. Class imbalance means some target classes are much rarer than others.',
    [
      ['A feature includes information that is only known after the target outcome occurs, making validation unrealistically strong. Which data problem is MOST likely?','feature มีข้อมูลที่รู้ได้หลัง outcome เกิด ทำให้ validation ดีเกินจริง data problem ใดเป็นไปได้ที่สุด?',0],
      ['Many rows have empty values for an important feature. Which data-quality issue is this?','หลาย row มีค่า empty ใน important feature เป็น data-quality issue ใด?',1],
      ['A few transaction amounts are hundreds of times larger than the rest of the dataset. Which term describes those observations?','transaction amounts บางจุดใหญ่กว่าที่เหลือหลายร้อยเท่า observations เหล่านี้เรียกว่าอะไร?',2],
      ['Only 0.2% of records are positive fraud cases while the rest are negative. Which dataset characteristic is MOST important to recognize?','มี fraud positive แค่ 0.2% ที่เหลือ negative dataset characteristic ใดสำคัญที่สุด?',3],
      ['The model appears excellent because a training feature indirectly contains the answer. Which issue should you suspect first?','โมเดลดูดีมากเพราะ training feature มีข้อมูลที่บอกคำตอบทางอ้อม ควรสงสัย issue ใดก่อน?',0]
    ],
    {vocab:[{term:'unrealistically',th:'ดีหรือสูงเกินจริง'},{term:'extreme',th:'สุดขั้ว / สูงหรือต่ำผิดปกติ'}]}
  );

  add(
    ['False positive','False negative','True positive','True negative'],
    'A false positive means the model predicts positive when reality is negative. A false negative means it predicts negative when reality is positive. True positive and true negative are correct predictions for the positive and negative classes.',
    [
      ['A fraud model flags a transaction as fraud, but investigation shows it is legitimate. What kind of result is this?','fraud model flag ว่า fraud แต่ตรวจแล้ว legitimate ผลนี้เรียกว่าอะไร?',0],
      ['A medical model says a patient is negative even though the patient actually has the disease. What kind of result is this?','medical model บอก negative แต่จริง ๆ ผู้ป่วยเป็นโรค ผลนี้เรียกว่าอะไร?',1],
      ['A security model raises an alert and the event is truly malicious. What kind of result is this?','security model raise alert และ event เป็น malicious จริง ผลนี้เรียกว่าอะไร?',2],
      ['A spam filter leaves an email in the inbox and the email is genuinely legitimate. What kind of result is this?','spam filter ปล่อย email ไว้ inbox และ email legitimate จริง ผลนี้เรียกว่าอะไร?',3],
      ['The model says YES but reality is NO. Which confusion-matrix term fits?','โมเดลบอก YES แต่ความจริงเป็น NO confusion-matrix term ใดตรง?',0]
    ]
  );
})();
