     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = new Map();
        for (let num of nums) {
            myMap.set(num, (myMap.get(num) || 0) + 1);
        }

        for (const entry of myMap.entries()) {
        let freq = new Array(nums.length + 1);

        for (let i = 0; i < freq.length; i++) {
            freq[i] = [];
        }
            freq[entry[1]].push(entry[0]);
        }


