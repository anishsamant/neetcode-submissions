class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSubSum = nums[0];
        let currSum = 0;

        for (let num of nums) {
            currSum += num;
            if (currSum < num) {
                currSum = num;
            }
            maxSubSum = Math.max(maxSubSum, currSum);
        }

        return maxSubSum;
    }
}


