import Logger, { Emoji } from './dist/logger';

Logger.success('Success example log'); // => ✅ Success example log
Logger.error('Error example log'); // => 🚫 Error example log
Logger.info('Info example log'); // => ℹ️ Info example log
Logger.trace('Trace example log'); // => 🐾 Trace example log

console.log(Emoji.getEmoji('error')); // => 🚫
console.log(Emoji.getEmoji('info')); // => ℹ️
