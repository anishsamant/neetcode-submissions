            for (let c of str) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            let count = new Array(26).fill(0);
            let key = count.join(',');
            if (!res.has(key)) {
                res.set(key,[]);
            }
            let value = res.get(key);
            value.push(str);
        for (let str of strs) {
        let res = new Map();
     */
    groupAnagrams(strs) {
     * @param {string[]} strs
     * @return {string[][]}
class Solution {
    /**
            res.set(key,  value);
        }

        return Array.from(res.values());
    }
}


