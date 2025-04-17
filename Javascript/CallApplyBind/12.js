let car1={
    color:"red",
    company:"ferrari"
}

function purchasecar(currency,price){
    console.log(`I have purchased ${this.company} company car in ${currency}${price}`);
}

Function.prototype.mycall=function(context={},...arg){
      if(typeof  this!=="function" ){
        throw new Error("function not callable");
      }
      context.fn=this;
      context.fn(...arg);
}
purchasecar.mycall(car1,"$",1000);