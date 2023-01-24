import isBetween from './isBetween';

describe('isBetween', () => {
  it('must return true if the number is between the given ones', () => {
    expect(isBetween(1, 10, 20)).toBe(false);
    expect(isBetween(15, 10, 20)).toBe(true);
    expect(isBetween(30, 10, 20)).toBe(false);
  });

  it('must compare with equality by default', () => {
    expect(isBetween(10, 10, 20)).toBe(true);
    expect(isBetween(20, 10, 20)).toBe(true);
    expect(isBetween(10, 10, 20, { include: true })).toBe(true);
    expect(isBetween(20, 10, 20, { include: true })).toBe(true);
    expect(isBetween(10, 10, 20, { include: false })).toBe(false);
    expect(isBetween(20, 10, 20, { include: false })).toBe(false);
  });
});
