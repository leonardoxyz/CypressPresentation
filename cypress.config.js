const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.youtube.com',
    setupNodeEvents(on, config) {
    },
  },
});
