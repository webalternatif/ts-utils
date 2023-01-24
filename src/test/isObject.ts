import isArray from './isArray';

/**
 * Returns whether the given value is an object or not.
 */
export default function isObject(
  value: unknown
): value is Record<string, unknown> {
  // not sure of the return type here
  return typeof value === 'object' && !isArray(value) && !!value;
}
