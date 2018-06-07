let i = 1;
function addTodo() {
    let todoList = document.getElementById('todos-list');
    let li = document.createElement('li');
    todoList.appendChild(li);
    li.id=`${i}`;
    li.innerHTML = `Task number ${i}`;
    let lastTask = li.innerHTML;
    i++;
}

function removeTodo() {
    if(i>=2) {
        let j = i-1;
        let li = document.getElementById(`${j}`);
        li.outerHTML='';
        i--;
    }
}

function clearTodos() {
    let allTodosList = document.getElementsByTagName('li');
    let allTodos = Array.from(allTodosList);
    allTodos.forEach(el => el.outerHTML='');
    i = 1;
}