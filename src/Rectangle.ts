class Rectangle {
  constructor(public x: number, public y: number, public w: number, public h: number) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.rect(this.x, this.y, this.w, this.h);
  }
}

export = Rectangle;
