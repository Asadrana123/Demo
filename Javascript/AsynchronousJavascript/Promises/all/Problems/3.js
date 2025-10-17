
//Task: Use Promise.all to run all promises in parallel and log the array of squared values 
//in the same order as nums.
const nums = [100, 300, 200];

function squareAfterDelay(n) {
    return new Promise(resolve => setTimeout(() => resolve(n * n), n));
}

Promise.all([squareAfterDelay(nums[0]),squareAfterDelay(nums[1]),squareAfterDelay(nums[2])])
.then((data)=>console.log(data));