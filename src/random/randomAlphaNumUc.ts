import randomIn from './randomIn';

/**
 * Generates a random alphanumeric upper case string.
 */
export default function randomAlphaNumUc(length: number): string {
  return randomIn(
    // prettier-ignore
    [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
      'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    ],
    length
  );
}
