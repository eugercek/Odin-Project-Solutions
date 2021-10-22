const numbers = document.getElementsByClassName("number");
const actions = document.getElementsByClassName("action");
const operations = document.getElementsByClassName("op");

const screenElement = document.getElementById("screen");

class CalculatorScreen {
  constructor(element) {
    this.element = element;
  }

  isEmpty(){
    return this.element.innerText == "0" || this.element.innerText == "";
  }

  appendNumber(num) {
    if (this.isEmpty()) this.element.innerText = num;
    else this.element.innerText = this.element.innerText.concat(number);
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
}

function calculatePrev() {
  if (opStack.length == 0 || numStack.length != 2) return;

  let preOp = opStack.pop();

  const right = numStack.pop();
  const left = numStack.pop();

  let res = calculate(preOp, left, right);

  screen.innerText = res;
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

for (const n of [...numbers])
  n.addEventListener("click", () =>
    screen.appendNumber(n.getAttribute("data-number"))
  );

for (const a of [...actions])
  a.addEventListener("click", () => doAction(a.getAttribute("data-action")));

for (const o of [...operations])
  o.addEventListener("click", () => doOperation(a.getAttribute("data-op")));
