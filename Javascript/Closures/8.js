function outer(){
    var counter=1;
    return {
        increment : function(){
             counter++;
        },
        decrement:  function(){
            counter--
        },
        getvalue :function (){
            return counter;
        }
    }
}
const temp=outer();
temp.increment();
console.log(temp.getvalue());