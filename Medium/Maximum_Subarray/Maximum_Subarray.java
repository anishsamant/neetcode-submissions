class Solution {
    public int maxSubArray(int[] nums) {
        int maxSubSum = nums[0];
        int sum = 0;
        for (int num : nums) {
            sum += num;
            if (sum < num) {
                maxSubSum = Math.max(maxSubSum, num);
                sum = num;
            }
            maxSubSum = Math.max(maxSubSum, sum);
        }

        return Math.max(maxSubSum, sum);
    }
}


