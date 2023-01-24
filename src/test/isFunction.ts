/**
 * Returns whether the given value is a function or not.
 */
export default function isFunction(
  value: unknown
): value is (...args: Array<unknown>) => unknown {
  return typeof value === 'function';
}
