# [Top K Frequent Elements](https://neetcode.io/problems/top-k-elements-in-list?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an integer array <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code> and an integer <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code>, return the <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> most frequent elements within the array.</p>
<p style="font-size: 17px;">The test cases are generated such that the answer is always <strong>unique</strong>.</p>
<p style="font-size: 17px;">You may return the output in <strong>any order</strong>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> k <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token number" style="font-size: 14.5px;">2</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">7</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">7</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> k <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token number" style="font-size: 14.5px;">1</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">7</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= nums.length &lt;= 10^4</code>.</li>
<li><code class="hljs language-abnf" style="font-size: 14.5px;">-1000 &lt;= nums[i] &lt;= 1000</code></li>
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= k &lt;= number of distinct elements in nums</code>.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A naive solution would be to count the frequency of each number and then sort the array based on each element’s frequency. After that, we would select the top <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> frequent elements. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(nlogn)</code> solution. Though this solution is acceptable, can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Can you think of an algorithm which involves grouping numbers based on their frequency?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    Use the bucket sort algorithm to create <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> buckets, grouping numbers based on their frequencies from <code class="hljs language-undefined" style="font-size: 14.5px;">1</code> to <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code>. Then, pick the top <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> numbers from the buckets, starting from <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> down to <code class="hljs language-undefined" style="font-size: 14.5px;">1</code>.
    </p>
</details></div></div><!----><!---->