import config from '../src/config';

describe('config', () => {
  test('should set emoji by type', () => {
    const expected = config.setEmoji({ type: 'info', emoji: '🦁' });
    expect(expected).toEqual('🦁');
  });

  test('should get emoji by type', () => {
    const expected = config.getEmoji('error');
    console.log(expected);
    expect(expected).toEqual('🚫');
  });
});
