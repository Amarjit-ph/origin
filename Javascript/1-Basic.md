
# Javascript

JavaScript is a dynamic, weakly typed programming language, Which is compiled at runtime, It can be executed as a part of webpage in a browser or directly on any machine.

Created at 1995 by Brendan Eich While he was an engineer at Netscape.

Created to make webpages more dynamic originally called LiveScript but due to popularity of Java It is called JavaScript.

- Dynamic weakly typed programming language
- Interpreted on the fly
- Hosted language Runs in different environments
- Most prominent use : Run code in a browser

## Dynamic & Weakly Typed
Not pre-compiled instead parsed and Compile Fast (In browser), Code evaluated and executed in runtime, Code can change at runtime.

Data types are assumed automatically, You don't define that some variable has to hold a certain value, Data types can change.

## Javascript Execution

**Javascript Execution**<br/>Your code ~ JavaScript engine ~ Effect on webpage

**JavaScript Engine** <br/>Parse Code ~ Compile to machine code ~ Execute Machine Code <br/>[ Single Thread ]

- V8 (chrome)
- SpiderMonkey (Firefox)
- Chakra (Edge)

## Host Environment

**Browserside**

1. JavaScript was invented to create more dynamic websites by executing in the browser
2. JavaScript can manipulate the HTML code,CSS, send background Http requests & much more
3. JavaScript CAN’T access the local filesystem, interact with the operating system etc.

**Server Side**

1. Google’s JavaScript Engine (V8) was extracted to run JavaScript anywhere (called “Node.js”)
2. Node.js can be executed on any machine and is therefore often used to build web backends (server-side JavaScript)
3. Node.js CAN access the local filesystem,interact with the operating system etc. It Can't manipulate HTML or CSS

```
HISTORY OF JAVASCRIPT

LiveScript - 1995
Microsoft releases its own version for IE

ECMA = European Computer Manufactures Association
A standards organization that evolves the ECMAScript language

Javascript - The most famous ECMAScript implementation
(other Example "ActionScript" or "Jscript")

ECMA - Late 1996
ES1 1997
ES2 1998
ES3 1999
ES4 Abandoned
ES5 2009
ES6 2015
ES7 2016
ES8 2017
ES9 2018
```

# Adding Javascript

```js title="Internal"
<script>alert("Hello World") </script>
```

```js title="External"
<script src="assets/scripts/app.js"></script>
```

# Variables & Constants

Variables is a data container - let userName = 'Max';<br/>
Where the value can change - userName = 'Maxi';

Constant is also a data container - const total = 15; <br/>
Where value must not change - totalUser = 20;

**Naming Convention**

```js
let userName        [ camelCase ]
let ageGroup5       [ Only letter & digits ]
let $kindOfSpecial  [ Starting with $ ]
let \_internalValue [ Starting with \_ ]
```

**Constant & Event Listener**

```js
const ATTACK_VALUE = 10;  [Constant]
onClick/clickHandler      [Event Listener]
```

**Bad Practice**

```js
let user_name;   [ Bad ]
let 21Players;   [ Starting with Digits]
let user-b;      [ No special Characters ]
let let;         [ No keywords Allowed ]

```

# Operators

#### Arithmetic Operators

| Operator | Description                  |
| -------- | ---------------------------- |
| +        | Addition                     |
| -        | Subtraction                  |
| \*       | Multiplication               |
| \*\*     | Exponentiation (ES2016)      |
| /        | Division                     |
| %        | Modulus (Division Remainder) |
| ++       | Increment                    |
| --       | Decrement                    |

#### Assignment Operators

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

#### Comparison Operators

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| >        | greater than                      |
| <        | less than                         |
| >=       | greater than or equal to          |
| <=       | less than or equal to             |
| ?        | ternary operator                  |

#### Logical Operators

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

# Data types

**Primitives**

1. Numbers - 2,-3,22.66
2. Strings - 'Hi', "Hello"
3. Booleans - true / false
4. Null & Undefine

**Reference**

1. Objects - { name: 'Max', age: 31 }
2. Arrays - [1, 3, 5] ( Special Object )
3. Function - function functionName(){}
```js
/// String Interpolation
(${defaultResult}+10)*3/2-1)
```

### Important
```
Primitives are copied by value
References are copied by reference
```



# Functions

A function is a procedure or set of statements that performs a specific task or calculates a value.

```js title="Function"
function greetUser(name) {
  alert(`hi ${name}`);
}

greetUser('Max');
```

## Global & Local Scope

```js title="Global Scope"
let result; // GLOBAL
function add(num1, num2) {
  result = num1 + num2; //Success
}
```

```js title="Local Scope"
function add(num1, num2) {
  let result; //LOCAL
  result = num1 + num2;
}

console.log(result); //Error
```

```js title="Shadowed variables"
let userName = 'Max';
function greetUser(name) {
  let userName = name;
  alert(userName);
}
userName = 'Manu';
greetUser('Max');

//This will actually show an alert
//that says 'Max' (NOT 'Manu').
```

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is not allowed on the same level/ in the same scope.

# Type Conversion

**FYI - Every HTML input will always be string**

- parseInt() - convert string into number
- parseFloat() - convert string into float
- toString() - convert to String

**SHORTCUT**

- Conversion to number (currentResult = currentResult + +value)
- (A=A+B) = (A+=B)
- (A=A+1) = (A++)
- (++A) = Increment before assigning
- (A++) = Increment after assignig

# Array

JavaScript arrays are used to store multiple values in a single variable.

```js title="Array"
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.pop(); // Removes the last element
fruits.push('Kiwi'); //  Adds a new element ("Kiwi") to fruits
```

# Objects

```js title="Objects"
var car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

//ACCESSING OBJECT PROPERTIES
objectName.propertyName;
objectName['propertyName'];
```

# Null & Undefined

**Undefined**

1. Default value of uninitialized variables
2. You shouldn’t assign undefined as a value manually

**Null**

1. Never assumed by default
2. You can assign this is a value if you want to “reset” / “clear” a variable

**NaN**

1. Technically, it’s of type number and can therefore be used in calculations
2. It yields a new NaN and it’s the result of invalid calculations

### Types

- typeof 'Max' = String
- typeof 2 = Number
- typeof [1,2,3] = Object
- typeof {name:'Amarjit'} = Object
- typeof undefined = undefined
- typeof null = object
- typeof NaN = Number
