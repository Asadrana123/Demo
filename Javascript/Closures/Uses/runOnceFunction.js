function runOnce(fn) {
    let called = false;
    return function (arg) {
        if (!called) {
            fn(arg);
            called = true
        }
        else {
            console.log("cant run again")
        }
    }
}

function abc(arg) {
    console.log(`run for this ${arg}`)
}
const result = runOnce(abc);
result("asad");
result("rana");

//One-time API calls