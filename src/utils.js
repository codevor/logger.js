import Emoji from './emoji';

const isSuccess = type => type === 'success';

const isStringEmpty = string => typeof string && string.length === 0;

const isObjectEmpty = (obj = {}) => typeof obj === 'object' && Object.keys(obj).length === 0;

const parseObject = (obj, parse) => !isObjectEmpty(obj) && parse === true ? JSON.stringify(obj) : obj;

const createMessage = (type, message, promiseStatus) => {
  const emoji = Emoji.getEmoji(type);
  let generatedMessage = `${emoji} ${message}`;

  if (!isStringEmpty(promiseStatus)) {
    generatedMessage = `${generatedMessage} | ${promiseStatus}`
  }

  return generatedMessage;
}

const createConsoleArgs = ({ message, params, parse, args }) => {
  const consoleArgs = [message];

  if (!isObjectEmpty(params)) {
    const parsedObject = parseObject(params, parse);
    consoleArgs.push(parsedObject);
  }

  consoleArgs.push(...args);

  return consoleArgs;
}

const getLogType = type => isSuccess(type) ? 'log' : type;

export const intercept = ({ type, args, parse = false, promiseStatus = '' }) => {
  const message = args.shift();
  const params = args.shift();

  const parsedMessage = createMessage(type, message, promiseStatus);

  const consoleArgs = createConsoleArgs({ message: parsedMessage, params, parse, args });

  const currentType = getLogType(type);

  console[currentType].call(console, ...consoleArgs);

  return parsedMessage;
}
