const fibonacci = function (num) {
    const fibonacciSeries = [];
    var lastNum = 1;
    for (let i = 0; i < num; i++) {
        console.log(lastNum);
        fibonacciSeries.push(lastNum);
        lastNum += i;
    }
};

// Do not edit below this line
module.exports = fibonacci;

fibonacci(5);