let car1={
    color:"red",
    company:"ferrari"
}

function purchasecar(currency,price){
    console.log(`I have purchased ${this.company} company car in ${currency}${price}`);
}

Function.prototype.myapply=function(context={},arg=[]){
      if(typeof  this!=="function" ) throw new Error("function not callable");
      if(!Array.isArray(arg))  throw new Error("Provide array in parameters");
      context.fn=this;
      context.fn(...arg);
}
purchasecar.myapply(car1,["$",1000]);
