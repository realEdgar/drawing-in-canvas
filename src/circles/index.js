export function drawingCircles(x,y,radius, startAngle, endAngle, anticlockwise, ctx) {
    ctx.strokeStyle = "#ff0044";
    ctx.lineWidth = 2;
    ctx.beginPath()
    ctx.arc(x,y,radius, startAngle, endAngle, anticlockwise);
    ctx.stroke();
}