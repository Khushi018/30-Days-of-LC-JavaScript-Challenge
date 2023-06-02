<h2><a href="https://leetcode.com/problems/counter/">2620. Counter</a></h2><h3>Easy</h3><hr><div style="user-select: auto;"><p style="user-select: auto;">Given an integer&nbsp;<code style="user-select: auto;">n</code>,&nbsp;return a <code style="user-select: auto;">counter</code> function. This <code style="user-select: auto;">counter</code> function initially returns&nbsp;<code style="user-select: auto;">n</code>&nbsp;and then returns 1 more than the previous value every subsequent time it is called (<code style="user-select: auto;">n</code>, <code style="user-select: auto;">n + 1</code>, <code style="user-select: auto;">n + 2</code>, etc).</p>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> 
n = 10 
["call","call","call"]
<strong style="user-select: auto;">Output:</strong> [10,11,12]
<strong style="user-select: auto;">Explanation: 
</strong>counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> 
n = -2
["call","call","call","call","call"]
<strong style="user-select: auto;">Output:</strong> [-2,-1,0,1,2]
<strong style="user-select: auto;">Explanation:</strong> counter() initially returns -2. Then increases after each sebsequent call.
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">-1000<sup style="user-select: auto;">&nbsp;</sup>&lt;= n &lt;= 1000</code></li>
	<li style="user-select: auto;"><code style="user-select: auto;">At most 1000 calls to counter() will be made</code></li>
</ul>
</div>