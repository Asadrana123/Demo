let obj={
    a:100,
    b:200,
    c:"ny nums"
}
function hello(obj){
   result={};
   for(key in obj){
       if(typeof obj[key]==="number") result[key]=2*obj[key];
       else result[key]=obj[key];
   }
   return result;
}
console.log(hello(obj));