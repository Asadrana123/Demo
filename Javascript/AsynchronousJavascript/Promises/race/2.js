const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Result from p1');
    }, 0);
});

const p2 = new Promise((resolve) => {
    resolve('Result from p2');
}).then((value) => {
    return value;
});

const p3 = new Promise((resolve) => {
    resolve('Result from p3');
});

Promise.race([p1, p2, p3])
    .then((value) => {
        console.log('Race resolved with:', value);
    })
    .catch((err) => {
        console.log('Race rejected with:', err);
    });

console.log('End of script');
