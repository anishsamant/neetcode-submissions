class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> myMap = new HashMap<>();
        int res = 0;
        int l = 0;
        for (int i = 0; i < s.length(); i++) {
            if (myMap.containsKey(s.charAt(i))) {
                l = myMap.get(s.charAt(i)) + 1;
            }

            myMap.put(s.charAt(i), i);
            res = Math.max(res, i - l + 1);
            System.out.println(res);
        }

        return res;
    }
}


