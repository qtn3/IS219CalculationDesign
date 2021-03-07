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