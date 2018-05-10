# Promises Practice

## Description

This lesson is generally done in small groups, but can also be done as a full
class exercise. This follows directly after a lesson on asynchronous javascript
and Promises, and gives them some practice with both.

## Learning Goals

- Use `fetch` to get data from a external service
- Use .then() to resolve promises
- Understand what is returned by `fetch` and `response.json()`
- Be able to refactor .then() syntax into the ES7 async/await syntax

## Process

- Show the students what we're going to be building
- Show the students the API we'll be using (it's a minimal server that's linked
  in the lesson)
- Have the students talk through making the first fetch call
  - What is returned? How do we resolve it?
- The data from the first fetch will return an array of data, with more urls
  that need to be fetched
  - We should strongly discourage making a nested fetch call here, they should
    designate another function
- The second function should build an array of fetch request promises, and then
  return a Promise.all()
- The final resolved Promise.all() should set the state with the fully formed
  staff array

## Useful links

[Lesson](http://frontend.turing.io/lessons/module-3/promises-practice.html)

## Context

Fetching data from external services is one of the most common tasks in front
end engineering. Linking this to their current understanding of testing, it's
worth pointing out that nested fetches (which they will all try), are very hard
to test.

## ToDos
