# List of Contents

- Comments
- Variables
- Reciving Input
- String
- List [ Array ]
- Tuples
- Set
- Dictionaries [ Object ]

# Comments

We use comments to add notes to our code. Good comments explain the hows and
whys, not what the code does. That should be reflected in the code itself. Use
comments to add reminders to yourself or other developers, or also explain your
assumptions and the reasons you’ve written code in a certain way.

```py
# This is a comment and it won’t get executed.

'''
This is a multi line
comment and
it won’t get executed.
'''

```

# Variables

We use variables to temporarily store data in computer’s memory.

```py
price = 10                              # int
rating = 4.9                            # float
course_name = ‘Python for Beginners’    # str
is_published = True                     # bool

# Multiple Assignment
x,y,z = (1,'Amarjit',True)

# Type Casting
x = str(x)
y = int(y)
z = float(y)
```

In the above example,

- price is an integer (a whole number without a decimal point)
- rating is a float (a number with a decimal point)
- course_name is a string (a sequence of characters)
- is_published is a boolean. Boolean values can be True or False.

# Receiving Input

We can receive input from the user by calling the input() function.

```py
birth_year = int(input(‘Birth year: ‘))
```

The input() function always returns data as a string. So, we’re converting the
result into an integer by calling the built-in int() function.

# Strings

We can define strings using single (‘ ‘) or double (“ “) quotes.
To define a multi-line string, we surround our string with tripe quotes (“””).

```py
name = "Amarjit Pheiroijam"
age = 25

# Concatenate
print("Hello, My name is "+ name + "and Im am "+str(age))

# String Formating

# Argruments by position
print("Hello, My name is {name} and Im an {age}".format(name=name, age=age))
# F-Strings (3.6+)
print(f"Hello, My name is {name} and Im an {age}");
# Capitailize string
print(name.capitailize())

# Length
print(len(name))

# Count
find = 'a'
print(str(name.count(find))) # Print Number of A in name
```

We can get individual characters in a string using square brackets [].

```py
course = ‘Python for Beginners’
course[0] # returns the first character
course[1] # returns the second character
course[-1] # returns the first character from the end
course[-2] # returns the second character from the end
```

We can slice a string using a similar notation:
course[1:5]

The above expression returns all the characters starting from the index position of 1
to 5 (but excluding 5). The result will be ytho
If we leave out the start index, 0 will be assumed.
If we leave out the end index, the length of the string will be assumed.
We can use formatted strings to dynamically insert values into our strings:

```py
name = ‘Mosh’
message = f’Hi, my name is {name}’

message.upper() # to convert to uppercase
message.lower() # to convert to lowercase
message.title() # to capitalize the first letter of every word
message.find(‘p’) # returns the index of the first occurrence of p
 (or -1 if not found)
message.replace(‘p’, ‘q’)
```

To check if a string contains a character (or a sequence of characters), we use the in
operator: `contains = ‘Python’ in course`

# List

A list of a collection which is ordered and changeable, Allow duplicate memebers

```py
numbers = [1, 2, 3, 4, 5]
fruits = ["Apples","Oranges",]

# Push
fruits.append("Mangoes")

# Length
print(len(fruits))
```

```py
numbers = [1, 2, 3, 4, 5]
numbers[0] # returns the first item
numbers[1] # returns the second item
numbers[-1] # returns the first item from the end
numbers[-2] # returns the second item from the end

numbers.append(6) # adds 6 to the end
numbers.insert(0, 6) # adds 6 at index position of 0
numbers.remove(6) # removes 6
numbers.pop() # removes the last item
numbers.clear() # removes all the items
numbers.index(8) # returns the index of first occurrence of 8
numbers.sort() # sorts the list
numbers.reverse() # reverses the list
numbers.copy() # returns a copy of the list
```

# Tuples

A Tuple is a collection which is ordered and `unchangeable`. Allows duplicate members.

They are like read-only lists. We use them to store a list of items. But once we
define a tuple, we cannot add or remove items or change the existing items.

```py
coordinates = (1, 2, 3)
fruits = ("Apples",) # Tuple - Single Value need trailing comma

# We can unpack a list or a tuple into separate variables:
x, y, z = coordinates
```

# Set

A set is a collection which is unordered and unindexed. No duplicate Members

```py
fruits_sets = {"Apple","Oranges","Mangoes"}

# Check if in set
print("Apples" in fruits_sets)

fruits_set.add("Grapes")    # Add to set
fruits_set.remove("Grapes") # Remove from set


```

# Dictionaries

We use dictionaries to store key/value pairs.

```py
customer = {
 “name”: “John Smith”,
 “age”: 30,
 “is_verified”: True
}
```

We can use strings or numbers to define keys. They should be unique. We can use
any types for the values.

```py
customer[“name”] # returns “John Smith”
customer[“type”] # throws an error
customer.get(“type”, “silver”) # returns “silver”
customer[“name”] = “new name” # Assign new name

# Add new Key/Value
customer["phone"]=8132816260

# Remove
del(customer["phone"])
person.pop("age")
person.clear()

# Get Dic Items
customers.items()

# Copy dict
customer2 = customers.copy()
```
