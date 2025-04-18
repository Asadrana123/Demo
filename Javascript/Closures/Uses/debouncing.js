function debounce(fn,delay){
     let timeoutId;
     console.log(fn);
     return function(query){
            console.log(fn);
            clearTimeout(timeoutId);
            timeoutId=setTimeout(()=>fn(query),delay)
     }
}

function fetchresult(query){
    console.log(`result for ${query} are ...`)
}
const debounceresult=debounce(fetchresult,500);

debounceresult("h",500)
debounceresult("he",500)
debounceresult("hel",500)
debounceresult("hello",500)

