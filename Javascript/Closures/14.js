
//The Module Pattern in JavaScript is a design pattern used to encapsulate code — it helps you create 
// private and public members, keeping certain variables/functions hidden from the outside world and
//  exposing only what’s necessary.


const MyModule = (function () {
    // Private variables and functions
    let counter = 0;

    function increment() {
        counter++;
        console.log("Counter is now:", counter);
    }

    function reset() {
        counter = 0;
        console.log("Counter reset.");
    }

    // Public API
    return {
        increment: increment,
        reset: reset
    };
})();
