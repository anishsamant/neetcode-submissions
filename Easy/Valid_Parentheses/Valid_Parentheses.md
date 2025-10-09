# [Valid Parentheses](https://neetcode.io/problems/validate-parentheses?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">You are given a string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> consisting of the following characters: <code class="hljs language-java" style="font-size: 14.5px;"><span class="token char" style="font-size: 14.5px;">'('</span></code>, <code class="hljs language-java" style="font-size: 14.5px;"><span class="token char" style="font-size: 14.5px;">')'</span></code>, <code class="hljs language-java" style="font-size: 14.5px;"><span class="token char" style="font-size: 14.5px;">'{'</span></code>, <code class="hljs language-java" style="font-size: 14.5px;"><span class="token char" style="font-size: 14.5px;">'}'</span></code>, <code class="hljs language-scheme" style="font-size: 14.5px;">'['</code> and <code class="hljs language-java" style="font-size: 14.5px;"><span class="token char" style="font-size: 14.5px;">']'</span></code>.</p>
<p style="font-size: 17px;">The input string <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> is valid if and only if:</p>
<ol style="font-size: 17px;">
<li>Every open bracket is closed by the same type of close bracket.</li>
<li>Open brackets are closed in the correct order.</li>
<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>
<p style="font-size: 17px;">Return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">true</span></code> if <code class="hljs language-ebnf" style="font-size: 14.5px;">s</code> is a valid string, and <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">false</span></code> otherwise.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"[]"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">true</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"([{}])"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">true</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;"><strong>Example 3:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> s <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token string" style="font-size: 14.5px;">"[(])"</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">false</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: The brackets are not closed in the correct order.</p>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= s.length &lt;= 1000</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the length of the given string. 
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to continuously remove valid brackets until no more can be removed. If the remaining string is empty, return true; otherwise, return false. This would result in an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> solution. Can we think of a better approach? Perhaps a data structure could help.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    We can use a stack to store characters. Iterate through the string by index. For an opening bracket, push it onto the stack. If the bracket is a closing type, check for the corresponding opening bracket at the top of the stack. If we don't find the corresponding opening bracket, immediately return false. Why does this work?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    In a valid parenthesis expression, every opening bracket must have a corresponding closing bracket. The stack is used to process the valid string, and it should be empty after the entire process. This ensures that there is a valid substring between each opening and closing bracket.
    </p>
</details></div></div><!----><!---->