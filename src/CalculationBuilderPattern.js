class CalculationBuilderPattern {
    constructor(a, b, perform) {
        this.a = a;
        this.b = b;
        this.perform = perform;
    }

    static Create(a, b, perform){
        return new CalculationBuilderPattern(a, b, perform);
    }

    GetResults() {
        return this.perform(this.a,this.b)
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

    newProduct(a, b, perform){
        this.mul = a * b;
    }

    newSquareRoot(a, b, perform){
        this.squareroot = Math.pow(a, 1/b);
    }
}
module.exports = CalculationBuilderPattern;