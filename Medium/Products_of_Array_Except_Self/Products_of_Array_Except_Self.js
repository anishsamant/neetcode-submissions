class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefixProduct = [];
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            prefixProduct[i] = product;
            product *= nums[i];
        }
        console.log(prefixProduct);

        let suffixProduct = [];
        product = 1;
        for (let i = nums.length - 1; i >=0; i--) {
            suffixProduct[i] = product;
            product *= nums[i];
        }
        console.log(suffixProduct);

        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            ans.push(prefixProduct[i] * suffixProduct[i]);
        }
        
        return ans;
    }
}


