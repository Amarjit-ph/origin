# Layout
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

# Display
The display property specifies if/how an element is displayed.
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is block or inline.

```css title="Display Properties"
div{
  display: block | inline ;
  display: none;
  visibility:hidden;
}
```
## Block level Elements

A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).

``` html title="Block level Elements"
<div> 
<h1> - <h6>
<p>
<form> 
<header>
<footer>
<section>
```

## Inline Elements
An inline element does not start on a new line and only takes up as much width as necessary.

This is an inline `<span>` element inside a paragraph.

```html title="Inline Elements"
<span>
<a>
<img>
```

# Position
The position property specifies the type of positioning method used for an element.
There are five different position values:

1. **Static** is not positioned in any special way, it is always positioned according to the normal flow of the page.

2. **Relative** is positioned relative to its normal position.Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

3. **fixed** is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

4. **absolute** is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

5. **sticky** is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed)

```css
Static   =  Position in Normal flow of page
Relative =  Position in relative to its normal position
Absolute =  Position relative to the nearest positioned ancestor
Fixed    =  Position relative to the viewport
Sticky   =  Position based on user scroll position

Position are mostly used with top, right, bottom, and left properties
```

# Float 
The `float` property is used for positioning and formatting content 

Example : let an image float left to the text in a container will make image move left and right will be texts that flow with the image.

- **left** - The element floats to the left of its container
- **right** - The element floats to the right of its container
- **none** - The element does not float (will be displayed just where it occurs in the text). This is default
- **inherit** - The element inherits the float value of its parent
In its simplest use, the float property can be used to wrap text around images.

# Clear
The `clear` property specifies what elements can float beside the cleared element and on which side.

- **none** - Allows floating elements on both sides. This is default
- **left** - No floating elements allowed on the left side
- **right** - No floating elements allowed on the right side
- **both** - No floating elements allowed on either the left or the right side
- **inherit** - The element inherits the clear value of its parent
The most common way to use the clear property is after you have used a float property on an element.

# Height & Width

The height and width properties are used to set the height and width of an element.

The height and width properties do not include padding, borders, or margins. It sets the height/width of the area inside the padding, border, and margin of the element.

- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm etc.
- % - Defines the height/width in percent of the containing block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value

``` css title="Height/Width"
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```



# Max Width
A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Setting the width of a block-level element will prevent it from stretching out to the edges of its container. 

Then, you can set the margins to auto, to horizontally center the element within its container. The element will take up the specified width, and the remaining space will be split equally between the two margins:

[Max-with with Margin Auto in W3 School](https://www.w3schools.com/css/tryit.asp?filename=trycss_max-width)
