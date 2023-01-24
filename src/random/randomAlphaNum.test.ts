import randomAlphaNum from './randomAlphaNum';

describe('randomAlphaNum', () => {
  it('must return a string composed of the right length of alphanumeric characters', () => {
    expect(randomAlphaNum(0)).toEqual('');
    expect(randomAlphaNum(42)).toMatch(/^[a-zA-Z0-9]{42}$/);
    expect(randomAlphaNum(100)).toMatch(/^[a-zA-Z0-9]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlphaNum(42)).not.toEqual(randomAlphaNum(42));
  });
});
