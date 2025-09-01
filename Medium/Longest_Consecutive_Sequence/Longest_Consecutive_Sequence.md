# [Longest Consecutive Sequence](https://neetcode.io/problems/longest-consecutive-sequence?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an array of integers <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code>, return <em>the length</em> of the longest consecutive sequence of elements that can be formed.</p>
<p style="font-size: 17px;">A <em>consecutive sequence</em> is a sequence of elements in which each element is exactly <code class="hljs language-undefined" style="font-size: 14.5px;">1</code> greater than the previous element. The elements do <em>not</em> have to be consecutive in the original array.</p>
<p style="font-size: 17px;">You must write an algorithm that runs in <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">20</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">10</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">4</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The longest consecutive sequence is <code class="hljs language-csharp" style="font-size: 14.5px;"><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span></code>.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">0</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">7</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= nums.length &lt;= 1000</code></li>
<li><code class="hljs language-parser3" style="font-size: 14.5px;">-10^9 &lt;= nums[i] &lt;= 10^9</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution as good or better than <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to consider every element from the array as the start of the sequence and count the length of the sequence formed with that starting element. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> solution. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Is there any way to identify the start of a sequence? For example, in <code class="hljs language-csharp" style="font-size: 14.5px;"><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">10</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">11</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">12</span><span class="token punctuation" style="font-size: 14.5px;">]</span></code>, only <code class="hljs language-undefined" style="font-size: 14.5px;">1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">10</code> are the beginning of a sequence. Instead of trying to form a sequence for every number, we should only consider numbers like <code class="hljs language-undefined" style="font-size: 14.5px;">1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">10</code>.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can consider a number <code class="hljs language-dart" style="font-size: 14.5px;">num</code> as the start of a sequence if and only if <code class="hljs language-dart" style="font-size: 14.5px;">num <span class="token operator" style="font-size: 14.5px;">-</span> <span class="token number" style="font-size: 14.5px;">1</span></code> does not exist in the given array. We iterate through the array and only start building the sequence if it is the start of a sequence. This avoids repeated work. We can use a hash set for <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> lookups by converting the array to a hash set.
    </p>
</details></div></div><!----><!---->