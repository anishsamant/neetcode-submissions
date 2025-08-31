class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = new Map();
        let freq = new Array(nums.length + 1);
        for (let i = 0; i < freq.length; i++) {
