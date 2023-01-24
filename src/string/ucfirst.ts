/**
 * Converts the first character to upper case.
 */
export default function ucfirst(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
