export const levels = [
  {
    type: 'success',
    emoji: '✅'
  },
  {
    type: 'info',
    emoji: 'ℹ️'
  },
  {
    type: 'warn',
    emoji: '⚠️'
  },
  {
    type: 'error',
    emoji: '🚫'
  },
  {
    type: 'debug',
    emoji: '🐛'
  },
  {
    type: 'trace',
    emoji: '🐾'
  },
]

export const getLevelByType = type => levels.find(l => l.type === type);
