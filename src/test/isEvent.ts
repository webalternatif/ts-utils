import isObject from './isObject';

/**
 * Returns whether the given value is an event or not.
 */
export default function isEvent(value: unknown): value is Event {
  return (
    isObject(value) &&
    (Boolean(value.preventDefault) ||
      Boolean(
        value.constructor &&
          value.constructor.toString &&
          value.constructor.toString() === '[object Event]'
      ))
  );
}
