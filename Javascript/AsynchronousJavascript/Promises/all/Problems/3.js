
//Task: Use Promise.all to run all promises in parallel and log the array of squared values 
//in the same order as nums.
const nums = [100, 300, 200];

function squareAfterDelay(n) {
    return new Promise(resolve => setTimeout(() => resolve(n * n), n));
}

