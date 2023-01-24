import { throttleFactory } from './throttle';

describe('throttle', () => {
  let advanceTimersByTime: typeof jest.advanceTimersByTime,
    throttle: ReturnType<typeof throttleFactory>;

  beforeEach(() => {
    jest.useFakeTimers();

    let currentDate = new Date();

    throttle = throttleFactory(() => currentDate.getTime());

    advanceTimersByTime = jest.advanceTimersByTime;
    jest.advanceTimersByTime = (time) => {
      advanceTimersByTime(time);
      currentDate = new Date(currentDate.getTime() + time);

      return jest;
    };
  });

  afterEach(() => {
    jest.advanceTimersByTime = advanceTimersByTime;
    jest.clearAllTimers();
  });

  it('must not be called if the last execution is sooner than the delay', () => {
    const fn = jest.fn();

    const throttledFn = throttle(fn, 200);
    expect(fn).not.toHaveBeenCalled();

    throttledFn('first call');
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenLastCalledWith('first call');

    throttledFn('second call');
    expect(fn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(199);
    expect(fn).toHaveBeenCalledTimes(1);

    throttledFn('third call');
    expect(fn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith('third call');
  });

  test('throttled function can be called with multiple arguments', () => {
    const fn = jest.fn();

    const throttledFn = throttle(fn, 200);
    expect(fn).not.toHaveBeenCalled();

    const args = ['first', ['awesome'], { call: 42 }, new Date()];
    throttledFn(...args);

    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenLastCalledWith(...args);
  });
});
