import ucfirst from './ucfirst';

describe('ucfirst', () => {
  it('must convert the first character to upper case', () => {
    expect(ucfirst('hello world')).toEqual('Hello world');
    expect(ucfirst('Hello World')).toEqual('Hello World');
    expect(ucfirst('HELLO WORLD')).toEqual('HELLO WORLD');
  });
});
