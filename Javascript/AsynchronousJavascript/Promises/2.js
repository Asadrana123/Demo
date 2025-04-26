function registerUser(name) {
    return new Promise((resolve, reject) => {
        console.log("Registering User")
        setTimeout(() => {
            resolve(name)
        }, 1000);
    })
}

function loginUser(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${username} Logged in`)
        }, 1000);
    })
}

function fetchUserData(name) {
    console.log("Fetching User Data");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userData = {
                name,
                age: 15
            }
            resolve(userData);
        }, 1000);
    })
}

function displayData(data) {
     console.log(data);
}

registerUser('Asad')
.then((result)=>{
      return loginUser(result)
})
.then((result)=>{
     console.log(result);
     return fetchUserData('Asad')
})
.then((result)=>{
     displayData(result)
})