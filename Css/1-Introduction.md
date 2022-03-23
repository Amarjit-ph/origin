# Cascading Style Sheets

CSS describes how HTML elements are to be displayed on screen, paper, or in other media
CSS saves a lot of work. It can control the layout of multiple web pages all at once
External stylesheets are stored in CSS files


1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)


```css title="Inline Stying"
<h1 style="color:blue;text-align:center;">
This is a heading </h1>
```
```css title="External Styling"
h1 {
  color: blue;
  text-aling:center;
}
```

# Syntax
A CSS rule-set consists of a selector and a declaration block:

**Selector** - The selector points to the HTML element you want to style. 
**Declaration** - The declaration block contains one or more declarations separated by semicolons.

```css title="Selector & Declaration"
p {
  color: red;
  text-align: center;
}
```
```css
p is the selector in the example below
{ color: red; text-align: center; } is the Declarations
```

Each declaration includes a CSS property name and a value, separated by a colon.
Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.


# Selectors
CSS selectors are used to "find" (or select) the HTML elements you want to style.

1. **Class Selector** - Selects all elements with classname intro `.intro{ }`<br/>
2. **Id Selector** - Selects element with id firstname `#firstname{ }`<br/>
3. **Select All** - Selects all elements ` *{ }`<br/>
4. **Select Element** - Selects all paragraphs elements `p{ }`

``` css title="Element Inside Element or Class"
.class {
    color: white;
    p{
        color:green;
    }
}
```

# Colors
Colors are specified using predefined 

```css
1. Color Name    color:Red;
2. RGB           color:rgb(255, 255, 255);
3. RGBA          color:rgba(255, 255, 255,0.5);
4. HEX           color:#ff6347;
5. HSL           color:hsl(0, 100%, 50%);
```


# Text
CSS has a lot of properties for formatting text.

1. **Text Color** - The `color: blue;` property is used to set the color of the text.
2. **Text Alignment** - The `text-align: left;` property is used to set the horizontal alignment of a text.
3. **Text Decoration** - The `text-decoration: underline;` property is used to set or remove decorations from text.
4. **Text Transformation** - The `text-transform: lowercase;` property is used to specify uppercase and lowercase letters in a text.
5. **Text Indent** - The `text-indent : 50px` property is used to specify the indentation of the first line of a text
6. **Letter Spacing** - The `letter-spacing : 5px` property is used to specify the space between the characters in a text.
7. **Text Shadow** - The `text-shadow : 2px 2px black` property adds shadow to text.

## Font

1. **Font Family** - The CSS font properties define the font family, boldness, size, and the style of a text.
2. **Font Style** - The right font can create a strong identity for your brand.
3. **Font Size** - The `font-size : 50px` property sets the size of the text.

```css title="Fonts"
.p {
  font-family: "Times New Roman", Times, serif;
  font-style: normal;
  font-size: 30px;
}
```

# Icons
To use the Font Awesome icons, go to fontawesome.com, sign in, and get a code to add in the `<head> `section of your HTML page:

``` javascript title="ICONS"
/* https://fontawesome.com */
<i class="fas fa-cloud"></i>
```

# List
1. **Unordered lists** `<ul>` - the list items are marked with bullets<br/>
2. **Ordered lists** `<ol>` - the list items are marked with numbers or letters

```css
ul{
  list-style-type: circle | square | upper-roman | lower-alpha ;
  list-style-image: url('sqpurple.gif');
  list-style: square inside url("sqpurple.gif");
}
```

## Background
The CSS background properties are used to define the background effects for elements.
1. **background-color** - Sets all the background properties in one declaration
2. **background-image** - Sets the background image for an element
3. **background-repeat** - Sets how a background image will be repeated
4. **background-attachment** - Sets the starting position of a background image

```css
body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;

  /* SHORT HAND */
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```

# Opacity
The opacity property can take a value from 0.0 - 1.0. The lower value, the more transparent:
```css title="Opacity"
img {
  opacity: 0.5;
}

/* Opacity when hover */
img:hover {
  opacity: 1.0;
}
```
