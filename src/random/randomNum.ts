import randomIn from './randomIn';

/**
 * Generates a random numeric string.
 */
export default function randomNum(length: number): string {
  return randomIn(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], length);
}
