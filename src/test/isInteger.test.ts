import isInteger from './isInteger';
import noop from '../function/noop';

describe('isInteger', () => {
  it('must return true only when an integer number is given', () => {
    expect(isInteger('string')).toBe(false);
    expect(isInteger(true)).toBe(false);
    expect(isInteger(42)).toBe(true);
    expect(isInteger('42')).toBe(true);
    expect(isInteger('42', true)).toBe(false);
    expect(isInteger(3.14)).toBe(false);
    expect(isInteger('3.14')).toBe(false);
    expect(isInteger('3.14', true)).toBe(false);
    expect(isInteger(-42)).toBe(true);
    expect(isInteger('-42')).toBe(true);
    expect(isInteger('-42', true)).toBe(false);
    expect(isInteger(-3.14)).toBe(false);
    expect(isInteger('-3.14')).toBe(false);
    expect(isInteger('-3.14', true)).toBe(false);
    expect(isInteger(Number(42))).toBe(true);
    expect(isInteger(Number(3.14))).toBe(false);
    expect(isInteger([])).toBe(false);
    expect(isInteger({})).toBe(false);
    expect(isInteger(new Date())).toBe(false);
    expect(isInteger(/RegExp/)).toBe(false);
    expect(isInteger(window)).toBe(false);
    expect(isInteger(document)).toBe(false);
    expect(isInteger(undefined)).toBe(false);
    expect(isInteger(noop)).toBe(false);
  });
});
