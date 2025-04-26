//A callback is a function passed as an argument to another function, which is then executed after some
//operation has been completed.
//This is very common in asynchronous programming in JavaScript
//(like after fetching data, reading a file, etc.).

function orderProduct(product, callback) {
      console.log(`Ordering: ${product}`);
      setTimeout(() => {
        console.log(`${product} delivered`);
        callback(); // Notify once delivered
      }, 3000);
    }
    
    function notifyUser() {
      console.log("Hey! Your product has arrived 🎉");
    }
    
    orderProduct("Laptop", notifyUser);
    