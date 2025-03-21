
const {defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  watchForFileChanges: true,
  experimentalStudio: true,
  experimentalWebKitSupport: false,
  experimentalMemoryManagement: true,
  video: true,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth:1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
