# Object Oriented
As with other JavaScript language features, TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.
# Class

In object-oriented programming languages like Java and C#, classes are the fundamental entities used to create reusable components. Functionalities are passed down to classes and objects are created from classes.

A class can include the following:
 - Constructor
- Properties
- Methods

```ts
class Employee { 
  empCode: number; 
  empName: string; 
  constructor(code: number, name: string) {
     this.empName = name; 
     this.empCode = code; 
  } 
  getSalary() : number {
  return 10000; 
  }
}
```

 
# Data Modifiers

In object-oriented programming, the concept of 'Encapsulation' is used to make class members public or private i.e. a class can control the visibility of its data members. This is done using access modifiers.
There are three types of access modifiers in TypeScript: public, private and protected.
- Public 
- Private 
- Protected


## Public

All the public members can be accessed anywhere without any restrictions.
```ts
class Employee { 
  public empCode: string;
  empName: string; 
} 
let emp = new Employee(); 
emp.empCode = 123; 
emp.empName = "Swati";

```
## Private

The private access modifier ensures that class members are visible only to that class and are not accessible outside the containing class.
```ts
class Employee { 
  private empCode: number;
  empName: string;
}
let emp = new Employee();
emp.empCode = 123; // Compiler Error 
emp.empName = "Swati";//OK

```

 
## Protected

The protected access modifier is similar to the private access modifier, except that protected members can be accessed using their deriving classes.
```ts
class Employee { 
   public empName: string;
   protected empCode: number;
   constructor(name: string, code: number){ 
     this.empName = name; this.empCode = code; 
   } 
} 

class SalesEmployee extends Employee{ 
   private department: string;
   constructor(
     name: string, 
     code: number,
     department: string) {      
    super(name, code); 
    this.department = department; 
 } 
} 
let emp = new SalesEmployee("John Smith", 123, "Sales"); empObj.empCode; //Compiler Error
```


