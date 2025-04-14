function counter(start = 0) {
    let count = start;
    return function increment() {
      count++;
      console.log(count);
      return increment;
    };
  }
counter()()()();
counter()()

/*const myCounter = counter();
myCounter(); // 
myCounter(); // 
myCounter(); // 
myCounter(); // */