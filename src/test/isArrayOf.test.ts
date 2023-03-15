import { expectType } from 'tsd';

import isArrayOf from './isArrayOf';
import isString from './isString';

describe('isArrayOf', () => {
  it('must return true when an empty array is given', () => {
    expect(isArrayOf((item): item is never => false)([])).toBe(true);
  });

  it('must return true only when an array with elements that match the predicate is given', () => {
    const isArrayOfStrings = isArrayOf(isString);

    expect(isArrayOfStrings(['123', '456'])).toBe(true);
    expect(isArrayOfStrings(['123', 456])).toBe(false);
    expect(isArrayOfStrings([123, 456])).toBe(false);
  });

  it('must be typed', () => {
    const isArrayOfStrings = isArrayOf(isString);
    const isArrayOfArrayOfStrings = isArrayOf(isArrayOfStrings);

    const array = Math.random() ? ['123', '456'] : [['123', '456']];

    if (isArrayOfStrings(array)) {
      expectType<Array<string>>(array);
    }

    if (isArrayOfArrayOfStrings(array)) {
      expectType<Array<Array<string>>>(array);
    }
  });
});
