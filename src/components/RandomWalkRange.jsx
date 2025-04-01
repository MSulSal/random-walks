import Sketch from "react-p5";

class RandomWalker {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
  }

  step() {
    let xstep = this.p5.random(-1, 1) * 5;
    let ystep = this.p5.random(-1, 1) * 5;
    this.x += xstep;
    this.y += ystep;
  }

  show() {
    this.p5.stroke(0);
    this.p5.point(this.x, this.y);
  }
}

let walker;

const RandomWalkRange = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    walker = new RandomWalker(p5, p5.width / 2, p5.height / 2);
  };

  // When the window is resized, recalculate the width and height.
  const windowResized = (p5) => {
    const canvasParent = p5.canvas.parentNode;
    const newWidth = canvasParent.offsetWidth;
    const newHeight = newWidth * 0.5;
    p5.resizeCanvas(newWidth, newHeight);
  };

  // Draw function to render the sketch
  const draw = () => {
    walker.step();
    walker.show();
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default RandomWalkRange;
