# Robot Traversal

## Prompt

You are working with a computer simulation of a mobile robot. The robot moves on an plane, and its movements are described by a command string consisting of one or more 
of the following letters:

* G instructs the robot to move forward one step
* L instructs the robot to turn left
* R instructs the robot to turn right

The robot cannot go backwards - poor robot. After running all of the movement commands, you want to know if the robot returns to it's original, starting location.

For instance, the command `GRGRGRG` would make the robot return to its original starting location.

### Implementation

Create a function called `returnsToOrigin` that takes the movement command string and outputs `true` or `false` depending on the commands:

```js
returnsToOrigin('GRGRGRG') // => true
```

```js
returnsToOrigin('GRGRLL') // => false
```

```js
returnsToOrigin('') // => true
```

```js
returnsToOrigin('GRGGRGGRGRGLG') // => true
```

```js
returnsToOrigin('GRGRGGLGRGRGRG') // => false
```

## An Answer

```js
const returnsToOrigin = path => {
  // Set initial state of robot coordinates and direction
  let x = 0;
  let y = 0;
  let direction = 0; // going up

  // Move robot based on each instruction
  for (let command of path) {
    switch (command) {
     case 'G':
      if (direction % 4 === 0) {
        y++
      } else if (direction % 4 === 1) {
        x++
      } else if (direction % 4 === 2) {
        y--
      } else if (direction % 4 === 3) {
        x--
      }
      break;
    case 'L':
      direction--;
      break;
    case 'R':
      direction++;
      break;  
    }
  }

  // Test if the robot has returned to initial coordinates
  return x === 0 && y === 0 ? true : false;
}
```