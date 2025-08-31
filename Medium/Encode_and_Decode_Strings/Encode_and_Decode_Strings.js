
    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("dec:", str);
        let strs = [];
        let i = 0;
        while (i < str.length) {
    }
        return encoded;
        console.log("enc:", encoded);
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            j++;
            let endIndex = j + Number(str[i]);
            let word = str.slice(j, endIndex);
            strs.push(word);
            i = endIndex;
            encoded += str.length + "#" + str;
        }
        
        }

        return strs;
    }

