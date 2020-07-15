## Arrays:
1. Static
2. Dynamic

Static:
Lookup O(1)
push O(1)
insert O(n)
delete O(n)

Dynamic
Lookup O(1)
append O(1) / O(n) if expanding on memory
insert O(n)
delete O(n)

Good:
Arrays are great when sorting is involved
Fast lookups
Fast push and pop
Ordered

Bad:
Slow insert 
Slow delete
Fixed size if static arrays

Array Questions: For searching - is the array sorted?
1. YES: Divide and conquer - Binary Search O(logN)
2. NO: Will sorting make it faster? If NO - linear search
3. NO: Is it a string? See if a Trie data structure helps

## Hash Tables:
Very useful
Use hash table to optimize stuff
Fast access but more memory - tradeoff!
Usually the answer to improve time complexity

# Good
Fast lookups
Fast inserts
Flexible keys
Collusion - might happen! If yes, use linked lists

Bad:
Unordered
Slow key iteration


