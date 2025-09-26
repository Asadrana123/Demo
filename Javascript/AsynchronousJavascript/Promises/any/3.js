const p1 = new Promise((_, reject) => setTimeout(() => reject("Error 1"), 100));
const p2 = new Promise((_, reject) => setTimeout(() => reject("Error 2"), 50));
const p3 = Promise.any([
  new Promise((_, reject) => setTimeout(() => reject("Nested Error 1"), 30)),
  new Promise((resolve) => setTimeout(() => resolve("Nested Success 3"), 120)),
  new Promise((resolve) => setTimeout(() => resolve("Nested Success 4"), 60))
]);
const p4 = new Promise((resolve) => setTimeout(() => resolve("Success 5"), 80));

Promise.any([p1, p2, p3, p4])
  .then(console.log)
  .catch(console.error);
