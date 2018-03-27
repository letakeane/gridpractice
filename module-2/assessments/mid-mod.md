# Mid Mod Assessment

## OOP & Inheritance

Given these two classes, create an abstract parent class of `Pet`, and refactor `Dog` and `Cat` so they inherit from it.

```
// ./Dog.js
class Dog {
	constructor(name, breed, tricksArray) {
		this.name = name;
		this.breed = breed;
		this.tricks = tricksArray;
	}

	learnTrick(trick){
		if ( typeof trick === 'string' && !this.tricks.includes(trick) ) {
		    this.tricks.push(trick)
		}
	}

	doTrick(trick){
		if ( this.tricks.includes(trick) ) {
			return `${this.name} does a trick: ${trick}!`
		} else {
			return `${this.name} doesn't know how to ${trick}!`
		}
	}
}

```

```
// ./Cat.js
class Cat {
	constructor(name, breed, faveTreat){
		this.name = name;
		this.breed = breed;
		this.faveTreat = faveTreat;
	}

	feedTreat(treat) {
		if ( this.faveTreat == treat ) {
			return `${this.name} eats a treat: ${treat}`
		} else {
			return `${this.name} casually sniffs the ${treat} and then ignores it.`
		}
	}
}
```

## Scope

```
let number = 30;

function numberFunction() {
  let number = 75;

  if (number === 75) {
    let number = 28;
  }

  console.log('A', number);      // A - what logs here?

  function newNumber() {
    number = 64;

    console.log('B', number);    // B - what logs here?
  }

  newNumber();

  console.log('C', number);      // C - what logs here?
}

numberFunction();

console.log('D', number);        // D - what logs here?
```

In what order to these log? What do they log?

## Objects & Arrays

```
const party = [
  {
    name: 'dracula',
    bringing: 'red velvet cake',
  },
  {
    name: 'linda',
    bringing: 'chicken soup'
  },
  {
    name: 'zombieJoe',
    bringing: 'jello shots'
  }
]

const friends = {
  dracula: {
    name: 'vampire',
    power: 90,
    abilities: ['hypnotism', 'turning into a bat', 'exsanguination']
  },
  casper: {
    name: 'ghost',
    power: 15,
    abilities: ['walking through walls', 'being sad', 'whispering on recordings']
  },
  linda: {
    name: 'werewolf',
    power: 80,
    abilities: ['being hairy', 'mauling', 'howling in a bloodcurdling manner']
  },
  sue: {
    name: 'poltergeist',
    power: 65,
    abilities: ['opening cabinets', 'stacking things', 'making messes generally']
  },
  zombieJoe: {
    name: 'zombie',
    power: 20,
    abilities: ['shambling', 'groaning', 'really craving brains']
  }
};
```

EXERCISE 1: How powerful are all our friends at the party combined? Sum up the power of all our friends at our party.

EXERCISE 2: Who is absent from our party? Return an array of the names of all our friends who aren't at the party.

===========

# Mid Mod (Alternate)

## OOP & Inheritance

Given these two classes, create an abstract parent class of `Flower`, and refactor `Daisy` and `Rose` so they inherit from it.

```
// ./Daisy.js
class Daisy {
  constructor(color, petals, chained) {
    this.color = color;
    this.petals = petals;
    this.chained = chained;
  }

  predictLove() {
    return this.petals % 2 != 0 ? 'He loves me' : 'He loves me not';
  }

  makeDaisyChain() {
    if (!this.chained) {
      this.chained = true;
    }
  }

  admire() {
    return 'Oooh, ahhh'
  }
}

```

```
// ./Rose.js
class Rose {
  constructor(color, thorns){
    this.color = color;
    this.thorns = thorns;
  }

  everyRose() {
    return this.thorns ? 'Every rose has its thorns' : 'Not every rose has its thorns';
  }

  admire() {
    return 'Oooh, ahhh'
  }
}
```

## Scope

```
let greeting = 'Hello';

function greetingFunction() {
  var greeting = 'Yo';

  if (greeting === 'Yo') {
    let greeting = 'Howdy';
  }

  console.log('A', greeting);      // A - what logs here?

  function newPhrase() {
    greeting = 'Hey';

    console.log('B', greeting);    // B - what logs here?
  }

  newPhrase();

  console.log('C', greeting);      // C - what logs here?
}

greetingFunction();

console.log('D', greeting);        // D - what logs here?
```

In what order to these log? What do they log?

## Objects & Arrays

```
const clouds = {
  cirrus: {
    shape: 'filament',
    occurrenceLevel: ['high']
  },
  cumulonimbus: {
    shape: 'anvil',
    occurrenceLevel: ['low', 'middle', 'high']
  },
  stratus: {
    shape: 'sheet',
    occurrenceLevel: ['low', 'middle']
  },
  cumulus: {
    shape: 'heap',
    occurrenceLevel: ['low', 'middle', 'high']
  }
};

const cloudSpotting = [
  {
    spotted: 'cirrus',
    species: 'spissatus'
  },
  {
    spotted: 'cumulus',
    species: 'fractus'
  },
  {
    spotted: 'cumulus',
    species: 'mediocris'
  }
]
```

EXERCISE 1: Create an object whose keys are the levels at which the different types of clouds can occur, whose values are arrays containing the strings of the clouds that appear at those levels.

```
// {
//   high: [ 'cirrus', 'cumulonimbus', 'cumulus' ],
//   low: [ 'cumulonimbus', 'stratus', 'cumulus' ],
//   middle: [ 'cumulonimbus', 'stratus', 'cumulus' 
// }
```

EXERCISE 2: What cloud types didn't we see while cloud spotting? Return an array of the names of the types of clouds we didn't see.

`// [ 'cumulonimubus', 'stratus' ]`
