import isDocument from './isDocument';
import noop from '../function/noop';

describe('isDocument', () => {
  it('must return true only when the browser document is given', () => {
    expect(isDocument('string')).toBe(false);
    expect(isDocument(true)).toBe(false);
    expect(isDocument(42)).toBe(false);
    expect(isDocument(3.14)).toBe(false);
    expect(isDocument([])).toBe(false);
    expect(isDocument({})).toBe(false);
    expect(isDocument(new Date())).toBe(false);
    expect(isDocument(/RegExp/)).toBe(false);
    expect(isDocument(window)).toBe(false);
    expect(isDocument(document)).toBe(true);
    expect(isDocument(undefined)).toBe(false);
    expect(isDocument(noop)).toBe(false);
  });
});
