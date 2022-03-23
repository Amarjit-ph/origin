# SQL COMMANDS - II
Structure Query Language(SQL) is a database query language used for storing and managing data in Relational DBMS.

# SELECT

The SELECT statement is used to select data from a database.
The data returned is stored in a result table, called the result-set.

```
SELECT column1, column2, ...
FROM table_name;
```

```sql
SELECT CustomerName, City FROM Customers;
```

### 1.DISTINCT

```sql
SELECT DISTINCT Country FROM Customers;
```

# WHERE

```
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

```sql
SELECT * FROM Customers
WHERE Country='Mexico';

/* COMPARISON OPERATORS */
SELECT * FROM Customers
WHERE CustomerID>1;

/* BETWEEN */
SELECT * FROM Products
WHERE Price BETWEEN 50 AND 60;

/* LIKE */
SELECT * FROM Customers
WHERE City LIKE 'a%';

/* IN */
SELECT * FROM Customers
WHERE City IN ('Paris','London');
```

# AND, OR & NOT

```
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

```sql
SELECT * FROM Customers
WHERE Country='Germany' OR Country='Spain';

SELECT * FROM Customers
WHERE Country='Germany' AND City='Berlin';

SELECT * FROM Customers
WHERE NOT Country='Germany';
```

```sql
/* VARIATION */
SELECT * FROM Customers
WHERE Country='Germany' AND (City='Berlin' OR City='München');
```

# ORDER BY

```
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

```sql
SELECT * FROM Customers
ORDER BY Country DESC;
```

# INSERT INTO

```
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO table_name
VALUES (value1, value2, value3, ...);
```

```sql
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');
```

# NULL VALUES

```
SELECT column_names
FROM table_name
WHERE column_name IS NOT NULL/IS NULL;
```

```sql
SELECT CustomerName, ContactName, Address
FROM Customers
WHERE Address IS NULL;
```

# UPDATE

```
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

```sql
UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

/* WARNING */
/* If you omit the WHERE clause, ALL records will be updated! */
UPDATE Customers
SET ContactName='Juan';

```

# DELETE

```
DELETE FROM table_name WHERE condition;
```

```sql
DELETE FROM Customers WHERE CustomerName='Alfreds Futterkiste';

/* Delete all */
DELETE FROM Customers;
```

# LIMIT

```
SELECT column_name(s)
FROM table_name
WHERE condition
LIMIT number;
```

```sql
SELECT * FROM Customers
WHERE Country='Germany'
LIMIT 3;
```

# LIKE

```sql
SELECT * FROM Customers
WHERE CustomerName LIKE 'a%';
```

| LIKE Operator                    | Description                                                                  |
| -------------------------------- | ---------------------------------------------------------------------------- |
| WHERE CustomerName LIKE 'a%'     | Finds any values that start with "a"                                         |
| WHERE CustomerName LIKE '%a'     | Finds any values that end with "a"                                           |
| WHERE CustomerName LIKE '%or%'   | Finds any values that have "or" in any position                              |
| WHERE CustomerName LIKE '\_r%'   | Finds any values that have "r" in the second position                        |
| WHERE CustomerName LIKE 'a\_%'   | Finds any values that start with "a" and are at least 2 characters in length |
| WHERE CustomerName LIKE 'a\_\_%' | Finds any values that start with "a" and are at least 3 characters in length |
| WHERE ContactName LIKE 'a%o'     | Finds any values that start with "a" and ends with "o"                       |

# WILDCARDS

A wildcard character is used to substitute one or more characters in a string.

Wildcard characters are used with the LIKE operator. The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

| Symbol | Description                                                | Example                                |
| ------ | ---------------------------------------------------------- | -------------------------------------- |
| %      | Represents zero or more characters                         | bl% finds bl, black, blue, and blob    |
| \_     | Represents a single character                              | h_t finds hot, hat, and hit            |
| []     | Represents any single character within the brackets        | h[oa]t finds hot and hat, but not hit  |
| ^      | Represents any character not in the brackets               | h[^oa]t finds hit, but not hot and hat |
| -      | Represents any single character within the specified range | c[a-b]t finds cat and cbt              |

# IN

```sql
SELECT * FROM Customers
WHERE Country NOT IN ('Germany', 'France', 'UK');
```

```sql
SELECT * FROM Customers
WHERE Country IN (SELECT Country FROM Suppliers);
```

# BETWEEN

```sql
SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;
```

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20
AND CategoryID NOT IN (1,2,3);
```

# ALIASES

```sql
SELECT CustomerID AS ID, CustomerName AS Customer
FROM Customers;
```

# GROUP BY

The GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".

The GROUP BY statement is often used with aggregate functions `(COUNT(), MAX(), MIN(), SUM(), AVG())` to group the result-set by one or more columns.

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
```

# HAVING

The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

```
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5
ORDER BY COUNT(CustomerID) DESC;
```

# EXISTS

The SQL EXISTS Operator
The EXISTS operator is used to test for the existence of any record in a subquery.

The EXISTS operator returns TRUE if the subquery returns one or more records.

```sql
SELECT SupplierName
FROM Suppliers
WHERE EXISTS (SELECT ProductName FROM Products WHERE Products.SupplierID = Suppliers.supplierID AND Price < 20);
```

# ANY, ALL

The SQL ANY and ALL Operators
The ANY and ALL operators allow you to perform a comparison between a single column value and a range of other values.

The SQL ANY Operator
The ANY operator:

returns a boolean value as a result
returns TRUE if ANY of the subquery values meet the condition
ANY means that the condition will be true if the operation is true for any of the values in the range.

```sql
SELECT ProductName
FROM Products
WHERE ProductID = ANY
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);
```

```sql
SELECT ProductName
FROM Products
WHERE ProductID = ALL
  (SELECT ProductID
  FROM OrderDetails
  WHERE Quantity = 10);
```

# CASE

The CASE statement goes through conditions and returns a value when the first condition is met (like an if-then-else statement). So, once a condition is true, it will stop reading and return the result. If no conditions are true, it returns the value in the ELSE clause.

If there is no ELSE part and no conditions are true, it returns NULL.

```sql
SELECT OrderID, Quantity,
CASE
    WHEN Quantity > 30 THEN 'The quantity is greater than 30'
    WHEN Quantity = 30 THEN 'The quantity is 30'
    ELSE 'The quantity is under 30'
END AS QuantityText
FROM OrderDetails;
```

# STORED PROCEDURES

A stored procedure is a prepared SQL code that you can save, so the code can be reused over and over again.

So if you have an SQL query that you write over and over again, save it as a stored procedure, and then just call it to execute it.

You can also pass parameters to a stored procedure, so that the stored procedure can act based on the parameter value(s) that is passed.

```
CREATE PROCEDURE procedure_name
AS
sql_statement
GO;
```

```
EXEC procedure_name;
```

```sql
CREATE PROCEDURE SelectAllCustomers
AS
SELECT * FROM Customers
GO;
```

```sql
EXEC SelectAllCustomers;
```
