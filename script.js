let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput !== '' && !['+', '-', '*', '/'].includes(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}