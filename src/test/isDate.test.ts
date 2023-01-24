import isDate from './isDate';
import noop from '../function/noop';

describe('isDate', () => {
  it('must return true only when a date is given', () => {
    expect(isDate('string')).toBe(false);
    expect(isDate(true)).toBe(false);
    expect(isDate(42)).toBe(false);
    expect(isDate(3.14)).toBe(false);
    expect(isDate([])).toBe(false);
    expect(isDate({})).toBe(false);
    expect(isDate(new Date())).toBe(true);
    expect(isDate(/RegExp/)).toBe(false);
    expect(isDate(window)).toBe(false);
    expect(isDate(document)).toBe(false);
    expect(isDate(undefined)).toBe(false);
    expect(isDate(noop)).toBe(false);
  });
});
