var Calculator = (function () {
    let state = 0;

    return {
        add: function (value) {
            state += value;
            return this;
        },
        multiply: function (value) {
            state *= value;
            return this;
        },
        subtract: function (value) {
            state -= value;
            return this;
        },
        divide: function (value) {
            state /= value;
            return this;
        },
        reset: function () {
            state = 0;
            return this;
        },
        setState: function (value) {
            state = value;
        },
        fetchData: function (callback) {
            callback.call(this);
        },
        getResult: function () {
            return state;
        }
    };
})();

Calculator.setState(1);
console.log(Calculator.getResult());

function callback() {
    setTimeout(() => {
        this.setState(500);
        console.log(this.getResult());
    }, 2000);
}
Calculator.fetchData(callback);
