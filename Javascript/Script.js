const todoInput = document.getElementById('taskInput');
const addTodoBtn = document.getElementById('addBtn');
const todoList = document.getElementById('taskList');
addTodoBtn.addEventListener('click', function () {
    const task = todoInput.value.trim();
    if (task.length === 0) {
        alert("Enter something in input");
        return;
    }
    const taskContainer = document.createElement('li');
    taskContainer.classList.add('list-style')
    const taskContent=document.createElement('span');
    taskContent.textContent=task;
    const taskDoneBtn = document.createElement('button');
    taskDoneBtn.textContent = "task done"
    taskDoneBtn.addEventListener('click', function () {
        taskContent.classList.toggle('line-through')
    })
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = "delete the task"
    taskDeleteBtn.addEventListener('click', function () {
        taskContainer.remove();
    })
    const editBtn=document.createElement('button');
    editBtn.textContent="Edit the Button"
    taskContainer.append(taskContent, taskDoneBtn, editBtn,taskDeleteBtn);
    todoList.append(taskContainer);
    todoInput.value = "";
})