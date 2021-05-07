// Getting the canva and adding a context
const canvaNoOne = document.getElementById('canvaNo1');
const ctxOne = canvaNoOne.getContext('2d');

console.log(ctxOne);

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

// Drawing using math topics

const canvaNoTwo = document.getElementById('canvaNo2');
const ctxTwo = canvaNoTwo.getContext('2d');

function drawingAStar(xi, yi, xf, yf) {
    ctxTwo.beginPath();
    ctxTwo.strokeStyle = "#fff";
    ctxTwo.moveTo(xi, yi);
    ctxTwo.lineTo(xf, yf);
    ctxTwo.stroke();
    ctxTwo.closePath();
}

// Drawing a star with lines

for(let i = 0; i <= 250; i += 5) {
    let plusI = 250 + i;
    let lessISlope = 125 - i*0.5;
    let plusISlope = 375 + i*0.5;
    let lessI = 250 - i;
    drawingAStar(250, 250, plusI, lessISlope);
    drawingAStar(250, 250, plusISlope, lessI);
    drawingAStar(250, 250, lessI, lessISlope);
    drawingAStar(250, 250, lessISlope, lessI);
    drawingAStar(250, 250, lessISlope, plusI);
    drawingAStar(250, 250, lessI, plusISlope);
    drawingAStar(250, 250, plusI, plusISlope);
    drawingAStar(250, 250, plusISlope, plusI);
}
