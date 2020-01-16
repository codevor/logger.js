import { intercept } from './utils';

const Logger = (() => {
  return {
    success: (...args) => intercept('success', args),
    info: (...args) => intercept('info', args),
    warn: (...args) => intercept('warn', args),
    error: (...args) => intercept('error', args),
    trace: (...args) => intercept('trace', args),
    debug: (...args) => intercept('debug', args),
  }
})();

export default Logger;
