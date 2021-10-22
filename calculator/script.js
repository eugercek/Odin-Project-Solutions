const numbers = document.getElementsByClassName("number");
const actions = document.getElementsByClassName("action");
const operations = document.getElementsByClassName("op");

const screenElement = document.getElementById("screen");

class CalculatorScreen {
  constructor(element) {
    this.element = element;
  }

  isEmpty() {
    return this.element.innerText == "0" || this.element.innerText == "";
  }

  appendNumber(num) {
    if (this.isEmpty()) this.element.innerText = num;
    else this.element.innerText = this.element.innerText.concat(num);
  }
}

const screen = new CalculatorScreen(screenElement);

let opStack = [];
let numStack = [];

function doAction(action) {
  if (action == "clear") screen.innerText = "0";
  else if (action == "result") calculate();
}

function doOperation(op) {
  calculatePrev();
  const num = screen.innerText;
  numStack.push(num);
  opStack.push(op);
  screen.innerText = "";
  const res = evaluate();
}

function calculate(op, left, right) {
  const sum = (a, b) => a + b;
  const minus = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => a / b;

  if (op == "sum") return sum(left, right);
  else if (op == "minus") return minus(left, right);
  else if (op == "multiply") return multiply(left, right);
  else if (op == "divide") return divide(left, right);
}

function evaluate() {
  if (numStack.length == 1) return numStack.pop()

  return calculate(opStack.pop(), numStack.pop(), evaluate())
}

for (const number of [...numbers])
  number.addEventListener("click", () =>
    screen.appendNumber(number.getAttribute("data-number"))
  );

for (const action of [...actions])
  action.addEventListener("click", () => doAction(action.getAttribute("data-action")));

for (const operation of [...operations])
  operation.addEventListener("click", () => doOperation(operation.getAttribute("data-op")));
