import noop from './noop';

describe('noop', () => {
  it('must be callable', () => {
    expect(noop()).toBeUndefined();
  });
});
