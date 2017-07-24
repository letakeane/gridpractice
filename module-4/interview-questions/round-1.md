# Interview Question Practice

## Iteration 1

**Describe the difference between a cookie, sessionStorage and localStorage. [-hint-](https://github.com/turingschool/lesson_plans/blob/3ee469be5fdc94c926a88ca510106848b0339731/ruby_04-apis_and_scalability/client_side_storage.markdown) [web APIs]**

* Cookies were an early mechanism for storing information in the browser (pre-HTML5). They can only hold a small amount of data and are considered less secure than localStorage and sessionStorage.

* When HTML5 rolled around, we were given a storage object that enabled `localStorage` and `sessionStorage` The data stored in these objects is only shared under the same origin policy, so they're more secure than cookies.

* LocalStorage data persists across tabs and is useful for data that should be stored offline; SessionStorage does not persist outside of the user's session and is useful for semi-private user data.

**What are `data-` attributes good for? [-hint-](https://css-tricks.com/almanac/selectors/a/attribute/) [html]**

**Have you used or implemented media queries or mobile specific layouts/CSS? [-hint-](http://frontend.turing.io/lessons/module-1/intro-responsive.html) [css]**

**Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`? [js]**

* `function Person(){}` is a **function declaration**. It declares, but does not execute, the function.
* `var person = Person()` is a **function expression**. A variable `person` has been defined and contains a reference to a Person function.
* `var person = new Person()` is a **function constructor**. By adding the `new` keyword, we are instantiating a new object from the Person class constructor.

**What is the difference between `==` and `===`? [-hint-](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) [js]**

**In as much detail as possible, explain what a database migration does.**

**Question: What is the value of foo? Why? [js]**

```js
var foo = 10 + '20';
```

* "1020". JavaScript is a loosely or dynamically-typed language and is using type coersion to coerce the integer 10 into a string. Similar to rock - paper - scissors, a string always beats an integer and will be the dominant data type when trying to operate on these two.
