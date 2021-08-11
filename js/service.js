'use strict'
var gCurrShape;
var painting = false


// Shapes

function drawLine(x, y) {
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(x, y)
    gCtx.lineCap = "round"
    gCtx.strokeStyle = gCurrColor
    gCtx.stroke()
}

function drawTriangle(x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(130, 330)
    gCtx.lineTo(50, 370)
    gCtx.closePath()
    gCtx.lineTo(x, y)
    gCtx.strokeStyle = gCurrColor
    gCtx.stroke()
}

function drawRect(x, y) {
    gCtx.beginPath()
    gCtx.rect(x, y, 50, 50)
    gCtx.strokeStyle = gCurrColor
    gCtx.stroke()
}

function drawArc(x, y) {
    gCtx.beginPath()
    gCtx.lineWidth = 6
    gCtx.arc(x, y, 30, 0, 2 * Math.PI);
    gCtx.strokeStyle = gCurrColor
    gCtx.stroke();

}

function drawText(gTxt, x, y) {
    gCtx.font = '25px san serif';
    gCtx.fillText(gTxt, x, y);
    gCtx.lineWidth = 2
    gCtx.fillStyle = gCurrColor
    gCtx.font = '40px Arial'
    gCtx.fillText(gTxt, x, y)
    gCtx.strokeText(gTxt, x, y)
}

function drawSmiley(x, y) {
    gCtx.beginPath();
    gCtx.arc(75, 75, 50, 0, Math.PI * 2, true);
    gCtx.moveTo(110, 75);
    gCtx.arc(75, 75, 35, 0, Math.PI, false);
    gCtx.moveTo(65, 65);
    gCtx.arc(60, 65, 5, 0, Math.PI * 2, true);
    gCtx.moveTo(95, 65);
    gCtx.arc(90, 65, 5, 0, Math.PI * 2, true);
    gCtx.stroke();

}

// Drawing

function setShape(shape) {
    gCurrShape = shape
}


function draw(ev) {
    if (!painting) return
    const { offsetX, offsetY } = ev
    switch (gCurrShape) {
        case 'triangle':
            drawTriangle(offsetX, offsetY)
            break;
        case 'rect':
            drawRect(offsetX, offsetY)
            break;
        case 'arc':
            drawArc(offsetX, offsetY)
            break;
        case 'text':
            drawText(gTxt, offsetX, offsetY)
            break;
        case 'line':
            drawLine(offsetX, offsetY)
            break;
        case 'smiley':
            drawSmiley(offsetX, offsetY)
            break;
    }
}

// START&FINISH

function startPosition(ev) {
    painting = true
    draw(ev)
}

function finishPosition() {
    painting = false
    gCtx.beginPath()
}

// uploud

function loadImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = ''
    var reader = new FileReader()

    reader.onload = function(ev) {
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
    }
    if (ev.target.files[0]) {

        reader.readAsDataURL(ev.target.files[0])
    }
}