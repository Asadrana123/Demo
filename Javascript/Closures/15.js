function runOnce(func,context){
    let ran;
    return function(){
        if(func){
           ran=func.apply(context||this,arguments);
           func=null;
        }
        return ran;
    }
}
const obj={
    name:"Asad"
}
const hello=runOnce(function(arguments){
         console.log(arguments,this.name);
},obj);

hello(1,2,3,4);
hello(1,2);

