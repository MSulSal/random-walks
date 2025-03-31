import React from "react";
import RandomWalk from "./components/RandomWalk";
import RandomWalkDiagonal from "./components/RandomWalkDiagonal";

const App = () => {
  return (
    <div className="App">
      <h1>Random Walks</h1>
      <div className="canvas-container">
        <p>Simple Random Walk</p>
        <RandomWalk />
        <p>Random Walk with Diagonal Steps</p>
        <RandomWalkDiagonal />
      </div>
    </div>
  );
};

export default App;
