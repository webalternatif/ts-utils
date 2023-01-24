/**
 * Returns whether the given value is a string or not.
 */
export default function isString(value: unknown): value is string {
  return (
    typeof value === 'string' ||
    Object.prototype.toString.call(value) === '[object String]'
  );
}
