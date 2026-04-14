# Chapter 19 — Learning from Examples

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part V · Machine Learning**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch19/"><code>exercises/ch19/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 19.1
<!-- question -->
Show, by translating into conjunctive normal form and
applying resolution, that the conclusion drawn on page <a class="pageRef" title="" href="#">dbsig-page</a>
concerning Brazilians is sound.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 19.2
<!-- question -->
For each of the following determinations, write down the logical
representation and explain why the determination is true (if it is):<br>

1.  Design and denomination determine the mass of a coin.<br>

2.  For a given program, input determines output.<br>

3.  Climate, food intake, exercise, and metabolism determine weight gain
    and loss.<br>

4.  Baldness is determined by the baldness (or lack thereof) of one’s
    maternal grandfather. <br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 19.3
<!-- question -->
For each of the following determinations, write down the logical
representation and explain why the determination is true (if it is):<br>

1.  Zip code determines the state (U.S.).<br>

2.  Design and denomination determine the mass of a coin.<br>

3.  Climate, food intake, exercise, and metabolism determine weight gain
    and loss.<br>

4.  Baldness is determined by the baldness (or lack thereof) of one’s
    maternal grandfather.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 19.4
<!-- question -->
Would a probabilistic version of determinations be useful? Suggest a
definition.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 19.5
<!-- question -->
Fill in the missing values for the clauses $C_1$ or
$C_2$ (or both) in the following sets of clauses, given that $C$ is the
resolvent of $C_1$ and $C_2$:<br>

1.  $C = {True} \Rightarrow P(A,B)$,
    $C_1 = P(x,y) \Rightarrow Q(x,y)$, $C_2
    = ??$.<br>

2.  $C = {True} \Rightarrow P(A,B)$, $C_1 = ??$,
    $C_2 = ??$.<br>

3.  $C = P(x,y) \Rightarrow P(x,f(y))$, $C_1 = ??$,
    $C_2 = ??$.<br>

If there is more than one possible solution, provide one example of each
different kind.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 19.6
<!-- question -->
Suppose one writes a logic program that carries
out a resolution inference step. That is, let ${Resolve}(c_1,c_2,c)$
succeed if $c$ is the result of resolving $c_1$ and $c_2$. Normally,
${Resolve}$ would be used as part of a theorem prover by calling it
with $c_1$ and $c_2$ instantiated to particular clauses, thereby
generating the resolvent $c$. Now suppose instead that we call it with
$c$ instantiated and $c_1$ and $c_2$ uninstantiated. Will this succeed
in generating the appropriate results of an inverse resolution step?
Would you need any special modifications to the logic programming system
for this to work?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 19.7
<!-- question -->
Suppose that is considering adding a literal
to a clause using a binary predicate $P$ and that previous literals
(including the head of the clause) contain five different variables.<br>

1.  How many functionally different literals can be generated? Two
    literals are functionally identical if they differ only in the names
    of the *new* variables that they contain.<br>

2.  Can you find a general formula for the number of different literals
    with a predicate of arity $r$ when there are $n$ variables
    previously used?<br>

3.  Why does not allow literals that contain no previously used
    variables?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch19/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 19.8
<!-- question -->
Using the data from the family tree in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/family2-figure.png">family2-figure</a>, or a subset thereof, apply the
algorithm to learn a definition for the ${Ancestor}$ predicate.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
