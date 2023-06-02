<h2><a href="https://leetcode.com/problems/array-reduce-transformation/">2626. Array Reduce Transformation</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Given an integer array&nbsp;<code style="user-select: auto;">nums</code>, a reducer function&nbsp;<code style="user-select: auto;">fn</code>, and an initial value&nbsp;<code style="user-select: auto;">init</code>, return a&nbsp;<strong style="user-select: auto;">reduced</strong>&nbsp;array.</p>

<p style="user-select: auto;">A&nbsp;<strong style="user-select: auto;">reduced</strong>&nbsp;array is created by applying the following operation:&nbsp;<code style="user-select: auto;">val = fn(init, nums[0])</code>, <code style="user-select: auto;">val&nbsp;= fn(val, nums[1])</code>,&nbsp;<code style="user-select: auto;">val&nbsp;= fn(val, nums[2])</code>,&nbsp;<code style="user-select: auto;">...</code>&nbsp;until every element in the array has been processed. The final value of&nbsp;<code style="user-select: auto;">val</code>&nbsp;is returned.</p>

<p style="user-select: auto;">If the length of the array is 0, it should return&nbsp;<code style="user-select: auto;">init</code>.</p>

<p style="user-select: auto;">Please solve it without using the built-in <code style="user-select: auto;">Array.reduce</code> method.</p>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
<strong style="user-select: auto;">Output:</strong> 10
<strong style="user-select: auto;">Explanation:</strong>
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
<strong style="user-select: auto;">Output:</strong> 130
<strong style="user-select: auto;">Explanation:</strong>
initially, the value is init=100.
(100) + nums[0]^2 = 101
(101) + nums[1]^2 = 105
(105) + nums[2]^2 = 114
(114) + nums[3]^2 = 130
The final answer is 130.
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 3:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
<strong style="user-select: auto;">Output:</strong> 25
<strong style="user-select: auto;">Explanation:</strong> For empty arrays, the answer is always init.
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= nums.length &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= nums[i] &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= init &lt;= 1000</code></li>
</ul>
</div>