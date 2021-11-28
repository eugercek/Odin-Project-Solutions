import calculator from "../src/calculator";

test("Calculator Addition", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator Subtraction", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator Multiplication", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

// Use toBeCloseTo in float numbers
test("Calculator Division", () => {
  expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
});
