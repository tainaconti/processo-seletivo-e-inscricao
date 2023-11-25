const { defineConfig } = require('cypress')
const fs = require('fs')
const path = require('path'); // Adicione esta linha
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE0NTk4ZTJlLTYxNGEtNGY5NC1hY2EyLTZjMzM4NjYyMzQ4OS0xNzAwODcxMTIxMjMzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNjNiYTMxZTctNTIzMy00YmMxLTljYWYtODlmNDU4NmNiNzhhIiwidHlwZSI6InQifQ.edPyCkvnZ7NZ3tn_dV0paDHW2uEO_ix-PQvFsYxsYPU'


module.exports = defineConfig({
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
             on('after:run', (results) => {
                return tesults.upload(results, {
              project: 'eInscriaao',
              token: 'TOKEN',
    });
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
