class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0];
        let maxProfit = 0;

        for (let sellPrice of prices) {
            maxProfit = Math.max(maxProfit, sellPrice - minBuy);
            minBuy = Math.min(minBuy, sellPrice);
        }

        return maxProfit;
    }
}


