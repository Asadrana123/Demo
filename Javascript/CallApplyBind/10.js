function f(){
    console.log(this.name);
}

f=f.bind({name:"Asad"}).bind({name:"rana"});
f();