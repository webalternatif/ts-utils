import isUndefined from './isUndefined';
import noop from '../function/noop';

describe('isUndefined', () => {
  it('must return true only when a string is given', () => {
    expect(isUndefined('string')).toBe(false);
    expect(isUndefined(true)).toBe(false);
    expect(isUndefined(42)).toBe(false);
    expect(isUndefined(3.14)).toBe(false);
    expect(isUndefined([])).toBe(false);
    expect(isUndefined({})).toBe(false);
    expect(isUndefined(new Date())).toBe(false);
    expect(isUndefined(/RegExp/)).toBe(false);
    expect(isUndefined(window)).toBe(false);
    expect(isUndefined(document)).toBe(false);
    expect(isUndefined(undefined)).toBe(true);
    expect(isUndefined(noop)).toBe(false);
  });
});
