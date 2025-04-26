// Promise.any() takes an array of promises and returns a single promise that:
// ✅ Resolves as soon as one promise fulfills
// ❌ Rejects only if all promises reject
const p1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("Success 2"), 1000));
const p3 = new Promise(resolve => setTimeout(() => resolve("Success 3"), 1500));

Promise.any([p1, p2, p3])
  .then(result => {
    console.log("✅ First fulfilled:", result); // "Success 2"
  })
  .catch(err => {
    console.log("❌ All failed:", err);
  });
