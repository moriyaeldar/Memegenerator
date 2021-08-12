'use strict'
var gCanvas;
var gCtx;
var gCurrColor;
var gTxt;
var gCurrAlign;
var gCurrSize = 45;


function init() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    var editor = document.querySelector('.editor')
    editor.hidden = true
        // var txt1 = document.getElementById('0')
        // var txt2 = document.getElementById('1')
        // var txt3 = document.getElementById('2')
        // txt1.hidden = false
        // txt2.hidden = true
        // txt3.hidden = true
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onDrowText(event, id) {
    gTxt = document.querySelector('[name=text]').value;
    gMeme.selectedLineIdx = id
        // renderText(gTxt, gMeme.lines[gMeme.selectedLineIdx].positionx, gMeme.lines[gMeme.selectedLineIdx].positiony)
    drawText(gTxt, gMeme.lines[gMeme.selectedLineIdx].positionx, gMeme.lines[gMeme.selectedLineIdx].positiony)
}

function onEditorOpen(elImg) {
    var src = elImg.src
    drawImg(src)
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = true
    editor.hidden = false
    gMeme.selectedImgSrc = src

}

function onEditorClose() {
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = false
    editor.hidden = true
}

function onAddLine() {
    gMeme.selectedLineIdx++
        drawText(gTxt, gMeme.lines[gMeme.selectedLineIdx].positionx, gMeme.lines[gMeme.selectedLineIdx].positiony)

}

function onChangeLine() {

    if (gMeme.selectedLineIdx < gMeme.lines.length) {
        gMeme.selectedLineIdx++
            if (gMeme.selectedLineIdx === 3) gMeme.selectedLineIdx = 0
    }
    addMark()
    console.log(gMeme);
}

function onClearLine() {
    clearLine(gMeme.lines[gMeme.selectedLineIdx])
    drawImg(gMeme.selectedImgSrc)
}

function onChangeColor(color) {
    gCurrColor = color
        // gCurrColor = document.querySelector('[name=color]').value;
    renderText()
}

function onLeftAline() {
    gCurrAlign = 'left'
    renderText()
}

function onCenterAline() {
    gCurrAlign = 'center'
    renderText()
}

function onRightAline() {
    gCurrAlign = 'right'
    renderText()
}

function onSizeText(elBtn) {
    if (elBtn.classList === '.plus') gCurrSize++
        else gCurrSize--
            renderText()
}