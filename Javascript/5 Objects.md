# Object


Core Data Structure in Javascript

1. Store data in properties and actions in methods
2. Allow you to “group” related data together and split your code into logical pieces

**Primitive values** - [Numbers,String,Booleans]<br/> **Reference value** - (Objects)

```js title="Object"
const person = {
  name: 'Amarjit Pheiroijam',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  greet: function () {
    alert('Hello world');
  },
};

person.greet();
```

# Accessing 

```js
objectName.property      [  person.age           ]
objectName["property"]   [  person["age"]        ]
objectName[expression]   [  x = "age"; person[x] ]
```

# Modifying 

```js
person.isAdmin = true;      [Add]
person.name = 'Rahul Dev';  [Modify]
person.age = null;          [Delete]
```

# This Keyword

In a function definition, this refers to the "owner" of the function. In the example above, this is the person object that "owns" the fullName function.

```js
var person = {
  firstName: 'John',
  lastName: 'Doe',
  id: 5566,
  fullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};
```