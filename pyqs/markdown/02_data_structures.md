# Data Structures


> **Subject:** Data Structures  

> **Pages in Book:** 51–94  

> **Total Modules:** 5


## Topics in this Subject


## Topic 1: DATA STRUCTURE


### Q1. [GATE CSE]


> **Topic:** DATA STRUCTURE | **Marks:** 2 | **Difficulty:** Medium


A Young tableau is a 2D array of integers  
increasing from left to right and from top to bottom. 
Any unfilled entries are marked with ∞, and hence 
there cannot be any entry to the right of, or below a 
∞. The following Young tableau consists of unique 
entries. 
When an element is removed from a Young 
tableau, other elements should be moved into its 
place so that the resulting table is still a Young 
tableau (unfilled entries may be filled with a ∞). 
The minimum number of entries (other than 1) to 
be shifted, to re move 1 from the given Young 
tableau is    .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

Explanation: 
Replace 1 with 2 (keep 5 and 14 unchanged). 
Shift 4 upward next to 2 (column order 
maintained). 
Move 6 left in the second row. 
Shift 18 upward to the second row. 
Move 25 left to the third column. 
Total shifts = 5


</details>

---


### Q2. [GATE CSE]


> **Topic:** DATA STRUCTURE | **Marks:** 2 | **Difficulty:** Medium


Consider the following two C code segments. Y  
and X are one and two dimensional arrays of size n 
and n×n respectively, where 2 ≤n≤10. Assume that 
in both code segments, elements of Y are initialized 
to 0 and each element X[i][j] of array X is 
initialized to i+j. Further assume that when stored 
in main memory all elements of X are in same main 
memory page frame. 
Code segment 1: 
// initialize elements of Y to 0 
// initialize elements of X[i][j] of X to i+j 
for (i=0; i<n; i++) 
Y[i] += X[0][i]; 
Code segment 2: 
// initialize elements of Y to 0 
// initialize elements of X[i][j] of X to i+j 
for (i=0; i<n; i++) 
Y[i] += X[i][0]; 
Which of the following statements is/are correct? 
S1: Final contents of array Y will be same in both 
code segments 
S2: Elements of array X accessed inside the for loop 
shown in code segment 1 are contiguous in main 
memory 
S3: Elements of array X accessed  inside the for loop 
shown in code segment 2 are contiguous in main 
memory


- **(A)** Only S2 is correct

- **(B)** Only S3 is correct

- **(C)** Only S1 and S2 are correct

- **(D)** Only S1 and S3 are correct



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation: S1: 
Code 1: Y[i] = X[0][i] = 0 + i = i 
Code 2: Y[i] = X[i][0] = i + 0 = i 
Same final Y → True 
z=1 (at the start of do-something) 
i=0 (start of external for loop) 
In the do loop 
z=1∗1 (non-zero value so considered as true and 
continue) 
c[0]=1 so in the if clause, z=1∗2%8=2 
In the do loop 
z = 2 ∗2 % 8 = 4 (since now z = 2 z = 2) (non-zero 
value so considered as true and continue) 
c[0]=1, so in the if clause, z = 4 ∗2% 8 = 0 
Now no need to check further : 
Reason : All the operations that update Z are 
multiplicative operations and hence the value of Z 
will never change from 0. 
S2: 
Code 1 accesses X[0][0], X[0][1], … → contiguous 
in memory → True 
S3: 
Code 2 accesses X[0][0], X[1][0], … → stride = n, 
not contiguous → False 
Answer: S1 and S2 are correct.


</details>

---


### Q3. [GATE CSE – 2015 SET – 3 MCQ (2-MARKS]


> **Topic:** DATA STRUCTURE | **Marks:** 2 | **Difficulty:** Medium


Suppose c = ⟨c[0], …, c[k−1]⟩ is an array of length k, 
where all the entries are from the set {0,1}. For any 
positive integers a and n, consider the following 
pseudocode. 
DOSOMETHING (c, a, n) 
z←1 
for i←0 to k−1 
do z←z2 mod n 
if c[i]=1 
then z←(z×a) mod n 
return z 
If k = 4, c = ⟨1, 0, 1, 1⟩, a = 2, and n = 8 
then the output of DO SOMETHING (c, a, n) is 
 .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 0


**Step-by-Step Explanation:**

Explanation: Now let's iterate through the function 
step by step : 
<!-- PAGE 55 -->
LINKED LIST 
GATE CSE – 2023 MCQ (1-MARKS) 
after the execution of the code segment is 
 . (Answer in integer)


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following code snippet in C language 
that computes the number of nodes in a non-empty 
singly linked list pointed to by the pointer variable 
head. 
struct node{ 
int elt; 
struct node *next; 
} 
int getListSize (struct node *head) 
{ 
if( El ) return 1; 
return E2; 
} 
Which one of the following options gives the 
correct replacements for the expressions E1 and 
E2?


- **(A)** E1: head == NULL 
E2: 1 + getListSize(head)

- **(B)** E1: head->next == NULL 
E2: 1 + getListSize(head->next)

- **(C)** E1: head == NULL 
E2: 1 + getListSize(head->next)

- **(D)** E1: head->next == NULL 
E2: 1 + getListSize(head)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation : The list is non-empty, so head is 
never NULL. 
To compute size recursively: 
Base case: 
If this is the last node → return 1 
Condition for last node: 
head->next == NULL 
Recursive case: 
Otherwise → 1 + size of remaining list 
So: 
1 + getListSize(head->next) 
Check options: 
Correct combination is: 
E1: head->next == NULL 
E2: 1 + getListSize(head->next)


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let LIST be a datatype for an implementation of 
linked list defined as follows: 

```c
typedef struct list { 
int data; 
struct list *next; 
} LIST; 
Suppose the program has created two linked lists, 
L1 and L2, whose contents are given in the figure 
below (code for creating L1 and L2 is not 
provided here). L1 contains 9 nodes, and L2 
contains 7 nodes. 
Consider the following C program segment that 
modifies the list L1. The number of nodes in L1 
int find (int query, LIST *list) { 
while (list != NULL){ 
if(list->data == query) return 1; 
list = list->next; 
} 
return 0; 
} 
int main () { 
… … … 
ptr1=L1; ptr2=L2; 
while (ptr1->next != NULL){ 
query = ptr1->next->data; 
if (find (query, L2)) 
ptr1->next = ptr1->next->next; 
else ptr1 = ptr1->next; 
} 
… … … 
return 0; 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5 to 5


**Step-by-Step Explanation:**

Explanation : L1 has nodes: 1 → 7 → 12 → 3 → 9 
→ 5 → 11 → 15 → 8 (total 9) 
L2 has nodes: 1 → 11 → 6 → 9 → 15 → 12 → 4 
The function find(query, L2) checks whether a value 
exists in L2. 
In the loop: 
We always check ptr1->next (not the current node) 
If the next node’s value is found in L2, that node is 
deleted 
Otherwise, we move forward 
Important point: the first node (1) is never checked 
or deleted. 
Now check each node of L1 (except first): 
7 → not in L2 → keep 
12 → in L2 → delete 
3 → not in L2 → keep 
9 → in L2 → delete 
5 → not in L2 → keep 
11 → in L2 → delete 
15 → in L2 → delete 
8 → not in L2 → keep 
Final L1 becomes: 1 → 7 → 3 → 5 → 8 
Total nodes = 5 
GATE CSE – 2008 MCQ (2-MARKS) 
<!-- PAGE 59 -->
DATA STRUCTURE


</details>

---


### Q3. [GATE CSE – 2026 SET – 1 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let SLLdel be a function that deletes a node in a 
singly-linked list given a pointer to the node and a 
pointer to the head of the list. Similarly, let DLLdel 
be another function that deletes a node in a doubly -
linked list given a pointer to the node and a pointer to 
the head of the list. 
Let n denote the number of nodes in each of the linked 
lists. Which one of the following choices is TRUE 
about the worst-case time complexity of SLLdel and 
DLLdel?


- **(A)** SLLdel is O(1) and DLLdel is O(n).

- **(B)** Both SLLdel and DLLdel are O(log(n)).

- **(C)** Both SLLdel and DLLdel are O(1).

- **(D)** SLLdel is O(n) and DLLdel is O(1).



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: 
In a singly linked list (SLL), each node has only a 
pointer to the next node. If we are given a pointer 
to the node to delete, we still need to know its 
previous node to change the link (prev->next = 
node->next). Since there is no backward pointer, 
we must traverse the list from the head to find the 
previous node. In the worst case, this takes O(n) 
time. 
In a doubly linked list (DLL), each node has 
pointers to both next and previous nodes. So, if we 
are given the node to delete, we can directly 
access its previous node and adjust links (prev- 
>next and 
next->prev) without any traversal. This takes O(1) 
time.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the problem of reversing a singly linked 
list. To take an example, given the linked list below, 
the reversed linked list should look like, 
Which one of the following statements is TRUE 
about the time complexity of algorithms that solve 
the above problem in O(1) space?


- **(A)** The best algorithm for the problem takes θ(n) 
time in the worst case.

- **(B)** The best algorithm for the problem takes 
θ(nlogn) time in the worst case.

- **(C)** The best algorithm for the problem takes 
θ(n2) time in the worst case.

- **(D)** It is not possible to reverse a singly linked list 
in O(1) space.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation:: 
To reverse a singly linked list in O(1) auxiliary  
space, an iterative, in -place reversal algorithm is 
used. This standard approach utilizes three pointers 
to keep track of the nodes during traversal: prev 
(initialized to NULL), 
curr (initialized to head), and 
next (initialized to NULL). 
Algorithm: 
While curr is not NULL, the following constant- 
time operations are performed:


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C program: 

```c
#include <stdio.h> 
#include <stdlib.h> 
struct Node{ 
int value; 
struct Node *next;}; 
int main(){ 
struct Node *boxE, *head, *boxN; int index = 0; 
boxE = head=(struct Node*)malloc(sizeof(struct 
Node)); 
head→value = index; 
for (index = 1; index <= 3; index++) 
{ 
boxN = (struct Node *) malloc(sizeof(struct Node)); 
boxE →next = boxN; 
boxN→va1ue = index; 
boxE = boxN:
```


- **(A)** It dereferences an uninitialized pointer that may 
result in a run-time error.

- **(B)** It has a missing return which will be reported as 
an error by the compiler.

- **(C)** Upon execution, the program creates a linked list 
of five nodes.

- **(D)** Upon execution, the program goes into an infinite 
loop.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: 
The program creates 4 nodes (values 0,1,2,3).In 
the last iteration of the printing loop, 
head = head->next 
makes head point to an uninitialized memory 
location (because the last node’s next was never 
set to NULL). 
Then printf tries to read head->value from this 
uninitialized pointer → dereferencing uninitialized 
pointer → possible runtime error. 
Correct option: 
It dereferences an uninitialized pointer that may 
result in a run-time error.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the worst case time complexity of inserting n 
elements into an empty linked list, if the linked list 
needs to be maintained in sorted order?


- **(A)** Θ(n log n)

- **(B)** Θ(n2 )

- **(C)** Θ(1).

- **(D)** Θ(n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation 
Single Insertion Complexity: To insert a single 
element into a sorted linked list of size 𝑘, you 
must traverse the list to find the correct position. 
In the worst case (inserting the largest element), 
you perform 𝑘 comparisons/steps, which is 𝑂(𝑘). 
Total Work for 𝑛 Elements: When inserting 𝑛 
elements sequentially: 
● 1st insertion: 0 steps 
● 2nd insertion: 1 step 
● 3rd insertion: 2 steps 
● 𝑛-th insertion: 𝑛 − 1 steps 
Mathematical Sum: The total number of 
operations is the sum of the first 𝑛 − 1 integers: 
1. next = curr.next (Store the next node) 
2. curr.next = prev (Reverse the link) 
3. prev = curr (Advance the prev pointer) 
𝑛−1 
∑ 𝑖 = 
𝑖=1 
(𝑛 − 1)𝑛 
4. curr = next (Advance the curr pointer) 
Complexity Analysis: 
 Space Complexity: The algorithm allocates 
memory only for three node pointers. This 
memory requirement does not scale with the input 
size n. Therefore, the space complexity is strictly 
O(1). 
 Time Complexity: The algorithm traverses the 
linked list exactly once. For a linked list 
containing n nodes, the loop executes exactly n 
times. Since the operations inside the loop take 
constant time, the total time taken  is directly 
proportional to n. Thus, the time complexity is 
tightly bound at 𝜃(𝑛) for all cases, including the 
worst case. 
Conclusion: This results in a quadratic growth 
rate, expressed as 𝛩(𝑛2).


</details>

---


### Q7. [GATE CSE – 2021 SET – 2 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A queue is implemented using a non -circular singly 
linked list. The queue has a head pointer and a tail 
pointer, as shown in the figure. Let n denote the 
number of nodes in the queue. Let 'enqueue' be 
implemented by inserting a new node at the head, and 
'dequeue' be implemented by deletion of a node from 
the tail. 
Which one of the following is the time complexity of 
the most time-efficient implementation of 'enqueue' 
and 'dequeue, respectively, for this data structure?


- **(A)** θ(1), θ(1)

- **(B)** θ(1), θ(n)

- **(C)** θ(n), θ(1)

- **(D)** θ(n), θ(n) 
} 
for (index = 0; index <= 3; index++) 
{ 
printf(“Value at index %d is %d\n”, index, head- 
>value); 
head = head→next; 
printf(“Value at index %d is %d\n”, index+1, 
head→value); 
} 
}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation: For insertion of node at the 
beginning of linked list only need manipulation 
of pointers so θ(1) time. 
But if we have pointer to the tail of the list in order 
to delete it, we need the address of the 2nd last node 
which can be obtained by traversing the list which 
takes O(n) time.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the C code fragment given below. 

```c
typedef struct node { 
int data; 
node* next ; 
} node; 
void join (node* m, node* n) { 
node* p=n ; 
while (p->next ! =NULL){ 
p = p -> next ; 
} 
p-> next = m; 
} 
Assuming that m and n point to valid NULL-
terminated linked lists, invocation of join will
```


- **(A)** append list m to the end of list n for all 
inputs.

- **(B)** either cause a null pointer to dereference or 
append list m to the end of list n.

- **(C)** cause a null pointer to dereference for all 
inputs.

- **(D)** append list n to the end of list m for all 
inputs.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Explanation: 
Function join(m, n) works as follows: 
It starts with p = n 
Then traverses list n using while (p->next != NULL) 
<!-- PAGE 60 -->
DATA STRUCTURE 
Finally, it sets p->next = m, which attaches list m 
at the end of n 
Now consider cases: 
If n is non-empty (valid list) 
The loop runs correctly 
p reaches the last node of n 
p->next = m → list m gets appended to n 
If n is NULL 
p = n = NULL 
Then p->next is accessed in the loop condition → 
null pointer dereference 
So: 
Works correctly when n is not NULL 
Crashes when n is NULL


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


N items are stored in a sorted doubly linked list. 
For a delete operation, a pointer is provided to the 
record to be deleted. For a decrease-key operation, 
a pointer is provided to the record on which the 
operation is to be performed. 
An algorithm performs the following operations on 
the list in this order: 
Θ(N) delete, O(logN) insert, O(logN) find and 
Θ(N)decrease−key . What is the time complexity of 
all these operations put together?


- **(A)** O(log2N)

- **(B)** O(N)

- **(C)** O(N2)

- **(D)** O(N2logN)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation: We analyze each operation on a 
sorted doubly linked list. 
Delete: Given pointer to node, deletion in DLL 
takes O(1). Done Θ(N) times → total O(N). 
Insert: To maintain sorted order, we must find 
correct position → takes O(N). Done O(log N) 
times → total O(N log N). 
Find: Searching in DLL takes O(N). Done O(log N) 
times → total O(N log N). 
Decrease-key: After decreasing value, node may 
need to move to correct position. In worst case, we 
traverse list → O(N) per operation. Done Θ(N) 
times → total O(N²). 
Now combine all: 
O(N) + O(N log N) + O(N log N) + O(N²) 
Dominant term is O(N²)


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An unordered list contains n distinct elements. The 
number of comparisons to find an element in this list 
that is neither maximum nor minimum is :


- **(A)** O(nlogn)

- **(B)** O(n)

- **(C)** O(logn)

- **(D)** O(1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: 
We need an element that is neither maximum nor 
minimum. 
Take any three distinct elements from the list. 
Compare the first two → 1 comparison (we know 
which is smaller and larger).Now compare the third 
element with these → at most 2 more comparisons. 
From these 3 elements, we can always identify the 
middle element, which is neither max imum nor 
minimum. 
Total comparisons needed = at most 3, which is a 
constant.


</details>

---


### Q11. [GATE CSE – 2017 SET – 1 MCQ (1-MARK]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following C function takes a singly-linked list as 
input argument. It modifies the list by moving the last 
element to the front of the list and returns the 
modified list. Some part of the code is left blank. 
Choose the correct alternative to replace the blank 
line. 
typedef struct node 
{ 
int value; 
struct node *next; 
}Node; 
Node *move_to_front(Node *head) 
{ 
Node *p, *q; 
if ((head == NULL: || (head->next == NULL)) 
return head; 
q = NULL; p = head; 
while (p-> next !=NULL) 
{ 
q = p; 
p = p->next; 
} 
return head; 
}


- **(A)** q = NULL; p→next = head; head = p;

- **(B)** q→next = NULL; head = p; p→next = head;

- **(C)** head = p; p→next = q; q→next = NULL;

- **(D)** q→next = NULL; p→next = head; head = p;



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: 
C function takes a simple linked list as input 
argument. 
The function modifies the list by moving the last 
element to the front of the list. 
Let the list be 1 → 2 → 3 → 4 & the modified list 
must be 4 → 1 → 2 → 3. 
Algorithm: 
Traverse the list till last node. Use two pointers. 
One to store the address of last node & other for the 
address of second last node. 
After completion of loop. Do these. 
(i) Make second last as last 
(ii) Set next of last as head 
(iii) Make last as head 
while (p → !=NULL) 
{ 
q = p; 
p = p → next; 
} 
— p is travelling till the end of list and assigning q 
to whatever p had visited & p takes next new node, 
so travels through the entire list. 
Now the list looks like 
According to the Algorithm new lines must be: 
q → next = NULL; p → next = head; head = p


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following C function takes a singly -linked list 
of integers as a parameter and rearranges the 
elements of the list. The function is called with the 
list containing the integers 1,2,3,4,5,6,7 in the given 
order. What will be the contents of the list after the 
function completes execution? 

```c
struct node { 
int value; 
struct node *next; 
}; 
void rearrange (struct node *list){ 
struct node *p, *q; 
int temp; 
if (!list || !list->next) return; 
p = list; 
q = list->next; 
while (q) { 
temp = p->value; 
p->value = q->value; 
q->value = temp; 
p = q->next; 
q = p ? p->next : 0; 
} 
}
```


- **(A)** 1,2,3,4,5,6,7

- **(B)** 2,1,4,3,6,5,7

- **(C)** 1,3,2,5,4,7,6

- **(D)** 2,3,4,5,6,7,1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation : Initial list: 
1 → 2 → 3 → 4 → 5 → 6 → 7 
The function swaps values of nodes in pairs. 
First iteration: 
p = 1, q = 2 
Swap → 2,1 
Move pointers: 
p = 3, q = 4 
Second iteration: 
Swap 3 and 4 → 4,3 
Move pointers: 
p = 5, q = 6 
Third iteration: 
Swap 5 and 6 → 6,5 
Move pointers: 
p = 7, q = NULL 
Loop stops. 
Final list: 2,1,4,3,6,5,7 
<!-- PAGE 61 -->
GATE CSE – 2016 SET – 1 MCQ (1-MARKS) 
GATE CSE – 2016 SET – 1 NAT (2-MARKS) 
3 STACK & QUEUE


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a stack 𝑆 and a queue 𝑄. Both of them are 
initially empty and have the capacity to store ten 
elements each. The elements 1,2,3,4, and 5 arrive 
one by one, in that order. When an element arrives, 
it is assigned either to 𝑆 (pushed on 𝑆 ) or to 𝑄 
(enqueued to 𝑄 ). Once all the five elements are 
stored, the output is generated in two steps. First, 
stack S is emptied by popping all elements. Then 
queue 𝑄 is emptied by dequeueing all elem ents. 
The output obtained by following this process is 
43125 . 
Given the output, the objective is to predict whether 
an element was assigned to 𝑆 or 𝑄. 
Which of the following options is/are possible valid 
assignment(s) of the elements? 
Note: In the options, the notation 𝑥𝑆 denotes that 
element 𝑥 was assigned to 𝑆 and 𝑦𝑄 denotes that 
element 𝑦 was assigned to 𝑄.


- **(A)** 1S,2Q,3S,4S,5Q

- **(B)** 1Q,2Q,3S,4S,5Q

- **(C)** 1Q,2Q,3Q,4S,5S

- **(D)** 1S,2S,3S,4Q,5Q



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,B


**Step-by-Step Explanation:**

Explanation : Process Recap 
● Elements arrive in order: 1, 2, 3, 4, 5 
● Each element assigned to either stack S (LIFO) 
or 
queue Q (FIFO) 
● Output: first pop all from S (reverse push order), 
then dequeue all from Q (arrival order) 
● Given output: 4 3 1 2 5 
Check each option: 
Option A: 1S, 2Q, 3S, 4S, 5Q 
S push order: 1, 3, 4 → pop: 4, 3, 1 
Q enqueue order: 2, 5 → dequeue: 2, 5 
Output: 4 3 1 2 5 
Option B: 1Q, 2Q, 3S, 4S, 5Q 
S push order: 3, 4 → pop: 4, 3 
Q enqueue order: 1, 2, 5 → dequeue: 1, 2, 5 
Output: 4 3 1 2 5 
Option C: 1Q, 2Q, 3Q, 4S, 5S 
S push order: 4, 5 → pop: 5, 4 
Q enqueue order: 1, 2, 3 → dequeue: 1, 2, 3 
Output: 5 4 1 2 3 
Option D: 1S, 2S, 3S, 4Q, 5Q 
S push order: 1, 2, 3 → pop: 3, 2, 1 
Q enqueue order: 4, 5 → dequeue: 4, 5 
Output: 3 2 1 4 5 
Valid assignments: Options A and B 
GATE CSE – 2007 MCQ (2-MARKS) GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2006 MCQ (2-MARKS) 
<!-- PAGE 64 -->
DATA STRUCTURE


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following sequence of operations on 
an empty stack. 
push(54); push(52); pop(); push(55); push(62); s = 
pop(); 
Consider the following sequence of operations on 
an empty queue. 
enqueue (21); enqueue (24); dequeue (); enqueue 
(28); enqueue (32); q = dequeue(); 
The value of s +q is  . 
We maintain exactly two external pointers FRONT 
and REAR pointing to the front node and the rear 
node of the queue, respectively. Which of the 
following statements is/are CORRECT for such a 
circular queue, so that insertion and deletion 
operations can be performed in O(1) time? 
I. Next pointer of front node points to the rear node. 
II. Next pointer of rear node points to the front node.


- **(A)** I only

- **(B)** II only

- **(C)** Both I and II

- **(D)** Neither I nor II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 86


**Step-by-Step Explanation:**

Explanation


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A queue is implemented using an array such that 
ENQUEUE and DEQUEUE operations are 
performed efficiently. Which one of the following 
statements is CORRECT ( n refers to the number of 
items in the queue)? 
Both operations can be performed in O(1) time.


- **(A)** Both operations can be performed in O(1) 
time

- **(B)** At most one operation can be performed in 
O(1) time but the worst case time for the 
other operation will be Ω(n)

- **(C)** The worst case time complexity for both 
operations will be Ω(n)

- **(D)** Worst case time complexity for both 
operations will be Ω(logn)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: Since it is mentioned in the 
question that both of the operations are 
performed efficiently. 
Hence even the worst case time complexity will be 
O(1) by the use of the Circular queue there won't be 
any need of shifting in the array.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let Q denote a queue containing sixteen numbers and 
S be an empty stack. Head(Q) returns the element at 
the head of the queue Q without removing it from Q. 
Similarly Top(S) returns the element at the top of S 
without removing it from S. Consider the algorithm 
given below.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 256


**Step-by-Step Explanation:**

Explanation: The maximum possible number of 
iterations of the while loop in this algorithm is: 
Try to solve it for 3 numbers [1. 2, 3]. 
Step 1: Initially Queue contains 3 elements so 
after 5 while loop iterations queue contains 3, 2 
and stack contains 1. 
Step 2: Now after 3 more while loop iterations, 
Queue contains 3 and stack contains 1, 2 (TOS = 2). 
Step 3: After 1 more while loop iteration, push 3 
onto the stack so queue is empty and stack contains 
1, 2, 3 {top = 3}. 
So, total number of iterations will be 5 + 3 + 1 = 9 
i.e., for 3 it is 9 iterations (3*3) 
for 4 it is 16 iterations (4*4) 
Given: 16 numbers, so 16 * 16 = 256


</details>

---


### Q3. [GATE CSE – 2026 SET – 2 MSQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A circular queue has been implemented using a 
singly linked list where each node consists of a 
value and a single pointer pointing to the next node.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation: 
1. Next pointer of front node points to the rear 
node. 
2. Next pointer of rear points to the front node. 
So if we consider circular linked list the next of 44 
is 11. 
If you place pointer on next of front node (11) 
then to reach 44 (last node), we have to traverse 
the entire list. 
For delete O(1), for insert O(n). 
It is clearly known that next pointer of rear node 
points to the front node. 
Hence, only II is true.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The result evaluating the postfix expression 
10 5+60 6/∗8−is


- **(A)** 248

- **(B)** 213

- **(C)** 142

- **(D)** 71



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation: 
10 5 + 60 6 / ∗ 8 − 
We read tokens left to right, using a stack: 
1.10 → push 10 → Stack: [10] 
2. 5 → push 5 → Stack: [10, 5] 
3. + → pop 5, pop 10 → 10 + 5 = 15 → push 15 → 
Stack: [15] 
4.60 → push 60 → Stack: [15, 60] 
5. 6 → push 6 → Stack: [15, 60, 6] 
6. / → pop 6, pop 60 → 60 / 6 = 10 → push 10 → 
Stack: [15, 10] 
7. ∗ → pop 10, pop 15 → 15 ∗ 10 = 150 → push 
150 → Stack: [150] 
8. 8 → push 8 → Stack: [150, 8] 
9 − → pop 8, pop 150 → 150 − 8 = 142 → push 142 
→ Stack: [142]


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the C program below 

```c
#include <stdio.h> 
int *A, stkTop; 
int stkFunc (int opcode, int val) 
{ 
static int size=0, stkTop=0; 
switch (opcode) { 
case -1: size = val; break; 
case 0: if (stkTop< size ) 
A[stkTop++]=val; break; 
default: if (stkTop) return A[--stkTop]; 
} 
return -1; 
} 
int main() 
{ 
int B[20]; A=B; stkTop = -1; 
stkFunc (-1, 10); 
stkFunc (0, 5); 
stkFunc (0, 10); 
printf ("%d\n", stkFunc(1, 0)+ stkFunc(1, 0)); 
} 
The value printed by the above program is 
 .
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 15


**Step-by-Step Explanation:**

Explanation: The code is pushing 5 and 10 on stack 
and then popping the top two elements and printing 
their sum. 
stkFunc (-1, 10); // Initialize size as 10 
stkFunc (0, 5); // push 5 
stkFunc (0, 10); // push 10 
// print sum of two pop 
printf ("%d\n", stkFunc(1, 0) + stkFunc(1, 0));


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose a stack implementation supports an 
instruction REVERSE, which reverses the order of 
elements on the stack, in addition to the PUSH and 
POP instructions. Which one of the following 
statements is TRUE (with respect to this modified 
stack)?


- **(A)** A queue ca nnot be implemented using this 
stack.

- **(B)** A queue can be implemented where 
ENQUEUE takes a single instruction and 
DEQUEUE takes a sequence of two 
instructions.

- **(C)** A queue can be implemented where 
ENQUEUE takes a sequence of three 
instructions and DEQUEUE takes a single 
instruction.

- **(D)** A queue can be implemented where both 
ENQUEUE and DEQUEUE take a single 
instruction each.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation: (C) is the answer. While ENQUEUE 
we REVERSE the stack, PUSH the element and then 
again REVERSE the stack. For DEQUEUE we 
simply POP the element. 
(Option (B) can be used to get the first element from 
the stack by doing a POP after REVERSE for 
DEQUEUE and PUSH for ENQUEUE. But we have 
to restore the stack using REVERSE(otherwise nex t 
POP won't work) which means DEQUEUE actually 
needs 3 instructions and not 2) 
<!-- PAGE 65 -->
DATA STRUCTURE


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The recurrence relation capturing the optimal 
execution time of the Towers of Hanoi problem with 
n discs is


- **(A)** T(n) = 2T(n - 2) + 2

- **(B)** T(n)= 2T(n - 1) + n

- **(C)** T(n)= 2T(n/2) + 1

- **(D)** T(n)= 2T(n - 1) + 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: The recurrence equation for given 
recurrence function is 
T(n) = 2T(n – 1) + 1 
= 2 [2T(n – 2) + 1] + 1 
= 22 T(n – 2) + 2+1 
⋮ 
= 2k T( n – k) + (2k – 1) 
Given , n – k = 1 
= 2n-1 T(1) + (2n-1 – 1) 
= 2n-1 + 2n-1 – 1 
= 2n – 1 
≌ O(2n)


</details>

---


### Q10. [GATE CSE – 2013 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose a circular queue of capacity (n - 1) elements 
is implemented with an array of n elements. Assume 
that the insertion and deletion operations are carried 
out using REAR and FRONT as array index 
variables, respectively. Initially, REAR = FRONT = 
0. The conditions to detect queue full and queue 
empty are


- **(A)** full: (REAR+1)mod n == FRONT, 
empty: REAR == FRONT

- **(B)** full: (REAR+1)mod n == FRONT, 
empty: (FRONT+1) mod n == REAR

- **(C)** full: REAR == FRONT, 
empty: (REAR+1) mod n == FRONT

- **(D)** full: (FRONT+1)mod n == REAR 
empty: REAR == FRONT



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: 
We know that (Rear +1 )mod 𝑛 == Front ; Full 
Rear == Front Empty 
To circulate within the queue, we have to write 
mod n for (Rear + 1). 
We insert elements using Rear & delete through 
Front.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The following postfix expression with single digit 
operands is evaluated using a stack: 
8 2 3 ^ / 2 3 * + 5 1 * - 
Note that is the exponentiation operator. The top 
two elements of the stack after the first * is 
evaluated are:


- **(A)** 6,1

- **(B)** 5,7

- **(C)** 3,2

- **(D)** 1,5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation : Postfix expression: 
8 2 3 ^ / 2 3 * + 5 1 * − 
Evaluate step by step using stack. 
Push 8 
Push 2 
Push 3 
^ → 2^3 = 8 
Stack: 8, 8 
/ → 8 / 8 = 1 
Stack: 1 
Push 2 
Push 3 
→ 2 × 3 = 6 ← first * evaluated 
Stack now: 1, 6 
Top element = 6 
Next element = 1 
Correct answer: (A) 6, 1


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An implementation of a queue Q, using two stacks 
S1 and S2, is given below: 

```c
void insert (Q, x) { 
push(S1, x);
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A.


**Step-by-Step Explanation:**

Explanation : Each insert does exactly one push 
on S1. 
So from n inserts → n pushes. 
Now consider delete operations. 
Each element can be moved from S1 to S2 at most 
once. 
When this happens: 
one pop from S1 
one push to S2 
So across the whole sequence, total extra pushes due 
to transfer ≤ n. 
Also, each delete performs exactly one pop from S2. 
So total pops due to delete = m. 
Additionally, during transfer, each element popped 
from S1 contributes one pop. 
Total such pops ≤ n. 
Now count pushes (x): 
Pushes = 
n (from insert) 
at most n (during transfer) 
So: 
n ≤ x < 2n 
But since m deletes must succeed (m ≤ n), at least m 
transfers must happen overall in worst case 
arrangement, giving: 
n + m ≤ x < 2n 
Now count pops (y): 
Each delete → one pop from S2 → m pops 
Each transferred element → one pop from S1 → at 
most n pops 
Minimum pops occur when transfers happen only as 
needed: 
Total pops satisfy: 
2m ≤ y ≤ n + m 
Therefore correct option is: A. n + m ≤ x < 2n and 
2m ≤ y ≤ n + m


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An Abstract Data Type (ADT) is:


- **(A)** same as an abstract class

- **(B)** a data type that cannot be instantiated

- **(C)** a data type for which only the operations 
defined on it can be used, but none else

- **(D)** All of the above



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Explanation : 
An Abstract Data Type (ADT) defines: 
• The data 
• The operations allowed on the data 
• But not the implementation details 
It focuses only on what operations can be performed, 
not how they are implemented. 
Now check options: 
● Not same as an abstract class 
● Not necessarily a type that cannot be instantiated 
● Correct definition: only the defined operations 
can be used 
<!-- PAGE 66 -->
GATE 2026 SET 1 || NAT || 2 MARKS GATE 2026 SET 2 || MSQ || 1 MARK 
GATE 2023 || MCQ || 2 MARK 
4 TREE & HEAP


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The height of a binary tree is the number of edges 
in the longest path from the root to a leaf in the tree. 
The maximum possible height of a full binary tree 
with 23 nodes is  . (answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11


**Step-by-Step Explanation:**

Explanation: 
In a full binary tree, every internal node has 
exactly 2 children. 
Let 
I = number of internal nodes 
L = number of leaves 
For a full binary tree: 
L = I + 1 
Total nodes: 
N = I + L 
N = I + (I + 1) 
N = 2I + 1 
Given N = 23: 
2I + 1 = 23 
2I = 22 
I = 11 
Now, to get maximum height, the tree must be as 
skewed as possible while still being full. 
In a full binary tree, maximum height occurs when 
at each level, only one subtree continues 
downward and the other is a leaf. 
For a full binary tree: 
Maximum height = I 
Since I = 11, 
Maximum possible height = 11


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The following sequence corresponds to the 
preorder traversal of a binary search tree 
𝑇: 50, 25, 13, 40, 30, 47, 75, 60, 70, 80, 77 . 
The position of the element 60 in the post-order 
traversal of 𝑇 is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

Explanation: 
Given preorder of BST: 
50, 25, 13, 40, 30, 47, 75, 60, 70, 80, 77 
Step 1: Construct BST using preorder. 
Root = 50 
Left subtree (< 50): 
25, 13, 40, 30, 47 
Right subtree (> 50): 
75, 60, 70, 80, 77 
Build left subtree: 
Left: 13 
Right: 40 
40 → Left: 30, Right: 47 
Build right subtree: 
Left: 60 
60 → Right: 70 
Right of 75 → 80 
80 → Left: 77 
Final tree structure: 
Step 2: Postorder (Left, Right, Root) 
Left subtree postorder: 
13, 30, 47, 40, 25 
Right subtree postorder: 
70, 60, 77, 80, 75 
Whole tree postorder: 
13, 30, 47, 40, 25, 70, 60, 77, 80, 75, 50 
Now find position of 60. 
Counting from 1: 
1 → 13 
2 → 30 
3 → 47 
4 → 40 
5 → 25 
6 → 70 
7 → 60 
Position of 60 = 7


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The set T represents various traversals over binary 
tree. The set S represents the order of visiting nodes 
during a traversal 
T S 
I : Inorder L: left subtree, node, right 
subtree 
II : Preorder M: node, left subtree, right 
subtree 
III : Postorder N :  left  subtree,  right 
subtree, node 
Which one of the following is the correct match 
from T to S?


- **(A)** 1-L, II-M, III - N

- **(B)** I-M, II-L, III - N

- **(C)** I-N, II-M, III - L

- **(D)** I-L, II-N, III - M



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation : Inorder → Left subtree, Node, Right 
subtree 
Preorder → Node, Left subtree, Right subtree 
Postorder → Left subtree, Right subtree, Node 
<!-- PAGE 76 -->
DATA STRUCTURE 
Now match with given labels: 
L → Left subtree, Node, Right subtree 
M → Node, Left subtree, Right subtree 
N → Left subtree, Right subtree, Node 
So correct matching: 
I (Inorder) → L 
II (Preorder) → M 
III (Postorder) → N 
Correct answer: I – L, II – M, III – N


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a binary search tree (BST) with n leaf nodes 
(n > 0). Given any node V, the key present in the node 
is denoted as Val(V). All the keys present in the given 
BST are distinct. The keys belong to the set of real 
numbers. 
For a node V, let Suc (V) denote the node that is its 
inorder successor. If a node V does not have an 
inorder successor, then Suc (V) is NULL. As there are 
no duplicates, if Suc (V) is not NULL, then Val(V) < 
Val(Suc(V)). 
Corresponding to every leaf node L₁ that has a non -
NULL Suc (L i), a new key k i with the following 
property is to be inserted into the BST. 
Val(Li) <ki < Val(Suc(Li)) 
Let K represent the list of all such new keys to be 
inserted into the BST. 
Which of the following statements is/are true?


- **(A)** K cannot have any duplicates

- **(B)** K will have at least one element

- **(C)** After inserting all keys from K, the height of 
the BST can increase at most by one

- **(D)** Number of nodes in the BST will double after 
inserting all keys from K



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C


**Step-by-Step Explanation:**

Explanation: 
Given: For every leaf LiL_iLi having a non-
NULL inorder successor, one key is inserted 
between 
Val(Li) and Val(Suc(Li)). 
(A) No duplicates in K 
Each leaf has a unique inorder successor, so 
each new key lies in a distinct interval. 
Intervals do not overlap → no duplicates. 
True. 
(B) K will have at least one element 
If BST has only one node (one leaf), it has no 
successor. 
So no key is inserted. False. 
(C) Height increases at most by one 
Each new key becomes a child of an existing leaf. 
So only one extra level can be added. 
True. 
(D) Number of nodes will double 
Number of inserted keys ≤ number of leaves − 1. 
So total nodes do not double. 
False. 
Correct answer: A and C


</details>

---


### Q5. [GATE CSE - 2020 MCQ || 1-mark]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the C function foo and the binary tree 
shown 
GATE 2026 SET 2 || MCQ || 1 MARK 
GATE 2026 SET 1 || NAT|| 2 MARK 
<!-- PAGE 67 -->
DATA STRUCTURE 
GATE 2021 SET 1 || MCQ || 1-mark


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
Evaluation of retVal for each node: 
For node whose value is 3, retVal = 3 + 0 + 0 = 3 
For node whose value is 8, retVal = 8 + 0 + 0 = 8 
For node whose value is 5, retVal = 5 + 3 + 8 = 16 
For node whose value is 13, retVal = 13 + 0 + 0 = 
For node whose value is 11, retVal = 11 + 0 + 13 
= 24 
For node whose value is 10, retVal = 10 + 16 + 24 
= 50


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Suppose a binary search tree with 1000 distinct 
elements is also a complete binary tree. The tree is 
stored using the array representation of binary heap 
trees. Assuming that the array indices start with 0, 
the 3rd largest element of the tree is stored at index


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 509


**Step-by-Step Explanation:**

Explanation: 
BST Structure: In a Binary Search Tree, the 
largest elements are always in the rightmost path. 
●  Array Representation: For a node at index i, the 
right child is at index 2i + 2 (assuming 0-based 
indexing). 
● Finding the Largest: 
● Largest (Root of rightmost subtree): For 1000 
nodes, the rightmost leaf is found by 
repeatedly moving right: 0 -> 2 -> 6 -> 14 -> 
30 -> 62 -> 126 -> 254 -> 510 
● 2nd Largest: This would be the parent of the 
largest leaf: index 254. 
● 3rd Largest: In this setting, the 3rd largest 
element is the left child of the second largest 
element. 
Calculation: Index of left child = 2 * 254 + 1 = 509


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let H be a binary min -heap consisting of n  
elements implemented as an array. What is the 
worst case time complexity of an optimal algorithm 
to find the maximum element in H '?


- **(A)** Θ(n)

- **(B)** Θ(1)

- **(C)** Θ(logn)

- **(D)** Θ(n log n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
In a binary min-heap, the smallest element is at the 
root (index 0), accessible in O(1) time. 
The largest element in a min-heap must be a leaf 
node, because if an internal node were the largest, it 
would violate the heap property (parent ≤ children). 
Leaves are at indices from ⌊n/2⌋ to n-1, and there are 
roughly n/2 leaves. 
An optimal algorithm scans only the leaf nodes to 
find the maximum. 
Scanning n/2 elements takes O(n) time in the worst 
case. 
Thus, the worst-case time complexity is: 
O(n)


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


An articulation point in a connected graph is a 
vertex such that removing the vertex and its 
incident edges disconnects the graph into two or 
more connected components. Let T be a DFS three


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
(a) We need at least 2 children so that root is 
articulation point. 
(b) False: This can never happen. Leaf will 
always have degree = 1. 
(c) False: Check option (a) for more information. 
(d) False: Below is the reasoning to show how 
this is false. 
<!-- PAGE 77 -->
DATA STRUCTURE 
If u is articulation point. then removing u generates 
2 connected components, now there might be a case 
when x and y will belong to either one of the 
connected component and hence a path will exist 
between them without passing through u.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a complete binary tree with 7 nodes. Let A 
denote the set of first 3 elements obtained by 
performing Breadth-First Search (BFS) starting from 
the root. Let B  denote the set of first 3 elements 
obtained by performing Depth -First Search (DFS) 
starting from the root.The value of |A – B| is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1


**Step-by-Step Explanation:**

Explanation: 
For a complete binary tree with 7 nodes (labeled 1 
to 7 in level-order), we compare the first 3 elements 
of BFS and DFS. 
BFS (Set A): Level-by-level traversal. 
First 3 elements: {1, 2, 3} 
DFS (Set B): Pre-order traversal (Root Left → 
Right). 
First 3 elements: {1, 2, 4} 
Calculation: 
AB represents elements in A that are not in B. 
A- B = {3} 
Value of AB = 1


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A binary search T contains n distinct elements. What 
is the time complexity of picking an element in T that 
is smaller than the maximum element in T?


- **(A)** Θ(n)

- **(B)** Θ(log n)

- **(C)** Θ(n log n)

- **(D)** Θ(1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 𝑫


**Step-by-Step Explanation:**

Explanation: 
To find smaller than maximum element, it may 
take O(n) in worst case if elements are 
duplicate 
To find element smaller than maximum, you need 
to reach leaf. It takes O(n). 
Note: If all elements are district time complexity is 
O(1)


</details>

---


### Q11. [GATE CSE – 2021 SET 1 MCQ (1-MARK]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a balanced binary search tree with n elements, what 
is the worst case time complexity of reporting all 
elements in range [a,b]? Assume that the number of 
reported elements is k.


- **(A)** Θ(n log k)

- **(B)** Θ(log n + k)

- **(C)** Θ(k log n)

- **(D)** Θ(logn) 
GATE 2021 SET 2 || MCQ || 2-mark 
GATE 2021 set 2 || NAT || 1-mark



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
The idea is to traverse the given binary search tree 
starting from root. For every node being visited, 
check if this node lies in range, if yes, then add 1 
to result and recur for both of its children. If the 
current node is smaller than the low value of 
range, then recur for right child, else recur for left 
child. 
Time complexity of the above program is O(h + k) 
where h is the height of BST and k is the number of 
nodes in a given range. 
Here h is logn, hence O(logn+k)


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the worst case time complexity of inserting 
n2 elements into an AVL -tree with n elements 
initially?


- **(A)** Θ(n4)

- **(B)** Θ(n2)

- **(C)** Θ(n3)

- **(D)** Θ(n2 log n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

AVL Tree all operations(insert, delete and search) 
will take O(logn) time. 
In question they asked about n2 elements. 
So, In worst case it will take o(n2logn) time.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The preorder traversal of a binary search tree is 15, 
10, 12, 11, 20, 18, 16, 19. 
Which one of the following is the postorder 
traversal of the tree?


- **(A)** 20, 19, 18, 16, 15, 12, 11, 10

- **(B)** 11, 12, 10, 16, 19, 18, 20, 15

- **(C)** 10, 11, 12, 15, 16, 18, 19, 20

- **(D)** 19, 16, 18, 20, 11, 12, 10, 15



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
Preorder of BST is: 15, 10, 12, 11, 20, 18, 16, 19. 
In a Binary Search Tree, left subtree contains values 
smaller than root and right subtree contains values 
greater than root. 
First element of preorder is the root. So root = 15. 
Elements smaller than 15 form the left subtree: 10, 
12, 11. 
Elements greater than 15 form the right subtree: 20, 
18, 16, 19. 
Left subtree: 
Root = 10. 
12 is greater than 10, so it is right child of 10. 
11 is less than 12 but greater than 10, so it becomes 
left child of 12. 
Postorder of left subtree (Left, Right, Root): 
11, 12, 10 
Right subtree: 
Root = 20. 
18 is less than 20, so it is left child of 20. 
<!-- PAGE 78 -->
DATA STRUCTURE 
16 is less than 18, so it is left child of 18. 
19 is greater than 18 but less than 20, so it is right 
child of 18. 
Postorder of right subtree: 
16, 19, 18, 20 
Final postorder (Left, Right, Root): 
11, 12, 10, 16, 19, 18, 20, 15


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let T be a full binary tree with 8 leaves. (A full 
binary tree has every level full.) Suppose two 
leaves a and b of T are chosen uniform ly and 
independently at random. The expected value of the 
distance between a and b in T (i.e., the number of 
edges in the unique path between a and b) is 
(rounded off to 2 decimal places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4.24 - 4.26


**Step-by-Step Explanation:**

Explanation: 
Two leaf nodes can be selected in 8*8 = 64 ways 
No. of pairs with path length 08. (When a = b ) 
No. of pairs with path length 28. (For each of the 8 
leaf nodes, we have a pair and since the selection is 
independent order of the pair is also significant) 
No. of pairs with path length 416. (For each leaf 
node we have to go two levels up and while coming 
down we have 2 choices. So, we get 8 * 2 = 16 
pairs) 
No. of pairs with path length 632. (For  each leaf 
node we have to go till the root, and from there 
while coming down it has 2 * 2 = 4 choices. Thus 
we get 8 * 4 = 32 pairs. 
Total number of possible pairs = 8 * 8 = 64 
So, expected path length 
= 0 × 8 + 2 × 8  + 4 × 16 + 6 × 32 = 272 = 4.25 
● Root 16 
● Left of 16: 15 
● Right of 16: 19, 17, 20 
Postorder (Left, Right, Root): 
● Left subtree postorder: 2, 7, 6, 10, 9, 8 
● Right subtree postorder: 15, 17, 20, 19, 16 
● Root: 12 
Final postorder: 2, 7, 6, 10, 9, 8, 15, 17, 20, 19, 
16, 12


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The pre-order traversal of a binary search tree is 
given by 12, 8, 6, 2, 7, 9, 10, 16, 15, 19, 17, 20. 
Then the post-order traversal of this tree is:


- **(A)** 2, 6, 7, 8, 9, 10, 12, 15, 16, 17, 19, 20

- **(B)** 2, 7, 6, 10, 9, 8, 15, 17, 20, 19, 16, 12

- **(C)** 7, 2, 6, 8, 9, 10, 20, 17, 19, 15, 16, 12

- **(D)** 7, 6, 2, 10, 9, 8, 15, 16, 17, 20, 19, 12



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
Preorder: 12, 8, 6, 2, 7, 9, 10, 16, 15, 19, 17, 20 
BST reconstruction: 
● Root 12 
● Left subtree (all <12): 8, 6, 2, 7, 9, 10 
● Right subtree (all >12): 16, 15, 19, 17, 20 
Left subtree preorder: 8, 6, 2, 7, 9, 10 
● Root 8 
● Left of 8: 6, 2, 7 
● Right of 8: 9, 10 
Right subtree preorder: 16, 15, 19, 17, 20


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let T be a binary search tree with 15 nodes. The 
minimum and maximum possible heights of T are: 
Note: The height of a tree with a single node is 0.


- **(A)** 4 and 15 respectively

- **(B)** 3 and 14 respectively

- **(C)** 4 and 14 respectively

- **(D)** 3 and 15 respectively



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
T be a Binary Search Tree with 15 nodes. The height 
of a tree with single node is 0. Minimum possible 
height is when it is a complete binary tree. 
Maximum possible height is when it is a skewed tree 
left/right. 
So the minimum and maximum possible heights of T 
64 64 64 64 64 are: 3 and 14 respectively.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A binary tree T has 20 leaves. The number of nodes 
in T having two children is  .


- **(A)** 19

- **(B)** 20

- **(C)** 21

- **(D)** 22



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 19


**Step-by-Step Explanation:**

Explanation: 
Let the number of vertices of a binary tree with „p‟ 
leaves be n then the tree has 
(i) p vertices (i.e., leaves) of degree 1 
(ii) one vertex (i.e.., root of T) of degree 2 
(iii) 'n- p-1' (i.e., interval) vertices of degree 3 
(iv) n- 1 edges 
∴ By Handshaking theorem, 
p × 1 + 1 × 2 + (n – p – 1) × 3 = 2(n – 1) 
⇒ n = 2p – 1 = 39 as p = 20 
∴ n-p=19 vertices have exactly two children 
<!-- PAGE 79 -->
DATA STRUCTURE


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


An operator delete(i) for a binary heap data structure 
is to be designed to delete the item in the i -th node. 
Assume that the heap is implemented in an array and 
i refers to the i -th index of the array. If the heap tree 
has depth d (number of edges on the path from th e 
root to the farthest leaf), then what is the time 
complexity to re -fix the heap efficiently after the 
removal of the element?


- **(A)** O(1)

- **(B)** O(d) but not O(1)

- **(C)** O(2d) but not O(d)

- **(D)** O(d2d) but not O(2d)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
When you delete an arbitrary element at index ii 
in a binary heap: 
1. Swap the element at index ii with the last 
element in the heap. 
2. Remove the last element (now the original ii-th 
element). 
3. Heapify from index ii: 
○ May need to bubble up if it's larger than its 
parent (if it's a max-heap) 
○ Or bubble down if it's smaller than one of its 
children 
○ But since we don't know whether it's too large 
or too small, we must check both. 
However, in practice, we compare with parent: 
● If it's greater than parent (in max-heap), bubble 
up — O(d) 
● Else, bubble down — O(d) 
So in either case, we do at most one path up or 
down the tree. 
Height d = depth = O(log n) 
Thus time complexity = O(d)=O(log n) 
FINAL ANSWER = O(d)


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A complete binary min -heap is made by including 
each integer in [1, 1023] exactly once. The depth of a 
node in the heap is the length of the path from the root 
of the heap to that node. Thus, the root is at depth 0. 
The maximum depth at which integer 9 can appear is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 8


**Step-by-Step Explanation:**

Explanation: 
Here node with integer 1 has to be at root only. Now 
for maximum depth of the tree the following 
arrangement can be taken. Take root as level 1. 
make node 2 at level 2 as a child node of node 1. 
make node 3 at level 3 as the child node of node 2. 
.. 
.. and so on for nodes 4,5,6,7 
.. 
make node 8 at level 8 as the child node of node 7. 
make node 9 at level 9 as the child node of node 8. 
Putting other nodes properly, this arrangement of the 
complete binary tree will follow the property of min 
heap. 
So total levels are 9. node 9 is at level 9 and depth of 
node 9 is 8 from the root.


</details>

---


### Q20. [GATE CSE - 2017 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The number of ways in which the numbers 1, 2,  3, 4, 
5, 6, 7 can be inserted in an empty binary search tree, 
such  that  the  resulting  tree  has  height  6,  is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
Height = 6 means maximum possible height for 7 
nodes. 
So the BST must be completely skewed (a chain of 
7 nodes). 
Now think carefully. 
For height to be 6, at every step after choosing the 
root, all remaining elements must go only to one 
side (either all smaller or all greater). 
First, choose the root. 
If root is 1, then all remaining 6 elements (2–7) must 
go to the right side. 
If root is 7, then all remaining 6 elements (1–6) 
must go to the left side. 
If root is anything between 2 and 6, then some 
elements will go left and some right, so height will 
be less than 6. So only 1 or 7 can be the root. 
After fixing the root (say 1), the remaining 6 
elements must again form a skewed BST of height 5. 
So the problem reduces recursively. 
For 7 nodes to form a chain, at each step we must 
choose either the smallest or the largest element 
among the remaining elements. 
At first step: 2 choices (1 or 7). 
At second step: again 2 choices (smallest or largest 
of remaining 6). 
At third step: again 2 choices. 
This continues for 6 steps. 
Total ways = 2 × 2 × 2 × 2 × 2 × 2 
= 2⁶ 
= 64 
<!-- PAGE 80 -->
DATA STRUCTURE


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following New -order strategy for 
traversing a binary tree: 
• Visit the root; 
• Visit the right subtree using New-order; 
• Visit the left subtree using New-order; 
The New-order traversal of the expression tree 
corresponding to the reverse polish expression 3 4 
* 5 - 2 ˆ 6 7 * 1 + - is given by:


- **(A)** + - 1 6 7 * 2 ˆ 5 - 3 4 *

- **(B)** - + 1 * 6 7 ˆ 2 - 5 * 3 4

- **(C)** - + 1 * 7 6 ˆ 2 - 5 * 4 3

- **(D)** 1 7 6 * + 2 5 4 3 * - ˆ -



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - - C


**Step-by-Step Explanation:**

Explanation: 
New Order strategy: Root, Right, Left. 
Given Reverse Polish Notation as: 
3 4 * 5 - 2 ^ 6 7 * 1 + - 
We know Reverse Polish Notation takes Left, 
Right, Root. 
From the tree, we can write the New Order traversal 
as: Root, Right, Left. 
– + 1 * 7 6 ^ 2 – 5 * 4 3


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following array of elements. 〈89, 19, 
50, 17, 12, 15, 2, 5, 7, 11, 6, 9, 100〉. The minimum 
number of interchanges needed to convert it into a 
max-heap is


- **(A)** 4

- **(B)** 5

- **(C)** 2

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Explanation: 
Array: [89, 19, 50, 17, 12, 15, 2, 5, 7, 11, 6, 9, 100] 
Heapify from last parent (index 5) to root: 
1. Index 5 (15): children 9, 100 → swap with 
100 → [89, 19, 50, 17, 12, 100, 2, 5, 7, 11, 6, 
9, 15] 
2. Index 2 (50): children 100, 2 → swap with 
100 → [89, 19, 100, 17, 12, 50, 2, 5, 7, 11, 6, 
9, 15] 
3. Index 0 (89): children 19, 100 → swap with 
100 → [100, 19, 89, 17, 12, 50, 2, 5, 7, 11, 6, 
9, 15] 
No further swaps needed. 
Total interchanges = 3


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a max heap, represented by the array: 40, 
30, 20, 10, 15, 16, 17, 8, 4. Now consider that a 
value 35 is inserted into this heap. After insertion, 
the new heap is


- **(A)** 40, 30, 20, 10, 15, 16, 17, 8, 4, 35

- **(B)** 40, 35, 20, 10, 30, 16, 17, 8, 4, 15

- **(C)** 40, 30, 20, 10, 35, 16, 17, 8, 4, 15

- **(D)** 40, 35, 20, 10, 15, 16, 17, 8, 4, 30



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
After insertion of 35 the heap becomes: 
Swapping 15 and 35


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a binary tree T that has 200 leaf nodes. 
Then, the number of nodes in T that have exactly two 
children are


- **(A)** 199

- **(B)** 198

- **(C)** 197

- **(D)** 196



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 199


**Step-by-Step Explanation:**

Explanation: 
A binary tree T with n leaf nodes have exactly (n - 
1) nodes that have exactly two children. 
Binary tree property: 
Leaves=Nodes with 2 children + 1 
Given leaves = 200: 
N2+1 =200 
N2. = 199 
<!-- PAGE 81 -->
DATA STRUCTURE


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The height of a tree is the length of the longest root -
to-leaf path in it. The maximum and minimum 
number of nodes in a binary tree of height 5 are


- **(A)** 63 and 6, respectively

- **(B)** 64 and 5, respectively

- **(C)** 32 and 6, respectively

- **(D)** 31 and 5, respectively



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Height = 5 ⇒ longest path has 5 edges ⇒ 6 
nodes on that path. 
● Maximum nodes in a binary tree of height h: 
Full binary tree: 2h+1−1 nodes. 
For h=5 then 64-1 = 63 nodes. 
● Minimum nodes in a binary tree of height h: 
Skewed tree: h+1 nodes. 
For h=5 5+1=6 nodes. 
Final answer: 
63 and 6


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


While inserting the elements 71, 65, 84, 69, 67, 83 in 
an empty binary search tree (BST) in the sequence 
shown, the element in the lowest level is


- **(A)** 65

- **(B)** 67

- **(C)** 69

- **(D)** 83



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
Let’s insert step-by-step into an empty BST. 
Insert 71 → root: 71 
Insert 65 → 65 < 71 → left child of 71 
Insert 84 → 84 > 71 → right child of 71 
Insert 69 → 69 < 71, 69 > 65 → right child of 65 
Insert 67 → 67 < 71, 67 < 65? Wait, 67 > 65, 67 < 
69 → left child of 69 
Insert 83 → 83 > 71, 83 < 84 → left child of 84 
Tree : 
Levels: 
Level 0: 71 
Level 1: 65, 84 
Level 2: 69, 83 
Level 3: 67 
Lowest level (level 3) has 67.


</details>

---


### Q27. [GATE CSE – 2015 SET 1 || MCQ || 2-mark]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider it to rooted  n node binary tree represented 
using pointers. The best upper bound on the time 
required to determine the number of subtrees having 
having exactly 4 nodes O(na logb n). Then the value of 
a + 10b is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Efficient method: 
Post order traversal → compute subtree sizes in 
O(n) time. 
Check if size = 4 → count. 
Best upper bound: O(n1log⁡0n)→ a=1,b=0 
a+10b=1+0=1


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A priority queue is implemented as a Max -Heap. 
Initially, it has 5 elements. The level-order traversal 
of the heap is: 10, 8, 5, 3, 2. Two new elements 1 
and 7 are inserted into the heap in that order. The 
level-order traversal of the heap after the insertion 
of the elements is:


- **(A)** 10, 8, 7, 3, 2, 1, 5

- **(B)** 10, 8, 7, 2, 3, 1, 5

- **(C)** 10, 8, 7, 1, 2, 3, 5

- **(D)** 10, 8, 7, 5, 3, 2, 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Initial Max-Heap level order: 10, 8, 5, 3, 2 
Index mapping (1-based): 
1: 10 
2: 8 
3: 5 
4: 3 
5: 2 
Step 1: Insert 1 
Add at end (index 6): 1 
Parent (index 3) = 5 → 1 < 5, so no swap. 
Heap after: 10, 8, 5, 3, 2, 1 
Step 2: Insert 7 
Add at end (index 7): 7 
Parent (index 3) = 5 → 7 > 5, swap. 
Now 7 at index 3, 5 at index 7. 
Parent of index 3 (index 1) = 10 → 7 < 10, stop. 
Heap after: 10, 8, 7, 3, 2, 1, 5 
Level order: 10, 8, 7, 3, 2, 1, 5 
Final answer: 
10,8,7,3,2,1,5


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the C function given below. Assume that 
the array listA contains n(>0) elements, sorted in 
ascending order 
int ProcessArray(int *listA, int x, int n) 
{ 
int i, j, k; 
i = 0; j = n-1; 
do { 
k = (i+j)/2; 
if (x <= listA[k]) j = k-1; 
if (listA[k] <= x) i = k+1; 
} 
while (i <= j); 
if (listA[k] == x) return(k); 
else return -1; 
} 
Which one of the following statements about the 
function ProcessArray is CORRECT?


- **(A)** It will run into an infinite loop when x is not in 
listA.

- **(B)** It is an implementation of binary search.

- **(C)** It will always find the maximum element in 
listA.

- **(D)** It will return −11 even when xx is present in 
listA.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
The array is sorted in ascending order. 
The loop is similar to binary search: 
i = 0 
j = n − 1 
k = (i + j) / 2 
If x ≤ listA[k], then j = k − 1 
If listA[k] ≤ x, then i = k + 1 
Important observation: 
<!-- PAGE 82 -->
DATA STRUCTURE 
When x == listA[k], both conditions become true. 
So: 
j = k − 1 
and 
i = k + 1 
This makes i > j immediately, so the loop stops. 
After the loop, the function checks: 
if (listA[k] == x) return k; 
else return −1; 
Since k was last computed and x == listA[k], it 
correctly returns k. 
The loop always shrinks the search space (i 
increases or j decreases), so it cannot be infinite. 
It does not always find the maximum element. 
Therefore, the function behaves like binary search. 
Correct answer: It is an implementation of binary 
search.


</details>

---


### Q30. [GATE CSE - 2014 SET 3 || MCQ || 2-mark]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the pseudocode given below. The function 
DoSomething() takes as argument a pointer to the 
root of an arbitrary tree represented by the 
leftMostChild-rightSibling representation. Each node 
of the tree is of type treeNode. 
typedef struct treeNode* treeptr; 
struct treeNode 
{ 
treeptr leftMostChild, rightSibling; 
}; 
int DoSomething (treeptr tree) 
{ 
int value=0; 
if (tree != NULL) { 
if (tree->leftMostChild == NULL) value = 1; 
else 
value = DoSomething(tree->leftMostChild); 
value = value + DoSomething(tree->rightSibling); 
} 
return(value); 
}


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation: 
In leftMostChild–rightSibling representation: 
leftMostChild → first child 
rightSibling → next node at same level 
Now analyze the function. 
If tree == NULL → return 0. 
If tree is not NULL: 
If tree->leftMostChild == NULL 
that means the node has no children. 
So it is a leaf node. 
value = 1 
Else 
value=DoSomething(tree->leftMostChild) 
This recursively processes all children of the node. 
`After that: 
value = value + DoSomething(tree->rightSibling) 
This processes all siblings of the current node. 
So the function counts: 
1 for every node that has no leftMostChild (i.e., 
every leaf node). 
And by recursive calls through rightSibling, it 
covers the entire tree. 
Therefore, the function returns the total number of 
leaf nodes in the tree. 
Correct answer: (d) number of leaf nodes in the tree


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following rooted tree with the vertex 
P labelled as root


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation:Algorithm Inorder(tree) - Use of Recursion 
Steps: 
1. Traverse the left subtree, 
i.e., call Inorder(left-subtree) 
2. Visit the root. 
3. Traverse the right subtree, 
i.e., call Inorder(right-subtree) 
Understanding this algorithm requires the basic 
understanding of Recursion 
Therefore, We begin in the above tree with root as the 
starting point, which is P. 
# Step 1( for node P) : 
Traverse the left subtree of node or root P. 
So we have node Q on left of P. 
-> Step 1( for node Q) 
Traverse the left subtree of node Q. 
So we have node S on left of Q. 
Step 1 (for node S) 
Now again traverse the left subtree of node S which is 
<!-- PAGE 83 -->
DATA STRUCTURE 
NULL here. 
* Step 2(for node S) 
Visit the node S, i.e print node S as the 1st element 
of inorder traversal. 
* Step 3(for node S) 
Traverse the right subtree of node S. 
Which is NULL here. 
Now move up in the tree to Q which is parent of S.( 
Recursion, function of Q called for function of S). 
Hence we go back to Q. 
-> Step 2( for node Q): 
Visit the node Q, i.e print node Q as the 2nd 
element of inorder traversal. 
-> Step 3 (for node Q) 
Traverse the right subtree of node Q. 
Which is NULL here. 
Now move up in the tree to P which is parent of Q.( 
Recursion, function of P called for function of Q). 
Hence we go back to P. 
# Step 2(for node P) 
Visit the node P, i.e print node S as the 3rd element 
of inorder traversal. 
# Step 3 (for node P) 
Traverse the right subtree of node P. 
Node R is at the right of P. 
Till now we have printed SQP as the inorder of the tree. 
Similarly other elements can be obtained by 
traversing the right subtree of P. 
The final correct order of Inorder traversal would 
be SQPTRWUV.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The height of a tree is defined as the number of edges 
on the longest path in the tree. The function shown in 
the pseudocode below is invoked as height (root) to 
compute the height of a binary tree rooted at the tree 
pointer root. 
int height(treeptr n) 
{ 
if(n == NULL) return -1; 
if(n -> left == NULL) 
if(n -> right == NULL) return 0; 
else return B1; // Box 1 
else 
{ 
h1 = height(n -> left); 
if(n -> right == NULL) return (1+h1); 
else{h2 = height(n -> right); 
return B2; // Box 2} 
} 
The order in which the nodes are visited during in-
order traversal is


- **(A)** SQPTRWUV

- **(B)** SQPTURWV

- **(C)** SQPTWUVR

- **(D)** SQPTRUWV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
The box B1 gets executed when left sub tree of n is 
NULL & right subtree is not NULL. 
In such case, height of n will be the height of the right 
subtree +1. 
The box B2 gets executed when both left & right 
subtrees of n are not NULL. 
In such case, height of n will be max of heights of left 
& right subtrees of n+1. 
<!-- PAGE 84 -->
DATA STRUCTURE


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The preorder traversal sequence of a binary search 
tree is 30, 20, 10, 15, 25, 23, 39, 35, 42. Which one 
of the following is the postorder traversal sequence 
of the same tree?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation: 
Preorder: 30, 20, 10, 15, 25, 23, 39, 35, 42 
BST reconstruction: 
● Root 30 
● 20 (left), 10 (left of 20), 15 (right of 10) 
● 25 (right of 20), 23 (left of 25) 
● 39 (right of 30), 35 (left of 39), 42 (right of 39) 
Postorder (Left, Right, Root): 
● Left subtree of 30: 15, 10, 23, 25, 20 
● Right subtree of 30: 35, 42, 39 
● Root: 30 
Postorder: 15, 10, 23, 25, 20, 35, 42, 39, 30


</details>

---


### Q34. [GATE CSE - 2012 MCQ || 2-mark]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A max-heap is a heap where the value of each parent 
is greater than or equal to the values of its children. 
Which of the following is a max-heap? 
(a)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
A binary tree is max-heap if it is a complete 
binary tree (A complete binary tree is a binary 
tree in which every level, except possibly the 
last, is completely filled, and all nodes are as far 
left as possible) and it follows the max-heap 
property (value of each parent is greater than or 
equal to the values of its children). 
A. is not a max -heap because it is not a complete 
binary tree 
B. is a max-heap because it is complete binary tree 
and follows max-heap property. 
C. is not a max -heap because 8 is a child of 5 in 
this tree, so violates the max-heap property. 
D. is not a max-heap because 8 is a child of 5 in this 
tree, so violates the max -heap property. There are 
many other nodes in this tree which violate max -
heap property in this tree.


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the maximum height of any AVL-tree with 7 
nodes ? Assume that the height of a tree with a single 
node is 0.


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
For an AVL tree, the height difference between left 
and right subtrees of any node is at most 1. 
To get maximum height with minimum nodes, AVL 
follows the recurrence: 
N(h) = 1 + N(h−1) + N(h−2) 
where N(h) is the minimum number of nodes 
required for height h. 
Given height of single node = 0. 
Compute minimum nodes: 
N(0) = 1 
N(1) = 2 
N(2) = 4 
N(3) = 7 
N(4) = 12 
We are given total nodes = 7. 
From above, height 3 requires minimum 7 nodes. 
So with 7 nodes, maximum possible AVL height = 3.


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a binary max -heap implemented using an 
array. Which one of the  following array represents 
a binary max-heap?


- **(A)** {25, 12, 16, 13, 10, 8, 14 }

- **(B)** {(25, 14, 13, 16, 10, 8, 12}

- **(C)** {25, 14, 16, 13, 10, 8, 12}

- **(D)** {25, 14, 12, 13, 10, 8, 16}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
In a binary max-heap (array representation): 
For every index i: 
Parent ≥ Left child and Parent ≥ Right child 
Children indices: 
Left child = 2i 
Right child = 2i + 1 
Check each option. 
(A) {25, 12, 16, 13, 10, 8, 14} 
At index 2 → 12 
Children: 13 and 10 
12 < 13 → violates max-heap 
Not correct. 
(B) {25, 14, 13, 16, 10, 8, 12} 
At index 2 → 14 
Left child = 16 
14 < 16 → violates 
Not correct. 
(C) {25, 14, 16, 13, 10, 8, 12} 
Check all parents: 
<!-- PAGE 85 -->
DATA STRUCTURE 
25 ≥ 14, 16 
14 ≥ 13, 10 
16 ≥ 8, 12 
All conditions satisfied. 
Valid max-heap. 
(D) {25, 14, 12, 13, 10, 8, 16} 
At index 3 → 12 
Right child = 16 
12 < 16 → violates 
Not correct. 
Correct answer: (C) {25, 14, 16, 13, 10, 8, 12}


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


We are given a set of n distinct elements and an 
unlabeled binary tree with n nodes. In how many 
ways can we populate the tree with the given set 
so that it becomes a binary search tree?


- **(A)** 0

- **(B)** 1

- **(C)** n!

- **(D)** * 2nCn 
𝑛+1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
Corresponding to each set only 1 binary search 
tree can be formed because in-order is fixed. 
only 1 tree possible. If Binary trees would be 
asked n! possible corresponding to each distinct 
tree set. Here tree structure is fixed and have 
only 1 possibility for BST as elements are 
distinct.


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a binary tree with n nodes, every node has an 
odd number of descendants. Every node is 
considered to be its own descendant. What is the 
number of nodes in the tree that have exactly 
one child?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Given a Binary Tree with n nodes. 
Every node has an odd number of descendants. 
Also given every node is considered to be its own 
descendant. 
This is even number of descendants (2), because A 
is also considered as a descendant. 
This is odd number of descendants (3), A, B, C are 
descendants here. 
Condition satisfied – odd number, but number of 
nodes in a tree that has exactly one child is 0.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a binary max-heap implemented using an 
array. What is the content of the array after two delete 
operations on


- **(A)** {14, 13. 12. 10, 8}

- **(B)** {14, 12,13, 8, 10}

- **(C)** {14, 13, 8, 12, 10}

- **(D)** {14, 13, 12, 8, 10}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation: 
The original heap (from previous question) is: 
{25, 14, 16, 13, 10, 8, 12} 
Delete operation in max-heap removes the root 
and then heapify. 
First delete: 
Remove 25. 
Replace root with last element 12. 
Heap becomes: 
{12, 14, 16, 13, 10, 8} 
Heapify down: 
Compare 12 with children 14 and 16. 
Largest is 16 → swap. 
{16, 14, 12, 13, 10, 8} 
Now compare 12 with child 8. 
12 > 8 → stop. 
After first delete: 
{16, 14, 12, 13, 10, 8} 
Second delete: 
Remove 16. 
Replace root with last element 8. 
Heap becomes: 
{8, 14, 12, 13, 10} 
Heapify down: 
Compare 8 with 14 and 12. 
Largest is 14 → swap. 
{14, 8, 12, 13, 10} 
Now compare 8 with children 13 and 10. 
Largest is 13 → swap. 
{14, 13, 12, 8, 10} 
Now heap property satisfied. 
Final array: 
{14, 13, 12, 8, 10}


</details>

---


### Q40. [GATE CSE 2009 || MCQ || 2 MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


You are given the postorder traversal, P, of a binary 
search tree on the n elements 1,2,..., n. You have to 
determine the unique binary search tree that has P as 
its postorder traversal. What is the time complexity of 
the most efficient algorithm for doing this?


- **(A)** O(logn)

- **(B)** O(n)

- **(C)** O(nlogn)

- **(D)** none of the above, as the tree cannot be 
uniquely determined.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
In a Binary Search Tree, postorder traversal is: 
Left → Right → Root 
Given postorder of a BST with elements 1 to n, 
the tree can be uniquely constructed. 
Reason: 
In postorder, the last element is the root. 
Using BST property, elements smaller than root 
form left subtree and larger elements form right 
subtree. 
This partition can be done in linear time. 
Then recursively construct left and right subtrees. 
Each element is processed once. 
So total time required is proportional to n. 
Time complexity = O(n)


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The height of a binary tree is the maximum 
number of edges in any root to leaf path. The 
maximum number of nodes in a binary tree of 
height h is:


- **(A)** 2h-1

- **(B)** 2h-1-1

- **(C)** 2h+1-1

- **(D)** 2h+1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
Height h = maximum number of edges from root to 
leaf. 
If height = h, then maximum number of levels = h + 1 
(since height counts edges, not nodes). 
Maximum nodes occur in a full binary tree. 
Number of nodes in full binary tree with (h + 1) 
levels: 
= 1 + 2 + 4 + ... + 2h 
= 2(h+1) − 1 
Correct answer: 2(h+1) − 1


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The maximum number of binary trees that can be 
formed with three unlabeled nodes is:


- **(A)** 1

- **(B)** 5

- **(C)** 4

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

The number of binary trees that can be formed with 
n unlabeled nodes is given by the Catalan number: 
Number of binary trees = Cₙ = (1 / (n+1)) × (2n 
choose n) 
For n = 3: 
Number of binary trees= Cn=2nCn/(n+1) 
For n=3, 
C3=6C3/4=20/4=5


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The inorder and preorder traversal of a binary tree 
are 
Inorder: d b e a f c g 
Preorder: a b d e c f g 
The postorder traversal of the binary tree is:


- **(A)** d e b f g c a

- **(B)** e d b g f c a

- **(C)** e d b f g c a

- **(D)** d e f g b c a



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Inorder: d b e a f c g 
Preorder: a b d e c f g 
Step 1: First element of preorder is root. 
Root = a 
Split inorder around a: 
Left subtree inorder: d b e 
Right subtree inorder: f c g 
Step 2: Build left subtree 
Preorder after removing root: b d e c f g 
Left subtree preorder (3 elements): b d e 
Root of left subtree = b 
Split d b e around b: 
Left of b: d 
Right of b: e 
So left subtree structure: 
b 
left → d 
right → e 
Step 3: Build right subtree 
<!-- PAGE 86 -->
DATA STRUCTURE 
Remaining preorder: c f g 
Root of right subtree = c 
Split f c g around c: 
Left of c: f 
Right of c: g 
So right subtree structure: 
c 
left → f 
right → g 
Final tree: 
Step 4: Postorder (Left → Right → Root) 
Left subtree postorder: d e b 
Right subtree postorder: f g c 
Root: a 
Final postorder: 
d e b f g c a


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A complete n-ary tree is a tree in which each node 
has n children or no children. Let I be the number 
of internal nodes and L be the number of leaves in 
a complete n-ary tree. If L = 41, and I = 10, what 
is the value of n?


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
In a complete n-ary tree (every internal node has 
exactly n children): 
Total number of edges = n × I 
Also, in any tree: 
Number of edges = Total nodes − 1 
= (I + L) − 1 
So, 
nI = I + L − 1 
Given: 
I = 10 
L = 41 
Substitute: 
n × 10 = 10 + 41 − 1 
10n = 50 
n = 5


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the process  of inserting an element into a 
Max Heap, where the Max Heap is represented by an 
array. Suppose we perform a binary search on the 
path from the new leaf to the root to find the position 
for the newly inserted element, the number of 
comparisons performed is:


- **(A)** Θ(log₂ n)

- **(B)** Θ(log₂ log₂ n)

- **(C)** Θ(n)

- **(D)** Θ(n log₂ n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
In a max heap with n elements, the height of the 
heap is Θ(log n). 
When inserting a new element, it is first placed at 
a leaf. 
Normally, we move upward (heapify-up) along 
the path to the root. 
The length of this path = height of heap = Θ(log n). 
Now the question says we perform binary search 
on this path. 
Binary search on a path of length Θ(log n) takes: 
Θ(log (log n)) comparisons. 
Therefore, total comparisons = Θ(log log n). 
Correct answer: (B) Θ(log₂ log₂ n)


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a binary max heap containing n numbers, the 
smallest element can be found in time


- **(A)** O(n)

- **(B)** O(log n)

- **(C)** O(log log n)

- **(D)** O(1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
In a binary max heap: 
• The largest element is at the root. 
• The smallest element must be among the leaf 
nodes. 
About half of the nodes in a heap are leaves (≈ n/2). 
To find the smallest element, we must check all leaf 
nodes in the worst case. 
That takes linear time. Time complexity = O(n)


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A 3-ary max heap is like a binary max heap, but 
instead of 2 children, nodes have 3 children. A 3-ary 
heap can be represented by an array as follows: The 
root is stored in the first location, A[0], nodes in the 
next level, from left to right, are stored from A[1] to 
A[3]. The nodes from the second level of the tree 
from left to right are stored from A[4] onward. An 
item x can be inserted into a 3-ary heap containing n 
items by placing x in the location A[n] and pushing 
it up the tree to satisfy the heap property. 
Which one of the following is a valid sequence of 
elements in an array representing a 3-ary max heap?


- **(A)** 1, 3, 5, 6, 8, 9

- **(B)** 9, 6, 3, 1, 8, 5

- **(C)** 9, 3, 6, 8, 5, 1

- **(D)** 9, 5, 6, 8, 3, 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:In a 3-ary max heap: 
• Each parent must be ≥ its children 
• For array index i, children are at indices: 
3i + 1, 3i + 2, 3i + 3 
Now check each option. 
Option (a) 1, 3, 5, 6, 8, 9 
Root = 1 
Children = 3, 5, 6 
1 < children → violates max heap 
Not valid 
Option (b) 9, 6, 3, 1, 8, 5 
Root = 9 → OK 
Children of 9 = 6, 3, 1 → OK 
Now check node at index 1 (value 6) 
Children indices = 4, 5, 6 
Values = 8, 5 
6 < 8 → violates max heap 
Not valid 
Option (c) 9, 3, 6, 8, 5, 1 
Root = 9 → OK 
Children = 3, 6, 8 → OK 
Check index 1 (value 3) 
Children = 5, 1 
3 < 5 → violates 
Not valid 
Option (d) 9, 5, 6, 8, 3, 1 
Root = 9 → OK 
Children = 5, 6, 8 → OK 
Check index 1 (value 5) 
Children = 3, 1 
5 ≥ 3 and 5 ≥ 1 → OK 
All conditions satisfied. 
Correct answer: (d) 9, 5, 6, 8, 3, 1


</details>

---


### Q48. [GATE CSE 2007 || 1 MARK || MCQ GATE CSE 2007 || MCQ || 2 MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A 3-ary max heap is like a binary max heap, but 
instead of 2 children, nodes have 3 children. A 3-ary 
heap can be represented by an array as follows: The


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
Valid 3-ary max heap from previous question: 
<!-- PAGE 87 -->
DATA STRUCTURE 
Initial heap: 
[9, 5, 6, 8, 3, 1] 
In a 3-ary heap (0-based index): 
Parent of index i = ⌊(i−1)/3⌋ 
Now insert 7, 2, 10, 4 one by one. 
Insert 7: 
Place at index 6. 
Parent index = ⌊(6−1)/3⌋ = 1 
Parent = 5 
7 > 5 → swap 
Heap becomes: 
[9, 7, 6, 8, 3, 1, 5] 
Insert 2: 
Place at index 7. 
Parent index = ⌊(7−1)/3⌋ = 2 
Parent = 6 
2 < 6 → no swap 
Heap: 
[9, 7, 6, 8, 3, 1, 5, 2] 
Insert 10: 
Place at index 8. 
Parent index = ⌊(8−1)/3⌋ = 2 
Parent = 6 
10 > 6 → swap 
Now at index 2. 
Parent index = ⌊(2−1)/3⌋ = 0 
Parent = 9 
10 > 9 → swap 
Heap becomes: 
[10, 7, 9, 8, 3, 1, 5, 2, 6] 
Insert 4: 
Place at index 9. 
Parent index = ⌊(9−1)/3⌋ = 2 
Parent = 9 
4 < 9 → no swap 
Final heap: [10, 7, 9, 8, 3, 1, 5, 2, 6, 4]


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Postorder traversal of a given binary search tree, T 
produces the following sequence of keys: 
10, 9, 23, 22, 27, 25, 15, 50, 95, 60, 40, 29 
Which one of the following sequences of keys can 
be the result of an in-order traversal of the tree T?


- **(A)** 9, 10, 15, 22, 23, 25, 27, 29, 40, 50, 60, 95

- **(B)** 9, 10, 15, 22, 40, 50, 60, 95, 23, 25, 27, 29

- **(C)** 29, 15, 9, 10, 25, 22, 23, 27, 40, 60, 50, 95

- **(D)** 95, 50, 60, 40, 27, 23, 22, 25, 10, 9, 15, 29



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
For any Binary Search Tree, the inorder traversal 
always gives the keys in sorted order. 
Given postorder: 
10, 9, 23, 22, 27, 25, 15, 50, 95, 60, 40, 29 
The set of keys is: 
{9, 10, 15, 22, 23, 25, 27, 29, 40, 50, 60, 95} 
So inorder traversal must be these keys in strictly 
increasing order: 
9, 10, 15, 22, 23, 25, 27, 29, 40, 50, 60, 95


</details>

---


### Q50. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A priority queue is implemented as a Max-Heap. 
Initially, it has 5 elements. The level-order 
traversal of the heap is:10, 8, 5, 3, 2 
Two new elements 1 and 7 are inserted into the 
heap in that order. The level-order traversal of the 
heap after the insertion of the elements is:


- **(A)** 10, 8, 7, 5, 3, 2, 1

- **(B)** 10, 8, 7, 2, 3, 1, 5

- **(C)** 10, 8, 7, 1, 2, 3, 5

- **(D)** 10, 8, 7, 3, 2, 1, 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation: 
Initial max-heap (level order): 
10, 8, 5, 3, 2 
Insert 1: 
Place at next position → index 5. 
Parent = 5. 
1 < 5 → no swap. 
Heap becomes: 
10, 8, 5, 3, 2, 1 
Insert 7: 
Place at next position → index 6. 
Parent = 5. 
7 > 5 → swap. 
Heap becomes: 
10, 8, 7, 3, 2, 1, 5 
Now check parent of 7 → 10. 
7 < 10 → stop. 
Final heap: 10, 8, 7, 3, 2, 1, 5


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


How many distinct binary search trees can be 
created out of 4 distinct keys?


- **(A)** 5

- **(B)** 14

- **(C)** 24

- **(D)** 42



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
The number of distinct BSTs with n distinct keys is given 
by the Catalan number: 
Cₙ = (1 / (n + 1)) × (2n choose n) 
For n = 4: 
C₄ = (1 / 5) × (8 choose 4) 
= (1 / 5) × 70 
= 14


</details>

---


### Q52. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a complete k-ary tree, every internal node has 
exactly k children. The number of leaves in such a 
tree with n internal nodes is:


- **(A)** nk

- **(B)** (n − 1)k + 1

- **(C)** n(k − 1) + 1

- **(D)** n(k − 1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
In a complete k-ary tree: 
Each internal node has exactly k children. 
If number of internal nodes = n 
Total number of edges = k × n 
(because each internal node contributes k edges) 
In any tree: 
Number of edges = Total nodes − 1 
Let number of leaves = L 
Total nodes = n + L 
So: 
k n = (n + L) − 1 
k n = n + L − 1 
L = k n − n + 1 
L = n(k − 1) + 1


</details>

---


### Q53. [GATE CSE 2005 || MCQ || 2 MAKRS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Suppose there are ⌈log 𝑛⌉ sorted lists of ⌊𝑛/log 𝑛⌋ 
elements each. The time complexity of producing a 
sorted list of all these elements is: (Hint: Use a heap 
data structure)


- **(A)** 𝑂(𝑛log log 𝑛)

- **(B)** 𝜃(𝑛log 𝑛)

- **(C)** Ω(nlog n)

- **(D)** Ω (𝑛2)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
We have: 
 Number of lists = log 𝑛 
 Size of each list = 𝑛/log 𝑛 
 Total elements = n 
We merge these sorted lists using a min heap. 
At any time, the heap contains at most log 𝐧 elements 
(one from each list). 
Each extract-min operation takes 𝐎(log(log 𝑛)) time. 
Since we perform this operation for all n elements, total 
time is: 
𝑛 ⋅ log(log 𝑛) 
So, the time complexity is: 
𝑂(𝑛log log 𝑛) 
<!-- PAGE 88 -->
GATE CSE 2021 SET-1|| MCQ || 1 MARK 
5 HASHING


</details>

---



## Topic 5: Topic 5


### Q1. [GATE CSE 2022 SET-1|| MCQ || 1 MARK]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hash table P[0, 1, ..., 10] that is initially 
empty. The hash table is maintained using open 
addressing with linear probing. The hash function 
used is : 
ℎ(𝑥) = (𝑥 + 7) 𝑚𝑜𝑑 11. Consider the following 
sequence of insertions performed on 
P: 1, 13, 22, 15, 11, 24 
Which of the following positions in the hash table 
is/are empty after these insertions are performed? 
collisions. Let k be the number of keys, m be the 
number of slots in the hash table, and k>m. 
Which one of the following is the best hashing 
strategy to counteract the adversary?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation:Hash table size = 11 
Indices: 0 to 10 
Hash function: 
h(x) = (x + 7) mod 11 
Linear probing 
Insert in order: 1, 13, 22, 15, 11, 24 
Insert 1: 
h(1) = (1 + 7) mod 11 = 8 
Place at index 8 
Insert 13: 
h(13) = (13 + 7) mod 11 = 20 mod 11 = 9 
Place at index 9 
Insert 22: 
h(22) = (22 + 7) mod 11 = 29 mod 11 = 7 
Place at index 7 
Insert 15: 
h(15) = (15 + 7) mod 11 = 22 mod 11 = 0 
Place at index 0 
Insert 11: 
h(11) = (11 + 7) mod 11 = 18 mod 11 = 7 
Index 7 occupied → probe 
Index 8 occupied → probe 
Index 9 occupied → probe 
Index 10 empty → place at 10 
Insert 24: 
h(24) = (24 + 7) mod 11 = 31 mod 11 = 9 
Index 9 occupied → probe 
Index 10 occupied → probe 
Index 0 occupied → probe 
Index 1 empty → place at 1 
Final table: 
0 → 15 
1 → 24 
2 → empty 
3 → empty 
4 → empty 
5 → empty 
6 → empty 
7 → 22 
8 → 1 
9 → 13 
10 → 11 
Empty positions among options: 
0 → filled 
10 → filled 
2 → empty 
1 → filled 
Correct answer: (C) 2


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The keys 5, 28, 19, 15, 26, 33, 12, 17, 10 are 
inserted into a hash table using the hash function 
ℎ(𝑘) = 𝑘 𝑚𝑜𝑑 9. The collisions are resolved by 
chaining. After all the keys are inserted, the length 
of the longest chain is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Explanation: 
Hash function: 
h(k) = k mod 9 
Compute hash values: 
5 mod 9 = 5 
28 mod 9 = 1 
19 mod 9 = 1 
15 mod 9 = 6 
26 mod 9 = 8 
33 mod 9 = 6 
12 mod 9 = 3 
17 mod 9 = 8 
10 mod 9 = 1 
Now group by index: 
Index 1 → 28, 19, 10 (length = 3) 
Index 6 → 15, 33 (length = 2) 
Index 8 → 26, 17 (length = 2) 
Index 3 → 12 (length = 1) 
Index 5 → 5 (length = 1) 
Longest chain length = 3 
Final Answer: 3


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a double hashing scheme, ℎ1(𝑘) = 𝑘 𝑚𝑜𝑑 11 
and ℎ2(𝑘) = 1 + (𝑘 𝑚𝑜𝑑 7) are the auxiliary hash 
functions. The size m of the hash table is 11. The 
hash function for the i-th probe in the open address 
table is 
[ℎ1(𝑘) + 𝑖ℎ2(𝑘)] 𝑚𝑜𝑑 𝑚 The following keys are 
inserted in the given order: 63, 50, 25, 79, 67, 24. 
The slot at which key 24 gets stored is  . 
(Answer in integers)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** =10


**Step-by-Step Explanation:**

Explanation 
h₁(k) = k mod 11 
h₂(k) = 1 + (k mod 7) 
Hash formula for i-th probe: 
(h₁(k) + i·h₂(k)) mod 11 
Insert keys one by one. 
Key 63 
h₁ = 63 mod 11 = 8 
Slot 8 is empty → place 63 at index 8 
Key 50 
h₁ = 50 mod 11 = 6 
Slot 6 is empty → place 50 at index 6 
Key 25 
h₁ = 25 mod 11 = 3 
Slot 3 is empty → place 25 at index 3 
Key 79 
h₁ = 79 mod 11 = 2 
Slot 2 is empty → place 79 at index 2 
Key 67 
h₁ = 67 mod 11 = 1 
Slot 1 is empty → place 67 at index 1 
<!-- PAGE 92 -->
DATA STRUCTURE 
Key 24 
h₁ = 24 mod 11 = 2 (collision, 79 already there) 
h₂ = 1 + (24 mod 7) = 1 + 3 = 4 
Now probe: 
i = 1 
(2 + 1·4) mod 11 = 6 → occupied (50) 
i = 2 
(2 + 2·4) mod 11 = 10 → empty 
So key 24 is stored at slot 10.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An algorithm has to store several keys generated  
by an adversary in a hash table. The adversary is 
malicious who tries to maximize the number of 
two simple uniform hash functions h1 and h2. 
Further suppose our hashing scheme uses h1 for the 
odd keys and h2 for the even keys. What is the 
expected number of keys in a slot?


- **(A)** m/n

- **(B)** n/m

- **(C)** 2n/m

- **(D)** n/2m



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation: 
The correct answer is Universal hashing 
method. 
In division and multiplication methods, the hash 
function is fixed and deterministic. A malicious 
adversary who knows the hash function can 
deliberately choose keys that map to the same slot 
and 
cause  maximum collisions. Therefore, these 
methods 
are weak against adversarial inputs. 
In universal hashing, the hash function is chosen 
randomly from a family of hash functions at 
runtime. 
Since the adversary does not know which specific 
function will be used, they cannot force many keys 
to 
collide. This randomization guarantees that the 
expected number of collisions remains low even in 
the 
worst case.


</details>

---


### Q6. [GATE CSE 2026 SET-1|| MSQ || 1 MARK]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a dynamic hashing approach for 4-bit 
integer keys: 
1. There is a main hash table of size 4. 
2. The 2 least significant bits of a key is used to 
index into the main hash table. 
3. Initially, the main hash table entries are empty. 
4. Thereafter, when more keys are hashed into it, to 
resolve collisions, the set of all keys corresponding 
to a main hash table. entry is organized as a binary 
tree that grows on demand. 
5. First, the 3rd least significant bit is used to divide 
the keys into left and right subtrees. 
6. To resolve more collisions, each node of the 
binary tree is further sub-divided into left and right 
subtrees based on the 4th least significant bit.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C .


**Step-by-Step Explanation:**

Explanation: 
Using the last 2 bits for the main table, slot 00 
remains empty and slot 11 contains exactly one 
key, which matches the figure. In option C, keys 
map as follows: 10 and 6 go to slot 10, and they 
differ in the 3rd least significant bit, so only one 
split is needed, matching the tree shown. Keys 9, 
5, and 13 go to slot 01; among them, 9 and 5 have 
the same 3rd bit, causing a collision that is resolved 
by splitting on the 4th bit, while 13 differs at the 3rd 
bit. This exactly reproduces the structure in the 
given hash table state


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a double hashing scheme in which the 
primary hash function is ℎ1(𝑘) = 𝑘 𝑚𝑜𝑑 23, and 
the secondary hash function is ℎ2(𝑘) = 1  + 
(𝑘𝑚𝑜𝑑19). Assume that the table size is 23. Then 
the address returned by probe 1 in the probe 
sequence (assume that the probe sequence begins at 
probe 0) for key value k=90 is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 13


**Step-by-Step Explanation:**

Explanation:Given 
h₁(k) = k mod 23 
h₂(k) = 1 + (k mod 19) 
Table size m = 23 
Key k = 90 
First compute the hash values. 
h₁(90) = 90 mod 23 = 21 
h₂(90) = 1 + (90 mod 19) = 1 + 14 = 15 
The probe sequence formula is 
(h₁(k) + i·h₂(k)) mod m 
Since probe sequence begins at probe 0, probe 1 
corresponds to i = 1. 
Address at probe 1 
= (21 + 1·15) mod 23 
= 36 mod 23 
= 13 
Final Answer: 13


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A hash table of length 10 uses open addressing with 
hash function ℎ(𝑘) = 𝑘 𝑚𝑜𝑑 10, and linear 
probing. After inserting 6 values into an empty hash 
table, the table is as shown below 
How many different insertion sequences of the key 
values using the same hash function and linear 
probing will result in the hash table shown above?


- **(A)** 10

- **(B)** 20

- **(C)** 30

- **(D)** 40



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Final table with keys and their home slots: 
42 → 2 (placed at 2) 
23 → 3 (placed at 3) 
34 → 4 (placed at 4) 
52 → 2 (placed at 5) 
46 → 6 (placed at 6) 
33 → 3 (placed at 7) 
Important dependencies (due to linear 
probing): 
52 can be placed at slot 5 only if slots 2, 3, 
and 4 are already occupied 
→ therefore, 42, 23, and 34 must be inserted 
before 52 
33 can be placed at slot 7 only if slots 3, 4, 5, 
and 6 are already occupied 
→ therefore, 23, 34, 52, and 46 must be 
inserted before 33 
The remaining keys (42, 23, 34, 46) are 
relatively independent among themselves, 
subject only to the above constraints. 
Counting all valid permutations under these 
partial-order constraints yields a total of 30 
insertion sequences. 
Final answer: 30 
<!-- PAGE 93 -->
DATA STRUCTURE


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following choices gives a possible 
order in which the key values could have been 
inserted in the table?


- **(A)** 46, 42, 34, 52, 23, 33

- **(B)** 34, 42, 23, 52, 33, 46

- **(C)** 46, 34, 42, 23, 52, 33

- **(D)** 42, 46, 33, 23, 34, 52



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Explanation: Insert elements one by one: 
1. Insert 46 
ℎ(46) = 6→ place at index 6 
2. Insert 34 
ℎ(34) = 4→ place at index 4 
3. Insert 42 
ℎ(42) = 2→ place at index 2 
4. Insert 23 
ℎ(23) = 3→ place at index 3 
5. Insert 52 
ℎ(52) = 2(occupied) 
→ check 3 (occupied) 
→ check 4 (occupied) 
→ check 5 (empty) → place at index 5 
6. Insert 33 
ℎ(33) = 3(occupied) 
→ check 4 (occupied) 
→ check 5 (occupied) 
→ check 6 (occupied) 
→ check 7 (empty) → place at index 7 
Final Table Obtained: 
2 → 42 
3 → 23 
4 → 34 
5 → 52 
6 → 46 
7 → 33


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following hash functions on  
integers will distribute keys most uniformly over 10 
buckets numbered 0 to 9 for i ranging from 0 to 2020?


- **(A)** h(i)= i2 mod 10

- **(B)** h(i)= i3 mod 10

- **(C)** h(i)=(11*i2) mod 10

- **(D)** h(i)=(12*i2) mod 10



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation : For i = 0 to 9, the pattern repeats for 
all larger values. 
i² mod 10 gives only these digits: 0, 1, 4, 5, 6, 9. 
Some buckets (2, 3, 7, 8) never get any value, so 
distribution is not uniform. 
i³ mod 10 gives all digits from 0 to 9 exactly once 
in a cycle. So every bucket gets almost equal 
number of keys. This is the most uniform. 
(11·i²) mod 10 is same as i² mod 10 because 11 mod 
10 = 1. So it has the same problem as the first one. 
(12·i²) mod 10 becomes (2·i²) mod 10. This still 
produces only a few digits and does not cover all 
buckets evenly. 
Correct answer is h(i) = i³ mod 10.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hash table with 9 slots. The hash function 
is ℎ(𝑘) = 𝑘 𝑚𝑜𝑑 9. The collisions are resolved by 
chaining. The following 9 keys are inserted in the 
order: 5, 28, 19, 15, 20, 33, 12, 17, 10. The maximum, 
minimum, and average chain lengths in the hash 
table, respectively, are


- **(A)** 3,0,and 1

- **(B)** 3,3,and 3

- **(C)** 4,0,and 1

- **(D)** 3,0,and 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: Hash table size = 9 
Hash function h(k) = k mod 9 
Insert keys one by one and find their slots. 
5 mod 9 = 5 → slot 5 
28 mod 9 = 1 → slot 1 
19 mod 9 = 1 → slot 1 
15 mod 9 = 6 → slot 6 
20 mod 9 = 2 → slot 2 
33 mod 9 = 6 → slot 6 
12 mod 9 = 3 → slot 3 
17 mod 9 = 8 → slot 8 
10 mod 9 = 1 → slot 1 
Now count chain lengths in each slot (0 to 8). 
Slot 0 → 0 
Slot 1 → 3 (28, 19, 10) 
Slot 2 → 1 
Slot 3 → 1 
Slot 4 → 0 
Slot 5 → 1 
Slot 6 → 2 (15, 33) 
Slot 7 → 0 
Slot 8 → 1 
Maximum chain length = 3 
Minimum chain length = 0 
Average chain length = total keys / total slots = 9 / 9 
= 
Correct Answer :3,0,and 1


</details>

---


### Q12. [GATE CSE 2015 SET-1|| MCQ || 2 MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hash table with 100 slots. Collisions are 
resolved using chaining. Assuming simple uniform


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: 
There are 100 slots and hashing is simple 
uniform, so each insertion independently goes to any 
slot with probability 1/100. 
For one insertion, the probability that it does not go 
into the first 3 slots is 
(100 − 3) / 100 = 97 / 100 
Since insertions are independent, for 3 insertions the 
probability is 
(97 / 100) × (97 / 100) × (97 / 100) 
So the required probability is 
(97 × 97 × 97) / 100³ 
Correct answer is 
(97 × 97 × 97) / 100³


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The keys 12,18,13,2,3,23,5 and 15 are inserted  
into an initially empty hash table of length 10 using 
open addressing with hash function ℎ(𝑘) = 𝑘 mod 
10 and linear probing. What is the resultant hash 
table ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation : Keys: 12, 18, 13, 2, 3, 23, 5, 15 
Hash function: h(k) = k mod 10 
Collision handling: Linear probing 
Table size = 10 (index 0 to 9) 
Now insert one by one. 
12 mod 10 = 2 → place at index 2 
18 mod 10 = 8 → place at index 8 
13 mod 10 = 3 → place at index 3 
2 mod 10 = 2 → collision at 2 
Next free slot → 3 (occupied) 
Next → 4 (empty) → place at 4 
<!-- PAGE 94 -->
DATA STRUCTURE 
3 mod 10 = 3 → collision 
4 occupied 
5 empty → place at 5 
23 mod 10 = 3 → collision 
4 occupied 
5 occupied 
6 empty → place at 6 
5 mod 10 = 5 → collision 
6 occupied 
7 empty → place at 7 
15 mod 10 = 5 → collision 
6 occupied 
7 occupied 
8 occupied 
9 empty → place at 9 
Final hash table: 
Index 2 → 12 
Index 3 → 13 
Index 4 → 2 
Index 5 → 3 
Index 6 → 23 
Index 7 → 5 
Index 8 → 18 
Index 9 → 15 
This matches option (C).


</details>

---


### Q14. [GATE CSE 2009 || MCQ || 2 MARK]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hash table of size seven, with starting 
index zero, and a hash function h(x) = (3x + 4) mod 
7 . Assuming the hash table is initially empty, which 
of the following is the contents of the table when the 
sequence 1, 3, 8, 10 is inserted into the table using 
closed hashing? 
Note that “–” denotes an empty location in the table.


- **(A)** 8, –, –, –, –, –, 10

- **(B)** 1, 8, 10, –, –, –, 3

- **(C)** 1, –, –, –, –, –, 3

- **(D)** 1, 10, 8, –, –, –, 3 
2 12 
3 13 
5 5 
8 18



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B.


**Step-by-Step Explanation:**

Explanation : Table size = 7 
Hash function: 
h(x) = (3x + 4) mod 7 
Closed hashing = linear probing 
Insert in order: 1, 3, 8, 10 
Step 1: Insert 1 
h(1) = (3×1 + 4) mod 7 = 7 mod 7 = 0 
Place 1 at index 0 
Step 2: Insert 3 
h(3) = (9 + 4) mod 7 = 13 mod 7 = 6 
Place 3 at index 6 
Step 3: Insert 8 
h(8) = (24 + 4) mod 7 = 28 mod 7 = 0 
Index 0 occupied → linear probe 
Index 1 empty → place 8 at index 1 
Step 4: Insert 10 
h(10) = (30 + 4) mod 7 = 34 mod 7 = 6 
Index 6 occupied → probe 
Index 0 occupied → probe 
Index 1 occupied → probe 
Index 2 empty → place 10 at index 2 
Final table (index 0 to 6): 
0 → 1 
1 → 8 
2 → 10 
3 → – 
4 → – 
5 → – 
6 → 3 
Correct answer: (B) 1, 8, 10, –, –, –, 3


</details>

---

