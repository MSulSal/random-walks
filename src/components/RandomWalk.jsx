import Sketch from "react-p5";

const RandomWalk = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  // When the window is resized, recalculate the width and height.
  const windowResized = (p5) => {
    const canvasParent = p5.canvas.parentNode;
    const newWidth = canvasParent.offsetWidth;
    const newHeight = newWidth * 0.5;
    p5.resizeCanvas(newWidth, newHeight);
  };

  // Draw function to render the sketch
  const draw = (p5) => {
    p5.background(220);
    p5.fill(50);
    p5.textSize(32);
    p5.text("Hello p5.js!", 20, 50);
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default RandomWalk;
