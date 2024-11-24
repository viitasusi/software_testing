export default {
  transform: {
    '^.+\\.js$': 'esbuild-jest', // Use esbuild for transforming JavaScript
  },
  testEnvironment: 'node', // Make sure to use Node environment for testing
};