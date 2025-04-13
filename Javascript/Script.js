function outer() {
  let name = "Riya";

  function inner() {
    console.log(name);
  }

  function changeName() {
    name = "Priya";
  }

  return { inner, changeName };
}

const { inner, changeName } = outer();
inner();
changeName();
inner();


function createCounter() {
  let count = 0;

  function increment() {
    count++;
  }
  function decrement() {
    return count--;
  }
  function getCount(){
     return count
  } 
  return {increment,decrement,getCount}
}

const {increment,decrement,getCount}= createCounter();
increment();
console.log(count);
const {increment1,decrement1,getCount1}= createCounter();
console.log(count);
