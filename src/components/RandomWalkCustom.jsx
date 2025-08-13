import Sketch from "react-p5";

let stepSlider, stepLabel;
let strokeSlider, strokeLabel;

class RandomWalker {
  constructor(p5, x, y, stepSlider, strokeSlider) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.prevx = x;
    this.prevy = y;
    this.stepSlider = stepSlider;
    this.strokeSlider = strokeSlider;
  }

  coin() {
    let toss = this.p5.random(1);
    if (toss < 0.5) {
      return 1;
    }
    return -1;
  }

  customDist() {
    let step;
    while (true) {
      let r1 = this.p5.random(1) * 100;
      let probability = this.p5.sq(r1) * 100;
      let r2 = this.p5.random(1);
      if (r2 < this.p5.abs(probability)) {
        step = r1;
        break;
      }
    }
    return step * this.coin();
  }

  step() {
    const stepSliderVal = this.stepSlider.value();
    let xstep = this.customDist();
    let ystep = this.customDist();
    // console.log(this.customDist());
    xstep =
      this.p5.abs(xstep) < stepSliderVal ? xstep : stepSliderVal * this.coin();
    ystep =
      this.p5.abs(ystep) < stepSliderVal ? ystep : stepSliderVal * this.coin();
    this.prevx = this.x;
    this.prevy = this.y;
    if (this.x + xstep < 0 || this.x + xstep > this.p5.width) {
      xstep = -xstep;
    }
    if (this.y + ystep < 0 || this.y + ystep > this.p5.height) {
      ystep = -ystep;
    }
    this.x += xstep;
    this.y += ystep;
  }

  show() {
    this.p5.stroke(
      this.p5.random(255),
      this.p5.random(255),
      this.p5.random(255),
      50
    );
    this.p5.strokeWeight(this.strokeSlider.value());
    this.p5.line(this.prevx, this.prevy, this.x, this.y);
    this.p5.point(this.x, this.y);
  }
}

let walker;

const RandomWalkCustom = () => {
  // In setup, use the parent container’s width and set height proportional to width.
  const setup = (p5, canvasParentRef) => {
    const canvasWidth = canvasParentRef.offsetWidth;
    const canvasHeight = canvasWidth * 0.5; // 50% of width (adjust as needed)
    p5.background(255);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
    stepLabel = p5.createDiv("Max Step Size:");
    stepLabel.style("font-size", "16px");
    stepLabel.style("margin-top", "10px");
    stepLabel.parent(canvasParentRef);
    stepSlider = p5.createSlider(1, 100, 10, 1);
    stepSlider.parent(canvasParentRef);
    strokeLabel = p5.createDiv("Stroke Width:");
    strokeLabel.style("font-size", "16px");
    strokeLabel.style("margin-top", "10px");
    strokeLabel.parent(canvasParentRef);
    strokeSlider = p5.createSlider(1, 50, 10, 1);
    strokeSlider.parent(canvasParentRef);
    walker = new RandomWalker(
      p5,
      p5.width / 2,
      p5.height / 2,
      stepSlider,
      strokeSlider
    );
  };

  // Draw function to render the sketch
  const draw = () => {
    walker.step();
    walker.show();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default RandomWalkCustom;
