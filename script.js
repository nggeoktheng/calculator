const numbers = document.querySelectorAll('.number');
const displayValue = document.getElementById('displayValue');
const clear = document.querySelector('.clear');
const signs = document.querySelectorAll('.sign');

const displayStatement = document.getElementById('displayStatement');
// console.log(displayStatement.innerText)

numbers.forEach(number => number.addEventListener('click', numberInput));

function numberInput(e) {
    displayValue.innerHTML = e.target.innerText;
    displayStatement.innerHTML = displayValue.innerHTML;
    displayStatement.style.color = "black";
}

clear.addEventListener('click', clearInput);

function clearInput() {
    displayValue.innerHTML = 0;
    displayStatement.style.color = "white";
}

signs.forEach(sign => sign.addEventListener('click', signInput));

function signInput(e) {
    displayStatement.innerHTML = e.target.innerText;
    console.log();
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
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
