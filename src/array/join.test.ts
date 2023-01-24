import join from './join';

describe('join', () => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  it('must not change the provided array', () => {
    join(vowels);
    expect(vowels).toStrictEqual(['a', 'e', 'i', 'o', 'u', 'y']);
  });

  it('must concatenate items when only one parameter is provided', () => {
    expect(join(vowels)).toBe('aeiouy');
  });

  it('must use second parameter as separator', () => {
    expect(join(vowels, ', ')).toBe('a, e, i, o, u, y');
  });

  it('must use third parameter as last separator', () => {
    expect(join(vowels, ', ', ' and ')).toBe('a, e, i, o, u and y');
  });
});
