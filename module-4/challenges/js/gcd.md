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

#### The % Operator

#### Recursion
