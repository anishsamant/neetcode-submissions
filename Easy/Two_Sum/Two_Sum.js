     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let myMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (myMap.has(target - nums[i])) {
        }
        let ans = new Array(2);
                return [myMap.get(target - nums[i]), i];
            }
            myMap.set(nums[i], i);

        return [];
    }
}


