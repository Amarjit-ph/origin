# Lists & Keys

First, let’s review how you transform lists in JavaScript.

Given the code below, we use the map() function to take an array of numbers and double their values. We assign the new array returned by map() to the variable doubled and log it:
```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

//This code logs [2, 4, 6, 8, 10] to the console.
```

# List

Lists are very useful when it comes to developing the UI of any website. Lists are mainly used for displaying menus in a website

In regular JavaScript, we can use arrays for creating lists. We can create lists in React in a similar manner as we do in regular JavaScript. We will see how to do this in detail further in this article. Let’s first see how we can traverse and update any list in regular JavaScript. We can use the **map()** function in JavaScript for traversing the lists.

```js title="List"cl,ear
const numbers = [1, 2, 3, 4, 5];

const updatedNums = numbers.map((number) => {
  return <li>{number}</li>;
});

ReactDOM.render(<ul>{updatedNums}</ul>, document.getElementById('root'));
```

## Rendering lists inside Components

In the above code in React, we had directly rendered the list to the DOM. But usually this not a good practice to render lists in React. We already have talked about the uses of Components and had seen that everything in React is built as individual components.

```js title="List Inside Component"
function Navmenu(props) {
  const list = props.menuitems;

  const updatedList = list.map((listItems) => {
    return <li>{listItems}</li>;
  });

  return <ul>{updatedList}</ul>;
}

const menuItems = [1, 2, 3, 4, 5];

ReactDOM.render(
  <Navmenu menuitems={menuItems} />,
  document.getElementById('root'),
);
```

## Ideal Way to render a list

```js title="The Ideal Way to Render a List"
function IdiomaticReactList(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}
```

# Key

A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used to React to identify which items in the list are changed, updated, or deleted. In other words, we can say that keys are used to give an identity to the elements in the lists.

- Keys Must Only Be Unique Among Siblings

```js
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
  <li key={number.toString()}>{number}</li>
));
```

## Correct Key Usage

Keys only make sense in the context of the surrounding array.

For example, if you extract a ListItem component, you should keep the key on the `<ListItem />` elements in the array rather than on the `<li>` element in the ListItem itself.

```js
function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));
```
