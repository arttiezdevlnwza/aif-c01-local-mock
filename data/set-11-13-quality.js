(() => {
  const TARGETS = new Set(['local-set-11', 'local-set-12', 'local-set-13']);

  // Ordinary English that can block scenario comprehension without revealing
  // the answer. This list is calibrated from actual learner feedback/review.
  const KNOWN_VOCAB = [
    { term: 'penalized', th: 'ถูกลงโทษ / ถูกให้น้ำหนักความผิดพลาดมากขึ้น' },
    { term: 'heavily', th: 'อย่างมาก / หนักกว่า' },
    { term: 'protected', th: 'ที่ได้รับการคุ้มครอง' },
    { term: 'demographic', th: 'เกี่ยวกับกลุ่มประชากร' },
    { term: 'guardrail', th: 'ข้อจำกัด / กฎกำกับเพื่อไม่ให้เกินขอบเขต' },
    { term: 'legal counsel', th: 'ฝ่ายกฎหมาย / ที่ปรึกษากฎหมาย' },
    { term: 'substantially', th: 'อย่างมาก / อย่างมีนัยสำคัญ' },
    { term: 'preserving', th: 'โดยยังคงรักษาไว้' },
    { term: 'downstream', th: 'ขั้นตอนหรืองานที่นำผลไปใช้ต่อ' }
  ];

  const escapeRegExp = value => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function containsWholeTerm(text, term) {
    const source = String(text || '');
    const value = String(term || '').trim();
    if (!value) return false;
    const pattern = new RegExp(`(^|[^A-Za-z0-9])${escapeRegExp(value)}([^A-Za-z0-9]|$)`, 'i');
    return pattern.test(source);
  }

  for (const set of window.QUIZ_SETS || []) {
    if (!TARGETS.has(set.id)) continue;

    for (const question of set.questions || []) {
      const stem = String(question.question || '');
      const choiceText = Object.values(question.choices || {}).join(' ');
      const seen = new Set();

      question.vocab = (question.vocab || []).filter(item => {
        const term = String(item?.term || '').trim();
        const key = term.toLowerCase();
        if (!term || seen.has(key)) return false;
        if (!containsWholeTerm(stem, term)) return false;
        if (containsWholeTerm(choiceText, term)) return false;
        seen.add(key);
        return true;
      });

      for (const item of KNOWN_VOCAB) {
        const key = item.term.toLowerCase();
        if (seen.has(key)) continue;
        if (!containsWholeTerm(stem, item.term)) continue;
        if (containsWholeTerm(choiceText, item.term)) continue;
        question.vocab.push({ ...item });
        seen.add(key);
      }

      if (/\bsensitive\s+to\b|\bless\s+sensitive\b/i.test(stem)) {
        question.vocab.forEach(item => {
          if (String(item.term).toLowerCase() === 'sensitive') item.th = 'ไวต่อ / ได้รับผลกระทบง่าย';
        });
      }
    }
  }

  // Load data/explanation patches synchronously here; this file is parsed before app.js.
  if (document.readyState === 'loading') {
    document.write('<script src="data/set-12-english-notes.js"></' + 'script>');
    [1, 2, 3, 4, 5].forEach(part => {
      document.write('<script src="data/set-13-explanations-' + part + '.js"></' + 'script>');
    });

    document.addEventListener('DOMContentLoaded', () => {
      // Review flags depend on app.js/study-enhancements.js, so load after parser scripts finish.
      const reviewFlagsScript = document.createElement('script');
      reviewFlagsScript.src = 'review-flags.js';
      document.body.appendChild(reviewFlagsScript);

      // Set 12 review must run after dashboard-set-count-patch.js has applied Set 11 metadata.
      const reviewScript = document.createElement('script');
      reviewScript.src = 'data/set-12-review.js';
      document.body.appendChild(reviewScript);
    }, { once: true });
  }
})();