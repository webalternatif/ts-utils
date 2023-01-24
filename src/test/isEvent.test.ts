import isEvent from './isEvent';
import noop from '../function/noop';

describe('isEvent', () => {
  it('must return true only when an event is given', () => {
    expect(isEvent('string')).toBe(false);
    expect(isEvent(true)).toBe(false);
    expect(isEvent(42)).toBe(false);
    expect(isEvent(3.14)).toBe(false);
    expect(isEvent([])).toBe(false);
    expect(isEvent({})).toBe(false);
    expect(isEvent(new Date())).toBe(false);
    expect(isEvent(/RegExp/)).toBe(false);
    expect(isEvent(window)).toBe(false);
    expect(isEvent(document)).toBe(false);
    expect(isEvent(undefined)).toBe(false);
    expect(isEvent(new Event('event'))).toBe(true);
    expect(isEvent(noop)).toBe(false);
  });
});
