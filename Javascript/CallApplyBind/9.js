function f(){
    console.log(this);
}

let obj={
    g:f.bind(null)
}

obj.g();