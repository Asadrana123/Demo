const radius=[1,2,3,4];
const calculateArea=(radius)=>{
    return Math.PI*radius*radius;
}
const mainFunction=(logic,radius)=>{
    const output=[];
    for(let i=0;i<radius.length;i++){
         output.push(logic(radius[i]));
    }
    return output;
}
const ans=mainFunction(calculateArea,radius)
console.log(ans);