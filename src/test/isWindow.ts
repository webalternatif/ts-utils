import isObject from './isObject';

/**
 * Returns whether the given value is the browser window or not.
 */
export default function isWindow(value: unknown): value is Window {
  return isObject(value) && value === value.window;
}
