[![Coverage Status](https://coveralls.io/repos/github/qtn3/IS219CalculationDesign/badge.svg?branch=master)](https://coveralls.io/github/qtn3/IS219CalculationDesign?branch=master)
[![Build Status](https://travis-ci.org/qtn3/IS219CalculationDesign.svg?branch=master)](https://travis-ci.org/qtn3/IS219CalculationDesign)

# A. Principles of Object Oriented Programming

**1. Abstraction**

It is a way of hiding the implementation details and showing only the functionality to the users. In other words, it
ignores the irrelevant and shows only the required one.
For example, we have Square file in the Operations file. That file is not hidden but the way how it perform square of a number is hidden.
Users just need to plug in the number, and don't need to worry about the rest of how the number to be squared.
 ```
  function Square (a, b) {
      return Math.pow(a, b);
  }
  module.exports = Square;
 ```
**2. Encapsulation:**

The idea that the data of an object should not be directly exposed.  Instead, callers that want to achieve 
a given result are coaxed into proper usage by invoking methods (rather than accessing the data directly). 
For example, the Calculation class in the Calculation.js file, we have the constructor which cannot be modified from other classes because of the private state,
instead we can have a method to access it or we can make a method used for changing it. However, we can access it directly.
 ```
 class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    static Create(a, b, op){
        return new Calculation(a, b, op);
    }
     GetResults() {
        return this.op(this.a,this.b)
    }
}
 ```
**3. Inheritance**

The concept in which some property and methods of an Object is being used by another Object.
Javascript is difference than the most of OOP languages where classes inherit classes, but JavaScript
Object inherits Object, so that certain features (property and methods) of one object can be reused 
by other Objects.
For example, calculation is an object of class Calculation, so it can use the GetResults() method of the class
```
 test('Test Get results for Sum function', () => {
    //I need to test the get results function
    let op = Sum;
    let calculation = new Calculation(1,2,op);
    expect(calculation.GetResults()).toBe(3);
});
```
**4. Polymorphism**

It is the core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides
an ability to call the same method on different JavaScript objects.
For example, we have Create() method which can be implemented in many forms depend on the parameter (op).
```
static Create(a, b, op){
     return new Calculation(a, b, op);
}
```
# B. SOLID Principles

**1. S- Single Responsibility Principle**

Means every function we write should do exactly one thing. Every function has a single responsibility because the task should be divided equally for each function.
For example in the Calculation.js file, we have Create(a, b, op) method which is repsonsible for creating of the operation
```
static Create(a, b, op){
        return new Calculation(a, b, op);
    }
```
**2. O- Open-Closed Principle**

Means the program should be open to exstension, but closed to modification. In the program, all the functionalities do exactly
what it needs to do, and even if there is an error, it should handle the error. We don't need to go back to that function to change it.
For example, the Quotient operation should handle exception such as dividing by zero (mormally, it will thrown an error).
```
function Quotient (a,b) {
    var quotient = a / b;
    if(quotient !== quotient){
        throw new Error(a + " / " + b);
    }
    return quotient;
}
module.exports = Quotient;
```
**3. L- Liskov Substitution Principle**

This is hard to expalin so for easier we can think like the principle defines that objects of a superclass 
shall be replaceable with objects of its subclasses without breaking the application. That requires the objects of your subclasses to behave in the same way as the objects of your superclass.
For example: 
```
class Dog {
  String getNoise() {
    return "WOOF WOOF!!!"
  }
}

class FrenchBulldog extends Dog {
  String getNoise() {
    return "mrfff!"
  }
}
```
FrenchBulldog can stand in for any Dog in any context and behaves in the same manner, and it's therefore not a violation of the LSP.

**4. I- Interface Segregation Principle**

It states that clients should not be forced to implement interfaces they don't use. "Client" in this case means the implementing class of an interface.
This means that the methods of a large interface can be broken up into groups of methods. If a client does not need a method then the client should not know about the method / should not have to implement it.

**5. D- Dependency Inversion Principle**

It talks about the coupling between the different classes or modules. It focuses on the approach where the higher classes are not dependent on the lower classes instead 
depend upon the abstraction of the lower classes. The main motto of the dependency inversion is any higher classes should always depend upon
the abstraction of the class rather than the detail.
For example:
```
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
    }
    static Create(a, b, op){
        return new Calculation(a, b, op);
    }
     GetResults() {
        return this.op(this.a,this.b)
    }
}
```

# C. Design Patterns

**Singleton (Creational)**

Definition:

The Singleton design pattern lets you ensure that a class has only one instance, while providing a global access point to this instance.
All implementations of the Singleton have these two steps in common:
1. Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
2. Create a static creation method that acts as a constructor. This method calls the private constructor to create an object and saves it in a static field.

For Example:

```
const Calculator = require('../Calculator');

let calculation = (function () {
    let instance;
    function createInstance() {
        let calculator = new Calculator("I am the instance");
        return calculator;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
module.exports = calculation;
```

CalculationDesignSingleton.test.js

```
const calculation = require('../src/Operations/CalculationDesignSingleton');

test('Test Design Pattern Singleton of Calculation', () => {
    //I need to test the get results function
    const singletonA = calculation.getInstance();
    const singletonB = calculation.getInstance();
    const isEqual = singletonA === singletonB;
    expect(isEqual).toBe(true);
});
```
***Decorator (Structural)***

Definition: 

Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

For example: 

addOperationToName takes the function it wraps as a parameter (fn) (the function sayOperation). Then it will return
a function (fn) (sayOperation). It means we are extending the function (fn) by concatenating the string it receives as a parameter.
We can say that we are decorating the sayOperation function
Calculation.js
```
addOperationToName(fn){
        return function(name){
            const operation = name + ' is an operation';
            return fn(operation);
        }
    }

    sayOperation(name){
        return name;
    }
```
TestDecorator.test.js
```
test('Test say name for Product operation', () => {
    let op = Product;
    let calculation = new Calculation(1,2,op);
    let sayTest = calculation.addOperationToName(calculation.sayOperation);
    expect(sayTest('Multiply')).toBe('Multiply is an operation');
});
```

***Strategy (Behavioral)***

Definition: 

Strategy Design Pattern  is a type of behavioral design pattern that encapsulates a "family" of algorithms 
and selects one from the pool for use during runtime. The algorithms are interchangeable, meaning that they are substitutable for each other.

For example: 

Calculation.js
```
class Calculation {
    constructor(a, b, op) {
        this.a = a;
        this.b = b;
        this.op = op;
        this.stragtegy = null;
    }

    static Create(a, b, op){
        return new Calculation(a, b, op);
    }

     GetResults() {
        return this.op(this.a,this.b)
    }
    addOperationToName(fn){
        return function(name){
            const operation = name + ' is an operation';
            return fn(operation);
        }
    }

    sayOperation(name){
        return name;
    }

    obtainStructor(){
        return this.a +' '+ this.b;
    }

    set strategy(stragtegy){
        this.stragtegy = stragtegy;
    }

    doOperation(){
        return this.stragtegy.doAction();
    }
}
module.exports = Calculation;
```

CalculationStrategy.js
```
class CalculationStrategy{
    doAction(){
        return 'This is Calculation Strategy 1';
    }
}
module.exports = CalculationStrategy;
```
CalculationStrategyB.js
```
class CalculationStrategyB{
    doAction(){
        return 'This is Calculation Strategy 2';
    }
}
module.exports = CalculationStrategyB;
```

CalculationStrategy.test.js

```
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
```