function debounce(fn,delay){
     let timeoutId;
     return function(query){
            clearTimeout(timeoutId);
            timeoutId=setTimeout(()=>fn(query),delay)
     }
}

function fetchresult(query){
    console.log(`result for ${query} are ...`)
}
const debounceresult=debounce(fetchresult,500);

debounceresult("h")
debounceresult("he")
debounceresult("hel")
debounceresult("hello")
//Debouncing is a programming technique used to ensure that a 
//function is only executed once after a specified delay, after a series of rapid triggers.
