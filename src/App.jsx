import React from "react";
import "./App.css";
import RandomWalk from "./components/RandomWalk";

function App() {
  return (
    <div className="App">
      <h1>Random Walks</h1>
      <div className="canvas-container">
        <RandomWalk />
      </div>
    </div>
  );
}

export default App;
