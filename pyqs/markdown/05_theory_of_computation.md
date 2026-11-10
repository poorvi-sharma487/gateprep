# Theory of Computation


> **Subject:** Theory of Computation  

> **Pages in Book:** 195–251  

> **Total Modules:** 3


## Topics in this Subject


## Topic 1: THEORY OF COMPUTATION


### Q1. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let M be a nondeterministic finite automaton (NFA) 
with 6 states over a finite alphabet. Which of the 
following options CANNOT be the number of states in 
the minimal deterministic finite automaton (DFA) that is 
equivalent to M?


- **(A)** . 32

- **(B)** . 65

- **(C)** . 1

- **(D)** .128



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B,D


**Step-by-Step Explanation:**

n = 6 
Maximum possible DFA states = 2⁶ = 64 
B,D not allowed.


</details>

---


### Q2. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let L1 and L2 be two languages over a finite alphabet, 
such that L1∩L2 and L2 are regular languages. Which of 
the following statements is/are always true?


- **(A)** . L1 is regular

- **(B)** . L1∪L2 is regular

- **(C)** . 𝐿2  is context-free

- **(D)** . L1 is context-free



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ; C


**Step-by-Step Explanation:**

(A) L1 is regular — NOT always true 
Take alphabet Σ = {a, b} 
Let 
  L2 = ∅ (regular) 
  L1 = { aⁿbⁿ | n ≥ 0 } (not regular) 
Then 
 L1 ∩ L2 = ∅ (regular) 
But L1 itself is not regular. 
So (A) is false. 
(B) L1 ∪ L2 is regular — NOT always true 
Using the same example: 
L2 = ∅ (regular) 
 L1 = { aⁿbⁿ | n ≥ 0 } (not regular) 
Then 
 L1 ∪ L2 = L1 
Which is not regular. 
So (B) is false. 
(C) L2 is context-free — ALWAYS true 
Fact: Every regular language is context-free. 
Example: 
  L2 = a* 
it is regular, and also context-free (since regular ⊆ 
CFL). 
so (C) is true. 
(D) L1 is context-free — NOT always true 
<!-- PAGE 213 -->
THEORY OF COMPUTATION 
Take 
L2 = ∅ (regular) 
  L1 = { aⁿbⁿcⁿ | n ≥ 0 } (not context-free) 
Then 
 L1 ∩ L2 = ∅ (regular) 
But L1 is not context-free. 
So (D) is false.


</details>

---


### Q3. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following two finite automata D1  and 
D2  (as shown in the figure). 
Which of the following statements is/are true?


- **(A)** . L(D1)=L(D2)

- **(B)** . L(D1) is a proper subset of L(D2)

- **(C)** . L(D1)∩L(D2)={ε}

- **(D)** . (L(D1)∪L(D2))* consists of all strings in   {0,1}* 
whose length is divisible by 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C,D


**Step-by-Step Explanation:**

A: 101 accepted by D1 but not by D2. 
B: wrong , working of both is completely different 
C: true. 
D.) D1 accept length divisible by 3  : 
000,001,010,101 
 D2 accept length divisible by 3  :  011,100,110,111 
Combinedly they will cover all length is divisible by 3 
cases.


</details>

---


### Q4. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


A regular language 𝐿 is accepted by a non -deterministic 
finite automaton (NFA) with 𝑛 states. Which of the 
following statement(s) is/are FALSE?


- **(A)** . 𝐿 may have an accepting NFA with < 𝑛 states.

- **(B)** . 𝐿 may have an accepting DFA with < 𝑛 states.

- **(C)** . There exists a DFA with ≤ 2𝑛 states that accepts 𝐿.

- **(D)** . Every DFA that accepts 𝐿 has > 2𝑛 states.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation 
NFA → DFA conversion:  
When we convert an NFA to an equivalent DFA,  
the DFA can have  up to 2ⁿ states , because each  
DFA state represents a  subset of NFA states.  
So, saying “DFA has at most n states” is  wrong. 
Complement of L:  
1. To take the  complement, we need a  complete 
DFA (because we just flip fin al and non-final s
tates). 
2. For an NFA, complementing directly    is  not 
possible — you must convert it to DFA first.  
So saying “complement can be accepted by an 
NFA with at most n states”    is  wrong. 
3. Regular expression:  
Every NFA represents a  regular language, an
d every regular language can be written as a  re
gular expression  — that is true. 
4. DFA with 2ⁿ states:  
The subset construction guarantees that a DFA 
with ≤ 2ⁿ states always exists — that is true.


</details>

---


### Q5. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let 𝑆 be the set of all ternary strings defined over the 
alphabet {𝑎, 𝑏, 𝑐}. Consider all strings in 𝑆 that contain at 
least one occurrence of two consecutive symbols, that is, 
“aa”, “bb” or “cc”. The number of such strings of length 5 
that are possible is _______. (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 195


**Step-by-Step Explanation:**

To solve this problem, we need to count the num
ber of ternary strings of length 5  over the alphabet {a,b
,c} that contain at least one occurrence of two consecu
tive  symbols (i.e., "aa", "bb", or "cc").  
We will use the  complementary  counting approach: 
1. Total number of ternary strings of length 5 
Each position in the string can be filled with a, b, 
or c. 
          Total strings = 3 5 = 243. 
2. Number of ternary strings of length 5 with no 
two consecutive symbols:  
For the first position, there are 3 choice (a, b, o
r c). 
For each subsequent position, there are 2 choic
es (any symbol except the one   used in the pre
vious position).  
Total strings with no two consecutive    symbo
ls = 3 × 2 4 = 3 × 16 = 48.  
3. Number of ternary strings of length 5 with at l
east one occurrence of two consecutive symbol
s: 
This is the complement of the above case.  
Total strings with at least one  occurrence of tw
o consecutive symbols = Total strings - Strings 
with no two consecutive symbols.  
 Total = 243 − 48 = 195.  
The number of such strings of length 5 is: 195


</details>

---


### Q6. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following two languages over the alphabet {𝑎, 
𝑏}: 
𝐿1 = { 𝛼𝛽𝛼 | 𝛼 ∈ {𝑎, 𝑏}+ AND 𝛽 ∈ {𝑎, 𝑏}+ } 
𝐿2 = { 𝛼𝛽𝛼 | 𝛼 ∈ {𝑎}+ AND 𝛽 ∈ {𝑎, 𝑏}+ } 
Which ONE of the following statements is CORRECT?


- **(A)** . Both 𝐿1 and 𝐿2 are regular languages.

- **(B)** . 𝐿1 is a regular language but 𝐿2 is not a regular 
language.

- **(C)** . 𝐿1 is not a regular language but 𝐿2 is a regular            
language.

- **(D)** . Neither 𝐿1 nor 𝐿2 is a regular language.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

L1 = { αβα | α ∈ {a, b}+ AND β ∈ {a, b}+ } 
Here, α appears twice in the string, meaning the language 
requires matching substrings.This kind of pattern cannot be 
expressed using a finite -state automaton (DFA/NFA), as 
regular languages cannot enforce co nstraints on repeated 
substrings.  
L1 is NOT regular. 
L2 = { αβα | α ∈ {a}+ AND β ∈ {a, b}+ } 
For this Language we can create regular expression 
a+.(a,b)+.a+ that's mean starting and ending with a. 
L2 is  regular


</details>

---


### Q7. [GATE CSE – 2025 SET- 1 NAT (1-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following deterministic finite automaton 
(DFA) defined over the alphabet, Σ = {𝑎, 𝑏}. Identify which 
of the following language(s) is/are accepted by the given 
DFA.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Option 1: The set of all strings containing an even number 
of 𝑏’s. 
False. The DFA accepts "babb" string which contains odd 
number of b's. 
<!-- PAGE 214 -->
THEORY OF COMPUTATION 
Option2: The set of all strings containing the pattern 
𝑏𝑎𝑏. 
False. The DFA does not accept "baba" string which 
contain "bab" pattern. 
Option3: The set of all strings ending with the pattern 
𝑏𝑎𝑏. 
True. This option is true, DFA accepts all the strings 
ending with "bab" such as "babab", "bbab", "abab" etc. 
Option4: The set of all strings not containing the pattern 
𝑎𝑏𝑎. 
False. "bbab" does not contain "aba" pattern but DFA 
still accepts it.


</details>

---


### Q8. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider a finite state machine (FSM) with one input 𝑋 
and one output 𝑓, represented by the given state transition 
table. The minimum number of states required to realize 
this FSM is ________. (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -5


**Step-by-Step Explanation:**

1. {A, C} (Represented as one state) 
2. {B, E} (Represented as one state) 
3. {D, H} (Represented as one state) 
4. {F} (Unique output) 
5. {G} (Unique output) 
The reduced states are 5.


</details>

---


### Q9. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the two lists List I and List II given below: 
List 1 List 2 
(i) Context free languages (a) Closed under union 
(ii) Recursive languages (b) Not closed under 
complementation 
(iii) Regular languages (c) Closed under 
intersection 
For matching of items in List I with those in List II, 
which of the following option(s) is/are CORRECT?


- **(A)** (i) – (a), (ii) – (b), and (iii) – (c)

- **(B)** (i) – (b), (ii) – (a), and (iii) – (c)

- **(C)** (i) –  (b), (ii) – (c),  and (iii) – (a)

- **(D)** (i) – (a), (ii) – (c), and (iii) – (b)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C)


**Step-by-Step Explanation:**

Context Free Languages (i):   
(b) Not closed under complementation: Context -free 
languages (CFLs) are not closed under 
complementation, meaning the complement of a 
context-free language might not be context-free. 
Recursive Languages (ii): 
(a) Closed under union: Recursive languages (also 
called decidable languages) are closed under union, 
meaning the union of two recursive languages is also 
recursive. 
Regular Languages (iii): 
(c) Closed under intersection: Regular languag es are 
closed under intersection, meaning the intersection of 
two regular languages is always regular. 
(B): (i) → (b), (ii) → (a), and (iii) → (c) is correct. 
(C): (i) → (b), (ii) → (c), and (iii) → (a) is correct.


</details>

---


### Q10. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let Σ = {𝑎, 𝑏, 𝑐}. For 𝑥 ∈ Σ* , and 𝛼 ∈ Σ, let #𝛼(𝑥) denote 
the number of occurrences of 𝛼 in 𝑥. Which one or more of 
the following option(s) define(s) regular language(s)?


- **(A)** {𝑎𝑚𝑏𝑛 | 𝑚, 𝑛 ≥ 0}

- **(B)** {𝑎, 𝑏}* ∩ {𝑎𝑚𝑏𝑛 𝑐m - n | 𝑚 ≥ 𝑛 ≥ 0}

- **(C)** {𝑤 | 𝑤 ∈ {𝑎, 𝑏}* , #𝑎 (𝑤) ≡ 2 (mod 7), and # 𝑏 (𝑤) ≡ 3 
(mod 9)}

- **(D)** {𝑤 | 𝑤 ∈ {𝑎, 𝑏}* , #𝑎 (𝑤) ≡ 2 (mod 7), and #a (𝑤) ≡ #b(w)}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,C)


**Step-by-Step Explanation:**

{am bn | m, n ≥ 0}  is a regular language because it 
describes strings where there are any number of a's 
followed by any number of b's. This can be represented 
by the regular expression a*b*, which is regular. 
{w | w ∈ {a, b}*, #a(w) ≡ 2 (mod 7), and #b(w) ≡ 3 (mod 
9)} defines a language where the number of a's is 
congruent to 2 mod 7 and the number of b's is congruent 
to 3 mod 9. Regular languages can count occurrences of 
symbols with fixed remainders modulo some number, so 
this is a regular language. It can be represented using 
regular expressions with modular arithmetic for the 
counts of a and b.


</details>

---


### Q11. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let Σ = {1,2,3,4}. For 𝑥 ∈ Σ* , let 𝑝𝑟𝑜𝑑(𝑥) be the product of 
symbols in 𝑥 modulo 7. We take 𝑝𝑟𝑜𝑑(𝜖) =1,where 𝜖 is the 
null string . 
For example, 𝑝𝑟𝑜𝑑(124) = (1 × 2 × 4) mod 7 = 1. 
Define 𝐿 = {𝑥 ∈ Σ* | 𝑝𝑟𝑜𝑑(𝑥) = 2}. 
The number of states in a minimum state DFA for 𝐿 is 
___________. (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 6


**Step-by-Step Explanation:**

The DFA needs to track the product of input symbols 
modulo 7, with possible remainders being 0, 1, 2, 3, 4, 5, 
6. Therefore, the DFA requires 7 states. By this prod (x) 
we can’t generate remainder 0 , so we need 6 states to 
track the product modulo 7. 
Thus, the number of states in the minimum DFA for L is


</details>

---


### Q12. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the 5-state DFA 𝑀 accepting the language 𝐿(𝑀) ⊂ 
(0 + 1) ∗ shown below. For any string 𝑤 ∈ (0 + 1) ∗ let 𝑛0(𝑤) 
be the number of 0 ′ 𝑠 in 𝑤 and 𝑛1(𝑤) be the number of 1′𝑠 
in 𝑤. 
Which of the following statements is/are FALSE?


- **(A)** States 2 and 4 are distinguishable in 𝑀

- **(B)** States 3 and 4 are distinguishable in 𝑀

- **(C)** States 2 and 5 are distinguishable in 𝑀

- **(D)** Any string 𝑤 with 𝑛0 (𝑤) = 𝑛1(𝑤) is in 𝐿(𝑀).



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C)


**Step-by-Step Explanation:**

When we try to minimize the DFA give n we can notice 
that states 3 and 4 have same inward and outward 
transitions and are indistinguishable, same for the states 
2, 5.  
States 2 and 4 are distinguishable, because they have 
different transitions from state 1.  
In the final minimised DFA, we can clearly see that there 
are three states 1 , 2 , 4. For any given string with equal 
number of 1s and 0s, it will be accepted by the DFA:


</details>

---


### Q13. [GATE CSE – 2025 SET - 1 NAT (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let 𝐿1, 𝐿2 be two regular languages and 𝐿3 a language 
which is not regular. Which of the following statements 
is/are always TRUE?


- **(A)** . 𝐿1 = 𝐿2 if and only if 𝐿1 ∩ 𝐿2 = 𝜙

- **(B)** . 𝐿1 ∪ 𝐿3 is not regular

- **(C)** . 𝐿3 is not regular

- **(D)** . 𝐿1 ∪ 𝐿2 is regular



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C,D


**Step-by-Step Explanation:**

OptionA- False 
             Take L1 = {a} and L2 = {an | n>=0} , then L2`= 
Φ  
<!-- PAGE 215 -->
THEORY OF COMPUTATION 
Now, L1∩L2 =Φ. But L1≠L2 
OptionB- False 
L1=(a+b)∗ 
L3 be any non-regular language,    e.g., {an bn ∣n≥0}. 
L1∪L3=(a+b)∗,regular. 
Thus, L1∪L3 can be regular even if L3 is regular. 
 Option C - True - Regular Languages are closed      
under Complementation. 
Option D - True - Regular Languages are closed    
under Union .


</details>

---


### Q14. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following two regular expressions over the 
alphabet {0,1}: 
𝑟 = 0* + 1* 
𝑠 = 01* + 10* 
The total number of strings of length less than or equal to 
5, which are neither in 𝑟 nor in 𝑠, is _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 44


**Step-by-Step Explanation:**

For strings of length 2 : 
     {00, 11} are in r (all zeros or all ones). 
{01, 10} are in s (start with 0 followed by 1 or start 
with 1 followed by 0). 
For strings of length 3 : 
{000, 111} are in r (all zeros or all ones). 
{011, 100} are in s (start with 0 followed by ones or 
start with 1 followed by zeros). 
For strings of length 4 : 
{0000, 1111} are in r (all zeros or all ones). 
{0111, 1000} are in s (start with 0 followed by ones or 
start with 1 followed by zeros). 
For strings of length 5 : 
{00000, 11111} are in r (all zeros or all ones). 
{01111, 10000} are in s (start with 0 followed by ones 
or start with 1 followed by zeros). 
Next, we calculate the number of s trings not in r and 
not in s for each string length and sum them. 
= (2² − 4) + (2³ − 4) + (2⁴ − 4) + (2⁵ − 4) 
= (4 − 4) + (8 − 4) + (16 − 4) + (32 − 4) 
= 0 + 4 + 12 + 28 = 44 
Thus, the total number of strings of length less than or 
equal to 5, which are neither in r nor in s, is 44.


</details>

---


### Q15. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which one of the following regular expressions is 
equivalent to the language accepted by the DFA given 
below?


- **(A)** . 0∗1(0 + 10∗1)∗

- **(B)** . 0∗ (10∗11) ∗ 0 ∗

- **(C)** . 0 ∗1(010∗1)∗ 0∗

- **(D)** . 0(1 + 0∗10∗1)∗0 ∗



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

State Elimination Method: 
The easiest way through which we can reach to final 
state is through 1, which is not mentioned in options B 
and D. Hence, these two options are excluded. 
Now, as we can see 111 is also a correct language 
according to given DFA, which is not matched by 
option C. Hence, it is also a wrong option. 
Therefore, the correct option is A.


</details>

---


### Q16. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let 𝑀 be the 5-state NFA with 𝜖-transitions shown in the 
diagram below     
Which one of the following regular expressions 
represents the language accepted by 𝑀 ?


- **(A)** . (00)∗ + 1(11)∗

- **(B)** . 0∗ + (1 + 0(00)∗ )(11)∗

- **(C)** . (00)∗ + (1 + (00)∗ )(11)∗

- **(D)** . 0+ + 1(11)∗ + 0(11)∗



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Option A : 
Regular Expression: (00)* + 1(11)* 
Counter example: The string 011 is not generated by this 
regular expression. 
Option C : 
Regular Expression : (00)* + (1 + (00)*)(11)* 
Counter example : The string 000 is not generated by this 
regular expression. 
Option D : 
Regular Expression : 0+ + 1(11)* + 0(11)* 
Counter example : The empty  string is not generated by 
this regular expression.


</details>

---


### Q17. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let 𝐿1 be the language represented by the regular expression 
𝑏 ∗𝑎𝑏 ∗ (𝑎𝑏 ∗𝑎𝑏 ∗ ) ∗ and 𝐿2 = { 𝑤 ∈ (𝑎 + 𝑏) ∗ | |𝑤| ≤ 4}, where 
|𝑤| denotes the length of string 𝑤. The number of strings in 
𝐿2 which are also in 𝐿1 is ___________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 15


**Step-by-Step Explanation:**

L₁ is exactly the strings with an odd number of a’s (at 
least one). 
For length n ≥ 1, half of the 2ⁿ binary strings have an odd 
number of a’s, i.e. 2n-1 
So for lengths 1 to 4: 2 0 + 2¹ + 2² + 2³ = 1 + 2 + 4 + 8 = 
15.


</details>

---


### Q18. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following definition of a lexical token id for an 
identifier in a programming language, using extended 
regular expressions: 
letter→[A-Za-z] 
digit→[0-9] 
id→letter(letter|digit)∗ 
Which one of the following Non-deterministic 
Finite-state Automata with - transitions accepts the 
set of valid identifiers? (A double -circle denotes a 
final state)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

The regular expression is given as letter(letter+digit)*. 
Option a is wrong as it also accepts empty string. 
Option b is wrong as it will not accepts the strings like 
(letter.digit.letter). 
Option d is w rong as it will not accepts strings like 
(letter.letter),(letter.digit) etc.


</details>

---


### Q19. [GATE CSE – 2024 SET - 1 MCQ (1-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the language L over the alphabet {0, 1}, given 
below: L = {w ∈ {0, 1}* | w does not contain three or more 
consecutive 1’s}. The minimum number of states in a 
Deterministic Finite-State Automaton (DFA) for L is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 4


**Step-by-Step Explanation:**

. 
<!-- PAGE 216 -->
THEORY OF COMPUTATION


</details>

---


### Q20. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the Deterministic Finite-state Automaton (DFA) 
A shown below. The DFA runs on the alphabet {0, 1}, 
and has the set of states {s, p, q, r}, with s being the start 
state and p being the only final state. 
Which one of the following regular expressions 
correctly describes the language accepted by A?


- **(A)** 1(0*11)*

- **(B)** 0(0 + 1)*

- **(C)** 1(0 + 11)*

- **(D)** 1(110*)*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

1(0*11)*: it is wrong because it will not generate 
strings like 10 
0(0 + 1)*: it is wrong because it will generate 0 which 
is rejected in the given DFA. 
1(110*)*: it is wrong because it will not generate 
strings like 10 , 100. 
The most generic regular expression will be 1(0+11)*


</details>

---


### Q21. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which one of the following regular expression correctly 
represents the language of the finite automata given 
below?


- **(A)** ab*bab*+ba*aba*

- **(B)** (ab*b)*ab* + (ba*a)* ba*

- **(C)** (ab*b+ba*a)(a*+b*)

- **(D)** (ba*a+ab*b)*(ab*+ba*)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

The given automata accept the strings like, {a, b, ab, 
ba, abb, aba, baa, bab, abbb, abab, baba, baaa, …} 
1. ab*bab*+ba*aba* 
False, The strings like {'a', 'b' } accepted by given 
automata but the given regular expression can not 
accept those strings. Hence it is false. 
2. (ab*b)*ab* + (ba*a)* ba* 
False, The string "abbbbaa" is accepted by given 
automata but the given regular expression can not 
accept the string. Hence it is false. 
3. (ab*b+ba*a)(a*+b*) 
False, The given regular expression accepts the empty 
string like epsilon {Ɛ} but the given automata can not 
accept that empty string. Hence it is false. 
4. (ba*a+ab*b)*(ab*+ba*) 
True, The given regular expression accepts the strings 
{a, b, ab, ba, abb, aba, baa, bab, abbb, abab, baba, baaa, 
…} which are accepted by given automata hence it is 
true.


</details>

---


### Q22. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following language.  
L = {x ϵ {a,b}* | number of a’s in x is divisible by 2 but 
not divisible by 3}. The minimum number of states in a 
DFA that accepts L is _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 6


**Step-by-Step Explanation:**

DFA 1 : No. of a’s divisible by 2. 
 DFA 2: No. of a’s not divisible by 3. 
Using product automata


</details>

---


### Q23. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which one of the following regular expressions represents 
the set of all binary strings with an odd number of 1’s?


- **(A)** 10*(0*10*10*)*

- **(B)** ((0 + 1)*1(0 + 1)*1)*10*

- **(C)** (0*10*10*)*10*

- **(D)** (0*10*10*)*0*1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** MTA


**Step-by-Step Explanation:**

* Wrong Question marks were given to all. 
Option :10*(0*10*10*)* 
It will generate string only starting with ‘1’. 
Option 2: ((0 + 1)*1(0 + 1)*1)*10* 
It can generate strings with even number of 1’s also. 
Option 3: (0*10*10*)*10* 
It will generate binary strings with odd number of 1’s and 
doesn’t generate the other strings.but all strings having odd 
number of 1’s is not possible. 
Ex. “01”. 
Option 4: (0*10*10*)*0*1 
It will generate string only ending with ‘1’.


</details>

---


### Q24. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements. 
I. If L1 U L2 is regular, then both L1 and L2 must be 
regular. 
II. The class of regular languages is closed under infinite 
union. 
Which of the above statements is/are TRUE?


- **(A)** Both I and II

- **(B)** II only

- **(C)** Neither I nor II

- **(D)** I only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

If L₁ ∪ L₂ is regular, then neither L₁ nor L₂ needs necessarily 
be regular. 
 Assume L1 = {aⁿbⁿ, n ≥ 0} over the alphabet {a, b} and L2 
be the complement of L1. 
Neither L1 nor L2 is regular (both are DCFL) but L1 ∪ L2 = 
{aⁿbⁿ} ∪ {aⁿbⁿ}ᶜ = (a + b)* is regular. 
Statement II: FALSE. The infinite Union of regular 
languages is not regular. 
Example: 
Given alphabet {a, b}. 
L1 = {ε} 
L2 = {ab} 
L3 = {aabb} 
L4 = {aaabbb} 
: 
: 
L = L1 ∪ L2 ∪ L3 ∪ L4  
Each of the above are regular but their infinite Union 
gives L1 = {aⁿbⁿ, n ≥ 0} which is not regular but DCFL. 
<!-- PAGE 217 -->
THEORY OF COMPUTATION


</details>

---


### Q25. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


If L is a regular language over Σ = {a,b}, which one of the 
following languages is NOT regular?


- **(A)** Suffix (L) = {y ϵ Σ* such that xy ϵ L}

- **(B)** {wwR | w ϵ L}

- **(C)** Prefix (L) = {x ϵ Σ*| ∃y ϵ Σ* such that xy ϵ L}

- **(D)** L.L R = {xy | x ϵ L, yR ϵ L}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

* all options are wrong. 
   take 𝑤 ∈ {𝑎}∗, then 𝑤𝑤𝑅is regular.


</details>

---


### Q26. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


For Σ = {a,b}, let us consider the regular language L = {x|x 
= a 2+3k or x = b 10+12k , k ≥ 0}. Which one of the following 
can be a pumping length (the constant guaranteed by the 
pumping lemma) for L?


- **(A)** 3

- **(B)** 9

- **(C)** 5

- **(D)** 24



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

According to Pumping lemma, there must be repeation 
(DFA then it repeats some states, and regular grammar 
repeats its nonterminal in derivation.) for all 
acceptable stings. 
Therefore, minimum Pumping Length should be 1 2. 
12 symbols can be taken as first 
twelve b’s i.e.b12.  When you repeat  b12 Zero or more 
times, the resulted string still belongs to the language., 
pumping length for given language should greater than 
12, which is 24. 
27. The set is the set of all bijections from to . In 
mathematics, this is the Symmetric Group . 
 The elements of S5 are permutations. 
 The operation   is function composition 
(permutation multiplication). 
 The identity element is id. 
 The size of the group is |S5|=5!=120. 
The language consists of all sequences of permutations 
whose product (composition) results in the identity 
permutation. 
According to the Myhill-Nerode Theorem, the 
number of states in a minimal DFA is equal to the 
number of equivalence classes of the prefix relation 
≡ₗ. 
Two strings 𝑥 and 𝑦 are equivalent (𝑥 ≡𝑙 𝑦)if for 
every string 𝑧 ∈ Σ∗, 
𝑥𝑧 ∈ 𝐿   ⟺   𝑦𝑧 ∈ 𝐿. 
• 𝑥𝑧 ∈ 𝐿 ⇒ 𝜋(𝑥) ∘ 𝜋(𝑧) = 𝑖𝑑 ⇒ 𝜋(𝑧) = (𝜋(𝑥))−1 
• 𝑦𝑧 ∈ 𝐿 ⇒ 𝜋(𝑦) ∘ 𝜋(𝑧) = 𝑖𝑑 ⇒ 𝜋(𝑧) = (𝜋(𝑦))−1 
Therefore, 𝑥 ≡𝑙 𝑦if and only if 𝜋(𝑥) = 𝜋(𝑦). 
Each distinct element in the group 𝑆5represents a 
unique state in the minimal DFA because each 
element 𝑔 ∈ 𝑆5requires a different suffix 
𝑧(specifically 𝑧 = 𝑔−1) to reach the identity. 
Since every possible permutation in can be reached by 
composing elements from the alphabet (which 
contains all permutations including th e generators), 
every element of the group corresponds to exactly one 
state in the minimal DFA. 
Number of states = Order of the group  
Number of states =  5! 
Number of states =  120


</details>

---


### Q27. [GATE CSE – 2023  MCQ (1-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let    Σ      be the set of all bijections 
from {1, … ,5} to {1, … ,5}, where  𝑖𝑑 denotes the identity 
function, i.e.  𝑖𝑑(𝑗) = 𝑗, ∀𝑗. Let  ∘ denote composition on 
functions. For a string  𝑥 = 𝑥1𝑥2 … 𝑥𝑛 ∈ Σ𝑛, 𝑛 ≥ 0, 
let 𝜋(𝑥) = 𝑥1 ∘ 𝑥2 ∘ ⋯ ∘ 𝑥𝑛. Consider the language 𝐿 =
{𝑥 ∈ Σ∗ ∣ 𝜋(𝑥) = 𝑖𝑑}. The minimum number of states in 
any DFA accepting 𝐿 is _______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 120


</details>

---


### Q28. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Given a language L, define Li as follows : 
L0 = {ϵ} 
Li = L i-1 . L for all i > 0 The order of a language L is 
defined as the smallest k such that Lk = Lk+1 . Consider the 
language L1 (over alphabet 0) accepted by the following 
automation. 
The order of L1 is_______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 2


**Step-by-Step Explanation:**

The regular expression for L₁ : ε + 0(00)* 
Now L₁⁰ = ε and L₁¹ = ε + 0(00)* = 
ε + 0(00)* = L₁. 
Now L₂ = L₁ · L₁¹ 
L₂ = L₁ · L₁   
= (ε + 0(00)) (ε + 0(00)) 
= ε + 0(00)* + 0(00)* + 0(00)(0(00)) 
= (ε + 0(00)) (0(00)) = 0* 
As it will contain epsilon + odd number of zero + even 
number of zero, hence it is 0* 
Now L₃ = L₂ · L₁ 
L₃ = 0* (ε + 0(00)) = 0 + 0*(0(00)) = 0* 
Hence L₃ = L₂ = L₁* 
Or L₁² = L₁³ = L₁*, 
hence the smallest k value is 2.


</details>

---


### Q29. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let N be an NFA with n states. Let k be the number of 
states of a minimal DFA which is equivalent to N. Which 
one of the following is necessarily true?


- **(A)** k ≥ 2n

- **(B)** k ≥ n

- **(C)** k ≤ n2

- **(D)** k ≤ 2n



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

The number of states in DFA is always less than equal to 
2(no. of states in NFA ) . In other words, if number of states  in 
NFA is “n” then the corresponding DFA have at most 2 n 
states. Hence k ≤ 2n is necessarily true.


</details>

---


### Q30. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The minimum possible number of states of a deterministic 
finite automaton  that accepts the regular language  
L = {w 1aw2 | w 1, w 2 ∈ {a,b}*, |w 1| = 2,|w 2| ≥ 3} is 
_________


- **(A)** 8

- **(B)** 9

- **(C)** 10

- **(D)** 11



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Answer is 8 states included one trap state (8) and final 
state (7).


</details>

---


### Q31. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let δ denote the transition function and  
𝛿̂ denote the extended transition function of the  
ϵ-NFA whose transition table is given below: 
δ ε a b 
→ q0 {q2} {q1} {q0} 
q1 {q2} {q2} {q3} 
q2 {q0} ∅ ∅ 
q3 ∅ ∅ {q2} 
Then 𝛿̂ (𝑞2 , 𝑎𝑏𝑎) is:


- **(A)** ∅

- **(B)** {q0,q1,q3}

- **(C)** {q0,q1,q2}

- **(D)** {q0,q2,q3}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Here, δ̂ (q₂, aba) 
When input a is applied on q₂ it will move to q₀, q₁ as 
there is null transition so it will also get to q₂. 
Similarly, states after input b ⇒ {q₀, q₂, q₃} 
States after input a = {q₀, q₁, q₂} 
So, final answer is {q₀, q₁, q₂} 
<!-- PAGE 218 -->
THEORY OF COMPUTATION


</details>

---


### Q32. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


If G is a grammar with productions S → SaS | aSb | bSa | 
SS | ϵ where S is the start variable, then which one of the 
following strings is not generated by G?


- **(A)** abab

- **(B)** aaab

- **(C)** abbaa

- **(D)** babba



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

The following grammar can yield the  strings "abab," 
"aaab," and "abbaa." 
However, the given grammar is unable to construct the 
string "babba." The rationale for this is that whereas 
production S-> SaS can generate any number of a's, we 
only need to generate one "b" because the producti on 
that generates "b" also generates "a" (S ->aSb and S -> 
bSa). 
o in string “babba” the first and last “ba” can be 
generated by S→ bSa, but we can’t generate a single “b” 
in middle. In other words we can say that any string in 
which number of “b’s” is more  than number of “a’s” 
can’t be generated by the given grammar.


</details>

---


### Q33. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the language L given by the regular 
expression (a+b)*b(a+b) over the alphabet {a,b}.  
The smallest number of states needed in deterministic finite-
state automaton (DFA) accepting L is _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 4


**Step-by-Step Explanation:**

The NFA for regular expression: (a+b)*b(a+b)


</details>

---


### Q34. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following languages is generated by the given 
grammar? 
S→ aS|bS|ε


- **(A)** {anbm | n, m >= 0}

- **(B)** {w ϵ {a,b}*| w has equal number of a’s and b’s}

- **(C)** {an | n >= 0} U {bn | n >= 0} U {anbn | n >= 0}

- **(D)** {a,b}*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

From the given grammar we can draw the DFA,


</details>

---


### Q35. [GATE CSE – 2018   NAT (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following decision problems are 
undecidable? 
I. Given NFAs N1 and N2, is L(N1) ∩ L(N2) = ϕ? 
II. Given a CFG G = (N, Σ, P, S) and a string x ϵ Σ*,  
does x ϵ L(G)? 
III. Given CFGs G1 and G2, is L(G1) = L(G2)?  
IV. Given a TM, M is L(M) = ϕ ?


- **(A)** I and IV only

- **(B)** II and III only

- **(C)** III and IV only

- **(D)** II and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

I. Given NFAs N1 and N2, is L(N1) ∩ L(N2) = ∅? 
This is decidable. When we convert the NFA into DFA, 
if there is no common final state in it, then this will 
become true. 
II. Given a CFG G = (N, Σ, P, S) and a string x ∈ Σ*, does 
x ∈ L(G)? 
Membership property of a context -free grammar is 
decidable. 
III. Given CFGs G1 and G2, is L(G1) = L(G2)? 
Equivalence of two context -free grammars is 
undecidable. 
IV. Given a TM M, is L(M) = ∅? 
Emptiness problem of Turing machine is undecidable.


</details>

---


### Q36. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which one of the following regular expressions 
represents the language: the set of all binary strings 
having two consecutive 0s and two consecutive 1s?


- **(A)** . (0 + 1)* 0011(0 + 1)* + (0 + 1)* 1100(0 + 1)*

- **(B)** . (0 + 1)* (00(0 + 1)* 11 + 11(0 + 1)* 00)(0 + 1)*

- **(C)** (0 + 1)* 00(0 + 1)* + (0 + 1)* 11(0 + 1)*

- **(D)** . 00(0 + 1)* 11 + 11(0 + 1)* 00



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

1. (0 + 1)* 0011(0 + 1)* + (0 + 1)* 1100(0 + 1)* 
It considers only those strings which have either 0011 or 
1100 as a substring. So, it is wrong. 
2. (0 + 1)* (00(0 + 1)* 11 + 11(0 + 1)* 00)(0 + 1)* 
It contains the set of all the binary strings that contain 
two consecutive 0’s and 1’s. 
3. (0 + 1)* 00(0 + 1)* + (0 + 1)* 11(0 + 1)* 
This set contains only those strings which have either 00 
or 11 as a substring but does not contain all the strings 
that contain two consecutive 0’s and 1’s. 
4. 00(0 + 1)* 11 + 11(0 + 1)* 00 
It represents those strings which start with 00 or  11 and 
end with 11 or 00 respectively. So, it is wrong.


</details>

---


### Q37. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements:  
I. If all states of an NFA are accepting states then the 
language accepted by the NFA is Σ*.  
II. There exists a regular language A such that for all 
languages B, A ∩𝐵 is regular. 
Which one of the following is CORRECT?


- **(A)** Only I is true

- **(B)** Only II is true

- **(C)** Both I and II are true

- **(D)** Both I and II are false



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Statement I is false: As in NFA, it is not necessary that 
all states have transitions for all symbols. 
For ex: Consider L = a*b* 
The NFA would be: 
<!-- PAGE 219 -->
THEORY OF COMPUTATION 
Even though all states are final states in above NFA, 
but it doesn’t accept string “aba”. 
Hence its language can’t be ∑*. 
Statement II is true: There exists a regular language 
A={}, such that for all languages B, A∩B={} is 
regular


</details>

---


### Q38. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The number of states in the minimum sized DFA that 
accepts the language defined by the regular expression 
(0+1)*(0+1)(0+1)*is_________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 2


**Step-by-Step Explanation:**

All strings over {0,1} having length ≥1 
(0+1)*(0+1)(0+1)*=(0+1)(0+1)*=(0+1)*( 
0+1)=(0+1)+ 
Having-DFA:


</details>

---


### Q39. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the DFAs M and N given above. The number of 
states in a minimal DFA that accepts the language 
 L(M) ∩ L(N) is __________.


- **(A)** . 1

- **(B)** . 2

- **(C)** . 3

- **(D)** . 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

M accepts the strings which end with a and N accepts 
the strings which end with B. Their intersection should 
accept empty language.


</details>

---


### Q40. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following language is/are regular 
languages? 
L1 : {wxwR|w,x ϵ {a, b}* and |w|, |x| > 0}, wR is the 
reverse of string w 
L2 : {anbm | m != n and m, n >= 0} 
L3 : {apbqcr | p, q, r >= 0}


- **(A)** L1 and L3 only

- **(B)** L2 only

- **(C)** L2 and L3 only

- **(D)** L3 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

L1: All strings of length 3 or more with same start and 
end symbol, as everything in middle is consumed by x 
as per the definition. 
L2: In this number of a's is dependent on number of 
b's. So PDA is needed. 
L3: Any number of a's followed by any number of b's 
followed by any number of c's. Hence Regular.


</details>

---


### Q41. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The number of states in the minimal deterministic finite 
automaton corresponding to the regular expression 
 (0 + 1) * (10) is __________


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

42. Answer:C 
Convert the given transitions to a state diagram. 
From the given diagram we can write, X0 = 1(0+10)* 1


</details>

---


### Q42. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the alphabet Σ = {0, 1}, the null/empty string λ 
and the sets of strings X 0, X 1 and X 2 generated by the 
corresponding grammar. X 0, X 1 and X 2 are related as 
follows : 
X0 = 1X1 
X1 = 0X1 + 1X2 
X2 = 0X1 + {λ} 
Which of the following choices precisely represents the 
strings in X0?


- **(A)** 10(0* + (10)* 1

- **(B)** 10(0* + (10)*)* 1

- **(C)** 1(0* + 10)* 1

- **(D)** 10(0 + 10)* 1 + 110(0 + 10)* 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** c


</details>

---


### Q43. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The length of the shortest string NOT in the language (over 
Σ = {a,b }) of the following regular expression is 
a*b*(ba)*a* is ______________.


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

The regular expression generate all the strings of length 
0 , 1 and 2 {ϵ, a, b, aa, ab, ba, bb} 
Let’s check all the string of length 3. The given regular 
expression generates {aaa, aab, aba, abb, baa, bba, bbb} 
But it doesn’t generate the string “bab”, hence the 
shortest string not generated by regular expression has 
length 3 (string “bab”).


</details>

---


### Q44. [GATE CSE – 2016 SET-2 MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let L1 = {w ∈ {0,1}* | w has at least as many occurrences 
of (110)’s as (011)’s}. Let L2 = {w ∈ {0,1}*|w has at least 
as many occurrences of (000)’s as (111)’s}. Which one of 
the following is TRUE?


- **(A)** L1 is regular but not L2.

- **(B)** L2 is regular but not L1.

- **(C)** Both L1 and L2 are regular.

- **(D)** Neither L1 nor L2 are regular



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

For L1 : 
{Number of occurrences of (110)} ≥ {Number of 
occurrences of (011)} 
Let's look at the language. Consider a string with more 
than one occurrence of (110). The following are some 
options: 
{1100110, 1101110, 110110, ….} 
Please note that anytime strings begin with "11," the 
string will never break the requirement no matter what 
happens after "11." As a result, 11(0+1)* strings will 
always satisfy the requirement. Consider a string in 
which (011) appears more than once. 
The following possibilities are: {011011, 0111011, 
0110011, ….} 
In the following possibilities please observe that 
number of occurrence “011” is two but number of 
occurrence of (110) is one, which violate the conditions. 
<!-- PAGE 220 -->
THEORY OF COMPUTATION 
If we add “0” in every string mentioned above, i.e. 
{0110110, 01110110, 01100110, ….} Now, observe 
that number of occurrence “011” and the number of 
occurrence of (110) both are equal, which satisfies 
the conditions. 
With these analysis, we can make the DFA , which is 
mentioned below. 
But language L2 requires infinite comparison to 
count the occurrences of (000’s) and (111’s), hence it 
is not regular


</details>

---


### Q45. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the finite automaton in the following figure. 
What is the set of reachable states fo r the input string 
0011?


- **(A)** {q0,q1,q2}

- **(B)** {q0,q1}

- **(C)** {q0,q1,q2, q3}

- **(D)** { q3}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

{q0 , 0 → q0} , { q0 , 0 → q0 }, {q0 , 1 → q0},  
{q0 , 1 →q0} .  
Hence δ (q0, 0011) = q0 
{q0 , 0 → q0} , { q0 , 0 → q0 }, {q0 , 1 → q0},  
{q0 , 1 → q1,} .  
Hence δ        (q0, 0011) = q1 
{q0 , 0 → q0} , { q0, 0 → q0 }, {q0 , 1 →q1,},  
{q1, , 1 → q2} .  
Hence δ       (q0, 0011) = q2 
Hence δ (q0, 0011) = {q0, q1,q2}


</details>

---


### Q46. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is TRUE?


- **(A)** The language L = {anbn | n >= 0} is regular.

- **(B)** The language L = {an | n is prime} is regular.

- **(C)** The language L = {w | w has 3k + 1b’s for some 
k  ϵ N with Σ = {a, b} } is regular.

- **(D)** The language L = (ww| w ϵΣ* with Σ = {0, 1} } is    
regular.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

The Language L= { 𝑎𝑛𝑏𝑛 | n>=0} is CFL but not 
regular, as it requires comparison between a’s and b’s. 
L = { 𝑎𝑛 | n is prime} is CSL, as calculation of “n is 
prime” can be done by LBA (Turing machine) 
L = {ww | w ∈ ∑*} is CSL. But L = { w | w has 3k+1 
b’s for some k ∈ natural number} is regular. 
Lets take values of k={1,2,3,….} 
So number of b’s will be {4, 7, 10,……….} and 
number of a’s can be anything. 
The DFA will be:


</details>

---


### Q47. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


If L 1 = {a n | n > 0} and L 2 = {b n | n >= 0}, consider  
(I) L1.L2 is a regular language 
(II) L1.L2 = {anbn | n >= 0} 
Which one of the following is CORRECT?


- **(A)** Only (I)

- **(B)** Only (II)

- **(C)** Both (I) and (II)

- **(D)** Neither (I) nor (II)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

The regular expression equivalent to L1 and L2 are a* 
and b* respectively. 
Since L1 and L2 both are regular languages and regular 
languages are closed under concatenation. So their 
concatenation (i.e., L1 ⋅ L2) must also be a regular 
language. 
So, L1⋅L2 = { anbm | n,m ≥ 0}


</details>

---


### Q48. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the regular expressions given below represent 
the following DFA? 
I)0*1(1+00*1)* 
II)0*1*1+11*0*1 
III) (0+1)*1


- **(A)** I and II only

- **(B)** I and III only

- **(C)** II and III only

- **(D)** I, II, and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

The DFA recognises the phrase "all strings ending in 1." 
As a result, the regular expression for DFA is (0+1)*1. 
Now, the DFA has another similar regular expression: 
0*1(1+00*1)*, due to the state reduction procedure. 
However, the regular expression (0*1*1+11*0*1) is not 
comparable to DFA . Since, DFA also accepts the string 
“11011,” which this regular expression cannot generate.


</details>

---


### Q49. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the DFA given. 
 Which of the following are FALSE? 
1. Complement of L(A) is context-free. 
2. L(A) = L((11*0+0)(0 + 1)*0*1*) 
3. For the language accepted by A, A is the minimal 
DFA. 
4. A accepts all strings over {0, 1} of length at least 2.


- **(A)** 1 and 3 only

- **(B)** 2 and 4 only

- **(C)** 2 and 3 only

- **(D)** 3 and 4 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

L(A) and its complement are both regular (due to the 
closure property), and every regular is also a CFL. As a 
result, LA Complement is context -free. The appropriate 
regular expression for the given FA is 
 Hence we have regular expression: (11*0 +0) 
(0+1)*Because we have (0+1)* at the end, writing 0*1* 
after this will have no effect; the reason fo r this is that if 
a string ends with terminals other than 1*0*, we can 
assume 1*0* as epsilon. So it is equivalent to (11*0 +0) 
(0+1)*0*1*.The given DFA can be minimised, since the 
non-final states are equivalent and can be merged and the 
min DFA will have two states which is given below: 
<!-- PAGE 221 -->
THEORY OF COMPUTATION


</details>

---


### Q50. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


What is the complement of the language accepted by the 
NFA shown below?  
Assume Σ = {a} and ϵ is the empty string.


- **(A)** ∅

- **(B)** {ε}

- **(C)** a*

- **(D)** {a ,ε}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

The complement of a DFA can be obtained by making 
the non-final states as final states and vice-versa. 
The Σ= {a} and the given NFA accepts the strings {a, 
aa, aaa, aaaa, ……….} i.e. the language accepted by 
the NFA can be represented by the regular expression: 
{a+} 
Hence the complement of language is: {a* − a +} = 
{ϵ}


</details>

---


### Q51. [GATE CSE – 2014 SET-1 MCQ (1-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the set of strings on {0,1} in which, every 
substring of 3 symbols has at most two zeros. For example, 
001110 and 011001 are in the language, but 100010 is not. 
All strings of length less than 3 are also in the language. A 
partially completed DFA that accepts this language is 
shown below.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Except for “q,” which is a trap state, all states are final. 
Language strings are constructed in such a way that 
every substring  of three symbols contains no more 
than two zeros. It  signifies that there can't be three 
zeros in a row anywhere in the string. Total four 
transitions are missing in the given DFA, thus we must 
design them while keeping in mind the requirement 
that "three  consecutive zeros" will lead to trap state 
"q." 
From the state “00” it is clear that if another “0” comes 
then the string is going to be rejected, so from state 
“00” the transition with input “0” will lead to state “q”. 
So option A and B are eliminated. 
Option C now includes a self loop of "0" on state "10," 
which accepts any number of zeros (including more 
than three zeros), therefore it is likewise incorrect. We 
were only left with option D, which is the correct 
choice.


</details>

---


### Q52. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Given the language L ={ab,aa,baa}, which of the 
following strings are in L*? 
1)abaabaaabaa 
2)aaaabaaaa 
3)baaaaabaaaab 
4)baaaaabaa


- **(A)** 1, 2 and 3

- **(B)** 2, 3 and 4

- **(C)** 1, 2 and 4

- **(D)** 1, 3 and 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

L* will contain all those strings which can be obtained 
by any combination (and repetition) of the strings in 
language i,e, from L= {ab, aa, baa} 
String 1: abaabaaabaa : abaa baa abaa 
String 2: aaaabaaaa : aaaa baa aa 
String 3: baaaaabaaaab: baa aaabaaaa b, because of the 
last “b” the string cannot belong to L*. 
String 4: baaaaabaa : baa aaabaa


</details>

---


### Q53. [GATE CSE – 2012  MCQ (1-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


A deterministic finite automation (DFA) D with alphabet 
Σ = {a, b} is given below. 
 Which of the following finite state machines is a valid 
minimal DFA which accepts the same language as D? 
(a).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

In (B) and (C) when the first letter of input is 'b' we 
reach final state, while in the given DFA first letter 'b' 
is not a final state. So, (B) and (C) are not accepting  
same language as the given DFA. 
In (D) we can reach final state when the last letter is 
'a', whatever be the previous transitions. But in the 
given DFA, when the first 2 letters are 'b' we can never 
reach the final state. So, (D) is also accepting a 
different language than the given DFA.


</details>

---


### Q54. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Definition of a language L with alphabet {a} is given as 
following. L = {a nk | k > 0, and n is a positive integer 
constant} What is the minimum number of states needed 
in a DFA to recognize L?


- **(A)** k+1

- **(B)** n+1

- **(C)** 2 n+1

- **(D)** 2 𝑘+1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Given that n is a constant. 
So lets check of n = 2, 
𝐿 = 𝑎2𝑘, 𝑘 > 0 
Since k > 0 than zero. 
So L is the language accepting even no. of a's except ' 𝜀 
'. 
So DFA will be, 
So, no. of states required is 2 + 1 = 3. 
So for 𝑎𝑛𝑘, (𝑛 + 1) states will be required.


</details>

---


### Q55. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following pairs have DIFFERENT 
expressive power?


- **(A)** Deterministic finite automata (DFA) and Non - 
deterministic finite automata (NFA)

- **(B)** . Deterministic push down automata (DPDA) and 
Non-deterministic push down automata (NPDA)

- **(C)** .  Deterministic single -tape Turning machine and 
Non-deterministic single tape Turning machine

- **(D)** . Single -tape Turning machine and multi -tape 
Turning   machine



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

NPDA is more powerful than DPDA. 
Expressive power: 
FA<DPDA<NPDA<LBA<TM


</details>

---


### Q56. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let P be a regular language and Q be a context -free 
language such that Q ⊆ P. (For example, let P be the 
language represented by the regular expression p*q* and 
Q be [p nqn | n ∈ N]). Then which of the following 
is ALWAYS regular?


- **(A)** P ∩ Q

- **(B)** P – Q

- **(C)** Σ* – P

- **(D)** Σ* – Q



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Exp: Σ* - P is the complement of P so it is always regular, 
since regular languages are closed under 
complementation.


</details>

---


### Q57. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let w be any string of length n is {0, 1}*. Let L be the set 
of all substrings of w. What is the minimum number of 
states in a non-deterministic finite automaton that accepts 
L?


- **(A)** n-1

- **(B)** n

- **(C)** n+1

- **(D)** 2n-1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

In order to accept any string of length “n” with alphabet 
{0,1}, we require an NFA with “n+1” states. For 
example, consider a strings of length “3” such as “101”, 
the NFA with 4 states is given below: 
Since L is set of all substrings of " w " (Substring of a 
string is obtained by deleting any prefix or any suffix 
from string), so if we consider "w" as "101", then the 
substrings of 𝑤 are {𝜀, 0,1, 10,01,101}. 
Since the string " 101 " is also its substring, so we 
require 4 states (i.e. for 𝑛 length string, 𝑛 + 1 states are 
required) and the NFA would be: 
<!-- PAGE 222 -->
THEORY OF COMPUTATION


</details>

---


### Q58. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Let L = {w ∈ (0 + 1)* | w has even number of 1s}, i.e. L 
is the set of all bit strings with even number of 1s. Which 
one of the regular expression below represents L?


- **(A)** (0 * 10 * 1)*

- **(B)** 0* (10 * 10*)*

- **(C)** 0*(10 * 1*)*0*

- **(D)** 0 *1(10 * 1)*10*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

L = {w ∈ (0 + 1)*| w has even number of 1s}* 
This grammar accepts the strings like {ε, 11, 011, 101, 
110, …} 
Option : (0 * 10 * 1)* 
False, This grammar cannot accept the string "010101" 
and "010101" accepted by L. 
Option : 0 * (10 * 10*)* 
True, This accepts all strings of L. 
Option : 0*(10 * 1*)*0* 
False, This grammar cannot accept the string 
"1010101" and "1010101" accepted by L. 
Option 4:0 *1(10 * 1)*10* 
False, This grammar accepts the string "111" and 
"111" cannot be accepted by L.


</details>

---


### Q59. [GATE CSE – 2011  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The above DFA accepts the set of all strings over {0,1} 
that


- **(A)** begin either with 0 or 1 .

- **(B)** end with 0.

- **(C)** end with 00.

- **(D)** contain the substring 00



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Atlest two 0’s at last.


</details>

---


### Q60. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Given the following state table of an FSM with two 
states A and B ,one input and one output. 
If the initial state is A=0,B=0.what is the minimum length 
of an input string which will take the machine to the state 
A=0,B=1 with output = 1.


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Whenever we reach state 00 we get output 1. 
Whenever we reach state 01 we get output 0 and 1.for 
01 state we got two optputs 0 and 1. When we reach 
at state 10, we get output we get output 0. for 11 we 
don’t know. 
Draw a moore machine. 
Minimum length input 101.


</details>

---


### Q61. [GATE CSE – 2009  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Given below are two finite state automata (-> indicates 
the start state and F indicates a final state) 
Automaton Y                                                                                          
 a b 
→1 1 2 
2(F) 2 1 
Automaton Z 
 a b 
→1 2 2 
2(F) 1 1 
Which of the following represents the product 
automaton Z × Y?


- **(A)** . 
 a b 
→p S R 
Q R S 
R(F) Q P 
S Q P

- **(B)** a b 
→p S Q 
Q R S 
R(F) Q P 
S P Q

- **(C)** a b 
→p Q S 
Q R S 
R(F) Q P 
S Q P

- **(D)** a b 
→p S Q 
Q S R 
R(F) Q P 
S Q P



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

11 is P and 22 is R in choice. So, the answer should 
be (A) but in the row for S, it should be P and Q and Q 
not  and P.


</details>

---


### Q62. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Match the following NFAs with the regular expressions 
they correspond to: 
1. ε + 0(01*1 + 00)*01* 
2. ε + 0(10*1 + 00)*0 
3. ε + 0(10*1 + 10)*1 
4. ε + 0(10*1 + 10)*10*


- **(A)** P – 2, Q – 1, R – 3, S – 4

- **(B)** P – 1, Q – 3, R – 2, S – 4

- **(C)** P – 1, Q – 2, R – 3, S – 4

- **(D)** P – 3, Q – 2, R – 1, S – 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

S – 4 is true,R– 3 is true because everything it accepts 
ends with 1; this is made mandatory only by 3 
This rules out option B and option D. 
Use string 01010 and compare P vs Q; this makes Q – 2 
as confirmed. 
Hence, option C is correct.


</details>

---


### Q63. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


If the final states and non-final states in the DFA 
below are interchanged, then which of the following 
languages over the alphabet {a, b} will be accepted 
by the new DFA?


- **(A)** Set of all strings that do not end with ab

- **(B)** Set of all strings that begin with either an a or a b

- **(C)** Set of all strings that do not contain the  
substring ab

- **(D)** The set described by the regular expression 
b*aa*(ba)*b*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

B. String begin with either a or b. 
 ab (string start with a) doesn't accept in it reach to 
nonfinal state q2. 
 bab (string start with b) doesn't accept in it reach to 
nonfinal state q2. 
C. Set of strings that do not contain the substring ab 
 aba (have substring ab) does accept in it reach to final 
state q1. 
D. The set described by the regular expression baa(ba)b 
b is string accepted by DFA(L') but above regular 
expression cannot derive it. 
Option A is correct. 
DFA (L') accepts all strings that doesn't end with ab. 
64. L1 : (0 + 10)*11(0 + 1)* 
L2 : (0 + 1)*11(0 + 1)* 
It is quite clear that L1 = L2. 
As both languages L1 and L2 are equal So Complement 
of Language L2 will be the complement of Language 
L1 also. For a given language L, L ∩ Lc = ∅. 
Hence, both options (A) and (C) are correct.


</details>

---


### Q64. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following two finite automata. M1 accepts L1 
and M2 accepts L2 
Which one of the following is TRUE?


- **(A)** . L1 = L2

- **(B)** . L1 ⊂ L2

- **(C)** . L1 ∩ L2c = ∅

- **(D)** . L1 ∪ L2 ≠ L1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** a,c


</details>

---


### Q65. [GATE CSE – 2008  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following are regular sets? 
I. { anb2m | n ≥ 0, m ≥ 0 } 
II. { anbm | n = 2m } 
III. { anbm | n ≠ m } 
IV. { xcy | x, y ∈ {a, b}* }


- **(A)** I and IV only

- **(B)** I and III only

- **(C)** I only

- **(D)** IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Since in option 2 and 3, is dependent on n m , therefore 
a comparison has to be done to evaluate those and hence 
are not regular. 
 I and IV are clearly regular sets.


</details>

---


### Q66. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following Finite State Automaton: 
The language accepted by this automaton is given by the 
regular expression


- **(A)** b*ab*ab*ab*

- **(B)** (a+b)*

- **(C)** b* a(a+b)*

- **(D)** b*ab*ab*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

1. q3 is unreachable state, hence it can be removed.  
2. States q1 and q2 are indistinguishable, so, they can be 
merged. 
<!-- PAGE 223 -->
THEORY OF COMPUTATION


</details>

---


### Q67. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following DFA in which S0 is the start 
state and S1,S3 are the final states. 
What language does this DFA recognize?


- **(A)** All strings  of x and y

- **(B)** All strings of x and y which have either even number 
of x and even number of y or odd number of x and 
odd number of y

- **(C)** All strings of x and y which have equal number of x 
and y

- **(D)** All strings of x and y with either even number of x 
and odd number of y or odd number of x and even 
number of y



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

String x is accepted and string xx is rejected. 
From this knowledge option A,B,C  are eliminated.


</details>

---


### Q68. [GATE CSE – 2007  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the following finite automata P and Q over the 
alphabet {a, b, c}. The start states are indicated by a 
double arrow and final states are indicated by a double 
circle. Let the languages recognized by them be denoted 
by L(P) and L(Q) respectively. 
The automata which recognizes the language L(P) ∩ 
L(Q) is:


- **(A)** .

- **(B)** .

- **(C)** .

- **(D)** .



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

the languages being accepted by P and Q. In P before 
a 'c' there must be either 'b' or 'aa'. In Q, before 'c' 
there must be 'aa'. So, obviously, in their intersection 
before 'c' there must be 'aa' which is satisfied only by 
option A.


</details>

---


### Q69. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the regular expression 
 R = (a + b)*(aa + bb)(a + b)* 
Which of the following non -deterministic finite 
automata recognizes the language defined by the 
regular expression R? 
Edges labelled λ denote transitions on the empty 
string.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

When we say non-deterministic finite automata 
recognizes the language defined by the regular 
expression R then it means that it won't accept any 
other string that does not fall under the R and it will 
only accept all strings that fall under R. R says the 
string should contain either aa or bb. 
So, we see B accepts aba, C accepts aba and D 
accepts a. Just find some examples that do not follow 
the rule. A accepts any string containing either aa or 
bb and it does not accept any other string. 
70, Answer : A 
B. ab is accepted 
C: abb is not accepted 
D. ab is accepted


</details>

---


### Q70. [GATE CSE – 2007  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the regular expression R = (a + b)*(aa + bb)(a + b)*  
Which deterministic finite automaton accepts the 
language represented by the regular expression R ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** a


</details>

---


### Q71. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following languages is regular?


- **(A)** { wwR | w ∈ {0,1}+ }

- **(B)** { wwRx | x, w ∈ {0,1}+ }

- **(C)** { wxwR | x, w ∈ {0,1}+ }

- **(D)** { xwwR | x, w ∈ {0,1}+ }



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

A.CFL  
B. CFL  
C. Regular, language is string starting and ending 
with the same symbol and having length at least 3. 
e.g. 0x0,1x1  
D. CFL


</details>

---


### Q72. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Which of the following is TRUE?


- **(A)** Every subset of a regular set is regular

- **(B)** Every finite subset of a non-regular set is regular

- **(C)** The union of two non-regular sets is not regular

- **(D)** Infinite union of finite sets is regular



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Every finite subset of a non-regular set is regular.  
Any finite set is always regular. 
Σ * being regular any non regular language is a subset 
of this, and hence (A) is false. 
If we take a CFL which is not regular, and takes union 
with its complement (complement of a CFL which is 
not regular won't be regular as regular is closed under 
complement), we get Σ* which is regular. So, (C) is 
false. 
Regular set is not closed under infinite union. Example: 
 Let Li = {0i 1i}, i ∈ N 
Now, if we take infinite union over all i, we get 
L = {0i 1i | i ∈ N}, which is not regular.


</details>

---


### Q73. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


In the automaton below,s is the start state and t is the 
only final state. 
Consider the strings u = abbaba, v = bab, and w = aabb. 
Which of the following statements is true?


- **(A)** The automaton accepts u and v but not w

- **(B)** The automaton accepts each of u, v, and w

- **(C)** The automaton rejects each of u, v, and w

- **(D)** The automaton accepts u but rejects v and w



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

u = abbaba 
 Ends in accepting state t → Accepted 
v = bab 
 Ends in non-accepting state S → Rejected 
w = aabb 
 Ends in non-accepting state S → Rejected


</details>

---


### Q74. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


For a state machine with the following state diagram the 
expression for the next state S+ in terms of the current 
state and the input variables x and y is


- **(A)** S+=S'.y’+S.x

- **(B)** S+=S.x.y’+S’.y.x’

- **(C)** S+=x.y’

- **(D)** S+=S'.y+S.x’



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

From this table S+ will be A.


</details>

---


### Q75. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


If s is a string over (0 + 1)* then let n₀(s) denote the 
number of 0’s in s and n₁(s) the number of 1’s in s. Which 
one of the following languages is not regular?


- **(A)** L = { s ∈ (0 + 1)* | n₀(s) is a 3-digit prime }

- **(B)** L = {s ∈ (0 + 1)* | for every prefix s′ of s, |    n₀(s′) 
− n₁(s′) | ≤ 2 }

- **(C)** L = { s ∈ (0 + 1)* | | n₀(s) − n₁(s) | ≤ 4 }

- **(D)** L = {s ∈ (0 + 1)* | n₀(s) mod 7= n₁(s) mod 5= 0 }



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

A. There are only finite 3 digit primes. Let the largest of 
them be X. Now we need X + 2 states in our DFA 
(including one for count = 0 and one for count > X). We 
do not need a change of state for any 1. 
B. Here we need just 6 states to recognise L. 
1. #0 − #1 = 0 
2. #0 − #1 = 1 
3. #0 − #1 = 2 
4. #0 − #1 = −1 
5. #0 − #1 = −2 
<!-- PAGE 224 -->
THEORY OF COMPUTATION 
If the difference goes above 2 or below −2, we go to a 
dead state. All other states are accepting. This 
transition to dead state is possible because of the 
words "for every prefix s′ of s" in L and that is what 
makes this language regular. 
C. L is not regular 
#0 − #1 = 1 
 #0 − #1 = 2 
 #0 − #1 = 3 
 #0 − #1 = 4 
#0 − #1 = 5 
 . 
 . 
 #0 − #1 = 100 
 . 
 . 
All these form distinct equivalent classes under 
Myhill-Nerode theorem meaning from the strings in 
each of these sets, we can append a string which will 
take the new string to L, while the same string 
appended to string in any other set would not reach L. 
For example, for 000000, we append 11, for 
0000000, we append 111 etc. So, in short we need to 
maintain the count of 1’s and 0’s and the count here 
is not finite. 
D. This is regular. We need a finite automata with 5 × 
7 = 35 states for maintaining the counts of 0’s mod 7 
and 1’s mod 5 and there cannot be more than 35 
possibilities for this. With each input symbol, the 
transition must be going to one among these.


</details>

---


### Q76. [GATE CSE – 2005  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the machine M:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** None of theabove


**Step-by-Step Explanation:**

A is Wrong, since abbb is accepted. 
B is Wrong. take ∈,b,bb,bbb,.. is not accepted. 
C is Wrong, since abba contains abb as substring, but 
is still not accepted.  
D is Wrong, since ab does not contain aa as substring, 
but is still not accepted.


</details>

---


### Q77. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


The following diagram represents a finite state 
machine which takes as input a binary number from 
the least significant bit. 
Which of the following is TRUE?


- **(A)** It computes 1’s complement of the input number

- **(B)** It computes 2’s complement of the input number

- **(C)** It increments the input number

- **(D)** It decrements the input number



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

(It computes 2’s complement of the input number) 
The FSM reads the binary number from the least 
significant bit (LSB). It copies all bits unchanged up to 
and including the first ‘1’. After the first ‘1’ is 
encountered, it complements all remaining higher bits 
(0 becomes 1 and 1 becomes 0). 
This procedure is exactly how 2’s complement is 
computed: keep bits unchanged until the first 1 from 
LSB, then flip all remaining bits.


</details>

---


### Q78. [GATE CSE]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the non-deterministic finite automaton 
(NFA) shown in the figure. 
State X is the starting state of the automaton. Let the 
language accepted by the NFA with Y as the only 
accepting state be L1. Similarly, let the language 
accepted by the NFA with Z as the only accepting state 
be L2. Which of the following statements about L1 and 
L2 is TRUE?


- **(A)** L1 = L2

- **(B)** L1 ⊂ L2

- **(C)** L2 ⊂ L1

- **(D)** None of the above



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A).


**Step-by-Step Explanation:**

Writing Y and Z in terms of incoming arrows (Arden's 
method) : 
 Y =X0+Y0+Z1  
Z =X0+Z1+Y0 ,so Y=Z.


</details>

---


### Q79. [GATE CSE – 2005  MCQ (2-MARKS]


> **Topic:** THEORY OF COMPUTATION | **Marks:** 2 | **Difficulty:** Medium


Consider the regular grammar: 
S → Xa | Ya 
X → Za 
Z → Sa | ε 
Y → Wa 
W → Sa 
where S is the starting symbol, the set of terminals is 
{a} and the set of non-terminals is {S, W, X, Y, Z}. We 
wish to construct a deterministic finite automaton 
(DFA) to recognize the same language. What is the 
minimum number of states required for the DFA?


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Minimum number of states required for the DFA = 3    
.L={w: (w) mod 3=2, w belongs to {a,b }} 
S ⇒ Ya ⇒ Waa ⇒ Saaa  (Mod 3) 
S ⇒ Xa ⇒ Zaa ⇒ aa    (remainder 2) 
S ⇒ Xa ⇒ Zaa ⇒ Saaa  (Mod 3) 
Each cycle through S adds three a’s.  
<!-- PAGE 225 -->
CONTEXT FREE LANGUAGE AND 
CONTEXT FREE GRAMMAR


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar where 𝑆 is the start 
symbol, and 𝑎 and 𝑏 are  
terminal symbols.  
S→𝑎𝑆𝑏𝑆 ∣ 𝑏𝑆 ∣ ϵ  
Which of the following statements is/are true?


- **(A)** The grammar is ambiguous

- **(B)** The string 𝑎𝑏𝑏 has two distinct derivations in this 
grammar

- **(C)** The string 𝑎𝑏𝑎𝑏 has only one rightmost derivation

- **(D)** The language generated by the grammar is 
undecidable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,B,C


**Step-by-Step Explanation:**

A. String : abb 
S → aSbS-> aSb.ϵ  → abSbϵ → ab.ϵ.b. ϵ → abb 
S → aSbS → aSbbS → aSbb.ϵ → a.ϵ.bb.ϵ → abb 
Two right most derivations -> grammar is ambiguous.  
B. We can use explanation of A for this also. 
C. For  
s → aSbS   now for generating ab again we have only 
one option to put rightmost S as aSbS in rightmost 
derivation. 
So C is also true. 
D. Language generated by CFG is CFL ,and CFLs are 
decidable.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following grammars is/are ambiguous?


- **(A)** . S → aSb | ε

- **(B)** . E → E + E | E * E | id

- **(C)** . S → aS | Sa | ε

- **(D)** . S → aS | ε



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B,C.


**Step-by-Step Explanation:**

(A) Not ambiguous 
 Generates aⁿbⁿ. 
 Each string has a unique nested structure. 
 Only one parse tree possible. 
(B) Ambiguous 
Expression grammar without precedence. 
GATE IT – 2005 MCQ (1-MARKS) 
GATE IT – 2005 MCQ (1-MARKS) 
GATE IT – 2005 MCQ (2-MARKS) 
<!-- PAGE 233 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
 Example: id + id * id 
 Can be parsed as: 
1. (id + id) * id 
2. id + (id * id) 
 Two parse trees → ambiguous. 
(C) Ambiguous 
 Generates a*. 
 Example: "aa" 
 Can derive using left recursion or right recursion. 
 Two different parse trees → ambiguous. 
(D) Not ambiguous 
 Right-recursive grammar for a*. 
 Each string has exactly one derivation


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let Σ = {a, b, c, d} and let L = { aibjckdℓ | i, j, k, ℓ ≥ 0 
}. 
Which of the following constraints ensure(s) that the 
language L is context-free?


- **(A)** i + k = j + ℓ

- **(B)** i = k and j = ℓ

- **(C)** i = ℓ and j = k

- **(D)** i + j = k + ℓ



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,C,D


**Step-by-Step Explanation:**

(A) i + k = j + ℓ 
This condition compares total number of (a and c) 
with total number of (b and d). 
(B)This requires: 
 • match a with c 
 • match b with d 
These are two independent equalities in sequence 
(cross-serial dependency). 
This language is NOT context-free. 
(C) We can: 
 • Push for each a 
 • Match b and c in middle 
 • Pop for each d 
This is context-free. 
Example grammar idea: 
 S → a S d | T 
 T → b T c | ε 
Hence context-free. 
(D)  i + j = k + ℓ 
Total number of a’s and b’s equals total number of 
c’s and d’s. 
This is similar to: 
 ambncpdq where m+n = p+q 
Single stack can count total of first part and match with 
second part. 
This is context-free.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺1, 𝐺2 be Context Free Grammars (CFGs) and 𝑅 be a 
regular expression. For a grammar 𝐺, let 𝐿(𝐺) denote the 
language generated by 𝐺. 
Which ONE among the following questions is decidable?


- **(A)** Is 𝐿(𝐺1 ) = 𝐿(𝐺2 )?

- **(B)** Is 𝐿(𝐺1 ) ∩ 𝐿(𝐺2 ) = ∅?

- **(C)** Is 𝐿(𝐺1 ) = 𝐿(R )?

- **(D)** Is 𝐿(𝐺1 ) = ∅?



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

1. Is L(G1) = L(G2)? 
Undecidable. Determining if two context-free grammars 
(CFGs) generate the same language is undecidable. 
There is no algorithm that can decide whether two 
arbitrary CFGs generate the same language. 
2. Is L(G1) ∩ L(G2) = ∅? 
Undecidable. The intersection of two context -free 
languages is not necessarily context-free, and checking if 
two context-free languages have an empty intersection is 
undecidable. This is a generalization of the 
undecidability of the equivalence problem for CFGs. 
3. Is L(G1) = L(R)? 
Undecidable. The equivalence of a context-free language 
(generated by a CFG) and a regular language (defined by 
a regular expression) is undecidable. Determining 
whether a CFG generates a language that is exactly the 
same as a regular language is undecidable. 
4. Is L(G1) = ∅? 
Decidable. It is decidable whether the language 
generated by a context -free grammar G1 is empty. This 
can be determined by analyzing the grammar to check if 
there exists a derivation for any string. Specifically, this 
can be done by checking if there is any derivation starting 
from the start symbol and reaching a terminal string.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which ONE of the following languages is accepted by a 
deterministic pushdown automaton?


- **(A)** Any regular language.

- **(B)** Any context-free language.

- **(C)** Any language accepted by a non -deterministic 
pushdown automaton.

- **(D)** Any decidable language.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Since regular languages are a subset of deterministic 
context-free languages (DCFL), every regular language is 
also a DCFL. 
Context-free languages (CFL) and recursive (decidable) 
languages are supersets of DCFL.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following context-free grammar 𝐺, where 𝑆, 
𝐴, and 𝐵 are the variables (non-terminals), 𝑎 and 𝑏 are the 
terminal symbols, 𝑆 is the start variable, and the rules of 
𝐺 are described as: 
𝑆 → 𝑎𝑎𝐵 | 𝐴𝑏𝑏 
𝐴 → 𝑎 | 𝑎𝐴 
𝐵 → 𝑏 | 𝑏𝐵 
Which ONE of the languages 𝐿(𝐺) is accepted by 𝐺?


- **(A)** 𝐿(𝐺) = {𝑎2𝑏𝑛 | 𝑛 ≥ 1} ∪ {𝑎𝑛𝑏2 | 𝑛 ≥ 1}

- **(B)** 𝐿(𝐺) = {𝑎𝑛𝑏2𝑛 | 𝑛 ≥ 1} ∪ {𝑎2𝑛𝑏𝑛 | 𝑛 ≥ 1}

- **(C)** 𝐿(𝐺) = {𝑎𝑛𝑏𝑛 | 𝑛 ≥ 1}

- **(D)** 𝐿(𝐺) = {𝑎2𝑛𝑏2𝑛 | 𝑛 ≥ 1}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Let    S → aaB 
             → aab 
             → aabB 
             → aabb 
             → aabbb 
Let     S → Abb 
          S → aAbb 
<!-- PAGE 234 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
             → aab 
             → aabb 
             → aaAbb 
             → aaabb 
L  = { aab, aabb, abb, aaabb, aaabbb, ... } 
Then, 
L(G) = { a²·bⁿ | n ≥ 1 } ∪ { aⁿ·b² | n ≥ 1 }


</details>

---


### Q7. [GATE CSE – 2025 SET-2  MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two languages over the alphabet 
{𝑎, 𝑏, 𝑐}, where 𝑚 and 𝑛 are natural numbers. 
𝐿1 = {𝑎𝑚𝑏𝑚𝑐𝑚+𝑛 | 𝑚, 𝑛 ≥ 1} 
𝐿2 = {𝑎𝑚𝑏𝑛𝑐𝑚+𝑛 | 𝑚, 𝑛 ≥ 1} 
Which ONE of the following statements is CORRECT?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

For L1: 
The language requires that the number of a's and b's 
must be equal (aᵐbᵐ), and the number of c's must be 
greater than or equal to the number of a's (cᵐ⁺ⁿ). 
This involves two simultaneous conditions or 
comparisons: one for equality between the number of a's 
and b's, and another for comparing the number of a's to 
c's. 
Context-Free Grammars (CFGs) cannot handle two 
conditions at once, which require comparison of counts, 
thus, L₁ cannot be generated by a context-free grammar. 
Therefore, L₁ is not a context-free language. 
For L₂: 
The language structure {aᵐbⁿcᵐ⁺ⁿ} allows for: 
Pushing a's onto a stack. 
Pushing b's onto the same stack until c appears. 
Matching c's with a's and b's as they pop off the stack. 
This behavior can be captured using a Pushdown 
Automaton (PDA), which aligns with how context-free 
languages are processed. 
Thus, L₂ is a context-free language


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a context-free grammar 𝐺 with the following 
3 rules. 
𝑆 → 𝑎𝑆, 𝑆 → 𝑎𝑆𝑏𝑆, 𝑆 → 𝑐 
Let 𝑤 ∈ 𝐿(𝐺). Let 𝑛𝑎 (𝑤), 𝑛𝑏 (𝑤), 𝑛𝑐 (𝑤) denote the 
number of times 𝑎, 𝑏, 𝑐 occur in 𝑤, respectively. 
Which of the following statements is/are TRUE?


- **(A)** 𝑛𝑎(𝑤) > 𝑛𝑏(𝑤)

- **(B)** 𝑛𝑎(𝑤) > 𝑛𝑐 (𝑤) − 2

- **(C)** 𝑛𝑐(𝑤) = 𝑛𝑏(𝑤) + 1

- **(D)** 𝑛𝑐(𝑤) = 𝑛𝑏(𝑤) ∗ 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C)


**Step-by-Step Explanation:**

S → aS| aSbS | c 
We can solve by elimination method in the string: w=c 
As a=0, b=0, c=1 
Now analyzing the options: 
Option A: False 
na(w) > nb (w) = 0 > 0 
Now lets take other string: aaacbcbc 
As, a=3, b=2, c=3 
Option D: False 
nc (w) = nb (w) * 2 
1 = 0 * 2 which is 1 = 0 
Option B,C: True 
take any string , option B,C are always true


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝐺 = ( 𝑉, Σ, 𝑆, 𝑃) be a context -free grammar in 
Chomsky Normal Form with Σ = { 𝑎, 𝑏, 𝑐} and 𝑉 
containing 10 variable symbols including the start 
symbol 𝑆. The string 𝑤 = 𝑎30𝑏30𝑐 30 is derivable from 𝑆. 
The number of steps (application of rules) in the 
derivation 𝑆 →∗ 𝑤 is _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (179)


**Step-by-Step Explanation:**

For CNF, number of steps required is 2|w| - 1 
Example: if 
S -> AA 
A -> a 
for string 'aa' we will need  
S -> AA -> Aa -> aa          
Here the |w| = 90 
Thus the number of derivations will be 2*90 - 1 = 179


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the pushdown automaton (PDA) P below, 
which runs on the input alphabet {a, b}, has stack 
alphabet {⊥, A}, and has three states {s, p, q}, with s 
being the start state. A transition from state u to state v, 
labelled c/X/γ, where c is an input symbol or , X is a 
stack symbol, and γ is a string of stack symbols, 
represents the fact that in state u, the PDA can read c 
from the input, with X on the top of its stack, pop X from 
the stack, push in the string γ on the stack, and go to state 
v. In the initial configuration, the stack has only the 
symbol ⊥ in it. The PDA accepts by empty stack. 
Which one of the following options correctly describes the 
language accepted by P?


- **(A)** {ambn | 1<=m and n<m}

- **(B)** {ambn | 0<=n<=m}

- **(C)** {ambn | 0<=n and 0<=m}

- **(D)** {am| 0<=m} U {bn | 0<=n}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Note that Empty String ϵ is Not accepted by the given PDA, 
So options B, C, D are eliminated. 
Empty String ϵ is Not accepted because from initial state, on 
empty tape, we cannot empty our stack since stack bottom 
symbol ⟂ can be removed only in state q But on empty tape, 
we can not reach to state q from state s. 
Method 2: 
Note that to empty our stack, the stack bottom symbol ⟂ can 
be removed only in state q. To reach state q, from s or from 
p, we need symbol A on Top-of-the-stack (TOS). Symbol A 
is pushed in the stack by symbol a in the input string. So, 
our input string must have at least one a. 
In the initial state s, for every a in the input string, we push 
one A in the stack. Now, for every b in the input string, we 
pop one A from the stack. When all the b′s are over in the 
input string, we can move to state q if our TOS is A, so, to 
empty our stack at the end of any input string w, we must 
have more a′s than b′s in w. In the state q we can empty the 
stack & w is accepted. 
Also, our PDA accepts a+strings.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are CORRECT?


- **(A)** The intersection of two regular languages is regular.

- **(B)** The intersection of two context -free languages is 
context-free.

- **(C)** The intersection of two recursive languages is 
recursive.

- **(D)** . The intersection of two recursively enumerable   
languages is recursively enumerable.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,C,D)


**Step-by-Step Explanation:**

1. True. Regular languages are closed under intersection 
(use product DFA / cross-product construction). 
2. False. CFLs are not closed under intersection in 
general (standard counterexamples exist). 
3 .True. Recursive (decidable) languages are closed 
under intersection — run both deciders and accept iff 
both accept. 
<!-- PAGE 235 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
4. True. Recursively enumerable languages are closed 
under intersection — dovetail the two 
enumerators/simulators and accept when both 
machines accept.


</details>

---


### Q12. [GATE CSE – 2024 SET-2  MSQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the context-free grammar G below 
S → aSb | X 
X → aX | Xb | a | b , 
where S and X are non-terminals, and a and b are 
terminal symbols. The starting non-terminal is S. 
Which one of the following statements is CORRECT?


- **(A)** The language generated by G is (a + b)*

- **(B)** The language generated by G is a*(a + b)b*

- **(C)** The language generated by G is a*b*(a + b)

- **(D)** The language generated by G is not a regular 
language



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

X → am(a+b)bp (m≥0,p≥0) 
After replacing X in the first production we get, 
S → aSb / am(a+b)bp. 
Further reduction we get, 
S → anam(a+b)bpbn 
further simplification gives : a∗(a+b)b∗ .


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages:  
L1 = {ww | w ∈ {a, b}* } 
L2 = {anbncm | m, n≥ 0} 
L3 = {ambncn | m, n≥ 0} 
Which of the following statements is/are FALSE?


- **(A)** L1 is not context -free but L2 and L3 are 
deterministic context-free

- **(B)** Neither L1 nor L2 is context-free.

- **(C)** L2, L3, and L2 ∩ L3 all are context-free.

- **(D)** Neither L1 nor its complement is context-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C,D)


**Step-by-Step Explanation:**

L1 is not context -free and L2 and L3 are clearly 
DCFLs since they have only one comparison and 
DPDA can accept both. 
Neither L1 nor L2 is context-free - False 
L2 is DCFL and every DCFL is a CFL. 
L2 - Context-free. 
L3 - Context-free. 
L2 ∩ L3 = {aⁿbⁿcⁿ or aᵐbᵐcᵐ , m,n ≥ 0} 
This language is context-sensitive language. 
L2, L3 and L2 ∩ L3 all are context-free. - False 
L2 - Context-free. 
L3 - Context-free. 
L2 ∩ L3 = {aⁿbⁿcⁿ, n ≥ 0} We cannot compare aⁿbⁿcⁿ 
with one single stack. Hence it is not context-free. 
Neither L1 nor its complement is context-free. 
False, L1 - Not context-free. 
L1′ (Complement of L1) is accepted by a context -free 
grammar, hence it is CFL.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages: 
L₁ = { aⁿwaⁿ | w ∈ {a, b}* } 
L₂ = { wxwʳ | w, x ∈ {a, b}*, |w|, |x| > 0 } 
Note that wʳ is the reversal of the string w. Which of 
the following is/are TRUE?


- **(A)** L1 and L2 are regular.

- **(B)** L1 and L2 are context-free.

- **(C)** L1 is regular and L2 is context-free.

- **(D)** L1 and L2 are context-free but not regular.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B,C)


**Step-by-Step Explanation:**

L₁ = {aⁿwaⁿ | w ∈ {a, b}*} 
The regular expression can be written for the language 
L₁. 
L₁ is regular because by putting n=0, we create a subset 
{w | w ∈ {a,b}} which contains all possible strings. So 
if the subset of L₁ is (a + b), then L₁ = (a + b)* which is 
regular. 
L₂ = {wxwʳ | w, x ∈ {a, b}*, |w|, |x| > 0} 
The regular expression can be written for the language 
L₂. 
L₂ is regular because by putting w as "a" and "b" we get a 
regular expression 
a(a+b)a + b(a+b)b, which covers all other strings which 
can be obtained by putting w as "aa", "ab", "ba" and "bb", 
etc. 
So L₂ = a(a+b)a + b(a+b)b which is regular. 
Now every regular is also context-free.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For a string w, we define wR to be the reverse of w. For 
example, if w= 01101 then w R= 10110. Which of the 
following languages is/are context-free?


- **(A)** {wxxRwR | w,x ∈ {0,1}*}

- **(B)** {wxwR | w,x ∈ {0,1}*}

- **(C)** {wxwRxR | w,x ∈ {0,1}*}

- **(D)** {wwRxxR | w,x ∈ {0,1}*}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B,D)


**Step-by-Step Explanation:**

option A is correct 
{wxxᴿwᴿ | w, x ∈ {0, 1}*} is context-free language as it 
can be done using a stack. here is the way 
push all letters of w in the stack 
push all letters of x in the stack 
if a new letter matches with the top of the stack, pop it 
at the end stack will be empty so, it is context free language 
option B is correct 
{wxwᴿ | w, x ∈ {0, 1}*} is context-free. 
push all the letters before w in the stack, skip x, now pop 
an element from the stack for each new letter, (top of the 
stack will match with each new letter due to wᴿ). So, it is 
context-free 
option C is incorrect 
{wxwᴿxᴿ | w, x ∈ {0, 1}*} is Not context-free, we have to 
match w with wᴿwᴿ but the top of the stack contains x, so 
not possible. 
option D is correct 
{wwᴿxxᴿ| w, x ∈ {0, 1}*} is Context-free language, 
first match w with wᴿ then match x with xᴿ using a stack. 
option 1,2,4 are correct.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In a pushdown automaton P=(Q,Σ,Γ,δ,q0,F), a 
transition of the form, 
 where p, q∈Q, a ∈ Σ ∪ {ϵ}, X , Y ∈ Γ∪ {ϵ}, 
represents:(q,Y) ∈ δ(p,a,X) 
Consider the following p ushdown automaton over the 
input alphabet Σ={a,b} and stack alphabet Γ={#,A}. 
 The number of strings of length 100 accepted by the above  
pushdown automaton is ___________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (50)


**Step-by-Step Explanation:**

According to given question, 
L = {anbm| n>m & n+m=100} 
L = a51b49,…..,a99b,a100 
|L| = 50 
For reaching q3 from q2 there must be “A” on the top of 
the stack, hence n>m.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages. 
L1 = {wxyx | w, x, y ϵ (0 + 1)+} 
L2 = {xy | x, y ϵ(a + b)*, |x| = |y|, x !=y} 
Which one of the following is TRUE?


- **(A)** L1 is context-free but not regular and L2 is context-free.

- **(B)** Neither L1 nor L2 is context-free.

- **(C)** L1 is regular and L2 is context-free.

- **(D)** L1 is context-free but L2 is not context-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

L1 is regular. y can be expanded and w can also 
expanded. 
<!-- PAGE 236 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
L1 = (0+1)+ 0 (0+1)+ 0 + (0+1)+ 1 (0+1)+ 1 
L2 is CFL since it is equivalent to complement of 
L={ww where w belongs to (a+b)* } U { set of all odd 
length strings strings }


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following languages over Σ = {a,b}  is 
NOT context-free?


- **(A)** {wwR | Wϵ {a, b}*}

- **(B)** {wanwRbn | Wϵ {a,b}*, n >= 0}

- **(C)** {anbi|i ϵ{n, 3n, 5n}, n >= 0}

- **(D)** {wanbnwR |w ϵ {a, b}*, n >= 0}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

{wanwRbn |w ∈ {a,b}*, n ≥ 0} cannot be CFL. 
This is similar to language 
L = {anbmcndm | n, m > 0} 
Suppose we push “w” then a n and then w R , now we 
cannot match b n with an , because in top of stack we 
have wR .


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages: 
I.{ambncpdq |m + p = n + q,where m,n,p,q >= 0} 
II.{ambncpdq |m=n and p=q,where m,n,p,q >= 0} 
III.{ambncpdq |m=n and p!=q,where m,n,p,q>= 0} 
IV.{ambncpdq |mn = p + q, where m, n, p, q>= 0} 
Which of the above languages are context-free?


- **(A)** I and IV only

- **(B)** I and II only

- **(C)** II and III only

- **(D)** II and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

 ambncpdq | m+p = n+q, m-n = q-p First we will push a’s 
in the stack then we will pop a’s after watching b’s. 
Then some of a’s might left in the stack. Now we will 
push c’s in the stack and then pop c’s by watching d’s. 
And then the remaining a’s will be popped off the stack 
by watching some more d’s. And if no d’s is remaining 
and the stack is empty then the language is accepted by 
CFG. 
 ambncpdq | m=n, p=q Push a’s in stack. Pop a’s 
watching b’s. Now push c’s in stack. Pop c’s watching 
d’s. So it is context free language. 
 ambncpdq | m=n=p & p≠q Here three variables are 
dependent on each other. So not context free. 
• Not context free because comparison in stack can’t be 
done through multiplication operation. 
 ambncpdq | m+p = n+q, m-n = q-p First we will push a’s 
in the stack then we will pop a’s after watching b’s. 
 Then some of a’s might left in the stack. Now we will 
push c’s in the stack and then pop c’s by watching d’s. 
And then the remaining a’s will be popped off the stack 
by watching some more d’s. 
 And if no d’s is remaining and the stack is empty then 
the language is accepted by CFG. 
• ambncpdq | m=n, p=q Push a’s in stack. Pop a ’s 
watching b’s. Now push c’s in stack. Pop c’s watching 
d’s. So it is context free language. 
• ambncpdq | m=n=p &p≠q Here three variables are 
dependent on each other. So not context free. 
• Not context free because comparison in stack can’t be 
done through multiplication operation.


</details>

---


### Q20. [GATE CSE – 2022 MSQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following context-free grammar over the 
alphabet Σ = {a, b, c} with S as the start symbol: 
 S → abScT | abcT 
T → bT | b 
 Which one of the following represents the language 
generated by the above grammar?


- **(A)** {(ab)n (cb)n | n >= 1}

- **(B)** {(𝑎𝑏) 𝑛 𝑐𝑏 (m1) 𝑐𝑏 (𝑚2) ....... 𝑐𝑏(𝑚𝑛) |𝑛, 𝑚1 , 𝑚2 ,....., 𝑚𝑛 >= 1}

- **(C)** {(ab)n (cbm)n | m, n >= 1}

- **(D)** {(ab)n (cbn)m | m, n >= 1}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

T→ bT | b, this production will generate any number of 
b’s > 1 
S→ abScT | abcT, this production will generate equal 
number of “ab” and “c” and for every “abc” any number 
of b’s ( > 1) after “abc”. 
For Ex:


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let L1, L2 be any two context-free languages and R be 
any regular language. 
Then which of the following is/are CORRECT? 
I. L1 U L2is context free. 
II. L̅ 1 is context-free 
III. L1 – R is context – free. 
IV. L1 ∩ L2 is context – free


- **(A)** I, II and IV only

- **(B)** I and III only

- **(C)** II and IV only

- **(D)** I only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Option 1) L1 ∪ L2 is context-free 
As context-free languages are closed under union. So it is 
correct. 
Option 2) L̅ 1 is context-free 
L1 is a context-free language. According to the property, 
its complement can’t be context-free. 
Option 3) L1 – R is context-free 
As the difference of a context-free language with regular 
is context-free. So, it is correct. 
Option 4) L1 ∩ L2 is context-free 
<!-- PAGE 237 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
It violated the context -free language property. The 
intersection of two CFL’s is not CFL. So, it is incorrect.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Identify the language generated by the following 
grammar, where S is the start variable. 
S → XY 
X → aX|a 
Y → aYb|ϵ


- **(A)** {ambn | m >= n, n > 0}

- **(B)** {ambn  | m >= n, n > =0}

- **(C)** { ambn | m > n, n > =0 }

- **(D)** { ambn | m > n, n > 0 }



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

The production X→ aX | a can generate any number of 
a’s ≥ 1 and the production Y→ aYb | ϵ will generate 
equal number of a’s and b’s. 
So the production S→XY can generate any number of 
a’s (≥1) in the beginning (due to X) and then Y will 
generate equal number of a’s and b’s. 
So, the number of a’s will always be greater than 
number of b’s and number of b’s must be greater than 
or equal to 0 (as Y → ϵ, so number of b’s can be zero 
also). 
Hence the language is {ambn│m>n,n≥0}.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages over the alphabet Σ = 
{a, b, c}. Let L1 = {anbncm | m, n > 0} and L2 = 
{ambncn | m, n > 0}. 
Which of the following are context-free languages? 
I. (L1 ∪ L2) 
II. (L1 ∩ L2)


- **(A)** I only

- **(B)** II only

- **(C)** I and II

- **(D)** Neither I nor II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Strings in L1 = {ϵ, c, cc, ….,ab, aabb,…., abc, abcc,…, 
aabbc, aabbcc, aabbccc,..} 
Strings in L2 = {ϵ, a, aa, ….,bc, bbcc,…., abc, aabc,…, 
abbcc, aabbcc, aaabbcc,..} 
Strings in L1 ∪ L2 ={ϵ, a, aa, .., c, cc,.. ab, bc, …, aabb, 
bbcc,.., abc, abcc, aabc,…} 
Hence (L1 ∪ L2) will have either (number of a’s = 
equal to number of b’s) OR (number of b’s = number 
of c’s). 
Hence (L1 ∪ L2) is CFL. Strings in L1 ∩ L2 = {ϵ, abc, 
aabbcc, aaabbbccc,…} 
Hence (L1 ∩ L2) will have (number of a’s = number 
of b’s = number of c’ s) i.e., (L1 ∩ L2) = {a nbncn | n ≥ 
0} which is CSL.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages: 
L1 = {ap│p is a prime number} 
L2 = {anbmc2m | n ≥ 0, m ≥ 0} 
L3 = {anbnc2n │ n ≥ 0} 
L4 = {anbn │ n ≥ 1} 
Which of the following are CORRECT? 
I. L1 is context-free but not regular. 
II. L2 is not context-free. 
III. L3 is not context-free but recursive. 
IV. L4 is deterministic context-free.


- **(A)** I, II and IV only

- **(B)** II and III only

- **(C)** I and IV only

- **(D)** III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Option 1: 
L₁ = {aᵖ | p is a prime number} 
Prime numbers do not have fixed pattern. So, it is not 
possible to solve it using pushdown automaton. So, L₁ 
is not context-free language. 
Option 2: 
L₂ = {aⁿbᵐc²ᵐ | n ≥ 0, m ≥ 0} 
It can be solved easily using single stack. Comparison 
is done between b and c. We can make a pushdown 
automaton for this. So, L₂ is context-free language. 
Option 3: 
L₃ = {aⁿbⁿc²ⁿ | n ≥ 0} 
First comparison is between a and b, then between b and 
c, therefore two stacks are required. 
So, it is context -sensitive language. L₃ is recursive 
language. 
Option 4: 
L₄ = {aⁿbⁿ | n ≥ 1} 
First push a into a stack then pop a for each b from the 
stack. The given language is accepted by DPDA


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Language L1 is defined by the grammar: 
S1 → aS1b|ε 
Language L2 is defined by the grammar: 
S2 → abS2|ε 
Consider the following statements: 
P: L1 is regular 
Q: L2 is regular 
Which one of the following is TRUE?


- **(A)** Both P and Q are true

- **(B)** P is true and Q is false

- **(C)** P is false and Q is true

- **(D)** Both P and Q are false



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

The language L1 generated by the grammar contains 
equal number of a’s and b’s, but b’s comes after a’s. 
So, in order to compare equality between a’s and b’s 
memory (stack) is required. Hence, L1 is not regular. 
Moreover, L1 = {anbn | n ≥ 0} which is DCFL. 
The language L2 generated by grammar contains 
repetition of “ab” i.e. L2 = (ab)* which is clearly a 
regular language.


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages: 
L1 = {anbmcn+m: m, n > 1} 
L2 = {anbnc2n: n > 1} 
Which one of the following is TRUE?


- **(A)** Both L1 and L2 are context-free.

- **(B)** L1 is context-free while L2 is not context-free.

- **(C)** L2 is context-free while L1 is not context-free.

- **(D)** Neither L1 nor L2 is context-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Statement I: L₁ = {aⁿbᵐcⁿ⁺ᵐ : m, n ≥ 1} 
L₁ can be accepted easily by a single stack. 
First, push a’s into the stack, then push b’s into the stack, 
then read c’s and pop b’s. 
When no b’s are left on the stack, keep reading c’s and 
pop a’s. 
When no c’s are left in the input and the stack is empty, 
then the string is accepted by one stack. 
Hence, L₁ is a context-free language. 
Statement II: L₂ = {aⁿbⁿc2n : n ≥ 1} 
This language can’t be accepted by a single stack. 
When we push a’s into the stack and pop them with b’s, 
it satisfies the condition that the number of a’s = number 
of b’s, but we are left with an empty stack and c’s in the 
input. 
We can’t ensure that the number of c’s is double that of 
a’s and b’s. 
A pushdown automaton can’t remember the number of 
a’s for the third set of characters, i.e., c’s. 
<!-- PAGE 238 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
Hence, L₂ is a context -sensitive language but not a 
context-free language.


</details>

---


### Q27. [GATE CSE – 2017 SET-2 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the transition diagram of a PDA given below 
with input alphabet Σ = {a,b} and stack alphabet Γ = 
{X,Z}. Z is the initial stack symbol. Let L denote the 
language accepted by the PDA. 
 Which one of the following is TRUE?


- **(A)** L = {anbn | n>= 0} and is not accepted by any finite 
automata

- **(B)** L = {an| n >= 0} {anbn ∪ | n > =0} and is not accepted 
by any deterministic PDA.

- **(C)** L is not accepted by any Turning machine that halts 
on every input.

- **(D)** L = {an| n >= 0} {anbn ∪ | n > =0} and is deterministic 
context-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

In this PDA, we can give labels to states as q₀, q₁, q₂ 
where q₀ and q₂ are final states. 
This PDA accepts the string in two ways — 
i.e., by using q₀ as a final state and by using q₂ it 
accepts as an empty stack. 
Since q₀ is the initial as well as the final state, it can 
accept any number of a’s (including zero a’s). 
By using q₂ as the empty stack, it accepts strings that 
have an equal number of a’s and b’s (b’s come after 
a’s). 
Hence, L = {aⁿ | n ≥ 0} ∪ {aⁿbⁿ | n ≥ 0}.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following context-free grammars: 
G1: 
S → aS|B, 
B → b|bB 
G2: 
S → aA|bB, 
A → aA|B|ε, 
B → bB|ε. 
Which one of the following pairs of languages is 
generated by G1 and G2, respectively?


- **(A)** {ambn | m > 0 or n > 0} and {ambn | m > 0 and n > 0}

- **(B)** {ambn | m > 0 and n > 0} and {ambn | m > 0 or n >= 0}

- **(C)** {ambn | m >= 0 or n > 0} and {ambn| m > 0 and n > 0}

- **(D)** {ambn | m >= 0 and n > 0} and {ambn | m > 0 or n > 0}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

G₁ : S → aS | B, B → b | bB 
This grammar generates strings of type {b, ab, bb, aab, 
abb, bbb, aaab, …}. 
Here number of a’s can be 0 but number of b’s is 
always more than 0. From this option 1) and 2) are 
eliminated because these can’t generate number of a’s 
as 0. 
Now, grammar G₂ is: 
G₂ : S → aA | bB, A → aA | b | ε, B → b | ε 
This grammar generates string of type: {a, b, aa, ab, 
bb, aaa, aab, abb, bbb, …}. 
This grammar doesn’t generate null string — number 
of a’s and b’s are more than 0. 
So, only option 4) matches according to grammar G₁ 
and G₂. 
G₁ generates language of type: {aᵐbⁿ | m ≥ 0 and n > 0} 
G₂ generates language of type: {aᵐbⁿ | m > 0 or n > 0}


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the NPDA 〈Q = {q0, q1, q2}, Σ = {0, 1}, Γ = 
{0, 1, ⊥}, δ, q0, ⊥, F = {q2} 〉, where (as per usual 
convention) Q is the set of states, Σ is the input alphabet, 
Γ is stack alphabet, δ is the state transition function, q0 
is the initial state, ⊥ is the initial stack symbol, and F is 
the set of accepting states, The state transition i s as 
follows: 
  Which one of the following sequences must follow the 
string 101100 so that the overall string is accepted by 
the automaton?


- **(A)** 10110

- **(B)** 10010

- **(C)** 01010

- **(D)** 01001



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Here, in q₀ state, for a ‘1’, a ‘1’ is pushed into the stack 
and for a ‘0’, a ‘0’ is pushed into the stack. 
In q₁ state, for a ‘0’, a ‘1’ is popped and for a ‘1’, a ‘0’ 
is popped. 
It means when it finds a complement of the input 
character on top of the stack, then it pops one element 
from the top of the stack.


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the languages L1,L2 and L3 as given below: 
L1 = { 0p 1q | p, q ∈ N }, 
L2 = { 0p 1q | p, q ∈ N and p = q } and 
L3 = { 0p 1q 0r | p, q, r ∈ N and p = q = r }. 
Which of the following statements is NOT TRUE?


- **(A)** Push Down Automate (PDA) can be used to recognize 
L1 and L2

- **(B)** L1 is a regular language

- **(C)** All the three languages are context free

- **(D)** Turing machines can be used to recognize all the 
languages



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Statement I: L1 = {0p1q | p, q ∈ N}, 
Regular expression: 0⁺1⁺ 
Any number of 0's followed by any number of 1's. L1 
requires no stack. Hence L1 is regular. 
Every regular language is a context-free language. 
Statement II: L2 = {0p1q | p, q ∈ N and p = q} 
Context-Free Language: L2 = {0p1p | p ∈ N} 
The number of 0's is equal to the number of 1's. L2 
requires only one stack. Hence L2 is context -free 
language. 
Statement III: L3 = {0p1q0r | p, q, r ∈ N and p = q = r} 
Context-Sensitive Language: L3 = {0p1p0p | p ∈ N}. 
The number of 0's followed by the equal number of 1's 
followed by equal number of 0's. It depends on three 
symbols. L3 requires two stacks. Hence L3 is a context -
sensitive language. 
It is not a context-free language.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the languages 
L1 = {0 i1 j | i != j}. 
L2 = {0 i1 j | i = j}. 
L3 = {0 i1 j | i = 2j+1}. 
L4 = {0 i1 j | i!= 2j}. 
Which one of the following statements is true?


- **(A)** Only L2 is context free.

- **(B)** Only L2 and L3 are context free.

- **(C)** Only L1 and L2 are context free.

- **(D)** All are context free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

All languages L1, L2, L3 and L4 has only one 
comparison and it can be accepted by PDA (single stack), 
hence all are Context Free Languages.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is FALSE?


- **(A)** There is a unique minimal DFA for every regular 
language

- **(B)** Every NFA can be converted to an equivalent PDA.

- **(C)** Complement of every context-free language is recursive.

- **(D)** Every nondeterministic PDA can be converted to an 
equivalent deterministic PDA.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

NDPA is more powerful than DPDA, so they are not 
equivalent. Actually, DPDA is a proper subset of NDPA.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


S → aSa | bSb | a | b 
The language generated by the above grammar over the 
alphabet is the set of:


- **(A)** all palindromes

- **(B)** all odd length palindromes

- **(C)** strings that begin and end with the same symbol

- **(D)** all even length palindromes



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

String generated by this language is 
a,b,aba,bab,aabaa,..... All this strings are odd length 
palindromes.


</details>

---


### Q34. [GATE CSE – 2016 SET-1 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A CFG G is given with the following productions where 
S is the start symbol,A is a non-terminal and a and b are 
terminals. 
S → aS | A 
A →aAb | bAa | ∈ 
Which of the following strings is generated by the 
grammar above?


- **(A)** aabbaba

- **(B)** aabaaba

- **(C)** abababb

- **(D)** aabbaab



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

The string aabbaab is generated by first using 
the start symbol S to create a single leading a, 
<!-- PAGE 239 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
and then expanding the non-terminal A to 
build the rest of the string from the outside 
layers toward the center. 
Here is the exact step-by-step derivation 
sequence: 
𝑆 ⟹ 𝑎𝑆          (Using 𝑆 → 𝑎𝑆 to generate the first character) 
 ⟹ 𝑎𝐴          (Using 𝑆 → 𝐴 to switch to the 𝐴 productions) 
 ⟹ 𝑎𝑎𝐴𝑏          (Using 𝐴 → 𝑎𝐴𝑏 to match the outer 𝑎 … 𝑏 of 𝑎[𝐚]
 ⟹ 𝑎𝑎𝑏𝐴𝑎𝑏          (Using 𝐴 → 𝑏𝐴𝑎 to match the next layer 𝑏 … 𝑎 ∘
 ⟹ 𝑎𝑎𝑏𝑏𝐴𝑎𝑎𝑏         (Using 𝐴 → 𝑏𝐴𝑎 to match the innermost layer 𝑏.
 ⟹ 𝑎𝑎𝑏𝑏𝑎𝑎𝑏          (Using 𝐴 → 𝜖 to terminate the derivation) 
Because the production rules for A always insert 
pairs of terminals on the left and right flanks 
simultaneously, the derivation effectively 
evaluates the string from bo th ends toward the 
middle once S provides the necessary offset.


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a CFG with the following productions 
S → AA | B 
A →0A | A0 | 1 
B → 0B00 | 1 
S is the start symbol, A and B are non-terminals and 0 
and 1 are the terminals. The language generated by this 
grammar is :


- **(A)** { 0n102n∣n≥1}

- **(B)** {0i10j10k ∣i,j,k≥0}∪{ 0n102n∣n≥0}

- **(C)** {0i10j ∣i,j≥0}∪{ 0n102n∣n≥0}

- **(D)** The set of all strings over {0,1} containing at least 
two  0's



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

B→0B00∣1 generates 
{ 0n102n } 
S→AA, 
A→0A∣A0∣1 generates 0A0A →00A0A→00101 , 
which is there in only B and D choices. 
D is not the answer as " 00 " is not generated by the 
given grammar. So, only option left is B .


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Match the following: 
E. Checking that 
identifiers are 
declared before 
their use 
P. L={ anbmcndm ∣n≥1,m≥1} 
F. Number of formal 
parameters in the 
declaration of a 
function agrees with 
the number of actual 
parameters in a use of 
that function 
Q. X→XbX ∣ XcX ∣ dXf ∣ g 
G. Arithmetic 
expressions with 
matched pairs of 
parentheses 
R. L={wcw∣w∈ (a+b)* } 
H. Palindromes S. X→bXb ∣ cXc ∣ ϵ


- **(A)** E-P, F-R, G-Q, H-S.

- **(B)** E-R, F-P, G-S, H-Q

- **(C)** E-R, F-P, G-Q, H-S

- **(D)** E-P, F-R, G-S, H-Q



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

h- strings generated by this grammar satisfies the 
definition of an even length palindrome string. 
E-R is true because R is the only grammar that checks: 
what (w) has occurred earlier is present afterwards. 
This equals the definition of E


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages. 
L1={ai b j ck | i =j, k>=1} 
L2={ai b j | j=2i , i >=0} 
Which of the following is true?


- **(A)** L1 is not a CFL but L2 is

- **(B)** L1 ∩ L2 =  ϕ and L1 is non –regular

- **(C)** L1 U L2 is not a CFL but L2 is

- **(D)** There is a 4- state PDA that accepts L1 ,but there 
is no DPDA that accepts L2.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

L1 & L2 both are DCFL . 
L1 ∩ L2 =  ϕ because we have no string a i b j where 
i=j and i=2j for i,j>=1.


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the grammar given below: 
S → x B | yA 
A → x | xS | y A A 
B → y | yS | x B B 
Consider the following strings. 
i. xxyyx 
ii. xxyyxy 
iii. xyxy 
iv. yxxy 
v. yxx 
vi. xyx 
Which of the above strings are generated by the 
grammar?


- **(A)** i, ii and iii

- **(B)** ii, v and vi

- **(C)** ii, iii and iv

- **(D)** i, iii and iv



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

i. xxyyx , not generated 
ii. Xxyyxy ,  S → xB → xxBB → xxyyS → xxyyxB 
→ xxyyxy 
iii. xyxy , S → xB → xyS → xyxB → xyxy 
iv. yxxy , S → yA → yxS → yxxB → yxxy 
v. yxx , not generated 
vi. xyx , not generated 41.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The two grammars given below generate a language over 
the alphabet {x,y,z} 
G1: S → x | z | xS | zS | yB 
B → y | z | yB |zB 
G2: S →y | z | yS | zS | xB 
B →y | yS 
Which one of the following choices describes the 
properties satisfied by the strings in these languages?


- **(A)** G1 : No y appears before any x 
G2 : Every x is followed by at least one y.

- **(B)** G1 : No y appears before any x 
G2 : No x appears before any y

- **(C)** G1 : No y appears after any x 
G2 : Every x is followed by at least one y

- **(D)** G1 : No y appears after any x 
       G2 : Every y is followed by atleast one x



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Regular expression for G1: (x+z)++(x+z)*y(y+z)+ 
Regular expression for G2: (y+z+xy)+


</details>

---


### Q40. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let L be a context-free language and M a regular 
language. Then the language  L ∩ M is


- **(A)** always regular

- **(B)** never regular

- **(C)** always a deterministic context-free language

- **(D)** always a context-free language 
GATE IT – 2008 MCQ (2-MARKS)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

L1=Σ* is regular on {a,b}. 
L2={wwr ∣w∈(a+b)* } is CFL 
L1 ∩ L2 is CFL.


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 
L1 = {0n+m1n0m | n, m >= 0}, 
L2 = {0n+m1n+m0m | n, m >= 0} and 
L3 = {0n+m1n+m0n+m | n, m >= 0}. 
Which of these languages are NOT context free?


- **(A)** L1 only

- **(B)** L3 only

- **(C)** L1 and L2

- **(D)** L2 and L3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

L1 is context-free. We count the number of 1's and check 
if the remaining number of 's followed by 0's count to the 
initial number of  0's. 
L2 is not context -free. Here the number of 0's and the 
following 1's must be same, which can be checked using 
a PDA. But after that we must also ensure that the 
following number of 0's must be less than the previous 
count of 0's and 1's (otherwise n<0, whi ch violates the 
condition for acceptance) and we cannot do these two 
checks using a single PDA. 
L3 is not context -free as it is nothing but equal number of 0's 
followed by equal number of  1's followed by equal number of 
0's.


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In the context-free grammar below, is the start symbol, 
and are terminals, and denotes the empty string. 
S →aSAb | ∈ 
A → bA | ∈ 
The grammar generates the language


- **(A)** ((a+b)*b)

- **(B)** (ambn ∣ m≤n )

- **(C)** (ambn | m=n )

- **(D)** a*b*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

S generate equal number of a and b, and one A which can 
generate zero or more number of b's


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In the context-free grammar below,S is the start 
symbol,a and b are terminals, and ∈ denotes the empty 
string 
S →aSa | bSb | a | b | ∈ 
Which of the following strings is NOT generated by 
the grammar?


- **(A)** aaaa

- **(B)** baba

- **(C)** abba

- **(D)** babaaabab



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

L(G) is palindrome.


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For s ∈ (0+1)* let d(s) denote the decimal value of s (e.g. 
d(101)=5 ). Let L={s ∈(0+1)* ∣d(s) mod 5=2 and d(s) 
mod 7≠4} 
Which one of the following statements is true?


- **(A)** is recursively enumerable, but not recursive

- **(B)** is recursive, but not context-free

- **(C)** is context-free, but not regular

- **(D)** is regular



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

d(s)mod 5=2 have 5 states and state 2 as a final 
d(s)mod 7 !=4 have 7 states and all states except 4 is a 
final state. 
both are reg ular and regular languag e is closed under 
intersection.


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following languages is accepted by a non-
deterministic pushdown automaton (NPDA) but NOT 
by a deterministic NPDA?


- **(A)** { anbncn ∣ n≥0}

- **(B)** {albmcn | l ≠ m or m≠n }

- **(C)** {anbn | n>=0}

- **(D)** {ambn m,n >=0}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

A) is wrong as it is not context free 
C) is DCFL 
<!-- PAGE 240 -->
THEORY OF COMPUTATION 
THEORY OF COMPUTATION 
D) is regular


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the pushdown automaton (PDA) below which 
runs over the input alphabet (a,b,c). It has the stack 
alphabet { Z0,X } where Z0 is the bottom-of-stack marker. 
The set of states of the PDA is (s,t,u,f) where s is the start 
state and f is the final state. The PDA accepts by final state. 
The transitions of the PDA given below are depicted in a 
standard manner. For example, the transi tion (s,b,X) -
(t,XZ0) means that if the PDA is in state s and the symbol 
on the top of the stack is X, then it can read b from the 
input and move to state t after popping the top of stack and 
pushing the symbols Z0 and X (in that order) on the stack. 
(s,a,Z0) → (s,XXZ0) 
(s,∈,Z0) → (f,∈) 
(s,a,X) → (s,XXX) 
(s,b,X) → (t,∈) 
(t,b,X) → (t,∈) 
(t,c,X) → (u,∈) 
(u,c,X) → (u,∈) 
(u,∈,Z0) → (f,∈) 
The Language accepeted by the PDA is


- **(A)** . {albmcn | l=m=n }

- **(B)** . {albmcn | l=m}

- **(C)** . {albmcn | 2l=m+n}

- **(D)** . {albmcn | m=n}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

For every a we put two X in stack 
After that for every b we pop out one X 
After that for every c we pop out one X 
If all X are popped out then reached to final state f , 
mean for every b there is a, for every c there is a. 
a was followed by b and b was followed by c. 
means sum of no of b's and no of c's= twice of no of 
a's


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the languages: 
 L1 = {wwr | w ∈ {0, 1}*} 
 L2 = {w#w r | w ∈ {0, 1}*}, where # is a special   
symbol 
 L3 = {ww | w ∈ {0, 1}*} 
Which one of the following is TRUE?


- **(A)** L1 is a deterministic CFL

- **(B)** L2 is a deterministic CFL

- **(C)** L3 is a CFL, but not a deterministic CFL

- **(D)** L3 is a deterministic CFL



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

L1- CFL 
L2-DCFL 
L3-CSL


</details>

---


### Q48. [GATE CSE – 2006 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the languages: 
L1 = {anbncm | n, m > 0} and L2 = {anbmcm | n, m > 0}, 
Which one of the following statements is FALSE?


- **(A)** L1 ∩ L2 is a context-free language

- **(B)** L1 U L2 is a context-free language

- **(C)** L1 and L2 are context-free languages

- **(D)** L1 ∩ L2 is a context sensitive language



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

𝐿1 ∩ 𝐿2 is a context-free language → FALSE 
Taking the intersection means strings must satisfy the 
constraints of both languages simultaneously: 
𝐿1 ∩ 𝐿2 = {𝑎𝑛𝑏𝑛𝑐𝑛 ∣ 𝑛 > 0} 
This requires a simultaneous three -term comparison ( 
𝑛𝑎 = 𝑛𝑏 = 𝑛𝑐 ), which is a classic non -context-free 
language because a single LIFO stack cannot track 
both dependencies at once.


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let L be a regular language and M be a context -free 
language, both over the alphabet  Σ . Let L c and 
Mc denote the complements of L and M respectively. 
Which of the following statements about the language 
Lc U Mc is TRUE?


- **(A)** It is necessarily regular but not necessarily context -
free.

- **(B)** It is necessarily context-free.

- **(C)** It is necessarily non-regular.

- **(D)** None of the above



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D) Given


**Step-by-Step Explanation:**

 L is regular 
 M is context-free 
1. Lc → complement of regular ⇒ regular 
2. Mc → complement of CFL ⇒ not necessarily 
CFL 
Using De Morgan’s law: 
Lc ∪ Mc = (L ∩ M)ᶜ 
 Regular ∩ CFL = CFL 
 Complement of a CFL is not necessarily CFL 
So Lc ∪ Mc is not guaranteed to be regular or CFL.


</details>

---


### Q50. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The language {0n1n2n | 1<=n<=106} is


- **(A)** Regular

- **(B)** context-free but not regular

- **(C)** context-free but its complement is not context-free

- **(D)** not context free



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Regular  Since n is finite, we have a finite set of strings 
satisfying the given conditions.


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let P be a non -deterministic push -down automaton 
(NPDA) with exactly one state, q, and exactly one symbol 
Z, in its stack alphabet. State q is both the starting as well 
as the accepting state of the PDA. The stack is initialized 
with one Z before the start of the operation of the PDA. 
Let the input alphabet of the PDA be Σ. Let L(P) be the 
language accepted by the PDA by reading a string and 
reaching its accepting state. Let N{P} be the language 
accepted by the PDA by reading a string and emptying its 
stack. Which of the following statements is TRUE?


- **(A)** L(P) is necessarily Σ* but N{P} is not necessarily 
Σ*.

- **(B)** N{P} is necessarily Σ* but L(P) is not necessarily 
Σ*.

- **(C)** Both L(P) and N(P) are necessarily Σ*.

- **(D)** Neither L(P) nor N(P) are necessarily Σ*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

In NPDA we may have a dead configuration. This mean 
we may not give any transition to any alphabet from this 
state. We say that a string is accept ed if PDA is in final 
state after reading the final symbol in the string or after 
it has read '$' symbol denoting end of the string and it is 
in final state.  
<!-- PAGE 241 -->
UNDECIDABILITY


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is equivalent to the 
following assertion? 
Turing machine M decides the language L ⊆ {0,1}*.


- **(A)** . Turing machine M halts on all input strings in {0,1}*

- **(B)** . Turing machine M accepts all input strings in L

- **(C)** . Turing machine M rejects all input strings in {0,1}* − L

- **(D)** .Turing machine M accepts all input strings in L and 
rejects all input strings in {0,1}*−L



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

A Turing machine M decides a language L means: 
1. M halts on every input string (both in L and not in L). 
2. M accepts every string in L. 
3. M rejects every string not in L. 
In short: it must halt and give the correct yes/no 
answer for every input.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are undecidable?


- **(A)** Given two Turing machines M1, and M2, decide 
if L(M1) = L(M2).

- **(B)** Given a Turing machine M, decide if L(M) is 
regular.

- **(C)** Given a Turing machine M, decide if M accepts 
all strings.

- **(D)** Given a Turing machine M, decide if M takes 
more than 1073 steps on every string.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B,C)


**Step-by-Step Explanation:**

Option A: It is undecidable to check the equivalence of 
2 RELs. 
Option B: It is a non-trivial property of RELs hence it is 
Undecidable. 
Option C: It is also  a non-trivial property of RELs thus 
it is undecidable. 
Option D: If TM Runs at least 1073 steps on all inputs 
of length upto 1073 then it will behave the same on all 
inputs of all lengths and thus it will run at least 1073 
steps on all inputs . Thus it is decidable.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are TRUE?


- **(A)** Every subset of a recursively enumerable 
language is recursive.

- **(B)** If a language L and its complement I are both 
recursively enumerable, then L must be recursive.

- **(C)** Complement of a context-free language must be 
recursive.

- **(D)** If L1 and L2 are regular, then L1∩L2 must be 
deterministic context-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C,D)


**Step-by-Step Explanation:**

Option A: No language  is closed under subset operation. 
So subset on an RE language may or may not be REC. 
Therefore, option A is false.  
Option B: If L and L` are both RE ⇒ L is REC is a 
theorem and is true. 
Option C: Every CSL is recursive. So complement of 
CFL is Recursive and it is true.  
(CFL)C =  (CSL)C = CSL 
Option D: L1 = regular, L2= regular 
L1 ∩L2 = Regular ∩ Regular = Regular 
Now every regular language is a DCFL. So, option D is 
also true.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let <M> denote an encoding of an automaton M. Suppose 
that Σ = {0, 1}. Which of the following languages is/are 
NOT recursive?


- **(A)** L= {<M>| M is a DFA such that L(M) = ∅}

- **(B)** L = {<M>| M is a DFA such that L(M) = Σ*}

- **(C)** L= {<M>| M is a PDA such that L(M) = ∅}

- **(D)** L = {<M>| M is a PDA such that L(M) = Σ*



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

 For DFAs: 
o We can check emptiness of a DFA easily (by 
checking if any final state is reachable from 
the start). 
o We can also check if a DFA accepts all 
strings (by checking if every possible string 
leads to a final state) 
 Checking emptiness of PDA language is decidable — we 
can convert PDA → CFG and test if CFG generates any 
string. 
 Checking if PDA accepts all strings (L(M) = Σ)* is 
undecidable — there’s no algorithm to verify this for 
context-free languages.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following languages are undecidable? Note 
that <M> indicates encoding of the Turing machine M. 
L1 = <M> | L(M) = ϕ} 
L2 = {<M, w, q>| M on input w reaches state q in exactly 
100 steps} 
L3 = {<M>|L(M) is not recursive} 
L4 = {<M>|L(M) contains at least 21 members}?


- **(A)** L2 and L3 only

- **(B)** L1 and L3 only

- **(C)** L2, L3 and L4 only

- **(D)** L1, L3 and L4 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

L1 is undecidable as e mptiness problem of Turing 
machine is undecidable. 
L3 is undecidable since there is no algorithm to check 
whether a given TM accept recursive language. L4 is 
undecidable as it is similar to membership problem. 
Only L2 is decidable. We can check whether a given TM 
reach state q in exactly 100 steps or not. Here we have to 
check only upto 100 steps.There is no case of going to 
infinite loop.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following sets: 
S1. Set of all recursively enumerable languages over the 
alphabet {0,1} 
S2. Set of all syntactically valid C programs 
S3. Set of all languages over the alphabet {0,1} 
S4. Set of all non-regular languages over the alphabet 
{0,1} 
Which of the above sets are uncountable?


- **(A)** S2 and S3

- **(B)** S3 and S4

- **(C)** S1 and S4

- **(D)** S1 and S2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

S1 is countable, set of all recursively enumerable 
languages means set of all Turing machines and we can 
enumerate TM and have one to one correspondence 
between natural number. 
S2 is countable, since a valid C program represents a valid 
algorithm and every algorithm corresponds to a Turing 
Machine, so S2 is equivalent to set of all Turing Machines. 
S3 is is uncountable, it is proved by diagonalization 
method. 
S4 is uncountable, as set of non -regular languages will 
have languages which is set of all languages over alphabet 
{0,1} i.e., S3.


</details>

---


### Q7. [GATE CSE – 2022 MSQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The set of all recursively enumerable languages is:-


- **(A)** closed under complementation.

- **(B)** closed under intersection.

- **(C)** a subset of the set of all recursive languages.

- **(D)** an uncountable set.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Under intersection, recursive enumerable languages are 
closed. 
Recursive enumerable languages are not closed under 
Complementation. 
Recursive enumerable languages are a countable set, as 
every recursive enumerable language has a 
corresponding Turing Machine and set of all Turing 
Machine is countable. Recursive languages are subset of 
recursive enumerable languages.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following problems. L(G ) denotes the 
language generated by a grammar G. L(M) denotes the 
language accepted by a machine M.  
(I) For an unrestricted grammar G and a string w, 
whether w∈L(G). 
(II) Given a Turing machine M, whether L(M) is 
regular. 
(III)Given two grammar G1 and G2, whether L(G1) = 
L(G2). 
(IV) Given an NFA N, whether there is a deterministic 
PDA P such that N and P accept the same language. 
Which one of the following statement is correct?


- **(A)** Only I and II are undecidable

- **(B)** Only III is undecidable

- **(C)** Only II and IV are undecidable.

- **(D)** Only I, II and III are undecidable.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

IV is trivial property, as every regular language is CFL 
also, so a language which has NFA must be regular and 
for every regular language we can have a deterministic 
PDA (as every regular language is DCFL). 
I, II and III is undecidable.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let L(R) be the language represented by regular 
expression R. Let L(G) be the language generated by a 
context free grammar G. Let L(M) be the language 
accepted by a Turing machine M. 
Which of the following decision problems are 
undecidable? 
I. Given a regular expression R and a string w, is w ∈ 
L(R)? 
II. Given a context-free grammar G, is L(G) = ∅? 
III. Given a context-free grammar G, is L(G) = Σ* for 
some alphabet Σ? 
IV. Given a Turing machine M and a string w, is w 
∈L(M)?


- **(A)** I and IV only

- **(B)** II and III only

- **(C)** II, III and IV only

- **(D)** III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Since membership problem for regular language is 
decidable, so I is decidable. Emptiness problem for 
Context free language is decidable, so II is decidable. 
<!-- PAGE 246 -->
THEORY OF COMPUTATION 
Completeness problem (i.e. L(G) = Σ* for a CFG G) is 
undecidable. 
Membership problem for recursive enumerable 
language (as language of Turing Machine is recursive 
enumerable) is undecidable. So, IV is undecidable.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A and B be finite alphabets and let # be a symbol 
outside both A and B. Let f be a total function from A* 
to B*. We say f is computable if there exists a Turing 
machine M which given an input x  ∈  A*, always halts 
with f(x) on its tape. Let L f denote the language {x # 
f(x)│x ∈ A* }. Which of the following statements is 
true:


- **(A)** f is computable if and only if Lf is recursive.

- **(B)** f is computable if and only if Lf is recursively 
enumerable.

- **(C)** If f is computable then Lf is recursive, but not 
conversely.

- **(D)** If f is computable then Lf is recursively 
enumerable, but not conversely.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

The correct option is (a) 𝑓 is computable if and only if 𝐿𝑓 is 
recursive. 
Here is the step by step mathematical proof for both 
directions of the "if and only if" statement: 
Direction 1: If 𝑓 is computable, then 𝐿𝑓 is recursive ( ⇌ ) 
If 𝑓 is a computable total function, there exists a Tu ring 
machine 𝑀𝑓 that, when given an input 𝑥, is guaranteed to halt 
and leave 𝑓(𝑥) on its tape. We can construct a new decider 
Turing machine 𝑀𝐿 to decide the language 𝐿𝑓 = {𝑥# ∫  (𝑥) ∣
𝑥 ∈ 𝐴∗} as follows: 
1. Parse the input: Given an arbitrary input string 𝑤, 
check if it contains exactly one # symbol. If it 
doesn't, reject. 
2. Split the components: If it matches the format, 
split the string into the portion before the delimiter 
( 𝑥 ) and the portion after the delimiter ( 𝑦 ). So, 
𝑤 = 𝑥#𝑦. 
3. Simulate the funct ion: Run the computable 
machine 𝑀𝑓 on the input substring 𝑥. Because 𝑓 is 
a total computable function, 𝑀𝑓 is guaranteed to 
halt and output 𝑓(𝑥). 
4. Compare results: Compare the output 𝑓(𝑥) with 
the string 𝑦 from the input tape. 
 If 𝑓(𝑥) == 𝑦, then accept. 
 If 𝑓(𝑥) ≠ 𝑦, then reject. 
Since 𝑀𝑓 always halts, 𝑀𝐿 is guaranteed to always halt and 
make a definitive decision for any input string. Therefore, 𝐿𝑓 
is a recursive (decidable) language. 
Direction 2: If 𝐿𝑓 is recursive, then 𝑓 is computable ( ⇐ ) 
If 𝐿𝑓 is recursive, there exists a decider Turing machine 𝑀𝐿 
that can always determine whether a string of the form 𝑥#𝑦 
belongs to 𝐿𝑓 or not. We can construct a Turing machine 
𝑀𝑓 to compute the function 𝑓(𝑥) for any given i nput 𝑥 ∈
𝐴∗ : 
1. Generate candidate strings: Since the alphabet 𝐵 is finite, we 
can systematically generate all possible strings over 𝐵∗ 
in lexicographical order: 𝜖, 𝑏1, 𝑏2, … 
2. Test each candidate: For each generated string 𝑦 ∈ 𝐵∗, 
construct the combined string 𝑥#𝑦. 
3. Run the decider: Feed the string 𝑥#𝑦 into the decider 𝑀𝐿. 
 Since 𝑀𝐿 is a decider, it will always halt and either accept 
or reject. 
 If 𝑀𝐿 rejects, move to the next lexicographical string in 𝐵∗. 
 If 𝑀𝐿 accepts, it means 𝑦 = 𝑓(𝑥). Stop the search, clear 
the tape, leave 𝑦 on the tape, and halt. 
Because 𝑓 is a total function, a valid output string 𝑦 = 𝑓(𝑥) is 
guaranteed to exist somewhere in the lexicographical 
enumeration. Thus, 𝑀𝑓 will eventually find it, output it, and halt. 
This proves that 𝑓 is computable.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following types of languages: 
L1: Regular 
L2: Context-free 
L3: Recursive 
L4: Recursively enumerable. 
Which of the following is/are TRUE? 
I. L3' ∪ L4 is recursively enumerable . 
II. L2' ∪ L3 is recursive . 
III. L1* ∪ L2 is context-free . 
IV. L1 ∪ L2' is context-free.


- **(A)** I only

- **(B)** I and III only

- **(C)** I and IV only

- **(D)** I, II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

I.  𝐿3 ∪ 𝐿4 
𝐿3 is recursive, so 𝐿3 is also recursive (closed under 
complement), 
So, 𝐿3 is recursive enumerable. 
𝐿4 is recursive enumerable, 
so, 𝐿3 ∪ 𝐿4 is also recursive enumerable (closed under union). 
II. 𝐿2 ∪ 𝐿3 
𝐿2 is Context-free, so 𝐿2, may or may not be Context-free (not 
closed under complement), but definitely 𝐿2 is Recursive. 
𝐿3 is recursive. 
so 𝐿2 ∪ 𝐿3 is also recursive (closed under union). 
III. 𝐿1∗ ∩ 𝐿2 
𝐿1 is Regular, so 𝐿1∗  is also regular (closed under kleene star) 
𝐿2 is Context-free 
so, 𝐿1∗ ∩ 𝐿2 is also context-free (closed under intersection with 
regular). 
IV. 𝐿1 ∪ 𝐿2 
𝐿1 is regular. 
𝐿2 is context-free, so 𝐿2 may or may not be Context-free 
(not closed under complement). 
so, 𝐿1 ∪ 𝐿2 may or may not be Context-free.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following languages. 
L1 = { ⟨M⟩ | M takes at least 2016 steps on some input }, 
L2 = { ⟨M⟩ | M takes at least 2016 steps on all inputs }, 
and 
L3 = { ⟨M⟩ | M accepts ε }, 
Where for each Turing machine M, ⟨M⟩ denotes a specific 
encoding of M. 
Which one of the following is TRUE?


- **(A)** L1 is recursive and L2, L3 are not recursive

- **(B)** L2 is recursive and L1, L3 are not recursive

- **(C)** L1, L2 are recursive and L3 is not recursive

- **(D)** L1, L2, L3 are recursive



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

 L1 and L2 are recursive (decidable) because the 
condition is bounded by a fixed number of steps (2016). 
In 2016 steps, a Turing machine can read at most the 
first 2016 symbols on its tape. Because the alphabet is 
finite, there are a finite number of possible string prefixes 
of this length. A decider can simulate the machine on all 
these combinations for exactly 2016 steps. Since both 
the number of strings and the number of steps are finite, 
the simulation is guaranteed to halt and give an answer. 
 L3 is not recursive (undecidable) because checking 
whether a Turing machine accepts the empty string (ϵ) 
is the classic Blank Tape Acceptance Problem. 
According to Rice's Theorem, any non-trivial property 
about the language a Turing machine accepts cannot be 
decided by a general algorithm. 
<!-- PAGE 247 -->
THEORY OF COMPUTATION


</details>

---


### Q13. [GATE CSE – 2017 SET-2 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements. 
I. The complement of every Turing decidable language is 
Turing decidable 
II. There exists some language which is in NP but is not 
turing decidable 
III. If L is a language in NP, L is turing decidable 
Which of the above statements is/are true?


- **(A)** Only II

- **(B)** Only III

- **(C)** Only I and II

- **(D)** Only I and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Statement 1: True 
A decision problem is a problem that can be posed as 
a yes or no. If we can decide a problem, then its 
complement is also decidable. So, given statement is 
true. 
Statement 2: False 
NP class problems are  the problems which can be 
solved in polynomial time using non -deterministic 
machine. None of the NP class problem is 
undecidable. So, this statement is incorrect. 
Statement 3: True 
NP problem is undecidable.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For any two languages L1 and L2 such that L1 is 
context-free and L2 is recursively enumerable but not 
recursive, which of the following is/are necessarily 
true? 
1. L1' (complement of L1) is recursive.  
2. L2' (complement of L2) is recursive. 
3. L1' is context-free. 
4. L1' ∪ L2 is recursively enumerable.


- **(A)** I only

- **(B)** III only

- **(C)** III and IV only

- **(D)** I and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

1. L1 is context free: Eve ry context free language is 
also recursive and recursive languages are closed 
under complement. 
2. L2' (complement of L2) is recursive is false: 
Recursively enumerable languages are not closed 
under set difference or complementation. 
3. L1' is context -free: Context-free languages are not 
closed under complement, intersection, or difference. 
4. L1' ∪ L2 is recursively enumerable is true: 
Since L1' is recursive, it is also recursively enumerable 
and, Recursively enumerable languages are known as 
type-0 languages in the Chomsky hierarchy of formal 
languages. 
All regular, context -free, context -sensitive and 
recursive languages are recursively enumerable.)


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let <M> be the encoding of a Turing machine as a 
string over Σ = {0, 1} Let L = { <M> |M is a Turing 
machine that accepts a string of length 2014}. Then, L 
is :


- **(A)** decidable and recursively enumerable

- **(B)** undecidable but recursively enumerable

- **(C)** undecidable and not recursively enumerable

- **(D)** decidable but not recursively enumerable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

The language accepted by the Turing machine is 
recursively enumerable. It is undecidable as the Turing 
machine may halt or it may loop for the strings whose 
length is not equal to 2014. So, the correct answer is 
this option.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let A≤mB denotes that language A is mapping reducible 
(also known as many -to-one reducible) to language 
B.Which one of the following is FALSE?


- **(A)** If A≤mB and B is recursive then A is recursive.

- **(B)** If A≤mB and A is undecidable then B is 
undecidable.

- **(C)** If A≤mB and B is recursively enumerable then A 
is recursively enumerable

- **(D)** If A≤mB and B is not recursively enumerable then 
A is not recursively enumerable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

A ≤m B means language A is mapping reducible to 
language B. Thus, A cannot be harder than B. 
Since, A can be reduced to B, instead of deciding A we 
can now decide B. So, the first three options are 
correct. 
As B is not recursively enumerable, it doesn’t 
guarantee A is not recursively enumerable. Thus, if A 
≤m B and B is not recursively enumerab le then A is 
not recursively enumerable. Therefore, this option is 
correct.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let Σ be a finite non-empty alphabet and let 2Σ* be the 
power set of Σ*. Which one of the following is TRUE?


- **(A)** Both 2Σ* and Σ* are countable

- **(B)** 2Σ* is countable and Σ* is uncountable

- **(C)** 2Σ* is uncountable and Σ* is countable

- **(D)** Both 2Σ* and  Σ* are uncountable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

A countable set is one for which an enumeration 
technique exists to produce each of its elements, and it 
takes a finite number of steps to generate each element of 
the set using the enumeration procedure. 
If = {0,1} then Σ* ={ϵ, 0, 1, 00, 01, 10, 11, 0
 00,...............} 
Since we can enumerate all the strings of Σ*, hence Σ* is 
countable (countable infinite). 
While 2Σ* is uncountable, it has been already proved b y 
using Diagonalization method.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are undecidable? 
1. G is a CFG. Is L(G) = ϕ? 
2. G is a CFG. Is L(G) = Σ*? 
3. M is a Turing machine. Is L(M) regular? 
4. A is a DFA and N is an NFA. Is L(A) = L(N)?


- **(A)** 3 only

- **(B)** 3 and 4 only

- **(C)** 1, 2 and 3 only

- **(D)** 2 and 3 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

1. G is a CFG. Is L(G) = φ -> Decidable (Emptiness 
Problem) 
2. G is a CFG. Is L(G) = Σ* -> Undecidable 
(Completeness Problem) 
3. M is a Turing Machine. Is L (M) regular -> 
Undecidable 
4. A is a DFA and N is an NFA. Is L(A) = L(N) -> 
Decidable.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are FALSE? 
1. For every non-deterministic Turing machine, there 
exists an equivalent deterministic Turing machine. 
2. Turing recognizable languages are closed under union 
and complementation. 
3. Turing decidable languages are closed under 
intersection and complementation. 
4. Turing recognizable languages are closed under union 
and intersection.


- **(A)** 1 and 4 only

- **(B)** 1 and 3 only

- **(C)** 2 only

- **(D)** 3 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

1.Non-deterministic Turing Machine can be simulated by 
a deterministic Turing Machine with exponential time -
True 
2. Turing recognizable language are "not" closed under 
complementation. For any Turing recognizable language 
the Turing Machine ' T ' recognizing ' L ' may not 
terminate on inputs x ∉ L - False 
3. Turing decidable languages are CLOSED under union 
and compl ementation. It is easy to determine if turing 
machine is decidable -True .


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let L= L1 ∩ L2 , where L1 and L2 are languages as 
defined below: 
L1={ambmcnbn | m,n >=0} 
L2={aibjck | i,j,k >=0} 
Then is L


- **(A)** Not recursive

- **(B)** Regular

- **(C)** Context free but not regular

- **(D)** Recursively enumerable but not context free



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

 Language Types: 𝐿1 is a Context -Free Language (CFL) 
because it can be parsed using a stack to match the 
matching counts (𝑎𝑚𝑏𝑚 then 𝑐𝑛𝑏𝑛). 𝐿2 is a Regular 
Language defined by the ordering pattern 𝑎∗𝑏∗𝑐∗. 
 Intersection Constraint: Taking 𝐿1 ∩ 𝐿2 forces the strings 
to follow the 𝑎𝑚𝑏𝑚𝑐𝑛𝑏𝑛 structure while strictly obeying the 
𝑎∗𝑏∗𝑐∗ order. Because 𝐿2 forbids any 𝑏 from appearing 
after a 𝑐, the trailing 𝑏𝑛 block must be empty, forcing 𝑛 =
0. 
 Resulting Language: Substituting 𝑛 = 0 leaves 𝐿 =
{𝑎𝑚𝑏𝑚 ∣ 𝑚 ≥ 0}. This language is context-free but 
cannot be regular because a finite automaton lacks the 
memory to count and match the 𝑎 's and 𝑏 's. 
Correct Option: (c) Context free but not regular


</details>

---


### Q21. [GATE CSE – 2015 SET-1 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is false?


- **(A)** Every NFA can be converted to an equivalent DFA

- **(B)** Every non-deterministic Turing machine can be 
converted to an equivalent deterministic Turing 
machine

- **(C)** Every regular language is also a context-free 
language

- **(D)** Every subset of a recursively enumerable set is 
recursive



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

There exists a set of languages which is RE but not 
REC, this set is a subset of RE but is Not Recursive.  
Option D tells us that every subset of RE is REC this is 
false. Hence, option D is chosen. 
<!-- PAGE 248 -->
THEORY OF COMPUTATION


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is true for the language 
{ ap| p is prime} ?


- **(A)** It is not accepted by a Turing Machine

- **(B)** It is regular but not context-free

- **(C)** It is context-free but not regular

- **(D)** It is neither regular nor context-free, but accepted 
by a Turing machine



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

we have algorithm to generate prime numbers so 
turing machine possible


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following are decidable? 
I. Whether the intersection of two regular languages is 
infinite 
II. Whether a given context-free language is regular 
III. Whether two push-down automata accept the same 
language 
IV. Whether a given grammar is context-free


- **(A)** I and II

- **(B)** I and IV

- **(C)** II and III

- **(D)** II and IV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

I) Decidable 
II) The property of regularity is decidable for 
languages up to the DCFL class, but it becomes 
undecidable for general CFLs. 
III) undecidable 
IV) A grammar is Context -Free (CFG) if the left side 
of every rule contain s exactly one variable, while t he 
right side can be any combination of symbols.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The language L={ 0i21i ∣ i≥0 } over the alphabet {0,1,2} 
is:


- **(A)** not recursive

- **(B)** is recursive and is a deterministic CFL

- **(C)** is a regular language

- **(D)** is not a deterministic CFL but a CFL



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

𝐿 = {0𝑖21𝑖 ∣ 𝑖 ≥ 0} has only one comparison that 
can be done using a DPDA. Hence, its DCFL. 
Context free languages are a proper subset of 
Recursive Languages. ∴  it is recursive too.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following problems is undecidable?


- **(A)** Membership problem for CFGs

- **(B)** Ambiguity problem for CFGs

- **(C)** Finiteness problem for FSAs

- **(D)** Equivalence problem for FSAs



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

A. CYK algorithm 
B. undecidable 
C. decidable 
D. decidable


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let L1 be a regular language, L2 be a deterministic 
context-free language and L3 a recursively enumerable, 
but not recursive, language. Which one of the following 
statements is false?


- **(A)** L1 ∩ L2 is a deterministic CFL

- **(B)** L3 ∩ L1 is recursive

- **(C)** L1 U L2 is context free

- **(D)** L1 ∩ L2 ∩ L3 is recursively enumerable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

A. DCFL are closed under Intersection with Regular 
Languages 
B. L1 is recursive hence also decidable, L3 is RE but 
not Recursive hence it is undecidable. Intersection of 
Recursive language and Recursive Enumerable 
language is Recursive Enumerable language. 
C. L1 is regular hence also CFL and every DCFL is 
also CFL and All CFL are closed under Union. 
D     L1 is regular hence also RE; L2 is DCFL hence 
also RE; RE languages are closed under Intersection


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let L1 be a recursive language, and let L2 be a 
recursively enumerable but not a recursive language. 
Which one of the following is TRUE?


- **(A)** L1' is recursive and L2' is recursively enumerable

- **(B)** L1' is recursive and L2' is not recursively enumerable

- **(C)** L1' and L2' is recursively enumerable

- **(D)** L1' is recursively enumerable and L2' is recursive



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

REL: is not closed under complementation 
and Rec is closed under complementation.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider three decision problems P1, P2 and P3. It is 
known that P1 is decidable and P2 is undecidable.


- **(A)** P3 is decidable if P1 is reducible to P3.

- **(B)** P3 is undecidable if P3 is reducible to P2

- **(C)** P3 is undecidable if P2 is reducible to P3

- **(D)** P3 is decidable if P3 is reducible to P2's complement



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

A. If P1 is reducible to P3, then P3 is at least as hard 
as P1. So, no guarantee if P3 is decidable. 
B. If P3 is reducible to P2, then P3 cannot be harder than 
P2. But P2 being undecidable, this can't say P3 is 
undecidable. 
C. If P2 is reducible to P3, then P3 is at least as hard as 
P2. Since P2 is undecidable, this means P3 is also 
undecidable -hence the answer. 
D. Complement of an undecidable problem is 
undecidable. Now, redu cing to an undecidable problem 
can't prove P3 is decidable. 
<!-- PAGE 249 -->
COMPLIER DESIGN 
<!-- PAGE 251 -->
LEXICAL ANALYSIS 
Q1. A lexical analyzer uses the following token 
definitions  
𝑙𝑒𝑡𝑡𝑒𝑟 → [𝐴 – 𝑍 𝑎 − 𝑧]   
𝑑𝑖𝑔𝑖𝑡 → [0 − 9]   
𝑖𝑑 → 𝑙𝑒𝑡𝑡𝑒𝑟 (𝑙𝑒𝑡𝑡𝑒𝑟 | 𝑑𝑖𝑔𝑖𝑡)*   
𝑛𝑢𝑚𝑏𝑒𝑟 → 𝑑𝑖𝑔𝑖𝑡 +   
𝑤𝑠 → (𝑏𝑙𝑎𝑛𝑘 | 𝑡𝑎𝑏 | 𝑛𝑒𝑤𝑙𝑖𝑛𝑒) +  
 For the string given below,  
            𝑥1 23𝑚𝑚  78 𝑦  7𝑧  𝑧𝑧5  14𝐴  8𝐻   𝐴𝑎𝑌𝑐𝐷  
 the number of tokens (excluding 𝑤𝑠) that will be 
produced by the lexical analyzer is __________. 
(answer in integer)          
Q2. Which ONE of the following statements is FALSE 
regarding the symbol table? 
       (a) Symbol table is responsible for keeping track 
of  the scope of variables. 
 (b) Symbol tables can be implemented using a 
binary search tree. 
 (c) Symbol table is not required after the parsing 
phase. 
 (d) Symbol table is created during the lexical 
analysis phase.       
Q3. Consider the following two sets: 
P. Lexical Analyzer 1. Abstract Syntax Tree  
Q. Syntax Analyzer 2. Token 
R.Intermediate code 
Generator 
3. Parse Tree 
S. Code Optimizer 4. Constant Folding 
 Which one of the following options is the CORRECT 
match from Set X to Set Y? 
 (a) P-4; Q-1; R-3; S-2 
 (b) P-2; Q-3; R-1; S-4 
 (c) P-2; Q-1; R-3; S-4 
 (d) P-4; Q-3; R-2; S-1         
Q4. A lexical analyzer uses the following patterns to 
recognize three tokens T 1, T 2, and T 3 over the 
alphabet {a,b,c}. 
 T1 : a?(b|c)*a 
 T2 : b?(a|c)*b  
 T3 : c?(b|a)*c 
 Note that ‘x?’ means 0 or 1 occurrence of the symbol 
x. Note also that the analyzer outputs the token that 
matches the longest possible prefix. If the string 
bbaacabc is processed by the analyzer, which one of 
the following is the sequence of tokens it outputs?     
 (a) T1T2T3 
 (b) T1T1T3 
 (c) T2T1T3 
 (d) T3T3   
Q5. Match the following according to input (from the left 
column) to the compiler phase (in the right column) 
that processes it:    
(P) Syntax Tree (i) Code Generator 
(Q) Character Stream (ii) Syntax Analyzer 
(R)Intermediate 
Representation 
(iii)Semantic 
Analyzer 
(S) Token Stream (iv) Lexical Analyzer 
GATE CSE - 2025 MCQ SET - 1(1-MARKS) 
GATE CSE - 2024 MCQ SET - 2(1-MARKS) 
GATE CSE - 2018 MCQ (2-MARKS) 
GATE CSE - 2017 MCQ SET – 2 (2-MARKS) 
GATE CSE - 2026 NAT SET - 2(1-MARKS)


</details>

---

