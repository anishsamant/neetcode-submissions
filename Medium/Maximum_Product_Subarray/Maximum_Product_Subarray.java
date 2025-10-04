class Solution {
    public int maxProduct(int[] nums) {
        int currMax = 1, currMin = 1, maxProdSub = nums[0];
        for (int num : nums) {
            int tmp = num * currMax;
            currMax = Math.max(Math.max(tmp, num * currMin), num);
            currMin = Math.min(Math.min(tmp, num * currMin), num);
            maxProdSub = Math.max(maxProdSub, currMax);
        }

        return maxProdSub;
    }
}


