const numbersBtn = document.querySelectorAll('.number');
const displayStatement = document.getElementById('displayStatement');
const displayValue = document.getElementById('displayValue');
const clearBtn = document.querySelector('.clear');
const backspaceBtn = document.querySelector('.backspace');
const operationsBtn = document.querySelectorAll('.operation');
const negativeBtn = document.querySelector('.negative');

let defaultValue = '0';

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
    } else {
        let newValue = '';
        newValue = '-' + defaultValue;
        displayValue.innerText = newValue;
    }
})
 
operationsBtn.forEach(operation => operation.addEventListener('click', operationSelected));

function parseFloatValues(calcString) {
    const operators = ['+', '-', 'x', '÷']

    for (let i = 0; i < operators.length; i++) {
        const operatorToTry = operators[i]
        const operationParts = calcString.split(operatorToTry)

        if (operationParts.length > 1) {
            return {
                operation: operatorToTry,
                a: parseFloat(operationParts[0]),
                b: parseFloat(operationParts[1])
            }
        }
    }
}

// 1. How can I make `2 + 2 +` work
// `2 + 2 +` should work the same as `2 + 2 =`

/**
 * 1. Need a way to know when there is already an operation in the calculation string
 * 2. If there is one, trigger the operate function
 */

function operationSelected(e) {
    let operationClicked = e.target.innerText;
    if (displayStatement.innerText === '' && displayValue.innerText === '0') return;
    displayStatement.innerText += displayValue.innerText;
    defaultValue = '0';
    displayValue.innerText = defaultValue;
    displayStatement.innerText += operationClicked;
   
    const { operation, a, b } = parseFloatValues(displayStatement.innerText);

    // if (/** has calculation string and operationClicked is operation */) {
        // Operate
    //}    

    // only work sometimes because NaN keeps appearing in the calculationStr
    let calculationStr = `${a}${operation}${b}`;
    console.log(calculationStr, displayStatement.innerText)

    if (calculationStr.indexOf('NaN', 2) === -1 && calculationStr[calculationStr.indexOf(operation)] === operation) {
        operate(operation, a, b);
    }

    // only works for '=' and sometimes for other operation
    /* if (operation, a, b) {
        const result = operate(operation, a, b);
       
        if (result === NaN) {
            return;
        } else {
            return result;
        }
    } */

}

function operate(operatorSign, a, b) {
    if (operatorSign === '+') {
        return add(a, b);
    } else if (operatorSign === '-') {
        return subtract(a, b);
    } else if (operatorSign === 'x') {
        return multiply(a, b);
    } else if (operatorSign === '÷') {
        return divide(a, b);
    }
}

function add(a, b) {
    displayStatement.innerText = `${a} + ${b}`;
    displayValue.innerText = a + b;
    return displayValue.innerText;
}

function subtract(a, b) {
    displayStatement.innerText = `${a} - ${b}`;
    displayValue.innerText = a - b;
    return displayValue.innerText;
}

function multiply(a, b) {
    displayStatement.innerText = `${a} x ${b}`;
    displayValue.innerText = a * b;
    return displayValue.innerTex;
}

function divide(a, b) {
    displayStatement.innerText = `${a} ÷ ${b}`;
    displayValue.innerText = a / b;
    if (displayValue.innerText === 'Infinity') {
        displayValue.innerText = 'ERROR';
    }  
    return displayValue.innerText;
}

clearBtn.addEventListener('click', reset);

function reset() {
    displayStatement.innerText = '';
    displayValue.innerText = '0';
    defaultValue = '0';
}

backspaceBtn.addEventListener('click', undo);

function undo() {
    if (defaultValue !== '0') {
        defaultValue = defaultValue.slice(0, -1);
        displayValue.innerText = defaultValue;
    }
}