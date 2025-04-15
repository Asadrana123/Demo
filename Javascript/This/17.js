var length = 4;

function callback() {
    console.log(this.length);
}

const obj = {
    name: "Asad",
    length: 5,
    method(callback) {
        callback();
    }
}
obj.method(callback)

//Node.js wraps your code in a module, so top-level var is not added to the global object (global).

//wraps in a module means wraps code in a function

//example:-(function (exports, require, module, __filename, __dirname) {
// Your code goes here
//})();