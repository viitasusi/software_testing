export default {
  transform: {
    '^.+\\.js$': 'esbuild-jest', // Use esbuild for transforming JavaScript
  },
  testEnvironment: 'node', // Make sure to use Node environment for testing
  collectCoverage: true, // Ensure coverage is enabled
  coverageReporters: ['lcov', 'text'],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.internal/" // Exclude the .internal directory from testing
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/.internal/" // Exclude the .internal directory from coverage
  ],
};
