# Chapter 21 — Deep Learning

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part V · Machine Learning**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch21/"><code>exercises/ch21/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 21.1
<!-- question -->
Implement a passive learning agent in a simple environment, such as the
$4\times 3$ world. For the case of an initially unknown environment
model, compare the learning performance of the direct utility
estimation, TD, and ADP algorithms. Do the comparison for the optimal
policy and for several random policies. For which do the utility
estimates converge faster? What happens when the size of the environment
is increased? (Try environments with and without obstacles.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 21.2
<!-- question -->
Chapter <a class="chapterRef" href="{{site.baseurl}}/concept-decisions-exercise/">complex-decisions-chapter</a> defined a
<b>proper policy</b> for an MDP as one that is
guaranteed to reach a terminal state. Show that it is possible for a
passive ADP agent to learn a transition model for which its policy $\pi$
is improper even if $\pi$ is proper for the true MDP; with such models,
the POLICY-EVALUATION step may fail if $\gamma{{\,=\,}}1$. Show that this problem cannot
arise if POLICY-EVALUATION is applied to the learned model only at the end of a trial.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 21.3
<!-- question -->
Starting with the passive ADP agent,
modify it to use an approximate ADP algorithm as discussed in the text.
Do this in two steps:<br>

1.  Implement a priority queue for adjustments to the utility estimates.
    Whenever a state is adjusted, all of its predecessors also become
    candidates for adjustment and should be added to the queue. The
    queue is initialized with the state from which the most recent
    transition took place. Allow only a fixed number of adjustments.<br>

2.  Experiment with various heuristics for ordering the priority queue,
    examining their effect on learning rates and computation time.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 21.4
<!-- question -->
The direct utility estimation method in
Section <a class="sectionRef" title="" href="#">passive-rl-section</a> uses distinguished terminal
states to indicate the end of a trial. How could it be modified for
environments with discounted rewards and no terminal states?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 21.5
<!-- question -->
Write out the parameter update equations for TD learning with
$$\hat{U}(x,y) = \theta_0 + \theta_1 x + \theta_2 y + \theta_3\,\sqrt{(x-x_g)^2 + (y-y_g)^2}\ .$$
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 21.6
<!-- question -->
Adapt the vacuum world (Chapter <a class="chapterRef" href="{{site.baseurl}}/agents-exercises/">agents-chapter</a> for
reinforcement learning by including rewards for squares being clean.
Make the world observable by providing suitable percepts. Now experiment
with different reinforcement learning agents. Is function approximation
necessary for success? What sort of approximator works for this
application?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 21.7
<!-- question -->
Implement an exploring reinforcement learning
agent that uses direct utility estimation. Make two versions—one with a
tabular representation and one using the function approximator in
Equation (<a class="equationRef" title="" href="#">4x3-linear-approx-equation</a>). Compare their
performance in three environments:<br>

1.  The $4\times 3$ world described in the chapter.<br>

2.  A ${10}\times {10}$ world with no obstacles and a +1 reward
    at (10,10).<br>

3.  A ${10}\times {10}$ world with no obstacles and a +1 reward
    at (5,5).
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 21.8
<!-- question -->
Devise suitable features for reinforcement learning in stochastic grid
worlds (generalizations of the $4\times 3$ world) that contain multiple
obstacles and multiple terminal states with rewards of $+1$ or $-1$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_9.md"><code>ex_9.md</code></a> in the repo.</p>

## Exercise 21.9
<!-- question -->
Extend the standard game-playing environment
(Chapter <a class="chapterRef" href="{{site.baseurl}}/game-playing-exercises/">game-playing-chapter</a>) to incorporate a reward
signal. Put two reinforcement learning agents into the environment (they
may, of course, share the agent program) and have them play against each
other. Apply the generalized TD update rule
(Equation (<a class="equationRef" title="" href="#">generalized-td-equation</a>)) to update the
evaluation function. You might wish to start with a simple linear
weighted evaluation function and a simple game, such as tic-tac-toe.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_10.md"><code>ex_10.md</code></a> in the repo.</p>

## Exercise 21.10
<!-- question -->
Compute the true utility function and the best linear
approximation in $x$ and $y$ (as in
Equation (<a class="equationRef" title="" href="#">4x3-linear-approx-equation</a>)) for the
following environments:<br>

1.  A ${10}\times {10}$ world with a single $+1$ terminal state
    at (10,10).<br>

2.  As in (a), but add a $-1$ terminal state at (10,1).<br>

3.  As in (b), but add obstacles in 10 randomly selected squares.<br>

4.  As in (b), but place a wall stretching from (5,2) to (5,9).<br>

5.  As in (a), but with the terminal state at (5,5).<br>

The actions are deterministic moves in the four directions. In each
case, compare the results using three-dimensional plots. For each
environment, propose additional features (besides $x$ and $y$) that
would improve the approximation and show the results.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_11.md"><code>ex_11.md</code></a> in the repo.</p>

## Exercise 21.11
<!-- question -->
Implement the REINFORCE and PEGASUS algorithms and apply them to the $4\times 3$ world,
using a policy family of your own choosing. Comment on the results.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_12.md"><code>ex_12.md</code></a> in the repo.</p>

## Exercise 21.12
<!-- question -->
Investigate the application of reinforcement learning ideas to the
modeling of human and animal behavior.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

<p>Open or edit <a href="../../exercises/ch21/ex_13.md"><code>ex_13.md</code></a> in the repo.</p>

## Exercise 21.13
<!-- question -->
Is reinforcement learning an appropriate abstract model for evolution?
What connection exists, if any, between hardwired reward signals and
evolutionary fitness?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
