/**
 * Returns whether the given value is undefined or not.
 */
export default function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}
