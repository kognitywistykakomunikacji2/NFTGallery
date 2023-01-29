const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      someVar: "fuckfuckityfuck"
    },
    baseUrl: 'https://k2804.gitlab.io/final-project-2',
    experimentalStudio: true
    
  },
});
