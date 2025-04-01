import React from "react";
import RandomWalk from "./components/RandomWalk";
import RandomWalkDiagonal from "./components/RandomWalkDiagonal";
import RandomWalkContinuous from "./components/RandomWalkContinuous";
import RandomWalkColorful from "./components/RandomWalkColorful";
import RandomWalkSouthEast from "./components/RandomWalkSouthEast";

const App = () => {
  return (
    <div className="App">
      <h1>Random Walks</h1>
      <div className="canvas-container">
        <p>Simple Random Walk</p>
        <RandomWalk />
        <p>Random Walk with Diagonal Steps</p>
        <RandomWalkDiagonal />
        <p>Random Walk with Continuous Range in Step Sizes</p>
        <RandomWalkContinuous />
        <p>
          Random Walk with Random Colors, Larger and Variable Step Size Range,
          Stroke Width, and Reflection
        </p>
        <RandomWalkColorful />
        <p>Random Walk with greater tendency to go right and downwards</p>
        <RandomWalkSouthEast />
      </div>
    </div>
  );
};

export default App;
