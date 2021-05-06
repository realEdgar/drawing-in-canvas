// Getting the canva and adding a context
const canvaNoOne = document.getElementById('canvaNo1');
const ctxOne = canvaNoOne.getContext('2d');

const canvaNoTwo = document.getElementById('canvaNo2');
const ctxTwo = canvaNoTwo.getContext('2d');

console.log(ctxOne);
console.log(ctxTwo);

// Drawing Figures

const drawingFigures = (colorBorder, colorFill, startX, startY, endX, endY, end1X, end1Y) => {
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

drawingFigures("#ff0000", "#ff8700", 250, 250, 200, 75, 60, 25);
drawingFigures("#ff0000", "#ff8700", 250, 250, 300, 75, 440, 25);
drawingFigures("#ff0000", "#ff8700", 250, 250, 200, 425, 60, 475);
drawingFigures("#ff0000", "#ff8700", 250, 250, 300, 425, 440, 475);

// Drawing Curves

const drawingCurves = () => {
    ctxOne.beginPath();
    ctxOne.strokeStyle = "#ff0000";
    ctxOne.fillStyle= "#ff8700"
    ctxOne.moveTo(200, 75);
    ctxOne.quadraticCurveTo(250, -60, 300, 75);
    ctxOne.stroke();
}

drawingCurves();