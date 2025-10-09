class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let myMap  = new Map();
        let res = 0, l = 0;
        for (let i = 0; i < s.length; i++) {
            if (myMap.has(s[i])) {
                l = Math.max(myMap.get(s[i]) + 1, l);
            }

            myMap.set(s[i], i);
            res = Math.max(res, i - l + 1);
        }

        return res;
    }
}


