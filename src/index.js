import config from './config';

import { intercept } from './utils';

export default class Logger {
  static success(args) {
    return intercept(this.success.name, args);
  }

  static info(args) {
    return intercept(this.info.name, args);
  }

  static warn(args) {
    return intercept('warn', args);
  }

  static error(args) {
    return intercept('error', args);
  }

  static trace(args) {
    return intercept('trace', args);
  }

  static debug(args) {
    return intercept('debug', args);
  }

  static setEmoji(...args) {
    return config.setEmoji(...args);
  }
}
