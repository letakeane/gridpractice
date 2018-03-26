### Missing Sheep

Consider an array of sheep where some sheep may be missing from their place. We need a function that returns the number of sheep present in the array (true means that this sheep is present).

```js 
var sheepArray = [true,  true,  true,  false,
                  true,  true,  true,  true ,
                  true,  false, true,  false,
                  true,  false, false, true ,
                  true,  true,  true,  true ,
                  false, false, true,  true];
```
                 
The correct answer would be `17`.


### The maths

Write a function called `sum` that takes an array of numbers and returns the sum of the numbers (which can include negative numbers). If the array does not contain any numbers then you should return 0.

Ex:
```js
sum([]);
```
Our answer would be `0`.

Ex:
```js
var nums = [1, 5.2, 4, 0, -1];
sum(nums);
```
Our answer would be `9.2`.


### Lowercase words

Create a function called `arrayLowerCase` to lowercase all strings in an array. Non-string items should remain unchanged.

Ex:
```js
var colors = ['Red', 'Green']
arrayLowerCase(colors)
```
Our answer would be `['red', 'green']`

Ex:
```js
var random = [1, 'Green'];
```
Our answer would be `[1, 'green']`.


### Merging Arrays

You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

```js
arr1 = [1, 2, 3, 4, 5];
arr2 = [6, 7, 8, 9, 10];
```
Ex:
```js
mergeArrays(arr1, arr2);
```
Our answer would be:
`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`

```js
arr3 = [1, 3, 5, 7, 9];
arr4 = [10, 8, 6, 4, 2];
```
Ex:
```js
mergeArrays(arr3, arr4);
```
Our answer would be:
`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];`

Now we want to account for duplicate numbers:
```js
arr5 = [1, 3, 5, 7, 9, 11, 12];
arr6 = [1, 2, 3, 4, 5, 10, 12];
```

Ex:
```js
mergeArrays(arr5, arr6);
```
Our answer would be:
`[1, 2, 3, 4, 5, 7, 9, 10, 11, 12];`