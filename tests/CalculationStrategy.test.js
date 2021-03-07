const calculation = require('../src/models/Calculation');
const calculationStrategy = require('../src/CalculationStrategy');
const calculationStrategyB = require('../src/CalculationStrategyB');
const Product = require('../src/Operations/Product');

test('Test Strategy of Calculation', () => {
    //I need to test the get results function
    let op = Product;
    let customCalculation = new calculation(1,2, op);
    const strategy = new calculationStrategy();
    const strategyB = new calculationStrategyB();
    customCalculation.stragtegy = strategy;
    expect(customCalculation.doOperation()).toBe('This is Calculation Strategy 1');
    customCalculation.stragtegy = strategyB;
    expect(customCalculation.doOperation()).toBe('This is Calculation Strategy 2');
});