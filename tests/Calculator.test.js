const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    let result = Calculator.Sum(1,2);
    expect(result.GetResults()).toBe(3);
});
test('Calculator difference between two numbers', () => {
    let result = Calculator.Difference(1,2);
    expect(result.GetResults()).toBe(-1);
});
test('Calculator product of two numbers', () => {
    let result = Calculator.Product(1,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator quotient of two numbers', () => {
    let result = Calculator.Quotient(1,0);
    expect(result.GetResults()).toBe(1/0);
});
test('Calculator square root of a number', () => {
    let result = Calculator.Squareroot(4,2);
    expect(result.GetResults()).toBe(2);
});
test('Calculator square of a number', () => {
    let result = Calculator.Square(4, 2);
    expect(result.GetResults()).toBe(16);
});
test('Calculator get last calculation', () => {
    Calculator.Product(1,2);
    let result = Calculator.getLastCalculation()
    expect(result.GetResults()).toBe(2);
});


