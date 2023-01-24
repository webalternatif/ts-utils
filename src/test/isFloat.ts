/**
 * Returns whether the given value is a floating number or not.
 */
function isFloat(value: unknown, strict?: false): value is string | number;
function isFloat(value: unknown, strict: true): value is number;
function isFloat(value: unknown, strict = false): boolean {
  if (strict && typeof value !== 'number') {
    return false;
  }

  return String(value).match(/^-?\d+(\.\d+)?$/) !== null;
}

export default isFloat;
