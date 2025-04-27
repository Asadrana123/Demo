console.log('Start');
setTimeout(function() {
    console.log('Timeout 1');
    Promise.resolve().then(function() {
        console.log('Promise 1');
    });
}, 0);
setTimeout(function() {
    console.log('Timeout 2');
    Promise.resolve().then(function() {
        console.log('Promise 2');
    });
}, 0);
Promise.resolve().then(function() {
    console.log('Promise 3');
});
console.log('End');

