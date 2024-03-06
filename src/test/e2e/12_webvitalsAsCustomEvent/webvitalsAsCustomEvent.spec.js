const {
  registerTestServerHooks,
  getE2ETestBaseUrl,
} = require("../../server/controls");
const { registerBaseHooks, restartBrowser } = require("../base");

describe("webvitalsAsCustomEvent", () => {
  registerTestServerHooks();
  registerBaseHooks();

  describe("webvitals", () => {
    beforeEach(() => {
      restartBrowser();

      browser.get(
        getE2ETestBaseUrl("12_webvitalsAsCustomEvent/webvitalsAsCustomEvent")
      );
      browser.sleep(2000);

      // Ensure button1 is clicked to get FID LCP values
      const button1 = element(by.id("button1"));
      expect(button1.isDisplayed()).toBe(true); // Ensure button1 is displayed
      element(by.id("button1")).click(); // Ensure button1 is clicked
      browser.sleep(2000);

      // Click search actions
      element(by.id("searchInput")).sendKeys("hello");
      element(by.id("searchButton")).click();
      browser.sleep(1000);
      element(by.id("button3")).click();
      browser.sleep(1000);
      element(by.id("button2")).click();
      browser.sleep(1000);

      const currentHandle = browser.getWindowHandle();
      element(by.id("open-blank-tab")).click();
      browser.sleep(3000);
      browser.switchTo().window(currentHandle);
      browser.sleep(3000);
    });

    it("should test web vitals reporting", async function() {
      browser.ignoreSynchronization = true;
      // Assuming web vitals are reported properly
      var cls = await element(by.id("cls"));
      var inp = await element(by.id("inp"));
      var fid = await element(by.id("fid"));
      var lcp = await element(by.id("lcp"));
      var fcp = await element(by.id("fcp"));
      var ttfb = await element(by.id("ttfb"));

      expect(cls.getText()).not.toBe("CLS: "); // Ensure CLS metric is reported
      expect(inp.getText()).not.toBe("INP: "); // Ensure INP metric is reported
      expect(fid.getText()).not.toBe("FID: "); // Ensure FID metric is reported
      expect(lcp.getText()).not.toBe("LCP: "); // Ensure LCP metric is reported
      expect(fcp.getText()).not.toBe("FCP: "); // Ensure FCP metric is reported
      expect(ttfb.getText()).not.toBe("TTFB: "); // Ensure TTFB metric is reported

      expect(cls.getText()).not.toBe("CLS: undefined"); // Ensure CLS metric is not undefined
      expect(inp.getText()).not.toBe("INP: undefined"); // Ensure INP metric is not undefined
      expect(fid.getText()).not.toBe("FID: undefined"); // Ensure FID metric is not undefined
      expect(lcp.getText()).not.toBe("LCP: undefined"); // Ensure LCP metric is not undefined
      expect(fcp.getText()).not.toBe("FCP: undefined"); // Ensure FCP metric is not undefined
      expect(ttfb.getText()).not.toBe("TTFB: undefined"); // Ensure TTFB metric is not undefined
    });
  });
});
