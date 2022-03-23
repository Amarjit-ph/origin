# Datatypes
Data type is an important concept in programming. Data type specifies the size and type of variable values.

Go is statically typed, meaning that once a variable type is defined, it can only store data of that type.

Go has three basic data types:

- bool: represents a boolean value and is either true or false
- Numeric: represents integer types, floating point values, and complex types
- string: represents a string value

# Comments, Scam & Printing 

Comments are similar to C++

## Printing
- Import from the fmt package
- `fmt.Printf()` prints a string
- `fmt.Printf("Hi %s",x)` conversion character from argument

## Scan
- Scan reads user input
- Takes a pointer as an argument
- Typed data is written to pointer
- Returns number of scanned items
- `num,err := fmt.Scan(&appleNum)`

# Integer Datatype

Go Integer Data Types
Integer data types are used to store a whole number without decimals, like 35, -50, or 1345000.

The integer data type has two categories:
- Signed integers - can store both positive and negative values
Unsigned integers - can only store non-negative values
Tip: The default type for integer is int. If you do not specify a type, the type will be int.

- Signed Integers
Signed integers, declared with one of the int keywords, can store both positive and negative values:

```go
// Generic int declaration
var x int

// Different lengths and signs
int8, int16, int32, int64, uint8, uint16, uint32, uint64
```
| Type  | Size                                                                        | Range                                                                                                         |
|-------|-----------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| int   | Depends on platform: 32 bits in 32 bit systems and 64 bit in 64 bit systems | -2147483648 to 2147483647 in 32 bit systems and -9223372036854775808 to 9223372036854775807 in 64 bit systems |
| int8  | 8 bits/1 byte                                                               | -128 to 127                                                                                                   |
| int16 | 16 bits/2 byte                                                              | -32768 to 32767                                                                                               |
| int32 | 32 bits/4 byte                                                              | -2147483648 to 2147483647                                                                                     |
| int64 | 64 bits/8 byte                                                              | -9223372036854775808 to 9223372036854775807                                                                   |

```go
package main
import ("fmt")

func main() {
  var x int = 500
  var y int = -4500
  fmt.Printf("Type: %T, value: %v", x, x)
  fmt.Printf("Type: %T, value: %v", y, y)
}
```

# Float DataType
The float data types are used to store positive and negative numbers with a decimal point, like 35.3, -2.34, or 3597.34987.

The float data type has two keywords:
| Type    | Size    | Range                   |
|---------|---------|-------------------------|
| float32 | 32 bits | -3.4e+38 to 3.4e+38.    |
| float64 | 64 bits | -1.7e+308 to +1.7e+308. |

```go
package main
import ("fmt")

func main() {
  var x float32 = 123.78
  var y float32 = 3.4e+38
  fmt.Printf("Type: %T, value: %v\n", x, x)
  fmt.Printf("Type: %T, value: %v", y, y)
}
```

# String DataType
The string data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:

String package in Golang - https://www.geeksforgeeks.org/string-package-in-golang/

```go
package main
import ("fmt")

func main() {
  var txt1 string = "Hello!"
  var txt2 string
  txt3 := "World 1"

  fmt.Printf("Type: %T, value: %\n", txt1, txt1)
  fmt.Printf("Type: %T, value: %v\n", txt2, txt2)
  fmt.Printf("Type: %T, value: %v\n", txt3, txt3)
}
```

# Variable Scope
The places in code where a variable can be accessed

```go
var x = 4
func f(){
    fmt.Printf("%d",x)
}
func g(){
    fmt.Printf("%d",x)
}
```
```go
func f(){
    var x = 4
    fmt.Printf("%d",x)
}
func g(){
    fmt.Printf("%d",x) // ! ERROR
}
```

## Block
A sequence of declarations and statements within matching brackets, `{}`

- Including function definitions
- Hierarchy of implicit block also
- Universe block - all GO source
- Package block - all source in a package
- File block - all source in a file
- "if","for","switch" - all code inside the statement

## Lexical Scoping
- Go is lexically scoped using block
- bi > bj if bj is defined inside bi

## Scope of Variables
Variable accessible from block bj if
1. Variable is declared in block bi, and
2. bi >= bj
# Pointers

A pointer is an address to data in memory

- `&` operator returns the address of a variable/ function
- `*` operator returns data at an address (dereferencing)

```go
var x int = 1
var y int
var ip *int     //ip is pointer to int

ip = &x         //ip now points to x
y = *ip         //y is now 1
```
## New

- Alternate way to create a variable
- `new()` function creates a variable and returns a pointer tp the variable
- Variable is initialized to zero

```go
ptr := new(int)
*ptr = 3
```

# Deallocating Memory
- When a variable is no longer needed it should be deallocated
- Memory space is made available
- Otherwise we will eventually run out of memory
```go
func f(){
    var x = 4
    fmt.Printf("%d",x)
}
```
- Each call f() creates an integer

## Stack vs Heap
Stack - Dedicated to function calls<br>
- Local Variables are stored here
- Deallocated after function complete
Heap -Heap is persisted

## Manual Deallocation
- Data on the heap must be deallocated when it is done being used
- In most complied languages it is done manually
- Error-prone but fast

# Garbage Collection
Garbage collection refers to the process of managing heap memory allocation: free the memory allocations that are no longer in use and keep the memory allocations that are being used

- Interpreted Languages, this is done by interpreter
- JVM and python interpreter
- Easy for the programmer
- Slow (Need an interpreter)

## Garbage collection in GO 
- Go is a complied language which enables garbage collection
- Implementation is fast
- Complier determines stack vs heap
- Garbage collection in background

# Constant

Expression whose value is know at compile time
- Type is inferred from right hand side (boolean,string,number)
```go
const x = 1.3
const ( 
  y=4
  z="Hi"
)
```

## Iota
- Generate a set of related but distinct constants
- Often represents a property which has several distinct values
- Constants must be different but actual value is not important
- Like an enumerated type in other language

```go
type Grades int
const (
  A Grades = iota
  B
  C
  D
  E
  F
)
```
- Each constant is assigned to a unique integer
- Starts at 1 and increments

# Control structures

## The if Statement
Use the if statement to specify a block of Go code to be executed if a condition is true.

Note that if is in lowercase letters. Uppercase letters (If or IF) will generate an error.


```go
package main
import ("fmt")

func main() {
  if 20 > 18 {
    fmt.Println("20 is greater than 18")
  }
}
```
## The if else Statement
```go
package main
import ("fmt")

func main() {
  time := 20
  if (time < 18) {
    fmt.Println("Good day.")
  } else {
    fmt.Println("Good evening.")
  }
}
```
## The else if Statement

```go
package main
import ("fmt")

func main() {
  time := 22
  if time < 10 {
    fmt.Println("Good morning.")
  } else if time < 20 {
    fmt.Println("Good day.")
  } else {
    fmt.Println("Good evening.")
  }
}
```

## The Nested if Statement
```go
package main
import ("fmt")

func main() {
  num := 20
  if num >= 10 {
    fmt.Println("Num is more than 10.")
    if num > 15 {
      fmt.Println("Num is also more than 15.")
     }
  } else {
    fmt.Println("Num is less than 10.")
  }
}
```
## Loops
The for loop loops through a block of code a specified number of times.
The for loop is the only loop available in Go.

Loops are handy if you want to run the same code over and over again, each time with a different value.

- `Statement1` Initializes the loop counter value.
- `Statement2` Evaluated for each loop iteration. If it evaluates to TRUE, the loop continues. If it evaluates to FALSE, the loop ends.
- `Statement3` Increases the loop counter value.
```go
package main
import ("fmt")

func main() {
  for i:=0; i < 5; i++ {
    fmt.Println(i)
  }
}
```

## Nested Loops
It is possible to place a loop inside another loop.

```go
package main
import ("fmt")

func main() {
  adj := [2]string{"big", "tasty"}
  fruits := [3]string{"apple", "orange", "banana"}
  for i:=0; i < len(adj); i++ {
    for j:=0; j < len(fruits); j++ {
      fmt.Println(adj[i],fruits[j])
    }
  }
}
```

## The Range Keyword
The range keyword is used to more easily iterate over an array, slice or map. It returns both the index and the value.

The range keyword is used like this:


```go
package main
import ("fmt")

func main() {
  fruits := [3]string{"apple", "orange", "banana"}
  for idx, val := range fruits {
     fmt.Printf("%v\t%v\n", idx, val)
  }
}

```

## Switch
The switch Statement
Use the switch statement to select one of many code blocks to be executed.

The switch statement in Go is similar to the ones in C, C++, Java, JavaScript, and PHP. The difference is that it only runs the matched case so it does not need a break statement.

```go
package main
import ("fmt")

func main() {
  day := 4

  switch day {
  case 1:
    fmt.Println("Monday")
  case 2:
    fmt.Println("Tuesday")
  case 3:
    fmt.Println("Wednesday")
  case 4:
    fmt.Println("Thursday")
  case 5:
    fmt.Println("Friday")
  case 6:
    fmt.Println("Saturday")
  case 7:
    fmt.Println("Sunday")
  }
}
```

## Tagless switch

- Switch may not contain a tag
- Case contains a boolean expression to evaluate
- First true case is executed

```go
switch{
  case x>1:
    fmt.printf("case1")
  case x<-1:
    fmt.printf("case2")
  default:
    fmt.printf("Dfaq")
}
```

## Break & Continue
Break exits the containing loop
```go
i:=0
for i<10{
  i++
  if i == 5 {break}
  fmt.Printf("hi)
}
```
Continue skips the rest of the current iteration

```go
i:=0
for i<10{
  i++
  if i == 5 {continue}
  fmt.Printf("hi)
}
```