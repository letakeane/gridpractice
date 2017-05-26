## Prompt

Using recursion, find the greatest common denominator of two positive integers.

For example, 

```js
greatestCommonDenominator(9, 12) #=> 3
```

## Answer

```js
const gcd = (a, b) => {

  // b will return falsey when it equals 0
  // at this point, we know there is no remainder
  // and we can simply return `a` as the GCD
  if (!b) {
    return a;
  }

  // otherwise, call gcd again with `b` in `a`s spot,
  // and use the remainder of `a % b` as `b`.
  return gcd(b, a % b);
};
```

### Explanation/Discussion

#### Euclid's Algorithm

This solution uses an implementation of [Euclid's Algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) for finding the greatest common denominator of two numbers. While this isn't something you'll be expected to know on an interview, it's still good practice to familiarize yourself with different mathematical algorithms!

The algorithm states:

The GCD of two numbers (`a` and `b`) does not change if the **larger** number is replaced with its difference from the smaller number.

For example:

  * 21 is the GCD of 252 and 105
  * 21 is the GCD of 147 and 105 `(252 - 105 = 147)`
  * 21 is the GCD of 105 and 63  `(147 - 105 = 63)`
  * 21 is the GCD of 63  and 42  `(105 - 63 = 42)`
  * 21 is the GCD of 42  and 21  `(63 - 42 = 21)`
  * 21 is the GCD of 21  and 21  `(42 - 21 = 21)`

When the two numbers are equal, we have completed the process and reached the greatest common denominator.

The Euclidean algorithm advances in such a way that the result of each step is used as an input for the next one. (Recursion!)

Another stopping condition of the algorithm is if there is no remainder when dividing the larger number by the smaller number, we can safely assume that the smaller number is the greatest common denominator.

For example:

252 / 105 #=> remainder of 42
147 / 105 #=> remainder of 42
105 / 63  #=> remainder of 42
63  / 42  #=> remainder of 21
42  / 21  #=> remainder of 0

#### The Remainder Operator

The % operator in JavaScript returns the remainder of dividing `a` by `b`. If `a` is less than `b`, it will simply return `a`. From [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators):

```js
12 % 5 // 2
-1 % 2 // -1
NaN % 2 // NaN
1 % 2 // 1
2 % 3 // 2
-4 % 2 // -0
5.5 % 2 // 1.5
```

#### Recursion

In our solution, we've used recursion to make the integers continuously smaller. When we finally reach a remainder of 0 as our `b` value, we can return `a` which will represent the GCD at that point. 

To illustrate our example using integers `9` and `12`:

  * 3 is the GCD of 9 and 12
  * 3 is the GCD of 9 and 3 `(12 - 9 = 3)`
  * 3 is the GCD of 6 and 3 `(9 - 3 = 6)`
  * 3 is the GCD of 3 and 3 `(6 - 3 = 3)`

Because our solution uses the % operator, we can use the stopping condition of the algorithm (if the remainder is 0) in order to pull ourselves out of the recursive function call and return `a`, the GCD.

```js
gcd(9, 12) #=> gcd(12, 9) // remember the % operator will simply return 'a' if it was smaller than 'b', so here we just swap the numbers
gcd(12, 9) #=> gcd(9, 3) // 9 will now be the larger number, as 12 % 9 = 3
gcd(9, 3) #=> gcd(3, 0) // here we skip the gcd(6, 3) step by using the % operator to determine that there is no remainder from 9 % 3
gcd(3, 0) #=> 3 // If there is no remainder, and `b === 0`, we've reached the stopping condition for our algorithm. Notice if you try to continue, `3 % 0` will return `NaN`. We can safely assume if `b === 0`, then `a === GCD`.
```
