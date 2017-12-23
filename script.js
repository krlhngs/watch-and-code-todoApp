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
        let completedTodos = 0;
        let totalTodos = this.todos.length;

        for (let i = 0; i < this.todos.length; i++) {
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

// let displayTodosButton = document.getElementById('displayTodosButton');
// let toggleAllButton = document.getElementById('toggleAllButton');

// displayTodosButton.addEventListener('click', function() {
//     todoList.displayTodos();
// });

// toggleAllButton.addEventListener('click', function() {
//     todoList.toggleAll();
// });

let handlers = {
    displayTodos() {
        todoList.displayTodos();
    },
    addTodo() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
    },
    changeTodo() {
        let changeTodoPositionInput = document.getElementById(
            'changeTodoPositionInput'
        );
        let changeTodoTextInput = document.getElementById(
            'changeTodoTextInput'
        );
        todoList.changeTodo(
            //!!!  Inaczej bedzie to string
            changeTodoPositionInput.valueAsNumber,
            changeTodoTextInput.value
        );
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
    },
    deleteTodo() {
        let deleteTodoPositionInput = document.getElementById(
            'deleteTodoPositionInput'
        );
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput = '';
    },
    toggleCompleted() {
        let toggleCompletedPositionInput = document.getElementById(
            'toggleCompletedPositionInput'
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    },
    toggleAll() {
        todoList.toggleAll();
    },
};
