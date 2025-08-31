class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        for (let num of nums) {
            product *= num;
        }
        let product = 1;

        let ans = [];
        for (let num of nums) {
        }

            if (num == 0) ans.push(productWithoutZero);
            else ans.push(product/num);
        return ans;
        let productWithoutZero = 1;
            if (num != 0) {
                productWithoutZero *= num;
            }

