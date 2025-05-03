const todoInput = document.getElementById('taskInput');
const addTodoBtn = document.getElementById('addBtn');
const todoList = document.getElementById('taskList');
addTodoBtn.addEventListener('click', function () {
    const task = todoInput.value.trim();
    if (task.length === 0) {
        alert("Enter something in input");
        return;
    }
    const {taskContainer,taskContent} = createTask(task);
    const updateInput = document.createElement('input');
    updateInput.classList.add('hidden');
    updateInput.value = taskContent.textContent;
    const taskDoneBtn = createButton('Done', () => {
        taskContent.classList.toggle('line-through');
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
function createTask(task){
    const taskContainer = document.createElement('li');
    taskContainer.classList.add('list-style')
    const taskContent = document.createElement('span');
    taskContent.textContent = task;
    taskContainer.appendChild(taskContent)
    return {taskContainer,taskContent};
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