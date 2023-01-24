import isObject from '../test/isObject';
import randomBetween from './randomBetween';

/**
 * Generates a random string composed of values of a range.
 */
export default function randomIn(
  // eslint-disable-next-line @typescript-eslint/ban-types
  range: Record<string | number | symbol, string> | Array<string>,
  length = 1
): string {
  const arrayRange = isObject(range) ? Object.values(range) : range;

  let result = '';
  for (let i = 0; i < length; i++) {
    result += arrayRange[randomBetween(0, arrayRange.length - 1)];
  }

  return result;
}
