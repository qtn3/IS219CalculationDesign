const Calculation = require('./models/Calculation')
const Sum = require('./Operations/Sum');
const Difference = require('./Operations/Difference');
const Product = require('./Operations/Product');
const Quotient = require('./Operations/Quotient');
const Squareroot = require('./Operations/Squareroot');
const Square = require('./Operations/Square');

class Calculator {
    static Calculations = []

    static addCalculation(calculation){
        Calculator.Calculations.push(calculation);
    }

    static getLastCalculation(){
        return this.Calculations[this.Calculations.length - 1];
    }

    static Sum(a,b) {
          let calculation = Calculation.Create(a,b,Sum);
          this.addCalculation(calculation);
        return calculation;
    }

    static Difference(a,b) {
        let calculation = Calculation.Create(a,b,Difference);
        this.addCalculation(calculation);
        return calculation;
    }

    static Product(a,b) {
        let calculation = Calculation.Create(a,b,Product);
        this.addCalculation(calculation);
        return calculation;
    }

    static Quotient(a,b) {
        let calculation = Calculation.Create(a,b,Quotient);
        this.addCalculation(calculation);
        return calculation;
    }

    static Squareroot(a, b) {
        let calculation = Calculation.Create(a,b,Squareroot);
        this.addCalculation(calculation);
        return calculation;
    }

    static Square(a, b) {
        let calculation = Calculation.Create(a,b,Square);
        this.addCalculation(calculation);
        return calculation;
    }
}
module.exports = Calculator;
