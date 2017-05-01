Extend the primitive Array data type to allow a `groupBy` method so that when given an array of objects, you can group each array item by a specified property.

For example, given an array of Turing students:

```javascript
let students = [
  { name: "Jane", module: "4FE", track: "frontEnd" },
  { name: "Jane", module: "3FE", track: "frontEnd" },
  { name: "Jane", module: "3BE", track: "backEnd" },
  { name: "Jane", module: "4FE", track: "frontEnd" },
  { name: "Jane", module: "2BE", track: "backEnd" },
  { name: "Jane", module: "3BE", track: "backEnd" }
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
    { name: "Jane", module: "4FE", track: "frontEnd" },
    { name: "Jane", module: "3FE", track: "frontEnd" },
    { name: "Jane", module: "4FE", track: "frontEnd" }
  ],
  backEnd: [
    { name: "Jane", module: "3BE", track: "backEnd" },
    { name: "Jane", module: "2BE", track: "backEnd" },
    { name: "Jane", module: "3BE", track: "backEnd" }
  ]
}
```