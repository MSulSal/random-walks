import Sketch from "react-p5";

let strokeSlider, strokeLabel;

class RandomWalker {
  constructor(p5, x, y, strokeSlider) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.strokeSlider = strokeSlider;
    this.tx = 0;
    this.ty = 10000;
  }

  step() {
    this.x = this.p5.map(this.p5.noise(this.tx), 0, 1, 0, this.p5.width);
    this.y = this.p5.map(this.p5.noise(this.ty), 0, 1, 0, this.p5.height);
    this.tx += 0.01;
    this.ty += 0.01;
  }

  show() {
    this.p5.stroke(
      this.p5.random(255),
      this.p5.random(255),
      this.p5.random(255),
      50
    );
    this.p5.strokeWeight(this.strokeSlider.value());
    this.p5.point(this.x, this.y);
  }
}

let walker;

const RandomWalkPerlin = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    strokeLabel = p5.createDiv("Stroke Width:");
    strokeLabel.style("font-size", "16px");
    strokeLabel.style("margin-top", "10px");
    strokeLabel.parent(canvasParentRef);
    strokeSlider = p5.createSlider(1, 50, 50, 1);
    strokeSlider.parent(canvasParentRef);
    walker = new RandomWalker(p5, p5.width / 2, p5.height / 2, strokeSlider);
  };

  // Draw function to render the sketch
  const draw = () => {
    walker.step();
    walker.show();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomWalkPerlin;
