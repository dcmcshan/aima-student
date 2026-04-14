# Chapter 16 — Making Simple Decisions

**Russell & Norvig, *Artificial Intelligence: A Modern Approach* (4th ed.) · Part IV · Uncertain Knowledge and Reasoning**

**Work in this repo:** edit the markdown files under <a href="../../exercises/ch16/"><code>exercises/ch16/</code></a> (each exercise is one file). This page inlines those prompts for reading; answers belong in the repo files.

*Generated from `exercises/` by `npm run docs:generate`. Regenerate after pulling exercise updates.*

[← AIMA home](../README.md)

---

<a id="ex_1"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_1.md"><code>ex_1.md</code></a> in the repo.</p>

## Exercise 16.1
<!-- question -->
(Adapted from David Heckerman.) This exercise concerns
the <b>Almanac Game</b>, which is used by
decision analysts to calibrate numeric estimation. For each of the
questions that follow, give your best guess of the answer, that is, a
number that you think is as likely to be too high as it is to be too
low. Also give your guess at a 25th percentile estimate, that is, a
number that you think has a 25% chance of being too high, and a 75%
chance of being too low. Do the same for the 75th percentile. (Thus, you
should give three estimates in all—low, median, and high—for each
question.)<br>

1.  Number of passengers who flew between New York and Los Angeles
    in 1989.<br>

2.  Population of Warsaw in 1992.<br>

3.  Year in which Coronado discovered the Mississippi River.<br>

4.  Number of votes received by Jimmy Carter in the 1976
    presidential election.<br>

5.  Age of the oldest living tree, as of 2002.<br>

6.  Height of the Hoover Dam in feet.<br>

7.  Number of eggs produced in Oregon in 1985.<br>

8.  Number of Buddhists in the world in 1992.<br>

9.  Number of deaths due to AIDS in the United States
    in 1981.<br>

10. Number of U.S. patents granted in 1901.<br>

The correct answers appear after the last exercise of this chapter. From
the point of view of decision analysis, the interesting thing is not how
close your median guesses came to the real answers, but rather how often
the real answer came within your 25% and 75% bounds. If it was about
half the time, then your bounds are accurate. But if you’re like most
people, you will be more sure of yourself than you should be, and fewer
than half the answers will fall within the bounds. With practice, you
can calibrate yourself to give realistic bounds, and thus be more useful
in supplying information for decision making. Try this second set of
questions and see if there is any improvement:<br>

1.  Year of birth of Zsa Zsa Gabor.<br>

2.  Maximum distance from Mars to the sun in miles.<br>

3.  Value in dollars of exports of wheat from the United States in 1992.<br>

4.  Tons handled by the port of Honolulu in 1991.<br>

5.  Annual salary in dollars of the governor of California in 1993.<br>

6.  Population of San Diego in 1990.<br>

7.  Year in which Roger Williams founded Providence, Rhode Island.<br>

8.  Height of Mt. Kilimanjaro in feet.<br>

9.  Length of the Brooklyn Bridge in feet.<br>

10. Number of deaths due to automobile accidents in the United States
    in 1992.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_2"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_2.md"><code>ex_2.md</code></a> in the repo.</p>

## Exercise 16.2
<!-- question -->
Chris considers four used cars before buying the one with maximum
expected utility. Pat considers ten cars and does the same. All other
things being equal, which one is more likely to have the better car?
Which is more likely to be disappointed with their car’s quality? By how
much (in terms of standard deviations of expected quality)?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_3"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_3.md"><code>ex_3.md</code></a> in the repo.</p>

## Exercise 16.3
<!-- question -->
Chris considers five used cars before buying the one with maximum
expected utility. Pat considers eleven cars and does the same. All other
things being equal, which one is more likely to have the better car?
Which is more likely to be disappointed with their car’s quality? By how
much (in terms of standard deviations of expected quality)?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_4"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_4.md"><code>ex_4.md</code></a> in the repo.</p>

## Exercise 16.4
<!-- question -->
In 1713, Nicolas Bernoulli stated a puzzle,
now called the St. Petersburg paradox, which works as follows. You have
the opportunity to play a game in which a fair coin is tossed repeatedly
until it comes up heads. If the first heads appears on the $n$th toss,
you win $2^n$ dollars.<br>

1.  Show that the expected monetary value of this game is infinite.<br>

2.  How much would you, personally, pay to play the game?<br>

3.  Nicolas’s cousin Daniel Bernoulli resolved the apparent paradox in
    1738 by suggesting that the utility of money is measured on a
    logarithmic scale (i.e., $U(S_{n}) = a\log_2 n +b$, where $S_n$ is
    the state of having $n$). What is the expected utility of the game
    under this assumption?<br>

4.  What is the maximum amount that it would be rational to pay to play
    the game, assuming that one’s initial wealth is $k$?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_5"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_5.md"><code>ex_5.md</code></a> in the repo.</p>

## Exercise 16.5
<!-- question -->
Write a computer program to automate the process in
Exercise <a href="#">assessment-exercise</a>. Try your program out on
several people of different net worth and political outlook. Comment on
the consistency of your results, both for an individual and across
individuals.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_6"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_6.md"><code>ex_6.md</code></a> in the repo.</p>

## Exercise 16.6
<!-- question -->
The Surprise Candy Company makes candy in
two flavors: 75% are strawberry flavor and 25% are anchovy flavor. Each
new piece of candy starts out with a round shape; as it moves along the
production line, a machine randomly selects a certain percentage to be
trimmed into a square; then, each piece is wrapped in a wrapper whose
color is chosen randomly to be red or brown. 70% of the strawberry
candies are round and 70% have a red wrapper, while 90% of the anchovy
candies are square and 90% have a brown wrapper. All candies are sold
individually in sealed, identical, black boxes.<br>

Now you, the customer, have just bought a Surprise candy at the store
but have not yet opened the box. Consider the three Bayes nets in
Figure <a class="insideExercisesFigRef"  href="#3candy-figure">3candy-figure</a>.<br>

1.  Which network(s) can correctly represent
    ${\textbf{P}}(Flavor,Wrapper,Shape)$?<br>

2.  Which network is the best representation for this problem?<br>

3.  Does network (i) assert that
    ${\textbf{P}}(Wrapper|Shape){{\,=\,}}{\textbf{P}}(Wrapper)$?<br>

4.  What is the probability that your candy has a red wrapper?<br>

5.  In the box is a round candy with a red wrapper. What is the
    probability that its flavor is strawberry?<br>

6.  A unwrapped strawberry candy is worth $s$ on the open market and an
    unwrapped anchovy candy is worth $a$. Write an expression for the
    value of an unopened candy box.<br>

7.  A new law prohibits trading of unwrapped candies, but it is still
    legal to trade wrapped candies (out of the box). Is an unopened
    candy box now worth more than less than, or the same as before?<br>


    <figure>
      <img src="https://aimacode.github.io/aima-exercises/figures/3candy.svg" alt="3candy-figure" id="3candy-figure" style="width:100%">
      <figcaption><center><b>Three proposed Bayes nets for the Surprise Candy
      problem</b></center></figcaption>
    </figure>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_7"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_7.md"><code>ex_7.md</code></a> in the repo.</p>

## Exercise 16.7
<!-- question -->
The Surprise Candy Company makes candy in
two flavors: 70% are strawberry flavor and 30% are anchovy flavor. Each
new piece of candy starts out with a round shape; as it moves along the
production line, a machine randomly selects a certain percentage to be
trimmed into a square; then, each piece is wrapped in a wrapper whose
color is chosen randomly to be red or brown. 80% of the strawberry
candies are round and 80% have a red wrapper, while 90% of the anchovy
candies are square and 90% have a brown wrapper. All candies are sold
individually in sealed, identical, black boxes.<br>

Now you, the customer, have just bought a Surprise candy at the store
but have not yet opened the box. Consider the three Bayes nets in
Figure <a class="insideExercisesFigRef"  href="#3candy-figure">3candy-figure</a>.<br>

1.  Which network(s) can correctly represent
    ${\textbf{P}}(Flavor,Wrapper,Shape)$?<br>

2.  Which network is the best representation for this problem?<br>

3.  Does network (i) assert that
    ${\textbf{P}}(Wrapper|Shape){{\,=\,}}{\textbf{P}}(Wrapper)$?<br>

4.  What is the probability that your candy has a red wrapper?<br>

5.  In the box is a round candy with a red wrapper. What is the
    probability that its flavor is strawberry?<br>

6.  A unwrapped strawberry candy is worth $s$ on the open market and an
    unwrapped anchovy candy is worth $a$. Write an expression for the
    value of an unopened candy box.<br>

7.  A new law prohibits trading of unwrapped candies, but it is still
    legal to trade wrapped candies (out of the box). Is an unopened
    candy box now worth more than less than, or the same as before?<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_8"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_8.md"><code>ex_8.md</code></a> in the repo.</p>

## Exercise 16.8
<!-- question -->
Prove that the judgments $B \succ A$ and $C \succ D$ in the Allais
paradox (page <a class="pageRef" title="" href="#">allais-page</a>) violate the axiom of substitutability.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_9"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_9.md"><code>ex_9.md</code></a> in the repo.</p>

## Exercise 16.9
<!-- question -->
Consider the Allais paradox described on page <a class="pageRef" title="" href="#">allais-page</a>: an agent
who prefers $B$ over $A$ (taking the sure thing), and $C$ over $D$
(taking the higher EMV) is not acting rationally, according to utility
theory. Do you think this indicates a problem for the agent, a problem
for the theory, or no problem at all? Explain.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_10"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_10.md"><code>ex_10.md</code></a> in the repo.</p>

## Exercise 16.10
<!-- question -->
Tickets to a lottery cost 1. There are two possible prizes:
a 10 payoff with probability 1/50, and a 1,000,000 payoff with
probability 1/2,000,000. What is the expected monetary value of a
lottery ticket? When (if ever) is it rational to buy a ticket? Be
precise—show an equation involving utilities. You may assume current
wealth of $k$ and that $U(S_k)=0$. You may also assume that
$U(S_{k+{10}}) = {10}\times U(S_{k+1})$, but you may not make any
assumptions about $U(S_{k+1,{000},{000}})$. Sociological studies show
that people with lower income buy a disproportionate number of lottery
tickets. Do you think this is because they are worse decision makers or
because they have a different utility function? Consider the value of
contemplating the possibility of winning the lottery versus the value of
contemplating becoming an action hero while watching an adventure movie.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_11"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_11.md"><code>ex_11.md</code></a> in the repo.</p>

## Exercise 16.11
<!-- question -->
Assess your own utility for different incremental
amounts of money by running a series of preference tests between some
definite amount $M_1$ and a lottery $[p,M_2; (1-p), 0]$. Choose
different values of $M_1$ and $M_2$, and vary $p$ until you are
indifferent between the two choices. Plot the resulting utility
function.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_12"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_12.md"><code>ex_12.md</code></a> in the repo.</p>

## Exercise 16.12
<!-- question -->
How much is a micromort worth to you? Devise a protocol to determine
this. Ask questions based both on paying to avoid risk and being paid to
accept risk.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_13"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_13.md"><code>ex_13.md</code></a> in the repo.</p>

## Exercise 16.13
<!-- question -->
Let continuous variables $X_1,\ldots,X_k$ be
independently distributed according to the same probability density
function $f(x)$. Prove that the density function for
$\max\{X_1,\ldots,X_k\}$ is given by $kf(x)(F(x))^{k-1}$, where $F$ is
the cumulative distribution for $f$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_14"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_14.md"><code>ex_14.md</code></a> in the repo.</p>

## Exercise 16.14
<!-- question -->
Economists often make use of an exponential utility function for money:
$U(x) = -e^{-x/R}$, where $R$ is a positive constant representing an
individual’s risk tolerance. Risk tolerance reflects how likely an
individual is to accept a lottery with a particular expected monetary
value (EMV) versus some certain payoff. As $R$ (which is measured in the
same units as $x$) becomes larger, the individual becomes less
risk-averse.<br>

1.  Assume Mary has an exponential utility function with $R = \$500$.
    Mary is given the choice between receiving $\$500$ with certainty
    (probability 1) or participating in a lottery which has a 60%
    probability of winning \$5000 and a 40% probability of
    winning nothing. Assuming Marry acts rationally, which option would
    she choose? Show how you derived your answer.<br>

2.  Consider the choice between receiving $\$100$ with certainty
    (probability 1) or participating in a lottery which has a 50%
    probability of winning $\$500$ and a 50% probability of winning
    nothing. Approximate the value of R (to 3 significant digits) in an
    exponential utility function that would cause an individual to be
    indifferent to these two alternatives. (You might find it helpful to
    write a short program to help you solve this problem.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_15"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_15.md"><code>ex_15.md</code></a> in the repo.</p>

## Exercise 16.15
<!-- question -->
Economists often make use of an exponential utility function for money:
$U(x) = -e^{-x/R}$, where $R$ is a positive constant representing an
individual’s risk tolerance. Risk tolerance reflects how likely an
individual is to accept a lottery with a particular expected monetary
value (EMV) versus some certain payoff. As $R$ (which is measured in the
same units as $x$) becomes larger, the individual becomes less
risk-averse.<br>

1.  Assume Mary has an exponential utility function with $R = \$400$.
    Mary is given the choice between receiving $\$400$ with certainty
    (probability 1) or participating in a lottery which has a 60%
    probability of winning \$5000 and a 40% probability of
    winning nothing. Assuming Marry acts rationally, which option would
    she choose? Show how you derived your answer.<br>

2.  Consider the choice between receiving $\$100$ with certainty
    (probability 1) or participating in a lottery which has a 50%
    probability of winning \$500 and a 50% probability of winning
    nothing. Approximate the value of R (to 3 significant digits) in an
    exponential utility function that would cause an individual to be
    indifferent to these two alternatives. (You might find it helpful to
    write a short program to help you solve this problem.)
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_16"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_16.md"><code>ex_16.md</code></a> in the repo.</p>

## Exercise 16.16
<!-- question -->
Alex is given the choice between two games. In Game 1, a fair coin is
flipped and if it comes up heads, Alex receives $\$100$. If the coin comes
up tails, Alex receives nothing. In Game 2, a fair coin is flipped
twice. Each time the coin comes up heads, Alex receives $\$50$, and Alex
receives nothing for each coin flip that comes up tails. Assuming that
Alex has a monotonically increasing utility function for money in the
range \[\$0, \$100\], show mathematically that if Alex prefers Game 2 to
Game 1, then Alex is risk averse (at least with respect to this range of
monetary amounts).<br>

Show that if $X_1$ and $X_2$ are preferentially independent of $X_3$,
and $X_2$ and $X_3$ are preferentially independent of $X_1$, then $X_3$
and $X_1$ are preferentially independent of $X_2$.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_17"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_17.md"><code>ex_17.md</code></a> in the repo.</p>

## Exercise 16.17
<!-- question -->
Repeat Exercise <a class="exerciseRef" href="{{ site.baseurl }}/decision-theory-exercises/ex_21/">airport-id-exercise</a>, using the action-utility
representation shown in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/airport-au-id-figure.png">airport-au-id-figure</a>.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_18"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_18.md"><code>ex_18.md</code></a> in the repo.</p>

## Exercise 16.18
<!-- question -->
For either of the airport-siting diagrams from Exercises
<a class="exerciseRef" href="{{ site.baseurl }}/decision-theory-exercises/ex_21/" >airport-id-exercise</a> and <a class="exerciseRef" href="{{ site.baseurl }}/decision-theory-exercises/ex_17/">airport-au-id-exercise</a>, to which
conditional probability table entry is the utility most sensitive, given
the available evidence?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_19"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_19.md"><code>ex_19.md</code></a> in the repo.</p>

## Exercise 16.19
<!-- question -->
Modify and extend the Bayesian network code in the code repository to
provide for creation and evaluation of decision networks and the
calculation of information value.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_20"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_20.md"><code>ex_20.md</code></a> in the repo.</p>

## Exercise 16.20
<!-- question -->
Consider a student who has the choice to buy or not buy a textbook for a
course. We’ll model this as a decision problem with one Boolean decision
node, $B$, indicating whether the agent chooses to buy the book, and two
Boolean chance nodes, $M$, indicating whether the student has mastered
the material in the book, and $P$, indicating whether the student passes
the course. Of course, there is also a utility node, $U$. A certain
student, Sam, has an additive utility function: 0 for not buying the
book and -\$100 for buying it; and \$2000 for passing the course and 0
for not passing. Sam’s conditional probability estimates are as follows:
$$\begin{array}{ll}
P(p|b,m) = 0.9              & P(m|b) = 0.9       \\
P(p|b, \lnot m) = 0.5       & P(m|\lnot b) = 0.7 \\
P(p|\lnot b, m) = 0.8       & \\
P(p|\lnot b, \lnot m) = 0.3 & \\
\end{array}$$<br>

You might think that $P$ would be independent of $B$ given
$M$, But this course has an open-book final—so having the book helps.<br>

1.  Draw the decision network for this problem.<br>

2.  Compute the expected utility of buying the book and of not
    buying it.
<br>
3.  What should Sam do?
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_21"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_21.md"><code>ex_21.md</code></a> in the repo.</p>

## Exercise 16.21
<!-- question -->
This exercise completes the analysis of the
airport-siting problem in Figure <a class="insideBookFigRef" target="_blank" href="https://aimacode.github.io/aima-exercises/figures/airport-id-figure.png">airport-id-figure</a><br>.

1.  Provide reasonable variable domains, probabilities, and utilities
    for the network, assuming that there are three possible sites.<br>

2.  Solve the decision problem.<br>

3.  What happens if changes in technology mean that each aircraft
    generates half the noise?<br>

4.  What if noise avoidance becomes three times more important?<br>

5.  Calculate the VPI for ${AirTraffic}$, ${Litigation}$, and
    ${Construction}$ in your model.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_22"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_22.md"><code>ex_22.md</code></a> in the repo.</p>

## Exercise 16.22
<!-- question -->
(Adapted from Pearl [<a class="paperRef" title="" href="">Pearl:1988</a>].) A used-car
buyer can decide to carry out various tests with various costs (e.g.,
kick the tires, take the car to a qualified mechanic) and then,
depending on the outcome of the tests, decide which car to buy. We will
assume that the buyer is deciding whether to buy car $c_1$, that there
is time to carry out at most one test, and that $t_1$ is the test of
$c_1$ and costs \$50.<br>

A car can be in good shape (quality $q^+$) or bad shape (quality $q^-$),
and the tests might help indicate what shape the car is in. Car $c_1$
costs \$1,500, and its market value is $\$2,000$ if it is in good shape; if
not, $\$700$ in repairs will be needed to make it in good shape. The buyer’s
estimate is that $c_1$ has a 70% chance of being in good shape.<br>

1.  Draw the decision network that represents this problem.<br>

2.  Calculate the expected net gain from buying $c_1$, given no test.<br>

3.  Tests can be described by the probability that the car will pass or
    fail the test given that the car is in good or bad shape. We have
    the following information:<br>

    $P({pass}(c_1,t_1) | q^+(c_1)) = {0.8}$<br>

    $P({pass}(c_1,t_1) | q^-(c_1)) = {0.35}$<br>

    Use Bayes’ theorem to calculate the probability that the car will pass (or fail) its test and hence the probability that it is in good (or bad) shape given each possible test outcome.<br>

4.  Calculate the optimal decisions given either a pass or a fail, and
    their expected utilities.<br>

5.  Calculate the value of information of the test, and derive an
    optimal conditional plan for the buyer.<br>
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---

<a id="ex_23"></a>

<p>Open or edit <a href="../../exercises/ch16/ex_23.md"><code>ex_23.md</code></a> in the repo.</p>

## Exercise 16.23
<!-- question -->
Recall the definition of <i>value of
information</i> in Section <a class="sectionRef" title="" class="sectionRef" href="">VPI-section</a>.<br>

1.  Prove that the value of information is nonnegative and
    order independent.<br>

2.  Explain why it is that some people would prefer not to get some
    information—for example, not wanting to know the sex of their baby
    when an ultrasound is done.<br>

3.  A function $f$ on sets is <b>submodular</b> if, for any element $x$ and any sets $A$
    and $B$ such that $A\subseteq B$, adding $x$ to $A$ gives a greater
    increase in $f$ than adding $x$ to $B$:
    $$A\subseteq B \Rightarrow (f(A \cup \{x\}) - f(A)) \geq (f(B\cup \{x\}) - f(B))\ .$$
    Submodularity captures the intuitive notion of <i>diminishing
    returns</i>. Is the value of information, viewed as a function
    $f$ on sets of possible observations, submodular? Prove this or find
    a counterexample.
<!-- /question -->
<!-- answer -->

<!-- /answer -->

---
