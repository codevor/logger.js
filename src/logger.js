import { intercept } from './utils';

const Logger = (() => {
  return {
    success: (...args) => intercept({ type: 'success', args }),
    info: (...args) => intercept({ type: 'info', args }),
    warn: (...args) => intercept({ type: 'warn', args }),
    error: (...args) => intercept({ type: 'error', args }),
    trace: (...args) => intercept({ type: 'trace', args }),
    debug: (...args) => intercept({ type: 'debug', args }),

    // PROMISE STATUSES LOGS
    pending: (...args) => intercept({
      type: 'info',
      promiseStatus: 'pending',
      args,
      parse: true
    }),
    fulfilled: (...args) => intercept({
      type: 'success',
      promiseStatus: 'fulfilled',
      args,
      parse: true
    }),
    rejected: (...args) => intercept({
      type: 'error',
      promiseStatus: 'rejected',
      args,
      parse: true
    }),
    settled: (...args) => intercept({
      type: 'success',
      promiseStatus: 'settled',
      args,
      parse: true
    }),
  }
})();

export default Logger;
