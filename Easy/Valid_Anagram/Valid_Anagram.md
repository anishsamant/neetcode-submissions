# [Valid Anagram](https://neetcode.io/problems/is-anagram?list=neetcode150)

<!----><div class="my-article-component-container ng-star-inserted"><div><p style="font-size: 17px;">Given two strings <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">t</code>, return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">true</span></code> if the two strings are anagrams of each other, otherwise return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">false</span></code>.</p>
<p style="font-size: 17px;">An <strong>anagram</strong> is a string that contains the exact same characters as another string, but the order of the characters can be different.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"racecar"</span><span class="token punctuation" style="font-size: 14.5px;">,</span> t <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"carrace"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">true</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"jar"</span><span class="token punctuation" style="font-size: 14.5px;">,</span> t <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"jam"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">false</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">t</code> consist of lowercase English letters.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-reasonml" style="font-size: 14.5px;">O(n + m)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of the string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> and <code class="hljs language-ebnf" style="font-size: 14.5px;">m</code> is the length of the string <code class="hljs language-ebnf" style="font-size: 14.5px;">t</code>.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to sort the given strings and check for their equality. This would be an <code class="hljs language-reasonml" style="font-size: 14.5px;">O(nlogn + mlogm)</code> solution. Though this solution is acceptable, can you think of a better way without sorting the given strings?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    By the definition of the anagram, we can rearrange the characters. Does the order of characters matter in both the strings? Then what matters?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can just consider maintaining the frequency of each character. We can do this by having two separate hash tables for the two strings. Then, we can check whether the frequency of each character in string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> is equal to that in string <code class="hljs language-ebnf" style="font-size: 14.5px;">t</code> and vice versa.
    </p>
</details></div></div><!----><!---->