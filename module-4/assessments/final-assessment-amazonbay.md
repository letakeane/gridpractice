# Module 4 Final Assessment - AmazonBay

Your job is to build an e-commerce site with an inventory, shopping cart, and an order history. Expect only a single user for this site (do not worry about authentication for multiple users).

## Base Expectations

AmazonBay is a _single-page app_. There should be only one client-side URL (`/`). You should use Node/Express for the backend, and you can use any library for the client side (jQuery, React, etc.).

### Inventory and Main Page

The main page should display the inventory of the AmazonBay. It should be a card UI with each store item as a card. Each card should have:

- Title of the item
- Item description
- Picture of the item
- Item price
- A button to add the item to the cart

The inventory should be stored in the backend database using knex/PostgreSQL. The model for inventory items should be:

- Title
- Description
- Image (you can store a link to an image if you would like)
- Price
  - Price should be stored in the database using cents as an `integer` type (100), or in dollars using a `decimal` type (1.00)
  - When displaying the price in the app, it should be shown as `$1.00`

Assume there is an unlimited amount of things! You don't have to keep track of the quantity of each item in the inventory.

### Shopping Cart

On the right side of the app, there should be a sidebar labeled **Cart**. When you click a button on this sidebar, the Cart pane should _slide to the left_ and show the items in the cart.

The cart should show:

- Each item in the cart
- The price of each item
- The total price of all items in the cart
- A button to purchase all of the items in the cart
  - When you click the button, the order should be processed immediately and a new order should appear in the Order History

Assume you can only purchase one of each thing at a time. The items in the shopping cart should persist on page refresh using `localStorage`.

### Order History

On the left side of the app, there should be a sidebar labeled **Order History**. When you click a button on this sidebar, the Order History pane should _slide to the right_ and show the order history.

After someone purchases the items in their cart, the order should appear in the Order History. The order history should show:

- The date each order was made
- The total price for each order

The order history should persist on page refresh using your backend database. This database should be a knex/PostgreSQL database.

The data model for an order should be:

- Total price
- Date of order

### Production

**Your app should be pushed to production on Heroku.** You do not need to incorporate CircleCI for this assessment.

## Wireframes

Here are some basic wireframes for AmazonBay to get you going on your layout. Keep the intent of the wireframes, but the wireframes should not be used literally for styling.

[Main Application Page](http://imgur.com/IKkmoMr)

[Cart Slider Pane](http://imgur.com/DS8uMRw)

[Order History Slider Pane](http://imgur.com/TwDnvcN)

## Rubric

In order to pass the assessment, students must achieve a 3 or above on all rubric points.

### Specification Adherence

* 4: The application consists of one page with all of the major and minor functionality being provided. No approach was taken that is counter to the spirit of the project and its learning goals. There are no features missing from above that make the application feel incomplete or hard to use. Application is in production and at least one extension is completed.
* 3: The application is in a usable state, but is missing 1 feature outlined in the specification above. Application is in production.
* 2: The application is missing 2 or more features outlined in the specification above. Application is in production but not working.
* 1: The application is unusable and not in production.

Completing one or more extensions will improve this category's score.

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

* 4: Developer makes many small, atomic commits that clearly document the evolution of the application and do not contain irrelevant changesets that aren't reflected by the commit message. Commit messages are concise and consistent in syntax and tense. Developer effectively uses git branches and pull requests when applicable to incorporate changes into the application, and are not pushing directly to master. There are no instances where the developer has committed source code that should be .gitignored. There are no instances of "dead" or commented-out code and debugger statements like console.log.
* 3: Developer makes many small, atomic commits that document the evolution of the application but sometimes contain irrelevant changesets and inconsistent commit messages. Developer uses git branches and pull requests when applicable to incorporate changes into the application, and are not pushing fresh changes directly to master. Pull requests may contain little or no code review. There may be slight instances where the developer has committed source code that should be .gitignored. There may be some instances of "dead" or commented-out code and debugger statements like console.log that need to be cleaned up.
* 2: Developer makes large, inconsistent commits that contain irrelevant changesets and make it difficult to follow the evolution of the application. Developer rarely uses git branches and frequently incorporate changes directly into master with little or no review process. There are instances of committed source code that should be .gitignored and instances of dead code and/or debugger statements.
* 1: Developer makes very few commits that each cover too much responsibility and aren't indicative of how the application evolved. Branches and pull requests were not used and changesets were applied directly to master. There are many instances of committed source code that should be .gitignored and many instances of dead code and/or debugger statements.

