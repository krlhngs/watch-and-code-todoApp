let todoList = {
    todos: [],
    displayTodos() {
        console.log('My Todos: ', this.todos);
    },

    addTodo(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    changeTodo(position, newText) {
        this.todos[position].todoText = newText;
        this.displayTodos();
    },

    deleteTodo(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    toggleCompleted(position) {
        this.todos[position].completed = !this.todos[position].completed;
    }
};
