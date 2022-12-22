const numbers = document.querySelectorAll('.number');
const displayValue = document.getElementById('displayValue');
const clear = document.querySelector('.clear');

numbers.forEach(number => number.addEventListener('click', numberInput));

function numberInput(e) {
    displayValue.innerHTML = e.target.innerText;
}

clear.addEventListener('click', clearInput);

function clearInput() {
    displayValue.innerHTML = 0;
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
