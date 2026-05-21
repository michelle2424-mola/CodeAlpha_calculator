const outputElement = document.getElementById('output');
const resultElement = document.getElementById('result');
const buttons = document.querySelectorAll('.button');

let expression = '';

const updateDisplay = () => {
  outputElement.textContent = expression || '0';
  try {
    const evaluated = evaluateExpression(expression);
    resultElement.textContent = evaluated !== null ? `= ${evaluated}` : '';
  } catch {
    resultElement.textContent = '';
  }
};

const evaluateExpression = (expr) => {
  if (!expr) return null;
  const sanitized = expr
    .replace(/[^0-9.+\-*/()%]/g, '')
    .replace(/(\d)\(/g, '$1*(')
    .replace(/\)\d/g, ')*$&');

  if (/[^0-9.+\-*/()%]/.test(sanitized) || /\*\*|\/\/|\.\.|[+\-*/]{2,}/.test(sanitized)) {
    return null;
  }

  const result = Function(`"use strict"; return (${sanitized})`)();
  return Number.isFinite(result) ? +result.toFixed(10) : null;
};

const appendValue = (value) => {
  if (value === '.' && /\.[0-9]*$/.test(expression)) return;
  if (expression === '' && /[+*/]/.test(value)) return;
  if (/[+\-*/]$/.test(expression) && /[+\-*/]/.test(value)) {
    expression = expression.slice(0, -1) + value;
  } else {
    expression += value;
  }
  updateDisplay();
};

const clearAll = () => {
  expression = '';
  updateDisplay();
};

const deleteLast = () => {
  expression = expression.slice(0, -1);
  updateDisplay();
};

const calculate = () => {
  const evaluated = evaluateExpression(expression);
  if (evaluated !== null) {
    expression = String(evaluated);
  }
  updateDisplay();
};

const handleButton = (button) => {
  const value = button.dataset.value;
  const action = button.dataset.action;

  if (action === 'clear') {
    clearAll();
    return;
  }

  if (action === 'delete') {
    deleteLast();
    return;
  }

  if (action === 'equals') {
    calculate();
    return;
  }

  if (action === 'percent') {
    const evaluated = evaluateExpression(expression);
    if (evaluated !== null) {
      expression = String(evaluated / 100);
      updateDisplay();
    }
    return;
  }

  appendValue(value);
};

buttons.forEach((button) => {
  button.addEventListener('click', () => handleButton(button));
});

window.addEventListener('keydown', (event) => {
  const key = event.key;
  if (key >= '0' && key <= '9') {
    appendValue(key);
    return;
  }

  if (key === 'Enter' || key === '=') {
    event.preventDefault();
    calculate();
    return;
  }

  if (key === 'Backspace') {
    deleteLast();
    return;
  }

  if (key === 'Escape') {
    clearAll();
    return;
  }

  if (key === '.' || key === ',') {
    appendValue('.');
    return;
  }

  const operatorMap = {
    '+': '+',
    '-': '-',
    '*': '*',
    '/': '/',
    'x': '*',
    'X': '*',
  };

  if (operatorMap[key]) {
    appendValue(operatorMap[key]);
  }
});

updateDisplay();
