# Core Modules

Node.js is a light weight framework. The core modules include bare minimum functionalities of Node.js. These core modules are compiled into its binary distribution and load automatically when Node.js process starts. However, you need to import the core module first in order to use it in your application.

Node.js includes three types of modules:
1. Core Modules
2. Local Modules
3. Third Party Modules


## Core Modules
- HTTP (Hyper text transfer protocol)
- File system (fs)
- Operating System (os)
- Uniform Resource Locator (url)


```js
var fs = require("fs");

// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
```
# File System
Node implements File I/O using simple wrappers around standard POSIX functions. The Node File System (fs) module can be imported using the following syntax

## FILE

```js
const path = require("path");
const myFile = require("./myFile");
```
```js
const path = require("path");

console.log(__filename); // Current file name
console.log(__dirname); // Directory name
console.log(path.dirname(__filename)); // Directory name
console.log(path.extname(__filename)); // File extension
console.log(path.parse(__filename)); // File path object
console.log(path.join(__dirname, "test", "hello.html")); //Concatenate path
```

## CREATE FOLDER
```js
const fs = require("fs");
const path = require("path");

// Create Folder
fs.mkdir(path.join(__dirname, "FolderName"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created..");
});
```

## CREATE & WRITE
```js
const fs = require("fs");
const path = require("path");
// Create and write to file
fs.writeFile(
  path.join(__dirname, "FolderName", "hello.txt"),

  "Hello world",

  (err) => {
    if (err) throw err;
    console.log("File Created..");
  }
);
```
## APPEND TO FILE
```js
const fs = require("fs");
const path = require("path");
// Append to file
fs.appendFile(
  path.join(__dirname, "FolderName", "hello.txt"),
  "\nI love Node.js",
  (err) => {
    if (err) throw err;
    console.log("File Written..");
  }
);
```
## READ FILE

```js
const fs = require("fs");
const path = require("path");
// Read file
fs.readFile(
  path.join(__dirname, "FolderName", "hello.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
```

## RENAME FILE
```js
const fs = require("fs");
const path = require("path");
// Rename file
fs.rename(
  path.join(__dirname, "FolderName", "hello.txt"),
  path.join(__dirname, "FolderName", "helloworld.txt"),

  (err) => {
    if (err) throw err;
    console.log("File Renamed..");
  }
);
```

# Operating System
```js
const os = require("os");

console.log(os.platform()); // Platform
console.log(os.arch()); // CPU Architecture
console.log(os.cpus()); // CPU Core information
console.log(os.freemem()); // Free memory
console.log(os.totalmem()); // Total memory
console.log(os.homedir()); // Home Directory
console.log(os.uptime()); // Uptime
```

# URL

```js
const url = require("url");
const myUrl = new URL(
  "http://mywebsite.com:8000/hello.html?id=100&status=active"
);

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Search
console.log(myUrl.search);
console.log(myUrl.searchParams);
```




# HTTP

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.

Simple Web Server

EXAMPLE1
```js
const http = require("http");

http
  .createServer((req, res) => {
    res.write("Hello World");
    res.end();
  })
  .listen(5000, () => console.log("Server Running"));
```
EXAMPLE 2
```js
/// Require http module
var http = require("http");  
  
/// Create server
const server = http.createServer(function (req, res) {
    console.log(req);

    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body as "This is the example
    // of node.js web based application"  
    res.end('This is the example of node.js web-based applications \n');

    /// Exit Event Loop
    // process.exit();     
});

/// Console will display the message
server.listen(5000, () => console.log('Server running at http://127.0.0.1:5000/'));
```

EXAMPLE 3
```js
const http = require("http");
const path = require("path");
const fs = require("fs");

/// Create server object
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) throw err;
        res.writeContinue(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/contact") {
    res.end("<h1>CONTACT</h1>");
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log("Server Running"));
```
EXAMPLE 4
```js
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
```

# Node package Manager

1.  Install 3rd Party packages
2.  packages get stored in the "node_modules" folder
3.  All dependencies are listed in a "package.json" files
4.  NPM scripts can be created to run certain tasks such as run a server

```js
npm init /// Generates a package.json
npm install express /// Install a package locally
npm install -g nodemon /// Install a package globally
npm install -D nodemon /// Install as Dev Dependencies
```

# Module Exports

```js
/// Single Export
module.exports = requestHandler;

/// Multiple Exports
module.exports = {
  handle: requestHandler,
  title : "Hard Coded Title"
}

/// Import
const routes  = require('./routes');
console.log(routes.title);

/// Use Module
const server = http.createServer(routes.handler);
serverlisten(5000);
```