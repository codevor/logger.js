import Emoji from './emoji';

const isSuccess = type => type === 'success';

const createMessage = (type, message) => {
  const emoji = Emoji.getEmoji(type);
  return `${emoji} ${message}`;
}

export const intercept = (type, ...args) => {
  const message = args.shift();

  const parsedMessage = createMessage(type, message);

  const currentType = isSuccess(type) ? 'log' : type;

  console[currentType].call(console, parsedMessage, ...args);

  return parsedMessage;
}
