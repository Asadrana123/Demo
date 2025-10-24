function job(id) {
    return new Promise((resolve, reject) => {
        const time = Math.floor(Math.random() * 900) + 100;
        setTimeout(() => {
            Math.random() > 0.5
                ? resolve(`Job ${id} success`)
                : reject({ value: `Job ${id} failed`, id });
        }, time);
    });
}

const start = Date.now();
let resultObj;
Promise.allSettled([
    job(1),
    job(2),
    job(3),
    job(4),
    job(5)
]).then((results) => {
        let failedId=[];
        results.forEach((result)=>{
               if(result.status==='rejected'){
                    failedId.push(result.reason.id);
               }
        })
    let noOfRetries=failedId.length;
     Promise.allSettled(failedId.map((id)=>job(id)))
     .then((results)=>{
            failedId=[];
            results.forEach((result)=>{
               if(result.status==='rejected'){
                    failedId.push(result.reason.id);
               }
        })
        resultObj={
                success:5-failedId.length,
                failures:failedId.length,
                retry:noOfRetries,
                time:Date.now()-start
            }
        console.log(resultObj)
    });
})


//AA