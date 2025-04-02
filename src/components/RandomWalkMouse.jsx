import Sketch from "react-p5";

class RandomWalker {
  constructor(p5, x, y, cw, ch) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.prevx = x;
    this.prevy = y;
    this.cw = cw;
    this.ch = ch;
  }

  step() {
    this.prevx = this.x;
    this.prevy = this.y;
    let coin = this.p5.random(1);
    let xstep =
      coin > 0.5 && this.p5.mouseX - this.cw / 2 < this.cw && this.p5.mouseX > 0
        ? this.p5.mouseX - this.x
        : this.p5.random(-1, 1) * 10;

    let ystep =
      coin > 0.5 && this.p5.mouseY - this.ch / 2 < this.ch && this.p5.mouseY > 0
        ? this.p5.mouseY - this.y
        : this.p5.random(-1, 1) * 10;

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
      this.p5.random(255)
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

    walker = new RandomWalker(
      p5,
      p5.width / 2,
      p5.height / 2,
      canvasWidth,
      canvasHeight
    );
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

export default RandomWalkMouse;
