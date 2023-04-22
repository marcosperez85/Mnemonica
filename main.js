const $btnZero = document.getElementById("btnZero");
const $btnMinusOne = document.getElementById("btnMinusOne");
const $btnMinusTen = document.getElementById("btnMinusTen");
const $btnRandom = document.getElementById("btnRandom");
const $btnPlusOne = document.getElementById("btnPlusOne");
const $btnPlusTen = document.getElementById("btnPlusTen");
const $mainDisplay = document.getElementById("mainDisplay");

let actualValue = 0;

$btnZero.onclick = function() {
    actualValue = 0;
    evaluateResult(actualValue);
}

$btnMinusOne.onclick = function() {
    actualValue--;
    evaluateResult(actualValue);
}

$btnMinusTen.onclick = function() {
    actualValue = actualValue - 10;
    evaluateResult(actualValue);
}

$btnRandom.onclick = function() {
    let randomNumber = 1 + Math.random() * 99;
    actualValue = Math.floor(randomNumber);
    evaluateResult(actualValue);
}

$btnPlusOne.onclick = function() {
    actualValue++;
    evaluateResult(actualValue);
}

$btnPlusTen.onclick = function() {
    actualValue = actualValue + 10;
    evaluateResult(actualValue);
}

function evaluateResult() {
    if(actualValue < 0) {
        actualValue = 99;
    } 
    
    if(actualValue > wordList.length - 1) {
        actualValue = 0; 
    }
    
    changeMainDisplay(actualValue);
}

$mainDisplay.onclick = function() {
    $mainDisplay.innerText = $mainDisplay.innerText + " - " + wordList[actualValue];
}

function changeMainDisplay(newValue) {
    $mainDisplay.innerText = newValue;
}