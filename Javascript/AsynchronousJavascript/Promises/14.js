function firstFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("First function done");
      }, 1000);
    });
  }
  
  function secondFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second function done");
      }, 1000);
    });
  }
  
  function thirdFunction() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Third function done");
      }, 1000);
    });
  }
  
  function promRecurse(functionPromises){
           if(functionPromises.length===0){
               console.log("all promises are resolved");
               return;
           }
           functionPromises[0].then((result)=>{
               console.log(result);
                promRecurse(functionPromises.slice(1));
           })
  }

  promRecurse([
    firstFunction(),
    secondFunction(),
    thirdFunction()
  ])