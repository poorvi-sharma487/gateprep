# Engineering Mathematics


> **Subject:** Engineering Mathematics  

> **Pages in Book:** 643–684  

> **Total Modules:** 3


## Topics in this Subject


## Topic 1: FARRAY


### Q1. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let X be a random variable which takes values in 
the set {1, 2, 3, 4, 5, 6, 7, 8}. Further,  
 Pr(X = 1) = Pr(X = 2) = Pr(X = 5) = Pr(X = 7) = 1/6 
 Pr(X = 3) = P r(X = 4) = Pr(X = 6) = P r(X = 8) = 
1/12 
 The expected value of X, denoted by E[X], is equal 
to ____. (Round off to two decimal places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4.25


**Step-by-Step Explanation:**

First, interpret the probabilities correctly (there's a 
small typo in the question). The intended 
distribution is: 
 𝑃(𝑋=1)=𝑃(𝑋=2)=𝑃(𝑋=5)=𝑃(𝑋=
7)=
 𝑃(𝑋=3)=𝑃(𝑋=4)=𝑃(𝑋=6)=𝑃(𝑋=
8)=
 Check total probability: 
4⋅16+4⋅ 112=46+ 412=23+13=1 
 Now compute the expected value: 
𝐸[𝑋]=∑⁡𝑥⋅𝑃(𝑋=𝑥) 
 First group: 
1+2+5+7
6 =156 =2.5 
 Second group: 
3+4+6+8
12 =2112=1.75 
 Total: 
𝐸[𝑋]=2.5+1.75=4.25


</details>

---


### Q2. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


An urn contains one red ball and one blue ball. At 
each step, a ball is picked uniformly at random from 
the urn, and this ball together with another ball of 
the same color is  put back in the urn. The 
probability that there are equal number of red and 
blue balls after two steps is


- **(A)** 1/4

- **(B)** 1/3

- **(C)** 1/2

- **(D)** 2/3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

After 2 draws we will have total of 4 balls in the 
urn. In our case we want equal number of Red and 
Blue balls i.e. 2𝑅&2𝐵 
 So one draw should be Blue and another should be 
Red, the 2 sequence can be 𝑅𝐵 & 𝐵𝑅 
→𝑃(𝑅𝐵)=𝑃(" 𝑓𝑖𝑟𝑠𝑡⁡𝑖𝑠 "⁡𝑅)
×𝑃(" 𝑠𝑒𝑐𝑜𝑛𝑑⁡𝑖𝑠 "⁡𝐵
∣" 𝑓𝑖𝑟𝑠𝑡⁡𝑖𝑠 "⁡𝑅) 
=(12)(13)=16⁡ 
→𝑃(𝐵𝑅)=" 𝑠𝑎𝑚𝑒⁡𝑐𝑎𝑠𝑒⁡𝑎𝑠 "⁡𝑃(𝑅𝐵)=16⁡⁡ 
 Total Probability 𝑃( Equal 𝑅 & 𝐵)=
6+
6=


</details>

---


### Q3. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The probability density function 𝑓(𝑥) of a random 
variable 𝑋 which takes real values is 
𝑓(𝑥)= 1
3√2𝜋
exp⁡(−𝑥2
18),𝑥∈(−∞,+∞) 
 Which one of the following statements is correct 
about the random variable 𝑋 ?


- **(A)** X is an exponential random variable

- **(B)** X is a normal random variable

- **(C)** X is a Poisson random variable

- **(D)** X is a uniform random variable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Poisson is Discrete, eliminates Poisson 
immediately. 
Now check Domain: 
 Exponential PDF: 𝑓(𝑥)=𝜆𝑒∧(−𝜆𝑥) for 𝐱≥
0→ eliminates Exponential (question says 𝐱∈
(−∞, +∞) ) 
 Uniform: defined on (𝐚,𝐛)→ finite interval → 
eliminates Uniform 
 Normal: only distribution that lives on 
(−∞,+∞) 
 Answer: Option B


</details>

---


### Q4. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose an unbiased coin is tossed 6 times. Each 
coin toss is independent of all previous coin tosses. 
Let E1 be the event that among the second, fourth, 
and sixth coin tosses, there are at least two heads. Let 
E2 be the event that among the first, second, third, and 
fifth coin tosses, there are equal number of heads and 
tails. 
 The conditional probability P(E1 | E2) is equal to the 
_____.(rounded off to one decimal place)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.5


**Step-by-Step Explanation:**

Let 
● E1: At least 2 heads on tosses 2, 4, and 6 
● E2: Number of heads = number of tails on tosses 
1, 2, 3, and 5 
 We need to find P(E1∣E2). So the sample space is 
restricted to E2. 
 Sample Space under E2 
 (Tosses 1,2,3,5 → equal heads and tails) 
       1  2  3  4  5  6 
 (A)   H  H  T  _  T  _ 
 (B)   H  T  H  _  T  _ 
 (C)   H  T  T  _  H  _ 
 (D)   T  T  H  _  H  _ 
 (E)   T  H  T  _  H  _ 
 (F)   T  H  H  _  T  _ 
 Tosses 4 and 6 are free → 22=4 possibilities each. 
 Total cases = 6×4=24 
 Favorable Cases (E1): 
 For tosses 2, 4, 6 → at least 2 heads. 
 Possible combinations for (4,6): HH, HT, TH, TT 
● For (A), (E), (F): 3 valid combinations each → 
3×3=9 
● For (B), (C), (D): 1 valid combination each → 
3×1=3 
 Total favorable cases = 9+3=12 
 P(E1/E2) =  12/24 = 0.5


</details>

---


### Q5. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A box contains 5 coins: 4 regular coins and 1 fake 
coin. When a regular coin is tossed, P(head) = 0.5 and 
for a fake coin P(head) = 1. 
 You pick a coin at random and toss it twice, and get 
two heads. 
 The probability that the coin you have chosen is the 
fake coin is _______ (rounded off to two decimal 
places).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.50


**Step-by-Step Explanation:**

Using Bayes' Theorem: 
   P(HH | fake) = 1 × 1 = 1 
     P(HH | regular) = 0.5 × 0.5 = 0.25 
     P(fake) = 1/5,  P(regular) = 4/5 
     P(HH) = 1×(1/5) + 0.25×(4/5) = 0.2 + 0.2 = 0.4 
 P(fake | HH) = P(HH|fake)×P(fake) / P(HH) = (1 × 
1/5) / 0.4 = 0.2/0.4 = 0.50


</details>

---


### Q6. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The unit interval (0,1) is divided at a point chosen 
uniformly distributed over (0,1) into two disjoint 
subintervals. 
 The expected length of the subinterval that contains 
0.4 is ___________ (rounded off to two decimal 
places).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.74


**Step-by-Step Explanation:**

Let U ~ Uniform(0,1) be the random division point. 
     Case 1: U < 0.4  →  the subinterval containing 0.4 is 
[U, 1], length = 1 − U. 
     Case 2: U > 0.4  →  the subinterval containing 0.4 is 
[0, U], length = U. 
     E[length] = P(U<0.4)·E[1−U | U<0.4] + 
P(U>0.4)·E[U | U>0.4] 
           = 0.4 × 0.8 + 0.6 × 0.7  =  0.32 + 0.42  =  0.74 
<!-- PAGE 654 -->
ENGINEERING MATHEMATICS


</details>

---


### Q7. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A bag contains 10 red balls and 15 blue balls. Two 
balls are drawn randomly without replacement. 
 Given that the first ball drawn is red, the probability 
(rounded off to 3 decimal places) that both balls 
drawn are red is _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.375


**Step-by-Step Explanation:**

Given the first ball is red, the bag now has 9 red 
and 15 blue balls (24 total). 
     P(2nd ball is red | 1st is red) = 9/24 = 0.375.


</details>

---


### Q8. [GATE CSE - 2026 MCQ SET - 1(2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let A and B be two events in a probability space 
with P(A) = 0.3, P(B) = 0.5, and P(A∩B) = 0.1 Which 
of the following statements is/are TRUE?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B and C


**Step-by-Step Explanation:**

(A) INCORRECT: For independence, P(A∩B) 
must equal P(A)×P(B) = 0.15, but P(A∩B) = 0.1 ≠ 
0.15. 
     (B) CORRECT: P(A∪B) = 0.3 + 0.5 − 0.1 = 
0.7. 
     (C) CORRECT: P(A∩Bᶜ) = P(A) − P(A∩B) = 
0.3 − 0.1 = 0.2. 
     (D) INCORRECT: P(Aᶜ∩Bᶜ) = 1 − P(A∪B) = 1 
− 0.7 = 0.3 ≠ 0.4.


</details>

---


### Q9. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


When six unbiased dice are rolled simultaneously, 
the probability of getting all distinct numbers (i.e., 
1, 2, 3, 4, 5, and 6) is:


- **(A)** 1/324

- **(B)** 5/324

- **(C)** 7/324

- **(D)** 11/324



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Total outcomes = 6⁶ = 46656. 
    Favourable outcomes = 6! = 720 (all permutations 
of {1,2,3,4,5,6}). 
     Probability = 720 / 46656 = 5/324.


</details>

---


### Q10. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let 𝑥 and 𝑦 be random variables, not necessarily 
independent, that take real values in the interval 
[0,1]. Let 𝑧 = 𝑥𝑦 and let the mean values of 𝑥, 𝑦, 𝑧 
be 𝑥̅, 𝑦̅, 𝑧̅, respectively. Which one of the following 
statements is TRUE?


- **(A)** 𝑧̅ = 𝑥̅ 𝑦̅

- **(B)** 𝑧̅ <= 𝑥̅ 𝑦̅

- **(C)** 𝑧̅ >= 𝑥̅ 𝑦̅

- **(D)** 𝑧̅ <= 𝑥̅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

As given in the question, X and Y can take values 
in the interval of [0,1]. From this, we can write 0 
<= Y <= 1.  
 This can also be rewritten as 0 <= XY <= X. 
 E(X–c) = E(X)–c where c is a constant. Also 
called: mathematical expectation. 
 Taking the expectation of the above inequality, we 
will get this: 
 E(0) <= E(XY) <= E(X) 
 This is also equal to 0 <= E(XY) <= E(X) 
 This can only be true in the case when the range is 
specified between 0 and 1. 
 Therefore, the correct option is D.


</details>

---


### Q11. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Two fair coins are tossed. Let A = HEAD on both 
throws, B = HEAD on the first throw, C = HEAD 
on the second throw. 
 Which of the following statements is/are TRUE?


- **(A)** A and B are independent

- **(B)** A and C are independent

- **(C)** B and C are independent

- **(D)** P(B|C) = P(B)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C, D


**Step-by-Step Explanation:**

Sample space: {HH, HT, TH, TT}, each with prob 
1/4. 
     P(A)=1/4, P(B)=1/2, P(C)=1/2. 
     (i)  P(A∩B)=1/4 ≠ P(A)×P(B)=1/8.  NOT 
independent. 
     (ii) P(A∩C)=1/4 ≠ P(A)×P(C)=1/8.  NOT 
independent. 
     (iii)P(B∩C)=P(HH)=1/4 = P(B)×P(C)=1/4.  
INDEPENDENT.  
     (iv) Since B and C are independent, P(B|C) = 
P(B). TRUE.


</details>

---


### Q12. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In an examination, a student can choose the order in 
which two questions (QuesA and QuesB) must be 
attempted. 
 If the first question is answered wrong, the student 
gets zero marks. 
 If the first question is answered correctly and the 
second question is not answered correctly, the 
student gets the marks only for the first question. 
 If both the questions are answered correctly, the 
student gets the sum of the marks of the two 
questions. 
 The following table shows the probability of correctly 
answering a question and the marks of the question 
respectively. 
question 
probabilty of  
answering 
correctly 
marks 
QuesA 0.8 10 
QuesB 0.5 20 
 Assuming that the student always wants to maximize 
her expected marks in the examination, in which 
order should she attempt the questions and what is 
the expected marks for that order (assume that the 
questions are independent)?


- **(A)** First QuesA and then QuesB. Expected  
  marks 14.

- **(B)** First QuesB and then QuesA. Expected  
  marks 14.

- **(C)** First QuesB and then QuesA. Expected  
 marks 22.

- **(D)** First QuesA and then QuesB. Expected marks 
16.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Case 1: Attempt Qa first, then Qb 
 Probability of correct Qa=0.8, incorrect =0.2 
 Probability of correct Qb=0.5, incorrect =0.5 
 Outcomes: 
 Both correct →0.8×0.5=0.4, marks =10+
20=30 
 Only Qa correct →0.8×0.5=0.4, marks =10 
 If Qa is incorrect ( 0.2 ), no marks (as second 
attempt doesn't help) 
 Expected marks: 
𝐸1=(0.4×30)+(0.4×10)=12+4=16 
 Case 2: Attempt Qb first, then Qa 
 Probability of correct Qb=0.5, incorrect =0.5 
 Probability of correct Qa=0.8, incorrect =0.2 
 Outcomes: 
 Both correct →0.5×0.8=0.4, marks =30 
 Only Qb correct →0.5×0.2=0.1, marks =20 
 Expected marks: 
𝐸2=(0.4×30)+(0.1×20)=12+2=14 
 Final Comparison 
𝐸1=16>𝐸2=14


</details>

---


### Q13. [GATE CSE - 2024 MCQ SET - 2(1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A bag has 𝑟 red balls and 𝑏 black balls. All balls are 
identical except for their colours. In a trial, a ball is 
randomly drawn from the bag, its colour is noted and 
the ball is placed back into the bag along with another 
ball of the same colour. Note that the number of balls


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

This is Pólya's Urn model. 
     By symmetry (exchangeability), the probability of 
drawing a red ball on any trial is always r/(r+b), 
     regardless of the trial number. 
     Verification for 2nd trial: 
     P(red 2nd) = (r/(r+b))×(r+1)/(r+b+1) + 
(b/(r+b))×r/(r+b+1) 
             = r(r+1+b)/[(r+b)(r+b+1)] = r/(r+b).  ✓


</details>

---


### Q14. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements: 
 S1: There exist random variables X and Y such that  
(𝔼[(X–E(X))(Y–E(Y))])²  >  Var[X]·Var[Y] 
 S2: For all random variables X and Y,  Cov[X,Y] = 
𝔼 [|X– 𝔼 [X]|·|Y– 𝔼 [Y]|]  
 Which one of the following choices is correct?


- **(A)** Both S1 and S2 are true

- **(B)** S1 is true, but S2 is false

- **(C)** S1 is false, but S2 is true

- **(D)** Both S1 and S2 are false



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

S1 is FALSE: By Cauchy-Schwarz, (Cov(X,Y))² ≤ 
Var(X)·Var(Y). The strict reverse is impossible. 
     S2 is FALSE: Cov[X,Y] = E[(X–E[X])(Y–E[Y])], 
which can be negative. 
       E[|X–E[X]|·|Y–E[Y]|] is always non-negative, so 
they are not equal in general. 
<!-- PAGE 655 -->
ENGINEERING MATHEMATICS


</details>

---


### Q15. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The lifetime of a component of a certain type is a 
random variable whose probability density function 
is exponentially distributed with parameter 2 . For 
a randomly picked component of this type, the 
probability that its lifetime exceeds the expected 
lifetime (rounded to 2 decimal places) is  
____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.35 - 0.39


**Step-by-Step Explanation:**

Expected lifetime E[X] = 1/λ = 1/2. 
     P(X > 1/2) = e(−λ × 1/2) = e(−2 × 0.5) = e(−1) ≈ 0.3679 ≈ 
0.37.


</details>

---


### Q16. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


For a given biased coin, the probability that the 
outcome of a toss is a head is 0.4 . This coin is 
tossed 1,000 times. Let 𝑋 denote the random 
variable whose value is the number of times that 
head appeared in these 1,000 tosses. The standard 
deviation of 𝑋 (rounded to 2 decimal place) is ____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 15.00 - 16.00


**Step-by-Step Explanation:**

X ~ Binomial(n=1000, p=0.4). 
     Variance = n×p×(1−p) = 1000 × 0.4 × 0.6 = 240. 
     Standard Deviation = √240 ≈ 15.49.


</details>

---


### Q17. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Two people, 𝑃 and 𝑄, decide to independently roll 
two identical dice, each with 6 faces, numbered 1 to 
6 . The person with the lower number wins. In case of 
a tie, they roll the dice repeatedly until there is no tie. 
Define a trial as a throw of the dice by 𝑃 and 𝑄. 
Assume that all 6 numbers on each dice are equi -
probable and that all trials are independent. The 
probability (rounded to 3 decimal places) that one of 
them wins on the third trial is ____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.023


**Step-by-Step Explanation:**

P(tie) = 6/36 = 1/6  
{(1,1),(2,2),(3,3),(4,4),(5,5),(6,6)} 
     P(no tie) = 5/6. 
     Win on 3rd trial ⟹ trials 1 and 2 are ties, trial 3 is 
not a tie: 
     P = (1/6) × (1/6) × (5/6) = 5/216 ≈ 0.023.


</details>

---


### Q18. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


𝑃 and 𝑄 are considering to apply for a job. The 
probability that 𝑃 applies for the job is 
4, the 
probability that 𝑃 applies for the job given that 𝑄 
applies for the job is 
2, and the probability that 𝑄 
applies for the job given that 𝑃 applies for the job is 
3. Then the probability that 𝑃 does not apply for the 
job given that 𝑄 does not apply for this job is


- **(A)** (
5)

- **(B)** (
6)

- **(C)** (
8)

- **(D)** (
12)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given: P(P)=1/4, P(P|Q)=1/2, P(Q|P)=1/3. 
     By Bayes: P(P|Q) = P(Q|P)×P(P)/P(Q) 
       ⟹ 1/2 = (1/3 × 1/4)/P(Q)  ⟹  P(Q) = 1/6,  P(Q') 
= 5/6. 
    P(Q'|P) = 1 − P(Q|P) = 2/3. 
     P(P|Q') = P(Q'|P)×P(P)/P(Q') = (2/3 × 1/4)/(5/6) = 
(1/6)/(5/6) = 1/5. 
     P(P'|Q') = 1 − 1/5 = 4/5.


</details>

---


### Q19. [GATE CSE - 2021 MCQ SET - 1(2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In hypothesis testing, N independent tests are 
conducted. Each test independently has a probability 
β of a Type II error (false negative). 
 What is the expected number of tests that result in a 
Type II error?


- **(A)** Nβ(1−β)

- **(B)** Nβ

- **(C)** N(1−β)

- **(D)** Not expressible in terms of N and β alone



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Each of the N tests independently has probability 
β of resulting in a Type II error. 
     Let X = number of tests with Type II error. Then 
X ~ Binomial(N, β). 
     E[X] = N × β = Nβ. 
     Note: Nβ(1−β) is the variance of X, not the 
expectation.


</details>

---


### Q20. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If a random variable X has a Poisson distribution 
with mean 5, then E[(X+2)²] equals _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 54


**Step-by-Step Explanation:**

For Poisson: E[X] = Var[X] = λ = 5. 
     E[X²] = Var[X] + (E[X])² = 5 + 25 = 30. 
     E[(X+2)²] = E[X² + 4X + 4] = E[X²] + 4E[X] + 4 
               = 30 + 20 + 4 = 54.


</details>

---


### Q21. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let 𝑋 be a Gaussian random variable with mean 0 
and variance 𝜎2. Let 𝑌=max(𝑋,0) where 
max(𝑎,𝑏) is the maximum of 𝑎 and 𝑏. The median 
of 𝑌 is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

X ~ N(0, σ²): P(X ≤ 0) = 0.5 and P(X > 0) = 0.5. 
     When X ≤ 0, Y = 0; when X > 0, Y = X > 0. 
     So P(Y = 0) = 0.5 and P(Y > 0) = 0.5. 
     Median m satisfies P(Y ≤ m) ≥ 0.5 and P(Y ≥ m) 
≥ 0.5. 
     At m = 0: P(Y ≤ 0) = 0.5 ✓ and P(Y ≥ 0) = 1 ✓.  
Hence, median = 0.


</details>

---


### Q22. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following experiment. 
Step 1. Flip a fair coin twice. 
Step 2. If the outcomes are (TAILS, HEADS) then 
output 𝑌 and stop. 
Step 3. If the outcomes are either (HEADS, 
HEADS) or (HEADS, TAILS), then output 𝑁 and 
stop. 
 Step 4. If the outcomes are (TAILS, TAILS), then 
go to Step 1. 
The probability that the output of the experiment 
is 𝑌 is (up to two decimal places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.33


**Step-by-Step Explanation:**

Each round: TH→Y (prob 1/4), HH or HT→N (prob 
2/4), TT→restart (prob 1/4). 
     Let p = P(output Y). 
     p = 1/4 + (1/4)×p  ⟹  (3/4)p = 1/4  ⟹  p = 1/3 ≈ 
0.33.


</details>

---


### Q23. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A probability density function on the interval 
[𝑎,1] is given by 1/𝑥2 and outside this interval 
the value of the function is zero. The value of 𝑎 is 
____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.5


**Step-by-Step Explanation:**

A probability density function is a function of 
continuous random variable, whose Integral 
across 
an interval gives the probability that the value of 
the variable lies within the same interval. 
Calculation: 
Integral value must be equal to 1 . 
∫  
𝑎
𝑎1=[−1𝑎 ]𝑎1 =[−1+1𝑎] 
Equate this to 1. 
⁡−1+1𝑎=1
𝑎=0.5


</details>

---


### Q24. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose that a shop has an equal number of LED 
bulbs of two different types. The probability of an 
LED bulb lasting more than 100 hours given that it 
is of Type 1 is 0.7 , and given that it is of Type 2 is 
0.4 . The probability that an LED bulb chosen 
uniformly at random lasts more than 100 hours is 
____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.55


**Step-by-Step Explanation:**

P(Type 1) = P(Type 2) = 0.5. 
     By total probability: P(lasts > 100) = 0.7×0.5 + 
0.4×0.5 = 0.35 + 0.20 = 0.55.


</details>

---


### Q25. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose 𝑋𝑖 for 𝑖=1,2,3 are independent and 
identically distributed random variables whose 
probability mass functions are Pr[𝑋𝑖=0]=Pr[𝑋𝑖=
1]=12 for 𝑖=1,2,3. Define another random variable 
𝑌=𝑋1𝑋2⊕𝑋3, where ⊕ denotes XOR. Then 
Pr[𝑌=0∣𝑋3=0]= ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.75


**Step-by-Step Explanation:**

Given X₃ = 0:  Y = X₁·X₂ ⊕ 0 = X₁·X₂. 
     P[Y=0 | X₃=0] = P[X₁·X₂ = 0]. 
     X₁·X₂ = 1 only when X₁=1 AND X₂=1. 
     P(X₁·X₂=1) = 1/2 × 1/2 = 1/4. 
    P[Y=0 | X₃=0] = 1 − 1/4 = 3/4 = 0.75.


</details>

---


### Q26. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let 𝑆 be a sample space and two mutually exclusive 
events 𝐴 and 𝐵 be such that 𝐴∪𝐵=𝑆. If P(.) denotes 
the probability of the event, the  maximum value of 
𝑃(𝐴)𝑃(𝐵) is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.25


**Step-by-Step Explanation:**

Since A∩B = ∅ and A∪B = S:  P(A) + P(B) = 1. 
     By AM-GM inequality: (P(A)+P(B))/2 ≥ 
√(P(A)·P(B)) 
     ⟹ 1/2 ≥ √(P(A)·P(B))  ⟹  P(A)·P(B) ≤ 1/4. 
     Equality when P(A) = P(B) = 1/2. Maximum = 0.25.


</details>

---


### Q27. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The probability that a given positive integer lying 
between 1 and 100 (both inclusive) is NOT divisible 
by 2,3 or 5 is ____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.26


**Step-by-Step Explanation:**

n(divisible by 2)=50, n(by 3)=33, n(by 5)=20. 
     n(by 2∩3)=16, n(by 3∩5)=6, n(by 2∩5)=10, n(by 
2∩3∩5)=3. 
     |A∪B∪C| = 50+33+20−16−6−10+3 = 74. 
     P(NOT divisible by 2, 3, or 5) = 1 − 74/100 = 0.26. 
<!-- PAGE 656 -->
ENGINEERING MATHEMATICS


</details>

---


### Q28. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Four fair six -sided dice are rolled. The probability 
that the sum of the results is 22 is X/1296. 
 The value of X is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10


**Step-by-Step Explanation:**

Need x₁+x₂+x₃+x₄ = 22, each xᵢ ∈ {1,…,6}. 
Maximum = 24. 
     Combination (6,6,6,4): permutations = 4!/3! = 4. 
     Combination (6,6,5,5): permutations = 4!/(2!2!) = 
6. 
     Total = 4 + 6 = 10.  ∴ X = 10.


</details>

---


### Q29. [GATE CSE - 2017 NAT SET - 2(2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The security system at an IT office is composed of 10 
computers of which exactly four are working. To 
check whether the system is functional, the officials 
inspect four of the computers picked at random 
(without replacement). The system is deemed 
functional if at least three of the four computers 
inspected are working. Let the probability that the 
system is deemed functional be denoted by 𝑝. Then 
100𝑝= ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11.90


**Step-by-Step Explanation:**

Initially 𝑃 (working computer) =
10,𝑃 (non-
working computer) =
10. 
Case 1 : three computers are functional : There are 
4 sub-cases 
𝑊𝑊𝑊𝑁,𝑊𝑊𝑁𝑊,𝑊𝑁𝑊𝑊,𝑁𝑊𝑊𝑊, where 𝑊 
means working, 𝑁 means non-working, but 
𝑃(𝑊𝑊𝑊𝑁)=𝑃(𝑊𝑊𝑁𝑊)=𝑃(𝑊𝑁𝑊𝑊)=
𝑃(𝑁𝑊𝑊𝑊), because for example 𝑃(𝑊𝑊𝑊𝑁)=
10×
9×
8×
7=
 In all other 3 sub-cases, we get same numerators 
and denominators (in different order), so total prob 
in this case is 
4×144
5040 = 5765040. 
 Case 2 : all 4 are working 
𝑃(𝑊𝑊𝑊𝑊)= 410×39×28×17= 245040
𝑃( atleast 3 are working) = 6005040  
 So 100×𝑝=11.90


</details>

---


### Q30. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number of distinct positive integral factors of 
2014 is _________.


- **(A)** 7

- **(B)** 8

- **(C)** 9

- **(D)** 10



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Prime factorisation of 2014 = 2¹ × 19¹ × 53¹. 
     Number of factors = (1+1)×(1+1)×(1+1) = 2×2×2 
= 8. 
     The 8 factors are: 1, 2, 19, 38, 53, 106, 1007, 
2014.


</details>

---


### Q31. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose 𝑝 is the number of cars per minute passing 
through a certain road junction between 5 PM and 
6 PM , and 𝑝 has a Poisson distribution with mean 
3 . What is the probability of observing fewer than 
3 cars during any given minute in this interval?


- **(A)** (2𝑒3)

- **(B)** (2𝑒3)

- **(C)** (2𝑒3)

- **(D)** (2𝑒3)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Poisson Probability Mass Function (with mean 
𝜆)=⁡
𝜆𝑘
(𝑒𝜆𝑘!), 
We have to sum the probability mass function for 
𝑘=0,1 and 2 and 𝜆=3 (thus finding the 
cumulative mass function) 
⁡=(1𝑒3)+(3𝑒3)+( 92𝑒3)
⁡= 17(2𝑒3)


</details>

---


### Q32. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose a fair six-sided die is rolled once. If the 
value on the die is 1,2 , or 3 , the die is rolled a 
second time. What is the probability that the sum 
total of values that turn up is at least 6 ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Favourable outcomes: 6 alone, 
(1,5),(1,6),(2,4),(2,5),(2,6),(3,3),(3,4),(3,5),(3,6). 
     P(6 on first roll) = 1/6. 
     P(first=1, second≥5) = (1/6)(2/6);  P(first=2, 
second≥4) = (1/6)(3/6);  P(first=3, second≥3) = 
(1/6)(4/6). 
     P = 1/6 + 2/36 + 3/36 + 4/36 = 6/36 + 9/36 = 15/36 
= 5/12.


</details>

---


### Q33. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a random variable 𝑋 that takes values +1 
and -1 with probability 0.5 each. The values of the 
cumulative distribution function 𝐹(𝑥) at 𝑥=−1 
and +1 are


- **(A)** 0 and 0.5

- **(B)** 0 and 1

- **(C)** 0.5 and 1

- **(D)** 0.25 and 0.75



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

F(x) = P(X ≤ x). 
     F(−1) = P(X ≤ −1) = P(X = −1) = 0.5. 
     F(+1) = P(X ≤ +1) = P(X=−1) + P(X=+1) = 0.5 + 
0.5 = 1


</details>

---


### Q34. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If Two fair coins are flipped and at least one of the 
outcome is known to be a head. 
 What is the probability that both outcomes are heads?


- **(A)** 1/3

- **(B)** 1/4

- **(C)** 1/2

- **(D)** 2/3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given at least one head, the reduced sample space = 
{HH, HT, TH} (3 equally likely outcomes). 
     Only {HH} satisfies 'both heads'. 
     P(both heads | at least one head) = 1/3.


</details>

---


### Q35. [GATE CSE - 2014 MCQ SET - 2(1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a finite sequence of random values 
X={x1,x2…..xn}. Let 𝜇𝑥 be the mean and 𝜎𝑥 be the 
standard deviation of 𝑋. Let another finite sequence 
𝑌 of equal length be derived from this as 𝑦𝑖=𝑎∗
𝑥𝑖+𝑏, where 𝑎 and 𝑏 are positive constants. Let 𝜇𝑦 
be the mean and 𝜎𝑦 be the standard deviation of this 
sequence. 
 Which one of the following statements is 
INCORRECT?


- **(A)** Index position of mode of 𝑋 in 𝑋 is the  
 same as the index position of mode of 𝑌 in 𝑌

- **(B)** Index position of median of 𝑋 in 𝑋 is the same 
as the index position of median of 𝑌 in 𝑌

- **(C)** 𝜇𝑦=𝑎𝜇𝑥+𝑏

- **(D)** 𝜎𝑦=𝑎𝜎𝑥+𝑏



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

When yᵢ = a·xᵢ + b:  Var(Y) = a²·Var(X)  ⟹  σy = 
a·σx. 
     The constant b shifts the distribution but does NOT 
affect the spread. 
     So σy = aσx (not aσx + b). All other options (A), 
(B), (C) are correct


</details>

---


### Q36. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A deck of 5 cards (each carrying a distinct number 
from 1 to 5 ) is shuffled thoroughly. Two cards are 
then removed one at a time from the deck. What is 
the probability that the two cards are selected with 
the number on the first card being one higher than 
the number on the second card?


- **(A)** (
5)

- **(B)** (
25)

- **(C)** (
4)

- **(D)** (
5)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Favourable ordered pairs (first, second) where first = 
second + 1: 
     (2,1), (3,2), (4,3), (5,4)  →  4 pairs. 
     Total ordered pairs = 5 × 4 = 20. 
     Probability = 4/20 = 1/5.


</details>

---


### Q37. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If the difference between the expectation of the 
square of a random variable (𝐸[𝑋2]) and the 
square of the expectation of the random variable 
(𝐸[𝑋])2 is denoted by 𝑅, then


- **(A)** 𝑅=0

- **(B)** 𝑅<0

- **(C)** 𝑅≥0

- **(D)** 𝑅>0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

R = E[X²] − (E[X])² = Var(X), which is always ≥ 0. 
     R = 0 only when X is a constant, so R > 0 does not 
always hold. 
     ∴ Correct answer is R ≥ 0. 
<!-- PAGE 657 -->
ENGINEERING MATHEMATICS


</details>

---


### Q38. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


What is the probability that a divisor of 10⁹⁹ is a 
multiple of 10⁹⁶?


- **(A)** (
625)

- **(B)** (
625)

- **(C)** (
625)

- **(D)** (
625)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

10⁹⁹ = 2⁹⁹ × 5⁹⁹.  Total divisors = 100 × 100 = 
10000. 
     A multiple of 10⁹⁶ that divides 10⁹⁹  =  10⁹⁶ × 
(divisor of 10³). 
     10³ = 2³ × 5³.  Number of divisors of 10³ = 
(3+1)(3+1) = 16. 
     Probability = 16/10000 = 1/625.


</details>

---


### Q39. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a company that assembles computers. The 
probability of a faulty assembly of any computer is 
𝑝. The company therefore subjects each computer to 
a testing process. This testing process gives the 
correct result for any computer with a probability of 
𝑞. What is the probability of a computer being 
declared faulty?


- **(A)** 𝑝𝑞+(1−𝑝)(1−𝑞)

- **(B)** (1−𝑞)𝑝

- **(C)** (1−𝑝)𝑞

- **(D)** 𝑝𝑞



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Declared faulty in two cases: 
     1. IS faulty AND test correctly identifies it: p × q. 
     2. NOT faulty AND test incorrectly declares it 
faulty: (1−p) × (1−q). 
     P(declared faulty) = pq + (1−p)(1−q).


</details>

---


### Q40. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


An unbalanced dice (with  66 faces, numbered 
from 11 to 66) is thrown. The probability that the face 
value is odd is  90% of the probability that the face 
value is even. The probability of getting any even 
numbered face is the same. If the probability that the 
face is even given that it is greater than  33 is 0.75, 
which one of the following o ptions is closest to the 
probability that the face value exceeds 33?


- **(A)** 0.453

- **(B)** 0.468

- **(C)** 0.485

- **(D)** 0.492



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

𝑃({1,3,5})=0.9𝑃({2,4,6}) and their sum must be 
1 . So, 
𝑃({1,3,5})=0.91.9=0.4736 and 
𝑃({2,4,6})= 11.9=0.5263  
 Given that probability of getting 2 or 4 or 6 is 
same. 
So, 𝑃(2)=𝑃(4)=𝑃(6)=
0.5263
3 =0.1754 
𝑃({4,6})∣𝑥>3)=0.75
⇒𝑃(5∣𝑥>3)=0.25
⇒𝑃(5)=13(𝑃(4)+𝑃(6))∵𝑥>3
⇒𝑥∈{4,5,6}
⇒𝑃(5)=2.𝑃(4)3 ∵𝑃(4)=𝑃(6).
 So, 𝑃(𝑥>3)=𝑃(4)+𝑃(5)+𝑃(6)=
3× 
0.1754=0.468


</details>

---


### Q41. [GATE CSE – 2011 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let 𝑋 be a random variable following normal 
distribution with mean +1 and variance 4 . Let 𝑌 be 
another normal variable with mean -1 and variance 
unknown. If 𝑃(𝑋≤−1)=𝑃(𝑌≥2), the standard 
deviation of 𝑌 is


- **(A)** 3

- **(B)** 2

- **(C)** √2

- **(D)** 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Step-by-Step Explanation: 
 X ~ N(μ=+1, σ²=4),  so σX = 2. 
 Standardise P(X ≤ −1): 
   z = (−1 − 1)/2 = −2/2 = −1 
   ∴ P(X ≤ −1) = Φ(−1) 
 Standardise P(Y ≥ 2):  Y ~ N(−1, σY2) 
   z = (2 − (−1)) / σY = 3/σY 
   ∴ P(Y ≥ 2) = P(Z ≥ 3/σY) = 1 − Φ(3/σY) 
 Set equal:  Φ(−1) = 1 − Φ(3/σY) 
 By symmetry of standard normal:  Φ(−a) = 1 − 
Φ(a) 
   ∴ 1 − Φ(1) = 1 − Φ(3/σY)  →  3/σY = 1  →  σY = 3.


</details>

---


### Q42. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Aishwarya studies either computer science or 
mathematics everyday. If she studies computer 
science on a day, then the probability that she 
studies mathematics the next day is 0.6 . If she 
studies mathematics on a day,  then the probability 
that she studies computer science the next day is 0.4 
. Given that Aishwarya studies computer science on 
Monday, what is the probability that she studies 
computer science on Wednesday?


- **(A)** 0.24

- **(B)** 0.36

- **(C)** 0.4

- **(D)** 0.6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Transition matrix (row = today, column = next day): 
   P(CS→CS) = 1 − 0.6 = 0.4      P(CS→M) = 0.6 
  P(M→CS)  = 0.4                 P(M→M)  = 1 − 0.4 = 
0.6 
 P(Wed = CS | Mon = CS) 
   = P(Wed=CS | Tue=CS) × P(Tue=CS | Mon=CS) 
   + P(Wed=CS | Tue=M)  × P(Tue=M  | Mon=CS) 
   = (0.4)(0.4) + (0.4)(0.6) 
   = 0.16 + 0.24 = 0.40


</details>

---


### Q43. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


What is the probability that in a randomly chosen 
group of 𝑟 people at least three people have the 
same birthday?


- **(A)** 1−
365−364…(365−𝑟+1)
365𝑟

- **(B)** 365⋅364…(365−𝑟+1)
365𝑟 +⁡𝑟𝐶1⋅365. 
364.363…(364−(r−2)+1)
364r+2

- **(C)** 1−
365⋅364…(365−𝑟+1)
365𝑟 −⁡𝑟𝐶2⋅365. 
364⋅363…(364−(𝑟−2)+1)
364𝑟−2

- **(D)** 365⋅364…(365−𝑟+1)
365𝑟



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Strategy: complement method. 
   P(at least 3 share) = 1 − P(all birthdays different) − 
P(exactly one pair shares) 
 Term 1 — P(all r birthdays different): 
   = 365 × 364 × 363 × … × (365 − r + 1) / 365^r 
   = 365! / [(365 − r)! × 365^r]   (falling factorial form) 
 Term 2 — P(exactly one pair shares, rest all 
different from each other & from pair): 
  Step a: Choose which 2 people share:     C(r, 2) 
ways. 
   Step b: Choose their common birthday:    365 ways. 
   Step c: Assign distinct birthdays ≠ pair's to 
remaining (r−2) people: 
          364 × 363 × … × (367 − r)   →   (r−2) terms, starting 
at 364. 
   Step d: Divide by total outcomes 365^r. 
   P(exactly one pair) = C(r,2) × 365 × [364 × 363 × 
… × (367−r)] / 365^r 
                      = C(r,2) × [364 × 363 × … × (367−r)] / 
365^(r−1) 
 ∴  P(at least 3 share) = 1 − 
[365×364×…×(366−r)]/365^r 
                              − 
C(r,2)×[364×363×…×(367−r)]/365^(r−1) 
 This matches Option (C). ✓ 
<!-- PAGE 658 -->
ENGINEERING MATHEMATICS


</details>

---


### Q44. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Box 𝑃 has 2 red balls and 3 blue balls and box 𝑄 

```c
has 3 red balls and 1 blue ball. A ball is selected as 
follows: (i) select a box (ii) choose a ball from the 
selected box such that each ball in the box is 
equally likely to be chosen. The probabilities of 
selecting boxes 𝑃 and 𝑄 are 
3 and 
3 respectively. 
Given that a ball selected in the above process is a 
red ball, the probability that it came from the box 𝑃 
is:
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The probability of selecting a red ball, 
⁡=(13)∗(25)+(23)∗(34)
⁡= 215+12=1930  
 Probability of selecting a red ball from box, 
𝑃=(13)∗(25)= 215 
 Given that a ball selected in the above process is a 
red ball, the probability that it came from the 
 box 𝑃 is =(215÷1930)= 419


</details>

---


### Q45. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose we uniformly and randomly select a 
permutation from the 20 ! permutations of 
1,2,3…,20. What is the probability that 2 appears at 
an earlier position than any other even number in the 
selected permutation?


- **(A)** (
2)

- **(B)** (
10)

- **(C)** (
9!
20!)

- **(D)** None of these



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The even numbers in {1, 2, …, 20} are:  2, 4, 6, 8, 
10, 12, 14, 16, 18, 20. 
 There are exactly 10 even numbers. 
 Key Insight: The odd numbers are irrelevant. 
 We only need to consider the RELATIVE 
ORDER of the 10 even numbers 
 among themselves within the permutation. 
 Since the permutation is chosen uniformly at 
random, every one of the 
 10! orderings of {2, 4, 6, 8, 10, 12, 14, 16, 18, 20} 
is equally likely. 
 P(2 is first among all even numbers) = 1/10. 
 Intuition: By symmetry, each of the 10 even 
numbers is equally likely to 
 appear first (leftmost) among all even numbers. So 
the probability = 1/10.


</details>

---


### Q46. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In a certain town, the probability that it will rain 
TODAY is 0.5. 
 The probability that it will rain tomorrow is 0.6. 
 The probability that it will rain on BOTH today and 
tomorrow is 0.3. 
 The probability that it will rain today OR tomorrow 
is:


- **(A)** 0.2

- **(B)** 0.5

- **(C)** 0.8

- **(D)** 1.0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Using the Addition Rule of Probability: 
   P(A ∪ B) = P(A) + P(B) − P(A ∩ B) 
           = 0.5  + 0.6  − 0.3 
           = 0.8   
 Verification: since P(A ∩ B) = 0.3 > 0 the events 
are NOT mutually exclusive, 
 so we must subtract the intersection to avoid 
double-counting.


</details>

---


### Q47. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


When a coin is tossed, the probability of getting a 
Head is 𝑝,0<𝑝<1. Let 𝑁 be the random variable 
denoting the number of tosses till the first Head 
appears, including the toss where the Head appears. 
Assuming that successive tosses are independent, the


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

⁡⁡⁡⁡⁡𝐸=1×𝑝+2×(1−𝑝)𝑝+3×(1−𝑝)(1−𝑝)𝑝+⋯ 
multiply both side with (1−𝑝) and subtract: 
𝐸⁡−(1−𝑝)𝐸=1×𝑝+(1−𝑝)𝑝+(1−𝑝)(1−𝑝)𝑝+⋯
⁡=𝑝/(1−(1−𝑝))=1 (because it is now forming a GP) 
⁡⟹(1−1+𝑝)𝐸=1
⁡⟹𝐸=1/𝑝
So, option (𝐴).


</details>

---


### Q48. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let 𝑓(𝑥) be the continuous probability density 
function of a random variable 𝑥, the probability 
that 𝑎<𝑥≤𝑏, is:


- **(A)** 𝑓(𝑏−𝑎)

- **(B)** 𝑓(𝑏)−𝑓(𝑎)

- **(C)** ∫  
𝑏
𝑎 𝑓(𝑥)𝑑𝑥

- **(D)** ∫  
𝑏
𝑎 𝑥𝑓(𝑥)𝑑𝑥



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

𝐴. This gives the probability at the point of 𝑏−𝑎 
which is not having any significant w.r.t 𝑎 and 𝑏. 
𝐵. This gives the difference of the probabilities at 𝑏 
and 𝑎. Note: This is different from cumulative 
distribution function 𝐹(𝑏)−𝐹(𝑎). 
𝐶. This is Probability Density Function. 
𝐷. This is expected value of continuous random 
variable.


</details>

---


### Q49. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A random bit string of length n is constructed by 
tossing a fair coin n times and 
 setting a bit to 0 or 1 depending on outcomes 
HEAD and TAIL, respectively. 
 The probability that two such randomly generated 
strings are NOT identical is:


- **(A)** 1/2ⁿ

- **(B)** 1 − 1/n

- **(C)** 1/n!

- **(D)** 1 − 1/2ⁿ



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Each bit string of length n is produced by n 
independent fair coin tosses. 
 Total distinct strings = 2ⁿ, each generated with equal 
probability. 
 Fix string S₁ (the first generated string — any 
specific string). 
 The second string S₂ is generated independently. 
 P(S₂ identical to S₁) 
   = P(all n bits of S₂ match S₁) 
   = (1/2)¹ × (1/2)¹ × … × (1/2)¹   [n times, 
independent] 
   = (1/2)ⁿ = 1/2ⁿ 
 P(S₂ NOT identical to S₁) 
   = 1 − 1/2ⁿ  ✓ 
<!-- PAGE 659 -->
ENGINEERING MATHEMATICS


</details>

---


### Q50. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A bag contains 10 blue marbles, 20 green marbles 
and 30 red marbles. A marble is drawn from the 
bag, its colour recorded and it is put back in the bag. 
This process is repeated 3 times. The probability 
that no two of the marbles drawn have the same 
colour is


- **(A)** 1/36

- **(B)** 1/6

- **(C)** 1/4

- **(D)** 1/3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Total marbles = 10 + 20 + 30 = 60. 
 Individual probabilities (with replacement, so 
constant each draw): 
   P(blue)  = 10/60 = 1/6 
   P(green) = 20/60 = 1/3 
   P(red)   = 30/60 = 1/2 
 "No two same colour" means all THREE draws 
are DIFFERENT colours. 
 There are 3! = 6 orderings of (blue, green, red). 
 P(one blue, one green, one red in any order) 
   = 3! × P(blue) × P(green) × P(red) 
   = 6 × (1/6) × (1/3) × (1/2) 
   = 6 × 1/36 
   = 6/36 = 1/6   
<!-- PAGE 660 -->
CALCULUS


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the function 𝑓:ℝ→ℝ defined as follows:  
 𝑓(𝑥)={𝑐1𝑒𝑥−𝑐2loge⁡(1𝑥),  if 𝑥>0
3  otherwise 
 where 𝑐1 ,𝑐2 ∈ℝ.  
 If 𝑓 is continuous at 𝑥 = 0, then 𝑐1+𝑐2 = 
_________. (answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

𝑒𝑥→1, log⁡(1/𝑥)→∞ 
 So,   𝑓(𝑥)≈𝑐1−𝑐2⋅∞ 
For limit to be finite ⇒ must have 𝑐2=0 
Then limit becomes 𝑐1 
 So,  𝑐1=3 
   𝑐1+𝑐2=3+0=3


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑓:ℝ→ℝ be defined as follows: 
   f(𝑥)=((|𝑥|/2) − 𝑥)(𝑥 − (|𝑥|/2) ) 
 Which of the following statements is/are true?


- **(A)** 𝑓 has a local maximum

- **(B)** 𝑓 has a local minimum

- **(C)** 𝑓′ is continuous over ℝ

- **(D)** 𝑓′ is not differentiable over ℝ



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,C, D


**Step-by-Step Explanation:**

f(x) = (|x|/2 − x)(x − |x|/2) 
= −(|x|/2 − x)² 
 Casewise: 
 For x ≥ 0: f(x) = −x²/4  
 For x < 0: f(x) = −9x²/4  
 f′(x): 
 For x > 0: f′(x) = −x/2  
 For x < 0: f′(x) = −9x/2  
 At x = 0: f′(0) = 0 ⇒ continuous  
 f″(x): 
 For x > 0: −1/2  
 For x < 0: −9/2 ⇒ not defined at x = 0  
 Conclusions: 
(a) True (local maximum at x = 0) 
(b) False 
(c) True (f′ continuous) 
(d) True (f′ not differentiable at x = 0)


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For a real number 𝑎, let    
𝐼(𝑎)=∫−1
 (3𝑥2−𝑎𝑥+1)𝑑𝑥 
 Which of the following statements is/are true?


- **(A)** The value of 𝐼(𝑎)is independent of the 
value of a

- **(B)** The value of 𝐼(𝑎)can vary with the value of 
a

- **(C)** There exists 𝑎∈(−∞,+∞)such that 𝐼(𝑎)is 
a positive real number.

- **(D)** There exists 𝑎∈(−∞,+∞)such that 𝐼(𝑎)is 
a negative real number.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,C


**Step-by-Step Explanation:**

∫ 𝑥 𝑑𝑥=0
−1 (odd function over symmetric interval) 
 So, 𝐼(𝑎)becomes independent of 𝑎 
 Now, 
𝐼(𝑎)=∫ (3
−1
𝑥2+1) 𝑑𝑥=3⋅23+2=2+2=4


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The value of 𝑥 such that 𝑥 > 1, satisfying the 
equation 
 ∫1
𝑥
 𝑡ln⁡𝑡𝑑𝑡=
4 is


- **(A)** √e

- **(B)** e

- **(C)** e2

- **(D)** e-1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

x = √e 
 Work: 
 ∫ t ln t dt = (t²/2) ln t − t²/4 + C 
 So, 
  ∫1
𝑋
t ln t dt = [ (x²/2) ln x − x²/4 ] − [ 0 − 1/4 ] 
= (x²/2) ln x − x²/4 + 1/4 
 Set equal to 1/4 and solve: 
 =(x²/2) ln x − x²/4 = 0 
⇒ ln x = 1/2 
⇒ x = e (1/2) = √e


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the given function 𝑓(𝑥).  
𝑓(𝑥)={𝑎𝑥+𝑏  for 𝑥<1𝑥3+𝑥2+1  for 𝑥≥1 
 If the function is differentiable everywhere, the 
value of 𝑏 must be ________. (rounded off to one 
decimal place)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (-2.0)


**Step-by-Step Explanation:**

Problem Analysis: 
 The function f(x) is defined as: 
 For x < 1, f(x) = ax + b 
 For x ≥ 1, f(x) = x3 + x2 + 1 
 We need to find the value of b so that the function is 
differentiable everywhere. 
GATE CSE – 2008   MCQ (2-MARKS) 
GATE CSE – 2007   MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 664 -->
ENGINEERING MATHEMATICS 
 Step 1: Ensure Continuity at x = 1 
 For the function to be continuous at x = 1, the left-
hand limit must equal the right-hand limit. 
 For x < 1, the left-hand limit at x = 1 is: f(1-) = 
a + b 
 For x ≥ 1, the right-hand limit at x = 1 is: f(1+) 
= 3 
 For continuity, we require: a + b = 3. This gives us 
Equation 1. 
 Step 2: Ensure Differentiability at x = 1 
 For differentiability at x = 1, the derivatives from 
both sides must match at x = 1. 
 For x < 1, the derivative of f(x) = ax + b is: 
f'(x) = a 
 For x ≥ 1, the derivative of f(x) = x3 + x2 + 1 is: 
f'(x) = 3x2 + 2x. At x = 1, f'(1+) = 5. 
 For differentiability, we require: a = 5. 
 Step 3: Solve for b 
 From Equation 1, we know that a + b = 3. 
Substituting a = 5 into this equation, we get: 5 + b 
= 3 Solving for b, we get b = -2. 
 Final Answer: 
 The value of b is -2.0 (rounded to one decimal 
place).


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f(x) be a continuous function from ℝ to ℝ such 
that 
 f(x) = 1 - f(2-x) 
 Which one of the following options is the 
CORRECT value of  of ∫  
0 𝑓(𝑥)𝑑𝑥 ?


- **(A)** 0

- **(B)** 1

- **(C)** 2

- **(D)** -1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let 𝑢=𝑎−𝑥, we have 𝑑𝑢=−𝑑𝑥, then 
∫ 𝑓(𝑎−𝑥) 𝑑𝑥=
𝑎
∫ −𝑓(𝑢) 𝑑𝑢
𝑢=0
𝑢=𝑎
=−∫ 𝑓(𝑢) 𝑑𝑢=
𝑎
∫ 𝑓(𝑢) 𝑑𝑢
𝑎
 So, 
∫ 𝑓(𝑎−𝑥) 𝑑𝑥=
𝑎
∫ 𝑓(𝑢) 𝑑𝑢=
𝑎
∫ 𝑓(𝑥) 𝑑𝑥
𝑎
 (∵ variable of integration is a dummy variable) 
 Now, 
∫ 𝑓(𝑥) 𝑑𝑥=
∫ 𝑓(2−𝑥) 𝑑𝑥=
∫ [1−𝑓(𝑥)] 𝑑𝑥
=2−∫ 𝑓(𝑥) 𝑑𝑥
2∫ 𝑓(𝑥) 𝑑𝑥=2
∫ 𝑓(𝑥) 𝑑𝑥=1


</details>

---


### Q7. [GATE CSE – 2025 MCQ SET - 2 (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The value of the definite integral 
∫−3
 ∫−2
 ∫−1
 (4𝑥2𝑦−𝑧3)d𝑧 d𝑦 d𝑥


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

∫ ∫ ∫ (4
−1
−2
−3
𝑥2𝑦−𝑧3) 𝑑𝑧 𝑑𝑦 𝑑𝑥 
=∫ ∫ [4𝑥2𝑦𝑧−𝑧44]−112
−2
−3
𝑑𝑦 𝑑𝑥 
=∫ ∫ (8
−2
−3
𝑥2𝑦) 𝑑𝑦 𝑑𝑥 
=∫ [4𝑥2𝑦2]−22
−3
𝑑𝑥 
=0


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f (x) = x3+ 15x2 − 33x − 36 
 be a real-valued function. 
 Which of the following statements is/are TRUE?


- **(A)** f(x) has a local maximum.

- **(B)** f(x) does not have a local maximum

- **(C)** f(x) has a local minimum.

- **(D)** f(x) does not have a local minimum.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C


**Step-by-Step Explanation:**

the real valued function 𝑓(𝑥)=𝑥3+15𝑥2−33𝑥−
36=0 
1. find 𝑓′(𝑥)=0 
⁡⟹3𝑥2+30𝑥−33=0
⁡⟹𝑥2+10𝑥−11=0
⁡⟹𝑥2+11𝑥−𝑥−11=0
⁡⟹(𝑥+11)(𝑥−1)=0
⁡⟹𝑥=−11,1
2. find 𝑓′′(𝑥) we get: 𝑓′′(𝑥)=6𝑥+30 
3. 𝑓′′(1)=6+30=36>0 it is gives local 
minima 
4𝑓′′(−11)=−66+30=−36<0 it is gives 
local maxima. 
so given function 𝑓(𝑥) will give local maxima at 
𝑥=−11 and local minima at 𝑥=1 
∴ Option 𝐴,𝐶 is correct.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the functions 
 I. e−x 
 II. x2 - sin x 
 III. √(x3+1) 
 Which of the above functions is/are increasing 
everywhere in [0, 1]?


- **(A)** III only

- **(B)** II only

- **(C)** II and III only

- **(D)** I and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

Concept: Increasing Function 
A function 𝑓(𝑥) is increasing on an interval if: 
𝑥1<𝑥2⇒𝑓(𝑥1)≤𝑓(𝑥2) 
 That is, as 𝑥 increases, 𝑓(𝑥) should not decrease. 
 Checking the Options 
Option 1 
Given: 
𝑓(0)=1,𝑓(1)=0.368 
 Since: 
𝑓(1)<𝑓(0) 
<!-- PAGE 665 -->
ENGINEERING MATHEMATICS 
 So, as 𝑥 increases from 0 to 1,𝑓(𝑥) decreases. 
Not an increasing function 
 Option II 
Given: 
𝑓(𝑥)=𝑥2−sin⁡𝑥 
 Check values: 
 𝑓(0)=0 
 𝑓(0.5)=0.25−sin⁡(0.5) 
 Now, note: 
The angle must be in radians, so: 
sin⁡(0.5)≈0.479 
 Thus: 
𝑓(0.5)≈0.25−0.479=−0.229 
 Since: 
𝑓(0.5)<𝑓(0) 
 Again, 𝑓(𝑥) decreases when 𝑥 increases. 
Not an increasing function 
 Option III 
Here, 𝑓(𝑥) behaves such that: 
 When 𝑥 increases →𝑓(𝑥) increases 
 When 𝑥 decreases → 𝑓(𝑥) decreases 
 This satisfies the definition of an increasing 
function on [0,1].


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


If 𝑔(𝑥)=1−𝑥 and ℎ(𝑥)=
𝑥
𝑥−1, then 
g(h(x))
h(g(x)) is


- **(A)** h(x)/g(x)

- **(B)** −1/𝑥

- **(C)** g(x)/h(x)

- **(D)** 𝑥/(1−𝑥)2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

g(h(x)) = g(x/(x-1)) = 1 - x/(x-1) = -1/(x-1) 
h(g(x)) = h(1-x) = (1-x)/((1-x) - 1) = -(1-x)/x 
g(h(x)) / h(g(x))  = [-1/(x-1)] / [-(1-x)/x] 
                  = -x/(x-1)2 
Therefore: -x/(x-1)2 is same as h(x) / g(x).


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Solve: 
 ∫  
2/𝜋
1/𝜋
cos⁡(1/𝑥)
𝑥2 𝑑𝑥=


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (−1)


**Step-by-Step Explanation:**

Let 𝑢=
𝑥=𝑥−1. 
Now, find the differential 𝑑𝑢 by differentiating with 
respect to 𝑥 : 
𝑑𝑢=−𝑥−2𝑑𝑥=− 1𝑥2𝑑𝑥
−𝑑𝑢= 1𝑥2𝑑𝑥  
Lower limit (𝑥=1/𝜋) : 
𝑢= 11/𝜋=𝜋 
o Upper limit (𝑥=2/𝜋) : 
𝑢= 12/𝜋=𝜋2 
∫  
𝜋/2
𝜋
cos⁡(𝑢)⋅(−𝑑𝑢) 
We can eliminate the negative sign by flipping the 
integration limits: 
∫  
𝜋
𝜋/2
cos⁡(𝑢)𝑑𝑢 
The artiderivative of con( u) is sin( u ): 
[sin⁡(𝑢)]𝜋/2𝜋 =sin⁡(𝜋)−sin⁡(𝜋2) 
Substitute the standard trigonometric values ( 
sin⁡(𝜋)=0 and sin⁡(𝜋/2)=1 ): 
0−1=−1


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f(x) = x–(1/3) and A denote the area of the 
region bounded by f(x) and the X-axis, when x 
varies from –1 to 1. Which of the following 
statements is/are TRUE? 
       (I) f is continuous in [–1, 1] 
     (II) f is not bounded in [–1, 1] 
       (III) A is nonzero and finite


- **(A)** II only

- **(B)** III only

- **(C)** II and III only

- **(D)** I, II and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Since 𝑓(0)→∞ 
∴𝑓 is not bounced in [−1,1] and hence 𝑓 is not 
continuous in [−1,1]. 
𝐴=∫  
−1
 𝑓(𝑥)𝑑𝑥=−∫  
−1
 𝑥−1/3𝑑𝑥+∫  
 𝑥−1/3𝑑𝑥
⁡=−32(𝑥2/3)−10 +32(𝑥2/3)01=32+32=3  
 which is non-zero and finite 
∴ Statement II & III are true.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Solve 
∑  99𝑥=1 1𝑥(𝑥+1)= ____ .


- **(A)** 0.99

- **(B)** 1.00

- **(C)** 2.00

- **(D)** 3.00



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

S = 1/1*2 + 1/2*3 + 1/3*4 + ..... + 1/99*100 
= (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + .... + (1/99 -       
<!-- PAGE 666 -->
ENGINEERING MATHEMATICS 
1/100) 
= (1 + 1/2 + 1/3 .... 1/99) - (1/2 + 1/3 + 1/4 ... 
1/100) 
= 1 - 1/100 
= 99/100 
= 0.99


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The value of lim
𝑥→∞
 (1+𝑥2)𝑒−𝑥 is


- **(A)** 0

- **(B)** 1/2

- **(C)** 1

- **(D)** ∞



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Use Logarithms 
Let 𝑦=(1+𝑥2)𝑒−𝑥. Taking the natural logarithm 
gives ln⁡(𝑦)=𝑒−𝑥ln⁡(1+𝑥2)=ln⁡(1+𝑥2)𝑒𝑥 . 
 Evaluate the Limit of ln⁡(𝑦) 
Apply L'Hôpital's Rule to the 
∞
∞ form: 
lim
𝑥→∞
𝑑
𝑑𝑥[ln⁡(1+𝑥2)]
𝑑
𝑑𝑥[𝑒𝑥]
= lim
𝑥→∞
2𝑥
1+𝑥2
𝑒𝑥
= lim
𝑥→∞
  2𝑥𝑒𝑥(1+𝑥2) 
 Apply L'Hôpital's Rule a second time as it remains 
in 
∞
∞ form: 
lim
𝑥→∞
𝑑
𝑑𝑥[2𝑥]
𝑑
𝑑𝑥[𝑒𝑥(1+𝑥2)]
= lim
𝑥→∞
  2𝑒𝑥(1+𝑥2)+𝑒𝑥(2𝑥)
= lim
𝑥→∞
  2𝑒𝑥(𝑥+1)2 
 Since the denominator is now infinitely large, 
lim
𝑥→∞
 ln⁡(𝑦)=0. 
 Solve for 𝑦 
Since ln⁡(𝑦)→0, then 𝑦→𝑒0=1. 
Final Answer: The value of the limit is 1.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The function f(x) = x sinx satisfies the following 
equation f''(x) + f(x) + t cosx = 0. The value of t is 
____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  -2


**Step-by-Step Explanation:**

We have f(x) = x sin x 
⇒ f'(x) = x cos x + sin x 
⇒ f′′(x) = x (− sin x ) + cos x + cos x = (−x sin x ) 
+ 2 cos x 
Now, it is given that f(x) = x sin x satisfies the 
equation f′′(x) + f(x) + t cos x = 0 
⇒ (−x sin x ) + 2 cos x + x sin x + t cos x = 0 
⇒ 2 cos x + t cos x = 0 
⇒ cos x ( t + 2 ) = 0 
⇒ t + 2 = 0 
⇒ t = −2


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A function f(x) is continuous in the interval [0,2]. It 
is known that f(0) = f(2) = -1 and f(1) = 1. Which 
one of the following statements must be true?


- **(A)** There exists a y in the interval (0,1) such that 
f(y) = f(y + 1)

- **(B)** For every y in the interval (0,1),f(y) = f(2 − y)

- **(C)** The maximum value of the function in the 
interval (0,2) is 1.

- **(D)** There exists a y in the interval (0, 1) such that  
           f(y) = −f(2 − y)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, D


**Step-by-Step Explanation:**

For Option A: comparing 𝑓(𝑥) and 𝑓(𝑥+1) 
𝑓(0)=−1,𝑓(1)=1 
 𝑓(1)=1,𝑓(2)=−1 
 So for 𝑥∈[0,1] : 
 𝑓(𝑥) goes from −𝟏−𝟏 
 𝑓(𝑥+1) goes from 1→−1 
 Now define: 
𝑔(𝑥)=𝑓(𝑥)−𝑓(𝑥+1) 
 Then: 
 𝑔(0)=−1−1=−2 
 𝑔(1)=1−(−1)=2 
 Since 𝑔(𝑥) is continuous, it must cross 0 
somewhere in (0,1). 
So there exists 𝑐∈(0,1) such that: 
𝑓(𝑐)=𝑓(𝑐+1) 
 So Option A is TRUE, 
 For Option D: comparing 𝑓(𝑦) and −𝑓(2−𝑦) 
 Reflect → shift → reflect gives −𝑓(2−𝑦) 
 Now check values on [0,1] : 
 𝑓(0)=−1,𝑓(1)=1 
 −𝑓(2−0)=−𝑓(2)=−(−1)=1↓ 
 −𝑓(2−1)=−𝑓(1)=−1 
 So: 
 𝑓(𝑦) : goes −1→1 
 −𝑓(2−𝑦) : goes 1→−1 
 Define: 
ℎ(𝑦)=𝑓(𝑦)+𝑓(2−𝑦) 
<!-- PAGE 667 -->
ENGINEERING MATHEMATICS 
 Then: 
 ℎ(0)=−1+(−1)=−2 
 ℎ(1)=1+1=2 
 Again, by continuity, ℎ(𝑦)=0 somewhere 
in (0,1), i.e.: 
𝑓(𝑦)=−𝑓(2−𝑦) 
 So Option D is also TRUE.


</details>

---


### Q17. [GATE CSE – 2023 MSQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The value of the integral given below is 
∫  
𝜋
𝑥2cos⁡𝑥𝑑𝑥


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

⁡∫0
𝜋
 𝑥2cos⁡𝑥𝑑𝑥=𝑥2[sin⁡𝑥]0𝜋−∫0𝜋 2𝑥⋅sin⁡𝑥
⁡=(𝜋2(0)−0)−[[−2𝑥cos⁡𝑥]0𝜋−∫0𝜋 2cos⁡𝑥𝑑𝑥]
⁡=0−[2𝜋−0+2[sin⁡𝑥]0𝜋]
⁡=−[2𝜋+2(0−0)]
⁡=−2𝜋


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A non-zero polynomial f(x) of degree 3 has roots 
at x = 1, x = 2 and x = 3.  Which one of the 
following must be TRUE?


- **(A)** f(0)f(4) < 0

- **(B)** f(0)f(4) > 0

- **(C)** f(0) + f(4) > 0

- **(D)** f(0) + f(4) < 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

Roots of polynomial of degree ‘3’ are 1, 2, 3 
       Polynomial will be 
       F(x) = (x-1)(x-2)(x-3) 
       f(0) = -1 × -2 × -3 = -6 
       f(4) = 3 × 2 × 1 = 6 
       f(0)∙f(4) = - 36 
       f(0) + f(4) = 6 - 6 = 0 
       Option (A) is correct.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


If ∫  
2𝜋
0 |𝑥⁡sin⁡𝑥|𝑑𝑥=𝑘𝜋, then the value of 𝑘 is      
equal to ____ .


- **(A)** 4

- **(B)** 5

- **(C)** 6

- **(D)** 7



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given: 
∫  
2𝜋
|𝑥sin⁡𝑥|𝑑𝑥=𝑘𝜋 
 Break integral: 
=∫  
𝜋
𝑥sin⁡𝑥𝑑𝑥−∫  
2𝜋
𝜋
𝑥sin⁡𝑥𝑑𝑥 
 Using integration by parts: 
∫⁡𝑥sin⁡𝑥𝑑𝑥=−𝑥cos⁡𝑥+sin⁡𝑥+𝐶 
 Evaluate: 
∫  
𝜋
 𝑥sin⁡𝑥𝑑𝑥=𝜋
∫  
2𝜋
𝜋
 𝑥sin⁡𝑥𝑑𝑥=−3𝜋
 So, 
∫  
2𝜋
|𝑥sin⁡𝑥|𝑑𝑥=𝜋−(−3𝜋)=4𝜋 
 Therefore, 
𝑘=4


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following functions is continuous 
at       x = 3?


- **(A)** 𝑓(𝑥)={
2,  if 𝑥=3
𝑥−1,  if 𝑥>3
𝑥+3
3 ,  if 𝑥<3

- **(B)** 𝑓(𝑥)={4,  if 𝑥=38−𝑥  if 𝑥≠3

- **(C)** 𝑓(𝑥)={𝑥+3,  if 𝑥≤3𝑥−4,  if 𝑥>3

- **(D)** 𝑓(𝑥)=
𝑥3−27, if x≠3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

A function is continuous at some point c, 
 Value of f(x) defined for x > c = Value of f(x) 
defined for x < c = Value of f(x) defined for x = c  
 All values are 2 in option A, thus A is continuous at 
x = 3.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Given i=√−1, what will be the evaluation of the 
definite integral 
∫  
𝜋/2
cos⁡𝑥+𝑖sin⁡𝑥
cos⁡𝑥−𝑖sin⁡𝑥𝑑𝑥


- **(A)** 0

- **(B)** 2

- **(C)** -i

- **(D)** i



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

We know that, 
𝑒𝑖𝑥=cos⁡𝑥+𝑖sin⁡𝑥 
            So, I=∫  
𝜋/2
eix
e−ixdx 
⁡=∫  
𝜋/2
 ei2xdx
⁡=[ei2x
2i ]0
𝜋/2
⁡= 12i[cos⁡2x+isin⁡2x]0𝜋/2
= 12𝑖×(−2) 
                           = -1/i 
                           = i


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the value of  lim
𝑛→∞
(1−
𝑛)
2𝑛
?


- **(A)** 0

- **(B)** e−2

- **(C)** e−1/2

- **(D)** 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let 𝐿= lim
𝑛→∞
 (1−
𝑛)
2𝑛
Take the natural log of both sides: ln⁡(𝐿)=
lim
𝑛→∞
 2𝑛ln⁡(1−
𝑛) 
Rewrite as a fraction to apply L'Hôpital's Rule: 
ln⁡(𝐿)= lim
𝑛→∞
2ln⁡(1−1/𝑛)
1/𝑛  
Applying L'Hôpital's Rule Differentiate the 
numerator and the denominator: ln⁡(𝐿)= 
⁡lim
𝑛→∞
2⋅ 11−1/𝑛⋅ 1𝑛2
−1/𝑛2
ln⁡(𝐿)= lim
𝑛→∞
  −21−1/𝑛
 Evaluate the limit as 𝑛→∞:ln⁡(𝐿)=−2 
𝐿=𝑒−2


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The value of x at which y is minimum for 𝑦=𝑥2−
3𝑥+1 is


- **(A)** -3/2

- **(B)** 3/2

- **(C)** 0

- **(D)** -5/4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

y=x2-3x+1 
 y'=2x-3 
 y''=2 // So, y has minimum value 
 the value at point (2x-3)=0 
 or, x=3/2 
<!-- PAGE 668 -->
ENGINEERING MATHEMATICS


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


∫0
𝜋/4
 (1−tan⁡𝑥)/(1+tan⁡𝑥)𝑑𝑥 evaluates to


- **(A)** 0

- **(B)** 1

- **(C)** ln⁡2

- **(D)** 1/2ln⁡2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Let 𝐼=∫0
𝜋
4 1−tan⁡𝑥1+tan⁡𝑥𝑑𝑥=∫0
𝜋
4 cos⁡𝑥−sin⁡𝑥cos⁡𝑥+sin⁡𝑥𝑑𝑥 
Now put cos⁡𝑥+sin⁡𝑥=𝑡, Then (−sin⁡𝑥+
cos⁡𝑥)𝑑𝑥=𝑑𝑡 and changing limit So we get 𝐼=
∫1
√2
𝑡𝑑𝑡=[ln⁡𝑡]=ln⁡(√2)=
ln⁡2


</details>

---


### Q25. [GATE CSE – 2014  MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


If 𝑓(𝑥) is defined as follows, what is the minimum 
value of 𝑓(𝑥) for 𝑥∈(0,2] ?  
𝑓(𝑥)={
8𝑥  when 𝑥≤32
𝑥+1𝑥  otherwise


- **(A)** 2

- **(B)** 2

- **(C)** 2

- **(D)** 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

For 𝑥≤
2: 
𝑓(𝑥)=
8𝑥→ decreasing ⇒ min at 𝑥=
𝑓=2512 
 For 𝑥>
2: 
𝑓(𝑥)=𝑥+
𝑥→ increasing in this interval ⇒ min 
near 
𝑓=136  
 Compare: 
12<136  
 Minimum = 2
12(Option B)


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


lim𝑥→∞ 
𝑥−sin⁡𝑥
𝑥+cos⁡𝑥 equals


- **(A)** 1

- **(B)** -1

- **(C)** ∞

- **(D)** -∞



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

lim
𝑥→∞
 𝑥−sin⁡𝑥𝑥+cos⁡𝑥 
 Divide numerator and denominator by 𝑥 : 
=
1−sin⁡𝑥𝑥
1+cos⁡𝑥𝑥  
 As 𝑥→∞ : 
sin⁡𝑥
𝑥 →0,cos⁡𝑥𝑥 →0 
 So, 
lim=1−01+0=1 
 Final Answer: 1


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements about the 
function f(x)=|x|: 
P. f(x) is continuous for all real values of x 
Q. f(x) is differentiable for all real values of x 
Which of the following is TRUE?


- **(A)** P is true and Q is false.

- **(B)** P is false and Q is true.

- **(C)** Both P and Q are true.

- **(D)** Both P and Q are false.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

𝑓(𝑥)=|𝑥|. Here, for all values of 𝑥,𝑓(𝑥) exists. 
Therefore, it is continuous for all real values of 𝑥. 
At 𝑥=0,𝑓(𝑥) is not differentiable. Because if we 
take the left hand derivative here, it is negative 
while the right hand derivative is positive making 
LHD ≠ RHD.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the value of ∫ (𝒙−𝝅
𝟐𝝅
𝟎 )𝟐(𝐬𝐢𝐧⁡𝒙)𝒅𝒙


- **(A)** -1

- **(B)** 0

- **(C)** 1

- **(D)** π



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The definite integral evaluates to 𝟎 due to 
symmetry. 
Using the substitution 𝑢=𝑥−𝜋, the integral 
shifts from the interval [0,2𝜋] to the symmetric 
interval [−𝜋,𝜋] : 
∫  
𝜋
−𝜋
𝑢2sin⁡(𝑢+𝜋)𝑑𝑢=∫  
𝜋
−𝜋
−𝑢2sin⁡𝑢𝑑𝑢 
The function 𝑓(𝑢)=−𝑢2sin⁡𝑢 is an odd function 
because plugging in −𝑢 negates the entire 
expression: 
𝑓(−𝑢)=−(−𝑢)2sin⁡(−𝑢)=𝑢2sin⁡𝑢=−𝑓(𝑢) 
The integral of any odd function over a 
symmetric interval [−𝑎,𝑎] is always 0 because 
the areas on the left and right sides of the 𝑦-axis 
completely cancel each other out. 
<!-- PAGE 669 -->
LINEAR ALGEBRA


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider 4 × 4 matrices with their elements from 
{𝟎, 𝟏}. What  is the number of such matrices with 
even number of 𝟏s in every row and every column 
is


- **(A)** 512

- **(B)** 1025

- **(C)** 1023

- **(D)** 255



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation : We need 4×4 matrices with entries 
{0,1} such that each row and each column has 
even number of 1s. 
 Key idea: Think in mod 2 (even = sum = 0). 
 Step 1: First 3 rows and 3 columns can be filled 
freely. 
 So we can choose a 3×3 block arbitrarily. 
 Number of ways: 
 Step 2: Now fix the last column. 
 For each of the first 3 rows, choose the 4th 
element so that row sum becomes even. 
 So last column entries are uniquely determined 
for first 3 rows. 
 Step 3: Fix the last row. 
 For each of first 3 columns, choose entry so 
column sum becomes even. 
 Again uniquely determined. 
 Step 4: The bottom-right element is automatically 
fixed (both row and column condition match). 
 So total number of valid matrices: 
 29=512 
 Answer : 512


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For 𝑛 > 1, the maximum multiplicity of any 
eigenvalue of an 𝑛 × 𝑛 matrix with elements from 
ℝ is


- **(A)** 𝑛

- **(B)** 𝑛 −1

- **(C)** 1

- **(D)** 𝑛 + 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Multiplicity of an eigenvalue means how many 
times it appears (algebraic multiplicity). 
 For an n×n  matrix, the characteristic polynomial has 
degree n, so total multiplicities of all eigenvalues 
add up to n. 
 Maximum possible multiplicity of a single 
eigenvalue occurs when all eigenvalues are same 
(e.g., identity matrix or scalar matrix). 
 So maximum multiplicity = n.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑛 > 1. Consider an 𝑛 × 𝑛 matrix 𝑀 with its 
elements from ℝ. Let the vector (0, 1, 0, 0, … , 0) 
∈ ℝ𝑛 be in the null space of 𝑀. Which of the 
following options is/are always correct?


- **(A)** Determinant of 𝑀 is 1

- **(B)** Determinant of 𝑀 is 0

- **(C)** Rank of 𝑀 is 1

- **(D)** There are at least two non-zero vectors in 
the null space of M



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, D


**Step-by-Step Explanation:**

Given: 𝑀𝐯=0 where 𝐯=(0,1,0,…,0)≠0 
So null space contains a non-zero vector ⇒ matrix is 
singular. 
Hence: 
 Determinant must be 0⇒( B) true 
 (A) false 
 Rank: 
We only know rank < n, not necessarily 1⇒(C) 
false 
Null space: 
If one non-zero vector is in null space, then all its 
scalar multiples are also in null space ⇒ infinitely 
many non-zero vectors ⇒ at least two exist ⇒(D) 
true 
 Answer: B and D


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the system of linear equations given 
below. 
𝑎𝑥+𝑦=𝑏
16𝑥+𝑎𝑦=24 
 Suppose the values of 𝑎 and 𝑏 are chosen such that 
the system of linear equations produce multiple 
solutions. Then the product of 𝑎 and 𝑏 is ____ . 
(answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 24


**Step-by-Step Explanation:**

System: 
𝑎𝑥+𝑦=𝑏
16𝑥+𝑎𝑦=24 
 For multiple (infinite) solutions, the two equations 
must be dependent. 
So ratios must be equal: 
𝑎
16=1𝑎= 𝑏24 
 From: 
𝑎
16=1𝑎⇒𝑎2=16⇒𝑎=±4 
 Now: 
𝑎
16= 𝑏24⇒𝑏=24𝑎16 =3𝑎2  
 If 𝑎=4,𝑏=6⇒𝑎𝑏=24 
If 𝑎=−4,𝑏=−6⇒𝑎𝑏=24 
Final Answer: 24 
GATE CSE – 2005 MCQ (2-MARKS) 
<!-- PAGE 677 -->
ENGINEERING MATHEMATICS


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐴 be a 2 × 2 matrix as given. 
 What are the eigenvalues of the matrix 𝐴13?


- **(A)** 64√2, −64√2

- **(B)** 2√2, −2√2

- **(C)** 4√2, −4√2

- **(D)** 1, −1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

To find the eigenvalues of A, we need to solve the 
characteristic equation: 
 det(A - λI) = 0 
 Where: 
 A is the given matrix, 
 λ is the eigenvalue, 
 I is the identity matrix. 
 The characteristic equation becomes: 
 The determinant of this 2x2 matrix is: 
 (1 - λ)(-1 - λ) - 1 
 Simplify this: 
 λ2 - 2 = 0 
 So: 
 λ2 = 2 
 Taking the square root: 
 λ = ±√2 
 So, the eigenvalues of A are √2 and -√2. 
 Step 2: Eigenvalues of A13 
 The eigenvalues of powers of a matrix are simply 
the eigenvalues raised to the power of 13. For A13: 
 The eigenvalue √2 becomes (√2)13 = 2(13/2). 
 The eigenvalue -√2 becomes (-√2)13 = -(213/2). 
 Simplifying 2(13/2): 
 2(13/2) = 64√2 
 Thus, the eigenvalues of A13 are: 
 64√2 and -64√2. 
 Final Answer: 
 The eigenvalues of A13 are 64√2 and -64√2. 
 So, the correct answer is 64√2, -64√2.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The product of all eigen value the matrix  
 [
1    2    3
4    5    6
7    8    9
]


- **(A)** -1

- **(B)** 0

- **(C)** 1

- **(D)** 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

We know that the product of any eigen value is 
equal to it's determinant. 
 So, determinant of the given matrix is: 
 ∣A∣=1(5∗9−8∗6)−2(9∗4−7∗6)+3(4∗8−7∗5)∣A∣=1(4
5−48)−2(36−42)+3(32−35)∣A∣=1(−3)−2(−6)+3(−3
)∣A∣=−3+12−9=0Since the determinant of the 
given matrix is zero, one of the eigenvalues must 
also be zero. Therefore, we can conclude that the 
product of the eigenvalues is zero.


</details>

---


### Q7. [GATE CSE – 2026 MCQ SET- 1 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐴 be any 𝑛 × 𝑚 matrix, where 𝑚 > 𝑛. Which of 
the following statements is/are TRUE about the 
system of linear equations 𝐴𝑥 = 0 ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In a homogeneous system 𝐴𝑥=0 with 𝑚 
variables and 𝑛 equations, the dimension of the 
solution space (nullity) is 𝑚−rank(𝐴). 
 Since rank(𝐴)≤𝑛, then nullity =𝑚−
rank(𝐴)≥𝑚−𝑛. This ensures at least 𝑚−𝑛 
linearly independent vectors in the solution set.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐿, 𝑀, and 𝑁 be non-singular matrices of order 
3 satisfying the equations 𝐿2 = 𝐿 −1 , 𝑀 = 𝐿8 and 𝑁 
= 𝐿2 . Which ONE of the following is the value of 
the determinant of (𝑀 − 𝑁)?


- **(A)** 0

- **(B)** 1

- **(C)** 2

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The given equations L2 = L−1, M = L8, and N = 
L2 lead to det(L)3 = 1, so det(L) is either 1. 
 The determinant of M−N = L8 − L2 = L2 (L6−I) is 0 
because L6 = I, making det(L6−I) = 0. 
 Therefore, det(M−N)=0.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐴 be an 𝑛 × 𝑛 matrix over the set of all real 
numbers ℝ. Let 𝐵 be a matrix obtained from 𝐴 by 
swapping two rows. Which of the following 
statements is/are TRUE?


- **(A)** The determinant of 𝐵 is the negative of the 
determinant of A

- **(B)** If 𝐴 is invertible, then 𝐵 is also invertible

- **(C)** If 𝐴 is symmetric, then 𝐵 is also symmetric

- **(D)** If the trace of 𝐴 is zero, then the trace of 𝐵 
is also zero



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B


**Step-by-Step Explanation:**

Option A. 
 Swapping two rows of a matrix multiplies its 
determinant by −1. 
Correct statement → TRUE 
 Option B. 
 Row swapping is an elementary row operation that 
does not affect invertibility. It only changes the 
determinant by a nonzero factor (−1), so: 
 Matrix is invertible iff determinant ≠ 0  
 This condition is preserved  
 Correct statement → TRUE 
(But the given justification is incomplete—should 
refer to preservation of invertibility under 
elementary operations.) 
 Option C. 
 A matrix is symmetric if A=AT 
 Swapping only rows does not preserve this condition 
in general, because symmetry requires coordinated 
changes in both rows and columns. 
 So the statement “this is not always true” is logically 
correct. 
 Correct statement → TRUE 
 Option D. 
 Trace is the sum of diagonal elements. 
Row swapping does not have a fixed effect on the 
diagonal entries—it may change or preserve them 
depending on the swap. 
 So the claim “trace will never remain same” is not 
universally true. 
 Incorrect statement → FALSE


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A be the adjacency matrix of the graph with 
vertices {1, 2, 3, 4, 5}. 
 Let λ1, λ2, λ3, λ4, and λ5 be the ﬁve eigenvalues 
of A. Note that these eigenvalues need not be 
distinct. 
The value of λ1 + λ2 + λ3 + λ4 + λ5 = _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Firstly we will convert this graph into an adjacency 
matrix and then we will look further 
<!-- PAGE 678 -->
ENGINEERING MATHEMATICS 
(
0    1    0    0    0
1    0    1    1    0
0    1    1    0    1
0    1    0    1    1
0    0    1    1    0)
 Now we know the standard definition of the graph 
the summation of the eigenvalue is equal to the 
trace of the matrix 
 λ1=0 
 λ2=0 
 λ3=1 
 λ4=1 
 λ5=0 
 ∴λ1 +λ2 +λ3 +λ4+ λ5=0+0+1+1+0=2 
 So, the summation of the diagonal is 2.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let  
 𝐴=[
1 2 3 4
4 1 2 3
3 4 1 2
2 3 4 1
]⁡𝐵=[
3 4 1 2
4 1 2 3
1 2 3 4
2 3 4 1
]. 
 Let det(A) and det(B) denote the determinants of the 
matrices A and B, respectively. 
 Which one of the options given below is TRUE?


- **(A)** det(A) = det(B)

- **(B)** det(B) = −det(A)

- **(C)** det(A) = 0

- **(D)** det(AB) = det(A) + det(B)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The elements of both the determinant A and B are 
the same just two rows are interchanged R1, R3 
 According to the property of any determinant if 
two rows (or 2 columns) of a determinant are 
interchanged the sign of the value of the 
determinant is changed. 
 Here only one time rows are changed so the 
determinant should be multiplied by (−1).


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements with respect 
to the matrices Am×n , Bn×m , Cn×n and  Dn×n  
 Statement 1: tr(AB) = tr(BA)  
 Statement 2: tr(CD) = tr(DC) 
 where tr() represents the trace of a matrix. Which 
one of the following holds?


- **(A)** Statement 1 is correct and Statement 2 is  
  wrong

- **(B)** Statement 1 is wrong and Statement 2 is  
  correct.

- **(C)** Both Statement 1 and Statement 2 are correct.

- **(D)** Both Statement 1 and Statement 2 are wrong.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

To compute the trace of AB, we focus on the sum 
of the diagonal elements of AB: 
tr(𝐴𝐵)=∑ 
𝑚
𝑖=1
(𝐴𝐵)𝑖𝑖 
 Similarly, for BA, the trace is the sum of the 
diagonal elements: 
tr(𝐵𝐴)=∑𝑖=1𝑚  (𝐵𝐴)𝑖𝑖 
 Now, there is a key property in matrix theory 
known as the cyclic property of the trace, which 
states that for matrices A and B where the 
products AB and BA are defined (i.e., the 
dimensions match), the trace is invariant under 
cyclic permutations of the matrices. 
 So, option C is the correct answer.


</details>

---


### Q13. [GATE CSE – 2024 MCQ SET- 2 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider solving the following system of 
simultaneous equations using LU decomposition.  
 x1 + x2 - 2x3 = 4 
 x1 + 3x2 - x3 = 7 
 2x1 + x2 - 5x3 = 7 
 where L and U are denoted as 
𝐿=(
𝐿11    0    0
𝐿21    𝐿22    0
𝐿31    𝐿32    𝐿33
),𝑈=(
𝑈11 𝑈12 𝑈13
0 𝑈22 𝑈23
0 0 𝑈33
) 
 Which one of the following is the correct 
combination of values for L32, U33, and x1?


- **(A)** L32 = 2, U33  = -1/2, x1 = -1

- **(B)** L32 = 2, U33  = 2, x1 = -1

- **(C)** L32 = -1/ 2, U33  = 2, x1 = 0

- **(D)** L32 = -1/2, U33  = -1/2, x1 = 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Initial matrix 
 R2 - (1) R1 → R2 
 Subtract 1 row 1 from row 2  
 U[2][1] = 1 -(1*1)/1 = 0 
 U[2]2] = 3-(1*1)/1 = 2  
 U[2][3] =-1-(1*-2)/1 = 1  
 L[2][1] = 1 
 R2 - (2)R1 → R3 
 Subtract 1 row 1 from row 3  
 U[3][1] = 2 -(2*1)/1 = 0 
 U[3]2]=1 -(2*1)/1 = -1  
 U[3][3] = -5 -(2*-2)/1 = -1  
 L[3][1] = 2 
 R3 - (-1/2) R2 → R3 
 Subtract 2 row 2 from row 2  
 U[3][2] = 1 - (-1*2)/1 = 0 
 U[3]3] = -1 - (-1*1)/2 = -1/2  
 L[3][2] = -1/2  
[
1 0 0
0 1 0
0 0 1
] [
1 0 −2
1 3 −1
2 1 −5
]
[
1 0 0
1 1 0
0 0 1
] [
1 1 −2
0 2 1
2 1 −5
]
[
1 0 0
0 1 0
0 0 1
] [
1 1 −2
0 2 1
0 −1 −1
]
[
1 0 0
1 1 0
2 −12 1] [
1 1 −2
0 2 1
0 0 −12 ]


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are the eigenvector(s) 
for the matrix given below?   
(
−9 −6 −2 −4
−8 −6 −3 −1
20 15 8 5
32 21 7 12
)


- **(A)** (
−1
)

- **(B)** (
−1
)

- **(C)** (
−1
)

- **(D)** (
−3
)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C, D


**Step-by-Step Explanation:**

Step 1: Matrix 
𝐴=(
−9 −6 −2 −4
−8 −6 −3 −1
20 15 8 5
32 21 7 12
) 
 We want to determine which of the following 
vectors are eigenvectors of 𝐴 : 
(
−1
),(
−1
),(
−1
),(
−3
) 
 Step 2: Definition 
A vector 𝑣 is an eigenvector of 𝐴 if there exists a 
scalar 𝜆 such that 
𝐴𝑣=𝜆𝑣 
 where 𝜆 is the eigenvalue corresponding to 𝑣. 
 Step 3: Check each vector 
 Vector 1: 
𝑣=(
−1
)
𝐴𝑣=(
−9(−1)+(−6)(1)+(−2)(0)+(−4)(1)
−8(−1)+(−6)(1)+(−3)(0)+(−1)(1)
20(−1)+15(1)+8(0)+5(1)
32(−1)+21(1)+7(0)+12(1)
)=(
−1
)
𝐴𝑣=1⋅𝑣
 Therefore, this vector is an eigenvector with 
eigenvalue 𝜆=1. 
 Vector 2: 
<!-- PAGE 679 -->
ENGINEERING MATHEMATICS 
𝑣=(
−1
)
𝐴𝑣=(
−9(1)+(−6)(0)+(−2)(−1)+(−4)(0)
−8(1)+(−6)(0)+(−3)(−1)+(−1)(0)
20(1)+15(0)+8(−1)+5(0)
32(1)+21(0)+7(−1)+12(0)
)=(
−7
−5
)
since Av is not a scalar multiple of v, the 
vector is not an eigenvector of the matrix. 
 Vector 3: 
𝑣=(
−1
)
𝐴𝑣=(
−9(−1)+(−6)(0)+(−2)(2)+(−4)(2)
−8(−1)+(−6)(0)+(−3)(2)+(−1)(2)
20(−1)+15(0)+8(2)+5(2)
32(−1)+21(0)+7(2)+12(2)
)=(
−3
)
𝐴𝑣=3⋅𝑣
 Therefore, this vector is an eigenvector with 
eigenvalue 𝜆=3. 
 Vector 4: 
𝑣=(
−3
)
𝐴𝑣=(
−9(0)+(−6)(1)+(−2)(−3)+(−4)(0)
−8(0)+(−6)(1)+(−3)(−3)+(−1)(0)
20(0)+15(1)+8(−3)+5(0)
32(0)+21(1)+7(−3)+12(0)
)=(
−9
)
𝐴𝑣=3⋅𝑣
 Therefore, this vector is an eigenvector with 
eigenvalue 𝜆=3.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose that P is a 4 × 5 matrix such that every 
solution of the equation Px = 0 is a scalar multiple 
of [2 5 4 3 1]T. The rank of P is _______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Since every solution of 𝑃𝑥 = 0 is a scalar 
multiple of the given vector, the null space 
is one-dimensional, so nullity(𝑃) = 1. Using 
the Rank–Nullity Theorem,  
 rank(𝑃) + nullity(𝑃) = 5, we get  
 rank(𝑃) = 4. Therefore, the rank of 𝑃is 4.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following matrix. 
 (
0    1    1    1
1    0    1    1
1    1    0    1
1    1    1    0
)  
 The largest eigenvalue of the above matrix is 
__________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Let B=A+I 
So, 𝐵=(
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
) 
All rows are identical 
 Only 1 independent row 
So, rank of (𝐵)=1 
Also, rank = Number of nonzero eigen values =1 
So, eigen values of 𝐵⇒𝜆,0,0,0 
And 𝜆+0+0+0= trace =1+1+1+ 1 
So, 𝜆=4 
𝐵→4,0,0,0 
A→B−I→3,−1,−1,−1 
Maximum eigen value =3


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A and B be two n×n matrices over real 
numbers. Let rank(M) and det(M) denote the rank 
and determinant of a matrix M, respectively. 
Consider the following statements. 
 I. rank(AB) = rank(A) × rank (B) 
II. det(AB) = det(A) × det(B) 
III. rank(A+B) ≤ rank(A) + rank(B) 
IV. det(A+B) ≤ det(A) + det(B) 
 Which of the above statements are TRUE?


- **(A)** I and II only

- **(B)** I and IV only

- **(C)** III and IV only

- **(D)** II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Option 1 justification: There is no result like 
P(AB)=P(A)+P(B)−n Option 3 Justification 
is not required as it is irrelevant of the given 
inequality. Option 4, better to give counter 
example. 
 Take A=[1 00 0],B=[0 00 1] 
Here Det(A)=Det(B)=0 but Det(A+B)=1.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let X be a square matrix. Consider the following 
two statements on X. 
   I. X is invertible. 
   II. Determinant of X is non-zero. 
 Which one of the following is TRUE?


- **(A)** I implies II; II does not imply I.

- **(B)** II implies I; I does not imply II.

- **(C)** I and II are equivalent statements.

- **(D)** I does not imply II; II does not imply I.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

For a square matrix X: 
 If X is invertible ⇒ there exists X⁻¹ 
⇒ det(X) ≠ 0 
⇒ I ⇒ II 
 If det(X) ≠ 0 ⇒ matrix is non-singular 
⇒ inverse exists 
⇒ X is invertible 
⇒ II ⇒ I 
 Therefore, both imply each other.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let U = {1, 2, …,n} and A = {(x, X)∣ x∈X, X⊆U }. 
Consider the following two statements on |A|. 
 I. |A|=n×2n−1 
   II. |𝐴|=∑ 𝑘(𝑛𝑘)𝑛𝑘=1 ⁡ 
 Which of the above statements is/are TRUE?


- **(A)** Only II

- **(B)** Only I

- **(C)** Both I nor II

- **(D)** Neither I nor II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Given the set 𝑈={1,2,…,𝑛} and the set 
𝐴={(𝑥,𝑋)∣𝑥∈𝑋,𝑋⊆𝑈}, 
 the cardinality |𝐴| equals the total number of pairs ( 
𝑥,𝑋 ) such that 𝑥 is an element of subset 𝑋. 
 For each fixed element 𝑥∈𝑈, the number of subsets 
𝑋 containing 𝑥 is 2𝑛−1 because 𝑋 can be any subset 
of the remaining 𝑛−1 elements. 
 Since there are 𝑛 such elements 𝑥, 
|𝐴|=𝑛×2𝑛−1 
 This matches the expression 
|𝐴|=∑ 
𝑛
𝑘=1
𝑘(𝑛𝑘), 
 because 
∑ 
𝑛
𝑘=1
𝑘(𝑛𝑘)=𝑛2𝑛−1. 
 Therefore, both statements I and II are true. 
<!-- PAGE 680 -->
ENGINEERING MATHEMATICS


</details>

---


### Q20. [GATE CSE – 2022 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following matrix  
𝑅=[
1 2 4 8
1 3 9 27
1 4 16 64
1 5 25 125
] 
 The absolute value of the product of Eigen value of 
R is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 12


**Step-by-Step Explanation:**

𝑅=[
1 2 4 8
1 3 9 27
1 4 16 64
1 5 25 125
] 
 Apply 𝑅2→𝑅2−𝑅1,𝑅3→𝑅3−𝑅1, 
𝑅4→𝑅4−𝑅1
[
1 2 4 8
0 1 5 19
0 2 12 56
0 2 16 98
] 
 Apply R3→R3−2R2,R4→R4−R3 
[
1 2 4 8
0 1 5 19
0 0 2 18
0 0 4 42
] 
 Apply R4→R4−2R3 
[
1 2 4 8
0 1 5 19
0 0 2 18
0 0 0 6
] 
 Product of Eigen values =1∗1∗2∗6=12


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Assume that multiplying a matrix G1 of 
dimension p × q with another matrix G2 of 
dimension q × r requires pqr scalar 
multiplications. Computing the product 
of n matrices G1G2G3…Gn can be done by 
parenthesizing in different ways. Define GiGi+1 as 
an explicitly computed pair for a given 
paranthesization if they are directly multiplied. 
For example, in the matrix multiplication 
chain G1G2G3G4G5G6 using 
parenthesization (G1(G2G3))(G4(G5G6)),G2G3 and 
G5G6,  are only explicitly computed pairs. 
 Consider a matrix multiplication chain F1F2F3F4F5, 
where matrices F1,F2,F3,F4  and F5 are of 
dimensions 2×25,25 ×3,3 ×16,16 ×1 and 1 ×1000, 
respectively.  
 In the parenthesization of F1F2F3F4F5 that 
minimizes the total number of scalar 
multiplications, the explicitly computed pairs 
is/are


- **(A)** F1 F2 and F3 F4 only

- **(B)** F2 F3 only

- **(C)** F3 F4 only

- **(D)** F1 F2 and F4 F5 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Matrix F5 is of dimension 1 × 1000, which is 
going to cause very much multiplication cost. So 
evaluating F5 at last is optimal. 
 Total number of scalar multiplications are 48 + 75 
+ 50 + 2000 = 2173 and optimal parenthesis is 
((F1(F2(F3 F4)))F5). 
 As concluded, F3, F4 are explicitly computed pairs. 
 Option (C) is Correct.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a matrix P whose only eigenvectors are 
the multiples of [14]. 
 Consider the following statements. 
(I) P does not have an inverse 
(II) P has a repeated eigenvalue 
(III) P cannot be diagonalized 
Which one of the following options is correct?


- **(A)** Only I and III are necessarily true

- **(B)** Only II is necessarily true

- **(C)** Only I and II are necessarily true

- **(D)** Only II and III are necessarily true



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Since all eigenvectors of 𝑃are multiples of a 
single vector, the eigen space is one 
dimensional. For a 2∗2 matrix, this implies 
that there is only one linearly independent 
eigenvector, so the matrix must have a 
repeated eigenvalue. Hence, statement (II) is 
true. Also, a matrix is diagonalizable only if it 
has two linearly independent eigenvectors. 
Since here there is only one, the matrix is not 
diagonalizable. Hence, statement (III) is true. 
However, having only one eigenvector does not 
imply that the matrix is non-invertible. A matrix 
can still be invertible if its eigenvalue is non-
zero. Hence, statement (I) is not necessarily 
true.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a matrix A = uvT where u = (12),𝑣=
(11). Note that VT denotes the transpose of v. The 
largest eigenvalue of A is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

u=(12),v=(11) 
 → Correction in Explanation: 
u=[12],v⊤=[1 1]
A=[12][1 1]=[1 12 2]
det(A−𝜆I)=0
⁡⇒[1−𝜆 12 2−𝜆]=0
⁡⇒(1−𝜆)(2−𝜆)−2=0
⁡⇒𝜆2−3𝜆=0
𝜆=0,3
 So maximum is 3 .


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let P [
1 1 −1
2 −3 4
3 −2 3
] and Q = [
−1 −2 −1
6 12 6
5 10 5
] be 
two matrices. Then the rank of P + Q is _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Determinant of matrix P + Q = 0. 
 so, rank ≠ 3 
 now, the 1st minor of P+Q matrix = 8 ≠ 0 
 so, rank of P + Q is 2.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If the characteristic polynomial of a 3 × 3 matrix M 
over ℝ (the set of real numbers) is λ3 – 4λ2 + aλ + 
30, a 𝜖 ℝ, and one eigenvalue of M is 2, then the 
largest among the absolute values of the eigenvalues 
of M is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

For a 3 × 3 matrix ‘M’, the characteristic equation |A 
– λI| is 
   λ3 - 4λ2 + aλ + 30 = 0 ⇾ (1) 
   One eigen value is ‘2’, so substitute it 
   23 - 4(2)2 + a(2) + 30 = 0 
   8 - 16 + 2a + 30 = 0 
   2a = -22 
   a = -11 
   Substitute in (1), 
   λ3 - 4λ2 - 11 + 30 = 0 
𝜆=2|⁡1 −4 −11 302 −4 −30 
 So, (1) can be written as 
⁡(𝜆−2)(𝜆2−2𝜆−15)=0
⁡(𝜆−2)(𝜆2−5𝜆+3𝜆−15)=0
⁡(𝜆−2)(𝜆+3)(𝜆−5)=0
𝜆=2,−3,5
Max𝜆=5


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑐1…..𝑐𝑛 be scalars, not all zero, such that 
∑  𝑛𝑖=1 𝑐𝑖𝑎𝑖=0 where 𝑎𝑖 are column vectors in 𝑅𝑛. 
 Consider the set of linear equations 
𝐴𝑥=𝑏 
 where 𝐴=[𝑎1…..𝑎𝑛] and 𝑏=∑  𝑛𝑖=1𝑎𝑖. The set of 
equations has


- **(A)** a unique solution at 𝑥=𝐽𝑛 where 𝐽𝑛  
  denotes a 𝑛-dimensional vector of all 1.

- **(B)** no solution

- **(C)** infinitely many solutions

- **(D)** finitely many solutions



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Let 𝑐1⋅𝑐𝑛 be scalars not all zero. Such that the 
following expression holds: 
∑  𝑛𝑖=1 𝑐𝑖𝑎𝑖=0 where 𝑎𝑖 is column vectors in 𝑅𝑛. 
Consider the set of linear equations. 
<!-- PAGE 681 -->
ENGINEERING MATHEMATICS 
𝐴𝑥=𝐵. where 𝐴=[𝑎1….𝑎𝑛] and 𝑏=∑  𝑛𝑖=1 𝑎𝑖 
Then, set of equations has 
 The equation ∑iciai=0 with ∃i: ci≠0 indicates that 
the column vectors of A are linearly dependent. 
Consequently, the determinant of matrix A is zero. 
This implies that the equation Ax=b either has no 
solution or infinitely many solutions. Given 
∑iai=b, it is evident that an n-dimensional vector 
of all ones satisfies the equation Ax=b. Therefore, 
Ax=b must have infinitely many solutions. The 
correct answer is (C)


</details>

---


### Q27. [GATE CSE – 2018 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A be m×n real valued square symmetric matrix 
of rank 2 with expression given below. 
∑𝑖=𝑗𝑛  ∑𝑗=1𝑛  𝐴𝑖𝑗2 =50 
 Consider the following statements  
 (i) One eigenvalue must be in [-5, 5]. 
 (ii) The eigenvalue with the largest 
magnitude must be strictly greater than 5. 
 Which of the above statements about eigenvalues of 
A is/are necessarily CORRECT?


- **(A)** Both (I) and (II)

- **(B)** (I) only

- **(C)** (II) only

- **(D)** Neither (I) nor (II)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let [𝑎 𝑏𝑐 𝑑] 
 be  a real valued, rank = 2 matrix.  
 ∑ ∑ 𝐴𝑖𝑗2 =50𝑛𝑖=1𝑛𝑖=1  
 a² + b² + c² + d² = 50 
 Square values are of order 0, 1, 4, 9, 16, 25, 36, … 
 So consider (0, 0, 5, 5) then sum of this square = 0 
+ 0 + 25 + 25 = 0 
 To get rank 2 , the 2×2 matrix can be 
𝐴=[0 55 0] 
 The eigen values are, |𝐴−𝜆𝐼|=0 (The 
characteristic equation) 
|0−𝜆 55 0−𝜆|=0
⁡−𝜆(−𝜆)−25=0
𝜆2−25=0
𝜆=±5
 So, the eigen values are within [−5,5], Statement I 
is correct. 
 The eigen values with largest magnitude must be 
strictly greater than 5: False. 
 So, only Statement I is correct.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the systems, each consisting of m linear 
equations in n variables. 
   I. If m < n, then all such systems have a solution 
   II. If m > n, then none of these systems has a 
solution 
   III. If m = n, then there exists a system which has 
a solution 
 Which one of the following is CORRECT?


- **(A)** I, II and III are true

- **(B)** Only II and III are true

- **(C)** Only III is true

- **(D)** None of them is true



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

i) If m < n  
   In AX = B, 
   If R(A) ≠ R(A|B) 
   then there will be no solution. 
 ii) False, because if R(A) = R(A|B), 
   then there will be solution possible. 
 iii) True, if R(A) = R(A|B), 
   then there exists a solution.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose that the eigenvalues of matrix A are 1, 2, 
4. The determinant of (A-1)T is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.125


**Step-by-Step Explanation:**

Determinant of a matrix is product of the eigen 
values. 
 Given that eigen values are 1, 2, 4. 
 So, its determinant is 1*2*4 = 8 
 The determinant of (A-1)T = 1/ AT = 1/|A| = 1/8 = 
0.125


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Two eigenvalues of a 3 × 3 real matrix P are (2 + 
√-1) and 3. The determinant of P is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 15


**Step-by-Step Explanation:**

If an eigen value of a matrix is a complex number, 
then there will be other eigen value, which is 
conjugate of the complex eigen value. 
   So, For the given 3×3 matrix there would be 3 eigen 
values. 
   Given eigen values are : 2+i and 3. 
   So the third eigen value should be 2-i. 
   As per the theorems, the determinant of the matrix is 
the product of the eigen values. 
   So the determinant is (2+i)*(2-i)*3 = 15.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the given matrix [
1 −1 2
0 1 0
1 2 1
], one of the 
eigenvalues is 1 . The eigenvectors corresponding 
to the eigenvalue 1 are


- **(A)** {𝑎(4,2,1)∣𝑎≠0,𝑎∈ℝ}

- **(B)** {𝑎(−4,2,1)∣𝑎≠0,𝑎∈ℝ}

- **(C)** {𝑎(√2,0,1)∣𝑎≠0,𝑎∈ℝ}

- **(D)** {𝑎(−√2,0,1)∣𝑎≠0,𝑎∈ℝ}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Given matrix: 
𝐴=[
1 −1 2
0 1 0
1 2 1
] 
 Eigenvalue 𝜆=1. 
 To find eigenvectors, solve: 
(𝐴−𝐼)𝐱=0 
 where 𝐼 is the identity matrix 
𝐴−𝐼=[
0 −1 2
0 0 0
1 2 0
] 
 Let 𝐱=(𝑥,𝑦,𝑧)𝑇. Then: 
{
0⋅𝑥−1⋅𝑦+2⋅𝑧=0
0=0
1⋅𝑥+2⋅𝑦+0⋅𝑧=0
 From the first and third equations: 
1. 𝑦+2𝑧=0⟹𝑦=2𝑧 
2. 𝑥+2𝑦=0⟹𝑥=−2𝑦=−2(2𝑧)=−4𝑧 
 Eigenvector in terms of 𝑧 : 
𝐱=(𝑥,𝑦,𝑧)=(−4𝑧,2𝑧,𝑧)=𝑧(−4,2,1) 
 with 𝑧≠0. 
 Answer: (b) {𝑎(−4,2,1)∣𝑎≠0,𝑎∈ℝ}


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The larger of the two eigenvalues of the matrix 
[4 52 1] is


- **(A)** 6

- **(B)** 7

- **(C)** 8

- **(D)** 9



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The character equation for the given matrix is 
 |4−𝜆 52 1−𝜆|=0  
 ⇒ (4 - λ) × (1 - λ) - 10 = 0 
⇒ λ2 - 5λ - 6 = 0 
⇒ (λ + 1)(λ - 6) = 0 
⇒ λ = -1, 6 
 Larger eigen value is 6 
<!-- PAGE 682 -->
ENGINEERING MATHEMATICS


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If the following system has non-trivial solution, 
 px + qy + rz = 0   qx + ry + pz = 0  rx + py + qz = 0 
 then which one of the following options is True?


- **(A)** p-q+r = 0 or p = q = -r

- **(B)** p+q-r = 0 or p = -q = r

- **(C)** p+q+r = 0 or p = q = r

- **(D)** p-q+r = 0 or p = -q = -r



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

For non-trivial solution the value of determinant 
should be zero. 
|
𝑝 𝑞 𝑟
𝑞 𝑟 𝑝
𝑟 𝑝 𝑞
|=0
R1←R1+R2+R3
|
𝑝+𝑞+𝑟 𝑝+𝑞+𝑟 𝑝+𝑞+𝑟
𝑞 𝑟 𝑝
𝑟 𝑝 𝑞
|=0
⁡(𝑝+𝑞+𝑟)[
1 1 1
𝑞 𝑟 𝑝
𝑟 𝑝 𝑞
]=0
C1←C1−C2
⁡(𝑝+𝑞+𝑟)|
0 1 1
𝑞−𝑟 𝑟 𝑝
𝑟−𝑝 𝑝 𝑞
|=0
C2←C2−C3
⁡(𝑝+𝑞+𝑟)|
0 0 1
𝑞−𝑟 𝑟−𝑝 𝑝
𝑟−𝑝 𝑝−𝑞 𝑞
|=0
⁡(𝑝+𝑞+𝑟)(𝑝𝑞−𝑟𝑝+𝑞𝑟−𝑞2−𝑟2−𝑝2+2𝑝𝑟=0
 and for other part to be zero, 
p=q=r


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following 2 × 2 matrix A where two 
elements are unknown and are marked by a and b. 
The eigenvalues of this matrix are –1 and 7. What 
are the values of a and b? 
 A = (1 4𝑏 𝑎)


- **(A)** a = 6, b = 4

- **(B)** a = 4, b = 6

- **(C)** a = 3, b = 5

- **(D)** a = 5, b = 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The sum of the diagonal elements equals the 
sum of the eigervalues: 
1+𝑎=−1+7 
1+𝑎=6⟹𝑎=5 
The determinant of the matrix equals the product 
of the eigenvalues: 
(1⋅𝑎)−(4⋅𝑏)=−1⋅7
𝑎−4𝑏=−7  
Substitute 𝑎=5 : 
5−4𝑏=−7
⁡=−12⟹𝑏=3


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the LU decomposition of the matrix 
        [2 24 9] , if the diagonal elements of U are both 1, 
then the lower diagonal entry l22 of L is _____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

A=LU
[2 24 9]=[I11 0I21 I22][1 u120 1 ]
[2 24 9]=[I11 I11u12I21 I21u12+I22]
I11=2⋯−(1)
I11u12=2
u12=2/2
u12=1⋯−(2)
I21=4⋯−(3)
I21u12+I22=9
I22=9−I21u12=9−4×1=5


</details>

---


### Q36. [GATE CSE – 2016 MCQ SET - 2(1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Perform the following operations on the matrix 
[
3 4 45
7 9 105
13 2 195
] 
 (i) Add the third row to the second row. 
 (ii) Subtract the third column from the first 
column. 
 The determinant of the resultant matrix is _______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

Let A = [
3 4 45
7 9 105
13 2 195
]  
R2→R2+R3
⁡∼[
3 4 45
20 11 300
13 2 195
]
C1→C2−C3
⁡∼[
−42 4 45
−280 11 300
−182 2 195
]=B (resultant matrix) 
 Now |B|=[
−42 4 45
280 11 300
−182 2 195
]
⁡=(−14)(15)|
3 4 3
20 11 20
13 2 13
|
⁡=0
 Method 2: Determinant is unaltered by the 
operations (i) and (ii) 
∴ Determinant of the resultant matrix = Determinant 
of the given matrix 
⁡=|
3 4 45
7 9 105
13 2 195
|
⁡=0
 (Since C1,C3 are proportional i.e., C3=15C1 )


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is TRUE 
about every n × n matrix with only real 
eigenvalues?


- **(A)** If the trace of the matrix is positive and the 
determinant of the matrix is negative, at 
least one of its eigenvalues is negative.

- **(B)** If the trace of the matrix is positive, all its 
eigenvalues are positive.

- **(C)** If the determinant of the matrix is positive, 
all its eigenvalues are positive.

- **(D)** If the product of the trace and determinant 
of the matrix is positive, all its eigenvalues 
are positive.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The trace of a matrix is the sum of the elements of 
the principal diagonal of the matrix.  
 Fact - The sum of Eigen values of a matrix is equal 
to it’s trace.  
 Fact - The product of Eigen values of a matrix is 
equal to its determinant value.  
 Since it’s given that the trace is positive and the 
determinant is negative, there must be atleast one 
negative Eigen value. In general there can be an odd 
number of negative Eigen values in this case since 
the determinant value is negative.  
<!-- PAGE 683 -->
ENGINEERING MATHEMATICS


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If the matrix A is such that 
𝐴=[
−4
][1 9 5] 
 then the determinant of A is equal to _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

𝐴=[
−4
][1 9 5]
𝐴=[
2 18 10
−4 −36 −20
7 63 35
]
 Determinant (𝐴)=[
2 18 10
−4 −36 −20
7 63 35
]
⁡=[
1 9 5
−4 −36 −20
7 63 35
]
⁡=2×(−4)[
1 9 5
1 9 5
7 63 35
]
⁡=2×(−4)[
1 9 5
1 9 5
7 9 35
]𝑅3→𝑅3−𝑅1
⁡=2×(−4)×7(0)
⁡=0


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The value of the dot product of the eigenvectors 
corresponding to any pair of different eigenvalues 
of a 4-by-4 symmetric positive definite matrix is 
____________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0


**Step-by-Step Explanation:**

The eigen vectors corresponding to different eigen 
values of a real symmetric matrix are orthogonal 
to each other. And dot product of orthogonal 
vectors is 0.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The product of the non-zero eigenvalues of the 
matrix 
(
1 0 0 0 1
0 1 1 1 0
0 1 1 1 0
0 1 1 1 0
1 0 0 0 1)
 is ______  
s


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Characteristic equation for matrix ' A ' is 
𝐴𝑋=𝜆𝑋
[
 1 0 0 0 10 1 1 1 0
0 1 1 1 0
0 1 1 1 0
1 0 0 0 1]
[
𝑥1
𝑥2
𝑥3
𝑥4
𝑥5]
=𝜆
[
𝑥1
𝑥2
𝑥3
𝑥4
𝑥5]
𝑥1+𝑥5=𝜆𝑥1
𝑥1+𝑥5=𝜆𝑥5
⁡(1)+(2)⇒2(𝑥1+𝑥5)=𝜆(𝑥1+𝑥5)
⁡⇒𝜆1=2
𝑥2+𝑥3+𝑥4=𝜆⋅𝑥2−(2)
𝑥2+𝑥3+𝑥4=𝜆⋅𝑥3−⋯−(5)
𝑥2+𝑥3+𝑥4=𝜆⋅𝑥4−⋯−⋯(6)
⁡(4)+(5)+(6)=3(𝑥2+𝑥3+𝑥4)
⁡=𝜆(𝑥2+𝑥3+𝑥4)⇒𝜆2=3
 Product =𝜆1×𝜆2=2×3=6


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following does NOT equal to 
|
1    𝑥    𝑥2
1    𝑦    𝑦2
1    𝑧    𝑧2
|?


- **(A)** ⁡|
1 𝑥(𝑥+1) 𝑥+1
1 𝑦(𝑦+1) 𝑦+1
1 𝑧(𝑧+1) 𝑧+1
|

- **(B)** |
1 𝑥+1 𝑥2+1
1 𝑦+1 𝑦2+1
1 𝑧+1 𝑧2+1
|

- **(C)** |
1 𝑥−𝑦 𝑥2−𝑦2
1 𝑦−𝑧 𝑦2−𝑧2
1 𝑧 𝑧2
|

- **(D)** |
1 𝑥+𝑦 𝑥2+𝑦2
1 𝑦+𝑧 𝑦2+𝑧2
1 𝑧 𝑧2
|



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

This is a Vandermonde determinant, and its value 
is:Option D is not reducing to the determinant 
provided in question 
 (x−y)(y−z)(z−x)(x - y)(y - z)(z - 
x)(x−y)(y−z)(z−x) 
 So any expression not algebraically equivalent to 
this value is the wrong one. 
 Now, check each option to see which matches or 
doesn’t. 
 This mixes two variables in each row — violates the 
original form. 
Cannot be transformed into Vandermonde form.


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A be a 2 × 2 matrix with elements a11 = a12 = a21 
= +1 and a22 = –1. Then the eigenvalues of the 
matrix A19 are


- **(A)** 1024 and –1024

- **(B)** 1024√2 and −1024√2

- **(C)** 4√2 and −4√2

- **(D)** 512√2 and −512√2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

𝑎11=𝑎12=𝑎21=1,𝑎22=−1 
 The 2×2 matrix =[1 11 −1] 
 Cayley Hamilton theorem: 
If matrix 𝐴 has ' 𝜆 ' as eigen value, 𝐴𝑛 has eigen 
value as 𝜆𝑛. 
Eigen value of [1 11 −1] 
⁡|A−𝜆I|=0
|⁡1 11 −1]−[𝜆 00 𝜆]=0
|1−𝜆 11 −(1+𝜆)|=0
⁡−(1−𝜆)(1+𝜆)−1=0
⁡−(1−𝜆2)−1=0
⁡−1=1−𝜆2
𝜆2=2
𝜆=±√2
 Eigenvalues of A19=(𝝀1)19,(𝝀2)19 
So,Eigenvalues of A19 are 𝟓𝟏𝟐√2 and −512√2


</details>

---


### Q43. [GATE CSE – 2015 NAT SET - 2(2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the matrix as given below. 
 [
1 2 3
0 4 7
0 0 3
] 
 Which one of the following provides the CORRECT 
values of eigenvalues of the matrix?


- **(A)** 1, 4, 3

- **(B)** 3, 7, 3

- **(C)** 7, 3, 2

- **(D)** 1, 2, 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given matrix is upper triangular matrix and its 
diagonal elements are its eigen values = 1, 4, 3


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following matrix 
𝐴=[2 3𝑥 𝑦] 
 If the eigenvalues of A are 4 and 8, then


- **(A)** x=4, y=10

- **(B)** x=5, y=8

- **(C)** x=-3, y=9

- **(D)** x=-4, y=10



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The trace is the sum of the diagonal elements of the 
matrix, and it is also the sum of the eigenvalues. 
  Thus, 2 + y = 4 + 8 
⇒ 2 + y = 12 
⇒ y = 10 
  The determinant is the product of the 
eigenvalues. 
  Thus, 2y − 3x = 8 × 4 
⇒ 2(10) - 3x = 32 
⇒ 20 - 3x = 32 
⇒ 3x = 20 - 32 = -12 
⇒ x = -4 
  Thus, x = -4 and y = 10


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The following system of equations 
 𝑥1+𝑥2+2𝑥3=1 
 𝑥1+2𝑥2+3𝑥3=2 
 𝑥1+4𝑥2+𝛼𝑥3=4 
 has a unique solution. The only possible value(s) 
for 𝛼 is/are


- **(A)** 0

- **(B)** either 0 or 1

- **(C)** one of 0,1 , or -1

- **(D)** any real number except 5.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

System: 
𝑥1+𝑥2+2𝑥3=1
𝑥1+2𝑥2+3𝑥3=2
𝑥1+4𝑥2+𝛼𝑥3=4
 For a unique solution, determinant of coefficient 
matrix ≠0. 
<!-- PAGE 684 -->
ENGINEERING MATHEMATICS 
 Matrix: 
[
1 1 2
1 2 3
1 4 𝛼
] 
 Compute determinant: 
=1|2 34 𝛼|−1|1 31 𝛼|+2|1 21 4|
=1(2𝛼−12)−1(𝛼−3)+2(4−2)
=2𝛼−12−𝛼+3+4=𝛼−5
 For unique solution: 
𝛼−5≠0⇒𝛼≠5 
 So solution is unique for all real values except 5.


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐴 be a 4×4 matrix with eigen values 
−5,−2,1,4. Which of the following is an eigen 
value of the matrix [𝐴 𝐼𝐼 𝐴], where 𝐼 is the 4×4 
identity matrix?


- **(A)** −5

- **(B)** −𝟕

- **(C)** 2

- **(D)** 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Given eigenvalues of 𝐴:−5,−2,1,4 
Matrix: 
(𝐴 𝐼𝐼 𝐴) 
 Key idea: If 𝜆 is an eigenvalue of 𝐴, then eigenvalues 
of this block matrix are: 
 𝜆+1 and 𝜆−1 
 Now compute: 
From 𝜆=−5:−4,−6 
From 𝜆=−2:−1,−3 
From 𝜆=1:2,0 
From 𝜆=4:5,3 
All eigenvalues: 
−6,−4,−3,−1,0,2,3,5 
 From options, only 2 is present. 
Answer: C. 2


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the set of (column) vectors defined by 
𝑋={𝑥∈𝑅3∣𝑥1+𝑥2+𝑥3=0, where 𝑥𝑇
=[𝑥1,𝑥2,𝑥3]𝑇} 
 Which of the following is TRUE?


- **(A)** {[1,−1,0]𝑇,[1,0,−1]𝑇} is a basis for the  
  subspace 𝑋.

- **(B)** {[1,−1,0]𝑇,[1,0,−1]𝑇} is a linearly  
 independent set, but it does not span 𝑋 and 
therefore is not a basis of 𝑋.

- **(C)** 𝑋 is not a subspace of 𝑅3.

- **(D)** None of the above



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given: 
𝑋={𝑥∈ℝ3∣𝑥1+𝑥2+𝑥3=0} 
 This is a plane through origin ⇒ it is a subspace of ℝ3. 
So option 𝐶 is false. 
Dimension of 𝑋 : 
One linear constraint ⇒ dimension =2 
Now check vectors: 
𝑣1=[1,−1,0]𝑇,𝑣2=[1,0,−1]𝑇 
 Check if they belong to 𝑋 : 
For 𝑣1:1−1+0=0✓ 
For 𝑣2:1+0−1=0✓ 
So both are in 𝑋. 
 Check linear independence: 
They are not scalar multiples ⇒ independent. 
Since: 
 2 independent vectors 
 subspace dimension =2 
 They form a basis of 𝑋. 
Answer: A


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


𝐹 is an 𝑛×𝑛 real matrix. 𝑏 is an 𝑛×1 real vector. 
Suppose there are two 𝑛×1 vectors, 𝑢 and 𝑣 such 
that, 𝑢≠𝑣 and 𝐹𝑢=𝑏,𝐹𝑣=𝑏. Which one of the 
following statements is false?


- **(A)** Determinant of 𝐹 is zero.

- **(B)** There are an infinite number of solutions to  
  𝐹𝑥=𝑏

- **(C)** There is an 𝑥≠0 such that 𝐹𝑥=0

- **(D)** F must have two identical rows



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given: 𝐹𝑢=𝑏 and 𝐹𝑣=𝑏 with 𝑢≠𝑣 
Subtract: 
𝐹(𝑢−𝑣)=0 
 Let 𝑥=𝑢−𝑣≠0, so: 
𝐹𝑥=0 
 This means a non-zero solution exists for homogeneous 
system, so columns of 𝐹 are linearly dependent. 
Now check options: 
A. Determinant =0→ True (matrix is singular) 
B. Infinite solutions for 𝐹𝑥=𝑏→ True (since at least two 
solutions exist, so infinite) 
C. There exists 𝑥≠0 such that 𝐹𝑥=0→ True (proved 
above) 
D. Must have two identical rows → False (linear 
dependence does not require identical rows) 
 Answer: D.


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the set H of all 3∗3 matrices of the type 
(
𝑎 𝑓 𝑒
0 𝑏 𝑑
0 0 𝑐
) 
 where a,b,c,d,e and 𝑓 are real numbers and abc≠
0. Under the matrix multiplication operation, the set 
H is:


- **(A)** a group

- **(B)** a monoid but not a group

- **(C)** a semi group but not a monoid

- **(D)** neither a group nor a semi group



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

We are given upper triangular matrices with 𝑎,𝑏,𝑐≠0. 
Check properties: 
Closure: Product of two upper triangular matrices is again 
upper triangular, and diagonal entries multiply, so still 
nonzero. Hence closed. 
 Associativity: Matrix multiplication is associative. 
Identity: Identity matrix (with 1,1,1 on diagonal) is in the 
set since all diagonal entries are nonzero. 
Inverse: Any upper triangular matrix with nonzero 
diagonal entries has an inverse, and that inverse is also 
upper triangular with nonzero diagonal. 
 All group properties are satisfied. 
Answer: A. a group


</details>

---


### Q50. [GATE CSE – 2010 MCQ SET - 1(2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following system of linear equations : 
2𝑥1−𝑥2+3𝑥3⁡=1
3𝑥1+2𝑥2+5𝑥3⁡=2
−𝑥1+4𝑥2+𝑥3⁡=3
 The system of equations has


- **(A)** no solution

- **(B)** a unique solution

- **(C)** more than one but a finite number of

- **(D)** Solutions an infinite number of solutions



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

We check how many independent equations are there. 
Write coefficient matrix: 
[
2 −1 3
3 2 5
−1 4 1
] 
 Now check determinant: 
=2|2 54 1|+1|3 5−1 1|+3|3 2−1 4|
=2(2⋅1−5⋅4)+1(3⋅1−5(−1))+3(3⋅4−2(−1))
=2(2−20)+1(3+5)+3(12+2)
=2(−18)+8+3(14)=−36+8+42=14≠0
 Since determinant ≠0, matrix is invertible. 
So system has exactly one solution. 
Answer: B. a unique solution


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What are the eigenvalues of the following 2×2 matrix? 
(2 −1−4 5 )


- **(A)** -1 and 1

- **(B)** 1 and 6

- **(C)** 2 and 5

- **(D)** 4 and -1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Matrix: 
det(2−𝜆 −1−4 5−𝜆)=0 
2. Compute the Determinant 
(2−𝜆)(5−𝜆)−(−1)(−4)=0 
(10−2𝜆−5𝜆+𝜆2)−4=0 
𝜆2−7𝜆+6=0 
𝜆=1 and 𝜆=6


</details>

---

