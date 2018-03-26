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
    - Students tend to gloss over the functionality of the suggest method; make sure they articulate it with clear, step-by-step language similar to describing the insert method.
2. Have student run their test suite (**3 minutes**)
    - Tests should cover all functionality (inserting words, populating a dictionary, suggesting words, selecting words & changing the order of suggestions)
    - Test should cover sad paths (what happens if we search for a word that does not exist in the trie? what happens if we search for a complete word? what happens if we search for a capitalized word? what happens if we try to insert the same word twice?)
    - Is the test suite robust enough to be used as TDD? If there are obvious gaps in functionality being tested, give half-day extension for student to complete the tests
3. Have student delete a method (insert or suggest) and reimplement it (**8 minutes**)
    - If their method uses multiple methods, if the bulk of the functionality is in a separate method, have them rewrite that, too
    - Student can pseudocode
4. Look over trie code briefly (**4 minutes**)
    - Look for redundant code, deeply nested if/else statements
    - Look at logic: what information does the node hold onto? what logic does the trie hold onto?
5. Let student know that we'll do code reviews to point out opportunities to refactor, etc, and post scores over the weekend

Do code reviews on their repos, to be completed and returned to them by the following Monday.
