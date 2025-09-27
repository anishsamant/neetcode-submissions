class Solution {
    public int maxProfit(int[] prices) {
        while (j < prices.length) {
    }
            if (prices[i] < prices[j]) {
        }
        int maxProfit = 0;
        int i = 0, j = 1;
                int profit = prices[j] - prices[i];
            } else {
                maxProfit = Math.max(maxProfit, profit);
                i = j;
            }
}
            j++;

        return maxProfit;


