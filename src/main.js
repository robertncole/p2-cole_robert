var fortunes = ['You will graduate from University of Florida', 'You will buy a house soon', 'You will meet the love of your life soon', 'You will be alone forever', 'You will live a life of happiness and joy', 'You will get married in the next 5 years', 'You will have more than 2 kids', 'You have the best years ahead of you', 'Your current job will not be your forever job', 'Your will get a raise soon'];

const button = document.getElementsByTagName('button');
const yourFortune = document.querySelector('#box');
const yourFortune2 = document.querySelector('#box-2');
const yourFortune3 = document.querySelector('#box-3');
const fortune = document.querySelector('#fortune-box p span');


function wrapper () {
    
    const changeColor = () => {
        yourFortune.classList.toggle('flash');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        
        setTimeout(function() {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    
    loopThrough();
    
};

function wrapperOne () {
    
    const changeColor = () => {
        yourFortune2.classList.toggle('flash');
    }
 
    const loopThrough = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        
        for (let i=0; i < numberValue * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        }
        setTimeout(function() {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };
    
    loopThrough();

};

function wrapper2 () {
    
    const changeColor = () => {
        yourFortune.classList.toggle('flash2');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        
        setTimeout(function() {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperTwo () {
    
    const changeColor = () => {
        yourFortune2.classList.toggle('flash2');
    }
 
    const loopThrough = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        
        for (let i=0; i < numberValue * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        setTimeout(function() {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };
    
    loopThrough();

};

function wrapper3 () {
    
    const changeColor = () => {
        yourFortune.classList.toggle('flash3');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        
        setTimeout(function() {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperThree () {
    
    const changeColor = () => {
        yourFortune2.classList.toggle('flash3');
    }
 
    const loopThrough = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        
        for (let i=0; i < numberValue * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        setTimeout(function() {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };
    
    loopThrough();

};

function wrapper4 () {
    
    const changeColor = () => {
        yourFortune.classList.toggle('flash4');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        
        setTimeout(function() {
            yourFortune.classList.toggle('box-removal');
        }, thisButtonLength * 1000);
    };
    loopThrough();
};

function wrapperFour () {
    
    const changeColor = () => {
        yourFortune2.classList.toggle('flash4');
    }
 
    const loopThrough = () => {
        let thisNumber = this.childNodes[0].nodeValue;
        let numberValue = Number(thisNumber);
        
        for (let i=0; i < numberValue * 2; i++) {
            setTimeout(function() {
                changeColor();
            }, i * 500);
        } 
        setTimeout(function() {
            yourFortune2.classList.toggle('box-removal');
        }, numberValue * 1000);
    };
    
    loopThrough();

};

const getFortune = function () {
    
    yourFortune3.classList.toggle('box-removal');
    
    fortunes.sort(function (a, b) {return 0.5 - Math.random()});
    
    const fortuneText = document.createTextNode(fortunes[0]);
    
    fortune.appendChild(fortuneText);
    
    fortune.classList.add('fortune-show'); 
    
}

for(let i=0; i < button.length; i++) {
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
