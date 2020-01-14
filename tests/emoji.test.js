import { Emoji } from '../src';

describe('Emoji', () => {
  test('should set emoji by type', () => {
    expect(Emoji.setEmoji('info', '🦁')).toEqual('🦁');
  });

  test('should get emoji by type', () => {
    expect(Emoji.getEmoji('error')).toEqual('🚫');
  });
});
