# Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.

- Reusable
- Individual piece of User Interface
- Custom Html Element [ React Component ]
## Types of Components :

1. Class components
2. Function components
# Class Component

The component has to include the extends React.Component statement, this statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
When creating a React component, the component's name must start with an upper case letter.

The component also requires a render() method, this method returns HTML.
## RULES

- Uppercase First Letter is Important is React Class Component
- Must define Render function in React Class Component

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <p> This is from Header</p>;
  }
}
const jsx = (
  <div>
    <Header />
  </div>
);

ReactDOM.render(jsx, document.getElementById('root'));
```
# Constructor in Class Components

If there is a constructor() function in your component, this function will be called when the component gets initiated. The constructor function is where you initiate the component's properties. In React, component properties should be kept in an object called state.

```js
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: 'red'};
  }
  render() {
    return <h2>I am a Car!</h2>;
  }
}
```

# Nesting in Class Components

We can refer to components inside other components:

```js
class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

# Class Components in Files

React is all about re-using code, and it can be smart to insert some of your components in separate files.
To do that, create a new file with a .js file extension and put the code inside it.
Note that the file must start by importing React (as before), and it has to end with the statement export default Car;

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

export default Car;
```

# Class Component Props

Another way of handling component properties is by using props. Props are like function arguments, and you send them into the component as attributes.

React Props are like function arguments in JavaScript and attributes in HTML.

```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));
```

# Default Props Values in Class Components

Allow to past data through props and create default Props

```javascript
class Person extends Component {
  render() {
    return (
      <div>
        <p> Name: {this.props.name} </p>
        <p>EyeColor: {this.props.eyeColor}</p>
        <p>Age : {this.props.age} </p>
      </div>
    )
  }
}
  
Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
```
# Functional Component

Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves pretty much the same way as a Class component, but Class components have some additions

## RULES
- Uppercase First Letter is Important 
- Must Return HTML/JSX

```js
import React from 'react';
import ReactDOM from 'react-dom';

const Demo=()=>{
  return <h1>Hello World!</h1>;
}
ReactDOM.render(<Demo />, document.getElementById('root'));
```

# Default Props Values in Functional Components

Allow to past data through props and create default Props
```js
function Person(props) {
  return (
    <div>
      <p> Name: {props.name} </p>
      <p>EyeColor: {props.eyeColor}</p>
      <p>Age : {props.age} </p>
      <hr></hr>
    </div>
  )
}
  
Person.defaultProps = {
  name: "Rahul",
  eyeColor: "deepblue",
  age: "45"
}
```
