// Promise.any() takes an array of promises and returns a single promise that:
// ✅ Resolves as soon as one promise fulfills
// ❌ Rejects only if all promises reject
const p1 = new Promise((_, reject) => setTimeout(() => reject("Success 1"), 1))
const p2 = new Promise((_, reject) => setTimeout(() => reject("Success 2"), 1))
const p3 = new Promise((_, reject) => setTimeout(() => reject("Success 3"), 1))
Promise.any([p1])
//if we do not handle rejected promises anywhere then it will throw unhandledpromiserejection error. 
//also it will show aggregation error all promises we are passing into any they all get rejected
  .then(result => {
    console.log("✅ First fulfilled:", result);
  })
  .catch(err => {
    console.log("❌ All failed:", err);
  });
