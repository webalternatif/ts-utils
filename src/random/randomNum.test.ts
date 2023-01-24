import randomNum from './randomNum';

describe('randomNum', () => {
  it('must return a string composed of the right length of numeric characters', () => {
    expect(randomNum(0)).toEqual('');
    expect(randomNum(42)).toMatch(/^[0-9]{42}$/);
    expect(randomNum(100)).toMatch(/^[0-9]{100}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomNum(42)).not.toEqual(randomNum(42));
  });
});
