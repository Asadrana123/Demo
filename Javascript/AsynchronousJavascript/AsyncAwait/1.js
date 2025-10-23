// What is async/await?
// async makes a function return a Promise. 
// await makes JavaScript wait for a Promise to resolve or reject — without blocking the entire thread.
// It’s basically syntactic sugar over .then() and .catch() that looks more like regular 
// synchronous code.

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function fetchData() {
    const result = await getData();
    console.log(result); // "Data received"
}

fetchData();
