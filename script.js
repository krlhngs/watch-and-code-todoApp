let todoList = {
    todos: [],
    displayTodos() {
        if (this.todos.length === 0) {
            console.log('No todos!');
        } else {
            console.log('My todos: ');
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed
                    ? console.log('(x) ', this.todos[i].todoText)
                    : console.log('( ) ', this.todos[i].todoText);
            }
        }
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
        this.displayTodos();
    },

    toggleAll() {

        let completedTodos=0;
        let totalTodos = this.todos.length;

        for (let i = 0; i<this.todos.length; i++){
            if (this.todos[i].completed) completedTodos++;
        }

        if (completedTodos === totalTodos) {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (let i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    }
};
