# Module Project: The Reducer Pattern - Reducer Todo

During the module, you studied what immutability is, what reducers, actions and dispatch are, and how to use the reducer hook.

## Minimum Viable Product

1. Set an initial state value through a reducer and render a list of todos from that state
2. Add a form that dispatches an "ADD_TODO" action to be able to add a todo item to your list
3. Build a function that let's you mark todo items as completed when you click on them
4. Build a function that let's you clear completed todos when you click on a "Clear Completed" button

### STEP 1 - Build a simple reducer and initial state

- Make reducers folder
- Add a reducer file
- build out a simple reducer with just a default return
- build your initial state object like below

```js
{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589,
  dueDate: 3892987589, // stretch
  tags: [] // stretch
}
```
- Export both the reducer and the initial state object

### STEP 2 - Set up state in your component

- Set up App
- Please use more than 1 component
- Use the `reducer` hook to set up state in your component
- Render your list of todos from your reducer in your app

### STEP 3 - Adding todos

- Build a form to add todos to your list
- Build a function that will dispatch an action to add a new todo
- Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

### STEP 4 - Toggle the completed field

- Build a function to toggle todo
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!)
- Write the `case` in your reducer for toggling the completed property

### STEP 5 - Clearing completed todos

- Build a function that will dispatch an action to filter out any completed todos
- Invoke this new function when you click on a "Clear completed" button
- Write the `case` in your reducer for filtering completed todos

## Stretch Problems

- Add the moment library to show in "human speak" when a todo was completed
- Add a property on the todos for when a todo should be completed by. Then display that a todo is "overdue" if it has not been completed by its due date
- Add "tags" to your todos, and display them with your todo list
- Have fun with the styling. Make this something you'd be proud to show off!