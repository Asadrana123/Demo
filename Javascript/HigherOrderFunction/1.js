
function memoization(multiply) {
    const caching = {};
    return function (...arg) {
        const temp = JSON.stringify(arg);
        console.log(temp);
        if (caching[temp] === undefined) caching[temp] = multiply(...arg);
        return caching[temp];
    }
}
function multiply(num1, num2) {
    for (let i = 0; i < 1000000; i++) { }
    return num1 * num2;
}
console.time("First Call");
console.log(multiply(10,10));
console.timeEnd("First Call");
const result=memoization(multiply);
console.time("Second Call");
console.log(result(10,10));
console.timeEnd("Second Call");
