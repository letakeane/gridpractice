## Prompt

Given an `n x n array`, write a function that returns the array elements arranged from outermost elements to the middle element, traveling clockwise.

```js
const arrayMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

snail(arrayMatrix) #=> [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

![Snail Array](https://github.com/turingschool/front-end-keys/blob/master/assets/img/module-4/challenges/js/snail.png?raw=true)

## Answer

```js
const snail = (array) => {
  let result = [];

  while (array.length) {

    // Steal the first row
    result = result.concat(array.shift());

    // Steal the right items
    for (var i = 0; i < array.length; i++) {
      result.push(array[i].pop());
    }

    // Steal the bottom row
    result = result.concat((array.pop() || []).reverse());

    // Steal the left items
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift());
    }
  }

  return result;
}
```