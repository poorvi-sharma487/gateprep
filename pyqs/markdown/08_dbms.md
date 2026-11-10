# Database Management Systems


> **Subject:** Database Management Systems  

> **Pages in Book:** 367–450  

> **Total Modules:** 6


## Topics in this Subject


## Topic 1: FARRAY


### Q1. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In the context of schema normalization in relational 
DBMS, consider a set F of functional dependencies. The 
set of all functional dependencies implied by F is called 
the closure of F. To compute the closure of F, 
Armstrong’s Axioms can be applied. Consider X, Y, and 
Z as sets of attributes over a relational schema. The three 
rules of Armstrong’s axioms are described as follows. 
 Reflexivity: If Y ⊆ X, then X → Y 
Augmentation: If X → Y, then XZ → YZ for any Z 
Transitivity: If X → Y and Y → Z, then X → Z 
 The additional rule of Union is defined as follows. 
 Union: If X → Y and X → Z, then X → YZ 
 It can be proved that the additional rule of Union is also 
implied by the three rules of Armstrong’s Axioms. 
Listed below are four combinations of these three rules. 
Which one of these combinations is both necessary and 
sufficient for the proof?


- **(A)** Reflexivity, Augmentation, and Transitivity

- **(B)** Reflexivity and Augmentation

- **(C)** Transitivity

- **(D)** Augmentation and Transitivity



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -D


**Step-by-Step Explanation:**

Given 
 X → Y and X → Z 
 Need to prove X → YZ 
 Step 1 (Augmentation) 
 From X → Y, augment with X: 
 X → Y 
⇒ XX → XY 
 From X → Z, augment with Y: 
 X → Z 
⇒ XY → YZ 
 Step 2 (Transitivity) 
 XX → XY 
 XY → YZ 
 ⇒ XX → YZ 
 Since XX = X 
 ⇒ X → YZ 
 Only Augmentation + Transitivity used. 
GATE CSE-2006  MCQ  (2-MARKS) 
GATE CSE-2005  MCQ  (2-MARKS) 
GATE CSE-2005  MCQ (1-MARKS) 
GATE CSE-2005  MCQ (1-MARKS) 
GATE CSE-2005  MCQ  (2-MARKS) 
<!-- PAGE 376 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q2. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let P, Q, R and S be the attributes of a relation in a 
relational schema. Let X → Y indicate functional 

```c
dependency in the context of a relational database, where 
X, Y ⊆ {P, Q, R, S}. 
 Which of the following options is/are always true?
```


- **(A)** If {P, Q} → {R} and {P} → {R}, then     {Q} 
→ {R}

- **(B)** If {P, Q} → {R}, then ({P} → {R} or {Q} → 
{R})

- **(C)** If {P} → {R} and {Q} → {S}, then {P, Q} → 
{R, S}

- **(D)** If {P} → {R}, then {P, Q} → {R}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C & D


**Step-by-Step Explanation:**

1. If {P, Q} → {R} and {P} → {R}, then {Q} → {R} 
{P} → {R} means R is functionally dependent on P 
● Even though {P, Q} → {R} holds, the dependency 
is already satisfied by P alone 
● Removing P leaves Q alone, which does not 
necessarily determine R 
 Not always true 
 2. If {P, Q} → {R}, then ({P} → {R} or {Q} → 
{R}) 
● It is possible that only the combination (P, Q) 
determines R 
● Neither P nor Q individually may determine R 
 Not always true 
 3. If {P} → {R} and {Q} → {S}, then {P, Q} → 
{R, S} 
● From {P} → {R}, by augmentation ⇒ {P, Q} → 
{R} 
● From {Q} → {S}, by augmentation ⇒ {P, Q} → 
{S} 
● By union rule ⇒ {P, Q} → {R, S} 
 Always true 
 4. If {P} → {R}, then {P, Q} → {R} 
● By augmentation rule, adding attributes to LHS 
preserves dependency 
 Always true 
 Final Answer: 
 C and D


</details>

---


### Q3. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relational database schema with a relation R(A, 
B, C, D). If {A, B} and {A, C} are the only two candidate 
keys of the relation R, then the number of super keys of 
relation R is ______ (answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Candidate keys: {A,B} and {A,C} 
 A superkey is any superset of a candidate key. 
 Supersets of {A,B} using {C, D}: 
{A,B}, {A,B,C}, {A,B,D}, {A,B,C,D} → 4 
 Supersets of {A,C} using {B, D}: 
{A,C}, {A,B,C}, {A,C,D}, {A,B,C,D} → 4 
 Common sets: {A,B,C}, {A,B,C,D} → 2 
 Total superkeys = 4 + 4 − 2 = 6


</details>

---


### Q4. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In the context of relational database normalization, which 
of the following statements is/are true?


- **(A)** It is always possible to obtain a dependency- 
  preserving 3NF decomposition of a relation

- **(B)** It is always possible to obtain a dependency -
preserving 1NF decomposition of a relation

- **(C)** It is not always possible to obtain a dependency -
preserving BCNF  decomposition of a relation

- **(D)** It is not always possible to obtain a dependency -
preserving 2NF decomposition of a relation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A,B,C


**Step-by-Step Explanation:**

A. Dependency-preserving 3NF decomposition. 
The 3NF synthesis algorithm always produces a 
lossless and dependency-preserving decomposition. 
 True 
 B. Dependency-preserving 1NF decomposition. 1NF 
only requires atomic attributes. 
We can always convert a relation to 1NF without 
decomposing dependencies (even keeping the same 
relation), so dependency preservation is possible. 
 True 
 C. Dependency-preserving BCNF decomposition 
 is not guaranteed to preserve dependencies. Classic result 
in normalization theory.: 
 True 
 D. Not Dependency-preserving  
 2NF decomposition can be done while preserving 
dependencies: False


</details>

---


### Q5. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema along with all 
the functional dependencies that hold on them. 

```c
R1(A,B,C,D,E):{D→E,EA→B,EB→C} 
R2(A,B,C,D):{A→D,A→B,C→A}
```


- **(A)** R1 is in 3NF

- **(B)** R2 is in 3NF

- **(C)** R1 is NOT in 3NF

- **(D)** R2 is NOT in 3NF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C, D


**Step-by-Step Explanation:**

A relation is in 3NF if for every functional dependency 
X→Y, if X is a super key, or Y is a prime attribute. 
 R1(ABCDE){D→E, EA→B, EA→C} 
 AD is a candidate key. 
 D→E (Violation: D is not a super key, E is not prime). 
EA→B (Violation: EA is not a super key, B is not prime). 
EB→C (Violation: EB is not a super key, C is not prime). 
 R1 is not in 3NF. 
R2(ABCD) 
 {A→D, A→B, C→A} 
 C+ ={A,B,C,D} 
 C is a candidate key. 
 A→D (Violation: A is not a super key, D is not prime). 
A→B (Violation: A is not a super key, B is not prime). 
C→A (No violation: C is a superkey). 
R2 is not in 3NF.


</details>

---


### Q6. [GATE CSE-2025  SET- 2 MSQ ( 2-MARK]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relational schema team(name , city , owner) 

```c
with functional dependencies {name → city , name → 
owner} .  
The relation team is decomposed into two relations,
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C


**Step-by-Step Explanation:**

Key of team is name. 
LHS of each FD is super key, therefore team is in BCNF. 
Every BCNF relation is in 3NF. 
t1 (name, city) has FD: name → city is in BCNF. t2 
(name, owner) has FD: name → owner is in BCNF. 
Both t1 and t2 has common attribute 'name' and is key in 
t1 and t2 , hence the decomposition is lossless.


</details>

---


### Q7. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about a relation R in 
first normal form (1NF) is/are TRUE ?


- **(A)** R can have a multi-attribute key

- **(B)** R cannot have a foreign key

- **(C)** R cannot have a composite attribute

- **(D)** R cannot have more than one candidate key



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A,C


**Step-by-Step Explanation:**

R cannot have a foreign key ,R cannot have more than 
one candidate key are straight forward false because we 
can have a foreign key in 1NF and also we can have more 
than one candidate key. 
 The correct answer is R can have a multi-attribute key and 
R cannot have a composite attribute


</details>

---


### Q8. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The symbol → indicates functional dependency in the 
context of a relational database. Which of the following 
options is/are TRUE?


- **(A)** (X,Y)→(Z,W) implies X→(Z,W)

- **(B)** (X,Y)→(Z,W) implies (X,Y)→Z

- **(C)** ((X,Y)→Z and W→Y) implies (X,W)→Z

- **(D)** (X→Y and Y→Z) implies X→Z



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C,D


**Step-by-Step Explanation:**

Option B - Decomposition rule of functional 
dependencies.  
 Option C - Apply augmentation rule with X on W -> Y, 
Then apply Transitivity rule to get X, W -> Z.  
 Option D - Definition of Transitivity rule for functional 
dependencies 
<!-- PAGE 377 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q9. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A functional dependency 𝐹: 𝑋 → 𝑌 is termed as a useful 
fimctional dependency if and only if it satisfies all the 
following three conditions: 
 𝑋 is not the empty set. 
 𝑌 is not the empty set. 
 Intersection of 𝑋 and 𝑌 is the empty set. 
 For a relation 𝑅 with 4 attributes, the total number of 
possible useful functional dependencies is ____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (50)


**Step-by-Step Explanation:**

(I) for One – three attribute 
 No. of  
FDs 
Functional Dependencies 
A B, C, D 7 A→B, A→C, A→D, A→BC, 
A→BD, A→CD, 
A→BCD 
B A, C, D 7 B→A, B→C, B→D, B→AC, 
B→AD, B→CD, 
B→ACD 
C A, B, D 7 C→A, C→B, C→D, C→AB, 
C→AD, C→BD, 
C→ABD 
DA, B, C 7 D→A, D→B, D→C, D→AB, 
D→AC, D→BC, 
D→ABC 
Total FDs = 28 
(ii) for Two - Two Attributes 
𝐴𝐵 → 𝐶𝐷 [22 − 1] = 3   {𝐴𝐵 → 𝐶, 
𝐴𝐵 → 𝐷, 𝐴𝐵 → 𝐶𝐷} 
𝐴𝐶 → 𝐵𝐷 [22 − 1] 
= 3  {𝐴𝐶 → 𝐵, 
         𝐴𝐶 → 𝐷, 𝐴𝐶 → 𝐵𝐷} 
𝐴𝐷 → 𝐵𝐶 [22 − 1] = 3 {𝐴𝐷 → 𝐵, 
𝐴𝐷 → 𝐶, 𝐴𝐷 → 𝐵𝐶} 
𝐵𝐶 → 𝐴𝐷 [22 − 1] = 3 {𝐵𝐶 → 𝐴, 
           𝐵𝐶 → 𝐷, 𝐵𝐶 → 𝐴𝐷} 
𝐵𝐷 → 𝐴𝐶 [22 − 1] = 3 {𝐵𝐷 → 𝐴, 
        𝐵𝐷 → 𝐶, 𝐵𝐶 → 𝐴𝐶} 
𝐶𝐷 → 𝐴𝐵 [22 − 1] = 3 {𝐶𝐷 → 𝐴, 
         𝐶𝐷 → 𝐵, 𝐶𝐷 → 𝐴𝐵} 
 Total FDs = 18 FD's 
 (iii) for Three Attributes 
𝐴𝐵𝐶 → 𝐷
𝐴𝐵𝐷 → 𝐶
𝐵𝐶𝐷 → 𝐴
𝐶𝐷𝐴 → B
 Total FDs = 4 FD 
 So Total Useful FDs = 28 + 18 + 4 = 50 Ans 
OR 
 𝑥 → 𝑦  Useful 𝐹𝐷 with 4 Attribute 
 Case I: for a Single-single Attributes 
 X -> Y   4C1    *  [23-1] 
 A->BCD [23-1] 
 B->ACD 
 C->ABD 
 D->ABC  4 * 7 =28  
 CASE II : for a Two - Two Attributes 
𝑥 → 𝑦 
 2Attribute → 2Attribute 4𝐶2 ∗ (22 − 1) 
                                                   6 ∗ 3 =  (18)  
 CASE III:- for Three-Three Attributes 
𝑥 → 𝑦 
3-ttribute attribute 
         4𝐶3 ∗ (21 − 1) 
4 ∗ 1 =  (4)  
 Total useful FD = 28 + 18 + 4 = 50 Ans


</details>

---


### Q10. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the options given below refers to the 
degree (or arity) of a relation in relational database 
systems?


- **(A)** Number of attributes of its relation schema.

- **(B)** Number of tuples stored in the relation.

- **(C)** Number of entries in the relation.

- **(D)** Number of distinct domains of its  relation schema.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Relational Model Definitions: 
 A relation is a table with columns and rows. 
 An attribute is a named column of a relation. 
 A tuple is a row of a relation. 
 A domain is a set of allowable values for one or more 
attributes. 
 The degree of a relation is the number of attributes it 
contains. 
 The cardinality of a relation is the number of tuples it 
contains. 
 A relational database is a collection of normalized 
relations with distinct relation names. 
 The intension of a relation is the structure of the relation 
including its domains. 
 The extension of a relation is the set of tuples currently in 
the relation.


</details>

---


### Q11. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relation R(A,B,C,D,E) with the following three 
functional dependencies. 
 AB→C; BC→D; C→E 
 The number of super keys in the relation R is...


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 8


**Step-by-Step Explanation:**

AB → C 
 BC → D 
 C → E 
 are the FDs in the question. If you observe the given FD 
set, A and B are Independent attributes. 
∴ every key must contain A and B. 
Let’s compute Keys of the relations : 
(AB)+=ABCDE 
Independent Attributes form the Key, then It is unique 
and minimal candidate key. 
 There are 3 more attributes in the given relation, So 
adding them to Candidate Key results Super key. 
Every attribute has two choices (either add to candidate 
key or left it), and there are 3 such attributes 
∴ No . of super keys = 2.2.2 = 8 
Note that Every candidate Key is also Super Key. 
Alternatively you can think like, set S = {C,D,E} (which 
are non prime attributes) and it’s power set must contains 
23=8 elements 
P(S)={ϕ,{C},{D},{E},{CD},{CE},{DE},{CDE}} 
Any Subset combining with ‘AB’ will form one distinct 
super key. 
L.H.S   R.H.S 
<!-- PAGE 378 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q12. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In a relational data model, which one of the following 
statements is TRUE?


- **(A)** A relation with only two attributes is always in 
BCNF.

- **(B)** If all attributes of a relation are prime attributes, 
then the relation is in BCNF.

- **(C)** Every relation has at least one non-prime attribute.

- **(D)** BCNF decompositions preserve functional 
dependencies.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Option A : A relation with only two attributes is always 
in BCNF 
 let relation R(A,B), then possible FD’s are 
1. A → B, in this case A is minimal Superkey, So 
this relation should be in BCNF 
2. B → A, in this case B is minimal Superkey, So 
this relation should be in BCNF 
3. AB → AB , in this case AB is minimal Superkey, 
So this relation should be in BCNF 
 So, given statement is Correct. 
 Alternatively we can think like, We can’t further divide 
a relation which had only two attributes, then it must be 
in BCNF. 
 Option B : If all the attributes of a relation are Prime 
attributes, then the relation is in BCNF classic counter 
example : R(A,B,C) with FD set = {AB → C, C → A} 
in this relation all attributes are prime but this relation 
is not in BCNF due to “ C → A ” 
 Correct statement is :If all the attributes in the relation 
are Prime attributes, then it is in 3NF. 
 Option C : Every relation has at least one non-prime 
attribute counter example : R(A,B,C) with FD set = 
{AB → C, C → A} in this relation all attributes are 
prime 
 Correct statement is :Every relation has atleast one 
prime attribute. 
 Option D : BCNF decompositions preserve functional 
dependencies for any relation, we can guarentee there 
exist atleast one decomposition which is in 3NF, 
lossless and Dependency Preserving. But we can 
notguarentee that atleast one decomposition which is 
BCNF, lossless and Dependency Preserving. 
 Option A is correct


</details>

---


### Q13. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Suppose the following functional dependencies hold on a 
relation U with attributes P, Q R, S, and T: 
 P → QR 
 RS → T 
 Which of the following functional dependencies can be 
inferred from the above functional dependencies?


- **(A)** PS → T

- **(B)** PS → Q

- **(C)** P → R

- **(D)** R → T



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A,B,C


**Step-by-Step Explanation:**

Explanation :- A, B, C 
In option (D) R → T, we find (R)+.  
R+ = {R} so in R+ we do not have T so can’t be 
inferred. Hence false.  
In option (C) P → R, (P)+ = {PQR} and we find R so 
it can be inferred. Hence True. 
In option (B) PS → Q, (PS)+ = {PSQRT} so it can be 
inferred. Hence True. 
In option (A) PS → T, (PS)+ = {PSQRT} so it can be 
inferred. Hence True.


</details>

---


### Q14. [GATE CSE-2022  MCQ (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the relation R(P, Q, S, T, X, Y, Z, W) with the 
following functional dependencies. 
 PQ → X; P→YX ; Q→ Y; Y → ZW 
 Consider the decomposition of the relation R into the 
constituent relations according to the following two 
decomposition schemes.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :C 
Testing Decomposition 𝐷1 (Lossless) 
To determine if a multh-relation decomposition is 
lossless, we can binary-merge the relations step by 
step using their intersections: 
1. Merge (𝑃, 𝑄, 𝑆, 𝑇) and (𝑃, 𝑇, 𝑋) : 
 Their common attribute intersection is {𝑃, 𝑇}. 
o Since 𝑃 → 𝑌𝑋, we know that 𝑃 → 𝑋. 
Therefore, 𝑃 (and by extension, {𝑃, 𝑇} ) is a 
superkey for the relation (𝑃, 𝑇, 𝑋). 
 This intersection forms a key for one of the 
relations, making this merge lossless. The 
combined relation is (𝑃, 𝑄, 𝑆, 𝑇, 𝑋). 
2. Merge ( 𝑃, 𝑄, 𝑆, 𝑇, 𝑋 ) and ( 𝑄, 𝑌 ): 
 Their intersection is {𝑄}. 
 The given dependency is 𝑄 → 𝑌, so 𝑄 is a 
superkey for (𝑄, 𝑌). This merge is lossless. 
The combined relation becomes ( 
𝑃, 𝑄, 𝑆, 𝑇, 𝑋, 𝑌 ). 
3. Merge (𝑃, 𝑄, 𝑆, 𝑇, 𝑋, 𝑌) and (𝑌, 𝑍, 𝑊) : 
o Their intersection is {𝑌}. 
 The given dependency is 𝑌 → 𝑍𝑊, so 𝑌 is a 
superkey for (𝑌, 𝑍, 𝑊). This merge is lossless. 
Since all relations successfully merge back without 
losing information, 𝐷1 is a lossless decomposition. 
Testing Decomposition 𝐷2 (Lossy) 
Let's analyze the relation (𝑇, 𝑋) in this scheme: 
 To merge (𝑇, 𝑋) with any other relation in 𝐷2 
(such as (𝑃, 𝑄, 𝑆) ), we look for a common 
attribute intersection. 
 The intersection between (𝑇, 𝑋) and the other 
relations is empty (0). 
 Since the intersection does not contain a 
candidate key for either relation, we cannot 
guarantee a lossless join. 
Therefore, 𝐷2 is a lossy decomposition. 
<!-- PAGE 379 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q15. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relational table R that is  in 3NF, but not in 
BCNF. Which one of the following statements is TRUE?


- **(A)** A cell in R holds a set instead of an atomic value.

- **(B)** R has a nontrivial functional dependency X → A, 
where x is not a super key and A is a non -prime 
attribute and X is not a proper subset of any key.

- **(C)** R has a nontrivial functional dependency X → A, 
where x is not a super key and A is a non -prime 
attribute and X is a proper subset of some key.

- **(D)** R has a nontrivial functional dependency X → A, 
where X is not a super key and A is a  
  prime attribute.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -D


**Step-by-Step Explanation:**

Explanation 
Consider a relation R(ABCD) and the functional 
dependencies as 
FDs:  
AB → C 
BC → A 
(BD)+ = BD ✖ 
(ABD)+ = ABDC ✔ 
(CBD)+ = CBDA ✔ 
Candidate keys = {ABD, CBD} 
• The relation R is in 3NF, as there are no transitive 
dependencies. 
• The relation R is not in BCNF, because the left hand 
side of both the FD’s are not the Super keys. 
• In R, BC → A is a non -trivial FD and in which BC is 
not a Super key and A is a prime attribute. 
       So, D is the correct answer.


</details>

---


### Q16. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let the set of functional dependencies F = {QR → S, R 
→ P, S → Q} hold on a relation schema X = (PQRS). 
X is not in BCNF. Suppose X is decomposed into two 
schemas Y and Z, where Y = (PR) and Z = (QRS). 
Consider the two statements given below. 
I. Both Y and Z are in BCNF 
II. Decomposition of X into Y and Z is dependency 
preserving and lossless. 
 Which of the statements is/are correct ?


- **(A)** I only

- **(B)** II only

- **(C)** Neither I nor II

- **(D)** Both I and II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
Y = (PR) 
R → P 
R+ = RP 
In the dependency R → P, 'R' is a super key. So, Y is in 
BCNF. 
Z = (QRS) 
QR → S 
S → Q 
CK's = QR, RS 
In, the dependency S → Q, 'S' is not a super key. So, Z 
is not in BCNF. 
Y is in BCNF and Z is not in BCNF. 
'R' is common attribute in the relations Y and Z and R 
is candidate key for Y. So, the decomposition is 
lossless. 
all dependencies are preserved, 
So, the decomposition is dependency preserving. 
Hence, Statement II is correct.


</details>

---


### Q17. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following four relational schema. For each 
schema, all non -trivial functional dependencies are 
listed. The underlined attributes are the respective 
primary keys. 
 Schema I: Registration (roll no, courses) 
 Field ‘course’ is a set-valued attribute containing the set of 
courses a student has registered for. 
 Non-trivial functional dependency 
 roll no→ courses 
 Schema II: Registration(roll no, courseid, email) 
 Non-trivial functional dependencies: 
 roll no, course id→ email 
 Email →roll no 
 Schema III: Registration (roll no, course id, marks, grade) 
 Non-trivial functional dependencies: 
 roll no, course id→ marks ,grade 
 marks→ grade 
 Schema IV: Registration (roll no, course id, credit) 
 Non-trivial functional dependencies: 
 roll no, courseid→ credit 
 courseid→ credit 
 Which one of the relational schemas above is in 3NF but 
not in BCNF?


- **(A)** Schema I

- **(B)** Schema II

- **(C)** Schema III

- **(D)** Schema IV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
Schema I: 
Registration(rollno, courses) 
       Here: Non-trivial functional dependencies:  
       rollno → courses 
So, here in Registration ‘rollno’ is a primary key. 
       So, Schema I is in BCNF and 3NF. 
Schema II: 
Registrstion (rollno, courseid, email) 
       Here: Non-trivial functional dependencies: 
rollno, courseid → email 
email → rollno 
From the given schema the candidate key is (rollno + 
courseid). 
There is no part of the key in the left hand of the FD’s 
so, it is in 2NF. 
In the FD email→rollno, email is non-prime attribute but 
rollno is a prime attribute. 
So, we don’t have a transitive dependency. 
As we have no transitive dependencies so, the schema is 
in 3NF. 
But in the second FD: email→rollno, email is not a 
superkey. 
So, it is failing the property of BCNF. 
Hence, the schema II is in 3NF but not in BCNF. 
Schema III: 
Registration(rollno, courseid,marks, grade) 
Here: Non-trivial functional dependencies: 
rollno, courseid → marks, grade 
marks → grade 
For the schema the candidate key is (rollno + courseid). 
Here, we don’t have any partial dependency. 
So, the schema is in 2NF. 
In the FD:marks → grade, both the attributes marks and 
grade are non-prime. 
So, it is a transitive dependency. 
The FD is violating the property of 3NF. 
The schema Registration is in 2NF but not in 3NF. 
Schema IV: 
Registration (rollno, course id, credit) 
       Here: Non-trivial functional dependencies: 
roll no, course id → credit 
courseid → credit 
The candidate key is (roll no + course id). 
Now ,in the FD, course id → credit, course id is part of the 
key (prime attribute) and credit is non-prime. 
The schema is violating the property of 2NF.


</details>

---


### Q18. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following tables T1 and T2. 
 In table T1, P is the primary key and Q is the foreign key 
referencing R in table T2 with on -delete cascade. In table 
T2, R is the primary key and S is the foreign key 
referencing P in table T1 with on-delete set NULL and on-
update cascade. In order to delete record (3, 8) from table 
T1, the number of additional records that need to be deleted 
from table T1 is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -0


**Step-by-Step Explanation:**

Explanation
 Therefore, number of additional records that needs to be 
deleted from the table T1 is 0


</details>

---


### Q19. [GATE CSE-2020 MCQ  (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The following functional dependencies hold true for the 

```c
relational schema R{V, W, X, Y, Z}: 
 V → W 
 VW → X
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation 
Step 1: 
  Remove the redundancy in the RHS. 
So, we get: V → W, VW → X, Y → V, Y → X, Y→ Z 
Step 2: 
<!-- PAGE 380 -->
DATABASE MANAGEMENT  SYSTEM 
Find the closure of each functional dependency with or 
without that functional dependency to check 
redundancy in each rule. 
V → W, VW → X, Y → V, Y → X, Y→ Z 
(V)+ = V × 
(VW)+ = VW × 
(Y)+ = YXZ 
(Y)+ = YVW × 
(Y)+ = YVWX 
Without Y → X, the closure of Y is deriving ‘X’ from 
the remaining attributes. 
So, we can remove Y → X as its redundant. 
Step 3: 
 Remove the redundancy in the LHS. 
V → W, VW → X, Y → V, Y → Z 
(V)+ = VW, the closure of V is deriving W from the 
remaining FD’s. 
So, W is redundant. We can remove it. 
So, the minimal canonical cover  is 
V→W, V→X, Y→V, Y→Z


</details>

---


### Q20. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A database of research articles in a journal uses the 
following schema. 
 (VOLUME, NUMBER, STARTPAGE, ENDPAGE, 
TITLE, YEAR, PRICE) 
 The primary key is (VOLUME, NUMBER, 
STARTPAGE, ENDPAGE) and the following 
functional dependencies exist in the schema. 
 (VOLUME, NUMBER, STARTPAGE, ENDPAGE) → 
TITLE 
 (VOLUME, NUMBER) → YEAR 
 (VOLUME, NUMBER, STARTPAGE, ENDPAGE) → 
PRICE 
 The database is redesigned to use the following schema. 
 (VOLUME, NUMBER,  STARTPAGE, ENDPAGE, 
TITLE, PRICE) 
 (VOLUME, NUMBER, YEAR) 
 Which is the weakest normal form that the new database 
satisfies, but the old one does not?


- **(A)** 1NF

- **(B)** 2NF

- **(C)** 3NF

- **(D)** BCNF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
Journal (V, N, S, E, T, Y, P) 
V – VOLUME 
N – NUMBER 
S – STARTPAGE 
E – ENDPAGE 
T – TITLE 
Y – YEAR 
P – PRICE 
Primary key: (V, N, S, E) 
FD set: 
(V, N, S, E) → T 
(V, N) → Y 
(V, N, S, E) → P 
In (V, N) → Y 
Now, we check each functional dependency  one by 
one. 
In VN→ Y,  we have V, N as a part of the candidate 
key and Y is non-prime attribute. 
So, it is a Violation of 2NF 
Now, the schema “Journal” is in 1NF but not in 2NF. 
So,2NF is the weakest normal form that the new 
database satisfies, but the old one does not.


</details>

---


### Q21. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following is NOT a super key in a relational 
schema with attributes V, W, X, Y ,Z and primary key 
VY?


- **(A)** VXYZ

- **(B)** VWXZ

- **(C)** VWXY

- **(D)** VWXYZ



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
As it is mentioned in the Question that “VY” is a 
primary key of the relational schema. 
So, any superset of “VY” is a super key. So, option B 
does not contain “Y” and is the correct answer.


</details>

---


### Q22. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the relation X(P, Q, R, S, T, U) with the 
following set of functional dependencies 
F = {{P, R} → {S, T} 
{P, S, U} → {Q, R}} 
Which of the following is the trivial functional 
dependency in F+ is closure of F?


- **(A)** {P, R} → {S, T}

- **(B)** {P, R} → {R, T}

- **(C)** {P, S} → {S}

- **(D)** {P, S, U} → {Q}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation 
     X→Y is trivial if Y⊆ X. 
So, PS → S is the trivial FD as S ⊆ PS.


</details>

---


### Q23. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Given the following two statements: 
 S1: Every table with two single-valued attributes is in 1NF, 
2NF, 3NF and BCNF. 
 S2: AB → C, D → E, E → C is a minimal cover for the set 
of functional dependencies AB → C, D → E, AB → E, E 
→ C. 
 Which one of the following is CORRECT?


- **(A)** S1 is TRUE and S2 is FALSE.

- **(B)** Both S1 and S2 are TRUE.

- **(C)** S1 is FALSE and S2 is TRUE.

- **(D)** Both S1 and S2 are FALSE.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation 
BCNF (Boyce Codd Normal Form): 
 A relation 𝑅 is in BCNF whenever a non-
trivial functional dependency 𝑋 → 𝐴 holds in 
R , where X is the super-key of R . 
 A binary relation is always in BCNF. A binary 
relation contains only two attributes. 
 Functional dependency that is possible from a 
binary relation is one. 
Example: 
Consider R(A, B), in this only one functional 
dependency is possible either A → B or B → A 
In both the cases, left hand side will be the super 
key. In this way 𝑅(𝐴, 𝐵) is always in BCNF. 
If a relation is in BCNF then it is in 1NF, 2NF and 
3 NF 
Statement 2: FALSE 
Set 1 = {AB → C, D → E, AB → E, E → C} 
Set 2 = {𝐴𝐵 → 𝐶, 𝐷 → 𝐸, 𝐸 → 𝐶} 
Set 2 cannot derive 𝐴𝐵 → 𝐸 since In set 
𝑍(𝐴𝐵)+ = {𝐴, 𝐵, 𝐶} 
The two sets of functional dependencies are not 
the same and hence one cannot be minimal of 
other.


</details>

---


### Q24. [GATE CSE-2014  SET-1 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A prime attribute of a relation scheme R is an attribute that 
appears:


- **(A)** in all candidate keys of R,

- **(B)** in some candidate key of R

- **(C)** in a foreign key of R.

- **(D)** only in the primary key of R.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
A prime attribute of a relation scheme R is an attribute 
that appears in some candidate keys of R. It is not 
necessary to appear in all the candidate keys of Relation 
R. 
Ex: AB, BC, CD are candidate keys of R(ABCD). In the 
FDs set one attribute may not be part of all the FDs.


</details>

---


### Q25. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the relation scheme R = (E, F, G, H, I, J, K, L, 
M, N) and the set of functional dependencies {{E,F} → 
{G}, {F} → {I,J}, {E,H} → {K,L}, {K} → {M}, {L} 
→ {N}} on R. What is the key for R?


- **(A)** {E,F}

- **(B)** {E,F,H}

- **(C)** {E,F,H,K,L}

- **(D)** {E}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
Here , we need to find the candidate key of the Relation 
R: 
So, we take the closure of the attributes and check one by 
one for each option. (EF)+ = EFGIJ. So, EF is not a key. 
(EFH)+ = EFHGIJKLMN, EFH is deriving all the 
attributes of R. So, EFH is a key. 
If EFH is a key, then EFHKL will become the super key. 
(E)+ = E 
<!-- PAGE 381 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q26. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Given an instance of the STUDENTS relation as shown 
below. 
 For (StudentName, StudentAge) to be the key for  
 this instance, the value X should NOT be equal to______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 19


**Step-by-Step Explanation:**

Explanation 
As we already have one entry with StudentName as 
“Shankar” and StudentAge as 19, so, X value should 
not be 19 to make (StudentName,StudentAge) a key.


</details>

---


### Q27. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Relation R has eight attributes ABCDEFGH. Fields of R 
contain only atomic values.  
 F = {CH → G, A → BC, B → CFH, E → A, F → EG} 
is a set of functional dependencies (FDs) so that F+ is 
exactly the set of FDs that hold for R. 
 How many candidate keys does the relation R have?


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation 
The attribute D is not a part of any FD's,i.e it is an 
essential attribute. So, D can be a candidate key or it 
may be part of the candidate key. 
Now D+ = {D}. 
Hence,we need to add A,B,C,E,F,G,H to D and check 
which of them can be  Candidate keys of size 2. 
AD+ = {ABCDEFGH} 
BD+ = {ABCDEFGH} 
ED+ = {ABCDEFGH} 
FD+= {ABCDEFGH} 
But CD +, GD + and HD + does not implies all the 
attributes present in the Relation r and hence CD, GD 
and HD are not candidate keys. 
Here , the total number of Candidate keys are 4: i.e, 
AD, BD, ED and FD.


</details>

---


### Q28. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Relation R has eight attributes ABCDEFGH. Fields of R 
contain only atomic values.  
 F = {CH → G, A → BC, B → CFH, E → A, F → EG} is 
a set of functional dependencies (FDs) so that F+ is 
exactly the set of FDs that hold for R. 
 The relation R is ?


- **(A)** In 1NF, but not in 2NF.

- **(B)** In 2NF, but not in 3NF.

- **(C)** In 3NF, but not in BCNF.

- **(D)** In BCNF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation 
Here, candidate keys are 𝐴𝐷, 𝐵𝐷, 𝐸𝐷 and 𝐹𝐷. 
Partial dependency exists 𝐴 → 𝐵𝐶, 𝐵 → 𝐶𝐹𝐻 
and 𝐹 → 𝐸𝐺 etc. In the following 𝐹𝐷𝑠. 
For example partial dependency 𝐴 → 𝐶 exists in 
𝐴 → 𝐵𝐶 and 𝐵 → 𝐶 and 𝐵 → 𝐻 in 𝐵 → 𝐶𝐹𝐻. 
etc. 
So, given relation is in 1NF ,but not in 2NF.


</details>

---


### Q29. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following is TRUE?


- **(A)** Every relation in 3NF is also in BCNF

- **(B)** A relation R is in 3NF if every non- 
 prime   attribute of R is fully functionally 
  dependent  on every key of R

- **(C)** Every relation in BCNF is also in 3NF

- **(D)** No relation can be in both BCNF and 3NF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation 
As,BCNF is a stronger version of 3NF. So, we can 
comprehend from the definition of BCNF that:   every 
relation in BCNF will also be in 3NF.


</details>

---


### Q30. [GATE CSE-2014  SET-1 MCQ  (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relational table with a single record for each 
registered student with the following attributes. 
 1. Registration_ Num: Unique registration number of 
each registered student 
 2. UID: Unique identity number, unique at the 
national level for each citizen 
 3. BankAccount_Num: Unique account number at the 
bank. A student can have multiple accounts or join 
accounts. This attribute stores the primary account number. 
 4. Name: Name of the student 
 5. Hostel _ Room: Room number of the hostel  
 Which of the following options is INCORRECT?


- **(A)** Bank Account _ Num is a candidate key.

- **(B)** Registration _ Num can be a primary key.

- **(C)** UID is a candidate key if all students are  
          from the same country.

- **(D)** If S is a super key such that S∩UID is    
          NULL then S ∪ UID is also a super key. 
Student          
ID 
Student 
Name 
Student Email Student
Age 
CPI 
2345 Shankar shankar@mat
h 
X 9.4 
1287 Swati swati@ee 19 9.5 
7853 Shankar shankar@cse 19 9.4 
9876 Swati swati@mech 18 9.3 
8765 Ganesh ganesh@civil 19 8.7



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explanation 
Here, Bank Account Number cannot be a key, as if two 
students hold joint account then Bank Account 
Number will not uniquely determine other attributes. 
(a) Bank Account Number is a Candidate key: 
Incorrect or False Because A Student Can have 
Multiple Account & joint Account 
Example Assume 2 Person Ramesh & Suresh have 
Joint Account they Both have Same Account Number 
in a Primary Account Number. 
So Bank Account Number Cannot uniquely 
Determine. and Bank Account Number cannot 
Determine and Bank Account Number can’t be   
Candidate key 
(b) Registration Number can be primary key : True or 
Correct Because Registration Number is a uniquely 
for each  Registered student so it uniquely determine 
each tuple of Relation 
(c) UID is a candidate if all student are from same 
Country: Correct (or) True Because UID is Unique at 
National level  
for example in India Aadhar Card is unique for each 
Person of India. 
(d) If S is a super key then SUUID is also super key: 
correct (or) True Because Any superset of super key is 
also super key.


</details>

---


### Q31. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
 • Suppliers(sid:integer, sname:string,city:string 
,street:string ) 
• Parts(pid:integer, pname:string, 
      color:string)  
• Catalog(sid:integer, pid:integer, cost:real) 
 Assume that, in the suppliers relation above, each 
supplier and each street within a city has unique name, 
and (sname, city) forms a candidate key. No oth er 
functional dependencies are implied other than those 
implied by primary and candidate keys. Which one of 
the following is TRUE about the above schema?


- **(A)** The schema is in BCNF

- **(B)** The schema is in 3NF but not in BCNF

- **(C)** The schema is in 2NF but not in 3NF

- **(D)** The schema is not in 2NF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explantion:- 
Suppliers(sid, sname, city, street) 
Given: 
 Primary key ⇒sid 
 Candidate key ⇒ (sname, city) 
So FDs: 
 sid → sname, city, street 
 (sname, city) → sid, street 
Both determinants are candidate keys ⇒ BCNF satisfied 
Parts(pid, pname, color) 
 Key ⇒pid 
 pid → pname, color 
 Determinant is key ⇒ BCNF 
Catalog(sid, pid, cost) 
 Key ⇒ (sid, pid) 
 (sid, pid) → cost 
 Determinant is key ⇒ BCNF 
Conclusion 
All relations satisfy BCNF. 
1. 32. Answer :- C 
Explanation :  
Analyzing the Collection Relation 
The relation is Collection(Title, Author, 
Catalog_no) with the given candidate key 
{Author, Title}. 
 The only applicable functional dependency here is: 
Title, Author → Catalog no. 
 Because the left-hand side (Title, Author) is a 
candidate key, it perfectly satisfies the requirement 
for Boyce-Codd Normal Form (BCNF). 
 Since any relation in BCNF is automatically in 
3NF, Collection is in 3NF. 
2. Analyzing the Book Relation 
The relation is Book(Title, Author, Catalog_no, 
Publisher, Year, Price). First, let's find all the 
candidate keys for this relation: 
1. We are given that { Title, Author } is a key. 
<!-- PAGE 382 -->
DATABASE MANAGEMENT  SYSTEM 
2. If we compute the attribute closure of 
Catalog_no using the rule Catalog_no → Title, 
Author, Publisher, Year, we get those five 
attributes. Adding the third rule ( Publisher, 
Title, Year → Price), we can also derive Price. 
3. Because ( Catalog.no )+ = 
{Title, Author, Catalog no, Publisher, Year, 
Price}, Catalog no is also a candlidate key. 
Now we evaluate the normal forms against 
the rules: 
 BCNF / 3NF Violation: Look at the third 
dependency: Publisher, Title, Year → Price. 
 The left-hand side (Publisher, Title, Year) is 
not a superkey. 
 The right-hand side (Price) is a non-prime 
attribute (it is not part of any candidate key). 
 This violates both BCNF and 3 NF . 
 2NF Verification: A relation is in 2NF if 
there are no partial dependencies where a 
proper subset of a candidate key points to a 
non-prime attribute. Since no proper subset 
of {Title, Author} or {Catalog no} points to 
a non-prime attribute, it does not violate 2 
NF . 
Therefore, Book is in 2NF only. This 
matches option (c).


</details>

---


### Q32. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schemes for a library 
database: 
 Book (Title, Author, Catalog_no, Publisher, Year, Price) 
 Collection (Title, Author, Catalog_no) 
 with the following functional dependencies: 
 I. Title Author → Catalog_no  
II. Catalog_no → Title Author Publisher Year  
III. Publisher Title Year → Price 
 Assume {Author, Title} is the key for both schemes. 
Which of the following statements is true?


- **(A)** Both Book  and Collection are in BCNF

- **(B)** Both Book and Collection are in 3NF only

- **(C)** Book is in 2NF and Collection in 3NF

- **(D)** Both Book and Collection are in 2NF only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** c


</details>

---


### Q33. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let R(A, B, C, D, E, P, G) be a relational schema in 
which the following functional dependencies are 
known to hold: 
 AB → CD , DE → P, C → E , P → C , B → G 
 The relational schema R is


- **(A)** in BCNF

- **(B)** in 3NF, but not in BCNF

- **(C)** in 2NF, but not in 3NF

- **(D)** not in 2NF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explantion :- R(A, B, C, D, E, P, G) 
FDs: 
AB → CD 
DE → P 
C → E 
P → C 
B → G 
AB⁺ = {A, B, C, D, E, P, G} 
So AB is the candidate key. 
Prime attributes: A, B 
Non-prime: C, D, E, P, G 
Since B → G and B is a proper subset of key AB, 
partial dependency exists. 
Therefore, R is not in 2NF.


</details>

---


### Q34. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let R(A, B, C, D) be a relational schema with the 
following functional dependencies: 

```c
 F={A → B, B → C, C → D, D → B} 
 The decomposition of R into (A, B), (B, C), (B, D)
```


- **(A)** gives a lossless join, and is dependency preserving

- **(B)** gives a lossless join, but is not dependency 
preserving

- **(C)** does not give a lossless join, but is dependency 
preserving

- **(D)** does not give a lossless join and is not dependency 
preserving



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  
(A, B), (B, C) — common attribute is B and due to B 
→ C, B is a key for (B, C) and hence ABC can be 
losslessly decomposed into (A, B) and (B, C). 
(A, B, C), (B, D), common attribute is B and B → D is 
a FD (via B → C, C → D), and hence, B is a key for (B, 
D). So, decomposition of (A, B, C, D) into (A, B, C) 
and (B, D) is lossless. 
Thus the given decomposition is lossless. 
The given decomposition is also dependency preserving 
as the dependencies A → B is present in (A, B), B → C 
is present in (B, C), D → B is present in (B, D) and C 
→ D is indirectly present via C → B in (B, C) and B → 
D in (B, D).


</details>

---


### Q35. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is FALSE?


- **(A)** Any relation with two attributes is in BCNF

- **(B)** A relation in which every key has only one 
attribute is in 2NF

- **(C)** A prime attribute can be transitively dependent on 
a key in a 3NF relation

- **(D)** A prime attribute can be transitively dependent on 
a key in a BCNF relation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :-A. True — In a two-attribute relation, 
any non-trivial FD makes one attribute a key, so it is in 
BCNF. 
B. True — If every key is single attribute, no partial 
dependency is possible ⇒ 2NF satisfied. 
C. True — In 3NF, transitive dependency is allowed if 
RHS is a prime attribute. 
D. False — In BCNF, every determinant must be a 
superkey. So no transitive dependency (even on prime 
attribute) is allowed. 
Final Answer: D


</details>

---


### Q36. [GATE CSE-2009  MCQ  (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The following functional dependencies are given: 
 AB → CD 
AF → D 
DE → F 
C → G 
F → E 
G → A 
 Which one of the following options is false?


- **(A)** {CF}⁺ = {ACDEFG}

- **(B)** {BG}⁺ = {ABCDG}

- **(C)** {AF}⁺ = {ACDEFG}

- **(D)** {AB}⁺ = {ABCDG}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ➖C


**Step-by-Step Explanation:**

Explantion:- 
Check closures: 
(CF)⁺ 
 C → G → A 
 F → E 
 AF → D 
⇒ {A, C, D, E, F, G} (true) 
(BG)⁺ 
 G → A 
 AB → CD 
 C → G 
⇒ {A, B, C, D, G} (true) 
(AF)⁺ 
 AF → D 
 F → E 
 DE → F 
⇒ {A, D, E, F} (false) (cannot get C, G) 
(AB)⁺ 
 AB → CD 
 C → G 
G → A 
⇒ {A, B, C, D, G} (true) 
False option: C


</details>

---


### Q37. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relation R with five attributes V, W, X, Y, 
and Z. The following functional dependencies hold:  
VY→ W, WX → Z, and ZY → V.  
Which of the following is a candidate key for R?


- **(A)** VXZ

- **(B)** VXY

- **(C)** VWXY

- **(D)** VWXYZ



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- FDs: 
VY → W 
 WX → Z 
 ZY → V 
Check (VXY)⁺ 
VY → W 
 WX → Z 
Now have V, W, X, Y, Z ⇒ all attributes. 
<!-- PAGE 383 -->
DATABASE MANAGEMENT  SYSTEM 
Removing any one of V, X, or Y fails to get all 
attributes. 
 So it is minimal.  
Answer: b) VXY


</details>

---


### Q38. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a relation schema R = (A, B, C, D, E, H) on 
which the following functional dependencies hold: 
 { A → B, BC → D, E → C, D → A }. 
What are the candidate keys of R?


- **(A)** AE, BE

- **(B)** AE, BE, DE

- **(C)** AEH, BEH, BCH

- **(D)** AEH, BEH, DEH



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :- H is not in RHS of any FD ⇒ must be 
in every key. 
 E is not in RHS ⇒ must be in every key. 
Check combinations with E and H: 
AEH⁺ ⇒ all attributes 
 BEH⁺ ⇒ all attributes 
 DEH⁺ ⇒ all attributes 
So candidate keys are AEH, BEH, DEH.


</details>

---


### Q39. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements about normal 
forms is FALSE?


- **(A)** BCNF is stricter than 3NF

- **(B)** Lossless, dependency-preserving  
          decomposition into 3NF is always possible

- **(C)** Lossless, dependency-preserving  
           decomposition into BCNF is always possible

- **(D)** Any relation with two attributes is in  
           BCNF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
A. True — BCNF is stricter than 3NF. 
B. True — A lossless and dependency-preserving 
decomposition into 3NF is always possible. 
C. False — BCNF decomposition is always lossless, 
but may not preserve dependencies. 
D. True — Any two-attribute relation is in BCNF. 
Correct Answer: C


</details>

---


### Q40. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A table has fields Fl, F2, F3, F4, F5 with the following 
functional dependencies  
F1 → F3   F2→ F4   (F1 . F2) → F5 
In terms of Normalization, this table is in


- **(A)** 1 NF

- **(B)** 2 NF

- **(C)** 3 NF

- **(D)** none



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explanation :-First Normal Form 
A relation is in first normal form if every attribute in 
that relation is singled valued attribute. 
Second Normal Form 
A relation is in 2NF if it has No Partial Dependency, 
i.e., no non-prime attribute (attributes which are not 
part of any candidate key) is dependent on any proper 
subset of any candidate key of the table. 
This table has Partial Dependency f1->f3, f2-> f4 
given (F1,F2) is Key 
So answer is A


</details>

---


### Q41. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In a schema with attributes A, B, C, D and E following set 
of functional dependencies are given 
 A → B A → C CD → E B → D E → A 
 Which of the following functional dependencies is NOT 
implied by the above set?


- **(A)** CD → AC

- **(B)** BD → CD

- **(C)** BC → CD

- **(D)** AC → BC



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :-FDs: 
A → B, C 
 B → D 
 CD → E 
E → A 
Check quickly: 
a) CD → AC 
 CD → E → A → C (true) 
b) BD → CD 
 From BD we get only B, D. 
 No way to get C (false) 
c) BC → CD 
 B → D ⇒ BC gives C, D (true) 
d) AC → BC 
 A → B ⇒ AC gives B (true) 
Not implied: b) BD → CD  
<!-- PAGE 384 -->
ER MODEL


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In the context of owner and weak entity sets in the ER 
(Entity-Relationship) data model, which one of the 
following statements is TRUE?


- **(A)** The weak entity set MUST have total 
participation in the identifying relationship

- **(B)** The owner entity set MUST have total 
participation in the identifying relationship

- **(C)** Both weak and owner entity sets MUST have 
total participation in the identifying relationship

- **(D)** Neither weak entity set nor owner entity set 
MUST have total participation in the identifying 
relationship



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let S be the specification: "Instructors teach courses. 
Students register for courses. Courses are allocated 
classrooms. Instructors guide students." Which one of 
the following ER diagrams CORRECTLY represents S?


- **(A)** (i)

- **(B)** (ii)

- **(C)** (iii)

- **(D)** (iv)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -D


**Step-by-Step Explanation:**

Explantion :- Option (iv) is correct  
There's a relationship b/w : 
 Instructors (Teaches) courses 
 Students (Registration) courses 
 Courses (Allocation) classrooms 
 Instructors (Guides) students 
 Link them and you'll get a figure like (iv)  
Also obviously : Student, Instructor, C ourses and 
Classroom are all entity.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is used to represent the 
supporting many-one relationships of a weak entity set in 
an entity-relationship diagram?


- **(A)** Diamonds with double/bold border

- **(B)** Rectangles with double/bold border

- **(C)** Ovals with double/bold border

- **(D)** Ovals that contain underlined identifiers



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explantion :- In an ER diagram, the supporting many-one 
relationship of a weak entity set is called the identifying 
relationship. It is represented by a diamond with a double 
(bold) border. Weak entities depend on this relationship for 
identification, which is why the relationship is shown with 
a double diamond.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In an Entity -Relationship (ER) model, suppose R is a 
many-to-one relationship from entity set E1 to entity set 
E2. Assume that E1 and E2 participate totally in R and that 
the cardinality of E1 is greater than the cardinality of E2. 
 Which one of the following is true about R?


- **(A)** Every entity in E1 is associated with exactly one 
entity in E2

- **(B)** Some entity in E1 is associated with more than one 
entity in E2

- **(C)** Every entity in E2 is associated with exactly one 
entity in E1

- **(D)** Every entity in E2 is associated with at most one 
entity in E1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explantion:-  Since it is a many to one relationship from 
E1 to E2, therefore: 
1. No entity in E1 can be related to more than one entity 
in E2. ( hence B is incorrect) 
2. An entity in E2 can be related to more than one entity 
in E1.(hence C and D are incorrect). 
 Every entity in E1 is associated with exactly one entity in 
E2.


</details>

---


### Q5. [GATE  CSE-2024 SET-2 MCQ  (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An ER model of a database consists of  entity types A and 
B. These are connected by a relationship R which does not 
have its own attribute. Under which one of the following 
conditions, can the relational table for R be merged with 
that of A?


- **(A)** Relationship R is one-to-many and the   
participation of A in R is total

- **(B)** Relationship R is one-to-many and the 
participation of A in R is partial

- **(C)** Relationship R is many-to-one and the 
participation of A in R is total

- **(D)** Relationship R is many-to-one and the 
participation of A in R is partial



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion :- The relation table for R should always be 
merged with the entity that has total participation and 
relationship should be many to one. 
GATE CSE-2005  MCQ  (2-MARKS) 
<!-- PAGE 387 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider an Entity -Relationship (ER) model in which 
entity sets E1 and E2 are connected by an m:n 
relationship R12. E1 and E3 are connected by a 1:n (1 
on the side of E1 and n on the side of E3) relationship 
R13. 
E1 has two-singled attributes a11 and a12 of which a11 
is the key attribute. E2 has two singled-valued attributes 
a21 and a22 of which a21 is the key attribute. E3 has two 
single-valued attributes a31 and a32 of which a31 is the 
key attribute. The relationships do not have any 
attributes. 
If a relational model is derived from the above ER 
model, then the minimum number of relations that would 
be generated if all relation are in 3NF 
is________________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -4


**Step-by-Step Explanation:**

Explantion :-  
𝐸1, 𝐸2 and 𝐸3 are strong entity, one table for 
each: 3 Tables 
𝑅12 is m:n hence it requires a separate table: 1 
Table 
𝑅13 is 1: 𝑛 hence it does not require any 
separate table. 
Total: 4 tables


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Given the basic ER and relational models, which of the 
following is INCORRECT?


- **(A)** An attribute of an entity can have more than one 
value

- **(B)** An attribute of an entity can be composite

- **(C)** In a row of a relational table, an attribute can have 
more than one value

- **(D)** In a row of a relational table, an attribute can have 
exactly one value or a NULL value



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion :- In a row of a relational table, an attribute 
can have more than one value is incorrect as a 
relational table requires that, in a row, an attribute can 
have exactly one value or NULL value.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ER diagram 
 Which of the following is a correct attribute set for one 
of the tables for the minimum number of tables needed 
to represent M, N, P, R1, R2 ?


- **(A)** M1, M2, M3, P1

- **(B)** M1, P1, N1, N2

- **(C)** M1, P1, N1

- **(D)** M1, P1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  
Strong entities → M and P ⇒ separate tables 
 R1 between M and P has total participation of M 
and no attributes 
⇒ Add key of P (P1) into M as FK 
⇒ Table M(M1, M2, M3, P1) 
 N is a weak entity identified by P via R2 
⇒ Create table N(P1, N1, N2) with PK = (P1, N1) 
 Table P(P1, P2) 
 Thus minimum tables = 3 (M, P, N) 
Valid attribute set among options ⇒ M1, M2, M3, 
P1


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following ER diagram 
 The minimum number of tables needed to represent 
M, N, P, R1, R2 is


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation  
  3 minimum tables. M, P are strong entities hence 
they must be represented by separate tables.  
 Many-to-one and one-to-many relationship sets that 
are total on the many-side can be represented by 
adding an extra attribute to the “many” side, 
containing the primary key of the “one” side. ( This 
way no extra table will be needed for Relationship 
sets ) M table is modified to include primary key of P 
side(i.e. P1). N is weak entity, and is modified to 
include primary key of P (i.e. P1). Therefore there 
would be minimum of 3 tables with schema given 
below : 
 M (M1, M2, M3, P1) 
P (P1, P2) 
N (P1, N1, N2)


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let E₁ and E₂ be two entities in an E/R diagram with 
simple-valued attributes. R₁ and R₂ are two relationships 
between E₁ and E₂, where R₁ is one-to-many and R₂ is 
many-to-many. R₁ and R₂ do not have any attributes of 
their own. What is the minimum number of tables 
required to represent this situation in the relational model?


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Solution 
• Each entity requires one table ⇒ 2 tables (E₁ and E₂). 
• R₁ (one-to-many, no attributes) ⇒ implement using a 
foreign key in the “many” side ⇒ no extra table needed. 
• R₂ (many-to-many) ⇒ requires a separate relation table. 
Total tables = 2 (entities) + 1 (for R₂) = 3. 
Answer: B. 3


</details>

---


### Q11. [GATE  CSE-2015 SET-2  NAT  (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the entities 'hotel room', and 'person' with a 
many to many relationship 'lodging' as shown below: 
 If we wish to store information about the rent payment to 
be made by person (s) occupying different hotel rooms, 
then this information should appear as an attribute of ?


- **(A)** Person

- **(B)** Hotel Room

- **(C)** Lodging

- **(D)** None of these



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :-  
The rent payment depends on both the Person and the 
Hotel Room. Since it is associated with a specific 
combination of these two entities, it cannot be an attribute 
of either entity alone. Therefore, it must be stored as an 
attribute of the relationship "Lodging".


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following table has two attributes A and C where A 
is the primary key and C is the foreign key referencing 
A with ON DELETE CASCADE. 
 The set of all tuples that must be additionally deleted to 
preserve referential integrity when the tuple (2, 4)  is 
deleted is:


- **(A)** (3, 4) and (6, 4)

- **(B)** (5, 2) and (7, 2)

- **(C)** (5, 2), (7, 2) and (9, 5)

- **(D)** (3, 4), (4, 3) and (6, 4)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
Given: 
 A is Primary Key 
 C is Foreign Key referencing A with ON DELETE 
CASCADE 
Delete (2,4) ⇒ A = 2 is deleted. 
Step 1: Delete tuples where C = 2 
(5,2) 
(7,2) 
Step 2: Now A = 5 and A = 7 are deleted. 
Check rows with C = 5 or C = 7 
(9,5) exists ⇒ delete it. 
 No row with C = 7. 
Step 3: Now A = 9 deleted. 
 No row with C = 9. 
Cascade stops. 
Additionally deleted tuples: 
(5,2), (7,2), (9,5) 
 Answer: C  
<!-- PAGE 388 -->
RELATIONAL ALGEBRA


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a relational database schema with two 
relations 𝑅(𝑃, 𝑄) and 𝑆(𝑋, 𝑌) 
Let 𝐸 = {⟨𝑢⟩ ∣ ∃𝑣∃𝑤⟨𝑢, 𝑣⟩ ∈ 𝑅 ∧ ⟨𝑣, 𝑤⟩ ∈ 𝑆} be a 
tuple relational calculus expression. 
Which one of the following relational algebraic 
expressions is equivalent to 𝐸 ?


- **(A)** Π𝑃(𝑅 ⋈𝑅.𝑃=𝑆.𝑋 𝑆)

- **(B)** Π𝑃(𝑆 ⋈𝑆.𝑋=𝑅.𝑄 𝑅)

- **(C)** Π𝑃(𝑅 ⋈𝑅.𝑃=𝑆.𝑌 𝑆)

- **(D)** Π𝑃(𝑆 ⋈𝑆.𝑌=𝑅.𝑄 𝑅)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B


**Step-by-Step Explanation:**

Explantion :- 
Given 
 E = { u | ∃v ∃w ( (u, v) ∈ R ∧ (v, w) ∈ S ) } 
 (u, v) ∈ R ⇒ u = P, v = Q 
 (v, w) ∈ S ⇒ v = X, w = Y 
 Common variable v ⇒ R.Q = S.X 
 Result requires only u ⇒ attribute P 
 So expression becomes: 
       πp ( R ⋈R.Q = S.X S ) 
 Option (B) represents the same join condition. 
 Final Answer: B


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider two relations describing teams and players in 
a sports league: teams (𝑡𝑖𝑑,𝑡𝑛𝑎𝑚𝑒): 𝑡𝑖𝑑, 𝑡𝑛𝑎𝑚e are 
team-id and team-name, respectively.𝑝𝑙𝑎𝑦𝑒𝑟𝑠(𝑝𝑖𝑑, 
𝑝𝑛𝑎𝑚𝑒,𝑡𝑖𝑑): 𝑝𝑖𝑑, 𝑝𝑛𝑎𝑚𝑒, and 𝑡𝑖𝑑 denote player-id, 
playername and the team-id of the player, respectively. 
Which ONE of the following tuple relational calculus 
queries returns the name of the players who play for the 
team having name as 'MI'?


- **(A)** { 𝑝. 𝑝𝑛𝑎𝑚𝑒 | 𝑝∈𝑝𝑙𝑎𝑦𝑒𝑟𝑠∧∃𝑡  
(𝑡∈𝑡𝑒𝑎𝑚𝑠∧𝑝.𝑡𝑖𝑑 = 𝑡.𝑡𝑖𝑑∧𝑡.𝑡𝑛𝑎𝑚𝑒 = ′𝑀𝐼′)

- **(B)** { 𝑝. 𝑝𝑛𝑎𝑚𝑒 | 𝑝∈𝑡𝑒𝑎𝑚𝑠∧∃𝑡 (𝑡∈𝑝𝑙𝑎𝑦𝑒𝑟𝑠∧𝑝.𝑡𝑖𝑑 = 
𝑡.𝑡𝑖𝑑∧𝑡.𝑡𝑛𝑎𝑚𝑒 =′𝑀𝐼′)}

- **(C)** { 𝑝. 𝑝𝑛𝑎𝑚𝑒 | 𝑝∈𝑝𝑙𝑎𝑦𝑒𝑟𝑠∧∃𝑡 (𝑡∈𝑡𝑒𝑎𝑚𝑠∧𝑡.𝑡𝑛𝑎𝑚𝑒 
= ′𝑀𝐼′)}

- **(D)** { 𝑝. 𝑝𝑛𝑎𝑚𝑒 | 𝑝∈𝑡𝑒𝑎𝑚𝑠∧∃𝑡 (𝑡∈𝑝𝑙𝑎𝑦𝑒𝑟𝑠∧𝑡.𝑡𝑛𝑎𝑚𝑒 
= ′𝑀𝐼′)}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation 
 TRC query to return the name of the players who play for 
the team having tname as 'M1' is  
 {p.pname | p ∈ players ∧∃t (t ∈ teams ∧p.tid = 
t.tid∧t.tname = ‘MI’)} 
 It selects pname from players. 
 It ensures that p.tid = t.tid for some team t where 
tname = 'MI'. 
 This correctly finds players belonging to the 'MI' team. 
This query also works : {p.pname  | 
∃t∈teams(t.tname=′M1′ ∧t.tid=p.tid)}


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two relations, R(A,B) and 
S(A,C): 
R 
A B 
10 20 
20 30 
30 40 
30 50 
50 95 
S 
A C 
10 90 
30 45 
40 80 
The total number of tuples obtained by evaluating the 
following expression 
σB<C(R⋈R.A=S.A S) is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Explanation:- 
 The output of R(⋈R.A=S.A S) is simply return the number 
of tuples where R.A value is equal to S.A. So the output is 
as follow: 
A B C 
10 20 90 
30 40 45 
30 50 45 
from the above table now we have to perform 
(σB<C(R⋈R.A=S.A S)). it return the number of rows where 
B′s value is less than C. so the output is: 
A B C 
10 20 90 
30 40 45 
So the given expression returns 2 tuples as output. 
GATE CSE-2006 MCQ (1-MARKS) 
[GATE IT 2005] 
GATE  CSE-2005 MCQ (1-MARKS) 
[GATE IT 2005] 
GATE CSE-2006 MCQ (1-MARKS) 
[GATE IT 2005] 
<!-- PAGE 395 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q4. [GATE CSE-2026  SET-1 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following three relations in a relational 
database: 
Employee(eId, eName) 
 Brand(bId, bName) 
 Own(eId, bId) 
Which of the following relational algebra expressions 
returns the set of eIds who own all the brands?


- **(A)** π eId ( (π eId,bld (Own)) / π bId (Brand) )

- **(B)** π eId (Own) − π eId ( (π eId (Own) × π bId (Brand)) − 
π eId,bld Own ))

- **(C)** π eId( π eId,bld (Own) / π bId (Own)

- **(D)** π eId ( (π eId (Own) × π bId (Own)) / π bId (Brand) )



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B


**Step-by-Step Explanation:**

Explanation :-  
 π eId (Own) ÷ π bId (Brand) gives the set of eIds who 
own every brand in the Brand relation. 
 Option (b) is an expansion of the division operation 
using basic relational algebra operators.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The following relation records the age of 500 employees 
of a company, where empNo (indicating the employee 
number) is the key : 
  empAge(empNo,age)  
  Consider the following relational algebra expression 
                   Π𝑒𝑚𝑝×𝑁𝑜(𝑒𝑚𝑝𝐴𝑔𝑒 ⋈(𝑎𝑔𝑒>𝑎𝑔𝑒1) 𝜌𝑒𝑚𝑝𝑁𝑜1,𝑎𝑦𝑒1(𝑒𝑚𝑝𝐴𝑔𝑒)) 
 What does the above expression generate?


- **(A)** Employee numbers of all employees whose age 
is not the minimum.

- **(B)** Employee numbers of all employees whose age 
is the minimum.

- **(C)** Employee numbers of all employees whose age 
is    more than the age of exactly one other 
employee.

- **(D)** Employee numbers of only those employees 
whose age is the maximum.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explanation :-  
 Emp No = 4 will not be selected because the condition 
age>age1 is not satisfied for this EmpNo.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A relation r(A, B) in a relational database   has 1200 
tuples. The attribute A has integer values ranging from 6 
to 20, and the attribute B has integer values ranging from 
1 to 20. Assume that the attribute A and B  are 
independently distributed.   The estimated number of 
tuples in the output of σ(A>10)v(B=18)(r) is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 820


**Step-by-Step Explanation:**

Explantion :-  
The above answer is TRUE for SQL SELECT 
but not for Relational Algebra as by theory 
relational algebra operates on a set which 
means all the elements must be distinct. Since 
we have 15 distinct possible values for 𝐴 and 
20 distinct possible values for 𝐵, in strict 
relational algebra we'll get 
Estimated number of tuples =
60 × (15 × 20) = 205. 
Official Answer: 205 OR 820.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements S1 and S2 about the 
relational data model: 
 S1: A relation scheme can have at most one foreign key. 
 S2: A foreign key in a relation scheme R cannot be used 
to refer to tuples of R. 
 Which one of the following choices is correct?


- **(A)** S1 is false and S2 is true.

- **(B)** S1 is true and S2 is false.

- **(C)** Both S1 and S2 are false.

- **(D)** Both S1 and S2 are true.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion S1: False 
 Because it is not necessary that we should always have a 
foreign key(or) more than one FK are also possi ble in a 
relation. 
 S2: False 
 Foreign Key may refer tuples of the same relation. 
   Thus, Both S1 and S2 are false. is the correct answer.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relations P(X, Y, Z), Q(X, Y, T) 
and R(Y, V). 
 Table : P 
X Y Z 
X1 Y1 Z1 
X1 Y1 Z2 
X2 Y2 Z2 
X2 Y4 Z4 
 Table : Q 
X Y T 
X2 Y1 2 
X1 Y2 5 
X1 Y1 6 
X3 Y3 1 
 Table : R 
Y V 
Y1 V1 
Y3 V2 
Y2 V3 
Y2 V2 
How many tuples will be returned by the following 
relational algebra query? 
πx(σ(P.Y = R.Y ∧ R.V = V2(P X R))) - πx(σ(Q.Y = R.Y ∧ Q.T > 2(Q X 
R)))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1


**Step-by-Step Explanation:**

Explanation :- σ(P.Y=R.Y ∧ R.V=V2)(P × R) 
Πx(𝜎(QY=R,Y∧Q,P,2)(Q × R)) 
Πx(𝜎(PY−RY𝑌ARY =V2)(P × R)) − Πx(𝜎(QY−RY AQTB:2 (Q × R))
= XX2 − YX1 = 1


</details>

---


### Q9. [GATE CSE-2021  SET-1 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the relations r(A, B) and s(B, C), where s,B is a 
primary key and r.B is a foreign key referencing s.B. 
Consider the query:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explantion :- 
 Option C is written as: 
𝑟LOJ(𝜎𝐵<5(𝑠)) 
A Left Outer Join (LOJ) guarantees that all tuples from 
the left relation ( 𝑟 ) are preserved in the final output, 
regardless of whether they find a match in the right 
relation. 
 For tuples in 𝑟 where 𝐵 < 5, they will successfully 
match with the filtered relation 𝑠. 
 For tuples in 𝑟 where 𝐵 ≥ 5, they will find no 
match in the filtered relation 𝜎𝐵<5(𝑠). 
 Instead of being discarded (like in an inner join), 
these tuples are still retained in the output, padded 
with NULL for the attribute 𝐶. 
Because Option C includes tuples where 𝐵 ≥ 5 (filled 
with NULL s for 𝐶 ), it produces a different result than 𝑄.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a database that has the relation schemas 
EMP(Empld, EmpName, Deptld) and 
DEPT(DeptName, Deptld). Note that the Deptldcan   be 
permitted to a NULL in the relation EMP. Consider the 
following queries on the database expressed in tuple 
relational calculus. 
 (I) {t|∃u ϵ EMP(t[EmpName) = u[EmpName] Λ ∀  
          ∨ϵ DEPT(t[Deptld] ≠ V[Deptld]))} 
 (II) {t|∃u ϵ EMP(t[EmpName) = u[EmpName] Λ ∃∨ ϵ 
DEPT(t[Deptld] ≠V[Deptld]))} 
 (III) {t|∃u ϵ EMP(t[EmpNmae) = u[EmpName] Λ ∃∨ ϵ 
DEPT(t[Deptld] =V[Deptld]))} 
 Which of the above queries are safe?


- **(A)** I and II only

- **(B)** I and III only

- **(C)** II and III only

- **(D)** I, II and III.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explantion:- 
An expression is said to be safe, if it yield a finite number 
of tuples, otherwise unsafe. 
(I) Gives EmpNames who do not belong to any 
Department. So, it is going to be a finite number of 
tuples as a result. 
(II) Gives EmpNames who  do not belong to some 
Department. This is also going to have finite 
number of tuples. 
(III) Gives EmpNames who do not belong to same 
Department. This one will also give finite number 
of tuples. 
 All the expressions I, II and III are giving finite 
number of tuples. So, all are safe. 
<!-- PAGE 396 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a database that has the relation schema 
 CR(StudentName, CourseName). An instance of the 
schema CR is as given below: 
CR Table      
Student Name Course Name 
SA CA 
SA CB 
SA CC 
SB CB 
SB CC 
SC CA 
SC CB 
SC CC 
SD CA 
SD CB 
SD CC 
SD CD 
SE CD 
SE CA 
SE CB 
SF CA 
SF CB 
SF CC 
The following query is run on the database: 
T1 ← π CourseName (σ StudentName = 'SA' (CR)) 
T2 ← CR ÷ T1 
The number of rows in T2 is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 4


**Step-by-Step Explanation:**

Explanation:- From SA, the courses are CA, CB, CC. 
 So, T1 = {CA, CB, CC}. 
Now find students who have all these courses: 
 SA → has CA, CB, CC 
 SB → missing CA 
 SC → has CA, CB, CC 
 SD → has CA, CB, CC 
 SE → missing CC 
 SF → has CA, CB, CC 
SA ,SC, SD,SF  
Total such students = 4


</details>

---


### Q12. [GATE CSE-2017  SET-1  MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider two relations R 1(A, B) with the tuples (1, 5), (3, 
7) and R2(A, C) = (1, 7), (4, 9).  
 Assume that R(A, B, C) is the full natural outer join of R 1 
and R 2. Consider the following tuples of the form (A, B, 
C): a = (1,5, null), b = (1, null, 7), c = (3, null, 9), d = (4, 7, 
null), e = (1, 5, 7), f  = (3, 7, null), g = (4, null, 9). Which 
one of the following statements is correct?


- **(A)** R contains a,b,e,f,g but not c, d.

- **(B)** R contains all of a,b,c,d,e,f,g

- **(C)** R contains e,f,g but not a,b

- **(D)** R contains e but not f,g



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion :-  
 So, from the above resultant table, R contains e, f, g only 
but not a, b.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium




```c
Consider the relational schema given below, where eld 
of the relation dependent is a foreign key referring to 
empld of the relation employee. Assume that every 
employee has at least one associated dependent in the 
dependent relation. 
 employee(empld,empName,empAge) 
 dependent(depld, eld,depName, depAge). 
 Consider the following relational algebra query: 
 ΠempId ( employee ) − ΠempId ( employee 
⋈(empId=eID )∧( empAge ≤ depAge ) dependent ) 
 The above query evaluates to the set of emplds of 
employees whose age is greater than that of
```


- **(A)** Some dependent

- **(B)** All dependents.

- **(C)** Some of his/her dependents

- **(D)** All of his/her dependents



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :- On evaluating the inner query we get the 
employees whose age is less than or equal to at least one 
of his dependents. So, on subtracting it from the set of 
employees, gives employees whose age is greater than 
all of his dependents .So, All of his/her dependents is the 
correct option.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Given the following statements: 
S1: A foreign key declaration can always be replaced by 
an equivalent check assertion in SQL.  

```sql
S2: Given the table R(a,b,c) where a and b together form 
the primary key, the following is a valid table definition.  
 CREATE TABLES ( 
 a INTEGER, 
 d integer, 
 e integer, 
 PRIMARY KEY (d), 
 FOREIGN key (a) references R) 
 Which one of the following statements is CORRECT?
```


- **(A)** S1 is TRUE and S2 is FALSE.

- **(B)** Both S1 and S2 are TRUE.

- **(C)** S1 is FALSE and S2 is TRUE

- **(D)** Both S1 and S2 are FALSE.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -D


**Step-by-Step Explanation:**

Explantion :-  
S1: False 
 Using a check constraint, we could be having   the same 
effect as foreign key while adding elements to the child 
table. But on deleting elements from the parent table, the 
referential integrity constraint is no longer valid. So, a 
check constraint cannot replace a foreign key. 
 S2: False: 
 Foreign key in one table should uniquely identifies a row 
of other table. In above table definition, table S has a 
foreign key that refers to field ‘ a’ of R. The field ‘a’ in 
table S doesn’t uniquely identify a row in table R.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a join (relation algebra) between relations r(R) 
and s(S) using the nested loop method. There are 3 
buffers each of size equal to disk block size, out of which 
one buffer is reserved for intermediate results.  
 Assuming size(r(R)) < size(s(S)), th e join will have 
fewer number of disk block accesses if:


- **(A)** relation r(R) is in the outer loop.

- **(B)** relation s(S) is in the outer loop.

- **(C)** join selection factor between r(R) and s(S) is more 
than 0.5.

- **(D)** join selection factor between r(R) and s(S) is less 
than 0.5.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explantion :- The join relation between r(R) and s(S) 
which is using nested loop will be as follows: 
 For each tuple r in R do 
 For each tuple s in S do 
 If r and s satisfy the join condition then 
 output the tuple. 
 The above algorithm involves (nr*bs+br) 
 block transfer and (nr+br) seeks. 
 where, 
 br → no. of blocks in R 
 bs → no. of blocks in S 
 hr → no. of tuples in R 
 To have less block accesses, nr should be less as in question 
it is given that size(r(R)) < size(s(S)). 
So, to have fewer no. of disk block accesses the relation 
r(R) should be in outer loop.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


What is the optimized version of the relation algebra 
expression  πA1(πA2(σF1(σF2(r)))), where A1, A2 are sets of 
attributes in r with A1 ⊂ A2 and F1, F2 are Boolean 
expressions based on the attributes in r?


- **(A)** πA1(σ(F1∧F2)(r))

- **(B)** πA1(σ(F1∨F2)(r))

- **(C)** πA2(σ(F1∧F2)(r))

- **(D)** πA2(σ(F1∨F2)(r))



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- Note: Nested Queries Logic works with 
AND operation. Since A1 ⊂ A2 will get only attribute A1 
as it is in the outside. So we can remove project A2. 
 Two Selects with Boolean expression can be combined into 
one select with AND of two Boolean expressions.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relation schema  
 Students(rollno:integer, sname: string)  
 Courses(courseno:integer,cname: string) 
 Registration (rollno: integer, courseno: integer, percent: 
real) 
 Which of the following queries are equivalent to this query 
in English? 
 “Find the distinct names  of all students who score more 
than 90% in the course numbered 107”. 
 (I)  SELECT DISTINCT S.sname 
 FROM Students as S, Registration as R 
 WHERE R.rollno = S. rollno AND R.courseno = 107 AND 
R.percent> 90 
 (II) πsname(σcourseno= 107 Λ percent> 90 (Registration ⋈Students))  
 (III) {T|∃S ϵ Students, ∃R ϵ Registration (S.rollno = 
R.rollno Λ R.courseno = 107 Λ R.percent> 90 Λ T.sname 
= S.sname)} 
 (IV) {<SN>∣∃SR∃RP(<SR,SN>∈Students∧<SR,107,RP>∈ 
Registration∧ RP>90)}


- **(A)** I, II, III and IV

- **(B)** I, II and III only

- **(C)** I, II and IV only

- **(D)** II, III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explanation➖The Four queries are given in SQL, RA , 
TRC and DRC. All four of them are equivalent to the query 
given in English.


</details>

---


### Q18. [GATE CSE-2014 SET-3  NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose R1(A, B) and R 2(C, D) are two relation schemas. 
Let r1 and r2 be the corresponding relation instances. B is a 
foreign key that refers to C in R2. If data in r1 and r2 satisfy 
referential integrity constraints, which of the following is 
ALWAYS TRUE?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explantion :- Referential integrity constraints denotes that 
all the values in foreign key should be present in the 
primary key. 
 So we can understand that r2(C) is the superset of r1(B). 
 So (subset - superset) is always empty. 
  R1(AB) 
Ex. 
(𝑎)    𝜋𝐵(𝑟1) − 𝜋𝑐(𝑟2) = 𝜙
          (7,8,9] − [6,7,8,9) = 𝜙
 (b)    𝜋𝑐(𝑟2) − 𝜋𝐵(𝑟1) = 𝜙
                   [6,7,8,9) − [7,8,9] = (6) ≠ 𝜙
 (c)      𝜋𝐵(𝑟1) = 𝜋𝑐(𝑟2)]
         [7,8,9] ≠ [6,7,8,9]
 (d)   𝜋𝐵(𝑟1) − 𝜋𝑐(𝑟2) ≠ 𝜙
                    [7,8,9] − [6,7,8,9] = 𝜙


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a relational table r with sufficient number of 
records, having attributes A1, A2,…, An and let 1 <= p 
<= n. Two queries Q1 and Q2 are given below. 
 Q1: 
 π A₁, A₂, …, Aₚ ( σ Aₚ = c ( r ) ) where c is a constant. 
 Q2: 
 π A₁, A₂, …, Aₚ  ( σ c₁ ≤ Aₚ ≤ c₂  ( r ) ) where c₁ and c₂ are 
constants. 
 The database can be configured to do ordered indexing 
on Ap or hashing on Ap. Which of the following 
statements is TRUE?


- **(A)** Ordered indexing will always outperform 
hashing for both queries

- **(B)** Hashing will always outperform ordered 
indexing for both queries

- **(C)** Hashing will outperform ordered indexing on Q1, 
but not on Q2

- **(D)** Hashing will outperform ordered indexing on Q2, 
but not on Q1.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion  :-   
 Hashing works well on   "equal" queries, while ordered 
indexing works  better on range queries. 
 For example, consider B+ tree, on ce we have searched a 
key in B+; we can find range of values via the block 
*R2 
<!-- PAGE 397 -->
DATABASE MANAGEMENT  SYSTEM 
pointers pointing to another block of values on the leaf 
node level.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The following functional dependencies hold for 
relations R(A, B, C) and S(B, D, E):  
 B -> A , A -> C 
 The relation R contains 200 tuples and the relation S 
contains 100 tuples. What is the maximum number of 
tuples possible in the natural join of R and S (R ⋈S) ?


- **(A)** 100

- **(B)** 200

- **(C)** 300

- **(D)** 2000



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explantion:- The maximum number of tuples is 100. 
 Because B -> A and A -> C in relation R, B is a key for 
R. This means all 200 B values in R are unique. 
 The natural join matches on B. Since each of the 100 
tuples in S can match at most one unique B value in R, 
the maximum result size is limited by the number of 
tuples in S.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let R and S be relational schemes such that R = {a, b, 
c} and S = {c}. Now consider the following queries on 
the database: 
         1  𝜋𝑅−𝑆(𝑟) − 𝜋𝑅−𝑆 (𝜋𝑅−𝑆(𝑟) × 𝑠 − 𝜋𝑅−𝑆,𝑆(𝑟)) 
         2. {𝑡 ∣ 𝑡 ∈ 𝜋𝑅−𝑆(𝑟) ∧ ∀𝑢 ∈ 𝑠(∃𝑣 ∈ 𝑟(𝑢 = 𝑣[𝑆] ∧ 𝑡 =
𝑣[𝑅 − 𝑆]))} 
        3. {𝑡 ∣ 𝑡 ∈ 𝜋𝑅−𝑆(𝑟) ∧ ∀𝑣 ∈ 𝑟(∃𝑢 ∈ 𝑠(𝑢 = 𝑣[𝑆] ∧ 𝑡 =
𝑣[𝑅 − 𝑆]))} 
 4. Select R.a, R.b 
   From R, S 
 Where R.c = S.c 
 Which of the above queries are equivalent?


- **(A)** 1 and 2

- **(B)** 1 and 3

- **(C)** 2 and 4

- **(D)** 3 and 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- Given 
 R = {a, b, c}, S = {c} 
 So R − S = {a, b} 
 Query 4 (SQL) 
 Select R.a, R.b 
From R, S 
Where R.c = S.c 
 ⇒ Join on c and project (a,b) 
⇒ Return (a,b) tuples of R whose c value exists in S 
 This is semi join result. 
 Query 2 (TRC) 
 t ∈ π_{R−S}(r) AND 
 ∀u ∈ s ∃v ∈ r such that 
 u = v[S] AND t = v[R−S] 
 Meaning: 
 For tuple t = (a,b), for every u in S, there exists a tuple 
v in R with 
 v.c = u 
 projection (a,b) = t 
 ⇒ t must appear with all c values in S 
⇒ division semantics 
 Query 3 (TRC) 
 t ∈ π_{R−S}(r) AND 
∀v ∈ r ∃u ∈ s such that 
 u = v[S] AND t = v[R−S] 
 Meaning: 
For every tuple v in R having projection t, its c must be 
in S 
⇒ All occurrences of (a,b) in R must have c in S 
⇒ Equivalent to semijoin result 
 Query 1 (RA) 
            𝜋𝑅−𝑆(𝑟) − 𝜋𝑅−𝑆(𝜋𝑅−𝑆(𝑟) × 𝑠 − 𝜋𝑅−𝑆,𝑆(𝑟)) 
This is standard relational division form 
 ⇒ Same as Query 2 
 Conclusion 
 1 ≡ 2 (division) 
 3 ≡ 4 (semijoin) 
Final Answer: A (1 and 2)


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let R and S be two relations with the following schema: 
R(P, Q, R1, R2, R3) 
S(P, Q, S1, S2) 
where {P, Q} is the key for both schemas. Which of the 
following queries are equivalent? 
 1. Π𝑃(𝑅 ⋈ 𝑆) 
II. Π𝑃(𝑅) ⋈ Π𝑃(𝑆) 
III. Π𝑃(Π𝑃,𝑄(𝑅) ∩ Π𝑃,𝑄(𝑆)) 
IV. Π𝑃 (Π𝑃,𝑄(𝑅) − (Π𝑃,𝑄(𝑅) − Π𝑃,𝑄(𝑆)))


- **(A)** Only I and II

- **(B)** Only I and III

- **(C)** Only I, II and III

- **(D)** Only I, III and IV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :- 
 Given 
 R(P,Q,…) and S(P,Q,…) 
 {P,Q} is key for both 
⇒ Natural join R ⋈ S happens on P,Q 
 I. πP (R ⋈ S) 
Join keeps tuples where (P,Q) exist in both relations. 
Then project P. 
⇒ P values whose (P,Q) pair exists in both. 
 II. πP(R) ⋈ πP(S) 
 πP(R) and πP(S) are single-attribute relations. 
 Natural join on P ⇒ intersection of P values. 
But this ignores Q matching. 
⇒ Not equivalent to I. 
 III. πP ( πP,Q(R) ∩ πP,Q(S) ) 
 Intersection of (P,Q) pairs 
 Then project P 
This is exactly what join + projection in I gives. 
⇒ Equivalent to I 
IV. πP ( πP,Q(R) − (πP,Q(R) − πP,Q(S)) ) 
Using identity: 
A − (A − B) = A ∩ B 
⇒ Expression becomes 
πP ( πP,Q(R) ∩ πP,Q(S) ) 
⇒ Same as III ⇒ same as I.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following tuple relational calculus 
expression(s) is/are equivalent to ∀t ∈ r (P(t))? 
 I. ¬∃t ∈ r (P(t)) 
 II. ∃t ∉ r (P(t)) 
 III. ¬∃t ∈ r (¬P(t)) 
 IV. ∃t ∉ r (¬P(t))


- **(A)** I only

- **(B)** II only

- **(C)** III only

- **(D)** III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :-  
Given 
∀t ∈ r ( P(t) ) 
Logical equivalence: 
∀t P(t) ≡ ¬∃t ( ¬P(t) ) 
I. ¬∃t ∈ r ( P(t) ) 
⇒ No tuple satisfies P 
⇒ Opposite meaning 
  Not equivalent 
II. ∃t ∉ r ( P(t) ) 
⇒ Tuple outside r satisfies P 
⇒ Irrelevant 
  Not equivalent 
III. ¬∃t ∈ r ( ¬P(t) ) 
⇒ No tuple violates P 
⇒ Equivalent to universal statement 
✔ Equivalent 
IV. ∃t ∉ r ( ¬P(t) ) 
⇒ Tuple outside r violates P 
⇒ Irrelevant 
  Not equivalent.


</details>

---


### Q24. [GATE CSE-2011   MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
 • Student(school-id, sch-roll-no, sname, saddress) 
 • School(school-id, sch-name, sch-address, sch-phone) 
 • Enrolment(school-id, sch-roll-no, erollno, examname) 
 • ExamResult(erollno, examname, marks) 
 Consider the following tuple relational calculus query.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
t | ∃E ∈ Enrolment t = E.school-id 
 Returns school-ids from Enrolment table SUCH THAT 
<!-- PAGE 398 -->
DATABASE MANAGEMENT  SYSTEM 
 • |{x | x ∈ Enrolment ∧x.school-id = t ∧ (∃B 
∈ExamResultB.erollno = x.erollno∧B.examname = 
x.examname∧B.marks> 35)}| ÷ 
  • the number of student enrolments from the school for 
exams with marks > 35 divides 
 • |{x | x ∈ Enrolment ∧x.school-id = t}| 
 • total number of student enrolments from the school 
  ▪ ×100 > 35 
  ▪ percentage of student enrolments with mark > 35 is > 
 Since to pass an exam > 35 mark is needed, this means 
selecting the school-ids where the pass percentage of 
students across all the exams taken together is > 35.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Information about a collection of students is given by 
the relation 
studInfo(studId, name, sex). 
 The relation enroll(studId, courseId) gives which 
student has enrolled for (or taken) what course(s). 
 Assume that every course is taken by at least one male 
and at least one female student. 
 What does the following relational algebra expression 
represent? 
 𝜋courceId ((𝜋studId (𝜎sex = 'female' ( studInfo )) ×
             𝜋courseId ( enroll )) − enroll )


- **(A)** Courses in which all the female students are 
enrolled

- **(B)** Courses in which a proper subset of female 
students are enrolled.

- **(C)** Courses in which only male students are 
enrolled.

- **(D)** None of the above.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation:-


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the relation employee(name, sex, 
supervisorName) with name as the key. 
supervisorName gives the name of the supervisor of the 
employee under consideration. What does the following 
Tuple Relational Calculus query produce? 
  {e.name | employee(e) ∧ } 
 (∀x) [ ¬employee(x) ∨x.supervisorName ≠ e.name 
∨x.sex = "male" ] }


- **(A)** Names of employees with a male supervisor.

- **(B)** Names of employees with no immediate male 
subordinates.

- **(C)** Names of employees with no immediate female 
subordinates.

- **(D)** Names of employees with a female supervisor.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion:- 
 The condition says: 
 For all x, 
either x is not an employee 
or x is not supervised by e 
or x is male. 
 This means: 
There does not exist any employee x such that 
x.supervisorName = e.name AND x.sex ≠ "male". 
 So, no subordinate of e is female. 
 Therefore, e has no immediate female subordinates. 
 Final Answer: C. Names of employees with no 
immediate female subordinates.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a selection of the form σA ≤ 100(r), where r is a 
relation with 1000 tuples. Assume that the attribute values 
for A among the tuples are uniformly distributed in the 
interval [0, 500]. Which one of the following options is 
the best estimate of the number of tuples returned by the 
given selection query?


- **(A)** 50

- **(B)** 100

- **(C)** 150

- **(D)** 200



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation: 
 Values are uniformly distributed in [0, 500]. 
Range satisfying A ≤ 100 is [0, 100]. 
Selectivity = 100 / 500 = 1/5. 
Number of tuples = 1000 × (1/5) = 200. 
Final Answer: D. 200


</details>

---


### Q28. [GATE  CSE-2007 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relation schemas : 
 b -Schema = (b-name, b -city, assets) 
 a-Schema = (a-num, b-name, bal) 
 d-Schema = (c-name, a-number) 
Let branch, account and depositor be respectively 
instances of the above schemas. Assume that 
account and depositor relations are much bigger 
than the branch relation. 
Consider the following query: 
Πc-name (𝜎b-city = "Agra" ∧ bal < 0 (branch ⋈ 
(account ⋈ depositor) 
Which one of the following queries is the most 
efficient version of the above query? 
a). Πc-name (𝜎bal <0(𝜎b-city = "Agra" branch ⋈    
account ) ⋈ depositor ) 
b). Πc-name (𝜎b-city = "Agra" branch ⋈ (𝜎bal<0 
account ⋈ depositor)) 
c). Πc-name ((𝜎b-city = "Agra" branch ⋈ 𝜎b-city = 
"Agra" ∧ bal < 0 account ) ⋈ depositor ) 
d). Πc-name (𝜎b-city = "Agra" branch ⋈ (𝜎b-city = 
"Agra" ∧ bal < 0 account ⋈ depositor ))


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- 
 For better record processing, We should always do select 
before join to avoid unnecessary tuples being considered 
for join.(For an S QL query this is not strictly required as 
DBMS will rearrange the query to make it efficient) and 
processing a smaller table gives more efficiency than the 
larger one. 
 option (A) 
 : П c-name (σ bal< 0 (σ b-city = "Agra" branch ⋈ account) 
⋈ depositor) here we are doing join between relatively 
smaller table(branch) and larger one(account) and the 
output that this inner table gives (which is smaller in 
comparison to joins that we are doing in B) is used for join 
with depositor table with the s election condition.(same as 
given query). 
 option (B) 
 : П c-name (σ b-city = "Agra" branch ⋈ (σ bal< 0 account 
⋈ depositor)) here we are doing a join between two 
massive table account and depositor with selection 
condition(for balance less than zero) and the output that 
this inner table gives is used for join with branch 
table(relatively smaller table) with the selection condition 
(for city Agra). (same as given query) so option A and 
option B both are same as given query but there is 
difference between re cord processing as the record 
processing of option A will get reduced by some rate. (as 
filtered conditions are applied after the join between one 
smaller and one larger table which will give relatively 
smaller table than the join of two larger tables). So, overall 
option A is much better than option B. 
 option (C) 
 : П c-name ((σ b-city = "Agra" branch ⋈ σ b-city = "Agra" 
depositor) Incorrect as there is no b -city column in a -
Schema. 
 option (D) 
 : П c-name (σ b-city = "Agra" branch ⋈ (σ b-city = "Agra" 
depositor)) Incorrect as there is no b -city column in a -
Schema. ⋀bal< 0 account) ⋈⋀bal< 0 account ⋈ Note: 
don't miss this sentence "account and depositor relations 
are much bigger than the branch relation" because That 
makes A the best answer.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the relations r1(P, Q, R) and r2(R, S, T) with 
primary keys P and R respectively. The relation r1 
contains 2000 tuples and r2 contains 2500 tuples. The 
maximum size of the join r1⋈ r2 is :


- **(A)** 2000

- **(B)** 2500

- **(C)** 4500

- **(D)** 5000



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation :- 
r1⋈ r2  is a join operation done on the common attribute 
R. Further R is the primary key of R2 
 When we take a , the value of common attribute( R2 in this 
case) should match.The value of   R in r2 is matched with 
corresponding R in r1 . So it will have 2000 tuples. So 
correct option is (A). 
<!-- PAGE 399 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following relational query languages have 
the same expressive power?  
1. Relational algebra 
2. Tuple relational calculus restricted to safe 
Expressions 
3. Domain relational calculus restricted to safe 
expressions


- **(A)** II and III only

- **(B)** I and II only

- **(C)** I and III only

- **(D)** I, II and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation :  Relational algebra is a procedural query 
language where we input - relations and it yields 
relations as output. It provides method to get the result. 
It is performed recursively on a relation and the in 
between results are relations(output). Basic set of 
operations for the relational model. Relational calculus 
is a non - procedural query language. It provides the 
query to get result. Higher level declarative language for 
specifying relational queries. Tuple Relational Calculus 
operates on each tuple.  
 Domain Relational Calculus operates on each column or 
attribute. Safe expression means fixed no. of tuple or 
column or attribute as a result But all of them has same 
expressive power. Just different ways to do so.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let r be a relation instance with schema R = (A, B, C, 
D). We define 
r₁ = πA,B,C (r) and r₂ = πA,D (r). 
Let s = r₁ ⋈ r₂, where ⋈ denotes natural join. Given 
that the decomposition of r into r₁ and r₂ is lossy, 
which one of the following is TRUE?


- **(A)** s ⊂ r

- **(B)** r ∪ s = r

- **(C)** r ⊂ s

- **(D)** r ⋈ s = s



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation :- Given: 
 Here 
decomposition of r to r1 and r2 is lossy. 
Lossy decomposition :R1 and R2 has a common 
attribute but the common attribute A is not key in 
either of R1 or R2. 
Due to this when R1 and R2 are joined,we get 
spurious tuples which are not in Original R. 
Therefore, correct answer is .r⊂s 
<!-- PAGE 400 -->
STRUCTURED QUERY LANGUAGE


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
 Students(rollno: integer, name: string, age: integer, 
cgpa: real) 
Courses(courseno: integer,cname: string, credits: 
integer) 
Enrolled( rollno: integer,courseno: integer,grade: 
string) 
 Which of the following options is/are correct SQL 
query/queries to retrieve the names of the students 
enrolled in course number (i.e. courseno) 1470?


- **(A)** SELECT S.name FROM Students S WHERE 
EXISTS (SELECT * FROM Enrolled E 
WHERE E.courseno = 1470 AND E.rollno = 
S.rollno)

- **(B)** SELECT S.name FROM Students S WHERE 
SIZEOF (SELECT * FROM Enrolled E 
WHERE E.courseno = 1470 AND E.rollno = 
S.rollno) > 0

- **(C)** SELECT S.name FROM Students S WHERE 0 
< (SELECT COUNT(*) FROM Enrolled E 
WHERE E.courseno = 1470 AND E.rollno = 
S.rollno)

- **(D)** SELECT S.name FROM Students S NATURAL 
JOIN Enrolled E WHERE E.courseno = 1470



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C D


**Step-by-Step Explanation:**

Explanation 
 (A) Using EXISTS: This query correctly checks, 
for each student, if a corresponding entry exists in 
the Enrolled table for courseno = 1470. This is a 
standard and efficient way to solve the problem. 
This query is correct. 
 (B) Using SIZEOF: SIZEOF is not a standard SQL 
function for checking the number of rows in a result 
set. This query is syntactically incorrect in virtually 
all common database systems (like PostgreSQL, 
MySQL, SQL Server, etc.). This query is incorrect. 
 (C) Using COUNT: This query counts the 
enrollments for each student in course 1470 and 
checks if that count is greater than zero. This is 
logically equivalent to the EXISTS clause and is a 
perfectly valid way to find the required students. 
This query is correct. 
 (D) Using NATURAL JOIN: A NATURAL JOIN 
between Students and Enrolled will join them on 
their only common column, rollno. This correctly 
links students to their enrollments. The WHERE 
clause then filters for courseno = 1470. This query 
is also correct.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following database tables of a sports 
league. 
1.player (pid, pname, age)team(tid, tname, city, cid) 
2. coach (cid, cname) members (pid,tid) 
 SELECT MIN (P.age) 
FROM player P 
WHERE P.pid IN (SELECT M.pid 
FROM team T, coach C, members M 
WHERE C.cname = 'Mark' 
AND T.cid = C.cid 
AND M.tid = T.tid);     
 The value returned by the given SQL query is _________ 
(Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 26


**Step-by-Step Explanation:**

Explanation :- 
The subquery finds all pids of players who are in a team 
coached by a coach named 'Mark'. 
 The outer query finds the minimum age among those 
players. 
 2. Subquery Execution 
 Tables involved in subquery: 
 coach C 
 team T 
 members M 
 Conditions: 
 C.cname = 'Mark' → cid for Mark? From coach table: 
cid = 102 for Mark. 
 T.cid = C.cid → T.cid = 102 → Which team? 
From team table: tid = 10 (MI, Mumbai, 102). 
 M.tid = T.tid → M.tid = 10 → Which players? 
From members table: pid = 1 (Jasprit), pid = 3 (Ishan) 
have tid = 10. 
 So subquery result = {1, 3}. 
 3. Outer Query 
 P.pid IN (1, 3) → Players with pid = 1 and pid = 3: 
 From player table: 
 pid 1 → Jasprit → age 31 
 pid 3 → Ishan → age 26 
 4. MIN(P.age) 
1. Ages = {31, 26} 
Minimum = 26


</details>

---


### Q3. [GATE CSE-2025  SET-2 MSQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The relation schema Person (pid, city) describes 
the city of residence for every person uniquely 
identified by pid. The following relational 
algebra operators are available: selection, 
projection, cross product, and rename. 
 To find the list of cities where at least 3 persons 
reside, using the above operators, the minimum 
number of cross product operations that must be 
used is:


- **(A)** 1

- **(B)** 2

- **(C)** 3

- **(D)** 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- 
ρ(T1, Person)     ρ(T2, Person)     ρ(T3, Person) 
σ condition (T1 × T2 × T3) 
3 tables required. 
2 cross product required.   Ans


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following table named Student in a 
relational database. The primary key of this table is 
rollNum. 
rollINum name gender marks 
1 Naman M 62 
2 Aliya F 70 
3 Aliya F 80 
4 James M 82 
5 Swati F 65 
 The SQL query below is executed on this database. 

```sql
 SELECT *FROM Student 
WHERE gender = 'F' AND  marks  > 65; 
The number of rows returned by the query is 
___________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Explantion:- The output of the given SQL query is 
simply to return the female students whose marks is >65. 
<!-- PAGE 413 -->
DATABASE MANAGEMENT  SYSTEM 
we can also solve by first we retrieve all the female 
students then we can select marks >65. 
ROll Name Marks Gender 
2 Aliya 70 Female 
3 Aliya 80 Female 
3 Swati 65 Female 
 output is as follows: 
Roll Name Marks Gender 
2 Aliya 70 Female 
3 Aliya 80 Female 
 So the output of the given query is 2.


</details>

---


### Q5. [GATE CSE-2023   NAT (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the relational database with the following four 
schemas and their respective 
instances.                                                                            
 Student(sNo, sName, dNo) 
 Dept(dNo, dName) 
 Course(cNo, cName, dNo) 
 Register(sNo, cNo) 
 Student 
sNo sName dNo 
S01 James D01 
S02 Rocky D02 
S03 Jackson D02 
S04 Jane D01 
S05 Milli D02 
 Dept 
dNo dName 
D01 CSE 
D02 EEE 
 Course 
cNo cName dNo 
C11 DS D01 
C12 OS D01 
C21 DE D02 
C22 PT D02 
C23 CV D03 
 Register 
sNo cNo 
S01 C11 
S01 C12 
S02 C11 
S03 C21 
S03 C22 
S03 C23 
S04 C11 
S04 C12 
S05 C11 
S05 C21 
 SELECT *  
 FROM Student AS S 
 WHERE NOT EXISTS ( 
     (SELECT cNo  
      FROM Course  
      WHERE dNo = 'D01') 
     EXCEPT 
     (SELECT cNo  
      FROM Register  
      WHERE sNo = S.sNo) 
 ); 
 The number of rows returned by the above SQL query is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 2


**Step-by-Step Explanation:**

Explanation :-  
 The given query is correlated, therefore, for every value 
of S.sno, we will be running the inner query. 
 Inner query will have {C11, C12} EXCEPT {C11, 
C12} = empty relation for sno = S01. 
 As a consequence, clauses that are not non-existing will 
return true, and the tuple tih sno = S01 will be added to 
the resulting relation. 
 Similarly for sno = S02, Inner query will have {C11, 
C12} EXCEPT {C11} = {C12} 
 The non -existing clause will return false, and the 
resulting relationship will not include it. We'll look for 
other issues in the same way. This query will return 
tuples that are enrolled in all of department D01's 
courses. This query will return tuples that are enrolled in 
all the courses offered by department D01. 
 Thus, there will be 2 tuples in the resultant relation: 
sno sname dno 
S01 James D01 
S04 Jane D01 
 Hence, the correct answer is 2


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The relation scheme given below is used to store 

```c
information about the employees of a company, where 
empId is the key and deptId indicates the department to 
which the employee is assigned. Each employee is 
assigned to exactly one department. 
 emp (EMPID, name, gender, salary, deptId) 
 Consider the following SQL query: 
 select deptId, count(*) 
 from emp 
 where gender = “female” and salary > (select 
avg(salary) from emp) 
 group by deptId; 
 The above query gives, for each department in the 
company, the number of female employees whose 
salary is greater than the average salary of:
```


- **(A)** employees in the company

- **(B)** female employees in the department.

- **(C)** employees in the department.

- **(D)** female employees in the company.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation :- Correct answer is Option A as the sub-
query runs on emp table which contains both male and 
female employee from the company.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a relational database containing the following 
schemas. 
 Catalogue 
Sno Sname location 
S1 M/s Royal furniture Delhi 
S2 M/s Balaji furniture Bangalore 
S3 M/s Premium furniture Chennai 
pno Sname Location 
P1 Table Wood 
P2 Chair Wood 
P3 Table Steel 
P4 Almirah Steel 
P5 Almirah Wood 
 The primary key of each table is indicated by underlying 
the constituent fields. 
 SELECT s.sno, s.sname 
 FROM Suppliers s, Catalogue c  
 WHERE s.sno = c.sno AND 
  Cost > (SELECT AVG (cost)  
   FROM Catalogue  
   WHERE pno = 'P4'  
   GROUP BY pno); 
 The number of rows returned by the above SQL query is 
__________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Explanation ➖ 
 (4 to 4) 
 The inner query “select avg(cost) from catalogue where 
pno='P4' group by pno;” returns: 
AVG(COST) 
 The outer query “select s.sno,s.sname from suppliers s, 
catalogue c where s.sno=c.sno” returns: 
SNO SNAME 
S1 M/s Royal furniture 
S1 M/s Royal furniture 
S1 M/s Royal furniture 
S2 M/s Balaji furniture 
S2 M/s Balaji furniture 
S3 M/s Premium furniture 
S3 M/s Premium furniture 
S3 M/s Premium furniture 
S3 M/s Premium furniture 
So, the final result of the query is: 
SN SNAME 
S2 M/s Balaji furniture 
S3 M/s Premium furniture 
S3 M/s Premium furniture 
S3 M/s Premium furniture 
 Hence, 4 rows will be returned by the query.


</details>

---


### Q8. [GATE CSE-2021  SET-2 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A relational database contains two tables Student and 
Performance as shown below 
 Student 
Roll_no. Student_name 
1 Amit 
2 Priya 
3 Vinit 
4 Rohan 
5 Smita 
 Performance 
Roll_no. Subject_Code Marks 
1 A 86 
1 B 95 
1 C 90 
2 A 89 
2 C 92 
3 C 80 
 The primary key of the Student table is Roll_no. For the 
Performance table, the columns Roll_no. and 
Subject_code together from the primary Key. Consider 
the SQL query given below.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

Explanation:-  
Student Sum (P.Marks) 
Rohan 452 
Vinit 452 
Priya 452 
Amit 452 
Smita 452 
 The number of rows returned is 5. 
<!-- PAGE 414 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two tables and four queries in 
SQL . 
 Book (isbn, bname), Stock (isbn, copies) 
 Query 1:      SELECT B.isbn, S.copies 
 FROM BOOK B INNER JOIN Stock S 
 ON B.isbn = S.isbn;  
 Query 2:      SELECT B.isbn, S.copies 
 FROM BOOK B LEFT OUTER JOIN Stock S  
 ON B.isbn=S.isbn; 
 Query 3: SELECT B.isbn, S.copies 
 FROM BOOk B RIGHT OUTER JOIN Stock S  
 ON B.isbn = S.isbn; 
 Query 4:   SELECT B.isbn, S.copies 
 FROM BOOk B FULL OUTER JOIN Stock S 
 ON B.isbn = S.isbn; 
 Which one of the queries above is certain to have an 
output that is a superset of the outputs of the other three 
queries?


- **(A)** Query 1

- **(B)** Query 2

- **(C)** Query 3

- **(D)** Query 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:- 
Given two tables are, 
 Book (isbn, bname) 
 Stock (isbn, copies) 
 isbn is a primary key of Book and isbn is a foreign key 
of stock referring to Book table. 
 For example: 
 Query 1: 
 INNER JOIN keyword selects records that have 
matching values in both tables (Book and Stock). 
 So, the result of Query 1 is, 
isbn Copies 
 Query 2: 
 The LEFT OUTER JOIN keyword will return all records 
from the left table (Book) and the matched records from 
the right table (Stock). 
 The result is NULL from the right side, if there is no 
match. 
  So, the result of Query 2 is, 
Isbn Copies 
NULL 
NULL 
 Query 3: 
 The RIGHT OUTER JOIN keyword will return records 
from the right table (Stock), and the matched records from 
the left table(BOOK). 
 The result is NULL from the left side, when there is no 
match. 
Isbn Copies 
NULL 
NULL 
 Query 4: 
 The FULL OUTER JOIN keyword will return all records 
when there is a match in either left (Book) or right (Stock) 
table records. 
<!-- PAGE 415 -->
DATABASE MANAGEMENT  SYSTEM 
isbn Copies 
NULL 
NULL 
NULL 
NULL 
 Hence, from the result of above four queries, a superset 
of the outputs of the Query 1, Query 2 and Query 3 is 
Query 4. 
 Note: 
 If we take isbn as a primary key in both the tables Book 
and Stock and foreign key, in one of the tables then also 
will get option D as the answer. 
 Another Example  
Book (B) 
isbn B name 
A 
B 
C 
D 
E 
F 
Stock (S) 
isbn copies 
 Query I Inner Join 
B isbn S copies 
 Query II Left Outer Join 
isbn copies 
NULL 
NULL 
 Query III B Right outer Join S 
isbn copies 
 Query IV B Full outer Join S 
isbn copies 
NULL 
NULL


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following database table named  
 top_scorer: 
player country goals 
Klose Germany 16 
Ronaldo Brazil 15 
G Muller Germany 14 
Fontaine France 13 
Pele Brazil 12 
Klinsmann Germany 11 
Kocsis Hungary 11 
Batistuta Argentina 10 
Cubillas Peru 10 
Lato Poland 10 
Lineker England 10 
T Muller Germany 10 
Rahn Germany 10 
 Consider the following SQL query: 
SELECT ta.player 
 FROM top_scorer AS ta 
 WHERE ta.goals > ALL ( 
     SELECT tb.goals 
     FROM top_scorer AS tb 
     WHERE tb.country = 'Spain' 
 ) 
 AND ta.goals > ANY ( 
     SELECT tc.goals 
     FROM top_scorer AS tc 
     WHERE tc.country = 'Germany'); 
 The number of tuples returned by the above SQL query is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 7


**Step-by-Step Explanation:**

Solution : - 
SELECT ta.player 
 FROM top_scorer AS ta 
 WHERE ta.goals > ALL ( 
    SELECT tb.goals 
    FROM top_scorer AS tb 
    WHERE tb.country = 'Spain' 
 ) 
 AND ta.goals > ANY ( 
    SELECT tc.goals 
    FROM top_scorer AS tc 
    WHERE tc.country = 'Germany' 
); 
 There are no tuples with country = 'Spain'. 
 Hence, the condition ta.goals > ALL (empty set) is 
TRUE for all tuples. 
 For Germany, the goals are: 16, 14, 11, 10, 10. 
 The condition > ANY means greater than at least one 
value, i.e., greater than the minimum value (10). 
 Thus, the query reduces to:      
ta.goals>10 
 Now, counting tuples with goals > 10: 
 16, 15, 14, 13, 12, 11, 11 → 7 tuples


</details>

---


### Q11. [GATE CSE-2017 SET-1  NAT (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a database that has the relation schema EMP 
(EmpId, EmpName, and DeptName). An instance of the 
schema EMP and a SQL query on it are given below. 
 SELECT AVG (EC.Num) 
 FROM EC 
 WHERE (DeptName, Num) IN 
 (SELECT DeptName, COUNT(EmpId) AS 
EC(DeptName, Num) 
 FROM EMP 
 GROUP BY DeptName); 
The output of executing the SQL query is ______? 
EMP 
Empld Emp Name DeptName 
1 XYA AA 
2 XYB AA 
3 XYC AA 
4 XYD AA 
5 XYE AB 
6 XYF AB 
7 XYG AB 
8 XYH AC 
9 XYI AC 
10 XYJ AC 
11 XYK AD 
12 XYL AD 
13 XYM AE


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2.6


**Step-by-Step Explanation:**

Explanation:-  
 (2.6 to 2.6) 
 The given query is 
              SELECT AVG(EC.Num)FROM EC  WHERE(DeptName,Num) }Outer Query 
   IN 
 (SELECT DeptName, COUNT(EmpId) as 
EC(DeptName, Name) From EMP GROUPBY 
DeptName; } Inner Query⇾We start the evaluation from 
the inner query. 
 The inner query forms groups DeptName wise and counts 
the DeptName wise EmpIds. 
<!-- PAGE 416 -->
DATABASE MANAGEMENT  SYSTEM 
 ⇾ In inner query DeptName, Count(EmpId) is the alias 
name DeptName, Num. 
 So, the output of the inner query is, 
EC 
DeptName Num 
AA 
AB 
AC 
AD 
AE 
  The outer query will find the 
  Avg(Num) as:  (4+3+3+2+1)/5 = 2.6


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following database table named 
water_schemes: 
water-schemes 
scheme_no district_name Capacity 
Ajmer 
Bikaner 
Bikaner 
Bikaner 
Churu 
Churu 
Dungargarh 
The number of tuples returned by the following SQL 
query is _______. 
 with total (name, capacity) as  
  select district_name, sum(capacity)  
  from water_schemes  
  group by district_name  
 with total_avg(capacity) as 
  select avg(capacity) 
  from total  
 select name  
  from total, total_avg 
  where total.capacity>total_avg.capacity;


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Explantion:- First we do group by district name and 
then total capacities are obtained as following: 
Name Capacity 
Ajmer 20 
Bikaner 40 
Churu 30 
Dungargarh 10 
• Then average capacity is calculated as   Average 
Capacity = (20 + 40 + 30 + 10)/4 = 100/4 = 25 
• Finally, the 3rd query will be executed and it's tuples 
will be considered as output, where name of district 
and its total capacity should be more than or equal to 
25. 
• Then average capacity is computed, 
 Now, Average Capacity = (20 + 40 + 30 + 10)/4 = 100/4 
= 25 
Name 
Bikaner 
Churu 
 Thus, the number of tuples returned by the SQL Query 
is 2.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relation 
 Cinema (theater, address, capacity) 
 Which of the following options will be needed at the 
end of the SQL query 
 SELECT P1. address 
 FROM CINEMA P1 
 such that it always finds the addresses of theaters with 
maximum capacity?


- **(A)** WHERE P1.capacity>= All (select P2.capacity 
from Cinema P2)

- **(B)** WHERE P1.capacity>= Any (select P2.capacity 
from Cinema P2)

- **(C)** WHERE P1.capacity> All (select 
max(P2.capacity) from Cinema P2)

- **(D)** WHERE P1.capacity> Any (select 
max(P2.capacity) from Cinema P2)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -A


**Step-by-Step Explanation:**

Explanation :-   We need to find the address of theaters 
with maximum capacity.  
 So the theatres which are having maximum capacity will 
satisfy the condition. Thus, WHERE P1.capacity>= All 
(select P2.capacity from Cinema P2) is the correct 
answer.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


SELECT operation in SQL is equivalent to


- **(A)** the selection operation in relational algebra

- **(B)** that operations in relations algebra, except that 
SELECT IN SQL retains duplicates

- **(C)** the projection operation in relational algebra

- **(D)** the projection operation in relational algebra 
except that SELECT in SQL retains duplicates



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explantion :-  SELECT operation in SQL is equal to the 
project operation in Relational Algebra,while SELECT in 
SQL also retains duplicates. Hence, D is the answer.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relations: 
            Student 
Roll_No Student_Name 
1 Raj 
2 Rohit 
3 Raj 
 Performances 
Roll_No Course Marks 
1 Math 80 
1 English 70 
2 Math 75 
3 English 80 
2 Physics 65 
3 Math 80 
 SELECT S. student_Name, sum(P.Marks)  
 FROM Student S, Performance P  
 WHERE S.Roll_No = P.Roll_no 
 GROUP BY S.Student_Name 
 The number of rows that will be returned by the SQL 
query is _______?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Explanation :-  Output table is 
Raj 310 
Rohit 140 
 So, the number of tuples returned will be 2


</details>

---


### Q16. [GATE CSE-2016 SET-2  NAT (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
employee(empid,empName.empDept) 
customer(custid,custName,salesRepld,rating) salesRepId 
is a foreign key referring to empId of theemployee 
relation. Assume that each employee makes a sale to at 
least one customer.  
       What does the following query return?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explantion :-  
 SELECT empName 
 FROM employee E 
 WHERE NOT EXISTS } 𝟏 
 The inner query i.e., ② represents all customers having 
rating other than ‘GOOD’ while the complete query 
represents name of all employees with all their customers 
having a ‘good rating’.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


SQL allows duplicates tuples in relations, and 
correspondingly defines the multiplicity of tuples in the 
result of joins. Which one of the following queries 
always gives the same answer as the nested query 
shown below: 

```c
 select * from R 
 where a in (select S.a from S)
```


- **(A)** select R.* from R,S where R.a=S.a

- **(B)** select distinct R.* from R,S where R.a=S.a

- **(C)** select R.* from R,(select distinct a from S) as S1 
where R.a = S1.a

- **(D)** select R * from R,S where R.a=S.a and is unique 
R



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- Multiplicity of duplicate tuples would be 
distributed when there is a match between R.a and S.a; and 
for that match to happen, S.a's value is repeated in each 
cases except the third case. So, the output of query given in 
the question matches with the output of select R.* from 
R,(select distinct a from S) as S1 where R.a = S1.a. 
A B C 
1 4 8 
1 4 8 
5 6 10 
5 6 10 
A D E 
1 4 8 
4 5 11 
5 8 9 
5 8 9 
 Select * from R where a in (select S. a from S) 
 a. Select R. *  from R, S where R. a = S.a 
A B C 
1 4 8 
1 4 8 
5 6 10 
5 6 10 
5 6 10 
5 6 10 
<!-- PAGE 417 -->
DATABASE MANAGEMENT  SYSTEM 
 4 × 4 = 16 tuple  
 3 + 3 = 6 Multiple  
 B. Select distinct R. * from R, S where R.a = Sa 
A B C 
1 4 8 
1 4 8 
5 6 10 
5 6 10 
A D E 
1 4 8 
4 5 11 
5 8 9 
5 8 9 
A B C 
1 4 8 
5 6 10 
 Output of option (b) 
 C. Select R . * from R, (select distinct a form S) as S1 
where R. a = S1.a 
A B C 
1 4 8 
1 4 8 
5 6 10 
5 6 10


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Given the following schema: 
 employees(emp-id, first-name, last-name, hire-date, 
dept-id, salary)  
 departments(dept-id,dept-name,manager-id, location-
id) 
 You want to display the last names and hire dates of all 
latest hires in their respective departments in the 
location ID 1700. You issue the following query: 
 SQL> select last-name, hire-date  
 FROM employees 
 WHERE (dept-id, hire-date) IN ( SELECTdept-id, 
MAX(hire-date) 
 FROM employees JOIN departments USING(dept-id)  
 WHERE location-id = 1700 
 GROUP BYdept-id); 
 What is the outcome?


- **(A)** It executes but does not give the correct result.

- **(B)** It executes and gives the correct result.

- **(C)** It generates an error because of pairwise 
comparison.

- **(D)** It generates an error because the GROUP BY 
clause cannot be used with table joins in a 
subquery.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation : - The given SQL query will display the 
last names and hire -dates of all latest hires in their 
respective departments in the location ID 1700. So, 
correct option is It executes and gives the correct result.


</details>

---


### Q19. [GATE CSE-2014 SET-2  MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the above tables A, B and C. How many tuples 
does the result of the  following SQL query contains? 
 Table A 
Id Name Age 
12 Arun 60 
15 Shreya 24 
99 Rohit 11 
Table B 
Id Name Age 
15 Shreya 24 
25 Hari 40 
98 Rohit 20 
98 Rohit 11 
Table C 
Id Name Age 
10 2200 02 
99 2100 01 
 SELECT A.id  
 FROM   A  
 WHERE  A.age> ALL (SELECT B.age 
           FROM   B  
          WHERE  B. name = "arun");


- **(A)** 4

- **(B)** 3

- **(C)** 0

- **(D)** 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- 
 On executing the Inner Query or query (2), 0 or no rows 
will be selected because in relation B there is no Name 
‘Arun’. 
 And the outer query (1) results in the following output. 
(Because inner query returns 0 rows).  
       Thus, the number of Tuples will be 3.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relations A, B and C: 
A 
ID, Name, Age 
12 Arun   60 
15 Shreya   24 
99 Rohit    11 
B 
ID, Name, Age 
15 Shreya 24 
25 Hari 40 
98 Rohit    20 
99 Rohit 11 
C 
ID, Phone, Area 
10 2200 02 
99 2100 01 
 How many tuples does the result of the following 
relational algebra expression contain?   
Assume that the schema of A ∪ B is the same as 
that of A. 
(A ∪ B) ⋈A.ID > 40 ∨ C.ID < 15 C


- **(A)** 7

- **(B)** 4

- **(C)** 5

- **(D)** 9



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- 
 Table: A 
A_ID A_Name A_Age 
12 Aarn 60 
15 Shreya 24 
99 Rohit 11 
25 Hadi 40 
98 Rohit 20 
 Table: C 
C_ID C_Phone C_Area 
10 2200 02 
99 2100 01 
 Cartesian Product: A × C 
 Selection Condition Applied: 
 σ (A.ID > 40 OR CID < 15) 
 Since: 
 C_ID values = 10 and 99 
 C_ID < 15 ⇒ only rows with C_ID = 10 
 A_ID > 40 ⇒ rows with A_ID = 99, 98 
 Final Result 
<!-- PAGE 418 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements are TRUE about an 
SQL query?  
 P: An SQL query can contain a HAVING clause even 
if it does not have a GROUP BY clause. 
 Q: An SQL query can contain a HAVING clause only 
if it has a GROUP BY clause. 
 R: All attributes used in the GROUP BY clause must 
appear in the SELECT clause. 
 S: Not all attributes used in the GROUP BY clause 
need to appear in the SELECT clause.


- **(A)** P and R

- **(B)** P and S

- **(C)** Q and R

- **(D)** Q and S



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion :-   An SQL query can contain a HAVING 
clause only if it has a GROUP BY clause. 
 Also, all attributes used in the GROUP BY clause must 
appear in the SELECT clause. 
     So, Statement Q and R are correct.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a database table T containing two columns X 
and Y each of type integer. After the creation of the table, 
one record (X=1, Y=1) is inserted in the table. Let MX 
and MY denote the respective maximum values of X and 
Y among all records in the table at any point in time. 
Using MX and MY, new records are inserted in the table 
128 times with X and Y values being MX+1, 2*MY+1 
respectively. It may be noted that each time after the 
insertion, values of MX and MY change.  
 What will be the output of the following SQL query after 
the steps mentioned above are carried out? 
 SELECT Y 
 FROM T 
 WHERE X=7;


- **(A)** 127

- **(B)** 255

- **(C)** 129

- **(D)** 257



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explantion :-  
X Y 
1 1 
2 3 
3 7 
4 15 
4 31 
6 63 
7 127 
 So, when X =7 , selecting  Y will give value 127.


</details>

---


### Q23. [GATE CSE-2011   MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Database table by name Loan_Records is given below. 
Borrower Bank_Manager       Loan_Amount 
Ramesh      Sunderajan  10000.00 
Suresh       Ramgopal   5000.00 
Mahesh      Sunderajan 7000.00 
 What is the output of the following SQL query? 
 SELECT Count(*)  
 FROM ( ( SELECT Borrower, Bank_Manager 
  FROM Loan_Records) AS S  
 NATURAL JOIN ( SELECT    
Bank_Manager,      
           Loan_Amount 
  FROM Loan_Records) AS T );


- **(A)** 3

- **(B)** 9

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion:- 
 After executing the given query, the output would be 
Borrower Bank Manager Loan Amount 
Ramesh Sunderajan 10000.00 
Ramesh Sunderajan 7000.00 
Suresh Ramgopal 5000.00 
Mahesh Sunderajan 10000.00 
Mahesh Sunderajan 7000.00 
 Thus, the output of the SQL query contains 5 tuples.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A relational schema for a train reservation database is 
given below. Passenger (pid , pname, age) Reservation 
(pid , class, tid) 
 Table : Passenger 
pid pname age 
0 Sachin 65 
1 Rahul 66 
2 Sourav 67 
3 Anil 69 
 Table : Reservation 
pid class tid 
0 AC 8200 
1 AC 8201 
2 SC 8201 
5 AC 8203 
1 SC 8204 
3 AC 8202 
 What pids are returned by the following SQL query for 
the above instance of the tables? 

```sql
 SELECT pid 
 FROM Reservation , 
 WHERE class=‘AC’ AND 
  EXISTS (SELECT * 
   FROM Passenger 
   WHERE age > 65 AND 
   Passenger.pid = Reservation.pid )
```


- **(A)** 1,0

- **(B)** 1,2

- **(C)** 1,3

- **(D)** 1,5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explantion :-  
  Passenger: 
 ― 1, 3 Pidsare returned


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
 Suppliers(sid:integer,sname:string, 
city:string,street:string) 
Parts(pid:integer,pname:string, color:string) 
Catalog(sid:integer, pid:integer, cost:real) 
 Consider the following relational query on the above 
database: 

```sql
 SELECT S.sname 
 FROM Suppliers S 
 WHERE S.sid NOT IN (SELECT C.sid  
          FROM Catalog C 
          WHERE C.pid NOT IN (SELECT P.pid 
          FROM Parts P 
          WHERE P.color<> 'blue')) 
 Assume that relations corresponding to the above schema 
are not empty. Which one of the following is the correct 
interpretation of the above query?
```


- **(A)** Find the names of all suppliers who have supplied 
a non-blue part.

- **(B)** Find the names of all suppliers who have not 
supplied a non-blue part.

- **(C)** Find the names of all suppliers who have supplied 
only non-blue part.

- **(D)** Find the names of all suppliers who have not 
supplied only blue parts.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:-  
(D) option matched because given query 
returns suppliers who have not supplied any 
blue parts. That means it can include other 
than blue parts.  
(A): False, as this may include blue parts and 
may not include "null" parts.   
(B): Obviously false because it returning other 
than any blue part.  
(C): Obviously false because it does not return 
this.


</details>

---


### Q26. [GATE CSE-2010   MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following relational schema: 
Student (school-id, sch-roll-no, sname, saddress) 
School (school-id, sch-name, sch-address, sch-
phone) 
Enrolment (school-id, sch-rollno, erollno, 
examname) 
ExamResult (erollno, examname, marks) 
What does the following SQL query output? 

```sql
 SELECT sch-name, COUNT(*) 
FROM School C, Enrolment E, ExamResult R 
WHERE E.school-id = C.school-id 
                 AND E.examname = R.examname 
                  AND E.erollno = R.erollno 
                  AND R.marks = 100 
                   AND S.school-id IN 
                   (SELECT school-id 
                   FROM student 
                   GROUP BY school-id 
                    HAVING COUNT(*) > 200) 
                    GROUP BY school-id;
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:-  
 If aggregate operator & other attribute are used in the 
SELECT clause, it is allowed only if the other 
attribute is in the GROUP BY clause. 
In this query (in outer query), Sch_name, COUNT(*) 
are used, so Sch_name must be in GROUP BY 
clause. But in the query, School_id is in the GROUP 
BY clause. 
So, the query has a syntax error.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the table employee(empId, name, department, 
salary) and the two queries Q₁, Q₂ below. Assuming 
that department 5 has more than one employee, and we 
want to find the employees who get higher salary than 
anyone in the department 5, which one of the 
statements is TRUE for any arbitrary employee table? 
 Q₁: 

```c
 Select e.empId 
 From employee e 
 Where not exists 
 (Select * From employee s Where s.department = "5" 
and s.salary>= e.salary) 
 Q₂: 
 Select e.empId 
 From employee e 
 Where e.salary> Any 
 (Select distinct salary From employee s Where 
s.department = "5")
```


- **(A)** Q₁ is the correct query

- **(B)** Q₂ is the correct query

- **(C)** Both Q₁ and Q₂ produce the same answer

- **(D)** Neither Q₁ nor Q₂ is the correct query



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-We need employees whose salary is 
greater than every employee in department 5. 
That means: 
 e.salary> ALL (salaries in department 5) 
 i.e., greater than the maximum salary in department 5. 
 Q₁ 
 NOT EXISTS (s.salary ≥ e.salary in dept 5) 
This ensures there is no department 5 employee with 
salary ≥ e.salary. 
 So e. salary must be strictly greater than all salaries in 
department 5. 
 Hence Q₁ is correct. 
 Q₂ 
 e.salary> ANY (dept 5 salaries) 
<!-- PAGE 419 -->
DATABASE MANAGEMENT  SYSTEM 
 This means salary is greater than at least one employee 
in department 5. 
That is much weaker than required. 
Hence Q₂ is incorrect. 
Final Answer: A. Q₁ is the correct query.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the relation enrolled(student, course) in which 
(student, course) is the primary key, and the relation 
paid(student, amount), where student is the primary 
key. Assume no null values and no foreign keys or 
integrity constraints. Assume that amounts 6000, 7000, 
8000, 9000 and 10000 were each paid by 20% of the 
students. Consider these query plans (Plan 1 on left, 
Plan 2 on right) to "list all courses taken by students 
who have paid more than x". 
 A disk seek takes 4ms, disk data transfer bandwidth is 
300 MB/s and checking a tuple to see if amount is greater 
than x takes 10 micro-seconds. Which of the following 
statements is correct?


- **(A)** Plan 1 and Plan 2 will not output identical row sets 
for all databases.

- **(B)** A course may be listed more than once in the 
output of Plan 1 for some databases

- **(C)** For x = 5000, Plan 1 executes faster than Plan 2 for 
all databases.

- **(D)** For x = 9000, Plan I executes slower than Plan 2 
for all databases.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :- Answer (C) Assuming that large enough 
memory is available for all data needed. Both plans need 
to load both tables courses and enrolled. So disk access 
time is same for both plans. Plan 2 does lesser number 
of comparisons compared to plan 1. 1) Join opera tion 
will require more comparisons as the second table will 
have more rows in plan 2 compared to plan 1. 2) The 
joined table of two tables will have more rows, so more 
comparisons are needed to find amounts greater than x.


</details>

---


### Q29. [GATE  CSE-2007 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the relation "enrolled(student, course)" in which 
(student, course) is the primary key, and the relation 

```c
"paid(student, amount)" where student is the primary key. 
Assume no null values and no foreign keys or integrity 
constraints. Given the following four queries: 
 Query1: select student from enrolled where 
 student in (select student from paid) 
 Query2: select student from paid where 
 student in (select student from enrolled) 
 Query3: select E.student from enrolled E, paid P 
      where E.student = P.student 
 Query4:  select student from paid where exists 
 (select * from enrolled where enrolled.student= 
paid.student) 
 Which one of the following statements is correct?
```


- **(A)** All queries return identical row sets for any 
database

- **(B)** Query2 and Query4 return identical row sets for all 
databases but there exist databases for which 
Query1 and Query2 return different row sets.

- **(C)** There exist databases for which Query3 returns 
strictly fewer rows than Query2

- **(D)** There exist databases for which Query4 will 
encounter an integrity violation at runtime.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation:- Take an example: 
 Table enrolled 
student course 
abc        c1    
xyz        c1 
abc        c2 
pqr        c1 
 Table paid 
student amount 
abc     20000 
xyz     10000 
rst      10000 
 Output of Query 1 
 abc 
 abc 
  xyz 
 Output of Query 2 
 abc 
 xyz 
 Output of Query 3 
  abc 
  xyz 
 Output of Query 4 
  abc 
  xyz 
 Query 1 and Query 3 may return repetitive student 
values as "student" is not a key in relation enrolled, 
however query 2 and query 4 always return same row 
sets. So, option (B) is correct.


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the relation account (customer, balance) 
where customer is a primary key and there are no null 
values. We would like to rank customers according to 
decreasing balance. The customer with the largest 
balance gets rank 1. ties are not broke but ranks are 
skipped: if exactly two customers have the largest 
balance they each get rank 1 and rank 2 is not assigned 
 Query1: 
 select A.customer, count(B.customer) 
  from account A, account B 
 where A.balance<=B.balance 
  group by A.customer 
 Query2: 
 select A.customer, 1+count(B.customer) 
 from account A, account B 
  where A.balance<B.balance 
 group by A.customer 
 Consider these statements about Query1 and Query2. 
 1. Query1 will produce the same row set as Query2 for 
some but not all databases. 
 2. Both Query1 and Query2 are correct implementation 
of the specification 
 3. Query1 is a correct implementation of the 
specification but Query2 is not 
 4. Neither Query1 nor Query2 is a correct 
implementation  of the specification 
 5. Assigning rank with a pure relational query takes 
less time than scanning in decreasing balance order 
   assigning ranks using ODBC. 
 Which two of the above statements are correct?


- **(A)** 2 and 5

- **(B)** 1 and 3

- **(C)** 1 and 4

- **(D)** 3 and 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation 
Query 1 and Query 2 will give the same result if all the 
customers have distinct balance. So, for some databases, 
the result of query 1 and query 2 will be same.  
Now, let us consider a fact that all the entries in the 
database have the same value for balance. Ideally, all the 
customers should have rank 1, but both the queries will 
give all the customers a rank equal to the number of 
customers in the database. 
 So, both the queries do not give us the required output. 
 Thus, C is the correct choice. 
 Query 1: 
(1) FROM Acc A, Acc B 
 (2) Where A.bal < = B.bal → Group by A.cid 
{C1 30 C1 30C1 30 C2 30
{C2 30 C1 30C2 30 C2 30
{
C3 25 C1 30
C3 25 C2 30
C3 25 C3 25
C3 25 C4 25
  (4) select A.cid count (B. cid) 
C1 2 
C2 2 
C3 4 
C4 4 
C5 5 
C6 6 
 Result Query 1 wrong as per given specifications 
 Query 2: 
(1) From acc A, Acc B 
(2) Where A.bal<B.bal 
(3) Group by A.cid 
(4) Select A.cid, count + 1 
{
 cid  bal  cid  bal 
 C3 25  C1 30
 C3 25  C2 30
{ C4 25  C1 30 C4 25  C2 30 
<!-- PAGE 420 -->
DATABASE MANAGEMENT  SYSTEM 
{
 C5 20  C1 30
 C5 20  C2 30
 C5 20  C3 20
 C5 20  C4 20
{
  𝐶6 15 𝐶1 30𝐶6 15 𝐶2 30
𝐶6 15 𝐶3 25
𝐶6 15 𝐶4 25
𝐶6 15 𝐶5 20
C3 3 
C4 3 
C5 5 
C6 6 
result 
 Wrong because 1st  rank cust not in result. Both Query 
1 Query 2 wrong for given specific between some 
records of Query 1 Query 2 can same for some 
database.


</details>

---


### Q31. [GATE  CSE-2006 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a database with three relation instances shown 
below. The primary keys for the Drivers and Cars 
relation are did and cidrespectively and the records are 
stored in ascending order of these primary keys as 
given in the tables. No indexing is available in the 
database. 
 D: Drivers relation 
did dname rating age 
22 Karthikeyan 7 25 
20 Salman 1 33 
31 Boris 8 55 
32 Amoldt 8 25 
58 Schumacher 10 35 
64 Sachin 7 35 
71 Senna 10 16 
74 Sachin 9 35 
83 Rahul 3 25 
95 Ralph 3 53 
 R: Reserves relation 
did cid day 
22 101 10/10/06 
22 102 10/10/06 
22 103 08/10/06 
22 104 07/10/06 
31 102 10/11/06 
31 103 06/11/06 
31 104 12/11/06 
64 101 05/09/06 
64 102 08/09/06 
74 103 08/09/06 
 C: cars celation 
cid cname colour 
101 Renault blue 
102 Renault red 
103 Ferrari green 
104 Jaguar red 
 select D.dname 
 from Drivers D 
 where D.didin  (


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation:-  
Here we have to calculate the number of comparisons 
performed when the above SQL query is optimally 
executed. 
 from the first inner query: 
 select R.did from Cars C, Reserves R where R.cid = 
C.cid and C.colour = 'red' 
 C.color = "Red", comparisons=4 (Cars has four rows) 
 R.cid=C.cid so there are five rows extracted to this 
where condition. comparisons=(2 red cars * 10 Reserves 
rows)=20 
 from the second inner query: select R.did from Cars C, 
Reserves R where R.cid = C.cid and C.colour = 'green' 
 C.color = "Green", comparisons=4 (Cars has four rows) 
 R.cid=C.cid so there are three rows extracted to this 
where condition. comparisons=(1 green car*10 Reserves 
rows)=10 
 R.did = {22, 22, 31,31, 64} for first inner query R.did = 
{22, 31, 74} for second inner query 
 Here unique sets are, R.did={22,31,64} and 
R.did={22,31,74} respectively for first and second inner 
queries. so for intersection, 6 comparisons (for 22, we hit 
on the first try and for 31,we hit on the second try,and 
for 74,we hit on all t hree try, so comaprisons=1+2+3) 
Finally we have to locate the did - 22 and did 31 from 
the driver table and did is the primary key. As told in the 
question, we use linear search and for 22, we hit on the 
first try and for 31 we hit on the third try. So, 1 + 3 = 4 
comparisons. so total no of comparisons= 
4+20+4+10+6+4=48 therefore B is the answer. 
 In short: So, first get 2 red cars by scanning 4 tuples of 
the cars relation. Now, for each of the two 'red' cars, we 
scan all the 10 tuples of the 'Reserves' rel ation and thus 
we get 2*10 + 4 = 24 comparisons.Similarly for the 'green' 
car we get 4+10 = 14 comparisons.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a database with three relation instances shown 
below. The primary keys for the Drivers and Cars 
relation are did and cid respectively and the records are 
stored in ascending order of these primary keys as given 
in the tables. No indexing is available in the database. 
 D: Drivers relation 
did dname rating age 
22 Karthikeyan 7 25 
20 Salman 1 33 
31 Boris 8 55 
32 Amoldt 8 25 
58 Schumacher 10 35 
64 Sachin 7 35 
71 Senna 10 16 
74 Sachin 9 35 
83 Rahul 3 25 
95 Ralph 3 53 
 R: Reserves relation 
did cid day 
22 101 10/10/06 
22 102 10/10/06 
22 103 08/10/06 
22 104 07/10/06 
31 102 10/11/06 
31 103 06/11/06 
31 104 12/11/06 
64 101 05/09/06 
64 102 08/09/06 
74 103 08/09/06 
 C: cars celation 
cid cname colour 
101 Renault blue 
102 Renault red 
103 Ferrari green 
104 Jaguar red 
 What is the output of the following SQL query? 
 select D.dname 
 from Drivers D 
 where D.didin  ( 
      select R.did 
   from Cars C, Reserves R 
 where R.cid = C.cid and C.colour = 'green'


- **(A)** Karthikeyan, Boris

- **(B)** Sachin, Salman

- **(C)** Karthikeyan, Boris, Sachin

- **(D)** Schumacher, Senna



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation:-   The sub-query always executes before the 
execution of the main query. Subqueries are completed 
first.The result of the subquery is used as input for the outer 
query. from the first inner query: select R.did from Cars C, 
Reserves R where R.cid = C.cid and C.colour = 'red'. 
C.color = "Red", corresponding C.cid={102,104}. 
R.cid=C.cid so there are five rows extracted to t his where 
condition. R.did = {22, 22, 31,31, 64} from the second 
inner query: select R.did from Cars C, Reserves R where 
R.cid = C.cid and C.colour = 'green' C.color = "Green", 
corresponding C.cid={103} R.cid=C.cid so there are three 
rows extracted to this  where condition. R.did = {22, 31, 
74} Finally, the outer query selects driver names whose did 
= {22,31} which corresponds to Karthikeyan and Boris. so 
the correct option is A.


</details>

---


### Q33. [GATE  CSE-2006 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The relation book(title, price) contains the titles and 
prices of different books. Assuming that no two books 
have the same price, what does the following SQL query 
list?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation :-  
 For each book B, it counts how many books have price 
greater than B.price. 
Condition: 
 count(T.price>B.price) < 5 
 This means: There are fewer than 5 books more expensive 
than B. 
 So B is among the top 5 most expensive books.  
Since prices are unique, exactly the five highest -priced 
books satisfy this. 
 Answer: D. Titles of the five most expensive books 
Book B 
Title  Price  
B1 10 
B2 20 
B3 30 
B4 40 
B5 5 
B6 15 
B7 60 
B8 70 
B9 80 
<!-- PAGE 421 -->
DATABASE MANAGEMENT  SYSTEM 
Book T 
Title  Price  
B1 10 
B2 20 
B3 30 
B4 40 
B5 5 
B6 15 
B7 60 
B8 70 
B9 80 
 (T. price > B. price) < 5  
 1. T- price > 10 ⇒ 7 < 5 False 
 2. T. price > 20 ⇒ 5 < 5 False  
 3. T. price > 30  ⇒ 4 < 5 True  
 4. T. price > 40 ⇒ 3 < 5 True  
 5. T. price > 5 ⇒ 8 < 5 False  
 6. T. Price > 15 ⇒ 6 < 5 False  
 7. T. price > 60 ⇒ 2 < 5 True  
 8. T. price > 70 ⇒ 1 < 5 True  
 9. T. price > 80 ⇒ 0 < 5 True


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A table 'student' with schema (roll, name, hostel, 
marks), and another table 'hobby' with schema (roll, 
hobbyname) contains records as shown below: 
 The following SQL query is executed on the above 
tables: 
 select hostel 
 from student natural join hobbywhere marks > = 75 and 
roll between 2000 and 3000; 
 Relations S and H with the same schema as those of 
these two tables respectively contain the same 
information as tuples. A new relation S’ is obtained by 
the following relational algebra operation:  
 S’ = ∏Hostel ((σ s.roll = H.roll(σmarks > 75 and roll > 2000 and roll < 
3000  (S)) X (H))  
 The difference between the number of rows output by 
the SQL statement and the number of tuples in S’ is .


- **(A)** 6

- **(B)** 4

- **(C)** 2

- **(D)** 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- 
Output of above Query 
Roll Hostel 
2369 7 
2581 6 
2643 5 
2643 5 
2872 5 
2926 5 
2959 7 
 Total   rows selected by running SQL Query: 7 Total rows 
by Relation Algebra : 4  i.e 5,6,7 (Unique values only) 7-
3=4   Answer is B


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In an inventory management system implemented at a 
trading corporation, there are several tables designed to 
hold all the information. Amongst these, the following 
two tables hold information on which items are supplied 
by which suppliers, and which warehouse keeps which 
items along with the stock-level of these items. Supply = 
(supplierid, itemcode) Inventory = (itemcode, warehouse, 
stocklevel) For a specific information required by the 
management, following SQL query has been written 
 Select distinct STMP.supplierid 
From Supply as STMP 
Where not unique (Select ITMP.supplierid     
                       From Inventory, Supply as ITMP  
                     Where STMP.supplierid = ITMP.supplierid   
                    And ITMP.itemcode = Inventory.itemcode     
                   And Inventory.warehouse = 'Nagpur'); 
 For the warehouse at Nagpur, this query will find all 
suppliers who


- **(A)** do not supply any item

- **(B)** supply exactly one item

- **(C)** supply one or more items

- **(D)** supply two or more items



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :- 
Here [not unique] in nested query ensures that only for 
those suppliers it return True which supplies more than 1 
item in which case supplier id in inner query will be 
repeated for that supplier. 
 Hence, answer is (D) supply two or more items.


</details>

---


### Q36. [GATE CSE-2005 (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A company maintains records of sales made by its 
salespersons and pays them commission based on each 
individual's total sales made in a year. This data is 
maintained in a table with following schema: 
 salesinfo = (salespersonid, totalsales, commission) 
 In a certain year, due to better business results, the 
company decides to further reward its salespersons by 
enhancing the commission paid to them as per the 
following formula: 
If commission < = 50000, enhance it by 2%  
If 50000 < commission < = 100000, enhance it by 4%  
If commission > 100000, enhance it by 6% 
 The IT staff has written three different SQL scripts to 
calculate enhancement for each slab, each of these scripts 
is to run as a separate transaction as follows:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Explanation :- 
T3 followed by T2 followed by T1   
If this sequence is not followed then it may happen that 
the Officer of one slab gets benefited twice. Say an officer 
is having commission as 99,999, He must get an updated 
commission according to T2. But then 
99,999*1.04=1,03998 and he again becomes eligible for 
next slab of commission.  
T3 followed by T2 followed by T1 will be check all 
border cases like above. 
So Answer is D  
<!-- PAGE 422 -->
File Organization & 
Indexing


</details>

---



## Topic 5: Topic 5


### Q1. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An index in a DBMS is said to be dense if an index entry 
appears for every search -key value in the  indexed file. 
Otherwise it is called a sparse index. Consider the 
following two statements: 
 S1: A hash index must be a dense index 
S2: A B⁺ tree index can be a sparse index 
 Which one of the following options is correct?


- **(A)** Both S1 and S2 are true

- **(B)** Both S1 and S2 are false

- **(C)** S1 is true and S2 is false

- **(D)** S1 is false and S2 is true



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explantion :- 
S1: A hash index must be a dense index 
 Hash indexing maps each search-key value to a 
bucket 
 Direct access requires an entry for each key 
 Sparse hashing is not feasible 
 True 
S2: A B⁺ tree index can be a sparse index 
 B⁺ tree can be built on ordered file 
 Internal levels act as sparse index over lower levels 
 Hence sparse organization is possible 
 True


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In the context of DBMS, consider the two sets T and S 
given below. 
T S 
I:Logical Schema 
Ii:Physical Schema 
III: External Schema 
 L: Views 
M: File organization and 
indexes 
N: Relations 
Which one of the following is the correct match from T 
to S?


- **(A)** I – L, II – M, III – N

- **(B)** I – M, II – L, III – N

- **(C)** I – N, II – M, III – L

- **(D)** I – N, II – L, III – M



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation ➖ 
Logical schema → describes database structure as 
relations 
⇒ I – N 
 Physical schema → storage details like file 
organization and indexes 
⇒ II – M 
 External schema → user views of database 
⇒ III – L


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a B+ tree where each node can hold at most four 
key values, a root to leaf path consists of the 
following nodes: 
A = (49, 77, 83, ), B = (7, 19, 33, 44), C = (20*, 
22*, 25*, 26*) 
The *-marked keys signify that these are data 
entries in a leaf. 
Assume that a pointer between keys k₁ and k₂ points 
to a subtree containing keys in [k₁, k₂), and that when 
a leaf is created, the smallest key in it is copied up 
into its parent. 
A record with key value 23 is inserted into the B+ 
tree. 
The smallest key value in the parent of the leaf that 
contains 25* is ______ 
(Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 33


**Step-by-Step Explanation:**

Explanation:-  
<!-- PAGE 428 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the following 𝐵 + tree with 5 nodes, in which a 
node can store at most 3 key values. The value 23 is now 
inserted in the 𝐵 + tree. Which of the following options(s) 
is/are CORRECT?


- **(A)** None of the nodes will split.

- **(B)** At least one node will split and redistribute

- **(C)** The total number of nodes will remain same

- **(D)** The height of the tree will increase.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B and D


**Step-by-Step Explanation:**

Explanation :-   
 Leaf node and root node split required. 
 Results increases tree height from 1 to 2.


</details>

---


### Q5. [GATE CSE-2026 SET-2 MCQ  (1-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which of the following file organizations is/are I/O 
efficient for the scan operation in DBMS?


- **(A)** Sorted

- **(B)** Heap

- **(C)** Unclustered tree index

- **(D)** Unclustered hash index



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,B


**Step-by-Step Explanation:**

Explanation : - A sorted file organizati on ensures that 
records are stored in a sequential order, which is optimal 
for scan operations since the data can be accessed 
sequentially with minimal I/O overhead. 
 In a heap file organization, records are stored without 
any specific order. Although not as efficient as sorted 
files, a heap file still allows sequential scans across 
all records with moderate I/O efficiency. 
 Options C (Unclustered tree index) and D 
(Unclustered hash index) are not I/O efficient for 
scans because they involve random access to data 
blocks, leading to higher I/O costs. 
 Hence, the correct answer is A and B.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a B+Tree , the requirement of atleast half -full(50%) 
node occupancy is relax ed for which one of the 
following cases?


- **(A)** Only the root node

- **(B)** All leaf nodes

- **(C)** All internal nodes

- **(D)** Only the leftmost leaf node



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Explanation: 
In a B-tree of order m, every node (except the root) 
must satisfy the minimum occupancy condition: 
Each node must have at least ⌈m/2⌉ children.  
This ensures that nodes are at least 50% full.  
However, the root node is an exception: 
The root is allowed to have fewer than ⌈m/2⌉ children.  
It can have as few as 2 children (if it is not a leaf).  
If the tree has only one node, the root itself can be a 
leaf.  
Applying the Given Example  
(Order = 7) 
Internal Nodes: 
⌈7/2⌉ = ⌈3.5⌉ = 4 
So, every internal node must have at least 4 children 
(pointers).  
This satisfies the 50% occupancy rule.  
Root Node (Exception): 
The root node does NOT need to follow the above rule.  
It can have:  
Minimum 2 children (block pointers)  
Which means only 1 key  
This clearly shows that the 50% occupancy condition is 
relaxed only for the root node. 
Why other options are incorrect: 
(B) All leaf nodes: Leaf nodes must still satisfy minimum 
occupancy (except when the leaf is also the root).  
(C) All internal nodes: Internal nodes must follow the 
minimum occupancy rule.  
(D) Only the leftmost leaf node: There is no such special 
relaxation for any specific leaf.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a database of fixed-length records, stored as an 
ordered file. The database has 25,000 records, with each 
record being 100 bytes, of which the primary key 
occupies 15 bytes. The data file is block -aligned in that 
each data record is fully contained within a block. The 
database is indexed by a primary index file, which is also 
stored as a block-aligned ordered file. The figure below 
depicts this indexing scheme. 
 Suppose the block size of the file system is 1024 bytes, 
and a pointer to a block occupies 5 bytes. The system 
uses binary search on the index file to search for a 
record with a given key. You may assume that a binary 
search on an index file of b blocks takes ⌈log2b⌉ block 
accesses in the worst case. 
Given a key, the number of block accesses required to 
identify the block in the data file that may contain a 
record with the key, in the worst case, is _____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Explanation :- 
 Given that One block should fully contain within block so 
here it means that they are saying that you should use 
unspanned file organization. 
 No of record = 25000 
 record size = 100B 
 Key size = 15B 
 Block pointer size = 5B 
 1 index record size =  15 + 5 = 20B 
 Disk Block Size = 1024B 
 No. of Record per Block=(Bs/Rs) = ⌊1024/100⌋ = ⌊10.24⌋  
=10 
 No of Block Required for blocks 
 = ⌈
10 ⌉ 
 = 2500 Block Required to store all records 
 “The database is indexed by a primary index file” it 
means that here we have to use sparse indexing   
 NO of Index per Block =⌊(Bs/Is)⌋ = floorValue(1024/20) 
= 51 
 NO of Block Required for indexes =  
⌈No. OfIndex/No. OfIndexPerBlock⌉ 
  = (2500/51) = 50 Blocks 
 Given That Binary Search is used to search the desired 
block and we know that it takes log2(n) Time to search in 
worst case where n= no of comparision Required = No. of 
Index Block here. 
 the number of block accesses required to identify the 
block in the data file that may contain a record with the 
key, in the worst case, is. 
 =ceil( log2(50)) = 6 blocks


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A data file consisting of 1,50,000 student-records is stored 
on a hard disk with block size of 4096 bytes. The data file 
is sorted on the primary key RollNo. The size of a record 
pointer for this disk is 7 bytes. Each student -record has a 
candidate key attribute called ANum of size 12 bytes. 
Suppose an index file with records consisting of two fields, 
ANum value and the record pointer to the corresponding 
student record, is built and stored on the same disk. Assume 
that the records of data file and index file are not split 
across disk blocks. The number of blocks in the index file 
is____.?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 698


**Step-by-Step Explanation:**

Explanation :-(698 to 698) 
 For index file:  
 records = 150000, block size = 4096 B 
 key = 12 B, pointer = 7B 
 No. of index entry/block = 4096 B/19B 
 4096/19 = 215 
 [Note: Assume that Records of data file and index file are 
not split across disc blocks, so it indicates Unspanned 
Strategy.] 
 No. of blocks needed for indexing = ⌈
215 = 698⌉


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a database implemented using B+ tree for file 
indexing and installed on a disk drive with block size of 4 
KB. The size of search key is 12 bytes and the size of 
tree/disk pointer is 8 bytes. Assume that the database has 
one million records. Also assume that no node of the B+ 
tree and no records are present initially in main memory. 
Consider that each record fits into one disk block. The 
minimum number of disk accesses required to retrieve any 
record in the database is ______?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -4


**Step-by-Step Explanation:**

Explanation ➖ 
 8*p+(p-1)*12<= 4096 
<!-- PAGE 429 -->
DATABASE MANAGEMENT  SYSTEM 
 20p<=4108 
 therefore p=205 
Level Nodes Keys Pointers 
1 1 204 205 
2 205 204 × 205 2052 
3 2052 204 × 2052 2053 
 Level 3 has approximately  8.5 × 106 records. So we 
can be sure that a 3-level  B+ tree is sufficient to index 
106 records. 
 So to access any record (in the worst case), we need 3 
block access to search for the record in the index along 
with 1 more access to actually access the record. 
 Hence, 4 accesses are required.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is NOT 
correct  about the B+ tree data structure used for creating 
an index of a relational database table?


- **(A)** Each leaf node has a pointer to the next leaf node

- **(B)** Non-leaf nodes have  pointers to data records

- **(C)** B+ tree is a height-balanced tree

- **(D)** Key values in each node are kept in sorted order



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The only incorrect statement about the B+ tree data 
structure is that, non-leaf nodes  have pointers to data 
records. So, B is the correct answer.


</details>

---


### Q11. [GATE  CSE-2023 NAT (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a B+ tree, if the search -key value is 8 bytes long, the 
block size is 512 bytes and the block pointer size is 2 bytes, 
then the maximum order of the B+ tree is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -52


**Step-by-Step Explanation:**

Explantion:- Given, 
 Block size = 512 bytes 
 Block pointer, Bp = 2 bytes 
 Search key = 8 bytes 
 Let Maximum order of B+ tree = p 
 Using the node structure of B+ Tree internal node: 
       So, 
   p(Bp) + (p- 1)(k) ≤ 512 
 p(2) + (p - 1)(8) ≤ 512 
 2p + 8p - 8 ≤ 512 
 10p ≤ 520 
 p≤ 520/10 
 Hence, p = 52


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


B+ Trees are considered BALANCED because ...


- **(A)** The lengths of the paths from the root to all leaf 
nodes are all equal.

- **(B)** The lengths of the paths from the root to all leaf 
nodes differ from each other by at most 1.

- **(C)** The number of children of any two non -leaf 
sibling nodes differ by at most 1.

- **(D)** The number of records in any two leaf nodes 
differ by at most 1.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- In both B & B+ trees all the leaf nodes 
will be present at the same level, so the length of the 
paths from the root to all leaf nodes are all equal.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a B+ tree in which the search key is 12 bytes 
long, block size is 1024 bytes, recorder pointer is 10 
bytes long and the block pointer is 8 bytes long. The 
maximum number of keys that can be accommodated in 
each non-leaf node of the tree is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -50


**Step-by-Step Explanation:**

Explanation : - (50 to 50) 
 Using t he node structure of B + Tree internal node,we 
have: 
       p× Bp + (p - 1) × k ≤ B (for non-leaf node) 
       Bp= 8 Bytes, k = 12 Bytes and B = 1024 Bytes. 
    So, p* 8 + (p-1)12 ≤ 1024 
       ⇒  20p – 12 ≤ 1024 
      ⇒ 20p ≤ 1036 
  ⇒  p ≤ 51.8  
      So, p = 51. 
   Now, maximum number of Keys will be p-1 = 50.


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


With reference to the B+ tree index of order 1 shown 
below, the minimum number of nodes (including the 
Root node) that must be fetched in order to satisfy the 
following query:"Get all records with a search key 
greater than or equal to 7 and less than 15" is 
___________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -5


**Step-by-Step Explanation:**

Explanation:-  
 Searching for key 7 requires three node accesses. 
In a B+ tree, all leaf nodes are linked using pointers, 
which allows traversal to adjacent leaves. Hence, to 
retrieve all records with values greater than or equal 
to 7, we can continue scanning through linked leaf 
nodes instead of performing separate searches. This 
reduces the total node accesses to 15. 
The required nodes to fetch all records ≥ 7 and < 15 
are: A, B, D, F, and G.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A file is  organized so that the ordering of   data records 
is the same as or close to the ordering of data   entries in 
some index. Then that index  is called


- **(A)** Dense

- **(B)** Sparse

- **(C)** Clustered

- **(D)** Unclustered



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :-The correct answer is Clustered Index as it 
is the definition of Clustered Indexing.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An index is clustered, if


- **(A)** It is on a set of fields that form a candidate key.

- **(B)** It is on a set of fields that include the primary key.

- **(C)** The data records of the file are organized in the 
same order as the data entries of the index.

- **(D)** The data records of the file are organized not in the 
same order as the data entries of the index.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation:-  
 Option (A) and Option (B) are not correct because, index 
can be created using any column or combination of 
columns, which need not be unique. 
 Basically, Indexed column is used to sort the rows of table. 
Whole data record of file is sorted using index so the 
correct option is (C).


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a B+-tree in which the maximum number of 
keys in a node is 5. What is the minimum number of keys 
in any non-root node?


- **(A)** 1

- **(B)** 2

- **(C)** 3

- **(D)** 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation:-  
 Maximum number of keys = 5 
 ⇒ Order m=6 (since max keys = m−1) 
 In a B+-tree, 
 Minimum number of children = ⌈m/2⌉ = ⌈6/2⌉ = 3 
 Minimum number of keys = children − 1 = 3 − 1 = 2


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The following key values are inserted into a B⁺ -tree in 
which the order of the internal nodes is 3, and that of the 
leaf nodes is 2, in the sequence given below. The order of 
internal nodes is the maximum number of tree pointers in 
each node, and the order of leaf nodes is the maximum  
number of data items that can be stored in it. The B⁺-tree is 
initially empty. 
 10, 3, 6, 8, 4, 2, 1 
 The maximum number of times leaf nodes would get split 
up as a result of these insertions is


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
Yes — this question depends on leaf split convention. 
 Given :-  
 Leaf order = 2 ⇒ max 2 keys per leaf 
 On overflow (3 keys), leaf splits 
 If middle goes to LEFT leaf (common GATE indication) 
Leaf splits occur after inserting: 
<!-- PAGE 430 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q19. [GATE  CSE-2016 SET-2  MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A clustering index is defined on the fields which are of 
type


- **(A)** non-key and ordering

- **(B)** non-key and non-ordering

- **(C)** key and ordering

- **(D)** key and non-ordering



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation:- 
Clustering index 
 File is physically ordered on the search key 
 Search key is not unique (duplicates allowed) 
⇒ Clustering index is on non-key ordering field


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A B-tree of order 4 is built from scratch by 10 successive 
insertions. What is the maximum number of node 
splitting operations that may take place?


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :- 
<!-- PAGE 431 -->
DATABASE MANAGEMENT  SYSTEM 
Total split = 5


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a file of 16384 records. Each record is 32 
bytes long and its key field is of size 6 bytes. The file is 
ordered on a non-key field, and the file organization is 
unspanned. The file is stored in a file system with block 
size 1024 bytes, and the size of a block pointer is 10 
bytes. If the secondary index is built on the key field of 
the file, and a multilevel index scheme is used to store 
the secondary index, then the number of first-level and 
second-level blocks in the multilevel index are 
respectively:


- **(A)** 8 and 0

- **(B)** 128 and 6

- **(C)** 256 and 4

- **(D)** 512 and 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :- 
 Record size = 32 bytes, block size = 1024 bytes 
 ⇒ Records per block = 1024 / 32 = 32 
 Total records = 16384 
 ⇒ Number of data blocks = 16384 / 32 = 512 
 Secondary index (on key, not ordered file) ⇒ dense 
index 
 So, number of index entries = 16384 
 Each index entry size = key (6 bytes) + pointer (10 
bytes) = 16 bytes 
 ⇒ Entries per index block = 1024 / 16 = 64 
 First-level index blocks: 
 16384 / 64 = 256 
 Second-level index: 
 256 entries (one per first-level block) 
 ⇒ Blocks = 256 / 64 = 4 
 Answer: (c) 256 and 4


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The order of a leaf node in a B⁺ -tree is the maximum 
number of (value, data record pointer) pairs it can hold. 
Given that the block size is 1K bytes, data record pointer 
is 7 bytes long, the value field is 9 bytes long and a block 
pointer is 6 bytes long, what is the order of the leaf 
node?


- **(A)** 63

- **(B)** 64

- **(C)** 67

- **(D)** 68



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  
 Given: 
 Block size = 1K bytes = 1024 bytes 
 Value field = 9 bytes 
 Data record pointer = 7 bytes 
 Block pointer (for next leaf) = 6 bytes 
 Each (value, record pointer) pair size = 9 + 7 =  16 
bytes 
 Let number of pairs = n 
Total size = 16n + 6 ≤ 1024 
16n ≤ 1018 
n ≤ 1018 / 16 
 n ≤ 63.625 
Maximum integer n = 63


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the 𝐵+tree in the adjoining figure, where each 
node has at most two keys and three links. 
 Keys K'15 and then K25 are inserted into this tree in that 
order. Exactly how many of the following nodes 
(disregarding the links) will be present in the tree after the 
two insertions?


- **(A)** 1

- **(B)** 2

- **(C)** 3

- **(D)** 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation:-


</details>

---


### Q24. [GATE  CSE-2008 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the 𝐵+tree in the adjoining figure, where each 
node has at most two keys and three links. 
 Now the key 𝐾50 is deleted from the 𝐵+tree resulting 
after the two insertions made earlier. Consider the 
following statements about the 𝐵+tree resulting after this 
deletion. 
i. The height of the tree remains the same. 
ii. The node  
(disregarding the links) is present in the tree.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation:-


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a database file structure, the search key field is 9 
bytes long, the block size is 512 bytes, a record pointer 
is 7 bytes and a block pointer is 6 bytes. The largest 
possible order of a non-leaf node in a B+ tree 
implementing this file structure is.


- **(A)** 23

- **(B)** 24

- **(C)** 34

- **(D)** 44



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Explanation:    
For B+ tree with order n, index pointer p, and block size = 
B 
 For a non leaf node it can be given that 
n*p + (n-1)*(k) <= B 
n*6 + (n-1)*9 <= 512 
n <= 34.77


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is a key factor for preferring B⁺-
trees to binary search trees for indexing database 
relations?


- **(A)** Database relations have a large number of  
  records

- **(B)** Database relations are sorted on the primary key

- **(C)** B⁺-trees require less memory than binary search  
  trees

- **(D)** Data transfer from disks is in blocks



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Solution:- 
B⁺-trees are designed to minimize disk I/O. 
 Since disks transfer data in blocks (pages), B⁺-trees store 
many keys in one node (block), reducing the number of 
disk accesses. 
Binary search trees are not optimized for block-based disk 
storage. 
 Correct Answer: D. Data transfer from disks is in blocks.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A database table T1 has 2000 records and occupies 80 
disk blocks. Another table T2 has 400 records and 
occupies 20 disk blocks. These two tables have to be 
joined as per a specified join condition that needs to be 
evaluated for every pair of records from these two 
tables. The memory buffer space available can hold 
exactly one block of records for T1 and one block of 
records for T2 simultaneously at any point in time. No 
index is available on either table. If Nested-loop join 
algorithm is employed to perform the join, with the 
most appropriate choice of table to be used in outer 
loop, the number of block accesses required for reading 
the data are  .


- **(A)** 800000

- **(B)** 40080

- **(C)** 32020

- **(D)** 100



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
 Number of block access = nr * bs + br where br and bs are 
number of blocks in relations R and S respectively, and n r 
<!-- PAGE 432 -->
DATABASE MANAGEMENT  SYSTEM 
is the number of tuples in relation R.  
We select the relation with small number of tuples as 
outer relation R. So, R is T2. 
Number of block access = 400 * 80 + 20 = 32020  
Thus, option (C) is correct. 
Or 
Here condition given only 1 block of T1 and 1 
block of T2 can be present simultaneously inside 
the memory buffer space. 
 In nested loop join, for every record of one table, 
every block of the second table is loaded. 
So, If T1 is outer = 2000 × 20 + 80 = 40080 
If T2 is outer = 400 × 80 + 20 = 32020 
So we go with T2 as outer table = 32020


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A database table T1 has 2000 records and occupies 80 disk 
blocks. Another table T2 has 400 records and occupies 20 
disk blocks. These two tables have to be joined as per a 
specified join condition that needs to be evaluated for every 
pair of records from t hese two tables. The memory buffer 
space available can hold exactly one block of records for 
T1 and one block of records for T2 simultaneously at any 
point in time. No index is available on either table. If, 
instead of Nested-loop join, Block nested-loop join is used, 
again with the most appropriate choice of table in the outer 
loop, the reduction in number of block accesses required 
for reading the data will be


- **(A)** 0

- **(B)** 30400

- **(C)** 38400

- **(D)** 798400



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Explanation :-Number of block access = nr * bs + br 
where br and bs are number of blocks in relations R and 
S respectively, and nr is the number of tuples in relation 
R.  
 We select the relation with small number of tuples as 
outer relation R. So, R is T2. Number of block access = 
400 * 80 + 20 = 32020  
 The memory buffer space holds one block of records 
for T1 and one block of records for T2 simultaneously. 
So, number of block accesses is 80 * 20 + 20 = 1620  
 So, Total number of block access = 32020 - 1620 = 
 Thus, option (B) is correct.  
Or  
 In a nested block loop join, instead of processing 
each record of table 1 with all blocks of table 2, 
we process each block of table 1 with all blocks 
of table 2. 
 So, 
If T1 is outer: 
Cost = 80 × 20 + 80 = 1680 
If T2 is outer: 
Cost = 80 × 20 + 20 = 1620 
Hence, we select T2 as the outer table since it 
gives the lower cost = 1620 
Reduction in block accesses = 32020 − 1620 =


</details>

---


### Q29. [GATE  CSE-2007 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A B-Tree used as an index for a large database table has 
four levels including the root node. If a new key is 
inserted in this index, then the maximum number of nodes 
that could be newly created in the process are:


- **(A)** 5

- **(B)** 4

- **(C)** 3

- **(D)** 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Explanation :- The B-Tree has 4 levels (including root). 
 In the worst case, insertion causes splitting at every level 
from leaf to root: 
 Leaf split → 1 new node 
 Internal splits → 1 new node per level 
 This gives 4 new nodes. 
 Additionally, if the root splits, a new root is created, 
adding one more node. 
 So, total maximum new nodes = 4 + 1 = 5 
<!-- PAGE 433 -->
Transaction & 
Concurrency Control


</details>

---



## Topic 6: Topic 6


### Q1. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider concurrent execution of two transactions T1 
and T2 in a DBMS, both of which access a data object 
A. For these two transactions to not conflict on A, which 
one of the following statements must be true?


- **(A)** Both T1 and T2 only read A

- **(B)** T1 reads A and T2 writes A

- **(C)** T1 writes A and T2 reads A

- **(D)** Both T1 and T2 write A



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  
Conflict rules 
Two operations conflict if: 
 They belong to different transactions 
 Access same data item 
 At least one is write 
Check options: 
 (A) Both T1 and T2 only read A 
 Read–Read → no write → no conflict (True) 
(B) T1 reads A and T2 writes A → conflict (False) 
 (C) T1 writes A and T2 reads A → conflict (False) 
 (D) Both write A → conflict (False)


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the database transactions T1and T2, and data 
items X and Y. Which of the schedule(s) is/are conflict 
serializable? 
 Transaction T1 : R1(X) ; W1(Y) ; R1(X) ; W1(X) ; 
COMMIT(T1) 
Transaction T2 : W2(X); W2(Y) ;COMMIT(T2)


- **(A)** R1(X),W2(X),W1(Y),W2(Y),R1(X), 
  W1(X),COM  MIT(T2),COMMIT(T1)

- **(B)** W2(X),R1(X),W2(Y),W1(Y),R1(X),COMMIT 
  (T2),W1(X),COMMIT(T1)

- **(C)** R1(X),W1(Y),W2(X),W2(Y),R1(X),W1(X), 
  COMMIT(T1),COMMIT(T2)

- **(D)** W2(X),R1(X),W1(Y),W2(Y),R1(X), 
  COMMIT(T2),W1(X),COMMIT(T1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B


**Step-by-Step Explanation:**

Explanation :-  
 While taking precedence graph for each options B is the 
only option which doesn't contain cycles or deadlocks. I.e 
T2-> T1 which is conflict serializable.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


An audit of a banking transactions system has found that 
on an earlier occasion, two joint holders of account A 
attempted simultaneous transfers of Rs. 10000 each from 
account A to account B. Both transactions read the same 
value, Rs. 11000, as the initial balance in A and were 
allowed to go through. B was credited Rs. 10000 twice. 
A was debited only once and ended up with a balance of 
Rs. 1000. 
 Which of the following properties is/are certa in to have 
been violated by the system?


- **(A)** Atomicity

- **(B)** Consistency

- **(C)** Isolation

- **(D)** Durability



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C


**Step-by-Step Explanation:**

Explanation :- 
 Given: 
Account A has Rs. 11,000. 
Two simultaneous transfers of Rs. 10,000 each are 
attempted. 
Account B is credited twice (total Rs. 20,000). 
Account A is debited only once (final balance Rs. 1,000). 
 ACID Properties: 
 1. Atomicity: 
 Ensures all parts of a transaction are completed or none 
are.Each transfer individually was complete (money was 
debited from A and credited to B),so atomicity is likely not 
violated  
 Not necessarily violated. 
 2. Consistency: 
Ensures that the database moves from one valid state to 
another. 
If Rs. 20,000 was credited to B, Rs. 20,000 should be 
debited from A. 
But only Rs. 10,000 was debited. This breaks balance 
rules. 
Violated. 
 3. Isolation: 
Ensures concurrent transactions do not interfere with each 
other. 
Both transactions read the same initial balance (Rs. 
11,000) 
and proceeded independently, leading to an incorrect final 
state. 
This is a classic lost update / write skew issue. 
Violated. 
 4. Durability: 
Ensures that once a transaction is committed, it remains 
so, 
even in case of failure. No crash/rollback problem here. 
Not violated. 
 Conclusion: 
Consistency and Isolation are violated.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


A schedule of three database transactions T1,T2, andT3 is 
shown. Ri(A) and Wi (A) denote read and write of data 
item A by transaction Ti, i=1,2,3 The transaction T1 aborts 
at the end. Which other transaction(s) will be required to 
be rolled back? 
R1(X); W1(Y); R2(X); R2(Y); R3(Y) ;ABORT(T1);


- **(A)** Only T2

- **(B)** Only T3

- **(C)** Both T2 and T3

- **(D)** Neither T2 nor T3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

T1 T2 T3 
R1(x) 
W1(y) 
Abort 
R2(x) 
R2(y) 
R3(y) 
GATE  CSE-2005 MCQ (1-MARKS) 
[GATE IT 2005] 
<!-- PAGE 441 -->
DATABASE MANAGEMENT  SYSTEM 
 As W1(y) is read by both T2 and T3 before it commits 
aborting T1 required to roll back both T2 and T3.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about the Two Phase 
Locking (2PL) protocol is/are TRUE?


- **(A)** 2PL permits only serializable schedules

- **(B)** With 2PL, a transaction always locks the data item 
being read or written just before every operation and 
always releases the lock just after the operation

- **(C)** With 2PL, once a lock is released on any data item 
inside a transaction, no more locks on any data item 
can be obtained inside that transaction

- **(D)** A deadlock is possible with 2PL



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,C,D


**Step-by-Step Explanation:**

Explanation : 
 A. 2PL -> serial schedule 
 C. Also it's the property of 2pl which states that once a 
lock is relased no further lock can be taken as the 
shrinking phase of the transaction starts and you can't 
acquire any lock in the shrinking phase of a transaction. 
 D. Deadlock can occur in 2PL as in a schedule 2 
transaction can wait for each other to release the locks. 
This is the disadvantage of normal 2PL


</details>

---


### Q6. [GATE CSE-2026  SET-2  MCQ (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Once the DBMS informs the user that a transaction has 
been successfully completed, its effect should persist even 
if the system crashes before all its changes are reflected 
on disk. This property is called


- **(A)** Durability

- **(B)** Atomicity

- **(C)** Consistency

- **(D)** Isolation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation : 
 Atomicity: Either execute all operations of a transaction 
successfully or none of them 
Full or None 
Consistency: Database remains consistent before and 
after the transaction Isolation: Transactions execute 
independently without interference 
Durability: Any change in the database must persist for 
a long period of time


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following read-write schedule S over three 
transactions T1,T2 and T3, where the subscripts in the 
schedule indicate transaction IDs: 
S: r1(z); w1(z);r 2(x); r3(y); w3(y); r2(y); w2(x); 
w2(y); 
Which of the following transaction schedules is/are 
conflict equivalent to S?


- **(A)** T1T2T3

- **(B)** T1T3T2

- **(C)** T3T2T1

- **(D)** T3T1T2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C,D


**Step-by-Step Explanation:**

Explanation:-  
 The corresponding polygraph for the given transaction. 
it has three conflict pairs as T3→T2 as 
r3(y)→w2(y),w3(y)→r2(y),w3(y)→w2(y). 
Because the graph is acyclic it is conflict serializable 
schedule and its corresponding conflict equal schedule 
is based on the topological order of the given graph. 
 Therefore, the following are possible serial schedules: 
1. T1,T3,T2 
2. T3,T1,T2 
3. T3,T2,T1 
 Option (B,C,D) are correct.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Let Ri(z) and Wi(z) denote read and write operations on 
a data element z by a transaction Ti, respectively.  
Consider the schedule S with four transactions. 
 S: R4(x) R2(x) R3(x) R1(y) W1(y) W2(x) W3(y) R4(y) 
 Which one of the following serial schedules is conflict 
equivalent to S ?


- **(A)** T1→T3→T4→T2

- **(B)** T1→T4→T3→T2

- **(C)** T4→T1→T3→T2

- **(D)** T3→T1→T4→T2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- Conflict operations: 
1. Transaction Ti reading data item K, after that 
Transaction Tj writing data item K 
2. Transaction Ti writing data item K, after that 
Transaction Tj reading data item K 
3. Transaction Ti writing data item K, after that 
Transaction Tj writing data item K. 
 Note that, Transaction Ti writing data item ‘K’, after that 
Transaction Tj writing data item ‘P’ are not conflict 
operations due to those are different data items. 
 Tabular representation of given schedule is : 
 S: R4 (×) R2(×)R3(×)R1(y)W1(y)W2(x)W3(y)R4(y) 
 T1 T2 T3 T4 
   R(x) 
 R(x)   
  R(x)  
R(y)    
W(y)    
 W(x)   
  W(y)  
   R(y) 
 Conflict serializable  
 < T1 T3 T4 T2  >  
 Serializablity order 
 Alternate approach 
 S: R4 (×) R2(×)R3(×)R1(y)W1(y)W2(x)W3(y)R4(y) 
For data item x: 
R₄(x) → W₂(x) ⇒ T₄ → T₂ 
R₂(x) → W₂(x) ⇒ T₂ → T₂ (ignore self-loop) 
R₃(x) → W₂(x) ⇒ T₃ → T₂ 
For data item y: 
R₁(y) → W₃(y) ⇒ T₁ → T₃ 
W₁(y) → W₃(y) ⇒ T₁ → T₃ 
W₁(y) → R₄(y) ⇒ T₁ → T₄ 
W₃(y) → R₄(y) ⇒ T₃ → T₄ 
 < T1 T3 T4 T2 >  
 Serializablity order 
<!-- PAGE 442 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Suppose a database system crashes again while 
recovering from a previous crash. Assume 
checkpointing is not done by the database either during 
the transactions or during recovery. Which of the 
following statements is/are correct?


- **(A)** The system cannot recover any further.

- **(B)** The same undo and redo list will be used while 
recovering again.

- **(C)** The database will become inconsistent.

- **(D)** All the transactions that are already undone and 
redone will not be recovered again.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :-Assuming undo/redo list are persistent, 
the answer should be The same undo and redo list will 
be used while recovering again.. As while recovering 
from the previous crash also a database system will 
make use of the same undo and redo list to recover the 
system.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Let S be the following schedule of operations of three 
transactions T1, T2 and T3 in a relational database system: 
 R2(Y), R1(X), R3(Z), R1(Y), W1(X), R2(Z), W2(Y), 
R3(X), W3(Z)  
 Consider the statements P and Q below: 
 P: S is conflict-serializable. 
 Q: If T3 commits before T1 finishes, then S is recoverable. 
 Which one of the following choices is correct?


- **(A)** Both P and Q are true.

- **(B)** P is false and Q is true.

- **(C)** Both P and Q are false.

- **(D)** P is true and Q is false.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :-  
𝐓𝟏 T2 T3 
 R2(y)  
R1(x)   
  R3(Z) 
R1(y)   
W1(x)   
 R2(Z)  
 W2(y)  
  R3(x) 
  W3(Z) 
  commit 
 Conflict serialiable s1 : true < T1 , T2 , T3 
 Irrecoverable or non Recoverable schedule


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Let r i(z) and w i(z) denote read and write operations 
respectively on a data item z by a transaction Ti. Consider 
the following two schedules. 
 S1 : r1(x) r1(y) r2(x) r2(y) w2(y) w1(x) 
 S2 : r1(x) r2(x) r2(y) w2(y) r1(y) w1(x) 
 Which one of the following options is correct?


- **(A)** S1 is not conflict serializable, and S2 is conflict 
serializable.

- **(B)** Both S1 and S2 are conflict serializable.

- **(C)** Neither S1 nor S2 is conflict serializable.

- **(D)** S1 is conflict serializable, and S2 is not conflict 
serializable.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- A 
 S1 is not conflict serializable.  
 S2 : Cycle does not exist so it is a serializable. 
 S2 is conflict serializable.


</details>

---


### Q12. [GATE CSE-2024  SET-2 MSQ (2-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements about database 
transaction schedules: 
 I. Strict two -phase locking protocol generates conflict 
serializable schedules that are also recoverable. 
 II. Timestamp-ordering concurrency control protocol with 
Thomas write rule can generate view serializable schedules 
that are not conflict serializable. 
 Which of the above statements is/are TRUE?


- **(A)** Both I and II

- **(B)** Neither I nor II

- **(C)** II only

- **(D)** I only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- In strict 2PL, we allow only those 
schedules whose precedence graph is acyclic which 
means the Schedule is Conflict Serializable .Also here, a 
transaction T does not release any of its exclusive (write) 
locks until after it commits or aborts. 
Hence, no other transaction can read or write an item that 
is written by T unless T has committed, leading to a strict 
schedule for recoverability. 
 Time stamp ordering schedule with Thomas write rule 
generates View Serializable Schedule having Blind write. 
So, due to the presence of  Blind write, it would not be 
Conflict Serial.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a schedule of transactions 𝑇1 and 𝑇2 : 
 Here, RX stands for "Read(X)" and WX stands for 
"Write(X)". Which one of the following schedules is 
conflit equivalent to the above schedule?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B


**Step-by-Step Explanation:**

𝑇1 𝑇2 
𝑟1( A) 𝑟2( B) 
 𝑤2( B) 
𝑤1(D) 𝑟2(D) 
𝑤1( B) 𝑤2(c) 
Commit  
 Commit 
𝑇1 𝑇2 
 𝑟2( B) 
 𝑤2( B) 
 𝑟2(D) 
𝑟1( A)  
𝑟1(C)  
𝑤1(D)  
𝑤1( B)  
Commit 𝑤2(c) 
 Commit 
 Both schedules have the same order of conflicting 
operations, hence they are conflict equivalent. 
r1(C) 
<!-- PAGE 443 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


In a database system, unique timestamps are assigned to 
each transaction using Lamport ’s logical clock. Let 
TS(T1) and TS(T2) be the timestamps of transactions T1 
and T2 respectively. Besides, T1 holds a lock on the 
resource R and T2 has requested a conflicting lock on 
the same resource R. The following algorithm is used to 
prevent deadlocks in the database system assuming that 
a killed transaction is restarted with the same timestamp. 
 if TS(T2) < TS(T1) then       
 T1 is killed 
 else T2 waits. 
 Assume any transaction that is not killed termin ates 
eventually. Which of the following is TURE about the 
database system that uses the above algorithm to prevent 
deadlocks?


- **(A)** The database system is both deadlock -free and 
starvation-free.

- **(B)** The database system is deadlock -free, but not 
 starvation-free.

- **(C)** The database system is starvation -free, but not 
deadlock-free.

- **(D)** The database system is neither deadlock -free nor 
starvation-free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  According to the question, it is 
mentioned that ‘unique time stamps’ are assigned to 
each transactions. So, there won’t be  any equal 
timestamps. 
 In case of Lamport’s logical clock: 
 Here, timestamps are assigned in increasing order only. 
 According to the given algorithm, 
 TS(T2) < TS(T1) 
 then T1 is killed 
 else 
 T2 will wait 
 So, in both th e cases, the database system will   be 
deadlock free and there will be no starvation. 
 𝑇1 holds lock on resource 𝑅, 
𝑇2 requires conflict lock on same resource 𝑅 
Wait for graph 
     if 𝑇𝑆(𝑇2) < 𝑇𝑆(𝑇1) 
Then 𝑇1 killed [restart with same 𝑇𝑆 value] else 𝑇2 
waits. 
Avoids both deadlock and starvation.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Two transactions T1 and T2 are given as: 
 T1 : r1(X)w1(X)r1(Y)w1(Y) 
 T2 : r2 (Y)w2(Y)r2(Z)w2(Z) 
 where r i(V) denotes a read operation by transaction T i on 
a variable V and w i(V) denotes a write operation   by 
transaction T i on a variable V. The total number of conflict 
serializable schedules that can be formed by T1 and T2 is 
_____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -54


**Step-by-Step Explanation:**

Explanation :-  
From the given transactions between T1 and T2, total 
number of possible schedules = (4+4)!/4!4! 
 = 8!/(4×3×2×4×3×2) 
 = (8×7×6×5×4×3×2×1)/(4×3×2×4×3×2) 
 = 70 
 Following two conflict actions are possible : 
 Number of Permutations = 4 × 3 = 12 
 Number of permutations = 4 × 1 = 4 
 Total no. of conflict serial schedules that can be formed 
by T1 and T2 = 70 - 12 - 4 = 54. 
Or 
 T₁: r₁(x) w₁(x) r₁(y) w₁(y) 
T₂: r₂(y) w₂(y) r₂(z) w₂(z) 
How to find Conflict Serializable 
T₁ → T₂ OR T₂ → T₁ 
T₁ → T₂ 
r₁(y) → w₂(y) ⇒ conflict 
T₁ → T₂ : L 
Now arrange 
T₁: r₁(x) w₁(x) r₁(y) w₁(y) 
Place T₂ ops: w₂(y), r₂(z), w₂(z) 
w₂(y) after r₁(y) 
Case I 
3 × [3C₁ + 3C₂] 
= 3 × (3 + 3) 
Case I = 18 ways 
Case II 
2 × [4C₁ + 4C₂] 
= 2 × (4 + 6) 
 Case II = 20 
Case III 
1 × [5C₁ + 5C₂] 
= 5 + 10 
Case III = 15 ways 
T₁ → T₂ = 18 + 20 + 15 = 53 ways 
T₂ → T₁ 
= 1 way 
Final Answer 
T₂ → T₁ = 53 ways 
Total Conflict Serializable = 53 + 1 = 54 Ans


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Suppose a database schedule S involves transactions 
T1,…,Tn. Construct the precedence graph of S  with 
vertices representing the transactions and edges 
representing the conflicts. If S is serializable, which one 
of the following orderings of the vertices of the 
precedence graph is guaranteed to yield a serial schedule?


- **(A)** Topological order

- **(B)** Depth-first order

- **(C)** Breadth-first order

- **(D)** Ascending order of the transaction indices.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-When a precedence graph of a Schedule 
turns out to be Acyclic, then the Topological ordering of 
the precedence Graph is guaranteed to yield a serial 
Schedule.


</details>

---


### Q17. [GATE CSE-2016 SET-2  MCQ  (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT a part of the ACID 
properties of database transactions?


- **(A)** Atomicity

- **(B)** Consistency

- **(C)** Isolation

- **(D)** Deadlock-freedom



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :-ACID properties of a Database transaction 
denotes Atomicity, Consistency, Isolation and Durability. 
So, Deadlock – freedom is not there in the ACID 
properties.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two phase locking protocol. 
Suppose a transaction T accesses (for read or write 
operations), a certain set of objects {O1,…..Ok}. This is 
done in the following manner: 
 Step 1. T acquires exclusive locks to O1,….Ok in 
increasing order of their addresses.  
 Step 2. The required operations are performed. 
 Step 3. All locks are released. 
 This protocol will ?


- **(A)** guarantee serializability and deadlock-freedom

- **(B)** guarantee neither serializability nor deadlock -
freedom

- **(C)** guarantee serializability but not deadlock -
freedom

- **(D)** guarantee deadlock -freedom but not 
serializability



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :-  
 In case of Conservative 2PLP: 
 A transaction has to lock all the items before the transaction 
can begin execution. 
 So, the Advantages of conservative 2PLP are : 
 • Deadlock is not possible. 
 • Serializability is ensured. 
 The given scenario (Step1, Step2 and Step3) is following 
the approach of conservative 2PLP.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following database schedule with two 
transactions, T1 and T2. 
 S – r2(X); r1(X); r2(Y); w1(X); r1(Y); w2(X); a1; a2 
 Where r i(Z) denotes a read operation by transaction T i 
on a variable Z, wi(Z) denotes a write operation by Ti on 
a variable Z and ai denotes an abort by transaction T i. 
 Which one of the following statements about the above 
schedule is TRUE?


- **(A)** S is non-recoverable

- **(B)** S is recoverable, but has a cascading abort

- **(C)** S does not have a cascading abort

- **(D)** S is strict



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :-  
 Given schedule is, 
𝐓1 𝐓2 
𝐫1(𝐱) 
𝐫2(𝐱) 
 𝐫2(𝐲) 
𝐰1(𝐱)  
𝐫1(𝐲)  
𝐰2(𝐱) 
𝐚1  
𝐚2 
 Now let's check statements one by one, 
 A) False, as there is no dirty read. So, it is recoverable. 
 B) False, because there is no dirty read. So, it has no 
cascading aborts. 
 C) True. 
 D) False, because there is Transaction T 2 which writes the 
value of x which is written by T1 before T1 has aborted. So, 
not strict. 
<!-- PAGE 444 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following directed graph: 
 The number of different topological ordering of the 
vertices of the graph is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Explanation :-  
 Number of topological orders: 6 
a b c d e f 
a b d c e f 
a b d e c f 
a d b c e f 
a d b e c f 
a d e b c f


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the partial Schedule S involving two transactions 
T1 and T2. Only the read and the write operations have 
been shown. The read operation on data item P is denoted 
by read(P) and write operation on data item P is denoted by 
write(P). 
 Schedule S 
Time Instance Transaction ID 
 T1 T2 
1 read(𝐴)  
2 write (A)  
3  read(C) 
4  write (C) 
5  read(B) 
6  write (B) 
7  read(A) 
8  commit 
9 read(B)  
 Suppose that the transaction T1 fails immediately after 
time instance 9. Which of the following statements is 
correct?


- **(A)** T2 must be aborted and then both T1 and T2 must 
be re-started to ensure transaction atomicity

- **(B)** Schedule S is non -recoverable and cannot ensure 
transaction atomicity

- **(C)** Only T2 must be aborted and then re - started to 
ensure transaction atomicity

- **(D)** Schedule S is recoverable and can ensure atomicity 
and nothing else needs to be done.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B


**Step-by-Step Explanation:**

Explanation :-As T1 fails after instance 9, so T1 
would rollback, but as T2 has already committed, so it 
cannot rollback and also T2 has Dirty Read of A from 
T1, i.e , T2 is dependent on T1.So, to ensure 
Recoverability; T1 should commit first and then T2. 
 So, option B satisfies as S is non -  recoverable 
and  cannot ensure transaction  atomicity.


</details>

---


### Q22. [GATE CSE-2016 SET-1  MCQ (2-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following transaction involving two bank 
accounts x and y. 
 read (x) ; 
 x : =x - 50; 
 write (x) ; 
 read (y); 
 y : = y + 50;  
 write (y) 
 The constraint that the sum of the accounts x and y should 
remain constant is that of


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B


**Step-by-Step Explanation:**

Explanation :-   
  Consistency: This property ensures that a 
transaction can only bring the database from 
one valid state to another, preserving all 
predefined database invariants, integrity 
constraints, and business rules. In this 
specific scenario, the condition that the total 
money in the system must be conserved 
(Account 𝑥 + Account 𝑦 = Constant) during 
a transfer is a classic consistency constraint. 
Why other options are incorrect: 
 (a) Atomicity: Focuses on the "all-or-
nothing" execution of the transaction. It 
ensures that If the system crashes after 
debiting 𝑥 but before crediting 𝑦, the entire 
transaction is rolled back so that money isn't 
lost. 
 (c) Isolation: Ensures that concurrent 
execution of multiple transactions leaves the 
database in the same state as if they were 
executed sequentially. 
 (d) Durability: Guarantees that once the 
transaction commits, the updates to accounts 𝑥 
and 𝑦 survive any subsequent system crashes.


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a simple checkpointing protocol and the 
following set of operations in the log. 
 (Start, T4); 
 (write, T4, y, 2, 3); 
 (Start, T1); 
 (commit, T4); 
 (write, T1, z, 5, 7);  
 (check point); 
 (Start, T2); 
 (write, T2, x, 1, 9); 
 (commit, T2); 
 (start, T3); 
 (write, T3, z, 7, 2); 
 If a crash happens now and the system tries to recover 
using both undo and redo operations, what are the 
contents of the undo list and the redo list?


- **(A)** Undo T3, T1; Redo T2

- **(B)** Undo T3, T1; Redo T2, T4

- **(C)** Undo: none; redo: T2, T4, T3, T1

- **(D)** Undo T3, T1; T4; Redo: T2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- As T1& T3 are not yet committed they must 
be undone, so Undo:T 3 and T 1. We must redo those 
transactions which are after the latest checkpoint. So T 2 
must be redone. We don’t need to redo the records which 
are before the last checkpoint, so T4 need not be redone. 
 So, Redo: T2


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the transactions T1,T2,andT3 and the 
schedules S1 and S2  given below.  
      T1:r1(X);r1(Z);w1(X);w1(Z) 
 T2:r2(Y);r2(Z);w2(Z) 
 T3:r3(Y);r3(X);w3(Y) 
S1:r1(X);r3(Y);r3(X);r2(Y);r2(Z);w3(Y);w2(Z);r1(Z);
w1(X);w1(Z) 
 S2:r1(X);r3(Y);r2(Y);r3(X);r1(Z);r2(Z);w3(Y);w1(X);
w2(Z);w1(Z) 
 Which one of the following statements about the 
schedules is TRUE?


- **(A)** Only S1 is conflict-serializable.

- **(B)** Only S2 is conflict-serializable.

- **(C)** Both S1 and S2 are conflict-serializable

- **(D)** Neither S1 nor S2 is conflict-serializable.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- On drawing the Precedence Graph for the 
Schedule given, we get: 
 We observe that, S1 has no cycle and is conflict-
serializable whereas S2 has cycle and is not conflict 
serializable.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following four schedules due to three 
transactions (indicated  by the subscript) using read and 
write on a data item x, denoted by r(x) and w(x) 
respectively. Which one of them is conflict serializable?


- **(A)** r1 (x); r2 (x);w1 (x); r3 (x); w2 (x)

- **(B)** r2 (x); r1 (x);w2 (x); r3 (x); w1 (x)

- **(C)** r3 (x); r2 (x);r1 (x); w2 (x); w1 (x)

- **(D)** r2 (x); w2 (x);r3 (x); r1 (x); w1 (x)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :-  
 A. r1(x) ; r2(x); w1(x); r3(x) ; w2(x) 
T1 T2 T3 
r(x)   
 r(x)  
w(x)   
  r(x) 
 w(x)  
 Cycle, Not conflict serializable  
 B. r2(x) ; r1(x); w2(x); r3(x) ; w1(x) 
<!-- PAGE 445 -->
DATABASE MANAGEMENT  SYSTEM 
T1 T2 T3 
 r(x)  
r(x)   
 w(x)  
  r(x) 
w(x)   
 Cycle, Not conflict serializable  
 C. r3(x) ; r2(x); r1(x); w2(x) ; w1(x) 
T1 T2 T3 
  r(x) 
 r(x)  
r(x)   
 w(x)  
w(x)   
 Cycle, Not conflict serializable 
 D. r2(x) ; w2(x); r3(x); r1(x) ; w1(x) 
T1 T2 T3 
 r(x)  
 w(x)  
  r(x) 
r(x)   
w(x)   
 Not Cycle, conflict serializable equivalent serial schedule  
 < T2 T3 T1 >


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following schedule S of transactions T1, T2, 
T3, T4: 
T1 T3 T3 T. 
Writes 
(X) 
Commit 
Writes 
(Y) 
Reads (Z) 
Commit 
Reads 
(X) 
Reads 
(Y) 
Commit 
 Which one of the following statements is CORRECT?


- **(A)** S is conflict-serializable but not recoverable

- **(B)** S is not conflict-serializable but is recoverable

- **(C)** S is both conflict-serializable and recoverable

- **(D)** S is neither conflict-serializable nor is it recoverable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
We draw the Precedence Graph for the Schedule of 
transactions. 
 As on observing the precedence graph, we have no cycles, 
so, it is conflict serializable. 
 Also , the Read(X) in T 4 is of Database and not written by 
any other transaction, so the schedule has no dirty read


</details>

---


### Q27. [GATE CSE-2015 SET-2  MCQ  (2-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following transactions with data items P and 
Q initialized to zero: 
T1 : read (P); 
      read (Q) ; 
       if P = 0 then 
Q : = Q + 1 ; 
   write (Q) ; 
T2 : read (Q); 
       read (P) ; 
       if Q = 0 then 
P : = P + 1 ; 
   write (P) ; 
Any Non-serial interleaving of T1 and T2 for concurrent 
execution leads to


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- 
𝐓1 𝐓2 
 read (Q) 
read (P) read (P) 
read (Q)  
write (Q) write (P) 
 The above schedule is not conflict serializable due to the 
presence of cycle in Precedence cycle, i.e  
𝑇1 → 𝑇2 and 𝑇2 →→ 𝑇1.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which of the following concurrency control protocols 
ensure both conflict serializability and freedom from 
deadlock? 
       I. 2-phase locking  
     II. Time-stamp ordering


- **(A)** I only

- **(B)** II only

- **(C)** Both I and II

- **(D)** Neither I nor II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation  
 ― Two -phase locking protocol (2PLP) ensures the 
schedule to be conflict serializable but it may not be free 
from deadlock. 
 ― Timestamp ordering protocol ensures both conflict 
serializability and free from deadlock.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following schedule for transactions T1, T2 
and T3:  
 Which one of the schedules below is the correct 
serialization of the above? 
T1 T2 T3 
Read(X)   
 Read (Y)  
  Read (Y) 
 Write (Y)  
Write (X)   
  Write (X) 
 Read (X)  
 Write (X)


- **(A)** T1 → T3 → T2

- **(B)** T2 → T1 → T3

- **(C)** T2 → T3 → T1

- **(D)** T3 → T1 → T2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation  
 Identify conflicting operations: 
<!-- PAGE 446 -->
DATABASE MANAGEMENT  SYSTEM 
 On Y: 
 T2 writes Y after T3 reads Y 
 ⇒ T3 → T2 
 On X: 
 T1 writes X before T3 writes X 
 ⇒ T1 → T3 
 T3 writes X before T2 reads/writes X 
 ⇒ T3 → T2 
Combine all orders: 
 T1 → T3 → T2 
 Graph is acyclic, so schedule is conflict serializable 
with order: 
 T1 → T3 → T2


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider two transactions T₁ and T₂, and four schedules S₁, 
S₂, S₃, S₄ of T₁ and T₂ as given below: 
 T₁ : R₁[x] W₁[x] W₁[y] 
 T₂ : R₂[x] R₂[y] W₂[y] 
 S₁ : R₁[x] R₂[x] R₂[y] W₁[x] W₁[y] W₂[y] 
S₂ : R₁[x] R₂[x] R₂[y] W₁[x] W₂[y] W₁[y] 
 S₃ : R₁[x] W₁[x] R₂[x] W₁[y] R₂[y] W₂[y] 
 S₄ : R₂[x] R₂[y] R₁[x] W₁[x] W₁[y] W₂[y] 
 Which of the above schedules are conflict-serializable?


- **(A)** S₁ and S₂

- **(B)** S₂ and S₃

- **(C)** S₃ only

- **(D)** S₄ only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation:- 
• S1 has a cycle from T1 → T2 and T2 → T1. 
• S2 – It is uni-directional and has only T2 → T1. 
• S3 – It is uni-directional and has only T1 → T2. 
• S4 – same as S1. 
 A schedule is conflict serializable if there is no cycle in 
the directed graph made by the schedules. 
 In the schedules we check for RW, WR, WW conflicts 
between the schedules and only these conflicts 
contribute in the edges of the graph.


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following three schedules of transactions T₁, 
T₂ and T₃. 
(Notations: In the following, NYO represents the action Y 
(R for read, W for write) performed by transaction N on 
object O.)     
 S1: 
2RA 2WA 3RC 2WB 3WA 3WC 
1RA 1RB 1WA 1WB 
 S2: 
3RC 2RA 2WA 2WB 3WA 1RA 
1RB 1WA 1WB 3WC 
 S3: 
2RA 3RC 3WA 2WA 2WB 3WC 
1RA 1RB 1WA 1WB 
 Which of the following statements is TRUE?


- **(A)** S1, S2 and S3 are all conflict equivalent to each 
other

- **(B)** No two of S1, S2 and S3 are conflict equivalent to 
each other

- **(C)** S2 is conflict equivalent to S3, but not to S1

- **(D)** S1 is conflict equivalent to S2, but not to S3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:- 
 S1: 2RA 2WA 3RC 2WB 3WA 3WC 1RA 1RB 
1WA 1WB 
T1 T2 T3 
 R(A)  
 W(A)  
  R(C) 
 W(R)  
  W(A) 
  W(C) 
R(A)   
R(B)   
W(A)   
W(B) 
  Precedence graph  
 No cycle conflict serializable  
 < T2 T3 T1 >  
Conflict operations pair 
 R₂(A) – W₃(A) 
 R₂(A) – W₁(A) 
 W₂(A) – W₃(A) 
 W₂(A) – R₁(A) 
 W₂(A) – W₁(A) 
 W₂(B) – R₁(B) 
 W₂(B) – W₁(B) 
 W₃(A) – R₁(A) 
 W₃(A) – W₁(A) 
 S2: 3RC 2RA 2WA 2WB 3WA 1RA 1RB 1WA 
1WB 3WC 
T1 T2 T3 
  R(C) 
 R(A)  
  R(C) 
 W(A)  
 W(B)  
  W(A) 
R(A)   
R(B)   
W(A)   
W(B)   
  W(C) 
 No cycle conflict serializable  
 < T2 T3 T1 >  
Conflict operation pairs 
 R₂(A) – W₃(A) 
 R₂(A) – W₁(A) 
 W₂(A) – W₃(A) 
 W₂(A) – R₁(A) 
 W₂(A) – W₁(A) 
 W₂(B) – R₁(B) 
 W₂(B) – W₁(B) 
 W₃(A) – R₁(A) 
 W₃(A) – W₁(A) 
 S3: 2RA 3RC 3WA 2WA 2WB 3WC 1RA 1RB 
1WA  1WB  
T1 T2 T3 
<!-- PAGE 447 -->
DATABASE MANAGEMENT  SYSTEM 
 R(A)  
  R(C) 
  W(A) 
 W(A)  
 W(B)  
  W(C) 
R(A)   
R(B)   
W(A)   
W(B)   
 S3 : cycle; so not conflict serializable  
 R3(A) – W3(A) 
 R3(A) – W1(A)


</details>

---


### Q32. [GATE CSE-2010  MCQ (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following schedules involving two 
transactions. Which one of the following statements is 
TRUE? 
 S₁ : r₁(X); r₁(Y); r₂(X); r₂(Y); w₂(Y); w₁(X) 
 S₂ : r₁(X); r₂(X); r₂(Y); w₂(Y); r₁(Y); w₁(X)


- **(A)** Both S₁ and S₂ are conflict serializable.

- **(B)** S₁ is conflict serializable and S₂ is not conflict  
 serializable.

- **(C)** S₁ is not conflict serializable and S₂ is conflict  
  serializable.

- **(D)** Both S₁ and S₂ are not conflict serializable.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :-  
Conflicts: 
 r₂(X) before w₁(X) ⇒ T2 → T1 
 r₁(Y) before w₂(Y) ⇒ T1 → T2 
 Cycle exists (T1 ↔ T2). 
 So S₁ is not conflict serializable. 
 For S₂ 
 Conflicts: 
 r₁(Y) after w₂(Y) ⇒ T2 → T1 
 r₂(X) before w₁(X) ⇒ T2 → T1 
 Only T2 → T1 edges, no cycle. 
 So S₂ is conflict serializable (equivalent to T2 → T1). 
 Final Answer: C. S₁ is not conflict serializable and S₂ is 
conflict serializable.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two transactions: T₁ and T₂. 
T₁: 
read(A); 
read(B); 
if A = 0 then B ← B + 1; 
 write(B); 
T₂: 
 read(B); 
 read(A); 
 if B ≠ 0 then A ← A − 
1; 
 write(A); 
 Which of the following schedules, using shared and 
exclusive locks, satisfy the requirements for strict two-
phase locking (Strict 2PL)  for the above 
transactions?


- **(A)** S1 : 
lock S(A); 
read (A); 
lock S(B); 
read(B); 
ifA = 0 
then B ← B + 1; 
write(B); 
commit; 
unlock(A); 
unlock (B); 
 S2 : 
lock S(B);  
read (B);  
lock S(A);  
read(A); 
if𝐵 ≠ 0 
then A ← A − 1; 
write(A); 
commit; 
unlock(B); 
unlock (A);

- **(B)** S1: 
 lock X(A);  
 read(A); 
 lock X(B);  
 read(B); 
 if A = 0 then  
 B ← B + 1;  
 write(B); 
 unlock(A); 
 commit; 
 unlock(B); 
 S2: 
 lock X(B);  
 read(B); 
 lock X(A);  
 read(A); 
 if B ≠ 0 then  
 A ← A − 1;  
 write(A); 
 unlock(A); 
 commit; 
 unlock(A);

- **(C)** S1: 
 lock S(A); 
 read(A); 
 lock X(B); 
 read(B); 
 if A = 0 then  
 B ← B + 1;  
 write(B); 
 unlock(A); 
 commit; 
 unlock (B); 
 S2: 
 lock S(B); 
 read(B); 
 lock X(A);  
 read(A); 
 if B ≠ 0 then  
 A ← A − 1;  
 write(A); 
 unlock(A); 
 commit; 
 unlock (A);

- **(D)** S1: 
 lock S(A);  
 read(A); 
 lock X(B);  
 read(B); 
 if A = 0 then  
 B ← B + 1;  
 write(B); 
 unlock(A); 
 unlock(B); 
 commit; 
 S2: 
 lock S(B);  
 read(B); 
 lock X(A);  
 read(A); 
 if B ≠ 0 then  
 A ← A − 1;  
 write(A); 
 unlock(A); 
 unlock(B); 
 commit;



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -C


**Step-by-Step Explanation:**

Explanation :-  
According to the 2-phase locking protocol, no new lock 
can be acquired after the first unlock operation. 
 According to strict 2PL, all exclusive locks must be 
held until the commit operation. 
 In option (c), no exclusive lock is released before 
commit, and no new lock is acquired after any unlock. 
 Hence, it satisfies the strict 2PL protocol.


</details>

---


### Q34. [GATE  CSE-2007 MCQ (2-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following log sequence of two transactions on 
a bank account, with initial balance 12000, that transfer 
2000 to a mortgage payment and then apply a 5% interest. 
  1. T1 start 
 2. T1 B old=12000 new=10000 
 3. T1 M old=0 new=2000 
  4. T1 commit 
 5. T2 start 
 6. T2 B old=10000 new=10500 
 7. T2 commit 
 Suppose the database system crashes just before log record 
7 is written. When the system is restarted, which one 
statement is true of the recovery procedure?


- **(A)** We must redo log record 6 to set B to 10500

- **(B)** We must undo log record 6 to set B to 10000 and 
then redo log records 2 and 3.

- **(C)** We need not redo log records 2 and 3 because 
transaction T1 has committed.

- **(D)** We can apply redo and undo operations in arbitrary 
order because they are idempotent



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation :- 
When a database system recovers from a crash 
using a log file, it classifies transactions into 
two categories based on their status at the time 
of the crash: 
1. Committed Transactions (REDO): If a 
transaction has both a <start> and a <commit> 
record in the log, its changes must be 
preserved. 
 Transaction T1 has a T1 commit (record 4) 
before the crash. Thus, T1 must be redone (log 
records 2 and 3) to ensure durability. 
2. Uncommitted Transactions (UNDO): If a 
transaction has a <start> record but lacks a 
<commit> record in the log, its changes must 
be rolled back to maintain atomicity and 
consistency. 
 Transaction T2 crashes before writing its 
commit record (record 7). Thus, T2 must be 
undone (log record 6) to revert any partial 
modifications. 
(a) Incorrect: Log record 6 belongs to T2. 
Since T2 did not commit, its changes cannot 
be redone. 
(b) Correct: To restore consistency, we roll 
back the uncommitted change from T2 
(undoing log record 6 to reset B to 10000) and 
re-apply the committed changes from T1 
(redoing log records 2 and 3). 
(c) Incorrect: Even though T1 committed, 
standard recovery requires redoing its log 
records to ensure those changes are safely 
written to the physical disk (durability). 
(d) Incorrect: Redo and undo operations 
cannot be applied in an arbitrary order; they 
must follow strict ordering (typically, undoing 
active transactions backward and redoing 
committed transactions forward) to avoid 
corrupting data states. 
<!-- PAGE 448 -->
DATABASE MANAGEMENT  SYSTEM


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Amongst the ACID properties of a transaction, the 
'Durability' property requires that the changes made to 
the database by a successful transaction persist


- **(A)** Except in case of an Operating System crash

- **(B)** Except in case of a Disk crash

- **(C)** Except in case of a power failure

- **(D)** Always, even if there is a failure of any kind of 
failure



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation :- 
ACID properties: 
 Atomicity: 
By this, we mean that either the entire transaction takes 
place at once or doesn’t happen at all. 
 Consistency: 
 This means that integrity constraints must be 
maintained so that the database is consistent before and 
after the transaction. 
 Isolation: 
 This property ensures that multiple transactions can 
occur concurrently without leading to inconsistency of 
database state. 
 Durability: 
 This property ensures that once the transaction has 
completed execution, the updates and modifications to 
the database are stored in and written to disk and they 
persist even if system failure occurs no matter which 
type of failure. 
<!-- PAGE 449 -->
COMPUTER 
ORGANIZATION AND 
ARCHITECTURE


</details>

---

