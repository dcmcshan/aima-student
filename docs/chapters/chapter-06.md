# Chapter 6 — Constraint Satisfaction Problems

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part II · Problem-Solving**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch06/"><code>exercises/ch06/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 6.1
<!-- question -->
How many solutions are there for the map-coloring problem in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/australia-figure.png">australia-figure</a>? How many solutions if four
colors are allowed? Two colors?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 6.2
<!-- question -->
Consider the problem of placing $k$ knights on an $n\times n$
chessboard such that no two knights are attacking each other, where $k$
is given and $k\leq n^2$.<br>

1.  Choose a CSP formulation. In your formulation, what are the
    variables?<br>

2.  What are the possible values of each variable?<br>

3.  What sets of variables are constrained, and how?<br>

4.  Now consider the problem of putting *as many knights as
    possible* on the board without any attacks. Explain how to
    solve this with local search by defining appropriate ACTIONS and RESULT functions
    and a sensible objective function.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 6.3
<!-- question -->
Consider the problem of <a href="#footnote1">constructing</a> (not solving)
crossword puzzles fitting words into a rectangular grid. The grid,
which is given as part of the problem, specifies which squares are blank
and which are shaded. Assume that a list of words (i.e., a dictionary)
is provided and that the task is to fill in the blank squares by using
any subset of the list. Formulate this problem precisely in two ways:<br>

1.  As a general search problem. Choose an appropriate search algorithm
    and specify a heuristic function. Is it better to fill in blanks one
    letter at a time or one word at a time?<br>

2.  As a constraint satisfaction problem. Should the variables be words
    or letters?<br>

Which formulation do you think will be better? Why?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 6.4
<!-- question -->
Give precise formulations for each of the
following as constraint satisfaction problems:<br>

1.  Rectilinear floor-planning: find non-overlapping places in a large
    rectangle for a number of smaller rectangles.<br>

2.  Class scheduling: There is a fixed number of professors and
    classrooms, a list of classes to be offered, and a list of possible
    time slots for classes. Each professor has a set of classes that he
    or she can teach.<br>

3.  Hamiltonian tour: given a network of cities connected by roads,
    choose an order to visit all cities in a country without
    repeating any.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 6.5
<!-- question -->
Solve the cryptarithmetic problem in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/cryptarithmetic-figure.png">cryptarithmetic-figure</a> by hand, using the
strategy of backtracking with forward checking and the MRV and
least-constraining-value heuristics.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 6.6
<!-- question -->
Show how a single ternary constraint such as
“$A + B = C$” can be turned into three binary constraints by using an
auxiliary variable. You may assume finite domains. (*Hint:*
Consider a new variable that takes on values that are pairs of other
values, and consider constraints such as “$X$ is the first element of
the pair $Y$.”) Next, show how constraints with more than three
variables can be treated similarly. Finally, show how unary constraints
can be eliminated by altering the domains of variables. This completes
the demonstration that any CSP can be transformed into a CSP with only
binary constraints.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 6.7
<!-- question -->
Consider the following logic puzzle: In five houses,
each with a different color, live five persons of different
nationalities, each of whom prefers a different brand of candy, a
different drink, and a different pet. Given the following facts, the
questions to answer are “Where does the zebra live, and in which house
do they drink water?”<br>

The Englishman lives in the red house.<br>

The Spaniard owns the dog.<br>

The Norwegian lives in the first house on the left.<br>

The green house is immediately to the right of the ivory house.<br>

The man who eats Hershey bars lives in the house next to the man with
the fox.<br>

Kit Kats are eaten in the yellow house.<br>

The Norwegian lives next to the blue house.<br>

The Smarties eater owns snails.<br>

The Snickers eater drinks orange juice.<br>

The Ukrainian drinks tea.<br>

The Japanese eats Milky Ways.<br>

Kit Kats are eaten in a house next to the house where the horse is kept.<br>

Coffee is drunk in the green house.<br>

Milk is drunk in the middle house.<br>

Discuss different representations of this problem as a CSP. Why would
one prefer one representation over another?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 6.8
<!-- question -->
Consider the graph with 8 nodes $A_1$, $A_2$, $A_3$, $A_4$, $H$, $T$,
$F_1$, $F_2$. $A_i$ is connected to $A_{i+1}$ for all $i$, each $A_i$ is
connected to $H$, $H$ is connected to $T$, and $T$ is connected to each
$F_i$. Find a 3-coloring of this graph by hand using the following
strategy: backtracking with conflict-directed backjumping, the variable
order $A_1$, $H$, $A_4$, $F_1$, $A_2$, $F_2$, $A_3$, $T$, and the value
order $R$, $G$, $B$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_9.md"><code>ex_9.md</code></a> in the repo.</p>

## Exercise 6.9
<!-- question -->
Explain why it is a good heuristic to choose the variable that is
*most* constrained but the value that is
*least* constraining in a CSP search.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_11.md"><code>ex_11.md</code></a> in the repo.</p>

## Exercise 6.11
<!-- question -->
Use the AC-3 algorithm to show that arc consistency can detect the
inconsistency of the partial assignment
${{WA}}{green},V{red}$ for the problem
shown in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/australia-figure.png">australia-figure</a>.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_12.md"><code>ex_12.md</code></a> in the repo.</p>

## Exercise 6.12
<!-- question -->
Use the AC-3 algorithm to show that arc consistency can detect the
inconsistency of the partial assignment
${{WA}}{red},V{blue}$ for the problem
shown in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/australia-figure.png">australia-figure</a>.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_13.md"><code>ex_13.md</code></a> in the repo.</p>

## Exercise 6.13
<!-- question -->
What is the worst-case complexity of running AC-3 on a tree-structured
CSP?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_14.md"><code>ex_14.md</code></a> in the repo.</p>

## Exercise 6.14
<!-- question -->
AC-3 puts back on the queue <i>every</i> arc
($X_{k}, X_{i}$) whenever <i>any</i> value is deleted from the
domain of $X_{i}$, even if each value of $X_{k}$ is consistent with
several remaining values of $X_{i}$. Suppose that, for every arc
($X_{k}, X_{i}$), we keep track of the number of remaining values of
$X_{i}$ that are consistent with each value of $X_{k}$. Explain how to
update these numbers efficiently and hence show that arc consistency can
be enforced in total time $O(n^2d^2)$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_15.md"><code>ex_15.md</code></a> in the repo.</p>

## Exercise 6.15
<!-- question -->
The Tree-CSP-Solver (Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/tree-csp-figure.png">tree-csp-figure</a>) makes arcs consistent
starting at the leaves and working backwards towards the root. Why does
it do that? What would happen if it went in the opposite direction?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_16.md"><code>ex_16.md</code></a> in the repo.</p>

## Exercise 6.16
<!-- question -->
We introduced Sudoku as a CSP to be solved by search over partial
assignments because that is the way people generally undertake solving
Sudoku problems. It is also possible, of course, to attack these
problems with local search over complete assignments. How well would a
local solver using the min-conflicts heuristic do on Sudoku problems?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_17.md"><code>ex_17.md</code></a> in the repo.</p>

## Exercise 6.17
<!-- question -->
Define in your own words the terms constraint, backtracking search, arc
consistency, backjumping, min-conflicts, and cycle cutset.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_18.md"><code>ex_18.md</code></a> in the repo.</p>

## Exercise 6.18
<!-- question -->
Define in your own words the terms constraint, commutativity, arc
consistency, backjumping, min-conflicts, and cycle cutset.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_19.md"><code>ex_19.md</code></a> in the repo.</p>

## Exercise 6.19
<!-- question -->
Suppose that a graph is known to have a cycle cutset of no more than $k$
nodes. Describe a simple algorithm for finding a minimal cycle cutset
whose run time is not much more than $O(n^k)$ for a CSP with $n$
variables. Search the literature for methods for finding approximately
minimal cycle cutsets in time that is polynomial in the size of the
cutset. Does the existence of such algorithms make the cycle cutset
method practical?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_20.md"><code>ex_20.md</code></a> in the repo.</p>

## Exercise 6.20
<!-- question -->
Consider the problem of tiling a surface (completely and exactly
covering it) with $n$ dominoes ($2\times
1$ rectangles). The surface is an arbitrary edge-connected (i.e.,
adjacent along an edge, not just a corner) collection of $2n$
$1\times 1$ squares (e.g., a checkerboard, a checkerboard with some
squares missing, a $10\times 1$ row of squares, etc.).<br>

1.  Formulate this problem precisely as a CSP where the dominoes are
    the variables.<br>

2.  Formulate this problem precisely as a CSP where the squares are the
    variables, keeping the state space as small as possible.
    (*Hint:* does it matter which particular domino goes on
    a given pair of squares?)<br>

3.  Construct a surface consisting of 6 squares such that your CSP
    formulation from part (b) has a *tree-structured*
    constraint graph.<br>

4.  Describe exactly the set of solvable instances that have a
    tree-structured constraint graph.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_100"></a>

<p>Open or edit <a href="../../exercises/ch06/ex_100.md"><code>ex_100.md</code></a> in the repo.</p>

## Exercise 6.100
<!-- question -->
Generate random instances of map-coloring problems as follows: scatter
$n$ points on the unit square; select a point $X$ at random, connect $X$
by a straight line to the nearest point $Y$ such that $X$ is not already
connected to $Y$ and the line crosses no other line; repeat the previous
step until no more connections are possible. The points represent
regions on the map and the lines connect neighbors. Now try to find
$k$-colorings of each map, for both $k3$ and
$k4$, using min-conflicts, backtracking, backtracking with
forward checking, and backtracking with MAC. Construct a table of
average run times for each algorithm for values of $n$ up to the largest
you can manage. Comment on your results.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
