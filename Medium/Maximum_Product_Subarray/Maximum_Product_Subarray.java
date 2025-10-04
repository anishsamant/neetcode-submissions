class Solution {
    public int maxProduct(int[] nums) {
        int maxProdSub = nums[0];
        int currProd = 1;
        for (int num : nums) {
            currProd *= num;
            if (currProd < num) {
                currProd = num;
            }
            maxProdSub = Math.max(maxProdSub, currProd);
        }

        return maxProdSub;
    }
}


