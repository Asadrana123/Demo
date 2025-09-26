
const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("Promise 1 resolved")
      }, 3000)
})
const p2 = new Promise((resolve, reject) => {
      setTimeout(() => {
            resolve("Promise 2 rejected");
      }, 5000)
});
const p3 = new Promise((resolve, reject) => {
      setTimeout(() => {
            reject("Promise 3 rejected");
      }, 2000)
})
Promise.all([p1, p2, p3])
      .then((result) => {
            console.log(result)
      })
      .catch((result) => {
            console.log(result);
      })