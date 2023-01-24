/* eslint-disable @typescript-eslint/no-empty-function */
import isFunction from './isFunction';

describe('isFunction', () => {
  it('must return true only when a function is given', () => {
    expect(isFunction('string')).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(42)).toBe(false);
    expect(isFunction(3.14)).toBe(false);
    expect(isFunction([])).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(/RegExp/)).toBe(false);
    expect(isFunction(window)).toBe(false);
    expect(isFunction(document)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction(() => {})).toBe(true);
    expect(isFunction(function () {})).toBe(true);
  });
});
