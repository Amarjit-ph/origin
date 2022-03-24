# MongoDB

MongoDB is an open-source document database and leading NoSQL database. MongoDB is written in C++. This tutorial will give you great understanding on MongoDB concepts needed to create and deploy a highly scalable and performance-oriented database.

- Humongous - Because it can store a lots of Data

Database > Collection s > Documents
Schemaless - Don't need to have same structure


```
NOSQL = Database > Collections > Documents [ No Relation between collections ]
```
# NoSQL
- Schema-less
- No/Few relations
- Data is typically merged in few collections
- Both horizontal and vertical scaling is possible
- Great performance for mass read & write requests


MongoDB stores data in BSON format both internally, and over the network, but that doesn’t mean you can’t think of MongoDB as a JSON database. Anything you can represent in JSON can be natively stored in MongoDB, and retrieved just as easily in JSON.

JSON(BSON) Data Format
```
{    
    "name":"Max",
    "age":29,
    "address":{
        "city":"Munich"
    },
    "hobbies": [
        {"name":"Cooking"},
    ]

}
```


# Relations Options

Relationships in MongoDB represent how various documents are logically related to each other. Relationships can be modeled via Embedded and Referenced approaches. Such relationships can be either 1:1, 1:N, N:1 or N:N.

## 1. Nested / Embedded Documents

```json
{    
    "name":"Max",
    "age":29,
    "address":{
        "city":"Munich"
    }
}
```
## 2. References

```json
{    
    "name":"Max",
    "age":29,
    "address":{
        "city":"Munich"
    }
}
```