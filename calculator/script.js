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

  appendNumber(number) {
    if (this.isEmpty()) this.element.innerText = number;
    else this.element.innerText = this.element.innerText.concat(number);
  }

  setNumber(number) {
    this.element.innerText = number;
  }

  getNumber(number) {
    return parseFloat(this.element.innerText);
  }

  clear() {
    this.element.innerText = "";

    numberIsFloat = false;
  }

  insertFractionalSeparator() {
    this.element.innerText += ".";
  }

  toggleSign() {
    const currentSign = this.element.innerText[0];
    if (currentSign == "-")
      this.element.innerText = this.element.innerText.substring(1);
    else this.element.innerText = "-" + this.element.innerText;
  }
}

const screen = new CalculatorScreen(screenElement);

let opStack = [];
let numStack = [];

// Does number has fractional number separator (. or ,)
let numberIsFloat = false;

function doAction(action) {
  if (action == "clear") screen.clear();
  else if (action == "fraction") addFractionalSeparator();
  else if (action == "result") result();
  else if (action == "sign") screen.toggleSign();
}

function doOperation(op) {
  const num = screen.getNumber();
  numStack.push(num);
  numberIsFloat = false;
  opStack.push(op);
  screen.clear();
}

function addFractionalSeparator() {
  if (!numberIsFloat) {
    screen.insertFractionalSeparator();
    numberIsFloat = true;
  }
}

function result() {
  const lastNumber = screen.getNumber();
  if (lastNumber != "") numStack.push(lastNumber);

  const res = evaluate();
  screen.setNumber(res);

  // Clean stacks
  opStack = [];
  numStack = [];
}

const Operation = {
  sum: (a, b) => a + b,
  minus: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  mod: (a, b) => a % b,
};

function calculate(op, left, right) {
  return Operation[op](right, left);
}

function evaluate() {
  if (numStack.length == 1) return numStack.pop();

  return calculate(opStack.pop(), numStack.pop(), evaluate());
}

for (const number of [...numbers])
  number.addEventListener("click", () =>
    screen.appendNumber(number.getAttribute("data-number"))
  );

for (const action of [...actions])
  action.addEventListener("click", () =>
    doAction(action.getAttribute("data-action"))
  );

for (const operation of [...operations])
  operation.addEventListener("click", () =>
    doOperation(operation.getAttribute("data-op"))
  );
