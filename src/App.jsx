import React from "react";
import RandomWalk from "./components/RandomWalk";
import RandomWalkDiagonal from "./components/RandomWalkDiagonal";
import RandomWalkContinuous from "./components/RandomWalkContinuous";
import RandomWalkColorful from "./components/RandomWalkColorful";
import RandomWalkSouthEast from "./components/RandomWalkSouthEast";
import RandomWalkMouse from "./components/RandomWalkMouse";

const App = () => {
  return (
    <div className="App">
      <h1>Random Walks</h1>
      <div className="canvas-container">
        <p>Simple Random Walk</p>
        <RandomWalk />
      </div>
      <div className="canvas-container">
        <p>Random Walk with Diagonal Steps</p>
        <RandomWalkDiagonal />
      </div>
      <div className="canvas-container">
        <p>Random Walk with Continuous Range in Step Sizes</p>
        <RandomWalkContinuous />
      </div>
      <div className="canvas-container">
        <p>
          Random Walk with Random Colors, Larger and Variable Step Size Range,
          Stroke Width, and Reflection
        </p>
        <RandomWalkColorful />
      </div>
      <div className="canvas-container">
        <p>Random Walk with greater tendency to go right and downwards</p>
        <RandomWalkSouthEast />
      </div>
      <div className="canvas-container">
        <p>Random Walk with 50% chance of following cursor</p>
        <RandomWalkMouse />
      </div>
    </div>
  );
};

export default App;
