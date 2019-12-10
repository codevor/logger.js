const config = (() => {
  const defaultConfig = {
    success: {
      emoji: '✅'
    },
    info: {
      emoji: 'ℹ️'
    },
    warn: {
      emoji: '⚠️'
    },
    error: {
      emoji: '🚫'
    }
  };

  const setEmoji = ({ type, emoji }) => {
    defaultConfig[type].emoji = emoji;
  };

  const getEmoji = type => defaultConfig[type].emoji;

  return {
    setEmoji,
    getEmoji
  };
})();

export default config;
