const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");


module.exports = defineConfig({
  projectId: '',
  chromeWebSecurity: false,
  experimentalStudio: true,
  watchForFileChanges: true,
  experimentalWebKitSupport: false,
  experimentalMemoryManagement: true,
  video: false,
  screenshotOnRunFailure: true,
  trashAssetsBeforeRuns: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    overwrite: false,
    html: true,
  },
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 50000,
  viewportWidth:1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    experimentalOriginDependencies: true,
    experimentalRunAllSpecs: true,
    video:true,
    setupNodeEvents: (on, config) => {
      allureCypress(on, {
        resultsDir: "./allure-results",
      });
      return config;
    },
  },
});
