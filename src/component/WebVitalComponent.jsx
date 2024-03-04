import React, { useEffect, useState } from "react";
import { getCLS, getFID, getLCP, getFCP, getTTFB, getINP } from "web-vitals";

function WebVitalComponent() {
  const [metrics, setMetrics] = useState({
    cls: undefined,
    fid: undefined,
    lcp: undefined,
    fcp: undefined,
    ttfb: undefined,
  });

  useEffect(() => {
    const reportWebVitals = ({ name, value }) => {
      switch (name) {
        case "CLS":
          setMetrics((prev) => ({ ...prev, cls: value }));
          break;
        case "FID":
          setMetrics((prev) => ({ ...prev, fid: value }));
          break;
        case "LCP":
          setMetrics((prev) => ({ ...prev, lcp: value }));
          break;
        case "INP":
          setMetrics((prev) => ({ ...prev, inp: value }));
          break;
        case "FCP":
          setMetrics((prev) => ({ ...prev, fcp: value }));
          break;
        case "TTFB":
          setMetrics((prev) => ({ ...prev, ttfb: value }));
          break;
        default:
          break;
      }
    };

    getCLS(reportWebVitals);
    getFID(reportWebVitals);
    getLCP(reportWebVitals);
    getINP(reportWebVitals);
    getFCP(reportWebVitals);
    getTTFB(reportWebVitals);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Core Web Vitals: CLICK HERE...!!!!</p>
        <ul>
          <li>CLS: {metrics.cls}</li>
          <li>FID: {metrics.fid}</li>
          <li>LCP: {metrics.lcp}</li>
          <li>INP: {metrics.inp}</li>
          <li>FCP: {metrics.fcp}</li>
          <li>TTFB: {metrics.ttfb}</li>
        </ul>
      </header>
    </div>
  );
}

export default WebVitalComponent;
