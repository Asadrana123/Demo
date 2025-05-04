const todoInput = document.getElementById('taskInput');
const addTodoBtn = document.getElementById('addBtn');
const todoList = document.getElementById('taskList');
const mySelect = document.getElementById('my-select');
let droppedItem = null;
mySelect.addEventListener('change', function (event) {
    if (event.target.value === 'completed') {
        for (let j = 0; j < todoList.children.length; j++) {
            todoList.children[j].classList.remove('hidden')
            if (!todoList.children[j].querySelector('.task-text').classList.contains('completed')) {
                todoList.children[j].classList.add('hidden')
            }
        }
    }
    else if (event.target.value === 'incomplete') {
        for (let j = 0; j < todoList.children.length; j++) {
            todoList.children[j].classList.remove('hidden')
            if (todoList.children[j].querySelector('.task-text').classList.contains('completed')) {
                todoList.children[j].classList.add('hidden')
            }
        }
    }
    else {
        for (let j = 0; j < todoList.children.length; j++) {
            todoList.children[j].classList.remove('hidden')
        }
    }
}
)

addTodoBtn.addEventListener('click', function () {
    const task = todoInput.value.trim();
    if (task.length === 0) {
        alert("Enter something in input");
        return;
    }
    const { taskContainer, taskContent } = createTask(task);
    const updateInput = document.createElement('input');
    updateInput.classList.add('hidden');
    updateInput.value = taskContent.textContent;
    const taskDoneBtn = createButton('Done', () => {
        taskContent.classList.toggle('line-through');
        taskContent.classList.add('completed');
    });
    const taskDeleteBtn = createButton('Delete', () => {
        taskContainer.remove();
    })
    const saveBtn = createButton('Save', () => {
        toggleElements(editBtn, taskContent, updateInput, saveBtn)
        taskContent.textContent = updateInput.value;
    })
    saveBtn.classList.add('hidden');
    const editBtn = createButton('Edit', () => {
        toggleElements(editBtn, taskContent, updateInput, saveBtn)
    })
    taskContainer.append(taskDoneBtn, updateInput, saveBtn, editBtn, taskDeleteBtn);
    todoList.append(taskContainer);
    todoInput.value = "";
})
function createTask(task) {
    const taskContainer = document.createElement('li');
    taskContainer.classList.add('list-style')
    attachListner(taskContainer);
    const taskContent = document.createElement('span');
    taskContent.textContent = task;
    taskContent.classList.add('task-text');
    taskContainer.appendChild(taskContent)
    return { taskContainer, taskContent };
}
function createButton(text, onClick) {
    const btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    return btn;
}
function toggleElements(...elements) {
    elements.forEach((element) => element.classList.toggle('hidden'))
}
function attachListner(taskContainer) {
    taskContainer.setAttribute('draggable', true);
    taskContainer.addEventListener('dragstart', function (e) {
        droppedItem = e.target;
    })
    // Continuously fires as the dragged item moves over a drop target.
    taskContainer.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    //Fires once, when the user releases the mouse button and drops the item onto a valid target.
    taskContainer.addEventListener('drop', function (event) {
        if (event.target !== droppedItem) {
            todoList.insertBefore(droppedItem, event.currentTarget.nextSibling)
        }
    })
}
// .todo-list-container,.list-style {
//     display: flex;
//     justify-content: center;
//     /* align-items: center; */
//     gap: 10px;
// }
// .list-style{
//     align-items: center;
// }
// .todo-list-container input,
// .todo-list-container button {
//     padding: 10px;
//     border-radius: 5px;
// }
// #taskList button {
//     padding: 10px;
//     border-radius: 5px;
// }
// #taskList li{
//     margin-top: 10px;
// }
// #taskList span{
//     min-width: 100px;
// }
// .line-through {
//     text-decoration: line-through;
// }
// .list-style input{
//     padding: 10px;
//     border-radius: 5px;
// }
// .hidden {
//     display: none;
// }

// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./index.css">
// </head>

// <body>
//     <div class="todo-list-container">
//         <input type="text" id="taskInput" placeholder="New task">
//         <button id="addBtn">Add Task</button>
//         <select id="my-select">
//             <option value="all">All</option>
//             <option value="completed">Completed</option>
//             <option value="incomplete">incomplete</option>
//         </select>
//     </div>
//     <ul id="taskList"></ul>
//     <script src="./Script.js"></script>

// </html>