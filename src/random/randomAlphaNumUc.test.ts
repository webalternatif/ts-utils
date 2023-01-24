import randomAlphaNumUc from './randomAlphaNumUc';

describe('randomAlphaNumUc', () => {
  it('must return a string composed of the right length of upper case alphanumeric characters', () => {
    expect(randomAlphaNumUc(0)).toEqual('');
    expect(randomAlphaNumUc(42)).toMatch(/^[A-Z0-9]{42}$/);
    expect(randomAlphaNumUc(100)).toMatch(/^[A-Z0-9]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomAlphaNumUc(42)).not.toEqual(randomAlphaNumUc(42));
  });
});
