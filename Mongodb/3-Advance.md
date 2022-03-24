# ADVANCE COMMANDS
Advance CRUD Operations

One of the objectives of the expressive query syntax is to bring the power of MongoDB’s aggregation expressions to MongoDB’s query language. 

# EXPRESSIVE QUERY OPERATOR
One of the objectives of the expressive query syntax is to bring the power of MongoDB’s aggregation expressions to MongoDB’s query language. 
```
$expr: {
   $eq: [
     "$totalWithVAT",
     {$multiply: [
       "$total", 
       {$sum: [1, "$VAT"]}
     ]}
   ]
}
```

POINTS
- Allow for more complex queries and for comparing fields within a documents
- The $ can be used to access the field value
- Syntax for comparison operators using aggregation

# AGGREGATION FRAMEWORK

Mongodb Query Language is a subset of Mongodb Aggregation framework,
Everything can also be implemented in  Aggregation framework

MQL
```
db.listingsAndReviews.find(
  { "amenities": "Wifi" },
  { "price": 1, "address": 1, "_id": 0 }).pretty()
```
AGGREGATION
- Aggregation Framework > MQL
- Pipeline stages in order
- $ Syntax

Pipeline - Order of Action in pipeline matter
```
db.listingsAndReviews.aggregate([
  { "$match": { "amenities": "Wifi" } },
  { "$project": { "price": 1,"address": 1,"_id": 0 }}
  ]).pretty()
```

$group - An operator that takes the incoming stream of data and siphons it into multiple distinct reservoirs.
 
```
db.listingsAndReviews.aggregate([ 
  { "$project": { "address": 1, "_id": 0 }},
  { "$group": { "_id": "$address.country" }}])
```

# CURSOR METHOD
In MongoDB, when the find() method is used to find the documents present in the given collection, then this method returned a pointer which will points to the documents of the collection, now this pointer is known as cursor.

- sort()
- limit()
- pretty()
- count()

Always sort first before Limit
```
db.zips.find().sort({ "pop": -1 }).limit(10)
```

# DATA MODELLING
A way to organize fields in a documents to support your application performance and querying capabilities.

- Data that is stored together should be stored
- Optimize your schema for more frequent use cases.
- Always design schema according to user requirements.

# INDEXES
Indexes support the efficient resolution of queries. Without indexes, MongoDB must scan every document of a collection to select those documents that match the query statement. This scan is highly inefficient and require MongoDB to process a large volume of data.

`Indexes are special data structures, that optimize your query`, 
that store a small portion of the data set in an easy-to-traverse form. The index stores the value of a specific field or set of fields, ordered by the value of the field as specified in the index.

```
db.trips.createIndex({ "birth year": 1 })
db.trips.createIndex({ "start station id": 1, "birth year": 1 })// Compound Index
```

# UPSERT
In MongoDB, upsert is an option that is used for update operation e.g. update(), findAndModify(), etc. Or in other words, upsert is a combination of update and insert `(update + insert = upsert)`.

If the value of this option is set to true and the document or documents found that match the specified query, then the update operation will update the matched document or documents. Or if the value of this option is set to true and no document or documents matches the specified document, then this option inserts a new document in the collection and this new document have the fields that indicate in the operation. 

By default, the value of the upsert option is false. If the value of upsert in a sharded collection is true then you have to include the full shared key in the filter. 

```
db.employee.findAndModify(
  {query:{name:"Ram"}, 
  update:{$set:{department:"Development"}},
  upsert:true}
)
```