
function outest(){
    function outer(){
        function inner(){
            console.log(b);
       }
       //let b=10;
       return inner
   }
   var a=1;
   return outer();
}
let b=1;
const a=outest()();
