module.exports = {
    roots: ['<rootDir>/src/tests/'],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    globals: {
      'ts-jest': {
        diagnostics: true,
      },
    },
  };
  