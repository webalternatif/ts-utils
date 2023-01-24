/**
 * Returns whether the given value is a date or not.
 */
export default function isDate(value: unknown): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}
