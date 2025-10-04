# [Maximum Product Subarray](https://neetcode.io/problems/maximum-product-subarray?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an integer array <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code>, find a <strong>subarray</strong> that has the largest product within the array and return it.</p>
<p style="font-size: 17px;">A <strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</p>
<p style="font-size: 17px;">You can assume the output will fit into a <strong>32-bit</strong> integer.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">4</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">2</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= nums.length &lt;= 1000</code></li>
<li><code class="hljs language-abnf" style="font-size: 14.5px;">-10 &lt;= nums[i] &lt;= 10</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where  <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to find the product for every subarray and then return the maximum among all the products. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n ^ 2)</code> approach. Can you think of a better way? Maybe you should think of a dynamic programming approach.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Try to identify a pattern by finding the maximum product for an array with two elements and determining what values are needed when increasing the array size to three. Perhaps you only need two values when introducing a new element.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We maintain both the minimum and maximum product values and update them when introducing a new element by considering three cases: starting a new subarray, multiplying with the previous max product, or multiplying with the previous min product. The max product is updated to the maximum of these three, while the min product is updated to the minimum. We also track a global max product for the result. This approach is known as Kadane's algorithm.
    </p>
</details></div></div><!----><!---->