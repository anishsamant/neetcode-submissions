# [Maximum Subarray](https://neetcode.io/problems/maximum-subarray?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an array of integers <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code>, find the subarray with the largest sum and return the sum.</p>
<p style="font-size: 17px;">A <strong>subarray</strong> is a contiguous non-empty sequence of elements within an array.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">8</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The subarray [4,-2,2,1,-1,4] has the largest sum 8.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= nums.length &lt;= 1000</code></li>
<li><code class="hljs language-abnf" style="font-size: 14.5px;">-1000 &lt;= nums[i] &lt;= 1000</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force approach would be to compute the sum of every subarray and return the maximum among them. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> approach. Can you think of a better way? Maybe you should consider a dynamic programming-based approach.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Instead of calculating the sum for every subarray, try maintaining a running sum. Maybe you should consider whether extending the previous sum or starting fresh with the current element gives a better result. Can you think of a way to track this efficiently?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We use a variable <code class="hljs language-ebnf" style="font-size: 14.5px;">curSum</code> to track the sum of the elements. At each index, we have two choices: either add the current element to <code class="hljs language-ebnf" style="font-size: 14.5px;">curSum</code> or start a new subarray by resetting <code class="hljs language-ebnf" style="font-size: 14.5px;">curSum</code> to the current element. Maybe you should track the maximum sum at each step and update the global maximum accordingly.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 4</summary>
    <p style="font-size: 17px;">
    This algorithm is known as Kadane's algorithm.
    </p>
</details></div></div><!----><!---->