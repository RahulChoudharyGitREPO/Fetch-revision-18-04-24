document.addEventListener('DOMContentLoaded', fetchAndDisplayTodos);

function fetchAndDisplayTodos() {
    const todoList = document.getElementById('todoList');

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
            todos.forEach(todo => {
                const todoItem = document.createElement('li');
                todoItem.textContent = todo.title;
                if (todo.completed) {
                    todoItem.classList.add('completed');
                }
                todoList.appendChild(todoItem);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
}
