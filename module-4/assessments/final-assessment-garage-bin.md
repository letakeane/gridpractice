# Garage Bin

**Time Alloted: 10 hours**

"I'll get to trying this out some day, maybe." — Jeff Casimir

"Finally, a place where I can keep track of my fantastical spirit animals!" — Louisa Barrett

"This app is for me. I use it every day. It's critical to my workflow." — Jhun de Andres

## Your Mission

The only way to truly understand any front-end framework is to build a to-do list — an idea box, if you will. But we're not going to build just any to-do list, we're going to build a list that keeps track of all the mysterious items that linger in our garages for all time.

## Rules

You may not have any commits in the repo from before 9:00am (i.e. you can reference a starter kit, but the code in the repo must be your own)

You may not solicit questions on the specific code from cohort-mates, mentors, etc. You may not pair with anyone on this assignment. Instructors will answer questions at their discretion (i.e. feel free to ask us, we probably won’t answer but if you’re really in the weeds on something crazy we will).

Your last commit must be in before 7:00 p.m. Exceptions for job/life events should be documented in the submission. You may add that time on to the 7:00 deadline. i.e. code interview at 2:00pm - took 30 minutes to prep - code interview was an hour long - added 1 hour and 30 mins to 7:00 deadline.

**Your application must be deployed to Heroku.**

### The Technologies

For the backend - use an Express server.

Use a PostgreSQL database with Knex to persist items on refresh of the webpage. If the user closes the tab and reopens it, they should still see all of the garage items that continue to linger.

For the frontend, you can choose between jQuery or React - both are acceptable (you won't get additional points for using either, both are equally valid based on your preference).

### The Model

The database you build should store garage items. The data model of the garage items needs the following:

- A primary key, `id` (Integer)
- The name of the item that lingers (String)
- The reason that the item continues to linger (String)
- The cleanliness of the item (can be one of the three following values): Sparkling, Dusty, Rancid (String)

### The Features

The rubric score for feature completeness is listed under "Specification Adherence." These are the features we are looking for:

- MAJOR: Users should be able to open and close a garage door to see or not see the list of items.
  - MINOR: By default, the garage door is closed and the list is not visible.
  - MINOR: When opened (by button or any click event you choose), the garage door should transition up and after a few seconds, the list of items should be fully visible and the garage door is gone.
- MAJOR: Users should be able to add a new item to the list.
  - MINOR: They should be able to include the name of the item.
  - MINOR: They should be able to include the reason why that item lingers.
  - MINOR: They should be able to select the cleanliness of the item in a dropdown.
- The list of items in the garage should show the following data:
  - MAJOR: The names of the items in the garage.
  - MAJOR: A count of the total number of items in the garage.
  - MAJOR: A count of the number of items per each value of cleanliness (i.e. 5 items are sparkling, 2 are dusty, 3 are rancid).
- MAJOR: The list can sort items by item name alphabetically by ascending and descending order.
- MAJOR: User should be able to see the details of a particular item by clicking its name on the list. The user should see the following:
  - MINOR: The name of the particular garage item.
  - MINOR: The reason it lingers.
  - MINOR: A dropdown or other option to change the cleanliness of the item. When they change the cleanliness of the item, that change should be applied and persist on refresh.

## Rubric

In order to pass the assessment, students must achieve a 3 or above on all rubric points.

### Specification Adherence

* 4: The application consists of one page with all of the major and minor functionality being provided. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Application is on production.
* 3: The application is in a usable state, but is missing 1 major feature or 1-2 minor features outlined in the specification above. Application is on production.
* 2: The application is missing 3 or more minor features or 2+ major feature essential to having a complete application. Application is on production but not working.
* 1 points: The application is unusable and not on production.

### JavaScript Syntax & Style

* 4: Developer uses elegant and idiomatic JavaScript with vast majority of functions 5 lines or shorter. Demonstrates solid understanding of the single responsibility principle. Developer can speak to choices made in the code and knows what every line of code is doing. Uses consistent style and conventions.
* 3: Developer writes solid JavaScript code using common patterns and idioms. Code is organized appropriately within objects and functions. Developer can speak to choices made in the code and knows what every line of code is doing.
* 2: Developer can accomplish basic tasks with JavaScript but implementation is largely copy/pasted or non-idiomatic. Developer is not confident in what every line of the code is doing or cannot speak to the choices made.
* 1: Developer can manipulate JavaScript syntax but implementation is buggy or inconsistent.

### Testing

* 4: Project has a running test suite that tests every server-side endpoint with all happy and sad path cases.
* 3: Project has a running test suite that tests every server-side endpoint with most happy and sad path cases.
* 2: Project has sporadic testing of some server-side endpoints. There are happy path tests, but there are is one or zero sad path cases.
* 1: There is little or no evidence of testing in this application. Most or all of the tests in the test suite are failing.

### CSS Style

*CSS is graded on quality, not quantity. You don't need a lot of CSS to have a pleasant interface*

* 4: Application has exceptionally well-factored CSS with little or no duplication and all styles separated out into logical stylesheets. There are zero instances where an instructor would recommend taking a different approach.
* 3: Application is thoughtfully put together with some duplication and no major bugs. Developer can speak to choices made in the code and knows what every line of CSS is doing.
* 2: Application has some duplication and minor bugs. Developer can speak to most choices made in the code and knows what every line is doing.
* 1: Application has a significant amount of duplication and one or more major bugs. Developer cannot speak to most choices and does not know what every line of CSS is doing. Developer writes code with unnecessary selectors or tags which do not increase clarity.

### User Interface

* 4: The application is pleasant, logical, and easy to use. The interface is aesthetically pleasing to the evaluator. There is good use color and whitespace. There is no point where the instructor cannot figure out how to use the application without guidance from the developer.
* 3: The application has many strong pages/interactions, but a few holes in lesser-used functionality
* 2: The application shows effort in the interface, but the result is not effective
* 1: The application is confusing or difficult to use

### Workflow

* 4: The developer effectively uses Git branches and many small, atomic commits that document the evolution of their application. There are no instances where the developer(s) have committed source code that should be .gitignored. There are no instances of “dead” or commented-out code and debugger statements like console.log.
* 3: The developer makes a series of small, atomic commits that document the evolution of their application. There are no formatting issues in the code base.
* 2: The developer makes large commits covering multiple features that make it difficult for the evaluator to determine the evolution of the application.
* 1: The developer committed the code to version control in only a few commits. The evaluator cannot determine the evolution of the application.