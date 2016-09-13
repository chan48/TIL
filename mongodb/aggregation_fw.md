# Aggregation Framework

## 
- Aggregation FW : a set of analytic tools within MongoDB that allow the users to run various types of reports and analysis on documents in one or more collections.

## Dive-in aggregation
- commands
``` javascript
db.companies.aggregate([
    {},
    {}
]);
```

- pause for a while to think about the efficiency of the aggregation pipelines.
Which one is more efficient?
(1)
``` javascript
db.companies.aggregate([
    { $match : {founded_year:2004} },
    { $limit : 5},
    { $project : {
        _id : 0,
        name : 1 }
    }
])
```
(2)
``` javascript
db.companies.aggregate([
    { $match : {founded_year:2004} },
    { $project : {
        _id : 0,
        name : 1 }
    },
    { $limit : 5}
])
```

## Expressions
- $ means "give me that value"

## $unwind
- unwind will produce a number of output documents equal to the number of elements included in that field for each document it processes.

## Array Expressions
- $filter :
```javascript
db.companies.aggregate([
    { $match : {} },
    { $project: {
      _id: 0,
      name: 1,
      founded_year : 1,
      rounds: { $filter : {
        input: ,
        as: ,
        cond:
        }}  
    } },
])
```

- $$ : to reference a variable defined within the expression we're working in
- $arrayElemAt : access to the data of the index specified in the commands
- $slice : smiliar usage of javascript slice()
- $size : the same as above

## Accumulators
- group stage vs project stage
- project stage : $sum & $average must operate on arrays within a single document
- group stage : it provides you with the ability to perform calculations on values across multiple documents

## $group
- $group is similar to the SQL group by command.
- In a group stage, we can aggregate together values from multiple documents and perform some type of aggregate operation on them, such as calculating an average.
- 
