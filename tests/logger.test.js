import Logger from '../src';

describe('Logger', () => {
  test('should create Logger.success', () => {
    expect(Logger.success('Success message example')).toEqual(
      '✅ Success message example'
    );
  });

  test('should create Logger.info', () => {
    expect(Logger.info('Informational message example')).toEqual(
      'ℹ️ Informational message example'
    );
  });

  test('should create Logger.warn', () => {
    expect(Logger.warn('Warning message example')).toEqual(
      '⚠️ Warning message example'
    );
  });

  test('should create Logger.error', () => {
    expect(Logger.error('Error message example')).toEqual(
      '🚫 Error message example'
    );
  });

  test('should create Logger.trace', () => {
    expect(Logger.trace('Trace message example')).toEqual(
      '🐾 Trace message example'
    );
  });

  test('should create Logger.debug', () => {
    expect(Logger.debug('Debug message example')).toEqual(
      '🐛 Debug message example'
    );
  });
});
