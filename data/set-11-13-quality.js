(() => {
  const TARGETS = new Set(['local-set-11', 'local-set-12', 'local-set-13']);

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

      // Context-sensitive English: "sensitive to outliers" means "ไวต่อ",
      // not "sensitive/confidential data".
      if (/\bsensitive\s+to\b|\bless\s+sensitive\b/i.test(stem)) {
        question.vocab.forEach(item => {
          if (String(item.term).toLowerCase() === 'sensitive') item.th = 'ไวต่อ / ได้รับผลกระทบง่าย';
        });
      }
    }
  }
})();
