# CSS3 Transitions & Translations

## Prompt

Using just HTML & CSS, create a button with the following hover effect. Try to use the least amount of HTML elements as possible to complete the challenge.

![Hover Effect](https://cloud.githubusercontent.com/assets/856935/22663649/9dbd322e-ec6a-11e6-9c86-a70a9eca6560.gif)

## Answer

```html
<html>
  <head>
  <style type="text/css">

    body {
      background: #2c3e50;
      color: #2c3e50;
      font-family: 'Helvetica Neue';
      font-weight: 200;
    }

    .button {
      position: absolute;
      z-index: 2;
      width: 200px;
      height: 70px;
      top: 160px;
      left: 100px;
      color: #2c3e50;
      font-size: 25px;
      font-weight: 400;
      line-height: 68px;
      text-transform: uppercase;
      text-align: center;
      transition: all .3s ease-in-out;
      cursor: pointer;
    }

    .button:before {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      content: '';
      display: block;
      width: 200px;
      height: 70px;
      background: #fff;
      transform: translate(0, 0);
      transition: all .3s ease-in-out;
      box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.1);
    }

    .button:after {
      position: absolute;
      z-index: -2;
      top: 0;
      left: 0;
      content: '';
      display: block;
      width: 200px;
      height: 70px;
      background: #8e44ad;
      transform: translate(13px, 12px);
      transition: all .3s ease-in-out;
      box-shadow: 2px 2px 4px 0px rgba(0,0,0,0.2);
    }

    .button:hover {
      transform: translate(13px, 12px);
      color: #fff;
    }
 
    .button:hover:before {
      background: #8e44ad;
      box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.2);
    }

    .button:hover:after {
      transform: translate(-15px, -10px);
      background: #fff;
    }

  </style>
</head>
<body>
    <div class="button">
      Hover me
    </div>
</body>
</html>
```


### Explanation/Discussion

#### Psuedo Classes and Elements
[Psuedo elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) allow you to style a particular portion of an element. The :before and :after syntax here denotes that we want to add a psuedo element to our selector that appears before or after the actual element. They allow you to insert content onto a page with pure CSS rather than needing to place it directly in the DOM with HTML. These are often used in scenarios where you're adding icons to a label or input field; it makes it easier to style with less elements.

Note that you can 'chain' these pseudo selectors as we did with `selector:hover:after`. `:hover` is actually a [pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) which is slightly different than a pseudo element. Psuedo classes denote a special **state** of an element.

#### CSS3 Transitions & Transforms

It's easy to mix up the purpose of transitions and tranforms in CSS. From [thoughtbot](https://robots.thoughtbot.com/transitions-and-transforms), "Transitions are the grease in the wheel of CSS transforms. Without a transition, an element being transformed would change aburptly from one state to another."

Transitions allow you to control the way a transformation happens. In this example, our transition value:

```css
transition: all .3s ease-in-out
```

is saying to use this transition effect for all CSS values that change on this element, make the duration of the transition last .3seconds, and use an `ease-in-out` timing function. Specifically, the different parts of this shorthand are:

```css
transition: [property] [duration] [timing-function] [delay];
```  

Our transformation is doing the actual moving of our psuedo elements. It is translating them on the x and y axis a certain amount of pixels when we hover. With transformations you can rotate, move, skew and scale elements.