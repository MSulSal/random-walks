import Sketch from "react-p5";

class RandomWalker {
  constructor(p5, x, y) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.prevx = x;
    this.prevy = y;
  }

  step() {
    this.prevx = this.x;
    this.prevy = this.y;
    let coin = this.p5.random(1);
    let xstep, ystep;

    if (
      coin > 0.5 &&
      this.p5.mouseX >= 0 &&
      this.p5.mouseX <= this.p5.width &&
      this.p5.mouseY >= 0 &&
      this.p5.mouseY <= this.p5.height
    ) {
      xstep = this.p5.mouseX - this.x;
      ystep = this.p5.mouseY - this.y;
    } else {
      xstep = this.p5.random(-1, 1) * 10;
      ystep = this.p5.random(-1, 1) * 10;
    }

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
    this.p5.strokeWeight(this.p5.random(1, 15));
    this.p5.line(this.prevx, this.prevy, this.x, this.y);
    this.p5.point(this.x, this.y);
  }
}

let walker;

const RandomWalkMouse = () => {
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

export default RandomWalkMouse;
