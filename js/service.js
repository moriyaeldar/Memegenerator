'use strict'
var gCurrFont;
var painting = false;
var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
            txt: 'hiiiiiiiiii',
            size: 35,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'relly???!!',
            size: 35,
            align: 'left',
            color: 'red'
        },
        {
            txt: 'yes, I know it!',
            size: 35,
            align: 'left',
            color: 'red'
        }

    ]
}

// Render

function renderText() {
    gMeme.lines[0].txt = gTxt1
    gMeme.lines[1].txt = gTxt2
    gMeme.lines[2].txt = gTxt3
}



// On canvas

function drawText(text) {
    var text = gMeme.lines[0].txt
    gCtx.lineWidth = 2
    gCtx.moveTo(50, 50)
    gCtx.lineTo(200, 200)
    gCtx.fillStyle = 'white'
    gCtx.font = '40px gCurrFont'
    gCtx.fillText(text, 70, 50)
    gCtx.strokeStyle = 'black'
    gCtx.strokeText(text, 70, 50)
}



function drawImg(src) {
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
}


function setFont(font) {
    gCurrFont = font
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