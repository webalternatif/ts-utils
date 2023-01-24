import isFunction from './isFunction';
import isObject from './isObject';
import isWindow from './isWindow';
import isDocument from './isDocument';
import isEvent from './isEvent';
import isDomElement from './isDomElement';

/**
 * Returns whether the given value is a plain object or not.
 */
const isPlainObject = (value: unknown): value is Record<string, unknown> => {
  const classes = [
    'Boolean',
    'Number',
    'String',
    'Function',
    'Array',
    'Date',
    'RegExp',
    'Object',
    'Error',
  ];
  const class2type = Object.assign(
    {},
    ...classes.map((name) => ({
      [`[object ${name}]`]: name.toLowerCase(),
    }))
  );

  const coreHasOwn = class2type.hasOwnProperty;
  const coreToString = class2type.toString;

  const type =
    value === null
      ? String(value)
      : isObject(value) || isFunction(value)
      ? class2type[coreToString.call(value)] || 'object'
      : typeof value;

  // Must be an object.
  // Because of IE, we also have to check the presence of the constructor property.
  // Make sure that DOM nodes, events, document and window objects don't pass through, as well
  if (
    !value ||
    type !== 'object' ||
    isDomElement(value) ||
    isEvent(value) ||
    isDocument(value) ||
    isWindow(value)
  ) {
    return false;
  }

  try {
    // Not own constructor property must be object
    if (
      isObject(value) &&
      value.constructor &&
      !coreHasOwn.call(value, 'constructor') &&
      !coreHasOwn.call(value.constructor.prototype, 'isPrototypeOf')
    ) {
      return false;
    }
  } catch (e) {
    // IE8,9 Will throw exceptions on certain host objects #9897
    return false;
  }

  if (!isObject(value)) {
    return false;
  }

  // Own properties are enumerated firstly, so to speed up,
  // if last one is own, then all properties are own.
  let key;
  // eslint-disable-next-line no-empty
  for (key in value) {
  }

  return key === undefined || coreHasOwn.call(value, key);
};

export default isPlainObject;
