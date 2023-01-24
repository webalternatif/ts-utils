import isPlainObject from './isPlainObject';
import noop from '../function/noop';

describe('isPlainObject', () => {
  it('must return true only when a plain object is given', () => {
    expect(isPlainObject('string')).toBe(false);
    expect(isPlainObject(true)).toBe(false);
    expect(isPlainObject(42)).toBe(false);
    expect(isPlainObject(3.14)).toBe(false);
    expect(isPlainObject([])).toBe(false);
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject(Object())).toBe(true);
    expect(isPlainObject(new Date())).toBe(false);
    expect(isPlainObject(/RegExp/)).toBe(false);
    expect(isPlainObject(window)).toBe(false);
    expect(isPlainObject(document)).toBe(false);
    expect(isPlainObject(undefined)).toBe(false);
    expect(isPlainObject(noop)).toBe(false);
  });
});
