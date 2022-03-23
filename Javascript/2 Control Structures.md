# Control Structures

- Conditional Statements
- Boolean Values & Operators
- Loops in JavaScript
- Statements vs Expressions
- Error handling

# Boolean Operators

```js
Check for value equality        [ a == b ]
Check for value inequality      [ a != b ]
Check for value & type equality [ a === b ]
Check for value greater         [ a > b / a < b ]
Check for value greater & equal [ a >= b / a <= b ]
Check if both values are true   [ a && b ]
Check if either value is true   [ a || b ]
Check if value is false         [ !a ]
```

**_Boolean Tricks & Shorthand_**

```
- Boolean Coercion via double
  NOT (opposite) operator - `!!1`
- Default value assignment via
  OR operator - `const name = someInput || ‘Max’`
- Use value if condition is true
  via AND operator - `const name = isLoggedIn && ‘Max’`
```

# Logical Operator

```js title="And"
if (
  calculationtype !== 'ADD' &&
  calculationtype !== 'SUBTRACT' &&
  calculationtype !== 'DIVIDE' &&
  calculationtype !== 'MULTIPLY'
) {
  return;
}
```

```js title="Or"
if(
    calculationtype == 'ADD' ||
    calculationtype == 'SUBTRACT' ||
    calculationtype == 'MULTIPLY' ||
    calculationtype == 'DIVIDE' ||
){
    caculate();
}
```

# Operator Precedence

Operator precedence determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.

```js title="Operator Precedence"
console.log(3 + 4 * 5); // 3 + 20
// expected output: 23

console.log(4 * 3 ** 2); // 4 * 9
// expected output: 36

let a;
let b;

console.log((a = b = 5));
// expected output: 5
```

**_REFERENCE WEBSITE_** - [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

# Truthy & Falsy Values

```js
Any Number (incl. negative numbers)            = [true]
Any Non-empty string (incl. “false”)           = [true]
{}, [] & all other objects or arrays           = [true]

0                                              = [false]
” ” (empty string)                             = [false]
null, undefined, NaN                           = [false]
```

```js title="Conventional"
const nameInput = ‘Max’;
if (nameInput === ‘Max’) { … } //WORK
```

```js title="Truthy Value"
const nameInput = ‘Max’;
if (nameInput) { … } // ALSO WORK
```

# Ternary Operator

```js title="Ternary operator"
//Ternary Operator
const userName = isLogin ? ‘Max’ : null

const userName = if (isLogin) {
return ‘Max’;
} else {
return null;
}
```

# If Else

```js title="If"
const enteredNumber = getUserNumberInput();
if (
  (calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE') ||
  !enteredNumber
) {
  return;
}
```

```js title="If Else"
if (calculation == 'ADD') {
  console.log('+');
} else {
  console.log('Not Add');
}
```

```js title="Else If"
const initialResult = currentResult;
let mathOperator;
if (calculationType === 'ADD') {
  currentResult += enteredNumber;
  mathOperator = '+';
} else if (calculationType === 'SUBTRACT') {
  currentResult -= enteredNumber;
  mathOperator = '-';
} else if (calculationType === 'MULTIPLY') {
  currentResult *= enteredNumber;
  mathOperator = '*';
} else if (calculationType === 'DIVIDE') {
  currentResult /= enteredNumber;
  mathOperator = '/';
}
```

# Statements vs Expressions

**_Statement:_** A unit of code representing one instruction or more, usually starts with a language reserved keyword and ends, explicitly or implicitly, with a statement terminator. Examples of statements

```js title="Statement"
> 3;
> let x = 3;
> if () {}
> for () {}
> while () {}
```

**_Expression:_** A unit of code that resolves to a value, as instance, literals & operators. Examples for expressions:

```js title="Expression"
> 3
> 1 + 2
> "expression"
> fn()
> []
> {};
```

:::note Remember

**Statement** - One instruction<br/> **Expression** - Return a value

:::

# Switch Statement

Use the switch statement to select one of many code blocks to be executed.

```js title="Switch"
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}
```

# Loops

Execute code multiple times

### For Loop

Execute code a certain amount of times (with counter variable)

```js title="For Loop"
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

### for-of loop [Array]

Execute for every element in an array

```js title="For of Loop"
for (const el of array) {
  console.log(el);
}
```

### for-in loop [Object]

Execute for every key in an object

```js title="For in Loop"
for (const key in obj) {
  console.log(key);
  console.log(obj[key]);
}
```

### while loop

Execute code as long as a condition is true

```js title="While Loop"
while (isLoggedIn) {
…
}
```

### Do while loop

Execute code as long as a condition is true

```js title="Do while"
//DO WHILE
do {
  console.log('++');
} while (j < 10);
```

## Break & Continue

The break statement "jumps out" of a loop.

```js title="Break"
//BREAK
for (i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log('The number is ' + i + '\n');
}
```

The continue statement "jumps over" one iteration in the loop.

```js title="Continue"
for (i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log('The number is ' + i + '\n');
}
```

# Error Handling

Some errors can‘t be avoided (beyond your control as a developer)

**User Input Errors** <br/>Example : User enters text like ‘hi’ instead of a number<br/><br/>**Network Errors** <br/>Example : Server is offline

Throw and catch errors to fail gracefully or recover if possible

- The `try` statement lets you test a block of code for errors.
- The `catch` statement lets you handle the error.
- The `throw` statement lets you create custom errors.
- The `finally` statement lets you execute code, after try and catch, regardless of the result.

```js title="Try & Catch"
//TRY & CATCH
try {
  //Block of code to try
} catch (err) {
  //Block of code to handle errors
}
```

```js title="Throw"
//THROW
try {
  if (x == '') throw 'empty';
  if (isNaN(x)) throw 'not a number';
  x = Number(x);

  if (x < 5) throw 'too low';
  if (x > 10) throw 'too high';
} catch (err) {
  message.innerHTML = 'Input is ' + err;
}
```

```js title="Finally"
//FINALLY
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```