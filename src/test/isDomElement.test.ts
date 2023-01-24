import isDomElement from './isDomElement';
import noop from '../function/noop';

describe('isDomElement', () => {
  it('must return true only when a dom element is given', () => {
    expect(isDomElement('string')).toBe(false);
    expect(isDomElement(true)).toBe(false);
    expect(isDomElement(42)).toBe(false);
    expect(isDomElement(3.14)).toBe(false);
    expect(isDomElement([])).toBe(false);
    expect(isDomElement({})).toBe(false);
    expect(isDomElement(new Date())).toBe(false);
    expect(isDomElement(/RegExp/)).toBe(false);
    expect(isDomElement(window)).toBe(false);
    expect(isDomElement(document)).toBe(false);
    expect(isDomElement(undefined)).toBe(false);
    expect(isDomElement(document.body)).toBe(true);
    expect(isDomElement(noop)).toBe(false);
  });

  it('must handle when `HTMLElement` does not exist', () => {
    const realHTMLElement = HTMLElement;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete global.HTMLElement;
    expect(isDomElement(document.body)).toBe(true);

    global.HTMLElement = realHTMLElement;
  });
});
