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