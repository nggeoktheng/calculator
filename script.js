const numbersBtn = document.querySelectorAll('.number');
const displayStatement = document.getElementById('displayStatement');
const displayValue = document.getElementById('displayValue');
const clearBtn = document.querySelector('.clear');
const clearEntryBtn = document.querySelector('.clearEntry');
const operationsBtn = document.querySelectorAll('.operation');
const equalBtn = document.querySelector('.equal');
const negativeBtn = document.querySelector('.negative');

let defaultValue = '0';
let firstValue = '';
let secondValue = '';

numbersBtn.forEach(number => number.addEventListener('click', numberInput));

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

negativeBtn.addEventListener('click', () => {
    if (defaultValue === '0') {
        defaultValue = '';
        defaultValue = '-' + defaultValue;
    } else if (defaultValue !== '0') {
        let newValue = '';
        newValue = '-' + defaultValue;
        displayValue.innerText = newValue;
    }
})
 
operationsBtn.forEach(operation => operation.addEventListener('click', operationSelected));

function operationSelected(e) {
    const operationClicked = e.target.innerText;
    if (displayStatement.innerText === '' && displayValue.innerText === '0') return;
    displayStatement.innerText = displayValue.innerText;
    clearInput();
    displayStatement.innerText += operationClicked;
}

equalBtn.addEventListener('click', (e) => {
    const equal = e.target.innerText;
    // operate();
})

function operate(operatorSign, a, b) {
    if (operatorSign === '+') {
        return add(a, b);
    } else if (operatorSign === '-') {
        return subtract(a, b);
    } else if (operatorSign == '×') {
        return multiply(a, b);
    } else if (operatorSign == '÷') {
        return divide(a, b);
    }
}

function add(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerText = `${a} + ${b}`;
    displayValue.innerText = a + b;
    return displayStatement.innerText;
}

function subtract(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerText = `${a} - ${b}`;
    displayValue.innerText = a - b;
    return displayStatement.innerText;
}

function multiply(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerText = `${a} × ${b}`;
    displayValue.innerText = a * b;
    return displayStatement.innerText;
}

function divide(a, b) {
    displayStatement.style.color = 'black';
    displayStatement.innerText = `${a} ÷ ${b}`;
    displayValue.innerText = a / b;
    return displayStatement.innerText;
}

clearBtn.addEventListener('click', reset);

function reset() {
    displayStatement.innerText = '';
    displayValue.innerText = '0';
    defaultValue = '0';
}

clearEntryBtn.addEventListener('click', clearInput);

function clearInput() {
    displayValue.innerText = '0';
    defaultValue = '0';
}