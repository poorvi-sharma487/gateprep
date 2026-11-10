# Algorithms


> **Subject:** Algorithms  

> **Pages in Book:** 95–150  

> **Total Modules:** 7


## Topics in this Subject


## Topic 1: ALGORITHMS


### Q1. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following recurrence relations: 
For all 𝑛>1, 
T1(𝑛)=4𝑇1(𝑛/2)+𝑇2(𝑛) 
T2(𝑛)=5𝑇2(𝑛/4)+Θ(log2𝑛) 
Assume that for all 𝑛≤1, 𝑇1(𝑛)=1 and 𝑇2(𝑛)=1. 
Which one of the following options is correct? 
a) 𝑇1(𝑛)=θ(𝑛2) 
b) 𝑇1(𝑛)=θ(𝑛2log2𝑛) 
c) 𝑇1(𝑛)=θ(𝑛log4 5) 
d) 𝑇1(𝑛) = Θ(𝑛log4⁡5log2⁡𝑛)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** Answer : (A


</details>

---


### Q4. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following recurrence relation: 
T(n)=2T(n−1)+ n2n for n>0, T(0)=1 
Which ONE of the following options is CORRECT? 
a) T(n)=θ(n22n) 
b) T(n)=θ(n2n) 
c) T(n)=θ((logn)22n) 
d) T(n)=θ(4n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

T(n) = 2T(n - 1) + n.2n 
= 2[2T(n - 2) + (n - 1). 2{n - 1}] + n . 2n 
=2kT(n - k) + 2n[(n - (k - 1)) + (n - (k - 2)) + ........ + n] 
n-k=0 
=2n+2n[1+2+…+n ] 
= O(n2.2n)


</details>

---


### Q2. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Which of the following can be recurrence  
relation(s) corresponding to an algorithm with time 
complexity O(n)? 
a) T(n)=T(n-1) +1, T(1)=1 
b) T(n)=2T(n/2)+1 , T(1)=1 
c) T(n)=2T(n/2)+n , T(1)=1 
d) T(n)=T(n-1)+n , T(1)=1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B)


**Step-by-Step Explanation:**

A) T(n)=O(n) T(n)= 1+1+1 .... 1 (n times) 
B) T(n)=O(n) //apply master theorem 
C) T(n)=O(nlogn) //Master theorem 
D) T(n)=O(n2)=n+(n-1)+(n-2)+ ...... +1


</details>

---


### Q3. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following functions, where n is a 
positive integer. 
n1/3 , logn , log(n!) , 2logn 
Which one of the following options lists the 
functions in increasing order of asymptotic growth 
rate? Note: Assume the base of log to be 2. 
a) logn , n1/3 , 2logn , log(n!) 
b) n1/3 , logn , log(n!) , 2logn 
c) logn , n1/3 , log(n!) , 2logn 
d) 2logn , n1/3 , logn , log(n!)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

 log(n): This is a standard logarithmic growth 
rate. 
 n1/3: This is a polynomial (specifically, a cube 
root) growth rate. 
Take log both the side 
log(logn) | log(n1/3) 
log(Logn) | logn 
 2log(n): Using the logarithmic identity aloga(x) = 
x, this simplifies to n.=O(n) 
 log(n!): Using Stirling's approximation, log(n!) 
approx nlogn . Therefore, its asymptotic 
growth is 𝜃(nlog n).


</details>

---


### Q5. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following recurrence relation: 
𝑇(𝑛) = {√𝑛 ⋅ 𝑇(√𝑛) + 𝑛 for 𝑛 ≥ 1 1 for 𝑛 = 1 
Which one of the following options is CORRECT? 
a) T(n) = θ(nloglogn) 
b) T(n) = θ(n2logn) 
c) T(n) = θ(nlogn) 
d) T(n) = θ(n2loglogn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

𝑇(𝑛) = √𝑛𝑇(√𝑛) + 𝑛 
𝑇(𝑛) 
𝑛 
𝑇(√𝑛) 
=  + 1 
√𝑛 
𝑆(𝑛) = 𝑆(√𝑛) + 1 
𝑆(2𝑘) = 𝑆(2𝑘/2) + 1 
𝑄(𝑘) = 𝑄(𝑘/2) + 1 
𝑄(𝑘) = 𝜃(log 𝑘) 
⟹ 𝑆(2𝑘) = 𝜃(log 𝑘) 
⟹ 𝑆(𝑛) = 𝜃(log log 𝑛) 
⟹ 𝑇(𝑛) = 𝜃(𝑛log log 𝑛) 
1.(a) 2.(a,b) 3.(a) 
4.(a) 5.(a) 6.(d) 
7.(a,c) 8.(a,d) 9.(a) 
10.(a) 11.(c) 12.(b) 
13.(b) 14.(b) 15.(c) 
16.(b) 17.(2.32) 18.(d) 
19.(d) 20.(a) 21.(c) 
22.(110) 23.(a) 24.(b) 
25.(c) 26.(a) 27.(a) 
28.(d) 29.(a) 30.(a) 
31.(b) 32.(a) 33.(a) 
34.(c) 35.(d) 36.(c) 
37.(b) 38.(c) 39.(d) 
40.(b)   
GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 104 -->
ALGORITHMS 
 10   9 
)


</details>

---


### Q6. [GATE CSE – 2026 SET-2 MCQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Let T(n) be the recurrence relation defined as 
follows: 
T(0) = 1, 
T(1) = 2 and 
T(n) = 5T(n − 1) − 6T(n − 2) for n ≥ 2 
Which one of the following statement is TRUE? 
a) T(n) = θ(n·3ⁿ) 
b) T(n) = θ(n·2ⁿ) 
c) T(n) = θ(3ⁿ) 
d) T(n) = θ(2ⁿ)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ( D )


**Step-by-Step Explanation:**

T(n) = 5T(n - 1) - 6T(n - 2) 
Generating function: 
Substituting T( n) = tn 
tn- 5tn-1- 6tn-2 
Dividing the eqn by tn−2, 
Answer : C 
11 Take log on all 
functions log(10n ), 
log(n logn ), logn✓n 
⇒⁡n, logn, logn, ✓nlogn 
⇒ f 2 < f 3 < f 1 
we get 12. Answer : B 
𝑡2 = 5𝑡 − 6 
𝑛 2𝑛 
𝑇(𝑛) = 𝑇 ( ) + 𝑇 ( ) + 7𝑛 
2 5 
𝑡2 − 5𝑡 + 6 = 0 
Roots = 2, 3 
T(n) = C₁·2ⁿ + C₂·3ⁿ 
T(0) = 1 
T(1) = 2 
Since, 𝑛 > 2 5𝑛, So, the height of the rightmost subtree will determine the 
lower bound of the given recurrence, and the height of the leftmost subtree 
will determine the upper bound of the given recurrence. 
Height of the leftmost subtree is: log2 𝑛 and so, 
1 = C₁ + C₂ 9 9  2 9 log2 n 
T(n) ≤ 7n + 7 (  ) n + 7 (  ) n + ⋯ + 7 (  ) n 
2 = 2C₁ + 3C₂ 
C₁ = 1, C₂ = 0 
10 10 
9 9  2 
9 log2 n 
⇒ T(n) ≤ 7n (1 + + ( ) + ⋯ + ( ) ) 
T(n) = 1 × 2ⁿ + 0 × 3ⁿ 10 10 10 
T(n) = 2ⁿ 1 − ( 9 )log2 n+1 
⇒ T(n) ≤ 7n ( ) = 70n (1 − (  ) 
log2 n+1 
)


</details>

---


### Q7. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Let f and g be functions of natural numbers given  
by f(n)=n and g(n)=n 2. Which of the following 
statements is/are TRUE? 
a) f ∈ O(g) 
b) f ∈ ω(g) 
c) f ∈ o(g) 
d) f ∈ θ(g)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,C.


**Step-by-Step Explanation:**

f(n)∈O(g(n)) iff f(n) asymptotically smaller or 
= 70n − 70n (n 
log  9  9 
9 10 
0.85 
equal to g(n) 
f(n)∈o(g(n)) iff f(n) asymptotically smaller than g(n) 
f(n)∈Ω(g(n)) iff f(n) asymptotically greater or 
10) = 70n − 63n 
⇒ T(n) ≤ 70n 
⇒ T(n) ∈ O(n)


</details>

---


### Q10. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


For constants a ≥ 1 and b > 1, consider the 
following recurrence defined on the non-negative 
integers: 
T(n) = a T (n/b) + f(n) 
Which one of the following options is correct about 
the recurrence T(n) ? 
a) f(n) is O(nlog (a)-∈) for some ∈>0, then T(n) is 
T(n)=Θ(n log (a)) 
b) If f(n) is n/log2(n), then T(n) is Θ(log2(n)) 
c) If f(n) is Θ(nlogb (a)), then T(n) is Θ(nlogb (a)) 
d) If f(n) is n log2(n), then T(n) is Θ(nlog2(n))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A .


**Step-by-Step Explanation:**

If we take a=2, b=2 apply extended master’s theorem 
we get option B, C, D wrong. Option A is correct. 
= T(𝑛1/𝑎𝑘  + k 
1 − 
∈Θ(g(n)) iff f(n) asymptotically equal to g(n) 
Given, f(n)=n, g(n)=n2 
𝑇(𝑛) ≤ 7𝑛 + 7 ( 910) 𝑛 + 7 ( 910)2 𝑛 + ⋯ + 7 ( 910)log2⁡𝑛 𝑛
⁡⇒ 𝑇(𝑛) ≤ 7𝑛 (1 + 910 + ( 910)2 + ⋯ + ( 910)log2⁡𝑛)
⁡⇒ 𝑇(𝑛) ≤ 7𝑛 (
1 − ( 910)log2⁡𝑛+1
1 − 910 ) = 70𝑛 (1 − ( 910)log2⁡𝑛+1)
⁡= 70𝑛 − 70𝑛 (𝑛log2⁡910 110) = 70𝑛 − 63𝑛0.85
⁡⇒ 𝑇(𝑛) ≤ 70𝑛
⁡⇒ 𝑇(𝑛) ∈ 𝑂(𝑛)
Height of the rightmost subtree is : log5/2⁡𝑛 and so, 
7(𝑛) ≥ 7𝑛 + 7 ( 910) 𝑛 + 7 ( 910)2 𝑛 + ⋯ +
⁡10log⁡5/2𝑛
which implies 𝑇(𝑛) ≥ 7𝑛 
So, 𝑇(𝑛) ∈ Ω(𝑛) for sufficiently large 𝑛. 
<!-- PAGE 105 -->
ALGORITHMS 
) 
Let, 
𝑛1/𝑎𝑘= b 
So, log(𝑛1/𝑎𝑘) = log(b) 
So, ak = log(n) / log (b) = log b (n) 
So, k = log a log b (n) 
Therefore, 
= T(𝑛1/𝑎𝑘  + k 
= T(b) + log a log b (n) 
= 1 + log a log b (n) 
= Θ(log a log b (n))


</details>

---


### Q8. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider functions Function 1 and Function 2 
expressed in pseudocode as follows:Function 1 
and Function 2 
Function 1 
while n > 1 do 
for i = 1 to n 
do 
x = x + 1; 
end for 
n = ⌊n/2⌋; 
end while 
Function 2 
for i = 1 to 100 * n 
do 
x = x + 1; 
end for 
Let f1(n) and f2(n) denote the number of times the 
statement x = x + 1; is executed in Function 1 and 
Function 2, respectively. 
a) f1 (n) ∈⁡θ(f2 (n)) 
b) f1 (n) ∈⁡o(f2 (n)) 
c) f2 (n) ∈ ω(f1 (n)) 
d) f1 (n) ∈ O(n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,D) Height of the rightmost subtree is : log  5/2


**Step-by-Step Explanation:**

𝑛 and so, 
9  2 
𝑇(𝑛) ≥ 7𝑛 + 7 (  ) 𝑛 + 7 (  ) 𝑛 + ⋯ + 10 10 
 Function 2 executes x = x + 1 exactly 100n 
times, so f2(n) = 100n = Θ(n). 
 Function 1 halves n each while-iteration and 
does n increments per iteration, so total 
increments are n + n/2 + n/4 + … < 2n = 
Θ(n), hence f1(n) = Θ(n). 
 Therefore, f1(n) and f2(n) are of the same 
order: Θ(n), implying f1(n) ∈⁡Θ(f2(n)) and 
also f1(n) ∈ O(n), while f1(n) ∉ o(f2(n)) and 
f1(n) ∉⁡ω(f2(n)). 
f1(n) ∈ Θ(f2(n)) and f1(n) ∈ O(n); the other 
two are false.


</details>

---


### Q11. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following three functions. 
f1 = 10n 
f2 = n logn 
f3 = n✓n 
Which one of the following options arranges the 
function in the increasing order of asymptotic 
growth rate? 
a) f2, f1, f3 
b) f3, f2, f1 
c) f2, f3, f1 
d) f1, f2, f3


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q12. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following recurrence relation. 
𝑇(𝑛) = T(n/2) + T(2n/5) + 7n , if n > 0 { 1 , if n = 0


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q9. [GATE CSE – 2023 MSQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is TRUE 
for all positive functions f(n)? 
a) f(n2) = θ(f(n)2), when f(n) is a polynomial 
b) f(n2)=o(f(n)2) 
c) f(n2) = O(f(n)2), when f(n) is an exponential 
function 
d) f(n2)= Ω (f(n)2) 
which one of the following options is correct? 
a) T(n) = θ((log n) 5/2) 
b) T(n) = θ(n) 
c) T(n) = θ(nlog n) 
d) T(n) = θ(n 5/2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

counter example for B: f(n)=n , f(n2)=n2 , 
f(n)2=n2 , hence B is false 
2C: f(n)=e-n -> f(n2)=e−n , Hence C is false 
 9  log5/2 𝑛 
7 (  )


</details>

---


### Q13. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


For parameters a and b, both of which are ω(1), 
T(n) = T(n 1/a ) + 1, and T(b)=1. Then T(n) is: 
a) θ(log ab n) 
b) θ(log a log b n) 
c) θ(log 2 log 2 n) 
d) θ(log b log a n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Given, 
T(n) = T(n 
1/a )+1, 
T(b) = 1 
Now, using iterative method, 
𝑇(𝑛) = [𝑇(𝑛1/𝑎 ) + 1] + 1 
=[𝑇(𝑛1/𝑎3 ) + 1] + 2 
=[𝑇(𝑛1/𝑎4 ) + 1] + 3 
D: f(n)=logn , f(n2)=log(n2)=2logn and And so on…… , 
f(n)2=(logn)2 , hence D is also false 
option A is always true. = [𝑇 (𝑛 
𝑘 
1/𝑎 ) + 1] + (𝑘 − 1)


</details>

---


### Q14. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following functions from positives 
integers to real numbers 10, √n, n, log2n, 100/n. The 
CORRECT arrangement of the above functions in 
increasing order of asymptotic complexity is: 
a) log2n, 100/n, 10, √𝑛, n 
b) 100/n, 10, log2n, √𝑛, n 
c) 10, 100/n , √𝑛, log2 n, n 
d) 100/n, log2n, 10 , √𝑛, n


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

For the large number, value of inverse of number 
is less than a constant and value of constant is less 
than value of square root. 10 is constant, not 
affected by value of n. √n Square root and log 2n 
is logarithmic. So log2n is definitely less than √n. 
n has linear growth and 100 /n grows inversely 
with value of n. For bigger value of n, we can 
consider it 0, so 100/n is least and n is max. So 
the increasing order of asymptotic complexity 
will be: 100/n, 10, log 2n, √n, n So, option (b) is 
true.


</details>

---


### Q15. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C function 

```c
int fun(int n) { 
int i, j; 
for(i=1; i<=n; i++) { 
for (j=1; j<n; j+=i) { 
printf("%d %d", i, j); 
} 
} 
} 
Time complexity of fun in terms of θ notation is 
a) θ ( n✓n ) 
b) θ(n2) 
c) θ(n log n) 
d) θ(n2 log n)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

for i =1, j will run from 1 to n by incrementing by 
in each step n/2 will run for n times 
For i=2 j will run from 1 to n by incrementing by 
‘2’ in each step j will run for n/2 times next time 
j will run for n/3 times and so on time complexity 
= n + n/2 + n/3 + n/4 +.....= n(1+1/2+1/3+  ) 
=nlogn


</details>

---


### Q16. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the recurrence function 
2 × T(√n) + 1, if n > 2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

T(n) =2 T(√n) + 1 
Put n = 2 k 
T(2k) = 2T(2K/2 ) + 1 
Assume T(2k ) = δ(K) 
δ(K) = 2 δ(K / 2) + 1 
By master's theorem 
δ(K) = θ(K) 
T(n) = θ(log n) (∵ 2 k = n)


</details>

---


### Q17. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


The given diagram shows the flowchart for a 
recursive function A(n). Assume that all 
statements, except for the recursive calls, have 
O(1) time complexity. If the worst-case time 
complexity of this function is O(nα ), then the least 
possible value (accurate up to two decimal 
positions) of α is  . 
Flowchart for Recursive Function A(n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 2.32


**Step-by-Step Explanation:**

If they are asking for worst case complexity 
hence, By calling A(n) we get A(n/2) 5 times, 
A(n)=5A(n/2)+O(1) 
Hence by applying masters theorem, Case 1 : 
n(log 2 5) 
Thus value of alpha will be 2.32


</details>

---


### Q18. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C function. 
int fun1 (int n) 
{ 
int i, j, k, p, q = 0; 
for (i = 1; i< n; ++i) 
{ 
p = 0; 
for (j = n; j > 1; j = j/2) 
++p; 
for (k = 1; k < p; k = k*2) 
++q; 
} 
return q; 
} 
Which one of the following most closely 
approximates the return value of the function fun1? 
a) n3 
b) n(logn)2 
c) nlogn 
d) nlog(logn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

 The inner loop j = n; j > 1; j = j/2 runs 
p=⌊log2n⌋ times, so after it finishes, p ≈ log n 
for each i. 
 The next loop k = 1; k < p; k = k*2 runs 
⌊log2p⌋ ≈ loglogn times, incrementing q that 
many times per i. 
 The outer loop over i runs n−1 ≈ n times, so 
total q ≈ n·loglog n.


</details>

---


### Q19. [GATE CSE – 2020 MCQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Let f(n) = n and g(n) = n (1 +sin n) , where n is a 
positive integer. Which of the following statements 
is/are correct? 
𝑇(𝑛) = { 2, if 0 < n ≤ 2 I. f(n) = O(g(n)) 
Then T(n) in terms of θ notation is 
a) θ(log logn) 
b) θ(log n) 
c) θ(√𝑛) 
d) θ(n) 
II. f(n) = Ω(g(n)) 
a) Only I 
b) Only II 
c) Both I and II 
d) Neither I nor II


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Since the value of sin(𝑛) will always range from -1 to 
+1 , hence 𝑔(𝑛) can take values 1, 𝑛, 𝑛2. 
Hence, if 𝑔(𝑛) = 1, then statement I is incorrect. 
And, if 𝑔(𝑛) = 𝑛2, then statement II is incorrect.


</details>

---


### Q20. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider a complete binary tree where the left and 
the right subtrees of the root are max heaps. The 
lower bound for the number of operations to 
convert the tree to a heap is 
a) Ω(logn) 
b) Ω(n) 
c) Ω(nlogn) 
d) Ω(n2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

The answer to this question is simply max -heapify 
function. Time complexity of heapify is O(log 
n)(for a complete binary tree). 
Since left subtree and right subtree are max heaps it 
takes Ω(logn) to heapify.


</details>

---


### Q23. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Which one of the following correctly 
determines the solution of the recurrence relation 
with T(1)=1? 
T(n)=2T(n/2) + logn 
a) θ( n ) 
b) θ( n log n ) 
c) θ( n2 ) 
d) θ( log n )


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

By Master’s theorem case (i) T(n) is O(n) Here, 
a = 2, b = 2, f(n) = log n 
N(logba) = n(log 22 ) = n By Master’s theorem case (i) T(n) is O(n)


</details>

---


### Q21. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the equality X =∑𝑖=0𝑛  𝑖3 
following choices for X: 
I. Θ(n4) 
II. Θ(n5) 
III. O(n5) 
IV. Ω(n3)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Sum of the cubes of the first n natural numbers is 
given by (n(n+1)/2) 2 which is Θ(n 4). So, I, III and 
IV are correct. II is wrong.


</details>

---


### Q24. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following function: 
int unknown(int n){ 
int i, j, k=0; 
for (i=n/2; i<=n; i++) 
The equality above remains correct if X is 
replaced by 
a) Only I 
b) Only II 
c) I or III or IV but not II 
d) II or III or IV but not I


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

The outer for -loop goes for iterations (n/2 + 1). 
The inner for-loop runs log2n times independently 
of the outer loop. And for each inner iteration n/2 
gets added to k. 
Our answer = (n/2 + 1)*(n/2)*logn = Θ(n2 log n)


</details>

---


### Q22. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Suppose we have a balanced binary search tree T 
holding n numbers. We are given two numbers L 
and H and wish to sum up all the numbers in T that 
lie between L and H. Suppose there are m such 
numbers in T. If the tightest upper bound on the 
time to compute the sum is 
O(na logb n + mc logd n) 
the value of a + 10b + 100c + 1000d is  . 
for (j=2; j<=n; j=j*2) 
k = k + n/2; 
return (k); 
} 
The return value of the function is 
a) Θ(n2) 
b) Θ(n2log n) 
c) Θ(n3) 
d) Θ(n3log n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 110


**Step-by-Step Explanation:**

In worst case for finding L and H it will take 
O(logn) time as the given tree is balanced binary 
search tree. Now there are m elements between L 
and H. So to traverse m element it will take O(m) 
time (traversal algorithm given below). So, total 
O(m+logn)⟹a=0,b=1,c=1,d=0 
∴ 0+(10×1)+(100×1)+(1000×0)=110. 
<!-- PAGE 106 -->
ALGORITHMS


</details>

---


### Q25. [GATE CSE – 2015 SET-2 MCQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Let W(n) and A(n) denote respectively, the worst 
case and average case running time of an algorithm 
executed on an input of size n. Which of the 
following is ALWAYS TRUE? 
a) A(n) = Ω (W(n)) 
b) A(n) = Θ (W(n)) 
c) A(n) = O (W(n)) 
d) A(n) = o (W(n))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Worst case complexity can never be lower than the 
average case complexity, but it can be higher. So, 
(𝐶) is the answer. 𝐴(𝑛) = 𝑂(𝑊(𝑛)).


</details>

---


### Q26. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Which of the given options provides the 
increasing order of asymptotic complexity of 
functions f 1 , f 2 , f 3 and f 4 ? 
f1(n)=2n , f2(n)=n3/2, f3(n)=nlog2n , f4(n)=nlog n 
a) f3, f2, f4, f1 
b) f3, f2, f1, f4 
c) f2, f3, f1, f4 
d) f2, f3, f4, f1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

taking log base 2 of all functions: 
log f1 = n 
log f2 =3/2 log n 
log f3 =logn+loglogn 
log f4 = logn.logn 
∴ f 3 , f 2 , f 4 , f 1 is required increasing order


</details>

---


### Q30. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Arrange the following functions in increasing 
asymptotic order: 
a. n1/3 b. en 
c. n7/4 d. nlog9n 
e. 1.0000001n 
a) a, d, c, e, b 
b) d, a, c, e, b 
c) a, c, d, e, b 
d) a, c, d, b, e


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

A < C and A < D are straight forward. 
E < B and C, D < E as E and B are exponential 
functions and B having a larger base. 
Now, we just need to see if C or D is larger. 
In C we have a term n3/4 and correspondingly in D 
we have log9n (after taking n out). 
n3/4 is asymptotically larger than log9n. So, 
D < C.


</details>

---


### Q27. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


The running time of an algorithm is represented 
by the following recurrence relation: 
𝑛 ; 𝑛 ≤ 3 
T(n) = { 𝑛 𝑇 ( ) + 𝑐𝑛; 𝑜𝑡ℎ𝑒𝑟𝑤𝑖𝑠𝑒


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Comparing with the recurrence form of Master 
Theorem T(n)=aT(n/b)+f(n) 
a=1,b=3, logba=0 
So nlogb a=n0 
f(n)=cn 
So, f(n)=Ω(nlog ba+ϵ) holds for any ϵ<1 
and this is the third case of Master 
theorem. But Master theorem also 
requires (only case 3) that regularity 
condition be satisfied (this ensures that 
f(n) is still dominant when the recurrence 
go deeper) which is af(n/b)≤ df(n)for 
some d <1 and all sufficiently large n.. 
(Using d here as c is already used in 
f(n)) Here we get, f(n/3)≤ df(n) 
⟹cn/3≤ dcn⟹1/3≤d 
Thus we can use any 1/3≤d<11 to satisfy 
the regularity condition and Master 
theorem case 3 is satisfied. Now, 
applying case 3 we get 
T(n)=Θ(f(n))=Θ(n)


</details>

---


### Q31. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C functions:int f1(int n) 
{ 
Which one of the following represents the time 
complexity of the algorithm? 
a) θ (n) 
b) θ (n log n) 
c) θ (n2) 
d) θ (n2logn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Time complexity of f1 is given by 
T(n) = T(n - 1) + T(n - 2), (multiplication by 2 and 
3 won't affect complexity as it is a constant time 
operation) 
T(0) = T(1) = 1 
The solution to this (fibonacci series) is given by 
Golden ratio. Which is O( 2n). (Using theta in 
question must be a mistake) 
Time complexity of f2 is O(n) as here all recursive calls are    
avoided by saving the results in an array (dynamic 
programming).


</details>

---


### Q28. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following functions: 
f(n) = 2n 
g(n) = n! 
h(n) = nlogn 
Which of the following statements about the 
asymptotic behaviour of f(n), g(n), and h(n) is 
true? 
a) f(n) = O(g(n)); g(n) = O(h(n)) 
b) f(n) = Ω(g(n)); g(n) = O(h(n)) 
c) g(n) = O(f(n)); h(n) = O(f(n)) 
d) h(n) = O(f(n)); g(n) = Ω(f(n))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

g(n) = n!. 
On expanding the factorial we get g(n) = O(nn) : 
nn > nlog n 
nn > 2n 
This condition is violated by options A, B and C 
by first statements of each. 
Second statement of option D says that g(n) is 
asymptotically biggest of all.


</details>

---


### Q29. [GATE CSE – 2011 MCQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


When n = 2(2k) for some k >= 0, the recurrence 
relation T(n) = √(2)T(n/2) + √(n), T(1) = 1 
evaluates to : 
a) (√𝑛)(log n + 1) 
b) (√𝑛) log n  
c) (√𝑛) log (√𝑛) 
d) n log (√𝑛) 
if(n == 0 || n == 1) 
return n; 
else 
return (2*f1(n-1) + 3*f1(n-2)); 
} 
int f2(int n) 
{ 
int i; 
int X[N], Y[N], Z[N] ; 
X[0] = Y[0] = Z[0] = 0; 
X[1] = 1; Y[1] = 2; Z[1] = 3; 
for(i = 2; i <= n; i++) 
{ 
X[i] = Y[i-1] + Z[i-2]; 
Y[i] = 2*X[i]; 
Z[i] = 3*X[i]; 
} 
return X[n] ; 
} 
The running time of f1(n) and f2(n) are 
a) Θ(n) and Θ(n) 
b) Θ(2n) and Θ(n) 
c) Θ(n) and Θ(2n) 
d) Θ(2n) and Θ(2n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

T(n) = (√2)T(n/2) + (√ n) 
= (√2)2 T(n/22) + (√2)(√ (n/2)) + (√ n) 
... 
= (√2)(lg n) T(1) + (lg n)(√ n) 
= (√ n) + (lg n)(√ n) 
= (√ n)(lg n + 1)


</details>

---


### Q32. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Exponentiation is a heavily used operation in  
public key cryptography. Which of the following 
options is the tightest upper bound on the number 
of multiplications required to compute b nmod 
m,0≤b , n≤m? 
a) O(logn) 
b) O(√n ) 
c) O(n/logn) 
d) O(n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

C1=bn/2*bn/2 C2=bn/4* bn/4 
C3 
= ... 
: 
: 
                    T(n)=T(n/2)+1 
                    = logn 
<!-- PAGE 107 -->
ALGORITHMS


</details>

---


### Q33. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


In the following C function, let n≥m. 
int gcd(n,m) 
{ 
if (n%m ==0) return m; 
n = n%m; 
return gcd(m,n); 
} 
How many recursive calls are made by this 
function? 
a) θ(logn) 
b) ω(n) 
c) θ(loglogn) 
d) Θ(√ n )


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

T(n)=T(n mod m)+1 
=T(n/2)+1 
= logn


</details>

---


### Q34. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C code segment: int 
IsPrime(n) 
{


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Worst Case : T(n)=O(√n ) 
Best Casse : When n is an even number body of 
for loop is executed only 1 time (due to "return 
0" inside if) which is irrespective of n. 
T(n)=Ω(1)


</details>

---


### Q35. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


What is the Asymptotic Notation of the following 
recursive function: 
int DoSomething (int n) { 
if (n <= 2) 
return 1; 
else 
return (DoSomething (floor(sqrt(n))) + n); } 
a) θ (n2) 
b) θ (nlog2n) 
c) θ (log2n) 
d) θ (log2log2n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Recursive relation for the DoSomething() is 
T(n) = T(√n) + C1 if n > 2 
We have ignored the floor() part as it doesn’t 
matter here if it’s a floor or ceiling. 
Let n = 2m, T(n) = T(2m) 
Let T(2m) = S(m) 
From the above two, T(n) = S(m) S(m) = 
S(m/2) + C1 
S(m) = O(logm) 
= O(loglogn) 
Now, let us go back to the original recursive 
function T(n) 
T(n) = S(m) 
= O(LogLogn)


</details>

---


### Q36. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C -program fragment in 
which i, j, and n are integer variables. 
for (i = n, j = 0; i > 0; i/=2, j += i); 
Let Val(j) denote the value stored in the variable j 
after termination of the for loop. Which one of the 
following is true? 
a) val(j)= θ (logn) 
b) val(j)= θ (sqrt(n)) 
c) val(j)= θ (n) 
d) val(j)= θ (nlogn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Answer will be Theta(n) 
j = n/2 + n/4 + n/8 + ... + 1 
= n [1/21 + 1/22 + 1/23 + ... + 1/2(lg n)] 
(Sum of first n terms of GP is [a.(1 -r^n)/(1-r)] , 
where a is the first term, r is the common ratio < 
1, and n is the number of terms) 
= n [1/2 (1-(1/2)(lg n)) / (1-1/2)] 
= n [(n-1)/n] 
= n - 1 = 𝜃(n)


</details>

---


### Q37. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following recurrence: 
𝑇(𝑛) = 2𝑇([√𝑛]) + 1, 𝑇(1) = 1 
Which one of the following is true? 
int i,n; 

```c
for(i=2;i<=sqrt(n);i++) 
if(n%i == 0) 
{printf("Not Primen"); return 0;} 
return 1; 
} Let T(n)denote the number of times the for 
loop is executed by the program on input n. 
Which of the following is TRUE? 
a) T(n)=O(√𝑛 ) and T(n)=Ω(√𝑛 ) 
b) T(n)=O(n) and T(n)=Ω(√𝑛 ) 
c) T(n)=O(√𝑛 ) and T(n)=Ω(1) 
d) None of the above 
a) T(n)= θ (loglogn) 
b) T(n)= θ (logn) 
c) T(n)= θ (√𝑛) 
d) T(n)= θ (n)
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Put, n=2m 
T(2m)=2T(2m/2)+
T(log2m)=2T(log2m/2)+c 
T(m)=2T(m/2)+c 
Using case 1 of master theorem, 
=Θ(m) 
SInce, n=2m 
=Θ(log n)


</details>

---


### Q38. [GATE CSE– 2007 MCQ (1-MARKS]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Suppose T(n)=2T(n/2)+n, 
T(0)=T(1)=1 
Which one of the following is FALSE? 
a) T(n)=O(n2) 
b) T(n)=Θ(n log n) 
c) T(n)=Ω(n2) 
d) T(n)=O(n log n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Applying master theorem 
T(n)=Θ(n log n) 
So Option C is wrong.


</details>

---


### Q39. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


The Asymptotic Notation of computing the 
transitive closure of a binary relation on a set of n 
elements is known to be: 
a) O(n) 
b) O(nlogn) 
c) O(n3/2) 
d) O(n3)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Calculating Transitive Closure boils down to 
Matrix Multiplication. 
We can do Matrix Multiplication in O(n3). There are 
better algo that do less than cubic time, but we can 
not surely do matrix multiplication in 
a. O(n) 
b. O(nlogn) 
c. O(n3/2)


</details>

---


### Q40. [GATE CSE]


> **Topic:** ALGORITHMS | **Marks:** 2 | **Difficulty:** Medium


Consider the following C-function: 
double foo (int n) 
{ 
int i; 
double sum; 
if (n = = 0) return 1.0; 
else 
{ 
sum = 0.0; 
for (i = 0; i < n; i++) 
sum += foo (i); 
return sum; 
} 
} 
Suppose we modify the above function foo() and 
store the values of foo (i), 0⁡≤⁡𝑖 < 𝑛, as and 
when they are computed. With this modification, 
the time complexity for function foo() is 
significantly reduced. The space complexity of 
the modified function would be: 
a) O(1) 
b) O(n) 
c) O(n!) 
d) O(nn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Here we can see that, we have lots of overlapping 
subproblems. Too many function calls. 
1. No of function calls = 2𝑛 
2. stack depth used = 𝑂(𝑛) 
Therefore space is linear and time is exponential. 
Now, using one-dimensional (1𝐷) table we can reduce 
the no of function calls and depth of stack space used as 
well. 
Here is what we are going to do: 
1. First, check in the 1𝐷 table for the required call 
value. 
2. If correct value found: do not call recursive 
functions 
3. If not, then only attempt for loop recursive calls 
Improvements over given program: 
1. Stack space because of function calls reduced 
to two level only. 
2. Extra space used for the 1𝐷 array = 𝑂(𝑛) 
3. More importantly, Time is reduced to 𝑂(𝑛2). 
(Exponential to Quadratic !! ) 
Overall space complexity = stack + extra = 𝑂(1) + 
𝑂(𝑛) = 𝑂(𝑛)` 
<!-- PAGE 108 -->
GATE CSE – 2026 SET-2 NAT (2-MARKS) GATE CSE – 2020 NAT (1-MARKS) 
GATE CSE – 2019 NAT (1-MARKS) 
GATE CSE – 2019 MCQ (2-MARKS) 
GATE CSE – 2016 SET-2 MCQ (1-MARKS) 
DIVIDE AND CONQUER


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider an array A = [10, 7, 8, 19, 41,35, 25, 31]. 
Suppose the merge sort algorithm is executed on 
array A to sort it in increasing order. The merge 
sort al gorithm will carry out a total of 7 merge 
operations. 
A merge operation on sorted left array L and 
sorted right array R is said to be void if the output 
of the merge operation is the elements of array L 
followed by the elements of array R. 
The number of v oid merge operations among 
these 7 merge operations is  . (answer in 
integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 3


**Step-by-Step Explanation:**

2. Answer : C 
Pair elements, compare within each pair,  then 
compare winners for max and losers for min, giving 
at most 3n/2 - 2 comparisons, which equals 3 ⌈n/2⌉ - 2 in 
general. 
Any comparison -based algorithm needs at least 
3n/2 - 2 comparisons in the worst case by 
adversary/charging arguments, so this is opt imal; 
trivially, at least n comparisons are needed overall, 
yielding n < t <= 3 ⌈n/2⌉⁡.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let P be an array containing n integers. Let t be the 
lowest upper bound on the number of comparisons 
of the array elements, required to find the minimum 
and maximum valu es in an arbitrary array of n 
elements. Which one of the following choices is 
correct? 
a) t > 2n – 2 
b) t > ⌈ log (n) ⌉ and t <= n 
c) t > n and t <= 3 ⌈ n/2 ⌉ 
d) t > 3 ⌈ n/2 ⌉⁡and t <= 2n – 2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 𝐜


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following array: 
23 , 32 , 45 , 69 , 72 , 73 , 89 , 97 
Which algorithm out of the following options uses 
the least number of comparisons (among the array 
elements) to sort the above array in ascending 
order? 
a) Quicksort using the last element as pivot 
b) Selection sort 
c) Merge sort 
d) Insertion sort


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Given array already sorted." 
"∴⁡Insertion sort takes least number of 
comparisons Θ(n)." "Since, for a number which 
is to be inserted in the already sorted array, only 
1 comparison will be required."


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An array of 25 distinct elements is to be sorted 
using quicksort. Assume that the pivot element is 
chosen uniformly at random. The probability that 
the pivot element gets placed in the worst possible 
location in the first round of partitioning (rounded 
off to 2 decimal places) is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 0.08


**Step-by-Step Explanation:**

Given an array of 25 distinct elements, and pivot 
element is chosen uniformly randomly. So, there 
are only 2 worst case position in the pivot 
element is either first (or) last. Total elements 
=25 For worst case number of candidates =2 
Therefore, required probability is, = 2/25 
= 0.08


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a sequence of 14 
elements:A=[−5,−10,6,3,−1,−2,13,4,−9,−1,4,12,−3 
,0].The sequence sum S(i, j) = ∑j k=i 
A[k].Determine the maximum of S(i ,j), where 0≤ 
i≤ j< 14.(Divide and conquer approach may be 
used.)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 29


**Step-by-Step Explanation:**

They are asking about max subarray sum 
subarray is different from a subsequence because 
subarray needs to be contigous but subsequence 
need not be . Algo to find max subarray sum: 
int maxsum = A[0], sum = A[0], n=14; 
for(int i=1; i<n; i++) { 
if (sum > 0) sum+=A[i]; 
else sum = A[i]; 
} 
if (maxsum < sum) maxsum = sum; 
} 
GATE CSE – 2008 MCQ (1-MARKS) 
GATE CSE – 2012 MCQ (2-MARKS) 
<!-- PAGE 111 -->
ALGORITHMS


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


There are n unsorted arrays: A 1 , A 2 , …, A n . 
Assume that n is odd. Each of A 1 , A 2 , …, A n 
contains n distinct elements. There are no common 
elements between any two arrays. The worst-case 
time complexity of computing the median of the 
medians of A 1 , A 2 , …, A n is 
a) O(n) 
b) O(n log n) 
c) O(n2) 
d) Ω(n2 log n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Since given arrays are not sorted, so the time 
complexity to find median is O(n) in an unsorted 
array. You need to apply this algorithm n time to 
find all medians and again once to find median 
of all these medians, so total time complexity is, 
= O(n)*O(n) + O(n) 
= O(n2) + O(n) 
≈ O(n2)


</details>

---


### Q7. [GATE CSE – 2021 SET-1 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Assume that the algorithms considered here sort the 
input sequences in ascending order. If the input is 
already in ascending order, which of the following are 
TRUE? 
I. Quick sort runs in Θ(n2) time 
II. Bubble sort runs in Θ(n2) time 
III. Merge sort runs in Θ(n) time 
IV. Insertion sort runs in Θ(n) time 
a) I and II only 
b) I and III only 
c) II and IV only 
d) I and IV only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

As input is already sorted quick sort runs in θ(n2 
) & insertion sort runs in θ(n). Generally, Bubble 
Sort runs in Θ(n 2 ) time But if an array is in 
ascending order, we could make a small 
modification in Bubble Sort Inner for loop which 
is responsible for bubbling the kth largest element 
to the end in k th iteration. Whenever there is no 
swap after the completion of inner for loop of 
bubble sort in any iteration, we can declare that 
array is sorted in case of Bubble Sort taking O(n) 
time in Best Case.so from above given statements 
only i and iv are correct.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The worst-case running time of Insertion sort, 
Merge sort and Quick sort, respectively, are: 
a) θ(nlogn), θ(nlogn) and θ(n2) 
b) θ(n2) , θ(n2) and θ(nlogn) 
c) θ(n2), θ(nlogn) and θ(nlogn) 
d) θ(n2), θ(nlogn) and θ(n2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Insertion Sort: Worst-case occurs when the array 
is reverse sorted, leading to a time complexity of 
Θ(n²). 
Merge Sort: The divide and conquer method 
always results in Θ(n log n) complexity, even in 
the worst case. 
Quick Sort: Worst -case occurs when the chosen 
pivot always ends up being the smallest or largest, 
leading to Θ(n²) complexity. 
So, the worst-case running times respectively are: 
Θ(n²), Θ(n log n), and Θ(n²).


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose you are provided with the following 
function declaration in the C programming 
language. 
int partition(int a[ ], int n); 
The function treats the first element of a[] as a 
pivot, and rearranges the array so that all elements 
less than or equal to the pivot is in the left part of 
the array, and all elements greater than the pivot 
is in the right part. In addition, it moves the pivot 
so that the pivot is the last element of the left part. 
The return value is the number of elements in the 
left part. The following partially given function in 
the C programming language is used to find the 
k-th smallest element in an array a[ ] of size n 
using the partition function. We assume k <= n 
C 
int kth_smallest(int a[], int n, int k) 
{ 
int left_end = partition(a, n); 
if ( left_end+1 == k ){ 
return a[left_end]; 
} 
if ( left_end+1 > k ){ 
return kth_smallest(  ); 
} else { 
return kth_smallest(  ); 
} 
} 
The missing arguments lists are respectively 
a) (𝑎, left_end, 𝑘) and (𝑎 + left_end +1, 𝑛-
left_end −1, 𝑘-left_end -1) 
b) ( 𝑎, left_end, 𝑘 ) and ( 𝑎, 𝑛-left_end −1, 𝑘-
left_end -1 ) 
c) ( 𝑎 + left_end +1, 𝑛-left_end −1, 𝑘-
left_end -1 ) and ( 𝑎, left_end, 𝑘 ) 
d) (𝑎, 𝑛-left_end −1, 𝑘-left_end -1) and (𝑎, 
left_end, 𝑘)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

We have to find the kth smallest element. 
if (left_end+1 > k) 
If the above condition is true, it means we have 
kth smallest element on the left array, whose size 
is left_end instead of n for the original array. 
(The "+1" is used because array index in C 
language starts from 0). So, we can do a 
recursive call as 
 kth_smallest( a, left_end, k); 
If the above condition is false, and left_end 
+1≠k,, it means kth smallest element is on the 
right part of the array and it will be 
(k−left_end−1)th element there as left_end+1 
elements are gone in the left part. So, the 
recursive call will be 
 kth_smallest( a + left_end + 1, n - left_end – 
1, k - left_end - 1); 
Correct Option: A.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is the recurrence 
equation for the worst case time complexity of the 
Quicksort algorithm for sorting n ( >=2) numbers? 
In the recurrence equations given in the options 
below, c is a constant.


- **(A)** T(n)=2T(n/2)+cn

- **(B)** T(n)=T(n-1)+T(1)+cn

- **(C)** T(n)=2T(n-1)+cn

- **(D)** T(n)=T(n/2)+cn



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Worst case for quick sort happens when 1 element 
is on one list and n−1 elements on another list.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


You have an array of n elements. Suppose you 
implement quick sort by always choosing the 
central element of the array as the pivot. Then the 
tightest upper bound for the worst case 
performance is


- **(A)** O(n2)

- **(B)** O(nlogn)

- **(C)** θ(nlogn)

- **(D)** O(n3)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

When we choose the first element as the pivot, the 
worst case of quick sort comes if the input is 
sorted- either in ascending or descending order. 
Now, when we choose the middle element as 
pivot, sorted input no longer gives worst case 
behavior. But, there will be some permutation of 
the input numbers which will be giving the same 
worst case behavior. For example, 
1 2 3 4 5 6 7 
This array gives worst case behavior for quick sort 
when the first element is pivot. 
6 4 2 1 3 5 7 
This array gives the worst case behavior of O(n2) if 
we take middle element as the pivot- each split 
will be 1 element on one side and n−1 elements on 
other side. Similarly, for any input, we can have a 
permutation where the behavior is like this. So, 
whichever element we take as pivot it gives worst 
case complexity of O(n2) as long as pivot is from a 
fixed position (not random position as in 
randomized quick sort).


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let P is a quick sort program to sort numbers in 
ascending order using the first element as the pivot. 
Let t1 and t2 be the number of comparisons made by 
P for the inputs [1 2 3 4 5] and [4 1 5 3 2] respectively. 
Which one of the following holds? 
a) t1 = 5 
b) t1 < t2 
c) t1 > t2 
d) t1 = t2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

[1 2 3 4 5] is already sorted hence it takes more time 
than [4 1 5 3 2]. Quicksort program takes more time 
when given inputs are in sorted order. Hence t 1 > t2 
And when Array is already sorted then Quick Sort 
will give worst case and worst case T.C is O(n2)


</details>

---


### Q13. [GATE CSE – 2016 SET-1 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The minimum number of comparisons required 
finding the minimum and the maximum of 100 
numbers is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 148


**Step-by-Step Explanation:**

To find minimum and maximum comparisons for n 
numbers = (3n/2)-2) 
= (3(100)/2)-2 
= 150-2 
= 148


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A list of n strings, each of length n, is sorted 
into lexicographic order using the merge-sort 
algorithm. The worst case running time of this 
computation is 
a) O (n log n) 
b) O (n2 log n) 
c) O (n2 + log n) 
d) O (n2 )


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

The height of the recursion tree using merge 
sort is log n and n2 
comparisons are done at each level,where at 
most n pairs of strings are 
compared at each level and n comparisons are 
required to compare 
any two strings, so the worst case running time 
is O(n2log n). 
<!-- PAGE 112 -->
ALGORITHMS


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In quick sort, for sorting n elements, the (n/4)th 
smallest element is selected as pivot using an 
O(n) time algorithm. What is the worst case time 
complexity of the quick sort? 
a) θ(n) 
b) θ(nlogn) 
c) θ(n2) 
d) θ(n2logn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

T(n) = O(n){ pivot selection time} + T(n/4 - 1) + 
T(3n/4) 
which'll give (nlog n). 
Pivot selection complexity is given in questions. 
Pivot being the (n/4)th smallest element, once it 
is found, we have two sub arrays- one of size (n/4 
- 1) and other of size (3n/4) and for both of these 
we solve recursively.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The average case and worst case complexities 
for Merge sort algorithm are 
a) O(n log n),O(n2) 
b) O(n2), O(nlog2 n) 
c) O(n2logn) ,O(n2) 
d) O(nlog2n) , O(nlog2 n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

O(n log n) 
The recurrence relation for merge sort is given by 
T(n) = 2T(n/2) + n. This can be solved using 
master’s theorem and is found equal to O(n log n). 
<!-- PAGE 113 -->
GATE CSE – 2026 SET-1 MCQ (2-MARKS) GATE CSE – 2026 SET-2 MCQ (2-MARKS) 
GATE CSE – 2025 SET-1 MCQ (1-MARKS) 
GATE CSE – 2025 SET-2 MCQ (2-MARKS) 
GREEDY METHOD


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺(𝑉,𝐸) be an undirected, edge -weighted graph 
with integer weights. The weight of a path is the 
sum of the weights of the edges in that path. The 
length of a path is the number of edges in that path. 
Let 𝑠∈𝑉 be a vertex in 𝐺. For every 𝑢∈𝑉 and for 
every 𝑘 ≥0, let 𝑑𝑘(𝑢) denote the weight of a shortest 
path (in terms of  weight) from 𝑠 to 𝑢 of length at 
most 𝑘. If there is no path from 𝑠 to 𝑢 of length at 
most 𝑘, then 𝑑𝑘(𝑢)=∞.Consider the statements: 
S1: For every 𝑘 ≥0 and 𝑢 ∈𝑉, 𝑑𝑘+1(𝑢)≤𝑑𝑘(𝑢). 
S2: For every (𝑢,𝑣)∈𝐸, if (𝑢,𝑣) is part of a shortest 
path (in terms of weight) from 𝑠 to 𝑣, then for every 
𝑘≥ 0,𝑑𝑘(𝑢)≤𝑑𝑘(𝑣). 
Which one of the following options is correct? 
a) Only S1 is true 
b) Only S2 is true 
c) Both S1 and S2 are true 
d) Neither S1 nor S2 is true


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

When we increase k to k+1, we allow more 
paths (paths of length ≤ k are a subset of paths of 
length ≤ k+1). 
Taking minimum over a larger set cannot 
increase the value. 
So, 
dₖ₊₁(u) ≤ dₖ(u). 
Suppose edge (u, v) is part of a shortest path 
from s to v. 
That does not guarantee dₖ(u) ≤ dₖ(v) for every 
k. 
Counterexample (with negative weight): 
s — u has weight 100 
u — v has weight −200 
Shortest path to v is: 
s → u → v = −100 
For k = 2: 
d₂(u) = 100 
d₂(v) = −100 
So, 
d₂(u) ≤ d₂(v) becomes 
100 ≤ −100 → FALSE. 
Hence S2 is not always true.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺(𝑉,𝐸) be a simple, undirected, edge-weighted 
graph with unique edge weights. Which of the 
following statements about the minimum spanning 
trees (MST) of 𝐺 is/are true? 
a) In every cycle 𝐶 of 𝐺, the edge with the 
largest weight in 𝐶 is not in any MST 
b) In every cycle 𝐶 of 𝐺, the edge with the 
smallest weight in 𝐶 is in every MST 
c) For every vertex 𝑣 ∈𝑉, the edge with the 
largest weight incident on 𝑣 is not in any 
MST 
d) For every vertex 𝑣 ∈𝑉, the edge with the 
smallest weight incident on 𝑣 is in every 
MST


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,D


**Step-by-Step Explanation:**

(A) True 
By the Cycle Property: in any cycle, the 
maximum-weight edge cannot be in the MST. 
(B) False 
Cycle property does not say the minimum edge 
in a cycle must be included. It only excludes the 
maximum.An edge that is the minimum in one 
cycle may simultaneously belong to another 
cycle where it is the maximum-weight edge. 
By the Cycle Property, the maximum-weight 
edge of a cycle cannot be in the MST. 
Hence, being the minimum in one cycle does not 
guarantee inclusion in the MST. 
(C) False 
An edge can be the largest incident on a vertex 
and still be required to connect that vertex (e.g., 
if it’s the only connection). 
(D) True 
By the Cut Property: for the cut {v} and V−{v}, 
the minimum-weight edge crossing it (i.e., 
smallest edge incident on v) must be in the MST.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a weighted directed acyclic graph with m 
edges and n vertices. Given G and a source vertex s 
in G, which one of the following options gives the 
worst case time complexity of the fastest algorithm 
to find the lengths of shortest paths from s to all 
vertices that are reachable from s in G? 
a) Θ(m + n) 
b) Θ(m + n log(n)) 
c) Θ(nm) 
d) Θ(n³)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Answer: (A) Θ(m + n) 
Since the graph is a Directed Acyclic Graph 
(DAG), the shortest paths from source s can be 
found using: 
1. Topological sorting of the graph → Θ(m + 
n) 
2. Relaxing all edges once in topological 
order → Θ(m) 
Total time complexity = Θ(m + n).No priority 
queue is needed (unlike Dijkstra’s algorithm), 
because the graph has no cycles and the 
topological order guarantees correct relaxation 
order.Therefore, the worst-case time complexity of 
the fastest algorithm is: Θ(m + n)


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be any undirected graph with positive edge 
weights, and T be a minimum spanning tree of G. 
For any two vertices, u and v, let d1(u,v) and d2(u,v) 
be the shortest distances between u and v in G and 
T, respect ively. Which ONE of the options is 
CORRECT for all possible G, T, u and v? 
a) d1 (u, v) = d2 (u, v) 
b) d1 (u, v) ≤ d2 (u, v) 
c) d1 (u, v) ≥ d2 (u, v) 
d) d1 (u, v) != d2 (u, v)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

MST distance from u to v may not be the  shortest 
path distance from u to v.Shortest path distance 
from u to v i.e. d1 (u, v) ≤ MST path distance from 
u to v i.e. d2(u, v)


</details>

---


### Q5. [GATE CSE – 2026 SET-1 MSQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be an edge-weighted undirected graph with 
positive edge weights. Suppose a positive constant α 
is added to the weight of every edge. Which ONE of 
the following statements is TRUE about the 
minimum spanning trees (MSTs) and shortest paths 
(SPs) in G before and after the edge weight update? 
a) Every MST remains an MST, and every SP 
remains an SP. 
b) MSTs need not remain MSTs, and every SP 
remains an SP. 
c) Every MST remains an MST, and SPs need 
not remain SPs. 
d) MSTs need not remain MSTs, and SPs need 
not remain SPs.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Every MST will remain an MST because if we use 
Kruskal's Algorithm, adding alpha to each edge 
weight will not ch ange the ordering of the edges, 
and the tree will be formed as it is. 
for shortest paths, consider an undirected graph of 4 
vertices v1, v2, v3, v4. The edge set of this graph is 
defined as {[v1,v2], [v2,v3], [v3,v4] and [v1,v4]}. 
Let edge weight of [v1,v2 ], [v2,v3], [v3,v4] and 
[v1,v4] be x1, x2, x3 and x4 respectively with the 
condition: x1+x2+x3 = x4 - 1. Thus originally the 
shortest path between v1 and v4 is x1+x2+x3. 
However after adding positive constant to each 
edge, the shortest path between v1 and v4 is x4 + 
alpha.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The maximum value of x such that the edge 
between the nodes B and C is included in every 
minimum spanning tree of the given graph is 
 . (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

The value of 'x' should be less than 6,7,and 8. So, x 
can be atmost 5. 
Therefore, maximum value of x can be 5. 
<!-- PAGE 123 -->
ALGORITHMS


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G(V, E) be an undirected and unweighted 
graph with 100 vertices. Let d(u, v) denote the 
number of edges in a shortest path between 
vertices u and v in V. Let the maximum value of 
d(u, v), u, v ∈⁡V such that u ≠ v, be 30. Let T be 
any breadth-first-search tree of G. Which ONE of 
the given options is CORRECT for every such 
graph G? 
a) The height of T is exactly 15. 
b) The height of T is exactly 30. 
c) The height of T is at least 15. 
d) The height of T is at least 30.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

BFS traversal on unweighted graph always give 
the shortest path. 
Now comes if we start the BFS travers al from 
vertex u and to go atleast to v we will have the 
height 30. 
if we start it from middle in between from u and 
v ,we will get the left most tree which will go to 
u and the rightmost tree will go to v.Thus the tree 
of height in case 1 will be divided into two of 
height 15 each. 
Hence the option height atleast 15 is correct.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The number of spanning tree in complete labelled 
graph of 4 vertices labelled A, B, C, and D is……


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 16


**Step-by-Step Explanation:**

The number of spanning trees in a complete 
graph with 4 vertices (A, B, C, D) is given by 
Cayley's formula: 
Number of spanning trees=nn-2 
For n=4: 
44−2 = 42 = 16 
So, the number of spanning trees is 16.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be an undirected connected graph in which 
every edge has a positive integer weight. Suppose 
that every spanning tree in G has even weight. 
Which of the following statements is/are TRUE 
for every such graph G? 
a) All edges in G have even weight. 
b) In each cycle C in G, all edges in C have 
even weight. 
c) All edges in G have even weight or all 
edges in G have odd weight. 
d) In each cycle C in G, either all edges in C 
have even weight OR all edges in C have 
odd weight.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

The question asks about spanning tree, not MST. 
Counter example for option -A, option -B, and 
option-C: 
Every spanning tree of this graph has even 
weight, but does not satisfy option-A, option-B, 
and option-C. 
Only option-D remains. 
Hence option-D is correct.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The number of distinct minimum-weight spanning 
trees of the following graph is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 9


**Step-by-Step Explanation:**

Explanation 
Counter Example : 
Step 1: Apply Kruskal's algorithm where 
minimum weighted edge gets selected 
Step 2: Use theorem, "For any cycle in G, the 
heaviest edge on that cycle cannot be in the MST 
"Edge bc and fe can't be in MST as it creates cycle 
with max edge weight in the graph 
Step 3: Now here comes the intution, for each 
edge i.e edge bg, ba, bf we have 3 choices i.e gc, 
gd, ge so 3*3 = 9 distinct MSTs possible


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


"Let G(V, E) be a directed graph, where V = {1, 2, 
3, 4, 5} is the set of vertices and E is the set of 
directed edges, as defined by the following 
adjacency matrix A. 
"A[i][j] = 1 indicates a directed edge from node i 
to node j."A directed spanning tree of G, rooted at 
r ∈⁡V, is defined as "a subgraph T of G such that 
the undirected version of T is a tree, and T 
contains a directed path from r to every other 
vertex in V." The number of such directed 
spanning trees rooted at vertex 5 is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 24


**Step-by-Step Explanation:**

For a graph defined by the adjacency matrix 
A[i][j]=1 (if 1≤j≤i≤5), and considering directed 
spanning trees rooted at vertex 5: 
From 5, you can directly go to 4 in only 1 way. 
To each of the next lower vertices, there are 
multiple possible parents among higher 
numbered vertices already included in the tree. 
For 3: Choose parent from (5,4) ⇒⁡2 ways. 
For 2: Choose parent from (5,4,3) ⇒ 3 ways. 
For 1: Choose parent from (5,4,3,2) ⇒ 4 ways. 
So, total count = 1×2×3×4 = 24. 
Alternatively, the tree rooted at 5 is essentially a 
permutation of the 4 remaining vertices, 
resulting in 4!=24 directed spanning trees rooted 
at 5. 
The number of such directed spanning trees 
rooted at vertex 5 is 24. 
<!-- PAGE 124 -->
ALGORITHMS


</details>

---


### Q12. [GATE CSE – 2025 SET-1 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a simple undirected weighted graph G, 
all of whose edge weights are distinct. 
Which of the following statements about the 
minimum spanning trees of G is/are TRUE? 
a) The edge with the second smallest weight is 
always part of any minimum spanning tree of G. 
b) One or both of the edges with the third 
smallest and the fourth smallest weights are 
part of any minimum spanning tree of G 
c) Suppose S⊆V be such that S != ϕ and S != 
V. Consider the edge with the minimum 
weight such that one of its vertices is in S 
and the other in V∖S. Such an edge will 
always be part of any minimum spanning 
tree of G 
d) G can have multiple minimum spanning 
trees.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,B,C


**Step-by-Step Explanation:**

Why A is true? The edge with the smallest 
weight is always included, and the second 
smallest edge will also be includ ed unless it 
creates a cycle. For a simple connected graph, it 
cannot form a cycle at the stage where only the 
first edge is present, so the second smallest edge 
is always added. 
Why B is true? By the cut property: for any cut, 
the unique lightest edge crossing that cut must be 
in every MST; edges ranked third or fourth 
globally need not be in any MST unless they are 
the lightest for some cut, so “one or both” being 
in every MST is not guaranteed and thus the 
statement as written is false if it claims neces sity 
for those ranks; however, interpreted as “may be 
part” it’s trivial —so the strict cut -property 
guarantee applies only to the single lightest edge 
per cut. Hence option 2, which claims necessity 
for specific ranks, is false. 
Why C is true? For any nonempty proper subset 
S of V, the minimum -weight edge with one 
endpoint in S and the other in V \ S must be in 
every MST by the cut property, since edge 
weights are distinct and thus the lightest crossing 
edge is unique. 
Why D is false? With all edge weights 
distinct, the MST is unique; therefore the 
graph cannot have multiple minimum 
spanning trees under the given condition.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following undirected graph with 
edge weights as shown: 
The number of minimum-spanning trees of the 
graph is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 3


**Step-by-Step Explanation:**

14. Answer: B 
𝑎 has the least frequency and should be  
the leaf of the tree. 𝑏, 𝑐 and 𝑑 have the 
same frequency but as per Condition 2 in 
the questions 𝑑 should be taken first, 
followed by 𝑐 and then 𝑏, 𝑒 has the highest 
frequency and so must be taken last. 
Alphabet Frequency 
𝑎 1 
𝑏 2 
𝑐 2 
𝑑 2 
𝑒 3 
The final Huffman tree looks like: 
Prefix Code Code Length 
a = 000 3 
b = 10 2 
c = 11 2 
d = 001 3 
e = 01 2 
Therefore, Minimum length of encoded string: (1 * 
3) + (2 * 2) + (2 * 2) + (3 * 2) + (2 * 3) = 23


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the string abbccddeee. Each letter in 
the string must be assigned a binary code 
satisfying the following properties: 
For any two letters, the code assigned to one 
letter must not be a prefix of the code assigned 
to the other letter. 
For any two letters of the same frequency, the 
letter which occurs earlier in the dictionary order 
is assigned a code whose length is at most the 
length of the code assigned to the other letter. 
Among the set of all binary code assignments 
which satisfy the above two properties, what is 
the minimum length of the encoded string?


- **(A)** 21

- **(B)** 23

- **(C)** 25

- **(D)** 30



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a connected undirected weighted graph. 
Consider the following two statements. 
S1 : There exists a minimum weight edge in G 
which is present in every minimum spanning 
tree of G. 
S2 : If every edge in G has distinct weight, then 
G has a unique minimum spanning tree. 
Which one of the following options is correct? 
a) S 1 is true and S 2 is false. 
b) S 1 is false and S 2 is true. 
c) Both S 1 and S 2 are true. 
d) Both S 1 and S 2 are false.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

S1 : consider the graph. 
But the minimum weight edge BC in G is not 
present. So, the S 1 is a false statement. 
S2 : In any undirected graph G, distinct edge 
weights means Unique MST. 
So, the S1 is false and S2 is true. 
<!-- PAGE 125 -->
ALGORITHMS


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G = (V, E) be a directed, weighed graph with 
weight function w : E -> R. For some function f : V - 
> R, for each edge (u, v) in E, define w'(u, v) as w(u, 
v) + f(u) - f(v). 
Which one of the options completes the following 
sentence so that it is TRUE? 
"The shortest paths in G under w are shortest paths 
under w' too, ". 
a) for every f : V -> R 
b) if and only if for all u in V, f(u) is positive 
c) if and only if for all u in V, f(u) is negative 
d) if and only if f(u) is the distance from  s to u in 
the graph obtained by adding a new vertex s to 
G and edges of zero weight from s to every 
vertex of G


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

For any mapping of vertices to real values, the 
shortest paths won't change. All intermediate 
nodes values get canceled on any path you take 
and what you're left with is only the source and 
destination node values which would add up to 
cost on any path. Hence, the shortest paths would 
still be the same. 
Option D is wrong because of the "if and only if" 
clause in it. If it were "if", it would be correct. The 
condition given is sufficient but not necessary. 
Hence, "only if" is incorrect in the option. 
Basically it is saying f(u) would be 0 for all 
vertices since they're connected to a new vertex s 
with zero weighted edge. Similarly options B and 
C are also wrong for the same reason.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G = (V, E) be a weighted undirected graph and 
let T be a Minimum Spanning Tree (MST) of G 
maintained using adjacency lists. Suppose a new 
weighted edge (u,v) ∈ V × V is added to G. The 
worst case time complexity determining if T is still 
an MST of the resultant graph is 
a) θ(|E| log |V|) 
b) θ(|E| + |V|) 
c) θ(|E| |V|) 
d) θ (|V|)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

We can accomplish this in O(∣V∣) time as 
follows: 
1. Perform a BFS in T from node u to node v to 
identify the edge with the highest weight 
along that path — this takes O(∣V∣) time. 
2. If the weight of that edge is larger than the 
weight of the new edge being considered, 
replace the old edge with the new one. 
3. Otherwise, leave the tree unchanged, since 
the new edge would not result in a better 
MST. This step is O(1). 
The reasoning for this method is that inserting a 
new edge into T creates exactly one cycle. To 
maintain the MST property, we must remove the 
heaviest edge from that cycle.


</details>

---


### Q18. [GATE CSE – 2021 SET-1 NAT (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a graph G = (V, E), where V = {v 1 , v 2 , 
…, v 100 }, E = {(v i , v j ) | 1 <= i <= j <= 100}, and 
weight of the edge (v i , v j ) is |i – j|. The weight of 
the minimum spanning tree of G is   .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 99


**Step-by-Step Explanation:**

There are 100 vertices numbered from 1 to 100. 
Edges are presents in this graphs E={ (v i, v j) | 
1≤i1, v 2), (v 2, v 3), ..... (v 99, v 100) will have 
minimum weight, i.e., 1 for each edge. As we 
know that, there are 99 edges are possible in 
minimum spanning tree of 100 -vertices graph. 
Therefore, these edges (v 1, v 2), (v 2, v 3),  (v99, 
v100) will be spanning tree for given graph. These 
are 99 edges with 1 cost of each. The weight of 
minimum spanning tree of G is 99*1 = 99.  
Option (A) is correct.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be any connected, weighted, undirected 
graph. 
I. G has a unique minimum spanning tree, if no 
two edges of G have the same weight. 
II. G has a unique minimum spanning tree, if, for 
every cut of G, there is a unique minimum-
weight edge crossing the cut. 
Which of the above two statements is/are 
TRUE? 
a) I only 
b) II only 
c) Both I and II 
d) Neither I nor II


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

If no two edges of G have same weight surely G 
will have unique spanning tree is true. So I is true 
Also if, for every cut of G, there is a unique 
minimum weight edge crossing the cut then G 
will have unique spanning tree . So II is also true 
[Note: The converse of II is not true, but that is 
not relevant to this question] So, both I and II are 
true. Option (C) is correct.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following undirected graph G: 
Choose a value of x that will maximize the 
number of minimum weight spanning trees 
(MWSTs) of G. The number of MWSTs of G for 
this value of x is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 4


**Step-by-Step Explanation:**

Edges with weights 1 and 3 will be selected first, 
Now bottom edge with weight 4 will not be selected 
as will cause cycle on MST, both corner vertices 
have two-two choices to select the vertices, so these 
corner edges with weights 4 and 5 will resultant 2 * 
2 = 4 MSTs. So, total number of MSTs are 2 * 2 = 
4, which is answer.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a weighted connected undirected graph  
with distinct positive edge weights. If every edge 
weight is increased by the same value, then which 
of the following statements is/are TRUE? 
P: Minimum spanning tree of G does not change 
Q: Shortest path between any pair of vertices does 
not change 
a) P only 
b) Q only 
c) Neither P nor Q 
d) Both P and Q


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

The shortest path may change. The reason is, there 
may be different number of edges in different paths 
from s to t. For example, let shortest path be of 
weight 15 and has 5 edges. Let there be another path 
with 2 edges and total weight 25. The weight of the 
shortest path is increased by 5*10 and becomes 15 
+ 50. Weight of the other path is increased by 2*10 
and becomes 25 + 20. So the shortest path changes 
to the other path with weight a s 45. The Minimum 
Spanning Tree doesn’t change. Remember the 
Kruskal’s algorithm where we sort the edges first. 
If we increase all weights, then order of edges won’t 
change. 
<!-- PAGE 126 -->
ALGORITHMS


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


G = (V, E) is an undirected simple graph in which 
each edge has a distinct weight, and e is a particular 
edge of G. Which of the following statements about 
the minimum spanning trees (MSTs) of G is/are 
TRUE? 
I. If e is the lightest edge of some cycle in G, then 
every MST of G includes e 
II. If e is the heaviest edge of some cycle in G, then 
every MST of G excludes e 
a) i only 
b) ii only 
c) both i and ii 
d) neither i and ii


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Here in below Graph G in (Cycle 3, 4, 5) 3 is the 
lightest edge and still it is not included in MST. 
Statement 2:- True by[ Cycle property of MST] 
: (in above Graph G 1 - 2- 3 is a cycle and 3 is 
the heaviest edge) If heaviest edge is in cycle then 
we will always exclude that because cycle is there 
means, we can have oth er choice of low cost 
edges. (If edge weights are not distinct even the 
heaviest edge can be part of the MST and here in 
question distinct edge weight is clearly 
mentioned)


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the weighted undirected graph with 4 
vertices, where the weight of edge {i, j} is given by 
the entry W ij in the matrix W.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 12


**Step-by-Step Explanation:**

If x = 12 then the shortest path between d & c 
will contain edge with label ‘x’.


</details>

---


### Q21. [GATE CSE – 2019 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a complete undirected graph on 4  
vertices having 6 edges with weights being 1,2 
a minimum weight spanning tree of G can have 
is . 
a) 4 
b) 5 
c) 6 
d) 7 
𝑊 = [
0 2 8 5
2 0 5 8
8 5 0 x
5 8 x 0
] 
The largest possible integer value of x, for which at 
least one shortest path between some pair of vertices 
will contain the edge with weight x is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

One graph that has maximum possible weight of 
spanning tree 
An MST on 4 vertices has 3 edges, and by 
Kruskal’s order the two smallest edges 1 and 2 can 
always be included without forming a cycle. 
 To maximize the MST weight, arrange the 
graph so that edge 3 would create a cycle with 
1 and 2 and hence is skipped; the next feasible 
edge is 4, giving total 1 + 2 + 4 = 7. 
 This is the maximum possi ble MST weight 
under the given multiset of edge weights.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A message is made up entirely of characters from 
the set X = {P,Q,R,S,T} . The table of 
probabilities of each character is shown below : 
Character Probability 
P 0.22


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 225


**Step-by-Step Explanation:**

In Huffman coding, we pick the least two frequent 
(or probable) character, combine them and create 
a new node. 
Looking at above tree structure, Number of bits 
required by each: P – 2,Q – 2,R – 
3,S – 2,T – 3 
Therefore, excepted length of the encoded 
message: 
= 3*0.8 + 3*0.17 + 2*0.19 + 2 *0.22 + 2*0.34 
= 2.25 
For 100 characters, 2.25*100 = 225


</details>

---


### Q0. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


17 
R 0.34 
S 0.19 
T 0.08 
Total 1.00 
A message of 100 characters over X is encoded 
using Huffman coding. Then the excepted length 
of the encoded message in bits is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The graph shown below has 8 edges with distinct 
integer edge weights. The minimum spanning 
tree (MST) is of weight 36 and contains the edges: 
{(A, C), (B, C), (B, E), (E, F), (D, F)}. The edge 
weights of only those edges which are in the MST 
are given in the fi gure shown below. The 
minimum possible sum of weights of all 8 edges 
of this graph is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 69


**Step-by-Step Explanation:**

Consider the cycle ABC. AC and BC and are part 
of minimum spanning tree. So, AB should be 
greater than max(AC, BC) (greater and not equal as 
edge weights are given to be distinct), as otherwise 
we could add AB to the minimum spanning tree and 
removed the greater of AC, BC and we could have 
got another minimum spanning tree. So, AB > 9. 
Similarly, for the cycle DEF, ED > 6. 
And for the cycle BCDE, CD > 15. 
So, minimum possible sum of these will be 10 + 7 
+ 16 = 33. Adding the weight of spanning tree, we 
get the total sum of edge weights. 
= 33 + 36 = 69


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a connected undirected graph of 100 
vertices and 300 edges. The weight of a minimum 
spanning tree of G is 500. When the weight of 
each edge of G is increased by five, the weight of 
a minimum spanning tree becomes  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 995


**Step-by-Step Explanation:**

Since there are 100 vertices, there must be 99 edges 
in Minimum Spanning Tree (MST). When weight 
of every edge is increased by 5, the increment in 
weight of MST is = 99 * 5 = 495 so new weight of 
MST is 500 + 495 which is 995.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is the time complexity of Bellman-Ford 
single-source shortest path algorithm on a complete 
graph of n vertices? 
a) Θ(n2) 
b) Θ(n2log n) 
c) Θ(n3) 
d) Θ(n3log n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

A complete graph with n vertices. 
To Find: Time complexity of the Bellman-Ford 
Single Source Shortest Path (SSSP) algorithm. 
Analysis: 
For a general graph with n vertices and m edges, the 
time complexity of the Bellman -Ford algorithm is 
O(n·m) 
For a complete graph, every pair of vertices is 
connected by an edge. 
Hence, the total number of edges is: 
m = (nC2) = n(n − 1) / 2 = O(n²) 
Substituting  this  value  in  the  general  time 
complexity formula: O(n · m) = O(n · n²) = O(n³) 
∴ Final Time Complexity: 
O(n³)


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G be a weighted graph with edge weights 
greater than one and G' be the graph constructed by 
squaring the weights of edges in G. Let T and  T' be 
the minimum spanning trees of G and G' , 
respectively, with total weights t and t' . Which of 
the following statements is TRUE? 
a) T' = T with total weight t' = t 2 
b) T' = T with total weight t' < t 2 
c) T' ≠ T but total weight t' = t2 
d) None of the above


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

When edge weights are squared, the minimum 
spanning tree does not change. 
This happens because squaring positive weights 
keeps their order the same. If one weight was 
smaller than another before squaring, it remains 
smaller after squaring. 
The sum of squared weights is less than the square 
of the sum of weights, except when there is only one 
edge.So option B is generally correct, and option A 
is only true for single-edge graphs. In GATE 2012, 
marks were given to all. 
<!-- PAGE 127 -->
ALGORITHMS


</details>

---


### Q30. [GATE CSE – 2017 SET-2 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the directed graph shown in the figure 
below. There are multiple shortest paths between 
vertices S and T. Which one will be reported by 
Dijkstra’s shortest path algorithm? Assume that, in 
any iteration, the shortest path to a vertex v is 
updated only when a strictly shorter path to v is 
discovered. 
a) SDT 
b) SBDT 
c) SACDT 
d) SACET


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Relaxation at every vertex is as follows: 
Note that the next picked vertex corresponds to 
the next row in Table


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An undirected graph G(V,E) contains n (n > 2) 
nodes named v 1, v 2... v n. Two nodes vi , vj are 
connected if and o nly if 0 < | i - j | < = 2 .  Each 
edge ( vi, vj )is assigned a weight i + j. A sample 
graph with n = 4 is shown below. 
What will be the cost of the minimum spanning 
tree (MST) of such a graph with 11 nodes? 
a) 1 / 11 ( 11 n2 - 5n ) 
b) n2 - n + 1 
c) 6n – 11 
d) 2n + 1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

We observe a pattern in the weight of MST 
being formed 
For n = 3 (1 + 2 + 3) + (1) 
For n = 4 (1 + 2 + 3 + 4) + (1 + 2) 
For n = 5 (1 + 2 + 3 + 4 + 5) + (1 + 2 + 3) 
These can be obtained by drawing graphs for 
these graphs. 
∴ Total weight of MST is: 
∑𝑛  𝑖 + ∑𝑛−2𝑖 = 𝑛2 − 𝑛 + 1


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An undirected graph G(V, E) contains n (n > 2) 
nodes named v₁, v₂, . . . , vₙ. Two nodes vᵢ, vⱼ are 
connected if and only if 0 < |i − j| ≤ 2. Each edge 
(vᵢ, vⱼ) is assigned a weight i +  j. A sample graph 
with n = 4 is shown below. 
The length of the path from v5 to v6 in the 
MST of previous question with n = 10 is 
a) 11 
b) 25 
c) 31 
d) 41


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

𝑖−1 
and expands the MST by adding one vertex in 
each step which is close to the Intermediate 
MST(made till previous step). 
Therefore, correct answer would be (C). 
(A) : (d,f) is chosen but neither d nor f vertices are 
part of the previous M ST(MST made till previous 
step). 
(B) : (g,h) is chosen but neither g or h vertices are 
part of the previous MST(MST made till previous 
⇒8+4+3+6+10 = 31


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a complete undirected graph with vertex  
set {0, 1, 2, 3, 4}. Entry Wij in the matrix W below 
is the weight of the edge {i, j}. 
0 1 8 1 4 
l1 0 12 4 9 
W = ⎪8 12 0 7 3⎪ 
1 4 7 0 2 
𝗁4 9 3 2 0) 
What is the minimum possible weight of a spanning 
tree T in this graph such that vertex 0 is a leaf node 
in the tree T? 
a) 7 
b) 8 
c) 9 
d) 10


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

V0 V1 V2 V3 V4 
For minimum cost, we go to The edges of the 
spanning tree are: 
0−1, 1−3, 3−4, 4−2. 
∴ Total cost = 10 
step). 
(D): (f,c) is chosen but at that point (f,d) is close to 
the intermediate MST


</details>

---


### Q34. [GATE CSE – 2011 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following graph: 
Which one of the following is NOT the 
sequence of edges added to the minimum 
spanning tree using Kruskal's algorithm? 
a) (b,e) (e,f) (a,c) (b,c) (f,g) (c,d) 
b) (b,e) (e,f) (a,c) (f,g) (b,c) (c,d) 
c) (b,e) (a,c) (e,f) (b,c) (f,g) (c,d) 
d) (b,e) (e,f) (b,c) (a,c) (f,g) (c,d)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

In Option D b-c with weight, 4 is added before 
a-c with weight 3 is added. In 
Kruskal's algorithm, edges should be added in 
non-decreasing order of 
weight.


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statement(s) is/are 
correct regarding Bellman-Ford 
shortest path algorithm? 
P. Always finds a negative weighted cycle, if 
one exists. 
Q. Finds whether any negative weighted cycle 
is reachable from the source. 
a) P only 
b) Q only 
c) Both P and Q 
d) Neither P nor Q


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Statement P: Always finds a negative 
weighted cycle, if one exists. 
This statement is incorrect. Bellman -Ford can only 
detect a negative cycle if it is reachable from the 
source node. If a graph contains a negative cycle in 
a "disconnected" component that the source cannot 
get to, the algorithm will finish its iterations without 
ever seeing the decreasing path weights that signal 
a cycle.Statement Q: Finds whether any negative 
weighted cycle is reachable from the source. 
This statement is correct. This is the specific 
utility o f the Nth relaxation step in Bellman -
Ford. If, after relaxing all edges V -1 times, we 
can still relax an edge one more time, it proves 
that a shorter path exists —which is only 
possible if there is a negative cycle on a path 
starting from the source


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For the undirected, weighted graph given below, 
which of the following sequences of edges 
represents a correct execution of Prim's algorithm 
to construct a Minimum Spanning Tree?


- **(A)** (a, b), (d, f), (f, c), (g, i), (d, a), (g, h), (c, e), (f, h)

- **(B)** (c, e), (c, f), (f, d), (d, a), (a, b), (g, h), (h, f), (g, i)

- **(C)** (d, f), (f, c), (d, a), (a, b), (c, e), (f, h), (g, h), (g, i)

- **(D)** (ℎ, 𝑔), (𝑔, 𝑖), (ℎ, 𝑓), (𝑓, 𝑐), (𝑓, 𝑑), (𝑑, 𝑎), (𝑎, 𝑏), (𝑐, 𝑒)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Prim's algorithm starts with from any vertex 
𝑖−1


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Dijkstra's single source shortest path algorithm 
when run from vertex a in the above graph, 
computes the correct shortest path distance to 
a) only vertex a 
b) only vertices a, e, f, g, h 
c) only vertices a, b, c, d 
d) all the vertices


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Misconception : (these are statements most of 
people think): 
Dijkstra Doesn’t work on Negative cycles. 
Dijkstra will work on if G has Negative Edges and 
Non-Negative cycles. 
But above are not true. 
correct statements are: 
1) Dijkstra Doesn’t work on Negative cycles. 
Hence Dijkstra won’t detect negative edge cycles. 
2) Dijkstra may or may not work on Negative 
Edge cycles it depends on the fact if the negative 
weight cycle is reachable from the source. 
<!-- PAGE 128 -->
ALGORITHMS 
Letter Probability 
𝑎 1/2 
𝑏 1/4 
𝑐 1/8 
𝑑 1/16 
𝑒 1/32 
𝑓 1/32 
Prefix Code Code Length 
𝑎 = 0 1 
𝑏 = 10 2 
𝑐 = 110 3 
𝑑 = 1110 4 
𝑒 = 11110 5 
𝑓 = 11111 5


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a weighted, undirected graph with positive 
edge weights and let u v be an edge in the graph. It is 
known that the shortest path from the source vertex s 
to u has weight 53 and the shorte st path from s to v 
has weight 65. Which one of the following statements 
? 
a) Weight(u,v)≤12 
b) Weight(u,v)=12 
c) Weight(u,v)≥12 
d) Weight(u,v)>12


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

If weight (u, v) < 12, then the min. weight of (s, 
v) = weight of (s, u) + weight of (u, v) = 53 + 
(<12) will be less than 65.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let w be the minimum weight among all edge 
weights in an undirected connected graph. Let e be a 
specific edge of weight w. Which of the following is 
False ? 
a) There is a minimum spanning tree containing e. 
b) If e is not in a minimum spanning tree T, then 
in the cycle formed by adding e to T, all edges 
have the same weight. 
c) Every minimum spanning tree has an edge of 
weight w. 
d) e is present in every minimum spanning tree.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

D is the false statement. 
A minimum spanning tree must have the edge 
with the smallest weight (In Kruskal's algorithm 
we start from the smallest weight edge). So, C is 
TRUE. 
If e is not part of a minimum spanning tree, then 
all edges which are part of a cycle with e, must 
have weight <=e, as otherwise we can 
interchange that edge with e and get another 
minimum spanning tree of lower weight. So, B 
and A are also TRUE. 
D is false because, suppose a cycle is there with 
all edges having the same minimum weight w. 
Now, any one of them can be avoided in any 
minimum spanning tree.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose the lette rs a, b, c, d, e, f have probabilities 
1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. 
What is the average length of the Huffman code for 
the letters a,b,c,d,e,f? 
a) 3 
b) 2.1875 
c) 2.25 
d) 1.9375


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

1 1 1 1 1 1 Avg length =  × 1 +  × 2 +  × 3 +  × 4 +  × 5 +  × 5 
2 4 8 16 32 32 
16 + 16 + 12 + 8 + 5 + 5 
= 
= 1.9375


</details>

---


### Q41. [GATE CSE – 2009 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose the letters a, b, c, d, e, f have probabilities 
1/2, 1/4, 1/8, 1/16, 1/32, 1/32 respectively. 
Which of the following is the Huffman code for 
the letter a, b, c, d, e, f? 
a) 0, 10, 110, 1110, 11110, 11111 
b) 11, 10, 011, 010, 001, 000 
c) 11, 10, 01, 001, 0001, 0000 
d) 110, 100, 010, 000, 001, 111


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Optimal Huffman code lengths for probabilities 
that are exact powers of 1/2 are calculated as - 
log2(p). 
a: -log2(1/2) = 1 bit 
b: -log2(1/4) = 2 bits 
c: -log2(1/8) = 3 bits 
d: -log2(1/16) = 4 bits 
e: -log2(1/32) = 5 bits 
f: -log2(1/32) = 5 bits 
Option A is the only choice with code lengths of 
1, 2, 3, 4, 5, 5 respectively (0, 10, 110, 1110, 
11110, 11111). the correct answer is A.


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The characters a to h have the set of frequencies 
based on the first 8 Fibonacci numbers as 
follows 
a:1, b:1, c:2, d:3, e:5, f:8, g:13, h:21 
A Huffman code is used to represent the 
characters. What is the sequence of characters 
corresponding to the following code? 
a) fdheg 
b) ecgdf 
c) dchfg 
d) fehdg


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A:


**Step-by-Step Explanation:**

Huffman's tree is as follows. The two least frequent 
characters are taken as the children of a newly made 
node and the frequency of the newly made node is 
made equal to the sum of those two child no des. 
Then the same procedure is repeated till all nodes 
are finished. 
110111100111010 = 110111100111010 =fdheg


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following graph: 
Which one of the following cannot be the sequence of 
edges added, in that order, to a minimum spanning 
tree using Kruskal's algorithm? 
a) (a - b), (d - f), (b - f), (d - c), (d - e) 
b) (a - b), (d - f), (d - c), (b - f), (d - e) 
c) (d - f), (a - b), (d - c), (b - f), (d - e) 
d) (d - f), (a - b), (b - f), (d - e), (d - c)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

In Kruskal's algo the edges are added in non 
decreasing order of their weight. But in Option D 
edge d -e with weight 3 is added befor e edge d -c 
with weight 2. Hence, option D is wrong option. 
Q) Let G be a directed graph whose vertex set is the 
set of numbers from 1 to 100. There is an edge from 
a vertex i to a vertex j iff either j = i + 1 or j = 3i. 
The minimum number of edges in a path in G from 
vertex 1 to vertex 100 is:


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let s and t be two vertices in a undirected graph 
G=(V, E) having distinct positive edge weights. 
Let [X, Y] be a partition of V such that s∈ X and 
t∈⁡Y. Consider the edge e having the minimum 
weight amongst all those edges that have one 
vertex in X and one vertex in Y. 
The edge e must definitely belong to: 
a) the minimum weighted spanning tree of G 
b) the weighted shortest path from s to t 
c) each path from s to t 
d) the weighted longest path from s to t


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

According to the Cut Property of Minimum 
Spanning Trees (MST): If the vertices of a graph are 
edge with the minimum weight that crosses this cut 
(i.e., connects a vertex in one set to a vertex in the 
other) must be included in the Minimum Spanning Tree. 
Here, [X, Y] is a partition (cut) of the graph's 
vertices. The edge e is given as the minimum weight 
edge crossing this cut. Since all edge weights are 
positive and distinct, the graph has a unique MST. 
Therefore, this minimum weight edge e must 
strictly belong to the minimum weighted spanning 
tree of G. 
It does not necessarily belong to the shortest path 
between s and t, because the shortest path might 
cross the cut through a different, slightly heavier 
edge if the paths leading to that edge are 
significantly shorter. 
Therefore, the correct answer is A. 
<!-- PAGE 129 -->
ALGORITHMS


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An undirected graph G has n nodes. Its adjacency 
matrix is given by an nxn square matrix whose 
(i) diagonal elements are 0's and 
(ii) non-diagonal elements are 1's. 
which one of the following is TRUE? 
a) Graph G has no minimum spanning tree 
(MST) 
b) Graph G has a unique MST of cost n-1 
c) Graph G has multiple distinct MSTs, each of 
cost n-1 
d) Graph G has multiple spanning trees of 
different costs


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Solution: 
Based on the given adjacency matrix: 
 Diagonal elements are 0: There are no self-
loops. 
 Non-diagonal elements are 1: There is an edge 
between every pair of distinct vertices, and every 
edge has a weight of 1. 
This describes a complete graph (Kn) where all 
edge weights are equal to 1. 
A spanning tree for a graph with n vertices must 
contain exactly n-1 edges. Since every edge in 
this graph has a weight of 1, the cost of any 
spanning tree will be exactly (n- 1)*1 = n-1. 
Because all edges have the exact same weight, 
any valid tree that connects all $n$ nodes is a 
Minimum Spanning Tree. According to Cayley's 
formula, a complete graph with n vertices has nn-
2 distinct spanning trees. As long as n > 2, there 
will be multiple distinct spanning trees. 
Therefore, there are multiple distinct MSTs, and 
every single one of them has a cost of n-1. 
The correct answer is C.


</details>

---


### Q46. [GATE CSE – 2006 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let G(V,E) be an undirected graph with positive 
edge weights. Dijkstra's single source shortest path 
algorithm can be implemented using the binary 
heap data structure with time complexity: 
a) O(|V|2) 
b) O(|E| + |V| log |V|) 
c) O(|V| log |V|) 
d) O((|E| + |V|) log |V|)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: When using a Binary Heap for 
Dijkstra's algorithm: 
1. Extract Min: This is done once for each vertex. 
Total: |V| log |V|. 
2. Decrease Key: In the worst case, this is done for 
every edge when relaxing them. Total: |E| log 
|V|. 
Combining these, you get O((|V| + |E|) log |V|). 
Note: Option B, O(|E| + |V| log |V|), is only 
possible if you use a Fibonacci Heap, which 
wasn't what the question asked for.


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a table T, where the elements T[i][j], 
0 <= i, j <= n, represent the cost of the optimal 
solutions of different subproblems of a problem 
that is being solved using a dynamic 
programming algorithm. The recursive 
formulation to compute the table entries is as 
follows: 
T[0][k] = T[k][0] = 1 for k = 0, 1, 2, …, n 
T[i][j] = 2T[i−1][j]+3T[i][j−1] for 1 ≤ i, j ≤ n 
Consider the following two algorithms to 
compute entries of T. Assume that for both the 
algorithms, for all 0 ≤ i, j ≤ n, T[i][j] has been 
initialized to 1. 
Algorithm B₁: 
For i = 1 to n 
For j = 1 to n 
T[i][j] = 2T[i − 1][j] + 3T[i][j − 1] 
Algorithm B₂: 
For s = 2 to 2n 
For i = 1 to n 
For j = 1 to n 
If (i + j == s) 
T[i][j] = 2T[i − 1][j] + 3T[i][j − 1] 
Algorithm Bₖ, k ∈ {1, 2}, is said to be correct if 
and only if it calculates the correct values of 
T[i][j], for all 0 ≤ i, j ≤ n, as per the recursive 
formulation, at the end of the execution of the 
algorithm Bₖ. 
Which one of the following statements is true? 
a) Both algorithms B1 and B2 are correct 
b) Algorithm B1 is correct, but algorithm B2 
is incorrect 
c) Algorithm B2 is correct, but algorithm B1 is 
incorrect 
d) Both algorithms B1 and B2 are incorrect


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

In dynamic programming, an algorithm is 
correct if it calculates T[i][j] only after its 
dependencies T[i−1][j] and T[i][j−1] have been 
computed. 
Algorithm B₁ (Row-major): 
When computing T[i][j], T[i−1][j] (above) is 
already computed in the previous row, and 
T[i][j−1] (left) is already computed in the 
current row.Correct statement. 
Algorithm B₂ (Diagonal / Sum-based): 
For cell (i, j), both dependencies (i−1, j) and (i, 
j−1) have sum s−1, where s = i + j. Since s 
increases sequentially, all required cells are 
computed earlier. Correct statement.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Define Rn to be the maximum amount earned by 
cutting a rod of length n meters into one or more 
pieces of integer length and selling them. For i > 
0, let p[i] denote the selling prices of a rod whose 
length is i meters. Consider the array of prices : 
p[1] = 1, p[2] = 5, p[3] = 8, p[4] = 9, p[5] = 10, 
p[6] = 17, p[7] = 18 
Which of the following statements is/are correct 
about R 7 ? 
a) R7 cannot be achieved by a solution 
consisting of three pieces. 
b) R7 = 19 
c) R7 = 18 
d) R7 is achieved by three different solutions.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C,D.


**Step-by-Step Explanation:**

Check splits for n = 7: max of p, p+p, p+p, p+p, 
and multi-piece combos. p = 18; p+p = 1+17 = 
18; p+p = 5+10 = 15; p+p = 8+9 = 17. Three- 
piece 2+2+3 gives 5+5+8 = 18, so there are three 
optimal ways: 7; 1+6; 2+2+3. Hence R7 = 18 
and multiple optimal solutions exist. 
→R7 = 18, and it can be achieved in three ways;


</details>

---


### Q3. [GATE CSE – 2026 SET-2 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Assume that multiplying a matrix G 1 of  
dimension p×q with another matrix G 2 of 
dimension q × r requires scalar multiplications. 
Computing the product of matrices 
G1 G2 G 3 ……Gn can be done by 
parenthesizing in different ways. Define Gi 
Gi+1 as an explicitly computed pair for a given 
parenthesization if they are directly multiplied. 
For example, in the matrix multiplication chain 
G1 G2 G3 G4 G5 G6 using parenthesization


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

No. of ways of multiplying the chain of matrices 
Where m = no. of multiplications (not matrices) 
6C3 / (3+1) 
Total number of scalar multiplications are 48 + 
75 + 50 + 2000 = 2173 and optimal parenthesis 
is ((F1(F2(F3 F4))) F5). As concl uded, F3, F4 
are explicitly computed pairs.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


An algorithm to find the length of the longest 
monotonically increasing sequence of numbers 
in an array A[0: n  - 1] is given below. Let L; 
denote the length of the longest monotonically 
increasing sequence starting at index i in the 
array. Initialize L n-1 = 1. For all i such that 0 ≤  
i ≤ n – 2 
b) F2 F3 only 𝐿 = 1 + 𝐿𝑖+1 if 𝐴[𝑖] < 𝐴[𝑖 + 1] 
𝑖 { 
c) F3 F4 only 
d) F1,F2 and F4


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

The algorithm computes the length of the 
longest increasing sequence starting fro m each 
index by building the solution for smaller 
subproblems (from the end towards the 
beginning) and reusing previously computed 
results,  which  is  the  essence  of  dynamic 
programming. Each computation at index i


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the weights and values of items listed 
below. Note that there is only one unit of each item. 
The task is to pick a subset of these items such that 
their total weight is no more than 11 Kgs and their 
total value is maximized. Moreover, no item may be 
split. The total value of items picked by an optimal 
algorithm is denoted by Vopt. A greedy algorithm 
sorts the items by their value-to-weight ratios in 
descending order and packs them greedily, starting 
from the first item in the ordered list. The total value 
of items picked by the greedy algorithm is denoted 
by Vgreedy. 
The value of Vopt - Vgreedy is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 16


**Step-by-Step Explanation:**

Calculate the Value-to-Weight Ratios 
Item 1: 60 / 10 = 6 
Item 2: 28 / 7 = 4 
Item 3: 20 / 4 = 5 
Item 4: 24 / 2 = 12 
Step 2: Find the Optimal Value (Vopt) 
Pick Item 1 alone: Weight = 10 kg, Value = 60 
Pick Items 2 & 3: Weight = 11 kg, Value = 48 
Pick Items 2 & 4: Weight = 9 kg, Value = 52 
Pick Items 3 & 4: Weight = 6 kg, Value = 44 
The maximum possible value is 60. Therefore, Vopt 
= 60. 
Step 3: Find the Greedy Value (Vgreedy) Sorted 
order: 
Item 4 (12), Item 1 (6), Item 3 (5), Item 2 (4). 
Try Item 4: Weight is 2 kg. Fits. (Remaining: 9 kg, 
Value: 24) 
Try Item 1: Weight is 10 kg. Does not fit. Skip. 
Try Item 3: Weight is 4 kg. Fits. (Remaining: 5 kg, 
Value: 44) 
Try Item 2: Weight is 7 kg. Does not fit. Skip. 
Total greedy value is 44. Therefore, Vgreedy = 44. 
Step 4: Calculate the Difference Vopt - Vgreedy = 
60 - 44 = 16. The value of Vopt - Vgreedy is 16. 
<!-- PAGE 134 -->
ALGORITHMS


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let A 1 , A 2 , A 3 , and A 4 be four matrices of 
dimensions 10 × 5, 5 × 20, 20 × 10, and 10 × 5, 
respectively. The minimum numb er of scalar 
multiplications required to find the product 
A1A2A3A4 using the basic matrix 
multiplication method is   .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 1500


**Step-by-Step Explanation:**

The answer is 1500. 
Matrix Parenthesizing (A1 (A2A3)A4) : 
Check my solution below, using dynamic 
programming. 
A1 A2 A3 A4 
10 * 5 5 * 20 20 * 10 10 * 5 
 𝐴12 = 10 × 5 × 20 = 1000 
 𝐴23 = 5 × 20 × 10 = 1000 
depends on the result for index i+1, and all 
results are stored and reused.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider two strings A = {"qpqrr"} and B = 
"pqprqrp". Let x be the length of the longest 
common subsequence (not necessarily 
contiguous) between A and B and let y be the 
number of such longest common subsequences 
between A and B. Then x+10y =  . 
a) 248000 b)44000 
b) 19000 d)25000 
1 otherwise 
Finally the length of the longest monotonically 
increasing sequence is Max (L 0 , L1 ,….,L n-1 ). 
Which of the following statements is TRUE? 
a) The algorithm uses dynamic programming 
paradigm 
b) The algorithm has a linear complexity and 
uses branch and bound paradigm 
c) The algorithm has a non-linear polynomial 
complexity and uses branch and bound 
paradigm. 
d) The algorithm uses divide and conquer 
paradigm.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** is 𝟑𝟒.


**Step-by-Step Explanation:**

The LCS is of length 4. There are 3 LCS of 
length 4 "qprr", "pqrr" and qpqr A subsequence 
is a sequence that can be derived from another 
sequence by selecting zero or more elements 
from it, without changing the order of the 
remaining elements. Subsequence need not be 
contiguous. Since the length of given strings A 
= "qpqrr" and B = "pqprqrp" are very small, we 
don’t need to build a 5x7 matrix and solve it 
using dynamic programming. Rather we can 
solve it manually just by brute force. We will 
first check whether there exist a subsequence of 
length 5 since min_length(A,B) = 5. Since there 
is no subsequence , we will now check for 
length 4. “qprr”, “pqrr” and “qpqr”  are common 
in both strings. X = 4 and Y = 3 .X + 10Y = 34 .


</details>

---


### Q8. [GATE CSE – 2014 SET-2 NAT (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Four matrices M1, M2, M3 and M4 of 
dimensions pxq, qxr, rxs and sxt respectively 
can be multiplied is several ways with different 
number of total scalar multiplications. For 
example, when multiplied as ((M1 X M2) X (M3 
X M4)), the total number of multiplications is 
pqr + rst + prt.  If p = 10, q = 100, r = 20, s = 5 
and t = 80, then the number of scalar 
multiplications needed is:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

𝑀1 ∗ 𝑀2 ∗ 𝑀3 ∗ 𝑀4 
1⏟0 × 1⏟00 1⏟00 × 2⏟0 2⏟0 × ⏟5 ⏟5 × 8⏟0 
𝑃0 𝑃8 𝑃8 𝑃8  𝑃3 𝑃8 𝑃8 𝑃4 
𝑃0 = 10 
𝑃1 = 100 
𝑃2 = 20 
𝑃3 = 5 
𝑃4 = 80 
 𝐴34 
Algorithm Recurrence relation: 
= 20 × 10 × 5 = 1000 
𝐴12 + 𝐴33 + 5 × 20 × 10 = 2000 𝑚(𝑖, 𝑗) = 0, 𝑖 = 𝑗 
𝐴 = min { 𝐴11 + 𝐴23 + 10 × 5 × 10 = 1500 {min{𝑚[𝑖, 𝑘] + 𝑚[𝑘 + 1, 𝑗] + 𝑃𝑖−1 + 𝑃𝑘 + 𝑃1} 
𝐴24 = min {𝐴23 + 𝐴44 + 5 × 10 × 5 = 1250 𝐴22 + 𝐴34 + 5 × 20 × 5 = 1500 
𝐴11 + 𝐴24 + 10 × 5 × 5 = 1500 
𝐴14 = min {𝐴12 + 𝐴34 + 10 × 20 × 5 ⩾ 2000 
𝐴13 + 𝐴44 + 10 × 20 × 5 = 2000


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The weight of a sequence a 0 , a 1 , …, a n–1 of real 
numbers is defined as a0 + a1 / 2 + …+ a n–1 /2n–1 . 
A subsequence of a sequence is obtained by 
deleting some elements from the sequence, 
keeping the order of the remaining elements the 
same. Let X denote the maximum possible weight 
of a subsequence of a0 , a1 ,..., an-1 . Then X is equal 
to 
a) max(Y, a0 + Y) 
b) max(Y, a0 + Y/2) 
c) max(Y, a0 + 2Y) 
d) a0 + Y/2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Do not i nclude a0 in the subsequence: then the 
maximum possible weight will be equal to 
maximum possible weight of a subsequence of 
{a1, a2, …..an} which is represented by Y. 
Include a0: then maximum possible weight will 
be equal to a0 + (each number picked in Y w ill 
get divided by 2) a0 + Y/2. Here you can note 
that Y will itself pick optimal subsequence to 
<!-- PAGE 135 -->
ALGORITHMS 
maximize the weight. Final answer will be 
Max (Case1, Case2) i.e. Max (Y, a 0 + Y/2). 
Hence (B) is correct.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A sub -sequence of a given sequence is just the 
given sequence with some elements (possibly 
none or all) left out. We are given two sequences 
X[m] and Y[n] of lengths m and n, respectively, 
with indexes of X and Y starting from 0. 
We wish to find the length of the longest 
common sub-sequence (LCS) of x[m] and Y[n] 
as l(m,n), where an incomplete recursive 
definition for the function l(i,j) to compute the 
length of the LCS of x[ m] and Y[n] is given 
below: 
0, if either i = 0 or j = 0 
l(i, j) = { expr1, if i, j > 0 and x [i⁡−⁡1] = Y [j −⁡1]⁡
expr2, if i, j > 0 and x [i − 1] ! = Y [j − 1] 
Which one of the following options is correct? 
A) expr1 = l(i-1, j) + 1 
B) expr1 = l(i, j-1) 
C) expr2 = max (l(i-1, j), l(i,j-1)) 
D) expr2 = max(l(i-1, j-1), l(i,j))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

When the currently compared elemen ts 
doesn't match, we have two possibilities for 
the LCS, one including X[i] but not Y[j] and 
other including Y[j] but not X[i]. 
/* Returns length of LCS for X[0..m-1], Y[0..n-1] */ 
int lcs( char *X, char *Y, int m, int n ) 
{ 
if (m == 0 || n == 0) 
return 0; 
return max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n))


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The subset -sum problem is defi ned as follows. 
Given a set of n positive integers, 
S={a1,a2,...,an} and positive integer W, is there  
a subset of S whose elements sum to W? A 
dynamic program for solving this problem uses 
a 2-dimensional Boolean array, X, with n rows 
and W+1 columns. X[i, j], 1≤i≤n, 0≤j≤W, is 
TRUE if and only if there is a subset of 
{a1,a2,...,ai }whose elements sum to j. 
Which entry of the array X, if TRUE, implies 
that there is a subset whose elements sum to W? 
a) X[1,W] 
b) X[n,0] 
c) X[n,W] 
d) X[n-1,n]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C.


**Step-by-Step Explanation:**

If LAST ROW and LAST COLUMN entry is 1,  
then there exists a subset whose elements sum to w.


</details>

---


### Q12. [GATE CSE – 2010 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The subset -sum problem is de fined as follows. 
Given a set of n positive integers, S={a1,a2,...,an 
} and positive integer W, is there a subset of S 
whose elements sum to W? A dynamic program 
for solving this problem uses a 2 -dimensional 
Boolean array, X, with n rows and W+1 
columns. X[i,j], 1≤i≤n, 0≤j≤W, is TRUE if and 
only if there is a subset of { a1,a2,...,ai }whose 
elements sum to j.Which of the following is 
valid for 2≤i≤n and ai≤j≤W? 
a) X[i,j]=X[i−1,j]∨X[i,j−ai ] 
b) X[i,j]=X[i−1,j]∨X[i−1,j−ai ] 
c) X[i,j]=X[i−1,j]∧X[i,j−ai ] 
d) X[i,j]=X[i−1,j]∧X[i−1,j−ai ]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

X[i][j] = X[i - 1][j] U X[i - 1][j - a_i]  
We calculate the value of X[i][j] as if  
we include the value ai in the subset X[i - 1][j - a_i] or  
we do not include the value in the subset X[i - 1][j]. 
<!-- PAGE 136 -->
GATE CSE – 2026 SET-1 MSQ (2-MARKS) GATE CSE – 2026 SET-1 MSQ (2-MARKS) 
GATE CSE – 2025 SET-2 NAT (2-MARKS) 
GRAPH TECHNIQUES


</details>

---



## Topic 5: Topic 5


### Q1. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the following pseudocode for depth-first 
search (DFS) algorithm which takes a directed 
graph 𝐺(𝑉,𝐸) as input, where 𝑑[𝑣] and 𝑓[𝑣] are the 
discovery time and finishing time, respectively, of 
the vertex 𝑣 ∈𝑉. 
𝐷𝐹𝑆(𝐺) : 
unmark all 𝑣 ∈ 𝑉 
𝑡 ← 0 
for each 𝑣 ∈ 𝑉 
if 𝑣 is unmarked 
𝑡 ← Explore 
(𝐺, 𝑣, 𝑡 ) 
end if 
end for 
Explore ( 𝐺, 𝑣, 𝑡 ): 
mark 𝑣 
𝑡 ← 𝑡 + 1 
𝑑[𝑣] ← 𝑡 
for each (𝑣, 𝑤) ∈ 𝐸 
if 𝑤 is unmarked 
𝑡 ← Explore (𝐺, 𝑤, 𝑡) 
end if 
end for 
𝑡 ← 𝑡 + 1 
𝑓[𝑣] ← 𝑡 
return 𝑡 
Suppose that the input directed graph 𝐺(𝑉,𝐸) is a 
directed acyclic graph (DAG). For an edge 
(𝑢,𝑣)∈𝐸, which of the following options will 
NEVER be correct? 
a) 𝑑[𝑢]<𝑑[𝑣]<𝑓[𝑣]<𝑓[𝑢] 
b) 𝑑[𝑣]<𝑑[𝑢]<𝑓[𝑢]<𝑓[𝑣] 
c) 𝑑[𝑣]<𝑓[𝑣]<𝑑[𝑢]<𝑓[𝑢] 
d) 𝑑[𝑢]<𝑑[𝑣]<𝑓[𝑢]<𝑓[𝑣]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B,D


**Step-by-Step Explanation:**

A. This means: 
v is discovered after u 
v finishes before u 
So v is inside u’s DFS subtree. 
This corresponds to a tree edge or forward 
edge. 
B. This means: 
u is discovered after v 
u finishes before v 
So u is inside v’s DFS subtree.If edge (u, v) 
exists, then it is a back edge (from 
descendant to ancestor).Back edges create 
cycles. 
Since graph is a DAG → back edges cannot 
exist. 
C. v finishes before u is discovered. 
This is a cross edge. 
Cross edges are allowed in DAG. 
D. This represents interlapping intervals. 
According to the Parenthesis Theorem of 
DFS, for any two vertices u and v, their 
discovery/finishing intervals [d[u], f[u]] and 
[d[v], f[v]] must either be entirely disjoint or 
one must be entirely contained within the 
other. 
Intervals can never overlap in the manner 
shown in Option (D) in any graph, whether it 
is a DAG or not.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An undirected, unweighted, simple graph 𝐺(𝑉, 𝐸) is 
said to be 2 -colorable if there exists a function 𝑐: 𝑉 → 
{0,1} such that for every (𝑢, 𝑣) ∈ 𝐸, 𝑐(𝑢) ≠ 𝑐(𝑣). 
Which of the following statements about 2-
colorable graphs is/are true? 
a) If 𝐺 is 2-colorable, then 𝐺 may contain cycles 
of odd length 
b) If 𝐺 is 2-colorable, then 𝐺 may contain cycles 
of even length 
c) An optimal algorithm for testing whether 𝐺 is 
2-colorable runs in time Θ(|𝑉|+|𝐸|), if 𝐺 is 
represented as an adjacency list 
d) An optimal algorithm for testing whether 𝐺 is 
2-colorable runs in time Θ(|𝐸|log|𝑉|), if 𝐺 is 
represented as an adjacency list.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B,C


**Step-by-Step Explanation:**

A graph is 2-colorable if and only if it is 
bipartite. 
Key fact: 
A graph is bipartite ⇔ it contains no odd-length 
cycles. 
Only an even length cycle is allowed. 
We can test bipartiteness using: 
 BFS, or 
 DFS 
During traversal, assign alternate colors level by 
level. 
If we ever find an edge connecting two same-
colored vertices → not bipartite. 
Time complexity using adjacency list: 
 Each vertex visited once → O(|V|) 
 Each edge checked once → O(|E|) 
Total time: 
Θ(|V| + |E|) 
This is optimal because we must examine all 
vertices and edges. 
So (C) is TRUE. 
(D) An optimal algorithm runs in Θ(|E| log |V|) 
False. 
No sorting or priority queue is needed. 
The problem does not require log factor. 
Linear time is sufficient and optimal. 
So (D) is FALSE.


</details>

---


### Q3. [GATE CSE – 2021 SET-1 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the following algorithm someAlgo that 
takes an undirected graph G as input. 
someAlgo(G) : 
1. Let v be any vertex in G. Run BFS on G starting 
at v. Let u be a vertex in G at maximum distance 
from v as given by the BFS. 
2. Run BFS on G again with u as the starting vertex. 
Let z be the vertex at maximum distance from u as 
given by the BFS. 
3. Output the distance between u and z in G. 
The output of someAlgo(T) for the tree shown in the 
given figure is  . (Answer in integer) 
5 5 
<!-- PAGE 137 -->
ALGORITHMS


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 6


**Step-by-Step Explanation:**

The someAlgo (G) is simply calculating the 
diameter of the tree. 
"Diameter of a graph is the longest of all the 
shortest paths between any two vertices"


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements regarding 
Breadth First Search (BFS) and Depth First Search 
(DFS) on an undirected simple graph G is/are 
TRUE? 
a) A DFS tree of G is a Shortest Path tree of 
G. 
b) Every non-tree edge of G with respect to a 
DFS tree is a forward/back edge. 
c) If (u, v) is a non-tree edge of G with respect 
to a BFS tree, then the distances from the 
source vertex s to u and v in the BFS tree 
are within ±1 of each other. 
d) Both BFS and DFS can be used to find the 
connected components of G.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B,C,D


**Step-by-Step Explanation:**

A. False: A DFS tree does not necessarily represent 
the shortest paths from the source vertex. DFS 
explores as far as possible along each branch before 
backtracking, which means it does not guarantee the 
shortest path in terms of the number of edges. 
B. True: In an undirected graph, every non-tree edge 
with respect to a DFS tree is either a back edge or a 
forward edge because in an undirected graph, there 
are no cross edges in the context of DFS. 
C. True: In a BFS tree, the levels of the vertices 
represent their distances from the source vertex. If 
(u,v) is a non-tree edge, then u and v must be at the 
same level or at levels that differ by one because 
BFS explores all vertices at the current level before 
moving to the next level. 
D. True: Both BFS and DFS can traverse the graph 
and identify all vertices in a connected component. 
By repeating the traversal for unvisited vertices, 
both algorithms can find all connected components 
of the graph. 
<!-- PAGE 141 -->
ALGORITHMS


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let G be a directed graph and T a depth first search 
(DFS) spanning tree in G that is rooted at a vertex


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D) If a tree T is both a depth first


**Step-by-Step Explanation:**

search (DFS) and breadth first search (BFS) 
spanning tree rooted at the same vertex in a 
directed graph G, then: 
• In a BFS tree, all nodes at depth d+1 are 
discovered from nodes at depth d, which means 
there can't  be edges from a node to any 
descendant beyond the next level. 
• In DFS, a forward edge goes from a node to a 
descendant that is not its child. 
• If T satisfies both DFS and BFS properties, 
forward edges cannot exist since any descendant 
in DFS is either a chi ld (covered in BFS) or 
unreachable (in which case, not a forward edge). 
• Back-edges and cross -edges may still exist, 
depending on the structure of G. 
Hence, the only universally true statement is: 
There are no forward -edges in G with respect to 
the tree T.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let U = {1, 2, 3}. Let 2 U denote the powerset of U. 
Consider an undirected graph G whose vertex set is 
2U. For any A, B in 2 U, (A, B) is an edge in G if and 
only if (i) A != B, and (ii) eit her A ⊆⁡B or B ⊆⁡A. 
For any vertex A in G, the set of all possible orderings 
in which the vertices of G can be visited in a Breadth 
First Search (BFS) starting from A is denoted by 
B(A). 
If Φ denotes the empty set, then the cardinality of 
B(Φ) is   .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5040


**Step-by-Step Explanation:**

Given that U = {1,2,3} → |U| = 3 → Vertex set 
= {∅,{1},{2},{3},{1,2},{1,3},{2,3},{1,2,3}} 
and cardinality is 8. 
There is an edge between A and B vertices iff 
either of vertex set is proper subset to other 
vertex. 
As we know ∅ is proper subset to every other set 
in the vertex set except itself. 
That implies, ∅⁡is connected with 7 vertices 
directly, these 7 vertices can be visited in any 
order in BFS. 
Therefore No.of BFS orders = 7! = 120x6x7 = 
5040.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺 = (𝑉, 𝐸) be an undirected unweighted 
connected graph. The diameter of 𝐺 is defined as: 
diam(G)=max{" the length of shortest path 
between " u" and " v} 
Let 𝑀 be the adjacency matrix of 𝐺. Define graph 
𝐺2 on the same set of vertices with adjacency 
matrix 𝑁, where v. Suppose T is also a breadth first search (BFS) 𝑁 1 if 𝑀𝑖𝑗 > 0 or 𝑃𝑖𝑗 > 0 
tree in G, rooted at v. Which of the following 
statements is/are TRUE for every such graph G and 
𝑖𝑗 = {0 
where 𝑃 = 𝑀2. 
otherwise 
tree T? 
a) The only edges in G are the edges in T 
b) There are no cross-edges in G with 
respect to the tree T 
c) There are no back-edges in G with 
respect to the tree T 
d) There are no forward-edges in G with 
respect to the tree T


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

We have the following adj. matrix for this 
0 1 0 
𝑀 = [1 0 1] 
0 1 0 
1 0 1 
𝑀2 = [0 2 0] 
1 0 1 
P = M2 
By looking at this we can say that we have Diameter 
(G2)=1. We have Diameter(G)=2. Now by looking 
at these values we can eliminate options A, B, C and 
option D is satisfied only.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The number of edges present in the forest 
generated by the DFS traversal of an undirected 
graph G with 100 vertices is 40. The number of 
connected components in G is 
Which one of the following statements is true? 
a) ⌈⁡diam (G) / 2⌉ < diam (G 2 ) < diam(G) 
b) diam(G 2 ) = diam(G) 
c) diam(G) = diam(G 2 ) <= 2 diam(G) 
d) diam(G 2 ) <= ⌈⁡diam (G) / 2 ⌉


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 60


**Step-by-Step Explanation:**

• Number of vertices, n = 100 
• Number of edges in DFS forest, E = 40 
• For a graph, E = n − (number of connected 
components) 
• Let the number of connected components = c 
• Therefore, c = n − E = 100 − 40 = 60 
Hence, the graph has 60 connected components.


</details>

---


### Q9. [GATE CSE – 2025 SET-2 MSQ (1-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Match Let G be a simple undirected graph. Let TD be 
a depth first search tree of G. Let TB be a breadth 
first search tree of G. Consider the following 
statements. 
(I) No edge of G is a cross edge with respect to TD. 
(A cross edge in G is between two nodes neither of 
which is an ancestor of the other in TD.) 
(II) For every edge (u,v) of G, if u is at depth i and v 
is at depth j in TB, then |i - j| = 1. 
Which of the statements above must necessarily be 
true? 
a) I only 
b) II only 
c) Both I and II 
d) Neither I nor II


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Statement (I) is TRUE: 
In an undirected graph, DFS tree edges can only be 
tree edges or back edges. A back edge connects a 
node to one of its ancestors. Cross edges (edges 
between nodes where neither is an ancestor of the 
other) are impossible in an undirected DFS 
because if there were an edge between two such 
nodes, the DFS would have traversed that edge to 
visit the other node before finishing the current 
branch. 
Statement (II) is FALSE: 
In a BFS tree of an undirected graph, an edge (u, 
v) can exist between nodes at the same level 
(depth) or between nodes at adjacent levels. 
 If u is at depth i and v is at depth j, it is possible 
that |i - j| = 0 (they are on the same level). 
 The property for BFS is |i - j| <= 1, not strictly 
equal to 1.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Breadth First Search (BFS) is started on a binary 
tree beginning from the root vertex. There is a 
vertex t at a distance four from the root. If t is the 
n-th vertex in this BFS traversal, then the 
maximum possible value of n is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 31


**Step-by-Step Explanation:**

No of nodes at level 0(root) of tree ⇒ 1 
No of nodes at level 1 of tree ⇒⁡2 
No of nodes at level 2 of tree ⇒4 
No of nodes at level 3 of tree ⇒8 
No of nodes at level 4 of tree ⇒16 
Last node in level 4th is the node we are looking 
for ⇒⁡1+2+4+8+16⇒31 
<!-- PAGE 142 -->
ALGORITHMS


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In an adjacency list representation of an 
undirected simple graph G = (V,E), each edge 
(u,v) has two adjacency list entries: [v] i n the 
adjacency list of u, and [u] in the adjacency list of 
v. These are called twins of each other. A twin 
pointer is a pointer from an adjacency list entry to 
its twin. If |E|=m and |V|=n, and the memory size 
is not a constraint, what is the Time Complex ity 
of the most efficient algorithm to set the twin 
pointer in each entry in each adjacency list? 
a) θ (n2) 
b) θ (n+m) 
c) θ (m2) 
d) θ (n4)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

We can take extra array of size V² as memory is 
not a constraint. 
Do the BFS traversal and for each edge u - v in 
advance list in graph store the v node address in 
a[i][j]. 
For e.g., if we find 1 -> 2 as an edge, then store 
node 2 node address in location a[i][j]. 
Now once we have stored all the edge (u - v) 
addresses, then do BFS again. 
Now when we encounter 1 -> 2, then goto 
a[2][1] which is having twin address and set this 
twin pointer for node 2 in list 1. 
Do for all edges similarly.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let G= (V,E) be a simple undirected graph, and s 
be a particular vertex in it called the source. For x 
∈ V, let d (x) den ote the shortest distance in G 
from s to x. A breadth first search (BFS) is 
performed starting at s. Let T be the resultant BFS 
tree. If (u, v) is an edge of G that is not in T, then 
which one of the following CANNOT be the 
value of d (u) - d (v)? 
a) -1 
b) 0 
c) 1 
d) 2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

The given graph is undirected,  so an edge (u, v) 
also means (v, u) is also an edge. Since a shorter 
path can always be obtained by using edge (u, v) 
or (v, u), the difference between d(u) and d(v) 
cannot be more than 1.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Suppose depth first search is executed on the graph 
below starting at some unknown vertex. Assume 
that a recursive call to visit a vertex is made only 
after first checking that the vertex has not been 
visited earlier. Then the maximum possible 
recursion depth (including the initial call) is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (19)


**Step-by-Step Explanation:**

Total 21 nodes are there. 22 nodes require back 
track here in this question. 
So, max recursion depth is 21−2=19 
(Do DFSDFS from extreme ends such that max 
recursion depth will occur. i.e., take leftmost top 
node as initial node for DFSDFS as shown in 
below image)


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the following sequence of nodes for the 
undirected graph given below: 
1.a b e f d g c 
2.a b e f c g d 
3.a d g e b c f 
4.a d b c g e f 
A Depth First Search (DFS) is started at node a. The 
nodes are listed in the order they are first visited. 
Which of the above is/are possible output(s)? 
a) 1 and 3 only 
b) 2 and 3 only 
c) 2,3 and 4 only 
d) 1,2 and 3 only


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Answer: B After f is visited, c or g should be 
visited next. So, the traversal is incorrect. After c 
is visited, e or f should be visited next. So, the 
traversal is incorrect. 2 and 3 are correct.


</details>

---


### Q15. [GATE CSE – 2016 SET-2 NAT (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A depth-first search is performed on a directed 
acyclic graph. Let d[u] denote the time at which 
vertex u is visited for the first time and f[u] the time 
at which the DFS call to the vertex u terminates. 
Which of the following statements is always TRUE 
for all edges (u, v) in the graph ? 
a) d[u] < d[v] 
b) d[u] < f[v] 
c) f[u] < f[v] 
d) f[u] > f[v]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

A. d[u]<d[v], Counter Example ⟹ Well if we 
directly start DFS on V first, then I call DFS on X 
which visits U. 
B. d[u]<f[v], Counter example ⟹ Same as A 
C. f[u]<f[v], Counter example ⟹ Same as A again 
So, answer is D.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the DAG with V = {1,2,3,4,5,6}, shown 
below 
Which of the following is NOT a topological 
ordering? 
a) 1 2 3 4 5 6 
b) 1 3 2 4 5 6 
c) 1 3 2 4 6 5 
d) 3 2 4 1 6 5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Go with vertex with indegree 0. Remove the vertex 
with all edges going from it. Repeat the procedure. 
We see that 3 cannot come at first because indegree 
is not 0. So, D is the answer here. 
ALL other options are in Topological order. 
Only 1 and 4 order matter for this question.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the depth-first-search of an undirected 
graph with 3 vertices P, Q, and R. Let discovery 
time d(u) represent the time instant when the 
vertex u is first visited, and finish time f(u) 
represent the time instant when the vertex u is last 
visited. Given that 
d(P)=5 units f(P)=12 units 
d(Q)=6 units f(Q)=10 units 
d(R)=14 unitf(R)=18 units 
Which one of the following statements is TRUE 
about the graph? 
a) There is only one connected component 
b)    There are two connected components, and    
    P and R are connected 
c) There are two connected components, and Q 
and R are connected 
d) There are two connected components, and P 
and Q are connected


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

After knowing the statement of Parenthesis 
Theorem, the solution is straightforward. 
Given that discovery time and finish time of the 
vertices are as follows: 
P = [5, 12] 
Q= [6, 10] 
R= [14, 18] 
Here, 
the interval of Q is contained entirely within the 
interval of P 
⇒ Q is a descendant of P in a DFS tree (i.e. P and 
Q belong to the same DFS tree) 
Again, 
the interval of R and P are entirely disjoint 
⇒ Neither R nor P is a descendant of the other 
⇒ R and P are in different DFS trees (i.e. R and P 
belong to different DFS trees) 
Hence, option D is correct. (Refer the image 
attached) 
Further, all other similar questions can also be 
easily solved with this Theorem. 
<!-- PAGE 143 -->
ALGORITHMS


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let T be a depth first search tree in a undirected 
graph G. Vertices u and v are leaves of this tree T. 
The degrees of both u and v in G are at least 2. 
Which one of the following statements is true? 
a) There must exist a vertex w adjacent to both u 
and v in G 
b) There must exist a vertex w whose removal 
disconnects u and v in G 
c) There must be exist a cycle in G containing u 
and v 
d) There must exist a cycle in G containing u and 
all its neighbours in G


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

DFS Tree Property (Undirected Graph): 
In an undirected graph, every edge (x, y) of the 
graph G that is not in the DFS tree T must be a 
back edge. This means x must be an ancestor of 
y, or vice versa. There are no cross edges. 
2. Analyzing the Leaves: 
 Vertices u and v are leaves in the DFS tree T. 
 By definition, a leaf has no children in the tree. 
 Since the degree of u in G is >= 2, and it only 
has one edge in the tree (connecting it to its 
parent), its other edge(s) in G must be back 
edges. 
 These back edges must connect uto one of its 
ancestors in the tree. 
In a DFS tree, u and v are in different branches or 
different positions. Since they are both leaves, there 
is a Least Common Ancestor (LCA) of u and v, 
let's call it w. 
 Every path in G from u to v must pass through 
an ancestor that is common to both. 
 In a structure like this, the parent of a leaf or a 
common ancestor on the path to the root often 
acts as an articulation point for those specific 
leaves. Specifically, in any path from u to v, you 
must go "up" the tree from u via its ancestors 
and "down" to v 
 A: u and v could be in completely different 
branches with no shared neighbors. 
 C: There is no guarantee that u and v lie on the 
same cycle; they could be part of two separate 
cycles that only meet at an ancestor. 
 D: A vertex and all its neighbors don't 
necessarily have to form a single cycle. 
<!-- PAGE 144 -->
GATE CSE – 2017 SET-1 NAT (2-MARKS) 
GATE CSE – 2013 MCQ (1-MARKS) 
SEARCHING AND SORTING


</details>

---



## Topic 6: Topic 6


### Q1. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider an array A of integers of size n. The 
indices of A run from 1 to n. An algorithm is to 
be designed to check whether A satisfies the 
condition given below. 
for all i, j {1, ..., n - 1} such that i > j, 
( A[i + 1] - A[i] ) > ( A[j + 1] - A[j] ) 
Which one of the following gives the worst case 
time complexity of the fastest algorithm that can 
be designed for the problem? 
a) Θ(n) 
b) Θ(logn) 
c) Θ(nlogn) 
d) Θ(n2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** Answer : A


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Let A be an array containing integer values. The 
distance of A is defined as the minimum number of 
elements in A that must be replaced with another 
integer so that the resulting array is sorted in non -
decreasing order. The distance of the array [2, 5, 3, 
1, 4, 2, 6] is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (3)


**Step-by-Step Explanation:**

Replace second last 2 with 5 -> 2 2 3 1 4 5 6 
Replace 1 with first 2 -> 1 2 3 2 4 5 6 
Replace second 2 with 3 -> 1 2 2 3 4 5 6


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


What is the worst-case number of arithmetic 
operations performed by recursive binary search 
on a sorted array of size n 
a) O(n) 
b) O(n2) 
c) O(√𝑛 ) 
d) O(log2n)]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Worst case is when the element not present in 
the sorted array 
n elements


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Let A be an array of 31 numbers consisti ng of 
sequence of 0’s followed by a sequence of 1’s. The 
problem is to find the smallest index i that A[i] is 1 
by probing the minimum numbers of locations in A. 
The worst case number of probes performed by an 
optimal algorithm is   .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

The smallest index i where A[i] is 1 in an array A of 
31 numbers consisting of a sequence of 0's followed 
by a sequence of 1's can be found by an optimal 
algorithm using binary search. Since the array is 
sorted in the form of all 0's followed by all 1's, the 
problem reduces to finding the boundary between 0 
and 1. 
The worst -case number of p robes (comparisons) 
performed by the optimal algorithm is log 231, 
which is approximately 5.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is the tightest upper 
bound that represents the number of swaps 
required to sort n numbers using selection sort? 
a) O(log n) 
b) O(n) 
c) O(n log n) 
d) O(n2)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

In selection max you can do is n swaps.. selecting 
the smallest element from all the elements and 
replacing it correct position so O(n). ∴⁡ The 
solution is (b) 
It then states: 
" x = log2 𝑛 
𝑛/2 
𝑛/4 
... 
𝑛/2∧𝑥 = 1 
<!-- PAGE 146 -->
GATE CSE – 2025 SET-2 MCQ (2-MARKS) GATE CSE – 2023 MCQ (1-MARKS) 
GATE CSE – 2017 Set-1 MCQ (2-MARKS) 
GATE CSE – 2017 SET-2 MCQ (2-MARKS) 
HEAPS AND MISCELLANEOUS


</details>

---


### Q3. [GATE CSE – 2021 SET-2 MCQ (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Given an integer array of size N, we want to check 
if the array is sorted (in either ascen ding or 
descending order). An algorithm solves this 
problem by making a single pass through the array 
and comparing each element of the array only with 
its adjacent elements. The worst -case time 
complexity of this algorithm is 
a) Both O(n)and Ω (n) 
b) O(n) but not Ω (n) 
c) Ω (n) but not O(n) 
d) Neither O(n) nor Ω (n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

The objective of the algorithm is to check 
whether the array is sorted or not, and it does so 
by making a single pass through the array. 
For this the worst case will be when the array is 
already sorted. 
So, for this worst case, the algorithm has to 
traverse the whole array and in doing so it will 
take 𝑂(𝑛) time when specified in 𝑂(. ) notation 
or Ω(𝑛) time when specified in Ω(. ) notation.


</details>

---



## Topic 7: Topic 7


### Q1. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


A meld operation on two instances of a data  
structure combines them into one single instance of 
the same data structure. Consider t he following 
data structures: 
P: Unsorted doubly linked list with pointers to the 
head node and tail node of the list. 
Q: Min-heap implemented using an array. 
R: Binary Search Tree. 
Which ONE of the following options gives the 
worst-case time complexities for meld operation on 
instances of size n of these data structures? 
a) P: θ(1), Q: θ(n), R: θ(n) 
b) P: θ(1), Q: θ(nlogn), R: θ(n) 
c) P: θ(n), Q: θ(nlogn), R: θ(n2) 
d) P: θ(1), Q: θ(n), R: θ(nlogn)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** An


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Let A be a priority queue for maintaining a set 
of elements. Suppose A is implemented using a 
max-heap data structure. The operation Extract-
Max(A) extracts and deletes the maximum 
element from A. The operation Insert(A, key) 
inserts a new element key in A. The properties 
of a max-heap are preserved at the end of each 
of these operations. When A contains n 
elements, which one of the following statements 
about the worst case running time of these two 
operations is TRUE? 
a) Both Extract-Max(A) and Insert(A, key) 
run in O(1) 
b) Both Extract-Max(A) and Insert(A, key) 
run in O(log n) 
c) Extract-Max(A) runs in O(1) whereas 
Insert(A, key) runs in O(n) 
d) Extract-Max(A) runs in O(1) whereas 
Insert(A, key) runs in O(log n).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

In a max-heap, the Extract-Max operation removes 
the root (maximum) element and then "heapifies" 
down to restore the max -heap property. This 
heapify operation takes wo rst-case O(log n) time, 
where n is the number of elements. 
• The Insert operation inserts a new element at the 
last position and then "bubbles up" (heapify up) to 
maintain the max -heap property, which similarly 
takes O(log n) time in the worst case. 
Thus, bo th operations have a worst -case running 
time of O(log n). This matches the option: 
"Both Extract -Max(A) and Insert(A, key) run in 
O(log n)."


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following sequences when 
stored in an array at locations A[1], …, A[10] 
forms a max-heap? 
a) 23, 17, 10, 6, 13, 14, 1, 5, 7, 12 
b) 23, 17, 14, 7, 13, 10, 1, 5, 6, 12 
c) 23, 17, 14, 6, 13, 10, 1, 5, 7, 15 
d) 23, 14, 17, 1, 10, 13, 16, 12, 7, 5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation 
• For an array A[1..n] representing a heap, each 
parent at index i must be ≥ its children at indices 2i 
and 2i+1 (when they exist). Check this for each 
internal node. 
• Option (B) satisfies all comparisons: 23 ≥ 17, 14; 
17 ≥ 7, 13; 14 ≥ 10, 1; 7 ≥ 5, 6; 13 ≥ 12; hence it is 
a valid max-heap. 
• The other options violate the property. In (A), 
parent 10 has child 14 (> 10); in (C), parent 6 has 
child 7 and parent.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Consider the following table: 
 Algorithms  Design Paradigms 
P Kruskal i Divide and Conquer 
Q Quicksort ii Greedy 
R Floyd-Warshall iii Dynamic Programming 
a) P-(ii), Q-(iii), R-(i) 
b) P-(iii), Q-(i), R-(ii) 
c) P-(ii), Q-(i), R-(iii) 
d) P-(i), Q-(ii), R-(iii)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Some important points regarding Greedy Vs 
Dynamic Programming 
Greedy: → 
It always gives polynomial time complexity 
 It is not an optimal 
 It always selects only either minimum or 
maximum among all possibilities 
Ex:Dijkstra’s algorithm for SSSP, Optimal Merge 
Pattern, Huffman coding, Fractional knapsack 
problem, etc 
 Dynamic Programming: 
 It gives either polynomial or exponential 
time complexity. 
 It gives always an optimal result. 
 It checks all possibilities of a problem. 
Ex:Longest Common sequence, Matrix chain 
Multiplication, Travelling sales Problem, etc..,


</details>

---


### Q5. [GATE CSE – 2023 MCQ (2-MARKS]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Match the algorithms with their time complexities:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

P. Towers of Hanoi 
=> T(n) = 2T(n - 1) + 1 ⇒ θ(2n ) 
Q. Binary Search 
=> T(n) = T( n / 2) + C 
=θ(logn) 
R. Heap sort ⇒ θ(n log n) 
S. Addition of two n × n matrices : θ(n 2 
GATE CSE – 2013 MCQ (1-MARKS) 
<!-- PAGE 149 -->
ALGORITHMS


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Given below are some algorithms, and some 
algorithm design paradigms. 
List - I 
P. Dijkstra’s Shortest Path 
Q. Floyd-Warshall algorithm to compute all 
pairs shortest path 
R. Binary search on a sorted array 
S. Backtracking search on a graph 
List – II 
i. Divide and Conquer 
ii. Dynamic Programming 
iii. Greedy design 
iv. Depth-first search 
v. Breadth-first search 
Match the above algorithms on the left to the 
corresponding design paradigm they follow. 
a) P-i, Q-iii, R-i, S-v. 
b) P-iii, Q-iii, R-i, S-v. 
c) P-iii, Q-ii, R-i, S-iv. 
d) P-iii, Q-ii, R-i, S-v.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Dijkstra’s Shortest Path is a Greedy Algorithm. 
Floyd-Warshall algorithm is Dynamic 
Programming. Binary search is a Divide and 
Conquer. Backtracking is Depth -first search. 
Mark visited (set to red) when done with 
neighbors. Dijkstra's algorithm is an algorithm for 
finding the shortest paths between nodes in a 
graph, which may represent, for example, road 
networks.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Match the following: 
(P) Prim's algorithm for 
minimum spanning tree 
(i) Backtracking 
(Q) Floyd-Warshall 
algorithm for all pairs 
shortest paths 
(ii) Greedy 
method 
(R) Mergesort (iii) Dynamic programming 
(S) Hamiltonian circuit (iv) Divide and conquer 
a) P-iii, Q-ii, R-iv, S-i 
b) P-i, Q-ii, R-iv, S-iii 
c) P-ii, Q-iii, R-iv, S-i 
d) P-ii, Q-i, R-iii, S-iv


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

(1) Prim's algo for mst is application of greedy 
which give optimal solution as mst . 
(2) Floyd warshall algo for all pair shortest path 
is application of dynamic programming because 
it covers all possibilities from every vertex 
(3) merge sort --divide and conquer 
(4) Hamiltonian circuit is application of 
backtracking because we have to find cycle 
again and again until we didn't get cycle of all 
vertices without repetition of vertices except 
source vertex.


</details>

---


### Q8. [GATE CSE – 2015 SET-1 MCQ (1-MARKS]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


An algorithm performs (logN) 1/2 find operations, N 
insert operations, (logN) 1/2 delete operations, and 
(logN)1/2 decrease-key operations on a set of data 
items with keys drawn from a linearly ordered set . 
For a delete operation, a pointer is provided to the 
record that must be deleted. For the decrease -key 
operation, a pointer is provided to the record that 
has its key decreased. Which one  of the following 
data structures is the most suited for the algorithm 
to use, if the goal is to achieve the best total 
asymptotic complexity considering all the 
operations? 
a) Unsorted array 
b) Min - heap 
c) Sorted array 
d) Sorted doubly linked list


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Since number of insertion operations is 
asymptotically higher, unsorted array is 
preferred. 
For every operation: 
Total cost = (number of times) × (cost per operation) 
I) Unsorted Array 
Operation costs: 
Find = O(N) (scan whole array) 
Insert = O(1) (append at end) 
Delete (pointer given) = O(1) (swap with last pop) 
Decrease-key = O(1) (just update value) 
II) Min-Heap 
Operation costs: 
Find = O(N) (heap not sorted fully) 
Insert = O(log N) 
Delete (pointer given) = O(log N) (heapify) 
Decrease-key = O(log N) (bubble up) 
III) Sorted Array 
Operation costs: 
Find = O(log N) (binary search) 
Insert = O(N) (shift elements) 
Delete = O(N) (shift) 
Decrease-key = O(N) (reposition element) 
IV) Sorted Doubly Linked List 
Operation costs: 
Find = O(N) 
Insert = O(N) (need position) 
Delete (pointer given) = O(1) 
Decrease-key = O(N) (reinsert at correct place)


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


The number of elements that can be sorted in 
Θ(log n) time using heap sort is 
a) θ(1) 
b) θ(√𝑙𝑜𝑔 𝑛) 
c) θ(log n / (loglog n)) 
d) θ(log n)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Let the number of element is "K", they can be 
sorted in θ(k log k) time We try 
the options in decreasing order of complexity 
since, we need a tight band i.e. 
θ.So if K ∈ (log n) time required for heap sort 
is θ(k log k) i.e. 
θ(log n × loglog n), But this is not in θ(log n)if 
θ(log n / (loglog n)) time 
required for heap sort ie. θ( (log n / (loglog n)) 
*log( (log n / (loglog n)) ) ) 
=θ (logn - (log n log log log n)/logn) = θ(logn) 
<!-- PAGE 150 -->
ALGORITHMS


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 7 | **Marks:** 2 | **Difficulty:** Medium


Two alternative packages A and B are available 
for processing a database having 10k records. 
Package A requires 0.0001n² time units and 
package B requires 10n log₁₀ n time units to 
process n records. What is the smallest value of 
k for which package B will be preferred over A? 
a) 12 
b) 10 
c) 6 
d) 5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

For k=6, 6<=10 
Therefore k=6 is the smallest value. 
10n * log10(n) <= 0.0001 * n2 
: 10 * 10k * log10(10k) <= 0.0001 * (10k)2 
: 10(k+1) * k <= 0.0001 * 10(2k) 
: k <= 10(2k - k - 1 - 4) 
:  
k <= 10(k - 5) 
(log N)2 find N insert 
(log N)2 delete 
(log N)2 
decrease - key 
Unsorted 
Array 
O (N(log N)2) O(N) 1 O(log N)2) 1 O(log N)2) 
Min-heap 1 
O (N(log N)2) 
O(N log 𝑁 ) 3 
𝑂(log 𝑁)2) 
𝑂 ((log 𝑁)2) 
Sorted 
Array 
O ((log N)2) O(N2) 1 O (N(log N)2) 1 O (N(log N)2) 
Sorted 
doubly 
linked-list 
O (N(log N)2) O( N2 ) 1 𝑂 ((log 𝑁)2) 1 𝑂 ((log 𝑁)2)


</details>

---

