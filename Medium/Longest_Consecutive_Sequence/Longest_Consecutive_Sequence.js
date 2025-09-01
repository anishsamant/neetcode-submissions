class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let mySet = new Set(nums);
        let res = 0;

        for (let num of mySet) {
            if (!mySet.has(num - 1)) {
                let l = 1;
                while (mySet.has(num + l)) {
                    l++;
                }
                res = Math.max(res, l);
            }
        }

        return res;
    }
}


