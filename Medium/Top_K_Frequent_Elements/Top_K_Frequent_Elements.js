    topKFrequent(nums, k) {
        let myMap = new Map();
        let freq = new Array(nums.length + 1);
        for (let i = 0; i < freq.length; i++) {
            freq[i] = [];
        }
        for (let num of nums) {
            myMap.set(num, (myMap.get(num) || 0) + 1);
        }
        for (const entry of myMap.entries()) {
            freq[entry[1]].push(entry[0]);
        }

        let res = [];
        let count = 0;
        for (let i = freq.length - 1; i > 0 && count < k; i--) {
            for (let val of freq[i]) {
                res.push(val);
                if (++count == k) {
                    return res;
                }
            }
        }

     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
        return res;
    }
}
    /**
class Solution {


