var length=4;

function callback(){
    console.log(this.length);
}

const obj={
    name:"Asad",
    length:5,
    method(callback){
       callback();
    }
}
obj.method(callback)