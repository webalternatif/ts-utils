import isObject from './isObject';
import noop from '../function/noop';

describe('isObject', () => {
  it('must return true only when an object is given', () => {
    expect(isObject('string')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(42)).toBe(false);
    expect(isObject(3.14)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject(new Date())).toBe(true);
    expect(isObject(/RegExp/)).toBe(true);
    expect(isObject(window)).toBe(true);
    expect(isObject(document)).toBe(true);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(noop)).toBe(false);
  });
});
