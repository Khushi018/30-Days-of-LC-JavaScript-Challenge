<h2><a href="https://leetcode.com/problems/function-composition/">2629. Function Composition</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Given an array of functions&nbsp;<code style="user-select: auto;">[f<span style="font-size: 10.8333px; user-select: auto;">1</span>, f<sub style="user-select: auto;">2</sub>, f<sub style="user-select: auto;">3</sub>,&nbsp;..., f<sub style="user-select: auto;">n</sub>]</code>, return&nbsp;a new function&nbsp;<code style="user-select: auto;">fn</code>&nbsp;that is the <strong style="user-select: auto;">function&nbsp;composition</strong> of the array of functions.</p>

<p style="user-select: auto;">The&nbsp;<strong style="user-select: auto;">function&nbsp;composition</strong>&nbsp;of&nbsp;<code style="user-select: auto;">[f(x), g(x), h(x)]</code>&nbsp;is&nbsp;<code style="user-select: auto;">fn(x) = f(g(h(x)))</code>.</p>

<p style="user-select: auto;">The&nbsp;<strong style="user-select: auto;">function&nbsp;composition</strong>&nbsp;of an empty list of functions is the&nbsp;<strong style="user-select: auto;">identity function</strong>&nbsp;<code style="user-select: auto;">f(x) = x</code>.</p>

<p style="user-select: auto;">You may assume each&nbsp;function&nbsp;in the array accepts one integer as input&nbsp;and returns one integer as output.</p>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4
<strong style="user-select: auto;">Output:</strong> 65
<strong style="user-select: auto;">Explanation:</strong>
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x = 1
<strong style="user-select: auto;">Output:</strong> 1000
<strong style="user-select: auto;">Explanation:</strong>
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 3:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> functions = [], x = 42
<strong style="user-select: auto;">Output:</strong> 42
<strong style="user-select: auto;">Explanation:</strong>
The composition of zero functions is the identity function</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;"><font face="monospace" style="user-select: auto;">-1000 &lt;= x &lt;= 1000</font></code></li>
	<li style="user-select: auto;"><code style="user-select: auto;"><font face="monospace" style="user-select: auto;">0 &lt;= functions.length &lt;= 1000</font></code></li>
	<li style="user-select: auto;"><font face="monospace" style="user-select: auto;"><code style="user-select: auto;">all functions accept and return a single integer</code></font></li>
</ul>
</div>