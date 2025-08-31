class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = new Map();
        for (let str of strs) {
            let count = new Array(26).fill(0);
            for (let c of str) {
