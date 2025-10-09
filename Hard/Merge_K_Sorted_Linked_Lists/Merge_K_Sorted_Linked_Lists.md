# [Merge K Sorted Linked Lists](https://neetcode.io/problems/merge-k-sorted-linked-lists?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">You are given an array of <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> linked lists <code class="hljs language-ebnf" style="font-size: 14.5px;">lists</code>, where each list is sorted in ascending order.</p>
<p style="font-size: 17px;">Return the <strong>sorted</strong> linked list that is the result of merging all of the individual linked lists.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> lists <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> lists <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> lists <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= lists.length &lt;= 1000</code></li>
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= lists[i].length &lt;= 100</code></li>
<li><code class="hljs language-abnf" style="font-size: 14.5px;">-1000 &lt;= lists[i][j] &lt;= 1000</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution as good or better than <code class="hljs language-reasonml" style="font-size: 14.5px;">O(n * k)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> is the total number of lists and <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the total number of nodes across all lists.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute-force solution would involve storing all <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> nodes in an array, sorting them, and converting the array back into a linked list, resulting in an <code class="hljs language-stylus" style="font-size: 14.5px;">O(nlogn)</code> time complexity. Can you think of a better way? Perhaps consider leveraging the idea behind merging two sorted linked lists. 
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    We can merge two sorted linked lists without using any extra space. To handle <code class="hljs language-ebnf" style="font-size: 14.5px;">k</code> sorted linked lists, we can iteratively merge each linked list with a resultant merged list. How can you implement this?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We iterate through the list array with index <code class="hljs language-css" style="font-size: 14.5px;">i</code>, starting at <code class="hljs language-abnf" style="font-size: 14.5px;">i = 1</code>. We merge the linked lists using <code class="hljs language-reasonml" style="font-size: 14.5px;">mergeTwoLists(lists[i], lists[i - 1])</code>, which returns the head of the merged list. This head is stored in <code class="hljs language-css" style="font-size: 14.5px;">lists[i]</code>, and the process continues. Finally, the merged list is obtained at the last index, and we return its head.
    </p>
</details></div></div><!----><!---->