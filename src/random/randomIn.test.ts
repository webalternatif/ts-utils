import randomIn from './randomIn';

describe('randomIn', () => {
  it('must return the right number of elements in the given range', () => {
    expect(randomIn(['a', 'b', 'c'], 0)).toEqual('');
    expect(randomIn(['a', 'b', 'c'])).toMatch(/^[a-c]$/);
    expect(randomIn(['a', 'b', 'c'], 42)).toMatch(/^[a-c]{42}$/);
    expect(randomIn(['a', 'b', 'c'], 100)).toMatch(/^[a-c]{100}$/);
    expect(randomIn(['a'], 10)).toMatch(/^a{10}$/);
  });

  it('must not return the same result consecutively', () => {
    expect(randomIn(['a', 'b', 'c'], 42)).not.toEqual(
      randomIn(['a', 'b', 'c'], 42)
    );
  });

  it('could use object as a range', () => {
    expect(randomIn({ first: 'a', second: 'b', third: 'c' }, 42)).toMatch(
      /^[a-c]{42}$/
    );
  });
});
