import isObject from './isObject';

/**
 * Returns whether the given value is a dom element or not.
 */
const isDomElement = (value: unknown): value is HTMLElement => {
  try {
    return value instanceof HTMLElement;
  } catch (e) {
    return isObject(value) && value.nodeType === 1;
  }
};

export default isDomElement;
