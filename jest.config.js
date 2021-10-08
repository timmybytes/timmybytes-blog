module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '@test/(.*)$': '<rootDir>/test/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@context/(.*)$': '<rootDir>/src/context/$1',
    '@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '@pages/(.*)$': '<rootDir>/src/pages/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@theme/(.*)$': '<rootDir>/src/theme/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
}
