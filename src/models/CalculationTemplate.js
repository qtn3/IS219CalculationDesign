const Calculation = require('./Calculation');

class CalculationTemplate extends Calculation{
    constructor(a, b, c, op){
        super(a);
        super(b);
        super(op);
        this.c = c;
    }
    calStructorParent(c){
        return super.obtainStructor() + ' ,and' + this.c;
    }
}
module.exports = CalculationTemplate;