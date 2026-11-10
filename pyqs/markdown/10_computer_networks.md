# Computer Networks


> **Subject:** Computer Networks  

> **Pages in Book:** 529–582  

> **Total Modules:** 4


## Topics in this Subject


## Topic 1: COMPUTER NETWORK


### Q1. [GATE CSE]


> **Topic:** COMPUTER NETWORK | **Marks:** 2 | **Difficulty:** Medium


Identify the ONE CORRECT matching between 
the OSI layers and their corresponding 
functionalities as shown.


- **(A)** -(I), (b)-(II), (c)-(III)

- **(B)** -(I), (b)-(III), (c)-(II)

- **(C)** -(II), (b)-(III), (c)-(I)

- **(D)** -(III), (b)-(II), (c)-(I)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
 Packet Routing is the responsibility of the 
Network Layer (a) (I). 
 Framing and error (bit level) handling is the 
responsibility of the Data Link Layer. Hence, (c) 
(II). 
 Host-to-Host communication (end -to-end 
Communication) is the responsibility of the 
Transport Layer (Practically). Hence, (b) (III). 
 Therefore, option B is correct.


</details>

---


### Q2. [GATE CSE]


> **Topic:** COMPUTER NETWORK | **Marks:** 2 | **Difficulty:** Medium


In the following pairs of OSI protocol layer/sub -
layer and its functionality, the INCORRECT pair is


- **(A)** Network layer and Routing

- **(B)** Data Link Layer and Bit synchronization

- **(C)** Transport layer and End -to-end process 
communication

- **(D)** Medium Access Control sub -layer and 
Channel sharing



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Explanation: 
 Option (A) is CORRECT: Routing is a primary 
responsibility of the Network Layer. 
OSI Layers Functionalities 
(a) Network layer (I) Packet routing 
(b) Transport layer (II) Framing and error handling 
(c) Datalink layer (III) Host to host communication 
GATE CSE - 2025 MCQ SET - 1(1-MARKS) 
GATE CSE - 2014 MCQ SET - 3(1-MARKS) 
GATE CSE - 2007 MCQ (1-MARKS) 
GATE CSE – 2013 MCQ (1-MARKS) 
<!-- PAGE 532 -->
COMPUTER NETWORK 
 Option (B) is INCORRECT: Bit synchronization is 
strictly a function of the Physical Layer, not the 
Data Link Layer. 
 Option (C) is CORRECT: The Transport Layer is 
responsible for managing end -to-end, process -to-
process communication. 
 Option (D) is CORRECT: It utilizes three main 
categories of protocols: Random Access, 
Controlled Access, and Channelized Access.


</details>

---


### Q3. [GATE CSE]


> **Topic:** COMPUTER NETWORK | **Marks:** 2 | **Difficulty:** Medium


Assume that source S and destination D are 
connected through two intermediate routers labeled 
R. Determine how many times each packet must 
visit the network layer and the data link layer 
during a transmission from S to D.


- **(A)** Network layer - 4 times and Data link layer - 4 
times

- **(B)** Network layer - 4 times and Data link layer - 3 
times

- **(C)** Network layer - 4 times and Data link layer - 6 
times

- **(D)** Network layer - 2 times and Data link layer - 6 
times



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation:


</details>

---


### Q4. [GATE CSE]


> **Topic:** COMPUTER NETWORK | **Marks:** 2 | **Difficulty:** Medium


In Ethernet, when Manchester encoding is used, the 
bit rate is:


- **(A)** Half the baud rate

- **(B)** Twice the baud rate

- **(C)** Same as the baud rate

- **(D)** None of the above



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Explanation: 
 In Manchester encoding, each bit is represented by 
two signal level changes (one transition per bit 
period). 
So, 
baud rate = 2 × bit rate 
⇒ bit rate = baud rate / 2  
<!-- PAGE 533 -->
DATA LINK LAYER


</details>

---



## Topic 2: Topic 2


### Q1. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a file of size 4 million bytes being 
transferred between two hosts connected via a path 
consisting of three consecutive links of bandwidth 
2 Mbps, 500 kbps, and 1 Mbps, respectively. 
 All processing delays and propagation delays are 
negligible. Assume there is no other background 
traffic over the path and no additional overhead to 
transfer the file. 
 Which one of the following is the total time  
 (in seconds) to transfer the file? 
 Note: 1M = 10⁶, 1k = 10³


- **(A)** 731

- **(B)** 64

- **(C)** 8

- **(D)** 16



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

File size in bits: 
4 million bytes = 4 × 10⁶ bytes 
Hosts Port 
H1, H2, H3, H4 3 
H5, H6, H9, H10 1 
H7, H8, H11, H12 2 
Hosts Port 
H1, H2 4 
H3, H4 3 
H5, H6 1 
H7, H8, H9, H10, H11, H12 2 
Hosts Port 
H3, H4 3 
H5, H6, H9, H10 1 
H1, H2 4 
H7, H8, H11, H12 2 
Hosts Port 
H1, H2, H3, H4 3 
H5, H7, H9, H10 1 
H7, H8, H11, H12 4 
GATE CSE – 2006 MCQ (2-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (1-MARKS) 
GATE CSE – 2005 MCQ (2-MARKS) 
<!-- PAGE 541 -->
COMPUTER NETWORK 
= 4 × 10⁶ × 8 bits 
= 32 × 10⁶ bits 
 Bottleneck bandwidth: 
Link rates: 
2 Mbps = 2 × 10⁶ bps 
500 kbps = 5 × 10⁵ bps 
1 Mbps = 1 × 10⁶ bps 
 Minimum bandwidth = 500 kbps = 5 × 10⁵ bps 
 Total transfer time: 
For a large continuous transfer across multiple 
links, throughput is limited by the bottleneck 
link. 
 Time = File size / Bottleneck rate 
 time = (32 × 10⁶) / (5 × 10⁵) 
time = 64 seconds


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the implementation of a sliding window 
protocol over a lossless link, with a window size of 
W frames, where each frame is of size 1000 bits 
(including header). 
 The bandwidth of the link is 100 kbps (1k = 10³) 
and the one -way propagation delay is 100 
milliseconds. Assume that processing times at the 
sender and receiver are zero and the transmission 
time of acknowledgements is also zero. 
 Which one of the following opt ions gives the 
minimum size of W (in number of frames) required 
to achieve 100% link utilization?


- **(A)** 10

- **(B)** 21

- **(C)** 20

- **(D)** 11



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

For 100% utilization in sliding window: 
 W ≥ 1 + 2a 
 where 
 a = propagation delay / transmission delay 
 Transmission delay: 
 Frame size / bandwidth 
= 1000 / (100 × 10³) 
= 0.01 s 
= 10 ms 
 Propagation delay: 
 100 ms 
 a = 100 / 10 = 10 
 Window size: 
 W ≥ 1 + 2a 
W ≥ 1 + 20 
W ≥ 21 
 Minimum W = 21


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose we are transmitting frames between two 
nodes using Stop -and-Wait protocol. 
The frame size is 3000 bits. The transmission rate of 
the channel is 2000 bps (bits per second) and the 
propagation delay between the two nodes is 100 
milliseconds. Assume that the processing times at the 
source and destination are negligible. Al so, assume 
that the size of the acknowledgment packet is 
negligible. Which ONE of the following most 
accurately gives the channel utilization for the above 
scenario in percentage?


- **(A)** 88.23

- **(B)** 93.75

- **(C)** 85.44

- **(D)** 66.67



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

 Frame size 3000 bits 
 Transmission rate = 2000 bps 
 Propagation delay (T) = 100 milliseconds 
 The formula for channel utilization is: 
 Channel utilization 
𝑇𝑑𝑎𝑡𝑎
𝑇𝑑𝑎𝑡𝑎+2𝑇𝑝
× 100T 
 Where:  
 𝑇𝑑𝑎𝑡𝑎 =  
𝐹𝑟𝑎𝑚𝑒 𝑠𝑖𝑧𝑒 
𝑇𝑟𝑎𝑛𝑚𝑖𝑠𝑠𝑖𝑜𝑛 𝑟𝑎𝑡𝑒 =
300𝑏𝑖𝑡𝑠
2000 𝑏𝑝𝑠 = 1.5 𝑠𝑒𝑐. 
 So, the channel utilization becomes:  
 Channel utilization = 
1.5
1.5
+2×01
× 100 =
1.5
1.7 × 100  
 = 88.23


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider an Ethernet segment with a transmission 
speed of 108 bits/sec and a maximum segment length 
of 500 meters. If the maximum speed of propagation 
of the signal in the medium is 2×108 meters/sec, then 
the minimum frame size (in bits) required for 
collision detection is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 500


**Step-by-Step Explanation:**

Bw = 108 bits/sec 
 D = 500 m 
 V = 2 × 108 m/sec  
 For ethernet, 
 Tt >= 2 . Tp 
 where T t is transmission time and T p is propagation 
time  
 ⇒
𝑓𝑠
𝐵𝑤 ≥ 2 ×
𝑑
𝑣 
 ⇒ 𝑓𝑠 ≥ 2 ×
𝑑
𝑣 × 𝐵𝑤  
 ⇒ 𝑓𝑠 ≥ 2 ×
500 𝑚
2×108 𝑚/𝑠𝑒𝑐 × 108bits/sec 
 ⇒ 𝑓𝑠 ≥ 500 bits  
∴ 𝑓𝑠 𝑚𝑖𝑛 = 500 𝑏𝑖𝑡


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose two hosts are connected by a point -to-point 
link and they are configured to use Stop -and-Wait 
protocol for reliable data transfer. Identify in which 
one of the following scenarios, the utilization of the 
link is the lowest.


- **(A)** Longer link length and lower transmission rate

- **(B)** Longer link length and higher transmission rate

- **(C)** Shorter link length and lower transmission rate

- **(D)** Shorter link length and higher transmission rate



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Utilisation of Link = Efficiency 
 Efficiency of Stop and wait protocol is  
  𝜂 =  (
1 + (
2𝑇{𝑝}
𝑇{𝑡} )
)  =  (
1 + (2 ∗ 𝑑𝐵𝑣𝐿 ))  
 where d = link length (distance), v = speed, B = 
bandwidth (Transmission Rate) and L = packet 
Length 
 As Efficiency 𝜂 is inversely proportional to distance 
d, So Longer Distance means lower efficiency.  
 As Efficiency 𝜂  is also inversely proportional to  
Bandwidth B, So Higher Bandwidth means lower 
efficiency. 
 Hence option B is correct.


</details>

---


### Q6. [GATE CSE - 2026 MCQ SET - 1(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 100 Mbps link between an earth station 
(sender) and a satellite (receiver) at an altitude of


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7.08


**Step-by-Step Explanation:**

Bandwidth (Bw) = 100 Mbps 
 distance (d) = 2100Km = 2100 × 103 m 
 velocity (v) = 3 × 108  m / s 
 packet size (L) = 1000 bytes = 8000 bits 
 Here, sender is station and receiver is satellite 
 So, Total time = Transmission time + Propagation 
time 
 Transmission time = 
𝐿
𝐵𝑤 = 
800 𝑏
100×105𝑏/𝑠𝑒𝑐 =0.08 ms 
 Propagation time ms = 
𝑑
𝑣 = 
2100×103
3×108 𝑚/𝑠𝑒𝑐 = 7 
 ∴ Total time = 0.08 + 7 = 7.08 ms


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the cyclic redundancy check (CRC) based 
error detecting scheme having the generator 
polynomial x3+x+1. Suppose the message 
m4m3m2m1m0=11000 is to be transmitted. Check 
bits c2c1c0 are appended at the end of the message 
by the transmitter using the above CRC scheme. 
The transmitted bit string is denoted by 
m4m3m2m1m0c2c1c0. The value of the check bit  
sequence c2c1c0 is:


- **(A)** 110

- **(B)** 111

- **(C)** 100

- **(D)** 101



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The given polynomial z³ + z + 1 is written as 1011, 
which consists of 4 bits so, append 3 bits of Os to the 
message. 
 M = 11000000 
<!-- PAGE 542 -->
COMPUTER NETWORK 
 There the check bits sequence is 100.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Assume that a 12-bit Hamming codeword 
consisting of 8-bit data and 4 check bits is 
d8d7d6d5c8d4d3d2c4d1c2c1, where the data 
bits and the check bits are given in the 
following tables: 
Data Bits d8 d7 d6 d5 d4 d3 d2 d1 
 1 1 0 x 0 1 0 1 
Check Bits c8 c4 c2 c1 
 y 0 1 0 
 Which one of the following choices gives the 
correct values of x and y?


- **(A)** x is 0 and y is 0

- **(B)** x is 0 and y is 1

- **(C)** x is 1 and y is 0

- **(D)** x is 1 and y is 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

𝑐1 = 𝑑11 ⊕ 𝑑9 ⊕ 𝑑7 ⊕ 𝑑5 ⊕ 𝑑3 
For even parity, the total modulo-2 sum of 
the check bit and its associated data bits 
must equal 0 : 
         𝑐1 ⊕ 𝑑11 ⊕ 𝑑9 ⊕ 𝑑7 ⊕ 𝑑5 ⊕ 𝑑3 = 0 (mod2) 
Substitute the known values from the tables: 
0 ⊕ 1 ⊕ 𝑥 ⊕ 0 ⊕ 0 ⊕ 1 = 0 (mod2) 
         Simplify the numbers (remembering that 1 ⊕ 1 = 0 ): 
0 ⊕ 𝑥 = 0 (mod2) 
 𝑐8 = 𝑑12 ⊕ 𝑑11 ⊕ 𝑑10 ⊕ 𝑑9 
For even parity, the total modulo-2 sum of 𝑐8 
and these data bits must equal 0 : 
𝑐8 ⊕ 𝑑12 ⊕ 𝑑11 ⊕ 𝑑10 ⊕ 𝑑9 = 0 (mod2) 
Substitute the known values, including 𝑐8 =
          𝑦 and the value of 𝑥 = 0 we just calculated: 
𝑦 ⊕ 1 ⊕ 1 ⊕ 0 ⊕ 0 = 0 (mod2) 
       Simplify the expression: 
𝑦 ⊕ 0 = 0 (mod2) 
𝐲 = 𝟎


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the sliding window flow -control protocol 
operating between a sender and a receiver over a full-
duplex error-free link.  
 Assume the following: 
 The time taken for processing the data frame by 
the receiver is negligible. 
 The time taken for processing the 
acknowledgement frame by the sender is 
negligible. 
 The sender has an infinite number of frames 
available for transmission. 
 The size of the data frame is 2000 bits, and the size 
of the acknowledgement frame is 10 bits. 
 The link data rate in each direction is 1 Mbps (= 
106 bits per second). 
 One-way propagation delay of the link is 100 
milliseconds. 
 The minimum value of the sender’s window size in 
terms of the number of frames, (rounded to the 
nearest integer) needed to achieve a link utilization of 
50% is _______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 51


**Step-by-Step Explanation:**

The time taken for a packet (Tt(packet)): 
 Tt(packet)=L/B.W=2000 bits/106 bps=2×10−3 sec=
2 msec 
 The time taken for an acknowledgement 
(Tt(Ack)): 
 Tt(Ack) = 10 bits/106 bps = 
10−5 sec=10−2 msec=0.01 msec 
 Tp=100 msec 
 The total time (Total time): 
 Totaltime=Tt(packet)+2*Tp+Tt(Ack)=2 msec+20
0 msec+0.01 msec=202.01  
 Efficiency Calculation: 
 Efficiency (e) = useful time/total time 
                    e = n* Tt(packet)/( Totaltime) 
                0.5 <= n*2/202.01  
                    n >= 0.5*202.01/2 >= 101.005/2 >=50.5025 
 hence the window size is 51.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a network using the pure ALOHA medium 
access control protocol, where each frame is of length 
1,000 bits. The channel transmission rate is 
1Mbps(= 106  bits per second). The aggregate 
number of transmissions across all the nodes 
(including new frame transmissions and retransmitted 
frames due to collisions) is modelled as a Poisson 
process with a rate of 1,000 frames per second. 
Throughput is defined as the average number of 
frames successfully transmitted per second. The 
throughput of the network (roun ded to the nearest 
integer) is ____________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 135


**Step-by-Step Explanation:**

Frame length = 1000 bits 
Transmission rate = 1 Mbps = 10⁶ bits/sec 
Arrival rate λ = 1000 frames/sec 
Step 1: Frame transmission time (T): 
T = frame length / transmission rate 
T = 1000 / 10⁶ = 0.001 sec 
Step 2: Offered load (G): 
G = λ × T 
G = 1000 × 0.001 = 1 
Step 3: Throughput formula for Pure ALOHA: 
S = G e^(−2G) 
S = 1 × e^(−2) ≈ 0.1353 
(This is in frames per frame-time) 
Step 4: Convert to frames per second: 
Throughput = S / T 
Throughput = 0.1353 / 0.001 ≈ 135.3


</details>

---


### Q11. [GATE CSE – 2021 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a simple communication system where 
multiple nodes are connected by a shared broadcast 
medium (like Ethernet or wireless).  
 The nodes in the system use the following carrier -
sense based medium access protocol.  
 A node that receives a packet to transmit will carrier-
sense the medium for 5 units of time.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 50


**Step-by-Step Explanation:**

At time t=0, station P starts transmitting packet (since 
it already senses the channel is free). At the same 
time, station Q is sensing the channel to check if the 
channel is free or not. 
 To avoid collision: 
 Sensing of node Q ≥ Transmitting a packet  
i.e., if the channel is found free at 5 unit time or more 
than 5 unit time, station Q data will be collied with 
station P anywhere in the middle. 
 So, the distance between P and Q = sensing of node 
Q ≥ transmitting a packet. 
 d=5 time unit 
 d=5 unit × 10 meter/unit 
 d=50 meter 
 Note: The idea is simple, the 1st bit of node P data 
reaches node Q within 5 time units or at exact 5 time 
unit, then node Q understands that someone is 
transmitting the data and waits for the next time unit 
to sense the channel is free or not.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a binary code that consists of  only four 
valid codewords as given below:  
00000, 01011, 10101, 11110. 
 Let the minimum Hamming distance of the code be 
p and the maximum number of erroneous bits that 
can be corrected by the code be q. Then the values 
of p and q are:


- **(A)** p=3 and q=1

- **(B)** p=3 and q=2

- **(C)** p=4 and q=1

- **(D)** p=4 and q=2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

code1: 00000, code2: 01011, code3: 10101, code4: 
 Hamming distance = min of all Hamming distances. 
 Which is 3 between code1 and code2, so p=3. 
 Now to correct d bit error we need Hamming distance 
= 2d+1. 
 So, 2d+1=3 will give d=1.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A computer network uses polynomials over GF(2) 
for error checking with 8 bits as information bits 
and uses x 3+x+1 as the generator polynomial to 
generate the check bits. In this network, the 
message 01011011 is transmitted as:


- **(A)** 01011011010

- **(B)** 01011011011

- **(C)** 01011011101

- **(D)** 01011011100



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The generator polynomial has degree 3. So, we 
append 3 zeroes to the original message.  
<!-- PAGE 543 -->
COMPUTER NETWORK


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The values of parameters for the Stop-and-Wait ARQ 
protocol are as given below: 
 Bit rate of the transmission channel = 1 Mbps. 
 Propagation delay from sender to receiver = 0.75 
ms. 
 Time to process a frame = 0.25 ms. 
 Number of bytes in the information frame = 1980. 
 Number of bytes in the acknowledge frame = 20. 
 Number of overhead bytes in the information 
frame = 20. 
 Assume that there are no transmission errors. Then, 
the transmission efficiency (expressed in percentage) 
of the Stop -and-Wait ARQ protocol for the above 
parameters is ______ (correct to 2 decimal places).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 86.5-89.5


**Step-by-Step Explanation:**

Processing time of frame = 0.25 msec 
 Transmission time of data = 
𝐷𝑎𝑡𝑎 𝑠𝑖𝑧𝑒
𝐵𝑎𝑛𝑑𝑤𝑖𝑑𝑡ℎ 
(1980+20)𝑏𝑦𝑡𝑒𝑠
106 𝑏𝑖𝑡𝑠/𝑠𝑒𝑐 =16 msec 
 Propagation time = 0.75 msec 
 Transmission time of ACK 
20×8 𝑏𝑖𝑡𝑠
106 𝑏𝑖𝑡/𝑠𝑒𝑐  = 0.16 msec 
 Transmission efficiency of Stop-and-Wait ARQ 
0.25+16+1.5+0.16 =
17.91 × 100 = 89.33%


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider two hosts X and Y ，connected by a single 
direct link of rate 106  bits /sec  ． The distance 
between the two hosts is 10,000 km  and the 
propagation speed along the link is 2 × 108 m/sec 
．Host X sends a file of 50,000 bytes as one large 
message to host Y  continuously ． Let the 
transmission and propagation delays be p 
milliseconds and q milliseconds respectively．Then 
the value of p and q are:


- **(A)** p = 50 and q = 100

- **(B)** p = 50 and q = 400

- **(C)** p = 100 and q = 50

- **(D)** p = 400 and q = 50



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

• Transmission time =  
𝐷𝑎𝑡𝑎 𝑠𝑖𝑧𝑒
𝐵𝑟𝑎𝑛𝑑 𝑤𝑖𝑑𝑡ℎ  
 =
50000 × 8 𝑏𝑖𝑡𝑠
106 𝑏𝑖𝑡𝑠/𝑠𝑒𝑐 = 400 𝑚𝑠𝑒𝑐 
 • Propagation time = 
𝐷𝑖𝑠𝑡𝑎𝑛𝑐𝑒 
𝑉𝑒𝑙𝑜𝑐𝑖𝑡𝑦  
 =
10000 ×103 𝑚
2×108 𝑚 /𝑠𝑒𝑐 = 50 × 10−8 sec = 50 𝑚𝑠𝑒𝑐


</details>

---


### Q16. [GATE CSE – 2017 MCQ SET - 2(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a 128×10 3 bits/second satellite 
communication link with one-way propagation delay 
of 150 milliseconds. Selective retransmission (repeat) 
protocol is used on this link to send data with a frame 
size of 1 kilobyte. Neglect the transmission time of 
acknowledgment. The  minimum number of bits 
required for the sequence number field to achieve 
100% utilization is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

BW= 128 × 103 bits/sec 
 L=1KB=1 × 103 × 8 bits  
 Tp = 150 m sec  
 𝜂 = 100% 
 Tt = 
𝐿
𝐵𝑊 =  
1×103×8
128 ×10  = 0.0625 sec = 62.5 msec  
 a = 
𝑇𝑝
𝑇𝑡
 = 
62.5 = 2.4 
 𝜂 =
𝑁
1 + 2𝑎  =  1 =>
𝑁
1+2×2.4  = 1 => 𝑁 = 5.8 
 ∴ Ws = Wr = 6 
 Available Sequence Number ≥  12  
 Min No. of bits required 4 bits


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A sender uses the Stop-and-Wait ARQ protocol for 
reliable transmission of frames. Frames are of size 
1000 bytes and the transmission rate at the sender 
is 80 Kbps (1 Kbps = 1000 bits/second). Size of an 
acknowledgment is 100 bytes and the transmission 
rate at the receiver is 8 Kbps. The one -way 
propagation delay is 100 milliseconds. Assuming 
no frame is l ost, the sender throughput is 
__________ bytes/second.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 2500


**Step-by-Step Explanation:**

Sender Throughput = Data/Total Time 
 = 1000 bytes/(0.1+0.1+0.1+0.1) 
 = 2500 bytes/sec


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A network has a data transmission bandwidth of 
20×106 bits per second. It uses CSMA/CD in the 
MAC layer. The maximum signal propagation time 
from one node to another node is 40 microseconds. 
The minimum size of a frame in the network is 
______ bytes.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 200


**Step-by-Step Explanation:**

because bandwidth is 20*106 bits 
L=2* propagation delay * bw 
L = 2* (40/106) * 20*106 
L = 1600 bits(because of bandwidth in bits) 
L=1600/8 
L=200 Bytes


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In an Ethernet local area network, which one of the 
following statements is TRUE?


- **(A)** A station stops to sense the channel once it 
starts transmitting a frame.

- **(B)** The purpose of the jamming signal is to pad 
the frames that are smaller than the minimum 
frame size.

- **(C)** A station continues to transmit the packet 
even after the collision is detected.

- **(D)** The exponential backoff mechanism reduces 
the probability of collision on 
retransmissions



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

exponential backoff of algorithm reduces the 
probability of collision in next iteration.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a CSMA/CD network that transmits data 
at a rate of 100 Mbps (108 bits per second) over a 1 
km (kilometer) cable with no repeaters. If the 
minimum frame size required for this network is 
1250 bytes, what is the signal speed (km/sec) in the 
cable?


- **(A)** 8000

- **(B)** 10000

- **(C)** 16000

- **(D)** 20000



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

bandwidth ,b=100 Mbps 
distance , d= 1km 
no repeaters 
I = 1250 * 8 bits 
tf >= 2tp 
I/b >= 2∗ d/v 
v = 2 * 1000 * 100,000000/(1250 ∗8) 
v = 20000 km/sec


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a LAN with four nodes S1,S2,S3,S4 . Time 
is divided into fixed-size slots, and a node can begin 
its transmission only at the beginning of a slot. A 
collision is said to have occurred if more than one 
node transmits in the same slot. The probabilit ies of 
generation of a frame in a time slot by S1,S2,S3 and 
S4 are 0.1, 0.2, 0.3, and 0.4, respectively. The 
probability of sending a frame in the first slot without 
any collision by any of these four stations is 
__________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.4404


**Step-by-Step Explanation:**

The probability of sending a frame in the first slot 
without any collision by any of these four stations is 
sum of following 4 probabilities 
Probability that S1 sends a frame and no one else 
does + Probability thatS2 sends a frame and no one 
else does + Probability thatS3 sends a frame and no 
one else does + 
Probability thatS4 sends a frame and no one else 
does 
= 0.1 * (1 - 0.2) * (1 - 0.3) *(1 - 0.4) + (1 -0.1) * 0.2 
* (1 - 0.3) *(1 - 0.4) + (1 -0.1) * (1 - 0.2) * 0.3 *(1 - 
0.4) + (1 -0.1) * (1 - 0.2) * (1 - 0.3) * 0.4 
= 0.4404


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A link has a transmission speed of 10⁶ bits/sec. It uses 
data packets of size 1000 bytes each. Assume that the 
acknowledgment has negligible transmission delay, 
and that its propagation delay is the same as the data 
propagation delay. Also assume that the processing 
delays at nodes are negligible. The efficiency of the 
stop-and-wait protocol in this setup is exactly 25%. 
The value of the one -way propagation delay (in 
milliseconds) is:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 12


**Step-by-Step Explanation:**

Efficiency of Stop & Wait = 1/1+2a 
 0.25=1/1+2a 
 a=Pd/td, td=8 ms 
 => Pd=12 ms


</details>

---


### Q23. [GATE CSE – 2016 NAT SET - 1(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Two hosts are connected via a packet switch with 10⁷ 
bits per second links. Each link has a propagation 
delay of 20 microseconds. The switch begins 
forwarding a packet 35 microseconds after it receives 
the same. If 10000 bits of data are to be transmitted 
between the two hosts using a packet size of 5000 
bits, the time elapsed between the transmission of the 
first bit of data and the reception of the last bit of the 
data in microseconds is:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1575


**Step-by-Step Explanation:**

Extra delay at switch = 35 microseconds for each 
packet. 
 Data = 10000 bits 
 Number of packets = 10000/5000=2 packets 
 Transmission delay for one packet = 500 
microseconds. 
<!-- PAGE 544 -->
COMPUTER NETWORK 
 At t=500 μsec, last bit of packet 1 is placed on 
link 1 by A and transmission of packet 1 begins. 
 At t=520 μsec, last bit of packet 1 reaches  
switch. 
 At t=555 μsec, first bit of packet 1 is placed on 
link 2 by the switch. 
 At t=1000 μsec, last bit of packet 2 is placed on 
link 1 by A. 
 At t=1020 μsec, last bit of packet 2 reaches 
switch.  
 Note: Packet 2 needs to wait until 1055 μsec 
before the switch transfers it. 
 Last bit of packet 1 will be placed on link 2 by 
switch at 1055 μsec. 
 Hence, no additional delay for packet 2.  
 At t=1055 μsec, packet 2’s first bit is placed on 
link 2.  
 At t=1575 μsec, last bit of packet 2 reaches B. 
 ∴1575 μsec is required.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a network connecting two systems 
located 8000 kilometers apart. The bandwidth of 
the network is 500 × 10⁶ bits per second. The 
propagation speed of the media is  
 4 × 10⁶ meters per second. It is needed to design a 
Go-Back-N sliding window protoco l for this 
network. The average packet size is 10⁷ bits. The 
network is to be used to its full capacity. Assume 
that processing delays at nodes are negligible. 
Then, the minimum size in bits of the sequence 
number field has to be


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 8


**Step-by-Step Explanation:**

d=8000km 
 Bandwidth = 500×106 bps 
 Propagation delay: 
 Pd=8000×103/4×106 = 2 sec  
 Packet size = 107 bits 
 Transmission delay: 
 td=107/500×106 = 1/50 sec 
 n=100% 
 100/100=N/(1+2a) 
 a=Pd/td=2/(1/50) sec=100 
 100/100=N/201 
 N=201 
 Number of packets = 201 
 8 bits are required for the sequence number.


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose that the stop-and-wait protocol is used on 
a link with a bit rate of 64 kilobits per second and 
20 milliseconds propagation delay. Assume that the 
transmission time for the acknowledgment and the 
processing time at nodes are negligible. Then the 
minimum frame size in bytes to achieve a link 
utilization of at least 50% is: __________


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 320


**Step-by-Step Explanation:**

efficiency = td / (td + 2×pd ) 
 For 50% efficiency: 
 1/2 = td / (td + 2×pd ) 
 td = (1/2) * (td + 2×pd ) 
 td = (1/2) * (td ) + pd  
 td / 2 = pd = 20 ms 
 td = 40 ms 
 Minimum frame size / 64Kbps = 40 ms  
 Minimum frame size = 64Kbps * 40 ms =2560 bits 
= 320 bytes


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a selective repeat sliding window 
protocol that uses a frame size of 1 KB to send data 
on a 1.5 Mbps link with a one -way latency of 50 
msec . To achieve a link utilization of 60%, the 
minimum number of bits required to represent the 
sequence number field is ____ .


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** 5


**Step-by-Step Explanation:**

Frame size = 1 KB = 1024 bytes = 8192 bits 
Bandwidth = 1.5 Mbps = 1.5 × 10⁶ bits/sec 
One-way delay = 50 ms ⇒ RTT = 100 ms 
Target utilization = 0.6 
Transmission time (Tt): 
Tt = 8192 / (1.5 × 10⁶) ≈ 0.00546 sec 
Using utilization formula for sliding window: 
U = min(1, W / (1 + 2a)) 
where a = Tp / Tt 
a = 0.05 / 0.00546 ≈ 9.16 
So, 1 + 2a ≈ 1 + 18.32 = 19.32 
To achieve U = 0.6: 
W / 19.32 = 0.6 
W ≈ 0.6 × 19.32 ≈ 11.59 
Minimum window size W = 12 
Selective Repeat condition: 
W ≤ 2(k−1) 
So, 
2(k−1) ≥ 12 
k−1 = 4 ⇒ k = 5


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


A bit-stuffing based framing protocol uses an 8-bit 
delimiter pattern of 01111110. If the output bit -
string after stuffing is 011111100101, then the 
input bit-string is:


- **(A)** 0111110100

- **(B)** 0111110101

- **(C)** 0111111101

- **(D)** 0111111111



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Input string: 0111110101 
 Output string: 01111100101 
 After five consecutive 1’s in the input, a bit 0 is 
inserted.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the store and forward packet switched 
network given below. Assume that the bandwidth of 
each link is 10^6 bytes/sec. A user on host A sends a 
file of size 10^3 bytes to host B through routers R1 
and R2 in three different ways. In the first case, a 
single packet containing the complete file is 
transmitted from A to B. In the second case, the file 
is transmitted from A to B. In the third case, the file  
is split into 20 equal parts and these packets are sent 
from A to B. Each packet contains 100 bytes of 
header information along with the user data. Consider 
only transmission time and ignore processing, 
queuing and propagation delays. Also assume that 
there are no errors during transmission. Let T1, T2, 
and T3 be the times taken to transmit the file in the 
first, second, and third case respectively. Which one 
of the following is CORRECT?


- **(A)** T1 < T2 < T3

- **(B)** T1 > T2 > T3

- **(C)** T2 = T3, T3 < T1

- **(D)** T1 = T3, T3 > T2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Bandwidth: 10^6 bps 
Packet size: 1000 bytes 
 1st transmission: 1000 + 100 = 1100 bytes 
transmitted at a time from A 
 T₁: 
1000+100(overhead)/106=1100×8/106=8800/106=8.
8 msec 
 T₁ = 8.8 × 3 = 26.4 msec 
 2nd transmission: 100 + 100 = 200 bytes transmitted 
10 times from A 
 T₂: 
100+100(overhead)/106=200×8/106=1600/106=1.6 
msec 
 T₂ = (3 × 1.6) + (9 × 1.6) = 19.2 msec 
 3rd transmission: 50 + 100 = 150 bytes transmitted 
20 times from A 
 T₃: 
50+100(overhead)/106=150×8/106=1200/106=1.2 m
sec 
 T₃ = (3 × 1.2) + (19 × 1.2) = 26.4 msec 
 T₁ = T₃ = 26.4 msec 
T2 < T1 =T₃


</details>

---


### Q29. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Determine the maximum length of the cable (in km) 
for transmitting data at a rate of 500 Mbps in an 
Ethernet LAN with frames of size 10,000 bits. 
Assume the signal speed in the cable to be 2,00,000 
km/s.


- **(A)** 1

- **(B)** 2

- **(C)** 2.5

- **(D)** 5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

transmission time > round trip time of 1 bit 
 transmission time ≥ 2 × propagation time 
<!-- PAGE 545 -->
COMPUTER NETWORK 
10,000 𝑏𝑖𝑡𝑠
500 𝑀𝑏𝑝𝑠   ≥ 2 × 
𝑑
2×105 𝑘𝑚 𝑝𝑒𝑟 𝑠𝑒𝑐  
 2 km ≥ d


</details>

---


### Q30. [GATE CSE – 2015 NAT SET - 3(2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider a source computer (S) transmitting a file of 
size 10 6 bits to a destination computer (D) over a 
network of two routers (R1 and R2) and three links 
(L1, L2, and L3).


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Routers are store and forward devices. 
 Propagation time = 100 km/108 m/s = 1 ms 
 Transmission time for a packet  = 
1000 bits/106 bits/sec = 1 ms 
 Packets will be forwarded in a pipelined manner 
after the first packet reaches the receiver, with 
every 1 ms a new one arriving. 
 Now, the time taken by packet number 1 to reach 
the destination is: 
 1 ms (Tx at sender) + 1 ms (Tp from sender to R1) 
+ 1 ms (Tx at R1) 
 1 ms (Tp from R1 to R2) + 1 ms (Tx at R2) + 1 
ms (Tp from R2 to destination) = 6 ms 
 So, for packet 1000: 
6 ms + 999 ms = 1005 ms


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Frames of 1000 bits are sent over a 10⁶ bps duplex 
link between two hosts. The propagation time is 25 
ms. Frames are to be transmitted into this link to 
maximally pack them in transit (within the link). 
 What is the minimum number of bits (l) required to 
represent the sequence numbers distinctly? Assume 
that no time gap needs to be given between 
transmission of two frames.


- **(A)** 𝐼 =  2

- **(B)** 𝐼 =  3

- **(C)** 𝐼 =  4

- **(D)** 𝐼 =  5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Propagation time is given as 25 ms . 
Bandwidth = 106bps. 
So, to fully utilize the channel, we must send 106 bits into 
the channel in a second, which will be 1000 frames per 
second as each frame is 1000 bits. 
Now, since the propagation time is 25 ms , to fully pack 
the link we need to send at least 1000 × 25 × 10−3 = 25 
frames. 
So, we need  ⌈log2 25⌉ =5 bits


</details>

---


### Q32. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose that the sliding window protocol is used 
with the sender window size of 2 l, where l is the 
number of bits identified in the earlier part and 
acknowledgements are always piggybacked. After 
sending 2 l frames, what is the minimum time the 
sender will have to wait before starting 
transmission of the next frame? (Ignore frame 
processing time.)


- **(A)** 16 ms

- **(B)** 18 ms

- **(C)** 20 ms

- **(D)** 22 ms



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

1. Timing Parameters 
 Transmission Delay of Data Frame (𝑇𝑡) : 
𝑇𝑡 = 1000bits106bps = 1 ms 
 Round Trip Time (RTT): Since 
acknowledgments are piggybacked onto 
full-sized reverse data frames, the 
acknowledgment transmission delay is also 
1 ms . 
RTT = 𝑇𝑡( Data ) + 𝑇𝑝 + 𝑇𝑡(ACK) + 𝑇𝑝
         RTT = 1 ms + 25 ms + 1 ms + 25 ms = 52 ms 
2.  Sender Activity and Idle Window 
 Window Size ( 𝑊 ): Given as 25 = 32 frames. 
 Sender Busy Time: The time taken to transmit the 
entire window continuously without stopping: 
Busy Time = 32 frames × 1 ms/ frame = 32 ms 
 Sender Waiting Time: The idle time spent waiting 
for the first acknowledgment to arrive after the 
transmission of the window finishes: 
Waiting Time = RTT - Busy Time 
Waiting Time = 52 ms − 32 ms = 20 ms


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Let 𝑮(𝑥) be the generator polynomial used for CRC 
checking. What is the condition that should be 
satisfied by 𝐺(𝑥) to detect odd number of bits in 
error?


- **(A)** 𝐺(𝑥) contains more than two terms

- **(B)** 𝐺(𝑥) does not divide 1 + 𝑥𝑘, for any 𝑘 not  
  exceeding the frame length

- **(C)** 1 + 𝑥 is a factor of 𝐺(𝑥)

- **(D)** 𝐺(𝑥) has an odd number of terms.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

To detect any odd number of bit errors, the 
generator polynomial must ensure that any error 
pattern with odd weight is not divisible by 𝐺(𝑥). 
An error pattern with an odd number of bit errors 
always has (1+𝑥)as a factor. 
So, to detect all such errors, 𝐺(𝑥)must also contain 
(1+𝑥)as a factor.


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The distance between two stations M and N is L 
kilometers. All frames are K bits long. The 
propagation delay per kilometer is t seconds. Let R 
bits/second be the channel capacity. Assuming that 
processing delay is negligible, the minimum number 
of bits for the sequence number field in a frame for 
maximum utilization, when the sliding window 
protocol is used, is:


- **(A)** ⌈𝑙𝑜𝑔₂
(2𝐿𝑡𝑅+2𝐾)
𝐾 ⌉

- **(B)** ⌈𝑙𝑜𝑔2 (
2𝐿𝑡𝑅
𝐾 )⌉

- **(C)** ⌈𝑙𝑜𝑔₂((
2𝐿𝑡𝑅 + 𝐾)
𝐾 )⌉

- **(D)** ⌈𝑙𝑜𝑔₂(
(2𝐿𝑡𝑅 + 𝐾)
(2𝐾) )⌉



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Propagation delay = Lt 
RTT = 2Lt 
 Transmission time per frame = K / R 
 Maximum frames in transit (for full utilization): 
= RTT / transmission time 
= (2Lt) / (K/R) 
= 2LtR / K 
 For continuous transmission, window size W must 
satisfy: 
W ≥ 1 + 2LtR/K 
 So, 
W ≥ (2LtR + K) / K 
 Sequence number space ≥ W ⇒ 2^l ≥ W 
 l ≥ log₂((2LtR + K)/K) 
 Minimum integer value: 
l = ⌈log₂((2LtR + K)/K)⌉


</details>

---


### Q35. [GATE CSE – 2009 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The message 11001001 is to be transmitted using the 
CRC polynomial x³ + 1 to protect it from errors. The 
message that should be transmitted is:


- **(A)** 11001001000

- **(B)** 11001001011

- **(C)** 11001010

- **(D)** 110010010011



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Generator polynomial: x³ + 1 ⇒ binary = 1001 
 Step 1: Append 3 zeros (degree = 3) 
11001001 → 11001001000 
 Step 2: Perform modulo-2 division of 11001001000 by 
 After division, remainder = 011 
 Step 3: Append remainder to original message 
Final transmitted message = 11001001 + 011 
= 11001001011


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In a token ring network, the transmission speed is 
10⁷ bps and the propagation speed is 200 metres/μs. 
The 1-bit delay in this network is equivalent to:


- **(A)** 500 metres of cable

- **(B)** 200 metres of cable

- **(C)** 20 metres of cable

- **(D)** 50 metres of cable



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Bit rate = 10⁷ bps ⇒ time for 1 bit = 1 / 10⁷ s = 0.1 μs 
 Propagation speed = 200 m/μs 
 Distance travelled in 0.1 μs = 200 × 0.1 = 20 metres 
<!-- PAGE 546 -->
COMPUTER NETWORK


</details>

---


### Q37. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


There are n stations in a slotted LAN. Each station 
attempts to transmit with a probability p in each 
time slot. What is the probability that ONLY one 
station transmits in a given time slot?


- **(A)** 𝑛𝑝(1 −  𝑝)ⁿ⁻¹

- **(B)** (1 −  𝑝)ⁿ⁻¹

- **(C)** 𝑝(1 −  𝑝)ⁿ⁻¹

- **(D)** 1 − (1 −  𝑝)ⁿ⁻¹



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

For exactly one station to transmit:  
One station transmits ⇒ probability = p  
Remaining (n − 1) sta tions do not transmit ⇒ 
probability = (1 − p)ⁿ⁻¹ 
 Choose which station transmits: n ways 
 Total probability = n × p × (1 − p)ⁿ⁻¹


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Station A uses 32 byte packets to transmit messages 
to Station B using a sliding window protocol. The 
round trip delay between A and B is 80 
milliseconds and the bottleneck bandwidth on the 
path between A and B is 128 kbps. What is the 
optimal window size that A should use?


- **(A)** 20

- **(B)** 40

- **(C)** 160

- **(D)** 320



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Packet size = 32 bytes = 32 × 8 = 256 bits 
 Bandwidth = 128 kbps = 128000 bits/s 
 Transmission time per packet  = 256 / 128000 = 
0.002 s = 2 ms 
 RTT = 80 ms 
 Optimal window size = RTT / transmission time  
= 80 / 2 = 40


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Station A needs to send a message consisting of 9 
packets of Station B using sliding window (window 
size 3) and go -back-n error control strategy. All 
packets are ready and immediately available for 
transmission. If every 5th packet that A transmits 
gets lost (but no ACKs from B ever get lost), then 
what is the number of packets that A will transmit for 
sending the message to B?


- **(A)** 12

- **(B)** 14

- **(C)** 16

- **(D)** 18



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Window size = 3, Go-Back-N 
 Packets to send = 9 
 Every 5th transmission is lost (count transmissions, 
not packet number) 
 Transmit sequence: 
 1, 2, 3,4 → success  
5, 6, 7 → here 5th transmission (packet 5) is lost 
 Due to Go -Back-N, packets after lost one are 
discarded → resend from packet 5 
 Now retransmit: 
5, 6 → all success 
 Next: 
 7,8,9 
 again 7th  packet is lost 
 Now retransmit: 
7,8 → all success  
 and 9 lost 
 Resend 9 
 Total no of transmissions = 16


</details>

---


### Q40. [GATE CSE – 2007 MCQ (2-MARKS]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium




```c
Consider the diagram shown below where a number 
of LANs are connected by (transparent) bridges. In 
order to avoid packets looping through circuits in the 
graph, the bridges organize themselves in a spanning 
tree. First, the root bridge is identified as the bridge 
with the least serial number. Next, the root sends out 
(one or more) data units to enable the setting up of the 
spanning tree of shortest paths from the root bridge to 
each bridge. 
 Each bridge identifies a port (the root port) through 
which it will forward frames to the root bridge. Port 
conflicts are always resolved in favour of the port 
with the lower index value. When there is a 
possibility of multiple bridges forwarding to the same 
LAN (but not through  the root port), ties are broken 
as follows: bridges closest to the root get preference 
and between such bridges, the one with the lowest 
serial number is preferred. 
 For the given connection of LANs by bridges, which 
one of the following choices represents the depth first 
traversal of the spanning tree of bridges?
```


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The correct DFS traversal will be (a) B1, B5, B3, B4, 
B2


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Consider the correct spanning tree for the previous 
question. Let host H1 send out a broadcast ping 
packet. Which of the following options represents  
 the correct forwarding table on B3?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Correct Answer: a


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


The maximum window size for data transmission 
using the selective reject protocol with n-bit frame 
sequence numbers is:


- **(A)** 2ⁿ

- **(B)** 2ⁿ⁻¹

- **(C)** 2ⁿ − 1

- **(D)** 2ⁿ⁻²



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

In Selective Repeat (Selective Reject), to avoid 
ambiguity between old and new frames:  
Window size ≤ 2ⁿ⁻¹ 
 So maximum window size = 2ⁿ⁻¹


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


In a network of LANs connected by bridges, packets 
are sent from one LAN to another through 
intermediate bridges. Since more than one path may 
exist between two LANs, packets may have to be 
routed through multiple bridges. Why is the spanning 
tree algorithm used for bridge-routing?


- **(A)** For shortest path routing between LANs

- **(B)** For avoiding loops in the routing paths

- **(C)** For fault tolerance

- **(D)** For minimizing collisions



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Since, in a spanning tree, there is a unique path from 
a source to the destination, which avoids loops, since 
it is a tree, and contains all the nodes, since it is a 
spanning tree.


</details>

---


### Q44. [GATE CSE]


> **Topic:** Topic 2 | **Marks:** 2 | **Difficulty:** Medium


Suppose the round trip propagation delay for a 10 
Mbps Ethernet having 48-bit jamming signal is 46.4 
μs. The minimum frame size is:


- **(A)** 94

- **(B)** 416

- **(C)** 464

- **(D)** 512



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Tt >=2td + time for sending jamming signal 
RTT = 2∗Td = 46.6μ s 
time for sending jamming signal = 48 bits 
/10Mbps = 4.8μ s 
Now, 
Tt >=2*td + time for sending jamming signal 
Tt >= 46.6μ s + 4.8μ s 
Tt >= 51.2μ s 
L >= 51.2μ s∗10Mbps 
L >= 512 
<!-- PAGE 547 -->
TCP UDP AND IP


</details>

---



## Topic 3: Topic 3


### Q1. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If an IP network uses a subnet mask of 
255.255.240.0, the maximum number of IP 
addresses that can be assigned to network interfaces 
is ______. (answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4094


**Step-by-Step Explanation:**

Subnet mask in binary: 
255.255.240.0 
 255 → 11111111 
255 → 11111111 
240 → 11110000 
0 → 00000000 
 Total network bits = 20 
 Host bits: 
32 − 20 = 12 
 Total host addresses: 
2¹² = 4096 
 Assignable addresses: 
4096 − 2 
= 4094


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An ISP having an address block 202.16.0.0/15 
assigns a block of 6000 IP addresses to a client 
using the Classless Internet Domain Routing 
(CIDR) supernetting approach. 
 Which of the following address blocks can be 
assigned by the ISP?


- **(A)** 202.16.0.0/19

- **(B)** 202.17.64.0/19

- **(C)** 202.16.32.0/19

- **(D)** 202.17.24.0/19



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A; B; C


**Step-by-Step Explanation:**

Number of addresses required = 6000 
 CIDR blocks must be power of 2. 
 2¹² = 4096 (not enough) 
2¹³ = 8192 (sufficient) 
 So the ISP must allocate a block of 8192 
addresses. 
 Prefix length: 
 8192 = 2¹³ 
 32 − 13 = /19 
Thus the client must receive a /19 block. 
All bits in HID must be zero. 
(A) 202.16.0.0/19 
Valid boundary and inside ISP range  
(B) 202.17.64.0/19 
Valid boundary and inside ISP range  
(C) 202.16.32.0/19 
Valid boundary and inside ISP range  
(D) 202.17.24.0/19 
Not valid /19 boundary


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A TCP sender successfully establishes a connection 
with a TCP receiver and starts the transmission of 
segments. The TCP congestion control 
mechanism’s slow -start threshold is set to 10000 
segments. Assume that the round-trip time is fixed 
at 1 millisecond. Assume that the sender always has 
data to send, the segments are numbered from 1, 
and no segment is lost. 
 Let t denote the time (in milliseconds) at which the 
transmission of segment number 2000 starts. 
 Which one of the following options is correct?


- **(A)** 9 ≤ t < 10

- **(B)** 10 ≤ t < 11

- **(C)** 11 ≤ t < 12

- **(D)** 12 ≤ t < 13



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Segments sent per RTT: 
 RTT 0: 1 
RTT 1: 2 
RTT 2: 4 
RTT 3: 8 
RTT 4: 16 
RTT 5: 32 
RTT 6: 64 
RTT 7: 128 
RTT 8: 256 
RTT 9: 512 
RTT 10: 1024 
 Cumulative segments sent 
 After RTT 0: 1 
After RTT 1: 3 
After RTT 2: 7 
After RTT 3: 15 
After RTT 4: 31 
After RTT 5: 63 
After RTT 6: 127 
After RTT 7: 255 
After RTT 8: 511 
After RTT 9: 1023 
After RTT 10: 2047 
 Segment 2000 lies between 1024 and 2047, which are 
sent during RTT 10. 
 Since each RTT = 1 ms 
 10 ≤ t < 11


</details>

---


### Q4. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


With respect to a TCP connection between a client 
and a server, which one of the following statements is 
true?


- **(A)** The client and server use a two-way handshake 
mechanism before the start of data 
transmission

- **(B)** The server cannot initiate closing of the 
connection before the client initiates closing of 
the connection

- **(C)** The TCP connection is half-duplex

- **(D)** The client and server can initiate closing of the 
connection at the same time



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(A): False 
TCP uses a three-way handshake, not a two-way 
handshake. 
 (B): False 
Either the client or the server can initiate connection 
termination. 
 (C): False 
TCP is full-duplex, not half-duplex. 
 (D): True 
Both sides can initiate closing simultaneously, called 
simultaneous TCP close.


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


It is necessary to design a link-layer protocol between 
two hosts that are directly connected over a lossless 
link of length 3000 km. The link bandwidth is 10⁸ bits 
per second, and the propagation delay is 5 ns per 
meter. Every transmitted data byte is assigned a 
unique sequence number. 
 Let N be the minimum number of bits needed for the 
sequence number field such that: 
 i. the sequence numbers do not wrap around before 
60 seconds, and 
ii. the maximum utilization of the link is achieved. 
 Find N. (answer in integer)


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 30


**Step-by-Step Explanation:**

Bandwidth = 10⁸ bits/sec 
= (10⁸ / 8) bytes/sec 
= 1.25 × 10⁷ bytes/sec 
 Bytes sent in 60 sec: 
 1.25 × 10⁷ × 60 
= 7.5 × 10⁸ bytes 
 Sequence space must be ≥ 7.5 × 10⁸ 
 2ᴺ ≥ 7.5 × 10⁸ 
 log₂(7.5 × 10⁸) ≈ 29.5 
 So, 
 N ≥ 30 
 Condition 2: Full link utilization 
 Distance = 3000 km = 3 × 10⁶ m 
 Propagation delay: 
 3 × 10⁶ × 5 ns 
= 15 × 10⁶ ns 
= 0.015 sec 
 RTT = 2 × 0.015 = 0.03 sec 
 Bandwidth–delay product: 
 10⁸ × 0.03 
= 3 × 10⁶ bits 
= 3.75 × 10⁵ bytes 
<!-- PAGE 565 -->
COMPUTER NETWORK 
 Sequence numbers needed ≥ 375000 
 2ᴺ ≥ 375000 → N ≥ 19 
 Final N: 
Must satisfy both conditions: 
 max(30, 19) = 30


</details>

---


### Q6. [GATE CSE – 2026 NAT SET - 2(1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a new TCP connection between a sender 
and a receiver. The receiver advertised window is 
constant at 48 KB, the maximum segment size (MSS) 
is 2 KB, and the slow start threshold (ssthresh) is 16 
KB. 
 Assume there are no timeouts or duplicate 
acknowledgements. The number of rounds of 
transmission required for the congestion control


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Initial congestion window: 
In TCP, initial cwnd = 1 MSS = 2 KB 
 Slow start phase: 
cwnd doubles every round until it reaches 
ssthresh = 16 KB 
 Round 1: 
cwnd = 2 KB 
 Round 2: 
cwnd = 4 KB 
 Round 3: 
cwnd = 8 KB 
 Round 4: 
cwnd = 16 KB 
 At 16 KB, cwnd reaches ssthresh, so TCP enters 
congestion avoidance. 
 Number of rounds: 4


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network that uses Ethernet and IPv4. 
Assume that IPv4 headers do not use any options 
field. Each Ethernet frame can carry a maximum of 
1500 bytes in its data field. A UDP segment is 
transmitted. The payload (data) in the UDP 
segment is 7488 bytes.  
Which ONE of the following choices has the 
CORRECT total number of fragments transmitted 
and the size of the last fragment including IPv4 
header?


- **(A)** 5 fragments, 1488 bytes

- **(B)** 6 fragments, 88 bytes

- **(C)** 6 fragments, 108 bytes

- **(D)** 6 fragments, 116 bytes



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

MTU = 1500 B 
It is given that IPv4 headers do not use any options field, that 
means IPv4 Header Size is 20 B. 
 IP Header Size = 20 B  
So, MTU without IP Header = (1500 − 20) Bytes = 1480 Bytes 
Now, Payload for UDP Segment is 7488 Bytes. 
UDP Header is of 8 Bytes. 
So, 
Payload for IP datagram = Payload for UDP segment + UDP 
Header. 
= 7488 + 8 = 7496 
Now, fragmenting this Payload for IP Datagram using MTU 
without IP Header 
Total Fragments = 6 
Last packet data without header = 96 Bytes 
Last packet size with IP Header = 96 + 20 = 116 Bytes. 
So, Total no of fragments are 6 and size of last packet 
including IP Header is 116 Bytes.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements: 
 (i) Address Resolution Protocol (ARP) provides 
a mapping from an IP address to the 
corresponding hardware (link-layer) address. 
 (ii) A single TCP segment from a sender S to a 
receiver R cannot carry both data from S to R 
and acknowledgment for a segment from R to S. 
 Which ONE of the following is CORRECT?


- **(A)** Both (i) and (ii) are TRUE

- **(B)** (i) is TRUE and (ii) is FALSE

- **(C)** (i) is FALSE and (ii) is TRUE

- **(D)** Both (i) and (ii) are FALSE



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

ARP is a network protocol used to find the MAC 
(Media Access Control) address corresponding to a 
given IP address. So, (i) is true. 
 TCP uses piggybacking to send an acknowledgment 
(ACK) along with data in the same segment. So, (ii) 
is false.


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose a message of size 15000 bytes is 
transmitted from a source to a destination using 
IPv4 protocol via two routers as shown in the 
figure. Each router has a defined maximum 
transmission unit (MTU) as shown in the figure, 
including the IP header. The n umber of fragments 
that will be delivered to the destination is ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 7


**Step-by-Step Explanation:**

10. ANSWER:- A 
Since the first two octets ( 145.36 ) match 
everywhere, we evaluate the third octet ( 109 , 
which is 01101101 in binary): 
 Interface E1( /16 mask): * Mask leaves the first two 
octets unchanged → 145.36.0.0 . 
 Result: MATCH (Prefix length = 16) 
 Interface E2 ( /17 mask): *3rd octet mask is 
10000000 . 
 01101101(109) AND 16000000 = 06000000(0) →
145.36.0.0. 
 Result: MISMATCH (Table expects 145.36.128.0 ) 
<!-- PAGE 566 -->
COMPUTER NETWORK 
 Interface E3 ( / 18 mask): *3rd octet mask is 
11000000 . 
o 01101101(109) AND 11000000 =
01000000(64) → 145.36.64.0. 
 Result: MATCH (Prefix length = 18) 
 Interface E4 ( / 24 mask): * Mask leaves the first 
three octets unchanged → 145.36.109.0. 
 Result: MISMATCH (Table expects 
145.36.255.0 ) 
Final Decision 
Both E1 (16) and E3 (18) are valid matches. 
Under the Longest Prefix Match rule, the router 
selects the more specific route (18 > 16). 
The packet is forwarded to interface E3.


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A packet with the destination IP address 
145.36.109.70 arrives at a router whose routing table 
is shown. Which interface will the packet be 
forwarded to?  
Subnet 
Address 
Subnet Mask 
(in CIDR 
notation) 
Interface 
145.36.0.0 /16 E1 
145.36.128.0 /17 E2 
145.36.64.0 /18 E3 
145.36.255.0 /24 E4 
Default -- E5


- **(A)** E3

- **(B)** E1

- **(C)** E2

- **(D)** E5



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** a


</details>

---


### Q11. [GATE CSE – 2025 MCQ SET – 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the routing protocols given in List-I and the 
names given in List-II: 
List-I List-II 
(i) Distance vector routing (a) Bellman-Ford 
(ii) Link state routing (b) Dijkstra 
 For matching of items in List -I with those in List -II, 
which ONE of the following options is CORRECT?


- **(A)** (i) – (a) and (ii) – (b)

- **(B)** (i) – (a) and (ii) – (a)

- **(C)** (i) – (b) and (ii) – (a)

- **(D)** (i) – (b) and (ii) – (b)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

 DVR algorithm uses Bellman -Ford Algorithm 
to find out the optimal path. 
 Link State Routing algorithm uses Dijkstra's 
Algorithm to construct the SPT.


</details>

---


### Q12. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A machine receives an IPv4 datagram. The 
protocol field of the IPv4 header has the protocol 
number of a protocol X. 
Which ONE of the following is NOT a possible 
candidate for X?


- **(A)** Internet Control Message Protocol (ICMP)

- **(B)** Internet Group Management Protocol 
(IGMP)

- **(C)** Open Shortest Path First (OSPF)

- **(D)** Routing Information Protocol (RIP)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Multiplexing and multiplexing using the value of the 
protocol field


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the 3-way handshaking protocol for TCP 
connection establishment. Let the three packets 
exchanged during the connection establishment be 
denoted as P1, P2, and P3, in order. Which of the 
following option(s) is/are TRUE with respect to 
TCP header flags that are set in the packets?


- **(A)** P3: SYN = 1, ACK = 1

- **(B)** P2: SYN = 1, ACK = 1

- **(C)** P2: SYN = 0, ACK = 1

- **(D)** P1: SYN = 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, D


**Step-by-Step Explanation:**

P1: SYN = 1, ACK = 0 
P2: SYN = 1, ACK = 1 
P3: SYN = 0, ACK = 1


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network path P → Q → R between 
nodes P and R via router Q. Node P sends a file of 
size 10⁶ bytes to R via this path, splitting the file 
into chunks one after the other, each of size 10³ 
bytes. Node P sends these chunks without any wait 
time between the successive chunk transmissions. 
Assume that the size of the extra headers added to 
these chunks is negligible, and that the chunk size 
is less than the MTU. Each of the links P → Q and 
Q → R has a bandwidth of 10⁶ bits/sec, and 
negligible propagation latency. Router Q 
immediately transmits every packet it receives 
from P  to R, with negligible processing and 
queuing delays. 
 Assume P starts transmitting the chunks at time t = 
0. Which one of the following options gives the 
time (in seconds, rounded off to 3 decimal places) 
at which R receives all the chunks of the file?


- **(A)** 16.000

- **(B)** 8.000

- **(C)** 8.008

- **(D)** 15.992



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The network has three nodes P,Q,R connected as P -
Q-R. P sends 1000 packets each of size 1000 bytes.  
 The transmission time of one packet between two 
nodes is packet size / Bandwidth.  
 we are given bandwitdth is 1 mega bits per second.  
 hence we have 8000 /  106 = 8 milliseconds.  
 The total transmission time = ( Number of packets + n ) 
* T t  | here n is the number of nodes on the path in 
between source and destination.  
 Hence total time taken = (1000+1)* 8ms = 8008ms = 
8.008s


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following CIDR prefixes exactly 
represents the range of IP address 10.12.2.0 to 
10.12.3.255?


- **(A)** 10.12.2.0/24

- **(B)** 10.12.2.0/22

- **(C)** 10.12.0.0/22

- **(D)** 10.12.2.0/23



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

As per the given data, 
Range of IP Address = 10 ⋅ 12 ⋅ 2 ⋅ 0 to 10.12.3.255 
Expanding the last two octets of these IP Addresses: 
10.12.00000010.00000000
10.12.00000011.11111111 
As you can see above, the 23 -bit common prefix 
and the last 9 bits are all zeros to all ones. 
10.12.2.0/23 
<!-- PAGE 567 -->
COMPUTER NETWORK


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a TCP connection operating at a point of 
time with the congestion window of size 12 MSS 
(Maximum Segment Size), when a timeout occurs 
due to packet loss. Assuming that all the segments 
transmitted in the next two RTTs (Round Trip Time) 
are acknowledged correctly, the congestion window 
size (in MSS) during the third RTT will be 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

Given cwnd = 12 MSS 
Now timeout occurs which makes, 
cwnd=1 and ssthreshold = 12/2= 6 MSS 
Again slow start phase will begin, 
After 1 RTT, cwnd = 2MSS 
After 2 RTT, cwnd = 4MSS 
During 3rd RTT cwnd will be 4 MSS


</details>

---


### Q17. [GATE CSE – 2025 MCQ SET – 2 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the entries shown below in the forwarding 
table of an IP router. Each entry consists of an IP 
prefix and the corresponding next hop router for 
packets whose destination IP address matches the 
prefix. The notation “/N” in a prefix indicates a 
subnet mask with the most significant N bits set to 1. 
Prefix Next hop router 
10.1.1.0/24 R1 
10.1.1.128/25 R2 
10.1.1.64/26 R3 
10.1.1.192/26 R4 
 This router forwards 20 packets each to 5 hosts. The 
IP addresses of the hosts are 10.1.1.16, 10.1.1.72, 
10.1.1.132, 10.1.1.191, and 10.1.1.205.  
The number of packets forwarded via the next hop 
router R2 is ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 40


**Step-by-Step Explanation:**

Forwarding Table 
IPs For Understanding 
10.1.1.16 10.1.1.0001 0000 (maximum matches 
with R1) 
10.1.1.72 10.1.1.0100 1000 (maximum matches 
with R3) 
10.1.1.132 10.1.1.1000 0100 (maximum matches 
with R2) 
10.1.1.191 10.1.1.1011 1111 (maximum matches 
with R2) 
10.1.1.205 10.1.1.1100 1101 (maximum matches 
with R4) 
Given 5 IPs represented in the table below 
PREFIX Next 
Hop 
For understanding IPs 
(BOLD FIXED FOR NET 
ID) 
10.1.1.0/24 R1 10.1.1.0000 0000 
10.1.1.128/25 R2 10.1.1.1000 0000 
10.1.1.64/26 R3 10.1.1.0100 0000 
10.1.1.192/26 R4 10.1.1.1100 0000 
From the Longest Prefix matching, we can get 10.1.1.132 
and 10.1.1.191 are the IPs visiting Router R2. 
Router forwarded packets to each host is 20 so 20* 2= 40


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider sending an IP datagram of size 1420 bytes 
(including 20 bytes of IP header) from a sender to 
a receiver over a path of two links with a router 
between them. The first link (sender to router) has 
an MTU (Maximum Transmission Unit) size of 542 
bytes, while the second link (router to receiver) has 
an MTU size of 360 bytes. The number of 
fragments that would be delivered at the receiver is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

Given intial ip datagram  with 1400bytes data+20 
bytes header 
Sender-------MTU(542 bytes)-------router----------- 
 At sender  1400 bytes of data is fragmented as       
 520 bytes(D)+20bytes(H)   
          360bytes(D)+20bytes(H)  
At router there are 3 fragments to send to receiver 
the MTU size is 360 Bytes so, again fragmentation 
is required  
The 1st fragment of 520 Bytes of data is fragmented 
to  
336 bytes(D) + 20 bytes (H) 
184 bytes(D) +20 bytes(H) 
The 2nd fragment of 520 Bytes of data is fragmented 
to  
           336 bytes(D) + 20 bytes (H) 
 184 bytes(D) +20 bytes(H) 
The 3rd fragment of 360 Bytes of data is fragmented 
to  
 336 bytes(D) + 20 bytes (H) 
24 bytes(D) +20 bytes(H) 
 so, the final total fragments at the receiver is  6 
fragment


</details>

---


### Q19. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements about IPv4 
fragmentation is/are TRUE?


- **(A)** The fragmentation of an IP datagram is 
performed only at the source of the datagram.

- **(B)** The reassembly of fragments is performed at 
all intermediate routers along the path from 
the source to the destination.

- **(C)** The reassembly of fragments is performed 
only at the destination of the datagram.

- **(D)** The fragmentation of an IP datagram is 
performed at any IP router which finds that 
the size of the datagram to be transmitted 
exceeds the MTU.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C,D


**Step-by-Step Explanation:**

Option C : True 
 Reassembly of fragmented Datagrams is done only 
after reaching the destination . It cannot take place at 
any intermediary place because :  
1. All fragments may not meet at a router . 
2. Further fragmentation of fragmented packets can 
take place . 
3. fragmented datagrams may reach destination via 
an independent path . 
 Option D: True 
4. Fragmentation is done by intermediary devices 
such as Routers . 
5. When a packet needs to be fragmented because it 
exceeds the Maximum Transmission Unit (MTU) 
of a network segment, the original packet is 
divided into smaller fragments that fit within the 
MTU limits. The original packet's data is split into 
pieces, each typically including an IP header with 
appropriate fragmentation information.


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following fields of an IP header is/are 
always modified by any router before it forwards 
the IP packet?


- **(A)** Time to Live (TTL)

- **(B)** Header Checksum

- **(C)** Protocol

- **(D)** Source IP Address



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A; B


**Step-by-Step Explanation:**

Source IP address remains unchanged as it identifies 
the original sender and is used for sending 
acknowledgement by destination or an ICMP 
message by router/destination. 
 Protocol indicates the type of data carried 
(e.g., TCP, UDP) and isn't altered by routers. 
 Time to Live(TTL) value is decremented by 1 by each 
router that forwards the packet. 
 As TTL value of IP header is changed by e very 
router, corresponding  Header Checksum  is 
recalculated based on the new value of TTL. 
<!-- PAGE 568 -->
COMPUTER NETWORK


</details>

---


### Q21. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following fields is/are modified in the 
IP header of a packet going out of a network address 
translation (NAT) device from an internal network to 
an external network?


- **(A)** Total Length

- **(B)** Source IP

- **(C)** Destination IP

- **(D)** Header Checksum



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B; D


**Step-by-Step Explanation:**

NAT device takes the outgoing packet and replaces 
the source IP address from private address pool to 
a IP address from its public address pool. 
 Since the source IP address is changed, the header 
checksum will also be recalculated so that the 
router does not get error while checking the header 
checksum. 
 Answer: B,D


</details>

---


### Q22. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


TCP client P successfully establishes a connection to 
TCP server Q. Let NP denote the sequence number in 
the SYN sent from P to Q. Let N Q denote the 
acknowledgment number in the SYN ACK from Q to 
P. Which of the following statements is/are 
CORRECT?


- **(A)** The acknowledgment number NQ is equal to NP

- **(B)** The sequence number NP is always 0 for a new 
connection

- **(C)** The acknowledgment number NQ is equal to 
   NP + 1

- **(D)** The sequence number N P is chosen randomly 
by P



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C, D


**Step-by-Step Explanation:**

TCP always starts connection with an initial sequence 
number that is randomly generated in the range of 
available sequence numbers, to avoid conflicts with 
delayed packets from previous sessions. This is a safety 
measure to reduce the probability of accepting delayed 
packets from a past closed connection to be accepted by 
a new connected made from same host and same port.  
TCP ACK always sends the next expected byte 
sequence number hence Np+1 , will be sent as ack 
number


</details>

---


### Q23. [GATE CSE – 2024 NAT SET – 1 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Node X has a TCP connection open to node Y. The 
packets from X to  Y go through an intermediate IP 
router R. Ethernet switch S is the first switch on the 
network path between X and R. Consider a packet 
sent from X to Y over this connection.  
Which of the following statements is/are TRUE about 
the destination IP and MAC addresses on this packet 
at the time it leaves X?


- **(A)** The destination IP address is the IP address of 
Y

- **(B)** The destination MAC address is the MAC 
address of Y

- **(C)** The destination MAC address is the MAC 
address of S

- **(D)** The destination IP address is th e IP address of 
R



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Source IP address (public IP) and Destination IP 
address always remain unchanged throughout the 
journey of Packet from Node X to Node Y.  
 The destination IP address is always that of Node Y.  
(At destination, public destination IP address will 
be changed to private IP of receiving node due to 
NAT) 
 When the receiving node is outside the source 
node's local network, the source node sends packets 
to the default gateway (usually a router).  
 In this case, the destination MAC address will be 
that of the router.  
 The switch in the network simply forwards the 
packets along the path without altering their 
content.


</details>

---


### Q24. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are 
INCORRECT about the OSPF (Open Shortest Path 
First) routing protocol used in the Internet?


- **(A)** OSPF implements Bellman -Ford algorithm 
to find shortest paths.

- **(B)** OSPF uses Dijkstra’s shortest path algorithm 
to implement least-cost path routing.

- **(C)** OSPF is used as an inter -domain routing 
protocol.

- **(D)** OSPF implements hierarchical routing.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C


**Step-by-Step Explanation:**

OSPF uses Dijkstra’s shortest path algorithm to 
implement least-cost path routing 
 OSPF implements hierarchical routing


</details>

---


### Q25. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The forwarding table of a router is shown below: 
Subnet 
Number 
Subnet mask Interface 
ID 
200.150.0.0 255.250.0.0 1 
200.150.64.0 255.255.224.0 2 
200.150.68.0 255.255.255.0 3 
200.150.68.64 255.255.255.224 4 
Default  0 
 A packet addressed to a destination address 
200.150.68.118 
 arrives at the router. It will be forwarded to the 
interface 
 with ID ________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

Interface Subnet Mask SubnetRange Calculation Does it 
Match? 
1 255.250.0.0 Mask is non -contiguous. 
Broad match possible, but not 
the most specific. 
Likely 
2 255.255.224.0 118 AND 224 = 96 → Subnet 
becomes 200.150.64.0 
Yes 
3 255.255.255.0 118 AND 255 = 118 → 
Subnet becomes 
200.150.68.0 
Yes 
4 255.255.255.
118 AND 224 = 96 → 
Expected subnet 
200.150.68.96 ≠ 
200.150.68.64 
No 
Due to longest prefix matching rule , the packet is 
forwarded to the interface with the most specific 
matching subnet. 
Interface ID = 3


</details>

---


### Q26. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose You are asked to design a new reliable 
byte-stream transport protocol like TCP, named 
myTCP, which runs over a 100 Mbps network 
with a Round Trip Time (RTT) of 150 
milliseconds and a maximum segment lifetime of 
2 minutes. 
Which of the following is/are valid lengths of the 
Sequence Number field in the myTCP header?


- **(A)** 30 bits

- **(B)** 32 bits

- **(C)** 34 bits

- **(D)** 36 bits



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B, C, D


**Step-by-Step Explanation:**

Given, Bandwidth = 100 Mbps 
i.e. in 1 second = 100 × 220 bits can be transferred. 
Since MSL is 2 minutes than, number of bits that 
can be transferred in 2 minutes 
= 120 × 100 × 220 bits 
 Note: Sequence number is assigned to each byte in 
TCP. 
Total bytes = 1500 × 220 or 31 bits at least


</details>

---


### Q27. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network with three routers P, Q, R shown 
in the figure below. All the links have cost of unity. 
 The routers exchange distance vector routing 
information and have converged on the routing tables, 
after which the link Q -R fails. Assume that P and Q 
send out routing updates at random times, each at the 
same average rate. The probability of a routing loo p 
formation (rounded off to one decimal place) between 
P and Q, leading to the count -to-infinity problem, is 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 0.5


**Step-by-Step Explanation:**

It is given that P and Q are sending routing updates at 
the same average rate, so in a particular time period 
of sending updates, there are two possibilities, one is 
P sends before Q and other is Q sends before P.  
Now, We have 2 conditions: 
1. Q sends update to P first, then P finds the value of 
R as ∞ and count-to-infinity will not occur. 
2. P sends update to Q first, then Q found that P has 
a way to reach R, so it is count-to-infinity problem. 
As Q - R is broken, So R cannot send update to 
anyone. 
From above two conditions (total possibilities), 
only one condition leads to count -to-infinity 
problem and each possibility has equal probability 
of occurrence, so probability  is 1/2 = 
0.5 for count-to-infinity.


</details>

---


### Q28. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the routing table of an organization's router 
shown below: 
Subnet number Subnet mask Next hop 
12.20.164.0 255.255.252.0 R1 
12.20.170.0 255.255.254.0 R2 
12.20.168.0 255.255.254.0 Interface 0 
12.20.166.0 255.255.254.0 Interface 1 
default  R3 
 Which of the following prefixes in CIDR notation can 
be collectively used to correctly aggregate all of the 
subnets in the routing table?


- **(A)** 12.20.164.0/20

- **(B)** 12.20.164.0/22

- **(C)** 12.20.164.0/21

- **(D)** 12.20.168.0/22



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B; D


**Step-by-Step Explanation:**

12.20.164.0/22  → 12.20.10100100.00000000 
12.20.170.0/23  → 12.20.10101010.00000000 
12.20.168.0/23  → 12.20.10101000.00000000 
12.20.166.0/23  → 12.20.10100110.00000000 
12.20.170.0 and 12.20.168.0 can be combined to 
12.20.10101000.0 (12.20.168.0/22). 
12.20.166.0/23 comes inside 12.20.164.0/22. So, 
12.20.164.0/22 can be used for route aggregation of 
both. 
12.20.168.0/22 and 12.20.164.0/22 can’t be 
combined further. 
So, answer is option B and D.


</details>

---


### Q29. [GATE CSE – 2023 MSQ  (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider an enterprise network with two Ethernet 
segments, a web server and a firewall, connected via


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

top most router have 3 different interfaces having 3 
different NIDs ( goes to firewall, webserver and 
right most router respectively) 
left most router’s 2 diff interfaces goes to firewall 
<!-- PAGE 569 -->
COMPUTER NETWORK 
and left most ethernet respectively 
right most router’s 1 interface goes to right most 
ethernet 
 There are total 6 subnets


</details>

---


### Q30. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the data transfer using TCP over a 1 Gbps 
link. Assuming that the maximum segment lifetime 
(MSL) is set to 60 seconds, the minimum number 
of bits required for the sequence number field of the 
TCP header, to prevent the sequence number space 
from wrapping around during the MSL is 
___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 33


**Step-by-Step Explanation:**

let suppose SEQUNCE NO = X BITS 
 WINDOW SIZE=2X B 
 WRAP AROUND TIME (2X × 23)/230 SEC 
 WRAP AROUND TIME > MSL 
 (2x × 23)/230 > 60 (why taking greater bcz WAT 
should be greater than MSL bcz atleast after these 
many seconds it can repeat the sequence 
number)= 33


</details>

---


### Q31. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a computer network using the distance 
vector routing algorithm in its network layer. The 
partial topology of the network is as shown below. 
 The objective is to find the shortest-cost path from 
the router R to routers P and Q.  
 Assume that R does not initially know the shortest 
routes to P and Q.  
 Assume that R has three neighbouring routers 
denoted as X, Y, and Z.  
 During one iteration, R measures its distance to its 
neighbours X, Y, and Z as 3, 2, and 5, respectively. 
Router R gets routing vectors from its neighbours 
that indicate that the distance to router P from 
routers X, Y, and Z are 7, 6, and 5, respectively. 
The routing vector also indicates that the distance 
to router Q from routers X, Y, and Z are 4, 6, and 8, 
respectively. Which of the following statement(s) 
is/are correct with respect to the new routing table of 
R, after update during this iteration?


- **(A)** The distance from R to Q will be stored as 7.

- **(B)** The distance from R to P will be stored as 10.

- **(C)** The next hop router for a packet from R to Q 
is Z.

- **(D)** The next hop router for a packet from R to P is 
Y.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, D


**Step-by-Step Explanation:**

Given R gets the distance vector (3, 2, 5). After the 
one iteration, the distance vector from X to P, Y to 
P, and Z to P is (7, 6, 5) respectively.  
 The distance vector from R to P via XYZ is (3 + 7, 
2 + 6, 5 + 5) = (10, 8, 10). 
So, take the minimum distance from R to P which 
is 8 via Y. 
After the iteration, the distance vector from X to 
Q, Z to Q is (4, 6, 8) respectively.  
 The distance vector from R to Q via XYZ is (3 + 
4, 2 + 6, 5 + 8) = (7, 8, 13). 
So, take the minimum distance from R to Q which 
is 7 via X.


</details>

---


### Q32. [GATE CSE – 2022 NAT (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider two hosts P and Q connected through a 
router R. The maximum transfer unit (MTU) value of 
the link between P and R is 1500 bytes, and between 
R and Q is 820 bytes. 
 A TCP segment of size 1400 bytes was transferred 
from P to Q through R, with IP identification value as 
0x1234. Assume that the IP header size is 20 bytes. 
Further, the packet is allowed to be fragmented, i.e., 
Don't Fragment (DF) flag in the IP header is not set 
by P. 
 Which of the following statements is/are correct?


- **(A)** Two fragments are created at R and the IP 
datagram size carrying the second fragment is 
620 bytes.

- **(B)** If the second fragment is lost, P is required to 
resend the whole TCP segment.

- **(C)** TCP destination port can be determined by 
analyzing only the second fragment.

- **(D)** If the second fragment is lost, R will resend the 
fragment with the IP identification value 
0x1234.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, B


**Step-by-Step Explanation:**

First Fragement = 800(Data) + 20(Header) = 820 B 
 Second Fragement = 1400-800 = 620 B


</details>

---


### Q33. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A TCP server application is programmed to listen 
on port number P on host S. A TCP client is 
connected to the TCP server over the network. 
Consider that while the TCP connection was active, 
the server machine S crashed and rebooted. 
Assume that the client does not use the TCP 
keepalive timer. 
 Which of the following behaviors is/are possible?


- **(A)** If the client sends a packet after the server 
reboot, it will receive a FIN segment.

- **(B)** If the client was waiting to receive a packet, 
it may wait indefinitely.

- **(C)** The TCP server application on S can listen 
on P after reboot.

- **(D)** If the client sen ds a packet after the server 
reboot, it will receive a RST segment.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** -B, C, D


**Step-by-Step Explanation:**

A. Option A is false as the FIN is used to close 
     connection. 
B. Option B is correct 
C. Option C is correct as once the current session 
     will be terminated(due to reboot) and new 
     connection can take place on the same port. 
D. Option D is also correct


</details>

---


### Q34. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the three -way handshake mechanism 
followed during TCP connection establishment 
between hosts P and Q. Let X and Y be two random 
32-bit starting sequence numbers chosen by P and 
Q respectively. Suppose P sends a TCP connection 
request message to Q with a TCP segment having 
SYN bit = 1, SEQ number = X, and ACK bit = 0. 
Suppose Q accepts the connection request. Which 
one of the following choices represents the 
information present in the TCP segment header that 
is sent by Q to P?


- **(A)** SYN bit = 1, SEQ number = Y, ACK bit = 1, 
ACK number = X + 1, FIN bit = 0

- **(B)** SYN bit = 1, SEQ number = Y, ACK bit = 1, 
ACK number = X, FIN bit = 0

- **(C)** SYN bit = 0, SEQ number = X + 1, ACK bit 
= 0, ACK number = Y, FIN bit = 1

- **(D)** SYN bit = 1, SEQ number = X + 1, ACK bit 
= 1, ACK number = Y, FIN bit = 0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Q will send the SYN bit = 1 to the connection 
establishment. 
Q seq number will be Y different from X.  
ACK bit = 1 because sending the ACK.  
ACK number = X + 1 (Next seq number id)  
FIN bit = 0 (Because establishing the connection)


</details>

---


### Q35. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following two statements: 
 S1: Destination MAC address of an ARP reply is 
a broadcast address. 
 S2: Destination MAC address of an ARP request 
is a broadcast address. 
 Which one of the following choices is correct?


- **(A)** S1 is false and S2 is true.

- **(B)** Both S1 and S2 are false.

- **(C)** Both S1 and S2 are true.

- **(D)** S1 is true and S2 is false.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

ARP request is broadcasting. 
 ARP reply is unicasting.


</details>

---


### Q36. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements about the 
functionality of an IP-based router. 
I. A router does not modify the IP packets during 
forwarding. 
II. It is not necessary for a router to implement any 
routing protocol. 
III. A router should reassemble IP fragments if the 
MTU of the outgoing link is larger than the size of 
the incoming IP packet. 
 Which of the above statements is/are TRUE?


- **(A)** I only

- **(B)** I and II only

- **(C)** II and III only

- **(D)** II only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

I. A router modifies the IP packets during 
forwarding because TTL is changing. 
II. A router can also be used in a LAN network; it 
does not require a routing protocol at that time. 
III. Packet fragmentation is done if packet size is 
more than MTU.


</details>

---


### Q37. [GATE CSE – 2021 MSQ SET – 1 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a TCP connection between a client and a 
server with the following specificat ions: the round 
trip time is 6 m s, the size of the receiver advertised 
window is 50 KB, slow-start threshold at the client is 
32 KB, and the maximum segment size is 2 KB. The 
connection is establis hed at time t = 0. Assume that 
there are no timeouts and errors during transmission. 
Then the size of the congestion window (in KB) at 
time t + 60 ms after all acknowledgments are 
processed is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 44


**Step-by-Step Explanation:**

The state of congestion window changes as below 
 Note: As specified in question, there are no errors and 
timeouts 
 At t: 1 MSS 
 At t+6:2 MSS 
 At t+12:4 MSS 
 At t+18:8 MSS 
 At t+24:16 MSS 
 Now here since threshold value is reached, it is no 
longer in slow start phase and enters congestion 
avoidance 
 phase 
 At t+30:17 MSS 
 At t+36:18 MSS 
 At t+42:19 MSS 
 At t+48: 20 MSS 
 At t+54:21 MSS 
 At t+60:22 MSS 
 So at time t+60, the congestion window size is 22 
MSS i.e., 44 KB.


</details>

---


### Q38. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An organization requires a range of IP addresses to 
assign one to each of its 1500 computers. The 
organization has approached an Internet Service 
Provider (ISP) for this task. The ISP uses CIDR and 
serves the requests from the available IP address 
space 20 2.61.0.0/17. The ISP wants to assign an 
address space to the organization which will 
minimize the number of routing entries in the ISP’s 
router using route aggregation. Which of the 
following address spaces are potential candidates 
from which the ISP can a llot any one to the 
organization?  
 I. 202.61.84.0/21 
II. 202.61.104.0/21 
III. 202.61.64.0/21 
IV. 202.61.144.0/21


- **(A)** I and IV only

- **(B)** III and IV only

- **(C)** I and II only

- **(D)** II and III only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

There is a rule in supernetting, first ip address must 
be divisible by total size of the supernet,ie,the host 
bits must be 0. 
II and III follow it


</details>

---


### Q39. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose that in an  IP-over-Ethernet network, a 
machine X wishes to find the MAC address of 
another machine Y in its subnet. Which one of the 
following techniques can be used for this?


- **(A)** X sends an ARP request packet with 
broadcast IP address in its local subnet

- **(B)** X sends an ARP request packet to the local 
gateway’s MAC address which then finds 
the MAC address of Y and sends to X

- **(C)** X sends an ARP request packet with 
broadcast MAC address in its local subnet

- **(D)** X sends an ARP request packet to the local 
gateway’s IP address which then finds the 
MAC address of Y and sends to X



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

1. The sender (X) knows its own IP address 
and  MAC address. X also knows the IP address 
of the target (Y) . It needs to find MAC address of 
Y 
2. IP asks ARP to create an ARP request message, 
filling in X's IP and MAC address and Y's IP 
address. The destination MAC address is set to al
l 0s. 
3. The message is passed to Data Link layer where 
it is encapsulated in a frame using MAC address 
of X as the source address 
<!-- PAGE 570 -->
COMPUTER NETWORK 
and physical broadcast address (all 1s)  as the 
destination address. 
4. Every host in subnet receives the request 
message because we have used broadcast MAC 
address in the destination address. All machines 
except Y (we have specified Y's IP addr ess in 
our ARP request message) drop the ARP request 
message.  
5. Y replies with an ARP reply message that 
contains its MAC address. 
6. When X receives this message, it gets to know 
the MAC address of Y. 
 note that, a host uses its own IP address and 
network mask to decide if target IP address is in its 
own network or not. 
 If it is in its network, it uses ARP to resolve the 
MAC address. 
 If target IP address is not in its network, it takes the 
help of default gateway to resolve MAC address 
using ARP. 
 Since i n question it is clearly mentioned that X 
(source) and Y (destination) both are in the same 
subnet, we need not send ARP request message 
targeted at gateway and then expect it to give the 
MAC address of Y to X.


</details>

---


### Q40. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider that 15 machines need to be connected in 
a LAN using 8-port Ethernet switches. Assume that 
these switches do not have any separate uplink 
ports. The minimum number of switches needed is 
_______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 3


**Step-by-Step Explanation:**

3 switches of ethernet are r equired to connect 15 
computers.


</details>

---


### Q41. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider three machines M, N, and P with IP 
addresses 100.10.5.2, 100.10.5.5, and 100.10.5.6 
respectively. The subnet mask is set to 
255.255.255.252 for all the three machines. Which 
one of the following is true?


- **(A)** M, N and P all belong to the same subnet

- **(B)** Only N and P belong to the same subnet

- **(C)** M, N, and P belong to three different subnets

- **(D)** Only M and N belong to the same subnet



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

We can avoid BITWISE AND here. The concept 
is, in subnet mask we need to take a note of 
positions of set bits. For those positions,  in IP 
addresses we should've matching bits. 
here, 1st, 2nd and 3rd octets of M,N,P are same.  
 Their 4th octet is given as 
M: 0000 0010; N: 0000 0101; P: 0000 0110 
4th octet of Subnet Mask: 1111 1100 
It means, we should've matching bits for starting 6 
bits in given IP addresses. 
Only N and P satisfies this. B is the correct option 
here.


</details>

---


### Q42. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider an IP packet with a length of 4500 bytes that 
includes a 20 -byte IPv4 header and a 40 -byte TCP 
header. The packet is forwarded to an IPv4 router that 
supports a Maximum Transmission Unit (MTU) of 
600 bytes. Assume that the length of the IP header in 
all the outgoing fragments of this packet is 20 bytes. 
Assume that the fragmentation offset value stored in 
the first fragment is 0. 
 The fragmentation offset value stored in the third 
fragment is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 144


**Step-by-Step Explanation:**

IP length = 4500B. Payload = 4480B. 
MTU = 600B. 
So, max packet we can make here is: Header(20) + 
Payload (580). But the payload isn't a multiple of 8 
here. 
Hence legally the max packet here is: Header(20) + 
Payload(576). 
Seven such packets make up a total payload of 
4032B. 
So, last packet would be Header(20) + Payload (448). 
Offset of first packet = 0. 
Offset of second packet = 576B = 72 
Offset of third packet = 72 + 72 = 144.


</details>

---


### Q43. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a long-lived TCP session with an end-to-end 
bandwidth of 1 Gbps = (109 bits per second). The 
session starts with a sequence number of 1234. The 
minimum time (in seconds, rounded to the closest 
integer) before this sequence number can be used 
again is


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 34-35


**Step-by-Step Explanation:**

remember tcp is byte(not bit) stream protocol 
sequence number field of tcp header is 32 bit, so 
only (232=4G) sequence numbers are available so 
wrap arount time is after how much time we use 
same sequence number 
bandwidth = 1Gbps = 109 / 8 Byte per second 
10^9/8 sequence no. consume - 1 sec ( since 
bandwidth=109/8) 
1 seq no. consume - 8 / 109 sec 
232 seq no. consume - 2 ^ 32 * (8 / 109)  sec = 
34.35  sec (approx 34 sec)


</details>

---


### Q44. [GATE CSE – 2020 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Match the following:  
Field Length (bits) 
P. UDP Header’s Port Number i. 48 
Q. Ethernet MAC Address ii. 8 
R. IPv6 Next Header iii. 32 
S. TCP Header’s Sequence Number iv. 16


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

UDP Header's Port Number → 16 bit 
Ethernet MAC Address → 48 bit 
IPv6 Next Header → 8 bit 
TCP Header's Sequence Number → 32 bit


</details>

---


### Q45. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements regarding the 
slow start phase of the TCP congestion control 
algorithm. Note the cwnd stands for the TCP 
congestion window and MSS denotes the 
Maximum Segment Size. 
 (i) The cwnd increases by 2 MSS on every 
successful acknowledgment. 
(ii) The cwnd approximately doubles on every 
successful acknowledgment. 
(iii) The cwnd increases by 1 MSS every round 
trip time. 
(iv) The cwnd approximately doubles every round 
trip time. 
 Which one of the following is correct?


- **(A)** Only (ii) and (iii) are true

- **(B)** Only (i) and (iii) are true

- **(C)** Only (iv) is true

- **(D)** Only (i) and (iv) are true



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

cwnd approximately doubles every round trip time


</details>

---


### Q46. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a TCP client and a TCP server running on 
two different machines. After completing data 
transfer, the TCP client calls close to terminate the 
connection and a FIN segment is sent to the TCP 
server. Server -side TCP responds by sending an 
ACK, which is received by the client-side TCP. As 
per the TCP connection state diagram (RFC 793), 
in which state does the client-side TCP connection 
wait for the FIN from the server-side TCP?


- **(A)** LAST-ACK

- **(B)** TIME-WAIT

- **(C)** FIN-WAIT-1

- **(D)** FIN-WAIT-2



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

FIN WAIT-1 -->  if client sent FIN segment to the 
server and waiting for the ACK of its own FIN 
segment 
 if client receives  ACK for its own  FIN then client 
move to FIN-wait-2 and waiting for FIN from server 
side


</details>

---


### Q47. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements about the 
routing protocols, Routing Information Protocol 
(RIP) and Open Shortest Path First (OSPF) in an IPv4 
network. 
 I. RIP uses distance vector routing 
II. RIP packets are sent using UDP 
III. OSPF packets are sent using TCP 
IV. OSPF operation is based on link-state routing 
protocol 
 Which of the statements above are CORRECT?


- **(A)** I and IV only

- **(B)** I, II and III only

- **(C)** I, II and IV only

- **(D)** II, III and IV only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

RIP uses distance vector routing. OSPF uses link -
state routing protocols. 
 RIP uses UDP as transport protocol.  
OSPF neither uses TCP nor UDP 
<!-- PAGE 571 -->
COMPUTER NETWORK


</details>

---


### Q48. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider socket API on a Linux machine that 
supports connected UDP sockets. A connected UDP 
socket is a UDP socket on which connect function has 
already been called. Which of the following 
statements is/are CORRECT? 
 I. A connected UDP socket can be used to 
communicate with multiple peers simultaneously.  
II. A process can successfully call connect function 
again for an already connected UDP socket.


- **(A)** I only

- **(B)** II only

- **(C)** Both I and II

- **(D)** Neither I nor II



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Bind() function creates local address.  
Connect() function is specifying remote address.  
An unconnected UDP socket is just a Bind() 
function. 
A connected UDP socket is one more step above 
i.e. connect() function [Just behaves like TCP].


</details>

---


### Q49. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The maximum number of IPv4 router addresses that 
can be listed in the record route (RR) option field of 
an IPv4 header is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 9


**Step-by-Step Explanation:**

Record ro ute is an optional field used to record 
address.  
In IPv4 header, 40 bytes are reserved for 
OPTIONS.  
 For Record Route to stores, 1 byte is used to store 
type of option, 1 byte for length and 1 byte for 
pointer. Out of 40, 37 bytes are left.   
An IP4 address takes 32 bits or 4 bytes.   
We can store at most floor(37/4) = 9 router 
addresses.


</details>

---


### Q50. [GATE CSE – 2018 MCQ (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For a host machine that uses the token bucket 
algorithm for congestion control, the token bucket has 
a capacity of 1 megabyte and the maximum output 
rate is 20 megabytes per second. Tokens arrive at a 
rate to sustain output at a rate of 10 megabytes per 
second. The token bucket is currently full and the 
machine needs to send 12 megabytes of data. The


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1.1 sec


**Step-by-Step Explanation:**

arrival rate is 10 MB/sec 
outgoing is 20 MB/sec 
 relative rate at which bucket is being empty = 20-
10 = 10 MB/sec 
 to empty bucket , 1/10 sec = 0.1 sec required 
 date sent in 0.1 second = 0.1 * 20 = 2 MB  
 remaining data = 10 MB 
now output rate will become input rate i.e. 10 
MB/sec 
 to send 10 MB , 10/10 = 1 sec required 
 total time = 1.1 sec


</details>

---


### Q51. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An IP datagram of size 1000 bytes arrives at a 
router. The router has to forward this packet on a 
link whose MTU (maximum transmission unit) is 
100 bytes. Assume that the size of the IP header is 
20 bytes. The number of fragments that the IP 
datagram will be divided into for transmission is 
______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 13


**Step-by-Step Explanation:**

1.  Extract Payload & Max Capacity 
 Total Datagram Data: 1000 bytes total - 20 bytes header = 
980 bytes payload. 
 Max Fragment Payload: 100 bytes MTU - 20 bytes header =
80 bytes. 
2. Check 8-Byte Alignment 
The payload size for all fragments (except the last) must be a 
multiple of 8 due to the Fragment Offset field. Since 80 is 
divisible by 8 (
8 = 10), the maximum payload per 
fragment remains exactly 80 bytes. 
3. Calculate Fragments 
 Number of Fragments = ⌈980 bytes total payload 80 bytes per fragment ⌉ = ⌈12.25⌉ = 13 
 Fragments 1-12: 80 bytes payload + 20 bytes header 
= 100 bytes each. 
 Fragment 13:20 bytes remaining payload + 20 bytes 
header = 40 bytes. 
The datagram is divided into 13 fragments.


</details>

---


### Q52. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following protocols is NOT used 
to resolve one form of address to another one?


- **(A)** DNS

- **(B)** ARP

- **(C)** DHCP

- **(D)** RARP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

 DNS (Domain Name System) is used for mapping 
a hostname to an IP address. 
 ARP (Address Resolution Protocol) is used for 
mapping an IP address to a MAC address. 
 RARP (Reverse Address Resolution Protocol) is 
used for mapping a MAC address to an IP address. 
 DHCP is used to assign ip address not to map one 
address form to other form.


</details>

---


### Q53. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the network 200.10.11.144/27, the fourth octet 
(in decimal) of the last IP address of the network 
which can be assigned to a host is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 158


**Step-by-Step Explanation:**

144 in binary = 10010000 
 out of this 3 bits in left are subnet bits. (27 bits are 
used for subnet, which means top 3 bytes and leftmost 
3 bits from the last byte) 
 So, the 4th octet in the last IP address of the network 
which can be assigned to a host is 10011110. (its not 
10011111 because its network broadcast address) 
 So, 10011110 is 158 in decimal.


</details>

---


### Q54. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Host A sends a UDP datagram containing 8880 
bytes of user data to host B over an Ethernet LAN. 
Ethernet frames may carry data up to 1500 bytes 
(i.e., MTU = 1500 bytes). Size of UDP header is 8 
bytes and size of IP header is 20 bytes. There is no 
option fie ld in the IP header. How many total 
number of IP fragments will be transmitted and 
what will be the contents of the offset field in the 
last fragment?


- **(A)** 6 and 925

- **(B)** 6 and 7400

- **(C)** 7 and 1110

- **(D)** 7 and 8880



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

UDP data = 8880 bytes 
 UDP header = 8 bytes 
 IP Header = 20 bytes 
 Total Size excluding IP Header = 8888 bytes. 
 Number of fragments = ⌈ 8888 / 1480 ⌉ = 7 
 Offset of last segment = (1480 * 6) / 8 = 1110


</details>

---


### Q55. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Assume that the bandwidth for a TCP connection is 
1048560 bits/sec. Let α be the value of RTT in 
milliseconds (rounded off to the nearest integer) after 
which the TCP window scale option is needed. Let β 
be the maximum possible window size with wi ndow 
scale option. Then the values of α and β are:


- **(A)** 63 milliseconds 65535 × 214

- **(B)** 63 milliseconds 65535 × 216

- **(C)** 500 milliseconds 65535 × 214

- **(D)** 500 milliseconds 65535 × 216



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

In TCP when the bandwidth -delay product increases 
beyond 64 K receiver window scaling is needed. 
 The bandwidth -delay product is the maximum 
amount of data on the network circuit at any time and 
is measured as RTT Bandwidth. This is not the time 
for sending data rather just the time for sending data 
without acknowledgement. 
 So, here, we have bandwidth delay product 
(1048560/8) Βα= 64 K α = (64 Κ*8)/10485600.5s 
500 milliseconds. 
 When window scaling happens, a 14 bit shift count is 
used in TCP header. So, the maximum possible 
window size gets increased from 2161 to (2 16 − 1) * 
214 or from 65535 to 65535 * 214


</details>

---


### Q56. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following statements: 
I. TCP connections are full duplex. 
II. TCP has no option for selective acknowledgment. 
III. TCP connections are message streams.


- **(A)** Only I is correct

- **(B)** Only I and II are correct

- **(C)** Only II and III are correct

- **(D)** All of I, II, and III are correct



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

TCP is a byte stream protocol. Hence lll is false 
 TCP can use both selective ACK and Cumulative 
Acknowledgement. Hence ll is false 
 TCP Connection are full duplex. Hence i is true 
<!-- PAGE 572 -->
COMPUTER NETWORK


</details>

---


### Q57. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following fields of an IP header is 
NOT modified by a typical IP router?


- **(A)** Checksum

- **(B)** Source address

- **(C)** Time to Live(TTL)

- **(D)** Length



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Only Source address field of IP header is not 
modified by a router


</details>

---


### Q58. [GATE CSE – 2016 NAT SET - 1 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Identify the correct order in which a server process 
must invoke the function calls accept, bind, listen, and 
recv according to UNIX socket API.


- **(A)** listen, accept, bind, recv

- **(B)** bind, listen, accept, recv

- **(C)** bind, accept, listen, recv

- **(D)** accept, listen, bind, recv



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

order: bind, listen, accept, recv


</details>

---


### Q59. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose two hosts use a TCP connection to transfer 
a large file. Which of the following statements 
is/are FALSE with respect to the TCP connection? 
1. If the sequence number of a segment is m, then 
the sequence number of the subsequent segment 
is always m+1. 
2. If the estimated round trip time at any given 
point of time is t sec, the value of the 
retransmission timeout is always set to greater 
than or equal to t sec. 
3. The size of the advertised window never 
changes during the course of the TCP 
connection. 
4. The number of unacknowledged bytes at the 
sender is always less than or equal to the 
advertised window.


- **(A)** 3 only

- **(B)** 1 and 3 only

- **(C)** 1 and 4 only

- **(D)** 2 and 4 only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Statement 1 is false because, the sequence number 
of the subsequent segment depends on the number 
of byte characters in the current segment.  
Statement 2 is true, because RTO timer is always ≥ 
Estimated RTT.Statement 3 is false. Receiv er 
window is used to give the sender an idea of how 
much free buffer space is available at the receiver.  
Statement 4 is true, TCP is not permitted to 
overflow the allocated receiver buffer. 
 Hence, when the sender cannot send any more data, 
receiver window would be 0 and hence, the buffer 
would have unacknowledged data.


</details>

---


### Q60. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following routing table at an IP 
router: 
Network No Net Mask Next Hop 
128.96 .170 .0 255.255 .254 .0 Interface 0 
128.96 .168 .0 255.255 .254 .0 Interface 1 
128.96 .166 .0 255.255 .254 .0 R2 
128.96 .164 .0 255.255 .252 .0 R3 
0.0 .0 .0 Default R4 
For each IP address in Group I Identify the 
correct choice of the next hop from Group II 
using the entries from the routing table above. 
Group I Group II 
i) 128.96 .171 .92 a) Interface 0 
ii) 128.96 .167 .151 b) Interface 1 
iii) 128.96 .163 .151 c) R2 
iv) 128.96 .164 .121 d) R3 
 e) R4 
A. i-a, ii-c, iii-e, iv-d 
B. i-a, ii-d, iii-b, iv-e 
c, j-b, ii-c, iii-d, iv-e 
D. j-b, ij-c, iii-e. iv-d


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Using longest prefix matching (most specific 
Subnet mask wins) 
Routing Table Interpretation: 
128.96.170.0 /23 → covers 170–171 → Interface 0 
128.96.168.0 /23 → covers 168–169 → Interface 1 
128.96.166.0 /23 → covers 166–167 → R2 
128.96.164.0 /22 → covers 164–167 → R3 
Default → R4 
Matching: 
i) 128.96.171.92 → falls in 170–171 → Interface 0 
→a 
ii) 128.96.167.151 → matches both /23 (166 –167 
→ 
     R2) and /22 (164–167 → R3) 
     Longest prefix = /23 → R2 → c 
iii) 128.96.163.151 → does not match any → 
Default 
      → R4 → e 
iv) 128.96.164.121 → matches only /22 → R3 → d


</details>

---


### Q61. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is TRUE about the 
interior gateway routing protocols - Routing 
Information Protocol (RIP) and Open Shortest Path 
First (OSPF)?


- **(A)** RIP uses distance vector routing and OSPF 
uses link state routing.

- **(B)** OSPF uses distance vector routing and RIP 
uses link state routing.

- **(C)** Both RIP and OSPF use link state routing.

- **(D)** Both RIP and OSPF use distance vector 
routing.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Both Routing Information Protocol (RIP) and Open 
Shortest Path First (OSPF) are Interior Gateway 
Protocol, i.e., they both are used within an 
autonomous system. RIP is an old protocol (not 
used anymore) based on distance vector routing. 
OSPF is based Link State Routing.


</details>

---


### Q62. [GATE CSE – 2015 MCQ SET - 1 (1-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider the following three statements about link 
state and distance vector routing protocols for a large 
network with 500 network nodes and 4000 links. 
 S1: The computational overhead in link state 
protocols is higher than in distance vector protocols.  
S2: A distance vector protocol (with split horizon) 
avoids persistent routing loops, but not a link state 
protocol. 
S3: After a topology change, a link state protocol will 
converge faster than a distance vector protocol. 
 Which one of the following is correct  about S1, S2, 
and S3?


- **(A)** S1, S2, and S3 are all true.

- **(B)** S1, S2, and S3 are all false.

- **(C)** S1 and S2 are true, but S3 is false.

- **(D)** S1 and S3 are true, but S2 is false



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

The computational overhead in link state protocols is 
higher than in distance vector protocols because LSR 
is based upon global knowledge whereas DVR is 
based upon local knowledge. 
 Persistent looping can be avoided with the help of 
split horizon in DVR. There is no concept of 
persistent looping in LSR, in LSR only temporary 
loop exists and can automatically be solved by 
system or router. S2 is false. 
And, after a topology change, a link state protocol 
will converge faster than a distance vector 
protocol. S3 is true. 
Answer is option D.


</details>

---


### Q63. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An IP router with a Maximum Transmission Unit 
(MTU) of 1500 bytes has received an IP packet of 
size 4404 bytes with an IP header of length 20 
bytes. The values of the relevant fields in the header 
of the third IP fragment generated by the router for 
this packet are:


- **(A)** MF bit: 0, Datagram Length: 1444; Offset: 370

- **(B)** MF bit: 1, Datagram Length: 1424; Offset: 185

- **(C)** MF bit: 1, Datagram Length: 1500; Offset: 370

- **(D)** MF bit: 0, Datagram Length: 1424; Offset: 2960



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

MTU = 1500 bytes 
Header length = 20 bytes 
Packet size = 4404 bytes 
 Fragment 1: 1480 + 20 
Fragment 2: 1480 + 20 
Fragment 3: 1424 + 20 
 Datagram length for third IP fragment = 1444 
MF bit = 0 
 Offset=1480/4=370


</details>

---


### Q64. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the diagram shown below, L1 is an Ethernet 
LAN and L2 is a Token -Ring LAN. An IP packet 
originates from sender S and traverses to R, as 
shown. The links within each ISP and across the 
two ISPs, are all point -to-point optical links. The 
initial value of the TTL field i s 32. The maximum 
possible value of the TTL field when R receives the 
datagram is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 26


**Step-by-Step Explanation:**

There are 6 routers in the above diagram.  
 Initially TTL value was 32, so at the Receiver it will 
become 32 - 6 = 26.


</details>

---


### Q65. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Host A (on TCP/IP v4 network A) sends an IP 
datagram D to host B (also on TCP/IP v4 network 
B). Assume that no error occurred during the 
transmission of D. When D reaches B, which of 
the following IP header field(s) may be different 
from that of the original datagram D? 
(i) TTL 
(ii) Checksum 
(iii) Fragment Offset


- **(A)** (i) only

- **(B)** (i) and (ii) only

- **(C)** (ii) and (iii) only

- **(D)** (i),(ii) and (iii)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

TTL changes from one hope to the next. 
 checksum changes on each hop due to TTL change. 
 Fragement offset may be compurted again. 
 TTL, check sum and fragement offset may be 
changed in the transmission.


</details>

---


### Q66. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following socket API functions 
converts an unconnected active TCP socket into a 
passive socket?


- **(A)** connect

- **(B)** bind

- **(C)** listen

- **(D)** accept



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Listen() converts an unconnected active TCP socket 
into a passive socket.


</details>

---


### Q67. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Every host in an IPv4 network has a 1 -second 
resolution real-time clock with battery backup. Each 
host needs to generate up to 1000 unique identifiers 
per second. Assume that each host has a globally 
unique IPv4 address. Design a 50-bit globally unique 
ID for this purpose. After what period (in seconds) 
will the identifiers generated by a host wrap around?


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 256


**Step-by-Step Explanation:**

Each host needs to generate 1000 unique identifiers 
per second which requires 
 ⌈log2 1000⌉=10 bits 
 Now, these 10 bits along with 32-bit globally unique 
IP address will give a globally unique 42 -bit ID’s 
which stays constant. Since we are allowed 50 bits, 
we can use the next 8 bits using the clock which 
<!-- PAGE 573 -->
COMPUTER NETWORK 
changes every second. Thus, our IDs will wrap 
around once in 28=256 seconds.


</details>

---


### Q68. [GATE CSE – 2014 MCQ SET - 3 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An IP router implementing Classless Interdomain 
Routing (CIDR) receives a packet with address 
131.23.151.76. The router’s routing table has the 
following entries: 
Prefix Output Interface Identifier 
131.16.0/12 3 
131.28.0.0/4 5 
131.19.0.0/16 2 
131.22.0.0/15 1 
The identifier of the output interface on which this 
packet will be forwarded is ______.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1


**Step-by-Step Explanation:**

since first octet is same for all and given address , 
hence only second octet matters as all sid bits are 
greater than 8 and less than 17 
 second octet : 00010111 
 second octet of first address : 00010000 (given 
mask bits 12 ) -> matched 
 second octet of second address : 00011100 (given 
mask bits 14 ) 
 second octet of third address : 00010011 (given 
mask bits 16 ) 
 second octet of fourth address : 00010110 (given 
mask bits 15 ) -> matched 
 1st and 4th entry is being matched with given 
address 
 due to longest subnet mask match rule , this packet 
will be forwarded to interface 1.


</details>

---


### Q69. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a selective repeat sliding window 
protocol that uses a frame size of 1 KB to send data 
on a 1.5 Mbps link with a one -way latency of 50 
msec. To achieve a link utilization of 60%, the 
minimum number of bits required to represent the 
sequence number field is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 5


**Step-by-Step Explanation:**

Bandwidth delay product = Bandwidth × RTT 
→ 1.5 × 106 × 2 × 50 × 10−3 = 1.5 × 105 bits.  
 Utilization = 𝑁 ×  packet size  Bandwidth delay product  
 → 0.6 = 𝑁 × 8 × 10001.5 × 106 → 6 × 15 = 𝑁 × 8
 → 𝑁𝑇 = 454 = 11.25 ≈ 12  
 In selective repeat, 𝑁 ≤
2𝑛
2 → 12 ≤
2𝑛
2 → 2𝑛 ≥
24 → 𝑛 ≥ log2 (24) or 𝑛 ≥ 5.


</details>

---


### Q70. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Let the size of the congestion window of a TCP 
connection be 32 KB when a timeout occurs. The 
round trip time of the connection is 100 msec and 
the maximum segment size used is 2 KB. The time 
taken (in msec) by the TCP connection to get back 
to 32 KB congestion window is __________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 1100


**Step-by-Step Explanation:**

Given that at the time of Time Out, Congestion 
Window Size is 32 KB and 𝐑𝐓𝐓 = 100 ms, 
 When Time Out occurs, for the next round of Slow 
Start, 
 Threshold =  size of congestion window 2 ,
 Threshold = 16 KB
 Suppose we have a slow start ⇒ 2 KB|4 KB|8 KB ∣
16 KB  (As the threshold is reached, Additive 
increase starts) 
|18 KB|20 KB|22 KB|24 KB|26 KB|28 KB|30 KB|32 KB 
 Here | (vertical line) is representing RTT so the total 
number of vertical lines is 11 × 100 ms =
1100msec and so this is the answer.


</details>

---


### Q71. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In an IPv4 datagram, the M bit is 0, the value of 
HLEN is 10, the value of total length is 400 and the 
fragment offset value is 300. The position of the 
first fragment in the datagram,  the sequence 
numbers of the payload, and the last bytes of the 
payload, respectively, are


- **(A)** Last fragment, 2400 and 2789

- **(B)** First fragment, 2400 and 2759

- **(C)** Last fragment, 2400 and 2759

- **(D)** Middle fragment, 300 and 689



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Since M=0; It is indication of last fragment. 
Data length=Total Length-header length 
Data length=400-10*4=360 
Fragments offset=300 
Number of data byte ahead from this fragments 
is=300*8=2400 
Last byte of last frame is=2399+360=2759


</details>

---


### Q72. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider an instance of TCP's Additive Increase 
Multiplicative Decrease (AIMD) algorithm where 
the windows size at the start of the slow start phase 
is 2 MSS and the threshold at the start of the first 
transmission is 8 MSS. Assume that a time -out 
occurs d uring the fifth transmission. Find the 
congestion window size at the end of the tenth 
transmission.


- **(A)** 8 MSS

- **(B)** 14 MSS

- **(C)** 7 MSS

- **(D)** 12 MSS



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Explanation: 
 Since Slow Start is used, window size is increased by 
the number of segments successfully sent. This 
happens until either threshold value is reached or time 
out occurs. 
 In both of the above situations AIMD is used to avoid 
congestion. If threshold is reached, window size will 
be increased linearly. If there is timeout, window size 
will be reduced to half. 
 Window size for 1st transmission = 2 MSS 
Window size for 2nd transmission = 4 MSS 
Window size for 3rd transmission = 8 MSS 
threshold reached, increase linearly (according to 
AIMD) 
Window size for 4th transmission = 9 MSS 
Window size for 5th transmission = 10 MSS 
time out occurs, resend 5th with window size starts 
with as slow start. 
Window size for 6th transmission = 1 MSS 
Window size for 7th transmission = 2 MSS 
Window size for 8th transmission = 4 MSS 
 threshold reached, now increase linearly (according 
to AIMD) 
Additive Increase: 5 MSS (since 8 MSS isn’t 
permissible anymore) 
 Window size for 9th transmission = 5 MSS 
Window size for 10th transmission = 6 MSS 
Window size at the end of 10th transmission = 6+1 
=7 MSS


</details>

---


### Q73. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An Internet Service Provider (ISP) has the following 
chunk of CIDR-based IP addresses available with it: 
245.248.128.0/20. The ISP wants to give half of this 
chunk of addresses to Organization A, and a quarter 
to Organization B, while retaining the remaining with 
itself. Which of the following is a valid allocation of 
addresses to A and B?


- **(A)** 245.248.136.0/21 and 245.248.128.0/22

- **(B)** 245.248.128.0/21 and 245.248.128.0/22

- **(C)** 245.248.136.0/22 and 245.248.132.0/21

- **(D)** 245.248.136.0/24 and 245.248.132.0/21



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

The prefix is given is 20. So, the first 20 bits denote 
the network id bits, and the next 12 bits indicate host 
bits. To divide the network into two halves, we 
borrow bits from the host bits. Hence, for half (2 
partitions), the prefix will be 20 + 1 and for 4 
partitions, the prefix will be 20 + 2 = 22. So prefix for 
A will be 21 and prefix for B will be 22. This 
eliminates options C and D. 
 For A, we need to consider the 21st bit. It can have 
values 0 or 1. Let's take its value as 1. So, the network 
id becomes 245.248.136.0/21. 
<!-- PAGE 574 -->
COMPUTER NETWORK 
 For B, we need to consider the 21st and 22nd bits. 
We can have four possibilities: 00, 01, 10, 11. Out 
of these, 10, and 11 belong to network A. So, we 
take 00 ie 245.248.128.0/22 (Network B) and 01 as 
245.248.132.0/22.


</details>

---


### Q74. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the IPv4 addressing format, the number of 
networks allowed under Class C addresses is


- **(A)** 214

- **(B)** 27

- **(C)** 221

- **(D)** 224



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Number of Networks in class 'C' are 2²¹ as in class 
'C' there 
 24 bits Net id 
8 bits host id 
 Out of 24 bits, 3 bits are used for representation 
class 'C' i.e. 110 
Thus, 21 bits with 2¹¹ we can make 2²¹ networks.


</details>

---


### Q75. [GATE CSE – 2014 MCQ SET - 1 (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network with five nodes, 𝑁1 to 𝑁5, as 
shown as below. 
The network uses a Distance Vector Routing 
protocol. Once the routes have been stabilized, the 
distance vectors at different nodes are as follows. 
N1: ( 0,1,7,8,4 ) 
N2: ( 1,0,6,7,3 ) 
N3: (7,6,0,2,6) 
N4: (8, 7, 2, 0,4) 
N5: (4, 3, 6, 4, 0) 
Each distance vector is the distance of the best 
known path at that instance to nodes, 𝑁1 to 𝑁5,


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** A


**Step-by-Step Explanation:**

Initial DV at N3 = (7, 6, 0, 2, 6) 
Link cost N2–N3 reduces from 6 → 2 
 So N3 updates only that entry immediately: 
New DV at N3 (before exchange) = (7, 2, 0, 2, 6) 
 Neighbors of N3: 
From distances → neighbors are N2 and N4 
Distance vectors received: 
From N2: (1, 0, 6, 7, 3) 
From N4: (8, 7, 2, 0, 4) 
Update using Bellman-Ford: 
Formula: 
D₃(x) = min [ cost(3→2) + D₂(x), cost(3→4) + 
D₄(x)] 
Cost(3→2) = 2 
Cost(3→4) = 2 
Compute each entry: 
To N1: 
via N2 → 2 + 1 = 3 
via N4 → 2 + 8 = 10 → min = 3 
To N2: 
via N2 → 2 + 0 = 2 
via N4 → 2 + 7 = 9 → min = 2 
To N3: 0 
To N4: 
via N2 → 2 + 7 = 9 
via N4 → 2 + 0 = 2 → min = 2 
To N5: 
via N2 → 2 + 3 = 5 
via N4 → 2 + 4 = 6 → min = 5 
Final Distance Vector at N3: (3, 2, 0, 2, 5)


</details>

---


### Q76. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network with five nodes, 𝑁1 to     
                     𝑁5, as shown as below. 
The network uses a Distance Vector Routing 
protocol. Once the routes have been stabilized, the 
distance vectors at different nodes are as follows. 
 N1: ( 0,1,7,8,4 ) 
 N2: (1,0,6,7,3) 
 N3: (7,6,0,2,6) 
 N4: (8,7,2,0,4) 
 N5: (4, 3, 6, 4, 0) 
Each distance vector is the distance of the best 
known path at that instance to nodes, N1 to N5, 
where the distance to itself is 0 . Also, all links 
are symmetric and the cost is identical in both 
directions. In each round, all nodes exchange 
their distance vectors with their respective 
neighbors. Then all nodes update their distance 
vectors. In between two rounds, any change in 
cost of a link will cause the two incident nodes 
to change only that entry in their distance 
vectors. 
The cost of link N2 − N3 reduces to 2 (in both 
directions). After the next round of updates, the 
link N1 − N2 goes down. 𝑁2 will reflect this 
change immediately in its distance vector as cost, 
∞. After the NEXT ROUND of update, what will 
be the cost to 𝑁1 in the distance vector of 𝑁3 ?


- **(A)** 3

- **(B)** 9

- **(C)** 10

- **(D)** ∞



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Step 1: After first update (given from previous 
part) 
 Distance vector at N3 becomes: 
(3, 2, 0, 2, 5) 
 Step 2: Link N1–N2 goes down 
 At N2: distance to N1 becomes ∞ 
So updated DV at N2: 
(∞, 0, 2, 7, 3) 
 Step 3: Next round update at N3 
 Neighbors of N3: N2 and N4 
Costs: 
C(3→2) = 2 
C(3→4) = 2 
 Compute distance to N1 at N3: 
 Via N2: 
2 + D2(N1) = 2 + ∞ = ∞ 
 Via N4: 
2 + D4(N1) = 2 + 8 = 10 
 Take minimum: 
 min(∞, 10) = 10


</details>

---


### Q77. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network with 6 routers R1 to R6 
connected with links having weights as shown 
in the following diagram. 
All the routers use the distance vector based 
routing algorithm to update their routing 
tables. Each router starts with its routing table 
initialized to contain an entry for each 
neighbor with the weight of the respective 
connecting link. After all the routing tables 
stabilize, how many links in the network will 
never be used for carrying any data?


- **(A)** 4

- **(B)** 3

- **(C)** 2

- **(D)** 1



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

After distance vector stabilizes, only shortest 
path links are used. 
So we need to find links that are never part of 
any shortest path between any pair of nodes. 
 Edges from diagram: 
 R1–R2 = 6 
R1–R3 = 3 
R2–R3 = 2 
R2–R4 = 7 
R3–R5 = 9 
R4–R5 = 1 
R4–R6 = 8 
R5–R6 = 4 
 Find useful shortest paths: 
 R1 → R2: via R3 → cost = 3 + 2 = 5 (better than 6) 
→ edge R1–R2 NOT used 
 R3 → R5: direct = 9 
via R4: 2 + 7 + 1 = 10 (worse) 
via R1? not better → so R3–R5 IS used 
 R2 → R4: direct = 7 
via R3–R5–R4 = 2 + 9 + 1 = 12 (worse) → used 
 R4 → R6: 
via R5 = 1 + 4 = 5 (better than 8) → edge R4–R6 
NOT used 
<!-- PAGE 575 -->
COMPUTER NETWORK 
 Unused links: 
 R1–R2 
R4–R6


</details>

---


### Q78. [GATE CSE – 2011 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Consider a network with 6 routers 𝑅1 to 𝑅6 
connected with links having weights as shown in 
the following diagram.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** C


**Step-by-Step Explanation:**

Initially unused links: 
R1–R2 and R4–R6 
After changing their weights to 2: 
R1–R2 = 2 → becomes useful (clearly shortest 
between R1 and R2 and used in multiple paths) 
R4–R6 = 2 → check carefully: 
R5→R6: direct = 4 
via R4 = 1 + 2 = 3 → better 
So traffic from R5 to R6 will go via R4 
Now check if R5–R6 (cost 4) is used anywhere: 
R5→R6 prefers via R4 (cost 3) 
R3→R6 prefers via R2–R4 (2+7+2=11) instead of 
R3–R5–R6 (9+4=13) 
R1→R6 prefers via R2–R4 (2+7+2=11) instead of 
R1–R3–R5–R6 (3+9+4=16) 
So R5–R6 is never on any shortest path 
All other links are used somewhere.


</details>

---


### Q79. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Suppose computers A and B have IP addresses 
10.105.1.113 and 10.105.1.91 respectively. They 
both use the same netmask N. Which of the values 
of N given below should not be used if A and B 
should belong to the same network?


- **(A)** 255.255.255.0

- **(B)** 255.255.255.128

- **(C)** 255.255.255.192

- **(D)** 255.255.255.224



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

When we perform bitwise AND operation between 
IP address 10.105.1.113 and 255.255.255.224, the 
result is 10.105.1.96. 
 When we perform bitwise AND operation between 
IP address 10.105.1.91 and 255.255.255.224, the 
result is 10.105.1.64. 
 10.105.1.96 and 10.105.1.64 are different 
networks, so D is the correct answer.


</details>

---


### Q80. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


One of the header fields in an IP datagram is the 
Time-to-Live (TTL) field. Which of the following 
statements best explains the need for this field?


- **(A)** It can be used to prioritize packets

- **(B)** It can be used to reduce delays

- **(C)** It can be used to optimize throughput

- **(D)** It can be used to prevent packet looping



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

In the IP datagram there is time to live (TTL) field. 
It is mainly used to prevent packet looping.  
Means every packet is associated with certain time 
stamp (TTL), then this packet is discarded so it can 
be used to prevent packet looping.


</details>

---


### Q81. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


While opening a TCP connection, the initial 
sequence number is to be derived using a time -of-
day (ToD) clock that keeps running even when the 
host is down. The low order 32 bits of the counter of 
the ToD clock is to be used for the initial sequence 
numbers. The clock counter increments once per 
millisecond. The maximum packet lifetime is given 
to be 64 s. 
 Which one of the choices given below is closest to the 
minimum permissible rate at which sequence 
numbers used for packets of a connection can 
increase?


- **(A)** 0.015/s

- **(B)** 0.064/s

- **(C)** 0.135/s

- **(D)** 0.327/s



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

Here Minimum Permissible rate may be confusing 
but think like that if life time of packet is given 64s 
so this is max . Means if we increment seq.no per 
64 sec is allowed but more than 64s should not be 
allowed.  
 If we keep more than 64s for 1 sequence number 
we need to wait for next sequence without any 
reason. 
so ans should be=1/64s = 0.015/s


</details>

---


### Q82. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In the slow start phase of the TCP congestion control 
algorithm, the size of the congestion window


- **(A)** does not increase

- **(B)** increases linearly

- **(C)** increases quadratically

- **(D)** increases exponentially



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(D) increases exponentially


</details>

---


### Q83. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


If a class B network on the Internet has a subnet mask 
of 255.255.248.0, what is the maximum number of 
hosts per subnet?


- **(A)** 1022

- **(B)** 1023

- **(C)** 2046

- **(D)** 2047



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Subnet mask = 255.255.248.0 
 Binary: 
255.255.248.0 = 
11111111.11111111.11111000.00000000 
 Number of network bits = 21 
So host bits = 32 − 21 = 11 
 Maximum hosts per subnet = 2¹¹ − 2 
= 2048 − 2 
= 2046


</details>

---


### Q84. [GATE CSE – 2010 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A computer on a 10 Mbps network is regulated by a 
token bucket. The token bucket is filled at a rate of 2 
Mbps. It is initially filled to capacity with 16 
Megabits. What is the maximum duration for which 
the computer can transmit at the full 10 Mbps?


- **(A)** 1.6 seconds

- **(B)** 2 seconds

- **(C)** 5 seconds

- **(D)** 8 seconds



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Transmission rate (M)= 10 Mbps 
Token generation rate (r) = 2 Mbps 
 Net token consumption rate (M-r) = 10 − 2 = 8 
Mbps 
 Initial tokens (b) = 16 Megabits 
 Time = b/(M-r)=16/(10-2) = 2


</details>

---


### Q85. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


A client process P needs to make a TCP connection 
to a server process S. Consider the following 
situation: the server process S executes a socket(), 
a bind() and a listen() system call  in that order, 
following which it is preempted. Subsequently, the 
client process P executes a socket() system call 
followed by connect() system call to connect to the 
server process S. The server process has not 
executed any accept() system call. Which one of the 
following events could take place?


- **(A)** connect() system call returns successfully

- **(B)** connect() system call blocks

- **(C)** connect() system call returns an error

- **(D)** connect() system call results in a core dump



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Suppose connect() is in default blocking mode then 
calling connect() sends SYN packet to the server. 
Since server has not executed any accept() call it can 
not acknowledge the SYN packet. Connect() in 
blocking mode keep sending SYN packets at f ixed 
intervals(first after 6 sec, second after 24 sec typically 
until 75 sec latest). This is done until an error 
ETIMEDOUT is returned by the TCP.(in this 
case,else there are several other type of errors 
returned in case No port exists for that connection or 
server id not listening etc.) 
 Here, option (B) saying that connect() blocks is not 
entirely wrong but since we know that accept() call is 
not made by server, connect() WILL NOT WAIT 
FOREVER and SO IT CAN NOT BLOCK. It 
will ultimately return with an ERROR message. 
 So, option (C) is CORRECT.


</details>

---


### Q86. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Which of the following system calls results in the 
sending of SYN packets?


- **(A)** socket

- **(B)** bind

- **(C)** listen

- **(D)** connect



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** D


**Step-by-Step Explanation:**

SYN packet is sent when a TCP connection is 
initiated (3-way handshake) 
Check options: 
socket → just creates endpoint  
bind → assigns local address  
listen → marks socket as passive (server side)  
connect → initiates connection → sends SYN 
<!-- PAGE 576 -->
COMPUTER NETWORK


</details>

---


### Q87. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The address of a class B host is to be split into 
subnets with a 6 -bit subnet number. What is the 
maximum number of subnets and the maximum 
number of hosts in each subnet?


- **(A)** 62 subnets and 262142 hosts

- **(B)** 64 subnets and 262142 hosts

- **(C)** 62 subnets and 1022 hosts

- **(D)** 64 subnets and 1024 hosts



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Class B has 16 host bits. 
 6 bits used for subnet → remaining host bits = 16 
− 6 = 10 
 Subnets = 2⁶ − 2 = 62 
Hosts per subnet = 2¹⁰ − 2 = 1022


</details>

---


### Q88. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


For which one of the following reasons does 
Internet Protocol (IP) use the time -to-live (TTL) 
field in the IP datagram header?


- **(A)** Ensure packets reach destination within that 
time

- **(B)** Discard packets that reach later than that time

- **(C)** Prevent packets from looping indefinitely

- **(D)** Limit the time for which a packet gets queued 
in intermediate routers



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

TTL is decremented at each router hop.  
When it becomes 0 → packet is discarded. 
 Purpose: avoid infinite routing loops in the 
network.


</details>

---


### Q89. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Two computers C1 and C2 are configured as follows: 
C1 → IP: 203.197.2.53, Mask: 255.255.128.0  
C2 → IP: 203.197.75.201, Mask: 255.255.192.0 
 Which statement is true?


- **(A)** C1 and C2 both assume they are on the same 
network

- **(B)** C2 assumes C1 is on same network, but C1 
assumes C2 is on a different network

- **(C)** C1 assumes C2 is on same network, but C2 
assumes C1 is on a different network

- **(D)** C1 and C2 both assume  they are on different 
networks



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

C1: 
Mask = /17 → block size = 128 
Network of C1 = 203.197.0.0 – 203.197.127.255 
C2 IP = 203.197.75.201 → lies in this range 
So, C1 thinks C2 is in same network 
 C2: 
Mask = /18 → block size = 64 
Network of C2 = 203.197.64.0 – 203.197.127.255 
C1 IP = 203.197.2.53 → NOT in this range 
So, C2 thinks C1 is in different network 
 Answer: (c) C1 assumes C2 is on same network, 
but C2 assumes C1 is on a different network


</details>

---


### Q90. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


Packets of the same session may be routed through 
different paths in:


- **(A)** TCP, but not UDP

- **(B)** TCP and UDP

- **(C)** UDP, but not TCP

- **(D)** Neither TCP nor UDP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

Routing happens at the IP layer (network layer), 
not at TCP/UDP. 
IP is connectionless → each packet is routed 
independently. 
 So even in TCP (though it is connection -oriented), 
packets can take different paths.  
Same applies to UDP. 
 Answer: (b) TCP and UDP


</details>

---


### Q91. [GATE CSE – 2008 MCQ (2-MARKS]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


An organization has a class B network and wishes to 
form subnets for 64 departments. The subnet mask 
would be:


- **(A)** 255.255.0.0

- **(B)** 255.255.64.0

- **(C)** 255.255.128.0

- **(D)** 255.255.252.0



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Class B default = /16 
 Need ≥ 64 subnets → 2⁶ = 64 → borrow 6 bits 
 New mask = 16 + 6 = /22 
 /22 in decimal = 255.255.252.0 
 Answer: (d) 255.255.252.0


</details>

---


### Q92. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


In a packet switching network, packets are routed 
from source to destination along a single path 
having two intermediate nodes. If the message size 
is 24 bytes and each packet contains a header of 3 
bytes, then the optimum packet size is:


- **(A)** 4

- **(B)** 6

- **(C)** 7

- **(D)** 9



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

Number of links = 2 intermediate nodes → 3 links 
 Let payload per packet = x 
Total packet size = x + 3 
 Number of packets = 24 / x 
 Total transmission time ∝ (number of packets + 
number of links − 1) × packet size 
= (24/x + 3 − 1)(x + 3) 
= (24/x + 2)(x + 3) 
 Minimize: 
= (24/x)(x+3) + 2(x+3) 
= 24 + 72/x + 2x + 6 
= 30 + 72/x + 2x 
 Differentiate: 
d/dx = -72/x² + 2 = 0 
⇒ 2 = 72/x² 
⇒ x² = 36 
⇒ x = 6 
 Packet size = x + header = 6 + 3 = 9 
 Answer: (d) 9


</details>

---


### Q93. [GATE CSE]


> **Topic:** Topic 3 | **Marks:** 2 | **Difficulty:** Medium


The address resolution protocol (ARP) is used for:


- **(A)** Finding the IP address from the DNS

- **(B)** Finding the IP address of the default gateway

- **(C)** Finding the IP address that corresponds to a  
  MAC address

- **(D)** Finding the MAC address that corresponds  
  to an IP address



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(d) Finding the MAC address that corresponds to an 
IP address 
<!-- PAGE 577 -->
APPLICATION LAYER


</details>

---



## Topic 4: Topic 4


### Q1. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following statements is/are true with 
respect to the interaction of a web browser with a 
web server using HTTP 1.1?


- **(A)** HTTP 1.1 facilitates downloading multiple 
objects of the same webpage over the same 
TCP connection, if the objects are stored in 
the same server

- **(B)** HTTP 1.1 facilitates downloading multiple 
objects of the same webpage over the same 
TCP connec tion, even if they are stored in 
different servers

- **(C)** HTTP 1.1 facilitates sending a request for 
downloading one object without waiting for 
a previously requested object to be 
downloaded completely

- **(D)** HTTP 1.1 facilitates downloading multiple 
webpages on the same server to be 
downloaded over a single TCP connection



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A, C, D


**Step-by-Step Explanation:**

(A): True 
Persistent connections allow multiple objects 
(HTML, images, CSS, etc.) of the same webpage 
from the same server to be downloaded over a 
single TCP connection. 
 (B): False 
A TCP connection is established with a specific 
server. 
Objects stored on different servers require 
different TCP connections. 
 (C): True 
HTTP/1.1 supports pipelining, where the client 
can send another request without waiting for the 
previous response to complete. 
 (D): True 
Persistent connections allow the browser to request 
multiple webpages from the same server over the 
same TCP connection.Bottom of Form


</details>

---


### Q2. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following protocols may need to 
broadcast some of its messages?


- **(A)** SMTP

- **(B)** FTP

- **(C)** DHCP

- **(D)** HTTP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

DHCP (Dynamic Host Configuration Protocol): When a new 
device joins a network, it does not have an IP address and 
does not know the IP address of the DHCP server. To 
discover an available server and request network 
configurations, it must send its initial DHCPDISCOVER 
message as a broadcast (sent to the destination IP 
255.255.255.255) so that every device on the local network 
segment receives it, including the DHCP server.


</details>

---


### Q3. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A user starts browsing a webpage hosted at a 
remote server. The browser opens a single 
connection to fetch the entire webpage from the 
server. The webpage consists of a top -level index 
page with multiple embedded image objects. 
Assume that all caches (e.g., DNS cache, browser 
cache) are all initially empty. The following packets 
leave the user’s computer in some order. 
 (i) HTTP GET request for the index page. 
(ii) DNS request to resolve the web server’s name to 
its IP address. 
(iii) HTTP GET request for an image object. 
(iv) TCP SYN to open a connection to the web 
server. 
 Which one of the following is the CORRECT 
chronological order (earliest in time to latest) of the 
packets leaving the computer?


- **(A)** (iv), (ii), (iii), (i)

- **(B)** (iv), (ii), (i), (iii)

- **(C)** (ii), (iv), (i), (iii)

- **(D)** (ii), (iv), (iii), (i)



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

The standard sequence of operations when trying to 
reach a server are as follows. 
1. Device checks with local DNS server to identify the 
destination IP address. 
2. Since HTTP uses TCP network protocol, it has to setup 
a link with the webserver, hence it sends a syn packet to 
the server's IP that was resolved using DNS query. 
3. After a TCP connection has been established, The host 
would request for an index of the webpage using the 
HTTP GET command. 
4. Based on the Index recieved, Host would make further 
requests to get the other information that it made the 
connection for. 
Option C would be the best fit for the discussed 
sequence


</details>

---


### Q4. [GATE CSE – 2026 MSQ SET – 1 (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Suppose in a web browser, you click on the www . 
gate-2023 . in URL. The browser cache is empty. 
The IP address for this URL is not cached in your 
local host, so a DNS lookup is triggered (by the local 
DNS server deployed on your local host) over the 3-
tier DNS hierarchy in an iterative mode. No resource 
records are cached anywhere across all DNS servers. 
Let RTT denote the round trip time between your 
local host and DNS servers in the DNS hierarchy. 
The round trip time between the local host and the 
web server hosting www.gate-2023.in is also equal 
to RTT. The HTML file associated with the URL is 
small enough to have negligible transmission time 
and negligible rendering time by your web browser, 
which references 10 equally small objects on the 
same web server. 
Which of the following statements is/are CORRECT 
about the minimum elapsed time between clicking 
on the URL and your browser fully rendering it?


- **(A)** 7 RTTs, in case of non-persistent HTTP with 5 
parallel TCP connections.

- **(B)** 5 RTTs, in case of persistent HTTP with 
pipelining.

- **(C)** 9 RTTs, in case of non-persistent HTTP with 5 
parallel TCP connections.

- **(D)** 6 RTTs, in case of persistent HTTP with 
pipelining.



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C, D


**Step-by-Step Explanation:**

persistent http with pipelining will take 3 RTTs (one 
for connection + one for opening web page + one for 
10 objects)  
And in iterative mode for DNS is 3 RTTs (Root + 
Top domain + Authoritative). 
So total 6 RTTs in case of persistent HTTP with 
pipeline. 
For non-persistent with 5 parallel TCP: 
 DNS lookup will take 3 RTTs. 
 TCP connection: 2 RTTs (for opening webpage) 
 HTTP request/response: Since we are using non-
persistent HTTP, each TCP connection can be used 
to request one object at a time. Since there are 10 
objects in total, and we have 5 parallel TCP 
connections, it will take 2 rounds of HTTP 
requests/responses to fetch all the objects. Therefore, 
this step will take a minimum of 4 RTTs (2 RTTs for 
GATE CSE – 2007 MCQ (1-MARKS) 
<!-- PAGE 581 -->
COMPUTER NETWORK 
the first round and 2 RTTs for the second round). 
∴ 3 + 2 + 4 RTTs i.e. 9 RTTs


</details>

---


### Q5. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the resolution of the domain name 
www.gate.org.in by a DNS resolver. Assume that 
no resource records are cached anywhere across the 
DNS servers and that iterative query mechanism is 
used in the resolution. The number of DNS query -
response pairs involved in completely resolving the 
domain name is ___________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 4


**Step-by-Step Explanation:**

1.  Count the Hierarchy Labels (Right-to-Left) 
The domain name www. gate. org. in consists of 4 
labels across the DNS hierarchy: 
1. . in (Country Code Top-Level Domain) 
2. .org. in (Sub-domain zone) 
3. gate.org. in (Authoritative domain) 
4. 𝑤𝑤𝑤 (Specific host record) 
5. Follow the Iterative Queries 
Because nothing is cached, the local resolver must 
send an independent request-response pair to each 
consecutive layer of the infrastructure: 
 Pair 1: Queries a Root Server → Points to the .in TLD 
server. 
 Pair 2: Queries the .in TLD Server → Points to the 
.org. in server. 
 Pair 3: Queries the .org. in Server → Points to the 
gate.org. in Authoritative server. 
 Pair 4: Queries the gate. org. in Authoritative Server 
→ Returns the final IP address for wnw . 
Conclusion The complete resolution requires exactly 4 
DNS query-response pairs.


</details>

---


### Q6. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Assume that you have made a request for a web 
page through your web browser to a web server. 
Initially, the browser cache is empty. Further, the 
browser is configured to send HTTP requests in 
non-persistent mode. The web page contains text 
and five very small images. The minimum number 
of TCP connections required to display the web 
page completely in your browser is _________.


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - 6


**Step-by-Step Explanation:**

In non-persistent HTTP, for every object, there is 
a TCP connection required. 
Hence, 1 TCP connection for text and 5 TCP 
connections for images are required. 
So, a total of 6 connections are required.


</details>

---


### Q7. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following protocol pairs can be used 
to send and retrieve e-mails (in that order)?


- **(A)** IMAP, SMTP

- **(B)** IMAP, POP3

- **(C)** SMTP, MIME

- **(D)** SMTP, POP3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

SMTP is push protocol and to send e -mail and 
POP3 is pull protocol i.e. to retrieve e-mail.


</details>

---


### Q8. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following is/are examples of stateful 
application layer protocols? 
(i) HTTP 
(ii) FTP 
(iii) TCP 
(iv) POP3


- **(A)** (i) and (ii) only

- **(B)** (ii) and (iii) only

- **(C)** (ii) and (iv) only

- **(D)** (iv) only



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

SMTP is push protocol and to send e-mail and 
HTTP Application       Stateless 
FTP Application       Stateful 
TCP Transport       Stateful 
POP3 Application       Stateful


</details>

---


### Q9. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Identify the correct sequence in which the 
following packets are transmitted on the network 
by a host when a browser requests a webpage from 
a remote server, assuming that the host has just been 
restarted.


- **(A)** HTTP GET request, DNS query, TCP SYN

- **(B)** DNS query, HTTP GET request, TCP SYN

- **(C)** DNS query, TCP SYN, HTTP GET request

- **(D)** TCP SYN, DNS query, HTTP GET request



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

DNS query, TCP SYN, HTTP GET request


</details>

---


### Q10. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


In one of the pairs of protocols given below, both the 
protocols can use multiple TCP connections between 
the same client and the server. Which one is that?


- **(A)** HTTP, FTP

- **(B)** HTTP, TELNET

- **(C)** FTP, SMTP

- **(D)** HTTP, SMTP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

HTTP and FTP protocols can use multiple TCP 
Connection between the same same client and server.


</details>

---


### Q11. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


An IP machine Q has a path to another IP machine H 
via three IP routers R1, R2, and R3. 
Q — R1 — R2 — R3 — H 
 H acts as an HTTP server, and Q connects to H via 
HTTP and downloads a file. Session layer 
encryption is used, with DES as the shared key 
encryption protocol. Consider the following four 
pieces of information: 
[I1] The URL of the file downloaded by Q 
[I2] The TCP port numbers at Q and H 
[I3] The IP addresses of Q and H 
[I4] The link layer addresses of Q and H 
 Which of I1, I2, I3, and I4 can an intruder learn 
through sniffing at R2 alone?


- **(A)** Only I1 and I2

- **(B)** Only I1

- **(C)** Only I2 and I3

- **(D)** Only I3 and I4



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

I1 is encrypted by DES at the Session layer so 
intruder can't see that. 
I2 is a part of TCP header(below Session layer), so it 
is not encrypted. Obv., the intruder can see that. 
I3 is a part of the IP header(below TCP layer), so 
again, it is not encrypted and the intruder can see 
that as well. 
I4 is not a part of the DLL header(below the IP 
layer), since the DLL always contains the Mac 
Addresses of the immediate sender(previous hop-
R1) and the immediate destination(next hop-R3), so 
the intruder cannot see I4. 
So, answer - (C)


</details>

---


### Q12. [GATE CSE – 2022 NAT (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The transport layer protocols used for real -time 
multimedia, file transfer, DNS, and email 
respectively are:


<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

UDP, TCP, UDP and TCP 
Suppose u are looking at the video on you tube and 
quality of video is not HD then u are just using 
UDP. When u want to see video in 720HD, 1080HD 
or 2160HD in that case TCP is used. 
For file transfer we use TCP but for file 
downloading we use FTP or for small file we use 
TFTP. 
DNS,RIP,OSPF,BOOTP,DHCP,NNP,NAT,TIMES
TAMP and quote of day all uses UDP. 
SMTP is application layer protocol but it uses TCP 
for sending mail.


</details>

---


### Q13. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


The Protocol Data Unit (PDU) for the application 
layer in the Internet stack is


- **(A)** Segment

- **(B)** Datagram

- **(C)** Message

- **(D)** Frame



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Message is the answer. 
For Application, Presentation and Session layers, the 
PDU is message 
For Transport layer, PDU is segment for TCP and 
datagram for UDP 
For Network layer, PDU is packet 
For Datalink layer, PDU is frames 
For physical layer, PDU is stream of bits 
<!-- PAGE 582 -->
COMPUTER NETWORK


</details>

---


### Q14. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which of the following transport layer protocols is 
used to support electronic mail?


- **(A)** SMTP

- **(B)** IP

- **(C)** TCP

- **(D)** UDP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

TCP is used in transport layer to carry out mail 
which is iniated by application layer protocol 
SMTP. 
 So correct option will be -TCP


</details>

---


### Q15. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


A layer -4 firewall (a device that can look at all 
protocol headers  up to the transport layer) 
CANNOT


- **(A)** block entire HTTP traffic during 9:00 pm 
and 5:00 am

- **(B)** block all ICMP traffic

- **(C)** stop incoming traffic from a specific IP 
address but allow outgoing traffic to the 
same IP address

- **(D)** block TCP traffic from a specific user on a 
multi-user system during 9:00 pm and 5:00 
am



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

A is wrong 
Because we're asked if we can block "entire" 
HTTP traffic. This is doable by a L4 firewall by 
disabling port no. 80. 
 B is wrong 
ICMP is a NL protocol, which comes under TL, so 
we're good. 
 C is wrong 
IP addresses are the characteristics of NL, which 
comes under TL. 
 D is right 
Because we're asked to manipulate a specific user. 
We can't do that with a firewall that can see upto 
TL.


</details>

---


### Q16. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Consider the different activities related to email. 
 ml : Send an email from mail client to mail 
server 
 m 2 : Download an email from mailbox server 
to a mail client 
 m3 ; Checking email in a web browser 
 Which is the application level protocol used in each 
activity?


- **(A)** m1: HTTP m2: SMTP m3: POP

- **(B)** m1 : SMTP m2 : FTP m3 : HTTP

- **(C)** m1: SMTP m2: POP m3: HTTP

- **(D)** m1 : POP m2 : SMTP m 3 : IMAP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

Sending mail → SMTP 
Downloading mail → POP (or IMAP, but POP 
in options) 
Checking via browser → HTTP 
Mapping: 
m1 → SMTP 
m2 → POP 
m3 → HTTP 
Final Answer: 
C. m1: SMTP, m2: POP, m3: HTTP


</details>

---


### Q17. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following is not a client -server 
application?


- **(A)** Internet chat

- **(B)** Web browsing

- **(C)** E-mail

- **(D)** Ping



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - D


**Step-by-Step Explanation:**

(A) Typical internet chat is a client/server app, 
since a client makes a connection to a central 
server and receives update. There are some 
chat systems that work on  a P2P model. 
(B) Web browsing is client/server, where a 
browser is the client and the web page is 
served up by a server. 
 (C) E-mail is typically thought of as a 
client/server app, although hops will be made 
between POP servers. 
(D) Ping uses ICMP protocol, and a ping 
client sends a request to a destination and gets 
back a response. It is a connection testing tool. 
 So, D is the answer


</details>

---


### Q18. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


What is the maximum size of data that the application 
layer can pass on to the TCP layer below?


- **(A)** Any size

- **(B)** 2¹⁶ bytes − size of TCP header

- **(C)** 2¹⁶ bytes

- **(D)** 1500 bytes



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - A


**Step-by-Step Explanation:**

TCP is a stream-oriented protocol. 
Application layer can pass any amount of data 
to TCP. 
 TCP itself segments the data into suitable sizes. 
 Answer: (A) Any size


</details>

---


### Q19. [GATE CSE – 2012 MCQ (1-MARKS]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Which one of the following uses UDP as the transport 
protocol?


- **(A)** HTTP

- **(B)** Telnet

- **(C)** DNS

- **(D)** SMTP



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - C


**Step-by-Step Explanation:**

HTTP → TCP 
Telnet → TCP 
SMTP → TCP 
DNS → uses UDP (for normal queries)


</details>

---


### Q20. [GATE CSE]


> **Topic:** Topic 4 | **Marks:** 2 | **Difficulty:** Medium


Match the following:


- **(A)** P-2, Q-1, R-3, S-5

- **(B)** P-1, Q-4, R-2, S-3

- **(C)** P-1, Q-4, R-2, S-5

- **(D)** P-2, Q-4, R-1, S-3



<details>
<summary><b>🔍 View Answer & Step-by-Step Solution</b></summary>


**Answer:** - B


**Step-by-Step Explanation:**

SMTP → Application layer (1) 
BGP → Network layer (4) 
TCP → Transport layer (2) 
PPP → Data link layer (3) 
 Answer: (B) P-1, Q-4, R-2, S-3


</details>

---

