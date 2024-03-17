const dep2 = require('./dep2');
console.log('require dap2' , dep2);
module.exports = () => {
    console.log('deps2', dep2);
};

