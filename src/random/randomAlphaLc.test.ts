import randomAlphaLc from './randomAlphaLc';

describe('randomAlphaLc', () => {
  it('must return a string composed of the right length of lower case alphabetic characters', () => {
    expect(randomAlphaLc(0)).toEqual('');
    expect(randomAlphaLc(42)).toMatch(/^[a-z]{42}$/);
    expect(randomAlphaLc(100)).toMatch(/^[a-z]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlphaLc(42)).not.toEqual(randomAlphaLc(42));
  });
});
