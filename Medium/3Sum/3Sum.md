# [3Sum](https://neetcode.io/problems/three-integer-sum?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an integer array <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code>, return all the triplets <code class="hljs language-inform7" style="font-size: 14.5px;">[nums[i], nums[j], nums[k]]</code> where <code class="hljs language-inform7" style="font-size: 14.5px;">nums[i] + nums[j] + nums[k] == 0</code>, and the indices <code class="hljs language-css" style="font-size: 14.5px;">i</code>, <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> are all distinct.</p>
<p style="font-size: 17px;">The output should <em>not</em> contain any duplicate triplets. You may return the output and the triplets in <strong>any order</strong>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token operator" style="font-size: 14.5px;">-</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation:<br><code class="hljs language-apache" style="font-size: 14.5px;">nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.</code><br><code class="hljs language-apache" style="font-size: 14.5px;">nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.</code><br><code class="hljs language-apache" style="font-size: 14.5px;">nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.</code><br>The distinct triplets are <code class="hljs language-angelscript" style="font-size: 14.5px;">[-1,0,1]</code> and <code class="hljs language-subunit" style="font-size: 14.5px;">[-1,-1,2]</code>.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The only possible triplet does not sum up to 0.</p>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The only possible triplet sums up to 0.</p>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">3 &lt;= nums.length &lt;= 1000</code></li>
<li><code class="hljs language-parser3" style="font-size: 14.5px;">-10^5 &lt;= nums[i] &lt;= 10^5</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to check for every triplet in the array. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^3)</code> solution. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Can you think of an algorithm after sorting the input array? What can we observe by rearranging the given equation in the problem?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
     We can iterate through nums with index <code class="hljs language-css" style="font-size: 14.5px;">i</code> and get <code class="hljs language-stylus" style="font-size: 14.5px;">nums[i] = -(nums[j] + nums[k])</code> after rearranging the equation, making <code class="hljs language-inform7" style="font-size: 14.5px;">-nums[i] = nums[j] + nums[k]</code>. For each index <code class="hljs language-css" style="font-size: 14.5px;">i</code>, we should efficiently  calculate the <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> pairs without duplicates. Which algorithm is suitable to find <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> pairs?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 4</summary>
    <p style="font-size: 17px;">
    To efficiently find the <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> pairs, we run the two pointer approach on the elements to the right of index <code class="hljs language-css" style="font-size: 14.5px;">i</code> as the array is sorted. When we run two pointer algorithm, consider <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> as pointers (<code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> is at left, <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> is at right) and <code class="hljs language-abnf" style="font-size: 14.5px;">target = -nums[i]</code>, if the current sum <code class="hljs language-css" style="font-size: 14.5px;">num[j] + nums[k] &lt; target</code> then we need to increase the value of current sum by incrementing <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> pointer. Else if the current sum <code class="hljs language-css" style="font-size: 14.5px;">num[j] + nums[k] &gt; target</code> then we should decrease the value of current sum by decrementing <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> pointer. How do you deal with duplicates? 
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 5</summary>
    <p style="font-size: 17px;">
     When the current sum <code class="hljs language-inform7" style="font-size: 14.5px;">nums[j] + nums[k] == target</code> add this pair to the result. We can move <code class="hljs language-ebnf" style="font-size: 14.5px;">j</code> or <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> pointer until <code class="hljs language-mipsasm" style="font-size: 14.5px;">j &lt; k</code> and the pairs are repeated. This ensures that no duplicate pairs are added to the result.
    </p>
</details></div></div><!----><!---->