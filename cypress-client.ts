const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        animationDistanceThreshold: 50,
        chromeWebSecurity: false,
        numTestsKeptInMemory: 50,
        requestTimeout: 200000,
        responseTimeout: 20000,
        specPattern: 'cypress/integration/clientContext/**/*.spec.ts',
        retries: {
            runMode: 2,
            openMode: 0
        },
            experimentalStudio: true,
            video: true,
            testIsolation: false
        }
    })