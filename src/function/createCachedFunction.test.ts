import createCachedFunction from './createCachedFunction';
import noop from './noop';

describe('createCachedFunction', () => {
  it('must call the final function with cache key and arguments', () => {
    const fn = jest.fn();
    const cachedFn = createCachedFunction(fn);

    const f1 = cachedFn('key1');
    const f2 = cachedFn('key2');

    f1('value1');
    f1('value2');
    f2('value3', 'value3b');

    expect(fn).toHaveBeenCalledTimes(3);
    expect(fn).toHaveBeenNthCalledWith(1, 'key1', 'value1');
    expect(fn).toHaveBeenNthCalledWith(2, 'key1', 'value2');
    expect(fn).toHaveBeenNthCalledWith(3, 'key2', 'value3', 'value3b');
  });

  it('must return the same function for the same key', () => {
    const cachedFn = createCachedFunction(noop);

    expect(cachedFn('key1')).toBe(cachedFn('key1'));
    expect(cachedFn('key1')).not.toBe(cachedFn('key2'));
  });

  test('cache key can be other than a string', () => {
    const fn = jest.fn();
    const cachedFn = createCachedFunction(fn);

    const date = new Date();
    expect(cachedFn(date)).toBe(cachedFn(date));
    expect(cachedFn([1, 1])).toBe(cachedFn([1, 1]));
    expect(cachedFn([1, 1])).not.toBe(cachedFn([1, 2]));
    expect(cachedFn({ a: 1 })).toBe(cachedFn({ a: 1 }));
    expect(cachedFn({ a: 1 })).not.toBe(cachedFn({ a: 2 }));

    const f = cachedFn([1, 2]);

    f(1);
    f(2, 3);

    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenNthCalledWith(1, [1, 2], 1);
    expect(fn).toHaveBeenNthCalledWith(2, [1, 2], 2, 3);
  });
});
