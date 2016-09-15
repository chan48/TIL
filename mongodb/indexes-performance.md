# Indexes & Performance

## MongoDB Engines
- MMAP(deafult) :
- WiredTiger : 
- Storage doesn't affect the communications between the different MongoDB servers 

## Storage Engines : MMAP v1
- MMAP v1 is built on the top of MMap call system that maps files on disks into virtual memory
- MMap storage engine offers collection level concurrency / a collection level locking
- in place updates : try to do updates of data in place. If the memory is not enough, its gonna move to the other availble slot and update it over there.
- power of two sizes / power of two document padding  : 3kb -> 4kb, 7kb -> 8kb, 19kb -> 32kb. To update it in place

## Storage Engines : WiredTiger
- It offers a document level concurrency / a document level locking (X)
- **A lock free implementation** : an optimistic concurrency model / two writes are not going to be the same document 
- Compression : of documents, data, indexes. Before the WiredTiger memory write out data to the desk, it can compress them so that it can save a tremendous amount of space for certain types of data.
- It manages the memory that is used to access that file. 
- Manages the memory handling when mapping the files into the memory system
- No in place updates : will wind up rewritting the entire document to disk

How to use the WiredTiger Storage Engine
type : killall mongod -> mkdir WT -> mongod -dbpath WT -storageEngine wiredTiger
** You can't read the files written in MMAP v1 with WiredTiger ** 

## Indexes
- Index : an ordered set of things
- Writes : slower than if there was an index
- Read : faster
- The actual way that this index is structured is called a B-tree.
- To sort, MongoDB is using a binary search to go through them all.
- 

## Unique Indexes
- Unique Index 지정하기 : `db.stuff.createIndex({thing:1}, {unique:true})`
- 콜렉션의 특정 데이터를 지울 때 1개의 데이터만 지우기 : `db.stuff.remove({thing: "apple"}, {justOne:true})`

## Index Creation / Fore Ground & Back Ground
- foreground creation (default) : Relatively fast. Blocks writers and readers in the database
- background creation : The background index operation uses an incremental approach that is slower than the normal “foreground” index builds.

[Reference]
https://docs.mongodb.org/manual/core/index-creation/#index-creation-background

## Explain
- It doesn't bring data back from databases to the client
- Usage : `db.foo.explain().find()`
          `db.foo.explain().update()`
          `db.foo.explain().remove()`
- Winning plan(accepted plan) : the query got chosent to run
- Rejected plan : literally, it was rejected
- Usage in new syntax : `var exp = db.example.explain()` and then `exp.help();`
- Remember! : query doesn't work after remove() or other queries that don't return the cursors.

## Covered Query
- a query itself can be satisfied entirely with an index

## Slow Queries
- Mongo's default facility that logs slow queries of above 100 milliseconds right to the log

## Profiler
- Level 0 : off
- Level 1 : log slow queries
- Level 2 : log all my queries for debugging in general
- `db.setProfilingStatus()` , `db.setProfilingLevel(1,4)`
- 해석 : `db.system.profile.find({millis:{$gt:1000}}).sort({ts:-1})`

## Conclusion
- Indexes are critical to performance of databases.
- Explain command to look at what the db is doing for any particular queries in terms of how its using indexes
- Hint command to instruct the db to use a particular index for a query
- Profile is to figure out which of our queries are slow

## Mongotop (Similar with UnixTop)
- It gives you a high level view of where Mongo is spending its time.

## MongoStat (Similar with iOstat)
- A Performce tuning command
- executing two mongos at different port : `mongo` , `mongo --port 27018`
- reference : https://docs.mongodb.org/manual/reference/program/mongostat/

## Sharding
- A technique for splitting up a large collection amongst multiple servers.