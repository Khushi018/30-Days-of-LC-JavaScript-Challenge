<h2><a href="https://leetcode.com/problems/create-hello-world-function/">2667. Create Hello World Function</a></h2><h3>Easy</h3><hr><div style="user-select: auto;">Write a function&nbsp;<code style="user-select: auto;">createHelloWorld</code>.&nbsp;It should return a new function that always returns&nbsp;<code style="user-select: auto;">"Hello World"</code>.
<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 1:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> args = []
<strong style="user-select: auto;">Output:</strong> "Hello World"
<strong style="user-select: auto;">Explanation:</strong>
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
</pre>

<p style="user-select: auto;"><strong class="example" style="user-select: auto;">Example 2:</strong></p>

<pre style="user-select: auto;"><strong style="user-select: auto;">Input:</strong> args = [{},null,42]
<strong style="user-select: auto;">Output:</strong> "Hello World"
<strong style="user-select: auto;">Explanation:</strong>
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
</pre>

<p style="user-select: auto;">&nbsp;</p>
<p style="user-select: auto;"><strong style="user-select: auto;">Constraints:</strong></p>

<ul style="user-select: auto;">
	<li style="user-select: auto;"><code style="user-select: auto;">0 &lt;= args.length &lt;= 10</code></li>
</ul>
</div>