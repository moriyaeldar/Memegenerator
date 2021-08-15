'use strict'
var gCanvas;
var gCtx;
var gTxt;
var isEditing = false;
console.log(gMeme);

function init() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    var editor = document.querySelector('.editor')
    editor.hidden = true
    var about = document.querySelector('.about')
    about.hidden = true
    addEventListener()

}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onDrowText() {
    var id = gMeme.selectedLineIdx
    gMeme.lines[id].txt = document.querySelector('[name=text]').value;
    renderMeme()
    drawText(id)

}

function onEditorOpen(elImg) {
    var src = elImg.src
    drawImg(src)
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = true
    editor.hidden = false
    gMeme.selectedImgSrc = src

    resizeCanvas()
}

function onEditorClose() {
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = false
    editor.hidden = true
    var about = document.querySelector('.about')
    about.hidden = true

}
// Render

function renderMeme() {
    var img = new Image()
    img.src = gMeme.selectedImgSrc;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        gMeme.lines.forEach(line => {
            gCtx.lineWidth = 2;
            gCtx.fillStyle = line.color;
            gCtx.strokeStyle = 'black'
            gCtx.font = `${line.size}px ${line.font}`;
            gCtx.textAlign = line.align;
            gCtx.fillText(line.txt, line.positionx, line.positiony);
            gCtx.strokeText(line.txt, line.positionx, line.positiony)
            if (isEditing) {
                setRect(gMeme.lines[gMeme.selectedLineIdx].positionx, gMeme.lines[gMeme.selectedLineIdx].positiony)
            }
        });

    }

}

function onAddLine() {
    gMeme.selectedLineIdx++
        addLine()
    drawText(gMeme.selectedLineIdx)

}

function onChangeLine() {
    if (gMeme.selectedLineIdx === 2) gMeme.selectedLineIdx = 0
    else gMeme.selectedLineIdx++
        isEditing = true

    renderMeme()

}

function onClearLine() {
    clearLine(gMeme.lines[gMeme.selectedLineIdx].id)
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    renderMeme()

}

function onChangeColor() {
    var color = document.querySelector('[name=color]').value;
    gMeme.lines[gMeme.selectedLineIdx].color = color
    renderMeme()
}

function onLeftAline() {
    gMeme.lines[gMeme.selectedLineIdx].positionx = 50
    renderMeme()
}

function onCenterAline() {
    gMeme.lines[gMeme.selectedLineIdx].positionx = 250
    renderMeme()
}

function onRightAline() {
    gMeme.lines[gMeme.selectedLineIdx].positionx = 400
    renderMeme()
}

function onMinusSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 10
    renderMeme()
}

function onPlusSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 10
    renderMeme()
}

function onInputStiker(icon) {
    gCtx.lineWidth = 2;
    gCtx.strokeStyle = 'black'
    gCtx.font = '100px san-serif'
    gCtx.fillText(icon, 400, 300);
    inputStiker(icon)

}

function onLineUp() {
    gMeme.lines[gMeme.selectedLineIdx].positiony -= 30
    renderMeme()
}

function onLineDown() {
    gMeme.lines[gMeme.selectedLineIdx].positiony += 30
    renderMeme()
}

function onShowAbout() {
    var about = document.querySelector('.about')
    about.hidden = false
    var editor = document.querySelector('.editor')
    editor.hidden = true
    var gallery = document.querySelector('.opening-window')
    gallery.hidden = true

}

function addEventListener() {
    gCanvas.addEventListener('mousedown', startPosition)
    gCanvas.addEventListener('mouseup', finishPosition)
}

function onSetLang(lang) {
    setLang(lang);
    if (lang === 'he') {
        document.body.classList.add('rtl')
    } else {
        document.body.classList.remove('rtl')
    }
    doTrans();

}

function onSearchByKeyWord(elInput) {
    var searchInput = elInput.value
}