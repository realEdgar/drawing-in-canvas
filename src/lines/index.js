// Drawing using math topics

export function drawingLines(xi, yi, xf, yf, ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "#ff8700";
    ctx.moveTo(xi, yi);
    ctx.lineTo(xf, yf);
    ctx.stroke();
    ctx.closePath();
}

