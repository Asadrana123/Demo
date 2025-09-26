const p1 = Promise.resolve(10);
const p2 = 20;
const p3 = new Promise((resolve) => setTimeout(() => resolve(30), 100));

Promise.all([p1, p2, p3])
  .then(console.log)
  .catch(console.error);
