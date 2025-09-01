# [Valid Palindrome](https://neetcode.io/problems/is-palindrome?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given a string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code>, return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">true</span></code> if it is a <strong>palindrome</strong>, otherwise return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">false</span></code>.</p>
<p style="font-size: 17px;">A <strong>palindrome</strong> is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.</p>
<p style="font-size: 17px;"><strong>Note:</strong> Alphanumeric characters consist of letters <code class="hljs language-css" style="font-size: 14.5px;"><span class="token punctuation" style="font-size: 14.5px;">(</span>A-Z<span class="token punctuation" style="font-size: 14.5px;">,</span> a-z<span class="token punctuation" style="font-size: 14.5px;">)</span></code> and numbers <code class="hljs language-clojure" style="font-size: 14.5px;">(0-9)</code>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"Was it a car or a cat I saw?"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">true</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"tab a cat"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">false</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: "tabacat" is not a palindrome.</p>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= s.length &lt;= 1000</code></li>
<li><code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> is made up of only printable ASCII characters.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of the input string.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to create a copy of the string, reverse it, and then check for equality. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> solution with extra space. Can you think of a way to do this without <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Can you find the logic by observing the definition of pallindrome or from the brute force solution? 
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    A palindrome string is a string that is read the same from the start as well as from the end. This means the character at the start should match the character at the end at the same index. We can use the two pointer algorithm to do this efficiently.
    </p>
</details></div></div><!----><!---->