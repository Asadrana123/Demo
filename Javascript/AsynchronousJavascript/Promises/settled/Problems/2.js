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

Promise.allSettled([
    job(1),
    job(2),
    job(3),
    job(4),
    job(5)
]).then((results) => {
   results.reduce(async (acc, result) => {
        if (result.status === 'fulfilled') acc.success++;
        else {
            acc.retry++;
            try{
            const retriedResult = await job(result.value.id);
            if (retriedResult.status === 'fulfilled') acc.success++;
            }
            catch(err){
             acc.failure++   
            }
        }
        return acc;
    }, { success: 0, failure: 0, retry: 0, time: Date.now() - start }).then((result)=>console.log(result))
})

