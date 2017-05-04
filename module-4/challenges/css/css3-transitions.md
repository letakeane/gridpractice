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

#### Before & After Selectors

#### CSS3 Translations & Transitions