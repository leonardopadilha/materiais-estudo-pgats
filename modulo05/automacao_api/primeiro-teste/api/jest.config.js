module.exports = {
  testEnvironment: "allure-jest/node",
  testEnvironmentOptions: {
    resultsDir: "./allure-results",
  },
  reporters: [
    'default',
    ['jest-stare', {
      resultsDir: 'jest-stare',
      reportTitle: 'Relatório de Testes',
      additionalResultsProcessors: ['jest-html-reporter']
    }]
  ]
};
