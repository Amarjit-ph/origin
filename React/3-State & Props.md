# State & Props

Props are used to pass data, whereas state is for managing data. Data from props is read-only, and cannot be modified by a component that is receiving it from outside. State data can be modified by its own component, but is private (cannot be accessed from outside)

# Props

Props are arguments passed into React components. Props are passed to components via HTML attributes.

React Props are like function arguments in JavaScript and attributes in HTML.

To send props into a component, use the same syntax as HTML attributes:

```js
const myelement = <Car brand="Ford" />;
```

The component receives the argument as a props object,<br/> Use the brand attribute in the component:

```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}
```

# Passing Data
Props are also how you pass data from one component to another, as parameters.

```js
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>;
  }
}

class Garage extends React.Component {
  render() {
    return (
      <div>
        <h1>Who lives in my garage?</h1>
        <Car brand="Ford" />
      </div>
    );
  }
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```

# Props in the Constructor

If your component has a constructor function, the props should always be passed to the constructor and also to the React.Component via the super() method.

```js
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.model}!</h2>;
  }
}

ReactDOM.render(<Car model="Mustang" />, document.getElementById('root'));
```

# Destructuring of Props
```js
import React from 'react';

const Greet = props =>{
	// Destructuring
	const {active, activeStatus} = props;
	return (
		<div>
			<div className="XYZ">
			<h3> {active} </h3>
			</div>

			<div className="PQR">
				<h1>{activeStatus}</h1>
			</div>
		</div>
		)
}
export default Greet;

```

# Props in Functional Components
```js
import React from 'react';
import ReactDOM from 'react-dom';

// functional component to illustrate props
function DemoComponent(props){
	return(
		<div>
			{/*accessing information from props */}
			<h2>Hello {props.user}</h2>
			<h3>Welcome to Taj Maha;</h3>
		</div>
	);
}

ReactDOM.render(
	// Passing props
	<DemoComponent user = "Harsh Agarwal" />,
	document.getElementById("root")
);

```
# State

React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.

# Creating State Object

```js title="Creating State Object"
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {brand: 'Ford'};
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}
```

# Using State Object

```js title="Using State Object"
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964,
    };
  }
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
      </div>
    );
  }
}
```

# Changing State

```js title="Changing State"
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState({color: 'blue'});
  };
  render() {
    return (
      <div>
        <h1>My {this.state.brand}</h1>
        <p>
          It is a {this.state.color}
          {this.state.model}
          from {this.state.year}.
        </p>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
```
