const userIds = [101, 102, 103, 104];

function fetchUserInfo(id) {
  return fetch(`https://api.example.com/users/${id}`)
    .then(res => res.json());
}


Promise.all(userIds.map((id)=>{
        return fetchUserInfo(id)
        .then((data)=>data)
        .catch((err)=>null)
}))
.then((data)=>console.log(data));