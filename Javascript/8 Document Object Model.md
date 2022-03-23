# Document Object Model

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

- Document & Window
- Nodes & Elements
- Manipulating Elements
- Attributes & Property

Every web page resides inside a browser window which can be considered as an object.

1. Window object − Top of the hierarchy. It is the outmost element of the object hierarchy.
2. Document object − Each HTML document that gets loaded into a window becomes a document object. The document contains the contents of the page.
3. Form object − Everything enclosed in the `<form>...</form>` tags sets the form object.
4. Form control elements − The form object contains all the elements defined for that object such as text fields, buttons, radio buttons, and checkboxes.

# Document & Window

1. Code > Parsed & Rendered Document
2. WebAPI > Document Object Model

WebAPI allow javascript to work with parsed document.

Two important global object :

- Document
- Window

**Document** = Root DOM Node > Provides access to element querying ,DOM content etc.<br/> **Window** = Access to Browser API > The active Browser Tab -> Acts as global storage for script, also provides access to window specific properties and methods

```js
console.dir(document);
```

**DOCUMENT** - Tree of Element Node<br/> **TEXT NODE** - Space between Element Node

# Nodes & Elements

Nodes

- The objects that make up the DOM
- HTML tags are “element nodes” (or just “elements”)
- Text creates “text nodes”
- Attributes create “attribute nodes”

Elements

- Elements are one type of nodes
- Special properties and methods to interact with the elements
- Available methods and properties depend on the kind of element
- Can be selected in various different ways (via JavaScript)
- Can be created and removed via JavaScript

# Selecting Elements

Element by Id

- Return single elements
- Different way of querying elements
- Direct reference to DOM elements is returned

```js
document.getElementById('title');
```

Query selector

- Return collections of elements (array-like objects): NodeList
- Different ways of querying elements (by CSS selector, by tag name, by CSS class)
- querySelectorAll() returns a non-live NodeList, getXByY return live NodeLists

```js
document.querySelector('.list-item');
```

# Evaluating & Manipulating Elements

Document Element

```html
<p id="welcome-text" class="text-default">Welcome!</p>
```

Assigning

```js
const p = document.getElementById('welcome-text');
```

Manipulation

```js
p.textContent "Welcome!"
p.id "welcome-text"
p.className "text-default"
p.className = "new-class" <p … class="new-class">
```

# Attributes vs Properties

Attributes are additional information which we can put in the HTML to initialize certain DOM properties.

Properties are formed when the browser parses the HTML and generates the DOM. Each of the elements in the DOM have their own set of properties which are all set by the browser. Some of these properties can have their initial value set by HTML attributes.

**Attribute**

- Attributes are defined by HTML.
- Value of an attribute is constant.
- These are used to initialize the DOM properties.After initialization, the job is finish.

**Property**

- Properties are defined by the DOM.
- Value of a property is variable.
- No such job defined.
