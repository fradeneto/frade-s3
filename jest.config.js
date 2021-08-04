const { pathsToModuleNameMapper } = require('ts-jest/utils')

const paths = {
  "@config/*": ["./src/config/*"],
  "@controllers/*": ["./src/controllers/*"],
  "@decorators/*": ["./src/decorators/*"],
  "@jobs/*": ["./src/jobs/*"],
  "@libs/*": ["./src/libs/*"],
  "@middlewares/*": ["./src/middlewares/*"],
  "@models/*": ["./src/models/*"],
  "@repositories/*": ["./src/repositories/*"],
  "@resources/*": ["./src/resources/*"],
  "@services/*": ["./src/services/*"],
  "@utils/*": ["./src/utils/*"],
 }
 
module.exports = {
  clearMocks: true,
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testEnvironment: 'node'
}