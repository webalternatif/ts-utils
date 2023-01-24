/**
 * Converts the first character to lower case.
 */
export default function lcfirst(value: string): string {
  return value.charAt(0).toLowerCase() + value.slice(1);
}
