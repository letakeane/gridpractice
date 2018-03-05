# Game Time

The project spec and rubric can be found [here](http://frontend.turing.io/projects/game-time.html).

## Example Repos of Students Past

These are two high-quality examples of the Game Time project from past students:

* [Snake](https://github.com/katiescruggs/snake)
* [Winterbells](https://github.com/farmermel/game-time)

## Check-in Conversations

### First Check-in

* What game did they choose?
* Discuss planning for workflow
  - How are you planning on working? Driver/navigator? Divide and conquer?
  - Are you using GitHub issues or Waffle? Some other method of organizing your project?
* Discuss app file structure and organizational strategies
* Introduce the concept of MVP (minimum viable product)
  - Encourage partners to look over project spec and identify what is "good enough"
  - Open issues for nice-to-haves in order to be able to prioritize and schedule
* Open ended time for their questions

### Second Check-in (optional)

* Check in around workflow
  - Strategy still working?
  - Both partners feel like equal contributors?
* Check in around MVP/prioritization
* Discuss testing
  - What to test
  - Moving all references to the DOM into the index.js file and out of classes
  - The sad path (making sure that what we DON'T expect to happen isn't happening)
    * Example: if the paddle is to the right of the canvas, it will not be able to move farther right
* Open ended time for their questions

## Evaluations

* Begin with a playthrough of the game (5 minutes)
  - Are there clear instructions?
  - Is it clear how to begin playing?
  - Is it clear how to win?
  - Is the Is the UI logical?
  - Does the game get harder?
  - Are there bugs?
* Look through the code (10 minutes)
  - Class organization
    * Is there inheritance? Is the inheritance executed properly?
    * Are there redundant methods or properties that could be moved into an abstract parent class?
    * Does the logic make sense? (ex: in Frogger, a Car class should not keep track of the player's score)
  - JavaScript style
    * Are there areas where the code could be refactored?
    * Is SRP (single responsibility principle) being observed?
    * Are parameters being leveraged? (ex: passing in the width of the canvas rather than the whole canvas)
  - Testing & Linting
    * Is all functionality being tested?
    * Default class properties
    * Methods (except draw methods)
    * Everything that updates properties (score, lives, collision, etc)
    * The sad path
    * Is the linter finding any errors?
  - Identify up to 3 things for the group to refactor
    * If any categories of the rubric is not passing, you can choose to offer an extension
    * Add GitHub issues of the suggested/required refactors
    * Depending on the scale of the refactor needed, you can set the deadline to the end of the day or the end of the week.
    * Be clear about the value/utility of doing the refactor
* Summarize any refactors needing to be done
* Point out strengths of the code - end on a positive note 
