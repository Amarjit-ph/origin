# Layout

LAYOUT SYSTEMS
1. BOX OBJECT MODEL - Use this to affect the positioning of single element   
2. FLEX BOX - Use this to Position multiple elements with common parent
3. POSTION - Use this to override Box object Model & Flex Box

BOX OBJECT MODEL -> | MARGIN | BORDER | PADDING | CONTENT |

## MARGIN
1. marginTop
2. marginBottom
3. marginLeft
4. marginRight

## BORDER
1. borderTopWidth
2. borderBottomWidth
3. borderLeftWidth
4. borderRightWidth

## PADDING
1. paddingTop
2. paddingBottom
3. paddingLeft
4. paddingRight

## CONTENT
1. Height
2. Width

## SHORTCUTS
* margin : Set the margin on all sides
* marginVertical : Set the margin on top and bottom 
* marginHorizontal : Set the margin on left and right
* padding : Set the padding on all sides
* paddingVertical : Set the padding on top and bottom
* paddingHorizontal : Set the padding on left and right
* borderWidth : Set border width on all sides

# Flex Box

To handle Some number of sibilings elements get laid out inside a parent 

``` html
<View>
    <Text> 1 </Text>
    <Text> 2 </Text>
    <Text> 3 </Text>
</View>
```


| Parent         | Child     |
|----------------|-----------|
| alignItems     | flex      |
| justifyContent | alignSelf |
| flexDirection  |           |



## 1. Align Items [Parent]
Used on parent or View to arranged the childs

`alignIterms: '****'`

Default : 'stretch'
1. stretch : Fill as much as horizontal like a stack
2. flex-start : Condense All child to left
3. center : Condense All child to Middle
4. flex-end : Condense All child to Right


## 2. Flex Direction [Parent]
Used on parent or View to control how childs are laid out vertically or horizontally.

`flexDirection:'******'`

Default : 'column'
1. column :  [VERTICALLY]
2. row : [HORIZONTALLY]

## 3. Justify Content [Parent]

Used on parent to control space between the childs, Work according to the flex Direction.

`justifyContent: '*******'`

1. flex-start : Give space at the end of content
2. flex-end :   Give space before the content
3. space-between : Give space between each content
4. space-around : Give space around all content

## 4. Flex Values [Child]
On Child to take up amount of screen which they want

`flex:1`

## 5. Align Self [Child]
Align self essentially overrides the value of a alignItems on the parent element.

`<b> alignSelf :' ****** '</b> `

1. stretch
2. flex-start 
3. center
4. flex-end

## 3. Position
how a single element gets laid out inside of a parent
Use to over-ride box Object Model and Flex box

`<b> position :' ****** '</b>`

1. relative - default [ Usual ]
2. absolute - Ignore by Sibilings but obey parents

Give spacing after everything is completed
1. Top :10
2. Bottom :10
3. Left :10
4. Right :10

Make Content take up Full screen
- top:0 
- right:0
- left:0
- bottom:0

## Shortcut for Full Screen
`...StyleSheet.absoluteFillObject`

# APPLYING LAYOUT SYSTEM
1. Apply box object model rules
2. Relative Position
  - Apply all flex box rules,considering siblings
  - Place element inside parents
3. Absolute Position
  - Apply some flex box rules, ignore all siblings
  - Apply top,left,right & bottom