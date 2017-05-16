## Prompt

Read about [Pascal's Triangle](http://en.wikipedia.org/wiki/Pascal's_triangle)

Write a function that, given a depth (n), returns an array representing Pascal's Triangle to the n-th level.

For example:

pascalsTriangle(4) #=> [1, 1, 1, 1, 2, 1, 1, 3, 3, 1];

## Answer

```js
const pTriangle = (n) => {
  let pascal = [];
  let index = 0;
  
  // loop through each level of the triangle
  for (var i = 0; i < n; i++) {

    // set the index value to be the current level
    index = pascal.length - i;

    for (var j = 0; j < i+1; j++) {
      if (j === 0 || j === i) {
        pascal.push(1);
      } else {
        pascal.push(pascal[index + j] + pascal[index + j - 1]);
      }
    }
  }
  
  return pascal;
}
```