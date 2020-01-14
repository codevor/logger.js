import { intercept } from './utils';

export { default as Emoji } from './emoji';

export default class Logger {
  static success(args) {
    return intercept(this.success.name, args);
  }

  static info(args) {
    return intercept(this.info.name, args);
  }

  static warn(args) {
    return intercept(this.warn.name, args);
  }

  static error(args) {
    return intercept(this.error.name, args);
  }

  static trace(args) {
    return intercept(this.trace.name, args);
  }

  static debug(args) {
    return intercept(this.debug.name, args);
  }
}
