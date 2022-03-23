# Flex Box

## Introduction
The Flexbox Layout aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word “flex”).

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
# Display Flex
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

```css
.container {
  display: flex; /* or inline-flex */
}
```

# Flex Direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container.

1. row (default): left to right
2. row-reverse: right to left
3. column: top to bottom
4. column-reverse: bottom to top

```css
.container {
  flex-direction: row | row-reverse | 
  column | column-reverse;
}
```

# Flex Wrap 
Prevent overflow of items - [Flex Warp Visual Demo](https://css-tricks.com/almanac/properties/f/flex-wrap/)

```css
flex-wrap: nowrap | wrap | wrap-reverse

.flex-container {
  flex-wrap: wrap;
}
```

# Justify Content 

This defines the alignment along the main axis. It helps distribute extra free space leftover

#### [ MAIN AXIS ]

How the remaining space in the container will be distributed around the flex elements if there is any remaining spaces in the container.

1. Flex-start [Default] : Align items to the Beginning of the flex-container
2. Flex-end : Align items to the end of flex container
3. Center : Centers the content inside the flex container
4. Space-between : Separates the content with equal spaces with no spaces at the beginning or at the end of the container
5. Space-around : Separates the content with equal spaces and add spaces at the end of the container


```css
.container {
  justify-content: flex-start | flex-end | center | 
  space-between | space-around | space-evenly | start |
   end | left | right ... + safe | unsafe;
}
```


# Align Items 
This defines the default behavior for how flex items are laid out along the cross axis on the current line.

**[ CROSS AXIS ]**<br/>

1. Justify-content work along the main axis while align items work along the cross-axis
2. flex-start : Aligns items along the cross axis to the start of the flex container
3. lex-end : Align items along the cross axis to the end of flex container
4. Center : Centers the content inside the flex container along the cross axis
5. stretch [Default] : Stretches the element to fll up the container
```css
.container {
  align-items: stretch | flex-start | flex-end | center | 
  baseline | first baseline | last baseline | start | end
   | self-start | self-end + ... safe | unsafe;
}
```
# Align Self 

This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.

## [ SELF ]
```css
.item {
  align-self: auto | flex-start | flex-end |
  center | baseline | stretch;
}

Align Self affect a single flex element only inside the Flex container.
```


