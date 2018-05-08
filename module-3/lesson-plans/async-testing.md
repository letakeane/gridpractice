# Async Testing

## Description

This lesson builds upon the introduction to Asynchronous JavaScript, layering on
testing concepts for fetching API's. We also go over how to test async code if
you're using the newer async/await syntax. Additionally, the lesson goes over
refactoring the actual fetch code into a helper file, why this is desirable, and
how to test it isolation.

## Learning goals

- Knowing how to test asynchronous code
- Knowing how to mock side effect (fetch) behavior
- Knowing how to refactor fetch calls into an API file
- Being able to explain the difference/similarities between Promise.then() and
  async/await

## Process

- Intro the code we're going be testing
- Stub out the four initial tests
  - Can be a good spot for discussion on test names as descriptions of behavior
- Set up necessary mocks for fetch call
- Discussion on before/after blocks
  - Good opportunity for turn and talk or small groups
- Write tests
  - Consider "I do, we do, you do": Show them the first, guide the class on the
    second, and have the group try it on their own for the third
- Leaning on the tests, refactor the code to use async/await
- Refactor the tests to also use async/await
  - Another good "I do, we do, you do" opportunity
- If you have time, the lesson goes through refactoring fetch out of the
  component, testing the new fetch function, and using manual mocks to test 
  the behavior in the component
  - If you don't have time for this, it can be assigned for homework


## Useful links

[Lesson Plan](http://frontend.turing.io/lessons/module-3/testing-async.html)  
[Grocery Application](https://github.com/turingschool-examples/grocery-list/tree/async-begin)

## Context

This is generally one of the hardest concepts for the students to wrap their
heads around. They often want to test whatever the API is returning. They key
takeaway of this lesson is that they shouldn't be tesing code they didn't write.
Mocking fetch allows us only test the behavior of our application.

## Todos

* [ ] Move mocking in lesson into beforeEach
* [ ] Add important vocab
