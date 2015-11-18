import Shape = require("./Shape");

const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function fillShape(shape: Shape) {
  ctx.fillStyle = "#abc";
  shape.draw(ctx);
  ctx.fill();
}

const rect = {
  x: 100, y: 200, w: 100, h: 100,
  draw(ctx: CanvasRenderingContext2D) {
    ctx.rect(this.x, this.y, this.w, this.h);
  }
};

fillShape(rect);
