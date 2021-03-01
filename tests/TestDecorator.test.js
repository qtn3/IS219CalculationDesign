const Calculation = require('../src/models/Calculation');
const Sum = require('../src/Operations/Sum');
const Difference = require('../src/Operations/Difference');
const Product = require('../src/Operations/Product');
const Quotient = require('../src/Operations/Quotient');

test('Test say name for Sum operation', () => {
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    let sayTest = calculation.addOperationToName(calculation.sayOperation);
    expect(sayTest('Sum')).toBe('Sum is an operation');
});
test('Test say name for Product operation', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    let sayTest = calculation.addOperationToName(calculation.sayOperation);
    expect(sayTest('Multiply')).toBe('Multiply is an operation');
});
test('Test say name for Subtract operation', () => {
    let op = Difference;
    let calculation = new Calculation(1,2,op);
    let sayTest = calculation.addOperationToName(calculation.sayOperation);
    expect(sayTest('Subtract')).toBe('Subtract is an operation');
});
test('Test say name for Quotient operation', () => {
    let op = Quotient;
    let calculation = new Calculation(1,2,op);
    let sayTest = calculation.addOperationToName(calculation.sayOperation);
    expect(sayTest('Quotient')).toBe('Quotient is an operation');
});