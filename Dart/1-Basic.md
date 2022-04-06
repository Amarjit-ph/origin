# DART 
Statically Typed Language 

A language is statically-typed if the type of a variable is known at compile-time instead of at run-time.
- Cannot change data types at run time
- Use dynamic keyword for dynamic


# Data types

1. Numbers in Dart are used to represent numeric literals - [ int, double, num ] 
2. Strings represent a sequence of characters - [ String ]	
3. Boolean values true and false -	[ bool ]
4. List is an ordered group of objects - [ List	]
5. Map data type represents a set of values as key-value pairs - [ Map ]
6. Dynamic - If the type of a variable is not explicitly specified, the variable’s type is dynamic.

```dart
String name = 'Smith';
int number = 10;
bool isTrue = false;

dynamic anyDataType = 'Hello World';
```

# Variable

A variable is “a named space in the memory” that stores values.Variable names are called identifiers.

- Identifiers cannot be keywords
- Identifiers can contain alphabets and numbers.
- Identifiers cannot contain spaces and special characters, except the underscore (_) and the dollar ($) sign.
- Variable names cannot begin with a number.

## String Interpolation

```dart
'My name is $variable_name'
'My name is ${variable_name.name}'
```

# Function
## 1.Function with no arguments and no return type
```dart
void function_name(){
  // Statements
}
```
## 2.Function with no arguments and return type
```dart
return_type function_name() {
  // Statements
  return value;
}
```

## 3.Function with arguments and no return type
```dart
function_name(args1, args2, ...argsN){
  // Statements
}
```
```dart
void getMilk({int number,String name}){ 
    print('$number Milks for $name');
    }

getMilk(number:2,name:'AMARJIT');
```
## 4.Function with arguments and with return type
```dart
return_type function_name(args1, args2, ...argsN) {
  //statements
  return value;
}
```

## Arrow function
```dart
return_type function_name() => 5+2;
//SINGLE LINE EXPRESSION
````

## Anonymous function
```dart
(){ /*DO SOMTHING */ }
````

# Operators
An expression is a special kind of statement that evaluates to a value. Every expression is composed of −

- Operands − Represents the data
- Operator − Defines how the operands will be processed to produce a value.

```dart
// Arithmetic Operators
+ Add
− Subtract
-expr Unary minus, also known as negation (reverse the sign of the expression)
* Multiply
/ Divide
~/ Divide, returning an integer result
% Get the remainder of an integer division (modulo)
++ Increment
-- Decrement

// Relational Operator
>	Greater than	(A > B) is False
<	Lesser than	(A < B) is True
>=	Greater than or equal to	(A >= B) is False
<=	Lesser than or equal to	(A <= B) is True
==	Equality	(A==B) is False
!=	Not equal

// Logial Operator
&&	And 
||	OR 
!	NOT 
```


# Var, Final & Const

Immutable Types
- const Doesn't have access to anything in run time
- const value should be intialize before runtime
- Final can have access to after run time


```dart
var a; // Cannot change datatype but value can change
dynamic a; // Can change datatype & value 
const birthday = 2021 // Value must be known at compile-time
final birhtday = getBrithday(); // Value must be known at run-time,
```

# Lists
A very commonly used collection in programming is an array. Dart represents arrays in the form of List objects. A List is simply an ordered group of objects.

```dart
var name1 = new List(10); // Fixed Length
var name1 = new List(); /// Growable List

List<String> myList = ['Angela','James','Katie'];

print(myList[0]); // Angela
myList.indexOf('Katie'); // 2

//ADD TO LIST
myList.add('Ben');
myList.insert(Index,Data);

```

# Maps
The Map object is a simple key/value pair. Keys and values in a map may be of any type. A Map is a dynamic collection. In other words, Maps can grow and shrink at runtime.

Maps can be declared in two ways:
- Using Map Literals
- Using a Map constructor

```dart
Map<keyType,ValueType> mapName {
  key: Value
}

mapName[key]
// ADD NEW
mapName[key] = Value;
mapName.values;
mapName.length;
mapName.keys

var details = new Map(); 
   details['Usrname'] = 'admin'; 
   details['Password'] = 'admin@123'; 
   print(details);

List<Map> name = [{'name':'Amarjit'},{'name':'Pheiroijam'}];
  name.forEach((e){
    print(e['name']);
  });
```
# Enumeration

An enumeration is used for defining named constant values. 

```dart
enum EnumName { typeA, typeB, typeC }
EnumName.typeA
```
```dart
void main(){
  Car mycar = Car(carStyle: CarType.convertible);
}
class Car{
  CarType carStyle;
  Car({this.carStyle});
}
enum CarType{
  hatchback,
  SUV,
  convertible
}
```
# Conditional Operator

IfElse
``` dart
if(track == 'clear'){go();}
else{ dontgo();}
```
ElseIf
```dart
if(love>70){ high(); }
else if(love>30){ medium();}
else { low(); }
```

# Ternary Operator
```dart
Condition ? ifTrue : ifFalse
```

# First Order Objects


```dart
// Functions as First Order Object
int result = calculator(5,8,add);
print(result);

Function calculator = ( int n1, int n2 , Function calculation ) {
  return calculation(n1,n2);
}

int add ( int n1 , int n2){
  return n1+n2;
}

int multiply ( int n1, int n2){
  return n1*n2;
}
```

# Async & Await

Dart is a single-threaded programming language. Future \<T> object represents the result of an asynchronous operation which produces a result of type T. If the result is not usable value, then the future’s type is Future \<void>. A Future represents a single value either a data or an error asynchronously

There are 2 ways to handle Futures:

Using the Future API
```dart
Future delayedPrint(int seconds, String msg) {
  final duration = Duration(seconds: seconds);
  return Future.delayed(duration)
  .then((value) => msg);
}

main() async {
  print('Life');
  await delayedPrint(2, "Is").then((status){
	print(status);
});

print('Good');
}
```

Using the async and await operation.
```dart
void hello() async {
print('something exciting is going to happen here...');
}

void main() async {
await hello();
print('all done');
}
```


# Exception Handling 

SYSTEM EXCEPTION
```dart
try(){
  // Do something illegal
}catch(e){
  print(e);
}
```

CUSTOM EXCEPTION
```dart
try(){
  expectlessThanTen(20);
}catch(e){
  print(e);
}

void expectlessThanTen(int n){
  if(n>10){
    throw 'n is grater then 10';
  }
}

```

# Null Aware Operator
```dart
someVariable ?? defaultValue

// Assign y to x, if y is not null
// Assign z to x, if y in null
x = y ?? z; 

// Assign y to x if x is null
x?? = y;

// call foo() only if x is not null
x?.foo();
```