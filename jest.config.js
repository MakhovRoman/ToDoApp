/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setUpTests.ts'],
  testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
  transform: {
    "^.+\\.svg$": "<rootDir>/__mocks__/svgTransform.js"
  },
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@store(.*)$": "<rootDir>/src/store$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@typings(.*)$": "<rootDir>/src/typings$1",
    "\\.(scss|css)$": "identity-obj-proxy",
  },
  moduleDirectories: ["node_modules", "<rootDir>/src", "<rootDir>/__mocks__"],
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx', 'node'],
  resetMocks: true,
};
