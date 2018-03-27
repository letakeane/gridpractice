# Complete Me

The project spec and rubric can be found [here](http://frontend.turing.io/projects/complete-me.html).

## Project takeaways

The goal of Complete Me is to furnish students with an understanding of algorithmic thinking, ES6 syntax, fundamental JavaScript, and robust testing.

They should develop a familiarity with the following technical skills:
* ES6 syntax (destructuring, spread operator, `let` & `const`)
* recursion
* refactoring
* testing (happy and sad paths)

and the following non-technical skills:
* breaking down a complex problem into manageable pieces
* articulating their problem-solving process
* trying out new problem-solving strategies
* synthesizing concepts into one's own understanding
* turning concepts into code
* articulating code

## Example Repos of Students Past

These are two high-quality examples of the Complete Me project from past students:

* [Francy Lang](https://github.com/francylang/complete-me)
* [Thomas Laird](https://github.com/t-laird/CompleteMe)

## Check-in Conversations (optional)

The check-ins for Complete Me are informal and function more like pairing sessions to help get students unstuck.
* Open ended conversation for student questions
* Encourage whiteboarding/visualizing the sorting algorithms
* Encourage good articulation of code with proper vocabulary
* Demonstrate process of turning high level concepts into code
* Emphasize algorithmic thinking over memorization

## Evaluations

1. Have student whiteboard a trie (**5 minutes**)
    - **Insert "cake", "cherry", "cakes", "cola", "pie"**
    - Students should talk through the logic step by step
    - For example, they should say, "To insert 'cake', we'll split cat into an array of characters. The first character is 'c', so we will check the root node to see if it already has a child node of 'c'. It doesn't, so we'll create a new node and add it to our trie."
    - **Suggest "c"**
    - Students tend to gloss over the details, but the description of what is happening should be as verbose and detailed as the description of `insert`
 2. Have student talk through implementing the select method using their whiteboarded trie (**5 minutes**)
    - Re-emphasize the point of this eval: 
      * Articulating process
      * Turning large problems into manageable pieces
      * Developing a heuristic approach to problem solving
    - Kick off the process by encouraging student to use the trie they just whiteboarded to start understanding how `suggest` would work (what would happen if we ran `suggest('c')`?
    - Give guidance where needed
  4. Have the student attempt to implement `select`.
     - Encourage pseudo coding
     - Answer questions but mostly observe process quietly
     - Explain how the `select` method works
       * Autocomplete systems should be intelligent and prioritize words that have been selected before.
      
       ```
       import Trie from "./lib/Trie"

       const text = "/usr/share/dict/words"
       const dictionary = fs.readFileSync(text).toString().trim().split('\n')
       const completion = new Trie()

       completion.populate(dictionary)

       completion.suggest("piz")
        => ["pize", "pizza", "pizzeria", "pizzicato", "pizzle", ...]

       completion.select("pizzeria")

       completion.suggest("piz")
        => ["pizzeria", "pize", "pizza", "pizzicato", "pizzle", ...]
    
       ```

## Project submissions
Repos with completed functionality (all six phases completed are to be submitted by no later than 9am the following Monday.

## Code review
1. Look over test suite
    - Tests should cover all functionality (inserting words, populating a dictionary, suggesting words, selecting words & changing the order of suggestions)
    - Test should cover sad paths (what happens if we search for a word that does not exist in the trie? what happens if we search for a complete word? what happens if we search for a capitalized word? what happens if we try to insert the same word twice?)
    - Is the test suite robust enough to be used as TDD? If there are obvious gaps in functionality being tested, give half-day extension for student to complete the tests
2. Look over trie code
    - Look for redundant code, deeply nested if/else statements
    - Look at logic: what information does the node hold onto? what logic does the trie hold onto?
    - Look for good use of ES6 syntax
