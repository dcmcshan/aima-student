# Chapter 14 — Probabilistic Reasoning over Time

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part IV · Uncertain Knowledge and Reasoning**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch14/"><code>exercises/ch14/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 14.1
<!-- question -->
We have a bag of three biased coins $a$, $b$, and $c$ with probabilities
of coming up heads of 20%, 60%, and 80%, respectively. One coin is drawn
randomly from the bag (with equal likelihood of drawing each of the
three coins), and then the coin is flipped three times to generate the
outcomes $X_1$, $X_2$, and $X_3$.<br>

1.  Draw the Bayesian network corresponding to this setup and define the
    necessary CPTs.<br>

2.  Calculate which coin was most likely to have been drawn from the bag
    if the observed flips come out heads twice and tails once.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 14.2
<!-- question -->
We have a bag of three biased coins $a$, $b$, and $c$ with probabilities
of coming up heads of 30%, 60%, and 75%, respectively. One coin is drawn
randomly from the bag (with equal likelihood of drawing each of the
three coins), and then the coin is flipped three times to generate the
outcomes $X_1$, $X_2$, and $X_3$.<br>

1.  Draw the Bayesian network corresponding to this setup and define the
    necessary CPTs.<br>

2.  Calculate which coin was most likely to have been drawn from the bag
    if the observed flips come out heads twice and tails once.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 14.3
<!-- question -->
Equation (<a href="#">parameter-joint-repn-equation</a> on
page <a class="pageRef" title="" href="#">parameter-joint-repn-equation</a> defines the joint distribution represented by a
Bayesian network in terms of the parameters
$\theta(X_i{{\,|\,}}{Parents}(X_i))$. This exercise asks you to derive
the equivalence between the parameters and the conditional probabilities
${\textbf{ P}}(X_i{{\,|\,}}{Parents}(X_i))$ from this definition.<br>

1.  Consider a simple network $X\rightarrow Y\rightarrow Z$ with three
    Boolean variables. Use
    Equations (<a class="equationRef" title="" href="#">conditional-probability-equation</a> and (<a class="pageRef" title="" href="#">marginalization-equation</a>
    (pages <a href="#">conditional-probability-equation</a> and <a href="#">marginalization-equation</a>)
    to express the conditional probability $P(z{{\,|\,}}y)$ as the ratio of two sums, each over entries in the
    joint distribution ${\textbf{P}}(X,Y,Z)$.<br>

2.  Now use Equation (<a class="equationRef" title="" href="#">parameter-joint-repn-equation</a> to
    write this expression in terms of the network parameters
    $\theta(X)$, $\theta(Y{{\,|\,}}X)$, and $\theta(Z{{\,|\,}}Y)$.<br>

3.  Next, expand out the summations in your expression from part (b),
    writing out explicitly the terms for the true and false values of
    each summed variable. Assuming that all network parameters satisfy
    the constraint
    $\sum_{x_i} \theta(x_i{{\,|\,}}{parents}(X_i)){{\,=\,}}1$, show
    that the resulting expression reduces to $\theta(z{{\,|\,}}y)$.<br>

4.  Generalize this derivation to show that
    $\theta(X_i{{\,|\,}}{Parents}(X_i)) = {\textbf{P}}(X_i{{\,|\,}}{Parents}(X_i))$
    for any Bayesian network.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 14.4
<!-- question -->
The <b>arc reversal</b> operation of in a Bayesian network allows us to change the direction
of an arc $X\rightarrow Y$ while preserving the joint probability
distribution that the network represents <a class="paperRef" title="" href="">Shachter:1986</a>. Arc reversal
may require introducing new arcs: all the parents of $X$ also become
parents of $Y$, and all parents of $Y$ also become parents of $X$.<br>

1.  Assume that $X$ and $Y$ start with $m$ and $n$ parents,
    respectively, and that all variables have $k$ values. By calculating
    the change in size for the CPTs of $X$ and $Y$, show that the total
    number of parameters in the network cannot decrease during
    arc reversal. (<i>Hint</i>: the parents of $X$ and $Y$ need
    not be disjoint.)<br>

2.  Under what circumstances can the total number remain constant?<br>

3.  Let the parents of $X$ be $\textbf{U} \cup \textbf{V}$ and the parents of $Y$ be
    $\textbf{V} \cup \textbf{W}$, where $\textbf{U}$ and $\textbf{W}$ are disjoint. The formulas for the
    new CPTs after arc reversal are as follows: $$\begin{aligned}
    {\textbf{P}}(Y | \textbf{U},\textbf{V},\textbf{W}) &=& \sum_x {\textbf{P}}(Y | \textbf{V},\textbf{W}, x) {\textbf{P}}(x | \textbf{U}, \textbf{V}) \\
    {\textbf{P}}(X | \textbf{U},\textbf{V},\textbf{W}, Y) &=& {\textbf{P}}(Y | X, \textbf{V}, \textbf{W}) {\textbf{P}}(X | \textbf{U}, \textbf{V}) / {\textbf{P}}(Y | \textbf{U},\textbf{V},\textbf{W})\ .\end{aligned}$$
    Prove that the new network expresses the same joint distribution
    over all variables as the original network.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 14.5
<!-- question -->
Consider the Bayesian network in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/burglary-figure.png">burglary-figure.</a><br>

1.  If no evidence is observed, are ${Burglary}$ and ${Earthquake}$
    independent? Prove this from the numerical semantics and from the
    topological semantics.<br>

2.  If we observe ${Alarm}{{\,=\,}}{true}$, are ${Burglary}$ and
    ${Earthquake}$ independent? Justify your answer by calculating
    whether the probabilities involved satisfy the definition of
    conditional independence.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 14.6
<!-- question -->
Suppose that in a Bayesian network containing an unobserved variable
$Y$, all the variables in the Markov blanket ${MB}(Y)$ have been
observed.<br>

1.  Prove that removing the node $Y$ from the network will not affect
    the posterior distribution for any other unobserved variable in
    the network.<br>

2.  Discuss whether we can remove $Y$ if we are planning to use (i)
    rejection sampling and (ii) likelihood weighting.<br>


    <figure>
      <img src="https://aimacode.github.io/aima-exercises/figures/handedness1.svg" alt="handedness-figure" id="handedness-figure" style="width:100%">
      <figcaption><center><b>Three possible structures for a Bayesian network describing genetic inheritance of handedness.</b></center></figcaption>
    </figure>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 14.7
<!-- question -->
Let $H_x$ be a random variable denoting the
handedness of an individual $x$, with possible values $l$ or $r$. A
common hypothesis is that left- or right-handedness is inherited by a
simple mechanism; that is, perhaps there is a gene $G_x$, also with
values $l$ or $r$, and perhaps actual handedness turns out mostly the
same (with some probability $s$) as the gene an individual possesses.
Furthermore, perhaps the gene itself is equally likely to be inherited
from either of an individual’s parents, with a small nonzero probability
$m$ of a random mutation flipping the handedness.<br>

1.  Which of the three networks in
    Figure <a class="insideExercisesFigRef" href="#handedness-figure">handedness-figure</a> claim that
    $ {\textbf{P}}(G_{father},G_{mother},G_{child}) = {\textbf{P}}(G_{father}){\textbf{P}}(G_{mother}){\textbf{P}}(G_{child})$?<br>

2.  Which of the three networks make independence claims that are
    consistent with the hypothesis about the inheritance of handedness?<br>

3.  Which of the three networks is the best description of the
    hypothesis?<br>

4.  Write down the CPT for the $G_{child}$ node in network (a), in
    terms of $s$ and $m$.<br>

5.  Suppose that
    $P(G_{father}{{\,=\,}}l)=P(G_{mother}{{\,=\,}}l)=q$. In
    network (a), derive an expression for $P(G_{child}{{\,=\,}}l)$
    in terms of $m$ and $q$ only, by conditioning on its parent nodes.<br>

6.  Under conditions of genetic equilibrium, we expect the distribution
    of genes to be the same across generations. Use this to calculate
    the value of $q$, and, given what you know about handedness in
    humans, explain why the hypothesis described at the beginning of
    this question must be wrong.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 14.8
<!-- question -->
The <b>Markov
blanket</b> of a variable is defined on page <a href="#">markov-blanket-page</a>.
Prove that a variable is independent of all other variables in the
network, given its Markov blanket and derive
Equation (<a class="equationRef" title="" href="#">markov-blanket-equation</a>)
(page <a class="pageRef" title="" href="#">markov-blanket-equation</a>).
<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/car-starts.svg" alt="car-starts-figure" id="car-starts-figure" style="width:100%">
    <figcaption><center><b>A Bayesian network describing some features of a car's electrical system and engine. Each variable is Boolean, and the <i>true</i> value indicates that the corresponding aspect of the vehicle is in working order.</b></center></figcaption>
</figure>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_9.md"><code>ex_9.md</code></a> in the repo.</p>

## Exercise 14.9
<!-- question -->
Consider the network for car diagnosis shown in
Figure <a class="insideExercisesFigRef" href="#car-starts-figure">car-starts-figure</a><br>.

1.  Extend the network with the Boolean variables ${IcyWeather}$ and
    ${StarterMotor}$.<br>

2.  Give reasonable conditional probability tables for all the nodes.<br>

3.  How many independent values are contained in the joint probability
    distribution for eight Boolean nodes, assuming that no conditional
    independence relations are known to hold among them?<br>

4.  How many independent probability values do your network tables
    contain?<br>

5.  The conditional distribution for ${Starts}$ could be described as
    a <b>noisy-AND</b> distribution. Define this
    family in general and relate it to the noisy-OR distribution.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_10.md"><code>ex_10.md</code></a> in the repo.</p>

## Exercise 14.10
<!-- question -->
Consider a simple Bayesian network with root variables ${Cold}$,
${Flu}$, and ${Malaria}$ and child variable ${Fever}$, with a
noisy-OR conditional distribution for ${Fever}$ as described in
Section <a class="sectionRef" title="" href="#">canonical-distribution-section</a>. By adding
appropriate auxiliary variables for inhibition events and fever-inducing
events, construct an equivalent Bayesian network whose CPTs (except for
root variables) are deterministic. Define the CPTs and prove
equivalence.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_11.md"><code>ex_11.md</code></a> in the repo.</p>

## Exercise 14.11
<!-- question -->
Consider the family of linear Gaussian networks, as
defined on page <a class="pageRef" title="" href="#">LG-network-page</a><br>.

1.  In a two-variable network, let $X_1$ be the parent of $X_2$, let
    $X_1$ have a Gaussian prior, and let
    ${\textbf{P}}(X_2{{\,|\,}}X_1)$ be a linear
    Gaussian distribution. Show that the joint distribution $P(X_1,X_2)$
    is a multivariate Gaussian, and calculate its covariance matrix.<br>

2.  Prove by induction that the joint distribution for a general linear
    Gaussian network on $X_1,\ldots,X_n$ is also a
    multivariate Gaussian.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_12.md"><code>ex_12.md</code></a> in the repo.</p>

## Exercise 14.12
<!-- question -->
The probit distribution defined on
page <a class="pageRef" title="" href="#">probit-page</a> describes the probability distribution for a Boolean
child, given a single continuous parent.<br>

1.  How might the definition be extended to cover multiple continuous
    parents?<br>

2.  How might it be extended to handle a <i>multivalued</i>
    child variable? Consider both cases where the child’s values are
    ordered (as in selecting a gear while driving, depending on speed,
    slope, desired acceleration, etc.) and cases where they are
    unordered (as in selecting bus, train, or car to get to work).
    (<i>Hint</i>: Consider ways to divide the possible values
    into two sets, to mimic a Boolean variable.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_13.md"><code>ex_13.md</code></a> in the repo.</p>

## Exercise 14.13
<!-- question -->
In your local nuclear power station, there is an alarm that senses when
a temperature gauge exceeds a given threshold. The gauge measures the
temperature of the core. Consider the Boolean variables $A$ (alarm
sounds), $F_A$ (alarm is faulty), and $F_G$ (gauge is faulty) and the
multivalued nodes $G$ (gauge reading) and $T$ (actual core temperature).<br>

1.  Draw a Bayesian network for this domain, given that the gauge is
    more likely to fail when the core temperature gets too high.<br>

2.  Is your network a polytree? Why or why not?<br>

3.  Suppose there are just two possible actual and measured
    temperatures, normal and high; the probability that the gauge gives
    the correct temperature is $x$ when it is working, but $y$ when it
    is faulty. Give the conditional probability table associated with
    $G$.<br>

4.  Suppose the alarm works correctly unless it is faulty, in which case
    it never sounds. Give the conditional probability table associated
    with $A$.<br>

5.  Suppose the alarm and gauge are working and the alarm sounds.
    Calculate an expression for the probability that the temperature of
    the core is too high, in terms of the various conditional
    probabilities in the network.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_14.md"><code>ex_14.md</code></a> in the repo.</p>

## Exercise 14.14
<!-- question -->
Two astronomers in different parts of the world
make measurements $M_1$ and $M_2$ of the number of stars $N$ in some
small region of the sky, using their telescopes. Normally, there is a
small possibility $e$ of error by up to one star in each direction. Each
telescope can also (with a much smaller probability $f$) be badly out of
focus (events $F_1$ and $F_2$), in which case the scientist will
undercount by three or more stars (or if $N$ is less than 3, fail to
detect any stars at all). Consider the three networks shown in
Figure <a class="insideExercisesFigRef"  href="#telescope-nets-figure">telescope-nets-figure</a>.<br>

1.  Which of these Bayesian networks are correct (but not
    necessarily efficient) representations of the preceding information?<br>

2.  Which is the best network? Explain.<br>

3.  Write out a conditional distribution for
    ${\textbf{P}}(M_1{{\,|\,}}N)$, for the case where
    $N{{\,\in\\,}}\{1,2,3\}$ and $M_1{{\,\in\\,}}\{0,1,2,3,4\}$. Each
    entry in the conditional distribution should be expressed as a
    function of the parameters $e$ and/or $f$.<br>

4.  Suppose $M_1{{\,=\,}}1$ and $M_2{{\,=\,}}3$. What are the
    <i>possible</i> numbers of stars if you assume no prior
    constraint on the values of $N$?<br>

5.  What is the <i>most likely</i> number of stars, given these
    observations? Explain how to compute this, or if it is not possible
    to compute, explain what additional information is needed and how it
    would affect the result.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_15.md"><code>ex_15.md</code></a> in the repo.</p>

## Exercise 14.15
<!-- question -->
Consider the network shown in
Figure <a class="insideExercisesFigRef" href="#telescope-nets-figure">telescope-nets-figure</a>(ii), and assume that the
two telescopes work identically. $N{{\,\in\\,}}\{1,2,3\}$ and
$M_1,M_2{{\,\in\\,}}\{0,1,2,3,4\}$, with the symbolic CPTs as described
in Exercise <a class="exerciseRef" href="{{ site.baseurl }}/bayes-nets-exercises/ex_14/">telescope-exercise</a>. Using the enumeration
algorithm (Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/enumeration-algorithm.png">enumeration-algorithm</a> on
page <a class="pageRef" id="pageref" title="" href="#">enumeration-algorithm</a>), calculate the probability distribution
${\textbf{P}}(N{{\,|\,}}M_1{{\,=\,}}2,M_2{{\,=\,}}2)$.<br>


<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/telescope-nets.svg" alt="telescope-nets-figure" id="telescope-nets-figure" style="width:100%">
  <figcaption><center><b>Three possible networks for the telescope problem.</b></center></figcaption>
</figure>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_16.md"><code>ex_16.md</code></a> in the repo.</p>

## Exercise 14.16
<!-- question -->
Consider the Bayes net shown in Figure <a class="insideExercisesFigRef" href="#politics-figure">politics-figure</a><br>.

1.  Which of the following are asserted by the network
    <i>structure</i>?<br>

    1.  ${\textbf{P}}(B,I,M) = {\textbf{P}}(B){\textbf{P}}(I){\textbf{P}}(M)$.<br>

    2.  ${\textbf{P}}(J|G) = {\textbf{P}}(J|G,I)$.<br>

    3.  ${\textbf{P}}(M|G,B,I) = {\textbf{P}}(M|G,B,I,J)$.<br>

2.  Calculate the value of $P(b,i,\lnot m,g,j)$.<br>

3.  Calculate the probability that someone goes to jail given that they
    broke the law, have been indicted, and face a politically
    motivated prosecutor.<br>

4.  A <b>context-specific independence</b> (see
    page <a class="pageRef" title="" href="#">CSI-page</a>) allows a variable to be independent of some of
    its parents given certain values of others. In addition to the usual
    conditional independences given by the graph structure, what
    context-specific independences exist in the Bayes net in
    Figure <a class="insideExercisesFigRef" href="#politics-figure">politics-figure</a>?<br>

5.  Suppose we want to add the variable
    $P={PresidentialPardon}$ to the network; draw the new
    network and briefly explain any links you add.<br>
<figure>
  <img src="https://aimacode.github.io/aima-exercises/figures/politics.svg" alt="politics-figure" id="politics-figure" style="width:100%">
  <figcaption><center><b>A simple Bayes net with
  Boolean variables B = {BrokeElectionLaw}, I = {Indicted}, M = {PoliticallyMotivatedProsecutor}, G= {FoundGuilty}, J = {Jailed}.</b></center></figcaption>
</figure>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_17.md"><code>ex_17.md</code></a> in the repo.</p>

## Exercise 14.17
<!-- question -->
Consider the Bayes net shown in Figure <a class="insideExercisesFigRef" href="#politics-figure">politics-figure</a><br>.

1.  Which of the following are asserted by the network
    <i>structure</i>?<br>

    1.  ${\textbf{P}}(B,I,M) = {\textbf{P}}(B){\textbf{P}}(I){\textbf{P}}(M)$.<br>

    2.  ${\textbf{P}}(J|G) = {\textbf{P}}(J|G,I)$.<br>

    3.  ${\textbf{P}}(M|G,B,I) = {\textbf{P}}(M|G,B,I,J)$.<br>

2.  Calculate the value of $P(b,i,\lnot m,g,j)$.<br>

3.  Calculate the probability that someone goes to jail given that they
    broke the law, have been indicted, and face a politically
    motivated prosecutor.<br>

4.  A <b>context-specific independence</b> (see
    page <a class="pageRef" id="pageref" title="" href="#">CSI-page</a>) allows a variable to be independent of some of
    its parents given certain values of others. In addition to the usual
    conditional independences given by the graph structure, what
    context-specific independences exist in the Bayes net in
    Figure <a class="insideExercisesFigRef" id="insideexercisesfigref" href="#politics-figure">politics-figure</a>?<br>

5.  Suppose we want to add the variable
    $P={PresidentialPardon}$ to the network; draw the new
    network and briefly explain any links you add.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_18.md"><code>ex_18.md</code></a> in the repo.</p>

## Exercise 14.18
<!-- question -->
Consider the variable elimination algorithm in
Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/elimination-ask-algorithm.png">elimination-ask-algorithm</a> (page <a class="pageRef" title="" href="#">elimination-ask-algorithm</a>).<br>

1.  Section <a class="sectionRef" title="" href="#">exact-inference-section</a> applies variable
    elimination to the query
    $${\textbf{P}}({Burglary}{{\,|\,}}{JohnCalls}{{\,=\,}}{true},{MaryCalls}{{\,=\,}}{true})\ .$$
    Perform the calculations indicated and check that the answer
    is correct.<br>

2.  Count the number of arithmetic operations performed, and compare it
    with the number performed by the enumeration algorithm.<br>

3.  Suppose a network has the form of a <i>chain</i>: a sequence
    of Boolean variables $X_1,\ldots, X_n$ where
    ${Parents}(X_i){{\,=\,}}\{X_{i-1}\}$ for $i{{\,=\,}}2,\ldots,n$.
    What is the complexity of computing
    ${\textbf{P}}(X_1{{\,|\,}}X_n{{\,=\,}}{true})$ using
    enumeration? Using variable elimination?<br>

4.  Prove that the complexity of running variable elimination on a
    polytree network is linear in the size of the tree for any variable
    ordering consistent with the network structure.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_19.md"><code>ex_19.md</code></a> in the repo.</p>

## Exercise 14.19
<!-- question -->
Investigate the complexity of exact inference
in general Bayesian networks:<br>

1.  Prove that any 3-SAT problem can be reduced to exact inference in a
    Bayesian network constructed to represent the particular problem and
    hence that exact inference is NP-hard. (<i>Hint</i>:
    Consider a network with one variable for each proposition symbol,
    one for each clause, and one for the conjunction of clauses.)<br>

2.  The problem of counting the number of satisfying assignments for a
    3-SAT problem is \#P-complete. Show that exact inference is at least
    as hard as this.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_20.md"><code>ex_20.md</code></a> in the repo.</p>

## Exercise 14.20
<!-- question -->
Consider the problem of generating a
random sample from a specified distribution on a single variable. Assume
you have a random number generator that returns a random number
uniformly distributed between 0 and 1.<br>

1.  Let $X$ be a discrete variable with
    $P(X{{\,=\,}}x_i){{\,=\,}}p_i$ for
    $i{{\,\in\\,}}\{1,\ldots,k\}$. The <b>cumulative distribution</b> of $X$ gives the probability
    that $X{{\,\in\\,}}\{x_1,\ldots,x_j\}$ for each possible $j$. (See
    also Appendix [math-appendix].) Explain how to
    calculate the cumulative distribution in $O(k)$ time and how to
    generate a single sample of $X$ from it. Can the latter be done in
    less than $O(k)$ time?<br>

2.  Now suppose we want to generate $N$ samples of $X$, where $N\gg k$.
    Explain how to do this with an expected run time per sample that is
    <i>constant</i> (i.e., independent of $k$).<br>

3.  Now consider a continuous-valued variable with a parameterized
    distribution (e.g., Gaussian). How can samples be generated from
    such a distribution?<br>

4.  Suppose you want to query a continuous-valued variable and you are
    using a sampling algorithm such as LIKELIHOODWEIGHTING to do the inference. How would
    you have to modify the query-answering process?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_21.md"><code>ex_21.md</code></a> in the repo.</p>

## Exercise 14.21
<!-- question -->
Consider the query
${\textbf{P}}({Rain}{{\,|\,}}{Sprinkler}{{\,=\,}}{true},{WetGrass}{{\,=\,}}{true})$
in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/rain-clustering-figure.png">rain-clustering-figure</a>(a)
(page <a class="pageRef" title="" href="#">rain-clustering-figure</a>) and how Gibbs sampling can answer it.<br>

1.  How many states does the Markov chain have?<br>

2.  Calculate the <b>transition matrix</b>
    ${\textbf{Q}}$ containing
    $q({\textbf{y}}$ $\rightarrow$ ${\textbf{y}}')$
    for all ${\textbf{y}}$, ${\textbf{y}}'$.<br>

3.  What does ${\textbf{ Q}}^2$, the square of the
    transition matrix, represent?<br>

4.  What about ${\textbf{Q}}^n$ as $n\to \infty$?<br>

5.  Explain how to do probabilistic inference in Bayesian networks,
    assuming that ${\textbf{Q}}^n$ is available. Is this a
    practical way to do inference?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_22.md"><code>ex_22.md</code></a> in the repo.</p>

## Exercise 14.22
<!-- question -->
This exercise explores the stationary
distribution for Gibbs sampling methods.<br>

1.  The convex composition $[\alpha, q_1; 1-\alpha, q_2]$ of $q_1$ and
    $q_2$ is a transition probability distribution that first chooses
    one of $q_1$ and $q_2$ with probabilities $\alpha$ and $1-\alpha$,
    respectively, and then applies whichever is chosen. Prove that if
    $q_1$ and $q_2$ are in detailed balance with $\pi$, then their
    convex composition is also in detailed balance with $\pi$.
    (<i>Note</i>: this result justifies a variant of GIBBS-ASK in which
    variables are chosen at random rather than sampled in a
    fixed sequence.)<br>

2.  Prove that if each of $q_1$ and $q_2$ has $\pi$ as its stationary
    distribution, then the sequential composition
    $q {{\,=\,}}q_1 \circ q_2$ also has $\pi$ as its
    stationary distribution.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_23.md"><code>ex_23.md</code></a> in the repo.</p>

## Exercise 14.23
<!-- question -->
The <b>Metropolis--Hastings</b> algorithm is a member of the MCMC family; as such,
it is designed to generate samples $\textbf{x}$ (eventually) according to target
probabilities $\pi(\textbf{x})$. (Typically we are interested in sampling from
$\pi(\textbf{x}){{\,=\,}}P(\textbf{x}{{\,|\,}}\textbf{e})$.) Like simulated annealing,
Metropolis–Hastings operates in two stages. First, it samples a new
state $\textbf{x'}$ from a <b>proposal distribution</b> $q(\textbf{x'}{{\,|\,}}\textbf{x})$, given the current state $\textbf{x}$.
Then, it probabilistically accepts or rejects $\textbf{x'}$ according to the <b>acceptance probability</b>
$$\alpha(\textbf{x'}{{\,|\,}}\textbf{x}) = \min\ \left(1,\frac{\pi(\textbf{x'})q(\textbf{x}{{\,|\,}}\textbf{x'})}{\pi(\textbf{x})q(\textbf{x'}{{\,|\,}}\textbf{x})}  \right)\ .$$
If the proposal is rejected, the state remains at $\textbf{x}$.<br>

1.  Consider an ordinary Gibbs sampling step for a specific variable
    $X_i$. Show that this step, considered as a proposal, is guaranteed
    to be accepted by Metropolis–Hastings. (Hence, Gibbs sampling is a
    special case of Metropolis–Hastings.)<br>

2.  Show that the two-step process above, viewed as a transition
    probability distribution, is in detailed balance with $\pi$.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_24"></a>

<p>Open or edit <a href="../../exercises/ch14/ex_24.md"><code>ex_24.md</code></a> in the repo.</p>

## Exercise 14.24
<!-- question -->
Three soccer teams $A$, $B$, and $C$, play each
other once. Each match is between two teams, and can be won, drawn, or
lost. Each team has a fixed, unknown degree of quality—an integer
ranging from 0 to 3—and the outcome of a match depends probabilistically
on the difference in quality between the two teams.<br>

1.  Construct a relational probability model to describe this domain,
    and suggest numerical values for all the necessary
    probability distributions.<br>

2.  Construct the equivalent Bayesian network for the three matches.<br>

3.  Suppose that in the first two matches $A$ beats $B$ and draws with
    $C$. Using an exact inference algorithm of your choice, compute the
    posterior distribution for the outcome of the third match.<br>

4.  Suppose there are $n$ teams in the league and we have the results
    for all but the last match. How does the complexity of predicting
    the last game vary with $n$?<br>

5.  Investigate the application of MCMC to this problem. How quickly
    does it converge in practice and how well does it scale?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
