# [Two Sum](https://neetcode.io/problems/two-integer-sum?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an array of integers <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code> and an integer <code class="hljs language-aspectj" style="font-size: 14.5px;">target</code>, return the indices <code class="hljs language-css" style="font-size: 14.5px;">i</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> such that <code class="hljs language-inform7" style="font-size: 14.5px;">nums[i] + nums[j] == target</code> and <code class="hljs language-erlang-repl" style="font-size: 14.5px;">i != j</code>.</p>
<p style="font-size: 17px;">You may assume that <em>every</em> input has exactly one pair of indices <code class="hljs language-css" style="font-size: 14.5px;">i</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> that satisfy the condition.</p>
<p style="font-size: 17px;">Return the answer with the smaller index first. </p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> 
nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> target <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token number" style="font-size: 14.5px;">7</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: <code class="hljs language-apache" style="font-size: 14.5px;">nums[0] + nums[1] == 7</code>, so we return <code class="hljs language-csharp" style="font-size: 14.5px;"><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span></code>.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> target <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token number" style="font-size: 14.5px;">10</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> target <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token number" style="font-size: 14.5px;">10</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">2 &lt;= nums.length &lt;= 1000</code></li>
<li><code class="hljs language-dns" style="font-size: 14.5px;">-10,000,000 &lt;= nums[i] &lt;= 10,000,000</code></li>
<li><code class="hljs language-dns" style="font-size: 14.5px;">-10,000,000 &lt;= target &lt;= 10,000,000</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space, where n is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to check every pair of numbers in the array. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> solution. Can you think of a better way? Maybe in terms of mathematical equation?
    </p>
</details>

<br>
<details class="hint-accordion">
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Given, We need to find indices <code class="hljs language-css" style="font-size: 14.5px;">i</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> such that <code class="hljs language-erlang-repl" style="font-size: 14.5px;">i != j</code> and <code class="hljs language-inform7" style="font-size: 14.5px;">nums[i] + nums[j] == target</code>. Can you rearrange the equation and try to fix any index to iterate on? 
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
     we can iterate through nums with index <code class="hljs language-css" style="font-size: 14.5px;">i</code>. Let <code class="hljs language-abnf" style="font-size: 14.5px;">difference = target - nums[i]</code> and check if <code class="hljs language-arcade" style="font-size: 14.5px;">difference</code> exists in the hash map as we iterate through the array, else store the current element in the hashmap with its index and continue. We use a hashmap for <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> lookups.
    </p>
</details></div></div><!----><!---->