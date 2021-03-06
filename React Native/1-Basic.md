# React Native 
Learn once, write anywhere.

React Native is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.

1. IMPORT A LIBARARY TO HELP CREATE A COMPONENT
2. CREATE A COMPONENT
3. CREATE STYLE SHEET
4. RENDER IT TO THE DEVICE OR EXPORT

## EXAMPLE 
1.IMPORT A LIBRARY TO HELP CREATE A COMPONENT
``` javascript
import React from 'react';
import { Text, StyleSheet } from 'react-native';
```
2.CREATE A COMPONENT
``` javascript
const ComponentsScreen = () => {
    return <Text style={style.textStyle} > This is the Components Screen</Text>
}
```
3.STYLE
``` javascript
const style = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});
```

4.RENDER IT TO THE DEVICE OR EXPORT
``` javascript
AppRegistry.registerComponent('Albums', () => App);
export default ComponentsScreen;
```

# JSX Rules

1. We can Nest different JSX elements like Normal HTML
2. We can configure different JSX elements using Props	
3. We can refer to JS variables inside of a JSX block by using curly braces '{ }'
4. We can assign JSX elements to a variable , then show that variable inside of a JSX block:

``` const greeting = <Text> Hello </Text> ```

``` js
const ComponentsScreen = () => {
    const greeting = 'HELLO';
    return (
        <View>
            <Text style={style.textStyle} > This is the Components Screen</Text>
            <Text>{greeting}</Text>
        </View>
        )
}
```

# List Building with Style

FlatList Element :
1. Turns an array into a list of elements
2. We are required to pass in a 'props' of 'data - the array of data that we are going to create a bunch of elements out of
3. Also required to pass in a 'renderItem' prop - function that will return each individual item into an element
4. If you are coming from react on the web, you might used to 'mapping' an array of data to build a list - FlatList is better with React native

``` javascript
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend 1', Age: 20 },
        { name: 'Friend 2', Age: 20 },
        { name: 'Friend 3', Age: 20 },
        { name: 'Friend 4', Age: 20 },
        { name: 'Friend 5', Age: 20 },
        { name: 'Friend 6', Age: 20 },
        { name: 'Friend 7', Age: 20 },
        { name: 'Friend 8', Age: 20 },
        { name: 'Friend 9', Age: 20 },
        { name: 'Friend 10', Age: 20 }
    ];
    return (
        <FlatList
            data={friends}
            keyExtractor={friend => friend.name}
            renderItem={({ item }) => {
                //element == {item :{ name : 'Friend 1'}, index: 0  }
                return <Text style={Styles.textStyle}>{item.name}-Age:{item.Age}</Text>
            }
            } />
    );
};

const Styles = StyleSheet.create({
    textStyle: {
        padding: 10.5,
        borderWidth: 1.5,
        borderColor: '#d6d7da',
    }
});

export default ListScreen;
```


# Navigating Users Between Screens

Navigate User to ListScreen or ComponentsScreen

## 1.Buttons in React Native

1.Button - A simple Component for showing a button and detecting a press<br>
2.TouchableOpacity - Highly customizable component that can detect a press on just about any kind of element.


## 2. Stack Navigation

React Navigation/Stack Navigator Passes props to every component in the stack
Which contains methods that can navigate and other things

PROPS: 
```
Object {
  "navigation": Object {
    "actions": Object {
      "dismiss": [Function dismiss],
      "goBack": [Function goBack],
      "navigate": [Function navigate],
      "pop": [Function pop],
      "popToTop": [Function popToTop],
      "push": [Function push],
      "replace": [Function replace],
      "reset": [Function reset],
      "setParams": [Function setParams],
    },
    "addListener": [Function addListener],
    "dangerouslyGetParent": [Function anonymous],
    "dismiss": [Function anonymous],
    "dispatch": [Function anonymous],
    "emit": [Function emit],
    "getChildNavigation": [Function getChildNavigation],
    "getParam": [Function anonymous],
    "getScreenProps": [Function anonymous],
    "goBack": [Function anonymous],
    "isFirstRouteInParent": [Function isFirstRouteInParent],
    "isFocused": [Function isFocused],
    "navigate": [Function anonymous],
    "pop": [Function anonymous],
    "popToTop": [Function anonymous],
    "push": [Function anonymous],
    "replace": [Function anonymous],
    "reset": [Function anonymous],
    "router": undefined,
    "setParams": [Function anonymous],
    "state": Object {
      "key": "id-1582714791938-0",
      "routeName": "Home",
    },
  },
  "screenProps": undefined,
}
```


Using Stack Navigator to navigate to other components

``` javascript
const HomeScreen = (props) => {
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      onPress={() => props.navigation.navigate('Components')}
      title="go to components Demo"
    />

    <TouchableOpacity
      onPress={() => console.log('Press')}
    >
      <Text>Go to list Demo</Text>
    </TouchableOpacity>
  </View>
};
```



# Building Reusable component

1.CREATE FOLDER COMPONENTS IN SRC FOLDER
``` javascript
[SRC/COMPONENTS/IMAGEDETAIL.JS]
const ImageDetail = (props) => {
    return <View>
        <Text>{props.title} - {props.imageScore}</Text>
        <Image source={props.imageSource} />
    </View>
};
```

2.USE IT IN OTHER COMPONENTS 
``` javascript
[SRC/SCREENS/IMAGE.JS]
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <Text> Image Screen</Text>
            <ImageDetail 
            title={'Forest'} 
            imageSource={require('../../assets/forest.jpg')} 
            imageScore={1} />
            
            <ImageDetail 
            title={'Beach'} 
            imageSource={require('../../assets/beach.jpg')} 
            imageScore={2} />
            
            <ImageDetail 
            title={'Mountain'} 
            imageSource={require('../../assets/mountain.jpg')}
            imageScore={3} />
        </View>
    )
};
```

