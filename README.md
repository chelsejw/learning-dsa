# Learning Data Structures and Algorithms

Topic | Notes | Implementation | Practice
--- | --- | --- | ---
Linked Lists | ✅ | ✅ | ✅  Delete Node, ✅ Reverse, ✅  Does This Linked List Have a Cycle?, ✅ Kth to Last Node in a Singly-Linked List, Find Repeat, Space Edition
Stacks & Queues | N/A | N/A | Largest Stack, Implement A Queue With Two Stacks, Parenthesis Matching, Bracket Validator
Binary Search Trees | N/A | N/A | Balanced Binary Tree, Binary Search Tree Checker, 2nd Largest Item in a Binary Search Tree, Find Repeat, Space Edition
Binary Heaps | N/A | N/A | N/A
Hash Tables | N/A | N/A | Inflight Entertainment, Permutation Palindrome, Word Cloud Data, Top Scores
Graphs | N/A | N/A | Graph Coloring, MeshMessage, Dijkstra's Algorithm

# Data Structures

### Linked Lists
#### Characteristics
- Has a head and tail
- Consists of nodes that hold a value
- Each node has a uni/bidirectional pointer to the next (and previous, for doubly linked list) node


#### Pros
- Quick insertions & deletions


#### Cons
- Slow access (can't immediately access at an index, has to traverse down the list)

#### Big O

Insertion | Removal | Searching | Access
---|---|---|---
O(1) | Best case: O(1) vs Worst Case: O(n) | O(n) | O(n)


#### Singly Linked Lists vs Arrays
- Arrays are indexed in order, lists have no indexes
- Arrays can have expensive insertion/deletion because everything must be re-indexed
- Random access is quicker with arrays, as items can be accessed with a specific index


### Queues

#### Characteristics
- Similar to linked lists
- Has a first-in, first-out order

#### Uses
- Printing queues
- Web server requests - handled in order they are received
- CPU processes

#### Pros
- Fast operations -- everything takes O(1) time
- Good for breadth-first search

#### Cons
- Like linked lists, no random access

#### Big O
Space | Enqueue (Insert) | Dequeue (Remove) | Peek 
---|---|---|---
O(n) | O(1) | O(1) | O(1)


### Binary Search Trees

#### Characteristics

#### Pros

#### Cons

#### Big O
Insertion | Removal | Searching | Access
---|---|---|---
O(1) | Best case: O(1) vs Worst Case: O(n) | O(n) | O(n)


### Binary Heaps

#### Characteristics

#### Pros

#### Cons

#### Big O
Insertion | Removal | Searching | Access
---|---|---|---
O(1) | Best case: O(1) vs Worst Case: O(n) | O(n) | O(n)


### Hash Tables

#### Characteristics

#### Pros

#### Cons

#### Big O
Insertion | Removal | Searching | Access
---|---|---|---
O(1) | Best case: O(1) vs Worst Case: O(n) | O(n) | O(n)


### Graphs

#### Characteristics

#### Pros

#### Cons

#### Big O
Insertion | Removal | Searching | Access
---|---|---|---
O(1) | Best case: O(1) vs Worst Case: O(n) | O(n) | O(n)



# Algorithms
