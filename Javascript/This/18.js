const calc={
    value:0,
    add(temp){
        this.value+=temp;
        return this;
    },
    sub(temp){
        this.value-=temp;
        return this;
    }
}
const result=calc.add(100).sub(10);
console.log(result.value);
