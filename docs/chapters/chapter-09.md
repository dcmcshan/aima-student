# Chapter 9 — Inference in First-Order Logic

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part III · Knowledge, Reasoning, and Planning**

**Work in this repo:** edit the markdown files under [`exercises/ch09/`](../../exercises/ch09/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

[Open or edit `ex_1.md` in the repo](../../exercises/ch09/ex_1.md)

## Exercise 9.1
<!-- question -->
Prove that Universal Instantiation is sound and that Existential
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

[Open or edit `ex_2.md` in the repo](../../exercises/ch09/ex_2.md)

## Exercise 9.2
<!-- question -->
From ${Likes}({Jerry},{IceCream})$ it seems reasonable to infer
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

[Open or edit `ex_3.md` in the repo](../../exercises/ch09/ex_3.md)

## Exercise 9.3
<!-- question -->
Suppose a knowledge base contains just one sentence, $\exists\,x\ {AsHighAs}(x,{Everest})$. Which of the following are legitimate results of applying Existential Instantiation?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

[Open or edit `ex_4.md` in the repo](../../exercises/ch09/ex_4.md)

## Exercise 9.4
<!-- question -->
For each pair of atomic sentences, give the most general unifier if it exists:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

[Open or edit `ex_5.md` in the repo](../../exercises/ch09/ex_5.md)

## Exercise 9.5
<!-- question -->
For each pair of atomic sentences, give the most general unifier if it exists:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

[Open or edit `ex_6.md` in the repo](../../exercises/ch09/ex_6.md)

## Exercise 9.6
<!-- question -->
Consider the subsumption lattices shown in Figure subsumption-lattice-figure (page subsumption-lattice-figure .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

[Open or edit `ex_7.md` in the repo](../../exercises/ch09/ex_7.md)

## Exercise 9.7
<!-- question -->
Write down logical representations for the following sentences, suitable for use with Generalized Modus Ponens:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

[Open or edit `ex_8.md` in the repo](../../exercises/ch09/ex_8.md)

## Exercise 9.8
<!-- question -->
These questions concern concern issues with substitution and Skolemization.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

[Open or edit `ex_9.md` in the repo](../../exercises/ch09/ex_9.md)

## Exercise 9.9
<!-- question -->
This question considers Horn KBs, such as the following: $$\begin{array}{l} P(F(x)) {\:\;{\Rightarrow}\:\;}P(x)\\ Q(x) {\:\;{\Rightarrow}\:\;}P(F(x))\\ P(A)\\ Q(B) \end{array}$$ Let FC be a breadth-first forward-chaining algorithm that repeatedly adds all consequences of currently satisfied rules; let BC be a depth-first left-to-right backward-chaining algorithm that tries clauses in the order...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

[Open or edit `ex_10.md` in the repo](../../exercises/ch09/ex_10.md)

## Exercise 9.10
<!-- question -->
Explain how to write any given 3-SAT problem of
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

[Open or edit `ex_11.md` in the repo](../../exercises/ch09/ex_11.md)

## Exercise 9.11
<!-- question -->
Suppose you are given the following axioms:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

[Open or edit `ex_12.md` in the repo](../../exercises/ch09/ex_12.md)

## Exercise 9.12
<!-- question -->
Suppose you are given the following axioms:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

[Open or edit `ex_13.md` in the repo](../../exercises/ch09/ex_13.md)

## Exercise 9.13
<!-- question -->
A popular children’s riddle is “Brothers and sisters have I none, but
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

[Open or edit `ex_14.md` in the repo](../../exercises/ch09/ex_14.md)

## Exercise 9.14
<!-- question -->
Suppose we put into a logical knowledge base a segment of the
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

[Open or edit `ex_15.md` in the repo](../../exercises/ch09/ex_15.md)

## Exercise 9.15
<!-- question -->
One might suppose that we can avoid the
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

[Open or edit `ex_16.md` in the repo](../../exercises/ch09/ex_16.md)

## Exercise 9.16
<!-- question -->
In this exercise, use the sentences you wrote in Exercise fol-horses-exercise to answer a question by using a backward-chaining algorithm.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

[Open or edit `ex_17.md` in the repo](../../exercises/ch09/ex_17.md)

## Exercise 9.17
<!-- question -->
Trace the execution of the backward-chaining
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

[Open or edit `ex_18.md` in the repo](../../exercises/ch09/ex_18.md)

## Exercise 9.18
<!-- question -->
The following Prolog code defines a predicate P. (Remember that uppercase terms are variables, not constants, in Prolog.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

[Open or edit `ex_19.md` in the repo](../../exercises/ch09/ex_19.md)

## Exercise 9.19
<!-- question -->
The following Prolog code defines a predicate P. (Remember that uppercase terms are variables, not constants, in Prolog.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

[Open or edit `ex_20.md` in the repo](../../exercises/ch09/ex_20.md)

## Exercise 9.20
<!-- question -->
This exercise looks at sorting in Prolog.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

[Open or edit `ex_21.md` in the repo](../../exercises/ch09/ex_21.md)

## Exercise 9.21
<!-- question -->
This exercise looks at the recursive application of rewrite rules, using logic programming. A rewrite rule (or demodulator in terminology) is an equation with a specified direction. For example, the rewrite rule $x+0 \rightarrow x$ suggests replacing any expression that matches $x+0$ with the expression $x$. Rewrite rules are a key component of equational reasoning systems. Use the...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

[Open or edit `ex_22.md` in the repo](../../exercises/ch09/ex_22.md)

## Exercise 9.22
<!-- question -->
This exercise considers the implementation of search algorithms in
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

[Open or edit `ex_23.md` in the repo](../../exercises/ch09/ex_23.md)

## Exercise 9.23
<!-- question -->
Suppose a knowledge base contains just the following first-order Horn clauses:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

[Open or edit `ex_24.md` in the repo](../../exercises/ch09/ex_24.md)

## Exercise 9.24
<!-- question -->
Let $\cal L$ be the first-order language with a single predicate $S(p,q)$, meaning “$p$ shaves $q$.” Assume a domain of people.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_25"></a>

[Open or edit `ex_25.md` in the repo](../../exercises/ch09/ex_25.md)

## Exercise 9.25
<!-- question -->
How can resolution be used to show that a sentence is valid?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_26"></a>

[Open or edit `ex_26.md` in the repo](../../exercises/ch09/ex_26.md)

## Exercise 9.26
<!-- question -->
Construct an example of two clauses that can be resolved together in two
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_27"></a>

[Open or edit `ex_27.md` in the repo](../../exercises/ch09/ex_27.md)

## Exercise 9.27
<!-- question -->
From “Horses are animals,” it follows that “The head of a horse is the head of an animal.” Demonstrate that this inference is valid by carrying out the following steps:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_28"></a>

[Open or edit `ex_28.md` in the repo](../../exercises/ch09/ex_28.md)

## Exercise 9.28
<!-- question -->
From “Sheep are animals,” it follows that “The head of a sheep is the head of an animal.” Demonstrate that this inference is valid by carrying out the following steps:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_29"></a>

[Open or edit `ex_29.md` in the repo](../../exercises/ch09/ex_29.md)

## Exercise 9.29
<!-- question -->
Here are two sentences in the language of first-order logic:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_30"></a>

[Open or edit `ex_30.md` in the repo](../../exercises/ch09/ex_30.md)

## Exercise 9.30
<!-- question -->
Resolution can produce nonconstructive proofs for queries with
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_31"></a>

[Open or edit `ex_31.md` in the repo](../../exercises/ch09/ex_31.md)

## Exercise 9.31
<!-- question -->
We said in this chapter that resolution cannot be used to generate all
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
