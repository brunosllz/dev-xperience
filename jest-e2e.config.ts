import type { Config } from '@jest/types'
import jestConfig from './jest.config'

export default <Config.InitialOptions>{
  ...jestConfig,
  testEnvironment: './prisma/prisma-test-environment.ts',
  rootDir: './',
  testRegex: '.e2e-spec.ts$',
}
