# SQL

A standard language for storing, manipulating and retrieving data in databases.

# Database

Data : Data is nothing but facts and statistics stored or free flowing over a network, generally it's raw and unprocessed.

A database is an organized collection of data,so that it can be easily accessed and managed.

# Database Management System

It is software for storing and retrieving users' data while considering appropriate
security measures. It consists of a group of programs which manipulate the database.

## Characteristics :

1. Data Stored into tables
2. Reduced Redundancy
3. Data Consistency
4. Query Language
5. Supports transactions

## Advantages of DBMS :

1. Segregation of application program.
2. Minimal data duplicated or data redundancy.
3. Easy retrieval of data using the Query Language.
4. Reduced development time and maintenance need.

## Models :

1. Hierarchical Model
2. Network Model
3. Entity-relationship Model
4. Relational Model

# Structure Query Language

SQL is a query language,for managing data in a relational database management system (RDBMS).

1. DDL - Data Definition Language - create,alter,drop,rename,truncate
2. DML - Data Manipulation Language - insert,update,delete,merge
3. TCL - Transaction Control Language - commit,rollback
4. DCL - Data Control Language - grant,revoke
5. DQL - Data Query Language - select

# Relational databases

All the RDBMS uses same language SQL with slight syntax difference.
Different RDBMS are unique with their own features.

1. MySQL
2. SQLite
3. PostgreSQL
4. Oracle

<b>Tables</b>

A table is a collection of related data held in a table format within a database.
Each table is identified by a name (e.g. "Customers" or "Orders"). Tables contain records (rows)
with data.

# Data types

An SQL developer must decide what type of data that will be stored inside each column
when creating a table, Each column in a database table is required to have a name and a data type.

[SQL Datatypes W3 Schools](https://www.w3schools.com/sql/sql_datatypes.asp)

<b>1.STRING TYPES</b>

1. char - Fixed width character string
2. varchar - Variable width character string
3. text - Holds a string with a maximum length of 65,535 bytes
4. longtext - String with a maximum length of 4,294,967,295 characters

<b>2.NUMERIC TYPES</b>

1. int - Whole Number with max value of 4294967295
2. decimal - An exact fixed-point number
3. float - A floating point number.
4. double - A normal-size floating point number.
5. Bool - Zero is considered as false, nonzero values are considered as true.

<b>3.DATA & TIMES</b>

1. date - Store a date only.
2. time - Store a time only to an accuracy of 100 nanoseconds
3. datetime - Store both date and time

# Operators

An operator is a symbol that tells the compiler to perform specific mathematical or logical functions.

1. Arithmetic Operators
2. Bitwise Operators
3. Comparison Operators
4. Compound Operators
5. Logical Operators

[SQL Operators w3 school](https://www.w3schools.com/sql/sql_operators.asp)

## 1. Arithmetic Operators

| Operator | Description |
| -------- | ----------- |
| +        | Add         |
| -        | Subtract    |
| \*       | Multiply    |
| /        | Divide      |
| %        | Modulo      |

## 2. Bitwise Operators

| Operator | Description          |
| -------- | -------------------- |
| &        | Bitwise AND          |
| \|       | Bitwise OR           |
| ^        | Bitwise exclusive OR |

## 3. Comparison Operators

| Operator | Description              |
| -------- | ------------------------ |
| =        | Equal to                 |
| >        | Greater than             |
| <        | Less than                |
| >=       | Greater than or equal to |
| <=       | Less than or equal to    |
| <>       | Not equal to             |

## 4. Logical Operators

| Operator | Description                                                  |
| -------- | ------------------------------------------------------------ |
| ALL      | TRUE if all of the subquery values meet the condition        |
| AND      | TRUE if all the conditions separated by AND is TRUE          |
| ANY      | TRUE if any of the subquery values meet the condition        |
| BETWEEN  | TRUE if the operand is within the range of comparisons       |
| EXISTS   | TRUE if the subquery returns one or more records             |
| IN       | TRUE if the operand is equal to one of a list of expressions |
| LIKE     | TRUE if the operand matches a pattern                        |
| NOT      | Displays a record if the condition(s) is NOT TRUE            |
| OR       | TRUE if any of the conditions separated by OR is TRUE        |
| SOME     | TRUE if any of the subquery values meet the condition        |

## 5. Compound Operators

| Operator | Description                                           |
| -------- | ----------------------------------------------------- |
| +=       | Add equals                                            |
| -=       | Subtract equals                                       |
| \*=      | Multiply equals                                       |
| /=       | Divide equals                                         |
| %=       | Modulo equals                                         |
| &=       | Bitwise AND equals                                    |
| ^-=      | Bitwise exclusive equals                              |
| \|\*=    | Bitwise OR equals                                     |
| OR       | TRUE if any of the conditions separated by OR is TRUE |
| SOME     | TRUE if any of the subquery values meet the condition |

# MySQL Functions

MySQL has many built-in functions.<br/>

1. String function
2. Numeric functions
3. Date functions
   and some advanced functions in MySQL.

[MySQL functions W3 Schools](https://www.w3schools.com/sql/sql_ref_mysql.asp)

<b>Aggregate functions</b>

In database management an aggregate function is a function where the values of multiple rows
are grouped together as input on certain criteria to form a single value of more significant
meaning.

- COUNT - Count the number of data in column
- GROUP BY - Summarizes or aggregate identical data into single rows
- MIN & MAX - Find the min or max value in a column
- SUM - Add all column values
- AVG - Average of the column values

# Relation

Any association between two entity types is called a relationship. Entities take part in the relationship. It is represented by a diamond shape. For example, A teacher teaches students

Types of Relation

1. One to one
2. One to Many
3. Many to Many

<b>Primary key </b>

The primary constraint uniquely identifies each record in a table.

- Primary keys must contain UNIQUE values, and cannot contain NULL values.
- A table can have only ONE primary key; and in the table,
- Primary key can consist of single or multiple columns (fields).

<b>Foreign key </b>

A foreign key is a field (or collection of fields) in one table,that refers to the primary key in another table.

- The table with the foreign key is called the child table,
- The table with the primary key is called the referenced or parent table.

# Normalization

Database normalization is a database schema design technique, by which an existing schema is modified to minimize redundancy and dependency of data.

Normalization split a large table into smaller tables and define relationships between them to increases the clarity in organizing data.

It is a systematic approach of decomposing tables to eliminate data redundancy and undesirable characteristics like Insertion, Update and Deletion Anomalies. It is a multi-step process that puts data into tabular form, removing duplicated data from the relation tables.

Normalization is used for mainly two purposes

1. Eliminating redundant(useless) data.
2. Ensuring data dependencies make sense i.e data is logically stored

Problems Without Normalization

1. Insertion Anomaly
2. Updation Anomaly
3. Deletion Anomaly

# Database Normalization Rule

Normalization rules are divided into the following normal forms:

1. First Normal Form
2. Second Normal Form
3. Third Normal Form
4. BCNF
5. Fourth Normal Form
6. Fifth Normal Form

[Database Normalization Example w3school](https://www.w3schools.in/dbms/database-normalization/)

## First Normal Form

- Each column is unique in 1NF.

Each column of your table should be single valued which means they should not contain multiple values.

## Second Normal Form

- The table should be in the First Normal Form.
- There should be no Partial Dependency.

All attributes within the entity should depend solely on the unique identifier of the entity.

## Third Normal Form

- It should be in the Second Normal form.
- It should not have Transitive Dependency.

The entity should be considered already in 2NF, and no column entry should be dependent on any other entry (value) other than the key for the table.

If such an entity exists, move it outside into a new table. 3NF is achieved, considered as the database is normalized.

## Boyce-Codd Normal Form

- 3NF and all tables in the database should be only one primary key.

For a table to satisfy the Boyce-Codd Normal Form, it should satisfy the following two conditions:

1. It should be in the Third Normal Form.
2. And, for any dependency A → B, A should be a super key.
3. The second point sounds a bit tricky, right? In simple words, it means, that for a dependency A → B, A cannot be a non-prime attribute, if B is a prime attribute.

## Fifth Normal Form

A composite key shouldn't have any cyclic dependencies.

Well, this is a highly simplified explanation for Database Normalization. One can study this process extensively, though. After working with databases for some time, you'll automatically create Normalized databases, as it's logical and practical.
