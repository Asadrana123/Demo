function memoization() {
    let cachedResult = null;
    let intialData = [];
    return function Result(calculation, data) {
        if (!Array.isArray(data)) throw new Error('Second argument should be an Array');
        if (intialData.length === 0) {
            intialData = data;
            cachedResult=calculation(data[0]);
            return cachedResult;
        }
        else {
            for (let i=0;i<intialData.length;i++) {
                if(intialData[i]!==data[i]){
                    intialData=data;
                    cachedResult=calculation(data[0]);
                    return cachedResult;
                }
            }
            return cachedResult;
        }
    }
}

function calculation(data) {
    let j = 0;
    for (let i = 0; i < data; i++) {
        j++;
    }
    return j
}
console.time('My Timer')
const useMemo = memoization();
console.log(useMemo(calculation, [10000000, 1000000]));
console.timeEnd('My Timer')
console.time('My Timer')
console.log(useMemo(calculation, [10000000, 100]));
console.timeEnd('My Timer')