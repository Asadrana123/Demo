const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from p1");
    }, 100);
});

const p2 = "Immediate value";
//A value is not a Promise, but when passed into Promise.race(), 
//it is automatically wrapped using Promise.resolve() so it behaves like one.
// it is equivalent to-
//Promise.race([p1, Promise.resolve(p2), p3])
const p3 = Promise.resolve("Resolved from p3");

Promise.race([p1, p2, p3])
    .then((value) => {
        console.log("Race resolved with:", value);
    })
    .catch((err) => {
        console.log("Race rejected with:", err);
    });


