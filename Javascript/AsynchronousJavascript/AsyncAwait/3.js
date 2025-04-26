//If one the promises fail then it will skip all the below await and directly will jump to the catch block 
//to show error of rejected promise

const p1=Promise.resolve(1);
const p2=Promise.resolve(1)
const p3=Promise.reject(2);

async function temp(){
    try{
        const r1=await p1;
        const r2=await p2;
        const r3=await p3;
    }catch(error){
            console.log(error);
    }
}
temp();