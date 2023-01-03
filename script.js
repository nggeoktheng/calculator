const numbers = document.querySelectorAll('.number');
const displayStatement = document.getElementById('displayStatement');
const displayValue = document.getElementById('displayValue');
const clear = document.querySelector('.clear');
const clearEntry = document.querySelector('.clearEntry');
const signs = document.querySelectorAll('.sign');
const equal = document.querySelector('equal');

let firstNumber = "";
let secondNumber = "";
let sign = "";

numbers.forEach(number => number.addEventListener('click', numberInput));

function numberInput(e) {
    displayValue.innerHTML = e.target.innerHTML;
    displayStatement.innerHTML = displayValue.innerHTML;
    displayStatement.style.color = "black";
}

signs.forEach(sign => sign.addEventListener('click', signInput));

function signInput(e) {
    displayStatement.innerHTML = e.target.innerText;
}

function add(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerHTML = `${a} + ${b}`;
    displayValue.innerHTML = a + b;
    return displayStatement.innerHTML;
}

function subtract(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerHTML = `${a} - ${b}`;
    displayValue.innerHTML = a - b;
    return displayStatement.innerHTML;
}

function multiply(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerHTML = `${a} × ${b}`;
    displayValue.innerHTML = a * b;
    return displayStatement.innerHTML;
}

function divide(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerHTML = `${a} ÷ ${b}`;
    displayValue.innerHTML = a / b;
    return displayStatement.innerHTML;
}

function operate(operatorSign, a, b) {
    if (operatorSign == '+') {
        return add(a, b);
    } else if (operatorSign == '-') {
        return subtract(a, b);
    } else if (operatorSign == '×') {
        return multiply(a, b);
    } else if (operatorSign == '÷') {
        return divide(a, b);
    }
}

clear.addEventListener('click', reset);

function reset() {
    displayValue.innerHTML = 0;
    displayStatement.style.color = "white";
}

clearEntry.addEventListener('click', clearInput);

function clearInput() {
    displayValue.innerHTML = 0;
}