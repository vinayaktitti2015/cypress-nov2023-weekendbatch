const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    watchForFileChanges: true,
    defaultCommandTimeout: 5000,
    pageLoadTimeout: 30000,
  },
});
