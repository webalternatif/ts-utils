/**
 * Returns whether the given value is an array or not.
 */
export default function isArray(value: unknown): value is Array<unknown> {
  return Array.isArray
    ? Array.isArray(value)
    : Object.prototype.toString.call(value) === '[object Array]';
}
