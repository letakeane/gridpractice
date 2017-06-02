# Bracket Matcher

## Prompt

Ever wonder how your linter knows if you have matching brackets? Well it's time to think of a solution to that!

Given a set of brackets, `[, {, (`, create a function that determines if the brackets are well-formed (match) or not - even with bracket nesting. For example:

```javascript
bracket('{}');

// => true
```

```javascript
bracket('{(');

// => false
```

```javascript
bracket('{()}');

// => true
```

```javascript
bracket('{[)][]}');

// => false
```

```javascript
bracket(']');

// => false
```

```javascript
bracket('({[]}{[]})');

// => true
```

## Solution

```javascript
const bracketMap = new Map();
bracketMap.set('{', '}');
bracketMap.set('[', ']');
bracketMap.set('(', ')');

const bracket = (brackets) => {
  const bracketsToResolve = [];

  for (var i = 0; i < brackets.length; i++) {
    let brack = brackets[i];
    if (bracketMap.get(brack)) {
      bracketsToResolve.push(brack);    
    } else {
      if (bracketMap.get(bracketsToResolve[bracketsToResolve.length - 1]) === brack) {
        bracketsToResolve.pop();
      } else {
        return false;
    };
  }; 
};

return bracketsToResolve.length === 0;
};
```