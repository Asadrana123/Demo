function api1() { return new Promise(res => setTimeout(() => res("API 1"), 400)); }
function api2() { return new Promise(res => setTimeout(() => res("API 2"), 500)); }
function api3() { return new Promise(res => setTimeout(() => res("API 3"), 300)); }
function fallBack(){ return new Promise((res,rej)=>{
          setTimeout(()=>{
              rej('Fallback')
          },350)
})}

Promise.race([fallBack(),api1(),api2(),api3()])
.then((data)=>console.log(data))
.catch((err)=>console.log(err))