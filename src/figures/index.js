// Getting the canva and adding a context
const canvaNoOne = document.getElementById('canvaNo1');
const ctxOne = canvaNoOne.getContext('2d');

// Drawing Figures

export const drawingFigures = (colorBorder, colorFill, startX, startY, endX, endY, end1X, end1Y) => {
    ctxOne.beginPath();
    ctxOne.strokeStyle = colorBorder;
    ctxOne.fillStyle = colorFill;
    ctxOne.lineWidth = 2;
    ctxOne.moveTo(startX, startY);
    ctxOne.lineTo(endX, endY);
    ctxOne.lineTo(end1X, end1Y);
    ctxOne.closePath();
    ctxOne.stroke();
    ctxOne.fill();
}
