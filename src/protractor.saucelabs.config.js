exports.config = {
  specs: ["test/e2e/**/*.spec.js"],
  hostname: "ondemand.eu-central-1.saucelabs.com",
  sauceUser: "oauth-pmsethulakshmi1994-71b99",
  sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
  sauceBuild: "selenium-build-83FYR",
  sauceRegion: "eu",
  multiCapabilities: [
    {
      sauceUser: "oauth-pmsethulakshmi1994-71b99",
      sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
      sauceBuild: "selenium-build-83FYR",
      browserName: "chrome",
      browserVersion: "latest",
      platformName: "Windows 11",
      "sauce:options": {
        build: "selenium-build-83FYR",
        name: "sethutestname",
        hostname: "ondemand.eu-central-1.saucelabs.com",
      },
    },
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};
