/**
 * Returns whether the given value is a boolean or not.
 */
export default function isBoolean(value: unknown): value is boolean {
  return value === true || value === false;
}
