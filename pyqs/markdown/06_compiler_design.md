# Compiler Design


> **Subject:** Compiler Design  

> **Pages in Book:** 252–292  

> **Total Modules:** 4


## Topics in this Subject


## Topic 1: COMPILER DESIGN


### Q6. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Match the following    
List-1 List-2 
P. Lexical analysis (i)Leftmost derivation       
Q. Top-down parsing                                            (ii) Type checking 
R. Semantic analysis                                             (iii)Regular expressions 
S.Runtime 
environments                                   
(iv)Activation records


- **(A)** P-i, Q-ii, R-iv, S-iii

- **(B)** P-iii, Q-i, R-ii, S-iv

- **(C)** P-ii, Q-iii, R-i, S-iv

- **(D)** P-iv, Q-i, R-ii, S-iii



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

1. Regular expressions are used in lexical analysis. 
 2. Top -down parsing has left most derivations of 
any string. 
 3. Type checking is done in semantic analysis. 
 4. Activation records are loaded into memory at 
runtime.


</details>

---


### Q7. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Match the following ?  
GROUP 1 GROUP 2 
P. Lexical analysis 1. Graph coloring 
Q. Parsing 2. DFA minimization 
R. Register allocation 3. Post- order traversal 
S. Expression evaluation 4. Production Tree


- **(A)** P-2, Q-3, R-1, S-4

- **(B)** P-2, Q-1, R-4, S-3

- **(C)** P-2, Q-4, R-1, S-3

- **(D)** P-2, Q-3, R-4, S-1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

1. Lexical analysis is related with FA and Regular 
expressions. 
 2. Expression can be evaluated with postfix 
traversals. 
 3. Register allocation can be done by graph 
colouring. 
 4. The parser constructs a production tree.


</details>

---


### Q8. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


In a compiler, keywords of a language are recognized 
during:-


- **(A)** Parsing of the program

- **(B)** the code generation

- **(C)** the lexical analysis of the program

- **(D)** dataflow analysis



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Keywords are recognized during lexical analysis.


</details>

---


### Q9. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


The lexical analysis for a modern computer language 
such as Java needs the power of which one of the 
following machine models in a necessary and 
sufficient sense?


- **(A)** Finite state automata

- **(B)** Deterministic pushdown automata

- **(C)** Non-Deterministic pushdown automata

- **(D)** Turing machine



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Lexical Analysis is implemented by finite automata


</details>

---


### Q10. [GATE CSE - 2016 MCQ SET – 2 (1-MARKS]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Which data structure in a compiler is used for 
managing information about variables and their 
attributes?


- **(A)** Abstract syntax tree

- **(B)** Symbol table

- **(C)** Semantic stack

- **(D)** Parse Table



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Symbol tables are data structures that are used by 
compilers to hold information about source -
program constructs. The information is collected 
incrementally by the analysis phases of a compiler 
and used by the synthesis phases to generate the 
target code. Entries in the  symbol table contain 
information about an identifier such as its character 
string (or lexeme), its type, its position in storage, 
and any other relevant information.


</details>

---


### Q11. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Match all items in Group 1 with correct options 
from those given in Group 2.        
Group 1 Group 2 
P. Regular expression 1. Syntax analysis 
Q. Pushdown automata 2. Code generation 
R. Dataflow analysis 3. Lexical analysis 
S. Register allocation 4. Code optimization


- **(A)** P-4. Q-1, R-2, S-3

- **(B)** P-3, Q-1, R-4, S-2

- **(C)** P-3, Q-4, R-1, S-2

- **(D)** P-2, Q-1, R-4, S-3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Regular expressions are used in lexical analysis. 
Pushdown automata is related to context free 
grammar which is related to syntax analysis.Dataflow 
analysis is done in code optimization. Register 
allocation is done in code generation.


</details>

---


### Q12. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Which of the following are true?     
(I) A programming  language which does not 
permit global variables of any kind and has 
no nesting of procedures/functions, but 
permits recursion can be implemented with 
static storage allocation 
(II) Multi-level access link (or display) 
arrangement is needed to arrange activation 
records only if the programming language 
being implemented has nesting of 
procedures/functions. 
(III) Recursion in programming languages cannot 
be implemented with dynamic storage 
allocation 
(IV) Nesting procedures/functions and recursion 
require a dynamic heap allocation scheme 
and cannot be implemented with a stack -
based allocation scheme for activation 
records 
(V) Programming languages which permit a 
function to return a function as its result cannot 
be implemented with a stack -based storage 
allocation scheme for activation records.


- **(A)** II  and V only

- **(B)** I, III and IV only

- **(C)** I, II and IV only

- **(D)** II, III and V only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

(I) False 
 Recursion requires dynamic allocation (activation 
records created at runtime). Static allocation cannot 
support multiple recursive calls. 
(II) True 
 Access links/display are needed only when there is 
nesting of functions to access non-local variables. 
(III) False 
 Recursion is implemented using dynamic storage 
allocation (typically stack), so this statement is 
incorrect. 
(IV) False 
 Both recursion and nested functions can be 
implemented using stack-based allocation, not 
necessarily heap. 
(V) TRUE: If a language allows a function to return 
another function as a result (returning a closure), the 
returned function might still need to reference the 
local variables of the function that created it. Under a 
stack-based allocation scheme, the outer functio n's 
activation record is immediately destroyed upon 
returning, leading to dangling references. Therefore, 
these languages require a heap -based allocation 
scheme for activation records so their lifetimes can 
outlive the execution order.


</details>

---


### Q13. [GATE CSE]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Consider line number 3 of the following C- program.  

```c
                  int main ( ) {                           /*Line 1 */    
                  int I, N;                             /*Line 2 */    
                  fro (I = 0, I < N, I++);         /*Line 3 */    
                     } 
 Identify the compiler's response about this line while 
creating the object-module
```


- **(A)** Both lexical and syntactic errors

- **(B)** Only a lexical error

- **(C)** Only syntactic errors

- **(D)** No compilation error



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In the given question, line  3 won't cause a lexical 
error or syntactic error. The statement will be treated 
as a function call with three arguments. Function 
definition being absent will cause link time error, but 
the question asks only for compile -time errors. 
So, (𝐷) must be the answer.


</details>

---


### Q14. [GATE CSE - 2009 MCQ (1-MARKS]


> **Topic:** COMPILER DESIGN | **Marks:** 2 | **Difficulty:** Medium


Consider the following C-program:   
 double foo (double); /* Line 1 */ 

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
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

When a function is called without being 
defined, 𝐶 compiler assumes it to return " 𝑖𝑛𝑡" but 
here foo is returning "double" and hence the compiler 
will throw type mis-match error.   
<!-- PAGE 256 -->
SYNTAX ANALYZER


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are true?


- **(A)** LL(1) parser uses backtracking

- **(B)** For a grammar to be LL(1), it must be left -
recursive

- **(C)** For a grammar to be LL(1), it must be left -
factored

- **(D)** The LL(1) parsers are more powerful than 
the SLR parsers



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A. LL(1) parser uses backtracking 
 False. 
 LL(1) parsing is predictive parsing and does not use 
backtracking. 
 B. For a grammar to be LL(1), it must be left-
recursive 
 False. 
 An LL(1) grammar must be free from left recursion, 
not left-recursive. 
 C. For a grammar to be LL(1), it must be left-
factored 
 True. 
 LL(1) parsing requires that the grammar be left-
factored so that the parser can decide the production 
using one lookahead symbol. 
 D. The LL(1) parsers are more powerful than the 
SLR parsers. 
 False.SLR parsers (bottom-up) are more powerful 
than LL(1) parsers.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C statements:  
             char *str1 = "Hello; /* Statement S1 */  
             char *str2 = "Hello;"; /* Statement S2 */ 
              int *str3 = "Hello"; /* Statement S3 */  
 Which of the following options is/are correct?


- **(A)** S1 and S2 have syntactic errors

- **(B)** S2 has a lexical error and S3 has a syntactic 
error

- **(C)** S1 has a lexical error and S3 has a semantic 
error

- **(D)** S1 has a syntactic error and S3 has a 
semantic error



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

char *str1 = "Hello; 
 The string literal is not closed with a double quote ("). 
Because of the missing closing quotation mark, the 
compiler cannot correctly recognize the toke n. 
Hence, S1 has a lexical error. 
 S2: 
 char *str2 = "Hello;"; 
 The string "Hello;" is properly enclosed in double 
quotes and assigning it to char * is valid in C. Hence, 
S2 has no error. 
 S3: 
 int *str3 = "Hello"; 
<!-- PAGE 265 -->
COMPILER DESIGN 
 The string "Hello" is of type char * , but it is 
assigned to a variable of type int *. This causes a 
type mismatch, which is a semantic error. 
 Therefore: 
● S1 → Lexical Error 
● S2 → No Error 
 S3 → Semantic Error


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the canonical 𝐿𝑅(0) parsing of the 
grammar below using terminals {𝑎, 𝑏, 𝑐} and non-
terminals {𝐴, 𝐵, 𝐶, 𝑆} with 𝑆 as the start symbol.  
                    𝑆 → 𝐴𝐶𝐵  
                   𝐴 → 𝑎𝐴 | 𝜖  
                   𝐶 → 𝑐𝐶 | 𝜖  
                  𝐵 → 𝑏𝐵 | 𝑏  
 Which one of the following options gives the 
number of shift -reduce conflicts that will occur in 
the 𝐿𝑅(0) ACTION table?


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Grammar: 
 S → A C B 
 A → aA | ε 
 C → cC | ε 
 B → bB | b 
 In LR(0) parsing, conflicts occur when a state 
contains: 
● a shift item (dot before a terminal), and  
● a reduce item (dot at the end of a production).  
 Here, both A → ε and C → ε produce reduce 
items in LR(0) states. 
 At the same time, the grammar also allows shift 
actions for terminals a and c due to productions  
 A → aA and C → cC. 
 Thus several states contain both shift and reduce 
possibilities, leading to shift-reduce conflicts. 
 After constructing the canonical LR (0) item sets 
and the ACTION table, the total number of shift -
reduce conflicts = 5.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider two grammars G₁ and G₂ with the 
production rules given below:         
 G1: S → if E then S | if E then S else S | a 
        E → b 
 G2: S → if E then S | M 
        M → if E then M else S | c 
        E → b 
 where if, then, else, a, b, c are the terminals. 
 Which of the following option(s) is/are CORRECT?


- **(A)** G1 is not LL(1) and G2 is LL(1).

- **(B)** G1 is LL(1) and G2 is not LL(1).

- **(C)** G1 and G2 are not LL(1).

- **(D)** G1 and G2 are ambiguous.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C,D


**Step-by-Step Explanation:**

A grammar is not LL(1) iff: 
● It is an ambiguous grammar 
● It is left-recursive 
● It has common prefixes 
 Both the grammars G₁ and G₂ have common prefixes 
like "if E then S" and "if E then", as well as ambiguity 
due to the dangling else problem. 
 So, the given grammars G₁ and G₂ are not LL(1) and 
ambiguous.


</details>

---


### Q5. [GATE CSE - 2026 MSQ SET - 1(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statement(s) is/are TRUE 
while computing First and Follow during top -down 
parsing by a compiler?


- **(A)** For a production A→ϵ, ϵ epsilon will be added 
to First(A)

- **(B)** If there is any input right end marker, it will be 
added to First(S), where S is   the start symbol.

- **(C)** For a production A→ϵ, ϵ epsilon will be added 
to Follow(A).

- **(D)** If there is any input right end marker, it will be 
added to Follow(S), where S is the start 
symbol.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,D


**Step-by-Step Explanation:**

1.  If a production is of the form 𝐴 →
𝜖, then 𝐹𝑖𝑟𝑠𝑡(𝐴) = 𝜖. 
2. The end-of-input marker ($) is added 
to 𝐹𝑜𝑙𝑙𝑜𝑤(𝑆), where 𝑆 is the start symbol. 
3.  𝜖 is never added to Follow sets. 
4.  The end marker is not added to First sets.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar G, with S as the 
start symbol. The grammar G has three incomplete 
productions denoted by (1), (2), and (3): 
𝑆 → 𝑑𝑎𝑇 | (1) 
 𝑇 → 𝑎𝑆 | 𝑏𝑇 | (2) 
 𝑅 → (3) | 𝜖 
 The set of terminals is {𝑎, 𝑏, 𝑐, 𝑑, 𝑓}. The FIRST 
and FOLLOW sets of the different non-terminals 
are as follows: 
 FIRST(𝑆) = {𝑐, 𝑑, 𝑓}, FIRST(𝑇) = {𝑎, 𝑏, 𝜖}, 
FIRST(𝑅) = {𝑐, 𝜖} 
 FOLLOW(𝑆) = FOLLOW(𝑇) = {𝑐, 𝑓, $}, 
FOLLOW(𝑅) = {𝑓}


- **(A)** (1) S→Rf  (2) T→𝜖  (3) R→cTR

- **(B)** (1) S→fR  (2) T→𝜖  (3) R→cTR

- **(C)** (1)  S→fR  (2) T→cT (3)  R→cR

- **(D)** (1)  S→Rf  (2)  T→cT (3)  R→cR



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Option (C, D) is incorrect as if we substitute T → cT in 
(2) it gives FIRST(T) = a, b, c which is wrong because 
in question it is given that FIRST(T) = a, b, ϵ 
Option (B) is incorrect as if we substitute S → fR in 
(1) it gives FIRST(S) = f, d which is wrong because 
terminal c is missing. 
So correct Option is (A). 
 FIRST FOLLOW 
𝑆 → 𝑑𝑎𝑇 ∣ 𝑅𝑓 {𝑐, 𝑑, 𝑓} {$, 𝑐, 𝑓} 
𝑇 → 𝑎𝑆|𝑏𝑆|𝜀 {𝑎, 𝑏, 𝜀} {$, 𝑐, 𝑓} 
𝑅 → 𝑐𝑇𝑅 ∣ 𝜀 {𝑐, 𝜀} {𝑓} 
<!-- PAGE 266 -->
COMPILER DESIGN


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are Bottom-Up Parser(s)


- **(A)** Shift-reduce Parser

- **(B)** Predictive Parser

- **(C)** LL(1) Parser

- **(D)** LR Parser



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,D


**Step-by-Step Explanation:**

8. ANSWER:- 6 
Reason: 
- Precedence (highest → lowest): + > − > * > / 
- Associativity: 
+ → Left 
− → Right 
* → Right 
/ → Right 
 Given expression: 
3 + 1 + 5 * 2 / 7 + 2 − 4 − 7 − 6 / 2 
Evaluating as per given precedence and 
associativity: 
((((3+1)+5)*2)/(((7+2)-(4-(7-6)))/2)) 
 =6


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the operator precedence and associativity 
rules for the integer arithmetic operators given in 
the table below. 
Operator Precedence Associativity 
+ Highest Left 
- High Right 
∗ Medium Right 
/ Low Right 
The value of the expression 3 + 1 + 5 ∗ 2/7 +
          2 −  4 − 7 − 6/2 as per the above rules is ___


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 6


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the augmented grammar with { +, *, (, ), id 
} as the set of terminals.  
𝑆′ → 𝑆
𝑆 → 𝑆 + 𝑅 ∣ 𝑅
𝑅 → 𝑅 ∗ 𝑃 ∣ 𝑃
𝑃 → (𝑆) ∣ 𝑖𝑑
 If I0 is the set of two LR(0) items 
{[S′→S.],[S→S.+R]} then goto(closure ( I0 ),+) 
contains exactly _____ items.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

10. ANSWER:- D 
 (a) FALSE. The LALR(1) parser for a grammar G 
may have reduce-reduce conflict if the LR(1) parser 
for G does not have reduce-reduce conflict. 
 (b) FALSE. Symbol tables can be accessed in all 
phases of the compiler. 
 (c) FALSE. Data flow analysis is required to improve 
the code but not necessary for run -time memory 
management. 
 (d) TRUE. Every LR(1) CFG is going to generate 
DCFL.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is TRUE?


- **(A)** The LALR(1) parser for a grammar G cannot 
have reduce – reduce conflict if the LR(1) 
parser for G does not have reduce – reduce 
conflict.

- **(B)** Symbol table is accessed only during the 
lexical analysis phase.

- **(C)** Data flow analysis is necessary for run -time 
memory management.

- **(D)** LR(1) parsing is sufficient for deterministic 
context – free languages



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** d


</details>

---


### Q11. [GATE CSE - 2024 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following context -free grammar where 
the set of terminals is {a,b,c,d,f}. 
𝑆 → 𝑑𝑎𝑇 ∣ 𝑅𝑓
𝑇 → 𝑎𝑆|𝑏𝑎𝑇|𝜀
𝑅 → 𝑐𝑎𝑇𝑅 ∣ 𝜀
          The following is a partially-filled LL(1) parsing table. 
 𝑎 𝑏 𝑐 𝑑 𝑓 $ 
S   (1) S → 𝑑𝑎 T (2)  
T T → 𝑎 S  T → 𝑏𝑎 T (3)  T → 𝜖 (4) 
R   R → 𝑐𝑎TR  R → 𝜖  
 Which one of the following choices represents the 
correct combination for the numbered cells in the 
parsing table (“blank” denotes that the corresponding 
cell is empty)?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Production FIRST FOLLOW 
S → daT | Rf {d, c, f} {c, f, $} 
T → aS | baT | ε {a, b, ε} {c, f, $} 
R → caTR | ε {c, ε} {f} 
 a b c d f $ 
S   S → Rf (1) S → daT S → Rf (2)  
T T → aS T → baT T → ε (3)  T → ε T → ε (4) 
R   R → caTR  R → ε


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements. 
 S1: Every SLR(1) grammar is unambiguous but 
there are certain unambiguous grammars  that are 
not SLR(1). 
 S2 : For any context-free grammar, there is a parser 
that takes at most O(n 3 ) time to parse a string of 
length n.  
 Which one of the following options is correct?


- **(A)** S1 is true and S2 is false

- **(B)** S1 is false and S2 is false

- **(C)** S1 is false and S2 is true

- **(D)** S1 is true and S2 is true



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

S1 : Every SLR(1) is unambiguous but there are certain 
unambiguous grammars that are not SLR (1). 
 S1 is True. 
 Every SLR is unambiguous but unambiguous need 
not be SLR. 
 S2 : For any F = G, there is a parser that takes atmost 
O(n3) time to parse a string of length n. 
 S2 is True. 
 CYK algorithms exist to parse a string of length n in 
O(n3). Bottom-up parser exists. 
<!-- PAGE 267 -->
COMPILER DESIGN


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar. 
 S →aSB| d 
 B →b 
 The number of reduction steps taken by a bottom -
up parser while accepting the string aaadbbb is 
_______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

14. ANSWER:- 5 
 I0 = CLOSURE ({[S' → ·S]}) 
 Hence, the set GOTO (I0 , 〈 ) has 5 items


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the augmented grammar given below: 
     S' → S 
     S → 〈L〉 | id 
     L → L, S | S 
 Let I0 = CLOSURE ({[S' → ·S]}). The number of 
items in the set GOTO (I0 , 〈 ) is: _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following kinds of derivation is 
used by LR parsers?


- **(A)** Leftmost in reverse

- **(B)** Rightmost in reverse

- **(C)** Leftmost

- **(D)** Rightmost



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

LR parsers have Rightmost derivation in reverse.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following parse tree for the expression 
a#b$c$d#e#f, involving two binary operators $ and #.  
 Which one of the following is correct for the given 
parse tree?


- **(A)** $ has higher precedence and is left associative; 
# is right associative

- **(B)** # has higher precedence and is left associative; 
$ is right associative

- **(C)** $ has higher precedence and is left associative; 
# is left associative

- **(D)** # has higher precedence and is right 
associative; $ is left associative



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Since $ will be evaluated before # so $ has higher 
precedence and the left $ i.e., in b$c$d the left “$” 
(i.e., b$c) will be evaluated first so it is left 
associative, whereas # is right associative (as in 
d#e#f) , the right one (i.e., e#f) will be evaluated 
first.


</details>

---


### Q17. [GATE CSE - 2021 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is FALSE?


- **(A)** Context-free grammar can be used to specify 
both lexical and syntax rules.

- **(B)** Type checking is done before parsing.

- **(C)** High-level language programs can be 
translated to different Intermediate 
Representations.

- **(D)** Arguments to a function can be passed using 
the program stack.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Type checking is done in semantic analysis phase 
after syntax analysis phase (i.e., after parsing).


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about parser 
is/are CORRECT?           
        I. Canonical LR is more powerful than SLR. 
 II. SLR is more powerful than LALR. 
 III. SLR is more powerful than Canonical LR.


- **(A)** I only

- **(B)** II only

- **(C)** III only

- **(D)** II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Canonical LR is more powerful than SLR as every 
grammar which can be parsed by SLR parser, can also 
be parsed by CLR parser. 
 The power in increasing order is: 
           LR(0) < SLR < LALR < CLR


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar:           
𝑃 → 𝑥𝑄𝑅𝑆
𝑄 → 𝑦𝑧 ∣ 𝑧
𝑅 → 𝑤 ∣ 𝜀
𝑆 → 𝑦
         What is FOLLOW(Q)?


- **(A)** {R}

- **(B)** {w}

- **(C)** {w, y}

- **(D)** {w, $}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

In the production: P → xQRS, 
           FOLLOW (Q) = FIRST (R) 
 FIRST (R) = {w, ϵ} Since FIRST (R) = { ϵ}, so 
FOLLOW (Q) → {w} ∪ FIRST(S) 
            FIRST(S) = {y} 
 So, FOLLOW (Q) = {w, y}


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar: 
            stmt    → if expr then expr else expr; stmt|𝑂` 
            expr    →  term relop term | term 
            term    →  id | number 
             id        →  a | b |  c 
           number  → [0-9] 
 where relop is a relational operator (e.g., <, >, …), 
𝑂 ` refers to the empty statement, and if, then, else 
are terminals. 
 Consider a program P following the above 
grammar containing ten if terminals. The number 
of control flow paths in P is ________. For 
example, the program 
  if e1 then e2 else e3  
 has 2 control flow paths, e1  → e2 and e1  → e3


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1024


**Step-by-Step Explanation:**

Since the program has ten if terminals, and each 
contributes two independent paths, the total number 
of control flow paths is the product of the number of 
paths for each if statement. 
 The total number of paths is 2*2*2*2*2*2*2*2*2*2, 
which equals 210.       
<!-- PAGE 268 -->
COMPILER DESIGN


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following expression grammar G: 
 E → E - T | T 
 T → T + F | F    
 F → (E) | id 
 Which of the following grammars is not left 
recursive, but is equivalent to G?


- **(A)** E → E – T | T 
           T → T  + F | F 
           F → (E) | id

- **(B)** E →T E’ 
        E’→ – TE’ | ε 
        T → T + F | F 
        F → (E) | id

- **(C)** E → TX 
        X →–TX | ε 
        T → FY 
        Y → +FY | ε 
        F → (E) | id

- **(D)** E → TX | (TX) 
        X → –TX | +TX | ε 
        T → id



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Consider the production (given below) which has 
left recursion. 
            S→Sα | β 
 The equivalent production (after removing left 
recursion) is 
           S→βS1 
           S1→αS1 | ϵ 
 Hence after removing left recursion from: E→ E-T 
| T, here α = -T and β= T 
 E→TE1 
 E1→ -TE1 | ϵ 
 After removing left recursion from: T→T+F | F, 
here α=+F and β=F 
 T→FT1 
 T1→ +FT1 | ϵ 
 Replace E1 = X and T1 = Y 
 We have, 
 E→TX 
 X→-TX | ϵ 
 T→FY 
 Y→+FY | ϵ 
 F→(E)| id


</details>

---


### Q22. [GATE CSE – 2017 MCQ SET – 2 (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following grammars is free from 
left recursion?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Reason: - A grammar is left recursive if there exists 
a derivation: 
  A ⇒ Aα (i.e., a non -terminal derives itself as 
leftmost symbol).  
 Option (A): A → Aa → direct left recursion  
 Hence, left recursive. 
  Option (B):  
 S → Ab | Bb | c  
 A → Bd | ε 
  B → e  
 No production leads to left recursion (direct or 
indirect). Hence, left recursion free.  
 Option (C): 
  A → Sc and S → Aa  
 So, A ⇒ Sc ⇒ Aa c ⇒ A...  
 Indirect left recursion exists. 
  Hence, left recursive.  
 Option (D): 
  A → Bd and B → Ae  
 So, A ⇒ Bd ⇒ Ae d ⇒ A...  
 Indirect left recursion exists.  
 Hence, left recursive.  
 Thus, only option (B) is free from left recursion.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is True at any valid 
state in shift-reduce parsing?


- **(A)** Viable prefixes appear only at the bottom of 
the stack and not inside

- **(B)** Viable prefixes appear only at the top of the 
stack and not inside

- **(C)** The stack contains only a set of viable 
prefixes

- **(D)** The stack never contains viable prefixes



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A handle is actually the one which is always on the 
top of the stack. A viable prefix (prefix of the Right-
hand side of a production or productions), is actually 
a prefix of the handle and so can never extend past the 
right end of the handle (i.e. the top of the stack).


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Among simple LR (SLR), canonical LR, and look-
ahead LR (LALR), which of the following pairs 
identify the method that is very easy to implement 
and the method that is the most powerful, in that 
order?


- **(A)** SLR, LALR

- **(B)** Conical LR, LALR

- **(C)** SLR, conical LR

- **(D)** LALR, conical LR



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

SLR is very easy to implement and CLR is the most 
powerful method. 
               SLR < LALR < Canonical LR


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar G. 
 S → F | H 
 F → p | c 
 H →d | c 
 Where S, F and H are non -terminal symbols, p, d 
and c are terminal symbols. Which of the following 
statement(s) is/are correct? 
 S1: LL(1) can parse all strings that are generated 
using grammar G. 
 S2: LR(1) can parse all strings that are generated 
using grammar.


- **(A)** Only S1

- **(B)** Only S2

- **(C)** Both S1 and S2

- **(D)** Neither S1 nor S2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

For LL(1), 
 For first production 
 So, there is 'c' common in both the first(s) in the 
production of S. So not LL(1). 
<!-- PAGE 269 -->
COMPILER DESIGN 
 Since R-R conflict is present. So, not LR(1). 
 or 
 Given CFG is ambiguous. So, it can not be parsed 
by both LL(1) and LR(1).


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the expression tree shown. Each leaf represents a 
numerical value, which can either be 0 or 1. Over all 
possible choices of the  values at the leaves, the maximum 
possible value of the expression represented by the tree 
is __________ ,


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

- Leaf values can be 0 or 1. 
  - Choose values to maximize the entire expression. 
selection: 11011011


</details>

---


### Q27. [GATE CSE – 2015 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A canonical set of items is given below: 
 S → L.  > R 
 Q → R. 
 On input symbol < the set has:-


- **(A)** a shift -reduce conflict and a reduce -reduce 
conflict.

- **(B)** a shift-reduce conflict but not a reduce -reduce 
conflict.

- **(C)** a reduce-reduce conflict but not a shift -reduce 
conflict.

- **(D)** neither a shift -reduce nor a reduce -reduce 
conflict.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

< is not possible to read from the given set of items, 
so no conflict. 
 so, we need (n − 1) reductions in total.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the grammar defined by the following 
production rules, with two operators * and + 
 S → T * P 
 T → U | T * U 
 P → Q + P | Q 
 Q → Id 
 U → Id 
 Which one of the following is TRUE?


- **(A)** + is left associative, while * is right 
associative

- **(B)** + is right associative, while * is left 
associative

- **(C)** Both + and * are right associative

- **(D)** Both + and * are left associative



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

In production: T ⟶ T * U, since T is left recursive, 
hence * is left associative. 
          P ⟶ Q + P, here P is right recursive, so + is right 
associative.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two sets of LR(1) items of 
an LR(1) grammar. 
X→c. X, c/d                             X→ c. X, $                            
X-> .cX, c/d  X→ .cX, $ 
X→ .d, c/d  X→ .d, $ 
 Which of the following statements related to 
merging of the two sets in the corresponding LALR 
parser is/are FALSE? 
 1. Cannot be merged since look ahead is different. 
 2. Can be merged but will result in S-R conflict. 
 3. Can be merged but will result in RR conflict. 
 4. Cannot be merged since goto on c will lead to 
two different sets.


- **(A)** 1 only

- **(B)** 2 only

- **(C)** 1 and 4 only

- **(D)** 1, 2, 3 and 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Statement 1 is false since the two sets in LR(1) 
items can be combined if they only differ in look 
ahead symbols. Because there is no reduced move 
in the specified LR(1) items, there will be no SR 
conflict after merging, and so statements 2 and 3  
are incorrect. 
 Statement 4 is also wrong, because goto is carried 
on Non -Terminals symbols, not on terminal 
symbols, and c is a terminal symbol. 
 Hence all statements are false


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the maximum number of reduce moves that 
can be taken by a bottom -up parser for a grammar 
with no epsilon-and unit-production (i.e. of type  
 A → ε and A → a) to parse a string with n tokens?


- **(A)** n/2

- **(B)** n–1

- **(C)** 2n–1

- **(D)** 2n



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Given the custom constraint in the question where both 
𝐴 → 𝜖 and 𝐴 → 𝑎 are forbidden, the right-hand side of 
every production rule must contain at least two symbols 
(either two terminals, two non-terminals, or a mix). 
 Each reduction step replaces a minimum of 2 
symbols on the stack with 1 non-terminal symbol. 
 This means every single reduction move 
decreases the total number of symbols on the 
stack by exactly 1(2 − 1 = 1). 
 To reduce an initial string of 𝑛 tokens down to a 
single start symbol (1), the total number of 
symbols must decrease by 𝑛 − 1. 
Since each reduction reduces the symbol count by 1 , it 
takes exactly 𝑛 − 1 reduce moves.


</details>

---


### Q31. [GATE CSE – 2014 MCQ SET - 2(1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For the grammar below, a partial LL(1) parsing table 
is also presented along with the grammar. Entries that 
need to be filled are indicated as E1, E2 and E3. ε is 
the empty string, $ indicates end of input, and | 
separates alternate right hand sides of productions. 
 S → a A b B | b A a B | ε 
 A → S 
 B → S 
                   a b $ 
S E 1 E 2  S → 𝜀 
A  A →  S  A →  S error 
B B → S B → S E3 
      The FIRST and FOLLOW sets for the non -terminals 
A and B are:-  
FIRST(A) = {a, b, 𝜀} = FIRST(B)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

FIRST (P): is the set of terminals that begin the 
strings derivable from non - terminal P. If P derives 
epsilon then we include epsilon in FIRST(P). 
 FOLLOW(P): is the set of  terminals that can appear 
immediately to the right of P in some sentential form. 
 FIRST(A) = FIRST (S) 
 FIRST (S) = FIRST (aAbB) and FIRST (bAaB) and 
FIRST (ϵ) 
 FIRST(S) = {a, b, ϵ} 
 FIRST (B) = FIRST (S) = {a, b, ϵ}= FIRST (A) 
 FOLLOW(A) = {b} // because of production S→a A 
b B 
 FOLLOW(A) = {a} // because of production S→ b A 
a B 
 So FOLLOW (A) = {a, b} 
 FOLLOW (B) = FOLLOW (S) // because of 
production S→ aA b B 
 FOLLOW (S) = FOLLOW (A) // because of 
production A → S 
 So FOLLOW (S) = {$, a, b}= FOLLOW(B)


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For the grammar below, a partial LL(1) parsing 
table is also presented along with the grammar. 
Entries that need to be filled are indicated as E1, 
E2, and E3.  epsilon is the empty string, $ indicates 
end of input, and, | separates alternate right hand 
sides of productions. 
 S →a A b B | b A a B | ε 
 A →S 
 B → S 
                  a b $ 
S E 1 E 2  S → 𝜀 
A  A →  S  A →  S error 
B B → S B → S E3 
 The appropriate entries for E1 , E2, E3 are:-


- **(A)** E1: S → aAbB,A → S 
         E2: S → bAaB,B→S 
         E3: B → S

- **(B)** E1: S → aAbB,S→ ε 
          E2: S → bAaB,S → ε 
          E3: S → ε

- **(C)** E1: S → aAbB,S → ε 
         E2: S → bAaB,S→ε    
         E3: B → S

- **(D)** E1: A → S,S →ε 
         E2: B → S,S → ε   
         E3: B →S



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The entries in E1, E2 and E3 are related to S and B, 
so we have to take only those productions which have 
S and B in LHS. 
 S→ aAbB | bAaB | ε 
<!-- PAGE 270 -->
COMPILER DESIGN 
 The production S→ aAbB will go under column 
FIRST (aAbB) = a, so S→ aAbB will be in E1. 
 S→ bAaB will go under column FIRST(bAaB) = 
b, so S→ bAaB will be in E2. 
 S→ ε will go under FOLLOW (S) = FOLLOW(B) 
= {a, b, $ } , So S→ ε will go in E1, E2 and under 
the column of $. 
 So E1 will have: S→ aAbB and S→ ε. 
 E2 will have S→ bAaB and S→ ε. 
 Now, B→ S will go under FIRST (S) = {a, b, ε} 
 Since FIRST(S) = ε so B→ S will go under 
FOLLOW (B) = {a, b, $} 
 So E3 will contain B→ S.


</details>

---


### Q33. [GATE CSE – 2012 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider two binary operators ‘↑’ and ‘↓’ with the 
precedence of operator ↓ being lower than that of the 
operator ↑. Operator ↑ is right associative while 
operator ↓ is left associative. Which one of the 
following represents the parse tree for expression 
(7↓3↑4↑3↓2) ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

7 ↓ 3 ↑ 4 ↑ 3 ↓ 2 
 ⇒ 7 ↓ (3 ↑ (4 ↑ 3)) ↓ 2 
 ⇒ 7 ↓ (3 ↑ (4 ↑ 3))) ↓ 2 as ↓ is left associative


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The grammar : S → aSa|bS|c is:-


- **(A)** LL(1) but not LR(1)

- **(B)** LR(1) but not LL(1)

- **(C)** Both LL(1) and LR(1)

- **(D)** Neither LL(1) nor LR(1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The LL(1) parsing table for the given grammar is: 
Because there is no conflict in the LL(1) parsing 
table, the given grammar is LL(1), and because 
every LL(1) is also LR(1), the given grammar is 
both LL(1) and LR(1)


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An LALR(1) parser for a grammar G can have 
shift-reduce (S-R) conflicts if and only if


- **(A)** The SLR(1) parser for G has S-R conflicts

- **(B)** The LR(1) parser for G has S-R conflicts

- **(C)** The LR(0) parser for G has S-R conflicts

- **(D)** The LALR(1) parser for G has reduce-reduce 
conflicts



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

LALR(1) is obtained by merging LR(1) states that 
have the same LR(0) core. 
 Important facts: 
● If a grammar is LR(1) (no conflicts in LR(1)), then 
after merging states to form LALR(1), shift -
reduce conflicts cannot re-appear. 
● Merging can introduce reduce -reduce conflic ts, 
but it does not introduce new shift -reduce 
conflicts. 
● Therefore, an LALR(1) parser can have shift -
reduce conflicts if and only if the LR(1) parser 
already has shift-reduce conflicts. 
 Thus: The LR(1) parser for G has S-R conflicts


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following describes a handle (as 
applicable to LR-parsing) appropriately?


- **(A)** It is the position in a sentential form where 
the next shift or reduce operation will occur

- **(B)** It is non -terminal whose production will be 
used for reduction in the next step

- **(C)** It is a production that may be used for 
reduction in a future step along with a 
position in the sentential form where the next 
shift or reduce operation will occur

- **(D)** It is the production p that will be used for 
reduction in the next step along with a 
position in the sentential form where the 
right hand side of the production may be 
found



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(a)“It is the position in a sentential form where the 
next shift or reduce operation will occur”  
→ Only talks about position, but a handle must 
include both position + production. So incomplete. 
 (b)“It is non-terminal whose production will be used 
for reduction in the next step” 
→ A handle is not just a non-terminal; it is a 
substring (RHS) + corresponding production. 
Incorrect. 
(c)“It is a production that may be used for reduction 
in a future step along with a position...” 
→ Handle is about next step (immediate 
reduction), not some future possibility. Hence 
wrong. 
 (d)“It is the production p that will be used for 
reduction in the next step along with a position...” 
→ Exactly matches definition: RHS occurrence + 
production used for immediate reduction. 
 Therefore, (d) is correct.


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the CFG with {S, A , B} as the non -
terminal alphabet, {a,b} as the terminal alphabet, S 
as the start symbol and the following set of 
production rules: 
 S → aB     S → bA 
 B → b      A → a 
 B → bS     A → aS 
 B → aBB   S → bAA 
 Which of the following strings is generated by the 
grammar?


- **(A)** aaaabb

- **(B)** aabbbb

- **(C)** aabbab

- **(D)** abbbba



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

S → aB 
    → aaBB 
    → aabB 
    → aabbS 
    → aabbaB 
<!-- PAGE 271 -->
COMPILER DESIGN 
    → aabbab


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The grammar A → AA | (A) | ε is not suitable for 
predictive-parsing because the grammar is


- **(A)** ambiguous

- **(B)** left-recursive

- **(C)** right-recursive

- **(D)** an operator-grammar



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Since given grammar can have infinite parse trees 
for string 'ε', so grammar is ambiguous, and also A 
→ AA has left recursion. For predictive -parsing, 
grammar should be: 
● Free from ambiguity 
● Free from left recursion 
● Free from left factoring 
 Given grammar contains both ambiguity and left 
factoring, so it can not have a predictive parser. We 
always expect first grammar free from ambiguity 
for parsing.


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the grammar  
                  S → (S) | a 
  Let the number of states in SLR(1), LR(1) and 
LALR(1) parsers for the grammar be n 1, n 2 and n 3 
respectively. The following relationship holds good


- **(A)** n1 < n2 < n3

- **(B)** n1 = n3 < n2

- **(C)** n1 = n2 = n3

- **(D)** n1 ≥ n3 ≥ n2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

LALR(1) is formed by merging states of LR(1) ( 
also called CLR(1)), hence no of states in LALR(1) 
is less than no of states in LR(1), therefore n3 < n2. 
And SLR(1) and LALR(1) have the same number 
of states, i.e ( n1 = n3). 
 Hence, n1 = n3 < n2


</details>

---


### Q40. [GATE CSE – 2010 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the context-free grammar 
 E → E + E 
E → (E * E) 
E → id 
 where E is the starting symbol, the set of terminals is 
{id, (+,),*}, and the set of non-terminals is {E}. 
 For the terminal string id + id + id + id, how many 
parse trees are possible?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The number of ways to parenthesize an expression 
with 𝑛 + 1 terms is given by the 𝑛-th Catalan number ( 
𝐶𝑛 ). 
1. Identify 𝑛 : 
 Your expression is id + id + id + id . 
 It has 4 terms. 
 So, 𝑛 + 1 = 4, which means 𝑛 = 3. 
2. Use the Catalan Number Formula: The formula for the 
𝑛-th Catalan number is: 
𝐶𝑛 = 1𝑛 + 1 (2𝑛𝑛 ) 
3. Calculate 𝐶3 (for 𝑛 = 3 ): 
 𝐶3 =
3+1 (2×33 ) 
 𝐶3 =
4 (63) 
 First, let's find (63) (which is "6 choose 3"): (63) =
6!
3!(6−3)! =
3!3! =
6×5×4
3×2×1 = 20 
 Now, plug that back into the formula: 𝐶3 =
4 × 20 
 𝐶3 = 5 
There are 5 possible ways to parenthesize the expression, 
which means there are 5 possible parse trees.  
<!-- PAGE 272 -->
SYNTAX DIRECTED TREE


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two syntax -directed 
definitions SDD1 and SDD2 for type declarations. 
SDD1 
Grammar 
(G1) 
Semantic Rules 
𝐷 → 𝑇𝑉 D.type = T.type V.type = T.type 
𝑇 → int T.type = int 
𝑇 → float T.type = float 
𝑉 → 𝑉1 id 𝑉1.type = V.type put(id.entry,V.type) 
𝑉 → id put(id.entry,V.type) 
SDD2 
Grammar 
(G2) 
Semantic Rules 
𝐷 → 𝐷1 id D.type = 𝐷1.type put(id.entry, 𝐷1.type ) 
𝐷 → 𝑇 id D.type = T.type put(id.entry, T.type ) 
𝑇 → int T.type = int 
𝑇 → float T.type = float 
 𝐷 is the start symbol, and 𝑖𝑛𝑡, 𝑓𝑙𝑜𝑎𝑡 and 𝑖𝑑 are the 
three terminals. The non-terminal 𝑉1 is the same as 
𝑉 and the non-terminal 𝐷1 is the same as 𝐷. Here, 
the subscript is used to differentiate the grammar 
symbols on the two sides of a production. The 
function 𝑝𝑢𝑡 updates the symbol table with the type 
information for an identifier.  
 Let P and Q be the languages specified by grammars 
G1 and G2, respectively.  
 Which of the following statements is/are true?


- **(A)** The languages P and Q are the same

- **(B)** SDD2 is S -attributed and contains only 
synthesized attributes

- **(C)** SDD1 is L -attributed and contains only 
inherited attributes

- **(D)** The specifications of SDD1 and SDD2 are such 
that the same entries get added to the symbol 
table



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A) (B) AND (D)


**Step-by-Step Explanation:**

(A) Both grammars G1 and G2 generate the same 
declarations, so the languages P and Q are the same.  
(B) In SDD 2, attributes such as D.type and T.type 
are computed from the right -hand side symbols. 
Thus only synthesized attributes are used, making 
it S-attributed. 
 (C) In SDD 1, attributes like V1.type = V.type  are 
passed from parent to child, so it contains inherited 
attributes as well, not only inherit ed ones.  
(D) Both SDDs assign the same type information to 
identifiers using put(id.entry, type) , so the same 
symbol table entries are produced.


</details>

---


### Q2. [GATE CSE - 2026 MSQ SET - 1(1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Given the following syntax-directed translation rules:          
 Rule 1: 
 R → AB { B.i = R.i - 1;  A.i = B.i;  R.i = A.i + 1; } 
 Rule 2: 
 P → CD { P.i = C.i + D.i;  D.i = C.i + 2; } 
 Rule 3: 
 Q → EF { Q.i = E.i + F.i; } 
 Which ONE is the CORRECT option among the 
following?


- **(A)** Rule 1 : is S-attributed and L-attributed; Rule 2 
is S-attributed and not L -attributed; Rule 3 is 
neither S-attributed nor L-attributed

- **(B)** Rule 1 : is neither S-attributed nor L-attributed; 
Rule 2 is S-attributed and L-attributed; Rule 3 
is S-attributed and L-attributed.

- **(C)** Rule 1 : is neither S-attributed nor L-attributed; 
Rule 2 is not S -attributed and is L -attributed; 
Rule 3 is S-attributed and L-attributed.

- **(D)** Rule 1 : is S -attributed and not L -attributed; 
Rule 2 is not  S-attributed and is L -attributed; 
Rule 3 is S-attributed and L-attributed



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

‘i’ is inherited attribute and is evaluated from the 
right subtree for the rule A. i = B.i, Therefore it is 
not ‘L’ attributed. 
 Rule 2: In D.i = C.i+2; i is inherited attributed, so 
it is not ‘S’ attributed, but it is evaluated from the 
left subtree therefore it is ‘L’ attributed. 
 Rule 3: In Q.i = E. i + F.i, ‘i’ is a synthesized 
attribute, therefore it is both ‘S’ and ‘L’ attributed.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following syntax -directed definition 
(SDD) 
 S → D H T U { S.val = D.val + H.val + T.val + U.val; } 
 D → "M" D₁         { D.val = 5 + D₁.val; } 
 D → ε              { D.val = -5; } 
 H → "L" H₁         { H.val = 5 * 10 + H₁.val; } 
 H → ε              { H.val = -10; } 
 T → "C" T₁         { T.val = 5 * 100 + T₁.val; } 
 T → ε              { T.val = -5; } 
 U → "K"            { U.val = 5; } 
 Given "MMLK" as the input, which one of the 
following options is the CORRECT value 
computed by the SDD (in the attribute S.val)?


- **(A)** 45

- **(B)** 50

- **(C)** 55

- **(D)** 60



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

So the output of the given SDT is 45.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are FALSE?


- **(A)** An attribute grammar is a syntax -directed 
definition (SDD) in which the functions in 
the semantic rules have no side effects

- **(B)** The attributes in a L -attributed definition 
cannot always be evaluated in a depth - first 
order

- **(C)** Synthesized attributes can be evaluated by a 
bottom-up parser as the input is parsed

- **(D)** All L-attributed definitions based on LR(1) 
grammar can be evaluated using a bottom-up 
parsing strategy



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,D


**Step-by-Step Explanation:**

A. An attribute grammar is an SDD in which the 
functions in the semantic rules have no side 
effects (TRUE) 
By definition, an Attribute Grammar is a 
formal way to define attributes for the 
symbols of a grammar. It is a subset of Syntax-
Directed Definitions (SDDs) where the rules 
are purely functional and do not produce side 
effects (like printing a value or updating a 
global table) outside of calculating the 
attribute values. 
B. The attributes in an L -attributed definition 
cannot always be evaluated in a depth -first 
order (FALSE) 
L-attributed definitions are specifically 
designed so that they can always be evaluated 
in a depth-first, left-to-right manner. In an L -
attributed SDD, an attribute of a node can 
depend on: 
Attributes of its parent node (Inherited). 
Attributes of its siblings to its left (Inherited). 
Its own attributes (Synthesized). Because of 
this "left-to-right" dependency, a standard 
depth-first traversal (specifically a pre -order 
or post -order traversal depending on the 
attribute type) always works. 
C.  Synthesized attributes can be evaluated by a 
bottom-up parser as the input is parsed 
(TRUE) 
Synthesized attributes (like in S -attributed 
definitions) depend only on the children of a 
node. Since a bottom -up parser (like LR) 
works by "reducing" children into a parent, it 
can calculate these attributes exactly at the 
moment of reduction. This is why S-attributed 
definitions are highly compatible with 
Yacc/Bison tools. 
D. All L -attributed definitions based on LR(1) 
grammar can be evaluated using a bottom -up 
parsing strategy (FALSE) 
 This is a common trap. While all L -
attributed definitions can be evaluated in a 
<!-- PAGE 277 -->
COMPILER DESIGN 
top-down (LL) parser, they cannot all be 
evaluated during bottom -up parsing. 
Bottom-up parsers struggle with inherited 
attributes because the parent or left-siblings 
might not be fully "reduced" or known when 
a specific action needs to be taken. Only a 
specific subset of SDDs (like S-attributed or 
specialized L-attributed translations) can be 
handled easily in a single -pass bottom -up 
parse.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the syntax directed translation given by the 
following grammar and semantic rules. Here N,I,F 
and B are non -terminals. N is the starting non -
terminal, and #, 0, and 1 are lexical tokens 
corresponding to input letters "#", "0", and "1", 
respectively. X.val denotes the synthesized attribute 
(a numeric value) associated with a non-terminal X.I1 
 and F1 denote occurrences of I and F on the right -
hand side of a production, respectively. For the tokens 
0 and 1, 0.val=0 and 1.val= 1 
 N → I # F      N.val = I.val + F.val 
 I → I₁ B       I.val = (2 I₁.val) + B.val 
 I → B          I.val = B.val 
 F → B F₁       F.val = ½ (B.val + F₁.val) 
 F → B          F.val = ½ B.val 
 B → 0          B.val = 0.val 
 B → 1          B.val = 1.val 
 The value computed by the translation scheme for the 
input string: 10#011 
 is ____________. (Rounded off to three decimal 
places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2.375


**Step-by-Step Explanation:**

6. ANSWER:- 80


</details>

---


### Q6. [GATE CSE - 2024 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar along with 
translation rules. 
 S → S₁ # T   { S.val = S₁.val * T.val } 
 S → T        { S.val = T.val } 
 T → T₁ % R   { T.val = T₁.val + R.val } 
 T → R        { T.val = R.val } 
 R → id       { R.val = id.val } 
 Here # and % are operators and id is a token that 
represents an integer and id.val represents the 
corresponding integer value. The set of non-terminals 
is {S, T, R, P}  and a  subscripted non -terminal 
indicates an instance of the non-terminal. 
 Using this translation scheme, the computed value of 
S.val for root of the parse tree for the expression  
20#10%5#8%2%2 is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 𝟖𝟎


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar (that admits a 
series of declarations, followed by expressions) and 
the associated syntax directed translation (SDT) 
actions, given as pseudo-code: 
 P → D* E* 
 D → int ID {record that ID.lexeme is of type int}  
 D → bool ID {record that ID. lexeme is of type bool} 
 E → E1 + E2 {check that E1.type = E2.type = int;   
set E.type := int}  
E → !E1 {check that E1.type = bool; set E.type = 
bool} 
 E → ID {set E.Type := int} 
 With respect to the above grammar, which one of 
the following choices is correct?


- **(A)** The actions can be used to type -check 
syntactically correct integer variable 
declarations and integer expressions.

- **(B)** The actions can be used to correctly type -
check any syntactically correct program.

- **(C)** The actions can be used to type -check 
syntactically correct Boolean variable 
declarations and Boolean expressions

- **(D)** The actions will lead to an infinite loop.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

E → !E {If E1.type = int then E.type bool} 
Note: Here instead of int, it is given as bool. 
 All actions can be used to type check syntactically 
correct integer variable declaration and integer 
expressions.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ANSI C program:       

```c
 int main() { 
 Integer x; 
 return 0; 
 } 
 Which one of the following phases in a seven-phase 
C compiler will throw an error?
```


- **(A)** Lexical analyzer

- **(B)** Machine dependent optimizer

- **(C)** Semantic analyzer

- **(D)** Syntax analyzer



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The semantic analyzer checks meaning — verifies if 
Integer has been declared as a type. Since, Integer is  
undeclared, 
 Error occurs in the semantic analysis phase.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements. 
I. Symbol table is accessed only during lexical      
analysis and syntax analysis. 
II. Compilers for programming languages that 
support recursion necessarily need heap 
storage for memory allocation in the run-time 
environment. 
III. Errors violating the condition ‘any variable 
must be declared before its use’ are detected 
during syntax analysis. 
 Which of the above statements is/are TRUE?


- **(A)** II only

- **(B)** I only

- **(C)** I and III only

- **(D)** None of I, II and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

I. is wrong as the Symbol table is also accessed during 
the semantic analysis phase. 
 II. is wrong as compilers which support recursion 
require stack memory in run time environment. 
 III. is wrong “any variable must be declared before its 
use” is a   semantic error and not syntax error.


</details>

---


### Q10. [GATE CSE - 2021 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the production A ⟶ PQ and A ⟶  XY. 
Each of the five non-terminals A, P, Q, X and Y has 
two attributes:s is a synthesized attribute, and i is an 
inherited attribute. Consider the following rules:- 
 Rule 1 : P.i = A.i + 2, Q.i = P.i + A.i and A.s = P.s + Q.s 
 Rule 2 : X.i = A.i + Y.s and Y.i = X.s + A.i 
 Which one of the following is TRUE?


- **(A)** Only Rule 2 is L-attributed

- **(B)** Neither Rule 1 nor Rule 2 is L-attributed.

- **(C)** Both Rule 1 and Rule 2 are L-attributed.

- **(D)** Only Rule 1 is L-attributed.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In rule 2 for production A→XY  the attribute “i” is 
calculated from the right sibling Y in 
 X.i= A.i + Y.s which is violating the L attribute 
definition, as in L attribute calculating attribute value 
from RHS sibling is not allowed.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following grammar and the semantic 
actions to support the inherited type declaration 
attributes. Let X 1, X 2, X 3, X 4, X 5 and X 6 be the 
placeholders for the non-terminals D, T, L or L1 in 
the following table : 
Production Rule Semantic Action 
D → TL X1.type = X2.type 
T → int T.type = int 
T →float T.type = float 
L →  L1, id X3.type = X4.type 
addType(id.entry, 
X5.type) 
L → id addType(id.entry, 
X6.type) 
     Which one of the following are the appropriate choices 
for X1, X2, X3 and X4?


- **(A)** X1 = L, X2 = T, X3 = L1, X4 = L

- **(B)** X1 = T, X2 = L, X3 = L1, X4 = T

- **(C)** X1 = L, X2 = L, X3 = L1, X4 = T

- **(D)** X1 = T, X2 = L, X3 = T ,  X4 = L1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In SDT: 
 D → T L {X₁.type = X₂.type} 
 L.type = T.type (Inherited attributed) 
 ∴ X₁ = L and X₂ = T 
 T can be int or float. 
  In SDT: 
 L → L₁, id {X₃.type = X₄.type} 
 L₁.type = L.type (Inherited attributed) 
 ∴ X₃ = L₁ and X₄ = L 
<!-- PAGE 278 -->
COMPILER DESIGN


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following Syntax Directed 
Translation Scheme (SDTS), with non -terminals 
{S, A} and terminals {a,b}. 
                       S → aA   { print 1 } 
                       S → a    { print 2 } 
                       A → Sb   { print 3 } 
 Using the above SDTS, the output printed by a 
bottom-up parser, for the input aab is:


- **(A)** 1 3 2

- **(B)** 2 2 3

- **(C)** 2 3 1

- **(D)** syntax error



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

By using bottom up parser, the output will be “2 3 
1”


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the grammar 
                                          E → E + n | E × n | n 
 For a sentence n + n × n, the handles in the right -
sentential form of the reduction are


- **(A)** n, E + n and E + n × n

- **(B)** n, E + n and E + E × n

- **(C)** n, n + n and n + n × n

- **(D)** n, E + n and E × n



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

E → E * n       {Applying E → E * n }   → E + n * 
n   {Applying E → E + n }   → n + n * n   {Applying 
E → n } 
Hence, the handles in right sentential form is n, E + 
n and E × n.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following expression grammar. The 
seman­tic rules for expression calculation are stated 
next to each grammar production. 
       E → number   E.val = number. val 
            | E '+' E   E(1).val = E(2).val + E(3).val 
             | E '×' E  E(1).val = E(2).val × E(3).val 
 The above grammar and the semantic rules are fed to 
a Yacc tool (which is an LALR (1) parser generator) 
for parsing and evaluating arithmetic expressions. 
Which one of the following is true about the action of 
Yacc for the given grammar?


- **(A)** It detects recursion and eliminates recursion

- **(B)** It detects reduce-reduce conflict, and resolves

- **(C)** It detects shift-reduce conflict, and resolves the 
conflict in favor of a shift over a reduce action

- **(D)** It detects shift-reduce conflict, and resolves the 
conflict in favor of a reduce over a shift action



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

yacc conflict resoluti on is done using following 
rules: 
 shift is preferred over reduce while shift/reduce 
conflict. 
 first reduce is preferred over others while 
reduce/reduce conflict. 
 You can answer to this question straightforwardly 
by constructing LALR(1) parse table, thou gh its a 
time taking process. To answer it faster, one can see 
intuitively that this grammar will have a shift -
reduce conflict for sure. In that case, given this is a 
single choice question, (C) option will be the right 
answer. 
 Fool-proof explanation wou ld be to generate 
LALR(1) parse table, which is a lengthy process.  
 Once we have the parse table with us, we can clearly 
see that 
 i. reduce/reduce conflict will not arise in the above 
given grammar 
 ii. shift/reduce conflict will be resolved by giving 
preference to shift, hence making the expression 
calculator right associative.
<!-- PAGE 279 -->
INTERMEDIATE CODE GENERATION 4


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the control flow graph shown in the 
figure.  
 Which one of the following options correctly lists 
the set of redundant expressions (common 
subexpressions) in the basic blocks B4 and B5?  
 Note: All the variables are integers.


- **(A)** B4: { 𝑏 + 𝑖 }   B5: { 𝑐 + 𝑚 }

- **(B)** B4: { 𝑔 ∗ 𝑘 }   B5: { 𝑐 + 𝑚 }

- **(C)** B4: { 𝑔 ∗ 𝑘, 𝑏 + 𝑖 } B5: { }

- **(D)** B4: { 𝑔 ∗ 𝑘 } B5: { }



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Control Flow Graph with blocks B1–B5 
 Find: Redundant expressions (common 
subexpressions) in B4 and B5 
 Step 1: Identify expressions computed earlier 
 B1  
b + i 
B2 
g * k 
c * 4 
B3 
g * k 
b = c + m (so c + m is computed) 
 Step 2: Check expressions in B4 
                    B4 contains: 
                                      x = g * k 
                                      y = b + i 
 Check    g * k 
Computed in both B2 and B3. 
Neither g nor k is modified later. 
Therefore available along all paths reaching B4. 
 Hence, g * k is a redundant expression. 
 Check  b + i 
Computed in B1. 
But in B3, b is redefined. 
Therefore value is not same along all paths. 
 Hence, b + i is not redundant. 
 So, 
 Redundant expressions in B4 = { g * k } 
 Step 3: Check expressions in B5 
                          B5 contains: 
                                        z = c + m 
c + m computed only in B3. 
Not computed along B2 path. 
Therefore not available along all paths. 
 Hence, no redundant expression in B5. 
 Final Answer 
 B4 : { g * k } 
 B5 : { }


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the control flow graph given below. 
 Which one of the following options is the set of live 
variables at the exit point of each basic block?


- **(A)** B1:{a, b, c, e, f}, B2:{d, e}, B3:{b, c, e, f}, 
B4:∅

- **(B)** B1:∅, B2:{d, e}, B3:{a, c, f}, B4:∅

- **(C)** B1:{a, b, c, e, f}, B2:{d, e}, B3:{c, e, f}, B4:∅

- **(D)** B1:∅, B2:{d, e, f}, B3:{a, b, c, e, f}, B4:∅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Basic blocks: 
 B1: a = b + c 
B2: d = a + e 
B3: e = a + f 
B4: g = d + e 
A variable is live at the exit of a block if its value is 
used later before being redefined. 
 B4 
 g = d + e and program exits afterward. 
 No variable is used later. 
 Live(B4) = ∅ 
 B2 
 d = a + e 
 Variables d and e are used later in B4 (g = d + e). 
 Live(B2) = {d, e} 
 B3 
 e = a + f 
Variables a and f are used in this block and needed 
for computation. 
 Live(B3) = {a, c, f} 
 B1 
 a = b + c 
  Variables a, b, c, e, f are needed later in B2 and B3. 
 Live(B1) = {a, b, c, e, f} 
 Final Result 
 B1: {a, b, c, e, f} 
B2: {d, e} 
B3: {b,c, e, f} 
B4: ∅


</details>

---


### Q3. [GATE CSE - 2026 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements about the use of 
backpatching in a compiler for intermediate code 
generation: 
 (I) Backpatching can be used to generate code for 
Boolean expressions in one pass. 
 (II) Backpatching can be used to generate code for 
flow-of-control statements in one pass. 
 Which ONE of the following options is CORRECT?


- **(A)** Only (I) is correct.

- **(B)** Only (II) is correct.

- **(C)** Both (I) and (II) are correct.

- **(D)** Neither (I) nor (II) is correct.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Back patching can be used to generate code of both 
boolean expressions and flow -of-control statements 
in one pass. 
<!-- PAGE 287 -->
COMPILER DESIGN


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Refer to the given 3 -address code sequence. This 
code sequence is split into basic blocks. The 
number of basic blocks is _________. 
 1001: i = 1 
 1002: j = 1 
 1003: t1 = 10*i 
 1004: t2 = t1+j 
 1005: t3 = 8*t2 
 1006: t4 = t3-88 
 1007: a[t4] = 0.0 
 1008: j = j+1 
 1009: if j <= 10 goto 1003 
 1010: i = i+1 
 1011: if i <= 10 goto 1002 
 1012: i = 1 
 1013: t5 = i-1 
 1014: t6 = 88*t5 
 1015: a[t6] = 1.0 
 1016: i = i+1 
 1017: if i <= 10 goto 1013


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (6)


**Step-by-Step Explanation:**

Basic block is a sequence of consecutive statements 
in which the control enters at the beginning and 
leaves only at the end without any branching (or) 
halting except at the end.. 
 1. Identify leader (1st statement of a basic block) 
●     First statement of a program is a leader. 
●     Target of goto is a leader. 
●     Next statement after goto is a leader. 
 2. Group a leader statement with all the consecutive 
statements upto but not inclu eding the next leader 
of a basic block. 
Basic Block Instructions 
B1 1001 
B2 1002 
B3 1003 →1004 →1005→ 
1006→ 1007 →1008 
→1009 
B4 1010→ 1011 
B5 1012 
B6 1013→ 1014→ 1015→ 
1016→ 1017


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which ONE of the following techniques used in 
compiler code optimization uses live variable 
analysis?


- **(A)** Run-time function call management

- **(B)** Register assignment to variables

- **(C)** Strength reduction

- **(D)** Constant folding



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Uses of live variable analysis: 
1. Used for register allocation: If variable x is live 
in a basic block b, it is a potential candidate for 
register allocation. 
2. Used for dead code elimination: If variable x is 
not live after an assignment x = . . ., then the 
assignment is redundant and can be deleted as dead 
code.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following expression: x[i] = (p + r) 
∗−s[i] + u/w     
(0) + p r 
(1)    
(2) uminus (1)  
(3)    
(4) / u w 
(5) + (3) (4) 
(6)    
(7) = (6) (5) 
 Which one of the following options fills in the 
missing entries CORRECTLY?


- **(A)** (1) = []si, (3) ∗ (0)(2), (6)[] = xi

- **(B)** (1)[] = si, (3) − (0)(2), (6) = []x(5)

- **(C)** (1) = []si, (3) ∗ (0)(2), (6)[] = x(5)

- **(D)** (1)[] = si, (3) − (0)(2), (6) = []xi



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

The given expression x[i]=(p+r) ∗−s[i]+u/w is 
broken into triples for evaluation. 
 Triple (1): []=s i[ ] representing −s[i]. 
 Triple (3): ∗(0)(2), where (0) is p+r and (2)(2) is −s[i]. 
 Triple (6): []=x i[ ] , assigning the final result to x[i]x[i].


</details>

---


### Q7. [GATE CSE - 2025 NAT SET - 1(2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following pseudo-code. 
 L1 : t1 = −1 
 L2 : t2 = 0 
 L3 : t3 = 0 
 L4 : t4 = 4 * t3 
 L5 : t5 = 4 * t2 
 L6 : t6 = t5 * M 
 L7 : t7 = t4 + t6 
 L8 : t8 = a[t7] 
 L9 : if t8 <= max goto L11 
 L10 : t1 = t8 
 L11 : t3 = t3 + 1 
 L12 : if t3 < M goto L4 
 L13 : t2 = t2 + 1 
 L14 : if t2 < N goto L3 
 L15 : max = t1 
Which of the following options CORRECTLY 
specifies the number of basic blocks and the number 
of instructions in the largest basic block, 
respectively?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

L 1,L 3,L 4,L 10 ,L 11,L 13, and L15 are leader 
statements. 
 In the given 3AC 7 leaders are there: 1, 3, 4, 10, 11, 
13, 15 
 There are 7 basic block are there: 
1. Block B₁: statement 1 – 2 
2. Block B₂: statement 3 
3. Block B₃: statement 4 – 9 
4. Block B₄: statement 10 
5. Block B₅: statement 11 – 12 
6. Block B₆: statement 13 – 14 
7. Block B₇: statement 15 
 So the total number of basic blocks is 7 and the largest 
basic block is B₃ which contains a total of 6 
instruction.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements regarding the 
front-end and back-end of a compiler: -  
 S1: The front-end includes phases that are 
independent of the target hardware. 
S2: The back-end includes phases that are specific 
to the target hardware. 
S3: The back-end includes phases that are specific 
to the programming language used in the source 
code. 
Identify the CORRECT option.


- **(A)** Only S1 is TRUE.

- **(B)** Only S1 and S2 are TRUE.

- **(C)** S1, S2, and S3 are all TRUE.

- **(D)** Only S1 and S3 are TRUE.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

S1: The front-end includes phases that are 
independent of the target hardware. 
This statement is true. The front-end of a compiler is 
responsible for tasks like lexical analysis, syntax 
analysis, and semantic analysis, which are 
independent of the target hardware. 
 S2: The back-end includes phases that are specific to 
the target hardware. 
This statement is true. The back-end of a compiler is 
responsible for tasks like code generation and 
<!-- PAGE 288 -->
COMPILER DESIGN 
optimization, which are specific to the target 
hardware platform. 
 S3: The back-end includes phases that are specific 
to the programming language used in the source 
code. 
This statement is not generally true. The phases in 
the back-end of a compiler are primarily 
concerned with generating efficient code for the 
target hardware. While the choice of programming 
language can influence some aspects of code 
generation, it's not a phase specific to the 
programming language itself. Most of the 
language-specific tasks are handled


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


For a statement S in a program, in the context of 
liveness analysis, the following sets are defined:  
 USE (S) : the set of variables used in S 
 IN (S) : the set of variables that are live at the entry 
of S 
 OUT(S) : the set of variables that are live at the exit 
of S 
 Consider a basic block that consists of two 
statements, S 1 followed by S 2. Which one of the 
following statements is correct?


- **(A)** OUT(S1) = IN(S1) ∪ USE(S1)

- **(B)** OUT(S1) = IN(S2) ∪ OUT(S2)

- **(C)** OUT(S1) = IN(S2)

- **(D)** OUT(S1) = USE(S1) ∪ IN(S2)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

10. ANSWER:- (D)  
 Symbol Table is not an intermediate representation 
of the Source program.A symbol table is a data 
structure used by compilers to store information 
about variables, functions, classes, and other 
identifiers used in the program. It's accessed by 
various compiler stages to look up information 
about these entities


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In the context of compilers, which of the following 
is/are NOT an intermediate representation of the 
source program?


- **(A)** Three address code

- **(B)** Control Flow Graph (CFG)

- **(C)** Abstract Syntax Tree (AST)

- **(D)** Symbol table



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** d


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the expression ( a-1)* (((b + c) / 3) + d) . Let 
X be the minimum number of registers required by an 
optimal code generation (without any register spill) 
algorithm for a load/store architecture in which (i) 
only loads and store instructions can have memory 
operands and (ii ) arithmetic instructions can have 
only register or immediate operands. The value of X 
is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (2)


**Step-by-Step Explanation:**

Load R1, b 
 114 Load R2, c 
 ADD R1, R2 
 Div R1, 3 
 Load R2, d 
 Add R1, R2 
 Load R2, a 
 Sub R2, 1 
 Mul R2, R1 
 hence, minimum 2 registers required.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following code segment. 
 x = u - t; 
 y = x * v; 
 x = y + w; 
 y = t - z; 
 y = x * y; 
 The minimum number of  variables required to 
convert the above code segment to static single 
assignment form is ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (10)


**Step-by-Step Explanation:**

Static Single Assignment (SSA) requires that every 
variable is assigned exactly once, and every variable 
must be defined before it is used. We achieve this 
by versioning the variables with subscripts. 
Step-by-Step Conversion 
1. x1 = u = t (First assignment to x ) 
2. 𝑦1 = 𝑥1 ∗ 𝑣 (First assignment to 𝑦; uses 𝑥1 ) 
3. 𝑥2 = 𝑦1 + 𝑤 (Second assignment to 𝑥; uses 𝑦1 ) 
4. 𝑦2 = 𝑡 − 𝑧 (Second assignment to 𝑦 ) 
5. 𝑦3 = 𝑥2 ∗ 𝑦2 (Third assignment to 𝑦; uses 𝑥2 and 
𝑦2 ) 
Final Count 
To find the minimum number of variables, count every 
unique variable name present in the final SSA code: 
 Assigned Variables (Left+Hand Side): 
𝑥1, 𝑦1, 𝑥2, 𝑦2, 𝑦3 ( 5 variables) 
 Input Variables (Right-Hand Side): 𝑢, 𝑡, 𝑣, 𝑤, 𝑧 (5 
variables) 
Total variables = 5 + 5 = 10 
The minimum number of variables required is 10 .


</details>

---


### Q13. [GATE CSE - 2023 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In the context of abstract -syntax-tree (AST) and 
control-flow-graph (CFG), which one of the 
following is TRUE?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

(A) is false, In CFG ( Control Flow Graph ), code of 
N2 may be present before N1 when there is a loop or 
goto. 
 (B) is false, CFG (Control Flow Graph) contains a 
cycle, when the input program has a loop. 
 (C) is true, successors in AST and CFG are dependent 
on input program 
 (D) is false, a single statement may belong to a block 
of statements. 
<!-- PAGE 289 -->
COMPILER DESIGN


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the intermediate code given below. 
 (1) i = 1 
 (2) j = 1 
 (3) t1 = 5 * i 
 (4) t2 = t1 + j 
 (5) t3 = 4 * t2 
 (6) t4 = t3 
 (7) a[t4] = –1 
 (8) j = j + 1 
 (9) if j < = 5 goto (3) 
 (10) i = i + 1 
 (11) if i < 5 goto (2) 
 The number of nodes and edges in the control-flow-
graph constructed for the above code, respectively, 
are:-


- **(A)** 5 and 7

- **(B)** 6 and 7

- **(C)** 5 and 5

- **(D)** 7 and 8



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

15. ANSWER:- (8)  
 We will need one temporary variable for storing the 
result of every binary operation as Static Single 
Assignment implies the variable cannot be repeated 
on left hand side of assignment. 
  The given expression: 
 q+r/3+s−t∗5+u∗v/w 
 t1=r/3; 
 t2=t∗5; 
 t3=u∗v; 
 t4=t3/w; 
 t5=q+t1; 
 t6=t5+s; 
 t7=t6−t2; 
 t8=t7+t4; 
 So in total we need 8 temporary variables. If it was 
not mentioned as a static single assignment then the 
answer would have been 3 because we can re -use 
the same temporary variable several times.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The least number of temporary variables required 
to create a three -address code in static single 
assignment form for the expression  
 q + r/3 + s – t * 5 + u * v/w  is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 8


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


One of the purposes of using intermediate code in 
compilers is to:-


- **(A)** make parsing and semantic analysis simpler.

- **(B)** improve error recovery and error reporting.

- **(C)** increases the chances of reusing the machine -
independent code optimizer in other compilers.

- **(D)** improve the register allocation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Intermediate code is generated after semantic 
analysis. The intermediate code is independent of 
the machine. By converting source code to 
intermediate code a machine independent code 
optimizer may be written. Thus increase the  
chances of reusing the machine -independent code 
optimizer in other compilers.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is FALSE?


- **(A)** A basic block is a sequence of instructions 
where control enters the sequence at the 
beginning and exits at the end.

- **(B)** Available expression analysis can be used for 
common subexpression elimination.

- **(C)** Live variable analysi s can be used for dead 
code elimination.

- **(D)** x=4*5⇒x=20 is an example of common 
subexpression elimination



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

x=4* 5 ⇒ x=20 is an example of common 
subexpression elimination is a false statement. 
 Common sub -expression elimination (CSE) is a 
compiler optimization that searches for instances of 
identical expressions (i.e., they all evaluate to the 
same value), and analyzes whether it is worthwhile 
replacing them with a single variable holding the 
computed value. 
 For ex: Consider the following code: 
 m=y+z * p 
 n= y+z *k 
 The common subexpression is “y+z” we can be 
calculate it one time and replace in both expression 
 temp = y+z 
 m = temp*p 
 n = temp*k


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT performed during 
compilation?


- **(A)** Dynamic memory allocation

- **(B)** Type checking

- **(C)** Symbol table management

- **(D)** Inline expansion



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Dynamic memory allocation is not performed during 
compilation, it occurs at run time only. At the time of 
compilation, compiler only compiles the instructions 
for dynamic memory allocation, like calloc, 
malloc….


</details>

---


### Q19. [GATE CSE - 2015 MCQ SET – 2 (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


For a C program accessing X[i][j][k], the following 
intermediate code is generated by a compiler. Assume 
that the size of an integer is 32 bits and the size of a 
character is 8 bits. 
 t0 = i * 1024 
 t1 = j * 32 
 t2 = k * 4 
 t3 = t1 + t0


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Consider a 3-D array: arr[i][j][k] 
 Arr[0][1][2], this 3-D array contains 
 One 2- dimensional array as i value is zero  ( if i =1 
then it has 2, two D array ), & the two dimension array 
has 2 rows and 3 columns. 
 So, In a 3 -D array, I represent the number of 2D 
arrays, j represents the number of rows and k 
represents the number of columns. 
 Number of 2 D array (M)=1 
 Number of rows (R)=2 
 Number of Columns (C)=3 
 As arrays are stored in row major order, so this 2 
dimension array will be stored as: 
<!-- PAGE 290 -->
COMPILER DESIGN 
 Assume the base address of Arr is 1000. The 
address of required position is calculated as: 
 Arr[i][j][k]= Arr+ [i*(R*C)+(j*C)+k]*4 // 
multiplication to 4 is due to int taking 4 Bytes. 
 Arr[0][1][1] = 1000 + [0*(2*3) + (1*3) + 1]*4 
 = 1000 + [0 + 3 + 1 ] * 4 
 = 1000 + 4 * 4 = 1016 
 As you can see, in the given example of row order 
storing the array also has the address of 
Arr[0][1][1] is 1016. 
 Now coming to the question: 
 X [ i ][ j ][ k ] is calculated by 3 address code X[t4] 
 X [ i ][ j ][ k ] = X [ t4 ] // by substituting in reverse 
 =X [ t3 + t2] 
 =X [ t1 + t0 + k*4] 
 =X [ t0 + t1 + k*4] // t0 and t1 swapped as swapping 
doesn't have any impact 
 =X [ i*1024 + j*32 + k*4] 
 =X [ i*256 + j*8 +k] *4 // taking 4 (common) 
outside 
 = X [ i*(32*8)+ (j*8) +k] *4 
 By comparing the above line with ....... 
Arr[i][j][k]= Arr+ [i*(R*C)+(j*C)+k]*4 
 We get R=32, C=8 
 It means that the declared array has 32 rows and 8 
columns and since multiplication by 4 (common 
outside) so it was declared as INT. 
 But how many 2D arrays in this 3D array, we don't 
know.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements are Correct? 
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

The statement, static allocation of all data areas by 
a compiler makes it impossible to implement 
recursion is true, as recursion requires memory 
allocation at run time, so it requires dynamic 
allocation of memory. Hence, Dynamic allocation 
of activation records is essential to implement 
recursion is also a true statement.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the basic block given below. 
 a= b + c 
 c =a + d 
 d =b + c 
 e =d - b 
a =e + b 
 The minim um number of nodes and edges present 
in the DAG representation of the above basic block 
respectively are


- **(A)** 6 and 6

- **(B)** 8 and 10

- **(C)** 9 and 12

- **(D)** 4 and 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

A normal DAG construction will give 8 nodes and 
10 edges as shown below. 
 Since, this question asks for minimum possible, we 
can assume algebraic simplification is allowed. So, d 
= b + c, e = d − b; can be simplified to d = b + c; e = 
c; Similarly, e = d − b; a = e + b; can be simplified to 
a = d. This gives the following DAG with 6 nodes and 
6 edges.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The minimum number of arithmetic operations 
required to evaluate the polynomial P(x) = x5 + 4x3 + 
6x + 5 for a given value of x, using only one 
temporary variable is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (7)


**Step-by-Step Explanation:**

P(X) = x5 + 4x3 + 6x + 5 
 = x(x4 + 4x2 + 6) + 5 
 = x(x(x3 + 4x) + 6) + 5 
 = x(x(x(x2 + 4)) + 6) + 5 
 = x(x(x(x(x) + 4)) + 6) + 5 
 mul = pair of brackets 4 
 add = num of signs 3 
total 7


</details>

---


### Q23. [GATE CSE - 2014 MCQ SET – 3 (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The following code segment is executed on a 
processor which allows only register operands in its 
instructions. Each instruction can have almost two 
source operands and one destination operand. 
Assume that all variables are dead after this code 
segment. 
c = a + b;
d = c ∗ a;
e = c + a;
x = c ∗ c;
 if (x > a){
 y = a∗a;
 }
 else {
d = d ∗  d;
e = e∗e;
 }
Suppose the instruction set architecture of the 
processor has only two registers. The only allowed 
compiler optimization is code motion, which 
moves statements from one place to another while 
preserving correctness. What is the minimum 
number of spills to memory in the compiled code?


- **(A)** 0

- **(B)** 1

- **(C)** 2

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Reason: 
The machine has only 2 registers. 
- Expression uses variables a, b, c, d, e, x. 
- c = a + b requires both a and b in registers. 
<!-- PAGE 291 -->
COMPILER DESIGN 
- d = c * a and e = c + a require reuse of c and a. 
- x = c * c also needs c twice. 
- With only 2 registers, it is not possible to keep all 
required values simultaneously. 
- Using code motion, we can reduce redundant 
recomputation. 
- Only one value needs to be spilled to memory to 
maintain correctness. 
- Hence, minimum spills = 1.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the program given below, in a block-
structured pseudo-language with lexical scoping 
and 
nesting of procedures permitted. 
 Program main; 
    Var ... 
    Procedure A1; 
        Var ...       
    Call A2; 
    End A1 
    Procedure A2; 
        Var ... 
        Procedure A21; 
            Var 
            Call A1; 
        End A21 
        Call A21; 
    End A2 
    Call A1; 
End main. 
Consider the calling chain: Main → A1 → A2 → 
A21 → A1 
The correct set of activation records along with 
their access links is given by


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Reason: 
In lexical scoping, access link points to the 
activation record of the nearest enclosing (static 
parent) procedure. 
- Calling chain: Main → A1 → A2 → A21 → A1 
- Access links: 
A1 (first call) → Main 
A2 → Main 
A21 → A2 
A1 (last call) → Main 
- All access links point according to static 
(lexical) nesting, not calling sequence. 
Option (D) correctly represents these access links.


</details>

---


### Q25. [GATE CSE - 2011 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider evaluating the following expression tree on 
a machine with load -store architecture in which 
memory can be accessed only through load and store 
instructions. The variables a, b, c, d and e initially 
stored in memory. The binary operators used in th is 
expression tree can be evaluate by the machine only 
when the operands are in registers. The instructions 
produce results only in a register. If no intermediate 
results can be stored in memory, what is the minimum 
number of registers needed to evaluate t his 
expression?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

Load R1, a ; R1 ← M[a] 
 Load R2, b ; R2 ← M[b] 
 Sub R1, R2 ; R1 ← R1 – R2 
 Load R2, c ; R2 ← M[c] 
 Load R3, d ; R3 ← M[d] 
 Add R2, R3 ; R2 ← R2 + R3 
 Load R3, e ; R3 ← M[e] 
 Sub R3, 3 ; R3 ← R3 – R2 
 Add R1, R3 ; R1 ← R1 + R3 
 Total 3 Registers are required minimum


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The program below uses six temporary variables a, 
b, c, d, e, f. 
 a = 1 
 b = 10 
 c = 20 
 d = a+b 
 e = c+d 
 f = c+e 
 b = c+e 
 e = b+f 
 d = 5+e 
 return d+f 
 Assuming that all operations take their operands 
from registers, what is the minimum number of 
registers needed to execute  this program without 
spilling?


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Here a, b, and c all have 3 different values so we 
need atleast 3 registers r1, r2 and r3. 
 Assume 'a' is mapped to r1, 'b' to r2 and 'c' to r3. 
 d = a + b, after this line if u notice 'a' is never present 
on right hand side, so we can map 'd' to r1. 
 e = c + d, after this line 'd' is never present on rhs, so we 
can map 'e' to r1. 
 at this time mapping is 
 r1 --- e 
 r2 --- b 
 r3 --- c 
 We have 3 registers for e, b and c. 
 f = c + e 
 b = c + e 
 These two are essentially doing the same thing, after these 
two line 'b' and 'f' are the same so we can skip computing 
'f' or need not give any new register for 'f'. And wherever 
'f' is present we can replace it with 'b', because neither of 'f' 
and 'b' are changing afte r these two lines, so the value of 
these will be 'c+e' till the end of the program. 
 At second last line "d = 5 + e" 
 here 'd' is introduced, we can map it to any of the register 
r1 or r3, because after this line neither of 'e' or 'c' is 
required. Value of 'b' is required because we need to return 
'd+f', and 'f' is essentially equal to 'b' 
 finally code becomes 
 r1 = 1 
 r2 = 10 
 r3 = 20 
 r1 = r1 + r2 
 r1 = r3 + r1 
 r2 = r3 + r1 
 r2 = r3 + r1 
 r1 = r2 + r2 
 r3 = 5 + r1 
 return r3 + r2 
 Therefore minimum 3 registers needed.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which languages necessarily need heap allocation  
in the runtime environment?


- **(A)** Those that support recursion

- **(B)** Those that use dynamic scoping

- **(C)** Those that allow dynamic data structures

- **(D)** Those that use global variables



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Dynamic memory is allocated on the heap by the 
system. So the languages which allow dynamic data 
structure require heap allocation at runtime.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following C code segment.    
  for (i = 0; < i< n; i++)  
 {  
     for (j=0; j< n; j++)  
     {  
         if (i%2)  
         {  
             x += (4*j + 5*i);  
             y += (7 + 4*j);  
         }  
     }  
 } 
 Which one is false?


- **(A)** The code contains loop-in variant computation

- **(B)** There is scope of common sub -expression 
elimination in this code

- **(C)** There is scope strength reduction in this code

- **(D)** There is scope of dead code elimination in this 
code



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

4 * j  is used at two places- so common subexpression 
elimination is possible, i % 2 is loop invariant for the 
inner loop, 5 * i is also loop invariant for inner loop 
 x += 5 * i can be replaced by x += p;  
p += 5; (p must be initialized to 0 before the loop). 
 Thus replacing * with + gives strength reduction. The 
code does not contain unreachable or dead code. 
because all statements inside the loops are reachable 
during the execution of the loops. 
 So, only (D) is false here. 
<!-- PAGE 292 -->
COMPILER DESIGN


</details>

---


### Q29. [GATE CSE - 2010 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Some code optimizations are carried out on the 
intermediate code because


- **(A)** They enhance the portability of the compiler to 
other target processors

- **(B)** Program analysis is more accurate on 
intermediate code than on machine code

- **(C)** The information from dataflow analysis cannot 
otherwise be used for optimization

- **(D)** The information from the front end cannot 
otherwise be used for optimization



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Option (B) is also true. But the main purpose of 
doing some code-optimization on intermediate 
code generation is to enhance the portability of the 
compiler to target processors. So Option A) is more 
suitable here. Intermediate code is 
machine/architecture independent code. So a 
compiler can optimize it without worr ying about 
the architecture on which the code is going to 
execute (it may be the same or the other). So that 
kind of compiler can be used by multiple different 
architectures. In contrast to that, suppose code 
optimization is done on target code, which is 
machine/architecture dependent, then the compiler 
has to be specific about the optimizations on that 
kind of code. In this case the compiler can't be used 
by multiple different architectures, because the 
target code produced on different architectures 
would be different. Hence portability reduces here.


</details>

---

