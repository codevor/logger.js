import config from '../src/config';

describe('config', () => {
  test('should set emoji by type', () => {
    expect(config.setEmoji('info', '🦁')).toEqual('🦁');
  });

  test('should get emoji by type', () => {
    expect(config.getEmoji('error')).toEqual('🚫');
  });
});
