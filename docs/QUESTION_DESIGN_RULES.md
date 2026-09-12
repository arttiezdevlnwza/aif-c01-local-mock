# AIF-C01 Local Mock - Question Design Rules

Default rules for every new Local Mock set and quality patch.

## Scope
- Stay within AWS Certified AI Practitioner (AIF-C01) scope.
- Keep practitioner/foundational depth. Increase difficulty through close distinctions, realistic constraints, and service boundaries — not SAA/SAP-level detail.
- For 65 questions, preserve the intended mix when practical: D1 13, D2 16, D3 18, D4 9, D5 9.

## Stem / scenario
- Give enough information for one best answer.
- Difficulty must come from distinguishing concepts, not missing information or trick wording.
- Include a deciding constraint when relevant: labeled vs unlabeled, individual request vs offline dataset, fixed vs dynamic flow, false-positive vs false-negative cost, before training vs after inference, public vs private network path, current knowledge vs knowledge in weights.
- Vary wording and scenario so repeated keyword patterns cannot be memorized.
- For ordering questions, state the start condition when it matters, e.g. `vector index is already built` or `after deployment`.

## Choices / distractors
- Prefer plausible choices from the same or adjacent concept family.
- Choices should differ by a real mechanism, lifecycle stage, scope, or requirement.
- Avoid unrelated filler when close distractors are possible.
- Keep choices similar in length, grammar, specificity, and detail.
- The correct answer must not stand out because it is longer, more polished, or contains the only precise explanation.
- Avoid copying a rare clue from the stem only into the correct choice.
- If testing a service capability, use service names without embedding the answer clue into only one option when possible.
- Avoid `all of the above` / `none of the above` unless necessary.
- UI randomization does not replace good distractor design.

Useful close families: Bedrock vs SageMaker AI; Canvas vs Data Wrangler vs Ground Truth vs A2I; Agents vs Flows; AgentCore Runtime/Gateway/Identity/Observability; Prompt Management/Optimization/Caching/Routing; RAG/SFT/CPT/Few-shot; Metadata filtering vs Reranking; Retrieval relevance vs Generation faithfulness; Identity Policy vs Boundary vs SCP; KMS/Macie/CloudTrail/Config/Artifact/Audit Manager; NIST/CAF-AI/ISO 27001/EU AI Act; Fairness/Robustness/Transparency/Sustainability.

## Multiple / Matching / Ordering
- Multiple-response: explain why every correct choice belongs and why every wrong choice does not.
- Matching: every item must map cleanly to one partner; keep all pairs at similar granularity.
- Ordering: use real dependency/lifecycle order, not arbitrary memorization. Do not force optional steps into a mandatory sequence unless the stem includes them.
- Common ordering patterns:
  - Objective -> Prepare/Train -> Evaluate -> Deploy -> Monitor
  - RAG ingest: Source -> Chunk -> Embed -> Store/Index
  - RAG runtime: Query -> Retrieve -> Filter/Rerank -> Context -> Generate
  - Ground Truth labeling before training; A2I review after inference
  - Responsible AI: Intended use -> Representative data -> Evaluate -> Document -> Controls/Human oversight -> Monitor

## Vocabulary helper
- Vocabulary is shown before answering and is only for understanding the English stem.
- Never translate or define a term appearing in an answer choice.
- Never include a definition that reveals the answer.
- Prefer ordinary English that can block comprehension, e.g. retailer, churn, progressively, corrupted, intermittent, sustained, jurisdiction, plausible, penalized.
- Do not translate every word.
- Use learner English Notes and 📘 flags as evidence for future Vocabulary additions.
- After a completed-set review, resolve untranslated English Notes into the Thai summary glossary.
- If an English Note term is itself an answer choice or would reveal the answer, keep its translation summary-only; do not backfill it into pre-answer Vocabulary.

## Explanations
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

## Pre-commit audit
- 65 questions; intended domain mix.
- Valid answer keys.
- Vocabulary occurs in the stem and not in choices; no answer leakage.
- No answer-length or correct-option specificity bias.
- No duplicated exact stems.
- No out-of-scope depth.
- Every explanation covers the correct answer and all distractors/mappings/steps as applicable.
- Ordering questions have an unambiguous start point and no hidden optional step.
- Before the learner starts an untouched next set, audit that set against this file first.
