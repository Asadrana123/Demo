const obj={
    name:"riya",
    greet: function (){
        const y=()=>{
            console.log(this);
        }
        y()
    }
}
//obj.greet();
const temp=obj.greet;
temp();