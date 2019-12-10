import logLevels from './log-levels';

const config = (() => {
  const setEmoji = (type, emoji) => {
    const foundByType = logLevels.get(type);
    foundByType.emoji = emoji;
    return emoji;
  };

  const getEmoji = type => logLevels.get(type).emoji;

  return {
    setEmoji,
    getEmoji
  };
})();

export default config;
