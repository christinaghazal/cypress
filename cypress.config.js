const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pojjaf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
