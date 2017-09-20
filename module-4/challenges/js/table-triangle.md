# Table Triangle

## Problem

Create a function, `createTable`, that can create a table with a triangular pattern on an HTML page with the elements: `<table>`, `<tr>`, and `<td>`. The function should accept one argument for the number of rows to generate. For instance:

```js
createTable(3)
```

```
0 - 0 - 0
- 0 - 0 -
- - 0 - -
```

OR

```js
createTable(5)
```

```
0 - 0 - 0 - 0 - 0
- 0 - 0 - 0 - 0 -
- - 0 - 0 - 0 - -
- - - 0 - 0 - - -
- - - - 0 - - - -
```


## Solution

After putting a `<table>` element in the HTML. You can use this JavaScript/jQuery code to construct the table:

```js
function createTable(numRows) {
  $('table').html('');
  $('table').append('<tr></tr>'.repeat(numRows));
  
  $('tr').append('<td>-</td>'.repeat(2*numRows - 1));
  
  $('tr').each(function(idx, tr){
    var i = idx + 1;
    var tds = $(tr).children();
    for (var count = i; count <= (2*numRows - i); count += 2) {
      $(tds[count - 1]).text(0);
    };
  });
};
```

Formula built on the index of each row:

![Triangle Formula](https://github.com/turingschool/front-end-keys/blob/master/assets/img/module-4/challenges/js/triangle.png)