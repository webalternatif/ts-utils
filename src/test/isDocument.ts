import isObject from './isObject';

/**
 * Returns whether the given value is the browser document or not.
 */
export default function isDocument(value: unknown): value is Document {
  return isObject(value) && value.nodeType === 9;
}
