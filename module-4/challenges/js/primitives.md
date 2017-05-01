Extend the primitive Array data type to allow a `groupBy` method so that when given an array of objects, you can group each array item by a specified property.

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