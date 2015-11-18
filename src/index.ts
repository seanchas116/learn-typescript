import _ = require("lodash");
import Shape = require("./Shape");
import Rectangle = require("./Rectangle");
import Circle = require("./Circle");

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function fillShape(color: string, shape: Shape) {
  ctx.beginPath();
  ctx.fillStyle = color;
  shape.draw(ctx);
  ctx.fill();
}

/*
const rect = {
  x: 100, y: 200, w: 100, h: 100,
  draw(ctx: CanvasRenderingContext2D) {
    ctx.rect(this.x, this.y, this.w, this.h);
  }
};
*/

function randomColor() {
  return "#" + _.sample("0123456789ABCDEF".split(""), 6).join("");
}

const rect = new Rectangle(100, 100, 200, 300);
const circle = new Circle(300, 300, 50);
fillShape(randomColor(), rect);
fillShape(randomColor(), circle);
