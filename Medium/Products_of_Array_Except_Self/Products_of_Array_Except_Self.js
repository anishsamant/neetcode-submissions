
        product = 1;
        for (let i = nums.length - 1; i >=0; i--) {
            suffixProduct[i] = product;
            product *= nums[i];
        let suffixProduct = [];
        }
        console.log(suffixProduct);

        console.log(prefixProduct);
        let ans = [];
        for (let i = 0; i < nums.length; i++) {
            prefixProduct[i] = product;
            product *= nums[i];
        }
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
    productExceptSelf(nums) {
        let prefixProduct = [];

