import glob from 'glob';
import path from 'path';

describe('@webalt/utils', () => {
  it('must export all functions', () => {
    const files = glob.sync(path.join(__dirname, './**/*.[jt]s'), {
      ignore: [path.join(__dirname, 'index.js'), '**/*.test.[jt]s'],
    });

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const index = require('./index');

    files.forEach((file) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const m = require(file);

      if (m === index) {
        return;
      }

      expect(m.default).toBeInstanceOf(Function);
      expect(index[m.default.name]).toBe(m.default);
    });
  });
});
