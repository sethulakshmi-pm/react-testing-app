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
        name: "Sethu - chrome latest Windows 11",
        hostname: "ondemand.eu-central-1.saucelabs.com",
      },
    },

    // {
    //   sauceUser: "oauth-pmsethulakshmi1994-71b99",
    //   sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
    //   sauceBuild: "selenium-build-83FYR",
    //   browserName: "internet explorer",
    //   browserVersion: "11.103",
    //   platformName: "Windows 10",
    //   "sauce:options": {
    //     build: "selenium-build-83FYR",
    //     name: "Sethu Test",
    //     hostname: "ondemand.eu-central-1.saucelabs.com",
    //   },
    // },

    // {
    //   sauceUser: "oauth-pmsethulakshmi1994-71b99",
    //   sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
    //   sauceBuild: "selenium-build-83FYR",
    //   browserName: "MicrosoftEdge",
    //   browserVersion: "14.14393",
    //   platformName: "Windows 10",
    //   "sauce:options": {
    //     build: "selenium-build-83FYR",
    //     name: "Sethu Test",
    //     hostname: "ondemand.eu-central-1.saucelabs.com",
    //   },
    // },
  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};
