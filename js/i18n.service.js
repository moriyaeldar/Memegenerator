var gTrans = {
    title: {
        en: 'Edit Text Lines',
        he: 'עורך הטקסט'
    },
    backToGallery: {
        en: 'Back to Gallery',
        he: 'חזרה לגלריה',
    },

    memes: {
        en: 'MEMES',
        he: 'ממים',
    },

    gallery: {
        en: 'GALLERY',
        he: 'גלריה',
    },

    about: {
        en: 'ABOUT',
        he: 'עלינו',
    },
    download: {
        en: 'Download',
        he: 'הורדה',
    }
}

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]

    if (!txt) txt = keyTrans['en']

    return txt;
}

function doTrans() {

    var els = document.querySelectorAll('[data-trans]')

    els.forEach(function(el) {
        var txt = getTrans(el.dataset.trans)
        console.dir(el)
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt)
        } else {
            el.innerText = txt
        }
    })

}

function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}