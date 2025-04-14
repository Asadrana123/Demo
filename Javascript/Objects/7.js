const user = {
    name: "Riya",
    address: {
        city: "Delhi",
        pin: 110001
    }
};

const {
    name,
    address: { city = "Muzaffarnagar" }
} = user;
console.log(city);
//Muzaffarnagar will be default value  

//If city is present and is null or '' (empty string), the default will not apply
// . Only undefined triggers the default.

