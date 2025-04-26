// Callback Hell (also known as the "Pyramid of Doom") happens when you nest multiple callbacks inside
//  each other, making the code:
// hard to read 😵‍💫
// hard to debug 🪲
// hard to maintain 🔧

function registerUser(username, callback) {
    setTimeout(() => {
      console.log(`User ${username} registered`);
      callback(); // proceed to login
    }, 1000);
  }
  
  function loginUser(username, callback) {
    setTimeout(() => {
      console.log(`User ${username} logged in`);
      callback(); // proceed to fetch data
    }, 1000);
  }
  
  function fetchUserData(username, callback) {
    setTimeout(() => {
      const userData = {
        name: username,
        email: `${username}@example.com`,
        age: 25,
      };
      console.log("User data fetched");
      callback(userData); // proceed to display data
    }, 1000);
  }
  
  function displayData(data, callback) {
    setTimeout(() => {
      console.log("Displaying user data:");
      console.log(data);
      callback(); // final callback
    }, 1000);
  }
  
  // 🚨 Callback Hell in action:
  registerUser("raj", function () {
    loginUser("raj", function () {
      fetchUserData("raj", function (data) {
        displayData(data, function () {
          console.log("✅ All steps complete");
        });
      });
    });
  });
  
