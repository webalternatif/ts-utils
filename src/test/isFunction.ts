/**
 * Returns whether the given value is a function or not.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}
