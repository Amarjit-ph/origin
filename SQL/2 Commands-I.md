# SQL COMMANDS - I

Structure Query Language(SQL) is a database query language used for storing and managing data in Relational DBMS.

_Conventions_

Keywords - CAPITAL LETTER<br/>
Variables - small letter

# Getting Started

1. `mysql -u root -p` - Login Database
2. `ALTER USER 'root'@'localhost' IDENTIFIED BY 'password'` - Reset password
3. `system clear` - Clear Screen
4. `SHOW WARNINGS` - Warning statement to display information about errors & warnings

- Single line comments start with `--`.
- Multi-line comments start with /_ and end with _/.

# Database

1. `SHOW DATABASES;` - Show databases
2. `CREATE DATABASE databasename;` - Create New database
3. `DROP DATABASE databasename;` - Delete database
4. `USE databasename;` - Select database
5. `BACKUP DATABASE databasename TO DISK = 'filepath';` - Backup Database

Show currently use database - `SELECT database();`

# Table

## 1. Create Table

```
CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);
```

```SQL
CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);

```

Create Table Using Another Table

```
CREATE TABLE new_table_name AS
    SELECT column1, column2,...
    FROM existing_table_name
    WHERE ....;
```

```sql
CREATE TABLE TestTable AS
SELECT customername, contactname
FROM customers;
```

## 2. Drop Table

```
DROP TABLE table_name;
```

```sql
DROP TABLE Shippers;
```

TRUNCATE TABLE

Delete the data inside a table, but not the table itself.

```
TRUNCATE TABLE table_name;
```

## 3. Alter Table

The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.

```
ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;

ALTER TABLE table_name
MODIFY COLUMN column_name datatype;
```

```sql
ALTER TABLE Customers
ADD Email varchar(255);

ALTER TABLE Customers
DROP COLUMN Email;

ALTER TABLE Customers
MODIFY COLUMN Email varchar(500);
```

## 4. Constraints

Constraints can be specified when the table is created with the CREATE TABLE statement, or after the table is created with the ALTER TABLE statement.

```
CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);
```

- `NOT NULL `- Ensures that a column cannot have a NULL value
- `UNIQUE` - Ensures that all values in a column are different
- `PRIMARY KEY `- A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
- `FOREIGN KEY` - Prevents actions that would destroy links between tables
- `CHECK` - Ensures that the values in a column satisfies a specific condition
- `DEFAULT` - Sets a default value for a column if no value is specified
- `CREATE INDEX` - Used to create and retrieve data from the database very quickly

```sql
CREATE TABLE Persons (
    PersonID int NOT NULL,
    User varchar(100) NOT NULL UNIQUE,
    PRIMARY KEY (ID),
    Age int CHECK (Age>=18)
    City varchar(255) DEFAULT 'Imphal'
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

```

# Index

Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are just used to speed up searches/queries.

```
CREATE INDEX index_name
ON table_name (column1, column2, ...);
```

```sql
CREATE INDEX idx_lastname
ON Persons (LastName);
```

# Auto Increment

Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.

```sql
CREATE TABLE Persons (
    Personid int NOT NULL AUTO_INCREMENT,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    PRIMARY KEY (Personid)
);


ALTER TABLE Persons AUTO_INCREMENT=100;
```

# Date

MySQL comes with the following data types for storing a date or a date/time value in the database:

- DATE - format YYYY-MM-DD
- DATETIME - format: YYYY-MM-DD HH:MI:SS
- TIMESTAMP - format: YYYY-MM-DD HH:MI:SS
- YEAR - format YYYY or YY

```sql
SELECT * FROM Orders WHERE OrderDate='2008-11-11'
```

# Views

In SQL, a view is a virtual table based on the result-set of an SQL statement.

A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.

```
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

```sql
CREATE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName
FROM Customers
WHERE Country = 'Brazil';

SELECT * FROM [Brazil Customers];
```

```sql
CREATE VIEW [Products Above Average Price] AS
SELECT ProductName, Price
FROM Products
WHERE Price > (SELECT AVG(Price) FROM Products);

SELECT * FROM [Products Above Average Price];
```

SQL Updating a View

A view can be updated with the CREATE OR REPLACE VIEW statement.

```
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

```sql
CREATE OR REPLACE VIEW [Brazil Customers] AS
SELECT CustomerName, ContactName, City
FROM Customers
WHERE Country = 'Brazil';

DROP VIEW [Brazil Customers];
```

# SQL Functions

MySQL has many built-in functions.<br/>

1. String function
2. Numeric functions
3. Date functions
4. Aggregate functions

## STRING FUNCTIONS

[STRING FUNCTIONS DOCUMENTATION](https://dev.mysql.com/doc/refman/8.0/en/string-functions.html#function_lower)

| FUNCTION         | DESCRIPTION                                       |
| ---------------- | ------------------------------------------------- |
| LOWER            | Converts a string to lower-case                   |
| UPPER            | Converts a string to upper-case                   |
| CONCAT           | Adds two or more expressions together             |
| TRIM             | Removes leading and trailing spaces from a string |
| LENGTH           | Returns the length of a string (in bytes)         |
| REVERSE          | Reverses a string and returns the result          |
| CHARACTER_LENGTH | Returns the length of a string (in characters)    |

## NUMERIC FUNCTIONS

[NUMERIC FUNCTIONS DOCUMENTATION](https://dev.mysql.com/doc/refman/8.0/en/numeric-functions.html)

| FUNCTION | EXAMPLE QUERY        | RESULT | DESCRIPTION                                                 |
| -------- | -------------------- | ------ | ----------------------------------------------------------- |
| ABS      | `ABS(-32);`          | 32     | Returns the absolute value of a number                      |
| CEIL     | `CEILING(1.23);`     | 2      | Returns the smallest integer value that is >= to a number   |
| FLOOR    | `FLOOR(1.23);`       | 1      | Returns the largest integer value that is <= to a number    |
| ROUND    | `ROUND(1.298,1);`    | 1.3    | Rounds a number to a specified number of decimal places     |
| TRUNCATE | `TRUNCATE(1.223,1);` | 1.2    | Tuncates a number to the specified number of decimal places |
| MOD      | `MOD(34.5,3);`       | 1.5    | Returns the remainder of a number divided by another number |

## DATE FUNCTIONS

[DATE FUNCTIONS DOCUMENTATION](https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html)

| FUNCTION   | EXAMPLE QUERY                                            | RESULT              | DESCRIPTION                                            |
| ---------- | -------------------------------------------------------- | ------------------- | ------------------------------------------------------ |
| DATE       | `SELECT DATE('2003-12-31 01:02:03');`                    | 2003-12-31          | Extract the date part of a date or datetime expression |
| TIME       | `SELECT TIME('2003-12-31 01:02:03');`                    | 01:02:03            | Extract the time portion of the expression passed      |
| EXTRACT    | `SELECT EXTRACT(YEAR FROM '2019-07-02');`                | 2019                | Extract part of a date                                 |
| DATEFORMAT | `SELECT DATE_FORMAT('2009-10-04 22:23:00', '%W %M %Y');` | Sunday October 2009 | Format date as specified                               |

## AGGREGATE FUNCTIONS

[AGGREGATE FUNCTIONS DOCUMENTATION](https://dev.mysql.com/doc/refman/8.0/en/aggregate-functions.html)

| FUNCTION | EXAMPLE QUERY                                       | DESCRIPTION                                   |
| -------- | --------------------------------------------------- | --------------------------------------------- |
| COUNT    | `SELECT student.student_name,COUNT(*) FROM student` | Return a count of the number of rows returned |
| SUM      | `SELECT student.student_name,SUM() FROM student`    | Return the sum                                |
| AVERAGE  | `SELECT student_name, AVG(test_score) FROM student` | Return the average value of the argument      |
| MIN      | `SELECT student_name, MIN(test_score) FROM student` | Return the minimum value                      |
| MAX      | `SELECT student_name, MAX(test_score) FROM student` | Return the maximum value                      |
