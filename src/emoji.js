import logLevels from './config/log-levels';

export default class Emoji {
  static setEmoji(type, emoji) {
    const foundByType = logLevels.get(type);
    foundByType.emoji = emoji;
    return emoji;
  };

  static getEmoji(type) {
    return logLevels.get(type).emoji;
  }
}
