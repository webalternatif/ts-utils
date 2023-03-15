import isArray from './isArray';

/**
 * Higher order function that :
 * - takes a function that returns whether the given value is of a specific type `T` (e.g. any is* function),
 * - returns a function that returns whether the given value is an array of this specific type `T`.
 *
 * ```ts
 * const isArrayOfStrings = isArrayOf(isString);
 * if (isArrayOfStrings(value)) {
 *   // value is Array<string>
 * }
 * ```
 */
export default function isArrayOf<T>(predicate: (item: unknown) => item is T) {
  return (value: unknown): value is Array<T> =>
    isArray(value) && value.every(predicate);
}
