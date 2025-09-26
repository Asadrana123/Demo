const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Result from p1");
    }, 100);
});

const p2 = "Immediate value";
const p3 = Promise.resolve("Resolved from p3");

Promise.race([p1, p2, p3])
    .then((value) => {
        console.log("Race resolved with:", value);
    })
    .catch((err) => {
        console.log("Race rejected with:", err);
    });


