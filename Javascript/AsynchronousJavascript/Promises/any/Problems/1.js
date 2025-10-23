function unreliableAPI(name, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve(`${name} success`) : reject(`${name} failed`);
    }, delay);
  });
}



function timeout(ms) {
  return new Promise((_, reject) => setTimeout(() => reject("Timeout"), ms));
}

const apis = [
  unreliableAPI("API 1", 400),
  unreliableAPI("API 2", 700),
  unreliableAPI("API 3", 900)
];

const result1=Promise.any([...apis])
Promise.race([result1,timeout(2000)])
.then((data)=>console.log(data))
.catch((err)=>console.log('All sources failed'))


// 🧠 Your goal:
// - Return the fastest *successful* response.
// - If all fail or timeout hits (2s), log "All sources failed".
