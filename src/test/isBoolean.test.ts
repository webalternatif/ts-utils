import isBoolean from './isBoolean';
import noop from '../function/noop';

describe('isBoolean', () => {
  it('must return true only when a boolean is given', () => {
    expect(isBoolean('string')).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
    expect(isBoolean(Boolean(123))).toBe(true);
    expect(isBoolean(Boolean(undefined))).toBe(true);
    expect(isBoolean(42)).toBe(false);
    expect(isBoolean(3.14)).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(new Date())).toBe(false);
    expect(isBoolean(/RegExp/)).toBe(false);
    expect(isBoolean(window)).toBe(false);
    expect(isBoolean(document)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean(noop)).toBe(false);
  });
});
