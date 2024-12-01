export default {
  transform: {
    '^.+\\.js$': 'esbuild-jest', // Use esbuild for transforming JavaScript
  },
  testEnvironment: 'node', // Use Node environment for testing
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
  reporters: [
    "default",
    [
      "jest-stare",
      {
        resultDir: "coverage/jest-stare",
        reportTitle: "jest-stare!",
        additionalResultsProcessors: ["jest-junit"],
        coverageLink: "../../coverage/lcov-report/index.html",
        jestStareConfigJson: "jest-stare.json",
        jestGlobalConfigJson: "globalStuff.json"
      }
    ]
  ]
};

