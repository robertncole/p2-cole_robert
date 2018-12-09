'use strict';

var fortunes = ['You will graduate from University of Florida', 'You will buy a house soon', 'You will meet the love of your life soon', 'You will be alone forever', 'You will live a life of happiness and joy', 'You will get married in the next 5 years', 'You will have more than 2 kids', 'You have the best years ahead of you', 'Your current job will not be your forever job', 'Your will get a raise soon'];

var button = document.getElementsByTagName('button');
var yourFortune = document.querySelector('#box');
var yourFortune2 = document.querySelector('#box-2');
var yourFortune3 = document.querySelector('#box-3');
var fortune = document.querySelector('#fortune-box p span');

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

        setTimeout(function () {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };

    loopThrough();
};

function wrapperOne() {
    var _this2 = this;

    var changeColor = function changeColor() {
        yourFortune2.classList.toggle('flash');
    };

    var loopThrough = function loopThrough() {
        var thisNumber = _this2.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);

        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }
        setTimeout(function () {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };

    loopThrough();
};

function wrapper2() {
    var _this3 = this;

    var changeColor = function changeColor() {
        yourFortune.classList.toggle('flash2');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this3.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }

        setTimeout(function () {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperTwo() {
    var _this4 = this;

    var changeColor = function changeColor() {
        yourFortune2.classList.toggle('flash2');
    };

    var loopThrough = function loopThrough() {
        var thisNumber = _this4.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);

        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }
        setTimeout(function () {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };

    loopThrough();
};

function wrapper3() {
    var _this5 = this;

    var changeColor = function changeColor() {
        yourFortune.classList.toggle('flash2');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this5.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }

        setTimeout(function () {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperThree() {
    var _this6 = this;

    var changeColor = function changeColor() {
        yourFortune2.classList.toggle('flash3');
    };

    var loopThrough = function loopThrough() {
        var thisNumber = _this6.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);

        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }
        setTimeout(function () {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };

    loopThrough();
};

function wrapper4() {
    var _this7 = this;

    var changeColor = function changeColor() {
        yourFortune.classList.toggle('flash4');
    };

    var loopThrough = function loopThrough() {
        var thisButtonText = _this7.childNodes[0].nodeValue;
        var thisButtonLength = thisButtonText.length;

        for (var i = 0; i < thisButtonLength * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }

        setTimeout(function () {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperFour() {
    var _this8 = this;

    var changeColor = function changeColor() {
        yourFortune2.classList.toggle('flash4');
    };

    var loopThrough = function loopThrough() {
        var thisNumber = _this8.childNodes[0].nodeValue;
        var numberValue = Number(thisNumber);

        for (var i = 0; i < numberValue * 2; i++) {
            setTimeout(function () {
                changeColor();
            }, i * 500);
        }
        setTimeout(function () {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };

    loopThrough();
};

var getFortune = function getFortune() {

    yourFortune3.classList.toggle('box-removal');

    fortunes.sort(function (a, b) {
        return 0.5 - Math.random();
    });

    var fortuneText = document.createTextNode(fortunes[0]);

    fortune.appendChild(fortuneText);

    fortune.classList.add('fortune-show');
};

for (var i = 0; i < button.length; i++) {
    button[0].addEventListener('click', wrapper);
    button[1].addEventListener('click', wrapper2);
    button[2].addEventListener('click', wrapper3);
    button[3].addEventListener('click', wrapper4);
    button[4].addEventListener('click', wrapperOne);
    button[5].addEventListener('click', wrapperTwo);
    button[6].addEventListener('click', wrapperThree);
    button[7].addEventListener('click', wrapperFour);
    button[8].addEventListener('click', getFortune);
    button[9].addEventListener('click', getFortune);
    button[10].addEventListener('click', getFortune);
    button[11].addEventListener('click', getFortune);
}