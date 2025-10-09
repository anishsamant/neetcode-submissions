class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> myMap = new HashMap<>();
        int res = 0;
        int l = 0;
        for (int i = 0; i < s.length(); i++) {
            if (myMap.containsKey(s.charAt(i))) {
                l = Math.max(myMap.get(s.charAt(i)) + 1, l);
            }

            myMap.put(s.charAt(i), i);
            res = Math.max(res, i - l + 1);
        }

        return res;
    }
}


