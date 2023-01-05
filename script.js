const numbers = document.querySelectorAll('.number');
const displayStatement = document.getElementById('displayStatement');
const displayValue = document.getElementById('displayValue');
const clear = document.querySelector('.clear');
const clearEntry = document.querySelector('.clearEntry');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');

let defaultValue = '0';

numbers.forEach(number => number.addEventListener('click', numberInput));

function numberInput(e) {
    const numberClicked = e.target.innerText;
    if (defaultValue === '0') {
        defaultValue = '';
        if (numberClicked === '.') {
            defaultValue += '0.';
        }
    }
    if (numberClicked === '.' && defaultValue.includes('.')) return;
    defaultValue += numberClicked;
    displayValue.innerText = defaultValue;
}

operations.forEach(operation => operation.addEventListener('click', operationSelected));

function operationSelected(e) {
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
    displayValue.innerText = '0';
    defaultValue = '0';
}

clearEntry.addEventListener('click', clearInput);

function clearInput() {
    displayValue.innerText = '0';
    defaultValue = '0';
}