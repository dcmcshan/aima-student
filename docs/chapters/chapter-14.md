# Chapter 14 — Probabilistic Reasoning over Time

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part IV · Uncertain Knowledge and Reasoning**

**Work in this repo:** edit the markdown files under [`exercises/ch14/`](../../exercises/ch14/) (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

[Open or edit `ex_1.md` in the repo](../../exercises/ch14/ex_1.md)

## Exercise 14.1
<!-- question -->
We have a bag of three biased coins $a$, $b$, and $c$ with probabilities of coming up heads of 20%, 60%, and 80%, respectively. One coin is drawn randomly from the bag (with equal likelihood of drawing each of the three coins), and then the coin is flipped three times to generate the outcomes $X_1$, $X_2$, and $X_3$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

[Open or edit `ex_2.md` in the repo](../../exercises/ch14/ex_2.md)

## Exercise 14.2
<!-- question -->
We have a bag of three biased coins $a$, $b$, and $c$ with probabilities of coming up heads of 30%, 60%, and 75%, respectively. One coin is drawn randomly from the bag (with equal likelihood of drawing each of the three coins), and then the coin is flipped three times to generate the outcomes $X_1$, $X_2$, and $X_3$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

[Open or edit `ex_3.md` in the repo](../../exercises/ch14/ex_3.md)

## Exercise 14.3
<!-- question -->
Equation ( parameter-joint-repn-equation on page parameter-joint-repn-equation defines the joint distribution represented by a Bayesian network in terms of the parameters $\theta(X_i{{\,|\,}}{Parents}(X_i))$. This exercise asks you to derive the equivalence between the parameters and the conditional probabilities ${\textbf{...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

[Open or edit `ex_4.md` in the repo](../../exercises/ch14/ex_4.md)

## Exercise 14.4
<!-- question -->
The arc reversal operation of in a Bayesian network allows us to change the direction of an arc $X\rightarrow Y$ while preserving the joint probability distribution that the network represents Shachter:1986 . Arc reversal may require introducing new arcs: all the parents of $X$ also become parents of $Y$, and all parents of $Y$ also become parents...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

[Open or edit `ex_5.md` in the repo](../../exercises/ch14/ex_5.md)

## Exercise 14.5
<!-- question -->
Consider the Bayesian network in Figure burglary-figure.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

[Open or edit `ex_6.md` in the repo](../../exercises/ch14/ex_6.md)

## Exercise 14.6
<!-- question -->
Suppose that in a Bayesian network containing an unobserved variable $Y$, all the variables in the Markov blanket ${MB}(Y)$ have been observed.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

[Open or edit `ex_7.md` in the repo](../../exercises/ch14/ex_7.md)

## Exercise 14.7
<!-- question -->
Let $H_x$ be a random variable denoting the handedness of an individual $x$, with possible values $l$ or $r$. A common hypothesis is that left- or right-handedness is inherited by a simple mechanism; that is, perhaps there is a gene $G_x$, also with values $l$ or $r$, and perhaps actual handedness turns out mostly the same (with some probability $s$) as the gene an individual possesses....
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

[Open or edit `ex_8.md` in the repo](../../exercises/ch14/ex_8.md)

## Exercise 14.8
<!-- question -->
The Markov
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

[Open or edit `ex_9.md` in the repo](../../exercises/ch14/ex_9.md)

## Exercise 14.9
<!-- question -->
Consider the network for car diagnosis shown in Figure car-starts-figure .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

[Open or edit `ex_10.md` in the repo](../../exercises/ch14/ex_10.md)

## Exercise 14.10
<!-- question -->
Consider a simple Bayesian network with root variables ${Cold}$,
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

[Open or edit `ex_11.md` in the repo](../../exercises/ch14/ex_11.md)

## Exercise 14.11
<!-- question -->
Consider the family of linear Gaussian networks, as defined on page LG-network-page .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

[Open or edit `ex_12.md` in the repo](../../exercises/ch14/ex_12.md)

## Exercise 14.12
<!-- question -->
The probit distribution defined on page probit-page describes the probability distribution for a Boolean child, given a single continuous parent.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

[Open or edit `ex_13.md` in the repo](../../exercises/ch14/ex_13.md)

## Exercise 14.13
<!-- question -->
In your local nuclear power station, there is an alarm that senses when a temperature gauge exceeds a given threshold. The gauge measures the temperature of the core. Consider the Boolean variables $A$ (alarm sounds), $F_A$ (alarm is faulty), and $F_G$ (gauge is faulty) and the multivalued nodes $G$ (gauge reading) and $T$ (actual core temperature).
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

[Open or edit `ex_14.md` in the repo](../../exercises/ch14/ex_14.md)

## Exercise 14.14
<!-- question -->
Two astronomers in different parts of the world make measurements $M_1$ and $M_2$ of the number of stars $N$ in some small region of the sky, using their telescopes. Normally, there is a small possibility $e$ of error by up to one star in each direction. Each telescope can also (with a much smaller probability $f$) be badly out of focus (events $F_1$ and $F_2$), in which case the scientist...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

[Open or edit `ex_15.md` in the repo](../../exercises/ch14/ex_15.md)

## Exercise 14.15
<!-- question -->
Consider the network shown in Figure telescope-nets-figure (ii), and assume that the two telescopes work identically. $N{{\,\in\\,}}\{1,2,3\}$ and $M_1,M_2{{\,\in\\,}}\{0,1,2,3,4\}$, with the symbolic CPTs as described in Exercise <a class="exerciseRef" href="{{ site.baseurl...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

[Open or edit `ex_16.md` in the repo](../../exercises/ch14/ex_16.md)

## Exercise 14.16
<!-- question -->
Consider the Bayes net shown in Figure politics-figure .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

[Open or edit `ex_17.md` in the repo](../../exercises/ch14/ex_17.md)

## Exercise 14.17
<!-- question -->
Consider the Bayes net shown in Figure politics-figure .
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

[Open or edit `ex_18.md` in the repo](../../exercises/ch14/ex_18.md)

## Exercise 14.18
<!-- question -->
Consider the variable elimination algorithm in Figure elimination-ask-algorithm (page elimination-ask-algorithm ).
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

[Open or edit `ex_19.md` in the repo](../../exercises/ch14/ex_19.md)

## Exercise 14.19
<!-- question -->
Investigate the complexity of exact inference in general Bayesian networks:
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

[Open or edit `ex_20.md` in the repo](../../exercises/ch14/ex_20.md)

## Exercise 14.20
<!-- question -->
Consider the problem of generating a random sample from a specified distribution on a single variable. Assume you have a random number generator that returns a random number uniformly distributed between 0 and 1.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

[Open or edit `ex_21.md` in the repo](../../exercises/ch14/ex_21.md)

## Exercise 14.21
<!-- question -->
Consider the query ${\textbf{P}}({Rain}{{\,|\,}}{Sprinkler}{{\,=\,}}{true},{WetGrass}{{\,=\,}}{true})$ in Figure rain-clustering-figure (a) (page rain-clustering-figure ) and how Gibbs sampling can answer it.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

[Open or edit `ex_22.md` in the repo](../../exercises/ch14/ex_22.md)

## Exercise 14.22
<!-- question -->
This exercise explores the stationary distribution for Gibbs sampling methods.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

[Open or edit `ex_23.md` in the repo](../../exercises/ch14/ex_23.md)

## Exercise 14.23
<!-- question -->
The Metropolis--Hastings algorithm is a member of the MCMC family; as such, it is designed to generate samples $\textbf{x}$ (eventually) according to target probabilities $\pi(\textbf{x})$. (Typically we are interested in sampling from $\pi(\textbf{x}){{\,=\,}}P(\textbf{x}{{\,|\,}}\textbf{e})$.) Like simulated annealing, Metropolis–Hastings operates in two stages. First, it samples a...
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

[Open or edit `ex_24.md` in the repo](../../exercises/ch14/ex_24.md)

## Exercise 14.24
<!-- question -->
Three soccer teams $A$, $B$, and $C$, play each other once. Each match is between two teams, and can be won, drawn, or lost. Each team has a fixed, unknown degree of quality—an integer ranging from 0 to 3—and the outcome of a match depends probabilistically on the difference in quality between the two teams.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
