# CS
### Html elements
header {

}
body {

}

### Class
.center {

}

### Id
\#logo {

}

### unordered list elements within a navigator element

nav > ul {

}

### En el padre position: relative y en el hijo position: absolute
To prevent the element from pushing the next element, adjust its position to prevent it from taking up space in the page layout.

An absolute position takes the element out of that top-down document flow and allows you to adjust it relative to its container.
When an element is manually positioned, you can shift its layout with top, left, right, and bottom. Set the back-wall to have a top value of 0, and a left value of 0.

### * selector
\* {
}
(targets all)

### box-sizing: border-box;
box-sizing: border-box (the border you added doesn't add any size to your elements)

body {
  height: 100vh;
  overflow: hidden;
} the body fill the whole viewport. Hide any scroll bars that appear when something extends past the viewport.

.bb1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  --building-color1: #999;
} this will center the parts of the building using 'flex' or 'flexbox'. Variable declaration of the color #999.

.background-buildings {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
} Use flexbox again to evenly space the buildings across the bottom of the element, instead of stacked on top of each other

.bb2 {
  width: 10%;
  height: 50%;
  background-color: var(--building-color2, green);
} The property will use the fallback value (green) when there's a problem with the variable.

:root selector is the highest level selector in CSS. Pûtting your variables there will make them usable everywhere.

.foreground-buildings {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
} This will make it the same size as the body and move the start of it to the top left corner.

.fb4 {
  width: 8%;
  height: 45%;
  background-color: var(--building-color1);
  position: relative;
  left: 10%;
} Move the position of .fb4 relative to where it is now by adding a position of relative and left of 10% to it. This will cover up the remaining white space in between the buildings.

.fb4b {
  display: flex;
  flex-wrap: wrap;
} This will put your windows side by side, and then push them down to a new row when they don't fit.

### @media
@media (max-width: 1000px) {
  
} Styles added in here will take effect when the document size is 1000px wide or less.

### loading="lazy"
The loading attribute on an img element can be set to lazy to tell the browser not to fetch the image resource until it is needed (as in, when the user scrolls the image into view). As an additional benefit, lazy loaded elements will not load until the non-lazy elements are loaded - this means users with slow internet connections can view the content of your page without having to wait for the images to load.

### HTML \<a> target Attribute
The target attribute specifies where to open the linked document. When it is set to "_blank", the link is open in a new window or tab.

### HTML \<a> rel attribute
The Referer HTTP header contains information about the address or URL of a page that a user might be visiting from. This information can be used in analytics to track how many users from your page visit freecodecamp.org, for example. Setting the rel attribute to noreferrer omits this information from the HTTP request.

### font-size
html {
  font-size: 62.5%;
} This will set the default font size for your web page to 10px (the browser default is 16px). 16 x 0.625 = 10. This will make it easier for you to work with rem units later, as 2rem would be 20px.

## CSS Grid
main {
  display: grid;
  grid-template-columns: 1fr 94rem 1fr;
} In this case, your parent element is the main element. Set the content to have a three-column layout by adding a grid-template-columns property with a value of 1fr 94rem 1fr. This will create three columns where the middle column is 94rem wide, and the first and last columns are both 1 fraction of the remaining space in the grid container.

# GRID GENERATOR 
https://angrytools.com/css-grid/

### minmax
Use the minmax function to make your columns responsive on any device. The minmax function takes two arguments, the first being the minimum value and the second being the maximum. These values could be a length, percentage, fr, or even a keyword like max-content.

Wrap each of your already defined values of the grid-template-columns property in a minmax function, using each value as the second argument. The first argument should be 2rem, min-content, and 2rem respectively.

### row-gap
To add space between rows in the grid layout

### grid-column
.heading {
  grid-column: 2 / 3;
} set the grid-column property to 2 / 3. This will tell the .heading element to start at grid line 2 and end at grid line 3.

Remember that the grid-column property determines which columns an element starts and ends at. There may be times where you are unsure of how many columns your grid will have, but you want an element to stop at the last column. To do this, you can use -1 for the end column.

### repeat() 
he CSS repeat() function is used to repeat a value, rather than writing it out manually, and is helpful for grid layouts. For example, setting the grid-template-columns property to repeat(20, 200px) would create 20 columns each 200px wide.

### object-fit: cover;
The object-fit property tells the browser how to position the element within its container. In this case, cover will set the image to fill the container, cropping as needed to avoid changing the aspect ratio.

### ::first-letter
The ::first-letter pseudo-selector allows you to target the first letter in the text content of an element.

### transform-origin
The transform-origin property is used to set the point around which a CSS transformation is applied. For example, when performing a rotate (which you will do later in this project), the transform-origin determines around which point the element is rotated.

Transform-origin property of 0% 0% will offset the origin point by 0% from the left and 0% from the top, setting it to the top left corner of the element.

### keyframes
The @keyframes at-rule is used to define the flow of a CSS animation. Within the @keyframes rule, you can create selectors for specific points in the animation sequence, such as 0% or 25%, or use from and to to define the start and end of the sequence.

@keyframes rules require a name to be assigned to them, which you use in other rules to reference. For example, the @keyframes freeCodeCamp { } rule would be named freeCodeCamp.

Time to start animating. Create a @keyframes rule named wheel.

You now need to define how your animation should start. To do this, create a 0% rule within your @keyframes wheel rule. The properties you set in this nested selector will apply at the beginning of your animation.

As an example, this would be a 12% rule:

@keyframes freecodecamp {
  12% {
    color: green;
  }
}

### animation-name
The animation-name property is used to link a @keyframes rule to a CSS selector. The value of this property should match the name of the @keyframes.

The animation-duration property is used to set how long the animation should sequence to complete. The time should be specified in either seconds (s) or milliseconds (ms).

### animation-iteration-count
animation-iteration-count property sets how many times your animation should repeat. This can be set to a number, or to infinite.

### animation-timing-function
The animation-timing-function property sets how the animation should progress over time. There are a few different values for this property, but you want the Ferris wheel animation to run at the same rate from start to finish.

Examples: linear, ease-in-out

### overflow: hidden
Hidde the two scrollbars