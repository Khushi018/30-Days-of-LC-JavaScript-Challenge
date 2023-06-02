<h2><a href="https://leetcode.com/problems/filter-elements-from-array/">2634. Filter Elements from Array</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Given an integer array&nbsp;<code style="user-select: auto;">arr</code>&nbsp;and a filtering&nbsp;function&nbsp;<code style="user-select: auto;">fn</code>,&nbsp;return&nbsp;a new array with a fewer or equal number of elements.</p>

<p style="user-select: auto;">The returned array should only contain elements where&nbsp;<code style="user-select: auto;">fn(arr[i],&nbsp;i)</code>&nbsp;evaluated to a truthy value.</p>

<p style="user-select: auto;">Please solve it without the built-in <code style="user-select: auto;">Array.filter</code> method.</p>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [0,10,20,30], fn = function greaterThan10(n) { return n &gt; 10; }
<strong style="user-select: auto;">Output:</strong> [20,30]
<strong style="user-select: auto;">Explanation:</strong>
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
<strong style="user-select: auto;">Output:</strong> [1]
<strong style="user-select: auto;">Explanation:</strong>
fn can also accept the index of each element
In this case, the function removes elements not at index 0
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 3:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
<strong style="user-select: auto;">Output:</strong> [-2,0,1,2]
<strong style="user-select: auto;">Explanation:</strong>
Falsey values such as 0 should be filtered out
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= arr.length &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;"><font face="monospace" style="user-select: auto;">-10<sup style="user-select: auto;">9</sup>&nbsp;&lt;= arr[i] &lt;= 10<sup style="user-select: auto;">9</sup></font></code></li>
</ul>
</div>