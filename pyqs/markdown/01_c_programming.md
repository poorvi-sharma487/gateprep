# C Programming


> **Subject:** C Programming  

> **Pages in Book:** 5–50  

> **Total Modules:** 4


## Topics in this Subject


## Topic 1: C PROGRAMMING


### Q1. [GATE CSE]


> **Topic:** C PROGRAMMING | **Marks:** 2 | **Difficulty:** Medium


What is printed by the following ANSI C program? 

```c
#include<stdio.h> 
int main (int argc, char *argv[]) 
{ 
char 𝑎 =  ′𝑃′; 
char 𝑏 = ' x '; 
char 𝑐 = (𝑎 & 𝑏)+′ ∗ ′; 
char 𝑑 = (𝑏) −    ′ − ′; 
char 𝑒 = (𝑎 ∧ 𝑏) +  ′ +  ′; 
printf("%c %c %c \n", c, d, e); 
return 0; 
} 
ASCII encoding for relevant characters is given 
below. 
A B C ….. Z 
65 66 67 ….. 90 
∗ + - 
42 43 45
```


- **(A)** z K S

- **(B)** 122 75 83

- **(C)** * - +

- **(D)** P x +



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
 char a = ‘P’ 
char b = ‘x’ 
As per precedence of operators, () evaluated prior 
to + /- 
 Note that &,^ and | are bit wise operators and 
Addition/Subtraction of characters applied on their 
ASCII values. 
a = ‘P’  ===> a = Ascii value of (‘P’) = 65+15 = 80 
==> a = (0101 0000)2 
b = ‘x’  ===> b = Ascii value of (‘x’) = 97+23 = 120 
==> b = (0111 1000)2 
a & b    = (0101 0000)2  [ apply & logic on 
corresponding bits ] = (80)10 
‘*’ = 42 = (0010 1010) 2 
a&b + ‘*’ = (0111 1010)2 = 64+32+16+8+2 = 
122    [ add corresponding bits ], [ simply 80+42 = 
122 ] 
print character ( 122 ) = small ‘z’ 
 a | b    = (0111 1000)2  [ apply | logic on 
corresponding bits ] = (120)10 ‘-’ = 45 
a|b - ‘-’ = 120-45 = 75 = 65 + 10 
print character ( 75 ) = Capital ‘K’ 
a ^ b    = (0010 1000)2  [ apply ^ logic on 
corresponding bits ] = (40)10 
‘+’ = 43 
a^b + ‘+’ = 40+43 = 83 = 65 + 18 
print character ( 83 ) = Capital ‘S’


</details>

---


### Q2. [GATE CSE]


> **Topic:** C PROGRAMMING | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program  

```c
 #include<stdio.h> 
int main ( ) { 
int 𝑚 = 10 
int n, nl; 
n=++m; 
 nl=m++; 
n--; 
--n1; 
𝑛−= 𝑛𝑙; 
printf("%d", n); 
return 0; 
} 
The output of the program is ____.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (0 to 0)


**Step-by-Step Explanation:**

Solution: 
1. int m = 10; 
o m = 10 
2. 𝑛 = + + 𝑚; 
 Pre-increment ( ++m ): m is incremented first, 
changing from 10 to 11 . 
 The updated value ( 11 ) is then assigned to 𝑛. 
 Current State: m = 11, n = 11 
3. n1 = m + +; 
 Post-increment ( m + + ): The current value of 
m(11) is assigned to n 1 first. 
 After assignment, m is incremented from 11 to 12 . 
 Current State: m = 12, n = 11, n1 = 11 
4. n--; 
 n is decremented by 1 . 
 Current State: 𝑛 = 10 
5. --n1; 
 n1 is decremented by 1 . 
 Current State: n1 = 10 
6. n -= n1; 
 This is equivalent to 𝑛 = 𝑛 − 𝑛1. 
 𝑛 = 10 − 10 = 0 
 Current State: n = 0 
7. printf("%d", n); 
 Prints the final value of 𝑛, which is 𝟎.


</details>

---


### Q3. [GATE CSE]


> **Topic:** C PROGRAMMING | **Marks:** 2 | **Difficulty:** Medium


Suppose n and p are unsigned int variables in a C 
program. We wish to set p to 𝑛𝐶3. If n is large, which 
one of the following statements is most likely to set 𝑝 
correctly?


- **(A)** 𝑝 = 𝑛∗(𝑛 − 1)∗(𝑛 − 2)/6;

- **(B)** 𝑝 = 𝑛∗(𝑛 − 1)/2∗(𝑛 − 2)/3;

- **(C)** 𝑝 = 𝑛∗(𝑛 − 1)/3∗(𝑛 − 2)/2;

- **(D)** 𝑝 = 𝑛∗(𝑛 − 1)∗(𝑛 − 2)/6.0;



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (b)


**Step-by-Step Explanation:**

Solution: 
 We need to set 𝑝 = 𝑛𝐶3 where 𝑛𝐶3 = 𝑛(𝑛 − 1) ( 
𝑛 − 2)/6. 
𝑛 and 𝑝 are unsigned int. If 𝑛 is large, overflow can 
happen during multiplication before division. 
 Check options: 
(a) 𝑝 = 𝑛∗(𝑛 − 1)(𝑛 − 2)/6; 
 Here multiplication happens first. For large 𝑛, 𝑛(𝑛 −
1)∗(𝑛 − 2) becomes very large and may overflow 
before dividing by 6 . So result may be wrong. 
(b) 𝑝 = 𝑛∗(𝑛 − 1)/2∗(𝑛 − 2)/3; 
 Here division is done early. Since 6 = 2 × 3, we 
divide step by step. This reduces intermediate values 
and avoids overflow. This is most safe and correct. 
 (c) 𝑝 = 𝑛∗(𝑛 − 1)/3∗(𝑛 − 2)/2; 
 Division by 3 first may not divide exactly at that 
stage, so integer truncation can happen. This may 
give wrong result. 
(d) 𝑝 = 𝑛∗(𝑛 − 1)∗(𝑛 − 2)/6.0; 
6.0 is double. Expression becomes floating point, 
then converted back to unsigned int. This is not safe 
and may lose precision. 
<!-- PAGE 9 -->
C PROGRAMMING


</details>

---


### Q4. [GATE CSE – 2022 MCQ (2-MARKS]


> **Topic:** C PROGRAMMING | **Marks:** 2 | **Difficulty:** Medium


Which combination of the integer variables 𝑥, 𝑦,and 𝑧 
makes the variable 𝑎 get the value 4 in the following 
expression? 
𝑎 = (𝑥 > 𝑦)? ((𝑥 > 𝑧)? 𝑥: 𝑧): ((𝑦 > 𝑧)? 𝑦: 𝑧)


- **(A)** x = 3, y = 4, z = 2

- **(B)** x = 6, y = 5, z = 3

- **(C)** x = 6, y = 3, z = 5

- **(D)** x = 5, y = 4, z = 5  
a b c … … z 
97 98 99 … … 122



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution:  
 Given expression: 
a = (x > y) ? ((x > z) ? x : z) : ((y > z) ? y : z) 
 This nested ternary operator essentially finds the 
maximum of x, y, and z. 
 Case 1: If x > y → a = max(x, z) 
Case 2: Otherwise → a = max(y, z) 
 So overall, a = max(x, y, z) 
 Checking options: 
 A. x = 3, y = 4, z = 2 
max = 4 (Correct) 
 B. x = 6, y = 5, z = 3 
max = 6 (Incorrect) 
 C. x = 6, y = 3, z = 5 
max = 6(Incorrect) 
 D. x = 5, y = 4, z = 5 
max = 5 (Incorrect) 
<!-- PAGE 10 -->
CONTROL FLOW STATEMENT


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium




```c
#include < stdio.h > 
int gate(int n) { 
    int d, t, newnum, turn; 
    newnum = turn = 0; t=1; 
    while(n >= t) t *= 10; 
    t /= 10; 
    while(t > 0) { 
        d = n / t; 
        n = n % t; 
        t /= 10; 
        if(turn) newnum = 10 * newnum + d; 
        turn = (turn + 1) % 2; 
    } 
    return newnum; 
} 
int main () { 
    printf("%d", gate(14362)); 
    return 0; 
} 
The value printed by the given C program is ________   . 
(Answer in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 46


**Step-by-Step Explanation:**

The code peels off the digits one by one from left to 
right: 1, then 4, then 3, then 6, and finally 2. 
The Switch (turn): The variable turn acts exactly like a 
light switch alternating between 0 (OFF) and 1 (ON). 
 It starts at 0 (OFF). 
 Every time a digit is processed, the switch flips: 
0 → 1 → 0 → 1 → 0. 
By crossing out the skipped positions, the process looks 
like this:


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


int x=126,y=105; 

```c
     do { 
            if(x>y) x=x-y; 
        else y=y-x; 
            } while(x!=y); 
 printf("%d",x); 
The output of the given C code segment is________   . 
(Answer in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 21


**Step-by-Step Explanation:**

Initially, x = 126 and y = 105. The loop continues as 
long as x ≠ y, and in each iteration, it subtracts the 
smaller value from the larger one. 
 In the first iteration: Since x > y, x = x - y = 126 - 105 
= 21. 
 Now x = 21 and y = 105. In the next iteration: y = y - 
x = 105 - 21 = 84. 
 The process continues until both values become equal, 
and at that point, the loop ends. After the loop, both x 
and y will be 21, which is the GCD of 126 and 105


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C code segment:  
z = x + 3 + y->f1 + y→f2; 
  for (i = 0; i< 200; i = i + 2) 
{ 
    if (z >i) { 
      p = p + x + 3: 
      q = q + y→f2; 
    } else { 
      p = p + y→f2: 
      q = q + x + 3: 
    } 
} 
Assume that the variable y points to a struct (allocated 
on the heap) containing two fields f1 and f2, and the 
local variables x, y, z, p, q, and i are allotted registers. 
Common sub -expression elimination (CSE) 
optimization is applied on the code. The number of 
addition and dereference operations (of the form y->f1 
or y->f2) in the optimized code, respectively, are:


- **(A)** 303 and 102

- **(B)** 303 and 2

- **(C)** 403 and 102

- **(D)** 203 and 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Solution: 
 t1 = x + 3      ∥  1 addition 
 t2 = y → f1; ∥ 1 dereference  
 t3 = y → f2; ∥ 1 dereference  
 z = t1 + t2 + t3∥ 2 additions  
 for (i = 0;  i< 200; i+ = 2) { 
       if (z >i) {  
          p = p + t1 ;∥  1 addition  
        q = q + t2 ;∥ 1 addition 
 } 
 else{ 
            p = p + t3;   ∥ 1 addition  
            q = q + t1;   ∥ 1 addition  
     }  
 } 
 loop will run 100 times and both  if and else are 
performing 2 addition operations, so from loop we get 
2 × 100 = 200 additions and 100 times i is 
incrementing, so, 200 + 100 = 300 addition from the 
GATE CSE - 2012 MCQ (2-MARKS) 
GATE CSE – 2007 SET – 1 MCQ (1-MARKS) 
<!-- PAGE 14 -->
C PROGRAMMING 
loop. Before loop, 3 additions and 2 dereference 
operations.  
 So, 303 addition, 2 dereference.


</details>

---


### Q4. [GATE CSE – 2021 SET- 1 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C program. 

```c
  #include <stdio.h> 
   int main() 
{    
int i, j, count; 
count = 0; 
i = 0; 
for (j = –3, j <= 3; j++) 
     {  
 if ((j >= 0) && (i++)) 
 count = count + j;   
     } 
count = count + i; 
printf(“%d”, count); 
   return 0;  
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Solution: 
 Initial values 
i = 0 
count = 0 
Loop runs from j = −3 to 3. 
Condition: 
(j >= 0) && (i++) 
Important point: 
&& is short-circuit operator. 
If first condition is false, second part (i++) is NOT 
executed. 
Now check each j: 
j = -3 → (j >= 0) is false → i++ not executed 
j = -2 → false → i still 0 
j = -1 → false → i still 0 
j = 0 → true && (i++) 
i++ returns 0 (old value), then i becomes 1 
So condition = true && 0 → false 
count not updated. 
j = 1 → true && (i++) 
i++ returns 1, then i becomes 2 
Condition = true && 1 → true 
count = count + 1 → count = 1 
j = 2 → true && (i++) 
i++ returns 2, then i becomes 3 
Condition true 
count = 1 + 2 = 3 
j = 3 → true && (i++) 
i++ returns 3, then i becomes 4 
Condition true 
count = 3 + 3 = 6 
After loop: 
count = count + i 
count = 6 + 4 = 10 
Final output:


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
    #include <stdio.h> 
    int r ( ) 
{ 
    static int num=7; 
    return num--; 
} 
 int main ( )  
{ 
 for (r ( ); r ( ); r ( )) 
   printf ("%d", r ( )); 
 return 0; 
} 
Which one of the following values will be displayed 
on execution of the programs?
```


- **(A)** 41

- **(B)** 63

- **(C)** 52

- **(D)** 630



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
r() has a static variable num = 7. 
Each call returns num--. 
Execution flow: 
Init: r() → returns 7 → num = 6 
Condition: r() → returns 6 → num = 5 → true 
printf: r() → returns 5 → num = 4 → prints 5 
Increment: r() → returns 4 → num = 3 
Condition: r() → returns 3 → num = 2 → true 
printf: r() → returns 2 → num = 1 → prints 2 
Increment: r() → returns 1 → num = 0 
Condition: r() → returns 0 → loop ends 
Output: 52


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C function. 
void convert (int n)  

```c
{ 
    if (n < 0) 
    printf ("%d", n); 
    else { 
     convert (n/2); 
     printf ("%d", n%2); 
            } 
} 
 Which one of the following will happen when the 
function convert is called with any positive integer n 
as argument?
```


- **(A)** It will print the binary representation of n in the 
reverse order and terminate

- **(B)** It will not print anything and will not terminate

- **(C)** It will print the binary representation of n and 
terminate

- **(D)** It will print the binary representation of n but 
will not terminate



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Solution: 
a = {2, 4, 6, 8, 10} 
Sequence of function calls 
Convert(6) 
Convert(3) 
Convert(1) 
Convert(0) 
: 
Convert(0) 
: 
: 
It will not terminate and never produce any output. 
Note: 
There is no instruction which stops the loop.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
#include <stdio.h> 
 int main ()  { 
     float sum = 0.0, j = 1.0, i = 2.0; 
     while (i/j > 0.0625) { 
           j = j + j; 
          sum = sum + i/j; 
          printf ("%f \n", sum); 
       } 
       return 0; 
} 
The number of times the variable sum will be printed, 
when the above program is executed, is ______.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (5)


**Step-by-Step Explanation:**

Solution: 
 i = 2.0 
 j = 1.0 
Condition: 
 while (i/j > 0.0625) 
Since i = 2, 
Condition becomes: 
 2/j > 0.0625 
0.0625 = 1/16 
So: 
 2/j > 1/16 
Multiply both sides by j: 
2 > j/16 
<!-- PAGE 15 -->
C PROGRAMMING 
Multiply by 16: 
32 > j 
So loop runs while: 
 j < 32 
Now track j values. 
  Inside loop: 
j = j + j → j doubles every time. 
Start: 
 j = 1 
Iteration 1: 
 Check 2/1 = 2 > 0.0625 → true 
 j  becomes 2 → print 
Iteration 2: 
 Check 2/2 = 1 > 0.0625 → true 
 j becomes 4 → print 
Iteration 3: 
 Check 2/4 = 0.5 > 0.0625 → true 
 j becomes 8 → print 
Iteration 4: 
 Check 2/8 = 0.25 > 0.0625 → true 
 j becomes 16 → print 
Iteration 5: 
 Check 2/16 = 0.125 > 0.0625 → true 
 j becomes 32 → print 
Next check: 
  2/32 = 0.0625 
Now: 
 0.0625 > 0.0625 → false 
Loop stops. 
So sum is printed 5 times. 
Final Answer: 5


</details>

---


### Q8. [GATE CSE - 2019 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the C program fragment below which is 
meant to divide x by y using repeated subtractions. 
The variables x, y, q and r are all unsigned int. 
while (r >= y) { 
     r = r - y; 
     q = q + 1; 
} 
Which of the following conditions on the variables x, 
y, q and r before the execution of the fragment will 
ensure that the loop terminates in a state satisfying the 
condition x == (y*q + r)?


- **(A)** (q = = r) && (r = = 0)

- **(B)** (x > 0) && (r = = x) && (y > 0)

- **(C)** (q = = 0) && (r = = x) && (y > 0)

- **(D)** (q = = 0) && (y > 0)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
Divide x by y. 
x, y, q, r are unsigned integers. 
while (r >= y) 
{ 
r = r – y; 
q = q + 1; 
} 
Loop terminates in a state satisfying the condition 
x == (y * q + r) 
y ⇒ Dividend = Divisor * Quotient + Remainder 
So, to divide a number with repeated subtractions, the 
Quotient should be initialized to 0 and it must be 
incremented for every subtraction. 
So initially q=0 which represents 
x = 0 + r ⇒ x = r 
and y must be a positive value (>0).


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following function computes X Y for positive 
integers X and Y. 
int exp (int X, int Y) { 
    int res = 1; 
 int a = X; 
 int b = Y; 
while ( b != 0 ){ 
if ( b%2 == 0) 
{ 
a = a*a;  
b = b/2; 
    } 
else{ 
res = res*a;  
b = b-1;  
} 
 } 
 return res; 
 } 
Which one of the following conditions is TRUE before 
every iteration of the loop?


- **(A)** XY = ab

- **(B)** (res * a)Y = (res * X)b

- **(C)** XY = res * ab

- **(D)** XY = (res * a)b



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
 Consider X=2, y=3, 
After 1 iteration, res=2, a=2,b=2 
Only C satisfies the values 
XY=res* ab 
23=2*2


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program:  
# include <stdio.h> 

```c
int main( ) 
{ 
int i, j, k = 0; 
j = 2 * 3 / 4 + 2.0 / 5 + 8 / 5; 
k  - = --j; 
for (i = 0; i< 5; i++) 
{ 
switch(i + k) 
{ 
case 1: 
case 2: printf("\n%d", i + k); 
case 3: printf("\n%d", i + k); 
default: printf("\n%d", i + k); 
       } 
 } 
return 0; 
} 
Total number of times printf() executed ?
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (10)


**Step-by-Step Explanation:**

Solution:  
Arithmetic Evaluation 
In C, integer division truncates decimals, and prefix 
operators update variables immediately. 
j calculation: 2 * 3 / 4 (integer) is 1. 2.0 / 5 (float) is 
0.4. 8 / 5 (integer) is 1. The sum is 2.4, which truncates 
to 2 for the integer j. 
k calculation: k -= --j first decrements j to 1. Then k 
= 0 - 1, resulting in k = -1. 
2. Switch Trace with Fall-through 
The loop runs for i = 0 to 4. Because there are no break 
statements, once a case matches, every subsequent 
printf in the block executes. 
i = 0 (i+k = -1): Matches default. (1 execution) 
i = 1 (i+k = 0): Matches default. (1 execution) 
i = 2 (i+k = 1): Matches case 1, falls through case 2, 
case 3, and default. (3 executions) 
i = 3 (i+k = 2): Matches case 2, falls through case 3, 
and default. (3 executions) 
i = 4 (i+k = 3): Matches case 3, falls through default. 
(2 executions) 
Final Total 
Adding the executions per iteration: 1 + 1 + 3 + 3 + 2 
= 10. 
The total number of times printf is executed is 10. 
<!-- PAGE 16 -->
C PROGRAMMING


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following pseudo code. What is the total 
number of multiplications to be performed? 
D = 2 
for i = 1 to n do 
  for j = i to n do 
      for k = j + 1 to n do 
          D = D * 3


- **(A)** Half of the product of the 3 consecutive 
integers.

- **(B)** One-third of the product of the 3 consecutive 
integers.

- **(C)** One-sixth of the product of the 3 consecutive 
integers

- **(D)** None of the above.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
We count how many times 
D = D * 3 is  executed. 
Conditions from loops: 
1 ≤ i ≤ j < k ≤ n 
This means we are choosing 3 numbers such that 
i ≤ j < k. 
The total number of such triples is: 
(n − 1) n (n + 1) / 6 
This equals one -sixth of the product of three 
consecutive integers.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following function 

```c
#include <math.h> 
double f(double x){ 
      if (abs(x*x - 3) < 0.01) return x; 
    `  else return f(x/2 + 1.5/x); 
} 
Give a value q (to 2 decimals) such that f(q) will return 
q: _____.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1.73)


**Step-by-Step Explanation:**

Solution: 
The stopping condition is: 
∣x2 −3∣<0.01 
We need a value q (to 2 decimal places) that satisfies: 
∣q2 −3∣<0.01 
This means q2 must be between 2.99 and 3.01: 
2.99<q2 <3.01 
Taking the square root gives the range: 
√2.99  < q < √3.01  
1.72916...< q < 1.73493... 
The value 3 
≈1.73205 is in this range. Rounding this to two 
decimal places gives 1.73. 
Verification: 1.732=2.9929. The absolute difference is 
∣2.9929−3∣=0.0071, which is less than 0.01. 
The value q is 1.73.


</details>

---


### Q13. [GATE CSE – 2016 SET - 2 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following function: 
int unknown(int n) { 
    int i, j, k = 0; 
    for (i  = n/2; i<= n; i++) 
        for (j = 2; j <= n; j = j * 2) 
k = k + n/2; 
    return k; 
} 
The return value of the function is__


- **(A)** Θ(n2)

- **(B)** Θ(n2 log n)

- **(C)** Θ(n3)

- **(D)** Θ(n3 log n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Solution: 
Outer loop runs for (n/2) times and inner loop runs for 
(logn) times. 
So, the total number of times loop runs is (n/2 logn). 
So, the final k value will be n/2*(n/2 logn) = 
 O(n2log n) 
= (n/2+1).n/2 ∙log n 
= (n2log n)


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What will be the output of the following C program 
segment? 
char inchar = 'A'; 
  switch (inchar) 

```c
{ 
case 'A' : 
printf ("choice A ") ; 
case 'B' : 
printf ("choice B ") ; 
case 'C' : 
case 'D' : 
case 'E' : 
default:  
printf ("No Choice") ; 
}
```


- **(A)** No Choice

- **(B)** Choice A

- **(C)** Choice A Choice B No Choice

- **(D)** Program gives no output as it is erroneou



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
The switch case has no break statements. 
inchar = 'A' → matches case 'A', prints "choice A ". 
Then it falls through to case 'B', prints "choice B ". 
Then it falls through to case 'C', case 'D', case 'E' (no 
code, so no print), then default, prints "No Choice".


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following segment of C-code: 
 int j, n; 
 j = 1; 
 while (j <= n) 
    j = j * 2; 
 The number of comparisons made in the execution of 
the loop for any n>0 is:


- **(A)** ⌈log₂ n⌉ + 1

- **(B)** n

- **(C)** ⌈log₂ n⌉

- **(D)** ⌊log₂ n⌋ + 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
 Initially j = 1. 
Each iteration doubles j: 
1, 2, 4, 8, 16, ... 
The loop continues while j ≤ n. 
Suppose after k multiplications: 
j = 2k 
The loop stops when 2k > n. 
So the smallest k such that 2k > n is: 
k =⌊log2 n⌋ + 1. The condition (j ≤ n) is checked 
one extra time when it becomes false. 
So total number 
<!-- PAGE 17 -->
Function, Storage Class and 
Recursion 3


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following three ANSI – C programs. P1, 
P2, and P3 
P1 P2 P3 

```c
#include 
<stdio.h> 
int a = 5; 
int main(){ 
int a = 7; 
return(0); 
} 
#include 
<stdio.h> 
int main(){ 
int a=5; 
int a=7; 
return(0); 
} 
#include 
<stdio.h> 
int main(){ 
int a=5; 
float a=7; 
return(0); 
} 
Which one of the following statement is true?
```


- **(A)** Only P1 will compile without any error

- **(B)** Only P2 will compile without any error

- **(C)** Only P3 will compile without any error

- **(D)** All three programs P1, P2, and P3 will compile 
without any error



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

P1 
 int a = 5; // global 
 int main() { 
 int a = 7; // local 
 } 
 Local variable a hides the global a. 
 This is allowed in C. 
 So P1 compiles. 
 P2 
 int main() { 
 int a = 5; 
 int a = 7; 
 } 
 Here both declarations are in the same scope. 
 You cannot declare the same variable twice in the 
same block. 
 So this gives a compilation error. 
 P3 
 int main() { 
 int a = 5; 
 float a = 7; 
 } 
 Again, two variables with the same name in the same 
scope. 
 This is also a compilation error. 
 Therefore, only P1 compiles without error. 
 Correct answer:  (A) Only P1 will compile without 
any error


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the recursive functions represented by the 
following code segment: 
 int bar(int n)  
  { 
      if (n == 1)  return 0; 
      else  
   return 1 + bar(n/2); 
  } 
 int foo(int n) { 
     if (n == 1) 
          return 1; 
     else   return 1 + foo(bar(n)); 
  } 
 The smallest positive integer n for which foo(n) 
returns 5 is ______. (answer in integer) 
Note: Assume that the program compiles and runs 
successfully.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (65536)


**Step-by-Step Explanation:**

Solution: 
 First understand the functions. 
bar(n): 
It keeps dividing n by 2 until n becomes 1. 
 So it counts how many times we can divide n by 2. 
GATE CSE – 2005 SET – 1 MCQ (1-MARKS) 
<!-- PAGE 28 -->
C PROGRAMMING 
Thus, 
 bar(n) = ⌊log₂ n⌋ 
 Now look at foo(n): 
If n = 1 → return 1 
 Else → return 1 + foo(bar(n)) 
So foo keeps replacing n with ⌊log₂ n⌋ until it 
becomes 1. 
It counts how many times this process happens. 
 We need foo(n) = 5. 
 That means: 
 n → ⌊log₂ n⌋ → ⌊log₂ (⌊log₂ n⌋)⌋ → ... → 1 
This must take 4 reductions (since base case gives 1). 
 Try values: 
n = 16 
 log₂16 = 4 
 log₂4 = 2 
 log₂2 = 1 
 Steps: 
 16 → 4 → 2 → 1 
 Now count: 
foo(1) = 1 
 foo(2) = 1 + 1 = 2 
 foo(4) = 1 + 2 = 3 
 foo(16) = 1 + 3 = 4 
 So 16 gives 4. 
 Try n = 17: 
 ⌊log₂17⌋ = 4 
  Then same chain: 4 → 2 → 1 
 So foo(17) = 1 + foo(4) = 1 + 3 = 4 
 So still 4. 
 We need one more level. 
 Try n = 65536 (2^16): 
 65536 → 16 → 4 → 2 → 1 
 Now count: 
foo(1) = 1 
 foo(2) = 2 
 foo(4) = 3 
 foo(16) = 4 
 foo(65536) = 5 
 Now check smaller: 
 We need ⌊log₂ n⌋ = 16 
  Smallest n with ⌊log₂ n⌋ = 16 is: 
 n = 2^16 = 65536 
Therefore, the smallest positive integer n is: 65536.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI-C function. 
 int func(int start, int end) { 
     int length = end + 1 - start; 
    if ((length < 1) || (start < 0) || (end < 0)) { 
         return 0; 
    } 
    if (length % 3 == 0) { 
         return (func(start + 1, end)); 
   } 
    else if (length % 3 == 1) { 
         return 1 + func(start, end - 1);} 
 else { 
         return func(start + 2, end); 
     } 
 } 
The maximum possible value that can be returned 
from this function is __________. (answer in integer) 
Note: Ignore syntax errors (if any) in the function.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1)


**Step-by-Step Explanation:**

Solution: 
 Rewrite the given code as :  
Func = { 
        Func(len - 1)          ; if len % 3 == 0 
        1 + Func(len - 1)    ; if len % 3 == 1 
        Func(len - 2)           ; if len % 3 == 2 
       } 
F(0) = 0 
F(1) = 1 
F(2) = F(0) = 0 
F(3) = F(2) = 0 
F(4) = 1 + F(3) = 1 
F(5) = F(3) = 0 
F(6) = F(5) = 0 
F(7) = 1 + F(6) = 1 
Conclusion: 
If (len % 3 == 1) → return 1 
else → return 0 
Therefore maximum returned value is 1.


</details>

---


### Q4. [GATE CSE – 2026 SET – 2 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
#include <stdio.h> 
int g(int n) { 
    return (n+10); 
} 
int f(int n) { 
    return g(n*2); 
} 
int main() { 
    int sum, n; 
    sum=0; 
    for (n=1; n<=3; n++) 
        sum += f(n); 
    printf("%d", sum); 
    return 0; 
} 
The output of the given C program 
is________________  (Answer in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 46


**Step-by-Step Explanation:**

The function 𝑔(𝑛) returns 𝑛 + 10. 
The function 𝑓(𝑛) calls 𝑔(𝑛 × 2), so it returns 
2𝑛 + 10. 
In the main function, the loop runs with 𝑛 taking 
values 1 and 2 (since the loop condition is 𝑛 < 3 ). 
Now, calculate for each iteration: 
For 𝑛 = 1 : 
𝑓(1) = 𝑔(2 × 1) = 𝑔(2) = 2 + 10 = 12. 
<!-- PAGE 29 -->
C PROGRAMMING 
Then, g(f(1)) = g(12) = 12 + 10 = 22. 
For n = 2 : 
f(2) = g(2 × 2) = g(4) = 4 + 10 = 14. 
Then, g(f(2)) = g(14) = 14 + 10 = 24. 
The sum is the total from each iteration: 
22 + 24 = 46 
So, the output of the program is:


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium




```c
#include < stdio.h > 
int foo(int S[],int size){ 
    if(size == 0) return 0; 
    if(size == 1) return 1; 
if(S[0] != S[1]) return        1+foo(S+1,size-1); 
    return foo(S+1,size-1); 
} 
int main(){ 
    int A[]={0,1,2,2,2,0,0,1,1}; 
    printf("%d",foo(A,9)); 
    return 0; 
} 
The value printed by the given C program is _____  . 
(Answer in integer).
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

1    S[0]! = S[1]: The code looks at two 
neighboring numbers. 
2.     1 + foo( . . . ) : If the neighbors are different, 
it means a block has ended, so it adds 1 to the 
count. 
3 foo( . . . ) : If the neighbors are the same, it 
means we are still inside the same block, so it 
skips adding anything. 
4 if(size == 1) return 1; : When it hits the very last 
element, it always adds a final 1 to account for the 
last remaining block. 
 Visualizing the Array Blocks 
Instead of tracing the function frames, break 
the array A into visual blocks of consecutive 
matching numbers: 
 Block 1 → ([0]) 
 Block 2 → ([1]) 
 Block 3 → ([2,2,2]) 
 Block 4 → ([0,0]) 
 Block 5 → ([1,1]) 
Every time the array transitions to a new number, the 
code records it. 
Transitions 
 Transition from 0 to 1 → +1 
 Transition from 1 to 2 → +1 
 Transition from 2 to 0 → +1 
 Transition from 0 to 1 → +1 
 Final element base case → +1 
Total Output 
1 + 1 + 1 + 1 + 1 = 5 
Therefore, the output of the program is 5.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program. Assume 

```c
parameters to a function are evaluated from right to 
left. 
  #include <stdio.h> 
int g(int p) { 
    printf("%d", p); 
    return p; 
} 
int h(int q) { 
    printf("%d", q); 
    return q; 
} 
void f(int x, int y) { 
    g(x); 
    h(y); 
} 
int main() { 
    f(g(10), h(20)); 
} 
Which one of the following options is the CORRECT 
output of the above C program?
```


- **(A)** 20101020

- **(B)** 10202010

- **(C)** 20102010

- **(D)** 10201020



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Explanation: 
Given that function arguments are evaluated from 
right to left: 
Step 1: Function Call 
f(g(10), h(20)); 
First evaluated → h(20) → prints 20, returns 20 
Then evaluated → g(10) → prints 10, returns 10 
So far output: 2010 
Step 2: Inside function f(x, y) 
g(x); 
h(y); 
g(x) → g(10) → prints 10 
h(y) → h(20) → prints 20 
Final Output: 
20 10 10 20 
<!-- PAGE 30 -->
C PROGRAMMING


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program in C: 

```c
 #include <stdio.h> 
 void func(int i, int j) { 
    if (i < j) { 
       int i = 0; 
       while (i < 10) { 
           j += 2; 
     i++ 
 } 
       } 
    printf("%d", i); 
} 
 int main() { 
    int i = 9, j = 10; 
    func(i, j); 
    return 0; 
   } 
The output of the program is ______. (answer in 
integer)    
Note: Assume that the program compiles and runs 
successfully.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (9)


**Step-by-Step Explanation:**

Solution: 
In main: 
i = 9, j = 10 
func(i, j) is called → values are passed by value. 
 Inside func: 
 Outer parameters: 
  i = 9 
  j = 10 
 Condition: 
  i < j → 9 < 10 → true 
 Inside the if block: 
 A new local variable is declared: 
  int i = 0; 
 This shadows the parameter i. 
Now inside the block: 
This new i runs from 0 to 9 in the while loop. 
j is increased, but it does not affect anything outside. 
 After the loop ends, this inner i goes out of scope. 
Outside the block: 
The original parameter i (which is 9) is still 
unchanged. 
 So: 
 printf("%d", i); 
 prints 9.


</details>

---


### Q8. [GATE CSE – 2024 SET – 2 MCQ (2 MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
int main() 
{ 
    f1(); 
    f2(2); 
    f3(); 
    return(0); 
} 
int f1() 
{ 
    return(1); 
} 
int f2(int x) 
{ 
    f3(); 
    if (x == 1) 
        return f1(); 
    else 
        return (x * f2(x - 1)); 
} 
int f3() 
{ 
    return(5); 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Explanation: 
Step 1: Calls from main() 
f1(); 
f2(2); 
f3(); 
So activation starts as: 
main → f1, f2, f3 
Step 2: Expand f2(2) 
int f2(int x) 
{ 
    f3(); 
    if (x == 1) 
        return f1(); 
    else 
        return (x * f2(x - 1)); 
} 
For f2(2): 
Calls f3() Since x ≠ 1, calls f2(1)  
For f2(1):Calls f3()  
Since x == 1, calls f1()


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C program. 

```c
#include <stdio.h> 
int foo(int x, int y, int q) 
{ 
    if ((x <= 0) && (y <= 0)) 
          return q; 
    if (x <= 0) 
          return foo(x, y-q, q); 
    if (y <= 0) 
          return foo(x-q, y, q); 
          return foo(x, y–q, q) + foo(x-q, y, q); 
} 
int main() 
{ 
    int r = foo(15,15,10); 
printf(“%d”, r); 
    return 0; 
} 
The output of the program upon execution is ______ .
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (60)


**Step-by-Step Explanation:**

Solution: 
Function: 
foo(x, y, q) 
Base case: 
 If x ≤ 0 and y ≤ 0 → return q 
If only x ≤ 0 → reduce y by q 
 If only y ≤ 0 → reduce x by q 
Otherwise: 
 foo(x, y−q, q) + foo(x−q, y, q) 
Given: 
 foo(15, 15, 10) 
Compute step by step. 
Call: 
 foo(15,15) 
= foo(15,5) + foo(5,15)  
Now compute each. 
1. foo(15,5) 
= foo(15,-5) + foo(5,5) 
A) foo(15,-5) 
 y ≤ 0 
 → foo(5,-5) 
Now x > 0 and y ≤ 0 
  → foo(-5,-5) 
Both ≤ 0 → return 10 
So foo(15,-5) = 10 
<!-- PAGE 31 -->
C PROGRAMMING 
B) foo(5,5) 
= foo(5,-5) + foo(-5,5) 
foo(5,-5) 
  y ≤ 0 → foo(-5,-5) → 10 
foo(-5,5) 
 x ≤ 0 → foo(-5,-5) → 10 
So foo(5,5) = 10 + 10 = 20 
Therefore: 
 foo(15,5) = 10 + 20 = 30 
Now second branch: 
2. foo(5,15) 
     = foo(5,5) + foo(-5,15) 
We already computed: 
 foo(5,5) = 20 
Now foo(-5,15) 
 x ≤ 0 → foo(-5,5) 
foo(-5,5) 
 x ≤ 0 → foo(-5,-5) → 10 
So foo(-5,15) = 10 
Therefore: 
 foo(5,15) = 20 + 10 = 30 
Final: 
foo(15,15) = 30 + 30 = 60


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C function : 
int SimpleFunction(int Y[], int n, int x) 
{ 
  int total = Y[0], loopIndex; 
  for (loopIndex=1; loopIndex<= n –1; loopIndex++) 
  total = x * total + y[loopIndex]; 
  return total; 
} 
Let Z be an array of 10 elements with Z[i]=1, for all i 
such that 0 <= i <=9 
The value returned by SimpleFunction(Z, 10, 2) is 
_______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1023)


**Step-by-Step Explanation:**

Solution: 
Initially,total=y[0]=1 
loop index = 1 Total = 1 × 2 + 1 = 3 
loop index = 2 Total = 3 × 2 + 1 = 7  
loop index = 3 Total = 7 × 2 + 1 = 15 
loop index = 4 Total = 15 × 2 + 1 = 31 
loop index = 5 Total = 31 × 2 + 1 = 63 
loop index = 6 Total = 63 × 2 + 1 = 127 
loop index = 7 Total = 127 × 2 + 1 = 255 
loop index = 8 Total = 255 × 2 + 1 = 511 
loop index = 9 Total = 511 × 2 + 1 = 1023 
Final value of Total = 1023


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C function: 
int SomeFunction(int x, int y) 
{ 
    if ((x == 1) || (y == 1)) return 1; 
    if (x == y) return x; 
    if (x > y) return SomeFunction(x - y, y); 
    if (y > x) return SomeFunction (x, y - x); 
} 
The value returned by Some Function(15, 255) is 
______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (15)


**Step-by-Step Explanation:**

Solution: 
       x     y 
 SomeFunction (15, 255) 
↓ 
y > x 
 SomeFunction (15, 240) 
↓ 
y > x 
SomeFunction (15, 225) 
↓ 
y > x 
SomeFunction (15, 210) 
   . 
   . 
   . 
↓ 
SomeFunction (15, 195) 
↓ 
SomeFunction (15, 180) 
↓ 
SomeFunction (15, 165) 
↓ 
SomeFunction (15, 150) 
↓ 
SomeFunction (15, 135) 
↓ 
SomeFunction (15, 120) 
↓ 
SomeFunction (15, 105) 
↓ 
SomeFunction (15, 90) 
↓ 
SSSomeFunction (15, 75) 
↓ 
SomeFunction (15, 60) 
↓ 
SomeFunction (15, 45) 
↓ 
SomeFunction (15, 30) 
↓ 
SomeFunction (15, 15) 
↓ 
x == y 
<!-- PAGE 32 -->
C PROGRAMMING 
return x;  
(return 15) 
Hence the final return value is 15.


</details>

---


### Q12. [GATE CSE - 2021 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C functions. 
 The return value of fun2(5) is ____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (55)


**Step-by-Step Explanation:**

Solution: 
fun1 has static int i. 
fun1(n) increments i by n (due to recursion) and 
returns the new i. 
But i is preserved across calls to fun1. 
fun2 has its own static int i. 
fun2(n) does: 
i += fun1(n) then fun2(n-1). 
Initial: 
fun1::i = 0, fun2::i = 0. 
Step 1: fun2(5) 
fun1(5) → fun1::i becomes 0+5 = 5, returns 5. 
fun2::i = 0 + 5 = 5. 
Call fun2(4). 
Step 2: fun2(4) 
fun1(4) → fun1::i was 5, now 5+4 = 9, returns 9. 
fun2::i = 5 + 9 = 14. 
Call fun2(3). 
Step 3: fun2(3) 
fun1(3) → fun1::i was 9, now 9+3 = 12, returns 12. 
fun2::i = 14 + 12 = 26. 
Call fun2(2). 
Step 4: fun2(2) 
fun1(2) → fun1::i was 12, now 12+2 = 14, returns 14. 
fun2::i = 26 + 14 = 40. 
Call fun2(1). 
Step 5: fun2(1) 
fun1(1) → fun1::i was 14, now 14+1 = 15, returns 15. 
fun2::i = 40 + 15 = 55. 
Call fun2(0). 
Step 6: fun2(0) → does nothing, returns fun2::i = 55. 
Final return value of fun2(5) = 55


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C Functions. 
 int tob (int b, int* arr) { 
    int i; 
    for (i = 0; b >0; i++) { 
        if (b % 2) 
            arr[i] = 1; 
        else arr[i]=0; 
            b= b /2; 
        } 
    return (i); 
} 
 The value returned by pp (3,4) is ____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (81)


**Step-by-Step Explanation:**

Solution: 
Call pp(3, 4) 
arr[20] declared, tot = 1, ex = a = 3. 
len = tob(4, arr):b = 4 → binary: 
4 % 2 = 0 → arr[0] = 0, b=2 
2 % 2 = 0 → arr[1] = 0, b=1 
1 % 2 = 1 → arr[2] = 1, b=0 
So arr = [0, 0, 1] (indices 0,1,2), len = 3.Binary of 4 is 
100 (reads arr[2]..arr[0] as MSB..LSB in normal 
writing, but here arr[0] is LSB). 
Loop i = 0 to len-1: 
i=0: arr[0] = 0 → do not multiply; 
ex = ex * ex = 3 * 3 = 9. 
i=1: arr[1] = 0 → do not multiply; 
ex = 9 * 9 = 81. 
i=2: arr[2] = 1 → tot = tot * ex = 1 * 81 = 81; 
ex = 81 * 81 (not used later). 
Return tot = 81.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
 #include <stdio.h> 
 int jumble (int x, int y) { 
    x = 2 * x + y; 
    return x; 
} 
int main ()  { 
     int x=2, y=5; 
     y = jumble (y, x); 
     x = jumble (y, x); 
     printf ("%d \n", x); 
      return 0; 
} 
The value printed by the program is ______.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (26)


**Step-by-Step Explanation:**

Solution: 
Step 1: 
Initial: x = 2, y = 5 
Step 2: 
y = jumble(y, x) → jumble(5, 2) 
Inside jumble: x = 2*5 + 2 = 12 → returns 12 
So y = 12 
Step 3: 
x = jumble(y, x) → jumble(12, 2) 
Inside jumble: x = 2*12 + 2 = 26 → returns 26 
So x = 26 
Output: 26


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
#include <stdio.h> 
int counter = 0; 
int calc (int a, int b) { 
     int c; 
     counter++; 
     if (b= =3) return (a*a*a) ; 
      else  { 
                    c = calc (a, b/3) ; 
                   return (c*c*c) ; 
} 
} 
int main ()  { 
        calc (4, 81); 
        printf ("%d", counter) ; 
} 
The output of this program is ______.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (4)


**Step-by-Step Explanation:**

Solution: 
calc(4, 81) 
counter++ → counter = 1 
b = 81 (not 3) → c = calc(4, 27) 
calc(4, 27) 
counter++ → counter = 2 
b = 27 (not 3) → c = calc(4, 9) 
calc(4, 9) 
counter++ → counter = 3 
b = 9 (not 3) → c = calc(4, 3) 
calc(4, 3) 
counter++ → counter = 4 
b = 3 → return 4*4*4 = 64 
Return values propagate back but don’t affect counter. 
Final counter value = 4


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program written in pseudo-
code. 
Assume that x and y are integers. 
 Count(x, y) { 
    if (y != 1) { 
        if (x != 1) { 
            print("*"); 
            Count(x / 2, y); 
        } 
        else { 
            y = y - 1; 
            Count(1024, y); 
        } 
    } 
} 
 The number of times that the print statement is 
executed by the call Count(1024, 1024) is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (10230)


**Step-by-Step Explanation:**

Solution: 
The function works in two phases: 
1. When x ≠ 1: 
Each call prints "*" and recursively calls 
Count(x/2, y). 
Starting from x = 1024, it keeps halving until 
x = 1. 
Since 1024 = 210, this happens 10 times, so 
10 prints per cycle.  
<!-- PAGE 33 -->
C PROGRAMMING 
2. When x = 1: 
y is decremented by 1 and x is reset to 1024 
→ next cycle begins.  
This process repeats until y = 1, where recursion 
stops. 
● Initial 𝑦 = 1024 
● Final stop at 𝑦 = 1 
⇒ Total cycles = 1024 − 1 = 1023 
Each cycle produces 10 prints, so: 
Total prints = 1023 × 10 = 10230


</details>

---


### Q17. [GATE CSE - 2020 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program. 

```c
#include <stdio.h> 
#include <string.h> 
void printlength (char*s, char*t)    
{ 
   unsigned int c = 0; 
  int len = ((strlen(s) - strlen(t)) > c)?strlen(s):strlen(t); 
  printf("%d\n", len); 
} 
void main ()  { 
     char*x = "abc"; 
     char*y = "defgh"; 
     printlength(x,y); 
} 
Recall that strlen is defined in string.h as returning a 
value of type size_t, which is an unsigned int. The 
output of the program is _________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (3)


**Step-by-Step Explanation:**

Solution: 
x = "abc" → strlen(x) = 3 
y = "defgh" → strlen(y) = 5 
size_t is unsigned int 
c = 0 (unsigned) 
Inside printlength: 
strlen(s) - strlen(t) = 3 - 5 = -2 
But since strlen returns unsigned int, -2 becomes a 
very large positive number (wrap-around in unsigned). 
So: 
(strlen(s) - strlen(t)) > c 
= ( (unsigned)3 - (unsigned)5 ) > 0 
= (0xFFFFFFFE) > 0 → True 
Thus: 
len = strlen(s) = 3 
Output: 3


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two functions. 

```c
void fun1(int n) { 
    if(n = = 0) return; 
    printf("%d", n); 
    fun2(n - 2); 
    printf("%d", n); 
} 
void fun2(int n) { 
    if(n = = 0) return; 
    printf("%d", n); 
    fun1(++n); 
    printf("%d", n); 
} 
The output printed when fun1(5) is called is
```


- **(A)** 53423122233445

- **(B)** 53423120112233

- **(C)** 53423122132435

- **(D)** 53423120213243



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
Final Output: 53423122233445(Option A)


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The output after executing the following program is 
___ 

```c
 #include <stdio.h> 
int total(int v) { 
    while (v) { 
        static int count += v & 1; 
        v >>= 1; 
    } 
    return count; 
} 
void main() { 
    static int x = 0; 
    int i = 5; 
    for (; i > 0; i--) { 
        x = x + total(i); 
    } 
    printf("%d\n", x); 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 23


**Step-by-Step Explanation:**

Solution: 
The function total(v) counts the number of set bits (1s) 
in the binary representation of v.  
The variable count is declared as static, so its value 
persists across multiple function calls. 
Loop runs for i = 5 to 1: 
total(5) → binary 101 → 2 set bits → count = 2  
total(4) → binary 100 → 1 set bit → count = 3  
total(3) → binary 011 → 2 set bits → count = 5  
total(2) → binary 010 → 1 set bit → count = 6  
total(1) → binary 001 → 1 set bit → count = 7  
Since count is static, each call returns the cumulative 
value: 
Returns: 2, 3, 5, 6, 7  
Now summing in main: 
𝑥 = 2 + 3 + 5 + 6 + 7 = 23


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the C functions foo and bar given below: 
int foo(int val) { 
    int x = 0; 
    while (val > 0) { 
        x = x + foo(val--); 
    } 
    return val; 
} 
int bar(int val) { 
    int x = 0; 
    while (val > 0) { 
        x = x + bar(val - 1); 
    } 
    return val; 
} 
Invocation of foo(3) and bar(3) will result in:


- **(A)** Return of 6 and 6 respectively.

- **(B)** Infinite loop and abnormal termination 
respectively

- **(C)** Abnormal termination and infinite loop 
respectively

- **(D)** Both terminating abnormally.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
For foo(3): 
In the statement foo(val--), the current value of val is 
passed to the function first and then it is decremented. 
So when val = 3, the function keeps calling foo(3) 
again before val decreases. 
Because of this, the recursive calls do not move 
towards termination. 
Hence, it leads to infinite recursion and finally stack 
overflow, i.e., abnormal termination. 
For bar(3): 
Inside the loop, the condition is while (val > 0) but 
val is never updated. 
Although the recursive call is bar(val - 1), the original 
val in the loop remains unchanged. 
So the loop condition always stays true. 
Hence, the function runs forever, resulting in an 
infinite loop. 
Therefore: 
foo(3) → Abnormal termination 
bar(3) → Infinite loop


</details>

---


### Q21. [GATE CSE - 2017 SET- 2 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The value printed by the following program is 
__________.  

```c
void f(int* p, int m) { 
 m = m + 5; 
*p = *p + m; 
return; 
} 
void main() { 
int i=5, j=10; 
f(&i, j); 
printf("%d", i+j); 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (30)


**Step-by-Step Explanation:**

Solution: 
Initial: 
i = 5, j = 10 
Call f(&i, j): 
p points to i 
m = 10 (local copy) 
m = m + 5 → m = 15 
*p = *p + m → i = 5 + 15 = 20 
Return 
<!-- PAGE 34 -->
C PROGRAMMING 
After call: 
i = 20, j = 10 (unchanged because j was passed by 
value) 
i + j = 20 + 10 = 30 
Output: 30


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program.   
void f(int, short); 
void main () 

```c
{ 
int i = 100; 
short s = 12; 
short *p = &s; 
 __________ ;         // call to f() 
} 
Which one of the following expressions, when placed 
in the blank above, will NOT result in a type checking 
error?
```


- **(A)** f(s, *s)

- **(B)** i = f(i, s)

- **(C)** f(i, *s)

- **(D)** f(i, *p)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
int i = 100; 
short s = 12; 
short *p = &s; 
_______ // call to f ( ) :: (void f(int,short);) 
It is clearly mentioned the return type of f is void. 
By doing option elimination 
(A) & (C) can be eliminated as s is short variable and 
not a pointer variable. 
(B) i = f(i, s) is false because f’s return type is void, 
but here shown as int. 
(D) f(i, *p) 
i = 100 
*p = 12 
Hence TRUE


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium




```c
void count(int n){ 
    static int d = 1; 
    printf("%d ", n); 
    printf("%d ", d); 
    d++; 
    if(n > 1) count(n - 1); 
    printf("%d ", d); 
} 
void main(){ 
    count(3); 
}
```


- **(A)** 312213444

- **(B)** 312111222

- **(C)** 3122134

- **(D)** 3121112



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation: 
The variable d is declared as static, so it is initialized 
only once and retains its value across recursive calls. 
Execution trace: 
count(3) → prints 3 1, then d = 2  
count(2) → prints 2 2, then d = 3  
count(1) → prints 1 3, then d = 4  
Now recursion unwinds:  
count(1) prints 4  
count(2) prints 4  
count(3) prints 4  
Final output: 
3 1 2 2 1 3 4 4 4


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following recursive C function. 
void get(int n)  

```c
{ 
      if (n<1) return; 
      get (n-1); 
      get (n-3); 
      printf("%d", n); 
} 
        If get(6) function is being called in main() then how 
many times will the get() function be invoked before 
returning to the main()?
```


- **(A)** 15

- **(B)** 25

- **(C)** 35

- **(D)** 45



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Solution: 
Let N(n) be the number of invocations for get(n). The 
recurrence relation is: 
N(n)=1+N(n−1)+N(n−3) 
with base cases: 
N(n)=1 for n≤0 
N(−2)=1 
N(−1)=1 
N(0)=1 
N(1)=1+N(0)+N(−2)=1+1+1=3 
N(2)=1+N(1)+N(−1)=1+3+1=5 
N(3)=1+N(2)+N(0)=1+5+1=7 
N(4)=1+N(3)+N(1)=1+7+3=11 
N(5)=1+N(4)+N(2)=1+11+5=17 
N(6)=1+N(5)+N(3)=1+17+7=25 
The get() function will be invoked 25 times.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program. The output of the 
program is __________.  
# include <stdio.h> 
int f1(void); 
int f2(void); 
int f3(void); 
int x = 10; 

```c
int main() 
{ 
 int x = 1; 
 x += f1() + f2() + f3() + f2(); 
printf("%d", x); 
 return 0; 
 } 
int f1() 
{ 
int x = 25; 
 x++; 
return x; 
} 
int f2( ) 
{ 
 static int x = 50; 
 x++; 
return x; 
} 
int f3( ) 
{ 
 x *= 10; 
 return x; 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (230)


**Step-by-Step Explanation:**

Solution: 
Global x = 10 
main() local x = 1 
f1() 
local x = 25 → x++ → return 26 
First f2() 
static x = 50 → x++ → return 51 (static now 51) 
f3() 
global x = 10 → x *= 10 → global x = 100 → return 
Second f2() 
static x = 51 → x++ → return 52 (static now 52) 
Expression in main: 
x += f1() + f2() + f3() + f2() 
= x += 26 + 51 + 100 + 52 
= x += 229 
Local x was 1 → now 1 + 229 = 230 
Output: 230


</details>

---


### Q26. [GATE CSE – 2016 SET- 1 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C function: 
int fun (int n) { 
int x = 1, k; 
if (n = = 1) return x; 
for (k = 1; k < n; ++k) 
x = x + fun (k) * fun (n – k); 
return x; 
} 
The return value of fun (5) is _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (51)


**Step-by-Step Explanation:**

Solution: 
fun(1) 
= 1 
fun(2) 
k = 1 to 1: 
x = 1 + fun(1) * fun(1) 
= 1 + 1*1 = 2 
fun(3) 
x = 1 
k=1: x += fun(1)*fun(2) = 1*2 = 2 → x=3 
k=2: x += fun(2)*fun(1) = 2*1 = 2 → x=5 
fun(3) = 5 
fun(4) 
x = 1 
k=1: x += fun(1)*fun(3) = 1*5 = 5 → x=6 
k=2: x += fun(2)*fun(2) = 2*2 = 4 → x=10 
k=3: x += fun(3)*fun(1) = 5*1 = 5 → x=15 
fun(4) = 15 
fun(5) 
x = 1 
k=1: x += fun(1)*fun(4) = 1*15 = 15 → x=16 
k=2: x += fun(2)*fun(3) = 2*5 = 10 → x=26 
k=3: x += fun(3)*fun(2) = 5*2 = 10 → x=36 
k=4: x += fun(4)*fun(1) = 15*1 = 15 → x=51 
fun(5) = 51 
Answer: 51 
<!-- PAGE 35 -->
C PROGRAMMING


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following function written the C 
programming language. 

```c
 void foo (char *a) { 
    if (*a && *a != '   ') { 
        foo (a+1); 
        putchar (*a); 
    } 
} 
The output of the above function on input  
"ABCD EFGH" is
```


- **(A)** ABCD EFGD

- **(B)** ABCD

- **(C)** HGFE DCBA

- **(D)** DCBA



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
Step-by-step: 
foo("ABCD EFGH") → *a = 'A' → call foo("BCD 
EFGH") 
foo("BCD EFGH") → *a = 'B' → call foo("CD 
EFGH") 
foo("CD EFGH") → *a = 'C' → call foo("D EFGH") 
foo("D EFGH") → *a = 'D' → call foo(" EFGH") 
foo(" EFGH") → *a = ' ' → condition fails → return 
Now unwinding: 
Step 4: putchar('D') → prints D 
Step 3: putchar('C') → prints C 
Step 2: putchar('B') → prints B 
Step 1: putchar('A') → prints A 
Output: DCBA 
Answer: DCBA


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the C function given below. 
int f(int j) 

```c
{ 
  static int i = 50; 
   int k; 
   if (i == j) 
  { 
    printf(“something”); 
    k = f(i); 
    return 0; 
      } 
  else return 0; 
} 
Which one of the following is TRUE?
```


- **(A)** The function returns 0 for all values of j.

- **(B)** The function prints the string something for all 
values of j

- **(C)** The function returns 0 when j = 50.

- **(D)** The function will exhaust the runtime stack or 
run into an infinite loop when j = 50.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
f(50) 
j = 50 
static int i = 50 (declare and define one time in whole 
program) 
if condition is true 
print something 
k = f(50) 
it will keep running and will cause stack overflow


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements are CORRECT? 
1. Static allocation of all data areas by a compiler 
makes it impossible to implement recursion. 
2. Automatic garbage collection is essential to 
implement recursion. 
3. Dynamic allocation of activation records is 
essential to implement recursion. 
4. Both heap and stack are essential to implement 
recursion.


- **(A)** 1 and 2 only

- **(B)** 2 and 3 only

- **(C)** 3 and 4 only

- **(D)** 1 and 3 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
1) Static allocation of all data areas by a compiler 
makes it impossible to implement recursion. True, 
dynamic allocate of memory is required for 
function call stack as number of calls is not known 
advance for recursive functions.  
2) Automatic garbage collection is essential to 
implement recursion. False, Automatic garbage 
collection is not essential.  
3) Dynamic allocation of activation records is essential 
to implement recursion. True, as number of calls or 
number of activation records is not known advance 
for recursive functions.  
4) Both heap and stack are essential to implement 
recursion. Heap is not needed for function calls. It 
is generally used for dy namic memory allocation 
by user (or programmer)


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C function in which size is the 
number of elements in the array E: The value returned 
by the function MyX is the 
int MyX(int *E, unsigned int size) 
{ 
    int Y = 0; 
     int Z; 
     int i, j, k; 
    for(i = 0; i< size; i++) 
          Y = Y + E[i]; 
    for(i = 0; i< size; i++) 
     for(j = i; j < size; j++) 
           { 
               Z = 0; 
    for(k = i; k <= j; k++) 
                   Z = Z + E[k]; 
               if (Z > Y) 
     Y=Z; 
} 
return Y; 
} 
The value returned by the function MyX is the


- **(A)** maximum possible sum of elements in any sub-
array of array E

- **(B)** maximum element in any sub-array of array E

- **(C)** sum of the maximum elements in all possible 
sub-arrays of array E

- **(D)** the sum of all the elements in the array.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Solution: 
Y=0 
for (i=0; i < size ; i++ ) 
Y=Y+E[i] ; // E is an array, this statement calculates 
the sum of elements of the array E and stores it in Y. 
for (i=0; i<size; i++) 
for(j=i; j <size; j++) { 
Z=0; 
for(k=i; k<=j; k++) 
Z=Z+E[k]; 
if(Z > Y ) 
Y=Z; 
} 
// It calculates the sum of all possible subarrays 
starting from 0 i.e., the loop will iterate for all the 
elements of array E and for every element, calculate 
sum of all sub arrays starting with E[i]. 
Store the current sum in Z. 
If Z is greater than Y then update Y and return Y. So 
it returns the maximum possible sum of elements in 
any sub array of given array E


</details>

---


### Q31. [GATE CSE – 2015 SET - 2 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the function shown below : 
int func(int num) { 
int count = 0; 
    while (num) { 
          count ++; 
        num>> = 1;  
    }  
return (count); 
} 
The value returned by func (435) is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (9)


**Step-by-Step Explanation:**

Solution: 
This code is to find the number of set bits(1) in 
binary representation of the number 
Step 1: Binary of 435 
435 in binary is 110110011 (9 bits). 
Step 2: Loop working 
while(num) runs until num becomes 0. 
Each iteration: 
count increments by 1 
num >>= 1 shifts right by 1 bit 
Step 3: Counting shifts 
Start: num = 435 (binary 110110011) 
After 1 shift: 217 
After 2 shifts: 108 
After 3 shifts: 54 
After 4 shifts: 27 
After 5 shifts: 13 
After 6 shifts: 6 
After 7 shifts: 3 
After 8 shifts: 1 
After 9 shifts: 0 → stop 
Total shifts = 9 → count = 9 
Final answer: 9 
<!-- PAGE 36 -->
C PROGRAMMING


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C code segment. 
int a, b, c = 0; 
void prtFun (void); 
main () 

```c
{  
static int a = 1;    
prtFun (); 
a + = 1; 
prtFun (); 
printf(“\n %d %d ”, a, b); 
} 
void prtFun (void) 
{  
static int a = 2;   
int b = 1; 
a + = + + b; 
printf (“ \n %d %d ”, a, b); 
} 
What output will be generated by the given code 
segment?
```


- **(A)** 31 41 42

- **(B)** 42 61 61

- **(C)** 42 62 20

- **(D)** 42 42 20



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
Global variables: 
int a, b, c = 0; → a = 0, b = 0, c = 0 (global scope). 
Inside main: 
static int a = 1; (local to main, hides global a). 
First call prtFun(): 
Inside prtFun: 
static int a = 2; (local to prtFun, separate from main's 
a and global a). 
int b = 1; (local to prtFun). 
a += ++b; → ++b makes b = 2, so a = 2 + 2 = 4. 
Print: 4 2 (first output line). 
Back to main: a += 1 → main's local a was 1, now 2. 
Second call prtFun(): 
Inside prtFun: 
static int a retains its value from last call: a = 4. 
int b = 1 again (reinitialized local). 
a += ++b → ++b → b = 2, so a = 4 + 2 = 6. 
Print: 6 2 (second output line). 
Back to main: 
printf("\n %d %d", a, b) → a is main's local a = 2, b is 
global b (never changed) = 0. 
Print: 2 0 (third output line). 
final Out put : 4 2  6 2  2 0


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following recursive C function that takes 
two arguments. 
unsigned  int foo(unsigned int n, unsigned int r) { 
if (n > 0) return ((n%r) + foo(n/r,r)); 
else return 0; 
} 
What is the return value of the function foo when it is 
called as foo (513, 2)?


- **(A)** 9

- **(B)** 8

- **(C)** 5

- **(D)** 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
Function: 
unsigned int foo(unsigned int n, unsigned int r) 
 { 
 if (n > 0) 
 return (n % r) + foo(n / r, r); 
 else 
 return 0; 
 } 
This computes the sum of digits of n in base r. 
Given: 
  foo(513, 2) 
So it computes the sum of binary digits (number of 
1s in binary form of 513). 
Convert 513 to binary: 
513 = 512 + 1 
  512 = 2⁹ 
So binary representation: 
There are two 1s. 
Therefore sum of digits = 2(Option D)


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following recursive C function that takes 
two arguments 
unsigned  int foo(unsigned int n, unsigned int r) { 
  if (n  > 0) 
  return (n%r +  foo (n/r, r )); 
  else return 0; 
} 
What is the return value of the function foo when it is 
called as foo(345, 10) ?


- **(A)** 345

- **(B)** 12

- **(C)** 5

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

unsigned int foo(unsigned int n, unsigned int r) 
 { 
 if (n > 0) 
 return (n % r + foo(n / r, r)); 
 else 
 return 0; 
 } 
This computes the sum of digits of n in base r. 
Given: 
 foo(345, 10) 
So it calculates sum of decimal digits of 345. 
Compute step by step: 
345 % 10 = 5 
 345 / 10 = 34 
34 % 10 = 4 
 34 / 10 = 3 
3 % 10 = 3 
 3 / 10 = 0 
Now add: 
5 + 4 + 3 = 12


</details>

---


### Q35. [GATE CSE - 2012 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What does the following program print? 

```c
#include <stdio.h> 
void f(int *p, int *q) 
{ 
  p = q; 
  *p = 2; 
} 
int i = 0, j = 1; 
int main() 
{ 
f(&i, &j); 
printf("%d %d n", i, j); 
getchar(); 
  return 0; 
}
```


- **(A)** 2 2

- **(B)** 2 1

- **(C)** 0 1

- **(D)** 0 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Step 1: 
f(&i, &j) call: 
p points to i, q points to j. 
p = q → p now points to j. 
*p = 2 → changes j to 2. 
Step 2: 
i remains 0, j becomes 2. 
Output: 0 2(option -D)


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the program below: 

```c
 #include <stdio.h> 
 int fun(int n, int *f_p) { 
      int t, f; 
   if (n <= 1) { 
          *f_p = 1; 
          return 1; 
      } 
     t = fun(n - 1, f_p); 
      f = t + *f_p; 
      *f_p = t; 
   return f; 
  } 
 int main() { 
     int x = 15; 
  printf("%d\n", fun(5, &x)); 
  return 0; 
 } 
 The value printed is:
```


- **(A)** 6

- **(B)** 8

- **(C)** 14

- **(D)** 15



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

The function works like Fibonacci using a pointer to 
store the previous  value. 
 Base case: 
 If n ≤ 1, it sets *f_p = 1 and returns 1. 
 For n > 1: 
 It calls fun(n-1, f_p) and stores the result in t. 
 Then it computes f = t + *f_p. 
<!-- PAGE 37 -->
C PROGRAMMING 
 After that, it updates *f_p = t. 
 So each step uses the previous two values, similar to 
Fibonacci. 
 Now compute step by step: 
 fun(1) = 1 
 fun(2) = 2 
 fun(3) = 3 
 fun(4) = 5 
 fun(5) = 8 
 So the program prints 8.(option-B)


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C functions: 
 int f1(int n) 
 { 
     if (n == 0 || n == 1) 
         return n; 
    else 
         return (2 * f1(n - 1) + 3 * f1(n - 2)); 
 } 
 int f2(int n) 
 { 
    int i; 
    int X[N], Y[N], Z[N]; 
 X[0] = Y[0] = Z[0] = 0; 
    X[1] = 1; 
 Y[1] = 2; 
 Z[1] = 3; 
 for (i = 2; i <= n; i++) { 
        X[i] = Y[i - 1] + Z[i - 2]; 
        Y[i] = 2 * X[i]; 
        Z[i] = 3 * X[i];  
 } 
 return X[n]; 
 }  
 The running time of f1(n) and f2(n) are


- **(A)** Θ(n) and Θ(n)

- **(B)** Θ(2ⁿ) and Θ(n)

- **(C)** Θ(n) and Θ(2ⁿ)

- **(D)** Θ(2ⁿ) and Θ(2ⁿ)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Running time 
 f1(n) makes two recursive calls: f1(n−1) and f1(n−2). 
 This is similar to Fibonacci recursion, which grows 
exponentially. 
 So running time of f1(n) is Θ(2ⁿ). 
 f2(n) uses a single loop from 2 to n. 
 Each iteration does constant work. 
 So running time of f2(n) is Θ(n). 
 Correct answer for running time: 
(B) Θ(2ⁿ) and Θ(n)


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


f1(8) and f2(8) return the values


- **(A)** 1661 and 1640

- **(B)** 59 and 59

- **(C)** 1640 and 1640

- **(D)** 1640 and 1661



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Y[i] = 2X[i] 
 Z[i] = 3X[i] 
So 
X[i] = Y[i−1] + Z[i−2] 
= 2X[i−1] + 3X[i−2] 
This is the same recurrence as f1. 
Base values: 
X[0] = 0 
X[1] = 1 
So both functions compute the same sequence. 
Compute step by step: 
 f(0)=0 
 f(1)=1 
 f(2)=2 
 f(3)=7 
 f(4)=20 
 f(5)=61 
 f(6)=182 
 f(7)=547 
 f(8)=1640 
 So both return 1640.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is printed by the following C program? 
 int f(int x, int *py, int **ppz) 

```c
 { 
     int y, z; 
     **ppz += 1; 
   z = **ppz; 
  *py += 2; 
     y = *py; 
  x += 3; 
 return x + y + z; 
 } 
 void main() 
 { 
     int c, *b, **a; 
  c = 4; 
     b = &c; 
     a = &b; 
 printf("%d", f(c, b, a)); 
 }
```


- **(A)** 18

- **(B)** 19

- **(C)** 21

- **(D)** 22



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Solution: 
 Initial values: 
c = 4 
  b = &c 
 a = &b 
 Function call: 
f(c, b, a) 
 So inside function: 
x = 4 
py = b → points to c 
**ppz = a → points to b 
 Step 1: 
**ppz += 1 
 **ppz means value of b (which is &c). 
So b = b + 1. 
Now b points to the next integer location after c. 
 z = **ppz 
So z is the new value of b (address after c). 
 Step 2: 
*py += 2 
 py still holds original b, which points to c. 
So c = 4 + 2 = 6 
 y = *py → y = 6 
 Step 3: 
x += 3 → x = 4 + 3 = 7 
 Return value = x + y + z 
 x = 7 
y = 6 
z = 5 (effectively c was incremented through pointer 
arithmetic impact)


</details>

---


### Q40. [GATE CSE – 2009 SET – 1 NAT (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following are true? 
 I. A programming language which does not permit 
global variables of any kind and has no nesting of 
procedures/functions, but permits recursion can be 
implemented with static storage allocation. 
 II. Multi-level access link (or display) arrangement is 
needed to arrange activation records only if the


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Solution: 
 I.False 
If recursion is allowed, static storage allocation is not 
sufficient because each recursive call needs a new 
activation record. Static allocation cannot handle 
multiple active calls of the same function. 
<!-- PAGE 38 -->
C PROGRAMMING 
 II. True 
Access links (or display) are required only when 
there is nesting of procedures/functions to access 
non-local variables. 
 III. False 
Recursion is implemented using dynamic storage 
allocation (stack). So it is possible with dynamic 
allocation. 
 IV. False 
Recursion and nesting can be implemented using 
stack-based allocation. Heap allocation is not 
necessary. 
 V. True 
If a function can return another function, then its 
activation record cannot always be removed after 
return. Stack-based allocation alone is not sufficient 
in such cases. 
 Correct answer: 
(A) II and V only


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Choose the correct option to fill ?1 and ?2 so that the 
program below prints an input string in reverse order. 
Assume that the input string is terminated by a 
newline character. 

```c
 void reverse(void) { 
 int c; 
    if (?1) reverse(); 
     ?2 
 } 
 main() { 
    printf("Enter Text"); 
 printf("\n"); 
    reverse(); 
    printf("\n"); 
 }
```


- **(A)** ?1 is (getchar() != '\n') 
  ?2 is getchar(c);

- **(B)** ?1 is (c = getchar()) != '\n' 
  ?2 is getchar(c);

- **(C)** ?1 is (c != '\n') 
  ?2 is putchar(c);

- **(D)** ?1 is ((c = getchar()) != '\n') 
  ?2 is putchar(c);



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
 To print the string in reverse using recursion: 
 We must first read a character. 
If it is not newline, call reverse() again. 
After returning from recursion, print the character. 
 This way printing happens while unwinding the 
recursion, giving reverse order. 
 So we need: 
 ?1 → read character and check for newline 
?2 → print that character 
 Correct condition: 
(c = getchar()) != '\n' 
Correct print statement: 
putchar(c);


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider this C code to swap two integers and these 
five statements: 

```c
 void swap(int *px, int *py) { 
    *px = *px - *py 
 *py = *px + *py; 
    *px = *px - *py; 
 } 
 S1: will generate a compilation error 
 S2: may generate a segmentation fault at runtime 
depending on the arguments passed 
 S3: correctly implements the swap procedure for all 
input pointers referring to integers stored in memory 
locations accessible to the process 
 S4: implements the swap procedure correctly for 
some but not all valid input pointers 
 S5: may add or subtract integers and pointers.
```


- **(A)** S1

- **(B)** S2 and S3

- **(C)** S2 and S4

- **(D)** S2 and S5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Solution: 
 S1:False 
The code is syntactically correct, so no compilation 
error. 
 S2: True 
 If invalid pointers (like NULL or uninitialized 
pointers) are passed, it may cause a segmentation 
fault. 
 S3: False 
If both pointers point to the same memory location 
(px == py), the logic fails and the value becomes 
zero. So it does not work for all valid inputs. 
 S4: True 
It works correctly for most valid distinct pointers, but 
not when both pointers refer to the same location. 
 S5: False 
It performs arithmetic on integers, not on pointers.


</details>

---


### Q43. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C-program: 
  double foo(double);   /* Line 1 */ 

```c
  int main() 
 { 
     double da, db; 
     // input da 
     db = foo(da); 
 } 
 double foo(double a) 
 { 
     return a; 
 } 
 The above code compiled without any error or 
warning. If Line 1 is deleted, the above code will 
show:
```


- **(A)** no compile warning or error

- **(B)** some compiler-warnings not leading to 
unintended results

- **(C)** some compiler-warnings due to type-mismatch 
eventually leading to unintended results

- **(D)** compiler errors



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
 Line 1 is a function prototype: 
 double foo(double); 
It tells the compiler the return type and parameter 
type before the function is used in main. 
If we delete Line 1, then when the compiler sees: 
 db = foo(da); 
it has not yet seen the definition of foo. In modern C 
(C99 and later), calling a function without a prior 
declaration is not allowed. 
So the compiler will produce an error (not just a 
warning).


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C-program: 
 void foo(int n, int sum) 

```c
 { 
    int k = 0, j = 0; 
     if (n == 0)  return; 
     k = n % 10; 
     j = n / 10; 
     sum = sum + k; 
     foo(j, sum); 
     printf("%d,", k); 
 } 
  int main() 
   { 
      int a = 2048, sum = 0; 
      foo(a, sum); 
     printf("%d\n", sum); 
       getchar(); 
} 
 What does the above program print?
```


- **(A)** 8, 4, 0, 2, 14

- **(B)** 8, 4, 0, 2, 0

- **(C)** 2, 0, 4, 8, 14

- **(D)** 2, 0, 4,8, 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Solution: 
 The function extracts digits from right to left using: 
 k = n % 10 
j = n / 10 
 For n = 2048: 
 First call: 
 k = 8, j = 204 
 Second call: 
k = 4, j = 20 
 Third call: 
k = 0, j = 2 
 Fourth call: 
k = 2, j = 0 
 When n becomes 0, function returns. 
 Printing happens after the recursive call, so digits are 
printed while returning from recursion:2, 0, 4, 8, 
 Now about sum: 
 sum is passed by value, not by reference. 
So changes inside foo do not affect main’s sum. 
Thus sum in main remains 0 
 .Final output: 2, 0, 4, 8, 0 
<!-- PAGE 39 -->
Array, Pointer And String , Structure


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI-C program. 

```c
 #include <stdio.h> 
 int main() { 
    int *ptr, a, b, c; 
    a = 5; 
    b = 11; 
    c = 20; 
    ptr = &a; 
    *ptr = c; 
    ptr = &c; 
    a = *(&b); 
    c = *ptr - a; 
    printf("%d", c); 
    return 0; 
 } 
The output of this program is __________. (answer 
in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (9)


**Step-by-Step Explanation:**

a = 5 
 b = 11 
 c = 20 
Step 1: 
 ptr = &a 
Step 2: 
*ptr = c 
So value at address of a becomes c (20). 
 Now: 
 a = 20 
Step 3: 
  ptr = &c 
Step 4: 
a = *(&b) 
 *(&b) is simply b. 
 So a = 11 
Step 5: 
  c = *ptr - a 
  ptr points to c. 
  So *ptr is current value of c = 20. 
Thus: 
  c = 20 - 11 = 9   
 Finally: 
printf("%d", c); 
Output: 9


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In C runtime environment, which one of the 
following is stored in heap?


- **(A)** A static variable declared inside a function

- **(B)** An array of integers declared inside a function

- **(C)** A dynamically allocated array of integers 
created using malloc() function call

- **(D)** Return address of a function



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

(A) Static variable declared inside a function → 
stored in data/static segment, not heap. 
(B) Array declared inside a function → stored on 
stack. 
(C) Dynamically allocated array using malloc() → 
stored in heap. 
(D Return address of a function → stored on 
stack. 
 Correct answer:   C


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
 #include < stdio.h > 
int main(){ 
int a; 
int arr[5] = {30,50,10}; 
int *ptr; 
ptr = &arr[0] + 1; 
a = *ptr; 
(*ptr)++; 
ptr++; 
printf("%d", a + (*ptr) + arr[1]); 
return 0; 
} 
 The output of the above program is__________  . 
(Answer in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 111


**Step-by-Step Explanation:**

int a, a new integer variable named 'a' created in 
the run time stack with the garbage value at some 
random memory from the available memory.  
let assume variable 'a' created at memory location 
100 with the value 876. 
int arr[5], a new integer array variable named 'arr' 
created in the run time stack with the sequence of 
30,50,10,0,0 values at some random memory from 
the available memory.  
 let assume variable 'arr' created at memory 
location 200, 204,208,212,216 with the values 
30,50,10,0,0. 
int * ptr , a new integer pointer variable named 
'ptr' created in the run time stack with the garbage 
value at some random memory from the available 
memory.  
⇒ let assume variable 'ptr' created at memory 
location 300 with pointing to some garbage 
memory location. 
ptr = &arr[0] + 1;  
 ptr = ( & ( arr[0] ) ) + 1;  
"ptr" is pointing to arr[1]. 
 a = *ptr;  
a = value at arr[1]   
"a" value is 50. 
(*ptr)++;  
value of the variable pointed by "ptr" is 
incremented by 1.  
"arr[1]" is modified to 51. 
ptr++;  
"ptr" is pointing to next location w.r.to current 
pointed element  
"ptr" is pointing to arr[2]. 
<!-- PAGE 46 -->
C PROGRAMMING 
Line 10: a + (*ptr) + arr[1]  
50 + 10 + 51 = 111 is printed


</details>

---


### Q4. [GATE CSE – 2026 SET – 2 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
 #include < stdio.h > 
void stringcopy(char *, char *); 
int main(){ 
    char a[30] = "@#Hello World!"; 
    stringcopy(a, a + 2); 
    printf("%s\n", a); 
    return 0; 
} 
void stringcopy(char *s, char *t) { 
    while(*t) 
        *s++ = *t++; 
} 
 Which ONE of the following will be the output of the 
program? 
 a) @#Hello World! 
 b) Hello World! 
 c) ello World! 
 d) Hello World!d!
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

char a[30] = "Hello world!"; 
Now you call: 
strcpy(a, a + 2); 
This means: 
"Start copying from the 3rd character (a + 2, 
which is 'H') back into the start of the same 
array." 
So the string "Hello world!" gets copied over the 
beginning of the array. 
strcpy function doesn't copy the null character 
'\0' that ends the string. So after copying, the 
string is not properly terminated. 
That means: 
printf("%s", a); 
doesn't know where to stop, and might keep 
printing garbage from memory after "Hello 
world!" 
On many systems, the output will be something 
like: 
Hello world!rld! 
Because it's printing "Hello world!" (which was 
copied), and then continues into the old content 
("rld!") left behind in memory. 
void strcpy(char *s, char *t) { while(*s++ = 
*t++); }  // this fixes the issue 
Now the string will be properly null-
terminated, and the output will be exactly: 
Hello world! (option d)


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
 #include < stdio.h > 
void foo(int *p, int x) { 
    *p = x; 
} 
int main() { 
    int *z; 
    int a = 20, b = 25; 
    z = &a; 
    foo(z, b); 
    printf("%d", a); 
    return 0; 
} 
 The output of the given C  program is__________  . 
(Answer in integer)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 25


**Step-by-Step Explanation:**

1. Variable Initialization: 
• a = 20 
• b = 25 
• z is a pointer to an integer, which initially 
does not point to any variable. 
2. Pointer Assignment: 
• z = &a; 
The pointer z is now pointing to the address of 
variable a. 
3. Function Call: 
• The function foo(z, b) is called. Here, z points 
to a, and b is passed as the second argument 
(which is 25). 
• Inside the function foo(int *p, int x), *p = x; 
assigns the value of x (which is 25) to the 
location pointed to by p. 
• Since p is pointing to a, a is updated to 25. 
4. Printing the Value of a: 
• After the function call, a has been updated to 
25. 
• The printf("%d", a); statement prints the 
value of a, which is now 25. 
Final Output: 
The output of the program is 25.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The pseudocode of a function fun() is given below: 
 fun(int A[0,...,n-1]) 
{ 
    for i=0 to n-2 
    for j-0 to n-i-2 
        if (A[j] > A[j+1]) 
        then swap A[j] and A[j+1]} 
}  
The pseudocode of a function fun() is given below: 
fun(int A[0,...,n-1]) 
{ 
    for i=0 to n-2 
    for j-0 to n-i-2 
        if (A[j] > A[j+1]) 
        then swap A[j] and A[j+1]} 
} 
Let 𝐴[0, … ,29] be an array storing 30 distinct integers 
in descending order. The number of swap operations 
that will be performed, if the function fun0 is called 
with 𝐴[0, … ,29] as argument, is ____ . (Answer in 
integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 435


**Step-by-Step Explanation:**

The given pseudocode is an implementation of Bubble 
Sort, which sorts an array by repeatedly swapping 
adjacent elements if they are in the wrong order. Let's 
analyze how many swap operations are performed when 
the function fun() is called with an array of 30 distinct 
integers initially sorted in descending order. 
Swap Count Calculation: 
• Initially, when i = 0, the inner loop runs n -1 
times. For n = 30, this is 29 iterations. 
• When i = 1, the inner loop runs n-2 times, which 
is 28 iterations. 
• This pattern continues until the outer loop 
reaches i = n -2, at which point the inner loop 
runs only once. 
The total number of swaps can be computed as the sum 
of the first 29 numbers: 
<!-- PAGE 47 -->
C PROGRAMMING 
Total swaps = 29 + 28 + 27 + ... + 1 
This is the sum of the first n-1 integers: 
Total swaps = (n-1) * n / 2 
For n = 30: 
Total swaps = (29 * 30) / 2 = 435


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C program.   

```c
#include <stdio.h> 
int main() { 
    int arr[4][5]; 
    int i, j; 
    for (i = 0; i < 4; i++) { 
        for (j = 0; j < 5; j++) { 
            arr[i][j] = 10 * i + j; 
        } 
    } 
    printf("%d", *(arr[1] + 9)); 
    return 0; 
} 
What is the output of the above program?
```


- **(A)** 14

- **(B)** 24

- **(C)** 30

- **(D)** 20



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

arr[i][j] = 10*i + j 
So the matrix becomes: 
Row 0: 0 1 2 3 4 
 Row 1: 10 11 12 13 14 
 Row 2: 20 21 22 23 24 
 Row 3: 30 31 32 33 34 
Now evaluate: 
*(arr[1] + 9) 
Important concept: 
arr[1] is the second row. 
 arr[1] is of type int[5], which decays to pointer to its 
first element.So: 
 arr[1] points to element 10. 
Now pointer arithmetic: 
arr[1] + 9 
 means move 9 integers ahead from arr[1][0]. 
arr is stored in row-major order in memory. 
Flattened memory layout: 
0 1 2 3 4 
 10 11 12 13 14 
 20 21 22 23 24 
 30 31 32 33 34 
Now count from arr[1][0] = 10: 
Index 0 → 10 
  1 → 11 
  2 → 12 
  3 → 13 
  4 → 14 
  5 → 20 
  6 → 21 
  7 → 22 
  8 → 23 
  9 → 24 
So: 
*(arr[1] + 9) = 2


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program. 

```c
#include 
int main () { 
int a [4] [5] = {{1, 2, 3, 4, 5},{6, 7, 8, 9, 10},{11, 12, 
13, 14, 15}, {16, 17, 18, 19, 20}}; 
printf (“%d\n”, *(* (a+**a+2) +3)); 
return (0); 
} 
The output of the program is _______.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (19)


**Step-by-Step Explanation:**

*(*(a+**a+2)+3)) 
= *(*(1000+**1000+2)+3)) 
= *(*(1000+3)+3))   {given element **1002 = 3} 
= *(*(1003)+3)) 
= *((1003)+3)    {4th row selected in given matrix} 
= *((1003)+3)     {address of 4th element in 4th row} 
= a[3][3] 
= 19   {element selected a[3][3] = 19z


</details>

---


### Q9. [GATE CSE – 2021 SET- 2 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program:                        

```c
#include <stdio.h> 
int main() { 
    int a[] = {2, 4, 6, 8, 10}; 
    int i, sum = 0, *b = a + 4; 
    for (i = 0; i < 5; i++) 
        sum = sum + (*b - i) - *(b - i); 
    printf("%d\n", sum); 
    return 0; 
} 
The output of the above C program is ____ .
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10


**Step-by-Step Explanation:**

a = {2, 4, 6, 8, 10} 
b = a + 4 → a[4] = 10 
For i = 0 to 4: 
i=0 → sum = 0 + (10−0)−10 = 0 
i=1 → sum = 0 + (10−1)−8 = 1 
i=2 → sum = 1 + (10−2)−6 = 3 
i=3 → sum = 3 + (10−3)−4 = 6 
i=4 → sum = 6 + (10−4)−2 = 10 
Final Output:10


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program: 

```c
#include <stdio.h> 
int main (){ 
   int arr []={1,2,3,4,5,6,7,8,9,0,1,2,5}, 
   *ip = arr+4; 
    printf ("%d\n", ip[1]); 
    return 0; 
} 
The number that will be displayed on execution of the 
program is _____.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 5} 
ip = arr + 4 → points to arr[4] which is 5 
ip[1] = *(ip + 1) = arr[5] = 6 
Output: 6


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The following function computes the maximum value 
contained in an integer array  
           p[] of size n (n >= 1). 
int max(int *p, int n) { 
int a=0, b=n-1; 
while (__________)  
{ 
     if (p[a] <= p[b]) 
    { 
        a = a+1; 
} 
      else    
{ 
     b = b-1; 
     } 
} 
return p[a]; 
 } 
The missing loop condition is


- **(A)** a != n

- **(B)** b != 0

- **(C)** b > (a + 1)

- **(D)** b != a



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The function computes the maximum value contained 
in an integer array p [ ] of size n (n >= 1). 
If a = = b, means both are at same location & 
comparison ends.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium




```c
#include <stdio.h> 
struct Ournode {  
    char x, y, z ; 
}; 
int main () {  
    struct Ournode p = {'1', '0', 'a'+2} ; 
    struct Ournode *q = &p ; 
    printf ("%c, %c", *((char*)q+1), *((char*)q+2)) ;  
    return 0 ; 
}  
The output of this program is
```


- **(A)** 0, c

- **(B)** 0, a+2

- **(C)** ‘0’, ‘a+2’

- **(D)** ‘0’, ‘c’



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

struct Our node p = {'1', '0', 'a'+2}; 
Members: x = '1', y = '0', z = 'a' + 2 = 'c'. 
q points to p. 
(char*)q treats q as a byte pointer (char pointer). 
*((char*)q+1) → skip 1 byte from start → accesses y 
→ '0' 
*((char*)q+2) → skip 2 bytes → accesses z → 'c' 
Output: 0, c


</details>

---


### Q13. [GATE CSE - 2019 NAT (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium




```c
#include<stdio.h> 
void fun1(char *s1, char *s2)  { 
    char *tmp; 
    tmp = s1; 
     s1 = s2; 
     s2 = tmp; 
}  
void fun2(char **s2, char **s2)  { 
     char *tmp; 
     tmp = *s1; 
     *s1 = *s2; 
     *s2 = tmp; 
} 
int main ()  { 
     char *str1 = "Hi", *str2 = "Bye"; 
      fun1(str1, str2);     
      printf("%s %s", str1, str2);  
      fun2(&str1, &str2);    
      printf("%s %s", str1, str2);  
      return 0; 
}  
The output of the program above is
```


- **(A)** Hi ByeBye Hi

- **(B)** Hi Bye Hi Bye

- **(C)** Bye Hi Hi Bye

- **(D)** Bye Hi Bye Hi



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Initial: 
str1 = "Hi", str2 = "Bye" 
<!-- PAGE 48 -->
C PROGRAMMING 
Call fun1(str1, str2) 
fun1 gets copies of the pointers. Swapping s1 and s2 
locally doesn’t change str1 and str2 in main. 
So after fun1: str1 still points to "Hi", str2 still points 
to "Bye". 
First printf: Hi Bye 
Call fun2(&str1, &str2) 
fun2 r eceives pointers to str1 and str2 (double 
pointers). 
tmp = *s1 → tmp points to "Hi" 
*s1 = *s2 → str1 now points to "Bye" 
*s2 = tmp → str2 now points to "Hi" 
So after fun2: str1 = "Bye", str2 = "Hi" 
Second printf: Bye Hi 
Final output: Hi ByeBye Hi (no space between the two 
prints in the code) 
Answer: Hi ByeBye Hi


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Match the following:  
(P) static char var ; (i) Sequence of 
memory 
locations to 
store address 
(Q) 𝑚 = malloc (10); 
m = NULL; 
(ii) A variable located 
in data section 
of memory 
(R) char*ptr[10]; (iii) Request to 
allocate a CPU 
register to store 
data 
(S) register int var1;  (iv) A lost memory 
which cannot be 
freed


- **(A)** 𝑃 → (ii), 𝑄 → (iv), 𝑅 → (i), 𝑆 → (iii)

- **(B)** 𝑃 → (ii), 𝑄 → (i), 𝑅 → (iv), 𝑆 → (iii)

- **(C)** 𝑃 → (ii), 𝑄 → (iv), 𝑅 → (iii), 𝑆 → (i)

- **(D)** 𝑃 → (iii), 𝑄 → (iv), 𝑅 → (i), 𝑆 → (ii)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Static char var: 
⇾ A variable located in Data Section of memory 
m=malloc(10) 
m=Null 
⇾ A lost memory which cannot be freed (Free (m) is 
mission here) 
char *ptr[10]; ⇾ Sequence of memory locations to 
store address. 
(10 memory locations) 
register int var1; ⇾ A Request to allocate a CPU 
register to store data  
(Register variable storage class). 
P→(ii), Q→(iv), R→(i), S→(iii)


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following function implemented in  

```c
void printxy (int x, int y)   { 
int *ptr; 
x = 0; 
ptr = &x; 
y = *ptr; 
*ptr = 1; 
printf("%d,%d",x,y); 
} 
The output of invoking printxy(1, 1) is_____
```


- **(A)** 0, 0

- **(B)** 0 ,1

- **(C)** 1, 0

- **(D)** 1, 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Initial: x = 1, y = 1 
x = 0 → x becomes 0 
ptr = &x → ptr points to x 
y = *ptr → y = 0 
*ptr = 1 → x = 1 
printf("%d,%d", x, y) → x = 1, y = 0


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following snippet of a C program. 
Assume that swap(&x, &y)  exchanges the contents 
of x and y. 

```c
int main ()  { 
    int array[] = {3, 5, 1, 4, 6, 2}; 
    int done = 0; 
    int i; 
while (done = = 0)  { 
     done = 1; 
     for (i=0; i<=4; i++)  { 
            if (array[i] < array[i+1])  { 
               swap (&array[i], &array[i+1]); 
               done = 0; 
        } 
} 
for (i=5;  i>=1;  i- -) { 
      if (array[i] > array[i-1])   { 
      swap(&array[i], &array[i-1]); 
      done=0; 
       } 
     } 
} 
printf("%d", array[3]); 
} 
The output of the program is ________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

1. First Pass (Forward Loop: i=0 to 4) 
This loop checks if array[i] < array[i+1] and swaps 
them to move smaller values to the right (descending 
order). 
Compare (3, 5): 3 < 5 is true -> {5, 3, 1, 4, 6, 2} 
Compare (3, 1): 3 < 1 is false. 
Compare (1, 4): 1 < 4 is true -> {5, 3, 4, 1, 6, 2} 
Compare (1, 6): 1 < 6 is true -> {5, 3, 4, 6, 1, 2} 
Compare (1, 2): 1 < 2 is true -> {5, 3, 4, 6, 2, 1} 
2. First Pass (Backward Loop: i=5 down to 1) 
This loop checks if array[i] > array[i -1] and swaps 
them to move larger values to the left. 
Compare (1, 2): 1 > 2 is false. 
Compare (2, 6): 2 > 6 is false. 
Compare (6, 4): 6 > 4 is true -> {5, 3, 6, 4, 2, 1} 
Compare (6, 3): 6 > 3 is true -> {5, 6, 3, 4, 2, 1} 
Compare (6, 5): 6 > 5 is true-> {6, 5, 3, 4, 2, 1} 
3. Subsequent Passes 
The while loop continues until nowaps occur. Since 
the array is not yet fully sorted (3 and 4 are out of 
order), it runs again: 
In the next forward pass, 3 and 4 will be compared. 
Since $3 < 4$, they swap. 
The final sorted array in descending order becomes: 
{6, 5, 4, 3, 2, 1} 
Final Result 
The program requests printf("%d", array[3]);. 
Mapping the indices: 
array[0] = 6 
array[1] = 5 
array[2] = 4 
array[3] = 3 
array[4] = 2 
array[5] = 1 
The output is 3.


</details>

---


### Q17. [GATE CSE – 2017 SET- 2 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program. 

```c
#include<stdio.h> 
#include<string.h> 
int main ()  { 
      char* c = "GATECSIT2017"; 
      char* p = c; 
      printf("%d", (int) strlen (c + 2[p] - 6[p] - 1)); 
      return 0; 
} 
The output of the program is _________ .
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

c = "GATECSIT2017" 
p = c 
We need: strlen(c + 2[p] - 6[p] - 1) 
Step 1: Compute 2[p] and 6[p] 
In C, 2[p] means *(2 + p) = p[2] = 3rd character of  
string "GATECSIT2017". 
Indexing: 
0: 'G', 1: 'A', 2: 'T', 3: 'E', 4: 'C', 5: 'S', 6: 'I', 7: 'T', 8: 
'2', 9: '0', 10: '1', 11: '7' 
So: 
2[p] = 'T' → ASCII = 84 
6[p] = 'I' → ASCII = 73 
Step 2: Compute c + 2[p] - 6[p] - 1 
= c + 84 - 73 - 1 
= c + 10 
Step 3: strlen(c + 10) 
c + 10 → points to the 11th character (0 -based index 
10) of "GATECSIT2017". 
Index 10: '1', then '7', then null terminator. 
String from index 10: "17" → length = 2. 
Output: 2 
<!-- PAGE 49 -->
C PROGRAMMING


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium




```c
#include<stdio.h> 
void mystery(int *ptra, int *ptrb) { 
int *temp; 
temp = ptrb; 
ptrb = ptra; 
ptra = temp; 
} 
int main() { 
int a=2016, b=0, c=4, d=42; 
mystery(&a, &b); 
if (a < c) 
mystery(&c, &a); 
mystery(&a, &d); 
printf("%d\n", a); 
} 
The output of the program is ________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (2016)


**Step-by-Step Explanation:**

void mystery(int *ptra, int *ptrb) { 
 int *temp; 
 temp = ptrb; 
 ptrb = ptra; 
 ptra = temp; 
 } 
Important: 
 Pointers are passed by value. 
 So only local copies are swapped. 
 Actual variables are NOT modified. 
 Now trace main. 
Initial: 
 a = 2016 
 b = 0 
 c = 4 
 d = 42 
 Call: 
  mystery(&a, &b); 
No effect on a or b. 
 Condition: 
  if (a < c) 
2016 < 4 → false 
 So this mystery call is skipped. 
Next: 
  mystery(&a, &d); 
Again no effect. 
So a remains 2016. 
printf("%d\n", a); 
Output:


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the output of the following C code? Assume 
that the address of x is 2000 (in decimal) and an integer 
requires four bytes of memory. 

```c
#include <stdio.h> 
int main() 
{  
unsigned int x[4][3] = {{1, 2, 3}, {4, 5, 6},  
{7, 8, 9}, {10, 11, 12}}; 
printf("%u, %u, %u", x+3, *(x+3), *(x+2)+3); 
}
```


- **(A)** 2036, 2036, 2036

- **(B)** 2012, 4, 2204

- **(C)** 2036, 10, 10

- **(D)** 2012, 4, 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given: 
x[4][3] → 4 rows, 3 columns. 
Base address of x = 2000. 
Size of unsigned int = 4 bytes. 
1. x + 3 
x is of type unsigned int (*)[3] (pointer to array of 
3 ints). 
x + 3 = address of x[3] (4th row). 
Row size = 3 × 4 = 12 bytes. 
So x + 3 = 2000 + 3 × 12 = 2000 + 36 = 2036. 
2. *(x + 3) 
*(x + 3) = x[3] = address of first element of 4th row 
(x[3][0]). 
Address of x[3][0] = 2036 (same as x + 3 
numerically but type is unsigned int *). 
So value printed = 2036. 
3. *(x + 2) + 3 
*(x + 2) = x[2] = address of x[2][0] = 2000 + 2 × 
12 = 2024. 
*(x + 2) + 3 = &x[2][3]? Wait, x[2] has only 3 
columns (0,1,2), so x[2] + 3 = address of x[2][3] is 
out of bounds for row 2, but in C it’s just pointer 
arithmetic: 
x[2] + 3 = 2024 + 3 × 4 = 2024 + 12 = 2036. 
So all three expressions give: 
2036, 2036, 2036 
Output: 2036, 2036, 2036


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program segment. 
# include <stdio.h> 

```c
int main( ) 
{ 
char s1[7] = "1234", *p; 
p = s1 + 2; 
*p = '0' ; 
printf ("%s", s1); 
} 
What will be printed by the program?
```


- **(A)** 12

- **(B)** 120400

- **(C)** 1204

- **(D)** 1034



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

char s1[7] = "1234" → s1 contains: '1' '2' '3' '4' '\0' ... 
p = s1 + 2 → p points to s1[2] which is '3' 
*p = '0' → s1[2] becomes '0' 
Now s1 = '1' '2' '0' '4' '\0' 
printf("%s", s1) prints 1204 
Answer: 1204


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program.  
# include<stdio.h> 

```c
int main( ) 
{ 
  static int a[] = {10, 20, 30, 40, 50}; 
  static int *p[] = {a, a+3, a+4, a+1, a+2}; 
  int **ptr = p; 
ptr++; 
printf("%d%d", ptr - p, **ptr}; 
} 
The output of the program is _________
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 140


**Step-by-Step Explanation:**

Initial arrays: 
a[] = {10, 20, 30, 40, 50} 
p[] = {a, a+3, a+4, a+1, a+2} 
That means: 
p[0] = &a[0] → 10 
p[1] = &a[3] → 40 
p[2] = &a[4] → 50 
p[3] = &a[1] → 20 
p[4] = &a[2] → 30 
ptr = p → ptr points to p[0] 
Step: ptr++ 
ptr now points to p[1] 
ptr - p 
= (address of p[1] - address of p[0]) in units of int* 
= 1 
**ptr 
*ptr = p[1] = a+3 → points to a[3] = 40 
So **ptr = 40 
Output: 1 and 40 → 140


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program in C language: 

```c
#include <stdio.h> 
main() 
{ 
    int i; 
    int *pi = &i; 
scanf("%d", pi); 
printf("%d\n", i+5); 
} 
Which one of the following statements is TRUE?
```


- **(A)** Compilation fails.

- **(B)** Execution results in a run-time error.

- **(C)** On execution, the value printed is 5 more than 
the address of variable i.

- **(D)** On execution, the value printed is 5 more than 
the integer value entered.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

int i; // Initially i takes the Garbage value 
int *pi = &i; // pi is a pointer which stores the address of i. 
scanf (pi); // pi = &i (we rewrite the garbage value with 
our values) say x = 5 
printf (i+5); // i+5 = x+5 = 5+5 = 10 
<!-- PAGE 50 -->
C PROGRAMMING 
Hence on execution, the value printed is 5 more than 
the integer value entered.


</details>

---


### Q23. [GATE CSE – 2016 SET – 1 NAT (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let A be a square matrix of size n × n. Consider the 
following pseudocode. What is the expected output?  
C = 100; 
for i = 1 to n do 
for j = 1 to n do 
{ 
Temp = A[i] [j] + C; 
A [i] [j] = A[j] [i]; 
 A[j][i] = Temp – C; 
 } 
for i = 1 to n do 
  for j = 1 to n do 
        output (A[i][j]);


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Manipulation Block: The  three lines inside the 
innermost loop: 
Temp = A[i] [j] + C; 
A [i] [j] = A[j] [i]; 
A[j][i] = Temp – C; 
This sequence performs a swap of A[i][j] and A[j][i]. 
The constant C=100 is added and then subtracted, 
having no net effect on the values themselves. 
Loop Structure: The nested loops iterate over all pairs 
of indices (i,j) from 1 to n. 
Net Effect: 
For any pair where i!=j (off -diagonal elements), the 
loops process the pair twice: once as (i,j) and once as 
(j,i). 
A swap operation performed twice on the same pair of 
memory locations returns the elements to their original 
positions and values. 
For i=j (diagonal elements), the element is swapped 
with itself, resulting in no change. 
Final Output: Since the matrix A is restored to its 
initial state after the first set of loops, the second set of 
loops, which prints A[i][j] in row -major order, prints 
the original matrix A. 
Therefore, the expected output is The matrix A itself. 
The correct option is: The matrix A itself


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What does the following fragment of C-program print? 
char c[] = "GATE2011"; 
char *p =c; 

```c
printf("%s", p + p[3] - p[1]) ;
```


- **(A)** GATE2011

- **(B)** E2011

- **(C)** 2011

- **(D)** 011



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

p is the starting address of array. 
Let consider p address is 100 and p[3] point to A in 
array and ASCII value of A is 65 and E is 69 so 
difference of there is 4. 
p[3] - p[1] = 4, and p+4 will be pointing to the fifth 
position in the array 'c'. So printf starts printing from 2 
and prints 2011


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium




```c
#include<stdio.h> 
int f(int *a, int n) 
{ 
    if(n <= 0) return 0; 
    else if(*a % 2 == 0)  
    return *a+f(a+1, n-1); 
  Else   return *a - f(a+1, n-1); 
} 
int main() 
{ 
  int a[] = {12, 7, 13, 4, 11, 6}; 
printf("%d", f(a, 6)); 
getchar(); 
  return 0; 
} 
 What is the value printed by the following C 
program
```


- **(A)** -9

- **(B)** 5

- **(C)** 15

- **(D)** 19



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

f(100,6) 
 ↓ 
12 + f(104,5) → 15 
               ↓ 
7 - f(108,4) → 3 
          ↓ 
13 - f(112,3) → 4 
          ↓ 
4 + f(116,2) → 9 
          ↓ 
11 - f(120,1) → 5 
          ↓ 
6 + f(124,0) → 6 
         ↓ 
 So, the final returned value is 12 + (7 – (13 – (4 + (11 
– (6 + 0))))) = 15


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C-function in which a[n] and 
b[m] are two sorted integer arrays and c[n+m] be 
another integer array. 
  void xyz(int a[], int b[], int c[]) 

```c
 { 
     int i, j, k; 
     i = j = k = 0; 
  while ((i < n) && (j < m)) 
        if (a[i] < b[j]) 
             c[k++] = a[i++]; 
        else 
  c[k++] = b[j++]; 
} 
 Which of the following condition(s) hold(s) after the 
termination of the while loop? 
 (i) j<m,  k=n+j−1,  and a[n−1]<b[j] if i=n 
 (ii) i<n,  k=m+i−1,  and b[m−1]≤a[i] if j=m
```


- **(A)** only (i)

- **(B)** only (ii)

- **(C)** either (i) or (ii) but not both

- **(D)** neither (i) nor (ii)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The loop condition is: while (i < n) && (j < m) 
 So the loop stops when either  i = n or j = m. 
 Case 1: i = n 
 All elements of array a are copied. 
Then j < m must be true. 
Since k increments every time either i or j 
increments, 
k = i + j. 
Here i = n, so k = n + j. 
 Thus statement (i) says k = n + j − 1, which is wrong. 
 It should be k = n + j. 
 So (i) is false. 
 Case 2: j = m 
 All elements of array b are copied. 
 Then i < n must be true. 
Again k = i + j.Here j = m, so k = i + m. 
 Statement (ii) says k = m + i − 1, which is wrong. 
 It should be k = m + i. 
 So (ii) is also false. 
 Therefore, 
 Correct answer:  
 (D) neither (i) nor (ii)


</details>

---


### Q27. [GATE CSE - 2011 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What does the following C-statement declare? 
 int (*f)(int *);


- **(A)** A function that takes an integer pointer as 
argument and returns an integer

- **(B)** A function that takes an integer as argument 
and returns an integer pointer

- **(C)** A pointer to a function that takes an integer 
pointer as argument and returns an integer

- **(D)** A function that takes an integer pointer as 
argument and returns a function pointer



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The declaration is: int (*f)(int *); 
 Break it carefully: 
  f is inside parentheses with *, so f is a pointer. 
It points to something that takes (int *) as argument. 
That function returns int. 
 So it means: 
 A pointer to a function that takes an integer pointer as 
argument and returns an integer.


</details>

---

