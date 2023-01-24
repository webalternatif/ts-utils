import randomAlphaNumLc from './randomAlphaNumLc';

describe('randomAlphaNumLc', () => {
  it('must return a string composed of the right length of lower case alphanumeric characters', () => {
    expect(randomAlphaNumLc(0)).toEqual('');
    expect(randomAlphaNumLc(42)).toMatch(/^[a-z0-9]{42}$/);
    expect(randomAlphaNumLc(100)).toMatch(/^[a-z0-9]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlphaNumLc(42)).not.toEqual(randomAlphaNumLc(42));
  });
});
