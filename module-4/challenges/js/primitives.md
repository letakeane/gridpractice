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



#### Reduce

...explain the array.reduce method and how it works for our use-case


#### Why You Should Never Do This But We Made You Anyway

You never actually want to override or update the prototype of a native JavaScript data type. This is considered bad practice because you could potentially break existing functionality or have inconsistent behavior between browsers. Leave native JavaScript alone...but know how it works behind the scenes ;) 