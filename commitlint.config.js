module.exports = {
  extends: ['@commitlint/config-conventional'],
  helpUrl:
    '\nErwartetes Format: type(scope): BTP-XX beschreibung' +
    '\nBeispiele:' +
    '\n  feat(ui): BTP-42 ticket UI hinzugefugt' +
    '\n  fix(auth): BTP-87 login redirect korrigiert' +
    '\n  chore(deps): BTP-103 cds version aktualisiert' +
    '\nErlaubte Typen: feat, fix, docs, test, ci, refactor, perf, chore, revert',
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'test', 'ci', 'refactor', 'perf', 'chore', 'revert'],
    ],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-case': [0],
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 100],
  },
};