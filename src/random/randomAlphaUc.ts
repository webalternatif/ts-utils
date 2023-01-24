import randomIn from './randomIn';

/**
 * Generates a random alphabetic upper case string.
 */
export default function randomAlphaUc(length: number): string {
  return randomIn(
    // prettier-ignore
    [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    ],
    length
  );
}
