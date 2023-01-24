/* eslint-disable @typescript-eslint/no-array-constructor */
import isArray from './isArray';
import noop from '../function/noop';

describe('isArray', () => {
  it('must return true only when an array is given', () => {
    expect(isArray('string')).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(42)).toBe(false);
    expect(isArray(3.14)).toBe(false);
    expect(isArray([])).toBe(true);
    expect(isArray(Array())).toBe(true);
    expect(isArray({})).toBe(false);
    expect(isArray(new Date())).toBe(false);
    expect(isArray(/RegExp/)).toBe(false);
    expect(isArray(window)).toBe(false);
    expect(isArray(document)).toBe(false);
    expect(isArray(undefined)).toBe(false);
    expect(isArray(noop)).toBe(false);
  });

  it('must handle when `Array.isArray` does not exist', () => {
    const realIsArray = Array.isArray;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete Array.isArray;
    expect(isArray([])).toBe(true);
    expect(isArray(Array())).toBe(true);

    Array.isArray = realIsArray;
  });
});
