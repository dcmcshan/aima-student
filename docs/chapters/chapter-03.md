# Chapter 3 — Solving Problems by Searching

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part II · Problem-Solving**

**Work in this repo:** edit the markdown files under [`exercises/ch03/`](../../exercises/ch03/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

[Open or edit `ex_1.md` in the repo](../../exercises/ch03/ex_1.md)

## Exercise 3.1
<!-- question -->
Explain why problem formulation must follow goal formulation.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

[Open or edit `ex_2.md` in the repo](../../exercises/ch03/ex_2.md)

## Exercise 3.2
<!-- question -->
Give a complete problem formulation for each of the following problems. Choose a formulation that is precise enough to be implemented.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

[Open or edit `ex_3.md` in the repo](../../exercises/ch03/ex_3.md)

## Exercise 3.3
<!-- question -->
Your goal is to navigate a robot out of a maze. The robot starts in the center of the maze facing north. You can turn the robot to face north, east, south, or west. You can direct the robot to move forward a certain distance, although it will stop before hitting a wall.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

[Open or edit `ex_4.md` in the repo](../../exercises/ch03/ex_4.md)

## Exercise 3.4
<!-- question -->
You have a $9 \times 9$ grid of squares, each of which can be colored red or blue. The grid is initially colored all blue, but you can change the color of any square any number of times. Imagining the grid divided into nine $3 \times 3$ sub-squares, you want each sub-square to be all one color but neighboring sub-squares to be different colors.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

[Open or edit `ex_5.md` in the repo](../../exercises/ch03/ex_5.md)

## Exercise 3.5
<!-- question -->
Suppose two friends live in different cities on a map, such as the Romania map shown in . On every turn, we can simultaneously move each friend to a neighboring city on the map. The amount of time needed to move from city $i$ to neighbor $j$ is equal to the road distance $d(i,j)$ between the cities, but on each turn the friend that arrives first must wait until the other one arrives (and calls...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

[Open or edit `ex_6.md` in the repo](../../exercises/ch03/ex_6.md)

## Exercise 3.6
<!-- question -->
Show that the 8-puzzle states are divided
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

[Open or edit `ex_7.md` in the repo](../../exercises/ch03/ex_7.md)

## Exercise 3.7
<!-- question -->
Consider the $n$-queens problem using the
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

[Open or edit `ex_8.md` in the repo](../../exercises/ch03/ex_8.md)

## Exercise 3.8
<!-- question -->
Give a complete problem formulation for each of the following. Choose a formulation that is precise enough to be implemented.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

[Open or edit `ex_9.md` in the repo](../../exercises/ch03/ex_9.md)

## Exercise 3.9
<!-- question -->
Consider the problem of finding the shortest path between two points on a plane that has convex polygonal obstacles as shown in . This is an idealization of the problem that a robot has to solve to navigate in a crowded environment.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

[Open or edit `ex_10.md` in the repo](../../exercises/ch03/ex_10.md)

## Exercise 3.10
<!-- question -->
On page non-negative-g , we said that we would not consider problems with negative path costs. In this exercise, we explore this decision in more depth.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

[Open or edit `ex_12.md` in the repo](../../exercises/ch03/ex_12.md)

## Exercise 3.12
<!-- question -->
Define in your own words the following terms: state, state space, search
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

[Open or edit `ex_13.md` in the repo](../../exercises/ch03/ex_13.md)

## Exercise 3.13
<!-- question -->
What’s the difference between a world state, a state description, and a
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

[Open or edit `ex_14.md` in the repo](../../exercises/ch03/ex_14.md)

## Exercise 3.14
<!-- question -->
An action such as really consists of a long sequence of finer-grained
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

[Open or edit `ex_15.md` in the repo](../../exercises/ch03/ex_15.md)

## Exercise 3.15
<!-- question -->
Does a finite state space always lead to a finite search tree? How about
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

[Open or edit `ex_16.md` in the repo](../../exercises/ch03/ex_16.md)

## Exercise 3.16
<!-- question -->
Prove that satisfies the graph
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

[Open or edit `ex_17.md` in the repo](../../exercises/ch03/ex_17.md)

## Exercise 3.17
<!-- question -->
Which of the following are true and which are false? Explain your answers.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

[Open or edit `ex_18.md` in the repo](../../exercises/ch03/ex_18.md)

## Exercise 3.18
<!-- question -->
Consider a state space where the start state is number 1 and each state $k$ has two successors: numbers $2k$ and $2k+1$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

[Open or edit `ex_19.md` in the repo](../../exercises/ch03/ex_19.md)

## Exercise 3.19
<!-- question -->
A basic wooden railway set contains the pieces shown in . The task is to connect these pieces into a railway that has no overlapping tracks and no loose ends where a train could run off onto the floor.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

[Open or edit `ex_20.md` in the repo](../../exercises/ch03/ex_20.md)

## Exercise 3.20
<!-- question -->
Implement two versions of the function for the 8-puzzle: one that copies
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

[Open or edit `ex_21.md` in the repo](../../exercises/ch03/ex_21.md)

## Exercise 3.21
<!-- question -->
On page iterative-lengthening-page , we mentioned iterative lengthening search , an iterative analog of uniform cost search. The idea is to use increasing limits on path cost. If a node is generated whose path cost exceeds the current limit, it is immediately discarded. For each new iteration, the limit is set to the lowest path cost of any node...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

[Open or edit `ex_22.md` in the repo](../../exercises/ch03/ex_22.md)

## Exercise 3.22
<!-- question -->
Describe a state space in which iterative deepening search performs much
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

[Open or edit `ex_23.md` in the repo](../../exercises/ch03/ex_23.md)

## Exercise 3.23
<!-- question -->
Write a program that will take as input two Web page URLs and find a
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

[Open or edit `ex_24.md` in the repo](../../exercises/ch03/ex_24.md)

## Exercise 3.24
<!-- question -->
Consider the vacuum-world problem defined in .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_25"></a>

[Open or edit `ex_25.md` in the repo](../../exercises/ch03/ex_25.md)

## Exercise 3.25
<!-- question -->
Prove each of the following statements, or give a counterexample:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_26"></a>

[Open or edit `ex_26.md` in the repo](../../exercises/ch03/ex_26.md)

## Exercise 3.26
<!-- question -->
Compare the performance of A and RBFS on a set of randomly generated
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_27"></a>

[Open or edit `ex_27.md` in the repo](../../exercises/ch03/ex_27.md)

## Exercise 3.27
<!-- question -->
Trace the operation of A search applied to the problem of getting to
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_28"></a>

[Open or edit `ex_28.md` in the repo](../../exercises/ch03/ex_28.md)

## Exercise 3.28
<!-- question -->
Sometimes there is no good evaluation function for a problem but there
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_29"></a>

[Open or edit `ex_29.md` in the repo](../../exercises/ch03/ex_29.md)

## Exercise 3.29
<!-- question -->
Devise a state space in which A using returns a
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_30"></a>

[Open or edit `ex_30.md` in the repo](../../exercises/ch03/ex_30.md)

## Exercise 3.30
<!-- question -->
Accurate heuristics don’t necessarily reduce search time in the worst
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_31"></a>

[Open or edit `ex_31.md` in the repo](../../exercises/ch03/ex_31.md)

## Exercise 3.31
<!-- question -->
The heuristic path algorithm Pohl:1977 is a best-first search in which the evaluation function
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_32"></a>

[Open or edit `ex_32.md` in the repo](../../exercises/ch03/ex_32.md)

## Exercise 3.32
<!-- question -->
Consider the unbounded version of the regular 2D grid shown in . The start state is at the origin, (0,0), and the goal state is at $(x,y)$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_33"></a>

[Open or edit `ex_33.md` in the repo](../../exercises/ch03/ex_33.md)

## Exercise 3.33
<!-- question -->
$n$ vehicles occupy squares $(1,1)$ through $(n,1)$ (i.e., the bottom row) of an $n\times n$ grid. The vehicles must be moved to the top row but in reverse order; so the vehicle $i$ that starts in $(i,1)$ must end up in $(n-i+1,n)$. On each time step, every one of the $n$ vehicles can move one square up, down, left, or right, or stay put; but if a vehicle stays put, one other adjacent vehicle...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_34"></a>

[Open or edit `ex_34.md` in the repo](../../exercises/ch03/ex_34.md)

## Exercise 3.34
<!-- question -->
Consider the problem of moving $k$ knights from $k$ starting squares $s_1,\ldots,s_k$ to $k$ goal squares $g_1,\ldots,g_k$, on an unbounded chessboard, subject to the rule that no two knights can land on the same square at the same time. Each action consists of moving up to $k$ knights simultaneously. We would like to complete the maneuver in the smallest number of actions.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_35"></a>

[Open or edit `ex_35.md` in the repo](../../exercises/ch03/ex_35.md)

## Exercise 3.35
<!-- question -->
We saw on page I-to-F that the straight-line distance heuristic leads greedy
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_36"></a>

[Open or edit `ex_36.md` in the repo](../../exercises/ch03/ex_36.md)

## Exercise 3.36
<!-- question -->
Invent a heuristic function for the 8-puzzle that sometimes
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_37"></a>

[Open or edit `ex_37.md` in the repo](../../exercises/ch03/ex_37.md)

## Exercise 3.37
<!-- question -->
Prove that if a heuristic is
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_38"></a>

[Open or edit `ex_38.md` in the repo](../../exercises/ch03/ex_38.md)

## Exercise 3.38
<!-- question -->
The traveling salesperson problem (TSP) can be solved with the minimum-spanning-tree (MST) heuristic, which estimates the cost of completing a tour, given that a partial tour has already been constructed. The MST cost of a set of cities is the smallest sum of the link costs of any tree that connects all the cities.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_39"></a>

[Open or edit `ex_39.md` in the repo](../../exercises/ch03/ex_39.md)

## Exercise 3.39
<!-- question -->
On page Gaschnig-h-page , we defined the relaxation of the 8-puzzle in
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_40"></a>

[Open or edit `ex_40.md` in the repo](../../exercises/ch03/ex_40.md)

## Exercise 3.40
<!-- question -->
We gave two simple heuristics for the 8-puzzle: Manhattan distance and
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
