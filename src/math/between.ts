export default function between(
  value: number,
  min?: number,
  max?: number
): number {
  if (min === undefined) {
    return max === undefined ? value : Math.min(max, value);
  }

  return max === undefined
    ? Math.max(min, value)
    : Math.max(min, Math.min(max, value));
}
