'use strict'
var gCurrFont;
var gMeme = {
    selectedImgSrc: 0,
    selectedLineIdx: 0,
    lines: [{
            txt: 'hiiiiiiiiii',
            size: '45',
            align: 'center',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 150
        },
        {
            txt: 'relly???!!',
            size: ' 45',
            align: 'center',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 300
        },
        {
            txt: 'yes, I know it!',
            size: '45',
            align: 'center',
            color: 'white',
            font: 'Impact',
            positionx: 150,
            positiony: 480
        }

    ]
}
console.log(gMeme);
// Render

function renderText() {
    var txt = gMeme.lines[gMeme.selectedLineIdx].txt
    txt = gTxt
    gMeme.lines.forEach(line => {
        line.fillStyle = gCurrColor
        line.font = gCurrFont
        line.size = gCurrSize
        line.textAlign = gCurrAlign
    });


}



// On canvas


function drawText(gTxt, x, y) {
    gCtx.lineWidth = 2
    gCtx.fillStyle = 'white'
    gCtx.font = '40px Impact'
    gCtx.fillText(gTxt, x, y)
    gCtx.strokeText(gTxt, x, y)
}




function drawImg(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function setFont(font) {
    switch (font) {
        case 'Impact':
            gCurrFont = 'Impact'
            break;
        case 'Roboto':
            gCurrFont = 'Roboto'
            break;
        case 'Varela':
            gCurrFont = 'Varela'
            break;
        case 'Nunito':
            gCurrFont = 'Nunito'
            break;
        case 'Nunito-Bold':
            gCurrFont = 'Nunito - Bold'
            break;

        default:
            gCurrFont = 'Impact'
            break;
    }

    gCurrFont = font
}

function clearLine(id) {
    gMeme.lines.splice(id, 1)
    console.log(gMeme);
}

function addMark() {
    gCtx.rect(gMeme.lines[gMeme.selectedLineIdx - 1].positionx, (gMeme.lines[gMeme.selectedLineIdx - 1].positiony) - 35, 250, 50);
    gCtx.strokeStyle = "white";
    gCtx.stroke();
    gCtx.beginPath();
    gCtx.rect(gMeme.lines[gMeme.selectedLineIdx].positionx, (gMeme.lines[gMeme.selectedLineIdx].positiony) - 35, 250, 50);
    gCtx.strokeStyle = "red";
    gCtx.stroke();
}