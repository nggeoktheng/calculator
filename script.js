const displayStatement = document.getElementById('displayStatement');
const displayValue = document.getElementById('displayValue');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const equalBtn = document.querySelector('.equal');
const negativeBtn = document.querySelector('.negative');
const numbersBtn = document.querySelectorAll('.number');
const operationsBtn = document.querySelectorAll('.operation');

let previousValue = '';
let currentValue = '0';
let operator = '';

numbersBtn.forEach(number => number.addEventListener("click", function(e){
    let numberClicked = e.target.innerText;
    
    if (currentValue === '0') {
        currentValue = '';
        if (numberClicked === '.') {
            currentValue = '0.';
        }
    }

    if (currentValue.includes('.') && numberClicked === '.') return;
    
    if (currentValue.length <= 10) {
        currentValue += numberClicked;
        displayValue.innerText = currentValue;
    }
}))

operationsBtn.forEach(operation => operation.addEventListener("click", function(e){
    let operationClicked = e.target.innerText;

    previousValue = currentValue;
    currentValue = '0';
    operator = operationClicked;

    displayStatement.innerText = previousValue + " " + operator;
    displayValue.innerText = currentValue;
}))

equalBtn.addEventListener("click", function(){
    if (currentValue !== '' && previousValue !== '') {
        calculating();
    }
})

function calculating() {
    currentValue = parseFloat(currentValue);
    previousValue = parseFloat(previousValue);

    if (operator === '+') {
        previousValue += currentValue;
    } else if (operator === '-') {
        previousValue -= currentValue;
    } else if (operator === 'x') {
        previousValue *= currentValue;
    } else if (operator === '÷') {
        previousValue /= currentValue;
        if (currentValue === 0) {
            previousValue = 'ERROR';
            displayStatement.innerText = '';
            displayValue.innerText = previousValue;
            return;
        }
    }

    previousValue = rounding(previousValue);
    currentValue = currentValue.toString();
    previousValue = previousValue.toString();

    if (previousValue.length <= 13) {
        displayStatement.innerText = '';
        displayValue.innerText = previousValue;
    } else {
        displayValue.innerText = previousValue.slice(0, 13) + '...';
    }
}

function rounding(num) {
    return Math.round(num * 1000) / 1000;
}

clearBtn.addEventListener("click", function(){
    previousValue = '';
    currentValue = '0';
    operator = '';
    
    displayValue.innerText = currentValue;
    displayStatement.innerText = previousValue;
})

negativeBtn.addEventListener("click", function(e){
    let negativeClicked = e.target.innerText;
    negativeClicked = '-';

    if (currentValue.includes(negativeClicked) || currentValue === '0') return;

    if (currentValue === '0') {
        currentValue = '';
        currentValue = negativeClicked + currentValue;
        displayValue.innerText = currentValue;
    } else {
        currentValue = negativeClicked + currentValue;
        displayValue.innerText = currentValue;
    }
})

backspaceBtn.addEventListener("click", function(){
    currentValue = currentValue.slice(0, -1);
    displayValue.innerText = currentValue;

    if (currentValue === '') {
        currentValue = '0';
        displayValue.innerText = currentValue;
    }
})
