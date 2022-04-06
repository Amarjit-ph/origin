# Object Oriented programming


The basic idea of OOP is that we use objects to model real world things that we want to represent inside our program.

- Work with Real-life Entities in code
- Classes & Instances
- Properties, Fields & Methods
- Inheritance

Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior. <br/> After procedural programming which include only functions and data, Opp solved the problem of interdependency and mixed code.

# Principles of OOP

Object-oriented programming is based on the following principles:

1. Encapsulation<br/> The implementation and state of each object are privately held inside a defined boundary, or class. Other objects do not have access to this class or the authority to make changes but are only able to call a list of public functions, or methods. This characteristic of data hiding provides greater program security and avoids unintended data corruption.

2. Abstraction<br/> Objects only reveal internal mechanisms that are relevant for the use of other objects, hiding any unnecessary implementation code. This concept helps developers more easily make changes and additions over time.

3. Inheritance<br/> Relationships and subclasses between objects can be assigned, allowing developers to reuse a common logic while still maintaining a unique hierarchy. This property of OOP forces a more thorough data analysis, reduces development time and ensures a higher level of accuracy.

4. Polymorphism<br/> Objects can take on more than one form depending on the context. The program will determine which meaning or usage is necessary for each execution of that object, cutting down the need to duplicate code.

**Benefits of OOP**

1. Encapsulation - Reduce Complexity
2. Abstraction - Reduce Complexity + isolate impace of changes
3. Inheritance - Eliminate redundant code
4. Polymorphism - Use in diffrent forms

# Object

Ways to Create Objects

```js title="Object Literals"
const circle = {
  raduis: 1,
  location: {
    x: 1,
    y: 5,
  },
  draw: function () {
    console.log('Draw');
  },
};
```

```js title="Factory Function"
function createCircle(radius){
    return {
        radius,
        location:{
            x:1,
            y:2
        },
        draw:function({
            console.log("CIRCLE");
        })
    };
}

const circle = createCircle(1)
circle.draw();

```

```js title="Constructor Function"
function Circle(radius){
   this.radius = radius,
   this.draw = function(){
            console.log("CIRCLE");
        }
    };
}

const circle = new Circle(1)
circle.draw();

```

# Class

Class are blueprints of objects Define how objects look like, which properties and methods they have

- Objects are Instances of class
- Class-based creation is an alternative to using object literals

```js title="Class'

class Product{
    title,
    imageUrl,
    price,
    description
}
new Product() // Create object or Instances
```

## Constructor

The constructor() method is a special method for creating and initializing objects created within a class.

```js title="Constructor"
class Product {
  // Class Field
  title;
  imageUrl;
  price;
  description;

  constructor(title, imageUrl, desc, price) {
    // Class Property
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = desc;
    this.price = price;
  }
}
```

## Static

The static keyword defines static methods for classes.

Static methods are called directly on the class without creating an instance/object of the class.

```js title="Static"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  static hello() {
    // static method
    return 'Hello!!';
  }
}

mycar = new Car('Ford');

//Call 'hello()' on the class Car:
Car.hello();
```

# Inheritance

A class created with a class inheritance inherits all the methods from another class: To create a class inheritance, use the `extends` keyword. The `super()` method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

```js title="Inheritance"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model('Ford', 'Mustang');

myCar.show();
myCar.present(); // Parent class method
```

# Getters and Setters

Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

```js title="Getters and Setters"
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

let myCar = new Car('Ford');

myCar.cnam; // Getter
myCar.cname('Ferrari'); // Setter
```
