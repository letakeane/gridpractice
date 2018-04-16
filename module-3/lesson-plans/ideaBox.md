# Ideabox

## Description

This is traditionally the first lesson of the module, and is intended as a
refresher for the students. Generally, we spend some time going over the
critical terms/concepts surrounding React, before whiteboarding what our mini
ideabox application will look like, and ultimately building it in a live code
environment. For the livecode session, we bootstrap the application using
create-react-app.

## Learning goals

- Refresher on React
- Why we use statefull components
- Why we use stateless components
- How we pass data down
  - What we mean by 'data'
- How we pass actions up
  - What we mean by 'actions'
- How to use create-react-app

## Process (Questions should be posed to the class)

1) What is our application going to look like? What are the critical components
    - App
    - Form
    - CardContainer
    - Card(s)
2) Are these components going to be stateful or stateless? Why
    - Turn and talk
3) We say that in React "Data down, actions up", what do we mean by this?
4) Bootstrap an app with create-react-app
5) Give a quick tour of what this boilerplate gives you
6) We have an App already, what state will this have?
    - Ideas
7) Build out the form component
    - We call this a controlled form component
    - What will the state of our form be?
      - title
      - description
    - How will we handle changes in the form inputs?
      - `onChange`
    - How will we handle the form submission?
      - `onSubmit`
8) Lets talk about binding
    - Take 5 minutes, and read whatever docs you can find
      - What does it mean for a function to be 'bound'?
      - How do we bind a function to the class in JavaScript?
9) Ok, how can we bind our `onChange` and `onSubmit` handlers
    - In the constructor
    - Using ES6 arrow syntax
10) Make just one function to handle the onChange of both inputs (handleChange)
    - Turn and talk: How could we make one function that handles both inputs?
    - Make use of the name attribute on the input
    - In the handler function, set state using the computed property name syntax
11) Make our handleSubmit function
    - What does our handle submit function need to do?
    - If our App component holds the ideas where will the function that updates
      the state live?
    - Remember: Data down, Actions up
12) Make our addIdea function in App
    - Why do we use `setState` vs `this.state =`?
13) On your own (or livecode, instructors choice) how would we remove an idea?

## Useful links

[create-react-app](https://github.com/facebook/create-react-app)
[computed property
name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names)

## Context

React is a popular, composable, non-opinionated front-end JavaScript framework.
It was created by, and is maintained by, a core team at Facebook, and also
leverages the open source community.

## ToDos

* [ ] make todo list
