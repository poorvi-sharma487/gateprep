# Discrete Mathematics


> **Subject:** Discrete Mathematics  

> **Pages in Book:** 583–642  

> **Total Modules:** 4


## Topics in this Subject


## Topic 1: FARRAY


### Q1. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let U = {1, 2,...,n}, where n is a large positive integer 
greater than 1000. Let k be a positive integer less 
than n. Let A, B be subsets of U with |A| = |B| = k 
and A ∩ B = ∅. We say that a permutation of U 
separates A from B if one of the following is true.  
 - All members of A appear in the permutation before 
any of the members of B.  
 - All members of B appear in the permutation before 
any of the members of A.  
 How many permutations of U separate A from B? 
 a) n! 
 b) ( 𝑛2𝑘) (n-2k)! 
 c) ( 𝑛2𝑘) (n-2k)!(k!)2 
 d) 2( 𝑛2𝑘) (n-2k)!(k!)2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Instead of taking variables lets take a small example 
to first understand the question, once that’s done, the 
solutions would seem pretty intuitive! 
 Let n = 6 
 U = {1,2,3,4,5,6} 
 A = {1,2} and B = {4,5} 
 Here k = 2 and A ∩ B = Φ 
 Now, coming to the solution, 
 Step 1 : We first select 2k elements from n elements 
for creating A and B i.e nC2k 
 Step 2 : Elements in A and B can permute amongst 
themselves respectively so k!×k!(i.e., nC2k×k!×k!) 
 Step 3 : Now there can be two cases – AB and BA i.e 
nC2k×k!×k!×2 
 Step 4 : The remaining elements (n-2k) can arrange 
in any way so (n−2k)! 
Thus, the expression becomes: 
 nC2k×k!×k!×2×(n−2k)! 
 Thus, our solution becomes Option D.


</details>

---


### Q2. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number of permutations of the characters in 
LILAC so that no character appears in its original 
position, if the two L’s are indistinguishable, is 
_______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 12


**Step-by-Step Explanation:**

There are 5 places 
 ― ― ― ― ― 
 Given: L I L A C 
 There are three cases possible- 
 Case-1: _L _ L _ 
 In this case, we put C in first and third place 
 So, C L A L I and C L I L A 
 A L C L I and I L C L A 
 There are 4 ways possible in this case. 
 Case-2: _L _ _ L 
 In this case, we put A in first and third place 
 So, A L C I L and A L I C L 
 C L A I L and I L A C L 
 There are 4 ways possible in this case. 
 Case-3: _ _ _ LL 
 In this case, we put I in first and third place 
 So, I A C L L and I C A L L 
 C A I L L and A C I L L 
 There are 4 ways possible in this case. 
 Thus, We get a total of 12 ways by adding all the 
above cases.


</details>

---


### Q3. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is a closed form 
expression for the generating function of the sequence 
{an }, where an = 2n+3 for all n = 0, 1, 2, …?  
a) 3/(1 – x)2 
b) 3x/(1–x) 2 
c) (2–x)/(1–x)2 
 d) (3–x)/(1–x) 2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given sequence an = 2n+3 
Generating function “G(x)” for the sequence an is  
G(x) =  ∑ 𝑎𝑛𝑥𝑛∞𝑛=0 =  ∑ 2𝑛(𝑥𝑛) + 3(𝑥)𝑛∞𝑛=0  
= 2(0 + x + 2x² + 3x³ + …) + 3(1 + x + x² + …) 
We know,  
(1 − x)−1 = 1 + x + x² + … (1)  
x + 2x2 + 3x3 + … = x(1 + 2x + 3x² + 4x³ + ….) 
= x(1 − x)-2 
= 𝑥(1 − 𝑥)2 … (2) 
Substitute (1) and (2) in G(x) 
G(x) = 2 (
𝑥
(1−𝑥2)) + 3 (
1−𝑥) 
= 
2𝑥 + 3(1 − 𝑥)
(1 − 𝑥)2 =
2𝑥 + 3 − 3𝑥
(1 − 𝑥)2  
= 3 − 𝑥(1 − 𝑥)2


</details>

---


### Q4. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If the ordinary generating function of a sequence 
{an}∞n=0 is (1+z)/(1 -z)3 then a 3 – a0 is equal to 
________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 15


**Step-by-Step Explanation:**

1+𝑧
(1−𝑧)3 = (1 + 𝑧)(1 − 𝑧)−3   
(1 - z)−3 = 1 + (31) 𝑧 +  (42) 𝑧2 + (53) 𝑧3 + ⋯ ∞ 
(1 + 𝑧)(1 − 𝑧)−3 = (1 + 𝑧) ∗ (1 + (31) 𝑧 
+ (41) 𝑧2 + (53) 𝑧3 + ⋯ ∞) 
𝛼0 is the first term in the expansion of above series and  
𝛼3 is the fourth term (or) coefficient of z3 
𝑎0 = coefficient of z0 = 1 
𝛼3 = coefficient of z3 = (53) +  (42) = 10 + 6  
⇒ 𝑎3 − 𝑎0 = 16 − 1 = 15


</details>

---


### Q5. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the recurrence relation a1 = 8, an = 6n2 + 2n + 
an-1. Let a99 = K × 104 . The value of K is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 198


**Step-by-Step Explanation:**

an = 6n 2 + 2n + an-1 
 Replace a(n-1) 
 => an = 6n2 + 2n + 6(n – 1)2 + 2(n – 1) 
 ⇒ an = 6n2 + 2n + 6(n-1)2 + 2(n-1) + 6(n-2)2 + 2(n-2) 
+ ⋯ a1 
 Given that a1 = 8, replace it 
 ⇒ an = 6n 2 + 2n + 6(n-1) 2 + 2(n-1) + 6(n-2) 2 + 2(n-
2) + ⋯8 
 = 6n2 + 2n + 6(n-1)2 + 2(n-1) + 6(n-2)2 +2(n-2) + ⋯ + 
6(1)2 + 2(1) 
 Observe that 6n2 + 2n (replace n with n-1) is repeated 
with each ‘n’. 
 = 6(n2 + (n-1)2 + (n-2)2 + ⋯ + 22 + 12 ) +2(n + (n-1) + 
⋯1) 
 Sum of n2 = (n(n+1)(2n+1))/6 
 Sum of n = (n(n+1))/2 
 = 6 × (n(n+1)(2n+1))/6 + 2×(n(n+1))/2 
 = n(n+1)[1+2n+1] 
 = n(n+1)[2n+2] 
 = 2n(n+1)2 
 Given a99 = k×104 
 a99 = 2(99)(100)2 = 198 × 104 
 ∴ k = 198 
<!-- PAGE 588 -->
DISCRETE MATHEMATICS


</details>

---


### Q6. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The coefficient of x12 in (x3 + x4 + x5 + x6 +...)3 is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10


**Step-by-Step Explanation:**

Coefficient of x12 in (x3 + x4 + x5 + x6 +...)3 is 
 ⇒ [x3 (1 + x + x2 + x3 + ...)]3 
 = x9 (1 + x + x2 + x3 + ...)3 
 First Reduction: 
 As x9 is out of the series, we need to find the co-
efficient of x3 in (1 + x + x2 + ⋯)3 
  (1 + 𝑥 + 𝑥3 + ⋯ )𝑚 =  ∑ (𝑚 + 𝑘 − 1𝑘 ) 𝑥𝑘 ∞𝑘=0   
 Here, m=3, k=3, the coefficient 
 = 5C3 = 5!/2!3! = 10


</details>

---


### Q7. [GATE CSE - 2023 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let an be the number of n-bit strings that do NOT 
contain two consecutive 1s. Which one of the 
following is the recurrence relation for an? 
 a) an = an–1 + 2an–2 
 b) an = an–1 + an–2 
 c) an = 2an–1 + an–2 
 d) an = 2an–1 + 2an–2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let: an = number of n-bit strings that do not have two 
consecutive 1’s. 
 If n=1, possible strings {0,1} 
 a1 = 2 
 If n=2, possible strings {00,01,10} 
 a2 = 3 
 If n=3, 
 possible strings {000,001,010,100,101} 
 a3 = 5 
 It is evident that a3 = a 1 + a2 
 Similarly, an = an-1 + an-2


</details>

---


### Q8. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let an represent the number of bit strings of length n 
containing two consecutive 1s. What is the 
recurrence relation for an? 
 a) an–2 + an–1 + 2n–2 
 b) an–2 + 2an–1 + 2n–2 
 c) 2an–2 + an–1 + 2n–2 
 d) 2an–2 + 2an–1 + 2n–2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

For a string of length 1, there is '0' consecutive 1's. 
 So, a1 = 0 
 For string of length 2, 
 a2 = 1 
 Similarly, a3 = 3 
 a4 = 8 
 Only option A will satisfy the above values.


</details>

---


### Q9. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


∑ 1/x(x + 1)  =  ______.991


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.99


**Step-by-Step Explanation:**

∑𝑥=199   1𝑥(𝑥 + 1)
= ∑𝑥=199  (1𝑥 − 1𝑥 + 1)
= 11 − 12 + 12 − 13 + 13 − 14 + ⋯ + 199 − 1100
= 1 − 1100
= 0.99


</details>

---


### Q10. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number of divisors of 2100 is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 36


**Step-by-Step Explanation:**

Let N = 2100 
 =22 x 3 × 52 × 7 (i.e., the product of primes) 
 Then, the number of divisors of 2100 is: 
 (2+1)∙(1+1)∙(2+1)∙(1+1) 
 i.e., (3)(2)(3)(2) 
 i.e., 36.


</details>

---


### Q11. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number of 4-digit numbers having their digits in 
non-decreasing order (from left to right) constructed 
by using the digits belonging to the set {1, 2, 3} is 
_____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 15


**Step-by-Step Explanation:**

To form a four-digit number with non-decreasing 
digits from the set {1, 2, 3}, we can look at the 
possible combinations: 
 1. All digits are 1s: There's only one such number, 
1111. 
 2. One digit is 2 and the rest are 1s: There are four 
such numbers, 1112, 1122, 1222, and 2222. 
 3. One digit is 3 and the rest are 1s: There are four 
such numbers, 1113, 1133, 1333, and 3333. 
 4. One digit is 2, one digit is 3, and the rest are 1s: 
There are six such numbers, 1123, 1133, 1223, 1233, 
1333, and 2233. 
 Adding these up, we have a total of 1+4+4+6=15 
four-digit numbers with non-decreasing digits from 
the set {1, 2, 3}. 
 Alternative approach  
Since the digits must be non-decreasing, once we 
decide how many 1’s, 2’s, and 3’s are used, the 
number is automatically fixed. So we only need 
to count how many ways we can choose these 
digits. 
Let x1 ,x2 ,x3  be the number of 1’s, 2’s, and 3’s 
respectively. Then: x1+x2+ x3=4, x1,x2,x3≥0. 
This is a standard stars and bars problem. The 
number of non-negative integer solutions 
is:(4+3−1C3−1) = (6C2)=15 So, the answer is 15.


</details>

---


### Q12. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A pennant is a sequence of numbers, each number 
being 1 or 2. An n -pennant is a sequence of numbers 
with sum equal to n. 
 For example, (1,1,2) is a 4 -pennant. The set of all 
possible 1-pennants is {(1)}, the set of all possible 2 -
pennants is {(2), (1,1)}and the set of all 3-pennants is 
{(2,1), (1,1,1), (1,2)}. 
 Note that the pennant  (1,2) is not the same as the 
pennant (2,1). The number of 10 -pennants is 
______________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 89


**Step-by-Step Explanation:**

No two’s: 1111111111⇒ 1 pennant 
 Single two: 211111111 
 ⇒ 9!/8!1! = 9 pennants 
 Two two’s: 22111111 ⇒ 8!/6!2! = 28 
 Three two’s: 2221111 ⇒ 7!/3!4! = 35 
 Four two’s: 222211 ⇒ 6!/4!2! = 15 
 Five two’s: 22222 ⇒ 1 
 Total = 89 pennants.


</details>

---


### Q13. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number of distinct positive integral factors of 
2014 is _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 8


**Step-by-Step Explanation:**

Let’s find prime factorization of 2014 = 21 × 191 ×           
Then number of distinct positive integral factors of 
2014 will be, 
 (1+1)×(1+1)×(1+1) = 2×2×2 = 8 
<!-- PAGE 589 -->
DISCRETE MATHEMATICS


</details>

---


### Q14. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Each of the nine words in the sentence  
 "The quick brown fox jumps over the lazy dog" is 
written on a separate piece of paper. These nine pieces 
of paper are kept in a box. One of the pieces is drawn 
at random from the box. The expected length of the  
word drawn is _____________. 
 (The answer should be rounded to one decimal place.)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3.9


**Step-by-Step Explanation:**

Given sentence is 
“The quick brown fox jumps over the lazy dog” 
Number of 3 letter words=4 
(The, fox, the, dog) 
Number of 4 letter words=2 
(over, lazy) 
Number of 5 letter words=3 
(quick, brown, jumps) 
Let X: Length of the word 
Hence the probability distribution for X is 
𝑋 3 4 5 
𝑝(𝑥) 4 9⁄  2 9⁄  3 9⁄  
Expected value of 𝑥 is 
𝐸(𝑋) = ∑ 𝑥 𝑝(𝑥) 
= 3 × 49 + 4 × 29 + 5 × 39 
= 359 = 3.88 = 3.9


</details>

---


### Q15. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In how many ways can b blue balls and r red 
balls be distributed in n distinct boxes? 
a) 
(𝑛 + 𝑏 − 1)!(𝑛+𝑟−1)!
(𝑛−1)!𝑏!(𝑛−1)!𝑟!  
b) 
(𝑛 +(𝑏+ 𝑟)−1)!
(𝑛−1)!(𝑛−1)!(𝑏+𝑟)! 
c) 
𝑛!
𝑏!𝑟! 
 d) 
(𝑛 +(𝑏+ 𝑟)−1)!
𝑛!(𝑏+𝑟+1)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - a


**Step-by-Step Explanation:**

r red balls can be distributed into n – distinct boxes in 
C (n + r −1, r) = 
(𝑛+𝑟−1)!
(𝑛−1)!𝑟!  
 b blue balls can be distributed in C (n + b – 1, b) = 
(𝑛+𝑏−1)!
(𝑛−1)!𝑏!  
By product rule total ways are 
(𝑛+𝑏−1)!(𝑛+𝑟−1)!
(𝑛−1)!𝑏!(𝑛−1)!𝑟!  
So the answer is (A)  
<!-- PAGE 590 -->
SET THEORY


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑅 be a binary relation on the set {1, 2, … , 
10}, where (𝑥, 𝑦) ∈ 𝑅 if the product of 𝑥 and 𝑦 is 
square of an integer. Which of the following 
properties is/are satisfied by 𝑅?  
 a) Reflexive 
 b) Symmetric 
 c) Transitive 
 d) Antisymmetric


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B, C


**Step-by-Step Explanation:**

Given : (𝑥, 𝑦) ∈ 𝑅 iff xy is a perfect square, where 
the set is {1, 2, … , 10} 
Reflexive  
For every x, x.x = x2 which is always a perfect 
square. 
So, Reflexive. 
Symmetric 
If xy is a perfect square,then xy = yx which is 
always a perfect square. 
So, Symmetric. 
Transitive 
If xy and yz are perfect squares, then in prime 
factorization form, the exponents of primes in both 
products are even. 
This implies the parity of exponents in x and z 
matches, hence xz is also a perfect square. 
So, Transitive. 
Antisymmetric 
Example: 
2⋅8=16, which is a perfect square. 
So (2,8)∈R and (8,2)∈R, but 2≠8. 
So, Not antisymmetric. 
So, the final Answers are a, b, c.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let F be the set of all functions from {1,…,n} to 
{0,1}. 
 Define the binary relation ⪯ on F as follows: 
 ∀f,g∈F,f⪯g if and only if ∀x∈{1,…,n}, f(x)≤g(x) 
 Which of the following statement(s) is/are TRUE? 
 a) ⪯ is a symmetric relation. 
 b) (F,⪯) is a partial order. 
 c) (F,⪯) is a lattice. 
 d) ⪯ is an equivalence relation.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C


**Step-by-Step Explanation:**

(A) f ⪯ g, and f ≠ g , g ⪯ f does not hold because 
f(x) ≤ g(x) ⇏ g(x) ≤ f(x) So ⪯ is not symmetric 
relation. 
(B) Reflexive: f(x) ≤ f(x) for all x, so f ⪯ f. 
Antisymmetric: If f ⪯ g and g ⪯ f, then f(x) = g(x) 
for all x, so f = g . 
 ∀ a, b(a ≤ b ∧ b ≤ a → a = b) 
 ∀ a, b (a ≤ b ∧ a ≠ b → b ≯ a)  
Transitive: If f ⪯ g and g ⪯ h, then f(x) ≤ g(x), 
g(x) ≤ h(x) ⇒ f(x) ≤ h(x), so f ⪯ h. 
RAT property satisfy, so partial order / Correct 
 (C) (f ∨ g)(x) = max(f(x), g(x)) → LUB   
 (f ∧ g)(x) = min(f(x), g(x)) → GLB 
Meet exists for every pair: f ∧ g = min(f(x), g(x))   
Join exists for every pair: f ∨ g = max(f(x), g(x))   
 So Lattice , Hence Option-C is correct. 
(D) Not symmetric, option A ⇒ So not 
equivalence relation. 
 So, B & C are correct.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A={0,1,2,3,…} is the set of non-negative integers. 
Let F be the set of functions from A to itself. 
 For any two functions f1,f2∈F, define 
 (f1Θf2)(n) = f1(n) + f2(n) 
 for every number n∈A 
Which of the following is/are CORRECT about 
the mathematical structure (F,Θ) ?  
 a) (F,Θ) is an Abelian group. 
 b) (F,Θ) is an Abelian monoid. 
 c) (F,Θ) is a non-Abelian group. 
 d) (F,Θ) is a non-Abelian monoid.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Closure: The sum of two functions from F is still 
in F. True 
 Associativity: Addition is associative, so ⨀ is 
associative. True 
 Identity: e=0 acts as an identity element. 
(f⨀e)(n)=f(n)+0=f(n). True 
 A valid inverse does not exist for nonzero functions. 
 Since, A contains only non-negative numbers 
 Hence, it is an abelian monoid. 
 option – b


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


g(.) is a function from A to B, f(.) is a function from 
B to C, and their composition defined as f(g(.)) is a 
mapping from A to C. 
 If f(.) and f(g(.)) are onto (surjective) functions, 
which ONE of the following is TRUE about the 
function g(.)? 
 a) g(.) must be an onto (surjective) function. 
 b) g(.) must be a one-to-one (injective) function. 
 c) g(.) must be a bijective function, that is, both 
one-to-one and onto. 
 d) g(.) is not required to be a one-to-one or onto 
function.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

g: A→B 
 f: B → C are two functions 
 Hence fog: A→C is a composite function and also 
given that fog: A→C is an onto function 
 Hence f: B→C is necessary to be an onto function, 
where as g: A→B need not be onto (or) one-one.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let A and B be non-empty finite sets such that there 
exist one-to-one and onto functions: 
1. From A to B.  
2. From A×A to A∪B  
The number of possible values of ∣A∣ is ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

1-1 and onto function exists from A to B  
|𝐴| = |𝐵| = 𝑛 
1-1 and onto function exists from 𝐴 × 𝐴 to 𝐴 ∪ 𝐵  
|𝐴 × 𝐴| = |𝐴 ∪ 𝐵| 
|𝐴 × 𝐴| = |𝐴| + |𝐵| − |𝐴 ∩ 𝐵| 
𝑛2 = 𝑛 + 𝑛 − 𝑘 
𝑛2 − 2𝑛 + 𝑘 = 0 
𝑛 =
2±√4−4𝑘
But n must integer 
4 − 4𝑘 ≥ 0  
𝑘 ≤ 1 
When k=0 , 𝑛2 − 2𝑛 = 0 → 𝑛 = 0,2 
When k=1,  
𝑛2 − 2𝑛 + 1 = 0 → 𝑛 = 1  
Hence, n=1,2  
|𝐴| = 𝑛 
Hence Number of possible values for A are 1,2


</details>

---


### Q6. [GATE CSE - 2026 MSQ SET - 2(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the operators ◊ and □ defined by: 
 a◊b=a+2b 
 a□b=ab 
 for positive integers. Which of the following 
statements is/are TRUE? 
 a) Operator ◊ obeys the associative law 
 b) Operator □ obeys the associative law 
 c) Operator ◊ over the operator □ obeys the 
distributive law 
 d) Operator □ over the operator ◊ obeys the 
distributive law


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, D


**Step-by-Step Explanation:**

An operation # is associative if (a#b)#c=a#(b#c). 
 Option A: Operation 1 follows Associativity? 
 (a◊b) ◊c = (a+2b) ◊) c = a + 2b + 2c 
 a ◊(b◊c) a◊ (b + 2c) = a + 2b + 4c 
 Here, (a ◊ b) ◊ c ≠ a◊ (b◊ c). 
 So, Option A is rejected. 
 Option B: Operation 2 follows Associativity? 
 (a☐ b) ☐ c = (ab) c = abc. 
 = a ☐ (b ☐ c) = a (bc) = abc 
 Here, (a ☐ b) ☐ c = a ☐ (b☐ c). 
 So, Option B is Accepted. 
 NOTE : An operator % is distributive over @ if a % 
(b @ c) = (a % b) @ (a % c). 
<!-- PAGE 600 -->
DISCRETE MATHEMATICS 
 Option C: Operator ◇ is distributive over☐? 
 Is a◊ (b☐c) = (a ◊ b) (a◊ c)? 
 a◊ (b☐c) a◊ (bc) = a + 2bc 
 (a ◊ b) ☐ (a ◊ c) = (a + 2b) ☐ (a+2c) = 
a2+2ac+2ab+ 4bc. 
 Here, a ◊ (b☐c) ≠ (a ◊ b) ☐ (a ◊ c). 
 So, Option C is rejected. 
 Option D: Operator is distributive over ◊? 
 Is a ☐(b◊c) = (a☐b) ◊ (a☐c)? 
 a☐ (b◊c) = a ☐ (b+2c) = ab + 2ac 
 (a☐b)◊(a☐c) = (ab) ◊ (ac) = ab + 2ac. 
 Here, a☐(b◊c) = (a☐b) ◊ (a☐c). 
 So, Option D is Accepted.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑍𝑛 be the group of integers {0, 1, 2, … , 𝑛 
− 1} with addition modulo 𝑛 as the group 
operation. The number of elements in the 
group 𝑍2 × 𝑍3 × 𝑍4 that are their own inverses 
is ________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

To solve this problem using a table, we need to list 
all elements of Z2×Z3×Z4 and determine which 
elements are their own inverses. An element 
(a,b,c) is its own inverse if: 
 (a,b,c)+(a,b,c)=(0,0,0)(modulo 2,3,4 respectively) 
 This condition simplifies to: 
 (2a mod  2, 2bmod  3, 2c mod  4)=(0,0,0) 
 Let’s construct a table for all elements of 
Z2×Z3×Z4 and check which ones satisfy the 
condition. 
a b c 2a mod 2, 2b mod 3, 2c mod 4 
0 0 0 (0,0,0) 
0 0 1 (0,0,2) 
0 0 2 (0,0,0) 
0 0 3 (0,0,2) 
0 1 0 (0,2,0) 
0 1 1 (0,2,2) 
0 1 2 (0,2,0) 
0 1 3 (0,2,2) 
0 2 0 (0,1,0) 
0 2 1 (0,1,2) 
0 2 2 (0,1,0) 
0 2 3 (0,1,2) 
1 0 0 (0,0,0) 
1 0 1 (0,0,2) 
1 0 2 (0,0,0) 
1 0 3 (0,0,2) 
1 1 0 (0,2,0) 
1 1 1 (0,2,2) 
1 1 2 (0,2,0) 
1 1 3 (0,2,2) 
1 2 0 (0,1,0) 
1 2 1 (0,1,2) 
1 2 2 (0,1,0) 
1 2 3 (0,1,2) 
 To find elements that are their own inverses, we 
need to look for rows where the result is (0,0,0)(0, 0, 
0)(0,0,0). 
 These elements are: 
 (0,0,0) 
 (0,0,2) 
 (1,0,0) 
 (1,0,2) 
 Thus, the number of elements in Z2×Z3×Z4 that are 
their own inverses is 4.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f : A → B be an onto (or surjective) function, 
where A and B are nonempty sets. Define an 
equivalence relation ∼ on the set A as  
 a1 ∼ a2 if f(a1) = f(a2),  
 where a1, a2 ∈ A. Let ε = {[x] : x ∈ A} be the set 
of all the equivalence classes under ∼. Define a 
new mapping F : ε→ B as  
 F([x]) = f(x), for all the equivalence classes [x] in 
ε.  
 Which of the following statements is/are TRUE? 
 a) F is NOT well-defined. 
 b) F is an onto (or surjective) function. 
c) F is a one-to-one (or injective) function. 
d) F is a bijective function.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C, D


**Step-by-Step Explanation:**

Here, equivalence relation ∼ on the set 𝐴 is defined 
as: 
 a1∼a2  if f(a1)=f(a2) 
 where a1, a2 ∈A 
 So, consider ai,bi,ci,⋯∈A and the mapping as: 
 a1↦α, a2↦α, a3↦α, …,am↦α 
 Similarly, 
 b1↦β,b2↦β,b3↦β,…,bn↦β 
 c1↦γ,c2↦γ,c3↦γ,…,cp↦γ 
 and so on for the non-empty sets A and B, and it is 
given that f:A→B is an onto function. 
 According to the definition of Equivalence relation, 
Equivalence class is: 
 [a1]=[a2]=[a3]=⋯=[am] 
 [b1]=[b2]=[b3]=⋯=[bn] 
 [c1]=[c2]=[c3]=⋯=[cp] 
 and so on. 
<!-- PAGE 601 -->
DISCRETE MATHEMATICS 
 Now, set of equivalence classes under relation ∼ 
is defined as: 
 E={[a1],[b1],[c1],… } 
 Now, given the new mapping F:ε →B 
 F([x])=f(x) for all [x] ∈ ε 
 It means the mapping would be: 
 a1↦α 
 b1↦β 
 c1↦γ 
 and so on. 
 Since all distinct a1,b1,c1,… maps to different 
elements of set B and so, F is an injective 
function. Here, we have taken a1,b1,c1 as leaders 
for their own equivalence classes, you can take 
a2,b2,c2,.... so on. 
 It is cleared from the mapping of F that all the 
elements of set B are covered, so F is a surjective 
function because each element from their own 
equivalence class maps according to the mapping 
of f. We have taken one element from the group of 
a′s and mapped it to a′s and similarly for other 
groups of b′s, c′s and so on. 
 Since F is both injective and surjective, hence F is 
a bijective function. 
 Here, we say, function F is well-defined or single-
valued when: 
1. F ⊆ [x] × f(x) 
2. The domain of F is [x] 
3. If ([x],y),([x],z) then y=z 
 Since from the mapping of F, it is clear that all the 
above three conditions are true because we have 
taken one element from the group of a′s,b′s,c′s, 
and so on and mapped to α,β,γ,… and so f is a 
well-defined function. 
 Therefore, (B), (C), (D)


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are TRUE 
for a group G?  
 a) If for all x, y ∈ G, (xy)² = x² y², then G is 
commutative. 
 b) If for all x ∈ G, x² = 1, then G is 
commutative. Here, 1 is the identity element 
of G. 
 c) If the order of G is 2, then G is 
commutative. 
 d) If G is commutative, then a subgroup of G 
need 
  not be commutative.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,B,C


**Step-by-Step Explanation:**

Option A : If for all x, y ∈ G, (xy)² = x²y², then G 
is commutative. 
 True, 
 (xy)² = x²y² 
 xy xy = xx yy 
 Take x⁻¹ and y⁻¹ on both sides. 
 x⁻¹ xy xy y⁻¹ = x⁻¹ xx yy y⁻¹ 
 yx = xy 
 ∀x, y ∈ G, yx = xy, Here G is commutative. 
 Option B : If for all x ∈ G, x² = 1, then G is 
commutative. Here, 1 is the identity element of G. 
 True, ∀x ∈ G, x² = 1 
 If every element has its own inverse in a graph, 
then the graph is commutative. 
 Option C : If the order of G is 2, then G is 
commutative. 
 True, Every group of prime order is commutative, 
so if O(G) = 2, the group 'G' is commutative. If the 
Group order is a prime number, then it is a cyclic 
group. And we know that every Cyclic group is an 
abelian group. 
 Alternatively, we can think like this: Given that the 
Order of Group G is 2, one element is the Identity 
element, so another element x is inverse to itself. By 
Option 3, G is commutative. 
 Option D : If G is commutative, then a subgroup of 
G need not be commutative. 
False, If group G is commutative, then a subgroup of 
G need not be commutative. 
Theorem: Every subgroup of an abelian group has to 
be abelian. 
 Proof: Let G be an abelian group, and suppose that 
H ⊆ G. 
 Now we have to check that, for any a, b ∈ H, do we 
have ab = ba? 
 Since we have: a, b ∈ H ⊆ G, so a, b are elements of 
G and since G is abelian, so ab = ba. 
 Therefore, H is abelian as well.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let S be a set of consisting of 10 elements. 
 The number of tuples of the form (A, B) such that A 
and B are subsets of S, and A ⊆ B is ___________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 59049


**Step-by-Step Explanation:**

A set having n elements will have 2n subsets. Now, 
from the given set we can have: 
 nCn subsets of size n (which will have 2n subsets) 
 nCn – 1 subsets of size n – 1 (which will have 2n – 1 
subset which are also subsets of original set) 
 nC n – 2 subsets of size n – 2 (which will have 2 n – 2 
subsets which are also subsets of original set) 
 nC1 subsets of size 1 
 nC0 subsets of size 0. 
 So, total number of ordered pairs satisfying 
 the subset order will be: 
 2n nCn + 2n – 1 nCn– 1  + 2n – 2 nCn – 2 + …. 20 nC0 
 = (x + 1)n where x = 2, 
 = 3n 
 = 310 
 = 59049


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following sets, where n ≥ 2: 
S1 : Set of all n × n. matrices with entries from the 
set {a, b, c} 
S2 : Set of all functions from the set {0, 1, 2, …, n2 – 
1} to the set {0,1,2} 
Which of the following choice(s) is/are correct?  
 a) There exists a bijection from S1 to S2. 
 b) There exists a surjection from S1 to S2. 
 c) There does not exist an injection from S1 to 
S2. 
 d) There does not exist a bijection from S1 to S2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B


**Step-by-Step Explanation:**

S1: There are n 2 elements in the matrix, we have 3 
choices for each element s, so number of such 
matrices =  3𝑛2          
 S2: We are having n2 total elements with 3 choices for 
each element, so total number of functions possible =  
3𝑛2 
 Since, the cardinality of both the sets are the same, we 
can establish a bijection from one set to another, as 
bijection is possible, 
<!-- PAGE 602 -->
DISCRETE MATHEMATICS 
 so surjection is also possible. 
 So, option A and B are correct.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A relation R is said to be circular if aRb and bRc 
together imply cRa. 
 Which of the following options is/are correct?  
 a) If a relation S is reflexive and symmetric, then 
S is an equivalence relation. 
 b) If a relation S is reflexive and circular, then S 
is an equivalence relation. 
 c) If a relation S is circular and symmetric, then 
S is an equivalence relation. 
 d) If a relation S is transitive and circular, then S 
is an equivalence relation.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

It a relation S is reflexive and circular 
 ⇒ Symmetry let (a, b) ∈ S (a, b ∈ A) 
 Since S is reflexive (b, b) ∈ S 
 Since S is circular and (a, b) ∈ S and (b, b) ∈ S 
 (b, a) ∈ S 
 Thus, S is a symmetric relation (since (b, a) ∈ S 
whenever (a, b) ∈ S) 
 ⇒ Transitivity Let (a, b) ∈ S and (b, c) ∈S 
 Since S is circular: (c, a) ∈ S 
 we have already shown that S is symmetric, thus let 
use the fact that S is symmetric: (a, c) ∈ S 
 Thus, S is a transitive relation (since (a, c) ∈ s 
whenever (a, c) ∈ S and (b, c) ∈ S) 
 ∴ S is an equivalence relation, between S is 
reflexive, symmetric, and transitive.


</details>

---


### Q13. [GATE CSE - 2024 NAT SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let G be a group of order 6, and H be subgroup of G 
such that 1 < |H| < 6. 
 Which one of the following options is correct?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

As order of group is 6 (given) ,so according to 
Lagrange’s: order of subgroup is a divisor of order 
of group. 
 i.e., O(G) / O(H) divides O(G) 
 O(G) = 6 (not a prime no) 
 So, G may not be a cyclic group. 
 Now, 1 < |H| < 6 so order of H may be 2,3, 4, 5 but 
only 2, 3 divides 6 so order of H is either 2 or 3 and 
both are prime number so H is cyclic group.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let R be the set of all binary relations on the set 
{1,2,3}. Suppose a relation is chosen from R at 
random. The probability that the chosen relation is 
reflexive (round off to 3 decimal places) is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.125


**Step-by-Step Explanation:**

For a set with n elements, 
 The number of reflexive relations is 2n(n-1)  
 The total number of possible relations on a set 
with n elements is 2n*n. 
 Thus, the probability of choosing the reflexive 
relation out of the set of relations is: 
 = 2n(n-1) /2n*n 
 = 2(n*n – n*n – n) = 2(-n) 
 Given n=3, the probability will be 
 2-3 = 0.125


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let G be a group of 35 elements. Then the largest 
possible size of a subgroup of G other than G itself 
is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

Lagrange’s Theorem: 
 If ‘H” is a subgroup of finite group (G, *) then O(H) 
is the divisor of O(G). 
 Now, we are given that the order of group is 35. It’s 
divisors are 1,5,7,35.  
 Now, we need to find the size of largest possible 
subgroup other than G, so it will be 7.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let G be an arbitrary group. Consider the 
following relations on G: 
R 1 : ∀a,b ∈ G, aR1 b if and only if ∃g ∈ G such 
that a = g-1 bg 
R 2 : ∀a,b ∈ G, aR2 b if and only if a = b -1 
 Which of the above is/are equivalence 
relation/relations? 
 a) R2 only 
 b) R1 and R2 
 c) Neither R1 nor R2 
 d) R1 only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given relations are 
𝑅1: ∀ a, b ∈ G, a 𝑅1 b if and only if ∃ g ∈G such 
that a=g−1bg 
𝑅2: ∀ a, b ∈ G, a 𝑅2 b if and only a= b−1       
A relation is said to be equivalence relation if it 
is   
I. Reflexive  
II. Symmetric 
III. Transitive 
Relation 𝑹𝟏: 
Reflexive property: 
For any a ∈ G,  
a=e−1ae, where ‘e’ is identity 
⇒ (a, a)∈ 𝑅1 
So 𝑅1 is reflexive 
Symmetric property: 
Let (a, b)∈ 𝑅1 
⇒∃ g ∈G such that a=g−1bg 
⇒b=(𝑔−1)−1𝑎(𝑔−1) 
⇒(b, a)∈ 𝑅1 
So 𝑅1 is symmetric 
Transitive property: 
Let (a, b)∈ 𝑅1, (b, c) ∈𝑅1 
⇒∃ 𝑔1∈G, 𝑔2∈G such that a=𝑔1−1b𝑔1 and 
b=𝑔2−1c𝑔2 
⇒ 𝑎 = 𝑔1−1𝑔2−1𝑐𝑔2𝑔1 = (𝑔2𝑔1)−1𝑐𝑔2𝑔1 
⇒(a, c)∈ 𝑅1 
So 𝑅1 is transitive 
Hence 𝑅1 is an equivalence relation. 
Relation 𝑹𝟐: 
Reflexive property: 
For any a ∈ G,  
a=𝑎−1 is not true always 
⇒ (a, a) ∉ 𝑅2 for all a in G 
So 𝑅2 is not reflexive and hence 𝑅2 is not an 
equivalence relation 
Therefore only  𝑅1 is an equivalence relation


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let N be the set of natural numbers. 
 Consider the following sets, 
 P: Set of Rational numbers (positive and negative) 
 Q: Set of functions from {0, 1} to N 
 R: Set of functions from N to {0, 1} 
 S: Set of finite subsets of N. 
 Which of the above sets are countable? 
 a) Q and S only 
 b) P and S only 
 c) P and R only 
 d) P, Q and S only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

P: Set of Rational numbers are countable.  
Rational numbers are of the form 
𝑝
𝑞 =(p,q) 
where 𝑝, 𝑞 are integers. Proof using cantors 
diagonal argument. 
<!-- PAGE 603 -->
DISCRETE MATHEMATICS 
Q: Set of functions from {0,1} to 𝑁. There 
are 𝑁2 such functions. Hence countable. 
R: Set of functions from 𝑁 to {0,1}. There 
are 2𝑁 such functions.  
Theorem:  If a set 𝑆 is countable, 
then P(𝑆) i.e 2𝑆 is uncountable.  
Hence, statement R is uncountable. 
S: Set of finite subsets of 𝑁. They 
are countable. 
Theorem: Every subset of a countable set is 
either countable or finite.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let G be a finite group on 84 elements. The size of a 
largest possible proper subgroup of G is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 42


**Step-by-Step Explanation:**

Lagrange’s Theorem: 
 Order of subgroup is a divisor of order of group. 
i.e., O(H)/O(G) 
 Given, order n = 84. 
 Then the order of subgroups = {1, 2, 3, 4, 6, 7, 12, 
14, 21, 28, 42, 84} 
 As per the proper subgroup definition, the answer 
should be 42.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the set X = {a,b,c,d e} under the partial 
ordering 
 R = {(a,a),(a,b),(a,c),(a,d),(a,e),(b,b),(b,c), 
 (b,e),(c,c),(c,e),(d,d),(d,e),(e,e)}. 
 The Hasse diagram of the partial order (X,R) is 
shown below. 
 The minimum number of ordered pairs that need to 
be added to R to make (X, R) a lattice is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

Given: R = {(a,a), (a,b), (a,c), (a,d),(a,e), (b,b), 
(b,c), (b,e), (c,c), (c,e), (d,d),(d,e), (e,e)} 
 As per the definition of lattice, each pair should 
have GLB, LUB. 
 The given partial ordering R has GLB, LUB for 
each and every pair. 
 So,we don’t need to add any extra pair. 
 Thus, the number of required pairs such that the 
Hasse diagram becomes lattice is 0.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The number of integers between 1 and 500 (both 
inclusive) that are divisible by 3 or 5 or 7 is 
____________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 271


**Step-by-Step Explanation:**

Let we have: 
 A → the number of integers between 1 and 500 which 
are divisible by 3. 
 B → the number of integers between 1 and 500 which 
are divisible by 5. 
 C → the number of integers between 1 and 500 which 
are divisible by 7. 
 Thus, the required answer is : 
 n (A ∪ B ∪ C) = n(A) + n(B) + n(C) – n (A∩ B) – n (A 
∩ C) – n(B ∩ C) + n (A ∩ B ∩ C) 
 = ⌊500/3 ⌋ + ⌊500/5 ⌋ + ⌊500/7 ⌋ - ⌊500/15 ⌋ -  ⌊500/21⌋ -      
⌊500/35 ⌋ + ⌊500/105 ⌋ 
 = 166 + 100 + 71 – 33 – 23 – 14 + 4 
 = 271


</details>

---


### Q21. [GATE CSE - 2020 NAT (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A function f: N+ → N+, deﬁned on the set of positive 
integers N+ , satisﬁes the following properties:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Given: 
 f(n)= f(
𝑛
2)     ,  if n is even 
 f(n)= f(n+5)   ,  if n is odd   
N 1 2 3 4 5 
f(n)) f(9)) f(1)) f(8)) f(2)) f(10)) 
N 6 7 8 9 10 
f(n)) f(3)) f(12)) f(4)) f(1)4) f(5)) 
 We can observe that: 
 f(8) = f(4) = f(2) = f(1) 
 f(1) = f(0) = f(3) 
 and f(5) = f(10) = f(15) = f(20) 
 We observe that f(11) = f(8). 
 f(12) = f(6) = f(3) 
 f(13) = f(9) = f(14) = f(7) = f(12) = f(6) = f(3) 
 f(14) = f(9) = f(12) = f(6) = f(3) 
 f(16) = f(8) = f(4) = f(2) = f(1) 
 [repeating] 
 So, we can conclude that ‘R’ can have size only of 
two. [one: multiple of 5’s, other: other than 5’s 
multiple]


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a set U of 23 different compounds in a 
Chemistry lab. There is a subset S of U of 9 
compounds, each of which reacts with exactly 3 
compounds of U. Consider the 
 following statements: 
I. Each compound in U\S reacts with an odd 
number of compounds. 
II. At least one compound in U\S reacts with 
an odd number of compounds. 
III. Each compound in U\S reacts with an even 
number of compounds. 
Which one of the above statements is ALWAYS 
TRUE? 
a) Only I 
b) Only II 
c) Only III 
d) None


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The sum of the degrees of all the vertices in a graph is 
equal to twice the number of edges. 
Here, Set S has 9 elements and each element has a 
degree of 3 as each element in S reacts to exactly 3 
elements. So 9∗3 + Sum. of degrees of vertices in U-S =
2∗e 
Since 2∗e is even no, Sum of degrees of vertices in U-S is 
odd . 
Thus, some vertex in U-S must have odd degree. At least 
one compound in U-S reacts with an odd number of 
compounds 
Option B is the correct answer.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A binary relation R on ℕ×ℕ is deﬁned as follows: 
(a,b)R(c,d) if a ≤ c or b ≤ d. 
 Consider the following propositions: 
 P: R is reﬂexive 
 Q: R is transitive 
Which one of the following statements is TRUE?  
 a) Both P and Q are true. 
 b) P is true, and Q is false. 
 c) P is false, and Q is true. 
 d) Both P and Q are false.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

For every a,b∈ N, 
 a≤c ∨ b≤d 
 Let a≤a ∨ b≤b is true for all a,b∈ N. 
 So, there exists (a,b)R(a,b) for (a,b) 
 Thus, it is a Reflexive relation. 
 Consider an example: 
 c = (a,b)R(c,d) and (c,d)R(e,f) then 
 (a,b)R(e,f) 
 This does not hold for every (a > e) or (b > f) 
 e.g.: 
<!-- PAGE 604 -->
DISCRETE MATHEMATICS 
 (2,2)R(1,2) as 2≤2 
 (1,2)R(1,1) as 1≤1 
 but (2,2) R (1,1) is False 
 So, not transitive.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The number of onto functions (surjective function) 
from set X = {1, 2, 3, 4} to set Y = {a, b, c} is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 36


**Step-by-Step Explanation:**

Number of onto functions from set X to set Y with 
|X| = m, |Y| = n is  
 ∑ (−1)𝑘. 𝑛𝐶𝑘 . (𝑛 − 𝑘)𝑚𝑛−1𝑘=0  
 m = 4. n = 3 ⇒ number of onto function is  
 ∑ (−1)𝑘. 3𝐶𝑘 .  (3 − 𝑘)42𝑘=0   
 = 34 − (2)4 + (3)(1) 
 = 81 – 48 + 3 
 = 36


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The cardinality of the power set of {0, 1, 2, … 10} is 
 _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2048


**Step-by-Step Explanation:**

Let S be the given set {0, 1, 2, …, 10}, then 
cardinality of S, |S| = 11. 
 So, cardinality of power set |P(S)| = 211 i.e., 2048.


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The binary operator ≠ is defined by the following 
truth table 
P q p ≠ q 
0 0 0 
0 1 1 
1 0 1 
1 1 0 
 Which one of the following is true about the binary 
operator ≠?  
 a) Both commutative and associative 
 b) Commutative but not associative 
 c) Not commutative but associative 
 d) Neither commutative nor associative


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

It can be clearly seen from the truth table, that the 
binary operation ≠ is equivalent to XOR i.e., ⊕, 
which satisfies both commutative and associative 
 i.e., p≠q, q≠p and p≠(q≠r), (p≠q)≠r.


</details>

---


### Q27. [GATE CSE - 2016 MCQ SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose L = {p, q, r, s, t} is a lattice represented by 
the following Hasse diagram: 
 For any x, y ∈ L, not necessarily distinct, x ∨ y and 
x ∧ y are join and meet of x, y respectively. Let L3  = 
{(x,y,z): x, y, z ∈ L} be the set of all ordered triplets 
of the elements of L. Let pr be the probability that an 
element (x,y,z) ∈ L3  chosen equiprobably satisfies x 
∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z). Then


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Total number of ordered triplets (x,y,z) in L3 are 
5×5×5 i.e., 125. So,n(S) = 125. 
 Let F be the event that an element (x,y,z)∈ L3 
satisfies x ∨ (y∧z) = (x ∨ y) ∧ (x ∨ z).Since q ∨ (r 
∧ s) = q ∨ p = q. 
 And (q∨r) ∧ (q∨s) = t ∧ t=t, 
 q ∨ (r∧s) ≠ (q∨r)∧(q∨s) 
 Therefore, 
 (x,y,z) = (q,r,s), (q,s,r), (r,q,s), (r,s,q), 
 (s,r,q), (s,q,r) 
 i.e., 3! = 6 elements will not satisfy 
 distributive law and all other (x,y,z) 
 choices satisfy distributive law. 
 n(F) = 125-6 = 119 
 ∴ required probability (pr ) = n(F)/n(S) = 119/125 
 ⇒ i.e. 1/5< p r <1


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let R be a relation on the set of ordered pairs of 
positive integers such that ((p,q),(r,s)) ∈ R if and 
only if p - s = q - r. 
 Which one of the following is true about R? 
 a) Both reflexive and symmetric 
 b) Reflexive but not symmetric 
 c) Not reflexive but symmetric 
 d) Neither reflexive nor symmetric


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Since p-q ≠ q-p 
 ∴(p,q) R (p,q) is not true. 
 ⇒ R is not reflexive. 
 Let (p,q) R (r,s) then p-s = q-r 
 ⇒ r-q = s-p 
 ⇒ (r,s) R (p,q) 
 ⇒ R is symmetric. 
 So, R is not Reflexive but Symmetric


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let R be the relation on the set of positive integers 
such that aRb if and only if a and b are distinct and 
have a common divisor other than 1. Which one of 
the following statements about R is true?  
 a) R is symmetric and reflexive but not 
transitive 
 b) R is reflexive but not symmetric and not 
transitive 
 c) R is transitive but not reflexive and not 
symmetric 
 d) R is symmetric but not reflexive and not 
transitive


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

For Reflexive: 
 In a given relation, aRb iff 'a' and 'b' are distinct. So, 
it can never be reflexive. 
 For Symmetric: 
 In a given relation, aRb, if 'a' and 'b' have 
 a common divisor other than 1, then bRa, i.e., 'b' and 
'a' also will have a common divisor other than 1. So, 
it is symmetric. 
 So, R is symmetric but not reflexive and not transitive 
 For Transitive: 
 Take (3, 6) and (6, 2) elements of R. For  transitivity 
(3, 2) must be the element of R, but 3 and 2 don't have 
a common divisor. So, not transitive.


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose U is the power set of the set S = {1, 2, 3, 
4, 5, 6}. For any T ∈ U, let |T| denote the number 
of elements in T and T' denote the complement of 
T. For any T, R ∈ U, let T \ R be the set of all 
elements in T which are not in R. Which one of 
the following is true?  
 a) ∀X ∈ U (|X| = |X'|) 
 b) ∃X ∈ U ∃Y ∈ U (|X| = 5, |Y| = 5 and X ∩ Y = ∅) 
 c) ∀X ∈ U ∀ Y ∈ U (|X| = 2, |Y| = 3 and X \Y = ∅) 
 d) ∀ X ∈ U ∀ Y ∈ U (X \ Y = Y'\ X')


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

As X and Y are elements of U, so X and Y are 
subsets of S. 
 A. False. Consider X = {1,2}. Therefore, X' 
 = {3,4,5,6}, |X| = 2 and |X'| = 4. 
 B. False. Because for any two possible subsets of S 
with 5 elements, we should have at least 4 elements 
in common. 
 Hence X∩Y cannot be null. 
 C. False. Consider X = {1,4}, Y= {1,2,3} then X\Y 
= {4} which is not null. 
 D. True. Take any possible cases.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For a set A, the power set of A is denoted by 2A . If 
A = {5,{6},{7}}, which of the following options are 
TRUE? 
I. ∅ ∈ 2A 
II. ∅ ⊆ 2A 
III. {5,{6}} ∈ 2A 
IV. {5,{6}} ⊆ 2A  
 a) I and III only 
 b) II and III only 
 c) I, II and III only 
 d) I, II and IV only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A = {5, {6}, {7}} 
I. ∅ ∈ 2A is true. Any power set contains an empty 
set. 
II. ∅ ⊆ 2A is true. Empty set is subset of any set. 
III. {5, {6}} ∈ 2A is true. power set of A contain {5, 
{6}} as a 2-element subset of A. 
IV. {5, {6}} ⊆ 2A is false. Power set of A not 
contain 5 and {6} as elements. 
 So, {5, {6}} cannot be subset of 2A .


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let S denote the set of all functions f: {0,1}4  → 
{0,1}. Denote by N the number of functions from S 
to the set {0,1}. The value of log2log 2N is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 16


**Step-by-Step Explanation:**

The number of functions from A to B where size of 
A=|A| and size of B=|B| is |B||A| 
 Now, {0,1}4 = {0,1}×{0,1}×{0,1}×{0,1} =16 
 |S|=216 
 N=2 |S| 
 log(logN)=log(log2 |S|) =log|S| =log216 =16


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


There are two elements x,y in a group (G, ∗) such 
that every element in the group can be written as a 
product of some number of x's and y's in some order. 
It is known that 
 x*x = y*y =x*y*x*y = y*x*y*x = e where e is the 
identity element. The maximum number of elements 
in such a group is____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Given that 
 𝑥 ∗  𝑥 = 𝑦 ∗  𝑦 = 𝑥 ∗  𝑦 ∗  𝑥 ∗  𝑦 = 𝑦 ∗  𝑥 ∗  𝑦 ∗  𝑥 = 𝑒 
𝑥 ∗ 𝑥 =  𝑒 ⇒  𝑥 =  𝑥−1 
<!-- PAGE 605 -->
DISCRETE MATHEMATICS 
𝑦 ∗ 𝑦 =  𝑒 ⇒ 𝑦 = 𝑦−1 
(𝑥 ∗ 𝑦) ∗ (𝑥 ∗ 𝑦) = 𝑒 ⇒ 𝑥 ∗ 𝑦 = (𝑥 ∗ 𝑦)−1          
(𝑦 ∗ 𝑥) ∗ (𝑦 ∗ 𝑥) = 𝑒 ⇒ 𝑦 ∗ 𝑥 = (𝑦 ∗ 𝑥)−1 
Consider  
(𝑥 ∗ 𝑦) ∗ (𝑦 ∗ 𝑥) = 𝑥 ∗ (𝑦 ∗ 𝑦) ∗ 𝑥 
= 𝑥 ∗ 𝑒 ∗ 𝑥 
= 𝑥 ∗ 𝑥 = 𝑒 
So (𝑥 ∗ 𝑦)−1 = (𝑦 ∗ 𝑥) but (𝑥 ∗ 𝑦)−1 =  𝑥 ∗
𝑦  
Hence 𝑥 ∗ 𝑦 =  𝑦 ∗ 𝑥 
So given group is commutative group 
Also given that every element in the group 
can be written as a  product of some number 
of 𝑥’ s and 𝑦’s in some order. Any such 
combination is equal to one of the elements 
𝑒, 𝑥, 𝑦, 𝑥𝑦      
[For example:  
           𝑥𝑥𝑥 =  𝑥𝑒 =  𝑥 
    𝑥𝑦𝑦 =  𝑥𝑒 =  𝑥 
     𝑥𝑥𝑦 =  𝑒𝑦 =  𝑦 
    𝑥𝑦𝑥 =  𝑥𝑥𝑦 =  𝑦  
            𝑦𝑥 = 𝑥𝑦


</details>

---


### Q34. [GATE CSE - 2015 MCQ SET – 3 (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let G be a group with 15 elements. Let L be a 
subgroup of G. It is known that L ≠ G and that the 
size of L is at least 4. The size of L is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

According to Lagrange's theorem, in the 
mathematics of group theory, for any finite group 
G, the order (number of elements) of every 
subgroup H of G divides the order of group G. 
 So, 15 is divided by {1, 3, 5, 15}. 
 As minimum order is 4 and not 15, so we 
eliminate 1,3,15. 
 So, the answer is 5.


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relation on subsets of the 
set S of integers between 1 and 2014. For two 
distinct subsets U and V of S we say U < V if the 
minimum element in 
 the symmetric difference of the two sets is in U. 
Consider the following two statements: 
 S1: There is a subset of S that is larger than every 
other subset. 
 S2: There is a subset of S that is smaller than 
every other subset. 
 Which one of the following is CORRECT?  
 a) Both S1 and S2 are true 
 b) S1 is true and S2 is false 
 c) S2 is true and S1 is false 
 d) Neither S1 nor S2 is true


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

1. AΔU = Ac , Hence the minimum element in 
the symmetric difference of the two sets is in 
U. U is smallest then every set. 
2. Since AΔϕ = A , Hence the minimum 
element in the symmetric difference of the 
two sets is in A. A is smaller than ϕ 
Both statements are correct


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the set of all functions f: {0, 1,....., 2014} 
→ {0, 1, ....., 2014} such that f(f(i)) = i, for all 0 ≤ 
i ≤ 2014. Consider the following statements: 
 P. For each such function it must be the case that 
for every i, f(i) = i. 
 Q. For each function it must be the case that for 
some i, f(i) = i. 
 R. Each such function must be onto. 
 Which one of the following is CORRECT?   
 a) P, Q and R are true 
 b) Only Q and R are true 
 c) Only P and Q are true 
 d) Only R is true


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

f: {0,1,…,2014}→{0,1,…,2014} and f(f(i)) = i 
 So, f(i) should result only in {0, 1,…2014}. 
 So, every element in the range has a result value to 
the domain. This is onto. (Option R is correct) 
 We have ‘2015’ elements in the domain. So at least 
one element can have f(i) = i, So, option ‘Q’ is also 
True. 
 ∴ Q and R are correct.


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let X and Y be finite sets and f: X → Y be a  
function. Which one of the following statements is 
TRUE?   
 a) For any subsets A and B of X, | f(A ∪ B) | = 
|f(A)| + |f(B)| 
 b) For any subsets A and B of X, f(A ∩ B) = 
f(A) ∩ f(B) 
 c) For any subsets A and B of X, |f(A ∩ B)| = 
min{ |f(A) |, |f|(B)|} 
 d) For any subsets S and T of Y, f –1 (S ∩ T)= f 
–1 (S) ∩ f –1 (T)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given 𝑋 and 𝑌 are finite sets and 𝑓: 𝑋 → 𝑌 is 
a function. 
Let us verify the options 
Options (A), (B), (C) are false. Let us use the 
following example 
 Let 𝐴 = {1, 2}, 𝐵 = {3, 4} 
Option (A):  |f (A∪ B)| = |f(A)| + |f(B)| 
A∪ B={1, 2,3,4} ⇒f (A∪ B) = {a, b, c} 
⇒|f (A∪ B)|=3 
f (A)={a, b} ⇒|f(A)|=2 
f(B)={a, c}⇒|f(B)|=2 
⇒|f(A)| + |f(B)|=2+2=4 
Therefore |f (A∪ B)| ≠ |f(A)| + |f(B)| 
So option (A) is false 
Option (B):  f (A ∩ B) = f (A) ∩ f(B) 
<!-- PAGE 606 -->
DISCRETE MATHEMATICS 
A ∩ B= ϕ⇒ f (A ∩ B) = ϕ 
f (A)={a, b} and f(B)={a, c} 
f (A) ∩ f(B)={a} 
Therefore   f (A ∩ B) ≠ f (A) ∩ f(B) 
So option (B) is false 
Option (C):  
 |f (A ∩ B)| = min {|f (A)|, |f (B)|} 
A ∩ B= ϕ⇒ f (A ∩ B) = ϕ 
⇒|f (A ∩ B)|=0 
f (A)={a, b} ⇒|f(A)|=2 
f(B)={a, c}⇒|f(B)|=2 
min {|f (A)|, |f (B)|}=min{2, 2}=2 
Therefore 
|f (A ∩ B)| ≠ min {|f (A)|, |f (B)|} 
So option (C) is false 
Option (D): 
f −1(S ∩ T) = f −1(S) ∩ f −1(T) 
      x∈f −1(S ∩ T) 
⟺ f(x) ∈ S ∩ T 
⟺ f(x) ∈ S and f(x) ∈ T 
⟺ x ∈ f −1(S) and x ∈ f −1(T) 
⟺ x∈ f −1(S) ∩ f −1(T) 
Therefore  
f −1(S ∩ T) = f −1(S) ∩ f −1(T) 
Or Option D 
𝑓 (𝐴 ∩  𝐵)  =  𝑓 (𝐴)  ∩  𝑓 (𝐵) iff f is 1-1, 
since 𝑓−1𝑖𝑠 1 − 1 𝑎𝑛𝑑 𝑜𝑛𝑡𝑜 
f −1(S ∩ T) = f −1(S) ∩ f −1(T)


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A binary operation ⊕ on a set of integers is defined 
as x ⊕ y = x2  + y2 . Which one of the following 
statements is TRUE about ⊕ ? 
 a) Commutative but not associative 
 b) Both commutative and associative 
 c) Associative but not commutative 
 d) Neither commutative nor associative


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Commutative property: 
 A binary operation on a set S is called commutative 
if a*b = b*a ∀x, y ∈S. 
 Associative property: 
 A binary operation on set is called associative if 
(a*b)*c = a*(b*c) ∀x,y ∈ S. 
 Given x ⊕ y = x2  + y2 --------(1) 
 Replace x, y in (1): 
 y ⊕ x = y 2  + x 2  which is same as (1), so this is 
commutative. 
 (x ⊕ y) ⊕z = (x2  + y 2 )⊕ z 
 = (x2  + y2)2 + z2 
 = x2  + y2  + z2  + 2x2y2  ----------(2) 
 x⊕(y ⊕ z) = x ⊕ (y2  + z2 ) 
 = x2  + (y2  + z2)2 
 = x2  + y2  + z2  + 2y2z2 ----------- (3) 
 (2) & (3) are not same, so this is not associative.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


How many onto (or surjective) functions are there 
from an n-element (n ≥ 2) set to a 2-element set?  
 a) 2n 
 b) 2n -1 
 c) 2n -2 
 d) 2(2n -2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Onto function is possible if m ≥ n. So, 
 number of onto functions possible is: 
 nm  -  n C1 (n-1)m  +  n C2 (n-2)m  + ....... 
 According to the Question: 
 m = n, n = 2 
 So, number of onto functions: 
 = 2n  -  2C1 (2-1)n  +  2C2 (2-2)n 
 = 2n  - 2 × 1 + 0 
 = 2n  – 2


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the set S = {1, ω, ω 2}, where ω and ω 2 are 
cube roots of unity. If * denotes the multiplication 
operation, the structure (S, *) forms. 
 a) A group 
 b) A ring 
 c) An integral domain 
 d) A field


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

A group is a set of elements together with an 
operation that combines any two of its elements to 
form a third element also in the set while satisfying 
four conditions called the group axioms, namely 
closure, associativity, identity and invertibility. 
 (S, *)  is a group with identity as 1


</details>

---


### Q41. [GATE CSE – 2014 MCQ SET - 3 (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the possible number of reflexive relations on 
a set of 5 elements? 
 a) 210 
 b) 215 
 c) 220 
 d) 225


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Total number of reflexive relations = 2n(n-1) 
 For the given question, n = 5. 
 The number of reflexive relations =2(25-5) =220


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the binary relation R = {(x, y), (x, z), (z, 
x), (z, y)} on the set {x, y, z}. Which one of the 
following is TRUE? 
 a) R is symmetric but NOT antisymmetric. 
 b) R is NOT symmetric but antisymmetric. 
 c) R is both symmetric and antisymmetric. 
 d) R is neither symmetric nor antisymmetric.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A binary relation R over a set X is symmetric if it 
holds for all a and b in X that if a is related to a. 
 ∀a,b ∈ X, aRb ⇒ bRa. 
 Here (x, y) is there in R but (y, x) is not there. 
 Not Symmetric. 
 For Antisymmetric Relations: ∀a,b ∈ X, R(a, b) & 
R(b, a) ⇒ a = b. 
 Here (x, z) is there in R also (z, x) is there violating 
the antisymmetric rule. 
 Not AntiSymmetric.


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following Hasse diagrams  
 Which all of the above represent a lattice? 
 a) (i) and (iv) only 
 b) (ii) and (iii) only 
 c) (iii) only 
 d) (i), (ii) and (iv) only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In a lattice L, every pair of elements has 
both LUB and GLB 
Let us verify the given Hasse diagrams 
Hasse diagram1: 
Every pair has LUB and GLB 
So it is a lattice 
<!-- PAGE 607 -->
DISCRETE MATHEMATICS 
Hasse diagram2: 
Lower bounds of {b, d} are ‘c’, ‘e’ and 
these two are not comparable 
So GLB({b, d}) not exists 
So it is not a lattice 
Hasse diagram3: 
Lower bounds of {b, c} are ‘d’,  ‘e’ and ‘f’. 
But there is greatest element among 
lower bounds ‘d’, ’e’ and ‘f’ 
So GLB({b, c}) not exists 
So it is not a lattice 
Hasse diagram4: 
Every pair has LUB and GLB 
So it is a lattice 
Therefore only Hasse diagrams 1 and 4 are 
lattices


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the field C of complex numbers with 
addition and multiplication. Which of the 
following form(s) a subfield of C with addition 
and multiplication? 
 • S1: the set of real numbers 
 • S2: {(a + ib) | a and b are rational numbers} 
 • S3: {a+ib | (a2 + b2) ≤ 1} 
 • S4: {ia | a is real} 
 a) only S1 
 b) S1 and S3 
 c) S2 and S3 
 d) S1 and S2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A field is an algebraic structure over two 
operations + and * if: 
 1. It is closed under both + and *. 
 2. + and * are both commutative and associative. (+ 
and in this question are already commutative and 
associative, so no need to check) 
 3. Existence of additive identity(0) and 
multiplicative identity (1) 
 4. Existence of additive and multiplicative inverses 
for each non-zero element. 
 5. Distributive property of * over + (This is also 
satisfied in question) 
 So, for each option, we have to check only 
properties 1, 3 and 4. 
 (S1): set of all real numbers 
 1. Closed: Yes, real + real = real, real * real = real 
 3. Additive and multiplicative identity: Yes, 0 and 1 
are real numbers 
 4. Additive and multiplicative inverse for each non-
zero element. Yes, for any real number a, additive 
inverse is -a, which is also a real number, and 
multiplicative inverse is 1/a, which is also a real 
number. (S2): {(a+ib) | a and b are rational 
numbers} 
 1. Closed: Yes, rational + rational = rational, rational 
* rational = rational 
 2. Additive and multiplicative identity: Yes, 0+0i 
(additive identity) and 1+0i (multiplicative identity) 
belong to given set. 
 3. Additive and multiplicative inverse for each non-
zero element: Additive inverse is -a - ib, which 
belongs to given set. Multiplicative identity is 
1/(a+ib) = (a - ib) / (a2 + b2) = a/(a2+b2) + i(-
b)/(a2+b2), which also belongs to given set. 
 (S3): {a+ib | (a2 + b2) ≤ 1} 
 1. Closed: No, for example: (0.3 +0.4i) + 
(0.7+0.6%)=1+i. Here, both complex numbers 
which were added were in the given set, but 
resultant complex number is not. (S4): {ia | a is real} 
 Here, this set does not contain 1 (multiplicative 
identity) 
 So, (S1) and (S2) are subfields of C. Option D is 
correct.


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The exponent of 11 in the prime factorization of 
300! is 
 a) 27 
 b) 28 
 c) 29 
 d) 30


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

300! is 1*2*3*...*300. 
 Now there are 27 multiples of 11 from 1 to 300, so 
they will include 11 as a prime factor atleast once. 
 121 and 242 will contain an extra 11, all other will 
contain 11 as a factor only once. 
 So, total number of 11's = 27+2 = 29. 
 So, exponent of 11 is 29 i.e. option C. 
<!-- PAGE 608 -->
DISCRETE MATHEMATICS


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let S be a set of n elements. The number of ordered 
pairs in the largest and the smallest equivalence 
relations on S are 
 a) n and n 
 b) n2 and n 
 c) n2 and 0 
 d) n and 1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Equivalence relation means it is reflexive, 
symmetric and transitive 
 If a relation is reflexive then it must have all the 
pairs of diagonal elements and relation with only 
diagonal elements is also symmetric and 
transitive. Therefore the smallest such relation is 
of size n. 
 With diagonal elements, we can include all the 
elements as well.  Therefore the largest 
equivalence relation is of size n2. 
 So, Correct Option is b


</details>

---


### Q47. [GATE CSE – 2009 MCQ  (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A partial order P is defined on the set of natural 
numbers as follows. Here x/y denotes integer 
division. 
 i. (0,0) ∈ P. 
ii. (a, b) ∈ P if and only if (a%10) ≤ (b%10) and 
(a%10, b%10) ∈ P. 
 Consider the following ordered pairs: 
 i. (101, 22) 
ii. (22, 101)  
iii. (145, 265) 
iv. (0, 153) 
 Which of these ordered pairs of natural numbers are 
contained in P? 
 a) (i) and (iii) 
 b) (ii) and (iv) 
 c) (i) and (iv) 
 d) (iii) and (iv)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

For ordered pair (a, b), to be in P, each digit in a 
starting from unit place must not be larger than the 
corresponding digit in b. 
 This condition is satisfied by options 
 (iii) (145, 265) → 5<=5, 4 < 6 and 1 < 2. 
 (iv) (0, 153) → 0 < 3 and no need to examine 
further.


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


How many different non-isomorphic Abelian 
groups of order 4 are there? 
 a) 2 
b) 3 
c) 4 
d) 5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The number of Abelian groups of order 𝑃𝑘, where 
𝑃 is prime, is the number of partitions of 𝑘. 
Here, order is 4 = 22 
{1,1}, 
{2} 
Partition of 2 are 2. 
 Total 2 partition so number of different abelian 
groups are 2 .


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A relation is defined on ordered pairs of integers 
as follows: 
 (x,y)R(u,v) if x<u and y>v 
 Then R is: 
 a) Neither a Partial Order nor an Equivalence 
Relation 
 b) A Partial Order but not a Total Order 
 c) A total Order 
 d) An Equivalence Relation


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

For reflexivity, (x,y) R (x,y), which here requires 
x<x and y<y and this is not possible in this 
relation. 
 This relations is Not Symmetric as 
 (x,y)R(u,v) iff x<u and y>v 
 (u,v)R(x,y) iff u<x and v>y in completely opposite 
conditions!! 
 Since, reflexive and symmetric pairs are not 
allowed, the matrix of this relation would contain 
only either lower triangular or upper triangular 
elements as 1. 
 So this relation is Anti-Symmetric. 
 This relation is Irreflexive as not even a single 
case of reflexivity is possible. 
 Since the relation is Irreflexive and Anti-
Symmetric, it is Asymmetric. 
 This relation is also transitive as 
 (x,y)R(u,v) iff x<u and y>v 
 (u,v)R(a,b) iff u<a and v>b 
 both imply 
 x<u<a and y>v>b 
 implies 
 x<a and y>b which makes (x,y)R(a,b) 
 Hence, transitive. 
 So, Neither a Partial Order nor an Equivalence 
Relation


</details>

---


### Q50. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let  E, F and G be finite sets. Let 
X=(E∩F)−(E∩G) and Y=(E−(E∩G))−(E−F) 
Which one of the following is true? 
 a) X⊂ Y 
 b) X ⊃Y 
 c) X = Y  
d) X - Y ≠ ∅ and Y -X ≠ ∅


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

X = Y 
Option C is the answer.


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the cardinality of the set of integers X 
defined below? 
 X = {n | 1 ≤ n ≤ 123, n is not divisible by either 2, 
3 or 5} 
 a) 28 
 b) 33 
 c) 37 
 d) 44


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Number's divisible by 2 in X = 61 
 [= integer(123/2)] 
 Number's divisible by 3 in X = 41 
 Number's divisible by 5 in X = 24 
 Number's divisible by 2 and 3 i.e. by 6 = 20 
 Number's divisible by 2 and 5 i.e by 10 = 12 
 Number's divisible by 3 and 5 i.e by 15 = 8 
 Number's divisible by 2 and 3 and 5 i.e by 30 = 4 
Number's divisible by either 2 or 3 or 5 = 
N(AUBUC) = 
N(A) + N(B) + N(C) – N(A∩B) – N(B∩C) – 
N(A∩C) + N(A∩B∩C) 
 = 61 +41 + 24-20-12-8+ 4 = 90 
X={n, 1 ≤ n ≤ 123, n is not divisible by either 2, 3 or 
5 } 
 Cardinality = 123 - 90=33 
 So, the correct Answer is B. 
<!-- PAGE 609 -->
DISCRETE MATHEMATICS


</details>

---


### Q52. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let P, Q and R be sets let Δ denote the symmetric 
difference operator defined as PΔQ = (PUQ)-(P∩Q). 
Using Venn diagrams, determine which of the 
following is/are TRUE? 
I. PΔ(Q∩R) = (PΔQ) ∩ (PΔR) 
 II. P∩ (Q∩R) = (P∩Q) Δ (PΔR) 
 a) I only 
 b) II only 
 c) Neither I nor II 
 d) Both I and II


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

So the correct answer is C.


</details>

---


### Q53. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For the set N of natural numbers and a binary 
operation ƒ : N × N → N, an element z ∈ N is called 
an identity for ƒ, if f(a, z) = a = f(z, a), for all a ∈ N. 
Which of the following binary operations have an 
identity? 
 I. f(x, y) = x + y - 3  
 II. f(x, y) = max(x, y)  
 III. f(x, y) = xy 
 a) I and II only 
 b) II and III only 
 c) I and III only 
 d) None of these


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

An Element z ∈ N is called an Identity element for 
ƒ if f(a, z) = f(z, a) = a, ∀a ∈ N 
 I f(x,y) = x+y-3 
 We will say that z is an identity element if f(x, z) 
= x = f(z, x), Hence, x+z-3=x=z+x-3 
 So, We have z = 3. 
 II: f(x,y) = max(x, y) 
 We will say that z is an identity element if f(x, z) 
= x = f(z, x), hence, max(x, z) = x = max(z, x), ∀x 
∈N. 
 So, We have z = 0 (if N consists of 0) 
 Or We have z = 1 (if N does not consists of 0 
 NOTE: Whether 0 belongs to Set of natural 
numbers or not, is an ambiguous thing. In Number 
theory, generally we don't consider 0 as a Natural 
number. But in Computer Science, 0 is considered 
as a Natural number by many authors. 
 In this question, It doesn't matter whether or not 0 
belong to N or not. We can say that the Set N will 
have an Identity element in both the cases. (Also 
See below NOTE 3) 
III: 𝑓(𝑥, 𝑦) = 𝑥𝑦 
We will say that 𝑧 is an identity element if 𝑓(𝑥, 𝑧) =
𝑥 = 𝑓(𝑧, 𝑥), hence 𝑥 𝑧 = 𝑥 = 𝑧𝑥, ∀𝑥 ∈ ℕ. 
 For the first part, 𝑥 𝑧 = 𝑥 gives 𝑧 = 1. 
 For the second part, substituting 𝑧 = 1 gives 1𝑥 = 𝑥. 
However, 1𝑥 = 1, which is not equal to 𝑥 for all 𝑥 > 1. 
Since no single value of 𝑧 satisfies both equations 
simultaneously, there is no identity element for this binary 
operation.


</details>

---


### Q54. [GATE CSE – 2006 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let A, B and C be non-empty sets and let 
 X = (A − B) − C and Y = (A − C) − (B − C). 
 Which one of the following is TRUE? 
 a) X = Y 
 b) X ⊂ Y 
 c) Y ⊂ X 
 d) None of these


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Method 1:  
If we draw venn diagram, both X and Y is 
equal to the shaded region as follows 
Method 2: 
X = (𝐴 − 𝐵) − 𝐶 
     = (𝐴 ∩ 𝐵′) − 𝐶 
     = (𝐴 ∩ 𝐵′) ∩ 𝐶′ 
𝑌 = (𝐴 − 𝐶) − (𝐵 − 𝐶) 
    = (𝐴 ∩ 𝐶′) − (𝐵 ∩ 𝐶′) 
    = (𝐴 ∩ 𝐶′) ∩ (𝐵 ∩ 𝐶′)′  
    = (𝐴 ∩ 𝐶′) ∩ (𝐵′ + 𝐶) 
    = (𝐴 ∩ 𝐶′) ∩ 𝐵′ + (𝐴 ∩ 𝐶′) ∩ 𝐶 
    = 𝐴 ∩ (𝐶′ ∩ 𝐵′) + 𝐴 ∩ (𝐶′ ∩ 𝐶) 
    = 𝐴 ∩ (𝐵′ ∩ 𝐶′) + 𝐴 ∩ ϕ 
    = (𝐴 ∩ 𝐵′) ∩ 𝐶′ +  ϕ 
    = (𝐴 ∩ 𝐵′) ∩ 𝐶′ 
Hence 𝑋 = 𝑌


</details>

---


### Q55. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following is the Hasse diagram of the poset 
[{a,b,c,d,e}, ≺ ] 
 The poset is : 
 a) not a lattice 
 b) a lattice but not a distributive lattice 
 c) a distributive lattice but not a Boolean algebra 
 d) a Boolean algebra


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

A lattice has a least upper bound (lub) and a greatest 
upper bound (glb), but to be distributive every 
element of the lattice should have at most one 
complement. Here, elements b,c,d are complements 
of each other and hence the given lattice is not 
distributive.


</details>

---


### Q56. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let R and S be any two equivalence relations on a 
non-empty set A. Which one of the following 
statements is TRUE? 
 a) R ∪ S, R ∩ S are both equivalence relations 
 b) R ∪ S is an equivalence relation 
 c) R ∩ S is an equivalence relation 
 d) Neither R ∪ S nor R ∩ S are equivalence 
relations


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

If R and S are equivalence relation then R ∩ S is 
always an equivalence relation. 
 But R ∪ S may or may not be an equivalence 
relation because it might not be transitive always. 
 So, the correct answer is (C) R ∩ S is an equivalence 
relation. 
<!-- PAGE 610 -->
DISCRETE MATHEMATICS


</details>

---


### Q57. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let n = p2q, where p and q are distinct prime 
numbers. How many numbers m satisfy 1 ≤ m≤ n 
and gcd (m, n) = 1? Note that gcd (m, n) is the 
greatest common divisor of m and n. 
 a) p(q-1) 
 b) pq 
 c) (p2 - 1)(q-1) 
 d) p(p-1)(q-1)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

n = p2q, where p and q are prime. 
 So, number of multiples of p in n = pq 
 Number of multiples of q in n = p2 
 Number of multiples of pq in n = p 
 Since, prime factorization of n consists of only p 
and q, gcd(m, n) will be a multiple of these or 1. 
So, number of possible m such that gcd(m, n) is 1 
will be  
n-number of multiples of either p or q 
 = n-p2 - pq+p  
 = p2q-p2 - pq+p  
 = p(pq-p-q+1)  
 = p(p-1)(q − 1) 
 So, the correct answer is d.


</details>

---


### Q58. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let A be a set with n elements. Let C be a 
collection of distinct subsets of A such that for any 
two subsets S1 and S2 in C, either S1 ⊂ S2 or S2 ⊂ 
S1. What is the maximum cardinality of C? 
 a) n 
 b) n+1 
 c) 2n-1 + 1 
 d) n!


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let's take an example set {a, b, c}. 
Now let's try to create the required set of subsets, 
say S. 
Let's start by adding sets of size 1 to S. We can 
only add one of the sets {a}, {b}, {c} 
 Lets say we add {a}, so S now becomes {{a}}. 
Now lets add sets of size 2 to S. Again we see that 
we can only add one of {a, b}, {a, c} or {b, c}, 
and we cannot add {b, c} since we have already 
added {a}. 
Continuing this way we see we can add only one 
set for a all size till n. 
So, the answer should be (B) n + 1 (include the 
empty set).


</details>

---


### Q59. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f be a function from a set A to a set B, g a 
function from B to C, and h a function from A to C, 
such that h(a) = g(f(a)) for all a ∈ A. Which of the 
following statements is always true for all such 
functions ƒ and g? 
 a) g is onto ⟹ h is onto 
 b) h is onto ⟹ f is onto 
 c) h is onto ⟹ g is onto 
 d) h is onto ⟹ ƒ and g are onto


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Let h be onto (onto means co-domain = range). 
So, h maps to every element in C from A. Since 
 h(a) = g(f(a)), g should also map to all elements in 
C. So, g is also onto. 
<!-- PAGE 611 -->
MATHEMATICAL LOGICS


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For two different persons 𝑥 and 𝑦, the predicate  
 𝑀(𝑥, 𝑦) denotes that x knows y.  
 Consider the following statement.  
 There is a person who does not know anyone else, 
but that person is known by everyone else.  
 Which one of the following expressions represents 
the above statement? 
 a) (∃𝑦)(∀𝑥) ((𝑥 ≠ 𝑦) → (𝑀(𝑥, 𝑦) ∧ ¬𝑀(𝑦, 𝑥))) 
 b) (∀𝑦)(∃𝑥) ((𝑥 ≠ 𝑦) → (𝑀(𝑥, 𝑦) ∧ ¬𝑀(𝑦, 𝑥))) 
 c) (∃𝑦)(∃𝑥) ((𝑥 ≠ 𝑦) → (𝑀(𝑥, 𝑦) ∧ ¬𝑀(𝑦, 𝑥))) 
 d) (∀𝑦)(∀𝑥) ((𝑥 ≠ 𝑦) → (𝑀(𝑥, 𝑦) ∧ ¬𝑀(𝑦, 𝑥)))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Statement meaning: 
 There exists a person y such that 
 • everyone else knows y 
 • y knows no one else 
 Formally: 
 “There is a person” → ∃y 
 “For every other person x≠y” → ∀x 
 “x knows y” → M(x,y) 
 “y does not know x” → ¬M(y,x) 
 So we get: 
 (∃y)(∀x)((x≠y)→(M(x,y)∧¬M(y,x))) 
 That matches option (a).


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let P(x) be an arbitrary predicate over the 
domain of natural numbers. 
Which ONE of the following statements is 
TRUE?  
 a) (P(0) ∧ ∀x[P(x)⇒P(x+1)]) ⇒ (∀xP(x)) 
 b) (P(0) ∧ ∀x[P(x) ⇒ P(x−1)]) ⇒ (∀xP(x)) 
 c) (P(1000) ∧ ∀x[P(x) ⇒ P(x−1)]) ⇒ (∀xP(x)) 
 d) (P(1000)∧∀x[P(x) ⇒P(x+1)]) ⇒ (∀xP(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Option (A) represents mathematical induction, 
which is a proof technique often used for 
predicates over natural numbers: 
Base Case: P(0) is true (the starting point). 
Inductive Step: ∀x[P(x)⇒P(x+1)], meaning if the 
predicate P(x) holds for an arbitrary natural 
number x, it will also hold for x+1. 
Conclusion: ∀xP(x), meaning the predicate P(x) 
holds for all natural numbers x.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following predicate logic 
formulae/formula is/are CORRECT 
representation(s) of the statement: 
“Everyone has exactly one mother”? 
 The meanings of the predicates used are: 
 mother(y,x): y is the mother of x 
 noteq(x,y): x and y are not equal  
 a) ∀x∃y∃z(mother(y,x)∧¬mother(z,x)) 
 b) ∀x∃y[mother(y,x)∧∀z 
  (noteq(z,y)→¬mother(z,x))] 
 c) ∀x∀y[mother(y,x)→∃z(mother 
  (z,x)∧¬noteq(z,y))] 
 d) ∀x∃y[mother(y,x)∧¬∃z(noteq 
  (z,y)∧mother(z,x))]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, D


**Step-by-Step Explanation:**

The logical representation is: 
 ∀x∃y(mother(y,x)∧∀z(mother(z,x)→¬Noteq(z,y))) 
 which is same as 
∀x∃y[mother(y,x)∧¬∃z(noteq(z,y)∧mother(z,x))] 
 Answer: B & D match.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let p and q be the following propositions: 
 p: Fail grade can be given. 
 q: Student scores more than 50% marks. 
 Consider the statement: “Fail grade cannot be given 
when student scores more than 50% marks.” 
 Which one of the following is the CORRECT 
representation of the above statement in 
propositional logic?  
 a) q→¬p 
 b) q→p 
 c) p→q 
 d) ¬p→q


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Q when P means P→Q. 
 Given statement, 
 P: Fail grade can be given. 
 Q: Student score more than 50% marks. 
 ¬P : Fail grade cannot be given 
 So, 
 Fail grade cannot be given when student score more 
than 50% marks. 
 is written as  Q→¬P 
 Correct answer is option A.


</details>

---


### Q5. [GATE CSE – 2026 MCQ SET – 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Geetha has a conjecture about integers, which is of 
the form 
 ∀x(P(x) ⇒ ∃yQ(x, y)), 
 where P is a statement about integers, and Q is a 
statement about pairs of integers. Which of the 
following (one or more) option(s) would imply 
Geetha’s conjecture?  
 a) ∃x(P(x) ∧ ∀yQ(x, y)) 
 b) ∀x∀yQ(x, y) 
 c) ∃y∀x(P(x) ⇒ Q(x, y)) 
 d) ∃x(P(x) ∧ ∃yQ(x, y))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C


**Step-by-Step Explanation:**

L: ∀x[ P(x) → ∃y Q(x, y)] 
 "For every x, if P(x) is true, then there exists 
some y such that Q(x, y) will be true." 
 Option: 
 (i) ∃x(P(x) ∧ ∀yQ(x, y)) 
 "For some x, P(x) is true, and for all y, Q(x, y) is 
true, which does not imply L." 
 (ii) ∀x ∀y Q(x, y) 
 "For every x and every y, Q(x, y) is true, which 
implies L." 
 (iii) ∃y ∀x[P(x) → Q(x, y)] 
 "There exists some y such that for every x, if P(x) is 
true, then Q(x, y) is also true, which implies L." 
 (iv) ∃xP(x) ∧ ∃yQ(x, y) 
 "There exists some x for which P(x) is true, and also 
for some y, Q(x, y) is true, which cannot imply L."


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Choose the correct choice(s) regarding the 
following propositional logic assertion 
 S: ((P ∧ Q) → R) → ((P ∧ Q) → (Q → R)) 
 Which of the following is true? 
a) S is neither a tautology nor a contradiction. 
 b) S is a tautology. 
 c) S is a contradiction. 
 d) The antecedent of S is logically equivalent 
to the consequent of S.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,D


**Step-by-Step Explanation:**

Antecedent of S : (P ∧ Q) → R 
 ≡ ~( P∧Q) v R 
 ≡ ~P v ~Q v R 
 Consequent of S : (P ∧ Q) → (Q → R) 
 ≡ (P ∧ Q) → (~Q v R) 
 ≡ ~( P∧Q) v (~Q v R) 
 ≡ ~P v ~Q v (~Q v R) 
 ≡ ~P v ~Q v R 
 Antecedent of S is equivalent to Consequent of S. 
Hence Option (D) is right. A → A is always a 
Tautology. Option B is right. 
<!-- PAGE 621 -->
DISCRETE MATHEMATICS


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let p and q be two propositions. Consider the 
following two formulae in propositional logic. 
 S1:∼p ∧ ( p ∨ q )→q 
 S2: q → (∼p ∧ (p ∨ q)) 
 Which one of the following choices is correct?  
 a) Neither S1 nor S2 is a tautology. 
 b) S1 is not a tautology but S2 is a tautology. 
 c) S1 is a tautology but S2 is not a tautology. 
 d)  Both S1 and S2 are tautologies.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

S1: ¬p∧(p∨q)→q 
 If consequence is false and hypothesis is true, then 
we will get False in the truth table. 
 Lets assume q is false. So consequence is FALSE. 
 Can it make Hypothesis TRUE? 
 Hypothesis: 
 ¬p∧(p∨q)≡¬p∧(p∨FALSE)≡¬p∧(p)≡FALSE. 
 Hypothesis can’t be true, So we can’t get False in 
the Truth Table. 
 ∴ S1 is Tautology 
 S2 : q → (∼p ∧ (p ∨ q)) 
 ∼q ∨ (∼p ∧ (p ∨ q)) 
 ∼ q ∨ (() ∨ (∼ p ∧ q)) 
 ∼ q ∨ (F ∨ (∼p ∧ q)) 
 ∼ q ∨ (∼ p ∧ q) 
 (∼q ∨∼ p) ∧ T 
 it can be false when q=false and p=false 
 S2 is not a tautology


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following predicate formulae is 
NOT logically valid? 
 Note that W is a predicate formula without any 
free occurrence of x.  
 a) ∃x(p(x) → W) ≡ ∀xp(x) → W 
 b) ∀x(p(x) → W) ≡ ∀x p(x) → W 
 c) ∃x(P(x) ∧ W) ≡ ∃x P(x) ∧ W        
 d) ∀x(p(x) ∨ W) ≡ ∀ xp(x) ∨ W


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

∀x (p(x) → W) ≡ ∀x p(x) → W is wrong. Since 
∀x [p(x) → W] 
 ≡ ∀x [¬p(x) ∨ W] 
 ≡ ∀x (¬p(x) ∨ W 
 ≡ ¬(∃x p(x)) ∨ W 
 ≡ ∃x p(x) → W 
 Option ∀x(p(x) → W) ≡ ∀xp(x) → W is correct.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the first order predicate formula φ: ∀x[(∀z 
z|x⇒ ((z = x) ∨ (z = 1))) ⇒∃w (w >x) ∧ (∀z z|w⇒ 
((w = z) ∨ (z = 1)))] 
 Here 'a|b' denotes that 'a divides b' where a and b are 
integers. Consider the following sets: 
 S1. {1, 2, 3, ..., 100} 
 S2. Set of all positive integers 
 S3. Set of all integers 
 Which of the above sets satisfy φ?  
 a) S1 and S3 
 b) S1, S2 and S3 
 c) S2 and S3 
 d) S1 and S2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The first-order logic means that if z is a prime 
number, then there exists another prime number in 
the set, which is larger than it. 
 One of the cases: If -7 is a prime number (i.e, it is 
either divided by -7 or 1 only), then there exists 
some number like -3, which is larger than -7 and it 
satisfies the property (either divided by -3 or 1 
only). 
 So, S3 is correct 
 It's true for all integers too.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the first-order logic sentence: φ ≡ 
∃s∃t∃u∀v∀w∀x∀yψ(s,t,u,v,w,x,y) where 
ψ(s,t,u,v,w,x,y) is a quantifier-free first-order logic 
formula using only predicate symbols, and possibly 
equality, but no function symbols. Suppose φ has a 
model with a universe containing 7 elements. 
 Which one of the following statements is necessarily 
true? 
 a) There exists at least one model of φ with 
universe of size less than or equal to 3. 
 b) There exists no model of φ with universe of 
size less than or equal to 3. 
 c) There exists no model of φ with universe of 
size greater than 7.       
 d) Every model of φ has a universe of size equal 
to 7


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

φ = ∃s ∃t ∃u ∀v ∀w ∀x ∀y ψ(s, t, u, v, w, x,y) 
 Let’s interpret the problem this way: ∀ are always 
True and ∃ are always False for empty sets. 
 So, there exists at least one model with universe of 
size 3 (or less than) or equal to 3. 
 Therefore, option A is necessarily TRUE.


</details>

---


### Q11. [GATE CSE – 2021 MSQ SET – 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let p, q and r be prepositions and the expression (p 
→ q) → r be a contradiction. 
 Then, the expression (r → p) → q is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given that (p→q)→r is a contradiction. 
 So, r = F and (p→q) = T. 
 So, we have to evaluate the expression (r→p)→q 
 Since r = F, (r→p) = T (As F→p, is always true) 
 The final expression is T→q, which is true when q is 
true.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the first-order logic sentence F: 
∀x(∃yR(x,y)). Assuming non-empty logical 
domains, which of the sentences below are  
 implied by F? 
 I. ∃y(∃xR(x,y)) 
 II. ∃y(∀xR(x,y)) 
 III. ∀y(∃xR(x,y)) 
 IV. ¬∃x(∀y¬R(x,y))  
 a) IV only  
 b) I and IV only 
 c) II only 
 d) II and III only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let’s convert the given first-order logic sentence 
into some English sentence. 
 Given:- F: ∀x(∃yR(x, y)) 
 : For all girls there exist a boyfriend (x for girls and 
y for boys) 
 I: ∃y(∃xR(x, y)) 
 : There exist some boys who have girlfriends. 
(Subset of statement F, so True) 
 II: ∃y(∀xR(x, y)) 
 : There exist some boys for which all the girls are 
girlfriend. (False) 
 III: ∀y(∃xR(x, y)) 
 : For all boys exists a girlfriend. (False) 
 IV: ~∃x(∀y~R(x, y)) 
 = ∀x(~∀y~~R(x, y)) 
 = ∀x(∃yR(x, y)) (∵ ~∀y=∃y, ~∃x=∀x) (True)


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The statement (¬p) ⇒ (¬q) is logically equivalent 
to which of the statements below? 
 I. p ⇒ q 
 II. q ⇒ p 
 III. (¬q) ∨ p 
 IV. (¬p) ∨ q  
 a) I only  
 b) I and IV only 
 c) II only        
 d) II and III only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(I) ¬p⇒¬q ≡ q ⇒ p (contrapositive) 
 And q ⇒ p ≡ ¬q ∨ p 
 So, statements (II) and (III) are equivalent to the 
statement given in the question.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let p, q, r denote the statements “It is raining”, “It 
is cold”, and “It is pleasant”, respectively. Then 
the statement “It is not raining, and it is pleasant, 
and it is not pleasant only if it is raining and it is 
cold” is represented by  
 a) (¬p ∧ r) ∧ (¬r → (p ∧ q)) 
 b) (¬p ∧ r) ∧ ((p ∧ q) →¬r) 
 c) (¬p ∧ r) ∨ ((p ∧ q) →¬r)       
 d) (¬p ∧ r) ∨ (r → (p ∧ q))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

p: It is raining 
 q: It is cold 
 r: It is pleasant 
 “If it is not raining and it is pleasant, and it is not 
pleasant only if it is raining and it is cold.” 
 We can divide the statement into two parts with 
“Conjunction”. 
 (
𝐼𝑓 𝑖𝑡 𝑖𝑠 𝑛𝑜𝑡 𝑟𝑎𝑖𝑛𝑖𝑛𝑔 
¬𝑝 ) and (
𝐼𝑡 𝑖𝑠 𝑝𝑙𝑒𝑎𝑠𝑎𝑛𝑡
𝑟 ) → (1) 
 (
𝐼𝑡 𝑖𝑠 𝑛𝑜𝑡 𝑝𝑙𝑒𝑎𝑠𝑎𝑛𝑡 
¬𝑝 ) only if  (
𝐼𝑡 𝑖𝑠 𝑟𝑎𝑖𝑛𝑖𝑛𝑔 𝑎𝑛𝑑  𝑖𝑡 𝑖𝑠 𝑐𝑜𝑙𝑑 
𝑝 ∧ 𝑞 ) 
 i.e., ¬𝑟 → (𝑝 ∧  q) → (2)  
 From (1) & (2), the given statement can be 
represented as (¬𝑝 ∧  𝑟) ∧  (¬𝑟 → (𝑝 ∧  𝑞))


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following well-formed formulae in 
predicate calculus is NOT valid?  
 a) (∀x p(x) ⇒∀x q(x)) ⇒ (∃x ¬p(x) ∨ ∀x q(x)) 
 b) (∃x p(x) ∨ ∃x q(x)) ⇒∃x (p(x) ∨ q(x)) 
 c) ∃x (p(x) ∧ q(x)) ⇒ (∃x p(x) ∧ ∃x q(x))  
 d) ∀x (p(x) ∨ q(x)) ⇒ (∀x p(x) ∨ ∀x q(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

d) ∀𝑥(𝑝(𝑥) ∨ 𝑞(𝑥)) ⇒ (∀𝑥𝑝(𝑥) ∧ ∀𝑥𝑞(𝑥)) 
 This states that if every clement in the domain satisfies 
either 𝑝 or 𝑞, then all elements must satisfy 𝑝 AND all 
elements must satisfy 𝑞. This is a logical fallacy. 
 Counterexample: *Let the domain be the set of natural 
numbers: {1,2}. 
 Let 𝑝(𝑥) mean " 𝑥 is odd" and 𝑞(𝑥) mean " 𝑥 is even". 
<!-- PAGE 622 -->
DISCRETE MATHEMATICS 
 The premise ∀𝑥(𝑝(𝑥) ∨ 𝑞(𝑥)) is True because every 
number is either odd or even. 
 The conclusion (∀𝑥𝑝(𝑥) ∧ ∀𝑥𝑞(𝑥)) is False because it 
is not true that all numbers are odd, nor is it true that 
all numbers are even. 
 Since True ⇒ False results in False, this formula is 
NOT valid.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let p,q,r,s represent the following propositions. 
 p: x ∈ {8,9,10,11,12} 
 q: x is a composite number 
 r: x is a perfect square 
 s: x is a prime number 
 The integer x≥2 which satisﬁes ¬ ((p ⇒ q) ∧ (¬r 
∨¬s)) is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11


**Step-by-Step Explanation:**

Given, 
 ~((p→q) ∧ (~r ∨ ~s)) 
 ⇒ first simplify the given statement by converting 
∧ to ∨ and ∨ to ∧. 
 ⇒ [~(p→q) ∨ (~(~r ∨ ~s)] 
 Demorgan’s law: 
 ⇒ [~(~p ∨ q) ∨ (r ∧ s)] 
 ∵p→q≡ ~p ∨ q 
 ⇒ [(p ∧ ~q) ∨ (r ∧ s)] 
 p ∧ ~q is {8,9,10,11,12} ∧ {not a composite 
number} i.e. {11}


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following expressions: 
 (i) false 
 (ii) Q 
 (iii) true 
 (iv) P ∨ Q 
 (v) ¬Q ∨ P 
 The number of expressions given above that are 
logically implied by P ∧ (P → Q) is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

(P ∧ (P → Q)) = p ∧ (~p ∨ Q) = (p ∧ ~p) ∨(p ∧ Q) 
= p ∧ Q 
 (P ∧ Q) → True is always a tautology. 
 (P ∧ Q) → False is not a tautology 
 (P ∧ Q) → Q is a tautology 
 (P ∧ Q) →¬Q ∨ P is a tautology 
 (P ∧ Q) → P ∨ Q is a tautology 
 So, there are 4 expressions logically implied by (P 
∧ (P → Q)).


</details>

---


### Q18. [GATE CSE – 2017 MCQ SET- 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following well-formed formulae is 
a tautology?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Since, we know that: P→R = ¬P ∨ R 
[∀x ∃y (P(x,y)→R(x,y)] ↔ [∀x ∃y (¬ 
P(x,y)∨R(x,y)] is a tautology.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In a room there are only two types of people, 
namely Type 1 and Type 2. Type 1 people always 
tell the truth and Type 2 people always lie. You 
give a fair coin to a person in that room, without 
knowing which type he is from and tell him to toss 
it and hide the result from you till you ask for it. 
Upon asking, the person replies to the following: 
 “The result of the toss is head if and only if I am 
telling the truth.” 
 Which of the following options is correct? 
 a) The result is head 
 b) The result is tail 
 c) If the person is of Type 2, then the result is 
tail 
 d) If the person is of Type 1, then the result is 
tail


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

As we do not know the type of person from whom 
those words are coming, so we can have two 
possible cases. 
 Case 1: 
 The person who speaks truth. This implies that the 
result of the toss is Head. 
 Case 2: 
 The person who lies. In this case , the statement 
itself must be false. 
 The negation of (x⇔y) is : (~x and y ) or (x and 
~y) 
 so there are two possibilities for this statement to 
be false. 
 → It is head and lies spoken. 
 → It is not head and truth spoken. 
 Clearly, the second one cannot speak the truth. So 
finally, it is head. 
 Hence, option (A) is the correct answer.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements. 
 S1: If a candidate is known to be corrupt, then he 
will not be elected  
 S2: If a candidate is kind, he will be elected 
 Which one of the following statements follows 
from S1 and S2 as per sound inference rules of 
logic?  
 a) If a person is known to be corrupt, he is 
kind 
 b) If a person is not known to be corrupt, he is 
not kind 
 c) If a person is kind, he is not known to be 
corrupt 
 d) If a person is not kind, he is not known to be 
corrupt.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

S1: If a candidate is known to be corrupt, then  
 he will not be elected. 
 S2: If a candidate is kind, he will be elected. 
 If p → q, then ¬q → ¬p 
 So from S1, elected → not corrupt 
 and S2 is, kind → elected 
 Therefore, kind → not corrupt


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT equivalent to 
p↔q?  
a)  (¬p ∨q) ∧ (p∨¬q) 
b) (¬p ∨q) ∧ (q→ p) 
c) (¬p ∧q) ∨ (p∧¬q) 
d) (¬p∧¬q) ∨ (p∧ q)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Here, option (a) and (b) can be reduced to (p → q) ^ 
(q → p) and hence it is equivalent to p ⟷ q. 
 Option (d) is p’q’ + pq ≡ p ⟷ q. 
 Option (c) is p’q + pq’ = p ⊕ q which is not 
equivalent to p ⟷ q.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following propositional logic 
formulas is TRUE when exactly two of p, q, and r 
are TRUE? 
a) ((p↔ q) ∧r) ∨(p ∧ q∧∼r) 
b) (∼ (p↔ q )∧r)∨(p ∧ q∧∼r) 
c) ((p →q)∧r)∨(p ∧q∧∼r) 
d)  (∼(p ↔q)∧r)∧(p∧ q∧∼r)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

We directly check with one of the {TTF, TFT, FTT} 
options. 
 As there are two T’s in each option, replace them 
and check with the third value. 
 E.g.: Let p=q= T 
 (∼(p↔q) ∧r) ∨ (p∧q∧∼r) 
 = (∼(T↔T) ∧ r) ∨ (T∧T∧∼r) 
 = (∼(T)∧r) ∨ (T∧∼r) 
 = (F∧ r) ∨ (T∧∼r) 
 = (F)∨(∼r) 
 = ∼r 
 This is true for r=F. 
 Similarly, we can have p=r=T and q=F. 
 q=r=T and p=F 
 So, Option (∼ (p↔ q )∧r)∨(p ∧ q∧∼r) is the correct 
answer.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following Boolean expressions is 
NOT a tautology?  
 a) ((a ⟶ b) ∧ (b ⟶ c)) ⟶ (a ⟶ c) 
 b) (a ⟷ c) ⟶ (∽ b ⟶ (a ∧ c)) 
 c) (a ∧ b ∧ c) ⟶ (c ∨ a) 
 d) a ⟶ (b ⟶ a)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

A: ((a → b) ∧ (b → c)) → (a → c) 
 it can be false only when (a → c) is false i.e. a=T , 
c=F and left is true 
 then left part: ((T → b) ∧ (b → F)) 
 to make it true T-> b must be true i.e. b must be true 
and simultaneosly b-> F must be true i.e. b must be 
false. 
 which is not possible . 
 This is a tautology. 
 B: (a ⟷ c) ⟶ (~b ⟶ (a ∧ c)) 
 Let a = c = F 
 (F ⟷ F) → (~b⟶ (F ∩ F)) 
 T → (~b → F) 
<!-- PAGE 623 -->
DISCRETE MATHEMATICS 
 This is False for b = F 
 So, this is not True. 
 C: (a ∧ b ∧ c) ⟶ (c ∨ a) 
 (c ∨ a) is False only for a = c = F 
 if (c ∨ a) is False 
 (F ∧ b ∧ F) → F 
 F → F which is a Tautology 
 True always. 
 D: a ⟶ (b ⟶ a) 
 a ⟶ (~b ∨ a) 
 (~a ∨ a) ∨ ~b = T ∨ ~b = T which is a tautology


</details>

---


### Q24. [GATE CSE – 2015 MCQ SET-3 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The CORRECT formula for the sentence, “not all 
rainy days are cold” is  
 a) ∀d (Rainy(d) ∧∼Cold(d)) 
 b) ∀d (∼Rainy(d) → Cold(d)) 
 c) ∃d (∼Rainy(d) → Cold(d)) 
 d) ∃d (Rainy(d) ∧∼Cold(d))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Not all rainy days are cold 
 = ∼ [∀rainy days are cold] 
 = ∼ [∀ days (rainy days ⇒ cold days] 
 = ∃ days [∼ (cold days ∨∼rainy days)] 
 = ∃ days [rainy days ∧∼cold days]


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the statement: 
 “Not all that glitters is gold” 
Predicate glitters(x) is true if x glitters and 
predicate gold(x) is true if x is gold. Which one of 
the following logical formulae represents the 
above statement?  
 a) ∀x glitters(x) ⇒¬gold(x) 
 b) ∀x gold(x) ⇒glitters(x) 
 c) ∃x gold(x)∧¬glitters(x) 
 d) ∃x glitters(x)∧¬gold(x)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Not (all that glitters is gold) 
 ~ (∀x glitters(x) ⇒ gold(x)) 
 ⇒ (∼∀x) (∼ (glitters(x) ⇒ gold(x)) 
 ⇒∃x (∼ (∼glitters(x) ∨ gold(x)) 
 ⇒∃x (glitters(x) ∧ ~gold(x))


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements: 
 P: Good mobile phones are not cheap 
 Q: Cheap mobile phones are not good  
 L :P implies Q 
 M: Q implies P 
 N: P is equivalent to Q 
 Which one of the following about L, M, and N is 
CORRECT? 
 a) Only L is TRUE. 
 b) Only M is TRUE. 
 c) Only N is TRUE. 
 d) L, M and N are TRUE.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Observe that in the given statements, "not cheap & 
cheap”, "good & not good" are used. 
 So, we can divide the given statements to utilize 
the negation of these atomic statements. 
 Suppose, X is a good mobile and Y is a cheap one, 
then 
 P: (Good(x) → ~cheap(x)) ↔ (~good(x) ∨ 
~cheap(x)) 
 Q: cheap(x) → ¬good(x) ⟺ ((¬cheap(x) ∨ 
good(x)) ⟺ ¬good(x) ∨¬cheap(x)) 
 All these are contrapositive. 
 All L, M, N are true.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT logically 
equivalent to ¬∃x(∀y(α) ∧ ∀z(β)) ?  
 a) ∀x(∃z(¬β)→∀y(α)) 
 b) ∀x(∀z(β)→∃y(¬α)) 
 c) ∀x(∀y(α)→∃z(¬β)) 
 d) ∀x(∃y(¬α) → ∃z(¬β))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,D


**Step-by-Step Explanation:**

Option A: 
 ∀x(∃z(¬β) →∀y(α)) 
 ⇒∀x(¬∃z(¬β) ∨ ∀y(α)) 
 ⇒∀x(∀z(β) ∨ ∀y(α)) 
 ⇒¬∃x¬(∀z(β) ∨ ∀y(α)) 
 ⇒¬∃x(¬∀z(β)∧¬∀y(α)) 
 A is not equivalent to the given. 
 Option B: 
 ∀x(∀z(β)→∃y(¬α)) 
 ⇒∀x(¬∀z(β)∨∃y(¬α)) 
 ⇒¬∃x¬(¬∀z(β)∨∃y(¬α)) 
 ⇒¬∃x(∀z(β)∨∀y(α)) 
 B is Matching and equivalent to given. 
 Option C: 
 ∀x(∀y(α)→∃z(¬β)) 
 ⇒∀x(¬∀y(α) ∨ ∃z(¬β)) 
 ⇒¬∃x¬(¬∀y(α) ∨ ∃z(¬β)) 
 ⇒¬∃x(∀y(α)∧ ∀z(β)) 
 C is equivalent to the given. 
 Option D: 
 ∀x(∃y(¬α)→∃z(¬β)) 
 ⇒∀x(¬∃y(¬α) ∨ ∃z(¬β)) 
 ⇒∀x(∀y(α) ∨ ∃z(¬β)) 
 ⇒¬∃x¬(∀y(α)∨∃z(¬β)) 
 ⇒¬∃x(¬∀y(α)∧¬∃z(¬β)) 
 ⇒¬∃x(¬∀y(α)∧∀z(β)) 
 So D is Not equivalent to the given. 
  Observe that in the given statements,


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is the logical translation of the following 
statement? 
 "None of my friends are perfect"  
 a) ∃x(F(x) ∧ ¬P(x)) 
 b) ∃x(¬F(x) ∧ P(x)) 
 c) ∃x(¬F(x) ∧ ¬P(x)) 
 d) ¬∃x(F(x) ∧ P(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A. some of my friends are not perfect 
B. some of those who are not my friends are perfect 
C. some of those who are not my friends are not perfect 
D. NOT (some of my friends are perfect) / none of my 
friends are perfect


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is the correct translation of the following 
statement into mathematical logic? 
 “Some real numbers are rational”  
 a) ∃x (real(x) ∨ rational(x)) 
 b) ∀x (real(x) → rational(x)) 
 c) ∃x (real(x) ∧ rational(x)) 
 d) ∃x (rational(x) → real(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

“Some real numbers are rational” 
 ∃x (real(x) ∧ rational(x)) 
 (A) ∃x(real(x) ∨ rational(x)) 
 means “Some number, which are either real or 
rational”. 
 (B) ∀x (real(x)→rational(x)) 
 Means “If a number is real, then it is rational”. 
 (D) ∃x (rational(x)→real(x)) 
 means “There exists a number such that if it is 
rational then it is real”. 
 it will be true even if all real numbers are real but 
not rational. which is not correct. 
 only C is correct.


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following logical inferences. 
 I1 : If it rains then the cricket match will not be 
played. The cricket match was played. 
 Inference: There was no rain. 
 I2 : If it rains then the cricket match will not be 
played. It did not rain. 
 Inference: The cricket match was played. 
 Which of the following is TRUE? 
 a) Both I1 and I2 are correct inferences 
 b) I1 is correct but I2 is not a correct inference 
 c) I1 is not correct but I2 is a correct inference 
 d) Both I1 and I2 are not correct inferences.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Given: 
 I1: If it rains then the cricket match will not be 
played. The cricket match was played. 
 Let’s break the above statement into two 
 as- 
 p = it rains 
 q = playing cricket/ match played 
 If (it rains) then (the match will not be 
 played) 
 p ⇒ (∼q) 
 q ⇒(∼p) (contrapositive) 
 Inference: There was no rain. (i.e., p = F) 
 this inference is valid. 
<!-- PAGE 624 -->
DISCRETE MATHEMATICS 
 I2: If it rains then the cricket match will not be 
played. 
 It did not rain. 
 p ⇒ (∼q) 
 but ∼p ⇒ ∼(∼q) = q need not be true 
 Inference: The cricket match was played.


</details>

---


### Q31. [GATE CSE – 2014 MCQ SET-3 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following options is CORRECT 
given three positive integers x,y and z, and a 
predicate


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Statement: x is not equal to 1, and if there exists 
some z for all y such that the product of y and z is 
x, then y is either the number itself or 1. 
 This is the definition of prime numbers. 
 So, P(x) being true means that x is a prime number 
is the correct answer.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose the predicate F(x, y, t) is used to 
represent the statement that person x can fool 
person y at time t. Which one of the statements 
below expresses best the meaning of the formula 
∀x∃y∃t(¬F(x, y,t))? 
 a) Everyone can fool some person at some 
time 
 b) No one can fool everyone all the time 
 c) Everyone cannot fool some person all the 
time 
 d) No one can fool some person at some time


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

F(x,y,t) ⇒ Person 'x' can fool person 'y' at time 't'. 
 Now we pull the negation sign by applying 
Demorgan's law. 
 ∀x∃y∃t(¬F(x, y, t)) ≡ ¬∃x∀y∀t(F(x,y,t)) 
 ¬∃x∀y∀t(F(x,y,t)) ⇒ No person can fool all the 
person all the time. 
 Which is same as "No one can fool everyone all 
the time"


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is the most 
appropriate logical formula to represent the 
statement: 
 "Gold and silver ornaments are precious" 
 The following notations are used : 
 G(x): x is a gold ornament.  
S(x): x is a silver ornament.  
P(x): x is precious. 
 a) ∀x(P(x) → (G(x) ∧ S(x))) 
 b) ∀x((G(x)∧S(x)) → P(x)) 
 c) ∃x((G(x)∧S(x))→ P(x)) 
 d) ∀x((G(x)∨S(x)) → P(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The statement could be translated as, if x is either 
Gold or Silver, then it would be precious. Rather 
than, 
 If x is both Gold and Silver, as an item cannot 
both Gold and silver at the same time. 
 Hence Ans is (D).


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The binary operation is defined as follows: 
P Q P ▯ Q 
T T T 
T F T 
F T F 
F F T 
 Which one of the following is equivalent to P ∨ Q? 
 a) ¬Q▯ ¬P 
 b) P▯¬Q 
 c) ¬P▯Q 
 d) ¬P▯¬Q


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Answer is B because the truth values for option B 
is the same as that of P "or" Q. 
 The given truth table is for Q→ P  which is ¬Q V 
P. 
 Now, with B option we get (¬(¬Q)) V P = P V Q


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following well-formed formulae : 
 I. ¬∀x(P(x))  
 II.¬∃x(P(x))  
 III.¬∃x(¬P(x))  
 IV. ∃x(¬P(x))  
 Which of the above are equivalent? 
 a) I and III 
 b) I and IV 
 c) II and III 
 d) II and IV


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let P(x) ⇒ Student x is pass 
 I ⇒ Not all students are pass. (which means 
"Some students are fail") 
 II ⇒ There does not exist a student who is pass. 
(which means "Every student is fail") 
 III ⇒There does not exist a student who is not 
pass  (which means "Every student is pass") 
 IV ⇒Some students are not pass. (which means 
"Some students are fail") 
 So, I and IV are equivalent.


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT necessarily a 
property of a Group? 
 a) Commutativity 
b) Associativity 
c) Existence of inverse for every element 
d) Existence of identity


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Group properties are 
 Closure 
 Associative 
 Identity Element 
 Inverse Element 
 Commutativity is not required for a mathematical 
structure to become a group. 
So, Answer should be Option A


</details>

---


### Q37. [GATE CSE – 2010 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let fsa and pda be two predicates such that fsa(x) 
means x is a finite state automaton, and pda(y)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

We are given: 
 fsa(x): “x is a finite state automaton” 
 pda(y): “y is a pushdown automaton” 
 equivalent(a, b): “a and b are equivalent” 
 We must formalize: 
 Each finite state automaton has an equivalent 
pushdown automaton 
 “Each finite state automaton …” 
 ∀x  (fsa(x)⇒… ) 
 “… has an equivalent pushdown automaton” 
 ∃y  (pda(y)∧equivalent(x,y)) 
 ∀x(fsa(x)⇒∃y(pda(y)∧equivalent(x,y))) 
 This corresponds exactly to: 
 (∀xfsa(x))⇒(∃ypda(y)∧equivalent(x,y)) 
 Interpreting properly with scope: 
 ∀x(fsa(x)⇒∃y(pda(y)∧equivalent(x,y))) 
 Why others are wrong: 
 (B) Wrong quantifier order (starts with ∀y). 
 (C) Says: for every x there exists y such that x is FSA 
AND y is PDA… 
 This incorrectly forces every x in the universe to be 
considered. 
 (D) Swaps arguments incorrectly (pda(x) instead of 
pda(y)).


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


P and Q are two propositions. Which of the 
following logical expressions are equivalent? 
 I. P∨¬Q  
 II. ¬ (¬P∧Q)  
 III. (P ∧ Q) ∨  (P∧ ¬Q) ∨ (¬P∧¬Q)  
 IV. (P∧ Q) ∨ (P∧¬Q) ∨ (¬P∧Q) 
 a) Only I and II 
 b) Only I, II and III 
 c) Only I, II and IV 
 d) All of I, II, III and IV


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

I and II are present in all options so need to check. 
 For III and IV 
 (P∧Q) V (P∧~Q) = P ∧ (Q V ~Q) (By distributive 
law) 
 =Ρ∧Τ 
 =P 
 For III. 
 PV (~P∧~Q) Ξ PV ~Q (By Absorption Law) 
 For IV. 
 PV (~P∧Q) Ξ PV Q (By Absorption Law) 
 So Option B is correct. 
 I, II, III are logically equivalent.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is the negation of 
[∀x,α→(∃y,β→(∀u,∃v,y))] 
 a) [∃x,α→(∀y,β→(∃u,∀v,y))] 
 b) [∃x,α→(∀y,β→(∃u,∀v,¬y))] 
 c) [∀x,¬α→(∃y,¬β→(∀u,∃v,¬y))] 
 d) [∃x,α∧(∀y,β∧(∃u,∀v,¬y))]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given : [∀x,α→(∃y,β→(∀u,∃v,y))] 
 Now, 
<!-- PAGE 625 -->
DISCRETE MATHEMATICS 
 = ∃x ¬[ α → ( ∃y [ β → ( ∀u ∃v y ) ] ) ] 
 = ∃x [ α ∧ ¬( ∃y [ β → ( ∀u ∃v y ) ] ) ] 
 = ∃x [ α ∧ ∀y ¬( β → ( ∀u ∃v y ) ) ] 
 = ∃x [ α ∧ ∀y ( β ∧ ¬( ∀u ∃v y ) ) ] 
 = ∃x [ α ∧ ∀y ( β ∧ ( ∃u ∀v ¬y ) ) ] 
 So, the correct answer is d.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following first-order formulae is 
logically valid? Here α(x) is a first-order formula 
with x as a free variable, and β is a first-order 
formula with no free variable. 
 a) [β→(∃xα(x))]→[∀x(β→α(x))] 
 b) [∃x (β→α(x)) ]→[ β→(∀x α(x)) ] 
 c) [(∃xα(x))→β]→[∀x(α(x)→β)] 
 d) [(∀xα(x))→β]→[∀x(α(x)→β)]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A. [β→(∃x α(x))]→[∀x (β→α(x))]  
 LHS: If β (some condition) is true, then there 
exists an x for which α(x) is true. 
 RHS: For all x, if β is true then α(x) is true. This is 
same as saying if β is true then for all x, α(x) is 
true. 
 (β ⇒ ∀x α(x)). 
 So, RHS ⇒ LHS and LHS ⇏ RHS. 
 B. [∃x (β→α(x))]→[β→(∀x α(x))] 
 LHS: There exists an x such that if β is true then 
α(x) is true. 
 RHS: If β is true then for all x, α(x) is true. 
 So, RHS ⇒ LHS and LHS ⇏ RHS. 
 C.[(∃x α(x))→β]→[∀x (α(x)→β)] 
 LHS: If there is an x such that α(x) is true, then β 
is true. 
 RHS: For all x, if α(x) is true, then β is true. 
 Here, both LHS and RHS are in fact same as β is a 
formula which is independent of x.(If β is true for 
one x, it is true for every x and vice versa.) 
 So,RHS ⇔ LHS. 
 D.[(∀x α(x))→β]→[∀x (α(x)→β)] 
 LHS: If α(x) is true for every x, then β is true. 
 RHS: For every x, if α(x) is true then β is true. 
 So, RHS ⇒ LHS and LHS ⇏ RHS. 
 So, answer here is option C. 
 Any of options A, B, or D could be valid if their 
implication is reversed. For option C, LHS and 
RHS being equivalent, even if the implication is 
reversed (or changed to double implies) it remains 
valid.


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let Graph(x) be a predicate which denotes that x is a 
graph. Let Connected(x) be a predicate which 
denotes that x is connected. Which of the following 
first order logic sentences DOES NOT represent the 
statement: "Not every graph is connected”?  
 a) ¬∀x (Graph(x) ⇒ Connected(x)) 
 b) ∃x (Graph(x) ∧ ¬ Connected(x)) 
 c) ¬ ∀x(¬ Graph(x) V Connected(x)) 
 d) ∀x (Graph(x)⇒ ¬ Connected(x))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Just writing to simplify each options 
 A)¬∀x( Graph(x)⟹ Connected(x)) 
 It is not the case that every graph then will be 
connected, which implies that some graph may be 
disconnected. 
  B)∃x( Graph(x)∧¬ Connected(x)) 
 There exists some graphs which are disconnected 
which implies not every graph is connected. 
 C)¬∀x(¬ Graph(x)∨ Connected(x)) 
 Here no need to express it in english just solve 
first using 
 de morgen's law we will get it as option B) 
 D)∀x( Graph(x)⟹¬ Connected(x)) 
 For all graph it is always disconnected...makes it 
FALSE


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of these first-order logic formulae is 
valid? 
 a) (∀x(P(x)⇒Q(x)))⇒((∀xP(x))⇒(∀xQ(x))) 
 b) (∃x(P(x)∨Q(x)))⇒((∃xP(x))⇒(∃xQ(x))) 
 c) (∃x(P(x)∧Q(x)))⇔((∃xP(x))∧(∃xQ(x))) 
 d) (∀x∃yP(x,y))⇒(∃y∀xP(x,y))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

A. LHS: For every x, if P holds then Q holds 
RHS: If P(x) holds for all x, then Q(x) holds for all 
x. 
LHS implies RHS but RHS does not imply LHS. 
B. LHS: An x exist for which either P(x) is true 
or Q(x) is true. 
RHS: If an x exist for which P(x) is true then another 
x exist for which Q(x) is true. 
LHS does not imply RHS, but on RHS if we change 
∃xP(x) to ~∃xP(x), implication becomes TRUE. 
C. LHS: There exist an x for which both P(x) and 
Q(x) are true. 
RHS: There exist an x for which P(x) is true and 
there exist an x for which Q(x) is true. 
LHS implies RHS but RHS does not imply LHS as 
the 'x' for P and Q can be different on the RHS 
D. LHS: For every x, there exist a y such that 
P(x, y) holds. 
RHS: There exist a y such that for all x P(x, y) 
holds. 
Here RHS implies LHS but LHS does not imply 
RHS as the y on LHS can be different for each x. 
So, the correct answer is A.


</details>

---


### Q43. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the first order predicate calculus 
statements given below correctly expresses the 
following English statement? 
 Tigers and lions attack if they are hungry or 
threatened. 
 a) ∀x[(tiger(x) ∧ lion(x)) → (hungry(x) V 
threatened(x)) → attacks(x)] 
 b) ∀x[(tiger(x) V lion(x)) → (hungry(x) V 
threatened(x)) ∧ attacks(x)]  
 c) ∀x[(tiger(x) V lion(x)) → attacks(x) → 
(hungry(x) V threatened(x))]  
 d) ∀x[(tiger(x) V lion(x)) → (hungry(x) V  
  threatened(x)) → attacks(x)]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

∀x [(tiger(x) ∨ lion(x) ) ∧  (hungry(x) ∨ 
threatened(x)) → attack(x)] 
 We can represent also in this way,because of 
 Exportation law : (P→ (Q→ R)) ≡ ((P ∧ Q) → R) 
 So, D is correct ans.  
 ∀x[(tiger(x) ∨ lion(x)) → {(hungry(x) ∨ 
threatened(x)) → attacks(x)}]


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following propositional statements: 
 P1: ((A ∧ B) → C) ≡ ((A → C) ∧ (B → C)) 
 P2: ((A ∨ B) → C) ≡ ((A → C) ∨ (B → C)) 
 Which one of the following is true? 
 a) P1 is a tautology, but not P2 
 b) P2 is a tautology, but not P1 
 c) P1 and P2 are both tautologies 
 d) Both P1 and P2 are not tautologies


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

P1: 
Let A = True, B = False 
LHS of P1 becomes True, but RHS becomes 
False 
Hence, P1 is not a tautology 
P2: 
The forward implication is true, but the reverse 
is not always true 
Let A = False, B = True, C = False 
RHS becomes True, but LHS becomes False 
Hence, P2 is not a tautology 
<!-- PAGE 626 -->
DISCRETE MATHEMATICS 
Simplification of LHS of P2: 
((A ∨ B) → C) 
≡ ¬(A ∨ B) ∨ C 
≡ (¬A ∧ ¬B) ∨ C 
≡ (¬A ∨ C) ∧ (¬B ∨ C) 
≡ (A → C) ∧ (B → C) 
Final Conclusion: 
Both P1 and P2 are not tautologies


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following first order logic formula in 
which R  is a binary relation symbol. 
 ∀x∀y (R(x,y) ⇒ R(y,x)) 
 The formula is 
 a) satisfiable and valid 
 b) satisfiable and so is its negation 
 c) unsatisfiable but its negation is valid 
 d) satisfiable but its negation is unsatisfiable


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The given relation represent the symmetry 
property. We have both symmetric relations 
possible as well as anti-symmetric but neither 
always holds for all sets. So they both are not 
valid but are satisfiable.  
 So, the correct answer is b.


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The set {1,2,3,5,7,8,9} under multiplication 
modulo 10 is not a group. Given below are four 
possible reasons. Which one of them is false? 
a) It is not closed 
b) 2 does not have an inverse 
c) 3 does not have an inverse 
d) 8 does not have an inverse


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

⊗10 1235789 
1 1235789 
2 2460468 
3 3695147 
5 5055505 
7 7415963 
8 8640642 
9 9875321 
 From the above composition table, it is clear that 1 
is the identity element. Hence, inverses exist only for 
some elements. 
1. it is not closed: true, because elements like 
0,4,6 ∉ the set {1,2,3,5,7,8,9} 
2. 2 doesn't have an inverse: true 
3. 3 does not have an inverse: false, inverse (3) =
4. 8 does not have an inverse: true. 
 So Option C is correct.


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A logical binary relation ⊙ is defined as follows: 
A B A⊙B 
True True True 
True False True 
False True False 
False False True 
Let ~ be the unary negation (NOT) operator, with 
higher precedence than ⊙. 
          Which one of the following is equivalent to A ∧ B? 
          a)       (~ A ⊙ B) 
          b)      ~ (A ⊙ ~ B) 
          c)       ~ (~ A ⊙ ~ B) 
          d)      ~ (~ A ⊙ B)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A ⊙ B ≡ B → A, i.e. (¬B ∨ A). 
 Now, let us look at Option D 
 ¬(¬A ⊙ B) 
≡ ¬(B → ¬A) 
≡ ¬(¬B ∨ ¬A) 
≡ B ∧ A 
 So, the answer is D.


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let P, Q, and R be three atomic propositional 
assertions. 
 Let X denote (P ∨ Q) → R and Y denote (P → R) ∨ 
(Q → R). 
 Which one of the following is a tautology? 
 a) X ≡ Y 
 b) X → Y 
 c) Y → X 
 d) ¬Y → X


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

X ≡ (P ∨ Q) → R 
 ≡ ¬(P ∨ Q) ∨ R 
 ≡ (¬P ∧ ¬Q) ∨ R 
 ≡ (¬P ∨ R) ∧ (¬Q ∨ R) 
 ≡ (P → R) ∧ (Q → R) 
 So, X → Y is true as (A ∧ B) → (A ∨ B) is always 
TRUE but reverse implication is not always true. 
 Hence, B is the correct answer.


</details>

---


### Q49. [GATE CSE – 2005 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is the first order predicate calculus statement 
equivalent to the following? 
 "Every teacher is liked by some student" 
 a) ∀x [teacher(x) → ∃y (student(y) → likes(y, x))] 
 b) ∀x [teacher(x) → ∃y (student(y) ∧ likes(y, x))] 
 c) ∃y ∀x [teacher(x) → (student(y) ∧ likes(y, x))] 
 d) ∀x [teacher(x) ∧ ∃y (student(y) → likes(y, x))]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Answer is Option B. In a simpler way we can say "If 
x is a teacher then there exists some y who is a 
student and likes x". 
 Option A choice:  If x is a teacher, then there exists a 
y such that if y is a student, then y likes x.  
Option C choice: There exists a student who likes all 
teachers. 
Option D choice: Everyone is a teacher and there 
exists a y such that if y is student then y likes x. 
Assuming one cannot be both student and teacher at 
same time, this just means, everyone is a teacher.


</details>

---


### Q50. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let P(x) and Q(x) be arbitrary predicates. Which 
of the following statements is always TRUE? 
 a) (∀x(P(x)∨Q(x)))⇒((∀xP(x))∨(∀xQ(x))) 
 b) (∀x(P(x)⇒Q(x)))⇒((∀xP(x))⇒(∀xQ(x))) 
 c) (∀x(P(x))⇒∀x(Q(x))))⇒(∀x(P(x)⇒Q(x))) 
 d) (∀x(P(x))⇔(∀xQ(x)))⇒(∀x(P(x)⇔Q(x))) 
GATE IT – 2005 MCQ (2-MARKS) 
<!-- PAGE 620 -->
DISCRETE MATHEMATICS


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

By digital logic method : Assume LHS as true based 
on some condition then try to make RHS false under 
some conditions and vice versa. 
 (A) (∀x(P(x)∨Q(x)))⇒((∀xP(x))∨(∀xQ(x))) 
 (P1∨Q1)∧(P2∨Q2)⇒(P1∧P2)∨(Q1∧Q2) 
     (T∨F)∧(F∨T)   ⇒  (T∧F)∨(F∧T) 
             T ⇒ F [false] 
 (C) ((∀x(P(x))⇒∀x(Q(x))))⇒(∀x(P(x)⇒Q(x))) 
 [P1⇒(Q1∧Q2)∧P2⇒(Q3∧Q4)]⇒[(P1⇒Q1)∧(P2⇒Q2)] 
        F ⇒ Anything∧T ⇒ T∧T  ⇒ F ⇒ Anything∧T ⇒ F 
           T ⇒ F [false] 
 (D) (∀x(P(x))⇔(∀xQ(x)))⇒(∀x(P(x)⇔Q(x))) 
 [(P1∧P2)⇔(Q1∧Q2)]⇒(P1⇔Q1)∧(P2⇔Q2) 
         T∧F⇔F∧F⇒ T⇔F ∧ F⇔F 
              T ⇒ F [false] 
 So, B is the correct answer as we can't make it false. 
<!-- PAGE 627 -->
GRAPH THEORY


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺(𝑉, 𝐸) be a simple, undirected graph. A vertex 
cover of 𝐺 is a subset 𝑉 ′ ⊆ 𝑉 such that for every 
(𝑢, 𝑣) ∈ 𝐸, 𝑢 ∈ 𝑉 ′or 𝑣 ∈ 𝑉 ′ . Let the size of the 
smallest vertex cover in 𝐺 be 𝑘. Let 𝑆 be any vertex 
cover of size 𝑘.  
 For a vertex 𝑣 ∈ 𝑉, which of the following 
constraints will always ensure that 𝑣 ∈ 𝑆 ? 
 a) The degree of 𝑣 is at least 𝑘 + 1 
 b) The vertex 𝑣 is on a path of length 𝑘 + 1 
 c) The vertex 𝑣 is on a cycle of length 𝑘 + 1  
 d) The vertex 𝑣 is a part of a clique of size k


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

We analyze each option given that: 
 G(V,E) is a simple undirected graph. 
 The minimum vertex cover size is k. 
 S is a vertex cover of size k (so S is a minimum 
vertex cover) 
 We want a condition that forces a vertex v to belong 
to every minimum vertex cover of size k. 
 Option (A) Degree(v) ≥k+1 
 If v ∉S, then all its n eighbors must be in S.  
But deg(v)≥k+1 means at least k+1 neighbors are 
needed in S, which is impossible since ∣S∣=k. 
So v must be included. 
 Option (B) On a path of length k+1 
 A path of length k+1 needs only about (k+1)/2 
vertices in a cover. Not forced. 
 Option (C) On a cycle of length k+1 
 A cycle needs about (k+1)/2 vertices. Not forced. 
 Option (D) In a clique of size k 
 A clique of size k needs only k−1 vertices in a 
cover. One vertex can be excluded.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺 be an undirected graph, which is a path on 8 
vertices. The number of matchings in 𝐺 is ______. 
(answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 34


**Step-by-Step Explanation:**

For a path on n vertices, the number of matchings 
follows: 
 M(n)=M(n−1)+M(n−2) 
 Reason: 
 Either the first vertex is not matched → reduce 
to path of n−1 
 Or it is matched with its neighbor → reduce to 
path of n−2 
 Base cases: 
 M(0)=1,M(1)=1 
 Compute sequentially: 
 M(2)=2 
M(3)=3 
M(4)=5 
M(5)=8 
M(6)=13 
M(7)=21 
M(8)=34 
 So, the final answer is 34.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a complete graph 𝐾𝑛 with 𝑛 vertices (𝑛 > 
4). Note that multiple spanning trees can be 
constructed over 𝐾𝑛. Each of these spanning trees 
is represented as a set of edges. The Jaccard 
coefficient between any two sets is defined as the 
ratio of the size of the intersection of the two sets 
to the size of the union of the two sets.  
 Which one of the following options gives the 
lowest possible value for the Jaccard coefficient 
between any two spanning trees of 𝐾𝑛?  
 a) 1/n 
 b) 1/(2n-3) 
 c) 0 
 d) 1/(n-1)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

 Each spanning tree of Kn has n−1 edges. 
 The Jaccard coefficient is 
 J=∣T1∩T2∣/∣T1∪T2∣ 
 To minimize J, we minimize the intersection. 
 In a complete graph Kn (with n>4), it is possible to 
construct two edge-disjoint spanning trees (they 
share no common edges). 
 So: 
 ∣T1∩T2∣=0 
 Hence, 
 J=0/(∣T1∪T2∣)=0 
 So, the answer is c.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The chromatic number of a graph is the minimum 
number of colours used in a proper colouring of the 
graph. The chromatic number of the following graph 
is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Theorem - graph is bipartite ⟷ graph has no odd 
length cycles notice that graph doesn't have any odd 
length cycles so graph is bipartite. 
 A bipartite graph with atleast 1 edge always has a 
chromatic number of 2.


</details>

---


### Q5. [GATE CSE – 2026 MSQ SET - 1(2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The chromatic number of a graph is the minimum 
number of colours used in a proper colouring of the 
graph. Let G be any graph with n vertices and 
chromatic number k. Which of the following 
statements is/are always TRUE?  
a) G contains a complete subgraph with k 
vertices. 
b) G contains an independent set of size at least 
n/k. 
 c) G contains at least k(k−1)/2 edges. 
 d) G contains a vertex of degree at least k.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C


**Step-by-Step Explanation:**

First Option is false because chromatic number 'k' not 
necessarily means that graph contains a clique on 'k' 
vertices. For example, Chromatic Number of a Cycle 
Graph on odd vertices is 3 but it doesn't contain any 
complete subgraph on 3 vertices. 
 Second Option is True by virtue of Pigeon -Hole 
Principle. If there are 'k' color classes and n vertices, 
then one color class size is atleast n/k. Note that, a 
color class is nothing but an independent set.  
 Third Option is True because minimum number of 
edges between k color classes is C(K,2) or 'k choose 
2' 
 Fourth Option is False because take a cycle graph on 
odd vertices, chromatic number is 3 but degree is not 
3 for any vertex. Similarly, for any complete graph, 
degree for every vertex is n-1 but chromatic number 
is n


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a simple, finite, undirected graph with 
vertex set {v1,...,vn}. 
 Let Δ(G) denote the maximum degree of G and let 
N = {1, 2,...} denote the set of all possible colors. 
Color the vertices of G using the following greedy 
strategy: 
 for i = 1,...,n 
 color(vi) ← min {j ∈ N : no neighbour of vi is 
colored j} 
 Which of the following statements is/are TRUE? 
 a) This procedure results in a proper vertex 
coloring of G. 
 b) The number of colors used in at most Δ (G) 
+ 1. 
 c) The number of colors used is at most Δ (G). 
 d) The number of colors used is equal to the 
chromatic number of G.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,B


**Step-by-Step Explanation:**

Greedy means Assign the colour only if required 
otherwise use the existing assigned colours. 
 So here colour is getting assigned only if none of the 
neighbours have that colour and that assigning 
happening in greedy mode. 
<!-- PAGE 636 -->
DISCRETE MATHEMATICS 
 So it'll result in proper vertex colouring of G and 
also at max Chromatic Number will be <= 1+ Max 
Degree (There is a theorem on this.)


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a simple undirected graph of 10 vertices. 
If the graph is disconnected, then the maximum 
number of edges it can have is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 36


**Step-by-Step Explanation:**

To make a disconnected graph with maximum 
edges, we can make a fully connected graph with 
(n-1) edges and isolate 1 vertex. 
 Now, no. of edges in fully connected graph with (n-
1) edges will be: (n-1)C2. 
 Therefore, the maximum possible number of edges 
is: 
 9C2=9*8/2=36


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G(V, E) be a directed graph, where V = {1, 2, 
3, 4, 5} is the set of vertices and E is the set of 
directed edges, as defined by the following 
adjacency matrix A. 
 A[i][j] = 1, 1 ≤ j ≤ i ≤ 5 
 A[i][j] = 0, otherwise 
 A[i][j] = 1 indicates a directed edge from node i to 
node j. A directed spanning tree of G, rooted at r ∈ 
V, is defined as a subgraph T of G such that the 
undirected version of T is a tree, and T contains a 
directed path from r to every other vertex in V. 
The number of such directed spanning trees rooted 
at vertex 5 is ____________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 24


**Step-by-Step Explanation:**

In a directed graph where edges only go from 
higher-numbered nodes to lower -numbered 
nodes, every node (except the root) must choose 
exactly one parent from the nodes higher than 
itself. Because edges only go downwards, 
choosing any higher node as a parent is 
guaranteed to form a valid tree without any 
cycles. 
Counting the Choices 
 Node 4 can only choose: 5 (1 choice) 
 Node 3 can choose: 4 or 5 (2 choices) 
 Node 2 can choose: 3, 4, or 5 (3 choices) 
 Node 1 can choose: 2, 3, 4, or 5 (4 choices) 
Multiply the independent choices together: 
 Total Trees = 1 × 2 × 3 × 4 = 24


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a simple undirected unweighted graph with 
at least three vertices. If A is the adjacency matrix of 
the graph, then the number of 3-cycles in the graph is 
given by the trace of ___.  
 a) A³ 
 b) A³ divided by 2 
 c) A³ divided by 3 
 d) A³ divided by 6


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Take a cycle graph on 3 vertices i.e. C₃. 
 Write the adjacency matrix A of C₃, find A³. The 
trace of A³ is 6, but we have only one 3-cycle (3 
length cycle) in C₃. 
 So, we have to divide the trace of A³ by 6 to find 
out the number of 3-cycles. That's our answer. 
Option A³ divided by 6 .


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the properties hold for the adjacency 
matrix A of a simple undirected unweighted graph 
having n vertices?  
 a) The diagonal entries of A² are the degrees of 
the vertices of the graph. 
 b) If the graph is connected, then none of the 
entries of An- ¹ + Iₙ can be zero. 
 c) If the sum of all the elements of A is at most 
2(n-1), then the graph must be acyclic. 
 d) If there is at least a 1 in each of A’s rows and 
columns, then the graph must be connected.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In an adjacency matrix, 
 the (i,j)th entry in AK denotes the number of walks 
of length k from i to j 
 so in A2 , the (i,i)th entry denotes the number of 
walks of length 2 from i to i i.e. the degree of the 
vertex 'i' 
 hence The diagonal entries of A² are the degrees of 
the vertices of the graph.


</details>

---


### Q11. [GATE CSE – 2023 MSQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following directed graph: 
 Which of the following is/are correct about the 
graph?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C


**Step-by-Step Explanation:**

• False, The graph does have a strongly connected 
component. 
• True, because of cycle in the bottom left corner of 
the graph. 
• True 
• False, not a strongly connected graph.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In an undirected connected planar graph G, there 
are eight vertices and five faces. The number of 
edges in G is_______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11


**Step-by-Step Explanation:**

|V| – |E| + |R| = 2 [According to Euler’s Formula] 
 Here, |V| = 8, |E| = ?, |R| = 5 
 8 – |E| + 5 = 2 
 |E| = 11


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a directed acyclic graph with a source vertex s, 
the quality-score of a directed path is defined to be 
the product of the weights of the edges on the 
path. Further, 
 for a vertex v other than s, the quality-score of v is 
defined to be the maximum among the quality-
scores of all the paths from s to v. The quality-
score of s is assumed to be 1. 
The sum of the quality-scores of all the vertices in 
the graph shown above is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 929


**Step-by-Step Explanation:**

Let Q(V) denote the quality-score of vertex V. 
 Q(S) = 1 (Given) 
 Q(C) = 1 (S → C) 
 Q(F) = 1 * 9 (S  → C  → F) 
 Q(A) = 9 (S  → A) 
 Q(D) = 9*1 (S  → A  → D) 
 Q(G) = 9 * 1 * 9 (S  → A  → D  → G) 
 Q(B) = 9 * 1 (S  → A  → B) 
 Q(E) = 9 * 1 * 9 (S  → A  → D  → E) 
 Q(T) = 9*1*9*9 (S  → A  → D  → E → T) 
 Sum of quality-score of all vertices, 
 = 1 + 1 + 9 + 9 + 9 + 81 + 9 + 81 + 729  
 = 929


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Graph G is obtained by adding vertex s to K 3,4 and 
making s adjacent to every vertex of K 3,4 . The 
minimum number of colours required to edge-colour 
G is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

In k 3,4 we have two sets with sizes as 3,4 (its a 
complete bipartite graph). 
 The vertex in the set having size 3 has 4 edges and is 
connected to the set having 4 vertices. So, the edge 
color of G is max(3,4) i.e. 4. 
 When a vertex is added to the graph having 7 
vertices ( K 3,4 has 7 vertices), we would be having 
7 edges associated to that new vertex.Now, as per 
the edge coloring 
 “no two adjacent edges have same color”. So,as the 
new vertex with 7 edges need to be colored with 7 
colors, the edge color of graph G is 7.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be an undirected complete graph on n vertices, 
where n > 2. Then, the number of different 
Hamiltonian cycles in G is equal to ____. 
 a) n! 
 b) 1 
 c) (n-1)! 
 d) (n-1)!/2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A Hamiltonian cycle is a cycle having a closed loop 
on a graph in which every node(vertex) is visited 
exactly once. 
 The Total number of Hamiltonian cycles in a 
Complete graph is given by: (n-1)!/2, where n is 
number of vertices in the graph. 
<!-- PAGE 637 -->
DISCRETE MATHEMATICS


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a graph with 100! vertices, with each 
vertex labelled by a distinct permutation of the 
numbers 1, 2, …, 100. 
 There is an edge between vertices u and v if and 
only if the label of u can be obtained by swapping 
two adjacent numbers in the label of v. Let y denote 
the degree of a vertex in G and z denote the number 
of connected components in G. Then, y + 10z = 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 109


**Step-by-Step Explanation:**

G is a graph with 100! vertices. Label of each 
vertex is obtained from a distinct permutation of 
numbers “1, 2, … 100”. 
 There exists an edge between two vertices iff the 
label of ‘u’ is obtained by swapping two adjacent 
numbers in the label of ‘v’. 
 The sets of the swapping numbers be (1,2) (2, 3) 
(3, 4) … (99,100). 
 The no. of such sets are 99 i.e., no. of edges = 99. 
 As this is regular graph, each vertex has ‘99’ 
edges correspond to it. 
 So, degree of each vertex = 99 = y. 
 As the vertices are connected, the number of 
components formed = 1 = z 
 y + 10z = 99 + 10(1) = 109


</details>

---


### Q17. [GATE CSE – 2021 NAT SET-1(1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The chromatic number of the following graph is 
_______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Chromatic number of the graph is “3”


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let T be a tree with 10 vertices. The sum of the 
degrees of all the vertices in T is___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 18


**Step-by-Step Explanation:**

We know that a Tree T with n vertices has n-1 
number of edges. So, Number of edges in T is : 
10-1 = 9. 
 Now, by Handshaking Lemma, Sum of Degree of 
vertices is equal to twice the number of edges , so 
2E = Sum of Degree. 
 Thus, Sum of degree = 2*9 = 18.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


G is an undirected graph with n vertices and 25 
edges such that each vertex of G has degree at 
least 3. Then the maximum possible value of n is 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 16


**Step-by-Step Explanation:**

An undirected graph ‘G’ is given with ‘n’ vertices 
& 25 edges. 
 Degree of each vertex ≥ 3 
 Sum of degree vertices = 2 (no. of edges) 
 So, |v| = 2|E| 
 The relation Between max and min degree of a 
graph is given by: 
 m ≤ 2|E| / |v| ≤ M 
 Given minimum degree = 3. 
 So, 3 ≤2 |E| / |v| 
 3|v| ≤ 2|E| 
 3(n) ≤ 2(25) 
 n ≤ 50/3 
 n ≤ 16.6 
 So, n = 16


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The minimum number of colours that is sufficient 
to vertex-colour any planar graph is ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

The 4-colour theorem states that we require at most 
4 colors to color any planar graph. 
 Here it asks about the sufficient number of colors. 
So, we can color any planar graph with the 4 colors 
in the worst case.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a connected planar graph with 10 
vertices. If the number of edges on each face is 
three, then the number of edges in G is 
_______________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 24


**Step-by-Step Explanation:**

By Euler formula for connected planar graph, 
n − e + f = 2 
10 − 3f/2 + f = 2 (An edge is part of two faces) 
f/2 = 8 
f = 16 
e = 3f/2 = 24


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a connected graph, a bridge is an edge whose 
removal disconnects a graph. Which one of the 
following statements is true? 
 a) A tree has no bridges 
 b) A bridge cannot be part of a simple cycle 
 c) Every edge of a clique with size > = 3 is a 
bridge (A clique is any complete sub graph 
of a graph) 
 d) A graph with bridges cannot have a cycle


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Since, every edge in a tree is a bridge 
 ∴ Option (A) is not True. 
 As, every edge in a complete graph kn (n≥3) is not a 
bridge ⇒ 
 ∴ (C) is not True. 
 Let us consider the graph G: 
 The given graph has a bridge i.e., edge ‘e’ 
 and a cycle of length ‘3’. 
 So, (D) is not True. 
 Since, in a cycle every edge is not a bridge 
 ∴ (B) is true and is the correct answer.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A graph is self-complementary if it is isomorphic to 
its complement. For all self-complementary graphs 
on n vertices, n is ____.  
 a) A multiple of 4 
 b) Even 
 c) Odd 
 d) Congruent to 0 mod 4, or, 1 mod 4


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

We have been given an n vertex self-complementary 
graph. 
 Now, an n vertex graph which is self complementary 
has exactly half the number of edges of the complete 
graph, i.e.,it has n(n-1)/4 number of edges. 
 Since n(n – 1) must be divisible by 4, n must be 
congruent to 0 or 1 modulus 4. 
<!-- PAGE 638 -->
DISCRETE MATHEMATICS


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G = (V,E) be a directed graph where V is the set 
of vertices and E the set of edges. Then which one of 
the following graphs has the same strongly 
connected components as G?  
 a) G1 =(V, E1 ) where E1 ={(u,v) | (u,v) ∉ E} 
 b)  G2 =(V,E2 ) where E2 ={(u,v)│(v,u) ∈ E} 
 c) G3 =(V,E3 ) where E3 ={(u,v) | there is a path 
of length ≤2 from u to v in E} 
 d) G4 =(V4 ,E) where V4 is the set of vertices in 
G which are not isolated


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

G(V, E) is a directed graph. 
 A) G1 =(V,E1 ) where E1 ={(u,v)|(u,v)∉E} 
 If (u, v) does not belong to the edge set ‘E’, then it 
indicates there are no edges present. So, it is not 
connected. 
 B) G2 =(V,E2 )where E2 ={(u,v)│(v,u)∈E} 
 Given that ‘G’ is a directed graph, i.e., it has path 
from each vertex to every other vertex in the 
graph. 
 Though here direction is changed from (u,v) to (v, 
u), it is still a connected component and is same as 
‘G’. 
 C) G3 =(V,E3 ) where E3 ={(u,v) | there is a path of 
length≤2 from u to v in E} 
 This is not always true. 
 it can add extra edges. 
 D) G4 =(V4 ,E) where V4 is the set of vertices in G 
which are not isolated. 
 If ‘G’ has same ‘x’ number of isolated 
 vertices, one strongly connected component then 
no. of SCC = x + 1 
 G4 contain only ‘1’ component, which is not same 
as G.


</details>

---


### Q25. [GATE CSE – 2017 NAT SET - 1(1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the directed graph given below. 
 Which one of the following is TRUE?  
 a) The graph does not have any topological 
ordering. 
 b) Both PQRS and SRQP are topological. 
 c) Both PSRQ and SPRQ are topological 
orderings. 
 d) PSRQ is the only topological ordering.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

No cycles are there in the graph, so topological 
orderings do exist. 
 We can consider P & S as starting vertex, 
followed by R & Q. 
 Hence, PSRQ & SPRQ are the topological 
orderings.


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A cycle on n vertices is isomorphic to its 
complement. The value of n is  _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

According to Complement of a graph, we need to 
remove the existing edges from the graph and place the 
new edges which were not present in the actual graph. 
 In a cycle of n vertices, each vertex is connected to the 
other two vertices. So each vertex’s degree is 2. 
 When we complement it, each vertex will be connected 
to the remaining n-3 vertices (one is self and two other 
vertices in the actual graph). 
 As given in the question, 
 n-3 =2 
 n = 3 + 2 
 n = 5 
 Cycle of 5 vertices is  
Graph – 1 
 Complement of the above graph 1 is 
Graph - 2 
 Graph 1 and Graph 2 are complements of each other. 
 So, the value of n is 5. 
    OR 
Given the graph is cyclic what we can deduce is that the 
number of vertices= number of edges=n 
Now, it is isomorphic to its complement so no. of edges in 
its complement graph will also be n . 
No. of edges in graph G + No. Of edges in graph G′ = no. 
Of edges in the complete graph (
𝑛(𝑛−1)
2 ). 
𝑛 + 𝑛 = 𝑛(𝑛 − 1)2
2𝑛 = 𝑛(𝑛 − 1)2
4𝑛 = 𝑛(𝑛 − 1)
4𝑛 = 𝑛2 − 𝑛
𝑛2 − 5𝑛 = 0
𝑛(𝑛 − 5) = 0
𝑛 = 5


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider an undirected random graph of eight 
vertices. The probability that there is an edge 
between a pair of vertices is 1/2. What is the 
expected number of unordered cycles of length 
three?  
 a) 1/8 
 b) 1 
 c) 7 
 d) 8


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

1. Find the total number of possible 3-cycles 
A cycle of length three is formed by choosing any 3 
distinct vertices out of the total 8 vertices available in the 
graph. 
The number of ways to choose 3 vertices from 8 is given 
by the combination formula (𝑛𝑟) : 
(83) = 8 × 7 × 63 × 2 × 1 = 56 
<!-- PAGE 639 -->
DISCRETE MATHEMATICS 
So, there are 56 potential 3 -cycles in the graph. 
     2.  Find the probability that a specific 3-cycle exists 
For any specific set of 3 vertices to form a cycle, all 3 
edges connecting them must exist simultaneously. 
 The probability of any single edge existing is 𝑃(𝑒) =
2. 
 Since edge existences in a standard random graph 
(Erdös-Rényi model) are independent events, we 
multiply the individual probabilities: 
𝑃( all 3 edges exist ) = (12) × (12) × (12) = 18 
3. Calculate the Expected Value 
By the linearity of expectation, the total expected 
number of 3 -cycles is the total number of potential 
cycles multiplied by the probability that any single one 
exists: 
𝐸[𝑋] =  Total potential cycles × 𝑃 (cycle exists) 
𝐸[𝑋] = 56 × 18 = 7


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The line graph L(G) of a simple graph G is 
defined as follows: 
 There is exactly one vertex v(e) in L(G) for each 
edge e in G. 
 For any two edges e and e' in G, L(G) has an edge 
between v(e) and v(e'), if and only if e and e' are 
incident with the same vertex in G. 
 Which of the following statements is/are TRUE? 
 (P) The line graph of a cycle is a cycle. 
 (Q) The line graph of a clique is a clique. 
 (R) The line graph of a planar graph is planar. 
 (S) The line graph of a tree is a tree.  
 a) P only 
 b) P and R only 
 c) R only 
 d) P, Q and S only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

P) True. 
 Because every edge in the cycle graph will 
become a vertex in the new graph L(G) and every 
vertex of cycle graph will become an edge in the 
new graph. 
 R) False. 
 We can give an counter- example. Let a graph G 
has 5 vertices and 9 edges and it is planar. Assume 
degree of one vertex is 2 and of all others are 4. 
Now, L(G) has 9 vertices (because G has 9 edges) 
and 25 edges. But for a graph to be planar, 
 |E| ≤ 3|v| - 6 
 For 9 vertices |E| ≤ 3 × 9 - 6 
 ⇒ |E| ≤ 27 - 6 
 ⇒ |E| ≤ 21. 
 But L(G) has 25 edges and so is not planar. 
 As option (R) is false, option (B) & (C) are 
eliminated.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are TRUE for 
undirected graphs? 
 P: Number of odd degree vertices is even. 
 Q: Sum of degrees of all vertices is even.  
 a) P only 
 b) Q only 
 c) Both P and Q 
 d) Neither P nor Q


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

P is true: For undirected graph as adding an edge 
always increases degree of two vertices by 1. 
 Q is true: If we consider sum of degrees and 
subtract all even degrees, we get an even number 
because every edge increases the sum of degrees 
by 2. So total number of odd degree vertices must 
be even.


</details>

---


### Q30. [GATE CSE – 2014 NAT (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following graphs is isomorphic to 
 a)  
 b)  
 c)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

(A) 3-cycle graph not in original one. 
(B) is the correct graph as we have 5-cycles & max 
degree is 4. 
(C) As the Original graph doesn’t have a degree of 
3, so it is incorrect. 
 (D) 4-cycles not in original one.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a complete undirected graph on 6 
vertices. If vertices of G are labelled, then the 
number of distinct cycles of length 4 in G is equal 
to ____.  
 a) 15 
 b) 30 
 c) 45 
 d) 360


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

There can be total 6C4 ways to pick 4 vertices from 
6. The value of 6C4 is 15.  
 Note that the given graph is complete so any 4 
vertices can form a cycle.  
 There can be 6 different cycle with 4 vertices. For 
example, consider 4 vertices as a, b, c and d. The 
three distinct cycles are  
 cycles should be like this  
  (a, b, c, d,a)  
  (a, b, d, c,a)  
  (a, c, b, d,a)  
  (a, c, d, b,a)  
  (a, d, b, c,a)  
  (a, d, c, b,a)  
  and  
 (a, b, c, d,a) and (a, d, c, b,a)  
 (a, b, d, c,a) and (a, c, d, b,a)  
 (a, c, b, d,a) and (a, d, b, c,a)  
 are same cycles.  
 So total number of distinct cycles is (15*3) = 45.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a simple undirected planar graph on 10 
vertices with 15 edges. If G is a connected graph, 
then the number of bounded faces in any 
embedding of G on the plane is equal to ____. 
 a) 3 
 b) 4 
 c) 5 
 d) 6


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

As the given graph is planar, then we have to 
consider Euler’s formula which is: 
 v-e+f=2 
 Given 10 vertices & 15 edges, so 
 10-15+f=2 
 f=2+15-10 
 f=7 
 There will be an unbounded face always. 
 So, the number of bounded faces = 6.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


K4 and Q3 are graphs with the following 
structures. 
 Which one of the following statements is TRUE in 
relation to these graphs?  
 a) K4 is planar while Q3 is not 
 b) Both K4 and Q3 are planar 
 c) Q3 is planar while K4 is not 
 d) Neither K4 nor Q3 is planar


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

A Graph is said to be planar if it can be drawn in a 
plane without any edges crossing each other.  
<!-- PAGE 640 -->
DISCRETE MATHEMATICS


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G = (V, E) be a graph. Define ξ(G) = Σ id *d, 
where id is the number of vertices of degree d in G. 
If S and T are two different trees with ξ(S) = ξ(T), 
then 
 a) |S| = 2|T| 
 b) |S| = |T| - 1 
 c) |S| = |T| 
 d) |S| = |T| + 1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Sum of degrees in a graph = 2|E|, as each edge 
contributes two to the sum of degrees. So, when 
the sum of degrees is the same, the number of 
edges must also be the same. 
 Trees with equal no of edges will have equal no of 
vertices as :  
 No of Edges = No of vertices - 1 (in a tree.) 
 So, should be |S| = |T|


</details>

---


### Q35. [GATE CSE – 2012 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The degree sequence of a simple graph is the 
sequence of the degrees of the nodes in the graph in 
decreasing order. Which of the following sequences 
can not be the degree sequence of any graph? 
 I) 7,6,5,4,4,3,2,1 
 II) 6,6,6,6,3,3,2,2 
 III) 7,6,6,4,4,3,2,2 
 IV) 8,7,7,6,4,2,1,1 
 a) I and II 
 b) III and IV 
 c) IV only 
 d) II and IV


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

By Havel–Hakimi Theorem we can check the 
graphical sequence : 
 I.  7, 6, 5, 4, 4, 3, 2, 1 
  →5, 4, 3, 3, 2, 1, 0 
   → 3, 2, 2, 1, 0, 0  
  → 1, 1, 0, 0, 0 
  →0, 0, 0, 0 so it is graphical. 
 II. 6, 6, 6, 3, 3, 2, 2  
  → 5, 5, 5, 2, 2, 1, 2 (arrange in descending 
order)  
  → 5, 5, 5, 2, 2, 2, 1 
  → 4, 4, 1, 1, 1, 1  
  → 3, 0, 0, 0, 1  
  we cannot continue to get all 0's, so it is not 
graphical. 
 III. 7, 6, 6, 4, 4, 3, 2, 2 
  → 5, 5, 3, 3, 2, 1, 1  
  → 4, 2, 2, 1, 1, 0  
  → 1, 1, 0, 0, 0  
  → 0, 0, 0, 0  
  so it is graphical. 
 IV. 8, 7, 7, 6, 4, 2, 1, 1, here degree of a vertex 
is 8 and total number of vertices are 8, 
which is impossible, hence it is not 
graphical. 
 Hence, only option (I) and (III) are graphic 
sequence and answer is option-(D)


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the chromatic number of an n-vertex 
simple connected graph which does not contain 
any odd length cycle ? Assume n ≥ 2. 
 a) 2 
 b) 3 
 c) n-1 
 d) n


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

A simple connected graph with no odd-length cycle 
is, by definition, a bipartite graph. 
 A graph contains no odd cycle if and only if it is 
bipartite. 
 In a bipartite graph: 
 The vertex set can be divided into two disjoint 
sets 
 No two vertices within the same set are adjacent 
 Therefore, it can be properly colored using only 2 
colors 
 Since the graph is: 
 Simple 
 Connected 
 Has n ≥ 2 vertices 
 Contains no odd cycle 
 It must be a connected bipartite graph, and any 
connected bipartite graph with at least one edge 
requires exactly 2 colors.


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is TRUE for any 
simple connected undirected graph with more than 
2 vertices? 
 a) No two vertices have the same degree. 
 b) At least two vertices have the same degree. 
 c) At least three vertices have the same degree. 
 d) All vertices have the same degree.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

There are n vertices and at least (n-1) edges. So, for 
each vertex, the degree should range from 1 (since 
the graph is connected) to (n-1) (since the graph is 
simple). 
 But we have n such vertices- filling n things with (n-
1) numbers. 
 ⌈
𝑛
𝑛−1⌉ = ⌈1. ~⌉ = 2 
So, at least 2 of them must be equal (pigeonhole 
principle)


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is true for 
every planar graph on n vertices? 
 a) The graph is connected 
 b) The graph is Eulerian 
 c) The graph has a vertex-cover of size at most 
3n/4 
 d) The graph has an independent set of size at 
least n/3


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A) Incorrect. Consider the following disconnected 
planar graph. 
 B) Incorrect. A graph is Eulerian if all its vertices 
have even degree, but a planar graph can have 
vertices with odd degree. 
 C) Correct. Any planar graph can be vertex-colored 
with at most 4 colors (by the 4-color theorem) such 
that no two adjacent vertices have the same color. 
<!-- PAGE 641 -->
DISCRETE MATHEMATICS 
 Consider a planar graph with nnn vertices having 
chromatic number 4. Then we have at most 4 sets 
of vertices, one for each color, each having size 
n/4 (assuming they are evenly distributed). If we 
remove one set, the remaining vertices still include 
at least one endpoint of every edge. Hence, we 
obtain a vertex cover of size 
 n−(n/4)=3n/4. 
 D)  Incorrect. Consider the K4 graph. It has an 
independent set of size 1, which is less than 4/3.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


G is a simple undirected graph. Some vertices of 
G are of odd degree. Add a node v to G and make 
it adjacent to each odd degree vertex of G. The 
resultant graph is sure to be 
 a) Regular 
 b) Complete 
 c) Hamiltonian 
 d) Euler


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In any simple undirected graph, total degree of all 
vertices is even (since each edge contributes 
2 degrees). So number of vertices having odd 
degrees must be even, otherwise their sum would 
have been odd, making total degree also odd. 
 Now Single vertex v is connected to all these even 
number of vertices (which have odd degrees). So 
degree of v is also even. Moreover, now degree of 
all vertices which are connected to v is increased 
by 1, hence vertices which had odd degree earlier 
now have even degree. 
 So now, all vertices in graph have even degree, 
which is necessary and sufficient condition for 
euler graph. So (D) is correct.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the chromatic number of the following 
graph? 
 a) 2 
 b) 3 
 c) 4 
 d) 5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The chromatic number of a graph is the smallest 
number of colors needed to color the vertices so 
that no two adjacent vertices share the same color. 
 Hence minimum number of colors needed to color 
given graph is equal to 3 
 For odd length cycles we need minimum 3 colors for 
vertex coloring and for even length cycles we need 
just 2.  
 So, the correct answer is b.


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be the non-planar graph with the minimum 
possible number of edges. Then G has 
 a) 9 edges and 5 vertices 
 b) 9 edges and 6 vertices 
 c) 10 edges and 5 vertices 
 d) 10 edges and 6 vertices


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Non planar graph with smallest number of edges is 
K3,3; it has 9 edges and 6 vertices 
 K5 is also non planar but it has 10 edges and 5 
vertices.


</details>

---


### Q42. [GATE CSE – 2009 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following graphs has an Eulerian 
circuit?  
 a) Any k-regular graph where k is an even 
number. 
 b) A complete graph on 90 vertices.  
 c) The complement of a cycle on 25 vertices.  
 d) None of the above.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A connected graph  G has an Eulerian circuit if and 
only if every vertex in the graph has an even degree.  
 Option A:In a k-regular graph: 
 Every vertex has degree k. 
 If k is even → all vertices have even degree. 
 If the graph is connected, it is Eulerian. 
 However, the option does not guarantee 
connectivity. 
 A disconnected k-regular graph (with multiple 
components) would not have a single Eulerian 
circuit. 
 So this is not always true. 
 Option B: 
 For a complete graph Kn: 
 Each vertex has degree n−1. 
 Here: 
 n=90⇒degree=89 
 Since 89 is odd, all vertices have an odd degree. 
 So no Eulerian circuit. 
 Option C: 
 Cycle C25: 
 Each vertex has degree 2. 
 In complement: 
 Total possible degree = 24 
 So complement degree: 
 24−2=22 
 Every vertex has degree 22 (even). 
 Also, the complement of C25 (for n≥5) is 
 connected. 
 Thus: 
 Connected 
 All degrees even 
 Eulerian circuit exists. 
 Option D: 
 Incorrect since (c) works. 
 So, the correct answer is C 
<!-- PAGE 642 -->
DISCRETE MATHEMATICS


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the undirected graph G defined as 
follows. The vertices of G are bit strings of length 
n. We have an edge between vertex u and vertex v 
if and only if u and v differ in exactly one bit 
position (in other words, v can be obtained from u 
by flipping a single bit). The ratio of the chromatic 
number of G to the diameter of G is 
 a) 1/2n-1 
 b) 1/n 
 c) 2/n 
 d) 3/n


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Bipartite graph:- 
 A bipartite graph is a graph G(V,E) where vertices 
can be decomposed into two disjoint sets such that 
no two vertices within the same set are adjacent. 
 Diameter of a graph:- 
 The longest shortest path in between any two 
vertices of a graph The given graph is a bipartite 
graph => chromatic number is equals to 2 The 
diameter of graph is equals to n because at most 
we need to traverse n-1 edges. The ratio = 2/n. 
 So, the correct answer is c.


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


If all the edge weights of an undirected graph are 
positive, then any subset of edges that connects all 
the vertices and has minimum total weight is a 
 a) Hamiltonian cycle 
b) grid 
c) hypercube 
d) tree


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Hamiltonian cycle : This is a cycle. A cycle will 
not only connect all vertices, it will have 1 extra 
edge than necessary. So I can just remove that 
edge & get better cost "subset of edges" which 
connect all vertices. So, this is FALSE. 
grid : A grid graph has cycles and so this is 
FALSE for same reason as option A. 
Hypercube : A hypercube graph also has cycles. 
So, this also is FALSE. 
Tree : This is answer. We need to have Minimum 
spanning tree to be exact. 
"If all the edge weights of an undirected graph are 
positive, then any subset of edges that connects all 
the vertices and has minimum total weight is a 
Minimum Spanning Tree". 
So, the correct answer is tree


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a  simple connected planar graph with 13 
vertices and 19 edges. Then, the number of faces in 
the planar embedding of the graph is: 
 a) 6 
 b) 8 
 c) 9 
 d) 13


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The number of faces in the planar embedding of 
the graph is 
 f=e-n+(k+1) 
 f=number of faces, 
 e=number of edges, 
 n=number of vertices, 
 k=number of connected components, 
 for connected graph k=1, so 
 f=e-n+(1+1) 
 f=e-n+2 
 f=19-13+2 
f=8


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let G be a simple graph with 20 vertices and 100 
edges. The size of the minimum vertex cover of G 
is 8. Then, the size of the maximum independent set 
of G is: 
 a) 12 
 b) 8 
 c) less than 8 
 d) more than 12


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Vertex cover: A set  of vertices such that each 
edge of the graph is incident to at least one vertex 
of the set. 
Therefore, removing all the vertices of the vertex 
cover from the graph results in an isolated graph 
and the same set of nodes would be the independent 
set in the original graph. 
 Size of minimum vertex cover = 8 
Size of maximum independent set = 20-8 =12 
Therefore, the correct answer would be (A).


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following graphs is NOT planar? 
 a) G1 
 b) G2 
 c) G3 
 d) G4


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

We can form a planar graph for all except G1. Hence 
G1 is not a planar graph.


</details>

---

