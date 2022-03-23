
# REACT
A JavaScript library for building user interfaces
- Declarative - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

- Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

- Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.
Introduction


# Introduction 
Everything that is there to learn about React and the ecosystem in 2021 <br/>
[React Developer Roadmap](https://roadmap.sh/react)

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

# Exploring JSX

It is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript. JSX produces React “elements”.

1. JSX stands for JavaScript XML.
2. JSX allows us to write HTML in React.
3. JSX makes it easier to write and add HTML in React.

```jsx title="JSX"
const myelement = (
  <div>
    <h1> Amarjit Pheiroijam </h1>
    <h2> Chandigarh University </h2>
    <h3> Computer Science Engineer </h3>
  </div>
);
ReactDOM.render(myelement, document.getElementById('root'));
```

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript, JSX produces React “elements”.

# Expressions in JSX

After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects. This means that you can use JSX inside of if statements and for loops, assign it to variables, accept it as arguments, and return it from functions:

`{}` - Use Bracket to write Javascript to render template<br/> `()` - JSX should be inside a bracket

```js title="JSX Expression"
let user = {
  name: 'Amarjit Pheiroijam',
  age: 23,
  Address: 'Imphal',
};

let template2 = (
  <div>
    <h1> NAME : {user.name} </h1>
    <h1> AGE : {user.age} </h1>
    <h1> LOCATION : {user.Address} </h1>
  </div>
);
```

# Conditional Rendering in JSX

In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

```js title="Conditional Rendering"
var user = {
  name: 'Amarjit Pheiroijam',
  age: 29,
  Address: 'Imphal',
};

function getLoc(location) {
  if (location) {
    return <h1>LOCATION : {location}</h1>;
  } else {
    return undefined;
  }
}
var template3 = (
  <div>
    <h1> NAME : {user.name ? user.name : 'Anonymous'} </h1>
    <h1> AGE: {user.age && user.age >= 18 && user.age}</h1>
    {getLoc(user.Address)}
  </div>
);
```
