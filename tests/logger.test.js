import Logger from '../src';

const MOCK_TEST = { helloWorld: true };

describe('Logger', () => {
  test('should create Logger.success', () => {
    expect(Logger.success('Success message example', MOCK_TEST)).toEqual(
      '✅ Success message example'
    );
  });

  test('should create Logger.info', () => {
    expect(Logger.info('Informational message example', MOCK_TEST)).toEqual(
      'ℹ️ Informational message example'
    );
  });

  test('should create Logger.warn', () => {
    expect(Logger.warn('Warning message example', MOCK_TEST)).toEqual(
      '⚠️ Warning message example'
    );
  });

  test('should create Logger.error', () => {
    expect(Logger.error('Error message example', MOCK_TEST)).toEqual(
      '🚫 Error message example'
    );
  });

  test('should create Logger.trace', () => {
    expect(Logger.trace('Trace message example', MOCK_TEST)).toEqual(
      '🐾 Trace message example'
    );
  });

  test('should create Logger.debug', () => {
    expect(Logger.debug('Debug message example', MOCK_TEST)).toEqual(
      '🐛 Debug message example'
    );
  });
});
