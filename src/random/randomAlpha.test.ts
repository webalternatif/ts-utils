import randomAlpha from './randomAlpha';

describe('randomAlpha', () => {
  it('must return a string composed of the right length of alphabetic characters', () => {
    expect(randomAlpha(0)).toEqual('');
    expect(randomAlpha(42)).toMatch(/^[a-zA-Z]{42}$/);
    expect(randomAlpha(100)).toMatch(/^[a-zA-Z]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlpha(42)).not.toEqual(randomAlpha(42));
  });
});
