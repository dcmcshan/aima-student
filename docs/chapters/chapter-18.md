# Chapter 18 — Multiagent Decision Making

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part IV · Uncertain Knowledge and Reasoning**

**Work in this repo:** edit the markdown files under [`exercises/ch18/`](../../exercises/ch18/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

[Open or edit `ex_1.md` in the repo](../../exercises/ch18/ex_1.md)

## Exercise 18.1
<!-- question -->
Consider the problem faced by an infant
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

[Open or edit `ex_2.md` in the repo](../../exercises/ch18/ex_2.md)

## Exercise 18.2
<!-- question -->
Repeat Exercise infant-language-exercise for the case
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

[Open or edit `ex_3.md` in the repo](../../exercises/ch18/ex_3.md)

## Exercise 18.3
<!-- question -->
Draw a decision tree for the problem of deciding whether to move forward
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

[Open or edit `ex_4.md` in the repo](../../exercises/ch18/ex_4.md)

## Exercise 18.4
<!-- question -->
We never test the same attribute twice along one path in a decision
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

[Open or edit `ex_5.md` in the repo](../../exercises/ch18/ex_5.md)

## Exercise 18.5
<!-- question -->
Suppose we generate a training set from a decision tree and then apply
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

[Open or edit `ex_6.md` in the repo](../../exercises/ch18/ex_6.md)

## Exercise 18.6
<!-- question -->
In the recursive construction of decision trees, it sometimes happens that a mixed set of positive and negative examples remains at a leaf node, even after all the attributes have been used. Suppose that we have $p$ positive examples and $n$ negative examples.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

[Open or edit `ex_7.md` in the repo](../../exercises/ch18/ex_7.md)

## Exercise 18.7
<!-- question -->
Suppose that an attribute splits the set of
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

[Open or edit `ex_8.md` in the repo](../../exercises/ch18/ex_8.md)

## Exercise 18.8
<!-- question -->
Consider the following data set comprised of three binary input attributes ($A_1, A_2$, and $A_3$) and one binary output:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

[Open or edit `ex_9.md` in the repo](../../exercises/ch18/ex_9.md)

## Exercise 18.9
<!-- question -->
Construct a data set (set of examples with attributes and
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

[Open or edit `ex_10.md` in the repo](../../exercises/ch18/ex_10.md)

## Exercise 18.10
<!-- question -->
A decision graph is a generalization of a decision tree that allows nodes (i.e., attributes used for splits) to have multiple parents, rather than just a single parent. The resulting graph must still be acyclic. Now, consider the XOR function of three binary input attributes, which produces the value 1 if and only if an odd number of the three input attributes has value 1.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

[Open or edit `ex_11.md` in the repo](../../exercises/ch18/ex_11.md)

## Exercise 18.11
<!-- question -->
This exercise considers $\chi^2$ pruning of decision trees (Section chi-squared-section .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

[Open or edit `ex_12.md` in the repo](../../exercises/ch18/ex_12.md)

## Exercise 18.12
<!-- question -->
The standard DECISION-TREE-LEARNING algorithm described in the chapter does not handle cases in which some examples have missing attribute values.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

[Open or edit `ex_13.md` in the repo](../../exercises/ch18/ex_13.md)

## Exercise 18.13
<!-- question -->
In
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

[Open or edit `ex_14.md` in the repo](../../exercises/ch18/ex_14.md)

## Exercise 18.14
<!-- question -->
Suppose you are running a learning experiment on a new algorithm for
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

[Open or edit `ex_15.md` in the repo](../../exercises/ch18/ex_15.md)

## Exercise 18.15
<!-- question -->
Suppose that a learning algorithm is trying to find a consistent
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

[Open or edit `ex_16.md` in the repo](../../exercises/ch18/ex_16.md)

## Exercise 18.16
<!-- question -->
Construct a decision list to classify the data below. Select tests to be as small as possible (in terms of attributes), breaking ties among tests with the same number of attributes by selecting the one that classifies the greatest number of examples correctly. If multiple tests have the same number of attributes and classify the same number of examples, then break the tie using...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

[Open or edit `ex_17.md` in the repo](../../exercises/ch18/ex_17.md)

## Exercise 18.17
<!-- question -->
Prove that a decision list can represent the same function as a decision
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

[Open or edit `ex_18.md` in the repo](../../exercises/ch18/ex_18.md)

## Exercise 18.18
<!-- question -->
This exercise concerns the expressiveness of decision lists (Section learning-theory-section ).
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

[Open or edit `ex_19.md` in the repo](../../exercises/ch18/ex_19.md)

## Exercise 18.19
<!-- question -->
Suppose a $7$-nearest-neighbors regression search
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

[Open or edit `ex_20.md` in the repo](../../exercises/ch18/ex_20.md)

## Exercise 18.20
<!-- question -->
Suppose a $7$-nearest-neighbors regression search
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

[Open or edit `ex_21.md` in the repo](../../exercises/ch18/ex_21.md)

## Exercise 18.21
<!-- question -->
Figure kernel-machine-figure showed how a circle at the origin can be linearly separated by mapping from the features $(x_1, x_2)$ to the two dimensions $(x_1^2, x_2^2)$. But what if the circle is not located at the origin? What if it is an ellipse, not a circle? The general equation for a circle (and hence the decision boundary) is $(x_1-a)^2 + (x_2-b)^2 - r^2{{\,=\,}}0$, and...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

[Open or edit `ex_22.md` in the repo](../../exercises/ch18/ex_22.md)

## Exercise 18.22
<!-- question -->
Construct a support vector machine that computes the
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

[Open or edit `ex_23.md` in the repo](../../exercises/ch18/ex_23.md)

## Exercise 18.23
<!-- question -->
Consider an ensemble learning algorithm that
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

[Open or edit `ex_24.md` in the repo](../../exercises/ch18/ex_24.md)

## Exercise 18.24
<!-- question -->
Construct by hand a neural network that computes the xor
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_25"></a>

[Open or edit `ex_25.md` in the repo](../../exercises/ch18/ex_25.md)

## Exercise 18.25
<!-- question -->
A simple perceptron cannot represent xor (or, generally,
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_26"></a>

[Open or edit `ex_26.md` in the repo](../../exercises/ch18/ex_26.md)

## Exercise 18.26
<!-- question -->
Recall from
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_27"></a>

[Open or edit `ex_27.md` in the repo](../../exercises/ch18/ex_27.md)

## Exercise 18.27
<!-- question -->
Consider the following set of examples, each with six inputs and one target output:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_28"></a>

[Open or edit `ex_28.md` in the repo](../../exercises/ch18/ex_28.md)

## Exercise 18.28
<!-- question -->
Section logistic-regression-section
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_29"></a>

[Open or edit `ex_29.md` in the repo](../../exercises/ch18/ex_29.md)

## Exercise 18.29
<!-- question -->
Suppose you had a neural network with linear activation functions. That is, for each unit the output is some constant $c$ times the weighted sum of the inputs.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_30"></a>

[Open or edit `ex_30.md` in the repo](../../exercises/ch18/ex_30.md)

## Exercise 18.30
<!-- question -->
Implement a data structure for layered, feed-forward neural networks,
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_31"></a>

[Open or edit `ex_31.md` in the repo](../../exercises/ch18/ex_31.md)

## Exercise 18.31
<!-- question -->
Suppose that a training set contains only a single example, repeated 100
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_32"></a>

[Open or edit `ex_32.md` in the repo](../../exercises/ch18/ex_32.md)

## Exercise 18.32
<!-- question -->
The neural network whose learning performance is measured in
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_33"></a>

[Open or edit `ex_33.md` in the repo](../../exercises/ch18/ex_33.md)

## Exercise 18.33
<!-- question -->
Consider the problem of separating $N$ data points into positive and negative examples using a linear separator. Clearly, this can always be done for $N{{\,=\,}}2$ points on a line of dimension $d{{\,=\,}}1$, regardless of how the points are labeled or where they are located (unless the points are in the same place).
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
