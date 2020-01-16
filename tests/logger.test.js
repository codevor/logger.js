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

  test('should create Logger.pending', () => {
    expect(Logger.pending('Pending message example', { helloWorld: true })).toEqual(
      'ℹ️ Pending message example | pending'
    );
  });

  test('should create Logger.fulfilled', () => {
    expect(Logger.fulfilled('Fulfilled message example', { helloWorld: true })).toEqual(
      '✅ Fulfilled message example | fulfilled'
    );
  });

  test('should create Logger.rejected', () => {
    expect(Logger.rejected('Rejected message example', { helloWorld: true })).toEqual(
      '🚫 Rejected message example | rejected'
    );
  });

  test('should create Logger.settled', () => {
    expect(Logger.settled('Settled message example', { helloWorld: true })).toEqual(
      '✅ Settled message example | settled'
    );
  });
});
