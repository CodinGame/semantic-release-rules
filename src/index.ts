const releaseRules = [
  { type: 'feat', release: 'minor' },
  { type: 'fix', release: 'patch' },
  { type: 'ci', release: 'patch' },
  { type: 'style', release: 'patch' },
  { type: 'format', release: 'patch' },
  { type: 'refactor', release: 'patch' },
  { type: 'cleanup', release: 'patch' },
  { type: 'docs', release: false },
  { type: 'doc', release: false },
  { type: 'perfs', release: 'patch' },
  { type: 'perf', release: 'patch' },
  { type: 'tests', release: false },
  { type: 'test', release: false },
  { type: 'libs', release: 'patch' },
  { type: 'lib', release: 'patch' },
  { type: 'chore', release: 'patch' }
]

export default releaseRules
