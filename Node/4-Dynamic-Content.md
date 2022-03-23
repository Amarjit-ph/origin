# Dynamic Contents

A server-side dynamic contents/web page is a web page whose construction is controlled by an application server processing server-side scripts. In server-side scripting, parameters determine how the assembly of every new web page proceeds, including the setting up of more client-side processing


# Template Engine
A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page

*Template engine helps us to create an HTML template with minimal code. Also, it can inject data into HTML template at client side and produce the final HTML.*

The following is a list of important (but not limited) template engines for Node.js
- Jade(pug)
- EJS
- Mustache
- Handlebars

| EJS                                                    | PUG                                           | HANDLEBARS                                   |
|--------------------------------------------------------|-----------------------------------------------|----------------------------------------------|
| `<p><%= name %></p>`                                   | `p #{name}`                                   | `<p>{{name}}</p>`                            |
| Use normal HTML and plain Javascript in your templates | Use minimal HTML and custom template language | Use normal HTML and custom template language |

# Working with EJS
EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.

Example :
```js
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```
## Set view engine to EJS
```js
app.set('view engine', 'ejs');
app.set('views', 'views');
```

## Render data to Template
```js
/*
  NAME : RENDER SHOP EJS
  PATH : /models/product.js
  NOTE : Render first parameter "shop" is from views
*/
router.get('/', (req, res, next) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

```
```js
/*
  NAME : SHOP EJS
  PATH : /views/shop.ejs
*/
<%- include('includes/head.ejs') %>
    <link rel="stylesheet" href="/css/product.css">
</head>

<body>
<%- include('includes/navigation.ejs') %>
    <main>
        <% if (prods.length > 0) { %>
            <div class="grid">
                <% for (let product of prods) { %>
                    <article class="card product-item">
                        <header class="card__header">
                            <h1 class="product__title"><%= product.title %></h1>
                        </header>
                        <div class="card__content">
                            <h2 class="product__price">$19.99</h2>
                            <p class="product__description">A very interesting book about so many even more interesting things!</p>
                        </div>
                        <div class="card__actions">
                            <button class="btn">Add to Cart</button>
                        </div>
                    </article>
                <% } %>
            </div>
        <% } else { %>
            <h1>No Products Found!</h1>
        <% } %>
    </main>
<%- include('includes/end.ejs') %>
```

# Sending data to server
```js
/*
  NAME : SEND DATA TO SERVER
  PATH : /views/add-product.ejs
*/
<main>
  <form class="product-form" action="/admin/add-product" method="POST">
      <div class="form-control">
          <label for="title">Title</label>
          <input type="text" name="title" id="title">
      </div>

      <button class="btn" type="submit">Add Product</button>
  </form>
</main>
```
SERVER
```js
/*
  NAME : ADD PRODUCT ROUTE
  PATH : /routes/add-product.js
*/
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
exports.routes = router;
exports.products = products;
```


# Partials

## Exporting Partial
```js
/*
  NAME : HEAD PARTIAL
  PATH : /views/includes/head.ejs
*/
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><%= pageTitle %></title>
    <link rel="stylesheet" href="/css/main.css">
```

## Importing Partials

```js
/*
  NAME : INDEX PARTIAL
  PATH : /views/includes/head.ejs
*/
<%- include('includes/head.ejs') %>
    <link rel="stylesheet" href="/css/forms.css">
    <link rel="stylesheet" href="/css/product.css">
    </head>

    <body>
        <main>
            <form class="product-form" action="/admin/add-product" method="POST">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title">
                </div>

                <button class="btn" type="submit">Add Product</button>
            </form>
         </main>
    </body>
</html>
```