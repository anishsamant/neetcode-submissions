class Solution {
    public boolean isValid(String s) {
        Stack<Character> myStack = new Stack<>();
        Map<Character, Character> closeBracket = new HashMap<>();
        closeBracket.put(')', '(');
        closeBracket.put(']', '[');
        closeBracket.put('}', '{');

        for (char c : s.toCharArray()) {
            if (closeBracket.containsKey(c)) {
                if (!myStack.isEmpty() && myStack.peek() == closeBracket.get(c)) {
                    myStack.pop();
                } else {
                    return false;
                }
            } else {
                myStack.push(c);
            }
        }

        return myStack.isEmpty();

    }
}


