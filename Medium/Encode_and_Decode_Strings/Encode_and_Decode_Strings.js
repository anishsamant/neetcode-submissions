class Solution {
    encode(strs) {
        let encoded = '';
        for (let str of strs) {
            encoded += str.length + "#" + str;
        }
        
        return encoded;
    }

    decode(str) {
        let strs = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let l = parseInt(str.slice(i, j));
            j++;
            let endIndex = j + l;
            let word = str.slice(j, endIndex);
            strs.push(word);
            i = endIndex;
        }

        return strs;
    }
}


