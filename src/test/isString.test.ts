import isString from './isString';
import noop from '../function/noop';

describe('isString', () => {
  it('must return true only when a string is given', () => {
    expect(isString('string')).toBe(true);
    expect(isString(String(42))).toBe(true);
    expect(isString(true)).toBe(false);
    expect(isString(42)).toBe(false);
    expect(isString(3.14)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(/RegExp/)).toBe(false);
    expect(isString(window)).toBe(false);
    expect(isString(document)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString(noop)).toBe(false);
  });
});
