const { defineConfig } = require("cypress");


module.exports = defineConfig({

  viewportWidth: 2500,
  viewportHeight: 1500,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    //baseUrl: "https://example.cypress.io/"
  },
});
