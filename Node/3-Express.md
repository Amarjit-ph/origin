# Express
Fast, opinionated, minimalist web framework for Node.js
Framework - Helper functions, tools & rules that help you build your application

Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls.

# Middleware
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

## Express Application
```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
```

## Handling Different Routes
```js
const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
app.listen(3000);
```

## Parsing Incoming Requests

`body-parser` - Node.js body parsing middleware.

Parse incoming request bodies in a middleware before your handlers, available under the req.body property.

**Note** :  `req.body`'s shape is based on user-controlled input, all properties and values in this object are untrusted and should be validated before trusting.


```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
```

# Express Router
A router object is an isolated instance of middleware and routes. You can think of it as a “mini-application,” capable only of performing middleware and routing functions. Every Express application has a built-in app router.

- A router behaves like middleware itself, so you can use it as an argument to app.use() or as the argument to another router’s use() method.
- The top-level express object has a Router() method that creates a new router object.


```js
/*
  NAME : ADMIN ROUTES
  PATH : /routes/admin.js
*/
const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>
    `);
});

router.post('/products', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
```

```js
/*
  NAME : SHOP ROUTES
  PATH : /routes/shop.js
*/
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express Shop!</h1>');
});

router.get('/products', (req, res, next) => {
  res.send('<h1>You have reached Products Route !</h1>');
});

module.exports = router;
```

```js
/*
  NAME : MAIN
  PATH : /app.js
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
app.use(bodyParser.urlencoded({extended: false}));
/// ROUTES
app.use(adminRoutes);
app.use(shopRoutes);
/// HANDLE 404 ROUTES
app.use((req,res,next)=>{
  res.send(`<h1>404 Page Not Found !</h1>`)
})
app.listen(3000);

```

## Filtering Paths

All the Admin routes should have `/admin/` path
```js
/*
  NAME : MAIN
  PATH : /app.js
*/
app.use('/admin', adminRoutes);
```
**Access this route using `/admin/add-product`**
```js
router.get('/add-product', (req, res, next) => {
  res.send(
    `<form action="/admin/add-product" method="POST">
        <input type="text" name="title">
        <button type="submit">Add Product</button>
     </form>`);
});
```

## Serving HTML
```js
/// Serving HTML
router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
```

## Serving Static Files
```js
/// Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));
```
# Sharing Data Across Request & Users
Data store in node server are shared across the user which is something that we may want
but its a bad practice we should fetch data for each user and requests. 