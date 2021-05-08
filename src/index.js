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

drawingFigures("#ff0000", "#ff8700", 150, 150, 100, 37.5, 30, 12.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 200, 37.5, 270, 12.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 100, 262.5, 30, 288.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 200, 262.5, 270, 288.5);

// Drawing Curves

const drawingCurves = () => {
    ctxOne.beginPath();
    ctxOne.strokeStyle = "#ff0000";
    ctxOne.fillStyle= "#ff8700"
    ctxOne.moveTo(100, 37.5);
    ctxOne.quadraticCurveTo(150, -10, 200, 37.5);
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

for(let i = 0; i <= 150; i += 5) {
    let plusI = 150 + i;
    let lessISlope = 75 - i*0.5;
    let plusISlope = 225 + i*0.5;
    let lessI = 150 - i;
    drawingAStar(150, 150, plusI, lessISlope);
    drawingAStar(150, 150, plusISlope, lessI);
    drawingAStar(150, 150, lessI, lessISlope);
    drawingAStar(150, 150, lessISlope, lessI);
    drawingAStar(150, 150, lessISlope, plusI);
    drawingAStar(150, 150, lessI, plusISlope);
    drawingAStar(150, 150, plusI, plusISlope);
    drawingAStar(150, 150, plusISlope, plusI);
}

// Drawing amaizing things

const canvasNoThree = document.getElementById('canvaNo3');
const ctxThree = canvasNoThree.getContext('2d');

function drawingLines(color, xi, yi, xf, yf) {
    ctxThree.beginPath();
    ctxThree.strokeStyle = color;
    ctxThree.moveTo(xi, yi);
    ctxThree.lineTo(xf, yf);
    ctxThree.stroke();
    ctxThree.closePath();
}

for(let i = 0; i < 100; i++) {
    let start = 0;
    let advanceI = i*10;
    let advanceIPlusTen = 10 + i*10;
    let end = 300;
    drawingLines("#000", start, advanceI, advanceIPlusTen, end);
    drawingLines("#000", advanceI, start, end, advanceIPlusTen);
    drawingLines("#000", advanceI, end, end, end - advanceIPlusTen);
    drawingLines("#000", start, 300 - advanceI, start+advanceIPlusTen, start);
}