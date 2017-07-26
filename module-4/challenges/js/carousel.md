# Image Carousel 

## Prompt

Create an image slider (aka carousel) with HTML, CSS and jQuery that behaves like this:

![Carousel](https://github.com/turingschool/front-end-keys/blob/master/assets/img/module-4/challenges/js/carousel.gif?raw=true)

### Phase I:

* **When clicking the right arrow:** the current image should slide out to the left, and the next image should slide in from the right
* **When clicking the left arrow:** the current image should slide out to the right, and the previous image should slide in from the left
* When I reach the end of the slide show, hide the right arrow
* When I reach the beginning of the slide show, hide the left arrow
* Try using only CSS3 for the slide animation; use jQuery for the click handling and current slide detection

### Phase II:

* Images should slide in an infinite loop
* Images should automatically slide every 5 seconds
* The 5-second timer should be reset every time a new image is displayed

Here are some conveniently-sized images for you to use:

* [Bear](https://placebear.com/450/300)
* [Kitten](https://placekitten.com/450/300)
* [Puppy](https://www.hearingdogs.org.uk/globalassets/sponsor/jade/jade-hero-450-300.jpg)

And some boilerplate HTML:

```html
<html>
  <head>
    <title>jQuery Carousel</title>
    <style type="text/css">
    </style>
  </head>
  <body>
    <div id="container">
    </div>

    <script
      src="http://code.jquery.com/jquery-3.2.1.js"
      integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
      crossorigin="anonymous">
    </script>

    <!-- Feel free to do your JavaScript logic directly in the HTML file for the sake of time -->
    <script type="text/javascript">
    </script>
  </body>
</html>
```

## Solution

* [General Strategy](https://stackoverflow.com/questions/15876754/infinity-loop-slider-concepts)
* [Detecting when CSS animations are complete](http://blog.teamtreehouse.com/using-jquery-to-detect-when-css3-animations-and-transitions-end)