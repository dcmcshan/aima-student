# Chapter 10 — Knowledge Representation

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part III · Knowledge, Reasoning, and Planning**

**Work in this repo:** edit the markdown files under [`exercises/ch10/`](../../exercises/ch10/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

[Open or edit `ex_1.md` in the repo](../../exercises/ch10/ex_1.md)

## Exercise 10.1
<!-- question -->
Consider a robot whose operation is described by the following PDDL operators:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

[Open or edit `ex_2.md` in the repo](../../exercises/ch10/ex_2.md)

## Exercise 10.2
<!-- question -->
Describe the differences and similarities between problem solving and
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

[Open or edit `ex_3.md` in the repo](../../exercises/ch10/ex_3.md)

## Exercise 10.3
<!-- question -->
Given the action schemas and initial state from Figure airport-pddl-algorithm , what are all the applicable concrete instances of ${Fly}(p,{from},{to})$ in the state described by
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

[Open or edit `ex_4.md` in the repo](../../exercises/ch10/ex_4.md)

## Exercise 10.4
<!-- question -->
The monkey-and-bananas problem is faced by a monkey in a laboratory with some bananas hanging out of reach from the ceiling. A box is available that will enable the monkey to reach the bananas if he climbs on it. Initially, the monkey is at $A$, the bananas at $B$, and the box at $C$. The monkey and box have height ${Low}$, but if the monkey climbs onto the box he will have height ${High}$,...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

[Open or edit `ex_5.md` in the repo](../../exercises/ch10/ex_5.md)

## Exercise 10.5
<!-- question -->
The original {Strips} planner was designed to control Shakey the robot. Figure shakey-figure shows a version of Shakey’s world consisting of four rooms lined up along a corridor, where each room has a door and a light switch. The actions in Shakey’s world include moving from place to place, pushing movable objects (such as boxes),...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

[Open or edit `ex_6.md` in the repo](../../exercises/ch10/ex_6.md)

## Exercise 10.6
<!-- question -->
A finite Turing machine has a finite one-dimensional tape of cells, each
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

[Open or edit `ex_7.md` in the repo](../../exercises/ch10/ex_7.md)

## Exercise 10.7
<!-- question -->
Explain why dropping negative effects from
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

[Open or edit `ex_8.md` in the repo](../../exercises/ch10/ex_8.md)

## Exercise 10.8
<!-- question -->
Figure sussman-anomaly-figure
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

[Open or edit `ex_9.md` in the repo](../../exercises/ch10/ex_9.md)

## Exercise 10.9
<!-- question -->
Prove that backward search with PDDL problems is complete.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

[Open or edit `ex_10.md` in the repo](../../exercises/ch10/ex_10.md)

## Exercise 10.10
<!-- question -->
Construct levels 0, 1, and 2 of the planning graph for the problem in
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

[Open or edit `ex_11.md` in the repo](../../exercises/ch10/ex_11.md)

## Exercise 10.11
<!-- question -->
Prove the following assertions about planning graphs:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

[Open or edit `ex_12.md` in the repo](../../exercises/ch10/ex_12.md)

## Exercise 10.12
<!-- question -->
We saw that planning graphs can handle only propositional actions. What
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

[Open or edit `ex_13.md` in the repo](../../exercises/ch10/ex_13.md)

## Exercise 10.13
<!-- question -->
The set-level heuristic (see page set-level-page uses a planning graph
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

[Open or edit `ex_14.md` in the repo](../../exercises/ch10/ex_14.md)

## Exercise 10.14
<!-- question -->
Examine the definition of bidirectional search in Chapter search-chapter .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

[Open or edit `ex_15.md` in the repo](../../exercises/ch10/ex_15.md)

## Exercise 10.15
<!-- question -->
We contrasted forward and backward state-space searchers with
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

[Open or edit `ex_16.md` in the repo](../../exercises/ch10/ex_16.md)

## Exercise 10.16
<!-- question -->
Up to now we have assumed that the plans we create always make sure that an action’s preconditions are satisfied. Let us now investigate what propositional successor-state axioms such as ${HaveArrow}^{t+1} {\;\;{\Leftrightarrow}\;\;}{}$ $({HaveArrow}^t \land \lnot {Shoot}^t)$ have to say about actions whose preconditions are not satisfied.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

[Open or edit `ex_17.md` in the repo](../../exercises/ch10/ex_17.md)

## Exercise 10.17
<!-- question -->
Consider how to translate a set of action schemas into the successor-state axioms of situation calculus.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

[Open or edit `ex_18.md` in the repo](../../exercises/ch10/ex_18.md)

## Exercise 10.18
<!-- question -->
In the $SATPlan$ algorithm in Figure satplan-agent-algorithm (page satplan-agent-algorithm , each call to the satisfiability algorithm asserts a goal $g^T$, where $T$ ranges from 0 to $T_{max}$. Suppose instead that the...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
