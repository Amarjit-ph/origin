# Function
- Different ways of creating functions
- Anonymus functions
- Callback function & functions in function
- Default Arguments & Rest Operator
- Bind & More

# Introduction

A function is a block of code designed to perform a particular task, function is executed when "something" invokes it (calls it).

1. Functions are **"Code on Demand"**<br/>
2. Varaiables and constants created in functions **"belong"** to that function<br/>
3. Functions can take parameters and return a value<br/>
4. Functions can be stored inside a object<br/>
5. Functions can be called multiple times<br/>
6. Functions can be called **"directly"** and **"indirectly"**<br/>

**_ Functions are also object _**

```js title="Function"
function greet() {
  console.log('Hello');
}

console.log(dir(greet()));

/*
    greet();
    arguments: null;
    caller: null;
    length: 0;
    name: "greet";
    prototype: {
        constructor: ƒ;
    }
    __proto__: ƒ();
*/
```

```js title="Functions can also be stored in varaible"
const start = function start() {
  console.log('Game is starting..');
};
```

# Declaration & Expression

**Function Declaration** are Hoisted to top, can be declared anywhere in the file

```js title="Declaration"
function multiply(a, b) {
  return a * b;
}
```

**Function Expression** are Hoisted to top but not initialized/defined,can't be declared anywhere in the file

```js title="Expression"
const multiply = function (a, b) {
  return a * b;
};
```

## Anonymous function

```js title="Anonymus function"
const anonymus = (function () {
  // Some code
})();
```

## Arrow function

No Arguments / Parameters`() => { … }`<br/> Exactly one Parameter `arg => { … }`<br/> Exactly one expression in function body `(a, b) => a + b`<br/> More than one expression in function body<br/>

```js title="Arrow function"
(a, b) => {
  a *= 2;
  return a + b;
};
```

## Callback Function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```js title="Callback Function"
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```

# Rest Operator

The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

- Rest operator should always be the last parameter

```js title="Rest Operator"
//REST OPERATOR

const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const sum of numbers) {
    sum += num;
  }
  return sum;
};

sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

```js
// BEFORE REST

const sumUp = function () {
  let sum = 0;
  for (const num of argruments) {
    sum += num;
  }
  return sum;
};

sumUp(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

# Call, Apply & Bind

The **call()** method, you can write a method that can be used on different objects.<br/> The **apply()** method is similar to the **call()** but takes arguments as an array.<br/> The **bind()** method creates a new function that, when called, has its this keyword set to the provided value,<br/> with a given sequence of arguments preceding any provided when the new function is called.

```js title="Call"
var person = {
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
var person1 = {
  firstName: 'John',
  lastName: 'Doe',
};
var person2 = {
  firstName: 'Mary',
  lastName: 'Doe',
};
person.fullName.call(person1); // Will return "John Doe"
```

```js title="Apply"
var person = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};
var person1 = {
  firstName: 'John',
  lastName: 'Doe',
};
person.fullName.apply(person1, ['Oslo', 'Norway']);
```

```js title="Bind"
const obj = {
  name: 'AMARJIT',
  getName() {
    return this.name;
  },
};

const getName = obj.getName;
console.log(getName()); //Broken

//Bind from object
const getName = obj.getName.bind(obj);
console.log(getName());

//Bind with parameter
const getName = obj.getName.bind({name: 'Andrew'});
console.log(getName());
```

# Function Closure

A function can access all variables defined inside the function.

```js title="Function Closure"
function outer(outerVariable) {
  const outerNumber = 2198;

  return function inner(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
    console.log('Outer Number: ' + outerNumber);
  };
}

const newFunction = outer('Outside');
newFunction('Inside');
```
