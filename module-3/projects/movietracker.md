# Movietracker

## Description

Movietracker is the student's first project using Redux, and also includes
exposure to a Postgresql database, the schema of which is provided for them.
When setting up the project, the students are required to clone down a server
repository, which has instructions for setting up Postgresql. They are then
tasked with creating a react app to sit alongside this repo.

The project itself uses the MovieDB API, and requires the students to make calls
to fetch movies, and related information from the API. They're also tasked with
saving 'favorite' movies to the Postgresql, as well as using the database to
manage user creation/authentication. 

## Learning goals

- Additional experience with asynchronous javascript
- Redux
  - Create *pure* action creators and reducers
  - Create Redux connected container components
  - Use `createStore` to create a Redux store
  - Use `Provider` to give the application the context of the store
  - Test all of the above
- Gain experience using a database to create/read information.
- Gain experience using a server in node
- Use React Router to create different 'pages' in the app

## Required technologies

- React
- Redux
- Router
- Postgresql

## Optional (extension) technologies

- Thunk
- Redux Sagas

## Important links

[Movie DB API](https://www.themoviedb.org/documentation/api)
[Project Repo](https://github.com/turingschool-examples/movie-tracker)

## Common student pitfalls

- Students often struggle with setting up Postgresql. We've tried to mitigate
  this by switching to the Postgresql app, but it's still critical that they
  have any distributions of Postgresql uninstalled from their machines before
  starting.
- Occasionally students try to set up their project in the same repo as the
  server, they shouldn't do this.

## ToDo's

* [ ] write todos
