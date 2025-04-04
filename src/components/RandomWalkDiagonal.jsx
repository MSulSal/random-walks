import Sketch from "react-p5";

class RandomWalker {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
  }

  step() {
    let xstep = this.p5.floor(this.p5.random(3)) - 1;
    let ystep = this.p5.floor(this.p5.random(3)) - 1;
    this.x += xstep;
    this.y += ystep;
  }

  show() {
    this.p5.stroke(0);
    this.p5.point(this.x, this.y);
  }
}

let walker;

const RandomWalkDiagonal = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    walker = new RandomWalker(p5, p5.width / 2, p5.height / 2);
  };

  // Draw function to render the sketch
  const draw = () => {
    walker.step();
    walker.show();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomWalkDiagonal;
