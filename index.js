
// for uppercase

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}

// for lowercase

function getRandomLowerCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}

// for numbers

function getRandomNumber (){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}

// for special characters
function getRandomSymbol(){
    var symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

// communicating with the DOM

var answerEl = document.getElementById("answer");
var lengthEl = document.getElementById("length");
var numberEl = document.getElementById("numbers");
var lowerEl = document.getElementById("lowerCase");
var upperEl = document.getElementById("upperCase");
var symbolEl = document.getElementById("specChar");
var generateEl = document.getElementById("generate");

const randomFunc = {
    upper : getRandomUpperCase,
    lower: getRandomLowerCase,
    number : getRandomNumber,
    symbol : getRandomSymbol
};

// on event

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolEl.checked;

answerEl.innerText = generatePassword(hasUpper, hasLower, hasNumber, hasSymbol, length);
});

// password function 

function generatePassword(upper, lower, number, symbol, length) {
    let generatedPassword = "";

    const typesCount = upper + lower + number + symbol;

    const typesArr = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0]);
    
    if(typesCount === 0) {
        return '';
    }

    for (let i=o; i<length; i+=typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword;
}