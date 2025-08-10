class Solution {
    /**
     * @param {number[]} nums here
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let mySet = new Set();
        for (let num of nums) {
            mySet.add(num);
        }

        return nums.length != mySet.size;
    }
}


