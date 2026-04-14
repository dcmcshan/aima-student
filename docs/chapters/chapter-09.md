# Chapter 9 — Inference in First-Order Logic

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part III · Knowledge, Reasoning, and Planning**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch09/"><code>exercises/ch09/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 9.1
<!-- question -->
Prove that Universal Instantiation is sound and that Existential
Instantiation produces an inferentially equivalent knowledge base.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 9.2
<!-- question -->
From ${Likes}({Jerry},{IceCream})$ it seems reasonable to infer
${\exists\,x\;\;}
{Likes}(x,{IceCream})$. Write down a general inference rule, , that
sanctions this inference. State carefully the conditions that must be
satisfied by the variables and terms involved.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 9.3
<!-- question -->
Suppose a knowledge base contains just one sentence,
$\exists\,x\ {AsHighAs}(x,{Everest})$. Which of the following are
legitimate results of applying Existential Instantiation?<br>

1.  ${AsHighAs}({Everest},{Everest})$.<br>

2.  ${AsHighAs}({Kilimanjaro},{Everest})$.<br>

3.  ${AsHighAs}({Kilimanjaro},{Everest}) \land {AsHighAs}({BenNevis},{Everest})$\
    (after two applications).<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 9.4
<!-- question -->
For each pair of atomic sentences, give the most general unifier if it
exists:<br>

1.  $P(A,B,B)$, $P(x,y,z)$.<br>

2.  $Q(y,G(A,B))$, $Q(G(x,x),y)$.<br>

3.  ${Older}({Father}(y),y)$, ${Older}({Father}(x),{John})$.<br>

4.  ${Knows}({Father}(y),y)$, ${Knows}(x,x)$.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 9.5
<!-- question -->
For each pair of atomic sentences, give the most general unifier if it
exists:<br>

1.  $P(A,B,B)$, $P(x,y,z)$.<br>

2.  $Q(y,G(A,B))$, $Q(G(x,x),y)$.<br>

3.  ${Older}({Father}(y),y)$, ${Older}({Father}(x),{John})$.<br>

4.  ${Knows}({Father}(y),y)$, ${Knows}(x,x)$.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 9.6
<!-- question -->
Consider the subsumption lattices shown
in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/subsumption-lattice-figure.png">subsumption-lattice-figure</a>
(page <a class="pageRef" title="" href="#">subsumption-lattice-figure</a><br>.

1.  Construct the lattice for the sentence
    ${Employs}({Mother}({John}),{Father}({Richard}))$.<br>

2.  Construct the lattice for the sentence ${Employs}({IBM},y)$
    (“Everyone works for IBM”). Remember to include every kind of query
    that unifies with the sentence.<br>

3.  Assume that indexes each sentence under every node in its
    subsumption lattice. Explain how should work when some of these
    sentences contain variables; use as examples the sentences in (a)
    and (b) and the query ${Employs}(x,{Father}(x))$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 9.7
<!-- question -->
Write down logical representations for the
following sentences, suitable for use with Generalized Modus Ponens:<br>

1.  Horses, cows, and pigs are mammals.<br>

2.  An offspring of a horse is a horse.<br>

3.  Bluebeard is a horse.<br>

4.  Bluebeard is Charlie’s parent.<br>

5.  Offspring and parent are inverse relations.<br>

6.  Every mammal has a parent.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 9.8
<!-- question -->
These questions concern concern issues with substitution and
Skolemization.<br>

1.  Given the premise ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$, it is
    not valid to conclude that ${\exists\,q\;\;} P(q,q)$. Give an
    example of a predicate $P$ where the first is true but the second
    is false.<br>

2.  Suppose that an inference engine is incorrectly written with the
    occurs check omitted, so that it allows a literal like $P(x,F(x))$
    to be unified with $P(q,q)$. (As mentioned, most standard
    implementations of Prolog actually do allow this.) Show that such an
    inference engine will allow the conclusion ${\exists\,y\;\;} P(q,q)$
    to be inferred from the premise
    ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$.<br>

3.  Suppose that a procedure that converts first-order logic to clausal
    form incorrectly Skolemizes
    ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$ to $P(x,Sk0)$—that is, it
    replaces $y$ by a Skolem constant rather than by a Skolem function
    of $x$. Show that an inference engine that uses such a procedure
    will likewise allow ${\exists\,q\;\;} P(q,q)$ to be inferred from
    the premise ${\forall\,x\;\;} {\exists\,y\;\;} P(x,y)$.<br>

4.  A common error among students is to suppose that, in unification,
    one is allowed to substitute a term for a Skolem constant instead of
    for a variable. For instance, they will say that the formulas
    $P(Sk1)$ and $P(A)$ can be unified under the substitution
    $\{ Sk1/A \}$. Give an example where this leads to an
    invalid inference.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_9.md"><code>ex_9.md</code></a> in the repo.</p>

## Exercise 9.9
<!-- question -->
This question considers Horn KBs, such as the following:
$$\begin{array}{l}
P(F(x)) {\:\;{\Rightarrow}\:\;}P(x)\\
Q(x) {\:\;{\Rightarrow}\:\;}P(F(x))\\
P(A)\\
Q(B)
\end{array}$$ Let FC be a breadth-first forward-chaining algorithm that
repeatedly adds all consequences of currently satisfied rules; let BC be
a depth-first left-to-right backward-chaining algorithm that tries
clauses in the order given in the KB. Which of the following are true?<br>

1.  FC will infer the literal $Q(A)$.<br>

2.  FC will infer the literal $P(B)$.<br>

3.  If FC has failed to infer a given literal, then it is not entailed
    by the KB.<br>

4.  BC will return ${true}$ given the query $P(B)$.<br>

5.  If BC does not return ${true}$ given a query literal, then it is
    not entailed by the KB.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_10.md"><code>ex_10.md</code></a> in the repo.</p>

## Exercise 9.10
<!-- question -->
Explain how to write any given 3-SAT problem of
arbitrary size using a single first-order definite clause and no more
than 30 ground facts.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_11.md"><code>ex_11.md</code></a> in the repo.</p>

## Exercise 9.11
<!-- question -->
Suppose you are given the following axioms:<br>

 1. $0 \leq 3$.<br>
 2. $7 \leq 9$.<br>
 3. ${\forall\,x\;\;} \; \; x \leq x$.<br>
 4. ${\forall\,x\;\;} \; \; x \leq x+0$.<br>
 5. ${\forall\,x\;\;} \; \; x+0 \leq x$.<br>
 6. ${\forall\,x,y\;\;} \; \; x+y \leq y+x$.<br>
 7. ${\forall\,w,x,y,z\;\;} \; \; w \leq y$ $\wedge$ $x \leq z$ ${\:\;{\Rightarrow}\:\;}$ $w+x \leq y+z$.<br>
 8. ${\forall\,x,y,z\;\;} \; \; x \leq y \wedge y \leq z \: {\:\;{\Rightarrow}\:\;}\: x \leq z$ <br>
<br>
1.  Give a backward-chaining proof of the sentence $7 \leq 3+9$. (Be
    sure, of course, to use only the axioms given here, not anything
    else you may know about arithmetic.) Show only the steps that leads
    to success, not the irrelevant steps.<br>

2.  Give a forward-chaining proof of the sentence $7 \leq 3+9$. Again,
    show only the steps that lead to success.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_12.md"><code>ex_12.md</code></a> in the repo.</p>

## Exercise 9.12
<!-- question -->
Suppose you are given the following axioms:<br>

> 1. $0 \leq 4$.<br>

> 2. $5 \leq 9$.<br>

> 3. ${\forall\,x\;\;} \; \; x \leq x$.<br>

> 4. ${\forall\,x\;\;} \; \; x \leq x+0$.<br>

> 5. ${\forall\,x\;\;} \; \; x+0 \leq x$.<br>

> 6. ${\forall\,x,y\;\;} \; \; x+y \leq y+x$.<br>

> 7. ${\forall\,w,x,y,z\;\;} \; \; w \leq y$ $\wedge$ $x \leq z {\:\;{\Rightarrow}\:\;}$ $w+x \leq y+z$.<br>

> 8. ${\forall\,x,y,z\;\;} \; \; x \leq y \wedge y \leq z \: {\:\;{\Rightarrow}\:\;}\: x \leq z$<br>
<br>
1.  Give a backward-chaining proof of the sentence $5 \leq 4+9$. (Be
    sure, of course, to use only the axioms given here, not anything
    else you may know about arithmetic.) Show only the steps that leads
    to success, not the irrelevant steps.<br>

2.  Give a forward-chaining proof of the sentence $5 \leq 4+9$. Again,
    show only the steps that lead to success.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_13.md"><code>ex_13.md</code></a> in the repo.</p>

## Exercise 9.13
<!-- question -->
A popular children’s riddle is “Brothers and sisters have I none, but
that man’s father is my father’s son.” Use the rules of the family
domain (Section <a class="sectionRef" title="" href="#">kinship-domain-section</a> on
page <a class="pageRef" title="" href="#">kinship-domain-section</a> to show who that man is. You may apply any of the
inference methods described in this chapter. Why do you think that this
riddle is difficult?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_14.md"><code>ex_14.md</code></a> in the repo.</p>

## Exercise 9.14
<!-- question -->
Suppose we put into a logical knowledge base a segment of the
U.S. census data listing the age, city of residence, date of birth, and
mother of every person, using social security numbers as identifying
constants for each person. Thus, George’s age is given by
${Age}(443-65-1282, 56)$. Which of the following
indexing schemes S1–S5 enable an efficient solution for which of the
queries Q1–Q4 (assuming normal backward chaining)?<br>
<br>
- <b>S1</b>: an index for each atom in each position.<br>
- <b>S2</b>: an index for each first argument.<br>
- <b>S3</b>: an index for each predicate atom.<br>
- <b>S4</b>: an index for each <i>combination</i> of predicate and first argument.<br>
- <b>S5</b>: an index for each <i>combination</i> of predicate and second argument and an index for each first argument.<br>
- <b>Q1</b>: ${Age}(\mbox 443-44-4321,x)$<br>
- <b>Q2</b>: ${ResidesIn}(x,{Houston})$<br>
- <b>Q3</b>: ${Mother}(x,y)$<br>
- <b>Q4</b>: ${Age}(x,{34}) \land {ResidesIn}(x,{TinyTownUSA})$<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_15.md"><code>ex_15.md</code></a> in the repo.</p>

## Exercise 9.15
<!-- question -->
One might suppose that we can avoid the
problem of variable conflict in unification during backward chaining by
standardizing apart all of the sentences in the knowledge base once and
for all. Show that, for some sentences, this approach cannot work.
(<i>Hint</i>: Consider a sentence in which one part unifies with
another.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_16.md"><code>ex_16.md</code></a> in the repo.</p>

## Exercise 9.16
<!-- question -->
In this exercise, use the sentences you wrote in
Exercise <a href="#">fol-horses-exercise</a> to answer a question by
using a backward-chaining algorithm.<br>

1.  Draw the proof tree generated by an exhaustive backward-chaining
    algorithm for the query ${\exists\,h\;\;}{Horse}(h)$, where
    clauses are matched in the order given.<br>

2.  What do you notice about this domain?<br>

3.  How many solutions for $h$ actually follow from your sentences?<br>

4.  Can you think of a way to find all of them? (<i>Hint</i>:
    See <a class="paperRef" title="" href="">Smith+al:1986</a>.)<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_17.md"><code>ex_17.md</code></a> in the repo.</p>

## Exercise 9.17
<!-- question -->
Trace the execution of the backward-chaining
algorithm in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/backward-chaining-algorithm">backward-chaining-algorithm</a>
(page <a class="pageRef" title="" href="#">backward-chaining-algorithm</a> when it is applied to solve the crime problem
(page <A href="#">west-problem-page</a>. Show the sequence of values taken on by the
${goals}$ variable, and arrange them into a tree.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_18.md"><code>ex_18.md</code></a> in the repo.</p>

## Exercise 9.18
<!-- question -->
The following Prolog code defines a predicate P. (Remember
that uppercase terms are variables, not constants, in Prolog.)<br>

        P(X,[X|Y]).<br>
        P(X,[Y|Z]) :- P(X,Z).<br>

1.  Show proof trees and solutions for the queries
    P(A,[2,1,3]) and P(2,[1,A,3]).<br>

2.  What standard list operation does P represent?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_19.md"><code>ex_19.md</code></a> in the repo.</p>

## Exercise 9.19
<!-- question -->
The following Prolog code defines a predicate P. (Remember
that uppercase terms are variables, not constants, in Prolog.)<br>

        P(X,[X|Y]).<br>
        P(X,[Y|Z]) :- P(X,Z).<br>

1.  Show proof trees and solutions for the queries
    P(A,[1,2,3]) and P(2,[1,A,3]).<br>

2.  What standard list operation does P represent?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_20.md"><code>ex_20.md</code></a> in the repo.</p>

## Exercise 9.20
<!-- question -->
This exercise looks at sorting in Prolog.<br>

1.  Write Prolog clauses that define the predicate
    sorted(L), which is true if and only if list
    L is sorted in ascending order.<br>

2.  Write a Prolog definition for the predicate perm(L,M),
    which is true if and only if L is a permutation of
    M.<br>

3.  Define sort(L,M) (M is a sorted version of
    L) using perm and sorted.<br>

4.  Run sort on longer and longer lists until you lose
    patience. What is the time complexity of your program?<br>

5.  Write a faster sorting algorithm, such as insertion sort or
    quicksort, in Prolog.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_21.md"><code>ex_21.md</code></a> in the repo.</p>

## Exercise 9.21
<!-- question -->
This exercise looks at the recursive
application of rewrite rules, using logic programming. A rewrite rule
(or <b>demodulator</b> in terminology) is an
equation with a specified direction. For example, the rewrite rule
$x+0 \rightarrow x$ suggests replacing any expression that matches $x+0$
with the expression $x$. Rewrite rules are a key component of equational
reasoning systems. Use the predicate rewrite(X,Y) to
represent rewrite rules. For example, the earlier rewrite rule is
written as rewrite(X+0,X). Some terms are
<i>primitive</i> and cannot be further simplified; thus, we
write primitive(0) to say that 0 is a primitive term.<br>

1.  Write a definition of a predicate simplify(X,Y), that
    is true when Y is a simplified version of
    X—that is, when no further rewrite rules apply to any
    subexpression of Y.<br>

2.  Write a collection of rules for the simplification of expressions
    involving arithmetic operators, and apply your simplification
    algorithm to some sample expressions.<br>

3.  Write a collection of rewrite rules for symbolic differentiation,
    and use them along with your simplification rules to differentiate
    and simplify expressions involving arithmetic expressions,
    including exponentiation.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_22.md"><code>ex_22.md</code></a> in the repo.</p>

## Exercise 9.22
<!-- question -->
This exercise considers the implementation of search algorithms in
Prolog. Suppose that successor(X,Y) is true when state
Y is a successor of state X; and that
goal(X) is true when X is a goal state. Write
a definition for solve(X,P), which means that
P is a path (list of states) beginning with X,
ending in a goal state, and consisting of a sequence of legal steps as
defined by successor. You will find that depth-first search
is the easiest way to do this. How easy would it be to add heuristic
search control?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_23.md"><code>ex_23.md</code></a> in the repo.</p>

## Exercise 9.23
<!-- question -->
Suppose a knowledge base contains just the following first-order Horn
clauses:<br>

$$
Ancestor(Mother(x),x)
$$
$$
Ancestor(x,y) \land Ancestor(y,z) \implies Ancestor(x,z)
$$

Consider a forward chaining algorithm that, on the $j$th iteration,
terminates if the KB contains a sentence that unifies with the query,
else adds to the KB every atomic sentence that can be inferred from the
sentences already in the KB after iteration $j-1$.<br>

1.  For each of the following queries, say whether the algorithm
    will (1) give an answer (if so, write down that answer); or (2)
    terminate with no answer; or (3) never terminate.<br>

    1.  $Ancestor(Mother(y),John)$<br>

    2.  $Ancestor(Mother(Mother(y)),John)$<br>

    3.  $Ancestor(Mother(Mother(Mother(y))),Mother(y))$<br>

    4.  $Ancestor(Mother(John),Mother(Mother(John)))$<br>

2.  Can a resolution algorithm prove the sentence
    $\lnot Ancestor(John,John)$ from the original knowledge base?
    Explain how, or why not.<br>

3.  Suppose we add the assertion that $\lnot(Mother(x){{\,=\,}}x)$ and
    augment the resolution algorithm with inference rules for equality.
    Now what is the answer to (b)?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_24.md"><code>ex_24.md</code></a> in the repo.</p>

## Exercise 9.24
<!-- question -->
Let $\cal L$ be the first-order language with a single predicate
$S(p,q)$, meaning “$p$ shaves  $q$.” Assume a domain of people.<br>

1.  Consider the sentence “There exists a person $P$ who shaves every
    one who does not shave themselves, and only people that do not
    shave themselves.” Express this in $\cal L$.<br>

2.  Convert the sentence in (a) to clausal form.<br>

3.  Construct a resolution proof to show that the clauses in (b) are
    inherently inconsistent. (Note: you do not need any
    additional axioms.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_25"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_25.md"><code>ex_25.md</code></a> in the repo.</p>

## Exercise 9.25
<!-- question -->
How can resolution be used to show that a sentence is valid?
Unsatisfiable?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_26"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_26.md"><code>ex_26.md</code></a> in the repo.</p>

## Exercise 9.26
<!-- question -->
Construct an example of two clauses that can be resolved together in two
different ways giving two different outcomes.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_27"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_27.md"><code>ex_27.md</code></a> in the repo.</p>

## Exercise 9.27
<!-- question -->
From “Horses are animals,” it follows that “The head of a horse is the
head of an animal.” Demonstrate that this inference is valid by carrying
out the following steps:<br>

1.  Translate the premise and the conclusion into the language of
    first-order logic. Use three predicates: ${HeadOf}(h,x)$ (meaning
    “$h$ is the head of $x$”), ${Horse}(x)$, and ${Animal}(x)$.<br>

2.  Negate the conclusion, and convert the premise and the negated
    conclusion into conjunctive normal form.<br>

3.  Use resolution to show that the conclusion follows from the premise.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_28"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_28.md"><code>ex_28.md</code></a> in the repo.</p>

## Exercise 9.28
<!-- question -->
From “Sheep are animals,” it follows that “The head of a sheep is the
head of an animal.” Demonstrate that this inference is valid by carrying
out the following steps:<br>

1.  Translate the premise and the conclusion into the language of
    first-order logic. Use three predicates: ${HeadOf}(h,x)$ (meaning
    “$h$ is the head of $x$”), ${Sheep}(x)$, and ${Animal}(x)$.<br>

2.  Negate the conclusion, and convert the premise and the negated
    conclusion into conjunctive normal form.<br>

3.  Use resolution to show that the conclusion follows from the premise.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_29"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_29.md"><code>ex_29.md</code></a> in the repo.</p>

## Exercise 9.29
<!-- question -->
Here are two sentences in the language of
first-order logic:<br>

-   <b>(A)</b>
    ${\forall\,x\;\;} {\exists\,y\;\;} ( x \geq y )$

-   <b>(B)</b>
    ${\exists\,y\;\;} {\forall\,x\;\;} ( x \geq y )$

1.  Assume that the variables range over all the natural numbers
    $0,1,2,\ldots, \infty$ and that the “$\geq$” predicate means “is
    greater than or equal to.” Under this interpretation, translate (A)
    and (B) into English.<br>

2.  Is (A) true under this interpretation?<br>

3.  Is (B) true under this interpretation?<br>

4.  Does (A) logically entail (B)?<br>

5.  Does (B) logically entail (A)?<br>

6.  Using resolution, try to prove that (A) follows from (B). Do this
    even if you think that (B) does not logically entail (A); continue
    until the proof breaks down and you cannot proceed (if it does
    break down). Show the unifying substitution for each resolution
    step. If the proof fails, explain exactly where, how, and why it
    breaks down.<br>

7.  Now try to prove that (B) follows from (A).<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_30"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_30.md"><code>ex_30.md</code></a> in the repo.</p>

## Exercise 9.30
<!-- question -->
Resolution can produce nonconstructive proofs for queries with
variables, so we had to introduce special mechanisms to extract definite
answers. Explain why this issue does not arise with knowledge bases
containing only definite clauses.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_31"></a>

<p>Open or edit <a href="../../exercises/ch09/ex_31.md"><code>ex_31.md</code></a> in the repo.</p>

## Exercise 9.31
<!-- question -->
We said in this chapter that resolution cannot be used to generate all
logical consequences of a set of sentences. Can any algorithm do this?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
