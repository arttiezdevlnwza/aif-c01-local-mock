# AIF-C01 Local Mock - Question Design Rules

These rules are the default for new Local Mock sets unless explicitly overridden.

## Scope
- Stay within AWS Certified AI Practitioner (AIF-C01) scope.
- Keep depth at practitioner/foundational level. Increase difficulty through close distinctions, not deeper SAA/SAP-style implementation details.
- Preserve the official domain mix for a 65-question set when practical:
  - Domain 1: 13
  - Domain 2: 16
  - Domain 3: 18
  - Domain 4: 9
  - Domain 5: 9

## Distractors
- Use plausible distractors from the same or an adjacent concept family.
- Avoid obviously unrelated choices that make the answer keyword-matching easy.
- Keep answer choices similar in length and detail. The correct answer must not stand out because it is the only long or fully explained option.
- If the skill being tested is whether a service supports a capability, do not repeat the target capability in the correct option name unless it is part of the actual product name.
- Avoid giveaway words that appear only in the correct choice.
- Avoid repeated question patterns that let the learner answer from memorized wording. Vary the scenario/angle while keeping the depth in AIF-C01 scope.
- Do not use trick wording for its own sake. Difficulty should come from distinguishing concepts correctly.

## Vocabulary helper
- Vocabulary is shown before answering and is only for understanding the English stem/scenario.
- Never translate or define a term that appears in an answer choice.
- Never add a vocabulary item that directly reveals the answer.
- Prefer ordinary business/context English that can block comprehension, e.g. retailer, churn, progressively, corrupted, intermittent, sustained, jurisdiction.
- Do not translate every word. Add only terms that are likely to affect understanding.
- Technical clues may be explained only when doing so does not reveal the answer choice.

## Explanations
- Explain the mechanism/concept, not only the answer label.
- State the clue in the stem that points to the correct answer.
- Explain why the closest distractor is wrong.
- Prefer 2-4 short sentences over one dense paragraph.
- Add a short memory cue when useful.

## Quality checks before commit
- 65 questions per set.
- Domain counts match the intended distribution.
- All answer keys reference valid choices.
- Vocabulary terms occur in the stem and not in the choices.
- No answer-length bias on descriptive choices.
- No duplicated exact question stems within the new sets.
- New topics must remain inside AIF-C01 scope.
