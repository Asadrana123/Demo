function outer() {
    var a = 1;
    let b = 2;
    const c = 3;
  
    function inner() {
      var a = 4;
      let b = 5;
      const c = 6;
      console.log(a, b, c);
    }
  
    inner();
    console.log(a, b, c);
  }
  
  outer();
  