
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("dec:", str);
        let strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] != "#") {
                j++;
            }
            let word = str.slice(j, endIndex);
            j++;
            let endIndex = j + Number(str[i]);
            strs.push(word);
    }
        return encoded;
        console.log("enc:", encoded);
        
        }
            encoded += str.length + "#" + str;
        for (let str of strs) {
    encode(strs) {
        let encoded = '';
     * @returns {string}
     */
    /**
     * @param {string[]} strs
class Solution {

