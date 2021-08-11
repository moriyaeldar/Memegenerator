'use strict'
var gCanvas;
var gCtx;
var gCurrColor;
var gTxt


function init() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    onInputFromUser()
    addEventListener()
    var editor = document.querySelector('.editor')
    editor.hidden = true

}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onEditorOpen() {
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = true
    editor.hidden = false

}

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function onInputFromUser() {
    gCurrColor = document.querySelector('[name=color]').value;
    gTxt = document.querySelector('[name=text]').value;
}

function addEventListener() {

    gCanvas.addEventListener('mousedown', startPosition)
    gCanvas.addEventListener('mouseup', finishPosition)
    gCanvas.addEventListener('mousemove', draw)
}