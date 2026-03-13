import { useState } from "react";
import "./App.css";

function App() {
  const [tab, setTab] = useState("js");

  return (
    <div className="App">
      <h1>Hello, Vanilla JS!</h1>
      <div className="tabs">
        <button className="tab-button" onClick={() => setTab("js")}>
          JavaScript
        </button>
        <button className="tab-button" onClick={() => setTab("react")}>
          Why React?
        </button>
      </div>
      {tab === "js" && (
        <div className="tab-content">
          <h2>Core JS Features</h2>
          <ul>
            <li>Lightweight, fast execution</li>
            <li>No build step required</li>
            <li>Runs in any browser</li>
            <li>Great for simple UIs and small scripts</li>
          </ul>
        </div>
      )}
      {tab === "react" && (
        <div className="tab-content">
          <h2>Why React?</h2>
          <ul>
            <li>Component-based architecture</li>
            <li>Virtual DOM for high performance</li>
            <li>Reusable UI elements</li>
            <li>Huge ecosystem and community support</li>
          </ul>
        </div>
      )}
      <button id="btn" onClick={() => alert("Button clicked!")}>
        Click me
      </button>
    </div>
  );
}

export default App;
