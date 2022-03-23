# Node Js

Node.js is an open-source and cross-platform `runtime environment` built on Chrome’s V8 JavaScript engine for executing JavaScript code outside of a browser. 

You need to recollect that NodeJS isn’t a framework, and it’s not a programing language. It provides an event-driven, non-blocking (asynchronous) I/O and cross-platform runtime environment for building highly scalable server-side applications using JavaScript.

- Javascript Runtime
- Build on the V8 Javascript Engine
- Written in C++
- Allow Js code on Server

# Features

- It’s easy to get started and can be used for prototyping and agile development
- It provides fast and highly scalable services
- It uses JavaScript everywhere, so it’s easy for a - JavaScript programmer to build back-end services using Node.js
- Source code cleaner and consistent.
- Large ecosystem for open source library.
- It has Asynchronous or Non-blocking nature.

## Advantages

1. Fast, Efficient and highly scalable
2. Event driven, non-blocking I/O model
3. Popular in the industry
4. Same language

# Explanation
- **Non blocking & Event Loop Explanation** - https://www.youtube.com/watch?v=lGiv0zfdiJA
- **What is the JavaScript event loop really all about** - https://www.youtube.com/watch?v=EI7sN1dDwcY

Node in Non-blocking I/O

1. Works on a single thread using non-blocking I/O calls
2. Supports tens of thousands concurrent connections
3. Optimizes throughput & scalability in apps with many I/O operations 

## Event Loop

Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.

The event loop executes tasks from the event queue only. 

1. Single threaded - Application Execution
2. Support concurrency via events & callbacks
3. Event Emitter class is used to bind events and listeners 
4. Execute Pending callback 

<img src="https://www.tutorialspoint.com/nodejs/images/event_loop.jpg"/>

```
Blocking - Synchronous
Non Blocking - Asynchronous
Handle Multiple request with Single Thread
Event Loop handle Event callback
Worker pool handle Heavy lifting on different Thread
```

## Best types of Node projects

1. Rest API & Microservice
2. Real time services
3. CURD Applications
4. Tools & Utilities

Anything that is not CPU intensive

# Events

Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.

Events and Event Emitter in Node.js - https://www.youtube.com/watch?v=l20MBBFZAmA


```js
const EventEmitter = require("events");

// 1 Create Class
class MyEmitter extends EventEmitter {}

// 2 Create Object
const Emitter = new MyEmitter();

// 3 Event Listener
Emitter.on("event", () => console.log("Event Fired!"));

// 4 Call Event
Emitter.emit("event");
```

## Example

```js
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {
  fire(data) {
    console.log("Emitted");
    this.emit("event", { data }); // ! 2 Fire the Listner Event
  }
}

const Log = new MyEmitter();

Log.on("event", (data) => console.log("Fire :", data.data)); // ! 3 Function call by emit
Log.fire("Amarjit Pheiroijam"); // ! 1 Call the Function
```

# Synchronous vs Asynchronous
Every method in the fs module has synchronous as well as asynchronous forms. Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.