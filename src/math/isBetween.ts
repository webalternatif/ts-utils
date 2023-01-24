import isInteger from '../test/isInteger';

/**
 * Returns whether the value is between the given numbers or not.
 */
export default function isBetween(
  value: number,
  min = -Infinity,
  max = Infinity,
  { include = true } = {}
): boolean {
  return isInteger(value) && include
    ? value >= min && value <= max
    : value > min && value < max;
}
