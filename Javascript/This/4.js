function multiply(a,b){
    return a*b;
}
const result=multiply.bind(null,10);
console.log(result(2));

//This process is called partial application — 
// where you fix one or more arguments and return 
// a new function that expects the remaining ones.

