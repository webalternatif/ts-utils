import randomBetween from './randomBetween';

describe('randomBetween', () => {
  it('must return a number between the given ones', () => {
    expect(randomBetween(0, 10)).toBeGreaterThanOrEqual(0);
    expect(randomBetween(0, 10)).toBeLessThanOrEqual(10);
    expect(randomBetween(10, 0)).toBeGreaterThanOrEqual(0);
    expect(randomBetween(10, 0)).toBeLessThanOrEqual(10);
    expect(randomBetween(10, 10)).toEqual(10);
  });

  it('must not return the same result consecutively', () => {
    expect(randomBetween(42, 1337)).not.toEqual(randomBetween(42, 1337));
  });
});
