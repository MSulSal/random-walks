import React from "react";
import RandomWalk from "./components/RandomWalk";
import RandomWalkDiagonal from "./components/RandomWalkDiagonal";
import RandomWalkContinuous from "./components/RandomWalkContinuous";
import RandomWalkColorful from "./components/RandomWalkColorful";
import RandomWalkSouthEast from "./components/RandomWalkSouthEast";
import RandomWalkMouse from "./components/RandomWalkMouse";
import RandomWalkNormal from "./components/RandomWalkNormal";
import RandomWalkCustom from "./components/RandomWalkCustom";
import RandomWalkPerlin from "./components/RandomWalkPerlin";
import RandomWalkPerlinStep from "./components/RandomWalkPerlinStep";

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
      <div className="canvas-container">
        <p>
          Random Walk with steps based on Gaussian distribution, sliders for
          step size and stroke width
        </p>
        <RandomWalkNormal />
      </div>
      <div className="canvas-container">
        <p>Random Walk that follows quadratic probability distribution</p>
        <RandomWalkCustom />
      </div>
      <div className="canvas-container">
        <p>Random Walk that follows Perlin Noise</p>
        <RandomWalkPerlin />
      </div>
      <div className="canvas-container">
        <p>
          Random Walk with step size and stroke weight determined by Perlin
          Noise
        </p>
        <RandomWalkPerlinStep />
      </div>
    </div>
  );
};

export default App;
