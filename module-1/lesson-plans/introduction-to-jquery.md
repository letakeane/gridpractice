Learning Goals
- Learn what jquery is, how it is different from just using js for DOM interaction
- understand that a jquery object is different from a dom element
- benefits of using jquery
--- less code to write
--- covers edge cases

- Find elements in the DOM
- Add event listeners
- Retrieving info from the DOM
- Adding/removing css classes
- Traversing the DOM
- Adding to the DOM

jquery is a js library that makes dom interaction easier.

A lot of this lesson will be comparing and contrasting javascript and jQuery and how they can be used to accomplish different tasks. On the whiteboard, write side by side how to accomplish the different tasks with js vs jquery.

- first lines of jquery
--- go over jquery syntax $(selector)
--- talk about jquery object vs dom element

- Selecting elements in the DOM using jQuery
--- review selectors they already know (tag, #id, .class)
- Respond to user events
- Modifying CSS classes
- Getting values from user input
--- Understand parseInt
- using this in an event callback function

## Knowing Which Element We Clicked - THIS!
Try It
```
Can you create a class that adds a border and then toggle that class on the specific box that is hovered over? (For your own sanity, you probably want to remove the alert!)
```
Break this down into steps
- change the event to hover
- make sure hover event works
- create a border class 
- add border class when hovered over

What is jquery? 
- A js library that makes interacting with the dom easier.

What does jquery return? 
- A jquery object, a collection of one or more elements which match the selector (if matches were found). This collection is wrapped in the jquery object which has a bunch of useful methods for interacting with the dom.
good resource on the jquery object http://learn.jquery.com/using-jquery-core/jquery-object/

- traversing the dom
- selectors (good to mention that this is not just for jquery)
--- basic
--- chaining - whiteboard these
--- attribute
--- :checked
--- :nth-child - https://api.jquery.com/nth-child-selector/

Exercise, Part One: The Presidents
Have people whiteboard the answers before testing in the console

- CSS
--- .addClass
--- .removeClass
--- .hasClass
--- .toggleClass

- filtering/traversal
--- parent
--- parents
--- children
--- siblings
--- find

:nth-child vs :eq
eq is more intuitive. nth-child is 1 based and counts all children regardless if they match the selector, if they nth-child matches the selector then it will return it.

eq is 0 based and will only count the children that match the selector

- Adding to the DOM
--- text
--- html
--- append
--- prepend


