const sauceUser = "oauth-sethu17molus-8c3ef";
const sauceKey = "bfdc2635-1a65-4cb3-9679-4df8a5b05bc5";
const sauceBuild = "selenium-build-PWZ1N";

exports.config = {
  specs: ["test/e2e/**/*.spec.js"],
  hostname: "ondemand.eu-central-1.saucelabs.com",
  sauceUser: "oauth-sethu17molus-8c3ef",
  sauceKey: "bfdc2635-1a65-4cb3-9679-4df8a5b05bc5",
  sauceBuild: "selenium-build-PWZ1N",
  sauceRegion: "eu",

  multiCapabilities: [
    newSaucelabsCapability(
      "chrome",
      "latest",
      "Windows 11",
      "1-SETHULAKSHMI TESTING - chrome, latest, Windows 11"
    ),
    newSaucelabsCapability(
      "internet explorer",
      "11.103",
      "Windows 10",
      "2-SETHULAKSHMI TESTING - internet explorer, 11.103, Windows 10"
    ),
    newSaucelabsCapability(
      "MicrosoftEdge",
      "14.14393",
      "Windows 10",
      "3-SETHULAKSHMI TESTING - MicrosoftEdge, 14.14393, Windows 10"
    ),
    newSaucelabsCapability(
      "safari",
      "9.0",
      "OS X 10.11",
      "4-SETHULAKSHMI TESTING - safari, 9.0, OS X 10.11"
    ),
    newSaucelabsCapability(
      "safari",
      "10.1",
      "macOS 10.12",
      "5-SETHULAKSHMI TESTING - safari, 10.1, macOS 10.12"
    ),
    newSaucelabsCapability(
      "safari",
      "11.0",
      "macOS 10.12",
      "6-SETHULAKSHMI TESTING - safari, 11.0, macOS 10.12"
    ),
    newSaucelabsCapability(
      "safari",
      "11.1",
      "macOS 10.13",
      "7-SETHULAKSHMI TESTING - safari, 11.1, macOS 10.13"
    ),
    newSaucelabsCapability(
      "firefox",
      "78.0",
      "Windows 7",
      "8-SETHULAKSHMI TESTING - firefox, 78.0, Windows 7"
    ),
    newSaucelabsCapability(
      "firefox",
      "58.0",
      "Windows 11",
      "9-SETHULAKSHMI TESTING - firefox, 58.0, Windows 11"
    ),
    newSaucelabsCapability(
      "chrome",
      "67.0",
      "Windows 10",
      "10-SETHULAKSHMI TESTING - chrome, 67.0, Windows 10"
    ),
    newSaucelabsCapability(
      "chrome",
      "54.0",
      "OS X 10.11",
      "11-SETHULAKSHMI TESTING - chrome, 54.0, OS X 10.11"
    ),
    newSaucelabsCapability(
      "chrome",
      "65.0",
      "OS X 10.11",
      "12-SETHULAKSHMI TESTING - chrome, 65.0, OS X 10.11"
    ),
  ],

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
};

function newSaucelabsCapability(
  browserName,
  browserVersion,
  platformName,
  name
) {
  return {
    sauceUser,
    sauceKey,
    sauceBuild,

    browserName,
    browserVersion,
    platformName,
    name,
    "sauce:options": {
      build: "selenium-build-83FYR",
      hostname: "ondemand.eu-central-1.saucelabs.com",
    },
  };
}
