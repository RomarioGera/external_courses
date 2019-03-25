var Calculator = (function(){
    var lastCalculationResult = null;
    
        function add(a, b){
        var addResult = a + b;
        return lastCalculationResult = addResult;
    };
    function subtract(a, b){
        var subtractResult = a - b;
        return lastCalculationResult = subtractResult;
    };
    function divide(a, b){
        var divideResult = a / b;
        return lastCalculationResult = divideResult;
    };
    function multiply(a, b){
        var multiplyResult = a * b;
        return lastCalculationResult = multiplyResult;
    };
        
    function getResult(lastCalculationResult){
        return lastCalculationResult;
    };
    
    function reset(lastCalculationResult){
        lastCalculationResult = null;
        return lastCalculationResult;
    };
      
    return {}
})()
