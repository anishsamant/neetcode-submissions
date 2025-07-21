# [Group Anagrams](https://neetcode.io/problems/anagram-groups?list=neetcode150)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given an array of strings <code class="hljs language-ebnf" style="font-size: 14.5px;">strs</code>, group all <em>anagrams</em> together into sublists. You may return the output in <strong>any order</strong>.</p>
<p style="font-size: 17px;">An <strong>anagram</strong> is a string that contains the exact same characters as another string, but the order of the characters can be different.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> strs <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"act"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"pots"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"tops"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"cat"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"stop"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"hat"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"hat"</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"act"</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token string" style="font-size: 14.5px;">"cat"</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"stop"</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token string" style="font-size: 14.5px;">"pots"</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token string" style="font-size: 14.5px;">"tops"</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> strs <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"x"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"x"</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> strs <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">""</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">""</span><span class="token punctuation" style="font-size: 14.5px;">]</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= strs.length &lt;= 1000</code>.</li>
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= strs[i].length &lt;= 100</code></li>
<li><code class="hljs language-css" style="font-size: 14.5px;">strs[i]</code> is made up of lowercase English letters.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-reasonml" style="font-size: 14.5px;">O(m * n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(m)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">m</code> is the number of strings and <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of the longest string.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A naive solution would be to sort each string and group them using a hash map. This would be an <code class="hljs language-reasonml" style="font-size: 14.5px;">O(m * nlogn)</code> solution. Though this solution is acceptable, can you think of a better way without sorting the strings?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    By the definition of an anagram, we only care about the frequency of each character in a string. How is this helpful in solving the problem?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can simply use an array of size <code class="hljs language-stylus" style="font-size: 14.5px;">O(26)</code>, since the character set is <code class="hljs language-css" style="font-size: 14.5px;">a</code> through <code class="hljs language-ebnf" style="font-size: 14.5px;">z</code> (<code class="hljs language-undefined" style="font-size: 14.5px;">26</code> continuous characters), to count the frequency of each character in a string. Then, we can use this array as the key in the hash map to group the strings.
    </p>
</details></div></div><!----><!---->