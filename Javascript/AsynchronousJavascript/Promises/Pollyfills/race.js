const makePromise = (time, status, name) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (status) res(`success ${name}`);
            else rej(`faiure ${name}`);
        }, time)
    })
}

const p1 = makePromise(0, true, 1);
const p2 = makePromise(0, true, 2);
const p3 = makePromise(0, true, 3);


Promise.customAny = (promiseArray) => {
    return new Promise((resolve, reject) => {
        let noOfPromises = promiseArray.length;
        if (noOfPromises === 0) {
            reject(new AggregateError([], 'All promises were rejected'));
        }
        let rejectionCounter = 0;
        let settled = false;
        let errors = [];
        promiseArray.forEach(p =>
            Promise.resolve(p)
                .then(result => {
                    if (!settled) { settled = true; resolve(result); }
                })
                .catch(err => {
                    rejectionCounter++;
                    errors.push(err);
                    if (rejectionCounter === noOfPromises) reject(new AggregateError(errors, 'All promises were rejected'));
                })
        );
    })
}
Promise.customAny([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((err) => console.log(err))
