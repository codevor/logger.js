import { getLevelByType } from './log-levels';

const Emoji = (() => {
  function setEmoji(type, emoji) {
    const foundByType = getLevelByType(type);
    foundByType.emoji = emoji;
    return emoji;
  };

  function getEmoji(type) {
    const { emoji } = getLevelByType(type);
    return emoji;
  }

  return {
    setEmoji,
    getEmoji
  }
})();

export default Emoji;
