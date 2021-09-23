module.exports = {
    preset: 'ts-jest', // Babel7 + preset-typescript
    testEnvironment:'node', //Environment Target
    setupFiles: ['./dotenv-config-test.js']

}