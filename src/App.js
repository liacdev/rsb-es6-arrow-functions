import logo from "./logo.svg";
import "./App.css";
import ArrowFunctionComponent from "./Components/ArrowFunctionComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ES6 Arrow Functions!</p>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-arrow-functions"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>

        <ArrowFunctionComponent>
          Arrow Function Class Component
        </ArrowFunctionComponent>
      </header>
    </div>
  );
}

export default App;
