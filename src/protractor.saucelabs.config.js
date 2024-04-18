// const sauceUser = "oauth-pmsethulakshmi1994-71b99";
// const sauceKey = "c886851b-044e-4c37-8e9a-62867cea27a5";
// const sauceBuild = "selenium-build-83FYR";
const sauceUser = "oauth-sethu17molus-8c3ef";
const sauceKey = "bfdc2635-1a65-4cb3-9679-4df8a5b05bc5";
const sauceBuild = "selenium-build-PWZ1N";

// ChromeOptions browserOptions = new ChromeOptions();
// browserOptions.setPlatformName("Windows 11");
// browserOptions.setBrowserVersion("latest");
// Map<String, Object> sauceOptions = new HashMap<>();
// sauceOptions.put("username", "oauth-sethu17molus-8c3ef");
// sauceOptions.put("accessKey", "bfdc2635-1a65-4cb3-9679-4df8a5b05bc5");
// sauceOptions.put("build", "selenium-build-PWZ1N");
// sauceOptions.put("name", "<your test name>");
// browserOptions.setCapability("sauce:options", sauceOptions);

// URL url = new URL("https://ondemand.eu-central-1.saucelabs.com:443/wd/hub");
// RemoteWebDriver driver = new RemoteWebDriver(url, browserOptions);


exports.config = {
  specs: ["test/e2e/**/*.spec.js"],
  hostname: "ondemand.eu-central-1.saucelabs.com",
  sauceUser: "oauth-sethu17molus-8c3ef",
  sauceKey: "bfdc2635-1a65-4cb3-9679-4df8a5b05bc5",
  sauceBuild: "selenium-build-PWZ1N",
  sauceRegion: "eu",

  // multiCapabilities: [
  //   {
  //     sauceUser: "oauth-pmsethulakshmi1994-71b99",
  //     sauceKey: "c886851b-044e-4c37-8e9a-62867cea27a5",
  //     sauceBuild: "selenium-build-83FYR",

  //     browserName: "chrome",
  //     browserVersion: "latest",
  //     platformName: "Windows 10",

  //     name: "Sethu 12th firefox latest Windows 10",

  //     "sauce:options": {
  //       build: "selenium-build-83FYR",
  //       hostname: "ondemand.eu-central-1.saucelabs.com",
  //     },
  //   },
  // ],

  multiCapabilities: [
    newSaucelabsCapability(
      "chrome",
      "latest",
      "Windows 11",
      // '"chrome", "latest", "Windows 11"'
      'SETHULAKSHMI TESTING."'
    )
    // newSaucelabsCapability(
    //   "internet explorer",
    //   "11.103",
    //   "Windows 10",
    //   '"internet explorer", "11.103", "Windows 10"'
    // ),
    // newSaucelabsCapability(
    //   "MicrosoftEdge",
    //   "14.14393",
    //   "Windows 10",
    //   '"MicrosoftEdge", "14.14393", "Windows 10"'
    // ),
    // newSaucelabsCapability(
    //   "safari",
    //   "9.0",
    //   "OS X 10.11",
    //   '"safari", "9.0", "OS X 10.11"'
    // ),
    // newSaucelabsCapability(
    //   "safari",
    //   "10.1",
    //   "macOS 10.12",
    //   '"safari", "10.1", "macOS 10.12"'
    // ),
    // newSaucelabsCapability(
    //   "safari",
    //   "11.0",
    //   "macOS 10.12",
    //   '"safari", "11.0", "macOS 10.12"'
    // ),
    // newSaucelabsCapability(
    //   "safari",
    //   "11.1",
    //   "macOS 10.13",
    //   '"safari", "11.1", "macOS 10.13"'
    // ),
    // newSaucelabsCapability(
    //   "firefox",
    //   "78.0",
    //   "Windows 7",
    //   '"firefox", "78.0", "Windows 7"'
    // ),
    // newSaucelabsCapability(
    //   "firefox",
    //   "58.0",
    //   "Windows 11",
    //   '"firefox", "58.0", "Windows 11"'
    // ),
    // newSaucelabsCapability(
    //   "chrome",
    //   "67.0",
    //   "Windows 10",
    //   '"chrome", "67.0", "Windows 10"'
    // ),
    // newSaucelabsCapability(
    //   "chrome",
    //   "54.0",
    //   "OS X 10.11",
    //   '"chrome", "54.0", "OS X 10.11"'
    // ),
    // newSaucelabsCapability(
    //   "chrome",
    //   "65.0",
    //   "OS X 10.11",
    //   '"chrome", "65.0", "OS X 10.11"'
    // ),
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
