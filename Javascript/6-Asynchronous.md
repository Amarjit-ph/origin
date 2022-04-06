# Asynchronous Programming

Asynchronous programming is a design pattern which ensures the non-blocking code execution.In general, if we execute in Synchronous manner i.e one after another we unnecessarily stop the execution of those code which is not depended on the one you are executing.

- Dive into Core Syntax
- Understand Variables & Data Types
- Work with Operators
- Explore & User Function

# Callbacks

`"I will call back later!"`

A callback is a function passed as an argument to another function, This technique allows a function to call another function.

- A callback function can run after another function has finished
- A callback is a function passed as an argument to another function.

```js
function myDisplayer(some) {
  console.log('SUM :', some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

**Sequence Control**

Sometimes you would like to have better control over when to execute a function. Suppose you want to do a calculation, and then display the result.

```js
function myDisplayer(some) {
  document.getElementById('demo').innerHTML = some;
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);
```

# Asynchronous

`"I will finish later!"`

Functions running in parallel with other functions are called asynchronous, A good example is JavaScript setTimeout()

```js
setTimeout(myFunction, 3000);

function myFunction() {
  console.log('After 3 secs');
}
```

# Promise

`"I Promise a Result!"`

- "Producing code" is code that can take some time
- "Consuming code" is code that must wait for the result

A JavaScript Promise object contains both the producing code and calls to the consuming code :

```js
let myPromise = new Promise(function (myResolve, myReject) {
  // "Producing Code" (May take some time)

  setTimeout(myfn, 5000);
  function myfn() {
    myResolve(); // when successful
  }

  //myReject(); // when error
});
```

```js
// Type 1
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
  function (value) {
    /* code if successful */
  },
  function (error) {
    /* code if some error */
  },
);
```

```js
// Type 2
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise
  .then(function (value) {
    /* code if successful */
  })
  .catch(function (error) {
    /* code if some error */
  });
```

## EXAMPLE
```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);

    if (location === 'Google') {
      resolve('Google say Palo Alto');
    } else {
      reject('We can only talk to google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information + ${response}`);
  });
}
```
```js
makeRequest('Google')
  .then((response) => {
    console.log('Response Recieved');
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });
```


# Async & Await

**Async and await make promises easier to write**

- Async makes a function return a Promise
- Await makes a function wait for a Promise

```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);

    if (location === 'Google') {
      resolve('Google say Palo Alto');
    } else {
      reject('We can only talk to google');
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log('Processing response');
    resolve(`Extra information + ${response}`);
  });
}
```

```js
async function getLocation() {
  try {
    const response = await makeRequest('Facebook');
    console.log('Response Received');
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (err) {
    console.log(err);
  }
}

getLocation();
```