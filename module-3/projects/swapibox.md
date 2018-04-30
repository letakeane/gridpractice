# SWAPIbox

## Description

SWAPIBox is the first project requiring the students to use asynchronous code.
They're tasked with using `fetch` to get information from the Star Wars API,
parse it, and ultimately make more fetch calls. They're then required to use
best React practices to display this data on the page. Because of the critical
nature of the curriculum for the the rest of module, we have the students do
this as a solo project. This helps us identify students who may be struggling
before it's too late.

## Learning goals

- Fundamental JavaScript
  - Students should be comfortable using map/filter over forEach
- `fetch`
  - How to use `fetch` to get data from an API
  - Store retrieved data appropriately (in component state)
  - Write minimal functions that follow the single responsibility principle
- Promises
  - Should show a level of comfort with either .then() or async/await
- Testing
  - Mock fetch to avoid making actual API calls
  - Use Promises for control flow of asynchronous testing
  - Use manual mocks to test component methods that may make fetch calls
  - Additional practice testing react components using snapshots for UI, and
    unit tests for any helper functions

## Required technologies

- React
- `fetch`
- Promises

## Optional (extension) technologies

- Router
- localStorage

## Important links

[Project Outline](http://frontend.turing.io/projects/swapi-box.html)
[Star Wars API]()

## Common student pitfalls

- Many students will try to nest fetch calls, rather than making individual
  calls, saving data, and making additional calls on demand. This will lead to
  write code that they will struggle to test.
- Students will not always remember to await fetch calls, which can cause
  unusual behavior in their applications.

## ToDo's

* [ ] write todos
