(function () {
    console.log("IIFE")
})()
    (function () {
        var secret = "Hidden from global";
        console.log(secret);
    })();
console.log(typeof secret);
