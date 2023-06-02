<h2><a href="https://leetcode.com/problems/apply-transform-over-each-element-in-array/">2635. Apply Transform Over Each Element in Array</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Given an integer array&nbsp;<code style="user-select: auto;">arr</code>&nbsp;and a mapping function&nbsp;<code style="user-select: auto;">fn</code>, return&nbsp;a new array with a transformation applied to each element.</p>

<p style="user-select: auto;">The returned array should be created such that&nbsp;<code style="user-select: auto;">returnedArray[i] = fn(arr[i], i)</code>.</p>

<p style="user-select: auto;">Please solve it without the built-in <code style="user-select: auto;">Array.map</code> method.</p>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [1,2,3], fn = function plusone(n) { return n + 1; }
<strong style="user-select: auto;">Output:</strong> [2,3,4]
<strong style="user-select: auto;">Explanation:</strong>
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
<strong style="user-select: auto;">Output:</strong> [1,3,5]
<strong style="user-select: auto;">Explanation:</strong> The function increases each value by the index it resides in.
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 3:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [10,20,30], fn = function constant() { return 42; }
<strong style="user-select: auto;">Output:</strong> [42,42,42]
<strong style="user-select: auto;">Explanation:</strong> The function always returns 42.
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= arr.length &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;"><font face="monospace" style="user-select: auto;">-10<sup style="user-select: auto;">9</sup>&nbsp;&lt;= arr[i] &lt;= 10<sup style="user-select: auto;">9</sup></font></code></li>
	<li style="user-select: auto;"><font face="monospace" style="user-select: auto;"><code style="user-select: auto;">fn returns a number</code></font></li>
</ul>
</div>