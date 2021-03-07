const calculation = require('../src/Operations/CalculationDesignSingleton');

test('Test Design Pattern Singleton of Calculation', () => {
    //I need to test the get results function
    const singletonA = calculation.getInstance();
    const singletonB = calculation.getInstance();
    const isEqual = singletonA === singletonB;
    expect(isEqual).toBe(true);
});