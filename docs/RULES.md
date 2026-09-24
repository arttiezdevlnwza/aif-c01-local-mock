# AIF-C01 Local Mock — Rules

Single rulebook for creating Local Mock questions and reviewing learner results.

## 1. Question Creation Rules

### Source hierarchy
- **Current Official AIF-C01 Exam Guide** defines exam scope.
- **AWS Learning Hub** is used for coverage and current terminology.
- **Local Mock / third-party material** may be used for scenarios, distractors, and coverage-gap ideas, but must not override official scope.

### Scope
- Stay within AWS Certified AI Practitioner (AIF-C01) scope.
- Keep practitioner/foundational depth. Increase difficulty through close distinctions, realistic constraints, and service boundaries — not SAA/SAP-level detail.
- For 65 questions, preserve the intended mix when practical: D1 13, D2 16, D3 18, D4 9, D5 9.

### Coverage and spaced repetition
- New sets should optimize for **broad coverage + spaced repetition**, not only the learner's latest weak points.
- Retest weak concepts, but do not let them dominate enough to crowd out topics that can be forgotten between reviews.
- Track a concept as covered when it appears as the **correct answer**, a **plausible distractor**, or a **direct comparison**. These roles are not equivalent: important concepts should periodically appear as the correct answer too.
- Rotate under-covered areas back into later sets, including agent memory, multi-agent patterns, tool orchestration, AgentCore capabilities, governance reports/standards, data governance, and security boundaries.
- Do not create a new question by only swapping company names, numbers, or nouns in an old stem. Repetition should test a different decision boundary, lifecycle position, failure symptom, or adjacent concept.
- Exact duplicate stems are never allowed. Near-duplicate reskins should be rewritten unless the repetition intentionally tests a different angle.
- Preserve older stable topics in the mix so a concept that was once strong is still recalled weeks later.

### Stem / scenario
- Give enough information for one best answer.
- Difficulty must come from distinguishing concepts, not missing information or trick wording.
- Include a deciding constraint when relevant: labeled vs unlabeled, individual request vs offline dataset, fixed vs dynamic flow, false-positive vs false-negative cost, before training vs after inference, public vs private network path, current knowledge vs knowledge in weights.
- Vary wording and scenario so repeated keyword patterns cannot be memorized.
- For ordering questions, state the start condition when it matters, e.g. `vector index is already built` or `after deployment`.

### Choices / distractors
- Prefer plausible choices from the same or adjacent concept family.
- Choices should differ by a real mechanism, lifecycle stage, scope, or requirement.
- Avoid unrelated filler when close distractors are possible.
- Keep choices similar in length, grammar, specificity, and detail.
- The correct answer must not stand out because it is longer, more polished, or contains the only precise explanation.
- Avoid copying a rare clue from the stem only into the correct choice.
- If testing a service capability, use service names without embedding the answer clue into only one option when possible.
- Avoid `all of the above` / `none of the above` unless necessary.
- UI randomization does not replace good distractor design.

Useful close families: Bedrock vs SageMaker AI; Canvas vs Data Wrangler vs Ground Truth vs A2I; Agents vs Flows; AgentCore Runtime/Gateway/Identity/Observability/Memory/Policy/Evaluations; MCP Resources vs Tools vs Prompts; single-agent multi-tool vs multi-agent; Prompt Management/Optimization/Caching/Routing; RAG/SFT/CPT/Few-shot; Metadata filtering vs Reranking; Retrieval relevance vs Generation faithfulness; Identity Policy vs Boundary vs SCP; KMS/Macie/CloudTrail/Config/Artifact/Audit Manager; NIST/CAF-AI/ISO 27001/ISO 42001/EU AI Act; SOC 1/2/3; Fairness/Robustness/Transparency/Sustainability.

### Multiple / Matching / Ordering
- Multiple-response: explain why every correct choice belongs and why every wrong choice does not.
- Matching: every item must map cleanly to one partner; keep all pairs at similar granularity.
- Ordering: use real dependency/lifecycle order, not arbitrary memorization. Do not force optional steps into a mandatory sequence unless the stem includes them.
- Common ordering patterns:
  - Objective -> Prepare/Train -> Evaluate -> Deploy -> Monitor
  - Train -> Validation -> Test
  - RAG ingest: Source -> Chunk -> Embed -> Store/Index
  - RAG runtime: Query -> Retrieve -> Filter/Rerank -> Context -> Generate
  - Ground Truth labeling before training; A2I review after inference
  - Responsible AI: Intended use -> Representative data -> Evaluate -> Document -> Controls/Human oversight -> Monitor
  - Agent tool loop: Goal/state -> Reason/plan -> Select tool -> Execute -> Observe -> Continue/finish
  - Prompt lifecycle: Draft/template -> Test -> Optimize -> Version/approve -> Use/monitor
  - NIST AI RMF recall: Govern -> Map -> Measure -> Manage (with Govern cross-cutting in practice)

### Vocabulary helper
- Vocabulary is shown before answering and is only for understanding the English stem.
- Never translate or define a term appearing in an answer choice.
- Never include a definition that reveals the answer.
- Prefer ordinary English that can block comprehension, e.g. retailer, churn, progressively, corrupted, intermittent, sustained, jurisdiction, plausible, penalized.
- Do not translate every word.
- Use learner English Notes and 📘 flags as evidence for future Vocabulary additions.
- After a completed-set review, resolve untranslated English Notes into the Thai summary glossary.
- If an English Note term is itself an answer choice or would reveal the answer, keep its translation summary-only; do not backfill it into pre-answer Vocabulary.

### Explanation readability standard

For every new question:

- Explain the **correct answer first**, in its own line/block.
- Explain **every incorrect choice separately**. Do not group distractors into a long sentence such as `A/B/C ไม่ใช่เพราะ...`.
- Use short readable lines, not one long paragraph joined with slashes.
- For Multiple Response, explain why **each selected answer is correct** and why **each unselected distractor is wrong**.
- For Matching, explain **every mapping**.
- For Ordering, show the **full correct sequence**, then explain why the order matters or which transition is commonly confused.
- End with a concise **จำสั้น ๆ** memory cue when one is useful.
- The explanation must teach the distinction, not merely restate the answer label.

### Thai translation quality

- `questionTh` และส่วน **โจทย์แปลว่าอะไร** ต้องเป็นภาษาไทยที่อ่านลื่น ไม่ใช่การแปลคำต่อคำหรือสลับไทย/อังกฤษทั้งประโยค
- คงชื่อบริการ AWS, product names และ proper nouns เป็นอังกฤษ
- คำอังกฤษทั่วไปใน scenario ควรแปลเป็นไทย เช่น `historical data` → `ข้อมูลในอดีต`, `unequal outcomes` → `ผลลัพธ์ที่ไม่เท่าเทียม`, `workflow` → `กระบวนการทำงาน`
- คำเทคนิคที่สำคัญต่อข้อสอบให้ใช้ **ไทยก่อน + อังกฤษในวงเล็บ** เมื่อช่วยให้จำศัพท์ เช่น `อคติก่อนการฝึก (pre-training bias)` หรือ `การอนุมาน (inference)`
- อย่าทิ้งคำอย่าง `train`, `deploy`, `labeling`, `human review`, `confidence` ไว้กลางประโยคไทยโดยไม่จำเป็น; แปลให้เป็นธรรมชาติ แต่ยังรักษา clue และ constraint เดิมครบ
- การแปลต้องไม่ตัดรายละเอียดที่ใช้ตัดสินคำตอบ เช่น before training vs after inference, fixed vs dynamic, false positive vs false negative หรือ current vs historical data
### Explanations
The explanation is learning content, not just an answer key.

For normal single-choice questions, the default is:
1. Point to the deciding clue and explain why the correct answer fits.
2. Explain **every other choice** briefly enough to distinguish it.
3. Add a short memory cue when useful.

Recommended form:
`✅ Correct — clue -> mechanism. ❌ B — why not. ❌ C — why not. ❌ D — why not. จำ: short cue.`

Keep it compact: normally 3-6 short sentences/fragments. Give the closest distractor a clearer distinction; obviously remote distractors can be one short phrase. Avoid one dense paragraph and avoid repeating the whole stem.

For matching, explain every mapping. For ordering, show the sequence, explain the dependency, and mention the pair most likely to be swapped.

Never:
- explain only the correct choice while ignoring distractors;
- justify an answer only by restating its label;
- add deep implementation detail outside AIF-C01 merely to sound complete;
- rationalize a bad answer key instead of fixing it.

### Pre-commit audit
- 65 questions; intended domain mix.
- Valid answer keys.
- Vocabulary occurs in the stem and not in choices; no answer leakage.
- No answer-length or correct-option specificity bias.
- No duplicated exact stems.
- No near-duplicate reskin that changes only names/numbers/nouns.
- Coverage is broad enough that weak-point retests do not crowd out older or under-covered topics.
- No out-of-scope depth.
- Every explanation covers the correct answer and all distractors/mappings/steps as applicable.
- Ordering questions have an unambiguous start point and no hidden optional step.
- Thai translations read naturally and do not leave ordinary English words untranslated unless they are service names, proper nouns, or intentionally retained exam terms.
- Before the learner starts an untouched next set, audit that set against this file first.

## 2. Exam Review Rules

These rules apply when reviewing a completed Local Mock set or other AIF-C01 practice results supplied by the learner.

### Review priorities
- Review the full result, but prioritize **wrong answers**, **🟡 Explain More / confidence flags**, and **📘 English unclear flags**.
- A correct answer with 🟡 is still a **confidence gap**; do not treat `correct = mastered` automatically.
- A wrong answer that the learner says they were confident about is high priority because it indicates a stronger misconception or recall error.
- Do not invent a weakness or gap that is not supported by the learner's answer, flags, or explanation.

### Wrong-answer interview — required
- For **every wrong answer**, ask the learner **one question at a time** why they chose that answer and what they were thinking.
- Do **not** batch several wrong questions into one message.
- Ask before giving the full explanation, so the learner's real reasoning is captured instead of being influenced by the answer.
- If the learner says they guessed, did not know, misread the English, or cannot remember their reasoning, accept that as the reason and continue; do not force a fabricated explanation.
- If the learner explicitly asks to skip the interview and just explain, follow that request.

Recommended prompt:

> ข้อนี้ตอนนั้นทำไมถึงเลือกคำตอบนี้ / ตอนนั้นคิดอะไรอยู่?

### After the learner answers
Explain that question before moving to the next wrong answer:
1. Point out the **deciding clue / constraint** in the stem.
2. Explain **why the learner's selected answer is not correct** in this scenario.
3. Explain **why the correct answer is correct**.
4. Distinguish the closest confusing concept/service when useful.
5. End with a short **จำสั้น ๆ** memory cue when useful.
6. Classify the miss using the learner's actual reasoning: **Concept / Confidence / Language / clue miss**. A question may have more than one cause when the evidence supports it.

### Flag interpretation
- **🟡 Explain More**: treat as a confidence gap even when the answer is correct, unless the learner's explanation shows another cause.
- **📘 English unclear**: investigate wording/vocabulary comprehension separately from concept knowledge.
- Wrong + flag must be classified from the learner's explanation; do not assume the flag alone caused the miss.

### Review summary
- After all wrong-answer interviews are complete, summarize repeated patterns, recovered concepts, and remaining gaps.
- Keep **Concept / Confidence / Language / clue miss** separate so the next study action matches the real problem.
- Do not turn every isolated miss into a persistent weakness; repeated evidence matters.
- When updating review metadata or targeted future sets, use the completed review evidence rather than guessing from score alone.
