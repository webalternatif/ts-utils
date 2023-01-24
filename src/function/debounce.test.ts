import debounce from './debounce';

describe('debounce', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(jest.clearAllTimers);

  it('must wait the delay after the last call before executing the callback with the last arguments', () => {
    const fn = jest.fn();

    const debouncedFn = debounce(fn, 200);
    expect(fn).not.toHaveBeenCalled();

    debouncedFn('first call');
    expect(fn).not.toHaveBeenCalled();

    debouncedFn('second call');
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(199);
    expect(fn).not.toHaveBeenCalled();

    debouncedFn('third call');
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(199);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenLastCalledWith('third call');
  });

  test('debounced function can be called with multiple arguments', () => {
    const fn = jest.fn();

    const debouncedFn = debounce(fn, 200);
    expect(fn).not.toHaveBeenCalled();

    const args = ['first', ['awesome'], { call: 42 }, new Date()];
    debouncedFn(...args);

    jest.advanceTimersByTime(200);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenLastCalledWith(...args);
  });
});
