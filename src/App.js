import "./App.css";
import Counter from "./Q1/Counter";
import ComponentA from "./Q2/ComponentA";
import Button from "./Q3/Button";

function App() {
  return (
    <div className="App">
      <div className="question-section">
        <h1 className="question-title">Question1</h1>
        <Counter />
      </div>
      <div className="below">
        <div className="question-section">
          <h1 className="question-title">Question2</h1>
          <ComponentA />
        </div>
        <div className="question-section">
          <h1 className="question-title">Question3</h1>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
