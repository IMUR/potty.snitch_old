// jest.config.js
module.exports = {
    // ... other options
    setupFilesAfterEnv: ['./jest.setup.js'],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
    }
};