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
myCounter(); // 1
myCounter(); // 2
myCounter(); // 3
myCounter(); // 4*/