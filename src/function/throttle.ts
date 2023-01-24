export function throttleFactory(getNow: () => number) {
  return function throttle<A extends Array<unknown>, R>(
    callback: (...args: A) => R,
    delay: number
  ): (...args: A) => R | undefined {
    let last: number, timer: NodeJS.Timeout;

    return (...args: A) => {
      const now = getNow();

      if (last && now < last + delay) {
        clearTimeout(timer);

        timer = setTimeout(() => {
          last = now;
          callback(...args);
        }, delay - (now - last));
      } else {
        last = now;

        return callback(...args);
      }
    };
  };
}

/**
 * Returns a function that will not be called until the last *execution* is
 * less than `delay` ms old. This function will return the value returned by the
 * original function, or undefined if the latter has not been called.
 */
export default throttleFactory(() => +new Date());
