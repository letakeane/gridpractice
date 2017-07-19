# Interview Question Practice

## Iteration 3

**Describe the difference between progressive enhancement and graceful degradation.**

**Describe CSS Floats and how they work.**

CSS floats are a positioning property that allows you to do things like wrap text around an image. The floated element (in this case, an image) still remains a part of the flow of the document (which means it has an effect on the position of the elements that surround it). They were often over-used for general layout purposes but are being seen less frequently with the addition of flex-box and CSS grid.

**What's the difference between a relative, fixed, absolute and statically positioned element?**

* Static: the default for all page elements; the element flows in the page as it normally would; you would only set this to remove previously applied positioning
* Relative: positions the element relative to itself; similar to static though you can specify `top: 10px` and it will move down 10 pixels from where it would normally be
* Absolute: takes the element out of the natural flow of the page; element will have no effect on the positioning of other elements; it will be positioned in the top left corner of the closest relative parent
* Fixed: element is positioned relative to the viewport or the browser window; element will stay exactly where it is when the page is scrolled

**Explain event delegation.**

Event delegation utilizes the event bubbling or event propogation effect and allows you to add an event listener to a parent node in the DOM and have the event caught at the parent level as the event bubbles up the tree to find a handler. This is useful when you have elements that are frequently added or removed from the DOM (like list elements), putting a listener on the parent `ul` instead will keep that event listener in tact even if your child elements are consistently added and removed. See [David Walsh's Explanation](https://davidwalsh.name/event-delegate)

**What kind of information might you store in an environment variable? Why?**

**What is an API?**

* An application programming interface, an API is a set of rules that govern how software developers should work with a particular technology. Most often, we work with APIs that specify a set of endpoints to access a back-end dataset, or APIs for structuring our client-side code with a framework like React.