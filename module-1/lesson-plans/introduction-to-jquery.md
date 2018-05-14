0:00 - Set the Stage

Whiteboard

- Learning Goals
- Vocab

### Learning Goals

#### What is jQuery?
- jQuery is a js library that makes DOM interaction easier.

A lot of this lesson will be comparing and contrasting javascript and jQuery and how they can be used to accomplish the same tasks. On the whiteboard, write side by side how to accomplish the different tasks with js vs jquery.

This lesson has a lot of in class work. Explain that not all of this will be done in-class but is there for additional practice outside of class.

#### first lines of jQuery

Whiteboard

`document.querySelector('h1').innerText = 'I am a dinosaur!';`
`$('h1').text('I am a dinosaur!')`

- go over jQuery syntax $(selector)
- talk about jQuery object vs DOM element
    - demo in the console
    - jQuery creates a wrapper for the DOM element(s) similar to document.querySelectorAll
- Mention that jQuery objects stored in variables should start with a `$`.

- Selecting elements in the DOM using jQuery
--- review selectors they already know (tag, #id, .class)

- Respond to user events
- Modifying CSS classes
- Getting values from user input
  - Understand parseInt

0:30
1:00

Only do secret passcode in class work if you are running fast

## Knowing Which Element We Clicked - THIS!

For our purposes, the keyword `this` is going to refer to the target of the event.

- using this in an event callback function

Try It
```
Can you create a class that adds a border and then toggle that class on the specific box that is hovered over? (For your own sanity, you probably want to remove the alert!)  
```
Break this down into steps
- change the event
- make sure event works
- create class
- toggle class

### Review
What is jQuery? 
- A js library that makes interacting with the DOM easier.

What does jQuery return? 
- A jQuery object, a collection of one or more elements which match the selector (if matches were found). This collection is wrapped in the jQuery object which has a bunch of useful methods for interacting with the DOM.
good resource on the jquery object http://learn.jquery.com/using-jquery-core/jquery-object/

## Traversing The Dom
Whiteboard HTML (use for Selectors and Traversal sections)

Review parent/child & siblings relationship 

1:30
### Selectors (good to mention that this is not just for jquery)
- basic
- chaining - whiteboard these
- attribute (review what attributes are)
- :checked
- :nth-child vs :eq - https://api.jquery.com/nth-child-selector/

#### :nth-child vs :eq
eq is more intuitive. nth-child is 1 based and counts all children regardless if they match the selector, if they nth-child matches the selector then it will return it.

eq is 0 based and will only count the children that match the selector

Exercise, Part One: The Presidents
Have people whiteboard the answers before testing in the console

## CSS
- .addClass
- .removeClass
- .hasClass
- .toggleClass

2:00
## filtering/traversal
whiteboard simple html tree, ask students which elements will be selected
- parent
- parents
- children
- siblings
- find

## Adding to the DOM
- text
- html
- append
- prepend

2:25 - Wrap Up
## Wrap up idea
Take 7 minutes and answer the following questions
  - What were the two most important things you learned from this lesson?
  - What is one thing you still have a question about?
  - How is a jQuery object different from a DOM element?
  - What parts of jquery are similar/different to vanilla js?