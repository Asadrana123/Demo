function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // Line A

const counter2 = createCounter();
console.log(counter2.getCount()); // Line B
