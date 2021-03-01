function Quotient (a,b) {
    var quotient = a / b;
    if(quotient !== quotient){
        throw new Error(a + " / " + b);
    }
    return quotient;
}
module.exports = Quotient;