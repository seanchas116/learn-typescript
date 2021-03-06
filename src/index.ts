/*
const _: LodashStatic = require("lodash");

declare function require(module: string): any;

interface LodashStatic {
  sample<T>(array: T[], count: number): T[];
}
*/

import Path = require("./Path");
import Rectangle = require("./Rectangle");
import Circle = require("./Circle");
import Scene = require("./Scene");
import _ = require("lodash");

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function fillPath(color: string, path: Path) {
  ctx.beginPath();
  ctx.fillStyle = color;
  path.draw(ctx);
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

const circles  = _.times(100, () => ({
  fill: randomColor(),
  path: new Circle(Math.random() * 800, Math.random() * 600, 10)
}));
const rects = _.times(100, () => ({
  fill: randomColor(),
  path: new Rectangle(Math.random() * 800, Math.random() * 600, 10, 10)
}));

//const rect = new Rectangle(100, 100, 200, 300);
//const circle = new Circle(300, 300, 50);
//fillPath(randomColor(), rect);
//fillPath(randomColor(), circle);
// for (const circle of circles) {
//   fillPath(randomColor(), circle);
// }
// for (const rect of rects) {
//   fillPath(randomColor(), rect);
// }

const scene = new Scene();
scene.add(circles);
scene.add(rects);
scene.draw(ctx);
