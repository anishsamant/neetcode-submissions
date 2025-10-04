class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let currMax = 1, currMin = 1, maxProdSub = nums[0];
        for (let num of nums) {
            let tmp = num * currMax;
            currMax = Math.max(Math.max(tmp, num * currMin), num);
            currMin = Math.min(Math.min(tmp, num * currMin), num);
            maxProdSub = Math.max(maxProdSub, currMax);
        }

        return maxProdSub;
    }
}


