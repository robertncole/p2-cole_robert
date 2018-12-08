var fortunes = ['You will graduate from University of Florida', 'You will buy a house soon', 'You will meet the love of your life soon', 'You will be alone forever'];

const button = document.getElementsByTagName('button');
const yourFortune = document.querySelector('#box');


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
    };
    
    loopThrough();
    
};

function wrapperTwo () {
    
    const changeColor2 = () => {
        yourFortune.classList.toggle('flash2');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor2();
            }, i * 500);
        }  
    };
    loopThrough();
};

function wrapperThree () {
    
    const changeColor3 = () => {
        yourFortune.classList.toggle('flash3');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor3();
            }, i * 500);
        }  
    };
    loopThrough();
};

function wrapperFour () {
    
    const changeColor4 = () => {
        yourFortune.classList.toggle('flash4');
    }
    
    const loopThrough = () => {
        let thisButtonText = this.childNodes[0].nodeValue;
        let thisButtonLength = thisButtonText.length;
        
        for (let i=0; i < thisButtonLength * 2; i++) {
            setTimeout(function() {
                changeColor4();
            }, i * 500);
        }  
    };
    loopThrough();
};

for(let i=0; i < button.length; i++) {
    button[0].addEventListener('click', wrapper);
    button[1].addEventListener('click', wrapperTwo);
    button[2].addEventListener('click', wrapperThree);
    button[3].addEventListener('click', wrapperFour);
}
