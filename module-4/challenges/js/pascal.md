## Prompt

Read about Pascal's Triangle [here](http://en.wikipedia.org/wiki/Pascal's_triangle)

![Pascal](https://github.com/turingschool/front-end-keys/blob/master/assets/img/module-4/challenges/js/pascal.gif?raw=true)

Write a function that, given a depth (n), returns an array representing Pascal's Triangle to the n-th level.

For example:

`pascalsTriangle(4) #=> [1, 1, 1, 1, 2, 1, 1, 3, 3, 1];`

## Answer

```js
  const pTriangle = (n) => {
    let pascal = [];
    let index = 0;
    
    // loop through each level of the triangle
    for (var i = 0; i < n; i++) {
      index = pascal.length - i;

      // loop through each number in the current level
      for (var j = 0; j < i + 1; j++) {

        // If we're at the first or last number in the level,
        // add 1 to the array because the outter numbers are
        // always 1
        if (j === 0 || j === i) {
          pascal.push(1);

        // Otherwise, 
        } else {
          let numberToPush = pascal[index + j] + pascal[index + j - 1];
          pascal.push(numberToPush);
        }
      }
    }
    
    return pascal;
  }
```