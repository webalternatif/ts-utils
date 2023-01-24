import randomAlphaUc from './randomAlphaUc';

describe('randomAlphaUc', () => {
  it('must return a string composed of the right length of upper case alphabetic characters', () => {
    expect(randomAlphaUc(0)).toEqual('');
    expect(randomAlphaUc(42)).toMatch(/^[A-Z]{42}$/);
    expect(randomAlphaUc(100)).toMatch(/^[A-Z]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlphaUc(42)).not.toEqual(randomAlphaUc(42));
  });
});
