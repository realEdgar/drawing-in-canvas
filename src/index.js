// Getting the canva and adding a context
const canvaNoOne = document.getElementById('canvaNo1');
const lienzoOne = canvaNoOne.getContext('2d');

console.log(lienzoOne);

// Drawing Lines

const drawingFigures = (colorBorder, colorFill, startX, startY, endX, endY, end1X, end1Y) => {
    lienzoOne.beginPath();
    lienzoOne.strokeStyle = colorBorder;
    lienzoOne.fillStyle = colorFill;
    lienzoOne.lineWidth = 2;
    lienzoOne.moveTo(startX, startY);
    lienzoOne.lineTo(endX, endY);
    lienzoOne.lineTo(end1X, end1Y);
    lienzoOne.closePath();
    lienzoOne.stroke();
    lienzoOne.fill();
}

drawingFigures("#ff0000", "#ff8700", 250, 250, 200, 75, 60, 25);
drawingFigures("#ff0000", "#ff8700", 250, 250, 300, 75, 440, 25);
drawingFigures("#ff0000", "#ff8700", 250, 250, 200, 425, 60, 475);
drawingFigures("#ff0000", "#ff8700", 250, 250, 300, 425, 440s, 475);