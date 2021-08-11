'use strict'
var gCanvas;
var gCtx;
var gCurrColor;
var gTxt1;
var gTxt2;
var gTxt3;

function init() {
    gCanvas = document.querySelector('#my-canvas')
    gCtx = gCanvas.getContext('2d')
    var editor = document.querySelector('.editor')
    editor.hidden = true
    var txt1 = document.getElementById('1')
    var txt2 = document.getElementById('2')
    var txt3 = document.getElementById('3')
    txt1.hidden = false
    txt2.hidden = true
    txt3.hidden = true
    gCtx.beginPath();
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function onEditorOpen(elImg) {
    var src = elImg.src
    drawImg(src)
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = true
    editor.hidden = false

}

function onEditorClose() {
    var gallery = document.querySelector('.opening-window')
    var editor = document.querySelector('.editor')
    gallery.hidden = false
    editor.hidden = true
}



function onInputFromUser() {
    gCurrColor = document.querySelector('[name=color]').value;
    gTxt1 = document.querySelector('[name=text1]').value;
    gTxt2 = document.querySelector('[name=text2]').value;
    gTxt3 = document.querySelector('[name=text3]').value;
}