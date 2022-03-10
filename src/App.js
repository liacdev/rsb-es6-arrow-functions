import logo from "./logo.svg";
import "./App.css";
import ClassComponentWithFunction from "./Components/ClassComponentWithFunction";
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
        <ClassComponentWithFunction>
          <u>Class Component with a Function</u>
        </ClassComponentWithFunction>

        <ArrowFunctionComponent>
          <u>Arrow Function Class Component</u>
        </ArrowFunctionComponent>
      </header>
    </div>
  );
}

export default App;
