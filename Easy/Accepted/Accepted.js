     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let myMap = new Map();
            if (myMap.has(target - nums[i])) {
        }
        for (let i = 0; i < nums.length; i++) {
                return [myMap.get(target - nums[i]), i];
            }
            myMap.set(nums[i], i);

        return [];
    }
}

    /**

