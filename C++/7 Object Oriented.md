# Object-Oriented Programming

Object-oriented programming aims to implement real-world entities like inheritance, hiding, polymorphism, etc in programming. The main aim of OOP is to bind together the data and the functions that operate on them so that no other part of the code can access this data except that function.

Principles of OOP :

1. Encapsulation - Enclose Methods and variables in one single unit called class
2. Abstraction - Displaying only essential information and hiding the details
3. Polymorphism - Ability to be used in more than one form
4. Inheritance - Attributes that you inherit from your parents

## Class & Objects

Everything in C++ is associated with classes and objects, along with its attributes and methods.
Attributes and methods are basically variables and functions that belongs to the class. These are often referred to as "class members".

- CLASS - A class is a user-defined data type that we can use in our program, and it works as an object constructor, or a "blueprint" for creating objects.

- OBJECT - An Object is an identifiable entity with some characteristics and behaviour. An Object is an instance of a Class.

- DATA MEMBER `[Properties]` - The variables which are declared in any class by using any fundamental data types.

- MEMBER FUNCTION `[Characteristics]` - The function which are declared in any class.

```c++
class MyClass {       // The class
  public:             // Access specifier
    int myNum;        // Attribute (int variable)
    string myString;  // Attribute (string variable)
};

int main() {
  MyClass myObj;  // Create an object of MyClass

  // Access attributes and set values
  myObj.myNum = 15;
  myObj.myString = "Some text";

  // Print attribute values
  cout << myObj.myNum << "\n";
  cout << myObj.myString;
  return 0;
}
```

# Methods Inside Class<br/>

Methods are functions that belongs to the class.

There are two ways to define functions that belongs to a class:

1. Inside class definition
2. Outside class definition

INSIDE

```c++
class MyClass {        // The class
  public:              // Access specifier
    void myMethod() {  // Method/function defined inside the class
      cout << "Hello World!";
    }
};
```

OUTSIDE

```c++
class MyClass {        // The class
  public:              // Access specifier
    void myMethod();   // Method/function declaration
};

// Method/function definition outside the class
void MyClass::myMethod() {
  cout << "Hello World!";
}
```

# Constructor

A constructor in C++ is a special method that is automatically called when an object of a class is created.

To create a constructor, use the same name as the class, followed by parentheses ()

```c++
class MyClass {     // The class
  public:           // Access specifier
    MyClass() {     // Constructor
      cout << "Hello World!";
    }
};

int main() {
  MyClass myObj;    // Create an object of MyClass (this will call the constructor)
  return 0;
}
```
# Constructors

A constructor is a special type of member function of a class which initializes objects of a class. In C++, Constructor is automatically called when object(instance of class) create. It is special member function of the class because it does not have any return type.

- Constructor has same name as the class itself
- Constructors don’t have return type
- A constructor is automatically called when an object is created.
- It must be placed in public section of class.
- If we do not specify a constructor, C++ compiler generates a default constructor for object (expects no parameters and has an empty body).

## Types of Constructors

1. Default Constructors: Default constructor is the constructor which doesn’t take any argument. It has no parameters.

2. Parameterized Constructors: It is possible to pass arguments to constructors. Typically, these arguments help initialize an object when it is created. To create a parameterized constructor, simply add parameters to it the way you would to any other function. When you define the constructor’s body, use the parameters to initialize the object.

3. Copy Constructor: A copy constructor is a member function which initializes an object using another object of the same class.


# Constructors

A constructor is a special type of member function of a class which initializes objects of a class. In C++, Constructor is automatically called when object(instance of class) create. It is special member function of the class because it does not have any return type.

- Constructor has same name as the class itself
- Constructors don’t have return type
- A constructor is automatically called when an object is created.
- It must be placed in public section of class.
- If we do not specify a constructor, C++ compiler generates a default constructor for object (expects no parameters and has an empty body).

# Types of Constructors

## 1. Default Constructors

Default constructor is the constructor which doesn’t take any argument. It has no parameters.

```c++

class construct{
public:
	int a, b;
	// Default Constructor
	construct(){
		a = 10;
		b = 20;
	}
};

int main()
{
	construct c;
	cout << "a: " << c.a << endl << "b: " << c.b;
	return 1;
}
```

## 2. Parameterized Constructors

It is possible to pass arguments to constructors. Typically, these arguments help initialize an object when it is created. To create a parameterized constructor, simply add parameters to it the way you would to any other function. When you define the constructor’s body, use the parameters to initialize the object.

```c++
class Point{
private:
	int x, y;

public:
	// Parameterized Constructor
	Point(int x1, int y1){
		x = x1;
		y = y1;
	}
	int getX(){
		return x;
	}
	int getY(){
		return y;
	}
};

int main(){
	// Constructor called
	Point p1(10, 15);
	// Access values assigned by constructor
	cout << "p1.x = " << p1.getX() << ", p1.y = " << p1.getY();

	return 0;
}

```

## 3. Copy Constructor

A copy constructor is a member function which initializes an object using another object of the same class. Detailed article on Copy Constructor.

Whenever we define one or more non-default constructors( with parameters ) for a class, a default constructor( without parameters ) should also be explicitly defined as the compiler will not provide a default constructor in this case. However, it is not necessary but it’s considered to be the best practice to always define a default constructor.

```c++
class point{
    private:
        double x, y;
    public:

    // Non-default Constructor &
    // default Constructor
    point(double px, double py){
	    x = px, y = py;
    }
};

int main(void)
{

// Define an array of size
// 10 & of type point
// This line will cause error
point a[10];

// Remove above line and program
// will compile without error
point b = point(5, 6);
}

```

Simple example of copy constructor.

```c++
class Point{
    private:
        int x, y;
    public:
        Point(int x1, int y1) { x = x1; y = y1; }

        // Copy constructor
        Point(const Point &p1) {x = p1.x; y = p1.y; }

        int getX()		 { return x; }
        int getY()		 { return y; }
};

int main()
{
	Point p1(10, 15); // Normal constructor is called here
	Point p2 = p1; // Copy constructor is called here

	// Let us access values assigned by constructors
	cout << "p1.x = " << p1.getX() << ", p1.y = " << p1.getY();
	cout << "\np2.x = " << p2.getX() << ", p2.y = " << p2.getY();

	return 0;
}
```

# Destructors

Destructor is an instance member function which is invoked automatically whenever an object is going to destroy. Means, a destructor is the last function that is going to be called before an object is destroyed.

The thing to be noted is that destructor doesn’t destroys an object.

- Destructor function is automatically invoked when the objects are destroyed.
- It cannot be declared static or const.
- The destructor does not have arguments.
- It has no return type not even void.
- An object of a class with a Destructor cannot become a member of the union.
- A destructor should be declared in the public section of the class.
  The programmer cannot access the address of destructor.

```c++
class String {
    private:
        char* s;
        int size;

    public:
        String(char*); // constructor
        ~String(); // destructor
};

String::String(char* c){
	size = strlen(c);
	s = new char[size + 1];
	strcpy(s, c);
}
String::~String(){
    delete[] s;
}

```

# Access Specifiers

Access specifiers define how the members (attributes and methods) of a class can be accessed.

In C++, there are three access specifiers:

1. public - members are accessible from outside the class
2. private - members cannot be accessed (or viewed) from outside the class
3. protected - members cannot be accessed from outside the class, however, they can be accessed in inherited classes.

```c++
class MyClass {
  public:    // Public access specifier
    int x;   // Public attribute
  private:   // Private access specifier
    int y;   // Private attribute
};

int main() {
  MyClass myObj;
  myObj.x = 25;  // Allowed (public)
  myObj.y = 50;  // Not allowed (private)
  return 0;
}
```

# Characteristics of an OOP's

## 1. Encapsulation

Encapsulation is defined as binding together the data and the functions that manipulate them under a single unit.

```c++
class Employee {
  private:
    // Private attribute
    int salary;

  public:
    // Setter
    void setSalary(int s) {
      salary = s;
    }
    // Getter
    int getSalary() {
      return salary;
    }
};
```

## 2. Abstraction

Abstraction means displaying only essential information and hiding the details. Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation.

```c++
class implementAbstraction
{
    private:
        int a, b;

    public:

        // method to set values of
        // private members
        void set(int x, int y)
        {
            a = x;
            b = y;
        }

        void display()
        {
            cout<<"a = " <<a << endl;
            cout<<"b = " << b << endl;
        }
};

int main()
{
    implementAbstraction obj;
    obj.set(10, 20);
    obj.display();
    return 0;
}
```

## 3. Polymorphism

Polymorphism as the ability of a message to be displayed in more than one form.

COMPILE TIME

1. Operator Overloading: The process of making an operator to exhibit different behaviours in different instances is known as operator overloading.
2. Function Overloading: Function overloading is using a single function name to perform different types of tasks.

RUN TIME

1. Function overriding on the other hand occurs when a derived class has a definition for one of the member functions of the base class.

OPERATOR OVERLOADING

```c++
//OPERATOR OVERLOADING

class Complex {
private:
    int real, imag;
public:
    Complex(int r = 0, int i =0)  {real = r;   imag = i;}

    // This is automatically called when '+' is used with
    // between two Complex objects
    Complex operator + (Complex const &obj) {
         Complex res;

         res.real = real + obj.real;
         res.imag = imag + obj.imag;
         return res;
    }
    void print() { cout << real << " + i" << imag << endl; }
};

int main()
{
    Complex c1(10, 5), c2(2, 4);
    Complex c3 = c1 + c2; // An example call to "operator+"
    c3.print();
}
```

FUNCTION OVERLOADING

```c++
//FUNCTION OVERLOADING
class Geeks
{
    public:
    void func(int x)
    {
        cout << "value of x is " << x << endl;
    }

    void func(double x)
    {
        cout << "value of x is " << x << endl;
    }

    void func(int x, int y)
    {
        cout << "value of x and y is " << x << ", " << y << endl;
    }
};
int main() {

    Geeks obj1;
    obj1.func(7);
    obj1.func(9.132);
    obj1.func(85,64);
    return 0;
}
```

FUNCTION OVERRIDING

```c++
//FUNCTION OVERRIDING
class Animal {
    public:
void eat(){
cout<<"Eating...";
    }
};
class Dog: public Animal
{
 public:
 void eat()
    {
       cout<<"Eating bread...";
    }
};
int main(void) {
   Dog d = Dog();
   d.eat();
   return 0;
}
```

## 4. INHERITANCE

The capability of a class to derive properties and characteristics from another class is called Inheritance. Inheritance is one of the most important features of Object-Oriented

1. derived class (child) - the class that inherits from another class
2. base class (parent) - the class being inherited from
   To inherit from a class, use the : symbol.

```c++
// Base class
class Vehicle {
  public:
    string brand = "Ford";
    void honk() {
      cout << "Tuut, tuut! \n" ;
    }
};

// Derived class
class Car: public Vehicle {
  public:
    string model = "Mustang";
};

int main() {
  Car myCar;
  myCar.honk();
  cout << myCar.brand + " " + myCar.model;
  return 0;
}
```

