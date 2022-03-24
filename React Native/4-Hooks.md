# HOOKS
Hooks are used to add some type of functionality to functional components

{ useState } - Allow to use state in functional component
{ useEffect } - hook which allow some code to run only one time

* useState(()=>{})

Run the arrow function everytime the component is rendered
* useState(()=>{},[])

Run the arrow function only when the component is first rendered
* useState(()=>{},[value])

Run the arrow function only when the component is first rendered and when the 'value' changes

SEPARATE HOOKS FOR RE-USE

# Flat List
import {Flatlist} from 'react-native'

``` javascript 
<FlatList
    horizontal
    data={results}
    keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
        return <Text> {item.name}</Text>
    }}
/>
```

# Scroll View
On Parent View [FLEX:1]<br/>
Or Wrapped with [<> </>]

``` javascript
import { ScrollView} from 'react-native'
<ScrollView>
-- ELEMENTS TO SCROOL
</ScrollView>
```
# Navigation

* react-navigation@3.11.1
* react-native-gesture-handler@1.6.1
* react-native-screens@2.2.0
``` javascript 
import { createStackNavigator, createAppContainer } from 'react-navigation'
import IndexScreen from './src/screens/indexScreen'

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
});
export default createAppContainer(navigator);
```


# Independent Navigation
``` javascript 
import { withNavigation } from 'react-navigation'
/*-- 
        
        FUNCTION COMPONENT 
        WITH ACCESS TO NAVIGATION
        USING PROPS

--*/

//ADDING NAVIGATION TO PROPS THIS FUNCTIONAL COMPONENT ^
export default withNavigation(ResultList); 
```
# Navigation With Data
1.PASS DATA WITH NAVIGATION
``` javascript
navigation.navigate('show',{id:item.id})}>
```
2.RETRIEVE PARAMS FROM NAVIGATION

``` javascript
const showScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    return (
        <View>
            <Text> Show Screen {id}</Text>
        </View>
    )
}
