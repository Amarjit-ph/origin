# TypeScript

TypeScript is a language that aims at easing development of large scale applications written in JavaScript. TypeScript adds common concepts such as classes, modules, interfaces, generics and static typing to JavaScript.

- Superset of JavaScript
- Trustworthy results 
- Safety at Scale

All JavaScript code is valid TypeScript code so it can be added seamlessly to any project. The TypeScript compiler emits JavaScript.

- Strong typing
- Object-Oriented features 
- Compile-time error
- Great Tools


## Dynamic vs Static Typing

In dynamically typed languages, the types are associated with run-time values nad not named explicitly in your code

In statically typed languages, you explicitly assign types to variables, function parameters, return values etc

```
Static Examples: Java, C++, Rust, Go
Dynamic Examples: Javascript, Python, Ruby, PHP
```

## Type Annotations
 
TypeScript is a typed language, where we can specify the type of the variables, function parameters and object properties. We can specify the type using :Type after the name of the variable, parameter or property. There can be a space after the colon. TypeScript includes all the primitive types of JavaScript- number, string and boolean.

Each variable is declared with its data type. These are type annotations. You cannot change the value using a different data type other than the declared data type of a variable.

``` ts
var age: number = 32; // number variable 
var name: string = "John";// string variable 
var isUpdated: boolean = true;// Boolean variable
```
 
## Type Inference
 
TypeScript is a typed language. However, it is not mandatory to specify the type of a variable. TypeScript infers types of variables when there is no explicit information available in the form of type annotations.
 
Types are inferred by TypeScript compiler when:
Variables are initialized
Default values are set for parameters
Function return types are determined

```ts
var a = "some text";
var b = 123;
a = b; // Compiler Error: Type 'number' is not assignable to type 'string'
```

 
 
## Type Assertion
 
Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own.

```ts
Let someString: any = "Amarjit Pheiroijam";
Let sizeWithAs : number = (someString as string).length;
Let sizeWithAngleBrackets : number = (<string>someString).length;
```

# Datatype


## Primitive Datatype
```ts
let name: string = "Anders";				     STRING
let lines: number = 42;					         NUMBER
let isDone: boolean = false;				     BOOLEAN
let notSure: any = 4;				 	         ANY
let nothing: void = undefined;                   VOID
```

## Reference Datatypes

```ts
ARRAY
let list: Array<Primitive> = [A, B, C];			TYPE 1 ARRAY 
let list: Primitve[ ] = [A, B, C];				TYPE 2 ARRAY 

let list: Array<number> = [1, 2, 3];		T1 ARRAY OF NUMBER
let list: string[] = [A, B, C];				T2 ARRAY OF STRING
let list: any [] = [ 1, true, "Hello" ]		T2 ARRAY OF ANY
```

```ts
TUPLE
Let person : [number, string, boolean ] = [1,"Amarjit",true ]	

ARRAY OF TUPLE
Let employee : [number, string ][] = [
  [1, "Amarjit Pheiroijam"],
  [2, "Achouba Pheiroijam"],
]	
```

```ts
UNION
Let process: string | number ;
process = 22 ;
process = "Tweenty two";
```
```ts
ENUMERATIONS
enum Color { 
  Red = "Red",
  Green = "Green",
  Blue =  "Blue" 
};
console.log(Color.Green); 	// GREEN
```

```ts
OBJECTS
interface KeyPair {
 key: number;
 value: string; 
} 

let kv1: KeyPair = { key:1, value:"Steve" }; // OK
```


# Interface

The interface is a structure that defines the contract in your application. It defines the syntax for classes to follow. Classes that are derived from an interface must follow the structure provided by their interface.

## Interface as Type
```ts
interface KeyPair {
  key: number;
  value: string;
} 
let kv1: KeyPair = { key:1, value:"Steve" }; // OK
```

## Interface as Function Type
```ts
interface KeyValueProcessor { 
  (key: number, value: string): void; 
}; 

function addKeyValue(key:number, value:string):void {             console.log('addKeyValue: key = ' + key + ', value = ' + value)
}
```

## Interface as Array
```ts
interface NumList { 
  [index:number]:number
} 
let numArr: NumList = [1, 2, 3]; numArr[0]; numArr[1];
```

## Extending Interfaces
Interfaces can extend one or more interfaces. This makes writing interfaces flexible and reusable.
```ts
interface IPerson { 
  name: string; 
  gender: string; 
} 

interface IEmployee extends IPerson { 
 empCode: number;
} 

let empObj:IEmployee = {
  empCode:1,
  name:"Bill",
  gender:"Male",
}
```


# PROPERTIES

- Optional Parameter [ `name?:string;` ]
- Non-null assertion operator [ `name!:string = “Amarjit Pheiroijam”;` ]
- Readonly Property [ `readonly SNN:number;` ]

## Optional Property

```ts
interface IEmployee {
  empCode: number;
  empName: string;
  empDept?:string; // OPTIONAL
} 


let empObj1:IEmployee = { 
  empCode:1, 
  empName:"Steve" 
} // OK


let empObj2:IEmployee = { 
  empCode:1,
  empName:"Bill",
  empDept:"IT" 
} // OK
```

## Non-null assertion operator
```ts
name!:string = “Amarjit Pheiroijam”; // OK
name!:string;  // ERROR
```
## Read Only Property
```ts
Read-only Properties
interface Citizen { 
  name: string; 
  readonly SSN: number;
}


let personObj: Citizen = { 
  SSN: 110555444, 
  name: 'James Bond'
} 
personObj.name = 'Steve Smith'; // OK 
personObj.SSN = '333666888';      [ Compile Time Error ]
```

readonly SNN:number;

# Modules

The TypeScript code we write is in the global scope by default. If we have multiple files in a project, the variables, functions, etc. written in one file are accessible in all the other files.

## Export
A module can be defined in a separate .ts file which can contain functions, variables, interfaces and classes. Use the prefix export with all the definitions you want to include in a module and want to access from other modules.

```ts
export let age : number = 20; 
export class Employee {
   empCode: number; 
   empName: string; 
   constructor(name: string, code: number) { 
      this.empName = name;
      this.empCode = code; 
   } displayEmployee() { 
      console.log ("Employee Code: " + this.empCode + ", Employee          Name: " + this.empName ); 
     } 
} 
let companyName:string = "XYZ";
```

In the above example, Employee.ts is a module which contains two variables and a class definition. The age variable and the Employee class are prefixed with the export keyword, whereas companyName variable is not. Thus, Employee.ts is a module which exports the age variable and the Employee class to be used in other modules by importing the Employee module using the import keyword. The companyName variable cannot be accessed outside this Employee module, as it is not exported.
 
## Import

A module can be used in another module using an import statement. Importing a Single export from a Module:
We exported a variable and a class in the Employee.ts. However, we can only import the export module which we are going to use. The following code only imports the Employee class from Employee.ts into another module in the EmployeeProcessor.ts file.

```ts
import { Employee } from "./Employee"; 
let empObj = new Employee("Steve Jobs", 1); 
empObj.displayEmployee(); //Output: Employee Code: 1, Employee Name: Steve Jobs
```

Importing the Entire Module into a Variable
You can import all the exports in a module as shown below.
```ts
import * as Emp from "./Employee" 
console.log(Emp.age); // 20 
let empObj = new Emp.Employee("Bill Gates" , 2); 
empObj.displayEmployee(); //Output: Employee Code: 2, Employee Name: Bill Gates
```
In the above example, we import all the exports in Employee module in a single variable called Emp. So, we don't need to write an export statement for each individual module. In the above example, it will import age and Employee class into the Emp variable and can be accessed using Emp.age and Emp.Employee.
 
