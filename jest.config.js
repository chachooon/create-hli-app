const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './'
});

const customJestConfig = {
  roots: ['./'],
  testMatch: ['**/*.test.(ts|tsx|js|jsx)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom'
};

module.exports = createJestConfig(customJestConfig);
