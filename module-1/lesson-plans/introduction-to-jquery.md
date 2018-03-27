## At the beginning of class
Whiteboard
Write Learning Goals
Write JS and JQUERY side by side

### Learning Goals
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

#### first lines of jquery
- go over jquery syntax $(selector)
- talk about jquery object vs dom element
- to help you remember that something is a jquery element start the variable name with a $

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
Can you change the text in each box to ‘Unicorn’ when that specific box is hovered over? (For your own sanity, you probably want to remove the alert!)
```
Break this down into steps
- change the event to hover
- make sure hover event works
- change text to something else

### Review
What is jquery? 
- A js library that makes interacting with the dom easier.

What does jquery return? 
- A jquery object, a collection of one or more elements which match the selector (if matches were found). This collection is wrapped in the jquery object which has a bunch of useful methods for interacting with the dom.
good resource on the jquery object http://learn.jquery.com/using-jquery-core/jquery-object/

## Traversing The Dom

### Selectors (good to mention that this is not just for jquery)
- basic
- chaining - whiteboard these
- attribute (review what attributes are)
- :checked
- :nth-child vs :eq - https://api.jquery.com/nth-child-selector/

:nth-child vs :eq
eq is more intuitive. nth-child is 1 based and counts all children regardless if they match the selector, if they nth-child matches the selector then it will return it.

eq is 0 based and will only count the children that match the selector

Exercise, Part One: The Presidents
Have people whiteboard the answers before testing in the console

- CSS
--- .addClass
--- .removeClass
--- .hasClass
--- .toggleClass

- filtering/traversal
Whiteboard HTML (used for examples)
html
body
main
  h3 class="title"
  p
  article id="blog-post-1" class="blog-post read"
    h3
    p
    footer
  article id="blog-post-2" class="blog-post read"
    h3
    p
    footer
  article id="blog-post-3" class=blog-post
    h3
    p
    footer

--- parent
--- parents
--- children
--- siblings
--- find
Whiteboard html or tree, ask students which elements will be selected


- Adding to the DOM
--- text
--- html
--- append
--- prepend


