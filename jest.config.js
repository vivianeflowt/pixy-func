const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testMatch: ['**/src/**/*.spec.[jt]s?(x)'],
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/fixtures/', '<rootDir>/test/utils/.+'],
  testTimeout: 4 * 60 * 1000, // 4 minutes
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
  cacheDirectory: path.join(__dirname, '.jest-cache'),
};
