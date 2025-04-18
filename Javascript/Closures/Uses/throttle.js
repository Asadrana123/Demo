function throttle(fn,limit){
    let lastcall=0;
    return function(query){
           const now=Date.now();
           if(now-lastcall>limit){
             fn(query)
             lastcall=now;
           }
    }
}

function abc(query){
    console.log(query)
}
const result=throttle(abc,5000)

setInterval(()=>result("hello"),1000)

//for real use case:-
//window.addEventListener("scroll", throttledScroll);

//Date.now() returns the number of milliseconds elapsed since January 1, 1970 