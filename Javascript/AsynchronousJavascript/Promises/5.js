// Promise.allSettled() returns a single promise that resolves when all the input promises are settled 
// (either fulfilled or rejected).
// It never rejects, unlike Promise.all().
const p1 = Promise.resolve("Success!");
const p2 = Promise.reject("Failed!");
const p3 = new Promise((resolve,reject )=> setTimeout(() => reject("Done after 1s"), 1000));

Promise.allSettled([p1, p2, p3])
  .then(results => {
    console.log(results);
  });
