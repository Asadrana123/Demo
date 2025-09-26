
const fast = new Promise(resolve => setTimeout(() => resolve("Fast wins!"), 500));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow..."), 2000));

Promise.race([fast, slow])
  .then(result => {
    console.log(result); // "Fast wins!"
  });
