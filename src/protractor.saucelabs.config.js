/* eslint-env node */

exports.config = {
  specs: ["test/e2e/**/*.spec.js"],
  hostname: "ondemand.eu-central-1.saucelabs.com",
  // TODO: disable webvital tests for saucelab for now, since browsers in saucelab seems never return webvital metrics
  // exclude: ['test/e2e/12_webvitalsAsCustomEvent/*.spec.js'],
  sauceUser: "oauth-pmsethulakshmi1994-71b99",
  sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
  sauceBuild: "selenium-build-83FYR",
  region: "eu",
  sauceRegion: "eu",
  // See https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
  multiCapabilities: [
    {
      sauceUser: "oauth-pmsethulakshmi1994-71b99",
      sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
      sauceBuild: "selenium-build-83FYR",
      sauceRegion: "eu",
      browserName: "chrome",
      browserVersion: "latest",
      platformName: "Windows 11",
      "sauce:options": {
        build: "selenium-build-83FYR",
        name: "sethutestname",
        hostname: "ondemand.eu-central-1.saucelabs.com",
        region: "eu",
      },
    },
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};
