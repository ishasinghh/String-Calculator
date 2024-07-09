// import type { Config } from "@jest/types";

// const config: Config.InitialOptions = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   testMatch: ["<rootDir>/tests/**/*.test.ts"],
//   moduleDirectories: ["node_modules", "src", "tests"],
// };

// export default config;

import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
  moduleDirectories: ["node_modules", "src", "tests"],
};

export default config;
