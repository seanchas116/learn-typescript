import Shape = require("./Shape");

class Scene {
  shapes: Shape[] = [];

  draw(ctx: CanvasRenderingContext2D) {
    for (const {path, fill} of this.shapes) {
      ctx.beginPath();
      ctx.fillStyle = fill;
      path.draw(ctx);
      ctx.fill();
    }
  }

  add(shapes: Shape[]) {
    this.shapes.push(...shapes);
  }
}

export = Scene;
