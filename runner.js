const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE0NTk4ZTJlLTYxNGEtNGY5NC1hY2EyLTZjMzM4NjYyMzQ4OS0xNzAwODcxMTIxMjMzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNjNiYTMxZTctNTIzMy00YmMxLTljYWYtODlmNDU4NmNiNzhhIiwidHlwZSI6InQifQ.edPyCkvnZ7NZ3tn_dV0paDHW2uEO_ix-PQvFsYxsYPU'

const cypressOptions = {
  spec: '**/*.spec.ts', 
};

cypress.run(cypressOptions)
  .then((results) => {
    const args = {
      target: TOKEN,
    };
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err);
  });
