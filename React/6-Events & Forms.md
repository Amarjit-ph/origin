# Events & Forms
HTML form elements work a bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:
```js
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>

```
# Event

Handling events with React elements is very similar to handling events on DOM elements.

There are some syntax differences:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

```js
<button onClick={activateLasers}>Activate Lasers</button>
```

## Event Handlers

A good practice is to put the event handler as a method in the component class:

```js
class Football extends React.Component {
  shoot() {
    alert('Great Shot!');
  }
  render() {
    return <button onClick={this.shoot}>Take the shot!</button>;
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

## Passing Arguments

If you want to send parameters into an event handler, you have two options:

1.Make an anonymous arrow function: Send "Goal" as a parameter to the shoot function, using arrow function:

```js
class Football extends React.Component {
  shoot = (a) => {
    alert(a);
  };
  render() {
    return <button onClick={() => this.shoot('Goal')}>Take the shot!</button>;
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

2.Bind the event handler to this.

Note that the first argument has to be this.

```js
class Football extends React.Component {
  shoot(a) {
    alert(a);
  }
  render() {
    return (
      <button onClick={this.shoot.bind(this, 'Goal')}>Take the shot!</button>
    );
  }
}

ReactDOM.render(<Football />, document.getElementById('root'));
```

# Forms

Just like in HTML, React uses forms to allow users to interact with the web page.

HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state. For example, this form in plain HTML accepts a single name:

```js
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
```

## Handling Forms

Handling forms is about how you handle the data when it changes value or gets submitted.

- In HTML, form data is usually handled by the DOM.
- In React, form data is usually handled by the components.

When the data is handled by the components, all the data is stored in the component state. You can control changes by adding event handlers in the onChange attribute:

Example: Add an event handler in the onChange attribute, and let the event handler update the state object:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  };
  render() {
    return (
      <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```

# Conditional Rendering

If you do not want to display the h1 element until the user has done any input, you can add an if statement.

Look at the example below and note the following:

1. We create an empty variable, in this example we call it header.
2. We add an if statement to insert content to the header variable if the user has done any input.
3. We insert the header variable in the output, using curly brackets.

Example: Display the header only if username is defined:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  };
  render() {
    let header = '';
    if (this.state.username) {
      header = <h1>Hello {this.state.username}</h1>;
    } else {
      header = '';
    }
    return (
      <form>
        {header}
        <p>Enter your name:</p>
        <input type="text" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```

# Submitting Forms

You can control the submit action by adding an event handler in the onSubmit attribute:

Example: Add a submit button and an event handler in the onSubmit attribute:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
  }
  mySubmitHandler = (event) => {
    event.preventDefault();
    alert('You are submitting ' + this.state.username);
  };
  myChangeHandler = (event) => {
    this.setState({username: event.target.value});
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input type="text" onChange={this.myChangeHandler} />
        <input type="submit" />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```

# Multiple Input Fields

You can control the values of more than one input field by adding a name attribute to each element.When you initialize the state in the constructor, use the field names. To access the fields in the event handler use the event.target.name and event.target.value syntax.

To update the state in the this.setState method, use square brackets [bracket notation] around the property name.

Example: Write a form with two input fields:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  };
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```

# Validating Form Input

You can validate form input when the user is typing or you can wait until the form gets submitted.

Example: When you fill in your age, you will get an alert if the age field is not numeric:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    if (nam === 'age') {
      if (!Number(val)) {
        alert('Your age must be a number');
      }
    }
    this.setState({[nam]: val});
  };
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```

# Adding Error Message

Error messages in alert boxes can be annoying, so let's make an error message that is empty by default, but displays the error when the user inputs anything invalid:

Example: When you fill in your age as not numeric, an error message is displayed:

```js
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';
    if (nam === 'age') {
      if (val != '' && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({errormessage: err});
    this.setState({[nam]: val});
  };
  render() {
    return (
      <form>
        <h1>
          Hello {this.state.username} {this.state.age}
        </h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        {this.state.errormessage}
      </form>
    );
  }
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
```
