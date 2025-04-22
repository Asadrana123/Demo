let car1={
    color:"red",
    company:"ferrari"
}

function purchasecar(currency,price){
    console.log(`I have purchased ${this.company} company car in ${currency}${price}`);
}

Function.prototype.mybind=function(context={},...arg){
      if(typeof  this!=="function" ){
        throw new Error("function not callable");
      }
      context.fn=this;
      return function(){
              context.fn(...arg,...arguments);
      }
} 
const result=purchasecar.mybind(car1,"$",1000);
result();

const result1=purchasecar.mybind(car1,"$");
result1(1000);