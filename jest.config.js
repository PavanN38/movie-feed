module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '<rootDir>/node_modules/.cache/jest',
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/__tests__/**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};
