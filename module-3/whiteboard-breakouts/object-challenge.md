# Object Challenge

```
const basketOfFruit1 = { orange: 2, grape: 3, avocado: NaN, banana: 20, apple: 2 }
                
const basketOfFruit2 = { grape: 2, avocado: 3, banana: 2, pear: 1, apple: { fiji: 2, someOtherApple: 4 } }
```

## Instructions

### Write a function(s) that merges these two objects together so that you get this output:

```
{ orange: 2, grape: 5, avocado: 3, banana: 22, apple: 8, pear: 1 }
```

## Solutions 

```
const cleanObj = (obj) => {
  return Object.entries(obj).reduce((newObj, fruit) => {
    typeof fruit[1] === 'object' ?
      newObj[fruit[0]] = sumFruit(fruit[1])
    :
      newObj[fruit[0]] = fruit[1]
    
    return newObj
  }, {})
}

const sumFruit = (obj) => {
  return Object.values(obj).reduce((total, num) => total + num, 0)
}

const mergeObjects = (obj1, obj2) => {
  const cleanedFruit1 = cleanObj(obj1);
  const cleanedFruit2 = cleanObj(obj2);
  const fruitKeys = Object.keys({...cleanedFruit1, ...cleanedFruit2})
  return fruitKeys.reduce((obj, fruit) => {
    obj[fruit] = (cleanedFruit1[fruit] || 0) + (cleanedFruit2[fruit] || 0)
    return obj
  }, {})
}

mergeObjects(basketOfFruit1, basketOfFruit2)
```

```
// Solution for n case

const basketOfFruit1 = {
                  orange: 2,   grape: 3, avocado: NaN,
                  banana: 20, apple: 2
                }

const basketOfFruit2 = {
                  grape: 2, avocado: 3, banana: 2,
                  pear: 1, apple: { fiji: 2, someOtherApple: 4 }
                }

const basketOfFruit3 = { grape: 5 }

const fruitBaskets = [basketOfFruit1, basketOfFruit2, basketOfFruit3]

const getKeys = (...fruitBaskets) => (
  Object.keys(Object.assign({}, ...fruitBaskets))
)

const clean = (fruit) => (
  typeof(fruit) === 'object' ?
    Object.values(fruit).reduce((sum, num) => sum + num, 0) :
    fruit || 0
)

const fruitKeys = getKeys(basketOfFruit1, basketOfFruit2)

fruitKeys.reduce((combined, fruitKey) => {
  combined[fruitKey] = fruitBaskets.reduce((sum, basket) => {
    return sum + clean(basket[fruitKey])
  }, 0)
  return combined
}, {})
```
                
                
 
