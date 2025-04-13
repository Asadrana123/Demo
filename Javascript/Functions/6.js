function Greet(name,age){
    this.name=name;
    this.age=age;
    this.hello=function(){
           console.log(this);
    }
}
const temp=new Greet('Asad','24');
console.log(temp);