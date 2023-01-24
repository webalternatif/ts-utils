/**
 * Returns whether the given value is an integer number or not.
 */
function isInteger(value: unknown, strict?: false): value is string | number;
function isInteger(value: unknown, strict: true): value is number;
function isInteger(value: unknown, strict = false): boolean {
  if (strict && typeof value !== 'number') {
    return false;
  }

  return String(value).match(/^-?\d+$/) !== null;
}

export default isInteger;
