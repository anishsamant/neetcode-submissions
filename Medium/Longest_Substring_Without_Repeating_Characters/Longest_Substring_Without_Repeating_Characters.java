class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> myMap = new HashMap<>();
        int res = 0;
        for (int i = 0; i < s.length(); i++) {
            int diff = 0;
            if (myMap.containsKey(s.charAt(i))) {
                diff = i - myMap.get(s.charAt(i));
            }

            myMap.put(s.charAt(i), i);
            res = Math.max(res, diff);
        }

        return res;
    }
}


