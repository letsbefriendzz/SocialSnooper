/** @type {import('jest').Config} */
const config = {
    verbose: true,
    setupFilesAfterEnv: ['./jest.setup.js'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
};

module.exports = config;