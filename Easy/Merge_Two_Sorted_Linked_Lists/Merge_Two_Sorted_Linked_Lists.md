# [Merge Two Sorted Linked Lists](https://neetcode.io/problems/merge-two-sorted-linked-lists?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">You are given the heads of two sorted linked lists <code class="hljs language-undefined" style="font-size: 14.5px;">list1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">list2</code>.</p>
<p style="font-size: 17px;">Merge the two lists into one <strong>sorted</strong> linked list and return the head of the new sorted linked list.</p>
<p style="font-size: 17px;">The new list should be made up of nodes from <code class="hljs language-undefined" style="font-size: 14.5px;">list1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">list2</code>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<p style="font-size: 17px;"><img src="https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/51adfea9-493a-4abb-ece7-fbb359d1c800/public" alt=""></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> list1 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> list2 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> list1 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> list2 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> list1 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span> list2 <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= The length of the each list &lt;= 100</code>.</li>
<li><code class="hljs language-abnf" style="font-size: 14.5px;">-100 &lt;= Node.val &lt;= 100</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-reasonml" style="font-size: 14.5px;">O(n + m)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of <code class="hljs language-undefined" style="font-size: 14.5px;">list1</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">m</code> is the length of <code class="hljs language-undefined" style="font-size: 14.5px;">list2</code>.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would involve storing the values of both linked lists in an array, sorting the array, and then converting it back into a linked list. This approach would use <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> extra space and is trivial. Can you think of a better way? Perhaps the sorted nature of the lists can be leveraged.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    We create a dummy node to keep track of the head of the resulting linked list while iterating through the lists. Using <code class="hljs language-undefined" style="font-size: 14.5px;">l1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">l2</code> as iterators for <code class="hljs language-undefined" style="font-size: 14.5px;">list1</code> and <code class="hljs language-undefined" style="font-size: 14.5px;">list2</code>, respectively, we traverse both lists node by node to build a final linked list that is also sorted. How do you implement this?
</p></details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    For example, consider <code class="hljs language-ini" style="font-size: 14.5px;">list1 = [1, 2, 3]</code> and <code class="hljs language-ini" style="font-size: 14.5px;">list2 = [2, 3, 4]</code>. While iterating through the lists, we move the pointers by comparing the node values from both lists. We link the next pointer of the iterator to the node with the smaller value. For instance, when <code class="hljs language-abnf" style="font-size: 14.5px;">l1 = 1</code> and <code class="hljs language-abnf" style="font-size: 14.5px;">l2 = 2</code>, since <code class="hljs language-nginx" style="font-size: 14.5px;">l1 &lt; l2</code>, we point the iterator's next pointer to <code class="hljs language-undefined" style="font-size: 14.5px;">l1</code> and proceed.
    </p>
    <p style="font-size: 17px;"></p>
</details></div></div><!----><!---->