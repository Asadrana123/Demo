/*Currying is a functional programming concept where a function that takes 
multiple arguments is transformed into a series of functions, each taking a single argument.
Each function returns another function that accepts 
the next argument until all arguments are provided,
at which point the final result is computed.*/

function outestsum(a) {
    function outersum(b) {
        function innersum(c) {
            return a + b + c;
        }
        return innersum;
    }
    return outersum;
}
const temp = outestsum(1)(2);
console.log(temp(3));