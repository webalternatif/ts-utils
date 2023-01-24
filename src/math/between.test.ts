import between from './between';

describe('between', () => {
  it('must return a number between the given ones', () => {
    expect(between(1, 10, 20)).toEqual(10);
    expect(between(15, 10, 20)).toEqual(15);
    expect(between(30, 10, 20)).toEqual(20);
    expect(between(1, undefined, 20)).toEqual(1);
    expect(between(30, 10)).toEqual(30);
    expect(between(42)).toEqual(42);
    expect(between(-20, -10, 10)).toEqual(-10);
    expect(between(0, -10, 10)).toEqual(0);
    expect(between(20, -10, 10)).toEqual(10);
  });
});
