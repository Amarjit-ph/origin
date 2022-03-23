# GO

Go is a procedural programming language. It was developed in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson at Google but launched in 2009 as an open-source programming language.

Programs are assembled by using packages, for efficient management of dependencies. This language also supports environment adopting patterns alike to dynamic languages.

## Advantages of Go
- Code runs fast
- Garbage collection
- Simpler Objects
- Concurrency is efficient
<hr>

## Software Translation
- Machine Language : CPU instructions represented in binary directly run processor
- Assembly Language : CPU instructions with mnemonics Easier to read, Equivalent to machine language
- High-level language : Commonly used languages ( C,C++,Java,python,Go etc), Much easier to use

All software must be translated into machine language or processor
<hr>

## Compiled vs Interpreted
Compilation - Translate instructions once before running the code
- C,C++,Java(Partially)
- `Translation occurs only once, saves time`

Interpreted - Translate instructions while code is executed
- Python, javascript
- Translation occurs every execution
- Requires an interpreter
<hr>

## Efficiency vs Ease-of-use
- Complied code is fast
- Interpreters make coding easier - Manage memory automatically & Infer variable types
- GO is a good compromise
<hr>

## Garbage Collection
Automatic memory management
- where should memory be allocated?
- when can memory be deallocated?

Manual Memory Management is hard
- Deallocate too early, false memory accesses
- Deallocate too late, wasted memory

**`Go includes garbage collection`**
- Typically only done by Interpreter


# Objects
Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic. An object can be defined as a data field that has unique attributes and behavior.

- Organize your code through encapsulation
- Group together data and functions which are related
- User-defined type which is specific to an application
Ex. ints have data (number) and functions

## Objects in GO
- Go does not use the term class
- Go uses structs with associated methods

Simplified implementations of classes
- No inheritance
- No constructors
- No generics

`Easier to code & faster`

# Concurrency
Concurrency means multiple computations are happening at the same time. Concurrency is everywhere in modern programming, whether we like it or not: Multiple computers in a network. Multiple applications running on one computer. Multiple processors in a computer (today, often multiple processor cores on a single chip)

## Performance Limits
- Moore's Law used to help performance
- Number of transistors doubles every 18 months
- More transistors used to lead to higher clock frequencies
- `Power/temperature constraints` limited clock frequencies now

## Parallelism
Concurrency is the task of running and managing the multiple computations at the same time. While parallelism is the task of running multiple computations simultaneously.
- Number of crores still increases over time
- Multiple tasks may be performed at the same time on different cores

Difficulties with parallelism 
- When do task start/stop
- What if one task needs data from another task
- Do tasks conflicts in memory?

## Concurrent Programming
Concurrency is the management of multiple task at the same time
Key requirements for large systems
Concurrent programming enables parallelism
- Management of task execution
- Communication between tasks
- Synchronization between tasks

## `Concurrency in GO`
- Go includes concurrency primitives 
- Go routines represent concurrent tasks
- Channels are used to communicate between tasks
- Select enables task synchronization
- Concurrency primitives are efficient and easy to use

# Workspaces
A workspace is a virtual collection of folders opened simultaneously in Visual Studio Code and defined in a . code-workspace file. Opening this file will open the collection of folders automatically. This is called a "multi-root" workspace.

1. Hierarchy of directories
2. Common organization is good for sharing
3. Three Subdirectories
- scr - Contains source code files
- pkg - Contains packages
- bin - contains executables

4. Programmers typically has one workspace for many projects

Workspace Information
- Directory hierarchy is recommended, not enforced
 ie. you can have an executable in src

- Workspace directory defined by GOPATH is during installation
- GOPATH - C:\Users\YourName\go

# Packages
- Group of related source files
- Each package can be imported by other packages
- Enable software Reuse

```go
// PACKAGE 1
package ammpkg
.
.
```
```go
// PACKAGE 2
package billpkg
.
.
```

```go
// USING PACKAGE 1 & 2
import (
    "annpkg"
    "billpkg"
)
```
- `There must be one package called main`
- Building the main package generated an executable program
- Main packages need a main() function
- main() is where code execution starts

```go
package main
import "fmt" // FORMAT PACKAGE
func main() {
	fmt.Println("Hi there")
}
```

# GO Tool

- `import` keyword is used to access other packages
- Go standard library includes many packages ie:`"fmt"`
- Searches directories specific by GOROOT and GOPATH

## The Go Tool
A tool to manage Go source code
- `go build` complies the program and creates an executable for the main package,
- `go doc` prints documentations for packages
- `go fmt` formats source code files
- `go get` downloads packages and install them
- `go list` list all installed packages
- `go run` complies .go files and run the executable
- `go test` run tests using files ending in "-test.go"

# Variables
Names are needed to refer to programming constructs
- names must start with letter
- Any number of letters, digits and underscores
- Case sensitive
- Cannot use keywords

Variables are data stored in memory
- All variables must have declaration
- Most basic declaration `[ var x int ] [keyword name type]`

## Variables types

Type defines the values a variable they make take
```
Integer - Integer values
Floating Point - Fraction values
Strings - Byte character sequences

```

# Variable Initialization

## Defining an alias for a type 
May Improve clarity

```
type Celsius float64
type IDnum int
```

Can declare variables using the type alias
```
var temp Celsius
var pid IDnum
```

Initialize in the declaration
```go
// Initialize in the declaration
var x int = 100
var x = 100

// Initialize after declaration
var x int
x = 100
```
Uninitialized variables have a zero value
```
var x int // x =0
var x string // x=""
```

## Short Variable Declaration
Can perform a declaration and initialization together with `:=` operator
```
x:=100
```
- Variable is declared as type of the expression on the right hand side
- Can only do this inside a function


# Go Constant

If a variable should have a fixed value that cannot be changed, you can use the const keyword.

The const keyword declares the variable as "constant", which means that it is unchangeable and read-only.

```GO
// Syntax
// const CONSTNAME type = value

package main
import ("fmt")

const PI = 3.14

func main() {
  fmt.Println(PI)
}

```