# Computer Organization & Architecture


> **Subject:** Computer Organization & Architecture  

> **Pages in Book:** 451–528  

> **Total Modules:** 6


## Topics in this Subject


## Topic 1: GATE CSE - 2019 MC


### Q1. [GATE CSE]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


A 4 kilobyte (KB) byte -addressable memory is 
realized using four 1 KB memory blocks. Two 
input address lines (IA4 and IA3) are connected 
to the chip select (CS) port of these memory 
blocks through a decoder as shown in the figure. 
The remaining ten input address lines from IA11-
IA0 are connected to the address port of these 
blocks. The chip select (CS) is active high. 
The input memory addresses (IA11-IA0), in 
decimal, for the starting locations (Addr = 0 ) of 
each block (indicated as X1, X2, X3, X4 in the 
figure) are among the options given below. 
Which one of the following options is 
CORRECT?


- **(A)** (0,1,2,3)

- **(B)** (0,1024,2048,3072)

- **(C)** (0,8,16,24)

- **(D)** (0,0,0,0)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Only IA4 and IA3 go to decoder → they select 
block 
Remaining IA11–IA5 and IA2–IA0 go to 
memory ⇒ total = 10 bits 
So internal address bits are NOT contiguous, but 
still 10 bits → block size = 1 KB 
So address format becomes: 
[ IA11 … IA5 ][ IA4 IA3 ][ IA2 … IA0 ] 
Compute base addresses (put IA2–IA0 = 000 
and IA11–IA5 = 0000000): 
IA4 IA3 = 00 → 0000000 00 000 → 0 
IA4 IA3 = 01 → 0000000 01 000 → 8 
IA4 IA3 = 10 → 0000000 10 000 → 16 
IA4 IA3 = 11 → 0000000 11 000 → 24 
Answer: C 
(0, 8, 16, 24)


</details>

---


### Q2. [GATE CSE]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


If the numerical value of a 2-byte unsigned integer 
on a little endian computer is 255 more than that 
on a big endian computer, which of the following 
choices represent(s) the unsigned integer on a little 
endian computer?


- **(A)** 0x6665

- **(B)** 0x 0001

- **(C)** 0x4243

- **(D)** 0x 0100



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A, D)


**Step-by-Step Explanation:**

1. Understanding Memory Layout 
Let the 2-byte unsigned integer be stored in memory 
at consecutive addresses 𝐴 and 𝐴 + 1. 
Let the byte at the lower address 𝐴 be 𝐵0 and the 
byte at the higher address 𝐴 + 1 be 𝐵1. 
 Little Endian Computer: Stores the Least 
Significant Byte (LSB) at the lower address. 
LSB = 𝐵0 
MSB = 𝐵1 
Value 𝐿𝐸 = (𝐵1 × 256) + 𝐵0 
 Big Endian Computer: Stores the Most 
Significant Byte (MSB) at the lower address. 
MSB = 𝐵0 
LSB = 𝐵1 
Value 𝐵𝐸 = (𝐵0 × 256) + 𝐵1 
2. Applying the Given Condition 
The problem states that the numerical value on the 
little endian computer is 255 more than on  the big 
endian computer. 
Value𝐿𝐸 = Value 𝐵𝐸 + 255 
Substitute the equations from step 1: 
(𝐵1 × 256) + 𝐵0 = (𝐵0 × 256) + 𝐵1 + 255 
Now, solve for the relationship between 𝐵1 and 𝐵0 : 
256𝐵1 − 𝐵1 − 256𝐵0 + 𝐵0 = 255 
255𝐵1 − 255𝐵0 = 255 
255(𝐵1 − 𝐵0) = 255 
𝐵1 − 𝐵0 = 1 
A. 𝟎 × 𝟔𝟔𝟔𝟓 
𝐵1 = 6616 and 𝐵0 = 6516 
6616 − 6516 = 1 (Correct) 
B. 𝟎 × 𝟎𝟎𝟎𝟏 
𝐵1 = 0016 and 𝐵0 = 0116 
0016 − 0116 = −1 ≠ 1 (Incorrect) 
GATE CSE - 2009 MCQ (1-MARKS) 
GATE CSE - 2016 NAT (1-MARKS) 
<!-- PAGE 453 -->
Computer Organization and Architecture 
 C. 𝟎 × 𝟒𝟐𝟒𝟑 5. ANSWER: (31) 
𝐵1 = 4216 and 𝐵0 = 4316 
4216 − 4316 = −1 ≠ 1 (Incorrect) 
Max memory = 4 GB = 232bytes 
Word size = 2 bytes = 21bytes 
D. 𝟎 × 𝟎𝟏𝟎𝟎  Word-addressable ⇒ addresses count words, not 
𝐵1 = 0116 and 𝐵0 = 0016 
0116 − 0016 = 1 (Correct) 
 bytes 
Number of addressable units = 
232/21 = 231words


</details>

---


### Q3. [GATE CSE]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


The chip select logic for a certain DRAM chip in a 
memory system design is shown below. Assume that 
the memory system has 16 address lines denoted by 
A15 to A0. What is the range of address (in 
hexadecimal) of the memory system that can get  
enabled by the chip select (CS) signal?


- **(A)** C800 to CFFF

- **(B)** CA00 to CAFF

- **(C)** C800 to C8FF

- **(D)** DA00 to DFFF



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

Address bits needed: 
log2(231) = 31 
● Total address lines = 16 → full range = 0000 to 
FFFF 
● From chip select logic (implied), higher bits are 
fixed and lower bits vary 
● So fixed upper bits → 1100 1xxx xxxx xxxx → 
corresponds to C800–CFFF 
Hence, the correct range is C800 to CFFF.


</details>

---


### Q4. [GATE CSE - 2021 MSQ SET - 2 (2-MARKS]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


A 32 －bit wide main memory unit with a capacity of 
1 GB is built using 256M × 4－bit DRAM chips ． 
The number of rows of memory cells in the DRAM 
chip is 214 ．The time taken to perform one refresh 
operation is 50 nanoseconds．The refresh period is 2 
milliseconds．The percentage （rounded to the 
closest integer）of the time available for performing 
the memory read/write operations in the main 
memory unit is   ．


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (59)


**Step-by-Step Explanation:**

Memory = 1 GB 
Chip = 256M × 4-bit 
Rows = 214 
Refresh time per row = 50 ns 
Refresh period = 2 ms 
Number of rows to refresh: 
214 = 16384 
Total refresh time: 
16384 × 50 ns = 819200 ns = 0.8192 ms 
Total time available: 2 ms 
Time left for read/write: 
2 − 0.8192 = 1.1808 ms 
Percentage available:


</details>

---


### Q5. [GATE CSE]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


A processor can support a maximum memory of 4 
GB, where the memory is word -addressable (a 
word consists of two bytes). The size of address bus 
of the processor is at least   bits.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 31


</details>

---


### Q6. [GATE CSE]


> **Topic:** GATE CSE - 2019 MC | **Marks:** 2 | **Difficulty:** Medium


How many 32k × 1 RAM chips are needed to 
provide a memory capacity of 256 K-bytes?


- **(A)** 8

- **(B)** 32

- **(C)** 64

- **(D)** 128



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Total number of RAM chips 
= Total size / 1 RAM size 
= 256 K-bytes / (32k × 1) 
Convert to bits: 
256 K-bytes = 2⁸ × 2¹⁰ × 2³ bits 
32k × 1 = 2⁵ × 2¹⁰ bits 
So, Number of chips 
= (2⁸ × 2¹⁰ × 2³) / (2⁵ × 2¹⁰) 
= 2⁶ 
= 64 
1.1808 
2 × 100 ≈ 59% 
Alternate Approach: 
Refresh period = 2 msec 
Percentage of time spent in refresh operation 
= 0.8192 / 2 = 40.96% 
Percentage of time available for read/write 
operation = 100 − 40.96 
= 59.04% 
<!-- PAGE 454 -->
GATE CSE - 2026 MCQ SET - 1(1-MARKS) 
GATE CSE - 2026 NAT SET - 2(2-MARKS) 
GATE CSE - 2025 NAT SET - 2(2-MARKS) 
PIPELINING


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following dependencies among 
the register operands of different instructions can 
cause a data hazard in a pipelined processor?


- **(A)** Read-after-read

- **(B)** Read-after-write

- **(C)** Write-after-read

- **(D)** Write-after-write



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

RR , WR and WW are name dependency or false 
dependency. 
They never create stalls or hazards in the pipeline 
however result can be messed up if order of 
execution is changed. RW can create hazard in the 
pipeline


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The EX stage of a pipelined processor performs 
the memory read operations for LOAD 
instructions, and the operations for the arithmetic 
and logic instructions. Let tEX denote the time 
taken by the EX stage to perform the operation for 
an instruction. For each instruction type, the 
values of tEX and M (the number of instructions of 
that type in a sequence of 100 instructions for a 
program P), are given in the table below. The 
duration of the pipeline clock cycle is 1 
nanosecond. Assume that the latch time for the 
interstage buffers in the pipeline is negligible. 
When program P is executed, the number of clock 
cycles for which the pipeline is stalled due to 
structural hazards in the EX-stage is  . 
(answer in integer).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (95)


**Step-by-Step Explanation:**

Pipeline clock cycle = 1 ns When EX-stage takes 
more than 1 ns then  it takes more than 1 pipeline 
cycle. 
Instruction 
Execution 
time 
Number of cycle 
required 
LOAD 
1.8 ns 
2 ⇒ stalls (2 − 1) 
= 1 
IMUL 
1.5 ns 
2 ⇒ (2 − 1) = 1 
IDIV 
2.5 ns 
3 ⇒ (3 − 1) = 2 
FADD 
1.7 ns 
2 ⇒ (2 − 1) = 1 
FSUB 
1.7 ns 
2 ⇒ (2 − 1) = 1 
FMUL 
2.8 ns 
3 ⇒ (3 − 1) = 2 
FDIV 
3.2 ns 
4 ⇒ (4 − 1) = 3 
Other 
instruction 
Less than 
1 ns 
1 ⇒ (1 − 1) = 0 
HINTS & SOLUTIONS 
<!-- PAGE 464 -->
Computer Organization and Architecture


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A non-pipelined instruction execution unit that 
operates at 1.6 GHz clock takes an average of 5 
clock cycles to complete the execution of an 
instruction. To improve the performance, the system 
was pipelined with a goal of achieving an average 
throughput of one instruction per clock cycle. 
However, it could operate only at 1.2 GHz due to 
pipeline overheads. While executing a program in 
the pipelined design, 30% of instructions 
encountered a stall of 2 cycles due to pipeline 
hazards. The speed-up obtained by the pipelined 
design over the non-pipelined one for this program 
is  . (rounded off to two decimal places) 
Note: 1G = 109


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (2.34)


**Step-by-Step Explanation:**

Non pipeline, ET = CPI × Cycle time 
= 5 × 1/1.6 ns = 3.125 ns 
Pipeline ET = (1 + Number of stalls / Instructions) × 
tp 
= [1 + (0.3 × 2)] × 1/1.2 ns = 1.333 ns 
S = ET non-pipe / ET pipe = 3.125 / 1.33 = 2.34


</details>

---


### Q4. [GATE CSE - 2026 NAT SET - 1(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A 5-stage instruction pipeline has stage delays of 180, 
250, 150, 170, and 250, respectively, in nanoseconds. 
The delay of  an inter-stage latch is 10 nanoseconds. 
Assume that there are no pipeline stalls due to 
branches and other hazards. The time taken to process 
1000 instructions in microseconds is  . 
(Rounded off to two decimal places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (261.04)


**Step-by-Step Explanation:**

First, determine the clock cycle time of the pipeline. 
In an ideal pipeline, the clock cycle time is given by 
the delay of the slowest stage plus the inter-stage latch 
delay. 
Stage delays: 
Stage 1 = 180 ns 
Stage 2 = 250 ns 
Stage 3 = 150 ns 
Stage 4 = 170 ns 
Stage 5 = 250 ns 
Maximum stage delay = 250 ns 
Including  the  latch  delay  (10  ns): 
Clock cycle time (t_cycle) = 250 ns + 10 ns = 260 ns 
Next, consider the execution of 1000 instructions. For 
a pipeline with 5 stages, the first instruction requires 
5 cycles to complete, and each subsequent instruction 
completes in one additional cycle. 
Total number of cycles = n + (k − 1) 
= 1000 + (5 − 1) 
= 1000 + 4 
= 1004 cycles 
Now, calculate the total execution time: 
Total time = 1004 × 260 ns = 261040 ns 
Convert nanoseconds to microseconds: 
261040 ns = 261040 / 1000 = 261.04 μs 
Therefore, the total time required to process 1000 
instructions. is 261.04 microseconds.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An instruction format has the following structure: 
Instruction Number: Opcode destination reg, 
source reg-1, source reg-2 
Consider the following sequence of instructions to 
be executed in a pipelined processor: 
I1 : DIVR3,R1,R2 
I2 : SUB R5,R3,R4 
I3 : ADDR3,R5,R6 
I4: MUL R7,R3,R8 
Which of the following statements is/are TRUE?


- **(A)** There is a RAW dependency on R3 between 
I1 and I2

- **(B)** There is a WAR dependency on R3 between 
I1 and I3

- **(C)** There is a RAW dependency on R3 between 
I2 and I3

- **(D)** There is a WAW dependency on R3 between 
I3 and I4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

A RAW dependency exists on R₃ between I₁ and I₂. 
A RAW dependency exists on R₅ between I₂ and I₃. 
No RAW dependency exists on R₃ between I₂ and I₃. 
A WAW dependency exists on R₃ between I₁ and I₃. 
Hence, the correct answer is: A RAW dependency 
exists on R₃ between I₁ and I₂.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 5 -stage pipelined processor with 
Instruction Fetch (IF), Instruction Decode (ID), 
Execute (EX), Memory Access (MEM), and 
Register Writeback (WB) stages. Which of the 
following statements about forwarding is/are 
CORRECT?


- **(A)** In a pipelined execution , forwarding means 
the result from a source stage of an earlier 
instruction is passed on to the destination 
stage of a later instruction.

- **(B)** In forwarding, data from the output of the 
MEM stage can be passed on to the input of 
the EX-stage of the next instruction.

- **(C)** Forwarding cannot prevent all pipeline stalls.

- **(D)** Forwarding does not require any extra 
hardware to retrieve the data from the 
pipeline stages.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A, B, C)


**Step-by-Step Explanation:**

Analysis of each statement about forwarding in a 5-
stage pipelined processor (IF, ID, EX, MEM, WB): 
1. Statement A: 
In pipelined execution, forwarding means the 
result from a source stage of an earlier 
instruction is passed to the destination stage of 
a later instruction. 
Correct. Forwarding (also called bypassing) 
sends the result directly to a dependent 
instruction without waiting for register write 
back, reducing data hazards. 
2. Statement B: 
In forwarding, data from the output of the 
MEM stage can be passed to the input of the 
EX stage of the next instruction. 
Correct. A common forwarding path sends 
the result available at the MEM stage (e.g., 
from a load instruction) directly to the EX 
stage of the following instruction. 
3. Statement C: 
Forwarding cannot prevent all pipeline stalls. 
Correct. Forwarding reduces some data 
hazards (like RAW hazards) but cannot 
eliminate all stalls, such as those caused by 
control hazards or certain structural hazards. 
4. Statement D: 
Forwarding does not require extra hardware to 
retrieve data from pipeline stages. 
Incorrect. Forwarding requires additional 
hardware such as multiplexers and control 
logic to route data between pipeline stages. 
Therefore, the correct statements are: A, B, and 
C


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A non -pipelined instruction execution unit  
operating at 2 GHz takes an average of 6 cycles to 
execute an instruction of a program P. The unit is 
then redesigned to operate on a 5 -stage pipeline at 
2 GHz. Assume that the ideal throughput of the 
pipelined unit is 1 instruction per cycle. In the 
execution of program P, 20% instructions incur an 
average of 2 cycles stall due to data hazards and 20% 
instructions incur an average of 3 cycles stall due to 
control hazards. The speedup (rounded off to one 
decimal place) obtained by the pipelined design over 
the non-pipelined design is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (2.9 to 3.1 )


**Step-by-Step Explanation:**

Non-Pipelined Execution Time 
Frequency (f) = 2 GHz 
Cycle Time (T) = 1 / 2 GHz = 0.5 nsec 
Cycles per Instruction (CPI) = 6 cycles 
Total Execution Time (ET_Nonpipe) 
= CPI * Cycle Time = 6 * 0.5 nsec = 3 nsec 
Pipelined Execution Time with Stalls 
Cycle time remains 0.5 nsec. 
Instruction breakdown based on stalls: 
20% of instructions cause 2 stalls (Data Hazards) 
20% of instructions cause 3 stalls (Control 
Hazards) 
60% of instructions execute normally with 0 stalls 
Average Stalls per Instruction 
= (0.20 * 2) + (0.20 * 3) + (0.60 * 0) 
Average Stalls = 0.4 + 0.6 = 1 stall per instruction 
Average Execution Time (ET_Pipe) = 
(1 + Average Stalls) * Cycle Time 
ET_Pipe = (1 + 1) * 0.5 nsec = 2 * 0.5 nsec 
= 1 nsec 
Speedup Calculation 
Speedup (S) = ET_Nonpipe / ET_Pipe 
S = 3 nsec / 1 nsec = 3


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The baseline execution time of a program on a 2GHz 
single core machine is 100 nanoseconds (ns). The 
code corresponding to 90% of the execution time can 
be fully parallelized. The overhead for using an 
additional core is 10 ns when running on a multicore 
system. Assume that all cores in the multicore system 
run their share of the parallelized code for an equal 
amount of time. 
The number of cores that minimize the execution time 
of the program is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (3)


**Step-by-Step Explanation:**

The portion of code that cannot be parallelized takes 
10 ns. 
For each additional core, an overhead of 10 ns is 
added. 
Thus, overhead for n cores = (n − 1) × 10 ns. 
The parallelizable portion takes 90 ns on one core. 
On n cores, it takes 90 / n ns. 
Let total execution time be t(n): 
t(n) = 10 + (n − 1) × 10 + 90 / n 
= 10n + 90 / n 
Now evaluating: 
t(1) = 10(1) + 90/1 = 100 ns 
t(2) = 20 + 45 = 65 ns 
t(3) = 30 + 30 = 60 ns 
t(4) = 40 + 22.5 = 62.5 ns 
t(5) = 50 + 18 = 68 ns 
Minimum execution time occurs at n = 3. 
Answer: 3 cores 
Alternate Solution: 
Single Core Setup 
Total execution time on a single core = 100 nsec 
Parallelizable portion (90%) = 90 nsec 
Non-parallelizable portion (10%) = 10 nsec 
Adding Cores and Overhead 
Let the total number of cores = n 
Number of newly added cores = (n - 1) 
Overhead time per new core = 10 nsec 
Total overhead time for new cores = (n - 1) * 10 nsec 
Execution Time (ET) Equation 
ET = (Parallelizable Time / n) + Total Overhead + Non-
parallelizable Time 
ET = [90 / n + (n - 1) * 10] + 10 
ET = 90 / n + 10n - 10 + 10 
ET = 90 / n + 10n 
Finding the Optimal Number of Cores (Minimizing ET) 
To find the minimum execution time 
(Maxima/Minima), take the derivative of ET with 
respect to n and set it to 0: 
<!-- PAGE 465 -->
Computer Organization and Architecture 
d(ET)/dn = 0 
d(ET)/dn = d/dn [90 / n + 10n] 
d(ET)/dn = -90 / n2 + 10 
Set the derivative to 0: 
-90 / n2 + 10 = 0 
10 = 90 / n2 
10n2 = 90 
n2 = 9 
n = 3


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 3-stage pipelined processor having a 
delay of 10 ns (nanoseconds), 20 ns, and 14 ns, for 
the first, second, and the third stages, respectively. 
Assume that there is no other delay and the 
processor does not suffer from any pipeline hazards. 
Also assume that one instruction is fetched every 
cycle. 
The total execution time for executing 100 
instructions on this processor is  ns.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (2040)


**Step-by-Step Explanation:**

To determine the total execution time for 
executing 100 instructions on a 3-stage pipelined 
processor with stage delays of 10 ns, 20 ns, and 14 
ns (assuming no pipeline hazards or additional 
delays), we use the pipeline execution time 
formula. 
First, identify the pipeline cycle time (Tp), which 
is equal to the delay of the slowest stage. 
Maximum of (10 ns, 20 ns, 14 ns) = 20 ns. 
Tp = 20 ns 
Number of instructions: n = 100 
Pipeline depth (number of stages): k = 3 
The total execution time for a pipelined processor 
is given by: 
T = (k + n − 1) × Tp 
Substituting the values: 
T = (3 + 100 − 1) × 20 
T = (3 + 99) × 20 
T = 102 × 20 
T = 2040 ns 
Therefore, the total execution time to execute 100 
instructions is 2040 ns


</details>

---


### Q10. [GATE CSE - 2024 NAT SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A processor X1 operating at 2 GHz has a standard 5 -
stage RISC instruction pipeline having a base CPI 
(cycles per instruction) of one without any pipeline 
hazards. For a given program P that has 30% branch 
instructions, control hazards incur 2 cycles stall for 
every branch. A new version of the processor X 2 
operating at the same clock frequency has an 
additional branch predictor unit (BPU) that 
completely eliminates stalls for correctly predicted 
branches. There is neither any savings nor any 
additional stalls for wrong predictions. There are no 
structural hazards and data hazards for X 1 and X2. If 
the BPU has a prediction accuracy of 80%, the speed 
up (rounded off to two decimal places) obtained by 
X2 over X1 in executing P is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1.42 to 1.43)


**Step-by-Step Explanation:**

Execution Time = No. of Instructions × Clocks per 
Instruction × Clock cycle time 
Speedup = Old system execution time / New 
system execution time 
When no. of Instructions and clock cycle time are 
same, then 
Speedup = Old system CPI / New system CPI 
Normal processor CPI = 1, without any pipeline 
hazards. 
Given that, Program P has 30% branch 
instructions where each instruction will lead to 2 
stall cycles. 
Processor X1 has NO BPU, therefore 
CPI = 1 + (0.30 × 2) 
CPI = 1 + 0.60 
CPI = 1.60 
Processor X2 has BPU (80% correct prediction, 
20% wrong prediction). 
CPI = 1 + [0.30 × ((0.80 × 0) + (0.20 × 2))] 
CPI = 1 + [0.30 × (0 + 0.40)] 
CPI = 1 + (0.30 × 0.40) 
CPI = 1 + 0.12 
CPI = 1.12 
Speedup = 1.60 / 1.12 
Speedup = 1.4285 
Alternate Solution: 
X1: Processor without Branch Prediction Unit 
Clock Frequency = 2 GHz 
Cycle Time = 1 / 2 GHz = 0.5 nsec 
Instruction Breakdown for X1 (Stalls): 
Branch Instructions (30%): 2 Stalls 
Non-Branch Instructions (70%): 0 Stalls 
Average Stalls per Instruction = (0.30 * 2) + (0.70 * 0) 
= 0.6 
Execution Time for X1 (ET_X1): 
Average ET_X1 = (1 + Average Stalls) * Cycle Time 
Average ET_X1 = (1 + 0.6) * 0.5 nsec 
Average ET_X1 = 1.6 * 0.5 nsec = 0.8 nsec 
X2: Processor with Branch Prediction Unit (BPU) 
Cycle Time = 0.5 nsec 
Instruction Breakdown for X2 (Stalls with BPU): 
Non-Branch Instructions (70%): 0 Stalls 
Branch Instructions (30%), which are handled by the 
BPU: 
Correct Prediction (80% of branches): 0 Stalls 
Incorrect Prediction (20% of branches): 2 
Stalls 
Average Stalls per Instruction = (0.70 * 0) + (0.30 * 
0.80 * 0) + (0.30 * 0.20 * 2) 
Average Stalls per Instruction = 0 + 0 + 0.12 = 0.12 
Execution Time for X2 (ET_X2): 
Average ET_X2 = (1 + Average Stalls) * Cycle Time 
Average ET_X2 = (1 + 0.12) * 0.5 nsec 
Average ET_X2 = 1.12 * 0.5 nsec = 0.56 nsec 
Speedup Calculation (S): 
Speedup (S) = ET_X1 / ET_X2 
S = 0.8 / 0.56 
S = 1.42


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a pipelined processor with 5 stages, 
Instruction Fetch (IF), Instruction Decode (ID), 
Execute (EX), Memory Access (MEM), and Write 
Back (WB). Each stage of the pipeline, except the 
EX-stage, takes one cycle. Assume that the ID stage 
merely decodes the instruction and the register read 
is performed in the EX -stage. The EX -stage takes 
one cycle for ADD instruction and two cycles for 
MUL instruction. Ignore pipeline register latencies. 
Consider the following sequence of 8 instructions: 
ADD, MUL, ADD, MUL, ADD, MUL, ADD, 
MUL 
Assume that every MUL instruction is data -
dependent on the ADD instruction just before it and 
every ADD instruction (except the first ADD) is 
data-dependent on the MUL instruction just before 
it. The speedup is defined as follows: 
Speedup = Execution time without operand forwarding Execution time with operand forwarding 
The Speedup achieved in executing the given 
instruction sequence on the pipelined processor 
(rounded to 2 decimal places) is  . 
and 50% of the branch instructions cause stalls of 2 
cycles each. Assume that there are no stalls 
associated with the execution of ALU instructions. 
For this program, the speedup achieved by the 
pipelined processor over the non-pipelined processor 
(round off to 2 decimal places) is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1.87 to 1.88)


**Step-by-Step Explanation:**

Base Pipeline Execution Time 
Instruction Sequence: ADD, MUL, ADD, MUL, ADD, 
MUL, ADD, MUL 
EX Stage Cycles per instruction: ADD = 1, MUL = 2, 
ADD = 1, MUL = 2, ADD = 1, MUL = 2, ADD = 1, 
MUL = 2 
Number of Pipeline Stages (k) = 5 Stages 
Number of Instructions (n) = 8 Instructions 
Ideal Execution Time (ET_PIPE) = [k + (n - 1)] cycles 
<!-- PAGE 466 -->
Computer Organization and Architecture 
Ideal ET_PIPE = [5 + (8 - 1)] = 12 cycles 
Execution Time WITH Operand Forwarding 
Each ADD instruction takes 1 cycle in the EX stage. 
Each MUL instruction takes 2 cycles in the EX 
stage. 
Out of 8 instructions, 4 are MUL instructions. 
These 4 MUL instructions take 1 extra cycle each in 
the EX stage. 
Extra cycles = 4 instructions * 1 extra cycle = 4 
cycles 
Total ET (With Forwarding) = 12 (Base) + 4 (Extra 
EX cycles) = 16 cycles 
Execution Time WITHOUT Operand Forwarding 
Every instruction depends on the result of the 
previous instruction (Data dependency: ADD -> 
MUL -> ADD -> MUL ...). 
Without forwarding, each data dependency 
introduces a 2-cycle stall penalty. 
Out of 8 instructions, 7 instructions depend on the 
previous one, thus incurring the 2-cycle stall penalty. 
Total Stalls = 7 instructions * 2 stall cycles = 14 
cycles 
Total ET (Without Forwarding) = Total ET (With 
Forwarding) + Stall Cycles 
Total ET = 16 + 14 = 30 cycles 
Speedup Calculation 
Speedup = Total ET (Without Forwarding) / Total 
ET (With Forwarding) 
Speedup = 30 / 16 = 1.875 
Alternate Solution: 
Speedup (defined in question) = 
𝑇𝑖𝑚𝑒 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑂𝑝𝑒𝑟𝑎𝑛𝑑 𝐹𝑜𝑟𝑤𝑎𝑟𝑑𝑖𝑛𝑔 
𝑇𝑖𝑚𝑒 𝑤𝑖𝑡ℎ 𝑂𝑝𝑒𝑟𝑎𝑛𝑑 𝐹𝑜𝑟𝑚𝑤𝑎𝑟𝑑𝑖𝑛𝑔 
Speedup = 𝑇𝑖𝑚𝑒 𝑤𝑖𝑡ℎ𝑜𝑢𝑡 𝑂𝑝𝑒𝑟𝑎𝑛𝑑 𝐹𝑜𝑟𝑤𝑎𝑟𝑑𝑖𝑛𝑔 = 30 = 1.875 𝑇𝑖𝑚𝑒 𝑤𝑖𝑡ℎ 𝑂𝑝𝑒𝑟𝑎𝑛𝑑 𝐹𝑜𝑟𝑤𝑎𝑟𝑑𝑖𝑛𝑔 16


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The instruction pipeline of a RISC processor has the 
following stages: Instruction Fetch (IF), Instruction 
Decode (ID), Operand Fetch (OF), Perform 
Operation (PO) and Writeback (WB). The IF, ID, OF 
and WB stages take 1 clock cycle each for every 
instruction. Consider a sequence of 100 instructions. 
In the PO stage, 40 instructions take 3 clock cycles 
each, 35 instructions take 2 clock cycles each, and the 
remaining 25 instructions take 1 clock cycle each. 
Assume that there are no data hazards and no control 
hazards. 
The number of clock cycles required for completion 
of execution of the sequence of instructions is 
 .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (219)


**Step-by-Step Explanation:**

Total number of instructions = 100 
Number of pipeline stages = 5 
For an ideal pipeline (with CPI = 1 and no stalls): 
Total cycles = n + (k − 1) = 100 + (5 − 1)= 104 
cycles 
Now consider the PO (Perform Operation) stage: 
40 instructions take 3 cycles → each causes 2 
extra stall cycles 
35 instructions take 2 cycles → each causes 1 
extra stall cycle 
25 instructions take 1 cycle → no stall cycles 
All other stages (IF, ID, OF, WB) take 1 cycle each 
and operate ideally. 
Extra cycles due to the multi-cycle PO stage: 
= (40 × 2) + (35 × 1) + (25 × 0) 
= 80 + 35 + 0 = 115 cycles 
Therefore, 
Total clock cycles 
= 104 + 115 = 219 cycles


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A five-stage pipeline has stage delays of 150, 120, 
150, 160 and 140 nanoseconds. The registers that 
are used between the pipeline stages have a delay 
of 5 nanoseconds each. 
The total time to execute 100 independent 
instructions on this pipeline, (assuming there are no 
pipeline stalls) is  nanoseconds.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (17160)


**Step-by-Step Explanation:**

For the given pipelined system: 
• Total number of stages (k) = 5 
• Total number of instructions (n) = 100 
• Total delay (tₚ) = max(stage delay) + buffer delay 
⇒ tₚ = max(150, 120, 150, 160, 140) + 5 ns 
⇒ tₚ = 160 + 5 ns 
⇒ tₚ = 165 ns 
Total execution time of pipeline: 
ETₚ = (k + n − 1) × tₚ 
⇒ ETₚ = (5 + 100 − 1) × 165 ns 
⇒ ETₚ = (5 + 99) × 165 ns 
⇒ ETₚ = 104 × 165 ns 
⇒ ETₚ = 17160 ns 
∴ Time required to execute 100 instructions in the 
given pipeline = 17160 ns.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a non-pipelined processor operating at 
2.5 GHz. It takes 5 clock cycles to complete an 
instruction. You are going to make a 5-stage 
pipeline out of this processor. Overheads 
associated with pipelining force you to operate the 
pipelined processor at 2 GHz. In a given program, 
assume that 30% are memory instructions, 60% 
are ALU instructions and the rest are branch 
instructions. 5% of the memory instructions cause 
stalls of 50 clock cycles each due to cache misses


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (2.16)


**Step-by-Step Explanation:**

Given: 
Non-pipelined processor: 
Frequency = 2.5 GHz 
CPI = 5 
Pipelined processor: 
Number of stages = 5 
Frequency = 2 GHz 
Instruction mix: 
30% memory instructions 
60% ALU instructions 
10% branch instructions 
Additional details: 
5% of memory instructions cause 50 cycle stalls 
<!-- PAGE 467 -->
Computer Organization and Architecture 
50% of branch instructions cause 2 cycle stalls 
Non-Pipelined Processor 
Clock cycle time = 1 / 2.5 GHz = 0.4 ns 
Execution time per instruction = CPI × clock cycle 
time 
= 5 × 0.4 ns= 2 ns 
Pipelined Processor 
Base CPI = 1 
Memory stall contribution: = 0.30 × 0.05 × 50 = 0.75 
Branch stall contribution: = 0.10 × 0.50 × 2 = 0.10 
Total CPI (pipelined) = 1 + 0.75 + 0.10 = 1.85 
Clock cycle time = 1 / 2 GHz = 0.5 ns 
Execution time per instruction = 1.85 × 0.5 ns= 
0.925 ns 
Speedup = Non-pipelined time / Pipelined time 
= 2 / 0.925 = 2.16


</details>

---


### Q15. [GATE CSE – 2020 NAT (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Instruction execution in a processor is divided into 
5 stages，Instruction Fetch（IF），Instruction 
Decode（ID），Operand fetch（OF），Execute 
（EX），and Write Back（WB）．These stages 
take 5，4，20， 10 and 3 nanoseconds（ns） 
respectively．A pipelined implementation of the 
processor requires buffering between each pair of 
consecutive stages with a delay of 𝟐 𝐧𝐬 ．Two 
pipelined implementation of the processor are 
contemplated： 
i．A naive pipeline implementation（NP）with 5 
stages and 
ii．An efficient pipeline（EP）where the OF 
stage is divided into stages OF1 and OF2 with 
execution times of 𝟏𝟐 ns and 𝟖 𝐧𝐬 respectively． 
The speedup（correct to two decimal places） 
achieved by EP over NP in executing 20 
independent instructions with no hazards is  ．


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (1.50 to 1.51)


**Step-by-Step Explanation:**

NP (5-stage): 
Stage times = 5, 4, 20, 10, 3 ns 
Buffer delay = 2 ns 
Clock cycle = max stage + buffer = 20 + 2 = 
22ns 
Time for 20 instructions = 
(𝑘 + 𝑛 − 1) × 𝑇 = (5 + 20 − 1) × 22 = 24 × 
22 = 528ns 
EP (6-stage): 
Stages = 5, 4, 12, 8, 10, 3 
Max = 12 ns 
Clock = 12 + 2 = 14ns 
Time = (6 + 20 − 1) × 14 = 25 × 14 = 350ns 
Speedup: 
528 ≈ 1.508 
Answer: 
1.508


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose the functions F and G can be computed in 
5 and 3 nanoseconds by functional units UF and UG, 
respectively. Given two instances of U F and two 
instances of U G, it is required to implement the 
computation F(G(X i)) for 1 ≤ i ≤ 10. Ignoring all 
other delays, the minimum time required to 
complete this computation is  nanoseconds.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (28)


**Step-by-Step Explanation:**

In this problem, the computation follows a pipelined 
execution of F(G(Xi)). Function G takes 3 ns and 
function F takes 5 ns. Since two units of each (UG 
and UF) are available, the slower stage F becomes the 
bottleneck. 
We need to perform 10 computations. With two units 
of UF, the total time required for executing F on 10 
inputs is 10 × 5 = 50 ns. As two units work in parallel, 
the effective time becomes 50/2 = 25 ns. 
Initially, F must wait for the first output from G, 
which takes 3 ns. After this, pipelining ensures 
continuous execution without additional delay. 
Therefore, the minimum total time required is: 
3 + 25 = 28 ns.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 3 GHz (gigahertz) processor with a 
three-stage pipeline and stage latencies τ₁, τ₂, and τ₃ 
such that τ₁ = 3τ₂/4 = 2τ₃. If the longest pipeline 
stage is split into two pipeline stages of equal 
latency, the new frequency is   GHz, 
ignoring delays in the pipeline registers.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (3.9 to 4.1)


**Step-by-Step Explanation:**

Given: 3-stage pipeline with processor frequency = 
3 GHz 
Given relation: 
e₁ = (3e₂)/4 = 2e₃ 
Assume, 
e₁ = 6x 
Then, 
e₂ = 8x and e₃ = 3x 
Largest stage time = 8x 
Processor frequency = 1 / (largest stage time) 
⇒ 1 / 8x = 3 GHz 
⇒ 1 / x = 24 GHz …… (1) 
Now, divide stage e₂ into two equal stages of 4x and 
4x. 
New pipeline stages become: 
6x, 4x, 4x, 3x (4 stages) 
Largest stage time = 6x 
New processor frequency = 1 / 6x 
= (1/x) / 6 
= 24 / 6 = 4 GHz [using (1)] 
<!-- PAGE 468 -->
Computer Organization and Architecture 
Alternate Solution: 
Finding the Stage Time Ratios 
Given equations: T1 = (3 * T2) / 4 = 2 * T3 
From T1 = (3 * T2) / 4, we get the ratio: T1 / T2 
= 3 / 4 (which is equivalent to 6 / 8) 
From (3 * T2) / 4 = 2 * T3, we get the ratio: T2 / T3 
= 8 / 3 
Combined ratio for the stages: T1 : T2 : T3 = 6 : 8 : 
Initial Pipeline Cycle Time 
Let 'x' be a constant unit of time. 
The stage times are: T1 = 6x, T2 = 8x, T3 = 3x 
The pipeline cycle time (tp) is the maximum of the 
stage times. 
tp = max(6x, 8x, 3x) 
tp = 8x 
Solving for Base Frequency 
Frequency = 1 / Cycle Time 
The given initial frequency is 3 GHz. 
3 GHz = 1 / 8x 
Solving for 1/x: 1 / x = 3 GHz * 8 = 24 GHz 
New Pipeline Design (Splitting the Bottleneck) 
The longest stage (8x) is split into two equal sub-
stages. 
8x becomes -> 4x and 4x 
The new sequence of stage times is: 6x, 4x, 4x, 3x 
New pipeline cycle time (tp_new) = max(6x, 4x, 4x, 
3x) 
tp_new = 6x 
Calculating the New Frequency 
New Frequency (Freq_new) = 1 / tp_new 
Freq_new = 1 / 6x 
We can rewrite this as: Freq_new = (1 / 6) * (1 / x) 
Substitute the value of (1 / x) we found earlier (24 
GHz): 
Freq_new = (1 / 6) * 24 GHz 
New Frequency = 4 GHz


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The stage delays in a 4-stage pipeline are 800, 500, 
400 and 300 picoseconds. The first stage (with 
delay 800 picoseconds) is replaced with a 
functionally equivalent design involving two stages 
with respective delays 600 and 350 picoseconds. 
The throughput increase of the pipeline is percent.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (33 to 34)


**Step-by-Step Explanation:**

In an ideal pipeline, CPI = 1 
So, 1 instruction is completed in 1 cycle. 
Throughput = number of instructions completed 
per unit time. 
For Pipeline 1: 
Cycle time = maximum stage delay = 800 psec 
In 800 psec, 1 instruction is completed 
Therefore, throughput of Pipeline 1 = 1/800 
instructions per psec 
For Pipeline 2: 
Cycle time = 600 psec 
Throughput of Pipeline 2 = 1/600 instructions per 
psec 
Percentage increase in throughput: 
= (New − Old / Old × 100 
= (1/600 − 1/800) / (1/800) × 100 
= (800 − 600) / 600 × 100 
= 200/600 × 100 
= 33.33%


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following reservation table for a 
pipeline having three stages S1, S2 and S3. 
The minimum average latency (MAL) IS


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (3)


**Step-by-Step Explanation:**

S1 is needed at times 1 and 5, so its forbidden 
latency is 5 − 1 = 4. 
S2 is needed at times 2 and 4, so its forbidden 
latency is 4 − 2 = 2. 
So, forbidden latency = (2, 4, 0) (0 by default is 
forbidden) 
Allowed latency = (1, 3, 5) (any value more than 5 
also). 
Collision vector (4, 3, 2, 1, 0) = 10101 which is the 
initial state as well. 
From the initial state we can have a transition after 
“1” or “3” cycles and we reach new states with 
collision vectors (10101 >> 1 + 10101 = 11111) and 
(10101 >> 3 + 10101 = 10111) respectively. 
These 2 become states 2 and 3 respectively. For “5” 
cycles we come back to state 1 itself. 
From state 2 (11111), the new collision vector is 
11111. We can have a transition only when we see 
the first 0 from the right. So, here it happens on the 
5th cycle only which goes to the initial state. (Any 
transition after 5 or more cycles goes to the initial 
state as we have 5 time slices). 
From state 3 (10111), the new collision vector is 
10111. So, we can have a transition on 3, which will 
give (10111 >> 3 + 10101 = 10111) the third state 
itself. For 5, we get the initial state. Thus all the 
transitions are complete. 
State/Time 1 3 5 
1(10101) 2 3 1 
2(11111) - - 1 
3(10111) - 3 1 
So, the minimum length cycle is of length 3 either 
from 3-3 or from 1-3,3-1. 
<!-- PAGE 469 -->
Computer Organization and Architecture


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the sequence of machine instructions 
given below 
In the above sequence, R0 to R8 are general purpose 
registers. In the instructions shown, the first register 
stores the result of the operation performed on  the 
second and the third registers. This sequence of 
instructions is to be executed in a pipelined 
instruction processor with the following 4 stages: 
(1) Instruction Fetch and Decode (IF) 
(2) Operand Fetch (OF) 
(3) Perform Operation (PO) and 
(4) Write back the result (WB). 
The IF, OF and WB stages take 1 clock cycle each for 
any instruction. The PO stage takes 1 clock cycle for 
ADD or SUB instruction, 3 clock cycles for MUL 
instruction and 5 clock cycles for DIV instruction. 
The pipelined processor uses operand forward ing 
from the PO stage to the OF stage. The number of 
clock cycles taken for the execution of the above 
sequence of instructions is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (13)


**Step-by-Step Explanation:**

21. ANSWER: 3.2 
Clock = 2.5 GHz 
CPI = 4 
Time per instruction = 4 
2.5 
Pipelined: 
Clock = 2 GHz 
CPI ≈ 1 (no stalls) 
Time per instruction = 1 
It is clearly mentioned in the question that operand 
Speedup:  
(4/2.5) 4 × 2 8 = = 
 = 3.2 
forwarding occurs from the PO stage to the OF 
stage (PO → OF) and not within the PO stage itself. 
Based on this, a straightforward pipeline analysis 
gives a total of 15 clock cycles. 
However, since forwarding happens from PO to 
OF, the PO stage can produce its output at the rising 
Answer: 
3.2 
(1/2) 2.5 2.5 
edge of the clock, and the OF stage can latch (fetch) 
this forwarded value at the falling edge of the same 
clock cycle. Hence, the final PO stage and the 
dependent OF stage effectively overlap within a 
single clock cycle. 
Due to this half-cycle forwarding mechanism, two 
clock cycles are saved in the overall execution. 
Therefore, the correct total number of clock cycles 
is 13. 
Alternate Approach 
Instruction Operation PO Stalls (Extra Cycles) 
I1 MUL 3 2 
I2 DIV 5 4 
I3 ADD 1 -- 
I4 SUB 1 -- 
Total: 6 extra cycles (stalls) 
Given Variables: 
 n = 4 
 k = 4 
Execution Time (ET) Calculation: 
ET = [k + (n-1)]tp + t_{stalls} 
ET = [4 + (4-1)] *1 + 6 
ET = 7 + 6


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a non-pipelined processor with a clock rate 
of 2.5 gigahertz and average cycles per instruction of 
four. The same processor is upgraded to a pipelined 
processor with five stages; but due to the internal 
pipeline delay, the clock speed is reduced to 2 
gigahertz. Assume that there are no stalls in the 
pipeline. The speedu p achieved in this pipelined 
processor is    
,


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


</details>

---


### Q22. [GATE CSE - 2016 NAT SET – 2 (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following code sequence having five 
instructions from 𝐼1 to 𝐼5. Each of these instructions 
has the following format. 
OP Ri, Rj, Rk 
Where operation  OP is performed on contents of 
registers Rj and Rk and the result is stored in register


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Instructions: 
I1: R1 ← R2, R3 
I2: R7 ← R1, R3 
I3: R4 ← R1, R5 
I4: R3 ← R2, R4 
I5: R7 ← R8, R9 
S1 (I2 and I5): 
Both write to R7 ⇒ output dependence (WAW), 
not anti 
S2 (I2 and I4): 
I2 reads R3, I4 writes R3 ⇒ anti-dependence 
(WAR) 
S3: 
Anti-dependence does not always cause stalls (can 
be removed via register renaming) 
Answer: 
Only S2 is true (Option B)


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider two processors 𝑃1 and 𝑃2 executing the 
same instruction set. Assume that under identical 
conditions, for the same input, a program running 
on 𝑃2 takes 25% less time but incurs 20% more 
CPI (clock cycles per instruction) as compared to 
the program running on 𝑃1. If the clock freq uency 
of 𝑃1 is 1 GHZ , then the clock frequency of 𝑃2 (in 
GHz ) is    .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (1.6)


**Step-by-Step Explanation:**

Execution time 𝑇 = 
𝐼𝐶×𝐶𝑃𝐼 
𝑓 
Same program ⇒ IC same 
P2 takes 25% less time ⇒ 
𝑇2 = 0.75𝑇1 
CPI increases by 20% ⇒ 
𝐶𝑃𝐼2 = 1.2 𝐶𝑃𝐼1 
Ratio: 
Ans: 13 cycles 
<!-- PAGE 470 -->
Computer Organization and Architecture 
0.75 = 1.2 𝑓1  
𝑓2 
Cycle time = MAX (1ns, 2.2ns, 2ns, 1ns, and 0.75ns) 
= 2.2nsec 
Given 𝑓1 
1.2 
𝑓2 = 0.75 𝑓1 = 1.6𝑓1 
= 1GHz 
𝑓2 = 1.6 GHz 
Branch penalty = 3-1 = 2 because the next instruction 
pointer at the end of the EX stage (which is 3rd stage) in 
the old design 
AVG instruction execution time is 
P = Tavg = (1 + no. of stalls * branch penalty) * 
cycle time 
= (1 + 0.20 * 2)2.2 
Answer: 
1.6 GHz 
Alternate Solution: 
Total Execution Time = Number of Instructions × 
CPI × Cycle time 
Note: In the given question, the Number of 
Instructions is the same for Processor P₁ and P₂. 
Processor P₁: 
 Clock Frequency P₁ = 1 GHz 
 Cycle time P₁ = 1 / 1 GHz = 10⁻⁹ sec 
 Cycle time P₁ = 1 nsec 
 ET_P₁ = CPI × 1 nsec 
Processor P₂: 
 ET_P₂ = 1.2 × CPI × Cycle time₂ (Due to 20% 
more CPI) 
 ET_P₂ = 0.75 × ET_P₁ (Due to 25% less time than 
that of P₁) 
Calculation: Equating the two expressions for 
ET_P₂: 
0.75 × ET_P₁ = 1.2 × CPI × Cycle time₂ 
Substitute the value of ET_P₁: 0.75 × CPI × 1 nsec = 
1.2 
× CPI × Cycle time₂ 
Cancel out CPI from both sides: 0.75 
= 1.2 × Cycle time₂ 
Solve for Cycle time₂: Cycle time₂ = 0.75 / 1.2 = 
0.625 nsec 
Calculate the Clock Frequency for P₂: Clock 
Frequency P₂ = 1 / Cycle time₂ Clock Frequency P₂ = 
1 / (0.625 × 10⁻⁹ sec) 
Ans: 1.6 GHz


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


An instruction pipeline has five stages, namely, 
instruction fetch (IF), instruction decode and 
register fetch (ID/RF), instruction execution (EX), 
memory access (MEM), and register writeback 
(WB) with stage latencies 1 ns, 2.2 ns, 2 ns, 1 ns, 
and 0.75 ns, respectively (ns stands for 
nanoseconds). To gain in terms of performance, the 
designers have decided to split the ID/RF stage into 
three stages (ID, RF1, RF2) each of latency 2.2/3 
ns. Also, the EX stage is split into two stages (EX1, 
EX2) each of latency 1 ns. The new design has a 
total of eight pipeline stages. A program has 20% 
branch instructions which execute in the EX stage and 
produce the next instruction pointer at the end of the 
EX stage in the old design and at the end of the EX2 
stage in the new design. The IF stage stalls after 
fetching a branch until the next instruction pointer is 
computed. All instructions other than  the branch 
instruction have an average CPI of one in both the 
designs. The execution times of this program on the 
old and the new design are P and Q nanoseconds, 
respectively. The value of P/Q is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (1.54)


**Step-by-Step Explanation:**

There are five stages: 
Instruction Fetch (IF), 
instruction decode and register fetch (ID/RF), 
Instruction execution (EX), 
Memory access (MEM), 
and register write back (WB) P 
old design: 
With stage latencies 1ns, 2.2ns, 2ns, 1ns, 
and 0.75ns 
P = 3.08nsec 
Q new design: 
ID/RF stage is split into three stages (ID, RF1, RF2) each 
of latency (2.2)/3 ns 
= 0.73ns. 
The EX stage is split into two stages (EX1, EX2) each of 
latency 1ns. 
The new design has a total of eight pipeline stages. Time 
of stages in new design = {1ns, 0.73ns, 0.73ns, 0.73ns, 
1ns, 1ns, 1ns, and 0.75ns} 
Cycle time = MAX (1ns, 0.73ns, 0.73ns, 0.73ns, 1ns, 
1ns, 1ns, and 0.75ns) = 1nsec 
Branch penalty = 6-1 = 5 because the next instruction 
pointer at the end of the EX2 stage (which is 6th stage) 
in the new design. 
AVG instruction execution time is 
Q = Tavg = (1 + no. of stalls * branch penalty) 
*cycle time 
= (1 + 0.20 * 5)1 
Q = 2nsec 
Therefore, P/Q = 3.08/2 = 1.54


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following processors (ns stands for 
nanoseconds). Assume that the pipeline registers have 
zero latency. 
P1: Four – stage pipeline with stage latencies 1ns, 2 
ns, 2 ns, 1 ns. 
P2: Four-stage pipeline with stage latencies 1ns, 1.5 
ns, 1.5 ns, 1.5 ns. 
P3: Five-stage pipeline with stage latencies 0.5 ns, 1 
ns, 1 ns, 0.6 ns. 1 ns. 
P4: Five-stage pipeline with stage latencies 0.5 ns, 0.5 
ns, 1 ns, 1 ns, 1.1 ns. 
Which processor has the highest peak clock 
frequency?


- **(A)** P1

- **(B)** P2

- **(C)** P3

- **(D)** P4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

P1 = tp = max (1ns, 2ns, 2ns, 1ns) = 2 nsec 
P2 = tp = max (1ns, 1.5ns, 1.5ns, 1.5ns ) = 1.5 nsec 
P3 = tp = max (0.5ns, 1ns, 1ns, 0.6ns, 1ns) = 1 nsec 
P4 = tp = max (0.5ns, 0.5ns, 1ns, 1ns, 1.1ns) = 1.1 
nsec. 
Frequency = 1/tp 
Hence p3 has the highest clock frequency.


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 6 -stage instruction pipeline, where all 
stages are perfectly balanced. Assume that there is no 
cycle-time overhead of pipelining. When an 
application is executing on this 6 -stage pipeline, the 
speedup achieved with respect  to non -pipelined 
execution is 25% if the instructions incur 2 pipeline 
stall cycles is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (4)


**Step-by-Step Explanation:**

Non-Pipelined System: Since the processor has 6 
perfectly balanced stages, a nonpipelined design must 
run through all 6 stages sequentially for each 
instruction. Thus, CPI non-pipe = 6. 
Ideal Pipelined System: Without any hazards or stalls, a 
pipeline completes 1 instruction every single cycle 
(CPIideal = 1). This means 
<!-- PAGE 471 -->
Computer Organization and Architecture 
the absolute maximum ideal speedup 
possible is 6 = 6. 1 
Actual Speedup = Maximum Speedup × 
25% = 6 × 0.25 = 1.5 
Actual Speedup = 
CPInon-pipe 
CPIpipelined 
Substitute our known values into the 
equation: 
I1: Read A → B 
I2: Write C → A 
Here, a WAR dependency occurs because the 
second instruction writes to A before the first 
instruction completes reading A 
To avoid this, register renaming assigns a new 
register: 
Write C → A′ (instead of A) 
Thus, the conflict is removed 
WAR dependency is also called anti-dependency 
because there is no true data dependency; the 
conflict arises only due to the use of the same 
register name. Register renaming removes such false 
dependencies. Similarly, it also eliminates WAW 
dependencies. 
1.5 = 
CPIpipelined


</details>

---


### Q27. [GATE CSE - 2014 NAT SET 3 (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider an instruction pipeline with five stages 
without any branch prediction: Fetch Instruction (FI), 
Decode Instruction (DI), Fetch Operand (FO), 
Execute Instruction (EI) and Write Operand (WO). 
The stage delays for FI, DI, FO, EI and WO are 5 ns, 
7 ns, 10 ns, 8 ns and 6 ns, respectively. There are


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Cycle time = max of all stage delays + buffer delay 
= max (5ns, 7ns, 10ns, 8ns, 6ns) + 1 = 10 + 1 = 11ns 
Out of all the instructions I1, I2, I3. I12 it is given 
that only I4 is a branch instruction and when I4 
takes a branch the control will jump to instruction 
I9 as I9 is the target instruction. 
As can be seen from the timing diagram there is a 
gap of only 3 stall cycles between I4 and I9 because 
after I4 enters Decode Instruction (DI) whether 
there is a branch or not will be known at the end of 
Execute Instruction (EI) phase. So there are a total 
3 phases here namely DI, FO, EI. 
After 3 stall cycles I9 will start executing as that is 
the branch target. 
As per the timing diagram total no. of clock cycles 
to complete the program = 15 
Since 1 clock cycle = 11ns, time to complete the 
program = 15 * 11 = 165ns.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Register renaming is done in pipelined processors


- **(A)** as an alternative to register allocation at 
compile time

- **(B)** for efficient access to function parameters and 
local variables

- **(C)** to handle certain kinds of hazards

- **(D)** as part of address translation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

Register renaming is used to eliminate WAR 
(Write After Read and WAW (Write After Write) 
dependencies between instructions 
Example:


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider an instruction pipeline with four stages 
(S1, S2, S3 and S4) each with  a combinational 
circuit only. The pipeline registers are required 
between each stage and at the end of the last stage. 
Delays for the stages and for the pipeline registers 
are as given in the figure: 
What is the approximate speed up of the pipeline 
in steady state under ideal conditions when 
compared to the corresponding non-pipeline 
implementation?


- **(A)** 4.0

- **(B)** 2.5

- **(C)** 1.1

- **(D)** 3.0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Rearranging to solve for the pipelined 
execution time per instruction: 
Speedup = Time without pipelining / Time with 
pipelining 
Clock cycle time of pipelining 
CPI 
pipelined 
6 = = 4 
1.5


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A 5-stage pipelined processor has Instruction Fetch 
(IF), Instruction Decode (ID), Operand Fetch (OF), 
Perform Operation (PO) and Write Operand (WO) 
stages. The IF, ID, OF and WO stage take 1 clock 
cycle each for any instruction. The PO stage takes 1 
clock cycle for ADD and SUB instructions ,3 clock 
cycles for MUL instruction, and 6 clock cycles for 
DIV instruction respectively. Operand forwarding is 
used in the pipeline. What is the number of clock 
cycles needed to execute the following sequence of 
instructions?


- **(A)** 13

- **(B)** 15

- **(C)** 17

- **(D)** 19



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

It is given that there is operand forwarding. In the case 
of operand forwarding the update value from previous 
instruction’s PO stage is forwarded to the present 
instruction’s PO stage. Here there’s RAW 
dependency between I1-I2 for R5 and between I2 -I3 
for R2. These dependencies are resolved by using 
operand forwarding as shown in the below timeline 
diagram. The total number of clock cycles needed is 
15. 
Alternate Approach: 
Instruction Operation PO 
Stage 
Extra Cycle 
(Stalls) 
I₀ MUL 3 2 
I₁ DIV 6 5 
I₂ ADD 1 -- 
I₃ SUB 1 -- 
<!-- PAGE 472 -->
Computer Organization and Architecture 
Total: 7 Extra Cycles 
(Stalls) Given Variables: 
 n = 4
 Number of 
Stages (k) = 5 Execution 
Time (ET) Calculation:
ET = [k + (n - 1)] × tp + tstalls (Extra Cycle Due to 
Hazards) 
ET = [5 + (4 - 1)] × 1 + 7 
ET = 8 + 7 
Ans: 15 cycles


</details>

---


### Q31. [GATE CSE - 2010 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 4 stage pipeline processor. The number of 
cycles needed by the four instructions I1, I2, I3, I4 in 
stages S1, S2, S3, S4 is shown below. 
What is the number of cycles needed to execute the 
following loop? 
For (i = 1 to 2) {I1; I2; I3; I4;}


- **(A)** 16

- **(B)** 23

- **(C)** 28

- **(D)** 30



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Here the bounds of the loop are constants, therefore 
the compiler will do the loop unrolling (If compiler 
won't then prefetcher will do) to increase the 
instruction level parallelism. And after loop 
unrolling 23 cycles are required for execution. 
Therefore, the correct answer would be (b). 
We assume the buffers between the pipeline stages 
can store multiple results in the form of a queue.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Delayed branching can help in the handling of 
control hazards 
The following code is to run on a pipelined 
processor with one branch delay slot: 
I₁: ADD R₂ ← R₇ + R₈ 
I₂: SUB R₄ ← R₅ − R₆ 
I₃: ADD R₁ ← R₂ + R₃ 
I₄: STORE Memory [R₄] ← R₁ 
BRANCH to Label if R₁ == 0 
Which of the instructions I₁, I₂, I₃ or I₄ can 
legitimately occupy the delay slot without any other 
program modification?


- **(A)** I₁

- **(B)** I₂

- **(C)** I₃

- **(D)** I₄



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

An instruction placed in a branch delay slot always 
executes, regardless of whether the branch is taken 
or not. To safely fill it with an instruction from before 
the branch, that instruction must have no data 
dependencies affecting the branch condition or 
subsequent logic. 
The branch condition depends entirely on register 𝑅1 
( if R1 == 0). 
 𝐼3 cannot be moved: It writes directly to 
𝑅1 ( ADD R1 +R2 + R3 ). Moving it below 
the branch means the branch would 
evaluate using an old, incorrect value of 
𝑅1.
 𝐼1 cannot be moved: It computes 𝑅2 
(ADD R2 + R7 + R8 ), which is 
needed immediately by 𝐼3 to 
compute the branch register 𝑅1. 
Moving it would break this critical 
data chain.
c. 𝐼2 cannot be moved: It computes 𝑅4 ( SUB R4 + R5 − 
R6 ), which is needed immediately by the memory 
write address in 𝐼4. 
d. 𝐼4 can be moved: It is a simple store instruction ( 
STORE Memory [R4] & R1). It reads 𝑅4 and 𝑅1 
but does not alter any registers that the branch relies 
on. All of its 
own source operands are fully calculated by the time the 
program reaches this block.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Which of the following are NOT true in a pipelined 
processor? 
1. Bypassing can handle all RAW hazards. 
2. Register renaming can eliminate all register 
carried WAR hazards. 
3. Control hazard penalties can be eliminated by 
dynamic branch prediction.


- **(A)** 1 and 2 only

- **(B)** 1 and 3 only

- **(C)** 2 and 3 only

- **(D)** 1, 2 and 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

I - False, Bypassing can't handle all RAW hazards, 
consider when any instruction depends on the result 
of LOAD instruction, now LOAD updates register 
value at Memory Access Stage (MA), so data will not 
be available directly on Execute stage. 
II - True, register renaming can eliminate all WAR Hazard. 
III- False, it cannot completely eliminate, though it can reduce 
Control Hazard Penalties


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Delayed branching can help in the handling of 
control hazards 
For all delayed conditional branch instructions, 
irrespective of whether the condition evaluates to 
true or false.


- **(A)** The instruction following the conditional 
branch instruction in memory is executed

- **(B)** . The first instruction in the fall through path is  
 executed

- **(C)** . The first instruction in the taken path is 
  executed

- **(D)** . The branch takes longer to execute than any  
 other instruction



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

In delayed branching, the instruction immediately 
after the branch is always executed, regardless of 
whether branch is taken or not 
So: 
Execution order = 
Branch → next instruction (delay slot) → then 
branch decision applied 
Evaluate options: 
A: instruction after branch is executed 
B: depends on branch outcome 
C: depends on branch outcome 
D: unrelated


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A non-pipelined single cycle processor operating at 
100MHz is converted into a synchronous pipelined 
processor with five stages requiring 
2.5nsec,1.5nsec,2nsec,1.5nsec and 2.5nsec, 
respectively. The delay of the latches is 0.5nsec. The 
speedup of the pipeline processor for a large number 
of instructions is:


- **(A)** 4.5

- **(B)** 4.0

- **(C)** 3.33

- **(D)** 3.0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Non-Pipeline Processor 
Frequency = 100 MHz 
Cycle time (tn) = 1 / (100 × 10⁶ Hz) = 10⁻⁸ sec 
10⁻⁸ sec = 10 × 10⁻⁹ sec 
Cycle time (tn) = 10 nsec 
Part 2: Pipeline Processor Stages (k) 
= 5 
Stage Delays: 2.5, 1.5, 2, 1.5, 2 nsec Buffer / 
Latch Delay = 0.5 nsec 
Pipeline Cycle Time (tp) = Max (Stage Delay) 
+ Buffer Delay 
tp = 2.5 + 0.5 
tp = 3 nsec 
When a very large number of instructions are executed: 
Speedup (S) = tn / tp S = 
10 nsec / 3 nsec S = 3.33 
Ans: 3.33 
<!-- PAGE 473 -->
Computer Organization and Architecture


</details>

---


### Q36. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a pipelined processor with the following 
four stages: 
IF: Instruction Fetch 
ID: Instruction Decode and Operand Fetch 
EX: Execute 
WB: Write Back 
The IF, ID, and WB stages take one clock cycle each 
to complete the operation. 
The number of clock cycles for the EX stage depends 
on the instruction. The ADD and SUB instructions 
need 1 clock cycle, and the MUL instruction needs 3 
clock cycles in the EX stage. 
Operand forwarding is used in the pipelined 
processor. 
What is the number of clock cycles taken to complete 
the following sequence of instructions?


- **(A)** 7

- **(B)** 8

- **(C)** 10

- **(D)** 14



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Considering EX to EX data forwarding


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A processor takes 12 cycles to complete an 
instruction 1. The corresponding pipelined 
processor uses 6 stages with the execution times of 
3,2,5,4,6 and 2 cycles respectively. What is the 
asymptotic speedup assuming that a very large 
number of instructions are to be executed?


- **(A)** 1.83

- **(B)** 2

- **(C)** 3

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

For a non-pipelined processor, there are 
𝑛 instructions and each instruction requires 12 
cycles, so the total number of cycles is 12𝑛. 
For a pipelined processor, each stage takes 6 
ns, and the total time to execute 𝑛instructions 
is : 6 × 6 + (𝑛 − 1) × 6.


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A CPU has a five -stage pipeline and runs at a 1 
GHz frequency. Instruction fetch happens in the 
first stage of the pipeline. A conditional branch 
instruction computes the target address and 
evaluates the condition in the third stage of the 
pipeline. 
The pr ocessor stops fetching new instructions 
following a conditional branch until the branch 
outcome is known. 
A program executes 10 9 instructions out of which 
20% are conditional branches. 
If each instruction takes one cycle to complete on 
average, then the to tal execution time of the 
program is:


- **(A)** 1.0 second

- **(B)** 1.2 Seconds

- **(C)** 1.4 Seconds

- **(D)** 1.6 Seconds



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

Given Data: 
 Cycle time = 1 nsec 
 Branch Instruction frequency = 20% 
 Target address = 3rd stage 
 Program Contains = 10⁹ Instructions 
Branch Penalty Calculation: 
 Branch Penalty = 3 - 1 = 2 
Stall Calculation (from tree diagram):


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A pipelined processor uses a 4-stage instruction 
pipeline with the following stages: Instruction fetch 
(IF), Instruction decode (ID), Execute (EX) and 
Writeback (WB). The arithmetic operations as well 
as the load and store operations are carried out in 
the EX stage. The sequence of instructions 
corresponding to the statement 𝑋=(𝑆−𝑅∗(𝑃+𝑄))/𝑇 
is given below. The 
values of variables 𝑃,𝑄,𝑅,𝑆 and 𝑇 are available in 
the registers 𝑅0,𝑅1,𝑅2,𝑅3 and 𝑅4 respectively, 
before the execution of the instruction sequence. 
ADD 𝑅5,𝑅0,𝑅1 ;𝑅5←R0 + R1 
MUL 𝑅6,𝑅2,𝑅5 ;𝑅6←R2 * R5 
SUB 𝑅5,𝑅3,𝑅6 ;𝑅5←R3 -R6 
DIV 𝑅6,𝑅5,𝑅4 ;𝑅6←R5/R4 
STORE 𝑅6,𝑋 ;𝑋←R6 
The IF, ID and WB stages take 1 clock cycle each. 
The EX stage takes 1 clock cycle each for the ADD, 
SUB and STORE operations, and 3 clock cycles each 
for MUL 
and DIV operations. Operand forwarding from the 
EX 
stage to the ID stage is used. The number of Read -
After-Write (RAW) dependencies, Write -After-
Read( WAR) dependencies, and Write After -Write 
(WAW) dependencies in the sequence of instructions 
are, respectively,


- **(A)** 2,2,4

- **(B)** 3,2,3

- **(C)** 4,2,2

- **(D)** 3,3,2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

lim 
12𝑛 
𝑛→∞ 36+(𝑛−1)×6 = 
= 2.


</details>

---


### Q40. [GATE CSE - 2006 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A pipelined processor uses a 4-stage instruction 
pipeline with the following stages: Instruction fetch 
(IF), Instruction decode (ID), Execute (EX) and 
Writeback (WB). The arithmetic operations as well as 
the load and store operations are carried out in the EX 
stage. The sequence of instructions corresponding to 
the statement 𝑋=(𝑆−𝑅∗(𝑃+𝑄))/𝑇 is given below. The 
values of variables 𝑃,𝑄,𝑅,𝑆 and 𝑇 are available in the 
registers 𝑅0,𝑅1,𝑅2,𝑅3 and 𝑅4 respectively, before the 
execution of the instruction sequence. 
ADD 𝑅5,𝑅0,𝑅1 ;𝑅5←R0 + R1 
MUL 𝑅6,𝑅2,𝑅5 ;𝑅6←R2 * R5 
SUB 𝑅5,𝑅3,𝑅6 ;𝑅5←R3 -R6 
DIV 𝑅6,𝑅5,𝑅4 ;𝑅6←R5/R4 
STORE 𝑅6,𝑋 ;𝑋←R6 
The IF, ID and WB stages take 1 clock cycle each. 
The EX stage takes 1 clock cycle each for the ADD, 
SUB and STORE operations, and 3 clock cycles each 
for MUL 
and DIV operations. Operand forwarding from the 
EX 
stage to the ID stage is used. The number of clock 
cycles 
required to complete the sequence of instructions i


- **(A)** 10

- **(B)** 12

- **(C)** 14

- **(D)** 16



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** s: (B)


**Step-by-Step Explanation:**

 Total Instructions (100%) split into: 
Normal (80%): 0 Stalls 
Branch (20%): 2 Stalls 
 #Stalls / Instruction = (0.80 × 0) + (0.20 × 2) 
 #Stalls / Instruction = 0.4 
Execution Time (ET) Calculation: 
 Average Instruction ET = (1 + #Stalls/Instruction) × 
Cycle time 
 Average Instruction ET = (1 + 0.4) × 1 nsec 
 Average Instruction ET = 1.4 nsec 
Total Program ET Calculation: 
 Program ET = (Total Instructions) × (Average 
Instruction ET) 
 Program ET = 10⁹ × (1.4 × 10⁻⁹) sec 
 Program ET = 1.4 sec  
Ans: 1.4 sec


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a processor P whose instruction set 
architecture is the load-store architecture. The 
instruction format is such that the first operand of 
any instruction is the destination operand. Which 
one of the following sequences of instructions 
corresponds to the high-level language statement 
Z = X + Y? 
Note: X, Y, and Z are memory operands. R0, R1, 
and R2 are registers.


- **(A)** ADD Z, X, Y

- **(B)** LOAD R0, X 
ADD Z, R0, Y

- **(C)** ADD R0, X, Y 
STORE Z, R0

- **(D)** LOAD R0, X 
LOAD R1, Y 
ADD R2, R0, R1 
STORE Z, R2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In load-store architecture, ALU operations work 
only on registers, not directly on memory. 
So: 
First load X and Y into registers 
Perform addition in registers 
Store result back to memory 
Option (d) follows this exactly: 
LOAD R0, X 
LOAD R1, Y 
ADD R2, R0, R1 
STORE Z, R2


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Match each addressing mode in List I with a 
data element or an element of a data structure 
(in a high-level language) in List II. 
List I 
 P. Immediate 
 Q. Indirect 
 R. Base with index 
 S. Base with offset/displacement 
List II 
1. Element of an array 
2. Pointer 
3. Element of a record 
4. Constant


- **(A)** P-4, Q-3, R-1, S-2

- **(B)** P-4, Q-2, R-1, S-3

- **(C)** P-1, Q-4, R-3, S-2

- **(D)** P-2, Q-3, R-1, S-4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Immediate Am : Constant 
Indirect Am : Pointer 
Base with Index : Element of Array 
Base with Offset/Displacement : Element of a 
Record


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a processor that has 16 general purpose 
registers and it uses 2-byte instruction format for all 
its instructions. Variable-sized opcodes are 
permitted. There are three different types of 
instructions; M-type, R-type, and C-type. Each M-
type instruction has 2 register operands and a 6-bit 
immediate operand. Each R-type instruction has 3 
register operands. Each C-type instruction has a 
register operand and a 6-bit offset value. If there are 
2 unique M-type opcodes and 7 unique R-type 
opcodes, which one of the following options gives 
the maximum number of unique opcodes possible 
for C-type instructions?


- **(A)** 8

- **(B)** 4

- **(C)** 64

- **(D)** 16



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

16 general purpose registers, no of bits required = 4 
instruction format = 2 Byte = 16 bit 
M inst 
Opcode 
2bit 
Reg 
4 bit 
Reg 
4 bit 
𝐼𝑚 
6 𝑏𝑖𝑡 
R Inst: 
Opcode 
4 bit 
Reg 
4 bit 
Reg 
4 bit 
Reg 
4 bit 
C Inst: 
Opcode 
6 bit 
Reg 
4 bit 
Offset 
6 bit 
Here we use Expand Opcode Technique 
Inst. Type #Total Opcode #Used Opcode #Available Opcode 
M 22 = 4 2 4 − 2 = 2 
R 2 × 24−2 = 8 7 8 − 7 = 1 
C 1 × 26−4 = 4 - 4 
GATE CSE - 2005 MCQ (2 -MARKS) 
1.(d) 2.(b) 3.(b) 4.(3) 
5.(d) 6.(b) 7.(32) 8.(34) 
9.(b) 10.(50) 11.(14) 12.(32) 
13.(a) 14.(-16) 15.(d) 16.(16) 
17.(500) 18.(d) 19.(a) 20.(16383) 
21. (d) 22.(c) 23.(d) 24.(a) 
25.(d) 26.(a) 27.(c) 28.(b) 
29.(b) 30.(c) 31.(c) 32.(d) 
33.(d) 34.(b) 35.(c)  
<!-- PAGE 483 -->
Computer Organization and Architecture


</details>

---


### Q4. [GATE CSE - 2026 MCQ SET – 1 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An application executes 6.4 × 10⁸ number of 
instructions in 6.3 seconds. There are four types of 
instructions, the details of which are given in the 
table. The duration of a clock cycle in nanoseconds 
is  (rounded off to one decimal place). 
Instruction 
type 
Clock cycles 
required per 
instruction 
(CPI) 
Number of 
instruction 
executed 
Branch 2 2.25 × 108 
Load 5 1.20 × 108 
Store 4 1.65 × 108 
Arithmetic 3 1.30 × 108


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Instruction 
Type 
Clock cycles 
required per 
instruction 
(CPI) 
Number of 
instruction 
executed 
Branch 2 2.25 × 108 
Load 5 1.20 108 
Store 4 1.65 × 108 
Arithmetic 3 1.30 × 108 
Total Execution Time = 6.3 sec 
Number of clock cycles = Number of instructions 
executed × CPI 
Clock cycles for each instruction type: 
Branch Instructions = 2 × (2.25 × 10⁸) = 4.5 × 10⁸ 
Load Instructions = 5 × (1.20 × 10⁸) = 6.0 × 10⁸ 
Store Instructions = 4 × (1.65 × 10⁸) = 6.6 × 10⁸ 
Arithmetic Instructions = 3 × (1.30 × 10⁸) = 3.9 × 
10⁸ 
Total Clock Cycles = (4.5 × 10⁸) + (6.0 × 10⁸) + 
(6.6 × 10⁸) + (3.9 × 10⁸) = 21 × 10⁸ cycles 
Execution Time = Total Clock Cycles × Clock 
Cycle Time 
Clock Cycle Time = 6.3 / (21 × 10⁸) sec 
= 0.3 × 10⁻⁸ sec = 3 × 10⁻⁹ sec = 3 ns 
Answer: Clock Cycle Time = 3 ns


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are part of an Instruction 
Set Architecture of a processor?


- **(A)** The size of the cache memory

- **(B)** The clock frequency of the processor

- **(C)** The number of cache memory levels

- **(D)** The total number of registers



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

ISA (Instruction Set Architecture) defines what 
is visible to the programmer 
It includes: 
Instruction formats 
Addressing modes 
Registers (number, type) 
It does NOT include: 
Cache size 
Cache levels 
Clock 
frequency


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor has 64 general-purpose registers and 
50 distinct instruction types. An instruction is 
encoded in 32-bits. What is the maximum number 
of bits that can be used to store the immediate 
operand for the given instruction?


- **(A)** 16

- **(B)** 20

- **(C)** 22

- **(D)** 24



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

we need 6 bits to represent registers 
we need 6 bits to represent opcode (we have 50 
distinct types of instructions) 
we have 32 bits instruction 
OPCODE REGISTER VALUE 
6 6 32-(6+6) 
VALUE = 32 - 12 = 20 
Maximum 20 bits can be used to store immediate 
operand.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor with 16 general purpose registers uses 
a 32-bit instruction format. The instruction format 
consists of an opcode field, an addressing mode 
field, two register operand fields, and a 16-bit 
scalar field. If 8 addressing modes are to be 
supported, the maximum number of unique 
opcodes possible for every addressing mode is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 32


**Step-by-Step Explanation:**

To determine the maximum number of unique 
opcodes possible for every addressing mode, we 
need to break down the 32-bit instruction format and 
understand how the bits are allocated to each field 
Here's the modified solution in direct format: 
The 32-bit instruction format consists of the 
following fields: 
Opcode field 
Addressing mode field 
Two register operand fields 
16-bit scalar field 
Given details: 
The processor has 16 general purpose registers, 
which means each register operand field needs log₂ 
(16) = 4 bits. 
There are 8 addressing modes, so the addressing 
mode field needs log₂ (8) = 3 bits. 
The scalar field is fixed at 16 bits. 
Let opcode be the number of bits allocated to the 
Opcode Field The bit allocation is as follows: 
Scalar field: 16 bits 
Two register operand fields: 4 + 4 = 8 bits 
Addressing mode field: 3 bits 
Total bits used by these fields: 
16 + 8 + 3 = 27 bits 
The remaining bits for the opcode field are: 
32 − 27 = 5 bits 
Therefore, the number of unique opcodes possible 
for every addressing mode, given 5 bits, is: 
2⁵ = 32 
So, the maximum number of unique opcodes 
possible for every addressing mode is 32.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor uses a 32-bit instruction format and 
supports byte-addressable memory access. The 
ISA of the processor has 150 distinct instructions. 
The instructions are equally divided into two 
types, namely R-type and I-type, whose formats 
are shown below. 
R-type Instruction Format: 
I- type Instruction Format: 
In the OPCODE, 1 bit is used to distinguish between 
I-type and R-type instructions, and the remaining 
bits indicate the operation. The processor has 50 
architectural registers, and all register fields in the 
instructions are of equal size. 
Let X be the number of bits used to encode the 
UNUSED field, Y be the number of bits used to 
encode the OPCODE field, and Z be the number of 
bits used to encode the immediate value/address 
field The value of X + 2Y + Z is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 34


**Step-by-Step Explanation:**

• Opcode field (Y): There are 150 instructions, 
equally divided into two types. Therefore, there are 
75 I-type instructions and 75 R -type instructions. To 
encode 75 instructions, we need ⌈log₂ (75) ⌉ = 7 bits. 
In addition, 1 bit is required to distinguish between I-
type and R-type instructions. Hence, the total number 
of bits used for the opcode field is Y = 7 + 1 = 8 bits. 
• Register field: There are 50 architectural registers. 
Since all register fields are of equal size, the number 
of bits required to encode a register is ⌈log₂ (50) ⌉ = 
6 bits. 
• Unused field (X): In R-type instructions, the total 
instruction length is 32 bits. Subtracting the opcode 
field (8 bits) and three register fields (3 × 6 = 18 
bits), the unused field size is 
X = 32 − (8 + 18) = 6 bits. 
• Immediate value/address field (Z): In I-type 
instructions, there are two register fields (2 × 6 = 12 
<!-- PAGE 484 -->
Computer Organization and Architecture 
bits) and the opcode field (8 bits). Therefore, the 
immediate/address field size is 
Z = 32 − (8 + 12) = 12 bits. 
Therefore, the values of X, Y, and Z are: 
• X = 6 bits (UNUSED field 
• Y = 8 bits (OPCODE field 
• Z = 12 bits (immediate value/address field 
So, the answer is 6 + 2 × 8 + 12 = 34.


</details>

---


### Q9. [GATE CSE - 2025 MCQ SET – 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the given C-code and its corresponding 
assembly code, with a few operands U1-U4 being 
unknown. Some useful information as well as the 
semantics of each unique assembly instruction is 
annotated as inline comments in the code. The 
memory is byte-addressable. 
 ;assembly code (; indicates comments) 
 ;r1-r5 are 32-bit integer registers 
//C-code ;initialize r1=0, r2=10 
 ;initialize r3, r4 with base address of a, b 
 L01: jeq r1, r2, end ;if(r1==r2) goto end 
 L02: lw, r5, 0(r4) ;r5 <- Memory[r4+0] 
int a[10], b[10], i; L03: sh1, r5, r5, U1 ;r5 <- r5 << U1 
// int is 32 bit L04: sw, r5, 0(r3) ;Memory[r3+0] <- r5 
for(i=0; i<10; i++) L05: add, r3, r3, U2 ;r3 <- r3+U2 
a[i] = b[i] * 8; L06: add, r4, r4, U3 
 L07: add, r1, r1, 1 
 L08: jmp U4 ;goto U4 
 L09: end 
Which one of the following options is a CORRECT 
replacement for operands in the position (U1, U2, 
U3, U4) in the above assembly code?


- **(A)** (8, 4, 1, L02)

- **(B)** (3, 4, 4, L01)

- **(C)** (8, 1, 1, L02)

- **(D)** (3, 1, 1, L01)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

To understand u1, we must first find out what the 
register r5 is storing. 
If you check closely the line L02, it’s fetching an 
element from array b and storing it in r5. 
Line L04 is storing the value present in r5 to array 
a, so we’re definitely performing the 
multiplication by 8 in L03. 
L03 is a shift-left operator. To multiply by 8, how 
many bits (in binary) do we need to shift to the 
left? If you can find out that number, that would 
be the answer to u1. 
L05 and L06 are incrementing the values of 
registers r3 and r5 respectively to point to the next 
element of a and b respectively. But by how much 
shall we increase it to make it point to the next 
element? 
Suppose at some point in time, r3 is storing 1000 
in decimal and pointing to the 2nd element of array 
a. Recall that each element is 4Bytes in size (given 
in question). Now, what is the address of the 3rd 
element of array a, can you guess? Yes, it would 
be 1004. Hence, 4 must be added. 
Note: Given memory is byte addressable. Each int 
takes 32bit=4B, so we need to shift by 4 
addresses. 
u4 should be the line to make the loop repeat. Note 
that if we make it L02, the loop termination 
condition is skipped and would lead to an infinite 
loop (or unless we got trapped due to accessing 
illegal memory). 
The value of u1, u2, u3, u4 will be 3, 4, 4, L01.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following instruction sequence 
where registers R1, R2 and R3 are general 
purpose and MEMORY [X] denotes the content 
at the memory location X . 
Instruction 
Semantics 
Instruction 
Size 
(bytes) 
MOV 
R1,(5000) 
R1 ← 
MEMORY[5000] 4 
MOV 
R2,(R3) 
R2 
←MEMORY[R3] 4 
ADDR2, 
R1 R2 ← R1 + R2 2 
MOV 
(R3), R2 
MEMORY[R3]← 
R2 4 
INC R3 R3 ← R3 + 1 2 
DEC R1 R1 ← R1 − 1 2 
BNZ 1004 
Branch if not zero 
to the given 
absolute address 
HALT Stop 1 
Assume that the content of the memory location 
5000 is 10 , and the content of the register R3 is 
3000 . The content of each of the memory 
locations from 3000 to 3010 is 50 . The 
instruction sequence starts from the memory 
location 1000. All the numbers ar e in decimal 
format. Assume that the memory is byte 
addressable. 
After the execution of the program, the content 
of memory location 3010 is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 50


**Step-by-Step Explanation:**

R1 = M[5000] = 10 
R3 = 3000 
Memory[3000…3020] = 50 
Loop runs 10 times (R1 decreases from 10 
to 0) 
Each iteration: 
R2 = M[R3] = 50 
R2 = R1 + 50 
M[R3] = 50 + R1 
R3 = R3 + 1 
So updates are: 
3000 → 50 + 10 = 60 
3001 → 50 + 9 = 59 
… 
3009 → 50 + 1 = 51 
Address 3010 is never touched 
Final value at 3010:50


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor has 64 registers and uses 16-bit 
instruction format. It has two types of instructions: 
I-type and R-type. Each I-type instruction contains 
an opcode, a register name, and a 4-bit immediate 
value. Each R-type instruction contains an opcode 
and two register names. If there are 8 distinct I-type 
opcodes, then the maximum number of distinct R-
type opcodes is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 14


**Step-by-Step Explanation:**

Instruction Length: 16 bits 
To distinguish among 64 registers, we need log₂ (64) 
= 6 bits 
I-type instruction format: 
Opcode | Register | Immediate Value 
R-type instruction format: 
Opcode | Register | Register 
Maximum possible encodings = 2¹⁶ 
It is given that there are 8 I-type instructions. Let the 
maximum R-type instructions be x. 
Therefore, 
(8 × 2⁶ × 2⁴) + (x × 2⁶ × 2⁶) = 2¹⁶ 
⇒ x = 16 − 2 = 14 
Alternate Solution: 
R-type: 
 Opcode = 4 bits → Total combinations = 24 = 
16operations 
 Given R-type instructions = 𝑥 
 Free opcodes after allocating R-type = (16−𝑥) 
I-type: 
 Format includes: 
o Opcode = 6 bits 
o Immediate field present 
 Total operations in I-type = (Free opcodes) × 
(variations due to immediate bits) 
Total I-type operations = (16 − 𝑥) × 2(6−4) 
= (16 − 𝑥) × 22 
Given: 
I-type instructions = 8 
8 = (16 − 𝑥) × 4 
2 = 16 − 𝑥 
𝑥 = 16 − 2 
𝑥 = 14 
<!-- PAGE 485 -->
Computer Organization and Architecture


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor has 16 integer registers (R0, R1, …., 
R15) and 64 floating point registers (F0, F1, …., 
F63). It uses a 2-byte instruction format. There are 
four categories of instructions: Type-1, Type-2, 
Type-3 and Type-4. Type-1 category consists of four 
instructions, each with 3 integer register operands 
(3Rs). Type-2 category consists of eight instructions, 
each with 2 floating point register operands (2Fs). 
Type-3 category consists of fourteen instructions, 
each with one integer register operand and one 
floating point register operand (1R+1F). Type-4 
category consists of N instructions, each with a 
floating-point register operand (1F). The maximum 
value of N is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 32


**Step-by-Step Explanation:**

Total Instruction Size: 2 Bytes = 16 bits 
Total Encode Combinations Available: 216 =
65,536 
Integer Register (R) : 16 unique options ⟹
log2 (16) = 4 bits 
Floating-Point Register (𝐹): 64 unique options ⟹
log2 (64) = 6 bits 
Encodings Consumed = ( Number of 
Instructions ) × 2Total bits used by its  
 Type-1 (4 instructions, 3Rs): Operands take 4 + 4 +
4 = 12 bits. 
 Encodings 𝑇1 = 4 × 212 = 4 × 4096 = 16,384 
 Type-2 (6 instructions, 2 Fs ): Operands take 6 + 6 =
12 bits. 
 Encodings 𝑇2 = 8 × 212 = 8 × 4096 = 32,768 
 Type-3 (14 instructions, 1R + 1F): Operands take 4 +
6 = 10 bits. 
 Encodings 𝑇3 = 14 × 210 = 14 × 1024 = 14,336 
Remaining Combination Pool for Type-4: 
Remaining Encodings = 65,536 − (16,384 +
32,768 + 14,336) 
Remaining Encodings = 65,536 − 63,488 = 2,048 
 Type-4 Configuration ( 𝑁 instructions, 1F): Operands 
take 6 bits, which means each unique instruction 
consumes 26 = 64 binary combinations. 
𝑁 × 26 = 2,048 ⟹ 𝑁 = 2,04864 = 32 
Alternate Solution: 
Type 1 
 Opcode = 4 bits 
 IR = 4 bits 
 IR = 4 bits 
 IR = 4 bits 
Total no. of operations in Type 1 = 24 = 16 
Given = 4 instructions 
Free opcodes after allocating Type 1 = 16 − 4 
= 12 
Type 2 
 Opcode = 4 bits 
 IR = 4 bits 
 IR = 4 bits 
 IR = 4 bits 
Total number of operations in Type 2 
= Free opcodes × 2increment bits 
= 12 × 2(4−4) = 12 × 20 = 12 
Given Type 2 = 8 instruction operations Free 
opcodes after Type 2 = 12 − 8 = 4 
Type 3 
 Opcode = 6 bits 
 IC = 4 bits 
 FR = 6 bits 
Total operations in Type 3 
= Free opcodes × 2increment bits 
= 4 × 2(6−4) = 4 × 4 = 16 
Given Type 3 = 14 instruction operations 
Free opcodes after Type 3 = 16 − 14 = 2 
Type 4 
 Opcode = 10 bits 
 FR = 6 bits 
Total number of operations in Type 4 
= Free opcodes × 2increment bits 
= 2 × 2(10−6) = 2 × 16 = 32 
Final Answer : N = 32


</details>

---


### Q13. [GATE CSE – 2020 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The following are some events that occur after a 
device controller issues an interrupt while the 
process L is under execution. 
(P) The processor pushes the process status of L 
onto the control stack. 
(Q) The processor finishes the execution of the 
current instruction. 
(R) The processor executes the interrupt service 
routine. 
(S) The processor pops the process status of L 
from the control stack. 
(T) The processor loads the new PC value based 
on the interrupt. 
Which one of the following is the correct order 
in which these events above occur?


- **(A)** QPTRS

- **(B)** PTRSQ

- **(C)** TRPQS

- **(D)** QTPRS



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A)


**Step-by-Step Explanation:**

When interrupt occurs, after completion of current 
instruction, interrupt will be serviced. It push the 
program counter (PC) value into stack & control 
transfer to ISR. 
Q: Process finish the current instruction 
execution. 
P: Push the PC value into stack. 
T: Interrupt → PC 
R: Service the interrupt 
S: Pop the PC value 
Q P T R S:


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a RISC machine where each instruction is 
exactly 4 bytes long. Conditional and unconditional 
branch instructions use the PC -relative addressing 
mode, with the offset specified in bytes to the target 
location of the branch instruction. 
Furthermore, the offset is always with respect to the 
address of the next instruction in the program 
sequence. 
Consider the following instruction sequence: 
If the target of the branch instruction is i, then the 
decimal value of the Offset is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - -16


**Step-by-Step Explanation:**

The Program Counter (PC) is updated with the 
address of the next instruction before the current 
instruction completes execution. 
Hence, the question states that the PC already 
contains the address of the next sequential instruction. 
Just before executing instruction i+3i + 3i+3, the 
system state is as follows: 
Note: BEQ stands for Branch if Equal. 
<!-- PAGE 486 -->
Computer Organization and Architecture 
The question states that the branch target 
address is instruction ‘i’, which is located 
at address 2000 in this example.  
Currently, the Program Counter (PC) contains 
2016, which is the address of the next sequential 
instruction. 
Therefore, we must branch from 2016 back to 
2000. 
2016−2000=16 
Hence, the required offset is –16, meaning 16 
must be subtracted from the next instruction 
address (2016) to reach the target address (2000).


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A processor has 40 distinct instructions and 24 
general purpose registers. A 32-bit instruction word 
has an opcode, two register operands and an 
immediate operand The number of bits available for 
the immediate operand field is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 16


**Step-by-Step Explanation:**

Instruction opcode size = ⌈log₂ 40⌉ = 6 bits 
Register operand size = ⌈log₂ 24⌉ = 5 bits 
Total instruction length = 32 bits 
Bits required for opcode + two register operands 
= 6 + 2 × 5 
= 16 bits 
Bits available for immediate operand 
= 32 − 16 
= 16 bits.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a Processor with 64 registers and an 
instruction set of size twelve. Each instruction has 
five distinct fields, namely, opcode, two source 
register identifiers, one destination register 
identifier, and a twelve-bit immediate value. Each 
instruction must be stored in memory in a byte 
aligned fashion. If a program has 100 instructions, 
the amount of memory (in bytes) consumed by the 
program text is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 500


**Step-by-Step Explanation:**

64 Register, 
Instruction set size = 12 
5 Fields = Opcode, Source Reg1, S Reg2, D Reg2, 
12-bit Immediate field 
64 Register → Reg. AF = 6bit 
Instruction size = 4 + 6 + 6 + 6 +12 = 34 bits = 5 Byte 
Program having = 100 Inst. Program size = 
100 × 5 = 500 byte.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the 𝐶 struct defined below: 
struct data { 
int marks [100]; 
char grade: 
int cnumber; 
l: 
struct data student: 
The base address of student is available in register 
R1. The field student.grade can be accessed 
efficiently using:


- **(A)** Post-increment addressing mode, (R1)+

- **(B)** Pre-decrement addressing mode, −(𝑅1)

- **(C)** Register direct addressing mode, R1

- **(D)** Index addressing mode, 𝑋(𝑅1), where 𝑋 is 
an offset represented in 2′𝑠 complement 16 
-bit representation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Struct layout: 
int marks[100] → 100 × 4 = 400bytes 
char grade → next byte ⇒ offset = 400 
int number → after padding 
So: 
student.grade is at R1 + 400 
Efficient access: 
Need base + offset ⇒ indexed addressing 
Answer: 
Index addressing mode, X(R1) (Option D)


</details>

---


### Q18. [GATE CSE – 2017 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a processor with byte-addressable memory. 
Assume that all registers, including Program 
Counter (PC) and Program Status Word (PSW), are 
of size 2 bytes. A stack in the main memory is 
implemented from memory location (0100)16 and it 
grows upward The stack pointer (SP) points to the 
top element of the stack. The current value of SP is 
(016E)16. The CALL instruction is of two words, the 
first word is the op-code and the second word is the 
starting address of the subroutine (one word = 2 
bytes). The CALL instruction is implemented as 
follows: 
• Store the current value of the PC in the stack. 
• Store the value of the PSW register in the stack. 
• Load the starting address of the subroutine in PC 
The content of the PC just before the fetch of a 
CALL instruction is (5FA0)16. After execution of the 
CALL instruction, the value of the stack pointer is


- **(A)** (O16A) ₁₆

- **(B)** (O16C) ₁₆

- **(C)** (O170) ₁₆

- **(D)** (O172) ₁₆



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given 
Current SP value is = (016E)16 
PC = 2 Byte, PSW = 2 byte 
(1) Store the current value of the PC into the stack. 
Here PC is 2 bytes so stack pointer to increase by 2 
bytes 
(016E)2 + 2 = (0170)16 
(2) Store the value of PSW in the stack Here PSW is 
also 2-byte long. So SP increased by 2 byte 
(0170)16 + 2 = (0172)16 SP = (0172)16 
(3) Load the starting address of the subroutine in the 
PC 
PC ← ISR 
SP= (0172)16


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For computers based on three-address instruction 
formats, each address field can be used to specify 
which of the following: 
S1: A memory operand 
S2: A processor register 
S3: An implied accumulator register


- **(A)** Either S1 or S2

- **(B)** Either S2 or S3

- **(C)** Only S2 and S3

- **(D)** All of S1, S2 and S3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In a three-address instruction format, each address 
field explicitly specifies an operand location. 
Analysis: 
 S1: A memory operand → Yes, address fields 
can point to memory locations 
 S2: A processor register → Yes, address fields 
can specify registers 
 S3: An implied accumulator register → No, 
“implied” means it is not specified in the 
instruction field 
Conclusion: 
Each address field can specify either memory or 
register, but not an implied accumulator.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A machine has a 32-bit architecture, with 1-word 
long instructions. It has 64 registers, each of which 
is 32 bits long. It needs to support 45 instructions, 
which have an immediate operand in addition to 
two register operands. Assuming that the 
immediate operand is an unsigned integer, the 
maximum value of the immediate operand is 
 .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 16383


**Step-by-Step Explanation:**

Instruction size = 1 word = 32 bit 
45 Operation = 6 bit 
64 Register = 6 bit 
Immediate field = 32 – (6 + 6 + 6) 
= 14 bit 
Immediate field Range = 0 to 214 –1 = 16383


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a hypothetical processor with an 
instruction of type LW R1, 20(R2), which during 
execution reads a 32-bit word from memory and 
stores it in a 32-bit register R1. The effective 
address of the memory location is obtained by the 
addition of a constant 20 and the contents of 
register R2. Which of the following best reflects 
the addressing mode implemented by this 
instruction for operand in memory?


- **(A)** Immediate Addressing

- **(B)** Register Addressing

- **(C)** Register Indirect Scaled Addressing

- **(D)** Base or Indexed Addressing



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Base Index Addressing, as the content of register R2 
will serve as the index, and 20 will be the Base 
address. 
<!-- PAGE 487 -->
Computer Organization and Architecture


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are true of the auto-
increment addressing mode? 
I. It is useful in creating self-relocating code 
II. If it is included in an Instruction Set Architecture, 
then an additional ALU is required for effective 
address calculation 
III. The amount of increment depends on the size of 
the data item accessed


- **(A)** I only

- **(B)** Il only

- **(C)** III only

- **(D)** II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

I:Auto-increment is for sequential access 
(arrays), not specifically for self-relocating 
code 
II:No extra ALU is required; increment can 
be handled within existing hardware 
III:Increment depends on data size (byte, 
word, etc.) 
Answer: 
III only (Option C)


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following must be true for the 
RFE (Return From Exception) instruction on a 
general purpose processor? 
I.It must be a trap instruction 
II. It must be a privileged instruction 
III. An exception cannot be allowed to occur 
during execution of an RFE instruction


- **(A)** I only

- **(B)** II only

- **(C)** I and II only

- **(D)** I, II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

I:RFE is used to return from exception, not 
to generate one ⇒ not a trap instruction 
II:It restores processor state (PC, flags, 
mode) ⇒ must be privileged 
III:If exception occurs during RFE, state 
restoration may break ⇒ must be atomic ⇒ 
no exception allowed 
Answer: 
II and III only (Option D)


</details>

---


### Q24. [GATE CSE - 2014 NAT SET - 1 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Assume that EA = (X)+ is the effective address 
equal to the contents of location X, with X 
incremented by one word length after the 
effective address is calculated; EA = −(X) is the 
effective address equal to the contents of location 
X, with X decremented by one word length before 
the effective address is calculated; EA = (X)− is 
the effective address equal to the contents of 
location X, with X decremented by one word 
length after the effective address is calculated. 
The format of the instruction is (opcode, source, 
destination), which means (destination ← source 
op destination). Using X as a stack pointer, which 
of the following instructions can pop the top two 
elements from the stack, perform the addition 
operation and push the result back to the stack. 
GATE MCQ – 2008 MCQ (1-MARKS) 
GATE MCQ – 2011 MCQ (1-MARKS)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation :- 
EA = (X)+ → use value at X, then increase X 
(post-increment) 
 EA = −(X) → first decrease X, then use value 
(pre-decrement) 
 EA = (X)− → use value at X, then decrease X 
(post-decrement) 
To add the top two stack elements: 
1. First pop the top element → we get a 
2. Stack pointer moves down (X decreases) 
3. Pop again → we get b 
4. Now add them → a + b 
5. Store the result back on top of the stack 
This is done by: 
ADD (X)−, X


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program segment. Here 
R1, R2 and R3 are the general purpose registers. 
Instruction 
Operation 
Instruction 
Size (no. 
of words) 
 MOV 
R1,(3000) R1 ← M3000] 2 
LOOP: MOV R2,(R3) R2←M[R3] 1 
 ADD R2,R1 R2 ← R1 + R2 1 
 MOV 
(R3),R2 M[R3] ←R2 1 
 INC R3 R3←R3+1 1 
 DEC R1 R1 ← R1 − 1 1 
 BNZLOOP Branch on not zero 2 
 HALT Stop 1 
Assume that the content of memory 
location 3000 is 10 and the content of the 
register R3 is 2000. The content of each of 
the memory locations 
from 2000 to 2010 is 100. The program is 
loaded from the memory location 1000. All 
the numbers are in decimal. 
Assume that the memory is word addressable. The 
number of memory references for accessing the 
data in executing the program completely is


- **(A)** 10

- **(B)** 11

- **(C)** 20

- **(D)** 21



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The loop is executed 10 times and there are two 
memory references in the loop (each MOV is 
loading 1 word, so 1 memory reference for each 
MOV inside the loop). So number of memory 
references inside loop is: 
2 (MOV) × 10 (times iteration) × 1 (1-word access 
/ MOV) = 20 memory accesses. 
One memory access is outside the loop for the first 
instruction: 
MOV R1, (3000) 
So, totally 20 + 1 = 21.


</details>

---


### Q26. [GATE CSE – 2007 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program segment. Here R1, 
R2 and R3 are the general purpose registers. 
Instruction 
Operation 
Instruction 
Size (no. 
of words) 
 MOV 
R1,(3000) R1 ← M3000] 2 
LOOP: MOV R2,(R3) R2←M[R3] 1 
 ADD R2,R1 R2 ← R1 + R2 1 
 MOV 
(R3),R2 M[R3] ←R2 1 
 INC R3 R3←R3+1 1 
 DEC R1 R1 ← R1 − 1 1 
 BNZLOOP Branch on not zero 2 
 HALT Stop 1 
Assume that the content of memory location 3000 is 
10 and the content of the register R3 is 2000. The 
content of each of the memory locations from 2000 to 
2010 is 100. The program is loaded from the memory 
location 1000. All the numbers are in decimal. 
Assume that the memory is word addressable. After 
the execution of this program, the content of memory 
location 2010 is:


- **(A)** 100

- **(B)** 101

- **(C)** 102

- **(D)** 110



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

M[3000] = 10 ⇒ R1 = 10 (loop count) 
R3 = 2000 
Memory 2000–2010 initially = 100 
Loop behavior (10 times): 
Each iteration: 
R2 ← M[R3] 
R2 ← R1 + R2 
M[R3] ← R2 
R3 ← R3 + 1 
R1 ← R1 − 1 
Track updates: 
Iteration 1: addr 2000 → 100 + 10 = 110 
Iteration 2: addr 2001 → 100 + 9 = 109 
… 
Iteration 10: addr 2009 → 100 + 1 = 101 
Address 2010 is never modified 
Final value at 2010: 
Answer: 
100 (Option A)


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following program segment. Here 
R1, R2 and R3 are the general purpose registers. 
Instruction 
Operation 
Instruction 
Size 
(no. of 
words) 
 MOV 
R1,(3000) R1←M[3000] 2 
LOOP: MOV R2,(R3) R2 ← [R3] 1 
 ADD 
R2,R1 R2 ← R1+R2 1 
 MOV 
(R3),R2 M[R3] ←R2 1 
 INC R3 R3 ← R3+1 1 
 DEC R1 R1 ← R1-1 1 
 BNZ 
LOOP 
Branch on not 
zero 2 
 HALT Stop 1 
Assume that the content of memory location 3000 
is 10 and the content of the register R3 is 2000 . The 
content of each of the memory locations from 2000 
to 2010 is 100 . The program is loaded from the 
memory location 1000. All the numbers are in 
decimal. 
Assume that the memory is byte addressable and 
the word size is 32 bits. If an interrupt occurs during 
the execution of the instruction "INC R3", what 
return address will be pushed on to the stack?


- **(A)** 1005

- **(B)** 1020

- **(C)** 1024

- **(D)** 1040



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Return address = address of next instruction 
after current instruction 
Instruction sizes (in words): 
MOV R1,(3000) → 2 
MOV R2,(R3) → 1 
ADD → 1 
MOV → 1 
INC → 1 
Word size = 4 bytes 
Program starts at 1000 
Addresses: 
MOV R1,(3000) → 1000 to 1007 → next = 
MOV R2,(R3) → 1008 to 1011 → next = 
<!-- PAGE 488 -->
Computer Organization and Architecture 
ADD → 1012 to 1015 → next = 1016 
MOV → 1016 to 1019 → next = 1020 
INC → 1020 to 1023 → next = 1024 
Interrupt occurs during INC R3 ⇒ return 
address = next instruction 
Answer: 
1024 (Option C)


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In a simplified computer the instructions are: 
OP 𝑅𝑗, 𝑅𝑖 
Perform 𝑅𝑗 OP 𝑅𝑖 and store the result in 
register 𝑅𝑗 
OP 𝑚, 𝑅𝑖 
Perform val OP 𝑅𝑖 and store the result in 
register 𝑅𝑖 
val denotes the content of the memory 
location 𝑚 
MOV 
𝑚, 𝑅𝑖 
Moves the content of memory location 
𝑚 to register 𝑅𝑖 
MOV 
𝑅𝑖, 𝑚 
Moves the content of register 𝑅𝑖 to 
memory location 𝑚 
The computer has only two registers, and OP is either 
ADD or SUB. Consider the following basic block: 
 𝑡1 = 𝑎 + 𝑏 
 𝑡2 = 𝑐 + 𝑑 
 𝑡3 = 𝑒 − 𝑡2 
 𝑡4 = 𝑡1 − 𝑡3 
Assume that all operands are initially in memory. The 
final value of the computation should be in memory. 
What is the minimum number of MOV instructions in 
the code generated for this basic block?


- **(A)** 2

- **(B)** 3

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

2 registers only ⇒ minimize loads/stores 
OP m, Ri allows one operand directly from 
memory ⇒ reduces MOVs 
Compute efficiently: 
t1 = a + b 
MOV a → R1 
ADD b, R1 → t1 in R1 
t2 = c + d 
MOV c → R2 
ADD d, R2 → t2 in R2 
t3 = e − t2 
SUB e, R2 → R2 = e − t2 
t4 = t1 − t3 
SUB R2, R1 → R1 = t1 − t3 
Final result must be in memory: 
MOV R1 → t4 
MOV count: 
MOV a → R1 
MOV c → R2 
MOV R1 → memory 
Total = 3 MOVs 
Answer: 
3 (Option B)


</details>

---


### Q29. [GATE CSE – 2007 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Data forwarding techniques can be used to speed up 
the operation in the presence of data dependencies. 
Consider the following replacements of LHS with 
RHS: 
(i) R1 → Loc, Loc → R2 ≡ R1 → R2,R1→Loc 
(ii) R1 → Loc, Loc → R2 ≡ R1 → R2 
(iii) R1 → Loc, R2 → Loc ≡ R1 → Loc 
(iv) R1 → Loc, R2 → Loc ≡ R2 → Loc 
In which of the following options will the result of 
executing the RHS be the same as executing the 
LHS irrespective of the instruction that follow ?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

(i) is correct: both LOC and R2 receive the value 
from R1 in both LHS and RHS. 
(ii) is incorrect: although R2 gets the right value 
in both cases, LOC is not updated in the RHS. 
(iii) is incorrect: in LHS, R2 is overwritten, 
whereas this does not happen in RHS. 
(iv) is correct: the initial write to LOC in LHS 
has no effect since it is overwritten by the 
subsequent write. 
Therefore, the correct answer is (B).


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Following table indicates the latencies of 
operations between the instruction producing the 
result and instruction using the result. 
Instruction producing 
the result 
Instruction using the 
result 
Latency 
ALU Operation ALU Operation 2 
ALU Operation Store 2 
Load ALU Operation 1 
Load Store 0 
Consider the following code segment: 
Load R1, Loc 1; Load R1 from memory location Loc1 
Load R2, Loc 2; Load R2 from memory location Loc 2 
Add R1, R2, R1; Add R1 and R2 and save result in R1 
Dec R2; Decrement R2 
Dec R1; Decrement R1 
Mpy R1, R2, R3; Multiply R1 and R2 and save 
result in R3 
Store R3, Loc 3; Store R3 in memory location Loc 3 
What is the number of cycles needed to execute 
the above code segment assuming each instruction 
takes one cycle to execute?


- **(A)** 7

- **(B)** 10

- **(C)** 13

- **(D)** 14



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation 
Given latencies: 
 Load → ALU = 1 cycle 
 ALU → ALU = 2 cycles 
 ALU → Store = 2 cycles 
 Load → Store = 0 cycles 
Instruction Sequence: 
1. Load R1, Loc1 
2. Load R2, Loc2 
3. Add R1, R2 → R1 
4. Dec R2 
5. Dec R1 
6. Mpy R1, R2 → R3 
7. Store R3, Loc3 
Cycle-wise Execution: 
Cycle Instruction Status Reason 
1 Load R1, 
Loc 1 
Execute  
2 Load R2, 
Loc 2 
Execute  
3 - Stall Waiting for 
Load R2 
(Latency 1) 
4 Add R1, 
R2, R1 
Execute  
5 Dec R2 Execute  
6 - Stall Waiting for 
Add R1, R2, 
R1 (Latency 
2) 
7 Dec R1 Execute  
8 - Stall Waiting for 
Dec R1 
(Latency 2) 
9 - Stall Waiting for 
Dec R1 
(Latency 2) 
10 Mpy R1, 
R2, R3 
Execute  
11 - Stall Waiting for 
Mpy R1, R2, 
R3 (Latency 
2) 
12 - Stall Waiting for 
Mpy R1, R2, 
R3 (Latency 
2) 
13 Store R3, 
Loc 3 
ExecuteTotal 
number of 
cycles = 13 
Correct Answer: C 
<!-- PAGE 489 -->
Computer Organization and Architecture


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A CPU has 24-bit instructions. A program starts at 
address 300 (in decimal). Which one of the 
following is a legal program counter (all values in 
decimal)?


- **(A)** 400

- **(B)** 500

- **(C)** 600

- **(D)** 700



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Each address is multiple of 3 as the starting 
address is 300 and each instruction consists of 24 
bits, i.e., 3 bytes. Thus, in the given options the 
valid counter will be the one which is the multiple 
of 3. Out of the options we can see that only 600 
satisfies the condition.


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about relative 
addressing mode is FALSE?


- **(A)** It enables reduced instruction size

- **(B)** It allows indexing of array elements with 
same instruction

- **(C)** It enables easy relocation of data

- **(D)** It enables faster address calculations than 
absolute addressing



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

• In absolute addressing, the instruction directly 
contains the full memory address. In contrast,  
relative addressing calculates the address by 
adding an offset to the Program Counter (PC), so 
an extra computation is required. 
• PC-relative addressing is mainly useful for 
relocating programs during execution. 
• It can access nearby memory locations using 
offsets, which allows limited form of indexing. 
• Since it uses a small offset instead of a complete 
address, the instruction length is reduced. 
Hence, the incorrect statement is: (d)


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The memory locations 1000, 1001 and 1020 have 
data values 18, 1 and 16 respectively before the 
following program is executed. 
MOVI Rs, 1 Move immediate 
LOAD Rd, 1000(Rs) Load from memory 
ADDI Rd, 1000 Add immediate 
STOREI 0(Rd), 20 Store immediate 
Which of the statements below is TRUE after the 
program is executed?


- **(A)** Memory location 1000 has value 20

- **(B)** Memory location 1020 has value 20

- **(C)** Memory location 1021 has value 20

- **(D)** Memory location 1001 has value 20



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Explanation:-
Given: 
Memory[1000] = 18, Memory[1001] = 1, 
Memory[1020] = 16 
Instructions: 
1. MOVI Rs, 1 
→ Rs = 1 
2. LOAD Rd, 1000(Rs) 
→ Effective address = 1000 + Rs = 1001 
→ Rd = Memory[1001] = 1 
3. ADDI Rd, 1000 
→ Rd = 1 + 1000 = 1001 
4. STOREI 0(Rd), 20 
→ Effective address = Rd + 0 = 1001 
→ Memory[1001] = 20 
Final Result: 
Memory[1001] = 20 
Correct Answer: (d)


</details>

---


### Q34. [GATE CSE – 2006 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a three-word machine instruction: 
ADD A [R₀], @B 
The first operand (destination) “A [R₀]” uses 
indexed addressing mode with R₀ as the index 
register. 
The second operand (source) “@B” uses indirect 
addressing mode. 
A and B are memory addresses residing at the 
second and the third words, respectively. 
The first word of the instruction specifies the 
opcode, the index register designation, and the 
source and destination addressing modes.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

1 memory read to get the first operand from 
memory address A + R0 (A is given as part of the 
instruction) 
1 memory read to get the address of the second 
operand (since second uses indirect addressing) 
1 memory read to get the second operand from the 
address given by the previous memory read 
1 memory write to store to first operand (which is 
the destination) 
So, a total of 4 memory cycles once the instruction 
is fetched.


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Match List-I with List-II and select the 
correct answer using the codes given below 
the lists: 
List-I List-II 
A.[I] = B[J]; 1. Indirect addressing 
B. while(*A++); 2. Indexed addressing 
C. int temp = *x; 3. Autoincrement 
A B C


- **(A)** 3  2 1

- **(B)** 1 3 2

- **(C)** 2 3 1

- **(D)** 1 2 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation :- 
The correct matches are: 
1. A[i] = B[j]; → Indexed Addressing Mode 
2. While [*A++]; → Auto-increment Addressing 
Mode 
int temp = *x; → Indirect Addressing Mode 
<!-- PAGE 490 -->
GATE CSE – 2018 MCQ SET – 2 (1-MARKS) 
GATE CSE – 2013 MCQ (2-MARKS) 
ALU DATA PATH & CONTROL UNIT


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A partial data path of a processor is given in the 
figure, where RA, RB, and RZ are 32-bit registers. 
Which option(s) is/are CORRECT related to 
arithmetic operations using the data path as shown?


- **(A)** The data path can implement arithmetic 
operations involving two registers.

- **(B)** The data path can implement arithmetic 
operations involving one register and one 
immediate value.

- **(C)** The data path can implement arithmetic 
operations involving two immediate values.

- **(D)** The data path can only implement arithmetic 
operations involving one register and one 
immediate value.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A, B, C)


**Step-by-Step Explanation:**

We can choose any input from 1 MUX. and we have 
different select lines for MUX A & MUX (b) Hence 
we can have both registers as input, 1 register 1 
immediate value as input, or both immediate values 
as input. 
hence, there is no compulsion of 1 input as immediate 
value and other from register hence option D is false.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following data path diagram 
Consider an instruction: R0 ← R1 + R2. The 
following steps are used to execute it over the given 
data path. Assume that the PC is incremented 
appropriately. The subscripts r and w indicate read 
and write operations, respectively. 
1. R2r TEMP1r, ALUadd, TEMP2w 
2. R1r TEMP1w, 
3. PCr, MARw, MEMr 
4. TEMP2r, R0w 
5. MDRr, IRw 
Which one of the following is the correct order of 
execution of the above steps?


- **(A)** 2,1,4,5,3

- **(B)** 1,2,4,3,5

- **(C)** 3,5,2,1,4

- **(D)** 3,5,1,2,4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (C)


**Step-by-Step Explanation:**

3𝑟𝑑 followed by 5𝑡ℎ are instruction fetch cycle 
micro-operations and can be elaborated as follows: 
𝑡1: 𝑀𝐴𝑅𝑤 ← 𝑃𝐶𝑟 𝑡2: 𝑀𝐷𝑅𝑤 ← 𝑀𝑒𝑚𝑜𝑟𝑦 𝑡2: 𝐼𝑅𝑤 
← 𝑀𝐷𝑅𝑟 
Now we need to perform Execute cycle micro 
operations. Just observe the figure and it will be 
very easy to identify the sequence between 
GATE IT – 2005 MCQ (2-MARKS) 
GATE CSE – 2005 MCQ (2-MARKS) 
<!-- PAGE 493 -->
Computer Organization and Architecture 
1𝑡ℎ , 2𝑛𝑑 , 4𝑡ℎ 
2𝑛𝑑 is clearly stating that we need to move R1 
content to some temporary register named as 
TEMP1 and it is very clear that before 
performing ALU operation we need the content 
in TEMP1. Hence 2𝑛𝑑 will be performed next 
after 5𝑡ℎ . 
𝑇𝐸𝑀𝑃𝑤 ← 𝑅1𝑟 
Now we can perform ALU operation and can 
take second operand directly from R2 and the 
figure clearly shows us that we need to put the 
result of ALU back into TEMP2. 
All these steps are performed in 1𝑠𝑡 . So 1𝑠𝑡 will 
be next. 
𝑇𝐸𝑀𝑃2𝑤 ← 𝑇𝐸𝑀𝑃1𝑟 + 𝐴𝐿𝑈𝑤𝑅2𝑟 
Lastly we need to put the result present in 
TEMP2 into R0. This step is performed by 4𝑡ℎ . 
𝑅𝑂𝑤 < − TEMP2 +


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following processor design 
characteristics: 
I. Register-Io-register arithmetic operations only 
II. Fixed-length instruction format 
III. Hardwired control unit 
Which of the characteristics above are used in the 
design of a RISC processor?


- **(A)** I and II only

- **(B)** II and III only

- **(C)** I and III only

- **(D)** I, II and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

I: 
RISC uses register-to-register operations 
II: 
RISC uses fixed-length instructions 
III: 
RISC uses hardwired control 
Answer: 
I, II and III (Option D)


</details>

---


### Q4. [GATE CSE – 2020 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following sequence of micro - 
operations. 
MBR ← PC 
MAR ← X 
PC ← Y 
Memory ← MBR 
Which one of the following is a possible operation 
performed by this sequence?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

MBR ← PC → current PC is saved 
MAR ← X → some memory location X is 
selected (typically stack or fixed location) 
PC ← Y → PC is loaded with a new address (ISR 
start address) 
Memory ← MBR → old PC is stored in memory 
This exactly matches interrupt handling


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a CPU where all the instructions require  
7 clock cycles to complete execution. There are 140 
instructions in the instruction set. It is found that 
125 control signals are needed to be generated by 
the control unit. While designing the horizontal 
micro-programmed control unit, single address 
field format is used for branch control logic. What 
is the minimum size of the control word and control 
address register?


- **(A)** 125, 7

- **(B)** 125, 10

- **(C)** 135, 9

- **(D)** 135, 10



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Control word format consists of: 
 Control signals field 
 Address field 
Step 1: Calculate number of control addresses 
Number of control addresses = Number of 
instructions × Number of clock cycles 
= 140 × 7 = 980 
Step 2: Calculate size of Control Address Register (CAR) 
Number of bits required = ⌈log₂(980)⌉ = 10 bits 
Step 3: Control signals size 
Since horizontal microprogramming is used: 
Number of control signals = 125 bits 
Step 4: Control word size 
Control word size = Control signals + Address field 
= 125 + 10 = 135 bits 
Final Answer: 
 Control word size = 135 bits 
 Control Address Register (CAR) = 10 bits 
Correct Option: (d) 135, 10


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The following data path of a CPU 
The ALU, the bus and all the registers in the data 
path are of identical size. All operations including 
incrementation of the PC and the GPRs are to be 
carried out in the ALU. Two clock cycles are 
needed for memory read operation—the first one 
for loading addresses in the MAR and the next one 
for loading data from the memory bus into the 
MDR. 
The instruction “add R0, R1” has the register 
transfer interpretation 
R0 ← R0 + R1. 
The minimum number of cycles needed for 
execution cycle of this instruction is


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (B)


**Step-by-Step Explanation:**

Instruction fetch requires two cycles, but the question 
asks for the execution part only! 
Now for execution: 
1. R1out, Sin 
cycle 
S ← R0 – 1st 
2. R2out, Tin 
cycle 
T ← R1 – 2nd 
3. Sout, Tout, Add R0in 
cycle 
R0 ← R0 + R1 – 3rd 
So, 3 cycles for execution. 
As it is asked for only execution cycles, no of cycles 
required = 3. 
Had it been asked for instruction cycles, then the 
answer would be 5. 
Hence, option B is correct. 
<!-- PAGE 494 -->
Computer Organization and Architecture


</details>

---


### Q7. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following data path of a CPU. 
The ALU, the bus and all the registers in the data 
path are of identical size. All operations including 
incrementation of the PC and the GPRs are to be 
carried out in the ALU. Two clock cycles are 
needed for memory read operation - the first one 
for loading address in the MAR and the next one 
for loading data from the memory bus into the 
MDR. 
The instruction "call Rn, sub" is a two word 
instruction. Assuming that PC is incremented 
during the fetch cycle of the first word of the 
instruction, its register transfer interpretation is 
Rn ← PC + 1 
PC ← M[PC] 
The minimum number of CPU clock cycles needed 
during the execution cycle of this instruction is:


- **(A)** 2

- **(B)** 3

- **(C)** 4

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Rn <= Pc+1 
Pc<= M[Pc] 
The sequence of instruction take place 
I Cycle : PC out , Sin , MARin (MAR can be 
loaded with PCout 
II Cycle: S out , ALU increment , Rn in 
III Cycle: MDRout , PCin ,MDRout can be 
performed once MARin has been 
performed) therefore 3 cycle required


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


An instruction set of a processor has 125 signals 
which can be divided into 5 groups of mutually 
exclusive signals as follows: 
Group 1: 20 signals, 
Group 2: 70 signals, 
Group 3: 2 signals, 
Group 4: 10 signals, 
Group 5: 23 signals. 
How many bits of the control words can be saved 
by using vertical microprogramming over 
horizontal microprogramming?


- **(A)** 0

- **(B)** 103

- **(C)** 22

- **(D)** 55



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

In horizontal form, each control signal needs 1 bit. 
So, total bits required: 
= 20 + 70 + 2 + 10 + 23 
= 125 bits 
In vertical form, each group is encoded using 
log₂(n) bits: 
 Group 1 (20 signals) → log₂(20) ≈ 5 bits 
 Group 2 (70 signals) → log₂(70) ≈ 7 bits 
 Group 3 (2 signals) → log₂(2) = 1 bit 
 Group 4 (10 signals) → log₂(10) ≈ 4 bits 
 Group 5 (23 signals) → log₂(23) ≈ 5 bits 
Total bits required: 
= 5 + 7 + 1 + 4 + 5 
= 22 bits 
Bits saved = Horizontal − Vertical 
= 125 − 22 
= 103 bits


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A hardwired CPU uses 10 control 
signals 𝑆1 to 𝑆10, in various time steps 𝑇1 to 𝑇5, to 
implement 4 instructions 𝐼1 to 𝐼4 as shown below: 
 𝑻1 𝑻2 𝑻3 𝑻4 𝑻5 
𝑰1 𝑆1, 𝑆3, 𝑆5 𝑆2, 𝑆4, 𝑆6 𝑆1, 𝑆7 𝑆10 𝑆3, 𝑆8 
𝑰2 𝑆1, 𝑆3, 𝑆5 𝑆8, 𝑆9, 𝑆10 𝑆5, 𝑆6𝑆7 𝑆6 𝑆10 
𝑰3 𝑆1, 𝑆3, 𝑆5 𝑆7, 𝑆8, 𝑆10 𝑆2, 𝑆6, 𝑆9 𝑆10 𝑆1, 𝑆3 
𝑰4 𝑆1, 𝑆3, 𝑆5 𝑆2, 𝑆6, 𝑆7 𝑆5, 𝑆10 𝑆6, 𝑆9 𝑆10 
Which of the following pairs of expressions 
represent the circuit for generating control 
signals 𝑆5 and 𝑆10 respectively? 
((𝐼𝑗 + 𝐼𝑘)𝑇𝑛 indicates that the control signal 
should be generated in time step 𝑇𝑛 if the 
instruction being executed is 𝐼𝑗 or 𝑙𝑘) 
𝑆10 = (𝐼1 + 𝐼3) ⋅ 𝑇4 + (𝐼2 + 𝐼4) ⋅ 𝑇5


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

First, determine when control signal S5 is active: 
 For instruction I1, S5 is present at T1 → 
T1·I1 
 For instruction I2, S5 is present at T1 and 
T3 → T1·I2 + T3·I2 
 For instruction I3, S5 is present at T1 only 
→ T1·I3 
 For instruction I4, S5 is present at T1 and 
T3 → T1·I4 + T3·I4 
Combining all terms: 
S5 = T1·I1 + T1·I2 + T3·I2 + T1·I3 + T1·I4 + 
T3·I4 
= T1(I1 + I2 + I3 + I4) + T3(I2 + I4) 
Since (I1 + I2 + I3 + I4 = 1): 
S5 = T1 + T3(I2 + I4) 
Now, determine when control signal S10 is active: 
 For instruction I1, S10 is present at T4 → 
T4·I1 
 For instruction I2, S10 is present at T2 and 
T5 → T2·I2 + T5·I2 
 For instruction I3, S10 is present at T2 and 
T4 → T2·I3 + T4·I3 
 For instruction I4, S10 is present at T3 and 
T5 → T3·I4 + T5·I4 
Combining all terms: 
S10 = T4·I1 + T2·I2 + T5·I2 + T2·I3 + T4·I3 + 
T3·I4 + T5·I4 
= T4(I1 + I3) + T2(I2 + I3) + T5(I2 + I4) + T3·I4 
Final Expressions: 
S5 = T1 + T3(I2 + I4) 
S10 = T4(I1 + I3) + T2(I2 + I3) + T5(I2 + I4) 
+ T3·I4 
<!-- PAGE 495 -->
Nte: 1K = 2^10 and 1M = 2^20 GATE CSE – 2025 NAT SET – 2 (2-MARKS) 
GATE CSE – 2025 MCQ SET – 2 (2-MARKS) 
CACHE MEMORY


</details>

---



## Topic 5: Topic 5


### Q1. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The size of the physical address space of a 
processor is 232 bytes. The capacity of a cache 
memory unit is 223 bytes. The cache block size is 
128 bytes. The cache memory unit can be built as 
a direct mapped cache or as a K-way set-
associative cache, where K = 2L and L ∈ {1, 2, 3}. 
Let the length of the TAG field be M bits for the 
direct mapped cache, and N bits for the set-
associative cache. 
Which one of the following options is true?


- **(A)** N = M + L

- **(B)** N = M - L

- **(C)** N = M + K

- **(D)** N = M – K



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Direct cache address format: 
| tag | LO | WO | 
m-bit 
Set associative cache address format: 
| tag | SO | WO | 
n-bit 
Here, N-value increases depend on the associativity 
of a cache. 
i.e., S = Number of lines / P-way = Number of lines 
/ 2L = 2(LO-L) 
So, index value decreases w.r.t. P-value. ∴ Tag 
space increases w.r.t. associativity. Hence, N = (M + 
L).


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with a processor and a 4 KB 
direct mapped cache with block size of 16 bytes. 
The system has a 16 MB physical memory. Four 
words P, Q, R, and S are accessed by the 
processor in the same order 10 times. That is, 
there are a total of 40 memory references in the 
sequence P, Q, R, S, P, Q, R, S,... Assume that the 
cache memory is initially empty. The physical 
addresses of the words are given below (1 word = 
1 byte). 
P: 0X845B32, Q: 0X845B26, R: 0X845B36, 
S: 0X846B32 
Which of the following statements is/are true? 
Note: 1 K = 210 and 1M = 220


- **(A)** Every access to P results in a cache miss

- **(B)** Every access to R results in a cache hit

- **(C)** Every access to Q results in a cache miss

- **(D)** Except the first access to S, all subsequent 
accesses to S result in cache hits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (A, B)


**Step-by-Step Explanation:**

CACHE SIZE = 4 KB = 212 B. 
CACHE BLOCK SIZE = 16 B = 24 B. 
NUMBER OF CACHE LINES SINCE IT IS 
DIRECT MAPPED = CACHE SIZE / CACHE 
BLOCK SIZE = 212 / 24 = 28 = 256 CACHE LINES. 
CACHE LINE BITS = log (base 2) 28 = 8 bits. 
BLOCK OFFSET = log (base 2) 24 = 4 bits. 
P: 1000 0100 0101 1011 0011 0010 
Q: 1000 0100 0101 1011 0010 0110 
R: 1000 0100 0101 1011 0011 0110 
S: 1000 0100 0110 1011 0011 0010 
as you can see . when you access P . since it is 
initially empty . the entire block is placed in the 
cache . R is also present in the block . 
when you access R eventually it will be hit every 
time because its block offset is different from P and 
for Q it is an entirely different line of cache . so it 
will not be a problem for R . 
since P and S have the same cache line bits and 
offset bits . it will result in tag mismatch every time 
you access S. It will replace P. So S and P are 
always a miss . 
SO , the answer is : A , B . 
1. (a) 2. (a, b) 3. (128) 
4. (4 to 4) 5. (a) 6. (11.85) 
7. (a) 8. (3) 9. (b, c) 
10. (19) 11. (a, b, d) 12. (0.85) 
13. (a, b, d) 14. (a) 15.(2) 
16. (17) 17. (b) 18. (13.3-13.5) 
19. (160) 20. (d) 21. (b) 
22. (18) 23. (4.72) 24. (a) 
25. (14) 26. (76) 27. (0.05) 
28. (30) 29. (24) 30. (a) 
31. (14) 32. (1.68) 33. (d) 
34. (d) 35. (20) 36. (10000) 
37. (a) 38. (a) 39. (a) 
40. (c) 41. (d) 42. (c) 
43. (c) 44. (d) 45. (a) 
46.(d) 47. (b) 48. (c) 
49. (d) 50. (a) 51. (a) 
52. (d) 53. (c) 54. (d) 
55. (a) 56. (d) 57. (b) 
58. (c) 59. (a) 60. (c) 
61. (a)   
<!-- PAGE 508 -->
Computer Organization and Architecture


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with 1 MB physical memory and 
a word length of 1 byte. The system uses a direct 
mapped cache, with block numbers starting from 0. 
The word with physical address 0XA2C28 is 
mapped to the cache block number (176)10. The 
maximum possible size of the cache (in KB) for this 
configuration is  . (answer in integer) 
Note: 1K = 210 and 1M = 220


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 128


**Step-by-Step Explanation:**

(A2C28)H : 1010 0010 1100 00 101000 
(176)₁₀ WO 
Here (176)₁₀ = 00010110000 - 11 bit 
Word offset = 6 bit 
∴ Cache address = LO + WO = 11 + 6 = 17 bit 
So, Cache size = 217 B = 128 KB


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Given a computing system with two levels of cache 
(L1 and L2) and a main memory. The first level (L1) 
cache access time is 1 nanosecond (ns) and the "hit 
rate" for L1 cache is 90% while the processor is 
accessing the data from L1 cache. Whereas, for the 
second level (L2) cache, the "hit rate" is 80% and the 
"miss penalty" for transferring data from L2 cache to 
L1 cache is 10 ns. The "miss penalty" for the data to 
be transferred from main memory to L2 cache is 100 
ns. 
Then the average memory access time in this system 
in nanoseconds is  . (rounded off to one 
decimal place)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4 TO 4


**Step-by-Step Explanation:**

To calculate the average memory access time for a 
computing system with two levels of cache (L1 and 
L2) and a main memory, we consider the cache hit 
and miss rates along with their respective penalties. 
Here’s the breakdown: 
L1 Cache: 
Access time: 1 nanosecond (ns) 
Hit rate: 90% or 0.9 
L2 Cache: 
Hit rate: 80% or 0.8 
Miss penalty (L2 to L1): 10 ns 
Main Memory: 
Miss penalty (Memory to L2): 100 ns 
The formula to compute average memory access 
time (T_avg) is: 
T_avg = H1·T1 + (1 − H1)·H2·(T2 + T1) + (1 − 
H1)·(1 − H2)·(T3 + T2 + T1) 
Where: 
H1 is the hit rate for L1 cache. 
T1 is the access time for L1 cache. 
H2 is the hit rate for L2 cache. 
T2 includes the miss penalty for L2 cache. 
T3 includes the miss penalty for main memory. 
Substituting the given values: 
T_avg = (0.9 · 1) + (1 − 0.9) · 0.8 · (10 + 1) + (1 − 
0.9) · (1 − 0.8) · (100 + 10 + 1) 
= 0.9 + 0.08 · 11 + 0.02 · 111 
= 0.9 + 0.88 + 2.22 
= 4 ns 
Thus, the average memory access time is 4 
nanoseconds. 
Alternate Solution: 
T₁ = 1 µsec, H₁ = 90% 
T₂ = 10 µsec,  H₂ = 80% 
Tₘ = 100 µsec 
(1 − H₁) = 0.1 
(1 − H₂) = 0.2 
Formula: 
T_avg = T₁ + (1 − H₁)T₂ + (1 − H₁)(1 − H₂)Tₘ 
= T₁ + (1 − H₁) [ T₂ + (1 − H₂)Tₘ ] 
Substitution: 
= 1 + 0.1 [ 10 + 0.2(100) ] 
= 1 + 0.1 (10 + 20) 
= 1 + 0.1 (30) 
= 1 + 3 
= 4 µsec


</details>

---


### Q5. [GATE CSE – 2026 MCQ SET – 1 (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


For a direct-mapped cache, 4 bits are used for the tag 
field and 12 bits are used to index into a cache block. 
The size of each cache block is one byte. Assume that 
there is no other information stored for each cache 
block. 
Which ONE of the following is the CORRECT option 
for the sizes of the main memory and the cache 
memory in this system (byte addressable), 
respectively?


- **(A)** 64 KB and 4 KB

- **(B)** 128 KB and 16 KB

- **(C)** 64 KB and 8 KB

- **(D)** 128 KB and 6 KB



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

For the direct-mapped cache, 4 bits are used for the 
tag field, and 12 bits are used to index into a cache 
block. The block size is 1 byte. 
To find the size of the main memory and the cache, 
we use: 
The total number of blocks in the cache is determined 
by the 12 bits for indexing, which means there are 212 
= 4096 blocks. 
The size of each block is 1 byte. 
So, the cache size is 4096 bytes, or 4 Kb 
The address field consists of 4 bits for the tag and 12 
bits for the index, making the total address size 16 
bits. This implies the main memory is 2 16 = 65536 
bytes, or 64 Kb 
Alternate Solution : 
Tag bits = 4 bits 
Cache has 16 blocks 
Block size = 1 Byte = 8 bits 
Mapping type = Direct Mapped Cache 
1. Address Format: 
Address is divided into three parts: 
TAG | Line (Index) | Word Offset 
TAG = 4 bits 
Remaining bits (Line + Offset) = 12 bits 
Total address size = 16 bits 
2. Cache Size (CM): 
Number of blocks = 16 = 24 
Block size = 1 Byte 
<!-- PAGE 509 -->
Computer Organization and Architecture 
Cache size = 24 × 1 Byte = 16 Bytes 
3. Main Memory Size (MM): 
Total address bits = 16 
Main memory size = 216 Bytes = 64 KB 
4. Direct Mapping Formula: 
Number of tags = MM size / CM size 
= (64 KB) / (16 B) 
= (216) / (24) 
= 212 
5. Tag Bits Calculation: 
Tag bits = log2(Number of tags) 
= log2(212) 
= 12 bits 
6. General Formula: 
Tag bits = log2(MM size / CM size) 
7. Additional Examples: 
Case 1: 
MM size = 64 KB 
CM size = 4 KB 
Number of tags = 64 KB / 4 KB = 16 = 24 
Tag bits = 4 bits 
Case 2: 
MM size = 128 KB 
CM size = 1 KB 
Number of tags = 128 KB / 1 KB = 128 = 27 
Tag bits = 7 bits 
Final Answer: 
Tag bits = 4 bits


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer has a memory hierarchy consisting of 
two-level cache (L1 and L2) and a main memory. 
If the processor needs to access data from memory, 
it first looks into L1 cache. If the data is not found 
in L1 cache, it goes to L2 cache. If it fails to get the 
data from L2 cache, it goes to main memory, where 
the data is definitely available. Hit rates and access 
times of various memory units are shown in the 
figure. The average memory access time in 
nanoseconds (ns) is  . (rounded off to two 
decimal places)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11.85


**Step-by-Step Explanation:**

Given Information: 
L1 cache hit rate (H1) = 95% = 0.95 
L1 cache access time (T1) = 10 ns 
L2 cache hit rate (H2) = 85% = 0.85 
L2 cache access time (T2) (including the L1 
cache miss penalty) = 20 ns 
Main memory access time (T3) (including L1 
and L2 cache miss penalties) = 200 ns 
Formula for Average Memory Access Time 
(AMAT): 
The formula for the AMAT for this hierarchical 
memory system is: 
AMAT = H1 × T1 + (1 − H1) × H2 × T2 + (1 − H1) 
× (1 − H2) × T3 
Where: 
H1 is the hit rate for L1 cache. 
T1 is the access time for L1 cache. 
H2 is the hit rate for L2 cache. 
T2 is the access time for L2 cache (including L1 
miss penalty). 
T3 is the access time for main memory (including 
L1 and L2 miss penalties). 
Calculation: 
Using the given values: 
AMAT=0.95 × 10 + (1 − 0.95) × 0.85 × 20 + (1 − 
0.95) × (1 − 0.85) × 200 
Breaking this down: 
1. L1 hit case: 0.95 × 10 = 9.5 ns 
2. L1 miss and L2 hit case: (1 − 0.95) × 0.85 × 20 
= 0.05 × 0.85 × 20 = 0.85 ns 
3. L1 miss and L2 miss case: (1 − 0.95) × (1 − 
0.85) × 200 = 0.05 × 0.15 × 200 = 1.5 ns 
Now, adding them together: 
AMAT = 9.5 + 0.85 + 1.5 = 11.85 ns


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a memory system with 1M bytes of main 
memory and 16K bytes of cache memory. Assume 
that the processor generates a 20 -bit memory 
address, and the cache block size is 16 bytes. If the 
cache uses direct mapping, how many bits will be 
required to store all the t ag values? [Assume 
memory is byte addressable, 1K = 210, 1M = 220.]


- **(A)** 6 × 210

- **(B)** 8 × 210

- **(C)** 212

- **(D)** 214



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

TAG | line | offset 
6 10 4 
(20 bits total) 
Cache block size = 16B = 2⁴ B 
lines = Cache Mem Size / block size 
= 16KB / 2⁴ B 
= 2¹⁴ B / 2⁴ B 
= 2¹⁰ lines 
TAG = 20 − (10 + 4) = 6 
bits required to store all tag values 
= TAG bits × # lines 
= 6 × 2¹⁰


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A given program has 25% load/store instructions. 
Suppose the ideal CPI (cycles per instruction) 
without any memory stalls is 2. The program 
exhibits 2% miss rate on instruction cache and 8% 
miss rate on data cache. The miss penalty is 100 
cycles. The speedup (rounded off to two decimal 
places) achieved with a perfect cache (i.e., with NO 
data or instruction cache misses) is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

CPI with a Perfect Cache: 2 
CPI with the Actual Cache: 2 (ideally) +0.02 × 
100 (stall cycles for instruction cache miss) 
+0.25 × 0.08 × 100 (stall cycles for data cache 
miss) = 6 
Speedup with a perfect cache = 6/2 = 3. 
Speedup with a perfect cache = 5.4 / 1.8 = 3.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider two set -associative cache memory 
architectures: WBC, which uses the write back 
policy, and WTC, which uses the write through 
policy. Both of them use the LRU (Least Recently 
Used) block replacement policy. The cache memory 
is conne cted to the main memory. Which of the 
following statements is/are TRUE?


- **(A)** A read miss in WBC never evicts a dirty block

- **(B)** A read miss in WTC never triggers a write back 
operation of a cache block to main memory

- **(C)** A write hit in WBC can modify the value of the 
dirty bit of a cache block

- **(D)** A write miss in WTC always writes the victim 
cache block to main memory before loading the 
missed block to the cache



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C


**Step-by-Step Explanation:**

In Write-Through Cache WTC, data is immediately 
written to the main memory on a write, so there are 
no dirty blocks. A read miss only fetches data without 
requiring a write-back. 
(b) A read miss in WTC never triggers a write back 
operation of a cache block to main memory is TRUE. 
In WBC, a write hit updates the cache block and sets 
<!-- PAGE 510 -->
Computer Organization and Architecture 
the dirty bit if it wasn't already set, indicating the 
block has been modified. 
Hence, (c) A write hit in WBC can modify the value 
of the dirty bit of a cache block is also TRUE.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An 8-way set associative cache of size 64 KB (1 KB 
= 1024 bytes) is used in a system with a 32 -bit 
address. The address is sub -divided into TAG, 
INDEX, and BLOCK OFFSET. 
The number of bits in the TAG is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 19


**Step-by-Step Explanation:**

S1  Given that for set associative mapping 
technique: 
Cache memory(CM's)=64KB=216 bytes 
Main memory size=32 bits 
P=8 way SAM 
Tag bit size (y) =? 
Since block size is not given we assume it is 2x 
byte. 
Number of cache block(N)=Cache memory 
size/Block size=216-x 
Number of sets(S)=N/P=213-x 
as we know for set associative mapping technique: 
TAG+SLO+B'S=MM 
y+13-x+x=32 bits 
y=19 bits


</details>

---


### Q11. [GATE CSE – 2025 NAT SET – 1 (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with a 2 KB direct-mapped data 
cache with a block size of 64 bytes. The system has a 
physical address space of 64 KB and a word length of 
16 bits. During the execution of a program, four data 
words P, Q, R, and S are accessed in that order 10 
times (i.e., PQRS…). Hence, there are 40 accesses to


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B, D


**Step-by-Step Explanation:**

Physical memory = 64 𝐾𝐵 ===> 16 bits 
required to represent Physical memory 
Cache memory = 2KB ===> 11 bits for cache 
memory 
Block size = 64 𝐵 = 32 words ==> 6 bits because 
the system is Byte addressable. 
Tag = 16 − 11 = 5 bits 
Cache index = 11-6 = 5 bits 
Block offset = 6 bits 
P = 0 × A248 = 1010001001001000 
=1010001001001000(Tag- cache index - Block 
offset) 
Q = 0 × C28A = 1100001010001010 = 
R = 0 × CA8A = 1100101010001010 = 
S = 0 × A262 = 1010001001100010 = 
Given that, Direct mapped cache. 
If we observe, 𝑃 and 𝑆 belong to the same Block ( 
Tag and cache bits are the same ). Therefore every 
access of 𝑆 should result in a hit due to neither 𝑄 
nor 𝑅 competing for the same cache block and once 
P brought to the cache, it is never evicted. 
If we observe 𝑄 and 𝑅, those are competing for the 
same cache block. So at the end 𝑅 only present in 
the cache due to 𝑅 is accessed at last. ( Comparing 
to 𝑄 ) and every access to 𝑅 evicts 𝑄 from the 
Cache. 
Therefore at the end, P,R and S in the Cache. 
Options A,B and D are true.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A cache memory that has a hit rate of 0.8 has an 
access latency 10 ns and miss penalty 100 ns. 
Optimization is done on the cache to reduce the 
miss rate. However, the optimization results in an 
increase of cache access latency to 15 ns, whereas 
the miss penalty is not affected The minimum hit 
rate (rounded off to two decimal places) needed 
after the optimization such that it should not 
increase the average memory access time 
is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.85


**Step-by-Step Explanation:**

Given: 
Cache Hit Rate (h) = 0.8 
Cache Access Time (tₙ or tc) = 10 ns 
Miss Penalty (MP) = 100 ns 
1. Average Access Time Formula: 
Tavg = h × tc + (1 − h) × (MP + tc) 
2. Substitution: 
Tavg = 0.8 × 10 + (1 − 0.8)(100 + 10) 
= 0.8 × 10 + 0.2 × 110 
= 8 + 22 
= 30 ns 
Alternative Simplified Formula: 
Tavg = tc + (1 − h) × MP 
= 10 + (1 − 0.8) × 100 
= 10 + 0.2 × 100 
= 10 + 20 
= 30 ns 
Final Answer: 
Average Access Time = 30 ns 
3. Optimization Case 
Goal: Reduce miss rate (i.e., increase hit rate) 
Given: 
New cache access time (tnew) = 15 ns 
Miss penalty (MP) = 100 ns (unchanged) 
Target average time (Tavg) = 30 ns 
Formula: 
Tavg = tnew + (1 − hnew) × MP 
Substitution: 
30 = 15 + (1 − hnew) × 100 
30 = 15 + 100 − 100h_new 
30 = 115 − 100h_new 
Solving: 
100h_new = 115 − 30 
100h_new = 85 
hnew = 85 / 100 
<!-- PAGE 511 -->
Computer Organization and Architecture 
hnew = 0.85 
Final Answer: 
Required new hit rate = 0.85 (or 85%)


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Assume a two-level inclusive cache hierarchy, L1 
and L2, where L2 is the larger of the two. Consider 
the following statements. 
S1: Read misses in a write through L1 cache do not 
result in writebacks of dirty lines to the L2 
S2: Write allocate policy must be used in 
conjunction with write through caches and no-write 
allocate policy is used with writeback caches. 
Which of the following statements is correct?


- **(A)** S1 is true and S2 is false

- **(B)** S1 is false and S2 is true

- **(C)** S1 is true and S2 is true

- **(D)** S1 is false and S2 is false



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

S₁ : A Read Miss in a write-through L1 cache 
results in read allocate. No write back is required 
here, because in a write-through L1 cache, both L1 
L1, reducing costly L2 accesses.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a set-associative cache of size 2KB 
(1KB=210 bytes) with cache block size of 64 bytes. 
Assume that the cache is byte-addressable and a 32 - 
bit address is used for accessing the cache. If the 
width of the tag field is 22 bits, the associativity of 
the cache is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

Number of lines in Cache 
Cache size / Block Size 
So number of lines 
211/26 
No of sets = Number of lines/ Number of lines in 
one set 
Total bits = Tag bits + Set bits + Offset bits 
Set bits = 32-22-6 = 4 
24 = 25 / Number of lines in one set 
On solving we get associativity = 2.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Let WB and WT be two set associative cache 
organizations that use LRU algorithm for cache 
block replacement. WB is a write back cache and 
WT is a write through cache. Which of the 
following statements is/are FALSE?


- **(A)** Each cache block in WB and WT has a dirty 
bit.

- **(B)** Every write hit in WB leads to a data transfer 
from cache to main memory.

- **(C)** Eviction of a block from WT will not lead to 
data transfer from cache to main memory.

- **(D)** A read miss in WB will never lead to eviction 
of a dirty block from WB.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B, D


**Step-by-Step Explanation:**

WB Cache: Updates to the cache block don’t result 
in Updates to the Main Memory immediately. Burst 
Writes are  preferred for higher throughput and 
those needing higher write performance. 
WT Cache: Updates to the Cache block are 
reflected on Main Memory before carrying out 
other processes. Consistency is preferred 
A. WB must necessarily have a dirty bit to avoid 
redundant writes to Main Memory. Whereas a WT 
cache needn’t as the change is reflected after a 
write. False 
B. WB cache’s primary use is to increase 
throughput or useful work. Multiple writes to the 
same cache block will not be reflected 
immediately, avoiding unnecessary data transfer 
time. False 
C. WT cache’s main goal is to prefer consistency 
over write performance, and a cache block is made 
to reflect the current main memory. True 
D. LRU doesn’t have specific replacement 
strategies for dirty and regular blocks. Hence a 
read miss might evict a dirty block. False


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with a byte-addressable 
primary memory of size 2³² bytes. Assume the 
computer system has a direct-mapped cache of size 
32 KB (1 KB = 2¹⁰ bytes), and each cache block is of 
size 64 bytes. 
The size of the tag field is  bits.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 17


**Step-by-Step Explanation:**

Tag bits = PAS_bits − log₂(Cache Size) + log₂(K) 
(where K is associativity) 
= 32 − 15 + 0 = 17 bits.


</details>

---


### Q17. [GATE CSE – 2021 MCQ SET – 2 (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer system with a word length of 32 bits has 
a 16 MB byte- addressable main memory and a 64 
KB, 4-way set associative cache memory with a 
block size of 256 bytes. Consider the following four 
physical addresses represented in hexadecimal 
notation. 
A1=0x42C8A4, 
A2=0x546888, 
A3=0x6A289C, 
A4=0x5E4880 
Which one of the following is TRUE?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Total Physical Address Size = 24 bits Main 
Memory is 16MB = 224 bytes. Therefore, any 
direct pointer or address is 24 bits long 
(represented by 6 hexadecimal digits). 
Block Offset Field = 8 bits The block size is 
256 bytes = 28 bytes. This means the lower 8 
bits are reserved to locate a specific byte 
within a cache block. 
Set Index Field = 6 bits First, calculate the 
total number of blocks in the cache: 
and L2 are updated on every write (no dirty blocks 64 KB Cache Size 216 
are maintained as in a write-back cache). 
Therefore, during a Read Miss, the missed block is 
fetched from L2 into L1, possibly replacing an 
existing block in L1. The replaced block does not 
require a write back since it is already consistent 
with L2. Hence, S₁ is TRUE. 
S₂ : This statement is FALSE. Both write-through 
and write-back cache policies can technically use 
either write-allocate or no-write-allocate on a 
write miss, although they are commonly paired in 
a typical manner. 
• In write-through policy, no-write-allocate is 
generally preferred since every write updates both 
L1 and L2. Allocating the block on a write miss 
offers little benefit because each write still 
accesses L2. 
• In write-back policy, write-allocate is usually 
used so that after the first write miss, the block is 
brought into L1. Subsequent writes can then hit in 
Total Cache Blocks = 256 bytes Block Size = 28 = 
256 blocks 
Since it is a 4-way set associative cache, we 
divide these blocks into sets: 
256 blocks Total Sets = 
4 blocks per set 
= 64 sets = 26 sets 
This requires 6 bits to index into the correct 
set. 
2. Identifying the Target Set for A2 and A3 
An address maps to a cache set based 
entirely on the 6 bits of the Set Index field 
(bits 8 to 13). 
<!-- PAGE 512 -->
Computer Organization and Architecture 
Let's inspect the lower 16 bits (the last 4 hex digits) 
of both addresses in binary: 
 For A2 ( 0 × 546888 ): Focus on the lower 
hex digits 6888 → 0110100010001000 
 Block Offset (lowest 8 bits): 10001000 
 Set Index (next 6 bits): 011010 (Decimal 26) 
 For A3 ( 0x6A289C ): Focus on the lower 
hex digits 289C → 0010100010011100 
 Block Offset (lowest 8 bits): 10011100 
 Set Index (next 6 bits): 011010 (Decimal 26) 
Because both A2 and A3 share the exact same 
binary pattern ( 011010 ) in their set index fields, 
they are routed to the exact same cache set (Set 
26). This makes statement (b) definitively true.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A direct mapped cache memory of 1 MB has a 
block size of 256 bytes. The cache has an access 
time of 3 ns and a hit rate of 94%. During a cache 
miss, it takes 20 ns to bring the first word of a 
block from the main memory, while each 
subsequent word takes 5 ns. The word size is 64 
bits. The average memory access time in ns (round 
off to 1 decimal place) is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 13.3 – 13.5


**Step-by-Step Explanation:**

Block size is 256 Bytes, word size is 64 bits or 8 
bytes. So block size in words is 32 words. 
Number of words per block = 32 
Time to fetch a block from main memory to 
cache: 
The first word takes 20 ns and the remaining 31 
words take 5 ns each. 
Total time = 20 + (31 × 5) 
= 20 + 155 
= 175 ns 
So average memory access time (AMAT) is: 
AMAT = 0.94(3) + 0.06(3 + 175) 
= 2.82 + 10.68 
= 13.5 ns


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A certain processor deploys a single-level cache. 
The cache block size is 8 words and the word size 
is 4 bytes. The memory system uses a 60-MHz 
clock. To service a cache-miss, the memory 
controller first takes 1 cycle to accept the starting 
address of the block, it then takes 3 cycles to fetch 
all the eight words of the block, and finally 
transmits the words of the requested block at the 
rate of 1 word per cycle. The maximum bandwidth 
for the memory system when the program running 
on the processor issues a series of read operations 
is  × 10⁶ bytes/sec.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 160


**Step-by-Step Explanation:**

Time to transfer a cache block = 1 + 3 + 8 = 12 
cycles. 
i.e., 4 bytes × 8 = 32 bytes in 12 cycles. 
So, memory bandwidth = 32 / (12 cycle time) 
= 32 / (12 / (60 × 10⁶)) 
= 160 × 10⁶ bytes/s


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A certain processor uses a fully associative cache 
of size 16 kB. The cache block size is 16 bytes. 
Assume that the main memory is byte addressable 
and uses a 32-bit address. How many bits are 
required for the Tag and the Index fields 
respectively in the addresses generated by the 
processor?


- **(A)** 24 bits and 0 bits

- **(B)** 28 bits and 4 bits

- **(C)** 24 bits and 4 bits

- **(D)** 28 bits and 0 bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given that cache is Fully Associative. 
Tag Bits Block Offset 
28 4 
There are no index bits in fully associative cache 
because every main memory block can go to any 
location in the cache 
⇒ Index bits = 0 
Given that memory is byte addressable and uses a 
32-bit address. 
Cache Block size is 16 Bytes ⇒ Number of bits 
required for Block Offset = ⌊log₂ 16⌋ = 4 bits 
∴ Number of Tag bits = 32 − 4 = 28.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The size of the physical address space of a processor 
is 2P bytes. The word length is 2W bytes. The 
capacity of cache memory is 2N bytes. The size of 
each cache block is 2M words. For a K-way set-
associative cache memory, the length (in number of 
bits) of the tag field is


- **(A)** P − N − log₂K

- **(B)** P − N + log₂K

- **(C)** P − N − M − W − log₂K

- **(D)** P − N − M − W + log₂K



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Physical Address Space = 2P Bytes. Word Length is 
2W bytes, which means each word is of size 2W 
bytes. 
Cache memory size = 2N Bytes and Tag Size = 2X 
Bytes. 
Physical address is P - W bits 
Number of blocks in cache = 2(N-W-M) 
It is a K-way set associative cache memory, each set 
in cache will have K-blocks. 
So, Number of sets = 2(N-W-M)/ K 
SET bits will be N-W-M-logk 
Offset bits will be M 
We know, 
TAG bits = Main memory bits - SET bits - offset 
bits 
So, TAG bits(x) = P - W - (N-M-W-logk)- M 
= P - W - N + M + W + logk - M 
x = P - N + logk


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a byte addressable main 
memory of 2³² bytes divided into blocks of size 32 
bytes. Assume that a direct mapped cache having 
512 cache lines is used with this machine. The size 
of the tag field in bits is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 18


**Step-by-Step Explanation:**

No. of blocks of main Memory = 2³² / 2⁵ = 2²⁷ 
And there are 512 = 2⁹ lines in Cache Memory. 
Tag bits tell us how many blocks does 1 line in 
Cache memory points to 
1 cache line points to 2²⁷ / 2⁹ = 2¹⁸ lines 
So, 18 bits are required as TAG bits.


</details>

---


### Q23. [GATE CSE – 2019 MCQ (1-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The read access times and the hit ratios for different 
caches in a memory hierarchy are as given below. 
Cache Read access 
time (in 
nanoseconds) 
Ht ratio 
I-cache 2 0.8 
D-cache 2 0.9 
L2-cache 8 0.9 
The read access time of main memory is 90 
nanoseconds. Assume that the caches use the 
referred word-first read policy and the write back 
policy. Assume that all the caches are direct mapped 
caches. Assume that the dirty bit is always 0 for all 
the blocks in the caches. In execution of a program, 
60% of memory reads are for instruction fetch and 
40% are for memory operand fetch. The average 
read access time in nanoseconds (up to 2 decimal 
places) is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4.72


**Step-by-Step Explanation:**

L2 cache is shared between Instruction and Data (is 
it always? see below) 
So, average read time 
= Fraction of Instruction Fetch * Average Instruction 
fetch time 
Fraction of Data Fetch * Average Data Fetch Time 
Average Instruction fetch Time 
= L1 access time + L1 miss rate * L2 access time 
L1 miss rate * L2 miss rate * Memory access time 
= 2 + 0.2 × 8 + 0.2 × 0.1 × 90 
= 5.4 ns 
Average Data fetch Time 
<!-- PAGE 513 -->
Computer Organization and Architecture 
= L1 access time + L1 miss rate * L2 access time 
L1 miss rate * L2 miss rate * Memory access time 
= 2 + 0.1 × 8 + 0.1 × 0.1 × 90 
= 3.7 ns 
So, average memory access time 
= 0.6 × 5.4 + 0.4 × 3.7 = 4.72 ns


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a two-level cache system, the access times of L1 
and L2 1 and 8 clock cycles, respectively. The 
miss penalty from the L2 cache to main memory is 
18 clock cycles. The miss rate of L1 cache is twice 
that of L2. The average memory access 
time(AMAT) of this cache system is 2 cycles. The 
miss rates of L1 and L2 respectively are:


- **(A)** 0.111 and 0.056

- **(B)** 0.056 and 0.111

- **(C)** 0.0892 and 0.1784

- **(D)** 0.1784 and 0.0892



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Access time of L1 = 1 
Access Time of L2 = 8 
Let miss rate of L2 cache =a 
miss rate of L1 cache (2*L2) = 2*a 
AMAT (average memory access time) =2 
Miss penalty of L2 cache = 18 
AMAT = Access time of L1 + (MissRate L1 * 
miss penalty L 
where miss penalty L1 = Access time of L2 + 
(MissRate L2 * miss penalty L2) 
2 = 1+ 2*a *(8 + a* 18) 
Solving the equation, a=0.111 
Hence option A is correct


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A cache memory unit with capacity of N words 
and block size of B words is to be designed. If it is 
designed as a direct mapped cache, the length of 
the TAG field is 10 bits. If the cache unit is now 
designed as a 16-way set-associative cache, the 
length of the TAG field is  bits.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 14


**Step-by-Step Explanation:**

In set-associative 1 set = 16 lines. So the number 
of index bits will be 4 less than the direct mapped 
case. 
So, Tag bits increased to 14 bits.


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a 2-way set associative cache with 256 
blocks and use LRU replacement, initially the 
cache is empty. Conflict misses are those misses 
which occur due to the contention of multiple 
blocks for the same cache set. Compulsory misses 
occur due to first time access to the block. The 
following sequence of accesses to memory blocks. 
{0,128,256,128,0,128,256,128,1,129,257,129,1,12 
9,257,129} 
is repeated 10 times. The number of conflict 
misses experienced by the cache is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 76


**Step-by-Step Explanation:**

Total Sets: The cache has 256 blocks and is 
2 -way set-associative, giving 256 = 128 sets. 
Mapping Rule: A memory block maps to a set 
using Set = Block Number (mod 128). 
king at the sequence: 
Set 0 handles blocks 0,128 , and 256 (since 
they all equal 0(mod128)). 
Set 1 handles blocks 1,129 , and 257 (since 
they all equal 1(mod128) ). 
Iteration 1 
 0, 128, 256 are accessed for the first time → 3 
Compulsory Misses. 
 Accessing 256 evicts 0 from the cache. 
 When the sequence loops back to access 0 and 
256 again later in the string, they have already 
been kicked out → 2 Conflict Misses. 
 The iteration ends with the cache holding 
[256, 128] . 
Iterations 2 to 10 (Next 9 loops) 
Because the cache starts full but contains the 
wrong combination of blocks, every time the 
sequence asks for 0 or 256 , it results in a 
miss that evicts the other. 
 This causes exactly 𝟒 Conflict Misses per 
iteration for Set 𝟎. 
3. Total Calculation 
Summing the conflict misses across both 
independent sets: 
 Iteration 1: 2 misses (Set 0) + 2 misses (Set 
1) = 4 conflict misses 
 Iterations 2-10 (9 loops):9 loops × (4 misses 
from Set 0 + 4 misses from Set 1) = 9 × 8 = 
72 conflict misses 
Total Conflict Misses = 4 + 72 = 76


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a two-level cache hierarchy with L1 and 
L2 caches. An application incurs 1.4 memory 
accesses per instruction on average. For this 
application, the miss rate of L1 cache 0.1, the L2 
cache experiences, on average, 7 misses per 1000 
instructions. The miss rate of L2 expressed correct to 
two decimal places is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.05


**Step-by-Step Explanation:**

Assuming there are 1000 instructions for the ease of 
calculation, which means there are 7 memory 
reference misses from the L2 cache. 
A cache experiences misses with memory 
references. Thus, it is essential to determine the 
counts of incoming memory references and the 
counts of memory references hitting or missing in 
order to calculate the cache hit rate or miss rate. 
Upon reading the question, it becomes apparent that 
<!-- PAGE 514 -->
Computer Organization and Architecture 
the incoming memory references to the L2 cache 
are unknown, and we must derive this information 
using the provided L1 cache information.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A file system uses an in-memory cache to cache disk 
blocks. The miss rate of the cache is shown in the 
figure. The latency to read a block from the cache is 
1 ms and to read a block from the disk is 10 ms. 
Assume that the cost of checking whether a block 
exists in the cache is negligible. Available cache 
sizes are in multiples of 10 MB. 
The smallest cache size required to ensure an 
average read latency of less than 6 ms is   
MB.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 30


**Step-by-Step Explanation:**

When the CPU needs to search for data, and finds 
it in cache, it's called a HIT, else wise MISS. If 
data is not found in the cache, then the CPU 
searches it in main memory. Consider x to be 
MISS ratio, then (1-x) would be HIT ratio. 
Whenever there is a hit, latency is 1ms and 10ms 
upon miss. Time to read from main memory(disk) 
for all misses = x * 10 ms Time to read for all hits 
from cache = (1-x)*1 ms Average time: 10x + 1 -x 
= 9x + 1 As asked in the question, average read 
latency should be less than 6 ms. 
9x +1 < 6 
9x < 5 
x < 0.5556 
For 20 MB, miss rate is 60% and for 30 MB, it is 
i.e., 40 - 16 = 24 
The answer is 24 bits


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The width of the physical address on a machine is 40 
bits. The width of the tag field in a 512KB 8-way set 
associative cache is  bits.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 24


**Step-by-Step Explanation:**

An easy approach would be we know that physical 
address is 40 bytes 
We know cache-size = no.of.sets + lines-per-set + 
block-size 
Let us assume no of sets = 2x 
And block size= 2y 
So applying it in formulas. 
219 = 2x + 8 + 2y; 
So x + y = 16 
Now we know that to address block size and 
set number we need 16 bits so remaining bits 
must be for tag 
Step B: Compute Total System Time 
Multiply the cost of each operation by the frequency it 
occurs in the sequence: 
 Instruction Fetches(100 operations): 100 × 
1.4 ns = 140 ns 
 Operand Reads ( 60 operations): 60 × 
1.4 ns = 84 ns 
 Operand Writes( 40 operations): 40 × 2.8 ns = 
112 ns 
Total Time = 140 + 84 + 112 = 336 ns 
<!-- PAGE 515 -->
Computer Organization and Architecture 
Step C: Calculate AMAT 
Divide the accumulated time by the 200 total 
memory access operations: 
336 ns AMAT = = 1.68 ns 
200 operations


</details>

---


### Q30. [GATE CSE – 2017 NAT SET-1 (1-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a byte addressable main 
memory of 220 bytes, block size of 16 bytes and a 
direct mapped cache having 212 cache lines. Let the 
addresses of two consecutive bytes in main memory 
be (E201F)16 and (E2020)16. What are the tag and


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Block Size = 16 bytes 
Block Offset = 4 
No. of sets or cache lines = 212 
Number of index bits = 12 
Size of main memory = 220 
Number of tag bits = 20 - 12 - 4 = 4 
Let us consider the hex address E201F 
Tag lines = First 4 bits = E (in hex) 
Cache lines = Next 12 bits = 201 (In Hex)


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Assume that for a certain processor, a read request 
takes 50 nanoseconds on a cache miss and 5 
nanoseconds on a cache hit. Suppose while 
running a program, it was observed that 80% of 
the processor's read requests result in a cache hit. 
The average read access time in nanoseconds is 
 .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 14


**Step-by-Step Explanation:**

The average read access time in nanoseconds = 0.8 * 
5 + 0.2*50 = 14


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The memory access time is 1 nanosecond for a 
read operation with a hit in cache, 5 nanoseconds 
for a read operation with a miss in cache, 2 
nanoseconds for a write operation with a hit in 
cache and 10 nanoseconds for a write operation 
with a miss in cache. Execution of a sequence of 
instructions involves 100 instruction fetch 
operations, 60 memory operand read operations 
and 40 memory operand write operations. The 
cache hit-ratio is 0.9. The average memory access 
time (in nanoseconds) in executing the sequence 
of instructions is   
.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1.68


**Step-by-Step Explanation:**

To calculate the Average Memory Access 
Time (AMAT), we evaluate the cost per 
operation type based on the 90% hit rate (0.9) 
and 10% miss rate (0.1). 
Step A: Find Cost per Operation Type 
1. Instruction Fetch & Operand Read Cost (both 
are read operations): 
Cost read = (0.9 × 1 ns) + (0.1 × 5 ns) = 0.9 + 0.5 
= 1.4 ns 
2. Operand Write Cost: 
40%. Thus, the smallest cache size required to 
ensure an average read latency of less than 6 ms is 
30 MB 
Cost 
write = (0.9 × 2 ns) + (0.1 × 10 ns) = 1.8 + 1.0 
= 2.8 ns


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


If the associativity of a processor cache is doubled 
while keeping the capacity and block size 
unchanged, which one of the following is 
guaranteed to be NOT affected?


- **(A)** Width of tag comparator

- **(B)** Width of set index decoder

- **(C)** Width of way selection multiplexor

- **(D)** Width of processor to main memory data 
bus



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

If associativity is doubled, keeping the capacity 
and block size constant, then the number of sets 
gets halved So, the width of the set index decoder 
can surely decrease - 
(b) is false. The width of the way-selection 
multiplexer must be increased as we have to 
double the ways to choose from- 
(c) is false As the number of sets gets decreased, 
the number of possible cache block entries that a 
set maps to gets increased So, we need more tag 
bits to identify the correct entry. So, (a) is also 
false. 
(d) is the correct answer- main memory data bus 
has nothing to do with cache associativity- this can 
be answered without even looking at other 
options.


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In designing a computer's cache system, the cache 
block (or cache line) size is an important parameter. 
Which one of the following statements is correct in 
this context?


- **(A)** A smaller block size implies better spatial 
locality

- **(B)** A smaller block size implies a smaller cache 
tag and hence lower cache tag overhead

- **(C)** A smaller block size implies a larger cache tag 
and hence lower cache hit time

- **(D)** A smaller block size incurs a lower cache 
miss penalty



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Block : The memory is divided into equal size 
segments. Each segment is called a block. Data in 
cache is retrieved in the form of blocks. The idea is 
to use Spatial Locality (Once a location is retrieved, 
it is highly probable that the nearby locations would 
be retrieved in near future). 
TAG bits : Each cache block is given a set of TAG 
bits to identify which main memory block is present 
in that cache block. 
Option A : If the block size is small, there would 
be less number of near-by addresses for future 
references by CPU to be present in that block. 
Hence this is not a better spatial locality. 
Option B : If the block size is smaller, no of 
blocks would be more in cache, hence more cache 
tag bits would be needed, not less. 
Option C : Cache tag bits are more ( because more 
no of blocks due to smaller block size ), but more 
cache tag bits can't lower the hit time ( even if it 
will increase ). 
Option D : If there is a miss at cache memory ( i.e. 
the needed block by the CPU is not present in the 
cache memory ), then that block has to be moved 
from next lower level of memory ( lets say main 
memory ) in the memory hierarchy, and if the 
block size is lower, then it takes less time to be 
placed into cache memory, hence less miss 
penalty. 
Hence option D is correct.


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A 4-way set-associative cache memory unit with a 
capacity of 16 KB is built using a block size of 8 
words. The word length is 32 bits. The size of the 
physical address space is 4 GB. The number of bits 
for the TAG field is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 20


**Step-by-Step Explanation:**

Number of sets = cache size / size of a set 
Size of a set = block size × number of blocks in a set 
= 8 words × 4 (4-way set-associative) 
= 8 × 4 × 4 (since a word is 32 bits = 4 bytes) 
= 128 bytes 
So, number of sets = 16 KB / 128 B = 128 
Now, we can divide the physical address space 
equally between these 128 sets. 
So, the number of bytes each set can access = 4 GB 
/ 128 
= 32 MB 
= 32 / 4 = 8 M words = 1 M blocks (220 blocks) 
So, we need 20 tag bits to identify these 220 blocks.


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a main memory system that consists of 8 
memory modules attached to the system bus, which 
is one word wide. When a write request is made, the 
bus is occupied for 100 nanoseconds (ns) by the 
data, address, and control signals. During the same 
100 ns, and for 500 ns thereafter, the addressed 
memory module executes one cycle accepting and 
storing the data. The (internal) operation of different 
memory modules may overlap in time, but only one 
request can be on the bus at any time. The maximum 
number of stores (of one word each) that can be 
initiated in 1 millisecond is  .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (10000)


**Step-by-Step Explanation:**

0 to 100 → Module 0 ⇒ 100 ns + 500 = 600 ns 
100 to 200 → Module 1 ⇒ 200 + 500 = 700 ns 
200 to 300 → Module 2 ⇒ 300 + 500 = 800 ns 
300 to 400 → Module 3 ⇒ 400 + 500 = 900 ns 
400 to 500 → Module 4 ⇒ 500 + 500 = 1000 ns 
500 to 600 → Module 5 ⇒ 600 + 500 = 1100 ns 
600 to 700 → Module 6 ⇒ 700 + 500 = 1200 ns 
700 to 800 → Module 7 ⇒ 800 + 500 = 1300 ns 
bus → initiate request (1 word request) 
In every 100 ns, initiate 1 word data to the 
bus. 
for 1 milli second, #words we can initiate 
⇒ 1 milli sec / 100 nsec = 10⁻³ / (100 × 10⁻⁹) 
= 10⁴ = 10,000 words


</details>

---


### Q37. [GATE CSE – 2014 NAT SET 3 (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An access sequence of cache block addresses is of 
length N and contains n unique block addresses. The 
number of unique block addresses between two 
consecutive accesses to the same block address is 
bounded above K. What is the miss ratio if the 
access sequence is passed through a cache of 
associativity A≥k exercising least-recently-used


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

There are N accesses to cache. 
Out of these n are unique block addresses. 
Now, we need to find the number of misses. 
(Minimum n misses are guaranteed whatever be the 
access sequence due to n unique block addresses). 
We are given that between two consecutive accesses 
to the same block, there can be only k unique block 
addresses. So, for a block to get replaced we can 
assume that all the next k block addresses go to the 
same set (given cache is set-associative) which will 
be the worst case scenario (they may also go to a 
different set but then there is less chance of a 
replacement). Now, if associativity size ≥ k, and if 
we use LRU (Least Recently Used) replacement 
policy, we can guarantee that these k accesses won't 
throw out our previously accessed cache entry (for 
<!-- PAGE 516 -->
Computer Organization and Architecture 
that we need at least k accesses). So, this means 
we are at the best-cache scenario for cache 
replacement — out of N accesses we miss only n 
(which are unique and cannot be helped from 
getting missed and there is no block replacement 
in cache). So, the miss ratio is n/N.


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a k-way set associative cache, the cache is 
divided into v sets, each of which consists of k 
lines. The lines of a set are placed in sequence one 
after another. The lines in set s are sequenced 
before the lines in set (s+1). The main memory 
blocks are numbered 0 onwards. The main 
memory block numbered j must be mapped to any 
one of the cache lines from


- **(A)** (j mod v) *k to (j mod v) *k + (k-1)

- **(B)** (j mod v) to (j mod v) +(k-1)

- **(C)** (j mod k) to (j mod k) +(v-1)

- **(D)** (j mod k) *v to (j mod k) *v + (v-1)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Number of sets in cache = v. So, main memory 
block j will be mapped to set (j mod v), which will 
be any one of the cache lines from (j mod v) * k to 
(j mod v) * k + (k-1). 
(Associativity plays no role in mapping- k-way 
associativity means there are k spaces for a block 
and hence reduces the chances of replacement.) 
Alternate Solution: 
 Number of sets = V 
 Each set contains K lines 
 Mapping type = Set Associative Mapping 
1. Mapping Function: 
Set number = (Main Memory Block Number) mod 
V 
2. Example: (V = 4 sets) 
Set assignment: 
Set 0 → Blocks: 0, 4, 8, 12, ... 
Set 1 → Blocks: 1, 5, 9, 13, ... 
Set 2 → Blocks: 2, 6, 10, 14, ... 
Set 3 → Blocks: 3, 7, 11, 15, ... 
3. General Representation: 
For any memory block j: 
Set number = j mod V 
Blocks in a set follow the pattern: 
j, j + V, j + 2V, j + 3V, ... 
4. Cache Organization: 
Each set contains K lines 
Total cache lines = V × K 
5. Cache Line Range for a Set: 
Each set occupies K consecutive cache lines 
For set number s: 
Start line = s × K 
End line = (s × K) + (K − 1) 
6. Example: (K = 8 lines per set) 
Set 0 → Lines 0 to 7 
Set 1 → Lines 8 to 15 
Set 2 → Lines 16 to 23 
Set 3 → Lines 24 to 31 
7. General Formula: 
For block j: 
Set number = j mod V 
Cache line range = (j mod V) × K to (j mod V) × K 
+ (K − 1)


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer has a 256 -KByte, 4 -way set 
associative, write back data cache with block size 
of 32 Bytes. The processor sends 32 bit addresses 
to the cache controller. Each cache tag directory 
entry contains, in addition to address tag, 2 valid 
bits, 1 modified bit and 1 replacement bit. 
The size of the cache tag directory is:


- **(A)** 160 Kbits

- **(B)** 136 Kbits

- **(C)** 40 Kbits

- **(D)** 32 Kbits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Cache = 256 KB = 218bytes 
Block size = 32 B = 25 
4-way set associative 
Address = 32 bits 
Number of blocks: 
218/25 = 213 
Number of sets: 
213/4 = 211 
Address split: 
Block offset = 5 bits 
Index = 11 bits 
Tag = 32 − (11 + 5) = 16bits 
Bits per entry: 
Tag = 16 
2 valid bits 
1 modified bit 
1 replacement bit 
= 20 bits 
Entries: 
Each set has 4 entries ⇒ total entries = 211 × 4 = 
Total size: 
213 × 20 = 163840bits = 160 Kbits 
Answer: 
160 Kbits


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer has a 256-KByte, 4-way set 
associative, write back data cache with block size 
of 32-Bytes. The processor sends 32-bit addresses 
to the cache controller. Each cache tag directory 
entry contains, in addition to address tag, 2 valid 
bits, 1 modified bit and 1 replacement bit.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Total cache size = 256 KB 
Cache block size = 32 Bytes 
So, number of cache entries = 256K / 32 = 8K 
Number of sets in cache = 8K / 4 = 2K as cache is 4-
way associative. 
So, log₂(2048) = 11 bits are needed for accessing a 
set. Inside a set we need to identify the cache entry. 
No. of memory block possible = Memory size / 
Cache block size 
= 2³² / 32 = 2²⁷ 
So, no. of memory block that can go to a single 
<!-- PAGE 517 -->
Computer Organization and Architecture 
cache set 
= 2²⁷ / 2¹¹ 
= 2¹⁶ 
So, we need 16 tag bits along with each cache 
entry to identify which of the possible 2¹⁶ blocks is 
being mapped there.


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An 8KB direct mapped write-back cache is organized 
as multiple blocks, each of size 32-bytes. The 
processor generates 32-bit addresses. The cache 
controller maintains the tag information for each 
cache block consisting of the following. 
1 Valid bit, 1 Modified bit as many bits as the 
minimum needed to identify the memory block 
mapped in the cache. 
What is the total size of memory needed at the cache 
controller to store metadata (tags) for the cache?


- **(A)** 4864 bits

- **(B)** 6144 bits

- **(C)** 6656 bits

- **(D)** 5376 bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Number of cache blocks = cache size / size of a 
block 
= 8 KB / 32 B 
= 256 
So, we need 8-bits for indexing the 256 blocks of 
the cache. And since a block is 32 bytes we need 5 
WORD bits to address each byte. So, out of the 
remaining 19-bits (32 - 8 - 5) should be tag bits. 
So, a tag entry size = 19 + 1 (valid bit) + 1 
(modified bit) = 21 bits. 
Total size of metadata = 21 × Number of cache 
blocks 
= 21 × 256 
= 5376 bits


</details>

---


### Q42. [GATE CSE – 2012 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer system has an L1 cache, an L2 cache, 
and a main memory unit connected as shown below. 
The block size in L1 cache is 4 words. The block 
size in L2 cache is 16 words. The memory access 
times are 2 nanoseconds. 20 nanoseconds and 200 
nanoseconds for L1 cache, L2 cache and main 
memory unit respectively. 
When there is a miss in both 𝐿1 cache and 𝐿2 cache, 
first a block is transferred from main memory 
to 𝐿2 cache, and then a block is transferred 
from 𝐿2 cache to 𝐿1 cache. What is the total time 
taken for these transfers?


- **(A)** 222 nanoseconds

- **(B)** 888 nanoseconds

- **(C)** 902 nanoseconds

- **(D)** 968 nanoseconds



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Since the block size of L2 cache is 16 words and 
the bandwidth of mainmem->L2 cache is 4 words, 
it requires a transfer of 4 words 4 times and then a 
transfer of required 4 words from L2 cache to L1 
cache. 
So total time is 4*(200 + 20) + 1*(20 + 2) = 902 
nanoseconds.


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer system has an L1 cache, an L2 cache, 
and a main memory unit connected as shown 
below. The block size in L1 cache is 4 words. The 
block size in L2 cache is 16 words. The memory 
access times are 2 nanoseconds. 20 nanoseconds 
and 200 nanoseconds for L1 cache, L2 cache and 
main memory unit respectively. 
When there is a miss in L1 cache and a hit in L2 
cache, a block is transferred from L2 cache to L1 
cache. What is the time taken for this transfer?


- **(A)** 2 nanoseconds

- **(B)** 20 nanoseconds

- **(C)** 22 nanoseconds

- **(D)** 88 nanoseconds



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A block to access in L2 cache requires 20 
Set 0 (capacity 4): 
Final → 8, 48, 32, 92 
Set 1: 
Final → 1, 133, 129, 73 
Set 3 (capacity 4): 
Sequence → 255, 3, 159, 63 → full 
Next 155 → evicts LRU (255) 
Final → 3, 159, 63, 155 
Check options: 
3 → present 
8 → present 
129 → present 
216 → NOT present 
Answer:


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a 4-way set associative cache (initially 
empty) with total 16 cache blocks. The main 
memory consists of 256 blocks and the request 
for memory blocks are in the following order: 
0,255,1,4,3,8,133,159,216,129,63,8,48,32,73,92,155. 
Which one of the following memory block will 
NOT be in cache if LRU replacement policy is 
used?


- **(A)** 3

- **(B)** 8

- **(C)** 129

- **(D)** 216



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Total blocks in cache = 16 4-
way ⇒ sets = 16/4 = 4 
Set index = block number mod 4 
= 4096 blocks 
Since the cache configuration is 2-way set-
associative, every set contains 
exactly 2 parallel blocks; 
1. Block Offset Field: The number of bits needed to 
address individual bytes inside a single 16 -byte 
block. 
Group requests by set: 
Set 0 → (block % 4 = 0): Block Offset bits = log 2(16) = 4 bits 
0, 4, 8, 216, 8, 48, 32, 92 
Set 1 → 1, 133, 129, 73 
Set 2 → 2-type none 
Set 3 → 255, 3, 159, 63, 155 
Apply LRU (only final content matters): 
2. Set Index Field: The number of bits needed to 
uniquely select one of the 2048 sets. 
Set Index bits = log2(2048) = 11 bits 
<!-- PAGE 518 -->
Computer Organization and Architecture 
3. Tag Field: The remaining bits of the address 
structure used to distinguish different 
memory blocks mapping to the same set. 
Given the 32 -bit address space width: 
Tag bits = Total Address Width - (Set Index bits 
+ Block Offset bits) 
Tag bits = 32 − (11 + 4) = 32 − 15 = 17 bits 
Total Tag Size = Total Blocks × Tag bits per 
block 
Total Tag Size = 4096 × 17 = 69,632 bits 
To convert the raw bit capacity into kilobits 
(Kbits), divide the value by 1024: 
69,632 bits 
Total Tag Size in Kbits = = 
68Kbits


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


For inclusion to hold between two cache levels L1 
and L2 in a multilevel cache hierarchy, which of 
the following are necessary? 
1. L1 must be a write-through cache 
2. L2 must be a write-through cache 
3. The associativity of L2 must be greater than that 
of L1 
4. The L2 cache must be at least as large as the L1 
cache


- **(A)** 4 only

- **(B)** 1 and 2 only

- **(C)** 1, 2 and 4 only

- **(D)** 1, 2, 3 and 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

1st is not correct as data need not be exactly the 
same at the same point of time and so write-back 
policy can be used in this. 
2nd is not needed when talking only about L1 and 
L2. 
For 3rd, associativity can be equal. 
So, only the 4th statement is necessarily true


</details>

---


### Q46. [GATE CSE – 2008 MCQ (2- MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a 2 -way set associative data 
cache of size 64 Kbytes and block size 16 bytes. The 
cache is managed using 32 bit virtual addresses and 
the page size is 4 Kbytes . A program to be run on 
this machine begins as follows: 
  double ARR[1024][1024]; 
int i, j; 
for(i = 0; i < 1024; i++)  
for(j= 0; j < 1024; j++) 
ARR[i][j] = 0.0; 
The size of double is 8Bytes. Array ARR is located 
in memory starting at the beginning of virtual page 
0 xFF000 and stored in row major order. The 
cache is initially empty and no pre-fetching is 
done. The only data memory references made by 
the program are those to array ARR. 
The total size of the tags in the cache directory is:


- **(A)** 32 Kbits

- **(B)** 34 Kbits

- **(C)** 64 Kbits

- **(D)** 68 Kbits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Total Cache Size: 64 KB = 64 × 1024 Bytes = 216 
Bytes 
Block Size: 16 Bytes = 24 Bytes 
Total Blocks (Lines) in Cache: 
nanoseconds, and 2 nanoseconds to place in L1-
cache. Total Blocks = 
Cache Size 
Block Size 
= 24 
= 2 
The block size in L1 cache is 4 words, so total time is = 
time to access L2 + time to place in L1 = 20+2 = 22 ns..


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a 2 -way set associative 
data cache of size 64 Kbytes and block size 16 
bytes. The cache is managed using 32 bit virtual 
addresses and the page size is 4 Kbytes . A 
program to be run on this machine begins as 
follows: 
double ARR[1024][1024]; 
int i, j; 
for(i = 0; i < 1024; i++) 
for(j= 0; j < 1024; j++) 
ARR[i][j] = 0.0; 
The size of double is 8Bytes. Array ARR is 
located in memory starting at the beginning of 
virtual page 0 xFF000 and stored in row major 
order. The cache is initially empty and no pre-
fetching is done. The only data memory 
references made by the program are those to 
array ARR. 
Which of the following array elements have the 
same cache index as ARR[0][0] ?


- **(A)** ARR[0][4]

- **(B)** ARR[4][0]

- **(C)** ARR[0][5]

- **(D)** ARR[5][0]



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Block size = 16 B ⇒ offset = 4 bits 
Cache = 64 KB, 2-way ⇒ sets = 211⇒ index = 
11 bits 
Key idea: 
Same cache index ⇒ same (index bits) ⇒ 
addresses differ only in tag or offset, not index 
Array: row-major 
Address of ARR[i][j] = base + (𝑖 × 1024 + 𝑗) × 
Check differences from ARR[0][0]: 
ARR[0][4]: 
offset = 4 × 8 = 32bytes ⇒ crosses 2 blocks ⇒ 
index changes 
ARR[4][0]: 
offset = 4 × 1024 × 8 = 32768 = 215 
This changes tag, not index 
ARR[0][5]: 
offset = 40 bytes ⇒ different block ⇒ index 
changes 
ARR[5][0]: 
offset = 5 × 1024 × 8 = 40960⇒ affects index 
Answer: 
ARR[4][0] (Option B)


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a 2 -way set associative 
data cache of size 64 Kbytes and block size 16 
bytes. The cache is managed using 32 bit virtual 
addresses and the page size is 4 Kbytes . A 
program to be run on this machine begins as 
follows: 
double ARR[1024][1024]; 
int i, j; 
for(i = 0; i < 1024; i++) 
for( = 0; j < 1024; j++) 
The size of double is 8 bytes. Array ARR is 
located in memory starting at the beginning of 
virtual page 0 xFF000 and stored in row major 
order. The cache is initially empty and no pre-
fetching is done. The only data memory references 
made by the program are those to array ARR. 
The cache hit ratio for this initialization loop is:


- **(A)** 0%

- **(B)** 25%

- **(C)** 50%

- **(D)** 75%



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Block size = 16 B 
double = 8 B ⇒ 1 block holds 2 elements 
Access pattern: 
Row-major ⇒ sequential access 
So access sequence: 
Element 0 → miss (block loaded) 
Element 1 → hit (same block) 
Element 2 → miss 
Element 3 → hit 
… continues 
Thus: 
For every 2 accesses → 1 miss + 1 hit 
Hit ratio: 
 = 50% 
Cache size/associativity doesn’t matter here 
because no reuse beyond block 
Answer: 
50% (Option C)


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer with a 4-ways set-associative 
mapped cache of the following characteristics: a 
total of 1 MB of main memory, a word size of 1 
byte, a block size of 128 words and a cache size of 8 
KB. 
The number of bits in the TAG, SET and WORD 
fields, respectively are:


- **(A)** 7, 6, 7

- **(B)** 8, 5, 7

- **(C)** 8, 6, 6

- **(D)** 9, 4, 7



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (D)


**Step-by-Step Explanation:**

Main memory = 1 MB = 2²⁰ bytes 
Word size = 1 byte ⇒ byte-addressable 
Block size = 128 words = 128 bytes = 2⁷ bytes 
Cache size = 8 KB = 2¹³ bytes 
Cache type = 4-way set associative 
Step 1: Word (Block Offset) bits 
Block size = 2⁷ ⇒ 
Word bits = 7 
Step 2: Number of cache lines 
Cache size / Block size = 
2¹³ / 2⁷ = 2⁶ = 64 lines 
Step 3: Number of sets 
4-way set associative ⇒ 
Number of sets = 64 / 4 = 16 = 2⁴ 
⇒ Set bits = 4 
Step 4: Tag bits 
Total address bits = 20 
Tag = Total − (Set + Word) 
= 20 − (4 + 7) 
= 9 bits 
<!-- PAGE 519 -->
Computer Organization and Architecture


</details>

---


### Q50. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer with a 4-ways set-associative 
mapped cache of the following characteristics: a 
total of 1 MB of main memory, a word size of 1 
byte, a block size of 128 words and a cache size of 8 
KB. While accessing the memory location 0C795H 
by the CPU, the contents of the TAG field of the 
corresponding cache line is:


- **(A)** 000011000

- **(B)** 110001111

- **(C)** 00011000

- **(D)** 110010101



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Given address 
= 0C795H 
Hex → Binary: 
0 = 0000 
C = 1100 
7 = 0111 
9 = 1001 
5 = 0101 
So, 
0C795H = 0000 1100 0111 1001 0101 (20 bits) 
Step 2: Split into TAG | SET | WORD 
Structure: 
TAG = first 9 bits 
SET = next 4 bits 
WORD = last 7 bits 
Binary: 
000011000 | 1111 | 0010101 
Step 3: Extract TAG 
TAG = 000011000


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a byte addressable main 
memory of 216 bytes. Assume that a direct 
mapped data cache consisting of 32 lines of 64 
bytes each is used in the system. A 50 × 50 two-
dimensional array of bytes is stored in the main 
memory starting from memory location 1100 H . 
Assume that the data cache is initially empty. The 
complete array is accessed twice. Assume that the 
contents of the data cache do not change in 
between the two accesses. 
Which of the following lines of the data cache will 
be replaced by new blocks in accessing the array 
for the second time?


- **(A)** line 4 to line 11

- **(B)** line 4 to line 12

- **(C)** line 0 to line 7

- **(D)** line 0 to line 8



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Line index = (address/64)mod 32 
Starting address = 1100H = 4352 
Starting line: 
4352/64 = 68 
68mod 32 = 4⇒ first block maps to line 4 
Total blocks = 40 
So blocks map to lines: 
4,5,6,...,31,0,1,2,3,4,5,6,7,8,9,10,11 
After first pass: 
Lines 4 to 11 contain the last 8 blocks 
Second pass: 
When we restart, first 8 blocks again map to 
lines 4 to 11, replacing those blocks 
Answer: 
line 4 to line 11


</details>

---


### Q52. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a 4-way set associative cache consisting 
of 128 lines with a line size of 64 words. The CPU 
generates a 20-bit address of a word in main 
memory. The numbers of bits in the TAG, SET, 
and WORD fields are respectively:


- **(A)** 9, 6, 5

- **(B)** 7, 7, 6

- **(C)** 7, 5, 8

- **(D)** 9, 5, 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Number of sets = cache size / (block size × 
number of blocks per set) 
= (128 × 64) / (64 × 4) 
= 32 sets 
Number of index (line) bits = log₂(32) = 5 
Number of word (block offset) bits = log₂(64) = 6 
Total address bits = 20 
Tag bits = 20 − 5 − 6 
= 9


</details>

---


### Q53. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a machine with a byte addressable main 
memory of 216 bytes. Assume that a direct mapped 
data cache consisting of 32 lines of 64 bytes each 
is used in the system. A 50 × 50 two-dimensional 
array of 1 byte is stored in the main memory 
starting from memory location 1100H. The data 
cache is initially empty. 
The complete array is accessed twice. Assume that 
the contents of the data cache do not change in 
between the two accesses. 
How many data cache misses will occur in total?


- **(A)** 48

- **(B)** 50

- **(C)** 56

- **(D)** 59



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Bits to represent the address = log₂(2¹⁶) = 16Each cache line 
size = 64 bytes → offset = 6 bits Total number of cache 
lines = 32 → index = 5 bits Tag bits = 16 − 6 − 5 = 5 bits 
We have a 2D array, each element size = 1 byte 
Total array size = 50 × 50 × 1 = 2500 bytes 
Number of cache lines required = 2500 / 64 ≈ 
39.0625 ≈ 40 lines 
Starting address = 1100H = 0001 0001 0000 0000 
Index bits indicate cache line number 4 → first array 
block maps to line 4 
Since 40 memory blocks map into 32 cache lines, 
some blocks map to the same cache line. 
Mapping pattern: 
0 → A28 
1 → A29 
2 → A30 
3 → A31 
4 → A0, A32 
5 → A1, A33 
6 → A2, A34 
7 → A3, A35 
8 → A4, A36 
9 → A5, A37 
10 → A6, A38 
11 → A7, A39 
12 → A8 
... 
30 → A26 
31 → A27 
Accessing the complete array twice: 
First pass: 40 compulsory misses 
Second pass: 16 conflict misses (because 8 cache 
lines from index 4 to 11 are replaced 
Total misses = 40 + 16 = 56 misses 
Hence, the answer is option (c).


</details>

---


### Q54. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A CPU has a cache with block size 64 bytes. The 
main memory has k banks, each bank being c bytes 
wide. Consecutive c-byte chunks are mapped on 
consecutive banks, with wrap-around All the k 
banks can be accessed in parallel, but two accesses 
to the same bank must be serialized. A cache block 
access may involve multiple iterations of parallel 
bank accesses depending on the amount of data 
obtained by accessing all the k banks in parallel. 
Each iteration requires decoding the bank numbers 
to be accessed in parallel and this takes k/2 ns. The 
latency of one bank access is 80 ns. 
If c = 2 and k = 24, then the latency of retrieving a 
cache block starting at address zero from main 
memory is:


- **(A)** 92 ns

- **(B)** 104 ns

- **(C)** 172 ns

- **(D)** 184 ns



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

According to the original question, there are k banks 
with k = 24, and each bank has c bytes where c = 2. 
So in one iteration, the total data transferred is: 
2 × 24 = 48 bytes 
Now we calculate the latency for one iteration. 
Decoding time per iteration = k / 2 = 24 / 2 = 12 ns 
Each bank latency = 80 ns 
Total time for one iteration = decoding latency + 
bank latency 
= 12 ns + 80 ns 
= 92 ns 
Since one iteration transfers 48 bytes and the cache 
block size is 64 bytes, we need 2 iterations. 
Total transfer time = 2 × 92 ns 
= 184 ns 
<!-- PAGE 520 -->
Computer Organization and Architecture


</details>

---


### Q55. [GATE CSE – 2007 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider two cache organizations: The first one is a 
32 KB 2-way set associative with 32-byte block size. 
The second one is of the same size but directly 
mapped. The size of an address is 32 bits in both 
cases. A 2-to-1 multiplexer has latency of 0.6 ns 
while a k-bit comparator has a latency of k/10 ns. 
The hit latency of the set associative organization is 
h₁ while that of the direct mapped one is h₂. 
The value of h1 is :


- **(A)** 2.4 ns

- **(B)** 2.3 ns

- **(C)** 1.8 ns

- **(D)** 1.7 ns



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Cache size is 32 KB and cache block size is 32 B 
So, 
Ratio: 
𝑀2 = 512 × 512 = 262144 
Number of sets = 𝑐𝑎𝑐 ℎ𝑒 𝑠𝑖𝑧𝑒 = 
𝑛𝑜.𝑜𝑓 𝑏𝑙𝑜𝑐𝑘𝑠 𝑖𝑛 𝑎 𝑠𝑒𝑡× 𝑏𝑙𝑜𝑐𝑘 𝑠𝑖𝑧𝑒 
𝑀1 = 16384 1 = 
32 𝐾𝐵 2 × 32 𝐵 − 512 𝑀2 262144 16 
So, the number of index bits needed = 9 (since 29 
= 512). 
Number of offset bits = 5 (since 25 = 32; B is the 
block size and assuming byte addressing). 
So, the number of tag bits = 32 − 9 − 5 = 18 (as 
the memory address is 32 bits). 
So, time for comparing the data = Time to 
compare the data + Time to select the block in set 
= 0.6 + 18/10 ns 
= 2.4 ns.


</details>

---


### Q56. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider two cache organizations: The first one is 
a 32 KB 2-way set associative with 32-byte block 
size. The second one is of the same size but 
directly mapped. The size of an address is 32 bits 
in both cases. A 2-to-1 multiplexer has latency of 
0.6 ns while a k-bit comparator has a latency of 
k/10 ns. The hit latency of the set associative 
organization is h₁ while that of the direct mapped 
one is h₂. 
The value of h2 is :


- **(A)** 2.4 ns

- **(B)** 2.3 ns

- **(C)** 1.8 ns

- **(D)** 1.7 ns



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

Answer: 
1/16 (Option B)


</details>

---


### Q57. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A CPU has a 32𝐾𝐵 direct mapped cache with 
128 byte－block size．Suppose 𝐴 is two 
dimensional array of size 512 × 512 with 
elements that occupy 8 －bytes each．Consider 
the following two 𝐶 code segments， 𝑃1 and 𝑃2 
． 
P1： 
for(i=0; i<512 ; i++) 
{ 
for (j=0;j<512; j++) 
} 
x +=A[i][j] 
} 
P2: 
for(i=0; i<512 ; i++) 
{ 
for ( j=0:j<512:j++ ) 
{ 
x +=A[j][i] 
𝑃1 and 𝑃2 are executed independently with the 
same initial state，namely，the array 𝐴 is not in 
the cache and 𝑖, 𝑗 ， 𝑥 are in registers．Let the 
number of cache misses experienced by 𝑃1 be 𝑀1 
and that for 𝑃2 be 𝑀2 ． 
The value of the ratio 𝑀1 ： 
𝑀2


- **(A)** 0

- **(B)** 1  16

- **(C)** 1

- **(D)** 16



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** B


**Step-by-Step Explanation:**

Cache = 32 KB, block = 128 B ⇒ elements per 
block = 128/8 = 16 
Array = 512 × 512, row-major 
P1 (row-wise access): 
A[i][j] → contiguous access 
Every 16 elements → 1 miss 
Total elements = 512 × 512 
512 × 512 
Cache size doesn’t cause extra misses because no 
conflict within a row 
Answer: 
16384 (Option C)


</details>

---


### Q58. [GATE CSE – 2006 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A CPU has a 32𝐾𝐵 direct mapped cache with 128 
byte－block size．Suppose 𝐴 is two dimensional 
array of size 512 × 512 with elements that occupy 
8 －bytes each．Consider the following two 𝐶 
code segments， 𝑃1 and 𝑃2 ． 
P1： 
for(i=0; i<512 ; i++) 
{ 
for (j=0;j<512; j++) 
} 
x +=A[i][j] 
} 
P2： 
for(i=0; i<512 ; i++) 
{ 
for ( j=0:j<512:j++ ) 
{ 
x +=A[j][i]


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Block size = 128 B ⇒ elements per block = 
128/8 = 16 
Array = 512 × 512, row-major 
P1 (row-wise): 
Sequential access ⇒ every 16 elements → 1 miss 
Total elements = 512 × 512 
512 × 512 
Number of blocks: 
= 2¹⁵ / 2⁵ = 2¹⁰ blocks 
𝑀1 = = 16384 16 
Index bits: 
= log₂(2¹⁰) = 10 
Block offset bits: 
= 5 
Tag bits: 
= 32 − (10 + 5) = 17 bits 
Hit latency components (Direct Mapped): 
Tag comparison latency = k/10 = 17/10 = 1.7 
ns 
No multiplexer needed (only one block per 
index) 
So, 
h₂ = 1.7 ns


</details>

---


### Q59. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a direct mapped cache of size 32 KB 
with block size 32 bytes. The CPU generates 32-
bit addresses. The number of bits needed for cache 
indexing and the number of tag bits are 
respectively:


- **(A)** 10, 17

- **(B)** 10, 22

- **(C)** 15, 17

- **(D)** 5, 17



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Number of blocks = cache size / block size = 32 KB 
/ 32 B = 1024 
So, indexing requires 10 bits. 
Number of OFFSET bits required to access 32-byte 
block = 5. 
So, the number of TAG bits = 32 − 10 − 5 = 17.


</details>

---


### Q60. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a 2-way set associative cache memory 
with 4 sets and total 8 cache blocks (0–7) and 
main memory with 128 blocks (0–127). Which 
memory blocks will be present in the cache after 
the following sequence of memory block 
references if LRU policy is used for cache block 
replacement? If initially the cache did not have 
any memory block from the current job? 
0 5 3 9 7 0 16 55


- **(A)** 0 3 5 7 16 55

- **(B)** 0 3 5 7 9 16 55

- **(C)** 0 5 7 9 16 55

- **(D)** 3 5 7 9 16 55



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

 2-way set associative cache 
 Total cache blocks = 8 ⇒ Number of sets = 8 / 2 = 
4 sets 
 Main memory blocks = 128 
 Mapping: 
Set number = (Block number) mod 4 
Reference string: 
𝑀1 = = 16384 16 0, 5, 3, 9, 7, 0, 16, 55 
P2 (column-wise access): 
A[j][i] → stride = 512 × 8 = 4096bytes 
Each access goes to a different block ⇒ no reuse 
Every access = miss 
Step-by-step simulation (LRU): 
Set mapping: 
 Set = Block mod 4 
<!-- PAGE 521 -->
Computer Organization and Architecture 
Block Set 
0 0 
5 1 
3 3 
9 1 
7 3 
0 0 
16 0 
55 3 
Now simulate each set (2-way, LRU): 
Set 0: (blocks → 0, 0, 16) 
 Insert 0 → [0] 
 Access 0 → hit 
 Insert 16 → [0,16] (no eviction yet) 
Final Set 0 → 0, 16 
Set 1: (blocks → 5, 9) 
 Insert 5 → [5] 
 Insert 9 → [5,9] 
Final Set 1 → 5, 9 
Set 3: (blocks → 3, 7, 55) 
 Insert 3 → [3] 
 Insert 7 → [3,7] 
 Insert 55 → LRU = 3 ⇒ replace 
→ [7,55] 
Final Set 3 → 7, 55 
Set 2: 
 No blocks mapped → empty 
Final cache contents: 
All blocks present: 
0, 16, 5, 9, 7, 55 
Sorted: 
0, 5, 7, 9, 16, 55


</details>

---


### Q61. [GATE CSE – 2005 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A computer system has a level-1 instruction cache 
(I-cache), a level-1 data cache (D-cache) and a level-
2 cache (L2-cache) with the following 
specifications: 
Cache Capacity Mapping 
method 
Block 
size 
I-cache 4K words Direct mapping 4 Words 
D-cache 4K words 2-way set- 
associative 
mapping 
4 Words 
L2-cache 64K 
words 
4-way set -
associative 
mapping 
16 Words 
Capacity Mapping method Block size I-cache 4K 
words Direct mapping 4 Words D-cache 4K words 
2-way set-associative mapping 4 Words L2-cache 
64K words 4-way set-associative mapping 16 Words 
The length of the physical address of a word in the 
main memory is 30 bits. The capacity of the tag 
memory in the I-cache, D-cache and L2-cache is, 
respectively,


- **(A)** 1K × 18-bit, 1K × 19-bit, 4K × 16-bit

- **(B)** 1K × 16-bit, 1K × 19-bit, 4K × 18-bit

- **(C)** 1K × 16-bit, 512 × 18-bit, 1K × 16-bit

- **(D)** 1K × 18-bit, 512 × 18-bit, 1K × 18-bit 
GATE IT – 2005 MCQ (2-MARKS) 
GATE IT – 2005 MCQ (2-MARKS)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

 Physical address size = 30 bits 
 I-cache: 4K words, Direct mapping, Block size = 
4 words 
 D-cache: 4K words, 2-way set associative, Block 
size = 4 words 
 L2-cache: 64K words, 4-way set associative, 
Block size = 16 words 
1. I-Cache (Direct Mapping) 
Capacity = 4K words = 2¹² words 
Block size = 4 words = 2² 
Number of cache lines = 2¹² / 2² = 2¹⁰ = 1K 
Word offset = log₂(4) = 2 bits 
Index = log₂(1K) = 10 bits 
Tag bits = 30 − (10 + 2) = 18 bits 
Tag memory = 1K × 18 bits 
2. D-Cache (2-way Set Associative) 
Capacity = 4K words = 2¹² words 
Block size = 4 words = 2² 
Total blocks = 2¹² / 2² = 2¹⁰ 
Number of sets = 2¹⁰ / 2 = 2⁹ = 512 
Word offset = 2 bits 
Set index = log₂(512) = 9 bits 
Tag bits = 30 − (9 + 2) = 19 bits 
Total entries = total blocks = 2¹⁰ = 1K 
Tag memory = 1K × 19 bits 
3. L2-Cache (4-way Set Associative) 
Capacity = 64K words = 2¹⁶ words 
Block size = 16 words = 2⁴ 
Total blocks = 2¹⁶ / 2⁴ = 2¹² 
Number of sets = 2¹² / 4 = 2¹⁰ = 1K 
Word offset = 4 bits 
Set index = 10 bits 
Tag bits = 30 − (10 + 4) = 16 bits 
Total entries = total blocks = 2¹² = 4K 
Tag memory = 4K × 16 bits 
<!-- PAGE 522 -->
GATE CSE – 2025 MCQ SET - 1(1-MARKS) 
GATE CSE – 2026 MCQ SET - 2(1-MARKS) 
GATE CSE – 2024 MCQ SET - 1(1-MARKS) 
GATE CSE – 2023 NAT (1-MARKS) 
SECONDARY MEMORY & I/O 
ORGANIZATION 
.


</details>

---



## Topic 6: Topic 6


### Q1. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements about 
interrupt handling mechanisms in a CPU, 
S1: In non-vectored interrupt mechanism, it 
usually takes more time to start the Interrupt 
Service Routine (ISR) when compared to that in a 
vectored interrupt mechanism. 
S2: In daisy-chain interrupt mechanism, the CPU 
polls all the input devices individually to 
determine the source of the interrupt. 
Which one of the following options is correct with 
respect to SI and S2?


- **(A)** Both S1 and S2 are true

- **(B)** Both S1 and S2 are false

- **(C)** S1 is true and S2 is false

- **(D)** S1 is false and S2 is true 
.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

S1 is true and S2 is false 
 S1: True 
In a non-vectored interrupt, the CPU has to 
identify the interrupt source (often by polling or 
additional steps) before jumping to the ISR. This 
increases the response time. 
In a vectored interrupt, the ISR address is 
directly provided, so execution starts faster. 
 S2: False 
In a daisy-chain interrupt mechanism, devices 
are connected in a chain and priority is resolved 
through hardware propagation of the interrupt 
acknowledge signal. The CPU does not poll each 
device individually; instead, the device with the 
highest priority in the chain responds first. 
So, S1 is correct, S2 is incorrect → Option (c).


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Suppose a program is running on a non-pipelined 
single processor computer system. The computer 
is connected to an external device that can 
interrupt the processor asynchronously. The 
processor needs to execute the interrupt service 
routine (ISR) to serve this interrupt. The following 
steps (not necessarily in order) are taken by the 
processor when the interrupt arrives: 
(i) The processor saves the content of the program 
counter. 
(ii) The program counter is loaded with the start 
address of the ISR. 
(iii) The processor finishes the present instruction. 
Which ONE of the following is the CORRECT 
sequence of steps?


- **(A)** (iii), (i), (ii)

- **(B)** (i), (iii), (ii)

- **(C)** (i), (ii), (iii)

- **(D)** (iii), (ii), (i)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Let's analyze the steps that a processor must take 
when an interrupt occurs on a non-pipelined single-
processor system: 
The processor must first finish executing the current 
instruction. This ensures that the instruction, which 
might be partially completed, is fully executed 
before transferring control to the interrupt service 
routine (ISR). 
Once the instruction finishes, the processor saves the 
content of the program counter (PC). This step is 
crucial because it stores the address of the next 
instruction to execute, which allows the processor to 
resume normal operations after the ISR is complete. 
Finally, the processor loads the PC with the start 
address of the ISR, thereby transferring control to 
the interrupt handler. 
In summary, the correct sequence is: 
(iii) Finish the present instruction. 
(i) Save the content of the program counter. 
(ii) Load the PC with the start address of the ISR. 
This corresponds to Option (a)


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer with a 4 MHz processor. Its 
DMA controller can transfer 8 bytes in 1 cycle from 
a device to main memory through cycle stealing at 
regular intervals. Which one of the following is the 
data transfer rate (in bits per second) of the DMA 
controller if 1% of the processor cycles are used for 
DMA?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

1 sec → 4 × 10⁶ cycles 
1 cycle → 8 B transferred 
1% (Processor cycle) = (1/100) × 4 × 10⁶ = 40,000 
cycles 
Data transfer rate = 40,000 × 8 × 8 Bps 
= 2,560,000


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is FALSE?


- **(A)** In the cycle stealing mode of DMA, one word 
of data is transferred between an I/O device 
and main memory in a stolen cycle

- **(B)** For bulk data transfer, the burst mode of 
DMA has a higher throughput than the cycle 
stealing mode

- **(C)** Programmed I/O mechanism has a better CPU 
utilization than the interrupt driven I/O 
mechanism

- **(D)** The CPU can start executing an interrupt 
service routine faster with vectored interrupts 
than with non-vectored interrupts



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

(a) In the cycle stealing mode of DMA, one word of 
data is transferred between an I/O device and main 
memory in a stolen cycle 
True (as definition) 
(b) For bulk data transfer, the burst mode of DMA 
has a higher throughput than the cycle stealing mode 
True (as define, through as compared to bulk data, 
for burst mode throughput will be equal to 1 as bulk 
of data will be transferred at once but with cycle 
stealing mode transfer will take more time and 
throughput will be less) 
(c) Programmed I/O mechanism has a better CPU 
utilization than the interrupt driven I/O mechanism 
GATE CSE – 2005 MCQ (2-MARKS) 
<!-- PAGE 526 -->
Computer Organization and Architecture 
False (Programmed i/o is like polling(can 
remember to recall the concept) so to check 
whether there is i/o who needs cpu ,cpu has to do a 
lot of work, but in interrupt driven i/o ,i/o has 
given privileged to tell cpu that i need you by 
sending the interrupt so cpu in is more utilized in 
interrupt driven i/o) 
(d) The CPU can start executing an interrupt 
service routine faster with vectored interrupts than 
with non-vectored interrupts 
true (vectored interrupt means address of program 
which handles that interrupt is send with the 
interrupt itself where in non-vectored interrupt it is 
not send so cpu has to run default service routine 
to identify the address of that routine and then run 
that routing)


</details>

---


### Q5. [GATE CSE – 2024 MCQ SET - 2(1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


A keyboard connected to a computer is used at a rate 
of 1 keystroke per second The computer system 
polls the keyboard every 10 ms to check for a 
keystroke and consumes 100 μs (micro seconds) for 
each poll. If it is determined after polling that a key 
has been pressed, the system consumes an additional


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10.2


**Step-by-Step Explanation:**

1. Polling System (T1) 
CPU polls (asks) keyboard every 10 ms and asks 
did you get any keystrokes? The keyboard 
answers “Yes” only once per second 
In one second, the CPU polls the keyboard 100 
times (1 sec = 1000 ms, and the CPU polls every 
10 ms). 
Time Spent in Polling = 100 × 100 microsec = 
10000 microseconds or 10 ms. 
Time Spent in Processing the Keystroke (Only 
once per second = 200 microsec or 0.2 ms. 
CPU’s Time wasted in Polling System = Time 
in one second will be 2 × 10⁶. 
Now 0.5% of these cycles are taken by DMA to 
transfer the data. 
So total number of cycles taken to transfer the data 
will be (0.5 / 100) × 2 × 10⁶ = 10,000 and in each 
cycle 8 bits are transferred 
So, data transfer rate in bits per second = 8 × 10000 
= 80,000.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following facilitates transfer of 
bulk data from hard disk to main memory with the 
highest throughput?


- **(A)** DMA based I/O transfer

- **(B)** Interrupt driven I/O transfer

- **(C)** Polling based I/O transfer

- **(D)** Programmed I/O transfer



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

In DMA, a bulk amount of data will be transferred 
from the secondary memory to main memory 
without the involvement of a CPU.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with DMA support. 
The DMA module is transferring one 8-bit 
character in one CPU cycle from a device to 
memory through cycle stealing at regular 
intervals. Consider a 2 MHz processor. If 0.5% 
processor cycles are used for DMA, the data 
transfer rate of the device is  bits per 
second.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 80000


**Step-by-Step Explanation:**

To complete one cycle at 2 MHz it will take 1 / (2 
× 10⁶) seconds. So the total number of CPU cycles


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements. 
I. Daisy chaining is used to assign priorities in 
attending interrupts. 
II. When a device raises a vectored interrupt, the 
CPU does polling to identify the source of the 
interrupt. 
III. In polling, the CPU periodically checks the 
status bits to know if any device needs its attention. 
IV. During DMA, both the CPU and DMA 
controller can be bus masters at the same time. 
Which of the above statements is/are TRUE?


- **(A)** I and IV only

- **(B)** I and II only

- **(C)** III only

- **(D)** I and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Statement I: True – Daisy chaining is used to assign 
priorities in attending interrupts. 
Statement II: False – Vectored interrupts do not 
involve polling; it is the non-vectored interrupts that 
involve polling. 
Statement III: True – Polling means that the CPU 
periodically checks the status bits to know if any 
device needs attention. 
Statement IV: False – During DMA, only one of 
the CPU or the DMA controller can be the bus 
master at a time. 
Correct Statements: I and III


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


The size of the data count register of a DMA controller 
is 16 bits ．The processor needs to transfer a file of 
29,154 kilobytes from disk to main memory ．The 
memory is byte addressable 
The minimum number of times the DMA controller 
needs to get the control of the system bus from the 
processor to transfer the file from the disk to main 
memory is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 456


**Step-by-Step Explanation:**

Data count register = 16 bits ⇒ max count = 216 = 
65536bytes per transfer 
File size = 29,154 KB 
= 29154 × 1024 = 29,853,696bytes 
Number of DMA transfers: 
Spent in Polling + Time Spent in Processing = 
10.2 ms 
2. Interrupt System (T2) 
The CPU doesn’t ask the keyboard periodically 
⌈ 
Answer: 
⌉ = ⌈455.5⌉ = 456 
about the keystroke, but the keyboard tells the 
CPU via interrupt about a keystroke. 
Whenever there is a keystroke, the keyboard 
interrupts the CPU. CPU executes corresponding 
Interrupt Service Routine (ISR) which takes 1 ms. 
That’s all. 
Speed Up of Interrupt over Polling System (S) = 
T1 / T2 = 10.2 ms / 1 ms = 10.2


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a typical disk that rotates at 15000 
rotations per minute (RPM) and has a transfer rate 
of 50 × 106 bytes /sec. If the average seek time of 
the disk is twice the average rotational delay and 
the controller's transfer time is 10 times the disk 
transfer time, the average time (in milliseconds) to 
read or write a 512-byte sector of the disk is .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (6.1)


**Step-by-Step Explanation:**

𝐴𝑣𝑒𝑟𝑎𝑔𝑒 𝐷𝑖𝑠𝑘 𝑎𝑐𝑐𝑒𝑠𝑠 𝑡𝑖𝑚𝑒 𝑂𝑟 𝐴𝑣𝑔 𝑟𝑒𝑎𝑑/ 
𝑤𝑟𝑖𝑡𝑒 𝑡𝑖𝑚𝑒 = 𝐴𝑣𝑔 𝑆𝑒𝑒𝑘 𝑇𝑖𝑚𝑒(𝑆𝑇) + 
𝐴𝑣𝑔 𝑅𝑜𝑡𝑎𝑡𝑖𝑜𝑛 𝑇𝑖𝑚𝑒(𝑅) + 
𝐷𝑖𝑠𝑘 𝑇𝑟𝑎𝑛𝑓𝑒𝑟 𝑇𝑖𝑚𝑒(𝐷𝑇𝑇) + 
𝑂𝑣𝑒𝑟ℎ𝑒𝑎𝑑 (𝑖𝑓 𝑎𝑛𝑦 𝑔𝑖𝑣𝑒𝑛) 
Given, 
Disk RPM = 15000 
i.e. 15000 Rotation in 60 sec. 
In 1 Rotation = 60 / 15000 sec × 1000 / 1000 
1 Rotation = 4 msec 
Avg ST = 2 × Avg RT 
⇒ 2 × 2 = 4 msec 
<!-- PAGE 527 -->
Computer Organization and Architecture 
Avg ST = 4 msec 
Avg Rotational Latency = 1/2 Rotation time 
⇒ 1/2 × 4 msec 
Avg Rotational Latency = 2 msec 
Transfer Rate = 50 × 106 Bytes/sec 
50 × 106 Byte — 1 sec 
1 Byte transfer time = 1 / (50 × 106) sec 
Given 1 sector = 512 Bytes 
512 Byte transfer time = 512 / (50 × 10^6) 
= 10.24 × 10-6 
= 0.01024 msec 
D.T.T = 0.01024 msec 
Controller time = 10 × 0.01024 msec 
= 0.1024 msec 
ST + RL + DTT + overhead 
= 4 + 2 + 0.01024 + 0.1024 
= 6.11264 msec ≈ 6.1 msec (Ans) 
Total Time Required to 2000 sector = 2000 * 
7.01ms 
=14020 msec


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk pack with a seek time of 4 
milliseconds and rotational speed of 10000 rotations 
per minute (RPM). It has 600 sectors per track and 
each sector can store 512 bytes of data. Consider a file 
stored in the disk. The file contains 2000 sectors 
Assume that every sector access necessitates a seek, 
And the average rotational latency for accessing each 
sector is half of the time for one complete rotation. 
The total time (in milliseconds) needed to read the 
entire file is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (14020)


**Step-by-Step Explanation:**

Time Required to Read One Sector = Seek Time 
# Sector required to 
Store this file = [42797kB 512B = 85594 sector 
+Average Rotational Latency + Data transfer time 
Seek Time (𝑆𝑇) = 4msec 
Each sector = 512 Byte 
600 sector/track X 512 Byte /sector = 600 ∗ 
512 Byte 
First Sector (Starting) address of the File = 
Lost Sector address of the 𝐹𝑖𝑙𝑒 is 
= 1229416 + (85594 − 1) 
This file Log Secter = 1315009 
Cylinder No = 
= 1284 Ans 
16×44 
10000 Rotation in 60 sec . 
1 Rotation =  60  ⇒ 6 × 10−3sec. 
1 Rotation takes = 6 msec 
Average Rotational Latency = 1/2 × 6 
𝑅 = 3 msec 
1 Track Capacity = 600 × 512 Byte 
In 1 Rotation 1 Complete Track is transferred 
600 × 512 Byte takes→ 6 msec 
1Byte→ 
msse. 
60×512 
512 Byte (1 Sector) → 
512∗6 
600∗512 
DTT=0.01 msec. 
Total Time Required for 1 sector = 4 + 3 + 0.01 
= 7.01 msec.


</details>

---


### Q12. [GATE CSE – 2020 MCQ (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider a hard disk with 16 recording surfaces (0-
15) having 16384 cylinders (0-16383) and each


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - (D)


**Step-by-Step Explanation:**

# Surfaces = 16 
# Sector/ Track = 64 
16384 cylinder. 
# Sector per Cylinder=16 × 64 = 1024 
sec/cylinders. 
Sector Starting Address: < 1200,9,40 > 
To traverse 1200 cylinders : 1200 × 16 × 64 
To traverse 9 surface = 9 × 64 
To traverse 40 sector = 40 
Starting Address of the File: 1229416 
File size = 42797 kB Each sector = 512 Byte


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


An application loads 100 libraries at start -up. 
Loading each library requires exactly one disk 
access. The seek time of the disk to a random 
location is given as 10 ms . Rotational speed of disk 
is 6000 rpm . If all 100 libraries are loaded from 
random locations on the disk, how long does it take 
to load all libraries? (The time to transfer data from 
the disk block once the head has been positioned at 
the start of the block may be neglected.)


- **(A)** 0.50 s

- **(B)** 1.50 s

- **(C)** 1.25 s

- **(D)** 1.00 s



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Total 100 libraries 
Seek time = 10 msec 
DTT (negligible) 
Rotational Speed = 6000 rpm 
Average Disk access time Or Avg read/ 
write time = Avg Seek Time(ST) + 
Avg Rotation Time(R) + 
Disk Tranfer Time(DTT) + 
Overhead (if any given) 
Avg. RT = 1/2 Rotation Time 
6000 Rotation = 60 sec 
1 Rotation = 60 / 6000 sec × 1000 / 1000 = 10 msec 
Avg. RT = 1/2 × 10 msec = 5 msec 
Total time to access 1 library = ST + RL + DTT 
⇒ 10 + 5 = 15 msec 
Total time taken for 100 libraries 
] 
<!-- PAGE 528 -->
Computer Organization and Architecture 
= 100 × 15 msec 
= 100 × 15 × 10-3 sec 
= 1.5 sec


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


On a non-pipelined sequential processor, a 
program segment, which is the part of the interrupt 
service routine, is given to transfer 500 bytes from 
an I/O device to memory. 
Intialize the address register 
Intilatize the count to 500 
LOOP: Load a byte from device 
Store in memory at address given by address 
register 
Increment the address register 
Decrement the count 
If count != 0 go to LOOP 
Assume that each statement in this program is 
equivalent to a machine instruction which takes one 
clock cycle to execute if it is a non-load/store 
instruction. The load-store instructions take two 
clock cycles to execute. 
The designer of the system also has an alternate 
approach of using the DMA controller to implement 
the same transfer. The DMA controller requires 20 
clock cycles for initialization and other overheads. 
Each DMA transfer cycle takes two clock cycles to 
transfer one byte of data from the device to the 
memory. 
What is the approximate speed up when the DMA 
controller based design is used in a place of the 
interrupt driven program based input-output?


- **(A)** 3.4

- **(B)** 4.4

- **(C)** 5.1

- **(D)** 6.7



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (A)


**Step-by-Step Explanation:**

Interrupt-driven program: Rotation Time: 60 seconds 3000 RPM = 0.02 seconds. 
Per iteration (500 times): 
Load = 2 cycles 
Store = 2 cycles 
Increment address = 1 
Decrement count = 1 
Check & branch = 1 
Total per iteration = 7 cycles 
Total = 500 × 7 = 3500cycles 
Data Transfer Rate: 512 KB = 25,600,000bytes/ 
0.02 s 
sec. 
The DMA controller transfers a 4-byte word 
per cycle. The time required for the disk to 
ready or consume 4 bytes is: 
Initialization (2 instructions): 
= 2 cycles 
Total ≈ 3502 cycles 
4 bytes Time Interval = 
25,600,000 bytes /sec = 156.25nsec 
DMA approach: 
Initialization = 20 cycles 
Transfer = 500 × 2 = 1000cycles 
Total = 1020 cycles 
Speedup: 
Every 156.25 nsec , the DMA controller steals 
one memory cycle ( 40 nsec ), during which 
the CPU is blocked from accessing memory: 
Memory Cycle Time


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


A CPU generally handles an interrupt by executing 
an interrupt service routine


- **(A)** as soon as an interrupt is raised

- **(B)** by checking the interrupt register at the end of 
fetch cycle

- **(C)** by checking the interrupt register after 
finishing the execution of the current 
instruction

- **(D)** by checking the interrupt register at fixed time 
intervals



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (C)


**Step-by-Step Explanation:**

3502 ≈ 3.43 ≈ 3.4 
Blocked % = DMA Interval × 100 
40nsec = × 100 = 25. 
156.25nscc 
After finishing the execution of each instruction 
the CPU reads the interrupt pins to recognize the 
interrupts. 
INTR = 1 = Interrupt is present. (Service the 
Interrupt) 
INTR= 0 = Interrupt is not present. (Go to next 
Instruction fetch from user program) 
The closest value among the options is 25%.


</details>

---


### Q16. [GATE CSE – 2011 MCQ (1-MARKS]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


A device with data transfer rate 10 KB/sec is 
connected to a CPU. Data is transferred byte-wise. 
Let the interrupt overhead be 4 μ sec The byte 
transfer time between the device interface register 
and CPU or memory is negligible. 
What is the minimum performance gain of operating 
the device under interrupt mode over operating it 
under program controlled mode?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

In Programmed I/O, the CPU issues a command and 
waits for I/O operations to complete. 
So here, the CPU will wait for 1 sec to transfer 
10 KB of data. 
The minimum performance gain for interrupt 
mode happens for the smallest unit of data 
transfer – which here is 1 byte. 
Time to transfer 1 byte of data in programmed 
I/O mode = 1 / (10 KBps) = 100 μs 
In Interrupt mode, to transfer 1 byte of data, 
overhead is 
4 × 10⁻⁶ s = 4 μs 
Performance gain = 100 / 4 = 25.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 6 | **Marks:** 2 | **Difficulty:** Medium


Consider the disk drive with the  following 
specifications: 16 surfaces, 512 tracks/surface, 512 
sectors/track, 1 KB/sector, rotation speed 3000 
rpm. The disk  is operated in cycle stealing  mode 
whereby whenever one byte is ready it is sent to 
memory, similarly, for writing, the disk interface 
reads a 4 -byte word from the memory in each 
DMA cycle. Memory cycle time is 40 nsec The 
maximum percentage of time that the CPU gets 
blocked during DMA operation is


- **(A)** 10

- **(B)** 25

- **(C)** 40

- **(D)** 50



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** (B)


**Step-by-Step Explanation:**

Track Capacity: 512 sectors × 1 KB = 512 KB 
(using 1000 bytes for streaming data rate). 
Rotation Time: 
60 seconds 
3000 RPM = 0.02 seconds. Data Transfer 
Rate: 
512 KB
0.02a = 25,600,000 bytes/ sec. 
The DMA controller transfers a 4-byte word per cycle. 
The time required for the disk to ready or consume 4 
bytes is: 
 I ime Interval = 4 bytes 25,600,000 bytes /sec
= 156.25nsec 
Every 156.25 osech, the DMA controller steals one 
memory cycle ( 40 oseck), during which the CPU is 
blocked from accessing memory: 
 Blocked % = Memory Cycle Time  DMA Interval × 100
 − 40nsec156.25nscc × 100 − 40  
The closest value among the options is 25%.


</details>

---

