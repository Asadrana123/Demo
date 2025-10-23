
// Your task:
// Run all jobs in parallel using Promise.allSettled().
// After all settle, print:
// ✅ Number of successful jobs
// ❌ Number of failed jobs
// ⏱️ Total time taken (in ms)
function job(id) {
  return new Promise((resolve, reject) => {
    const time = Math.floor(Math.random() * 900) + 100;
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve(`Job ${id} success`)
        : reject(`Job ${id} failed`);
    }, time);
  });
}

const start = Date.now();

Promise.allSettled([
  job(1),
  job(2),
  job(3),
  job(4),
  job(5)
])
// 👇 your code here
