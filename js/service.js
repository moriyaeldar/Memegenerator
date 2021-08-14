'use strict'

var gMeme = {
    selectedImgSrc: 0,
    selectedLineIdx: 0,
    lines: [{
            id: 0,
            txt: 'text here',
            size: 45,
            align: 'left',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 150,

        }

    ]
}

var painting = false



// On canvas

function drawText(id) {
    var line = getLineById(id)
    gCtx.lineWidth = 2;
    gCtx.fillStyle = line.color;
    gCtx.strokeStyle = 'black'
    gCtx.font = `${line.size}px ${line.font}`;
    gCtx.textAlign = line.align;
    gCtx.fillText(line.txt, line.positionx, line.positiony);
    gCtx.strokeText(line.txt, line.positionx, line.positiony)

}


function drawImg(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function setFont(font) {
    var currLine = gMeme.lines[gMeme.selectedLineIdx]
    switch (font) {
        case 'Impact':
            currLine.font = 'Impact'
            break;
        case 'Roboto':
            currLine.font = 'Roboto'
            break;
        case 'Varela':
            currLine.font = 'Varela'
            break;
        case 'Nunito':
            currLine.font = 'Nunito'
            break;
        case 'Nunito-Bold':
            currLine.font = 'Nunito - Bold'
            break;

        default:
            currLine.font = 'Impact'
            break;
    }


}

function clearLine(id) {
    gMeme.lines.splice(id, 1)
    if (gMeme.lines.length === 0) {
        gMeme.lines.push({
            id: 0,
            txt: 'text here',
            size: 45,
            align: 'left',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 150
        })

    }
}

function drawRect(ev) {
    if (!painting) return
    const { offsetX, offsetY } = ev
    console.log(ev);
    gCtx.beginPath()
    gCtx.rect(offsetX - 120, offsetY - 30, 290, 50)
    gCtx.strokeStyle = "red"
    gCtx.stroke()

    if (offsetY < 200) {
        gMeme.selectedLineIdx = 0
    } else if (offsetY < 400) {
        gMeme.selectedLineIdx = 2
    } else {
        gMeme.selectedLineIdx = 1
    }
}

function startPosition(ev) {
    painting = true
    drawRect(ev)
}

function finishPosition() {
    painting = false
    gCtx.beginPath()
}




function getLineById(lineId) {
    var line = gMeme.lines.find(function(line) {
        return line.id === lineId
    })
    return line
}

function addLine() {
    if (gMeme.lines.length === 3) return
    if (gMeme.lines.length === 1) {

        gMeme.lines.push({
            id: 1,
            txt: 'text here',
            size: 45,
            align: 'left',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 480,

        })
    } else {
        gMeme.lines.push({
            id: 2,
            txt: 'text here',
            size: 45,
            align: 'left',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 300,

        })
    }
    gMeme.selectedLineIdx = gMeme.lines.length - 1

}