# State

* What piece of data is changing in our app ?
* What type of data is it ?
* What is the data's strating (default) value ?

State is some data that can be shown in Ui and react automatically rerender
the Ui when data is change.

Array destructuring :
Create new variables or constant from an array

```
const colors = ['red,'green'];
const [ color_one, color_two] = colors;
```

React functional Component State
1. IMPORT : `import React, { useState } from 'react';`
2. DECLARE : `const [counter, setCounter] = useState(0);`
3. USE : `<Text> {counter} </Text>`
4. CHANGE :`setCounter(counter + 1);`


# Reducer

* Reducer : Function that Manages Changes to an Object
* Dispatch : Function to Execute the  Reducer and pass actions as  2nd Parameter
* Action : Second parameters to the Reducer or data to be changed

## Using Reducer
1. Import UseReducer : `import React, { useReducer } from 'react';`
2. Initialize Reducer : `const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });`
3. Create Reducer : 
``` javascript
const reducer = (state, action) => {

    // State === { red:number , green:number , blue:number }
    // action === { colorToChange :'red' || 'green' || 'blue', amount:15 || -15}

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
};
```
4. Dispatch : `dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })`

 
