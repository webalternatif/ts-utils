/**
 * Returns whether the given value is a regular expression or not.
 */
export default function isRegExp(value: unknown): value is RegExp {
  return Object.prototype.toString.call(value) === '[object RegExp]';
}
