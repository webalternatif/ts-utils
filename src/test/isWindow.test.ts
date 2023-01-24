import isWindow from './isWindow';
import noop from '../function/noop';

describe('isWindow', () => {
  it('must return true only when a string is given', () => {
    expect(isWindow('string')).toBe(false);
    expect(isWindow(true)).toBe(false);
    expect(isWindow(42)).toBe(false);
    expect(isWindow(3.14)).toBe(false);
    expect(isWindow([])).toBe(false);
    expect(isWindow({})).toBe(false);
    expect(isWindow(new Date())).toBe(false);
    expect(isWindow(/RegExp/)).toBe(false);
    expect(isWindow(window)).toBe(true);
    expect(isWindow(document)).toBe(false);
    expect(isWindow(undefined)).toBe(false);
    expect(isWindow(noop)).toBe(false);
  });
});
