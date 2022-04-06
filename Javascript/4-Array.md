# Array

In programming, an array is a collection of elements or items. Arrays store data as elements and retrieve them back when you need them.
JavaScript arrays are used to store multiple values in a single variable.

- Different ways of creating arrays
- Working with arrays
- Array methods
- Maps & Sets

# Iterable

Technical - Objects that implement the “iterable” protocol and have an @@iterator method (i.e.Symbol.iterator)

- To us humans - Objects where you can use the for-of loop.
- An Array-like Object - Objects that have a length property and use indexes to access items

Not every iterable is an array! Other iterables are (for example): NodeList, String, Map, Set

# Creating Array

```js
const number = [1,2,3];              Best & common
const moreNumber = new Array();      Constructor
const words = new Array(1,2,3);      Constructor with values
const array5 = new Array(5)          Length of array
const yetMoreNumber = Array.of(1,2)  Create from arguments
const number = Array.from("hi!")     Copy from iterable object
```

# Array Datatype

1. Similar type - `['Cooking','Sports'];`
2. Different type - `[30,'Max',{moreDetail:[]}];`
3. Multidimensional - `[[1,0.6],[-5.4,2.1]]`

```js title="Multidimensional"
const analyticsData = [
  [1, 0.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}
```

# Array Methods
These methods make coding a lot easier and also make your code look clean and easy to understand.
```js title="Array Methods"
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

/// METHODS
fruits.pop(); // Removes the last element ("Mango")
fruits.push('Kiwi'); //  Adds a new element ("Kiwi")
fruits.shift(); // Removes the first element "Banana"
fruits.unshift('Lemon'); // Adds a new element at beginning
```

<img src="https://github.com/Amarjit-ph/origin/blob/master/Javascript/Images/Array%20Methods.jpeg">

## 1. Splice

The splice() method can be used to add new items to an array: `fruits.splice(2, 0, "Lemon", "Kiwi");`

- First parameter (2) defines the position where new elements should be added
- Second parameter (0) defines how many elements should be removed.
- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

```js title="Splice"
/// ADDING ELEMENTS
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 2, 'Lemon', 'Kiwi');
// ["Banana", "Orange","Lemon", "Kiwi"]

/// REMOVING ELEMENTS
var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(0, 1);
/// ["Orange", "Apple", "Mango"]
```

## 2. Concatenation

The concat() method creates a new array by merging existing arrays.

```js title="Concatenation"
var arr1 = ['Cecile', 'Lone'];
var arr2 = ['Emil', 'Tobias', 'Linus'];
var arr3 = ['Robin', 'Morgan'];
var child = arr1.concat(arr2); // contact arr1 & arr2
var myChildren = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3

var myChildren = arr1.concat('Peter'); // merge with values
```

## 3. Slicing

The slice() method slices out a piece of an array into a new array.

```js title="Slicing"
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1); // Remove Banana and return remaining

var citrus = fruits.slice(1, 3);
/* The method then selects elements from the start argument, and up to the end argument. */
```

## 4. Index of

The indexOf() method searches the array for the specified item, and returns its position.

```js title="Index of"
const result = [1, 2, 2.5, 6, 6.8, 10, 2.5, 15];
result.indexOf(2.5); // 2
result.lastIndexOf(2.5); // 6

const personalData = [];
```

## 5. Find

The find() method returns the value of the first element in an array that pass a test

```js title="Find"
// FIND

const personData = [
  {name: 'Max', age: 1},
  {name: 'Manuel', age: 2},
  {name: 'Maxina', age: 3},
];
const data = personData.indexOf({name: 'Manuel'}); // -1

/* 
   SYNTAX

Arr.find((obj,idx,Arr)=>{
  return obj.name === 'Manuel'; // Reference Value
})

*/

const manuel = personData.find((person, idx, personData) => {
  return person.name === 'Manuel'; // Reference Value
});
```

```js
// FIND INDEX
const manuelIndex = personData.findIndex((obj, idx, personData) => {
  return person.name === 'Manuel'; // Index Value
});
```

## 6. For Each

The forEach() method calls a function once for each element in an array, in order.

```js title="For each"
let numbers = [65, 44, 12, 4];
let multiplied = [];
numbers.forEach((item, index, arr) => {
  multiplied.push(item * 10);
});
```

## 7. Map

The map() method creates a new array with the results of calling a function for every array element.

```js title="Map"
let numbers = [65, 44, 12, 4];
let result = numbers.map((item, index, arr) => {
  return item * 2;
});
```

## 8. Sort

The sort() method sorts the items of an array.

```js title="Sort"
let points = [40, 100, 1, 5, 25, 10];

// ASCENDING
points.sort(function (a, b) {
  return a - b;
});
// DESCENDING
points.sort(function (a, b) {
  return b - a;
});
```

## 9. Filter

The filter() method creates an array filled with all array elements that pass a test.

```js title="Filter"
var points = [40, 100, 1, 5, 25, 10];
const filtered = points.filter((point, index, points) => {
  return point > 30;
});

const filtered = points.filter((point) => point > 30);
// [ 40,100 ]
```

## 10. Reduce

The reduce() method reduces the array to a single value

```js title="Reduce"
var points = [40, 100, 1, 5, 25, 10];
const sum = points.reduce(
  (prevValue, curValue, curIndex, points) => {
    return prevValue + curValue;
  },
  0, // Inital Value
);
```

# Spread Operator

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments or elements are expected.

Spread syntax can be used when all elements from an object or array need to be included in a list of some kind.

```js title="Spread Operator"
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
```

# Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```js title="Destructuring"
const nameData = ['Amarjit', 'Pheiroijam', 'Mr', 30];
const firstName = nameData[0];
const lastName = nameData[1];

// Destructuring
const [firstName, lastName, ...otherInformation] = nameData;
```

```js title="Arrays & Object"
//ARRAY
let a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

// OBJECTS
({a, b} = {a: 10, b: 20});
console.log(a); // 10
console.log(b); // 20

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}
```

# Comparison

## Array

- Store data of any kind and length
- Iterable & special methods available
- Order is guaranteed
- Duplicates are allowed
- Zero-based index to access elements

## Sets

- Store data of any kind and length
- Iterable & special methods available
- Order is not guaranteed
- Duplicates are not allowed
- No index to access elements

## Maps

- Store data of any kind and length, any values are allowed
- Iterable & special methods available
- Order is guaranteed
- Duplicates key are not allowed
- Key based to access elements

**WORKING WITH SETS**<br/> Best for manage unique values

```js title="Set"
const ids = new Set([1, 2, 3]);
ids.add(2);
ids.delete(1);

for (const entry of ids.entries()) {
  console.log(entry[0]);
}
```

**WORKING WITH MAPS**<br/> The Map object holds key-value pairs and remembers the original insertion order of the keys

```js title="Map"
const personData = new Map([[person1, [{data: 'yesterday', price: 10}]]]);
console.log(personData.get(person1));
```
