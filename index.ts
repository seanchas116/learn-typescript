const canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "#abc";
ctx.rect(100, 100, 200, 200);
ctx.fill();
