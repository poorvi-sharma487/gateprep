# Operating Systems


> **Subject:** Operating Systems  

> **Pages in Book:** 293–366  

> **Total Modules:** 5


## Topics in this Subject


## Topic 1: FARRAY


### Q1. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the following CPU scheduling 
algorithms cannot be preemptive?


- **(A)** Shortest Remaining Time First (SRTF) 
Scheduling

- **(B)** First Come First Serve (FCFS) Scheduling

- **(C)** Round Robin Scheduling

- **(D)** Priority Scheduling



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

FCFS cannot be pre-emptive


</details>

---


### Q2. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a CPU that has to execute two types of 
processes. The first type, Actuators (A), requires a 
CPU burst of 6 seconds. The second type, 
Controllers (C), requires a CPU burst of 8 seconds. 
 A new process of type A arrives at time t = 10, 20, 
30, 40, and 50 seconds. Similarly, a new process of 
type C arrives at time t = 11, 22, 33, 44, and 55 seconds. 
 The CPU scheduling policy is First Come First 
Serve (FCFS). The first process of type A star ts 
running at t = 10 seconds. 
 The average waiting time (in seconds) for the 10 
processes is ______. (rounded off to one decimal place).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 9.5


**Step-by-Step Explanation:**

Process Arrival Start Finish Waiting 
A1 10 10 16 0 
C1 11 16 24 5 
A2 20 24 30 4 
C2 22 30 38 8 
A3 30 38 44 8 
C3 33 44 52 11 
A4 40 52 58 12 
C4 44 58 66 14 
A5 50 66 72 16 
C5 55 72 80 17 
 Total waiting time 
 0 + 5 + 4 + 8 + 8 + 11 + 12 + 14 + 16 + 17 = 95 
 Average waiting time 
95/10 = 9.5 seconds


</details>

---


### Q3. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Processes 𝑃1, 𝑃2, 𝑃3, 𝑃4 arrive in that order at 
times 0, 1, 2, and 8 milliseconds respectively, and 
have execution times of 10, 13, 6, and 9 
milliseconds respectively. Shortest Remaining 
Time First (SRTF) algorithm is used as the CPU 
scheduling policy. Ignore context switching times. 
Which ONE of the following correctly gives the 
average turnaround time of the four processes in 
milliseconds?


- **(A)** 22

- **(B)** 15

- **(C)** 37

- **(D)** 19



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Process  Arrival Time (AT)  Burst Time (BT) Completion Time (CT)   Turnaround Time (TAT = CT - AT) 
P1   0 ms    10 ms          16 ms 16 - 0 = 16 ms 
P2   1 ms    13 ms          38 ms 38 - 1 = 37 ms 
P3   2 ms     6 ms           8 ms   8 - 2 = 6 ms 
P4   8 ms     9 ms          25 ms  25 - 8 = 17 ms 
 Calculate Average Turnaround Time 
 TAT=CompletionTime(CT)−ArrivalTime(AT) 
 Average TAT=∑TAT / Total Processes= 
(16+37+6+17) / 4=76 / 4=19 ms 
 Final Answer: 
 The average turnaround time is 19 milliseconds. 
<!-- PAGE 306 -->
OPERATING SYSTEMS


</details>

---


### Q4. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A computer has two processors, 𝑀1 and 𝑀2. Four 
processes 𝑃1, 𝑃2, 𝑃3, 𝑃4 with CPU bursts of 20, 16, 25, 
and 10 milliseconds, respectively, arrive at the same 
time and these are the only processes in the system. 
The scheduler uses non -preemptive priority 
scheduling, with priorities decided as follows:  
• 𝑀1 uses priority of execution for the processes 
as, 𝑃1 > 𝑃3 > 𝑃2 > 𝑃4, i.e., 𝑃1 and 𝑃4 have 
highest and lowest priorities, respectively.  
• 𝑀2 uses priority of execution for the processes 
as, 𝑃2 > 𝑃3 > 𝑃4 > 𝑃1, i.e., 𝑃2 and 𝑃1 have 
highest and lowest priorities, respectively.  
 A process 𝑃𝑖 is scheduled to a processor 𝑀𝑘, if the 
processor is free and no other process 𝑃𝑗 is waiting 
with higher priority. At any given point of time, a 
process can be allocated to any one of the free 
processors without violating the execution priority 
rules. Ignore the context switch time. What will be the 
average waiting time of the processes in 
milliseconds?


- **(A)** 9.00

- **(B)** 8.75

- **(C)** 6.50

- **(D)** 7.50



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

To calculate the average waiting time, we need to 
simulate the scheduling process step by step based 
on the given priorities and CPU bursts for the 
processes on processors M1 and M2. 
 Given Data: 
● Processor M1 Priority Order: P1 > P3 > P2 > P4 
● Processor M2 Priority Order: P2 > P3 > P4 > P1 
● CPU Bursts: 
o P1: 20 ms 
o P2: 16 ms 
o P3: 25 ms 
o P4: 10 ms 
 Process Scheduling on M1 and M2: 
1. Initial state: Both processors (M1 and M2) are 
free. 
2. Time 0: The scheduler starts with the highest 
priority processes based on each processor's 
priority list. 
● M1: The highest priority process is  P1 (with a 
burst of 20 ms), so P1 is allocated to M1. 
● M2: The highest priority process is  P2 (with a 
burst of 16 ms), so P2 is allocated to M2. 
1. After P1 finishes (at time 20 ms): 
o M1: The next highest priority process 
is P3 (with a burst of 25 ms), so  P3 is allocated 
to M1. 
o M2: P2 finishes at 16 ms, and the next 
highest priority process is  P3, but 
since M1 has already taken P3, M2 moves to 
the next highest priority, which is P4 (with a 
burst of 10 ms). 
2. After P2 finishes (at time 16 ms): 
o M1: P3 continues execution (since P3 is already 
allocated to M1). 
o M2: P4 finishes at time 26 ms, and now the 
remaining process is P3. 
 Calculate Waiting Times: 
● Waiting time is calculated as:  Waiting Time = 
Start Time - Arrival Time. 
 For Process P1: 
● P1 starts at time 0 and runs for 20 ms, so its 
waiting time is 0 ms. 
 For Process P2: 
● P2 starts at time 0 on M2 and runs for 16 ms. Its 
waiting time is 0 ms as it started at time 0. 
 For Process P3: 
● P3 starts at time 20 on M1 and runs for 25 ms. Its 
waiting time is  20 ms  (since it waited for  P1 to 
finish on M1). 
 For Process P4: 
● P4 starts at time 16 on M2 and runs for 10 ms. Its 
waiting ti me is  16 ms  (since it waited for  P2 to 
finish). 
 Average Waiting Time: 
 Now, we calculate the average waiting time: 
 P1: Waiting time = 0 ms 
 P2: Waiting time = 0 ms 
 P3: Waiting time = 20 ms 
 P4: Waiting time = 16 ms 
 Average waiting time = (0 + 0 + 20 + 16) / 4 = 36 / 4 
= 9.00 ms 
 Final Answer: 
 The average waiting time of the processes is 9.00 ms.


</details>

---


### Q5. [GATE CSE - 2026 MCQ SET - 2(1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a process P running on a CPU. Which one 
or more of the following events will always trigger a 
context switch by the OS that results in process P 
moving to a non-running state (e.g., ready, blocked)?


- **(A)** P makes a blocking system call to read a 
block of data from the disk

- **(B)** tries to access a page that is in the swap space, 
triggering a page fault

- **(C)** An interrupt is raised by the disk to deliver 
data requested by some other process

- **(D)** A timer interrupt is raised by the hardware



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,B


**Step-by-Step Explanation:**

Option A: Blocking system call 
 When P makes a blocking I/O call, it cannot 
continue execution until data arrives. 
 So OS blocks P → context switch happens. 
 Always causes context switch 
 Option B: Page fault (page in swap) 
 If the required page is in disk (swap), P must wait 
for disk I/O. 
 So OS blocks P → context switch happens. 
 Always causes context switch 
 Option C: Disk interrupt for another process 
 Interrupt occurs, CPU goes to ISR, but after 
handling, P can resume execution. 
 No guarantee that P will be removed from the CPU. 
 Not always 
 Option D: Timer interrupt 
 Timer interrupt invokes scheduler, but: 
 If no higher priority process → P continues 
 If same process selected → no switch 
  Not always 
<!-- PAGE 307 -->
OPERATING SYSTEMS


</details>

---


### Q6. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following code snippet using the 
fork() and wait() system calls. Assume that the code 
compiles and runs correctly, and that the system 
calls run successfully without any errors. 
 int x = 3; 

```c
 while (x > 0) { 
    fork(); 
      printf("hello"); 
     wait(NULL); 
      x--; 
 } 
 The total number of times the printf statement is  
 executed is ________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 14


**Step-by-Step Explanation:**

Each process has its own copy of x. Both parent 
and    child continues the loop. wait only makes a 
process  wait for its own child, it does not stop 
creation of new  processes. 
 Iteration-wise processes: 
 Start: 1 process 
After 1st iteration: 2 processes → prints = 2 
 After 2nd iteration: 4 processes → prints = 4 
 After 3rd iteration: 8 processes → prints = 8 
 Total prints = 2 + 4 + 8 = 14


</details>

---


### Q7. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about threads 
is/are TRUE?


- **(A)** Threads can only be implemented in kernel 
space

- **(B)** Each thread has its own file descriptor table 
for open files

- **(C)** All the threads belonging to a process share 
a  common stack

- **(D)** Threads belonging to a process are by 
default not protected from each other



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Threads can be implemented in user space as well, so  
(a) is false. 
File descriptor table is shared among 
threads of a process, so  
(b) is false. 
Each thread has its own stack, so (c) is 
false. 
Threads share address space and are not protected 
from each other, so (d) is true. 
  Answer: (d)


</details>

---


### Q8. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following process state transition(s) 
is/are NOT possible?


- **(A)** Ready to Waiting

- **(B)** Running to Ready

- **(C)** Running to Terminated

- **(D)** Waiting to Running



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, D


**Step-by-Step Explanation:**

The Ready state means a process is prepared to run 
but is waiting for the CPU to become available 
while the Waiting state (or Blocked) means the 
process is waiting for something to happen(like an 
I/O operation to finish). A process can't go directly 
from Ready to Waiting, it usually moves from 
Running to Waiting as we can see from the given 
process lifecycle. 
 Five-state Process Lifecycle


</details>

---


### Q9. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a single processor system with four 
processes A, B, C, and D, represented as given below, 
where for each process the first value is its arrival 
time, and the second value is its CPU burst time.  
A (0, 10), B (2, 6), C (4, 3), and D (6, 7).  
Which one of the following options gives the average 
waiting times when preemptive Shortest Remaining 
Time First (SRTF) and Non-Preemptive Shortest Job 
First (NP -SJF) CPU scheduling algorithms are 
applied to the processes?


- **(A)** SRTF = 6, NP-SJF = 7

- **(B)** SRTF = 6, NP-SJF = 7.5

- **(C)** SRTF = 7, NP-SJF = 7.5

- **(D)** SRTF = 7, NP-SJF = 8.5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

SRTF CPU Scheduling: 
Proces
s 
Arrival 
Time 
Burst 
Time 
Completi 
on Time 
Turn Aroun Time Waiting 
Time 
A 0 10 26 26 16 
B 2 6 11 9 3 
C 4 3 7 3 0 
D 6 7 18 12 5 
Total Average Waiting Time [ SRTF ] = (16 + 3 + 0 + 5)/4 
= 24/4 = 6. 
 Non-Preemptive CPU Scheduling: 
Total Average Waiting Time [ SJF ] = (0 + 11 + 6 + 13)/4 = 
7.5


</details>

---


### Q10. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following two threads T1 and T2 that 
update two shared variables a and b. Assume that 
initially a = b = 1. Though context switching between 
threads can happen at any time, each statement of T1 
or T2 is executed atomically without interruption. 
 T1                            T2 
          a = a + 1;                 b = 2 * b;                 
          b = b + 1;                 a = 2 * a; 
 Which one of the following options lists all the 
possible combinations of values of a and b after both 
T1 and T2 finish execution?


- **(A)** (a = 4, b = 4); (a = 3, b = 3); (a = 4, b = 3)

- **(B)** (a = 3, b = 4); (a = 4, b = 3); (a = 3, b = 3)

- **(C)** (a = 4, b = 4); (a = 4, b = 3); (a = 3, b = 4)

- **(D)** (a = 2, b = 2); (a = 2, b = 3); (a = 3, b = 4)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

The threads T1 and T2 update the shared variables a 
and b atomically, and their order of execution 
determines the final values.  
The notation (x, y) represents the values of the 
variables a = x and b = y.  
When T₁ is executed serially followed by T2, the 
result is (4, 4).  
When T2 is executed serially followed by T₁, the 
<!-- PAGE 308 -->
OPERATING SYSTEMS 
result is (3, 3).  
Executing in the order T21 T11 T12 T22 produces 
the result (4,3).  
The results (3, 4), (2, 3), and (2, 2) cannot be 
achieved.


</details>

---


### Q11. [GATE CSE - 2024 NAT SET - 1(2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one or more of the following options 
guarantees that a computer system will transition 
from user mode to kernel mode?


- **(A)** function call

- **(B)** malloc call

- **(C)** page fault

- **(D)** system call



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C, D


**Step-by-Step Explanation:**

Function call: Function calls can be user -defined, 
so they do not necessarily guarantee a switch from 
user mode to kernel mode. 
 Malloc () call: This c an be executed in both user 
and kernel modes, so it does not guarantee a switch 
between modes. 
 Page fault: When a page fault occurs, the required 
page must be loaded  from secondary to main 
memory, which happens in privileged mode, 
ensuring a switch from user mode to kernel mode. 
 System call: System calls are executed exclusively 
in kernel m ode, guaranteeing a switch from user 
mode to kernel mode.


</details>

---


### Q12. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one or more of the following need to be 
saved on a context switch from  one thread (T1) of 
a process to another thread (T2) of the same process 
?


- **(A)** Page Table base register

- **(B)** Stack pointer

- **(C)** Program Counter

- **(D)** General purpose register



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B, C, D


**Step-by-Step Explanation:**

Page table base register:  This register stores the 
page table's base address for the currently executing 
thread. Because all threads in a process share the 
same page table, this register does not need to be 
saved. 
 Stack pointer: This register points to the top of the 
stack for the thread that is currently running. 
Because each thread has its own stack, the stack 
pointer must be saved and restored when the 
context changes to ensure that the new thread uses 
the correct stack. 
 PC: The address of the next instruction to be 
executed by the currently executing thread is stored 
in the program counter register. To restart the new 
thread, the saved program counter must be loaded 
into the program counter register. 
 General purpose registers : These registers are 
used to store temporary data and intermediate 
results during the execution of a thread.


</details>

---


### Q13. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one or more of the following CPU 
scheduling algorithms can potentially cause 
starvation?


- **(A)** First-in First-Out

- **(B)** Round Robin

- **(C)** Priority Scheduling

- **(D)** Shortest Job First.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C, D


**Step-by-Step Explanation:**

Shortest Job First and Priority Scheduling are 
vulnerable to starvation. 
1. Shortest Job First (SJF): New shorter jobs may 
continue to emerge. 
2. Priority Scheduling : High-level positions may 
continue to emerge. 
3. Round Robin  will never result in starvation 
because each job will be assigned a time slot after 
a FIXED time quantum.  
Because the time quantum is finite, every job will 
eventually get a chance to run after a finite amount 
of time. It should be n oted that the time quantum 
can be set to a large value, such as 10 minutes, 10 
years, or even 100 years, but as long as it is finite, 
every job will get a chance to execute. 
4. First-in First -out: If a task never yields (e.g., 
goes into infinite loop), then other tasks don't get 
to run (ex. While(1);). But there are other standard 
resources too which say NO STARVATION.


</details>

---


### Q14. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider four processes P, Q, R, and S scheduled 
on a CPU as per round robin algorithm with a time 
quantum of 4 units. The  processes arrive in the 
order P, Q, R, S, all at time t = 0. There is exactly 
one context switch from S to Q, exactly one context 
switch from R to Q, and exactly two context 
switches from Q to R. There is no context switch 
from S to P. Switching to a ready process after the 
termination of another process is also considered a 
context switch. Which one of the following is NOT 
possible as CPU  burst time (in time units) of these 
processes?


- **(A)** P = 4, Q = 10, R = 6, S = 2

- **(B)** P = 2, Q = 9, R = 5, S = 1

- **(C)** P = 4, Q = 12, R = 5, S = 4

- **(D)** P = 3, Q = 7, R = 7, S = 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

Key idea: count transitions 
  Given: S→Q = 1, R→Q = 1, Q→R = 2, S→P = 0 
 Check option (a): feasible sequence can be formed 
satisfying all counts 
 Check option (b): feasible 
 Check option (c): feasible 
 Check option (d): leads to extra R→Q or Q→R 
transitions due to equal lengths of Q  and R and 
quantum slicing, violating given counts


</details>

---


### Q15. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following standard C library functions 
will always invoke a system call when executed 
from  a single-threaded process in a UNIX/Linux 
operating system?


- **(A)** exit

- **(B)** malloc

- **(C)** sleep

- **(D)** strlen



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A,C


**Step-by-Step Explanation:**

exit eventually invokes a system call to terminate   
          the process 
          malloc may or may not invoke system call 
          sleep always invokes a system call 
          strlen does not


</details>

---


### Q16. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


There are 6 jobs with distinct difficulty levels, and 3 
computers with distinct processing speeds. Each job 
is assigned to a computer such that: 
 - The fastest computer gets the toughest job and the 
slowest computer gets the easiest job. 
 - Every computer gets at least one job 
 The number of ways in which this can be done is 
_________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  65


**Step-by-Step Explanation:**

These two are assigned two jobs. Now out of the 
remaining 4 jobs we need to ensure  C2 gets at 
least 1. Without this constraint we can assign  4 jobs 
to 3 computers in 34=81 ways. Out of these  81 ways 
24=16 will be having no jobs for  C2. 
So, number of possible ways so that  C2 gets at least 
one job =81−16=65.


</details>

---


### Q17. [GATE CSE – 2023 MSQ SET-1 (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following statement(s) is/are correct in 
the context of CPU scheduling?


- **(A)** Turnaround time includes waiting time.

- **(B)** Round-robin policy can be used even when the 
CPU time required by each of the processes is 
not known apriori.

- **(C)** Implementing pre -emptive scheduling needs 
hardware support.

- **(D)** The goal is to only maximize CPU utilization 
and minimize throughput.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A, B, C


**Step-by-Step Explanation:**

A, B, C 
 A is the correct option.  
 Turnaround time = burst time + waiting 
 Option B is also correct. 
<!-- PAGE 309 -->
OPERATING SYSTEMS 
 Option C is also correct as hardware support is 
needed by pre-emptive scheduling. 
 Option D is incorrect as we have to maximize the 
throughput also.


</details>

---


### Q18. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following multi -threaded code 
segment (in a mix of C and pseudocode), invoked 
by two processes P1 and P2, and each of the 
processes spawns two threads T1 and T2: 
 int x = 0;   // global 
 Lock L1;    // global 
 main() {  
   create a thread to execute foo();  // Thread T1 
  create a thread to execute foo();  // Thread T2 
  wait for the two threads to finish execution; 
  print (x);} 
 foo () { 
   int y = 0; 
    Acquire L1; 
   x = x + 1; 
    y = y + 1; 
    Release L1; 
    print (y);} 
 Which of the following statement(s) is / are correct?


- **(A)** At least one of P1 and P2 will print the value 
of x as 4.

- **(B)** At least one of the threads will print the value 
of y as 2.

- **(C)** Both T1 and T2, in both the processes, will 
print the value of y as 1.

- **(D)** Both P1 and P2 will print the value of x as 2.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C, D


**Step-by-Step Explanation:**

option C: True  
 Threads do not share the stack. y is an AUTO 
variable, stored in a stack. So, each process 
generates two threads, each locks and unlocks L1 
as they increment x and y. By each thread of a 
process Y is incremented from 0 to 1.  
 If P1 is completely executed and then P2 
completely executes without any preemption, then,  
 x is twice incremented (onc e by each of the 
threads). Threads share data segments. x is the 
global variable stored in the data segment.  
 option D: Correct   
 If in any order P1 and P2 executes, x will be 2 
printed by each of the processes.


</details>

---


### Q19. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Three processes arrive at time zero with CPU bursts 
of 16, 20 and 10 milliseconds. If the scheduler has 
prior knowledge about the length of the CPU 
bursts, the minimum achievable average waiting 
time for these processes in a non -preemptive 
scheduler (rounded to nearest integer) is 
_________milliseconds.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  12


**Step-by-Step Explanation:**

AT BT WT 
P0 0 16 10 
P1 0 20 26 
P2 0 10 0 
  Gantt char : 
 Avg WT = {WT(P0) + WT(P1) + WT(P2)}/3 
 = {10 + 26 + 0}/3 = 36/3 = 12 ms


</details>

---


### Q20. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following set of processes assumed to 
have arrived at time 0. Consider the CPU scheduling 
algorithms Shortest Job First (SJF) and Round Robin 
(RR). For RR, assume that the processes are 
scheduled in the order P1, P2, P3, P4. 
Processes 𝑃1 𝑃2 𝑃3 𝑃4 
Burst time (in ms) 8 7 2 4 
 If the time quantum for RR is 4 ms, then the  
 absolute value of the difference between the  
 average turnaround times (in ms) of SJF and RR 
 (round off to 2 decimal places) is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  5.25


**Step-by-Step Explanation:**

SJF order: P3, P4, P2, P1 
 Completion times: 2, 6, 13, 21 
 TAT: 2, 6, 13, 21 
 Average = 10.5 
 RR execution: 
 P1(4) P2(4) P3(2) P4(4) P1(4) P2(3) 
 Completion times: 
 P3 = 10, P4 = 14, P1 = 18, P2 = 21 
 TAT: 18, 21, 10, 14 
 Average = 15.75 
 Difference = 5.25


</details>

---


### Q21. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements about process state 
transitions for a system using preemptive scheduling. 
 I. A running process can move to ready state.  
  II. A ready process can move to running state.  
  III. A blocked process can move to running state.  
  IV. A blocked process can move to ready state. 
 Which of the above statements are TRUE?


- **(A)** I, II, and III only

- **(B)** II and III only

- **(C)** I, II, and IV only

- **(D)** I, II, III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

I: possible (preemption) 
 II: possible (scheduler) 
III: not direct (must go blocked → ready →  
 running) 
 IV: possible (I/O completion)


</details>

---


### Q22. [GATE CSE - 2021 MSQ SET – 2 (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following four processes with arrival 
times (in milliseconds) and their length of CPU bursts 
(in milliseconds) as shown below: 
Process P1 P2 P3 P4 
Arrival time 0 1 3 4 
CPU burst time 3 1 3 Z


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

SRTF schedule: 
       The Gant Chart till t=4 will be 
P 1 P2 P1  
Now, there are two possible cases: 
Case 1 (z<4): 
Then average waiting time = (1 + 0 + (1 + 𝑥) +
0)/4 = 1 
(2 + 𝑥)/4 = 1 ⇒ 𝑥 = 2. 
Case 2(𝑧 > 4) : 
Then average waiting time = (1 + 0 + 1 + 3)/4 = 1 
5/4 ≠ 1 ⇒ This case is invalid. 
Correct Answer: 2


</details>

---


### Q23. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following C program is executed on a 
Unix/Linux system: 

```c
 #include <unistd.h> 
 int main() 
 { 
     int i; 
    for(i = 0; i < 10; i++) 
        if(i % 2 == 0) 
             fork(); 
     return 0; 
 } 
The total number of child processes created is 
__________.
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -   31


**Step-by-Step Explanation:**

Fork happens when i = 0, 2, 4, 6, 8 → total 5 times 
Each time processes double 
Total processes = 25 = 32 
Total child processes = 32 − 1 = 31


</details>

---


### Q24. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following CPU processes with arrival 
times (in milliseconds) and length of CPU bursts 
(in milliseconds) as given below: 
 Process: P1, P2, P3, P4 
  Arrival Time: 0, 3, 5, 6 
  Burst Time: 7, 3, 5, 2 
If the pre -emptive shortest remaining time first 
scheduling algorithm is used to schedule the   
processes, then the average waiting time across 
 all processes is ______ milliseconds.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -   3


**Step-by-Step Explanation:**

0         1      2            4 
<!-- PAGE 310 -->
OPERATING SYSTEMS 
Process Arrival 
Time 
(AT) 
Burst 
Time 
(BT) 
Completion 
Time (CT) 
Turn 
Around 
Time 
(TAT) 
IAT =
CT − AT 
Waiting 
Time 
(WT) 
WT =
TAT − BT 
P1 0 7 12 12 5 
P2 3 3 6 3 0 
P3 5 5 17 12 7 
P4 6 2 8 2 0 
Calculation: 
Average waiting time =
(5+0+7+0)
4 = 3 milliseconds


</details>

---


### Q25. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Threads of a process share


- **(A)** global variables but not heap

- **(B)** heap but not global variables

- **(C)** neither global variables nor heap

- **(D)** both heap and global variables



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -   D


**Step-by-Step Explanation:**

Threads share same address space → both heap  
and global variables are shared


</details>

---


### Q26. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are shared by all the threads 
in a process? 
 I. Program counter 
  II. Stack 
 III. Address space 
  IV. Registers


- **(A)** (I) and (II) only

- **(B)** (III) only

- **(C)** (IV) only

- **(D)** (III) and (IV) only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

Each thread has its own program counter, stack,  
and registers. Address space is shared.


</details>

---


### Q27. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the set of processes with arrival time (in 
milliseconds), CPU burst time (in milliseconds), and 
priority (0 is the highest priority) shown below. None 
of the processes have I/O burst time. 
Proces Arrival 
Time 
Burst 
Time 
Priority 
P1 0 11 2 
P2 5 28 0 
P3 12 2 3 
P4 2 10 1 
P5 9 16 4 
 The average waiting time (in milliseconds) of all the 
processes using the pre -emptive priority scheduling 
algorithm is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -


**Step-by-Step Explanation:**

Gantt chart for the processes is as follows: 
 Average waiting time = ∑ waiting time of all the processes  number of processes 
     = 38 + 0 + 37 + 28 + 425 = 29 milliseconds


</details>

---


### Q28. [GATE CSE - 2019 NAT (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider an arbitrary set of CPU -bound processes 
with unequal CPU burst lengths submitted at the same 
time to a computer system. Which one of the 
following process scheduling algorithms would 
minimize the average waiting time in the ready 
queue?


- **(A)** Shortest remaining time ﬁrst

- **(B)** Round-robin with time quantum less than the 
shortest CPU burst

- **(C)** Uniform random

- **(D)** Highest priority ﬁrst with priority proportional 
to CPU burst length



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

To minimize the alternate waiting time, we need to 
select the shortest remaining time process first, the 
reason is because all the processes are arriving at the 
same time and they have unequal CPU burst times. 
 So, the answer is the SRTF algorithm as all other 
options will not minimize the waiting time.


</details>

---


### Q29. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following processes, with the arrival 
time and the length of the CPU burst given in 
milliseconds. The scheduling algorithm used is the 
pre-emptive shortest remaining-time ﬁrst. 
Process Arrival Time Burst Time 
P1 0 10 
P2 3 6 
P3 7 1 
P4 8 3 
 The average turn-around time of these processes is 
_________ milliseconds


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  8.25


**Step-by-Step Explanation:**

Here the scheduling algorithm used is shortest 
remaining-time first (pre-emptive version of SJF). 
 Gantt chart:
 In this algorithm, the processes will schedule on the 
CPU those who have the least remaining burst time. 
 Turnaround Time (TAT) = Completion Time (CT) - 
Arrival Time (AT) 
 TAT for P1 = 20 - 0 = 20, 
 TAT for P2 = 10 - 3 = 7, 
 TAT for P3 = 8 - 7 = 1, 
 TAT for P4 = 13 - 8 = 5. 
 Total TAT = 20 + 7 + 1 + 5 = 33  
 Avg. TAT = 33/ 4 = 8.25


</details>

---


### Q30. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


The maximum number of processes that can be in 
Ready state for a computer system with n CPUs is


- **(A)** n

- **(B)** n²

- **(C)** 2N

- **(D)** Independent of n



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

The number of processes which are in the running 
state will be at most n for n processors. 
 In the ready state, the maximum number of processes 
will be completely independent of the number of 
processors. As a single processor may have a large 
number of processes waiting in the ready queue.


</details>

---


### Q31. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following is FALSE about SJF 
(Shortest Job First Scheduling)? 
S1: It causes minimum average waiting time 
 S2: It can cause starvation


- **(A)** Only S1

- **(B)** Only S2

- **(C)** Both S1 and S2

- **(D)** Neither S1 or S2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

1. Shortest job first is optimal because of average 
waiting time for a given set of processes, but 
problems with SJF is how to know/predict the time of 
the next job. 
 2. For Shortest job first and SRJF algorithms, they 
may cause starvation. When a process with large burst 
time is there in the ready queue and processes with 
small burst time keep coming.


</details>

---


### Q32. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


For the processes listed in the following table, which 
of the following scheduling schemes will give the 
lowest average turnaround time? 
Proces Arrival Time  Processing 
Time  
A 0 3 
B 1 6 
C 4 4 
D 6 2


- **(A)** First Come First Serve

- **(B)** Non-pre-emptive Shortest Job First

- **(C)** Shortest Remaining Time First

- **(D)** Round Robin with Quantum value two



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

Processes can be tabulated as: 
 Process Arrival Time Processing Time  
A 0 3 
B 1 6 
C 4 4 
<!-- PAGE 311 -->
OPERATING SYSTEMS 
D 6 2 
  FCFS 
 TAT for A = completion time(A) - AT(A) = 3 - 0 = 
 TAT of B = 9 - 1 = 8 
 TAT of C = 13 - 4 = 9 
 TAT of D = 15 - 6 = 9 
 ∴ Avg. TAT = 29/4 
 SJF: 
 TAT of A3-03 
 TAT of B = 9 - 1 = 8 TAT of C = 15 - 4 = 11 TAT 
of D = 11 - 6 = 5:  Avg. TAT = 27/4 
 SRTF: 
 TAT of A3-03 
 TAT of B = 15 - 1 = 14 
 TAT of C = 8 - 4 = 4 TAT of D = 10 - 6 = 4 
 : Avg. TAT = 25/4 
 RR: 
 TAT of A = 5-0=5 TAT of B = 15 - 1 = 14 TAT of 
C = 13 - 4 = 9 TAT of D = 11 - 6 = 5 .: Avg. TAT 
= 33/4 .. SRTF has the lowest Avg. TAT.


</details>

---


### Q33. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider a uniprocessor system executing three tasks 
T1, T2 and T3, each of which is composed of an 
infinite sequence of jobs (or instances) which arrive 
periodically at intervals of 3, 7 and 20 milliseconds, 
respectively. The priority of each task is the  inverse 
of its period and the available tasks are scheduled in 
order of priority, with the highest priority task 
scheduled first. Each instance of T1, T2 and T3 
requires an execution time of 1, 2 and 4 milliseconds, 
respectively. Given that all tasks initially arrive at the 
beginning of the 1st millisecond and task preemptions 
are allowed, the first instance of T3 completes its 
execution at the end of ______________ 
milliseconds.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  12


**Step-by-Step Explanation:**

T1, T 2 and T 3 have infinite instances, meaning 
infinite burst times. Here, the problem is to run "T1 
for 1 ms", "T 2 for 2 ms", and "T 3 for 4 ms". i.e., 
every task is run in parts. Now for timing purpose 
we consider t for the end of cycle number t. 
 • T₁: 0,3, 6, 9, 12,...∞ (T₁ repeats every 3 ms) 
 • T2: 0, 7, 14, 21,... ∞ (T2 repeats every 7 ms) 
 • T3: 0,20, 40, 60,... ∞ (T3 repeats every 20 ms) 
 1. Priority of T1 = 
 2. Priority of T2 = 
  3. Priority of T3 = 
 At t = 0 No process is available 
 At t 2, T2 runs because it has higher priority than T 3 
and no instance of T₁ present 
 At t = 4, We have T₁ arrive again and T 3 waiting but 
T₁ runs because it has higher priority 
 At t = 5, T 3 runs because no instance of T₁ or T 2 is 
present 
 At t = 11 T 3 runs because no instance of T₁ or T 2 is 
present 
 At t = 12, T 3 continue run because no instance of T₁ 
or T₂ is present and first instance of T3 completes


</details>

---


### Q34. [GATE CSE - 2016 NAT SET- 2 (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is FALSE?


- **(A)** User level threads are not scheduled by the 
kernel.

- **(B)** When a user level thread is blocked, all other 
threads of its process are blocked.

- **(C)** Context switching between user level threads is 
faster than context switching between kernel 
level threads

- **(D)** Kernel level threads cannot share the code 
segment.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

Code segments can be shared by the threads. They 
have only separate stacks and registers. 
 User level threads are scheduled by the thread library 
and the kernel knows nothing about it. So,  A is 
TRUE.  
 When a user level thread is blocked, all other threads 
of its process are blocked. So,  B is TRUE. (With a 
multi-threaded kernel, user level threads can make 
non-blocking system calls without getting blocked. 
But in this option, it is explicitly said 'a thread is 
blocked'.) 
 Context switching between user level threads is faster 
as they actually have no context -switch- nothing is 
saved and restored while for kernel level thread, 
Registers, PC and SP must be saved and restored. 
So, C is also TRUE.  
 Kernel level thr eads cannot share code segments, 
false. Kernel level threads within the same process 
share data section, code section and other  operating 
system resources such as open files and signals.


</details>

---


### Q35. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Three processes A, B and C each execute a loop of 
100 iterations. In each iteration of the loop, a 
process performs a single computation that requires 
tc CPU milliseconds and then initiates a single I/O 
operation that lasts for t io milliseconds. It is 
assumed that the computer where the processes 
execute has sufficient number of I/O devices and 
the OS of the computer assigns different I/O 
devices to each process. Also, the scheduling 
overhead of the OS is negligible. The processes 
have the following characteristics: 
Process id TC Tio 
A 100 ms 500 ms 
B 350 ms 500 ms 
C 200 ms 500 ms 
 The processes A, B, and C are started at times 0, 5 
and 10 milliseconds respectively, in a pure time 
sharing system (round robin scheduling) that uses a 
time slice of 50 milliseconds. The time in 
milliseconds at which process C would complete its 
first I/O operation is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  1000


**Step-by-Step Explanation:**

Processes A, B and C which continue in round rob in 
fashion and time quantum is 50 ms. 
 Processes execute at 0, 5 and 10 milliseconds. 
 Order of the processes are:  
<!-- PAGE 312 -->
OPERATING SYSTEMS 
 A, B, C, A  
 50 + 50 + 50 + 50 (200 ms passed) 
 Now, A has completed computations of 100 ms and 
goes for I/O now. 
 B, C, B, C, B, C 
 50 + 50 + 50 + 50 + 50 + 50 (300 ms passed) 
 C goes for I/O at 500ms and it needs 500ms to 
finish the I/O. 
 So, C would complete its first I/O at 1000 
Gantt chart is shown below:


</details>

---


### Q36. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


An operating system uses the shortest  remaining 
time first  scheduling algorithm for pre -emptive 
scheduling of processes. Consider the following set 
of processes with their arrival times and CPU burst 
times (in milliseconds): 
Process Arrival Time Burst Time 
P1 0 12 
P2 2 4 
P3 3 6 
P4 8 5 
 The average waiting time (in milliseconds) of the 
processes is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  5.5


**Step-by-Step Explanation:**

Gantt Chart  
 Gantt Chart 
 Average waiting time = (15 + 0 + 3 + 4)/ 4 = 5.5 ms


</details>

---


### Q37. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following set of processes that need to 
be scheduled on a single CPU. All the times are given 
in milliseconds. 
Process 
Name 
Arrival Time Execution  
Time 
A 0 6 
B 3 2 
C 5 4 
D 7 6 
E 10 3 
 Using the shortest remaining time first scheduling 
algorithm, the average process turnaround time (in 
msec) is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  7.2


**Step-by-Step Explanation:**

Using SRTF 
 TAT(A) = 8-0 = 8, 
 TAT(B)= 5-3=2,  
 TAT(C)= 12-5=7,  
 TAT(D)= 21-7= 14, 
 TAT(E)=15-10=5 
 Average turnaround time can be calculated as =  
 8+2+7+14+5/ 5 = 7.2ms


</details>

---


### Q38. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A scheduling algorithm assigns priority proportional 
to the waiting time of a process. Every process starts 
with priority zero (the lowest priority). The scheduler 
re-evaluates the process priorities every T time unit 
and decides the next process to schedule. Which one 
of the following is TRUE if the processes have no I/O 
operations and all arrive at time zero?


- **(A)** This algorithm is equivalent to the first-come- 
  first-serve algorithm.

- **(B)** This scheduling algorithm behaves like  
  Round-Robin scheduling.

- **(C)** This algorithm is equivalent to the shortest-job- 
  first algorithm.

- **(D)** This algorithm is equivalent to the shortest -
remaining-time-first algorithm.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

Every process starts with priority zero. 
● Priority is proportional to waiting time. 
● Since all processes arrive at time zero and have no 
I/O, waiting time increases equally for all. 
● The scheduler re-evaluates every T time units and 
picks the process with the highest priority (longest 
waiting time). 
● This results in cyclic allocation of CPU with a time 
quantum of T, which is exactly how Round-Robin 
scheduling works. 
 Thus, the algorithm is equivalent to Round -Robin 
scheduling in this scenario.


</details>

---


### Q39. [GATE CSE – 2014 NAT SET - 2(2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A process executes the code 
 fork (); 
 fork (); 
 fork ();  
 The total number of child processes created is


- **(A)** 3

- **(B)** 4

- **(C)** 7

- **(D)** 8



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

With N fork statements, there are always 2 n-1 child 
processes. 
 Here in this operation, the process creates a copy of 
itself. 
 1,3,7,15, 31.... ⇒2n-1 
 So, 23-1 = 7.


</details>

---


### Q40. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the 3 processes, P1, P2 and P3 shown in 
the table. 
Process  Arrival Time  Time Units 
Required  
Time  
P1 0 5 
P2 1 7 
P3 3 4 
 The completion order of the 3 processes under the 
policies FCFS and RR2 (round robin scheduling 
with CPU quantum of 2 time units) are


- **(A)** FCFS: P1, P2, P3 RR2: P1, P2, P3

- **(B)** FCFS: P1, P3, P2 RR2: P1, P3, P2

- **(C)** FCFS: P1, P2, P3 RR2: P1, P3, P2

- **(D)** FCFS: P1, P3, P2 RR2: P1, P2, P3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

FCFS is - P1, P2, P3 
 RR Queue: In RR queue, 2 units is the time slot. 
 Ready queue concept is used. At t=2, P2 starts and P1 
sends to the ready queue and at t=3 P3 arrives.  After 
P1, Job P3 is queued in the ready queue. So, at time 
t=4, again P1 is executed then P3 is executed for the 
first time at t=6. 
 RR2: P1, P3, P2  
 So, option C is the correct answer.


</details>

---


### Q41. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Let the time taken to switch between user and 
kernel modes of execution be t 1 while the time 
taken to switch between two processes be t2. Which 
of the following is TRUE?


- **(A)** (t1) > (t2)

- **(B)** (t1) = (t2)

- **(C)** (t1) < (t2)

- **(D)** Nothing can be  said about the relation 
between t1 and t2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

Context switch between the processes involves mode 
switch also. Context switches or Process switches can 
only occur in kernel mode. So, for process switches 
<!-- PAGE 313 -->
OPERATING SYSTEMS 
firstly we have to move from user to kernel mode.  
Secondly, we have to save the PCB of the process 
from which we are taking off the CPU and finally 
we have to load the PCB of the required process. 
Switching from kernel to user mode is done. But 
switching from user to kernel mode is a very fast 
operation (OS has to just change a single bit at 
hardware level). 
 When we switch between kernel and user mode of 
execution, OS has to just  change a single bit  at 
hardware level which is very fast operation. 
 Thus, t1< t2


</details>

---


### Q42. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A thread is usually defined as a "light weight 
process" because an operating system (OS) 
maintains smaller data structures for a thread than 
for a process. In relation to this, which of the 
following is TRUE?


- **(A)** On per-thread basis, the OS maintains only  
  CPU register state.

- **(B)** The OS does not maintain a separate stack 
for each thread.

- **(C)** On a per -thread basis, the OS does not 
maintain virtual memory state.

- **(D)** On a per thread basis, the OS maintains only 
scheduling and accounting information.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

Threads share the address space of processes. The 
virtual memory is concerned with processes and not with 
threads. 
 Option (A): As we can see in the above diagram, 
not only the CPU register but also stack and code 
files, data files are also maintained. So, option (A) 
is incorrect as the statement says OS maintains only 
CPU register state. 
 Option (B): OS does not maintain a separate stack 
for each thread. But as we can see in the above 
diagram, for each thread, a separate stack is 
maintained. So, this option is also incorrect. 
 Option (C): The virtual memory state is not 
maintained by the OS and this statement is correct 
as the OS does not maintain any virtual memory 
state for individual threads. 
 Option (D): According to the option (D), the OS 
maintains only scheduling and accounting 
information. But it is incorrect as it contains other 
information like program counters, data files, CPU 
registers stack, code files are also maintained.


</details>

---


### Q43. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following table of arrival time and burst 
time for three processes P0, P1 and P2. 
Process Arrival Time Burst Time 
P0 0 ms 9 ms 
P1 1 ms 4 ms 
P2 2 ms 9 ms 
 The pre -emptive shortest job first scheduling 
algorithm is used. Scheduling is carried out only at 
arrival or completion of processes. What is the 
average waiting time for the three processes?


- **(A)** 5

- **(B)** 4.33

- **(C)** 6.33

- **(D)** 7.33



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

SRTF is used, this scheduling gives CPU to those 
processes in which remaining CPU burst time is smallest 
 AT BT CT TAT WT 
𝑃0 0 9 13 13 4 
𝑃1 1 4 5 4 0 
𝑃2 2 9 22 20 11 
 CT = Completion time 
 BT = Burst Time 
 TAT = Turn Around Time 
 TAT = CT - AT 
 WT = Waiting Time 
 WT = TAT – BT 
 Using pre-emptive shortest job first scheduling algorithm, 
 Gantt Chart is - 
 Avg. WT = 4+0+11/3 = 5ms


</details>

---


### Q44. [GATE CSE - 2012 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are true? 
 I. Shortest remaining time first scheduling may cause 
starvation 
 II. Preemptive scheduling may cause starvation 
 III. Round robin is better than FCFS in terms of 
response time


- **(A)** I only

- **(B)** I and II only

- **(C)** II and III only

- **(D)** I, II and III



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

In the shortest remaining time first, processes with 
longer burst time suffer from starvation. As the 
shorter processes may keep coming and a long CPU 
burst process never gets CPU. 
 - Preemptive scheduling causes starvation (For 
example - lower priority jobs are waiting and higher 
priority processes are continuously coming). 
 - Best Response time is given by Round Robin 
scheduling as processors will be given to each process 
after a time.


</details>

---


### Q45. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


In the following process state transition diagram for 
a uniprocessor system, assume that there are always 
some processes in the ready state : 
 Now consider the following statements : 
I. If a process makes a transition D, it would result 
in another process making transition A 
immediately. 
II. A process P2 in a blocked state can make 
transition E while another process P1 is in running 
state. 
 III. The OS uses preemptive scheduling. 
 IV. The OS uses non-preemptive scheduling. 
 Which of the above statements are TRUE ?


- **(A)** I and II

- **(B)** I and III

- **(C)** II and III

- **(D)** II and IV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  C


**Step-by-Step Explanation:**

Transitions: 
A: Start → Ready 
B: Ready → Running 
C: Running → Ready (preemption) 
D: Running → Terminated 
E: Blocked → Ready 
F: Running → Blocked  
 I: 
After D (Running → Terminated), the CPU 
becomes free. Since  ready queue is never empty, 
scheduler selects a ready process (B occurs, not A). 
False 
 II: 
One process can move Blocked → Ready (E) due to 
I/O completion while another process is running.  
True 
 III: 
Transition C (Running → Ready) indica tes 
preemption. 
True 
<!-- PAGE 314 -->
OPERATING SYSTEMS 
 IV: 
Non-preemptive scheduling would not have 
transition C. 
False


</details>

---


### Q46. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


A process executes the following code: 
 for(i=0;i<n;i++) 
    fork(); 
 The total number of child processes created is


- **(A)** n

- **(B)** 2ⁿ-1

- **(C)** 2ⁿ

- **(D)** 2ⁿ⁺¹ − 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

child processes = total processes – 1 = 2ⁿ − 1 
 Correct answer: (B).


</details>

---


### Q47. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


An operating system uses the Shortest Remaining 
Time First (SRT) process scheduling algorithm. 
Consider the arrival times and execution times for the 
following processes: 
Process Execution Time Arrival Time 
P1 20 0 
P2 25 15 
P3 10 30 
P4 15 45 
 What is the total waiting time for process P2?


- **(A)** 5

- **(B)** 15

- **(C)** 40

- **(D)** 55



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

You can clearly see P2 runs in two segments: 
● 20–30 
● 40–55 
 That gap (30–40) contributes to its waiting time. 
 And since its arrival time is 15 
 Hence total waiting time = 5 + 10 = 15


</details>

---


### Q48. [GATE CSE - 2009 MCQ (2-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements about user level 
threads and kernel level threads. Which one of the 
following statements is FALSE?


- **(A)** Context switch time is longer for kernel level 
threads than for user level threads.

- **(B)** User level threads do not need any hardware 
support.

- **(C)** Related kernel level threads can be scheduled 
on different processors in a multi -processor 
system.

- **(D)** Blocking one kernel level th read blocks all 
related threads.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  D


**Step-by-Step Explanation:**

(A) Context switch time is longer for kernel level 
threads than for user level threads. 
True. Kernel threads require mode switch (user → 
kernel), scheduler invocation, etc., so overhead is 
higher. 
 (B) User level threads do not need any hardware 
support. 
True. They are managed entirely in user space by 
thread libraries. 
 (C) Related kernel level threads can be scheduled 
on different processors in a multi-processor system. 
True. Since the kernel manages them, they can run 
in parallel on multiple CPUs. 
 (D) Blocking one kernel level thread blocks all 
related threads.  
False. This is true for user -level threads (many-to-
one model), but not for kernel-level threads. If one 
kernel thread blocks, others can still run.


</details>

---


### Q49. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Group 1 contains some CPU scheduling algorithms 
and Group 2 contains some applications. Match 
entries in Group 1 to entries in Group 2. 
 Group 1 
P. Gang Scheduling 
Q. Rate Monotonic Scheduling 
R. Fair Share Scheduling 
 Group 2 
1. Guaranteed Scheduling 
2. Real-time Scheduling 
3. Thread Scheduling


- **(A)** P-3; Q-2; R-1

- **(B)** P-1; Q-2; R-3

- **(C)** P-2; Q-3; R-1

- **(D)** P-1; Q-3; R-2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

P. Gang Scheduling → Thread Scheduling (3)  
Gang scheduling is used for parallel programs 
where related threads are scheduled simultaneously 
on different processors. So it is used in thread 
scheduling. 
 Q. Rate Monotonic Scheduling → Real-time 
Scheduling  (2) 
Rate Monotonic Scheduling is a classic fixed-
priority real-time scheduling algorithm. 
 R. Fair Share Scheduling → Guaranteed 
Scheduling (1) 
Fair share scheduling ensures each user/process 
group gets a fair proportion of CPU time, aligning 
with guaranteed scheduling.


</details>

---


### Q50. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider three CPU-intensive processes, which 
require 10, 20 and 30 time units and arrive at times 
0, 2 and 6, respectively. How many context 
switches are needed if the operating system 
implements a Shortest Remaining Time First 
(SRTF) scheduling algorithm? 
 Do not count the context switches at time zero and 
at the end.


- **(A)** 1

- **(B)** 2

- **(C)** 3

- **(D)** 4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

Gantt chart: 
 Total no of context switch = 2


</details>

---


### Q51. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider three processes (process id 0, 1, 2, 
respectively) with compute time bursts 2, 4, and 8 
time units. All processes arrive at time zero. 
Consider the Longest Remaining Time First 
(LRTF) scheduling algorithm. In LRTF ties are 
broken by giving priority to the process with the 
lowest process id. The average turnaround time is


- **(A)** 13 units

- **(B)** 14 units

- **(C)** 15 units

- **(D)** 16 units



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

Gantt chart: 
 0–4   : P2   
 4–5   : P1   
 5–6   : P2   
 6–7   : P1   
 7–8   : P2   
 8–9   : P0   
 9–10  : P1   
 10–11 : P2   
 11–12 : P0   
 12–13 : P1   
 13–14 : P2 
 Average Turnaround Time = ((12 – 0 ) + (13-0) + (14 
– 0))/3 = 13


</details>

---


### Q52. [GATE CSE]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider three processes, all arriving at time zero, 
with total execution time of 10, 20, and 30 units, 
respectively. Each process spends the first 20% of 
execution time doing I/O, the next 70% of time doing 
computation, and the last 10% of time doing I/O 
again. 
 The operating system uses a shortest remaining 
compute time first scheduling algorithm and 
schedules a new process either when the running 
process gets blocked on I/O or when the running 
process finishes its co mpute burst. Assume that all 
I/O operations can be overlapped as much as possible. 
 For what percentage of time does the CPU remain 
idle?


- **(A)** 0%

- **(B)** 10.6%

- **(C)** 30.0%

- **(D)** 89.4%



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  B


**Step-by-Step Explanation:**

Idle      P1       P2             P3                  Idle 
   0 ────2── 9 ──── 23 ──── 44 ─────── 47 
 Idle Intervals: 
● From 0 to 2 → all processes are in initial I/O → 
CPU idle = 2 units 
● From 44 to 47 → last process (P3) is in final I/O → 
CPU idle = 3 units 
 Total idle time = 2 + 3 = 5 
 Total Time: 
● System completes when last I/O finishes → time 
= 47 
<!-- PAGE 315 -->
OPERATING SYSTEMS 
 Idle Percentage: 
5/47×100=10.6383%≈10.6%


</details>

---


### Q53. [GATE CSE - 2007 MCQ (1-MARKS]


> **Topic:** FARRAY | **Marks:** 2 | **Difficulty:** Medium


Consider the following code fragment: 
 if (fork() == 0) 

```c
 { 
     a = a + 5; 
     printf("%d, %p\n", a, &a); 
 } 
 else 
 { 
     a = a - 5; 
     printf("%d, %p\n", a, &a); 
 } 
  Let u, v be the values printed by the parent process 
 and x, y be the values printed by the child process. 
 Which one of the following is TRUE?
```


- **(A)** u = x + 10 and v = y

- **(B)** u = x + 10 and v ≠ y

- **(C)** u + 10 = x and v = y

- **(D)** u + 10 = x and v ≠ y



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

After fork, parent and child have separate copies 
of ‘a’ but same virtual address space layout. 
Child: a = a + 5 → x 
Parent: a = a − 5 → u 
So x = u + 10 
 Addresses remain same → v = y 
<!-- PAGE 316 -->
Process Synchronization and 
Concurrency


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider three processes P1, P2, and P3 running 
identical code, as shown in the pseudocode below. 
A and B are two binary semaphores initialized to 1 
and 0, respectively. X is a shared variable 
initialized to 0. Each line in the pseudocode is 
executed atomically. 
 Pseudocode of P1, P2, and P3: 
 wait(A); 
print(*); 
X=X+1; 
if(X==2) 
{ 
    print($); 
    signal(B); 
} 
signal(A); 
wait(B); 
print(#); 
signal(B); 
 Assume that any of the three processes can start to 
execute first and cont ext switching can happen 
between these processes at any arbitrary time and 
in any arbitrary order. 
 Which of the following patterns is/are possible to 
be generated as an outcome of the execution of 
these three processes?


- **(A)** **$*###

- **(B)** **$#*##

- **(C)** **$##*#

- **(D)** ***$###



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B, C


**Step-by-Step Explanation:**

$ can be printed only when x=2  
 At that time two starts must have already printed  
 So D is not possible  
 A,B,C are possible by interleavings


</details>

---


### Q2. [GATE CSE - 2026 MSQ SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a multi-threaded program with two threads 
T1 and T2. The threads share two semaphores: s1 
(initialized to 1) and s2 (initialized to 0). The threads 
also share a global variable x (initialized to 0). The 
threads execute the code shown below. 
 T1: 
  wait(s1); 
  x = x + 1; 
  print(x); 
  wait(s2); 
  signal(s1); 
 T2: 
  wait(s1); 
  x = x + 1; 
  print(x); 
  signal(s2); 
  signal(s1); 
Which of the following outcomes is/are possible 
when threads T1 and T2 execute concurrently?


- **(A)** T1 runs first and prints 1, T2 runs next and    
 prints 2

- **(B)** T2 runs first and prints 1, T1 runs next and  
 prints 2

- **(C)** T1 runs first and prints 1, T2 does not print  
 anything (deadlock)

- **(D)** T2 runs first and prints 1, T1 does not print  
 anything (deadlock)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B,C


**Step-by-Step Explanation:**

If T1 starts: 
 T1 takes s1 → prints 1 → waits on s2 → 
blocked 
 T2 cannot start (s1 not released) → deadlock 
If T2 starts: 
 T2 takes s1 → prints 1 → signals s2 → signals 
s1 
 T1 runs → prints 2


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the two functions incr and decr shown 
below. 
          incr(){ 
                     wait(s);             
                     X = X+1;                 
                      signal(s);         
         }       
         decr(){ 
                     wait(s);             
                     X = X-1;                 
                      signal(s);         
         }                     
       There are 5 threads each invoking incr once, and 3 
threads each invoking decor once, on the same 
shared variable X. The initial value of X is 10. 
 Suppose there are two implementations of the 
semaphore s, as follows: 
 I-1: s is a binary semaphore initialized to 1.  
I-2: s is a counting semaphore initialized to 2. 
 Let V1, and V2 be the values of X at the end of the 
execution of all the threads with implementations I-
1, and I-2, respectively. 
 Which one of the following choices corresponds to 
the minimum possible values of V1, V2, 
respectively?


- **(A)** 15,7

- **(B)** 7,7

- **(C)** 12,7

- **(D)** 12,8



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The best response 
 For I-1: 
 Initially, X equals 10, s equals 1 (mutual 
exclusion), and is in binary semaphore. So, after 
executing 5 incr(), X becomes 10 + 5 = 15, and after 
executing 3 decr(), X becomes 15 - 3 = 12. 
 For I-2: 
 Initially, X = 10 and s = 2 (semaphore included). 
This means that two processes can enter the critical 
section at the same time. Let's say, the final values 
of X written by only the right-hand side function in 
each pass below- 
// both read x = 10 
pass1: incr1() & decr1() // decr1() still in // Final  
execution stage   value of X=11 
pass2: incr2() & decr1() // decr1() still in  
execution stage  // Final value of                                                                          
X=12 
pass3: incr3() & decr1() // decr1() writes                   
the final value// 
both read x = 9 // 
Final   value of 
𝑋 = 9 
pass4: incr4() & decr2()  // decr2() writes  
 the final value // 
Final value of 𝑋 =
 // both read x = 8 
 pass5: incr5() & decr3()  // decr3() writes 
the final value 
       // Final value of  
       X=7


</details>

---


### Q4. [GATE CSE - 2023 MCQ SET - 1(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following threads T1, T2, and T3  
 executing on a single processor, synchronized using 
three binary semaph ore variables S1, S2, and 
S3,operated upon using standard wait() and signal(). 
The  threads can be context sw itched in any order 
and at any time. 
T1: 
 while(true) { 
 wait(S3); 
 print("C"); 
 signal(S2); 
 } 
T2: 
 while(true) { 
 wait(S1); 
 print("B"); 
 signal(S3); 
 } 
T3: 
 while(true) { 
 wait(S2); 
 print("A"); 
 signal(S1); 
 } 
Which initialization of the semaphores would print 
the sequence BCABCABCA...?


- **(A)** S1 = 1; S2 = 1; S3 = 1

- **(B)** S1 = 1; S2 = 1; S3 = 0

- **(C)** S1 = 1; S2 = 0; S3 = 0

- **(D)** S1 = 0; S2 = 1; S3 = 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

For sequence B → C → A: 
B needs S1 initially 1 
C waits on S3 → must be enabled after B 
A waits on S2 → enabled after C 
So initial: S1 = 1, S2 = 0, S3 = 0


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium




```c
Consider the following pseudocode, where S is a 
semaphore initialized to 5 in line #2 and counter is 
a shared variable initialized to 0 in line#1. Assume 
that the increment operation in line#7 is not atomic. 
 1. int counter = 0 
 2. Semaphore S = init(5); 
 3. void parop(void) 
 4. { 
 5.   wait(S); 
 6.   wait(S); 
 7.     counter++; 
 8.         signal(S); 
 9.                signal(S); 
 10.} 
 If five threads execute the function parop 
concurrently, which of the following program 
behavior(s) is/are possible?
```


- **(A)** The value of counter is 5 after all the threads 
successfully complete the execution of 
parop.

- **(B)** The value of counter is 1 after all the threads 
successfully complete execution of parop.

- **(C)** The value of counter is 0 after all the threads 
successfully complete the execution of 
parop.

- **(D)** There is a deadlock involving all the threads.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,B, D


**Step-by-Step Explanation:**

A. Assume the processes execute sequentially with no 
interleaving then after each process ends the counter 
value increments by 1, hence after 5 process 5 
increments to zero hence a counter value of 
5. Possible. 
 B. Let’s assume that a process used 2 waits and reads 
the counter value and didn’t update the value yet, all 
the other process let’s say the other processes 
executed sequentially incremented and stored the 
value as 4 but since the value isn’t written the first 
process yet the current value is overwritten by the first 
process as 1. Possible 
 C. There exists no pattern of execution in which the 
process increments the current value and completes 
while maintaining 0 as the counter value. Not possible 
 D. Assume that all the process use up the first wait 
operation, the semaphore value will now become zero 
and deadlock would’ve occurred. Possibl 
<!-- PAGE 326 -->
OPERATING SYSTEMS


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with multiple shared 
resource types, with one instance per resource type. 
Each instance can be owned by only one process at 
a time. Owning and freeing of resources are done 
by holding a global lock (L). The following scheme 
is used to own a resource instance: 
 function OWNRESOURCE(Resource R) 
      Acquire lock L // a global lock 
      if R is available then 
           Acquire R 
           Release lock L 
      else 
           if R is owned by another process P then 
           Terminate P, after relea sing all resources 
owned by P 
              Acquire R 
             Restart P 
             Release lock L 
             end if 
         end if 
     end if 
 end function 
 Which of the following choice(s) about the above 
scheme is/are correct?


- **(A)** The scheme violates the mutual exclusion 
property.

- **(B)** The scheme ensures that deadlocks will not 
occur.

- **(C)** The scheme may lead to starvation.

- **(D)** The scheme may lead to live-lock.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C, D


**Step-by-Step Explanation:**

The lock ensures that mutual exclusion is enforced 
 Since forceful preemption of resources by 
termination of the other processes is allowed, 
deadlock will never occur.  
 Say when process P is holding the single instance 
resource of type R1, after some time, process Q 
requests for resource type R1. Using the 
OWNRESOURCE algorithm, process Q will be 
able to terminate process P and thus releasing all 
the resources held by process P. Now Q acquires 
(holds) resource type R1 while process P gets 
restarted. And then process Q releases lock L.  
  It may lead to a live lock, where each process 
continues to preempt each other, thus none of them 
can make any progress but neither are in a blocked 
state.  
 Livelock occurs when two or more processes 
continually repeat the same interaction in response 
to changes in the other processes without doing any 
useful work. These processes are not in the waiting 
state, and they are running concurrently.  This is 
different from a deadlock because in a deadlock all 
processes are in the waiting state.


</details>

---


### Q7. [GATE CSE - 2021 MSQ SET - 1(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Each of a set of n processes executes the following 
code using two semaphores a and b initialized to 1 
and 0, respectively. Assume that count is a shared 
variable initialized to 0 and not used in CODE 
SECTION P. 
 CODE SECTION P 
 wait (a);  
           count = count+1; 
 if (count==n) signal (b); 
 signal (a); wait (b); signal (b); 
 CODE SECTION Q 
 What does the code achieve?


- **(A)** It ensures that all processes execute CODE 
SECTION P mutually exclusively.

- **(B)** It ensures that at most two processes are in 
CODE SECTION Q at any time.

- **(C)** It ensures that no process executes CODE 
SECTION Q before every process has finished 
CODE SECTION P.

- **(D)** It ensures that at most n -1 processes are in 
CODE SECTION P at any time.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The wait(a) or P(a)ensures that count value is 
correctly incremented (no race condition) 
if(count==n) signal (b);  
 This signal(b) statement is  executed by the last 
(nth) process only. Rest of the n -1 processes are 
blocked on wait(b). Once the nth process makes 
signal(b) then the rest of the processes can proceed 
and enter Code section Q. 
 In other words, semaphore 'a' controls mutually 
exclusive execution of statement count+=1 and 
semaphore 'b' controls entry to CODE SECTION Q 
when all the process have executed CODE 
SECTION P. As checked by given condition 
if(count==n) signal(b); the semaphore 'b' is 
initialized to 0 and only increments when this  
condition is TRUE.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider three concurrent processes P1, P2 and P3 
as shown below, which access a shared variable  
 D initialized to 100. 
P1: D = D + 20 
P2: D = D − 50 
P3: D = D + 10 
The processes are executed on a uniprocessor 
system running a time-shared operating system. If 
the minimum and maximum possible values of D 
after the three processes have completed 
execution are X and Y respectively, then the value 
of Y − X is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 80


**Step-by-Step Explanation:**

Each operation is read –modify–write, so 
interleavings cause lost updates. 
Maximum value: execute +20 and +10 after 
reading latest, and −50 reads earliest 
 Possible max = 130 
Minimum value: −50 applies on updated value, 
others overwritten 
 Possible min = 50 
Y − X = 130 − 50 = 80


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following solution to the producer-
consumer synchronization problem. The shared 
buffer size is N. Three semaphores  empty, 
full and mutex are defined with respective initial 
values of 0, N and 1. Semaphore empty denotes the 
number of available slots in the buffer, for the 
consumer to read from. Semaphore full denotes the 
number of available slots in the buffer, for the 
producer to write to. The placeholder variables, 
denoted by P, Q, R and S, in the code below can be 
assigned either empty or full. The valid semaphore 
operations are: wait () and signal (). 
Producer Consumer 
do{ do { 
wait (P); wait (R); 
wait (mutex); wait mutex); 
//Add item to buffer //Consume item from buffer 
Signal (mutex); Signal (mutex); 
Signal (Q); Signal (S); 
} while (1); } while (1); 
 Which one of the following assignments to P, Q, R 
and S will yield the correct solution?


- **(A)** P: full, Q: full, R: empty, S: empty

- **(B)** P: empty, Q: empty, R: full, S: full

- **(C)** P: full, Q: empty, R: empty, S: full

- **(D)** P: empty, Q: full, R: full, S: empty



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Lets see according to the codes given, 
full denotes the number of available slots in 
the buffer, for the producer to write to 
and, empty denotes the number of available 
slots in the buffer, for the consumer to read 
from 
So, P must be full, as on wait( P ), the 
available slots must decrease for the producer 
to write to, when it is producing an item to the 
buffer 
Q must be empty as signal(Q) increases the 
number of available slots in the buffer, for the 
consumer to read from. 
𝐑 must be empty as on wan(R) decreases the 
no of avaliable slots in the buffer to read from 
(for the consumen) 
S must be full as on signal(S) increases a slot 
for the producer to write, as the consumer has 
consumed an fiem from the buffer.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following proposed solution for the 
critical section problem. There are n processes: 
P0...Pn-1. In the code, function pmax returns an integer 
not smaller than any of its arguments. For all i, t[i] is 
initialized to zero. 
 Code for Pi: 
 do { 
         c[i]=1; t[i] = pmax (t[0],...,t[n-1]) +1; c[i]=0; 
                  for every j ≠ i in {0,...,n-1} { 
               while (c[j]); 
               while (t[j]! = 0 && t[j]<=t[i]); 
       } 
        Critical Section; 
        t[i]=0; 
        Remainder Section; 
 } while (true); 
 Which one of the following is TRUE about the above 
solution?


- **(A)** At most one process can be in the critical  
  section at any time.

- **(B)** The bounded wait condition is satisﬁed

- **(C)** The progress condition is satisﬁed

- **(D)** It cannot cause a deadlock.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

while (t[j] l = 0 && t[j] <=t[i]); 
 This ensures that when a process i reaches Critical Section, 
all processes j which started before it must have its t[j] = 0 
This means no two processes can be in critical section at 
same time as one of them must be started earlier. 
 returns an integer not smaller, is the issue here for 
deadlock. This means two processes can have same t value 
and hence 
 while (t[j] != 0 && t[j] <=t[i]); 
 can go to infinite wait. (t[ j] == t[i]). Starvation is also 
possible as there is nothing to ensure that a request is 
granted in a timed manner.  
         Bounded waiting is defined as finite waiting and since 
deadlock is possible here, bounded waiting is not 
guaranteed as per that definition. 
<!-- PAGE 327 -->
OPERATING SYSTEMS


</details>

---


### Q11. [GATE CSE - 2019 NAT (1-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two -process synchronization 
solution. 
Process 0 Process 1 
Entry: loop while 
(turn == 1); 
Entry: loop while (turn == 0); 
(critical section ) ( Critical section) 
Exit: turn = 1; Exit: turn = 0; 
 The shared variable turn is initialized to zero. Which 
one of the following is TRUE?


- **(A)** This is a correct two-process synchronization  
  solution.

- **(B)** This solution violates mutual exclusion 
requirement.

- **(C)** This solution violates the progress 
requirement.

- **(D)** This solution violates the bounded wait 
requirement.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

A) There is strict alternation, so it is not the correct 
two process synchronization. So, option A is 
False 
 B) Mutual exclusion is satisfied because the value of 
the turn variable cannot be 0 and 1 at the same 
time. So False. 
 C) Progress means if one process does not want to 
enter the critical section then it should not stop 
other processes from entering the critical section. 
But we can see that if process 0 will not enter the 
critical section, then the value of turn will not 
become 1 and process 1 will not be able to enter 
the critical section.  So progress is not satisfied. 
True. 
 D) Bounded waiting solution as there is a strict 
alteration.So, False.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a non -negative counting semaphore S. 
The operation P(S) decrements S, and V(S) 
increments S. During an execution, 20 P(S) 
operations and 12 V(S) operations are issued in 
some order. The largest initial value of S for which 
at least one P(S) operation will remain blocked is 
_________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

We can assume the largest initial value of S for 
which at least one P(S) operation → X 
 P(S) operation remains in a blocked state therefore 
it will -1. 
 The negative value of the counting semaphore 
indicates the number of processes in the suspended 
list (or blocked). 
 Take any sequence of 20P and 12V operations, at 
least one process will always remain blocked. 
 So, X - 20 + 12 = -1 
 Here P(S) = 20 and V(S) = 12 
 X = 7 
 Therefore, the initial value of the semaphore will be 
7.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following two functions P1 and P2 that share a 
variable B with an initial value of 2 execute 
concurrently. 
 P1()  
 {  
    C = B – 1; 
    B = 2*C; 
 } 
 P2() 
 { 
    D = 2 * B; 
    B = D - 1; 
 } 
 The number of distinct values that B can possibly 
take after the execution is?


- **(A)** 3

- **(B)** 4

- **(C)** 5

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

If we execute P2 process after P1 process, then B = 
 If we execute P1 process after P2 process, then B = 
 If we did pre-emption between P1 & P2 processes, 
then B = 2 (Pre-emption have done from P1 to P2) 
or B = 3 (Pre -emption have done from P2 to P1). 
So, among 2 & 3 values, only one value will be 
saved in B. So, total no. of distinct values that B can 
possibly take after the execution is 3. 
 3 distinct values {2,3,4} 
 P1−P2: B=3 
 P2−P1: B=4 
 P1−P2−P1: B=2


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Two processes X and Y need to access a critical 
section. Consider the following synchronization 
construct used by both the processes. 
 Here, varP and varQ are shared variables and both 
are initialized to false. Which one of the following 
statements is true?


- **(A)** The proposed solution prevents deadlock but 
fails to guarantee mutual exclusion.

- **(B)** The proposed solution guarantees mutual 
exclusion but fails to prevent deadlock.

- **(C)** The proposed solution guarantees mutual 
exclusion and prevents deadlock.

- **(D)** The proposed solution fails to prevent 
deadlock and fails to guarantee mutual 
exclusion.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Both processes can set their respective flags (varP and 
varQ) to true and enter the critical section 
simultaneously because each only checks the other’s 
flag before entering. This means  mutual exclusion is 
not ensured, as both could be inside the critical 
section at the same time. However, deadlock does not 
occur because neither process gets stuck  waiting 
indefinitely; at least one will always proceed.


</details>

---


### Q15. [GATE CSE - 2016 NAT SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the procedure below for the Producer -
Consumer problem which uses semaphores:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

This problem simulates classical producer consumer 
problem, the correct answer of this question is option 
C because when consumer first access the semaphore 
'S' it will down (S) and make 'S'=0, but for 
semaphore(n), it has to wait for producer to make it 1 
but as for producer it can't access the critical section 
because the value of S=0, so semwait(S) will not 
work. So there will be a deadlock. 
 Initially, there is no element in the buffer. 
 Semaphore s=1 and semaphore n=0. 
 We assume that initially control goes to the consumer 
when the buffer is empty. 
 semWait(s) decrements the value of semaphore ‘s’. 
Now, s = 0 and  semWait(n) decrements the value of 
semaphore ‘n’. 
 Since, the value of semaphore ‘n’ becomes less than 
0, the control stucks in the loop of function semWait() 
and a deadlock arises. 
 Thus, deadlock occurs if the consumer succeeds in 
acquiring semaphores when the buffer is empty.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A certain computation generates two arrays a and b 
such that a[i]=f(i) for 0 ≤ i< n and b[i]=g(a[i]) for 0 
≤ i< n. Suppose this computation is decomposed 
into two concurrent processes X and Y such that X 
computes the array a and Y computes the array b. 
The processes employ two binary semaphores R 
and S, both initialized to zero. The array a is shared 
by the two processes. The structures of the 
processes are shown below. 
Process X: Process Y: 
private 𝑖; private 𝑖; 
for (𝑖 = 0; 𝑖 < 𝑛; i + +){ for (𝑖 = 0; 𝑖 < 𝑛; i + +){ 
𝑎[𝑖] = 𝑓(𝑖); EntryY (𝑅, 𝑆); 
ExitX (𝑅, 𝑆); 𝑏[𝑖] = 𝑔(𝑎[𝑖]); 
} } 
 Which one of the following represents the 
CORRECT implementations of Exit X and Entry 
Y?


- **(A)** ExitX(R, S) { 
  P(R); 
  V(S); 
  } 
  EntryY(R, S) { 
  P(S); 
  V(R); 
  }

- **(B)** ExitX(R, S) { 
  V(R); 
  V(S); 
  } 
  EntryY(R, S) { 
  P(R); 
  P(S); 
  }

- **(C)** ExitX(R, S) { 
  P(S); 
  V(R); 
  } 
  EntryY(R, S) { 
  V(S); 
  P(R); 
  }

- **(D)** ExitX(R, S) { 
  V(R); 
  P(S); 
  } 
  EntryY(R,S) { 
  V(S); 
  P(R); 
  }



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The solution is using a binary semaphore. X and Y 
are two different processes, whatever the values 
inserted by the processes in the array that will be used 
by process Y afterwards. 
 A. X is waiting on R and Y is waiting on X. So, both 
cannot proceed. 
 B. Process  X is doing Signal  operation 
on R and S without any wait and hence multiple 
signal operations can happen on the binary semaphore 
so Process Y won't be able to get exactly n successful 
wait operations. i.e., Process  Y may not be able to 
complete all the iterations.  
<!-- PAGE 328 -->
OPERATING SYSTEMS 
 C. Process X does Wait(S) followed by Signal(R) 
while Process  Y does Signal(S) followed by 
Wait(R). So, this ensures that no two iterations of 
either XX or YY can proceed without an iteration 
of the other being executed in between. i.e., this 
ensures that all  n iterations of  X and Y succeeds 
and hence the answer.  
 D. Process X does Signal(R) followed by Wait(S) 
while Process  Y does Signal(S) followed by 
Wait(R). There is a problem here that X can do two 
Signal(R) operation without a Wait(R) being done 
in between by Y. This happens in the following 
scenario: 
 Process Y: Does Signal (S); Wait(R) fails; goes to 
sleep. 
 Process X: does Signal(R); Wait(S) succeeds; In 
next iteration Signal(R) again happens; 
 So, this can result in some Signal operations getting 
lost as  the semaphore is a binary one and thus 
Process Y may not be able to complete all the 
iterations. If we change the order of Signal(S) and 
Wait(R) in EntryY, then (D) option also can work.


</details>

---


### Q17. [GATE CSE - 2013 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A shared variable x, initialized to zero, is operated on 
by four concurrent processes W, X, Y, Z as follows. 
Each of the processes W and X reads x from memory, 
increments by one, stores it to memory, and then 
terminates. Each of the processes Y and Z reads x 
from memory, decrements by two, s tores it to 
memory, and then terminates. Each process before 
reading x invokes the P operation (i.e. wait) on a 
counting semaphore S and invokes the V operation 
(i.e., signal) on the semaphore S after storing x to


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

𝑥 is initially 0 and 𝑆 = 2 
𝑊 process reads 𝑥 and increments it then it 
is preempted. Still value of 𝑥 is 0coz store 
operation is yet to be performed. for 𝑊 to 
execute it has first performed a wait 
operation binary semaphore 𝑆. Now 𝑆 is 1 . 
after this processes 𝑌 and 𝑍 came to do 
what ever they want to do with the value of 
𝑥. This is possible because 𝑆 = 1. So, at the 
end when they both are done 𝑆 = 1 still. 
after this 𝑊 is made to execute again to 
store the value 1 in 𝑥 and makes 𝑆 = 2 just 
before it exits. After which process 𝑋 
executes(without any problem coz it just 
needs 𝑆 to be 1 atleast). It reads the value 
of 𝑥 as 1 and increments it to 2 and exits.


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Fetch_And_Add (X, i) is an atomic Read -Modify-
Write instruction that reads the value of memory 
location X, increments it by the value i, and returns 
the old value of X. It is used in the pseudocode 
shown below to implement a busy -wait lock. L is 
an unsigned integer shared variable initialized to 0. 
The value of 0 corresponds to lock being available, 
while any non -zero value corresponds to the lock 
being not available. 
 AcquireLock(L) { 
           while (Fetch_And_Add(L,1)) 
                 L = 1; 
  } 
 ReleaseLock(L) { 
           L = 0; 
    } 
 This implementation........


- **(A)** fails as L can overflow

- **(B)** fails as L can take on a non-zero value when 
the lock is actually available.

- **(C)** works correctly but may starve some `
 processes.

- **(D)** works correctly without starvation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Check the loop first: 
 while (Fetch_And_Add (L,1)) 
 L = 1; // A waiting process can be here just after 
 // the lock is released, and can make L=1. 
 Assume P1 runs till while condition and gets 
preempted before executing L =1. Now P2 runs all 
statements, hence L = 0. Then P1 without checking L 
it makes L = 1 by executing the statement where it got 
preempted. 
 It takes a non -zero value (L=1) when the lock is 
actually available (L = 0). 
 A process acquires a lock only when  L=0. 
When L is 1, the process gets repeated in the while 
loop- there is no overflow as after each increment 
to L, L is again made equal to 1. So, the only chance 
of overflow is if a large number of processes (larger 
than sizeof(int)) execute the check condition of while 
loop but not L=1, which is highly improbable.    
 Acquire Lock gets success only when 
Fetch_And_Add gets executed with L = 0.  Now 
suppose P1 acquires lock and make L=1. P2 waits for 
a lock iterating the value of L 
between 1 and 2 (assume no other process waiting for 
lock). Suppose when  P1 releases lock by 
making L=0, the next statement  P2 executes is L=1. 
So, value of L becomes 1 and no process is in critical 
section ensuring  L can never be  0 again. Thus, (B) 
choice.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the methods used by processes P1 and P2 
for accessing their critical sections whenever 
needed, as given below. The initial values of shared 
Boolean variables S1 and S2 are randomly 
assigned. 
Method Used by P1 Method Used by P2 
while (S1 == S2); while (S1! = S2); 
Critical Section Critical Section 
S1 = S2; S2 = not (S1); 
 Which one of the following statements describes the 
properties achieved?


- **(A)** Mutual exclusion but not progress

- **(B)** Progress but not mutual exclusion

- **(C)** Neither mutual exclusion nor progress

- **(D)** Both mutual exclusion and progress



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Mutual Exclusion:  The code ensures that both 
processes P1 and P2 cannot be in their critical section 
at the same time, because one waits for S1 == S2 
while the other waits for S1 != S2, so their conditions 
never allow simultaneous entry. 
 Progress is not satisfied:  If, for example, P1 is not 
interested in entering the critical section but P2 wants 
to enter, P2 could be blocked indefinitely waiting for 
P1 to change S1 to match S2. Thus, a process not 
intending to enter the critical section can prevent 
another from entering, violating the progress 
property. 
 Summary: The algorithm achieves mutual 
exclusion, but does not guarantee progress.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The following program consists of 3 concurrent 
processes and 3 binary semaphores. The semaphores 
are initialized as S0 = 1, S1 = 0, S2=0. 
Process P0 Process P1 Process P2 
while (true) { wait (S1); wait (S2); 
wait (S0); Release (S0); Release (S0); 
print '0'   
release (S1);   
release (S2);   
}   
 How many times will the process P0 print '0'?


- **(A)** At least twice

- **(B)** exactly twice

- **(C)** exactly thrice

- **(D)** exactly one



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Process P0 will print '0'  at least twice.  
P0 starts and prints '0' (since S0 = 1). 
● It releases S1 and S2, allowing P1 and P2 to run. 
<!-- PAGE 329 -->
OPERATING SYSTEMS 
● Either P1 or P2 will run and release S0, letting 
P0 print '0' again. 
● The minimum number of times P0 can print '0' 
before all the semaphores are blocked is 2.


</details>

---


### Q21. [GATE CSE - 2012 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The enter_CS() and leave_CS() functions to 
implement critical section of a process are realized 
using test-and-set instruction as follows: 
 void enter_CS(X) 

```c
{ 
    while test-and-set(X) ; 
} 
void leave_CS(X) 
{
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

I: True 
Test-and-set spinlock ensures that some process 
always enters CS → deadlock-free. 
II: False 
Spinlock has no fairness → starvation possible. 
III: False 
No FIFO guarantee. 
IV: False 
Test-and-set ensures mutual exclusion.


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The P and V operations on counting semaphores, 
where s is a counting semaphore, are defined as 
follows: 
P(s): 
 s = s − 1; 
 if s < 0 then wait; 
V(s): 
 s = s + 1; 
 if s ≤ 0 then wake up process waiting on s; 
 Assume that Pb and Vb, the wait and signal 
operations on binary semaphores, are provided. 
Two binary semaphores xb and yb are used to 
implement the semaphore operations P(s) and V(s) 
as follows: 
P(s): 
 Pb(xb); 
 s = s − 1; 
 if (s < 0) 
 { 
  Vb(xb); 
  Pb(yb); 
 } 
 else Vb(xb); 
V(s): 
 Pb(xb); 
 s = s + 1; 
 if (s ≤ 0) Vb(yb); 
 Vb(xb); 
 The initial values of xb and yb are respectively


- **(A)** 0 and 0

- **(B)** 0 and 1

- **(C)** 1 and 0

- **(D)** 1 and 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

xb is used as mutex → must be 1 
 yb is used for blocking → must be 0


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Two processes, P1 and P2, need to access a critical 
section of code. Consider the following 
synchronization construct used by the processes: 
 /* P1 */ 
while (true) { 
    wants1 = true; 
    while (wants2 == true); 
    /* Critical Section */ 
    wants1 = false; 
} 
/* Remainder section */ 
 /* P2 */ 
while (true) { 
    wants2 = true; 
    while (wants1 == true); 
    /* Critical Section */ 
    wants2 = false; 
} 
/* Remainder section */ 
 Here, wants1 and wants2 are shared variables, 
initialized to false. 
 Which one of the following statements is TRUE 
about the above construct?


- **(A)** It does not ensure mutual exclusion.

- **(B)** It does n ot ensure bounded waiting.

- **(C)** It requires that processes enter the critical  
  section in strict alternation.

- **(D)** It does not prevent deadlocks, but ensures  
  mutual exclusion.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Mutual Exclusion: 
Mutual exclusion is guaranteed in the given code. 
 Deadlock: 
If both P1 and P2 set their flags to true 
simultaneously: 
 P1: wants1 = true 
P2: wants2 = true 
 Now: 
P1 waits while wants2 == true 
P2 waits while wants1 == true 
 Both will wait forever. 
 So mutual exclusion is preserved (they never enter 
together), but they can get stuck. 
 Option-D is correct


</details>

---


### Q24. [GATE CSE - 2008 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The atomic fetch -and-set x, y instruction 
unconditionally sets the memory location x to 1 and 
fetches the old value of x in y without allowing any 
intervening access to the memory location x. 
Consider the following implementation of P and V 
functions on a binary semaphore S. 

```c
 void P (binary_semaphore *s) { 
     unsigned y;
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Busy waiting loop needs context switching; if  
          disabled, other process cannot execute V →  
          Deadlock


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium




```c
Barrier is a synchronization construct where a set of 
processes synchronize  globally. Let the number of  
processes be three an d S be a binary semaphore. 
Consider the following implementation: 
void barrier(void) { 
1:  P(S); 
2:  process_arrived++; 
3:  V(S); 
4:  while (process_arrived != 3); 
5:  P(S); 
6:  process_left++; 
7:  if (process_left == 3) { 
8:      process_arrived = 0; 
9:      process_left = 0; 
10: } 
11: V(S); 
} 
Variables process_arrived and process_left are 
shared and initialized to 0. 
Which one of the following is true?
```


- **(A)** The barrier implementation is wrong due to  
  the use of binary semaphore S

- **(B)** The barrier implementation may lead to a  
 deadlock if two barrier invocations are used  
  in  immediate succession

- **(C)** Lines 6 to 10 need not be inside a critical   
 section

- **(D)** The barrier implementation is correct if there 
 are only two processes instead of three



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

If barrier is reused immediately, some processes  
          may enter next round while others are still exiting  
          previous round, causing mismatch and deadlock


</details>

---


### Q26. [GATE CSE - 2006 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium




```c
Barrier is a synchronization construct where a set of      
processes synchronize globally. Let the number of   
processes be three and S be a binary semaphore.    
Consider the following implementation: 
 void barrier(void) { 
 1:  P(S); 
 2:  process_arrived++; 
 3:  V(S); 
 4:  while (process_arrived != 3); 
 5:  P(S); 
 6:  process_left++; 
 7:  if (process_left == 3) { 
 8:  process_arrived = 0; 
 9: process_left = 0; 
 10: } 
 11: V(S); 
 } 
 The variables process_arrived and process_left are 
shared and initialized to zero. 
 Which one of the following rectifies the problem in 
the implementation?
```


- **(A)** Lines 6 to 10 are simply replaced by  
 process_arrived--

- **(B)** At the beginning of the barrier the first process 
 to enter waits until process_arrived becomes 
 zero before proceeding to execute P(S)

- **(C)** Context switch is disabled at the beginning of    
 the barrier and re -enabled at the end

- **(D)** The variable process_left is made private  
 instead  of shared



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Problem is reuse of barrier; need to ensure previous  
          round is fully reset before next begins
<!-- PAGE 330 -->
DEADLOCKS  3


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


With respect to deadlocks in an operating system, 
which of the following statements is/are FALSE?


- **(A)** Banker’s algorithm is used to prevent 
deadlocks

- **(B)** Deadlock formation can be prevented by 
ensuring that the hold and wait condition is 
not allowed

- **(C)** An assignment edge in a resource allocation 
graph is marked from a process to a resource

- **(D)** A safe state guarantees that all processes can 
finish without formation of a deadlock



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C


**Step-by-Step Explanation:**

(A): False — Banker’s algorithm is used for 
deadlock avoidance, not prevention. 
 (B): True — Removing hold and wait prevents 
deadlock. 
 (C): False — Assignment edge is Resource → 
Process, not Process → Resource. 
 (D): True — Safe state means no deadlock will 
occur.


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a system consisting of k instances of a 
resource R, being shared by 5 processes. 
 Assume: 
● Each process requires a maximum of two 
instances of resource R. 
● A process can request or release only one 
instance at a time. 
● A process can request the second instance only 
after acquiring the first instance. 
 The minimum value of k for the system to be 
deadlock-free is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

For n processes, each requiring maximum m 
instances of a single resource: 
 Minimum resources to guarantee deadlock freedom 
 k ≥ n(m − 1) + 1 
 Substitute values: 
 n = 5 
m = 2 
 k ≥ 5(2 − 1) + 1 
 k ≥ 5 + 1 
 k ≥ 6


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


𝑃 = {𝑃1, 𝑃2, 𝑃3, 𝑃4} consists of all active processes 
in an operating system. 𝑅 = {𝑅1, 𝑅2, 𝑅3, 𝑅4} consists 
of single instances of distinct types of resources in the 
system.  
 The resource allocation graph has the following 
assignment and claim edges.  
 Assignment edges: 𝑅1 → 𝑃1, 𝑅2 → 𝑃2, 𝑅3 → 𝑃3, 𝑅4 
→ 𝑃4 (the assignment edge 𝑅1 → 𝑃1 means resource 
𝑅1 is assigned to process 𝑃1 , and so on for others)  
 Claim edges: 𝑃1 → 𝑅2, 𝑃2 → 𝑅3, 𝑃3 → 𝑅1, 𝑃2 → 
𝑅4, 𝑃4 → 𝑅2 (the claim edge 𝑃1 → 𝑅2 means process 
𝑃1 is waiting for resource 𝑅2 , and so on for others)  
 Which of the following statement(s) is/are 
CORRECT?


- **(A)** Aborting 𝑃1 makes the system deadlock free.

- **(B)** Aborting 𝑃3 makes the system deadlock free

- **(C)** Aborting 𝑃2 makes the system deadlock free

- **(D)** Aborting 𝑃1 and 𝑃4 makes the system 
deadlock free.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C, D


**Step-by-Step Explanation:**

Aborting P2 releases R1, R4, and R3, breaking the 
circular wait and making the system deadlock-free. 
 (D): Aborting P1 and P4 releases all their resources, 
breaking the deadlock. 
 Thus, both (C) and (D) make the system deadlock-
free.


</details>

---


### Q4. [GATE CSE - 2026 MSQ SET - 1(1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are TRUE with 
respect to deadlocks?


- **(A)** The circular wait is a necessary condition for 
the formation of deadlock

- **(B)** In a system where each resource has more than 
one instance, a cycle in its wait -for graph 
indicates the presence of a deadlock.

- **(C)** If the current allocation of resources to 
processes leads the system to an unsafe state, 
then deadlock will necessarily occur.

- **(D)** In the resource-allocation graph of a system, if 
every edge is an assignment edge, then the 
system is not in a deadlock state.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, D


**Step-by-Step Explanation:**

A. Circular wait is one of the necessary conditions for 
the formation of deadlock hence it is true.  
 B. If the resource has more than one instance then 
cycle is just a necessary condition but not the 
sufficient condition, hence it is false.  
 C. Unsafe state  will not always lead to deadlock, 
because it depends on behaviour of the processes, 
hence it is false.  
 D. If every edge is only allocation, it means there is 
no requirement of the resources, so deadlock is not 
possible, hence it is true.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following snapshot of a syste m 
running  n  concurrent processes. Process i is 
holding X i instances of a resource R, 1 ≤ i ≤ n. 
Assume that all instances of R are currently in use. 
Further, for all i process i can place a request for at 
most Yi additional instances of R while holding the 
Xi instances it already has. Of the n processes, there 
are exactly two processes p and q such that Yp = Yq 
= 0. Which one of the following conditions 
guarantees that no other process apart from p and q 
can complete execution?


- **(A)** Min (Xp, Xq) ≥ Min {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q}

- **(B)** Xp + Xq< Max {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q

- **(C)** Min (Xp, Xq) ≤ Max {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q}

- **(D)** Xp + Xq< Min {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q}



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

{P1, P2, ..., Pn} 
 Pi holds Xi instances. 
 Pi can request additional Yi instances. 
 Given two processes p & q such that their additional 
requests are zero. 
 Yp = Yq = 0 
 {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q} means that out of 'n' 
processes, we are left with (n-2) process (except 
p&q), i.e., Y k indicates additional request of all the 
processes (n-2) except p & q. 
 For p & q to complete first, accordingly 
 Xp + Xq < Min {Yk} 
 Option D is correct. 
 There are exactly two processes p and q which do not 
need any additional instances of resources. 
 So, p and q will complete their execution and will 
release Xp and Xq instances of resources. 
 Now to guarantee that no other process apart from p 
and q can complete execution, the no. of instances of 
resources available must be less than the minimum 
no. of instances of resources required by any other 
process, i.e., 
 Xp + Xq < Min {Yk | 1 ≤ k ≤ n, k ≠ p, k ≠ q} 
<!-- PAGE 336 -->
OPERATING SYSTEMS


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In a system, there are three types of resources: E, F 
and G. Four processes P0, P 1, P 2 and P 3 execute 
concurrently. At the outset, the processes have 
declared their maximum resource requirements 
using a matrix named Max as given below. For 
example, Max [P 2, F] is the maximum number of 
instances of F that P2 would require. The number of 
instances of the resources allocated to the various 
processes at any given state is given by a matrix 
named Allocation. 
 Consider a state of the system with the Allocation 
matrix as shown below, and in which 3 instances of 
E and 3 instances of F are the only resources 
available. 
Allocation  
 E F G 
𝑃0 1 0 1 
𝑃1 1 1 2 
𝑃2 1 0 3 
𝑃3 2 0 0 
Max 
 E F G 
𝑃0 4 3 1 
𝑃1 2 1 4 
𝑃2 1 3 3 
𝑃3 5 4 1 
 From the perspective of deadlock avoidance, which 
one of the following is true?


- **(A)** The system is in safe state.

- **(B)** The system is not in safe state, but would be 
safe if one more instance of E were available.

- **(C)** The system is not in safe state, but would be 
safe if one more instance of F were available.

- **(D)** The system is not in safe state, but wo uld be 
safe if one more instance of G were available.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Max Allocation Need=max-
allocation 
 E F G E F G E F G 
𝑃0 4 3 1 1 0 1 3 3 0 
𝑃1 2 1 4 1 1 2 1 0 2 
𝑃2 1 3 3 1 0 3 0 3 0 
𝑃3 5 4 1 2 0 0 3 4 1 
 〈E, F, G〉 = 〈3, 3, 0〉 
 Safe sequence: 
 〈P0, P2, P1, P3〉 
 P0: P0 can be allotted 〈3,3,0〉. 
 After completion Available = 〈4,3,1〉 
 P2: P2 can be allotted 〈0,3,0〉. 
 After completion: Available = 〈5,3,4〉 
 P1: P1 can be allotted 〈1,0,2〉. 
 After completion: Available = 〈6,4,6〉 
 P3: P3 can be allotted 〈3,4,1〉. 
 After completion: Available = 〈8,4,6〉


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with 3 processes that share 4 
instances of the same resource type. Each process can 
request a maximum of K instances. Resource 
instances can be requested and released only one at a 
time. The largest value of K that will always avoid 
deadlock is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2


**Step-by-Step Explanation:**

No. of process = 3 
 No. of resources = 4 
 Let’s distribute  each process one less than 
maximum demands i.e., (k-1) resources. 
 So, for three processes, 3(k – 1) resources. 
 For deadlock avoidance provide an additional 
resource to any one of the processes. 
 ∴ Total resources required to avoid deadlock in any 
case is 3(k – 1) + 1 = 3k – 2 
 Now this 3k – 2 should be less than equal to 
available no. of resources, i.e., 
 3k – 2 ≤ 4 
 k ≤ 2 
 So maximum value of k = 2


</details>

---


### Q8. [GATE CSE - 2019 MCQ SET - 2(2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A multithreaded program P executes with x number 
of threads and used y number of locks for  ensuring 
mutual exclusion while operating on shared memory 
locations. All locks in the program are non-reentrant, 
i.e., if a thread holds a lock l, then it cannot re-acquire 
lock l without releasing it. If a thread is unable to 
acquire a lock, it blocks u ntil the lock becomes 
available. The minimum value of x and the minimum 
value of y together for which execution of P can result 
in a deadlock are:


- **(A)** x = 1, y = 2

- **(B)** x = 2, y = 1

- **(C)** x = 2, y = 2

- **(D)** x = 1, y = 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Re-entrant (recursive) locks allow a thread to 
reacquire the lock. That means the same process 
can claim the lock multiple times without blocking 
on itself. This prevents the thread from deadlocking 
itself. This is the main advantage of re-entrant locks 
over non-re-entrant locks. 
 Non-reentrant (Non-recursive) locks do not allow a 
thread to reacquire the lock. That means the same 
process cannot claim the lock multiple times without 
releasing it. So, if a thread/process is unable to 
acquire a lock, it blocks until the lock becomes 
available. This situation is deadlocked. 
 Here a non-reentrant process can’t own the same lock 
multiple times, so if the process tries to acquire an 
already owned lock, it will get blocked, and deadlock 
will happen. 
 From the above options x=1 (a single thread) and y=1 
(a single lock) deadlock is possible when we consider 
the given situations in question.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A system shares 9 tape drives. The current 
allocation and maximum requirement of tape drives 
for three processes are shown below: 
Proces 
s 
Current 
Allocation 
Maximum 
Requirement 
P1 3 7 
P2 1 6 
P3 3 5 
 Which of the following best describes the current 
state of the system?


- **(A)** Safe, Deadlocked

- **(B)** Safe, Not Deadlocked

- **(C)** Not Safe, Deadlocked

- **(D)** Not Safe,Not Deadlocked



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Process Current Allocation Maximum Requirement Need 
P1 3 7 4 
P2 1 6 5 
P3 3 5 2 
 Available: Given there are total 9 tape drives, 
 So, according to the above table we can see we have 
currently allocated (7 tape drive), so currently 
Available tape drives =(9 - (3 + 1 + 3)) = 2,  
 So, P3 can use it and after using it will release it 3 
resources New available = 3 + 2 = 5 
 Now, P2 can be satisfied. 
 New available: 5 + 1 = 6 
 Now, P1 can be satisfied. Thus safe sequence: P3 → 
P2 → P1 
 That is not deadlocked. 
<!-- PAGE 337 -->
OPERATING SYSTEMS


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A system has 6 identical resources and N processes 
competing for them. Each process can request at 
most 2 resources. Which one of the following 
values of N could lead to a deadlock?


- **(A)** 1

- **(B)** 2

- **(C)** 3

- **(D)** 6



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The system has 6 identical resources and N 
processes, each requesting at most 2 resources.  
Deadlock Condition Analysis: 
● Maximum demand per process = 2 resources. 
● For deadlock to occur, the system must not be 
able to allocate resources such that at least one 
process can proceed. 
● Using the "Deadlock necessary condition" for 
identical resources, deadlock can occur if: 
 N × (max demand per process−1) ≥ total resources 
 Substitute values: 
N ×(2−1) ≥ 6 ⟹ N × 1 ≥ 6 ⟹ N ≥ 6 
Thus, deadlock can occur if N≥6. 
 Conclusion: 
● The smallest values of  N that can lead to 
deadlock is 6. 
● For N<6, deadlock will not occur.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following policies for preventing 
deadlock in a system with mutually exclusive 
resources. 
 I. Processes should acquire all their resources at the 
beginning of execution.   If any resource is not 
available, all resources acquired so far are released. 
 II. The resources are numbered uniquely, and 
processes are allowed to request for resources only 
in increasing resource numbers. 
 III. The resources are numbered uniquely, and 
processes are allowed to request for resources only in 
decreasing resource numbers. 
 IV. The resources are numbered uniquely. A process 
is allowed to request only for a resource with resource 
number larger than its currently held resources. 
 Which of the above policies can be used for 
preventing deadlock?


- **(A)** Any one of I and III but not II or IV

- **(B)** Any one of I, III, and IV but not II

- **(C)** Any one of II and III but not I or IV

- **(D)** Any one of I, II, III, and IV



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A deadlock will not occur if any one of the below 
four conditions are prevented: 
 - hold and wait 
 - mutual exclusion 
 - circular wait 
 - no-preemption 
 Now, 
 Option-1 if implemented violates 1 so deadlock 
cannot occur. 
 Option-2 if implemented violates circular wait 
(making the dependency graph acyclic) 
 Option-3 if implemented violates circular wait 
(making the dependency graph acyclic) 
 Option-4 it is equivalent to options 2 and 3 
 So, the correct option is 4 as all of them are methods 
to prevent deadlock.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A system contains three programs and each requires 
three tape units for its operation. The minimum 
number of tape units which the system must have 
such that deadlocks never arise is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

Number of programs = 3 
● Tape units required per program = 3 
● Applying the deadlock avoidance formula for 
minimum resources to avoid deadlock: 
Minimum tape units=(Number of programs×Tape 
units per program)−(Number of programs−1)Mini
mum tape units=(Number of programs×Tape units p
er program)−(Number of programs−1)Substituting, 
● =(3×3)−(3−1)=9−2=7 
● Hence, having 7 tape units ensures that deadlock 
will never arise in this system. 
 Thus, the minimum number of tape units required is 
7.


</details>

---


### Q13. [GATE CSE - 2017 MCQ SET 2 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An operating system uses the Banker’s algorithm for 
deadlock avoidance when managing the allocation 
of three resource types X, Y, and Z to three 
processes P0, P1, and P2. The table given below 
presents the current system state. Here, the 
Allocation matrix shows the current number of 
resources of each type allocated to each process and 
the Max matrix shows the maximum number of 
resources of each type required by each process 
during its execution. 
 Allocation Max 
 X Y Z X Y Z 
P 0 0 0 1 8 4 3 
P 1 3 2 0 6 2 0 
P 2 2 1 1 3 3 3 
 There are 3 units of type X, 2 units of type Y and 2 
units of type Z still available. The system is currently 
in a safe state. Consider the following independent 
requests for additional resources in the current state: 
 REQ1: P0 requests 0 units of X,   
       0 units of Y and 2 units of Z


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Lets take 1st case, After allowing Req 1, 
Allocated Max Requirement 
P0 0 0 3 8 4 3 8 4 0 
P1 3 2 0 6 2 0 3 0 0 
P2 2 1 1 3 3 3 1 2 2 
 Available: X=3, Y=2, Z=0 With this we can satisfy 
P1's requirement. So available becomes: X=6, Y=4, 
Z=0. Since Z is not available, neither P0's nor P2's 
requirement can be satisfied. So, it is an unsafe state. 
Let’s take 2nd case, After allowing Req 2, 
Allocated Max Requirement 
P0 0 0 1 8 4 3 8 4 2 
P1 5 2 0 6 2 0 1 0 0 
P2 2 1 1 3 3 3 1 2 2 
 Available: X=1, Y=2, Z=2  
 With this we can satisfy any one of P1's or P2's 
requirement. Let us first satisfy P1's requirement. So 
Available now becomes:  
 X=6, Y=4, Z=2 
 Now with the availability we can satisfy P2's 
requirement. So,s Available now becomes, 
 X=8, Y=5, Z=3 
 With this availability P0 can also be satisfied. So, 
hence it is in safe state. 
 So from above two cases Req 1 cannot be permitted 
but Req 2 can be permitted. 
<!-- PAGE 338 -->
OPERATING SYSTEMS


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Three concurrent processes X, Y, and Z execute 
three different code segments that access and 
update certain shared variables. Process X executes 
the P operation (i.e., wait) on semaphores a, b, and 
c; process Y executes the P operation on 
semaphores b, c, and d; process Z executes the P 
operation on semaphores c, d, and a before entering 
the respective code segments. After completing the 
execution of its code segment, each process 
invokes the V operation (i.e., signal) on its three 
semaphores. All semaphores are binary 
semaphores initia lized to one. Which one of the 
following represents a deadlock -free order of 
invoking the P operations by the processes?


- **(A)** X: P(a) P(b) P(c)Y: P(b) P(c) P(d) Z: P(c)  
 P(d) P(a)

- **(B)** X: P(b) P(a) P(c) Y: P(b) P(c) P(d) Z: 
P(a) P(c) P(d)

- **(C)** X: P(b) P(a) P(c) Y: P(c) P(b) P(d) Z: 
P(a) P(c) P(d)

- **(D)** X: P(a) P(b) P(c) Y: P(c) P(b) P(d) Z: 
P(c) P(d) P(a)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Three concurrent processes X, Y, and Z execute 
code segments using semaphores a, b, c, d (all 
initialized to 1). Each process performs P 
operations before its code and V operations after. 
         X needs a, b,  
 Y needs b, c, d 
 Z needs c, d, a 
      To avoid deadlock, all processes must acquire   
resources      
     in a consistent global order. 
       Option (b): 
      X: P(b) P(a) P(c) 
      Y: P(b) P(c) P(d) 
      Z: P(a) P(c) P(d) 
 Order followed is consistent (b → a → c and a → c 
→ d align without circular wait), so no cycle forms.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A system has n resources R0...,Rn-1, and k processes 
P0....Pk-1. The implementation of the resource 
request logic of each process Pi is as follows: 
 if (i % 2 == 0) { 
        if (i < n) request Ri 
        if (i+2 < n) request Ri+2 
 } 
 else { 
        if (i < n) request Rn-i 
        if (i+2 < n) request Rn-i-2 
 } 
 In which one of the following situations is a deadlock 
possible?


- **(A)** n = 40, k = 26

- **(B)** n = 21, k = 12

- **(C)** n = 20, k = 10

- **(D)** n = 41, k = 19



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

From the resource allocation logic, it's clear that 
even numbered processes are taking even 
numbered resources and all even numbered 
processes share no more than 1 resource. Now, if 
we make sure that all odd numbered processes take 
odd numbered resources without a cycle, then 
deadlock cannot occur. The "else" case of the 
resource allocation logic, is trying to do that. But, 
if n is odd, Rn and Rn-i-2 will be even and there is 
a possibility of deadlock, when two processes 
request the same R, and R.;. So, only B and D  are 
the possible answers. 
Now, in D, we can see that Po requests Ro and R2, 
P2 requests R2 and R4, so on until P18 requests 
R18 and R20. At the same time P₁ requests R40 and 
R38. P3 requests R38 and R36, so on until, P17 
requests R24 and R22. i.e.; there are no two 
processes requesting the same two resources and 
hence there can't be a cycle of dependencies which 
means, no deadlock is possible. 
But for B. Ps requests Rg and R10 and P11 also 
requests R10 and Rs. Hence, a deadlock is possible. 
(Suppose Ps comes first and occupies Rs. Then P11 
comes and occupies R10. Now, if Ps requests R10 
and P11 requests R8, there will be deadlock)


</details>

---


### Q16. [GATE CSE - 2013  MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with 4 types of resources R1 (3 
units), R2 (2 units), R3 (3 units), R4 (2 units). A non-
preemptive resource allocation policy is used. At any 
given instance, a request is not entertained if it cannot 
be completely satisfied. Three processes P1, P2, P3 
request the resources as follows if executed 
independently. 
Process P1: 
𝑡 = 0 : requests 
2 units of 
R2 
𝑡 = 1 : requests 
1 unit of 
R3 
𝑡 = 3 : requests 
2 units of 
R1 
𝑡 = 5 : releases 
1 unit of 
R2 and 1 
unit of 
R1 
𝑡 = 7 : releases 
1 unit of 
R3 
𝑡 = 8 : requests 
2 units of 
R4 
𝑡 = 10 : 
Finishes 
Process P2: 
𝑡 = 0 : requests 
2 units of 
R3 
𝑡 = 2 : requests 
1 unit of 
R4 
𝑡 = 4 : requests 
1 unit of 
R1 
𝑡 = 6 : releases 
1 unit of 
R3 
𝑡 = 8 : Finishes 
Process P3: 
𝑡 = 0 : requests 
1 unit of 
R4 
𝑡 = 2 : requests 
2 units of 
R1 
𝑡 = 5 : releases 
2 units of 
R1 
𝑡 = 7 : requests 
1 unit of 
R2 
𝑡 = 8 : requests 
1 unit of 
R3 
𝑡 = 9 : 
Finishes 
 Which one of the following statements is TRUE if all 
three processes run concurrently starting at time t = 0 
?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

1.  Early Resource Distribution (𝑡 = 0 to 𝑡 =
2) : All processes successfully grab their initial 
allocations. At 𝑡 = 2, the system resources are 
almost entirely exhausted, leaving only 1 unit 
of 𝑅1 free. 
2. The Temporarily Paused Process (𝑡 = 3): 𝑃1 
asks for 2 units of 𝑅1, but since only 1 is free, 
it safely blocks (pauses) without causing any 
harm. 
3. The Unlocking Release (𝑡 = 5): 𝑃3 finishes its 
first phase and releases 2 units of 𝑅1. This 
immediately wakes up the blocked 𝑃1. 
4. Smooth Sequential Completion: With 𝑅1 freed, 
𝑃1 goes on to release its held units of 𝑅2 and 
𝑅1, which provides exactly what 𝑃3 needs to 
finish. 𝑃2 also finishes completely at 𝑡 = 8, 
releasing its remaining pool back to the 
system.


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is NOT true of deadlock 
prevention and deadlock avoidance schemes?


- **(A)** In deadlock prevention, the request for 
resources is always granted if the resulting 
state is safe

- **(B)** In deadlock avoidance, the request for 
resources is always granted if the resulting 
state is safe

- **(C)** Deadlock avoidance is less restrictive than 
deadlock prevention

- **(D)** Deadlock avoidance requires knowledge of 
resource requirements a priori



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Deadlock Prevention: 
Prevention works by structurally denying one of the 
four necessary conditions (mutual exclusion, hold-
and-wait, no preemption, circular wait). 
It does not check for safe states dynamically. 
Therefore, a request is not granted based on a safety 
check — it follows strict rules regardless of safety. 
 So statement (A) is false. 
 Deadlock Avoidance: 
Avoidance (e.g., Banker's Algorithm) checks 
whether granting a request keeps the system in a safe 
state. 
If the resulting state is safe → request is granted. 
Hence, (B) is true. 
 Avoidance is less restrictive than prevention because 
it allows more flexibility → (C) is true. 
 Avoidance requires advance knowledge of maximum 
resource needs → (D) is true. 
 Therefore, the statement that is NOT true is (A). 
<!-- PAGE 339 -->
OPERATING SYSTEMS


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A single processor system has three resource types 
X, Y, and Z, which are shared by three processes. 
There are 5 units of each resource type. 
 The column alloc denotes the number of units of 
each resource type allocated to each process, and 
the column request denotes the number of units of 
each resource type requested by a process in order 
to complete execution. 
 Which of these processes will finish LAST? 
 alloc (X Y Z) request (X Y Z) 
P0 1 2 1 1 0 3 
P1 2 0 1 0 1 2 
P2 2 2 1 1 2 0


- **(A)** P0

- **(B)** P1

- **(C)** P2

- **(D)** None of the above, since the system is in a  
  deadlock.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

only possible safe sequence is P1,P0,P2 
 hence P2 finishes last.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following snapshot of a system running 
n processes. Process i is holding x ᵢ instances of a 
resource R, for 1 ≤ i ≤ n. Currently, all instances of R 
are occupied. Further, for all i, process i has placed a 
request for an additional y ᵢ instances while holding 
the xᵢ instances it already has. There are exactly two 
processes p and q such that yₚ = y_q = 0. 
 Which one of the following can serve as a necessary 
condition to guarantee that the system is not 
approaching a deadlock?


- **(A)** min(𝑥𝑝, 𝑥𝑞) < max𝑘≠𝑝,𝑞 𝑦𝑘

- **(B)** 𝑥𝑝 + 𝑥𝑞 ≥ min𝑘≠𝑝,𝑞 𝑦𝑘

- **(C)** max(𝑥𝑝, 𝑥𝑞) > 1

- **(D)** min(𝑥𝑝, 𝑥𝑞) > 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

To avoid deadlock, after either p or q finishes and 
releases its resources, at least one waiting process 
must be able to get all its requested resources and 
complete. 
 So, the released resources must be at least as large 
as some pending requests. 
 Since p and q are the only processes that can release 
resources, the maximum available resources after 
they finish would be: xₚ + xq 
 For the system to avoid deadlock, 
 𝑥𝑝 + 𝑥𝑞 ≥ 𝑦𝑘


</details>

---


### Q20. [GATE CSE - 2008 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose n processes, P1 ,…,Pn, share m identical 
resource units, which can be reserved and released 
one at a time. The maximum resource requirement of 
process Pi is si, where si>0. 
 Which one of the following is a sufficient condition 
for ensuring that deadlock does not occur?


- **(A)** ∀i, si < 𝑚

- **(B)** ∀i, si < 𝑛

- **(C)** ∑    si < (m + n)𝑛𝑖=1

- **(D)** ∑ si < (m × n)𝑛𝑖=1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

For n processes with maximum requirement is and 
m identical resources, a sufficient condition to 
avoid deadlock  
  𝑚 ≥  ∑𝑛𝑖=1 (𝑠𝑖 − 1) + 1 
  𝑚 ≥  ∑𝑛𝑖=1 𝑠𝑖 − 𝑛 + 1 
  ∑𝑛𝑖=1 𝑠𝑖 ≤ 𝑚 + 𝑛 − 1 
 Thus a sufficient condition is  
  ∑𝑛𝑖=1 𝑠𝑖 < 𝑚 + 𝑛 
 Correct answer . c) ∑𝑛𝑖=1 𝑠𝑖 < (𝑚 + 𝑛) 
<!-- PAGE 340 -->
MEMORY MANAGEMENT AND 
VIRTUAL MEMORY


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider contiguous allocation of physical memory 
to processes using a variable partitioning scheme. 
Suppose there are 8 holes in the memory of sizes: 
 20 KB, 4 KB, 25 KB, 18 KB, 7 KB, 9 KB, 15 KB, 
and 12 KB. 
 Assume that no two holes are adjacent. 
 Two processes arrive in order: 
● P1 = 16 KB 
● P2 = 9 KB 
 They are allocated memory using the best -fit 
technique. 
 After allocating space to P1 and P2, the number of 
holes of size less than 8 KB is ______. 
 Note: 1K = 2¹⁰.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Allocation of P1 (16 KB) using Best-Fit: 
 Eligible holes ≥ 16: 
 20, 25, 18 
 Best fit = 18 KB 
 Remaining hole: 
 18 − 16 = 2 KB 
 New holes: 20, 4, 25, 2, 7, 9, 15, 12 
 Allocation of P2 (9 KB) using Best-Fit: 
 Eligible holes ≥ 9: 
 20, 25, 9, 15, 12 
 Best fit = 9 KB 
 Remaining hole: 
 9 − 9 = 0 (hole disappears) 
 Remaining holes: 20, 4, 25, 2, 7, 15, 12 
 Holes smaller than 8 KB: 
 4 KB 
2 KB 
7 KB 
 Answer: 3


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A system has a Translation Lookaside Buffer 
(TLB) that has a reach of 1 MB.  TLB reach is 
defined as the total amount of physical memory that 
can be accessed through the TLB entries. 
 The paging system uses pages of size 4 KB. The 
virtual address space is 64 GB and physical address 
space is 1 GB. 
 If each TLB entry stores: 
● a 4-bit process id 
● page number 
● frame number 
● a 2-bit control field 
 then the size of the TLB (in bytes) is ______. 
 Note: 
1K = 2¹⁰, 1M = 2²⁰, 1G = 2³⁰.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1536


**Step-by-Step Explanation:**

TLB reach = Number of entries × Page size 
 Page size = 4 KB = 2¹² bytes 
 Reach = 1 MB = 2²⁰ bytes 
 Number of entries = 2²⁰ / 2¹² = 2⁸ = 256 entries 
 Virtual page number size: 
 Virtual address space = 64 GB = 2³⁶ bytes 
 Page size = 2¹² 
 Offset bits = 12 
 Virtual page number bits = 36 – 12 = 24 bits 
 Frame number size: 
 Physical address space = 1 GB = 2³⁰ bytes 
 Frame size = 2¹² 
 Number of frames = 2³⁰ / 2¹² = 2¹⁸ 
 Frame number bits = 18 bits 
 Size of one TLB entry: 
 Process id = 4 bits 
 Page number = 24 bits 
 Frame number = 18 bits 
 Control field = 2 bits 
 Total bits per entry = 4 + 24 + 18 + 2 = 48 bits = 6 
bytes 
 Total TLB size: 
 Entries = 256 
 Size per entry = 6 bytes 
 Total size = 256 × 6 = 1536 bytes 
 Answer: 1536 bytes


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a system that has a cache memory unit and 
a memory management unit (MMU). The address 
input to the cache memory is a physical address. The 
MMU has a Translation Lookaside Buffer (TLB). 
Assume that when a page is evicted from main 
memory, the corresponding blocks in the cache are 
marked invalid. 
 For a given memory reference, which of the following 
sequences of events can NEVER happen?


- **(A)** TLB miss, Page table hit, Cache hit

- **(B)** TLB hit, Page table miss, Cache hit

- **(C)** TLB miss, Page table miss, Cache hit

- **(D)** TLB miss, Page table miss, Cache miss



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C


**Step-by-Step Explanation:**

(A): Possible 
TLB miss → page table provides frame → cache 
may hit. 
 (B): Impossible 
page table miss→ cache cannot hit. 
 (C): Impossible 
Page table miss ⇒ page not in memory ⇒ cache 
cannot have it. 
 (D): Possible 
Page fault ⇒ cache miss.


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer system supports a logical address space 
of 232bytes. It uses two -level hierarchical paging 
with a page size of 4096 bytes. A logical address is 
divided into a b -bit index to the outer page table, an 
offset within the page of the inner page ta ble, and an 
offset within the desired page. Each entry of the inner 
page table uses eight bytes. All the pages in the 
system have the same size.The value of b is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 11


**Step-by-Step Explanation:**

Page size = 4096 = 212⇒ page offset = 12 bits 
Each inner page table entry = 8 bytes ⇒ entries per 
page = 212/23 = 29 
⇒ inner index = 9 bits 
Total address bits = 32 
So, 𝑏 + 9 + 12 = 32 
𝑏 = 11 
<!-- PAGE 349 -->
OPERATING SYSTEMS


</details>

---


### Q5. [GATE CSE - 2026 NAT SET - 2(2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a demand paging system with three frames, and the 
following page reference string:1 2 3 4 5 4 1 6 4 5 1 3 2 
          The contents of the frames are shown initially and after each 
reference.  
          The *-marked references cause page replacements. 
          Which one or more of the following could be the page 
replacement policy/policies in use?


- **(A)** Least Recently Used page replacement policy

- **(B)** Least Frequently Used page replacement policy

- **(C)** Most Frequently Used page replacement policy

- **(D)** Optimal page replacement policy



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Given frame evolution matches future -aware 
replacement (pages replaced  based on farthest 
future use), which is characteristic of optimal 
policy


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a demand paging memory management 
system with 32-bit logical address, 20-bit physical 
address, and page size of 2048 bytes. Assuming that 
the memory is byte addressable, what is the 
maximum number of entries in the page table?


- **(A)** 221

- **(B)** 220

- **(C)** 222

- **(D)** 224



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

1.  Find the Page Offset bits: 
           Page Size = 2048 bytes = 211 bytes ⟹ 11 bits  
2. Find the Virtual Page Number (VPN) bits: 
Logical Address - Offset = 32 bits - 11 bits = 21           
bits 
Since 21 bits are used to index the pages, the 
maximum number of entries the page table can 
hold is: 
 Maximum Entries = 221


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A disk of size 512M bytes is divided into blocks of 
64K bytes. A file is stored in the disk using linked 
allocation. In linked allocation, each data block 
reserves 4 bytes to store the pointer to the next data 
block. The link part of the last data block contains 
a NULL pointer (also of 4 bytes). Suppose a file of 
1M bytes needs to be stored in the disk . Assume, 
1K = 2 10 and 1M = 2 20. The amount of space in 
bytes that will be wasted due to internal 
fragmentation is ______. (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 65468


**Step-by-Step Explanation:**

Usable data per block = 64K−4 = 65536−4=655326 
= 65532 bytes. 
 Blocks required = [
1𝑀
65532] = [
1,048,576
65,532 ] = 17, since 
16 blocks hold 16 × 65, 532 = 1, 0458, 512  
 bytes leaving 64 bytes for the last block. 
 Internal fragmentation is the unused space in the 
last block, so wasted  =65,532−64=65,468 bytes, 
i.e., 65468, which matches the official key.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In optimal page replacement algorithm, 
information about all future page references is 
available to the operating system (OS). A 
modification of the optimal page replacement 
algorithm is as follows: The OS correctly predicts 
only up to next 4 page references (including the 
current page) at the time of allocating a f rame to a 
page. A process accesses the pages in the following 
order of page numbers: 1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1, 
4. If the system has three memory frames that are 
initially empty, the number of page faults that will 
occur during execution of the process is ________ 
. (Answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Optimal page replacement algorithm 
 Page numbers = 1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1,4 
2 2 2 2 2 2 2 2 3 3 3 3 
3 3 3 3 1 1 1 1 1 1 1 1 
1 1 1 1 4 4 4 4 4 4 4 4 
The number of page faults is 6.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a 32 -bit system with 4 KB page size and 
page table entries of size 4 bytes each. Assume 1 KB 
= 2 10 bytes. The OS uses a 2 -level page table for 
memory management, with the page table containing 
an outer page directory and an inner page table. The 
OS allocates a page for the outer page directory upon 
process creation. The OS uses demand paging when 
allocating memory for the inner page table, i.e., a 
page of the inner page table is allocated only if it 
contains at least one valid page table entry. 
 An active process in this system accesses 2000 unique 
pages during its execution, and none of the pages are 
swapped out to disk. After it completes the page 
accesses, let X denote the minimum and Y denote the 
maximum number of pages across the two levels of 
the page table of the process. 
 The value of X + Y is _____


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1028


**Step-by-Step Explanation:**

As per the given information in the question, 
 Page Size = 4 KB, therefore no of bits required = 
log2[212] = 12 bits. And, as the system is of 32 bits.  
Therefore, the architecture of bits will be as follows: 
 As per the given convention, 
 X = minimum no of pages 
 Y = maximum no of pages 
 Coming to X, there will be a minimum of 3 pages and 
 and for Y, there will be 2 0 + 210 pages = 1 + 1024 = 
1025 pages. 
 Hence, the total number of pages i.e. X + Y = 1025 + 
3 = 1028.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following tasks is/are the 
responsibility/responsibilities of the memory 
management unit (MMU) in a system with paging -
based memory management?


- **(A)** Allocate a new page table for a newly created 
process

- **(B)** Translate a virtual address to a physical address 
using the page table

- **(C)** Raise a trap when a virtual address is not found 
in the page table

- **(D)** Raise a trap when a process tries to write to a 
page marked with read -only permission in the 
page table



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C, D


**Step-by-Step Explanation:**

As per the property and functions of the Memory 
Management Unit (MMU). 
         the correct options are B, C, and D.


</details>

---


### Q11. [GATE CSE - 2025 MCQ SET - 1(1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a memory management system that uses a 
page size of 2 KB. Assume that both the physical and 
virtual addresses start from 0. Assume that the pages 
0, 1, 2, and 3 are stored in the page frames 1, 3, 2, and 
0, respectively. The physical address (in d ecimal 
format) corresponding to the virtual address 2500 (in 
decimal format) is _________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6596


**Step-by-Step Explanation:**

The physical address corresponding to the virtual 
address 2500 (decimal) in this memory management 
system is 6596 (decimal). 
 This is determined by first identifying the virtual page 
number from the virtual address, which is page 1 
(since page size is 2KB = 2048 bytes, 2500/2048=1), 
and the offset within that page (2500 %2048 = 452). 
Since virtual page 1 maps to physical frame 3, the 
physical address is calculated as 3 * 2048 + 452 =


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two-dimensional array D in 
the C programming language, which is stored in 
row-major order: 
 int D[128][128]; 
 Demand paging is used for allocating memory and 
each physical page frame holds 512 elements of the 
array D. The Least Recently Used (LRU) page -
replacement policy is used by the operating system. 
A total of 30 physical page frames are allocat ed to 
a process that executes the following code snippet: 
 for (int i = 0; i < 128; i++) 
  for (int j = 0; j < 128; j++) 
   D[j][i] *= 10; 
 The number of page faults generated during the 
execution of this code snippet is


- **(A)** 2048

- **(B)** 512

- **(C)** 4096

- **(D)** 1032



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Given array,   
int D[128] [128] Page frame holds 512 elements of 
the array D. A total 30 physical page  
frames are allocated to a process that executes the 
following code snippet.   
for (int i = 0; i < 128; i++) 
 for (int j = 0; j < 128; j++) 
 D[j][i] *= 10; 
for each i, the loop executes 128 times. 
1  3  2   4    2    3   1   2   4     3  1  4 
H     H     H    H                    H                  H 
<!-- PAGE 350 -->
OPERATING SYSTEMS 
𝑖 = 0,1,2,3 Page 0 
Page 1 𝑖 = 4,5,6,7 
𝑖 = 116,117,118,119 Page 119 
 Since 30-page frames were allocated to the 
process.   
Each physical frame holds 512 elements.   
And array access is in column-major order.   
D[j] [i] * = 10   
The first 4 rows belong to one page.   
Since memory contains 30 page frames, and array 
contains 32 pages.   
Page required for array = 128/4=32  
No. of page fault = 128×32 = 4096


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with 57 -bit virtual 
addressing using multi -level tree -structured page 
tables with L levels for virtual to physical address 
translation. The page size is 4 KB (1 KB = 1024 B) 
and a page table entry at any of the levels occupies 
8 bytes.The value of L is.........


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

Given, 
 Virtual Address Space bits 57 bits 
 Page size  4KB = 12 bits 
 Page number (57-12) = 45 bits 
 Page table entry= 8 bytes. 
 Each page can contain = 4KB/8B = 29 page table 
entries. So, we need  
bits to index the page table. 
 So, the number of levels = 5 
-


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following statements is FALSE?


- **(A)** The TLB performs an associative search in 
parallel on all its valid entries using page 
number of incoming virtual address.

- **(B)** If the virtual address of a word given 
by CPU has a  TLB hit, but the subsequent 
search for the word results in a cache miss, 
then the word will always be present in the 
main memory.

- **(C)** The memory access  time using a given 
inverted page table is always same for all 
incoming virtual addresses.

- **(D)** In a system that uses hashed page tables, if 
two distinct virtual ddresses V1 and V2 map 
to the same value while hashing, then the 
memory access time of these a ddresses will 
not be the same.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

According to the explanation in Galvin's textbook, 
a Translation Lookaside Buffer (TLB) is a fast, 
associative memory structure. Each TLB entry 
consists of a key (also known as a tag) and a 
corresponding value. When a virtual address is 
given, the TLB comp ares the key portion with all 
stored entries in parallel. If a match is found, the 
related value is returned immediately. Therefore, 
Option A is TRUE. 
 The TLB holds only a limited number of page table 
entries. When a virtual address causes a TLB hit, 
the system can directly retrieve the frame number 
corresponding to the page number without going to 
the full page table. Even if the actual data is not found 
in the cache (cache miss), the main memory can still 
be accessed using the frame number obtained from 
the TLB. This guarantees access to the required word 
in main memory. Hence,  
 Option B is also TRUE. 
 In contrast, an Inverted Page Table uses frame 
numbers as indices, rather than page numbers as in 
traditional page tables. For a given virtual address, the 
system may have to search multiple entries to find a 
matching page, and sometimes even all entries —
especially when page entries for multiple processes 
share the same physical memory. This results in 
slower lookups in the worst case. Thus, memory 
access time can vary with different virtual addresses. 
Therefore,  
 Option C is FALSE, making it the correct answer. 
 In a system with hashed page tables, multiple virtual 
addresses can hash to the same value. In such cases, 
these entries are stored in a linked li st format. Since 
linked lists require sequential traversal, access time 
can vary depending on the position of the required 
item in the list. The best case is constant time if the 
item is first, while the worst case may take linear time. 
So, 
  Option D is TRUE.


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a demand paging system with four -page 
frames (initially empty) and an LRU page 
replacement policy. For the following page reference 
string 7, 2,7,3, 2,5,3, 4,6,7,7,1,5,6,1 the page fault 
rate, defined as the ratio of number of page faults to 
the number of memory accesses (rounded off to one 
decimal place) is_________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.6


**Step-by-Step Explanation:**

Reference 1 2 3 4 5 6 7 8 9 1
14 15 
Page 7 7 7 7 7 7 7 4 4 4 4 4 5 5 5 
Frame 1  2 2 2 2 2 2 2 6 6 6 6 6 6 6 
Frame 2   3 3 3 3 3 3 3 3 1 1 1 1 1 
Frame 3     5 5 5 5 7 7 7 7 7 7 7 
Page Fault F F H F H F H F F F H F F H H 
 Total page fault=9 
 Total access=15 
 thus, page fault rate =9/15=0.6 
 Least recently used - Page replacement algorithm.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In the context of the operating system, which of the 
following statemen ts is/are correct with respect to 
paging?


- **(A)** Paging helps solve the issue of external 
fragmentation.

- **(B)** Page size has no impact on internal 
fragmentation.

- **(C)** Multi-level paging is necessary to support 
pages of different sizes.

- **(D)** Paging incurs memory overheads.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, D


**Step-by-Step Explanation:**

Offset 
<!-- PAGE 351 -->
OPERATING SYSTEMS 
 Paging helps us to solve the issue of external 
fragmentation. 
 Paging incurs memory overheads.


</details>

---


### Q17. [GATE CSE - 2023 MCQ SET - 1(2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a three-level page table to translate a 39-bit 
virtual address to a physical address as shown below. 
 The page size is 4KB (1KB = 210 bytes) and page table 
entry size at every level is 8 bytes. A process P is 
currently using 2GB (1GB = 2 30 bytes) virtual 
memory which is mapped to 2GB of physical 
memory. The minimum amount of memory required 
for the page table of P across all levels is 
_______  KB


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4108


**Step-by-Step Explanation:**

Since process P is using 2 GB physical memory and 
page size 212 bytes. 
 So, Number of pages = 231 / 212 = 219 
 There are 29 entries per page table in 3rd level. 
 So, we need = 219/29 = 210 page tables in 3rd level 
 Now, it means 210 entries in 2nd level so number of 
page tables in 2ndlevel 210/29 = 2 
 page table  
 Now, in 1 st level we have 2 entries hence we need 
only 1 page table in 1st level. 
 Total number of page table = 2 10 + 2 + 1 = 1027 
page table 
 Each page table has 29 entries and each entry size is 
8 bytes. 
 So, total size of page table in bytes = 1027 × 2 9× 8 
bytes = 4108 KB


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider allocation of memory to a new process. 
Assume that none of the existing holes in the 
memory will exactly fit the process’s memory 
requirement. Hence, a new hole of smaller size will 
be created if allocation is made in any of the 
existing holes. Which one of the following 
statements is TRUE?


- **(A)** The hole created by the worst fit is always 
larger than the hole created by the first fit.

- **(B)** The hole created by best fit is never larger 
than the hole created by first fit.

- **(C)** The hole created by the first fit is always 
larger than the hole created by the next fit.

- **(D)** The hole created by the next fit is never 
larger than the hole created by the best fit.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
Option A: Again depends on the size of the 
first hole. It might happen the very first free 
hole is the worst possible hole. So in that 
case size of hole decided by worst fit = size of 
hole decided by first fit. Therefore, Option A is 
False. 
Option B: Best fit will always the give smallest 
possible hole. So, either the hole picked will 
be smaller than or equal to the other hole 
sizes. So, this is TRUE. 
Option C: Depends on the size of the first free 
hole. There is a very good chance that the 
size of the first hole is small than size of the 
size of the next hole. So, Option C is False. 
Option D: The next free hole might be the worst 
possible hole or it's size may be bigger than the 
hole picked by best fit. So, this is also False.


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a paging system that uses a 1 -level page 
table residing in main memory and a TLB for 
address translation. Each main memory access 
takes 100 ns and TLB lookup takes 20 ns. Each 
page transfer to/from the disk takes 5000 ns. 
Assume that the TLB hit ratio is 95%, page fault 
rate is 10%. Assume that for 20% of the total page 
faults, a dirty page has to be written back to disk 
before the required page is read in from disk. TLB 
update time is negligible. The average memory 
access time in ns (round off to 1 decimal place) is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 155 to 155.7


**Step-by-Step Explanation:**

 For all memory accesses in a system with virtual 
memory we need Virtual Address to Physical Address 
translation and this goes through TLB. 
 On TLB hit, we get the physical address. 
 On TLB miss, we have to do page table access which 
always resides in physical memory (no page fault 
possible here). 
   In the question it is given that a 1-level page table is 
used. So, TLB miss will need one physical memory 
access to get the physical address. 
  Question mentions page fault rate as 10% and this 
should default to 10 page faults every 100 memor y 
accesses. (Since TLB miss rate is 5% and for normal 
programs a TLB hit and page fault cannot happen 
for a memoryaccess (can happen for invalid 
memory accesses), it is also possible to consider 
page fault rate as 10% of all TLB misses. See the 
last part of the answer for this. 
 In the question page transfer time is given. This is 
different from page fault service time which includes 
the page transfer time + the memory access time as 
once the page is filled, a new memory access is 
initiated. 
 So, Average Memory Access Time Address 
Translation Time + Data Retrieval Time = TLB 
access time + TLB Miss ratio Page Table Access time 
+ Main memory access time+ Page fault rate (Page 
fill Time + Address Translation Time+ Main memory 
access time) + Dirty Page Rate Page Write Time 
 = 20+0.05 x 100+100+0.1x 
(5000+20+0.05×100+100)+0.1 x 0.2 × 5000 
20+5+100+512.5+100 737.5 ns 
 PS: If the question had given page fault service time 
also as 5000 answer will be 20+0.05 x 
100+0.9×100+0.1×5000+0.1×0.2x500025+90+500+
100=715 1s 
 "Assume that the TLB hit ratio is 95%, page fault rate 
is 10% 
 If this statement is changed to 
 "Assume that the TLB hit ratio is 95%, and when TLB 
miss happens page fault rate is 10%" 
<!-- PAGE 352 -->
OPERATING SYSTEMS 
 Average Memory Access Time =  Address 
Translation Time + Data Retrieval Time 
 = TLB access time + TLB Miss ratio × Page Table 
Access time+ Main memory access time+ Page 
fault rate × (Page fill Time + Address Translation 
Time+ Main memory access time) + Dirty Page 
Rate ×Page Write Time 
 20 + 0.05 × 100 + 100 + 0.05 × 0.1 × (5000 + 20 + 
0.05 × 100 + 100) + 0.05 × 0.1 × 0.2 × 5000 
 20 + 5 + 100 + 25.625 + 5  
 = 155.625  
 Ideally the answer key should be 715-738 due to the 
confusion in the meaning of page transfer time as 
most standard resources use page fault service time 
instead. 
 If we assume page fault rate is given "only when 
TLB miss happens answer should be 155-155.7


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Assume that in a certain computer, the virtual 
addresses are 64 bits long and the physical 
addresses are 48 bits long. The memory is word 
addressable. The page size is  8 kB and the word 
size is 4 bytes. The Translation Look -aside Buffer 
(TLB) in the address translation path has 128 valid 
entries. At most how many distinct virtual 
addresses can be translated without any TLB miss?


- **(A)** 8×220

- **(B)** 4×220

- **(C)** 16×210

- **(D)** 256×210



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

At most, the number of distinct virtual addresses 
translated without any TLB miss is calculated as 
follows: 
● Each TLB entry corresponds to one page. 
● Number of TLB entries = 128 = 27 
● Page size = 8 kB = 8 × 1024=213 bytes 
● Word size = 4 bytes 
● Number of words per page (page size in words) 
= 213/22=211 (since 4 bytes = 22 bytes) 
● Hence, total virtual addresses translated without 
TLB miss = number of T LB entries ×× number of 
words per page = 27×211 = 218 = 256×210 
 In decimal form, this is  256 × 1024 = 
262,144 virtual addresses.


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a process executing on an operating system 
that uses demand paging. The average time for a 
memory access in the system is M units if the 
corresponding memory page is available in memory 
and D units if the memory access causes a page fault. 
It has been experimentally measured that the average 
time taken for a memory access in the process is X 
units. 
 Which one of the following is the correct expression 
for the page fault rate experienced by the process?


- **(A)** (D-M)/(X-M)

- **(B)** (X-M)/(D-M)

- **(C)** (D-X)/(D-M)

- **(D)** (X-M)/(D-X)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Let the page fault rate be ‘P’ then, average memory 
access time 
 Average memory access time = (1− page fault rate) 
× memory access time when no page fault + Page 
fault rate × Memory access time when page fault. 
 X = (1 - P) M + D × P 
 X = M ∙ PM + DP 
 (X - M) = P (D - M) 
 ⇒ P = (X - M) / (D - M)


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Recall that Belady’s anomaly is that the page -fault 
rate may increase as the number of allocated frames 
increases. Now, consider the following statements: 
 S1: Random page replacement algorithm (where a 
page chosen at random is replaced) suffers from 
Belady’s anomaly 
 S2: LRU page replacement algorithm suffers from 
Belady’s anomaly 
 Which of the following is CORRECT?


- **(A)** S1 is true, S2 is true.

- **(B)** S1 is true, S2 is false.

- **(C)** S1 is false, S2 is true.

- **(D)** S1 is false, S2 is false.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Only fifo and fifo based algorithms suffer from 
belady's anomaly, Since random algorithm may 
follow fifo , hence it may suffer from belady's 
anomaly.


</details>

---


### Q23. [GATE CSE - 2020 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In which one of the following page replacement 
algorithms is it possible for the page fault  rate to 
increase even when the number of allocated frames 
increases?


- **(A)** LRU (Least Recently Used)

- **(B)** OPT (Optimal Page Replacement)

- **(C)** MRU (Most Recently Used)

- **(D)** FIFO (First In First Out)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In Belady’s anomaly is the phenomenon in which 
increasing the number of page frames results in an 
increase in the number of page faults for certain 
memory access patterns proves that while using the 
First in First Out (FIFO) page replacement algorithm 
it is possible to have more page faults when 
increasing the number of page frames. 
 In some situations, FIFO page replacement gives 
more page faults when increasing the number of page 
frames. 
 For example, if we consider reference string 3 2 1 0 3 
2 4 3 2 1 0 4 and 3 slots, we get 9 total page faults, 
but if we increase slots to 4, we get 10 page faults.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with ten physical 
page frames. The system is provided with an 
access sequence (a1, a2,........., a20, a1, a2, ...... a20), 
where each ai is a distinct virtual page number. 
The difference in the number of page faults 
between the last-in-ﬁrst-out page replacement 
policy and the optimal page replacement policy is 
__.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1


**Step-by-Step Explanation:**

Firstly, we can consider LIFO (Last In First Out) → 
 a1 to a10 will result in page faults = 10-page faults, 
 After that a 11 will replace a 10 (last in is a 10), 
a12 replaces a 11 and ...till a 20 = 10 -page faults will 
occur and a 20 will be at the top of the stack and 
a9…a1 are remained as such. 
 Then a1 to a9 are already present. 
 So, 0-page faults will be there from a1 to a9. 
 a10 will replace a20, a11 will replace a10 and so on = So 
11-page faults. 
 So, total faults will be 10+10+11 = 31. 
 Second Optimal Page Replacement Policy → 
 a1 to a10 = 10 page faults, 
<!-- PAGE 353 -->
OPERATING SYSTEMS 
 a11 will replace a10 because among a1 to a10, a10 will 
be used later, a 12 will replace a 11 and so on = 10 
page faults. 
 A20 will be top of stack and a9…a1 are remained as 
such. 
 A1 to a9 = 0 page fault. A10 will replace a1 because 
it will not be used afterwards and so on, a 10 to 
a19 will have 10 page faults. 
 So, no page fault for a20. 
 Total = 10+ 10 +10 = 30. 
 So, the difference between LIFO - Optimal = 1


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer system with 40 -bit virtual 
addressing and page size of sixteen kilobytes. If the 
computer system has a one-level page table per 
process and each page table entry requires 48 bits, 
then the size of the per -process page table is 
__________ megabytes.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 384


**Step-by-Step Explanation:**

Size of memory = 240 and Page size = 16 KB = 214 
 No. of pages = size of Memory / page size = 2 40/ 
214 = 226 
 Size of page table = 226 * 48 / 8 bytes = 226 * 6 B = 
384 MB


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a main memory with five page frames and 
the following sequence of page references: 3, 8, 2, 
3, 9, 1, 6, 3, 8, 9, 3, 6, 2, 1, 3. Which one of the 
following is true with respect to page replacement 
policies First -In-First Out (FIFO) and Least 
Recently Used (LRU)?


- **(A)** Both incur the same number of page faults

- **(B)** FIFO incurs 2 more page faults than LRU

- **(C)** LRU incurs 2 more page faults than FIFO

- **(D)** FIFO incurs 1 more page faults than LRU



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Given page reference sequence - 3, 8, 2, 3, 9, 1, 6, 
3, 8, 9, 3, 6, 2, 1, 3 
No of page faults=9


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider six memory partitions of size 200 KB, 
400 KB, 600 KB, 500 KB, 300  KB, and 250 KB, 
where KB refers to kilobyte. These partitions need 
to be allotted to four processes of sizes 357 KB, 210 
KB, 468 KB and 491 KB in that order. If the best 
fit algorithm is used, which partitions are NOT 
allotted to any process?


- **(A)** 200 KB and 300 KB

- **(B)** 200 KB and 250 KB

- **(C)** 250 KB and 300 KB

- **(D)** 300 KB and 400 KB



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Best fit allocates the smallest block among those 
that are large enough for the new process. So, the 
memory blocks are allocated in the following order: 
 357 ---> 400 
 210 ---> 250 
 468 ---> 500 
 491 ---> 600 
 So, the remaining blocks are of 300 KB and 200 KB


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer system implements a 40 -bit virtual 
address, page size of 8 kilobytes, and a 128 -entry 
translation look-aside buffer (TLB organized into 32 
sets each having four ways. Assume that the TLB tag 
does not store any process id. The minimum length of 
the TLB tag in bits is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 22


**Step-by-Step Explanation:**

TLB maps a virtual address to the physical address 
of the page. (The lower bits of page address (page 
offset bits) are not used in TLB as they are the same 
for virtual as well as physical addresses). Here, 
for 8KB page size we require 13 page offset bits. 
In TLB, we have 32 sets and so virtual address space 
is divided into 32 using 5 set bits. (Associativity 
doesn't affect the set bits as they just adds extra slots 
in each set). 
So, number of tag bits=40−5−13=22 bits.


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a system with byte-addressable memory, 32 
bit logical addresses, 4 kilobyte page size and page 
table entries of 4 bytes each. The size of the page table 
in the system in megabytes is ___________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Number of entries in page table 
 = 232 / 4KB = 220 
 Size of page table = (No. page table entries) * (Size 
of an entry)  
                   = 220 * 4 bytes  
                   = 222  
                   = 4 Megabytes


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer system implements 8 kilobyte pages and 
a 32-bit physical address space. Each page table entry 
contains a valid bit, a dirty bit, three permission bits, 
and the translation. If the maximum size of the page 
table of a process is 24 megabytes, the length of the 
virtual address supported by the syst em is ________ 
bits.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 36


**Step-by-Step Explanation:**

Given page size = 8KB = 213 B 
 PAS = 32 bit 
 ∴ No. of frames =PA/Page size = 232/ 213= 219 
 Also, it is given that each page table entry contains a 
valid bit, a dirty bit, 3 permission bits: 
 = 5 bits reserved 
 So, one Page table entry size is 
 = 19+5 = 24 bits = 3 bytes 
 Now, Page table size = No. of entries × Entry size 
 24 × 220 = No. of entries × 3 
 No. of entries = 8 × 220 = 223 
 ∴ Virtual Address size = No. of entries × Page size = 
223 × 213 = 236 
 ∴ Virtual Address Space = 36 bits 
<!-- PAGE 354 -->
OPERATING SYSTEMS


</details>

---


### Q31. [GATE CSE – 2016 NAT SET -1 (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the main memory system that consists of 8    
memory modules attached to the system bus, which is 
one word wide. When a write request is made, the bus 
is occupied for 100 ns by the data, address, and 
control signals. During the same 100 ns, and for 500 
ns thereafter, the addressed memory module executes 
one cycle accepting and storing the data. The internal 
operation of different memory modules may overlap 
in time, but only one request can be on the bus at any 
time. The maximum number of stores (of one word 
each) that can be initiated in 1 millisecond is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10000


**Step-by-Step Explanation:**

Bus is the bottleneck 
Each request occupies bus for 100 ns 
Total time = 1 ms = 106ns 
Number of stores = 106/100 = 10000


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A system uses 3 page frames for storing process 
pages in main memory. It uses the Least Recently 
Used (LRU) page replacement policy. Assume that 
all the page frames are initially empty. What is the 
total number of page faults that will occur while 
processing the page reference string given below? 
          4, 7, 6, 1, 7, 6, 1, 2, 7, 2


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

33. ANSWER:- D 
          Access pattern is strictly sequential over 100 pages 
with only 20 frames. Optimal will always evict the 
page that is farthest in future, which in this case 
behaves like evicting the most recently used page.


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer has twenty physical page frames which 
contain pages numbered 101 through 120. Now a 
program accesses the pages numbered 1, 2, …, 100 
in that order, and repeats the access sequence thrice. 
Which one of the following page replacement 
policies experiences the same number of page 
faults as the optimal page replacement policy for 
this program?


- **(A)** Least-recently-used

- **(B)** First-in-first-out

- **(C)** Last-in-first-out

- **(D)** Most-recently-used



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** d


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Assume that there are 3 page frames which are 
initially empty. If the page reference string is  
1, 2, 3, 4, 2, 1, 5, 3, 2, 4, 6  
the number of page faults using the optimal 
replacement policy is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

Simulate optimal: 
          1 Fault 
2 Fault 
3 Fault 
4 Fault (replace 3) 
2 hit 
1 hit 
5 Fault (replace 4) 
3 Fault (replace 5) 
2 hit 
4 Fault (replace 1) 
6 Fault (replace 3) 
          Total faults = 7


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider a paging hardware with a TLB. Assume 
that the entire page table and all the pages are in the 
physical memory. It takes 10 ms to search the TLB 
and 80 ms to access the physical memor y. If the 
TLB hit ratio is 0.6, the effective memory access 
time (in milliseconds) is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 122


**Step-by-Step Explanation:**

On hit: 10 + 80 = 90 
On miss: 10 + 80 + 80 = 170 
           EMAT = 0.6 × 90 + 0.4 × 170 
                  = 54 + 68 
                  = 122


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer uses 46 -bit virtual address, 32 -bit 
physical address, and a three -level paged page table 
organization. The page table base register stores the 
base address of the first -level table (T1), which 
occupies exactly one page. Each entry of T1 stores the 
base address of a page of the second-level table (T2). 
Each entry of T2 stores the base address of a page of 
the third-level table (T3). Each entry of T3 stores a 
page table entry (PTE). The PTE is 32 bits in size. 
The processor used in the computer has a 1 MB 16 -
way set associative virtually indexed physically 
tagged cache. The cache block size is 64 bytes.  
 What is the minimum number of page colors needed 
to guarantee that no two synonyms map to different 
sets in the processor cache of this computer?


- **(A)** 2

- **(B)** 4

- **(C)** 8

- **(D)** 16



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
 The cache is 1 MB, 16-way set associative, with 64-
byte blocks. 
 Number of cache sets = (Cache size) / (Block size* 
associativity) = 
64×16 =
210 = 210 = 1024 sets. 
 Virtual address = 46 bits, Physical address = 32 bits. 
 Page size calculated as 213 bytes = 8 KB (8192 bytes). 
 The index bits for cache set = 10 bits (since 1024 
sets). 
 Out of these indexing bits, 13 bits correspond to page 
offset, so the remaining bits contributing to cache 
indexing from the  virtual address result in 3 bits 
(16-13) that can cause synonyms to map to different 
sets. 
 So, we need 2 3 = 8 different page colors to ensure 
synonyms (different virtual pages mapping to the 
same physical page) don't map to different cache 
sets.


</details>

---


### Q37. [GATE CSE - 2014 NAT SET - 3(1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the virtual page reference string 1, 2, 3, 2, 4, 
1, 3, 2, 4, 1 On a demand paged virtual memory 
system running on a computer system that has a main 
memory size of 3 pages frames which are initially 
empty. Let LRU, FIFO and OPTIMAL denote the 
number of page faults under the corresponding page 
replacements policy. Then


- **(A)** OPTIMAL < LRU < FIFO

- **(B)** OPTIMAL < FIFO < LRU

- **(C)** OPTIMAL = LRU

- **(D)** OPTIMAL = FIFO



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

For FIFO: total no of page faults are 6 
(depicted in red) 
For optimal: total no of page faults are 5 
(depicted in red) 
For LRU: total no of page faults are 9 (depicted in 
red) 
The Optimal will be 5, FIFO 6 and LRU 9. so, 
OPTIMAL < FIFO  < LRU option (B) is 
correct answer. 
<!-- PAGE 355 -->
OPERATING SYSTEMS


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Let the page fault service time to 10 ms in a 
computer with average memory access time being 
20 ns. If one page fault is generated for every 10 6 
memory accesses, what is the effective access time 
for the memory?


- **(A)** 21 ns

- **(B)** 30 ns

- **(C)** 23 ns

- **(D)** 25ns



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

The effective memory access time (EAT) is 
calculated as: 
 Given: 
● Page fault service time S = 10ms = 10000000 ns 
● Memory access time ns m = 20 
● Page fault rate p = 
 Formula: 
 EAT = (1-p)m + pS 
 Substitute values: 
 EAT = (1 −
106) × 20 +
106 × 10, 000, 000 =
20 ×  0.999999 + 10 = 19.99998 + 10   
 Effective access time = 30ns


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A system uses FIFO policy for page replacement. It 
has 4 page frames with no pages loaded to begin 
with. The system first accesses 100 distinct pages 
in some order and then accesses the same 100 pages 
but now in the reverse order.  
 How many page faults will occur?


- **(A)** 196

- **(B)** 192

- **(C)** 197

- **(D)** 195



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The first 100 accesses cause 100 page faults. Page 
1 …….. Page 100 causes 100 faults 
Now, when they are accessed in reverse order page 
100, 99, 98, 97 are already present. So, we get a 
total of 196 page faults.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In which one of the following page replacement 
policies, Belady’s anomaly may occur?


- **(A)** FIFO

- **(B)** Optimal

- **(C)** LRU

- **(D)** MRU



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Only FIFO and FIFO based algo’s suffer from 
belady’s anomaly


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The essential content(s) in each entry of a page 
table is/are


- **(A)** virtual page number

- **(B)** page frame number

- **(C)** both virtual page number and page frame  
  number

- **(D)** access right information



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Virtual Page Number: 
The virtual page number (VPN) is not stored 
inside the page table entry. Instead, the VPN is 
used as an index to access the page table. 
 So option (A) is incorrect. 
 Page Frame Number: 
The main purpose of a page table entry (PTE) is to 
store the physical frame number corresponding to 
a virtual page. 
 Thus page frame number is essential. 
 So option (B) is correct. 
 Both VPN and PFN: 
Since VPN is used as an index and not stored in the 
entry, this is incorrect. 
 So option (C) is incorrect. 
 Access Right Information: 
Access bits (read/write/execute, valid bit, dirty bit 
etc.) are useful but not essential for the basic 
mapping function. 
 So option (D) is incorrect.


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A multilevel page table is preferred in comparison to 
a single level page table for translating virtual address 
to physical address because


- **(A)** it reduces the memory access time to read or 
write a memory location.

- **(B)** It helps to reduce the size of the page table 
needed to implement the virtual address space 
of a process.

- **(C)** it is required by the translation lookaside 
buffer.

- **(D)** it helps to reduce the number of page faults in 
page replacement algorithms



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

(B) it helps to reduce the size of page table needed to 
implement the virtual address space of a process. 
 (A) False → Multilevel paging increases access time. 
(B) True → Only required page table portions are 
allocated. 
(C) False → TLB works with any page table.  
(D) False → Paging structure does not affect page 
faults.


</details>

---


### Q43. [GATE CSE – 2011 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A processor uses: 
Physical address = 36 bits 
Virtual address = 32 bits 
Page size = 4 KB 
PTE size = 4 bytes 
 Three-level page table with: 
● bits 30–31 → 1st level index 
● bits 21–29 → 2nd level index 
● bits 12–20 → 3rd level index 
● bits 0–11 → offset 
 Find number of bits required in PTE to address the 
next level page table (or page frame) at first, second, 
and third levels respectively.


- **(A)** 20, 20 and 20

- **(B)** 24, 24 and 24

- **(C)** 24, 24 and 20

- **(D)** 25, 25 and 24



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Physical address = 36 bits 
Virtual address = 32 bits 
Page size = 4 KB = 212 
PTE size = 4 bytes 
Number of page frames = 236/212 = 224 
Frame number = 24 bits. 
Page number = 20 bits. 
Virtual address split: 
 2 bits → Level 1 
 9 bits → Level 2 
 9 bits → Level 3 
 12 bits → Offset 
The innermost page table refers to the actual page frame. 
Hence the innermost page table requires 24 bits in it's 
PTE. 
Now to index innermost page table we need 9 bits (given) 
So number of such innermost page tables possible in 
physical memory 
= 236/29 = 225 
Hence the second level page table requires 25 
bits in its PTE to refer to the next page table. 
Similarly the 3rd level page table requires 24 
bits in its PTE to refer to the next page table. 
Correct Answer: (D) 25, 25 and 24 
<!-- PAGE 356 -->
OPERATING SYSTEMS


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A virtual memory  system uses First In First Out 
(FIFO) page replacement policy and allocates a 
fixed number of frames to a process. Consider the 
following statements: 
 P: Increasing the number of page frames allocated 
to a process sometimes increases the page fault rate. 
 Q: Some programs do not exhibit locality of reference. 
 Which one of the following is TRUE?


- **(A)** Both P and Q are true, and Q is the reason for P.

- **(B)** Both P and Q are true, but Q is not the reason 
for P.

- **(C)** P is false, but Q is true.

- **(D)** Both P and Q are false.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Statement P: 
In FIFO page replacement, increasing the number 
of frames can sometimes increase the page fault 
rate. 
This phenomenon is called Belady’s Anomaly. 
 So, P is true. 
 Statement Q: 
Some programs do not exhibit locality of 
reference. 
Yes, certain access patterns (like cyclic references 
larger than frame size) may not show strong 
locality. 
 So, Q is true. 
 Is Q the reason for P? 
No. 
 Belady’s anomaly occurs due to the nature of FIFO 
replacement (it does not consider recency or 
optimality). 
It is a property of the algorithm its elf, not because 
programs lack locality. 
 Hence, Q is not the reason for P.


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A process has been allocated 3 page frames. 
Assume that none of the pages of the process are 
available in memory initially. 
 The process makes the following sequence of page 
references (reference string): 
 1, 2, 1, 3, 7, 4, 5, 6, 3, 1 
 If optimal page replacement policy is used, how 
many page faults occur for the above reference string?


- **(A)** 7

- **(B)** 8

- **(C)** 9

- **(D)** 10



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Optimal replacement policy means a page which is 
"farthest" in the future to be accessed will be 
replaced next. 
 3 initial page faults for pages 1,2,3 and 
then for pages 7,4,5,6⟹ 7 page faults 
occur.


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A process has been allocated 3 page frames. 
Assume that none of the pages of the process are 
available in memory initially. 
 The process makes the following sequence of page 
references (reference string): 
 1, 2, 1, 3, 7, 4, 5, 6, 3, 1 
 Least Recently Used (LRU) page replacement policy is 
a practical approximation to optimal page replacement. 
 For the above reference string, how many more 
page faults occur with LRU than with the optimal 
page replacement policy?


- **(A)** 0

- **(B)** 1

- **(C)** 2

- **(D)** 3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

LRU: 9 page faults 
1 2 1 3 7 4 5 6 3 1 
   3 3 3 5 5 5 1 
 2 2 2 7 7 7 6 6 6 
1 1 1 1 1 4 4 4 3 3 
F F × F F F F F F F 
 9-7 =2


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A CPU generates 32 -bit virtual addresses. The page 
size is 4 KB. The processor has a translation look -
aside buffer (TLB) which can hold a total of 128 page 
table entries and is 4 -way set associative. The 
minimum size of the TLB tag is


- **(A)** 11 bits

- **(B)** 13 bits

- **(C)** 15 bits

- **(D)** 20 bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** c


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A computer system supports 32 -bit virtual addresses 
as well as 32-bit physical addresses. Since the virtual 
address space is of the same size as the physical 
address space, the operating system designers decide 
to get rid of the virtual memory entirely. Which one 
of the following is true?


- **(A)** Efficient implementation of multi-user support 
is no longer possible

- **(B)** The processor cache organization can be made 
more efficient now

- **(C)** Hardware support for memory management is 
no longer needed

- **(D)** CPU scheduling can be made more efficient 
now



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

1.  Multi-user support requires isolation: 
 Virtual memory ensures process isolation, 
preventing one user/process from accessing 
another's memory 
 Without virtual memory, mernory isolation 
must rely entirely on physical address 
segmentation, which is less flexible and error-
prone. 
2. Security Risks: 
 No virtual memory = no memory protection 
mechanisms (like page permissions or 
protected address spaces) 
Other Options Analysis: 
 Option B: Cache efficiency doesn't inherently 
depend on the presence/absence of virtual 
memory. 
 Option C: Hardware support is still required 
(e.g., for segmentation or direct memory 
access). 
 Option D: CPU scheduling is unrelated to 
virtual memory


</details>

---


### Q49. [GATE CSE – 2007 MCQ (2-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Increasing the RAM of a computer typically improves 
performance because:


- **(A)** Virtual memory increases

- **(B)** Larger RAMs are faster

- **(C)** Fewer page faults occur

- **(D)** Fewer segmentation faults occur



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

With more RAM: 
● More pages can stay in memory 
● Fewer pages need to be swapped to disk 
● Page fault rate decreases 
 Hence fewer page faults occur 
<!-- PAGE 357 -->
File System and IO Scheduling 5


</details>

---



## Topic 5: Topic 5


### Q1. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hard disk with a rotational speed of 
15000 rpm. The time to move the read/write head 
from a track to its adjacent track is 1 millisecond. 
Initially, the head is on track 0. The number of 
sectors per track is 400, and the sector size is 1024 
bytes. 
 It is necessary to transfer data from 10 randomly 
located sectors in each of the following tracks in the 
order: 5, 12, and 7. 
 The total time for the data transfer (in milliseconds) 
from the hard disk is ______.  
(rounded off to one decimal place)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 77.3


**Step-by-Step Explanation:**

Rotational speed = 15000 rpm 
Tracks movement time = 1 ms per track 
Sectors per track = 400 
Tracks accessed = 5 → 12 → 7 
10 sectors read from each track 
 Rotation time: 
15000 rpm ⇒ 1 rotation = 60/15000 = 0.004 s = 4 
ms 
 Average rotational latency = 4/2 = 2 ms 
 Total sector accesses = 10 × 3 = 30 
 Total rotational delay = 30 × 2 = 60 ms 
 Transfer time: 
Time per sector = 4/400 = 0.01 ms 
 Transfer for 30 sectors = 30 × 0.01 = 0.3 ms 
 Seek time: 
0 → 5 = 5 tracks 
5 → 12 = 7 tracks 
12 → 7 = 5 tracks 
 Total movement = 17 tracks 
 Seek time = 17 × 1 = 17 ms 
 Total time: 
17 + 60 + 0.3 = 77.3 ms


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


To keep track of free blocks in a file system, one of 
the two approaches is generally used – using 
bitmaps (bit vectors) or using linked lists. Consider 
that the linked list approach is used to keep track of 
free blocks in a file system. 
 Assume that: 
● Disk size = 16 GB 
● Block size = 2 KB 
● Block numbers used are 32-bit long 
● A single pointer of size 4 bytes is used in 
each block of the list to point to the next block of 
the list 
 The number of blocks required to hold the free disk 
block numbers is ______. 
 Note: 
1K = 2¹⁰ and 1G = 2³⁰.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 16417


**Step-by-Step Explanation:**

Disk size = 16 GB = 16 × 2³⁰ bytes 
 Block size = 2 KB = 2 × 2¹⁰ = 2¹¹ bytes 
 Number of blocks = (16 × 2³⁰) / (2¹¹) 
 = 16 × 2¹⁹ 
 = 2⁴ × 2¹⁹ 
 = 2²³ 
 = 8,388,608 blocks 
 Each block number = 32 bits = 4 bytes 
 Total space needed for storing all block numbers: 
 = 8,388,608 × 4 bytes 
 = 33,554,432 bytes 
 = 32 MB 
 Block size = 2 KB = 2048 bytes 
 Each block stores: 
● 4 bytes → pointer to next block 
● Remaining space → block numbers 
 Remaining space: 2048 − 4 = 2044 bytes 
 Number of block numbers per block: 2044 / 4 = 511 
 Total block numbers = 8,388,608 
 Blocks needed = ceil(8,388,608 / 511) 
 = 16,417 
 Answer: 16,417 blocks


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A disk of size 512 M bytes is divided into blocks of 
64 K bytes. A file is stored in the disk using linked 
allocation. In linked allocation, each data block 
reserves 4 bytes to store the pointer to the next data 
block. The link part of the last data block contains a 
NULL pointer (also of 4 bytes). Suppose a file of 1 M 
bytes needs to be stored in the disk. Assume, 1 K = 
210and 1 M = 220. The amount of space in bytes that 
will be wasted due to internal fragmentation is 
______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 65468


**Step-by-Step Explanation:**

Block size = 216bytes 
Pointer = 4 bytes ⇒ usable data per block = 216 −
4 = 65532 
 File size = 220 = 1048576 
 Number of blocks = ⌈1048576/65532⌉ = 17 
 Data stored in 16 blocks = 16 × 65532 = 1048512 
Remaining = 1048576 − 1048512 = 64 
 Last block has 64 bytes data, rest wasted: 
 Wasted = 65532 − 64 = 65468


</details>

---


### Q4. [GATE CSE - 2026 NAT SET - 1(2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Suppose in a multiprogramming environment, the 
following C program segment is executed. A process 
goes into I/O queue whenever an I/O related 
operation is performed. Assume that there will always 
be a context switch whenever a process requests for 

```c
an I/O, and also whenever the process returns from an 
I/O. The number of times the process will enter the 
ready queue during its lifetime (not counting the time 
the process enters the ready queue when it is run 
initially) is ______ 
 Int main() 
{ 
     int x = 0, i = 0; 
     scanf("%d", &x); 
     for(i = 0; i < 20; i++) 
     { 
          x = x + 20; 
          printf("%d\n", x); 
     } 
     return 0; 
}
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 21


**Step-by-Step Explanation:**

scanf → 1 I/O 
printf inside loop → 20 I/O 
 Each I/O causes return to ready queue once 
 Total = 1 + 20 = 21


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk with the following specification s: 
rotation speed of 6000 RPM, average seek time of 
5 milliseconds, 500 sectors/track, 512-byte sectors. 
A file has content stored in 3000 sectors located 
randomly on the disk. Assuming average rotational 
latency, the total time (in seconds, rounded off to 2 
decimal places) to read the entire file from the disk is 
______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 30.06


**Step-by-Step Explanation:**

Rotation speed = 6000 RPM ⇒ 100 rotations/sec ⇒ 
1 rotation = 0.01 s 
Average rotational latency = 0.005 s 
 Time per sector transfer = 0.01 / 500 = 0.00002 s 
 For each sector (random): 
seek + latency + transfer = 0.005 + 0.005 + 0.00002 
= 0.01002 s 
 Total time = 3000 × 0.01002 = 30.06 s


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a 512 GB hard disk with 32 storage 
surfaces. There are 4096 sectors per track and each 
sector holds 1024 bytes of data. The number  of 
cylinders in the hard disk is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4096


**Step-by-Step Explanation:**

Total size = 512 × 230 
 Data per track = 4096 × 1024 = 212 × 210 = 222 
 Tracks per cylinder = 32 
<!-- PAGE 363 -->
OPERATING SYSTEMS 
 Data per cylinder = 32 × 222 = 25 × 222 = 227 
 Number of cylinders = 239/227 = 212 = 4096


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider two files systems  A and B, that use 
contiguous allocation and linked allocation, 
respectively. A file of size  100 blocks is already 
stored in A and also in B. Now, consider inserting 
a new block in the middle of the file 
(between 50th and 51st block), whose data is 
already available in the memory. Assume that there 
are enough free blocks at the end of the file and that 
the file control blocks are already in memory. L et 
the number of disk accesses required to insert a 
block in the middle of the file 
in A and B are  nA and nB, respectively, then the 
value of nA+nB is__________________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 153


**Step-by-Step Explanation:**

Fa: Contiguous allocation: 100 blocks (Array) 
Fs: Linked allocation: 100 blocks 
We have moved total data of 100 
 1. FA: 50*2 =100+1 (Total disk accesses) 
2. Contiguous Allocation can directly traverse to 
the 50th element as it is already given the file 
control blocks are already present. Now, we need 
50 operations to read the rest of the 50 elements 
and another 50 operations to write those 50 blocks 
and 1 operation is needed to write the new block. 
Therefore, total operations in this case (50+50+1) 
● Linked Allocation needs to traverse to the 
50th element. 
Now, simply change the pointers just like the 
Linked list where adding an element in the middle 
of it. 
So, here it takes ' 50 operations to read the first 50 
elements and 2 operations to change the pointer of 
the 50 th block and a new block. So, 52 operations 
in this case. 
 nB = 50+1+1 = 52 
 nA+nB = 101+52 = 153


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a linear list based directory 
implementation in a file system. Each directory is a 
list of nodes, where each node contains the file 
name along with the file metadata, such as the list 
of pointers to the data blocks. Consider a given 
directory foo. 
 Which of the following operations will necessarily 
require a full scan of foo for successful completion?


- **(A)** Creation of a new file in foo

- **(B)** Deletion of an existing file from foo

- **(C)** Renaming of an existing file in foo

- **(D)** Opening of an existing file in foo



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A,C


**Step-by-Step Explanation:**

Creation requires checking for duplicate name → 
full scan 
Renaming requires checking new name 
uniqueness → full scan 
Deletion and opening can stop once found


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider the following five disk access requests of 
the form (request id, cylinder number) that are present 
in the disk scheduler queue at a given time: 
 (P, 155), (Q, 85), (R, 110), (S, 30), (T, 115) 
 Assume the head is positioned at cylinder 100. The 
scheduler follows Shortest Seek Time First 
scheduling to service the requests. 
 Which one of the following statements is FALSE?


- **(A)** T is serviced before P.

- **(B)** Q is serviced after S, but before T.

- **(C)** The head reverses  its direction of  movement 
between servicing of Q and P.

- **(D)** R is serviced before P.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Consider the following five disk access requests of 
the form (request id, cylinder number): 
(P, 155), (Q, 85), (R, 110), (S, 30), (T, 115) 
 Head initially at 100. Using SSTF: 
 Distances from 100: 
R(110)=10, T(115)=15, Q(85)=15, P(155)=55, 
S(30)=70 
 Order: 
R → T → Q → S → P 
 Check statements: 
 (a) T before P → true 
        (b)  Q after S but before T → false (Q comes 
before  S and after T) 
        (c) Direction changes between Q and P → true (85 
→ 30 → 155) 
        (d) R before P → true


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The index node (inode) of a Unix-like file system has 
12 direct, one single-indirect and one double-indirect 
pointers. The disk block size is 4 kB, and the disk 
block address is 32-bits long. The maximum possible 
file size is (rounded off to 1 decimal place) ______ 
GB.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Given 12 direct, 1 single indirect, 1 double indirect 
pointers 
 Size of Disk block =4kB 
 Disk Block Address =32 bit =4B 
 Number of addresses/disk block= 4KB/4B = 210 
 Maximum possible file size= 12 × 4 kB + 210×4kB + 
210×210×4kB 
 =4.00395 GB≃4 GB 
 Hence 4GB is the correct answer.


</details>

---


### Q11. [GATE CSE - 2024 NAT SET - 1(2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The following are some events that occur after a 
device controller issues an interrupt while process L 
is under execution: 
 P. The processor pushes the process status of L onto 
the control stack 
Q. The processor finishes the execution of the 
current instruction 
R. The processor executes the interrupt service routine 
S. The processor pops the process status of L from 
the control stack 
T. The processor loads the new PC value based on 
the interrupt 
 Which of the following is the correct order in which 
the events above occur?


- **(A)** QPTRS

- **(B)** PTRSQ

- **(C)** TRPQS

- **(D)** QTPRS



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Execution flow: 
 Finish current instruction → Q 
Save state → P 
Load ISR address → T 
Execute ISR → R 
Restore state → S


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


In a file allocation system, which of the following 
allocation scheme(s) can be used if no external 
fragmentation is allowed? 
1. Contiguous  
2. Linked  
3. Indexed


- **(A)** 1 and 3 only

- **(B)** 2 only

- **(C)** 3 only

- **(D)** 2 and 3 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Contiguous allocation suffers from external 
fragmentation 
Linked and indexed do not


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a storage disk with 4 platters (numbered 
as 0, 1, 2 and 3), 200 cylinders (numbered as 0, 1, 
…, 199), and 256 sectors per track (numbered as 0, 
1, … 255). The following 6 disk requests of the  
form [sector number, cylinder number, platter 
number] are received by the disk controller at the 
same time: 
[120, 72, 2], [180, 134, 1], [60, 20, 0], [212, 86, 3], 
[56, 116, 2], [118, 16, 1] 
 Currently the head is positioned at sector number 
100 of cylind er 80, and is moving towards higher 
cylinder numbers. The average power dissipation in 
moving the head over 100 cylinders is 20 milliwatts 
and for reversing the direction of the head 
movement once is 15 milliwatts. Power dissipation 
associated with rotational latency and switching of 
head between different platters is negligible. 
 The total power consumption in milliwatts to 
satisfy all of the above disk requests using the 
Shortest Seek Time First disk scheduling algorithm 
is ______ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 85


**Step-by-Step Explanation:**

Head starts at 80. 
 In SSTF, Total Head movements = (86-80) + (86-72) 
+ (134-72) + (134-16) = 200 
 By 200 movements, Power dissipated: P1 = 0.2 * 200 
= 40 mW 
 In reversing head direction once, Power dissipated = 
15 mW 
 The total number of times head changes its direction 
= 3 
<!-- PAGE 364 -->
OPERATING SYSTEMS 
 In reversing head direction, power dissipated: P2 = 
3 * 15 = 45 mW 
 Total power consumption (in mW) is - 
 P1 + P2 = 40 mW + 45 mW = 85 Mw


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk queue with requests for I/O to 
blocks on cylinders 47, 38, 121, 191, 87, 11, 92, 10. 
The C -LOOK scheduling algorithm is used. The 
head is initially at cylinder number 63, moving 
towards larger cylinder numbers on it s servicing 
pass. The cylinders are numbered from 0 to 199. 
The total head movement (in number of cylinders) 
incurred while servicing these requests is 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 346


**Step-by-Step Explanation:**

I/O to blocks on cylinders 47, 38, 121, 191, 87, 11, 
92, 10. 
 The head is initially at cylinder number 63. 
 C-LOOK scheduling algorithm is used. 
 Firstly, we start from 63 and move further. 
 63 → 87 → 92 → 121 → 191 = 24 + 5 + 29 + 70 
movements = 128 
 191 → 10 movements = 181 
 10 → 11 → 38 → 47 = 1 + 27 + 9 movements = 37 
 Total = 128 + 181 + 37 = 346


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Suppose the following disk request sequence (track 
numbers) for a disk with 100 tracks is given: 45, 20, 
90, 10, 50, 60, 80, 25, 70. Assume that the initial 
position of the R/W head is on track 50. The 
additional distance that will be traversed by the R/W 
head when the Shortest Seek Time First (SSTF ) 
algorithm is used compared to the SCAN (Elevator) 
algorithm (assuming that SCAN algorithm moves 
towards 100 when it starts execution) is _________ 
tracks.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 10


**Step-by-Step Explanation:**

SCAN 
 ∴ Total head movements 
 = 5 + 15 + 10 + 10 + 65 + 5 + 10 + 10  
 = 130  
∴ Additional distance that will be traversed by R/W 
head is 
= 140 - 130 
= 10


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a typical disk that rotates at 15000 rotations 
per minute (RPM) and has a transfer rate of 50 ×
106bytes/sec. If the average seek time of the disk is 
twice the average rotational delay and the controller's 
transfer time is 10 times the disk transfer  time, the 
average time (in milliseconds) to read or write a 512-
byte sector of the disk is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6.1


**Step-by-Step Explanation:**

Rotation time = 60/15000 = 0.004s = 4 ms 
Average rotational delay = 2 ms 
Average seek time = 2 × 2 = 4 ms 
 Disk transfer time = 512/(50 × 106)≈ 0.00001024 
s ≈ 0.01024 ms 
Controller time = 10 × 0.01024 = 0.1024 ms 
 Total time = 4 + 2 + 0.01024 + 0.1024 ≈ 6.1 ms


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk pack with a seek time of 4 
milliseconds and rotational speed of 10000 rotations 
per minute (RPM). It has 600 sectors per track and 
each sector can store 512 bytes of data. Consider a file 
stored in the disk. The file contains 2000 sectors. 
Assume that every sector access necessitates a seek, 
and the average rotational latency for accessing each 
sector is half of the time for one complete rotation. 
The total time (in milliseconds) needed to read the 
entire file is ______


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 14020


**Step-by-Step Explanation:**

Rotation time = 60/10000 = 0.006s = 6 ms  
Average rotational latency = 3 ms 
 Transfer time per sector = 6/600 = 0.01ms 
 Time per sector = 4 + 3 + 0.01 = 7.01 ms 
 Total time = 2000 × 7.01 = 14020ms


</details>

---


### Q18. [GATE CSE - 2017 SET 2  MCQ (1-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A FAT (file allocation table) based file system is 
being used and the total overhead of each entry in the 
FAT is 4 bytes in size. Given a 100 × 10 6 bytes disk 
on which the file system is stored and data block size 
is 10 3 bytes, the maximum size of a file that can be 
stored on this disk in units of 10 6 bytes is 
____________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 99.6


**Step-by-Step Explanation:**

Disk block size is 103 
 Number of entries in FAT 
 = Total disk size/ disk block size 
 = 100 × 106 / 103 
 = 100 × 103 
 ∴ Total overhead = 100 × 103 × 4B 
 = 400 × 103 B 
 = 0.4 × 106 B 
 So, maximum size of file that can be stored in disk is, 
 Total disk size - Total overhead 
 = 100 × 106 - 0.4 × 106 
 = 99.6 × 106 B


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Suppose a disk has 201 cylinders, numbered from 
0 to 200. At some time the disk arm is at cylinder 
100, and there is a queue of disk access requests for 
cylinders 30, 85, 90, 100, 105, 110, 135 and 145. If 
Shortest-Seek Time First (SSTF) is being used for 
scheduling the disk access, the request for cylinder 
90 is serviced after servicing ____________ 
number of requests.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

After servicing three requests, 90 is serviced, i.e., 
 100 → 105 → 110 → 90 
 So, 3 is the correct answer as 90 is serviced after 100 
→ 105 → 110 → 90.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a hard disk with 16 recording surfaces (0–
15) having 16384 cylinders (0 –16383) and each 
cylinder contains 64 sectors (0 –63). Each sector 
stores 512 bytes. Data are organized cylinder -wise 
and the addressing format is (cylinder no., surface 
no., sector no.). A file of size 42797 KB is stored 
starting at disk location (1200, 9, 40). What is the 
cylinder number of the last sector of the file, if it is 
stored contiguously?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1284


**Step-by-Step Explanation:**

File size = 42797 × 1024bytes 
Sector size = 512 bytes ⇒ total sectors = 42797 ×
2 = 85594 
<!-- PAGE 365 -->
OPERATING SYSTEMS 
 Sectors per cylinder = 16 × 64 = 1024 
 Starting offset within cylinder = 9 × 64 + 40 =
 Total sectors from cylinder start = 616 +
85594 − 1 = 86209 
 Cylinders advanced = 86209/1024 ≈ 84 
 Final cylinder = 1200 + 84 = 1284


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A file system with 300 Gbyte disk uses a file 
descriptor with 8 direct block addresses, 1 indirect 
block address and 1 doubly indirect block address. 
The size of each disk block is 128 Bytes and the 
size of each disk block address is 8 Bytes. The 
maximum possible file size in this file system is


- **(A)** 3 KBytes

- **(B)** 35 KBytes

- **(C)** 280 Kbytes

- **(D)** dependent on the size of the disk



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

It is given data as the disk block is of size 128B. 
 One direct block addressing will be pointing to 8 
disk blocks = 8*128 B = 1 KB 
 Singly Indirect block addressing will be pointing to 
1 disk block which has 128/8 disc block addresses 
= (128/8)*128 B = 2 KB 
 Doubly indirect block addressing will be pointing 
to 1 disk block which has 128/8 addresses to disk  
blocks which has 128/8 addresses to disk blocks = 
16*16*128 B = 32 KB 
 Maximum file size possible = 1 KB + 2 KB + 32 
KB = 35 KB


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


An application loads 100 libraries at startup. Loading 
each library requires exactly one disk access. The 
seek time of the disk to a random location is given as 
10 ms. Rotational speed of disk is 6000 rpm. If all 100 
libraries are loaded from random locations on the 
disk, how long does it take to load all libraries? (The 
time to transfer data from the disk block once the head 
has been positioned at the start of  the block may be 
neglected.)


- **(A)** 0.50s

- **(B)** 1.50s

- **(C)** 1.25s

- **(D)** 1.00 s



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Rotation time = 60/6000 = 0.01s = 10 ms  
Average rotational latency = 5 ms 
 Time per access = 10 + 5 = 15 ms 
 Total time = 100 × 15 = 1500ms = 1.50 s


</details>

---


### Q23. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk system with 100 cylinders. The 
requests to access the cylinders occur in following 
sequence : 
 4, 34, 10, 7, 19, 73, 2, 15, 6, 20. 
 Assuming that the head is currently at cylinder 50, 
what is the time taken to satisfy all requests if it takes 
1 ms to move from one cylinder to adjacent one and 
the shortest seek time first policy is used ?


- **(A)** 95 ms

- **(B)** 119 ms

- **(C)** 233 ms

- **(D)** 276 ms



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Head = 50 
Requests = 4, 34, 10, 7, 19, 73, 2, 15, 6, 20 
Policy = SSTF 
1 cylinder movement = 1 ms 
 Order (SSTF): 
 50 → 34 → 20 → 19 → 15 → 10 → 7 → 6 → 4 → 
2 → 73 
 Total movement: 
 |50−34| = 16 
|34−20| = 14 
|20−19| = 1 
|19−15| = 4 
|15−10| = 5 
|10−7| = 3 
|7−6| = 1 
|6−4| = 2 
|4−2| = 2 
|2−73| = 71 
 Total = 119 ms


</details>

---


### Q24. [GATE CSE - 2014 NAT SET - 1(2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A hard disk has 63 sectors per track, 10 platters each 
with 2 recording surfaces and 1000 cylinders. The 
address of a sector is given as a triple (c,h,s), where c 
is the cylinder number, h is the surface number and s 
is the sector number. Thus, the 0th sector is addressed 
as ⟨0,0,0⟩, the 1st sector as ⟨0,0,1⟩, and so on. 
 The address ⟨400,16,29⟩ corresponds to sector 
number:


- **(A)** 505035

- **(B)** 505036

- **(C)** 505037

- **(D)** 505038



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Surfaces = 10 × 2 = 20 
Sectors per track = 63 
 Sector number formula: 
 Sector number = c × (surfaces × sectors) + h × sectors 
+ s 
 = 400 × (20 × 63) + 16 × 63 + 29 
 = 400 × 1260 + 1008 + 29 
 = 504000 + 1037 
 = 505037


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


A hard disk has 63 sectors per track, 10 platters 
each with 2 recording surfaces and 1000 cylinders. 
The address of a sector is given as a triple (c,h,s), 
where c is the cylinder number, h is the surface 
number and s is the sector number. Thus, the 0th 
sector is addressed as ⟨0,0,0⟩, the 1st sector as 
⟨0,0,1⟩, and so on. 
 The address of 1039ᵗʰ sector is


- **(A)** ⟨0,15,31⟩

- **(B)** ⟨0,16,30⟩

- **(C)** ⟨0,16,31⟩

- **(D)** ⟨0,17,31⟩



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Surfaces = 10 × 2 = 20 
Sectors per track = 63 
 Since 0th sector = ⟨0,0,0⟩, 
 Cylinder: 
 1039 ÷ (20×63) = 1039 ÷ 1260 = 0 
 h,s position: 
 1039 ÷ 63 = 16 remainder 31 
 h = 16 
s = 31 
 option C is correct


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


The data blocks of a very large file in the Unix file 
system are allocated using


- **(A)** contiguous allocation

- **(B)** linked allocation

- **(C)** indexed allocation

- **(D)** an extension of indexed allocation



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The Unix file system uses an i-node structure. 
 An i-node contains: 
● Direct block pointers 
● Single indirect pointer 
● Double indirect pointer 
● Triple indirect pointer 
 For very large files, the system uses multi -level 
indirect pointers (single, double, triple). This is not 
simple indexed allocation, but an extension of 
indexed allocation using multiple levels of indexing. 
 Hence, the correct answer is (D).


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


For a magnetic disk with concentric circular tracks, 
the seek latency is not linearly proportional to the 
seek distance due to


- **(A)** non-uniform distribution of requests

- **(B)** arm starting and stopping inertia

- **(C)** higher capacity of tracks on the periphery of  
  the platter

- **(D)** use of unfair arm scheduling policies



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Seek time consists of: 
● Acceleration phase (arm starts moving) 
● Constant velocity phase 
● Deceleration phase (arm stops) 
<!-- PAGE 366 -->
OPERATING SYSTEMS 
 Because of inertia, the disk arm must accelerate and 
decelerate. 
 For short seeks → most time is spent accelerating 
and decelerating. 
For long seeks → arm reaches higher speed and 
stays longer in constant velocity. 
 Hence, seek time is non-linear with respect to seek 
distance. 
 Options (A), (C), and (D) do not affect the physical 
seek time mechanism. 
 Therefore, the correct answer is (B).


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Consider a disk pack with 16 surfaces, 128 tracks per 
surface and 256 sectors per track. 512 bytes of data 
are stored in a bit serial manner in a sector. The 
capacity of  the disk pack and the number of bits 
required to specify a particular sector in the disk pack 
are respectively:


- **(A)** 256 Mbyte, 19 bits

- **(B)** 256 Mbyte, 28 bits

- **(C)** 512 Mbyte, 20 bits

- **(D)** 64 Gbyte, 28 bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Total sectors = 16 × 128 × 256 
                        =2⁴ × 2⁷ × 2⁸ = 2¹⁹ sectors 
 Total capacity: 
 Each sector stores 512 bytes 
 Total capacity = 2¹⁹ × 2⁹ bytes = 2²⁸ bytes 
 2²⁸ bytes = 256 Mbytes 
 Bits required to specify a sector: 
 Total sectors = 2¹⁹ 
 So, bits required = 19 bits 
 Correct option: (A)


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


What is the swap space in the disk used for?


- **(A)** Saving temporary HTML pages

- **(B)** Saving process data

- **(C)** Storing the super-block

- **(D)** Storing device drivers



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Swap space stores process pages (data, stack, heap) 
that are temporarily moved out of RAM.


</details>

---


### Q30. [GATE CSE - 2009 MCQ (2-MARKS]


> **Topic:** Topic 5 | **Marks:** 2 | **Difficulty:** Medium


Normally user programs are prevented from 
handling I/O directly by I/O instructions in them. 
For CPUs having explicit I/O instructions, such I/O 
protection is ensured by having the I/O instruction 
privileged. In a CPU with memory mapped I/O, 
there is no explicit I/O instruction. Which one of the 
following is true for a CPU with memory mapped 
I/O?


- **(A)** I/O protection is ensured by operating system 
routine(s)

- **(B)** I/O protection is ensured by a hardware trap

- **(C)** I/O protection is ensured during system 
configuration

- **(D)** I/O protection is not possible



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -  A


**Step-by-Step Explanation:**

In memory-mapped I/O, protection is enforced via 
memory protection (OS -controlled access to 
address space)


</details>

---

