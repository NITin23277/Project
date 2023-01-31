    // Add your JavaScript code here
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-items');
    const newTodoInput = document.getElementById('new-todo');

    addTodoButton.addEventListener('click', () => {
      // Create a new list item with the text from the input field
      const newTodo = document.createElement('li');
      newTodo.innerText = newTodoInput.value;
      todoList.appendChild(newTodo);

      // Clear the input field
      newTodoInput.value = '';
    });

    todoList.addEventListener('click', event => {
      const clickedItem = event.target;
      if (clickedItem.tagName === 'LI') {
        clickedItem.classList.toggle('done');
      }
    });