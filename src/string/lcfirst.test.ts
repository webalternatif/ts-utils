import lcfirst from './lcfirst';

describe('lcfirst', () => {
  it('must convert the first character to lower case', () => {
    expect(lcfirst('hello world')).toEqual('hello world');
    expect(lcfirst('Hello World')).toEqual('hello World');
    expect(lcfirst('HELLO WORLD')).toEqual('hELLO WORLD');
  });
});
