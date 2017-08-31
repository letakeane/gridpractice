
### SOLUTIONS

#### Nesting Practice Solution:

##### SCSS

```css
$color-text-light: #fff;
$color-text-dark:   #f00;
$color-text-default: black;
$font-default: Arial, Tahoma, sans-serif;
$box-shadow-default: 1px 1px 30px #000;

.nested-magic {
  a {
    color: $color-text-default;
    font-family: $font-default;
;
    &:hover { color: $color-text-dark }
  }
  button {
    &:hover {
      color: $color-text-light;
      box-shadow: $box-shadow-default;
    }
  }
}
```