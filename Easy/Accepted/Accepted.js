class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s == null && t == null) return true;
        if (s == null || t == null || s.length != t.length) return false;

        let myArray = new Array(26).fill(0);
        for (let i = 0; i < s.length; i++) {
            myArray[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
            myArray[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
        }

        console.log(myArray);
        for (let count of myArray) {

