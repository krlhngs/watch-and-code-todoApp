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
    deleteTodo(position) {
        todoList.deleteTodo(position);
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

            todo.completed
                ? (todoTextWithCompletion = '(x) ' + todo.todoText)
                : (todoTextWithCompletion = '( ) ' + todo.todoText);

            todoLi.id = i;

            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },

    createDeleteButton() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners(){
        let todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', event => {
            let elementClicked = event.target;

            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(+elementClicked.parentNode.id);
            }
        });
    }
};

view.setUpEventListeners();
