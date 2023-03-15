/* eslint-disable @typescript-eslint/no-empty-function */
import isFunction from './isFunction';
import { expectNotType, expectType } from 'tsd';

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

  it("must keep the function's type in the satisfied branch", () => {
    const maybeF = Math.random() ? (a: number, b: number): number => a + b : 42;

    if (isFunction(maybeF)) {
      expectType<(a: number, b: number) => number>(maybeF);
      expectNotType<42>(maybeF);
    } else {
      expectNotType<(a: number, b: number) => number>(maybeF);
      expectType<42>(maybeF);
    }
  });
});
