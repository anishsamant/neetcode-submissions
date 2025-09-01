# [Best Time to Buy and Sell Stock](https://neetcode.io/problems/buy-and-sell-crypto?list=blind75)

<!----><div class="my-article-component-container"><div><p style="font-size: 17px;">You are given an integer array <code class="hljs language-ebnf" style="font-size: 14.5px;">prices</code> where <code class="hljs language-css" style="font-size: 14.5px;">prices[i]</code> is the price of NeetCoin on the <code class="hljs language-ebnf" style="font-size: 14.5px;">ith</code> day.</p>
<p style="font-size: 17px;">You may choose a <strong>single day</strong> to buy one NeetCoin and choose a <strong>different day in the future</strong> to sell it.</p>
<p style="font-size: 17px;">Return the maximum profit you can achieve. You may choose to <strong>not make any transactions</strong>, in which case the profit would be <code class="hljs language-undefined" style="font-size: 14.5px;">0</code>.</p>
<p style="font-size: 17px;"><strong>Example 1:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> prices <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">10</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">6</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">7</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">1</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">6</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: Buy <code class="hljs language-apache" style="font-size: 14.5px;">prices[1]</code> and sell <code class="hljs language-apache" style="font-size: 14.5px;">prices[4]</code>, <code class="hljs language-abnf" style="font-size: 14.5px;">profit = 7 - 1 = 6</code>.</p>
<p style="font-size: 17px;"><strong>Example 2:</strong></p>
<div class="code-toolbar"><pre class="language-java" tabindex="0"><code class="hljs language-java" style="font-size: 14.5px;"><span class="token class-name" style="font-size: 14.5px;">Input</span><span class="token operator" style="font-size: 14.5px;">:</span> prices <span class="token operator" style="font-size: 14.5px;">=</span> <span class="token punctuation" style="font-size: 14.5px;">[</span><span class="token number" style="font-size: 14.5px;">10</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">8</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">7</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">5</span><span class="token punctuation" style="font-size: 14.5px;">,</span><span class="token number" style="font-size: 14.5px;">2</span><span class="token punctuation" style="font-size: 14.5px;">]</span>

<span class="token class-name" style="font-size: 14.5px;">Output</span><span class="token operator" style="font-size: 14.5px;">:</span> <span class="token number" style="font-size: 14.5px;">0</span>
</code></pre><div class="toolbar"><div class="toolbar-item"></div></div></div>
<p style="font-size: 17px;">Explanation: No profitable transactions can be made, thus the max profit is 0.</p>
<p style="font-size: 17px;"><strong>Constraints:</strong></p>
<ul style="font-size: 17px;">
<li><code class="hljs language-basic" style="font-size: 14.5px;">1 &lt;= prices.length &lt;= 100</code></li>
<li><code class="hljs language-basic" style="font-size: 14.5px;">0 &lt;= prices[i] &lt;= 100</code></li>
</ul>
<br>
<br>
<details class="hint-accordion">  
    <summary>Recommended Time &amp; Space Complexity</summary>
    <p style="font-size: 17px;">
    You should aim for a solution with <code class="hljs language-stylus" style="font-size: 14.5px;">O(n)</code> time and <code class="hljs language-stylus" style="font-size: 14.5px;">O(1)</code> space, where <code class="hljs language-ebnf" style="font-size: 14.5px;">n</code> is the size of the input array.
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 1</summary>
    <p style="font-size: 17px;">
    A brute force solution would be to iterate through the array with index <code class="hljs language-css" style="font-size: 14.5px;">i</code>, considering it as the day to buy, and trying all possible options for selling it on the days to the right of index <code class="hljs language-css" style="font-size: 14.5px;">i</code>. This would be an <code class="hljs language-stylus" style="font-size: 14.5px;">O(n^2)</code> solution. Can you think of a better way?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 2</summary>
    <p style="font-size: 17px;">
    You should buy at a price and always sell at a higher price. Can you iterate through the array with index <code class="hljs language-css" style="font-size: 14.5px;">i</code>, considering it as either the buying price or the selling price?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 3</summary>
    <p style="font-size: 17px;">
    We can iterate through the array with index <code class="hljs language-css" style="font-size: 14.5px;">i</code>, considering it as the selling value. But what value will it be optimal to consider as buying point on the left of index <code class="hljs language-css" style="font-size: 14.5px;">i</code>?
    </p>
</details>

<br>
<details class="hint-accordion">  
    <summary>Hint 4</summary>
    <p style="font-size: 17px;">
    We are trying to maximize <code class="hljs language-abnf" style="font-size: 14.5px;">profit = sell - buy</code>. If the current <code class="hljs language-css" style="font-size: 14.5px;">i</code> is the sell value, we want to choose the minimum buy value to the left of <code class="hljs language-css" style="font-size: 14.5px;">i</code> to maximize the profit. The result will be the maximum profit among all. However, if all profits are negative, we can return <code class="hljs language-undefined" style="font-size: 14.5px;">0</code> since we are allowed to skip doing transaction. 
    </p>
</details></div></div><!----><!---->