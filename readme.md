## V4 Booleans

* `todoList` is object for todos
* single todos should be objects collected in `todos` array
* `todoList.addTodo` should add single todo object
* `todoList.deleteTodo` should delete single todo boject
* `todoList.changeTodo` should change the `todoText` property
* `todoList.toggleCompleted` should change the `completed` property

## V5 Loops of logic
* `displayTodos` should show `.todoText`
* `displayTodos` should tell you if .todos is empty
* `displayTodos` should show `.completed`   (x)

## V6 Thinking in code
* `.toggleAll`: if everything is true, make everything false
* `.toggleAll`: otherwise make everything true

## V7 HTML and DOM
* there should be 'Display todos' button and a 'Toggle all' button.
* clicking 'Display todos' should run `todoList.displayTodos`
* clicking 'Toggle all' should run 'todoList.toggleAll`

## V8
* it sould have working controls for `.addTodo`
* it sould have working controls for `.changeTodo`
* it sould have working controls for `.deleteTodo`
* it sould have working controls for `.toggleCompleted`

## V9 Escape from the console
* There should be an li element for every todo
* Each li element should contain `.todoText`
* Each li element should show `completed`

## V10 Click to delete
* There should be a way to create dlete buttons
* There should be a delete button for each todo
* Each li should have an id that has the todo position
* Delete buttons should have access to the todo id
* Clicking delete should update `todoList.todos` and the DOM