# JS Native Data Types Challenge

## Prompt

Extend the native Array data type to allow a `groupBy` method so that when given an array of objects, you can group each array item by a specified property.

For example, given an array of Turing students:

```javascript
let students = [
  { name: "Louisa", module: "4FE", track: "frontEnd" },
  { name: "Nathaniel", module: "3FE", track: "frontEnd" },
  { name: "Robbie", module: "3BE", track: "backEnd" },
  { name: "Brenna", module: "4FE", track: "frontEnd" },
  { name: "Brittany", module: "2BE", track: "backEnd" },
  { name: "Taylor", module: "3BE", track: "backEnd" }
];
```

Calling:

```javascript
students.groupBy('track');
```

Will return:

```javascript
{
  frontEnd: [
    { name: "Louisa", module: "4FE", track: "frontEnd" },
    { name: "Nathaniel", module: "3FE", track: "frontEnd" },
    { name: "Brenna", module: "4FE", track: "frontEnd" }
  ],
  backEnd: [
    { name: "Taylor", module: "3BE", track: "backEnd" },
    { name: "Brittany", module: "2BE", track: "backEnd" },
    { name: "Robbie", module: "3BE", track: "backEnd" }
  ]
}
```

## Answer

```js
Object.defineProperty(Array.prototype, 'groupBy', {
    value: function(groupMethod) {
        return this.reduce((groups, n) => {
            let key = n[groupMethod];
            (groups[key] = groups[key] || []).push(n); 
            return groups;
        }, {});
    }
});
```

### Explanation/Discussion

#### Everything in JavaScript is an object

The reason we are able to add a new method to an array in JavaScript is because an Array is actually an object. As is a String, an Integer, an Object, a Promise, etc. Data types in JavaScript are objects so that we can act on them.

In your devtools console, walk through the following example:

```js
let stringOne = 'hello world';
typeof stringOne // logs "string"
stringOne // logs "hello world"

stringOne.toUpperCase(); // logs "HELLO WORLD"
stringOne.__proto__; // shows you all the methods that exist on the native JavaScript string objects
stringOne.valueOf(); // logs "hello world"
```


#### Object.defineProperty

We want to use [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) rather than simply doing `Array.prototype.groupBy` because the `defineProperty` method will make whatever we define immutable by default. Because we wouldn't want anyone changing the  `groupBy` method we create, we want this to be immutable. The `defineProperty` method takes 3 arguments: 

* the object we want to add a property to (Prototype)
* the name of the property we want to add (groupBy)
* a configuration object for the property (the value option here allows us to add our functionality)



#### Method Functionality

Let's look at how our `groupBy` method actually works. Methods are simply functions that exist on an object. First we need to remember what we're passing in when we call our `groupBy` method:

```js
students.groupBy('track');
```

'track' represents the property on each of the objects in our students array that we want to group by. We are referencing this with the argument `groupMethod` in our function.

Our `this` context within our method represents our students array. We want to use the [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example) method on our array so we can return a grouped object of frontend vs. backend students.

Examine the arguments that the array [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=example) method takes. In our example, what do `groups`, and `n` stand for?

**groups:** The object we are currently building up with each iteration over the `students` array and will ultimately return
**n:** A single student from the array

Given these two values, we can group our students with the following code:

```js
  let key = n[groupMethod];
  // will either equal frontend or backend based on the value of the current student 'n'

  (groups[key] = groups[key] || []).push(n); 
  // check if our groups object already has that key (frontend/backend), if not, set it equal to a new array & push our current student into it
```

#### Why You Should Never Do This But We Made You Anyway

You never actually want to override or update the prototype of a native JavaScript data type. This is considered bad practice because you could potentially break existing functionality or have inconsistent behavior between browsers. Leave native JavaScript alone...but know how it works behind the scenes ;) 