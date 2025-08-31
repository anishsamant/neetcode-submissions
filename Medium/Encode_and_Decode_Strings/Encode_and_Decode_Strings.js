
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = [];
        let i = 0;
        while (i < str.length) {
    }
        return encoded;
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            j++;
            let endIndex = j + l;
            let word = str.slice(j, endIndex);
            strs.push(word);
            i = endIndex;
        }

        }
        
        return strs;
        let encoded = '';
        for (let str of strs) {
            encoded += str.length + "#" + str;
            let l = parseInt(str.slice(i, j));

