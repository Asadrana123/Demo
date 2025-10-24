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
]).then((results)=>{
   const result=results.reduce((acc,result)=>{
         if(result.status==='fulfilled') acc.success++;
         else acc.failure++
         return acc;
   },{success:0,failure:0,time:Date.now()-start})
   console.log(result);
})



//https://chatgpt.com/c/68e68d3d-15b8-8323-9fb4-f4defbbc5120
//https://www.perplexity.ai/search/const-obj-val-1-inc-function-v-1CcAiokDS.a6la6KUvM2ig