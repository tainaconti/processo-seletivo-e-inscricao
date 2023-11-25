import { defineConfig } from 'cypress';
import fs from 'fs';
import path from 'path'; 

module.exports = defineConfig({
    projectId: 'tovh63',
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                hasPdfFiles(folderName) {
                    return new Promise((resolve, reject) => {
                        fs.readdir(folderName, (err, files) => {
                            if (err) {
                                reject(err);
                            } else {
                                const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
                                resolve(pdfFiles.length > 0);
                            }
                        })
                    })
                }
            })
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
