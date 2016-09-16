# Sharding

## Implications of Sharding
* Consideration for Shard Key
- Every Document includes the shard key
- Shard key is immutable which means that it cannot be changed after inserting
- Need an index that starts with shard key
    + ex) Shard Key : Student_ID , Index : (Student_ID, class)
- Shard key has to be specified or a multi key
- No specified shard key -> scatter gather operation, which is expensive (send out queries across all the nodes)
- No unique index (unless it's part of shard key)
Think about it "What is a key that I am probably going to use in most queries?"


