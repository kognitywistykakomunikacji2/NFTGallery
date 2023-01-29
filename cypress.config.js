const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      if (config.env.master) {
        return {
          baseUrl: "https://k2804.gitlab.io/final-project-2",
          experimentalStudio: true,
          env: {
            env: "master",
          },
        };
      } else
        return {
          baseUrl: "http://localhost:3000",
          experimentalStudio: true,
          env: {
            env: "qa",                
          },
        };
    },
  },  
});

// e2e: {
//   setupNodeEvents(on, config) {
//     // implement node event listeners here
//   },
//   env: {
//     environment: "development"
//   },
//   baseUrl: '',
//   experimentalStudio: true
  
// },