type Callback<K, A extends Array<unknown>> = (key: K, ...args: A) => void;

type Response<K, A extends Array<unknown>> = (key: K) => FinalFunction<A>;

type FinalFunction<A extends Array<unknown>> = (...args: A) => void;

/**
 * Returns a cached function, in order to do something like that :
 *
 * ```js
 * const values = {}
 * const setter = createCachedFunction((key, value) => {
 *   values[key] = value
 * })
 *
 * const setA = setter('a')
 * const setB = setter('b')
 *
 * expect(setter('a')).toBe(setA)
 *
 * setA(42)
 * expect(values).toEqual({ a: 42 })
 * setB(1337)
 * expect(values).toEqual({ a: 42, b: 1337 })
 * ```
 */
export default function createCachedFunction<K, A extends Array<unknown>>(
  callback: Callback<K, A>
): Response<K, A> {
  const keyCache: Record<string, K> = {};
  const cache: Record<string, FinalFunction<A>> = {};

  return (key) => {
    const stringKey = JSON.stringify(key);

    if (!(stringKey in cache)) {
      keyCache[stringKey] = key;
      cache[stringKey] = (...args) => callback(key, ...args);
    }

    return cache[stringKey];
  };
}
