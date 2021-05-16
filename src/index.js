import { drawingFigures } from './figures/index.js'
import { drawingLines } from './lines/index.js'
import { drawingCircles } from './circles/index.js'

drawingFigures("#ff0000", "#ff8700", 150, 150, 100, 37.5, 30, 12.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 200, 37.5, 270, 12.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 100, 262.5, 30, 288.5);
drawingFigures("#ff0000", "#ff8700", 150, 150, 200, 262.5, 270, 288.5);

// Drawing a star with lines

const canvaNoTwo = document.getElementById('canvaNo2');
const ctxTwo = canvaNoTwo.getContext('2d');

for(let i = 0; i <= 150; i += 5) {
    let plusI = 150 + i;
    let lessISlope = 75 - i*0.5;
    let plusISlope = 225 + i*0.5;
    let lessI = 150 - i;
    drawingLines(150, 150, plusI, lessISlope, ctxTwo);
    drawingLines(150, 150, plusISlope, lessI, ctxTwo);
    drawingLines(150, 150, lessI, lessISlope, ctxTwo);
    drawingLines(150, 150, lessISlope, lessI, ctxTwo);
    drawingLines(150, 150, lessISlope, plusI, ctxTwo);
    drawingLines(150, 150, lessI, plusISlope, ctxTwo);
    drawingLines(150, 150, plusI, plusISlope, ctxTwo);
    drawingLines(150, 150, plusISlope, plusI, ctxTwo);
}

// // Drawing amaizing things

const canvasNoThree = document.getElementById('canvaNo3');
const ctxThree = canvasNoThree.getContext('2d');

for(let i = 0; i < 100; i++) {
    let start = 0;
    let advanceI = i*10;
    let advanceIPlusTen = 10 + i*10;
    let end = 300;
    drawingLines(start, advanceI, advanceIPlusTen, end, ctxThree);
    drawingLines(advanceI, start, end, advanceIPlusTen, ctxThree);
    drawingLines(advanceI, end, end, end - advanceIPlusTen, ctxThree);
    drawingLines(start, 300 - advanceI, start+advanceIPlusTen, start, ctxThree);
}

// // Drawing a heart

const canvaNoFour = document.getElementById('canvaNo4');
const ctxFour = canvaNoFour.getContext('2d');

ctxFour.strokeStyle = "#000";
ctxFour.fillStyle = "#ff0044";
ctxFour.beginPath();
ctxFour.moveTo(150, 100);
ctxFour.bezierCurveTo(150, 97, 145, 85, 125, 85);
ctxFour.bezierCurveTo(95, 85, 95, 122.5, 95, 122.5);
ctxFour.bezierCurveTo(95, 140, 115, 162, 150, 190);
ctxFour.bezierCurveTo(185, 162, 205, 140, 205, 122.5);
ctxFour.bezierCurveTo(205, 122.5, 205, 85, 175, 85);
ctxFour.bezierCurveTo(160, 85, 150, 97, 150, 100);
ctxFour.stroke();
ctxFour.fill();

// Making an Arrow

ctxFour.beginPath();
ctxFour.lineWidth = 2;
ctxFour.fillStyle = "#000";
ctxFour.moveTo(78, 210);
ctxFour.lineTo(80, 200);
ctxFour.lineTo(70, 202);

ctxFour.moveTo(80, 200);
ctxFour.lineTo(120, 165);
ctxFour.moveTo(160, 125);
ctxFour.lineTo(205, 80);
ctxFour.stroke();

ctxFour.beginPath();
ctxFour.moveTo(205, 80);
ctxFour.lineTo(205, 90);
ctxFour.lineTo(215, 70);
ctxFour.lineTo(195, 80);
ctxFour.lineTo(205, 80);
ctxFour.stroke();
ctxFour.fill();

// // Drawing circles

const canvaNoFive = document.getElementById('canvaNo5');
const ctxFive = canvaNoFive.getContext('2d');

for(let i = 1; i < 100; i += 2) {
    drawingCircles(150, 150, i*20, 0, Math.PI*2, true, ctxFive);
}

const canvaNoSix = document.getElementById('canvaNo6')
const ctxSix = canvaNoSix.getContext('2d')

