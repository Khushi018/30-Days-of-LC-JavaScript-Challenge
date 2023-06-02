<h2><a href="https://leetcode.com/problems/counter-ii/">2665. Counter II</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Write a function&nbsp;<code style="user-select: auto;">createCounter</code>. It should accept an initial integer&nbsp;<code style="user-select: auto;">init</code>. It should return an object with three functions.</p>

<p style="user-select: auto;">The three functions are:</p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">increment()</code>&nbsp;increases&nbsp;the current value by 1 and then returns it.</li>
	<li style="user-select: auto;"><code style="user-select: auto;">decrement()</code>&nbsp;reduces the current value by 1 and then returns it.</li>
	<li style="user-select: auto;"><code style="user-select: auto;">reset()</code>&nbsp;sets the current value to&nbsp;<code style="user-select: auto;">init</code>&nbsp;and then returns it.</li>
</ul>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> init = 5, calls = ["increment","reset","decrement"]
<strong style="user-select: auto;">Output:</strong> [6,5,4]
<strong style="user-select: auto;">Explanation:</strong>
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> init = 0, calls = ["increment","increment","decrement","reset","reset"]
<strong style="user-select: auto;">Output:</strong> [1,2,1,0,0]
<strong style="user-select: auto;">Explanation:</strong>
const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">-1000 &lt;= init &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;">total calls not to exceed 1000</code></li>
</ul>
</div>