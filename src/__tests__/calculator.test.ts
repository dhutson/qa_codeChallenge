import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];

describe("Calculator", () => {
  dataset.forEach((operation) => {
    test(`the ${operation.method} method with ${operation.x} and ${operation.y}`, () => {
      switch (operation.method) {
        case "add":
          expect(calculator.add(operation.x, operation.y)).toEqual(operation.x + operation.y);
          break;
        case "subtract":
          expect(calculator.subtract(operation.x, operation.y)).toEqual(operation.x - operation.y);
          break;
        case "multiply":
          expect(calculator.multiply(operation.x, operation.y)).toEqual(operation.x * operation.y);
          break;
        case "divide":
          expect(calculator.divide(operation.x, operation.y)).toEqual(operation.x / operation.y);
          break;
        default:
          console.log("There is no valid operation selected.")
      }
    });
  });
});