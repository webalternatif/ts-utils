import randomIn from './randomIn';

/**
 * Generates a random alphabetic lower case string.
 */
export default function randomAlphaLc(length: number): string {
  return randomIn(
    // prettier-ignore
    [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
      'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ],
    length
  );
}
