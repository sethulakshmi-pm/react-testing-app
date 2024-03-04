import logo from "./logo.svg";
import "./App.css";
import WebVitalComponent from "./component/WebVitalComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebVitalComponent />
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://web.dev/articles/vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Web Vitals
        </a>
      </header>
    </div>
  );
}

export default App;
