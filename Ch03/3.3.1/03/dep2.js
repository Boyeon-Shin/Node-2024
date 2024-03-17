const dep1  = require('./dep1');
console.log('require dap1' , dep1);
module.exports = () => {
    console.log('deps1', dep1);
};

