//Promise.all()
//Waits for all promises to resolve. If any of them rejects, the entire Promise.all is rejected.
// if all promises get resolved then it returns an array of resolved promises otherwise
//  it will returned reject promise
// This does not start the promises — because the promises are already running by the time you pass them 

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