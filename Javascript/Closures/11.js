function find(){
         let a=[];
         for(let i=0;i<1000000;i++){
             a[i]=i*i
         }
        // return a[index];
         return function(index){
                console.log(a[index]);
         }
}
const result=find();
result(6);
result(12);