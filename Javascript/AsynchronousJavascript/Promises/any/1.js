
const p1 = new Promise((_, reject) => setTimeout(() => reject("Success 1"), 1))
const p2 = new Promise((_, reject) => setTimeout(() => reject("Success 2"), 1))
const p3 = new Promise((_, reject) => setTimeout(() => reject("Success 3"), 1))
Promise.any([p1])
  .then(result => {
    console.log("✅ First fulfilled:", result);
  })
  .catch(err => {
    console.log("❌ All failed:", err);
  });
