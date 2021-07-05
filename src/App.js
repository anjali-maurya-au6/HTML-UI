import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="item-container">
        <div className="item1">
          <i className="fas fa-assistive-listening-systems fa-3x"></i>
        </div>
        <div className="item">
          <i className="far fa-user fa-2x"></i>
          Students
        </div>
        <div className="item">
          <i className="fas fa-book fa-2x"></i>
          Lesson plan
        </div>
        <div className="item">
          <i className="fas fa-cog fa-2x"></i>
          Settings
        </div>
      </div>
      <div className="main-container">
        <h4>
          {" "}
          <i className="fas fa-caret-left"></i> &nbsp;Videos
        </h4>

        <div className="input">
          <input type="text" placeholder="Insert URL here" />
        </div>
        <div className="image-upload">
          <div className="image-section">
            <p>upload</p>
          </div>
          <div className="text">
            <p>or</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
