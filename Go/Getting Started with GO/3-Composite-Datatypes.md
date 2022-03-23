# Composite Data Types

More complex data types, including arrays, slices, maps, and structs. As in the previous module, you’ll have a chance to practice writing code that makes use of these data types.

- type of datatype which put together other data types

# Go Arrays
Arrays are used to store multiple values of the same type in a single variable, instead of declaring separate variables for each value.

Declare an Array
In Go, there are two ways to declare an array:

- Fixed length series of elements of a chosen length
- Elements accessed using subscript notation, []
- Indices start at 0
- Elements initialized to zero value

```
var array_name = [...]datatype{values} // here length is inferred
array_name := [...]datatype{values} // here length is inferred
```

```go
package main
import ("fmt")

func main() {
  var arr1 = [3]int{1,2,3}
  arr2 := [5]int{4,5,6,7,8}

  fmt.Println(arr1)
  fmt.Println(arr2)
}
```

## Iterating through Arrays
- Using a for loop with the range keyword
- Range returns two values
- Index and element at index
```go
x : = [3]int {1,2,3}
for index,value range x {
   fmt.Printf("ind %d,val %d",index,value)
}
```

## Go Slices
Slices are similar to arrays, but are more powerful and flexible.
Like arrays, slices are also used to store multiple values of the same type in a single variable.
However, unlike arrays, the length of a slice can grow and shrink as you see fit.
In Go, there are several ways to create a slice:

Using the []datatype{values} format
- Create a slice from an array
- Using the make() function
- Create a Slice With []datatype{values}

### Syntax
```
slice_name := []datatype{values}
```
Property
- A "window" on an underlying array
- Variable size, up to the whole array
- Pointer indicates the start of the slice
- Length is the number pf elts in the slice
- Capacity is maximum number of elts - from start of slice to end of array


```go
package main
import ("fmt")

func main() {
  myslice1 := []int{}
  fmt.Println(len(myslice1))
  fmt.Println(cap(myslice1))
  fmt.Println(myslice1)

  myslice2 := []string{"Go", "Slices", "Are", "Powerful"}
  fmt.Println(len(myslice2))
  fmt.Println(cap(myslice2))
  fmt.Println(myslice2)
}
```

Length and capacity
- `len()` function returns the length
- `cap()` function returns the capacity 

```go
a1 := [3]string("a","b","c")
sli1 := a1[0:1]
fmt.Printf(len(sli1),cap(sli1))
```

Accessing slices
- Writing to a slice changes underlying slice
- Overlapping slices refer to the same array elements

Slice Literal
- Can be used to initialize a slice
- Creates the underlying array and creates a slice to reference it
- Slice point to the start of the array

## Variable Slices
Make
- Create a slice(array) using make
- 2 Argument version : Specify type and length/ capacity
- Init to zero, length = capacity - `sli = make([]int,10)
- 3 Argument version :  Specify length and capacity separately - sli = make ([]int,10,15)

Append
- Size of a slice can be increased by append()
- Adds element to the end of the slice
- Inserts into underlying array
- Increases size of array if necessary - sli = make(int[],0,3)
- Length of sli is 0, sli = append(sli,100)

# Map
Go provides another important data type named map which maps unique keys to values. A key is an object that you use to retrieve a value at a later date. Given a key and a value, you can store the value in a Map object. After the value is stored, you can retrieve it by using its key.

Map is implementation of hash functions

Defining a Map
You must use make function to create a map.
```
/* declare a variable, by default map will be nil*/
var map_variable map[key_data_type]value_data_type

/* define the map as nil map can not be assigned any value*/
map_variable = make(map[key_data_type]value_data_type)

```
Example

```go
package main

import "fmt"

func main() {
   var countryCapitalMap map[string]string
   /* create a map*/
   countryCapitalMap = make(map[string]string)
   
   /* insert key-value pairs in the map*/
   countryCapitalMap["France"] = "Paris"
   countryCapitalMap["Italy"] = "Rome"
   countryCapitalMap["Japan"] = "Tokyo"
   countryCapitalMap["India"] = "New Delhi"
   
   /* print map using keys*/
   for country := range countryCapitalMap {
      fmt.Println("Capital of",country,"is",countryCapitalMap[country])
   }
   
   /* test if entry is present in the map or not*/
   capital, ok := countryCapitalMap["United States"]
   
   /* if ok is true, entry is present otherwise entry is absent*/
   if(ok){
      fmt.Println("Capital of United States is", capital)  
   } else {
      fmt.Println("Capital of United States is not present") 
   }
}
```
Iteration through Map 
```go
package main
import ("fmt")

func main() {
  fruits := [3]string{"apple", "orange", "banana"}
  for idex, value := range fruits {
     fmt.Printf("%v\t%v\n", idex, value)
  }
}
```
# Go Structures
Go arrays allow you to define variables that can hold several data items of the same kind. Structure is another user-defined data type available in Go programming, which allows you to combine data items of different kinds.

Structures are used to represent a record. Suppose you want to keep track of the books in a library. You might want to track the following attributes of each book −

Title
Author
Subject
Book ID
In such a scenario, structures are highly useful.

Defining a Structure
To define a structure, you must use type and struct statements. The struct statement defines a new data type, with multiple members for your program. The type statement binds a name with the type which is struct in our case. The format of the struct statement is as follows −

type struct_variable_type struct {
   member definition;
   member definition;
   ...
   member definition;
}

```go
package main

import "fmt"

type Books struct {
   title string
   author string
   subject string
   book_id int
}
func main() {
   var Book1 Books    /* Declare Book1 of type Book */
   var Book2 Books    /* Declare Book2 of type Book */
 
   /* book 1 specification */
   Book1.title = "Go Programming"
   Book1.author = "Mahesh Kumar"
   Book1.subject = "Go Programming Tutorial"
   Book1.book_id = 6495407

   /* book 2 specification */
   Book2.title = "Telecom Billing"
   Book2.author = "Zara Ali"
   Book2.subject = "Telecom Billing Tutorial"
   Book2.book_id = 6495700
 
   /* print Book1 info */
   fmt.Printf( "Book 1 title : %s\n", Book1.title)
   fmt.Printf( "Book 1 author : %s\n", Book1.author)
   fmt.Printf( "Book 1 subject : %s\n", Book1.subject)
   fmt.Printf( "Book 1 book_id : %d\n", Book1.book_id)

   /* print Book2 info */
   fmt.Printf( "Book 2 title : %s\n", Book2.title)
   fmt.Printf( "Book 2 author : %s\n", Book2.author)
   fmt.Printf( "Book 2 subject : %s\n", Book2.subject)
   fmt.Printf( "Book 2 book_id : %d\n", Book2.book_id)
}
```