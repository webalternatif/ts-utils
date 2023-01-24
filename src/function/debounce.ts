/**
 * Returns a function that will not be called until the last *call* is at
 * least `delay` ms old.
 */
export default function debounce<A extends Array<unknown>>(
  callback: (...args: A) => unknown,
  delay: number
): (...args: A) => void {
  let timer: NodeJS.Timeout;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  };
}
