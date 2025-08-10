# [Contains Duplicate](https://neetcode.io/problems/duplicate-integer?list=neetcode150)

<!----><div class="my-article-component-container ng-star-inserted"><div><p style="font-size: 17px;">Given an integer array <code class="hljs language-ebnf" style="font-size: 14.5px;">nums</code>, return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">true</span></code> if any value appears <strong>more than once</strong> in the array, otherwise return <code class="hljs language-java" style="font-size: 14.5px;"><span class="token boolean" style="font-size: 14.5px;">false</span></code>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">true</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<br>

<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> nums <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">3</span><span class="token punctuation" style="font-size: 14.5px;">,</span> <span class="token number" style="font-size: 14.5px;">4</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token boolean" style="font-size: 14.5px;">false</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to check every element against every other element in the array. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> solution. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    Is there a way to check if an element is a duplicate without comparing it to every other element? Maybe there's a data structure that is useful here.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can use a hash data structure like a hash set or hash map to store elements we've already seen. This will allow us to check if an element is a duplicate in constant time.
    </p>
</details></div></div><!----><!---->