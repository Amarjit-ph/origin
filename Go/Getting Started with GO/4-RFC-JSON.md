# Requests for Comments (RFC)
A Request for Comments is a publication in a series, from the principal technical development and standards-setting bodies for the Internet, most prominently the Internet Engineering Task Force.

- Definitions of Internet protocols and formats
- Example Protocols - HTML 1866, URI 3986, HTTP 2616 

### Protocol Packages<br>
- net/http - web communication protocol [`"http.Get(www.uci.edu)`]
- net TCP/IP and socket Programming [`net.Dial("tcp",üci.edu:80)`]

### JSON
- Javascript Object Notation
- RFC 7159
- Format to represent structured information
- Attribute-value pairs - `struct or map`
- Basic value types - Bool,number,string,array, objects

```go
//GO
p1:= Person(name:"Joe",
    addr:"a st.",phone:"123")

//JSON
{"name":"joe","addr":"a st.","phone":"123"}
```

# JSON Properties
- All Unicode
- Human-readable
- Fairly compact representation
- Types can be combined recursively

## JSON Marshalling
- Generating JSON representation from an object
```
p1:= Person(name:"joe",addr:"a st.")
barr, err := json.Marsha;(p1)
```
- Marshal (barr - returns JSON representation as []byte)

## JSON Unmarshalling
- Generating an object from JSON 
```
var p2 Person
err := json.Unmarshal(barr,&p2)
```
- Unmarshal() (Converts a JSON into a GO object
- Pointer to GO object is passed to Unmarshal()
- Object must "fit" JSON []byte

# Files
- Linear Access, not random access - Mechanical delay

BASIC OPERATION
1. Open - get Handle for access
2. Read - read bytes into [ byte
3. Write - write [] byte into file
4. Close - release handle
5. Seek - move read/write head

## ioutil File Read
- io/ioutil package has basic functions

```go
date, e:= ioutil : = ioutil.ReadFile("test.txt")
```

## ioutil File Write
```go
dat = "Hello , world"
err:= ioutil.WriteFile("outfile.txt",dat,0777)
```
- Writes [] byte to file 
- Creates a file
- Unix-style permission bytes

# OS Packages File Access

- os.Open() opens a file
- os.Close() closes a file'
- os.Read() reads from a file into a []byte
- os.Write() writes a [] byte

## os File reading
- Opening and reading

```go
f, err := os.Open("dt.txt")
barr:=make([]byte,10)
nb,err:=f.Read(barr)
f.close()
```
- Reads and fills barr
- Read returns # of bytes read 
- May be less than [] byte length

## os File Create/Write

```go
f, err:=
os.Create("outfile.txt")

barr:= []byte{1,2,3}
nb,err:=f.Write(barr)
nb,err:=f.WriteString("Hi")

- WrtieString() writes a string
- write() writes a [] byte - Any Unicode sequence