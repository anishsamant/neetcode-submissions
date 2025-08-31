# [Encode and Decode Strings](https://neetcode.io/problems/string-encode-and-decode?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.</p>
<p style="font-size: 17px;">Please implement <code class="hljs language-ebnf" style="font-size: 14.5px;">encode</code> and <code class="hljs language-arcade" style="font-size: 14.5px;">decode</code></p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"neet"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"code"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"love"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"you"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span><span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"neet"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"code"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"love"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"you"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"we"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"say"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">":"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"yes"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token string" style="font-size: 14.5px;">"we"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"say"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">":"</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token string" style="font-size: 14.5px;">"yes"</span><span class="token punctuation" style="font-size: 14.5px;">]</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= strs.length &lt; 100</code></li>
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= strs[i].length &lt; 200</code></li>
<li><code class="hljs language-css" style="font-size: 14.5px;">strs[i]</code> contains only UTF-8 characters.</li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(m)</code> time for each <code class="hljs language-stylus" style="font-size: 14.5px;">encode()</code> and <code class="hljs language-stylus" style="font-size: 14.5px;">decode()</code> call and <code class="hljs language-reasonml" style="font-size: 14.5px;">O(m+n)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">m</code>  is the sum of lengths of all the strings and <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the number of strings.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A naive solution would be to use a non-ascii character as a delimiter. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Try to encode and decode the strings using a smart approach based on the lengths of each string. How can you differentiate between the lengths and any numbers that might be present in the strings?
    </p>
</details>

<br>
<details class="hint-accordion" open="">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can use an encoding approach where we start with a number representing the length of the string, followed by a separator character (let's use <code class="hljs language-python" style="font-size: 14.5px;"><span class="token comment" style="font-size: 14.5px;">#</span></code> for simplicity), and then the string itself. To decode, we read the number until we reach a <code class="hljs language-python" style="font-size: 14.5px;"><span class="token comment" style="font-size: 14.5px;">#</span></code>, then use that number to read the specified number of characters as the string.
    </p>
</details></div></div><!----><!---->