# Digital Logic


> **Subject:** Digital Logic  

> **Pages in Book:** 151–194  

> **Total Modules:** 4


## Topics in this Subject


## Topic 1: FARRAY


### Q1. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the real valued variables X, Y and Z 
represented using the IEEE -754 single precision 
floating-point format. The binary representations 
of X and Y in hexadecimal notation are as 
follows: 
 X: 35C00000 
Y: 34A00000 
 Let Z = X + Y. 
 Which one of the following is the binary 
representation of Z, in hexadecimal notation?


- **(A)** 35C80000

- **(B)** 35CD0000

- **(C)** 35E80000

- **(D)** 35EC0000



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
X = 35C00000 
 Binary: 0 01101011 10000000000000000000000 
Exponent = 107 - 127 = -20 
 X = 1.100000... × 2(-20) 
Y = 34A00000 
 Binary: 0 01101001 01000000000000000000000 
Exponent = 105 - 127 = -22 
 Y = 1.010000... × 2(-22) 
Align Y to exponent -20: 
 Y = 0.010100... × 2(-20) 
Add mantissas: 
 1.100000 
 +0.010100 
 =1.110100 
Z = 1.110100 × 2(-20) 
New exponent = -20 + 127 = 107 
 Binary exponent = 01101011 
Final binary: 
 0 01101011 11010000000000000000000 
Hex = 35E80000 
Answer: (c) 35E80000 
   GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 158 -->
DIGITAL LOGIC


</details>

---


### Q2. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the 8-bit signed integers X, Y and Z 
represented using the sign-magnitude form. The 
binary representations of X and Y are as follows:  
 X: 10110100 
Y: 01001100 
 Which of the following operations to compute Z 
result(s) in an arithmetic overflow?


- **(A)** Z = X + Y

- **(B)** Z = X - Y

- **(C)** Z = -X + Y

- **(D)** Z = -X - Y



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B , C)


**Step-by-Step Explanation:**

Solution: 
8-bit sign-magnitude range is: 
 -(27 - 1) to +(27 - 1) 
 -127 to +127 
X : 10110100 = -52 
 Y : 01001100 = +76 
Z = X + Y = -52 + 76 = +24 → No overflow 
Z = X - Y = -52 - 76 = -128 → Overflow 
Z = -X + Y = 52 + 76 = +128 → Overflow 
Z = -X - Y = 52 - 76 = -24 → No overflow


</details>

---


### Q3. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In a system, numbers are represented using 4-
bit two's complement form. Consider four 
numbers  
N1 = 1011, N2 = 1101, N3 = 1010 and N4 = 
1001 in the system. 
Which of the following operations will result in 
arithmetic overflow?


- **(A)** N1 + N2

- **(B)** N2 + N3

- **(C)** N3 - N4

- **(D)** N1 + N4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B), (D)


**Step-by-Step Explanation:**

Solution: 
2's complement data given: 
N1 : 1011 → (-5)₁₀   
N2 : 1101 → (-3)₁₀   
N3 : 1010 → (-6)₁₀   
N4 : 1001 → (-7)₁₀   
4-bit 2's complement range: {-8 to +7} 
N1 + N2 → (-5) + (-3) = -8   
N2 + N3 → (-3) + (-6) = -9 (overflow)   
N3 - N4 → (-6) - (-7) = +1   
N1 + N4 → (-5) + (-7) = -12 (overflow)


</details>

---


### Q4. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The 32-bit IEEE 754 single precision 
representation of a number is 0XC2710000.   
The number in decimal representation is 
________ (rounded off to two decimal places).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (-60.25)


**Step-by-Step Explanation:**

Solution: 
 (C2710000)H 
Binary representation: 
1 | 10000100 | 1110001000...... 
 S         BE             M 
Value: 
(-1)1 (1.1110001000....) × 2(132 − 127) 
= -(1.1110001000....) × 25   
= -111100.01000....   
= -60.25


</details>

---


### Q5. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The number  6 can be represented as 1010 in 4-
bit 2's complement representation.  
Which of the following is/are CORRECT 2's 
complement representation(s) of −6?


- **(A)** 1000 1010 in 8-bits

- **(B)** 1111 1010 in 8-bits

- **(C)** 1000 0000 0000 1010 in 16-bits

- **(D)** 1111 1111 1111 1010 in 16-bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B), (D)


**Step-by-Step Explanation:**

Solution: 
(a) 1000 1010 in 8-bits: Incorrect. This is sign-
magnitude representation, not 2's complement. 
(b) 1111 1010 in 8-bits: Correct. (Result of sign 
extension). 
(c) 1000 0000 0000 1010 in 16-bits: Incorrect. 
This is also sign-magnitude. 
(d) 1111 1111 1111 1010 in 16-bits: Correct. (Result 
of sign extension).


</details>

---


### Q6. [GATE CSE – 2025 SET-2 NAT (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The following two signed 2's complement numbers 
(multiplicand M and multiplier Q) are being 
multiplied using Booth's algorithm:  
 M: 1100110111101101   
 Q: 1010010010101010 
 The total number of addition and subtraction 
operations to be performed is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 13


**Step-by-Step Explanation:**

Solution: 
In Booth’s algorithm, addition/subtraction is 
performed whenever the pair (Q₀, Q₋₁) changes: 
01 → Add M   
10 → Subtract M   
00 or 11 → No operation 
Initialize Q₋₁ = 0. 
Write Q with Q₋₁: 
Q = 1 0 1 0 0 1 0 0 1 0 1 0 1 0 1 0   
Q₋₁ = 0 
Now count transitions by checking adjacent pairs 
(Q₀, Q₋₁) during shifts. 
Number of 01 and 10 transitions equals number of 
arithmetic operations. 
Counting transitions in Q: 
1→0   
0→1   
1→0   
0→0   
0→1   
1→0   
0→0   
0→1   
1→0   
0→1   
1→0   
0→1   
1→0   
0→1   
1→0 
0→0   
Total transitions (01 or 10) = 13


</details>

---


### Q7. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are EQUAL to 224 in 
radix-5 (i.e., base-5) notation?


- **(A)** 64 in radix-10

- **(B)** 100 in radix-8

- **(C)** 50 in radix-16

- **(D)** 121 in radix-7



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B,D)


**Step-by-Step Explanation:**

Solution:  
To check the equivalent between numbers simply 
convert it into decimal format. 
(224)₅ = 4 * 5⁰ + 2 * 5¹ + 2 * 5² = (64)₁₀   
(100)₈ = 0 * 8⁰ + 0 * 8¹ + 1 * 8² = (64)₁₀   
(50)₁₆ = 0 * 16⁰ + 5 * 16¹ = (80)₁₀   
(121)₇ = 1 * 7⁰ + 2 * 7¹ + 1 * 7² = (64)₁₀   
Option A, B, D is correct. 
<!-- PAGE 159 -->
DIGITAL LOGIC


</details>

---


### Q8. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a system that uses 5 bits for representing 
signed integers in 2's complement format. In this 
system, two integers A and B are represented as A 
= 01010 and B = 11010. Which one of the 
following operations will result in either an 
arithmetic overflow or an arithmetic underflow?


- **(A)** A + B

- **(B)** A − B

- **(C)** B − A

- **(D)** 2 * B



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
It is asked for 5 bits signed value   
A is having 01010 = 10 in decimal   
B is having 11010 = −6 in decimal   
Now A + B is 4 which is 00100, hence no 
overflow   
Now A − B is 16 which is 010000, see that we 
used 6 bits hence it is overflow   
Now B − A is −16 which is 10000, hence no 
overflow   
Now 2 * B is −12 which is 10100, hence no 
overflow   
hence our correct option will be option B


</details>

---


### Q9. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A particular number is written as 132 in radix -4 
representation. The same  number in radix -5 
representation is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (110)


**Step-by-Step Explanation:**

Solution: 
(132)₄ 
= (1 * 4² + 3 * 4¹ + 2 * 4⁰)₁₀ 
= (30)₁₀ 
= (25 + 5 + 0)₁₀ [powers of 5] 
= (1 * 5² + 1 * 5¹ + 0 * 5⁰)₁₀ 
= (110)₅


</details>

---


### Q10. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider three floating point numbers A, B and C 
stored in registers RA, RB and RC, respectively as 
per IEEE-754 single precision floating point 
format. The 32-bit content stored in these registers 
(in hexadecimal form) are as follows. 
RA = 0xC1400000     RB = 0x42100000      
 RC = 0x41400000 
Which one of the following is FALSE?


- **(A)** A + C = 0

- **(B)** C = A + B

- **(C)** B = 3C

- **(D)** (B − C) > 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution:  
A = −12, B = 36, C = 12 
(a) A + C = −12 + 12 = 0 → True 
(b) C = A + B ⇒ 12 ≠ 24 → False 
(c) B = 3C ⇒ 36 = 36 → True 
(d) B − C = 24 > 0 → True


</details>

---


### Q11. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let R1 and R2 be two 4-bit registers that store 
numbers in 2’s complement form. For the operation 
R1 + R2, which one of the  
 following values of R1 and R2 gives an arithmetic 
overflow?


- **(A)** R1 = 1011 and R2 = 1110

- **(B)** R1 = 1100 and R2 = 1010

- **(C)** R1 = 0011 and R2 = 0100

- **(D)** R1 = 1001 and R2 = 1111



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
4-bit 2’s complement range = −8 to +7 
A) 1011 = −5, 1110 = −2   
   Sum = −5 + (−2) = −7 → within range → NO 
overflow 
B) 1100 = −4, 1010 = −6   
   Sum = −4 + (−6) = −10 → out of range (< −8) 
→ OVERFLOW 
C) 0011 = +3, 0100 = +4   
   Sum = 3 + 4 = 7 → within range → NO 
overflow 
D) 1001 = −7, 1111 = −1   
   Sum = −7 + (−1) = −8 → within range → NO 
overflow 
Overflow occurs when: 
Same sign numbers → result sign changes or goes 
out of range


</details>

---


### Q12. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If the numerical value of a 2-byte unsigned integer on 
a little-endian computer is 255 more than that on a 
big-endian computer, which of the following choices 
represent(s) the unsigned integer on a little -endian 
computer?


- **(A)** 0x6665

- **(B)** 0x0001

- **(C)** 0x4243

- **(D)** 0x0100



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,D)


**Step-by-Step Explanation:**

Solution: 
It is saying that 0x6665 is the representation of an 
integer on a little -endian computer, so, it means that 
the original number must have been 0x6566. 
So, for the original number 0x6566: 
• On little endian (LE): 0x6665   
• On Big endian (BE): 0x6566   
Clearly, LE = 255 + BE   
Similarly, for 0x0100. 
Take 0x0100: 
It is saying that 0x0100 is the representation of an 
integer on a little -endian computer, so, it mean s that 
the original number must have been 0x0001. 
So, for the number 0x0001: 
• On little endian (LE): 0x0100   
• On Big endian (BE): 0x0001   
Clearly, LE = 255 + BE   
Similarly for 0x4243 and 0x0001, they do not satisfy 
"LE = 255 + BE". So, answer is option A, D.


</details>

---


### Q13. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


If x and y are two decimal digits and  
 (0.1101)2=(0.8xy5)10, the decimal value of x+y is?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 3


**Step-by-Step Explanation:**

Solution: (0.1101)₂ = 1/2 + 1/4 + 0 + 1/16 = 0.8125 
(0.8xy5)₁₀ = 0.8 + x/100 + y/1000 + 5/10000 
= 0.8 + x/100 + y/1000 + 0.0005 
0.8125 = 0.8 + x/100 + y/1000 + 0.0005 
0.8125 − 0.8005 = x/100 + y/1000 
0.012 = x/100 + y/1000 
Multiplying by 1000: 
12 = 10x + y 
Possible digits: 
x = 1, y = 2 
x + y = 3


</details>

---


### Q14. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let the representation of a number in base 3 be 210. 
What is the hexadecimal representation of the 
number?


- **(A)** 15

- **(B)** 21

- **(C)** 528

- **(D)** D2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
Firstly convert base 3 into a decimal number system 
(Base 10): 
(210)₃ = (x)₁₀ ⇒ 0 * 3⁰ + 1 * 3¹ + 2 * 3² = (21)₁₀ 
Now convert (21)₁₀ into a hexadecimal system 
dividing by 16 that is: 
(21)₁₀ = (15)₁₆


</details>

---


### Q15. [GATE CSE – 2024 SET-2 MSQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium




```c
Consider Z = X − Y where X, Y and Z are all in sign-
magnitude form. X and Y are each represented in n 
bits. To avoid overflow, the representation of Z would 
require a minimum of:
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Let X and Y represents 31 and −31 respectively in 
binary sign magnitude form. X and Y will take 6 bits 
as range of sign magnitude form is −(2ⁿ⁻¹ − 1) to 2ⁿ⁻¹ 
− 1, where n is the number of bits. 
Now in question Z = X − Y, 
Z = 31 − (−31) = 62 
To represent 62 in sign magnitude form we need 7 
(6 + 1) bits. 
<!-- PAGE 160 -->
DIGITAL LOGIC 
Hence, n + 1 bits needed.


</details>

---


### Q16. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In 16-bit 2’s complement representation, the 
decimal number  28 is:


- **(A)** 1111 1111 0001 1100

- **(B)** 0000 0000 1110 0100

- **(C)** 1111 1111 1110 0100

- **(D)** 1000 0000 1110 0100



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
(+28)₁₀ = (0000 0000 0001 1100)₂ 
−28 is nothing but 2's complement of +28. 
So, 2's complement of (0000 0000 0001 1100)₂ is 
(1111 1111 1110 0100)₂ 
(−28)₁₀ = (1111 1111 1110 0100)₂.


</details>

---


### Q17. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Two numbers are chosen independently and 
uniformly at random from the set {1, 2, ..., 13}. The 
probability (rounded off to 3 decimal places) that 
their 4 -bit (unsigned) binary representations have 
the same most significant bit is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (0.503 )


**Step-by-Step Explanation:**

Solution: 
Numbers are from 1 to 13 → total = 13 numbers 
4-bit representation: 
MSB = 0 → numbers 1 to 7 → count = 7   
MSB = 1 → numbers 8 to 13 → count = 6   
Total possible pairs = 13 × 13 = 169 
Favorable cases: 
Both have MSB = 0 → 7 × 7 = 49   
Both have MSB = 1 → 6 × 6 = 36   
Total favorable = 49 + 36 = 85   
Probability = 85 / 169 ≈ 0.503 
Final Answer = 0.503


</details>

---


### Q18. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the unsigned 8-bit fixed point binary 
Number System below: 
 b7b6b5b4b3b2b1b0  
 where the position of the binary point is between 
b3 and b2. Assume b7 is the most significant bit 
(MSB). Some of the decimal numbers listed below 
cannot be represented exactly in the above 
representation: 
 (i) 31.500 (ii) 0.875 (iii) 12.100 (iv) 3.001 
Which one of the following statements is true?


- **(A)** None of (i), (ii), (iii), (iv) can be exactly  
  represented.

- **(B)** Only (ii) cannot be exactly represented.

- **(C)** Only (iii) and (iv) cannot be exactly  
  represented.

- **(D)** Only (i) and (ii) cannot be exactly  
  represented.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Format: b7b6b5b4b3b2b1b0 
  4 bits integer, 4 bits fractional   
 Fraction resolution = 1/16 = 0.0625 
Check each number: 
(i) 31.500   
31 + 0.5 → 0.5 = 8/16 → exact → Representable   
(ii) 0.875   
0.875 = 14/16 → exact → Representable   
(iii) 12.100   
0.1 not multiple of 1/16 → Not exact   
(iv) 3.001   
0.001 not multiple of 1/16 → Not exact   
Therefore: only (iii) and (iv) cannot be exactly 
represented


</details>

---


### Q19. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The representation of the value of a 16 -bit unsigned 
integer X in the hexadecimal number system is 
BCA9. The representation of the value of X in octal 
number system is


- **(A)** 571244

- **(B)** 736251

- **(C)** 571247

- **(D)** 136251



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
Given: (BCA9)₁₆ = 1011 1100 1010 1001 
For octal number system: grouping of three bits 
from right to left


</details>

---


### Q20. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let X be the number of distinct 16-bit integers in 2’s 
complement representation. Let Y be the number of 
distinct 16 -bit integers in sign magnitude 
representation. Then X − Y is _____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (1)


**Step-by-Step Explanation:**

Solution: 
2's Complement Representation 
The range of n-bit 2's Complement Numbers is −(2ⁿ⁻¹) 
to +(2ⁿ⁻¹ − 1) 
For example, if n = 2, then −2, −1, 0, 1 belong to the 
range (which are distinct) 
In general 2ⁿ distinct integers are possible with n -bit 
2's Complement Number → X 
Sign Magnitude Representation 
The range of n-bit Sign Magnitude numbers is −(2ⁿ⁻¹ 
− 1) to +(2ⁿ⁻¹ − 1) 
For example, if n = 2, then −1, −0, +0, +1 belong to 
the range in which −0 = +0 and both represent zero. 
In general 2ⁿ − 1 distinct integers are possible with n-
bit Sign magnitude representation → Y 
X − Y = 2ⁿ − (2ⁿ − 1) = 1.


</details>

---


### Q21. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The 16 -bit 2’s complement representation of an 
integer is 1111 1111 1111 0101; its decimal 
representation is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (-11)


**Step-by-Step Explanation:**

Solution: 
1111 1111 1111 0101 
2's complement of 1111 1111 1111 0101 = 0000 
0000 0000 1011 = +11 
2's complement of −11 = +11, in 2's complement 
representation 
2's complement of +11 = −11, in 2's complement 
representation 
So −11 it should be.


</details>

---


### Q22. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the equation (43)x = (y3)8 
where 𝑥 and 𝑦 are unknown. The number of possible 
solutions is ________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (5)


**Step-by-Step Explanation:**

Solution: 4x + 3 = 8y + 3   
⇒ 4x = 8y   
⇒ x = 2y   
Constraints: 
Base x > 4  (since digit 4 is present)   
Digit y ∈ {0,1,2,3,4,5,6,7}   
Check valid y: 
y = 0 → x = 0 (invalid base)   
y = 1 → x = 2 (invalid, digit 4 not allowed)   
y = 2 → x = 4 (invalid, base must be > 4)   
y = 3 → x = 6 (valid)   
y = 4 → x = 8 (valid)   
y = 5 → x = 10 (valid)   
y = 6 → x = 12 (valid)   
y = 7 → x = 14 (valid)   
Total valid solutions = 5


</details>

---


### Q23. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the equation (123)5  =  (𝑥8)𝑦 with x and y 
as unknown. The number of possible solutions is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ( 3 )


**Step-by-Step Explanation:**

Solution:(123)₅ = 1·5² + 2·5 + 3 = 25 + 10 + 3 = 38 
(x8)ᵧ = x·y + 8 
x·y + 8 = 38 
⇒ x·y = 30 
Possible factor pairs of 30: 
(1,30), (2,15), (3,10), (5,6), (6,5) 
<!-- PAGE 161 -->
DIGITAL LOGIC 
Valid conditions: x < y and y > 8 
Valid pairs: 
(1,30), (2,15), (3,10) 
Total number of solutions = 3


</details>

---


### Q24. [GATE CSE – 2019 MCQ (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The base (or radix) of the number system such that 
the following equation holds  
20 = 13.1 is ____________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (5 )


**Step-by-Step Explanation:**

Solution: 
(312 / 20) = 13.1 
=> 312 = 13.1 * 20 
=> 3r² + r + 2 = (r + 3 + 1/r) * (2r + 0) 
So, r = 5


</details>

---


### Q25. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The smallest integer that can be represented by an 
8-bit number in 2’s complement form is


- **(A)** −256

- **(B)** −128

- **(C)** −127

- **(D)** 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
Range of 2's complement no ⇒ (−2ⁿ⁻¹) to + (2ⁿ⁻¹ − 1) 
Here n = No of bits = 8. 
So minimum no = −2⁷ = −128


</details>

---


### Q26. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


P is a 16 -bit signed integer. The 2’s complement 
representation of P is (F87B)₁₆. The 2’s 
complement representation of 8 × P is


- **(A)** (C3D8)₁₆

- **(B)** (187B)₁₆

- **(C)** (F878)₁₆

- **(D)** (987B)₁₆



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: Multiplication can be directly carried in 
2’s complement form. 
F87B = 1111100001111011 can be left shifted 3 
times to give 8P = 1100001111011000 = C3D8. 
Alternate Method: 
As MSB in (F87B) is 1, P is a negative number. 
So, P = −1 × 2's complement of (F87B) 
P = −1 × (0785) = −1 × (0000 0111 1000 0101) 
8 * P = −1 × (0011 1100 0010 1000)   (P in binary 
left shifted 3 times) 
In 2's complement representation, this equals, 
1100001111011000 = C3D8


</details>

---


### Q27. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


(1217)₈ is equivalent to


- **(A)** (1217)₁₆

- **(B)** (028F)₁₆

- **(C)** (2297)₁₀

- **(D)** (0B17)₁₆



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: Given number is in base 8 thus each digit 
can be represented in three binary bits to get overall 
binary equivalent. 
(1217)₈ = (001 010 001 111)₂ 
I have written the equivalent in group of three bits 
for easy understanding of the conversion. We can 
rearrange them in group of four to get equivalent 
hexadecimal number (in similar manner). 
(001010001111)2 = (0010 1000 1111)2 
= (28𝐹)₁₆ 
Long Method 
In a nutshell the long method follows the following 
conversion 
OCT → DEC → HEX 
This procedure is good in a sense that the given 
option also have a decimal equivalent and thereby 
might save some time (no in this case, 
unfortunately). 
Here is the the decimal equivalent 
(1217)₈ = (1 * 8³ + 2 * 8² + 1 * 8¹ + 7 * 8⁰)₁₀  
= (655)₁₀ 
And we see that decimal equivalent is not in option 
therefore we proceed for hexadecimal conversion 
using division method. 
(655)₁₀ = (28F)₁₆


</details>

---


### Q28. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The two numbers given below are multiplied 
using the Booth's algorithm. 
 Multiplicand: 0101 1010 1110 1110 
 Multiplier: 0111 0111 1011 1101 
 How many additions/Subtractions are required for 
the multiplication of the above two numbers?


- **(A)** 6

- **(B)** 8

- **(C)** 10

- **(D)** 12



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
Append 0 at the end of multiplier : 0111 0111 1011 
1101 0 
Now, paired bits from right end as 
00 → (0) 
01 → (+1) 
10 → (-1) 
11 → (0) 
Note: pairs are overlapped. 
Count +1 = 4 (additions required) 
Count -1 = 4 (subtractions required) 
So, total = 8 pairs 
Hence, additions/subtractions required = 8


</details>

---


### Q29. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let r denote the number system radix. The only 
value(s) of r that satisfy the equation  
 √121𝑟 = 11r is/are


- **(A)** decimal 10

- **(B)** decimal 11

- **(C)** decimal 10 and 11

- **(D)** any value > 2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: √(121)ᵣ = 11ᵣ 
√(1 × 𝑟0) + (2 ×  𝑟1) +  (1 ×  𝑟2) = 𝑟 + 1   
=√𝑟0 + 2𝑟1 + 𝑟2 = 𝑟 + 1 
=√(1 + 𝑟)2 = 𝑟 + 1 
𝑟 + 1 = 𝑟 + 1 
So any integer r satisfies this but r must be greater 
than 2 as we have 2 in 121 and radix must be greater 
than any of the digits. (D) is the most appropriate 
answer.


</details>

---


### Q30. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider numbers represented in 4-bit Gray code. Let 
h₃ h₂ h₁ h₀ be the Gray code representation of a 
number n and let g₃ g₂ g₁ g₀ be the Gray code of (n + 
1) (modulo 16) value of the number. Which one of the 
following functions is correct?


- **(A)** g₀(h₃ h₂ h₁ h₀) = Σ (1, 2, 3, 6, 10, 13, 14, 15)

- **(B)** g₁(h₃ h₂ h₁ h₀) = Σ (4, 9, 10, 11, 12, 13, 14, 15)

- **(C)** g₂(h₃ h₂ h₁ h₀) = Σ (2, 4, 5, 6, 7, 12, 13, 15)

- **(D)** g₃(h₃ h₂ h₁ h₀) = Σ (0, 1, 6, 7, 10, 11, 12, 13)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
The question simply says that if 'h' (coded as ) is the 
4-bit gray code of n then 'g' (coded as g3g2g1g0) is 
the gray code of (n+1) mod 16. 
So, write the gray code as: 
<!-- PAGE 162 -->
DIGITAL LOGIC 
Now, we just have to write g₂ as a function of h i.e 
g₂(h₃h₂h₁h₀) = Σ(min-terms of g₂) 
To get min-terms, convert h to decimal wherever 
you get '1' in g₂. 
∴ g₂ = Σ(2, 4, 5, 6, 7, 12, 13, 15)


</details>

---


### Q31. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


We consider the addition of two 2’s complement 
numbers bₙ₋₁ bₙ₋₂ … b₀ and aₙ₋₁ aₙ₋₂ … a₀. A binary 
adder for adding unsigned binary numbers is used to 
add the two numbers. The sum is denoted by cₙ -1 cₙ₋₂ 
… c₀ and the carry -out by c out. Which one of the 
following options correctly identifies the overflow 
condition?


- **(A)** cout ( an−1 ⊕ bn−1̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅)

- **(B)** an-1 bn-1cn−1̅̅̅̅̅̅  + an−1̅̅̅̅̅̅ bn−1̅̅̅̅̅̅ cₙ₋₁

- **(C)** cout ⊕ cₙ₋₁

- **(D)** an-1 ⊕ bn₋₁ ⊕ cₙ₋₁



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
In a 2's complement system, overflow occurs 
during addition if and only if two numbers 
with the same sign are added together, but the 
result has the opposite sign.  
The problem specifies the following notation: 
 𝒂𝒏−𝟏 and 𝒃𝒏−𝟏 : The sign bits (Most 
Significant Bits) of the two input numbers. 
 𝒄𝑛−1 : The sign bit (Most Significant Bit) of 
the resulting sum. 
An overflow happens under exactly two 
scenarios: 
1. Adding two negative numbers yields a 
positive result: Both input sign bits are 1 , 
but the output sign bit is 0 . 
Condition 1 = 𝑎𝑛−1 ⋅ 𝑏𝑛−1 ⋅ 𝑐𝑛−1 
2. Adding two positive numbers yields a 
negative result: Both input sign bits are 𝜃, but 
the output sign bit is 1 . 
Condition 2 = 𝑎𝑛−1 ⋅ 𝑏𝑛−1 ⋅ 𝑐𝑛−1 
Combining both mutually exclusive 
scenarios using an OR operation gives the 
complete expression for the overflow flag: 
 Overflow = 𝑎𝑛−1𝑏𝑛−1𝑐𝑛−1 + 𝑎𝑛−1𝑏𝑛−1𝑐𝑛−1


</details>

---


### Q32. [GATE CSE – 2013 MCQ (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


When multiplicand Y is multiplied by multiplier X = 
xₙ₋₁ xₙ₋₂ … x₀ using bit -pair recoding in Booth's 
algorithm, partial products are generated according to 
the following table.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

This is Modified Booth (bit-pair / radix-4) 
recording. 
Standard radix-4 Booth table: 
xᵢ₊₁ xᵢ xᵢ₋₁ Operation 
000 → 0 
001 → +Y 
010 → +Y 
011 → +2Y 
100 → −2Y 
101 → −Y 
110 → −Y 
111 → 0 
Now match rows: 
Row 5: 100 → −2Y 
Row 8: 111 → 0


</details>

---


### Q33. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Using Booth's Algorithm for multiplication, the 
multiplier −57 will be recoded as


- **(A)** 0 -1 0 0 1 0 0 -1

- **(B)** 1 1 0 0 0 1 1 1

- **(C)** 0 -1 0 0 1 0 0 0

- **(D)** 0 1 0 0 -1 0 0 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Solution: 
Step 1: Write +57 in binary (8-bit) 
57 = 00111001 
Step 2: Find −57 (2’s complement) 
Invert bits: 
Add 1: 
So multiplier Q = 11000111 
Step 3: Append Q₋₁ = 0 
11000111 0 
Step 4: Booth recoding rule 
(Q₀, Q₋₁) 
00 → 0   
11 → 0   
01 → +1   
10 → −1 
Check pairs from LSB side: 
1 0 → −1   
1 1 → 0   
1 1 → 0   
0 1 → +1   
0 0 → 0   
0 0 → 0   
1 0 → −1   
1 1 → 0 
Booth recoding: 
          0 -1  0  0  1  0  0  -1


</details>

---


### Q34. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The range of integers that can be represented by an 
n-bit 2’s complement number system is:


- **(A)** -2n-1 to (2n-1-1)

- **(B)** -(2n-1 - 1) to (2n-1 - 1)

- **(C)** -2n-1 to 2n-1

- **(D)** -(2n-1+1) to (2n-1-1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
Range of n-bit 2’s complement numbers: 
Minimum = −2ⁿ⁻¹   
Maximum = 2ⁿ⁻¹ − 1   
Range = −2ⁿ⁻¹ to (2ⁿ⁻¹ − 1)   
<!-- PAGE 163 -->
DIGITAL LOGIC


</details>

---


### Q35. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The hexadecimal representation of (657)8 is:


- **(A)** 1AF

- **(B)** D78

- **(C)** D71

- **(D)** 32F



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
(657)₈ → convert to binary: 
6 = 110, 5 = 101, 7 = 111  
⇒ (657)₈ = (110101111)₂  
Group into 4 bits: 
0001 1010 1111  
Convert to hexadecimal: 
0001 = 1, 1010 = A, 1111 = F  
⇒ (657)₈ = (1AF)₁₆ 
<!-- PAGE 164 -->
LOGIC GATES


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the Boolean expression  
 𝐹(𝑃, 𝑄) = (𝑃̅ + 𝑄) ⊕ (𝑃̅𝑄). Which of the 
following expressions is equivalent to F?


- **(A)** 𝑃 ⊕ 𝑄

- **(B)** 𝑃 ⊕ 𝑄

- **(C)** 𝑃‾ ⊕ 𝑄

- **(D)** 𝑃‾ ⊕ 𝑄‾



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A, C


**Step-by-Step Explanation:**

Solution:  
 We know that 𝑃 ⊕ 𝑄 = 𝑃′𝑄 + 𝑃𝑄′ ,using this 
property we solve below: 
𝐹(𝑃, 𝑄) = (𝑃ˉ + 𝑄) ⊕ (𝑃ˉ 𝑄) 
𝐹(𝑃, 𝑄) = (𝑃̅ + 𝑄̅̅̅̅̅̅̅̅). (𝑃ˉ 𝑄) + (𝑃ˉ + 𝑄). (𝑃‾ 𝑄) 
𝐹(𝑃, 𝑄) = 𝑃̅ˉ . 𝑄ˉ . (𝑃ˉ 𝑄) + (𝑃ˉ + 𝑄). (𝑃ˉˉ + 𝑄ˉ ) 
𝐹(𝑃, 𝑄) = 𝑃ˉ 𝑄ˉ + 𝑃𝑄 
                    ≡ 𝑃 ⊙ 𝑄 ≡ 𝑃ˉ ⊕ 𝑄 = 𝑃 ⊕ 𝑄ˉ ≡ 𝑃 ⊕ 𝑄


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a Boolean function F with the following 
min-term expression: 
F(P, Q, R, S) = Σm(1, 2, 3, 4, 5, 7, 10, 12, 13, 14) 
Which of the following options is/are the minimal 
sum-of-products expression(s) of F?


- **(A)** 𝑃‾𝑆 + 𝑄𝑅‾ + 𝑃‾𝑄‾𝑅 + 𝑄‾ 𝑅𝑆‾

- **(B)** 𝑃‾𝑆 + 𝑄𝑅‾ + 𝑃‾𝑄𝑅‾ + 𝑃𝑅𝑆‾

- **(C)** 𝑃‾𝑆 + 𝑄𝑅‾ + 𝑃𝑄𝑆‾ + 𝑃𝑅𝑆‾

- **(D)** 𝑃‾𝑆 + 𝑄𝑅‾ + 𝑃𝑄𝑆‾ + 𝑄‾ 𝑅𝑆‾



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,D)


**Step-by-Step Explanation:**

Solution: 
 F(P, Q, R, S) = Σm(1, 2, 3, 4, 5, 7, 10, 12, 13, 14) 
 Upon simplification (b) and (d) are options. 
(b) 𝑃 ̅ 𝑆 + 𝑄𝑅̅ + 𝑃̅𝑄̅𝑅 + 𝑃𝑅𝑆̅  
(d) 𝑃̅𝑆 +  𝑄𝑅̅ +  𝑃𝑄𝑆̅  + 𝑄̅𝑅𝑆̅ 
      GATE CSE – 2007 MCQ (1-MARKS) 
        GATE CSE – 2006 MCQ (1-MARKS) 
        GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 169 -->
DIGITAL LOGIC


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following 4-variable Boolean 
function  
F(A, B, C, D) = Σm(0, 1, 2, 3, 8, 9, 10, 11)  
Consider A as MSB, D as LSB. Which one of the 
following options represents the minimal sum of 
products form for the above function?  
Note: + is OR operation, · is AND operation, ' is 
NOT operation


- **(A)** A' + B' + C' + D'

- **(B)** B'

- **(C)** A'·B' + A·B

- **(D)** A'



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
 F(A, B, C, D) = Σm(0, 1, 2, 3, 8, 9, 10, 11) 
 So, F = B̅  is correct.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following options is not a property 
of Boolean Algebra?


- **(A)** a + b = b + a

- **(B)** a · a' = 1

- **(C)** a + a' = 1

- **(D)** a · b = b · a



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Solution: 
 (a) 𝑎 + 𝑏 = 𝑏 + 𝑎 
 This is the Commutative Law of OR. So (a) is 
correct. 
(b) Complement law states: 
a + a' = 1 
 a · a' = 0 
So (b) a · a' = 1 is incorrect. 
(c) 𝑎 + 𝑎′ = 1 . 
This is the Complement Law (OR form). So (c) is 
correct. 
(d) 𝑎 ⋅ 𝑏 = 𝑏 ⋅ 𝑎 
This is the Commutative Law of AND. So, option 
(d) is correct.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following Boolean algebraic 
equation(s) is/are CORRECT?


- **(A)** 𝐴‾𝐵𝐶 + 𝐴𝐵‾𝐶‾ + 𝐴‾𝐵‾ 𝐶‾ + 𝐴𝐵‾ 𝐶 + 𝐴𝐵𝐶 = 𝐵𝐶 + 𝐵‾𝐶‾ + 𝐴‾𝐵‾

- **(B)** 𝐴𝐵 + 𝐴‾𝐶 + 𝐵𝐶 = 𝐴𝐵 + 𝐴‾𝐶

- **(C)** (𝐴 + 𝐶)(𝐴‾ + 𝐵) = 𝐴𝐵 + 𝐴‾𝐶

- **(D)** (𝐴 + 𝐵‾ + 𝐷‾ )(𝐶 + 𝐷)(𝐴‾ + 𝐶 + 𝐷)(𝐴 + 𝐵 + 𝐷‾ ) = 𝐴‾𝐷 + 𝐶‾𝐷‾



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C, D)


**Step-by-Step Explanation:**

Solution: 
 Option A: Let, A = 0, B = 0, C = 1  
Evaluate LHS: 
All terms contain A or B ⇒ each term = 0  
⇒ LHS = 0  
Evaluate RHS: 
BC = 0  
B̅ C̅  = 1·0 = 0  
A̅ B̅  = 1·1 = 1  
⇒ RHS = 1  
Since LHS ≠ RHS, Option A is false. 
Option B →  
AB + A̅ C + BC = AB + A̅ C (Consensus Theorem) 
→ True  
Option C →  
(A + C)(A̅  + B)  
= AA̅  + AB + CA̅  + CB  
= 0 + AB + A̅ C + BC  
= AB + A̅ C + BC  
= AB + A̅ C (using Consensus) → True  
Option D →  
Apply De Morgan and simplify:  
[(𝐴 +  𝐵 +  𝐷̅)(𝐶 +  𝐷)(𝐴̅ +  𝐶 +  𝐷)(𝐴 +  𝐵 +  𝐷)̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅]  
                    =  𝐴‾𝐷 + 𝐶‾𝐷‾  → True  
Final Answer: Options B, C and D are correct, A is false


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let X be a 3-variable Boolean function that produces 
output as ‘1’ when at least two of the         input 
variables are ‘1’. Which of the following statement(s) 
is/are CORRECT, where a, b, c, d, e are Boolean  
variables?


- **(A)** X(a, b, X(c, d, e)) = X(X(a, b, c), d, e)

- **(B)** X(a, b, X(a, b, c)) = X(a, b, c)

- **(C)** X(a, b, X(a, c, d)) = (X(a, b, a) AND X(c, d, c))

- **(D)** X(a, b, c) = X(a, X(a, b, c), X(a, c, c))



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B and D)


**Step-by-Step Explanation:**

Solution: 
Given: 
X(x, y, z) = Majority function (output = 1 if at least 
two inputs are 1).So, 
X(x,y,z) = xy + yz + zx 
Option A: 
Both sides compute the majority hierarchically, but 
the majority function is not associative. 
Incorrect 
Option B: 
Let M = X(a,b,c) 
Then X(a,b,M): 
If at least two among a,b,c are 1 → M=1 → output 
remains 1   
If fewer than two are 1 → M=0 → output remains 0 
Hence unchanged. 
Correct  
Option C: 
LHS = X(a,b,X(a,c,d)) 
RHS = X(a,b,a) AND X(c,d,c) 
Since: 
X(a,b,a) = a 
X(c,d,c) = c 
RHS = a AND c 
But LHS depends on b and d also. 
Incorrect 
Option D: 
X(a,c,c) = c 
So RHS: 
X(a, X(a,b,c), c) 
Using majority property: 
Majority(a, Majority(a,b,c), c) = Majority(a,b,c) 
Correct. 
<!-- PAGE 170 -->
DIGITAL LOGIC


</details>

---


### Q7. [GATE CSE – 2026 SET 1 MSQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


For a Boolean variable x, which of the following 
statements is/are FALSE?


- **(A)** x · 1 = x

- **(B)** x + 1 = x

- **(C)** x · x = 0

- **(D)** x + x̅  = 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B , C


**Step-by-Step Explanation:**

Solution:  
x·1 = x → True 
x + 1 = 1 → False 
x·x = x → False 
x + x' = 1 → True


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the circuit shown below where the gates 
may have propagation delays. Assume that all 
signal transitions occur instantaneously and that 
wires have no delays. Which of the following 
statements about the circuit is/are CORRECT?


- **(A)** With no propagation delays, the output Y is 
always logic Zero

- **(B)** With no propagation delays, the output Y is 
always logic One

- **(C)** With propagation delays, the output Y can 
have a transient logic One after X 
transitions from logic Zero to logic One

- **(D)** With propagation delays, the output Y can 
have a transient logic Zero after X 
transitions from logic One to logic Zero



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A, C)


**Step-by-Step Explanation:**

Solution:


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following Boolean expression. 
 F = (X + Y + Z)(X̅  + Y)(Y̅  + Z) 
 Which of the following Boolean expressions is/are 
equivalent to F̅  (complement of F)?


- **(A)** (X̅  + Y̅  + Z̅ )(X + Y̅ )(Y + Z̅ )

- **(B)** XY̅  + Z̅

- **(C)** (X + Z̅ )(Y̅  + Z̅ )

- **(D)** XY̅  + YZ̅  + X̅ Y̅ Z̅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B,C,D)


**Step-by-Step Explanation:**

Solution: 
𝐹 = (𝑋 + 𝑌 + 𝑍)(𝑋‾ + 𝑌)(𝑌‾ + 𝑍) 
Taking complement of above expression. 
𝐹‾ = (𝑋 + 𝑌 + 𝑍)(𝑋‾ + 𝑌)(𝑌‾ + 𝑍) 
Applying De-Morgan's law, 
𝐹‾ = (𝑋 + 𝑌 + 𝑍) + (𝑋‾ + 𝑌) + (𝑌‾ + 𝑍)
            𝐹‾ = (𝑋‾ ⋅ 𝑌‾ ⋅ 𝑍‾) + 𝑋‾ ⋅ 𝑌‾ + 𝑌‾ ⋅ 𝑍‾
[∵ 𝑋‾ = 𝑋, Using double negation law ]
 ∴ 𝐹‾ = (𝑋‾ ⋅ 𝑌‾ ⋅ 𝑍‾) + (𝑋 ⋅ 𝑌‾) + (𝑌 ⋅ 𝑍‾)  →  Option (D) 
Taking 𝑌‾ as common we get: 
𝐹‾ = 𝑌‾[(X̅Z̅ + 𝑋] + 𝑌𝑍‾
[∵ 𝐴 + 𝐵𝐶 = (𝐴 + 𝐵)(𝐴 + 𝐶) Applying distributive law here ]
𝐹‾ = 𝑌‾[(𝑋 + 𝑋‾)(𝑋 + 𝑍‾)] + 𝑌𝑍‾
𝐹‾ = 𝑌‾[𝑋 + 𝑍‾] + 𝑌𝑍‾
𝐹‾ = 𝑋𝑌‾ + Y̅Z̅ + 𝑌𝑍‾
Taking 𝑍‾ as common 
𝐹‾ = 𝑋𝑌‾ + 𝑍‾(𝑌 + 𝑌‾) 
         ∵ (Y + Y = 1) using complement law 
∴ 𝐹‾ = 𝑋𝑌‾ + 𝑍‾  →  Option (B)  
         Applying distributive law here we get; 
𝐹‾ = (𝑋 + 𝑍‾)(𝑌‾ + 𝑍‾)  →  Option (C) 
 So, Correct Option are B,C,D


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is NOT a valid 
identity?


- **(A)** (x ⊕ y) ⊕ z = x ⊕ (y ⊕ z)

- **(B)** (x + y) ⊕ z = x ⊕ (y + z)

- **(C)** x ⊕ y = x + y, if xy = 0

- **(D)** x ⊕ y = (xy + x'y')'



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Solution: 
Option A: 
(x ⊕ y) ⊕ z = x ⊕ (y ⊕ z) 
XOR is associative → TRUE 
Option B: 
(x + y) ⊕ z = x ⊕ (y + z) 
Let x = 1, y = 1, z = 0 
LHS = (1 + 1) ⊕ 0 = 1 ⊕ 0 = 1   
RHS = 1 ⊕ (1 + 0) = 1 ⊕ 1 = 0   
LHS ≠ RHS → FALSE 
Option C: 
x ⊕ y = x + y, if xy = 0 → TRUE 
Option D: 
 x ⊕ y = (xy + x'y')' → TRUE


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let ⊕ and ⊙ denote the Exclusive OR and 
Exclusive NOR operations, respectively. Which one 
of the following is NOT CORRECT?


- **(A)** (𝑃 ⊕  𝑄)̅̅̅̅̅̅̅̅̅̅̅̅  =  𝑃 ⊙  𝑄

- **(B)** 𝑃̅  ⊕  𝑄 =  𝑃 ⊙  𝑄

- **(C)** 𝑃̅  ⊕   𝑄̅ =  𝑃 ⊕  𝑄

- **(D)** 𝑃 ⊕  𝑃̅  ⊕  𝑄 =  (𝑃 ⊙  𝑃̅  ⊙ 𝑄̅)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution :  
 (𝑃 ⊕ 𝑄) = 𝑃 ∘ 𝑄 
 Correct. By definition, XNOR (O) is the 
exact complement of XOR ( ⊕ ). 
(b) 𝑃‾ ⊕ 𝑄 = 𝑃 ∘ 𝑄 
 Correct. Inverting exactly one input of an 
XOR gate turns the operation into an XNOR 
gate. 
(c) 𝑃‾ ⊕ 𝑄‾ = 𝑃 ⊕ 𝑄 
 Correct. Inverting both inputs of an XOR gate 
cancels out the changes. leaving the output 
identical to the original XOR. 
(d) 𝑃 ⊕ 𝑃‾ ⊕ 𝑄 = (𝑃 ⊙ 𝑃‾ ⊙ 𝑄‾) 
 INCORRECT. * LHS: (𝑃 ⊕ 𝑃‾) ⊕ 𝑄 = 1 ⊕
𝑄 = 𝑄‾ 
 RHS: (𝑃 ∘ 𝑃‾) ∘ 𝑄‾ = 0 ∘ 𝑄‾ = 𝑄 
<!-- PAGE 171 -->
DIGITAL LOGIC 
 Since 𝑄‾ ≠ 𝑄, this identity fails.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


If w, x, y, z are Boolean variables, then which one of 
the following is INCORRECT?


- **(A)** wx + w(x + y) + x(x + y) = x + wy

- **(B)** (wx̄ (y + z̄ ))' + w̄ x = w̄  + x + ȳz

- **(C)** (wx̄ (y + xz̄ ) + w̄ x̄ )y = xȳ

- **(D)** (w + y)(wxy + wyz) = wxy + wyz



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Option - A:  𝑤𝑥 +  𝑤(𝑥 +  𝑦) +  𝑥(𝑥 +  𝑦)  =
 𝑥 +  𝑤𝑦 
𝑤𝑥 +  𝑤𝑥 +  𝑤𝑦 +  𝑥 
𝑤𝑥 +  𝑤𝑦 +  𝑥 
𝑥(1 +  𝑤) +  𝑤𝑦 
𝑥 +  𝑤𝑦 
Option - B:  (𝑤𝑥 (𝑦 +  𝑧̄ ))̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅ + 𝑤̅𝑥 =  𝑤 ̅̅̅ +  𝑥 +
 𝑦̅𝑧̄ 
𝑤  +  𝑥 +  𝑦 𝑧̄ +  𝑤 𝑥 
𝑤  +  𝑤 𝑥 +  𝑥 +  𝑦 𝑧̄ 
𝑤  +  𝑥 +  𝑦 𝑧̄ 
Option - D:   
(𝑤 +  𝑦)(𝑤𝑥𝑦 +  𝑤𝑦𝑧̄)  =  𝑤𝑥𝑦 +  𝑤𝑦𝑧̄ 
𝑤𝑥𝑦 +  𝑤𝑦𝑧̄ +  𝑤𝑥𝑦 +  𝑤𝑦𝑧̄ 
𝑤𝑥𝑦 +  𝑤𝑦𝑧̄ 
Option A, B, D are matching fine. 
Hence, Option - C is the answer.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let, x₁ ⊕ x₂ ⊕ x₃ ⊕ x₄ = 0 where x₁, x₂, x₃, x₄ are 
Boolean variables, and ⊕ is the XOR operator. 
Which one of the following must always be TRUE?


- **(A)** 𝑥1𝑥2𝑥3𝑥4 = 0

- **(B)** 𝑥1𝑥3 + 𝑥2 = 0

- **(C)** 𝑥‾1 ⊕ 𝑥‾3 = 𝑥‾2 ⊕ 𝑥‾4

- **(D)** 𝑥1 + 𝑥2 + 𝑥3 + 𝑥4 = 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Solution: 
Given: 
x₁ ⊕ x₂ ⊕ x₃ ⊕ x₄ = 0 
Property of XOR: 
If XOR of variables is 0, then the number of 1’s 
among them is even. 
Rearrange using associativity and commutativity 
of XOR: 
x₁ ⊕ x₂ ⊕ x₃ ⊕ x₄ = 0 
⇒ (x₁ ⊕ x₃) ⊕ (x₂ ⊕ x₄) = 0 
For XOR: 
A ⊕ B = 0  ⇒  A = B 
Therefore, 
x₁ ⊕ x₃ = x₂ ⊕ x₄ 
Hence this statement must always be true.


</details>

---


### Q14. [GATE CSE – 2017 SET 2 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the Boolean operator # with the following 
properties: 
         x # 0 = x 
         x # 1 = x̅  
         x # x = 0 
         x # x̅  = 1 
 Then x # y is equivalent to


- **(A)** xȳ + x̅ y

- **(B)** xȳ + x̅ ȳ

- **(C)** x̅ y + xy

- **(D)** xy + x̅  y̅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (a)


**Step-by-Step Explanation:**

Solution: 
𝑥 𝑦 # 
0 0 0 
0 1 1 
1 0 1 
1 1 0 
So, according to this # function results in XOR 
operation on x and y . 𝑥#𝑦 equivalent to 𝑥. 𝑦‾ +
𝑥‾. 𝑦


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The number of min-terms after minimizing the 
following Boolean expression is ________. 
 [D' + AB' + A'C + AC'D + A'C'D]'.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 1


**Step-by-Step Explanation:**

Solution: 
Let f(A, B, C, D) = [D' + AB' + A'C + AC'D + 
A'C'D]' 
⇒ [D' + AB' + A'C + C'D]' 
⇒ [D' + C' + AB' + A'C]' 
⇒ [D' + C' + A' + AB']' 
⇒ [D' + C' + A' + B']' 
⇒ ABCD 
So the number of min-terms = 1


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The dual of a Boolean function F(x₁, x₂, . . ., x ₙ) 
written as Fᴰ is the same expression as that of F 
with + and · swapped. F is said to be self -dual if F 
= Fᴰ. The number of self -dual functions with n 
Boolean variables is


- **(A)** 2n

- **(B)** 2n-1

- **(C)** 2²ⁿ

- **(D)** 2²ⁿ⁻¹



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
For self-dual functions, 
1. Number of min-terms equals number of  
max-terms 
2. Function should not contain two 
complementary min-terms - whose sum equals 2𝑛 −
1, where 𝑛 is the number of variables. 
 𝐀 𝐁 𝐂 
0 0 0 0 
1 0 0 1 
2 0 1 0 
3 0 1 1 
4 𝟏 0 0 
5 𝟏 0 1 
6 𝟏 𝟏 0 
7 𝟏 1 𝟏 
So, here (0,7)(1,6)(2,5)(3,4) are complementary 
terms so in self-dual we can select any one of them 
but not both. 
Totally 2 × 2 × 2 × 2 = 24 possibility because say 
from (0,7) we can pick anyone in minterm but not 
both. 
For example, let 𝑓 = ∑(0,6,2,3) 
NOTE: here I have taken only one of the 
complementary term for min term from the sets. 
So, remaining numbers will go to MAX-TERMS 
For above example, 24 = 16 self dual functions are 
possible 
So, If we have 𝑁 variables, total Min-terms possible 
is 2𝑛 
Then half of them we selected so 2𝑛−1. 
Now we have 2 choices for every pair for being 
selected. 
So total such choices = 2 × 2 × 2 × 2 … 2⏟          
2𝑛−1 times 
∴ 22𝑛−1 (option D) 
<!-- PAGE 172 -->
DIGITAL LOGIC


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let ⊕ denote the exclusive OR (XOR) operation. 
Let '1' and '0' denote the binary constants. Consider 
the following Boolean expression for F over two 
variables P and Q: 
 F(P, Q) = ((1 ⊕ P) ⊕ (P ⊕ Q)) ⊕ ((P ⊕ Q) ⊕ (Q 
⊕ 0)) 
  The equivalent expression for F is


- **(A)** 𝑃 +  𝑄

- **(B)** (𝑃 +  𝑄)̅̅̅̅̅̅̅̅̅̅̅̅

- **(C)** 𝑃 ⊕  𝑄

- **(D)** (𝑃 ⊕  𝑄)̅̅̅̅̅̅̅̅̅̅̅̅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
1 ⊕ P = P' 
Q ⊕ 0 = Q 
So, 
F = (P' ⊕ (P ⊕ Q)) ⊕ ((P ⊕ Q) ⊕ Q) 
First part: 
P' ⊕ (P ⊕ Q) 
= P' ⊕ P ⊕ Q 
= 1 ⊕ Q 
= Q' 
Second part: 
(P ⊕ Q) ⊕ Q 
= P ⊕ (Q ⊕ Q) 
= P ⊕ 0 
= P 
Thus, 
F = Q' ⊕ P 
= P ⊕ Q' 
= (P ⊕ Q)' .


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following expressions does NOT 
represent exclusive NOR of x and y?


- **(A)** xy+x′y′

- **(B)** x⊕y′

- **(C)** x′⊕y

- **(D)** x′⊕y′



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution:  
XNOR = xy + x'y' 
Check options: 
A → xy + x'y' = XNOR 
B → x ⊕ y' = xy + x'y' = XNOR 
C → x' ⊕ y = xy + x'y' = XNOR 
D → x' ⊕ y' = x ⊕ y = XOR


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The truth table represents the Boolean function


- **(A)** X

- **(B)** X + Y

- **(C)** X ⊕ Y

- **(D)** Y



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution:  
F = XY' + XY 
= X(Y' + Y) 
= X(1) 
= X


</details>

---


### Q20. [GATE CSE – 2014 SET-3 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following circuits is NOT 
equivalent to a 2-input XNOR (exclusive NOR) gate?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Solution: 
All circuits except option D implement the XNOR 
function: 
XNOR = AB + A'B' 
Option D implements XOR instead of XNOR.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the boolean expression for the output of the 
combinational logic circuit of NOR gates given 
below?


- **(A)** (𝑄 +  𝑅̅̅̅̅̅̅̅̅̅)

- **(B)** (𝑃 +  𝑄̅̅̅̅̅̅̅̅̅)

- **(C)** (𝑃 +  𝑅̅̅̅̅̅̅̅̅̅)

- **(D)** (𝑃 +  𝑄 +  𝑅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution:


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


What is the minimum number of gates required to 
implement the Boolean function (AB+C) if we 
have to use only 2-input NOR gates?


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (𝑩)


**Step-by-Step Explanation:**

Solution: Given boolean function is 
𝑓 = 𝐴𝐵 + 𝐶 
 = (𝐴 + 𝐶). (𝐵 + 𝐶)  
= ((𝐴 + 𝐶)′ + (𝐵 + 𝐶)′)′ 
 Therefore, 3 NOR gates required .


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


If P, Q, R are Boolean variables, then  
 (P + Q̅ )(P·Q̅  + P·R)(P̅ ·R + Q̅ ) simplifies to


- **(A)** P·Q̅

- **(B)** P·R

- **(C)** P·Q̅  + R

- **(D)** P·𝑅̅ + Q



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution:  
(P + Q̅ )(PQ̅  + PR)(P̅ R + Q̅ ) 
Step 1: Simplify the middle bracket Factor out P 
from the middle terms: P(Q̅  + R) 
Step 2: Multiply the first two brackets Substitute 
it back with the first bracket: (P + Q̅ ) · P(Q̅  + R) 
Rearrange the terms: P(P + Q̅ )(Q̅  + R) 
Apply the Absorption Law [ A(A + B) = A ] to the 
first part, so P(P + Q̅ ) simply becomes P: P(Q̅  + R) 
Expand this out: PQ̅  + PR 
Step 3: Multiply with the final bracket Take the 
result and multiply it by the last bracket:  
(PQ̅  + PR)(P̅ R + Q̅ ) 
Step 4: Expand and apply Boolean rules Multiply 
using the distributive property:  
= (PQ̅  · P̅ R) + (PQ̅  · Q̅ ) + (PR · P̅ R) + (PR · Q̅ ) 
Apply the rules [ A · A̅  = 0 ] and [ A · A = A ]:  
= 0 + PQ̅  + 0 + PQ̅ R = PQ̅  + PQ̅ R 
Step 5: Factor and apply the Annulment Law 
Factor out the common term PQ̅ : = PQ̅ (1 + R) 
Apply the Annulment Law [ 1 + A = 1 ], so (1 + R) 
becomes 1: = PQ̅  · 1 
Final Answer: PQ̅


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Given f1,f2 and f in the canonical sum of products 
form(in decimal) for the circuit 
 f₁ = Σm(4, 5, 6, 7, 8)   
 f₃ = Σm(1, 6, 15)   
 f = Σm(1, 6, 8, 15)   
 then f₂ is


- **(A)** Σm(4, 6)

- **(B)** Σm(4, 8)

- **(C)** Σm(6, 8)

- **(D)** Σm(4, 6, 8)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
With AND gates we will choose intersection of min-
terms. 
With OR gates we will take union of min-terms.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Define the connective * for the Boolean variables X 
and Y as: 
            X * Y = XY + X'Y'. 
 Let Z = X * Y. Consider the following expressions 
P, Q and R. 
                P: X = Y * Z, 
                Q: Y = X * Z, 
                R: X * Y * Z = 1 
 Which of the following is TRUE?


- **(A)** Only P and Q are valid.

- **(B)** Only Q and R are valid.

- **(C)** Only P and R are valid.

- **(D)** All P, Q, R are valid.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ( D)


**Step-by-Step Explanation:**

Solution: 
Given: 
X * Y = XY + X'Y' 
This operation represents XNOR (equivalence), i.e., 
X * Y = 1 when X = Y. 
Let: 
Z = X * Y = XY + X'Y' 
So, Z = 1 when X = Y and Z = 0 when X ≠ Y. 
<!-- PAGE 173 -->
DIGITAL LOGIC 
Now verify each statement. 
P: X = Y * Z 
Y * Z = YZ + Y'Z' 
Substitute Z = X * Y. 
Since Z indicates whether X and Y are equal: 
If X = Y → Z = 1   
Then Y * Z = Y * 1 = Y = X 
If X ≠ Y → Z = 0   
Then Y * Z = Y * 0 = Y' = X 
Hence, P is TRUE. 
Q: Y = X * Z 
Similarly, 
X * Z = XZ + X'Z' 
If X = Y → Z = 1   
X * Z = X = Y 
If X ≠ Y → Z = 0   
X * Z = X' = Y 
Hence, Q is TRUE. 
R: X * Y * Z = 1 
Since Z = X * Y, 
X * Y * Z = Z * Z 
Using XNOR property: 
A * A = 1 
Therefore, 
Z * Z = 1 
Hence, R is TRUE. 
All P, Q and R are valid. 
Final Answer: D. All P, Q, R are valid.


</details>

---


### Q26. [GATE CSE – 2010 MCQ (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let f(w,x,y,z) = Σ (0,4,5,7,8,9,13,15). Which of the 
following expressions are NOT equivalent to f?  
          P: x'y'z' + w'xy' + wy'z + xz 
          Q: w'y'z' + wx'y' + xz  
          R: w'y'z' + wx'y' + xyz + xy'z


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
Let w = 1, x = 1, y = 1, z = 1, then the value of f is 
1. 
Consider each statement: 
x'y'z' + w'x'y' + w'y'z + xz 
= 0·0·0 + 0·1·0 + 1·0·1 + 1·1 
= 1 
w'y'z' + wx'z'y' + xz 
= 0·0·0 + 1·0·0 + 1·1 
= 1 
w'y'z' + wx'y' + xyz + xy'z 
= 0·0·0 + 1·0·0 + 1·1·1 + 1·0·1 
= 1 
x'y'z' + wx'y' + w'y 
= 0·0·0 + 1·0·0 + 0·1 
= 0 
So statement (d) is false because when w = 1, x = 
1, y = 1, z = 1 the value of f is 0. 
(d) does not contain the essential min-terms.


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following expression was to be realized using 
2-input AND and OR gates. However, during the 
fabrication all 2-input AND gates were mistakenly 
substituted by 2-input NAND gates. 
 (a.b).c + (a'.c).d + (b.c).d + a.d . What is the 
function finally realized?


- **(A)** 1

- **(B)** a' + b' + c' + d'

- **(C)** a' + b + c' + d'

- **(D)** a' + b' + c + d'



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
a' + c' + d' + a'c + ab + bc 
= a'(c + 1) + c' + d' + ab + bc 
= a' + c' + d' + ab + bc 
= (a' + a)(a' + b) + (c' + c)(c' + b) + d' 
= a' + b + c' + b + d' 
= a' + b + c' + d' 
Option is C.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The boolean function for a combinational circuit 
with four inputs is represented by the following 
Karnaugh map. 
 Which of the product terms given below is an 
essential prime implicant of the function?


- **(A)** QRS

- **(B)** PQS

- **(C)** PQ’S’

- **(D)** Q’S’



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
 Only the top leftmost and bottom rightmost 1𝑠 have 
no alternate groupings. So, they form the essential 
prime implicants.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following expressions is equivalent 
to (A ⊕ B) ⊕ C ?


- **(A)** (A + B + C)(A̅  + B̅  + C̅ )

- **(B)** (A + B + C)(A̅  + B̅  + C)

- **(C)** ABC + A̅ (B ⊕ C) + B̅ (A ⊕ C)

- **(D)** None of these



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Assume A = 0, the given expression becomes 
B ⊕ C 
Option A → B + C 
Option B → B + C̅  
Option C →ABC + A̅ (B ⊕ C) + B̅ (A ⊕ C) 
=ABC + A̅ (BC̅  + B̅ C) + B̅ (AC̅  + A̅ C) 
=ABC + A̅ BC̅  + A̅ B̅ C + AB̅ C̅  + A̅ B̅ C 
=ABC + A̅ BC̅  + AB̅ C̅  + A̅ B̅ C 
=A̅ B̅ C + A̅ BC̅  + AB̅ C̅  + ABC  
=m1 + m2 + m4 + m7 
=Σm(1,2,4,7) 
=A ⊕ B ⊕ C 
.  
<!-- PAGE 174 -->
COMBINATIONAL CIRCUIT


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the digital circuit shown below with two 
input lines A and B, two select lines S0 and S1, and 
an output line Y. The blocks Q and M represent an 
active-high 2:4 decoder and a 4 -to-1 multiplexer, 
respectively. Out of 16 possible input 
combinations, the number of combinations that 
produce Y = 1 is __________. (Answer in integer).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (6)


**Step-by-Step Explanation:**

Solution: 
Block Q is an active-high 2:4 decoder with inputs A, 
B. Hence its outputs are: 
[D0 = A'B’, D1 = A'B, D2 = AB', D3 = AB] 
These outputs are connected to the 4:1 multiplexer 
(M) as follows: 
 Input 0 → D0 
 Input 1 → 0 
 Input 2 → 1 
 Input 3 → D3 
The select lines of the multiplexer are S1 S0. 
Case 1: (S1S0 = 00) 
MUX selects input 0 
[Y = D0 = A'B'] 
This becomes 1 only when 
[A=0,; B=0] Number of combinations = 1 
Case 2: (S1S0 = 01) 
MUX selects input 1 
[Y = 0] 
Output is always 0 
Number of combinations = 0 
Case 3: (S1S0 = 10) 
MUX selects input 2 
[Y = 1] 
Output is always 1 
Possible values of (A,B): 
[00,01,10,11] 
Number of combinations = 4 
Case 4: (S1S0 = 11) 
MUX selects input 3 
[Y = D3 = AB] 
This becomes 1 only when 
[A=1,; B=1] 
Number of combinations = 1 
Total combinations producing (Y=1) [1 + 0 + 4 + 1 = 
6]


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following logic circuit diagram. 
Which is/are the CORRECT option(s) for the output 
function F?


- **(A)** (XY)'

- **(B)** X' + Y' + XY'

- **(C)** (XY)' + X' + XY'

- **(D)** X + Y'



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A,B,C)


**Step-by-Step Explanation:**

Solution: 
Using diagram, we can say 
F = (XY)' + X' + XY' 
here Apply Demorgan's law on (XY)' = X' + Y' 
F= X' + Y' + X' + XY' 
 X' + Y' + XY'  
  𝑋′ + 𝑌′ + 𝑋𝑌′→ simplifies to 𝑋′ + 𝑌′ 
 (𝑋𝑌)′+𝑋′+𝑋𝑌′→ same expression   
  𝑋 + 𝑌′(incorrect) 
GATE CSE – 2006 MCQ (1-MARKS) 
<!-- PAGE 179 -->
DIGITAL LOGIC


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A Boolean digital circuit is composed using two 4 -
input multiplexers (M1 and M2) and one 2 -input 
multiplexer (M3) as shown in the figure. X0 -X7 are 
the inputs of the multiplexers M1 and M2 and could 
be connected to either 0 or 1. The select lines of the 
multiplexers are connected to Boolean variables A, B 
and C as shown. 
 Which one of the following set of values of (X0, X1, 
X2, X3, X4, X5, X6, X7) will realise the Boolean 
function A'+ A'⋅C' + A⋅ B'⋅C?


- **(A)** (1, 1, 0, 0, 1, 1, 1, 0)

- **(B)** (1, 1, 0, 0, 1, 1, 0, 1)

- **(C)** (1, 1, 0, 1, 1, 1, 0, 0)

- **(D)** (0, 0, 1, 1, 0, 1, 1, 1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
f = A̅  + A̅ C̅  + AB̅ C 
Since, final output is given by a 2 × 1 MUX i.e. 
M3, so we have to write 
f as  f = B̅ (.) + B(.) 
f = A̅ (1 + C̅ ) + AB̅ C 
f = A̅  + AB̅ C 
f = A̅ (B + B̅ )(C + C̅ ) + AB̅ C 
f = A̅ BC + A̅ BC̅  + A̅ B̅ C + A̅ B̅ C̅  + B̅ AC 
f = B̅ (A̅ C + A̅ C̅  + AC) + B(A̅ C + A̅ C̅ ) 
Now, our job is completed to write f as  f = B̅ (.) + 
B(.) 
Now, for (A̅ C + A̅ C̅  + AC) we have to go upper 
left side MUX i.e. M1 and we get: 
1) A̅ C i.e. S̅ 1S0 i.e. X1 = 1   
2) A̅ C̅  i.e. S̅ 1S̅ 0 i.e. X0 = 1   
3) AC i.e. S1S0 i.e. X3 = 1   
Now, from left below MUX i.e. M2, we get: 
4) A̅ C i.e. S̅ 1S0 i.e. X5 = 1   
5) A̅ C̅  i.e. S̅ 1S̅ 0 i.e. X4 = 1    
Hence, X0 = X1 = X3 = X4 = X5 = 1 and X2 = 
X6 = X7 = 0 
So, order is: 11011100 
Therefore, (C)


</details>

---


### Q4. [GATE CSE – 2022 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a digital display system (DDS) shown in the 
figure that displays the contents of register X. A 16 -
bit code word is used to load a word in X, either from 
S or from R. S is a 1024 -word memory segment and 
R is a 32 -word register file. Based on the value of 
mode bit M, T selects an input word to load in X. P 
and Q interface with the corresponding bits in the 
code word to choose the addressed word. Which one 
of the following represents the functionality of P, Q, 
and T?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Given: 
S = 1024 words (210) → needs 10-bit address → 
use 10 → 210 decoder (P) 
R = 32 words   → needs 5-bit address  → use 5 → 
25 decoder (Q) 
M selects between S and R → use 2:1 multiplexer 
(T) 
Final: 
P = 10 : 210 decoder 
Q = 5 : 25 decoder 
T = 2 : 1 multiplexer


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following circuits implements the 
Boolean function given below? f (x, y, z) = m0 + 
m1 + m3 + m4 + m5 + m6, where mi is the ith min-
term.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution : 
Given: 
f(x,y,z) = Σm(0,1,3,4,5,6) 
Using 4×1 MUX with select lines: 
S1 = y, S0 = z 
Evaluate inputs: 
yz = 00 → m0, m4 → both present → I0 = 1   
yz = 01 → m1, m5 → both present → I1 = 1   
yz = 10 → m2 (0), m6 (1) → depends on x → I2 = x   
yz = 11 → m3 (1), m7 (0) → depends on x' → I3 = x' 
Final inputs: 
[I0, I1, I2, I3] = [1, 1, x, x']


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If there are m input lines and n output lines for a 
decoder that is used to uniquely address a byte 
addressable 1 KB RAM, then the minimum value of 
m + n is ____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 1034


**Step-by-Step Explanation:**

Solution:  
The size of the decoder required is 10 x 210  
i.e 10 X 1024. 
Each output line of the decoder is connected to one of 
the 1K(= 1024) rows of RAM. 
Each row stores 1 Byte. 
m=10 and n=1024 
m + n = 1034.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A multiplexer is placed between a group of 32 
registers and an accumulator to regulate data 
movement such that at any given point in time the 
content of only one register will move to the 
accumulator. The minimum number of select lines 
needed for the multiplexer is _____.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

Solution: 
There are 32 registers in all. At any given time, just 
one register must be selected. A  25x1 Multiplexer 
with 5 select lines selects one of the 32(= 25 )registers 
at a time depending on the selection input. The 
content of the selected register will be sent to the 
Accumulator through the output line.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider an eight -bit ripple -carry adder for 
computing the sum of A and B, where A and B are 
integers represented in 2’s complement form. If the 
decimal value of A is one, the decimal value of B that 
leads to the longest latency for the sum to stabilize is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -1


**Step-by-Step Explanation:**

Solution: 
Given A = 1 In decimal form, 
In 2's complement form, binary representation 
of A in binary form = 00000001. 
In case of ripple carry adder, for sum we need 2 
XOR gates. 
For the longest latency, we must have Cin = 1 
at every stage of the ripple carry adder. 
Here, we have to find the value of 𝐵 such that 
we get 𝐶in = 1 at every stage and 𝐶out  = 1 at the 
last stage. 
Maximum delay is when we take 𝐵 = −1 in 
decimal ( 111111111 − In binary) 
On adding A + B, we get a carry up to the carry 
flag I e. longest latency 
<!-- PAGE 180 -->
DIGITAL LOGIC


</details>

---


### Q9. [GATE CSE – 2016 SET-1 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a carry look ahead adder for adding two n-
bit integers, built using gates of fan -in at most two. 
The time to perform addition using this adder is:


- **(A)** Θ(1)

- **(B)** Θ(log(n))

- **(C)** Θ(√n)

- **(D)** Θ(n)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
In a Ripple Carry Adder (RCA), each stage must 
wait for the carry 
from the previous stage. Therefore, carry 
propagates sequentially 
through all n stages. 
Time complexity of RCA = Θ(n) 
Carry Look Ahead Adder (CLA): 
A CLA removes sequential carry propagation by 
computing carries 
in parallel using Generate and Propagate signals. 
For each bit i: 
Generate:   Gi = AiBi 
Propagate:  Pi = Ai ⊕ Bi 
Carry equation: 
Ci+1 = Gi + PiCi 
Using expansion: 
C1 = G0 + P0C0 
C2 = G1 + P1G0 + P1P0C0 
C3 = G2 + P2G1 + P2P1G0 + P2P1P0C0 
... 
Cn can be expressed directly using logic 
expressions. 
Fan-in restriction: 
The question states gates have fan-in ≤ 2. 
So large AND/OR operations cannot be done in 
one step. 
They must be built as a tree of 2-input gates. 
A tree structure computing n inputs has depth: 
Depth = log2(n) 
Hence carry computation delay grows 
logarithmically. 
Therefore, 
Total addition time ∝ depth of carry computation 
tree 
= Θ(log n)


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A half adder is implemented with XOR and AND 
gates. A full adder is implemented with two half 
adders and one OR gate. The propagation delay of 
an XOR gate is twice that of an AND/OR gate. The 
propagation delay of an AND/OR gate is 1.2 
microseconds. A 4-bit ripple-carry binary adder is 
implemented by using four full adders. The total 
propagation time of this 4 -bit binary adder in 
microseconds is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (12)


**Step-by-Step Explanation:**

Solution: 
  In Ripple carry adder, a stage doesn’t wait for 
the “full output” of the previous stage. It only waits 
for the previous stage’s carry to reach to itself. 
Delay of ExOR = 2 × (delay of AND/OR) 
               = 2 × 1.2 
               = 2.4 μs 
Now, Full Adder is implemented using 2 Half 
Adders (HA) and one OR gate. 
So, 
Delay of Sum (S) = 2 × delay of ExOR 
  (since sum output in FA uses two XOR gates) 
                 = 2 × 2.4 
                 = 4.8 μs 
Delay of Carry (C) = 1 XOR + 1 AND + 1 OR 
          (critical path for carry output in FA) 
                   = 2.4 + 1.2 + 1.2 
                   = 4.8 μs 
Now, Ripple Carry Adder is implemented using 4 
Full Adders. 
At t = 4.8 μs, 
both S0 and C1 are valid. 
To get S1, C1 must be valid (previous stage carry is 
needed). 
Delay of S1 = 4.8 + 2.4 
             = 7.2 μs 
Therefore, S1 is valid at 7.2 μs. 
Now, C2 is valid after 7.2 μs because C2 needs only 
AND and OR gates after C1. 
Delay of C2 = 4.8 + 2.4 
             = 7.2 μs 
Therefore, C2 is valid after 7.2 μs. 
To find S2, we need C2: 
Delay of S2 = Delay of C2 + delay of XOR 
= 7.2 + 2.4 
= 9.6 μs 
Therefore, S2 is valid after 9.6 μs. 
Delay of C3 = Delay of C2 + delay of AND and OR 
             = 7.2 + 2.4 
             = 9.6 μs 
Therefore, C3 is valid after 9.6 μs. 
Similarly, to find S3 we need C3: 
Delay of S3 = Delay of C3 + delay of XOR 
             = 9.6 + 2.4 
             = 12 μs 
Therefore, S3 is valid after 12 μs. 
Final propagation delay of the 4-bit Ripple Carry 
Adder = 12 μs 
<!-- PAGE 181 -->
DIGITAL LOGIC


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the 4-to-1 multiplexer with two select 
lines 𝑆1 and 𝑆0 given below 
 The minimal sum of products form of the output X 
is


- **(A)** P‾Q + QR‾ + PQ‾ R

- **(B)** P‾Q + P‾QR‾ + PQR‾ + PQ‾ R

- **(C)** PQR + P‾QR‾ + QR‾ + PQ‾ R

- **(D)** PQR



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
𝑆1 and 𝑆0 are used to select the input given to be 
given as output. 
𝐒1 𝐒0 Output 
0 0 0 
0 1 1 
1 0 R 
1 1 R′ 
 So, output becomes 1 for 
𝑆1′𝑆0 + 𝑆1𝑆0′ 𝑅 + 𝑆1𝑆0𝑅′
 = 𝑃′𝑄 + 𝑃𝑄′𝑅 + 𝑃𝑄𝑅′
 = 𝑃′𝑄 + 𝑃𝑄𝑅′ + 𝑃𝑄′𝑅
 = 𝑄(𝑃′ + 𝑃𝑅′) + 𝑃𝑄′𝑅
 = 𝑄(𝑃′ + 𝑅′) + 𝑃𝑄′𝑅(∵ 𝐴 + 𝐴′𝐵 = 𝐴 + 𝐵)
 = 𝑃′𝑄 + 𝑄𝑅′ + 𝑃𝑄′𝑅


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following combinational function 
block involving four Boolean variables x, y, a, b 
where x, a, b are inputs and y is the output.    
 f(x,y,a,b) 
 { 
     if(x is 1)y =a; 
     else y=b; 
 } 
 Which one of the following digital logic blocks is 
the most suitable for implementing this function?


- **(A)** Full adder

- **(B)** Priority encoder

- **(C)** Multiplexer

- **(D)** Flip-flop



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution:   
The given function block acts as a switch that 
selects between two different inputs based on a 
condition: 
 When x = 1, the output y takes the value of input 
a. 
 When x = 0 (the else condition), the output y 
takes the value of input b. 
This is the exact definition of a 2-to-1 
Multiplexer (MUX). 
 x acts as the select line. 
 a and b act as the data inputs. 
 y is the output. 
The Boolean expression for this logic is: 
y = xa + x’b 
Why the other options are incorrect: 
 (a) Full adder: This is an arithmetic circuit that 
adds three bits (two significant bits and a carry-in) 
to produce a sum and a carry-out. It does not 
select or route data. 
 (b) Priority encoder: This circuit compresses 
multiple binary inputs into a smaller number of 
outputs, outputting the binary code of the highest-
priority active input. 
 (d) Flip-flop: The problem explicitly states this 
is a combinational function block. A flip-flop is a 
sequential logic element used to store 
memory/state, which depends on a clock signal.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the following truth table, V = 1 if and only if the 
input is valid. In the following truth table,    V = 1 if 
and only if the input is valid. 
 Inputs 
𝐷0 𝐷1 𝐷2 𝐷3 
0 0 0 0 
1 0 0 0 
𝐱 1 0 0 
𝐱 𝐱 1 0 
𝐱 𝐱 𝐱 1 
 Output 
𝑋0 𝑋1 𝑉 
x x 0 
0 0 1 
0 1 1 
1 0 1 
1 1 1 
 What function does the truth table represent?


- **(A)** Priority encoder

- **(B)** Decoder

- **(C)** Multiplexer

- **(D)** Demultiplexer



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
It is a 22 × 2 encoder. The inputs have priorities. So, it 
is a priority encoder


</details>

---


### Q14. [GATE CSE – 2012 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The amount of ROM needed to implement a 4 bit 
multiplier is?


- **(A)** 64 bits

- **(B)** 128 bits

- **(C)** 1 Kbits

- **(D)** 2 Kbits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution:  
A ROM cannot be written. So, to implement a 4 -bit 
multiplier we must store all the possible combinations 
of 24×24 inputs and their corresponding 8 output bits 
giving a total of 2 4×24×8 bits = 2048 bits. So, (D) is 
the answer. 
PS: We are not storing the input bits explicitly -- those 
are considered in order while accessing the output 8 
bits. In this way, by storing all the possible outputs in 
order we can avoid storing the input combinations.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The Boolean expression of the output of the 
multiplexer shown below is


- **(A)** (𝑃 ⊕  𝑄 ⊕  𝑅)̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅

- **(B)** 𝑃 ⊕  𝑄 ⊕  𝑅

- **(C)** 𝑃 +  𝑄̅  +  𝑅

- **(D)** (𝑃 +  𝑄 +  𝑅)̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅̅



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
f = 𝑆1̅ 𝑆0̅̅̅𝑅 + 𝑆1̅ 𝑆0𝑅̅ + 𝑆1𝑆0̅̅̅𝑅 ̅ +  𝑆1𝑆0𝑅 
  = Q'P'R + Q'PR' + QP'R' + QPR 
  = Q'(P ⊕ R) + Q(P ⊕ R)' 
  = Q ⊕ P ⊕ R = P ⊕ Q ⊕ R


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following adders reduces carry 
propagation delay by generating carries in 
advance?


- **(A)** Ripple Carry Adder

- **(B)** Carry Lookahead Adder

- **(C)** Serial Adder

- **(D)** Half Adder



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
The Carry Lookahead Adder (CLA) is specifically 
designed to overcome the  carry propagation 
delay found in traditional adders. It does this by using 
a logic circuit that  generates carries in 
advance simultaneously for all stages, rather than 
waiting for a carry to "ripple" through each preceding 
bit 
Gi = AiBi 
Propagate: 
Pi = Ai ⊕ Bi 
Carry equation: 
Ci+1 = Gi + PiCi 
Because carries are generated in parallel, delay is 
significantly reduced. 
<!-- PAGE 182 -->
DIGITAL LOGIC


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The line in the following figure is permanently 
connected to the ground. 
 Which of the following inputs (X1 X2 X3 X4) 
will detect the fault?


- **(A)** 0000

- **(B)** 0111

- **(C)** 1111

- **(D)** None of these



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
To detect the faull, we should get an 
unexpected output. The final gate here is a 
NOR gate which produces output 0 if either of 
its input is 1 and else 1 , ie, the output will be 
0 for inputs (0,1), (1,0) and (1,1) and output 
will be 1 for (0,0). 
By grounding 𝑇 is at 0 . So, we can ignore the 
inputs (1,0) and (0,0) to the final NOR gate 
as they won't be detecting faults. Now, 
expected (1,1) input will become (1,0) due to 
grounding of 𝑇 but produces same output 0 as 
for (1,1). Hence this also cannot detect the 
defect. So, to detect the defect, the input to the 
final gate must be (0,1) which is expected to 
produce a 0 but will produce a 1 due to 
grounding of 𝑇. 
Now, for (0,1) input for the final gate, we 
must have, 
𝑋3 = 𝑋4 = 1 
But if 𝑋4 = 1,the OR gate makes 1 output 
and we won't get ( 0,1 ) input for the final 
gate. This means, no input sequence can 
detect the fault of the circuit. 
Alternatively, we can write equation for the 
circuit as 
(((𝑥1 ⋅ 𝑥2 ⋅ 𝑥3)′ + 𝑥4) + 𝑥3 ⋅ 𝑥4)′
 = ((𝑥1 ⋅ 𝑥2 ⋅ 𝑥3)′ + 𝑥4)′ ⋅ (𝑥3 ⋅ 𝑥4)′
 = 𝑥1 ⋅ 𝑥2 ⋅ 𝑥3 ⋅ 𝑥4′ ⋅ (𝑥3′ + 𝑥4′ )
 = 𝑥1 ⋅ 𝑥2 ⋅ 𝑥3 ⋅ 𝑥4′
For the faulty circuit output will be 
((𝑥1 ⋅ 𝑥2 ⋅ 𝑥3)′ + 𝑥4)′ = 𝑥1 ⋅ 𝑥2 ⋅ 𝑥3 ⋅ 𝑥4′  
So, there is no effect of 𝑇 being grounded 
here. Answer is D option.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In a look -ahead carry generator, the carry generates 
function G i and the carry propagate function P i for 
inputs Ai and Bi are given by: 
 Pi = Ai ⊕ Bi and Gi = AiBi 
 The expressions for the sum bit S i and the carry bit 
Ci+1 of the look ahead carry adder are given by: 
 Si = Pi ⊕ Ci and Ci+1 = Gi + PiCi, where C0 is the input 
carry. 
 Consider a two-level logic implementation of the 
look-ahead carry generator. Assume that all Pi are 
available for the carry generator circuit and that the 
AND and OR gates can have any number of inputs. 
The number of AND gates and OR gates needed to 
implement the look-ahead carry generator for a 4-bit 
adder with S3, S2, S1, S0 and C4 as its outputs are 
respectively:


- **(A)** 6,3

- **(B)** 10,4

- **(C)** 6,4

- **(D)** 10,5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Solution:  
          𝐶1 = 𝐺0 + 𝐶0 ⋅ 𝑃0
𝐶2 = 𝐺1 + 𝐺0 ⋅ 𝑃1 + 𝐶0 ⋅ 𝑃0 ⋅ 𝑃1
𝐶3 = 𝐺2 + 𝐺1 ⋅ 𝑃2 + 𝐺0 ⋅ 𝑃1 ⋅ 𝑃2 + 𝐶0 ⋅ 𝑃0 ⋅ 𝑃1 ⋅ 𝑃2
𝐶4 = 𝐺3 + 𝐺2 ⋅ 𝑃3 + 𝐺1 ⋅ 𝑃2 ⋅ 𝑃3 + 𝐺0 ⋅  
𝑃1 ⋅ 𝑃2 ⋅ 𝑃3 + 𝐶0 ⋅ 𝑃0 ⋅ 𝑃1 ⋅ 𝑃2 ⋅ 𝑃3 
Carry is generated in 3rd  stage OR 
Carry is generated in 2sd  stage AND propagated 
through 3rd  stage OR 
Carry is generated in 1st  stage AND propagated 
through 2st , 3rd  stage OR 
Carry is generated in 0th  stage AND propagated 
through 1∗, 2nd , 3rd  stage OR 
Initial carry 𝐶0 is propagated through 
0th , 1nt , 2nd , 3rd  stage. 
 1 AND & 1 OR gate for 𝐶1 
 2 AND & 1 OR gate for C2 
 3 AND & 1 OR gate for C3 
 4 AND & 1 OR gale for 𝐶4 
To implement the look-ahead carry generator, 10 
AND & 4 OR gates are required. 
Alternate Solution: 
Number of AND Gate required is given by = n(n+1)/2 
 = 4*5/2 
 =10 
      Number of OR Gate is given by = n 
 n=4


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the circuit below. Which one of the 
following options correctly represents f(x,y,z)


- **(A)** xz̅  + xy + y̅ z

- **(B)** xz̅  + xy +y̅ z̅

- **(C)** xz + xy + y̅ z̅

- **(D)** xz + xȳ + y̅ z



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Solution: 
First MUX (left): 𝑓1 = 𝑧̄‾𝑥 + 𝑧̄𝑦 
Second MUX (right): 𝑓 = 𝑦‾𝑓1 + 𝑦𝑥 
𝑓 = 𝑦‾(𝑥𝑧̄‾ + 𝑧̄𝑦) + 𝑥𝑦 
𝑓 = 𝑥𝑦‾𝑧̄‾ + 0 + 𝑥𝑦 
𝑓 = 𝑥(𝑦‾𝑧̄‾ + 𝑦) 
𝑓 = 𝑥(𝑦 + 𝑧̄‾) = 𝐱𝐲 + 𝐱𝑧̄‾ 
Using the Consensus Theorem (𝐴𝐵 + 𝐵𝐶 + 𝐴𝐶 =
𝐴𝐵 + 𝐵𝐶), we can expand our result: 
 Add the redundant consensus term between 𝑥𝑦 
and 𝑥𝑧̄‾ using 𝑦‾ : 
𝐱𝐲 + 𝐱𝐳 + 𝐲𝐳 
<!-- PAGE 183 -->
DIGITAL LOGIC


</details>

---


### Q20. [GATE CSE – 2006 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The majority function is a Boolean function 
f(x,y,z)that takes the value 1 whenever a majority of 
the variables x, y, z are 1. In the circuit diagram for


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Solution: 
xP + x̅ Q = f 
Or  x(y op1 z) + x̅ (y op2 z) = f   → (1) 
f ⇒ xz + xy + yz 
⇒ xz + xy + (x + x̅ )yz 
⇒ xz + xy + xyz + x̅ yz 
⇒ x(z + y + yz) + x̅ yz 
⇒ x[z + y(1 + z)] + x̅ (y • z) 
⇒ x(z + y) + x̅ (y • z)   → (2) 
Comparing (1) and (2) we get, 
OP1 = + (OR) 
OP2 = • (AND)


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Given two three-bit numbers a 2 a1 a0 and b 2 b1 b0 
and c the carry in, the function that represents the 
carry generate function when these two numbers 
are added is:


- **(A)** a2b2 + a2a1b1 + a2a1a0b0 + a2a0b1b0 + a1b2b1 + 
a1a0b2b0 + a0b2b1b0

- **(B)** a2b2 + a2b1b0 + a2a1b1b0 + a1a0b2b1 + a1a0b2 + 
a1a0b2b0 + a2a0b1b0

- **(C)** a2 + b2 + (a2 ⊕ b2) (a1 + b1 + (a1 ⊕ b1)(a0 + b0))

- **(D)** a2b2 + a̅ 2a1b1 + a̅ 2a1a0b0 + a̅ 2a0b1b0 + a1b2b1 + 
a̅ 1a0b2b0 + a0b2b1b0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
For any bit position 'i', the intermediate signals are: 
Carry Generate (Gi) = ai · bi 
Carry Propagate (Pi) = ai + bi 
For a 3 -bit block (bits 0, 1, and 2), a carry is 
generated outwards if the most significant bit 
generates one, or if a lower bit generates one and it 
propagates all the way through. 
Gout = G2 + P2·G1 + P2·P1·G0 
Gout = a2b2 + (a2 + b2)(a1b1) + (a2 + b2)(a1 + b1)(a0b0) 
Expanding: (a2 + b2)(a1b1) 
= a2a1b1 + b2a1b1 
Expanding: (a2 + b2)(a1 + b1)(a0b0) 
First, multiply the binomials: 
(a2a1 + a2b1 + b2a1 + b2b1) 
Next, multiply by a0b0: 
a2a1a0b0 + a2b1a0b0 + b2a1a0b0 + b2b1a0b0 
Putting all the expanded terms together: 
Gout = a2b2 + a2a1b1 + b2a1b1 + a2a1a0b0 + a2b1a0b0 + 
b2a1a0b0 + b2b1a0b0 
<!-- PAGE 184 -->
SEQUENTIAL CIRCUIT


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a 2 -bit saturating up/down counter that 
performs the saturating up count when the input P 
is 0, and the saturating down count when P is 1. The 
Next State table of the counter is as shown. The 
counter is built as a synchronous sequential circuit 
using D flip-flops. 
Input Current 
State 
Next 
State 
P Q1 Q0 Q1+ Q0+ 
0 0 0 0 1 
0 0 1 1 0 
0 1 0 1 1 
0 1 1 1 1 
1 0 0 0 0 
1 0 1 0 0 
1 1 0 0 1 
1 1 1 1 0


- **(A)** 𝐷1 = 𝑃𝑄1 + 𝑃‾𝑄0 + 𝑄1𝑄0 
  𝐷0 = 𝑃𝑄0 + 𝑃‾𝑄1 + 𝑄1𝑄0

- **(B)** 𝐷1 = 𝑃̅𝑄1 + 𝑃̅𝑄0 + 𝑄1𝑄0 
   𝐷0 = 𝑃̅𝑄0̅̅̅̅ + 𝑃̅𝑄1 + 𝑄1𝑄0

- **(C)** 𝐷1 = 𝑃‾𝑄‾1 + 𝑃‾𝑄0 + 𝑄1𝑄0 
   𝐷0 = 𝑃‾𝑄0 + 𝑃‾𝑄1 + 𝑄1𝑄‾0

- **(D)** 𝐷1 = 𝑃Q1 + 𝑃‾𝑄0 + 𝑄1𝑄0 
   𝐷0 = 𝑃𝑄0 + 𝑃‾𝑄1 + 𝑄1𝑄0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
For a D flip-flop, the characteristic equation is         
Qnext = D. Therefore, the required inputs D1 and D0 
are exactly equal to the next state values Q1_next and 
Q0_next respectively. 
Let's extract the min-terms from the provided Next 
State table and simplify them using Boolean algebra 
(or K-maps). The variables are P, Q1, and Q0. 
1. Solving for D1 (Q1_next) 
Looking at the Q1_next column, the output is 1 for the 
following input combinations of P, Q1, Q0: 
0, 0, 1 -> m1 
0, 1, 0 -> m2 
0, 1, 1 -> m3 
1, 1, 1 -> m7 
The boolean expression in sum-of-min-terms form 
is: D1 = Sum of min-terms (1, 2, 3, 7) 
Now, let's group these min-terms to simplify the 
expression: 
 Group 1 (m1 and m3): P'Q1'Q0 + P'Q1Q0 = P'Q0 
 Group 2 (m2 and m3): P'Q1Q0' + P'Q1Q0 = P'Q1 
 Group 3 (m3 and m7): P'Q1Q0 + PQ1Q0 = Q1Q0 
Combining these simplified groups gives us the final 
expression for D1: D1 = P'Q1 + P'Q0 + Q1Q0 
2. Solving for D0 (Q0_next) 
Looking at the Q0_next column, the output is 1 for the 
following input combinations of P, Q1, Q0: 
 0, 0, 0 -> m0 
 0, 1, 0 -> m2 
 0, 1, 1 -> m3 
 1, 1, 0 -> m6 
The boolean expression in sum-of-min-terms form 
is: D0 = Sum of min-terms (0, 2, 3, 6) 
Now, let's group these min-terms to simplify: 
Group 1 (m0 and m2): P'Q1'Q0' + P'Q1Q0' = P'Q0' 
Group 2 (m2 and m3): P'Q1Q0' + P'Q1Q0 = P'Q1 
Group 3 (m2 and m6): P'Q1Q0' + PQ1Q0' = Q1Q0' 
Combining these simplified groups gives us the final 
expression for D0: D0 = P'Q0' + P'Q1 + Q1Q0' 
Conclusion 
Comparing our derived equations to the given 
options: 
 D1 = P'Q1 + P'Q0 + Q1Q0 
 D0 = P'Q0' + P'Q1 + Q1Q0' 
GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 190 -->
DIGITAL LOGIC


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the given sequential circuit designed 
using D -Flip-flops. The circuit is initialized with 
some value (initial state). The number of distinct 
states the circuit will go through before returning to 
the initial state is . (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (8)


**Step-by-Step Explanation:**

Solution:     
Characteristic of D Flip-Flop: 
Q(next) = D 
Let the outputs be: 
Q0, Q1, Q2, Q3 
Given connections: 
D0 = Q3' 
⇒ Q0(next) = Q3' 
D1 = Q0 
⇒ Q1(next) = Q0 
D2 = Q1 
⇒ Q2(next) = Q1 
D3 = Q2 
⇒ Q3(next) = Q2 
Final Next-State Equations: 
Q0(next) = Q3' 
Q1(next) = Q0 
Q2(next) = Q1 
Q3(next) = Q2Assume initial state value as 0 : 
𝐷0 𝐷1 𝐷2 𝐷3 Value 
0 0 0 0 0 
1 0 0 0 8 
1 1 0 0 12 
1 1 1 0 14 
1 1 1 1 15 
0 1 1 1 7 
0 0 1 1 3 
0 0 0 1 1 
0 0 0 0 0 
Assume initial state value as 2: 
𝑫𝟎 𝑫𝟏 𝐷2 𝐷3 Value 
0 0 1 0 2 
1 0 0 1 9 
0 1 0 0 4 
1 0 1 0 10 
1 1 0 1 13 
0 1 1 0 6 
1 0 1 1 11 
0 1 0 1 5 
0 0 1 0 2 
The number of distinct states the circuit will 
go through before returning back to the initial 
state is 8.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In a 4-bit ripple counter, if the period of the waveform 
at the last flip -flop is 64 microseconds, then the 
frequency of the ripple counter in kHz is ________. 
(Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (250)


**Step-by-Step Explanation:**

Solution :  
𝑓last = 1𝑇lest 
𝑓last = 164 × 10−6
𝑓last = 15625 Hz = 15.625kHz
𝑓last =
𝑓lnput 
24 =
𝑓liput 
𝑓linput = 𝑓last × 16
         𝑓input = 15625 × 16 = 250000 Hz = 250kHz


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The output of a 2-input multiplexer is connected back 
to one of its inputs as shown in the figure. 
 Match the functional equivalence of this circuit to 
one of the following options


- **(A)** D Flip-flop

- **(B)** D Latch

- **(C)** Half-adder

- **(D)** Demultiplexer



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
 The circuit uses a multiplexer and the selection signal 
S determines whether the output Q is updated 
(transparent mode, S=1) or retained (hold mode, S=0). 
There is no clock signal in this circuit. Without a 
clock, edge-triggering is not possible, so this circuit 
cannot function as a flip-flop. 
Instead, the circuit operates based on the level of S, 
which aligns with the functionality of a D Latch.


</details>

---


### Q5. [GATE CSE – 2023 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a digital logic circuit consisting of three 2-
to-1 multiplexers M1, M2, and M3 as shown 
below. X1 and X2 are inputs of M1. X3 and X4 are


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (4)


**Step-by-Step Explanation:**

Solution: The following characteristic table : 
 The output Y is high for the inputs 000,010,100,110. 
Therefore the correct Answer is 4


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a sequential digital circuit consisting of T 
flip-flops and D flip -flops as shown in the figure. 
CLKIN is the clock input to the circuit. At the 
beginning, Q1, Q2 and Q3 have values 0, 1 and 1, 
respectively. Which one of the given values of (Q1, 
Q2, Q3) can NEVER be obtained w ith this digital 
circuit?


- **(A)** (0, 0, 1)

- **(B)** (1, 0, 0)

- **(C)** (1, 0, 1)

- **(D)** (1, 1, 1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: From the given 3 sale courter made from 
𝑇 splops and 𝐷 ipfops, the nex inpt sequence are as 
tolous 
𝑇0 − 𝑄‾2 
𝐷1 − 𝑄0 
𝑇3 − 𝑄1 
<!-- PAGE 191 -->
DIGITAL LOGIC 
 we can see  from the above table g iven co unter 
contain sequence li ke 011 → 000 → 100 →
010 → 101 → 111 → 110. The s tate (001 is 
missing.)


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a 3-bit counter, designed using T flip-flops, 
as shown below : 
 Assuming the initial state of the counter given by 
PQR as 000, what are the next three states?


- **(A)** 001, 010, 111

- **(B)** 011, 101, 000

- **(C)** 001, 010, 000

- **(D)** 011, 101, 111



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution : 
Given Synchronous Sequential circuit (Same clock 
pulse applied) has 3-bit T flip flop so using 3 bit we 
have 2 3=8 combinations. Given P(MSB) and 
R(LSB). Construct Characteristic table. Here 
TP=Rn , TQ=Pn' , TQ=Qn' . 
Previous 
state 
Next State  
𝐏𝐧 𝐐𝐧 𝐑𝐧 𝐏𝐧+1 𝐐𝐧+1 𝐑𝐧+𝟏 TP TQ 𝐓𝐑 
0 0 0 0 1 1 0 1 1 
0 0 1 1 1 0 1 1 1 
0 1 0 0 0 0 0 1 0 
0 1 1 1 0 1 1 1 0 
1 0 0 1 0 1 0 0 1 
1 0 1 0 0 0 1 0 1 
1 1 0 1 1 0 0 0 0 
1 1 1 0 1 1 1 0 0 
 Using function table of T flip flop: 
𝐓 𝐐𝑛+1 
0 𝑄𝑛 
1 𝑄𝑛 
 We can obtain next state when T=0 previous state 
retains and when T=1 T flip flop toggles the 
previous state (i.e complement of previous state). 
 For example : TP=0 then Pn+1=0 as Pn=0, T=1 
then Pn+1=1 as Pn=0. PQR as initial state  
 000->011->101->000. So next three states (000 as 
initial state ) will be 011,101,000.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the sequential circuit shown in the figure, 
where both flip-flops used are positive edge-triggered 
D flip -flops. The  number of states in the state 
transition diagram of this circuit that have a transition 
back to the same state on some value of "in" is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (2)


**Step-by-Step Explanation:**

Solution: State Table     
Q1 Q0 in D1 D0 Q1N Q0N 
0 0 0 0 0 0 0 
0 0 1 0 1 0 1 
0 1 0 1 0 1 0 
0 1 1 1 1 1 1 
1 0 0 0 0 0 0 
1 0 1 0 1 0 1 
1 1 0 1 0 1 0 
1 1 1 1 1 1 1


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The next state table of a 2-bit saturating up-counter is 
given below.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
 By using above excitation table 
 T1 = Q′1Q0 
 T0 = (Q1Q0)’ = Q′1 + Q0’


</details>

---


### Q1. [GATE CSE – 2023 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Q0 Q1+ Q0+ 
0 0 0 1 
0 1 1 0 
1 0 1 1 
1 1 1 1


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: 
For a D flip-flop, the characteristic equation is         
Qnext = D. Therefore, the required inputs D1 and D0 
are exactly equal to the next state values Q1_next and 
Q0_next respectively. 
Let's extract the min-terms from the provided Next 
State table and simplify them using Boolean algebra 
(or K-maps). The variables are P, Q1, and Q0. 
1. Solving for D1 (Q1_next) 
Looking at the Q1_next column, the output is 1 for the 
following input combinations of P, Q1, Q0: 
0, 0, 1 -> m1 
0, 1, 0 -> m2 
0, 1, 1 -> m3 
1, 1, 1 -> m7 
The boolean expression in sum-of-min-terms form 
is: D1 = Sum of min-terms (1, 2, 3, 7) 
Now, let's group these min-terms to simplify the 
expression: 
 Group 1 (m1 and m3): P'Q1'Q0 + P'Q1Q0 = P'Q0 
 Group 2 (m2 and m3): P'Q1Q0' + P'Q1Q0 = P'Q1 
 Group 3 (m3 and m7): P'Q1Q0 + PQ1Q0 = Q1Q0 
Combining these simplified groups gives us the final 
expression for D1: D1 = P'Q1 + P'Q0 + Q1Q0 
2. Solving for D0 (Q0_next) 
Looking at the Q0_next column, the output is 1 for the 
following input combinations of P, Q1, Q0: 
 0, 0, 0 -> m0 
 0, 1, 0 -> m2 
 0, 1, 1 -> m3 
 1, 1, 0 -> m6 
The boolean expression in sum-of-min-terms form 
is: D0 = Sum of min-terms (0, 2, 3, 6) 
Now, let's group these min-terms to simplify: 
Group 1 (m0 and m2): P'Q1'Q0' + P'Q1Q0' = P'Q0' 
Group 2 (m2 and m3): P'Q1Q0' + P'Q1Q0 = P'Q1 
Group 3 (m2 and m6): P'Q1Q0' + PQ1Q0' = Q1Q0' 
Combining these simplified groups gives us the final 
expression for D0: D0 = P'Q0' + P'Q1 + Q1Q0' 
Conclusion 
Comparing our derived equations to the given 
options: 
 D1 = P'Q1 + P'Q0 + Q1Q0 
 D0 = P'Q0' + P'Q1 + Q1Q0' 
GATE CSE – 2005 MCQ (1-MARKS) 
<!-- PAGE 190 -->
DIGITAL LOGIC


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a combination of T and D flip -flops 
connected as shown below. The output of the D 
flip-flop is connected to the input of the T flip-flop 
and the output of the T flip-flop is connected to the 
input of the D flip -flop. Initially, both Q0 and Q1 
are set to 1 (before the 1st clock cycle). The outputs


- **(A)** 𝑄1𝑄0 after the 3rd  cycle are 11 and after the 
4th  cycle are 00 respectively

- **(B)** 𝑄1𝑄0 after the 3rd  cycle are 11 and after the 
4th  cycle are 01 respectively

- **(C)** 𝑄1𝑄0 after the 3rd  cycle are 00 and after the 
4th  cycle are 11 respectively

- **(D)** 𝑄1𝑄0 after the 3rd  cycle are 01 and after the 
4th  cycle are 01 respectively



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Solution: Since it is synchronous so, after every clock 
cycle T will toggle if input is 1 and will be in Hold 
State if input is 0. D flip-flop’s output always follows 
input. 
 After 1 clock cycles    ; Q1 = 0 (Toggle) Q0 =1 
 After 2 clock cycles   ; Q1 = 1  (Toggle) Q0 =0 
 After 3  clock cycles    ; Q1 = 1 (Hold)  Q0 =1 
After 4 clock cycles    ; Q1 = 0 (Toggle) Q0 =1 
<!-- PAGE 192 -->
DIGITAL LOGIC


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


We want to design a synchronous counter that 
counts the sequence 0-1-0-2-0-3 and then repeats. 
The minimum number of J-K ﬂip-ﬂops required to 
implement this counter is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (4)


**Step-by-Step Explanation:**

Solution: 
 Given sequence is 0-1-0-2-0-3 
 There are 3 transitions from 0. Hence ⌈log23⌉ = 2 
bits must be added to the existing 2 bits to represent 
4 unique states.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A positive edge-triggered D flip-flop is connected to 
a positive edge-triggered JK flipflop as follows. The 
Q output of the D flip-flop is connected to both the J 
and K inputs of the JK flip -flop, while the Q output 
of the JK flip-flop is connected to the input of the D 
flip-flop. Initially, the output of the D flip -flop is set 
to logic one and the output of the JK flip -flop is 
cleared. Which one of the following is the bit 
sequence (including the initial state) generated at the 
Q output of the JK flip -flop when the flip -flops are 
connected to a free-running common clock? Assume 
that J = K = 1 is the toggle mode and J = K = 0 is the 
state-holding mode of the JK flip-flop. Both the flip-
flops have non-zero propagation delays.


- **(A)** 0110110..

- **(B)** 0100100...

- **(C)** 01110110...

- **(D)** 011001100...



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
 Initially Q output of D - FF  = 1 Initially Q output 
of JK - FF  = 0 Now with the help of present state 
and next state table we can see what is happening 
in circuit. 
 Toggle: J = K = 1     and     Hold : J = K = 0


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a 4-bit Johnson counter with an initial value 
of 0000. The counting sequence of this counter is


- **(A)** 0, 1, 3, 7, 15, 14, 12, 8, 0

- **(B)** 0, 1, 3, 5, 7, 9, 11, 13, 15, 0

- **(C)** 0, 2, 4, 6, 8, 10, 12, 14, 0

- **(D)** 0, 8, 12, 14, 15, 7, 3, 1, 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: In a Johnson’s counter next MSB= 
complement of LSB and a circular right shift 
operation has to be done to get the next state. The 
state sequence is  0,8,12,14,15,7,3,1,0.


</details>

---


### Q14. [GATE CSE – 2014 SET-2 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let k = 2n. A circuit is built by giving the output of 
an n -bit binary counter as input to an n -to-2n bit 
decoder. This circuit is equivalent to a ?


- **(A)** k-bit binary up counter

- **(B)** k-bit binary down counter

- **(C)** k-bit ring counter

- **(D)** k-bit Johnson counter



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
 An 𝑛-bit counter generates all states from 0to 2𝑛 − 1 
 Example (n = 2) 
Count Counter Output (A1 A0) 
0 00 
1 01 
2 10 
3 11 
 Step 2: Decoder Output (n → 2ⁿ) 
 Each input activates exactly one output line (one-
hot) 
 Decoder Output Table: 
A1 A0 D3 D2 D1 D0 
00 0001 
01 0010 
10 0100 
11 1000 
 Step 3: Observe Behaviour: 
 Sequence of outputs: 
0001 → 0010 → 0100 → 1000 → 0001


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The above synchronous sequential circuit built 
using JK flip-flops is initialized with Q2Q1Q0 = 000. 
The state sequence for this circuit for the next 3 
clock cycles is


- **(A)** 001, 010, 011

- **(B)** 111, 110, 101

- **(C)** 100, 110, 111

- **(D)** 100, 011, 001



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution:


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The minimum number of D flip-flops needed to 
design a mod-258 counter is


- **(A)** 9

- **(B)** 8

- **(C)** 512

- **(D)** 258



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
 Let n is the number of flip-flops. 
 The max Mod values is 2n. 
 So 2n ≥ 258 ⇒ n = 9 
<!-- PAGE 193 -->
DIGITAL LOGIC


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following circuit involving three D -
type flip -flops used in a certain type of counter 
configuration 
 If at some instance prior to the occurrence of the 
clock edge, and have a value , and respectively, 
what shall be the value of after the clock edge?


- **(A)** 000

- **(B)** 001

- **(C)** 010

- **(D)** 011



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
As in D-flip-flop, next output is  Q⁺ = D 
Pi+1 = Ri 
Qi+1 = (Pi + Ri)' 
Ri+1 = Ri'Qi 
 So, total number of distinct outputs = 4


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In the sequential circuit shown below, if the initial 
value of the output is . What are the next four values 
of ?


- **(A)** 11, 10, 01, 00

- **(B)** 10, 11, 01, 00

- **(C)** 10, 00, 01, 11

- **(D)** 11, 10, 00, 01



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution:


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the final value stored in the linear feedback 
shift register if the input is 1011101?


- **(A)** 0110

- **(B)** 1011

- **(C)** 1101

- **(D)** 1111



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
 The four bit register 
contains: 1011,1101,0110,1011,1101, 𝟎𝟏𝟏𝟎 afte
r each shift.


</details>

---


### Q20. [GATE CSE – 2010 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The control signal functions of a - binary counter are 
given below (where is “don’t care”):


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
Control Signals: 
 Load = 0 and Count = 1: This means the 
counter will ignore any parallel data inputs and 
proceed to count to the Next State. 
 Input (0011): The parallel load input is ignored 
because the Load signal is disabled (Load = 0). 
State Transition Table: 
Decimal Output(Q3Q2Q1Q0) Status 
0 0 0 0 0 Valid State (Initial) 
1 0 0 0 1 Valid State 
2 0 0 1 0 Valid State 
3 0 0 1 1 Valid State 
4 0 1 0 0 Valid State 
5 ~~0 1 0 1~~ CLEAR (Transient 
State / Resets)


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


You are given a free running clock with a duty 
cycle of 50% and a digital waveform f which 
changes only at the negative edge of the clock. 
Which one of the following circuits (using clocked 
D flip-flops) will delay the phase of f by 180°?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** ( C )


**Step-by-Step Explanation:**

Solution:


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the circuit in the diagram. The operator 
represents Ex-OR. The D flip -flops are initialized 
to zeroes (cleared) 
 The following data: is supplied to the “data” 
terminal in nine clock cycles. After that the values of 
q2q1qo are:


- **(A)** 000

- **(B)** 001

- **(C)** 010

- **(D)** 101



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Solution: 
<!-- PAGE 194 -->
DIGITAL LOGIC


</details>

---


### Q23. [GATE CSE – 2005 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following circuit 
 The flip-flops are positive edge triggered s. Each 
state is designated as a two-bit string . Let the initial 
state be The state transition sequence is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Solution: 
Clearly, Q0 alternates in every clock cycle as Q0' 
is fed as input and it is D flipflop. 
Q1 becomes 1 if its previous value and current Q0 
differs (EXOR). 
So, the sequence of transitions will be : 00 → 11 
→ 01 → 10 → 00, 
(D) choice.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following circuit involving a positive 
edge triggered D FF. 
 Consider the following timing diagram. Let 
represents the logic level on the line in the -th clock 
period 
 Let represent the complement of . The correct 
output sequence on over the clock periods through 
is:


- **(A)** A0 A1 A1′ A3 A4

- **(B)** A0 A1 A2 A3 A4

- **(C)** A1 A2 A2′ A3 A4

- **(D)** A1 A2 A3 A4 A5′



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Solution: 
Therefore, the input to the D flip-flop is: 
D = AX + X̅ Q̅  
For a positive edge-triggered D flip-flop, the next 
state Q(n+1) is determined by the value of D just 
before the clock edge. Q(n+1) = An·Xn + X̅ n·Q̅ n 
This gives us two operational modes based on the 
value of X: 
If X = 1: Q(n+1) = A·(1) + (0)·Q̅  →A (The output 
takes the previous value of A). 
If X = 0: Q(n+1) = A·(0) + (1)·Q̅ →Q̅  (The output 
toggles its previous state). 
 For Period 1 (Output Q1): Look at inputs during 
Period 0: X0 = 1. Since X = 1, it loads the 
value of A. Result: Q1 = A0 
 For Period 2 (Output Q2): Look at inputs during 
Period 1: X1 = 1. Since X = 1, it loads the 
value of A. Result: Q2 = A1 
 For Period 3 (Output Q3): Look at inputs during 
Period 2: X2 = 0. Since X = 0, it toggles the 
previous state. We know the previous state Q2 
= A1, so the complement is A1'. Result: Q3 = 
A1' 
 For Period 4 (Output Q4): Look at inputs during 
Period 3: X3 = 1. Since X = 1, it loads the 
value of A. Result: Q4 = A3 
 For Period 5 (Output Q5): Look at inputs during 
Period 4: X4 = 1. Since X = 1, it loads the 
value of A. Result: Q5 = A4. 
  The correct output sequence on Y over the 
clock periods 1 through 5 is: A0, A1, A1', A3, A4


</details>

---

