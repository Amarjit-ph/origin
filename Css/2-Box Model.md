# Box Model

## Introduction
All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of:
**margins, borders, padding, and the actual content.** The image below illustrates the box model:

<img src="https://code-depot.netlify.app/img/Box-Model.png" />

Explanation of the different parts:

1. **Content** - The content of the box, where text and images appear
2. **Padding** - Clears an area around the content. The padding is transparent
3. **Border** - A border that goes around the padding and content
4. **Margin** - Clears an area outside the border. The margin is transparent


# Margin
Margins are used to create space around elements, outside of any defined borders.
``` css title="Margin"
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
  
  You can set the margin property to auto
  to horizontally center the element within its container.

  The element will then take up the specified width, and
  the remaining space will be split equally
  between the left and right margins.

  [Assign specific width to see the effect]
  
  margin: auto;
}

/* SHORT HAND */
div{
  margin: 25px 50px 75px 100px;
}
```
# Border
1. **Border Style** -
The border-style property sets the style of an element's four borders. This property can have from one to four values.

2. **Border Width** - The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick.

```css title="Border"
div{
  border-style: dotted | dashed | solid | double;
  border-width: 25px 10px 4px 35px; 
  /* TOP RIGHT BOTTOM LEFT */
  border-color: red;
}


/* SHORT HAND */
p {
  border: 5px solid red;
}
```



# Padding
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

``` css tile="Padding"
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;

  padding: 25px 50px 75px 100px;
}
```
