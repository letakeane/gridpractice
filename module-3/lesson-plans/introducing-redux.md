# Introducing Redux

## Description

This lesson introduces the Redux library to the students, taking the students
through Redux at a high level, and ultimately doing a live code of a todo list
application. Generally, the students stuggle more with the underlying patterns
in Redux than they do with the required JavaScript itself.

## Learning Goals

- Be able to explain what Redux solves for us
- Be able to make an *action creator*
- Be able to make a *reducer*
- Be able to make a *container*
- Be able to create a *redux store*
- Be able to *connect* a container to the store

## Process

- Clone the boilerplate
- Discuss project organization
- Here are the components we'll need:
  - AddTodoForm
  - ListOfTodos
  - TodoItem
  - Filters
  - FilterMenu
- How would you build this with just regular React? Discuss...
- Create some actions
  - addTodo(text, id)
  - toggleTodo(id)
  - setFilter(filter)
- What do these actions do? They describe changes to the Redux store
- Create some reducers
  - todosReducer
    - I do, we do
  - filterReducer
    - Have group try own their own (you do)
  - create rootReducer with combineReducers
- How would you describe the responsibility of the reducer?
- Create components
  - Have group try to pseudocode the AddTodoForm component
  - Create AddTodoForm component
- Create container
  - import connect from react-redux
  - import the AddTodoForm component
  - create mapStateToProps function
  - create mapDispatchToProps function
  - use HOF *connect* to make container, passing AddTodoForm to result
- Stop and consider
  - How will we add this to our App?
  - Will we need to pass props?
  - What will we need to import?
- Add AddTodoFormContainer to App
  - Good time to talk about separate container files vs component/container in
    one file (both common patterns)
- Wiring it all up
  - import Provider
  - import createStore
  - import rootReducer
- Research spike, from lesson
- Have students try to finish the app, on their own
  
## Useful links

[ToDo list
boilerplate](https://github.com/turingschool-examples/redux-lesson-boilerplate)  
[Lesson](http://frontend.turing.io/lessons/module-3/starting-up-redux.html)

## Context

## ToDos

* [ ] make sure code examples in lesson are getting syntax highlights
