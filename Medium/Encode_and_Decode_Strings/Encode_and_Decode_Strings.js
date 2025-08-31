class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for (let str of strs) {
            encoded += str.length + "#" + str;
        }
