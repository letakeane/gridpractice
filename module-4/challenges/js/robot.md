# Robot Traversal

## Prompt

You are working with a computer simulation of a mobile robot. The robot moves on an plane, and its movements are described by a command string consisting of one or more 
of the following letters:

* G instructs the robot to move forward one step
* L instructs the robot to turn left
* R instructs the robot to turn right

The robot cannot go backwards - poor robot. After running all of the movement commands, you want to know if the robot returns to it's original, starting location.

For instance, the command `GRGRGR` would make the robot return to its original starting location.

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

## Answer