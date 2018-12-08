'use strict';

var fortunes = ['You will graduate from University of Florida', 'You will buy a house soon', 'You will meet the love of your life soon', 'You will be alone forever'];

var button = document.getElementsByTagName('button');
var yourFortune = document.querySelector('#box');

function wrapper() {
    var _this = this;

    var changeColor = function changeColor() {
        yourFortune.classList.toggle('flash');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }
    };

    loopThrough();
};

function remove() {
    yourFortune.classList.toggle('box-removal');
}

function wrapperTwo() {
    var _this2 = this;

    var changeColor2 = function changeColor2() {
        yourFortune.classList.toggle('flash2');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this2.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor2();
            }, i * 500);
        }
    };
    loopThrough();
};

function wrapperThree() {
    var _this3 = this;

    var changeColor3 = function changeColor3() {
        yourFortune.classList.toggle('flash3');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this3.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor3();
            }, i * 500);
        }
    };
    loopThrough();
};

function wrapperFour() {
    var _this4 = this;

    var changeColor4 = function changeColor4() {
        yourFortune.classList.toggle('flash4');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this4.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor4();
            }, i * 500);
        }
    };
    loopThrough();
};

for (var i = 0; i < button.length; i++) {
    button[0].addEventListener('click', wrapper);
    button[1].addEventListener('click', wrapperTwo);
    button[2].addEventListener('click', wrapperThree);
    button[3].addEventListener('click', wrapperFour);
}