const { defineConfig } = require("cypress");
const builder = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessor = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const addEsbuildPreprocessor = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const build = builder({
        plugins: [addEsbuildPreprocessor(config)]
      })
      on('file:preprocessor', build)
      addCucumberPreprocessor(on, config)
      return config
    },
    specPattern: "**/*.feature"
  },
});
