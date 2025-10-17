const urls = ["api/user", "api/posts", "api/comments"];

function fetchData(url) {
    return new Promise((resolve, reject) => {
        if (url === "api/posts") {
            setTimeout(() => reject("Failed to fetch posts"), 300);
        } else {
            setTimeout(() => resolve(`Data from ${url}`), 200);
        }
    })
        .then(data => data)
        .catch(err => err)
}

Promise.all(fetchData(urls[0]),fetchData(urls[1]),fetchData(urls[2]))
.then(data=>console.log(data))
