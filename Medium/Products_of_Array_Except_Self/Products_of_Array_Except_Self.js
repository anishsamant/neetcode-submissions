
    productExceptSelf(nums) {
        let product = 1;
        let productSkippingZero = 1;
        let zeroCounter = 0;
        for (let num of nums) {
            product *= num;
            if (num == 0) {
                zeroCounter++;
            } else {
                productSkippingZero *= num;
            }
        }

        if (zeroCounter > 1) {
            return Array(nums.length).fill(0);
        }

        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                ans[i] = productSkippingZero;
            } else {
                ans[i] = product / nums[i];
            }
        }

        return ans;
    }
}
class Solution {


