var Circle = (function () {
    function Circle(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
    }
    Circle.prototype.draw = function (ctx) {
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    };
    return Circle;
})();
module.exports = Circle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2lyY2xlLnRzIl0sIm5hbWVzIjpbIkNpcmNsZSIsIkNpcmNsZS5jb25zdHJ1Y3RvciIsIkNpcmNsZS5kcmF3Il0sIm1hcHBpbmdzIjoiQUFBQTtJQUNFQSxnQkFBbUJBLENBQVNBLEVBQVNBLENBQVNBLEVBQVNBLENBQVNBO1FBQTdDQyxNQUFDQSxHQUFEQSxDQUFDQSxDQUFRQTtRQUFTQSxNQUFDQSxHQUFEQSxDQUFDQSxDQUFRQTtRQUFTQSxNQUFDQSxHQUFEQSxDQUFDQSxDQUFRQTtJQUFHQSxDQUFDQTtJQUNwRUQscUJBQUlBLEdBQUpBLFVBQUtBLEdBQTZCQTtRQUNoQ0UsR0FBR0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7SUFDeERBLENBQUNBO0lBQ0hGLGFBQUNBO0FBQURBLENBQUNBLEFBTEQsSUFLQztBQUNELGlCQUFTLE1BQU0sQ0FBQyJ9