import config from './config';

const Logger = (() => {
  function createMessage(type, message) {
    const emoji = config.getEmoji(type);
    return `${emoji} ${message}`;
  }

  function success(message, ...args) {
    const logMessage = createMessage('success', message);
    console.log.call(console, logMessage, ...args);

    return logMessage;
  }

  function info(message, ...args) {
    const logMessage = createMessage('info', message);
    console.log.call(console, logMessage, ...args);

    return logMessage;
  }

  function warn(message, ...args) {
    const logMessage = createMessage('warn', message);
    console.warn.call(console, logMessage, ...args);

    return logMessage;
  }

  function error(message, ...args) {
    const logMessage = createMessage('error', message);
    console.error.call(console, logMessage, ...args);

    return logMessage;
  }

  return {
    success,
    info,
    warn,
    error,
    setEmoji: config.setEmoji
  };
})();

export default Logger;