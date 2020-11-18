/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  preset: "./jest.preset.ts",
  roots: ["./tests"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\", "RAW", "cypress"]
}
