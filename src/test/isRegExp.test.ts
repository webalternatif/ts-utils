import isRegExp from './isRegExp';
import noop from '../function/noop';

describe('isRegExp', () => {
  it('must return true only when a regular expression is given', () => {
    expect(isRegExp('string')).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(42)).toBe(false);
    expect(isRegExp(3.14)).toBe(false);
    expect(isRegExp([])).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(/RegExp/)).toBe(true);
    expect(isRegExp(new RegExp('RegExp'))).toBe(true);
    expect(isRegExp(window)).toBe(false);
    expect(isRegExp(document)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp(noop)).toBe(false);
  });
});
