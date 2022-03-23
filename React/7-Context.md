# Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

[React Context Explained](https://www.youtube.com/watch?v=rFnfvhtrNbQ)

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

# When to Use Context

Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

```js title="Example"
/* 
Context lets us pass a value deep into the component tree
without explicitly threading it through every component.
Create a context for the current theme (with "light" as the default).
*/
const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    /*
    Use a Provider to pass the current theme to the tree below.
    Any component can read it, no matter how deep it is.
    In this example, we're passing "dark" as the current value.
    */
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
}

/*
A component in the middle doesn't have to
pass the theme down explicitly anymore.
*/

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  /*
  Assign a contextType to read the current theme context.
  React will find the closest theme Provider above and use its value.
  In this example, the current theme is "dark".
  */
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }
}
```
