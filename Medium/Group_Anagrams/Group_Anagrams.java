class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        for (String s : strs) {
    }
            for (char c : s.toCharArray()) {
        }
                count[c - 'a']++;
            }
            int[] count = new int[26];
            String key = Arrays.toString(count);
            if (!myMap.containsKey(key)) {
        Map<String, List<String>> myMap = new HashMap<>();
                myMap.put(key, new ArrayList<>());
            }
}
            myMap.get(key).add(s);

        return new ArrayList<>(myMap.values());


