# [Longest Substring Without Repeating Characters](https://neetcode.io/problems/longest-substring-without-duplicates?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Given a string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code>, find the <em>length of the longest substring</em> without duplicate characters.</p>
<p style="font-size: 17px;">A <strong>substring</strong> is a contiguous sequence of characters within a string.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"zxyzxyz"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">3</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The string "xyz" is the longest without duplicate characters.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"xxxx"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">1</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= s.length &lt;= 1000</code></li>
<li><code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> may consist of printable ASCII characters.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(m)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of the string and <code class="hljs language-ebnf" style="font-size: 14.5px;">m</code> is the number of unique characters in the string.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to try the substring starting at index <code class="hljs language-css" style="font-size: 14.5px;">i</code> and try to find the maximum length we can form without duplicates by starting at that index. we can use a hash set to detect duplicates in <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> time. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    We can use the sliding window algorithm. Since we only care about substrings without duplicate characters, the sliding window can help us maintain valid substring with its dynamic nature.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can iterate through the given string with index <code class="hljs language-ebnf" style="font-size: 14.5px;">r</code> as the right boundary and <code class="hljs language-ebnf" style="font-size: 14.5px;">l</code> as the left boundary of the window. We use a hash set to check if the character is present in the window or not. When we encounter a character at index <code class="hljs language-ebnf" style="font-size: 14.5px;">r</code> that is already present in the window, we shrink the window by incrementing the <code class="hljs language-ebnf" style="font-size: 14.5px;">l</code> pointer until the window no longer contains any duplicates. Also, we remove characters from the hash set that are excluded from the window as the <code class="hljs language-ebnf" style="font-size: 14.5px;">l</code> pointer moves. At each iteration, we update the result with the length of the current window, <code class="hljs language-apache" style="font-size: 14.5px;">r - l + 1</code>, if this length is greater than the current result.
    </p>
</details></div></div><!----><!---->