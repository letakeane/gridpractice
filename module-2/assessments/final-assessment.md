# Mod 2 Final Evaluation (v1)

## Question 1
Write a function `sortBy( prop )` that
a) takes in a property, and
b) uses the `animals` object below to return a new object sorted by that property.

```
const animals = [
  {name: 'corgi', type: 'mammal', blood: 'endothermic'},
  {name: 'kakapo', type: 'bird', blood: 'endothermic'},
  {name: 'bison', type: 'mammal', blood: 'endothermic'},
  {name: 'iguana', type: 'reptile', blood: 'ectothermic'},
  {name: 'whale shark', type: 'fish', blood: 'ectothermic'}
]
```

`sortBy('blood')` should output:

```
{
  endothermic: [
    {name: 'corgi', type: 'mammal', blood: 'endothermic'},
    {name: 'kakapo', type: 'bird', blood: 'endothermic'},
    {name: 'bison', type: 'mammal', blood: 'endothermic'},
  ],
  ectothermic: [
    {name: 'iguana', type: 'reptile', blood: 'ectothermic'},
    {name: 'whale shark', type: 'fish', blood: 'ectothermic'}
  ]
}
```

`sortBy('type')` should output:

```
{
  mammal: [
    {name: 'corgi', type: 'mammal', blood: 'endothermic'},
    {name: 'bison', type: 'mammal', blood: 'endothermic'}
  ],
  bird: [
    {name: 'kakapo', type: 'bird', blood: 'endothermic'}
  ],
  reptile: [
    {name: 'iguana', type: 'reptile', blood: 'ectothermic'}
  ]
  fish: [
    {name: 'whale shark', type: 'fish', blood: 'ectothermic'}
  ]
}
```

## Question 2

What are the differences between `var`, `let`, and `const`?

## Question 3

```
const iceCreamCone = {};
const keyValuePairs = [
  ['cone', 'waffle'],
  ['iceCream', 'pistachio'],
  ['topping', 'graham cracker crumbs']
];

// Loop through the keyValuePairs array to create key value pairs in the pie object

console.log(iceCreamCone);
// {
//   cone: 'waffle',
//   iceCream: 'pistachio',
//   topping: 'graham cracker crumbs'
// }
```

## Question 4

`function() {}` vs. `() => {}`

* How is `this` handled in each of these?

## Question 5

Consider the following code:

```
let name = 'Voldemort';

function sayName() {
  let name = 'Beetlejuice';

  if (name === 'Beetlejuice') {
    name = 'Sauron';

    if (name.length > 0) {
      let name = 'Nathaniel \'Danger\' Foster';
    }

    console.log(name); // -----------> log 1
  }

  console.log(name); // -------------> log 2
}

sayName();

console.log(name); // ---------------> log 3

```

Explain what is being logged and why.

## Question 6

Use `Object.assign` to create a NEW object that combines the 3 objects below without mutating any of them:

```
const scientist = { name: 'Ada Lovelace' }
const IQ = { IQ: 160 }
const title = { title: 'Computer Programmer' }

// {name: 'Ada Lovelace', IQ: 160, title: 'Computer Programmer'}
```

## Question 7

How can we get the following array from the following object?

```
let obj = {name: 'ursula', type: 'villain', power: 87};

// ['name', 'type', 'power']
```

## Question 8

Talk about React!

* When should a component be stateful?
* How can you pass information from a parent component into a child component? How does that child component access the information?
* What does `setState()` do?


============================

# Mod 2 Final Assessment (v2)

## Question 1

Consider the following array:

```
const crewProfiles = [
  {
    rank: 'Commander',
    name: 'Melissa Lewis',
    skills: ['command', 'geology', 'military operations', 'computer programming']
  },
  {
    rank: 'Crewman',
    name: 'Mark Watney',
    skills: ['engineering', 'botany', 'chemistry']
  },
  {
    rank: 'Crewman',
    name: 'Alex Vogel',
    skills: ['chemistry', 'engineering', 'untethered space walk']
  },
  {
    rank: 'Major',
    name: 'Rick Martinez',
    skills: ['command', 'piloting', 'military operations', 'medicine']
  },
  {
    rank: 'Doctor',
    name: 'Chris Beck',
    skills: ['medicine', 'untethered space walk', 'geology', 'botany']
  },
  {
    rank: 'SysOps',
    name: 'Beth Johannssen',
    skills: ['communications', 'computer programming', 'piloting']
  }
]
```

Create an object whose properties are each of the skills, and whose values are arrays that contain the rank and names of the crew members who possess those skills

```
  // {
  //   command: ['Commander Melissa Lewis', 'Major Rick Martinez'],
  //   geology: ['Commander Melissa Lewis', 'Doctor Chris Beck'],
  //   ETC ETC ETC
  // }
```

## Question 2

What are the differences between `var`, `let`, and `const`?

## Question 3

Consider the following code:

```
var fruit = 'apple';

function eatFruit() {

  if (fruit !== 'kiwi') {
    var fruit = 'mango';

    if (fruit) {
      const fruit = 'strawberry';
    }

    console.log(fruit);         // What logs here?
  }

  console.log(fruit);           // What logs here?
}

eatFruit()

console.log(fruit);             // What logs here?
```

Explain what is logged and why.

## Question 4

```
const pizza = {};
const keyValuePairs = [
  ['crust', 'thin'],
  ['sauce', 'red'],
  ['topping', 'pepperoni']
];

// Loop through the keyValuePairs array to create key value pairs in the pie object

console.log(pizza);
// {
//   crust: 'thin',
//   sauce: 'red',
//   topping: 'pepperoni'
// }
```

## Question 5

`function() {}` vs. `() => {}`

* How is `this` handled in each of these?

## Question 6

Use `Object.assign` to create a NEW object that combines the 3 objects below without mutating any of them:

```
const scientist = { name: 'Ada Lovelace' }
const IQ = { IQ: 160 }
const title = { title: 'Computer Programmer' }

// {name: 'Ada Lovelace', IQ: 160, title: 'Computer Programmer'}
```

## Question 7

How can we get the following array from the following object?

```
let obj = {name: 'ursula', type: 'villain', power: 87};

// ['name', 'type', 'power']
```

## Question 8

Talk about React!

* When should a component be stateful?
* How can you pass information from a parent component into a child component? How does that child component access the information?
* What does `setState()` do?


===========================================

# Mod 2 Final Assessment (v3)

## Question 1

Consider the following array:

```
const outerPlanets = [
  {
    name: 'Jupiter',
    orbitalPeriod: 11.862,
    rings: false,
    moons: 69,
    notableFeatures: ['the Great Red Spot']
  },
  {
    name: 'Saturn',
    orbitalPeriod: 29.457,
    rings: true,
    moons: 62,
    notableFeatures: ['rings']
  },
  {
    name: 'Uranus',
    orbitalPeriod: 84.021,
    rings: true,
    moons: 27,
    notableFeatures: ['extreme axial tilt']
  },
  {
    name: 'Neptune',
    orbitalPeriod: 164.8,
    rings: true,
    moons: 14,
    notableFeatures: ['blue coloration']
  }
]
```

Create a function `atLeast` that takes in two parameters: a string matching a property in our objects, and a value. It should output an array of the objects that meet the conditions.

`atLeast('moons', 50)` should output:

```
[
  {
    name: 'Jupiter',
    orbitalPeriod: 11.862,
    rings: false,
    moons: 69,
    notableFeatures: ['the Great Red Spot']
  },
  {
    name: 'Saturn',
    orbitalPeriod: 29.457,
    rings: true,
    moons: 62,
    notableFeatures: ['rings']
  }
]
```

`atLeast('orbitalPeriod', 50)` should output:

```
[
  {
    name: 'Uranus',
    orbitalPeriod: 84.021,
    rings: true,
    moons: 27,
    notableFeatures: ['extreme axial tilt']
  },
  {
    name: 'Neptune',
    orbitalPeriod: 164.8,
    rings: true,
    moons: 14,
    notableFeatures: ['blue coloration']
  }
]
```

## Question 2

What are the differences between `var`, `let`, and `const`?

## Question 3

Consider the following code:

```
var dog = 'Spot';

function petDog() {
  console.log(`You pet ${dog}`);        // What logs here?

  if (dog === 'Spot') {
    let dog = 'Fluffy';
  }

  function rollOver() {
    dog = 'Biscuit';

    console.log(`Rollover, ${dog}!`); // What logs here?
  }

  rollOver();

  console.log(`Good dog, ${dog}!`); // What logs here?
}

petDog();

console.log(dog);                      // What logs here?
```

Explain what is logged and why.

## Question 4

```
const pie = {};
const keyValuePairs = [
  ['crust', 'graham cracker'],
  ['filling', 'chocolate mousse'],
  ['topping', 'whipped cream']
];

// Loop through the keyValuePairs array to create key value pairs in the pie object

console.log(pie);
// {
//   crust: 'graham cracker',
//   filling: 'chocolate mousse',
//   topping: 'whipped cream'
// }
```

## Question 5

`function() {}` vs. `() => {}`

* How is `this` handled in each of these?

## Question 6

Use `Object.assign` to create a NEW object that combines the 3 objects below without mutating any of them:

```
const scientist = { name: 'Ada Lovelace' }
const IQ = { IQ: 160 }
const title = { title: 'Computer Programmer' }

// {name: 'Ada Lovelace', IQ: 160, title: 'Computer Programmer'}
```

## Question 7
How can we get the following array from the following object?

```
let obj = {name: 'ursula', type: 'villain', power: 87};

// ['name', 'type', 'power']
```

## Question 8

Talk about React!

* When should a component be stateful?
* How can you pass information from a parent component into a child component? How does that child component access the information?
* What does `setState()` do?

===========================================

# Mod 2 Final Assessment (v4)

## Question 1

Consider the following array:

```
const yearbook = [
  { club: 'Drama', members : ['Louisa', 'Pam', 'Nathaniel' ] },
  { club: 'Band', members: ['Leta', 'Robbie', 'Jhun', 'Will'] },
  { club: 'Chess', members: ['David', 'Pam', 'Brittany', 'Robbie'] },
  { club: 'Newspaper', members: ['Pam', 'David', 'Brittany', 'Christie', 'Leta'] },
  { club: 'Astronomy', members: ['Nathaniel', 'Leta'] },
  { club: 'FBLA', members: ['Christie', 'David', 'Robbie'] },
  { club: 'Art', members: ['Jhun', 'Louisa'] }
]
```

Create an object whose keys are the names of people, and whose values are arrays that include strings of the clubs that person is a part of.


## Question 2

What are the differences between `var`, `let`, and `const`?

## Question 3

Consider the following code:

```
var dog = 'Boris';

function brushDog() {

  if (dog === 'Boris') {
    let dog = 'Natasha';
  }

  console.log(`You brushed ${dog}`);            // What logs here?

  function trimNails() {
    dog = 'Sergei';

    console.log(`You trimmed ${dog}'s nails'`); // What logs here?
  }

  trimNails();

  console.log(`Good dog, ${dog}!`);            // What logs here?
}

brushDog();

console.log(dog);                              // What logs here?
```

Explain what is logged and why.

## Question 4

```
const cupcake = {};
const keyValuePairs = [
  ['cake', 'yellow'],
  ['filling', 'strawberry jam'],
  ['topping', 'whipped cream']
];

// Loop through the keyValuePairs array to create key value pairs in the pie object

console.log(pie);
// {
//   cake: 'yellow',
//   filling: 'strawberry jam',
//   topping: 'whipped cream'
// }
```

## Question 5

`function() {}` vs. `() => {}`

* How is `this` handled in each of these?

## Question 6

Use `Object.assign` to create a NEW object that combines the 3 objects below without mutating any of them:

```
const scientist = { name: 'Ada Lovelace' }
const IQ = { IQ: 160 }
const title = { title: 'Computer Programmer' }

// {name: 'Ada Lovelace', IQ: 160, title: 'Computer Programmer'}
```

## Question 7
How can we get the following array from the following object?

```
let obj = {name: 'ursula', type: 'villain', power: 87};

// ['name', 'type', 'power']
```

## Question 8

Talk about React!

* When should a component be stateful?
* How can you pass information from a parent component into a child component? How does that child component access the information?
* What does `setState()` do?
