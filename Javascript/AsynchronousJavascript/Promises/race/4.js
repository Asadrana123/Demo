//if all promises take same time then first index promise will be resolved
const p1 = new Promise((resolve, reject) => {
        resolve("resolved first");
  });
  
  const p2 = new Promise((resolve,reject) => {
        resolve("resolve second");
  });
  
  const p3 = new Promise((resolve) => {
         resolve("third promise resolve");
  });
  
  Promise.race([p3, p2, p1])
    .then((value) => {
      console.log("Race resolved with:", value);
    })
    .catch((err) => {
      console.log("Race rejected with:", err);
    });
  
  console.log("End of script");
  