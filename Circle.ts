class Circle {
  constructor(public x: number, public y: number, public r: number) {}
  draw(ctx: CanvasRenderingContext2D) {
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
  }
}
export = Circle;
