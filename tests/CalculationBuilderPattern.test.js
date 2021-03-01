const CalculationBuilderPattern = require('../src/CalculationBuilderPattern');
const newProduct = require('../src/Operations/Product');
const newSquareRoot = require('../src/Operations/Squareroot');

test('Test of Calculation Instantiation', () => {
    //I need to test the instantiation of the calculation object
    let perform = newProduct
    let calculation = new CalculationBuilderPattern(1,2,perform);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.perform).toBe(perform);
});
test('Test Get results for Product  function', () => {
    //I need to test the get results function
    let perform = newProduct;
    let calculation = new CalculationBuilderPattern(1,2,perform);
    expect(calculation.GetResults()).toBe(2);
});
test('Test Get results for Squareroot  function', () => {
    //I need to test the get results function
    let perform = newSquareRoot;
    let calculation = new CalculationBuilderPattern(1,2,perform);
    expect(calculation.GetResults()).toBe(1);
});