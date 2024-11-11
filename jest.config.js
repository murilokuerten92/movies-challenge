module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.react/'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.ts(x)?',
        '!src/pages/**/*.tsx',
        '!src/styles/**/*.ts',
        '!src/types/**/*.d.ts',
        '!src/**/mock.ts'
    ],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['react/babel'] }]
    }
}