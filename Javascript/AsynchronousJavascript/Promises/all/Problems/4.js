// ["Task 1 done", null, "Task 3 done"]
// null for any task that fails.
const tasks = [
    () => Promise.resolve("Task 1 done"),
    () => Promise.reject("Task 2 failed"),
    () => Promise.resolve("Task 3 done"),
];

Promise.all(tasks.map((task) => {
           return task()
           .then(data=>data)
           .catch((err)=>null)
})).then(data=>console.log(data));

