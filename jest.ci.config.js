module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    preset: 'jest-expo',
    setupFilesAfterEnv: ['./src/utils/jest/jestHelper.ts'],
    transformIgnorePatterns: [
        'node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)',
    ],
    testMatch: ['**/*.(spec).(ts|tsx)'],
    moduleNameMapper: {
        '^@app': '<rootDir>/src/app',
        '^@components': '<rootDir>/src/components',
        '^@pages': '<rootDir>/src/pages',
        '^@utils': '<rootDir>/src/utils',
    },
    clearMocks: true,
    collectCoverage: false,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/app/**/*.{ts,tsx}'],
    coverageDirectory: '.coverage',
    coveragePathIgnorePatterns: [
        'index.ts',
        'index.tsx',
        'src/utils/theme-provider/domain',
        'src/utils/theme-provider/themes',
        'src/components/chart/ChartDark.web.tsx',
        'src/components/chart/ChartLight.web.tsx',
        'src/components/map/Map.web.tsx',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '.coverage/.report',
                filename: 'report.html',
            },
        ],
    ],
};
