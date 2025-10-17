function fetchUser() {
  return new Promise((resolve) => setTimeout(() => resolve("User Data"), 300));
}

function fetchPosts() {
  return new Promise((resolve) => setTimeout(() => resolve("Posts Data"), 500));
}

function fetchComments() {
  return new Promise((resolve) => setTimeout(() => resolve("Comments Data"), 200));
}

Promisea.all([fetchUser(),fetchPosts(),fetchComments])
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})