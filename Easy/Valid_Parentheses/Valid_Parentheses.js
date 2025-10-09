class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let closeBracket = {
            ')': '(',
            ']': '[',
            '}': '{'
        }

        for (let c of s) {
            if (closeBracket[c]) {
                if (stack.length > 0 && stack[stack.length - 1] == closeBracket[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length == 0;
    }
}


