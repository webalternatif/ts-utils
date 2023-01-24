import isFloat from './isFloat';
import noop from '../function/noop';

describe('isFloat', () => {
  it('must return true only when a floating number is given', () => {
    expect(isFloat('string')).toBe(false);
    expect(isFloat(true)).toBe(false);
    expect(isFloat(42)).toBe(true);
    expect(isFloat('42')).toBe(true);
    expect(isFloat('42', true)).toBe(false);
    expect(isFloat(3.14)).toBe(true);
    expect(isFloat('3.14')).toBe(true);
    expect(isFloat('3.14', true)).toBe(false);
    expect(isFloat(-42)).toBe(true);
    expect(isFloat('-42')).toBe(true);
    expect(isFloat('-42', true)).toBe(false);
    expect(isFloat(-3.14)).toBe(true);
    expect(isFloat('-3.14')).toBe(true);
    expect(isFloat('-3.14', true)).toBe(false);
    expect(isFloat(Number(42))).toBe(true);
    expect(isFloat(Number(3.14))).toBe(true);
    expect(isFloat([])).toBe(false);
    expect(isFloat({})).toBe(false);
    expect(isFloat(new Date())).toBe(false);
    expect(isFloat(/RegExp/)).toBe(false);
    expect(isFloat(window)).toBe(false);
    expect(isFloat(document)).toBe(false);
    expect(isFloat(undefined)).toBe(false);
    expect(isFloat(noop)).toBe(false);
  });
});
