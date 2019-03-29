var Calculator = (function(){
    var lastCalculationResult = 0;
          
    return {
        add: function add(a) {
            lastCalculationResult = lastCalculationResult + (a == undefined ? 0 : a);
        return add;
        },
        
        subtract: function subtract(a){
        lastCalculationResult = lastCalculationResult - (a == undefined ? 0 : a);
        return subtract;
    },
    divide: function divide(a){
        lastCalculationResult = lastCalculationResult / (a == undefined ? 1 : a);
        return divide;
    },
        
    multiply: function multiply(a){
        lastCalculationResult = lastCalculationResult * (a == undefined ? 1 : a);
        return multiply;
    },
        
    getResult: function (){
        return lastCalculationResult;
    },
    
    reset: function (){
        lastCalculationResult = 0;
        return lastCalculationResult;
    }, 
    }
})()
