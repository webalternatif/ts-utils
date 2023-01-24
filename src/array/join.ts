export default function join(
  values: Array<string>,
  separator = '',
  lastSeparator = separator
): string {
  if (values.length === 0) {
    return '';
  }

  const [lastValue, ...reversedFirstValues] = [...values].reverse();

  if (reversedFirstValues.length === 0) {
    return lastValue;
  }

  return reversedFirstValues
    .reverse()
    .join(separator)
    .concat(lastSeparator || '')
    .concat(lastValue);
}
