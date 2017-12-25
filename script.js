let todoList = {
    todos: [],

    addTodo(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    changeTodo(position, newText) {
        this.todos[position].todoText = newText;
    },

    deleteTodo(position) {
        this.todos.splice(position, 1);
    },

    toggleCompleted(position) {
        this.todos[position].completed = !this.todos[position].completed;
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
    }
};

let handlers = {
    addTodo() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
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
        view.displayTodos();
    },
    deleteTodo() {
        let deleteTodoPositionInput = document.getElementById(
            'deleteTodoPositionInput'
        );
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput = '';
        view.displayTodos();
    },
    toggleCompleted() {
        let toggleCompletedPositionInput = document.getElementById(
            'toggleCompletedPositionInput'
        );
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        view.displayTodos();
    },
    toggleAll() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

let view = {
    displayTodos() {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';

        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement('li');
            let todo = todoList.todos[i];
            let todoTextWithCompletion = '';
            //srart

            todoList.todos[i].completed
                ? (todoTextWithCompletion = '(x) ' + todo.todoText)
                : (todoTextWithCompletion = '( ) ' + todo.todoText);

            // finish
            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
};
