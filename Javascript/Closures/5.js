function setup() {
    const funcs = [];
  
    for (let i = 0; i < 3; i++) {
      funcs.push(function () {
        console.log(i);
      });
    }
  
    return funcs;
  }
  
  const fns = setup();
  fns[0]();
  fns[1]();
  fns[2]();
//let is block scoped, meaning a new i is created in each iteration of the loop.